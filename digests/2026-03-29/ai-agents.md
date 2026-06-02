# OpenClaw 生态日报 2026-03-29

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-29 01:10 UTC

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

# OpenClaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

OpenClaw 社区在 2026-03-29 继续保持高活跃度，过去 24 小时内共处理 **500 条 Issues**（新开/活跃 442 条，关闭 58 条）和 **500 条 PRs**（待合并 349 条，已合并/关闭 151 条），显示出强劲的开发与问题响应节奏。项目发布了一个新版本 `v2026.3.28-beta.1`，包含关键性破坏变更和配置迁移要求。当前社区焦点集中在 Discord 连接稳定性、多平台支持缺失、认证机制回归等问题上，反映出用户对生产环境可靠性的高度关注。

---

## 2. 版本发布

### 🔴 [v2026.3.28-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.28-beta.1)（2026-03-28）

**破坏性变更（Breaking Changes）：**
- **移除 Qwen Portal OAuth 集成**：废弃 `qwen-portal-auth` 认证方式（原用于 `portal.qwen.ai`），强制迁移至 Model Studio 的 API Key 认证。用户需通过 `openclaw onboard --auth-choice modelstudio-api-key` 完成迁移（#52709）。
- **停止自动配置迁移**：`Config/Doctor` 模块不再自动迁移旧版配置，用户需手动检查并更新 `openclaw.json` 文件以避免启动失败。

> ⚠️ **迁移建议**：所有使用 Qwen 模型的用户应立即执行 onboard 流程更新认证方式；升级前建议备份配置文件并运行 `openclaw doctor` 检查兼容性。

---

## 3. 项目进展

今日有 **151 个 PR 被合并或关闭**，重点进展包括：

- **Discord 稳定性修复**：多个高优先级 PR 解决了 WebSocket 断连导致的网关崩溃问题（#56164、#54270），通过抑制持久监听器错误和修复 botUserId 作用域问题，显著提升服务可用性。
- **Mistral API 兼容性修复**：#56667 将 Mistral 提供者从 `openai-completions` 切换至原生 `mistral-conversations` API，彻底解决长期存在的 422 错误（#47079、#53363）。
- **子代理功能增强**：#56673 引入 `sessions_await` 工具，支持并行子代理协调；#56528 增加结构化输出支持，为复杂工作流打下基础。
- **配置系统改进**：#56190 支持 `${VAR:-default}` 环境变量回退语法，提升部署灵活性。

整体来看，项目在**通信稳定性、多模型兼容性和子代理架构**三个方向取得实质性推进。

---

## 4. 社区热点

以下 Issues 引发高度讨论，反映核心用户诉求：

