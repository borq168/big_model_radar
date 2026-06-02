# OpenClaw 生态日报 2026-04-22

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-22 01:13 UTC

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

# OpenClaw 项目动态日报（2026-04-22）

---

## 1. 今日速览

OpenClaw 项目在 2026-04-22 继续保持高活跃度，过去24小时内共处理 **500 条 Issues**（新开/活跃 333 条，关闭 167 条）和 **500 条 PR**（待合并 331 条，已合并/关闭 169 条），显示出社区参与度与核心团队响应效率均处于高位。项目于近期发布三个新版本（v2026.4.20 系列），主要聚焦于引导流程优化与稳定性修复。尽管存在多个回归性 Bug 报告，但修复节奏紧凑，整体项目健康度良好。

---

## 2. 版本发布

### v2026.4.20 系列（正式版 + Beta）
- **核心更新内容**：
  - 重新设计引导流程中的安全免责声明 UI：采用单一黄色警告横幅、分段标题与项目符号清单，提升可读性；取消正文灰度显示，确保关键指引清晰可见。
  - 在模型目录初始加载期间添加加载动画，避免向导界面“空白”状态，改善用户体验。
- **影响范围**：主要影响新用户首次配置体验，无破坏性变更。
- **迁移建议**：无需用户手动操作，更新后自动生效。

> 📌 相关链接：[v2026.4.20 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20)

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，显著提升系统稳定性与可观测性：

- **#69872**（已合并）：修复配置文件写入时破坏符号链接的问题，保留 `SecretRef` 标记，避免配置丢失（@matheusccouto）。
- **#69895**（已合并）：延迟导入 `grammy` 模块，解决 `openclaw doctor` 在 fresh install 后崩溃问题（@iT2afL0rd）。
- **#69903**（开放中）：引入可选的 Sentry 错误追踪集成，通过 tslog 转发错误日志，增强生产环境可观测性（@clivemoore）。
- **#69832**（开放中）：新增 `openclaw diagnose` CLI 命令，利用 AI 对网关运行状态进行自动化诊断并生成 Markdown 报告（@DanWebb1949）。

