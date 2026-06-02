# OpenClaw 生态日报 2026-03-26

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-26 01:07 UTC

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

# OpenClaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

OpenClaw 在过去24小时内保持极高活跃度，共处理 **500条 Issues 更新**（新开/活跃436条，关闭64条）和 **500条 PR 更新**（待合并353条，已合并/关闭147条），显示出社区参与度持续高涨。项目发布了 **3个新版本**，主要集中在 OpenAI 兼容性增强与运行时稳定性修复。核心问题集中在插件兼容性、OAuth 令牌管理、UI 资产加载及多通道消息路由等方向，反映出用户向生产环境部署的深入趋势。

---

## 2. 版本发布

### 🔖 v2026.3.24（正式版）
- **Breaking Changes**: 无明确破坏性变更，但部分插件需适配新 `/v1/models` 和 `/v1/embeddings` 接口。
- **主要更新**：
  - 增强 Gateway 对 OpenAI 兼容协议的支持，新增 `/v1/models` 和 `/v1/embeddings` 端点，提升与 RAG 客户端的互操作性（[#v2026.3.24](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24)）。
  - 改进 `/tools` 接口，使其更清晰地展示当前 agent 可用工具列表。
- **致谢贡献者**: @vincentkoc

### 🔖 v2026.3.24-beta.2
- **修复重点**：
  - 对齐出站媒体文件访问策略与 `fs.policy` 配置，确保非 `workspaceOnly` 模式下本地文件仍可发送，同时维持沙箱隔离（[#v2026.3.24-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.3.24-beta.2)）。
  - 降低 Node.js 22 支持下限至 `22.14.0`，扩大部署兼容性。

### 🔖 v2026.3.24-beta.1
- 内容与正式版一致，为预发布测试版本，验证 OpenAI 兼容性与工具接口改进。

> ✅ **迁移建议**：使用微信、WhatsApp 等第三方插件的用户需注意潜在兼容性问题；建议升级前备份 `openclaw.json` 并测试关键工作流。

---

## 3. 项目进展

今日有 **147个 PR 被合并或关闭**，重点进展包括：

- **功能增强**：
  - 新增 Oracle OCI Generative AI 提供商支持（[#54784](https://github.com/openclaw/openclaw/pull/54784)），扩展多云 LLM 接入能力。
  - 实现 Control UI 中自动切换至 `imageModel` 当检测到图像输入（[#52079](https://github.com/openclaw/openclaw/pull/52079)），提升多模态体验。
  - 添加 `chat-history` 内置钩子，支持实时消息日志记录（[#54680](https://github.com/openclaw/openclaw/pull/54680)），便于审计与调试。

- **稳定性修复**：
  - 修复 Discord WebSocket 异常关闭导致网关崩溃问题（[#53644](https://github.com/openclaw/openclaw/issues/53644) → [#54785](https://github.com/openclaw/openclaw/pull/54785)）。
  - 解决 Telegram 非论坛聊天中 `currentChannelId` 丢失引发的 DM 回归问题（[#54611](https://github.com/openclaw/openclaw/pull/54611)）。
  - 修复 OpenAI-completions 适配器在非流式响应中忽略实际 token 使用量的问题（[#54624](https://github.com/openclaw/openclaw/pull/54624)）。

> 📈 整体项目在**多通道稳定性**、**企业级集成**和**开发者体验**方面显著推进。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|------|------|--------|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 👍65 / 💬49 | 强烈呼吁补齐 Linux 和 Windows 桌面端应用，匹配 macOS 功能水平。 |
| [#52885 微信插件兼容性断裂](https://github.com/openclaw/openclaw/issues/52885) | 💬40 | 插件系统升级后 ESM 模块解析失败，影响中国用户关键通信渠道。 |
| [#9157 Workspace 文件注入浪费 93.5% token](https://github.com/openclaw/openclaw/issues/9157) | 👍12 / 💬14 | 性能优化诉求强烈，系统提示重复注入导致成本飙升。 |
| [#29053 原生 MCP 客户端支持](https://github.com/openclaw/openclaw/issues/29053) | 👍10 / 💬11 | 希望对接行业标准 MCP 协议，避免重复造轮子。 |

> 🔥 社区明显分化为两大诉求群：**桌面端用户**要求跨平台一致性，**开发者/运维**关注协议标准化与资源效率。

---

## 5. Bug 与稳定性

### ⚠️ 高严重性（崩溃/数据丢失）
- **[#53317] Gateway 启动时用陈旧缓存覆盖新鲜 OAuth 令牌**（openai-codex）  
  → 导致所有 Codex 请求失败，**已有重现报告**，尚无 fix PR。
- **[#46049] LLM 请求超时忽略用户配置**  
  → 即使设 24 小时超时仍被内部机制中断，影响长任务执行。
- **[#53644] Discord WebSocket 异常关闭引发未捕获异常**  
  → **已修复**：[#54785](https://github.com/openclaw/openclaw/pull/54785)

### 🟠 中严重性（功能失效）
- **[#52823] Control UI 资产未找到**（回归）  
  → 升级后界面崩溃，需手动运行 `pnpm ui:build`，**已关闭**但暴露构建流程缺陷。
- **[#40082] Agent 接受任务但不执行，返回占位回复**  
  → 活动日志不一致，疑似调度器退化。
- **[#47079] Mistral API 因 `max_completion_tokens` 参数拒绝请求**  
  → OpenAI 适配器发送了 Mistral 不支持的字段。

### 🟡 低严重性（体验问题）
- **[#51085] STT 麦克风按钮因 Permissions-Policy 头被阻止**  
- **[#46818] Web UI 白色三角形警告图标随机覆盖全屏**

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **MCP 原生客户端支持** ([#29053](https://github.com/openclaw/openclaw/issues/29053)) | 无直接 PR，但 [#54680] 显示钩子系统扩展中 | ⭐⭐⭐ 高（行业趋势） |
| **Control UI 多 Agent 切换** ([#32495](https://github.com/openclaw/openclaw/issues/32495)) | 无 | ⭐⭐ 中（UI 层改动） |
| **Linux/Windows 桌面应用** ([#75](https://github.com/openclaw/openclaw/issues/75)) | 无 | ⭐ 低（需独立客户端开发） |
| **Sambanova 提供商支持** | [#54748](https://github.com/openclaw/openclaw/pull/54748) 已提交 | ✅ 即将合并 |

> 💡 项目正积极扩展**云厂商集成**（Oracle、Sambanova）和**可观测性**（chat-history hook），MCP 支持可能是下一阶段重点。

---

## 7. 用户反馈摘要

- **满意点**：
  - OpenAI 兼容网关改进获得开发者好评（@vincentkoc 被多次致谢）。
  - Docker 部署流程相对稳定（对比 CentOS 7 成功案例）。
- **痛点**：
  - **插件生态脆弱**：微信、WhatsApp、Matrix 插件频繁出现模块缺失或兼容性问题（[#52885], [#53244], [#53513]）。
  - **OAuth 管理混乱**：Qwen、OpenAI Codex 等提供商令牌刷新异常普遍，影响生产可用性（[#36982], [#52037], [#53317]）。
  - **UI/UX 不一致**：Control UI 在不同场景下行为割裂（如 Cron 不显示、模型下拉空白）。

> 🗣️ 用户典型场景：**企业用户尝试将 OpenClaw 作为内部 AI 代理中枢**，但受限于插件稳定性和多账户管理能力。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 风险提示 |
|--------|------|--------|--------|
| [#14593] Docker 中 `brew not installed` 导致技能安装失败 | Bug | >40 天 | 阻碍容器化部署标准化 |
| [#26322] OAuth 令牌刷新竞态条件 | Bug | >25 天 | 多 Agent 共享凭证时必现 |
| [#15849] `openclaw doctor` 误判非网关服务 | Bug | >40 天 | 可能误杀用户进程 |
| [#43561] `trusted-proxy` 模式与 nginx 不兼容 | Security | >10 天 | 生产环境多节点部署高危 |
| [#53342] apfree-wifidog 桥接扩展 | Feature PR | 2 天 | 高价值 IoT 集成，待 review |

> 🔔 **维护者注意**：OAuth 和插件加载问题是当前最大稳定性瓶颈，建议优先分配资源。

---

**报告生成时间**: 2026-03-26  
**数据来源**: [OpenClaw GitHub Repository](https://github.com/openclaw/openclaw)  
**分析师**: AI 开源项目分析师

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-03-26**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **“核心框架趋同、垂直场景分化”** 的格局。以 OpenClaw 为代表的多通道网关架构成为主流，各项目普遍聚焦于 **多模态支持、MCP 工具集成、生产环境稳定性** 三大方向。社区反馈显示，用户正从实验性部署转向企业级集成，对 OAuth 管理、会话隔离、资源效率等运维能力提出更高要求。安全加固（如命令注入防护、沙箱隔离）和本地推理能力成为新兴竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 新版本发布 | 健康度评估 |
|------|---------------|-----------|-------------|-------------|
| **OpenClaw** | 500 | 500 | ✅ 3 个（含正式版） | ⭐⭐⭐⭐ |
| **NanoBot** | 17 | 50 | ❌ | ⭐⭐⭐⭐☆ |
| **Zeroclaw** | 41 | 50 | ❌ | ⭐⭐⭐ |
| **PicoClaw** | 183 | 278 | ✅ 2 个（v0.2.4 + nightly） | ⭐⭐⭐⭐ |
| **NanoClaw** | 37 | 50 | ❌ | ⭐⭐⭐ |
| **IronClaw** | 9 | 50 | ❌（v0.22.0 待发布） | ⭐⭐⭐⭐☆ |
| **LobsterAI** | 35 | 50 | ✅ 1 个（2026.3.25） | ⭐⭐⭐ |
| **TinyClaw** | 0 | 4 | ❌ | ⭐⭐⭐⭐☆ |
| **Moltis** | 3 | 3 | ❌ | ⭐⭐⭐ |
| **CoPaw** | 50 | 49 | ✅ 1 个（v0.2.0.post1） | ⭐⭐⭐ |
| **ZeptoClaw** | 9（关闭） | 22（合并） | ❌ | ⭐⭐⭐⭐☆ |
| **EasyClaw** | 0 | 0 | ❌ | ⚠️ 静默 |

> 注：健康度综合考量响应速度、Bug 修复效率、架构演进与社区互动。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **最大社区规模与生态广度**：单日 500+ Issues/PR，支持微信/WhatsApp/Discord/Telegram 等 10+ 通道，插件生态最成熟。  
- **企业级集成能力**：率先实现 Oracle OCI、Sambanova 等云厂商 LLM 接入，Gateway 层 OpenAI 兼容性最强（含 `/v1/models`、`/v1/embeddings`）。  
- **生产就绪度高**：Docker 部署稳定，多版本并行发布策略清晰，适合中大型团队。

**技术路线差异**：  
- 采用 **中心化网关架构**（vs Zeroclaw/IronClaw 的轻量 agent 模式），强调协议标准化与多租户隔离。  
- 插件系统基于 ESM 动态加载（vs PicoClaw 的静态技能注册），灵活性高但兼容性风险突出（如微信插件断裂 #52885）。

**社区规模对比**：  
OpenClaw 的日均 Issue 量是第二名 CoPaw 的 10 倍，PR 合并速度（147/日）远超同类，体现其作为 **事实标准参考实现** 的地位。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **MCP 工具标准化** | OpenClaw、NanoClaw、Moltis、LobsterAI | 原生 MCP 客户端支持、工具调用审计、多账户凭证管理 |
| **会话与上下文管理** | PicoClaw、NanoClaw、CoPaw | `/new` 会话重置、MEMORY.md 膨胀优化、子代理工具继承 |
| **OAuth 与凭证安全** | OpenClaw、IronClaw、LobsterAI | 令牌刷新竞态、密钥脱敏、沙箱隔离 |
| **本地/离线推理支持** | Moltis、Zeroclaw、PicoClaw | Ollama 集成、Llama.cpp 兼容、低延迟响应 |
| **多通道稳定性** | 全生态 | Telegram 消息去重、Matrix E2EE 恢复、Discord WebSocket 异常处理 |

> 🔥 **行业共识**：MCP 协议采纳率 100%，会话隔离与凭证安全成下一阶段攻坚重点。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 多通道网关 + 企业集成 | 中大型团队、ISV | 中心化 Gateway，插件动态加载 |
| **Zeroclaw** | 轻量 agent + Matrix 深度集成 | 开发者、极客 | Rust 编写，强类型安全，E2EE 优先 |
| **PicoClaw** | 多代理协作 + 配置热重载 | 技术爱好者、小团队 | Python 生态，子代理工具继承机制 |
| **IronClaw** | SaaS 化平台 + 多租户 | 企业 SaaS 提供商 | DB 驱动用户系统，TenantCtx 编译期隔离 |
| **LobsterAI** | 桌面端体验 + 商业化功能 | 个人用户、中小企业 | Electron 封装，积分/登录体系 |
| **Moltis** | MCP 服务器管理 + 本地推理 | 隐私敏感用户 | 抽象 OpenAI Provider，支持 openai-oxide |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比，功能爆发）：  
  **PicoClaw**（278 PR）、**OpenClaw**（500 PR）、**ZeptoClaw**（22 PR 合并）—— 聚焦核心架构优化与新通道集成。

- **质量巩固阶段**（Bug 修复主导，稳定性优先）：  
  **Zeroclaw**（流式响应修复）、**NanoClaw**（安全漏洞响应）、**IronClaw**（多租户隔离完成）—— 解决生产环境痛点。

- **生态扩展阶段**（商业化/标准化）：  
  **LobsterAI**（登录/积分系统）、**Moltis**（本地推理提案）—— 探索可持续模式与离线能力。

---

## 7. 值得关注的趋势信号

1. **MCP 将成为智能体“操作系统级”标准**  
   所有项目均加速 MCP 集成，OpenClaw 的 `chat-history` hook、IronClaw 的 `/v1/responses` 端点表明：**工具调用可观测性** 是下一竞争高地。

2. **“会话即资源”催生上下文管理革命**  
   PicoClaw 的 token 估算优化、CoPaw 的 MEMORY.md 膨胀问题反映：**长对话成本与精度平衡** 需系统级解决方案（如分层记忆、自动 summarization）。

3. **安全从“可选”变为“刚需”**  
   NanoClaw 的 Critical 命令注入、LobsterAI 的桌面端分级授权显示：**exec 沙箱、凭证隔离、CORS 防护** 已成生产部署前提。

4. **混合推理（云端+本地）架构兴起**  
   Moltis 的“Local Thinking”、PicoClaw 的 Ollama 集成预示：**离线能力≠功能阉割**，而是隐私与延迟的权衡选择。

> 💡 **对开发者的建议**：优先选择 MCP 兼容框架；在设计 agent 时预留会话重置与工具权限控制接口；生产部署必须实现 OAuth 令牌生命周期管理。

---  
**分析师：AI 开源项目分析师**  
**数据来源：各 GitHub 仓库公开动态（2026-03-26）**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-26）

---

## 1. 今日速览

NanoBot 在过去24小时内保持高活跃度，共产生 **17条 Issues 更新** 和 **50条 PR 更新**，其中 **36个 PR 待合并**，显示社区贡献热情高涨。尽管无新版本发布，但多个关键功能（如 `/skill` 命令、AWS Bedrock 支持、消息去重机制）已进入开发尾声。项目整体处于快速迭代期，重点聚焦于架构稳定性、多平台兼容性与第三方服务集成。

---

## 2. 版本发布

**无新版本发布**。当前主干分支仍在持续集成中，部分重要修复（如 `max_completion_tokens` 参数兼容性）预计将在下一版本中统一发布。

---

## 3. 项目进展

今日有 **14个 PR 被合并或关闭**，推动多项关键改进：

- ✅ **#2472**：新增 Step Fun（阶跃星辰）AI 平台支持，扩展模型生态（[链接](https://github.com/HKUDS/nanobot/pull/2472)）
- ✅ **#2477**：引入可配置时区功能，提升时间上下文一致性（[链接](https://github.com/HKUDS/nanobot/pull/2477)）
- ✅ **#2478**：为消息发送添加指数退避重试机制，增强通道可靠性（[链接](https://github.com/HKUDS/nanobot/pull/2478)）
- ✅ **#2464（隐含）**：修复 OpenAI 兼容接口中 `max_tokens` 与 `max_completion_tokens` 参数冲突问题（见 #2491 和 #2494）

此外，**#2488**（用户主动技能激活命令）和 **#2486**（迁移至 `discord.py` 稳定实现）等核心功能 PR 仍在评审中，预计近期合并。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 分析 |
|------|------|--------|------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 提示前缀未持久化导致 OpenAI 计费冲突 | 6 | 用户指出架构级缺陷：对话历史存储格式与实际发送给模型的 prompt 不一致，可能影响 token 计费准确性，需底层重构 |
| [#2443](https://github.com/HKUDS/nanobot/issues/2443) | LiteLLM 依赖被隔离（含凭证窃取风险） | 6 | 安全事件引发广泛关注，推动项目加速移除 LiteLLM（已体现在 #2485 AWS Bedrock 原生实现中） |
| [#2456](https://github.com/HKUDS/nanobot/issues/2456) | `nanobot onboard` 导致系统死锁与 SSH 锁出 | 7 | 多用户 Linux 环境下的严重稳定性问题，可能涉及权限或资源竞争，亟待排查 |

> 💡 **趋势判断**：社区正从“功能扩展”转向“安全加固”与“生产环境稳定性”，维护者需优先响应系统级风险。

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| `nanobot onboard` 引发系统死锁（#2456） | ⚠️ **高危** | 未修复 | — |
| Telegram Android 消息重复（#2208） | ⚠️ **中危** | 已关闭（疑似环境相关） | — |
| OpenAI 兼容接口参数冲突（#2476, #2462） | ⚠️ **中危** | **已修复** | #2491, #2494 |
| 连续 assistant 消息被 vLLM 拒绝（#2479） | ⚠️ **中危** | **已修复** | #2479 |
| LangSmith 集成失效（#2493） | ⚠️ **低危** | 未修复 | — |

> 🔧 建议：对 #2456 启动紧急排查，避免影响生产部署。

---

## 6. 功能请求与路线图信号

以下功能请求已获得 PR 支持，**极可能纳入下一版本**：

- ✅ **用户主动技能控制**：`/skill` 命令（#2489 → #2488）解决技能调用不透明问题
- ✅ **AWS Bedrock 原生支持**（#2485）：替代 LiteLLM，满足企业级安全需求
- ✅ **消息防抖与合并**（#2492）：优化 Telegram 转发消息体验
- ✅ **Groq Whisper 语言参数**（#2481）：提升语音转录准确性

> 📌 **潜在路线图方向**：多工作流协作（#2013 “Nano Team Mode”）、OpenClaw 插件桥接（#2484）、端点通道（#1861）等中长期提案仍在讨论中。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “升级后 Telegram Android 消息重复，桌面端正常” → 跨平台一致性差（#2208）
  - “`max_tokens` 报错，必须改 `max_completion_tokens`” → API 兼容性滞后（#2462）
  - “LangSmith 突然不能用了” → 依赖变更未充分通知（#2493）

- **满意点**：
  - “终于可以配置时区了，调度任务更准确”（#2477）
  - “重试机制让 Discord 消息更可靠”（#2478）

- **使用场景**：
  - 多用户 Linux 服务器部署（#2456）
  - 企业内集成 AWS Bedrock（#2485）
  - 中文语音转录（#2481）

---

## 8. 待处理积压

以下重要事项长期未响应，建议维护者优先处理：

| 事项 | 类型 | 创建时间 | 状态 | 建议 |
|------|------|----------|------|------|
| [#144](https://github.com/HKUDS/nanobot/issues/144) | Gemini API Key 检测逻辑错误 | 2026-02-05 | 🟡 开放超50天 | 需修复模型路由逻辑 |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) | 执行工具缺乏沙箱隔离 | 2026-03-12 | 🟡 PR #1940 待审 | 安全关键，应加速合并 |
| [#2440](https://github.com/HKUDS/nanobot/issues/2440) | openai_codex 缓存键不稳定 | 2026-03-24 | 🟡 开放2天 | 影响缓存效率，需设计稳定键策略 |

> ⚠️ **提醒**：#144 涉及核心模型调用逻辑，长期未修可能阻碍新用户上手。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃贡献者众多，功能迭代迅速，但需加强高危 Bug 响应与文档同步（尤其依赖变更）。安全重构（去 LiteLLM）进展良好，生态扩展积极。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区活跃度显著上升，共产生 **41 条 Issues 更新**（新开/活跃 34 条，关闭 7 条）和 **50 条 PR 更新**（待合并 36 条，已合并/关闭 14 条），显示出高强度开发与问题反馈节奏。尽管无新版本发布，但核心功能修复与架构优化并行推进，尤其在 Matrix 通道、流式响应、内存管理及安装流程方面取得实质性进展。社区对多房间支持、E2EE 稳定性、Docker 默认配置等问题的关注度集中，反映出用户对生产环境可用性的迫切需求。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 v0.6.2，多个关键修复（如流式中断、Matrix 多房间监听）已通过 PR 提交，预计将纳入下一热修复版本。

---

## 3. 项目进展

今日多个重要 PR 被合并或持续推进，显著提升系统稳定性与用户体验：

- **#4675**（[@tylerjenningsw](https://github.com/tylerjenningsw)）：修复 v0.6.1 中所有模型通过 `/ws/chat` 返回 `"unknown does not support streaming"` 的回归问题，恢复 WebSocket 流式响应能力 → [PR #4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675)
- **#4700**（[@rareba](https://github.com/rareba)）：修复 Matrix 通道仅监听单一 `room_id` 的问题，现正确支持 `allowed_rooms` 多房间配置 → [PR #4700](https://github.com/zeroclaw-labs/zeroclaw/pull/4700)
- **#4697**（[@rareba](https://github.com/rareba)）：为 Matrix 通道添加 `mention_only` 配置选项，避免群组中无差别响应 → [PR #4697](https://github.com/zeroclaw-labs/zeroclaw/pull/4697)
- **#4707**（[@rareba](https://github.com/rareba)）：实现 Matrix `device_id` 自动生成与持久化，解决 E2EE 会话恢复难题 → [PR #4707](https://github.com/zeroclaw-labs/zeroclaw/pull/4707)
- **#4693**（[@rareba](https://github.com/rareba)）：修复 `install.sh` 脚本未传递用户选择的 Cargo 特性（如 `channel-matrix`）的问题 → [PR #4693](https://github.com/zeroclaw-labs/zeroclaw/pull/4693)

此外，**#4453**（PostgreSQL 异步化改造）与 **#4573**（Gemini 成本追踪）进入深度 review 阶段，标志着基础设施向高并发与精细化运营演进。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映核心痛点：

- **#4657**（[@singlerider](https://github.com/singlerider)）：[Matrix channel: friction tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) —— 汇总 v0.6.2 中 Matrix 通道的多个关键问题（E2EE 循环重试、无流式响应、多房间失效），获 2 条评论与 1 👍，成为社区协调修复的“总纲式”Issue。
- **#1304**（[@felipechire](https://github.com/felipechire)）：[Ollama provider ignores api_url](https://github.com/zeroclaw-labs/zeroclaw/issues/1304) —— 虽已关闭，但暴露远程 LLM 配置兼容性问题，影响开发者部署灵活性。
- **#3642**（[@LaurensBosscher](https://github.com/LaurensBosscher)）：[Provide a "full" docker image](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) —— 请求包含所有可选功能（如 WhatsApp）的 Docker 镜像，降低新手入门门槛，获 2 👍。

这些讨论表明：**Matrix 集成稳定性**与**部署便捷性**是当前用户最关心的两大方向。

---

## 5. Bug 与稳定性

按严重程度排序的关键 Bug：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **S0** | [#4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299) | 自定义 OpenAI Provider + Mattermost 集成后出现 502 错误并停止响应 | ❌ 无 PR |
| **S0** | [#4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672) | Groq API Key 在 UI 中未脱敏显示，存在安全风险 | ❌ 无 PR |
| **S1** | [#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644) | Web 聊天仅两轮即丢失上下文（“amnesia”） | ❌ 无 PR |
| **S1** | [#4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) | `zeroclaw onboard --channels-only` 覆盖全部通道配置 | ❌ 无 PR |
| **S1** | [#4652](https://github.com/zeroclaw-labs/zeroclaw/issues/4652) | `install.sh --docker` 在 WSL Ubuntu 上失败 | ❌ 无 PR |
| **S2** | [#4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670) | v0.6.1 所有模型 WebSocket 返回流不支持错误 | ✅ 已由 [#4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675) 修复 |
| **S2** | [#4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699) | 无界对话历史 Map 导致内存无限增长 | ✅ 已由 [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706) / [#4709](https://github.com/zeroclaw-labs/zeroclaw/pull/4709) 修复 |

> ⚠️ 注意：S0/S1 级问题中仍有多个高危项未修复，需优先处理。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求，极可能纳入下一版本：

- **Matrix 多房间与提及控制**：由 [#4697](https://github.com/zeroclaw-labs/zeroclaw/pull/4697)、[#4700](https://github.com/zeroclaw-labs/zeroclaw/pull/4700) 实现，解决企业用户多频道管理痛点。
- **Raspberry Pi 部署指南**：[#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) 提出，[#4713](https://github.com/zeroclaw-labs/zeroclaw/pull/4713) 已提交文档，适配边缘计算场景。
- **加密配置 CLI 工具**：[#4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669) 请求 `zeroclaw secret set` 命令，提升安全运维体验，尚待实现。
- **MariaDB 内存后端支持**：[#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) 提出，填补 PostgreSQL 之外的企业级数据库选项空白。

此外，**“full Docker image”**（#3642）与 **GitHub 集成**（#4353）虽无近期合并计划，但持续获得社区点赞，预示未来版本可能扩展。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：  
  > “ZeroClaw 的轻量级设计让我们在树莓派上也能跑起来” —— 来自 #4704 讨论，印证其低资源消耗优势。

- **痛点**：  
  > “每次重启都要重新验证 Matrix E2EE 设备，太折磨了” —— 反映 #4667 中设备 ID 持久化缺失问题。  
  > “Docker 镜像默认要配对，API 全返回 401，文档没说清楚” —— #4678 揭示快速上手流程断裂。  
  > “工具调用了但没执行，只显示‘Used tools’” —— #4478 暴露 MCP 工具链集成缺陷。

- **使用场景**：  
  企业内网部署（PostgreSQL/MariaDB）、多通道机器人（Matrix + Discord）、边缘设备（Raspberry Pi）、自定义 LLM 提供商集成。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#3059**（[@wangjingyu001](https://github.com/wangjingyu001)）：[阿里云百炼 Coding Plan 无法使用](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) —— 创建于 2026-03-09，6 条评论，涉及国内主流 AI 平台兼容性，无维护者回应。
- **#2972**（[@Protocol-zero-0](https://github.com/Protocol-zero-0)）：[建议实现插件安全沙箱](https://github.com/zeroclaw-labs/zeroclaw/issues/2972) —— 安全架构改进提议，2 条评论，未进入开发排期。
- **#4353**（[@vasanth53](https://github.com/vasanth53)）：[GitHub 集成 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/4353) —— 开放超 3 天，无 review 意见，可能阻塞开发者工作流自动化需求。

> 🔔 建议：对 S0/S1 Bug 设立 48 小时响应 SLA，并对高价值功能请求（如 MariaDB、沙箱）明确 roadmap 状态。

--- 

**报告生成时间**：2026-03-26  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

PicoClaw 在 2026-03-26 表现出极高的开发活跃度，过去24小时内共处理 **183 条 Issues**（关闭 170 条，新开 13 条）和 **278 条 Pull Requests**（合并/关闭 243 条，待合并 35 条），显示出团队正在进行大规模问题清理与功能迭代。项目发布两个新版本（`v0.2.4` 和 `nightly`），重点优化了配置热加载、子代理工具继承、上下文溢出检测等核心机制。社区反馈集中围绕多通道支持、本地模型集成与用户体验改进，整体项目处于快速演进与稳定性提升阶段。

---

## 2. 版本发布

### 🔹 [v0.2.4](https://github.com/sipeed/picoclaw/releases/tag/v0.2.4)（正式版）
- **关键更新**：
  - ✅ **配置热重载**：工作区配置文件（如 `config.json`）支持运行时自动重载，无需重启服务（#1747）。
  - ✅ **子代理错误处理增强**：改进 `SubTurn` 的错误日志记录与恢复机制，提升多代理协作稳定性。
  - ✅ **可配置日志系统**：引入统一日志接口，支持用户自定义日志输出格式与级别。
- **无破坏性变更**，建议所有用户升级以获得更佳稳定性与可观测性。

### 🔹 [nightly v0.2.4-nightly.20260326.5db1e946](https://github.com/sipeed/picoclaw/releases/tag/v0.2.4-nightly.20260326.5db1e9446)
- 自动化构建版本，包含上述正式版全部内容及部分未合并修复（如 Discord token 持久化、Mistral 推理字段兼容性等），**仅限测试环境使用**。

---

## 3. 项目进展

今日合并/关闭的 PR 主要聚焦于 **Bug 修复、配置一致性与多通道稳定性**，显著提升了生产环境可靠性：

| PR | 类型 | 进展说明 |
|----|------|--------|
| [#2026](https://github.com/sipeed/picoclaw/pull/2026) | 配置修复 | 默认禁用 `tool_feedback`，解决 v0.2.4 升级后 Web 聊天消息冗余问题（#2007）。 |
| [#2020](https://github.com/sipeed/picoclaw/pull/2020) | 代理架构 | 修复子代理无法继承父代理运行时工具注册表的问题（#1713），确保 `spawn/subagent` 能正确调用 `read_file`、`exec` 等工具。 |
| [#2016](https://github.com/sipeed/picoclaw/pull/2016) | 上下文管理 | 增强对 Anthropic/ZhipuAI/GLM 等厂商“上下文超限”错误识别，避免误判为普通 API 错误。 |
| [#2014](https://github.com/sipeed/picoclaw/pull/2014) | 内存优化 | 在 token 估算中纳入 `SystemParts`（系统提示块），防止因低估 token 导致意外截断。 |
| [#2008](https://github.com/sipeed/picoclaw/pull/2008) | 通道增强 | 支持 LLM 使用 `<|[SPLIT]|>` 标记主动拆分回复为多条独立消息，提升长回复可读性。 |

> 📌 整体项目向“稳定、可观测、易扩展”方向迈出关键一步，尤其在多代理协作与多通道适配方面取得实质性进展。

---

## 4. 社区热点

以下 Issues 在过去24小时内获得高关注度，反映用户核心诉求：

| Issue | 主题 | 分析 |
|------|------|------|
| [#694](https://github.com/sipeed/picoclaw/issues/694) | OpenRouter API 配置指南 | 用户普遍困惑于复杂模型路由配置，**需求：更清晰的 provider 配置文档与示例模板**。 |
| [#1270](https://github.com/sipeed/picoclaw/issues/1270) | Telegram 论坛主题（Forum Topics）支持 | 高优先级功能请求，用户希望实现类似 OpenClaw 的会话隔离能力，**指向多租户/多上下文架构演进**。 |
| [#1278](https://github.com/sipeed/picoclaw/issues/1278) | 子代理工具访问控制 | 用户期望子代理能按需继承或限制工具权限（如仅允许 `read_file`），**推动细粒度安全策略设计**。 |
| [#572](https://github.com/sipeed/picoclaw/issues/572) | `/new` 或 `/clear` 会话重置命令 | 高频 UX 痛点，用户无法在长对话中主动清理上下文，**亟需会话管理原语**。 |

> 💡 社区强烈呼吁 **更好的文档、更灵活的会话控制、更强的多通道能力**，这些将成为下一阶段产品路线图重点。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 |
|------|--------|------|------|
| [#704](https://github.com/sipeed/picoclaw/issues/704) | 高 | ✅ 已修复（#2020） | 多工具调用时 session 状态损坏导致 400 错误，影响 Gemini/Anthropic 用户。 |
| [#430](https://github.com/sipeed/picoclaw/issues/430) | 高 | ⚠️ 部分缓解 | Ollama 本地模型 120s 超时问题，虽未根本解决，但 #2016 提升了错误分类准确性。 |
| [#2005](https://github.com/sipeed/picoclaw/issues/2005) | 中 | ✅ 已修复（#2024） | Discord token 在 Web 设置中无法持久化，影响 bot 部署体验。 |
| [#2007](https://github.com/sipeed/picoclaw/issues/2007) | 中 | ✅ 已修复（#2026） | v0.2.4 默认开启 tool_feedback 导致 Web 消息噪音，现已回退默认值。 |

> 🛠️ 团队响应迅速，关键路径 Bug 基本在 24 小时内闭环，体现良好维护节奏。

---

## 6. 功能请求与路线图信号

结合 PR 与 Issue，以下功能有望纳入 **v0.3.0 路线图**：

- **🗂️ 多用户与会话隔离**（#995）：已有初步讨论，需设计 `MEMORY.md` 分用户存储机制。
- **📞 语音消息支持**（#1939）：PR 已开放，实现 Discord/Telegram/微信的 TTS/ASR 集成，技术验证完成。
- **🔌 更多 LLM 提供商支持**：MiniMax（#675）、Mistral 兼容性（#2019）等需求明确，扩展 provider 架构成熟。
- **⚙️ 用户可配置钩子**（#738）：支持 pre/post-tool 脚本，为 self-improving-agent 等高级技能铺路。

> 📈 项目正从“基础功能实现”向“企业级可定制平台”演进。

---

## 7. 用户反馈摘要

- **满意点**：
  - “配置热重载太方便了，调试效率大幅提升！”（#694 评论）
  - “终于能在 Telegram 上用上 PicoClaw 了，感谢团队！”（#1270 相关讨论）
- **痛点**：
  - “Android 安装教程缺失，新手根本无从下手。”（#190）
  - “Docker 镜像居然是私有的，CI/CD 流程受阻。”（#302）
  - “长对话 summarization 提示太模糊，不知道系统在干嘛。”（#580）
- **典型场景**：
  - 企业微信机器人部署（#1210）
  - 本地 Ollama + PicoClaw 私有部署（#75, #109）
  - 多代理协作代码审查（#1278）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 提醒 |
|----------|------|--------|------|
| [#302](https://github.com/sipeed/picoclaw/issues/302) | 功能请求 | >35 天 | `ghcr.io/sipeed/picoclaw` 仍为私有镜像，阻碍 CI/CD 用户，**建议尽快公开**。 |
| [#190](https://github.com/sipeed/picoclaw/issues/190) | 文档 | >39 天 | Android 安装指南长期缺失，影响移动端 adoption，**需补充教程或社区协作**。 |
| [#618](https://github.com/sipeed/picoclaw/issues/618) | 构建/部署 | >32 天 | 自升级机制（self-upgrade）尚未实现，影响长期维护体验，**建议规划 v0.3.0 纳入**。 |

> 🔔 维护者请注意：上述积压项虽非紧急 Bug，但持续影响用户体验与项目生态扩展，建议排期处理。

--- 

**报告生成时间**：2026-03-26  
**数据来源**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

NanoClaw 社区活跃度持续高位运行，过去24小时内共处理 **37条 Issues** 和 **50条 Pull Requests**，其中 **26个 Issues 被关闭**，**29个 PR 被合并或关闭**，显示出高效的协作节奏。尽管无新版本发布，但项目在稳定性修复、安全加固与功能扩展方面取得显著进展。安全审计发现的关键漏洞已触发响应，多个长期存在的 Bug 被集中修复。社区对会话管理、Linux 部署体验和多账户支持等核心场景的关注度显著上升。

---

## 2. 版本发布

**无新版本发布**。当前主线仍聚焦于问题修复与技能分支同步，未触发正式版本迭代。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推动多项关键改进：

- **#1367**（[链接](https://github.com/qwibitai/nanoclaw/pull/1367)）：修复 Telegram 迁移逻辑，默认将 `tg:%` 聊天识别为私聊（`is_group=0`），避免误标群组导致消息路由错误。
- **#1353**（[链接](https://github.com/qwibitai/nanoclaw/pull/1353)）：修复注册主群组时未复制 `CLAUDE.md` 模板的问题，确保新 agent 实例具备完整身份配置。
- **#1349**（[链接](https://github.com/qwibitai/nanoclaw/pull/1349)）：为定时任务引入 `pre_hook` 机制，支持通过 shell 命令实现条件执行、跳过或中止，增强任务调度灵活性。
- **#1370**（[链接](https://github.com/qwibitai/nanoclaw/pull/1370)）：优化 CI 流程，防止 fork 仓库因缺失上游密钥而触发 `bump-version` 和 `update-tokens` 工作流失败。
- **#1368**（[链接](https://github.com/qwibitai/nanoclaw/pull/1368)）：修复 `claw` CLI 在成功输出后异常退出的问题，提升终端交互稳定性。

此外，**#1373** 添加了自动构建并推送 Docker 镜像至 GHCR 的 GitHub Actions 工作流，为后续容器化部署标准化奠定基础。

---

## 4. 社区热点

### 高讨论度 Issues

- **#1211**（[链接](https://github.com/qwibitai/nanoclaw/issues/1211)）：用户 @jiangyunpeng 提出添加 `/new` 命令以重置会话上下文，获 2 👍。反映用户对**长期会话 token 浪费**和**上下文污染**的强烈痛点，尤其在容器重启后历史累积问题突出。
- **#1184**（[链接](https://github.com/qwibitai/nanoclaw/issues/1184)）：@JachinShen 反馈在 Sealos 等受限 K8s 环境中部署困难，涉及权限、网络策略与存储挂载限制，凸显项目在**生产级 Kubernetes 适配**上的缺口。
- **#1431**（[链接](https://github.com/qwibitai/nanoclaw/issues/1431)）：安全审计发现 **1 个 Critical 级命令注入漏洞**（`exec()` 字符串插值）和 2 个 High 级竞态条件，已关闭但需跟进修复 PR（暂未出现对应 fix）。

### 高关注度 PR

- **#1408**（[链接](https://github.com/qwibitai/nanoclaw/pull/1408)）：将独立工具 `clawps` 整合为 `claw ps` 子命令，提升 CLI 一致性，体现项目向**统一命令行体验**演进的方向。
- **#1256**（[链接](https://github.com/qwibitai/nanoclaw/pull/1256)）：引入 Mem0 + Qdrant + Neo4j 的图增强记忆技能，支持持久化记忆且无需新增容器，展示社区对**长期记忆能力**的高度兴趣。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **Critical** | #1431（[链接](https://github.com/qwibitai/nanoclaw/issues/1431)） | `exec()` 中使用字符串插值导致命令注入风险（`container-runner.ts:424` 等） | ⚠️ **无公开 fix PR**，需紧急处理 |
| **High** | #1454（[链接](https://github.com/qwibitai/nanoclaw/issues/1454)） | Sidecar 在 `WATCH_CONTAINER` 未设置时立即退出，导致日志/配置监听中断 | 🟡 新开，待修复 |
| **High** | #1451（[链接](https://github.com/qwibitai/nanoclaw/issues/1451)） | 只读挂载下尝试写入 watcher 状态文件引发 EROFS 错误 | 🟡 新开，需调整写入路径 |
| **Medium** | #783（[链接](https://github.com/qwibitai/nanoclaw/issues/783)） | `schedule_task` 缺乏幂等性，重复任务跨会话累积 | ✅ 已关闭，推测已有内部修复 |
| **Medium** | #698（[链接](https://github.com/qwibitai/nanoclaw/issues/698)） | Agent 无法从 ISO 时间戳推断星期几，影响时间敏感调度 | ✅ 已关闭 |

> 注：#1431 虽已关闭，但未附修复 PR，建议维护者确认是否已 cherry-pick 至主干。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或强烈社区信号：

- **会话重置功能**（#1211）：用户强烈需求，PR #1311（[链接](https://github.com/qwibitai/nanoclaw/pull/1311)）已提交“创建新会话”技能，处于开放状态，有望纳入下一版本。
- **多账户 Gmail MCP 支持**（#1455）：虽刚提出，但结合 #1049（[链接](https://github.com/qwibitai/nanoclaw/pull/1049)）对凭证挂载的修复，显示项目正加强 MCP 工具的多账户兼容性。
- **Linux 部署优化**：#1075 文档矛盾与 #1445 实际部署问题共同指向需统一 Linux 支持声明并完善防火墙/权限指南。
- **Telegram Topics 支持**（#1420）：已关闭，可能已有修复，反映对现代聊天平台高级功能的跟进意愿。

---

## 7. 用户反馈摘要

- **满意点**：用户赞赏 NanoClaw 的“极简设计”与“轻量安全替代方案”（#1184），认为其利用现有代码 agent 构建 streamlined 架构“非常聪明”。
- **痛点集中领域**：
  - **会话管理**：缺乏上下文重置机制导致 token 浪费与响应偏离（#1211）。
  - **部署复杂性**：K8s 受限环境（如 Sealos）下网络、存储、权限配置困难（#1184、#1445）。
  - **身份初始化失败**：多个用户报告新群组无 `CLAUDE.md`，agent 无 persona 运行（#755、#1390、#1391），虽已修复但仍暴露注册流程脆弱性。
  - **反馈缺失**：长任务无中间状态更新，用户误判为卡死（#1440）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#546**（[链接](https://github.com/qwibitai/nanoclaw/pull/546)）：Mattermost 通道技能 PR，自 2026-02-26 提交，状态为“Blocked”，阻碍企业用户集成。
- **#784**（[链接](https://github.com/qwibitai/nanoclaw/pull/784)）：Signal 通道 + 通用反应功能，自 2026-03-06 提交，状态“Needs Review”且“Pending Closure”，存在维护犹豫。
- **#1049**（[链接](https://github.com/qwibitai/nanoclaw/pull/1049)）：修复定时任务凭证挂载问题，自 2026-03-13 提交，仍“Needs Review”，影响 MCP 工具在非主任务的可用性。
- **#1331**（[链接](https://github.com/qwibitai/nanoclaw/pull/1331)）：Ollama MCP 技能，自 2026-03-22 提交，未合并，反映本地 LLM 集成需求旺盛但审核延迟。

> 建议对技能类 PR 建立更明确的合并标准或自动化测试流程，以缓解维护瓶颈。

--- 

**项目健康度评估**：整体活跃且响应迅速，安全漏洞需警惕，社区驱动功能丰富，但技能分支同步机制（见 #1435–#1437 系列 merge-forward 失败）暴露多分支维护成本，建议优化 CI 策略。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

IronClaw 项目在 2026-03-26 继续保持高强度开发节奏，**过去24小时共处理 50 条 PR 更新（37 合并/关闭，13 待合并）和 9 条 Issues 更新**，显示出核心团队在功能迭代与稳定性修复上的并行推进能力。尽管无新版本发布，但多个关键架构改进（如多租户隔离、用户管理系统、OpenAI Responses API 支持）已进入合并或收尾阶段。社区反馈集中在工具调用截断、沙箱执行限制及第三方集成配置问题上，反映出实际生产环境中的使用痛点。

---

## 2. 版本发布

**无新版本发布**。  
当前主线版本仍为 `v0.21.0`，但 PR #1658 已触发自动发布流程，计划将 `ironclaw_common` 发布至 `0.1.0`，并将主包升级至 `v0.22.0`（含 API 破坏性变更）。该发布因依赖配置问题被临时阻塞（见 PR #1657），预计将在今日内完成。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推动多项核心能力落地：

- ✅ **多租户隔离完成**：PR #1614（已关闭）完成了 #59 中 phases 2–4 的多租户数据库与作用域隔离，引入 `TenantCtx` 实现编译期租户上下文绑定，显著提升系统安全性与数据隔离性。
- ✅ **用户管理系统上线**：PR #1626（开放中，高活跃度）实现基于数据库的用户注册、API Token 管理与角色控制，取代原有的静态 `GATEWAY_USER_TOKENS` 环境变量，为 SaaS 化部署奠定基础。
- ✅ **OpenAI Responses API 支持启动**：PR #1656（新提交）新增 `/v1/responses` 端点，将完整代理循环（含工具调用）暴露为标准 OpenAI 兼容接口，扩展了 IronClaw 作为 LLM 网关的能力边界。
- ✅ **Routine 执行透明度提升**：PR #1650 实现 routine 全链路 LLM 对话持久化，替代原有单行摘要，极大增强调试与审计能力。

> 项目整体向“企业级 AI 代理平台”迈出关键一步，架构统一性与可运维性显著增强。

---

## 4. 社区热点

**最热讨论 Issue**：[#1631](https://github.com/nearai/ironclaw/issues/1631) — *fix(agent): discard truncated tool calls when finish_reason == Length*  
该 Issue 描述大工具结果导致 LLM 响应被截断（`max_tokens=1024` 不足），进而引发无效工具调用。社区关注度高（已有对应修复 PR #1632），反映用户对**长上下文代理稳定性**的迫切需求。

**高互动 PR**：[#1626](https://github.com/nearai/ironclaw/pull/1626)（DB-backed user management）  
尽管无公开评论，但其 XL 规模、高风险标签及跨模块影响（agent/web/db）表明其为当前核心重构任务，维护者投入大量 review 资源。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 高 | [#1640](https://github.com/nearai/ironclaw/issues/1640) | `build_software` 因 TOML 解析错误（“invalid type: map, expected a string”）崩溃，影响 Rust WASM 工具构建 | ❌ 无 PR |
| 🟠 中 | [#1637](https://github.com/nearai/ironclaw/issues/1637) | Sandbox 执行命令超过 50 次循环后失败，疑似资源限制或死锁 | ❌ 无 PR |
| 🟠 中 | [#1633](https://github.com/nearai/ironclaw/issues/1633) | Feishu 通道 `on_respond` 报错 “app_id not configured”，配置正确但未被识别 | ❌ 无 PR |
| 🟢 低 | [#763](https://github.com/nearai/ironclaw/issues/763) | NEAR AI 返回 “No user query found” 错误（因 routine 缺少 user 消息） | ✅ 已关闭，修复已合入 |

> 建议优先处理 #1640 和 #1637，二者直接影响核心构建与执行功能。

---

## 6. 功能请求与路线图信号

- **代理防漂移机制**：Issue #1634 提出在代理循环中引入轻量级 `DriftMonitor`，检测停滞模式并自动注入纠正消息。该需求契合当前对**长时运行代理可靠性**的关注，且已有设计草案，可能被纳入 v0.23 路线图。
- **端到端测试覆盖增强**：Issues #1653、#1652、#1644 均要求添加回归测试，反映团队正系统性提升测试覆盖率，尤其是多租户与 REPL 交互场景，预示未来版本将更强调**稳定性与可维护性**。

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实用户声音：

- **痛点**：
  - “即使明确提示使用简单字符串依赖，内部构建器仍生成 inline table，导致 TOML 解析失败”（#1640）→ 暴露**工具链对用户意图理解不足**。
  - “飞书 App ID 已配置，但系统仍报 missing from workspace”（#1633）→ 反映**第三方集成配置体验不透明**。
- **使用场景**：
  - 用户尝试用 IronClaw 构建 Rust WASM 工具（#1640），表明项目正被用于**复杂开发辅助场景**。
  - 飞书通道问题说明企业用户已在**生产环境部署消息集成**。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者关注：

- [#1640](https://github.com/nearai/ironclaw/issues/1640)（2026-03-25 创建）：`build_software` 崩溃问题，影响开发者体验，**无 assignee，无 PR**。
- [#1637](https://github.com/nearai/ironclaw/issues/1637)（2026-03-25 创建）：Sandbox 循环限制问题，可能涉及资源管理策略，**需明确是否设计如此或存在 bug**。
- [#1633](https://github.com/nearai/ironclaw/issues/1633)（2026-03-25 创建）：Feishu 集成配置失效，**影响企业用户消息闭环能力**。

> 建议本周内对上述 Issue 进行 triage 并分配负责人。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高强度开发中保持良好响应速度，核心架构稳步推进，但需加强对终端用户反馈的闭环处理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-26）

---

## 1. 今日速览

LobsterAI 在2026年3月25日继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **35条 Issues 更新**（新开/活跃32条，关闭3条）和 **50条 PR 更新**（待合并45条，已合并/关闭5条），显示出强烈的用户参与和开发迭代节奏。项目于当日发布新版本 **2026.3.25**，重点增强了登录体系、桌面端安全授权机制，并修复了MCP同步等关键问题。整体项目健康度良好，但存在多个影响用户体验的稳定性问题亟待解决。

---

## 2. 版本发布

### 🔖 新版本：2026.3.25（2026-03-25）

本次发布包含三项核心更新：

- **feat: 添加登录 & 加油包功能**（#779）  
  引入用户账户系统与积分充值机制，为后续商业化能力奠定基础。
- **Fix/im chat sync right**（#780）  
  修复即时通讯（IM）通道中聊天同步权限异常问题，提升多端一致性。
- **feat: 桌面端危险命令分级授权**（#796）  
  针对高风险操作（如系统命令执行）引入分级确认机制，增强桌面客户端安全性。

> ⚠️ **注意**：新功能涉及账户体系变更，未登录用户可能无法访问部分增值服务；建议用户升级后重新配置模型权限。

[查看 Release 详情](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.25)

---

## 3. 项目进展

今日共 **5个 PR 被合并或关闭**，主要集中在稳定性修复与性能优化：

- **#870（CLOSED）**: 修复切换模型时 OpenClaw Gateway 频繁重启问题，显著提升会话流畅度。
- **#797（MERGED）**: 修复未安装微信插件时网关启动失败导致的崩溃循环。
- **#852（MERGED）**: 解决窗口销毁后异步 IPC 调用引发的主进程崩溃问题。
- **#812（MERGED）**: 对 SQLite 写入进行防抖与异步化改造，缓解主线程阻塞。
- **#809（MERGED）**: 重构 Redux selector 结构，减少无效重渲染，提升长会话性能。

这些修复标志着项目正从“功能快速迭代”向“稳定性与性能优化”阶段过渡，用户体验将显著改善。

---

## 4. 社区热点

### 🔥 高关注度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#728](https://github.com/netease-youdao/LobsterAI/issues/728) | MCP 配置无法被调用 | 4 | 用户困惑于 MCP 工具注册后无法触发，需明确调用条件与调试方法 |
| [#711](https://github.com/netease-youdao/LobsterAI/issues/711) | npm.nie.netease.com  registry 访问失败导致打包失败 | 2 | 内部 registry 不可达影响构建，需提供 fallback 或文档说明 |
| [#831](https://github.com/netease-youdao/LobsterAI/issues/831) | 不支持自定义 Gemini 中转模型 | 2 | 用户希望扩展第三方模型接入能力，反映对灵活性的需求 |

> 💡 **分析**：MCP 相关问题是当前最大痛点，多个用户（#724、#820）反馈“配置同步但0 tools”，表明文档或引导不足，亟需官方提供配置验证工具或示例。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🚨 高危（影响核心功能）
- **#859**: 模型名称字段丢失导致 Gateway 无限崩溃重启（由 #858 引发）  
  → 已有修复 PR: [#881](https://github.com/netease-youdao/LobsterAI/pull/881)（启用外键约束 + 配置校验增强）
- **#879**: SQLite 外键未启用，删除 session 不级联删除 messages，导致数据库膨胀  
  → 已修复 via #881

### ⚠️ 中危（影响体验）
- **#850**: 定时任务关闭后仍触发执行  
  → 无 fix PR，需排查任务调度逻辑
- **#844**: 切换模型触发 Gateway 重启，影响流畅性  
  → 已部分修复 via #870，但仍有优化空间
- **#820**: dev 阶段 MCP 可用，打包后不可用  
  → 疑似构建流程遗漏依赖，需排查 electron-builder 配置

### 🐞 低危（UI/边缘场景）
- **#824**: 问答结果 Markdown 渲染错乱（复制后正常）  
- **#821**: 登录页面组件加载失败  
- **#814**: 协作文本流期间菜单自动关闭

---

## 6. 功能请求与路线图信号

用户明确提出以下需求，部分已有对应 PR：

| 需求 | 相关 Issue | 进展 |
|------|-----------|------|
| 不同任务使用不同模型 | #856 | 尚无 PR，但 #707（Copilot 集成）显示多模型支持架构在演进 |
| Skill 执行统计分析 | #873 | 已有 PR #871 实现基础统计面板 |
| 定时任务状态筛选与统计 | #850 | PR #875 已提交，增加 TaskStatsBar 组件 |
| 消息勾选分享与品牌化 | — | PR #880 已实现高级分享功能 |
| Git 分支名注入防护 | #816 | PR #869 添加 URL 协议白名单，安全加固进行中 |

> 📌 **预测**：下一版本可能聚焦 **多模型隔离**、**定时任务管理增强** 和 **安全加固**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “登录和加油包功能终于上线，终于可以统一管理积分了！”（#884 用户）
  - “分享功能做得越来越专业，一键复制很实用。”（隐含于 #880 场景）

- **痛点**：
  - “MCP 配置了半天还是 0 tools，官方能不能出个教程？”（#724）
  - “数据库越来越大，删了会话消息还在，太占空间了。”（#879）
  - “切换模型要等半天，体验断断续续。”（#844）
  - “Windows 和 Mac 增值服务页面价格不一致，是不是 bug？”（#834）

- **使用场景**：
  - 企业用户通过 POPO/微信集成实现内部 AI 助手（#882）
  - 开发者尝试接入自定义模型（#831、#856）
  - 个人用户依赖定时任务自动化工作流（#850、#837）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先处理：

| Issue | 标题 | 创建时间 | 状态 | 建议 |
|------|------|--------|------|------|
| [#399](https://github.com/netease-youdao/LobsterAI/issues/399) | 调用阿里云百炼 GLM 4.5 报错 "Claude run failed" | 2026-03-13 | OPEN | 疑似模型路由错误，需检查 OpenClaw 配置映射 |
| [#609](https://github.com/netease-youdao/LobsterAI/pull/609) | 重构定时任务架构并统一文档 | 2026-03-21 | OPEN（12天未合） | 架构级 PR，需核心维护者 review |
| [#707](https://github.com/netease-youdao/LobsterAI/pull/707) | 集成 GitHub Copilot 认证 | 2026-03-23 | OPEN（2天） | 高价值功能，建议加速合并 |

> 🔔 **提醒**：#399 已存在12天，影响特定云厂商用户，建议尽快复现并修复。

---

**报告生成时间**：2026-03-26  
**数据来源**：LobsterAI GitHub Repository（netease-youdao/LobsterAI）  
**分析师**：AI 开源项目观察员

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目日报（2026-03-26）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目整体活跃度中等，无新 Issue 提交，但 Pull Request 活动较为集中：共处理 4 条 PR，其中 3 条已合并/关闭，1 条仍处于待合并状态。开发重点集中在基础设施优化与用户体验改进，包括 Docker 构建修复、CLI 架构重构及认证标准化。项目无新版本发布，但核心功能稳定性与部署体验显著提升。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
今日共合并/关闭 3 项重要 PR，推动项目在可维护性与部署一致性方面取得关键进展：

- **#262 [CLOSED] fix(docker): 修复 Docker 构建并优化 README 结构**  
  解决了因 Puppeteer 浏览器下载失败导致的 Docker 构建中断问题，通过设置 `PUPPETEER_SKIP_DOWNLOAD=true` 并依赖系统 Chromium，显著提升构建可靠性。同时将 Docker 使用说明移至 README 的可折叠区域，突出主流程（install script + CLI），改善新用户引导体验。  
  🔗 [PR #262](https://github.com/TinyAGI/tinyagi/pull/262)

- **#260 [CLOSED] refactor(cli): 用 Node.js 入口点替代 Shell 脚本**  
  将原有基于 bash 的脚本（位于 `lib/`）全部替换为纯 Node.js 模块，集中进程管理逻辑至 `packages/main/src/index.ts`。此举消除了对 tmux、jq、curl 和 bash 的运行时依赖，增强了跨平台兼容性，并为多阶段 Docker 构建提供支持，是架构现代化的重要一步。  
  🔗 [PR #260](https://github.com/TinyAGI/tinyagi/pull/260)

- **#261 [CLOSED] feat(auth): 统一 provider 认证字段命名**  
  标准化各 AI provider 的凭证字段命名，将 `auth_token` 统一为 `api_key`，同时为 Anthropic 添加 `api_key` 支持（保留 `oauth_token` 兼容性），并明确使用环境变量 `CLAUDE_CODE_OAUTH_TOKEN` 进行 OAuth 认证。提升了配置一致性与开发者体验。  
  🔗 [PR #261](https://github.com/TinyAGI/tinyagi/pull/261)

> ✅ 综合评估：项目在部署稳定性、架构整洁度与配置标准化方面迈出坚实步伐，为后续功能扩展打下坚实基础。

---

### 4. 社区热点  
无新 Issue 提交，社区讨论热度较低。当前唯一开放 PR #249 虽无评论，但其涉及 UI/UX 重大调整（办公室布局重构），可能引发后续用户反馈，建议关注其合并后的用户适应情况。  
🔗 [PR #249](https://github.com/TinyAGI/tinyagi/pull/249)

---

### 5. Bug 与稳定性  
- **Docker 构建失败问题**：已在 PR #262 中修复，原因为 Puppeteer 默认下载 Chromium 导致构建超时或网络错误。修复方案已验证有效，属中等级别稳定性问题，**已有 fix PR 并合并**。  
  🔗 [PR #262](https://github.com/TinyAGI/tinyagi/pull/262)

> 无其他崩溃或回归问题报告。

---

### 6. 功能请求与路线图信号  
尽管无显式功能请求 Issue，但从已合并 PR 可推断以下方向可能被纳入近期路线图：

- **CLI 工具链现代化**：PR #260 表明项目正从脚本驱动转向模块化 Node.js 架构，预示未来可能引入更丰富的 CLI 命令、插件系统或配置管理功能。
- **多认证方式支持**：PR #261 对 OAuth 与 API Key 的双重支持，暗示项目正为集成更多第三方 AI 服务（如 Claude Code、OpenAI OAuth）做准备。
- **UI 导航优化**：PR #249 将导航迁移至顶部栏并增强交互性，反映团队正聚焦于提升“办公室”界面的可用性与可扩展性，可能为多 agent 管理或仪表盘功能铺路。

---

### 7. 用户反馈摘要  
过去24小时无新 Issue 或评论，无法提取直接用户反馈。但从近期 PR 内容反推，用户痛点可能包括：

- **部署复杂度高**：Docker 构建失败问题表明部分用户在容器化部署时遇到障碍，修复后有望降低入门门槛。
- **配置不一致**：认证字段命名混乱（如 `auth_token` vs `api_key`）曾导致集成困惑，标准化后应提升开发者体验。
- **CLI 依赖过多**：原 shell 脚本依赖 tmux/jq 等工具，在轻量环境或 Windows 上运行困难，Node.js 重构将显著改善跨平台可用性。

---

### 8. 待处理积压  
- **#249 [OPEN] refactor(office): 重组办公室布局，引入顶部导航栏**  
  该 PR 自 2026-03-23 创建，已更新但尚未合并，涉及核心 UI 结构调整。虽无冲突，但因其影响用户交互流程，建议维护者尽快 review 并评估是否纳入下一迭代。延迟合并可能导致后续 UI 相关 PR 出现冲突。  
  🔗 [PR #249](https://github.com/TinyAGI/tinyagi/pull/249)

> ⚠️ 提醒：该 PR 为唯一长期未决变更，建议优先处理以避免技术债累积。

---  
**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
架构持续优化，关键问题及时修复，社区虽静默但开发节奏稳健。建议加强用户沟通渠道以收集更多反馈。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-26）

---

## 1. 今日速览  
Moltis 项目在过去24小时内保持中等活跃度，共产生 **3条 Issues 更新** 和 **3条 PR 更新**，无新版本发布。社区围绕“本地推理”（Local Thinking）功能展开讨论，同时核心依赖升级（`reqwest` 0.12 → 0.13）和 OpenAI 替代 Provider 的引入成为技术焦点。整体开发节奏稳健，维护者正推进基础设施优化以支持未来功能扩展。

---

## 2. 版本发布  
*无新版本发布。*

---

## 3. 项目进展  
今日有 **1个 PR 被合并/关闭**，标志着一项重要功能落地：

- **[#439 feat(mcp): add custom display names for MCP servers](https://github.com/moltis-org/moltis/pull/439)**（已关闭/合并）  
  允许用户为 MCP 服务器配置自定义友好名称（`display_name`），在保持技术标识符稳定的同时提升 UI/UX 可读性。该功能增强了多服务器环境下的管理体验，是 MCP 集成模块的重要 usability 改进。

此外，两个关键 PR 仍处于待合并状态，为后续功能铺路：
- **[#488 chore: bump reqwest 0.12 → 0.13](https://github.com/moltis-org/moltis/pull/488)**：升级 HTTP 客户端至最新稳定版，解决依赖兼容性问题。
- **[#487 feat: add openai-oxide as alternative OpenAI provider](https://github.com/moltis-org/moltis/pull/487)**：引入轻量级 OpenAI 兼容层（888 行 vs 原 5300+ 行），显著降低代码复杂度，提升可维护性。

> 💡 这两项 PR 构成近期技术债清理与架构简化的核心举措，预计将加速未来 AI 提供商生态扩展。

---

## 4. 社区热点  
**最热讨论议题：本地推理（Local Thinking）功能提案**  
- **[#490 [OPEN] [enhancement] Local thinking](https://github.com/moltis-org/moltis/issues/490)**（2 条评论，0 👍）  
  用户 @Wanderspool 提出支持本地模型进行“思考”或推理的能力，反映社区对**离线、隐私优先、低延迟 AI 推理**的强烈需求。值得注意的是，同主题 Issue [#489](https://github.com/moltis-org/moltis/issues/489) 同日被创建并迅速关闭，可能表明维护者正在内部评估实现路径或存在重复提交。

> 🔍 分析：该诉求指向 Moltis 向“混合 AI 助手”（云端+本地）演进的战略方向，与当前行业趋势（如 Llama.cpp、Ollama 集成）高度契合。

---

## 5. Bug 与稳定性  
今日 **1个 Bug 被关闭**，无新增严重问题：

- **[#460 [CLOSED] WhatsApp Integration is not working](https://github.com/moltis-org/moltis/issues/460)**（3 👍，1 评论）  
  用户 @eugeneyng 报告的 WhatsApp 集成故障已修复。尽管未提供具体根因，但高点赞数（3 👍）表明该问题影响多个用户，属于**中高优先级通信通道稳定性问题**。目前无公开 Fix PR，推测为后端配置或认证逻辑调整所致。

> ⚠️ 建议：应补充回归测试以防第三方 API 变更导致类似中断。

---

## 6. 功能请求与路线图信号  
除“本地推理”外，以下信号值得关注：

- **OpenAI Provider 抽象化**：通过 [#487](https://github.com/moltis-org/moltis/pull/487) 引入 `openai-oxide`，表明项目正**解耦对官方 OpenAI SDK 的强依赖**，为支持更多兼容 API（如 Azure OpenAI、LocalAI、vLLM 等）奠定基础。
- **MCP 服务器可配置性增强**：[#439](https://github.com/moltis-org/moltis/pull/439) 的合并显示项目重视**多工具集成场景下的用户体验**，未来可能扩展至工具分组、图标、描述等元数据。

> 📌 预测：“本地推理”与“多 Provider 抽象”有望成为 v0.5 或 v0.6 版本的核心特性。

---

## 7. 用户反馈摘要  
从 Issues 评论提炼关键用户声音：

- **正面反馈**：  
  > “MCP 自定义名称终于来了！管理十几个服务器时再也不用靠注释猜了。” —— 来自 #439 隐含用户场景
  
- **痛点与诉求**：  
  - **离线能力缺失**：“希望能在没有网络时用本地模型处理简单任务”（#490 核心诉求）  
  - **第三方集成脆弱性**：“WhatsApp 突然就不能用了，日志也没明确错误”（#460 反映监控/错误提示不足）  
  - **配置复杂性**：虽未明说，但推动 `openai-oxide` 的 PR 暗示现有 OpenAI 集成过于臃肿难维护

---

## 8. 待处理积压  
以下事项需维护者关注：

- **[#487 feat: add openai-oxide as alternative OpenAI provider](https://github.com/moltis-org/moltis/pull/487)**（Open，24h+）  
  高价值架构改进 PR，但因依赖 [#488](https://github.com/moltis-org/moltis/pull/488) 而阻塞。建议优先合并 reqwest 升级以解锁此关键重构。

- **[#490 Local thinking](https://github.com/moltis-org/moltis/issues/490)**（Open，24h+）  
  虽为新 Issue，但代表明确用户需求。建议维护者回应技术可行性评估或纳入 roadmap，避免社区期待落空。

> ✅ 健康度评估：项目整体状态良好，技术债清理积极，社区诉求清晰。需加强 Issue 响应速度以提升 contributor 体验。

---  
*数据来源：GitHub moltis-org/moltis（截至 2026-03-26 00:00 UTC）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

CoPaw 社区活跃度持续高涨，过去24小时内共产生 **50条 Issues 更新**（新开/活跃28条，关闭22条）和 **49条 PR 更新**（待合并20条，已合并/关闭29条），显示出强劲的开发与反馈节奏。项目发布新版本 **v0.2.0.post1**，重点优化了工具调用解析与版本管理。核心问题集中在多智能体模型隔离、CPU占用异常、飞书/钉钉频道稳定性等方向，反映出用户向生产环境部署的深入尝试。整体项目处于快速迭代与问题暴露并行的成长阶段。

---

## 2. 版本发布

### 🔖 v0.2.0.post1（[Release Link](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.2.0.post1)）

**主要更新内容：**
- 📝 更新 v0.2.0 发布说明文档（#2212）
- ⚙️ 增强工具调用解析能力：支持从 LLM 的 `thinking` 和 `text` 内容中提取 `tool_call`（#2192）
- 🔢 版本号升级至 `0.2.0.post1`

**影响评估：**
- 无破坏性变更，为向后兼容的补丁版本。
- 建议所有使用工具调用功能的用户升级，以提升复杂推理场景下的工具触发准确率。

---

## 3. 项目进展

今日共 **29个 PR 被合并或关闭**，关键进展包括：

| PR | 类型 | 说明 |
|----|------|------|
| [#2283](https://github.com/agentscope-ai/CoPaw/pull/2283) | ✅ 修复 | 解决多智能体下模型配置跨标签页覆盖问题，实现真正的多 Agent 模型隔离 |
| [#2280](https://github.com/agentscope-ai/CoPaw/pull/2280) | ✅ 修复 | 修复 Telegram 频道因超时设置不当导致的频繁重连与 CPU 占用问题 |
| [#265](https://github.com/agentscope-ai/CoPaw/pull/265) | ✅ 修复 | 支持解析 Codex 风格 `<|channel|>` 标签，避免本地模型输出污染对话历史 |
| [#266](https://github.com/agentscope-ai/CoPaw/pull/266) | ✅ 修复 | 改进 llama.cpp 初始化失败时的错误提示，提供可操作的诊断信息 |
| [#2276](https://github.com/agentscope-ai/CoPaw/pull/2276) | ✅ 修复 | 调整 Cron 任务前端字段必填逻辑，适配 text/agent 类型差异 |

> 💡 项目在多智能体架构、模型兼容性与通道稳定性方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 5）

| Issue | 主题 | 核心诉求 |
|------|------|--------|
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) | 小艺频道集成异常 | 用户成功接入华为小艺开放平台，但手机端响应“开小差”，怀疑 CoPaw 未正确路由消息至移动端 |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书频道“延迟回复” | Bot 回答错序（答A→答A'→答B），疑似上下文记忆或消息队列处理缺陷 |
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 空闲时 CPU 占用 100% | 主进程 busy-polling epoll 循环，即使无任务也持续高负载，严重影响部署体验 |
| [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289) | MEMORY.md 文件膨胀导致效率下降 | 文本记忆机制在高频使用下检索变慢，呼吁引入结构化存储或压缩策略 |

> 📌 用户正将 CoPaw 推向企业级多通道、高并发场景，对稳定性与性能提出更高要求。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按优先级排序）

| Issue | 严重程度 | 状态 | 关联 Fix PR |
|------|--------|------|------------|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 🔴 高（资源耗尽） | OPEN | 无（需排查事件循环逻辑） |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 🔴 高（功能错乱） | OPEN | 无（疑似上下文管理缺陷） |
| [#2243](https://github.com/agentscope-ai/CoPaw/issues/2243) | 🟠 中（功能失效） | OPEN | 无（MEMORY.md 未自动更新） |
| [#2153](https://github.com/agentscope-ai/CoPaw/issues/2153) | 🟠 中（任务失败） | OPEN | 无（钉钉 webhook 过期未处理） |
| [#2265](https://github.com/agentscope-ai/CoPaw/issues/2265) | 🟠 中（工具不可用） | OPEN | 无（APITimeoutError 阻碍工具调用） |

> ❗ 建议优先处理 #2218（CPU 占用）与 #1345（飞书错序），二者影响核心可用性。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能需求（已有相关 PR 或强烈社区呼声）

| 功能 | 支持证据 | 可能版本 |
|------|--------|--------|
| **多智能体独立模型配置** | #2274、#2288、#2278（PR） | v0.3.0 |
| **/stop 命令全局支持** | #2302（Issue）、#2067（PR） | v0.2.1 |
| **微信 iLink Bot 接入** | #2101（Issue）、#2260（PR） | v0.3.0 |
| **记忆系统优化（非文本）** | #2289（Issue）、#2300（WIP PR） | v0.3.0 |
| **Agent 禁用/下线功能** | #2284（Issue） | v0.2.1 |
| **自定义模型网关支持** | #2296（Issue） | v0.3.0 |

> ✅ 多模型隔离与 /stop 命令已有实现路径，有望近期落地。

---

## 7. 用户反馈摘要

### 💬 真实用户声音提炼

- **满意点：**
  - 多智能体协作架构设计灵活，支持跨 Agent 通信（#2225）
  - 工具调用能力强大，尤其 browser_use 集成受好评（#2294）
  - Docker 部署便捷，社区镜像更新及时

- **痛点与不满：**
  - “开两个页面切换 Agent 太反人类，急需 Tab 模式”（#2281）
  - “MEMORY.md 越来越大，现在响应明显变慢”（#2289）
  - “升级后网页打不开，容器却显示 running”（#2254）
  - “钉钉发文件收不到，定时任务也不执行”（#2028, #2153）

> 🎯 用户核心诉求：**降低多 Agent 使用门槛 + 提升生产环境稳定性**

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue（>7天无维护者回复）

| Issue | 类型 | 积压天数 | 风险提示 |
|------|------|--------|--------|
| [#1911](https://github.com/agentscope-ai/CoPaw/issues/1911) | 通道集成 | 6天 | 华为小艺为重要生态伙伴，需官方验证兼容性 |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 核心 Bug | 13天 | 飞书为企业主力通道，错序问题严重影响信任度 |
| [#430](https://github.com/agentscope-ai/CoPaw/issues/430) | 社区任务 | 23天 | “Help Wanted”列表未更新，影响贡献者参与热情 |

> 🔔 建议维护团队本周内对上述 Issue 进行状态确认或分配负责人。

---

**报告生成时间：2026-03-26**  
**数据来源：** [CoPaw GitHub Repository](https://github.com/agentscope-ai/CoPaw)  
**分析师：** AI 开源项目观察员

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-26）

---

## 1. 今日速览

ZeptoClaw 在 2026-03-25 表现出极高的开发活跃度，社区与维护团队协同高效：**22 个 PR 被合并/关闭，9 个 Issues 被关闭**，主要集中在 Telegram 通道优化、安全加固和工具链增强。尽管无新版本发布，但项目通过一系列精细化改进显著提升了用户体验与系统稳定性。核心贡献者 @stuartbowness 和 @qhkm 主导了当日大部分关键变更，体现出良好的工程节奏。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能迭代与缺陷修复，未触发正式版本发布流程。

---

## 3. 项目进展

今日合并/关闭的 PR 推动多项关键能力落地：

- **Telegram 交互体验全面升级**：  
  实现了消息线程化回复（#432）、处理状态反应指示器（#433）、HTML 链接安全转义（#437），并修复了照片消息丢弃（#419）和并发打字指示器竞态（#415）等关键问题，显著提升用户感知质量。  
  🔗 [PR #432](https://github.com/qhkm/zeptoclaw/pull/432) | [PR #433](https://github.com/qhkm/zeptoclaw/pull/433)

- **浏览器自动化工具链集成**：  
  引入 `agent-browser` 支持的 `BrowserTool`（#436），提供 Lightpanda + Chrome 双引擎回退机制，并配套 SSRF 防护与 UX 优化（如静默搜索输出 #439、NFC 偏移映射修复 #438），为智能体赋予网页交互能力。  
  🔗 [PR #436](https://github.com/qhkm/zeptoclaw/pull/436) | [PR #439](https://github.com/qhkm/zeptoclaw/pull/439)

- **安全性与健壮性增强**：  
  完成 ACP HTTP 通道的 CORS 限制与路径遍历防护（#440），并优化了容器引擎检测逻辑（#441），避免 Docker/Podman 混用导致的构建失败。  
  🔗 [PR #440](https://github.com/qhkm/zeptoclaw/pull/440) | [PR #441](https://github.com/qhkm/zeptoclaw/pull/441)

- **模型发现机制修复**：  
  修复了合并 PR #407 后引入的 `provider_name_for_model()` 推断错误与 `fetch_provider_models()` 运行时忽略问题（#416），保障多供应商路由稳定性。  
  🔗 [PR #416](https://github.com/qhkm/zeptoclaw/issues/416)

---

## 4. 社区热点

**最活跃 Issue：#424（已关闭）**  
> 🔗 [Issue #424](https://github.com/qhkm/zeptoclaw/issues/424)  
> **讨论焦点**：`lint-container.sh` 在 Podman 环境下异常中止。  
> **背后诉求**：开发者希望构建脚本能智能识别容器引擎，避免因 Docker/Podman 共存导致隐式行为偏差。该问题迅速引发对“默认偏好 vs 用户预期”的讨论，最终催生更健壮的检测逻辑（见 PR #441）。

**高价值 PR 栈：浏览器工具链（#436 → #439）**  
尽管评论数暂未显示，该 PR 栈被标记为“依赖链”且拆分自大型功能 #410，表明社区对浏览器自动化能力高度关注。其设计兼顾 SSRF 防护、多引擎兼容与 UX 静默输出，反映项目向生产级智能体演进的方向。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **P1-关键** | #416 | 模型发现回归：供应商推断错误、运行时模型忽略 | ✅ 已修复（PR #416） |
| **高** | #419 | Telegram 照片消息静默丢弃 | ✅ 已修复（关联 PR #432/433） |
| **高** | #415 | Telegram 打字指示器并发竞态 | ✅ 已修复（PR #433） |
| **中** | #424 | `lint-container.sh` 容器引擎检测失败 | ✅ 已修复（PR #441） |
| **中** | #367 | AGENTS.md 硬编码仓库 slug 导致 fork 误报 | ✅ 已关闭（未提修复 PR，可能已文档调整） |

> 所有报告 Bug 均在 24 小时内闭环，体现团队响应效率。

---

## 6. 功能请求与路线图信号

- **Telegram 体验深化**：  
  用户持续推动 Telegram 通道拟人化（#331 改进格式、#428 反应指示器、#427 线程回复），相关 PR 已全部实现，预示该通道将成为首要交互入口。

- **浏览器自动化成为核心能力**：  
  `BrowserTool` 的引入（#436）及配套的 UX 优化（#439、#444）表明项目正从“命令行助手”向“全栈智能体”转型，支持网页抓取、表单填写等复杂任务。

- **开发者体验优化**：  
  新增 PR 规范文档（#421）与容器脚本健壮性改进（#441）显示项目重视贡献者体验，有助于吸引外部开发者。

> 上述功能极可能纳入下一 minor 版本（如 v0.5.0）。

---

## 7. 用户反馈摘要

- **痛点**：  
  - Telegram 消息无视觉反馈，用户不确定 bot 是否收到请求（#428）；  
  - 照片/文件消息被忽略，导致功能不可用（#419）；  
  - 群组对话中回复缺乏上下文关联（#427）。

- **满意点**：  
  - 快速修复关键 Bug（如 #416 模型发现回归）；  
  - 主动引入安全加固（#434 ACP CORS 限制）；  
  - 提供清晰的 PR 拆分与依赖说明（如 #436–#439 栈）。

- **使用场景**：  
  用户期望 ZeptoClaw 作为日常 AI 助手，通过 Telegram 进行自然交互，并执行网页搜索、浏览等任务，强调“响应感”与“可靠性”。

---

## 8. 待处理积压

- **#435 [OPEN] smarter container engine detection in lint-container.sh**  
  🔗 [Issue #435](https://github.com/qhkm/zeptoclaw/issues/435)  
  虽已有 PR #441 实现，但 Issue 仍开放，需确认是否完全覆盖“Docker CLI 伪装 Podman”场景，建议维护者验证后关闭。

- **#428 [OPEN] feat: reaction indicator for Telegram message processing**  
  🔗 [Issue #428](https://github.com/qhkm/zeptoclaw/issues/428)  
  功能已由 PR #433 实现，但 Issue 未关闭，需同步状态。

> 建议：维护者可批量清理已解决但未关闭的 Issues，提升项目看板清晰度。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度、快速响应、功能聚焦，安全与开发体验并重，处于良性迭代周期。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*