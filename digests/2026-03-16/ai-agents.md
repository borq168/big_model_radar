# OpenClaw 生态日报 2026-03-16

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-16 01:07 UTC

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

# OpenClaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

OpenClaw 社区在2026年3月15日至16日期间保持极高活跃度，24小时内共产生 **500条 Issues 更新**（新开/活跃456条，关闭44条）和 **500条 PR 更新**（待合并390条，已合并/关闭110条），显示出强烈的开发参与和问题反馈意愿。尽管无新版本发布，但多个关键回归 Bug 和安全增强功能正在积极修复中。社区对 **v2026.3.12 引入的内存泄漏、CLI握手失败、Telegram心跳崩溃**等问题高度关注，同时围绕 **exec 安全审批、模型路由、多通道消息同步**等核心能力展开深入讨论。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版本仍为 v2026.3.12，但该版本已暴露出多个严重回归问题（见第5节），建议用户谨慎升级或回滚至 v2026.3.8。

---

## 3. 项目进展

今日有 **110个 PR 被合并或关闭**，重点进展包括：

- **🔧 关键修复合并**：
  - [`#47719`](https://github.com/openclaw/openclaw/pull/47719)：修复 SIGUSR1 重载时子代理会话丢失问题，避免静默中断 LLM 推理流程。
  - [`#47714`](https://github.com/openclaw/openclaw/pull/47714)：为 OpenRouter 添加 Mistral 模型专用工具调用 ID 格式支持（`strict9`），解决非合规 ID 导致的调用失败。
  - [`#47708`](https://github.com/openclaw/openclaw/pull/47708)：补充 OpenRouter 对 Mistral 模型的提示配置，提升兼容性。
  - [`#47654`](https://github.com/openclaw/openclaw/pull/47654)：配置解析改为“忽略未知字段+警告”而非崩溃退出，显著改善配置错误时的用户体验。

- **🚀 功能推进**：
  - [`#47696`](https://github.com/openclaw/openclaw/pull/47696)：引入 `/trust` 和 `/untrust` 命令，实现 exec 工具的临时安全提权，缓解永久审批疲劳。
  - [`#47706`](https://github.com/openclaw/openclaw/pull/47706)：新增 ARM/低内存设备的自适应资源限制机制，优化边缘部署性能。
  - [`#47713`](https://github.com/openclaw/openclaw/pull/47713)：启动“扩展宿主”架构重构，将插件运行时逻辑从核心模块剥离，为未来插件隔离打下基础。

---

## 4. 社区热点

以下 Issues 因高评论数/反应数成为今日焦点：

| Issue | 主题 | 热度 | 核心诉求 |
|------|------|------|--------|
| [`#45064`](https://github.com/openclaw/openclaw/issues/45064) | v2026.3.12 内存泄漏导致 CLI 崩溃 | 🔥🔥🔥 (25评论) | 紧急修复 OOM，恢复基本命令可用性 |
| [`#7649`](https://github.com/openclaw/openclaw/issues/7649) | Matrix 机器人无法验证自身账户（E2EE） | 🔥🔥 (23评论, 👍4) | 支持端到端加密通道参与 |
| [`#2317`](https://github.com/openclaw/openclaw/issues/2317) | 请求添加 SearXNG 作为 web_search 备用搜索引擎 | 🔥🔥 (13评论, 👍19) | 突破 Brave Search 额度限制，提升搜索可靠性 |
| [`#7916`](https://github.com/openclaw/openclaw/issues/7916) | 支持加密存储 API 密钥 | 🔥 (14评论, 👍10) | 提升 secrets 安全性，防止明文泄露 |

> **分析**：用户强烈关注 **稳定性（OOM）、安全性（密钥管理）、多通道兼容性（Matrix E2EE）** 和 **功能冗余（搜索 fallback）**，反映出生产环境对鲁棒性和安全性的高要求。

---

## 5. Bug 与稳定性

按严重程度排序的今日关键 Bug：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|-------------|
| 🔴 **Critical** | [`#45064`](https://github.com/openclaw/openclaw/issues/45064) | v2026.3.12 基础命令（`gateway status`, `doctor`）触发 JS 堆 OOM | ❌ 尚无公开 PR |
| 🔴 **Critical** | [`#45772`](https://github.com/openclaw/openclaw/issues/45772) | Gateway 心跳定时器触发1-2次后停止（v2026.3.8 引入） | ❌ 尚无公开 PR |
| 🔴 **Critical** | [`#45504`](https://github.com/openclaw/openclaw/issues/45504) | CLI 命令（`devices list/approve`）在本地回环网关失败，Web UI 正常 | ❌ 尚无公开 PR |
| 🟠 **High** | [`#45759`](https://github.com/openclaw/openclaw/issues/45759) | Telegram typing keepalive 循环无断路器，网络故障时导致网关崩溃 | ❌ 尚无公开 PR |
| 🟠 **High** | [`#41778`](https://github.com/openclaw/openclaw/issues/41778) | `openclaw-message` 在 4GB 服务器上 OOM（自 v2026.3.7 起） | ❌ 尚无公开 PR |
| 🟡 **Medium** | [`#45289`](https://github.com/openclaw/openclaw/issues/45289) | Telegram 反应通知未接收（配置无效） | ✅ [`#40384`](https://github.com/openclaw/openclaw/pull/40384) 已提交修复 |

> **注**：多个关键回归问题集中于 **v2026.3.8 至 v2026.3.12** 版本，建议团队优先发布 hotfix。

---

## 6. 功能请求与路线图信号

以下功能请求获得高社区支持，且已有相关 PR 推进，有望纳入下一版本：

- **✅ 高优先级采纳**：
  - **SearXNG 搜索备用支持**（[`#2317`](https://github.com/openclaw/openclaw/issues/2317), 👍19）→ 已有社区讨论，待 PR 提交。
  - **Tavily 搜索 provider 支持**（[`#12034`](https://github.com/openclaw/openclaw/issues/12034), 👍11）→ 明确需求，技术可行性强。
  - **Masked Secrets（掩码密钥）**（[`#10659`](https://github.com/openclaw/openclaw/issues/10659), 👍4）→ 安全刚需，与 [`#7916`](https://github.com/openclaw/openclaw/issues/7916) 形成互补。

- **🔄 架构演进方向**：
  - **Extension Host 插件运行时隔离**（[`#47713`](https://github.com/openclaw/openclaw/pull/47713)）→ 长期架构目标，今日启动 foundational work。
  - **Per-agent 插件槽覆盖**（[`#25359`](https://github.com/openclaw/openclaw/issues/25359)）→ 多代理场景刚需，待进一步设计。

---

## 7. 用户反馈摘要

从 Issues 评论提炼的真实用户声音：

- **痛点**：
  > “升级后 `openclaw doctor` 直接 OOM，完全无法诊断问题” — @binbin1213（[#45064](https://github.com/openclaw/openclaw/issues/45064)）
  >
  > “Telegram 能发消息但收不到用户回复，像在单向广播” — @Quanle-Studio（[#45714](https://github.com/openclaw/openclaw/issues/45714)）
  >
  > “API 密钥明文存 config，团队审计通不过” — @agaleraib（[#7916](https://github.com/openclaw/openclaw/issues/7916)）

- **满意点**：
  > “Control UI 的会话管理比之前清晰多了” — 隐含于多通道路由讨论
  >
  > “exec 审批流程终于有改进思路了” — 对 [`#47696`](https://github.com/openclaw/openclaw/pull/47696) 的积极预期

- **使用场景**：
  - 企业多代理隔离部署（[#10004](https://github.com/openclaw/openclaw/issues/10004)）
  - 低资源边缘设备运行（[#47706](https://github.com/openclaw/openclaw/pull/47706)）
  - 跨平台消息同步（Discord/Telegram/WebChat 实时同步需求）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

| 类型 | ID | 标题 | 创建时间 | 状态 |
|------|----|------|--------|------|
| Issue | [`#13688`](https://github.com/openclaw/openclaw/issues/13688) | Discord WebSocket 1005/1006 断开 + 无界退避 | 2026-02-10 | `stale` 标签，14评论未闭环 |
| Issue | [`#3181`](https://github.com/openclaw/openclaw/issues/3181) | 心跳循环引发重试风暴（高 CPU/成本） | 2026-01-28 | `stale` 标签，12评论未修复 |
| Issue | [`#27473`](https://github.com/openclaw/openclaw/issues/27473) | 非回环 Control UI 需 allowedOrigins 配置 | 2026-02-26 | `stale` 标签，10评论，影响 Podman 部署 |
| PR | [`#16554`](https://github.com/openclaw/openclaw/pull/16554) | 防止工具执行超时导致会话死锁 | 2026-02-14 | `stale` 标签，未合并 |

> **建议**：对标记 `stale` 但高影响的问题（如 Discord 连接稳定性、心跳风暴）应重新评估优先级，避免技术债累积。

---

**报告生成时间**：2026-03-16  
**数据来源**：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-03-16**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **高活跃度、强分化、快速迭代** 的态势。以 OpenClaw 为核心的“Claw 系”项目（Zeroclaw、PicoClaw、NanoClaw 等）形成技术谱系，围绕多通道集成、安全沙箱、多智能体编排等方向展开深度竞争；非 Claw 系项目如 IronClaw、CoPaw、TinyClaw 则聚焦垂直场景（企业集成、轻量化部署、可靠性工程），推动生态多元化。整体上，**稳定性修复与架构重构并行，安全合规与多模型支持成为跨项目共识**，反映出行业从“功能验证”向“生产就绪”转型的关键阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 新版本发布 | 健康度评估 |
|------|---------------|-----------|-------------|-------------|
| **OpenClaw** | 500 | 500 | ❌ 无 | ⭐⭐⭐☆☆（高活跃但严重回归 Bug 拖累） |
| **NanoBot** | 25 | 58 | ❌ 无 | ⭐⭐⭐⭐☆（稳健迭代，成本优化显著） |
| **Zeroclaw** | 39 | 50 | ✅ 9 个 beta 版 | ⭐⭐⭐⭐☆（快速演进，企业集成领先） |
| **PicoClaw** | 17 | 59 | ✅ nightly 构建 | ⭐⭐⭐⭐☆（高 PR 密度，架构重构积极） |
| **NanoClaw** | 15 | 37 | ❌ 无 | ⭐⭐⭐☆☆（跨平台修复为主，战略方向待明确） |
| **IronClaw** | 26 | 50 | ❌ 无 | ⭐⭐⭐⭐⭐（安全加固扎实，可靠性突出） |
| **LobsterAI** | 3 | 17 | ❌ 无 | ⭐⭐☆☆☆（用户反馈滞后，体验问题严重） |
| **TinyClaw** | 0 | 9 | ❌ 无 | ⭐⭐⭐⭐☆（无 Issue 压力，专注底层加固） |
| **Moltis** | 5 | 7 | ❌ 无 | ⭐⭐⭐⭐☆（质量保障严谨，技术债清理有序） |
| **CoPaw** | 37 | 35 | ❌ 无 | ⭐⭐⭐☆☆（功能需求旺盛，稳定性存疑） |
| **ZeptoClaw** | 4 | 6 | ❌ 无 | ⭐⭐⭐⭐☆（核心维护高效，企业集成前瞻） |
| **EasyClaw** | 0 | 0 | ✅ v1.6.8（文档更新） | ⭐⭐⭐☆☆（维护型项目，低活跃但响应及时） |

> 注：健康度综合考量开发活跃度、Bug 响应速度、架构清晰度与用户反馈闭环能力。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 作为 **生态核心参照项目**，具备以下特征：
- **优势**：社区规模最大（单日 500+ Issues/PRs）、功能最全面（支持 10+ 通道、exec 安全审批、多代理路由），是其他“Claw 系”项目的主要 upstream。
- **技术路线差异**：坚持“一体化架构”，强调 CLI + Web UI + 多通道同步的深度集成，与 IronClaw 的“模块化韧性架构”、TinyClaw 的“极简 Agent 运行时”形成对比。
- **社区规模**：远超同类项目（次高活跃度的 CoPaw 仅 37 Issues），但 **v2026.3.12 引入的 OOM、CLI 握手失败等严重回归问题** 正削弱其稳定性口碑，部分用户转向 Zeroclaw 或 PicoClaw。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多模型/多提供商支持** | OpenClaw、NanoClaw、IronClaw、ZeptoClaw、LobsterAI | 摆脱对 Anthropic 的依赖，支持 Ollama、Gemini、Vertex AI、LM Studio 等 |
| **安全沙箱与权限控制** | Zeroclaw（能力型访问控制）、Moltis（侧边文件安全写入）、OpenClaw（exec 临时提权） | 防止越权访问、间接提示注入、配置覆盖 |
| **多通道兼容性与稳定性** | CoPaw（飞书/QQ 文件传输）、PicoClaw（Telegram 多 Bot）、IronClaw（Feishu WASM） | 解决消息丢失、断连重试、E2EE 支持 |
| **成本与用量透明化** | Zeroclaw、NanoBot、OpenClaw | 请求 token 消耗追踪、成本面板、日志轮转 |
| **浏览器自动化与 MCP 集成** | Moltis、LobsterAI、CoPaw | 支持 Playwright、安全侧边文件、MCP 工具链 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 全能型个人助手 | 技术极客、多平台用户 | 单体架构，强 CLI 集成 |
| **Zeroclaw** | 企业级多智能体编排 | 企业知识管理、自动化团队 | Swarm 架构，上下文压缩，M365/Notion 集成 |
| **IronClaw** | 生产级可靠性与安全 | DevOps、安全敏感场景 | 混沌工程、SSRF 防护、OAuth 加固 |
| **PicoClaw** | 轻量可扩展 Agent 框架 | 开发者、插件贡献者 | 事件驱动 Agent Loop（提案中），多 Provider 路由 |
| **TinyClaw** | 极简多代理协作 | 本地部署用户、研究者 | 去中心化团队消息、配置安全隔离 |
| **CoPaw** | 多通道办公自动化 | 企业办公用户 | 飞书/钉钉/QQ 深度集成，cron 任务调度 |
| **Moltis** | 浏览器沙箱与技能安全 | Web 自动化开发者 | 会话隔离浏览器、安全侧边文件机制 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比，功能扩张）：  
  **Zeroclaw**（9 个 beta 发布）、**PicoClaw**（59 PRs）、**CoPaw**（37 Issues）—— 聚焦新功能落地与架构演进。
  
- **质量巩固阶段**（Bug 修复为主，低 Issue 数）：  
  **IronClaw**（安全加固）、**Moltis**（沙箱稳定性）、**TinyClaw**（配置安全）—— 强调生产可靠性。

- **维护/转型阶段**（低活跃或战略调整）：  
  **LobsterAI**（用户反馈未闭环）、**EasyClaw**（文档更新为主）、**NanoClaw**（向多运行时过渡）。

---

## 7. 值得关注的趋势信号

1. **从“单一模型”到“多提供商故障转移”已成刚需**：  
   超过 6 个项目明确提出支持 Ollama/Gemini/Vertex AI，反映用户对供应商锁定的深度担忧（如 Anthropic 封禁 OpenClaw 用户）。

2. **“安全-by-default”架构成为企业级项目分水岭**：  
   Zeroclaw 的能力型访问控制、IronClaw 的 SSRF 防护、Moltis 的侧边文件审计，表明安全不再是附加功能，而是核心设计约束。

3. **浏览器自动化与 MCP 协议是下一轮能力竞赛焦点**：  
   多个项目尝试集成 Playwright 或 MCP，预示 AI 智能体将从“聊天助手”向“主动 Web Agent”演进。

4. **文档与部署体验直接影响社区留存**：  
   EasyClaw 通过文档解决 macOS Gatekeeper 问题、ZeptoClaw 硬编码 repo slug 引发协作噪音，说明**非代码体验已成为开源项目健康度关键指标**。

> **对开发者的建议**：优先选择具备明确安全边界、多模型支持路线图及活跃社区响应的项目；在架构设计中预留 MCP 与浏览器自动化接口，以应对快速演进的生态需求。

---  
**分析师备注**：本阶段生态呈现“核心项目承压、垂直项目崛起”格局，建议关注 Zeroclaw、IronClaw、PicoClaw 的技术路线，其平衡了创新与稳定性，更可能定义下一代个人 AI 助手标准。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-16）

---

## 1. 今日速览

NanoBot 社区在24小时内保持高度活跃，共产生 **25条 Issues 更新** 和 **58条 PR 更新**，其中 **21个 PR 被合并或关闭**，显示出积极的代码迭代节奏。尽管无新版本发布，但多个关键功能正在推进，包括多智能体路由、交互式配置向导、Web 搜索后端可插拔化等。社区对技能管理、会话控制、通道兼容性及成本控制等实际使用痛点反馈集中，反映出项目已进入深度应用阶段。

---

## 2. 版本发布

**无新版本发布**。当前主线仍在持续集成新功能与修复，预计下一版本将包含多智能体支持、交互式配置向导（`nanobot onboard`）及 Web 搜索后端抽象等特性。

---

## 3. 项目进展

今日有 **21个 PR 被合并或关闭**，重点进展包括：

- ✅ **#2037 [CLOSED]**：修复 `restrictToWorkspace=true` 时内置技能无法访问的问题（[链接](https://github.com/HKUDS/nanobot/pull/2037)），提升了安全策略下的功能可用性。
- ✅ **#2066 [CLOSED]**：为 Web 搜索添加 Gemini 回退机制，增强搜索鲁棒性（[链接](https://github.com/HKUDS/nanobot/pull/2066)）。
- ✅ **#2034 [CLOSED]**：钉钉通道多媒体支持增强（[链接](https://github.com/HKUDS/nanobot/pull/2034)），扩展了企业 IM 场景能力。
- ✅ **#670 [CLOSED]**：集成 open-skills 库以降低 token 使用量约 98%（[链接](https://github.com/HKUDS/nanobot/pull/670)），显著优化运行成本。

此外，多个高价值 PR 仍处于开放状态，如多智能体配置（#2047）、ACP 运行时后端（#2073）、事件 Webhook 服务（#2055）等，表明架构正向模块化与可扩展方向演进。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论：

- 🔥 **#1719 [CLOSED]**：Web 搜索后端应支持可替换（[链接](https://github.com/HKUDS/nanobot/issues/1719)）  
  用户长期呼吁解耦 Brave 硬编码，已有 15+ 相关 PR 尝试未果。该 Issue 获 11 👍，反映对搜索生态兼容性的强烈需求。

- 🔥 **#359 [OPEN]**：请求官方支持 MCP（Model Context Protocol）工具（[链接](https://github.com/HKUDS/nanobot/issues/359)）  
  获 8 👍，用户希望接入标准化工具协议以兼容数据库、API 等外部服务，是迈向企业级集成的重要信号。

- 🔥 **#1932 [OPEN]**：技能不支持禁用，只能删除（[链接](https://github.com/HKUDS/nanobot/issues/1932)）  
  “good first issue”标签下已有对应 PR #1934 实现事件驱动钩子系统，社区期待快速落地。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #143 [OPEN] | 文件系统工具未强制执行 `restrict_to_workspace`，存在越权访问风险（[链接](https://github.com/HKUDS/nanobot/issues/143)） | ❌ 无 |
| ⚠️ 高 | #2061 [OPEN] | 在 workspace 内复制文件操作永不成功，agent 陷入 list/read 循环（[链接](https://github.com/HKUDS/nanobot/issues/2061)） | ❌ 无 |
| ⚠️ 中 | #508 [OPEN] | Ollama 本地模型响应格式错误，返回原始 JSON 而非解析文本（[链接](https://github.com/HKUDS/nanobot/issues/508)） | ❌ 无 |
| ⚠️ 中 | #1956 [OPEN] | 命令行输出中 “nanobot is thinking...” 字段未被清除（[链接](https://github.com/HKUDS/nanobot/issues/1956)） | ❌ 无 |

> 注：#1822（Nvidia 模型支持失效）虽已关闭，但需关注是否影响特定硬件用户。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求：

- ✅ **技能启用/禁用机制**（#1932 → #1934）：已进入实现阶段，预计下版可用。
- ✅ **多智能体路由与委派**（#2072 → #2041、#2064）：多个 PR 并行开发，架构逐步成型。
- ✅ **交互式配置向导**（#2018、#2019）：通过 `nanobot onboard` 提供 CLI 配置体验，降低新手门槛。
- ✅ **Token/Cost 使用日志**（#2020）：虽无 PR，但需求明确，适合纳入监控模块。
- 🔄 **Web 搜索后端抽象**（#1719）：虽 Issue 关闭，但 #2066 的 fallback 机制是迈向可插拔的第一步。

潜在路线图方向：**多智能体协作架构**、**企业级安全合规**（如 workspace 限制）、**成本透明化**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “飞书 session 文件越来越大，撑爆上下文，只能手动删文件”（#2062）→ 缺乏会话重置机制。
  - “WeCom 配置后仍提示 ‘No Channels Enabled’”（#1988）→ 通道初始化流程不健壮。
  - “无法远程通过 QQ 获取电脑文件”（#2025）→ 离线/远程访问能力缺失。

- **满意点**：
  - 对“交互式配置向导”表示欢迎（#2018），认为“终于不用手动改 JSON 了”。
  - 对 open-skills 集成（#670）高度认可，“token 用量降了98%，太实用了”。

- **使用场景**：
  - 企业 IM（飞书、钉钉、企业微信）集成为主流场景。
  - 本地 Ollama + 多模态模型（如 Qwen3.5）搭配使用日益增多。
  - 研究人员关注轻量级自主代理架构（#2052）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- ⏳ **#143 [Security]**：文件系统工具安全漏洞（2026-02-05 提出，近1个月未处理）  
  涉及越权访问，属高危项，需紧急评估。
- ⏳ **#359 [Feature]**：MCP 工具协议支持（2026-02-08 提出，超1个月）  
  社区呼声高，影响生态扩展性。
- ⏳ **#508 [Bug]**：Ollama 响应格式错误（2026-02-11 提出）  
  影响本地部署用户体验，需兼容性修复。
- ⏳ **#126 [Enhancement]**：GitHub Actions 自动构建 Docker 镜像（2026-02-05 提出）  
  已有成功实践（birdxs/nanobot），可推动官方采纳。

> 建议：对“good first issue”类（如 #1932、#1956）加速合并，提升社区贡献者体验。

--- 

**报告生成时间**：2026-03-16  
**数据来源**：GitHub HKUDS/nanobot 仓库公开数据

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

Zeroclaw 在 2026-03-16 继续保持高强度开发节奏，社区活跃度显著上升。过去24小时内共处理 **39 条 Issues**（新开/活跃 19，关闭 20）和 **50 条 PRs**（待合并 16，已合并/关闭 34），并发布 **9 个新版本**，主要集中在 `v0.3.4-beta` 系列。核心团队与社区贡献者协作紧密，重点推进多智能体编排、安全策略细粒度控制及企业级集成功能。项目整体处于快速迭代与功能扩展阶段，技术债务逐步清理，但部分稳定性问题（如 ARM64 崩溃、Web 面板缺失）仍需关注。

---

## 2. 版本发布

### 最新发布：v0.3.4-beta.232（及前序 beta 版本）
- **核心更新内容**：
  - **Agent 层**：工具调用失败原因现在在聊天进度消息中可见，提升调试透明度。
  - **Context 管理**：引入基于 token 的上下文压缩、持久化会话与 LLM 上下文合并机制，优化长对话性能与成本。
  - **Hands 模块**：新增自主知识积累型智能体包，支持自我学习与记忆增强。
  - **Swarm 多智能体系统**：实现多智能体协同编排，修复 Mistral 工具调用兼容性问题，恢复 `--intera` 参数支持。
- **破坏性变更**：无明确破坏性变更，但 `v0.3.4-beta` 系列对上下文处理逻辑有重构，建议用户测试后升级。
- **迁移建议**：若使用 Mistral 提供商或运行多智能体任务，建议升级至 `v0.3.4-beta.232` 以获得稳定性修复。

> 📌 [完整更新日志](https://github.com/zeroclaw-labs/zeroclaw/compare/v0.3.2...HEAD)

---

## 3. 项目进展

今日多个关键 PR 被合并，推动项目向企业级与多模态能力迈进：

- **#3645**：修复 headless browser 在 service 模式下崩溃问题，解决 systemd/OpenRC 环境变量缺失导致的 Chromium 启动失败。
- **#3646**：移除 `zeroclaw onboard --interactive` 标志，改为自动检测 TTY，提升 CLI 体验一致性。
- **#3619**：将 `query_classification` 配置实际接入 channel 消息处理流程，实现基于内容的模型路由。
- **#3501**：修复 Anthropic 提供商因连续同角色消息导致的 500 错误，提升 Claude 模型稳定性。

此外，多个新功能 PR 进入待合并状态，包括：
- **#3654**：HMAC-SHA256 安全节点通信层（重提 #3612）
- **#3653**：Microsoft 365 Graph API 集成（重提 #3605）
- **#3649**：基于能力的工具访问控制（Capability-based tool access control）

> ✅ 项目整体向“安全、可扩展、企业就绪”方向稳步前进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 链接 |
|------|------|--------|------|
| #1478 | 安全策略过于严格，导致功能不可用 | 36 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) |
| #3565 | 请求添加 token 使用量与成本追踪面板 | 7 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/3565) |
| #2693 | Mistral 提供商返回 422 错误 | 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) |

**分析**：
- **#1478** 反映核心矛盾：用户期望“完全放开权限”以本地使用，而项目坚持默认安全策略。背后诉求是提供**可配置的安全沙箱开关**或**开发者模式**。
- **#3565** 显示付费 API 用户对成本透明度的强烈需求，可能推动未来集成监控仪表盘。
- **#2693** 虽已关闭，但表明 Mistral 兼容性仍需持续维护。

---

## 5. Bug 与稳定性

### ⚠️ 严重问题（S0/S1）

| Issue | 描述 | 严重性 | 状态 | Fix PR |
|------|------|--------|------|--------|
| #3537 | ARM64 设备（如 Raspberry Pi 4）上 daemon 静默崩溃 | S0（数据丢失/安全风险） | Open | ❌ 无 |
| #3580 | Web 面板不可用，提示需手动构建 | S1（工作流阻塞） | Closed | ✅ #3639（文档补充） |
| #3573 | Ubuntu 22.04 上 glibc 版本不兼容 + `--interactive` 缺失 | S0 | Closed | ✅ #3646 |
| #3572 | Mistral 提供商工具调用失败 | S1 | Closed | ✅ #3501（间接修复） |

### 🟡 中等问题（S2/S3）

- #3643：本地模型使用 XML dispatcher 时工具 schema 被注入两次（S2）
- #3647：QQ 频道 Markdown 未渲染（S3）
- #3513：Agent 回复多条消息而非单条（S3）

> 🔍 **重点关注**：ARM64 崩溃问题（#3537）尚未有修复 PR，影响边缘设备用户，建议优先排查。

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有对应 PR）

| 功能 | Issue | PR | 状态 |
|------|------|-----|------|
| 企业 SSO/MFA 认证（Nevis IAM） | - | #3651 | Open |
| Microsoft 365 集成 | - | #3653 | Open |
| Notion 数据库轮询与 API 工具 | #3650 | #3650 | Open |
| 能力型工具访问控制 | #3602 | #3649 | Open |
| InboxAPI 邮件通道 | #3385 | #3385 | Open |

### 用户驱动需求（无 PR，但高呼声）

- **Token 成本追踪面板**（#3565）：多个付费 API 用户提出，可能成为 v0.4 核心特性。
- **“完整”Docker 镜像**（#3642）：降低非技术用户入门门槛，建议 CI 构建 `zeroclaw-full` 镜像。
- **QQ Markdown 渲染支持**（#2958）：中文用户高频需求，需前端与 channel 层协同。

> 📈 路线图趋势：**企业集成**（M365、Notion、SSO）、**安全精细化**（能力控制）、**用户体验优化**（成本、UI）将成为下一阶段重点。

---

## 7. 用户反馈摘要

### ✅ 满意点
- “Swarm 多智能体编排让我的自动化工作流效率翻倍。” —— 来自 swarm 功能使用者
- “上下文压缩显著降低了 token 消耗，长对话不再中断。” —— 上下文模块受益者

### ❌ 痛点
- “我只是一个人在家用，为什么不能关掉所有安全限制？” —— #1478 用户
- “Docker 镜像越来越大，但 Web 面板还要自己 build？” —— #3580 用户
- “Raspberry Pi 上根本跑不起来，文档也没说清楚。” —— #3537 用户

### 使用场景
- 个人自动化助手（本地部署，低权限需求）
- 企业知识管理（Notion/M365 集成）
- 多平台消息聚合（Telegram/Matrix/QQ）

---

## 8. 待处理积压

### 🔔 需维护者关注事项

| 类型 | 编号 | 标题 | 延迟天数 | 建议行动 |
|------|------|------|----------|----------|
| Issue | #3537 | ARM64 daemon 静默崩溃 | 1 天 | 优先复现并分配资源修复 |
| Issue | #3565 | Token 成本追踪面板 | 1 天 | 评估纳入 v0.4 路线图 |
| PR | #2948 | Cortex Memory 后端集成 | 8 天 | 审查技术方案，决定是否合并 |
| PR | #3385 | InboxAPI 邮件通道 | 3 天 | 测试邮件流稳定性 |

> 💡 **建议**：建立“ARM64 支持”专项 issue，并考虑发布 `zeroclaw-lite` 或 `zeroclaw-dev` 变体以满足不同用户群体需求。

---

**报告生成时间**：2026-03-16  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)  
**分析师**：AI 开源项目观察员

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

PicoClaw 在 2026-03-16 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内新增 **17 条 Issues**（全部为新增/活跃，无关闭），提交 **59 条 Pull Requests**（其中 5 条已合并，54 条待审），并发布了一个 **nightly 构建版本**。整体开发节奏紧凑，重点聚焦于 **Agent 架构重构、多通道支持增强、Provider 稳定性修复** 三大方向，反映出项目正从功能堆叠向可观测性、可扩展性与生产就绪性演进。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260316.f2addff0`
- **类型**：自动化 nightly 构建（非稳定版）
- **说明**：此版本为开发主干（main）的每日快照，包含截至 2026-03-16 的所有最新提交，可能包含未充分测试的变更。
- **使用建议**：仅推荐开发者和早期测试者用于验证新功能或修复，**生产环境慎用**。
- **变更范围**：涵盖自 `v0.2.3` 标签以来的全部提交，包括 Agent 重试机制、Telegram 多 Bot 支持、Anthropic 模型 ID 规范化等关键修复。
- **完整变更日志**：[点击查看](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

> ⚠️ 无破坏性变更公告，但 nightly 版本本身存在潜在不稳定性。

---

## 3. 项目进展

今日有 **5 个 PR 被合并**，推动多项关键能力落地：

| PR | 类型 | 关键进展 |
|----|------|--------|
| [#1626](https://github.com/sipeed/picoclaw/pull/1626) | Bug Fix | 修复 Anthropic 模型 ID 中点号（`.`）未转换为连字符（`-`）导致的 API 404 错误，提升 provider 兼容性 |
| [#1625](https://github.com/sipeed/picoclaw/pull/1625) | Feature | 实现**多命名 Telegram Bot 支持**，允许单实例运行多个独立 Bot 并路由至不同 Agent，解决群组多 AI 人格共存问题 |
| [#1622](https://github.com/sipeed/picoclaw/pull/1622) | Enhancement | 增强 `web_fetch` 工具输出，保留 Markdown 格式与链接结构，提升网页内容可读性与上下文完整性 |
| [#1620](https://github.com/sipeed/picoclaw/pull/1620) | Docs | 新增 WhatsApp 通道配置指南，降低用户接入门槛 |
| [#1617](https://github.com/sipeed/picoclaw/pull/1617) | Bug Fix | 修复 heartbeat 模板在未编辑时误触发 LLM 调用的问题，避免无效请求 |

> ✅ 项目在**多通道隔离、工具链健壮性、文档完整性**方面取得实质性进展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#1316 Agent refactor: Event-driven agent loop with hooks, interrupts, and steering](https://github.com/sipeed/picoclaw/issues/1316)
- **评论数**：11 | **👍 反应数**：1
- **核心诉求**：当前 Agent Loop 为“黑盒”设计，缺乏可观测性、可中断性与动态消息注入能力，阻碍 UI 监控、自动化脚本集成与高级控制流实现。
- **社区共鸣**：多位开发者认同该架构限制，讨论聚焦于如何引入事件总线、Hook 点与中断信号机制。
- **影响范围**：涉及核心 Agent 架构，若实施将显著提升系统可观测性与扩展性，可能成为 v0.3.0 里程碑重点。

### 💬 高关注度 Issue：[#293 Autonomous Browser Operations](https://github.com/sipeed/picoclaw/issues/293)
- **评论数**：6 | **👍 反应数**：4 | **优先级：High**
- **诉求**：请求集成浏览器自动化能力（如 Playwright/Puppeteer），使 AI 能直接操作网页、提取数据、模拟用户行为。
- **信号意义**：反映用户对“主动智能体”能力的强烈需求，已从聊天助手向 Web Agent 演进。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 修复 PR |
|------|--------|------|--------|
| [#1624](https://github.com/sipeed/picoclaw/issues/1624) Anthropic 模型 ID 点号未转连字符致 404 | High | ✅ 已修复 | [#1626](https://github.com/sipeed/picoclaw/pull/1626) |
| [#1611](https://github.com/sipeed/picoclaw/issues/1611) Gemini 模型在非首位时失效 | High | 🔄 调查中 | 无 |
| [#1582](https://github.com/sipeed/picoclaw/issues/1582) 多 Agent 配置下模型“not found”错误 | High | 🔄 调查中 | 无 |
| [#1578](https://github.com/sipeed/picoclaw/issues/1578) `image_model` 配置未生效，图像始终路由至主模型 | Medium | 🔄 调查中 | 无 |
| [#1574](https://github.com/sipeed/picoclaw/issues/1574) `prompt_cache_key` 报错为 PicoClaw 自身 Bug | Medium | 🔄 调查中 | 无 |

> ⚠️ 多个 Provider 层 Bug 暴露配置解析与路由逻辑缺陷，需优先排查。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳潜力，已有相关 PR 或社区强需求支撑：

| 功能请求 | 关联 Issue | 进展信号 |
|--------|-----------|--------|
| **Telegram 群组观察模式**（仅在被@时回复） | [#1591](https://github.com/sipeed/picoclaw/issues/1591) | 与 [#1625] 多 Bot 支持协同，逻辑可复用 |
| **禁用 `exec` 工具**（安全加固） | [#1621](https://github.com/sipeed/picoclaw/issues/1621) | 安全敏感功能，易实现，高价值 |
| **Mattermost 原生通道支持** | [#1587](https://github.com/sipeed/picoclaw/issues/1587) | 企业用户刚需，已有 Discord/Slack 实现可参考 |
| **模型级冷却机制**（非 Provider 级） | [#1612](https://github.com/sipeed/picoclaw/issues/1612) | 解决多模型后端误判问题，提升容错 |
| **Cron 时区支持** | [#1623](https://github.com/sipeed/picoclaw/issues/1623) | 国际化基础功能，实现成本低 |

> 📌 预计上述功能将在 **v0.2.4 或 v0.3.0** 中分批落地。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “Gemini 模型必须放第一位才能用，否则就报错” → 暴露 Provider 回退链逻辑缺陷（[#1611](https://github.com/sipeed/picoclaw/issues/1611)）
  - “Telegram 群组里两个 Bot 同时回复，完全失控” → 急需多 Bot 协调机制（[#1589](https://github.com/sipeed/picoclaw/issues/1589)）
  - “图片总是走主模型，哪怕配了 `image_model`” → 配置未生效，影响成本与性能（[#1578](https://github.com/sipeed/picoclaw/issues/1578)）

- **满意点**：
  - “nightly 版本修复 Anthropic 问题很快，感谢响应！” → 开发者响应速度获认可
  - “web_fetch 现在能保留链接了，终于能用了” → 工具链改进直接提升用户体验

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 项目 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#1316](https://github.com/sipeed/picoclaw/issues/1316) Agent 事件驱动重构 | Enhancement | 2026-03-10 | Open, 11 评论 | **架构级提案，需核心团队评估 roadmap** |
| [#293](https://github.com/sipeed/picoclaw/issues/293) 浏览器自动化 | Roadmap | 2026-02-16 | Open, 6 评论 | **高优先级功能，建议启动技术调研** |
| [#751](https://github.com/sipeed/picoclaw/pull/751) WebSocket Gateway | Enhancement | 2026-02-25 | Open, 未合并 | **基础设施增强，影响监控与集成能力** |

> 🔔 建议本周内对 [#1316] 和 [#293] 给出官方 roadmap 回应，避免社区动力流失。

---

**报告生成时间**：2026-03-16  
**数据来源**：PicoClaw GitHub Repository (github.com/sipeed/picoclaw)  
**分析师备注**：项目整体健康度良好，开发活跃，但需警惕 Provider 层 Bug 累积与核心架构技术债。建议加强自动化测试覆盖，尤其是多 Agent 与多 Provider 场景。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

NanoClaw 社区活跃度显著上升，过去24小时内新增 **15条 Issues** 和 **37条 Pull Requests**，其中 PR 数量远超日常水平，反映出开发者生态的强劲参与。尽管无新版本发布，但核心功能扩展与跨平台兼容性修复成为焦点，尤其在 Apple Container、Docker 部署和第三方集成方面取得实质性进展。高优先级 Bug 报告集中暴露了日志膨胀、网络隔离和密钥管理等问题，部分已伴随修复 PR 提交，整体项目健康度良好但需警惕技术债累积。

---

## 2. 版本发布

**无新版本发布**。当前开发重心仍集中在功能迭代与稳定性修复，未触发正式版本发布流程。

---

## 3. 项目进展

今日 **3个 PR 被合并/关闭**，推动关键基础设施改进：

- **#1090**（[链接](https://github.com/qwibitai/nanoclaw/pull/1090)）：修复 `.claude.json` 只读挂载导致的 `EROFS` 崩溃问题，确保会话状态可持久化。
- **#1091**（[链接](https://github.com/qwibitai/nanoclaw/pull/1091)）：增强环境变量加载逻辑，支持容器化部署中通过 `--env-file` 注入密钥，提升 Docker 兼容性。
- **#1115**（[链接](https://github.com/qwibitai/nanoclaw/pull/1115)）：实现会话自愈机制并修复 IPC 文件权限问题，解决 root 主机与非 root 容器间的静默失败。

此外，**#1089**（Linux/Docker 部署支持）和 **#1118**（Google Workspace CLI 集成）等特性 PR 进入评审阶段，标志项目正从 macOS 主导向多平台扩展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#80 — 支持多运行时（OpenCode、Gemini 等）
- **链接**：https://github.com/qwibitai/nanoclaw/issues/80
- **评论数**：22 | **👍**：44
- **分析**：用户强烈呼吁摆脱对 Anthropic Claude 的单一依赖，因后者已开始封禁 OpenClaw 用户订阅。此需求反映了对**供应商锁定风险**的深切担忧，且已有替代方案（如开源的 OpenCode）可用。该 Issue 长期开放，可能成为下一阶段架构重构的核心驱动力。

### 🚀 高关注 PR：#1118 — Google Workspace CLI 技能集成
- **链接**：https://github.com/qwibitai/nanoclaw/pull/1118
- **状态**：待评审
- **意义**：首次将企业级 SaaS 工具（Gmail、Drive、Calendar）接入 NanoClaw 技能体系，显著扩展了 Agent 的实际应用场景，体现项目向“生产力中枢”演进的战略方向。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已有 Fix PR |
|--------|------|------|----------------|
| 🔴 High | #1088 — 日志文件膨胀至 27GB | 5天内日志失控，影响系统稳定性 | ❌ 无（建议添加日志轮转机制） |
| 🔴 High | #1103 — Apple Container 网络不通 | 容器无法访问 host gateway，导致代理失效 | ✅ #1109 |
| 🔴 High | #1104 — `.env` 影子挂载失败 | Apple Container 拒绝 `/dev/null` 绑定 | ✅ #1107 |
| 🔴 High | #1105 — GH_TOKEN 无法注入 | macOS Keychain 隔离导致 `gh` CLI 认证失败 | ✅ #1108 |
| 🟡 Medium | #973 — 初始化耗时过长 | 用户反馈 setup 过程异常缓慢 | ❌ 无（需性能 profiling） |
| 🟡 Medium | #1097 — 日期推断错误 | `formatLocalTime` 缺少星期信息导致误判 | ❌ 无（低优但影响体验） |

> ⚠️ 日志膨胀问题（#1088）虽无官方修复，但社区已提供临时解决方案（`truncate` 命令），建议尽快纳入自动化日志管理。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳潜力，且已有对应 PR 或明确技术路径：

- **多 AI 运行时支持**（#80）：虽无直接 PR，但 #1092（OpenAI API 支持）和 #80 的广泛讨论表明架构解耦势在必行。
- **容器化部署**（#1116）：#1089 提供完整 Docker/Unraid 支持，响应“非代理式安装”需求，有望成为 v1.1 核心特性。
- **浏览器自动化增强**（#832）：Chrome CDP 中继方案可绕过 reCAPTCHA，若测试通过将极大提升 Web 操作能力。
- **API 使用追踪**（#1111）：新增成本与用量监控，满足企业用户对资源管控的需求，已进入评审。

---

## 7. 用户反馈摘要

- **痛点**：
  - 跨平台兼容性差：Apple Container 与 Docker Desktop 行为不一致（#1103, #1104），NixOS 用户遭遇网络问题（#1112）。
  - 安全顾虑：间接提示注入风险（#411）被多次提及，用户担忧不可信数据控制 Agent。
  - 文档缺失：新手迁移 sandbox 环境时因目录访问限制受挫（#1080）。

- **满意点**：
  - 容器化设计受认可（#1116 作者称“被 containers/security/simplicity 吸引”）。
  - 技能扩展机制灵活，社区积极贡献 Proton Mail（#1117）、时间处理（#1114）等技能。

---

## 8. 待处理积压

| 类型 | ID | 标题 | 积压时长 | 建议行动 |
|------|----|------|--------|--------|
| Issue | #411 | 添加间接提示注入风险文档 | 21天 | 高安全风险，应优先补充安全指南 |
| Issue | #80 | 支持多 AI 运行时 | 40天 | 战略级需求，建议成立专项小组 |
| PR | #496 | Things.app 技能支持 | 20天 | 标记为“待关闭”，需确认是否继续 |
| PR | #932 | Gen tech agency main | 6天 | 状态为“Blocked”，需明确阻塞原因 |

> 📌 维护者应重点关注 #411 和 #80，二者分别代表**安全合规**与**生态可持续性**的关键缺口。

--- 

**报告生成时间**：2026-03-16  
**数据来源**：GitHub Repository `qwibitai/nanoclaw`

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

IronClaw 在 2026-03-15 继续保持高强度开发节奏，社区与核心团队活跃度显著。过去24小时内共产生 **26 条 Issue 更新**（19 新开，7 关闭）和 **50 条 PR 更新**（27 待合并，23 已合并/关闭），反映出项目处于快速迭代与质量加固并行阶段。核心团队聚焦于 **可靠性工程**（resilience、fuzzing、mutation testing）和 **安全加固**（SSRF 防护、OAuth 修复），同时推进多通道（Telegram、Feishu）功能完善。尽管无新版本发布，但 staging 分支已通过 CI 自动推进两次（#1231、#1212），表明发布周期临近。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为上一周期发布，开发重点集中在 staging 分支的功能集成与回归测试。

---

## 3. 项目进展

今日合并/关闭的关键 PR 显著提升了系统健壮性与安全性：

- **🔒 安全修复**：
  - [#1221](https://github.com/nearai/ironclaw/pull/1221) 修复用户可控 embedding base URL 导致的 SSRF 漏洞，增加严格白名单校验。
  - [#1195](https://github.com/nearai/ironclaw/pull/1195) 防止外部通道伪造内部作业监控标志，强化消息来源可信度。
  - [#1194](https://github.com/nearai/ironclaw/pull/1194) 在隧道启用时默认绑定 webhook 到 `127.0.0.1`，减少攻击面。

- **🛠 功能完善与 Bug 修复**：
  - [#1213](https://github.com/nearai/ironclaw/pull/1213) 修复 Anthropic OAuth token 刷新后未持久化问题，解决间歇性认证失败。
  - [#1211](https://github.com/nearai/ironclaw/pull/1211) 修复事件触发器因大小写敏感和用户 ID 过滤失效问题，提升自动化可靠性。
  - [#1204](https://github.com/nearai/ironclaw/pull/1204) 解决 Feishu/Lark WASM 通道编译错误，恢复该通道可用性。
  - [#1190](https://github.com/nearai/ironclaw/pull/1190) 完成 #1025 需求，为 `ironclaw_safety` 添加对抗性测试（Regex ReDoS、Unicode 边缘案例），增强安全防护能力。

- **📚 文档更新**：
  - [#1209](https://github.com/nearai/ironclaw/pull/1209) 在 README 中补充 MiniMax 作为内置 LLM 提供商，提升用户认知一致性。

> 整体项目向“生产级可靠性”迈出关键一步，尤其在安全审计与故障恢复机制上取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issue：多提供商 LLM 支持（#80）
- **链接**: [#80](https://github.com/nearai/ironclaw/issues/80)
- **状态**: 开放，3 条评论，P1-P3 优先级
- **分析**: 用户强烈呼吁支持 Ollama（本地模型）、AWS Bedrock、Google Gemini 等主流提供商，以实现故障转移（failover）与自动发现。该需求直接关联项目“企业级可用性”目标，且已有部分基础设施（如 `llm/models.rs` 提取，见 #1210）为其铺路，预计将成为下一阶段核心开发重点。

### 💬 高互动 PR：FaultInjector 测试框架（#1233）
- **链接**: [#1233](https://github.com/nearai/ironclaw/pull/1233)
- **状态**: 新提交，核心团队开发中
- **分析**: 该 PR 实现 #1220 提案，为 `StubLlm` 引入可配置故障注入能力（超时、间歇失败、慢响应），是构建端到端韧性测试体系的关键一步，受到测试与稳定性团队高度关注。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **HIGH** | [#1141](https://github.com/nearai/ironclaw/issues/1141) | `oauth_http_client()` 将错误存为 `String` 而非 `AuthError`，导致类型混淆 | ✅ 已由 staging CI 标记，预计随 #1213 修复 |
| **P2** | [#1205](https://github.com/nearai/ironclaw/issues/1205) | Slack tool 安装失败，404 下载 WASM 包 | 🔄 待调查（可能为发布流程问题） |
| **P2** | [#1056](https://github.com/nearai/ironclaw/issues/1056) | Agent 在等待 auth token 时仍显示为可交互状态 | ✅ 已关闭，修复已合入 |
| **P2** | [#1057](https://github.com/nearai/ironclaw/issues/1057) | Auth 报告成功但实际无 token，导致后续激活失败 | ✅ 已关闭 |
| **Medium** | [#1059](https://github.com/nearai/ironclaw/issues/1059) | 复制的聊天文本为白色字体，在白底应用中不可见 | ✅ 已关闭 |

> 当前无未修复的高危运行时崩溃或数据丢失类 Bug，稳定性整体良好。

---

## 6. 功能请求与路线图信号

- **多提供商 LLM 支持**（#80）：明确列入 `FEATURE_PARITY.md`，Ollama 为 P2 优先级，结合 #1210 的模型发现模块重构，**极可能纳入 v0.5 版本**。
- **TLA+ 形式化规约**（#1225）：针对作业状态机、熔断器等核心组件，虽为 XL 规模，但因涉及系统正确性，**可能作为长期技术债专项推进**。
- **Telegram 论坛主题支持**（#1199）：新贡献者提交，已实现线程路由，**有望快速合入并随下次发布上线**。
- **混沌工程测试场景**（#1222）：与 FaultInjector（#1233）形成闭环，**预示项目将建立系统性韧性验证流程**。

---

## 7. 用户反馈摘要

- **痛点**：
  - Slack 工具安装失败（#1205）暴露发布流程中 WASM 包路径配置问题，影响用户体验。
  - Safari 下 CJK IME 输入时误触发消息发送（#1139）已被修复，反映 Web 端对东亚语言输入兼容性需持续关注。
  - 复制文本颜色问题（#1059）揭示深色主题与外部应用交互时的可访问性盲区。

- **满意点**：
  - 用户对 Telegram 自定义命令通过事件触发实现（#1189）表示兴趣，体现平台扩展性价值。
  - Feishu 通道修复（#1204）获得社区积极反馈，表明多通道支持战略正确。

---

## 8. 待处理积压

| Issue/PR | 标题 | 积压时长 | 提醒 |
|--------|------|--------|------|
| [#80](https://github.com/nearai/ironclaw/issues/80) | Multi-provider LLM support | 30+ 天 | **高优先级功能缺口**，需分配资源启动 P2（Ollama）实现 |
| [#927](https://github.com/nearai/ironclaw/pull/927) | Chat onboarding and routine advisor | 4 天未更新 | XL 规模 PR，需核心团队 review 以避免阻塞 |
| [#1151](https://github.com/nearai/ironclaw/pull/1151) | Refactor owner scope across channels | 2 天未更新 | 高风险重构，需谨慎验证跨通道状态一致性 |

> 建议维护者优先处理 #80 的技术方案设计，并安排 #927 的专项 review 会议。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
**结论**：IronClaw 正处于从“功能完备”向“生产就绪”转型的关键阶段，安全、可靠性、多通道支持三大支柱同步推进，社区响应迅速，技术债管理有序。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-03-16）**

---

### 1. 今日速览  
过去24小时内，LobsterAI 社区活跃度显著提升，共产生 **17条 PR 更新**（15条已合并/关闭，2条待合并）和 **3条新 Issue**，无新版本发布。开发团队聚焦于修复关键功能缺陷（如 MCP 不可用、定时任务失效、IM 消息丢失等），并推进 OpenClaw 引擎集成相关优化。用户反馈集中暴露了沙箱兼容性、技能市场可用性、性能延迟及国际化支持等核心痛点，反映出项目在落地体验层面仍面临挑战。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
今日共 **15个 PR 被合并或关闭**，主要进展包括：  
- **MCP 功能修复**：#432 修复了 MCP 工具调用不可用的问题，提升自动化能力稳定性（[链接](https://github.com/netease-youdao/LobsterAI/pull/432)）。  
- **定时任务系统优化**：#431 增强钉钉消息投递路由缓存与历史同步策略，#423/#425 修复 cowork 与 IM 渠道定时任务失效问题，显著改善任务可靠性（[链接1](https://github.com/netease-youdao/LobsterAI/pull/431) | [链接2](https://github.com/netease-youdao/LobsterAI/pull/423)）。  
- **OpenClaw 引擎整合**：#430 引入 Agent 身份默认模板，#403 移除内置沙箱并精简系统提示词，与 OpenClaw 默认 prompt 合并，标志架构向 OpenClaw 迁移迈出关键一步（[链接1](https://github.com/netease-youdao/LobsterAI/pull/430) | [链接2](https://github.com/netease-youdao/LobsterAI/pull/403)）。  
- **IM 渠道稳定性**：#427 修复企业微信等 IM 渠道用户消息丢失问题，#426 降低消息同步延迟（[链接1](https://github.com/netease-youdao/LobsterAI/pull/427) | [链接2](https://github.com/netease-youdao/LobsterAI/pull/426)）。  

整体来看，项目正快速修复关键路径缺陷，并明确向 OpenClaw 引擎过渡的技术方向。

---

### 4. 社区热点  
**#417 [用户实测反馈：Win11 环境下多项核心功能失效]**（[链接](https://github.com/netease-youdao/LobsterAI/issues/417)）  
该 Issue 获得 2 条评论，集中反映了真实用户在高频使用场景下的严重体验问题：沙箱无法启用、浏览器自动化失效、任务处理速度远慢于同类模型（包括阿里开源版本）、技能市场 API 配置缺失、缺乏海外 IM 支持等。此反馈揭示了项目在**跨平台兼容性、技能生态完整性、性能优化和国际化**方面的重大短板，是当前最紧迫的用户诉求。

---

### 5. Bug 与稳定性  
按严重程度排序：  
1. **沙箱安装后无法识别与启用**（#417）—— 高严重性，影响基础运行环境，**暂无对应 fix PR**。  
2. **浏览器自动化技能失效（即使安装 MCP 工具）**（#417）—— 高严重性，破坏核心自动化能力，**已有 MCP 修复 PR #432，但需验证是否覆盖此场景**。  
3. **技能市场模型（如 Google 香蕉图片生成）缺乏 API Key 配置入口**（#417）—— 中高风险，导致多数技能无法使用，**无相关 PR**。  
4. **任务处理速度显著慢于 OpenClaw 及竞品**（#417）—— 性能回归，影响用户体验，**未定位原因，无修复 PR**。  
5. **IM 渠道连接性测试引发异常**（#393）—— 中低风险，已于 #393 修复（[链接](https://github.com/netease-youdao/LobsterAI/pull/393)）。  

---

### 6. 功能请求与路线图信号  
- **MCP 配置文档需求**（#419）：用户明确请求官方提供 MCP 配置教程，表明当前文档不足以支撑高级功能使用，**可能被纳入下一版文档更新计划**（[链接](https://github.com/netease-youdao/LobsterAI/issues/419)）。  
- **引擎切换澄清请求**（#418）：用户质疑是否放弃基于 Claude Agent SDK 的 cowork 分支，官方未回应，但结合 #403、#430 等 PR 可判断，**项目确在向 OpenClaw 引擎迁移，Claude SDK 分支可能逐步弃用**（[链接](https://github.com/netease-youdao/LobsterAI/issues/418)）。  
- **LM Studio 模型支持**（#428）：新增本地模型提供商支持，反映对离线/私有化部署需求的响应，**已提交 PR 待合并**（[链接](https://github.com/netease-youdao/LobsterAI/pull/428)）。  

---

### 7. 用户反馈摘要  
从 #417 可提炼关键用户痛点：  
- **不满意点**：  
  - 沙箱机制在 Windows 平台完全不可用，重复安装无效；  
  - 浏览器自动化等核心技能“形同虚设”，无法操控本地应用；  
  - 技能市场形同虚设，多数技能因缺少 API 配置界面而无法使用；  
  - 响应速度明显落后于 OpenClaw 及阿里同类产品，办公任务（如 PPT 生成）失败率高；  
  - 缺乏对海外 IM（如 Slack、Discord）的支持，限制国际化使用。  
- **使用场景**：日常办公自动化（PPT 创建）、浏览器操作、图片生成等高频生产力场景。  
- **隐含诉求**：期望项目具备**开箱即用性、跨平台稳定性、技能生态可用性**及**性能竞争力**。

---

### 8. 待处理积压  
- **#417（Win11 功能全面失效）**：创建于 2026-03-15，更新活跃，但**无任何官方回应或修复动作**，属高优先级用户反馈积压（[链接](https://github.com/netease-youdao/LobsterAI/issues/417)）。  
- **#418（引擎发展方向澄清）**：涉及项目战略透明度，**官方尚未回应**，可能影响社区信心（[链接](https://github.com/netease-youdao/LobsterAI/issues/418)）。  
- **#429（中文路径编码问题）** & **#428（LM Studio 支持）**：均为有价值的功能改进 PR，**仍处于 open 状态，需维护者 review 合并**（[链接1](https://github.com/netease-youdao/LobsterAI/pull/429) | [链接2](https://github.com/netease-youdao/LobsterAI/pull/428)）。  

> **健康度提示**：项目技术迭代积极，但用户侧关键体验问题响应滞后，需加强社区沟通与跨平台测试覆盖。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

TinyClaw 在 2026-03-16 继续保持高活跃度开发节奏，**无新 Issue 提交但 Pull Request 更新达 9 条**，表明社区焦点集中于代码贡献而非问题反馈。开发重点明显转向**系统稳定性加固与多代理协作机制优化**，由核心贡献者 @jcenters 主导的多个关键修复 PR 正在推进中。尽管无新版本发布，但已有 2 个 PR 被合并/关闭，显示维护团队响应迅速。整体项目健康度良好，技术债务清理与生产环境可靠性提升是当前核心方向。

---

## 2. 版本发布

**无新版本发布**。最新 Release 仍为历史版本，暂无公开版本号更新计划。

---

## 3. 项目进展

今日有 **2 个 Pull Request 被合并或关闭**，标志着以下功能正式落地：

- **#215 [CLOSED] feat(agents): add system prompt option when creating agents**  
  ✅ 允许在创建 Agent 时通过 CLI 或 API 指定自定义 `system_prompt`，并自动写入 `AGENTS.md` 实现持久化配置。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/215  
  → *提升 Agent 初始行为可控性，支持更细粒度的角色定制*

- **#216 [CLOSED] feat(cli): add TINYAGI ASCII banner to CLI and shell scripts**  
  ✅ 在 CLI 关键入口（help、daemon 启动、setup 流程）添加品牌化 ASCII 横幅，增强用户体验一致性。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/216  
  → *改善开发者与终端用户的第一印象，强化项目识别度*

此外，**#214（web-based setup）虽未合并但持续更新**，预示下一阶段将支持脱离 CLI 的图形化初始化流程，扩展部署灵活性。

---

## 4. 社区热点

**无活跃讨论的 Issues**（过去24小时 Issue 更新为 0 条），但 **PR #220 和 #222 引发潜在关注**：

- **#220 [OPEN] fix(teams): remove chatroom fan-out to prevent agent feedback loops**  
  ⚠️ 描述了一个**严重生产环境问题**：多 Agent 团队中 `[#team: ...]` 消息广播导致指数级 Claude 调用，形成资源耗尽风险。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/220  
  → *反映用户对多智能体协同架构稳定性的高度关切*

- **#222 [OPEN] fix(settings): guard POST /api/setup against agent overwrites**  
  🔒 揭示安全漏洞：具备 `--dangerously-skip-permissions` 权限的 Agent 可静默覆盖 `settings.json`，导致配置丢失。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/222  
  → *凸显权限边界模糊带来的运维风险，亟需权限隔离机制*

尽管暂无评论，这两项修复直指系统核心风险，预计将成为后续版本重点审查对象。

---

## 5. Bug 与稳定性

以下为今日识别的关键 Bug 及修复状态（按严重性排序）：

| 严重程度 | 问题描述 | 修复状态 | 链接 |
|--------|--------|--------|------|
| 🔴 **高危** | `POST /api/setup` 全量替换 `settings.json`，Agent 可静默擦除生产配置 | ✅ 有修复 PR (#222) | [PR #222](https://github.com/TinyAGI/tinyclaw/pull/222) |
| 🔴 **高危** | 多 Agent 团队中 `[#team: ...]` 消息广播引发指数级反馈循环 | ✅ 有修复 PR (#220) | [PR #220](https://github.com/TinyAGI/tinyclaw/pull/220) |
| 🟠 **中危** | `restart_daemon()` 在验证新配置前停止旧进程，导致服务中断 | ✅ 有修复 PR (#219) | [PR #219](https://github.com/TinyAGI/tinyclaw/pull/219) |
| 🟠 **中危** | 空字符串响应仍触发 `enqueueResponse()`，Telegram 显示 "(Silent)" 通知 | ✅ 有修复 PR (#221) | [PR #221](https://github.com/TinyAGI/tinyclaw/pull/221) |
| 🟡 **低危** | 挂起的 Claude 进程未被终止，消息反复重试占用资源 | ✅ 有修复 PR (#218) | [PR #218](https://github.com/TinyAGI/tinyclaw/pull/218) |

> 所有关键 Bug 均已提交修复 PR，**尚未合并**，建议维护者优先审查 #220 与 #222。

---

## 6. 功能请求与路线图信号

从近期 PR 可识别以下**即将落地的功能方向**：

- **Web 化配置管理**：#214 引入 `--skip-setup` 模式与 TinyOffice 集成 `/connect` 页面，支持自定义 API URL 与 localStorage 持久化 → 预示向**无头部署 + 前端控制台**架构演进。
- **多模型支持扩展**：#217 添加 Google Gemini 提供方支持并清理废弃模型引用 → 显示项目正积极整合主流 LLM 生态，降低供应商锁定风险。
- **Agent 生命周期精细化控制**：#215 的 system prompt 支持 + #218 的进程超时 kill 机制 → 指向更健壮、可观测的 Agent 运行时管理。

这些信号表明 TinyClaw 正从“原型验证”向“生产级多智能体平台”转型。

---

## 7. 用户反馈摘要

**无新增 Issue，故无直接用户反馈**。但从 PR 描述可反推真实痛点：

- 用户在实际部署多 Agent 团队时遭遇**资源爆炸性增长**（#220），反映当前广播机制缺乏节流设计。
- 运维人员担忧**配置安全性**，尤其担心自动化 Agent 误操作导致服务不可用（#222）。
- 开发者期望更灵活的**初始化方式**，避免强制 CLI 交互（#214），说明存在非技术用户或容器化部署场景需求。

---

## 8. 待处理积压

以下为**超过 48 小时未获响应的重要 PR**，建议维护者关注：

- **#214 [OPEN] feat: add web-based setup and custom API URL configuration**（创建于 2026-03-14）  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/214  
  → *涉及架构扩展，需评估与现有 CLI 工作流兼容性*

- **#217 [OPEN] feat(queue): Adding gemini/gemini cli**（创建于 2026-03-14）  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/217  
  → *模型支持类 PR 通常需验证 API 兼容性与测试覆盖*

- **#218 ~ #222（全部由 @jcenters 提交，创建于 03-15 至 03-16）**  
  虽为新提交，但涉及**核心稳定性与安全问题**，建议优先合并而非积压。

> 📌 **建议**：建立安全/稳定性 PR 的快速通道机制，避免关键修复延迟。

--- 

**总结**：TinyClaw 正处于从实验性项目向生产就绪系统过渡的关键阶段。今日虽无版本发布，但底层架构加固与用户体验优化并行推进，社区贡献质量高。维护者应优先处理安全类 PR，并考虑建立更明确的路线图沟通机制以引导社区预期。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-16）

---

## 1. 今日速览

Moltis 项目在过去24小时内保持中等活跃度，共处理 **5条 Issues** 和 **7条 Pull Requests**，整体开发节奏稳健。社区贡献者持续聚焦于 **浏览器沙箱稳定性、会话隔离、工具链安全增强** 等核心模块的优化。尽管无新版本发布，但多个关键 Bug 被修复并合并，显著提升了 Windows 兼容性与多会话场景下的可靠性。项目健康度良好，技术债清理与功能迭代并行推进。

---

## 2. 版本发布

*无新版本发布。*

---

## 3. 项目进展

今日有 **2个重要 PR 被合并/关闭**，推动项目在稳定性和安全性方面取得实质性进展：

- **[#403 fix(browser): align sandbox browserless timeout with pool lifecycle](https://github.com/moltis-org/moltis/pull/403)**  
  修复了沙箱浏览器会话因超时配置不一致导致的提前终止问题，确保 `browserless/chrome` 容器的生命周期与 Moltis 的会话管理策略对齐，提升自动化测试与长任务场景的可靠性。

- **[#412 fix(browser): scope cached browser sessions per chat](https://github.com/moltis-org/moltis/pull/412)**  
  解决了跨聊天会话共享浏览器状态引发的冲突问题（原 Issue #202），通过将浏览器会话 ID 按聊天会话隔离，避免新会话继承旧会话的“僵尸”浏览器实例，显著改善多用户/多任务环境下的稳定性。

> ✅ 两项修复均附带回归测试，体现团队对质量保障的重视。

---

## 4. 社区热点

**最活跃 Issue：[#346 [Bug]: can't add node from docker](https://github.com/moltis-org/moltis/issues/346)**  
该 Issue 创建于3月6日，于昨日关闭，共收到 **4条评论**。用户反馈在 Docker 环境中无法成功添加执行节点，疑似与容器网络或权限配置相关。虽然已关闭，但评论中仍存在未明确的复现路径，建议维护者补充文档或提供诊断脚本以预防类似问题。

**高关注度 PR：[#413 feat(skills): support safe agent-written sidecar files](https://github.com/moltis-org/moltis/pull/413)**  
此 PR 引入“代理侧边文件”（agent sidecar files）的安全写入机制，包含路径校验、大小限制、符号链接防护及审计日志，是提升 AI 技能扩展能力的重要基础设施。尽管尚未合并，但其设计体现了对 **AI 自主操作安全边界** 的深入思考，预计将成为未来技能生态的关键特性。

---

## 5. Bug 与稳定性

以下为今日更新或报告的 Bug，按严重程度排序：

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 高 | [#437 [Bug]: Expandable "Reasoning" is only response from message in chat (affects Channels)](https://github.com/moltis-org/moltis/issues/437) | 用户在频道中发送消息后，仅收到“推理”折叠块作为响应，无实际内容输出，严重影响核心交互体验。 | ❌ 尚无对应 PR |
| ⚠️ 中 | [#436 fix(sessions): replace append(true) with write(true)+seek to fix Windows file lock (LockFileEx os error 5)](https://github.com/moltis-org/moltis/pull/436) | Windows 平台下因 Rust `OpenOptions::append(true)` 权限限制导致文件写入失败（OS Error 5），影响会话持久化。 | ✅ 已有修复 PR（待合并） |
| ⚠️ 中 | [#440 fix: heartbeat cron job creation and scrolling](https://github.com/moltis-org/moltis/pull/440) | 心跳功能保存后未正确创建定时任务，UI 持续提示“无活跃 cron 任务”，导致监控失效。 | ✅ 已有修复 PR（待合并） |

> 💡 建议优先审查 #436 和 #440，二者均针对平台兼容性与核心功能可用性，修复价值高。

---

## 6. 功能请求与路线图信号

- **[#441 [Feature]: Improve DX: Automate CSS path resolution or fix relative paths for standard Cargo builds](https://github.com/moltis-org/moltis/issues/441)**  
  开发者体验（DX）优化需求，反映 Rust + Web 前端集成中的构建痛点。若实现，将降低本地开发门槛，吸引更多贡献者。

- **[#439 feat(mcp): add custom display names for MCP servers](https://github.com/moltis-org/moltis/pull/439)**  
  允许为 MCP 服务器配置友好显示名称，提升多服务器管理时的可读性。该 PR 设计简洁，符合用户认知习惯，**极有可能纳入下一版本**。

- **[#432 fix(tools): only expose exec node parameter when nodes are connected](https://github.com/moltis-org/moltis/pull/432)**  
  防止 LLM 在节点未连接时“幻觉”出无效节点参数，属于工具链健壮性增强，**应作为 v0.5+ 的标配修复**。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼关键用户声音：

- **痛点**：  
  - Docker 部署场景下节点添加失败（#346），暴露环境适配文档不足。  
  - Windows 用户遭遇文件锁错误（#436），影响基础会话功能，亟需跨平台一致性保障。  
  - 多会话并发时浏览器状态混乱（#202），已被修复，用户期待类似问题系统性排查。

- **满意点**：  
  - 对“按会话隔离浏览器”的修复（#412）表示认可，认为“终于解决了多任务串扰问题”。  
  - 安全侧边文件机制（#413）被社区称为“AI 技能安全的里程碑设计”。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

- **[#172 [Bug]: Browser stops responding and requests to it time out](https://github.com/moltis-org/moltis/issues/172)**  
  创建于2月17日，虽已关闭但仅2条评论，缺乏根因分析与复现步骤，**可能存在未彻底解决的底层超时逻辑问题**。

- **[#413 feat(skills): support safe agent-written sidecar files](https://github.com/moltis-org/moltis/pull/413)**  
  自3月11日开放以来无 review 记录，作为重要安全特性，**建议分配核心成员进行代码审查**，避免功能延迟。

> 🔔 提醒：项目需加强 PR review 响应机制，避免高价值贡献因流程阻塞而流失。

---  
*数据来源：Moltis GitHub 仓库（截至 2026-03-15 23:59 UTC）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **37条 Issues 更新**（新开/活跃33条，关闭4条）和 **35条 PR 更新**（待合并29条，已合并/关闭6条），显示出强劲的开发与用户参与势头。尽管无新版本发布，但多个关键功能正在推进中，包括 ACP 协议支持、多通道增强（如小艺、Nextcloud Talk）、语音消息处理优化等。社区反馈集中在飞书/QQ频道文件传输、延迟回复、Docker稳定性等实际使用痛点，反映出项目已进入深度应用阶段。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.0.7`，团队正集中精力于功能完善与稳定性修复，预计下一版本将包含 ACP 支持、时区配置、语音转录等核心改进。

---

## 3. 项目进展

今日有 **6个 PR 被合并或关闭**，推动多项关键能力落地：

- ✅ **#1432**（已合并）：修复 cron 任务因时区不一致导致的调度错误，统一使用 UTC 时间上下文，解决弱模型忽略调用 `get_current_time` 工具的问题。
- ✅ **#1475**（已合并）：为 Telegram 通道添加网络故障自动重连机制，缓解长连接中断问题（关联 Issue #1415）。
- ✅ **#1524**（已合并）：修复 provider 层在流式响应中 `chunk.choices` 为 `None` 时的异常崩溃。
- ✅ **#1529**（已合并）：将安全规则文件 `dangerous_shell_commands.yaml` 打包进 pip 安装包，修复 Windows 用户安装后缺失关键配置的问题（Issue #1519）。
- ✅ **#1527**（已关闭）：虽未合并，但推动 WebUI 模型选择显示优化讨论，为后续 UX 改进提供依据。
- ✅ **#1415**（Issue 关闭）：Telegram 断连问题通过 #1475 得到缓解，社区验证有效。

> 整体项目在**多通道稳定性、时区一致性、安装包完整性**方面取得实质性进展。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

- 🔥 **#981**（13 评论）：飞书与 QQ 频道机器人无法发送文件给用户，严重影响工作流自动化体验。用户期望支持文档、图片等附件推送。
- 🔥 **#1345**（6 评论）：飞书频道出现“延迟回复”问题（Bot 回答上一个问题），疑似消息队列或上下文管理缺陷，影响对话连贯性。
- 🔥 **#1502**（6 评论）：火山引擎 Coding Plan 模型在 Windows 桌面版出现 “Answers have stopped” 异常，可能涉及模型兼容性与资源管理。
- 🔥 **#828**（6 评论）：Tool use 输入参数为空，导致工具调用失败，开发者已临时修复但需根本性解决方案。

> 这些热点问题集中于**跨通道功能一致性**与**本地/云端模型稳定性**，是下一阶段优化的重点方向。

---

## 5. Bug 与稳定性

按严重程度排序的关键 Bug：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #1488 | Docker 部署运行一天后服务无响应，日志无异常，重启无效 | ❌ 无 |
| ⚠️ 高 | #1531 | Windows 用户崩溃后重装仍报错 `RuntimeError: Attempted to exit cancel scope...`，疑似任务未正确清理 | ❌ 无 |
| ⚠️ 中 | #1502 | 火山引擎模型导致 “Answers have stopped” | ❌ 无 |
| ⚠️ 中 | #1528 | 本地模型响应慢触发 ReadTimeout，断开与 LM Studio 连接 | ❌ 无（建议增加超时配置） |
| ⚠️ 中 | #1534 | Telegram 语音消息无法接收，后续文本对话也失效 | ✅ 有（#1476 语音转录 PR 可缓解） |
| ⚠️ 低 | #1501 | 官方 Docker 镜像时区无法修改 | ✅ 有（#1535 用户时区配置 PR 正在推进） |

> 建议优先排查 #1488（Docker 无响应）与 #1531（Windows 崩溃残留）等阻塞性故障。

---

## 6. 功能请求与路线图信号

用户提出的新功能中，以下具备高优先级并已有对应 PR：

- 🚀 **ACP（Agent Communication Protocol）支持**（#1059 + #1544）：允许 CoPaw 作为 ACP Server/Client 与 Codex、Claude Code 等 IDE 插件双向集成，已进入开发阶段。
- 🚀 **多 Agent 独立模型配置**（#1537）：支持每个 Agent 预设不同大模型，并具备失败切换机制，契合企业级多模型调度需求。
- 🚀 **WebUI 文件上传功能**（#1539）：用户希望在 Console 中直接上传文档/图片供 Agent 分析，扩展交互维度。
- 🚀 **语音消息转录支持**（#1476）：将 `.ogg` 语音转为文本，使所有模型后端均可处理语音输入，提升无障碍体验。
- 🚀 **用户时区配置**（#1535）：在 Console 中提供时区选择器，统一 cron、系统提示、心跳等时间语义。

> 上述功能极有可能纳入 **v0.0.8** 版本，形成“企业级多通道智能体平台”的核心能力。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “飞书发不了文件，只能发文字，工作流断了”（#981）
  - “Docker 跑一天就卡死，只能重启容器”（#1488）
  - “本地小模型记忆老丢，聊着聊着就忘了上下文”（#1448）
  - “Telegram 语音发不了，发了文本也不回”（#1534）

- **满意点**：
  - “cron 任务终于能按时区跑了，之前全是 UTC 乱套”（#1432 评论）
  - “Telegram 自动重连很实用，不用再手动重启”（#1475 验证）

- **使用场景**：
  - 企业办公自动化（飞书/钉钉/QQ 频道集成）
  - 本地开发辅助（Ollama + 小模型）
  - 定时任务调度（cron skill）
  - 多模态交互（语音、图像）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

- ⏳ **#957**（钉钉停止任务命令支持）：提出于 2026-03-08，4 条评论，无维护者回应。该功能对生产环境安全至关重要。
- ⏳ **#1303**（钉钉富文本内容处理错误）：自 03-12 提出，2 条评论，尚未有修复方案。
- ⏳ **#1454**（Memory Compaction 输出到错误通道）：影响多通道用户体验，需检查 summarizer 路由逻辑。
- ⏳ **#1213**（小艺通道支持 PR）：自 03-11 提交，尚未 review，可能涉及厂商 API 合规性审查。

> 建议本周内对上述积压项进行 triage，明确是否接受、需修改或关闭。

---

**总结**：CoPaw 正处于从“可用”向“可靠+可扩展”演进的关键阶段。社区活跃度健康，功能需求明确，但需加强稳定性保障与跨通道一致性。ACP 与多模型支持将是下一版本亮点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-16）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 项目保持高活跃度，共处理 **6 条 PR 更新**（4 条已合并/关闭，2 条待合并）和 **4 条 Issues 更新**（2 条新开，2 条已关闭）。核心维护者 @qhkm 主导了多项关键修复与功能开发，涵盖 r8r 桥接、配置验证、模板逻辑优化及 Google Vertex AI 集成。社区贡献者 @taqtiqa-mark 提出关于文档硬编码问题的 Bug 报告，反映出对协作流程规范化的关注。整体项目处于快速迭代与稳定性修复并行阶段，技术债务清理与扩展性增强同步推进。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共 **4 个 PR 被合并或关闭**，显著推进了系统稳定性与功能完整性：

- **#362 [CLOSED]**：修复 r8r 桥接中的关键回归问题，包括重复事件确认机制、畸形头部错误处理（替代 panic）、以及配置字段注册，直接响应 #361 的高优先级 Bug 报告（[链接](https://github.com/qhkm/zeptoclaw/pull/362)）。
- **#365 [CLOSED]**：实现 r8r 桥接的 WebSocket 客户端，支持事件去重、审批响应解析、健康心跳与 CLI 状态展示，并完成 CLAUDE.md 的渐进式披露文档更新，为工作流集成奠定基础（[链接](https://github.com/qhkm/zeptoclaw/pull/365)）。
- **#359 [CLOSED]**：修复 coder 模板逻辑缺陷，强制 LLM 优先使用现有测试套件而非自建错误测试，通过 `edit_file` 实现原地修复，提升自动化修复可靠性（[链接](https://github.com/qhkm/zeptoclaw/pull/359)）。
- **#358 [CLOSED]**：优化开发容器构建性能，引入 BuildKit 缓存挂载（cargo registry/git/target），并新增 `lint-container.sh` 脚本以兼容 Docker/Podman 环境（[链接](https://github.com/qhkm/zeptoclaw/pull/358)）。

> 上述合并标志着 r8r 集成、模板可靠性、开发体验三大方向取得实质性进展。

---

## 4. 社区热点

- **#367 [OPEN]**：由 @taqtiqa-mark 提出，指出 `AGENTS.md` 中存在硬编码仓库 slug，导致 fork 仓库中的 AI 编码助手误向上游提交 Issue/PR（如 #333）。该问题暴露了开源协作流程中的自动化陷阱，引发对文档可移植性的讨论（[链接](https://github.com/qhkm/zeptoclaw/issues/367)）。
- **#363 / #364 [OPEN]**：@qhkm 同时开启 Issue 与 PR，提议并实现 **Google Vertex AI 提供程序**，支持企业级 Gemini 模型接入，强调“零新增依赖”与复用现有架构。该功能响应了用户对多云 AI 提供商支持的需求，是当前最活跃的功能开发线（[Issue](https://github.com/qhkm/zeptoclaw/issues/363) | [PR](https://github.com/qhkm/zeptoclaw/pull/364)）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 状态 | 是否已有 Fix PR |
|--------|-------|------|------------------|
| P2-high | #361：r8r 桥接重复事件未确认导致无限重放、畸形头部引发 panic、配置字段未注册 | ✅ 已关闭 | ✅ #362 |
| P2-high | #345：coder 模板 LLM 自建错误测试而非使用现有测试 | ✅ 已关闭 | ✅ #359 |
| Medium | #367：AGENTS.md 硬编码 repo slug 导致 fork 中 AI 误操作 | 🔓 开放中 | ❌ 无 |

> 高优先级 Bug 均已闭环，体现团队对稳定性的高度重视。

---

## 6. 功能请求与路线图信号

- **Google Vertex AI 支持**（#363/#364）：已进入实现阶段，采用最小依赖策略，适配 ZeptoClaw 架构。鉴于其与企业 AI 部署场景高度契合，极可能纳入下一版本正式支持。
- **Telegram 消息增强**（#366）：支持 Markdown 渲染与输入指示器，提升终端用户体验。该 PR 仍开放，若测试通过将增强多通道交互能力。
- **r8r 工作流深度集成**：通过 #365 实现的 WebSocket 客户端为未来自动化审批、事件驱动任务调度铺平道路，预示项目正向“AI 工作流引擎”演进。

---

## 7. 用户反馈摘要

- **痛点**：AI 编码助手在 fork 仓库中因文档硬编码问题误提交 Issue/PR（#367），干扰上游维护，需标准化协作指引。
- **使用场景**：用户依赖 `coder` 模板进行自动化 Bug 修复，但此前 LLM 会“自我验证”错误逻辑（#345），现已修复为严格依赖现有测试套件。
- **满意度**：对 r8r 桥接的健壮性改进（#361/#362）表示认可，尤其赞赏“错误替代 panic”的设计；对 Vertex AI 集成持积极期待，认为其填补了企业认证支持的空白。

---

## 8. 待处理积压

- **#367 [OPEN]**：AGENTS.md 硬编码问题虽非代码缺陷，但影响开源协作健康度，建议尽快更新文档使用变量化 repo 引用（如 `${REPO_SLUG}`）或添加 fork 使用警告。
- **#366 [OPEN]**：Telegram 格式化 PR 尚未合并，需确认与现有消息管道的兼容性，建议优先 review 以避免功能延迟。

> 维护者宜关注文档类技术债，避免自动化工具引发协作噪音。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 快速响应 + 关键路径闭环，整体态势积极。建议加强文档可维护性以支持更广泛的社区参与。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目日报（2026-03-16）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低：无新 Issue 提交、无 Pull Request 活动，社区互动趋于平稳。唯一显著动作为发布新版本 v1.6.8，主要聚焦于 macOS 平台安装体验优化。项目处于稳定维护阶段，开发节奏放缓，但关键用户问题响应及时。

---

### 2. 版本发布  
**EasyClaw v1.6.8 已发布**  
本次更新未包含功能变更或代码逻辑调整，核心改进在于完善 macOS 平台的安装指引文档，明确解释并解决用户因 Gatekeeper 安全机制误报“应用已损坏”的问题。  
- **更新内容**：在 Release 说明中新增针对 macOS 用户的详细故障排除步骤，指导用户通过终端命令绕过 Gatekeeper 拦截（`xattr -cr /path/to/EasyClaw.app`）。  
- **破坏性变更**：无。  
- **迁移注意事项**：无需代码迁移；建议 macOS 用户参考新版安装说明重新尝试启动应用。  
> 🔗 [Release v1.6.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.8)

---

### 3. 项目进展  
过去24小时无 Pull Request 合并或关闭，无功能开发或 Bug 修复代码入库。项目当前无活跃开发任务，整体进展维持稳定状态。

---

### 4. 社区热点  
无新 Issue 或 PR 讨论，社区无显著热点议题。历史 Issue 中关于“macOS 启动失败”的反馈已通过 v1.6.8 文档更新得到间接回应，预计将降低未来同类问题上报频率。

---

### 5. Bug 与稳定性  
无新 Bug 报告。v1.6.8 虽未修改代码，但通过文档优化缓解了 macOS 用户因系统安全策略导致的“假性崩溃”问题，提升了实际使用稳定性。

---

### 6. 功能请求与路线图信号  
无新功能请求提出。结合近期发布节奏（以文档优化和小版本迭代为主），项目短期内可能继续聚焦于跨平台兼容性提升与用户体验细化，而非引入重大功能。

---

### 7. 用户反馈摘要  
虽无新 Issue，但从 v1.6.8 发布说明的针对性优化可反推：**macOS 用户普遍遭遇 Gatekeeper 拦截问题**，且缺乏官方指引导致误判为软件损坏。此次文档更新体现了对用户真实痛点的快速响应，有助于提升满意度。

---

### 8. 待处理积压  
经核查，项目当前无长期未响应的重要 Issue 或 PR。所有历史 Issue 均已关闭或归档，维护状态健康。建议持续监控 macOS 及 Windows/Linux 平台下的启动兼容性问题，以防类似文档类需求再次积压。

> 项目健康度评估：⭐⭐⭐⭐☆（4/5）—— 低活跃度但响应及时，文档驱动型维护有效支撑用户体验。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*