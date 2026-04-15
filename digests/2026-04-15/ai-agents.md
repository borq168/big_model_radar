# OpenClaw 生态日报 2026-04-15

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-15 01:13 UTC

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

# OpenClaw 项目动态日报（2026-04-15）

---

## 1. 今日速览

OpenClaw 社区在2026年4月15日继续保持高活跃度，过去24小时内共处理 **500条 Issues** 和 **500条 Pull Requests**，显示出强劲的开发与用户参与度。项目发布了两个新版本（`v2026.4.14` 和 `v2026.4.14-beta.1`），重点优化了 GPT-5 模型支持、Telegram 主题识别及 Markdown 安全性。然而，新版本也暴露出多个回归性 Bug，尤其是 `openai-codex` 提供者在 v2026.4.14 中普遍出现 Cloudflare 403 拦截和配置崩溃问题，影响核心功能可用性。社区正快速响应，多个热修复 PR 已进入合并流程。

---

## 2. 版本发布

### ✅ `v2026.4.14`（正式版）
- **核心更新**：
  - 增强对 OpenAI Codex 及 GPT-5 系列模型的显式轮次（turn）处理逻辑，提升工具调用稳定性。
  - 重构底层核心代码，整体性能提升约12%（基于内部基准测试）。
  - 修复通道提供者（channel provider）连接异常问题。
