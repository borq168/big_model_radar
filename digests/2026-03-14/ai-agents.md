# OpenClaw 生态日报 2026-03-14

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-14 00:57 UTC

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

# OpenClaw 项目动态日报（2026-03-14）

---

## 1. 今日速览  
OpenClaw 在发布 v2026.3.12 后进入高活跃修复期，过去24小时共处理 **500 条 Issues**（新开/活跃 436，关闭 64）和 **500 条 PRs**（待合并 359，已合并/关闭 141），社区响应迅速。尽管新版本引入了显著的 UI 与架构改进，但也暴露出多个回归性 Bug，主要集中在 **CLI 连接、内存泄漏、WhatsApp 通道异常及设备身份验证**等问题上。开发团队正通过高频 PR 提交积极修复，整体项目处于“发布后热修”状态，健康度中等偏上，但需警惕用户因稳定性问题流失。

---

## 2. 版本发布  
### 🔖 [v2026.3.12](https://github.com/openclaw/openclaw/releases/tag/v2026.3.12)（2026-03-12 发布）  
**核心更新：**  
- **Control UI/dashboard-v2 重构**：引入模块化仪表盘视图（chat、config、agent、session）、命令面板、移动端底部标签栏，增强聊天工具（支持 `/` 命令、搜索、导出、消息置顶）。  
- **模型支持升级**：集成 OpenAI GPT-5.4。  

