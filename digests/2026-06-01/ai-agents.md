# OpenClaw 生态日报 2026-06-01

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-01 02:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-06-01

## 1. 今日活动概览

过去24小时 OpenClaw 项目共产生 **500 条 Issue 更新**（新开/活跃 284，已关闭 216）及 **500 条 PR 更新**（待合并 201，已合并/关闭 299）。发布 **4 个新版本**（v2026.5.31-beta.1 至 beta.4），均聚焦于 Agent 与 CLI 运行时在中断工具调用、过期会话绑定、压缩交接及媒体投递重试等场景下的恢复稳定性，同时改善了 Telegram、WhatsApp、iMessage、Slack 等频道的投递可靠性。社区讨论热度较高的议题集中在会话上下文混淆、Matrix 线程回复退化和 Agent 运行时因 LLM API 超时导致的卡死等问题。

## 2. 版本发布

### v2026.5.31-beta.4（最新）
- **核心改进**：Agent 与 CLI 后端运行时对中断工具调用、过期会话绑定、压缩交接及媒体投递重试的恢复更干净（[#88129](https://github.com/openclaw/openclaw/pull/88129)、[#88136](https://github.com/openclaw/openclaw/pull/88136)、[#88141](https://github.com/openclaw/openclaw/pull/88141)、[#88162](https://github.com/openclaw/openclaw/pull/88162)、[#88182](https://github.com/openclaw/openclaw/pull/88182)）。
- **频道与移动投递**：Telegram、WhatsApp、iMessage、Slack 等频道的投递更稳定。
- **破坏性变更**：未提及。

### v2026.5.31-beta.3 / beta.2 / beta.1
- 三个早期 beta 版本包含与 beta.4 相同的核心改进，但版本顺序显示为逐步推进。由于数据截断，具体差异未展示。

## 3. 项目进展

今日有 **299 个 PR 被合并或关闭**，以下为其中较重要的进展（从展示的 PR 中筛选）：

- **#88873**（已关闭）：[修复 Agent OS 全本地 Docker 基板](https://github.com/openclaw/openclaw/pull/88873)，硬化 loopback 发布处理、隔离 Blackboard 数据库、完善包包含与实时验证路径。
- **#88820**（待合并）：[修复诊断中嵌入运行活动清除逻辑](https://github.com/openclaw/openclaw/pull/88820)，解决通道 Lane 在卡死恢复后仍报告 `idle/embedded_run,q=1` 的问题。
- **#88769**（待合并）：[修复 Agent 中内联 `<think>` 推理文本泄露到 OpenAI 兼容路径的可见文本](https://github.com/openclaw/openclaw/pull/88769)，解决 MiniMax 等模型在 delta.content 中输出推理标签导致用户可见的 bug。
- **#88696**（待合并）：[修复 runUnsafeReindex 因 sqlite-vec 虚拟表缺失导致崩溃](https://github.com/openclaw/openclaw/pull/88696)（关联 issue #70559）。
- **#88880**（待合并）：[将可空工具 Schema 投射到提供者侧的 OpenAPI 友好格式](https://github.com/openclaw/openclaw/pull/88880)，保持运行时校验语义。

此外，多个关于子代理执行后端、记忆模块多槽架构、Telegram 交错进度渲染等特性的 PR 仍处于待合并或审查阶段。

## 4. 社区热点

以下 Issue 和 PR 在当前展示数据中评论数最多（11–13 条），反映了用户最关注的痛点：

- **#32296** [Bug] Agent 回复上一条消息而非当前消息（会话上下文混淆）
  评论数：13，👍：1
  链接：https://github.com/openclaw/openclaw/issues/32296
  用户诉求：Agent 在会话中错误地引用之前用户消息，导致对话错位。该问题自 3 月 2 日创建，至今仍为 OPEN 状态，标签包含 `clawsweeper:needs-maintainer-review`。

- **#87307** [Bug] Matrix 线程回复退化为普通回复；`/status` 和 `/model` 静默失效
  评论数：11，👍：1
  链接：https://github.com/openclaw/openclaw/issues/87307
  用户报告：升级到 2026.5.22 后 Matrix 线程行为退化，bot 回复以普通回复形式发送而非线程内回复，同时部分命令无声无响应。

- **#13583** [Feature] 预响应强制钩子（硬门控）用于强制工具调用/策略规则
  评论数：11，👍：2
  链接：https://github.com/openclaw/openclaw/issues/13583
  用户需求：在高风险场景（金融、安全）中需要机械地阻止 Agent 在未调用指定工具前发出最终回答，而非仅靠软提示。

- **#78308** [Feature] 通过频道中介审批 MCP 工具调用（同意信封）
  评论数：11，👍：1
  链接：https://github.com/openclaw/openclaw/issues/78308
  用户需求：让 MCP 服务器可复用现有的 `/approve <id>` 频道审批流程，用于可变状态工具调用（如发送邮件、写库）。

## 5. Bug 与稳定性

按严重程度排列（P1 / 影响大）：

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| #83959 | Codex app-server 启动重试在替换服务器就绪前耗尽 | OPEN | 未关联 |
| #85251 | Codex app-server 发出 turn/started 后静默，嵌入运行卡死到恢复窗口 | OPEN | 未关联 |
| #45494 | Cron 代理工作在 LLM 持续 500 错误时静默超时而非快速失败 | OPEN | 未关联 |
| #86047 | [Regression] 2026.5.22 Codex app-server / 插件审批停滞导致中断轮次 | OPEN | 未关联 |
| #88020 | REPLAY_INVALID_RE 缺少 Anthropic 'Invalid signature in thinking block' → 硬失败而非重试 | CLOSED | 可能已在 5.31 beta 中修复（参见版本发布） |
| #88788 | GHCR 2026.5.28 镜像触发 Discord 进度评论配置 schema 拒绝 | OPEN | 未关联 |
| #88741 / #88769 | 内联 `<think>` 推理文本泄露到用户可见文本 | 已有关联 PR | #88769 待合并 |
| #88443 | auth.cooldowns 配置变更强制全网关重启，丢弃正在运行的 CLI | CLOSED | 可能已修复 |
| #87616 | LLM 请求超时过快（约 3s），即使已提高超时参数 | OPEN | 未关联 |
| #86342 | MissingAgentHarnessError 竞争（非原子性 harness 注册清理） | OPEN | 未关联 |

严重回归：**#88020** 和 **#86047** 均为出现在 2026.5.22 之后的回归，社区关注度较高（👍 3）。

## 6. 功能请求归类

以下为用户在今日数据中提出的新功能需求及相关 PR（仅记录证据，不预测路线图）：

| Issue | 标题 | 评论数 | 链接 |
|-------|------|--------|------|
| #13583 | 预响应强制钩子（硬门控） | 11 | [链接](https://github.com/openclaw/openclaw/issues/13583) |
| #78308 | 频道中介审批 MCP 工具调用（同意信封） | 11 | [链接](https://github.com/openclaw/openclaw/issues/78308) |
| #79458 | 为斜杠命令描述添加 i18n 支持 | 5 | [链接](https://github.com/openclaw/openclaw/issues/79458) |
| #32496 | 支持 OpenAI 兼容提供商的 frequency_penalty 和 presence_penalty 参数 | 5 | [链接](https://github.com/openclaw/openclaw/issues/32496) |
| #73699 | Discord 语音频道 I/O 桥接到文本频道会话 | 6 | [链接](https://github.com/openclaw/openclaw/issues/73699) |
| #8441 | 技能条目中添加 thinking 和 model 配置 | 5 | [链接](https://github.com/openclaw/openclaw/issues/8441) |

其中 #13583 和 #78308 讨论热度最高，均涉及对 Agent 行为的强制控制与审批机制，反映了用户对高安全场景的需求。

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点与使用场景：

- **会话上下文混淆**（#32296）：用户 `survivor998` 反馈 Agent 回复与当前问题不匹配，表现为“Agent replies to content from previous messages”。该问题自三月份提出，至今未解决。
- **Matrix 线程退化**（#87307）：用户 `sibbl` 升级后，bot 在 Matrix 中的回复以普通回复而非线程内回复发送，部分命令无响应，影响团队协作场景。
- **Anthropic 扩展思维签名过期**（#88020）：用户 `bryanbaer` 报告长时间会话中早期思维块签名过期，导致 Anthropic 拒绝请求，且系统未重试而直接硬失败。
- **Telegram 群组回复发送到错误 chat_id**（#79308）：用户 `Pastafarian23` 发现 Telegram 群消息被回复到用户 DM 而非群组。
- **编码 / 工具 Schema 问题**（#88788）：用户 `ericpearson` 发现 Docker 镜像的配置 schema 拒绝有效的 Discord 进度评论配置，怀疑是构建制品不一致。
- **插件加载静默失败**（#78301）：用户 `lawong888` 调试微信插件时遭遇插件加载器静默容忍编写错误，导致后续运行时错误难以定位。
- **Feishu 群组消息无回复**（#77666）：用户 `fuermos` 升级后 Feishu 群组聊天收到消息但不回复，DM 正常，多名用户遇到（👍 4）。

## 8. 待处理积压

以下为标记为 `stale` 或长期未响应且重要性较高的 Issue / PR，提醒维护者关注：

| Issue | 标题 | 创建日期 | 最后更新 | 链接 |
|-------|------|----------|----------|------|
| #78301 | 插件加载器静默容忍无效插件合约（调试难题） | 2026-05-06 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/78301) |
| #77666 | Feishu 群组消息收到后无回复（2026.5.3 升级后） | 2026-05-05 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/77666) |
| #79308 | Telegram 群组回复发送到错误 chat_id | 2026-05-08 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/79308) |
| #78602 | 浏览器插件 chrome-mcp 运输层持续 targetId 不匹配 + AbortError | 2026-05-06 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/78602) |
| #78055 | 子代理交付可能传递陈旧输出，子代理会话可能继承无关历史 | 2026-05-05 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/78055) |
| #78435 | Windows 上 Slack 频道 start-account 阶段阻塞事件循环 5+ 分钟 | 2026-05-06 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/78435) |
| #75739 | Codex harness 迁移时 fallback="none" 不阻止非 codex 后备；OAuth 配置未代理 | 2026-05-01 | 2026-05-31 | [链接](https://github.com/openclaw/openclaw/issues/75739) |

以上 issue 均已超过 3 周未获得响应，且部分涉及用户正常使用体验（如 Feishu、Telegram、Slack 问题），建议维护者优先评估。

---

## 横向生态对比

好的，这是基于您提供的2026-06-01各项目动态摘要生成的横向对比分析报告。

---

## AI智能体与个人AI助手开源生态横向对比报告（2026-06-01）

### 1. 今日横向概览

今日各项目活动量分化明显。**OpenClaw** 作为核心参照项目，社区活动量最大，发布了4个beta版本，聚焦于Agent运行时稳定性和多渠道投递可靠性，社区讨论密度最高。**NanoBot** 和 **Zeroclaw** 活跃度属于中坚层，前者重点修复了WebSocket认证和WebUI稳定性问题，后者则围绕Provider架构重构和多租户安全模型展开深度社区讨论。**PicoClaw** 规模较小，但针对Codex OAuth的流式事件解析问题完成了关键修复。跨项目来看，安全审批机制、多渠道投递健壮性以及运行时恢复能力是今日共同的技术关注点。

### 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 版本发布 | 关键事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃 284, 关闭 216) | 500 (待合并 201, 合并/关闭 299) | 4个beta版 (v2026.5.31-beta.1 至 beta.4) | 核心参照项目，活动量最高，社区讨论密集。 |
| **NanoBot** | 6 (新开 2, 关闭 4) | 18 (待合并 11, 合并/关闭 7) | 无新版本 | 修复了高优安全（WebSocket认证）和WebUI白屏问题。 |
| **Zeroclaw** | 46 (新开/活跃 34, 关闭 12) | 50 (待合并 40, 合并/关闭 10) | 无新版本 | 紧密围绕Provider架构重构和RBAC等进行社区讨论。 |
| **PicoClaw** | 7 (新开/活跃 4, 关闭 3) | 10 (待合并 7, 合并/关闭 3) | 1个nightly版本 | 完成Codex OAuth空响应修复，规模最小但修复针对性强。 |

### 3. OpenClaw 与同类对照

- **活动量与规模**：OpenClaw 的今日活动量远超其他三个项目，其单日500条Issue和500条PR的处理规模，以及4个版本的发布频率，显示了其作为生态核心的活跃度和维护团队的响应速度。
- **技术重点**：OpenClaw 的技术重点在于大规模Agent运行时的恢复稳定性（中断工具调用、会话过期）和广泛频道的投递可靠性（Telegram、WhatsApp、iMessage、Slack）。相比之下，NanoBot 更侧重于与WebUI相关的稳定性修复和特定Provider认证（Azure AAD），而Zeroclaw的社区讨论则更底层，集中在Provider架构统一和多租户权限模型。
- **社区讨论面**：OpenClaw 社区讨论覆盖了会话上下文混淆、Matrix线程退化等直接影响终端用户使用体验的通用Bug，以及高风险场景下的强审批机制。Zeroclaw 的社区讨论则更偏向开发者和架构师视角，例如Provider架构重构和RBAC设计。NanoBot 的社区互动点则包含了商业合作探讨。

### 4. 共同出现的技术方向

基于今日数据，多个项目都出现了以下需求，表明这些是社区共性的优先关注点：

- **安全与审批机制**：
  - **OpenClaw**：用户提出强审批钩子（#13583）和MCP工具调用审批（#78308）。
  - **NanoBot**：自身面临WebSocket令牌签发缺少认证的安全问题，并已修复（PR #4103）。
  - **Zeroclaw**：社区讨论多租户RBAC（#5982）和`allowed_tools`无法限制MCP工具的安全缺口（#6876）。

- **媒体投递增强**：
  - **OpenClaw**：beta版本中包含Telegram、WhatsApp等频道的投递稳定性改进。
  - **PicoClaw**：其PR #2856 合并了消息工具支持媒体附件的功能，并在Telegram渠道实现富文本投递。

- **运行时恢复与稳定性**：
  - **OpenClaw**：核心改进点，包含中断工具调用、会话绑定等恢复稳定性。
  - **NanoBot**：`/goal` 任务增加了内部持续机制，避免长任务被意外终止（PR #4127）。
  - **PicoClaw**：修复了Codex OAuth在特定流式事件下的空响应问题（PR #2967）。

### 5. 差异化定位分析

- **功能侧重**：
  - **OpenClaw**：功能全面，涵盖多频道、Agent运行时核心、CLI和插件（Codex app-server），定位类似全能型企业级个人助手框架。
  - **NanoBot**：侧重WebUI交互、语音（ASR）、群组协作（飞书、Discord）和轻量级任务管理（Heartbeat, /goal），定位偏向团队协作与轻量化辅助。
  - **Zeroclaw**：强调底层架构统一（Provider、路由）、多租户安全和硬件生态（ESP32），定位偏向高度可定制和“以开发者为中心”的平台。
  - **PicoClaw**：专注于嵌入式、移动端（Termux）和特定系统（FreeBSD），定位为轻量级边缘AI Agent。

- **目标用户**：
  - **OpenClaw**：个人用户、团队和需要稳定多渠道接入和复杂Agent行为的开发者。
  - **NanoBot**：团队协作用户、对WebUI和低代码交互有需求的技术爱好者。
  - **Zeroclaw**：寻求高度定制、对安全架构有严格要求的专业开发者和企业客户。
  - **PicoClaw**：嵌入式开发者、物联网爱好者和对资源占用敏感的用户。

- **技术架构**：
  - **OpenClaw**：采用“基板（Harness）+ Agent” 和 “Blackboard” 数据隔离机制，架构复杂，支持动态加载。
  - **NanoBot**：架构相对简洁，以WebUI和Gateway为核心，强调模块化和功能插拔（如ASR）。
  - **Zeroclaw**：核心正在进行Provider架构统一和输出路由重构，强调多租户隔离和权限模型（RBAC），架构设计偏向分布式和企业级。
  - **PicoClaw**：以“轻量”为核心，代码库更小，依赖更少。

### 6. 社区活跃度记录

基于今日的活动数据进行分层：

- **高活跃度**：
  - **OpenClaw**：单日500条Issue/PR更新，并发布4个版本，社区讨论热度最高。

- **中活跃度**：
  - **Zeroclaw**：单日近100条Issue/PR更新，围绕核心架构的讨论深刻。
  - **NanoBot**：单日24条Issue/PR更新，以高优问题修复为主。

- **低活跃度**：
  - **PicoClaw**：单日17条Issue/PR更新，规模较小，但修复针对性强。

### 7. 有证据支撑的观察

1. **安全审批机制成为热点**：OpenClaw（#13583, #78308）与Zeroclaw（#5982, #6876）同日出现对强制审批、权限控制和RBAC的强烈需求，表明社区正从追求“能用”转向追求“可控、可信”，尤其是在高风险应用场景下。
2. **底层架构一致性是Zeroclaw社区的核心诉求**：Zeroclaw的多个高讨论度Issue（#5937, #5847）均指向Provider、客户端管理和配置结构不统一的问题，这表明项目在快速发展中积累了技术债务，用户对清晰、一致的底层代码架构有迫切需求。
3. **OpenClaw和PicoClaw同时关注Codex/流式响应的稳定性**：OpenClaw 修复了`REPLAY_INVALID_RE`错误，PicoClaw修复了Codex OAuth流式事件解析问题。这表明社区对于同步Agent与外部LLM提供商的复杂流式协议的健壮性非常关注，这是Agent中重要且容易出错的部分。
4. **PicoClaw社区反馈版本迭代慢**：用户直接在Issue中抱怨“好久没发新版本”（#2952），侧面反映了项目在正式版发布节奏上较慢。

**今日暂无明确跨项目信号**：关于特定技术（如MCP、具体LLM模型支持）、生态联盟或市场占有率的横向对比信号不足。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 NanoBot 项目 GitHub 数据生成的 2026-06-01 项目动态日报。

---

# NanoBot 项目日报 - 2026-06-01

## 今日活动概览

过去 24 小时内，项目活跃度较高。共处理了 6 个 Issues（关闭 4 个，新开 2 个），并提交了 18 个 Pull Requests（合并/关闭 7 个，待合并 11 个）。安全与稳定性修复是今日的重点，包括 WebSocket 令牌签发认证、代码块渲染崩溃、Heartbeat 误报通知等问题均已得到解决。此外，社区贡献者主要集中在 Azure AAD 认证支持、本地语音识别集成和多模型 XML 工具调用兼容性等新功能上。

## 版本发布

无新版本发布。

## 项目进展

今日合并/关闭了多项重要的修复与改进，重点解决了几个影响用户体验和系统安全的关键问题：

- **安全修复：WebSocket 令牌签发认证** ([PR #4103](https://github.com/HKUDS/nanobot/pull/4103)): 修复了当配置静态WebSocket令牌时，令牌签发路由缺少身份验证的问题。现在签发短生命周期令牌需要提供有效的静态令牌，防止未经授权地生成令牌。
- **Bug 修复：代码块导致 WebUI 白屏** ([PR #4117](https://github.com/HKUDS/nanobot/pull/4117)): 修复了当消息中的代码块未指定语言时，`react-syntax-highlighter` 组件因接收 `undefined` 的 `language` 属性而导致整个 WebUI 崩溃的问题。现在会将此类代码块默认视为纯文本 (`"text"`) 渲染。
- **Bug 修复：Heartbeat 错误发送“All clear.”通知** ([PR #4114](https://github.com/HKUDS/nanobot/pull/4114)): 修复了当 `HEARTBEAT.md` 文件为空时，Heartbeat 定时任务仍然发送“All clear.”消息到飞书的 Bug。通过此次修改，系统将跳过无实际任务行的检查，并采用了“失败关闭”机制，防止错误通知泄漏。
- **Heartbeat 行为优化** ([PR #4112](https://github.com/HKUDS/nanobot/pull/4112)): 优化了 Heartbeat 任务的内部检查逻辑，使其在无任务时“失败关闭”，避免发送无关消息。同时保持用户提醒功能不受影响。
- **/goal 任务迭代预算扩展** ([PR #4127](https://github.com/HKUDS/nanobot/pull/4127)): 为 `/goal` 指令的执行路径增加了内部持续目标延续机制，当达到常规工具调用迭代预算上限时，可以继续执行，避免长任务被意外终止。

## 社区热点

今日最引人注目的社区互动来自 #4120 **Vest × HKUDS: tool recommendations or monetization angle** ([#4120](https://github.com/HKUDS/nanobot/issues/4120))，这是一个由外部组织提出的合作探讨。虽然该 Issue 已被关闭，但体现了社区对 Nanobot 在 SaaS 工具推荐或变现领域应用潜力的关注。

此外，#4122 **feat(multimodel): support webui recording and transcribe with local asr** ([PR #4122](https://github.com/HKUDS/nanobot/pull/4122)) 也获得了较多关注，该 PR 旨在为 WebUI 添加语音录制和本地 ASR（FunASR）转录功能，表明社区成员在积极扩展 Nanobot 的交互方式。

## Bug 与稳定性

今日报告的 Bug 主要集中在 WebUI 和后台任务模块：

- **[高] WebUI 因代码块无语言标识符导致白屏** ([#4116](https://github.com/HKUDS/nanobot/issues/4116)): 严重性高，会直接导致 WebUI 崩溃。**已有修复 PR #4117**。
- **[中] Heartbeat 在无任务时错误发送通知到飞书** ([#4111](https://github.com/HKUDS/nanobot/issues/4111)): 对用户造成困扰。**已有修复 PR #4114**。
- **[中] 会话管理中用户消息被重复归档** ([#4128](https://github.com/HKUDS/nanobot/issues/4128)): 在 `retain_recent_legal_suffix` 方法的 `else` 分支下，由于逻辑缺陷，可能导致用户消息同时出现在归档和保留列表中，引起 LLM 上下文不一致。目前暂无关联的修复 PR。
- **[高] WebSocket 令牌路由缺少认证** ([#4077](https://github.com/HKUDS/nanobot/issues/4077)): 这是一个安全问题。**已有修复 PR #4103**。

## 功能请求归类

以下是社区提出的新功能需求和对应的 PR 进展：

- **Azure AAD 身份认证支持**: [#4125](https://github.com/HKUDS/nanobot/issues/4125) 用户请求为 Azure OpenAI 提供商增加基于 Azure Active Directory (AAD) 的身份认证支持，以满足企业订阅中禁止使用 API Key 的严格策略。对应的 PR **[#4126](https://github.com/HKUDS/nanobot/pull/4126)** 已经提交，并声明关闭该 Issue。
- **WebUI 语音录制与本地 ASR 转录**: [PR #4122](https://github.com/HKUDS/nanobot/pull/4122) 提交了一个增强功能，允许用户在浏览器中直接录制音频，并通过集成的 FunASR 进行本地转录。
- **解耦 WebSocket 与 HTTP 路由处理**: [PR #4115](https://github.com/HKUDS/nanobot/pull/4115) 提出将 `WebSocketChannel` 中的 HTTP 路由处理逻辑抽取到独立的 `GatewayHTTPHandler` 类中。这被视为是未来实现 WebUI、WebSocket 传输和 AgentLoop 解耦的基础步骤。
- **Heartbeat 推理与通知解耦**: [PR #1443](https://github.com/HKUDS/nanobot/pull/1443)（长期未合并）提出了一个设计改进，让 Heartbeat Agent 默认静默推理，只有通过明确的 `message` 工具调用才能向用户发送通知，并增加了 `sendReasoning` 配置项。

## 用户反馈摘要

从今日的 Issues 评论中可以提炼出以下用户反馈：

- **安全合规需求**: 用户 `@kunalk16` 在 **#4125** 中明确表示，部分 Azure 订阅策略禁止使用 API Key 认证，这促使了对 Azure Identity Based Auth 的需求。这反映了企业级用户对安全合规的刚性需求。
- **上下文一致性担忧**: 用户 `@huji820` 在 **#4128** 中详细描述了 `retain_recent_legal_suffix` 方法中的 Bug 可能导致 LLM 上下文不一致。这表明社区用户对底层会话管理逻辑非常关注，并能精准定位到代码缺陷。

## 待处理积压

以下为长期存在、尚未合并或解决的重要 Issue/PR，提醒维护者关注：

- **[功能] Heartbeat 推理与通知解耦** ([PR #1443](https://github.com/HKUDS/nanobot/pull/1443)): 自2026年3月2日提交后已超过两个月，是与今日修复的 Heartbeat Bug 相关的重要优化。建议重新评估其优先级和与当前代码的兼容性。
- **[功能] Dream 技能所有权标记** ([PR #4101](https://github.com/HKUDS/nanobot/pull/4101)): 旨在防止 Dream 模块覆盖用户创建的技能，对用户数据安全有重要意义，已开启多日但未合并。
- **[Bug] 会话管理中用户消息被重复归档** ([#4128](https://github.com/HKUDS/nanobot/issues/4128)): 一个潜在影响 LLM 上下文一致性的 Bug，目前尚无修复 PR，需要维护者关注和评估。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是 Zeroclaw 项目 2026-06-01 的项目动态日报。

---

## Zeroclaw 项目日报 — 2026-06-01

### 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目社区保持高度活跃。Issues 方面共产生 46 条更新，其中新开/活跃 34 条，关闭 12 条；Pull Requests 方面共产生 50 条更新，待合并数量为 40 条，已合并/关闭 10 条。今日无新版本发布。从更新内容看，社区讨论热点集中在 Provider 架构重构、多租户安全模型（RBAC）、以及输出路由和消息管道的统一化改进。同时，多个针对硬件（ESP32）和不同通讯渠道（如 Email、WhatsApp、Telegram）的功能性 PR 正在密集提交中。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

以下为今日合并/关闭的重要 PR，展示了项目正在推进的具体功能与修复：

- **`fix(zerocode): refresh empty states after setup` (#7029)** - **已合并**。修复了 `zerocode` TUI 在初始设置后，聊天和代码界面出现空白状态的问题。
- **`refactor(cargo): extract channels-all aggregate feature` (#7044)** - **已关闭**。将长串的频道功能列表整合为 `channels-all` 聚合功能，简化了依赖管理。
- **`fix(providers): omit temperature for kimi-k2 models in compatible.rs` (#7049)** - **待合并**。针对 `kimi-k2` 系列模型无法接受默认 `temperature` 参数的问题，在兼容 Provider 层做了修复，这是一个针对特定 Bug #7022 的修复 PR。
- **`feat(gateway): multi-tenant Linq channel with per-alias routing` (#7041)** - **待合并**。将 Linq 通道从单租户升级为多租户模式，支持通过别名隔离不同实例的路由。
- **`fix(config): materialize typed provider aliases from config set` (#7028)** - **待合并**。修复了通过 `zeroclaw config set` 命令配置 Provider 别名时，未正确创建类型化配置结构的问题，确保配置可被系统识别。

### 4. 社区热点

今日最受关注的议题集中在对项目核心架构和功能的讨论上，相关 Issue 的评论数最多。

- **[Feature]: refactor: Unify providers architecture and reqwest client management (#5937)** - **9条评论**。这是社区长期关注的重大重构提议，讨论非常热烈。核心诉求是统一各 Provider 间对 `reqwest` 客户端和模型参数构建的混乱用法，解决代码重复和配置碎片化问题。这反映了社区对项目内部一致性的迫切需求。
- **[Bug]: Document the use of gateway.web_dist_dir & ZEROCLAW_WEB_DIST_DIR (#5847)** - **8条评论**。该 Issue 已关闭。用户请求补充关于 Web Dashboard 配置项的文档。虽然已关闭，但其高评论数显示了清晰的配置文档是用户的刚需。
- **[Feature]: Per-sender RBAC for multi-tenant agent deployments (#5982)** - **8条评论**。用户提出了一个重量级的特性请求：为多租户 Agent 部署提供基于发送者的权限控制（RBAC），以实现客户、运维、开发者等不同角色的工作空间隔离。这表明社区对项目在企业级安全和管理能力上的期待很高。

### 5. Bug 与稳定性

报告提及的 Bug 集中在工作流阻塞（S1）和功能行为异常上。

- **[Bug]: kimi-k2.6 fails with 400 invalid temperature** (#7022)  **S1 - 工作流阻塞**：`kimi-k2` 模型因兼容层始终发送默认 `temperature` 值而被 API 拒绝。**已有对应的修复 PR #7049 提交**。
- **[Bug]: Ollama Provider call failed when tools are needed** (#5962) **S1 - 工作流阻塞**：当需要调用工具时，Ollama Provider 调用失败，并阻塞了会话中的后续消息发送。
- **[Bug]: web_fetch allowed_private_hosts list is essentially useless for domain names that resolve to private IPs** (#5122) **S2 - 降级行为**：安全功能缺陷，`allowed_private_hosts` 白名单机制对解析到私有 IP 的域名无效，仍会被 `web_fetch` 工具拦截。
- **[Bug]: risk_profile.allowed_tools does not restrict MCP tools — by design or documentation gap?** (#6876) **S1 - 工作流阻塞/文档缺口**：安全配置 `allowed_tools` 仅限制内置工具，对 MCP 工具无效。这被标记为计划中的行为，但存在文档缺口，使用户困惑。
- **[Bug]: [agent] context_aware_tools config field is declared but unread** (#6720) **S2 - 降级行为**：一个配置文件字段 `context_aware_tools` 虽然被代码解析，但实际从未被读取和使用，属于死代码。

### 6. 功能请求归类

以下是社区提出的主要新功能需求，部分已有对应的 PR 在推进。

- **Provider 与模型**
  - **标准化 Provider 架构** (#5937): 请求统一 Provider 架构和 reqwest 客户端管理。至今热评最高的议题。
  - **基于 Manifest 的 Provider** (#5731): 请求支持 Manifest 这类 API-Key 管理工具作为 Provider。
  - **模型级别推理配置** (#5843): 请求将 `reasoning_enabled` 等设置从全局改为模型级别。

- **安全与权限**
  - **多租户 RBAC** (#5982): 请求为多租户场景提供发送者级别的角色权限控制。

- **运行时与 Scheduler**
  - **通过消息管道调度定时任务** (#6954): 请求将 Cron 定时器任务的执行集成到主消息管道中，以解决历史记录和安全性问题。
  - **统一输出路由模型** (#6969): 请求建立统一的输出路由模型，允许按用户偏好或 Agent 指令控制回复的“如何”和“在哪里”交付。

- **Agent 能力**
  - **计算机使用（Computer-use）支持** (#6909): 请求支持类似 OpenAI Codex 的屏幕交互能力（截图、鼠标键盘控制）。
  - **技能作用域工具激活** (#6915): 请求在技能执行期间临时激活不在 `allowed_tools` 中的工具。
  - **进程内存限制** (#6916): 请求对 `shell` 和 `skill_tool` 子进程设置内存上限，防止 OOM。
  - **Composio 行为作用域** (#6917): 请求在调用 Composio 动作时，检查每个 Agent 已限定的动作列表。
  - **内存策略层解耦** (#6850): 请求引入 `MemoryStrategy` 特质，将内存生命周期策略与存储后端解耦。

- **渠道与平台**
  - **Mattermost oncall 模式** (#3100): 请求 Mattermost 机器人能回复所有提及它的消息（类似 oncall 模式）。

- **基础设施**
  - **版本化文档部署** (#7023 - PR): 实现版本化文档部署，让用户能浏览不同版本的文档。

### 7. 用户反馈摘要

今日的活跃讨论揭示了用户在使用过程中的一些具体痛点：

- **Telegram 群组忽略回复** (#5866): 用户 @butaji 反馈，当 `mention_only=true` 时，在 Telegram 群组中回复机器人的消息会被忽略，期望机器人能响应直接回复它的人。
- **配置字段的困惑** (#6720): 用户 @nick-pape 发现 `context_aware_tools` 配置字段声明了却不生效，导致用户可能浪费大量时间配置一个无效功能。
- **对内置工具限制和 MCP 工具限制不一致的困惑** (#6876): 用户 @perlowja 指出 `allowed_tools` 不会限制 MCP 工具，并在报告中提出了“这是设计如此还是文档缺失？”的疑问，反映出此行为给用户带来的不确定性和安全顾虑。
- **对大版本变更的期待与谨慎** (#6848 - PR): 大型集成 PR 的作者 @singlerider 明确要求不要合并（“DO NOT MERGE”），并公开征集首轮反馈，展现了项目在引入重大变更时的谨慎态度。

### 8. 待处理积压

以下 Issue 和 PR 创建时间较早，是重要的功能或 Bug 修复，但目前状态为“受阻”或长期未关闭，提醒维护者关注。

- **性能与功能**
  - **[Feature]: Add MCP resource and prompt support** (#4467) - 创建于 2026-03-24，`status:in-progress`。MCP 资源与提示词支持是一项深受社区期待增强（4个 👍），长期处于进行中状态。
  - **[Feature]: [Mattermost] oncall mode instead of sigle-channel listening mode** (#3100) - 创建于 2026-03-10，`status:in-progress`。Mattermost 渠道功能请求，状态长期未更新。

- **安全与修复**
  - **[Bug]: Gemini CLI OAuth is simply not working** (#4879) - 创建于 2026-03-28，`risk: high`，`priority:p1`。Gemini OAuth 功能完全失效，被标记为高优先级，但至今无人认领或解决。
  - **[Bug]: web_fetch allowed_private_hosts list is essentially useless** (#5122) - 创建于 2026-03-29，`priority:p1`。一个高优的安全功能 Bug，修复进度停滞。

- **阻塞的基础设施**
  - **[audit: track 153 commits lost in bulk revert c3ff635 for recovery**](#6074) - 创建于 2026-04-24，`risk: high`，`priority:p2`。这是一个持续关注回滚丢失提交的审计追踪问题，涉及 153 个提交的恢复，对维护代码历史完整性至关重要。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026‑06‑01

## 1. 今日活动概览

过去 24 小时内，PicoClaw 项目保持中等活跃度。共处理 7 条 Issue（新开/活跃 4 条，关闭 3 条），10 条 PR（待合并 7 条，已合并/关闭 3 条）。发布了一个 nightly 版本 v0.2.9-nightly.20260601。社区关注点集中在 Codex OAuth 空响应问题的修复、消息工具支持媒体附件、以及技能二进制依赖检查等方向。核心 Bug 修复 PR（#2967）已合并，但同主题的另一条 Issue（#2674）仍处于开放状态，需进一步跟进。

## 2. 版本发布

- **nightly 版本**
  `v0.2.9-nightly.20260601.ba806592`
  自动化构建，可能不稳定，谨慎使用。
  **完整变更日志**：[https://github.com/sipeed/picoclaw/compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 说明 |
|----|------|------|
| [#2967](https://github.com/sipeed/picoclaw/pull/2967) | fix(codex): preserve streamed output text deltas | **已合并**。修复 OpenAI/Codex OAuth 空响应问题：当后端通过 `response.output_text.delta` 流式输出有效文本但最终 `response.completed` 事件中 `response.output` 为 `null` 时，Codex provider 现在能正确累积流式数据。 |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | feat(message): support media attachments and Telegram rich delivery | **已合并**。为 `message` 工具增加媒体附件支持，并实现 Telegram 渠道的富文本投递。代理不再需要拆分为多条纯文本和信息发送。 |
| [#2980](https://github.com/sipeed/picoclaw/pull/2980) | chore: gitignore debug output files | **已合并**。添加 `.gitignore` 忽略调试输出文件。 |

另外，PR [#2967](https://github.com/sipeed/picoclaw/pull/2967) 关闭了相关的 Issue [#2953](https://github.com/sipeed/picoclaw/issues/2953)，该 Issue 报告了相同的 Codex OAuth 空响应问题（因 `response.output_text.delta` 事件被忽略导致）。

## 4. 社区热点

- **#28** [CLOSED] [Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)
  作者: [@Franzferdinan51](https://github.com/Franzferdinan51) · 创建: 2026-02-11 · 评论: 21 · 👍: 2
  虽然该 Issue 已关闭，但累计 21 条评论表明社区对 LM Studio 的便捷连接集成有较高需求。用户希望其他开发者能提供简单配置方式。

- **#2674** [OPEN] [Codex OAuth: empty assistant response when ChatGPT backend streams items via `response.output_item.done`](https://github.com/sipeed/picoclaw/issues/2674)
  作者: [@geekgonecrazy](https://github.com/geekgonecrazy) · 创建: 2026-04-26 · 评论: 7 · 👍: 4
  尽管 PR #2967 已合入修复，该 Issue 仍处于开放状态（可能因为其描述的问题场景与 #2953 略有差异）。评论区持续有用户反馈，建议维护者确认该 Issue 是否可关闭或需额外修复。

- **#2968** [OPEN] [BUG] /context always show Compress at: 76800 tokens](https://github.com/sipeed/picoclaw/issues/2968)
  作者: [@xpader](https://github.com/xpader) · 创建: 2026-05-30 · 评论: 3 · 👍: 1
  用户报告 `/context` 命令始终显示压缩点固定在 76800 tokens，怀疑是 Bug。该问题尚未分配或收到 PR。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|----------|-------|------|----------|
| **高** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth 空响应（`response.output_item.done` 事件处理缺失） | 已有关联 PR #2967，但 Issue 仍未关闭，需确认是否完全修复 |
| **高** | [#2953](https://github.com/sipeed/picoclaw/issues/2953) | 同样 Codex OAuth 空响应（`response.output_text.delta` 事件被忽略） | 已通过 PR #2967 修复并关闭 |
| **中** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` 始终显示 Compress at: 76800 tokens，不随实际上下文变化 | 无修复 PR |

## 6. 功能请求归类

| 请求来源 | 类别 | 描述 |
|----------|------|------|
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | 新 provider | 请求添加 [OmniRoute](https://github.com/diegosouzapw/OmniRoute) 作为 provider。无评论。 |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | 用户体验 | 中文用户反馈三个改进点：exec 命令默认缺少 actions:run 导致报错；QQ 渠道重启后再次发送消息会再次重启；模型界面应默认显示已有 key 的提供商并支持下拉选择、key 复用、API 测试拉取模型列表一键添加。 |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | 集成 | LM Studio Easy Connect（已关闭）。 |

此外，今日新增的 PR 也包含多个功能增强：

- [#2977](https://github.com/sipeed/picoclaw/pull/2977) feat(cron): add `get` and `update` actions to cron tool
- [#2975](https://github.com/sipeed/picoclaw/pull/2975) feat(telegram): treat reply to bot message as mention in group chats
- [#2936](https://github.com/sipeed/picoclaw/pull/2936) feat(skills): skip skills whose required binaries are missing on PATH
- [#2906](https://github.com/sipeed/picoclaw/pull/2906) Fix message bus backpressure handling and health visibility
- [#2904](https://github.com/sipeed/picoclaw/pull/2904) Fix agent loop reload and panic cleanup stability
- [#2902](https://github.com/sipeed/picoclaw/pull/2902) docs: add Android Termux guide

## 7. 用户反馈摘要

- **Codex OAuth 稳定性**：多位用户（#2674, #2953）反映使用 ChatGPT Codex 后端时出现空响应，影响正常使用。`#2953` 的贡献者指出该问题并非 OAuth 或令牌限制导致，而是流式事件解析缺失。
- **上下文压缩显示**：用户 `@xpader` 在 FreeBSD 平台使用 MiniMax 模型时发现 `/context` 命令显示的压缩值固定为 76800 tokens，与预期不符（#2968）。
- **长期未发版**：用户 `@xhynice` 在 #2952 中抱怨“好久没发新版本了”，并列举多个具体痛点：exec 命令默认不携带 `actions:run` 导致模型报错；QQ 渠道重启后重复重启；模型配置界面交互不合理。
- **LM Studio 集成需求**：`@Franzferdinan51` 在 #28 中表示自己技术能力不足，请求其他开发者帮忙实现简单的 LM Studio 连接方式，获得 2 个 👍 和 21 条评论，说明该需求在社区中有一定共鸣。

## 8. 待处理积压

以下 Issue/PR 长期未获得维护者响应或合并，提醒关注：

- **Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674)**（2026-04-26 创建，已开放 36 天）
  Codex OAuth 空响应问题，虽有关联 PR 但 Issue 状态未更新，需维护者确认是否已修复并关闭。

- **PR [#2936](https://github.com/sipeed/picoclaw/pull/2936)**（2026-05-24 创建，已开放 8 天）
  feat(skills): 跳过缺少所需二进制文件的技能。修复 #2351。已标为 stale，但仍在更新。

- **PR [#2906](https://github.com/sipeed/picoclaw/pull/2906)**（2026-05-20 创建，已开放 12 天）
  Fix message bus backpressure handling。已标 stale。

- **PR [#2904](https://github.com/sipeed/picoclaw/pull/2904)**（2026-05-20 创建，已开放 12 天）
  Fix agent loop reload and panic cleanup。已标 stale。

- **PR [#2902](https://github.com/sipeed/picoclaw/pull/2902)**（2026-05-20 创建，已开放 12 天）
  docs: add Android Termux guide。已标 stale。

</details>