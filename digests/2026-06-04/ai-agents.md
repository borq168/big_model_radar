# OpenClaw 生态日报 2026-06-04

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-04 02:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 OpenClaw 项目在 2026-06-04 的 GitHub 动态数据，为您呈上今日项目日报。

---

# OpenClaw 项目日报 2026-06-04

## 1. 今日活动概览

过去 24 小时，OpenClaw 项目社区活跃度极高。共处理了 500 条 Issues（其中新开或活跃 381 条，关闭 119 条）和 500 条 PR（其中待合并 407 条，已合并或关闭 93 条）。项目发布了 3 个新版本（含 2 个 Beta 版和 1 个稳定版），重点优化了插件安装的安全策略（采用 operator install policy）以及智能体/CLI 运行时在中断、会话绑定失效等情况下的恢复能力。在 Bug 修复方面，社区重点关注了 Codex 应用服务器的中断问题、Discord/Mattermost 等渠道的回归问题以及会话状态管理的一系列顽疾。

## 2. 版本发布

项目今日发布了 3 个版本，具体信息如下：

- **v2026.6.2-beta.1**: 最新 Beta 版。核心变化是**插件和技能的安装策略从旧的危险代码扫描路径迁移为 operator install policy**，并在 doctor、CLI、ClawHub 等界面提供了更清晰的故障排查信息。(#89516) 感谢 @joshavant。
- **v2026.6.1**: 最新稳定版。主要修复了**智能体和 CLI 运行时在中断工具调用、过期会话绑定、压缩任务交接和媒体重试等场景下的恢复能力**。(#88129, #88136, #88141, #88162, #88182) 同时提升了 Telegram、WhatsApp、iMessage、Slack 等渠道的消息投递稳定性。
- **v2026.6.1-beta.3**: 上一个 Beta 版，内容与 v2026.6.1 稳定版的高亮部分一致。

## 3. 项目进展

今日合并或关闭了多个关键 PR，推动了重要功能和修复的落地：

- [**feat(control-plane): add tranche A/B registry and CI gate**](https://github.com/openclaw/openclaw/pull/90127) (#90127)：合并了一个大型 PR，为控制平面添加了 A/B 阶段的合约、架构、注册表等基础支持，并引入了 CI 门控。
- [**feat(control-plane): add tranche A/B registry and CI gate**](https://github.com/openclaw/openclaw/pull/90087) (#90087)：与 #90127 功能相同的 PR 已关闭。
- [**fix: recover crashed main sessions via lock-file detection fallback**](https://github.com/openclaw/openclaw/pull/86806) (#86806)：通过锁文件检测的 fallback 机制，修复了网关崩溃后主会话无法恢复的问题。状态为“等待作者”。
- [**fix(mattermost): merge streaming progress lines by identity…**](https://github.com/openclaw/openclaw/pull/90129) (#90129)：修复了 Mattermost 渠道中流式进度显示时，多工具调用信息相互覆盖的问题。
- [**fix(auto-reply): count message tool sends as delivery**](https://github.com/openclaw/openclaw/pull/90123) (#90123)：修复了当自动回复依赖于 `message` 工具时，无法正确计数消息投递状态的问题。
- [**docs: document Skill Workshop tool visibility rules**](https://github.com/openclaw/openclaw/pull/89932) (#89932)：更新文档，澄清了 `skill_workshop` 工具在编码配置文件和精确白名单中的可见性规则。

## 4. 社区热点

今日讨论最热烈、关注度最高的问题集中在以下几个方面：

- **会话与转发的SQLite迁移**：Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) 是关于将核心会话/转发运行时状态迁移至 SQLite 的讨论，获得了 17 条评论。社区希望以更小、可审查的 PR 方式推进，避免大规模重写带来的高风险。
- **Codex 应用服务器中断回归**：Issue [#88312](https://github.com/openclaw/openclaw/issues/88312) 报告了一个 P1 级别的回归问题：2026.5.27 版本中，Codex 应用服务器出现了“在确认轮次完成前停止”的错误。此问题曾在 #84076 中报告，并在 #85107 中修复，如今再次出现，引发了用户的不满和担忧，有 12 条评论和 2 个 👍。
- **WebSocket 诊断工具循环请求**：Issue [#63427](https://github.com/openclaw/openclaw/issues/63427) 报告 CLI 的 WebSocket 探测在没有设备配对的情况下，会以每秒 1 次的速度无限重试，导致短时间内产生上千次连接拒绝。该问题在今日被关闭，推测已有相关修复。

## 5. Bug 与稳定性

今日报告的 Bug 和稳定性问题中，严重程度较高的包括：

- **P1 / 回归**： [Codex 应用服务器轮次中断再次出现](https://github.com/openclaw/openclaw/issues/88312) (#88312)。这是之前已修复问题的复发。
- **P1 / 行为Bug**： [Codex 客户端在图像/工具请求期间因大文件导致中断](https://github.com/openclaw/openclaw/issues/86214) (#86214)。当 `logs_2.sqlite` 文件过大时，Codex 客户端会在工具调用中间断开连接。
- **P1 / 行为Bug**： [Codex OAuth 刷新失败导致智能体长时间不可用](https://github.com/openclaw/openclaw/issues/86215) (#86215)。OAuth 令牌刷新失败时，系统缺乏明确的告警，且不会主动轮换配置文件，导致智能体被“卡住”数小时。
- **P1 / 行为Bug**： [WebChat 在工具调用时冻结](https://github.com/openclaw/openclaw/issues/86811) (#86811)。WebChat 仪表盘在工具调用后无响应，WebSocket 断开且无法自动重连，需要用户手动刷新页面。

其中，Bug #88312 暂无明确的修复 PR 关联，但社区已在积极讨论。

## 6. 功能请求归类

今日收集到以下主要功能请求，暂无对应的实现 PR：

- **外部安全与防护接口**： [#72741](https://github.com/openclaw/openclaw/issues/72741) 提议建立一个标准接口，用于集成第三方安全/防护检查系统，使智能体在敏感操作前能被更一致地审查。
- **控制 UI 可配置上传限制**： [#71142](https://github.com/openclaw/openclaw/issues/71142) 请求将 WebChat 的 5MB 硬编码上传限制改为可配置项，以满足用户在更大参数下上传图片等文件的需求。
- **多索引嵌入记忆支持**： [#63990](https://github.com/openclaw/openclaw/issues/63990) 提议引入多索引嵌入记忆，以支持不同 embedding 模型间的弹性故障切换，避免因单一模型故障导致向量语义损坏。
- **远程重排序端点支持**： [#64438](https://github.com/openclaw/openclaw/issues/64438) 请求支持外部重排序服务（如 Cohere Rerank），以提升记忆搜索的精准度。

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中，可以提炼出以下核心用户反馈：

- **会话状态持久性依然是最大痛点**：多个用户反映会话上下文膨胀（[#67419](https://github.com/openclaw/openclaw/issues/67419)）和引导文件重复注入导致令牌浪费的问题，严重影响了多轮对话体验和 token 利用率。
- **对“安静”的作业任务处理不满**：有用户（[#76159](https://github.com/openclaw/openclaw/issues/76159)）指出，对于设计上是“无工作则不输出”的 Cron 作业，框架会错误地将其标记为失败，请求增加 `acceptSilentStop` 标识来允许无输出的成功完成。
- **WebChat 渲染问题持续困扰用户**：多个问题（[#67035](https://github.com/openclaw/openclaw/issues/67035), [#77136](https://github.com/openclaw/openclaw/issues/77136), [#86811](https://github.com/openclaw/openclaw/issues/86811)）都指向 WebChat 界面的不稳定性，包括输入被吞、流式回复不可见、以及工具调用后界面冻结，虽然数据未丢失，但用户体验极差。
- **MCP 工具在子智能体中不可用**：用户（[#85030](https://github.com/openclaw/openclaw/issues/85030)）反馈，通过 `mcp.servers` 注册的工具无法被 `sessions_spawn` 生成的子智能体使用，即使已按文档进行配置，子智能体也只能使用内置工具。

## 8. 待处理积压

以下为长期未得到有效响应或解决的重要 Issue 与 PR，提请维护者关注：

- [Issue #65161](https://github.com/openclaw/openclaw/issues/65161)：“心跳隔离模式”中存在的多个回归问题，包括心跳节奏停止、事件误标和写入器缺失等，已自 2026-04-12 提出，至今悬而未决。
- [Issue #63216](https://github.com/openclaw/openclaw/issues/63216)：同一个会话键上反复发生硬重置，即使配置了高 `reserveTokensFloor` 也无效，自 2026-04-08 起未解决。
- [PR #82572](https://github.com/openclaw/openclaw/pull/82572)：一个大型 PR，旨在持久化跟进队列以应对网关重启。这是维持系统状态一致性的重要功能，已提交近三周，仍需维护者审查。
- [PR #86806](https://github.com/openclaw/openclaw/pull/86806)：重要修复，旨在通过锁文件检测恢复崩溃的主会话。当前状态为“等待作者”更新，若无更新，需要维护者介入。

---

## 横向生态对比

# AI智能体与个人AI助手开源项目横向对比分析报告

**报告日期：2026-06-04**
**数据来源：** OpenClaw、NanoBot、Zeroclaw、PicoClaw 项目 GitHub 动态日报

---

## 1. 今日横向概览

2026年6月4日，四个项目均保持不同程度的活动。OpenClaw 以单日处理500条Issues和500条PR的规模领跑，发布了3个版本，重点推进了插件安装安全策略迁移和智能体运行时恢复能力。NanoBot 和 Zeroclaw 各自有30-50条左右的新动态，社区讨论聚焦于MCP连接稳定性、多智能体配置和安全架构重构。PicoClaw 活动量最小（4条新Issue、10个活跃PR），但仍有两个高优先级Bug修复（PID文件冲突、工具调用消息丢失）处于活跃推进状态。会话状态持久性和安全加固成为多个项目今日共同关注的技术方向。

---

## 2. 各项目活跃度对比

| 项目 | 新增/活跃 Issues | 新增/活跃 PRs | 版本发布 | 备注 |
|------|-----------------|--------------|---------|------|
| OpenClaw | 381条新开/活跃，119条关闭 | 407待合并，93条已合并/关闭 | 3个（v2026.6.2-beta.1、v2026.6.1稳定版、v2026.6.1-beta.3） | 数据量远超其他项目，社区极度活跃 |
| NanoBot | 26条新开/活跃，7条关闭 | 14待合并，18已合并/关闭 | 无 | 核心维护者积极提交修复PR |
| Zeroclaw | 27条新开/活跃，3条关闭 | 47待合并，3已合并/关闭 | 无 | TUI二进制文件“zerocode”随主发布流程就绪 |
| PicoClaw | 4条新开/活跃 | 10个活跃PR（2合并） | 无 | 活动量最小，但存在高优先级Bug修复PR |

---

## 3. OpenClaw 与同类对照

**活动量对比：** OpenClaw 单日活跃度是 NanoBot 和 Zeroclaw 的10倍以上，PicoClaw 的100倍。这反映其作为“核心参照”项目的社区规模和开发节奏显著领先。

**技术重点差异：**
- OpenClaw 今日重点：**插件安装安全策略**（operator install policy）、**智能体/CLI运行时恢复**（中断、会话绑定失效）、**A/B阶段注册表与控制平面架构**（PR#90127）、**SQLite迁移会话状态**（#88838）。
- NanoBot 今日重点：**MCP会话重连修复**（#4171）、**通道适配器修复**（QQ频道）、**运行级Agent Hook框架增强**（#4176）。
- Zeroclaw 今日重点：**可插拔安全层接口RFC**（#7142/#7141）、**TUI冻结修复**、**空闲会话回收Bug**。
- PicoClaw 今日重点：**PID文件启动失败修复**（#2720）、**工具调用消息丢失修复**（#2958）、**TLS验证配置化**（#2899）。

**社区讨论面：** OpenClaw 社区问题涵盖Codex应用服务器回归、WebChat冻结、OAuth刷新失败、SQLite迁移等，覆盖运行时、UI、认证、存储等多个领域。NanoBot 讨论集中在多智能体配置（#222）、exec工具幻觉（#937）、长时间任务中断（#1022）。Zeroclaw 讨论集中在安全架构和TUI体验。PicoClaw 讨论面最窄，以具体Bug反馈和修复为主。

---

## 4. 共同出现的技术方向

**① 会话/状态持久性与恢复**
- 涉及项目：OpenClaw、NanoBot、Zeroclaw、PicoClaw
- 具体诉求：
  OpenClaw 将核心会话/转发状态迁移至SQLite（#88838），并通过锁文件恢复崩溃会话（#86806）。NanoBot 修复MCP会话断开后自动重连（#4171）。Zeroclaw 报告空闲会话10分钟后被回收导致工作流中断（#7179），并有PR移除自动回收（#7182）。PicoClaw 修复升级后Web UI会话错误继承旧历史（#2992）。

**② 安全加固与可插拔策略**
- 涉及项目：OpenClaw、NanoBot、Zeroclaw、PicoClaw
- 具体诉求：
  OpenClaw 从危险代码扫描迁移到operator install policy（#89516）。NanoBot 用户关注“阻止AI执行rm指令”（#979）和文件系统未强制workspace限制（#143）。Zeroclaw 提出可插拔安全层接口（#7142）、OIDC认证（#7141）、高风险命令确认策略（#7155）。PicoClaw 修复MQTT通道TLS硬编码为InsecureSkipVerify（#2899），并改进PID文件身份验证（#2720）。

**③ 工具/工具调用稳定性与可见性**
- 涉及项目：OpenClaw、NanoBot、Zeroclaw、PicoClaw
- 具体诉求：
  OpenClaw 修复自动回复依赖message工具时计数问题（#90123）。NanoBot 报告exec工具幻觉（#937）、Progress Streaming泄露内部工具调用（#954）。Zeroclaw 修复可观测工具调用元数据泄漏到聊天WebSocket（#7151）。PicoClaw 修复tool_calls消息在连续请求中丢失（#2958）。

**④ 多智能体/子智能体协作能力**
- 涉及项目：OpenClaw、NanoBot、Zeroclaw
- 具体诉求：
  OpenClaw 用户反馈MCP工具在子智能体中不可用（#85030）。NanoBot 用户强烈需求多智能体配置（#222）和子Agent控制面板（#1006）。Zeroclaw 推出“会话分支”功能（#7168/7167）支持分叉探索，但未直接涉及子智能体。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 全栈AI智能体运行时：控制平面、插件系统、多渠道（Discord/Mattermost等）、Codex应用服务器 | 轻量级个人助手：MCP集成、QQ/微信等即时通讯通道、WebUI、执行引擎 | 终端/开发者导向：TUI二进制zerocode、Cron作业、细粒度沙箱、安全架构重构 | 边缘/嵌入式设备：32位Android支持、MQTT通道、Pico WebSocket |
| **目标用户** | 企业级开发者、平台运维、高端爱好者 | 个人开发者、轻量级部署需求者 | 注重安全的开发者、CLI/TUI爱好者、安全研究员 | 嵌入式开发者、IoT场景、低资源设备用户 |
| **技术架构** | 单体仓库，微服务化控制平面，A/B阶段合约，插件化 | 单体应用，MCP驱动，WebUI内置 | 守护进程+RPC+TUI分离设计，模块化安全层 | 轻量级Go二进制，MQTT/Pico通道，支持PID锁单例 |
| **社区讨论热点** | 回归Bug、会话状态迁移、大规模部署稳定性 | 多智能体、工具幻觉、长时间任务中断 | 可插拔安全层、TUI体验、会话回收 | 启动崩溃、工具调用丢失、TLS配置 |

---

## 6. 社区活跃度分层

**第一梯队（极高活跃）**
- OpenClaw：24小时内处理1000条+ Issue/PR活动，发布3个版本，社区讨论涵盖P1回归、架构RFC、功能请求。

**第二梯队（中等活跃）**
- NanoBot：33条Issue、32条PR，无版本发布；核心维护者驱动修复，社区讨论有多个高赞功能请求。
- Zeroclaw：30条Issue、50条PR，无版本发布；安全RFC获得多评论，TUI和会话回收Bug引发关注。

**第三梯队（低活跃）**
- PicoClaw：4条新Issue、10个活跃PR，无版本发布；活动集中在小范围Bug修复和依赖升级，社区讨论面窄。

---

## 7. 有证据支撑的观察

**观察1：会话状态持久性是多项目共同的首要痛点。**
OpenClaw（#88838、#86806）、NanoBot（#4171）、Zeroclaw（#7179、#7182）、PicoClaw（#2992）今日均有直接相关Issue或PR，表明无论是大型项目还是轻量级助手，会话上下文在中断、空闲回收、升级迁移场景下的恢复能力仍是用户最关注的问题。

**观察2：安全可配置化成为多个项目近期新增工作的重点方向。**
OpenClaw 将插件安装策略从危险代码扫描改为operator install policy；Zeroclaw 提出可插拔安全层接口RFC；PicoClaw 将MQTT TLS验证从硬编码改为可配置；NanoBot 社区仍在呼吁文件系统workspace强制限制。安全策略从“内嵌默认”向“用户可插拔可配置”迁移的趋势明显。

**观察3：工具调用稳定性问题在中等活跃度项目中更为突出。**
NanoBot（exec幻觉、Progress Streaming泄漏）、Zeroclaw（工具元数据泄漏、工具卡）、PicoClaw（tool_calls消息丢失）今日均报告了工具调用层面的功能异常，而在OpenClaw中“工具调用”相关的Bug（如#90123自动回复计数）严重程度较低。这可能与中等活跃度项目测试覆盖和修复速率有关。

**观察4：多智能体/子智能体需求持续存在但实现进度不均衡。**
NanoBot 的多智能体配置Issue（#222，10条评论，7个👍）是今日最热的功能请求；OpenClaw 用户遇到了MCP工具在子智能体中不可用的具体问题（#85030）；Zeroclaw 推出了“会话分支”（#7168）作为替代方案。各项目对多智能体协作的支持处于不同的实验和修复阶段，尚无成熟统一方案。

**观察5：社区架构类RFC讨论在今日有明显增长。**
OpenClaw 的A/B阶段注册表PR（#90127）和SQLite迁移讨论（#88838），Zeroclaw 的可插拔安全层RFC（#7142、#7141），均属于架构级别变更，且获得了较高评论数（分别为17条和3条）。这表明在当前迭代阶段，项目社区开始关注深层架构重构，而非仅仅修复表层Bug。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，没问题。作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的NanoBot (github.com/HKUDS/nanobot) GitHub数据生成的2026-06-04项目动态日报。

---

## NanoBot 项目动态日报 (2026-06-04)

### 1. 今日活动概览

过去24小时内，NanoBot项目保持活跃。Issues 方面有33条更新，其中26条为新开或活跃状态，7条被关闭。PR（拉取请求）有32条更新，其中14条待合并，18条已被合并或关闭。当日无新版本发布。社区讨论集中在MCP服务器稳定性、多智能体协作以及WebUI交互体验改进等方面，项目核心维护者（如 `chengyongru`）针对多个关键Bug提交了修复PR。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并/关闭的重要PR主要集中在功能修复和架构优化上：

- **MCP稳定性修复**: [#4171](https://github.com/HKUDS/nanobot/pull/4171) `fix(mcp): reconnect terminated sessions` 被合并，该PR解决了MCP服务器会话断开（“Session terminated”）后无法自动重连的问题，是社区反馈的常见Bug（如[#4168](https://github.com/HKUDS/nanobot/issues/4168)）的修复方案。
- **通道适配器修复**: [#4180](https://github.com/HKUDS/nanobot/pull/4180) `fix(qq): send pairing codes for unauthorized C2C users` 被合并，修复了QQ频道中未授权用户无法配对的问题。
- **运行级Hook框架**: [#4176](https://github.com/HKUDS/nanobot/pull/4176) `Add run-level agent hook lifecycle` 处于开放状态，引入了一个新的运行级Agent Hook生命周期，允许在Agent运行前后及出错时执行自定义逻辑，增强了扩展性。
- **WebUI性能修复**: [#4157](https://github.com/HKUDS/nanobot/pull/4157) `fix(webui): bound startup fetch waits` 被合并，修复了WebUI启动时请求可能无限等待的问题，添加了超时处理。

### 4. 社区热点

今日最活跃的讨论集中在以下几个议题：

- **多智能体配置**: [#222](https://github.com/HKUDS/nanobot/issues/222) 是社区长期关注的议题，拥有10条评论和7个👍。用户明确询问是否支持多智能体（Multi-agent）设置，表达了对相关文档和配置指南的强烈需求。这表明构建协作式智能体团队是用户的核心期待之一。
- **“阻止”AI执行rm指令的问题**: [#979](https://github.com/HKUDS/nanobot/issues/979) 获得5条评论，该Issue以实际对话展示了用户在试图测试AI安全限制时，AI成功执行了`rm -rf`命令。这背后反映了用户对**Agent安全性**，尤其是对破坏性命令管控能力的担忧。
- **长耗时任务执行中断**: [#1022](https://github.com/HKUDS/nanobot/issues/1022) 收到4条评论和3个👍。用户反馈在让Agent执行需要长时间运行的任务时（如批量抓取网页数据），Agent经常在“Starting execution now”后便无响应。这暴露了项目在处理长时间、连续性的后台任务时的短板。

### 5. Bug 与稳定性

以下为主要Bug报告，按严重程度排列：

- **严重: MCP服务器随机断开且无法自动重连** ([#4168](https://github.com/HKUDS/nanobot/issues/4168)): 用户报告MCP服务器在运行随机时间后报错“McpError: Session terminated”，必须重启NanoBot才能恢复。此Bug严重影响了使用外部MCP工具的核心功能。**已存在修复PR ([#4171])** 并已合并。
- **中: Progress Streaming 泄露内部工具调用** ([#954](https://github.com/HKUDS/nanobot/issues/954)): 用户报告v0.1.4版本中，新的进度流功能（PR #802）会将 `exec()`、`read_file()` 等内部工具调用暴露给用户聊天界面，造成信息泄露和困惑。
- **中: exec工具幻觉严重** ([#937](https://github.com/HKUDS/nanobot/issues/937)): 用户抱怨Agent在调用`exec`工具时存在大量幻觉，导致该框架的核心功能不可用，用户因此暂停了对该框架的评估。这是一个直接且影响用户信心的Bug。
- **低: 文件系统工具未强制执行workspace限制** ([#143](https://github.com/HKUDS/nanobot/issues/143)): ID为143的长期Issue指出，`ReadFileTool`等文件系统工具没有遵循 `restrict_to_workspace` 配置，构成了安全风险。此问题仍为打开状态，未得到解决。

### 6. 功能请求归类

今日用户提出或讨论的功能请求主要集中在以下几个方向：

- **架构与协作**:
  - 原生Agent到Agent（A2A）协作 ([#4179](https://github.com/HKUDS/nanobot/issues/4179)): 提出建立原生A2A协调机制的内部提议。
  - 多智能体团队搭建 ([#222](https://github.com/HKUDS/nanobot/issues/222)): 热切需求多智能体设置和文档。
  - 子Agent控制面板 ([#1006](https://github.com/HKUDS/nanobot/issues/1006)): 提议增加 `list/kill` 命令管理运行中的子Agent。
  - 可配置子Agent配置文件 ([#1012](https://github.com/HKUDS/nanobot/issues/1012)): 希望子Agent能拥有不同的工具和技能配置。

- **平台与集成**:
  - 新搜索提供商 ([#4182](https://github.com/HKUDS/nanobot/pull/4182)): PR新增Bocha（博查）作为搜索提供商。
  - 新通信通道：Mattermost ([#1011](https://github.com/HKUDS/nanobot/issues/1011))、SimpleX Chat ([#240](https://github.com/HKUDS/nanobot/issues/240))、微信 ([#192](https://github.com/HKUDS/nanobot/issues/192))。

- **质量与体验**:
  - WebUI新聊天快捷键 ([#4181](https://github.com/HKUDS/nanobot/pull/4181)): PR响应请求，添加了 `Cmd/Ctrl+Shift+O` 快捷键。
  - 零开销消息预处理器钩子 ([#990](https://github.com/HKUDS/nanobot/issues/990)): 希望有机制让特定消息（如 #日记）跳过LLM处理，以减少token消耗。

### 7. 用户反馈摘要

- **满意度**:
  - 多位用户肯定了NanoBot项目的轻量级和简洁性（Issue #97）。
  - 一位用户(#1022) 在报告Bug的同时首先表达了对项目的感谢。

- **痛点**:
  - **不稳定与幻觉**: 核心功能`exec`工具的幻觉问题（[#937](https://github.com/HKUDS/nanobot/issues/937)）是导致用户停止评估的首要原因。
  - **任务执行不可靠**: Agent在长时间运行任务时表现不佳（[#1022](https://github.com/HKUDS/nanobot/issues/1022)），影响实际使用。
  - **不安全**: 沙盒隔离不足，AI可以通过`exec`工具删除文件（[#979](https://github.com/HKUDS/nanobot/issues/979)），存在安全风险。
  - **功能缺失**: 对多智能体协作（[#222](https://github.com/HKUDS/nanobot/issues/222)）、文件系统访问限制（[#143](https://github.com/HKUDS/nanobot/issues/143)）、媒体文件清理（[#896](https://github.com/HKUDS/nanobot/issues/896)）等功能的缺失表达出不满。

### 8. 待处理积压

以下为长期存在、重要且未获解决的核心Issue，项目维护者可能需要关注：

- **[#97](https://github.com/HKUDS/nanobot/issues/97): RFC: Proposal for Core Architecture Improvements (Memory, Security, Testing)** (2026-02-04): 这是一份深度的架构改进提议，涵盖内存、安全、测试，并获得6个👍，显示社区对项目底层改进有极高期待。
- **[#143](https://github.com/HKUDS/nanobot/issues/143): [Security] Filesystem tools do not enforce restrict_to_workspace** (2026-02-05): 一个长期存在的严重安全问题，自2月提出以来未得到修复。
- **[#192](https://github.com/HKUDS/nanobot/issues/192): Introduce wechat function** (2026-02-06) 和 **[#240](https://github.com/HKUDS/nanobot/issues/240): Feat request: add support for SimpleX Chat as a channel** (2026-02-07): 对新增通信渠道的长期请求，至今未获官方响应或实现。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 Zeroclaw 项目动态日报。

***

# Zeroclaw 项目动态日报 — 2026-06-04

## 1. 今日活动概览

过去24小时内，Zeroclaw 项目社区活动活跃。共产生30条 Issues 更新，其中新开及活跃27条，关闭/合并3条。PR 方面有50条更新，其中47条待合并，3条已合并/关闭。本周暂无新版本发布。项目动态主要集中在安全架构讨论（如可插拔安全层接口）、终端用户界面（TUI）的持续开发、以及多项 Bug 修复（如后端会话状态错误）和功能增强（如 Cron 日程改进）。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日有2个重要 Issues 和1个 PR 被关闭/合并，标志着相关任务告一段落：

- **PR #7181 [已关闭]:** 对技能更新模块（update-skills）进行了错误处理加固，将静默忽略的 `remove_file` 失败记录为日志，并增强了路径遍历防护。这解决了 `#7071` 中的核心问题。
  [PR链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7181)

- **Issue #6822 [已关闭]:** 将 TUI 二进制文件 `zerocode` 加入发布构建矩阵、CI 流水线及包管理器分发流程的任务已完成。现在 `zerocode` 将随主二进制文件 `zeroclaw` 一同发布。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6822)

- **Issue #7168 / #7167 [已关闭]:** 关于“会话分支”功能的两个 Issues 已被合并关闭。该功能允许用户在任意消息点分叉对话，创建独立分支，用于探索“如果...会怎样”的问题，而不会丢失原始会话。
  [Issue #7168链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7168)

## 4. 社区热点
过去24小时内，社区讨论的焦点集中在安全架构的重构上。

- **[高风险] 可插拔安全提供者接口与 OIDC 认证 (#7142, #7141):** 这两个由 `@singlerider` 提出的 RFC 型 Issue 均获得了3条评论，讨论热烈。它们共同指向一个目标：将当前内嵌的安全实施（如执行策略、报告、事件响应）和 OIDC 认证支持抽象为可插拔的 `trait` 接口。这被视为 `v0.9.0` 版本架构安全性的关键升级，表明社区在推动构建更加模块化和企业级的安全体系。
  [#7142链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)
  [#7141链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)

- **[趋势观察] 安全加固趋势:** 多个 Issues 和 PR 都指向安全层面的加固，包括 `#7142` 的安全层接口、`#7130` 的 `forbid(unsafe_code)` 工作区、`#7155` 的高风险命令确认策略，以及 `#6996` 的细粒度沙箱策略 RFC。这显示出社区当前阶段对运行时安全性的高度关注。

## 5. Bug 与稳定性
今日报告了多个 Bug，影响范围从“工作流阻塞”到“次要问题”。

- **[S1 - 工作流阻塞] 空闲 RPC 会话在10分钟后被回收 (#7179):** `@tidux` 报告，一个闲聊或代码会话在停止交互10分钟后会被无情地回收，导致工作流中断。目前尚无关联的 Fix PR。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7179)

- **[S1 - 工作流阻塞] TUI (zerocode) 在守护进程断开时冻结 (#7125):** 当后端守护进程终止后，TUI 客户端完全冻结，无法响应用户操作，强制用户必须强行退出程序。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7125)

- **[S1 - 工作流阻塞] Webhook 快速启动频道配置缺少端口选项 (#7173):** 在设置 Webhook 频道时，用户无法输入端口号，导致后续启动 Agent 时因缺少 `port` 字段而失败。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7173)

- **其他重要 Bug：**
  - [S2 - 行为降级] 路径策略误报：对引号或 heredoc 命令数据中的 `~` 标记产生误报 (`#7133`)，暂无 Fix PR。
    [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7133)
  - [S2 - 行为降级] 可观测工具调用元数据泄漏到聊天 WebSocket，导致出现永久“unknown”工具卡 (`#7151`)。已有相关 Fix PR `#7180` 解决了部分问题（如 `wire_api` 识别）。
    [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7151)
  - [S2 - 行为降级] Web UI “Clear all” 只清除了前端的消息渲染，并未清除后端会话历史 (`#7126`)。暂无 Fix PR。
    [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7126)

## 6. 功能请求归类
今日提交的功能请求主要集中在安全/架构、Web UI 增强和平台工具链方面。

- **安全/架构**
  - 可插拔安全层接口 (`#7142`)
  - OIDC 认证支持 (`#7141`)
  - 全局禁止 `unsafe` 代码 (`#7130`)
  - 高风险命令的执行确认策略 (`#7155`)
  - 细粒度沙箱策略 (`#6996`)

- **网关/Web UI**
  - 为 Web 聊天添加文件上传/路径选择 UI (`#7138`)
  - 在 Web 聊天中支持斜杠命令 (`#7137`)
  - OpenAI 兼容提供者中，在未设置 `temperature` 时不在请求中发送该字段 (`#7145`)

- **平台/工具链**
  - 将 Fluent/PO 翻译文件移至独立 git 子模块 (`#7184`)
  - 为守护进程 RPC 接口发布机器可读的 OpenRPC 规范 (`#7131`)

## 7. 用户反馈摘要
从今日的 Issues 评论中可以提炼出部分真实用户的诉求和痛点：

- **“中断即丢失”的体验痛点:** 用户在 `#7179`（会话回收）和 `#7125`（TUI 冻结）中反映了对会话持久性的强烈需求。用户期望在空闲或网络中断后能够恢复对话，而非丢失会话状态。`PR #7182` 正是为解决 `#7179` 而提出的，它将移除空闲会话的自动回收机制。
  [PR #7182](https://github.com/zeroclaw-labs/zeroclaw/pull/7182)

- **UI 与后端状态不一致:** 用户 `@NiuBlibing` 报告了多个 Web UI 与后端状态不同步的问题，如 `#7126`（Clear all 不生效）、`#7156`（刷新横幅持久显示配置漂移）。这表明用户非常关注操作的确定性和状态的可见性。

- **文档与代码不同步:** 用户 `@tidux` 在 `#7128` 中指出，CLI 文档中仍存在大量指向已废弃的 `zeroclaw onboard` 命令的引用，这会造成新用户的困惑。
  [Issue #7128链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7128)

## 8. 待处理积压
以下为需要维护者关注的长期未决或重要 Issue/PR：

- **`#6702` [Open]:** 仪表盘助手的工具调用气泡会累积空白行。该 Issue 已创建近三周，并标记为 `status:accepted`，但至今既无进展也无 Fix 关联。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6702)

- **`#6826` [Open] (TUI Tracker) & `#6825` [Open] (TUI UX Tracker):** 这两个关于 TUI 开发的跟踪 Issue 已存在两周，属于高风险、高优先级任务，但目前无人评论或 Assignee。考虑到 TUI 是一个重要的功能，建议维护团队关注并推动其进展。
  [#6826链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6826)
  [#6825链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6825)

- **`#6996` [Open]:** 关于细粒度沙箱政策的 RFC，创建已一周，标记为 `needs-maintainer-review`，尚未获得维护者的正式回复或评估。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)

- **`#7128` [Open]:** 需要清理所有文档中对废弃命令 `zeroclaw onboard` 的引用，该 Issue 是纯粹的文档清理任务，影响新用户上手体验。
  [Issue链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7128)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据提供的 PicoClaw (github.com/sipeed/picoclaw) 数据生成的 2026-06-04 项目动态日报。

---

### PicoClaw 项目动态日报 | 2026年6月4日

**报告周期**: 2026-06-03 至 2026-06-04 (部分数据基于最新更新时间)

#### 1. 今日活动概览

过去24小时内，项目社区活跃度较高。共产生 **4** 条新 Issue 讨论，全部处于活跃状态；同时有 **10** 个 Pull Request (PR) 处于活动状态，其中 **2** 个被合并/关闭，其余仍待处理。无新版本发布。活动集中在两个核心方向：一是修复启动时因 PID 文件引发的稳定性 Bug（有多个相关 PR），二是修复通道、会话管理和工具调用等相关问题。此外，一个关于配置流式 HTTP 请求的新功能请求获得了较多关注。

#### 2. 版本发布

无。

#### 3. 项目进展

今日有 **2** 个 PR 被合并/关闭，推动了以下修复：
- **[PR #2997] fix(deps): bump go from 1.25.10 to 1.25.11 (GO-2026-5039)**：已合并。一个依赖升级修复，将 Go 版本升级至1.25.11，解决了 `net/textproto` 包中一个关于错误消息未转义的安全问题（GO-2026-5039）。
- **[PR #2899] fix: add configurable TLS verification for MQTT channel**：已关闭（合并）。为 MQTT 通道增加了可配置的 TLS 验证，解决了之前 `InsecureSkipVerify` 被硬编码为 `true` 的安全隐患。

此外，**4** 个新的 PR 被提出，目前均处于开放状态：
- **[PR #2995] docs: add v0.2.5~v0.2.9 release highlights to README News**：文档更新，提议将版本 v0.2.5 至 v0.2.9 的发布亮点添加到 README 文件中。
- **[PR #2996] fix(tools): handle json.Marshal errors in exec tool responses**：修复了 `pkg/tools/shell.go` 中 7 处忽略 `json.Marshal` 错误的代码，防止 marshal 失败时静默返回空字符串。
- **[PR #2992] fix(session): skip main-session alias during history promotion**：修复了升级到 v0.2.9 后，新 Web UI 会话错误继承旧会话历史的问题。
- **[PR #2997] fix(deps): bump go from 1.25.10 to 1.25.11 (GO-2026-5039)**：已关闭，状态见上文。

#### 4. 社区热点

- **Issue #2404: [Feature] Add in config to send streaming HTTP request**
  链接: https://github.com/sipeed/picoclaw/issues/2404
  这是今日讨论最活跃的 Issue，共 **11** 条评论。用户 `@OuSatoru` 希望增加配置项来支持向 LLM 后端发送流式 HTTP 请求，类似于 Python OpenAI 客户端的 `stream=True` 功能。这表明社区对提升 LLM 调用响应体验有明确需求，期望能以流式方式获取结果，减少首字延迟。目前该提案处于社区讨论阶段。

#### 5. Bug 与稳定性

今日活跃的 Bug 修复和稳定性相关活动按严重程度排列如下：

- **高优先级：启动失败 (PID 文件问题)**
  - **Issue #2720 [BUG] Singleton PID check doesn't verify process identity — stale PID causes crash loop** (优先级: high)：
    链接: https://github.com/sipeed/picoclaw/issues/2720
    描述了一个导致 Gateway 启动循环崩溃的严重 Bug：当 PID 文件中的 PID 被系统其他进程（如 `systemd-resolved`）重用后，启动检查失败。
  - **对应修复 PR**：已有 **2** 个 PR 尝试解决此问题：
    - **PR #2813**：由 `@mrigangha` 提交，今日有更新。
    - **PR #2955**：由 `@yuxuan-7814` 提交。
    这两个 PR 均旨在改进 PID 检查逻辑，在阻止启动前验证进程是否为真实的 PicoClaw 实例。

- **中等优先级：工具调用消息丢失**
  - **Issue #2958 [BUG] tool_calls messages dropped during consecutive requests via pico channel**：
    链接: https://github.com/sipeed/picoclaw/issues/2958
    用户 `@loafoe` 报告了通过 Pico WebSocket 通道进行连续请求时，后续请求的 `tool_calls` 消息无法送达 UI 的问题。
  - **对应修复 PR**：
    - **PR #2957 fix(channels): prevent tool_calls from being dropped during streaming**：由 `@loafoe` 提交，旨在修复此问题。

- **其他 Bug 修复 PR**：
  - **PR #2996**: 修复了 `exec` 工具响应中 `json.Marshal` 错误被忽略的问题。
  - **PR #2992**: 修复了会话历史在升级后错误传播的回归问题。
  - **Issue #2954 [BUG]不支持32位Android系统**：一个关于不支持32位 Android 系统的 Bug 报告，目前处于陈旧状态，社区反馈较少。

#### 6. 功能请求归类

- **核心功能增强**：
  - **Issue #2404**: 提出在配置文件中增加 `"streaming": true` 选项，以支持向 LLM 后端发起流式 HTTP 请求。目前仅有此 Issue，尚未有对应的实现 PR。

#### 7. 用户反馈摘要

- **对“PID文件”Bug的反馈**：用户 `@weissfl` (Issue #2720) 详细描述了因 `systemd-resolved` 等无关进程复用 PID 导致网关启动失败的场景，这是一个真实且影响启动的痛点。多个贡献者（`@mrigangha`, `@yuxuan-7814`）已提交修复 PR，说明该问题已被社区关注并着手解决。
- **对“工具调用丢失”的反馈**：用户 `@loafoe` (Issue #2958) 报告了在使用 Pico 通道进行连续工具调用时，后几次调用的消息在 UI 中丢失。此反馈指出了在特定交互模式下的功能缺陷。该用户已同时提交修复 PR (#2957)，表明其既是问题发现者也是解决方案提供者。
- **对“32位系统支持”的反馈**：用户 `@yeozhang` (Issue #2954) 报告了项目不支持 32 位 Android 系统的问题。该 Issue 已有一个月无人更新，诉求暂未得到积极回应。

#### 8. 待处理积压

- **Issue #2954 [BUG]不支持32位Android系统**：创建于2026-05-27，已标记为 `stale`，社区和官方均无进一步回应。如果 32 位 Android 是重要的目标平台，此问题需要维护者确认或关闭。
  链接: https://github.com/sipeed/picoclaw/issues/2954

- **Issue #2958 [BUG] tool_calls messages dropped during consecutive requests via pico channel**：虽然作者已提交修复 PR (#2957)，但 Issue 本身近一周未有新回复，且 PR 尚未合并。维护者可关注此 PR 的审查进度。
  链接: https://github.com/sipeed/picoclaw/issues/2958

</details>