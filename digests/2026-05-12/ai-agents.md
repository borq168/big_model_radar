# OpenClaw 生态日报 2026-05-12

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-12 02:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目 2026-05-12 动态日报。

---

## OpenClaw 项目动态日报 — 2026-05-12

### 1. 今日活动概览

过去24小时，OpenClaw 项目保持了极高的活跃度，共产生约1000条 Issue 和 PR 更新。然而，其中大部分为新增或活跃状态（862条），而关闭/合并的仅占13.8%（138条），反映出项目维护者面临较大的处理压力。发布了3个新的 Beta 版本（v2026.5.10-beta.3/4/5），主要围绕 CI 流程优化、运行时环境检测和代码质量（TypeScript、lint）加固。值得关注的是，项目内的自动化 QA（QA harness）团队集中提交并关闭了约10个测试框架的 Bug 报告，表明团队正在对现有测试基础设施进行系统性审查和修复。

### 2. 版本发布

今日发布了3个新版本，均为 `2026.5.10` 的 Beta 迭代，侧重于内部工程改进和稳定性修复。

- **v2026.5.10-beta.5**
- **v2026.5.10-beta.4**
    - **CI 优化**: 在插件预发布流程中添加了非阻塞的 `plugin-inspector-advisory` 产物，以便在不改变阻塞门禁的情况下，对插件兼容性进行分发前审查。
    - **运行时检测**: 从运行时环境变量中检测 Fly Machines 容器环境，使服务网关能正确绑定地址。
- **v2026.5.10-beta.3**
    - **构建工具加固**: 对 Vitest 启用更严格的 lint 规则，覆盖了 `focused`、`disabled`、`conditional` 等测试行为风险。
    - **格式化统一**: 在共享格式化配置中固定了 oxfmt 的默认值，以确保跨升级的格式化行为稳定。
    - **TypeScript 强化**: 启用了更严格的编译器检查。

### 3. 项目进展

今日合并/关闭的主要 PR 是多个由测试团队（@100yenadmin）提交的关于 QA 测试框架（QA harness）的缺陷修复。这些 PR 旨在纠正测试框架本身而非产品的 Bug，表明项目正在进行一次测试基础设施的清理和标准化工作。

-   **#80675 [已关闭]**：修复了 LLM 闲置超时导致“幽灵交互”的问题，现在会向用户显示明确的错误信息，而非无声地丢弃回合。此修复直接针对了用户报告的中途无响应问题。
-   **#80320 [#80312 [#80236 [#80321 [#80434 [#80760 (已关闭)]**：这些由 @100yenadmin 提交的 Issue 均标记为“已关闭”，并被确认为测试框架（QA harness）的 Bug，而非 OpenClaw 核心产品的运行时缺陷。它们涉及 Mock 提供商的参数校验、属性注入、配置冲突、运行时一致性验证等问题。这些问题被快速识别并关闭，表明项目对测试环境的健壮性有明确认知和快速响应。

### 4. 社区热点

今日最活跃的讨论集中在少数几个顽固的“回归”问题上，用户的挫败感明显。同时，一个历史悠久的“空头承诺”问题获得了持续关注。

-   **Agent 响应中断/无法完成工作**：
    -   **#76877 [已关闭]**: 报告了 Agent 在工作过程中突然停止响应，需要用户主动询问进度才能继续。该 Issue 虽已关闭，但获得了14条评论，显示了此问题的普遍性。关闭原因可能是被其他 Issue 追踪或被归档。
    -   **#62505 [开放]**: 持续近一个月的回归问题，报告 Coding Agent “什么都不做”，只给出模糊的状态更新。12条评论显示了用户对该问题久未解决的失望。
    -   **诉求分析**: 这两个议题的核心痛点在于 **Agent 的可靠性和透明性**。用户需要 Agent 能持续、稳定地完成任务，而不是在执行过程中“假死”或给出空洞的承诺。这可能是由于上下文管理、循环检测或 LLM 输出引导等环节存在缺陷。

-   **Agent 空头承诺**：
    -   **#58450 [开放]**: 用户报告 Agent 在回复末尾承诺“稍后会更新”或“去做某件事”，但实际上并未启动任何后台任务或工具调用。这种“画饼”行为严重影响了用户信任。该 Issue 自3月底以来持续获得评论，表明这是一个难以根治的行为模式问题。

### 5. Bug 与稳定性

今日报告的 Bug 中，“回归”问题占据了主导，尤其在 Agent 的可靠性和性能方面。同时，QA 团队发现了大量测试框架自身的缺陷，这些缺陷在一定程度上“污染”了产品质量的评估。

**高严重度（影响核心功能）**:
-   **Agent 无响应/不执行任务**： `#76877`, `#62505`（持续未解决）—— 直接影响 agent 的可用性。
-   **性能严重回退**： `#76562` —— 从 `2026.4.24` 升级后，CPU 飙升至100%，控制平面RPC延迟极高，系统不稳定。这是一个严重的性能回归问题，目前仍在开放状态。

