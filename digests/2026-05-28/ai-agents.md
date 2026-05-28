# OpenClaw 生态日报 2026-05-28

> Issues: 375 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-28 02:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，以下是为您生成的 OpenClaw 项目动态日报。

---

# OpenClaw 项目日报 (2026-05-28)

## 1. 今日活动概览

过去24小时内，OpenClaw 项目社区活跃度极高，共有 **375 条 Issues 更新**（其中新开/活跃 177 条，已关闭 198 条）和 **500 条 PR 更新**（其中待合并 261 条，已合并/关闭 239 条）。项目发布了两个新版本 `v2026.5.26` 和 `v2026.5.26-beta.2`，主要亮点为更快的网关和回复机制。社区焦点集中在 `v2026.5.26` 版本引入的 “Native hook relay unavailable” 回归问题上，同时，关于内存泄漏、会话锁定和事件循环阻塞相关的稳定性 Bug 也引发了广泛讨论。

## 2. 版本发布

*   **v2026.5.26** 和 **v2026.5.26-beta.2**
    *   **亮点：** 改进了网关启动速度和回复性能，避免重复进行插件、频道、会话等扫描；优化了可见回复机制；减少了网关运行时/会话缓存在负载下的抖动。此外，还包含了对抄本（Transcripts）归档的改进。

*(注：两个版本的 Highlights 描述相同)*

*   **链接：**
    *   [v2026.5.26](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26)
    *   [v2026.5.26-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.2)

## 3. 项目进展 (重要 PR 合并/关闭)

以下为今日合并或关闭的关键 Pull Requests，代表了项目功能和修复的具体推进：