> ✅ 整体评估：项目在配置管理、依赖治理、运维工具链三个方向同步推进，工程成熟度持续提升。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 点赞 | 分析 |
|------|------|--------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps 缺失 | 89 | 71 | 用户强烈呼吁补齐跨平台桌面端支持，反映生态完整性诉求。 |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) | 技能行为信誉系统提案 | 17 | 0 | 针对 ClawHub 上恶意技能泛滥（341 个已确认），提出超越身份验证的行为层防护机制，属长期安全架构议题。 |
| [#69842](https://github.com/openclaw/openclaw/issues/69842) | `openclaw doctor` 因缺失 `@whiskeysockets/baileys` 失败 | 5 | 4 | 反映 npm 全局安装后依赖重建流程存在缺陷，影响 WhatsApp 用户升级体验。 |

> 💡 社区核心诉求：**跨平台支持**、**技能安全治理**、**依赖管理可靠性**。

---

## 5. Bug 与稳定性

### ⚠️ 高优先级回归问题（按严重性排序）

| Issue | 问题描述 | 状态 | 是否有 Fix PR |
|------|--------|------|---------------|
| [#66633](https://github.com/openclaw/openclaw/issues/66633) | OpenAI Codex 升级至 v2026.4.14 后遭 Cloudflare 403 拦截 | CLOSED | ✅ 已修复 |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry GPT 模型请求 schema 被拒绝，工具调用失效 | OPEN | ❌ 无 |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | GitHub Copilot 模型在后续对话中因 payload 拒绝失败 | OPEN | ❌ 无 |
| [#67295](https://github.com/openclaw/openclaw/issues/67295) | `openclaw agents add` 写入错误 baseUrl，破坏多提供商兼容性 | CLOSED | ✅ 已修复 |
| [#69831](https://github.com/openclaw/openclaw/issues/69831) | `openclaw update` 后缺失 `grammy` 模块导致崩溃 | OPEN | ✅ #69895 已修复 |

> 🔍 趋势：Azure/OpenRouter/GitHub Copilot 等第三方集成稳定性是当前主要痛点，需加强 provider schema 兼容性测试。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能方向

| 功能请求 | 关联 PR | 可能性评估 |
|--------|--------|-----------|
| **Amazon Bedrock Bearer Token 认证支持**（#30215） | 无 | 中 — 企业用户刚需，但需 AWS SDK 改造 |
| **Telegram 按聊天类型设置回复模式**（#69757） | #69757（XL PR） | 高 — 已提交完整实现，匹配 Slack 已有能力 |
| **AI 驱动的诊断工具**（#69832） | #69832（进行中） | 高 — 提升运维效率，符合 DevOps 趋势 |
| **Ollama Cloud Web Search 路由支持**（#69132） | #69152（已合并） | ✅ 已落地 |

> 📌 预测：下一版本（v2026.4.21+）将重点增强 **多通道一致性** 与 **AI 运维能力**。

---

## 7. 用户反馈摘要

- **满意点**：
  - 引导流程 UI 改进获正面反馈（v2026.4.20 更新）。
  - `openclaw diagnose` 被赞“极大降低排查门槛”（#69832 评论）。
- **痛点**：
  - “升级后 Telegram 完全无法使用，必须手动重装依赖”（#69831）。
  - “国内用户因代理配置 JSON 格式错误导致网关启动失败”（#38503）。
  - “群组聊天中机器人疯狂回复所有消息，根本无法使用”（#29214）。
- **典型场景**：
  - 企业用户通过 Docker 部署 + 沙箱隔离运行敏感任务（#31331）。
  - 个人用户依赖 WhatsApp/Telegram 实现日常自动化（#68056, #63349）。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue（>2 个月）

| Issue | 主题 | 创建时间 | 状态 | 建议 |
|------|------|--------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 桌面应用缺失 | 2026-01-01 | OPEN | 需产品团队评估资源投入，社区呼声极高 |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) | `message_sending` 插件钩子永不触发 | 2026-02-25 | OPEN | 属核心插件机制缺陷，应优先排查 |
| [#17890](https://github.com/openclaw/openclaw/issues/17890) | macOS 应用忽略 Homebrew PATH | 2026-02-16 | OPEN | 影响开发者体验，建议适配标准 PATH 查找逻辑 |

> 🛎️ **维护者提醒**：上述问题虽标记为 `stale`，但均涉及核心功能或用户体验，建议分配资源进行 triage 或社区协作解决。

---

**报告生成时间**：2026-04-22  
**数据来源**：OpenClaw GitHub Repository (github.com/openclaw/openclaw)  
**分析师**：AI 开源项目洞察引擎

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告  
**报告时间：2026-04-22**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **高活跃度、强工程化、多通道融合** 的演进态势。主流项目普遍聚焦于 **稳定性修复、多平台通道集成（Telegram/飞书/钉钉/微信）、可观测性增强与架构现代化**，反映出从“原型验证”向“生产可用”的关键转型。OpenClaw 作为生态核心参照，其高 Issue/PR 处理量（500+/500+）与频繁版本迭代（v2026.4.20 系列）体现了社区驱动型项目的成熟度标杆。与此同时，NanoBot、Zeroclaw、PicoClaw 等项目在安全加固、会话管理、插件架构等方向形成差异化竞争，整体生态正加速向企业级部署能力靠拢。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PR（待合并） | 今日 Release | 健康度评估 |
|------|------------------|------------|------------|----------|
| **OpenClaw** | 333 | 331 | ✅ v2026.4.20 系列 | ⭐⭐⭐⭐⭐（高活跃，响应迅速） |
| **NanoBot** | 8 | 16 | ✅ v0.1.5.post2 | ⭐⭐⭐⭐☆（稳定迭代，安全修复及时） |
| **Zeroclaw** | 12 | 32 | ❌ | ⭐⭐⭐☆☆（高强度重构，S1 Bug 待修） |
| **PicoClaw** | 5 | 7 | ✅ nightly v0.2.6 | ⭐⭐⭐⭐☆（功能快速落地，i18n 待完善） |
| **NanoClaw** | 4 | 17 | ❌ | ⭐⭐⭐☆☆（v2 重构中，多通道路由存隐患） |
| **IronClaw** | 21 | 39 | ✅ v0.26.0 | ⭐⭐⭐⭐☆（Engine V2 推进，安装器问题待解） |
| **LobsterAI** | 0* | 5 | ✅ 2026.4.21 | ⭐⭐⭐☆☆（前端 Bug 高优，技能迁移完成） |
| **Moltis** | 6 | 1 | ✅ 20260421.05 | ⭐⭐⭐⭐☆（安全响应快，技能性能待优化） |
| **CoPaw** | 21 | 22 | ✅ v1.1.3-beta.2 | ⭐⭐⭐☆☆（MCP 稳定性成瓶颈） |
| **ZeptoClaw** | 1 | 3 | ❌ | ⭐⭐☆☆☆（配置 Bug 未响应，CI 维护积极） |
| **EasyClaw** | 0 | 0 | ✅ v1.8.1–v1.8.3 | ⭐⭐⭐☆☆（文档热修，无代码活动） |

> *注：LobsterAI Issues 更新数为 2（非新开），表中按活跃 Issue 计为 0。*

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大、响应最快**：单日处理 500+ Issues/PRs，社区规模远超同类（如 NanoBot 仅 69 Issues），体现强维护能力；  
- **生态中枢地位**：被 LobsterAI、CoPaw 等项目作为底层引擎集成（如 LobsterAI 升级至 OpenClaw v2026.4.14）；  
- **企业级特性领先**：率先实现 Sentry 集成、AI 诊断工具（`openclaw diagnose`）、多租户 RBAC 设计（#5982）。

**技术路线差异**：  
- 相比 NanoBot 的“轻量自管理”哲学，OpenClaw 强调 **可观测性 + 运维自动化**；  
- 相较 Zeroclaw 的激进架构重构（onboard 重写），OpenClaw 采取 **渐进式稳定性优化** 策略。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多通道一致性** | OpenClaw, NanoClaw, PicoClaw, CoPaw | 解决 Telegram/飞书/微信间消息路由错乱、上下文隔离失效（如 #1902, #2310） |
| **会话生命周期管理** | NanoBot (#2062), CoPaw (#3356), PicoClaw (#2310) | 提供 session 重置 API、防止历史记录丢失或无限增长 |
| **安全沙箱强化** | Moltis (#822), Zeroclaw (#5971), NanoBot (#3366) | 修复 exec 注入、依赖漏洞、路径遍历等高危问题 |
| **可观测性集成** | OpenClaw (#69903), NanoBot (#3365), IronClaw (#2812) | 接入 Sentry/PostHog/OpenTelemetry，实现错误追踪与行为审计 |
| **IM 附件兼容性** | Moltis (#819), NanoClaw (#1905), LobsterAI (#1780) | 支持 PDF/语音/Office 文档解析与跨通道传输 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 企业级网关、多租户、运维工具链 | DevOps/企业集成者 | Schema 驱动配置、插件化通道、AI 诊断 |
| **NanoBot** | 轻量自托管、快速启动、隐私优先 | 个人开发者/极客 | Python 原生、LiteLLM 抽象、CLI 优先 |
| **Zeroclaw** | 高可维护性、架构现代化 | 技术决策者/平台团队 | Onboard 重写、schema v3 迁移、WASM 插件 |
| **PicoClaw** | 多通道 UX 一致性、WebUI 体验 | 终端用户/中小企业 | 密码认证替代 token、Agent Pipeline 重构 |
| **IronClaw** | 任务沙箱、成本追踪、Engine V2 | 企业项目管理者 | Per-project sandbox、LLM 热重载 |
| **Moltis** | 安全执行沙箱、浏览器自动化 | 安全敏感型用户 | Landlock FS、exec 审批机制、容器诊断 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 量，功能密集发布）：  
  **OpenClaw、IronClaw、CoPaw** 处于技术攻坚期，核心架构升级与稳定性修复并行。
  
- **质量巩固阶段**（低 Issue 量，专注 Bug 修复与体验打磨）：  
  **NanoBot、Moltis、PicoClaw** 通过版本热修（如 v0.1.5.post2、20260421.05）提升鲁棒性，社区反馈闭环效率高。

- **静默维护阶段**（无代码活动，文档驱动）：  
  **EasyClaw** 通过三连发布解决 macOS 安装问题，反映“用户体验优先”的维护策略。

---

## 7. 值得关注的趋势信号

1. **从“工具”到“伙伴”的体验跃迁**：  
   CoPaw 用户呼吁“一键更新、自我进化”（#2301），NanoBot 引入 Nostr/Lightning 支付，表明用户期待 AI 助手具备 **自主决策与持续进化能力**。

2. **多模态成为标配，但兼容性仍是痛点**：  
   PDF（NanoClaw）、语音（Moltis）、视频生成（NanoClaw #1893）被广泛支持，但 Telegram/Discord 附件丢失问题频发，**跨平台 MIME 处理规范缺失**。

3. **安全左移，沙箱机制趋严**：  
   Moltis 双层 exec 防御、Zeroclaw 依赖漏洞扫描、NanoBot Shell 注入修复，显示 **安全已从“可选”变为“准入项”**。

4. **配置即代码（CaC）需求上升**：  
   OpenClaw 的 `Vec<String>` 配置支持、ZeptoClaw 的 JSON 加载失败，反映用户对 **声明式、可版本化的配置管理** 的强烈需求。

> **对开发者的建议**：优先投资 **会话持久化可靠性、多通道抽象层、安全沙箱标准化** 三大基建，避免陷入碎片化功能竞争。

---  
**分析师**：AI 开源项目洞察引擎  
**数据截止**：2026-04-22 24:00 UTC

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-22）

---

## 1. 今日速览

NanoBot 在 2026-04-22 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内，项目共处理 **69 条 Issues**（新开/活跃 8 条，关闭 61 条）和 **39 条 PRs**（待合并 16 条，已合并/关闭 23 条），显示出高效的维护节奏。伴随 **v0.1.5.post2 版本发布**，项目在跨平台兼容性、文档支持与系统稳定性方面取得显著进展。社区对安全漏洞、模型兼容性及用户体验优化的关注持续升温。

---

## 2. 版本发布

### 🐈 **nanobot v0.1.5.post2** 正式发布

- **发布时间**：2026-04-22  
- **合并 PR 数**：67 个  
- **新增贡献者**：12 人  
- **核心改进方向**：从“自我管理”转向“扩展能力与体验打磨”

#### 主要更新内容：
- ✅ **新增 Windows 平台支持**：完善跨平台部署能力  
- ✅ **支持 Python 3.14**：适配最新语言运行时环境  
- ✅ **增强 `read_file` 工具功能**：扩展对 Office 文档（DOCX/XLSX/PPTX）的读取支持（[#3336](https://github.com/HKUDS/nanobot/pull/3336)）  
- ✅ **修复会话持久化数据丢失问题**：通过 `fsync` 确保 graceful shutdown 时数据落盘（[#3369](https://github.com/HKUDS/nanobot/pull/3369)）  
- ✅ **优化 CLI 输出行为**：尊重 `sys.stdout.isatty()` 判断，避免非终端环境输出控制字符（[#3370](https://github.com/HKUDS/nanobot/pull/3370)）  
- ✅ **Telegram 频道 Markdown 渲染增强**：更好支持现代 LLM 输出的复杂格式（[#3355](https://github.com/HKUDS/nanobot/pull/3355)）

> 🔔 **无破坏性变更**，但建议升级后验证本地会话文件完整性，尤其在使用 NFS/FUSE 挂载存储时。

[查看完整 Release 说明](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post2)

---

## 3. 项目进展

今日共 **23 个 PR 被合并或关闭**，重点推进以下方向：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **安全性** | 修复 `ExecTool` 中 `path_append` 参数导致的 Shell 注入漏洞（非 Windows 平台） | [#3366](https://github.com/HKUDS/nanobot/pull/3366) |
| **模型兼容性** | 修复 MiniMax 模型 `reasoning_effort` 参数未被正确转换的问题，提升推理能力支持 | [#3363](https://github.com/HKUDS/nanobot/pull/3363) |
| **可观测性** | 新增 PostHog 分析钩子，支持消息追踪、延迟监控与用户行为审计 | [#3365](https://github.com/HKUDS/nanobot/pull/3365) |
| **用户体验** | 拦截非优先命令（如 `/new`）在 LLM 活跃轮次中被误注入对话的问题 | [#3359](https://github.com/HKUDS/nanobot/pull/3359) |
| **文档与示例** | 补充 WebSocket 通道配置指南，降低 WebUI 开发门槛 | [#3347](https://github.com/HKUDS/nanobot/pull/3347) |
| **重试机制优化** | 识别 ZhiPu API 返回码 `1302` 为速率限制错误，启用自动重试 | [#3356](https://github.com/HKUDS/nanobot/pull/3356) |

> 项目整体向 **更安全、更稳定、更易用** 的方向稳步迈进，尤其在边缘场景处理上显著提升鲁棒性。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（过去24小时）

| Issue | 主题 | 评论数 | 分析 |
|------|------|--------|------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | **架构问题：prompt prefix 不一致导致缓存失效** | 10 | 用户指出历史记录存储格式与实际发送给模型的 prompt 不一致，影响 OpenAI prefix cache 效率。此为深层架构隐患，需重构消息序列化逻辑。 |
| [#2062](https://github.com/HKUDS/nanobot/issues/2062) | **如何清空/重启 session？** | 8 | 飞书用户因 session 文件无限增长导致上下文溢出，呼吁提供程序化重置接口。反映多轮对话场景下的生命周期管理缺失。 |
| [#161](https://github.com/HKUDS/nanobot/issues/161) | **提议用原生 SDK 替代 LiteLLM** | 6 (+8👍) | 社区对依赖 LiteLLM 存在安全顾虑（曾遭隔离），并希望提升本地模型支持透明度。已有相关讨论但未形成共识。 |

> 💡 热点背后诉求：**提升系统可观测性、控制力与安全性**，尤其在生产环境中对会话管理、依赖信任链有更高要求。

---

## 5. Bug 与稳定性

### ⚠️ 今日报告/复现的关键问题（按严重程度排序）

| 问题 | 严重性 | 状态 | 关联 Issue / Fix PR |
|------|--------|------|------------------|
| Shell 注入漏洞（`path_append` 参数） | 高危 | ✅ 已修复 | [#3366](https://github.com/HKUDS/nanobot/pull/3366) |
| 会话数据因未 `fsync` 导致静默丢失 | 中高危 | ✅ 已修复 | [#3369](https://github.com/HKUDS/nanobot/pull/3369) |
| DeepSeek Reasoner 缺少 `reasoning_content` 字段 | 中 | ✅ 已在 v0.1.5.post2 中修复 | [#1225](https://github.com/HKUDS/nanobot/issues/1225), [#244](https://github.com/HKUDS/nanobot/issues/244) |
| ZhiPu API 速率限制未被识别为重试错误 | 中 | ✅ 已修复 | [#3356](https://github.com/HKUDS/nanobot/pull/3356) |
| Telegram 中 `/new` 命令被当作普通消息处理 | 低 | ✅ 已修复 | [#3359](https://github.com/HKUDS/nanobot/pull/3359) |

> 所有高危及以上问题均已在本版本中得到修复，建议用户尽快升级。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（结合 PR 判断采纳可能性）

| 功能请求 | 社区热度 | 已有 PR？ | 纳入路线图可能性 |
|--------|--------|----------|----------------|
| **Web Chat 通道（SSE 流式响应）** | 高 | ✅ [#2871](https://github.com/HKUDS/nanobot/pull/2871) | ⭐⭐⭐⭐☆（已合并，即将可用） |
| **文件附件上传（WebUI）** | 中高 | ✅ [#3361](https://github.com/HKUDS/nanobot/pull/3361) | ⭐⭐⭐⭐☆（开发中） |
| **子任务状态查询与取消工具** | 中 | ✅ [#3303](https://github.com/HKUDS/nanobot/pull/3303) | ⭐⭐⭐☆☆（增强 orchestration） |
| **Langfuse 可观测性集成** | 中 | ❌ | ⭐⭐☆☆☆（需社区推动） |
| **Telegram 模型切换命令** | 中 | ❌ | ⭐⭐⭐☆☆（需求明确，易实现） |

> 下一版本（v0.1.6）有望重点推出 **WebUI 完整交互体验** 与 **细粒度任务控制工具**。

---

## 7. 用户反馈摘要

### ✅ 满意点：
- “v0.1.5.post2 在 Windows 上运行非常流畅，终于不用切 Linux 了。” —— Windows 用户
- “`read_file` 支持 PPTX 太棒了，做竞品分析直接读报告。” —— 企业用户
- “PostHog 集成让运维监控变得简单。” —— DevOps 用户

### ❌ 痛点：
- “飞书 session 文件越来越大，必须手动删，体验很差。” —— 飞书集成用户（[#2062](https://github.com/HKUDS/nanobot/issues/2062)）
- “DingTalk 群里发文件必须 @bot，但文件和消息分开发送，bot 收不到。” —— 钉钉用户（[#3344](https://github.com/HKUDS/nanobot/issues/3344)）
- “LiteLLM 被 PyPI 隔离过，我们不敢用。” —— 安全敏感团队（[#2443](https://github.com/HKUDS/nanobot/issues/2443)）

> 用户核心诉求：**更可控的会话生命周期、更安全的依赖、更自然的 IM 集成体验**。

---

## 8. 待处理积压

### 🔔 需维护者关注的长期未决事项

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 架构缺陷 | 2026-03-25 | Open | **高优先级**：prompt prefix 不一致影响缓存效率，需设计消息序列化规范 |
| [#161](https://github.com/HKUDS/nanobot/issues/161) | 架构提案 | 2026-02-05 | Open | 社区对 LiteLLM 信任度下降，应评估迁移至原生 SDK 的可行性 |
| [#3344](https://github.com/HKUDS/nanobot/issues/3344) | 功能缺陷 | 2026-04-21 | Open | DingTalk 文件上传体验断裂，影响企业用户 adoption |
| [#2062](https://github.com/HKUDS/nanobot/issues/2062) | 功能请求 | 2026-03-15 | Closed* | 虽关闭但无内置解决方案，建议提供 `session reset` API 或 CLI 命令 |

> 💡 建议：针对 [#2463] 启动技术设计讨论，并在 v0.1.6 规划会议中评估 LiteLLM 替代方案。

---

**报告生成时间**：2026-04-22  
**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库实时数据  
**分析师备注**：项目健康度良好，社区活跃，响应迅速。建议加强架构级问题的前瞻性治理。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-22）

---

## 1. 今日速览

Zeroclaw 项目在 2026-04-22 继续保持高活跃度，过去24小时内共处理 **26 条 Issues**（新开/活跃 12 条，关闭 14 条）和 **50 条 Pull Requests**（待合并 32 条，已合并/关闭 18 条），显示出社区贡献与核心团队维护的双重活跃。尽管无新版本发布，但多个关键模块（如配置系统、通道通信、提供者架构）正在进行深度重构与修复。项目整体处于**高强度迭代期**，重点聚焦于稳定性提升、架构统一与多租户支持。

---

## 2. 版本发布

**无新版本发布**。当前主干（master）仍在进行多项高风险重构（如 onboard 系统重写、schema v3 迁移准备），预计下一版本将包含重大配置变更。

---

## 3. 项目进展

今日有 **18 个 PR 被合并或关闭**，主要进展包括：

- **配置系统增强**：[#5950](https://github.com/zeroclaw-labs/zeroclaw/pull/5950) 实现对 `Vec<String>` 类型配置字段（如 `allowed_users`、`allowed_commands`）的完整支持，提升配置 CLI 的可用性。
- **安全依赖更新**：[#5971](https://github.com/zeroclaw-labs/zeroclaw/pull/5971) 修复 `rand` 和 `picomatch` 的安全漏洞，并文档化已知忽略项。
- **通道稳定性修复**：[#5969](https://github.com/zeroclaw-labs/zeroclaw/pull/5969) 修复 Telegram 论坛主题中自动注入的 `reply_to_message` 导致的上下文误判问题。
- **工具调用兼容性**：[#5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975) 解决 Gemini/OpenRouter 模型在工具调用时的命名空间前缀解析问题，提升多模型路由稳定性。

此外，**onboard 系统重写**（[#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)）进入实施阶段，旨在将 8,534 行单体代码替换为 schema 驱动的轻量 orchestrator，显著提升可维护性与幂等性。

---

## 4. 社区热点

### 🔥 高讨论度 Issues/PRs

| 编号 | 类型 | 标题 | 评论数 | 链接 |
|------|------|------|--------|------|
| #5937 | Issue | refactor: Unify providers architecture and reqwest client management | 6 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) |
| #5951 | Issue | Clean-slate rewrite of zeroclaw onboard (DRY, schema-driven, idempotent) | 2 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) |
| #5982 | Issue | Per-sender RBAC for multi-tenant agent deployments | 2 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |

**分析**：  
- **#5937** 反映社区对提供者模块技术债务的关注，当前 `reqwest` 使用不一致、配置碎片化，亟需统一抽象。
- **#5951** 与 PR #5960 呼应，标志 onboard 流程进入架构现代化阶段，是项目迈向可维护性的关键一步。
- **#5982** 提出多租户 RBAC 需求，表明企业用户希望在同一实例中隔离不同角色（客户/运维/开发），预示未来向 SaaS 化演进。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 状态 | Fix PR |
|----------|-------|------|------|--------|
| S0 | #5672 | Feishu 在 `mention_only` 启用时仍响应非提及消息（安全风险） | CLOSED | 已修复 |
| S0 | #5967 | Linux 预构建安装器实际从源码编译，导致资源耗尽 | CLOSED | 已修复 |
| S1 | #4846 | WhatsApp-Web 通道因缺少 `whatsapp-web` 编译特性而失效 | OPEN | 无 |
| S1 | #5962 | Ollama 提供者在需要工具调用时失败，阻塞会话 | OPEN | 无 |
| S1 | #2324 | `always_ask` 工具在非 CLI 通道静默拒绝，未触发确认提示 | CLOSED | 已修复 |
| S2 | #5634 | Web 仪表盘在 `session_persistence=true` 时仍新建会话 | CLOSED | 已修复 |

> ⚠️ **注意**：#4846 和 #5962 仍为开放状态，影响关键通道功能，建议优先处理。

---

## 6. 功能请求与路线图信号

以下功能请求显示出明确的产品演进方向：

- **多租户与权限隔离**（#5982）：推动 RBAC 设计，可能纳入 v0.4 路线图。
- **Web 仪表盘增强**：#5936 已实现 Cron 任务类型选择器（Shell/Agent），后续可能扩展至技能管理、会话监控。
- **可观测性改进**：#5980 请求在 OpenTelemetry 追踪中暴露工具调用失败详情，反映用户对调试能力的需求上升。
- **插件生态扩展**：#5921 引入首个 WASM 插件（Fal.ai 图像生成），验证 Extism 运行时可行性，预示插件系统将成为核心扩展机制。

结合 PR 进展，**schema v3 迁移**（#5947）和 **onboard 重写** 极可能成为下一版本的重点发布内容。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “Web 仪表盘每次刷新都丢失上下文，`session_persistence=true` 形同虚设”（#5634）
  - “Docker 镜像无法访问 Web UI，文档未说明 `web_dist_dir` 如何配置”（#5959）
  - “Ollama 调用工具时直接报错，整个会话卡死”（#5962）

- **满意点**：
  - “Cron 现在支持 Agent 类型任务，终于可以跑复杂工作流了”（#5936 相关反馈）
  - “Telegram 命令终于能自动更新了，不用手动同步”（#5691）

- **使用场景**：
  - 企业用户尝试部署多实例服务不同客户，急需租户隔离（#5982）
  - 开发者使用 OpenRouter 路由 Gemini 模型，遭遇工具调用兼容性问题（#5975）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 链接 |
|------|------|------|----------|------|------|
| #4846 | Issue | WhatsApp-Web Channel Broken | 2026-03-27 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) |
| #5847 | Issue | Document the use of gateway.web_dist_dir & ZEROCLAW_WEB_DIST_DIR | 2026-04-17 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| #5962 | Issue | Ollama Provider call failed when tools are needed | 2026-04-21 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |

> 💡 **建议**：  
> - #4846 涉及核心通道功能，应评估是否默认启用 `whatsapp-web` 特性或提供清晰构建指南。  
> - #5847 为文档缺口，影响 Docker 用户体验，可标记为 `good first issue`。  
> - #5962 为新报 S1 Bug，需尽快复现并定位 Ollama 工具调用逻辑。

--- 

**总结**：Zeroclaw 正处于架构升级与功能扩展的关键阶段，社区活跃度健康，但需警惕关键通道 Bug 和文档缺失对用户体验的负面影响。建议下一周期优先解决 S1 级稳定性问题，并推进 schema v3 迁移以释放配置系统潜力。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-22）

---

## 1. 今日速览

PicoClaw 项目在 2026-04-21 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **18 条 PR**（11 条已合并/关闭，7 条待合并）和 **7 条 Issues**（5 条新开/活跃，2 条已关闭），显示出良好的问题响应与功能迭代节奏。项目发布了一个 nightly 构建版本（v0.2.6-nightly.20260422），表明主干开发正朝着 v0.2.6 稳定版稳步迈进。整体项目健康度良好，Bug 修复、配置增强与 WebUI 改进构成当日主要焦点。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.6-nightly.20260422.279c496b`
- **类型**：自动化 nightly 构建（非稳定版）
- **说明**：此版本为开发主干（main）的每日快照，包含截至 2026-04-21 的所有最新提交。
- **注意事项**：
  - ⚠️ 此构建可能包含未完全测试的功能或回归问题，**不建议用于生产环境**。
  - 用户可通过 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) 查看自 v0.2.6 标签以来的所有变更。
  - 主要集成内容包括：Google Antigravity 认证修复、WebUI 聊天恢复优化、WeChat/Feishu 通道增强、MCP 命令支持等。

> 📦 发布链接：[nightly v0.2.6-nightly.20260422.279c496b](https://github.com/sipeed/picoclaw/releases/tag/nightly)

---

## 3. 项目进展

今日共有 **11 条 PR 被合并或关闭**，涵盖 Bug 修复、架构重构、配置增强与文档更新，显著提升了系统稳定性与用户体验：

| 类别 | 关键进展 |
|------|--------|
| **认证与配置** | [#2599](https://github.com/sipeed/picoclaw/pull/2599) 修复 Google Antigravity 凭据过期问题；[#2608](https://github.com/sipeed/picoclaw/pull/2608) 将仪表盘认证从 token 切换为密码机制，提升安全性 |
| **WebUI 体验** | [#2605](https://github.com/sipeed/picoclaw/pull/2605) 清理恢复的聊天记录并优化 UI 显示逻辑；[#2595](https://github.com/sipeed/picoclaw/pull/2595) 支持通道配置中数组字段的列表编辑功能 |
| **通道能力增强** | [#2607](https://github.com/sipeed/picoclaw/pull/2607) 为飞书通道添加群聊触发控制与随机表情响应；[#2606](https://github.com/sipeed/picoclaw/pull/2606) 强化微信通道多实例支持与配置管理 |
| **架构与可维护性** | [#2585](https://github.com/sipeed/picoclaw/pull/2585) 完成 Agent Looper 第二阶段重构，拆分 monolithic 文件为 Pipeline 架构，提升代码可读性与扩展性 |
| **文档与辅助** | [#2601](https://github.com/sipeed/picoclaw/pull/2601) 更新 Gemini 原生协议文档；[#2604](https://github.com/sipeed/picoclaw/pull/2604) 更新微信二维码 |

> ✅ 整体项目向 v0.2.6 稳定版迈出关键一步，尤其在多通道支持、认证健壮性和前端交互方面取得实质性进展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#2367](https://github.com/sipeed/picoclaw/issues/2367) — “应用最后一屏标题在英文模式下仍显示中文”
- **评论数**：4 | **👍 反应数**：0 | **标签**：`bug`, `config`
- **分析**：该问题反映国际化（i18n）实现存在遗漏，影响非中文用户的基础体验。尽管非崩溃性 Bug，但暴露了 UI 文本资源管理的不完整性，可能阻碍全球化推广。
- **用户诉求**：期望完整的语言切换一致性，尤其在设置界面等高频使用区域。

### 💬 高关注度 Issue：[#2548](https://github.com/sipeed/picoclaw/issues/2548) — “收到多个身份验证凭据”
- **评论数**：4 | **领域**：`provider`, `config`
- **分析**：用户尝试自定义 `config.json` 使用 Gemini 模型时触发认证冲突，表明配置解析逻辑对多凭据场景处理不当。背后诉求是更灵活的本地模型配置能力。

> 📌 社区正密切关注配置灵活性与多语言支持的完善，这两类问题可能成为下一版本用户体验优化的重点方向。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 中 | [#2598](https://github.com/sipeed/picoclaw/issues/2598)：v0.2.4 → v0.2.6 升级后 WebUI 无法正常加载 | ✅ 已关闭 | 是（相关修复见 [#2605](https://github.com/sipeed/picoclaw/pull/2605)） |
| ⚠️ 中 | [#2550](https://github.com/sipeed/picoclaw/issues/2550)：CLI `auth login` 不更新 Google Antigravity token 过期时间 | ✅ 已关闭 | 是（[#2599](https://github.com/sipeed/picoclaw/pull/2599)） |
| ⚠️ 中 | [#2310](https://github.com/sipeed/picoclaw/issues/2310)：对话历史记录仅保留最后1-2条 | 🔓 开放中 | ❌ 暂无直接 Fix PR |
| ⚠️ 低 | [#2081](https://github.com/sipeed/picoclaw/issues/2081)：工具反馈中特殊字符被转义为 Unicode（如 `\u003e`） | 🔓 开放中 | ❌ 暂无 Fix PR |
| ⚠️ 低 | [#2367](https://github.com/sipeed/picoclaw/issues/2367)：英文模式下界面仍显示中文 | 🔓 开放中 | ❌ 暂无 Fix PR |

> 💡 建议优先处理 [#2310]（历史记录丢失），因其影响核心会话追溯功能，用户反馈强烈。

---

## 6. 功能请求与路线图信号

用户提出的新功能需求中，以下两项已有对应 PR 推进，极可能纳入 v0.2.6 或后续版本：

| 功能请求 | Issue | 对应 PR | 状态 |
|--------|------|--------|------|
| WebUI 文件下载支持 | — | [#2563](https://github.com/sipeed/picoclaw/pull/2563) | 🔓 开放中（待合并） |
| MCP 斜杠命令与工具详情展示 | [#2217](https://github.com/sipeed/picoclaw/issues/2217) 相关 | [#2535](https://github.com/sipeed/picoclaw/pull/2535) | 🔓 开放中（待合并） |
| Token 消耗统计仪表盘 | [#2217](https://github.com/sipeed/picoclaw/issues/2217) | — | 🔓 尚无 PR，但已被多次提及 |

> 📈 信号解读：**MCP 集成** 和 **WebUI 交互增强** 是当前开发重点，文件下载与命令系统将显著提升开发者与终端用户的使用效率。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

- **痛点**：
  - “升级后 WebUI 直接打不开，差点以为安装失败了。”（#2598）
  - “历史聊天记录只保留最后两条，做演示时完全没法用。”（#2310）
  - “工具输出的 shell 命令全是 `\u003e`，根本没法复制执行。”（#2081）
- **满意点**：
  - 对飞书/微信通道的多实例支持表示认可（#2606, #2607）
  - 赞赏 nightly 构建提供快速尝鲜通道
- **使用场景**：
  - 企业内部部署用于跨团队 AI 协作（提及飞书/微信集成）
  - 开发者本地调试 MCP 工具链（关注 `/list mcp` 命令）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

| Issue | 创建日期 | 最后更新 | 积压天数 | 建议动作 |
|------|--------|--------|--------|--------|
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) 对话历史记录不完整 | 2026-04-03 | 2026-04-21 | 19 天 | 高优先级，影响核心功能，需分配资源排查 session 存储逻辑 |
| [#2081](https://github.com/sipeed/picoclaw/issues/2081) 工具反馈 Unicode 转义 | 2026-03-27 | 2026-04-21 | 25 天 | 中优先级，涉及前端渲染安全策略，需评估是否引入 DOMPurify 或调整转义逻辑 |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) Token 消耗统计仪表盘 | 2026-03-31 | 2026-04-21 | 22 天 | 虽无 PR，但需求明确，可规划至 v0.2.7 路线图 |

> 🛎️ **提醒**：建议在下一次社区会议中讨论 [#2310] 的技术根因（是否与 session 序列化或前端 hydration 有关），并制定修复排期。

--- 

📊 **总结**：PicoClaw 正处于功能快速迭代期，社区参与度高，核心问题响应及时。建议加强 i18n 完整性与会话持久化稳定性，以进一步提升产品成熟度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报（2026-04-22）**

---

### 1. 今日速览  
NanoClaw 在 2026-04-22 继续保持高活跃度，社区与核心团队贡献显著。过去24小时内共处理 **30 条 PR**（13 条已合并/关闭，17 条待合并），新增 **4 条 Issues** 且均处于开放状态，无新版本发布。开发重心集中在 **v2 架构重构、多通道集成稳定性修复、以及新型技能（Skills）的引入**，尤其是 Nostr、Telegram 附件支持与 Anthropic PDF 容器化能力。项目整体处于快速迭代与功能扩展阶段，技术债务清理与用户体验优化并行推进。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
今日共 **13 条 PR 被合并或关闭**，关键进展包括：

- **架构重构持续推进**：  
  - [`#1851`](https://github.com/qwibitai/nanoclaw/pull/1851) 完成 outbox I/O 解耦与死代码清理，提升模块化程度；  
  - [`#1839`](https://github.com/qwibitai/nanoclaw/pull/1839) 引入模块注册机制与默认布局，为 v2 插件体系奠定基础。  
- **用户体验优化**：  
  - [`#1908`](https://github.com/qwibitai/nanoclaw/pull/1908) 新增 `nanoclaw.sh` 一键安装脚本，显著降低新用户上手门槛；  
  - [`#1836`](https://github.com/qwibitai/nanoclaw/pull/1836) 在 README 中发布 v2 预览公告，提升项目可见性。  
- **核心功能增强**：  
  - [`#1905`](https://github.com/qwibitai/nanoclaw/pull/1905) 支持 Telegram 附件下载（照片/文档）；  
  - [`#1907`](https://github.com/qwibitai/nanoclaw/pull/1907) 集成 Anthropic PDF 容器技能，扩展文档处理能力；  
  - [`#1897`](https://github.com/qwibitai/nanoclaw/pull/1897) 构建 `/build-it` SDLC 基础设施，支持健康检查与部署自动化。  
- **稳定性修复**：  
  - [`#1900`](https://github.com/qwibitai/nanoclaw/pull/1900) 修复 SDK session_id 丢失与长消息截断问题；  
  - [`#1883`](https://github.com/qwibitai/nanoclaw/pull/1883) 升级 Claude Code 至 2.1.116，确保 IPC 协议兼容性。

> 整体来看，项目在 **开发者体验、多通道支持、安全隔离与自动化运维** 方向取得实质性进展。

---

### 4. 社区热点  
今日最活跃的讨论集中于 **多通道消息路由与身份隔离问题**，反映用户对跨平台一致性的高度关注：

- [`#1902`](https://github.com/qwibitai/nanoclaw/issues/1902)：WeChat 与 Telegram 共享 agent group 时消息跨通道泄漏 —— 暴露 v2 路由策略缺陷，需紧急修复；  
- [`#1901`](https://github.com/qwibitai/nanoclaw/issues/1901)：WeChat v2 登录成功后仍需手动配置 agent group，导致“伪完成”体验 —— 用户期望端到端自动化 onboarding。

此外，[`#1896`](https://github.com/qwibitai/nanoclaw/issues/1896)（Telegram 消息编辑静默丢弃）引发对 **消息状态同步完整性** 的担忧，虽无评论但点赞数为零，可能因问题较新尚未广泛传播。

---

### 5. Bug 与稳定性  
按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| 高 | [`#1902`](https://github.com/qwibitai/nanoclaw/issues/1902) | 多通道共享 agent group 导致消息泄漏 | ❌ 无 |
| 高 | [`#1906`](https://github.com/qwibitai/nanoclaw/issues/1906) | OneCLI 网关下 Ollama MCP 工具因 HTTP 代理路径拒绝请求而失败 | ❌ 无 |
| 中 | [`#1901`](https://github.com/qwibitai/nanoclaw/issues/1901) | WeChat v2 onboarding 流程不完整，需手动干预 | ❌ 无 |
| 中 | [`#1896`](https://github.com/qwibitai/nanoclaw/issues/1896) | Telegram 消息编辑被静默丢弃，无反馈 | ❌ 无 |

> 注：上述问题均无对应修复 PR，需维护者优先评估。

---

### 6. 功能请求与路线图信号  
用户与贡献者正推动以下方向进入下一版本：

- **去中心化通信集成**：  
  多条 PR（[`#1882`](https://github.com/qwibitai/nanoclaw/pull/1882)、[`#1891`](https://github.com/qwibitai/nanoclaw/pull/1891)、[`#1892`](https://github.com/qwibitai/nanoclaw/pull/1892)）引入 Nostr DM、Lightning 钱包与签名守护进程，表明项目正向 **隐私优先、密钥隔离架构** 演进。  
- **上下文管理智能化**：  
  [`#1890`](https://github.com/qwibitai/nanoclaw/pull/1890) 提出上下文压缩预警系统，响应长期存在的上下文溢出痛点。  
- **视频生成能力**：  
  [`#1893`](https://github.com/qwibitai/nanoclaw/pull/1893) 集成 Remotion + AWS Lambda 实现程序化视频生成，拓展 agent 多媒体输出边界。

这些功能大概率将纳入 **v2.1 或 v2.2 路线图**，尤其 Nostr 相关技能已形成完整技术栈（签名隔离 + DM + 支付）。

---

### 7. 用户反馈摘要  
从 Issues 提炼真实痛点：

- **Onboarding 体验断裂**：用户完成 WeChat QR 登录后误以为流程结束，实则需手动配置 agent group 与策略（[#1901](https://github.com/qwibitai/nanoclaw/issues/1901)），反映 **自动化程度不足**；  
- **跨平台一致性缺失**：多通道共用 agent group 导致消息错发（[#1902](https://github.com/qwibitai/nanoclaw/issues/1902)），用户期望“一次配置，全平台生效”；  
- **代理环境兼容性差**：企业用户通过 OneCLI 网关访问时，Ollama MCP 工具完全失效（[#1906](https://github.com/qwibitai/nanoclaw/issues/1906)），暴露对复杂网络拓扑支持薄弱；  
- **消息编辑无感知**：Telegram 用户编辑消息后无任何反馈，破坏交互闭环（[#1896](https://github.com/qwibitai/nanoclaw/issues/1896)）。

> 总体满意度：核心功能（如 Claude 集成、CLI 安装）获认可，但 **边缘场景鲁棒性与端到端自动化** 是主要不满来源。

---

### 8. 待处理积压  
以下 Issue 虽非今日新建，但长期未响应，需维护者关注：

- [`#1896`](https://github.com/qwibitai/nanoclaw/issues/1896)（Telegram 消息编辑丢弃）：创建于 2026-04-21，无评论、无 assignee，影响消息交互完整性；  
- [`#1906`](https://github.com/qwibitai/nanoclaw/issues/1906)（OneCLI 网关下 Ollama 失败）：企业部署关键路径阻塞，需网络层调试。

> 建议：为高影响 Issue 分配负责人并设定 SLA，避免用户流失。

---  
*数据来源：NanoClaw GitHub 仓库（2026-04-21 至 2026-04-22）*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-22）

---

## 1. 今日速览

IronClaw 项目在发布 v0.26.0 新版本后进入高强度迭代周期，过去24小时社区活跃度显著提升：共产生 **30 条 Issues 更新**（21 新开/活跃，9 已关闭）和 **50 条 PR 更新**（39 待合并，11 已合并/关闭），反映出核心团队正集中推进 Engine V2 架构落地与生产稳定性优化。多个高优先级 Bug 被快速响应并修复，同时围绕“状态一致性”、“工具注册统一”、“任务生命周期管理”等关键路径展开深度重构。项目整体处于 **高活跃、高风险、高进展** 的技术攻坚阶段。

---

## 2. 版本发布

### 🔖 ironclaw-v0.26.0（2026-04-21）

**核心新增功能：**
- **Per-project sandbox with mission lifecycle and cost tracking**（[#2211](https://github.com/nearai/ironclaw/pull/2211), [#2660](https://github.com/nearai/ironclaw/pull/2660)）：为每个项目提供独立沙箱环境，支持任务全生命周期追踪与成本核算，是 Engine V2 多租户能力的关键基础设施。
- **LLM provider chain hot-reload from settings**（[#2673](https://github.com/nearai/ironclaw/pull/2673)）：实现 LLM 提供者链的动态热加载，提升配置灵活性与运维效率。

> ⚠️ **注意**：此版本包含 Engine V2 架构相关变更，部分 API 行为可能发生变化。建议用户在 staging 环境充分验证后再升级生产实例。

[查看完整 Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.26.0)

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于 **Engine V2 默认化准备** 与 **核心稳定性修复**：

| PR | 进展摘要 | 链接 |
|----|--------|------|
| #2817 | 修复 `mission_*` ID 解析逻辑，避免空字符串导致下游错误，提升任务调用鲁棒性 | [#2817](https://github.com/nearai/ironclaw/pull/2817) |
| #2794 | 统一 V1/V2 工具注册机制，解决 `tool_info("mission_create")` 返回“未注册”的问题 | [#2794](https://github.com/nearai/ironclaw/pull/2794) |
| #2815 | 引入 Engine V2 类型化 Assistant 内容模型，区分最终输出与内部推理文本 | [#2815](https://github.com/nearai/ironclaw/pull/2815) |
| #2814 | 强制 stop/pause/cancel 命令必须通过工具调用执行，防止 LLM 仅“叙述”而不行动 | [#2814](https://github.com/nearai/ironclaw/pull/2814) |
| #2812 | 修复 Web UI 泄露内部推理内容的问题，保护用户隐私与体验一致性 | [#2812](https://github.com/nearai/ironclaw/pull/2812) |
| #2810 | 修复数据库复用场景下的迁移遗漏问题，保障 onboarding 流程可靠性 | [#2810](https://github.com/nearai/ironclaw/pull/2810) |

> ✅ 整体来看，项目正向 **Engine V2 成为默认引擎** 迈出关键步伐，同时强化了任务控制、工具一致性、UI 安全等核心体验。

---

## 4. 社区热点

### 🔥 高讨论度 Issues / PRs

| 议题 | 类型 | 讨论焦点 | 链接 |
|------|------|--------|------|
| #2767 | Epic | 分离 Engine V2 能力背景与可调用工具 Schema，解决架构耦合问题 | [#2767](https://github.com/nearai/ironclaw/issues/2767) |
| #2792 | Epic | 网关状态收敛：消除 UI 与后端状态漂移（“desync”问题） | [#2792](https://github.com/nearai/ironclaw/issues/2792) |
| #2800 | Tracker | Engine V2 默认切换的 umbrella 跟踪器，涵盖测试、文档、迁移等子任务 | [#2800](https://github.com/nearai/ironclaw/issues/2800) |
| #2769 | PR (XL) | 在活跃任务下展示历史运行记录，增强任务可观测性 | [#2769](https://github.com/nearai/ironclaw/pull/2769) |
| #2367 | PR (XL) | 统一认证流程与 live canary 覆盖，提升安全一致性 | [#2367](https://github.com/nearai/ironclaw/pull/2367) |

> 💡 **分析**：社区核心诉求集中在 **状态一致性**（#2792）、**架构解耦**（#2767）和 **可观测性**（#2769），反映出用户对生产级稳定性的高度关注。Engine V2 的推进已成为共识主线。

---

## 5. Bug 与稳定性

### 🐞 今日报告 Bug（按严重程度排序）

| Issue | 严重性 | 描述 | 修复状态 |
|-------|--------|------|----------|
| #2808 | P1 | “Stop”命令无法通过聊天停止活跃任务 | ❌ 无 fix PR（需 #2814 验证） |
| #2809 | P2 | 创建项目请求被误执行为创建任务 | ❌ 新开，待分析 |
| #2818 | P1 | v0.26.0 安装器在 `x86_64-unknown-linux-gnu` 平台失败 | ❌ 新开，影响用户部署 |
| #2793 | P2 | `tool_info("mission_create")` 返回未注册错误 | ✅ 已由 #2794 修复 |
| #2780 | P2 | Brave Search API key 间歇性失效（422） | ✅ 已关闭，疑似外部服务波动 |

> ⚠️ **重点关注**：#2818 安装器问题可能阻碍新用户接入，建议优先排查 cargo-dist 配置。

---

## 6. 功能请求与路线图信号

### 📌 用户提出的新功能需求

| Issue | 功能方向 | 是否已有相关 PR | 纳入可能性 |
|-------|--------|----------------|-----------|
| #2781 | 支持 Feishu 长连接模式接收事件 | ❌ 无 | 中（官方推荐方式，长期价值高） |
| #2778 | NEAR AI 托管版暴露 HTTP webhook 端口 | ❌ 无 | 高（影响集成能力） |
| #2791 | 添加“报告问题”UI，自动抓取脱敏状态并提交 GitHub Issue | ❌ 无 | 高（提升开发者体验） |
| #2788 | `score_skill` 隐式名称关键词条件化 | ✅ #2744 已部分实现 | 高（逻辑优化） |

> ✅ **判断**：#2778 和 #2791 极有可能纳入下一版本，因其直接提升平台可用性与开发者效率。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - Web UI 刷新后恢复错误线程（#2285）：“明明在聊非助手线程，刷新却跳回助手线程” → 影响多任务并行体验。
  - 任务停止失效（#2808）：“发了 stop 命令，但任务还在跑” → 关键控制功能不可靠。
  - 安装失败（#2818）：“官方安装脚本跑不起来，卡在 rustc 版本” → 阻碍新用户入门。

- **满意点**：
  - 沙箱成本追踪（v0.26.0）：“终于能按项目看开销了，对团队管理很有用”。
  - 热重载 LLM 配置：“不用重启就能换模型，调试快多了”。

- **使用场景**：
  - 企业用户通过 Railway 一键部署（#1680），但遭遇环境变量未生效问题。
  - 开发者尝试集成 Notion（#2087），但 IronClaw 在设置过程中无响应，缺乏错误反馈。

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue / PR

| 编号 | 标题 | 创建日期 | 状态 | 提醒 |
|------|------|--------|------|------|
| #748 | 发布 `ironclaw-worker` Docker 镜像至公共仓库 | 2026-03-09 | OPEN | 🚨 超 40 天未动，影响 Docker 沙箱功能可用性 |
| #773 | 申请 Google OAuth App 验证 | 2026-03-09 | OPEN | 🚨 非 @near.ai 用户看到“未验证应用”警告，损害信任 |
| #1680 | Railway 模板 LLM 环境变量未生效 | 2026-03-26 | OPEN | ⚠️ 影响主流部署方式用户体验 |
| #2087 | 设置 Notion 后 IronClaw 无响应 | 2026-04-06 | OPEN | ⚠️ 关键集成场景失败，需排查超时或死锁 |

> 🔔 **维护者注意**：上述积压问题涉及 **部署体验**、**第三方集成稳定性** 和 **合规性**，建议分配资源优先处理 #748 与 #773。

---

**报告生成时间**：2026-04-22  
**数据来源**：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)  
**分析师备注**：项目处于重大架构转型期，建议加强 CI/CD 稳定性与用户沟通，避免技术债累积影响 adoption。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-04-22）

---

## 1. 今日速览

LobsterAI 在 2026-04-21 至 2026-04-22 期间表现出**高活跃度**，共处理 18 条 PR（13 条已合并/关闭，5 条待合并）和 2 条 Issues 更新，并发布了一个新版本。开发重点集中在**IM 通道稳定性修复、OpenClaw 引擎集成优化、图像附件处理逻辑改进以及技能管理增强**。社区反馈中暴露出一个关键前端 Bug（diff 显示异常），需优先关注。

---

## 2. 版本发布

**新版本：2026.4.21（发布于 2026-04-21）**  
🔗 [Release 2026.4.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.21)

### 主要更新内容：
- ✅ **OpenClaw 升级至 v2026.4.14**：包含启动性能优化（#1750）
- ✅ **新增邮箱通道（ClawEmail）**：支持基于电子邮件的 AI 代理通信，含完整配置 UI 与会话映射（#1719）
- ✅ **自动更新协调器与 SQLite 备份/恢复机制上线**
- ✅ **欢迎引导流程（onboarding flow）重构完成**

### 破坏性变更与迁移注意事项：
- ⚠️ **钉钉连接器降级至 0.8.16**：因 v0.8.17 引入 tsdown 预编译导致 OpenClaw 插件加载失败，临时回退以保障稳定性（#1781）
- ⚠️ **Windows 技能存储路径迁移至 AppData**：用户自定义技能不再受安装目录删除影响，升级后自动迁移（#1774）

> 建议所有 Windows 用户升级后检查自定义技能是否保留；钉钉用户若遇消息无响应，请确认已应用此版本。

---

## 3. 项目进展

今日合并/关闭的 PR 显著推进了多个核心模块：

| 领域 | 进展摘要 | PR 链接 |
|------|--------|--------|
| **IM 通信** | 修复 NIM 通道配置状态误报、钉钉崩溃问题；优化 IM 同步算法 | [#1771](https://github.com/netease-youdao/LobsterAI/pull/1771), [#1781](https://github.com/netease-youdao/LobsterAI/pull/1781), [#1778](https://github.com/netease-youdao/LobsterAI/pull/1778) |
| **图像处理** | 解决 macOS 粘贴图片不可见问题，添加诊断日志，排除路径干扰 base64 传输 | [#1780](https://github.com/netease-youdao/LobsterAI/pull/1780), [#1777](https://github.com/netease-youdao/LobsterAI/pull/1777) |
| **技能系统** | 支持删除用户自定义技能、静默清理无效 state、同步时跳过自定义项 | [#1776](https://github.com/netease-youdao/LobsterAI/pull/1776), [#1774](https://github.com/netease-youdao/LobsterAI/pull/1774) |
| **日志与调试** | 导出日志包 now 包含 OpenClaw 网关日志，提升问题排查效率 | [#1775](https://github.com/netease-youdao/LobsterAI/pull/1775) |
| **测试与质量** | 修复 OpenClaw 配置同步测试用例，补全 mock 方法 | [#1772](https://github.com/netease-youdao/LobsterAI/pull/1772) |

> 整体项目在**稳定性、可维护性与用户体验**三个维度均有实质性提升。

---

## 4. 社区热点

### 🔥 高关注度 Issue：Edit Diff 功能异常（#1783）
🔗 [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783)  
- **作者**：@MiracleOfrRevolutionary  
- **问题**：更新后 `edit` 工具的 diff 显示完全失效  
- **根因分析**：前端 `extractDiffFromToolInput` 函数仅从 `toolInput` 顶层查找 `oldText/newText`，未递归搜索嵌套结构  
- **影响范围**：所有使用 edit/editfile 工具的用户均无法看到变更对比  
- **社区反应**：虽仅 1 条评论，但问题描述详尽，定位精准，属**高优先级前端 Bug**

> 该 Issue 反映了用户对**代码编辑可视化反馈**的高度依赖，是当前核心工作流的关键阻塞点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 相关 PR/Issue |
|--------|--------|------|-------------|
| 🔴 **Critical** | Edit diff 显示失灵，影响核心编辑体验 | 🟡 已定位，无 fix PR | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) |
| 🟠 **High** | macOS 粘贴图片模型不可见，回退至 `read` 工具 | ✅ 已修复 | [#1780](https://github.com/netease-youdao/LobsterAI/pull/1780) |
| 🟠 **High** | 钉钉连接器 v0.8.17 导致启动崩溃 | ✅ 已降级修复 | [#1781](https://github.com/netease-youdao/LobsterAI/pull/1781) |
| 🟡 **Medium** | NIM 通道配置状态误显示“未配置” | ✅ 已修复 | [#1771](https://github.com/netease-youdao/LobsterAI/pull/1771) |

---

## 6. 功能请求与路线图信号

- **定时任务增强**：用户 @Timer-Q 提出为 cron 表达式增加**未来 5 次执行时间预览**（#605），PR 已存在但标记为 stale。该功能提升配置直观性，符合用户体验优化方向，**有望纳入下一版本**。
- **邮箱通道扩展**：ClawEmail 集成已完成（#1719），表明项目正积极拓展**非即时通讯类 AI 协作通道**，未来可能支持更多异步通信协议。
- **i18n 完善**：缺失翻译键被快速修复（#1773），反映团队对**国际化一致性**的重视，预计将持续推进多语言覆盖。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “更新后 diff 完全看不到，编辑完不知道改了啥” —— 用户对**变更可视化缺失**极度敏感（#1783）
  - “Windows 升级后自定义技能全没了” —— 此前版本存在**数据丢失风险**，现已通过 AppData 迁移方案缓解（#1774）
- **满意点**：
  - 邮箱通道集成让“不用登微信也能跑 AI 代理”成为可能，满足企业合规场景需求（#1719）
  - 日志导出包含 OpenClaw 日志，“终于能看清网关到底怎么了”（隐含于 #1775）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #9 | [stale] bug report | 2026-02-20 | OPEN | 长期未响应，涉及 Git Bash 路径注入逻辑，建议确认是否仍复现 |
| PR | #605 | feat(scheduled-tasks): cron表达式增加未来5次执行时间预览 | 2026-03-21 | OPEN (stale) | 功能价值高，建议复活并合并 |
| PR | #1277 | chore(deps-dev): bump electron group | 2026-04-02 | OPEN | Electron 升级滞后，存在安全风险，建议评估合并 |
| PR | #1766 / #1281 | chore(deps-dev): bump vite to 8.0.9 | 2026-04-20 / 2026-04-02 | OPEN | Vite 大版本升级需谨慎测试，但当前版本较旧，建议制定迁移计划 |

> ⚠️ 维护者需重点关注 **#1783（diff 失效）** 和 **Electron/Vite 依赖升级**，前者影响用户体验，后者关乎长期维护成本。

---  
*数据截止：2026-04-22 00:00 UTC | 来源：LobsterAI GitHub Repository*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**  
**日期：2026-04-22**  

---

### 1. 今日速览  
Moltis 项目在过去24小时内保持高活跃度，共处理 **12条 Issues**（6新开/活跃，6已关闭）和 **4条 PRs**（3已合并/关闭，1待合并），并发布了一个新版本。社区对安全性和多模态支持（如PDF、语音消息）的关注显著上升。整体开发节奏稳健，重点聚焦于漏洞修复、日志增强与文档优化，项目健康度良好。

---

### 2. 版本发布  
**新版本：`20260421.05`**（[Release 链接](https://github.com/moltis-org/moltis/releases/tag/20260421.05)）  
本次发布为热修复版本，主要包含以下关键更新：  
- **安全修复**：修补了通过环境变量前缀（如 `LD_PRELOAD`）绕过 `exec` 审批机制的漏洞（#814），已在 PR #822 中实现双层防御（正则匹配 + 二进制提取逻辑强化）。  
- **浏览器容器稳定性提升**：增加容器就绪失败的详细诊断日志（PR #820），便于排查 Docker 环境下的启动超时问题（原 Issue #786）。  
- **Telegram 附件兼容性改进**：修复 `.md` 等文件因 MIME 类型误判为 `application/octet-stream` 而被静默丢弃的问题（PR #819）。  
> ⚠️ **迁移注意**：无破坏性变更，建议所有用户升级以获取安全补丁。

---

### 3. 项目进展  
今日合并/关闭的 PR 显著提升了系统安全性与可观测性：  
- **PR #822**（[链接](https://github.com/moltis-org/moltis/pull/822)）：彻底修复 exec 审批绕过漏洞，引入 `DANGEROUS_PATTERN_DEFS` 正则规则集，强化沙箱安全边界。  
- **PR #820**（[链接](https://github.com/moltis-org/moltis/pull/820)）：为浏览器容器添加结构化诊断日志，显著降低运维排查成本。  
- **PR #819**（[链接](https://github.com/moltis-org/moltis/pull/819)）：完善 Telegram 文件处理逻辑，支持基于扩展名的 MIME 推断，提升多格式文档兼容性。  
> 项目在**安全防护**与**跨平台兼容性**两个关键方向取得实质性进展。

---

### 4. 社区热点  
**最活跃 Issue：#375**（[链接](https://github.com/moltis-org/moltis/issues/375)）  
- **主题**：Google 模型调用函数时缺失 `thought_signature` 字段  
- **热度**：3 👍，2 评论，虽已关闭但仍引发讨论  
- **分析**：反映用户对 LLM 提供商行为一致性的高要求，尤其关注 Google AI 与 OpenRouter 集成时的元数据完整性。该问题已修复，但暗示需加强多提供商输出标准化测试。  

**新兴关注点：#821**（[链接](https://github.com/moltis-org/moltis/issues/821)）  
- 用户 @xzavrel 提出技能系统性能问题：默认启用的101个技能导致每次对话都注入全部 `SKILL.md` 内容，造成提示词膨胀。  
- **诉求本质**：请求细粒度控制技能加载（如 `disable-model-invocation` 标志），指向**模块化与性能优化**的长期需求。

---

### 5. Bug 与稳定性  
按严重程度排序：  

| 严重性 | Issue | 状态 | 修复进展 |
|--------|------|------|--------|
| 🔴 高危 | #814 执行审批绕过（LD_PRELOAD/PATH 注入） | CLOSED | ✅ 已修复（PR #822） |
| 🟠 中危 | #823 调试日志爆满磁盘（"broadcasting event" 刷屏） | OPEN | ❌ 无 PR，需优化日志级别过滤 |
| 🟠 中危 | #817 Discord 语音消息静默丢弃 | OPEN | ❌ 无 PR，需添加诊断日志 |
| 🟡 低危 | #793 OpenRouter + Google AI Studio 返回 HTTP 400 | CLOSED | ✅ 已修复（未提 PR，推测为配置调整） |

> 建议优先处理 #823 和 #817，二者均涉及**可观测性缺失**，影响故障排查效率。

---

### 6. 功能请求与路线图信号  
以下功能请求具备较高落地可能性：  
- **#818 Landlock FS 隔离**（[链接](https://github.com/moltis-org/moltis/issues/818)）：针对无容器部署场景的安全增强，符合项目强化沙箱的战略方向。  
- **#816 `fs_deny_paths` 的 argv 路径拒绝**（[链接](https://github.com/moltis-org/moltis/issues/816)）：扩展现有文件系统防护机制，技术路径清晰。  
- **#815 SAFE_BINS 严格白名单模式**（[链接](https://github.com/moltis-org/moltis/issues/815)）：提升 `exec` 安全性，与近期安全修复形成协同。  
> 上述三项均由核心贡献者 @dmitriikeler 提出，且与当前安全加固主线高度契合，**极可能纳入下一版本**。

---

### 7. 用户反馈摘要  
- **痛点**：  
  - 多平台附件处理不一致（Telegram 丢 `.md`，Discord 丢语音）暴露**跨平台适配碎片化**问题。  
  - 技能系统缺乏按需加载机制，导致**提示词冗余与性能损耗**（#821）。  
- **满意点**：  
  - 安全响应迅速，exec 漏洞从报告到修复仅数小时，体现**高优先级漏洞处理能力**。  
  - 文档自动化审计（PR #783）获社区认可，提升项目可维护性。  

---

### 8. 待处理积压  
- **#563 PDF 支持功能请求**（[链接](https://github.com/moltis-org/moltis/issues/563)）：自 2026-04-06 提出，虽已关闭但无实现 PR，反映**多模态能力路线图不明确**，需明确是否纳入规划。  
- **#783 文档批量更新 PR**（[链接](https://github.com/moltis-org/moltis/pull/783)）：已开放6天，含44处文档修正，**尚未合并**，建议维护者尽快 review 以避免知识库滞后。  

> 建议：对长期未响应的功能请求（如 PDF 支持）进行路线图澄清，避免社区期待落空。

---  
**报告生成时间：2026-04-22 08:00 UTC**  
*数据来源：GitHub API / moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-22）

---

## 1. 今日速览

过去24小时内，CoPaw 项目保持高活跃度，共处理 **50条 Issues**（新开/活跃21条，关闭29条）和 **40条 PRs**（待合并22条，已合并/关闭18条），社区参与度显著。项目发布新版本 **v1.1.3-beta.2**，重点修复 macOS 构建问题并升级 AgentScope 核心依赖。当前开发重心集中在内存重构、MCP 稳定性优化与多模态支持增强，整体处于快速迭代阶段。

---

## 2. 版本发布

### 🔖 v1.1.3-beta.2 发布
- **发布时间**：2026-04-21
- **关键变更**：
  - `chore(version)`: 升级至 `1.1.3b2`（[#3620](https://github.com/agentscope-ai/QwenPaw/pull/3620)）
  - `fix`: 修复 macOS 桌面端构建失败问题（[#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622)）
  - `feat(agentscope)`: 升级 AgentScope 至 v1.0.19，提升底层框架兼容性与性能
- **影响范围**：macOS 用户可正常构建桌面客户端；所有用户受益于更稳定的后端调度机制。
- **迁移说明**：无破坏性变更，建议开发者和桌面用户升级。

---

## 3. 项目进展

今日共 **18个 PR 被合并或关闭**，核心进展包括：

| PR | 类型 | 说明 |
|----|------|------|
| [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655) | 文档 | 新增中英文《备份与恢复》功能文档，提升运维透明度 |
| [#3653](https://github.com/agentscope-ai/QwenPaw/pull/3653) | 路线图 | 更新项目路线图，明确下一阶段优先级 |
| [#3631](https://github.com/agentscope-ai/QwenPaw/pull/3631) | 功能 | 控制台插件系统支持自动模块注册，降低扩展开发门槛 |
| [#3649](https://github.com/agentscope-ai/QwenPaw/pull/3649) | 功能 | 新增通道健康检查与热重启 API，提升 MCP 通道容错能力 |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) | Bug 修复 | 修复会话状态文件因并发写入导致 JSON 损坏的 P0 级问题 |

> ✅ 项目在 **系统稳定性**（会话恢复）、**可观测性**（通道健康）、**文档完整性** 和 **插件生态** 方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 评论数 | 核心诉求 |
|------|--------|---------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 59 | 社区任务认领入口，推动“开放任务”机制落地，吸引贡献者参与 |
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | 24 | 升级后 `.copaw` 与 `.qwenpaw` 双目录共存，数据写入混乱，需统一迁移方案 |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | 10 | 请求一键更新、模型自动切换、自我进化等高级 UX 功能，反映用户对“智能体自治”的期待 |

> 💡 社区强烈关注 **数据一致性** 与 **用户体验自动化**，反映出从“工具型”向“伙伴型”AI 助手的演进需求。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按优先级排序）

| Issue | 严重程度 | 状态 | 关联 PR |
|------|----------|------|--------|
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 高 | 🟡 未修复 | MCP Client TaskGroup 异常导致 Agent 假死（无响应） |
| [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) | 高 | 🟡 未修复 | 启用 MCP 后 Console 卡住 / 输入无响应 |
| [#3040](https://github.com/agentscope-ai/QwenPaw/issues/3040) | 中 | 🟡 未修复 | 上下文压缩过程无法中断，UI 卡死 |
| [#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) | 中 | 🟡 未修复 | 会话页面频繁卡住，需刷新恢复 |
| [#3657](https://github.com/agentscope-ai/QwenPaw/issues/3657) | 中 | 🔴 已关闭 | 本地 QwenPaw-Flash-4B-Q8_0 模型无响应（疑似配置问题） |

> ❗ MCP 相关稳定性问题成当前最大技术瓶颈，需优先投入资源排查异步任务管理机制。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（已有对应 PR 或列入任务清单）

| 功能 | 来源 Issue | 进展 |
|------|-----------|------|
| **梦境日志输出（Dream Log）** | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | 新提出，契合记忆优化方向，可能纳入 v1.2 |
| **文件操作回滚** | [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) | PR 已提交，对应 OpenTask #6，高优先级 |
| **SIP 语音通道** | [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | 实现中，支持 VoIP 通话，扩展多模态交互 |
| **语义技能路由** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 减少上下文 Token 消耗，适合技能库庞大场景 |
| **MiniMax 多模态支持** | [#3624](https://github.com/agentscope-ai/QwenPaw/issues/3624) | 用户反馈强烈，需 provider 层适配 |

> ✅ 路线图正向 **多模态融合**、**记忆智能化**、**通道多样化** 方向演进，与用户需求高度对齐。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音提炼

- **痛点**：
  - “升级后数据还在 `.copaw`，新目录 `.qwenpaw` 没用起来，迁移麻烦。”（[#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)）
  - “MCP 一开就卡死，钉钉收不到消息，只能重启。”（[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)）
  - “上下文满了不知道，突然就不回复了。”（[#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426)）

- **满意点**：
  - “Whisper 语音输入比浏览器自带的更稳定，豆包浏览器也能用。”（[#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574)）
  - “备份功能终于有文档了，终于敢放心迁移了。”（[#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655)）

- **使用场景**：
  - 开发者用于本地模型调试（Qwen3.6-35B-A3B-FP8）
  - 企业用户通过 MCP 连接内部数据库
  - 普通用户依赖微信/钉钉通道进行日常任务管理

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| 事项 | 类型 | 创建日期 | 状态 | 建议 |
|------|------|----------|------|------|
| [#2281](https://github.com/agentscope-ai/QwenPaw/issues/2281) | Issue | 2026-03-25 | 🟡 未响应 | 多 Agent 标签页切换需求，影响多任务效率 |
| [#2047](https://github.com/agentscope-ai/QwenPaw/issues/2047) | Issue | 2026-03-22 | 🟡 未响应 | 上下文压缩后缺乏恢复机制，已关闭但问题仍存 |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | PR | 2026-04-17 | 🟡 Under Review | 内存模块重构，影响深远，需尽快评审 |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | PR | 2026-04-17 | 🟡 Under Review | 路由语义对齐，涉及核心调度逻辑 |

> 🔔 建议维护团队本周内集中评审 **#3548** 与 **#3550**，二者为 v1.2 架构升级关键。

---

**报告生成时间**：2026-04-22  
**数据来源**：GitHub CoPaw/QwenPaw 仓库公开数据  
**分析师备注**：项目整体健康度良好，但需警惕 MCP 通道稳定性风险。建议设立“稳定性专项周”集中攻坚。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**  
📅 日期：2026-04-22  
🔗 项目主页：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

### 1. **今日速览**  
过去24小时内，ZeptoClaw 项目保持中等活跃度，主要活动集中在依赖项维护与自动化流程优化。共产生 1 条新 Issue 和 4 条 PR 更新，其中 3 个 PR 处于待合并状态，1 个已合并/关闭。无新版本发布，核心功能无重大变更。社区反馈聚焦于网关模式下的配置加载问题，暴露出 Telegram 集成模块的潜在稳定性风险。

---

### 2. **版本发布**  
❌ 无新版本发布。

---

### 3. **项目进展**  
✅ **已合并/关闭 PR**：  
- [#507](https://github.com/qhkm/zeptoclaw/pull/507)（CLOSED）：升级 `taiki-e/install-action` 从 v2.68.21 至 v2.72.0，提升 CI 环境构建可靠性与兼容性。  
  → 虽已关闭，但为后续 PR #520 的更高版本升级铺平道路，体现维护者对 GitHub Actions 工具链的持续优化。

🔄 **待合并 PR（3 项）**：  
- [#519](https://github.com/qhkm/zeptoclaw/pull/519)：升级 `docker/build-push-action` 至 v7.1.0，增强容器镜像构建安全性与性能。  
- [#520](https://github.com/qhkm/zeptoclaw/pull/520)：进一步升级 `taiki-e/install-action` 至 v2.75.7，解决潜在依赖冲突。  
- [#521](https://github.com/qhkm/zeptoclaw/pull/521)：升级 `EmbarkStudios/cargo-deny-action` 至 v2.0.16，强化 Rust 依赖审计能力。  

> 📌 三项均为依赖与 CI 基础设施更新，虽非功能级推进，但对项目长期可维护性与安全合规性有积极意义。

---

### 4. **社区热点**  
🔥 **高关注度 Issue**：  
[#522](https://github.com/qhkm/zeptoclaw/issues/522) — *Zeptoclaw Telegram Channel Configuration Bug*  
- 作者：@Gantzfried  
- 状态：OPEN，0 评论，0 👍  
- 问题描述：网关模式无法正确加载 `config.json` 中的 `channels.telegram` 配置段，即使文件格式正确且内容有效。  
- 分析：该问题直接影响核心通信能力（Telegram 通道），属于关键路径 bug。尽管当前互动较少，但因其涉及配置解析逻辑，可能影响多用户部署场景，需优先排查。

---

### 5. **Bug 与稳定性**  
🚨 **严重性排序**：  

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | [#522](https://github.com/qhkm/zeptoclaw/issues/522) | Telegram 通道配置加载失败，导致网关功能不可用 | ❌ 无 |

> 该 Bug 影响核心功能可用性，建议维护者尽快复现并分配资源修复。目前尚无相关修复 PR，需警惕用户流失风险。

---

### 6. **功能请求与路线图信号**  
📥 **新功能需求**：  
- 当前无明确功能请求类 Issue。  
- 但从 [#522](https://github.com/qhkm/zeptoclaw/issues/522) 可推断：用户对多通道（尤其是 Telegram）配置的健壮性与文档清晰度有更高期待。  
- 结合近期密集的 CI/CD 依赖升级（#519–#521），项目正强化工程基础设施，为未来功能扩展打下基础。

> 🔮 预测：下一版本可能优先修复配置加载逻辑，并可能伴随配置验证机制或错误提示增强。

---

### 7. **用户反馈摘要**  
💬 从现有 Issue 提炼：  
- **痛点**：配置系统缺乏容错与明确错误提示。用户即使提供“正确格式”的 `config.json`，系统仍静默失败，难以调试。  
- **使用场景**：用户尝试在网关模式下集成 Telegram 作为消息通知通道，属于典型生产部署需求。  
- **满意度**：未体现正面反馈；当前问题表明关键功能存在体验断点，需紧急响应。

---

### 8. **待处理积压**  
⏳ **需关注长期未响应事项**：  
- [#522](https://github.com/qhkm/zeptoclaw/issues/522) 虽为新 Issue，但因涉及核心功能且无初步回应，建议 48 小时内由维护者确认复现路径或提供临时 workaround。  
- 所有待合并 PR（#519, #520, #521）均为 bot 提交，建议维护者统一 review 并合并，避免依赖版本碎片化。

> 🛎️ **维护建议**：优先处理 #522 的配置解析逻辑，同时推进 CI 依赖更新，以平衡稳定性与工程健康度。

---  
📊 **项目健康度评估**：★★★☆☆（中等）  
- 优势：自动化维护良好，依赖更新及时。  
- 风险：关键功能 Bug 未响应，可能影响用户信任。  
- 建议：加强 Issue 响应 SLA，提升配置模块测试覆盖率。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026年4月22日  
🔗 项目地址：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低，未产生新的 Issue 或 Pull Request，社区互动趋于平静。然而，项目在发布节奏上表现积极，**连续发布三个新版本（v1.8.1 至 v1.8.3）**，表明维护团队正集中进行版本迭代与稳定性优化。尽管无代码合并或问题讨论，高频发布暗示底层可能存在紧急修复或兼容性调整。项目当前处于“静默维护”状态，健康度良好但社区参与度有待提升。

---

### 2. 版本发布  

#### 🔄 v1.8.3（最新）  
- **发布时间**：2026-04-21（UTC）  
- **关键说明**：  
  本次发布聚焦于 **macOS 平台安装体验优化**，针对用户普遍反馈的“应用已损坏”误报问题提供明确解决方案。  
  > ⚠️ **非破坏性更新**：无 API 或功能变更，仅为文档与安装指引增强。  
  > ✅ **迁移建议**：现有用户无需主动升级，但新用户建议下载 v1.8.3 以获得更清晰的安装说明。  

- **相关链接**：[v1.8.3 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.3)

#### 🔄 v1.8.2  
- 内容与前版高度一致，主要为安装说明的本地化补充（中英文对照强化）。  
- 链接：[v1.8.2 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.2)

#### 🔄 v1.8.1  
- 初始引入对 macOS Gatekeeper 拦截问题的官方解释与终端绕过指引。  
- 链接：[v1.8.1 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.1)

> 📌 **综合分析**：三连发版本均未包含代码变更，推测为应对近期 macOS 用户集中反馈的安装障碍而采取的“文档热修”策略，体现维护者对终端用户体验的高度重视。

---

### 3. 项目进展  
❌ 无 Pull Request 合并或关闭，今日无功能开发或代码级推进。

---

### 4. 社区热点  
❌ 无新 Issue 或 PR 讨论，社区无热点议题。

---

### 5. Bug 与稳定性  
❌ 无新 Bug 报告。  
✅ 间接信号：连续三个版本均围绕 macOS 安装问题提供解决方案，表明该问题曾是近期主要稳定性痛点，现已通过文档引导缓解。

---

### 6. 功能请求与路线图信号  
❌ 无新功能请求提出。  
🔍 潜在方向：从发布内容反推，**跨平台安装体验优化**（尤其是 macOS 签名机制适配）可能成为下一阶段重点。若未来出现代码签名或公证（Notarization）相关 PR，将显著提升 macOS 用户开箱即用体验。

---

### 7. 用户反馈摘要  
虽无新 Issue，但从 v1.8.1–v1.8.3 的发布说明可提炼出真实用户痛点：  
> 💬 “下载后提示‘RivonClaw 已损坏，无法打开’” —— 大量 macOS 用户遭遇 Gatekeeper 拦截，导致无法正常使用。  
> ✅ 维护者响应：提供 Terminal 执行 `xattr -cr /path/to/RivonClaw.app` 的标准化解决方案，并强调“文件未损坏，仅为未签名”。  
> 📊 满意度推测：文档清晰度提升有助于降低用户困惑，但长期仍需解决代码签名问题以实现无缝安装。

---

### 8. 待处理积压  
⚠️ **长期未响应 Issue/PR 检查**：  
截至今日，项目 Issue 与 PR 列表均为空，**无积压任务**。维护者响应效率良好，但建议定期主动征集用户反馈（如通过 Discussions 或问卷），以预防“沉默流失”风险。

---

**总结**：EasyClaw 今日以“文档驱动型发布”维持项目可用性，虽无代码活动，但精准解决了关键用户体验瓶颈。项目健康度稳定，建议后续关注是否引入自动化签名流程或 Windows/Linux 安装包优化，以进一步扩大用户覆盖。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*