**中严重度（影响特定功能或配置）**:
-   **控制 UI 停滞**： `#45698` —— 控制 UI 在开启一段时间后变得无响应，影响管理体验。
-   **飞书/钉钉/Telegram 配置验证失败**： `#63101`, `#62985` —— 升级后，部分即时通讯通道的配置文件结构发生变化，导致 `gateway restart` 失败。
-   **上下文溢出与重置循环**： `#63216` —— 即使设置了高 `reserveTokensFloor`，会话仍会反复触发硬上下文溢出重置。

**低/中严重度（测试框架问题，非产品Bug）**:
-   大量由 `#80319`, `#80320`, `#80312` 等 Issue 反映的“Bug”已被确认为 QA 测试框架的缺陷。例如，`#80312` 指出 `fs.read` 的失败用例测试比较的是 Mock 提供商的计划参数，而非 Codex 运行时的实际参数。这些问题虽然不影响终端用户，但影响了新特性和修复的质量验证。

**已有关联修复 PR**:
-   **#80675** 已针对 Agent 闲置超时导致的“幽灵回合”问题提交了修复并合并。
-   针对 **#76877** 和 **#62505** 这类 Agent 行为问题，当前无直接对应的 Fix PR，但 `#80675` 的修复逻辑可能间接缓解部分场景。

### 6. 功能请求归类

今日收集到的新功能请求主要围绕多租户、敏感信息安全和存储架构扩展。

-   **多租户支持 (RBAC)**：`#60127` —— 用户提出在单一 OpenClaw 实例中实现安全的租户隔离，包含 RBAC、资源范围限制和严格的数据边界，避免为每个租户部署独立实例。
-   **敏感数据脱敏**：`#64046` —— 用户要求对配置文件（如 `openclaw.json`）、日志及自带 UI 中的 API Key、Token、Secret 等敏感凭据进行脱敏处理，当前仅有控制台打印支持脱敏。
-   **多槽位/多索引记忆架构**：`#60572`, `#63829`, `#63990` —— 多个用户从不同角度提出了对记忆系统的扩展需求，包括：1）为每个 agent 分配独立的记忆 Wiki 库；2）支持多个专用记忆槽位（如短期、长期、向量搜索等）并存；3）引入多索引的向量嵌入支持，实现模型感知的故障转移。

### 7. 用户反馈摘要

用户反馈主要集中在两个核心矛盾上：**新版本引入回归问题** 和 **Agent 行为模式的不透明性**。

-   **关于版本更新**: 用户对升级后面临的未知风险表达了不满。
    -   “...由于很多 Bug，我无法运行比 `2026.04-23` 更新的版本。”（摘译自 `#76877`）—— 揭示了高版本的不稳定状态。
    -   “在从 `2026.4.24` 升级到 `2026.4.29/2026.5.2` 后，CPU 持续接近100%”（摘译自 `#76562`）—— 性能回归是用户最直接的痛点之一。

-   **关于 Agent 行为**: 用户对 Agent 的行为缺乏预期和控制感到困扰。
    -   “Agent 除了给出模糊的状态更新什么也不做，然后为更新的模糊性道歉……”（摘译自 `#62505`）—— 这是对 Agent 执行失败时缺乏有效反馈的绝佳讽刺。
    -   “Agent 承诺‘我会查看项目记忆并回来跟进’，但实际上什么都没开始。”（摘译自 `#58450`）—— 用户需要 Agent 的“知行合一”，而不是空洞的对话承诺。

### 8. 待处理积压

以下是一些值得关注的长期未解决或延误的重大问题，提醒维护团队关注。

-   **Coding Agent 持续不工作 (`#62505`)**： 自4月7日以来活跃至今，具有12条评论。这是一个明确影响核心“Coding Agent”功能的回归问题，对依赖此功能的用户影响巨大。
-   **性能回归 (`#76562`)**： 来自 `2026.4.29/2026.5.2` 的高CPU和延迟问题，虽然只有8条评论，但获得了4个👍，表明受影响的用户群不小。
-   **Control UI 卡死 (`#45698`)**： 一个自3月12日版本以来的老问题，9条评论。这表明UI层的性能问题可能是一个长期的技术债务。
-   **QA 测试框架遗留问题 (`#80434`)**： 虽然相关Issue已被关闭，但该 Issue 明确指出在测试框架修正后，仍有部分“原生-实时”验证缺口存在。这可能会影响未来新功能发布的信心。

