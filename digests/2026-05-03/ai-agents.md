# OpenClaw 生态日报 2026-05-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-03 02:01 UTC

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
- [NemoClaw](https://github.com/NVIDIA/NemoClaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-05-03
**数据区间：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **500 条 Issues** 和 **500 条 PRs** 更新。社区围绕 v2026.5.2 正式版发布展开热烈讨论，外部插件安装、Gateway 性能优化成为核心焦点。性能回归问题（尤其是 2026.4.29 版本引发的 CPU 占用、WebUI 卡顿）引发大量用户反馈，维护团队已通过多个 hotfix PR 积极响应。整体项目处于快速迭代期，建议用户关注最新稳定版以获得最佳体验。

---

## 2. 版本发布

### v2026.5.2 正式版发布

**发布时间：** 2026-05-03
**发布类型：** 正式版

**主要更新：**

| 领域 | 更新内容 | 贡献者 |
|------|----------|--------|
| 外部插件安装 | 覆盖 npm-first 迁移、过期配置修复、缺失包载荷处理、Beta 通道回退机制 | @vincentkoc |
| Gateway/Agent | 热路径精简优化 | — |

**迁移注意事项：**
- 外部插件安装流程已重构，建议首次使用前运行 `openclaw doctor` 检查配置
- Beta 通道插件回退逻辑变更，如有自定义插件源需验证兼容性

**相关链接：**
- Release: https://github.com/openclaw/openclaw/releases/tag/v2026.5.2
- Beta.3: https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.3
- Beta.2: https://github.com/openclaw/openclaw/releases/tag/v2026.5.2-beta.2

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 类型 | 状态 |
|------|------|------|------|
| [#76366](https://github.com/openclaw/openclaw/pull/76366) | fix(config): properly handle array index in config unset | config | ✅ CLOSED |
| [#76351](https://github.com/openclaw/openclaw/pull/76351) | fix(gateway): preserve err.stack when chat.send/agent attachment parsing fails | gateway | ✅ CLOSED |
| [#76287](https://github.com/openclaw/openclaw/pull/76287) | test(e2e): fix kitchen sink crabbox coverage | testing | ✅ CLOSED |

### 推进中的重要 PRs

| PR # | 标题 | 领域 | 规模 |
|------|------|------|------|
| [#74787](https://github.com/openclaw/openclaw/pull/74787) | [codex] Reap orphaned acpx Codex ACP processes | Codex | L |
| [#70864](https://github.com/openclaw/openclaw/pull/70864) | feat: add scoped mention pattern policy | 多渠道 | XL |
| [#74905](https://github.com/openclaw/openclaw/pull/74905) | fix: proxy direct APNs HTTP2 sessions | 安全 | XL |
| [#75004](https://github.com/openclaw/openclaw/pull/75004) | Add shell command explainer | CLI | XL |
| [#76181](https://github.com/openclaw/openclaw/pull/76181) | fix(ollama): restore catalog-driven num_ctx | Agent | M |
| [#76338](https://github.com/openclaw/openclaw/pull/76338) | Stop heartbeat tool turns from asking for HEARTBEAT_OK | Agent | L |
| [#76350](https://github.com/openclaw/openclaw/pull/76350) | perf(plugins): cache fs.existsSync probes during plugin scan | 性能 | S |

**性能亮点：** #76350 通过缓存 `fs.existsSync` 调用，将 Windows 冷启动的该函数自耗时从 ~25s 降至接近零，预计整体冷启动时间缩短约 50%。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue # | 标题 | 评论 | 点赞 | 标签 |
|---------|------|------|------|------|
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | amazon-bedrock-mantle lacks config.discovery.enabled gate | 10 | 0 | bug |
| [#75707](https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU pinned at 100%: root causes & workarounds | 10 | 5 | bug |
| [#65302](https://github.com/openclaw/openclaw/issues/65302) | Your Updates Are Killing Your Product | 9 | 6 | 讨论 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets on same session key | 9 | 1 | bug |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | Exec approvals path ignores active state root | 9 | 0 | bug |

**热点分析：**

1. **#67288 / #75707** — 用户对 AWS Bedrock 集成和 Gateway 性能问题高度关注，反映生产环境对稳定性的强需求
2. **#65302** — 社区情绪类反馈，用户对频繁更新导致的产品退化表达不满，维护者需关注
3. **#63216 / #29736** — 长期未解决的配置和权限问题，需要优先处理

---

## 5. Bug 与稳定性

### 严重 Bug（影响生产 / 高影响）

| Issue # | 标题 | 版本 | 状态 | Fix PR |
|---------|------|------|------|--------|
| [#75707](https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU 100% idle | v2026.4.29 | OPEN | — |
| [#76174](https://github.com/openclaw/openclaw/issues/76174) | openai/* embedded runs hang with zero tokens | v2026.4.29 | OPEN | — |
| [#75824](https://github.com/openclaw/openclaw/issues/75824) | Web UI chat bubbles then disappears | v2026.4.29 | OPEN | — |
| [#76295](https://github.com/openclaw/openclaw/issues/76295) | core-plugin-tools stage ~8.3s latency since v2026.4.24 | v2026.4.24+ | OPEN | — |
| [#76188](https://github.com/openclaw/openclaw/issues/76188) | Performance chain causing CPU/event-loop saturation | — | CLOSED | — |

### 中等 Bug（功能受损 / 回归）

| Issue # | 标题 | 版本 | 状态 | Fix PR |
|---------|------|------|------|--------|
| [#74209](https://github.com/openclaw/openclaw/issues/74209) | Bundled plugins block gateway startup | v2026.4.26+ | OPEN | — |
| [#74886](https://github.com/openclaw/openclaw/issues/74886) | WhatsApp session unstable, leaked thinking traces | v2026.4.27 | OPEN | — |
| [#75502](https://github.com/openclaw/openclaw/issues/75502) | Downgrading fails due to stale file-transfer entry | v2026.4.29 | OPEN | — |
| [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI webchat duplicates every assistant reply | v2026.4.21 | OPEN | — |

### 回归问题汇总

**v2026.4.29 版本存在多个性能回归：**
- WebUI 响应极慢（#76236）
- 会话列表 API 重复调用导致 Gateway 延迟（#76166）
- 消息管道性能瓶颈（auth 6.2s + 固定开销 16s）（#76107）

**建议：** 如遇性能问题，建议回退至 v2026.4.23 或等待 v2026.5.2 稳定版。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 标题 | 需求类型 | 社区支持 |
|---------|------|----------|----------|
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | Add backup/restore utility for config, cron jobs, and session history | 增强 | 0 👍 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | 性能 | 0 👍 |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) | Session snapshots — save and load context checkpoints | 增强 | 0 👍 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model usage logging for cost tracking | 增强 | 1 👍 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Add MathJax/LaTeX Support to Control UI | 增强 | 4 👍 |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | Add .gitignore-like exclude patterns to backup CLI | 增强 | 0 👍 |

### 已有对应 PR 的功能

| 功能 | PR # | 状态 |
|------|------|------|
| Shell 命令解释器 | [#75004](https://github.com/openclaw/openclaw/pull/75004) | OPEN (XL) |
| Cron skipWhenIdle 选项 | [#55982](https://github.com/openclaw/openclaw/pull/55982) | OPEN (M) |
| Agent 描述字段（动态发现） | [#75225](https://github.com/openclaw/openclaw/pull/75225) | OPEN (S) |
| Slack per-channel requireExplicitMention | [#63230](https://github.com/openclaw/openclaw/pull/63230) | OPEN (M) |

---

## 7. 用户反馈摘要

### 核心痛点

| 类别 | 反馈内容 | 相关 Issue |
|------|----------|------------|
| **性能退化** | v2026.4.29 版本后 Gateway CPU 占用 100-130%，RAM ~724MB，会话列表延迟 20s+ | #75707, #76188 |
| **稳定性** | Windows 11 24H2 节点程序卡在 PATH 信息无法连接 | #39038 |
| **配置复杂性** | 插件配置无 env-var 支持，policy-locked sandbox 需重建镜像 | #72950 |
| **升级风险** | 降级失败（stale file-transfer entry），升级后性能下降 | #75502, #76236 |
| **Telegram 路由** | DMs 仍被错误路由至 agent:main:main | #41165 |

### 正面反馈信号

- v2026.5.2 的外部插件安装改进获得积极响应（@vincentkoc 贡献突出）
- 社区对 Loop 检测增强（#75924）和 Circuit breaker（#76345）表示期待

---

## 8. 待处理积压

### 长期未响应的关键 Issue（>30 天无维护者回复）

| Issue # | 标题 | 创建日期 | 状态 | 优先级 |
|---------|------|----------|------|--------|
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | Exec approvals path ignores active state root | 2026-02-28 | OPEN | 高 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | backup/restore utility | 2026-02-10 | OPEN | 中 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead | 2026-02-12 | OPEN | 高 |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) | Session snapshots | 2026-02-10 | OPEN | 中 |
| [#13751](https://github.com/openclaw/openclaw/issues/13751) | Feishu plugin: remove contact permission | 2026-02-11 | OPEN | 中 |

### 建议关注

1. **#29736** — 安全相关（exec approvals 路径问题），建议优先评估
2. **#14785** — 每次会话固定 3,500 tokens 开销，优化价值高
3. **#65302** — 社区情绪反馈，需官方回应安抚

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 更新（24h） | 500 |
| PRs 更新（24h） | 500 |
| 新版本发布 | 3 |
| 热门 Issue 评论数峰值 | 10 |
| 性能回归 Issue 数 | 6+ |

---

*报告生成时间：2026-05-03*
*数据来源：GitHub OpenClaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向分析报告

**报告日期**：2026-05-03
**分析范围**：13 个开源项目过去 24 小时社区动态

---

## 1. 生态全景

2026 年 5 月初，个人 AI 助手与自主智能体开源生态呈现**"一超多强、快速分化"**的格局。OpenClaw 以单日 500 条 Issues/PR 更新的绝对体量占据生态核心位置，其 v2026.5.2 发布周期内外部插件安装、Gateway 性能优化成为社区焦点。NVIDIA 主导的 NemoClaw 紧随其后（28 Issues + 50 PRs），CLI 重构与安全加固双线并进。IronClaw、Zeroclaw、NanoClaw 构成第二梯队，在各自垂直领域（NEAR 生态、多渠道集成、工具链扩展）深耕。值得注意的是，CoPaw（14 Issues）、Moltis（4 Issues + 3 PRs）、LobsterAI（4 PRs）保持稳定输出，而 TinyClaw、ZeptoClaw、EasyClaw 三个项目过去 24 小时无任何活动，可能已处于维护停滞状态。整体生态活跃度两极分化明显，约 70% 的社区能量集中在前 5 个项目。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Releases | 合并 PR | 健康度 | 备注 |
|------|-------------|-----------|----------|---------|--------|------|
| **OpenClaw** | 500 | 500 | 3 | — | 🟢 卓越 | 核心参照，v2026.5.2 发布周期 |
| **NemoClaw** | 28 | 50 | 0 | 31 | 🟢 卓越 | CLI 重构 + 安全修复密集期 |
| **IronClaw** | 20 | 46 | 0 | 6 | 🟢 良好 | Reborn 架构重构 + NEAR 集成 |
| **Zeroclaw** | 50 | 34 | 0 | — | 🟢 良好 | Schema V3 迁移进行中 |
| **NanoClaw** | 13 | 17 | 0 | 7 | 🟢 良好 | DeltaChat 集成 + v1→v2 迁移 |
| **CoPaw** | 14 | 6 | 0 | 0 | 🟢 良好 | MCP 稳定性 + 模型回退需求 |
| **NanoBot** | 3 | 20 | 0 | 8 | 🟢 良好 | WhatsApp 媒体 + 安全修复 |
| **Moltis** | 4 | 3 | 0 | 1 | 🟢 良好 | 沙箱多后端 + i18n 推进 |
| **PicoClaw** | 7 | 8 | 1 (nightly) | 0 | 🟡 中等 | Bug 修复为主，路径安全漏洞 |
| **LobsterAI** | 0 | 4 | 0 | 0 | 🟡 中等 | 渠道扩展 + UI 优化 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 🔴 沉寂 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 🔴 沉寂 | 无活动 |
| **EasyClaw** | 0 | 0 | 0 | 0 | 🔴 沉寂 | 无活动 |

**关键观察**：OpenClaw 与 NemoClaw 的活跃度远超其他项目之和，反映出生态资源高度集中。3 个沉寂项目（均为非核心 fork 或实验性分支）需关注是否应归档。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位与技术辐射

OpenClaw 作为生态核心参照物，其技术决策对其他项目具有显著示范效应：

- **版本发布节奏**：OpenClaw 是唯一保持高频正式版本发布的项目（v2026.5.2 含 3 个 tag），其他项目多依赖 nightly 或无版本化
- **社区规模**：单日 500 条更新是 NemoClaw（78 条）的 6.4 倍，反映用户基数和贡献者密度的绝对优势
- **技术路线**：OpenClaw 坚持"插件生态 + Gateway 抽象层"架构，与 NemoClaw 的"CLI-first + NVIDIA 硬件优化"路线形成互补

### 3.2 与同类项目的关键差异

| 维度 | OpenClaw | NemoClaw | IronClaw | Zeroclaw |
|------|----------|----------|----------|----------|
| **核心抽象** | Gateway/Agent 双层 | CLI + Sandbox | AgentLoopDriver | Channel/Provider |
| **平台定位** | 通用全平台 | NVIDIA GPU 优化 | NEAR 生态深度集成 | 多渠道聚合 |
| **发布节奏** | 正式版高频 | 无版本化 | 无版本化 | 无版本化 |
| **安全投入** | 中等 | 高（SSRF/Token 泄露） | 中 | 中 |
| **国际化** | 基础 | 基础 | 基础 | 基础 |

---

## 4. 共同关注的技术方向

以下技术需求在多个项目中**同步涌现**，反映行业共识：

### 4.1 模型回退与高可用（CoPaw、NanoBot、IronClaw）

| 项目 | 诉求 | Issue/PR |
|------|------|----------|
| CoPaw | Model fallback chain for automatic rate limit handling | #1327, #4011, #3789 |
| NanoBot | reasoning_effort null 禁用功能 | #3585, #3587 |
| IronClaw | DeepSeek tool use broken | #3201 |

**共同信号**：多 Provider 环境下的自动切换和容错机制是社区强烈需求，OpenClaw 可考虑在 Gateway 层引入统一的 fallback 策略。

### 4.2 本地模型支持与 Ollama 集成（OpenClaw、NemoClaw、CoPaw）

| 项目 | 问题 | Issue/PR |
|------|------|----------|
| OpenClaw | Ollama num_ctx 修复 | #76181 |
| NemoClaw | Ollama ports missing、tool-call reliability | #2199, #2733 |
| CoPaw | Ollama 频道无法携带对话历史 | #3991, #4003 |

**共同信号**：Ollama 作为本地推理入口已成为事实标准，但各项目集成深度参差不齐，存在标准化机会。

### 4.3 安全加固（OpenClaw、NemoClaw、NanoBot）

| 项目 | 修复内容 | Issue/PR |
|------|----------|----------|
| OpenClaw | Postinstall EACCES/EPERM 权限问题 | #76362 |
| NemoClaw | Token 泄露防护、SSRF 加固、TLS 错误分类 | #2468, #2414, #2245 |
| NanoBot | `{env:VAR}` 环境变量语法支持 | #2218 |

**共同信号**：随着项目进入生产部署阶段，安全性从"可选"变为"必选"，SSRF、Token 泄露、权限配置是共同焦点。

### 4.4 国际化与本地化（NanoClaw、Moltis、NanoBot）

| 项目 | 进展 | PR |
|------|------|-----|
| NanoClaw | 简体中文 WeChat 支持 | #6242 |
| Moltis | 繁体中文（台湾）支持 | #339 |
| NanoBot | 巴西葡萄牙语支持 | #4009 |

**共同信号**：非英语社区参与度提升，多语言支持从"nice-to-have"变为社区健康指标。

---

## 5. 差异化定位分析

### 5.1 功能侧重差异

| 项目 | 核心功能 | 差异化优势 |
|------|----------|------------|
| **OpenClaw** | 通用 AI Agent 框架 | 插件生态、Gateway 抽象、多渠道支持 |
| **NemoClaw** | NVIDIA 优化本地推理 | GPU 加速、Sandbox 安全、CLI 工具链 |
| **IronClaw** | NEAR 区块链集成 | NEAR Intents、Agent 经济层、去中心化身份 |
| **Zeroclaw** | 多渠道消息聚合 | Schema V3、飞书/WhatsApp/Slack 深度集成 |
| **NanoClaw** | 轻量级工具调用 | DeltaChat E2EE、v1→v2 迁移、容器化优先 |
| **CoPaw** | 本地模型 + MCP | Ollama 集成、MCP 客户端、模型回退 |
| **Moltis** | 安全沙箱执行 | Docker-in-Docker、多后端沙箱、Matrix E2EE |
| **PicoClaw** | 嵌入式/边缘部署 | 轻量化、路径安全、OpenRouter 集成 |

### 5.2 目标用户分层

| 用户类型 | 推荐项目 | 理由 |
|----------|----------|------|
| 企业级多渠道部署 | OpenClaw、Zeroclaw | 插件生态丰富、渠道覆盖全面 |
| 本地推理/隐私敏感 | NemoClaw、CoPaw、Moltis | Ollama 优先、硬件加速、沙箱隔离 |
| 区块链/DWeb 场景 | IronClaw | NEAR 原生集成、意图经济 |
| 快速原型/个人助手 | PicoClaw、NanoClaw | 轻量化、易上手 |
| 微信/飞书生态 | LobsterAI、Zeroclaw | 国内渠道深度支持 |

### 5.3 技术架构关键差异

| 架构维度 | 代表项目 | 特点 |
|----------|----------|------|
| **Agent 执行模型** | OpenClaw（Gateway/Agent）、IronClaw（AgentLoopDriver） | 抽象层差异导致插件兼容性不同 |
| **沙箱策略** | Moltis（远程多后端）、NemoClaw（Docker-in-Docker） | 云端 vs 本地安全边界 |
| **配置管理** | Zeroclaw（Schema V3）、OpenClaw（JSON Schema） | 配置演进路径影响迁移成本 |
| **消息路由** | Zeroclaw（Channel 抽象）、NanoClaw（namespacedPlatformId） | 路由设计影响多实例部署 |

---

## 6. 社区热度与成熟度分层

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────────┐
│  第一梯队：快速迭代期                                              │
│  OpenClaw (500/日) | NemoClaw (78/日) | IronClaw (66/日)          │
│  特征：高频 PR 合并、架构重构、安全修复密集                          │
├─────────────────────────────────────────────────────────────────┤
│  第二梯队：功能完善期                                              │
│  Zeroclaw (84/日) | NanoClaw (30/日) | CoPaw (20/日)              │
│  特征：功能扩展为主、bug 修复为辅、社区反馈驱动                      │
├─────────────────────────────────────────────────────────────────┤
│  第三梯队：稳定维护期                                              │
│  NanoBot (23/日) | Moltis (7/日) | PicoClaw (15/日) | LobsterAI (4/日) │
│  特征：增量改进为主、版本发布节奏放缓、关注稳定性                     │
├─────────────────────────────────────────────────────────────────┤
│  沉寂/归档期                                                      │
│  TinyClaw | ZeptoClaw | EasyClaw                                 │
│  特征：无活动、维护者失联、建议评估归档                              │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度 | 指标 |
|------|--------|------|
| **OpenClaw** | ⭐⭐⭐⭐⭐ | 版本化发布、文档完善、插件市场、安全响应机制 |
| **NemoClaw** | ⭐⭐⭐⭐ | 安全 PR 密集、CLI 重构规范、CI/CD 成熟 |
| **IronClaw** | ⭐⭐⭐⭐ | Reborn 架构设计、Event Projection 服务 |
| **Zeroclaw** | ⭐⭐⭐ | Schema V3 迁移中、长期 Issue 积压 |
| **NanoClaw** | ⭐⭐⭐ | v1→v2 迁移完成、DeltaChat 集成 |
| **CoPaw** | ⭐⭐⭐ | MCP 稳定性问题待解、模型回退需求强烈 |
| **Moltis** | ⭐⭐ | 沙箱多后端待合并、i18n 刚起步 |
| **PicoClaw** | ⭐⭐ | 路径安全漏洞待修复、夜间构建不稳定 |

---

## 7. 值得关注的趋势信号

### 7.1 技术趋势

**趋势 1：安全从边缘走向核心**

NemoClaw 单日合并 3 个安全修复（Token 泄露、SSRF、TLS），OpenClaw 修复 Postinstall 权限问题，NanoBot 引入 `{env:VAR}` 语法。这反映出随着项目进入生产部署，安全性从"可选加固"变为"必须具备"。**对开发者的启示**：新项目应在架构设计阶段内置安全机制，而非事后打补丁。

**趋势 2：本地推理成为标配**

CoPaw、NemoClaw、OpenClaw 均在 Ollama 集成上投入资源，但均遇到上下文丢失、端口配置、tool-call 可靠性等问题。这表明**本地模型支持的技术复杂度被低估**。**对开发者的启示**：Ollama 集成不应仅停留在"能跑通"，需系统性解决会话状态、工具调用、模型发现等全链路问题。

**趋势 3：CLI 工具链成为差异化焦点**

NemoClaw 密集推进 CLI 重构（提取 sandbox connect/skill install/live state 等模块），NanoClaw 新增 backup/import/insights 命令。**对开发者的启示**：CLI 是开发者体验的核心，模块化设计可显著降低维护成本并提升可测试性。

### 7.2 社区趋势

**趋势 4：国际化从英语单语走向多语**

Moltis（繁体中文）、NanoClaw（简体中文）、NanoBot（巴西葡萄牙语）同步推进 i18n，反映非英语社区参与度提升。**对开发者的启示**：i18n 投入的 ROI 正在上升，建议将多语言支持纳入版本规划。

**趋势 5：多渠道聚合成为标配能力**

Zeroclaw（飞书/WhatsApp/Slack）、NanoClaw（DeltaChat）、LobsterAI（微信/企业微信）持续扩展渠道覆盖。**对开发者的启示**：渠道抽象层的设计质量直接影响扩展成本，建议采用统一的 Channel Interface 规范。

**趋势 6：架构重构窗口期**

IronClaw（Reborn）、Zeroclaw（Schema V3）、NemoClaw（CLI 重构）均处于架构演进期。**对开发者的启示**：架构重构是高风险行为，建议配套完整的迁移文档和自动化测试，避免重蹈 OpenClaw v2026.4.29 性能回归覆辙。

### 7.3 行业信号

**信号 1：性能回归问题频发**

OpenClaw v2026.4.29 引发 Gateway CPU 100%、WebUI 卡顿等大量反馈，NemoClaw Nightly E2E 持续失败。**对开发者的启示**：快速迭代期需格外重视 CI/CD 质量门禁，避免"版本发布 = 用户流失"恶性循环。

**信号 2：社区情绪反馈涌现**

Zeroclaw #65302（"Your Updates Are Killing Your Product"）获得 6 赞，OpenClaw 性能回归引发用户不满。**对开发者的启示**：社区情绪是项目健康的早期预警，需建立用户反馈的快速响应机制。

**信号 3：跨项目协作萌芽**

Moltis 参考 sandcastle 架构、NemoClaw 引入 k3s 生态、IronClaw 集成 NEAR 区块链。**对开发者的启示**：AI Agent 生态正在从"各自为战"走向"组件互认"，跨项目技术借鉴可加速迭代。

---

## 附录：关键数据汇总

| 指标 | 生态总计 | 活跃项目（9个） | 沉寂项目（3个） |
|------|----------|----------------|----------------|
| Issues (24h) | 639 | 639 | 0 |
| PRs (24h) | 688 | 688 | 0 |
| Releases | 4 | 4 | 0 |
| 合并 PR | 53+ | 53+ | 0 |
| 安全相关修复 | 8+ | 8+ | 0 |
| 新功能 PR | 25+ | 25+ | 0 |

---

*报告生成时间：2026-05-03*
*数据来源：GitHub 各项目仓库活动日志*
*分析师：AI Project Analyst

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-03
**项目**: HKUDS/nanobot
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

2026-05-03 是 NanoBot 项目高度活跃的一天。社区共提交 **3 个新 Issue** 和 **20 个 PR 更新**（其中 8 个已合并/关闭，12 个待处理），整体开发节奏保持强劲。今日合并的 PR 涵盖 WhatsApp 媒体支持、环境变量语法、安全加固等多个重要功能，同时有多个 bug fix 正在审查中。值得注意的是，exec 工具超时机制改进和 reasoning effort 禁用功能的修复 PR 预计将很快合并，这对用户体验有直接影响。

---

## 2. 版本发布

**今日无新版本发布**。

---

## 3. 项目进展

今日共有 **8 个 PR 被合并/关闭**，项目在多个维度取得进展：

### 3.1 功能增强

| PR 编号 | 标题 | 合并日期 | 关键内容 |
|---------|------|----------|----------|
| [#2010](https://github.com/HKUDS/nanobot/pull/2010) | feat(whatsapp): add media send/receive support | 2026-05-02 | 新增 WhatsApp 媒体收发支持（图片、音频、视频、文档），支持自动下载和统一发送 API |
| [#2218](https://github.com/HKUDS/nanobot/pull/2218) | feat(security): support `{env:VAR}` syntax | 2026-05-02 | 支持在 config.json 中使用 `{env:VAR_NAME}` 语法引用环境变量，提升敏感信息安全性 |
| [#3456](https://github.com/HKUDS/nanobot/pull/3456) | feat(skills): add create-instance built-in skill + webui remote backend | 2026-05-02 | 新增 `create-instance` 内置技能，支持通过辅助脚本创建新 bot 实例；支持 GitHub Pages 部署 WebUI |
| [#3176](https://github.com/HKUDS/nanobot/pull/3176) | feat(feishu): thread-scoped sessions, reply_in_thread, non-blocking reaction | 2026-05-02 | 飞书频道新增线程级会话隔离、回复线程支持、非阻塞反应功能 |

### 3.2 Bug 修复

| PR 编号 | 标题 | 合并日期 | 修复内容 |
|---------|------|----------|----------|
| [#3419](https://github.com/HKUDS/nanobot/pull/3419) | fix(provider): preserve reasoning_content when merging consecutive assistant messages | 2026-05-02 | 修复 DeepSeek thinking mode 400 错误，保留合并消息时的 `reasoning_content` |
| [#3414](https://github.com/HKUDS/nanobot/pull/3414) | fix(agent): cap recent history section in system prompt | 2026-05-02 | 限制系统提示中 "Recent History" 部分最大 32K 字符，防止历史记录膨胀 |
| [#3247](https://github.com/HKUDS/nanobot/pull/3247) | fix(memory): fall back to raw_archive on LLM error response | 2026-05-02 | 修复 LLM 调用失败时 session JSONL 被清空但 archive 任务未执行的问题 |
| [#3594](https://github.com/HKUDS/nanobot/pull/3594) | fix: allow_patterns take priority over deny_patterns in ExecTool | 2026-05-02 | 修复 ExecTool 中 allow_patterns 无法覆盖 deny_patterns 的问题 |

---

## 4. 社区热点

以下 Issues 和 PR 今日获得较高关注度：

### 4.1 热门 Issues

**#3595** - [enhancement] Remove the 600 second cap on configuring `exec` timeout in config.json
🔗 https://github.com/HKUDS/nanobot/issues/3595
📊 评论: 0 | 👍: 0
📝 **诉求分析**: 用户反映 `exec` 工具的 600 秒超时上限过于严格，无法满足长时间运行任务（如下载、脚本执行）的需求。该 Issue 已关联 PR #3596，提议将固定超时改为两层控制（硬超时 + 软超时）。

**#3597** - [bug] NanoBot confused and couldn't access workspace root
🔗 https://github.com/HKUDS/nanobot/issues/3597
📊 评论: 0 | 👍: 0
📝 **诉求分析**: 用户在测试中将 NanoBot 分配任务撰写 X 帖子并保存到文件时遇到工作区根目录访问问题，表明文件路径处理可能存在缺陷。

### 4.2 热门 PR

**#3598** - perf(context): cache system prompt with mtime-based invalidation
🔗 https://github.com/HKUDS/nanobot/pull/3598
📝 **亮点**: 通过 mtime 缓存失效机制优化 `build_system_prompt()` 调用频率，减少重复计算。

**#3589** - feat(discord): interactive components (buttons, select menus, modals)
🔗 https://github.com/HKUDS/nanobot/pull/3589
📝 **亮点**: 为 Discord 频道添加按钮、选择菜单、模态表单等交互组件支持。

**#3513** - feat(audio): unify transcription providers and add local Whisper support
🔗 https://github.com/HKUDS/nanobot/pull/3513
📝 **亮点**: 统一音频转录提供商架构，新增本地 Whisper 支持，提升语音功能的可靠性。

---

## 5. Bug 与稳定性

今日共报告 **2 个新 Bug**，另有 **2 个 Bug fix PR 正在审查中**：

### 5.1 新报告 Bug

| 严重程度 | Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🟡 中 | [#3597](https://github.com/HKUDS/nanobot/issues/3597) | NanoBot confused and couldn't access workspace root | OPEN | 无 |
| 🟡 中 | [#3585](https://github.com/HKUDS/nanobot/issues/3585) | `reasoning_effort: null` does not disable thinking on Xiaomi MiMo | OPEN | ✅ PR #3587 |

### 5.2 正在修复的 Bug

| PR 编号 | 标题 | 关联 Issue | 修复内容 |
|---------|------|------------|----------|
| [#3587](https://github.com/HKUDS/nanobot/pull/3587) | fix: honor null reasoning effort disable | #3585 | 修复 `reasoning_effort: null` 无法禁用思考模式的问题，区分省略与显式 null |
| [#3588](https://github.com/HKUDS/nanobot/pull/3588) | fix(transcription): convert non-WAV audio to 16kHz mono WAV before upload | - | 修复自托管 Whisper 后端只接受 16kHz 单声道 WAV 的兼容性问题 |

### 5.3 安全相关修复

**#3492** - fix(security): harden public-deploy footguns on WebUI bootstrap and API serve
🔗 https://github.com/HKUDS/nanobot/pull/3492
⚠️ **重要性**: 高
📝 **内容**: 修复公开部署时 WebUI bootstrap 和 API serve 的安全隐患，包括 token 授权范围过大等问题。

---

## 6. 功能请求与路线图信号

今日社区提出了以下功能需求，结合已有 PR 可判断部分功能可能进入下一版本：

### 6.1 高优先级功能请求

| Issue/PR | 标题 | 预计状态 | 分析 |
|----------|------|----------|------|
| [#3595](https://github.com/HKUDS/nanobot/issues/3595) + [#3596](https://github.com/HKUDS/nanobot/pull/3596) | exec 工具超时机制改进 | 即将合并 | 用户刚需，PR 已就绪 |
| [#3585](https://github.com/HKUDS/nanobot/issues/3585) + [#3587](https://github.com/HKUDS/nanobot/pull/3587) | reasoning_effort null 禁用功能 | 即将合并 | 文档与实现不一致，PR 已就绪 |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | 统一音频转录 + 本地 Whisper | 审查中 | 提升语音功能可靠性 |
| [#3589](https://github.com/HKUDS/nanobot/pull/3589) | Discord 交互组件 | 审查中 | 丰富频道功能 |

### 6.2 实验性/WIP 功能

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | Improve beta WebUI turn completion and chat isolation | WIP | WebUI 体验优化 |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | feat(dream): add update scope controls | OPEN | Dream 功能细粒度控制 |
| [#3590](https://github.com/HKUDS/nanobot/pull/3590) | feat(heartbeat): add manual trigger command | OPEN | 心跳机制手动触发 |

---

## 7. 用户反馈摘要

从今日 Issues 和 PR 中提炼的用户痛点与使用场景：

### 7.1 用户痛点

1. **超时限制过严**: 用户在执行下载或长时间脚本时因 600 秒上限被强制中断，影响工作流连续性。
2. **文档与实现不一致**: `reasoning_effort: null` 文档说明可禁用思考模式，但实际无法生效，影响特定模型（如 Xiaomi MiMo）的使用。
3. **工作区路径问题**: NanoBot 在访问工作区根目录时出现混乱，导致文件保存失败。
4. **安全配置复杂**: 公开部署时需要更清晰的安全配置指导，当前配置可能存在隐式风险。

### 7.2 用户满意点

1. **WhatsApp 媒体支持**: 社区对新增的媒体收发功能反响积极，PR #2010 解决了长期需求。
2. **环境变量支持**: `{env:VAR}` 语法让敏感信息管理更安全，用户无需明文存储 API Key。
3. **飞书线程会话**: 线程级会话隔离功能提升了多人协作场景下的体验。

---

## 8. 待处理积压

以下 Issue 和 PR 需要维护者关注：

### 8.1 长期未响应的 Issues

| Issue 编号 | 标题 | 创建日期 | 状态 | 建议 |
|------------|------|----------|------|------|
| [#3585](https://github.com/HKUDS/nanobot/issues/3585) | `reasoning_effort: null` does not disable thinking | 2026-05-02 | OPEN | 已有 fix PR #3587，建议优先审查 |
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | NanoBot confused and couldn't access workspace root | 2026-05-02 | OPEN | 需确认是否复现并定位根因 |

### 8.2 需审查的待合并 PR

| PR 编号 | 标题 | 提交日期 | 优先级 | 建议 |
|---------|------|----------|--------|------|
| [#3587](https://github.com/HKUDS/nanobot/pull/3587) | fix: honor null reasoning effort disable | 2026-05-02 | 🔴 高 | 关联 Issue #3585，建议优先合并 |
| [#3596](https://github.com/HKUDS/nanobot/pull/3596) | feat(exec): add activity-aware timeout controls | 2026-05-02 | 🔴 高 | 关联 Issue #3595，用户刚需 |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | fix(security): harden public-deploy footguns | 2026-04-28 | 🟠 中高 | 安全相关，建议尽快审查 |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | feat(audio): unify transcription providers | 2026-04-28 | 🟡 中 | 功能完善，建议审查 |

---

## 📈 项目健康度评估

| 指标 | 数值 | 评估 |
|------|------|------|
| 今日活跃 PR | 20 | 🟢 非常活跃 |
| PR 合并率 | 8/20 (40%) | 🟢 健康 |
| 新增 Issue | 3 | 🟢 正常 |
| Bug Fix 效率 | 4 个已合并 + 2 个待合并 | 🟢 响应及时 |
| 安全修复 | 2 个相关 PR | 🟢 重视安全 |

**综合评价**: NanoBot 项目今日保持高度活跃，开发节奏稳健。社区反馈得到快速响应，多个用户刚需功能（exec 超时、reasoning 禁用）已有 fix PR 准备就绪。建议优先审查并合并安全相关和高优先级功能 PR。

---

*报告生成时间: 2026-05-03*
*数据截止: 2026-05-03 23:59 UTC

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期：** 2026-05-03
**数据来源：** github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时内保持高度活跃，共产生 **50 条 Issue 更新**（含 48 条新开/活跃）和 **34 条 PR 更新**（含 27 条待合并）。项目当前处于 v0.7.5 发布周期冲刺阶段，核心工作集中在 Schema V3 迁移（#6266）和 reasoning_content 完整性修复上。今日社区讨论热度较高，Dream Mode 功能提案（#5849）以 9 条评论领跑，反映出用户对智能记忆整合能力的强烈期待。维护者 @theonlyhennygod 贡献突出，单日提交多个关键修复 PR，涵盖 Telegram、Slack、上下文压缩等模块。整体项目健康度良好，无新版本发布但 PR 合并节奏稳定。

---

## 2. 版本发布

**今日无新版本发布。**

当前版本周期追踪见 Issue #5878（v0.7.5 — Release Automation Release），主题为实现全自动化的发布流水线。

---

## 3. 项目进展

### 今日合并/关闭的 PRs

| PR 编号 | 标题 | 状态 | 贡献者 | 说明 |
|---------|------|------|--------|------|
| [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) | fix(config): support env var overrides for channel tokens | **CLOSED** | @theonlyhennygod | 新增 Slack/Discord/Telegram token 环境变量覆盖支持 |
| [#5206](https://github.com/zeroclaw-labs/zeroclaw/pull/5206) | fix(ci): remove stale main.py dep, upgrade rumqttc | **CLOSED** | @ninenox | 修复 CI 阻塞问题，移除废弃依赖，升级 rumqttc |
| [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242) | feat(i18n): add zh-CN WeChat CLI strings | **CLOSED** | @Audacity88 | 新增简体中文 WeChat 国际化支持 |
| [#6264](https://github.com/zeroclaw-labs/zeroclaw/pull/6264) | fix(compatible): preserve tool_call extra_content for Gemini thoughtSignature | **CLOSED** | @xiongzubiao | 修复 Gemini 思考模型 tool_call 扩展字段丢失问题 |

### 重要待合并 PRs

| PR 编号 | 标题 | 贡献者 | 说明 |
|---------|------|--------|------|
| [#6296](https://github.com/zeroclaw-labs/zeroclaw/pull/6296) | fix(memory): treat bare wildcard recall as recent memory query | @Audacity88 | 修复 `memory_recall` 通配符查询行为 |
| [#6290](https://github.com/zeroclaw-labs/zeroclaw/pull/6290) | fix(xai): correct base URL and restore native /models endpoint | @tidux | 修正 xAI API 基础 URL |
| [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285) | fix(runtime/agent): preserve reasoning_content through context compression | @theonlyhennygod | 上下文压缩时保留 reasoning_content |
| [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) | fix(provider/compatible): preserve reasoning_content for plain-text assistant turns | @theonlyhennygod | 修复 DeepSeek 等思考模式提供商的 reasoning_content 丢失 |
| [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) | fix(runtime/service): derive systemd unit name from config-dir for named instances | @theonlyhennygod | 修复命名实例的 systemd 服务状态报告 |
| [#6282](https://github.com/zeroclaw-labs/zeroclaw/pull/6282) | fix(hardware): unbreak Windows full build | @theonlyhennygod | 修复 Windows 完整构建的固件路径问题 |
| [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) | feat(skills): consolidate first-party skills into repo | @theonlyhennygod | 将官方 skills 整合到主仓库 |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | feat(config): schema v3 migration, channel aliasing, model-provider aliasing | @singlerider | V3 Schema 迁移核心 PR（目标 integration/v0.8.0） |

---

## 4. 社区热点

### 评论数最多的 Issues

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | [Feature]: Dream Mode — Periodic Memory Consolidation & Reflective Learning | **9** | 用户希望 ZeroClaw 在空闲时期自动进行记忆整合和学习反思 |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox configuration blocks all realistic Python skill patterns | **6** | 沙箱配置过于严格，阻止了真实 Python skill 的正常使用 |
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | [Bug]: chat_messages_to_native() drops reasoning_content for plain-text assistant messages | **5** | DeepSeek 多轮对话在第二轮失败 |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | [Feature]: Make `classify_channel_reply_intent` configurable | **4** | 私聊场景下不应触发"是否回复"判断 |

### 热点分析

**Dream Mode（#5849）** 是今日最受关注的提案，9 条评论表明社区对智能记忆管理功能有强烈需求。该功能旨在让 ZeroClaw 在空闲时期自动整合日常记忆、更新长期知识结构，类似人类的"睡眠学习"机制。若实现，将显著提升 Agent 的持续学习能力。

**Shell 沙箱问题（#5722）** 引发热议，贡献者 Jason Perlow 正在开发 FINOS CDM 合规的投资组合分析 skill，因沙箱配置问题导致功能受阻。这反映出项目在安全性和可用性之间的平衡挑战。

---

## 5. Bug 与稳定性

### P0/P1 严重问题（需立即关注）

| Issue 编号 | 标题 | 严重度 | 状态 | 是否有 Fix PR |
|------------|------|--------|------|---------------|
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | [Bug]: Telegram token 加密配置无法工作 | S1 - workflow blocked | in-progress | ❌ |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | [Bug]: 多实例部署默认配置路径问题 | S0 - data loss / security risk | accepted | ❌ |
| [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) | [Bug]: Slack bot_token 必须存储在配置文件中 | S1 - workflow blocked | open | ✅ [#6287](https://github.com/zeroclaw-labs/zeroclaw/pull/6287) |
| [#6259](https://github.com/zeroclaw-labs/zeroclaw/issues/6259) | [Bug]: OpenAI-compat provider drops tool_call extra_content, breaking Gemini 3 | S1 - workflow blocked | closed | ✅ [#6264](https://github.com/zeroclaw-labs/zeroclaw/pull/6264) |
| [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) | [Bug]: Streaming error 后 ZeroClaw 挂起 | S1 - workflow blocked | open | ❌ |

### P2 中等问题

| Issue 编号 | 标题 | 严重度 | 是否有 Fix PR |
|------------|------|--------|---------------|
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor drops reasoning_content | S2 - degraded | ✅ [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285) |
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | DeepSeek 多轮对话 reasoning_content 丢失 | S2 - degraded | ✅ [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) |
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon 服务自启动导致端口冲突 | S2 - degraded | ❌ |
| [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) | WASM 插件安装路径与运行时扫描路径不一致 | S2 - degraded | ❌ |
| [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) | `zeroclaw status` 硬编码服务名导致误报 | S2 - degraded | ✅ [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) |
| [#6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280) | Windows 完整构建失败 | S3 - minor | ✅ [#6282](https://github.com/zeroclaw-labs/zeroclaw/pull/6282) |

### 回归问题

- **#6095**: Bedrock `claude-opus-4-7` 报 "temperature is deprecated" 错误（之前 opus-4-6 正常）

---

## 6. 功能请求与路线图信号

### 高价值功能提案

| Issue 编号 | 标题 | 优先级 | 预计版本 | 说明 |
|------------|------|--------|----------|------|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | Dream Mode — Periodic Memory Consolidation | P1 | 待定 | 空闲时自动记忆整合与反思学习 |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills support and UX (v0.7.6) | P1 | v0.7.6 | Skills CLI/加载器/审核/安装路径改进 |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | Make `classify_channel_reply_intent` configurable | P2 | 待定 | 私聊场景下的回复意图判断配置 |
| [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | Configurable LM Studio server URL | P2 | 待定 | 统一配置 LM Studio 服务器地址 |
| [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) | Add retry logic with exponential backoff to webhook channel | P2 | 待定 | Webhook 出站发送重试机制 |
| [#5617](https://github.com/zeroclaw-labs/zeroclaw/issues/5617) | Phase 2 D5: Reduce all_tools_with_runtime to 10-12 core tools | P2 | 待定 | 微内核架构工具精简 |

### 路线图信号

从今日 PR 活动判断，v0.8.0 将是一个重大版本：
- **Schema V3 迁移**（#6266）正在进行中
- **Agent 文件系统布局重构**（#6272）提案已提出
- **SwarmConfig V3**（#6271）设计进行中
- **ModelProviderConfig 类型拆分**（#6273）提案已提出

---

## 7. 用户反馈摘要

### 真实使用痛点

1. **沙箱限制过严**（#5722）
   > "I am developing InvestorClaw, a FINOS CDM 5.x-compliant portfolio analysis skill... The default shell sandbox configuration is blocking all realistic Python skill patterns."
   - 用户场景：开发金融合规的 Python skill
   - 痛点：沙箱配置阻止了真实业务逻辑

2. **多实例部署配置混乱**（#5605）
   > "Many configuration sections in ZeroClaw use a hardcoded path ~/.zeroclaw/ as the default"
   - 用户场景：运行多个 ZeroClaw 实例（researcher、production 等）
   - 痛点：配置路径硬编码导致实例间冲突

3. **Telegram 加密配置失效**（#5654）
   > "using the encryption for the config.json on the telegram configuration cannot working"
   - 用户场景：需要加密存储 Telegram bot token
   - 痛点：加密配置后 bot 无响应

### 用户满意点

- **国际化和本地化进展**：中文 WeChat 支持（#6242 已合并）获得正面反馈
- **Provider 生态扩展**：Manifest 开源 LLM 路由支持（#6268）丰富了 provider 选择
- **xAI 集成修复**（#6290）：用户 @tidux 快速修复了 API 端点问题

---

## 8. 待处理积压

### 长期未响应的 P1 Issues（超过 2 周无更新）

| Issue 编号 | 标题 | 创建日期 | 状态 | 风险 |
|------------|------|----------|------|------|
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | 多实例部署默认配置路径问题 | 2026-04-10 | accepted | S0 安全/数据丢失风险 |
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | Telegram token 加密配置失效 | 2026-04-12 | in-progress | S1 工作流阻塞 |
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon 自启动端口冲突 | 2026-04-11 | in-progress | S2 降级行为 |

### 建议优先处理

1. **#5605**（多实例配置路径）：S0 级别，涉及数据安全，需优先
2. **#5654**（Telegram 加密）：用户明确反馈功能不可用
3. **#5722**（沙箱配置）：影响第三方 skill 生态发展

---

## 附录：贡献者榜单（今日）

| 贡献者 | 提交 PR 数 | 主要领域 |
|--------|-----------|----------|
| @theonlyhennygod | 6+ | Telegram/Slack 修复、上下文压缩、Windows 构建 |
| @singlerider | 2+ | Schema V3 迁移、路线图规划 |
| @Audacity88 | 2 | 内存工具修复、中文国际化 |
| @xiongzubiao | 2 | Gemini tool_call 修复 |

---

*本报告由 AI 自动生成，基于 2026-05-03 00:00 至 23:59 UTC 的 GitHub 数据。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-05-03
**项目仓库**：https://github.com/sipeed/picoclaw

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持高度活跃状态，共产生 15 次更新（7 条 Issues + 8 条 PRs）。社区提交了 1 个 nightly build（v0.2.8-nightly.20260503.a94ba821），2 个 PR 成功合并关闭。项目当前以 bug 修复为主线，涉及 Provider 层（DeepSeek、OpenRouter、Google）、工具执行安全（路径解析）和 UI 展示（时间格式）等多个维度。整体健康度良好，但存在 2 个高优先级 bug（#2720 PID 崩溃循环、#2749 路径解析安全漏洞）亟待处理。

---

## 2. 版本发布

### Nightly Build

**版本号**：v0.2.8-nightly.20260503.a94ba821
**发布类型**：自动化构建（不稳定版本）
**变更范围**：https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ **警告**：此为自动化构建版本，可能存在不稳定因素，请谨慎使用于生产环境。

本次为常规 nightly 更新，未涉及破坏性变更或特殊迁移需求。

---

## 3. 项目进展

### 已合并/关闭 PRs（2 条）

| PR 编号 | 标题 | 状态 | 影响 |
|---------|------|------|------|
| [#2747](https://github.com/sipeed/picoclaw/pull/2747) | chore: update WeChat group QR code | CLOSED | 更新微信群二维码（有效期至 5 月 9 日） |
| [#2746](https://github.com/sipeed/picoclaw/pull/2746) | fix(openrouter): document reasoning suppression preset | CLOSED | 新增 OpenRouter reasoning 模型输出抑制文档和示例预设 |

### 待合并 PRs（6 条）

| PR 编号 | 标题 | 领域 | 状态 |
|---------|------|------|------|
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | fix(deepseek): capture reasoning_content from streaming | Provider | OPEN |
| [#2750](https://github.com/sipeed/picoclaw/pull/2750) | fix(tools): exec guard must not treat relative paths as root-absolute | Tool | OPEN |
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | fix codex streaming output and telegram duplicate retries | Provider/Channel | OPEN |
| [#2630](https://github.com/sipeed/picoclaw/pull/2630) | fix(web): show full reply datetime and preserve it in chat history | Channel | OPEN |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | feat(providers): add xAI compat support | Provider | OPEN |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | fix: maintain OAuth scopes during Google Antigravity token refresh | Provider | OPEN |

**关键进展**：#2746 成功合并，解决了 OpenRouter reasoning 模型内容泄露问题；#2260 推进 xAI provider 支持，若合并将显著扩展模型选择范围。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 编号 | 标题 | 评论数 | 领域 | 热度分析 |
|------|------|--------|------|----------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | [Feature]: Add email as native channel | 4 | Enhancement | 企业/科学场景用户强烈需求，邮件作为核心通信渠道的原生支持 |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | [Feature] Support OAuth 2.1 + PKCE for MCP servers | 3 | Enhancement | 非技术用户友好型功能，降低 MCP 服务器配置门槛 |

**热点分析**：

- **#2421** 反映了企业级用户对邮件渠道的硬需求，用户群体涵盖企业、科学研究及保守技术环境，邮件作为唯一或主要通信手段的场景真实存在。
- **#2546** 体现了对 Claude.ai 式「Add connector」体验的追求，目标是无需 shell 或 Node.js 即可在云 VM 上添加 OAuth 保护的 MCP 服务器。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 优先级 | 编号 | 标题 | 状态 | 是否有 Fix PR |
|--------|------|------|------|---------------|
| 🔴 高 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID check doesn't verify process identity — stale PID causes crash loop | OPEN | ❌ 无 |
| 🔴 高 | [#2749](https://github.com/sipeed/picoclaw/issues/2749) | Bash evaluates relative path as absolute path | OPEN | ✅ #2750 |
| 🟡 中 | [#2668](https://github.com/sipeed/picoclaw/issues/2668) | Gemini API returns HTTP 400 Bad Request for MCP tools with complex JSON schemas | OPEN | ❌ 无 |
| 🟡 中 | [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Wrong model IDs in Anthropic dropdown: Android | OPEN | ❌ 无 |
| 🟡 中 | [#2745](https://github.com/sipeed/picoclaw/issues/2745) | OpenRouter reasoning model leaks thinking into assistant content | OPEN | ✅ #2746（文档修复）|
| 🟢 低 | [#2740](https://github.com/sipeed/picoclaw/pull/2740) | DeepSeek streaming parser drops reasoning_content | OPEN（PR）| 正在修复 |

**关键 Bug 详情**：

**#2720**（高危）：当 PID 文件包含已被其他进程（如 systemd-resolved）复用的 PID 时，singleton 检查仅验证进程存在性而非身份，导致网关启动失败并进入崩溃循环。影响所有 Linux 环境用户。

**#2749**（高危）：路径扫描器将相对路径误判为根绝对路径（如 `archive/SKILL.md` 被解析为 `/SKILL.md`），导致 workspace 检查失效，存在安全风险。已有对应 PR #2750。

---

## 6. 功能请求与路线图信号

### 新功能需求

| 编号 | 标题 | 领域 | 预计影响 | 纳入版本可能性 |
|------|------|------|----------|----------------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | Add email as native channel | Channel | 高（企业刚需）| 中 |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | Support OAuth 2.1 + PKCE for MCP servers | Config | 高（UX 提升）| 中高 |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | Add xAI compat support | Provider | 中（扩展生态）| 高（已有 PR）|

**路线图信号**：

- **Provider 扩展**：xAI 支持（#2260）已进入 PR 阶段，预计下一版本纳入；DeepSeek reasoning_content 修复（#2740）正在推进。
- **安全增强**：OAuth 2.1 + PKCE 支持（#2546）反映了用户对现代认证协议的迫切需求。
- **渠道丰富**：邮件渠道（#2421）呼声较高，但实现复杂度较高，需评估开发成本。

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点描述 | 相关 Issue |
|------|----------|------------|
| 企业/科学环境 | 邮件作为唯一通信渠道，缺乏原生支持 | #2421 |
| Android TV Box + Termux | 资源受限环境下 streaming 输出异常、Telegram 重试问题 | #2462 |
| 云 VM 部署 | 非技术用户无法通过命令行配置 OAuth 保护的 MCP | #2546 |
| 特定模型使用 | OpenRouter reasoning 模型输出包含思考过程而非纯答案 | #2745 |
| 路径安全 | 相对路径被误解析为根路径，导致执行权限问题 | #2749 |

### 用户满意度观察

- **正面**：社区活跃度高，bug 反馈及时，多个 PR 由用户主动提交修复。
- **待改进**：部分 bug（如 #2720）缺乏 fix PR，高优先级问题需加速处理。

---

## 8. 待处理积压

### 长期未响应的 Issues/PRs（标记 stale）

| 编号 | 类型 | 标题 | 创建时间 | 距今天数 | 状态 |
|------|------|------|----------|----------|------|
| [#2668](https://github.com/sipeed/picoclaw/issues/2668) | Bug | Gemini API returns HTTP 400 for complex JSON schemas | 2026-04-25 | 8 天 | OPEN，stale |
| [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Bug | Wrong model IDs in Anthropic dropdown | 2026-04-24 | 9 天 | OPEN，stale |
| [#2630](https://github.com/sipeed/picoclaw/pull/2630) | PR | fix(web): show full reply datetime | 2026-04-23 | 10 天 | OPEN，stale |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | PR | feat(providers): add xAI compat support | 2026-04-02 | 31 天 | OPEN，stale |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | PR | fix: maintain OAuth scopes during Google Antigravity token refresh | 2026-03-29 | 35 天 | OPEN，stale |

### 积压分析

- **Bug 类**：#2668（Gemini 400 错误）、#2665（Anthropic 模型 ID 错误）均已 stale，需维护者关注并分配资源。
- **PR 类**：#2260（xAI 支持）、#2163（Google OAuth 刷新）均为有价值的功能增强，stale 状态可能影响贡献者积极性，建议优先 review。

---

**报告生成时间**：2026-05-03
**数据来源**：GitHub PicoClaw 仓库活动日志

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-05-03
**项目仓库：** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

2026-05-03 是 NanoClaw 极高活跃度的一天。项目在过去 24 小时内共产生 30 条更新（13 条 Issues + 17 条 PRs），其中 7 个 PR 已合并/关闭，10 个 PR 待合并。今日社区聚焦于两个新报告的 OpenRC 兼容性问题（#2200、#2199），以及多个稳定性修复（数据库只读错误、CLI 路由问题、slash 命令失效）。值得注意的是，v1→v2 迁移脚本（#1931）和 DeltaChat 通道适配器（#2192）已成功合并，项目功能边界持续扩展。整体项目健康度良好，积压问题多为低优先级或设计层面的长期议题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 关联 Issue | 摘要 |
|---------|------|------|------------|------|
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) | v1 → v2 migration to setup flow (experimental) | ✅ 已合并 | — | 实现 `bash nanoclaw.sh` 自动检测 v1 安装并执行最佳-effort 迁移，涵盖 agents、messaging groups、wirings、group folders、env keys、channel adapters、scheduled tasks |
| [#2192](https://github.com/qwibitai/nanoclaw/pull/2192) | Add DeltaChat channel adapter | ✅ 已合并 | — | 新增 DeltaChat 作为完全支持的 E2EE 消息通道（Feature Skill） |
| [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) | fix(host-sweep): reopen outbound DB as writable for orphan claim cleanup | ✅ 已合并 | #2188, #2196 | 修复 `deleteOrphanProcessingClaims()` 因 outDb 只读导致的写入失败问题，防止孤儿 `processing_ack` 行阻塞消息投递 |
| [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) | fix: sanitize OneCLI agent identifiers | ✅ 已合并 | #2046 | 将 agent group ID 中的下划线替换为连字符，使 OneCLI 标识符规范化，解决 400 错误 |
| [#2181](https://github.com/qwibitai/nanoclaw/pull/2181) | fix(poll-loop): slash commands silently broken on warm containers | ✅ 已合并 | — | 修复 warm 容器上所有 slash 命令静默失效的问题（`/clear` 被过滤、其他 slash 命令被推入队列未 ack） |
| [#2190](https://github.com/qwibitai/nanoclaw/pull/2190) | fix: Atom フィードの link 要素をオブジェクト形式で正しくパースする | ✅ 已合并 | — | 修复 `fast-xml-parser` 将 `<link>` 解析为对象/数组导致的 TypeError，为 RSS Item 添加 `published`/`updated` 字段 |
| [#2178](https://github.com/qwibitai/nanoclaw/pull/2178) | Andy ops fixes: 10 issues (skills, Draft+Approve, briefings, timeouts, FB auto-approve, CRM) | ✅ 已合并 | — | 一次性修复 10 个运营问题：agent-browser 失败、Maps 403、Twitter token 缺口、容器 600s 超时、LinkedIn 0/day、邮件发送失败、lead score 卡住、Mahindra 投诉积压、FB 队列不推送、CLI 自动重启不稳定 |

### 待合并的 PR（重点关注）

| PR 编号 | 标题 | 关联 Issue | 摘要 |
|---------|------|------------|------|
| [#2003](https://github.com/qwibitai/nanoclaw/pull/2003) | feat(skill): voice transcription V2 — container-side, sovereign by default | #1879 | 重提交 #1879，将实现移至 agent 容器内，遵循"host 端最小化、agent 环境内完成有趣工作"原则 |
| [#2201](https://github.com/qwibitai/nanoclaw/pull/2201) | feat: add opencode provider and custom model support | — | 新增 OpenCode provider 集成，支持通过环境变量配置 Claude provider 的自定义模型 |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | feat: Matrix E2EE channel + per-group model/effort configuration | — | Matrix E2EE 通道 + per-group model/effort 配置 + MCP skill 集成套件 |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) | feat: add Home Assistant MCP integration skill | — | Home Assistant REST API 集成，支持通过 HA URL + Long-Lived Access Token 查询和控制 HA 实例 |
| [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) | fix(platform-id): don't namespace CLI bare platform ids | #2186 | 为 `namespacedPlatformId` 添加 `channel === 'cli'` 例外，防止 CLI 通道产生 `cli:local` 破坏路由查找 |
| [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) | fix(poll-loop): retry immediately on stale session instead of delivering error | — | 会话 ID 失效后立即重试而非向用户投递原始错误消息 |
| [#2182](https://github.com/qwibitai/nanoclaw/pull/2182) | fix(test-infra): openInboundDb honors in-memory test DB | — | 使 `openInboundDb()` 正确使用 `initTestSessionDb()` 创建的内存数据库，确保 `bun test` 测试套件可运行 |
| [#2198](https://github.com/qwibitai/nanoclaw/pull/2198) | fix(repo-tokens): show badge percentage | #1017 | 为 repo-tokens 徽章添加百分比显示（good first issue） |
| [#2197](https://github.com/qwibitai/nanoclaw/pull/2197) | fix(update-nanoclaw): guard merge state to prevent silent single-parent commits | — | 防止 `/update-nanoclaw` 在自定义 fork 上产生静默的单亲提交而非真正的 merge |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#2188** — host-sweep: "attempt to write a readonly database" every tick
🔗 https://github.com/qwibitai/nanoclaw/issues/2188
📊 评论: 1 | 👍: 0 | 状态: **已关闭（已有 fix #2183）**
📝 **诉求分析：** 用户报告每次 host-sweep tick 时，若容器未运行则 sweep 崩溃。根本原因是 `openOutboundDb` 以只读模式打开数据库，但 `deleteOrphanProcessingClaims` 需要写入。已合并 #2183 修复。

**#2046** — OneCLI agent identifier rejected (400 error)
🔗 https://github.com/qwibitai/nanoclaw/issues/2046
📊 评论: 1 | 👍: 0 | 状态: **已关闭（已有 fix #2179）**
📝 **诉求分析：** 迁移过程中发现 agent group ID 包含下划线（如 `ag_f835cf929923`），但 OneCLI 仅接受连字符。已合并 #2179 修复。

**#1017** — please add percentage to badge in repo-tokens
🔗 https://github.com/qwibitai/nanoclaw/issues/1017
📊 评论: 2 | 👍: 0 | 状态: **OPEN** | 标签: Enhancement, good first issue, Priority: Low
📝 **诉求分析：** 用户请求在 repo-tokens 徽章中显示百分比数值，提升可读性。已有对应 PR #2198。

### 新增热点 Issues（今日）

**#2200** — Telegram connection initialisation with OpenRC is failing
🔗 https://github.com/qwibitai/nanoclaw/issues/2200
📝 **诉求分析：** OpenRC 系统上 Telegram 配对挂起，服务从未启动。`pair-telegram` 步骤等待 NanoClaw 服务接收配对码并写入 `data/telegram-pairings.json`，但在非 systemd/non-launchd 系统上服务设置步骤报告失败。

**#2199** — installation script - Docker failed to start in OpenRC
🔗 https://github.com/qwibitai/nanoclaw/issues/2199
📝 **诉求分析：** OpenRC Linux 系统上 `bash nanoclaw.sh` 启动 Docker 失败并中止安装。问题出在 `setup/container.ts` 的 `tryStartDocker()` 函数。

---

## 5. Bug 与稳定性

### 严重程度：高（已修复或有待合并 fix）

| Issue | 描述 | 严重性 | 状态 | Fix PR |
|-------|------|--------|------|--------|
| [#2188](https://github.com/qwibitai/nanoclaw/issues/2188) / [#2196](https://github.com/qwibitai/nanoclaw/issues/2196) | host-sweep `deleteOrphanProcessingClaims` 因 outDb 只读导致 SqliteError，sweep 崩溃，孤儿行阻塞消息投递 | 🔴 高 | ✅ 已修复 | [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) |
| [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) | OneCLI agent ID 含下划线导致 400 错误，容器无法获取凭证 | 🔴 高 | ✅ 已修复 | [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) |
| [#2186](https://github.com/qwibitai/nanoclaw/issues/2186) | CLI 通道 `namespacedPlatformId` 产生 `cli:local` 破坏路由查找 | 🟠 中高 | ⏳ 待合并 | [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) |
| — | warm 容器上 slash 命令全部静默失效 | 🟠 中 | ✅ 已修复 | [#2181](https://github.com/qwibitai/nanoclaw/pull/2181) |
| — | 会话 ID 失效后原始错误被投递为用户可见消息 | 🟠 中 | ⏳ 待合并 | [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) |

### 严重程度：中（今日新报告）

| Issue | 描述 | 严重性 | 状态 |
|-------|------|--------|------|
| [#2200](https://github.com/qwibitai/nanoclaw/issues/2200) | OpenRC 上 Telegram 连接初始化失败 | 🟠 中 | 🆕 新报告 |
| [#2199](https://github.com/qwibitai/nanoclaw/issues/2199) | OpenRC 上 Docker 启动失败导致安装中止 | 🟠 中 | 🆕 新报告 |
| [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) | migrate-v2.sh 在 sqlite3 CLI 未安装时给出误导性错误信息 | 🟡 中低 | 🆕 新报告 |

### 严重程度：低/设计问题

| Issue | 描述 | 严重性 | 备注 |
|-------|------|--------|------|
| [#2195](https://github.com/qwibitai/nanoclaw/issues/2195) | add-gmail-tool 缺乏多账户 Gmail 设置的文档或变通方案 | 🟡 低 | OneCLI 仅支持一个活跃 Gmail OAuth 连接 |
| [#2194](https://github.com/qwibitai/nanoclaw/issues/2194) | WhatsApp LID→phone JID 映射在重启后未持久化，导致基于 LID 的发送方路由失败 | 🟡 低 | 映射存储在内存缓存中 |
| [#2193](https://github.com/qwibitai/nanoclaw/issues/2193) | init-first-agent 存储带 channel 前缀的 platform_id，导致 WhatsApp 路由静默失败 | 🟡 低 | 脚本存储 `whatsapp:<jid>` 而非原生 bare JID |
| [#2185](https://github.com/qwibitai/nanoclaw/issues/2185) | claude-md-compose.ts 构建 CLAUDE.md 时未导入 CLAUDE.local.md，per-group memory 未被 SDK 加载 | 🟡 低 | 代码注释声称"auto-loaded by Claude Code"但实际未实现 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue/PR | 标题 | 提议者 | 优先级信号 | 纳入可能性 |
|----------|------|--------|------------|------------|
| [#2003](https://github.com/qwibitai/nanoclaw/pull/2003) | feat(skill): voice transcription V2 | @jorgenclaw | 🔥 高 | ⭐⭐⭐ 高 — 重提交，遵循 maintainer 反馈将实现移至容器内 |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | feat: Matrix E2EE channel + per-group model/effort configuration | @bitcryptic-gw | 🔥 高 | ⭐⭐⭐ 高 — 完整功能集，E2EE + per-group 配置 + MCP 集成 |
| [#2201](https://github.com/qwibitai/nanoclaw/pull/2201) | feat: add opencode provider and custom model support | @ews | 🆕 今日 | ⭐⭐ 中 — 新增 provider 集成 |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) | feat: add Home Assistant MCP integration skill | @bitcryptic-gw | 🔥 高 | ⭐⭐ 中 — MCP skill，IoT 集成场景 |
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) | Skill/webchat v1 | @javexed | 🆕 今日 | ⭐ 待评估 |
| [#2189](https://github.com/qwibitai/nanoclaw/issues/2189) | NanoClaw Token/Perf Optimization Opportunities | @mnolet | 💡 优化 | ⭐⭐ 中 — 用户主动提出愿意提交 PR，token 低效影响成本和限流 |
| [#1017](https://github.com/qwibitai/nanoclaw/issues/1017) | please add percentage to badge in repo-tokens | @zhengmz | good first issue | ⭐ 已有人提 PR #2198 |

### 路线图信号分析

1. **OpenRC 兼容性**：今日两个新 issue（#2199、#2200）均指向 OpenRC 系统兼容性问题，表明项目正在向非 systemd 发行版扩展用户群，维护者需考虑添加 OpenRC/rc-service 检测逻辑。
2. **多通道支持加速**：DeltaChat（#2192 已合并）、Matrix（#1624 进行中）、WebChat（#2069）、OpenCode provider（#2201）表明项目正快速扩展支持的 messaging 通道。
3. **Token 优化需求**：用户 @mnolet 明确指出 NanoClaw token 效率低下，存在 easy wins 提升非编码 agent 性能，并表示愿意贡献 PR — 这是成本控制和

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**: 2026-05-03
**项目**: nearai/ironclaw
**数据周期**: 过去 24 小时

---

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持高度活跃状态。共产生 **20 条 Issues 更新**（15 条新开/活跃，5 条关闭）和 **46 条 PR 更新**（40 条待合并，6 条已合并/关闭），未发布新版本。今日核心焦点集中在 **Reborn 架构重构** 相关工作，多个关键模块（TurnCoordinator、TurnRunner、ironclaw_turns crate 边界等）正在并行推进定义阶段。同时，CLI 功能扩展（backup/import/insights 命令）和 Docker 多平台支持（arm64）取得显著进展。整体项目呈现功能开发与架构重构并行的健康态势。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#3105](https://github.com/nearai/ironclaw/pull/3105) | Staging | CLOSED | 修复 Telegram 在启动时不轮询的问题，添加 WASM channels 回退逻辑用于 headless 服务器场景 |
| [#3144](https://github.com/nearai/ironclaw/issues/3144) | Wire EnforceResourceCeiling into runtime and sandbox enforcement | CLOSED | 将资源上限强制执行接入运行时沙箱，完成高风险增强功能 |
| [#3147](https://github.com/nearai/ironclaw/issues/3147) | Wire built-in obligation audit records to production event sinks | CLOSED | 将内置义务审计记录接入生产事件接收器，完成高风险安全增强 |
| [#3145](https://github.com/nearai/ironclaw/issues/3145) | Define background process obligation reconciliation lifecycle | CLOSED | 定义后台进程义务协调生命周期，完成 Sandcastle 相关工作 |

### 重点待合并 PR

| PR 编号 | 标题 | 规模 | 风险 | 说明 |
|---------|------|------|------|------|
| [#3215](https://github.com/nearai/ironclaw/pull/3215) | fix(gemini-oauth): preserve thoughtSignature in Cloud Code SSE handler | M | Low | 修复 Gemini 3.x 模型 tool call 缺少 thought_signature 的问题，关联 #3214 |
| [#3186](https://github.com/nearai/ironclaw/pull/3186) | feat(cli): add `ironclaw import backup` | L | Low | 新增备份恢复子命令，完成迁移闭环 |
| [#3178](https://github.com/nearai/ironclaw/pull/3178) | feat(cli): add `ironclaw backup --quick` | L | Medium | 新增快速状态快照功能，打包数据库和配置为可迁移 zip |
| [#3177](https://github.com/nearai/ironclaw/pull/3177) | feat(cli): add `ironclaw insights` | XL | Medium | 新增使用分析子命令，聚合 agent_jobs/routine_runs/job_actions 数据 |
| [#3208](https://github.com/nearai/ironclaw/pull/3208) | ci(docker): add linux/arm64 to image builds | S | Medium | Docker 构建新增 arm64 平台支持，解决 Apple Silicon/Graviton 兼容问题 |
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | Add Reborn event projection service | XL | Medium | 新增 EventProjectionService 和 ReplayEventProjectionService，支持事件投影 |
| [#3187](https://github.com/nearai/ironclaw/pull/3187) | feat(invitations): magic-link onboarding for pilot users | XL | Medium | 新增邀请制 magic-link 入职流程，包含 V27 schema 迁移 |
| [#2700](https://github.com/nearai/ironclaw/pull/2700) | fix(gateway): show descriptive chat titles instead of hex hash IDs | XL | Medium | 修复 Web UI 新会话侧边栏显示 UUID 哈希而非描述性标题的问题 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 编号 | 标题 | 评论数 | 核心诉求 |
|------|------|--------|----------|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | [reborn] Reborn cutover blocker: add reference AgentLoopHost facade | 3 | 追踪 Reborn 架构中 AgentLoopHost 外观模式实现，是多个子 tracker 的父级 |
| [#90](https://github.com/nearai/ironclaw/issues/90) | feat: Audio pipeline (speech-to-text, text-to-speech, voice note handling) | 2 | 跨切面基础设施需求，P1-P2 优先级，WhatsApp 语音笔记依赖 STT |
| [#3214](https://github.com/nearai/ironclaw/issues/3214) | bug: thoughtSignature dropped in Cloud Code SSE handler | 1 | 已关闭，关联 PR #3215 修复了 Gemini 3.x 模型 tool call 错误 |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | [reborn] Reborn cutover blocker: add kernel TurnCoordinator | 1 | 追踪 host 层 TurnCoordinator 实现，是 cutover 阻塞项 |
| [#2344](https://github.com/nearai/ironclaw/issues/2344) | [QA] Staging Web UI shows console errors on page load | 1 | Web UI 控制台错误，包含 TypeError/ReferenceError 和 CSP 违规 |

### 热点分析

**Reborn 架构重构** 是当前最核心的主题，#3016 作为父级 tracker 连接了 #2987、#3031、#3013、#3107、#3195、#3198、#3199 等多个子模块。今日集中创建了 #3193-#3204 等 7 个 Reborn 相关 Issues，定义 conversation binding、turn persistence、TurnRunner execution model 等核心接口边界，表明项目正在从设计阶段向实现阶段过渡。

**音频管道功能** (#90) 获得持续关注，作为 WhatsApp 语音笔记和 TTS 功能的前置依赖，其优先级被标记为 P1-P2。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重程度 | 编号 | 标题 | 状态 | 已有 Fix PR |
|----------|------|------|------|-------------|
| **高** | [#3214](https://github.com/nearai/ironclaw/issues/3214) | thoughtSignature dropped in Cloud Code SSE handler — prior fixes incomplete | CLOSED | ✅ [#3215](https://github.com/nearai/ironclaw/pull/3215) |
| **中** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | [QA] Tool use for Deepseek is not working | OPEN | ❌ |
| **中** | [#2344](https://github.com/nearai/ironclaw/issues/2344) | [QA] Staging Web UI shows console errors on page load | OPEN | ❌ |
| **低** | [#2818](https://github.com/nearai/ironclaw/issues/2818) | bug: installer for v0.26.0 fails on x86_64-unknown-linux-gnu | CLOSED | ✅ 已修复 |

### Bug 详情

**#3214 - Gemini 3.x INVALID_ARGUMENT 错误**
- **问题**: HTTP 400 `INVALID_ARGUMENT` on tool calls with `gemini-3-flash-preview`，尽管 #1565 和 #1752 已声称修复
- **根因**: 之前修复作用于 request-builder 层，但上游 SSE 处理层未处理
- **修复**: PR #3215 在 Cloud Code SSE handler 中保留 thoughtSignature

**#3201 - DeepSeek 工具调用不工作**
- **环境**: local (cloned ironclaw), commit 93c7d6a484237999a7a202efd6d54f70d785c0b7
- **复现步骤**: 配置 LLM Provider 为 DeepSeek/deepseek-v4-flash，询问近期新闻即报错
- **状态**: 待调查

**#2344 - Web UI 控制台错误**
- **环境**: agent-stg.near.ai, v0.25.0
- **问题**: 页面加载时出现 TypeError、ReferenceError 和 CSP 违规
- **状态**: 待修复

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| 编号 | 标题 | 优先级信号 | 关联 PR | 纳入版本可能性 |
|------|------|------------|---------|----------------|
| [#90](https://github.com/nearai/ironclaw/issues/90) | Audio pipeline (STT/TTS/voice notes) | P1-P2 | 无 | 中（依赖基础设施） |
| [#3168](https://github.com/nearai/ironclaw/issues/3168) | Add arm64/aarch64 platform support for Docker | 用户需求 | [#3208](https://github.com/nearai/ironclaw/pull/3208) | ✅ 即将合并 |
| [#3177](https://github.com/nearai/ironclaw/pull/3177) | `ironclaw insights` for usage analytics | CLI 扩展 | PR 已开 | ✅ 即将合并 |
| [#3187](https://github.com/nearai/ironclaw/pull/3187) | Magic-link onboarding for pilot users | 产品需求 | PR 已开 | ✅ 即将合并 |

### 路线图信号分析

1. **CLI 工具链扩展**: backup/import/insights 三个 PR 集中出现，表明项目正在完善本地运维工具链，降低用户对外部监控依赖
2. **多平台支持**: arm64 Docker 构建和 DeepSeek 集成反映对异构环境的重视
3. **NEAR Intents 集成**: #3207、#3211、#3218 等 PR 集中展示 NEAR 生态深度集成意图
4. **Reborn 架构**: 大量设计 Issues 涌现，预示下一版本将有架构层面的重大更新

---

## 7. 用户反馈摘要

### 从 Issues 评论中提炼的痛点

| 场景 | 痛点 | 来源 |
|------|------|------|
| **安装失败** | v0.26.0 安装器在 x86_64 Linux 上失败 | [#2818](https://github.com/nearai/ironclaw/issues/2818) |
| **Docker 镜像不可用** | `nearai/ironclaw` 仓库不存在，实际镜像为 `nearaidev/ironclaw` | [#3217](https://github.com/nearai/ironclaw/pull/3217) |
| **Agent 身份问题** | 用户配置了自定义名称，但 Agent 仍自称 "IronClaw" | [#3213](https://github.com/nearai/ironclaw/pull/3213) |
| **Web UI 体验** | 新会话显示哈希 ID 而非描述性标题 | [#2700](https://github.com/nearai/ironclaw/pull/2700) |
| **工具配置误导** | optional-creds 工具仍显示 "Configure" 按钮 | [#3210](https://github.com/nearai/ironclaw/pull/3210) |
| **用户管理重复** | 快速点击创建用户按钮导致多条重复记录 | [#3209](https://github.com/nearai/ironclaw/pull/3209) |

### 正面反馈信号

- CLI 新增 `backup --quick` 功能解决了用户迁移场景需求
- `insights` 命令填补了 Hermes 功能 parity
- Telegram WASM channel 回退机制改善了 headless 服务器兼容性

---

## 8. 待处理积压

### 长期未响应的重要 Issues

| 编号 | 标题 | 创建时间 | 最后更新 | 状态 | 建议 |
|------|------|----------|----------|------|------|
| [#90](https://github.com/nearai/ironclaw/issues/90) | Audio pipeline (STT/TTS) | 2026-02-14 | 2026-05-02 | OPEN | P1 优先级，建议评估纳入路线图 |
| [#2344](https://github.com/nearai/ironclaw/issues/2344) | Web UI console errors | 2026-04-11 | 2026-05-02 | OPEN | 22 天未解决，影响用户体验 |
| [#3201](https://github.com/nearai/ironclaw/issues/3201) | DeepSeek tool use broken | 2026-05-02 | 2026-05-02 | OPEN | 今日新开，需尽快响应 |

### 积压分析

1. **#90 Audio Pipeline**: 自 2 月中旬创建，3 个月未推进，作为 WhatsApp 语音笔记的前置依赖，建议明确时间表
2. **#2344 Web UI 错误**: 接近 1 个月未解决，影响 staging 环境 QA 测试
3. **Reborn 相关 Issues**: #3013、#3016 等作为 cutover 阻塞项，需确保在架构切换前完成

---

## 指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新开/活跃 | 15 | 📈 活跃 |
| Issues 关闭 | 5 | - |
| PR 待合并 | 40 | 📈 高 |
| PR 已合并/关闭 | 6 | - |
| 新版本发布 | 0 | - |
| Bug 报告（高优先级） | 1 | ✅ 已修复 |

---

**报告生成时间**: 2026-05-03
**数据来源**: GitHub nearai/ironclaw
**分析师**: AI Assistant

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报

**报告日期**：2026-05-03
**项目仓库**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目保持平稳开发节奏，共产生 **4 条 PR 更新**，均为待合并状态，无新版本发布或 Issue 活动。当前 PR 队列聚焦于**配置同步、渠道扩展、UI 交互优化**三个方向，整体呈现功能完善与体验提升并进的态势。4 个 PR 中包含 2 个 Bug 修复和 1 个功能增强，建议维护者尽快审阅以推进迭代。

---

## 2. 版本发布

> 本日无新版本发布

---

## 3. 项目进展

本日共有 **4 个 PR 处于 Open 状态**，等待审阅合并：

| PR 编号 | 类型 | 标题 | 作者 | 状态 |
|---------|------|------|------|------|
| [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) | Bug Fix | 保留手动添加的插件加载路径 | @gvaiis | OPEN |
| [#813](https://github.com/netease-youdao/LobsterAI/pull/813) | Feature | 小米渠道新增 MiMo V2 Pro 和 MiMo V2 Omni 模型 | @swuzjb | OPEN |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | Bug Fix | 隐藏 OpenClaw 主代理会话 | @Noodles006 | OPEN |
| [#1191](https://github.com/netease-youdao/LobsterAI/pull/1191) | Bug Fix | 修复通知渠道过滤缺陷 | @gongzhi-netease | OPEN |

### 重点 PR 解析

**🔧 #1879 - 插件加载路径保留机制**
修复 OpenClaw 配置同步时手动添加的插件路径被覆盖的问题，提升插件管理灵活性。

**📦 #813 - 小米渠道模型扩展**
新增 `mimo-v2-pro` 和 `mimo-v2-omni` 两个支持图像的模型，完善小米生态对接。

**🎨 #1181 - 会话列表优化**
隐藏内部 OpenClaw 主代理会话，避免用户混淆，改善协作（Cowork）功能体验。

**🔔 #1191 - 通知渠道体验升级**
修复 POPO、企业微信渠道不显示及微信误标"暂不支持"的问题，统一渠道显示名称。

---

## 4. 社区热点

本日无 Issue 活动，热点集中在 **4 个待合并 PR**：

- **#1879** 涉及插件生态管理，开发者 @gvaiis 提出的路径保留机制对社区插件生态有积极意义
- **#813** 响应小米 MiMo 平台扩展需求，补充国内 AI 渠道覆盖
- **#1191** 聚焦通知渠道 UX 优化，解决用户实际使用痛点

> 📌 建议关注：[#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) - 插件路径保留机制

---

## 5. Bug 与稳定性

本日无新报告 Bug。现有 4 个 Open PR 中包含 **3 个 Bug Fix**：

| 优先级 | PR | 问题描述 | Fix 状态 |
|--------|-----|----------|----------|
| 🟡 中 | [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) | 手动插件路径在配置同步时丢失 | Fix PR 已提交 |
| 🟡 中 | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | OpenClaw 主代理会话暴露给用户 | Fix PR 已提交 |
| 🟡 中 | [#1191](https://github.com/netease-youdao/LobsterAI/pull/1191) | 通知渠道过滤逻辑缺陷 | Fix PR 已提交 |

**稳定性评估**：无新增回归或崩溃报告，项目稳定性良好。

---

## 6. 功能请求与路线图信号

本日功能相关 PR：

- **#813** - 小米渠道模型扩展（Feature）
  - 新增 `mimo-v2-pro`、`mimo-v2-omni` 模型
  - 完善国内 AI 渠道生态
  - **纳入可能性**：高（功能完整，文档清晰）

---

## 7. 用户反馈摘要

从 PR 摘要中提炼用户痛点：

| 场景 | 痛点描述 | 对应修复 |
|------|----------|----------|
| 插件管理 | 手动安装的社区插件路径被覆盖 | [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) |
| 协作会话 | OpenClaw 内部会话出现在用户列表 | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |
| 定时任务 | 通知渠道选择器体验差、渠道不显示 | [#1191](https://github.com/netease-youdao/LobsterAI/pull/1191) |

---

## 8. 待处理积压

以下 PR 长期处于 Open 状态，建议优先审阅：

| PR | 创建时间 | 状态 | 备注 |
|----|----------|------|------|
| [#813](https://github.com/netease-youdao/LobsterAI/pull/813) | 2026-03-25 | stale | 功能完整，等待合并 |
| [#1191](https://github.com/netease-youdao/LobsterAI/pull/1191) | 2026-04-01 | stale | Bug Fix，建议优先处理 |

> ⚠️ **提醒**：#813 和 #1191 已标记为 stale，请维护者确认是否继续推进或关闭。

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新 Issue | 0 | ➖ 持平 |
| 新 PR | 4 | ⬆️ +4 |
| 待合并 PR | 4 | ⬆️ 需关注 |
| 版本发布 | 0 | ➖ 无变化 |

---

**报告生成时间**：2026-05-03
**数据来源**：GitHub LobsterAI Repository
**分析师**：AI Project Analyst

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**: 2026-05-03
**数据周期**: 2026-05-02 00:00 ~ 2026-05-03 00:00 (UTC)

---

## 1. 今日速览

过去24小时内，Moltis 项目保持平稳活跃态势，共产生 **4 条新 Issue** 和 **3 条 PR 更新**。项目整体呈现"功能迭代期"特征：维护者正积极推进沙箱多后端支持（#942）和 Matrix OIDC 调试增强（#957）两项功能；社区贡献者完成了繁体中文本地化（#339）并已合并。值得注意的是，今日社区提出了两个值得关注的功能请求——图像生成集成（#956）和 SwarmScore 信任评级集成（#960），反映出用户对扩展 AI 能力边界的强烈诉求。Bug 层面，DeepSeek reasoning_content 问题（#959）需要关注是否影响生产环境。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并 PR

| PR | 标题 | 贡献者 | 状态 |
|----|------|--------|------|
| [#339](https://github.com/moltis-org/moltis/pull/339) | feat(i18n): add zh-TW Traditional Chinese locale support | @PeterDaveHello | ✅ CLOSED |

**#339 详情**: 该 PR 为 Moltis macOS 和 Web 应用添加了完整的繁体中文（台湾）语言支持，包括 UI 字符串、本地化检测和语言选择功能。这是国际化（i18n）工作的重要里程碑，使项目覆盖更广泛的华语用户群体。

### 待合并 PR

| PR | 标题 | 贡献者 | 状态 |
|----|------|--------|------|
| [#942](https://github.com/moltis-org/moltis/pull/942) | feat(sandbox): remote & multi-backend sandbox support | @penso | 🔄 OPEN |
| [#957](https://github.com/moltis-org/moltis/pull/957) | fix(matrix): add debug logging for OIDC registration | @penso | 🔄 OPEN |

**#942 详情**: 引入远程和多后端沙箱支持架构，允许在 Docker-in-Docker 不可用的云部署环境（DigitalOcean 1-click、Fly.io、Render）中进行沙箱化命令执行。参考了 [sandcastle](https://github.com/mattpocock/sandcastle) 的 provider 架构设计。

**#957 详情**: 为 Matrix OIDC 注册流程添加全面的调试日志，帮助运维人员诊断 `invalid_redirect_uri` 失败问题；同时重构了 loopback redirect 规范化逻辑，消除重复代码。

---

## 4. 社区热点

### 热门 Issue 讨论

| Issue | 标题 | 评论数 | 热度分析 |
|-------|------|--------|----------|
| [#959](https://github.com/moltis-org/moltis/issues/959) | [Bug]: DeepSeek reasoning_content 问题 | 1 | ⚠️ 唯一有评论的 Issue，可能涉及生产环境兼容 |
| [#960](https://github.com/moltis-org/moltis/issues/960) | Add SwarmScore — Portable Trust Rating | 0 | 💡 外部合作提案，AI Agent 信任机制新思路 |

**#959 热度分析**: 该 Bug 报告涉及 DeepSeek 在 thinking mode 下 `reasoning_content` 必须回传给 API 的问题。这是今日唯一引发社区讨论的 Issue，可能因为影响了实际使用 DeepSeek 的用户。维护者 @krokozha 已提供详细的问题复现步骤和会话上下文。

**#960 热度分析**: SwarmScore 是一个便携式信任评级系统，提案者认为 Moltis 作为自主 Agent 框架可以从验证执行历史中获益。虽然目前无评论，但代表了 AI Agent 生态系统中新兴的"信誉即服务"趋势。

---

## 5. Bug 与稳定性

### 今日报告的 Bug

| Issue | 标题 | 严重程度 | Fix 状态 |
|-------|------|----------|----------|
| [#959](https://github.com/moltis-org/moltis/issues/959) | DeepSeek reasoning_content in thinking mode | 🟡 中等 | 🔴 无 Fix PR |

**#959 详细分析**:
- **问题描述**: 在 DeepSeek 的 thinking mode 下，`reasoning_content` 必须回传给 API，但当前实现可能未正确处理
- **影响范围**: 使用 DeepSeek reasoning 功能的用户
- **复现条件**: 需在 chat session 中启用 thinking mode
- **建议**: 维护者应优先评估该问题是否影响核心功能，考虑在 #942 或独立 PR 中一并修复

### 文档问题

| Issue | 标题 | 严重程度 | Fix 状态 |
|-------|------|----------|----------|
| [#958](https://github.com/moltis-org/moltis/issues/958) | Voice Services 文档链接到未维护仓库 | 🟢 低 | 🔴 无 Fix PR |

**#958 详细分析**: 文档中关于本地 TTS Provider 设置的链接指向已归档/未维护的 Coqui 仓库。建议更新文档指向活跃维护的替代方案或添加维护状态说明。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 标题 | 潜在价值 | 实现可能性 |
|-------|------|----------|------------|
| [#956](https://github.com/moltis-org/moltis/issues/956) | Add image generation support (gpt-image-2) via OpenAI Codex OAuth | ⭐⭐⭐ 高 | 🔶 中等（需 OAuth 集成） |
| [#960](https://github.com/moltis-org/moltis/issues/960) | SwarmScore — Portable Trust Rating for AI Agents | ⭐⭐ 中等 | 🔷 待评估（外部合作） |

**#956 详细分析**:
- **功能描述**: 通过 OpenAI Codex OAuth 添加图像生成支持（gpt-image-2）
- **用户价值**: 扩展 Moltis 的多模态 AI 能力，与现有文本处理形成闭环
- **实现路径**: 需对接 OpenAI Codex OAuth 流程，可参考现有 OAuth 集成模式
- **路线图信号**: 结合 #942 的沙箱支持，Moltis 正在向"全能 AI Agent 平台"演进

**#960 详细分析**:
- **功能描述**: 集成 SwarmScore 便携式信任评级系统，基于验证执行历史
- **用户价值**: 为 AI Agent 提供可验证的信誉机制，增强协作安全性
- **实现路径**: 需与 SwarmScore 团队对接 API，可能作为可选插件

---

## 7. 用户反馈摘要

### 核心痛点

1. **AI Provider 兼容性问题**: DeepSeek reasoning_content 问题（#959）反映出用户在集成不同 AI Provider 时遇到兼容性挑战
2. **文档维护滞后**: 语音服务文档链接失效（#958）表明文档与依赖仓库的维护周期不同步
3. **云端部署限制**: #942 的沙箱多后端支持需求表明用户希望在更多云平台上部署 Moltis

### 用户期望

- **多模态扩展**: 图像生成支持（#956）表明用户希望 Moltis 支持更丰富的 AI 能力
- **国际化深化**: 繁体中文支持（#339）完成后，华语社区参与度有望提升
- **可观测性增强**: Matrix OIDC 调试日志（#957）反映了企业用户对运维友好性的需求

---

## 8. 待处理积压

### 长期未响应的 Issue/PR

| Issue/PR | 标题 | 创建时间 | 等待天数 | 优先级建议 |
|----------|------|----------|----------|------------|
| [#942](https://github.com/moltis-org/moltis/pull/942) | feat(sandbox): remote & multi-backend sandbox support | 2026-04-30 | 3 天 | 🔴 高（功能完整） |
| [#956](https://github.com/moltis-org/moltis/issues/956) | Add image generation support | 2026-05-02 | 1 天 | 🟡 中（需评审） |
| [#959](https://github.com/moltis-org/moltis/issues/959) | DeepSeek reasoning_content Bug | 2026-05-02 | 1 天 | 🔴 高（影响生产） |

### 维护建议

1. **#942 优先合并**: 该 PR 已开放3天，功能完整且解决了明确的用户痛点（云端部署），建议尽快 review 并合并
2. **#959 Bug 响应**: 建议维护者尽快确认问题根因，如有必要可指派 assignees 或请求更多信息
3. **#958 文档修复**: 虽为低优先级，但文档问题会影响新用户体验，建议安排修复

---

## 指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新 Issue | 4 | ➡️ 持平 |
| 新 PR | 3 | ➡️ 持平 |
| 合并 PR | 1 | ⬆️ +1 |
| 待合并 PR | 2 | ➡️ 持平 |
| Bug 报告 | 1 | ➡️ 持平 |
| 功能请求 | 2 | ⬆️ +2 |

---

**报告生成时间**: 2026-05-03 00:00 (UTC)
**数据来源**: GitHub Moltis Organization (github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期**: 2026-05-03
**项目**: CoPaw (agentscope-ai/CoPaw)
**数据来源**: GitHub 过去 24 小时活动

---

## 1. 今日速览

2026-05-02 期间，CoPaw 项目保持高度活跃，共产生 **14 条新 Issue** 和 **6 条待合并 PR**，但无版本发布或 Issue 关闭。社区聚焦于 **Ollama 本地模型支持**（上下文丢失、arm64 兼容）、**模型回退机制**（多个 Issue 重复提及）以及 **MCP 客户端稳定性**（TaskGroup 假死、timeout 配置）三大主题。PR 层面贡献者积极推进国际化（巴西葡萄牙语）、CLI 工具增强和长期记忆功能修复，整体项目处于功能迭代期，建议优先处理高优先级 Bug。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **6 条待合并 PR**，社区贡献者活跃度较高：

| PR 编号 | 类型 | 作者 | 摘要 | 状态 |
|---------|------|------|------|------|
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | feat(skills) | @JingHou1215 | 新增 CLI 命令 `qwenpaw skills test <skill>`，支持通过工作区技能名称或本地技能目录路径验证技能有效性 | 待合并 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | feat(i18n) | @Jailtonfonseca | 新增巴西葡萄牙语（pt-BR）本地化支持，覆盖 Console 和 Website 约 46% 字符串 | 待合并 |
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) | fix + feat | @gvaiis | 修复 #3182（ReMeLightMemoryManager 未调用导致 memory_search 返回空）和 #3828（embedding 配置未同步），新增 MemoryHook 长期记忆增强 | 待合并 |
| [#4005](https://github.com/agentscope-ai/QwenPaw/pull/4005) | fix(docs) | @hllqkb | 修复 #3041：WSL2 NAT 网络环境下 APITimeoutError 问题文档 | 待合并 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | feat | @no-teasy | 新增向量模型连接测试功能 | 审核中 |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | feat(cron) | @energyd | Discord Cron 任务在 agent 分发前创建独立 Thread，避免回复混入主频道 | 审核中 |

**亮点**: PR #4007 同时解决两个历史 Bug 并引入 MemoryHook 新功能，PR #4009 拓展了国际化覆盖范围。

---

## 4. 社区热点

以下 Issues/PRs 讨论活跃，值得关注：

### 讨论最热烈的 Issues

| Issue 编号 | 类型 | 评论数 | 主题 |
|------------|------|--------|------|
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | Bug | 6 | MCP client 内部 TaskGroup 异常导致 Agent 假死（无响应但不报错） |
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) | Feature | 5 | Model fallback chain for automatic rate limit handling |
| [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | Bug | 2 | Reasoning Content Not Filtered in OpenAI-Compatible Provider |
| [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Question | 2 | Ollama 频道无法携带对话历史，导致会话记忆丢失 |

### 热点分析

1. **#3640 (MCP TaskGroup 假死)**: 6 条评论表明这是影响生产环境的严重问题，用户反馈 Agent 在钉钉/微信渠道无响应但程序未退出，维护者需优先排查。

2. **#1327 (模型回退链)**: 5 条评论且创建于 2026-03-12，是长期未解决的高需求功能，与 #4011、#3789 形成功能重叠，建议统一规划。

3. **#3991 (Ollama 上下文丢失)**: 2 条评论，用户反映本地模型无法保持会话记忆，与 #4003 (arm64 兼容) 共同指向 Ollama 集成质量问题。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 高优先级

| Issue 编号 | 标题 | 严重程度 | 已有 Fix PR? |
|------------|------|----------|--------------|
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP client TaskGroup 异常导致 Agent 假死 | **高** | ❌ |
| [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | OpenAI-Compatible Provider 未过滤 Reasoning Content | **中** | ❌ |

### 🟡 中优先级

| Issue 编号 | 标题 | 严重程度 | 已有 Fix PR? |
|------------|------|----------|--------------|
| [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama 频道无法携带对话历史 | **中** | ❌ |
| [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) | MCP 客户端 timeout 默认 30s 无法修改 | **中** | ❌ |
| [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) | Apple M5 Pro arm64 环境下 Ollama 子进程运行在 Rosetta x86_64 | **中** | ❌ |

### 稳定性风险提示

- **#3640** 影响多渠道（钉钉/微信）生产环境用户，建议紧急处理
- **#4006** 影响 MiniMax 等 OpenAI 兼容端点的内容过滤逻辑，可能导致 token 浪费或内容泄露
- **#4007** PR 已修复 #3182 和 #3828，建议优先合并

---

## 6. 功能请求与路线图信号

今日共 **8 条功能请求**，按需求频次归类：

### 高频需求：模型回退/备用机制

| Issue 编号 | 需求描述 |
|------------|----------|
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) | Model fallback chain for automatic rate limit handling |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | 增加 fallback 模型选项 |
| [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789) | 新增模型回退功能 |

**信号**: 3 个独立 Issue 重复提及模型回退需求，社区共识度高，建议纳入下一版本规划。

### 新兴需求：对话交互增强

| Issue 编号 | 需求描述 |
|------------|----------|
| [#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002) | 对话界面增加可视化共享区域（框选/标注） |
| [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | 支持手动删除单条消息 |
| [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008) | 支持 agent 测评功能（聊天记录查询） |

### 渠道功能增强

| Issue 编号 | 需求描述 |
|------------|----------|
| [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010) | 飞书/微信渠道增加打断/终止功能 |
| [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) | 微信对话与浏览器操作同步 + 网页版语音输入 |

### 技术改进

| Issue 编号 | 需求描述 | 对应 PR |
|------------|----------|---------|
| [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) | auto-derive max_input_length from model context window | - |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | 向量模型连接测试功能 | PR #3831 |

---

## 7. 用户反馈摘要

从 Issue 评论和内容中提炼的真实用户痛点：

### 🔧 稳定性痛点

- **MCP 假死问题**: 用户反馈 Agent 在钉钉/微信渠道无响应，程序后台正常运行但无法交互，需重启恢复
- **Ollama 上下文丢失**: 本地模型每轮对话被当作全新请求，无法记住前文，影响本地部署场景

### 📈 功能期望

- **模型回退**: 用户（尤其是硬件受限的云模型依赖者）期望在主模型限流时自动切换备用模型
- **渠道控制**: 飞书/微信用户期望能主动打断 Agent 正在执行的任务
- **测评需求**: 企业用户向领导汇报时需要量化 agent 性能，缺乏测评工具

### 🌐 体验改进

- **可视化交互**: 用户期望在对话中通过框选、标注等图形化方式表达复杂意图，而非纯文字描述
- **语音输入**: 网页版用户误以为支持语音输入但实际不可用，建议明确提示或新增功能
- **国际化**: 巴西用户贡献葡萄牙语本地化，表明海外社区增长

### 💡 满意点

- Console 对话功能正常（#3640 用户确认重启后恢复）
- 切换到在线 API 模型时记忆功能正常

---

## 8. 待处理积压

以下 Issue 长期未解决或响应，建议维护者关注：

### 长期未解决 Issue

| Issue 编号 | 创建日期 | 天数 | 主题 | 优先级 |
|------------|----------|------|------|--------|
| [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) | 2026-03-12 | ~51 天 | Model fallback chain | **高** |
| [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789) | 2026-04-24 | ~9 天 | 模型回退功能 | 中 |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 2026-04-21 | ~12 天 | MCP TaskGroup 假死 | **高** |

### 待审核 PR

| PR 编号 | 创建日期 | 天数 | 主题 | 状态 |
|---------|----------|------|------|------|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | 2026-04-17 | ~16 天 | Discord Thread 创建功能 | 审核中 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | 2026-04-25 | ~8 天 | 向量模型连接测试 | 审核中 |

### 建议行动

1. **#1327** 已开放 51 天且有 5 条评论，建议明确 roadmap 位置或给出实现计划
2. **#3640** 是影响生产的 Bug，建议分配资源优先排查
3. **#3525** 和 **#3831** 审核时间较长，建议 maintainer 介入推进

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 新增 Issue | 14 |
| 关闭 Issue | 0 |
| 新增 PR | 6 |
| 合并 PR | 0 |
| 新版本发布 | 0 |
| 活跃贡献者 | ~8 人 |

---

*报告生成时间: 2026-05-03*
*数据来源: GitHub CoPaw (agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

# NemoClaw 项目日报 | 2026-05-03

---

## 1. 今日速览

NemoClaw 今日保持高度活跃，共处理 **28 条 Issues**（新开/活跃 20 条，关闭 8 条）和 **50 条 PRs**（待合并 19 条，已合并/关闭 31 条）。项目整体处于快速迭代阶段，CLI 重构工作持续推进（多个 `refactor(cli)` PR 合并），安全修复成为重点（token 泄露防护、SSRF 加固、TLS 错误分类）。未发布新版本，但多个关键 Bug 已通过 PR 修复并合并。Nightly E2E 测试仍存在失败问题（Issue #1992，338 条评论），需持续关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#2712](https://github.com/NVIDIA/NemoClaw/pull/2712) | fix(sandbox): export proxy env in bash -ic / bash -lc | ✅ CLOSED | 修复 `#2704`，在交互式/登录 shell 中正确导出 HTTP_PROXY/HTTPS_PROXY/NO_PROXY |
| [#2842](https://github.com/NVIDIA/NemoClaw/pull/2842) | fix(config): gracefully skip invalid numeric env vars | ✅ CLOSED | 修复 `#2762`，构建时对非数字环境变量优雅跳过而非硬退出 |
| [#2800](https://github.com/NVIDIA/NemoClaw/pull/2800) | feat(onboard): add WSL Windows-host Ollama install/start/restart flow | ✅ CLOSED | 新增 WSL2 环境下 Ollama 生命周期管理功能 |
| [#2825](https://github.com/NVIDIA/NemoClaw/pull/2825) | fix(logs): honor tail and since flags | ✅ CLOSED | 修复 `#2755`，`nemoclaw logs` 命令正确解析 `--tail` 和 `--since` 标志 |
| [#2050](https://github.com/NVIDIA/NemoClaw/pull/2050) | fix(cli): add nemoclaw <name> recover command | ✅ CLOSED | 新增 `nemoclaw <name> recover` 命令，修复 `#2042`，支持非 TTY 环境恢复 |
| [#2841](https://github.com/NVIDIA/NemoClaw/pull/2841) | refactor(cli): shrink runtime bridge | ✅ CLOSED | CLI 重构，移除 `runOpenshell` 依赖 |
| [#2840](https://github.com/NVIDIA/NemoClaw/pull/2840) | refactor(cli): extract credentials and list runtime bits | ✅ CLOSED | CLI 重构，提取凭证和列表运行时逻辑 |
| [#2839](https://github.com/NVIDIA/NemoClaw/pull/2839) | refactor(cli): extract policy and channels actions | ✅ CLOSED | CLI 重构，提取策略和渠道操作模块 |

### 待合并的热门 PRs

| PR | 标题 | 状态 | 亮点 |
|---|---|---|---|
| [#2890](https://github.com/NVIDIA/NemoClaw/pull/2890) | fix(onboard): recover stale onboarding locks after PID reuse | 🔄 OPEN | 修复 onboarding 锁的 PID 重用问题 |
| [#2891](https://github.com/NVIDIA/NemoClaw/pull/2891) | refactor(cli): extract sandbox connect action | 🔄 OPEN | 提取 sandbox 连接逻辑到独立模块 |
| [#2889](https://github.com/NVIDIA/NemoClaw/pull/2889) | fix(installer): surface current-shell PATH readiness | 🔄 OPEN | 修复安装后 PATH 就绪状态提示 |
| [#2468](https://github.com/NVIDIA/NemoClaw/pull/2468) | fix(security): route dashboard URL output through redact() | 🔄 OPEN | **安全修复**：防止 gateway token 在日志中泄露（CWE-532） |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | fix(security): harden config set SSRF validation | 🔄 OPEN | **安全修复**：强化 `nemoclaw config set` 的 SSRF 防护 |
| [#2245](https://github.com/NVIDIA/NemoClaw/pull/2245) | fix(onboard): classify TLS certificate errors as transport failures | 🔄 OPEN | 改进 TLS 错误分类为传输失败 |
| [#2888](https://github.com/NVIDIA/NemoClaw/pull/2888) | fix: normalize OpenClaw config generator permissions | 🔄 OPEN | 修复 `#2861`，标准化 config 生成器权限 |
| [#2884](https://github.com/NVIDIA/NemoClaw/pull/2884) | fix(status): require verified gateway before healthy inference | 🔄 OPEN | 状态检查需先验证 gateway 存在 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**1. #1992 - Nightly E2E failed** 🔥🔥🔥
- 📊 **338 条评论**（远超其他 Issues）
- 🔗 [链接](https://github.com/NVIDIA/NemoClaw/issues/1992)
- 📌 摘要：Nightly E2E 管道失败，涉及 CI/CD 和 E2E 测试
- 💡 诉求：CI/CD 稳定性是项目质量的生命线，此问题持续活跃表明测试基础设施存在系统性问题

**2. #2733 - Ollama tool-call reliability** 🔥
- 📊 **9 条评论**
- 🔗 [链接](https://github.com/NVIDIA/NemoClaw/issues/2733)
- 📌 摘要：Ollama 作为推理后端时，tool-calling agent 工作负载因 chat-template 解析 bug 可能静默失败
- 💡 诉求：本地推理场景下的可靠性问题，用户建议使用 vLLM 作为替代方案

**3. #2199 - Ollama ports missing** 🔥
- 📊 **5 条评论**
- 🔗 [链接](https://github.com/NVIDIA/NemoClaw/issues/2199)
- 📌 摘要：Ollama 本地推理预设缺少 11434/11435 端口，导致沙箱内无法访问
- 💡 诉求：本地模型集成的基础配置问题

### 热门功能请求 PRs

| PR | 标题 | 亮点 |
|---|---|---|
| [#2633](https://github.com/NVIDIA/NemoClaw/issues/2633) | Add `nemoclaw inference` CLI wrapper | 封装 `openshell inference set`，提供原生 CLI 接口 |
| [#2634](https://github.com/NVIDIA/NemoClaw/issues/2634) | Add --sku flag to nemoclaw deploy for Brev | Brev 部署时支持实例类型选择 |
| [#2635](https://github.com/NVIDIA/NemoClaw/issues/2635) | OpenClaw version inside sandbox can become outdated | 沙箱内 OpenClaw 版本自动更新或构建时固定 |
| [#2639](https://github.com/NVIDIA/NemoClaw/issues/2639) | Show model size before Ollama model download | 下载前显示模型大小，防止意外大文件下载 |

---

## 5. Bug 与稳定性

### 高优先级 Bug（已有 Fix PR）

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|---|---|---|---|---|
| [#2861](https://github.com/NVIDIA/NemoClaw/issues/2861) | Permission denied on generate-openclaw-config.py | 🔴 高 | [#2888](https://github.com/NVIDIA/NemoClaw/pull/2888) | 🔄 待合并 |
| [#2704](https://github.com/NVIDIA/NemoClaw/issues/2704) | proxy env vars not exported in bash -ic/-lc | 🔴 高 | [#2712](https://github.com/NVIDIA/NemoClaw/pull/2712) | ✅ 已合并 |
| [#2762](https://github.com/NVIDIA/NemoClaw/issues/2762) | invalid env vars causes hard exit | 🟠 中 | [#2842](https://github.com/NVIDIA/NemoClaw/pull/2842) | ✅ 已合并 |
| [#2755](https://github.com/NVIDIA/NemoClaw/issues/2755) | logs --tail/--since flags silently ignored | 🟠 中 | [#2825](https://github.com/NVIDIA/NemoClaw/pull/2825) | ✅ 已合并 |

### 待修复的 Bug

| Issue | 描述 | 严重程度 | 平台 |
|---|---|---|---|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E pipeline failed | 🔴 阻塞 | All |
| [#2733](https://github.com/NVIDIA/NemoClaw/issues/2733) | Ollama tool-call reliability issues | 🔴 高 | Ollama |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | Ollama ports 11434/11435 missing | 🔴 高 | All |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | Networking latency during onboard | 🟠 中 | Windows/WSL |
| [#2513](https://github.com/NVIDIA/NemoClaw/issues/2513) | TUI fails with "Connection error" | 🟠 中 | Brev/Ubuntu |
| [#2666](https://github.com/NVIDIA/NemoClaw/issues/2666) | status/list return empty output on stopped container | 🟠 中 | Ubuntu |
| [#2880](https://github.com/NVIDIA/NemoClaw/issues/2880) | Unable to disable HeartBeat | 🟡 低 | All |

### 安全相关 Issues

| Issue | 描述 | 严重程度 | Fix PR |
|---|---|---|---|
| [#2467](https://github.com/NVIDIA/NemoClaw/issues/2467) | Gateway auth token leakage in logs | 🔴 高 | [#2468](https://github.com/NVIDIA/NemoClaw/pull/2468) |
| [#2414](https://github.com/NVIDIA/NemoClaw/issues/2414) | SSRF vulnerability in config set | 🔴 高 | [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) |

---

## 6. 功能请求与路线图信号

### 用户高频需求（基于 Issue 标签分析）

| 需求 | Issue | 优先级信号 | 预计纳入 |
|---|---|---|---|
| **CLI 增强** - `nemoclaw inference` 封装 | [#2633](https://github.com/NVIDIA/NemoClaw/issues/2633) | 🔥 高 | v0.0.35+ |
| **Brev 集成** - `--sku` 实例选择 | [#2634](https://github.com/NVIDIA/NemoClaw/issues/2634) | 🔥 高 | v0.0.35+ |
| **本地模型** - Ollama 模型下载确认 | [#2639](https://github.com/NVIDIA/NemoClaw/issues/2639) | 🟠 中 | v0.0.35 |
| **Dashboard** - 单一真相来源的健康验证 | [#2390](https://github.com/NVIDIA/NemoClaw/issues/2390) | 🟠 中 | 架构重构中 |
| **OpenClaw 版本管理** - 沙箱内自动更新 | [#2635](https://github.com/NVIDIA/NemoClaw/issues/2635) | 🟡 低 | 长期规划 |

### 路线图信号

1. **CLI 模块化重构** - 当前 sprint 重点，多个 `refactor(cli)` PR 持续合并，预期下一版本 CLI 结构将大幅简化
2. **安全加固** - Token 泄露防护、SSRF 验证、TLS 错误处理等安全 PR 集中提交
3. **本地推理优化** - Ollama 集成问题（端口、tool-call、模型下载）成为用户反馈热点

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 反馈 | 来源 |
|---|---|---|
| **WSL2 安装** | 安装后 `openshell` CLI 不在 PATH，且 k3s 无法找到 cpuset cgroup | [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) |
| **Brev 部署** | 部署成功后 Dashboard 显示 "Version n/a" 和 "Health Offline" | [#2342](https://github.com/NVIDIA/NemoClaw/issues/2342) |
| **代理环境** | 交互式 shell 中 HTTP_PROXY 不可用，导致网络请求失败 | [#2704](https://github.com/NVIDIA/NemoClaw/issues/2704) |
| **Ollama 本地推理** | 沙箱无法访问本地 Ollama 实例（端口缺失） | [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) |
| **TUI 聊天** | 消息在重连或滚动后消失，对话变得不连贯 | [#2603](https://github.com/NVIDIA/NemoClaw/issues/2603) |
| **HeartBeat 干扰** | 每 30 分钟 HeartBeat 信息淹没 Dashboard，打断正在执行的任务 | [#2880](https://github.com/NVIDIA/NemoClaw/issues/2880) |

### 用户满意度观察

- ✅ **满意点**：WSL2 Ollama 生命周期管理功能（[#2800](https://github.com/NVIDIA/NemoClaw/pull/2800)）受到期待
- ✅ **满意点**：`nemoclaw recover` 命令解决了非 TTY 环境下的恢复难题
- ⚠️ **不满点**：Nightly E2E 持续失败影响开发者信心
- ⚠️ **不满点**：preset 配置不生效问题（[#2177](https://github.com/NVIDIA/NemoClaw/issues/2177)）仍未解决

---

## 8. 待处理积压

### 长期未响应的 Issues（>7 天无更新）

| Issue | 创建日期 | 天数 | 描述 | 优先级 |
|---|---|---|---|---|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | 2026-04-17 | 16 天 | Nightly E2E failed | 🔴 阻塞 |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | 2026-04-17 | 16 天 | Networking latency investigation | 🟠 中 |
| [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) | 2026-04-20 | 13 天 | WSL2 cpuset cgroup issue | 🟠 中 |
| [#2177](https://github.com/NVIDIA/NemoClaw/issues/2177) | 2026-04-21 | 12 天 | Presets do not apply correctly | 🟠 中 |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | 2026-04-21

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*