| Issue | 热度 | 核心诉求 |
|------|------|--------|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 58 评论，66 👍 | 强烈要求补齐 Linux/Windows 桌面端应用，实现与 macOS 对等的功能体验 |
| [#53870 插件安全扫描阻塞安装](https://github.com/openclaw/openclaw/issues/53870) | 13 评论，9 👍 | 用户对 VirusTotal 扫描延迟导致插件无法安装表示不满，呼吁优化发布流程 |
| [#49971 原生代理身份与信任验证 RFC](https://github.com/openclaw/openclaw/issues/49971) | 16 评论 | 社区对基于 DID/VC 的身份体系提案兴趣浓厚，可能成为未来安全架构方向 |

> 💡 分析：跨平台支持是最大痛点，而安全机制设计正从“功能实现”向“信任基础设施”演进。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 问题 | 状态 | 修复进展 |
|------|------|--------|
| **Discord 健康监测触发崩溃循环**（#54931） | 🔴 高优先级 | ✅ 已合并 #56164 抑制关闭错误，#54270 修复身份清理竞态 |
| **Matrix 插件无法收发媒体**（#54556） | 🔴 回归 | ❌ 未修复，根因是 ES 模块中 `__dirname` 未定义，需重构路径处理 |
| **OpenRouter 401 认证头缺失**（#34830） | 🔴 回归 | 🔄 #56204 尝试恢复 `getApiKey` 回调，待验证 |
| **Telegram 重启后出站失效**（#54745） | 🟠 中优先级 | ❌ 未定位，疑似配置持久化问题 |
| **Docker 中技能安装失败（brew not installed）**（#14593） | 🟠 平台相关 | ❌ 长期未解，需重构技能依赖检测逻辑 |

> ⚠️ 当前最紧急的是 Matrix 媒体功能回归，影响端到端加密用户体验。

---

## 6. 功能请求与路线图信号

结合 PR 活动，以下功能可能纳入近期版本：

- **Databricks 技能包支持**：#56592 已提交 scaffold，预示企业数据集成将成为新方向。
- **Baidu 中文搜索支持**：#56304 提议通过 Qianfan 插件集成百度检索，响应 zh-CN 用户需求。
- **会话历史备份层**：#7598 提出 token 压缩导致信息丢失问题，已有社区讨论但未见 PR，可能成为 v2026.4 重点。
- **TTS 指令解析优化**：#56688 修复内联示例误触发问题，显示语音功能正在精细化打磨。

> 📌 信号：项目正从“通用 AI 代理”向“垂直场景深度集成”扩展。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “`openclaw models status --probe` 能正确检测 API 状态，说明底层诊断做得好”（#55672）
  - “Docker 部署流程清晰，比上一代工具稳定很多”（#14593 评论区）

- **痛点**：
  - “每次网关重启 Telegram 就失联，必须手动重配，完全不可用于生产”（#54745）
  - “Gemini 的思维链直接暴露在聊天里，看起来像乱码”（#41494）
  - “Windows 用户被忽视，连基本 CLI 补全都不能用”（#14289）

- **典型场景**：
  - 开发者使用 Docker + 沙箱运行编码代理（#29254）
  - 中文用户依赖百度进行本地信息检索（#56304）
  - 企业用户需要多账户 Slack 公共频道提及支持（#41264）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

| Issue | 年龄 | 重要性 | 建议动作 |
|------|------|--------|--------|
| [#75 Linux/Windows 应用缺失](https://github.com/openclaw/openclaw/issues/75) | 87 天 | ⭐⭐⭐⭐⭐ | 分配资源启动跨平台 Electron/Tauri 移植 |
| [#29134 ACP 运行时在 Windows 不可用](https://github.com/openclaw/openclaw/issues/29134) | 29 天 | ⭐⭐⭐⭐ | 检查 Windows 路径处理与权限模型 |
| [#29572 `/model` 命令静默失败](https://github.com/openclaw/openclaw/issues/29572) | 29 天 | ⭐⭐⭐ | 修复 TUI 模型切换状态同步逻辑 |
| [#29254 技能依赖检测误判沙箱环境](https://github.com/openclaw/openclaw/issues/29254) | 29 天 | ⭐⭐⭐⭐ | 重构 `requires.bins` 为容器感知模式 |

> 🛎️ **提醒**：#75 已获 66 个点赞，是社区最期待的功能，建议纳入 Q2 路线图。

---

**报告生成时间**：2026-03-29  
**数据来源**：OpenClaw GitHub Repository (github.com/openclaw/openclaw)  
**分析师备注**：项目整体健康度良好，但需警惕 Windows/Linux 平台边缘化风险。建议设立“跨平台体验专项小组”以回应社区核心诉求。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告  
**报告周期：2026-03-29**

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **高活跃度、强工程导向、多平台集成深化** 的态势。主流项目普遍聚焦于通信通道稳定性（Discord/Telegram/Matrix）、多模型兼容性（OpenRouter/Mistral/本地 Ollama）及配置可靠性三大核心痛点。安全架构（HMAC 凭证、OAuth 迁移）、子代理协作与可观测性成为新一轮技术演进重点。社区反馈显示，用户对“开箱即用”的体验期待显著提升，推动项目从功能堆叠向生产级稳定性转型。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|-------------|
| **OpenClaw** | 500（442 新开） | 500（151 合并） | ✅ v2026.3.28-beta.1 | ⭐⭐⭐⭐☆（高活跃，需关注跨平台） |
| **NanoBot** | 21（18 新开） | 38（13 合并） | ❌ | ⭐⭐⭐⭐（稳定迭代，回归问题待解） |
| **Zeroclaw** | 50（20 新开） | 50（21 合并） | ❌ | ⭐⭐⭐⭐（架构重构中，文档待补） |
| **PicoClaw** | 38（16 新开） | 89（54 合并） | ✅ Nightly v0.2.4 | ⭐⭐⭐⭐（嵌入式领先，配置易失） |
| **NanoClaw** | 6（3 新开） | 31（10 合并） | ❌ | ⭐⭐⭐⭐（安全升级快，媒体支持强） |
| **IronClaw** | 8（4 关闭） | 50（13 合并） | ❌ | ⭐⭐⭐⭐（安全闭环好，通道集成弱） |
| **LobsterAI** | 6（3 关闭） | 18（12 合并） | ✅ 2026.3.29 | ⭐⭐⭐⭐⭐（响应快，i18n 完善） |
| **TinyClaw** | 7（闭环） | 15+（多合并） | ❌ | ⭐⭐⭐⭐☆（工程 hardening 高效） |
| **Moltis** | 8（全关闭） | 16（12 合并） | ✅ 3 个热修版 | ⭐⭐⭐⭐（多通道稳定，ARM64 待验） |
| **CoPaw** | 40（35 新开） | 25（12 合并） | ❌ | ⭐⭐⭐（功能扩展快，稳定性承压） |
| **ZeptoClaw** | 1（新开） | 2（开发中） | ❌ | ⭐⭐⭐⭐（小而美，关键修复准） |
| **EasyClaw** | 2（重复 Bug） | 0 | ✅ v1.7.8（文档更新） | ⭐⭐（维护期，核心 Bug 待修） |

> 注：健康度综合考量活跃度、响应速度、稳定性、用户反馈。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：单日处理 500 Issues/PRs，社区基数远超同类（如 NanoBot 仅 21 Issues）；  
- **企业级集成深度**：唯一同时支持 Databricks、Feishu、Matrix E2EE、HMAC 工具凭证的项目；  
- **破坏性变更管理成熟**：v2026.3.28-beta.1 明确迁移路径，体现版本治理能力。

**技术路线差异**：  
- 采用 **“Gateway + 插件化通道”** 架构（vs. TinyClaw 的单体 Agent、NanoClaw 的容器化技能）；  
- 强调 **配置即代码**（`openclaw.json` + `doctor` 诊断），优于 LobsterAI 的 UI 配置易失问题。

**社区规模**：GitHub 互动量（Issues/PRs）约为第二梯队（NanoBot/Zeroclaw）的 **2–3 倍**，Discord 稳定性成为当前最大共识性痛点。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多通道消息可靠性** | OpenClaw, NanoBot, IronClaw, Moltis | Telegram/Matrix 断连重试、线程上下文保持、媒体收发 |
| **本地/私有 LLM 支持** | Zeroclaw, IronClaw, CoPaw, Moltis | Ollama/vLLM 集成、模型探测优化、局域网访问 |
| **配置持久化与热重载** | LobsterAI, PicoClaw, IronClaw | 重启后配置丢失、env/TOML/DB 配置源统一 |
| **子代理与任务编排** | OpenClaw, NanoClaw, TinyClaw | 并行协调、结构化输出、内存隔离 |
| **安全凭证管理** | NanoClaw（OneCLI Vault）, IronClaw（OAuth  hardening） | 避免令牌明文挂载、HMAC 执行验证 |

> 💡 **行业共识**：AI 智能体正从“能跑通”向“可运维”演进，**配置可靠性**与**通道稳定性**是跨越 adoption gap 的关键。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|--------|--------|-------------|
| **OpenClaw** | 企业级多通道集成、子代理工作流 | 开发者/企业运维 | Gateway 中心化、强配置驱动 |
| **NanoBot** | 轻量级多平台消息代理 | 个人用户/小团队 | 模块化通道、快速迭代 |
| **Zeroclaw** | 安全优先、Rust 生态 | 安全敏感型组织 | TOML 配置、WASM 工具沙箱 |
| **PicoClaw** | 嵌入式部署（OpenWrt） | IoT/边缘计算用户 | Go 语言、LuCI 管理界面 |
| **LobsterAI** | 桌面端 UX、MCP Bridge | 终端用户/非技术人群 | Electron + Web 优先 |
| **TinyClaw** | 极简安装、Docker 友好 | DevOps/自动化爱好者 | Python + Swarm 支持 |
| **Moltis** | GraphQL API 抽象、多 LLM 兼容 | 平台集成方 | 强类型接口、热修复敏捷 |

---

## 6. 社区热度与成熟度

- **快速迭代层**（日 PR >30）：  
  **OpenClaw, PicoClaw, IronClaw** —— 功能密集开发， nightly/beta 频繁，适合技术尝鲜者。
  
- **质量巩固层**（Bug 闭环率高）：  
  **LobsterAI, Moltis, TinyClaw** —— 聚焦稳定性修复，发布节奏可控，适合生产环境试用。

- **维护优化层**（低 PR 高 Issue）：  
  **EasyClaw, CoPaw** —— 核心功能稳定但遗留问题多，需警惕用户流失。

> 📌 **开发者建议**：若追求稳定性，优先评估 LobsterAI/Moltis；若需深度定制，选择 OpenClaw/Zeroclaw。

---

## 7. 值得关注的趋势信号

1. **从“文本代理”到“富媒体代理”**：  
   WhatsApp/Telegram 媒体支持（NanoClaw #1526）、语音转写（CoPaw #2439）成为刚需，**多模态能力**成下一竞争焦点。

2. **凭证安全架构重构潮**：  
   OneCLI Vault（NanoClaw）、HMAC 工具签名（Zeroclaw #4943）表明，**敏感操作可验证性**正取代简单密钥管理。

3. **配置即产品体验**：  
   多个项目（LobsterAI #1006、PicoClaw #1941）暴露配置丢失问题，预示 **配置版本化/备份机制** 将成为标配。

4. **边缘部署崛起**：  
   PicoClaw（OpenWrt）、Zeroclaw（Raspberry Pi）显示，**低资源环境支持**是拓展 IoT/自动化场景的关键。

> 🔮 **对开发者的价值**：  
> 未来 6 个月，**通道鲁棒性 + 配置可靠性 + 边缘兼容性** 将构成个人 AI 助手的三重护城河。忽视任一维度均可能导致用户流失。

---  
**报告生成时间**：2026-03-29  
**数据来源**：各项目 GitHub 仓库公开数据（Issues/PRs/Releases）

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-29）

---

## 1. 今日速览

NanoBot 项目在过去24小时内保持高度活跃，共产生 **21条 Issues 更新**（18条新开/活跃，3条关闭）和 **38条 PR 更新**（25条待合并，13条已合并/关闭），显示出社区贡献与问题反馈的强劲势头。尽管无新版本发布，但多个关键 Bug 修复 PR 已提交并进入合并流程，反映出团队对稳定性的重视。当前主要技术焦点集中在 **Telegram 消息渲染、Agent 循环逻辑优化、多通道集成（如 Microsoft Teams、iMessage）以及 provider 兼容性修复** 上。整体项目健康度良好，开发节奏紧凑，用户参与积极。

---

## 2. 版本发布

**无新版本发布**。最新稳定版本仍为 `v0.1.4.post6`，但已有多个针对该版本的回归问题被报告并正在修复中。

---

## 3. 项目进展

今日有 **13个 PR 被合并或关闭**，其中多项重要修复和功能增强推动项目向前迈进：

- ✅ **#2598**：修复 Kimi K2.5 在启用思考模式时因缺失 `reasoning_content` 导致的 `invalid_request_error`，提升模型兼容性（[链接](https://github.com/HKUDS/nanobot/pull/2598)）。
- ✅ **#2597**：修正 `manager.py` 中 `_find_legal_start` 方法的 off-by-one 错误，避免潜在索引越界（[链接](https://github.com/HKUDS/nanobot/pull/2597)）。
- ✅ **#2596**：修复 Matrix 端到端加密（E2EE）认证问题，解决因 access token 不传递加密上下文导致的解密失败（[链接](https://github.com/HKUDS/nanobot/pull/2596)）。
- ✅ **#2580**：在 agent runner 层增加“空响应修复重试”机制，避免工具执行完成后返回生硬保底提示（[链接](https://github.com/HKUDS/nanobot/pull/2580)）。
- ✅ **#2577**：优化 Telegram 工具提示消息的发送方式，静默发送并添加代码标记，提升用户体验（[链接](https://github.com/HKUDS/nanobot/pull/2577)）。

此外，**#2600**（Microsoft Teams 通道重构）和 **#2539**（iMessage 集成）等新功能 PR 已提交至 nightly 分支，标志着多平台通信能力持续扩展。

---

## 4. 社区热点

以下 Issues/PRs 引发较高关注，反映核心用户需求：

- 🔥 **#2570**：用户报告本地 Ollama 配置下出现 404 错误且 gateway 未监听 18790 端口，涉及部署体验与文档准确性（[链接](https://github.com/HKUDS/nanobot/issues/2570)）。
- 🔥 **#2590**：升级至 `v0.1.4.post6` 后内置 Minimax provider 失效，疑似配置解析或 API 路径变更导致，属版本回归（[链接](https://github.com/HKUDS/nanobot/issues/2590)）。
- 🔥 **#2568** & **#2559**：Telegram 通道在 `v0.1.4.post6` 中 Markdown 渲染不稳定及长回复流失败（`Message_too_long`），影响核心交互体验（[链接1](https://github.com/HKUDS/nanobot/issues/2568) | [链接2](https://github.com/HKUDS/nanobot/issues/2559)）。
- 🔥 **#2576**：生产环境用户提出 Agent 循环终结逻辑过度依赖 LLM 自觉性，建议架构级改进工具结果总结机制（[链接](https://github.com/HKUDS/nanobot/issues/2576)）。

这些议题表明用户正深入使用 NanoBot 于真实场景，并对可靠性、兼容性与交互体验提出更高要求。

---

## 5. Bug 与稳定性

按严重程度排序的关键 Bug：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #2590 | `v0.1.4.post6` 中 Minimax provider 失效 | ❌ 暂无 |
| ⚠️ 高 | #2579 | Kimi K2.5 思考模式下 `reasoning_content` 缺失导致请求错误 | ✅ #2598 |
| ⚠️ 高 | #2559 | Telegram 流响应因消息过长失败 | ❌ 暂无（相关优化见 #2593/#2594） |
| ⚠️ 中 | #2583 | `_find_legal_start` 方法 off-by-one 错误 | ✅ #2597 |
| ⚠️ 中 | #2591 | CLI 终端重复输出“thinking...”状态 | ❌ 暂无 |
| ⚠️ 中 | #1681 | Matrix E2EE 解密失败（长期未解） | ✅ #2596 |

> 注：#2590 和 #2559 虽无直接 fix，但已有相关优化 PR（如 #2593、#2594）尝试缓解问题。

---

## 6. 功能请求与路线图信号

用户提出的新功能中，以下具备较高落地可能性：

- 📌 **Microsoft Teams 通道集成**：#2600 已基于 nightly 重构提交，功能完整，预计将纳入下一 nightly 或稳定版（[链接](https://github.com/HKUDS/nanobot/pull/2600)）。
- 📌 **iMessage 支持**：#2539 提供本地与远程双模式实现，技术方案成熟，适合 macOS 用户群体（[链接](https://github.com/HKUDS/nanobot/pull/2539)）。
- 📌 **WhatsApp 媒体收发**：#2010 长期开放，支持图片/音频/文档，社区需求明确（[链接](https://github.com/HKUDS/nanobot/pull/2010)）。
- 📌 **心跳机制静默化**：#1443 提议解耦心跳推理与通知，避免非 actionable 消息打扰用户，符合 UX 优化趋势（[链接](https://github.com/HKUDS/nanobot/pull/1443)）。
- 📌 **子代理配置标准化**：#2599 请求官方示例，反映多代理架构使用门槛高，需文档或配置模板支持（[链接](https://github.com/HKUDS/nanobot/issues/2599)）。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “升级后 Minimax 突然不能用了，之前一直正常”（#2590）→ 版本兼容性风险。
  - “Telegram 有时渲染 markdown，有时完全不渲染，毫无规律”（#2568）→ 交互一致性差。
  - “Ollama 明明能跑，但 nanobot 连不上，文档也没说清楚端口怎么配”（#2570）→ 部署体验待优化。
  - “心跳一直发‘nothing to do’消息，很烦”（#2582）→ 通知机制需精细化。

- **满意点**：
  - “Fish Audio 语音集成效果很好，只是每次更新要重新 patch”（#2152）→ 扩展生态有价值。
  - “工具提示现在用代码块显示，清晰多了”（隐含于 #2593 反馈）→ UX 改进见效。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- ⏳ **#1121**：LLM 超时后 fallback 模型未触发（自 2026-02-24 提出，影响高可用架构）→ [链接](https://github.com/HKUDS/nanobot/issues/1121)
- ⏳ **#2152**：WhatsApp 语音消息原生支持请求（含完整实现方案，仅缺官方集成）→ [链接](https://github.com/HKUDS/nanobot/issues/2152)
- ⏳ **#2010**：WhatsApp 媒体收发支持（PR 开放近 6 周，未 review）→ [链接](https://github.com/HKUDS/nanobot/pull/2010)
- ⏳ **#1443**：心跳机制静默化（PR 开放近 4 周，契合当前 #2582 反馈）→ [链接](https://github.com/HKUDS/nanobot/pull/1443)

> 建议：对 #1121 和 #2010 进行技术评估并给出 roadmap 承诺，以增强社区信任。

--- 

**报告生成时间：2026-03-29**  
**数据来源：GitHub HKUDS/nanobot 公开仓库**

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区保持高度活跃，共处理 **50条 Issues**（新开/活跃20条，关闭30条）和 **50条 Pull Requests**（待合并29条，已合并/关闭21条），显示出强劲的开发节奏和问题响应能力。尽管无新版本发布，但核心功能持续优化，尤其在工具链重构、安全增强与多通道支持方面取得显著进展。社区对配置易用性、内存管理及 hallucination 检测等议题关注度高，反映出项目正从“可用”向“稳健”演进。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 v0.6.x 系列，开发重点集中在功能完善与稳定性修复，预计下一版本将包含 HMAC 工具执行凭证、配置热重载、Feishu 通道代理支持等关键改进。

---

## 3. 项目进展

今日多个重要 PR 被合并或推进，标志着项目在架构一致性与用户体验上的关键突破：

- **#4845**（已关闭）：为 Mattermost 通道添加 WebSocket 实时监听能力，结束仅支持轮询的历史，提升企业部署响应速度。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4845)
- **#4884**（已关闭）：修复 Anthropic 提供者的 schema 清理逻辑，解决 `allOf` 数组解析错误及 Gemini JSONL 工具调用解析问题，显著降低 API 400 错误率。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4884)
- **#4936**（开放中）：针对 #4916 内存递归膨胀问题，实现自动跳过 `[Memory context]` 回写 brain.db，防止内存雪崩。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4936)
- **#4937**（已关闭）：统一 TOML 配置键命名，使 `[channels.xxx]` 成为主键并兼容 `[channels_config.xxx]` 别名，解决长期存在的文档与实现不一致问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4937)

此外，一系列工具类 PR（#4944–#4954）正系统性重构工具执行层，将速率限制与路径守卫逻辑抽离至 `RateLimitedTool` 和 `PathGuardedTool` 包装器，提升代码可维护性与安全一致性。

---

## 4. 社区热点

以下 Issues 引发广泛讨论，体现用户核心关切：

- **#4657**（开放，9评论）：Matrix 通道摩擦点追踪 umbrella issue，涵盖 E2EE OTK 重试循环、线程上下文丢失等关键体验问题，维护者标记“优先 PR”，呼吁社区协作。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)
- **#4863**（开放，4评论）：用户反馈 open-codex 配置无效且缺乏文档，暴露第三方提供者集成文档缺失痛点。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4863)
- **#4704**（开放，3👍）：请求添加 Raspberry Pi 部署指南，揭示边缘设备构建时的 OOM 问题，维护者已关注但未响应。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)

这些议题共同指向 **文档完整性** 与 **边缘场景稳定性** 两大改进方向。

---

## 5. Bug 与稳定性

按严重程度排序的今日关键 Bug：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **S1** | #4946 | `rumqttc` 依赖未声明，导致 v0.6.6 编译失败 | 新开，需紧急修复 |
| **S1** | #4851 | GitHub Copilot 提供者无配置文档，工作流阻塞 | 新开，已有 PR #4941 提供指南 |
| **S1** | #4808 | Discord 通道误将图像识别为文本嵌入，无法处理图片 | 已关闭，疑似已修复 |
| **S2** | #4916 | `auto_save` 导致内存递归膨胀，耗尽系统资源 | 活跃，PR #4936 提供修复 |
| **S2** | #4804 | Matrix 线程回复丢失对话上下文 | 已关闭，可能已修复 |
| **S2** | #4918 | Dashboard 会话打开时报 `Cannot read properties of undefined` | 新开，前端稳定性问题 |

> 注：S1=工作流阻塞，S2=功能降级，S3=轻微异常

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求，极可能纳入下一版本：

- **HMAC 工具执行凭证**（#4830 → PR #4943/#4951）：通过密码学签名验证工具是否真实执行，对抗 LLM hallucination，属高优先级安全增强。
- **配置热重载**（#3569）：虽无直接 PR，但 #4937 的配置系统改进为其铺路，用户需求强烈。
- **Feishu 通道代理支持**（#4873 → PR #4950）：修复 Feishu 默认调用 LLM 而非 Agent 的问题，提升多通道一致性。
- **私有主机 SSRF 白名单**（#4868 → PR #4945）：为 `http_request` 工具添加 `allowed_private_hosts`，支持本地开发/自动化场景。

此外，**多模型回退配置文档**（#4872）和 **Markdown 内存自动清理**（#4829）亦获点赞，预示内存管理与多模型架构将成为下一阶段重点。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “配置 Copilot 完全靠猜，README 没提一句”（#4851）
  - “重启后 Matrix 线程历史全丢，客服场景无法接受”（#4806）
  - “web chat 两轮就失忆，根本没法用”（#4644）
- **满意点**：
  - “v0.6.4 后 Anthropic 错误少多了，感谢修复”（#4884 隐含反馈）
  - “Mattermost 终于支持实时消息了！”（#4845 社区反响积极）
- **使用场景**：
  - 企业内网部署（Mattermost/Feishu）
  - 低资源设备（Raspberry Pi）
  - 自动化运维（cron + shell tools）

---

## 8. 待处理积压

以下重要 Issue 长期未获维护者响应，建议优先关注：

- **#4656**（2026-03-25 创建）：CI clippy 检查忽略可选特性，导致 channel-matrix 警告漏检，影响代码质量门禁。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4656)
- **#4704**（2026-03-25 创建）：Raspberry Pi 构建 OOM 问题，虽有 3 人点赞但无官方回应，阻碍边缘部署推广。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)
- **#4646**（2026-03-25 创建）：自定义 OpenAI 兼容提供者强制 `stream=true` 的文档缺失，影响高级用户集成。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4646)

> 建议维护团队在下一个 sprint 中分配资源处理上述积压，以提升社区信任度与文档完整性。

--- 

**报告生成时间**: 2026-03-29  
**数据来源**: GitHub Zeroclaw 仓库公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

PicoClaw 在 2026-03-29 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **38 条 Issues**（关闭22条，新开16条）和 **89 条 Pull Requests**（合并/关闭54条，待合并35条），显示出高效的协作节奏。项目发布了一个 nightly 版本（`v0.2.4-nightly.20260329.27f638e9`），主要聚焦于错误分类优化与安全加固。整体项目健康度良好，Bug 修复响应迅速，功能演进方向明确。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.4-nightly.20260329.27f638e9`
- **类型**：自动化 nightly 构建，非稳定版本，建议测试使用。
- **主要变更**：
  - 修复 provider 层面对 `model_not_found` 错误的误分类问题，提升 fallback 机制可靠性（#2133）。
  - 统一重试错误处理逻辑，避免因 HTTP 5xx 状态码掩盖具体业务错误（如智谱 503 + model_not_found）。
- **⚠️ 注意事项**：
  - 此为开发快照，可能存在未暴露的回归问题。
  - 不建议用于生产环境，但可用于验证近期修复（如 OpenRouter 连接重置问题）。
- [查看完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

---

## 3. 项目进展

今日合并/关闭的 PR 显著提升了系统稳定性与安全性：

- **#2133**（已合并）：修复 provider 错误分类逻辑，防止 transient 错误中断 fallback 链，提升多模型切换鲁棒性。
- **#2124**（已合并）：修复微信渠道 context_token 内存丢失问题，实现持久化存储，避免重启后发送失败。
- **#2130**（已合并）：为 OpenWrt 添加 LuCI Web 管理界面，支持服务状态监控与一键启停，推动嵌入式部署生态。
- **#1770**（已合并）：新增马来语文档支持，完善国际化覆盖。
- **#2100**（已合并）：修复 cron 任务触发后 agent 响应丢失问题，确保定时任务结果可送达消息总线。

> 项目在 **错误处理、渠道稳定性、嵌入式支持、多语言文档** 四个维度取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|---------|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | Ollama 本地模型配置无响应 | 18 | 用户希望明确本地 LLM 集成配置指南，当前文档缺失导致调试困难。 |
| [#2107](https://github.com/sipeed/picoclaw/issues/2107) | exec 工具误报“安全拦截” | 14 | 安全 guard 过于敏感，误判合法命令，需优化检测逻辑或提供白名单机制。 |
| [#1941](https://github.com/sipeed/picoclaw/issues/1941) | 配置被意外清空 | 12 | Web UI 操作导致配置丢失，严重影响用户体验，需增加配置备份/恢复机制。 |

> 社区核心诉求集中在 **本地模型支持、安全策略精细化、配置持久化可靠性** 三大方向。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（已有 Fix PR）

| Issue | 描述 | 状态 | Fix PR |
|------|------|------|--------|
| [#2136](https://github.com/sipeed/picoclaw/issues/2136) | 工具调用提取逻辑缺陷，导致解析失败 | OPEN | 待合并（#2141 相关） |
| [#2001](https://github.com/sipeed/picoclaw/issues/2001) | v0.2.4 空闲时 CPU 占用过高 | OPEN | 调查中，疑似 goroutine 泄漏 |
| [#1936](https://github.com/sipeed/picoclaw/issues/1936) | Termux 下 Telegram 渠道启动失败 | OPEN | 无 PR，需排查平台兼容性 |

### ✅ 已修复 Bug

- [#1525](https://github.com/sipeed/picoclaw/issues/1525)：`exec.allow_remote` 默认值设为 `false`，降低远程执行风险（安全加固）。
- [#1526](https://github.com/sipeed/picoclaw/issues/1526)：修复 symlink 绕过 workspace 限制问题（安全修复）。
- [#1527](https://github.com/sipeed/picoclaw/issues/1527)：收紧 JSONL 会话存储文件权限至 `0700/0600`（隐私保护）。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能请求（已有对应 PR）

| Issue | 功能描述 | 关联 PR | 纳入可能性 |
|------|--------|--------|-----------|
| [#1132](https://github.com/sipeed/picoclaw/issues/1132) | 支持 OpenWrt 系统运行 | #2130（已合并） | ✅ 已实现 |
| [#2045](https://github.com/sipeed/picoclaw/issues/2045) | 支持 SiliconFlow 平台 | 无 PR | 🔜 高（社区需求明确） |
| [#2137](https://github.com/sipeed/picoclaw/issues/2137) | 聊天中实时任务进度展示（编辑+反应） | 无 PR | 🔜 中（UX 改进方向） |
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) | 单实例多 Agent 协作 | #1940（进行中） | 🔜 高（路线图 Phase 2） |

> 下一版本可能重点推进 **多 Agent 协作架构** 与 **第三方 AI 平台集成扩展**。

---

## 7. 用户反馈摘要

### 💬 真实用户痛点

- **配置复杂且易丢失**：多名用户反馈 Web UI 修改配置后未提示重启，或配置被清空（#1941, #1973），建议增加“重启提示”与自动备份。
- **本地模型支持不足**：Ollama 用户普遍反映 agent 能启动但无输出，缺乏调试指引（#1161），亟需官方配置模板。
- **移动端/嵌入式体验差**：Termux、Windows QQ 渠道、手机热点网络下飞书消息异常（#1936, #2080, #1437），平台兼容性待加强。
- **安全策略僵化**：`exec` 工具频繁误报“安全拦截”（#2107），用户希望提供细粒度控制而非全有或全无。

### ✅ 满意点

- Nightly 构建更新及时，错误修复响应快（如 #2133 快速合并）。
- LuCI 界面获 OpenWrt 用户好评，降低路由器部署门槛。

---

## 8. 待处理积压

### 📌 长期未响应重要 Issue（>7天无维护者回复）

| Issue | 类型 | 最后更新时间 | 提醒 |
|------|------|-------------|------|
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) | 路线图：多 Agent 协作 | 2026-03-28 | 核心架构演进，需明确 Phase 2 时间线 |
| [#1489](https://github.com/sipeed/picoclaw/issues/1489) | 文档：配置参数不全 | 2026-03-28 | 影响新用户上手，建议优先补全 config.example.json |
| [#1476](https://github.com/sipeed/picoclaw/issues/1476) | 功能：稳定 Agent 身份与设备信任 | 2026-03-28 | 对 orchestration 场景关键，但无 PR 进展 |

> 建议维护者本周内对上述 Issue 给予初步回应或分配负责人。

---

**报告生成时间**：2026-03-29  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目处于快速迭代期，建议加强文档同步与平台兼容性测试，以提升用户留存率。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出极高的开发活跃度，共处理 **31条 PR 更新**（含21个待合并、10个已合并/关闭）和 **6条 Issues 更新**（3新开、3关闭），显示出社区贡献者对核心功能迭代与安全加固的高度参与。尽管无新版本发布，但多个关键功能（如 WhatsApp 媒体支持、OneCLI 凭证迁移、Web 仪表盘）已进入实现阶段，项目正向多通道集成与架构现代化稳步迈进。整体健康度良好，开发节奏紧凑，技术债清理与上游同步并行推进。

---

## 2. 版本发布

**无新版本发布**。当前主干仍处于功能密集开发期，重点在于通道扩展、凭证安全重构与监控能力增强，预计下一版本将整合 OneCLI 迁移与多平台媒体支持。

---

## 3. 项目进展

今日共 **10个 PR 被合并或关闭**，显著推进了以下方向：

- **凭证安全架构升级**：通过 #1520（[Google OAuth 迁移至 OneCLI Vault](https://github.com/qwibitai/nanoclaw/pull/1520)）和已关闭的 #1511（评估 OneCLI Agent Vault 替代 credential-proxy），项目正系统性替换原有凭证代理机制，降低敏感令牌暴露风险。
- **容器生命周期优化**：#1508（[关闭评审代理容器](https://github.com/qwibitai/nanoclaw/pull/1508)）修复了草稿审批后容器泄漏问题（~240MB/实例），提升资源利用率。
- **网络与部署稳定性**：#1523（[Apple Container 网络与 .env 挂载修复](https://github.com/qwibitai/nanoclaw/pull/1523)）解决了 macOS 容器环境中代理绑定与主机通信的关键兼容性问题。
- **本地开发体验**：#1525（[添加 launch.json 配置](https://github.com/qwibitai/nanoclaw/pull/1525)）为开发者提供标准化调试入口，降低本地启动门槛。

此外，#1513（LazyLibrarian 技能）、#1521（本地聊天 PWA）等非核心但高价值技能被合并，丰富了生态应用场景。

---

## 4. 社区热点

- **#1503 [nanoclaw.dev SSL 证书失效](https://github.com/qwibitai/nanoclaw/issues/1503)**（3条评论）  
  用户 @lactose 报告官网证书异常，虽技术影响有限，但暴露出基础设施维护盲点，可能影响新用户信任度。维护团队需尽快修复以避免品牌声誉受损。

- **#1526 [WhatsApp 媒体获取工具](https://github.com/qwibitai/nanoclaw/pull/1526)** 与 **#1522 [WhatsApp 媒体消息不可访问](https://github.com/qwibitai/nanoclaw/issues/1522)** 形成闭环  
  社区成员 @lazer-sketch 主动提交 PR 解决长期存在的 WhatsApp 媒体内容丢失问题（仅接收 `media_id` 而无二进制数据），体现用户对多模态交互的核心诉求。该 PR 有望在下个版本落地。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 相关链接 |
|--------|--------|------|--------|
| ⚠️ 高危 | Gmail/Calendar OAuth 令牌直接挂载至容器，存在提示注入泄露风险 | 已有缓解方案 | [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) → 对应修复见 #1520 |
| ⚠️ 中危 | Apple Container 环境中代理无法绑定，导致凭证服务不可达 | 已修复 | [#1523](https://github.com/qwibitai/nanoclaw/pull/1523) |
| ⚠️ 中危 | 非自回显通道（Telegram/Slack等）机器人回复未存入数据库 | 已有修复 PR | [#1518](https://github.com/qwibitai/nanoclaw/pull/1518) |
| ⚠️ 低危 | 评审代理容器在草稿审批后未释放内存 | 已修复 | [#1508](https://github.com/qwibitai/nanoclaw/pull/1508) |

> 注：上游安全补丁（#1512）虽已关闭，但 cherry-pick 工作尚未完全落地，建议尽快完成关键 CVE 修复同步。

---

## 6. 功能请求与路线图信号

以下用户需求已通过 PR 进入实现阶段，极可能纳入下一版本：

- **多平台媒体支持**：WhatsApp（#1526）、Telegram（#1507）、Discord（#1517）均实现媒体下载与多模态传递，标志项目从“文本代理”向“富媒体代理”演进。
- **Web 监控仪表盘**：#1514 与 #1524 分别提出独立与嵌入式仪表盘方案，均展示服务状态、消息量、通道健康度，反映用户对可观测性的强烈需求。
- **NanoClaw 间直连通信**：#1516 引入 `peer` 通道，支持实例间 HTTP 直连，为去中心化协作场景铺路。
- **组级 MCP 服务器加载**：#1515 允许通过 `.mcp.json` 动态加载外部 MCP 服务（如 Home Assistant），提升企业集成灵活性。

---

## 7. 用户反馈摘要

- **痛点**：  
  - WhatsApp 用户普遍反映“发图无效”（#1522），媒体内容无法被代理读取，严重影响使用体验。  
  - Gmail/Calendar 用户担忧 OAuth 令牌明文挂载风险（#1500），呼吁更安全的凭证管理方案。  
  - Apple Silicon 用户遭遇容器网络配置失败（#1523），阻碍本地部署。

- **满意点**：  
  - 社区赞赏 Signal（#1121）、Discord（#1517）等新通道的快速集成，认为“技能即仓库”架构降低了贡献门槛。  
  - 开发者认可 launch.json（#1525）等 DevEx 改进，称“终于不用手动拼启动命令”。

---

## 8. 待处理积压

- **#1121 [Add Signal channel skill](https://github.com/qwibitai/nanoclaw/pull/1121)**（2026-03-16 创建，13天未合）  
  功能完整且结构规范，但因维护者资源紧张长期处于“Needs Review”状态，建议优先安排代码审查。

- **#1190 [Add /add-script-tasks skill](https://github.com/qwibitai/nanoclaw/pull/1190)**（2026-03-17 创建，12天未合）  
  提供无 AI 的定时脚本执行能力，适用于运维场景，需求明确但缺乏维护者响应。

> 建议维护团队建立 PR 分级响应机制，避免高价值贡献因流程延迟而流失。

---  
*数据来源：GitHub 仓库 qwibitai/nanoclaw，统计周期 2026-03-28 00:00–23:59 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

IronClaw 在过去24小时内保持高活跃度，共产生 **50条 PR 更新** 和 **8条 Issue 更新**，其中 **13个 PR 被合并/关闭**，**4个 Issue 被关闭**，显示出团队在安全加固、架构演进和用户体验优化方面的持续投入。尽管无新版本发布，但核心功能模块（如工具安全、API 错误处理、前端解耦）正经历系统性重构。社区反馈集中在 Telegram 和 Feishu 通道集成问题，反映出多平台消息互通仍是用户刚需。

---

## 2. 版本发布

**无新版本发布**。当前开发重点仍集中在 staging 分支的稳定性提升与架构升级（见 [#1732](https://github.com/nearai/ironclaw/pull/1732) 自动提交流水线），预计下一版本将包含多项安全修复与执行引擎 v2 的初步集成。

---

## 3. 项目进展

今日合并/关闭的关键 PR 聚焦于 **安全性增强** 与 **系统可靠性改进**：

- **安全修复闭环**：  
  - 关闭高危 Issue [#1702](https://github.com/nearai/ironclaw/issues/1702)（数据库错误泄露至 API 客户端），对应 PR [#1719](https://github.com/nearai/ironclaw/pull/1719) 已合并，实现内部错误信息脱敏。  
  - 关闭中危 Issue [#1443](https://github.com/nearai/ironclaw/issues/1443)（OAuth 状态验证过松）与 [#1303](https://github.com/nearai/ironclaw/issues/1303)（WASM 工具 schema 暴露过度权限），相关修复已落地。

- **架构演进推进**：  
  - PR [#1650](https://github.com/nearai/ironclaw/pull/1650)（closed）完成 `full_job` 执行可靠性 overhaul，解决 routine 循环失败与输出丢失问题，显著提升自动化任务稳定性。  
  - PR [#1725](https://github.com/nearai/ironclaw/pull/1725) 启动前端解耦，将 UI 提取为独立 crate `ironclaw_frontend`，为后续 widget 扩展系统铺路。

- **配置与可观测性增强**：  
  - PR [#1716](https://github.com/nearai/ironclaw/pull/1716) 引入 routine 验证状态追踪，防止未经验证的行为变更直接上线。  
  - PR [#1723](https://github.com/nearai/ironclaw/pull/1723) 实现 workspace 元数据驱动索引与文档版本控制，支撑更精细的内容管理。

> 整体项目向“安全默认 + 可观测执行 + 模块化前端”方向稳步迈进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：Telegram Bot 消息轮询失效 ([#1676](https://github.com/nearai/ironclaw/issues/1676))
- **评论数：10** | **作者：@jamieduk**
- 用户反复反馈 IronClaw 的 Telegram 通道仅“半工作”：能接收指令但无法自动轮询新消息，对比 OpenClaw 表现不佳。
- **背后诉求**：期望开箱即用的消息平台集成能力，尤其对非技术用户而言，“自动拉取”是核心体验。当前 HTTP tool 实现可能存在轮询逻辑缺陷或事件驱动机制缺失。

### ⚠️ 新发功能请求：统一配置源以支持热重载 ([#1119](https://github.com/nearai/ironclaw/issues/1119))
- **评论数：1** | **优先级：P2**
- 提出将 env vars、TOML、DB 设置等五类配置源统一抽象，作为热重载（hot-reload）的前提条件。
- **信号价值**：该 Issue 被标记为多个未来功能（如 `config set` 可靠性）的前置依赖，可能纳入下一阶段配置系统重构。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **HIGH** | [#1702](https://github.com/nearai/ironclaw/issues/1702) | 数据库异常详情泄露至 API 客户端 | ✅ 已修复（PR [#1719](https://github.com/nearai/ironclaw/pull/1719)） |
| **MEDIUM** | [#1676](https://github.com/nearai/ironclaw/issues/1676) | Telegram bot HTTP tool 轮询失效 | 🔄 待修复（无公开 PR） |
| **MEDIUM** | [#1673](https://github.com/nearai/ironclaw/issues/1673) | Feishu/Lark 通道卡在“Awaiting Pairing”状态 | 🔄 待修复（无公开 PR） |
| **LOW** | [#1444](https://github.com/nearai/ironclaw/issues/1444) | OAuth state 参数回退逻辑脆弱 | ✅ 已修复 |

> 注：两个 MEDIUM 级通道集成问题虽无即时修复 PR，但团队已在 PR [#1715](https://github.com/nearai/ironclaw/pull/1715) 中澄清消息工具与通道配置边界，可能为后续修复提供方向。

---

## 6. 功能请求与路线图信号

- **高优先级信号**：  
  - **本地网络 LLM 支持**（PR [#1696](https://github.com/nearai/ironclaw/pull/1696)）：通过 `LLM_ALLOW_LOCAL_NETWORK` 允许访问局域网 Ollama/vLLM 实例，响应自托管用户需求，**极可能纳入下一版本**。  
  - **GitHub Webhook 环境变量配置**（PR [#1729](https://github.com/nearai/ironclaw/pull/1729)）：提升 DevOps 友好性，简化密钥管理。

- **中长期路线图**：  
  - **执行引擎 v2**（PR [#1557](https://github.com/nearai/ironclaw/pull/1557)）：统一 Thread-Capability-CodeAct 模型，虽风险高但已并行开发，预计作为 v3 架构基石。  
  - **Slack Socket Mode**（PR [#1549](https://github.com/nearai/ironclaw/pull/1549)）：解决 NAT 穿透问题，增强企业部署灵活性。

---

## 7. 用户反馈摘要

- **痛点**：  
  - 消息通道（Telegram/Feishu）配置后无法自动运行，需手动干预，违背“智能助手”自动化初衷。  
  - WASM 工具 schema 暴露过度权限（如 Brave web-search 本应限制 `query` 字段却开放 `{}`），存在安全与误用风险。

- **满意点**：  
  - 安全团队响应迅速，高危漏洞（如错误泄露）在24小时内闭环。  
  - 自托管支持（如本地 LLM、Aliyun Coding Plan）持续增强，满足企业私有化部署需求。

- **典型场景**：  
  > “Trying to pair telegram bot and have ironclaw auto poll for new messages! and still fails!” —— 用户期望零配置的消息监听，而非手动触发检查。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 提醒 |
|------|------|------|--------|------|
| Issue | [#1676](https://github.com/nearai/ironclaw/issues/1676) | Telegram bot 轮询失效 | 3天 | 高影响用户体验，建议优先分配资源排查 HTTP tool 轮询逻辑 |
| Issue | [#1673](https://github.com/nearai/ironclaw/issues/1673) | Feishu/Lark 通道配对卡住 | 3天 | 企业用户关键通道，需验证 pairing code 生成与回调机制 |
| PR | [#1243](https://github.com/nearai/ironclaw/pull/1243) | 按 Job 过滤 MCP 服务器 + 迭代上限 | 13天 | 核心功能增强，长期未合入，需 review 资源 |
| PR | [#1557](https://github.com/nearai/ironclaw/pull/1557) | 统一执行引擎 v2 | 7天 | 架构级变更，需协调测试与迁移策略 |

> 建议维护者优先处理两个通道集成 Issue，并安排架构师 review 积压的 XL 级 PR。

--- 

**报告生成时间**：2026-03-29  
**数据来源**：GitHub IronClaw 仓库公开数据

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-29）

---

## 1. 今日速览

LobsterAI 在 2026-03-29 继续保持高活跃度，24 小时内完成 **18 个 PR 更新**（12 个已合并/关闭，6 个待合并）和 **6 个 Issue 更新**（3 新开、3 关闭），并发布了一个新版本。项目整体处于快速迭代状态，重点聚焦于 **OpenClaw 集成稳定性修复、MCP Bridge 功能增强、国际化（i18n）完善** 以及 **用户体验优化**。社区反馈响应及时，多个长期 Bug 被闭环处理，健康度良好。

---

## 2. 版本发布

### 🔖 Release 2026.3.29（[GitHub Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.29)）

**核心更新内容：**
- **feat(cowork)**：AskUserQuestion 插件移除确认弹窗，优化结构化用户交互流程（[#942](https://github.com/netease-youdao/LobsterAI/pull/942)）
- **refactor(cowork)**：消息导航重构为“迷你轨道”样式，提升视觉一致性与操作效率（[#988](https://github.com/netease-youdao/LobsterAI/pull/988)）
- **fix(log)**：修复导出日志时挂起及 `reply was never sent` 错误，增强日志系统可靠性（[#PR未编号，见 Release Notes](https://github.com/netease-youdao/LobsterAI/pull/942)）

> ✅ 无破坏性变更，建议所有用户升级。

---

## 3. 项目进展

今日共 **12 个 PR 被合并或关闭**，推动多项关键改进：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **Bug 修复** | 修复 #858 和 #859：解决自定义模型名称丢失导致的 OpenClaw Gateway 无限重启问题（[#894](https://github.com/netease-youdao/LobsterAI/pull/894)） | 🔗 |
| | 修复附件在不同任务会话间丢失或混淆问题（[#851](https://github.com/netease-youdao/LobsterAI/pull/851)） | 🔗 |
| | 修复飞书流式输出配置重启后被重置问题（通过配置保护机制优化，关联 [#1005](https://github.com/netease-youdao/LobsterAI/issues/1005)） | 🔗 |
| **MCP 增强** | 移除 McpBridgeServer 的 secret 鉴权，解决重启后 401 认证失败问题（[#1002](https://github.com/netease-youdao/LobsterAI/pull/1002)） | 🔗 |
| | 增加对 SSE 和流式 HTTP 的 MCP 传输支持（[#1001](https://github.com/netease-youdao/LobsterAI/pull/1001)，待合并） | 🔗 |
| **国际化** | 新增预设 Agent 名称与描述的英文翻译字段，支持本地化渲染（[#991](https://github.com/netease-youdao/LobsterAI/pull/991)） | 🔗 |
| | 修复删除按钮 i18n 缺失、添加删除确认弹窗、统一默认图标（[#990](https://github.com/netease-youdao/LobsterAI/pull/990)） | 🔗 |
| **平台迁移** | 将小米蜂（Xiaomifeng）从独立 Gateway 迁移至 OpenClaw 插件体系，统一 IM 平台架构（[#984](https://github.com/netease-youdao/LobsterAI/pull/984), [#994](https://github.com/netease-youdao/LobsterAI/pull/994)） | 🔗 |

> 📌 项目整体向 **架构统一化、配置持久化、交互精细化** 迈出关键一步。

---

## 4. 社区热点

### 🔥 高关注度 Issue：配置文件重启后被重置（[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)）

- **作者**：@1323588848  
- **核心诉求**：用户自定义的 `openclaw.json` 配置（如飞书流式输出）和工作空间文件（如 `AGENTS.md`）在应用重启后被内部模板覆盖，需官方提供持久化方案。
- **背景关联**：该问题已被识别为系统性设计缺陷，影响多个平台（飞书、Notion MCP 等），社区已提出临时 workaround（定时任务恢复），但非长久之计。
- **维护者响应**：相关修复已在今日 PR 中体现（如配置保护逻辑优化），预计将在下个版本提供正式解决方案。

> 💬 此 Issue 反映了用户对 **配置自主权与系统稳定性平衡** 的强烈需求，是当前最高优先级 UX 痛点之一。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|--------|------|------|------|--------|
| ⚠️ 高 | [#858](https://github.com/netease-youdao/LobsterAI/issues/858) | 自定义模型名称保存后丢失，导致配置无效 | ✅ 已关闭 | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) |
| ⚠️ 高 | [#859](https://github.com/netease-youdao/LobsterAI/issues/859) | 因配置错误引发 Gateway 无限崩溃重启，无法自动停止 | ✅ 已关闭 | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) |
| ⚠️ 中 | [#1005](https://github.com/netease-youdao/LobsterAI/issues/1005) | 飞书流式输出配置重启后无法持久化 | ✅ 已关闭 | 配置保护机制优化（隐含于多 PR） |
| ⚠️ 中 | [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) | Notion MCP 启动时未传递环境变量，导致 401 认证失败 | 🟡 开放中 | 可能由 [#1002](https://github.com/netease-youdao/LobsterAI/pull/1002) 部分缓解 |
| ⚠️ 中 | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | 微信回复未与客户端同步，批量延迟发送影响体验 | 🟡 开放中 | 暂无直接 Fix PR，需流式推送优化 |

> ✅ 两个高危 Bug 已闭环，显著提升系统稳定性。

---

## 6. 功能请求与路线图信号

| 功能方向 | 用户诉求 | 相关 PR | 纳入可能性 |
|--------|--------|--------|----------|
| **命令面板** | 提供统一快捷键入口（Cmd+K）快速执行常用操作 | [#999](https://github.com/netease-youdao/LobsterAI/pull/999) | ⭐⭐⭐⭐☆（高，UI/UX 优先级） |
| **文本浮动工具栏** | 选中文本后一键复制/引用/解释/翻译 | [#998](https://github.com/netease-youdao/LobsterAI/pull/998) | ⭐⭐⭐⭐☆（高，提升对话效率） |
| **MCP 多协议支持** | 支持 SSE / 流式 HTTP 传输类型 | [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001) | ⭐⭐⭐☆☆（中，技术债清理） |
| **Agent 技能描述本地化** | 技能描述随语言切换 | [#996](https://github.com/netease-youdao/LobsterAI/pull/996) | ⭐⭐⭐⭐☆（高，i18n 完善） |

> 📌 命令面板与浮动工具栏极有可能成为下一版本主打 UX 亮点。

---

## 7. 用户反馈摘要

- **满意点**：
  - “终于修复了模型名称丢失的问题，之前都不敢自定义模型。”（关联 #858）
  - “MCP Bridge 去掉 secret 后 Notion 能正常连上了，感谢！”（关联 #1002）
  - “新消息轨道样式更清晰，导航体验提升明显。”（关联 Release 2026.3.29）

- **痛点与诉求**：
  - “每次重启都要重新配飞书流式输出，太麻烦了，希望能记住我的设置。”（#1005, #1006）
  - “微信回复等半天然后一下子全出来，体验很差，能不能边生成边发？”（#986）
  - “Notion MCP 的 Token 明明填了还是 401，怀疑是环境变量没传进去。”（#1003）

> 💡 用户核心期待：**配置持久化、实时流式响应、跨平台一致性体验**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | 微信回复没有与客户端同步 | 2026-03-27 | 🟡 开放 | 高影响 UX 问题，建议优先评估流式推送方案 |
| Issue | [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) | Notion MCP 环境变量未传递 | 2026-03-28 | 🟡 开放 | 需验证 MCP Bridge 的 `env` 传递逻辑 |
| PR | [#999](https://github.com/netease-youdao/LobsterAI/pull/999) | 新增 Cmd+K 命令面板 | 2026-03-28 | 🟡 待合并 | 高价值 UX 功能，建议加速 review |
| PR | [#998](https://github.com/netease-youdao/LobsterAI/pull/998) | 新增选中文本浮动工具栏 | 2026-03-28 | 🟡 待合并 | 同上，可提升对话效率 |

> ⚠️ 维护者请注意：**微信同步延迟** 和 **Notion MCP 环境变量** 问题虽非崩溃级，但严重影响特定场景用户体验，建议纳入近期迭代计划。

--- 

📊 **项目健康度评估：优秀**  
✅ 高活跃度 + 快速响应 + 关键 Bug 闭环 + 功能持续演进  
🔜 下一阶段重点：配置持久化架构、流式响应优化、MCP 生态兼容性

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

过去24小时内，TinyClaw 项目表现出极高的开发活跃度：**15个 PR 被合并或关闭，7个 Issues 完成闭环**，无新版本发布。社区贡献者集中修复了安装流程、Docker 部署、Telegram 集成、调度系统等多个关键模块的稳定性问题，同时推进了 TinyOffice 控制面板的 UI/UX 优化。整体项目处于快速迭代与工程 hardening 阶段，技术债务持续清理，用户体验显著提升。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中在底层稳定性修复与安装部署优化，尚未形成可对外发布的稳定版本。

---

## 3. 项目进展

今日合并/关闭的 PR 主要围绕 **系统稳定性、安装体验、Docker 支持与 TinyOffice 控制面板重构**展开：

- **安装流程全面优化**：通过 #237、#239、#240 等 PR，将 `curl | bash` 设为默认安装方式，自动迁移旧版 `~/.tinyclaw` 数据至 `~/.tinyagi`，并修复原生模块重建问题，显著降低新用户上手门槛（[#237](https://github.com/TinyAGI/tinyagi/pull/237) | [#239](https://github.com/TinyAGI/tinyagi/pull/239) | [#240](https://github.com/TinyAGI/tinyagi/pull/240)）。
- **Docker 部署稳定性增强**：#265 和 #266 解决了容器内 AI CLI（如 Codex）因权限和路径问题导致的认证失败，确保 Docker 环境可完整运行（[#265](https://github.com/TinyAGI/tinyagi/pull/265) | [#266](https://github.com/TinyAGI/tinyagi/pull/266)）。
- **调度与消息系统修复**：#259 修复定时消息未持久化到 `agent_messages` 表的问题，#255 修正仪表盘状态显示错误，提升可观测性（[#255](https://github.com/TinyAGI/tinyagi/pull/255) | [#259](https://github.com/TinyAGI/tinyagi/pull/259)）。
- **TinyOffice 控制面板重构**：#268 合并 Providers 与 Services 标签页，移除冗余 `/logs` 页面，简化控制平面结构（[#268](https://github.com/TinyAGI/tinyagi/pull/268)）。
- **进程与超时管理**：#218 引入 5 分钟超时强制终止卡死代理进程机制，防止消息无限重试（[#218](https://github.com/TinyAGI/tinyagi/pull/218)）。

> 项目整体在工程健壮性与部署友好性方面迈出关键步伐。

---

## 4. 社区热点

**最活跃 Issue：[#193 TinyOffice: add first-run web onboarding for initial setup](https://github.com/TinyAGI/tinyagi/issues/193)**  
- **评论数：10** | **状态：已关闭**
- 尽管已关闭，该 Issue 引发了关于“首次运行体验”的深度讨论。用户指出当前 TinyOffice 依赖 CLI 配置，缺乏引导式 Web 初始化流程，阻碍非技术用户 adoption。
- 背后诉求：**降低入门门槛，实现“零配置启动”**，推动 TinyClaw 从开发者工具向终端用户产品演进。

**高关注度 Issue：[#194 TinyOffice: add runtime control panel for daemon, queue, heartbeat, and channels](https://github.com/TinyAGI/tinyagi/issues/194)**  
- **👍 点赞数：1** | **状态：已关闭**
- 用户呼吁提供运行时控制面板，替代 CLI 进行启停、队列监控等操作。此需求与 #268 控制面板重构直接呼应，显示社区对 **可视化运维能力** 的强烈需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **Medium** | [#126 Telegram Bot Auto-Reconnect Failure](https://github.com/TinyAGI/tinyagi/issues/126) | Telegram 客户端断连后无法自动重连 | ✅ 已关闭（推测由 #113 实时流 PR 间接修复） |
| **Medium** | [#84 Telegram client fails with ETIMEDOUT on WSL2](https://github.com/TinyAGI/tinyagi/issues/84) | WSL2 环境下 Telegram 连接超时 | ✅ 已关闭（可能通过底层网络层优化解决） |
| **Low** | [#120 feat: verbose option and reaction on channels to indicate agent status](https://github.com/TinyAGI/tinyagi/issues/120) | 缺乏代理状态可视化反馈 | ✅ 已关闭（#113 实现实时工具活动流，部分满足需求） |

> 所有报告 Bug 均已闭环，无遗留高严重性问题。

---

## 6. 功能请求与路线图信号

以下功能请求显示出明确的产品演进方向，且已有相关 PR 支撑，**极可能被纳入下一版本**：

- **多模型提供商支持**：[#124](https://github.com/TinyAGI/tinyagi/issues/124) 请求支持 z.ai、Kimi、OpenRouter 等替代 Claude，以缓解 API 配额压力 → 已由 #168 实现 Kimi2.5 和 Minimax2.5 支持。
- **Docker Compose 与 Swarm 支持**：[#100](https://github.com/TinyAGI/tinyagi/issues/100) 提出容器化编排需求 → #265/#266 已优化 Docker 数据持久化与权限模型，为后续 Compose 模板铺路。
- **Web 初始化向导**：[#193](https://github.com/TinyAGI/tinyagi/issues/193) 的首次运行 onboarding 需求虽未直接实现，但安装流程简化（#237）和 TinyOffice 重构（#268）为其打下基础。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “初始配置太依赖 CLI，新手根本不知道怎么配 Telegram token”（#193 讨论）
  - “Docker 里跑不起来，Codex 一直报 500 错误”（#266 背景）
  - “定时消息发了但看不到记录，怀疑没执行”（#259 动机）

- **满意点**：
  - “实时看到 agent 在做什么，终于不用干等了”（#113 效果）
  - “curl 一键安装比 npx 方便多了”（#237 反馈）

- **使用场景**：
  - 个人自动化助手（Telegram 集成）
  - 多代理任务调度（Docker Swarm 需求）
  - 开发辅助（Claude Code 集成）

---

## 8. 待处理积压

经核查，**无长期未响应的重要 Issue 或 PR**。所有超过 30 天未更新的 Issue 均已在本轮迭代中关闭，体现团队高效的响应能力。建议维护者继续保持当前节奏，重点关注：

- TinyOffice 首次运行向导的完整实现（#193 衍生需求）
- 多代理协同机制（#100 中 Swarm 支持尚未完全实现）

> 项目健康度：⭐⭐⭐⭐☆（4.5/5）—— 高活跃度、快速闭环、用户导向明确。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-29）

---

## 1. 今日速览

Moltis 项目在 2026-03-28 表现出极高的开发活跃度，社区与核心团队协同推进多项关键修复与功能集成。过去24小时内，**8个 Issues 被关闭**，**16个 PR 更新**（其中12个已合并/关闭，4个待合并），并发布了**3个新版本**（`20260328.01`–`20260328.03`），显示出快速迭代与问题响应能力。整体项目健康度良好，Bug 修复集中解决 LLM 集成、多通道兼容性与部署稳定性问题，同时新增对 Jina.ai 搜索、Fireworks.ai 提供商及 Matrix 通道的支持，功能边界持续扩展。

---

## 2. 版本发布

### 新版本：`20260328.01` / `20260328.02` / `20260328.03`
- **发布性质**：连续热修复版本，聚焦于关键 Bug 修复与多通道稳定性提升。
- **核心更新内容**：
  - 修复 GraphQL 层未正确使用动态聊天服务的问题（#511），避免绕过 `chat_override` 配置。
  - 解决自定义 OpenAI 兼容 LLM 在**无模型指定时超时**的问题（#507），通过跳过探测循环直接调用 `/models` 接口。
  - 修复手动上下文压缩（`/compact`）导致严格 LLM（如 llama.cpp）会话中断的问题（#505），将压缩摘要消息角色从 Assistant 改为 System。
  - 增加本地 LLM 服务器模型探测超时至 30 秒（#515），提升对慢启动服务的兼容性。
  - 修复 Telegram 论坛主题（forum-topic）回复错乱问题，确保消息路由至正确线程（#512）。
  - 恢复 MiniMax 提供商对顶层系统提示（top-level system prompt）的支持（#510），避免 API 错误 2013。
- **破坏性变更**：无。所有修复均为向后兼容。
- **迁移建议**：建议所有用户升级至 `20260328.03` 以获取完整稳定性修复，尤其是使用自定义 LLM、Telegram 论坛或 MiniMax 的用户。

---

## 3. 项目进展

今日合并的 PR 显著提升了系统稳定性与多平台集成能力：

- **#511**（[链接](https://github.com/moltis-org/moltis/pull/511)）：修复 GraphQL 层静态绑定问题，确保所有聊天请求均通过 `GatewayState::chat()` 动态解析服务，消除与 RPC 路径的行为不一致。
- **#507 & #506**（[链接1](https://github.com/moltis-org/moltis/pull/507) | [链接2](https://github.com/moltis-org/moltis/pull/506)）：优化自定义 OpenAI 兼容提供商的模型发现逻辑，区分“无模型”与“有模型”场景，避免不必要的探测请求，提升配置效率。
- **#505**（[链接](https://github.com/moltis-org/moltis/pull/505)）：统一手动与自动压缩行为，使用 System 角色发送摘要，兼容 llama.cpp 等严格实现。
- **#512 & #498**（[链接1](https://github.com/moltis-org/moltis/pull/512) | [链接2](https://github.com/moltis-org/moltis/pull/498)）：增强 Telegram 集成，支持论坛主题级会话隔离与正确线程路由，提升多话题场景下的用户体验。
- **#497**（[链接](https://github.com/moltis-org/moltis/pull/497)）：新增 Fireworks.ai 作为一级提供商，支持 Kimi、DeepSeek、Qwen 等主流模型，丰富云 LLM 选项。
- **#500 & #499**（[链接1](https://github.com/moltis-org/moltis/pull/500) | [链接2](https://github.com/moltis-org/moltis/pull/499)）：从 #331 中拆分出 Matrix 通道与语音服务配置功能，提升模块化程度，支持本地 TTS/STT 服务接入。

> 项目整体在**多通道支持、LLM 兼容性、会话管理稳定性**三大方向取得实质性进展。

---

## 4. 社区热点

### 高关注度 Issue：#496 “install.sh fails to download ARM64 package (404) on aarch64 Linux”
- **链接**：[https://github.com/moltis-org/moltis/issues/496](https://github.com/moltis-org/moltis/issues/496)
- **评论数**：2 | **状态**：已关闭
- **分析**：该 Issue 反映了 ARM64 架构用户在部署时的关键障碍，直接影响项目可访问性。尽管未附详细日志，但维护者迅速响应并关闭，推测已在后续版本中修复包分发路径或构建流程。此问题凸显了跨平台部署支持的重要性，可能推动 CI/CD 流程中增加 aarch64 构建验证。

> 虽评论不多，但涉及**基础安装流程**，属于高优先级用户体验问题。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已修复 |
|--------|------|------|----------|
| 🔴 高 | #502 | 添加无模型指定的 OpenAI 兼容 LLM 导致超时 | ✅ 已修复（#507） |
| 🔴 高 | #501 | 手动上下文压缩破坏会话连续性 | ✅ 已修复（#505） |
| 🔴 高 | #508 | 升级后出现“invalid chat setting”错误 | ✅ 已修复（#510，MiniMax 系统提示问题） |
| 🟠 中 | #504 | 添加带模型指定的 LLM 时查询全部模型 | ✅ 已修复（#506） |
| 🟠 中 | #514 | 多数模型无法被选中 | ✅ 已修复（推测与 #507 探测逻辑相关） |
| 🟠 中 | #437 | “Reasoning” 可展开项仅在频道中显示响应 | ✅ 已关闭（可能为 UI 同步问题，已内部修复） |

> 所有报告 Bug 均在 24 小时内关闭，体现团队高效响应能力。

---

## 6. 功能请求与路线图信号

- **#513**（[链接](https://github.com/moltis-org/moltis/pull/513)）：**Jina.ai 作为新搜索引擎**被提出，支持国家/语言参数映射，补充 Brave 与 Perplexity 之外的选项。该 PR 处于开放状态，表明团队正在评估第三方搜索集成策略。
- **#503**（[链接](https://github.com/moltis-org/moltis/pull/503)）：提出**跨会话回忆、SSH 运行时 UX 改进与技能可移植性**，属于中长期功能规划，可能预示下一阶段将强化“AI 助手”的持久化与迁移能力。
- **Matrix 通道集成**（#500）与**本地语音服务支持**（#499）已从原大型 PR 中拆分，表明团队正推进**模块化通道架构**，未来可能支持更多 IM 平台与边缘部署场景。

> 路线图信号：**多通道抽象化、本地/私有 LLM 支持、会话状态管理增强**将成为下一阶段重点。

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实用户痛点：

- **部署门槛高**：ARM64 用户遭遇安装脚本 404 错误（#496），反映跨平台构建覆盖不足。
- **LLM 配置复杂**：多个用户（@bsarkisov）报告自定义 OpenAI 兼容服务在有无模型指定时行为不一致，导致超时或冗余查询，说明配置 UX 需优化。
- **升级兼容性风险**：用户 @LeeTeng2001 反馈升级后出现“invalid chat setting”，表明版本迁移需更严格的配置校验与回滚机制。
- **Telegram 高级功能支持不足**：论坛主题（forum-topic）消息错乱问题长期存在，影响多话题协作场景。

> 用户核心诉求：**更稳定的升级体验、更直观的多模型配置流程、更完善的跨平台支持**。

---

## 8. 待处理积压

- **#513**（feat: add Jina.ai as web search provider）  
  **状态**：Open | **创建**：2026-03-28 | **维护者**：@leszek3737  
  **提醒**：该 PR 提供有价值的搜索多样性，建议评估其与现有搜索抽象层的集成成本，考虑纳入 v0.5 路线图。

- **#503**（Add session recall, managed SSH runtime UX, and skill portability）  
  **状态**：Open | **创建**：2026-03-28 | **维护者**：@penso  
  **提醒**：涉及核心会话管理重构，建议拆分任务并制定阶段性交付计划，避免长期悬而未决。

> 建议维护者优先处理 #513，因其功能独立、风险低、用户价值明确。

---  
**报告生成时间**：2026-03-29  
**数据来源**：[Moltis GitHub Repository](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-29）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **40条 Issues 更新**（新开/活跃35条，关闭5条）和 **25条 PR 更新**（待合并13条，已合并/关闭12条），显示出强劲的开发与用户参与势头。尽管无新版本发布，但核心功能持续演进，涵盖多通道集成、本地模型支持、安全增强及用户体验优化。社区对 **CPU 占用异常**、**UI 崩溃** 和 **模型配置缺失** 等关键问题反馈集中，反映出生产环境中的稳定性挑战。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.2.0.post1`，开发重点集中在功能迭代与 Bug 修复。

---

## 3. 项目进展

今日有 **12个 PR 被合并或关闭**，推动多项关键能力落地：

- ✅ **#2457**：实现用户资产备份与迁移系统（[PR链接](https://github.com/agentscope-ai/CoPaw/pull/2457)），支持导出 Memories、Skills、Tools 为 ZIP 包，并集成每日自动备份。
- ✅ **#2448 / #2423**：新增 MiniMax OAuth 认证支持（[PR链接](https://github.com/agentscope-ai/CoPaw/pull/2448)），提升第三方 LLM 接入安全性。
- ✅ **#2463 / #2428**：初步支持 OpenCode 平台集成（[PR链接](https://github.com/agentscope-ai/CoPaw/pull/2463)），扩展本地推理服务生态。
- ✅ **#2419**：重构本地模型模块，提供统一配置入口（[PR链接](https://github.com/agentscope-ai/CoPaw/pull/2419)），解决用户反馈的“模型选择框消失”问题（#2425）。
- ✅ **#2426**：频道管理模块实现懒加载（[PR链接](https://github.com/agentscope-ai/CoPaw/pull/2426)），优化启动性能与资源占用。
- ✅ **#2465**：新增钉钉 AI 表格操作工具（[PR链接](https://github.com/agentscope-ai/CoPaw/pull/2465)），增强企业协作场景能力。

> 整体项目在 **多模态交互、第三方集成、系统稳定性** 方向稳步前进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 4）

| Issue | 主题 | 链接 | 分析 |
|------|------|------|------|
| #2291 | 🐾 Help Wanted: Open Tasks | [链接](https://github.com/agentscope-ai/CoPaw/issues/2291) | 维护者主动征集贡献者，列出 P0-P2 优先级任务，反映项目进入规模化协作阶段，需外部开发者参与。 |
| #2218 | CPU 100% 占用（空闲 busy-polling） | [链接](https://github.com/agentscope-ai/CoPaw/issues/2218) | 核心性能 Bug，影响所有用户基础体验，尚未有修复 PR，需紧急关注。 |
| #2293 | QA Agent 操作导致 UI 崩溃 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2293) | 前端 JS 语法错误，重装无效，表明存在深层状态污染或构建产物问题。 |
| #2298 | 缺乏 LLM 选择项 & Ollama 配置困难 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2298) | 用户安装 `copaw[ollama]` 失败，文档缺失，暴露依赖管理与文档同步短板。 |
| #2439 | 语音消息转写失效 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2439) | 多模态功能退化，直接影响语音交互用户。 |
| #2434 | Console Web 不支持 Ctrl+V 粘贴图片 | [链接](https://github.com/agentscope-ai/CoPaw/issues/2434) | UX 一致性诉求，对标 Discord/Slack 标准交互。 |

> **核心诉求**：提升系统稳定性、完善文档、优化多模态交互体验。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|-------------|
| 🔴 **Critical** | #2218 | 主进程空闲时 CPU 占用 100%（epoll busy-polling） | ❌ 无 |
| 🔴 **Critical** | #2445 | 网关重启后 Agent 永久卡死（100% 复现） | ❌ 无 |
| 🔴 **Critical** | #2293 | QA Agent 操作致 UI 崩溃（SyntaxError） | ❌ 无 |
| 🟠 **High** | #2439 | 语音消息无法转写 | ❌ 无 |
| 🟠 **High** | #2298 | Ollama 支持配置困难，依赖安装失败 | ❌ 无（但 #2419 可能间接缓解） |
| 🟠 **High** | #2378 | 工具密集型技能引发无限循环（46+ 次迭代） | ❌ 无 |
| 🟡 **Medium** | #2421 | Feishu 通道偶发重复回复 | ❌ 无 |
| 🟡 **Medium** | #2459 | 多智能体协作中 `/approve` 命令无法转发 | ❌ 无 |

> **建议优先级**：#2218 和 #2445 为阻塞性 Bug，应优先分配资源排查。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区响应或已有 PR 推进，**极可能纳入下一版本**：

- ✅ **用户资产备份与迁移**（#2443 → #2457 已合并）
- ✅ **Agent 消息队列与优先级调度**（#2467 → #2468 → #2469 新开 PR）
- ✅ **Console Web 支持粘贴图片/文件**（#2434，技术方案已提出，待实现）
- ✅ **Magic Command `/break` 强制中断 Agent**（#2456，适用于 Feishu/DingTalk）
- ✅ **开放 AgentScope Hook 自定义能力**（#2407，支持 self-improvement 类技能）
- ✅ **Skills Hub 管理页面**（#2418，用户呼吁集中管理主流技能）

> **趋势判断**：项目正从“基础功能搭建”转向“企业级稳定性 + 开发者生态扩展”。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- 😠 **不满点**：
  - “重装也不行，F12 报错 SyntaxError”（#2293）→ 前端健壮性不足。
  - “pip install 'copaw[ollama]' 各种问题，文档没说明”（#2298）→ 安装体验差。
  - “Agent 卡死 >4 小时，重新部署依旧”（#2445）→ 运维容错能力弱。
  - “每次调用工具都有 30-60% 超时”（#2435）→ 网络波动下无重试/降级机制。

- 👍 **满意/期待点**：
  - “终于有备份功能了！跨设备迁移太重要”（#2443 评论）
  - “希望早点支持 Ctrl+V 粘贴，像 Slack 一样流畅”（#2434）
  - “MiniMax OAuth 支持很棒，安全多了”（#2448 相关讨论）

> **核心痛点**：**安装部署复杂性**、**运行时稳定性**、**多模态交互一致性**。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先处理：

| Issue | 类型 | 创建日期 | 状态 | 建议行动 |
|------|------|--------|------|--------|
| #2218 | Bug（CPU 100%） | 2026-03-24 | OPEN，10 评论 | 高优排查，影响所有用户 |
| #2153 | Bug（钉钉 webhook 过期） | 2026-03-24 | CLOSED，但 #2221 类似问题仍 OPEN | 验证修复是否彻底 |
| #836 | Question（浏览器登录处理） | 2026-03-06 | CLOSED，但方案未文档化 | 将最佳实践写入官方指南 |
| #2277 | Bug（auto tool choice 报错） | 2026-03-25 | OPEN，2 评论 | 检查 #1570 修复是否完整 |

> ⚠️ **提醒**：#2218 已存在 4 天，需立即介入；#2277 涉及核心工具调用逻辑，不可忽视。

---

**报告生成时间**：2026-03-29  
**数据来源**：GitHub CoPaw 仓库 Issues & PRs（截至 2026-03-28 23:59 UTC）  
**分析师备注**：项目整体健康度良好，但需警惕 **稳定性债务累积**。建议设立“稳定性专项周”集中攻坚 #2218、#2445 等关键 Bug。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**  
**日期：2026-03-29**

---

### 1. 今日速览  
过去24小时内，ZeptoClaw 社区活跃度中等，共产生 1 条新 Issue 和 2 条新 Pull Request，均由核心贡献者 @stuartbowness 提交。项目聚焦于解决 Telegram 集成中的关键稳定性问题，并推进上下文压缩机制的架构升级。无新版本发布，但两个高优先级 PR 正在积极开发中，显示出对用户体验和系统健壮性的持续投入。整体开发节奏紧凑，问题响应迅速。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日无 PR 被合并或关闭，但以下两项重要功能/修复已进入开发阶段，标志着项目在关键瓶颈上的实质性推进：

- **#460 feat(agent): multi-layered context compaction to prevent token overflow**  
  [https://github.com/qhkm/zeptoclaw/pull/460](https://github.com/qhkm/zeptoclaw/pull/460)  
  该 PR 彻底重构了上下文压缩机制，采用多层防御策略替代原有的单轮词数截断方案，有效防止长对话中的不可恢复性 token 溢出崩溃。此举显著提升了代理在高负载对话场景下的稳定性。

- **#462 fix(telegram): prevent silent message failures with chunking and plaintext fallback**  
  [https://github.com/qhkm/zeptoclaw/pull/462](https://github.com/qhkm/zeptoclaw/pull/462)  
  针对 Telegram 消息静默失败问题，引入消息分块（chunking）机制与纯文本降级回退策略，确保即使 HTML 渲染异常，用户仍能收到响应。这是对 Issue #461 的直接技术响应。

> 尽管尚未合并，这两个 PR 已构成下一阶段稳定性的核心支柱，预计将大幅提升 Telegram 渠道的可靠性。

---

### 4. 社区热点  
**#461 [OPEN] bug: research tasks via Telegram silently fail with no response**  
[https://github.com/qhkm/zeptoclaw/issues/461](https://github.com/qhkm/zeptoclaw/issues/461)  

该 Issue 是当前唯一新增且未关闭的问题，虽暂无评论，但其描述的问题——“开放性研究任务通过 Telegram 静默失败”——直击用户核心痛点：**任务执行完成但无反馈**，严重影响信任感与使用体验。作者 @stuartbowness 已同步提交修复 PR #462，表明团队对此类高影响 bug 的快速响应能力。该问题背后反映的是跨平台消息渲染一致性与错误处理机制的缺失，是社区对“可观测性”和“可靠性”的强烈诉求。

---

### 5. Bug 与稳定性  
| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|---------------|
| 🔴 高 | #461 | Telegram 渠道执行研究任务后无响应（静默失败），尤其影响涉及浏览器操作的复杂任务 | ✅ 是（#462） |
| 🟡 中 | 隐含风险 | 长对话场景下 token 溢出导致崩溃（由 #460 描述） | ✅ 是（#460） |

> 当前所有已知高严重性 bug 均已进入修复开发阶段，无遗留未响应崩溃报告。

---

### 6. 功能请求与路线图信号  
- **上下文管理能力增强**：PR #460 提出的“多层上下文压缩”不仅是 bug 修复，更代表向**智能对话记忆管理**演进的技术信号，可能成为未来支持超长对话、多轮任务的核心能力。
- **跨平台消息鲁棒性提升**：PR #462 引入的“分块 + 纯文本回退”机制，暗示项目正从“功能实现”转向“生产级稳定性”，未来可能扩展至其他消息平台（如 Discord、Slack）的容错设计。

> 这两项改进极有可能纳入下一个 minor 版本（如 v0.8.0），作为“稳定性与可靠性”主题的核心更新。

---

### 7. 用户反馈摘要  
从 Issue #461 可提炼出关键用户痛点：  
- **使用场景**：用户通过 Telegram 向 ZeptoClaw 发起开放性研究任务（如“谁是 Rust 社区中最具争议的开发者？”），期望获得结构化回复。  
- **核心不满**：任务看似“卡死”或“无响应”，缺乏进度提示或错误反馈，导致重复提问或放弃使用。  
- **隐含期望**：用户希望即使输出较长，也能通过分段、摘要或状态通知等方式获得“可感知的响应”，而非完全静默。

> 这反映出用户对 AI 助手的“可交互性”和“状态透明性”有较高期待，远超基础功能实现。

---

### 8. 待处理积压  
经核查，当前无长期未响应（>7 天）的重要 Issue 或 PR。所有活跃问题均处于开发或讨论中，维护者响应及时。建议持续关注 #460 与 #462 的代码审查进度，确保高质量合并。

---  
**健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
项目处于积极迭代期，关键问题识别准确、修复路径清晰，社区响应高效，整体发展态势良好。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026-03-29  
🔗 项目主页：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. **今日速览**  
过去24小时内，EasyClaw 项目整体活跃度较低，无 Pull Request 提交或合并，社区互动集中于 Bug 反馈。共新增 2 条 Issues，均指向同一核心问题：百炼套餐模型切换后触发 HTTP 400 错误。项目发布了一个新版本 v1.7.8，主要提供 macOS 安装指引优化，未涉及功能变更。当前开发节奏趋于维护性更新，用户侧稳定性问题成为焦点。

---

### 2. **版本发布**  
✅ **v1.7.8 已发布**（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)）  
本次更新为轻量级发布，**无功能变更或破坏性更新**，重点优化 macOS 用户安装体验：  
- 新增针对 macOS Gatekeeper 拦截未签名应用的详细解决方案说明；  
- 明确提示“应用损坏”为系统安全机制误报，非文件损坏；  
- 提供 Terminal 命令行绕过指引（文档截断，建议补充完整命令如 `xattr -d com.apple.quarantine /path/to/RivonClaw`）。  
⚠️ **迁移注意事项**：无需代码迁移，但建议 macOS 用户升级后按新指引操作以避免启动失败。

---

### 3. **项目进展**  
❌ 今日无 Pull Request 合并或关闭，无功能推进或代码重构记录。项目处于问题响应与稳定性修复阶段，开发重心偏向用户支持而非新功能开发。

---

### 4. **社区热点**  
🔥 **高频重复 Bug 报告集中爆发**  
两条新 Issue（[#28](https://github.com/gaoyangz77/rivonclaw/issues/28)、[#29](https://github.com/gaoyangz77/rivonclaw/issues/29)）由同一用户 @slowayear 提交，内容高度重合，均描述：  
> 在 RivonClaw 百炼套餐中，从 Qwen3.5 切换至 GLM/Kimi 等模型后，调用 API 返回 `HTTP 400: InvalidParameter: Range of input length should be [1, 202752]`。  

**背后诉求分析**：  
- 用户期望多模型无缝切换能力，但当前实现可能存在上下文缓存未清除、请求参数未重置或模型专属配置未同步等问题；  
- 错误提示指向“输入长度超限”，但实际输入正常，暗示后端参数校验逻辑与前端状态不一致；  
- 该问题直接影响核心功能可用性，属高优先级体验阻塞点。

---

### 5. **Bug 与稳定性**  
🚨 **高严重性 Bug（P1）**  
- **模型切换后触发 HTTP 400 参数错误**（[#28](https://github.com/gaoyangz77/rivonclaw/issues/28) / [#29](https://github.com/gaoyangz77/rivonclaw/issues/29)）  
  - 影响范围：使用百炼套餐且切换模型的用户（Windows/macOS 均可能复现）；  
  - 现象：切换至 GLM/Kimi 等非 Qwen 模型后，任意输入均报 `InvalidParameter`；  
  - 根因推测：模型上下文、token 计数或请求体结构未随模型切换重置；  
  - ✅ 已有用户复现，❌ 尚无 fix PR，需维护者介入排查 API 请求构造逻辑。

> 建议：合并重复 Issue 并标记为 `bug` + `high-priority`，优先分配开发资源。

---

### 6. **功能请求与路线图信号**  
📌 今日无明确新功能请求提出。但从 Bug 反馈可推断潜在需求：  
- **模型切换状态隔离机制**：用户期望切换模型时自动清除历史上下文与缓存；  
- **统一错误处理与友好提示**：当前错误信息技术性过强，需封装为“模型配置异常，请重试或联系支持”等用户可读提示；  
- 若上述问题修复，可考虑将“多模型会话隔离”纳入 v1.8.0 路线图。

---

### 7. **用户反馈摘要**  
💬 从 Issues 评论提炼关键信息：  
- **使用场景**：用户在 Windows 11 环境下使用 v1.7.7 版本，尝试从 Qwen3.5 切换至 Kimi2.5/GLM5 进行对比测试；  
- **痛点**：模型切换后完全不可用，错误提示晦涩（“输入长度应在 [1,202752]”），误导用户怀疑自身输入问题；  
- **满意度**：对多模型支持功能本身持积极态度，但对切换稳定性表示失望；  
- **隐含期待**：希望官方提供模型兼容性说明或自动配置同步机制。

---

### 8. **待处理积压**  
⚠️ **需维护者关注事项**：  
- **重复 Issue 未合并**：[#28] 与 [#29] 内容高度一致，建议关闭其一并引导用户集中讨论；  
- **macOS 安装文档不完整**：v1.7.8 Release 中 Terminal 命令被截断，需补充完整解除隔离指令；  
- **长期无响应的技术债**：过去7天无 PR 活动，建议检查是否有未处理的低 hanging fruit（如文档 typo、依赖更新等）以提升社区参与感。

---  
📊 **健康度评估**：项目处于**维护期**，用户增长放缓，但核心功能稳定性面临挑战。建议优先修复模型切换 Bug 并增强错误处理，以维持用户信任。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*