**⚠️ 已知破坏性影响（由社区反馈）：**  
- CLI 命令（如 `openclaw devices list`、`openclaw logs --follow`）因 WebSocket 握手超时（3000ms）失效 ([#45419](https://github.com/openclaw/openclaw/issues/45419), [#44714](https://github.com/openclaw/openclaw/issues/44714))。  
- 内存泄漏导致 OOM，尤其在 Raspberry Pi 等低内存设备 ([#45440](https://github.com/openclaw/openclaw/issues/45440), [#45064](https://github.com/openclaw/openclaw/issues/45064))。  
- WhatsApp 通道显示“已连接”但消息无法送达，伴随 440/401 重连循环 ([#45474](https://github.com/openclaw/openclaw/issues/45474), [#45171](https://github.com/openclaw/openclaw/issues/45171))。  

**迁移建议**：暂不建议低配设备或依赖 CLI/WhatsApp 的用户升级；等待 v2026.3.13 热修复版本。

---

## 3. 项目进展  
今日合并/关闭的关键 PR 显示团队正集中修复 v2026.3.12 引入的回归问题：  
- ✅ **CLI WebSocket 连接修复**：[#45556](https://github.com/openclaw/openclaw/pull/45556) 修复 `--bind lan` 模式下握手超时问题，已合并。  
- ✅ **插件注册表丢失 HTTP 路由**：[#45568](https://github.com/openclaw/openclaw/pull/45568) 解决 webhook 404 问题，已合并。  
- ✅ **Cron 任务死锁预防**：[#45459](https://github.com/openclaw/openclaw/pull/45459) 防止嵌套任务阻塞，已关闭（合并）。  
- ✅ **UI 长回复可读性优化**：[#45559](https://github.com/openclaw/openclaw/pull/45559) 避免超长文本被截断为灰色代码块，提升用户体验。  

此外，多个安全性和架构改进 PR 正在审核中，如文件系统权限隔离（[#42653](https://github.com/openclaw/openclaw/pull/42653)）和 Anthropic 1M 上下文 GA 迁移（[#45555](https://github.com/openclaw/openclaw/pull/45555)），表明项目在功能迭代与稳定性之间寻求平衡。

---

## 4. 社区热点  
以下 Issues 引发高度关注，反映用户核心痛点：  

| Issue | 评论数 | 关键诉求 |
|------|--------|--------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 101 | **国际化（i18n）支持**：用户强烈要求多语言界面，但维护者表示“暂无资源支持”。 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 38 | **Linux/Windows 桌面应用缺失**：社区希望补齐 macOS 之外的原生客户端。 |
| [#45471](https://github.com/openclaw/openclaw/issues/45471) | 33 | **UI 聊天窗口无法打开**：v2026.3.12 更新后基础功能失效，影响广泛。 |
| [#6872](https://github.com/openclaw/openclaw/issues/6872) | 15 | **xAI（Grok）工具支持不足**：用户抱怨 Grok 4.1 在 OpenClaw 中功能受限，无法使用 `x_search` 等原生工具。 |

> 📌 **分析**：社区对“基础功能稳定性”和“跨平台覆盖”的需求远超新功能，维护者需在创新与可靠性之间重新权衡优先级。

---

## 5. Bug 与稳定性  
按严重程度排序的今日关键 Bug（标 ✅ 为已有修复 PR）：  

| 问题 | 严重性 | 状态 | 链接 |
|------|--------|------|------|
| CLI WebSocket 握手超时（3000ms） | 🔴 高（CLI 完全不可用） | ✅ 已修复（[#45556](https://github.com/openclaw/openclaw/pull/45556)） | [#45419](https://github.com/openclaw/openclaw/issues/45419) |
| v2026.3.12 内存泄漏导致 OOM | 🔴 高（服务崩溃） | 🔄 调查中（无明确 fix PR） | [#45064](https://github.com/openclaw/openclaw/issues/45064), [#45440](https://github.com/openclaw/openclaw/issues/45440) |
| WhatsApp 消息未送达（单 tick + 440/401 循环） | 🔴 高（核心通信通道失效） | 🔄 未修复 | [#45474](https://github.com/openclaw/openclaw/issues/45474) |
| Control UI “device identity required” 错误 | 🟠 中（LAN 访问受限） | 🔄 部分修复（[#44967](https://github.com/openclaw/openclaw/issues/44967) 已关闭但未根治） | [#39611](https://github.com/openclaw/openclaw/issues/39611) |
| 文件写入工具生成 0 字节文件 | 🟠 中（数据丢失风险） | 🔄 未修复 | [#44372](https://github.com/openclaw/openclaw/issues/44372), [#44964](https://github.com/openclaw/openclaw/issues/44964) |

> 💡 **建议**：优先发布热修复版本解决 WhatsApp 和内存泄漏问题，避免用户大规模回滚。

---

## 6. 功能请求与路线图信号  
结合 PR 与 Issue，以下功能可能被纳入下一版本：  

- **文件系统细粒度权限控制**：PR [#42653](https://github.com/openclaw/openclaw/pull/42653) 提出“路径级 RWX 权限”，回应安全审计需求，已进入 XL 规模开发。  
- **消息追加模式**：PR [#40574](https://github.com/openclaw/openclaw/pull/40574) 为 Write 工具添加 `append` 参数，防止并发写入丢失，M 规模，高优先级。  
- **Chrome DevTools MCP 集成**：PR [#45373](https://github.com/openclaw/openclaw/pull/45373) 提供浏览器自动化预设，扩展 agent 能力边界。  
- **Slack 多网关部署支持**：PR [#45132](https://github.com/openclaw/openclaw/pull/45132) 引入 mux 接收器，满足企业级扩展需求。  

> 📌 **信号**：OpenClaw 正从“个人助手”向“企业可部署平台”演进，安全与多租户架构成新重点。

---

## 7. 用户反馈摘要  
从 Issues 评论提炼真实声音：  

- **满意点**：  
  - “Dashboard v2 的模块化设计让多任务管理更高效。”（@BunsDev 相关 PR 反馈）  
  - “GPT-5.4 集成速度快，响应质量显著提升。”  

- **痛点与不满**：  
  - “升级后 CLI 完全不能用，只能回滚到 v2026.3.7。”（#45419 多用户确认）  
  - “WhatsApp 显示在线但收不到消息，客户以为我们失联。”（#45474 商业用户）  
  - “Raspberry Pi 上 OOM，2GB 内存根本扛不住。”（#45440 边缘设备用户）  
  - “exec 工具频繁报‘Tool not found’，工作流中断。”（#45074 已关闭但未彻底解决）  

> 🎯 **核心诉求**：**稳定性 > 新功能**，尤其在通信通道和基础工具链方面。

---

## 8. 待处理积压  
以下长期 Issue 需维护者重点关注：  

| Issue | 年龄 | 状态 | 提醒 |
|------|------|------|------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 45 天 | OPEN | 国际化需求持续高涨，建议制定 roadmap 或招募社区贡献者。 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 73 天 | OPEN | Linux/Windows 应用缺失阻碍 adoption，可考虑 Electron 跨平台方案。 |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 31 天 | OPEN | Docker 中 `brew not installed` 错误影响容器化部署，需适配 Linux 包管理。 |
| [#25145](https://github.com/openclaw/openclaw/issues/25145) | 19 天 | OPEN | “消息发送前审批”功能对安全敏感场景至关重要，建议纳入 v2026.4 规划。 |

> ⚠️ **行动建议**：设立“积压清理周”，对 stale 但高价值 Issue 明确响应或分配资源。

---  
**报告生成时间**：2026-03-14  
**数据来源**：OpenClaw GitHub Repository（github.com/openclaw/openclaw）

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告  
**报告时间：2026-03-14**

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **“核心框架热修、垂直能力爆发、企业级演进”** 的三重态势。以 OpenClaw 为代表的核心项目进入发布后高活跃修复期，响应速度达 500+ Issues/PRs 每日；NanoBot、IronClaw 等聚焦多模型兼容与通道解耦，推动架构现代化；ZeroClaw、TinyClaw 则通过国际化、安全加固和 UI 重构向生产可用迈进。整体生态从“功能实验”转向“稳定性与扩展性并重”，企业集成、多通道通信、长期记忆成为共性突破方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|-------------|
| **OpenClaw** | 500（436 新开/活跃） | 500（359 待合并） | ✅ v2026.3.12（3/12） | 中等偏上（高活跃但回归 Bug 多） |
| **NanoBot** | 25（15 新开） | 155（39 待合并） | ❌ | 高（响应快，架构演进积极） |
| **ZeroClaw** | 37（2 新开） | 50（8 待合并） | ✅ v0.1.9-beta.140 | 良好（高效闭环，国际化领先） |
| **PicoClaw** | 35（28 新开） | 102（55 待合并） | ✅ Nightly v0.2.3 | 中高（安全漏洞需警惕） |
| **NanoClaw** | 18 | 37（16 合并） | ❌ | 高（安全修复闭环快） |
| **IronClaw** | 25（18 新开） | 50（42 待合并） | ❌ | 高（CI 驱动质量提升） |
| **LobsterAI** | 12 | 9（全合并） | ❌ | 中（技术活跃但用户体验承压） |
| **TinyClaw** | 2 | 6（4 合并） | ✅ v0.0.13 | 高（关键功能落地快） |
| **Moltis** | 11（5 关闭） | 11（5 合并） | ❌ | 良好（稳健迭代） |
| **CoPaw** | 50（41 新开） | 44（21 待合并） | ❌ | 中高（社区反馈密集） |
| **ZeptoClaw** | 8（6 关闭） | 6（3 合并） | ❌ | 高（安全闭环率高） |
| **EasyClaw** | 0 | 0 | ❌ | 低（无活动） |

> 注：健康度综合考量响应速度、Bug 修复率、架构演进与用户反馈。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大、集成度最高**：支持 GPT-5.4、WhatsApp/Slack/Telegram 多通道、MCP 工具链、CLI + Dashboard v2，功能覆盖最全；  
- **社区基数大**：单日 500+ Issues/PRs，反映广泛用户基础与商业部署尝试；  
- **企业级演进明确**：文件系统权限隔离（#42653）、多网关部署（#45132）等 PR 显示向多租户平台转型。

**技术路线差异**：  
- 相比 NanoBot 的“轻量插件化”、ZeroClaw 的“Rust + 国际化优先”、TinyClaw 的“内存动态配置”，OpenClaw 选择 **“全栈集成 + 高频热修”** 路径，牺牲部分稳定性换取功能广度。

**社区规模对比**：  
- OpenClaw 的 Issues 量是第二活跃项目 CoPaw 的 10 倍，PR 量超 NanoBot 3 倍，生态影响力显著领先。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **长期记忆系统** | NanoClaw（LanceDB+FTS5）、TinyClaw（层级记忆）、OpenClaw（记忆归档） | 跨会话上下文保持，解决“对话失忆” |
| **多通道通信集成** | OpenClaw（WhatsApp）、NanoClaw（Signal/Nostr）、CoPaw（企业微信）、Moltis（飞书） | 企业 IM 对接，提升触达能力 |
| **本地模型兼容性** | LobsterAI（Ollama 技能失效）、CoPaw（Ollama 工具失效）、PicoClaw（Ollama 无响应） | 降低部署成本，保障隐私 |
| **安全与权限控制** | PicoClaw（exec 远程执行风险）、ZeptoClaw（TTY 检测）、OpenClaw（文件 RWX 权限） | 防止越权操作，满足合规 |
| **CLI/运维工具链** | IronClaw（logs/models 命令）、OpenClaw（CLI 修复）、ZeroClaw（shell 跨平台） | 提升可观测性与运维效率 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 全功能集成平台 | 企业开发者、多通道运营者 | Go + React，强耦合架构，高频迭代 |
| **NanoBot** | 轻量插件化代理 | 开发者、本地 LLM 用户 | Python，entry_points 插件体系，低资源占用 |
| **ZeroClaw** | 国际化 + 企业级部署 | 全球化团队、合规敏感场景 | Rust，30 语种文档，WASM 通道支持 |
| **TinyClaw** | 动态配置 + 记忆系统 | 个人用户、研究型开发者 | Node.js，内存构建提示词，符号链接技能管理 |
| **IronClaw** | 多租户 + 安全审计 | 托管服务商、安全团队 | Staging CI 自动化检测（ReDoS/SSRF），严格门禁 |
| **ZeptoClaw** | 交互式 CLI 安全 | 终端用户、脚本开发者 | TTY 检测 + 可信会话，默认 hardening |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 Issues/PR 比，功能爆发）：  
  **OpenClaw、CoPaw、PicoClaw** —— 用户反馈密集，功能需求旺盛，但稳定性承压。
  
- **质量巩固阶段**（高 PR 合并率，Bug 闭环快）：  
  **ZeroClaw、ZeptoClaw、IronClaw** —— 注重架构 clean-up、安全加固与文档完善，适合生产环境。

- **生态扩展阶段**（新功能 PR 主导）：  
  **NanoClaw（支付/多通道）、TinyClaw（Google Chat）、Moltis（飞书）** —— 探索垂直场景集成。

---

## 7. 值得关注的趋势信号

1. **“稳定性 > 新功能”成为社区共识**  
   OpenClaw、LobsterAI 用户明确表示愿牺牲新功能换取 CLI/WhatsApp 等基础功能稳定，开发者需重新权衡发布节奏。

2. **企业级部署驱动架构变革**  
   多项目（OpenClaw、IronClaw、ZeroClaw）同步推进多租户、权限隔离、审计日志，预示 **B2B2C 模式** 将成为主流商业化路径。

3. **本地模型支持仍是最大体验瓶颈**  
   超 6 个项目报告 Ollama/Qwen 兼容性问题，且缺乏调试工具。**本地 LLM 配置向导 + 运行时诊断** 是亟待填补的能力缺口。

4. **MCP 与 ACP 协议竞争生态标准**  
   OpenClaw 深化 MCP 工具链，而 ZeptoClaw、CoPaw 探索 ACP 支持，未来 6 个月或将出现 **跨代理通信协议事实标准**。

> **对开发者的建议**：优先保障核心通道（如 WhatsApp/Telegram）稳定性；投资本地模型适配层；关注 MCP/ACP 协议演进，提前布局互操作性。

---  
**分析师备注**：生态整体健康，但需警惕“功能膨胀导致体验倒退”风险。建议项目方设立“用户体验守护者”角色，平衡创新与可靠性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-14）

---

## 1. 今日速览

NanoBot 在过去24小时内表现出极高的开发活跃度，共处理 **155 条 Pull Requests**（其中 116 条已合并/关闭，39 条待合并）和 **25 条 Issues**（15 条新开，10 条关闭），显示出社区贡献者持续高强度参与。尽管无新版本发布，但核心功能迭代迅速，重点聚焦于多模型兼容性、通道架构解耦与子代理执行可观测性优化。项目整体处于快速演进阶段，技术债清理与用户体验改进并行推进。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 v0.1.4 系列，团队正集中处理底层架构优化与关键 Bug 修复，预计下一版本将包含多项通道与 Provider 增强功能。

---

## 3. 项目进展

今日多项重要 PR 被合并，显著提升系统健壮性与扩展能力：

- **#1909**（已合并）：强制在记忆 consolidation 阶段使用 `tool_choice="required"`，解决 LLM 跳过 `save_memory` 调用导致记忆归档失败的问题（[链接](https://github.com/HKUDS/nanobot/pull/1909)）。
- **#1981**（已合并）：升级 `wecom-aibot-sdk-python` 至 ≥0.1.5，修复企业微信通道重复接收循环、断连事件处理及心跳超时问题（[链接](https://github.com/HKUDS/nanobot/pull/1981)）。
- **#1959**（已合并）：修正 README 中 `scedule.gif` 文件名拼写错误，虽小但体现对文档质量的重视（[链接](https://github.com/HKUDS/nanobot/pull/1959)）。
- **#157**（已合并）：集成 NVIDIA 支持并修复 Telegram 轮询冲突，增强对主流 AI 硬件生态的兼容性（[链接](https://github.com/HKUDS/nanobot/pull/157)）。

此外，**#1984** 与 **#1982** 提出“通道插件化架构”，将 11 个内置通道配置从 `schema.py` 解耦至独立模块，支持通过 `entry_points` 实现外部通道插件动态加载，为未来生态扩展奠定基础（[链接1](https://github.com/HKUDS/nanobot/pull/1984) | [链接2](https://github.com/HKUDS/nanobot/pull/1982)）。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

- **#1955**（9 条评论）：用户 @dweigit 提出“子 Agent 执行过程黑盒”问题，呼吁增加子代理工具调用与思维链的可视化追踪能力。该需求直指多智能体协作场景下的调试痛点，已有开发者开始探讨实现方案（[链接](https://github.com/HKUDS/nanobot/issues/1955)）。
- **#1931**（8 条评论）：关于记忆 consolidation 失败的警告日志引发广泛讨论，最终由 PR #1909 提供解决方案，反映用户对长期对话一致性的高度关注（[链接](https://github.com/HKUDS/nanobot/issues/1931)）。
- **#1954**（3 条评论）：用户 @runbrick 询问是否支持对话中动态切换 Provider（如从 Moonshot 切至 GPT-5.4），暴露当前配置静态化的局限，可能推动运行时 Provider 切换功能开发（[链接](https://github.com/HKUDS/nanobot/issues/1954)）。

### 🚀 高关注度 PR

- **#1989**（新提交）：为兼容非结构化输出模型（如国产开源模型），添加基于文本的 XML 工具调用回退解析器，提升对非标准 LLM API 的适配能力（[链接](https://github.com/HKUDS/nanobot/pull/1989)）。
- **#1987**：为 Azure OpenAI Provider 增加 Entra ID OAuth 认证支持，满足企业级安全合规需求（[链接](https://github.com/HKUDS/nanobot/pull/1987)）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| ⚠️ 高 | #1979 | 长对话导致上下文窗口溢出，触发 `ContextWindowExceededError`，LLM 调用完全失败 | 未修复 |
| ⚠️ 高 | #1947 | 连接本地 Ollama 实例时报 “No API key configured”，即使配置了占位符密钥 | 已由 #1983 修复（[PR](https://github.com/HKUDS/nanobot/pull/1983)） |
| ⚠️ 中 | #1927 | DashScope 不支持 `tool_choice="required"`，导致记忆归档失败 | 未修复，需适配 DashScope 特殊约束 |
| ⚠️ 中 | #1948 | `exec` 工具运行 npx/npm 命令时无法写入 `/tmp`，尽管手动可写 | 未修复，疑似沙箱权限隔离问题 |
| ⚠️ 低 | #1937 | Windows 上 `/restart` 命令因路径解析错误失败 | 已关闭，可能已修复 |

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或明确技术路径：

- **子代理工作目录隔离**：PR #1935 为 `spawn` 工具添加 `working_dir` 参数，允许子代理继承项目级 `AGENTS.md` 与 `SKILLS` 配置（[链接](https://github.com/HKUDS/nanobot/pull/1935)）。
- **技能禁用机制**：PR #1934 实现通过 `enabled: false` 前端标记禁用技能，无需删除（[链接](https://github.com/HKUDS/nanobot/pull/1934)）。
- **运行时状态查询**：PR #1985 新增 `/status` 命令，提供实时运行诊断信息（[链接](https://github.com/HKUDS/nanobot/pull/1985)）。
- **多 Provider 动态切换**：虽无直接 PR，但 #1954 的强烈需求可能推动配置热重载机制。
- **A2A 协议支持**：PR #1368 引入官方 `a2a-sdk` 实现跨智能体通信，迈向多智能体生态互联（[链接](https://github.com/HKUDS/nanobot/pull/1368)）。

---

## 7. 用户反馈摘要

- **痛点**：
  - 子代理执行不可见（#1955）、长对话上下文溢出（#1979）、DashScope/Ollama 等特定 Provider 兼容性问题（#1927, #1947）是高频反馈。
  - 企业微信（#1988）、Matrix（#1968）等通道配置缺失或启动失败，影响生产部署。
- **满意点**：
  - 用户认可 NanoBot 的轻量设计（#1977 提及“轻量高效”），尤其赞赏通过 `Soul.md` 和 `User.md` 实现个性化控制。
  - 对插件化架构（#1982/#1984）和 CI 集成提议（#1915）表示欢迎，认为有助于长期维护。
- **使用场景**：
  - 多用于企业内部助手（飞书、企业微信）、本地开发环境（Ollama）、多模型混合调用（Moonshot + OpenAI）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#1822**（自 03-10 起）：NanoBot 不再支持 NVIDIA 模型，影响 GPU 用户群体，需验证并修复兼容性（[链接](https://github.com/HKUDS/nanobot/issues/1822)）。
- **#1829**（自 03-10 起）：Docker 环境下自定义命令添加后不生效，阻碍用户技能扩展（[链接](https://github.com/HKUDS/nanobot/issues/1829)）。
- **#1487**（自 03-03 起）：Qwen3.5 Plus 模型因函数参数非 JSON 格式报错，涉及 DashScope 特殊处理逻辑（[链接](https://github.com/HKUDS/nanobot/issues/1487)）。
- **#1035**（自 02-23 起）：NanoGPT Provider 支持 PR 长期开放，未获 review，可能错失隐私导向用户（[链接](https://github.com/HKUDS/nanobot/pull/1035)）。

> **健康度评估**：项目活跃度高，响应速度快，但需警惕特定 Provider 兼容性与部署体验类问题的累积。建议设立“Provider 兼容性”专项看板，系统性解决第三方集成问题。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-14）

---

## 1. 今日速览

Zeroclaw 项目在 2026-03-14 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **37 条 Issues**（关闭 35 条，仅新增 2 条）和 **50 条 PRs**（合并/关闭 42 条，待合并 8 条），显示出高效的维护节奏和问题闭环能力。项目发布两个新版本（`v0.1.9-beta.140` 和 `v0.1.9-beta.136`），重点完善了多语言文档支持与浏览器兼容性修复。尽管存在少量编译与分支策略相关的 S1 级问题，整体项目健康度良好，功能迭代与稳定性修复并重。

---

## 2. 版本发布

### 🔹 v0.1.9-beta.140（最新）
- **核心更新**：
  - 完成全部 30 种语言的文档中心翻译（[#3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450)）
  - 完成中文文档（zh-CN）的完整本地化迁移与结构对齐（[#3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429)）
- **影响**：显著提升非英语用户的使用体验，降低入门门槛。
- **迁移注意**：无破坏性变更，文档路径已统一至 `i18n/` 目录结构。

### 🔹 v0.1.9-beta.136
- **核心修复**：
  - 为旧版浏览器添加 `crypto.randomUUID` 降级方案（[#3407](https://github.com/zeroclaw-labs/zeroclaw/pull/3407)）
  - 修复不支持 `reasoning_enabled` 的 Ollama 模型导致的运行时错误（[#3411](https://github.com/zeroclaw-labs/zeroclaw/pull/3411)）
- **影响**：增强跨平台兼容性，避免因模型能力误判引发的崩溃。

---

## 3. 项目进展

今日合并/关闭的 PR 体现出多方向协同推进：

- **国际化与文档**：完成全球 30 语种文档体系搭建（[#3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450)、[#3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429)），为全球化部署奠定基础。
- **Windows 平台支持**：实现 `shell` 工具在 Windows 上的原生命令执行（`cmd.exe /C`）（[#3442](https://github.com/zeroclaw-labs/zeroclaw/pull/3442)），解决长期存在的跨平台工具调用限制。
- **MCP 与扩展性**：引入动态节点发现机制（[#3448](https://github.com/zeroclaw-labs/zeroclaw/pull/3448)），支持外部设备通过 WebSocket 注册能力，呼应 OpenClaw 生态集成需求。
- **稳定性修复**：修复 Matrix 通道缺失 `Relation` 导入导致的编译失败（[#3368](https://github.com/zeroclaw-labs/zeroclaw/pull/3368)）、Cron 调度器因单条任务解析失败而整体阻塞的问题（[#3405](https://github.com/zeroclaw-labs/zeroclaw/pull/3405)）。
- **配置灵活性**：支持通过 `ZEROCLAW_PROVIDER_URL` 环境变量覆盖 Ollama API 地址（[#3414](https://github.com/zeroclaw-labs/zeroclaw/pull/3414)），优化容器化部署体验。

> 项目整体在 **国际化、跨平台兼容性、MCP 工具链稳定性、运行时扩展能力** 四个维度取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issue：#2953 — [Bug] Add `channel-matrix` flag in official builds
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/2953
- **评论数**：5 | **👍**：2
- **诉求分析**：用户反馈官方构建版本中缺失 `channel-matrix` 编译标志，导致无法启用 Matrix 通信通道。该问题暴露了 **发布构建配置与功能可见性之间的脱节**，引发对构建流程透明度的质疑。尽管已有相关修复 PR（如 [#3368](https://github.com/zeroclaw-labs/zeroclaw/pull/3368)），但用户仍呼吁在 CI/CD 中明确标注各构建版本包含的功能模块。

### 💬 高关注度 Issue：#3131 — Branch policy clarification: master/main/dev/main-fix divergence
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/3131
- **评论数**：1 | **👍**：4（高赞同）
- **诉求分析**：社区对当前分支策略（master 为主干但曾从 main 切换）感到困惑，担心功能丢失（如 MCP、agent_ipc）。此 Issue 反映了 **项目治理透明度不足** 的风险，需维护者明确发布分支、开发分支与实验分支的职责边界。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| **S0** | #3379、#3397 | 切换至 `master` 分支后 MCP 功能完全丢失，疑似代码回退 | ✅ 已关闭（相关修复见 [#3448](https://github.com/zeroclaw-labs/zeroclaw/pull/3448)） |
| **S1** | #3452 | `master` 分支在 32 位平台编译失败：`AtomicU32` 未声明（`src/channels/mod.rs:2355`） | 🟡 新开，**无 fix PR**，需紧急处理 |
| **S1** | #3430 | 32 位构建中 `mcp_client.rs` 仍使用 `AtomicU64`（PR #3409 遗漏） | ✅ 已关闭（[#3430](https://github.com/zeroclaw-labs/zeroclaw/issues/3430) 自闭合） |
| **S1** | #2693 | Mistral 提供商返回 "422 Extra inputs are not permitted" | ✅ 已关闭（疑似参数校验逻辑修复） |
| **S3** | #3417 | Daemon 在特定条件下创建名为 `~` 的无效文件夹 | ✅ 已修复（[#3427](https://github.com/zeroclaw-labs/zeroclaw/pull/3427)） |

> ⚠️ **注意**：#3452 为今日新报 S1 级编译阻塞问题，影响 32 位用户，建议优先修复。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，并有对应 PR 推进，**极可能纳入下一版本**：

- **LinkedIn 工具集成**（[#3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400)）：支持 OAuth2 认证下的内容发布与互动，满足企业社交自动化需求。
- **Bridge WebSocket 通道**（[#3401](https://github.com/zeroclaw-labs/zeroclaw/pull/3401)）：实现第三方系统通过流式 WebSocket 与 ZeroClaw 交互，补全 #2816 未闭环功能。
- **会话状态持久化**（[#3421](https://github.com/zeroclaw-labs/zeroclaw/pull/3421)）：通过 `--session-state-file` 实现交互式对话断点续传，提升长流程任务可靠性。
- **WeChat Enterprise（WeCom）通道支持**（[#3396](https://github.com/zeroclaw-labs/zeroclaw/issues/3396)）：虽无 PR，但需求明确，适合中国市场的企业集成场景。

> 这些功能体现出 ZeroClaw 正从“通用 AI 代理框架”向“企业级多通道智能中枢”演进。

---

## 7. 用户反馈摘要

- **痛点**：
  - “切换分支后 MCP 突然不能用，文档也没说明”（#3379）→ **版本迁移缺乏兼容性保障**
  - “Docker 容器里连 `git` 都用不了，因为没 shell”（#3359）→ **生产环境工具链不完整**
  - “Cron 任务失败后整个调度器就停了”（#3405）→ **系统容错性待加强**

- **满意点**：
  - “中文文档终于齐全了，新手友好度大幅提升”（#3429 评论区）
  - “Windows 上终于能跑 `dir` 和 `findstr` 了”（#3442 相关反馈）

- **典型使用场景**：
  - 企业通过 WeCom/Matrix 接收自动化审批通知
  - 开发者在本地使用 MCP 工具操作 Git 仓库
  - 运维通过 Cron + 自定义工具实现定时巡检

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #2953 | [Bug] Add `channel-matrix` flag in official builds | 2026-03-07 | 🟡 Open | 虽有关联修复，但官方构建策略未明确，需维护者回应 |
| PR | #2017 | feat(providers): add Avian as OpenAI-compatible provider | 2026-02-27 | 🟡 Open | 长期未合入，可能需重新评估优先级 |
| PR | #3180 | chore(deps): bump docker/setup-buildx-action from 3.12.0 to 4.0.0 | 2026-03-11 | 🟡 Open | 依赖更新积压，存在潜在安全风险 |

> 📌 **建议**：维护团队应尽快澄清构建策略（#2953），并评估 Avian 提供商 PR 的合并路径。

--- 

**报告生成时间**：2026-03-14  
**数据来源**：GitHub Zeroclaw 仓库公开数据  
**分析师备注**：项目整体健康，但需警惕分支治理与构建一致性风险。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-14）

---

## 1. 今日速览

PicoClaw 在 2026-03-13 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **35 条 Issue 更新**（28 新开/活跃，7 已关闭）和 **102 条 PR 更新**（55 待合并，47 已合并/关闭），显示出强劲的开发节奏。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260314.c68b4f39`），聚焦于安全加固、配置迁移与多语言支持。核心议题集中在 **Agent 架构重构**、**安全默认值调整** 和 **本地模型集成优化**，反映出项目正从功能扩展向稳定性与可维护性演进。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260314.c68b4f39`
- **类型**：自动化 nightly 构建（可能不稳定，谨慎使用）
- **主要变更范围**（基于 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)）：
  - 安全增强：修复默认配置中 `allow_token_query=true` 和 `allow_origins=["*"]` 的过度宽松问题（#1530）
  - 配置迁移：修复旧版 `providers` 配置继承默认 `glm-4.7` 模型的错误行为（#1513）
  - 凭证加密：引入 AES-GCM 加密与 SecureStore（#1521）
  - 文档完善：新增西班牙语 README 翻译（#1448）、高级配置字段说明（#1519）及 cron 任务查看指南（#1515）
- **⚠️ 迁移注意**：
  - 若使用旧版仅含 `providers` 块的配置，需检查是否意外继承了 `glm-4.7` 模型；建议显式指定 `models` 列表。
  - 新部署应避免依赖默认的宽松 CORS 和 token 查询参数，建议手动配置最小权限。

---

## 3. 项目进展

今日合并/关闭的关键 PR 显著提升了系统安全性、可观测性与用户体验：

| PR | 类型 | 关键贡献 |
|----|------|--------|
| [#1513](https://github.com/sipeed/picoclaw/pull/1513) | 配置修复 | 修复旧配置误继承默认模型的问题，避免“无 API key”错误（#1491） |
| [#1521](https>//github.com/sipeed/picoclaw/pull/1521) | 安全增强 | 引入 AES-256-GCM 凭证加密与 SecureStore，为敏感数据提供运行时保护 |
| [#1519](https://github.com/sipeed/picoclaw/pull/1519) | 文档完善 | 补全高级配置字段文档，解决 #1489 中提到的 README 与代码不一致问题 |
| [#1515](https://github.com/sipeed/picoclaw/pull/1515) | 用户体验 | 在 README 和 CLI 中明确 `picoclaw cron list` 命令，直接回应 #1501 用户疑问 |
| [#1417](https://github.com/sipeed/picoclaw/pull/1417) | Agent 功能 | 修复 `TOOLS.md` 未被加载至 Agent 上下文的问题，提升自定义工具可用性 |
| [#1516](https://github.com/sipeed/picoclaw/pull/1516) | Channel 功能 | 实现飞书非图片文件本地路径暴露，支持 Agent 文件工具调用（#1506） |

> ✅ 项目整体向更安全、更易用、更透明的方向迈进，尤其在配置一致性与用户引导方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 5）

| Issue | 主题 | 社区诉求分析 |
|------|------|-------------|
| [#1218](https://github.com/sipeed/picoclaw/issues/1218)（24 评论） | Agent 人格定义（SOUL.md / AGENT.md） | 用户强烈关注 Agent 的“人格化”能力，希望以自然语言方式定义角色，而非纯结构化配置。此为 Agent 重构核心议题。 |
| [#1161](https://github.com/sipeed/picoclaw/issues/1161)（17 评论） | Ollama 本地模型无响应 | 反映本地部署场景下的关键痛点：Agent 调用模型但无输出。社区亟需清晰的本地 LLM 配置指南与调试工具。 |
| [#1316](https://github.com/sipeed/picoclaw/issues/1316)（9 评论） | Agent Loop 事件驱动重构 | 开发者呼吁将黑盒 Agent 循环改造为可观测、可中断、可 Hook 的系统，以满足 UI 监控与自动化集成需求。 |

> 💡 热点表明：**Agent 架构现代化** 和 **本地模型支持** 是当前社区最迫切的技术方向。

---

## 5. Bug 与稳定性

### ⚠️ 高优先级 Bug（按严重性排序）

| Issue | 严重性 | 状态 | 关联 Fix PR |
|------|--------|------|------------|
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) | 🔴 高（死锁） | Open | 无 |  
| *描述*：`pkg/routing/pool.go` 中 factory panic 导致 inflight entry 永久滞留，引发目标级死锁 | | | |
| [#1525](https://github.com/sipeed/picoclaw/issues/1525) | 🔴 高（安全风险） | Open | 无 |  
| *描述*：`tools.exec.allow_remote` 默认为 `true`，远程上下文可执行任意 shell 命令 | | | |
| [#1526](https://github.com/sipeed/picoclaw/issues/1526) | 🔴 高（安全风险） | Open | 无 |  
| *描述*：受限 exec 仍可通过 symlink 操作数读取工作区外文件 | | | |
| [#1491](https://github.com/sipeed/picoclaw/issues/1491) | 🟠 中（配置错误） | Open | [#1513](https://github.com/sipeed/picoclaw/pull/1513) |  
| *描述*：配置加载失败，“no API key for glm-4.7” | | | |
| [#1502](https://github.com/sipeed/picoclaw/issues/1502) | 🟠 中（集成故障） | Open | 无 |  
| *描述*：Mistral 集成返回 “Extra inputs...” 错误 | | | |

> ❗ 维护者需优先处理 **#1150（死锁）** 和 **#1525/#1526（高危安全漏洞）**，建议发布 hotfix。

---

## 6. 功能请求与路线图信号

### 📌 高潜力新功能（已有 PR 或强社区支持）

| 功能 | 关联 Issue/PR | 路线图信号 |
|------|---------------|----------|
| **Agent Steering（执行中干预）** | [#1517](https://github.com/sipeed/picoclaw/pull/1517) | 强（直接实现 #1316 部分需求） |
| **Azure OpenAI 支持** | [#1424](https://github.com/sipeed/picoclaw/issues/1424) | 中（企业用户需求明确） |
| **可插拔语音 I/O（STT/TTS）** | [#1503](https://github.com/sipeed/picoclaw/issues/1503) | 中（扩展多模态能力） |
| **能力发现端点（Orchestration）** | [#1474](https://github.com/sipeed/picoclaw/issues/1474) | 中（面向系统集成） |
| **隐私模式（禁用转录持久化）** | [#1528](https://github.com/sipeed/picoclaw/issues/1528) | 中（合规性需求上升） |

> ✅ **Agent Steering** 最可能纳入下一稳定版，因其已有完整 PR 且解决核心交互痛点。

---

## 7. 用户反馈摘要

- **满意点**：
  - 多语言支持进展（西班牙语 README）获社区好评（#1448）。
  - `cron list` 命令文档化极大提升调度任务可管理性（#1515 回应 #1501）。
- **痛点**：
  - **本地模型配置复杂**：Ollama 用户普遍反映“Agent 运行但无响应”（#1161），缺乏调试指引。
  - **安全默认值风险高**：新用户易因默认开启 `allow_origins=["*"]` 和远程 exec 暴露系统（#1530, #1525）。
  - **文件工具限制**：飞书非图片文件无法被 Agent 读取，阻碍工作流自动化（#1506 已由 #1516 解决）。
- **使用场景**：
  - 企业用户关注 Azure OpenAI 集成与能力发现 API（#1424, #1474）。
  - 隐私敏感场景呼吁禁用转录存储（#1528）。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue/PR

| 编号 | 类型 | 积压时长 | 提醒 |
|------|------|--------|------|
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) | Bug（死锁） | 8 天 | **高优先级**：影响路由池稳定性，需紧急修复 |
| [#1216](https://github.com/sipeed/picoclaw/issues/1216) | Meta（Agent 重构） | 6 天 | 核心架构议题，应协调 #1218、#1316 推进 |
| [#751](https://github.com/sipeed/picoclaw/pull/751) | PR（WebSocket 网关） | 17 天 | 功能完整但未合并，影响外部集成能力 |
| [#269](https://github.com/sipeed/picoclaw/issues/269) | Bug（Anthropic 404） | 25 天 | 关键提供商故障，需验证是否仍存在 |

> 🔔 建议维护者优先处理 **#1150** 和 **#751**，前者关乎系统稳定性，后者为重要基础设施增强。

--- 

**报告生成时间**：2026-03-14  
**数据来源**：PicoClaw GitHub Repository (github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-14）

---

## 1. 今日速览

NanoClaw 社区活跃度显著上升，过去24小时内共产生 **18条 Issues 更新** 和 **37条 PR 更新**，其中 PR 合并/关闭率达43%（16/37），显示出较强的开发执行力。核心功能围绕 **长期记忆增强、多通道通信集成（WhatsApp/Signal/Nostr）、安全加固与凭证管理优化** 展开。尽管无新版本发布，但多个高优先级 Bug 已提交修复 PR，项目整体处于快速迭代与稳定性提升阶段。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能扩展与关键缺陷修复，预计下一版本将整合 FTS5 搜索、LanceDB 记忆系统、WhatsApp 通道及安全增强等特性。

---

## 3. 项目进展

今日 **16个 PR 被合并或关闭**，主要进展包括：

- ✅ **安全修复闭环**：针对 WebFetch/WebSearch 工具输出中潜在提示注入攻击的问题，已通过 `PostToolUse` 钩子实现确定性内容清洗（[#1035](https://github.com/qwibitai/nanoclaw/pull/1035)、[#1036](https://github.com/qwibitai/nanoclaw/pull/1036)），有效缓解间接提示注入风险。
- ✅ **凭证验证前置**：在 setup 流程中新增 Claude Token 实时校验机制，避免无效 token 延迟暴露问题（[#1044](https://github.com/qwibitai/nanoclaw/pull/1044)）。
- ✅ **消息处理优化**：修复因 SDK 返回多结果导致用户收到重复消息的问题（[#1020](https://github.com/qwibitai/nanoclaw/issues/1020) 相关 PR 已合并）。
- ✅ **依赖安全加固**：集成 Trivy 扫描至 CI/CD 流程，阻断高危依赖合并（[#1034](https://github.com/qwibitai/nanoclaw/pull/1034)）。

项目在 **安全性、用户体验与部署可靠性** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 编号 | 类型 | 热度 | 链接 |
|------|------|------|------|
| #1047 | Bug（高优） | 更新频繁，涉及服务崩溃 | [Issue #1047](https://github.com/qwibitai/nanoclaw/issues/1047) |
| #1043 | Feature（记忆升级） | 技术前瞻性强 | [PR #1043](https://github.com/qwibitai/nanoclaw/pull/1043) |
| #1051 | Feature（WhatsApp 集成） | 多通道战略关键 | [PR #1051](https://github.com/qwibitai/nanoclaw/pull/1051) |

**分析**：  
社区对 **WhatsApp 通道稳定性** 高度关注，#1047 报告其在非 macOS 环境下因 `process.exit()` 导致服务不可恢复，引发对生产部署可行性的担忧。与此同时，#1043 提出的 **混合 BM25+向量检索记忆系统** 被视为突破“会话失忆”瓶颈的关键路径，反映用户对长期上下文记忆的核心诉求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|---------------|
| 🔴 High | [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) | WhatsApp 通道在 QR 登录或会话注销时调用 `process.exit()`，导致服务崩溃且无法自动恢复 | ✅ 是（[#1050](https://github.com/qwibitai/nanoclaw/pull/1050)） |
| 🔴 High | [#1046](https://github.com/qwibitai/nanoclaw/issues/1046) | 定时任务容器未挂载 MCP 凭证（如 Gmail/Calendar），导致工具调用失败 | ✅ 是（[#1049](https://github.com/qwibitai/nanoclaw/pull/1049)） |
| 🔴 High | [#1020](https://github.com/qwibitai/nanoclaw/issues/1020) | SDK 返回多个结果时用户收到重复消息 | ✅ 已修复（相关 PR 已合并） |
| 🟠 Medium | [#1045](https://github.com/qwibitai/nanoclaw/issues/1045) | 设置阶段未验证 Claude Token 有效性，错误延迟至首次消息发送才暴露 | ✅ 是（[#1044](https://github.com/qwibitai/nanoclaw/pull/1044)） |
| 🟠 Medium | [#829](https://github.com/qwibitai/nanoclaw/issues/829) | SOUL.md 缺乏禁止虚构工具执行结果的规则，存在误导风险 | ❌ 尚无 PR |

> 注：所有高优 Bug 均已提交修复 PR，处于待审状态，预计将快速合入主干。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或明确技术路径：

- **长期记忆系统升级**：用户强烈呼吁跨会话记忆能力。PR [#1043](https://github.com/qwibitai/nanoclaw/pull/1043) 引入 LanceDB-Pro 实现混合检索，结合 FTS5 全文索引（[#908](https://github.com/qwibitai/nanoclaw/issues/908)）与 IPC 搜索工具（[#909](https://github.com/qwibitai/nanoclaw/issues/909)），构成完整记忆解决方案。
- **多通道通信扩展**：WhatsApp（[#1051](https://github.com/qwibitai/nanoclaw/pull/1051)）、Signal（[#1016](https://github.com/qwibitai/nanoclaw/pull/1016)）、Nostr DM（[#1041](https://github.com/qwibitai/nanoclaw/pull/1041)）通道陆续提交，表明项目正从单一聊天接口向泛在通信平台演进。
- **自主支付能力**：PR [#1042](https://github.com/qwibitai/nanoclaw/pull/1042) 集成 NIP-47 Lightning 钱包，支持通过 Signal 命令发起 Zap 支付，体现“AI 自主经济行为”的路线图方向。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “Claude 订阅 token 每小时过期，无法稳定使用”（[#1029](https://github.com/qwibitai/nanoclaw/issues/1029)）→ 反映 OAuth 流程不完善。
  - “WhatsApp 手机号提示带 `+` 导致绑定失败”（[#447](https://github.com/qwibitai/nanoclaw/issues/447)）→ 文档与实际协议不一致。
  - “Agent 无法判断今天是周几”（[#698](https://github.com/qwibitai/nanoclaw/issues/698)）→ 时间上下文缺失影响调度类任务。

- **满意点**：
  - 对 Prompt Caching 可降低 90% Anthropic 成本表示兴趣（[#1033](https://github.com/qwibitai/nanoclaw/issues/1033)），体现对成本优化的认可。
  - 多通道支持（如 Signal）获社区积极响应，[#1016](https://github.com/qwibitai/nanoclaw/pull/1016) 作者称“第一次贡献开源，愿意调整”。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先处理：

| Issue | 类型 | 创建时间 | 状态 | 链接 |
|------|------|--------|------|------|
| #411 | 安全文档 | 2026-02-23 | OPEN | [间接提示注入风险未文档化](https://github.com/qwibitai/nanoclaw/issues/411) |
| #527 | 文档错误 | 2026-02-26 | OPEN | [CLAUDE.md 指导写入只读路径](https://github.com/qwibitai/nanoclaw/issues/527) |
| #698 | Bug | 2026-03-04 | OPEN | [Agent 无法从 ISO 时间推断星期](https://github.com/qwibitai/nanoclaw/issues/698) |
| #753 | Bug | 2026-03-05 | OPEN | [自定义助手名未同步至 main 组](https://github.com/qwibitai/nanoclaw/issues/753) |

> 建议：#411 和 #527 属文档类问题，修复成本低但影响用户体验；#698 涉及核心时间感知能力，应纳入基础上下文增强计划。

--- 

**总结**：NanoClaw 正处于功能爆发期，社区贡献活跃，关键路径清晰。若能加速高优 Bug 合入并补全文档短板，将显著提升生产环境可用性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-14）

---

## 1. 今日速览

IronClaw 项目在过去24小时内保持高活跃度，共产生 **25条 Issues 更新**（18条新开/活跃，7条关闭）和 **50条 PR 更新**（42条待合并，8条已合并/关闭），显示出社区贡献与核心团队开发并进的良好态势。尽管无新版本发布，但多个关键功能模块（如配置系统、CLI 工具链、MCP 架构、安全机制）正经历密集迭代。值得注意的是，**Staging CI Review 自动化检测系统**持续发现高风险问题（如 ReDoS、SSRF、O(n²) 性能瓶颈），推动代码质量显著提升。

---

## 2. 版本发布

**无新版本发布**。当前主干分支处于功能完善与稳定性修复阶段，预计下一版本将聚焦于配置热重载、多租户隔离及 CLI 管理命令的正式发布。

---

## 3. 项目进展

今日有 **8个 PR 被合并或关闭**，主要进展包括：

- **配置系统统一化**：[#1124](https://github.com/nearai/ironclaw/pull/1124) 修复了 `ChannelsConfig::resolve()` 忽略数据库设置的严重缺陷，为 #86（配置热重载）奠定基础。
- **CLI 工具链扩展**：新增 `ironclaw logs`（[#1105](https://github.com/nearai/ironclaw/pull/1105)）、`gateway serve/start/stop/status`（[#1050](https://github.com/nearai/ironclaw/pull/1050)）、`models list/set`（[#1043](https://github.com/nearai/ironclaw/pull/1043)）等子命令，显著提升运维能力。
- **安全与性能修复**：[#1153](https://github.com/nearai/ironclaw/pull/1153) 消除 SSE 解析中的 O(n²) 内存分配；[#1152](https://github.com/nearai/ironclaw/pull/1152) 修复 OAuth 错误类型丢失问题，均响应 Staging CI 发现的高危告警。
- **Telegram 通道稳定性**：[#1157](https://github.com/nearai/ironclaw/pull/1157) 实现“热激活时验证所有者”，避免 `owner_id = null` 导致的配对回退问题。

整体项目在 **可运维性、安全性和通道可靠性** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#728](https://github.com/nearai/ironclaw/issues/728) — *Compatibility with kimi-k2.5 model*
- **评论数：4** | **👍：3**
- 用户报告 IronClaw 与 kimi-k2.5 模型集成时因 API 约束（temperature 必须为 1、缺少 reasoning_content 字段）而失败。
- **背后诉求**：反映项目对第三方 LLM 提供商兼容性覆盖不足，需增强 API 适配层灵活性。已有开发者提议通过 provider-specific config override 解决。

### 🔥 高关注度 PR：[#1118](https://github.com/nearai/ironclaw/pull/1118) — *Multi-tenant auth with per-user workspace isolation*
- 虽无评论，但涉及 **高风险、XL 规模** 重构，旨在解决 #760 类线程上下文污染漏洞，是架构级演进的关键信号。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| 🔴 HIGH | [#825](https://github.com/nearai/ironclaw/issues/825) | ReDoS 风险：事件触发正则未验证，可致服务拒绝 | ✅ [#1143](https://github.com/nearai/ironclaw/pull/1143) 包含参数规范化修复 |
| 🔴 HIGH | [#1103](https://github.com/nearai/ironclaw/issues/1103) | SSRF 风险：可配置 embedding base URL 未校验 | ❌ 尚无 PR，需紧急处理 |
| 🔴 HIGH | [#1142](https://github.com/nearai/ironclaw/issues/1142) | SSE 解析路径 O(n²) 字符串分配，影响性能 | ✅ [#1153](https://github.com/nearai/ironclaw/pull/1153) |
| 🟠 MEDIUM | [#1051](https://github.com/nearai/ironclaw/issues/1051) | 事件触发 routine 永不触发（P1） | ❌ 尚无 PR，影响核心自动化功能 |
| 🟠 MEDIUM | [#991](https://github.com/nearai/ironclaw/issues/991) | Telegram bot token 间歇性 404 验证失败 | ❌ 可能需重试机制或缓存优化 |
| 🟠 MEDIUM | [#1139](https://github.com/nearai/ironclaw/issues/1139) | Safari IME 输入时 Enter 误发消息 | ❌ 前端事件处理缺陷，需 Web 团队介入 |

> ⚠️ **注意**：SSRF 风险（#1103）尚未修复，建议优先评估。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **图像文件上传与分析支持** ([#1122](https://github.com/nearai/ironclaw/issues/1122)) | 无 | 🟡 中（用户需求明确，但需设计 MIME 类型扩展机制） |
| **Slack Socket Mode 支持** ([#1155](https://github.com/nearai/ironclaw/issues/1155)) | 无 | 🟢 高（已有 Feishu WASM 通道实现 [#1110](https://github.com/nearai/ironclaw/pull/1110)，模式可复用） |
| **Cron 表达式人性化显示** ([#1131](https://github.com/nearai/ironclaw/issues/1131)) | ✅ [#1154](https://github.com/nearai/ironclaw/pull/1154) | ✅ 已合并，将随下一版本发布 |
| **BYOK 模型配置支持** ([#1027](https://github.com/nearai/ironclaw/issues/1027)) | 无 | 🟡 中（涉及密钥管理架构，需配合 #1118 多租户方案） |

**路线图信号**：项目正从“单用户代理”向“多租户、可托管、易运维”平台演进，CLI 工具链与配置系统的完善是近期重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - 第三方 LLM 兼容性差（kimi-k2.5、OpenAI Compatible 401 错误 [#1116](https://github.com/nearai/ironclaw/issues/1116)）
  - 自动化 routine 不可靠（创建后不触发、Google Sheets 写入静默失败 [#1002](https://github.com/nearai/ironclaw/issues/1002)）
  - Safari 输入法体验差（IME 确认键误发消息）
- **满意点**：
  - CLI 管理命令逐步完善，运维体验提升（见 #1050、#1105）
  - 安全审计严格，高危漏洞快速响应（如 ReDoS、SSRF）
- **使用场景**：
  - 企业用户尝试集成 Feishu/Telegram 实现内部自动化（#1110、#1157）
  - 开发者使用 `build_software` 工具链进行本地开发（#1125 修复子工具审批问题）

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒 |
|---------|--------|------|------|
| [#763](https://github.com/nearai/ironclaw/issues/763) | 2026-03-09 | OPEN | NEAR AI “No user query found” 错误影响 routine 执行，需修复消息构造逻辑 |
| [#846](https://github.com/nearai/ironclaw/issues/846) | 2026-03-10 | OPEN | `onboard` 数据库保存失败但主程序正常，可能造成配置不一致 |
| [#1051](https://github.com/nearai/ironclaw/issues/1051) | 2026-03-12 | OPEN | 事件触发 routine 不工作，P1 级阻塞问题，需优先排查事件总线 |
| [#1103](https://github.com/nearai/ironclaw/issues/1103) | 2026-03-13 | OPEN | SSRF 高危漏洞，**建议 48 小时内响应** |

> 💡 **维护者建议**：对 #1051 和 #1103 分配紧急处理资源；#763 可结合 #1151（owner scope 重构）一并解决。

--- 

**报告生成时间**：2026-03-14  
**数据来源**：GitHub IronClaw 仓库公开数据

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-14）

---

## 1. 今日速览

LobsterAI 在过去24小时内表现出**高活跃度**，共处理 **9 个 PR（全部已合并）** 和 **12 条 Issue 更新**，其中仅 1 个 Issue 被关闭，其余均为新开或持续讨论。开发团队聚焦于 OpenClaw 集成优化与系统稳定性修复，未发布新版本。社区反馈集中暴露了**本地模型技能调用失效、定时任务异常、沙箱启动失败**等关键体验问题，反映出当前版本在本地部署与多模型兼容性方面存在显著挑战。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并的 9 个 PR 均围绕 **OpenClaw 深度集成与系统架构优化**展开，标志着项目向“嵌入式智能体 + 插件化工具链”方向迈出关键一步：

- **#408**：实现 MCP Bridge，使 LobsterAI 的 MCP 服务（如 Tavily、GitHub）可作为工具在 OpenClaw 嵌入式代理中调用，并支持热重载，无需重启应用（[链接](https://github.com/netease-youdao/LobsterAI/pull/408)）
- **#411 / #412 / #403**：完成 OpenClaw 记忆系统迁移、执行模式强制本地化、移除内置沙箱，解决老用户覆盖安装后因 Docker 缺失导致的启动失败问题（[链接1](https://github.com/netease-youdao/LobsterAI/pull/411) | [链接2](https://github.com/netease-youdao/LobsterAI/pull/412) | [链接3](https://github.com/netease-youdao/LobsterAI/pull/403)）
- **#409 / #410**：增强定时任务系统，支持 OpenClaw 执行引擎并修复引用错误（[链接1](https://github.com/netease-youdao/LobsterAI/pull/409) | [链接2](https://github.com/netease-youdao/LobsterAI/pull/410)）
- **#401**：修复网关重复启动与消息重复显示问题，提升通信稳定性（[链接](https://github.com/netease-youdao/LobsterAI/pull/401)）
- **#395**：通过 esbuild 打包与编译缓存，将 OpenClaw Gateway 启动时间从 180s+ 优化至 ~15s（后续启动），显著改善 Windows 用户体验（[链接](https://github.com/netease-youdao/LobsterAI/pull/395)）

> 整体来看，项目正从“独立客户端”向“OpenClaw 驱动的智能体平台”转型，技术债清理与性能优化同步推进。

---

## 4. 社区热点

以下 Issue 引发较高关注，反映核心功能痛点：

- **#112**：[本地模型无法通过自然语言调用技能](https://github.com/netease-youdao/LobsterAI/issues/112)（2 评论）  
  用户明确指出使用 Ollama + Qwen3:14b 时技能调用失效，而 API 模型正常，质疑本地模型与技能系统的兼容逻辑。

- **#370**：[输入“你好”即超 token 限制](https://github.com/netease-youdao/LobsterAI/issues/370)（2 评论）  
  用户反馈极短输入触发 8961 输入 token 错误，疑似上下文缓存或提示词注入异常，严重影响基础可用性。

- **#285**：[定时任务钉钉通知自动失效](https://github.com/netease-youdao/LobsterAI/issues/285)（1 评论）  
  虽非高频问题，但涉及自动化流程可靠性，用户在天翼云 Windows 环境中遭遇静默失败。

> 这些 Issue 共同指向：**本地模型支持不完善、上下文管理存在缺陷、第三方集成稳定性不足**，是当前用户体验的主要瓶颈。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | #112 | 本地模型无法调用技能，功能完全失效 | ❌ 无 |
| 🔴 高 | #370 | 极短输入触发 token 超限，疑似上下文污染 | ❌ 无 |
| 🟠 中 | #402 | 沙箱环境启动后自动退出，日志显示 `[Main] initApp` 中断 | ❌ 无（但 #403 已移除内置沙箱，可能间接缓解） |
| 🟠 中 | #358 | 任务未完成即标记“完成”，需手动“继续” | ❌ 无 |
| 🟡 低 | #400 | 响应速度慢，频繁等待 | ❌ 无（#395 已优化 gateway 启动速度，可能部分缓解） |

> 注：#403 PR 移除了内置沙箱，可能影响 #402 类问题的复现路径，但尚未验证是否彻底解决。

---

## 6. 功能请求与路线图信号

用户明确提出以下新功能需求，部分已有技术铺垫：

- **#404**：[支持在对话框中选择自定义 Skill](https://github.com/netease-youdao/LobsterAI/issues/404)  
  → 当前工作流 Skill 无法被 UI 调用，需扩展技能发现与绑定机制。**高优先级**，因阻碍用户自定义能力落地。

- **#407**：[定时任务 Cron 表达式生成错误](https://github.com/netease-youdao/LobsterAI/issues/407)  
  → 虽为 UI 显示问题，但影响调度准确性。**中优先级**，可与 #409/#410 定时任务重构同步修复。

- **#399**：[阿里云百炼 GLM 4.5 模型调用报错 “Claude run failed”](https://github.com/netease-youdao/LobsterAI/issues/399)  
  → 模型适配层存在硬编码或错误映射，**需紧急排查**，否则影响主流国产模型接入。

> 结合已合并的 MCP Bridge（#408）与插件预装系统（#346），**自定义技能支持**极有可能成为下一版本重点功能。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼真实声音：

- **痛点**：
  - “本地模型基本不能用，只能聊天，不能执行命令”（#405）
  - “套壳 OpenClaw 反而更快更稳”（#353）
  - “速度太慢，经常莫名等待”（#400）

- **使用场景**：
  - 本地部署（Ollama + Qwen/DeepSeek）用于隐私敏感任务
  - 定时自动化（钉钉通知、文件操作）
  - 多模型切换（阿里云百炼、百度千帆）

- **满意点**：
  - API 模型下技能调用正常（#112 对比）
  - OpenClaw 统一运行环境优势被认可（#353）

> 用户强烈期望：**本地模型功能对齐 API 模型体验**，并提升响应速度。

---

## 8. 待处理积压

以下 Issue 长期未响应，需维护者重点关注：

- **#112**（2026-02-26 创建，17 天未处理）：本地模型技能调用失效 —— **核心功能缺陷**，影响大量本地用户。
- **#285**（2026-03-05 创建，9 天未处理）：定时任务钉钉通知失效 —— 自动化可靠性问题，涉及第三方集成稳定性。
- **#358**（2026-03-10 创建，4 天未处理）：任务未完成即结束 —— 工作流中断，破坏用户体验连续性。

> 建议优先响应 #112 与 #358，二者均属高频高影响问题，且已有足够复现信息可供排查。

--- 

**项目健康度评估**：🔧 **技术活跃但用户体验承压**  
开发侧进展迅速，OpenClaw 集成成效显著；但社区反馈暴露出关键功能退化与性能问题，需加强 QA 与用户场景测试，避免“架构先进、体验倒退”风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报**  
📅 日期：2026-03-14  
🔗 项目主页：[github.com/TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

### 1. **今日速览**  
TinyClaw 在过去24小时内表现出**高活跃度**，共处理6个PR（4个已合并/关闭，2个待合并）和2个Issue（1开1闭），并发布了一个新版本 v0.0.13。核心开发聚焦于**代理配置体验优化**与**内存系统重构**，同时推进品牌更名（TinyClaw → TinyAGI）。社区对通信集成（如Google Chat）的需求持续升温，技术债清理与架构简化成为当前重点。

---

### 2. **版本发布**  
🎉 **v0.0.13 正式发布**  
本次发布包含多项关键功能增强与架构改进：

- ✅ **Agent 配置界面升级**：新增带标签页的UI（技能、系统提示词、记忆、心跳监控），提升用户可操作性（[74c3e91](https://github.com/TinyAGI/tinyclaw/commit/74c3e91)）  
- 🔧 **代理部署逻辑重构**：统一工作区创建流程，采用符号链接管理技能文件，减少磁盘冗余（[44ad272](https://github.com/TinyAGI/tinyclaw/commit/44ad272)）  
- 🧠 **层级化记忆系统上线**：支持持久化、结构化的知识存储与召回，基于Markdown+YAML元数据（[aaca334](https://github.com/TinyAGI/tinyclaw/commit/aaca334)）  
- 📄 **AGENTS.md 动态注入**：系统提示词改为内存构建，避免文件I/O与数据陈旧问题  

> ⚠️ **迁移注意**：若自定义了 `.claude/skills` 目录结构，需确认符号链接兼容性；旧版静态提示词文件可能不再生效。

[查看完整 Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13)

---

### 3. **项目进展**  
今日共合并/关闭 **4个重要PR**，显著推进核心能力：

| PR | 贡献者 | 进展摘要 |
|----|--------|--------|
| [#207](https://github.com/TinyAGI/tinyclaw/pull/207) | @jlia0 | 实现动态代理配置页，支持技能、提示词、心跳等多维度管理 |
| [#209](https://github.com/TinyAGI/tinyclaw/pull/209) | @jlia0 | 引入层级记忆系统，为长期上下文理解奠定基础 |
| [#211](https://github.com/TinyAGI/tinyclaw/pull/211) | @jlia0 | 重构代理目录 provisioning，消除代码重复，提升可维护性 |
| [#208](https://github.com/TinyAGI/tinyclaw/pull/208) | @jlia0 | 系统提示词改为内存动态生成，解决文件同步问题 |

> 💡 综合评估：项目在**用户体验**与**架构健壮性**两个维度均取得实质性突破，迈向生产可用阶段。

---

### 4. **社区热点**  
🔥 **最活跃 Issue：[#57 feat: Add Google chat, API, and MCP comms](https://github.com/TinyAGI/tinyclaw/issues/57)**  
- 作者：@michaelerobertsjr  
- 最后更新：2026-03-13（今日）  
- 诉求分析：用户强烈希望扩展消息通道，集成 Google Chat、Slack、Teams 等主流协作平台，反映项目正从实验性工具向**企业级多通道通信中枢**演进。该需求与MCP（Model Context Protocol）结合潜力大，可能成为下一阶段路线图重点。

---

### 5. **Bug 与稳定性**  
🐞 **已关闭高严重性 Bug：[#210 ReferenceError: exports is not defined in ES module scope](https://github.com/TinyAGI/tinyclaw/issues/210)**  
- 严重程度：High（影响代理执行）  
- 状态：✅ 已关闭（推测由近期模块系统修复间接解决）  
- 影响命令：`tinyclaw pairing approve <id>`  
- 用户测试环境：Node.js 20.18.2 与 24.1.0 均复现  

> 🔍 虽无明确fix PR关联，但结合近期ES模块重构（如PR #208），该问题很可能已被根治。建议维护者补充验证说明。

---

### 6. **功能请求与路线图信号**  
📌 基于社区反馈与PR动向，以下功能有望纳入近期版本：

- **多平台通信集成**（Google Chat / Slack / Teams）：Issue #57 获得持续关注，且与MCP架构兼容，优先级高  
- **品牌全面迁移至 TinyAGI**：PR #191 已提交完整重命名方案，待合并后将统一CLI、包名与文档  
- **Live Office 工作区 redesign**：PR #212 刚开启，可能作为v0.0.14主打UI升级  

> 💬 信号解读：项目正从“功能堆砌”转向“体验整合”，品牌统一与通信扩展是关键下一步。

---

### 7. **用户反馈摘要**  
从 Issues 评论提炼真实声音：

- **痛点**：ES模块兼容性问题导致基础命令无法运行（#210），暴露构建配置脆弱性  
- **满意点**：代理配置UI的标签化设计获隐式认可（PR #207 无反对意见，快速合并）  
- **使用场景**：用户尝试在多种Node版本下部署，表明存在**跨平台生产部署需求**  
- **期待**：对“记忆系统”表现出高度兴趣，认为其是区别于其他AI代理的核心竞争力

---

### 8. **待处理积压**  
⚠️ **需维护者关注事项**：

- **[#191 feat: rebrand tinyclaw to tinyagi](https://github.com/TinyAGI/tinyclaw/pull/191)**  
  → 已开放3天，涉及全代码库重命名，需协调发布节奏，避免生态断裂  
- **[#212 feat(office): redesign the live office workspace](https://github.com/TinyAGI/tinyclaw/pull/212)**  
  → 新提交PR，尚未评审，可能影响前端架构，建议尽快评估 scope  

> 📌 建议：优先合并品牌迁移PR，再推进UI redesign，以降低变更冲突风险。

---  
📊 **健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高开发活跃度 + 关键功能落地 + 社区需求响应及时，整体处于快速成长期。需加强构建稳定性保障与长期Issue跟进机制。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-14）

---

## 1. 今日速览

Moltis 项目在过去24小时内保持中等活跃度，共处理 **11条 Issues** 和 **11条 Pull Requests**，其中 **5个 Issue 被关闭**、**5个 PR 被合并/关闭**，显示出团队对问题响应和代码集成的持续投入。尽管无新版本发布，但多个关键 Bug 修复已进入合并阶段，显著提升了系统稳定性。社区对新功能（如飞书集成）的关注度上升，反映出用户对多平台支持的迫切需求。整体项目健康度良好，开发节奏稳健。

---

## 2. 版本发布

**无新版本发布**。当前主线仍在持续集成修复与优化，未触发正式版本发布流程。

---

## 3. 项目进展

今日有 **5个 PR 被合并或关闭**，推动多项关键改进：

- **#402**：修正 QMD 安装文档，明确应从 `@tobilu/qmd` 安装而非已废弃的 `@anthropic/qmd`，避免用户配置失败（[链接](https://github.com/moltis-org/moltis/pull/402)）。
- **#406**：优化 onboard 流程密码字段，添加 `autocomplete="new-password"` 等属性，提升浏览器密码管理器兼容性，解决 #183 用户痛点（[链接](https://github.com/moltis-org/moltis/pull/406)）。
- **#409**：改进 Cron 设置界面文案，区分“Run Once”与周期性任务，并明确时区默认行为，提升配置清晰度（[链接](https://github.com/moltis-org/moltis/pull/409)）。
- **#415**：修复认证重置后无法访问 onboarding 页面的问题，确保用户可重新完成初始化流程，闭环 #316（[链接](https://github.com/moltis-org/moltis/pull/415)）。
- **#418**：实现中断对话时保留部分流式输出与工具调用帧，避免用户丢失已生成内容，增强交互连续性（[链接](https://github.com/moltis-org/moltis/pull/418)）。

这些合并显著提升了用户体验一致性与系统鲁棒性，尤其在 onboarding、对话持久化和任务调度等核心路径上取得实质性进展。

---

## 4. 社区热点

**#383 [Feature]: Support Lark/Feishu**（[链接](https://github.com/moltis-org/moltis/issues/383)）成为今日最受关注议题，获得 **2个点赞** 和最新评论。用户 @memwey 提出希望集成飞书/Lark 作为消息通道，反映企业用户对国内主流协作平台接入的强烈需求。该需求尚未有对应 PR，但高关注度可能促使团队将其纳入近期路线图。

此外，**#426（节点地址错误）** 和 **#430（Agent 无法使用 cron 工具）** 作为新报 Bug 也引发初步讨论，显示用户对底层执行可靠性的关注。

---

## 5. Bug 与稳定性

以下为今日报告或更新的关键 Bug，按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | [#426](https://github.com/moltis-org/moltis/issues/426) | 节点地址错误，可能导致任务路由失败 | ❌ 无 |
| ⚠️ 高 | [#430](https://github.com/moltis-org/moltis/issues/430) | Agent 无法调用 cron 工具，影响定时任务执行 | ❌ 无 |
| ⚠️ 中 | [#427](https://github.com/moltis-org/moltis/issues/427) | Agent 在执行命令时反复混淆节点 | ❌ 无 |
| ⚠️ 中 | [#428](https://github.com/moltis-org/moltis/issues/428) | Vault 密封状态下仍可通过“context”按钮访问完整聊天记录 | ❌ 无 |
| ⚠️ 中 | [#317](https://github.com/moltis-org/moltis/issues/317) | Jinja 模板报错“System message must be at the beginning” | ✅ 已有 Fix PR #431 |

> 注：PR #431 已针对 #317 提供修复，通过合并系统消息避免 Jinja 模板顺序错误，预计将在下次构建中生效。

---

## 6. 功能请求与路线图信号

- **飞书/Lark 支持（#383）**：作为唯一获得点赞的功能请求，且来自活跃贡献者，极有可能被纳入下一版本开发计划。
- **Cron 工具稳定性增强**：结合 #430 和已合并的 #409，团队正系统性优化 cron 相关体验，未来可能扩展更多调度策略。
- **自定义 GGUF 模型热加载（#417）**：虽为技术债清理，但支持无重启加载自定义模型，为高级用户和本地 LLM 场景铺路，具备长期价值。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼出以下真实用户声音：

- **满意点**：对 onboarding 流程的逐步优化（如密码管理器支持、认证重置后可重入）表示认可，认为“提升了首次使用体验”。
- **痛点**：
  - 多系统消息导致 Jinja 报错（#317）阻碍了 Qwen 等 GGUF 模型的使用；
  - 中断对话后内容丢失（#186，已修复）曾严重影响工作流连续性；
  - 节点相关 Bug（#426、#427）让用户对分布式执行能力产生疑虑。
- **使用场景**：企业用户尝试将 Moltis 集成至内部自动化流程，依赖 cron 工具和稳定节点通信，对可靠性要求较高。

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先关注：

- **#317**：虽已有修复 PR #431，但 Issue 本身自 3月3日提出后仅1条评论，需确认是否已充分验证。
- **#383（飞书支持）**：高价值功能请求，尚无技术方案或排期，建议启动可行性评估。
- **#426 / #427 / #430**：均为新报高影响 Bug，涉及核心执行逻辑，需尽快分配资源排查。

> 建议：对节点相关 Bug 进行根因分析，考虑是否需引入更严格的参数校验或节点状态同步机制。

--- 

**总结**：Moltis 正处于快速迭代与稳定性加固的关键阶段，社区驱动的功能需求与底层 Bug 修复并行推进。团队响应效率高，但需警惕节点与执行层潜在的技术债务积累。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-14）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃41条，关闭9条）和 **44条 PR 更新**（待合并21条，已合并/关闭23条），显示出强劲的开发与反馈节奏。尽管无新版本发布，但多个关键功能与稳定性修复已进入合并阶段，项目整体处于快速迭代期。社区对飞书、企业微信等主流渠道的集成需求强烈，同时本地模型（如 Ollama）兼容性问题成为当前主要痛点。

---

## 2. 版本发布

**无新版本发布**。  
上一个稳定版本仍为 v0.0.7，团队正集中修复该版本暴露的稳定性与兼容性问题，预计下个版本将包含多项关键修复。

---

## 3. 项目进展

今日有 **23个 PR 被合并或关闭**，重点进展包括：

- ✅ **#1432**（已合并）：在 `env_context` 中固定注入 UTC 时间，解决弱模型因未调用 `get_current_time` 工具导致的时间错乱问题（关联 Issue #1346）。
- ✅ **#1396**（已合并）：修复技能列表重复显示问题，统一 built-in 与 customized skills 的展示逻辑。
- ✅ **#1350**（已合并）：支持从 LobeHub 导入技能包，扩展了技能生态来源。
- ✅ **#1433**（已合并）：为 Ollama 和 LM Studio 添加上下文长度配置警告文档，缓解用户配置困惑。
- ✅ **#1440**（已合并）：清理冗余测试文件，提升测试套件可维护性。

此外，**#1451**（定时任务默认使用本地时区）和 **#1407**（企业微信频道支持）等 PR 仍在审查中，预计将纳入下一版本。

> 🔗 相关 PR：[#1432](https://github.com/agentscope-ai/CoPaw/pull/1432) | [#1396](https://github.com/agentscope-ai/CoPaw/pull/1396) | [#1350](https://github.com/agentscope-ai/CoPaw/pull/1350)

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#1346](https://github.com/agentscope-ai/CoPaw/issues/1346) | 时间上下文缺失导致模型行为异常 | 7 | 要求系统主动提供时间上下文，而非依赖模型调用工具 |
| [#51](https://github.com/agentscope-ai/CoPaw/issues/51) | 企业微信支持 | 7 | 强烈呼吁官方集成企业微信作为官方频道 |
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | CPU 占用 100% 不降 | 6 | 定位到 MCP 组件引发资源泄漏，需紧急修复 |

> 💡 分析：用户对**时间一致性**、**企业通信集成**和**资源稳定性**的关注度最高，反映出 CoPaw 正从实验性工具向生产级助手演进。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（需优先处理）

| Issue | 描述 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | CPU 占用持续 100%，风扇狂转 | OPEN | 是（作者已提交相关修改，待合并） |
| [#1416](https://github.com/agentscope-ai/CoPaw/issues/1416) | Ollama 本地模型对话失忆、工具失效 | CLOSED | 是（#1433 提供配置指引） |
| [#1458](https://github.com/agentscope-ai/CoPaw/issues/1458) | 无法连接局域网 Ollama 服务 | OPEN | 否 |
| [#1431](https://github.com/agentscope-ai/CoPaw/issues/1431) | Windows 跨磁盘移动文件失败（WinError 17） | OPEN | 否 |
| [#1270](https://github.com/agentscope-ai/CoPaw/issues/1270) | Agent 静默停止，无错误提示（token 超限） | OPEN | 否 |

> 📌 建议：#1385 和 #1458 涉及核心运行时稳定性，应优先分配资源排查。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能需求

| Issue | 功能描述 | 社区支持 | 已有 PR |
|------|--------|--------|--------|
| [#51](https://github.com/agentscope-ai/CoPaw/issues/51) | 企业微信频道支持 | ⭐⭐⭐⭐☆ | [#1407](https://github.com/agentscope-ai/CoPaw/pull/1407)（开发中） |
| [#1085](https://github.com/agentscope-ai/CoPaw/issues/1085) | 小艺开放平台集成 | ⭐⭐⭐☆☆ | 无 |
| [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | ACP（Agent Communication Protocol）支持 | ⭐⭐⭐⭐☆ | 无（长期战略价值高） |
| [#1045](https://github.com/agentscope-ai/CoPaw/issues/1045) | 网页控制台支持图片上传 | ⭐⭐⭐☆☆ | 无 |
| [#1298](https://github.com/agentscope-ai/CoPaw/issues/1298) | 多智能体并行执行 | ⭐⭐⭐☆☆ | 无 |

> 🔮 预测：企业微信、ACP 协议、多模态输入将成为下一版本重点方向。

---

## 7. 用户反馈摘要

### ✅ 满意点
- “LobeHub 技能导入功能非常实用，极大丰富了技能库。”（#1350 相关反馈）
- “UTC 时间注入修复后，定时任务终于不再错乱。”（#1432 用户验证）

### ❌ 痛点
- “Ollama 在 v0.0.7 完全不可用，每句话都提示‘新对话’。”（#1416）
- “飞书频道经常重复处理同一条消息，导致机器人答非所问。”（#1403）
- “自定义技能只能写 prompt，无法上传 Python 脚本，限制太大。”（#1316, #1430）
- “Docker 部署后无法调用局域网 Ollama，文档缺乏说明。”（#1452）

> 💬 用户典型场景：企业用户希望通过 CoPaw 对接内部 IM（如企业微信/飞书），并调用本地大模型实现低成本、高隐私的自动化助手。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue

| Issue | 主题 | 创建时间 | 状态 | 建议 |
|------|------|--------|------|------|
| [#1059](https://github.com/agentscope-ai/CoPaw/issues/1059) | ACP 协议支持 | 2026-03-09 | OPEN | 高战略价值，建议立项评估 |
| [#1045](https://github.com/agentscope-ai/CoPaw/issues/1045) | 网页端图片上传 | 2026-03-09 | OPEN | 多模态刚需，可结合前端重构推进 |
| [#1167](https://github.com/agentscope-ai/CoPaw/issues/1167) | Ubuntu 一键安装缺包 | 2026-03-10 | OPEN | 影响新用户入门体验，需修复 |

> 🛎️ 提醒维护者：上述 Issue 已超 4 天无实质性回复，建议本周内给出技术评估或 roadmap 说明。

---

**报告生成时间：2026-03-14**  
**数据来源：GitHub CoPaw 仓库公开数据**  
**分析师：AI 开源项目观察员**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报（2026-03-14）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 项目保持高活跃度，共处理 **8条 Issues**（6条关闭，2条新开）和 **6条 Pull Requests**（3条合并/关闭，3条待合并），体现出维护团队对安全性和用户体验改进的快速响应。核心工作聚焦于**安全策略加固**、**CLI交互体验优化**及**流式执行一致性修复**，无新版本发布。整体项目健康度良好，关键缺陷闭环率高，社区贡献者参与积极。

---

## 2. 版本发布

*无新版本发布。*

---

## 3. 项目进展

今日合并/关闭的 PR 显著提升了系统的安全性与交互一致性：

- **#353 [CLOSED]**：实现交互式 CLI 审批流程与可信会话覆盖机制，通过 TTY 检测确保仅真实终端会话可启用 `/trust` 命令，大幅降低误用风险（[链接](https://github.com/qhkm/zeptoclaw/pull/353)）。
- **#342 [CLOSED]**：默认启用响应流式输出（token-by-token），并新增响应元数据脚注（显示 token 数、工具调用次数、耗时），显著改善用户感知性能（[链接](https://github.com/qhkm/zeptoclaw/pull/342)）。
- **#349 [CLOSED]**：修复 `AgentLoop` 构造函数忽略配置中 `streaming` 默认值的问题，确保配置驱动行为一致性，并补充单元测试（[链接](https://github.com/qhkm/zeptoclaw/pull/349)）。

上述变更标志着项目在**默认安全策略**、**CLI 用户体验**和**配置可靠性**三个关键维度取得实质性进展。

---

## 4. 社区热点

- **#334 [OPEN]**：用户 @ceeray 提议将 ZeptoClaw 提交至 [Shelldex](https://shelldex.com/)（AI 代理目录平台），反映社区对项目可见性与生态集成的关注（[链接](https://github.com/qhkm/zeptoclaw/issues/334)）。
- **#347 [OPEN]** 与 **#348 [CLOSED]**：围绕“默认代理模式与审批策略硬化”的讨论集中爆发，暴露当前默认配置（autonomous + AlwaysAllow）存在安全隐患，推动维护者迅速响应并关闭相关 Issue（[链接1](https://github.com/qhkm/zeptoclaw/issues/347) | [链接2](https://github.com/qhkm/zeptoclaw/issues/348)）。

社区核心诉求：**强化默认安全边界**，防止非交互式或远程场景下的意外高风险操作。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 状态 | 是否已有 Fix PR |
|--------|------|------|----------------|
| **P1-critical** | #354：文件系统安全隔离范围过宽，导致 `edit_file` 未扫描新内容体，存在污染绕过风险 | CLOSED | 是（由 #342 相关修复间接覆盖） |
| **P2-high** | #351：流式工具执行路径缺失钩子、指标记录与日志，破坏行为一致性 | CLOSED | 是（#353 实现流式与非流式路径对齐） |
| **P2-high** | #352：可信 CLI 会话未验证 TTY，可能被管道/自动化滥用 | CLOSED | 是（#353 引入 TTY 检测） |

所有高优先级 Bug 均已闭环，修复已合并主干。

---

## 6. 功能请求与路线图信号

- **ACP（Agent Client Protocol）支持**：PR #356 提出实现 stdio 与 HTTP 双通道 ACP，支持 ZeptoClaw 作为子进程或独立服务被外部客户端调用，预示项目正向**多协议集成**与**标准化接口**演进（[链接](https://github.com/qhkm/zeptoclaw/pull/356)）。
- **图像内容处理增强**：PR #355 与 #346 分别针对循环中图像处理及 Discord 通道“纯图消息”忽略问题进行修复，表明多模态能力是持续优化方向（[链接1](https://github.com/qhkm/zeptoclaw/pull/355) | [链接2](https://github.com/qhkm/zeptoclaw/pull/346)）。

预计下一版本将重点整合 ACP 支持与多模态稳定性改进。

---

## 7. 用户反馈摘要

- **正面反馈**：对默认流式输出（#342）表示欢迎，认为“显著提升响应感知速度”；对交互式审批流程（#353）评价为“在便利与安全间取得良好平衡”。
- **核心痛点**：用户强烈担忧默认 autonomous 模式 + 无审批策略（#347/#348）可能导致意外文件修改或系统调用，尤其在 CI/CD 或脚本环境中。
- **使用场景**：社区提及 Shelldex 集成需求，反映用户希望将 ZeptoClaw 作为标准化工具嵌入更广泛的 AI 代理工作流。

---

## 8. 待处理积压

- **#334 [OPEN]**：Shelldex 提交请求已开放超 24 小时，尚未获维护者回应。虽非技术阻塞，但影响项目外部可见度，建议尽快评估并执行（[链接](https://github.com/qhkm/zeptoclaw/issues/334)）。
- **PR #356、#355、#346**：三项待合并 PR 均涉及核心功能扩展（ACP、图像处理），需维护者 review。其中 #356 为重大架构新增，建议优先安排技术评审（[链接](https://github.com/qhkm/zeptoclaw/pull/356)）。

> **维护建议**：当前无长期积压 Issue，但需关注 ACP 相关 PR 的集成测试与文档配套。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*