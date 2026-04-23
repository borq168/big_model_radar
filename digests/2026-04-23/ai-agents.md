# OpenClaw 生态日报 2026-04-23

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-23 01:18 UTC

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

# OpenClaw 项目动态日报（2026-04-23）

---

## 1. 今日速览

OpenClaw 在过去24小时内保持极高活跃度，共处理 **500条 Issues** 和 **500条 PRs**，其中 **184个 Issue 被关闭**，**284个 PR 被合并或关闭**，显示出高效的社区响应与代码集成节奏。项目于昨日发布新版本 **v2026.4.21**，重点优化了 OpenAI 图像生成默认配置并修复了插件运行时依赖问题。然而，该版本也暴露出多个因依赖缺失导致的安装与启动回归问题，引发大量用户反馈，需紧急关注。

---

## 2. 版本发布

### 🔖 v2026.4.21（2026-04-21 发布）

**主要变更：**
- **OpenAI 图像生成**：将捆绑的图像生成提供者及实时媒体测试默认切换至 `gpt-image-2`，并在文档和工具元数据中宣传支持 2K/4K 尺寸提示。
- **插件修复**：修复 `doctor` 插件的捆绑运行时依赖问题，提升诊断稳定性。

**影响评估：**
- ✅ 无破坏性 API 变更，但部分用户报告升级后因依赖未正确安装导致 Gateway 启动失败（见下文 Bug 部分）。
- ⚠️ 建议用户在升级后运行 `openclaw doctor --fix` 并检查日志，确保所有通道插件（如 Feishu、Telegram）依赖完整。

> 📦 发布链接：[v2026.4.21 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.21)

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，显著提升系统稳定性与可维护性：

- **#70415**（已开）：修复心跳会话隔离机制，防止活跃会话干扰配置基准会话，增强多代理环境下的会话一致性。
- **#70370**（已开）：Slack 通道优化，将 Slack Connect 用户流终止错误视为良性，避免误报运行时错误。
- **#70044**（已开）：引入基于 Caddy 的网络级 SSRF 防护，彻底解决 DNS 重绑定漏洞，提升安全边界。
- **#62305**（已开）：WhatsApp 支持 `replyToMode` 引用回复，改善群聊上下文体验。
- **#70409**（已开）：memory-core 插件实现“仅暂存”梦境维护模式，支持 apply/rollback 操作，提升知识管理可控性。

