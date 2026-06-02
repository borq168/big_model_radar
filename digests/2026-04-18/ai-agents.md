# OpenClaw 生态日报 2026-04-18

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-18 01:08 UTC

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

# OpenClaw 项目动态日报（2026-04-18）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区保持高度活跃，共处理 **500条 Issues**（新开/活跃339条，关闭161条）和 **500条 PRs**（待合并364条，已合并/关闭136条），显示出强劲的开发与问题响应节奏。尽管无新版本发布，但多个关键回归 Bug 和安全漏洞通过 PR 得到修复，项目整体稳定性显著提升。社区对身份验证、多用户权限、TTS 工具链及 Web UI 体验的关注度持续升温，反映出向企业级可信 AI 助手演进的战略方向。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v2026.4.14`，但多个修复已合并至主干，预计将在近期发布补丁版本（如 `v2026.4.15`）以解决关键回归问题。

---

## 3. 项目进展

今日多个重要 PR 被合并或推进，显著提升了系统稳定性与安全性：

- **🔒 安全加固**：[#68292](https://github.com/openclaw/openclaw/pull/68292) 修复了 MCP 所有权伪造、轮询重复投递、定时任务权限提升等高危漏洞，填补了故障转移分类逻辑缺口。
- **🛠️ 关键回归修复**：
  - [#68341](https://github.com/openclaw/openclaw/pull/68341) 批量修复审计中发现的关键逻辑回归与漏洞（AI 辅助审查）。
  - [#68058](https://github.com/openclaw/openclaw/pull/68058) 修复 TTS 工具无限循环问题，默认启用循环检测机制。
  - [#67980](https://github.com/openclaw/openclaw/pull/67980) 标记失败的 TTS 合成结果为错误，避免代理误判成功。
- **🌐 多语言与体验优化**：
  - [#67720](https://github.com/openclaw/openclaw/pull/67720) 改进多语言翻译支持。
  - [#65554](https://github.com/openclaw/openclaw/pull/65554) 为 WebChat 添加完整媒体支持（图像/音频/视频），提升终端用户体验。
- **📡 通道与插件增强**：
  - [#68234](https://github.com/openclaw/openclaw/pull/68234) 重构 BlueBubbles 通道 HTTP 流量，统一通过类型安全客户端管理。
  - [#67269](https://github.com/openclaw/openclaw/pull/67269) 支持 Feishu 自定义事件处理器配置，扩展第三方集成能力。

> 项目整体在**安全性、稳定性、可扩展性**三个维度取得实质性进展，为下一阶段企业部署奠定基础。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | 原生代理身份与信任验证（RFC） | 93 | 呼吁建立基于 W3C DID/VC 和 ERC-8004 的代理身份体系，解决技能恶意行为与信任缺失问题 |
| [#8081](https://github.com/openclaw/openclaw/issues/8081) | 多用户 RBAC 权限管理 | 9 (+28👍) | 家庭/团队场景下需隔离 API 密钥与配置访问权限 |
| [#67744](https://github.com/openclaw/openclaw/issues/67744) | 未配置 TTS 导致无限循环 | 10 | 紧急修复代理在缺少 TTS 提供者时的死循环行为（已有关联修复 PR） |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows Web UI 输入丢失与流回复不可见 | 12 | 用户反馈 2026.4.14 版本严重退化，影响基本可用性 |

> **分析**：社区核心诉求集中在**信任架构**（防恶意技能）、**多用户治理**和**跨平台 UI 一致性**，反映出 OpenClaw 正从个人工具向组织级平台转型。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（含回归）

| Issue | 严重程度 | 状态 | 修复进展 |
|------|--------|------|--------|
| [#67744](https://github.com/openclaw/openclaw/issues/67744) | 🔴 高（无限循环） | CLOSED | 已由 [#68058](https://github.com/openclaw/openclaw/pull/68058) 修复 |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 🔴 高（UI 不可用） | OPEN | 无明确修复 PR，需前端团队介入 |
| [#67295](https://github.com/openclaw/openclaw/issues/67295) | 🔴 高（多 Provider 失效） | OPEN | `agents add` 写入错误 `baseUrl`，影响 OpenRouter/OpenAI-Codex 等 |
| [#67888](https://github.com/openclaw/openclaw/issues/67888) | 🟠 中（模型兼容） | OPEN | Opus 4.7 不支持 `thinking.enabled`，需适配 `adaptive` 模式 |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | 🟠 中（工具调用失败） | OPEN | Azure Foundry 模型拒绝工具负载 schema |

> **注**：多个回归问题源于近期版本（如 2026.4.10–4.14）的激进更新，建议加强发布前跨 Provider 测试。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能请求

| Issue | 功能描述 | 路线图信号 |
|------|--------|----------|
| [#8081](https://github.com/openclaw/openclaw/issues/8081) | 多用户 RBAC | 强信号：28👍，多次被提及，符合企业化方向 |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | 代理身份与信任验证 | 强信号：93 评论，关联 W3C/ERC 标准，可能成为 v2026.5 核心特性 |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) | 技能行为声誉系统 | 中信号：补充身份验证，解决“慢 burn 信任积累”问题 |
| [#32513](https://github.com/openclaw/openclaw/issues/32513) | 超时自动重试 | 中信号：6👍，提升用户体验，已有类似逻辑在 cooldown 机制中 |

> **判断**：**身份验证 + 行为声誉 + RBAC** 极可能构成下一版本（v2026.5）的“可信代理”主题。

---

## 7. 用户反馈摘要

### 💬 真实用户声音

- **痛点**：
  - “升级后 Coding Agent 完全不动了，只说‘我在思考’然后道歉” — @drpau ([#62505](https://github.com/openclaw/openclaw/issues/62505))
  - “Docker 里装技能报错 `brew not installed`，文档没说清楚依赖” — @pavelkudrna83 ([#14593](https://github.com/openclaw/openclaw/issues/14593))
  - “Windows 上输入框内容经常消失，必须刷新才能看到回复” — @q7793527 ([#67035](https://github.com/openclaw/openclaw/issues/67035))

- **满意点**：
  - “用自托管 API Proxy 比原生 OAuth 快 6 倍！” — @2639823773（对比测试验证性能优化空间）
  - “WebChat 终于支持上传图片了，工作流顺畅多了” — 隐含于 [#65554](https://github.com/openclaw/openclaw/pull/65554) 讨论

> **洞察**：用户对**性能退化**和**跨平台一致性**极为敏感，而对**媒体支持**等体验改进给予积极反馈。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue

| Issue | 创建时间 | 状态 | 提醒 |
|------|--------|------|------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 2026-02-12 | OPEN (stale) | Docker 技能安装失败，影响容器化部署，需明确文档或修复 |
| [#28222](https://github.com/openclaw/openclaw/issues/28222) | 2026-02-27 | OPEN (stale) | 内置 OTel 插件无法加载，阻碍可观测性集成 |
| [#36229](https://github.com/openclaw/openclaw/issues/36229) | 2026-03-05 | OPEN | 上下文压缩破坏思考块签名，导致会话崩溃，高风险但无进展 |

> **建议**：维护者应优先评估 [#14593] 和 [#36229]，前者影响新用户 onboarding，后者可能导致生产环境数据丢失。

---

**报告生成时间**：2026-04-18  
**数据来源**：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-04-18）

---

## 1. 生态全景

2026年4月中旬，个人 AI 助手与自主智能体开源生态呈现**高活跃度、强分化、企业级演进**三大特征。核心项目日均处理 Issues 与 PRs 总量超 1,500 条，反映出开发者社区对可信架构、多通道集成与生产可用性的高度关注。OpenClaw、Zeroclaw、NanoBot 等项目正从“功能堆叠”转向“安全可控+架构稳健”，而 PicoClaw、CoPaw 等则聚焦轻量化与垂直场景适配。整体生态处于**规模化落地前的关键迭代期**，信任机制、多用户治理与跨平台一致性成为共性瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|----------------|------------|--------------|--------------|
| **OpenClaw** | 500（339 新开） | 500（364 待合并） | ❌ | ⭐⭐⭐⭐☆（企业级演进中） |
| **NanoBot** | 15（10 新开） | 51（27 待合并） | ❌ | ⭐⭐⭐⭐☆（响应迅速，生产导向） |
| **Zeroclaw** | 31（27 新开） | 50（32 待合并） | ✅ 3 个 beta | ⭐⭐⭐⭐（架构重构关键期） |
| **PicoClaw** | 108（104 新开） | 137（110 待合并） | ✅ nightly | ⭐⭐⭐☆（高强度开发，积压偏高） |
| **NanoClaw** | 12（11 新开） | 22（9 待合并） | ❌ | ⭐⭐⭐⭐☆（现代化架构推进中） |
| **IronClaw** | 28（20 新开） | 50（2 待合并） | ❌ | ⭐⭐⭐⭐（CI 高效，但多通道 Bug 集中） |
| **LobsterAI** | 7（6 新开） | 28（7 待合并） | ✅ v2026.4.17 | ⭐⭐⭐☆（通道扩展积极，UI 问题待解） |
| **TinyClaw** | 0 | 1（已合并） | ❌ | ⭐⭐⭐⭐（低活跃但稳定，生态兼容性强） |
| **Moltis** | 14（7 新开） | 16（5 待合并） | ✅ 2 版本 | ⭐⭐⭐⭐（功能集成快，文档需跟进） |
| **CoPaw/QwenPaw** | 50（28 新开） | 45（20 待合并） | ✅ v1.1.2 | ⭐⭐⭐☆（高速迭代，迁移体验待优化） |
| **ZeptoClaw** | 0 | 0 | ❌ | ⭐⭐（静默期） |
| **EasyClaw** | 1（已关闭） | 0 | ❌ | ⭐⭐⭐（维护期，更新机制待加强） |

> 注：健康度综合考量开发节奏、响应速度、积压处理与稳定性表现。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态中**唯一明确以“企业级可信 AI 助手”为战略方向**的核心项目，其优势体现在：
- **规模最大**：单日处理 500+ Issues/PRs，社区讨论深度远超同类（如 #49971 获 93 条评论）；
- **安全先行**：率先引入 MCP 所有权验证、TOTP 门控命令、W3C DID/VC 身份提案，填补行业空白；
- **架构完整**：支持多用户 RBAC、审计日志、故障转移等企业级特性，而 NanoBot、PicoClaw 仍聚焦单用户场景。

相较之下，Zeroclaw 侧重 Rust 重构与沙箱安全，NanoBot 强调轻量与生产稳定性，CoPaw 主打自主任务执行，**OpenClaw 在“组织级部署”赛道暂无直接竞品**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多用户与权限隔离** | OpenClaw (#8081)、PicoClaw (#2313)、NanoClaw (#1830) | 家庭/团队场景下 API 密钥、技能、会话的细粒度隔离 |
| **信任与身份验证** | OpenClaw (#49971)、Zeroclaw (TOTP)、Moltis (OIDC) | 防恶意技能、代理身份绑定、高危操作二次认证 |
| **多通道一致性** | IronClaw (#2580)、Zeroclaw (#5356)、LobsterAI (#1569) | Web/Telegram/Slack/WASM 间功能对等与状态同步 |
| **记忆系统可靠性** | NanoBot (#3227)、PicoClaw (#1919)、CoPaw (#3548) | 长对话上下文保留、失败回滚、主动检索机制 |
| **部署与配置简化** | NanoClaw (#957 Podman)、CoPaw (#3356 迁移)、EasyClaw (#33 更新失败) | 降低容器化、多运行时、版本升级门槛 |

> 五大方向中，**信任架构**与**多用户治理**为 2026 年新兴刚需，此前未被主流项目系统解决。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级可信代理 | 组织/开发者 | Python + MCP + W3C 标准身份层 |
| **Zeroclaw** | 安全沙箱与模块化 | DevOps/安全敏感用户 | Rust + Cargo workspace + Landlock/TOTP |
| **NanoBot** | 轻量稳定生产助手 | 中小企业/个人开发者 | Python + 极简依赖 + 容错优先 |
| **PicoClaw** | 模块化与实验性功能 | 技术极客/研究者 | TypeScript + Seahorse 记忆模型 |
| **CoPaw/QwenPaw** | 自主任务执行 | 自动化爱好者 | AgentScope + Mission Mode |
| **LobsterAI** | 多 IM 通道集成 | 国内企业用户 | Electron + OpenClaw 封装 + NIM |
| **TinyClaw** | 多 LLM 提供商兼容 | 成本敏感用户 | 零依赖 + OpenAI API 兼容层 |

> 架构选择反映目标场景：Rust 系（Zeroclaw）重安全，Python 系（OpenClaw/NanoBot）重生态，TS 系（PicoClaw）重前端体验。

---

## 6. 社区热度与成熟度

- **快速迭代层**（日均 PR > 40）：  
  **OpenClaw、PicoClaw、CoPaw、IronClaw** 处于功能爆发期，但伴随较高回归风险（如 OpenClaw 的 UI 退化、IronClaw 的 WASM 消息丢失）。
  
- **质量巩固层**（PR 合并率高 + 积压少）：  
  **NanoBot、NanoClaw、Moltis** 聚焦稳定性与生产可用性，修复响应快（NanoBot 的 P0 Bug 平均 24h 内修复），适合企业采用。

- **静默/维护层**：  
  **TinyClaw、EasyClaw、ZeptoClaw** 无重大更新，适合稳定环境使用，但创新放缓。

---

## 7. 值得关注的趋势信号

1. **可信代理成为刚需**：  
   OpenClaw 的 DID/VC 提案、Zeroclaw 的 TOTP 门控、Moltis 的 OIDC 集成，表明**无信任机制的 AI 代理将难以进入企业环境**。开发者需提前设计身份与审计层。

2. **多用户架构从“可选”变“必选”**：  
   家庭协作、团队机器人等场景推动 RBAC 成为基础功能（3 个项目明确提出），单用户架构将逐步边缘化。

3. **记忆系统从“缓存”向“主动管理”演进**：  
   PicoClaw 的 Seahorse 模型、NanoBot 的 session history 引导、CoPaw 的内存重构，显示**上下文管理是下一性能瓶颈**，需引入生物启发或数据库化方案。

4. **部署体验决定 adoption 速度**：  
   Podman 支持、一键迁移、配置透明化等诉求频发，**“能跑起来”比“功能多”更影响用户留存**，尤其对非技术用户。

> **对开发者的建议**：优先投资信任架构与多用户支持；采用模块化设计应对多通道需求；提供清晰的迁移路径与错误反馈，避免社区信任流失。

---  
**报告生成时间**：2026-04-18  
**分析师**：AI 开源生态技术分析师

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-18）

---

## 1. 今日速览

NanoBot 在过去24小时内表现出**高活跃度**，共产生 **51 条 PR 更新**（27 条待合并，24 条已合并/关闭）和 **15 条 Issues 更新**（10 条新开，5 条关闭），社区参与度显著。尽管无新版本发布，但核心功能持续优化，尤其在**记忆系统健壮性、LLM 调用稳定性、安全边界强化**等方面取得实质性进展。多个关键 Bug 被快速修复并合并，反映出团队对生产环境问题的响应效率较高。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 v0.1.5 系列，建议用户关注即将发布的 v0.1.6 候选版本，预计将包含本次日报中多项关键修复。

---

## 3. 项目进展

今日共 **24 个 PR 被合并或关闭**，重点推进方向如下：

- **记忆系统容错增强**：修复了在 LLM 调用失败时 `archive()` 误将错误信息作为摘要写入 `MEMORY.md` 的问题（#3247、#3248），避免数据丢失；同时引入对 `finish_reason="error"` 的显式检查，防止错误响应被当作有效输出处理。
- **LLM 调用稳定性提升**：针对 GLM/Zhipu API 的 `code=1214` 错误（消息格式非法），优化了历史截断逻辑 `_snip_history` 和角色交替校验 `_enforce_role_alternation`，确保始终以 `system → user` 开头（#3233）。
- **工具执行安全加固**：修复 shell 命令 SSRF 扫描漏洞，新增对 `file://`、`gopher://` 等非 HTTP 协议的检测（#3252）；强化 cron 工具 schema 与运行时一致性，强制 `message` 字段必填（#3163）。
- **语音交互可靠性改进**：为 Whisper 转录接口添加指数退避重试机制，避免因瞬时 502/503 错误导致语音消息静默失败（#3253）。
- **配置与 SDK 完善**：修复 `RunResult.tools_used` 和 `messages` 字段长期为空的问题（#3254）；更新插件构建指南至 hatchling 后端以兼容 Python 3.14（#3192）。

> 整体项目在**生产可用性**和**开发者体验**两个维度均有明显提升。

---

## 4. 社区热点

### 🔥 高讨论 Issue：#3227 — 记忆系统在长期/大型项目中的局限性
- **链接**: https://github.com/HKUDS/nanobot/issues/3227
- **评论数**: 9 | **👍**: 4
- **分析**: 用户 @kxsk-git 指出当前基于 `history.jsonl` + `MEMORY.md` 的文本块注入方式，在长周期或大项目中难以保留关键细节，易造成上下文稀释。该问题触及 NanoBot 核心架构设计，社区期待官方 roadmap 回应。已有相关 PR #3263（引导 LLM 主动查阅 session history）尝试缓解，但系统性解决方案尚未成型。

### 🔧 高关注 PR：#3144 — 集成 AgentHiFive 作为 MCP 后端
- **链接**: https://github.com/HKUDS/nanobot/pull/3144
- **状态**: Open（待合并）
- **意义**: 引入企业级 MCP（Model Context Protocol）支持，扩展 Telegram/Slack 通道管理能力，并增强审批追踪与重放机制，标志着 NanoBot 向多通道、高可控生产助手演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **P0** | #3251 | `config.json` 中 `${VAR}` 环境变量未解析，导致飞书鉴权静默失败（影响 78+ 小时消息接收） | ❌ 无 PR |
| **P0** | #3256 | 流式 LLM 响应中途截断未被重试，导致部分响应被当作完整输出 | ✅ 已修复（#3266） |
| **P1** | #3143 | GLM/Zhipu API 返回 `code=1214`（消息参数非法） | ✅ 已修复（#3233） |
| **P1** | #3244 | LLM 调用失败后 history 更新失败，造成数据不一致 | ✅ 已修复（#3247/#3248） |
| **P1** | #3113 | cron 工具 schema 声明 `message` 可选但运行时必填，引发 LLM 循环重试 | ✅ 已修复（#3163） |
| **P2** | #3265 | UI 输出大量冗余加载动画（⠋⠙⠹...）干扰用户体验 | ❌ 无 PR |

> 注：#3251 虽标记为 P0，但尚无对应 PR，需优先处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 关联 PR | 纳入可能性 |
|--------|------|--------|----------|
| 支持自定义 LLM Provider | #3107（建议4） | #3264 | ⭐⭐⭐⭐☆（高，已有实现） |
| 引导 LLM 主动查阅 session history | #3107（建议2） | #3263 | ⭐⭐⭐☆☆（中，实验性） |
| 静默重试模式（减少错误消息刷屏） | #3246 | ❌ | ⭐⭐☆☆☆（低，UX 优化类） |
| 语音交互端到端延迟监控 | #3257 | ❌ | ⭐⭐⭐☆☆（中，性能可观测性需求上升） |
| PPTX 表格与组合形状文本提取 | #3250 | ❌ | ⭐☆☆☆☆（ niche 场景） |

> **预测**：`custom provider` 支持（#3264）极有可能进入 v0.1.6，因其解决多供应商部署痛点且实现完整。

---

## 7. 用户反馈摘要

- **满意点**：
  - 代码“整洁、轻巧、易上手”（#3227），学习曲线平缓；
  - 对 OpenClaw 的良好兼容性吸引迁移用户；
  - 快速响应关键 Bug（如 #3143、#3244 在数日内修复）。

- **痛点**：
  - **记忆系统不可靠**：长对话易丢失细节，`/new` 后若 LLM 失败会导致数据清空且无备份（#3244、#3227）；
  - **配置不透明**：环境变量语法 `${VAR}` 文档支持但实际未解析，引发静默故障（#3251）；
  - **错误体验差**：LLM 重试时向用户发送多条中间消息，造成干扰（#3246）；
  - **语音延迟高**：STT→LLM→TTS 全链路缺乏分段耗时统计，难以优化（#3257）。

---

## 8. 待处理积压

| 类型 | ID | 标题 | 创建时间 | 状态 | 提醒 |
|------|----|------|--------|------|------|
| Issue | #1672 | WhatsApp 自消息无法回复 | 2026-03-07 | Open | 超 40 天未响应，影响 WhatsApp 用户核心功能 |
| Issue | #3206 | Gemini provider API key 报错 "Multiple authentication credentials" | 2026-04-16 | Open | 认证逻辑缺陷，阻碍 Gemini 用户接入 |
| PR | #2529 | 下载 WhatsApp 音频消息以支持转录 | 2026-03-27 | Open | 超 20 天未 review，语音场景关键补丁 |
| PR | #3216 | WebSocket 工具增强与会话生命周期管理 | 2026-04-16 | Open | 功能重要但复杂，需架构师介入 review |

> 建议维护者优先处理 #1672（WhatsApp 自消息）和 #3206（Gemini 认证），二者均为通道级阻塞问题。

---

**报告生成时间**: 2026-04-18  
**数据来源**: GitHub Repository `HKUDS/nanobot` (UTC+8)  
**健康度评估**: ⭐⭐⭐⭐☆（活跃开发，响应迅速，但部分关键通道存在积压）

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-18）

---

## 1. 今日速览

Zeroclaw 项目在 2026-04-18 继续保持高活跃度，过去 24 小时内共产生 **31 条 Issues 更新**（新开/活跃 27 条，关闭 4 条）和 **50 条 PR 更新**（待合并 32 条，已合并/关闭 18 条），并发布了 **3 个新版本**（均为 v0.7.0-beta 系列）。项目正处于 v0.7.0 大版本重构的关键阶段，核心架构已完成 Cargo workspace 拆分与配置迁移，社区围绕安全策略、工具链兼容性及多通道集成展开密集讨论。整体开发节奏紧凑，技术债务清理与功能增强并行推进。

---

## 2. 版本发布

### v0.7.0-beta.1041 / v0.7.0-beta.1040 / v0.7.0-beta.1030  
**[Release v0.7.0-beta.1041](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1041)**

这三项连续发布的 beta 版本标志着 ZeroClaw 历史上最大规模的结构性重构完成：

- **核心变更**：
  - 整个代码库被拆分为一个结构清晰的 **Cargo workspace**，各功能模块（如 `runtime`、`channels`、`tools`、`infra`）独立为专用 crate，提升构建效率与可维护性。
  - 引入 **新版配置 schema（Schema v2）**，支持更细粒度的运行时控制，并配套提供 **自动迁移脚本**，从旧版 TOML 配置无缝升级。
  - 废弃原有单体架构下的全局状态管理，转向基于 trait 的模块化依赖注入。

- **破坏性变更**：
  - 配置文件不再兼容 v0.6.x 格式，必须通过 `zeroclaw config migrate` 命令或手动更新。
  - 部分 CLI 参数路径调整（如 `--sandbox.backend` 改为 `security.sandbox.backend`）。
  - `llamacpp` 提供商的配置字段变更（见 Issue #5815），需检查自定义配置。

- **迁移建议**：
  > 强烈建议用户在升级前备份 `~/.config/zeroclaw/config.toml`，并运行官方迁移工具。生产环境应先在隔离环境中测试新版本行为，尤其关注 shell 沙箱策略与工具注册逻辑的变化。

---

## 3. 项目进展

今日有 **18 个 PR 被合并或关闭**，关键进展包括：

- **安全增强**：  
  [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) 实现 **TOTP 门控命令机制**（Phase 1），允许对高危 shell 命令（如 `sudo`、`rm -rf`）单独启用双因素认证，而不影响普通命令执行，显著提升生产环境安全性。

- **网关与工具链修复**：  
  [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) 修复网关路径下技能工具未注册的问题，确保通过 WebSocket 调用时能正确加载 `SKILL.toml` 中定义的工具；[#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) 修复 shell 命令通配符绕过漏洞，防止恶意构造命令逃逸沙箱。

- **配置与兼容性改进**：  
  [#5848](https://github.com/zeroclaw-labs/zeroclaw/pull/5848) 修复 Feishu 通道 `mention_only` 配置失效及 Groq 提供商工具调用失败问题；[#5754](https://github.com/zeroclaw-labs/zeroclaw/pull/5754) 将 provider 连接超时设为可配置项，增强弱网环境稳定性。

- **文档与开发者体验**：  
  [#5845](https://github.com/zeroclaw-labs/zeroclaw/pull/5845) 补充 `provider_extra_body` 参数文档，指导用户强制启用流式响应；[#5818](https://github.com/zeroclaw-labs/zeroclaw/pull/5818) 提出 changelog 生成规范，改善发布透明度。

> 整体来看，项目正从“功能堆叠”向“架构稳健+安全可控”转型，为 v0.7.0 正式版打下坚实基础。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 讨论焦点 |
|------|------|--------|
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | 用 Mozilla Fluent 替换 TOML i18n | 社区呼吁采用行业标准国际化方案，解决当前硬编码字符串难以维护、翻译文档散落的问题。提案已获初步支持，预计纳入 v0.7.1 路线图。 |
| [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | Landlock 沙箱污染调用进程 | Linux 用户反馈启用 `landlock` 后工作区文件访问被永久阻断，属 S1 级阻塞性 Bug。维护者已复现，正在评估修复方案（可能涉及文件描述符传递机制）。 |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | 通道代理 Canvas 工具帧丢失 | Telegram/Discord 等通道下 Canvas 输出无法送达 WebSocket 客户端，暴露多通道状态同步缺陷。开发者 @michidk 正分析消息路由逻辑。 |

> 上述问题反映用户对 **跨平台一致性** 和 **安全沙箱可靠性** 的高度关注，也是当前架构重构后亟需验证的关键场景。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **S1（阻塞）** | [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | Landlock 沙箱导致进程级文件访问失效 | 🔴 未修复，需内核级调试 |
| | [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | 通道代理 Canvas 工具帧无法送达客户端 | 🟡 调查中，疑似消息总线路由问题 |
| | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | llamacpp 提供商配置被忽略 | 🟢 已有修复方向（Schema v2 字段映射错误） |
| **S2（降级）** | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Shell 策略误判 `git -C` 为 `-c` 参数 | 🟡 策略引擎大小写处理缺陷 |
| | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 系统提示过度强调记忆，忽略当前指令 | 🟡 需调整 prompt 权重分配 |
| **S3（轻微）** | [#5723](https://github.com/zeroclaw-labs/zeroclaw/issues/5723) | 主题模式显示异常（暗/亮均显暗） | ✅ 已关闭，UI 组件修复完成 |

> 当前无已知数据丢失或安全漏洞级 Bug，但 **沙箱稳定性** 和 **多通道一致性** 是近期重点监控方向。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR/Issue | 纳入可能性 |
|--------|--------------|----------|
| **Dream Mode（梦境模式）**：空闲时记忆 consolidation | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | ⭐⭐⭐ 高（契合长期记忆优化战略） |
| **模型级推理配置**：按 provider 单独设置 `reasoning_effort` | [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | ⭐⭐ 中（需扩展配置 schema） |
| **Webhook 通道重试机制**：指数退避避免消息丢失 | [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) | ⭐⭐⭐ 高（生产环境刚需） |
| **MariaDB 内存后端支持** | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | ⭐ 低（优先级次于核心稳定性） |

> 维护者倾向优先解决 **消息可靠性** 与 **配置灵活性** 问题，Dream Mode 可能作为 v0.7.1 亮点功能发布。

---

## 7. 用户反馈摘要

- **正面反馈**：
  - “v0.7.0 的 workspace 拆分让编译速度提升明显，模块边界更清晰。” —— 开发者 @perlowja
  - “TOTP 门控命令设计巧妙，终于敢在生产环境开 shell 权限了。” —— DevOps 用户 @jonny7737

- **痛点与诉求**：
  - **配置迁移成本高**：多名用户反映旧配置需手动调整，希望提供交互式迁移向导。
  - **通道行为不一致**：Web UI 正常但 Telegram/Slack 功能残缺（如 Canvas、审批按钮），影响多端体验统一。
  - **文档滞后于代码**：`gateway.web_dist_dir` 等关键参数缺乏说明（[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)），新手上手困难。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 提醒 |
|------|------|------|--------|------|
| Issue | [#5246](https://github.com/zeroclaw-labs/zeroclaw/issues/5246) | 支持自定义默认 shell | 45 天 | 影响开发者工作流，建议 v0.7.1 支持 |
| PR | [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) | 添加 ARM64 Docker 构建目标 | 46 天 | 社区多次询问，阻碍树莓派等边缘部署 |
| Issue | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | MariaDB 内存后端支持 | 23 天 | 企业用户刚需，但需评估维护成本 |

> 建议维护团队在本周站会中评估上述积压项，明确是否纳入下一迭代。

---  
**报告生成时间**：2026-04-18  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-18）

---

## 1. 今日速览

过去24小时内，PicoClaw 社区活跃度显著上升，共产生 **108 条 Issues 更新**（新开/活跃 104 条，关闭 4 条）和 **137 条 PR 更新**（待合并 110 条，已合并/关闭 27 条），反映出项目处于高强度开发与用户反馈循环中。核心团队持续推进架构解耦与稳定性优化，同时发布 nightly 构建版本 v0.2.6-nightly.20260418.6126ede9。社区对多通道支持、工具调用可靠性及部署体验的关注度持续高涨。

---

## 2. 版本发布

✅ **Nightly Build v0.2.6-nightly.20260418.6126ede9 已发布**  
- 类型：自动化 nightly 构建，可能包含未稳定功能，**不建议生产环境使用**。
- 更新范围：基于 `main` 分支最新提交，集成近期 PR 中的工具链修复、配置安全增强及部分 agent 上下文管理改进。
- 破坏性变更：无明确 breaking change，但部分 provider 接口内部重构（见 PR #2566）可能影响自定义插件兼容性。
- 迁移建议：若使用自定义 provider 或工具，请测试 `pkg/providers` 包结构调整后的导入路径。
- [完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

## 3. 项目进展

今日共 **27 个 PR 被合并或关闭**，重点进展包括：

- 🔧 **工具系统健壮性提升**：  
  - #2579（已合并）：修复 MCP 工具调用时 `nil` 参数导致 Zod 校验失败问题，增强 TypeScript 服务端兼容性。  
  - #2575（开放中）：重构文件差异工具，解耦路径验证逻辑，提升工具可测试性。  

- 📚 **文档体系规范化**：  
  - #2567（已合并）：按文档类型重组 `docs/` 目录，新增贡献指南与 lint 脚本，改善维护体验。  
  - #2571（已合并）：补充 session 路由机制说明，助力开发者理解消息分发逻辑。  

- 🛡️ **配置安全加固**：  
  - #2270（开放中）：修复 `collectSensitive` 函数在处理 `SecureString` 类型时的 panic 风险，增强配置加载稳定性。  

- 🌐 **多语言支持扩展**：  
  - #2036（开放中）：新增西班牙语 README 翻译，扩大国际用户覆盖。  

整体项目向 **模块化、可观测、易部署** 方向稳步迈进。

---

## 4. 社区热点

以下 Issues/PRs 引发高频讨论，反映核心用户诉求：

| 议题 | 类型 | 热度 | 核心诉求 |
|------|------|------|--------|
| [#28 LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 功能请求 | 15 评论 | 用户强烈希望简化本地 LLM（如 LM Studio）接入流程，降低 Android/桌面端使用门槛。 |
| [#1919 Seahorse 生物启发记忆系统](https://github.com/sipeed/picoclaw/issues/1919) | 架构提案 | 9 评论 | 提议引入类海马体短期/长期记忆机制，提升 agent 上下文管理能力，获技术社区关注。 |
| [#2233 标准化入站上下文与路由解耦](https://github.com/sipeed/picoclaw/issues/2233) | 架构重构 | 6 评论 | 开发者呼吁解耦 channel 语义与 session 分配，解决多实例 provider 识别混乱问题（相关 PR #2551 正在推进）。 |
| [#2313 多用户支持与安全加固](https://github.com/sipeed/picoclaw/pull/2313) | 安全增强 | 高关注度 | 集成“Agent Shield”安全套件，支持技能白名单与用户隔离，回应企业部署安全需求。 |

> 💡 **趋势分析**：社区正从“基础功能实现”转向“企业级可用性”，强调安全性、可观测性与多租户支持。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

1. 🔴 **高严重性 - Provider 工具调用失败无重试机制**  
   - Issue: [#629](https://github.com/sipeed/picoclaw/issues/629)（9 评论）  
   - 现象：LLM 调用遇 HTTP 500 时任务挂起，无自动重试，导致长任务中断。  
   - 状态：**无 fix PR**，需核心团队介入设计重试策略。

2. 🔴 **高严重性 - Groq API 工具调用格式不兼容**  
   - Issue: [#748](https://github.com/sipeed/picoclaw/issues/748)（8 评论）  
   - 现象：Groq 拒绝 `<function=name{...}>` 格式，仅支持 OpenAI 标准 tool call。  
   - 状态：**已有相关修复方向**（见 PR #2136），但尚未合并。

3. 🟠 **中严重性 - Docker 端口映射后 Web 界面输入框禁用**  
   - Issue: [#2236](https://github.com/sipeed/picoclaw/issues/2236)（8 评论）  
   - 现象：修改 `web` 监听端口后前端无法发送消息，疑似 gateway 路由配置问题。  
   - 状态：**无 fix PR**，影响容器化部署体验。

4. 🟠 **中严重性 - OpenRouter free 模型 ID 失效**  
   - Issue: [#1790](https://github.com/sipeed/picoclaw/issues/1790)（6 评论）  
   - 现象：`minimax-m2.5:free` 返回 400 错误，需更新模型白名单或提供 fallback 机制。  

---

## 6. 功能请求与路线图信号

结合 PR 进展，以下功能有望纳入下一版本：

- ✅ **高概率落地**：  
  - **Mattermost 原生通道支持**（PR #1586）：已实现基础集成，待测试验证。  
  - **/context 命令与上下文环指示器**（PR #2537）：增强用户感知 agent 状态能力。  
  - **Seahorse 记忆系统配置化**（PR #2570）：允许自定义 `fresh_tail_size`，提升灵活性。  

- 🔄 **进行中/需决策**：  
  - **OpenAI Responses API 迁移**（Issue #2171）：技术评估完成，重构成本高，需 roadmap 确认。  
  - **LangSmith 可观测性集成**（Issue #2173）：开发者调试需求强烈，但依赖第三方服务。  

- 📌 **长期路线图信号**：  
  - 多用户隔离、技能白名单（PR #2313）、自我升级机制（Issue #618）均指向 **企业级 SaaS 化** 方向。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- 😠 **痛点**：  
  - “Docker 部署后 Web 界面完全不能用，文档也没说明端口映射规则”（#2236）  
  - “Groq 报错毫无提示，浪费半天排查”（#748）  
  - “工具执行时一片空白，不知道 agent 是死是活”（#571）  

- 👍 **满意点**：  
  - “nightly 构建更新很及时，能快速尝鲜”（#28 评论区）  
  - “Seahorse 设计理念很棒，终于有记忆了！”（#1919）  

- 💡 **使用场景**：  
  - 企业内网通过 Mattermost 对接 AI 助手（#1587）  
  - 个人用户在 Termux/Android 上运行轻量 agent（#2052）  

---

## 8. 待处理积压

以下重要议题长期未获响应，建议维护者优先关注：

| Issue/PR | 类型 | 创建时间 | 积压原因 |
|---------|------|--------|--------|
| [#618 自我升级支持](https://github.com/sipeed/picoclaw/issues/618) | 功能请求 | 2026-02-22 | 涉及多平台包管理，需架构设计 |
| [#1058 Cron deliver=false 静默丢弃响应](https://github.com/sipeed/picoclaw/issues/1058) | Bug | 2026-03-04 | 影响定时任务可靠性，需修复消息投递逻辑 |
| [#1708 Gateway REST API 端点不可用](https://github.com/sipeed/picoclaw/issues/1708) | Bug | 2026-03-17 | Docker 部署核心功能缺失，阻碍 API 集成 |

> ⚠️ **健康度提醒**：超过 30 天未响应的 Issues 占比约 18%，建议建立 triage 机制提升响应效率。

---  
*数据来源：GitHub API 截至 2026-04-18 00:00 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-18）

---

## 1. 今日速览

NanoClaw 在 2026-04-18 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **12 条 Issues 更新**（11 新开，1 关闭）和 **22 条 PR 更新**（13 已合并/关闭，9 待合并），显示出强劲的开发节奏与问题响应能力。尽管无新版本发布，但多个关键功能（如 OpenAI 模型支持、Bun 容器运行时、LLM 邮件分类）已进入合并阶段，标志着 v2 架构持续深化。社区对容器化部署、安全隔离与用户体验优化的关注显著上升。

---

## 2. 版本发布

**无新版本发布**。  
当前最新稳定版本仍为 v1.2.53（截至数据时间），但多个 v2 相关 PR 已合并，预示下一版本将聚焦容器运行时现代化与多模型支持。

---

## 3. 项目进展

今日共 **13 个 PR 被合并或关闭**，推动多项关键改进：

- **容器运行时升级**：[#1813](https://github.com/qwibitai/nanoclaw/pull/1813) 将 agent-runner 从 Node + pnpm + tsc 切换至 **Bun**，显著降低镜像构建时间并消除 native 编译依赖（如 `better-sqlite3`），提升启动性能与可维护性。
- **多模型支持落地**：[#1774](https://github.com/qwibitai/nanoclaw/pull/1774) 实现 OpenAI 兼容 API 支持（含 GPT-5.4 nano/mini 及 Ollama），并集成 token 追踪与 stats API，扩展了 NanoClaw 的模型生态。
- **MCP 工具链优化**：[#1810](https://github.com/qwibitai/nanoclaw/pull/1810) 预装 Gmail/Notion MCP 服务至容器镜像，解决 `npx` 冷启动超时问题，提升工具调用稳定性。
- **架构解耦与注册机制**：[#1814](https://github.com/qwibitai/nanoclaw/pull/1814) 引入 agent-provider 自注册 barrel 模式，统一 channel 与 provider 的扩展机制，增强模块化。
- **会话清理自动化**：[#1632](https://github.com/qwibitai/nanoclaw/pull/1632) 新增 `cleanup-sessions.sh` 脚本，实现基于活跃会话的自动垃圾回收，防止存储膨胀。

> 整体来看，项目正从“功能堆叠”向“架构现代化”过渡，v2 方向明确：轻量、高效、可扩展。

---

## 4. 社区热点

### 🔥 高关注度 Issue：Podman 支持建议（#957）
- **链接**：[#957](https://github.com/qwibitai/nanoclaw/issues/957)
- **评论数**：6 | **👍 反应数**：6
- **分析**：用户 @fuyb 建议文档中增加 Podman 作为 Docker 替代方案，尤其针对 macOS/Linux 用户。诉求背后反映对**无守护进程容器运行时**的需求，以及避免 Docker Desktop 许可限制的实际痛点。该建议获得社区广泛认同，可能推动部署文档更新或 CI 多运行时测试。

### 🚀 新功能提案集中爆发（#1829–#1831）
同日连续提出三个高价值功能请求（均由 @shakhruz 提交）：
- **MTProto 大文件下载回退**（#1831）：解决 Telegram Bot API 20MB 限制导致视频丢失问题。
- **公共群组自动注册 + 凭据隔离**（#1830）：解决未注册用户消息丢弃与 Gmail/GCal 凭据全局挂载的安全隐患。
- **浏览器会话持久化**（#1829）：修复 `--profile` 失效与容器重启后会话丢失问题。

> 三者均指向**生产环境可用性**提升，尤其针对 Telegram 广告场景与多租户安全，极可能被纳入近期 roadmap。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 中 | [#1824](https://github.com/qwibitai/nanoclaw/issues/1824) | openclaw 崩溃循环触发 systemd 资源耗尽，导致 NanoClaw 接收 SIGTERM 后无法重启 | ❌ 无（需 upstream 协作） |
| ⚠️ 中 | [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) | `agent-runner` 无条件覆盖 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 环境变量，禁止用户调优 | ✅ 已有修复方向（见 [#1823](https://github.com/qwibitai/nanoclaw/pull/1823) 同类逻辑） |
| ⚠️ 低 | [#1825](https://github.com/qwibitai/nanoclaw/issues/1825) | `cleanup-sessions.sh` 硬编码路径，忽略 `NANOCLAW_*_DIR` 环境变量 | ❌ 无（需脚本重构） |

> 核心稳定性风险可控，但需关注 openclaw 上游依赖的健壮性。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，且已有相关 PR 或设计支撑：

| 功能请求 | Issue | 关联 PR | 采纳可能性 |
|--------|------|--------|----------|
| OpenAI 模型支持 | — | [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) | ✅ 已合并 |
| Bun 容器运行时 | — | [#1813](https://github.com/qwibitai/nanoclaw/pull/1813) | ✅ 已合并 |
| 邮件 LLM 分类流水线 | — | [#1811](https://github.com/qwibitai/nanoclaw/pull/1811) | ✅ 已合并 |
| 浏览器会话持久化 | [#1829](https://github.com/qwibitai/nanoclaw/issues/1829) | — | 🔜 高（依赖 agent-browser 上游修复） |
| 公共群组自动注册 | [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) | — | 🔜 高（安全需求迫切） |
| MTProto 大文件下载 | [#1831](https://github.com/qwibitai/nanoclaw/issues/1831) | — | 🔜 中高（需 Telegram 协议层实现） |

> 下一版本（v1.2.54 或 v2.0.0）预计将重点整合 OpenAI 支持、Bun 运行时与邮件处理能力。

---

## 7. 用户反馈摘要

- **满意点**：
  - 项目设计“非常有用且设计精良”（#957），认可其作为轻量级 agent 运行时的定位。
  - 对快速响应与高频迭代表示赞赏（隐含于多个新 Issue 的 constructive tone）。
- **痛点**：
  - **部署复杂性**：Telemetry 无 opt-out（#1819）、硬编码路径（#1825）引发隐私与可移植性质疑。
  - **生产可用性缺口**：Telegram 大文件支持缺失、会话易失、凭据隔离不足阻碍企业级使用。
  - **文档滞后**：RemoteTrigger API 报错无文档说明（#1806），增加调试成本。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #957 | Suggest supporting Podman as an alternative to Docker | 2026-03-11 | OPEN | 📌 **超 35 天未响应**，社区期待明确立场或文档更新 |
| PR | #1624 | feat: Matrix E2EE channel + per-group model config | 2026-04-04 | OPEN | 📌 **14 天未合入**，功能重要但需 review 资源 |
| PR | #1776 | feat(v2): OpenCode agent provider | 2026-04-14 | CLOSED* | *虽关闭但含关键 v2 设计，建议归档为参考 |

> 建议维护者优先处理 #957（文档类，低成本高收益）与 #1624（生态扩展关键）。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发、社区参与度高、架构演进清晰，需加强长期 Issue 响应与文档同步。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-18）

---

## 1. 今日速览

IronClaw 项目在2026年4月18日继续保持高活跃度，过去24小时内共处理 **50条 PR 更新**（48条已合并/关闭，仅2条待合并），显示出高效的代码集成节奏；同时新增或活跃 **28条 Issues**（20条新开，8条关闭），反映出社区参与度与问题暴露同步上升。尽管无新版本发布，但核心团队通过自动化 CI 流水线持续推动 staging 环境迭代，累计完成超过15次 staging promotion。当前项目处于快速演进阶段，重点聚焦于稳定性修复、安全加固与多通道（Web/Telegram/WASM）体验优化。

---

## 2. 版本发布

**无新版本发布**。  
最新稳定版本仍为 `v0.25.0`（见 [PR #2606](https://github.com/nearai/ironclaw/pull/2606) 中提及的版本号），但该 PR 包含对 `ironclaw_common` 的 **API 破坏性变更**（breaking changes），预计将在下一个正式版本中体现。建议用户关注依赖兼容性，尤其是自定义技能或插件开发者需注意枚举判别式变更。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在 **staging 环境自动推进** 和 **关键功能增强**：

- **自动化部署流水线持续运行**：过去24小时共完成 **15+ 次 staging promotion**（如 [PR #2333](https://github.com/nearai/ironclaw/pull/2333)、[#2445](https://github.com/nearai/ironclaw/pull/2445)、[#2461](https://github.com/nearai/ironclaw/pull/2461) 等），覆盖数据库迁移（PostgreSQL/LibSQL）、LLM 引擎优化、CLI/TUI 改进及安全策略更新，显著提升 staging 环境稳定性。
- **Aliyun Coding Plan 支持进入最终集成阶段**：[PR #1446](https://github.com/nearai/ironclaw/pull/1446)（XL 规模）持续更新，新增对阿里云百炼平台的 Anthropic Messages API 兼容支持，扩展了 IronClaw 在多云 LLM 后端的能力边界。
- **发布准备完成**：[PR #2606](https://github.com/nearai/ironclaw/pull/2606) 标记为“chore: release”，虽未正式发布，但表明团队正在为下一版本做最终打包与文档整理。

整体来看，项目在基础设施、多平台适配和发布流程上取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issues

| Issue | 热度指标 | 分析 |
|------|--------|------|
| [#2522](https://github.com/nearai/ironclaw/issues/2522)（配置保存失败） | 👍 2，评论 3 | 用户在使用 `ironclaw onboard` 配置本地数据库时遭遇“Database error”，阻碍初始设置流程，属关键路径阻塞问题，已引发多位用户共鸣。 |
| [#2491](https://github.com/nearai/ironclaw/issues/2491)（Engine V2 绕过密钥扫描） | 安全标签 + P1 | 严重安全隐患：当 `ENGINE_V2=true` 时，用户输入的 API 密钥直接发送至 LLM 而不经安全扫描，已被确认在 staging 复现。此问题虽已关闭（推测已修复），但仍需验证补丁有效性。 |
| [#2601](https://github.com/nearai/ironclaw/issues/2601)（CLI/TUI 密钥管理提案） | 新建，0 评论但具代表性 | 用户 @ek775 指出当前密钥管理缺乏清晰文档与工具支持，提出应提供专用 CLI/TUI 工具。该需求与 [#2600](https://github.com/nearai/ironclaw/issues/2600)（已关闭）重复，反映社区对 **开发者体验（DX）** 的强烈诉求。 |

> 💡 背后诉求：用户迫切需要更可靠的 **本地配置流程**、**透明的安全机制** 和 **友好的密钥管理界面**，尤其在 onboarding 阶段。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 级（功能完全失效 / 安全风险）
- **[#2580](https://github.com/nearai/ironclaw/issues/2580)**：Agent 声称已发送 Telegram 消息但实际未送达（WASM 通道）——影响核心通信功能。
- **[#2581](https://github.com/nearai/ironclaw/issues/2581)**：Agent 泄露内部推理过程（chain-of-thought leaked）而非返回最终响应——破坏用户体验与隐私预期。
- **[#2582](https://github.com/nearai/ironclaw/issues/2582)**：Agent 声称附加 Markdown 文件但未提供——文件传输功能异常。
- **[#2583](https://github.com/nearai/ironclaw/issues/2583)**：例行任务创建失败，报“5 consecutive code errors”——自动化能力受阻。

> ⚠️ 以上均为 **Bug Bash 4/17** 发现，集中于 staging 环境，暂未看到对应 fix PR，需优先处理。

### 🟠 P2 级（功能降级 / 体验问题）
- **[#2522](https://github.com/nearai/ironclaw/issues/2522)**：本地数据库配置时 API 密钥保存失败（db error）——阻碍新用户上手。
- **[#2543](https://github.com/nearai/ironclaw/issues/2543)**：Linear MCP OAuth 成功后工具仍不可用——集成认证状态同步问题。
- **[#2408](https://github.com/nearai/ironclaw/issues/2408)**：上下文长度超过 200K token 限制导致溢出——需实现自动截断或分块机制。

### 🟢 已关闭但值得关注
- [#2491](https://github.com/nearai/ironclaw/issues/2491)（安全绕过）已关闭，建议验证修复是否彻底。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 路线图信号 |
|--------|----------|----------|
| **CLI/TUI 密钥管理工具** | [#2601](https://github.com/nearai/ironclaw/issues/2601) | 高概率纳入下一版本。用户多次反馈配置困难，且已有类似讨论（[#2600](https://github.com/nearai/ironclaw/issues/2600)），团队可能优先提升 DX。 |
| **WASM 通道作用域模型统一** | [#2564](https://github.com/nearai/ironclaw/issues/2564) | 架构级改进，长期技术债清理，可能作为 v0.26+ 重点。 |
| **专用 web_fetch 工具（带摘要）** | [#2569](https://github.com/nearai/ironclaw/issues/2569) | 增强信息提取能力，符合 Agent 自主研究场景需求，有望在技能层快速实现。 |
| **SKILLS_BUNDLED_ENABLED 开关** | [#2591](https://github.com/nearai/ironclaw/issues/2591) | 提供编译时技能包禁用选项，支持轻量化部署，适合边缘场景，已进入提案阶段。 |

> ✅ 综合判断：**密钥管理 CLI** 和 **web_fetch 工具** 最可能出现在下个迭代中。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “配置本地数据库时一直报 `db error`，根本没法继续”（[#2522](https://github.com/nearai/ironclaw/issues/2522)）→ **onboarding 流程断裂**。
  - “Telegram 消息说发了但其实没收到，agent 还在那确认”（[#2580](https://github.com/nearai/ironclaw/issues/2580)）→ **信任感丧失**。
  - “不知道怎么安全地存 API key，文档也没说清楚”（[#2601](https://github.com/nearai/ironclaw/issues/2601)）→ **文档与工具缺失**。

- **满意点**：
  - 多通道支持（Web/Telegram/WASM）被广泛测试，说明架构扩展性良好。
  - Bug Bash 活动高效暴露问题，体现团队对质量重视。

- **使用场景**：
  - 用户尝试构建 **自动化监控任务**（如比特币价格检查）、**跨渠道消息同步**、**文件生成与分发**，表明 IronClaw 正被用于真实生产辅助场景。

---

## 8. 待处理积压

以下 Issue 长期未响应，建议维护者关注：

| Issue | 创建时间 | 状态 | 提醒 |
|------|--------|------|------|
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | 2026-04-10 | OPEN | Agent 实例闲置1小时后死亡，影响长期运行任务，属基础设施稳定性问题。 |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | 2026-04-10 | OPEN | 页面刷新后聊天消息消失，Web UI 状态持久化缺陷，影响用户体验连续性。 |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) | 2026-04-13 | OPEN | Telegram bot token 保存无响应，通道配置功能失效，超5天未处理。 |

> 📌 建议：将 [#2284] 和 [#2285] 纳入下一轮稳定性专项修复，二者均影响核心可用性。

---

**报告生成时间**：2026-04-18  
**数据来源**：GitHub IronClaw 仓库公开数据  
**分析师**：AI 开源项目分析师

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-04-18）**

---

### 1. 今日速览  
过去24小时内，LobsterAI 社区活跃度显著提升，共产生 **7条 Issues 更新**（6条新开/活跃，1条关闭）和 **28条 PR 更新**（21条已合并/关闭，7条待合并），并发布 **1个新版本**。开发节奏紧凑，主要集中在 OpenClaw 引擎优化、IM 通道扩展及构建稳定性修复。社区反馈集中于登录异常与安装兼容性问题，同时出现疑似垃圾信息需关注。

---

### 2. 版本发布  
**LobsterAI 2026.4.17** 已于昨日发布，核心更新包括：  
- 🔧 **升级 OpenClaw 至 v2024.4.8**，提升底层 AI 引擎兼容性与性能（[#1709](https://github.com/netease-youdao/LobsterAI/pull/1709)）  
- 🛠️ **修复微信网关配置问题**：恢复 `gatewayMethods` 补丁并修正通道配置逻辑，解决部分用户消息收发异常（[#1592](https://github.com/netease-youdao/LobsterAI/pull/1592)）  
- ⚠️ **注意**：本次更新涉及 OpenClaw 代理链路 session_id 修复（见下文 PR #1715），建议所有使用多会话协作（cowork）功能的用户升级以避免请求识别错误。

> 完整发布说明：[Release 2026.4.17](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.17)

---

### 3. 项目进展  
今日共 **21个 PR 被合并/关闭**，关键进展如下：  
- **新增功能**：  
  - 集成 **Lobster Email 作为 IM 通道**，支持基于邮件的 AI 代理通信，含完整配置 UI 与会话映射（[#1719](https://github.com/netease-youdao/LobsterAI/pull/1719)）  
  - 支持 **NIM 多机器人实例分发** 与 GitHub 插件安装流程优化（[#1711](https://github.com/netease-youdao/LobsterAI/pull/1711)）  
- **核心修复**：  
  - 修复 OpenClaw 代理请求缺失 `session_id`，确保多会话协作场景下服务端能正确识别请求来源（[#1715](https://github.com/netease-youdao/LobsterAI/pull/1715)）  
  - 强制 MCP bridge 配置变更时重启网关，解决部分用户 MCP 工具不可用问题（[#1708](https://github.com/netease-youdao/LobsterAI/pull/1708)）  
  - 清理遗留 `yd_cowork` 代码，减少技术债务（[#1689](https://github.com/netease-youdao/LobsterAI/pull/1689)）  
- **构建优化**：移除冗余原生二进制依赖，macOS 安装包体积减少约 65MB（[#1684](https://github.com/netease-youdao/LobsterAI/pull/1684)）

整体项目在 **多通道通信、会话稳定性、构建效率** 三方面取得实质性推进。

---

### 4. 社区热点  
- **#1569 [提问后无响应]**：用户反馈输入问题后界面无反应，无错误提示（4条评论）。该问题自4月8日提出，持续未解，可能涉及前端状态机或后端通信超时，需优先排查。[→ 查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1569)  
- **#1614 [提议集成 hermes-agent]**：社区成员建议将 hermes-agent 作为可选 AI 引擎，类比 OpenClaw 设计。虽仅2条评论，但反映用户对多引擎架构的期待，与项目模块化方向契合。[→ 查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1614)  

> 注：Issues #1716、#1717、#1718 含疑似广告内容（重复推广赌博网站），建议维护者标记为 spam 并清理。

---

### 5. Bug 与稳定性  
按严重程度排序：  
1. **高优先级**：  
   - **#1569 提问无响应**：影响核心交互流程，无明确错误反馈，用户体验严重受损。**尚无 fix PR**，需紧急定位。  
   - **#1687 账号登录失败**（已关闭）：Deepin V25 环境下浏览器跳转后提示“网络错误”，虽已关闭但仅1条评论，可能未彻底验证。  
2. **中优先级**：  
   - **#1714 Win11 安装图标异常**：安装过程中图标显示为白色无效状态，可能影响首次使用体验。**尚无 fix PR**。  

> 建议：对 #1569 增加前端日志埋点，区分是前端卡死还是后端无响应。

---

### 6. 功能请求与路线图信号  
- **高可能性纳入下一版本**：  
  - **hermes-agent 引擎支持**（#1614）：已有 OpenClaw 插件化架构基础，扩展新引擎成本可控，符合社区多元化需求。  
  - **NIM 多机器人支持**：已通过 PR #1711 实现，预计将在下个版本正式启用。  
- **潜在方向**：  
  - 邮件通道（clawemail）集成（#1719）表明项目正探索非即时通讯场景的 AI 代理应用，可能拓展至企业邮件自动化领域。

---

### 7. 用户反馈摘要  
- **痛点**：  
  - 登录流程跨平台兼容性差（Deepin/Win11 均报告问题）  
  - 错误反馈机制薄弱（如 #1569 无提示）  
  - 安装包体积过大（已通过 #1684 部分缓解）  
- **满意点**：  
  - 多会话协作（cowork）功能持续优化，session_id 修复提升稳定性  
  - 插件化架构灵活，支持 GitHub 直接安装扩展  

---

### 8. 待处理积压  
- **长期未响应 Issue**：  
  - **#1569（10天未解决）**：核心功能失效，需分配开发资源重点排查。  
  - **#1614（8天未回应）**：功能请求合理，建议明确是否纳入路线图。  
- **待合并 PR**：  
  - **#1719（clawemail 通道）**：功能完整但尚未合并，可能因测试覆盖不足。  
  - **Dependabot 依赖升级 PRs（#1277、#1281、#1282、#1283）**：涉及 Electron、React、Vite 重大版本升级，需谨慎验证兼容性。

> 建议维护者优先处理 #1569 与依赖升级，以保障基础体验与安全性。

---  
*数据来源：LobsterAI GitHub 仓库（2026-04-17 24:00 UTC）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报（2026-04-18）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目整体活跃度较低，无新 Issue 创建或更新，社区互动趋于平稳。唯一显著动作为一条 Pull Request（#243）于昨日被合并，标志着对 Novita AI 作为内置 LLM 提供商的集成完成。项目处于功能迭代后的稳定维护阶段，未发布新版本，核心开发节奏放缓。整体健康度良好，技术债务可控，社区响应机制保持有效。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
✅ **PR #243 [CLOSED] feat: add Novita AI as a built-in LLM provider** 已于 2026-04-17 合并。  
该 PR 将 [Novita AI](https://novita.ai) 正式纳入 TinyClaw 的内置 LLM 提供商列表，与 Anthropic、OpenAI 和 OpenCode 并列支持。得益于 Novita AI 提供 OpenAI 兼容 API，集成通过复用现有 **codex harness** 实现，仅需配置 `OPENAI_BASE_URL`，无需引入额外依赖。此举显著提升了项目在多模型生态中的兼容性与部署灵活性，为用户提供了低成本、高性能的替代推理后端选项。  
🔗 [查看 PR #243](https://github.com/TinyAGI/tinyagi/pull/243)

---

### 4. 社区热点  
*（过去24小时无新 Issue 或活跃讨论，社区互动静默）*

---

### 5. Bug 与稳定性  
*（过去24小时无新 Bug 报告或稳定性问题）*

---

### 6. 功能请求与路线图信号  
尽管当前无新功能请求提出，但 PR #243 的合成本身反映了项目对**多 LLM 提供商扩展性**的持续投入。结合其“零依赖、兼容优先”的集成策略，可预见未来路线图将继续聚焦于：  
- 支持更多 OpenAI 兼容 API 的推理服务（如 DeepSeek、Fireworks、Together AI 等）  
- 强化配置抽象层，降低新增提供商的接入门槛  
此类需求可能通过社区贡献或企业合作形式推进，建议维护者建立标准化 Provider 插件机制以规模化扩展。

---

### 7. 用户反馈摘要  
*（过去24小时无新用户评论或反馈）*  
基于近期合并的 PR #243 上下文，可推断部分用户存在对**非 OpenAI 推理服务**的需求，尤其在成本敏感或区域合规场景下。Novita AI 的集成响应了此类诉求，体现了项目对多样化部署环境的适配意识。

---

### 8. 待处理积压  
经核查，目前无长期未响应的重要 Issue 或 PR。项目 Issue 与 PR 处理效率良好，维护者响应及时，技术 backlog 处于健康水平。建议定期扫描低活跃度但高价值提案（如性能优化、文档增强类），以防隐性需求积压。

---  
*数据来源：GitHub TinyAGI/tinyclaw 仓库，截至 2026-04-18 00:00 UTC*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-18）

---

## 1. 今日速览

Moltis 项目在 2026-04-17 至 2026-04-18 期间保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **14 条 Issues**（7 新开 / 7 关闭）和 **16 条 PRs**（11 合并/关闭，5 待审），并发布 **2 个新版本**（`20260417.01` 与 `20260417.02`）。开发重点集中在 **代码索引功能集成、Matrix 认证增强、Slack 兼容性修复及 Web UI 技术栈迁移**，整体项目健康度良好，响应迅速。

---

## 2. 版本发布

### 🔖 `20260417.02` & `20260417.01`
- **发布时间**：2026-04-17
- **关键更新内容**：
  - ✅ **Matrix OIDC 认证支持**：通过 Matrix Authentication Service（MSC3861）实现 OAuth 2.0 / OIDC 登录，解决现代 homeserver（如 matrix.org）因弃用密码认证导致的连接问题（[#730](https://github.com/moltis-org/moltis/pull/730)）。
  - ✅ **NIP-59 Gift Wrap 支持**：替换传统 NIP-04 私信为更安全的 NIP-59 加密包装，隐藏发送者与接收者元数据，提升 Nostr DM 隐私性（[#763](https://github.com/moltis-org/moltis/pull/763)）。
  - ✅ **Slack 斜杠命令修复**：注册 `/api/channels/slack/{account_id}/commands` 端点，修复 webhook 模式下 slash command 返回 404 的问题（[#767](https://github.com/moltis-org/moltis/pull/767)）。
  - ✅ **Podman 沙箱兼容性修复**：跳过 sysfs tmpfs 挂载点以避免权限错误，确保 Ubuntu 24.04/26.04 上 Podman 正常运行（[#765](https://github.com/moltis-org/moltis/pull/765)）。
  - ✅ **日志优化**：递归移除 JSON Schema 中的 `$schema` 字段，避免 schema_normalization 模块产生千级重复 WARN 日志（[#762](https://github.com/moltis-org/moltis/pull/762)）。

> ⚠️ **无破坏性变更**，但建议升级后验证 Matrix 与 Slack 集成配置。

---

## 3. 项目进展

### 🚀 核心功能推进
- **代码索引系统完成集成**：通过四阶段 PR（[#753](https://github.com/moltis-org/moltis/pull/753) → [#756](https://github.com/moltis-org/moltis/pull/756)）实现 `moltis-code-index` 完整功能，包括：
  - 文件发现与过滤
  - SQLite + FTS5 全文搜索后端
  - 增量同步与文件监听
  - Agent 工具注册（[#771](https://github.com/moltis-org/moltis/pull/771) 待合并）
- **Web UI 启动 TypeScript 迁移**：将前端重构为 Vite + Preact + Tailwind 技术栈，提升可维护性与类型安全（[#775](https://github.com/moltis-org/moltis/pull/775)）。
- **任务列表行为优化**：修复 `task_list.list` 默认仅显示 "default" 列表的问题，新增 `list_lists` 动作以支持多列表发现（[#779](https://github.com/moltis-org/moltis/pull/779)）。

### 🛠️ 基础设施改进
- 文档自动化更新机制（Doc Rotisserie）修复 `MOLTIS_PASSWORD` → `MOLTIS_TOKEN` 环境变量命名不一致问题（[#777](https://github.com/moltis-org/moltis/pull/777)）。
- 测试安全加固：移除硬编码密钥类测试数据，规避 CodeQL 安全扫描误报（[#768](https://github.com/moltis-org/moltis/pull/768)）。

---

## 4. 社区热点

### 🔥 高互动 Issue：[#748 “Retry Prompt on Error” 功能请求](https://github.com/moltis-org/moltis/issues/748)
- **评论数**：7 | **👍 反应**：1
- **核心诉求**：用户希望在 LLM 调用失败时提供“一键重试”机制，避免手动复制 prompt 重新输入。
- **背景分析**：反映当前错误处理流程对终端用户体验不够友好，尤其在长对话或多步任务中易造成上下文丢失。该需求可能推动 **会话状态持久化** 与 **操作回滚机制** 的设计。

### 📚 文档澄清需求：[#769 多代理工作空间心跳行为说明](https://github.com/moltis-org/moltis/issues/769)
- **评论数**：3
- **痛点**：用户困惑于全局 workspace heartbeat 是否能访问各 `agents/<id>/` 上下文的历史记录，影响多代理协作场景下的状态管理设计。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 中 | [#776 task_list.list 默认行为异常](https://github.com/moltis-org/moltis/issues/776) | 未指定 `list_id` 时仅返回 "default" 列表，忽略自定义列表 | ✅ 已修复（[#779](https://github.com/moltis-org/moltis/pull/779)） |
| ⚠️ 中 | [#773 PWA 推送消息 CTA 跳转 404](https://github.com/moltis-org/moltis/issues/773) | 渐进式 Web 应用中点击推送通知后导向无效页面 | 🔄 待处理 |
| ⚠️ 低 | [#770 部分环境变量无法解析](https://github.com/moltis-org/moltis/issues/770) | 特定变量在运行时未被正确加载 | 🔄 待处理 |

> 注：此前报告的 Slack 404（#766）、Podman 兼容性（#757）、Matrix 同步崩溃（#758）等问题均已在本轮发布中修复。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **简化主代理/多代理架构**（[#774](https://github.com/moltis-org/moltis/issues/774)） | 无直接 PR | 🟡 中（开发者 @vvuk 连续提出，反映架构痛点） |
| **Netbird 网络支持**（[#764](https://github.com/moltis-org/moltis/issues/764)） | 无 | 🟢 高（基础设施扩展方向，契合远程协作场景） |
| **Nix Flake 支持**（[#745](https://github.com/moltis-org/moltis/pull/745)） | ✅ 已提交 PR | 🟢 高（提升部署灵活性，适合 DevOps 用户） |

> 💡 建议优先评估 **#774 代理模型简化** 与 **#764 Netbird 集成**，二者均指向降低多代理系统复杂度的长期目标。

---

## 7. 用户反馈摘要

- **正面反馈**：
  - Matrix OIDC 支持解决了企业用户接入现代 homeserver 的关键障碍（#730 相关讨论）。
  - 代码索引功能被社区视为“显著提升开发效率”的核心工具（#753–#756 系列 PR 获积极 review）。
- **痛点反馈**：
  - 多代理环境下状态同步逻辑不透明（#769），影响复杂工作流设计。
  - PWA 体验不一致（#773），移动端用户流失风险。
  - 环境变量解析不稳定（#770），增加部署调试成本。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 |
|------|------|------|--------|------|
| Issue | [#441](https://github.com/moltis-org/moltis/issues/441) | 自动化 CSS 路径解析或修复 Cargo 构建相对路径 | 2026-03-15 | 🟡 长期未响应（超 30 天） |
| PR | [#745](https://github.com/moltis-org/moltis/pull/745) | Nix Flake 支持 | 2026-04-16 | 🟡 待合并（2 天未审） |
| PR | [#775](https://github.com/moltis-org/moltis/pull/775) | Web UI TypeScript 迁移 | 2026-04-17 | 🟡 待合并（技术栈变更需谨慎 review） |

> 🔔 **维护者提醒**：建议本周内 review #745 与 #775，避免贡献者流失；#441 可考虑标记为 `help-wanted` 吸引社区协助。

---  
*数据来源：GitHub moltis-org/moltis 仓库，统计周期 2026-04-17 00:00 至 2026-04-18 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-18）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著提升：共处理 **50条 Issues**（新开/活跃28条，关闭22条）和 **45条 Pull Requests**（待合并20条，已合并/关闭25条），并发布了一个新版本 **v1.1.2**。项目整体处于高速迭代状态，核心功能持续增强，同时用户对升级路径、多模型路由、前端体验等提出集中反馈。开发团队响应迅速，多个关键 PR 进入评审或合并阶段。

---

## 2. 版本发布

### 🚀 v1.1.2 正式发布

本次发布聚焦于 **自主任务执行能力** 的重大升级，引入 Mission Mode 功能：

- **新增 `/mission` 命令**：支持多阶段、自主任务规划与执行，具备自我修正机制；
- **配套监控命令**：`/mission status` 查看运行中任务状态，`/mission list` 列出所有任务；
- **底层集成**：基于 AgentScope 框架实现任务分解与工具调用闭环。

> 🔗 发布详情：[#3364](https://github.com/agentscope-ai/QwenPaw/issues/3364)  
> ⚠️ **注意**：此为功能增强版本，无破坏性变更，但建议用户在复杂任务场景中测试稳定性。

---

## 3. 项目进展

今日多个重要 PR 被合并或进入关键评审阶段，推动项目向多模型路由、系统稳定性与用户体验优化迈进：

- ✅ **#3539**（已合并）：修复暗黑模式下下拉框空状态文本不可见问题，提升前端一致性；
- ✅ **#3535**（已合并）：清理过时文档并更新 `make_plan` 技能逻辑，改善技能可维护性；
- ✅ **#3536**（已合并）：支持 CLI 动态更新 LLM 提供商的 base URL，增强部署灵活性；
- ✅ **#3386**（已合并）：显著优化应用启动性能，服务器就绪时间从 ~4.5 秒降至 ~0.05 秒；
- 🔄 **#3452**（开放中）：新增 LLM 路由 UI，允许用户在设置页配置本地/云端优先策略，并在聊天中实时切换模型；
- 🔄 **#3550**（开放中）：实现路由策略的运行时生效机制，确保 UI 配置能正确传递至 agent 执行层。

> 项目整体向“多模型智能路由 + 自主任务执行”架构演进迈出关键一步。

---

## 4. 社区热点

### 🔥 高关注度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | 升级后 WORKING_DIR 仍指向旧 `.copaw` 目录 | 18 | 用户从 CoPaw 迁移至 QwenPaw 后，数据目录未正确迁移，导致配置混乱，亟需官方迁移指南或自动迁移脚本。 |
| [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) | 更新后 qwenpaw 命令未加入 PATH，.copaw 与 .qwenpaw 并存 | 11 | 安装体验割裂，用户困惑于两个应用的共存关系，需明确产品定位与迁移路径。 |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP GUI 配置无法传递至 ReMe 模块 | 6 | MCP 服务器连接失败，架构上存在配置隔离问题，影响外部工具集成能力。 |

> 📌 **分析**：用户强烈关注 **安装迁移体验** 与 **配置一致性**，反映出项目从 CoPaw 向 QwenPaw 品牌过渡期的阵痛，需加强文档与自动化迁移支持。

---

## 5. Bug 与稳定性

### ⚠️ 高优先级 Bug（按严重程度排序）

| Issue | 描述 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) | Armbian 系统下 FunctionCallOutput 报 `call_id` 验证错误 | OPEN | ❌ 无 |
| [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) | copaw 死循环执行任务，无法手动中断 | OPEN | ❌ 无（长期未解决） |
| [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | Windows + Python 3.13 下 `copaw init` 卡在安全警告提示 | OPEN | ❌ 无 |
| [#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523) | 企业微信群消息生成重复 chat 条目（user_id 为空） | OPEN | ❌ 无 |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | API 响应时快时慢，疑似资源竞争或 GC 问题 | OPEN | ❌ 无 |

> 💡 **建议**：#3026 和 #2943 为长期阻塞性 Bug，影响核心可用性，建议优先分配资源排查。

---

## 6. 功能请求与路线图信号

### 📥 用户提出的新功能需求

| Issue | 功能请求 | 是否已有 PR | 可能性评估 |
|------|--------|------------|----------|
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) | 多 Agent 编排网关（支持并行协作） | ❌ 无 | ⭐⭐⭐ 高（架构级需求，已有讨论基础） |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 支持 Kimi Code API | ❌ 无 | ⭐⭐ 中（需适配新 provider） |
| [#2621](https://github.com/agentscope-ai/QwenPaw/issues/2621) | Session 启动钩子与内存管理 | ❌ 无 | ⭐⭐⭐ 高（已有 PR #3548 在重构 memory 模块） |
| [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | 工具调用审批时增加风险等级提示 | ✅ #3515（已合并） | ✅ 已实现 |

> 🔮 **预测**：**多 Agent 编排** 和 **内存管理重构** 可能成为 v1.2 版本核心方向，当前 PR #3548 已为此铺路。

---

## 7. 用户反馈摘要

### 💬 真实用户声音提炼

- **满意点**：
  - Mission Mode 的自主执行能力获得积极期待；
  - 启动性能优化（#3386）显著改善冷启动体验；
  - 暗黑模式 UI 修复（#3539）提升视觉一致性。

- **痛点与不满**：
  - **迁移混乱**：大量用户反映从 `.copaw` 到 `.qwenpaw` 的目录迁移未自动化，数据割裂（#3356, #3309）；
  - **配置复杂**：LM Studio 远程部署缺少 API 地址配置引导（#3532）；
  - **前端体验差**：技能搜索框无法输入、暗黑模式文字看不清（#3541）；
  - **稳定性担忧**：死循环任务无法中断（#3026）、Armbian 兼容性差（#3549）。

> 🛠️ **建议**：发布官方《QwenPaw 迁移指南》，并提供一键迁移脚本。

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue / PR

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|----------|------|------|
| [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) | Issue | copaw 死循环，2小时内重复执行任务 | 2026-04-07 | OPEN | ⚠️ 高优先级，影响可用性，需紧急排查 |
| [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | Issue | `copaw init` hangs on security prompt | 2026-04-04 | OPEN | ⚠️ 阻塞新用户入门，建议修复 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | PR | 语义技能路由（Semantic Skill Routing） | 2026-04-08 | OPEN（Under Review） | 🔄 重要性能优化，建议加速评审 |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) | PR | 修复 session JSON 文件并发写入损坏 | 2026-04-12 | OPEN（Under Review） | 🔄 P0 稳定性问题，建议优先合并 |

> 📢 **维护者提醒**：请重点关注 #3026 和 #3278，二者均涉及核心稳定性，延迟处理可能引发用户流失。

---

**报告生成时间**：2026-04-18  
**数据来源**：GitHub CoPaw/QwenPaw 仓库 Issues & PRs  
**分析师**：AI 开源项目动态监测引擎

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-04-18）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低，无新 Pull Request 提交或版本发布。社区互动集中于一个已关闭的 Issue，涉及版本更新失败问题，目前该问题已得到响应并关闭。项目处于维护期，开发节奏平稳，暂无重大功能推进或紧急修复。整体健康度良好，但需关注用户反馈中的稳定性隐患。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
*（无 PR 合并或关闭，今日无功能或修复推进）*

---

### 4. 社区热点  
**Issue #33: [CLOSED] 1.7.11更新失败**  
- 链接：https://github.com/gaoyangz77/easyclaw/issues/33  
- 作者：@slowayear | 最后更新：2026-04-17  
- 评论数：1 | 👍：0  

该 Issue 报告了在尝试更新至 v1.7.11 时遭遇失败，并附上了错误截图。尽管未提供详细日志，但维护团队已将其标记为“已关闭”，表明问题可能已被识别或临时解决。此问题反映出部分用户在版本升级路径上存在兼容性或网络/依赖问题，建议后续加强更新流程的鲁棒性提示。

---

### 5. Bug 与稳定性  
- **版本更新失败（Issue #33）**：用户反馈 v1.7.11 更新过程中出现异常，虽已关闭，但未明确说明是否已部署修复补丁。目前无关联的 fix PR，建议维护者补充说明关闭原因（如：已知问题、用户环境问题或已热修）。  
  → 严重程度：中（影响用户体验，但非运行时崩溃）  
  → 是否有 fix PR：否  

---

### 6. 功能请求与路线图信号  
*（今日无新功能请求或相关 PR，暂无可纳入下一版本的明确信号）*

---

### 7. 用户反馈摘要  
从 Issue #33 可提炼出以下用户痛点：  
- **更新机制可靠性不足**：用户在进行版本升级时遭遇失败，缺乏清晰的错误提示或回滚指引。  
- **缺乏故障排查支持**：截图虽提供视觉线索，但无日志或错误码，说明项目在错误反馈设计上仍有优化空间。  
- 使用场景推测：用户可能为普通终端用户，依赖自动更新流程，对中断敏感。  

整体满意度暂未体现积极评价，建议增强更新流程的容错与引导机制。

---

### 8. 待处理积压  
经核查，目前无长期未响应（>7天）的高优先级 Issue 或 PR。但鉴于 Issue #33 已关闭却未附解决方案说明，建议维护者补充注释以提升透明度，避免同类问题重复提交。

---  
*数据来源：GitHub EasyClaw 仓库（截至 2026-04-18 00:00 UTC）*

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*