**链接汇总**
-   [OpenClaw Issues](https://github.com/openclaw/openclaw/issues)
-   [OpenClaw Pull Requests](https://github.com/openclaw/openclaw/pulls)

---

## 横向生态对比

好的，作为资深的 AI 智能体与个人 AI 助手开源生态技术分析师，根据您提供的四份项目日报数据，我已生成以下横向对比分析报告。

---

### 2026-05-12 开源 AI 智能体项目横向对比分析

#### 1. 今日横向概览

今日，四个项目均保持高活跃度，但关注点有所分化。**OpenClaw** 作为社区体量最大的项目，活动量远超其他，但其社区讨论呈现出对核心 Agent 行为回归和可靠性下降的强烈不满。**NanoBot**、**Zeroclaw** 和 **PicoClaw** 则在维护各自稳定性的同时，重点推进了多用户支持、性能修复和新通道集成（如美团LongCat、Slack Webhook）等具体功能。值得注意的是，多个项目不约而同地出现了对“多租户/会话隔离”和“Agent工具能力增强”的需求，这可能是个人助手向团队协作场景延伸的早期信号。

#### 2. 各项目活跃度对比

| 项目 | 今日 Issues 更新 | 今日 PR 更新 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 约 1000 条 (活跃 862, 关闭/合并 138) | 约 1000 条 (活跃/合并) | 3 个 Beta (v2026.5.10-beta.3/4/5) | 整体活跃度最高，但关闭/合并比例低 (13.8%)，维护压力大 |
| **NanoBot** | 10 条 (新开/活跃) | 22 条 (合并/关闭 6) | 无 | 活跃度较小但效率高，社区讨论聚焦 |
| **Zeroclaw** | 19 条 (新开/活跃 10, 关闭 9) | 50 条 (待合并 30, 合并/关闭 20) | 无 | PR 数量多，合并速度快，工程活动丰富 |
| **PicoClaw** | 12 条 (新开/活跃 4, 关闭 8) | 27 条 (合并/关闭 9, 审查中 18) | 1 个 Nightly (v0.2.8-nightly) | 功能开发和修复并举，有明确的功能提案讨论 |

**活跃度分层**：
- **极高度活跃**：OpenClaw
- **高度活跃**：Zeroclaw, PicoClaw
- **中度活跃**：NanoBot

#### 3. OpenClaw 与同类对照

- **活动量差异**：OpenClaw 的 Issue/PR 体量（约1000条/天）是其他三个项目（总计约100条/天）的十倍，体现出其作为“核心参照”的社区地位。但其 PR 关闭/合并率 (13.8%) 远低于其他项目（NanoBot: 27%, Zeroclaw: 40%, PicoClaw: 33%），说明其代码审查和合并效率可能面临瓶颈。
- **技术重点差异**：OpenClaw 今日的焦点在 **Agent 行为回归（无响应/空承诺）和性能回退（CPU飙升至100%）**，以及 QA 测试基础设施的清理。而 NanoBot 重点在 **多租户 WebUI、MCP 依赖和 Token 用量追踪**；Zeroclaw 重点在 **Provider 兼容性修复（reasoning字段）、通道测试门控和 CI 修复**；PicoClaw 重点在 **增强消息工具和子代理路由策略**，并集成新通道（Slack Webhook、AWS Bedrock）。
- **社区讨论面**：OpenClaw 的社区呈现明显的挫败感，讨论围绕“版本升级后的稳定性灾难”和“Agent画饼”。其他项目社区则更积极，讨论集中于具体功能的缺失和改进（如会话隔离、SearXNG搜索）或新集成，社区氛围更为建设性。

#### 4. 共同出现的技术方向

以下方向在今天同时被多个项目提及：
- **多用户/多租户/会话隔离**：
  - **NanoBot**: 用户 (#3744) 提出 IM 场景下的 `session` 级别内存隔离请求；WebUI 已支持多用户登录 (#3749)。
  - **OpenClaw**: 有功能请求提出为单一实例添加多租户 RBAC 支持 (#60127)。
- **Agent 工具能力增强**：
  - **PicoClaw**: 用户/贡献者提出扩展 `message` 工具以支持媒体附件 (#2855, #2856)。
  - **Zeroclaw**: 用户提出优化 Telegram 工具的批准按钮交互 (#6565)。
  - **OpenClaw**: Agent 的 `web_search` 工具在特定通道（Telegram）下不可用 (#4083，虽已关闭但未修复)。
- **Provider 兼容性与弹性**：
  - **NanoBot**: 新增美团 LongCat 提供商 (#3736)；支持 `/model` 命令动态切换 (#3738)。
  - **Zeroclaw**: 修复 `reasoning` 字段解析问题 (#6584)；寻求更稳健的搜索方案 (SearXNG, #5316)。
  - **PicoClaw**: 新增 Gemini web search provider (PR #2763)；修复 AWS Bedrock 流式支持 (#2645)。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 基础 Agent 框架、上下文管理、高度可扩展性 | 轻量级个人助手，**强于 IM 集成与个人记忆** | 模块化 Agent 工程实践，**强于 Provider 适配与企业级部署** | **边缘设备与嵌入式 AI**，强于 RISC-V 生态与硬件集成 |
| **目标用户** | 高级开发者、生态构建者 | 个人用户、小型团队 | 开发者、DevOps、企业 | 硬件爱好者、嵌入式开发者、边缘计算场景 |
| **核心架构** | 基于 Rust，核心+模块化 | 基于 Rust，**会话配置文件驱动** (USER/MEMORY.md) | 基于 Rust，**工作区 (crates/) 拆分**，注重工程化 | 基于 Rust，**针对低功耗/轻量级运行时优化** (Sipeed 生态) |
| **差异化证据** | PR/Issue 量级最大，关注基础设施和回归 | WebUI 多用户、`/insights` 命令、`MEMORY.md` 隔离 | CI 标签自动修复、`SOP webhook`、`integration/v0.8.0` | Sipeed 硬件集成、OpenEmbedded 构建、Telegram 相册合并 |

#### 6. 社区活跃度记录

- **第一梯队（极高关注度）**：**OpenClaw**。社区规模最大，但用户情绪复杂，存在对稳定性的普遍不满。
- **第二梯队（高关注度）**：**Zeroclaw, PicoClaw**。工程活动频繁，具备活跃的贡献者和用户讨论，社区氛围健康。
- **第三梯队（中关注度）**：**NanoBot**。规模较小但功能迭代速度快，社区讨论聚焦且高效。

#### 7. 有证据支撑的观察

1.  **多用户与数据隔离需求成为高频痛点**：OpenClaw、NanoBot 今日均有用户明确提出多租户或会话级数据隔离的请求。这暗示了个人 AI 助手应用场景正在从个人使用向团队协作扩展，现有“一人一Agent”或“全局记忆”的方案已经无法满足需求。
2.  **Agent 行为的可靠性和可观察性仍是核心瓶颈**：OpenClaw 今日大量 Issue 指向 Agent 的“无响应”、“空承诺”和“幽灵交互”，而 PicoClaw 也在讨论子代理结果的精细路由。这些证据共同说明，Agent 在执行复杂任务时的行为透明度和可靠性，是所有项目面临的核心难题，而非独例。
3.  **Provider 和通道的兼容性维护是持续的工程负担**：Zeroclaw、PicoClaw 和 NanoBot 日均有针对特定问题（如 reasoning 字段解析、WebSocket 媒体传输、DuckDuckGo 挂死）的修复。OpenClaw 也有类似的通道配置验证失败情况。这说明随着支持的 LLM 和 IM 渠道增多，维持兼容性和稳定性的维护成本将显著上升。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot 项目数据，我已为您生成了 2026-05-12 的项目动态日报。

---

## NanoBot 项目日报 (2026-05-12)

**报告周期：** 2026-05-11 - 2026-05-12

### 1. 今日活动概览

在过去24小时内，NanoBot 项目保持了高活跃度，共产生了10条 Issue 更新和22条 PR 更新，但**无新版本发布**。社区讨论主要集中在多用户场景下的记忆隔离（#3744）、LLM提供商集成优化（#3738、#3743）以及WebUI性能与兼容性（#3746、#3733）方面。值得注意的是，今日有6个PR被合并/关闭，体现了项目对社区反馈的快速响应。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日共有 **6 个 PR 被合并或关闭**，标志着多项功能和修复的落地：
- **[#3749] 多租户 WebUI 支持**：`hoangtuanm` 提出的 PR 已被合并，将单用户模式升级为多用户系统，支持通过邮箱和密码登录，用户状态隔离在 `~/.nanobot/users/<ulid>/` 目录下。这为WebUI的团队协作铺平了道路。
- **[#3673] WebSocket 通道媒体传输修复**：已合并的修复，解决了 WebSocket 通道在转发消息时，忽略客户端发送的图片等媒体文件的问题，确保了多模态交互的正常工作。
- **[#3733] WebUI 非安全上下文兼容性修复**：针对近期开启局域网HTTP访问导致的 `crypto.randomUUID` 未定义问题进行了修复，增强了WebUI在不同网络环境下的健壮性。
- **[#3734] 小米米莫推理模式修复**：修复了小米米莫（MiMo）API上 `reasoning_effort: null` 无法关闭推理/思考模式的问题，现已支持显式关闭。
- **[#3736] 新增美团 LongCat 提供商**：新增了对“美团 LongCat”LLM提供商的支持，默认API基地址为 `https://api.longcat.chat/openai`。
- **[#3735] `/insights` 指令提交**：`morandot` 提交了 `/insights [days|all]` 指令的实现，用于跨会话历史Token用量追踪，该PR已关闭，但尚未合并，标志着该功能已进入代码审查阶段。

### 4. 社区热点

今日最受关注的 Issue 是 **#3744: [enhancement] [团队合作]session级别MEMORY功能请求**。该 Issue 由中文用户 `IamWWT` 提出，探讨了在多IM用户共用同一Agent时，`USER.md` 和 `MEMORY.md` 的隔离机制问题。问题虽短，但其背后反映了团队协作场景中对会话数据隔离性的核心诉求。目前维护者已参与讨论，评论区有2条互动，说明该需求已引起核心团队注意。（链接：[#3744](https://github.com/HKUDS/nanobot/issues/3744)）

此外，**#3739: [bug] mcp服务未启动的情况下，启动nanobot agent报错** 也获得了维护者回应。用户报告在MCP服务未运行时启动Agent会导致启动失败，而非优雅降级，属于影响使用流程的关键问题。（链接：[#3739](https://github.com/HKUDS/nanobot/issues/3739)）

### 5. Bug 与稳定性

今日报告了 **4 个 Bug**，严重程度如下：
- **高：** [#2828] **DuckDuckGo 搜索导致系统挂死**（今日关闭）。这是一个严重问题，表现为执行DDG搜索会冻结整个系统，无法通过常规手段终止。该Issue已被关闭，意味着有解决方案被应用。（链接：[#2828](https://github.com/HKUDS/nanobot/issues/2828)）
- **高：** [#3739] **MCP 服务未启动时Agent启动报错**。用户报告Agent启动失败，缺少优雅的错误处理，影响可用性。（链接：[#3739](https://github.com/HKUDS/nanobot/issues/3739)）
- **中：** [#3746] **WebUI 代码高亮块加载过大**。WebUI在启动时预加载了超过1MB的代码高亮模块，对性能不敏感，但造成了不必要的带宽和启动时间浪费。（链接：[#3746](https://github.com/HKUDS/nanobot/issues/3746)）
- **中：** [#3737] **企业微信文件识别问题**。企业微信渠道发送的文件无法正确识别文件名，导致LLM接收到的信息为 `[file: unknown]`。（**已有修复 PR: #3751**）（链接：[#3737](https://github.com/HKUDS/nanobot/issues/3737)）
- **低：** [#3585] **小米米莫推理模式无法关闭**（今日关闭）。`reasoning_effort: null` 配置无效，已通过PR #3734修复。（链接：[#3585](https://github.com/HKUDS/nanobot/issues/3585)）

### 6. 功能请求归类

今日共有 **5 个新的功能请求**，主要集中在以下方面：
- **多用户与记忆隔离**：用户 `IamWWT` 请求开发 `session` 级别内存隔离机制，以满足团队协作场景。
- **LLM提供商弹性与切换**：用户 `futurist` 请求支持 `/model` 斜杠命令，以便在网络不稳定时动态切换模型提供商。
- **成本与用量监控**：用户 `morandot` 请求 `/insights` 命令，用于追踪历史Token用量和成本。**（相关 PR: #3735 已提交）**
- **外部搜索集成**：用户 `Colin3191` 请求支持 `provider-hosted` 的Web搜索工具（如Azure OpenAI原生搜索API），并支持本地回退。**（相关 PR: #3743 已提交）**
- **新提供商接入**：`yanalialiuk` 提交了 PR #3750，请求接入 `Atomic Chat` 作为本地LLM提供商。

### 7. 用户反馈摘要

从今日的 Issue 与 PR 评论中，可以提炼出以下用户反馈：
- **痛点：** 用户对使用 **DuckDuckGo 搜索导致系统级冻结** 表达了强烈困扰，甚至有用户不得不通过 Proxmox 强行停止进程才能解决，这属于极端恶劣的用户体验。
- **使用场景：** 有用户（`IamWWT`）正在将NanoBot应用到 **团队协作IM场景** 中，并遇到了多用户共享Agent时记忆文件被覆盖的问题。这超出个人使用的范畴，暴露了现有“一人一Agent”设计模式在公司场景下的不足。
- **批评：** 有用户批评 **WebUI的代码高亮模块加载策略**，认为其在不需要时浪费了约1MB的带宽和内存，属于过度优化或架构问题。
- **满意：** 用户（`ClearPlume`）报告的 **小米米莫推理模式问题** 在一天内得到了修复并合并，这反映了项目对Bug报告的响应速度是令人满意的。

### 8. 待处理积压

以下为长时间未获得回应或合并的 Issue/PR，建议维护者关注：
- **PR #3408: feat(mgp): opt-in MGP sidecar for governed cross-session memory**：由 `LarFii` 于4月23日提出，旨在通过 MGP 协议实现受治理的跨会话记忆。该功能对提升Agent长期记忆能力具有重要价值，但已开放近20天。（链接：[#3408](https://github.com/HKUDS/nanobot/pull/3408)）
- **PR #3621: feat: production-ready multi-role agent squad deployment for HF Spaces**：由 `DreamShepherd2006` 于5月4日提出，旨在支持在 Hugging Face Spaces 上部署多Agent小队。这是一个高度复杂且对社区部署具有指导意义的PR，但尚未获得合并。（链接：[#3621](https://github.com/HKUDS/nanobot/pull/3621)）
- **Issue #3741: Support provider-hosted web search tools with local fallback**：由 `Colin3191` 于今日提出，虽然已有相关的PR #3743，但该 Issue 本身目前无任何回应，需要项目方明确是否接受此方向。（链接：[#3741](https://github.com/HKUDS/nanobot/issues/3741)）

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-12)

---

## 1. 今日活动概览

过去24小时内，Zeroclaw 项目共处理了 **19 条 Issue**（新开/活跃 10 条，已关闭 9 条）和 **50 条 Pull Request**（待合并 30 条，已合并/关闭 20 条）。无新版本发布。主要动态集中在 CI 配置修复、文档勘误、Telegram 通道测试门控以及多个 Provider 兼容性缺陷的修复。其中 `integration/v0.8.0` 大型合并分支 (#6398) 仍在审查中。

---

## 2. 版本发布

无

---

## 3. 项目进展

今日合并/关闭的较重要 PR 及功能/修复说明：

- **[PR #6585]** `fix(update): tighten release asset selection`
  改进 `zeroclaw update` 命令的发布资产匹配逻辑，防止因缺失或空字段导致更新失败。已合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6585)

- **[PR #6568]** `fix(channels): gate telegram tests behind channel-telegram feature`
  将 Telegram 通道的两个单元测试置于 `channel-telegram` feature 门控之下，避免默认构建下测试失败。已合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6568)

- **[PR #6567]** `fix(ci): add crate paths to labeler.yml for workspace layout`
  修复 v0.7.x 工作区拆分后 labeler 自动标签失效的问题，为 `crates/` 目录添加正确的 glob 规则。已合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6567)

- **[PR #6570]** `docs(container): correct image registry and add onboarding/re-auth steps`
  修正 Docker 安装文档中镜像仓库地址，补充首次登录和重新认证步骤。已合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6570)

- **[PR #6569]** `fix(vscode): remove duplicate --all-targets from rust-analyzer extraArgs`
  移除 VSCode 配置中重复的 clippy 参数，减少构建时冲突。已合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6569)

- **[PR #6247]** `Feat/sop webhook dispatch`
  实现 SOP 标准操作程序 webhook 分发功能，扩展自动化集成能力。已合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6247)

---

## 4. 社区热点

今日讨论热度较高的 Issue 集中在 **通道兼容性** 与 **Provider 行为异常** 上：

1. **[Issue #4083]** (已关闭)
   **无法在 Telegram 通道中使用 web_search 工具**
   用户报告在 Telegram bot 对话中调用 web_search 失败，而在 agent 中正常。社区中有 5 条评论，维护者最终以“需求转移”关闭，但未留下明确的修复方案。
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4083)

2. **[Issue #6530]** (已关闭)
   **集成 matrix-sdk v0.16.0 导致递归限制溢出**
   当启用 `channel-matrix` 特性时编译失败，引发社区对依赖版本兼容性的广泛讨论。通过 [#6566](https://github.com/zeroclaw-labs/zeroclaw/pull/6566) 升级到 v0.17 后修复。
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)

3. **[Issue #6034]** (开放中，P1)
   **单轮/多轮对话丢失 user message**
   中文用户报告在自定义 API 提供者（Qwen3.5-35B）下，用户消息被静默丢弃，导致请求错误。社区持续关注，维护者已标记为“accepted”。
   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)

---

## 5. Bug 与稳定性

以下按严重程度排列今日关注的 Bug：

| 严重级别 | Issue | 描述 | 状态 | 修复 PR |
|----------|-------|------|------|---------|
| S0 - 数据丢失 | #5991 (已关闭) | cron 任务执行失败，可能导致预约/提醒等关键数据丢失 | 已关闭 | 无关联 PR |
| S1 - 工作流阻塞 | #6034 (开放中) | 用户消息丢失，多轮对话不可用 | 待修复 | 无 |
| S1 - 工作流阻塞 | #4083 (已关闭) | Telegram 通道 web_search 工具不可用 | 已关闭，未修复 | 无 |
| S2 - 降级行为 | #6589 (新开) | `RouterProvider::supports_vision()` 与 `supports_native_tools()` 逻辑不一致，导致 vision 回退静默绕过 | 待修复 | 无 |
| S2 - 降级行为 | #6584 (新开) | OpenAI 兼容 Provider 忽略 `reasoning` 字段，只读取 `reasoning_content` | 待修复 | [#6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587) (开放中) |
| S3 - 次要 | #5687 (已关闭) | VSCode rust-analyzer 插件报错 | 已关闭 | 无 |
| S3 - 次要 | #6393 (已关闭) | Docker 安装文档镜像仓库地址错误 | 已关闭 | [#6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570) |

此外，今天还修复了 Telegram TTS 在 `stream_mode=partial` 下静默失效的问题 ([PR #6588](https://github.com/zeroclaw-labs/zeroclaw/pull/6588))。

---

## 6. 功能请求归类

今日用户提出的新功能需求：

- **SearXNG 搜索支持** (Issue #5316)
  提议增加隐私优先的 SearXNG 搜索提供商，并改进 DuckDuckGo 的 CAPTCHA 检测。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)

- **ComfyUI / Comfy Cloud 作为媒体生成 Provider** (Issue #6563)
  希望将 ComfyUI 兼容后端作为一等公民集成，包括未来 `gen_video` 工具。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)

- **Telegram 工具批准按钮交互优化** (Issue #6565)
  要求点击后编辑原消息，移除按钮并显示结果状态。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6565)

- **图片消息无 vision 时的可配置行为** (Issue #6574)
  当文本 Provider 不支持 vision 且未配置 vision_provider 时，可自定义降级策略而非直接返回错误。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6574)

- **Matrix v0.7.6 发布前烟雾测试** (Issue #6576)
  要求在 `matrix-sdk` 升级后增加实时 homeserver 连通性检查。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6576)

对应或相关的开放 PR：

- **[PR #6587]** 修复 `reasoning` 字段支持，与 Issue #6584 直接关联。
- **[PR #6582]** 改进 DuckDuckGo 搜索阻拦检测，与 Issue #5316 部分重叠。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提取真实反馈：

- **“自定义 API 提供者下消息丢失”** (Issue #6034)
  用户 `@lazy-hs` 反馈：使用 Qwen3.5-35B 的 HTTP 接口时，多轮对话中部分用户消息被静默丢弃，导致最终请求出错（400 Bad Request）。该问题已持续近20天，仍未解决。

- **“Telegram 通道 web_search 无法使用”** (Issue #4083)
  用户 `@ilteoood` 抱怨：在 Telegram bot 中调用 web_search 始终失败，但在 agent 直接运行正常。该 issue 虽已关闭，但用户对方案不满意，缺乏继续跟进动力。

- **“Homebrew 合并失败，缺少 v0.7.5 版本”** (Issue #6547)
  用户 `@luckbyte` 指出 Homebrew core 的合并 PR 因缺少对应版本标签而被拒绝。维护者后续是否已处理未明确。

- **“Docker 文档错误”** (Issue #6393)
  用户 `@alkaid-ops` 指出官方文档引用了错误的镜像仓库地址，并缺少必要的初始化步骤。该问题今日通过 PR #6570 修正。

- **“cron 表格 UX 混乱”** (Issue #6504)
  用户 `@ilteoood` 描述了 cron UI 表格在失去蓝色表头后列边界不清晰，表头居中与数据左对齐不搭配，影响可读性。目前无对应修复。

---

## 8. 待处理积压

以下为长期未获足够关注的重要 Issue 或 PR：

- **[Issue #5316]** `[Feature]: Propose SearXNG search support and improve Web Search robustness`
  创建于2026-04-05，标记为 `needs-maintainer-review`，至今无维护者回复。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)

- **[Issue #6074]** `audit: track 153 commits lost in bulk revert c3ff635 for recovery`
  创建于2026-04-24，虽标记为 `in-progress`，但无后续更新。大量提交丢失的审计追踪仍未完成。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)

- **[PR #4944]** `refactor(tools): bundle wrapper migration…`
  创建于2026-03-28，标记为 `needs-author-action`，作者长时间未回应，工具层重构悬置。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/4944)

- **[PR #6183]** `fix(multimodal): normalize image markers across agent and tool history`
  创建于2026-04-28，同样标记为 `needs-author-action`，多模态图片标记规范化停滞。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6183)

- **[PR #6297]** `feat(channels): expose poll-vote / interactive-reply events`
  创建于2026-05-03，涉及 WhatsApp 通道的交互式事件暴露，已有初步讨论但未合并。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6297)

---

*数据来源：GitHub `zeroclaw-labs/zeroclaw`，采集时间 2026-05-12 24:00 UTC。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

## PicoClaw 项目动态日报 (2026-05-12)

### 1. 今日活动概览

过去24小时，PicoClaw 项目活跃度较高。共处理了 12 条 Issue 更新，其中 8 条已关闭，主要涉及旧版本 Bug 和功能请求的清理。PR 方面有 27 条更新，其中 9 条已合并或关闭，另有 18 条仍在审查中。项目发布了 `v0.2.8-nightly.20260512` 版本用于测试。社区讨论焦点集中在改进消息工具以支持媒体附件，以及为异步工具结果定义清晰的路由策略。

### 2. 版本发布

**Nightly 版本**: `v0.2.8-nightly.20260512.777269b4`
- 这是一个自动化构建的测试版本，可能不稳定。
- **变更日志**: 此版本与 `v0.2.8` 标签之间的完整变更记录可通过以下链接查看：
  [https://github.com/sipeed/picoclaw/compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

### 3. 项目进展

今日合并或关闭的 PR 展示了项目在多个方向的持续优化：

- **Telegram 渠道增强**: PR [#2758](https://github.com/sipeed/picoclaw/pull/2758) 已合并，它改进了 Telegram 渠道中媒体相册的处理方式，能够将多条媒体消息合并为一条统一信息并保留其说明文字。
- **AWS Bedrock 提供商**: PR [#2645](https://github.com/sipeed/picoclaw/pull/2645) 已合并，为 AWS Bedrock 提供商实现了流式输出支持，可以实现实时 Token 传输。
- **Slack 集成**: PR [#2719](https://github.com/sipeed/picoclaw/pull/2719) 已合并，新增了 `slack_webhook` 频道，允许通过 Webhooks 向 Slack 发送消息，并支持 Block Kit 格式和表格渲染。
- **模型配置工作流**: PR [#2831](https://github.com/sipeed/picoclaw/pull/2831) 已合并，此 PR 是改进模型配置工作流三部曲中的第一部分，为 Web API 增加了 Provider 选择和模型表单的基础功能。
- **Codex 输出修复**: PR [#2581](https://github.com/sipeed/picoclaw/pull/2581) 已合并，修复了在流式 API 响应中，ChatGPT Codex 的输出可能丢失的问题。

### 4. 社区热点

今日最活跃的讨论集中在作者 [@bogdanovich](https://github.com/bogdanovich) 提出的两个关联提案上。

1.  **`message` 工具功能扩展**: Issue [#2855](https://github.com/sipeed/picoclaw/issues/2855) 提出，当前 `message` 工具只能发送纯文本，而底层架构已支持富媒体消息。这导致 Agent 在处理包含图片和文字的复合消息时，需要拆开发送，流程笨拙。配套的 PR [#2856](https://github.com/sipeed/picoclaw/pull/2856) 已提交，旨在让 `message` 工具支持媒体附件和 Telegram 富文本交付。
2.  **子代理结果路由策略**: Issue [#2829](https://github.com/sipeed/picoclaw/issues/2829) 提出，当父 Agent 通过 `spawn` 创建子 Agent 时，子 Agent 的异步结果可能会被错误地重新注入回父 Agent，导致不必要的二次处理。PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) 试图通过引入显式的异步结果交付策略来解决此问题，允许更精细地控制结果的路由。

这两项提案均反映了社区在提升 Agent 能力复杂度和可控性方面的需求。

### 5. Bug 与稳定性

- **历史记录显示不完整** (Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796), 开放中): 用户反馈，在查看历史对话时，如果一次对话中包含多条用户消息，只会显示最后一条。用户期望看到完整的对话历史。这是一个影响体验的Bug，暂无关联的修复PR。
- **重载配置导致语音识别失效** (Issue [#2780](https://github.com/sipeed/picoclaw/issues/2780), 已关闭): 用户报告在 Docker 环境下，重新加载配置后，基于 groq-asr 的语音识别功能会失效。该 Issue 今日被关闭，但未提及具体的解决方案。
- **LLM HTTP 错误重试机制** (PR [#2768](https://github.com/sipeed/picoclaw/pull/2768), 开放中): 该PR尝试修复当LLM提供商返回HTTP 500错误时，Agent 可能直接失败而不会重试的问题。说明项目正在处理针对上游API不稳定性的应对措施。

### 6. 功能请求归类

- **工具能力增强**:
  - [Feature] Extend message tool to support media attachments (Issue [#2855](https://github.com/sipeed/picoclaw/issues/2855), PR [#2856](https://github.com/sipeed/picoclaw/pull/2856))
  - [Feature] show unified diff preview for edit_file tool (Issue [#2848](https://github.com/sipeed/picoclaw/issues/2848))
- **AI/架构优化**:
  - [Proposal] explicit async result delivery policy for spawn (Issue [#2829](https://github.com/sipeed/picoclaw/issues/2829), PR [#2830](https://github.com/sipeed/picoclaw/pull/2830))
- **渠道/集成**:
  - [Feature] Add Gemini web search provider (PR [#2763](https://github.com/sipeed/picoclaw/pull/2763), 开放中)
  - [Docs] Add Yocto/OpenEmbedded layer (PR [#2851](https://github.com/sipeed/picoclaw/pull/2851))
  - [Docs] Add LicheeRV-Claw AliExpress news (PR [#2854](https://github.com/sipeed/picoclaw/pull/2854))
- **运维/体验**:
  - [Docs] Add evolution config controls (PR [#2852](https://github.com/sipeed/picoclaw/pull/2852))
  - [feat] Improve model configuration workflows (PR [#2752](https://github.com/sipeed/picoclaw/pull/2752), [#2832](https://github.com/sipeed/picoclaw/pull/2832), [#2833](https://github.com/sipeed/picoclaw/pull/2833))

### 7. 用户反馈摘要

- **活跃贡献者**[@bogdanovich](https://github.com/bogdanovich) 在多个提案中详细描述了当前工作流的痛点，如“Agent 被迫将媒体和文本分开发送，即使渠道原生支持在一条消息中发送” (Issue [#2855](https://github.com/sipeed/picoclaw/issues/2855))，显示出用户对更精细Agent控制的强烈需求。
- 部分已关闭的旧Issue（如 [#2232](https://github.com/sipeed/picoclaw/issues/2232), [#2582](https://github.com/sipeed/picoclaw/issues/2582)）反映了用户对Web Search API的依赖性，当主流API不再免费或额度用尽时，用户期望系统能提供备用方案或自动切换。
- 用户 ([@EverestSnow](https://github.com/EverestSnow)) 反馈历史记录显示不完整的问题 (Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796))，认为“消息压缩应该是针对大模型的，对用户显示的历史消息应该完整”，这是一个清晰的期望描述。

### 8. 待处理积压

以下是一些值得关注的长期待处理事项：

- **Serp API 集成请求** (Issue [#2232](https://github.com/sipeed/picoclaw/issues/2232)): 用户于2026年3月31日提议为Web Search工具添加Serp API支持，该Issue今日被关闭，但并未在近期PR中看到明确进展。
- **Web Search YAML 配置支持** (PR [#2647](https://github.com/sipeed/picoclaw/pull/2647)): 此PR旨在为 `web_search` 配置提供YAML支持并默认启用DuckDuckGo，自4月24日起已开放，值得关注。
- **自修复Agent** (Issue [#2684](https://github.com/sipeed/picoclaw/issues/2684)): 一个关于 Android 上搜索第三方技能时发生“地址解析错误”的Bug，创建于4月27日，今日关闭，但问题是否已在最新的Nightly版本中修复未明确说明。

</details>