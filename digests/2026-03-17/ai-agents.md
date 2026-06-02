# OpenClaw 生态日报 2026-03-17

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-17 01:00 UTC

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

# OpenClaw 项目动态日报（2026-03-17）

---

## 1. 今日速览

OpenClaw 社区在2026年3月16日至17日期间保持高度活跃，24小时内共处理 **500条 Issues**（新开/活跃453条，关闭47条）和 **500条 Pull Requests**（待合并388条，已合并/关闭112条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但多个关键功能与安全修复正在推进中，包括 Slack 原生审批按钮、Feishu 文档所有权转移、Fireworks AI 集成等。回归性 Bug 报告显著增加，主要集中在网关连接、WhatsApp 消息发送失败及上下文显示异常等问题，反映出近期版本迭代带来的稳定性挑战。

---

## 2. 版本发布

**无新版本发布**。最新可用版本仍为 `2026.3.13` 及之前构建，团队正集中修复该版本引入的多项回归问题。

---

## 3. 项目进展

今日有 **112个 PR 被合并或关闭**，重点进展包括：

- **安全加固**：[#48590](https://github.com/openclaw/openclaw/pull/48590) 实现“渐进式权限模式”第一阶段，防止 `exec` 工具中“始终允许”导致的权限提升漏洞；[#48586](https://github.com/openclaw/openclaw/pull/48586) 对 macOS 应用实施精确参数匹配的 exec 白名单机制。
- **功能增强**：
  - [#48567](https://github.com/openclaw/openclaw/pull/48567) 为 Slack 添加基于 Block Kit 的 exec 审批按钮，统一跨频道交互体验；
  - [#48138](https://github.com/openclaw/openclaw/pull/48138) 扩展 Feishu 文档工具，支持通过 API 转移文档所有权；
  - [#48581](https://github.com/openclaw/openclaw/pull/48581) 新增 Fireworks AI 作为内置提供商，集成26个主流开源模型。
- **UI/UX 改进**：[#48598](https://github.com/openclaw/openclaw/pull/48598) 完成 Mission Control MVP，提供实时适配器状态、时间线与审计追踪；[#48330](https://github.com/openclaw/openclaw/pull/48330) 在 Web UI 中支持并行线程创建。
- **稳定性修复**：[#48593](https://github.com/openclaw/openclaw/pull/48593) 修复 Gemini 模型 `<final>` 标签泄漏问题；[#48596](https://github.com/openclaw/openclaw/pull/48596) 修正会话启动时模型名称重复前缀显示错误。

整体项目正向多平台支持、安全治理与用户体验优化方向稳步迈进。

---

## 4. 社区热点

以下 Issues 引发高度关注：

- **[#26534](https://github.com/openclaw/openclaw/issues/26534)**（72评论，👍26）：请求将钉钉（DingTalk）设为首次安装时的可选通道。尽管底层已实现支持（#10347），但未出现在引导流程中，影响用户 onboarding 体验。
- **[#75](https://github.com/openclaw/openclaw/issues/75)**（39评论，👍62）：长期悬而未决的 Linux/Windows 桌面端应用缺失问题，用户强烈呼吁补齐与 macOS 对等的功能支持。
- **[#28744](https://github.com/openclaw/openclaw/issues/28744)**（18评论）：中文用户反馈 Agent 无法识别飞书等平台发送的图片内容，期望实现视觉能力集成（如 MiniMax-Vision），凸显多模态支持需求迫切。
- **[#48205](https://github.com/openclaw/openclaw/issues/48205)**（18评论）：网关平均每50分钟自动重启（reason=none），属严重稳定性问题，影响生产环境部署。

这些议题反映用户对 **跨平台一致性、视觉理解能力、部署稳定性** 的核心诉求。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | [#48205](https://github.com/openclaw/openclaw/issues/48205) | 网关周期性崩溃重启（~50分钟） | ❌ 无 |
| 🔴 高 | [#45222](https://github.com/openclaw/openclaw/issues/45222) | 本地网关 WebSocket 握手间歇性失败（loopback） | ❌ 无 |
| 🔴 高 | [#48109](https://github.com/openclaw/openclaw/issues/48109) | WhatsApp `message` 工具报“No active listener”但自动回复正常 | ❌ 无 |
| 🟠 中 | [#48206](https://github.com/openclaw/openclaw/issues/48206) | 状态显示 Context: 0/200k 但实际有约97k tokens | ✅ [#48190](https://github.com/openclaw/openclaw/pull/48190) |
| 🟠 中 | [#45311](https://github.com/openclaw/openclaw/issues/45311) | Slack socket mode 连接成功但收不到事件（v2026.3.12 回归） | ❌ 无 |
| 🟡 低 | [#47940](https://github.com/openclaw/openclaw/issues/47940) | 心跳间隔实际为配置值2倍（交替发送/ok-token） | ❌ 无 |

> 注：多个回归问题集中于 `2026.3.12–2026.3.13` 版本，建议优先回滚或热修。

---

## 6. 功能请求与路线图信号

结合 PR 进展，以下功能有望纳入下一版本：

- **MCP 客户端原生支持** ([#29053](https://github.com/openclaw/openclaw/issues/29053))：社区呼声高（👍6），已有初步讨论，可能作为插件架构扩展方向。
- **Agent 视觉能力** ([#28744](https://github.com/openclaw/openclaw/issues/28744))：中文生态强烈需求，需协调飞书/钉钉等平台媒体处理逻辑。
- **Linux/Windows 桌面应用** ([#75](https://github.com/openclaw/openclaw/issues/75))：虽无近期 PR，但长期标为 `help wanted`，若社区贡献者可推动将加速落地。
- **Gatefile 集成指南** ([#48582](https://github.com/openclaw/openclaw/pull/48582))：已提交文档 PR，预示官方将推广该安全边界方案。

---

## 7. 用户反馈摘要

- **痛点**：
  - WhatsApp 通道状态显示“已连接”但工具调用失败，造成自动化流程中断；
  - 多账户配置下（如 LINE、WhatsApp），默认账户解析逻辑不一致；
  - 上下文 token 计数 UI 显示错误，影响长对话管理信心。
- **满意点**：
  - Slack/Discord/Telegram 的 exec 审批按钮提升操作安全性；
  - Feishu 文档工具持续增强（如所有权转移）获企业用户认可；
  - Mission Control 提供系统级可观测性，运维体验改善明显。
- **典型场景**：
  > “我们在 CentOS 上部署本地 Qwen 模型，但遇到 422 参数错误” —— 反映私有化部署适配仍需优化。

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先关注：

- **[#75](https://github.com/openclaw/openclaw/issues/75)**（2026-01-01 创建，39评论）：Linux/Windows 桌面应用缺失，标有 `help wanted` 但无 assignee。
- **[#10841](https://github.com/openclaw/openclaw/issues/10841)**（2026-02-07 创建，12评论）：提醒功能因 Agent 不知当前时间而设错时间，影响核心调度能力。
- **[#8983](https://github.com/openclaw/openclaw/issues/8983)**（2026-02-04 创建，12评论）：OpenRouter API Key 配置界面跳转异常，阻碍用户完成设置。
- **[#29348](https://github.com/openclaw/openclaw/issues/29348)**（2026-02-28 创建，10评论）：`google-antigravity-auth` 插件被移除后无迁移指南，导致旧配置失效。

> 建议：对超过 30 天未响应的高赞（👍>5）Issue 分配负责人或标记 `needs-info`。

--- 

**报告生成时间**：2026-03-17 UTC  
**数据来源**：OpenClaw GitHub Repository (github.com/openclaw/openclaw)

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-03-17）

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **“一超多强、快速分化”** 的格局：OpenClaw 作为核心参照项目，凭借高活跃度（日处理 500+ Issues/PRs）和跨平台集成能力占据生态中心；NanoBot、Zeroclaw、PicoClaw 等后起项目聚焦轻量化、部署友好性与企业级通道支持，形成差异化竞争；多模态支持、MCP 协议集成、安全沙箱治理成为全行业共性技术焦点；同时，国产项目（如 LobsterAI、CoPaw）在钉钉/飞书等本土 IM 生态中展现出强适配能力，推动生态向区域化、场景化纵深发展。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|--------------|
| **OpenClaw** | 500（新开453） | 500（合并112） | ❌ | ⭐⭐⭐⭐☆（高活跃，回归问题需关注） |
| **NanoBot** | 187（关闭166） | 252（合并193） | ✅ v0.1.4.post5 | ⭐⭐⭐⭐⭐（高效维护，稳定性强） |
| **Zeroclaw** | 44（新开24） | 50（合并42） | ✅ 10个beta版 | ⭐⭐⭐⭐（快速迭代，安全漏洞待修） |
| **PicoClaw** | 22（新开20） | 77（合并32） | ✅ nightly | ⭐⭐⭐⭐（架构演进中，运维诉求上升） |
| **NanoClaw** | 21（新开20） | 50（合并20） | ❌ | ⭐⭐⭐（部署泛化关键期） |
| **LobsterAI** | 6（新开） | 14（合并12） | ✅ v2026.3.16 | ⭐⭐⭐⭐（企业IM集成领先） |
| **TinyClaw** | 4（新开） | 11（合并3） | ✅ v0.0.14 | ⭐⭐⭐⭐☆（调度系统重构成功） |
| **Moltis** | 2（新开） | 6（合并3） | ❌ | ⭐⭐⭐（稳定迭代，工具链完善中） |
| **CoPaw** | 50（新开38） | 50（合并23） | ❌ | ⭐⭐⭐（多Agent架构突破期） |
| **ZeptoClaw** | 2（新开） | 3（合并1） | ❌ | ⭐⭐⭐（协议层扩展关键阶段） |
| **EasyClaw** | 3（1关闭） | 0 | ✅ v1.7.0 | ⭐⭐（发布后稳定性风险） |

> 注：健康度综合考量活跃度、响应速度、Bug修复效率与用户反馈。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：日处理 Issue/PR 数量超其他项目总和，社区贡献者基数庞大；  
- **集成最广**：支持 Slack、Feishu、WhatsApp、Telegram 等 10+ 通道，Fireworks AI 等 26 个模型原生集成；  
- **治理最成熟**：已实施“渐进式权限模式”、exec 白名单等安全机制，Mission Control 提供系统级可观测性。

**技术路线差异**：  
- 相比 NanoBot 的“轻量可信”哲学，OpenClaw 选择 **“功能完备优先”**，接受更高复杂度以换取企业级能力；  
- 与 Zeroclaw 强调安全沙箱不同，OpenClaw 更侧重 **用户体验一致性**（如统一审批按钮）；  
- 相较于 PicoClaw 的 agent 架构重构，OpenClaw 采取 **渐进式演进**，避免破坏性变更。

**社区规模**：GitHub 互动量（Issues+PRs）约为第二名 NanoBot 的 2.6 倍，但回归问题密度更高，反映规模带来的维护挑战。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **MCP 协议支持** | OpenClaw、NanoBot、CoPaw、ZeptoClaw | 实现标准化工具调用接口，支持外部 Agent 互操作（如 ACP 协议） |
| **多模态视觉能力** | OpenClaw、PicoClaw、CoPaw、ZeptoClaw | 集成 MiniMax-Vision、Whisper 等，解决图片/语音输入解析问题 |
| **安全沙箱与权限治理** | OpenClaw、Zeroclaw、PicoClaw | 防止 `exec` 提权、文件写入越界，提供“开发者模式”开关 |
| **部署友好性** | NanoClaw、TinyClaw、Moltis | 支持 Podman、Docker 多架构镜像、交互式配置向导 |
| **企业级 IM 集成** | LobsterAI、CoPaw、OpenClaw | 钉钉/飞书通道稳定性、定时任务可靠性、富文本解析 |

> 💡 **行业共识**：AI 助手正从“原型玩具”向“生产级自动化平台”转型，**可观测性、安全性、部署便利性** 成为三大基石。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 全功能集成、多通道统一体验 | 企业团队、高级用户 | 模块化适配器架构，强中心化控制 |
| **NanoBot** | 轻量、低依赖、快速启动 | 开发者、本地LLM用户 | Node.js + Python 混合栈，强调“零配置” |
| **Zeroclaw** | 安全优先、生产就绪 | 安全敏感型组织 | Rust 实现，严格沙箱，FTS5 会话后端 |
| **PicoClaw** | Agent 可观测性、事件驱动 | 运维/集成开发者 | 引入 SubTurn 中断机制，支持 HTTP 消息入口 |
| **LobsterAI** | 国产 IM 深度集成 | 中国企业用户 | 基于 OpenClaw 运行时，强化钉钉/飞书连接器 |
| **TinyClaw** | 调度系统内化、日历UI | 自动化任务用户 | 进程内 croner，放弃系统 crontab |
| **CoPaw** | 多Agent协作、内存管理 | 复杂工作流用户 | ACP 协议支持，消息压缩优化 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比，架构变动频繁）：  
  **PicoClaw**（agent 重构）、**Zeroclaw**（缓存/心跳机制）、**TinyClaw**（调度内化）  
  → 适合技术前瞻者，但存在稳定性风险。

- **质量巩固阶段**（高合并率，Bug 导向）：  
  **NanoBot**（v0.1.4.post5 修复大量边缘 case）、**LobsterAI**（Windows 兼容性修复）、**Moltis**（模板/工具链优化）  
  → 适合生产环境采用，维护响应快。

- **生态扩展阶段**（功能请求主导，协议层建设）：  
  **CoPaw**（ACP 多Agent）、**ZeptoClaw**（Vertex AI + ACP stdio）  
  → 面向系统集成商，长期价值高。

---

## 7. 值得关注的趋势信号

1. **MCP/ACP 协议将成为事实标准**  
   4 个项目明确推进 MCP 或 ACP 支持，预示 **“AI 助手互操作时代”** 来临，开发者应优先兼容此类协议。

2. **安全不再是可选项，而是准入条件**  
   OpenClaw 的权限模式、Zeroclaw 的沙箱设计、PicoClaw 的日志脱敏，均表明 **“默认安全”** 将成为产品竞争力核心。

3. **国产 IM 生态催生垂直解决方案**  
   LobsterAI、CoPaw 在钉钉/飞书的深度优化，验证了 **“区域化通道集成”** 的商业价值，建议开发者关注本土平台 API 变化。

4. **从“单Agent”到“多Agent路由”架构演进**  
   NanoBot #2072、CoPaw #1544 显示用户已不满足单一助手，**任务自动分发与 Agent 协作** 是下一战场。

5. **部署体验决定 adoption 速度**  
   “交互式配置向导”（NanoBot）、“Docker 一键部署”（NanoClaw）、“Web Setup”（TinyClaw）等改进，说明 **降低运维门槛** 比增加功能更能推动普及。

> 🔔 **对开发者的建议**：聚焦 **MCP 兼容性 + 安全默认配置 + 本土通道支持**，可在生态中建立独特优势；避免重复造轮子，优先基于 OpenClaw 或 NanoBot 等活跃项目二次开发。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-17）

---

## 1. 今日速览

NanoBot 在 2026-03-17 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **187 条 Issues**（关闭 166 条，新开 21 条）和 **252 条 Pull Requests**（合并/关闭 193 条，待合并 59 条），显示出高效的维护节奏与快速响应能力。项目刚发布 `v0.1.4.post5` 版本，聚焦于稳定性优化与边缘场景打磨，整体健康度良好。社区对多通道集成、模型兼容性及配置灵活性提出集中诉求，反映出用户向企业级与本地化部署迁移的趋势。

---

## 2. 版本发布

### 🐈 `v0.1.4.post5` 正式发布  
**链接**: [Release v0.1.4.post5](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post5)

本次发布为一次**精细化迭代**，共合并 57 个 PR，引入 29 名新贡献者。核心特点包括：

- **稳定性优先**：修复大量边缘场景下的异常行为（如 DeepSeek 提供方识别、Ollama 本地连接卡死、Telegram 双回复等）。
- **配置体验优化**：新增交互式配置向导（`nanobot onboard`），降低新手上手门槛。
- **依赖精简尝试**：回应“超轻量”质疑，开始评估 Node.js 依赖必要性（见 #660）。
- **无破坏性变更**：所有改动均向后兼容，用户无需修改现有 `config.json`。

> ✅ 建议所有用户升级至此版本以获得更可靠的日常使用体验。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动多个方向进展：

| 功能方向 | PR | 说明 |
|--------|-----|------|
| **通道扩展** | [#2129](https://github.com/HKUDS/nanobot/pull/2129)（Open）<br>[#2128](https://github.com/HKUDS/nanobot/pull/2128)（Closed） | Microsoft Teams 通道进入开发尾声；ESPHome 本地语音通道已完成但暂未合入主线，体现对**本地语音助手**场景的支持探索。 |
| **CLI 健壮性** | [#2127](https://github.com/HKUDS/nanobot/pull/2127)（Open）<br>[#2085](https://github.com/HKUDS/nanobot/pull/2085)（Closed） | 实现实例锁机制，防止同一配置多进程运行导致状态冲突，提升生产环境可靠性。 |
| **模型兼容性** | [#2116](https://github.com/HKUDS/nanobot/pull/2116)<br>[#2117](https://github.com/HKUDS/nanobot/pull/2117) | 支持通过 `extras` 配置动态添加自定义 LLM 提供方，并初步集成 OpenAI Responses API，增强对**非标准模型平台**的适配能力。 |
| **文档与社区** | [#2120](https://github.com/HKUDS/nanobot/pull/2120)<br>[#2124](https://github.com/HKUDS/nanobot/pull/2124) | 新增 `CONTRIBUTORS.md` 与 WhatsApp 社区链接，强化项目透明度与用户连接。 |

> 项目整体向“**企业级多通道 AI 助手框架**”演进，同时坚守“轻量可信”的设计哲学。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（附链接）

1. **[#1988] WeCom 通道无法启用**  
   → 用户手动添加配置后仍提示 “No Channels Enabled”，反映**企业微信集成文档缺失**与配置验证逻辑不透明。  
   [🔗 Issue #1988](https://github.com/HKUDS/nanobot/issues/1932)

2. **[#1692] Telegram 机器人重复回复**  
   → 同时返回 Markdown 渲染与纯文本两条消息，严重影响用户体验，疑似消息处理流水线重复触发。  
   [🔗 Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)

3. **[#2072] 请求原生多智能体路由支持**  
   → 用户希望像 OpenClaw 一样实现自动任务分发，当前需手动启动多个 gateway 实例，**暴露架构扩展性瓶颈**。  
   [🔗 Issue #2072](https://github.com/HKUDS/nanobot/issues/2072)

4. **[#1932] 技能无法禁用仅能删除**  
   → 用户呼吁引入“启用/禁用”开关，体现对**灵活技能管理**的强烈需求，尤其适用于 A/B 测试或临时关闭高风险工具。  
   [🔗 Issue #1932](https://github.com/HKUDS/nanobot/issues/1932)

> 💡 社区核心诉求：**降低配置复杂度、提升通道稳定性、增强技能与模型管理粒度**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|--------|-------|------|--------|
| ⚠️ 高 | [#1692] Telegram 双回复 | Open | 无 |
| ⚠️ 高 | [#1988] WeCom 通道启动失败 | Open | 无 |
| ⚠️ 中 | [#659] “20 次迭代未完成”错误中断对话 | Closed | 已在 v0.1.4.post5 修复 |
| ⚠️ 中 | [#603] Ollama 本地模型卡死“thinking” | Closed | 配置示例已更新 |
| ⚠️ 低 | [#672] 机器人重复相同回答 | Closed | 上下文管理优化 |

> 当前无已知严重崩溃或数据丢失风险，但 **Telegram 与 WeCom 通道问题亟待修复**，建议优先处理。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，并有对应 PR 推进，**极可能纳入下一版本**：

- ✅ **多自定义模型切换**（[#1991](https://github.com/HKUDS/nanobot/issues/1991)）→ 已由 [#2116](https://github.com/HKUDS/nanobot/pull/2116) 实现动态 `extras` 提供方支持。
- ✅ **技能启用/禁用机制**（[#1932](https://github.com/HKUDS/nanobot/issues/1932)）→ 虽无直接 PR，但 `extras` 架构为后续技能状态管理奠定基础。
- 🔄 **MCP 协议官方支持**（[#359](https://github.com/HKUDS/nanobot/issues/359)）→ 高赞请求（👍8），团队已评估，预计 Q2 实现。
- 🔄 **SearXNG 搜索集成**（[#405](https://github.com/HKUDS/nanobot/issues/405)）→ 隐私搜索需求明确，待社区贡献 PR。

> 路线图清晰：**先夯实核心通信与模型层，再扩展工具生态**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “v0.1.4.post5 让日常使用更顺滑了，终于不用频繁重启” —— @Claudioappassionato（#855）
  - “交互式配置向导太棒了！新手再也不怕改 JSON 了” —— @chengyongru（#2018）

- **痛点**：
  - “企业微信配置文档几乎为零，全靠试错” —— @oskaryang-kk（#1988）
  - “Telegram 发两条消息，根本没法用” —— @aiko929（#1692）
  - “技能删了就不能临时关掉？太不灵活了” —— @Diorser（#1932）

- **使用场景**：
  - 本地 LLM + LmStudio（Ryzen + RTX 3050）
  - 企业内网部署（WeCom / 飞书）
  - 多模型 fallback（OpenRouter → 本地 vLLM）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，**建议维护者优先关注**：

| Issue | 类型 | 积压天数 | 说明 |
|------|------|--------|------|
| [#1988] WeCom 通道不工作 | Bug | 4 天 | 企业用户关键通道，影响 adoption |
| [#1692] Telegram 双回复 | Bug | 9 天 | 高频使用通道体验灾难 |
| [#2072] 多智能体路由 | Feature | 1 天 | 架构级需求，需 roadmap 回应 |
| [#126] GitHub Actions 自动构建 Docker 镜像 | Enhancement | 41 天 | 影响部署便利性，已有成功案例 |

> 📌 **行动建议**：为 WeCom 和 Telegram 通道分配专项排查资源；对多智能体路由发布设计草案征求意见。

--- 

**报告生成时间**: 2026-03-17  
**数据来源**: GitHub Repository `HKUDS/nanobot`  
**分析师**: NanoBot 开源项目观察组

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-17）

---

## 1. 今日速览

Zeroclaw 在 2026-03-17 继续保持高活跃度，过去24小时内共处理 **44 条 Issues**（新开/活跃 24，关闭 20）和 **50 条 PR**（待合并 8，已合并/关闭 42），并发布 **10 个新版本**，主要集中在 `v0.4.2-beta` 和 `v0.4.1-beta` 系列。项目整体处于快速迭代阶段，核心功能如缓存、会话管理、通道集成和安全性持续增强。社区反馈密集，涉及安全策略、Docker 部署、MCP 工具链等关键场景，反映出用户对生产可用性的高度关注。

---

## 2. 版本发布

### v0.4.2-beta.300（最新）
- **核心更新**：
  - `cache`: 实现双层响应缓存、多提供商 Token 追踪与缓存分析（[#v0.4.2-beta.300](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.4.2-beta.300)）
  - `channels`: 新增 X/Twitter 和 Mochat 通道集成
  - `config`: 支持 transcription 配置中的 `initial_prompt` 参数，提升专有名词识别准确率
  - `heartbeat`: 引入健康指标与自适应心跳间隔机制
- **迁移注意**：无破坏性变更，但使用 transcription 功能的用户建议配置 `initial_prompt` 以优化语音转写效果。

> 其他版本（如 v0.4.1-beta.269、v0.4.0）主要包含相同功能集的渐进式修复与 SQLite 会话后端（FTS5）的稳定性增强。

---

## 3. 项目进展

今日合并/关闭的 **42 个 PR** 推动多项关键能力落地：

- **工具系统增强**：
  - ✅ 修复 deferred MCP 工具无法调用的问题（[#3747](https://github.com/zeroclaw-labs/zeroclaw/pull/3747)）
  - ✅ 新增 `read_skill` 工具，解决 Compact 模式下技能加载不可靠问题（[#3739](https://github.com/zeroclaw-labs/zeroclaw/pull/3739)）
  - ✅ 防止 XML 工具调度器重复注入工具 schema（[#3744](https://github.com/zeroclaw-labs/zeroclaw/pull/3744)）

- **部署与运维改进**：
  - ✅ 修复 Docker 镜像生成 dummy binary 的问题（[#3570](https://github.com/zeroclaw-labs/zeroclaw/pull/3570)）
  - ✅ 恢复交互式 onboarding 模式（[#3740](https://github.com/zeroclaw-labs/zeroclaw/pull/3740)）
  - ✅ 支持 Docker 环境下使用 `host.docker.internal` 连接本地 AI 服务（[#2933](https://github.com/zeroclaw-labs/zeroclaw/pull/2933)）

- **通道与集成**：
  - ✅ WhatsApp Web 支持语音消息转录（[#3617](https://github.com/zeroclaw-labs/zeroclaw/pull/3617)）
  - ✅ Matrix 多房间回复路由回归修复（[#3378](https://github.com/zeroclaw-labs/zeroclaw/pull/3378)）

项目整体向 **生产就绪型 AI 助手平台** 迈出坚实一步，尤其在工具可靠性、部署体验和多通道支持方面显著提升。

---

## 4. 社区热点

### 🔥 #1478 [CLOSED] “除了安全，什么功能也没有”（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)）
- **评论数：39** | **👍：5**
- **诉求分析**：用户强烈抱怨默认安全策略过于严格，导致即使手动开启所有权限，仍无法执行 `ffmpeg` 等外部工具。反映核心矛盾：**安全沙箱 vs 功能自由度**。该 Issue 已关闭，但暴露出需在配置层提供“开发者模式”或全局权限开关的需求。

### 🔥 #3540 [OPEN] Lark/Feishu 通道编译后无法启动（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3540)）
- **评论数：7** | **状态：未解决**
- 用户反馈即使正确编译 `channel-lark` 特性，Feishu 通道仍无法启动，疑似运行时依赖或配置加载逻辑缺陷，需维护者介入排查。

### 🔥 #3687 [CLOSED] Docker 镜像包含 dummy binary（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3687)）
- **👍：1**，已被 PR #3570 修复，体现社区对官方镜像质量的敏感度。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **S0**（数据丢失/安全风险） | [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) | 代理可通过 `file_write` 提权修改 `config.toml` 绕过 `always_ask` 限制 | 🟡 未修复（需安全审计） |
| **S1**（工作流阻塞） | [#3552](https://github.com/zeroclaw-labs/zeroclaw/issues/3552) | Nextcloud webhook 无响应（v0.3.1 仍存在） | 🔴 未修复 |
| **S1** | [#3746](https://github.com/zeroclaw-labs/zeroclaw/issues/3746) | Deferred MCP 工具激活后不可调用 | ✅ 已由 [#3747](https://github.com/zeroclaw-labs/zeroclaw/pull/3747) 修复 |
| **S1** | [#3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684) | v0.3.4 配置不向后兼容，缺失字段导致启动失败 | ✅ 文档/迁移脚本待补充 |
| **S2**（降级行为） | [#3658](https://github.com/zeroclaw-labs/zeroclaw/issues/3658) | v0.3.2 交互式 onboarding 失效 | ✅ 已由 [#3740](https://github.com/zeroclaw-labs/zeroclaw/pull/3740) 修复 |

> ⚠️ 安全类 Issue #2400 仍为高危未修复项，建议优先处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| 支持阿里云百炼 Coding Plan | [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) | 🟡 中（需 provider 扩展） |
| 提供“全功能”Docker 镜像（启用所有 feature flags） | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 🟢 高（已有讨论，CI 可支持） |
| 支持 Amazon Bedrock 短/长期 API Key | [#3742](https://github.com/zeroclaw-labs/zeroclaw/issues/3742) | 🟢 高（AWS 生态重要） |
| 添加 `get-paircode` 命令免重启查看配对码 | [#3015](https://github.com/zeroclaw-labs/zeroclaw/issues/3015) | 🟡 中（CLI 体验优化） |
| 浏览器委派工具（browser delegation） | [#3610](https://github.com/zeroclaw-labs/zeroclaw/pull/3610) | ✅ 已合并，将随下个版本发布 |

> 信号表明：**企业级集成**（Bedrock、阿里云）、**部署便利性**（Docker、CLI）、**工具链扩展**（浏览器、MCP）是下一阶段重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - 安全策略“一刀切”，个人开发者无法灵活放宽限制（#1478）
  - Docker 部署体验差：镜像错误、路径配置困惑、重启机制不明（#3474, #3687）
  - 多通道支持不稳定：Feishu、Nextcloud、Matrix 存在兼容性问题（#3540, #3552）
- **满意点**：
  - 缓存与心跳机制显著提升长期运行稳定性（v0.4.1+ 用户反馈）
  - SQLite + FTS5 会话后端改善本地数据管理体验
  - 社区响应速度快，多数 Bug 在 24h 内修复（如 onboarding、Docker dummy binary）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时间 | 提醒 |
|--------|------|--------|------|
| [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) | 安全漏洞 | 74 天 | ⚠️ 高危，需安全团队 review |
| [#3552](https://github.com/zeroclaw-labs/zeroclaw/issues/3552) | Bug（Nextcloud） | 2 天 | 🔴 多次复现，影响企业用户 |
| [#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540) | Bug（Feishu） | 2 天 | 🟡 通道集成关键路径 |
| [#3293](https://github.com/zeroclaw-labs/zeroclaw/pull/3293) | PR（Matrix 官方构建） | 5 天 | 🟡 未合并，影响 Matrix 用户 |

> 建议维护者优先处理 #2400 和 #3552，二者均涉及核心功能可用性。

--- 

**报告生成时间**：2026-03-17  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-17）

---

## 1. 今日速览

PicoClaw 项目在 2026-03-17 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **22 条 Issues 更新**（20 新开/活跃，2 已关闭）和 **77 条 PR 更新**（45 待合并，32 已合并/关闭），显示出强烈的开发动能。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260317.79b0568d`），聚焦于 agent 架构优化与 provider 稳定性修复。社区对 agent 可观测性、配置继承逻辑和工具安全性的讨论显著升温，反映出用户向生产环境部署的进阶需求。

---

## 2. 版本发布

### 🔧 Nightly Build: `v0.2.3-nightly.20260317.79b0568d`
- **类型**：自动化 nightly 构建（非稳定版，谨慎使用）
- **主要变更范围**：
  - Agent 上下文管理与压缩逻辑重构（#1490）
  - Anthropic 模型 ID 格式标准化修复（#1626, #1630）
  - Cron 任务默认执行模式调整为 agent 处理（#1570）
  - Telegram HTML 消息分块优化（#1651）
  - 新增 HTTP 消息入口端点 `/pico/message`（#1657）
- **⚠️ 注意事项**：
  - 此版本包含对 `anthropic/claude-sonnet-4.6` 等带点模型名的自动转换（`.` → `-`），若用户手动拼接 API 路径需检查兼容性。
  - Cron 工具行为变更：`deliver=false` 不再直接回显消息，而是交由 agent 处理，可能影响现有自动化脚本逻辑。
- **完整变更日志**：[Compare v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展

今日有 **32 个 PR 被合并或关闭**，关键进展包括：

| PR | 类型 | 影响 |
|----|------|------|
| [#1570](https://github.com/sipeed/picoclaw/pull/1570) | Bug Fix | 修复 cron 任务默认绕过 agent 的问题，提升任务处理一致性 |
| [#1645](https://github.com/sipeed/picoclaw/pull/1645) | Security | 屏蔽 Telegram bot token 在第三方日志中的明文输出，降低泄露风险 |
| [#1536](https://github.com/sipeed/picoclaw/pull/1536) | Bug Fix | 修复默认沙箱下非图片附件（音频/文档）无法被工具读取的问题 |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | Feature | 增强 QQ 频道对表情、语音、视频等多类型附件的解析与回复支持 |

> ✅ 项目整体在 **多通道兼容性**、**agent 执行可靠性** 和 **安全审计** 方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

1. **[#1316 Agent refactor: Event-driven agent loop with hooks, interrupts, and steering](https://github.com/sipeed/picoclaw/issues/1316)**  
   - **评论数：11** | **👍：1**  
   - 核心诉求：当前 agent loop 是“黑盒”，缺乏可观测性与干预能力。用户希望实现事件驱动架构，支持 hook、中断和动态消息注入，以便集成 UI、日志系统或控制平面。
   - **关联 PR**：[#1636 SubTurn 实现](https://github.com/sipeed/picoclaw/pull/1636) 已部分响应此需求，引入层级执行与中断机制。

2. **[#39 Feature Request: Add `picoclaw doctor` command](https://github.com/sipeed/picoclaw/issues/39)**  
   - **评论数：5** | **👍：0**  
   - 用户呼吁提供类似 OpenClaw 的健康检查工具，用于验证配置、检测 provider 连通性、系统资源等，降低运维门槛。

3. **[#1635 model_list does not inherit api_key/api_base from providers](https://github.com/sipeed/picoclaw/issues/1635)**  
   - **评论数：2** | **👍：0**  
   - 配置继承逻辑缺陷导致重复配置，违反 DRY 原则，影响多模型场景下的易用性。

> 💡 社区明显向 **可运维性** 和 **架构透明化** 演进，反映出项目从原型向生产级 AI 助手过渡的趋势。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 修复 PR |
|-------|--------|------|--------|
| [#1658 tool use.name string should contain at least 1 character - Claude](https://github.com/sipeed/picoclaw/issues/1658) | 🔴 高（阻断性） | ✅ 已修复 | [#1659](https://github.com/sipeed/picoclaw/pull/1659) |
| [#1650 Picoclaw service Restarting Indefinitely](https://github.com/sipeed/picoclaw/issues/1650) | 🔴 高 | 🟡 调查中 | — |
| [#1641 max_tool_iterations error after a few days](https://github.com/sipeed/picoclaw/issues/1641) | 🟠 中 | 🟡 复现中 | — |
| [#1634 per-agent model config selects model but not provider](https://github.com/sipeed/picoclaw/issues/1634) | 🟠 中 | 🟡 分析中 | — |
| [#1624 Anthropic model ID dots not normalized](https://github.com/sipeed/picoclaw/issues/1624) | 🟠 中 | ✅ 已修复 | [#1626](https://github.com/sipeed/picoclaw/pull/1626), [#1630](https://github.com/sipeed/picoclaw/pull/1630) |

> ⚠️ 注意：#1650（服务无限重启）和 #1641（长期运行后崩溃）可能涉及资源泄漏或状态机异常，建议优先排查。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或设计讨论：

| 功能 | Issue | 进展 | 可能版本 |
|------|-------|------|----------|
| 禁用 `exec` 工具 | [#1621](https://github.com/sipeed/picoclaw/issues/1621) | ✅ PR [#1627](https://github.com/sipeed/picoclaw/pull/1627) 已提交 | v0.2.4 |
| Cron 最小间隔限制 | [#1655](https://github.com/sipeed/picoclaw/issues/1655) | ✅ PR [#1656](https://github.com/sipeed/picoclaw/pull/1656) 已提交 | v0.2.4 |
| HTTP 消息入口 | [#850](https://github.com/sipeed/picoclaw/issues/850) | ✅ PR [#1657](https://github.com/sipeed/picoclaw/pull/1657) 实现基础端点 | v0.2.4 |
| TTS/ASR 支持 | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | 🔵 设计阶段 | v0.3.0 |
| 系统托盘 UI | — | ✅ PR [#1649](https://github.com/sipeed/picoclaw/pull/1649) 跨平台实现 | v0.2.4 |

> 📌 安全相关功能（如禁用高危工具）和运维增强（如 HTTP 入口、cron 防护）将优先纳入下一稳定版。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “配置 `model_list` 时要重复写 `api_key`，太繁琐且易错”（#1635）
  - “运行几天后突然报 `max_tool_iterations`，必须重启”（#1641）
  - “Claude 模型带点就 404，文档没说清楚格式”（#1624）
  - “Docker 镜像连 `curl` 都没有，没法做简单调试”（#1228）

- **满意点**：
  - “nightly 版本更新很及时，Anthropic 问题第二天就修了”
  - “agent 能处理复杂 cron 任务，比之前直接 echo 有用多了”

- **使用场景**：
  - 企业微信群 + Feishu 多通道部署
  - 长期运行的自动化助手（7x24h）
  - 与内部系统通过 HTTP 触发 agent（期待 `/pico/message` 稳定化）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|----------|------|------|
| [#39 `picoclaw doctor`](https://github.com/sipeed/picoclaw/issues/39) | Enhancement | 2026-02-11 | Open | 高价值运维工具，社区多次提及 |
| [#1475 Structured event stream for orchestration](https://github.com/sipeed/picoclaw/issues/1475) | Enhancement | 2026-03-13 | Open | 对集成网关/控制面板至关重要 |
| [#1228 Pre-install dev tools in Docker](https://github.com/sipeed/picoclaw/issues/1228) | Enhancement | 2026-03-08 | Open | 影响新手体验与生产调试 |
| [#751 WebSocket Gateway](https://github.com/sipeed/picoclaw/pull/751) | PR | 2026-02-25 | Open | 核心集成接口，已搁置近1个月 |

> 🔔 建议：对 #39 和 #1475 进行 roadmap 评估，明确是否纳入 v0.3.0；推动 #751 进入测试或合并流程。

--- 

**报告生成时间**：2026-03-17  
**数据来源**：PicoClaw GitHub Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-17）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共产生 **21 条 Issues 更新**（新开/活跃 20 条，关闭 1 条）和 **50 条 PR 更新**（待合并 30 条，已合并/关闭 20 条），显示出社区贡献与开发节奏显著加快。尽管无新版本发布，但多个关键 Bug 修复和基础设施增强 PR 正在推进中，项目整体处于**快速迭代与稳定性优化并行**阶段。安全、部署兼容性与模型支持成为当前核心关注点。

---

## 2. 版本发布

**无新版本发布**。最新 Release 仍为历史版本，团队聚焦于底层修复与技能生态扩展，暂未触发正式版本迭代。

---

## 3. 项目进展

今日有 **20 个 PR 被合并或关闭**，重点进展包括：

- **容器化部署支持增强**：[#1089](https://github.com/qwibitai/nanoclaw/pull/1089) 引入 Linux/Docker 原生部署方案（含 Unraid 支持），[#1090](https://github.com/qwibitai/nanoclaw/pull/1090) 修复 `.claude.json` 只读挂载导致的 EROFS 崩溃，显著提升非 macOS 用户可用性。
- **核心逻辑修复**：[#1098](https://github.com/qwibitai/nanoclaw/pull/1098) 修复时间戳缺失星期信息问题，使 Agent 可正确判断“今日是否为周末”等时间敏感任务；[#1159](https://github.com/qwibitai/nanoclaw/pull/1159) 实现 IPC 任务变更后实时刷新快照，解决任务状态同步延迟。
- **浏览器稳定性修复**：[#1157](https://github.com/qwibitai/nanoclaw/pull/1157) 修复 Chromium 因 `XDG_CONFIG_HOME` 只读导致的 SIGTRAP 崩溃，提升 Web 技能可靠性。

> 项目在**跨平台兼容性、任务系统一致性、运行时稳定性**三方面取得实质性推进。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论与关注：

- **[#730] CLAUDE_CODE_OAUTH_TOKEN 过期导致容器每日 401 错误**（[链接](https://github.com/qwibitai/nanoclaw/issues/730)）  
  高优先级 Bug，影响默认配置用户。背景服务无法自动刷新 OAuth Token，需手动干预。社区呼吁引入 Token 自动续期或切换至 API Key 模式提示。

- **[#957] 建议支持 Podman 替代 Docker**（[链接](https://github.com/qwibet/nanoclaw/issues/957)）  
  获 4 👍，反映 macOS/Linux 用户对无守护进程容器方案的强烈需求，尤其适用于企业安全策略限制 Docker 的场景。

- **[#1142] Agent SDK 固定 v0.2.34 导致容器默认使用过时模型**（[链接](https://github.com/qwibitai/nanoclaw/issues/1142)）  
  高优先级 Bug，直接影响用户体验——用户无法自动获得最新 Claude 模型能力，需手动覆盖配置。

- **[#1163] 考虑支持 OpenCode 及多 AI 提供商**（[链接](https://github.com/qwibitai/nanoclaw/issues/1163)）  
  新兴讨论热点，反映企业用户对摆脱 Claude Code 单一依赖、集成内部 AI 平台（如 DeepInfra、OpenAI）的迫切需求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 High | [#730](https://github.com/qwibitai/nanoclaw/issues/730) | OAuth Token 过期致每日服务中断 | ❌ 无 |
| 🔴 High | [#1142](https://github.com/qwibitai/nanoclaw/issues/1142) | Agent SDK 版本锁定致模型过时 | ❌ 无 |
| 🔴 High | [#1067](https://github.com/qwibitai/nanoclaw/issues/1067) | Apple Container 启动竞态致重启失败 | ❌ 无 |
| 🔴 High | [#1150](https://github.com/qwibitai/nanoclaw/issues/1150) | 容器错误日志泄露完整用户提示（安全风险） | ❌ 无 |
| 🟠 Medium | [#698](https://github.com/qwibitai/nanoclaw/issues/698) | Agent 无法从 ISO 时间戳推断星期 | ✅ 有（[#1098](https://github.com/qwibitai/nanoclaw/pull/1098)） |
| 🟠 Medium | [#1088](https://github.com/qwibitai/nanoclaw/issues/1088) | 日志文件膨胀至 27GB（已关闭） | ✅ 用户自解，建议加日志轮转 |

> **安全提醒**：[#1149](https://github.com/qwibitai/nanoclaw/issues/1149) 请求私有披露通道，表明存在未公开安全漏洞，维护者应尽快建立安全响应流程。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳潜力，且已有对应 PR 或明确技术路径：

- **多 AI 提供商支持**：[#1163](https://github.com/qwibitai/nanoclaw/issues/1163) 提出 OpenCode 集成，结合 [#1015](https://github.com/qwibitai/nanoclaw/issues/1015) 对 DeepInfra 的支持诉求，预示架构将向**抽象 LLM 接口层**演进。
- **持久化记忆系统**：[#907](https://github.com/qwibitai/nanoclaw/issues/907)（Epic）与 [#1130](https://github.com/qwibitai/nanoclaw/issues/1130)（MemOS 技能）共同指向“结构化记忆”为下一核心能力，PR [#1131](https://github.com/qwibitai/nanoclaw/pull/1131) 已提供实现原型。
- **Linux/Docker 原生部署**：PR [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) 已落地，响应 [#1079](https://github.com/qwibitai/nanoclaw/issues/1079) 对 Intel Mac 及 Linux 支持的需求。
- **消息搜索能力**：PR [#1160](https://github.com/qwibitai/nanoclaw/pull/1160) 实现 per-group FTS5 搜索，为未来“对话记忆检索”打下基础。

> 预计下一版本将聚焦 **部署泛化、记忆系统、多模型支持** 三大方向。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “每天早晨容器都因 Token 过期挂掉，必须手动重启”（#730）
  - “我们公司在用 DeepInfra，但 NanoClaw 只认 Claude，很无奈”（#1015）
  - “fork 后 merge 上游总会静默丢代码，太危险了”（#1135）
  - “日志把我说的话全记下来了，这安全吗？”（#1150）

- **满意点**：
  - “技能系统设计得很优雅，加个 `/add-signal` 应该不难”（#29）
  - “终于有人做 WhatsApp 反应追踪了！”（#509 相关讨论）
  - “Shabbat 模式太有创意了，文化适配满分”（#547）

- **使用场景**：
  - 企业内网部署（需 Podman/Linux 支持）
  - 多语言/多宗教场景（如 Shabbat 模式）
  - 高安全环境（担忧日志泄露、需私有 AI 模型）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- **[#730] OAuth Token 过期问题**（创建于 2026-03-05，高优 Bug，影响默认工作流）  
- **[#907] nanoclaw-learning-system Epic**（创建于 2026-03-10，高优 Enhancement，代表核心能力演进方向）  
- **[#698] 时间戳缺星期信息**（创建于 2026-03-04，虽已有 Fix PR，但原 Issue 未闭环）  
- **[#29] 添加 Signal 支持**（创建于 2026-02-02，低优但社区呼声稳定，已有 2 👍）  
- **[#1148/#1147] skill 分支 merge-forward 失败**（自动化流程中断，影响技能维护效率）

> 建议建立 **安全响应机制**（回应 #1149）并制定 **Token 管理长期方案**，以保障项目可持续性与用户信任。

---  
**报告生成时间**：2026-03-17  
**数据来源**：NanoClaw GitHub 仓库公开数据

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-17）

---

## 1. 今日速览

LobsterAI 在 2026-03-17 继续保持高活跃度，社区与开发并行推进。过去24小时内共处理 **14 条 PR**（其中 12 条已合并），发布 **1 个新版本（v2026.3.16）**，并新增 **6 条 Issues**，涵盖功能缺陷、兼容性问题和用户体验反馈。项目整体处于快速迭代与稳定性优化阶段，Windows 平台兼容性、IM 通道消息同步、定时任务可靠性等成为当前核心优化方向。

---

## 2. 版本发布

### 🔖 v2026.3.16（2026-03-16）
**更新重点：Windows 平台兼容性修复与 OpenClaw 运行时稳定性增强**

- ✅ **Windows 兼容性修复**：解决 OpenClaw runtime 在 Windows 上的构建与启动失败问题（[#261](https://github.com/netease-youdao/LobsterAI/pull/261)）
- ✅ **Gateway 启动失败修复**：修复 Windows 环境下 OpenClaw gateway 启动异常（[#279](https://github.com/netease-youdao/LobsterAI/pull/279)）
- ⚠️ **潜在破坏性变更**：本次更新涉及底层 gateway 启动逻辑调整，建议 Windows 用户升级后重启应用并检查 `openclaw` 服务状态。
- 📌 **迁移建议**：若从 v0.2.4 升级后出现 `No API key found for provider "lobster"` 错误（见 Issue #452），建议清理本地状态目录（如 `~/Library/Application Support/LobsterAI/openclaw/state/`）后重新初始化。

> 📦 Release 链接：[v2026.3.16](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.16)

---

## 3. 项目进展

今日共 **12 个 PR 被合并**，主要集中在 **IM 通道稳定性、定时任务系统优化、权限交互体验提升** 三大方向：

| 类别 | 关键进展 | PR 链接 |
|------|--------|--------|
| **IM 通道修复** | 修复钉钉定时任务触发后消息未发送问题；解决飞书等 IM 通道会话不实时创建 UI 的问题；优化消息顺序错乱（用户消息显示在 AI 回复之后） | [#449](https://github.com/netease-youdao/LobsterAI/pull/449), [#436](https://github.com/netease-youdao/LobsterAI/pull/436), [#451](https://github.com/netease-youdao/LobsterAI/pull/451) |
| **定时任务系统** | 优化历史记录标题显示（从 UUID 提取任务名称）；修复 `toggleJob` 返回值逻辑；防止快速切换开关导致状态不一致 | [#448](https://github.com/netease-youdao/LobsterAI/pull/448), [#440](https://github.com/netease-youdao/LobsterAI/pull/440), [#439](https://github.com/netease-youdao/LobsterAI/pull/439) |
| **安全与交互** | 优化权限确认弹窗内容展示，避免命令截断；增强危险操作警告可见性 | [#445](https://github.com/netease-youdao/LobsterAI/pull/445) |
| **连接稳定性** | 升级钉钉连接器至 v0.7.9，修复 JSON SessionContext 解析；增加 Gateway WS 自动重连机制 | [#442](https://github.com/netease-youdao/LobsterAI/pull/442), [#443](https://github.com/netease-youdao/LobsterAI/pull/443) |
| **模型兼容性** | 修复图片附件未传递至 OpenClaw gateway 问题；为非视觉模型添加图片引导提示 | [#437](https://github.com/netease-youdao/LobsterAI/pull/437) |

> 项目整体在 **多通道集成稳定性** 和 **任务调度可靠性** 方面取得显著进展，为后续支持更多企业级 IM 平台打下基础。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#435 “这是套壳的嘛？界面高度相似”
- **评论数**：2 | **点赞数**：0 | **作者**：@RedBearAI
- **核心诉求**：用户质疑多个国产 Claw 类产品（如 Wind Claw、Zeelin Claw）疑似基于 LobsterAI 二次开发但未保留版权声明，呼吁项目方采取法律手段维权。
- **背后信号**：反映项目 UI/UX 设计已被市场认可，但也面临开源项目常见的“白牌滥用”风险。社区期待官方明确 license 执行策略或技术防抄袭机制。
- 🔗 [查看 Issue #435](https://github.com/netease-youdao/LobsterAI/issues/435)

> 此议题虽非技术问题，但揭示了项目影响力的扩大，建议维护团队考虑在官网或 README 中加强品牌声明与 license 说明。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | 问题描述 | 状态 | 相关 Issue/PR |
|--------|--------|------|-------------|
| ⚠️ **高** | 升级至 v2026.3.16 后报错 `No API key found for provider "lobster"`，导致 Agent 无法响应 | 🟡 未修复 | [#452](https://github.com/netease-youdao/LobsterAI/issues/452) |
| ⚠️ **高** | 使用智谱 GLM5 模型时，复杂操作（如安装 skill）导致对话页面卡死 | 🟡 未修复 | [#446](https://github.com/netease-youdao/LobsterAI/issues/446) |
| ⚠️ **中** | .env 文件中含 `#` 的密码被截断（因 `#` 被视为注释） | 🟡 未修复 | [#441](https://github.com/netease-youdao/LobsterAI/issues/441) |
| ✅ **已修复** | IM 消息顺序错乱、钉钉定时任务不发送、本地图片无法展示等问题 | 已合并 | 见第3节 |

> 建议优先处理 #452（影响核心功能）和 #446（特定模型兼容性），二者均影响用户正常使用。

---

## 6. 功能请求与路线图信号

| 功能请求 | 用户诉求 | 是否已有 PR | 纳入可能性 |
|--------|--------|------------|----------|
| Mermaid 图表预览 | 支持流程图、时序图等可视化渲染（@ldzhub） | ❌ 无 | ⭐⭐☆（中等，需前端集成） |
| Token 消耗统计 | 用户希望感知每次对话的 token 成本（@zwy123zwy） | ❌ 无 | ⭐⭐⭐（高，符合透明化趋势） |
| 提示词优化建议 | 提供智能 prompt 调整建议以提升输出质量 | ❌ 无 | ⭐⭐（中长期） |
| AIHubMix 提供商支持 | 新增第三方模型接入能力 | ✅ 有（[#438](https://github.com/netease-youdao/LobsterAI/pull/438) 开放中） | ⭐⭐⭐（高，扩展性强） |

> **AIHubMix 提供商支持** 是当前最可能进入下一版本的功能，已进入开发阶段。

---

## 7. 用户反馈摘要

从 Issues 中提取的真实用户声音：

- **痛点**：
  - “一次生成过长内容会导致整个 App 卡顿，页面无法操作” → 需优化流式渲染性能（#434）
  - “QQBot 经常性断链” → 连接稳定性待加强（#434）
  - “密码含 `#` 就被截断，调试半天” → 配置解析逻辑粗糙（#441）

- **满意点**：
  - 多 IM 通道（钉钉、飞书、Telegram）集成体验良好
  - 定时任务功能实用，UI 交互清晰（经 PR #448 优化后更直观）

- **使用场景**：
  - 企业用户通过钉钉/飞书接入 AI 助手实现自动化提醒与任务管理
  - 开发者使用 LobsterAI 作为本地 AI 代理调试工具（配合 GLM、Claude 等模型）

---

## 8. 待处理积压

以下 Issue 超过 24 小时未获维护者响应，建议优先关注：

| Issue | 类型 | 创建时间 | 积压原因分析 |
|------|------|--------|------------|
| [#452](https://github.com/netease-youdao/LobsterAI/issues/452) | 升级后 API Key 失效 | 2026-03-16 | 影响核心功能，需紧急排查 auth 模块变更 |
| [#446](https://github.com/netease-youdao/LobsterAI/issues/446) | GLM5 模型兼容性崩溃 | 2026-03-16 | 特定模型必现问题，可能涉及 streaming 或 tool call 解析 |
| [#441](https://github.com/netease-youdao/LobsterAI/issues/441) | .env 特殊字符解析错误 | 2026-03-16 | 配置系统基础缺陷，影响安全性 |

> 🔔 **维护者提醒**：建议对上述三个 Issue 尽快标记 `needs-investigation` 或分配负责人，避免用户流失。

---

**报告生成时间**：2026-03-17  
**数据来源**：GitHub LobsterAI 仓库公开数据  
**分析师备注**：项目健康度良好（活跃度 ★★★★☆，响应速度 ★★★☆☆），建议加强关键 Bug 响应机制与用户沟通透明度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-03-17）

---

## 1. 今日速览  
TinyClaw 在24小时内表现出**高活跃度**，共产生 **4 条新 Issue** 和 **11 条 PR 更新**，其中 **3 个 PR 已合并/关闭**，**1 个新版本发布**（v0.0.14）。社区对调度系统重构和 TinyOffice 稳定性高度关注，同时暴露出多个与 agent 心跳、SSE 连接及配置持久化相关的关键 Bug。整体开发节奏紧凑，核心功能持续演进，但需警惕因架构调整引发的用户体验退化问题。

---

## 2. 版本发布  
### 🔖 [v0.0.14](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.14)  
**核心更新：调度管理系统全面内化**  
- ✅ **迁移至 in-process croner 调度**：弃用系统 crontab，实现进程内调度，提升可移植性与可控性  
- ✅ **新增 REST API 与 CLI 命令**：支持通过 API 动态管理 agent 任务计划  
- ✅ **TinyOffice 集成全屏日历 UI**：可视化编辑 recurring（cron）与 one-time（runAt）任务  
- ✅ **调度持久化支持**：任务配置可保存至数据库，重启后自动恢复  

> ⚠️ **迁移注意**：旧版依赖系统 crontab 的用户需重新通过 API 或 TinyOffice 配置任务，原有 crontab 条目将不再生效。

---

## 3. 项目进展  
今日合并/关闭的 PR 显著推进了系统稳定性与架构简化：  

- **[#225 CLOSED] feat(schedule): internalize schedule management with API and calendar UI**  
  → 实现 v0.0.14 核心功能，完成调度系统从外部依赖到内部服务的转型（[链接](https://github.com/TinyAGI/tinyclaw/pull/225)）  

- **[#230 CLOSED] fix(heartbeat): persist per-agent enabled and interval settings**  
  → 修复 agent 心跳设置无法持久化的问题，确保 cron 脚本能正确读取配置（[链接](https://github.com/TinyAGI/tinyclaw/pull/230)）  

- **[#229 CLOSED] refactor(ui): refactor agent and task components into modules**  
  → 重构 TinyOffice 前端架构，提升组件复用性与 UI 一致性（[链接](https://github.com/TinyAGI/tinyclaw/pull/229)）  

> 📌 三项合并标志着调度、配置持久化与前端架构三大关键模块进入稳定阶段。

---

## 4. 社区热点  
### 🔥 高关注度 Issue：  
- **[#228 [Bug]: Changing heartbeat resets complete agents](https://github.com/TinyAGI/tinyclaw/issues/228)**（严重性：High）  
  用户 @Chavell3 报告：通过 CLI 修改心跳设置导致**整个 agent 配置被清空**，属核心功能破坏，无临时 workaround。  
  → 背后诉求：CLI 工具需具备配置合并能力，避免全量覆盖；权限与数据保护机制亟待加强。  

- **[#231 TinyOffice SSE always shows Disconnected](https://github.com/TinyAGI/tinyclaw/issues/231)**  
  开发者 @crisdias 精准定位 Next.js rewrite 缓冲 SSE 流的问题，并提交对应修复 PR（#232）。  
  → 反映 TinyOffice 实时状态反馈机制存在架构缺陷，影响用户对系统连接状态的信任。

---

## 5. Bug 与稳定性  
按严重程度排序：  

| 严重性 | Issue | 状态 | 修复 PR |
|--------|------|------|--------|
| 🔴 High | [#228] 心跳设置重置全部 agent 配置 | Open | 无（需紧急处理） |
| 🟠 Medium | [#227] TinyOffice 设置更改不持久 | Open | 已由 #230 部分修复 |
| 🟠 Medium | [#231] TinyOffice SSE 始终显示“Disconnected” | Open | ✅ [#232] 已提交修复 |
| 🟡 Low | [#226] 请求为 agent 添加 STAR 功能 | Open | 无（功能请求） |

> ⚠️ #228 为最高优先级，涉及数据丢失风险，建议立即分配资源处理。

---

## 6. 功能请求与路线图信号  
- **STAR Agent 功能**（[#226](https://github.com/TinyAGI/tinyclaw/issues/226)）：用户希望在多 agent 场景下标记“主聊天 agent”，提升界面可用性。该需求贴合 TinyOffice 用户体验优化方向，**极可能被纳入 v0.0.15 或 v0.1.0 路线图**。  
- **Web-based Setup**（[#214](https://github.com/TinyAGI/tinyclaw/pull/214)）：虽 PR 仍 open，但其“跳过 CLI 设置、支持自定义 API URL”的设计符合降低新手门槛的趋势，有望成为默认部署流程的一部分。

---

## 7. 用户反馈摘要  
- **痛点**：  
  - 配置操作（尤其心跳设置）缺乏原子性与回滚机制，易导致数据丢失（#228）  
  - TinyOffice 实时状态反馈不可靠，影响调试信心（#231）  
  - 多 agent 管理界面混乱，缺乏个性化标识（#226）  
- **满意点**：  
  - 调度系统迁移后功能更强大，日历 UI 获隐性好评（v0.0.14 release notes）  
  - 开发者响应迅速，如 #231 在数小时内即提交修复方案  

---

## 8. 待处理积压  
- **[#214 feat: add web-based setup and custom API URL configuration](https://github.com/TinyAGI/tinyclaw/pull/214)**（Open since 2026-03-14）  
  → 虽非紧急，但涉及部署体验重大改进，建议尽快 review 并合并。  
- **[#222 fix(settings): guard POST /api/setup against agent overwrites](https://github.com/TinyAGI/tinyclaw/pull/222)**  
  → 安全相关修复，防止 agent 越权清空配置，应优先于新功能开发处理。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
> 开发活跃、版本迭代快，但需加强配置安全与错误边界处理，避免因架构演进牺牲稳定性。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-03-17）**

---

### 1. 今日速览  
过去24小时内，Moltis 社区保持中等活跃度：共产生 **2 条新 Issue** 和 **6 条 PR 更新**，其中 **3 个 PR 已合并/关闭**，3 个仍处于开放状态。无新版本发布，但核心功能修复与工具链增强持续推进。项目整体处于稳定迭代阶段，开发者响应迅速，社区对 Docker 环境支持、工具调用稳定性及多模型兼容性提出明确诉求。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日有 **3 个 PR 被合并或关闭**，显著提升了系统健壮性与用户体验：

- **#431（已关闭）**：修复 Jinja 模板因多系统消息顺序错误导致的崩溃问题，尤其影响 Qwen 系列模型通过 llama.cpp 调用时的稳定性。[🔗 PR #431](https://github.com/moltis-org/moltis/pull/431)  
- **#435（已关闭）**：优化 `exec` 工具行为，当未配置节点时隐藏 `node` 参数，避免 LLM 模型（如 Qwen3-Coder-Next-FP8）误判并重复执行失败命令。[🔗 PR #435](https://github.com/moltis-org/moltis/pull/435)  
- **#443（已关闭）**：由 @nadecancode 提交的 Git 相关修复，具体细节未详述，但标记为“Yachiyo git fixes”，推测涉及内部工作流或依赖管理优化。[🔗 PR #443](https://github.com/moltis-org/moltis/pull/443)

> ✅ 上述修复表明团队正积极解决多模型适配与工具调用一致性问题，为复杂 Agent 场景打下基础。

---

### 4. 社区热点  
**最活跃 Issue：#118 —— “Add node/npx to the Docker image to run MCPs”**  
- 创建者：@na-ji | 最后更新：2026-03-16 | 👍 2 赞同 | 评论 2 条  
- 核心诉求：当前 Docker 镜像缺少 Node.js 环境，导致无法直接在容器内运行基于 Node 的 MCP（Model Context Protocol）服务，限制了部署灵活性。  
- 分析：该需求反映用户对 **轻量级、自包含部署** 的强烈期待，尤其在边缘或受限环境中。若实现，将极大扩展 Moltis 在异构基础设施中的适用性。  
[🔗 Issue #118](https://github.com/moltis-org/moltis/issues/118)

---

### 5. Bug 与稳定性  
今日报告 **1 个新 Bug**，需关注：

- **#447（OPEN）— “Don’t allow bind on IPv6”**  
  - 作者：@meron1122 | 创建/更新：2026-03-16  
  - 描述：疑似存在 IPv6 绑定行为，可能引发网络配置冲突或安全风险（如意外暴露服务）。  
  - 严重程度：**中高风险**（涉及网络暴露面控制）  
  - 当前状态：**无对应 fix PR**，建议维护者优先审查网络模块配置逻辑。  
  [🔗 Issue #447](https://github.com/moltis-org/moltis/issues/447)

> ⚠️ 尽管无崩溃报告，但网络绑定策略属于基础设施安全范畴，应尽快澄清默认行为。

---

### 6. 功能请求与路线图信号  
结合开放 PR 与 Issue，以下功能可能进入下一版本规划：

| 功能方向 | 相关 PR/Issue | 状态 | 信号强度 |
|--------|---------------|------|--------|
| **文件共享能力增强** | #353（OPEN）— 新增 `send_document` 工具，支持 PDF/CSV/DOCX 等格式发送至频道 | 开发中 | ⭐⭐⭐⭐ |
| **多模型工具调用兼容性** | #444（OPEN）— 修复 Kimi K2.5 等模型对工具名的篡改问题 | 开发中 | ⭐⭐⭐⭐⭐（关键兼容性） |
| **Claude 路径兼容性** | #445（OPEN）— 支持含空格的 hook 路径 | 开发中 | ⭐⭐⭐（用户体验优化） |
| **Docker 环境完备性** | #118（OPEN）— 集成 Node.js 以支持 MCP | 讨论中 | ⭐⭐⭐⭐（部署刚需） |

> 💡 工具生态扩展（#353）与跨模型兼容性（#444）是当前最明确的产品演进方向。

---

### 7. 用户反馈摘要  
从 Issue 评论与 PR 描述中提炼关键用户声音：

- **痛点**：  
  - Docker 用户无法运行依赖 Node 的 MCP，被迫采用复杂 workaround（#118）  
  - 部分 LLM（如 Qwen、Kimi）对消息结构或工具名处理不一致，导致“看似正常实则失败”的静默错误（#431, #444）  
  - 路径含空格时 Claude 集成报错，影响非标准开发环境用户（#445）

- **满意点**：  
  - 团队对模板错误、参数混淆等边缘 case 响应迅速，修复质量高（#431, #435 获隐式认可）  
  - 安全设计意识强（如 #353 中引入 MIME 类型校验与扩展名黑名单）

---

### 8. 待处理积压  
以下事项长期未获响应，建议维护者关注：

- **#353（OPEN，2026-03-07 创建）**：`send_document` 工具 PR 已存在超10天，尚未 review 或合并。该功能需求明确且实现完整，延迟可能影响文件协作场景用户。  
  [🔗 PR #353](https://github.com/moltis-org/moltis/pull/353)

- **#118（OPEN，2026-02-14 创建）**：Docker 镜像缺少 Node.js 的问题已存在超1个月，虽非崩溃级 bug，但阻碍关键使用场景，需明确是否纳入路线图。  
  [🔗 Issue #118](https://github.com/moltis-org/moltis/issues/118)

> 📌 建议：对 #353 安排代码审查，对 #118 给出官方立场（接受/排期/拒绝），以管理社区预期。

---  
*数据来源：GitHub moltis-org/moltis，统计周期：2026-03-16 00:00 至 2026-03-17 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-17）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃38条，关闭12条）和 **50条 PR 更新**（待合并27条，已合并/关闭23条），显示出高强度开发与问题反馈节奏。尽管无新版本发布，但多个关键 Bug 修复与功能增强 PR 进入合并流程，项目整体处于快速迭代与稳定性优化阶段。社区对多模态支持、内存管理、跨平台兼容性及多 Agent 架构的关注度持续升温。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.0.7`，开发重点集中在修复近期暴露的稳定性问题与提升用户体验。

---

## 3. 项目进展

今日有 **23个 PR 被合并或关闭**，其中多个关键修复推动项目向前迈进：

- **#1608**（@aissac）：修复 `system_prompt` 为 `None` 时内存压缩崩溃问题，避免因空系统提示导致的运行时异常。
- **#1601**（@lcq225）：解决 Windows GBK 编码环境下日志输出含 emoji 字符时的崩溃问题，提升中文 Windows 用户稳定性。
- **#1600**（@webnoise）与 **#1598**（@Nioolek）：协同修复多 Agent 配置下因 `agents.defaults` 为 `None` 导致的应用启动失败问题，增强配置鲁棒性。
- **#1557**（@mvanhorn）：修复消息格式化后数量不匹配导致 `reasoning_content` 无法注入的问题，解决 API 调用失败根源。
- **#1554**（已合并）：修复钉钉富文本解析中生成空文本块引发的 LLM API 报错（#1303 关联）。

> 上述修复显著提升了飞书、钉钉等通道的稳定性，并改善了 Windows 与多 Agent 场景下的可用性。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) | 内置技能与 MCP 支持讨论 | 19 | 用户强烈希望预装常用技能（如 Tavily、文件操作）以降低部署门槛，提升开箱即用体验。 |
| [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书频道“延迟回复”问题 | 7 | 对话上下文错乱，Bot 回复滞后或重复，严重影响交互体验，疑似内存压缩机制缺陷。 |
| [#1304](https://github.com/agentscope-ai/CoPaw/issues/1304) | 钉钉多设备登录导致 session 过期 | 7 | 定时任务推送失败，需手动恢复，暴露通道状态同步机制脆弱性。 |

> 分析：用户对 **上下文一致性** 和 **通道稳定性** 的诉求集中爆发，反映出当前内存管理与通道连接保活机制存在短板。

### 🚀 高关注度 PR

- **#1476**（@ekzhu）：为语音消息添加本地 Whisper 转录支持，使非多模态模型也能处理语音输入，极大扩展应用场景。
- **#1544**（@YingchaoX）：引入 ACP（Agent Client Protocol）支持，允许 CoPaw 调用外部 Agent（如 OpenCode），迈向多 Agent 架构关键一步。
- **#1329**（@rowanchen-com）：实现可选 Web 后台认证机制，回应 #1588 安全诉求，提升生产环境部署安全性。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|-------------|
| 🔴 高 | [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | 消息压缩后数量不匹配导致 API 调用失败（GLM 报错 1210） | ✅ #1557 |
| 🔴 高 | [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) | 飞书对话“延迟回复”，上下文错乱 | ❌ 尚无直接修复 |
| 🔴 高 | [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270) | Agent 执行中途静默停止，无错误提示（token 超限） | ⚠️ 需优化内存压缩策略 |
| 🟠 中 | [#1593](https://github.com/agentscope-ai/CoPaw/issues/1593) | Windows GBK 编码下 emoji 日志崩溃 | ✅ #1601 |
| 🟠 中 | [#1383](https://github.com/agentscope-ai/CoPaw/issues/1383) | 飞书图片透传至非 vision 模型导致 400 报错 | ❌ 需增加模型能力检测与路由 |
| 🟠 中 | [#1563](https://github.com/agentscope-ai/CoPaw/issues/1563) | `write_file` 工具写入大文件被截断 | ❌ 疑似 token 或 buffer 限制 |

> 建议优先跟进 #1345 与 #1383，二者直接影响核心对话体验。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有 PR | 纳入可能性 |
|--------|-----------|--------|----------|
| 多 Agent 支持 | [#1587](https://github.com/agentscope-ai/CoPaw/issues/1587) | #1544（ACP）、#1598 | ⭐⭐⭐⭐☆ 高（架构已铺垫） |
| 中文本地化与文档 | [#1586](https://github.com/agentscope-ai/CoPaw/issues/1586) | 无 | ⭐⭐☆☆☆ 中（社区呼声高但无资源） |
| Web 后台认证 | [#1588](https://github.com/agentscope-ai/CoPaw/issues/1588) | #1329 | ⭐⭐⭐⭐⭐ 极高（PR 已就绪） |
| 自定义 media 存储路径 | [#1517](https://github.com/agentscope-ai/CoPaw/issues/1517) | 无 | ⭐⭐⭐☆☆ 中（影响部署灵活性） |
| Linux 桌面版 | [#1573](https://github.com/agentscope-ai/CoPaw/issues/1573) | 无 | ⭐☆☆☆☆ 低（非核心路线图） |

> ACP 与 Web 认证有望在下一版本中落地，多 Agent 支持进入实质推进阶段。

---

## 7. 用户反馈摘要

- **痛点**：
  - “飞书对话经常答非所问，像在复读上句话”（#1345）
  - “Windows 上跑着跑着就崩了，日志一堆乱码”（#1593）
  - “钉钉定时推送老掉线，得手动发消息才能恢复”（#1304）
  - “传个大文件就截断，工具根本没法用”（#1563）

- **满意点**：
  - “Docker 部署很方便，配置比别的 AI 助手简单”（#1277 评论）
  - “MCP 扩展机制设计得不错，自己写技能挺灵活”（#280 讨论）

- **典型场景**：
  - NAS 24小时运行 + 飞书/钉钉企业通知（#1610、#1304）
  - 本地 Ollama + 自定义技能做数据查询（#1602）
  - Windows 开发环境调试（#1593、#1597）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #918 | 飞书上传图片多模态模型无法识别 | 2026-03-08 | OPEN | 超10天未响应，影响 vision 用户体验 |
| Issue | #965 | 生成代码无法通过复制按钮复制 | 2026-03-08 | OPEN | UI/UX 缺陷，降低工具实用性 |
| PR | #1209 | 添加聊天路由选择器 | 2026-03-11 | OPEN | 功能重要但长期未 review，可能阻塞路由功能上线 |
| Issue | #1610 | 容器前台关闭导致任务中断 | 2026-03-16 | OPEN | 新报但涉及核心可靠性，需评估是否为 daemon 模式缺陷 |

> 建议维护者优先 review #1209 与 #918，二者分别影响功能完整性与多模态体验。

--- 

**报告生成时间**：2026-03-17  
**数据来源**：GitHub CoPaw 仓库公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-03-17）**

---

### 1. 今日速览  
过去24小时内，ZeptoClaw 社区保持中等活跃度：共新增/更新 2 个 Issues 和 3 个 Pull Requests，无新版本发布。开发重点集中在工具链修复（Podman 权限问题）、多模态内容处理缺陷，以及新 AI 提供商与通信协议的集成。整体项目处于功能扩展与稳定性优化并行推进阶段，核心维护者响应及时，社区贡献者持续参与关键模块开发。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
✅ **已合并 PR #355**：由 @rafaellin 提交的 [fix: image content handling in loop](https://github.com/qhkm/zeptoclaw/pull/355) 已关闭（状态为 merged/closed），解决了代理工具循环中图像路径未正确解析为 base64 的问题，提升了多轮对话中视觉内容处理的可靠性。  
⚠️ 注意：该 PR 虽已关闭，但 Issue #368 仍开放，可能表明修复未完全覆盖场景或需进一步验证。

---

### 4. 社区热点  
🔍 **Issue #368**：[bug: Images not resolved to base64 in agent tool loop iterations](https://github.com/qhkm/zeptoclaw/issues/368)（@rafaellin）  
尽管相关 PR #355 已合并，此 Issue 仍被重新创建或未自动关闭，反映出用户对多模态代理工作流中图像编码一致性的高度关注。该问题直接影响 LLM 提供商接收有效输入的能力，属于关键用户体验痛点，可能涉及边缘场景或回归风险，建议维护者优先验证修复完整性。

---

### 5. Bug 与稳定性  
🚨 **P2-high Bug**：  
- **[#369] fix: resolve Cargo permission denied in lint-container.sh rootless Podman**（@taqtiqa-mark）  
  描述：在 rootless Podman 环境下，`rust:slim` 镜像中 `/usr/local/cargo` 目录属主为 root，导致非 root 用户无法写入 registry/cache，阻碍 CI/开发环境中的 lint 流程。  
  状态：已提出具体修复方案（通过 `CARGO_HOME` 重定向 + volume remount），**尚无对应 PR**，需工具链维护者跟进实现。  
  链接：https://github.com/qhkm/zeptoclaw/issues/369

🟡 **潜在回归风险**：  
- Issue #368 与已合并 PR #355 内容高度重合，若 Issue 未关闭，可能暗示修复不完整或存在新触发条件，建议交叉验证。

---

### 6. 功能请求与路线图信号  
📌 **高优先级功能集成中**：  
- **[#364] feat(providers): add Google Vertex AI provider**（@qhkm）  
  新增企业级 Google Vertex AI 支持，利用现有 `reqwest` 和 `GeminiProvider` 解析逻辑，通过 `VERTEX_ACCESS_TOKEN` 实现认证。零新增依赖，符合项目轻量化设计哲学，**极可能纳入下一版本**。  
  链接：https://github.com/qhkm/zeptoclaw/pull/364

📌 **协议层扩展进行中**：  
- **[#356] feat(channels): ACP (Agent Client Protocol) stdio + HTTP implementation**（@starsy）  
  实现 ACP 协议的 stdio 与 HTTP 双通道支持，为 ZeptoClaw 提供标准化代理通信入口，增强与外部系统（如 acpx）的互操作性。该 PR 长期开放，表明架构设计仍在迭代，但方向明确，**预示未来将作为核心通信层发布**。  
  链接：https://github.com/qhkm/zeptoclaw/pull/356

---

### 7. 用户反馈摘要  
- **痛点**：多模态代理在工具循环中无法正确处理图像输入（Issue #368），导致 LLM 接收文件路径而非 base64 数据，破坏端到端视觉理解流程。  
- **开发体验诉求**：容器化开发环境（尤其 rootless Podman）下的权限配置问题（Issue #369）阻碍 CI/CD 与本地 lint，影响贡献者入门效率。  
- **满意度信号**：Vertex AI 提供商的集成设计（PR #364）获认可——复用现有组件、无依赖膨胀，体现架构一致性。

---

### 8. 待处理积压  
⏳ **长期开放 PR 需关注**：  
- **[#356] ACP channel implementation**（自 2026-03-13 起开放，4 天未合并）  
  虽非紧急，但作为协议层基础设施，建议明确集成时间表或拆分阶段性合并，避免阻塞生态集成。  
  链接：https://github.com/qhkm/zeptoclaw/pull/356

⏳ **未响应 Issue**：  
- **[#369] Cargo permission denied in rootless Podman**  
  已提供清晰修复路径，但尚无 PR 跟进，建议分配至工具链维护者或标记为 `good first issue` 吸引社区贡献。  
  链接：https://github.com/qhkm/zeptoclaw/issues/369

---  
*数据截止：2026-03-17 00:00 UTC | 来源：GitHub ZeptoClaw 仓库*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-17）**

---

### 1. 今日速览  
EasyClaw 在过去24小时内整体活跃度中等，社区互动集中于版本升级后的兼容性问题反馈。项目发布 v1.7.0 新版本，但随即收到 Windows 平台连接异常的 Bug 报告，显示新版本可能存在跨平台适配疏漏。尽管无新 PR 提交，Issue 讨论量达3条，其中1条已关闭，反映维护者对历史问题的响应效率尚可。当前需重点关注新版本稳定性与文档完善需求。

---

### 2. 版本发布  
**v1.7.0 正式发布**  
本次更新未在 Release 说明中详述功能变更，但从 Issue #18 可推断，新版本可能涉及网络连接逻辑或依赖库升级，导致 Windows 用户从 v1.6.8 升级后出现连接失败问题。  
⚠️ **注意**：Release 页面提供了 macOS 用户绕过 Gatekeeper 警告的操作指引（通过 Terminal 执行 `xattr -cr` 命令），但未同步更新 Windows 或 Linux 的安装说明，存在文档覆盖不全风险。  
建议用户在升级前备份配置，并关注后续热修复。  
🔗 [v1.7.0 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)

---

### 3. 项目进展  
过去24小时无 Pull Request 合并或关闭，开发层面暂无可见代码级推进。项目整体处于“发布后观察期”，重心转向问题收集与稳定性验证。

---

### 4. 社区热点  
**#18 [OPEN] Windows系统，从1.6.8升级到1.7.0后链接不上了**（4条评论）  
该 Issue 是当前最活跃的讨论点，用户 @slowayear 提供了详细截图，描述升级后完全无法建立连接。其他用户未明确附和，但高评论量表明此问题可能影响部分 Windows 环境。  
🔍 **背后诉求**：用户期望新版本保持向后兼容性，尤其对跨平台行为一致性有强依赖。此问题若属实，可能涉及网络模块重构或依赖项变更未充分测试。  
🔗 [Issue #18](https://github.com/gaoyangz77/easyclaw/issues/18)

---

### 5. Bug 与稳定性  
| 严重程度 | 问题描述 | 状态 | 是否有 Fix PR |
|--------|--------|------|-------------|
| ⚠️ 高 | Windows 平台升级至 v1.7.0 后连接功能失效（Issue #18） | 开放中，4条评论 | ❌ 无 |
| ✅ 低 | OpenAI OAuth 认证异常（Issue #16） | 已关闭，2条评论 | —（已解决） |

> 注：Issue #16 虽曾引发关注，但已于昨日关闭，推测维护者已内部修复或确认为用户配置问题。

---

### 6. 功能请求与路线图信号  
**#17 [OPEN] 希望大哥出个Windows 版本的启动和打包教程！**  
用户 @584731180 明确提出对 Windows 端开发/部署文档的需求，反映出项目在开发者体验（DevEx）层面的短板。  
📌 **信号分析**：该请求虽非核心功能，但指向“降低贡献门槛”和“提升 Windows 生态支持”的长期价值。结合 v1.7.0 发布后缺乏 Windows 安装说明的现状，此需求极有可能被纳入下一版本的文档更新计划。  
🔗 [Issue #17](https://github.com/gaoyangz77/easyclaw/issues/17)

---

### 7. 用户反馈摘要  
- **痛点**：  
  - Windows 用户遭遇升级后连接中断，缺乏回滚指南或临时解决方案（Issue #18）  
  - 多平台安装说明不统一，macOS 有详细绕过 Gatekeeper 指引，Windows/Linux 缺失（Release 页面 + Issue #17）  
- **使用场景**：  
  - 用户依赖 EasyClaw 进行日常 AI 服务调用，对稳定性要求高，尤其关注跨版本升级的无缝体验  
- **满意度**：  
  - 对 macOS 安全提示的处理说明表示认可（Release 中提供解决方案）  
  - 对 OAuth 问题快速关闭持正面态度（Issue #16）

---

### 8. 待处理积压  
当前无长期未响应（>7天）的高优先级 Issue。但以下事项建议维护者优先处理：  
- **Issue #18（Windows 连接故障）**：需尽快复现并确认是否为普遍性问题，若属实应发布 hotfix 或回退说明  
- **Issue #17（Windows 教程请求）**：虽非紧急，但有助于扩大开发者社区，建议纳入 v1.8.0 文档计划  

> 建议：在下一个版本中补充 Windows 安装/调试指南，并加强跨平台测试流程。

---  
*数据来源：GitHub EasyClaw 仓库（截至 2026-03-17 00:00 UTC）*

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*