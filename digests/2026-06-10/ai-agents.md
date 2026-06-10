# OpenClaw 生态日报 2026-06-10

> Issues: 445 | PRs: 488 | 覆盖项目: 4 个 | 生成时间: 2026-06-10 02:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是根据您提供的 OpenClaw 项目数据生成的 2026-06-10 项目动态日报。

---

## OpenClaw 项目动态日报 (2026-06-10)

### 1. 今日活动概览

过去 24 小时内，OpenClaw 项目社区活跃度较高，共处理了 445 条 Issue 和 488 条 PR。项目发布了两个新版本 `v2026.6.5` 及 `v2026.6.5-beta.6`，主要修复了 QQ 机器人的模型思考内容泄露风险，并强化了 MCP 工具的结果处理。在代码贡献方面，维护者合并了多个针对 iMessage 通道稳定性、Codex 会话上下文引擎所有权和心跳机制的关键修复。核心问题依然集中在多通道（如 Discord、Telegram）的消息投递可靠性、会话状态管理和长期运行稳定性上。

### 2. 版本发布

-   **[发布] v2026.6.5** / **v2026.6.5-beta.6**
    -   **链接**: 数据未提供具体链接，可从 [GitHub Releases](https://github.com/openclaw/openclaw/releases) 查看
    -   **主要内容**:
        -   **QQBot 修复**: 修复了模型推理/思考过程的脚手架内容（如 `<thinking>`）在投递前未剥离，导致原始内容泄露到聊天频道的问题（#89913, #90132）。
        -   **MCP 工具结果增强**: 对 MCP 工具返回的结果（如 `resource_link`， `resource`， `audio`，格式错误的图片等）进行了强制类型处理，提升了兼容性。

### 3. 项目进展

以下为今日被合并或关闭的重要 PR，代表了项目功能的推进或关键 Bug 的修复：

-   **[合并] 修复 Codex 会话上下文引擎所有权** (`#91590`): 解决了在 Codex 环境下，上下文引擎（context-engine）的压缩所有权归属问题，确保了预算压缩由主引擎执行，防止了因所有权混乱导致的潜在冲突。
-   **[合并] iMessage 通道启动诊断** (`#91785`): 为 iMessage 通道增加了启动时的诊断日志，当入站消息因回显、自聊天等原因被丢弃时，会记录隐私安全的日志，便于问题排查。
-   **[合并] 加固 iMessage 出站发送传输** (`#91783`): 为 iMessage 通道新增了 `sendTransport` 配置项，允许用户选择不同的发送机制（`bridge` 或 `applescript`），并修复了监控线程可能导致回复卡死的问题。
-   **[关闭] 修复心跳一次性任务的后备逻辑** (`#91811`): 修复了当心跳被禁用时，计划的一次性任务 (one-shot job) 未能正确触发的问题，将其列为待处理队列而非标记为“跳过”。

### 4. 社区热点

-   **“[OPEN] [P1] Text between tool calls leaks to messaging channels”** (`#25592`)
    -   **链接**: [https://github.com/openclaw/openclaw/issues/25592](https://github.com/openclaw/openclaw/issues/25592)
    -   **热度**: 29 条评论，持续的社区焦点。
    -   **诉求**: 用户报告代理在工具调用之间生成的内部处理文本（如错误处理、确认信息）被错误地发送到了用户消息频道（如 Slack， iMessage），造成严重的 UX 问题。该 Issue 已于 2月创建，至今未关闭，社区持续关注。

-   **“[OPEN] [P1] [Bug]: [Regression] Codex app-server turn-completion stall returns”** (`#88312`)
    -   **链接**: [https://github.com/openclaw/openclaw/issues/88312](https://github.com/openclaw/openclaw/issues/88312)
    -   **热度**: 15 条评论，受到 3 次点赞，回归问题。
    -   **诉求**: 用户报告在 `2026.5.27` 版本中，Codex 应用服务器在多工具操作轮次中频繁出现“turn-completion stall”（回合完成停滞）问题，而 `2026.5.26` 版本正常。这是一个此前已被修复（`#85107`）的回归 Bug，用户对稳定性表示担忧。

-   **“[OPEN] [P1] Matrix thread replies sent as normal replies on 2026.5.22”** (`#87307`)
    -   **链接**: [https://github.com/openclaw/openclaw/issues/87307](https://github.com/openclaw/openclaw/issues/87307)
    -   **热度**: 14 条评论。
    -   **诉求**: 用户在升级至 `2026.5.22` 后，发现 Matrix 频道的线程行为出现回归，机器人的回复被发送为普通回复而非线程内回复，同时 `/status` 和 `/model` 命令失效。这反映了通道特定功能的稳定性问题。

### 5. Bug 与稳定性

**P1 级（严重）**：

-   **回归/应用服务器**: “[Bug]: [Regression] Codex app-server turn-completion stall returns...” (`#88312`)
    -   影响Codex会话稳定性，无已关联的修复PR。
    -   **链接**: [#88312](https://github.com/openclaw/openclaw/issues/88312)
-   **会话状态/消息丢失**: “EmbeddedAttemptSessionTakeoverError during Discord runs...” (`#86508`)
    -   Discord 运行因会话文件锁定冲突而失败，无关联修复PR。
    -   **链接**: [#86508](https://github.com/openclaw/openclaw/issues/86508)
-   **会话状态/Crash Loop**: “Active Memory + Codex app-server path causes... hook timeouts, startup aborts...” (`#86996`)
    -   特定配置组合导致 Telegram 消息处理缓慢甚至崩溃，无关联修复PR。
    -   **链接**: [#86996](https://github.com/openclaw/openclaw/issues/86996)
-   **会话状态/消息丢失**: “[Bug]: Heartbeat-driven agent replies leave pendingFinalDelivery stuck...” (`#83184`)
    -   心跳驱动回复导致 `pendingFinalDelivery` 状态卡死，阻止后续心跳，有关联PR开放。
    -   **链接**: [#83184](https://github.com/openclaw/openclaw/issues/83184)
-   **会话状态/消息丢失**: “Session write-lock timeouts block subagent delivery lanes” (`#86538`)
    -   会话写锁超时阻塞了子代理的交付通道，有关联PR开放。
    -   **链接**: [#86538](https://github.com/openclaw/openclaw/issues/86538)
-   **OOM/系统崩溃**: “[Bug]: gateway heap grows unbounded over time, gets killed by cgroup OOM...” (`#89315`)
    -   网关内存泄漏导致长期运行后 OOM 被杀，无关联修复PR。
    -   **链接**: [#89315](https://github.com/openclaw/openclaw/issues/89315)

**P2 级**：

-   **回归/文档**: “[Bug]: Live Docs are ahead of release” (`#48920`)
    -   在线文档中的功能（如 `IsolatedSessions`）未在最新稳定版中出现，造成用户混淆。
    -   **链接**: [#48920](https://github.com/openclaw/openclaw/issues/48920)
-   **消息丢失/Crash Loop**: “Bug: Telegram sendChatAction infinite retry loop with no backoff” (`#56096`)
    -   Telegram 的“typing…”动作在模型返回错误时陷入无限重试，导致机器人无响应。
    -   **链接**: [#56096](https://github.com/openclaw/openclaw/issues/56096)

**P3 级**：

-   无新的P3级Bug被特别关注。

### 6. 功能请求归类

-   **Chann消息处理**:
    -   `#54531`: 【P1】强制回复至原始聊天频道 (Telegram/Discord/WhatsApp)
    -   `#52640`: 【P2】为长时间运行的任务添加持久化状态展示面板
    -   `#53486`: 【P2】修复飞书卡片消息渲染为纯文本的回归问题
    -   `#54794`: 【P2】Telegram 内联查询支持 (`@botname query`)
-   **会话与上下文管理**:
    -   `#90354`: 【P2】为内存刷新添加有界的追加验证语义
    -   `#55249`: 【P2】会话标签/昵称，便于识别
    -   `#53548`: 【P2】将 `mode="session"` 与线程绑定需求解耦
-   **安全与权限**:
    -   `#56263`: 【P1】允许多用户场景下可配置文件权限
    -   `#55484`: 【P2】支持 cron 和编排器的非线程持久化关联
-   **UI 增强**:
    -   `#42840`: 【P2】在控制台 UI 中添加 MathJax/LaTeX 渲染支持
-   **配置与模型**:
    -   `#53638`: 【P2】为每个频道/群组/DM 单独配置模型
    -   `#51441`: 【P2】在会话状态中暴露最终使用的后端模型

### 7. 用户反馈摘要

-   **关键痛点**:
    -   **消息泄露与投递**: 用户持续报告内部处理文本、工具调用痕迹泄露到对话频道的问题。`#25592` 和 `#44905` 表明这是一个影响范围广且长期未解决的痛点。
    -   **通道特定回归**: `#87307` (Matrix) 和 `#88312` (Codex) 的回归问题让用户感到沮丧，他们希望新版本不要破坏已稳定的功能。
    -   **会话卡死与崩溃**: 用户遇到了多种会话停滞状态，如 `#83184` 的心跳卡死和 `#86508` 的会话锁冲突，这些导致机器人无响应，影响核心使用体验。
    -   **基础设施问题**: `#89315` 报告的长期运行后 OOM 问题，直接影响了服务器端用户的部署稳定性。

-   **积极反馈/场景**:
    -   用户在 `#54253` 中对在 RISC-V 架构上运行 OpenClaw 表现出积极尝试的意愿，虽然遇到了问题，但表明项目用户群体的多元化。
    -   用户对 `#42840` 中增加 MathJax 支持的请求获得了 6 个 👍，显示了部分用户对科学交流的强烈需求。

### 8. 待处理积压

以下为长期未获有效响应或解决的重要 Issue，需引起维护者关注：

-   **`#25592` [P1] Text between tool calls leaks to messaging channels** (创建于 2026-02-24，最后更新 2026-06-09)
    -   **链接**: [#25592](https://github.com/openclaw/openclaw/issues/25592)
    -   **备注**: 三个月有余未解决，社区讨论热度高，核心消息泄露问题，影响所有通道集成。
-   **`#54253` [P2] [Bug]: OpenClaw returns "run Error : LLM Request Failed" on RISC-V64 System.** (创建于 2026-03-25，最后更新 2026-06-09)
    -   **链接**: [#54253](https://github.com/openclaw/openclaw/issues/54253)
    -   **备注**: 涉及小众架构支持，虽然可能优先级较低，但标记为“stale”近3个月。
-   **`#53628` [P2] [Bug]: ${XDG_CONFIG_HOME} is not process when installing a skill** (创建于 2026-03-24，最后更新 2026-06-09)
    -   **链接**: [#53628](https://github.com/openclaw/openclaw/issues/53628)
    -   **备注**: 环境变量未正确处理的基本问题，影响 Docker 安装用户，标记为“stale”。

---

## 横向生态对比

好的，这是基于您提供的各项目2026-06-10动态数据生成的横向对比分析报告。

---

## AI智能体与个人AI助手开源生态横向对比日报

**报告日期**: 2026-06-10

### 1. 今日横向概览

今日各项目社区动态呈现出“修复与安全并行”的态势。**OpenClaw** 保持了最高的绝对活跃度，发布了修补版本并修复了多个核心稳定性问题，但用户对消息泄露和会话停滞的严重回归问题表达了持续的担忧。**Zeroclaw** 和 **PicoClaw** 均进入了密集的问题修复期，不同的是，**Zeroclaw** 的焦点在于核心运行时调度和多通道可靠性，而 **PicoClaw** 则因安全研究员集中提交了15个安全漏洞而进入安全审计的高峰。相比之下，**NanoBot** 社区最为平静，但有关“跨会话上下文污染”和“Provider兼容性”的严重问题已浮现，显示出其核心架构可能存在的隐患。

### 2. 各项目活跃度对比

| 项目 | 今日新 Issues 数 | 今日新/活跃 PR 数 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 445条活跃(含已处理) | 488条活跃(含已处理) | 2个 (`v2026.6.5`及`beta.6`) | 活动量最大，但大量Issues/PRs为历史积压。今日合并了多个关键修复。 |
| **Zeroclaw** | 50条 (48新) | 50条 (49待合并) | 0 | 提交量很高，但今日**无任何PR被合并**，表明维护者评审压力大，或issue/PR质量参差不齐。 |
| **PicoClaw** | 15个安全漏洞报告 | 约5个PR合并/待合并 | 1个 (nightly) | 安全审查事件驱动的高活跃度，有效合并了2个修复PR，修复效率较高。 |
| **NanoBot** | 6个 | 23个 | 0 | 活动量相对最低，但社区讨论聚焦于明确的核心问题，贡献者质量较高。 |

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与其他三个项目的差异显著：

- **活动量与复杂度**: OpenClaw 的 Issues/PRs 池（约400+条）远超其他项目（约50条），这反映了其作为“核心参照”项目的体量、用户基数和长期积累的复杂性问题。其他项目尚处于问题发现的早期或集中爆发阶段。
- **技术重点**: OpenClaw 今日的技术重点在于**通道消息投递的细节优化** (如 iMessage 诊断、QQ 思考内容泄露) 和**会话引擎的架构修复** (Codex 所有权)。其他项目则更聚焦于**基础功能的安全、可靠和正确性**。例如，Zeroclaw 和 PicoClaw 都在解决 MCP 工具和运行时调度的根本性缺陷。
- **社区讨论面**: OpenClaw 社区讨论的核心痛点是**回归和稳定性**（如 Codex 停滞、Matrix 线程回归），暴露了快速迭代下功能退化的问题。NanoBot 社区讨论更偏向**功能增强和用户场景优化**（如会话级模型覆盖），而 Zeroclaw 和 PicoClaw 的社区则处于应对**基础功能缺陷**的阶段。

### 4. 共同出现的技术方向

今日数据中，以下技术需求在多个项目中同时出现：

- **消息管道与内容泄露**:
    - **涉及项目**: OpenClaw, Zeroclaw, PicoClaw
    - **具体诉求**: OpenClaw (#25592) 用户报告内部处理文本泄露到对话频道；Zeroclaw (#6646) 的 Telegram 通道抑制了工具调用；PicoClaw (#3075) 报告技能目录元数据被自动加载进系统提示词。这表明“代理在后台做了什么，以及如何干净地展现在用户面前”是所有项目的共同挑战。

- **会话状态与上下文完整性**:
    - **涉及项目**: OpenClaw, NanoBot
    - **具体诉求**: OpenClaw 出现会话文件锁定冲突 (#86508) 和心跳卡死 (#83184)；NanoBot 报告了跨会话上下文污染 (#4259) 和历史压缩丢失关键信息 (#4264)。这说明随着项目复杂度提升，会话状态管理和上下文隔离已成为核心稳定性瓶颈。

- **Provider/模型兼容性与演进**:
    - **涉及项目**: OpenClaw, NanoBot, PicoClaw
    - **具体诉求**: OpenClaw 的 Codex 应用服务器因版本迭代出现停滞回归 (#88312)；NanoBot 需适配 OpenAI 新模型的 `max_completion_tokens` 参数 (#4261)；PicoClaw 修复了 Claude Opus-4-7 的温度参数弃用问题 (#2940)。这表明紧跟 LLM Provider 的 API 变更并保持向后兼容性，是持续消耗开发者精力的任务。

### 5. 差异化定位分析

- **OpenClaw (综合集成平台)**: 功能范围最广，深度整合了多种通道（iMessage, Matrix, QQ等）、MCP工具和复杂会话引擎（如Codex）。架构更侧重**插件化、高可配置性和通道多样性**。用户画像偏向于希望构建高度定制化、多平台AI助手的开发者和运维人员。

- **Zeroclaw (生产级运行时)**: 特别关注生产环境的稳定性与可观测性。今日焦点在于**核心调度 (SubAgent/Delegate)、Cron任务、上下文预算和可观测性 (OTel)**。其TUI特征 (`zerocode`) 表明目标用户可能是需要管理多个Agent实例的团队和个人，强调运维便利性和可靠性。

- **PicoClaw (轻量化/边缘版本)**: 在功能完整性与**安全性**上产生了明显冲突。今日密集的安全漏洞报告揭示了其在SSRF、权限控制、命令执行等基础安全防护上的薄弱环节。其架构相比OpenClaw可能更“紧凑”，但安全设计上可能存在不足。目标用户可能是对资源占用敏感，或需要在受限环境中部署的开发者。

- **NanoBot (开发者友好型)**: 社区规模最小，但用户对**功能细节和交互体验**有明确诉求（如对话分叉、会话级模型覆盖、WebUI历史完整性）。其核心痛点（上下文污染、压缩丢失）直指其**记忆和上下文管理引擎**的先天设计。定位更接近一个**轻量、易用的个人AI工具**，而非全功能平台。

### 6. 社区活跃度记录

基于今日数据，对各项目社区活跃度进行分层：

- **高活跃度**: **OpenClaw** (海量Issue/PR，发布新版本，有多个高热度讨论)， **PicoClaw** (由安全事件驱动，提交量大，有修复PR合并和版本发布)
- **中高活跃度**: **Zeroclaw** (Issue/PR提交量大，社区焦点集中，但无合并动作，评审流程可能拥挤)
- **中等活跃度**: **NanoBot** (社区规模较小，讨论明确，有成果PR合并，但绝对活跃度较低)

### 7. 有证据支撑的观察

1.  **稳定性回归成普遍风险**：多个项目都出现了“已修复功能在新版本中重新出现”的回归Bug。OpenClaw的Codex停滞(#88312)和Matrix线程行为(#87307)尤为突出。这表明在追求快速迭代时，回归测试和版本管理是共同的薄弱环节。

2.  **安全防御是当务之急**：PicoClaw集中披露的15个漏洞，以及Zeroclaw与OpenClaw中关于MCP工具审批和内容泄露的严重问题，共同指向一个结论：随着AI Agent能力增强（如访问网络、执行代码），其攻击面也在急剧扩大，当前的安全模型（如SSRF防护、权限配置、审批流程）普遍存在设计或实现缺陷。
3.  **会话隔离是核心架构挑战**：NanoBot 的跨会话上下文污染问题 (#4259)，与 OpenClaw 的会话锁定冲突 (#86508) 和预算溢出 (#5808) 问题，本质上都源于负复杂会话状态管理。如何构建健壮、隔离、高效的会话引擎，是所有项目从原型走向生产环境时必须跨越的鸿沟。
4.  **NanoBot 社区更侧重“增强”而非“修复”**：相比其他三个项目深陷“修复与稳定”的泥潭，NanoBot 社区今日提出的核心诉求（如会话级模型覆盖、对话分叉）更偏向功能增强和用户体验优化。这反映出其用户群体对基础功能的可靠性已有一定信心，转而寻求更灵活、更强大的使用方式。这可能是其“小而美”定位的优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是为您生成的 NanoBot 项目动态日报。

***

## NanoBot 项目动态日报 | 2026-06-10

### 1. 今日活动概览

过去24小时内，NanoBot 项目收到了6个新 Issue 和23个 Pull Request。Issue 主要围绕功能增强和 bug 报告，其中关于跨会话上下文污染（#4259）和 OpenAI 兼容 Provider 的 token 参数问题（#4261）引发了较多关注。PR 方面，社区贡献活跃，主要集中在修复 WebUI 渲染、工具调用正确性以及内存模块的稳定性问题上。今日无新版本发布。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日共有10个 PR 被合并或关闭，以下为部分关键进展：

- **WebUI 功能增强：从助手回复处“分叉”对话**（[#4208](https://github.com/HKUDS/nanobot/pull/4208)）。该 PR 为 WebUI 添加了 “Fork from here” 功能，允许用户从任意一条助手回复创建新对话，保留之前的所有上下文，增强了对话的探索性。
- **文档优化：降低新手入门门槛**（[#4177](https://github.com/HKUDS/nanobot/pull/4177)）。该 PR 重构了文档入口，提供了针对无背景用户、CLI 用户、WebUI 用户等不同角色的清晰指引，并新增了多项配置和部署文档，显著改善了新用户的体验。
- **工具调用验证增强**（[#4190](https://github.com/HKUDS/nanobot/pull/4190)）。关闭的 PR 增强了工具调用参数的严格性，避免 Provider 返回的格式错误的参数（如非JSON对象）被静默修复，从而提高了工具调用的可靠性。
- **技能调度器更新**（[#4265](https://github.com/HKUDS/nanobot/pull/4265)）。将 `daily-english-read` 技能的 Cron 调度从每日执行改为每两天执行一次。

### 4. 社区热点

- **[增强] 支持按会话覆盖模型配置**（[#4253](https://github.com/HKUDS/nanobot/issues/4253)）
  - **热度**：3条评论。
  - **诉求**：用户 `@rombert` 因工作需求，需要在不同任务（如快速在线模型 vs 私密缓慢的本地模型）间灵活切换。目前项目只提供了全局模型设置，该 Issue 提议为每个对话单独指定模型，从而实现对隐私和速度的按需控制。

### 5. Bug 与稳定性

- **严重：`history.jsonl` 跨会话注入导致上下文污染**（[#4259](https://github.com/HKUDS/nanobot/issues/4259)）
  - **描述**：`ContextBuilder` 在构建 system prompt 时，会错误地将所有会话中未被 `Dream` 处理的条目混入当前会话，导致上下文污染。这个问题由 `@chxuan` 进行了深入的数据流分析，揭示了会话隔离的缺失。
- **严重：OpenAI 兼容格式工具调用解析失败**（[#4061](https://github.com/HKUDS/nanobot/issues/4061)）
  - **描述**：部分 OpenAI 兼容 API 以纯文本形式返回工具调用，而非结构化字段。Nanobot 的 runner 无法解析此类响应，导致工具无法执行，用户只能看到原始文本。
- **中：`idleCompact` 历史压缩丢失关键上下文**（[#4264](https://github.com/HKUDS/nanobot/issues/4264)）
  - **描述**：当前的 `idleCompact` 机制会跳过对话的最后8条消息进行总结。在需要用户多次纠错的场景下，关键的“纠错”和“正确结果”往往位于对话末尾，导致压缩过程丢失重要修正信息，留下错误的历史记录。
- **低：OpenAICompatProvider 的 `max_tokens` 参数问题**（[#4261](https://github.com/HKUDS/nanobot/issues/4261)）
  - **描述**：GPT-5.x 及 o 系列模型要求使用 `max_completion_tokens`，而非 `max_tokens`。当前的 Provider 在未声明 `supports_max_completion_tokens` 的情况下，会发送错误的参数导致请求被拒绝。
  - **Fix PR**：已有两个 PR 试图修复此问题，分别是[#4268](https://github.com/HKUDS/nanobot/pull/4268)和[#4263](https://github.com/HKUDS/nanobot/pull/4263)。两者均采用模型名称匹配作为回退方案。

### 6. 功能请求归类

- **会话级模型覆盖**（[#4253](https://github.com/HKUDS/nanobot/issues/4253)）：允许为单个对话指定不同的模型，以实现灵活切换。
- **Agent 模式使用自定义图标**（[#4262](https://github.com/HKUDS/nanobot/issues/4262)）：若 `config.json` 中定义了 `botIcon`，则在 Agent 模式启动时直接使用该图标，而非默认图标。

### 7. 用户反馈摘要

- **灵活性与隐私矛盾**：用户 `@rombert` 的核心痛点是无法在不同任务（性能/隐私）间无缝切换模型，这阻碍了他在单一客户端中既使用算力强但隐私性差的在线模型，又使用私密但算力较弱的本地模型。
- **上下文完整性的关注**：用户 `@imkuang` 通过具体的对话场景，清晰地指出了 `idleCompact` 机制的过度简化可能导致模型学习到错误的知识。这表明用户对记忆系统如何正确压缩和理解对话历史有较高要求。

### 8. 待处理积压

- **多组安全/稳定性修复 PR 待合并**：由贡献者 `@yu-xin-c` 提交的一系列关于工具、内存和执行安全的 PR（如[#4119](https://github.com/HKUDS/nanobot/pull/4119) 工作区符号链接逃逸、[#4053](https://github.com/HKUDS/nanobot/pull/4053) 只读路径保护、[#4256](https://github.com/HKUDS/nanobot/pull/4256) 内存游标单调性、[#4193](https://github.com/HKUDS/nanobot/pull/4193) 内存生命周期测试等）已存在超过一周，部分待合并时间较长，建议维护者关注并评估合并。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，以下是基于您提供的数据生成的 Zeroclaw 项目动态日报。

---

# Zeroclaw 项目动态日报 — 2026-06-10

## 今日活动概览
过去24小时内，项目保持高度活跃。社区共提交 50 条 Issue（其中 48 条为新开/活跃 状态，2 条已关闭）和 50 条 Pull Request（其中 49 条待合并，1 条已关闭/合并）。**无新版本发布**。今日社区讨论焦点集中在多项高风险 Bug 修复与功能增强上，包括 SubAgent 并行调度修复、Dashboard 状态显示问题解决、OTel 可观测性数据关联以及 Cron 任务行为优化等。多个由社区贡献的紧急 Bug 修复 PR（如针对 MCP 工具审批超时、上下文预算溢出）处于开放状态，等待评审与合入。

## 项目进展
今日无 PR 被合并到 `master` 分支。大部分 PR 处于开放或草稿状态，属于 Bug 修复或新功能实现。今日无重大功能里程碑达成。

## 社区热点
今日讨论最为活跃的 Issue 和 PR 主要围绕核心运行时的稳定性及权限控制，反映出社区对生产环境部署质量的强烈关注。

- **[#6721] [Bug] `tool_search` 不在默认自动审批列表中，导致 MCP 工具加载挂起 120 秒后自动拒绝**
    - **热度：** 4条评论（当日高热度）
    - **链接：** [https://github.com/zeroclaw-labs/zeroclaw/issues/6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)
    - **分析：** 此 Bug 被标记为 `risk: high` 和 `priority:p1`，严重影响了所有使用 MCP 工具且开启了 `deferred_loading` 的用户的无头部署（Webhook模式），因为它导致工具调用永远无法完成。社区对审批流程跨工具的连贯性提出了更高要求。

- **[#7442] [PR] fix(runtime): 使并行 SubAgents 和 Delegates 能可靠地返回结果**
    - **链接：** [https://github.com/zeroclaw-labs/zeroclaw/pull/7442](https://github.com/zeroclaw-labs/zeroclaw/pull/7442)
    - **分析：** 此 PR 解决了一个关键的 Agent 调度问题，即重复调用保护机制错误地阻止了有意为之的并行 SubAgent 或 Delegate 任务。社区对此反馈积极，这可能显著提升复杂多步骤任务的执行效率和可靠性。

## Bug 与稳定性
今日报告的 Bug 涵盖了从核心功能阻塞到 UI 显示等多个层面。以下按严重程度排列，并标注是否已有修复 PR：

**S1 - 工作流阻塞 (Workflow Blocked)**
- **用户消息丢失 (#6034):** 单轮及多轮对话中存在用户消息丢失现象，导致请求被 Provider 拒绝（400 Bad Request）。已有 PR #未发现对应PR。
- **MCP 工具审批超时 (#6721):** `tool_search` 工具未被列入默认自动审批列表，导致在 Webhook 模式下 MCP 工具加载静默挂起 120 秒后自动拒绝。已有 PR #未发现对应PR，但有讨论。
- **默认上下文预算溢出 (#5808):** 默认的 32k 上下文预算在首次迭代时即被系统提示和工具定义占据约 3.3 倍，导致无限预缩裁。已有修复 PR: [#7440] fix(runtime): skip futile history trim when system prompt exceeds budget。
- **Telegram 工具调用失败 (#6646):** 通过 Telegram 通道发起的 `web_search_tool` 和 `web_fetch` 无法触发。已有修复 PR: [#7438] fix(channels): telegram delivery prompt no longer discourages tool use。
- **Cron 任务重复执行 (#6037):** Cron 任务在仍在运行时可以被重复启动，导致任务实例激增。已有修复 PR: [#7348] fix(cron): skip overdue jobs on startup when catch_up_on_startup is disabled。

**S2 - 行为降级 (Degraded Behavior)**
- **记忆权重过高 (#5844):** Agent（特别是在Cron任务中）过度依赖记忆，忽视了当前提示词，导致行为不符合预期。
- **zerocode Dashboard 状态显示错误 (#7376):** Dashboard 隐藏了无法加载或错误状态，并将历史记录标记为活跃会话。已有修复 PR: [#7444] Fix/7376 dashboard state labeling。
- **zerocode 暗色主题文字不可读 (#7377):** 在浅色终端配置下使用暗色主题，可能导致文本不可读。
- **OpenRouter Provider 字段名问题 (#6584):** 兼容性 Provider 忽略了 `reasoning` 字段，只读取 `reasoning_content`。已有修复 PR: [#7423] fix(providers): preserve compatible reasoning field name on multi-turn replay。

**S3 - 次要问题 (Minor Issue)**
- **zerocode 的 Cmd-C 快捷键冲突 (#7378):** macOS 上 `Cmd-C` 复制操作被错误地视为退出命令。
- **zerocode 区域设置生效需要重启 (#7400):** 在 UI 中修改区域设置后，没有任何即时提示告知需要重启才能生效和下载资源。

## 功能请求归类
今日社区提出的新功能需求集中在**安全、权限、可观测性**和**运维便利性**几个方向。

- **安全与权限 (Security & Permission)**
    - **基于发送者的 RBAC (#5982):** 为多租户部署提供按发送者（用户）隔离的工作空间、工具集、速率限制和系统提示。
    - **Per-skill 安全权限 (#5775):** 将全局的 `allow_scripts` 和 `allowed_commands` 改为按 Skill 进行配置，避免安全风险扩散。
    - **子进程内存限制 (#6916):** 为 Shell/Skill 工具执行的子进程添加内存使用上限，防止 OOM 容器。
    - **Composio 操作范围过滤 (#6917):** 允许在授予 Composio 工具包访问权限时，进一步限制可执行的具体操作（如只读不写）。
    - **MCP 工具风险描述文件限制 (#6876):** 确认 `risk_profile.allowed_tools` 是否应能限制 MCP 工具（目前为设计缺陷或文档缺口）。

- **可观测性与运维 (Observability & Operations)**
    - **Turn 元数据关联 OTel Span (#7385):** 在观察者事件中添加 `turn_id` 元数据，用于关联 OpenTelemetry Span，增强链路追踪能力。
    - **缓存输入 Token 成本核算 (#7248):** 持久化 Provider 报告的被缓存输入 Token 数量，并将其纳入成本核算中。

- **功能增强 (Enhancements)**
    - **Discord 频道响应限制 (#6378):** 增加 `allowed_channels` 配置，允许 Discord Bot 仅响应特定频道（与 Matrix 等保持一致）。
    - **Gateway Webhook 签名秘密热加载 (#7410):** 使 Gateway 能在请求处理时实时读取更新后的 Webhook 签名秘密，而非仅启动时缓存。
    - **配置 UX 统一 (#7117):** 目标是使 CLI、Quickstart 和 Web 面板的配置体验达到统一的高质量标准。

## 用户反馈摘要
从今日的 Issue 评论中可以提炼出以下用户痛点和使用场景：

- **配置生效的透明度不足：** 用户在 `zerocode` TUI 中修改区域设置后，没有即时反馈告知需要重启，导致操作困惑（Issue #7400）。
- **多通道交互体验不一致：** 有用户反映 Telegram 通道的提示词“Do not use any tools”实际上抑制了 Agent 使用工具（Issue #6646），这与其在 CLI 或其他通道的行为存在差异。
- **核心功能缺少文档或未实现：** 多位用户发现配置项（如 `context_aware_tools`、`rerank_enabled`）在配置文件中有效，但运行时实际上并未执行，这导致了困惑和文档缺口（PR #7427, #7426）。
- **生产环境稳定性的担忧：** 用户报告了 Cron 任务重复执行、上下文预算计算错误等问题，这直接影响了自动化工作流在长时间运行场景下的可靠性。

## 待处理积压
以下为一些创建已久、标记为高优先级或阻塞状态，但仍未获得明确关注或修复的 Issue 和 PR，提醒维护者关注。

- **[#4853] [Feature]: 从 `.well-known` URI 安装技能 (2026-03-27)**
    - **状态：** `status:accepted`，已获 5 条评论，但无关联 PR。
    - **链接：** [https://github.com/zeroclaw-labs/zeroclaw/issues/4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)
    - **说明：** 这是一个与 Agent Skills 社区标准相关的长期 Feature，目前仍处于等待实现状态。

- **[#5775] [Feature]: per-skill 安全权限 (2026-04-15)**
    - **状态：** `status:blocked, status:accepted`，已获 3 条评论，但无关联 PR。该 Feature 对于提升插件系统的安全性至关重要。
    - **链接：** [https://github.com/zeroclaw-labs/zeroclaw/issues/5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)

- **[#6037] [Bug] Cron 任务重复执行 (2026-04-23)**
    - **状态：** `status:in-progress`，已获 1 条评论，存在修复 PR #7348。
    - **链接：** [https://github.com/zeroclaw-labs/zeroclaw/issues/6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)
    - **说明：** 该严重 Bug 已存在超过一个月，对应的修复 PR #7348 仍在等待合并，需优先推进。

- **[#7215] [PR] fix(quickstart): 为 webhook 通道配置添加端口字段 (2026-06-04)**
    - **状态：** `needs-author-action`
    - **链接：** [https://github.com/zeroclaw-labs/zeroclaw/pull/7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215)
    - **说明：** 此 PR 修正了 Quickstart 配置界面的一个明显字段缺失问题，但因需要作者进一步操作而处于停滞状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是 PicoClaw 项目的2026年6月10日动态日报。

---

## PicoClaw 项目动态日报 — 2026-06-10

### 1. 今日活动概览

今日项目活跃度极高，核心事件为社区安全研究员 **YLChen-007** 集中提交了 **15 个安全漏洞报告**，覆盖 SSRF 绕过、权限提升、命令注入等多个攻击面。与此同时，社区贡献活跃，共有 **3 个 PR 被合并/关闭**，并发布了最新的 **nightly 版本**。整体来看，项目在功能迭代的同时，进入了集中的安全审计与修复阶段。

### 2. 版本发布

-   **nightly: v0.2.9-nightly.20260610.b9a8fad6**
    -   这是一个自动化构建的夜间版本，可能不稳定。
    -   **完整变更日志**: [https://github.com/sipeed/picoclaw/compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

### 3. 项目进展

今日有 2 个修复性 PR 被合并，1 个文档 PR 被关闭。

-   **fix(config): add ok check for type assertion** ([#3064](https://github.com/sipeed/picoclaw/pull/3064)): 修复了配置迁移中因未检验类型断言可能导致 panic 的问题。**已合并**。
-   **fix(providers): omit temperature for claude-opus-4-7** ([#2940](https://github.com/sipeed/picoclaw/pull/2940)): 修复了 `claude-opus-4-7` 模型因发送已弃用的 `temperature` 参数导致 API 调用失败的问题。**已关闭**。
-   **fix(config): use canonical hyphenated model ID** ([#2942](https://github.com/sipeed/picoclaw/pull/2942)): 修正了 Anthropic 模型的默认 ID 格式，修复了首次安装时因模型名格式错误导致无法使用的问题。**已关闭**。
-   **docs: update wechat qrcode** ([#3086](https://github.com/sipeed/picoclaw/pull/3086)): 更新了微信二维码文档。**已关闭**。

### 4. 社区热点

今日社区最显著的热点是 **安全研究员 YLChen-007 集中提交的 15 个安全问题**。这些 Issues 覆盖了多个模块和协议，表明项目安全面需要进行系统性审视。

-   **核心问题**: 安全审计发现大量安全缺陷。
-   **涉及面**:
    -   **SSRF 绕过**: `web_fetch` 工具的防护可通过多种方式绕过，包括特定 IPv4/IPv6 地址、HTTP 代理配置等 (Issues [#3074](https://github.com/sipeed/picoclaw/issues/3074), [#3077](https://github.com/sipeed/picoclaw/issues/3077), [#3078](https://github.com/sipeed/picoclaw/issues/3078))。
    -   **权限与访问控制**: launcher 的 `allowed_cidrs` 可通过反向代理绕过 ([#3069](https://github.com/sipeed/picoclaw/issues/3069), [#3080](https://github.com/sipeed/picoclaw/issues/3080))，MQTT `allow_from` 可被伪造客户端 ID 绕过 ([#3068](https://github.com/sipeed/picoclaw/issues/3068))。
    -   **命令执行风险**: `exec` 工具的批准流程存在符号链接竞争条件 ([#3081](https://github.com/sipeed/picoclaw/issues/3081))，且命令白名单可被 `jq` 绕过以泄露环境变量 ([#3079](https://github.com/sipeed/picoclaw/issues/3079))。
    -   **其他渠道安全**: LINE 和 WeCom 渠道存在重放和触发策略绕过风险 ([#3076](https://github.com/sipeed/picoclaw/issues/3076), [#3073](https://github.com/sipeed/picoclaw/issues/3073))。
-   **链接**: 完整列表请参见 “Bug 与稳定性” 部分。

### 5. Bug 与稳定性

今日收到了 **15 个安全相关的 Bug 报告**，以及 **1 个功能 Bug 修复的 PR**。

**严重安全问题（由 YLChen-007 提交）**:

1.  **[Security] 飞书回复上下文扩展绕过 `allow_from`** ([#3082](https://github.com/sipeed/picoclaw/issues/3082))
2.  **[Security] 审批钩子 `cwd` 符号链接竞争条件** ([#3081](https://github.com/sipeed/picoclaw/issues/3081))
3.  **[Security] `allowed_cidrs` 可通过本机反向代理绕过** ([#3080](https://github.com/sipeed/picoclaw/issues/3080), [#3069](https://github.com/sipeed/picoclaw/issues/3069))
4.  **[Security] `exec` 命令白名单被 `jq` 绕过** ([#3079](https://github.com/sipeed/picoclaw/issues/3079))
5.  **[Security] `web_fetch` SSRF 防护可被多种方式绕过** ([#3078](https://github.com/sipeed/picoclaw/issues/3078), [#3077](https://github.com/sipeed/picoclaw/issues/3077), [#3074](https://github.com/sipeed/picoclaw/issues/3074))
6.  **[Security] 企微群触发策略绕过** ([#3076](https://github.com/sipeed/picoclaw/issues/3076))
7.  **[Security] `skills/` 目录元数据自动加载进系统提示词** ([#3075](https://github.com/sipeed/picoclaw/issues/3075))
8.  **[Security] LINE Webhook 重放攻击** ([#3073](https://github.com/sipeed/picoclaw/issues/3073))
9.  **[Security] Launcher 首次运行设置的 CSRF 漏洞** ([#3072](https://github.com/sipeed/picoclaw/issues/3072))
10. **[Security] Pico WebSocket 客户端可未经授权触发 `/reload`** ([#3071](https://github.com/sipeed/picoclaw/issues/3071))
11. **[Security] OneBot 频道可导致主机端任意文件获取** ([#3070](https://github.com/sipeed/picoclaw/issues/3070))
12. **[Security] MQTT `allow_from` 被客户端 ID 伪造绕过** ([#3068](https://github.com/sipeed/picoclaw/issues/3068))
13. **[Feature] 使用 `vodozemac` 替换不安全的 `libolm`** ([#3088](https://github.com/sipeed/picoclaw/issues/3088))

**已有对应修复 PR 的安全问题**:
-   针对 `198.18.0.0/15` 地址的 SSRF 绕过问题，已有修复 PR: **fix(tools): block 198.18.0.0/15 in SSRF guard** ([#3085](https://github.com/sipeed/picoclaw/pull/3085))。
-   针对 launcher 访问控制问题，已有修复 PR: **feat(web): harden launcher access control** ([#3083](https://github.com/sipeed/picoclaw/pull/3083))。

**功能 Bug 修复（已有 PR）**:
-   **fix(tools): allow workspace relative exec paths** ([#3087](https://github.com/sipeed/picoclaw/pull/3087)): 修复了启用 `restrict_to_workspace` 时，包含 `/` 的相对路径被错误拦截的问题。

### 6. 功能请求归类

-   **协议/WebSocket 增强**: 用户请求为 Pico WebSocket 客户端添加明确的“轮次完成信号”，以便客户端能确定 Agent 何时完全完成处理 ([#2984](https://github.com/sipeed/picoclaw/issues/2984))。
-   **配置/streaming支持**: 用户请求在配置中增加 `"streaming": true` 选项，以支持向 LLM 后端发送流式 HTTP 请求 ([#2404](https://github.com/sipeed/picoclaw/issues/2404))。
-   **新渠道/Provider 支持**:
    -   **feat: add deltachat gateway** ([#3063](https://github.com/sipeed/picoclaw/pull/3063)): 新增 Delta Chat 渠道。**待合并**。
    -   **feat(provider): add NEAR AI Cloud provider** ([#2917](https://github.com/sipeed/picoclaw/pull/2917)): 新增 NEAR AI Cloud Provider。**待合并**。
-   **Agent 协作**: 一个引入 Agent 间协作总线的大型功能 PR **Feat/agent collaboration** ([#2937](https://github.com/sipeed/picoclaw/pull/2937) ) 已于 **5月24日** 被关闭，尚不清楚后续是否会重新打开。

### 7. 用户反馈摘要

-   **历史记录显示不完整**: 用户 `EverestSnow` 报告，在历史记录中查看包含多条用户消息的对话时，只能看到最后一条用户消息，此前的消息均丢失。他指出，消息压缩应针对大模型，而不应影响用户界面显示的历史记录 ([#2796](https://github.com/sipeed/picoclaw/issues/2796))。针对此问题已有修复 PR ([#2990](https://github.com/sipeed/picoclaw/pull/2990))。
-   **模型兼容性问题**: 用户 `LegendAlessandro-Liguori` 报告 `claude-opus-4-7` 模型由于 `temperature` 参数被弃用而导致 API 调用失败 ([#2939](https://github.com/sipeed/picoclaw/issues/2939))。此问题已通过 PR [#2940](https://github.com/sipeed/picoclaw/pull/2940) 修复。

### 8. 待处理积压

-   **历史记录显示问题修复 PR**: **fix(web): read full session history for Web UI display** ([#2990](https://github.com/sipeed/picoclaw/pull/2990)) 已提交一周，用于解决用户反馈的热点问题 ([#2796](https://github.com/sipeed/picoclaw/issues/2796))，目前仍处于待合并状态。
-   **长期停滞的关键 Bug 修复**:
    -   **fix(agent): retry empty llm response** ([#2983](https://github.com/sipeed/picoclaw/pull/2983)): 修复空 LLM 响应不会重试的问题，已存在 9 天。
    -   **fix(channels): exclude tool_calls from auxiliary message filtering** ([#2987](https://github.com/sipeed/picoclaw/pull/2987)): 修复流式会话中 `tool_calls` 消息被错误丢弃的问题，已存在 8 天。
    -   **fix(agent): use summarize_token_percent config** ([#2988](https://github.com/sipeed/picoclaw/pull/2988)): 修复 `/context` 命令显示的压缩阈值不生效的问题，已存在 8 天。
-   **安全审计问题**: 今日集中报告的 15 个安全问题，虽然部分已有修复 PR，但数量庞大且严重性高，需要项目维护者优先评估和回复。

</details>