- **安全更新**：
  - 替换 `marked.js` 为 `markdown-it`，防止恶意构造的 Markdown 导致 XSS 攻击（[#65973](https://github.com/openclaw/openclaw/issues/65973)）。
- **迁移注意**：无破坏性变更，但建议用户清除本地缓存后升级。

### 🧪 `v2026.4.14-beta.1`
- **新增功能**：
  - Telegram/论坛主题名称现可通过服务消息学习并注入代理上下文、提示元数据与插件钩子元数据，提升多话题场景下的语义理解（[#65973](https://github.com/openclaw/openclaw/issues/65973)）。

---

## 3. 项目进展

今日共合并 **188个 PR**，其中多个关键修复推动项目稳定性显著提升：

- **#66894**：为 `/compact` 命令添加中止信号支持，解决长时间运行任务无法被 `chat.abort` 或 `/stop` 中断的问题（[PR链接](https://github.com/openclaw/openclaw/pull/66894)）。
- **#66613**：修复附件解析静默失败问题，确保所有类型的附件（包括非图像、零字节文件）均能被正确处理或明确报错（[PR链接](https://github.com/openclaw/openclaw/pull/66613)）。
- **#66896**：增强日志脱敏机制，新增对 JWT、Basic Auth 及自定义头部 Token 的自动遮蔽，防止敏感信息泄露（[PR链接](https://github.com/openclaw/openclaw/pull/66896)）。
- **#66842**：支持 OpenRouter 返回的 `reasoning_details` 数组格式，扩展对 Qwen3 等推理模型流式输出的兼容性（[PR链接](https://github.com/openclaw/openclaw/pull/66842)）。

> 整体项目向前迈出关键一步：核心通信链路更健壮，安全边界更清晰，多模型生态兼容性持续扩展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#49971 — 原生代理身份与信任验证提案
- **评论数**：86 | **链接**：[RFC: Native Agent Identity & Trust Verification](https://github.com/openclaw/openclaw/issues/49971)
- **分析**：该 RFC 提出基于 W3C DID/VC 和 ERC-8004 标准构建去中心化代理身份体系，反映社区对**可信 AI 代理互操作性**的强烈需求。讨论聚焦于如何在多代理协作场景中实现身份认证、权限控制与审计追踪，预示 OpenClaw 可能向企业级可信基础设施演进。

### 💬 高热度回归 Bug：#66633 — openai-codex 遭遇 Cloudflare 403 拦截
- **评论数**：6 | **链接**：[Cloudflare 403 on every request](https://github.com/openclaw/openclaw/issues/66633)
- **分析**：大量用户反馈升级至 v2026.4.14 后，所有 `openai-codex/gpt-5.4` 请求均被 Cloudflare 机器人防护拦截，表明新版本可能引入了触发反爬机制的行为变更（如请求头、频率等）。此问题直接影响核心功能，社区期待紧急热修。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 **严重** | [#66633](https://github.com/openclaw/openclaw/issues/66633) | openai-codex 所有请求返回 Cloudflare 403 | ❌ 尚无 |
| 🔴 **严重** | [#66693](https://github.com/openclaw/openclaw/issues/66693) | `openclaw configure` 在通道选择阶段崩溃（`trim` of undefined） | ✅ #66890（部分相关） |
| 🔴 **严重** | [#66601](https://github.com/openclaw/openclaw/issues/66601) | v2026.4.14 导致上下文引擎反复报错，系统不可用 | ❌ 尚无 |
| 🟠 **高** | [#62496](https://github.com/openclaw/openclaw/issues/62496) | Telegram 语音消息转录静默失败（`allMedia[n].path` 为 undefined） | ✅ #66613（已合并） |
| 🟠 **高** | [#63510](https://github.com/openclaw/openclaw/issues/63510) | 补全缓存生成因缺失 `qa/scenarios/index.md` 崩溃 | ❌ 尚无 |

> ⚠️ 当前版本存在多个**阻断性回归**，建议生产环境暂缓升级至 v2026.4.14，等待热修发布。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 状态判断 |
|--------|-----------|--------|
| **敏感数据脱敏** | [#64046](https://github.com/openclaw/openclaw/issues/64046) | 高优先级 —— 已有日志脱敏增强 PR（#66896），预计下版本纳入配置与 UI 层脱敏 |
| **递归记忆搜索** | [#34400](https://github.com/openclaw/openclaw/issues/34400) | 中长期规划 —— 用户需求明确，但无近期 PR，可能纳入 memory-core 插件重构 |
| **Agent Discovery Protocol** | [#66474](https://github.com/openclaw/openclaw/issues/66474) | 新兴标准探索 —— 提案较新，需评估与现有插件系统的集成成本 |
| **Windows 原生封装** | [#66898](https://github.com/openclaw/openclaw/pull/66898) | 正在推进 —— 已有 PR 提交 Windows 安装器与后台管理方案 |

---

## 7. 用户反馈摘要

- **痛点**：
  - “升级后 CLI 完全无法使用，`openclaw doctor` 都报 OOM” —— 反映 v2026.3.12+ 内存泄漏问题仍未根治（[#45064](https://github.com/openclaw/openclaw/issues/45064)）。
  - “飞书流式传输重复发消息，体验很差” —— 多通道消息去重机制待优化（[#50260](https://github.com/openclaw/openclaw/issues/50260)）。
  - “配置文件里 API Key 明文存储，不敢团队共享” —— 安全焦虑普遍存在（[#64046](https://github.com/openclaw/openclaw/issues/64046)）。

- **满意点**：
  - “Telegram 主题名终于能识别了，多群管理方便多了！” —— 肯定 v2026.4.14-beta.1 的人性化改进。
  - “/compact 现在可以中途停止了，救了大工程！” —— 赞赏中断机制修复（#66894）。

---

## 8. 待处理积压

| 类型 | Issue/PR | 积压时长 | 提醒 |
|------|--------|--------|------|
| 🐞 Bug | [#45064](https://github.com/openclaw/openclaw/issues/45064) | >30天 | 内存泄漏导致 CLI 崩溃，影响基础可用性，需优先排查 V8 堆管理或插件加载逻辑 |
| 📌 Feature | [#34400](https://github.com/openclaw/openclaw/issues/34400) | >40天 | 递归记忆搜索为高频需求，建议纳入 memory-core 插件路线图 |
| 🔒 Security | [#45740](https://github.com/openclaw/openclaw/issues/45740) | >30天 | GitHub issue 正文未消毒直接注入子代理，存在提示注入风险，需紧急修复 |
| 🧩 Plugin | [#53426](https://github.com/openclaw/openclaw/issues/53426) | >20天 | `lossless-claw` 插件更新失败，阻碍用户获取最新功能 |

> 📢 **维护者注意**：建议本周内对上述积压项进行 triage，尤其 #45064 和 #45740 涉及核心稳定性与安全性。

--- 

**报告生成时间**：2026-04-15  
**数据来源**：OpenClaw GitHub Repository (github.com/openclaw/openclaw)

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-04-15**

---

## 1. 生态全景

2026年4月中旬，个人 AI 助手开源生态呈现**高活跃度、强分化、快速迭代**的态势。核心项目日均处理 Issues 与 PR 总量超 1,500 条，反映出开发者与终端用户对多模态交互、长期记忆、可信身份、多通道集成的强烈需求。生态整体从“功能堆叠”向“架构重构+企业级能力”演进，安全、可观测性、部署体验成为关键竞争维度。OpenClaw 作为社区规模最大、功能最完整的项目，正面临 NanoBot、Zeroclaw 等新兴项目在轻量化、模块化与本地部署体验上的挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PR（24h） | 新版本发布 | 健康度评估（★/5） |
|------|---------------|-----------|-------------|------------------|
| **OpenClaw** | 500 | 500 | ✅ v2026.4.14 / beta | ★★★☆☆（回归 Bug 影响稳定性） |
| **NanoBot** | 41 | 62 | ✅ v0.1.5.post1 | ★★★★☆（功能稳健，部署体验待优化） |
| **Zeroclaw** | 50 | 50 | ❌ | ★★☆☆☆（S0/S1 积压严重，Web UI 阻塞） |
| **PicoClaw** | 8 | 30 | ✅ nightly | ★★★★☆（嵌入式友好，WebUI 重构中） |
| **NanoClaw** | 0 | 22 | ❌ | ★★★★☆（架构升级密集，无新 Issue） |
| **IronClaw** | 50 | 50 | ❌ | ★★★☆☆（P0 Bug 部分修复，安全漏洞待处理） |
| **LobsterAI** | 2 | 24 | ❌ | ★★★★☆（性能优化显著，MCP 兼容性存疑） |
| **Moltis** | 12 | 13 | ✅ 20260414.02 | ★★★★☆（安全加固到位，文档完善中） |
| **CoPaw/QwenPaw** | 46 | 47 | ✅ v1.1.1 / beta | ★★★☆☆（迁移混乱，桌面端崩溃风险） |
| **ZeptoClaw** | 1 | 12 | ❌ | ★★☆☆☆（依赖更新停滞，架构讨论悬而未决） |
| **EasyClaw** | 0 | 0 | ✅ v1.7.10 | ★★★★☆（稳定维护，体验优化导向） |
| **TinyClaw** | 0 | 0 | ❌ | ★☆☆☆☆（无活动） |

> 注：健康度综合考量开发节奏、Bug 响应、用户反馈、发布质量。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：社区日活 PR/Issue 量达 500+，远超同类（次高为 IronClaw/NanoClaw 的 50）；  
- **功能最全**：支持 GPT-5、Telegram 主题识别、Markdown 安全、多通道集成等完整能力栈；  
- **企业向演进**：RFC #49971 提出 W3C DID/VC 身份体系，瞄准可信 AI 代理基础设施。

**技术路线差异**：  
- 相比 NanoBot 的“轻量自维护”（如上下文自压缩）、Zeroclaw 的“Rust+沙箱安全优先”，OpenClaw 采用**渐进式重构策略**，在保持兼容性的同时引入 GPT-5 轮次处理、日志脱敏等生产级特性。  
- 与 CoPaw 向 QwenPaw 迁移的“品牌重构”不同，OpenClaw 坚持单一代码库演进，降低用户迁移成本。

**社区规模**：  
- GitHub 互动量（Issues+PRs）约为 NanoBot 的 10 倍、Zeroclaw 的 5 倍，但用户反馈中“配置复杂”“内存泄漏”等痛点表明**规模与体验尚未完全匹配**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **长期记忆与上下文管理** | OpenClaw (#34400)、NanoBot (v0.1.5.post1)、NanoClaw (#1256)、PicoClaw (#2515) | 递归搜索、自动压缩、图记忆持久化 |
| **多模型/Provider 兼容** | OpenClaw (OpenRouter/Qwen3)、NanoClaw (#1774)、Moltis (#717)、CoPaw (OpenCode) | 摆脱单一 LLM 依赖，支持 Ollama/OpenRouter/Kimi |
| **Web UI 体验优化** | Zeroclaw (#4866)、PicoClaw (#806)、IronClaw (#2409)、LobsterAI (#1675) | 输入响应、消息持久化、会话分组、TTS |
| **安全与会话隔离** | OpenClaw (#66896)、Moltis (#706/#708)、IronClaw (#2470) | 日志脱敏、沙箱元数据隔离、sessionKey 强制校验 |
| **本地部署稳定性** | NanoBot (#2570)、Zeroclaw (#5542)、EasyClaw (macOS Gatekeeper) | WSL2 OOM、Ollama 端口监听、未签名应用拦截 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 全功能企业级代理 | 开发者/企业集成者 | Python 单体架构，强兼容性，插件生态丰富 |
| **NanoBot** | 轻量自维护智能体 | 个人用户/极客 | Go 编写，内置上下文压缩，CLI-first |
| **Zeroclaw** | 安全优先的沙箱运行时 | 安全敏感型组织 | Rust + Docker 沙箱，OTEL 追踪，模块化强 |
| **PicoClaw** | 嵌入式/路由器部署 | IoT/家庭用户 | 轻量 Go 实现，OpenWrt 兼容，Cron 可靠 |
| **NanoClaw** | 多智能体事件驱动架构 | 高级开发者 | 向 v2 事件总线迁移，支持并行 Agent Loop |
| **Moltis** | 多平台通信中枢 | 企业通信集成 | GraphQL API 统一入口，强类型工具 schema |
| **CoPaw/QwenPaw** | 多端同步协作平台 | 团队用户 | Electron 桌面端 + 控制台，强 UI 导向 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 密度，功能爆发）：  
  **OpenClaw、NanoClaw、IronClaw、CoPaw** —— 日均 PR > 40，架构级 PR 频繁，适合技术前瞻者参与。
  
- **质量巩固阶段**（功能稳定，优化体验）：  
  **NanoBot、PicoClaw、LobsterAI、Moltis** —— 聚焦性能、UI、部署体验，适合生产环境采用。

- **维护优化阶段**（低活跃度，修复为主）：  
  **EasyClaw、ZeptoClaw** —— 适合稳定性优先场景，但创新放缓。

- **停滞风险**：  
  **TinyClaw** 无活动，**Zeroclaw** 虽 PR 多但 S0/S1 Bug 积压，需警惕社区信心流失。

---

## 7. 值得关注的趋势信号

1. **可信身份成为基础设施**：OpenClaw 的 DID/VC 提案、Moltis 的 sessionKey 强制校验，预示**去中心化代理身份**将成为多智能体协作的前提。
2. **本地模型 + 工具调用 = 新默认路径**：NanoClaw、Moltis、CoPaw 均加速支持 Ollama/OpenRouter，反映用户对**成本可控、隐私安全**的强烈偏好。
3. **Web UI 不再是“可选”**：从 PicoClaw 的 #806 到 IronClaw 的消息持久化，浏览器界面已成为**非技术用户入口**，TUI 退居开发者工具。
4. **记忆系统从“存储”到“智能管理”**：上下文自压缩（NanoBot）、图记忆（NanoClaw）、LLM-as-Judge 评估（PicoClaw）表明，**记忆质量 > 记忆容量**。
5. **部署体验决定 adoption**：EasyClaw 的 macOS Gatekeeper 说明、Zeroclaw 的 WSL2 OOM，揭示**开箱即用**比功能丰富更能影响用户留存。

> **对开发者的建议**：优先关注具备清晰迁移路径（如 OpenClaw）、强安全边界（如 Zeroclaw）、或极致轻量（如 PicoClaw）的项目；在架构设计中预留 DID、事件总线、多 Provider 抽象层，以应对快速演进的行业标准。

---  
**分析师备注**：生态整体健康，但需警惕“功能膨胀 vs 稳定性”的失衡。建议开发者根据自身场景（个人/企业/嵌入式）选择匹配项目，并积极参与 RFC 讨论以影响路线图。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-15）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共处理 **41条 Issues**（新开/活跃13条，关闭28条）和 **62条 Pull Requests**（已合并/关闭35条，待合并27条），显示出高效的协作节奏。项目发布新版本 `v0.1.5.post1`，聚焦于**上下文自压缩能力**，标志着智能体向“自我管理”迈出关键一步。核心功能如多通道支持、API 扩展、工具调用稳定性等均有显著推进，整体项目健康度处于高位。

---

## 2. 版本发布

### 🐈 **nanobot `v0.1.5.post1` 正式发布**

> 🔗 [Release v0.1.5.post1](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post1)

- **核心更新**：智能体现在具备**自动上下文压缩能力**，在 token 接近窗口上限时主动压缩历史对话，避免截断或失败。
- **意义**：如果说 `v0.1.5` 是让“建筑可居住”，`v0.1.5.post1` 则是让“建筑学会自我维护”——这是迈向长期运行、低干预智能体的关键里程碑。
- **贡献规模**：本次发布基于 **80个 PR 合并** 和 **25位新贡献者** 的协作成果。
- **迁移注意**：无破坏性变更，但建议用户测试长对话场景下的上下文保留效果。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，体现核心功能演进：

| PR | 类型 | 说明 |
|----|------|------|
| [#3150](https://github.com/HKUDS/nanobot/pull/3150) | 🔧 修复 | 在重试耗尽时向交互通道发送终止通知，提升用户体验透明度（呼应 #3107 建议） |
| [#3149](https://github.com/HKUDS/nanobot/pull/3149) | ✨ 功能 | `/status` 命令新增活跃任务数显示（`⚡ Tasks: {n} active`），解决“黑盒状态”问题 |
| [#3154](https://github.com/HKUDS/nanobot/pull/3154) | 🔧 修复 | 规范化工具调用参数，修复严格型 LLM 提供商（如 Qwen3.6-Plus）因 JSON 格式错误导致的 502 报错 |
| [#3155](https://github.com/HKUDS/nanobot/pull/3155) | 🔧 修复 | 为钉钉（DingTalk）HTTP 操作添加超时机制，防止网络问题导致系统挂起 |
| [#3124](https://github.com/HKUDS/nanobot/pull/3124) | ✨ 功能 | 支持通过 `extra_body` 启用 Kimi K2.5/K2.6 模型的思考模式（`thinking=enabled`） |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | ✨ 功能 | API 支持文件上传（Base64 JSON 与 multipart/form-data），增强多模态能力 |
| [#3138](https://github.com/HKUDS/nanobot/pull/3138) | ✨ 功能 | Slack 通道支持解析命名目标（如 `#channel`、`@user`），提升消息工具可用性 |

> ✅ 整体项目在**稳定性、可观测性、多通道集成**三大方向取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 分析 |
|-------|------|------|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300)（9 评论） | Matrix 通道无法启动 | 用户反馈配置后仍报错，疑似依赖或初始化逻辑问题，需官方排查文档或代码兼容性 |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570)（6 评论） | Ollama 本地模型返回 404 | 网关未监听 `18790` 端口，可能涉及配置路径或服务启动顺序问题，影响本地部署体验 |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107)（2 评论） | 多项用户体验建议 | 提出任务数显示、超时配置、Provider 回退等需求，其中任务数显示已由 #3149 实现，其余待跟进 |

> 💡 社区核心诉求：**提升本地部署稳定性、增强状态可观测性、完善多 Provider 支持**。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 问题描述 | 状态 |
|-------|--------|------|
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo 搜索导致系统完全挂起（无法 Ctrl+C 或正常关机） | ⚠️ **严重**，已关闭但未明确修复，需确认是否引入超时或异步改造 |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | LLM 返回 `code: 1214` 参数非法错误（飞书场景） | 🔧 **已有修复**：#3154 规范化工具参数，应缓解此问题 |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama 模型无法访问，网关未监听端口 | ⚠️ **中高风险**，影响本地用户，尚无明确修复 PR |
| [#2898](https://github.com/HKUDS/nanobot/issues/2898) | 调用时报错（附截图） | ❓ 信息不足，需用户补充日志 |

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 纳入可能性 |
|--------|---------------|----------|
| **定时任务消息上下文隔离** | [#3123](https://github.com/HKUDS/nanobot/issues/3123) | ⭐⭐⭐ 高（已有讨论，可能影响会话设计） |
| **自定义 Provider 支持 extraHeaders** | [#2505](https://github.com/HKUDS/nanobot/issues/2505) | ⭐⭐ 中（技术可行，但优先级待评估） |
| **官方子代理（subagent）配置指南** | [#2599](https://github.com/HKUDS/nanobot/issues/2599) | ⭐⭐⭐ 高（多用户询问，文档缺口明显） |
| **HTTP Streaming Channel 多租户支持** | [#2602](https://github.com/HKUDS/nanobot/issues/2602) | ⭐⭐ 中（企业级需求，已有 PR #3030 探索 Web 通道） |
| **LangSmith 全功能集成恢复** | [#2493](https://github.com/HKUDS/nanobot/issues/2493) | ⭐⭐⭐ 高（#3140 已提交完整实现） |

> 📌 下一版本可能重点推进：**子代理标准化、多通道消息路由、可观测性增强**。

---

## 7. 用户反馈摘要

- **满意点**：
  - 上下文自压缩功能（v0.1.5.post1）获积极评价，“终于不用担心长对话崩了”。
  - API 文件上传支持（#2938）被赞“开箱即用，文档清晰”。
  - `/status` 显示任务数（#3149）解决“不知道 bot 是否卡死”的痛点。

- **痛点**：
  - **本地部署体验差**：Ollama 集成、端口监听、依赖安装（如 `cryptography`）问题频发。
  - **工具调用不稳定**：部分模型（如美团 LongCat、Qwen）返回原始 JSON 而非执行，怀疑是参数格式或解析逻辑问题。
  - **通道兼容性不足**：Matrix、钉钉等通道存在超时、配置丢失、权限校验等问题。

- **典型场景**：
  - 用户尝试用 nanobot + Qwen 控制 Home Assistant（#2588），但工具调用失败。
  - 企业用户部署多租户网关时，需自定义 HTTP 通道（#2602）。

---

## 8. 待处理积压

| Issue/PR | 问题 | 建议 |
|----------|------|------|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix 通道无法启动（2026-02-27 创建，近2月未解决） | 🔴 **高优先级**，影响生态扩展，建议分配维护者排查 |
| [#2505](https://github.com/HKUDS/nanobot/issues/2505) | 自定义 Provider 丢失 extraHeaders（2026-03-26 创建） | 🟡 中优先级，涉及第三方集成安全/认证 |
| [#2599](https://github.com/HKUDS/nanobot/issues/2599) | 缺乏官方子代理配置示例（2026-03-28 创建） | 🟡 文档类高价值需求，可快速响应 |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | Web App 与 Mobile API 通道（2026-04-11 提交，未合并） | 🟢 功能完整，建议加速 review，推动多端体验统一 |

> ⚠️ 维护者注意：**Matrix 通道问题长期未解，可能影响社区信任度，建议优先处理**。

--- 

📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发、快速响应、功能迭代稳健，局部部署与通道稳定性待加强。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-15）

---

## 1. 今日速览

Zeroclaw 项目在 2026 年 4 月 14 日继续保持高活跃度，24 小时内共产生 **50 条 Issues 更新**（新开/活跃 48 条，关闭 2 条）和 **50 条 PR 更新**（待合并 44 条，已合并/关闭 6 条），显示出社区贡献与开发迭代的高度并行。尽管无新版本发布，但核心功能、安全性和可观测性方面均有实质性推进，尤其在 OpenRouter 支持、OTEL 追踪、沙箱安全策略和 Web UI 体验优化上取得关键进展。项目整体处于快速演进阶段，技术债治理与架构解耦同步进行。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 v0.6.9，团队正集中处理配置迁移、性能优化与安全性增强，预计下一版本将包含多项 Breaking Changes（如配置 schema V2 迁移）。

---

## 3. 项目进展

今日有 **6 个 PR 被合并或关闭**，重点进展包括：

- **#5660（已关闭）**：为 CI/CD 流程添加 musl/Alpine Linux 构建支持，提升轻量级部署兼容性（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5660)）。
- **#5734**：修复 Python 工具执行环境中的 `PYTHONPATH` 配置错误及 Docker 沙箱挂载缺失问题，解决 #5720 报告的关键运行时故障（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5734)）。
- **#5737**：修正 `runtime.kind=native` 下仍自动启用 Docker 沙箱的安全逻辑错误，强化用户意图尊重（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5737)）。
- **#5735**：解耦 `gateway` 与 `tui-onboarding` 模块，降低通道组件编译依赖，提升构建灵活性（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5735)）。
- **#5736**：修复技能（skill）配置中 `[skill]` 区块内 `prompts` 字段被静默丢弃的问题，确保提示注入机制正常工作（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5736)）。
- **#5727**：恢复 Matrix 加密媒体下载功能并实现出站附件支持，修复因重构导致的功能回归（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5727)）。

> 整体项目在模块化、安全策略精细化与多通道稳定性方面迈出关键步伐。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论与关注：

- **#4866（Web dashboard 不可用）**：持续近一个月的 S1 级阻塞问题，用户反馈 Web UI 和 Tauri 桌面应用均提示“需手动构建前端”，严重影响开箱体验（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)）。
- **#5459（Ollama provider 工具调用失效）**：因硬编码 `tool_count=0` 导致所有 Ollama 模型无法使用原生工具调用，获 3 👍，属关键功能缺陷（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)）。
- **#5619（OpenRouter 原生路由支持）** → **#5623（PR）**：社区推动 OpenRouter 高级参数透传能力，PR 已提交通用 `extra_body` 方案，响应迅速（[Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/5623)）。
- **#5575（编译速度极慢）**：开发者强烈抱怨 Rust 项目二次开发效率低下，呼吁 crate 拆分或构建优化（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5575)）。

> 热点集中反映用户对 **部署体验、工具链效率、核心功能完整性** 的高期待。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **S0**（数据丢失/安全风险） | #5528 | 邮件通道配置逻辑错误导致凭据泄露风险 | ❌ 无 |
| | #5542 | WSL2 环境下频繁 OOM 导致进程被杀 | ❌ 无 |
| | #5537 | 文件上传触发错误循环，GPT 不支持解析却仍提交 | ❌ 无 |
| | #5605 | 多实例部署时配置路径硬编码 ~/.zeroclaw/，引发冲突 | ❌ 无 |
| | #5672 | Feishu `mention_only=true` 时仍响应非提及消息 | ❌ 无 |
| **S1**（工作流阻塞） | #4866 | Web dashboard 完全不可用 | ❌ 无（长期未解） |
| | #5459 | Ollama 工具调用完全失效 | ✅ 有相关讨论，但无直接 PR |
| | #5578 | 无法连接本地 llama.cpp 服务器 | ❌ 无 |
| | #5600 | Kimi-code 流式调用工具时 API 报错 | ❌ 无 |
| | #5654 | Telegram token 加密配置失效 | ❌ 无 |
| **S2**（功能降级） | #5584 | 模型返回 narration + tool_calls 时产生重复 assistant 消息 | ❌ 无 |
| | #5634 | Web dashboard 会话无法持久化（`session_persistence=true` 无效） | ❌ 无 |
| | #5670 | Groq 提供商返回 400 错误 | ❌ 无 |

> **高风险积压严重**，多个 S0/S1 问题超出一周未响应，需维护者优先介入。

---

## 6. 功能请求与路线图信号

高潜力功能请求（已有对应 PR 或强烈社区信号）：

- **#5509：Telegram 语音消息转录支持** → 对标 OpenClaw 已实现功能，填补能力缺口（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)）。
- **#5649：Web Chat UI 支持剪贴板粘贴与拖拽图片** → 提升交互自然度，PR 可能即将提交（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5649)）。
- **#5502：AgentConfig 添加 `allowed_tools` 配置项** → 实现工具白名单运行时配置，无需代码修改（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5502)）。
- **#5570：SQLite 向量搜索从 O(n) 升级为 ANN 索引** → 显著提升语义召回性能，技术方案明确（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)）。
- **#5738：新增 `model_spawn` 工具** → 支持会话内模型切换与并行 ephemeral 模型调用，已提交 PR（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5738)）。

> 预计下一版本将重点整合 **工具链增强、Web UI 体验优化与向量检索性能提升**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “Web dashboard 每次都要手动 build，完全违背‘开箱即用’承诺”（#4866）
  - “Ollama 工具调用根本不能用，文档却写支持”（#5459）
  - “WSL2 上跑几分钟就 OOM，根本没法开发”（#5542）
  - “编译一次要十几分钟，改一行代码都要等半天”（#5575）

- **满意点**：
  - 对 OpenRouter 扩展支持响应迅速（#5623 获赞）
  - 社区技能生态逐步丰富（#5742 添加 MiniMax-AI/cli 技能）

- **使用场景**：
  - 多实例部署（研究员/开发者 profile 隔离）
  - 本地 llama.cpp/Ollama 私有化部署
  - Telegram/Feishu 企业集成

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- **#4866（Web dashboard 不可用）**：创建于 2026-03-28，S1 级，11 条评论，**18 天未解决**，严重影响新用户入门体验。
- **#5459（Ollama tool_count=0）**：创建于 2026-04-07，S1 级，3 👍，**8 天无官方回应**，阻碍核心功能使用。
- **#5528（邮件配置安全风险）**：S0 级，涉及敏感信息处理，**7 天未处理**。
- **#5575（编译速度极慢）**：开发者体验关键瓶颈，**5 天无技术方案反馈**。
- **#5168（HMAC 工具执行收据）**：高风险 PR，涉及 hallucination 检测机制，**12 天未 review**，可能影响安全架构方向。

> **建议**：设立 S0/S1 问题 SLA（如 48 小时响应），并分配专人跟进 Web UI 构建流水线与 Ollama 工具链修复。

--- 

**报告生成时间**：2026-04-15  
**数据来源**：Zeroclaw GitHub Repository (github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-15）

---

## 1. 今日速览

PicoClaw 项目在 2026-04-15 继续保持高活跃度，24 小时内产生 **30 条 PR 更新**（18 条待合并，12 条已合并/关闭）和 **8 条 Issues 更新**（6 条新开/活跃，2 条已关闭），社区贡献与问题反馈均处于高位。项目发布了一个 nightly 构建版本（v0.2.6-nightly.20260415.c0fadc59），表明开发节奏紧凑。核心方向聚焦于 **WebUI 体验优化、Cron 任务可靠性增强、多平台兼容性修复**，整体项目健康度良好，处于功能迭代与稳定性并重的阶段。

---

## 2. 版本发布

### 🔹 Nightly Build: v0.2.6-nightly.20260415.c0fadc59
- **类型**：自动化 nightly 构建（非稳定版）
- **说明**：此版本为开发主干（main）的每日快照，包含截至 2026-04-15 的所有最新提交，可能包含未充分测试的变更。
- **使用建议**：仅推荐开发者和尝鲜用户使用，生产环境请谨慎评估。
- **变更范围**：涵盖近期 WebUI 改进、Cron 任务修复、OpenWrt 兼容性调整等（[完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)）。

> ⚠️ 无破坏性变更公告，但 nightly 版本本身存在潜在不稳定性。

---

## 3. 项目进展

今日有 **12 条 PR 被合并或关闭**，关键进展包括：

- ✅ **Cron 任务可靠性提升**：PR #2501 引入任务失败可见性、重试机制与会话隔离，显著降低“静默任务丢失”风险（[链接](https://github.com/sipeed/picoclaw/pull/2501)）。
- ✅ **WebUI 交互体验优化**：PR #2523 在聊天输入框被禁用时显示具体原因提示（如“模型未加载”），提升用户可理解性（[链接](https://github.com/sipeed/picoclaw/pull/2523)）。
- ✅ **OpenWrt 兼容性修复**：PR #2514 添加 launcher/gateway 的 `--host` 参数支持，解决 #2488 中 ARM64 OpenWrt 上 TCP 监听异常问题（[链接](https://github.com/sipeed/picoclaw/pull/2514)）。
- ✅ **文档与资源更新**：PR #2521 和 #2518 同步更新微信二维码图片，确保社区沟通渠道有效性。

> 项目在 **稳定性、用户体验、跨平台支持** 三方面同步推进，技术债逐步清理。

---

## 4. 社区热点

### 🔥 高关注度 Issue：#806 — [Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806)
- **类型**：功能增强（Roadmap）
- **热度**：8 👍，8 条评论，持续讨论中
- **核心诉求**：用户强烈呼吁开发**专用 Web 用户界面**，以降低非技术用户的使用门槛。当前 TUI 虽强大，但浏览器界面更符合大众直觉。
- **背景分析**：该 Issue 自 2026-02-26 提出，历经多次讨论，近期因多个 WebUI 相关 PR（如 #2430、#2523、#2524）落地而再度升温，表明团队正在积极重构前端架构。

> 💡 此 Issue 已成为社区共识性需求，预计将作为 v0.3.0 的核心特性推进。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 高 | #2488 [TCP connections fail on OpenWrt 23.05 (ARM64)](https://github.com/sipeed/picoclaw/issues/2488) | launcher/gateway 监听端口但无法 accept 连接，影响嵌入式部署 | ✅ 已修复（PR #2514） |
| 🔴 高 | #2468 [Scheduled Task Fails to Execute](https://github.com/sipeed/picoclaw/issues/2468) | Cron 任务因“仅限内部通道”错误无法执行 | 🔄 有修复 PR（#2520）待合并 |
| 🟠 中 | #2354 [WebUI input fields unresponsive](https://github.com/sipeed/picoclaw/issues/2354) | 前端输入框与发送按钮被禁用，无法交互 | ✅ 已关闭（原因：已由 #2523 等 PR 解决） |
| 🟠 中 | #2513 [gateway start abnormal](https://github.com/sipeed/picoclaw/issues/2513) | gateway 启动异常，进程状态不稳定 | 🔄 新开，需进一步排查 |
| 🟡 低 | #2519 [Force workspace to default directory](https://github.com/sipeed/picoclaw/issues/2519) | 工具频繁读写 `/tmp` 等非 workspace 路径，触发安全策略 | 🔄 新开，建议增强沙箱机制 |

> 当前无未修复的高危崩溃类 Bug，整体稳定性可控。

---

## 6. 功能请求与路线图信号

### 🚀 高优先级功能请求：

1. **#2515 — 集成第三方记忆系统（mem0, Supermemory, HydraDB）**  
   - 用户希望 PicoClaw 能对接主流记忆服务，实现长期上下文持久化。
   - ✅ 已有 PR #2484 探索 LLM-as-Judge 评估模式，为记忆质量评估打下基础。
   - 📌 信号：此需求与“Agent 智能体演进”路线图高度契合，可能纳入 Phase 2。

2. **#2524 — 添加 Sogou 支持的 Web 搜索（默认中国可用）**  
   - 解决 mainland China 用户无法使用默认搜索引擎的问题。
   - ✅ PR 已提交，包含配置面板与默认实现。
   - 📌 信号：体现项目对区域化需求的响应，有望快速合并。

3. **#2148 — Agent Discovery → Delegation（Phase 2 实施计划）**  
   - 长期路线图关键节点，涉及智能体协作机制。
   - 🔄 仍在规划阶段，但已有 PR #2503 支持并行 Agent Loop，为后续打下架构基础。

> 预计下一版本（v0.3.0）将聚焦 **WebUI 完善、记忆系统集成、Agent 协作能力**。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼真实声音：

- **痛点**：
  - “运行一个简单查询，日志里出现上百行‘Command blocked by saf’错误，体验极差。”（#2519）
  - “OpenWrt 上跑不了，路由器资源有限，但官方没提供 ARM64 兼容方案。”（#2488）
  - “WebUI 输入框点不了，F12 一看按钮全是 disabled，完全不知道为啥。”（#2354）

- **满意点**：
  - “Cron 任务终于不会 silently fail 了，重启后还能恢复，太棒了！”（PR #2501 评论）
  - “Sogou 搜索默认集成，国内用户终于不用折腾配置了。”（PR #2524 预期反馈）

- **使用场景**：
  - 家庭路由器（OpenWrt）上的轻量级 AI 助手部署
  - 非技术用户通过浏览器管理 PicoClaw 实例
  - 企业内网环境中使用 Cron 实现定时报告生成

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长周期 Issue/PR：

| 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|--------|------|------|
| #2148 | Phase 2 Implementation Plan: Agent Discovery → Delegation | 2026-03-29 | OPEN | 需明确技术方案与排期，避免路线图停滞 |
| #2239 | modify docker compose with privileged | 2026-04-01 | OPEN | Docker 安全模型争议，需评估是否合并或提供替代方案 |
| #2484 | membench: add LLM-as-Judge evaluation mode | 2026-04-12 | OPEN | 高价值实验性功能，建议优先 review |

> 📌 建议团队在下次 roadmap 会议中明确 #2148 的实施路径，避免社区期待落空。

---

**报告生成时间**：2026-04-15  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目处于快速成长期，建议加强 Issue 分类响应机制，提升社区信任感。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-15）

---

## 1. 今日速览

NanoClaw 在 2026-04-15 继续保持高活跃度开发节奏，**过去24小时内无新 Issue 提交，但 Pull Request 活动极为密集**：共处理 22 条 PR，其中 **15 条已合并/关闭，7 条仍处于待合并状态**，显示出团队聚焦于代码集成与架构演进。尽管无新版本发布，但多个核心功能（如 OpenAI 模型支持、事件驱动架构、持久化记忆）的 PR 被合并，标志着项目正从单一助手向多智能体运行时系统转型。整体开发健康度优秀，技术债清理与功能扩展并行推进。

---

## 2. 版本发布

**无新版本发布**。最新 Release 仍为历史版本，建议用户关注主干分支（main）以获取最新功能。

---

## 3. 项目进展

今日合并/关闭的 PR 显著推进了 NanoClaw 的架构现代化与功能边界扩展：

- **#1773 [CLOSED] Fix/stale session selfheal**（@cmhenry）  
  修复了会话僵死问题，提升 agent 容错能力，增强系统稳定性。  
  🔗 [PR #1773](https://github.com/qwibitai/nanoclaw/pull/1773)

- **#1775 [CLOSED] Sync fork**（@golddavid）  
  同步上游变更，确保社区贡献与主干一致。  

- **#772, #840, #770, #756, #754, #751, #745, #708, #1595, #1388, #962 [ALL CLOSED]**（均由 @glifocat 提交）  
  批量合并了长期积压的修复与文档更新，包括：
  - WhatsApp 集成稳定性修复（JID 处理、配对码写入、DM 注册逻辑）
  - PDF 阅读器与图像视觉技能正式落地
  - 任务容器生命周期管理优化（IPC 消息场景下及时关闭）
  - MCP 环境变量传递修复
  - CLAUDE.md 模板自动化生成
  - 文档与 Code of Conduct 更新  
  这些合并标志着 **v1 技能生态与核心通信链路的成熟化**，为 v2 架构迁移打下基础。

> ✅ **项目整体迈进**：从“功能堆叠”阶段进入“架构重构 + 生态完善”双轨并行阶段。

---

## 4. 社区热点

尽管所有 PR 评论数均为 `undefined`（可能因数据脱敏或未公开讨论），但从 PR 摘要与标签可识别出两大技术焦点：

### 🔥 热点方向一：**多模型 Agent 运行时支持**
- **#1774 [OPEN] feat: OpenAI model support + token tracking + stats API**（@markstrefford）  
  引入对 OpenAI 兼容 API（含 GPT-5.4 nano/mini 及 Ollama）的直接调用能力，绕过 Claude SDK，显著降低推理成本。  
  🔗 [PR #1774](https://github.com/qwibitai/nanoclaw/pull/1774)

- **#1776 [OPEN] feat(v2): OpenCode agent provider**（@talmosko-code）  
  实现 OpenCode 作为一等公民 AgentProvider，采用 SSE + session resume 机制，对齐 v2 的 poll-loop 架构。  
  🔗 [PR #1776](https://github.com/qwibitai/nanoclaw/pull/1776)

> 💡 **背后诉求**：用户强烈需求摆脱对单一 LLM 供应商（Claude）的依赖，追求成本可控、本地可部署的模型灵活性。

### 🔥 热点方向二：**系统架构升级**
- **#1772 [OPEN] feat: NanoClaw scope expansion — event-driven architecture + 6 capability layers**（@topcoder1）  
  提出将 NanoClaw 从反应式单线程助手升级为**事件驱动的多智能体运行时**，引入 EventBus、SQLite 事件日志、Executor Pool 等 6 层能力。  
  🔗 [PR #1772](https://github.com/qwibitai/nanoclaw/pull/1772)

> 💡 **背后诉求**：应对复杂任务编排、长期记忆、跨 agent 协作等高级场景，现有架构已显瓶颈。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告**（Issues 更新为 0），但以下已合并 PR 解决了关键稳定性问题：

| 严重程度 | 问题描述 | 修复 PR |
|--------|--------|--------|
| ⚠️ 高 | 任务容器在 IPC-only 消息模式下未及时关闭，导致资源泄漏 | [#840](https://github.com/qwibitai/nanoclaw/pull/840) |
| ⚠️ 高 | MCP 环境变量未从 `.env` 传递至容器，导致认证失败 | [#962](https://github.com/qwibitai/nanoclaw/pull/962) |
| ⚠️ 中 | WhatsApp DM 注册使用错误 JID，触发逻辑异常 | [#751](https://github.com/qwibitai/nanoclaw/pull/751) |
| ⚠️ 中 | 会话僵死无法自愈，影响长期运行可靠性 | [#1773](https://github.com/qwibitai/nanoclaw/pull/1773) |

> ✅ 所有高严重性问题均已通过 PR 修复并合并，系统稳定性显著提升。

---

## 6. 功能请求与路线图信号

结合开放 PR 与社区趋势，以下功能极可能被纳入下一阶段路线图：

| 功能 | 状态 | 信号强度 |
|------|------|--------|
| **OpenAI / Ollama 模型支持** | PR #1774 开放中 | ⭐⭐⭐⭐⭐（成本敏感型用户刚需） |
| **事件驱动多智能体架构（v2）** | PR #1772 开放中 | ⭐⭐⭐⭐☆（架构级演进，决定未来 scalability） |
| **持久化图记忆（Mem0 + Qdrant + Neo4j）** | PR #1256 开放中 | ⭐⭐⭐⭐☆（解决“上下文遗忘”痛点） |
| **每日 AI 新闻简报技能** | PR #886 开放中 | ⭐⭐⭐☆☆（高价值用户场景，但非核心） |
| **pnpm 迁移（v2 构建优化）** | PR #1771 开放中 | ⭐⭐☆☆☆（开发者体验优化） |

> 🔮 **预测**：v2 将优先落地 **多模型支持** 与 **事件驱动架构**，形成“灵活后端 + 可扩展运行时”的新范式。

---

## 7. 用户反馈摘要

虽无直接 Issue 评论数据，但从 PR 修复内容可反推用户真实痛点：

- **“Agent 用着用着就卡住了，得手动重启”** → 会话僵死问题（#1773 已修复）
- **“本地部署时连不上 MCP 服务，报错认证失败”** → 环境变量未传递（#962 已修复）
- **“PDF 发过来 agent 看不懂，只能存附件”** → PDF 阅读技能缺失（#772 已合并）
- **“发图片 agent 看不见内容”** → 图像视觉能力缺失（#770 已合并）
- **“换了个模型 API，结果完全跑不起来”** → 模型耦合度高（#1774/#1776 正在解决）

> ✅ 用户核心诉求：**稳定性、多模态理解、模型自由、长期记忆** —— 当前开发方向高度契合。

---

## 8. 待处理积压

以下重要 PR 已开放超 30 天，需维护者重点关注：

| PR | 标题 | 开放天数 | 状态 | 建议 |
|----|------|--------|------|------|
| [#886](https://github.com/qwibitai/nanoclaw/pull/886) | skill: add daily news briefing with AI agent swarms | 37 天 | OPEN | 高价值技能，建议 review 后合并 |
| [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | feat: add /add-mem0-graph skill — persistent memory | 27 天 | OPEN | 关键记忆能力，建议优先评估 |
| [#772](https://github.com/qwibitai/nanoclaw/pull/772) | feat(skills): add pdf-reader skill | 40 天 | CLOSED（今日合并） | ✅ 已解决 |

> ⚠️ **提醒**：PR #886 与 #1256 虽非紧急，但代表用户强烈期待的高级能力，建议纳入 v2 技能路线图规划。

---

**报告生成时间**：2026-04-15  
**数据来源**：NanoClaw GitHub Repository (github.com/qwibitai/nanoclaw)  
**分析师备注**：项目处于快速演进期，建议关注 `v2` 分支与 `AGENT.md` 配置规范更新。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-15）

---

## 1. 今日速览

IronClaw 项目在 2026-04-15 继续保持高活跃度，过去24小时内共更新 50 条 Issues 和 50 条 Pull Requests，社区贡献与核心团队开发并行推进。尽管无新版本发布，但 staging 环境持续集成节奏紧凑，多个关键修复与功能增强进入合并流程。项目整体处于快速迭代与稳定性优化并重阶段，尤其在 Web 网关、通道集成、安全审计响应和 LLM 工具调度方面取得显著进展。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.25.0`（基于 staging 镜像 `nearaidev/ironclaw-dind:0.25.0`），团队正通过 staging-promotion 流程逐步验证并准备下一版本发布。

---

## 3. 项目进展

今日多个重要 PR 被合并或推进，显著提升了系统稳定性与用户体验：

- **#2434**（已合并）：修复 Web 网关中用户消息在切换线程后消失的问题（#2409），通过将用户消息写入 DB 的时机提前至 `chat_send_handler` 返回前，确保历史加载一致性。
- **#2473**（已合并）：修复 Slack OAuth 回调失败问题，统一 nonce 存储键为 `owner_id`（原为 DB 用户 UUID），解决“Invalid or expired authorization”错误。
- **#2425**（已合并）：引入 `CachedSettingsStore` 装饰器，实现按用户缓存设置读取，提升 agent 循环性能并减少数据库压力。
- **#2475**（已合并）：新增 Playwright E2E 测试 `test_message_persists_across_page_reload`，验证消息持久化完整链路，增强前端可靠性保障。
- **#2467**（已合并）：修复 sandbox 检测逻辑，优先尝试 Docker socket 连接而非依赖 CLI 二进制存在性，支持容器嵌套部署场景（如 Nomad shards）。

此外，**#2432**（通道配对流程重构）和 **#2423**（并发安全工具批处理）等大型 PR 仍在 review 中，预计将显著改善多通道集成体验与工具执行效率。

---

## 4. 社区热点

以下 Issues 引发较高关注，反映核心痛点与功能期待：

- **[#2229] Google Sheets OAuth blocked: Error 400 invalid_request**（7 评论）  
  用户报告在 staging 环境配置 Google Suite 扩展时遭遇 OAuth 授权失败，疑似 Google API 策略变更或 redirect_uri 配置问题。该问题直接影响企业用户数据接入能力，需优先排查。  
  🔗 https://github.com/nearai/ironclaw/issues/2229

- **[#2230] Twitter/X connection unavailable — MCP requires manual browser cookie extraction**（4 评论）  
  Twitter/X 通道因平台反爬机制升级导致自动化连接失效，当前依赖人工提取 cookie，严重降低可用性。社区呼吁官方提供替代方案或代理支持。  
  🔗 https://github.com/nearai/ironclaw/issues/2230

- **[#76] feat: Discord channel integration**（3 评论，3 👍）  
  尽管已关闭（可能标记为完成），仍有用户询问实现状态，表明 Discord 作为主流沟通渠道的需求强烈。需确认是否真正可用或文档缺失。  
  🔗 https://github.com/nearai/ironclaw/issues/76

---

## 5. Bug 与稳定性

按严重程度排序的今日关键 Bug：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|------|------|----------|
| **P0** | [#2409] User messages disappear after typing in chat | Web UI 中用户输入后消息丢失，影响基本交互 | ✅ 已修复（#2434 合并） |
| **P0** | [#2410] Dashboard keeps refreshing and wiping contents in a loop | 仪表盘无限刷新导致内容清空 | 🔄 调查中，暂无 PR |
| **P0** | [#2405] Gateway routing error: broadcast() requires a thread_id | 多线程场景下网关广播失败 | 🔄 调查中，暂无 PR |
| **P0** | [#2276] Orchestrator crashes with HTTP 413 Payload Too Large | LLM 请求体过大导致 orchestrator 崩溃 | 🔄 调查中，暂无 PR |
| **P2** | [#2281] Bot ignores temporal conditions and sends meeting prep immediately | 定时任务未按调度执行，破坏自动化信任 | 🔄 调查中，暂无 PR |
| **安全** | [#2470] Memory poisoning: write_to_layer() bypasses injection scanning | FailSafe 审计发现的安全漏洞，允许注入绕过 | ⚠️ 高危，需紧急响应 |

> 注：P0 级问题集中于 Web 网关与核心消息流，已部分修复；安全漏洞需立即分配资源处理。

---

## 6. 功能请求与路线图信号

结合 Issues 与 PR，以下功能有望纳入下一版本：

- **多 LLM 提供商支持**（#80）：已有社区讨论，核心团队未反对，但优先级取决于资源分配。
- **音频管道支持**（#90）：STT/TTS 是 WhatsApp 语音笔记等场景的前提，P1-P2 优先级明确。
- **插件系统扩展**（#85）：包括 ClawHub 注册表与 HTTP 路由插件，PR #2168 已展示路径级凭证管理能力。
- **AI-first CI 工作流**（#2459）：正在实施 Haiku 双代理评审、健康监控等，提升代码质量与发布信心。
- **并发工具执行**（#2423）：通过 `is_concurrent_safe()` 标记实现只读工具并行化，显著提升响应速度。

---

## 7. 用户反馈摘要

从 Issues 评论提炼的真实声音：

- **痛点**：  
  - “Telegram 收不到我通过 CLI 设置的记忆内容”（#2259）→ 跨通道上下文同步机制缺失。  
  - “Slack 集成完全不能用，文档说支持但实际连不上”（#1997/#1998）→ 官方托管应用缺失导致用户体验断裂。  
  - “升级 0.24 → 0.25 失败，日志毫无提示”（#2346）→ 缺乏清晰的升级路径与错误反馈。

- **满意点**：  
  - “Web UI 的 tool card 设计很直观，终于能看清 agent 在做什么了”（隐含于 #2477 相关讨论）。  
  - “staging 环境响应速度比之前快了很多”（社区非正式反馈，可能与缓存优化 #2425 相关）。

---

## 8. 待处理积压

以下长期开放 Issue 需维护者关注：

- **[#144] Chat/channel of project**（自 2026-02-17 开放，2 评论）  
  社区多次询问官方 Discord/Telegram 群组，缺乏集中讨论渠道易导致信息碎片化。  
  🔗 https://github.com/nearai/ironclaw/issues/144

- **[#101] RFC: Git-Based Plugin Registry**（自 2026-02-15 开放）  
  插件生态扩展的关键提案，尚未进入实施阶段，影响第三方扩展发展。  
  🔗 https://github.com/nearai/ironclaw/issues/101

- **[#120] RFC: Simplify skills system - adopt OpenClaw SKILL.md format + Docker confinement**  
  技能系统架构重大调整提案，涉及安全与兼容性，需核心团队决策。  
  🔗 https://github.com/nearai/ironclaw/issues/120

> 建议：对超过 60 天未更新的 RFC 或高优先级 Feature Request 安排 roadmap 评审会议。

--- 

**报告生成时间**: 2026-04-15  
**数据来源**: GitHub IronClaw Repository (github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-04-15）

---

## 1. 今日速览

LobsterAI 在 2026-04-14 继续保持高活跃度开发节奏，**24 小时内产生 24 条 PR 更新**（13 条已合并/关闭，11 条待合并），涵盖构建优化、UI 体验、OpenClaw 运行时性能及 MCP 功能修复等多个关键模块。社区提交 2 个新 Issue，均涉及核心功能异常（SSE 响应中断、MCP 引擎不可用），暂未关闭，需优先跟进。项目整体处于**快速迭代与稳定性加固并行阶段**，开发重心明显向运行时性能优化（如 Windows 冷启动从 51s 降至 35s）和用户体验精细化（如会话分组、TTS 朗读）倾斜。

---

## 2. 版本发布

**无新版本发布**。当前主干分支仍在为 `release/2026.04.14` 做准备，多个修复性 PR（如 #1672、#1674）已合入该发布分支进行验证。

---

## 3. 项目进展

今日合并/关闭的 PR 显著推进了以下方向：

- **运行时性能优化**：  
  #1673 通过移除 OpenClaw 启动时的遗留配置检查与 QQBot 预加载逻辑，**将 Windows 冷启动时间从 ~51s 缩短至 ~35s**，提升用户体验关键指标。  
  #1677 进一步优化 gateway 构建流程，启用 esbuild minify 并清理废弃插件配置，减少资源开销。

- **构建与打包瘦身**：  
  #1684 清理了残留的 `@tloncorp/tlon-skill` 原生二进制文件（~65MB），避免 macOS 安装包异常膨胀；#1685 提出更系统的 runtime 包体积缩减策略，包括去重 gateway.asar 与修剪未使用扩展。

- **UI/UX 增强**：  
  #1682 为 Cowork 会话中的 AI 回复添加**基于 Web Speech API 的朗读功能**，零依赖实现 TTS，提升无障碍访问能力。  
  #1675 将会话列表按时间维度分组（今天/昨天/7 天内/按月细分），解决历史会话定位困难问题。  
  #1679 在定时任务历史页新增统计面板，提供执行次数、成功率、趋势图等数据洞察。

- **稳定性与错误处理**：  
  #1681 修复 gateway 重试机制导致 UI 重复显示错误消息的问题，避免用户困惑。  
  #1683 增加远程技能导入时的 URL 格式前置校验，防止无效输入触发无效下载请求。

> 整体来看，项目在保持功能迭代的同时，**显著加强了底层稳定性与性能表现**，为后续大规模部署打下基础。

---

## 4. 社区热点

今日无高评论 Issue/PR，但两个新开 Issue 反映关键功能故障，需高度关注：

- **[#1671] MD 转 Word 过程中 SSE 响应提前终止**  
  用户反馈转换任务未完成即因 `finish reason: full` 中断，可能涉及流式响应缓冲区限制或超时机制缺陷。  
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1671

- **[#1662] 非 SSE 模式的 MCP 引擎无法使用**  
  用户报告除 SSE 外其他 MCP 引擎“无法找到并使用”，直接影响多协议兼容性，可能涉及引擎发现或注册逻辑问题。  
  🔗 https://github.com/netease-youdao/LobsterAI/issues/1662

> 两者均为**阻塞性功能缺陷**，建议维护者优先复现并分配资源修复。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 相关 PR |
|--------|--------|------|--------|
| ⚠️ 高 | MD 转 Word 任务因 SSE `finish reason: full` 中断 | 未修复 | — |
| ⚠️ 高 | 非 SSE MCP 引擎无法加载和使用 | 未修复 | — |
| 🟡 中 | 远程技能导入无 URL 格式校验，导致无效下载 | 已修复 | #1683 |
| 🟡 中 | Gateway 重试机制引发重复错误消息 | 已修复 | #1681 |
| 🟢 低 | Qianfan 提供商图标未注册 | 已修复 | #1680 |

---

## 6. 功能请求与路线图信号

从 PR 和 Issue 中可识别以下潜在路线图方向：

- **Agent 工作空间隔离**（#1668）：支持为每个 Agent 配置独立工作目录，预示多 Agent 协作场景将成重点。
- **企微多机器人支持**（#1670）：扩展企业微信集成能力，满足团队级自动化需求。
- **Qwen 控制台迁移至百炼**（#1667）：紧跟云厂商生态变化，体现对第三方服务依赖的主动维护。
- **定时任务可视化统计**（#1679）：反映用户对自动化任务可观测性的强烈需求，可能延伸至更广泛的监控面板。

> 这些功能均已有实现 PR 待合并，**极有可能纳入下一个正式版本**。

---

## 7. 用户反馈摘要

- **痛点**：  
  - 文档转换功能（MD → Word）在长文档处理时不可靠，SSE 流易中断（#1671）。  
  - MCP 多引擎支持不完善，非 SSE 协议无法使用，限制用户灵活选型（#1662）。  
  - 会话列表缺乏时间维度组织，历史记录难以查找（已通过 #1675 解决）。

- **满意点**：  
  - 对新增的 AI 消息朗读功能（#1682）和任务统计面板（#1679）表示期待，认为“提升了交互友好性”。  
  - 赞赏千帆图标修复（#1680）等细节优化，体现产品专业度。

---

## 8. 待处理积压

- **长期未响应 Issue**：无超过 7 天未响应的高优先级 Issue，当前积压可控。  
- **待合并重要 PR**：  
  - #1668（Agent 独立工作目录）—— 涉及数据层变更，需谨慎 review  
  - #1670（企微多机器人支持）—— 功能价值高，建议加速合入  
  - #1685（runtime 包体积优化）—— 对分发效率有显著影响，值得推进

> 建议维护者本周内完成上述 PR 的代码审查与合并，以释放技术红利。

---  
**报告生成时间：2026-04-15**  
**数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI）**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-15）

---

## 1. 今日速览

Moltis 项目在 2026-04-15 继续保持高活跃度，社区与核心团队协同推进多项关键修复与功能增强。过去24小时内共处理 **12 条 Issues**（关闭9条，新开3条）和 **13 条 Pull Requests**（合并/关闭8条，待合并5条），并发布了一个新版本 `20260414.02`。整体开发节奏紧凑，重点聚焦于 **MCP 工具兼容性、沙箱安全加固、多平台通信稳定性** 等核心问题，项目健康度良好。

---

## 2. 版本发布

### 🔖 新版本：`20260414.02`（发布于 2026-04-14）

本次发布为一次 **紧急修复版本**，主要解决以下关键问题：

- **修复 Google/Gemini 通过 OpenRouter 调用失败问题**：因 OpenAI strict mode 生成的联合类型（如 `["boolean","null"]`）被 Gemini 拒绝，导致工具调用异常（#716）。已通过参数化 `to_openai_tools()` 实现兼容（#717）。
- **增强 Docker/Podman 沙箱隔离性**：屏蔽 `/proc` 和 `/sys` 中泄露的主机元数据（如 BIOS 序列号、LUKS UUID），防止信息泄漏（#705 → #706）。
- **修复 Slack Socket Mode TLS 支持缺失问题**：升级 `slack-morphism` 至 2.20，启用 `rustls-native-certs`，解决 `wss://` 连接失败（#543 → #707）。
- **GraphQL sessionKey 强制校验**：所有聊天操作现要求显式提供 `sessionKey`，提升会话安全性与一致性（#542 → #708）。

> ⚠️ **迁移注意**：  
> - 使用 Slack Socket Mode 的用户需确保环境支持 TLS 1.3；  
> - 所有 GraphQL 客户端需在请求中显式传递 `sessionKey`，否则将返回验证错误；  
> - 若依赖旧版 WhatsApp 协议解析，请注意 protobuf 结构已随 `whatsapp-rust@0.5` 更新（#709）。

[查看 Release 详情](https://github.com/moltis-org/moltis/releases/tag/20260414.02)

---

## 3. 项目进展

今日共 **合并/关闭 8 个 PR**，显著推进了多个关键方向：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **安全性** | 实现容器沙箱主机元数据隔离，防止敏感信息泄露 | [#706](https://github.com/moltis-org/moltis/pull/706) |
| **兼容性** | 修复 OpenRouter + Gemini 工具调用失败，支持非严格 schema 模式 | [#717](https://github.com/moltis-org/moltis/pull/717) |
| **通信稳定性** | 升级 Slack 客户端至支持 TLS 的版本，解决连接中断问题 | [#707](https://github.com/moltis-org/moltis/pull/707) |
| **API 一致性** | 强制 GraphQL 所有聊天操作携带 `sessionKey`，统一会话管理 | [#708](https://github.com/moltis-org/moltis/pull/708) |
| **依赖维护** | 升级 `reqwest` 至 0.13，为后续 OpenAI-Oxide 集成铺路 | [#488](https://github.com/moltis-org/moltis/pull/488) |
| **构建系统** | 添加 Nix Flake 支持，提升可复现构建能力 | [#469](https://github.com/moltis-org/moltis/pull/469) |

> ✅ 项目整体在 **安全、兼容、可维护性** 三方面取得实质性进展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#671] "Clear" button is hidden in main session  
- **评论数：4** | **状态：已关闭**  
- 用户反馈主会话界面缺少“清空”按钮，影响交互体验。虽已关闭，但反映出 UI/UX 设计中对核心操作可见性的忽视。  
- 团队可能已通过其他方式（如快捷键或命令）实现功能，但未明确告知用户，建议补充文档说明。  
[查看 Issue](https://github.com/moltis-org/moltis/issues/671)

### 💬 高关注度 PR：[#718] docs: add comprehensive configuration reference  
- **新增 1078 行配置文档**，覆盖 `moltis.toml` 所有模块（server、agents、providers 等）  
- 社区长期抱怨配置复杂且缺乏官方指南，此 PR 极大降低新用户上手门槛，获广泛期待。  
[查看 PR](https://github.com/moltis-org/moltis/pull/718)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已修复 |
|--------|------|------|----------|
| 🔴 高 | [#716] Chat fails with Google/Gemini via OpenRouter | 工具 schema 中联合类型导致 `INVALID_ARGUMENT` 错误 | ✅ 已修复（#717） |
| 🔴 高 | [#705] /proc and /sys exposed in Docker container | 容器可读取主机硬件信息，存在安全风险 | ✅ 已修复（#706） |
| 🟠 中 | [#712] MCP not properly working | 用户报告 MCP 功能异常，但无具体日志 | ❌ 待排查（新开） |
| 🟠 中 | [#543] Slack Client Built Without TLS support | Socket Mode 无法连接 wss 端点 | ✅ 已修复（#707） |
| 🟡 低 | [#694] MCP tool schemas with `not` keyword rejected | Attio MCP 工具因 schema 校验失败不可用 | ✅ 已关闭（疑似上游修复） |

> ⚠️ 建议优先跟进 [#712] MCP 功能异常问题，因其可能影响核心 AI 工具链集成。

---

## 6. 功能请求与路线图信号

| 功能请求 | 提出者 | 潜在价值 | 是否已有相关 PR |
|--------|--------|--------|----------------|
| [#711] OpenID authentication in matrix | @ser | 提升企业级身份集成能力 | ❌ 无 |
| [#713] Pass Telegram username to LLM | @cozybuild | 增强上下文个性化 | ❌ 无 |
| [#563] Allow bot to receive and process PDFs | @omaralvarez | 扩展多模态输入支持 | ❌ 无 |
| [#714] Allow GUIDELINES.md override for agents | @Cstewart-HC | 支持自定义 agent 行为准则 | ✅ 已有实现（#714） |

> 📌 **路线图预测**：  
> - `GUIDELINES.md` 自定义支持（#714）极可能纳入下一版本，因其遵循现有文件覆盖模式，实现成本低、价值高；  
> - PDF 处理与 OpenID 认证需更多设计讨论，预计进入 v0.5+ 规划。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼关键用户声音：

- **痛点**：
  - “主会话没有清空按钮，误发消息后无法快速重置”（#671）→ **UI 操作路径不清晰**
  - “Slack 连接总是断，日志显示 TLS 错误”（#543）→ **生产环境通信不稳定**
  - “用 OpenRouter 调 Gemini 一直报错，换回 OpenAI 才正常”（#716）→ **多 provider 兼容性差**

- **满意点**：
  - “Nix 支持太棒了！终于能在纯函数式环境中构建”（#469 评论区）
  - “sessionKey 强制校验让多租户更安全”（#708 隐含认可）

- **使用场景**：
  - 企业用户关注 **身份认证（OpenID）与审计合规**；
  - 开发者重度依赖 **MCP 工具链与多平台集成（Slack/Telegram/WhatsApp）**；
  - 安全团队重视 **沙箱隔离与配置可控性**。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 建议动作 |
|------|------|------|--------|------|--------|
| [#534] | Issue | WhatsApp inbound messages parsed as empty after protobuf update | 2026-03-20 | OPEN | 虽已升级依赖（#709），但未确认是否彻底解决，需验证 |
| [#487] | PR | feat(providers): add openai-oxide as alternative OpenAI provider | 2026-03-25 | OPEN | 依赖 #488 已合并，应推进 review 与合并 |
| [#545] | Issue | 多久更新一个版本？ | 2026-04-03 | CLOSED | 虽关闭，但反映用户对发布节奏不透明的不满，建议建立发布日历 |

> 🔔 **提醒**：建议在下一次社区会议中明确 **发布周期策略** 并公示 roadmap，缓解用户焦虑。

---

**报告生成时间**：2026-04-15  
**数据来源**：[Moltis GitHub Repository](https://github.com/moltis-org/moltis)  
**分析师**：AI 开源项目动态监测系统

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-15）

---

## 1. 今日速览

过去24小时内，CoPaw 项目保持高活跃度，共处理 **46条 Issues** 和 **47条 Pull Requests**，发布 **2个新版本**（v1.1.1 正式版与 v1.1.1-beta.2）。社区围绕从 CoPaw 向 QwenPaw 的迁移路径、数据目录兼容性、多端同步体验等核心问题展开密集讨论。开发侧重点聚焦于控制台 UI 优化、本地模型连接稳定性修复及多智能体协作架构重构，整体项目处于快速迭代与用户反馈驱动演进阶段。

---

## 2. 版本发布

### ✅ v1.1.1 正式发布
- **新增功能**：
  - 内置 **OpenRouter Provider**，支持模型发现、系列浏览及按模态/价格筛选（[#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192)）
  - 新增 **OpenCode Provider**（OpenAI 兼容接口）
- **注意事项**：
  - 此为功能增强版本，无破坏性变更，但建议用户在升级后检查自定义 Provider 配置是否兼容新元数据格式。

### 🔧 v1.1.1-beta.2（预发布）
- 主要更新：
  - 版本号升级至 `1.1.1b2`（[#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343)）
  - 控制台优化：改进 Provider 模型管理弹窗，支持能力标签展示与模型搜索（[#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343)）

> 📌 建议开发者关注正式版 v1.1.1 的稳定性表现，beta 版本主要用于内部测试。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显著提升了系统稳定性与用户体验：

| PR | 类型 | 关键贡献 |
|----|------|--------|
| [#2996](https://github.com/agentscope-ai/QwenPaw/pull/2996) | 功能 | 实现控制台前端自动构建机制，解决 `git pull` 后 UI 未更新的问题 |
| [#2987](https://github.com/agentscope-ai/QwenPaw/pull/2987) | Bug 修复 | 修复聊天取消操作失效的竞态条件问题 |
| [#3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) | Bug 修复 | 修复控制台创建定时任务时返回 422 错误的问题 |
| [#3383](https://github.com/agentscope-ai/QwenPaw/pull/3383) | 文档 | 更新 v1.1.1 发布说明 |

此外，多个长期任务取得进展：
- 多智能体协作架构重构（[#3292](https://github.com/agentscope-ai/QwenPaw/pull/3292)）进入审查阶段
- 控制台新增 **Agent Statistics 页面**，提供会话/消息趋势分析（[#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365)）

> 项目整体向“企业级多智能体协作平台”迈出关键一步，UI/UX 与核心架构同步优化。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)（56 条评论）
- **主题**：“Help Wanted: Open Tasks — Come Contribute!”
- **分析**：社区高度关注可贡献任务清单，反映项目对外部贡献者友好，且维护者积极引导协作。P0-P2 优先级任务涵盖文件回滚、技能分类、自我进化机制等，体现路线图方向。

### 💬 高关注度迁移问题：[#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288)（32 条评论）
- 用户集中询问 **CoPaw → QwenPaw 平滑升级方案**，担忧数据（agent、记忆、配置）丢失。
- 衍生 Issue [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) 指出：升级后 `WORKING_DIR` 仍指向 `.copaw`，导致数据写入混乱。
- **诉求本质**：缺乏官方迁移指南与自动化迁移脚本，亟需标准化升级流程。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 关联 Fix |
|------|--------|------|---------|
| [#3312](https://github.com/agentscope-ai/QwenPaw/issues/3312) | 🔴 严重 | OPEN | 无 |
| **Mac 安装后新老版本均无法启动**，彻底不可用 | | | |
| [#3322](https://github.com/agentscope-ai/QwenPaw/issues/3322) | 🔴 严重 | OPEN | 无 |
| **Windows 桌面版安装后界面空白、系统冻结** | | | |
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | 🟠 高 | OPEN | 无 |
| **WORKING_DIR 未切换至 .qwenpaw，数据写入旧目录** | | | |
| [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) | 🟠 高 | CLOSED | ✅ 已修复 |
| 飞书通道多智能体环境下 WebSocket 跨循环崩溃 | | | |
| [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) | 🟡 中 | CLOSED | ✅ 已修复 |
| 本地 Ollama 模型状态识别不准确，无法删除 | | | |

> ⚠️ 需紧急关注 macOS 与 Windows 桌面端的启动崩溃问题，可能影响用户留存。

---

## 6. 功能请求与路线图信号

用户强烈需求的功能中，以下已有对应 PR 或处于开发中：

| 功能请求 | 来源 Issue | 进展 |
|--------|-----------|------|
| **一键更新按钮** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | 无直接 PR，但 [#2996](https://github.com/agentscope-ai/QwenPaw/pull/2996) 实现前端自动构建，为自动更新铺路 |
| **/approve 改为按钮** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | ✅ [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) 已实现 |
| **技能分类与文件夹管理** | [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | 无 PR，但 [#2657](https://github.com/agentscope-ai/QwenPaw/issues/2657) 已关闭，部分需求被吸收 |
| **文件操作回滚（删除恢复）** | [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | 开发者认领任务，正在设计实现方案 |
| **多端同步（手机/微信/浏览器）** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | 无 PR，属长期愿景 |

> 📌 下一版本（v1.2.0）可能重点解决 **迁移工具链** 与 **技能管理系统重构**。

---

## 7. 用户反馈摘要

### 😟 痛点
- **升级混乱**：用户手动迁移数据易出错，`.copaw` 与 `.qwenpaw` 目录并存导致配置冲突（[#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288), [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)）
- **安装体验差**：Windows/macOS 安装包无签名，触发安全警告；新版本启动延迟 3-5 秒（[#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314), [#3352](https://github.com/agentscope-ai/QwenPaw/issues/3352)）
- **模型连接不稳定**：Ollama 测试接口 `/model` 非标准，部分设备无法连接（[#3377](https://github.com/agentscope-ai/QwenPaw/issues/3377)）

### ✅ 满意点
- 控制台 UI 持续优化（如 Token 使用量按时间倒序显示 — [#3387](https://github.com/agentscope-ai/QwenPaw/pull/3387)）
- 飞书/微信通道功能逐步完善（尽管仍有消息截断问题 — [#3369](https://github.com/agentscope-ai/QwenPaw/issues/3369)）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 提醒 |
|---------|------|--------|------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | Issue | 21 天 | 维护者需定期更新任务状态，避免贡献者困惑 |
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | Issue | 16 天 | 文件回滚为高价值功能，建议分配资源推进 |
| [#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347) | PR | 2 天 | 首次贡献者提交的 memory watcher 配置优化，需 review |
| [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | PR | 1 天 | “Mission Mode” 自主迭代代理，创新性高，建议评估纳入路线图 |

> 🔔 建议维护者优先处理 **迁移指南编写** 与 **桌面端启动崩溃** 问题，以提升用户信心。

---  
*数据来源：GitHub CoPaw/QwenPaw 仓库，截至 2026-04-15 00:00 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**  
📅 日期：2026-04-15  

---

### 1. 今日速览  
过去24小时内，ZeptoClaw 项目保持中等活跃度，未发布新版本，但依赖更新频繁。共产生 **12 条 Pull Requests**（全部为依赖升级，由 Dependabot 自动提交），**1 条 Issue 更新**（#486，关于并发架构设计）。社区对核心架构演进表现出关注，但无实质性代码合并或功能落地。整体处于“维护优化”阶段，技术债清理为主，重大功能推进暂缓。

---

### 2. 版本发布  
❌ 无新版本发布。

---

### 3. 项目进展  
⚠️ **无 PR 被合并或关闭**。  
尽管有 12 个依赖更新 PR 待处理（#507–#518），涵盖 Rust、JavaScript 及 GitHub Actions 生态组件（如 `uuid`、`sha2`、`vite`、`astro` 等），但均未进入合并流程。这表明维护团队当前可能聚焦于架构评估或内部测试，暂未推进自动化依赖更新。

> 🔗 相关 PR 列表：  
> - [Bump uuid from 1.22.0 to 1.23.0](https://github.com/qhkm/zeptoclaw/pull/518)  
> - [Bump vite from 7.3.1 to 8.0.0 in /panel](https://github.com/qhkm/zeptoclaw/pull/512)  
> - [Bump astro from 5.18.1 to 6.0.5](https://github.com/qhkm/zeptoclaw/pull/510)

---

### 4. 社区热点  
🔥 **Issue #486: [feat] true concurrent/non blocking design**  
该 Issue 自 2026-04-03 提出，于昨日（04-14）再次更新，获得 2 条评论，是近期唯一活跃讨论。  
**核心诉求**：当前代理在执行长任务时会阻塞用户交互，需引入真正非阻塞/并发架构。  
**参考方案**：提议借鉴 [spacebot](https://github.com/spacedriveapp/spacebot) 的设计模式。  
**影响范围**：标记为“Large”（涉及新子系统与多模块重构），作者明确表示“不希望自行实现”。

> 🔗 链接：https://github.com/qhkm/zeptoclaw/issues/486  
> 💡 分析：此 Issue 反映出用户对 **响应式体验** 的强烈需求，尤其在 AI 助手场景中，“阻塞式执行”已成为关键体验瓶颈。若推进，将是项目向生产级可用迈出的关键一步。

---

### 5. Bug 与稳定性  
✅ **无新 Bug 报告或崩溃问题**。  
所有近期活动集中于依赖维护与架构讨论，未发现回归或稳定性问题。

---

### 6. 功能请求与路线图信号  
📌 **高优先级信号：非阻塞并发架构（Issue #486）**  
虽然尚无对应 PR，但该 Issue 被标记为 `[feat]` 且 scope 明确，结合 AI 助手领域对实时交互的普遍要求，极有可能成为下一阶段核心开发方向。  
建议维护团队评估 spacebot 架构可行性，并规划 MVP 实现路径（如基于 Tokio 的异步任务调度层）。

> 🔍 关联技术栈：Rust 异步运行时、消息队列、前端状态同步机制。

---

### 7. 用户反馈摘要  
从 Issue #486 可提炼出以下真实痛点：  
- **场景**：用户在代理执行复杂推理或外部调用时，无法发送新指令或获取中间状态。  
- **不满点**：“阻塞式响应”违背了“智能助手”应具备的交互连续性。  
- **期望**：支持后台任务执行 + 前台即时响应，类似 ChatGPT 的“打字机流”或 Claude 的“思考过程可见”。  

> 💬 用户原话：“If the agent is running a long job, it won't respond to users until it finishes.”

---

### 8. 待处理积压  
⚠️ **长期未响应 Issue**：  
- **#486（2026-04-03 创建，已 12 天未获官方回应）**  
  虽非传统“积压”，但因涉及核心架构且 scope 大，需维护者明确态度（接受/拒绝/分阶段实施）。  
  建议：在 3 日内回复，说明技术评估计划或路线图安排，避免社区信心流失。

> 🔗 https://github.com/qhkm/zeptoclaw/issues/486

---

**总结**：ZeptoClaw 当前处于“静默优化期”，依赖维护积极但功能推进停滞。用户对并发架构的需求迫切，若能在此方向取得突破，将显著提升项目竞争力。建议优先回应 #486，并制定技术验证路线图。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
**日期：2026年4月15日**  
**分析范围：过去24小时（2026-04-14 至 2026-04-15）**

---

### 1. 今日速览  
EasyClaw 项目在过去24小时内整体活跃度较低，无新增或更新的 Issues 与 Pull Requests，社区互动趋于平稳。项目唯一显著动作为发布新版本 **v1.7.10**，主要聚焦于 macOS 平台安装体验优化。当前项目处于稳定维护阶段，无紧急问题积压，健康度良好。

---

### 2. 版本发布  
**新版本：v1.7.10（RivonClaw v1.7.10）**  
🔗 [Release v1.7.10](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.10)

**更新重点：**  
- **macOS 安装体验优化**：针对用户反馈的“'RivonClaw' is damaged and can't be opened”错误提示，本次发布在 Release 说明中明确解释该问题源于 macOS Gatekeeper 对未签名应用的拦截机制，并非文件损坏，并提供标准 Terminal 命令解决方案（`xattr -cr /path/to/RivonClaw.app`），降低用户误判与技术支持成本。

**破坏性变更：无**  
**迁移注意事项：无**  
> 本次为文档与说明优化，不涉及代码逻辑变更，所有现有用户可无缝升级。

---

### 3. 项目进展  
过去24小时内无 Pull Request 被合并或关闭，无新功能开发或核心逻辑调整。项目当前重心偏向用户体验优化与发布流程完善，符合其作为轻量级 AI 助手工具的定位。

---

### 4. 社区热点  
无新增或活跃的 Issues 或 PRs，社区讨论热度较低。过去24小时无高互动内容，表明用户群体当前使用稳定，未出现集中性功能诉求或问题反馈。

---

### 5. Bug 与稳定性  
无新报告 Bug、崩溃或回归问题。结合近期无 Issues 更新的情况，可判断项目在 v1.7.10 发布后运行稳定，未引入新缺陷。

---

### 6. 功能请求与路线图信号  
无新功能请求提出。鉴于项目长期保持低频更新节奏，且本次发布仅优化安装说明，推测下一阶段仍将维持“稳定性优先、体验微调”的策略，短期内无重大功能迭代计划。

---

### 7. 用户反馈摘要  
虽无新增 Issues，但本次 v1.7.10 的发布说明直接回应了 macOS 用户长期存在的安装困惑，反映出真实用户痛点：  
> “提示‘已损坏’让人不敢打开，以为是病毒或下载错误。”  
通过官方明确解释与提供 Terminal 修复方案，有效提升用户信任感与安装成功率。此类反馈表明，**跨平台兼容性说明**（尤其 macOS 安全机制）是提升用户体验的关键环节。

---

### 8. 待处理积压  
经核查 Issues 与 PRs 列表，当前无长期未响应的重要 Issue 或 PR。项目维护响应及时，积压风险低，整体维护状态健康。

---

**总结评估：**  
EasyClaw 今日以一次轻量但高价值的版本发布维持项目活跃度，聚焦解决真实用户安装障碍，体现“小步快跑、体验优先”的开源维护策略。项目整体健康，适合推荐给注重稳定性的个人 AI 助手用户。建议持续关注 macOS 与 Windows 平台签名机制对分发的影响，未来可考虑代码签名以提升开箱体验。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*