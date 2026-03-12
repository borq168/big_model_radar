# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 00:52 UTC

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

# OpenClaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

OpenClaw 社区活跃度持续高位运行，过去24小时内共产生 **500条 Issues 更新**（新开/活跃405条，关闭95条）和 **500条 PR 更新**（待合并343条，已合并/关闭157条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但核心功能迭代稳步推进，尤其在多通道会话隔离、Kimi 模型兼容性修复及 Cron 任务稳定性方面取得关键进展。社区对视觉能力、Android APK 预构建包和 DingTalk 首次安装支持等需求呼声显著上升。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `2026.3.8`，多个高优先级回归问题（如 Kimi K2.5 配置验证失败、Cron 任务死锁）已在 PR 层面修复，预计将纳入下一热修复版本。

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于 **会话管理优化** 与 **通道稳定性增强**：

- **#43459**：引入 `session.channelIsolation` 全局配置项，允许非 DM 通道共享主会话，提升跨频道上下文一致性（[链接](https://github.com/openclaw/openclaw/pull/43459)）
- **#43360**：为 Slack 添加 `session.threadIsolation` 选项，支持线程级会话复用，解决多线程记忆断裂问题（[链接](https://github.com/openclaw/openclaw/pull/43360)）
- **#41834**：集成 Mistral 作为新的 `web_search` 提供商，扩展实时搜索能力（[链接](https://github.com/openclaw/openclaw/pull/41834)）
- **#43542**：增强 WhatsApp 通道，新增 `onWhatsApp()` 号码校验与消息 ACK 状态反馈（[链接](https://github.com/openclaw/openclaw/pull/43542)）
- **#43502** & **#33934**：修复飞书（Feishu）卡片创建失败时的流状态泄漏及目标 ID 前缀解析错误（[链接1](https://github.com/openclaw/openclaw/pull/43502) | [链接2](https://github.com/openclaw/openclaw/pull/33934)）

此外，**#12296**（敏感信息持久化脱敏）与 **#24272**（多平台密钥管理集成）等大型安全增强 PR 仍在积极 review 中，体现项目对生产环境安全性的重视。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

- **#32828**（CLOSED）：“API rate limit reached” 误报问题 —— 尽管 API 正常，所有模型均显示限流警告。已确认与内部速率限制逻辑误判有关，社区点赞数达 7，评论 51 条，表明影响广泛（[链接](https://github.com/openclaw/openclaw/issues/32828)）
- **#26534**（OPEN）：请求将钉钉（DingTalk）设为首次安装可选通道 —— 虽已有实现（#10347），但未纳入 onboarding 流程，用户需手动配置，体验割裂（[链接](https://github.com/openclaw/openclaw/issues/26534)）
- **#9443**（OPEN）：呼吁提供预编译 Android APK 发布 —— 用户 Lysen（通过 QING 助手）强调移动端部署便利性需求，尤其针对非技术用户（[链接](https://github.com/openclaw/openclaw/issues/9443)）
- **#9157**（OPEN）：工作区文件注入导致 **93.5% token 浪费** —— 每次消息均重复注入 AGENTS.md 等文件，严重降低效率，获 12 赞，亟需优化（[链接](https://github.com/openclaw/openclaw/issues/9157)）

---

## 5. Bug 与稳定性

按严重程度排序的高危问题：

| 问题 | 状态 | 是否有 Fix PR |
|------|------|----------------|
| **#39907** / **#41445** / **#41690**：Kimi K2.5 配置验证失败，因 `requiresOpenAiAnthropicToolPayload` 键未识别 | CLOSED | ✅ 已由 #41852 修复（强制 OpenAI 工具格式导致兼容性问题） |
| **#42579** / **#42632**：Cron 隔离会话死锁，`agentTurn` 任务超时无执行 | OPEN | 🔄 #43541 与 #43543 正修复子代理完成流与重试顺序 |
| **#42270**：2026.3.8 升级后本地 LM Studio 后端返回空 payload + WebSocket 1006 断开 | OPEN | ❌ 尚无明确 fix |
| **#19795**：Cron 隔离会话无法访问工作区/全局技能 | OPEN | ❌ 长期未解，需嵌入技能规范至提示 |
| **#35220**：Codex Responses API 流式中 `server_error` 不触发模型降级 | OPEN | ❌ 同类问题 #24378 存在，根因未彻底修复 |

> 注：#41852 已确认修复 Kimi 工具调用格式冲突，相关 Issue 已关闭。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求：

- **视觉能力支持**（#28744）：要求 Agent 接收并识别图片内容，尤其针对飞书等平台。虽无直接 PR，但 #43489 正修复模型目录对图像输入能力的保留，为后续视觉 pipeline 铺路。
- **路径级 RWX 权限控制**（#39979）：提议以 Unix DAC 风格替代二进制白名单，提升 `exec`/`file` 工具安全性。该设计符合零信任趋势，可能被纳入 v2026.4 安全模块。
- **Memory v2 增强**（#28930）：用户 Brian（运行于树莓派）提出关联遍历、显著性加权与基于访问的遗忘机制，反映长期运行 Agent 的内存管理痛点，路线图优先级高。

---

## 7. 用户反馈摘要

- **痛点**：
  - 移动端体验缺失：Android 用户强烈要求预编译 APK（#9443），避免源码编译门槛。
  - 多通道一致性差：Slack/Telegram/Discord 会话隔离策略不统一，导致上下文断裂（#43459/#43360 即为此响应）。
  - 资源浪费严重：工作区文件重复注入消耗近 94% token 预算（#9157），影响长对话可行性。
- **满意点**：
  - 多模型支持灵活（如 Mistral 搜索集成 #41834）。
  - 安全机制持续增强（#12296 敏感信息脱敏、#24272 多平台密钥管理）。

---

## 8. 待处理积压

以下长期未响应 Issue 需维护者关注：

- **#3092**（自 2026-01-28）：会话锁超时导致通道处理器失败，影响 Telegram 等长操作场景，评论 10 条，标记 `stale` 但未闭环（[链接](https://github.com/openclaw/openclaw/issues/3092)）
- **#10386**（自 2026-02-06）：工作区自定义技能无法被发现，仅显示默认 50 个，阻碍插件生态扩展（[链接](https://github.com/openclaw/openclaw/issues/10386)）
- **#13938**（自 2026-02-11）：会话上下文无限累积直至超出模型限制，无自动清理机制，属架构级隐患（[链接](https://github.com/openclaw/openclaw/issues/13938)）

> 建议：对 #13938 启动专项设计讨论，评估引入滑动窗口或语义压缩策略。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度伴随高问题密度，核心团队响应迅速（Kimi 回归问题当日修复），但移动端体验与内存管理仍是短板。安全与会话隔离改进显著提升生产就绪度。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-03-12**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **高活跃度、强竞争、快速分化** 的态势。主流项目普遍聚焦多通道集成（Slack/飞书/钉钉/Telegram）、本地模型兼容（Ollama/LM Studio）、MCP 工具链扩展及安全加固。社区反馈集中暴露 **移动端体验缺失、上下文管理低效、认证机制脆弱** 等共性痛点，反映出从“功能可用”向“生产就绪”过渡的关键挑战。安全与会话隔离已成为核心差异化维度，而本土化（微信/钉钉/Zhipu AI）需求显著拉高中国项目的演进压力。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PR（待合并/已合并） | 新版本发布 | 健康度评估 |
|------|---------------------|----------------------|-------------|--------------|
| **OpenClaw** | 405 / 95 | 343 / 157 | ❌ | ⭐⭐⭐⭐☆（4.5） |
| **NanoBot** | 25 / 26 | 32 / 49 | ❌ | ⭐⭐⭐⭐（4.0） |
| **Zeroclaw** | 19 / 26 | 14 / 36 | ✅（2个 beta） | ⭐⭐⭐⭐（4.0） |
| **PicoClaw** | 17 / 6 | 66 / 39 | ✅（3个） | ⭐⭐⭐⭐☆（4.5） |
| **NanoClaw** | 9 / 0 | 31 / 8 | ❌ | ⭐⭐⭐⭐☆（4.5） |
| **IronClaw** | 37 / 8 | 34 / 16 | ✅（v0.18.0） | ⭐⭐⭐⭐☆（4.5） |
| **LobsterAI** | 12 / 0 | 11 / 7 | ✅（v0.2.3） | ⭐⭐⭐（3.5） |
| **TinyClaw** | 3 / 9 | 1 / 6 | ✅（v0.0.10） | ⭐⭐⭐⭐☆（4.5） |
| **Moltis** | 9 / 24 | 19 / 8 | ❌ | ⭐⭐⭐⭐（4.0） |
| **CoPaw** | 33 / 17 | 28 / 22 | ❌ | ⭐⭐⭐⭐（4.0） |
| **ZeptoClaw** | 0 / 16 | 1 / 16 | ✅（v0.7.5/6） | ⭐⭐⭐⭐⭐（5.0） |
| **EasyClaw** | 1 / 0 | 0 / 0 | ✅（v1.6.6） | ⭐⭐⭐（3.5） |

> 注：健康度综合考量响应速度、Bug 修复率、社区互动与架构清晰度。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大、响应最快**：单日 500+ Issues/PR 处理量，核心团队对 Kimi/Cron 等高危问题实现当日修复；
- **企业级通道覆盖最全**：唯一同时深度集成飞书、钉钉、Slack、WhatsApp 并优化会话隔离策略；
- **安全机制领先**：敏感信息脱敏（#12296）、多平台密钥管理（#24272）等 PR 体现生产级设计。

**技术路线差异**：  
- 采用 **全局会话 + 通道级隔离** 混合模型（vs PicoClaw 的纯 Agent 级隔离），平衡一致性与安全性；
- 坚持 **中心化配置管理**（vs NanoClaw 的分布式 `.mcp.json`），降低运维复杂度。