*   **[fix(gateway): drain probe client close](https://github.com/openclaw/openclaw/pull/87230) (已合并)**: 修复了探针网关（probeGateway）在请求WebSocket关闭后立即返回的问题，确保短生命周期的CLI调用者能等待客户端套接字关闭完成。
*   **[fix(sessions): avoid stale restart continuation reuse](https://github.com/openclaw/openclaw/pull/87378) (已合并)**: 修复了会话重启时可能错误复用旧会话生命周期字段的问题，避免了因此导致的消息丢失或会话状态错乱。
*   **[fix(ui): ignore stale running rows after terminal chat](https://github.com/openclaw/openclaw/pull/86952) (已合并)**: 修复了Web UI中，终端聊天后可能因陈旧状态导致会话被错误恢复的问题，提升了用户体验。
*   **[fix(pi-embedded-runner): wire Anthropic thinking recovery](https://github.com/openclaw/openclaw/pull/87464) (已合并)**: 针对 Anthropic 模型“思考块”相关的错误，更新了错误识别和恢复逻辑，提升了嵌入式运行时的兼容性。
*   **[[codex] Fix explicit custom web_search provider routing](https://github.com/openclaw/openclaw/pull/77736) (已合并)**: 修复了 Codex 运行时中，当 `web_search` 工具指定自定义提供商时路由解析错误的问题。

## 4. 社区热点

过去24小时，社区讨论的焦点主要围绕新版本 `v2026.5.26` 引入的回归问题及系统稳定性瓶颈。

*   **`v2026.5.26` “Native hook relay unavailable” 回归问题：**
    *   **[#87331](https://github.com/openclaw/openclaw/issues/87331)**: 用户报告升级后，Codex 工具调用间歇性失败，错误为 “Native hook relay unavailable”。该问题引发了 13 条评论和 8 个 👍 ，已被标记为回归并关闭。
    *   **[#87317](https://github.com/openclaw/openclaw/issues/87317)**: 同样的问题，在 Telegram 会话中，原生工具在所有轮次中被阻塞，获得了 6 个 👍 和 7 条评论，同样被标记为回归并关闭。
    *   **[#87395](https://github.com/openclaw/openclaw/issues/87395)**: 用户再次报告类似的 “Native hook relay unavailable” 问题，导致 memory/filesystem 工具被阻塞。该问题有 5 个 👍，目前为打开状态。

*   **会话锁定与事件循环阻塞：**
    *   **[#86599](https://github.com/openclaw/openclaw/issues/86599)**: 用户报告在 Windows 系统上，本地模型调用会阻塞整个网关事件循环，即使是一个简单的提示也需要约 4 分钟才能完成推理。该问题被标记为 `impact:crash-loop`，有 13 条评论。
    *   **[#84903](https://github.com/openclaw/openclaw/issues/84903)**: 单个挂起的代理会话阻塞了整个网关事件循环，导致所有其他会话停止处理消息。该问题被标记为 `impact:crash-loop`，有 8 条评论和 2 个 👍。

## 5. Bug 与稳定性

以下为今日报告的、按严重程度排列的关键 Bug 和稳定性问题：

*   **P0 / 安全相关:**
    *   **[#50630](https://github.com/openclaw/openclaw/issues/50630) (关闭)**: `Tailscale serve + auth.mode=none` 配置组合下，网关在没有认证的情况下暴露给整个 Tailnet。该问题 CVSS 评分 9.3 (严重)。

*   **P1 / 关键回归与错误:**
    *   **[#87331](https://github.com/openclaw/openclaw/issues/87331) (关闭)**: `v2026.5.26` 引入的 “Native hook relay unavailable” 回归问题。
    *   **[#87302](https://github.com/openclaw/openclaw/issues/87302) (关闭)**: `v2026.5.26` 升级后 Docker 容器无法正常工作。
    *   **[#87357](https://github.com/openclaw/openclaw/issues/87357) (关闭)**: `v2026.5.26` 中 Telegram 插件状态缓存达到 1000 行的硬限制，导致无法写入新内容。
    *   **[#86599](https://github.com/openclaw/openclaw/issues/86599) (打开)**: 本地模型调用阻塞 Windows 网关事件循环。
    *   **[#86508](https://github.com/openclaw/openclaw/issues/86508) (打开)**: Discord 运行时出现 `EmbeddedAttemptSessionTakeoverError`，导致会话运行失败。
    *   **[#84903](https://github.com/openclaw/openclaw/issues/84903) (打开)**: 单个挂起会话阻塞整个网关事件循环。
    *   **[#87016](https://github.com/openclaw/openclaw/issues/87016) (打开)**: 预压缩（preflight compaction）死锁，导致机器人弹回所有消息。

*   **P2 / 重要问题:**
    *   **[#48183](https://github.com/openclaw/openclaw/issues/48183) (打开)**: 飞书（Feishu）插件监控状态清理不完整，可能导致 `httpServers` Map 内存泄漏。
    *   **[#86820](https://github.com/openclaw/openclaw/issues/86820) (打开)**: Codex OAuth 压缩（compaction）过程回退到直接使用 OpenAI API，但未配置 API Key 时失败。
    *   **[#87332](https://github.com/openclaw/openclaw/issues/87332) (关闭)**: Telegram 插件状态缓存写入的条目 `expires_at` 为 NULL，导致达到 1000 行硬限制。

## 6. 功能请求归类

以下为用户提出的新功能需求及相关的 PR：

*   **[更新默认模型配置]**: 用户 [#80380](https://github.com/openclaw/openclaw/issues/80380) 提议将默认模型从 `gemini-3.1-flash-lite-preview` 更新为正式版 `gemini-3.1-flash-lite`。(打开，13条评论)
*   **[轻量级网关部署模式]**: 用户 [#86881](https://github.com/openclaw/openclaw/issues/86881) 提出，对于确定性的插件和通道网关部署，能否提供不加载 AI 模型的 “Gateway-lite” 模式。(打开，6条评论)
*   **[任务流生命周期钩子事件]**: 用户 [#87362](https://github.com/openclaw/openclaw/issues/87362) 希望插件 SDK 能暴露任务流生命周期转换的事件，以便进行插件级别的可观测性。(打开，4条评论)
*   **[会话结束内部钩子事件]**: 用户 [#10142](https://github.com/openclaw/openclaw/issues/10142) 建议增加 `session:end` 内部钩子事件，用于工作流编排场景。(打开，4条评论)
*   **[多槽位记忆角色架构]**: PR [#86210](https://github.com/openclaw/openclaw/pull/86210) 提议增加一个特定用途的记忆角色槽位，使不同记忆插件可以共存和组合。(打开)

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户反馈：

*   **对版本回归的不满：**
    *   多位用户在升级到 `2026.5.26` 后遇到了 “Native hook relay unavailable” 问题，有用户反馈“升级前一切正常，升级后工具调用频繁失败”。
    *   一位使用 Docker 的用户在 `clawdock-upgrade` 后，代理无法响应消息，不得不寻求帮助：“Hello, I am using the docker install... After upgrading the container... the agent does not respond”。

*   **对性能瓶颈的困扰：**
    *   Windows 用户反馈本地模型运行缓慢，简单的“你好吗”之类的提示需要等待近 4 分钟：“Even a trivial fresh prompt like hi, how are you ... took ~4 minutes to complete”。
    *   用户反馈单个代理会话挂起会导致整个网关卡死：“A single agent's stalled session blocks the entire Gateway event loop”。

*   **使用场景和痛点：**
    *   用户希望有一个不包含 AI 功能的精简版网关，用于执行定时任务和Webhook等确定性操作：“I like OpenClaw with AI... but I also have... deterministic deployments... Gateway-lite mode without an AI harness”。
    *   模型的安全对齐阻碍了管理员执行 SSH 诊断等已被授权的运维任务，用户认为代理应该能区分明确的授权和模型自主决策：“OpenClaw sometimes refuses... to perform clearly authorized operational tasks”.

## 8. 待处理积压

以下为长期未响应或持续活跃的重要 Issue/PR，提醒维护者关注：

*   **长期未解决的性能与稳定性问题:**
    *   **[#39476](https://github.com/openclaw/openclaw/issues/39476) (打开，P1)**: A2A 协议中 `sessions_send` 的双向调用导致消息重复，从 2026年3月8日 持续至今。
    *   **[#75378](https://github.com/openclaw/openclaw/issues/75378) (打开)**: 并行生成子代理时网关事件循环饱和导致 1012 重启，从 2026年5月1日 持续至今。
    *   **[#75621](https://github.com/openclaw/openclaw/issues/75621) (打开)**: 网关重复生成 MCP 子进程，导致内存和 CPU 泄漏，从 2026年5月1日 持续至今。
    *   **[#48104](https://github.com/openclaw/openclaw/issues/48104) (打开，P2)**: 模型安全对齐阻碍已被授权的运维任务，从 2026年3月16日 持续至今。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的资深技术分析师，基于您提供的2026-05-28各项目动态日报，现生成以下横向对比分析报告。

---

## AI智能体与个人AI助手开源生态横向对比分析报告 (2026-05-28)

### 1. 今日横向概览

今日，所监测的四个核心开源项目均保持了极高的活跃度。**OpenClaw** 以惊人的375条Issues和500条PR更新领跑，但社区重心聚焦于新版本 `v2026.5.26` 引入的“Native hook relay unavailable”回归问题，以及由之引发的稳定性讨论。**NanoBot** 活动虽相对温和（5条Issues，24条PR），但社区围绕GitAgent协议（GAP）的标准化提案构成了今日最突出的技术议题，同时其MCP连接稳定性获得关键修复。**Zeroclaw** 以31条Issues和50条PR维持高活跃度，其社区热点集中在对DeepSeek-V4 API的兼容性担忧及配置系统中凭证遮蔽与令牌轮换的安全问题上。**PicoClaw** 更新量最小（4条Issues，6条PR），但用户反馈直指平台兼容性（32位Android）、UI/UX配置痛点以及流式传输中的工具调用丢失问题，显示出嵌入式场景下的特有挑战。

### 2. 各项目活跃度对比

| 项目名称 | 今日 Issues 更新 | 今日 PR 更新 | 版本发布 | 关键事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 375条 (新开/活跃177条) | 500条 (待合并261条) | 2个 (`v2026.5.26`及`-beta.2`) | 活动量最高；版本发布活跃，但社区因回归问题（#87331）活跃。 |
| **NanoBot** | 5条更新 | 24条 (待合并17条) | 0 | 活动量中等；技术焦点明确，集中在MCP协议修复和GAP标准化支持提案。 |
| **Zeroclaw** | 31条更新 | 50条 (待合并22条) | 0 | 活动量高；社区讨论聚焦安全和兼容性（DeepSeek-V4、凭证安全）。 |
| **PicoClaw** | 4条新开 | 6条 (待合并5条) | 1个 (`v0.2.9-nightly`) | 活动量最低且幅度最小；社区反馈以具体平台兼容性和交互Bug为主。 |

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw与其他三个项目的差异显著：

- **活动量级**：OpenClaw的日活（Issues+PR更新总量近900条）远超其他项目，其体量反映了更大规模的用户基数和贡献者社区。相比之下，NanoBot、Zeroclaw和PicoClaw的活跃度处于一个稍低的量级。
- **技术重点**：
  - **OpenClaw**：今日核心是 **版本回归的修复与稳定性保障**。社区大量讨论围绕新版本`v2026.5.26`引入的“Native hook relay unavailable”问题、会话锁定、事件循环阻塞等基础架构层面的稳定性Bug。
  - **NanoBot**：重点在 **协议标准化与互联互通**。多个PR提案支持GitAgent协议（GAP），同时完成了MCP连接稳定性和动态工具列表的支持。
  - **Zeroclaw**：聚焦 **安全加固与提供商适配**。社区热点是凭证泄露（#6978）、令牌轮换失效（#6984）以及与DeepSeek-V4的兼容性（#6059）。
  - **PicoClaw**：侧重 **特定平台兼容性及通道稳定性**。反馈集中在32位Android支持、QQ渠道重启、exec命令异常以及工具调用流式传输中的问题。
- **社区讨论面**：OpenClaw的讨论覆盖了网关性能、会话锁定、内存泄漏、安全基线等多个层面，话题最为广泛。NanoBot和Zeroclaw的讨论则更加聚焦，而PicoClaw的讨论非常具体，细粒度到特定命令或平台。

### 4. 共同出现的技术方向

今日多个项目都出现了以下技术方向的讨论：

- **MCP协议优化与稳定性**：**NanoBot**（#4012, #4014）和 **Zeroclaw**（PR#5450）均涉及MCP连接稳定性和工具列表动态更新的改进。**NanoBot**修复了断线重连Bug，**Zeroclaw**有关于IPv6支持的待合并PR。这表明MCP作为工具调用的核心协议，其稳定性和能力拓展是普遍关注点。
- **配置泄露与凭证安全**：**OpenClaw**（#50630）、**Zeroclaw**（#6978, #6984）和 **PicoClaw**（PR#2899）都出现了与凭证、密钥或安全配置相关的问题。例如，OpenClaw的全网暴露漏洞，Zeroclaw的配置遮蔽和令牌轮换缺陷，以及PicoClaw的MQTT TLS验证修复。
- **内存与资源泄漏**：**OpenClaw**（#48183, #75621）和 **Zeroclaw**（#75621）的代办积压中都出现了与内存泄漏相关的长期未解决问题，表明资源管理是跨项目的共性挑战。
- **代码托管平台兼容性**：**Zeroclaw**（#6059）和 **PicoClaw**（#2953）都出现了与特定AI提供商API格式（DeepSeek V4, OpenAI/Codex）的兼容性问题，说明对主流模型新版本API的快速适配是普遍需求。

### 5. 差异化定位分析

- **功能侧重**：
  - **OpenClaw**：全能型AI Agent框架，强调网关架构的健壮性、多通道支持、插件生态和AI模型集成。今日话题集中在事件循环、会话锁、内存泄漏等底层架构稳定性上。
  - **NanoBot**：更偏向于模型中间件和Agent协作。其显著特征是对GitAgent协议（GAP）等标准化协议的主动探索，并持续强化MCP工具调用能力。
  - **Zeroclaw**：定位为**语言与代码辅助**的Agent，命名暗示与代码工具链的深度绑定。今日热点如凭证遮蔽（配置安全）、Web Search工具扩展、以及对非API Key认证（如Codex OAuth）的配置问题，都符合其开发工具场景。
  - **PicoClaw**：聚焦**轻量级嵌入式**或**特定平台**的AI助手。其关注点（32位Android、QQ渠道）和体积更小的更新量表明其目标是资源受限或特定用户生态的轻量化代理。
- **目标用户**：
  - **OpenClaw**: 高级开发者、社区贡献者、需要部署生产级AI Agent系统的团队。
  - **NanoBot**: 关注Agent互联互通标准、模型中间件拼装的高级用户及开发者。
  - **Zeroclaw**: 开发者、DevOps工程师，侧重于代码辅助、安全性和工具链集成。
  - **PicoClaw**: 技术爱好者、特定平台（如低成本嵌入式设备）用户、对开源AI Agent有DIY需求的入门级用户。
- **技术架构**：
  - **OpenClaw**: 事件驱动、插件化、网关式架构。
  - **NanoBot**: 模块化、通道驱动、强调协议标准化。
  - **Zeroclaw**: 微内核架构，强调安全性和功能（工具）的精细控制。
  - **PicoClaw**: 轻量、嵌入式架构，优化于特定平台的资源占用。

### 6. 社区活跃度记录

基于今日数据，活跃度分层如下：

- **非常高**：**OpenClaw** （版本发布频繁、海量合并/关闭的PR和Issue，用户反馈激烈，回归问题引发社区震动）。
- **高**：**Zeroclaw** （议题讨论热度高，安全意识强，大量待合并PR显示开发繁忙）。
- **中等**：**NanoBot** （技术讨论深入，聚焦协议标准化，合并的修复PR意义重大）。
- **中等**：**PicoClaw** （有版本发布，但整体活动幅度最小，用户以具体问题反馈为主，缺乏大规模社区讨论）。

**成熟度说明**：基于今日数据，不进行成熟度评分。OpenClaw和Zeroclaw的高活跃度和版本发布节奏表明其处于快速迭代期。NanoBot在协议标准化上的探索和PicoClaw在特定平台的深耕，反映了它们更聚焦的战略阶段。

### 7. 有证据支撑的观察

基于今日多方数据，提出以下2条由多条数据支撑的观察：

1.  **“Native hook”稳定性成OpenClaw社区信任焦点，版本回归冲击用户体验。** 证据：多个用户报告（#87331, #87317, #87395）在升级到`v2026.5.26`后遭遇“Native hook relay unavailable”问题，导致工具调用失败。同时，Docker容器兼容性（#87302）和Telegram插件状态缓存问题（#87357）也在此次版本更新中集中爆发。这表明快速迭代虽好，但回归测试的压力增大，可能对用户信心造成短期冲击。

2.  **配置泄露与凭证安全是当前开源Agent项目的共性挑战。** 证据：OpenClaw（严重漏洞#50630）、Zeroclaw（#6978配置遮蔽失效、#6984令牌轮换故障）和PicoClaw（PR#2899修复TLS硬编码）都在今日被报告了与安全配置直接相关的问题。这清晰地表明，随着Agent系统应用日益复杂，如何安全地管理各种API密钥、令牌和凭证，已成为所有主流项目都必须严肃对待的普适性工程难题。

- **（观察）今日暂无明确跨项目趋势信号。** 除上述两条观察外，各项目的热点（如NanoBot的GAP标准化、PicoClaw的32位兼容性）差异较大，未形成可相互印证的统一趋势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是为您生成的 NanoBot 项目 2026-05-28 动态日报。

---

## NanoBot 项目动态日报 | 2026-05-28

### 1. 今日活动概览

过去24小时项目活跃度极高。**Issues 方面有5条更新**，其中社区贡献的第三方WebUI面板（#1922）在获得10个👍后正式关闭；另有关于Dream系统作业全局开关（#3885）和LLM流超时（#4013）的功能请求与Bug报告持续获得关注。**PR 方面尤为繁忙**，共有24条更新，其中7条已合并/关闭，17条待合并。合并的PR主要集中在MCP连接稳定性和协议兼容性修复上，如MCP断线重连修复（#4012）和Codex提供商超时配置修复（#4018）。此外，围绕 **GitAgent协议（GAP）** 的支持出现了多次提案，成为今日的突出话题。**今日无新版本发布**。

### 2. 版本发布

*无*

### 3. 项目进展

以下是今日被合并或关闭，标志着重要功能推进或修复的PR：

- **MCP连接稳定性修复（#4012，已合并）**：修复了MCP客户端在断线后无法重新连接的严重Bug。核心问题在于`_mcp_connected`标志在会话断开后未被重置。此PR修复了该问题并加入了重连回调机制。
  ([链接](https://github.com/HKUDS/nanobot/pull/4012))

- **MCP工具列表动态更新支持（#4014，已合并）**：当MCP服务器发送`ToolListChangedNotification`时，NanoBot现在可以实时重载该服务器的工具列表，而无需断开连接。
  ([链接](https://github.com/HKUDS/nanobot/pull/4014))

- **Codex提供商超时配置修复（#4018，已合并）**：修复了Codex提供商忽略`NANOBOT_STREAM_IDLE_TIMEOUT_S`环境变量，而是硬编码了60秒超时的问题。现在，Codex提供商与其他流式提供商的行为保持一致，允许用户自定义超时时间。
  ([链接](https://github.com/HKUDS/nanobot/pull/4018))

- **Agent循环自反促进（#4015，已关闭）**：通过添加“观察-反思”提示词，实现了代理在执行工具后能进行自我反思和循环，以最小代价增强Agent Loop的自循环能力。
  ([链接](https://github.com/HKUDS/nanobot/pull/4015))

### 4. 社区热点

过去24小时内，社区最活跃的话题集中在“代码标准化”和“配置灵活性”上。

- **GitAgent协议（GAP）支持（#4030, #4024, #4019, #4005）**：至少有4个不同贡献者提出的PR，意图为NanoBot增加对GitAgent协议的支持，使其成为一个可移植、可发现的AI Agent。虽然部分PR因重复被标记为“duplicate”或“invalid”，但这反映了社区对Agent标准化和可移植性的强烈兴趣。讨论核心围绕如何将NanoBot的架构与GAP标准（如`agent.yaml`和`SOUL.md`）对齐。
  （代表性PR：[#4030](https://github.com/HKUDS/nanobot/pull/4030)）

- **第三方WebUI面板发布（#1922，已关闭）**：社区成员`@Good0007`开发的`nanobot-webui`面板获得了10个👍和10条评论，最终被关闭。这表明社区对图形化管理界面的需求非常真实，且已有成熟的第三方解决方案出现。
  ([链接](https://github.com/HKUDS/nanobot/issues/1922))

- **LLM流式响应超时（#4013）**：用户反馈从0.1.5升级到0.2.0后，遇到“stream stalled for more than 90 seconds”错误，严重影响工作流。该问题引发了关于默认超时配置是否过于激进（尤其对本地模型而言）的讨论。
  ([链接](https://github.com/HKUDS/nanobot/issues/4013))

### 5. Bug 与稳定性

- **[严重] LLM流式响应超时（#4013）**：用户反馈更新后，LLM流在90秒后持续中断。该问题被标记为`bug`和`question`。目前已存在一个对应的修复PR [#4020](https://github.com/HKUDS/nanobot/pull/4020)，该PR建议将流空闲超时（stream-idle timeout）改为按提供商可配置，以解决本地模型超时问题。
  ([链接](https://github.com/HKUDS/nanobot/issues/4013))

- **[已修复] MCP断线后无法重连（#4012，已合并）**：这是影响MCP连接稳定性的关键Bug，今日已被修复。此修复的核心在于正确重置连接状态标志。
  ([链接](https://github.com/HKUDS/nanobot/pull/4012))

- **[已修复] Codex提供商忽略超时配置（#4018，已合并）**：修复了Codex提供商无视环境变量，硬编码60秒超时的问题，现已与其他提供商行为一致。
  ([链接](https://github.com/HKUDS/nanobot/pull/4018))

- **[严重] Codex提供商重复推理项（#4021）**：相关PR修复了`openai_codex_provider`偶尔重复发送`reasoning`项目，导致400错误的问题，该问题影响了多轮对话。
  ([链接](https://github.com/HKUDS/nanobot/pull/4021))

### 6. 功能请求归类

- **配置增强**:
  - **Dream系统全局开关（#3885）**：用户希望在配置中增加一个`enabled`开关，以完全禁止Dream系统作业的注册，而不是通过禁用memory技能或设置超长间隔来实现。
    ([链接](https://github.com/HKUDS/nanobot/issues/3885))
  - **Dream模型提供商覆盖（#4029）**：用户希望允许为Dream系统指定一个与默认模型不同的提供商，例如允许Dream使用一个更便宜的模型，而对话使用另一个模型。
    ([链接](https://github.com/HKUDS/nanobot/issues/4029))
  - **系统提示模块化（#4022）**：提出了一项功能，允许用户通过配置来开启/关闭系统提示中的特定组件（如agents、soul、user等部分）。
    ([链接](https://github.com/HKUDS/nanobot/pull/4022))

- **协议与标准支持**:
  - **GitAgent协议（GAP）支持（#4030, etc.）**：多项提案要求支持GAP标准，以实现Agent的标准化和可移植性。
    ([链接](https://github.com/HKUDS/nanobot/pull/4030))

- **用户界面与交互**:
  - **第三方WebUI面板（#1922，已关闭）**：社区成员开发了自托管的Web管理面板`nanobot-webui`。
  - **Discord模型切换命令（#4031）**：新增Discord原生斜杠命令`/model`，方便用户在聊天中切换模型。
    ([链接](https://github.com/HKUDS/nanobot/pull/4031))

- **其他**:
  - **微信回复消息条数限制（#2772）**：用户询问如何解决微信channel最多只能返回10条消息的限制。
    ([链接](https://github.com/HKUDS/nanobot/issues/2772))
  - **AUTHORITY引导文件（#4032）**：提议添加一个可选的`AUTHORITY.md`文件，以在Agent系统提示的开头注入高优先级的道德或行为准则。
    ([链接](https://github.com/HKUDS/nanobot/pull/4032))
  - **WebUI项目工作区（#4007）**：为WebUI添加Codex风格的项目工作区，允许每个聊天绑定到特定项目文件夹，并添加访问控制。
    ([链接](https://github.com/HKUDS/nanobot/pull/4007))

### 7. 用户反馈摘要

- **正面反馈**：一位用户在报告Bug #4013时提到“it has been very good (way to say ty)”，对0.1.5版本（WebUI版本）的使用体验表示满意，这体现了项目稳定版本的可靠性。
- **配置不灵活**：Issue #3885和#4029反映了用户对Dream系统行为精细控制的需求。用户不满足于通过间接方式（如禁用技能）来改变行为，而是希望有直接的配置开关。
- **升级兼容性问题**：Bug #4013显示，从0.1.5升级到0.2.0后，一个硬编码的90秒超时成为了用户从本地LLM（小模型）切换到快速云模型（大模型）时的阻碍，暴露出默认配置在不同使用场景下的差异性问题。

### 8. 待处理积压

- **微信消息条数限制（#2772）**：该Issue自4月3日创建以来，已有2条评论，但仍处于开放状态。这是一个用户实际操作中遇到的明确限制。
  ([链接](https://github.com/HKUDS/nanobot/issues/2772))

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目 GitHub 数据生成的 2026-05-28 项目动态日报。

---

## Zeroclaw 项目动态日报 — 2026-05-28

### 1. 今日活动概览

过去24小时内，项目社区活跃度极高。共产生31条 Issue 更新和50条 PR 更新，但无新版本发布。社区讨论焦点集中在安全加固（凭证处理、令牌撤销）、配置系统改进（密钥泄露、路径兼容性）以及核心功能 Bug 修复（与 DeepSeek V4 的兼容性、WebSocket 连接失败）上。大量 PR 处于待合并状态，显示出项目在 0.8 系列版本迭代过程中，功能开发和修复工作正在密集进行。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日无重要 PR 被合并。以下为几个值得关注的在途 PR，它们代表了正在推进的关键功能或修复：

- **[PR #6907] feat(memory): introduce MemoryStrategy trait and DefaultMemoryStrategy**：引入了 `MemoryStrategy` trait，旨在将高层内存生命周期策略与底层 `Memory` CRUD trait 解耦，为更灵活的内存管理机制打下基础。
- **[PR #6833] feat(tools): add Jina AI as web_search provider**：新增了 Jina AI 作为 `web_search` 工具的提供商，丰富了网络搜索功能的选择。
- **[PR #6966] feat(obs): capture prompt/completion content on llm.call spans**：增强了可观测性，现在 LLM 调用（`llm.call` spans）会记录详细的 Prompt 和 Completion 内容，解决了此前调试时看不到输入/输出信息的问题。
- **[PR #6911] fix(agent): resolve runtime profile budgets when constructing security policy**：修复了 Agent 初始化时忽略 `runtime_profile` 配置的安全策略预算问题，确保安全策略能正确应用用户配置。

### 4. 社区热点

1.  **#6059: [Bug]: Incompatible with DeepSeek-V4 API format (与 DeepSeek-V4 API 格式不兼容)**
    - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/6059
    - **热度**: 14 条评论，4 个 👍
    - **分析**: 这是今日讨论最激烈的问题。用户反映在使用 DeepSeek-V4 系列模型时遇到了与“思考模式（thinking mode）”相关的错误。该问题被标记为高优先级（P1）和高风险，表明这是一个影响核心功能的严重兼容性问题。社区期望能快速得到官方修复。
    - **进展**: 已有修复 PR [#6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980) 被提交，通过修正 native tool 请求的路由路径来解决该问题。

2.  **#6808: RFC: Work Lanes, Board Automation, and Label Cleanup (关于工作流、看板自动化和标签清理的 RFC)**
    - **链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/6808
    - **热度**: 7 条评论
    - **分析**: 作为一份治理性质的 RFC，该议题讨论如何优化项目工作流管理，包括引入轻量级 PR 泳道、看板自动化以及清理标签系统。这反映了社区对改进项目协同效率的关注，特别是在 PR 和 Issue 数量激增的背景下。

### 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **[S0 - 数据丢失/安全风险]**
    - **#6978**: `redact nested secrets in object-array property displays`。配置系统中嵌套的 `#[secret]` 字段在 UI 展示时未被正确遮蔽，可能导致敏感信息泄露。已有修复 PR [#6982](https://github.com/zeroclaw-labs/zeroclaw/pull/6982)。

- **[S1 - 工作流阻塞]**
    - **#6984**: `bug(gateway): token rotation does not revoke existing bearer tokens`。令牌轮换功能存在缺陷，新令牌发出后旧令牌依然有效，构成安全风险。
    - **#6888**: `Daemon component 'channels' exits unexpectedly in container`。在容器环境（v0.8-beta-1）下，通道组件启动时识别配置失败并退出。
    - **#6975**: `zeroclaw onboard marks agents/profiles sections complete without writing config`。初始化向导 (`zeroclaw onboard`) 在未实际写入配置的情况下标记步骤为完成，导致后续运行失败。
    - **#6964**: `Windows desktop build fails with duplicate MANIFEST resource`。Windows 桌面应用构建因资源文件冲突而失败。
    - **#6965**: `canvas page never receives frames pushed by web-UI chat agent`。Web UI 聊天中的画布工具功能完全失效。

- **[S2 - 行为降级]**
    - **#6059**: `Incompatible with DeepSeek-V4 API format`。与 DeepSeek-V4 API 不兼容。
    - **#6958**: `Matrix channel: session keyed on event_id causes amnesia between messages`。Matrix 通道由于会话键值设计问题，导致 Agent 无法记住对话上下文。

### 6. 功能请求归类

- **治理与工作流改进**:
    - **#6808** (`Work Lanes, Board Automation, and Label Cleanup`): 改进项目管理流程。
    - **#6971** (`Security UX, runtime credential boundaries, and isolation defaults`): 提升安全性的用户体验和默认配置。
- **架构与插件系统**:
    - **#6489** (`"Everything is a plugin"`): 提出将现有的“集成”和“插件”概念统一为“插件目录”的长期架构方向。
    - **#6943** (`Deconflict Plugin System Goals in FND-001`): 建议将插件系统底层从 Extism 迁移到 wasmtime 组件模型。
- **安全与权限**:
    - **#6915** (`skill-scoped tool activation`): 建议让技能在执行期间临时激活特定工具，无需为 Agent 全局授权。
    - **#6977** (`align http_request private-host allowlist with web_fetch`): 对齐不同工具的私有主机访问控制策略。
- **功能增强**:
    - **#6954** (`Route scheduled tasks through the orchestrator message pipeline`): 将定时任务纳入编排器消息管道，解决一系列相关 Bug。

### 7. 用户反馈摘要

从 Issue 评论中，可以捕捉到以下真实的用户痛点和使用场景：

- **配置与初始化困扰**：用户 @pavelanni 在 #6975 和 #6976 中连续反馈了 `onboard` 配置不生效以及 WebSocket 连接因缺少 `?agent=` 参数而失败的问题，暴露出新手引导流程和 Web UI 的配置体验尚待完善。
- **提供商兼容性焦虑**：用户 @SSDGADsss 在 #6059 中反馈的 DeepSeek V4 兼容性问题，表明了社区对主流 AI 提供商新版本 API 的适配速度有较高期望。
- **会话与上下文丢失**：用户 @VytenisO 在 #6958 中描述的 Matrix 通道“失忆”问题，是真实的多通道 Agent 部署场景中的典型痛点。
- **安全与权限困惑**：用户 @vrurg 在 #6923 中报告了 OpenAI Codex OAuth 配置后，运行时仍然回退到 API Key 的问题，说明凭证处理流程对用户不够透明，容易造成困惑。

### 8. 待处理积压

以下 Issue 或 PR 已存在一段时间且内容重要，但尚未获得充分响应或解决方案，提醒维护者关注：

- **#6074 (audit: track 153 commits lost in bulk revert c3ff635 for recovery)**: 一个关于追踪因批量回滚而丢失的 153 次提交的审计追踪。该 Issue 创建于一个月前，关系到代码历史完整性和潜在的功能恢复。**链接**: https://github.com/zeroclaw-labs/zeroclaw/issues/6074
- **[PR #5450] (fix(tools): add ipv6 support and use reqwest.url)**: 一个关于为工具增加 IPv6 支持的 PR，从4月7日开始，已被标记为 `needs-author-action`（需要作者行动），长期处于待办状态。**链接**: https://github.com/zeroclaw-labs/zeroclaw/pull/5450

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的PicoClaw GitHub数据生成的2026-05-28项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-05-28

## 1. 今日活动概览

过去24小时内，PicoClaw项目保持活跃。共产生4条新Issue，均处于开放状态；另有6条PR被提出或更新，其中1条已合并关闭。项目发布了最新的`v0.2.9-nightly`版本。社区反馈主要集中在平台兼容性、API交互细节及工具调用稳定性上，维护者已针对部分Bug提交了修复PR。

## 2. 版本发布

- **nightly 构建 (`v0.2.9-nightly.20260528.28ec5793`)**
  - **说明**: 这是一个自动化构建版本，可能不稳定，建议谨慎使用。
  - **变更范围**: 包含自上一个稳定版 `v0.2.9` 以来，合并至 `main` 分支的所有代码更改。
  - **完整变更日志**: [点击查看](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展

- **合并/关闭 PR**
  - **PR #2853** `feat(pico): add ChatStream support for real-time token streaming` **已关闭**。该PR为pico通道添加了实时流式传输支持，是之前一个较长时间的功能开发，现已完成合并。

- **其他活跃PR（修复/功能推进）**
  - **PR #2899** `fix: add configurable TLS verification for MQTT channel` **待合并**。修复了MQTT通道中硬编码为`true`的`InsecureSkipVerify`问题，增加了可配置项，默认启用TLS验证，提升安全性。
  - **PR #2696** `feat(mcp): support per-request dynamic headers from channel context` **待合并**。新增允许通过通道上下文动态传递HTTP头给MCP服务器的功能，增强了通道与MCP工具集成的灵活性。
  - **PR #2957** `fix(channels): prevent tool_calls from being dropped during streaming` **待合并**。针对Issue #2958报告的`tool_calls`消息在流式传输中被丢弃的问题提出了修复方案。

## 4. 社区热点

- **Issue #2952 `[Feature]好久没发新版本了` ([链接](https://github.com/sipeed/picoclaw/issues/2952))**
  - 用户`@xhynice`集中反馈了三个痛点：`exec`命令首次调用问题、QQ渠道重启后持续重启的Bug、以及模型提供商的配置体验（如界面默认显示已有key、下拉选择提供商）。该Issue获得了维护者的关注并进行了回复，反映了用户对UI/UX及特定渠道稳定性的迫切需求。

- **Issue #2954 `[BUG]不支持32位Android系统` ([链接](https://github.com/sipeed/picoclaw/issues/2954))**
  - 用户报告了在32位Android系统上无法运行的问题，这涉及到项目对32位架构的支持缺失。

- **Issue #2953 `Bug: OpenAI/Codex OAuth ... response.output_text.delta stream events are ignored` ([链接](https://github.com/sipeed/picoclaw/issues/2953))**
  - 这是一个关于与OpenAI/Codex API集成的技术性Bug。用户`@livinghorror`详细分析了问题根源，并非OAuth或网络问题，而是代理在处理流式响应时忽略了特定的事件类型，导致返回空响应。

## 5. Bug 与稳定性

- **严重**
  - **(新) Issue #2954**: 不支持32位Android系统，影响特定平台的用户使用。
  - **(新) Issue #2953**: OpenAI/Codex OAuth返回空响应，阻断用户在此环境下的工作流。已有详细技术分析。
  - **(新) Issue #2958**: `tool_calls`消息在pico通道连续请求中被丢弃，影响多轮工具调用场景。**已有对应的 fix PR #2957**。

- **中等**
  - **(已报告, 已有对齐PR) Issue #2952**：用户反馈的`exec`命令异常和QQ渠道重启问题，虽未归类为Bug，但属于影响稳定性和体验的问题。

- **修复**
  - **PR #2955** `fix: verify process identity in singleton PID check`：修复了因PID被系统进程复用导致启动失败的问题，提升了单例模式的健壮性。
  - **PR #2956** `fix: preserve channel enabled state when merging security.yml`：修复了加载安全配置文件后，导致某些通道被意外禁用的问题。

## 6. 功能请求归类

- **配置与UI体验改进**
  - **Issue #2952**: 用户建议模型界面默认显示已保存的密钥、提供商支持下拉选择、密钥可复用，并提供API测试连接和模型列表一键导入功能。相关PR暂无。
- **通道与集成增强**
  - **PR #2696**: (待合并) 支持从通道上下文中动态传递HTTP头到MCP服务器，主要面向有特殊认证需求的通道。
- **平台兼容性**
  - **Issue #2954**: 提出对32位Android系统兼容性的需求。

## 7. 用户反馈摘要

- **痛点**: 用户`@xhynice`在使用QQ渠道时遇到重启后上下文混乱的严重问题，并抱怨`exec`命令的首次使用体验不佳。此外，用户对管理多个AI模型提供商的流程感到繁琐，希望有更便捷的配置界面。
- **技术反馈**: 用户`@livinghorror`对一次API交互失败进行了深入分析，明确指出是流式事件类型被忽略所致，为开发者提供了清晰的修复路径。这种高质量的Bug报告是社区健康度的重要表现。
- **满意度**: 目前没有直接的正面反馈。用户更倾向于提出问题和表达不满，这是社区对项目有较高期待并积极使用的信号。

## 8. 待处理积压

- **PR #2899** `fix: add configurable TLS verification for MQTT channel`：该安全修复PR已存在超过一周，且未合并。对于生产环境中使用MQTT通道的用户而言，此修复较为关键。
- **PR #2696** `feat(mcp): support per-request dynamic headers from channel context`：该功能增强PR已存在一个月，至今仍未合并。它对于扩展MCP工具的应用场景有重要价值，可能因涉及复杂的代码审查而被搁置。

</details>