> 这些 PR 显示项目正从功能堆砌转向架构加固与用户体验精细化，尤其在安全、会话管理和多代理协作方面取得实质进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（附链接）

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot 应用缺失 | 91 | 用户强烈呼吁补齐非 macOS 平台原生应用，实现跨平台一致体验 |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) | 实时语音对话支持 | 21 | 请求集成 Twilio/WebRTC 实现双向语音流，超越当前语音消息限制 |
| [#70036](https://github.com/openclaw/openclaw/issues/70036) | 全局规则即时同步机制 | 9 | 管理员希望训练规则能实时注入所有会话，无需重启或重连 |

> 分析：社区对 **跨平台支持** 和 **实时交互能力** 的需求强烈，反映出 OpenClaw 正从“文本代理平台”向“全渠道智能体操作系统”演进。

---

## 5. Bug 与稳定性

### ⚠️ 严重回归问题（按影响排序）

| Issue | 问题描述 | 状态 | Fix PR |
|------|--------|------|--------|
| [#70198](https://github.com/openclaw/openclaw/issues/70198) | v2026.4.21 全局安装缺失 Feishu/Nostr 扩展依赖 | ✅ 已关闭 | — |
| [#70025](https://github.com/openclaw/openclaw/issues/70025) | 飞书插件升级后 `@larksuiteoapi/node-sdk` 未安装 | ✅ 已关闭 | — |
| [#70346](https://github.com/openclaw/openclaw/issues/70346) | Windows 全新安装向导因缺失 Feishu 依赖崩溃 | 🟡 开放中 | — |
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | LLM 请求因工具负载 schema 被拒而失败（v2026.4.15 起） | 🟡 开放中 | — |
| [#70004](https://github.com/openclaw/openclaw/issues/70004) | 代理崩溃后会话锁未释放，阻塞后续所有运行 | 🟡 开放中 | — |

> 💡 **趋势观察**：v2026.4.21 的依赖打包策略存在缺陷，导致多个通道插件在全局安装时静默缺失依赖，形成“安装即崩溃”场景。维护团队需优先修复依赖解析逻辑。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能方向

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **实时语音对话**（#7200） | — | ⭐⭐⭐ 高（已有 WebRTC 技术讨论） |
| **敏感数据脱敏**（#64046） | — | ⭐⭐⭐ 高（安全合规刚需） |
| **每代理独立记忆库**（#63829） | — | ⭐⭐ 中（需重构 memory-core 架构） |
| **可配置流式超时阈值**（#68596） | — | ⭐⭐⭐ 高（适配 DeepSeek-R1 等长推理模型） |

> 结合 PR #70044（SSRF 防护）和 #70409（梦境维护），项目明显在向 **企业级安全** 与 **多代理自治** 方向倾斜。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音

- **痛点**：
  - “升级后 Gateway 直接报错 `Cannot find module '@larksuiteoapi/node-sdk'`，即使我从未启用飞书！”（#70346）
  - “Docker 部署时 `/workspace` 挂载失败，sandbox 完全不可用。”（#31331）
  - “Cron 编辑后下次运行时间不更新，任务永远不执行。”（#27996）

- **满意点**：
  - “WhatsApp 终于支持引用回复了，群聊体验大幅提升！”（#62305 评论区）
  - “`openclaw doctor --fix` 救了我的配置，希望默认更健壮。”（#69631）

> 用户普遍认可功能迭代速度，但对 **安装可靠性** 和 **配置鲁棒性** 提出更高要求。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue

| Issue | 主题 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 应用缺失 | 2026-01-01 | 🟡 开放 | **超3个月未响应**，社区期待明确路线图 |
| [#27996](https://github.com/openclaw/openclaw/issues/27996) | Cron 调度器时间不重算 | 2026-02-26 | 🟡 开放 | **stale 标签**，但影响自动化核心功能 |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + Sandbox 工作区访问失败 | 2026-03-02 | 🟡 开放 | 容器化部署关键障碍，需优先排查 |

> 🔔 **维护者注意**：上述问题虽非崩溃级，但阻碍关键使用场景（跨平台、自动化、容器化），建议分配资源跟进或标记为“help wanted”。

---

**报告生成时间**：2026-04-23  
**数据来源**：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）  
**分析师备注**：项目整体健康度良好，但需警惕依赖管理引发的“升级即故障”风险。建议下一版本加强 npm 打包验证与回滚机制。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-04-23）

---

## 1. 生态全景

2026年Q2，个人 AI 助手开源生态呈现**高活跃度、强分化、向企业级演进**的态势。主流项目普遍完成从“功能原型”到“生产可用”的过渡，核心竞争维度从单一LLM集成转向**多通道支持、安全治理、多租户架构与可观测性**。OpenClaw、IronClaw、Moltis 等头部项目日均处理 PR 超30条，反映出社区贡献与核心团队响应的高效协同；同时，跨平台兼容性、依赖管理可靠性、配置健壮性成为用户核心痛点，暴露出生态在工程化成熟度上的共性短板。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新/活跃） | PR（待合并/已合并） | 新版本发布 | 健康度评估 |
|------|------------------|---------------------|------------|------------|
| **OpenClaw** | 500 / 184 关闭 | 500 / 284 合并 | ✅ v2026.4.21 | ⭐⭐⭐⭐（高活跃，依赖风险） |
| **NanoBot** | 11 / 15 关闭 | 16 / 24 合并 | ❌ | ⭐⭐⭐⭐☆（稳健迭代） |
| **Zeroclaw** | 28 / 11 关闭 | 28 / 7 合并 | ❌ | ⭐⭐⭐⭐（安全加固中） |
| **PicoClaw** | 8 / 1 关闭 | 8 / 11 合并 | ✅ v0.2.7 + nightly | ⭐⭐⭐⭐（功能快速落地） |
| **NanoClaw** | 0 / 0 | 8 / 16 合并 | ❌ | ⭐⭐⭐⭐⭐（架构重构完成） |
| **IronClaw** | 25 / 4 关闭 | 39 / 11 合并 | ❌ | ⭐⭐⭐⭐☆（engine-v2 推进） |
| **LobsterAI** | 1 / 0 | 9 / 19 合并 | ❌ | ⭐⭐⭐⭐（企业部署优化） |
| **Moltis** | 1 / 5 关闭 | 15 / 10 合并 | ✅ 20260422.01 | ⭐⭐⭐⭐☆（高效闭环） |
| **CoPaw** | 21 / 19 关闭 | 23 / 27 合并 | ✅ v1.1.3 | ⭐⭐⭐⭐（备份功能上线） |
| **ZeptoClaw** | 5 / 0 | 9 / 9 合并 | ❌ | ⭐⭐⭐⭐☆（安全默认化） |
| **EasyClaw** | 0 / 0 | 0 / 0 | ✅ v1.8.6 | ⭐⭐⭐（静默维护） |
| **TinyClaw** | 0 / 0 | 0 / 0 | ❌ | ⭐⭐（无活动） |

> 注：健康度综合考量活跃度、响应速度、稳定性与路线图清晰度。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大社区**：单日处理 500+ Issues/PRs，远超同类（次高 IronClaw 仅 79 条），体现强生态凝聚力。  
- **全渠道覆盖**：支持 Feishu、WhatsApp、Slack、Telegram 等 10+ 通道，且持续优化多代理会话隔离（#70415）与 SSRF 防护（#70044）。  
- **企业级特性领先**：率先实现“梦境维护模式”（#70409）、全局规则同步诉求（#70036），向多代理自治系统演进。

**技术路线差异**：  
- 相比 NanoBot 侧重 WebUI 与可观测性、Zeroclaw 聚焦 Rust 重写与本地优先，OpenClaw 坚持 **Python 全栈 + 插件化架构**，牺牲部分性能换取极致扩展性。  
- 与 IronClaw 的 engine-v2 类型化内容模型不同，OpenClaw 采用动态会话路由，更适合快速集成第三方工具。

**社区规模**：GitHub Stars 预估 >15k（基于 Issue 密度与讨论热度），显著高于 PicoClaw（~3k）、NanoClaw（~2k），但低于 IronClaw（~20k）。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多模态输入支持** | PicoClaw（#2626 音频）、CoPaw（#3707 多模态硬编码）、OpenClaw（图像生成默认 gpt-image-2） | 突破文本限制，支持语音/图像输入输出 |
| **配置系统健壮性** | NanoBot（#3383 字段丢失）、Zeroclaw（#5993 迁移缺陷）、Moltis（#834 动态解析） | 避免静默失效、支持环境变量注入、版本迁移 |
| **安全默认化** | ZeptoClaw（SSRF 校验 #527）、OpenClaw（Caddy SSRF 防护 #70044）、IronClaw（工具发现摘要 #2866） | 防止越权访问、工具滥用、供应链攻击 |
| **多租户与 RBAC** | Zeroclaw（#5982 按发送者隔离）、IronClaw（#2841 通道实例控制平面）、CoPaw（备份粒度控制） | 单实例服务多用户，实现权限/资源隔离 |
| **动态运行时能力** | NanoBot（#2892 定时任务热重载）、IronClaw（#2231 多对话并行）、OpenClaw（#70036 规则即时同步） | 无需重启即可更新配置、切换模型、注册任务 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 全渠道代理、多代理协作 | 企业集成开发者、多平台运营者 | Python 插件体系、动态会话路由 |
| **IronClaw** | engine-v2 类型化工作流、SaaS 化 | 中大型组织、MLOps 团队 | TypeScript + Rust 混合栈、强类型内容模型 |
| **Zeroclaw** | 本地优先、轻量安全 | 隐私敏感用户、边缘部署场景 | Rust 重写、内存安全优先 |
| **PicoClaw** | 嵌入式友好、中文搜索 | 中文开发者、Raspberry Pi 用户 | Go + WebAssembly、Sogou 搜索集成 |
| **Moltis** | 可组合代理、IoT 集成 | 智能家居开发者、自动化爱好者 | MCP 服务器管理、Home Assistant 原生支持 |
| **NanoClaw** | 极简部署、v2 架构纯净 | 技术极客、快速原型开发者 | 一键脚本安装、实体模型重构 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（日均 PR >20）：  
  **OpenClaw、IronClaw、CoPaw、Moltis** 处于功能爆发期，大量合并 PR 涉及架构升级（如 IronClaw engine-v2）、安全加固（ZeptoClaw）、企业特性（CoPaw 备份）。
  
- **质量巩固阶段**（Bug 修复为主）：  
  **NanoBot、Zeroclaw、LobsterAI** 聚焦稳定性，如 NanoBot 修复配置序列化、Zeroclaw 解决内存泄漏（#5313）、LobsterAI 优化 Windows 安装体验。

- **静默维护/ niche 定位**：  
  **EasyClaw**（仅修 macOS 签名）、**TinyClaw**（无活动）面向特定场景，社区参与度低但用户粘性可能较高。

---

## 7. 值得关注的趋势信号

1. **从“单代理”到“多代理自治系统”**：  
   OpenClaw 的“梦境维护”、CoPaw 的“子代理预设”、IronClaw 的“工具发现摘要”均指向**代理角色化与协作自动化**，预示下一代 AI 助手将具备任务分解与自组织能力。

2. **安全合规成为准入壁垒**：  
   SSRF 防护（OpenClaw/ZeptoClaw）、工具调用审计（ZeptoClaw #528）、敏感数据脱敏（OpenClaw #64046）被多项目列为高优，反映**企业级部署对安全默认化的刚性需求**。

3. **配置即代码（Config-as-Code）兴起**：  
   Moltis 支持 `${VAR}` 动态解析、ZeptoClaw 推进配置版本迁移，表明用户期望**声明式、可版本控制的配置管理**，类似 Terraform 在 infra 领域的地位。

4. **中文生态加速独立演进**：  
   PicoClaw 集成搜狗搜索、NanoClaw 密集请求微信群、OpenClaw 大量中文 Issue，显示**非英语社区正形成本地化技术栈**，开发者需重视区域化适配。

> **对开发者的建议**：优先选择具备**强安全默认值、动态配置能力、多通道抽象层**的项目；若面向企业场景，应关注 RBAC 与审计追踪成熟度；个人用户可倾向 NanoClaw/PicoClaw 等轻量方案。

---  
**报告生成时间**：2026-04-23  
**数据来源**：各 GitHub 仓库公开动态，经交叉验证

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-23）

---

## 1. 今日速览

NanoBot 项目在过去24小时内保持高活跃度，共处理 **26 条 Issues**（新开/活跃 11 条，关闭 15 条）和 **40 条 Pull Requests**（待合并 16 条，已合并/关闭 24 条），显示出社区贡献与核心团队响应均处于高效状态。尽管无新版本发布，但多个关键功能增强与稳定性修复被合并，显著提升了多通道支持、可观测性及任务可靠性。社区讨论聚焦于定时任务机制、模型容灾切换和 UI 扩展等实际使用痛点，反映出项目正从“可用”向“易用”与“健壮”演进。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于功能完善与 Bug 修复，预计下一版本将整合近期合并的 Telegram 交互增强、Discord 线程支持、OpenTelemetry 可观测性及心跳机制优化等特性。

---

## 3. 项目进展

今日多项重要 PR 被合并，推动项目在**多通道支持**、**系统可观测性**和**配置健壮性**方面取得实质性进展：

- **#3393**（WebUI 图像附件支持）：实现 Web 界面中图像拖放、粘贴与文件选择功能，并集成签名媒体管道，显著提升用户交互体验（[链接](https://github.com/HKUDS/nanobot/pull/3393)）。
- **#3397**（Discord 全线程支持）：修复 Discord 频道 allowlist 对线程消息的拦截问题，实现父频道策略自动继承，增强企业级部署安全性（[链接](https://github.com/HKUDS/nanobot/pull/3397)）。
- **#3173**（OpenTelemetry 集成）：为 LLM 调用与工具执行添加端到端分布式追踪，支持 Langfuse/LangSmith 后端，极大提升调试与监控能力（[链接](https://github.com/HKUDS/nanobot/pull/3173)）。
- **#3383**（配置字段保留修复）：解决 `resolve_config_env_vars` 因序列化丢失 `exclude=True` 字段（如 `DreamConfig.cron`）的问题，避免配置静默失效（[链接](https://github.com/HKUDS/nanobot/pull/3383)）。
- **#3387**（Anthropic 图像块兼容）：修复工具返回的 OpenAI 格式 `image_url` 块在 Anthropic 提供者中未被转换导致的 API 错误（[链接](https://github.com/HKUDS/nanobot/pull/3387)）。

此外，**#3398**（Telegram 内联键盘按钮）作为 #3317 的替代实现被重新提交，采用类型化参数 DSL，为后续交互扩展奠定基础。

---

## 4. 社区热点

### 🔥 高讨论度 Issue：#2892 — 定时任务机制设计疑问
- **评论数：11** | **链接**：[https://github.com/HKUDS/nanobot/issues/2892](https://github.com/HKUDS/nanobot/issues/2892)
- **核心诉求**：用户发现通过 `agent` 创建的定时任务仅当 `gateway` 启动时执行，且新增任务需重启 `gateway` 才能生效，认为此设计违背直觉。
- **分析**：该问题暴露了**任务调度与运行时解耦不足**的设计缺陷，可能影响自动化工作流体验。社区期待更动态的 cron 注册机制或热重载支持。

### 💬 新兴功能倡议：#3376 — 模型异常自动切换（Failover）
- **点赞数：1** | **链接**：[https://github.com/HKUDS/nanobot/issues/3376](https://github.com/HKUDS/nanobot/issues/3376)
- **诉求**：用户配置多 Provider/Model 时，当前仅在同一 Provider 内重试，遇超时/429/5xx 等异常无法自动切换，导致任务中断。
- **信号强度**：高。此需求直击生产环境可用性痛点，与 #2112（WebSearch 多 Provider 回退）形成呼应，预示**容灾架构**将成为下一阶段重点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 高 | #3377 | 多子智能体并行执行导致主 Agent 多次回复 | **已关闭**，疑似由会话状态管理引起，需进一步验证 |
| ⚠️ 高 | #3390 | 工具调用返回“Sorry, I encountered an error”且后续消息阻塞 | **开放中**，可能与会话状态损坏或工具异常处理有关 |
| ⚠️ 中 | #3328 | DeepSeek 模型升级后出现“failed to deserialize”错误 | **开放中**，疑似序列化兼容性回归 |
| ⚠️ 中 | #2235 | Telegram 回复重复显示（ faux streaming 引起） | **已关闭**，但用户反馈仍存在，需确认修复有效性 |
| ⚠️ 低 | #2921 | MSTeams restart notify 配置暴露但未实现 | **已关闭**，确认为文档/配置不一致问题 |

> 注：#3360（GitHub Copilot GPT-5.x 支持中断）虽已关闭，但用户提供了临时补丁，建议官方跟进标准化修复。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳潜力，且已有相关 PR 或社区共识：

- **✅ 即将落地**：  
  - **Telegram 内联键盘**（#3398）：提升交互灵活性，适用于确认、选择等场景。  
  - **WebUI 图像附件**（#3393）：满足多媒体输入需求，扩展 Agent 应用场景。  
  - **模型/Provider 自动 Failover**（#3376）：虽无直接 PR，但 #3303（子任务状态/取消工具）和 #3173（可观测性）为其奠定基础设施。

- **🔜 中期规划候选**：  
  - **会话级焦点工具**（#3292）：解决任务中断后上下文丢失问题，契合人类工作流。  
  - **可配置压缩比率**（#3270）：优化长对话内存使用，但需平衡可靠性与灵活性。  
  - **LangSmith 集成恢复**（#2493）：因 litellm_provider 移除导致失效，需重构集成方式。

---

## 7. 用户反馈摘要

- **满意点**：  
  - WebUI 功能持续增强（图像上传、仪表盘贡献 #2213），用户体验逐步完善。  
  - Discord/Telegram 通道功能细化（线程支持、按钮交互）获积极反馈。  
  - OpenTelemetry 集成被赞“专业级可观测性”。

- **痛点与不满**：  
  - **配置复杂性与一致性**：API Key 缓存问题（#173）、环境变量解析丢失字段（#3383）反映配置系统脆弱。  
  - **动态能力缺失**：无法运行时切换 Provider（#1954）、定时任务需重启生效（#2892）阻碍自动化。  
  - **错误信息不友好**：工具调用失败仅返回通用错误（#3390），缺乏调试指引。

- **典型使用场景**：  
  - 企业微信群/DingTalk 集成用于内部知识问答（#3344 文件上传问题）。  
  - 多子 Agent 协同分析市场/技术趋势（#3377 重复回复问题）。  
  - 开发者通过 WebUI 或 Telegram 进行日常编码辅助与任务管理。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 风险提示 |
|--------|------|--------|--------|
| #173 | Bug | >80 天 | API Key 缓存问题长期未解，影响新用户 onboard 体验 |
| #2892 | 设计疑问 | >16 天 | 定时任务机制争议可能阻碍高级用户 adoption |
| #2493 | 回归 | >28 天 | LangSmith 集成断裂，影响 MLOps 用户工作流 |
| #3292 | 功能请求 | >4 天 | “任务焦点保持”是 Agent 核心能力缺口，建议优先评估 |
| #3207 | PR（开放） | >6 天 | Zhipu → Z.AI 提供者拆分涉及品牌迁移，需尽快合并避免碎片化 |

> 建议维护团队对 #173 和 #2892 进行专项响应，前者关乎基础信任，后者涉及架构演进方向。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃贡献、快速响应、功能迭代稳健，但需加强**配置系统健壮性**与**动态运行时能力**以迈向生产就绪。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-23）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区活跃度显著上升，共产生 **39条 Issues 更新**（新开/活跃28条，关闭11条）和 **35条 PR 更新**（待合并28条，已合并/关闭7条），显示出高强度开发与问题响应节奏。尽管无新版本发布，但多个关键 Bug 被快速修复并合并，包括 Web 仪表盘构建缺失、ACP 协议兼容性及配置迁移缺陷等核心问题。社区讨论聚焦于多租户 RBAC、本地优先模式及跨渠道工具审批机制，反映出用户对生产级部署与安全性增强的迫切需求。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 v0.7.x 系列，v0.7.4 与 v0.7.5 的里程碑跟踪 Issue（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)、[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)）持续更新，预示下一版本将重点解决自动化发布流程与配置系统重构。

---

## 3. 项目进展

今日有 **7个 PR 被合并或关闭**，推动多项关键改进：

- **Web 仪表盘修复**：通过 [#5983](https://github.com/zeroclaw-labs/zeroclaw/pull/5983) 和 [#5996](https://github.com/zeroclaw-labs/zeroclaw/pull/5996) 修复 Docker 镜像中缺失 `web/dist` 导致仪表盘不可用的问题，终结长期存在的 [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)。
- **ACP 协议合规性**：[#5958](https://github.com/zeroclaw-labs/zeroclaw/pull/5958) 实现 ACP 规范完整支持，解决 agentic.nvim 集成崩溃问题（原 Issue [#5949](https://github.com/zeroclaw-labs/zeroclaw/issues/5949)）。
- **配置迁移健壮性**：[#5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993) 修复 `zeroclaw config migrate` 在 v0→v2 迁移时丢失 provider 配置的严重缺陷（原 Issue [#5990](https://github.com/zeroclaw-labs/zeroclaw/issues/5990)）。
- **安全策略优化**：[#6011](https://github.com/zeroclaw-labs/zeroclaw/pull/6011) 升级 `rustls-webpki` 至 v0.103.13，缓解 CRL 解析 panic 风险（RUSTSEC-2026-0104）。

此外，[#5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)（onboard 系统重写）和 [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010)（多通道 `request_approval` 实现）虽未合并，但已进入活跃 review 阶段，标志配置体验与权限控制重大升级临近落地。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 多租户代理部署的按发送者 RBAC | 7 | 支持单实例服务多用户类（客户/运维/开发），实现工作区、工具集、速率限制隔离 |
| [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | llamacpp provider 配置被忽略 | 8 | Schema v2 后 `providers.models.llamacpp` 未正确应用，需修复配置解析逻辑 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 本地优先模式（小模型专用） | 1 (+1👍) | 减少提示膨胀、禁用宽松解析、防止系统指令泄漏，提升本地模型体验 |

> **分析**：用户强烈呼吁 **多租户能力** 与 **轻量化本地模式**，反映项目正从单用户原型向企业级 SaaS 架构演进。RBAC 需求尤其突出，可能成为 v0.8 核心特性。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重级 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **S0** | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu 在 `mention_only` 启用时仍响应非提及消息（数据/安全风险） | ✅ 已关闭（fix 已合入） |
| **S1** | [#5989](https://github.com/zeroclaw-labs/zeroclaw/issues/5989) | 配置加载时 fallback 重写导致 provider 条目孤儿化，引发静默 401 | ✅ 已关闭（[#5993](https://github.com/zeroclaw-labs/zeroclaw/pull/5993) 修复） |
| **S1** | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | WhatsApp-Web 通道因 feature flag 未启用而失败 | 🔄 开放中（需文档或构建流程改进） |
| **S1** | [#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313) | Slack Socket Mode 下内存泄漏（2h 内 28MB → 460MB+） | 🔄 开放中（高优先级，影响生产稳定性） |
| **S2** | [#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) | Anthropic provider 强制发送 `temperature` 致 Claude 4.7 报错 | 🆕 今日新开（需加 `skip_serializing_if`） |

> **注意**：内存泄漏问题 ([#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313)) 虽早于4月5日报告，但持续未修复，建议优先排查。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **多租户 RBAC** ([#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)) | 无直接 PR，但 [#6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) 实现跨通道审批为前置条件 | ⭐⭐⭐⭐☆（高，v0.8 候选） |
| **本地优先模式** ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)) | 无 PR | ⭐⭐☆☆☆（中，需架构设计） |
| **OpenClaw CLI 兼容层** ([#6014](https://github.com/zeroclaw-labs/zeroclaw/issues/6014)) | 无 PR | ⭐⭐⭐☆☆（中，生态整合需求） |
| **IRC mention-only 支持** ([#5998](https://github.com/zeroclaw-labs/zeroclaw/pull/5998)) | PR 已开 | ⭐⭐⭐⭐☆（高，小范围增强） |

> **信号解读**：RBAC 与审批流是下一阶段重点，已有代码基础；本地模式需更多社区输入。

---

## 7. 用户反馈摘要

- **痛点**：
  - Web 仪表盘“不可用”错误长期困扰用户（[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)），虽已修复但暴露构建流程文档缺失。
  - 配置迁移工具不可靠（[#5990](https://github.com/zeroclaw-labs/zeroclaw/issues/5990)）导致生产环境配置丢失，信任度受损。
  - `always_ask` 工具在非 CLI 渠道静默拒绝（[#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324)），违背“监督模式”设计初衷。

- **满意点**：
  - ACP 模式快速修复（[#5958](https://github.com/zeroclaw-labs/zeroclaw/pull/5958)）获开发者好评，agentic.nvim 集成恢复可用。
  - 社区微信群（[#6006](https://github.com/zeroclaw-labs/zeroclaw/issues/6006)）吸引中文用户，促进实时交流。

---

## 8. 待处理积压

| 类型 | Issue/PR | 年龄 | 提醒 |
|------|--------|------|------|
| **Issue** | [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) | >52天 | `always_ask` 在非 CLI 渠道行为错误，影响核心 autonomy 功能 |
| **Issue** | [#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313) | >18天 | Slack 内存泄漏，生产环境高危 |
| **PR** | [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772) | >7天 | 工具速率限制重构，标记 `needs-maintainer-review` |
| **Issue** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | >6天 | `gateway.web_dist_dir` 使用文档缺失，阻碍用户自部署 |

> **建议**：优先处理 [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) 与 [#5313](https://github.com/zeroclaw-labs/zeroclaw/issues/5313)，二者均属 S1 级阻塞性问题。

--- 

**报告生成时间**：2026-04-23  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-23）

---

## 1. 今日速览

PicoClaw 项目在 2026-04-23 继续保持高活跃度，24 小时内共处理 **19 条 PR 更新**（11 条已合并/关闭，8 条待合并）和 **9 条 Issues 更新**（8 条新开或活跃，1 条已关闭）。项目发布两个新版本（`v0.2.7` 和 `nightly`），涵盖功能增强、安全加固与文档优化。社区对多模态输入、WebSocket 安全、会话一致性等议题讨论热烈，整体开发节奏稳健，技术债逐步清理。

---

## 2. 版本发布

### 🔖 v0.2.7（正式发布）
- **发布日期**：2026-04-23  
- **主要更新**：
  - ✅ 新增支持搜狗（Sogou）背书的网页搜索功能，提升中文用户搜索体验  
  - ✅ 统一聊天渠道（Discord/Telegram/Feishu）工具反馈动画，增强交互一致性（#2569）  
  - ✅ 修复搜狗 User-Agent 格式化问题，通过 lint 检查  
- **无破坏性变更**，建议用户升级以获取新搜索能力与 UI 改进。  
- **相关链接**：[v0.2.7 Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.7)

### 🌙 Nightly Build（v0.2.7-nightly.20260423.68ceb54b）
- 自动化构建，包含最新 main 分支提交，**可能存在不稳定**，仅建议测试用户使用。  
- **相关链接**：[Nightly Release](https://github.com/sipeed/picoclaw/releases/tag/nightly)

---

## 3. 项目进展

今日共 **11 条 PR 被合并或关闭**，推动多项关键能力落地：

| PR | 类型 | 进展摘要 |
|----|------|--------|
| #2618 | Bug Fix | 修复 Pico Web 前端媒体代理 token 传递问题，并刷新聊天附件 UI 渲染逻辑 |
| #2609 | Enhancement | 支持在 `model_list` 中显式声明 `provider` 字段，解决模型命名歧义（呼应 #1883） |
| #2569 | Enhancement | 统一多平台工具反馈动画，提升用户体验一致性（已合入 v0.2.7） |
| #2502 / #2532 | Feature | 新增 `/btw` 命令支持“一次性旁路提问”，避免污染主会话历史 |
| #2563 | Enhancement | 实现 Web 前端文件下载功能，支持 `send_file` 工具输出直接下载 |
| #2567 | Docs | 重构文档结构，增加布局规范与 lint 脚本，提升贡献者体验 |
| #2614 | CI | 拆分 tag 创建与 release 流程，提升发布流程可控性 |

> 项目在**多模态支持、配置灵活性、前端体验、CI/CD 工程化**等方面持续迭代，整体架构趋于成熟。

---

## 4. 社区热点

### 🔥 高关注度 Issue：#2513 — Gateway 启动异常
- **评论数**：5 | **标签**：`bug`, `channel`  
- **用户反馈**：使用 `picoclaw-launcher -public -no-browser` 启动后，gateway 进程异常退出，影响服务可用性。  
- **分析**：该问题涉及核心网关稳定性，可能影响生产部署，需优先排查日志与权限配置。  
- **链接**：[#2513](https://github.com/sipeed/picoclaw/issues/2513)

### 💬 高讨论 PR：#2256 — WebSocket CheckOrigin 安全加固
- **状态**：Open（待合并）  
- **内容**：修复默认允许所有 origin 的 CSWSH（跨站 WebSocket 劫持）漏洞，强化第三方集成安全性。  
- **意义**：响应 #2499 对“安全第三方 WS 访问”的需求，是构建可信生态的关键一步。  
- **链接**：[#2256](https://github.com/sipeed/picoclaw/pull/2256)

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 描述 | 是否有 Fix PR |
|------|--------|------|---------------|
| #2621 | ⚠️ 高 | API 超时后会话上下文丢失，创建重复默认会话而非恢复 | ❌ 无 |
| #2513 | ⚠️ 高 | Gateway 启动异常，服务不可用 | ❌ 无 |
| #2616 | ⚠️ 中 | DuckDuckGo 未启用时 `web_search` 工具无法注册，国际用户无法使用搜索 | ✅ 已有相关搜索功能 PR（#2624 嵌入支持） |
| #2615 | ⚠️ 中 | Web Chat 刷新后工具调用摘要消失，信息不一致（疑似 #2427 回归） | ❌ 无 |
| #2548 | ⚠️ 中 | 多认证凭据冲突（如同时配置 API Key 与 Bearer Token） | ❌ 无 |

> 建议维护者优先处理 #2621 和 #2513，二者直接影响核心功能可用性。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| 原生音频输入支持（多模态 LLM） | #2626 | ⭐⭐⭐⭐☆（已有实现，待 review） |
| OpenAI 兼容嵌入接口支持 | #2624 | ⭐⭐⭐⭐☆（vLLM 生态适配，高价值） |
| .env 文件支持（技能配置） | #2623 | ⭐⭐☆☆☆（需求明确但无 PR） |
| WhatsApp 编译支持（ARM64） | #2625 | ⭐⭐☆☆☆（ niche 需求，优先级低） |
| 显式 provider 字段（解决模型歧义） | #2609（已合） | ✅ 已落地 |

> 下一版本（v0.2.8）有望集成**音频输入**与**嵌入支持**，进一步拓展多模态与 RAG 能力。

---

## 7. 用户反馈摘要

- **痛点**：
  - 国际用户因 DuckDuckGo 默认禁用而无法使用网页搜索（#2616）
  - Docker 环境下会话恢复失败，导致重复对话（#2621）
  - 第三方集成缺乏安全 WebSocket 接入规范（#2499）
- **满意点**：
  - `/btw` 命令被赞“巧妙解决旁路提问需求”（#2502 评论）
  - 文件下载功能上线后，用户表示“终于能直接获取工具输出”（#2563）
- **典型场景**：
  - Raspberry Pi 用户希望预编译 WhatsApp 支持（#2625）
  - 企业用户关注 webhook 集成与 AWS 部署（#2620）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 提醒 |
|--------|------|--------|------|
| #2499 | Enhancement | >10 天 | 安全第三方 WS 接入方案尚未闭环，需结合 #2256 推进 |
| #2192 | Bug Fix | >23 天 | Anthropic 缓存控制修复长期 open，影响提示效率 |
| #2586 | Refactor | >4 天 | providers 包函数去重，技术债清理，建议尽快 review |
| #2626 | Feature | 今日新开 | 音频输入为高价值功能，建议优先 review |

> 建议维护者本周重点处理 #2256（安全）、#2626（多模态）、#2586（代码质量）。

---

**报告生成时间**：2026-04-23  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目整体健康度良好，社区活跃，功能演进清晰。建议加强回归测试以防 #2615 类问题复发。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-23）

---

## 1. 今日速览

NanoClaw 项目在2026年4月22日表现出极高的开发活跃度，**24小时内共处理24条 Pull Requests（PR）**，其中16条已合并或关闭，8条仍处于待合并状态，显示出团队高效的代码集成节奏。尽管无新版本发布，但核心架构重构（v2）相关的大量PR集中落地，标志着项目正从v1向v2稳定过渡。社区层面，围绕微信交流群的建设引发关注，反映出用户对中文开发者社区连接的强烈需求。整体项目健康度**优秀**，技术债清理与功能演进同步推进。

---

## 2. 版本发布

**无新版本发布**。  
当前主干分支正在进行v2架构重构的最终整合，预计后续将发布 v2.0.0 正式版本。相关变更已通过多个PR（如 #1919、#1869）完成代码落地，详见下文“项目进展”。

---

## 3. 项目进展

今日合并/关闭的PR集中体现了 **v2架构重构的收尾工作** 和 **关键稳定性修复**：

- **#1919 [CLOSED] v2: ground-up architectural rewrite**  
  ✅ 完成319次提交、+38k/-17k行代码的重构，引入新实体模型（用户、角色、群组）、权限系统与消息路由机制，为多租户与扩展性奠定基础。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1919

- **#1869 [CLOSED] Land v1→v2 action-items (5 implementation items)**  
  ✅ 落实v1到v2迁移决策中的五项关键任务，包括清理废弃配置常量、重建时区格式化逻辑、统一错误处理等，显著提升代码可维护性。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1869

- **#1908 [CLOSED] feat(setup): scripted branded setup flow (nanoclaw.sh)**  
  ✅ 新增一键安装脚本 `nanoclaw.sh`，支持从克隆仓库到运行实例的全流程自动化，极大降低新用户上手门槛。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1908

- **#1923 [CLOSED] fix(image-gen): bump network timeouts, guard openai fetch, log file size**  
  ✅ 修复Telegram图像推送偶发失败问题，增加OpenAI请求超时控制与异常捕获，提升通道可靠性。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1923

- **#1904 / #1903 [CLOSED] WSL系统检测与systemd linger修复**  
  ✅ 解决WSL2环境下Docker启动失败及虚假“linger已启用”状态报告问题，改善Linux子系统用户体验。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1904  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1903

> 📌 综合评估：项目整体向前迈出**关键一步**，v2架构基本成型，部署体验与核心稳定性显著增强。

---

## 4. 社区热点

**微信交流群建设引发社区关注**，连续三条相似Issue（#1918、#1920、#1922）由 @linjonh 发起，均聚焦于建立官方微信群以促进中文开发者交流。  
虽然技术讨论热度不高（评论数均为0），但重复提交通常反映**真实社区需求未被满足**。此举旨在解决非英语开发者获取支持难、信息滞后等问题，体现出项目在**全球化社区运营**上的潜在短板。  
建议维护者尽快整合信息，避免重复Issue泛滥，并考虑设立统一社区入口（如Discord/Slack+微信双通道）。  
🔗 示例：https://github.com/qwibitai/nanoclaw/issues/1922

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 相关链接 |
|--------|--------|------|--------|
| ⚠️ 中 | 容器内 `/home/node` 目录权限导致Claude Code静默失败（映射UID无法写入 `.claude.json`） | ✅ 已修复（#1885） | https://github.com/qwibitai/nanoclaw/pull/1885 |
| ⚠️ 中 | 数值型环境变量（如 `CONTAINER_TIMEOUT`）未校验NaN/非正值，可能导致运行时异常 | ✅ 已修复（#1916） | https://github.com/qwibitai/nanoclaw/pull/1916 |
| ⚠️ 低 | 空容器输出时fallback parser未正确报错，返回undefined | ✅ 已修复（#1912） | https://github.com/qwibitai/nanoclaw/pull/1912 |

> 所有已知关键Bug均已通过PR修复并合并，无遗留高危问题。

---

## 6. 功能请求与路线图信号

- **#1921 [OPEN] feat: add /add-weixin skill — WeChat channel via iLink bot protocol**  
  🚀 提议集成微信官方iLink协议，实现通过扫码登录驱动NanoClaw，是**最具潜力的功能扩展**。若合并，将极大拓展国内用户场景（如企业微信、个人号自动化）。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1921

- **#1598 [OPEN] feat: add remote storage skill (rclone + systemd mounts)**  
  💾 支持通过rclone挂载远程存储（如S3、Google Drive），满足数据持久化与跨设备同步需求，符合“AI助手即服务”的长期愿景。  
  🔗 https://github.com/qwibitai/nanoclaw/pull/1598

> 📌 上述两项技能类PR均标记为“priority review requested”，极有可能纳入v2.1或后续版本。

---

## 7. 用户反馈摘要

当前Issues中**缺乏深度用户评论**，但可从PR和Issue内容反推痛点：

- **部署复杂性**：WSL/systemd问题（#1903/#1904）暴露Linux新手配置困难，一键脚本（#1908）正是对此的响应。
- **通道可靠性**：Telegram图像推送失败（#1923）反映多通道适配仍需打磨。
- **本地化支持缺失**：微信群请求密集出现，表明中文文档、社区支持严重不足。
- **命名一致性**：@Andy触发器未随ASSISTANT_NAME更新（#1913/#1917）显示配置灵活性有待加强。

> 用户核心诉求：**更简单的安装、更稳定的通道、更好的中文支持**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| PR | #1845 | v2: fix(db): normalize auto-generated timestamps to ISO 8601 | 2026-04-18 | 🟡 OPEN | 数据库时间格式标准化，影响日志一致性，建议v2发布前合并 |
| PR | #1921 | feat: add /add-weixin skill | 2026-04-22 | 🟡 OPEN | 高价值功能，需评估iLink协议合规性与维护成本 |
| PR | #1598 | feat: add remote storage skill | 2026-04-02 | 🟡 OPEN | 长期未审，可能需补充测试或文档 |
| Issue | #1920 / #1922 | 微信群重复请求 | 2026-04-22 | 🟡 OPEN | 需官方回应并引导至统一社区渠道，避免碎片化 |

> ⚠️ 建议维护者优先处理 #1845（基础数据一致性）和微信群整合问题，以提升项目专业形象。

---  
**报告生成时间：2026-04-23**  
**数据来源：GitHub Repository qwibitai/nanoclaw**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-23）

---

## 1. 今日速览

IronClaw 项目在 2026-04-23 继续保持高活跃度，24 小时内产生 **29 条 Issue 更新**（新开/活跃 25 条，关闭 4 条）和 **50 条 PR 更新**（待合并 39 条，已合并/关闭 11 条），显示出社区与核心团队协同推进的强劲节奏。尽管无新版本发布，但多个关键功能模块（如 engine-v2、工具发现、多租户通道控制平面）正通过大型 PR 快速迭代。值得注意的是，**engine-v2 架构升级**仍是当前核心主线，涉及提示工程、动作元数据、流式响应等关键能力。同时，QA 团队在 staging 环境集中报告了多个 P1/P2 级 Bug，反映出上线前测试强度加大。

---

## 2. 版本发布

**无新版本发布**。最近一次发布为 `v0.26.0`（2026-04-21），但今日发现其 Linux 安装器存在兼容性问题（见 Bug 部分）。

---

## 3. 项目进展

今日多个关键 PR 推进了 engine-v2 架构落地与系统稳定性提升：

- **[#2846](https://github.com/nearai/ironclaw/pull/2846)**：完成 **typed assistant content 的跨层 rollout**，统一 engine → bridge → web gateway 的内容模型，解决 #2813 中 assistant 工具调用文本扁平化问题，提升 LLM 工作流可观测性。
- **[#2841](https://github.com/nearai/ironclaw/pull/2841)**：启动 **多租户通道实例控制平面（Phase 1）**，引入 `channel_instances` 表与 dispatch-key 路由机制，为 v1/v2 引擎实现租户隔离，支撑 SaaS 化部署。
- **[#2866](https://github.com/nearai/ironclaw/pull/2866)**：为 engine-v2 添加 **核心内置工具的精选发现摘要**（如 `read_file`, `shell`），优化 LLM 提示引导，降低误用风险，响应 #2835 需求。
- **[#2867](https://github.com/nearai/ironclaw/pull/2867)**：修复 Web UI 侧边栏渲染逻辑，移除特殊 pinned assistant 行，统一对话列表展示，并增加回归测试覆盖。
- **[#2872](https://github.com/nearai/ironclaw/pull/2872)**：新增 **实时 token 流式传输能力**，通过 `OpenAiCompatStreamingProvider` 支持 OpenRouter/Groq 等后端，显著改善长响应用户体验。

> 整体来看，项目正向 engine-v2 全面可用迈出关键步伐，同时强化了多租户、流式交互与工具发现等生产级能力。

---

## 4. 社区热点

- **[#2767](https://github.com/nearai/ironclaw/issues/2767)**（Epic：分离 engine v2 能力背景与可调用工具 schema）  
  获 6 条评论，是今日讨论最活跃的议题。该 Epic 旨在解耦 engine-v2 中“能力声明”与“工具调用接口”，避免 LLM 混淆系统级能力与用户可用工具。此需求直接驱动了今日多个 PR（如 #2876、#2836），反映架构演进的核心痛点。

- **[#2834](https://github.com/nearai/ironclaw/issues/2834)**（Engine v2：添加紧凑工具动作卡片与发现引导提示）  
  作为 #2767 的补充，提出需增强 tool-use 提示的引导性。其分解出的子任务（#2835、#2836、#2837、#2838）均已转化为 PR 并部分合并，显示团队对“提示工程精细化”的高度重视。

- **[#2862 / #2861](https://github.com/nearai/ironclaw/issues/2862)**（微信社区群邀请）  
  中国开发者积极建立本地化交流渠道，反映项目在非英语社区的扩张趋势，也提示维护者需关注多语言支持与区域化协作。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **P1** | [#2857](https://github.com/nearai/ironclaw/issues/2857) | Web UI 侧边栏聊天历史列表消失 | 已有 fix PR [#2867](https://github.com/nearai/ironclaw/pull/2867) 合并 |
| **P1** | [#2583](https://github.com/nearai/ironclaw/issues/2583) | 例行任务创建失败，“5 次连续代码错误” | 仍在调查中，无 fix PR |
| **P1** | [#2818](https://github.com/nearai/ironclaw/issues/2818) | `v0.26.0` 安装器在 `x86_64-unknown-linux-gnu` 失败 | 影响用户安装，需紧急修复 |
| **P2** | [#2858](https://github.com/nearai/ironclaw/issues/2858) | Notion OAuth 成功但提示“无匹配待认证门” | 认证流程状态同步问题 |
| **P2** | [#2856](https://github.com/nearai/ironclaw/issues/2856) | Notion 集成需过度用户引导 | 代理自主性不足 |
| **P2** | [#2855](https://github.com/nearai/ironclaw/issues/2855) | Portfolio 工具安装因缺失构建产物失败 | 工具市场交付问题 |
| **P2** | [#2231](https://github.com/nearai/ironclaw/issues/2231) | 多聊天无法并行，响应阻塞排队 | 并发处理能力缺陷 |
| **P2** | [#2833](https://github.com/nearai/ironclaw/issues/2833) | 切换对话时响应内容交叉污染 | 会话隔离失效 |

> 注：多个 live canary 失败（#2832、#2829、#2823、#2824）表明 staging 环境存在 provider 兼容性问题，需关注 CI 稳定性。

---

## 6. 功能请求与路线图信号

- **Cost-based budgeting（基于成本的预算系统）**：[#2843](https://github.com/nearai/ironclaw/issues/2843) 提议用 USD 预算替代迭代/时间上限，并按 user → project → mission → thread 层级级联。该需求直指企业级资源管控，风险标记为 high，可能纳入 v0.27+ 路线图。
- **Harness testing unification（测试 harness 统一）**：[#2828](https://github.com/nearai/ironclaw/issues/2828) 呼吁整合 replay、E2E、live canary 等测试体系，反映质量保障架构升级需求，预计将推动 CI/CD 重构。
- **ExternalToolRegistrar plugin seam**：[#2871](https://github.com/nearai/ironclaw/pull/2871) 已提供下游 fork 注册自定义工具的扩展点，满足私有化部署场景，体现平台化设计思路。

---

## 7. 用户反馈摘要

- **痛点**：
  - Notion 集成体验差：OAuth 流程状态不一致（#2858）、需手动引导数据检索（#2856），暴露第三方集成成熟度不足。
  - 安装器兼容性问题（#2818）阻碍新用户入门。
  - 多对话并发阻塞（#2231）与响应交叉污染（#2833）严重影响多任务使用场景。
- **满意点**：
  - 社区赞赏 engine-v2 的架构清晰度提升（#2767 讨论）。
  - 微信社区群快速建立，反映用户对实时技术交流的强烈需求。
- **使用场景**：
  - 用户尝试创建自动化例行任务（如比特币价格监控，#2583）。
  - 企业用户关注 credential injection（#2168）与多租户隔离（#2841）等生产特性。

---

## 8. 待处理积压

- **[#2231](https://github.com/nearai/ironclaw/issues/2231)**（多聊天并行阻塞）：自 2026-04-10 报告，超 13 天未响应，属 P2 Bug，影响核心并发体验，建议优先排查 orchestrator 调度逻辑。
- **[#2583](https://github.com/nearai/ironclaw/issues/2583)**（例行任务创建失败）：P1 Bug，自 2026-04-17 报告，涉及 engine-v2 任务执行稳定性，需 core team 介入。
- **[#2719](https://github.com/nearai/ironclaw/issues/2719)**（迁移至 GitHub merge queue）：CI 流程优化提案，可缓解大批量 PR 审查难题，长期未推进。

> 建议维护者本周内对上述积压 Issue 进行 triage 并分配负责人。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 明确架构演进方向 + 快速响应关键 Bug，但需警惕 staging 环境稳定性与长期积压问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-04-23）**

---

### 1. 今日速览  
过去24小时内，LobsterAI 社区活跃度显著提升，共处理 **28条 Pull Requests**（其中19条已合并/关闭，9条待合并），显示出核心团队高效的代码集成节奏。Issue 新增仅1条，但暴露出关键功能异常。尽管无新版本发布，项目在跨平台兼容性、IM集成扩展和系统稳定性方面取得实质性进展，整体开发健康度良好。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
今日合并/关闭的 PR 聚焦于**多平台支持增强**与**核心服务稳定性优化**，主要进展包括：

- **IM 多机器人支持扩展**：[#1794](https://github.com/netease-youdao/LobsterAI/pull/1794) 和 [#1792](https://github.com/netease-youdao/LobsterAI/pull/1792) 分别实现对 Discord 和 Telegram 的多机器人配置支持，提升企业级 IM 场景下的灵活性与隔离性。
- **模型配置兼容性增强**：[#1787](https://github.com/netease-youdao/LobsterAI/pull/1787) 新增对 LM Studio 模型的支持，扩展了本地推理能力接入范围。
- **Windows 安装与更新体验优化**：[#1791](https://github.com/netease-youdao/LobsterAI/pull/1791) 增强 NSIS 安装器日志可观测性；[#1786](https://github.com/netease-youdao/LobsterAI/pull/1786) 精准限定 Defender 排除目录，解决腾讯电脑管家误报问题；[#1793](https://github.com/netease-youdao/LobsterAI/pull/1793) 移除自动弹窗更新提示，改为徽章通知，降低用户干扰。
- **网关与配置同步修复**：[#1795](https://github.com/netease-youdao/LobsterAI/pull/1795) 修复模型图像支持配置热更新失效问题，避免图像请求静默丢弃；[#1789](https://github.com/netease-youdao/LobsterAI/pull/1789) 解决企业版配置同步时的合并冲突。

> 整体来看，项目在**企业部署稳定性**与**多端协同能力**上迈出关键步伐。

---

### 4. 社区热点  
**唯一新开 Issue [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)** 引发关注：  
> *“Write/Edit tools always fail for the last few days, update the app, still the same.”*  
用户反馈“写入/编辑工具”持续失败，即使更新应用仍未解决。该问题直接影响核心协作功能，虽仅1条评论，但涉及高频使用场景，需优先排查是否为近期合并 PR（如网关配置变更）引入的回归问题。

---

### 5. Bug 与稳定性  
| 问题描述 | 严重程度 | 是否有 Fix PR |
|--------|--------|-------------|
| Write/Edit 工具执行持续失败（[#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)） | 高（影响核心功能） | ❌ 暂无 |
| Windows 开机自启后进程静默退出（[#696](https://github.com/netease-youdao/LobsterAI/pull/696)，已提交修复） | 中（特定场景崩溃） | ✅ 有（待合并） |
| macOS 内置更新导致系统冻结（[#656](https://github.com/netease-youdao/LobsterAI/pull/656)，已提交修复） | 中（用户体验阻断） | ✅ 有（待合并） |

> 当前最紧急问题是 **#1796**，建议维护者结合近期网关与技能服务变更（如 [#1788](https://github.com/netease-youdao/LobsterAI/pull/1788) CORS 代理调整）进行回归测试。

---

### 6. 功能请求与路线图信号  
从长期 PR 可见以下潜在路线图方向：

- **会话交互增强**：[#697](https://github.com/netease-youdao/LoborkAI/pull/697) 提出消息回滚与编辑重生成功能，反映用户对对话可控性的高阶需求。
- **本地执行能力扩展**：[#658](https://github.com/netease-youdao/LobsterAI/pull/658) 支持 `!<command>` 直接执行 shell 命令，预示向“AI + 本地自动化”融合演进。
- **跨平台快捷键标准化**：[#679](https://github.com/netease-youdao/LobsterAI/pull/679) 推动快捷键设置支持平台差异化（⌘ vs Ctrl），提升 macOS/Linux 用户体验。
- **企业文档集成**：[#649](https://github.com/netease-youdao/LobsterAI/pull/649) 请求添加 POPO 配置指南链接，体现对内网生态整合的需求。

> 上述功能若合并，将显著提升 LobsterAI 在**开发者工具链**与**企业办公场景**中的竞争力。

---

### 7. 用户反馈摘要  
- **痛点**：Write/Edit 工具失效严重影响日常使用，用户已尝试更新但无效，表明问题可能非本地环境导致，而是服务端或配置同步逻辑缺陷。
- **满意点**：近期 Windows 安装体验优化（如 Defender 误报修复）获社区认可；多机器人支持满足企业多账号管理需求。
- **使用场景**：用户依赖 LobsterAI 进行实时协作编辑与本地命令执行，对稳定性和响应速度敏感度高。

---

### 8. 待处理积压  
以下长期未合并 PR 需维护者重点关注：

- **[#641](https://github.com/netease-youdao/LobsterAI/pull/641)**：双击重命名会话标题（基础 UX 改进，实现简单但价值高）
- **[#656](https://github.com/netease-youdao/LobsterAI/pull/656)**：修复 macOS 更新冻结（影响用户升级意愿）
- **[#696](https://github.com/netease-youdao/LobsterAI/pull/696)**：修复 Windows 开机自启退出（企业部署关键问题）
- **[#697](https://github.com/netease-youdao/LobsterAI/pull/697)**：消息回滚与编辑重生成（高价值功能，但复杂度较高）

> 建议优先处理 **#656** 与 **#696**，二者均涉及系统级稳定性，且已有成熟解决方案。

---  
*数据来源：LobsterAI GitHub 仓库（截至 2026-04-23 00:00 UTC）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-23）

---

## 1. 今日速览

Moltis 项目在 2026-04-23 继续保持高活跃度，24 小时内共处理 **25 条 PR 更新**（15 条待合并，10 条已合并/关闭）和 **6 条 Issues 更新**（1 条新开，5 条已关闭），并发布了一个新版本。开发重点集中在 **配置系统修复、跨平台兼容性优化、文档自动化更新** 以及 **新功能集成**（如 Signal 通道、Home Assistant 集成、MCP 服务器管理）。整体项目健康度良好，响应迅速，Bug 修复与功能迭代并行推进。

---

## 2. 版本发布

**新版本：`20260422.01`**（发布于 2026-04-22）  
该版本为内部构建版本，未在 Release 描述中提供详细变更日志。结合当日合并的 PR 推断，主要包含以下关键修复与改进：

- ✅ 修复 WSL2 下 Docker sandbox 因缺失 `/sys/class/dmi` 导致的启动失败（#835）
- ✅ 修复 Fireworks + Kimi K2.5 Turbo 集成中的 400 错误（#832）
- ✅ 修复非严格模式下 OpenAI 兼容工具 schema 的 union 类型解析问题（#833）
- ✅ 修复配置变量 `${VAR}` 占位符无法解析 `[env]` 段和数据库环境变量的问题（#834）
- ✅ 修复 PWA 中推送消息 CTA 跳转 404 的问题（#773）
- ✅ 修复 `RUST_LOG=debug` 下日志洪水导致磁盘写满的问题（#823）

> ⚠️ **迁移注意事项**：无破坏性变更，但建议升级后清理本地日志文件并验证 WSL2 用户环境是否正常。

[查看 Release](https://github.com/moltis-org/moltis/releases/tag/20260422.01)

---

## 3. 项目进展

今日共 **10 个 PR 被合并或关闭**，显著推进了多个核心模块：

- **配置系统增强**：通过 #834 实现两阶段配置加载，支持 `${VAR}` 动态解析，提升部署灵活性。
- **跨平台稳定性**：#835 针对 WSL2 特殊环境跳过无效 sysfs 挂载，避免 Docker sandbox 崩溃。
- **LLM 提供商兼容性**：#832、#833、#836 三联动修复 Fireworks/Kimi/OpenRouter/Gemini 等第三方模型的工具调用兼容性问题，保障多模型生态稳定性。
- **UI/UX 改进**：#839 添加 vault-sealed 状态横幅，解决用户重启后“空白界面”困惑；#838 完成项目选择下拉框前端绑定，消除“僵尸代码”。
- **文档自动化**：#783、#800、#801 完成三批共 44 份文档的自动审计与修复，显著降低文档腐化率。

整体项目在 **稳定性、可维护性、用户体验** 三个维度均取得实质性进展。

---

## 4. 社区热点

**最热 Issue：[#824 - 不要自动滚动到聊天末尾当用户已向上滚动](https://github.com/moltis-org/moltis/issues/824)**  
- 类型：功能增强（enhancement）
- 作者：@vvuk | 评论数：1 | 👍：0
- 分析：用户希望在浏览历史消息时，新消息到达不应强制将视图拉回底部，避免打断阅读流程。此需求反映 **长会话场景下的 UX 精细化诉求**，是主流聊天应用（如 Slack、Discord）的标准行为。虽暂无 PR，但高优先级 UI 团队可能在下个迭代响应。

**关联 PR 讨论集中区**：  
尽管多数 PR 无评论，但 #840（MCP 服务器管理技能）和 #841（Signal 通道）涉及复杂架构扩展，预计将在后续 review 中引发深入讨论。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已修复 |
|--------|------|------|----------|
| 🔴 高 | [#810](https://github.com/moltis-org/moltis/issues/810) | Fireworks + Kimi K2.5 Turbo 返回 400 错误 | ✅ 已修复（#832） |
| 🔴 高 | [#823](https://github.com/moltis-org/moltis/issues/823) | debug 日志洪水写满磁盘 | ✅ 已修复（隐含于 release） |
| 🟠 中 | [#828](https://github.com/moltis-org/moltis/issues/828) | WSL2 下 Docker sandbox 因 `/sys/class/dmi` 缺失失败 | ✅ 已修复（#835） |
| 🟠 中 | [#770](https://github.com/moltis-org/moltis/issues/770) | 部分环境变量无法解析 | ✅ 已修复（#834） |
| 🟡 低 | [#773](https://github.com/moltis-org/moltis/issues/773) | PWA 推送 CTA 跳转 404 | ✅ 已修复 |

> 所有报告 Bug 均在 24–72 小时内闭环，体现高效响应能力。

---

## 6. 功能请求与路线图信号

以下新功能已通过 PR 进入开发阶段，预示未来版本方向：

- **🏠 Home Assistant 原生集成**（#827）：提供 REST/WebSocket 客户端 + AgentTool，支持 LLM 驱动智能家居控制，瞄准 IoT 自动化场景。
- **📡 Signal 消息通道**（#841）：基于 `signal-cli` 实现端到端加密通信接入，扩展多平台消息能力。
- **🤖 子代理预设系统**（#844）：内置 `research`、`coder`、`qa` 等角色化子代理，降低新手上手门槛。
- **⚙️ 项目级代码索引开关**（#837）：允许按项目禁用语义搜索，满足隐私/性能敏感场景。
- **🔍 MCP 服务器编程管理**（#840）：通过 RPC 接口动态管理 MCP 服务，迈向“AI 操作系统”愿景。

> 这些功能表明 Moltis 正从“通用 AI 助手”向 **可组合、可嵌入、多模态的智能代理平台** 演进。

---

## 7. 用户反馈摘要

从 Issues 提炼关键用户声音：

- **痛点**：
  - WSL2 用户遭遇 Docker sandbox 启动失败（#828），影响开发环境一致性。
  - 调试日志失控导致磁盘爆满（#823），暴露日志分级策略缺陷。
  - 第三方模型（Kimi/Fireworks）集成不稳定，工具调用频繁报错（#810）。
- **满意点**：
  - 快速修复 PWA 跳转问题（#773），体现对渐进式 Web 应用的重视。
  - 配置系统支持 `${VAR}` 动态解析（#834），提升 DevOps 友好度。
- **使用场景**：
  - 开发者使用 Moltis 对接本地 LLM 与家庭自动化系统（#827 暗示）。
  - 企业用户关注审计与性能监控（#470 工具执行见证功能持续开发中）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

- **#470 [feat(witness)] 工具执行见证记录 + zkperf-service 集成**（创建于 2026-03-23，已 open 31 天）  
  → 涉及性能监控与审计核心能力，但无近期更新，需确认优先级。
  
- **#422 [fix(macos)] 配置发布签名与公证**（创建于 2026-03-12，已 open 42 天）  
  → 被 #842 替代但未关闭，存在重复工作风险，建议归档旧 PR。

- **#824 [enhancement] 聊天自动滚动行为优化**（新开，需 UI 团队评估排期）

> 建议：对超过 30 天无进展的 PR 进行 triage，明确“搁置”或“重启”状态。

--- 

**总结**：Moltis 在 2026-04-23 展现出强大的工程执行力与社区响应力，Bug 修复高效，功能路线图清晰。下一步需关注 **长期技术债清理** 与 **用户体验细节打磨**，以巩固其在开源 AI 助手领域的领先地位。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-23）

---

## 1. 今日速览

CoPaw 项目在 2026-04-23 继续保持高活跃度，24 小时内共处理 **40 条 Issues**（新开/活跃 21，关闭 19）和 **50 条 PR**（待合并 23，已合并/关闭 27），社区参与度显著。项目发布新版本 **v1.1.3**，引入 Agent 系统备份与恢复功能，提升数据可迁移性。核心问题集中在多模态支持、渠道集成稳定性及前端体验优化，反映出用户对生产环境部署和跨渠道一致性的高度关注。

---

## 2. 版本发布

### 🔖 v1.1.3 正式发布  
**核心更新：**  
- ✨ **Agent System: Backup & Restore**  
  新增 scoped 快照机制，支持按 agent 粒度导出/导入 agents、skills、memory 和 sessions 数据为 zip 文件，便于迁移与灾备（[#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534), [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655)）。  

**影响范围：**  
- 后端配置与数据持久化层变更，但保持向前兼容。  
- 用户可通过 CLI 或控制台 UI 触发备份操作，无需手动干预数据库。  

> ⚠️ 注意：Docker 镜像构建流程因缺失 `git` 命令可能失败（见 [#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695)），建议临时修改 `deploy/Dockerfile` 添加 `RUN apt-get update && apt-get install -y git`。

---

## 3. 项目进展

今日共 **27 个 PR 被合并或关闭**，重点推进方向包括：

- **渠道稳定性增强**：修复微信 iLink 通道空响应误判问题（[#3685](https://github.com/agentscope-ai/QwenPaw/pull/3685)）、延长 QR 码轮询超时至 60s（[#3700](https://github.com/agentscope-ai/QwenPaw/pull/3700)），显著提升微信渠道可靠性。  
- **安全策略精细化**：为 `ShellEvasionGuardian` 添加 7 项独立开关配置（[#3694](https://github.com/agentscope-ai/QwenPaw/pull/3694)），满足不同部署场景的安全需求。  
- **前端体验优化**：本地打包图标资源以支持离线/LAN 部署（[#3388](https://github.com/agentscope-ai/QwenPaw/pull/3388)），解决局域网环境下图标丢失问题。  
- **工具链改进**：修复 Windows 下含非 ASCII 字符路径的 `send_file_to_user` 崩溃问题（[#3625](https://github.com/agentscope-ai/QwenPaw/pull/3625)）。

项目整体在 **多端一致性、部署鲁棒性、安全可控性** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues/PRs

| 议题 | 类型 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#3693](https://github.com/agentscope-ai/QwenPaw/issues/3693) | Bug | 13 | Anthropic 协议对接火山引擎模型时，对非流式 Message 执行 `async for` 导致类型错误，飞书渠道无法输出回复 |
| [#3637](https://github.com/agentscope-ai/QwenPaw/issues/3637) | Question | 6 | PyPI 版本（v1.0.2）与 Release 页面（v1.1.2）不一致，用户困惑升级路径 |
| [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | Feature | 6 | 请求为“梦境记忆优化”功能添加日志输出，模拟人类回忆梦境机制 |

**分析：**  
- **#3693** 暴露了多模型协议适配层的健壮性问题，影响主流云厂商集成，需优先修复。  
- **#3637** 反映出版本发布流程存在断层，PyPI 未同步最新 release，损害用户信任。  
- **#3663** 代表高级用户对“可解释性 AI”的需求，可能成为 v1.2 记忆系统的亮点功能。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按优先级排序）

1. **[#3693] Anthropic 协议类型错误导致对话崩溃**  
   - **严重性：高** | 影响飞书等关键渠道 | **无 fix PR**  
   - 需紧急修复流式/非流式消息处理逻辑。

2. **[#3640] MCP Client TaskGroup 异常导致 Agent 假死**  
   - **严重性：高** | 无响应但不报错，需重启恢复 | **无 fix PR**  
   - 影响生产环境可用性，疑似异步任务泄漏。

3. **[#3707] MiniMax M2.7 多模态支持硬编码为 False**  
   - **严重性：中** | 实际 API 支持图片，但前端屏蔽 | **已有修复建议**  
   - 只需修改 `provider_manager.py` 中模型配置即可启用。

4. **[#3695] Docker 镜像构建因缺失 git 失败**  
   - **严重性：中** | 影响 CI/CD 流程 | **已有 PR [#3697] 提供修复**

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能（已有对应 PR 或强烈社区呼声）

| 功能 | 状态 | 关联 Issue/PR | 纳入可能性 |
|------|------|---------------|-----------|
| **Tool Guard 可视化审批按钮** | PR 待审 | [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257), [#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652) | ⭐⭐⭐⭐☆（用户体验刚需） |
| **梦境日志输出（Dream Log）** | Issue 热议 | [#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663) | ⭐⭐⭐☆☆（差异化特性） |
| **语义技能路由（Semantic Skill Routing）** | PR 讨论中 | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | ⭐⭐⭐⭐☆（解决技能爆炸问题） |
| **LLM 路由 UI** | PR 开发中 | [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | ⭐⭐⭐☆☆（依赖后端路由完成） |

> 预计 v1.2 将聚焦 **安全交互体验** 与 **智能技能管理**，上述前两项极可能入选。

---

## 7. 用户反馈摘要

### 💬 真实用户声音

- **痛点**：  
  - “钉钉艾特是纯文字，不生效”（[#3690](https://github.com/agentscope-ai/QwenPaw/issues/3690)）→ 渠道协议实现不完整。  
  - “打包 exe 后 506MB，太慢了”（[#3682](https://github.com/agentscope-ai/QwenPaw/issues/3682)）→ 桌面端交付体验差。  
  - “Windows 安装报毒”（[#3701](https://github.com/agentscope-ai/QwenPaw/issues/3701)）→ 缺乏代码签名，阻碍企业部署。

- **满意点**：  
  - 备份/恢复功能获赞“终于可以迁移 agent 配置了”。  
  - 微信 QR 码超时修复后，“扫码登录不再频繁中断”。

---

## 8. 待处理积压

### ⏳ 长期未响应重要议题

| 议题 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|----------|------|------|
| [#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338) | Bug | 2026-04-13 | OPEN | 论调次数达上限报错，疑似逻辑缺陷，超 10 天未响应 |
| [#3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) | Bug | 2026-04-18 | OPEN | “经常中途中断”，无具体日志，需引导用户提供复现步骤 |
| [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642) | Bug | 2026-04-21 | OPEN | MCP 启用后控制台卡死，有详细日志，应优先排查 `unified_queue_manager` |

> 建议维护者本周内对上述议题进行 triage，避免技术债累积。

---  
**报告生成时间：2026-04-23**  
数据来源：GitHub CoPaw/QwenPaw 仓库公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-04-23）**

---

### 1. 今日速览  
ZeptoClaw 在 2026-04-23 继续保持高活跃度，社区与核心团队协同推进多项关键改进。过去24小时内共产生 **5 条新 Issue** 和 **18 条 PR 更新**，其中 **9 个 PR 被合并或关闭**，涵盖安全增强、配置系统重构、审计机制引入及依赖升级。尽管无新版本发布，但项目在稳定性、安全性和可维护性方面取得显著进展，CI/CD 流程正积极修复因 Rust 工具链更新引入的 lint 问题。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日合并/关闭的 PR 推动多个核心方向：

- **安全能力强化**：  
  - [#527](https://github.com/qhkm/zeptoclaw/pull/527) 引入配置时 SSRF 端点验证，阻止向私有 IP 或非 HTTP(S) 地址发起请求，提升运行时安全性。  
  - [#526](https://github.com/qhkm/zeptoclaw/pull/526) 为技能下载添加 SHA256 校验支持，防止中间人攻击或篡改包分发。  
  - [#528](https://github.com/qhkm/zeptoclaw/pull/528) 实现内存哈希链审计追踪，为工具调用提供不可篡改的操作日志，增强可观测性与合规性。

- **配置系统演进**：  
  - [#523](https://github.com/qhkm/zeptoclaw/pull/523) 修复 Telegram 配置向后兼容性问题，确保旧配置格式仍可正常加载，降低用户迁移成本。

- **基础设施维护**：  
  - [#529](https://github.com/qhkm/zeptoclaw/pull/529) 自动修复因 Rust 1.95 引入的新 Clippy lint 错误（`collapsible_match` 与 `unnecessary_sort_by`），恢复 CI 绿色状态。  
  - 多个依赖项（如 `sha2`、`uuid`、`libc`、`vite` 等）完成安全/功能更新，降低供应链风险。

> 整体来看，项目在“安全默认化”和“配置健壮性”两大战略方向上迈出关键步伐。

---

### 4. 社区热点  
今日最活跃的议题集中于 **配置系统演进** 与 **测试稳定性**：

- **[#530 feat(config): add config versioning + migration](https://github.com/qhkm/zeptoclaw/issues/530)**（P1-critical）  
  提出为配置文件引入版本控制与自动迁移机制，避免未来 schema 变更导致用户配置失效。该 Issue 被标记为“关键”，反映出项目进入规模化前对长期兼容性的高度重视。

- **[#533 chore(tests): add hermetic test wrapper script](https://github.com/qhkm/zeptoclaw/issues/533)**（P2-high）  
  针对已知 flaky 测试 `test_load_nonexistent`，提议引入隔离式测试包装器，解决环境变量泄漏问题。此问题已存在数月，影响 CI 可靠性，社区期待根治方案。

两议题均无评论但获高优先级标签，表明维护者正主动识别技术债并规划系统性解决方案。

---

### 5. Bug 与稳定性  
| 严重程度 | Issue | 状态 | 说明 |
|--------|------|------|------|
| **高** | [#534 bug(ci): fix PR CI failures from new clippy lints and rustls-webpki advisories](https://github.com/qhkm/zeptoclaw/issues/534) | 🟡 已有部分修复 | CI 因 Rust 1.95 新 lint 及 `rustls-webpki` 安全建议失败；Clippy 部分已由 #529 修复，但安全依赖项仍需处理 |
| **中** | 环境变量泄漏导致测试 flaky（见 #533） | 🔴 未修复 | `ZEPTOCLAW_AGENTS_DEFAULTS_MODEL` 跨测试污染，影响 CI 稳定性 |

> 注：#534 虽为新报，但实际影响已持续数日，需尽快完成 `rustls-webpki` 依赖升级。

---

### 6. 功能请求与路线图信号  
以下功能请求具备高采纳可能性，已有对应 PR 或明确实施路径：

- **配置隔离与多实例支持**：  
  [#531](https://github.com/qhkm/zeptoclaw/issues/531) 请求 `ZEPTOCLAW_HOME` 环境变量支持，便于测试、容器化与多 profile 开发。该需求与 Hermes Agent 设计对齐，实施成本低，极可能纳入下一版本。

- **Shell 命令安全增强**：  
  [#532](https://github.com/qhkm/zeptoclaw/issues/532) 提议扩展 shell 黑名单以覆盖 Hermes 的 33+ 危险模式。作为“低成本高收益”安全改进，预计将快速落地。

- **配置版本迁移**：  
  [#530](https://github.com/qhkm/zeptoclaw/issues/530) 虽无直接 PR，但其 P1 优先级及“300+ stars + 融资前”背景，表明团队已将其列为发布前必须完成项。

---

### 7. 用户反馈摘要  
当前 Issues 中未出现大量用户评论，但可从 Issue 内容反推核心诉求：

- **配置兼容性焦虑**：用户依赖旧版 Telegram 配置格式（#523），担心升级断裂，团队通过隐式启用逻辑缓解。
- **部署灵活性需求**：开发者希望在单机运行多实例（prod/staging）或在容器中挂载自定义 home 目录（#531），反映项目正从原型向生产工具演进。
- **安全信任构建**：技能下载校验（#526）、SSRF 防护（#527）等 PR 显示用户对供应链安全与运行时隔离高度关注。

整体反馈指向：**用户期望 ZeptoClaw 在保持轻量的同时，提供企业级的安全与运维能力**。

---

### 8. 待处理积压  
以下重要事项需维护者重点关注：

- **[#389 Utility/lib crate 架构评估](https://github.com/qhkm/zeptoclaw/issues/389)**  
  虽已有评估文档（#525），但长期未决。随着功能膨胀，是否拆分公共库将影响未来模块化与复用性，建议明确决策时间表。

- **CI 安全依赖修复（#534 后半部分）**  
  `rustls-webpki` 相关安全建议尚未处理，存在潜在漏洞风险，应优先于非关键功能开发。

- **Flaky 测试根治（#533）**  
  环境泄漏问题虽小，但持续损害开发者信心，建议在下一个 sprint 中分配资源解决。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
*高活跃度 + 主动安全投入 + 清晰路线图信号，仅需加速技术债清理以迎接规模化阶段。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
**日期：2026年4月23日**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低，无新增或更新的 Issues 与 Pull Requests，社区互动趋于平稳。然而，项目在发布节奏上表现积极，连续发布两个新版本（v1.8.6 与 v1.8.5），表明维护团队正专注于版本迭代与用户体验优化。尽管开发活动表面平静，但高频的版本发布暗示底层可能存在紧急修复或兼容性调整。项目当前处于“静默维护”状态，适合关注稳定性与跨平台适配的用户使用。

---

### 2. 版本发布  

#### 🔹 v1.8.6（RivonClaw v1.8.6）  
- **发布时间**：2026-04-22（UTC）  
- **重点说明**：  
  本次发布主要针对 **macOS 平台的安全策略兼容性问题**。由于应用未经过 Apple 官方签名，macOS Gatekeeper 会误判为“已损坏”并阻止运行。  
  - **解决方案**：用户需通过终端执行 `xattr -cr /path/to/RivonClaw.app` 清除隔离属性，或手动在“系统设置 > 隐私与安全性”中允许运行。  
  - **无功能变更**：本次更新未引入新功能或 API 变更，属于纯兼容性修复版本。  
  - **迁移建议**：所有 macOS 用户建议升级至 v1.8.6 以避免启动失败问题。  

🔗 [v1.8.6 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.6)

#### 🔹 v1.8.5（RivonClaw v1.8.5）  
- **发布时间**：2026-04-22（UTC，早于 v1.8.6）  
- **说明**：内容与 v1.8.6 高度一致，疑似为构建流程中的中间版本或标签误标。建议用户直接使用 v1.8.6。  
🔗 [v1.8.5 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.5)

> ⚠️ **注意**：连续发布两个语义版本可能反映 CI/CD 流程存在版本号管理问题，建议维护者审查发布脚本以避免混淆。

---

### 3. 项目进展  
过去24小时无 Pull Request 合并或关闭，无功能开发或重构进展。结合版本发布内容判断，当前开发重点集中于 **跨平台兼容性维护**，而非新功能推进。项目整体处于“维护模式”，技术债务清理与用户体验优化为主要方向。

---

### 4. 社区热点  
无新增或活跃 Issues / PRs，社区讨论量为零。过去24小时无用户提问、反馈或功能建议，表明当前版本稳定性较高，或用户群体规模有限。建议项目方通过文档引导或示例场景提升社区参与度。

---

### 5. Bug 与稳定性  
- **已知问题**：macOS 用户普遍遭遇“应用已损坏”误报（非真实损坏），由 Gatekeeper 安全机制触发。  
  - **严重程度**：中（影响启动，但可绕过）  
  - **状态**：已在 v1.8.6 中提供明确解决方案，**无 open 相关 Issue**，说明问题已被识别并响应。  
  - **建议**：长期需推进代码签名（Code Signing）以根本解决，否则将持续影响新用户首次体验。

---

### 6. 功能请求与路线图信号  
无新功能请求提出。结合近期发布行为，可推测下一阶段路线图可能包括：  
- ✅ **macOS 应用签名集成**（高优先级，解决启动障碍）  
- 🔄 **Windows/Linux 安装包优化**（当前仅见 macOS 说明，其他平台文档缺失）  
- 📦 **自动化构建与版本管理改进**（避免 v1.8.5/v1.8.6 连续发布混淆）

---

### 7. 用户反馈摘要  
虽无直接 Issue 评论，但从 Release 说明中可推断：  
- **痛点**：macOS 用户因系统安全策略无法直接运行应用，导致“安装即失败”体验。  
- **满意点**：维护者快速响应并提供清晰终端命令解决方案，体现良好的支持态度。  
- **改进建议**：用户期望“开箱即用”，无需手动执行命令即可运行，凸显对代码签名的迫切需求。

---

### 8. 待处理积压  
经核查，当前无长期未响应的 Issues 或 PRs。项目 Issue 与 PR 数量均为 0，积压风险极低。但需注意：  
- **潜在技术债**：缺乏自动化测试、CI/CD 日志不透明、多平台构建流程未文档化。  
- **建议行动**：维护者可考虑添加 `good first issue` 标签吸引贡献者，或发布路线图文档提升透明度。

---

**总结**：EasyClaw 今日以“静默维护”姿态推进，通过快速发布解决 macOS 兼容性问题，展现响应能力。虽无社区互动，但版本迭代积极，项目健康度良好。下一步建议聚焦代码签名与多平台支持，以提升用户首次体验成功率。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*