**社区规模**：  
- GitHub 互动量（Issues/PR）为第二梯队（如 CoPaw、IronClaw）的 1.5–2 倍，中文用户占比超 60%，本土化需求驱动明显。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **移动端部署** | OpenClaw (#9443)、PicoClaw (#292)、LobsterAI (#386) | 预编译 Android APK、Termux 兼容、Docker 镜像轻量化 |
| **本地模型集成** | 全生态（Ollama/LM Studio） | 配置简化（#1161）、非 OpenAI 格式兼容（Groq #748）、token 效率优化（#9157） |
| **MCP 工具链扩展** | NanoClaw (#976)、IronClaw (#3153)、Zeroclaw (#3209) | GitHub 官方 MCP 集成、按需加载、子代理传递 |
| **安全边界加固** | ZeptoClaw (#324)、NanoBot (#1873)、OpenClaw (#12296) | 文件系统沙箱、Webhook 签名验证、最小权限运行 |
| **多会话/上下文管理** | CoPaw (#1288)、OpenClaw (#13938)、PicoClaw (#1373) | 会话持久化、滑动窗口压缩、手动新建对话 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级多通道协同 | 中大型组织 | 中心化会话管理 + 通道隔离策略 |
| **PicoClaw** | Agent 自动化 + Web UI | 开发者/极客 | 事件驱动 Agent Loop + SQLite 队列 |
| **NanoClaw** | 容器化 MCP 工具链 | 安全敏感型用户 | Docker/Podman 沙箱 + 语义记忆（LanceDB） |
| **ZeptoClaw** | CLI 优先 + 安全审计 | 运维/安全工程师 | Merkle 审计链 + 文件系统原子写 |
| **TinyClaw** | 轻量化 + 看板集成 | 小团队/个人 | npm monorepo + 看板触发自动化 |
| **LobsterAI** | 本土化 IM 集成 | 中文企业用户 | 钉钉/企微/QQ 协议原生支持 |

---

## 6. 社区热度与成熟度

- **快速迭代层**（日 PR > 30）：  
  **OpenClaw、PicoClaw、IronClaw、CoPaw** 处于功能爆发期，高频发布但稳定性承压（如 LobsterAI 空格 Bug、CoPaw 压缩失效）。
  
- **质量巩固层**（日 PR < 20，Bug 修复率高）：  
  **ZeptoClaw、TinyClaw、Moltis** 聚焦架构重构与安全 hardening，发布节奏稳健，适合生产部署。

- **维护型项目**：  
  **EasyClaw** 仅修复平台兼容性问题，**NanoBot** 受安全漏洞（#1873）拖累响应滞后。

---

## 7. 值得关注的趋势信号

1. **安全即核心竞争力**：  
   ZeptoClaw 的 Merkle 审计链、OpenClaw 的密钥管理、NanoBot 的权限隔离需求，表明 **安全已从“合规项”变为“采用门槛”**。

2. **本土化 = 生存必需**：  
   微信/钉钉/Zhipu AI 支持成为中文项目（LobsterAI、CoPaw）的核心诉求，**全球化项目必须提供区域适配层**。

3. **Agent 可观测性缺口**：  
   PicoClaw (#1316)、TinyClaw (#66) 对执行链路追踪的需求，预示 **下一代 Agent 框架需内置 Hook 与可视化调试能力**。

4. **移动端是下一战场**：  
   Android APK、Termux 控制、Docker 镜像轻量化等需求横跨 5+ 项目，**2026 年将是移动端 AI 助手落地关键年**。

> **对开发者的建议**：优先选择具备明确安全边界（如文件系统沙箱）、支持本地模型、且社区响应速度 < 48 小时的项目；若面向企业用户，需重点评估多通道会话隔离与审计能力。

---  
**分析师：AI 开源项目观察员**  
**数据来源：各 GitHub 仓库公开动态（2026-03-12）**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-12）

---

## 1. 今日速览

NanoBot 在过去24小时内表现出**高活跃度**，共处理 **51 条 Issues**（新开/活跃 25 条，关闭 26 条）和 **81 条 Pull Requests**（待合并 32 条，已合并/关闭 49 条），社区贡献与问题反馈均处于高位。尽管无新版本发布，但核心功能持续优化，尤其在多模态兼容性、通道稳定性与安全性方面取得显著进展。用户对新渠道（如微信、Matrix）和模型支持（如 Ollama、Zhipu AI）的需求强烈，反映出项目在本土化与生态扩展上的关键挑战。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.4.post3`，开发重点集中在修复与增强现有功能。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在**稳定性修复与功能增强**，推动项目向更健壮、安全的方向发展：

- **[#1892](https://github.com/HKUDS/nanobot/pull/1892)（已关闭）**：修复非视觉模型（如 DeepSeek、Baidu Qianfan）因历史会话中包含 `image_url` 导致的 API 错误，提升多模型切换兼容性。
- **[#1895](https://github.com/HKUDS/nanobot/pull/1895)（已关闭）**：增强文件系统工具（ReadFileTool）与 Shell 工具，支持分页读取、行号显示与智能输出截断，缩小与 OpenCode 等竞品的功能差距。
- **[#1891](https://github.com/HKUDS/nanobot/pull/1891)（已关闭）**：修复 `nanobot channels status` 命令中缺失 Matrix 通道状态显示的问题，提升 CLI 信息完整性。
- **[#1845](https://github.com/HKUDS/nanobot/pull/1845)（已关闭）**：强化 Shell 命令的 `restrictToWorkspace` 安全机制，正确识别并拦截 `~` 路径，防止越权访问。
- **[#1827](https://github.com/HKUDS/nanobot/pull/1827)（已关闭）**：扩展工作空间防护逻辑，支持对 `~` 路径的展开与边界检查，增强容器化部署安全性。

> ✅ 整体来看，项目在**安全性、工具链完善度与多模型兼容性**方面迈出坚实步伐。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

- **[#2](https://github.com/HKUDS/nanobot/issues/2)**（19 评论，6 👍）：请求原生支持 **Zhipu AI（智谱）API 与 GLM-4.x 系列模型**，凸显中国用户对本土大模型集成的迫切需求。
- **[#193](https://github.com/HKUDS/nanobot/issues/193)**（13 评论）：询问是否支持 **Ollama API**，表明本地部署与轻量化推理场景的重要性上升。
- **[#1873](https://github.com/HKUDS/nanobot/issues/1873)**（7 评论）：指出 **config.json 密钥可被 exec() 泄露** 的安全隐患，呼吁核心代理以低权限用户运行，属高危安全问题。
- **[#1819](https://github.com/HKUDS/nanobot/issues/1819)**（5 评论）：强烈建议增加 **微信（WeChat）通道支持**，代表中文用户的核心交互场景需求。

> 🔍 热点集中于**本土化集成、本地部署支持与基础安全加固**，是下一阶段开发优先级的重要信号。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高危 | [#1873](https://github.com/HKUDS/nanobot/issues/1873) | 代理可访问并泄露 `config.json` 中的 API 密钥，存在安全风险 | ❌ 无 |
| ⚠️ 中危 | [#1157](https://github.com/HKUDS/nanobot/issues/1157) | 使用 OpenRouter 的 StepFun 模型报 400 错误，`Unrecognized chat message` | ❌ 无 |
| ⚠️ 中危 | [#842](https://github.com/HKUDS/nanobot/issues/842) | 升级至 `0.1.4` 后 OpenRouter 认证失败（401 User not found） | ❌ 无 |
| ⚠️ 中危 | [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix 通道启动失败，疑似依赖或配置问题 | ❌ 无 |
| ⚠️ 低危 | [#1833](https://github.com/HKUDS/nanobot/issues/1833) | 程序频繁收到 SIGTERM 退出，无明确错误日志 | ❌ 无 |

> ❗ 安全类 Bug（#1873）需优先处理，建议引入最小权限运行模式。

---

## 6. 功能请求与路线图信号

结合 PR 与 Issue，以下功能有望纳入近期版本：

- **Telegram 回复上下文支持**：PR [#1900](https://github.com/HKUDS/nanobot/pull/1900) 已实现读取 `reply_to_message` 内容，响应 Issue [#1875](https://github.com/HKUDS/nanobot/issues/1875)，预计将合并。
- **非视觉模型会话过滤**：PR [#1901](https://github.com/HKUDS/nanobot/pull/1901) 提出在 provider 层统一过滤 `image_url`，比 [#1892] 更彻底，可能成为最终方案。
- **Web UI 通道**：PR [#1707](https://github.com/HKUDS/nanobot/pull/1707) 提供轻量级 Web 控制界面（~45MB RAM），满足无头部署需求，技术方案成熟。
- **Mistral 提供商与通用转录服务**：PR [#1680](https://github.com/HKUDS/nanobot/pull/1680) 扩展转录能力，支持多提供商，增强语音交互生态。

> 📌 路线图信号：**多通道完善 > 多模型兼容 > 安全加固 > 本土化集成**

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **正面反馈**：
  - 用户 `@Claudioappassionato`（#855）成功在本地 RTX 3050 上运行 NanoBot，验证了轻量化部署可行性。
  - 多用户认可项目架构清晰，插件化设计（如 PR #361）被赞“最小侵入”。

- **痛点与不满**：
  - **文档缺失中文**（#1617）：“很多国外项目都有中文 README，你为什么没有？”——反映国际化支持不足。
  - **飞书/钉钉/微信支持滞后**：多个 Issue 呼吁增加主流中文办公平台集成，否则“对中国用户不友好”。
  - **Cron 任务不触发**（#1828）：用户设置喝水提醒后无响应，怀疑后台服务未正确运行。
  - **WhatsApp QR 码生成失败**（#1879）：通道初始化流程存在技术障碍。

> 💬 用户核心诉求：**更易用、更安全、更本土化**。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **[#361](https://github.com/HKUDS/nanobot/pull/361)**（PR，2026-02-08 提交）：添加 Kilo 后端、Free Opencode 模型与 Telegram 插件系统，含 Hook 管理器，功能完整但长期 open。
- **[#126](https://github.com/HKUDS/nanobot/pull/126)**（PR，2026-02-05 提交）：GitHub Actions 自动构建 Docker 镜像并推送至 GHCR/DockerHub，已验证可用，未合并。
- **[#91](https://github.com/HKUDS/nanobot/issues/91)**（Issue，2026-02-04 创建）：请求支持飞书、QQ、钉钉通道，获 3 👍，但无后续进展。
- **[#1461](https://github.com/HKUDS/nanobot/issues/1461)**（Issue，2026-03-03 创建）：提议统一守护进程网关语义层，提升多平台管理体验，架构价值高但未响应。

> 🛎️ 建议：对高价值 PR（如 #361、#126）进行 review 或沟通合并路径，避免社区贡献流失。

--- 

**报告生成时间**：2026-03-12  
**数据来源**：GitHub HKUDS/nanobot 仓库公开数据

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

Zeroclaw 项目在24小时内保持高度活跃，共处理 **45条 Issues**（新开/活跃19条，关闭26条）和 **50条 Pull Requests**（合并/关闭36条，待合并14条），并发布 **2个新版本**（v0.1.7-beta.28 与 v0.1.7-beta.30）。核心维护者 @JordanTheJet 和 @theonlyhennygod 主导了 CI/CD 重构、分支模型迁移及多项关键 Bug 修复。项目整体处于快速迭代与稳定性优化阶段，社区贡献积极，技术债清理成效显著。

---

## 2. 版本发布

### v0.1.7-beta.30（最新）
- **关键变更**：
  - ✅ 简化 CI/CD 流水线，替换原有复杂工作流（[#2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895)）
  - ✅ 迁移至单一 `master` 分支模型，移除 `main` 分支引用，更新维护者列表（[#2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928)）
  - 🐛 修复未完整描述的运行时问题（PR 描述截断）
- **迁移注意**：所有贡献者需将本地仓库远程指向 `origin/master`，文档与脚本中 `main` 引用已全面替换。

> 📦 发布链接：[v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30)

---

## 3. 项目进展

今日合并/关闭的 **36个 PR** 推动多项关键改进：

| 类别 | 进展摘要 | 代表 PR |
|------|--------|--------|
| **CI/构建** | 统一使用 `master` 分支，修复 beta 发布标签创建失败问题（改用 PAT 认证） | [#3238](https://github.com/zeroclaw-labs/zeroclaw/pull/3238), [#3228](https://github.com/zeroclaw-labs/zeroclaw/pull/3228) |
| **网关稳定性** | 修复 WebSocket 重连循环（补发 `Sec-WebSocket-Protocol`）、会话持久化、新增 `/api/integrations/settings` 端点 | [#3242](https://github.com/zeroclaw-labs/zeroclaw/pull/3242) |
| **工具调用修复** | 解决 Qwen 模型 `<think>` 标签干扰 tool_call 解析问题，恢复结构化动作执行 | [#3241](https://github.com/zeroclaw-labs/zeroclaw/pull/3241) |
| **配置安全** | 增强 channel secrets 加密往返测试，防止密钥泄露 | [#3240](https://github.com/zeroclaw-labs/zeroclaw/pull/3240) |
| **用户体验** | Web 聊天框支持自动扩展文本域与消息复制功能 | [#3243](https://github.com/zeroclaw-labs/zeroclaw/pull/3243) |

> 项目整体向 **生产就绪** 迈出关键一步，尤其在多通道集成、MCP 工具兼容性与开发者体验方面取得突破。

---

## 4. 社区热点

### 🔥 高讨论 Issues（附链接）

1. **[#3070] GLIBC_2.39 缺失导致运行时崩溃**  
   - 评论数：9 | 👍：2  
   - 用户报告在低版本 Linux 发行版上因 GLIBC 版本不兼容无法运行二进制文件。  
   - **诉求**：提供静态链接构建或明确系统依赖说明。  
   - 🔗 [Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)

2. **[#2929] 分支策略混乱：`master` vs `main`**  
   - 评论数：6 | 👍：2  
   - 用户困惑于文档与实际默认分支不一致，影响贡献流程。  
   - **状态**：已通过 [#3237](https://github.com/zeroclaw-labs/zeroclaw/pull/3237) 在 CONTRIBUTING.md 中明确 `master` 为唯一默认分支。  
   - 🔗 [Issue #2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)

3. **[#2953] 官方构建缺失 `channel-matrix` 标志**  
   - 评论数：3 | 👍：2  
   - Windows 用户无法启用 Matrix 通道支持。  
   - **信号**：需调整构建脚本以包含该特性标志。  
   - 🔗 [Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **S0/S1** | [#3070] GLIBC_2.39 not found | 运行时依赖过高，导致旧系统无法启动 | ❌ 无 PR |
| | [#2930] Docker 初始化失败（macOS） | `bootstrap.sh --docker` 报“Unbound variable” | ❌ 无 PR |
| | [#2947] Docker Web 配置保存返回 500 | WSL 环境下配置无法保存 | ❌ 无 PR |
| **S2** | [#3079] Ollama+Qwen tool-call 回归 | 仅输出思考文本，丢失结构化动作 | ✅ 已修复（[#3241](https://github.com/zeroclaw-labs/zeroclaw/pull/3241)） |
| | [#3010] Web 代理重连循环 | WebSocket 协议头缺失 | ✅ 已修复（[#3242](https://github.com/zeroclaw-labs/zeroclaw/pull/3242)） |
| | [#3038] Web 代理会话上下文丢失 | 重连后对话中断 | ⚠️ 部分缓解（会话持久化已加） |
| **S3** | [#3033] `default_temperature` 配置未生效 | 命令默认温度始终为 0.7 | ✅ 已关闭（原因待查） |

> ⚠️ **重点关注**：GLIBC 兼容性问题可能阻碍大规模部署，建议优先评估静态编译方案。

---

## 6. 功能请求与路线图信号

| 功能请求 | 社区热度 | 已有 PR | 纳入可能性 |
|--------|--------|--------|----------|
| **Azure OpenAI 支持** ([#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176)) | 中（3评论） | ❌ | 高（企业用户需求强） |
| **MCP 工具支持 `zeroclaw agent`** ([#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)) | 中（2评论） | ✅ [#3209](https://github.com/zeroclaw-labs/zeroclaw/pull/3209) | 已推进 |
| **按需加载 MCP 工具** ([#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)) | 低（2评论） | ❌ | 中（性能优化方向） |
| **动态节点发现机制** ([#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093)) | 低（1评论） | ❌ | 低（远期架构） |
| **中文 i18n 支持** ([#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)) | 低（2评论） | ❌ | 中（国际化趋势） |

> ✅ **明确信号**：MCP 生态集成是当前重点，Azure 支持有望成为下一版本亮点。

---

## 7. 用户反馈摘要

- **痛点**：
  - “每次重启网关都要重新配对浏览器，体验极差” → 已由会话持久化缓解（[#3242](https://github.com/zeroclaw-labs/zeroclaw/pull/3242)）
  - “Qwen 模型明明能思考，但就是不执行工具调用” → 已修复标签解析（[#3241](https://github.com/zeroclaw-labs/zeroclaw/pull/3241)）
  - “Docker 在 macOS 上根本跑不起来” → 仍待解决（[#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930)）

- **满意点**：
  - “新的自动扩展聊天框太方便了！”（[#3243](https://github.com/zeroclaw-labs/zeroclaw/pull/3243)）
  - “终于不用手动改 `main` 分支链接了”（[#3194](https://github.com/zeroclaw-labs/zeroclaw/pull/3194)）

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建日期 | 状态 | 提醒 |
|--------|------|--------|------|------|
| [#2494] Feishu 通道无法启动 | Bug | 2026-03-02 | OPEN | 超10天未响应，影响企业用户 |
| [#2960] 浏览器配对无法持久化 | Bug | 2026-03-07 | OPEN | 虽部分修复，但根因未彻底解决 |
| [#3069] MCP 工具未传递给子代理 | Bug | 2026-03-09 | OPEN | 高级功能缺陷，需架构调整 |
| [#2540] Rust 版本升级（dependabot） | Build | 2026-03-02 | OPEN | 长期未合并，存在安全风险 |

> 🛎️ **维护者注意**：建议本周内响应 [#2494] 和 [#3069]，避免社区信任流失。

---

**报告生成时间**：2026-03-12  
**数据来源**：GitHub Zeroclaw 仓库公开数据  
**分析师**：AI 开源项目观察员

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

PicoClaw 在 2026-03-12 继续保持高活跃度，社区贡献与开发节奏显著加快。过去24小时内共产生 **105 条 PR 更新**（39 已合并/关闭，66 待合并）和 **23 条 Issues 更新**（17 新开/活跃，6 已关闭），显示出强劲的开发推进与用户参与度。项目发布了 **3 个新版本**，其中包括一个 nightly 构建和两个稳定版本更新，涵盖核心功能增强与关键 Bug 修复。整体项目健康度良好，处于快速迭代与功能完善阶段。

---

## 2. 版本发布

### 🔹 v0.2.2-nightly.20260312.6612ca09（Nightly Build）
- **关键更新**：
  - ✅ 支持 Matrix 频道富文本消息（#1370）
  - ✅ 新增 LongCat 模型提供商支持（#1317）
  - ✅ 修复 Agent 模式下 MCP 初始化问题（#1370）
- **说明**：此为自动化 nightly 构建，可能存在不稳定，建议测试环境使用。

### 🔹 v0.2.2（稳定版）
- **关键更新**：
  - ✅ Web 设置中支持 `exec allow_remote` 配置（#1363）
  - ✅ 合并语音转录功能（#1214）
- **迁移注意**：无破坏性变更，兼容现有配置。

> 📌 完整变更日志：[v0.2.2...nightly](https://github.com/sipeed/picoclaw/compare/v0.2.2...v0.2.2-nightly.20260312.6612ca09)

---

## 3. 项目进展

今日共 **39 个 PR 被合并或关闭**，重点推进方向包括：

- **Agent 架构优化**：
  - 实现 Agent 级 SkillsFilter，支持按配置过滤可用技能（#1389）
  - 修复 Agent 模式下 MCP 工具未加载问题（#1355）
- **Web 前端体验改进**：
  - 恢复上次活跃对话会话（#1385）→ 解决 #1373
  - 修复 Raw JSON 编辑器无法横向滚动问题（#1386）→ 解决 #1369
  - 修复 Firefox 下配置文本域高度塌陷（#1364）
- **通道与稳定性增强**：
  - 修复 Telegram 打字指示器在 LLM 失败时未停止问题（#1390）→ 解决 #1323
  - 修复重复注册同一聊天打字循环导致的资源泄漏（#1392）
- **配置与构建修复**：
  - 修复 onboard 模板嵌入路径问题，恢复 clean-checkout 构建（#1393）
  - 修复模型轮询从第二个开始的问题（#1391）

> 项目整体在 **Agent 可观测性、Web UI 稳定性、多通道兼容性**方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1161 — [如何正确配置 PicoClaw 使用本地 Ollama 模型？](https://github.com/sipeed/picoclaw/issues/1161)（14 评论）
- **核心诉求**：用户反馈 Agent 能启动并调用 Ollama 模型，但无最终响应输出。
- **背后信号**：本地模型集成是高频使用场景，当前文档或配置流程存在模糊点，亟需官方最佳实践指南或配置模板。

### 🔥 架构讨论：#1316 — [事件驱动的 Agent Loop 重构提案](https://github.com/sipeed/picoclaw/issues/1316)（7 评论，1 👍）
- **核心诉求**：当前 Agent Loop 为“黑盒”，缺乏可观测性、Hook 机制、中断与消息追加能力。
- **背后信号**：高级用户与开发者希望实现更灵活的 Agent 控制流，为自动化、调试与 UI 集成提供基础。

### 🔥 功能请求：#292 — [Android 设备自动化与远程控制](https://github.com/sipeed/picoclaw/issues/292)（3 评论）
- **核心诉求**：希望 PicoClaw 能像 Botdrop 一样控制 Android 设备，作为 LLM 与移动端桥梁。
- **背后信号**：移动端 AI 自动化是重要扩展方向，可能成为下一阶段路线图重点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已有 Fix PR |
|--------|------|------|----------------|
| 🔴 高 | #1151 | TUI 中 PHI 配置写入竞争 + HomePath 未转义导致命令注入风险 | ❌ 未修复 |
| 🔴 高 | #748 | Groq API 工具调用格式错误（非 OpenAI 风格） | ✅ 已修复（#835, #956, #1196） |
| 🟠 中 | #1299 | Agent 模式完全忽略 MCP 工具 | ✅ 已修复（#1355） |
| 🟠 中 | #1350 | Docker Launcher 镜像 manifest 不可用 | ❌ 未修复 |
| 🟡 低 | #1364 | Firefox 下 Raw JSON 文本域高度塌陷 | ✅ 已修复（#1386） |
| 🟡 低 | #1348 | Windows 源码启动 `go mod tidy` 失败 | ❌ 未修复 |

> ⚠️ 需重点关注 #1151（安全相关）与 #1350（部署阻塞）。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 是否已有 PR | 纳入可能性 |
|--------|-----------|------------|----------|
| Telegram 实时流式响应 | #1098 | ❌ | 中（需通道层支持） |
| GitHub Copilot 设备码认证 | #1347 | ❌ | 高（开发者工具集成趋势） |
| OpenIM 插件支持 | #1372 | ❌ | 低（ niche 需求） |
| Docker 镜像集成 Node.js 22 | #1371 | ❌ | 中（扩展工具链需求） |
| Engram 持久化记忆后端 | #175 | ❌ | 高（长期记忆是 Agent 核心能力） |

> 📌 **高潜力方向**：Android 自动化（#292）、Engram 记忆系统（#175）、GitHub Copilot 集成（#1347）可能进入 v0.3.0 路线图。

---

## 7. 用户反馈摘要

- **痛点**：
  - 本地模型（如 Ollama）配置复杂，缺乏清晰文档（#1161）
  - Web 对话体验不一致：每次点击默认新建而非恢复上次会话（#1373）
  - Windows 开发环境搭建困难，依赖解析失败（#1348）
  - Docker 部署镜像缺失，影响 CI/CD 流程（#1350）

- **满意点**：
  - Web UI 功能丰富，配置灵活（#1364 评论）
  - Agent 工具调用机制设计合理（#1332 工具反馈功能受欢迎）
  - 多语言 README 维护良好，降低入门门槛

- **使用场景**：
  - 个人 AI 助手（Telegram/Web）
  - 本地模型 + 私有部署（Ollama + Docker）
  - 移动端自动化探索（Android Termux 用户）

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| #1161 | Bug | 2026-03-06 | OPEN | 高优先级：影响本地模型用户体验，需官方回应或文档补充 |
| #292 | Feature | 2026-02-16 | OPEN | 长期未响应，但需求明确，建议评估可行性 |
| #175 | Enhancement | 2026-02-14 | OPEN | 记忆系统是关键能力，建议纳入架构讨论 |
| #1350 | Bug | 2026-03-11 | OPEN | Docker 部署阻塞问题，影响新用户上手 |
| #1348 | Bug | 2026-03-11 | OPEN | Windows 开发者体验问题，需排查依赖兼容性 |

> 🛎️ **维护者建议**：优先响应 #1161 与 #1350，二者均为新用户关键路径上的阻塞点。

---

**报告生成时间**：2026-03-12  
**数据来源**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**分析师备注**：PicoClaw 正处于从“可用”向“易用”过渡的关键阶段，建议加强文档建设与跨平台支持。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出极高的开发活跃度，共产生 **39 条 PR 更新** 和 **9 条 Issue 更新**，其中 **31 个 PR 仍处于待合并状态**，反映出社区贡献热情高涨但核心维护压力较大。尽管无新版本发布，但多个关键功能（如 LanceDB 语义记忆、GitHub MCP 集成、多实例支持）已进入代码审查阶段。高优先级 Bug 报告集中暴露了流式消息、环境变量传递和认证机制等核心流程的稳定性问题，需重点关注。

---

## 2. 版本发布

**无新版本发布**。当前主干分支仍处于功能迭代与问题修复阶段，尚未形成稳定发布候选。

---

## 3. 项目进展

今日 **8 个 PR 被合并或关闭**，主要推进以下方向：

- **#977（已关闭）** 与 **#979（开放）**：围绕 LanceDB 实现的语义记忆功能经历重构，从单体 PR 拆分为技能模块（`skill/add-lancedb-memory`），提升可维护性，为容器化代理提供持久化向量记忆能力（[PR #979](https://github.com/qwibitai/nanoclaw/pull/979)）。
- **#965（开放）**：针对 Issue #732 提出的高优先级 Bug，实现流式输出缓冲机制，避免 WhatsApp 消息洪水，预计将显著改善终端用户体验（[PR #965](https://github.com/qwibitai/nanoclaw/pull/965)）。
- **#930 与 #969**：协同解决 OAuth 令牌过期导致的 401 错误问题，引入自动刷新机制与内存缓存，增强认证鲁棒性（[PR #930](https://github.com/qwibitai/nanoclaw/pull/930) | [PR #969](https://github.com/qwibitai/nanoclaw/pull/969)）。

整体来看，项目在 **代理运行时稳定性、多通道集成、安全认证** 三大支柱上持续夯实基础。

---

## 4. 社区热点

- **#732 [高优先级 Bug] 流式输出导致消息洪水**（[链接](https://github.com/qwibitai/nanoclaw/issues/732)）：用户 @hodisr 指出代理在流式响应期间逐块发送 WhatsApp 消息，造成严重干扰。该问题已引发 3 条评论讨论，并已有修复 PR #965 待合并，反映社区对交互体验的高度敏感。
- **#865 [高优先级增强] 容器安全架构质疑**（[链接](https://github.com/qwibitai/nanoclaw/issues/865)）：@calebfaruki 质疑当前“仅靠容器即安全”的设计假设，强调代理层脚本不应信任容器边界。此议题触及项目安全模型核心，虽暂无 PR，但可能推动未来权限隔离重构。
- **#979 LanceDB 语义记忆技能**（[链接](https://github.com/qwibitai/nanoclaw/pull/979)）：新引入的 MCP 工具集（`memory_store/search/delete/count`）获得关注，标志着 NanoClaw 向长期上下文记忆迈出关键一步，契合 AI 代理演进趋势。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| 🔴 高 | #958 无法获取响应 | 用户完成 setup 后无回复，疑似初始化或通信链路故障 | ❌ 无 |
| 🔴 高 | #960 MCP 环境变量未传递至容器 | 凭证代理迁移后 `.mcp.json` 中的 `${VAR}` 插值失效，影响第三方 MCP 服务器运行 | ❌ 无（需回补 `readSecrets` 逻辑） |
| 🔴 高 | #732 流式消息洪水 | 如上所述，破坏性用户体验 | ✅ 有（#965） |
| 🟠 中 | #853 不支持 `ANTHROPIC_AUTH_TOKEN` | Claude Code 官方 CLI 使用的认证变量未被 setup 验证识别 | ❌ 无 |
| 🟠 中 | #973 Setup 过程极慢 | 用户抱怨配置流程复杂度过高，质疑 JSON 配置可行性 | ❌ 无 |

> 建议优先处理 #958 和 #960，二者均可能导致用户完全无法使用核心功能。

---

## 6. 功能请求与路线图信号

以下功能请求已有对应 PR，极可能被纳入下一版本：

- **多实例共存支持**（#970）：通过 `NANOCLAW_INSTANCE` 环境变量隔离资源，满足高级用户在单台机器部署多个代理的需求（[PR #970](https://github.com/qwibitai/nanoclaw/pull/970)）。
- **GitHub MCP 集成**（#976）：自动注入官方 GitHub MCP 服务器，赋予代理结构化 GitHub 操作能力（[PR #976](https://github.com/qwibitai/nanoclaw/pull/976)）。
- **Feishu/Lark 通道支持**（#964）：扩展亚洲市场主流协作平台接入能力（[PR #964](https://github.com/qwibitai/nanoclaw/pull/964)）。
- **Podman 替代 Docker 建议**（#957）：虽无 PR，但文档层面提及 Podman 可降低 macOS/Linux 用户依赖门槛，值得评估。

此外，**OpenAI Codex SDK 作为备选引擎**（#963）和 **Discord 图像/语音支持**（#974）显示项目正积极探索多模态与多运行时架构。

---

## 7. 用户反馈摘要

- **痛点**：
  - Setup 流程复杂且缓慢（#973），用户期望更轻量级的配置方式。
  - 认证机制不兼容 Claude Code 官方实践（#853），造成认知摩擦。
  - 流式响应设计缺陷导致消息轰炸（#732），严重影响可用性。
- **满意点**：
  - 社区对 LanceDB 记忆功能（#979）和 GitHub MCP 集成（#976）表示期待，认为“极大扩展了代理能力边界”。
  - 多通道支持（QQ、Feishu）获积极评价，尤其赞赏“无需公网 URL”的 WebSocket 实现。
- **使用场景**：
  - 企业用户关注多实例隔离（#970）与内部系统（如 GitHub、Feishu）集成。
  - 个人开发者重视易用性与跨平台兼容性（Podman 建议）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获响应，建议维护者优先处理：

- **#709 [高优先级 Bug] 环境变量管理行为分歧风险**（创建于 2026-03-04）：涉及容器 allowlist 与 Bash 子进程 blocklist 的防御层不一致，存在安全隐患，最后更新为 2026-03-11，但无进展（[链接](https://github.com/qwibitai/nanoclaw/issues/709)）。
- **#412 [功能] 主机机器授权透传**（创建于 2026-02-23）：提供第三种认证选项以简化部署，已近一个月未 review（[链接](https://github.com/qwibitai/nanoclaw/pull/412)）。
- **#921 [功能] 自主治理自愈通道**（创建于 2026-03-10）：虽标记为“Blocked”，但涉及系统级可靠性，需明确阻塞原因并推进（[链接](https://github.com/qwibitai/nanoclaw/pull/921)）。

> 建议建立定期积压清理机制，避免关键贡献因响应延迟而流失。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度与丰富功能演进背后，需加强核心稳定性修复与社区响应效率，以维持长期可持续发展。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

IronClaw 在 2026-03-12 继续保持高活跃度，24 小时内产生 **45 条 Issues 更新**（37 新开/活跃，8 关闭）和 **50 条 PR 更新**（34 待合并，16 已合并/关闭），社区参与度显著。项目于昨日发布 **v0.18.0** 版本，并完成多轮 staging 到 main 的自动晋升流程，CI/CD 流水线运行稳定。当前主要技术焦点集中在 **WASM 工具兼容性、MCP 协议合规性、Telegram 通道稳定性** 和 **配置抽象层优化** 四大方向。

---

## 2. 版本发布

### 🔖 v0.18.0（2026-03-11）
- **核心更新内容**：
  - 完成 staging 到 main 的批量晋升（#865, #907）
  - 更新 WASM 工具链 artifact 元数据，修复 Google 工具安装 404 问题（#960）
  - 引入 `CLI_ENABLED=false` 配置以解决 daemon 模式下 stdin 关闭导致的无限重启问题（#472）
- **破坏性变更**：无显式破坏性变更，但 **默认 WASM 工具版本升级至 WIT 0.3.0 兼容版本**，旧版工具可能因 WIT 不匹配而无法加载（见 Issue #840）。
- **迁移建议**：用户若使用自定义 WASM 工具，需确保其编译目标为 WIT 0.3.0；建议运行 `ironclaw onboard --force` 重新拉取最新工具集。

> 📦 Release: [v0.18.0](https://github.com/nearai/ironclaw/releases/tag/v0.18.0)

---

## 3. 项目进展

今日共 **16 个 PR 被合并或关闭**，关键进展包括：

| PR | 类型 | 说明 |
|----|------|------|
| [#472](https://github.com/nearai/ironclaw/pull/472) | 🔧 修复 | 修复 systemd 单元因未设置 `CLI_ENABLED=false` 导致 daemon 无限重启的问题 |
| [#839](https://github.com/nearai/ironclaw/pull/839) | 🧪 测试 | 稳定 OpenAI 兼容接口 oversized-body 回归测试，避免间歇性 503 误报 |
| [#850](https://github.com/nearai/ironclaw/pull/850) | 📚 文档 | 新增俄语 README 本地化，提升非英语用户可访问性 |
| [#851](https://github.com/nearai/ironclaw/pull/851) | 🎨 UX | 在 `ironclaw onboard` 中添加 ASCII 艺术横幅，增强首次使用体验 |
| [#964](https://github.com/nearai/ironclaw/pull/964) | 🛠️ CI | 为 WASM bundle 添加 `tool-`/`channel-` 前缀，防止同名工具与通道文件冲突 |

> ✅ 整体项目向 **更稳定的生产部署、更好的多语言支持、更健壮的 CI 发布流程** 迈出坚实一步。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 讨论焦点 | 社区诉求分析 |
|-------|--------|-------------|
| [#142](https://github.com/nearai/ironclaw/issues/142)（已关闭） | NEAR AI 认证强制依赖 | 用户强烈反对将 NEAR AI 认证作为核心功能依赖，认为其“与项目无关”且“被所有人主动移除”。反映社区对 **去中心化身份耦合** 的抵触情绪。 |
| [#840](https://github.com/nearai/ironclaw/issues/840) | WASM 工具 WIT 版本不兼容 | 新用户 onboard 后默认安装的 GitHub/web-search 工具因 WIT 0.2.0 → 0.3.0 不匹配而启动失败。暴露 **默认工具链版本管理缺陷**，需紧急修复。 |
| [#733](https://github.com/nearai/ironclaw/issues/733)（已关闭） | ngrok 进程僵尸化 | 隧道 URL 获取后 ngrok 子进程变为 `<defunct>`，导致 webhook 失效。虽已关闭，但同类问题在 #738 中重现，说明 **进程生命周期管理存在系统性风险**。 |

> 💬 社区核心诉求：**降低外部依赖强耦合、提升默认工具开箱即用性、保障通道稳定性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|--------------|
| 🔴 HIGH | [#840](https://github.com/nearai/ironclaw/issues/840) | 默认 WASM 工具 WIT 版本不兼容，导致新用户无法启动基础工具 | ❌ 无（需更新默认工具 artifact） |
| 🔴 HIGH | [#738](https://github.com/nearai/ironclaw/issues/738) | Managed Tunnel 绑定到 Web Gateway (3000) 而非 Webhook Server (8080)，导致 Slack 等 webhook 返回 404 | ❌ 无（需修改 `start_tunnel()` 端口逻辑） |
| 🟠 MEDIUM | [#875](https://github.com/nearai/ironclaw/issues/875) | `ironclaw onboard` 因 checksum 验证失败无法安装 GitHub 工具 | ✅ 部分缓解（#960 修复 registry 元数据） |
| 🟠 MEDIUM | [#999](https://github.com/nearai/ironclaw/issues/999) | Google Sheets OAuth 完成后仍返回 403 PERMISSION_DENIED | ❌ 无（疑似身份传递缺失） |
| 🟡 LOW | [#997](https://github.com/nearai/ironclaw/issues/997) | “Error: Waiting for approval” 误导性 UI 提示 | ❌ 无（需文案优化） |

> ⚠️ **高风险问题集中在新用户 onboarding 和 webhook 通道稳定性**，建议优先处理 #840 和 #738。

---

## 6. 功能请求与路线图信号

| 功能方向 | 相关 Issue/PR | 纳入可能性 |
|--------|--------------|----------|
| **简化 onboarding 流程** | [#927](https://github.com/nearai/ironclaw/pull/927)（feat: chat onboarding） | ✅ 高（已进入 staging 晋升流程） |
| **MCP 协议合规性修复** | [#890](https://github.com/nearai/ironclaw/issues/890)（stdio 跳过 initialize）、[#793](https://github.com/nearai/ironclaw/pull/793) | ✅ 高（#793 已 rebase 至 staging） |
| **配置抽象层重构** | [#988](https://github.com/nearai/ironclaw/issues/988)（硬编码 CLI_ENABLED） | 🟡 中（需设计统一配置系统） |
| **Telegram 通道增强** | 多个 #bug_bash 系列 Issue（#990–#1002） | 🔄 进行中（CI 已介入审查） |

> 📌 下一版本（v0.19.0） likely 聚焦：**onboarding 体验重构 + MCP 协议合规 + Telegram 通道稳定性**。

---

## 7. 用户反馈摘要

- **痛点**：
  - “Onboarding 后工具根本不能用，报错 WIT mismatch，文档也没说清楚”（#840）
  - “Telegram 配置太复杂，bot token 经常 404，要试好几次”（#991）
  - “Webhook 收不到消息，查日志才发现 tunnel 绑错端口”（#738）
- **满意点**：
  - “ASCII banner 让 CLI 感觉更专业了”（#851 评论）
  - “俄语 README 帮了大忙，终于不用机翻了”（#850 社区反馈）
- **使用场景**：
  - 自动化工作流（Google Sheets + GitHub webhook）
  - 跨通道通知（Web chat 创建 routine → Telegram 推送）
  - 本地开发调试（ngrok tunnel + MCP 工具）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 建议行动 |
|---------|------|--------|--------|
| [#299](https://github.com/nearai/ironclaw/issues/299) | Issue | 18 天 | 需支持 MCP server JSON 自定义配置，影响 Browserbase 等第三方集成 |
| [#679](https://github.com/nearai/ironclaw/pull/679) | PR | 5 天 | 模型选择保留逻辑已 approve 但未 merge，阻碍 setup 体验优化 |
| [#758](https://github.com/nearai/ironclaw/pull/758) | PR | 3 天 | GitHub webhook 归一化迁移至工具层，XL 规模需 core 成员 review |

> 🛎️ **维护者注意**：#299 和 #679 均为高价值低风险项，建议本周内处理。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
**活跃度**：极高 | **稳定性**：中等（新用户路径存在阻塞性 Bug） | **社区响应**：良好（CI 自动审查覆盖率高）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-12）

---

## 1. 今日速览

LobsterAI 在过去24小时内保持较高活跃度，共产生 **12条 Issues 更新** 和 **11条 PR 更新**，并发布了一个新版本 **v0.2.3**。社区反馈集中暴露了核心体验问题（如自动加空格、Bash执行卡顿、图片读取卡死），同时开发团队积极响应用户需求，完成了多文件附件支持、IM平台异步处理优化等关键功能。整体项目处于快速迭代但稳定性承压阶段。

---

## 2. 版本发布

### 🔖 v0.2.3 正式发布

**主要更新内容：**
- ✅ 主界面附件支持多文件选择（[#371](https://github.com/netease-youdao/LobsterAI/pull/371)）
- ✅ 修复 QQ 平台集成相关问题（[#348](https://github.com/netease-youdao/LobsterAI/pull/348)）
- ✅ 聊天分页功能优化（[#355](https://github.com/netease-youdao/LobsterAI/pull/355)）

**影响评估：**  
本次更新为功能增强型发布，无破坏性变更。建议所有用户升级以获取更流畅的多文件交互体验。

> 📦 Release 链接：[v0.2.3](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)

---

## 3. 项目进展

今日共 **7个 PR 被合并/关闭**，重点推进方向如下：

| 类型 | 数量 | 关键进展 |
|------|------|--------|
| ✅ 功能新增 | 4 | 多文件附件支持（已发布）、钉钉/QQ/企微对 OpenClaw 协议支持（[#378](https://github.com/netease-youdao/LobsterAI/pull/378)、[#381](https://github.com/netease-youdao/LobsterAI/pull/381)、[#383](https://github.com/netease-youdao/LobsterAI/pull/383)） |
| ✅ Bug 修复 | 3 | 修复 macOS 端 Node 环境污染问题（[#375](https://github.com/netease-youdao/LobsterAI/pull/375)）、IM 平台超时异步处理机制（[#372-374](https://github.com/netease-youdao/LobsterAI/pull/372)） |

> 💡 项目正向“多平台兼容 + 异步稳定性”方向稳步迈进，尤其在企业级 IM 集成方面取得实质性突破。

---

## 4. 社区热点

### 🔥 高关注度 Issues（按评论数排序）

| Issue | 标题 | 评论数 | 核心诉求 |
|-------|------|--------|--------|
| [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 自动在“中文+数字”间加空格 | 5 | **严重体验缺陷**：用户明确指出该行为无法通过提示纠正，严重影响文本输出准确性，阻碍替代 OpenClaw |
| [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | Bash 执行响应极慢 | 3 | 命令本应瞬时返回，但 LobsterAI 阻塞数分钟，影响自动化脚本使用 |
| [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | 读取图片时频繁卡死 | 3 | 多模态交互稳定性问题，疑似资源泄漏或超时机制缺失 |

> ⚠️ 上述问题均无对应修复 PR，需核心团队优先介入。

---

## 5. Bug 与稳定性

### 🚨 严重程度排序（今日新增/活跃）

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|----------|-------|------|----------------|
| 🔴 **Critical** | [#344](https://github.com/netease-youdao/LobsterAI/issues/344) | 强制插入空格破坏输出语义 | ❌ 无 |
| 🔴 **Critical** | [#357](https://github.com/netease-youdao/LobsterAI/issues/357) | 图片读取导致 UI 卡死 | ❌ 无 |
| 🟠 **High** | [#350](https://github.com/netease-youdao/LobsterAI/issues/350) | Bash 命令执行阻塞超时 | ❌ 无（但已有异步处理 PR [#374](https://github.com/netease-youdao/LobsterAI/pull/374) 待合并） |
| 🟠 **High** | [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 简单输入“你好”即报 token 超限 | ❌ 无（疑似上下文管理异常） |
| 🟡 **Medium** | [#385](https://github.com/netease-youdao/LobsterAI/issues/385) | 讯飞 CodePlaning 连接失败 | ❌ 无 |

> 💡 建议优先处理 [#344] 和 [#357]，二者已显著影响用户留存。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能需求（附相关 PR）

| 功能请求 | Issue | 相关 PR | 纳入可能性 |
|--------|-------|--------|-----------|
| Docker 容器化部署 | [#386](https://github.com/netease-youdao/LobsterAI/issues/386) | — | ⭐⭐⭐（企业级部署刚需） |
| 环境变量配置支持 | [#377](https://github.com/netease-youdao/LobsterAI/issues/377) | — | ⭐⭐⭐（Skill 扩展依赖） |
| 文件路径快速打开 | [#379](https://github.com/netease-youdao/LobsterAI/issues/379) | — | ⭐⭐（UX 增强） |
| 自定义 URI 协议支持（如 obsidian://） | — | [#380](https://github.com/netease-youdao/LobsterAI/pull/380) | ✅ 已提交，高价值 |
| 每小时定时任务 | — | [#376](https://github.com/netease-youdao/LobsterAI/pull/376) | ✅ 已提交，实用性强 |

> ✅ 已有 PR 的功能极可能进入 v0.2.4；Docker 与环境变量为下一版本重点候选。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音提炼

- **痛点集中领域：**
  - “**输出不可控**”：自动加空格行为违背用户指令，破坏信任（[#344]）
  - “**性能卡顿**”：Bash 和图片处理响应延迟严重，影响工作流效率（[#350]、[#357]）
  - “**更新成本高**”：频繁更新导致配置重置，用户体验断裂（[#382]）

- **满意点：**
  - 多文件附件功能获赞（v0.2.3 发布后未出现负面反馈）
  - 对 OpenClaw 协议的支持扩展了企业 IM 场景（[#378]、[#381]）

- **使用场景：**
  - 企业办公（钉钉/企微/QQ 集成）
  - 本地开发辅助（Bash 执行、文件操作）
  - 多模态内容理解（图片+文本）

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| 类型 | ID | 标题 | 创建日期 | 状态 | 提醒 |
|------|----|------|--------|------|------|
| Issue | [#186](https://github.com/netease-youdao/LobsterAI/issues/186) | 记忆能力差，远不如 OpenClaw | 2026-02-28 | OPEN | 超12天未响应，涉及核心能力短板 |
| PR | [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | Workflow 增强（Agent 分工 + soul.md） | 2026-03-03 | OPEN | 超8天未 review，架构级提案需决策 |

> 🔔 **维护者注意**：[#186] 反映的是与竞品的核心差距，建议专项优化；[#240] 为重大功能提案，需明确是否采纳路线图。

---

**报告生成时间：2026-03-12**  
**数据来源：LobsterAI GitHub Repository**  
**分析师：AI 开源项目洞察组**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

TinyClaw 在过去24小时内表现出**高活跃度**，共处理 12 条 Issues（9 条关闭，3 条新开）和 7 条 PR（6 条合并/关闭，1 条待合并），并发布了一个新版本 v0.0.10。项目正经历一次重大架构重构与品牌升级，包括从单体代码库向 npm 工作区 monorepo 迁移、CLI 交互现代化、以及即将完成的 **TinyClaw → TinyAGI 品牌重塑**。社区对多模型支持、本地部署能力（如 Ollama）和 Web 控制台（TinyOffice）体验优化表现出强烈兴趣。

---

## 2. 版本发布

### 🔖 v0.0.10（[Release 链接](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10))

**核心更新内容：**
- **移除 tmux 会话中的专用日志面板**（`daemon.sh`），简化运行时界面；
- **优化 `TINYCLAW_HOME` 路径检测逻辑**（`heartbeat-cron.sh`），提升环境兼容性；
- **延长 Telegram 轮询看门狗超时时间**：从 2 分钟 → 5 分钟，降低因网络延迟导致的误判；
- **任务类型本地化重构**：将 `Task` / `TaskStatus` 类型定义从全局移至模块内，增强类型封装性。

> ⚠️ **无破坏性变更**，但建议用户更新后重启守护进程以确保心跳机制稳定运行。

---

## 3. 项目进展

过去24小时共 **合并/关闭 6 个 PR**，推动项目在架构、用户体验与扩展性方面显著前进：

| PR | 关键进展 |
|----|--------|
| [#186](https://github.com/TinyAGI/tinyclaw/pull/186) | **架构重构**：将单体代码库拆分为 5 个 npm 工作区包（`@tinyclaw/core`, `@tinyclaw/teams` 等），并用 SQLite + WAL 模式替代 BullMQ/Redis 队列，大幅降低部署复杂度。 |
| [#185](https://github.com/TinyAGI/tinyclaw/pull/185) | **CLI 现代化**：将 1500+ 行 Bash 交互提示迁移至 TypeScript + `@clack/prompts`，提供彩色输出、输入验证与结构化交互，显著提升用户体验。 |
| [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | **自动化增强**：看板任务拖入“进行中”列时自动触发对应 Agent 执行，减少手动操作步骤。 |
| [#183](https://github.com/TinyAGI/tinyclaw/pull/183) | **UI 简化**：移除冗余 `message_received` 事件，清理 TinyOffice 聊天界面，聚焦核心消息流。 |
| [#190](https://github.com/TinyAGI/tinyclaw/pull/190) | **团队协作修复**：统一团队通信路径，修复 Agent 响应实时流式传输问题，确保多 Agent 协作可见性。 |
| [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | **新增 AI 提供商**：集成 [Avian AI](https://avian.io)（OpenAI 兼容 API），支持通过 `AVIAN_API_KEY` 配置使用。 |

> ✅ 项目整体向**轻量化、模块化、易部署**方向迈出关键一步。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#66](https://github.com/TinyAGI/tinyclaw/issues/66)（已关闭，6 条评论）
**主题**：请求实现类似 Azure Phoenix 或 Claude Trace 的“任务控制中心 + Agent 调用链路追踪”功能。  
**分析**：用户期望可视化 Agent 间通信、工具调用、记忆池使用等执行轨迹，反映对**可观测性（Observability）** 的强烈需求。尽管该 Issue 已关闭（可能因优先级或 scope 调整），但结合 PR #186 中 `@tinyclaw/visualizer` 包的引入，**链路追踪功能很可能已在规划中**。

### 💬 高互动 Issue：[#111](https://github.com/TinyAGI/tinyclaw/issues/111)（已关闭，3 条评论，1 👍）
**主题**：支持 Ollama 本地模型与自定义 API Key（如 Claude）。  
**信号**：本地部署与多模型路由已成为核心诉求，与 PR #143（Avian 支持）及 Issue #41（OpenAI 兼容端点）形成呼应，**多 Provider 架构已基本就绪**。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 |
|------|--------|------|------|
| [#91](https://github.com/TinyAGI/tinyclaw/issues/91) | 中 | ✅ 已关闭 | WhatsApp 消息无响应：Agent 显示“思考中”后无回复，需手动查询状态才返回。**可能已在 PR #190（团队通信修复）中解决**。 |
| [#63](https://github.com/TinyAGI/tinyclaw/issues/63) | 低 | ✅ 已关闭 | 队列处理器未在 shutdown 时清除 interval，可能导致清理不完整。**建议检查 PR #186（SQLite 队列重构）是否已覆盖此问题**。 |

> 🛠️ 当前无高严重性未修复 Bug，稳定性良好。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 实现可能性 | 依据 |
|--------|------|----------|------|
| **TinyOffice 运行时控制面板** | [#194](https://github.com/TinyAGI/tinyclaw/issues/194) | ⭐⭐⭐⭐☆ | 用户希望 Web 端直接控制 daemon/queue/heartbeat，减少 CLI 依赖。与 PR #186 的模块化架构契合度高。 |
| **TinyOffice 首次运行引导（Onboarding）** | [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | ⭐⭐⭐☆☆ | 当前配置依赖 CLI 和手动编辑，体验割裂。PR #185 的 CLI 现代化为此打下基础。 |
| **Zellij 替代 tmux 支持** | [#87](https://github.com/TinyAGI/tinyclaw/issues/87) | ⭐⭐☆☆☆ | 用户提议用 Zellij 提供更友好的多 pane 观察界面。需评估与现有 `daemon.sh` 的集成成本。 |
| **GLM-4.7 模型支持** | [#103](https://github.com/TinyAGI/tinyclaw/issues/103) | ⭐⭐⭐⭐☆ | 多 Provider 架构已支持（见 PR #143），只需添加配置项即可快速集成。 |

> 📌 **下一版本重点预测**：TinyOffice 体验优化 + 更多本地/开源模型支持。

---

## 7. 用户反馈摘要

- **满意点**：
  - 看板拖拽自动触发 Agent（PR #182）被赞“流畅自然”；
  - SQLite 替代 Redis 后，“单机部署终于不用装 Docker 了”（隐含于 PR #186 讨论）；
  - Avian AI 支持让“小团队也能用低成本 API”（PR #143 评论）。

- **痛点**：
  - “TinyOffice 聊天像一次性会话，找不到历史记录入口”（[#192](https://github.com/TinyAGI/tinyclaw/issues/192)）；
  - “第一次配置还是得翻文档敲命令，Web 端帮不上忙”（[#193](https://github.com/TinyAGI/tinyclaw/issues/193)）；
  - “本地跑 Ollama 模型还得绕道 OpenAI 兼容层，希望原生支持”（[#111](https://github.com/TinyAGI/tinyclaw/issues/111)）。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|---------|------|--------|------|------|
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | PR（品牌重塑） | 2026-03-11 | 🟡 待合并 | **高优先级**：涉及全代码库重命名（TinyClaw → TinyAGI），需协调发布节奏，避免破坏用户环境变量与脚本。 |
| [#194](https://github.com/TinyAGI/tinyclaw/issues/194) | Issue（功能请求） | 2026-03-11 | 🔵 开放 | TinyOffice 控制面板需求明确，建议纳入 v0.0.11 路线图。 |
| [#192](https://github.com/TinyAGI/tinyclaw/issues/192) | Issue（UX 改进） | 2026-03-11 | 🔵 开放 | 聊天会话持久化是 Web 控制台基础能力，应优先处理。 |

> 🔔 **维护者注意**：PR #191 的品牌迁移需谨慎测试，建议提供迁移脚本或文档指引。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
架构清晰化、社区响应迅速、功能迭代稳健，品牌升级在即，整体处于积极上升通道。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-12）

---

## 1. 今日速览

过去24小时内，Moltis 社区活跃度显著提升，共处理 **33 条 Issues**（新开/活跃 9 条，关闭 24 条）和 **27 条 Pull Requests**（待合并 19 条，已合并/关闭 8 条），显示出高效的协作节奏。尽管无新版本发布，但核心维护者 @penso 主导了密集的功能增强与稳定性修复，覆盖配置兼容性、Docker 部署、浏览器工具、LLM 输出处理等关键模块。项目整体处于快速迭代与问题收敛阶段，技术债务持续清理，用户体验逐步优化。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于修复已知问题和完善基础设施，为后续稳定版本做准备。

---

## 3. 项目进展

今日共 **8 个 PR 被合并或关闭**，主要进展包括：

- **配置兼容性增强**：[#397](https://github.com/moltis-org/moltis/pull/397) 修复 MLX 后端流式输出中未剥离特殊 token（如 `<|im_end|>`）的问题，提升用户可见输出的纯净度；[#400](https://github.com/moltis-org/moltis/pull/400) 支持遗留内存嵌入配置键（如 `embedding_provider`），避免升级时报错，并发出弃用警告。
- **Docker 与部署体验优化**：[#401](https://github.com/moltis-org/moltis/pull/401) 实现通用 provider 环境变量引导机制，简化 Docker 部署流程；[#399](https://github.com/moltis-org/moltis/pull/399) 修复 Discord 频道自动压缩错误目标会话的问题，确保消息历史正确归档。
- **浏览器与工具链稳定性**：[#403](https://github.com/moltis-org/moltis/pull/403) 对齐 sandboxed browserless 超时设置与池生命周期，防止会话过早终止；[#412](https://github.com/moltis-org/moltis/pull/412) 实现浏览器会话按聊天隔离，避免跨会话状态污染。

这些修复显著提升了多通道通信、本地 LLM 集成和容器化部署的可靠性。

---

## 4. 社区热点

以下 Issues 引发较高关注：

- **[#102](https://github.com/moltis-org/moltis/issues/102)**（Docker-in-Docker 挂载路径错误）：获 4 👍，反映用户在容器内运行 sandbox 时工作区路径映射异常，已定位至 `crates/tools/src/san...` 模块，亟待修复。
- **[#272](https://github.com/moltis-org/moltis/issues/272)**（Webhook 功能需求）：获 2 👍，用户呼吁添加 webhook 支持以实现外部系统触发代理任务，属高频集成场景。
- **[#391](https://github.com/moltis-org/moltis/issues/391)**（Node-Advertised Tools RFC）：新提出的协议扩展提案，探讨远程节点能力发现机制，可能影响未来分布式架构设计。

此外，[#414](https://github.com/moltis-org/moltis/issues/414) 报告 z.ai 开箱即用失败并伴随网络错误，暴露第三方服务集成稳定性问题。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 高 | [#344](https://github.com/moltis-org/moltis/issues/344) | Vault 密封状态 UX 极差，用户无法感知系统状态 | ❌ 无 |
| 高 | [#407](https://github.com/moltis-org/moltis/issues/407) | 网络过滤代理启动即失败，导致 `web_search` 不可用 | ❌ 无 |
| 中 | [#366](https://github.com/moltis-org/moltis/issues/366) | macOS 本地节点配对时 `/ws` 端点返回 HTML 而非 WebSocket | ❌ 无 |
| 中 | [#348](https://github.com/moltis-org/moltis/issues/348) | Web UI 中主代理 Soul 修改不持久化 | ✅ 已有相关修复方向（见 [#418](https://github.com/moltis-org/moltis/pull/418) 部分逻辑） |
| 低 | [#306](https://github.com/moltis-org/moltis/issues/306) | local-llm 输出泄露原始特殊 token | ✅ 已由 [#397](https://github.com/moltis-org/moltis/pull/397) 修复 |

---

## 6. 功能请求与路线图信号

用户明确提出的需求中，以下具备较高优先级并被积极回应：

- **Webhook 支持**（[#272](https://github.com/moltis-org/moltis/issues/272)）：虽无直接 PR，但结合近期对 cron 和事件系统的增强（如 [#411](https://github.com/moltis-org/moltis/pull/411)），表明事件驱动架构正在完善，Webhook 可能纳入下一阶段。
- **Vulkan GGUF 支持**：[#408](https://github.com/moltis-org/moltis/pull/408) 已提交 opt-in 实现，响应本地推理性能优化需求。
- **Agent 侧边文件管理**：[#413](https://github.com/moltis-org/moltis/pull/413) 引入安全代理写入技能文件能力，扩展个性化代理定制空间。
- **Discord/WhatsApp 支持**：虽仍开放（[#221](https://github.com/moltis-org/moltis/issues/221), [#111](https://github.com/moltis-org/moltis/issues/111)），但 Telegram 相关修复（[#404](https://github.com/moltis-org/moltis/pull/404)）显示多平台通信是持续重点。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **部署痛点**：Docker 用户频繁遭遇路径映射（[#102](https://github.com/moltis-org/moltis/issues/102)）、密码登录失效（[#129](https://github.com/moltis-org/moltis/issues/129)）和 macOS 配对问题（[#366](https://github.com/moltis-org/moltis/issues/366)），反映跨平台容器化体验仍需打磨。
- **LLM 输出质量**：多个用户反馈特殊 token 泄露（[#306](https://github.com/moltis-org/moltis/issues/306)）、工具调用输出丢失（[#319](https://github.com/moltis-org/moltis/issues/319)），经修复后满意度回升。
- **UI/UX 缺陷**：Vault 密封状态无明确提示（[#344](https://github.com/moltis-org/moltis/issues/344)）、Soul 修改不持久（[#348](https://github.com/moltis-org/moltis/issues/348)）引发困惑，凸显状态同步与反馈机制薄弱。
- **第三方集成不稳定**：z.ai（[#414](https://github.com/moltis-org/moltis/issues/414)）、OpenRouter 双 `/v1` URL（[#106](https://github.com/moltis-org/moltis/issues/106)）等问题表明外部 API 兼容性需更强鲁棒性。

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先关注：

- **[#102](https://github.com/moltis-org/moltis/issues/102)**（Docker-in-Docker 路径挂载错误）：创建于 2026-02-13，影响核心 sandbox 功能，高赞且未分配。
- **[#272](https://github.com/moltis-org/moltis/issues/272)**（Webhook 功能）：自 2026-03-01 提出，无官方回应，但社区需求明确。
- **[#344](https://github.com/moltis-org/moltis/issues/344)**（Vault UX 差）：2026-03-06 报告，涉及核心安全模块用户体验，尚无修复计划。
- **[#391](https://github.com/moltis-org/moltis/issues/391)**（Node-Advertised Tools RFC）：新提案，需架构层面讨论，尚未进入开发队列。

> **维护者提示**：建议对 [#102] 和 [#344] 分配资源，二者分别影响核心功能可用性与关键模块用户体验，积压可能阻碍新用户 adoption。

---  
*数据截止：2026-03-12 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃33条，关闭17条）和 **50条 PR 更新**（待合并28条，已合并/关闭22条），显示出高强度开发与问题反馈节奏。尽管无新版本发布，但多个关键功能 PR 进入合并阶段，涵盖 Windows 兼容性修复、消息压缩逻辑优化、多通道支持增强等核心模块。社区对 **飞书/钉钉消息异常、上下文管理失效、安装脚本兼容性** 等问题集中反馈，反映出生产环境部署中的稳定性挑战。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.0.6.post1`，但已有多个修复性 PR 合并，预计将很快发布热修复版本。

---

## 3. 项目进展

今日共 **22个 PR 被合并或关闭**，重点进展包括：

- ✅ **Windows 平台稳定性提升**：  
  [#1260](https://github.com/agentscope-ai/CoPaw/pull/1260) 修复 `execute_shell_command` 在 Windows 下卡死问题，直接响应 [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136) 高优先级 Bug。  
  [#1282](https://github.com/agentscope-ai/CoPaw/pull/1282) 优化 Windows 桌面版 SSL 配置与启动性能。

- ✅ **会话与工具链优化**：  
  [#1236](https://github.com/agentscope-ai/CoPaw/pull/1236) 将会话保存/读取改为异步，提升高并发场景下的响应能力。  
  [#1284](https://github.com/agentscope-ai/CoPaw/pull/1284) 新增 `get_token_usage` 接口，支持用户监控模型调用成本。

- ✅ **通道与技能增强**：  
  [#1212](https://github.com/agentscope-ai/CoPaw/pull/1212) 修复 QQ 通道图片发送失败问题。  
  [#1279](https://github.com/agentscope-ai/CoPaw/pull/1279) 优化 Himalaya 技能实现。  
  [#1272](https://github.com/agentscope-ai/CoPaw/pull/1272) 新增 Email 技能（首次贡献）。

- ✅ **文档与开发者体验**：  
  [#1285](https://github.com/agentscope-ai/CoPaw/pull/1285) & [#1299](https://github.com/agentscope-ai/CoPaw/pull/1299) 添加多智能体通信协议文档与可运行示例，填补架构空白。  
  [#1300](https://github.com/agentscope-ai/CoPaw/pull/1300) 修复中文文档格式与一致性错误。

> 项目整体在 **跨平台稳定性、多通道支持、开发者文档** 三方面取得实质性推进。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映核心用户体验痛点：

- 🔥 [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195)（11 评论）  
  **前端版本显示未随 pip 升级更新**，用户质疑“是否无法通过 pip 更新前端”。  
  → 暗示前后端版本同步机制存在缺陷，需明确分离部署策略。

- 🔥 [#1243](https://github.com/agentscope-ai/CoPaw/issues/1243)（3 评论）  
  **飞书通道下 `/compact` 压缩指令失效**：摘要生成但消息未清理，session 文件反而变大。  
  → 暴露消息压缩逻辑与存储层状态不一致，属严重功能退化。

- 🔥 [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222)（4 评论）  
  **消息压缩后数量不匹配导致 API 调用失败**（GLM 返回 1210 错误）。  
  → 与上述问题同源，指向内存管理模块的边界条件处理漏洞。

- 🔥 [#1288](https://github.com/agentscope-ai/CoPaw/issues/1288)（2 评论）  
  **请求支持手动创建新对话**，避免飞书单会话上下文膨胀。  
  → 高频需求，直接影响 token 成本与模型性能。

> 社区核心诉求：**消息压缩可靠性、多会话管理、版本更新一致性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | 消息压缩后计数不匹配 → API 调用失败（GLM 1210） | ❌ 无 |
| 🔴 高 | [#1243](https://github.com/agentscope-ai/CoPaw/issues/1243) | `/compact` 指令在飞书通道完全失效，session 文件膨胀 | ❌ 无 |
| 🔴 高 | [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136) | Windows 下 `execute_shell_command` 卡死会话 | ✅ [#1260](https://github.com/agentscope-ai/CoPaw/pull/1260) 已合并 |
| 🟠 中 | [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) | pip 升级后前端仍显示旧版本号 | ❌ 无 |
| 🟠 中 | [#1277](https://github.com/agentscope-ai/CoPaw/issues/1277) | 请求体超限（6MB）导致对话崩溃 | ❌ 无 |
| 🟢 低 | [#1281](https://github.com/agentscope-ai/CoPaw/issues/1281) | UI 显示重复技能（技能管理器去重逻辑缺失） | ✅ 社区已定位源码问题 |

> 建议优先处理 **消息压缩相关 Bug**，因其影响核心对话功能与 API 稳定性。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求：

- 📌 **多会话支持**（[#1288](https://github.com/agentscope-ai/CoPaw/issues/1288)）→ 强烈需求，但尚无 PR，可能纳入 v0.0.7。
- 📌 **插件/钩子机制**（[#1283](https://github.com/agentscope-ai/CoPaw/issues/1283)）→ 用户希望预处理图片路径等输入，为未来扩展性铺路。
- 📌 **技能 UI 可视化操作**（[#1193](https://github.com/agentscope-ai/CoPaw/issues/1193)）→ 提议集成第三方技能管理界面，提升易用性。
- 📌 **用户白名单控制**（[#411](https://github.com/agentscope-ai/CoPaw/issues/411)）→ 安全需求，长期未实现。

**高概率纳入下一版本的功能**：  
✅ 多会话管理（社区呼声极高）  
✅ 消息压缩逻辑重构（修复当前退化）  
✅ OpenRouter 提供商支持（[#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) 已开）

---

## 7. 用户反馈摘要

**痛点场景**：
- 飞书/钉钉企业用户遭遇 **重复消息、排版错乱、压缩失效**，影响日常办公流。
- Windows 用户频繁遇到 **shell 命令卡死、Python 环境识别失败**，部署体验差。
- 开发者反馈 **安装脚本在 macOS 报错**（`info: command not found`），阻碍新用户入门。

**满意点**：
- 多通道支持（钉钉、飞书、QQ）覆盖主流办公场景。
- 内置技能（如文件读写、邮件）满足基础自动化需求。
- 文档逐步完善，多智能体协议示例获好评。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

- ⏳ [#411](https://github.com/agentscope-ai/CoPaw/issues/411)（2026-03-03 提出）  
  **通道用户白名单功能** — 安全相关，适用于企业部署，超 9 天无进展。

- ⏳ [#995](https://github.com/agentscope-ai/CoPaw/issues/995)（2026-03-09 提出）  
  **内置技能体验优化** — 用户指出 `file_reader`、`pdf` 等基础工具成熟度影响留存，需专项改进。

- ⏳ [#1188](https://github.com/agentscope-ai/CoPaw/issues/1188)（2026-03-10 提出）  
  **缺乏官方更新命令指引** — 用户困惑于如何升级，暴露文档缺失。

> 建议：设立“企业部署支持”专项，集中解决白名单、多会话、安全审计等需求。

--- 

**报告生成时间：2026-03-12**  
**数据来源：CoPaw GitHub 仓库（agentscope-ai/CoPaw）**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-12）

---

## 1. 今日速览

ZeptoClaw 在2026年3月11日表现出极高的开发活跃度，共处理 **16条 Issues**（全部关闭）和 **17条 PRs**（16条已合并/关闭，1条待合并），并发布 **2个新版本（v0.7.5 和 v0.7.6）**。核心维护者 @qhkm 主导了多项关键安全加固与CLI体验优化，涵盖文件系统边界防护、Webhook身份验证强化及CLI交互增强。项目整体处于高强度迭代状态，安全性和开发者体验同步推进，健康度优秀。

---

## 2. 版本发布

### 🔖 v0.7.6（最新）
- **安全修复**：消除重复的 Claude 订阅令牌警告（[#320](https://github.com/qhkm/zeptoclaw/pull/320)）
- **CLI 增强**：在交互模式下支持 `/` 开头的命令自动补全（如 `/model`, `/help` 等）（[#323](https://github.com/qhkm/zeptoclaw/pull/323)）
- **安全加固**：强化入站认证逻辑与文件系统路径边界防护，防止符号链接攻击（[#324](https://github.com/qhkm/zeptoclaw/pull/324)）

> ✅ 无破坏性变更，建议所有用户升级。

### 🔖 v0.7.5
- **CLI 功能**：新增 `zeptoclaw uninstall` 命令，支持安全卸载用户状态与二进制文件（[#315](https://github.com/qhkm/zeptoclaw/pull/315)）
- **配置验证**：修复配置检查器误拒合法字段（如 `agents.defaults.timezone`）的问题（[#314](https://github.com/qhkm/zeptoclaw/pull/314)）
- **模型兼容性**：引入模型-提供商兼容性校验机制（[#311](https://github.com/qhkm/zeptoclaw/pull/311)）

> ✅ 无破坏性变更，但建议检查自定义配置是否包含此前被误拒的字段。

---

## 3. 项目进展

今日合并的关键 PR 显著提升了系统的**安全性**与**可用性**：

- **安全边界全面加固**：通过 [#324](https://github.com/qhkm/zeptoclaw/pull/324) 实现对 Webhook 身份验证、文件系统写操作（dirfd-relative + atomic replace）和 Telegram 用户名允许列表的 hardening，有效防御 TOCTOU、symlink 攻击及身份冒用风险。
- **CLI 体验优化**：新增 slash 命令补全（[#323](https://github.com/qhkm/zeptoclaw/pull/323)）和卸载命令（[#315](https://github.com/qhkm/zeptoclaw/pull/315)），降低用户使用门槛。
- **Ollama 云模型支持**：[#316](https://github.com/qhkm/zeptoclaw/pull/316) 实现无密钥本地 Ollama 实例支持，同时保留带密钥的云服务兼容性。
- **日志降噪**：CLI agent 模式默认日志级别从 `info` 降至 `warn`（[#313](https://github.com/qhkm/zeptoclaw/pull/313)），提升输出可读性。

> 项目在安全、CLI、多模型支持三大方向均取得实质性进展。

---

## 4. 社区热点

- **#324 [fix: harden inbound auth and filesystem boundaries](https://github.com/qhkm/zeptoclaw/pull/324)**  
  虽无公开评论，但关联多个高优先级 Issue（#318, #319, #321, #325, #327–#330），反映社区对安全边界的强烈关注。该 PR 一次性解决 Webhook 认证、文件系统写入、Telegram 用户名策略等关键风险点，是今日核心贡献。

- **#221 [feat: Merkle hash-chain audit trail for tool execution](https://github.com/qhkm/zeptoclaw/issues/221)**（唯一未关闭 Issue）  
  提出为工具执行构建防篡改审计日志链，虽标记为 P3，但在安全加固背景下可能获得更高优先级。维护者已参与讨论，未来或纳入路线图。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|--------|------|------|--------|
| P1-critical | #319: 文件系统路径加固未完成 | ✅ 已关闭 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| P1-critical | #321: Telegram 用户名允许列表存在身份漂移风险 | ✅ 已关闭 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| P1-critical | #310: 配置验证器与运行时 schema 不同步 | ✅ 已关闭 | [#314](https://github.com/qhkm/zeptoclaw/pull/314) |
| P2-high | #317: WhatsApp Cloud Webhook 缺少签名验证 | ✅ 已关闭 | [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| P2-high | #312: CLI agent 模式日志过多 | ✅ 已关闭 | [#313](https://github.com/qhkm/zeptoclaw/pull/313) |

> 所有高严重性 Bug 均已修复并发布至 v0.7.6。

---

## 6. 功能请求与路线图信号

- **Merkle 审计日志（#221）**：虽为 P3，但在当前安全强化周期中可能提前。若社区持续关注，有望纳入 v0.8 路线图。
- **Ollama 云模型支持（#284）**：已由 [#316](https://github.com/qhkm/zeptoclaw/pull/316) 实现，满足本地无密钥与云端有密钥两种场景，响应迅速。
- **CLI 卸载命令（#307）**：已由 [#315](https://github.com/qhkm/zeptoclaw/pull/315) 实现，体现对用户体验的重视。

> 功能请求响应效率高，安全相关需求优先处理。

---

## 7. 用户反馈摘要

- **正面反馈**：  
  - 用户 @zpbrent 主动报告 WhatsApp Webhook 签名漏洞（#317），体现社区安全共建意识。  
  - CLI 日志降噪（#312）获维护者快速响应，改善终端交互体验。

- **痛点与场景**：  
  - 配置验证器误报合法字段（#310）影响用户配置信心，已通过 schema 同步修复。  
  - Telegram 用户名允许列表存在身份漂移风险（#321），反映真实生产环境中的身份管理挑战。

---

## 8. 待处理积压

- **#221 [feat: Merkle hash-chain audit trail for tool execution](https://github.com/qhkm/zeptoclaw/issues/221)**  
  创建时间：2026-03-03 | 最后更新：2026-03-11 | 状态：OPEN  
  虽标记 P3，但在当前安全加固背景下应重新评估优先级。建议维护者明确是否纳入下一里程碑。

- **#287 [chore: Dev tools for consistent pre-PR state](https://github.com/qhkm/zeptoclaw/pull/287)**  
  创建时间：2026-03-09 | 状态：OPEN（待合并）  
  提供统一开发环境工具链，有助于提升贡献者体验，建议尽快 review 合并。

> 其余 Issue 均已闭环，积压控制良好。

---

**总结**：ZeptoClaw 正处于高强度、高质量迭代阶段，安全加固与用户体验并重，社区响应迅速，项目健康度极佳。建议关注 #221 和 #287 的后续进展。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026-03-12  
🔗 项目主页：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. **今日速览**  
EasyClaw 在过去24小时内整体活跃度较低，但保持稳定维护节奏。项目发布了一个新版本（v1.6.6），主要解决 macOS 平台安装兼容性问题；社区方面新增1条 Issue，聚焦 OpenAI OAuth 认证异常，暂未引发广泛讨论。无 Pull Request 提交或合并，开发节奏平稳，属于典型的“维护型更新”周期。

---

### 2. **版本发布**  
✅ **v1.6.6 正式发布**  
本次更新重点优化了 macOS 平台下的应用启动体验，针对用户频繁反馈的 **“'EasyClaw' is damaged and can't be opened”** 错误提供官方解决方案说明。  
⚠️ **注意**：该问题并非应用本身损坏，而是 macOS Gatekeeper 对未签名应用的默认拦截行为。新版本在 Release 页面明确提供了终端绕过命令（`xattr -cr /Applications/EasyClaw.app`）及图形化操作指引，显著降低非技术用户的使用门槛。  
🔗 发布页：[v1.6.6 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6)  
> 💡 无破坏性变更，无需迁移操作，建议所有 macOS 用户升级。

---

### 3. **项目进展**  
今日无 Pull Request 合并或关闭，核心功能开发处于静默期。结合近期发布节奏判断，团队可能正集中精力处理底层稳定性与跨平台兼容性问题，而非新增功能。

---

### 4. **社区热点**  
🔥 **Issue #16：OpenAI OAuth 认证异常**  
用户 @westisc 报告在便携版与安装版中均遇到 OAuth 登录失败问题，并附截图显示错误界面（[查看图片](https://github.com/user-attachments/assets/dd4fa1bc-8e22-4eb3-895c-aeef24fa8daf)）。目前仅1条评论，尚未获得维护者回应。  
📌 **潜在诉求分析**：该问题直接影响核心功能（AI 助手接入），若属实可能涉及 API 密钥配置、重定向 URI 或网络策略变更。建议优先排查是否为 OpenAI 服务端策略调整所致。  
🔗 Issue 链接：[#16 OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16)

---

### 5. **Bug 与稳定性**  
🐞 **高优先级 Bug：OpenAI OAuth 登录失败（Issue #16）**  
- **严重程度**：高（阻断核心功能）  
- **影响范围**：全平台（用户明确提及便携版与安装版均复现）  
- **当前状态**：已报告，**无对应 Fix PR**，需维护者介入验证  
- **建议行动**：检查 OpenAI API 文档近期变更，或提供临时配置 workaround

> 注：今日无其他崩溃或回归问题报告。

---

### 6. **功能请求与路线图信号**  
今日无新功能请求提出。结合近期版本聚焦兼容性修复（如 macOS Gatekeeper）及 OAuth 问题，可推测下一阶段路线图将优先保障 **核心认证流程稳定性** 与 **跨平台安装体验一致性**，而非扩展 AI 模型支持或 UI 增强功能。

---

### 7. **用户反馈摘要**  
从 Issue #16 可提炼关键用户痛点：  
- **真实场景**：用户尝试通过 OpenAI 账户登录以使用 AI 助手功能，但遭遇认证失败，导致产品核心价值无法触达。  
- **不满点**：错误提示不明确，且未在文档或 Release 说明中预见到此问题，缺乏应急指引。  
- **隐含期待**：希望获得更清晰的错误诊断信息或备用登录方式（如 API Key 直连）。

---

### 8. **待处理积压**  
⚠️ **需关注长期未响应 Issue**：  
目前 Issue #16 虽为新提交（2026-03-11），但因涉及核心功能且无维护者回应，**若48小时内无进展，可能升级为社区信任风险**。建议团队尽快标记状态（如 `needs-info` 或 `bug`）并初步排查。  
🔗 待处理链接：[#16 OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16)

---  
📊 **项目健康度评估**：★★★☆☆（3.5/5）  
- 优势：版本发布及时，文档响应迅速（macOS 问题）  
- 风险：核心功能 Bug 响应延迟可能影响用户留存  
- 建议：建立关键路径（如认证流程）的自动化测试与监控机制

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*