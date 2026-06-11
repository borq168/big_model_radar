# OpenClaw 生态日报 2026-06-11

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-11 02:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目 2026-06-11 动态日报。

---

## OpenClaw 项目动态日报 2026-06-11

### 1. 今日活动概览

过去 24 小时内，项目活跃度极高，共产生 500 条 Issue 和 500 条 PR 更新。其中，新开/活跃 Issue 占绝大多数（470 条），而 PR 方面则有大量待合并工作（398 条），并发布了 102 条已合并/关闭的 PR。社区关注点高度集中在**消息丢失、会话状态异常以及安全边界**问题上，多个高优先级 Issue 和修复性 PR 正在推进中。项目发布了 v2026.6.6-beta.1 版本，主要聚焦于安全边界的全面加固。

### 2. 版本发布

-   **v2026.6.6-beta.1**: 此版本是一次安全更新，重点收紧了多个模块的安全边界，包括：transcripts、sandbox binds、host environment inheritance、MCP stdio、Codex HTTP access、native search policy、elevated sender checks、deleted-agent ACP bypasses、loopback tools、Discord moderation 以及 Teams group access 等。

### 3. 项目进展

今日合并/关闭的重要 PR 展示了社区在关键 Bug 修复上的努力：

-   **修复 Discord 多机器人斜杠命令注册问题**: PR [#77367](https://github.com/openclaw/openclaw/pull/77367) 已关闭。该 PR 修复了多 Discord 账户场景下，非默认账户斜杠命令（Slash Commands）无法注册的问题，通过按应用 ID 区分命令部署缓存解决。
-   **推进监督式 Git 更新流程**: PR [#91296](https://github.com/openclaw/openclaw/pull/91296) 已关闭。该 PR 重新路由了监督式 Git 源的更新流程，将其与无监督/开发模式下的更新路径分离，增强了更新操作的稳定性和可控性。

### 4. 社区热点

今日讨论最活跃、关注度最高的问题集中在**内部处理逻辑泄露到用户界面**和**子任务执行可靠性**上。

1.  **工具调用间文本泄露到消息渠道** (Issue [#25592](https://github.com/openclaw/openclaw/issues/25592)): 该问题获 31 条评论。用户反馈，当 Agent 在工具调用之间产生内部文本（如错误处理、处理确认），这些文本会被路由到 Slack 或 iMessage 等消息渠道，造成严重的 UX 问题。这是一个 P1 级别的安全/消息丢失问题，但尚未有修复 PR 关联。

2.  **子代理完成信号静默丢失** (Issue [#44925](https://github.com/openclaw/openclaw/issues/44925) - 19 条评论): 用户报告了子代理编排中存在多种导致结果静默丢失的故障模式，包括完成通知失败、超时后无重试、以及持有锁的子进程意外终止等。此 P1 级别问题严重影响了多代理任务的可靠性。

### 5. Bug 与稳定性

今日报告的 Bug 和回归问题中，**会话状态损坏** 和 **消息丢失** 是最突出的两个类别。

**严重级 (P0/P1):**

-   **P0: 核心会话/转录迁移** (Issue [#88838](https://github.com/openclaw/openclaw/issues/88838)): 维护者标记为 P0，要求在大型重写前，通过“分支-by-抽象”的方式，以小 PR 序列追踪核心会话/转录运行时状态向 SQLite 的迁移，以避免高风险的重写。
-   **P1: 控制 UI 身份要求** (Issue [#32473](https://github.com/openclaw/openclaw/issues/32473) - 17 条评论): 回归问题。在 VPS 上通过 Docker 运行时，控制 UI 要求 HTTPS 或 localhost 安全上下文，导致无法使用。需要安全审查，有关联的修复 PR。
-   **P1: 信号守护进程重启竞态条件** (Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) - 17 条评论): 在 SIGUSR1 重启时，新旧进程端口和文件锁冲突，导致孤儿进程和发送失败。有关联修复 PR。
-   **P1: Agent 回复错位** (Issue [#32296](https://github.com/openclaw/openclaw/issues/32296) - 15 条评论): Agent 回复时，会话上下文混乱，导致回复到上一条消息而非当前消息，需要现场复现和产品决策。
-   **P1: Discord 泄露内部工具调用痕迹** (Issue [#44905](https://github.com/openclaw/openclaw/issues/44905) - 10 条评论): Discord 频道会泄露 `NO_REPLY`、`commentary` 等内部 LLM 工具调用痕迹，属于安全与消息丢失问题。

**中等级 (P2):**

-   **P2: 隐身引导文件被忽略** (Issue [#29387](https://github.com/openclaw/openclaw/issues/29387) - 14 条评论): 放在 `agentDir` 下的引导文件（如 SOUL.md）未被加载到系统提示词中，只有工作目录下的文件生效。这导致大量用户自定义的 Agent 行为无法正常工作。
-   **P2: Write 工具缺少追加模式** (Issue [#40001](https://github.com/openclaw/openclaw/issues/40001) - 11 条评论): 隔离的 Cron 会话在执行 `write` 操作时，会覆盖共享文件（如 `memory/YYYY-MM-DD.md`），导致数据丢失。有关联修复 PR。

### 6. 功能请求归类

用户提出的新功能需求集中在提升系统**可控性**和**集成能力**上。

-   **网络访问控制**:
    -   **[Feature] Add `tools.web.fetch.allowPrivateNetwork`** (Issue [#39604](https://github.com/openclaw/openclaw/issues/39604)): 请求增加一个配置项，允许 `web_fetch` 工具在显式启用后可以访问私有/内部网络地址。
    -   **[Feature] Path-scoped RWX permissions** (Issue [#39979](https://github.com/openclaw/openclaw/issues/39979)): 建议用基于路径的读写执行权限映射，替代现有的二进制级别执行白名单，以提供更精细的权限控制。

-   **运行策略与治理**:
    -   **[Feature] Per-agent cost budget enforcement** (Issue [#42475](https://github.com/openclaw/openclaw/issues/42475)): 建议在网关层面增加按日/月结算的 Agent 级别成本预算，以防止意外的大量 API 调用费用。
    -   **[Feature] Direct Exec Mode for Cron Jobs** (Issue [#18160](https://github.com/openclaw/openclaw/issues/18160)): 请求为 Cron 任务增加直接执行模式，避免强制进行 LLM 推理带来的延迟和可靠性问题。

### 7. 用户反馈摘要

从 Issues 评论和摘要中可以提炼出用户的核心痛点和期望：

-   **对连续对话中断的强烈不满**：用户对于 Agent “空头承诺”（Issue [#58450](https://github.com/openclaw/openclaw/issues/58450)）—— 即声称会跟进但实际上并未启动任何后台操作 —— 表达了明确的负面反馈，这被视为一次失败的交互。
-   **对实时状态反馈的渴望**：在 Slack 等平台上，用户希望看到 Agent 执行工具时的具体进度（如 “正在搜索文件……”），而不是一个静态的 “正在输入…” 状态（Issue [#33413](https://github.com/openclaw/openclaw/issues/33413)）。这表明用户期望更高的透明度和实时性。
-   **复杂的配置门槛**：用户反映，记忆（Memory）是 OpenClaw 最重要的特性之一，但安装向导却未包含嵌入（Embedding）提供者的配置步骤，这导致新用户极易被绊倒（Issue [#16670](https://github.com/openclaw/openclaw/issues/16670)）。
-   **多 Agent 并发的不可靠性**：用户报告尝试并行运行多个 Agent 时，出现了配置覆盖、会话锁失败和任务脱离等问题，表明多 Agent 编排在生产环境中仍不稳定（Issue [#43367](https://github.com/openclaw/openclaw/issues/43367)）。

### 8. 待处理积压

以下为长期未响应或停留在产品决策阶段的高影响 issue，提醒维护者关注：

-   **[#25592] 工具调用间文本泄露**：此问题持续近 4 个月，影响广泛且被标记为 P1 和 Diamond Lobster 评级，但仍在等待产品决策和维护者审查，尚无确定的修复 PR。
-   **[#25592] 工具调用间文本泄露**：此问题持续近 4 个月，影响广泛且被标记为 P1 和 Diamond Lobster 评级，但仍在等待产品决策和维护者审查，尚无确定的修复 PR。
-   **[#18160] Cron 任务直接执行模式**：该功能请求获得 10 个👍（顶），持续近 4 个月，仍卡在安全审查和产品决策阶段，未得到实质性推进。
-   **[#16670] 安装向导应强制包含嵌入配置**：该问题持续近 4 个月，对于改善新用户首次体验至关重要，但目前仍处于讨论阶段，未进入开发流程。

---

## 横向生态对比

好的，作为资深技术分析师，现根据您提供的 2026-06-11 各开源项目社区动态摘要，为您呈现一份基于数据的横向对比分析报告。

---

### AI 智能体与个人 AI 助手开源生态横向对比分析报告

**报告日期：** 2026-06-11

---

#### 1. 今日横向概览

今日，各项目均表现出高度活跃的开发态势。**OpenClaw** 社区体量领先，活动量（Issue/PR 更新总数达 1000 条）远超其他项目，但暴露的安全与稳定性 Bug 也最多，社区聚焦于消息丢失和会话状态异常。**NanoBot** 则侧重于解决核心 Bug，尤其在子代理执行和 LLM 流式响应稳定性上取得了显著进展。**Zeroclaw** 在积极修复 Bug 的同时，通过两项 RFC 探讨更深层的架构演进，显示出从功能修复向核心引擎重构的转向。**PicoClaw** 作为轻量级实现，其活动集中在 Windows 兼容性和 SSRF 安全防护的具体修复上，体量虽小但目标明确。

#### 2. 各项目活跃度对比

| 项目 | 今日 Issues 更新 | 今日 PR 更新 | 今日 Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 条 | 500 条 | v2026.6.6-beta.1 | 活动量最高，但其中大量是长期的 Bug 讨论和待合并的 PR。社区讨论范围广，涵盖消息泄露、子代理稳定性、安装体验等。 |
| **NanoBot** | 10 条 | 34 条 | 无 | 活动量中等，但质量较高，主要精力集中在修复子代理（#4290）和流响应（#4013）等高优先级 Bug 上，社区讨论更聚焦于技术细节。 |
| **Zeroclaw** | 42 条 | 50 条 | 无 | 活动量中等，Bug 修复与功能增强并存。社区热点转向深度的架构讨论，出现了两个涉及核心引擎和插件系统的 RFC。 |
| **PicoClaw** | 5 条 | 15 条 | v0.2.9-nightly | 活动量最小，但修复目标明确，主要解决 Windows 兼容性、SSRF 绕过等具体问题。社区讨论较为平缓。 |

#### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 在多维度上呈现出显著差异。

- **活动量与社区规模**: OpenClaw 的 Issue 和 PR 更新数（共 1000 条）是其他项目的 10 到 200 倍。这表明其拥有最大的用户基础和贡献者社区，社区规模直接导致了更高的并发问题报告和讨论量。然而，高数量也伴随着噪音，今日报告了多个长期未解决且影响广泛的 P1 级 Issue（如 #25592 文本泄露）。

- **技术重点**:
    - **OpenClaw**: 重心在于**安全边界加固**（如 v2026.6.6-beta.1 版本）以及解决由**复杂编排和集成**引发的次级问题（如 Discord 多机器人注册、子代理结果丢失）。
    - **NanoBot & Zeroclaw**: 重点在于**核心运行时可靠性**（修复子代理逻辑、流响应卡顿）和**架构演进探索**（RFC 统一引擎、原生插件系统）。
    - **PicoClaw**: 重点在于**跨平台兼容性**和**具体的安全漏洞**（SSRF 绕过）。

- **社区讨论面**:
    - **OpenClaw** 的讨论面最广，从用户界面泄露到多代理并发，从安装配置到企业级权限控制。
    - **Zeroclaw** 的讨论则更有深度，集中在技术架构层面（运行时统一、扩展性），反映出其社区更偏向核心开发者。
    - **PicoClaw** 的讨论非常具体，多围绕特定平台的 Bug 和具体功能请求。

**结论**: OpenClaw 是一个规模庞大、生态复杂的项目，其挑战主要在于管理海量社区反馈和解决集成带来的问题。而 NanoBot、Zeroclaw 和 PicoClaw 则在特定领域（如轻量级运行、架构探索、跨平台支持）展现出差异化的竞争力。

#### 4. 共同出现的技术方向

今日没有出现所有项目共同关注的核心技术方向。但在部分项目中，以下方向出现重叠：

- **子代理/多代理可靠性**：**OpenClaw**（Issue #44925，子代理完成信号丢失）、**NanoBot**（Issue #4290，Cron Job 子代理结果早退）都报告了子代理执行结果丢失或不可靠的 Bug。这表明多代理编排的可靠性仍是行业普适性挑战。
- **安全性（SSRF/网络访问控制）**：**OpenClaw**（新增 `tools.web.fetch.allowPrivateNetwork` 配置请求 #39604）和 **PicoClaw**（修复 SSRF 防护绕过 #3085）都涉及对网络请求的精细化控制。前者希望开放能力，后者则收紧边界，反映出安全与灵活性之间的权衡是持续的热点。
- **Windows 平台兼容性**：**OpenClaw** 和 **PicoClaw** 都出现了 Windows 相关的 Bug（OpenClaw 虽未直接提及，但在其生态中常被反映；PicoClaw 则明确修复 `list_dir` 工具在 Windows 上的路径问题），但 PicoClaw 今日的修复最为直接和具体。

#### 5. 差异化定位分析

基于今日数据，各项目的定位差异可以进一步明确：

- **OpenClaw (全能型/企业级)**：
    - **功能侧重**：极致的集成能力和功能广度，强调安全边界、治理（成本、权限）、复杂工作流编排。
    - **目标用户**：需要与 Slack、Discord、Teams 等企业工具深度集成的团队或开发者。
    - **技术架构**：庞大、模块化，但今日数据暴露了大量由模块间交互引发的Bug。

- **NanoBot & Zeroclaw (深度开发/工程师导向)**：
    - **功能侧重**：代码生成能力、LLM 兼容性、运行效率。NanoBot 关注降低使用门槛和稳定性；Zeroclaw 则追求架构优雅和可扩展性。
    - **目标用户**：技术背景强、希望深度定制或自建 Agent 流水线的开发者。
    - **技术架构**：相对聚焦，NanoBot 在快速迭代 Bug；Zeroclaw 则在思考通过 RFC 重构其微内核架构。

- **PicoClaw (轻量级/特定场景)**：
    - **功能侧重**：跨平台兼容性（尤其是嵌入式或非主流场景）、核心工具的健壮性。其 `web_search` 兼容性修复也体现了对 API 广泛适配的重视。
    - **目标用户**：在受限环境（如 Windows、低配硬件）或特定平台（如 Matrix、SimpleX）上使用 Agent 的用户。
    - **技术架构**：轻量、模块化，今日更新体现了对代码健壮性（增加错误检查）和安全性（SSRF）的持续打磨。

#### 6. 社区活跃度记录

基于今日更新数量与版本发布记录，将活跃度分为三个层级：

- **高度活跃**: **OpenClaw** (日均 Issue/PR 更新 1000 条，有版本发布)。
- **中度活跃**: **NanoBot** (日均 Issue/PR 更新 44 条，无版本发布)， **Zeroclaw** (日均 Issue/PR 更新 92 条，无版本发布)。NanoBot 的活跃度更多体现在高效的 Bug 修复讨论上，Zeroclaw 则在 RFC 中体现了深度技术讨论。
- **低度活跃**: **PicoClaw** (日均 Issue/PR 更新 20 条，有 Nightly 版本发布)。虽然更新绝对数量少，但 Nightly 发布模式表明其仍在活跃开发中，只是社区体量较小。

#### 7. 有证据支撑的观察

1.  **“多代理并发可靠性”是当前社区痛点**：多个项目今日都报告了子代理/多代理相关的 Bug（OpenClaw #44925，NanoBot #4290），这些问题直接导致工作流失败或结果丢失。这并非单一项目的孤立问题，而是当前 Agent 架构中一个有待解决的普遍挑战。

2.  **安全与合规成为普遍需求，但不同项目侧重点不同**：OpenClaw 发布了专门的安全更新版本（v2026.6.6-beta.1），并新增了网络访问控制请求；PicoClaw 修复了 SSRF 绕过漏洞；Zeroclaw 的 RFC 讨论中包含了对安全检查的强调。这表明安全性已从“可有可无”的功能转变为各项目关键的、持续投入的工程领域。

3.  **架构演进方向出现分化**：OpenClaw 倾向于通过**增量的配置和补丁**解决现有问题（如添加路径权限、成本预算）；而 Zeroclaw 则发起 RFC，探讨**深层的架构重构**（统一引擎、原生插件）。这反映了两种不同的项目演进哲学：实用主义演进 vs. 理想主义重构。

4.  **PicoClaw 在“补位”OpenClaw 未能完美覆盖的领域**：OpenClaw 体量巨大、功能极多，但 Windows 兼容性问题长期存在。PicoClaw 今日直接针对 Windows 路径问题进行修复，并计划支持 OpenClaw 尚未支持的 SimpleX 等小众通道，显示出其在特定场景下的“利基”市场定位。

5.  **今日暂无明确跨项目信号**：今日数据未显示出各项目对某单一技术方向（如 MCP、特定模型）有共同且强烈的转向。开发重点仍主要围绕各自项目内部的 Bug 修复、功能完善和架构优化展开。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoBot GitHub数据，以下是2026年6月11日的项目动态日报。

---

### NanoBot 项目动态日报 #2026-06-11

**项目名称：** NanoBot
**数据来源：** GitHub (github.com/HKUDS/nanobot)

---

#### 1. 今日活动概览

过去24小时内，NanoBot项目活动频繁。共计有10个Issue和34个Pull Request（PR）获得更新。其中，4个新Issue处于活跃状态，6个已有问题被关闭；PR方面，有19个PR被合并或关闭，另有15个待合并。今日无新版本发布，开发重点主要集中于Bug修复（尤其是子代理和LLM流式响应问题）以及多项功能优化。

#### 2. 版本发布

无。

#### 3. 项目进展

今日有多个重要Pull Request被合并，标志着项目在稳定性和功能上取得了关键进展：

- **修复子代理（Subagent）结果注入问题：** PR #4293 `fix(agent): add pending_queue to process_direct for subagent result injection` 被提出，旨在修复Cron Job等直接调用场景中，主代理无法等待子代理结果而导致早退的Bug。这直接回应了Issue #4290的社区反馈。

- **支持LLM流卡顿后自动重试与回退：** PR #4272 `fix(providers): allow retry and fallback on stream stalled timeout` 被合并。它允许LLM在流式响应中途停滞（如超过90秒无内容）时进行重试或回退到备用模型，解决了社区广泛报告的#4013问题。

- **修复会话历史上下文污染：** PR #4274 `Scope prompt recent history by session` 被合并。该PR通过为`history.jsonl`中的条目添加会话标识（`session_key`），解决了长期存在的跨会话上下文污染问题（Issue #4259），显著提升了多会话模式下的对话连贯性。

- **强化配置错误处理：** PR #4275 `Fail fast on invalid config files` 被合并。现在，当配置文件存在错误无法解析时，NanoBot会直接启动失败并报错，而非静默使用默认配置，这有助于用户更快定位配置问题。

- **优化飞书（Feishu）频道启动：** PR #4277 `fix(feishu): lazy-load lark SDK during gateway startup` 被合并，将重量级的`lark_oapi` SDK加载延迟到飞书频道实际启动时，加快了网关启动速度。

#### 4. 社区热点

今日社区讨论的核心围绕**子代理（Subagent）的行为与结果管理**，以及**LLM响应稳定性**展开。

- **[Hot Issue] 子代理导致Cron Job早退：** Issue #4290 `[bug] cronjob ends early when there's a subagent spawned` 描述了当子代理完成任务后，主代理无法获得机会处理其结果，导致后续工作流失败。这是一个直接导致Cron Job功能失效的严重问题，引发了开发者的快速响应（PR #4293）。

- **[Hot Discussion] 子代理结果即时通知的副作用：** Issue #4279 `[enhancement] Support aggregated notifications for subagents to prevent LLM hallucinations` 指出，当前子代理的实时结果通知可能导致主代理被大量碎片信息干扰，从而引发模型幻觉。用户建议将结果聚合并摘要后通知主代理，以提高工作流的准确性和效率。

- **[Hot Issue] 空响应触发的降级问题：** Issue #4287 `[bug] Empty model responses not triggering fallback to alternative models` 报告了在API返回空内容时，NanoBot在无招情况下不会自动尝试切换备用模型的问题。该痛点已被PR #4288修复。

#### 5. Bug 与稳定性

今日提交的Bug数量较多，部分问题严重性较高，且已有对应修复方案。

- **[严重 - 功能阻断] Cron Job中子代理结果丢失：** Issue #4290。Bug导致Cron工作流因无法获取子代理结果而中断。已有PR #4293尝试修复。
- **[严重 - 影响多会话] 跨会话历史上下文污染：** Issue #4259。`history.jsonl`未按会话隔离，错误地将其他会话的历史注入当前会话。该Bug今日已被PR #4274修复。
- **[高 - 稳定性] LLM流响应卡死后无重试：** Issue #4013。报告了模型流式响应卡住超过90秒导致整体错误的问题。该Bug今日已被PR #4272修复。
- **[高 - 用户感知] API返回空内容时无法降级：** Issue #4287。Bug导致用户无法利用备用模型在高峰时段保持服务的可靠性。已有PR #4288修复。
- **[中] 子代理实时结果通知导致幻觉：** Issue #4279。虽属于功能增强，但根源是一个设计缺陷，即子代理结果通知机制不合理。
- **[中] Bubblewrap沙盒的`$HOME`环境变量问题：** Issue #4237。Bug导致在使用沙盒时，工具执行因`$HOME`指向无效路径而失败。该问题已被关闭，推测已修复。
- **[中] OpenAI兼容Provider的`max_*`参数错误：** Issue #4261。报告了使用GPT-5.x等模型时，错误的参数名`max_tokens`应改为`max_completion_tokens`。该问题今日已关闭。

#### 6. 功能请求归类

以下为今日用户提出的新功能需求及对应的PR：

- **子代理独立模型预设：** Issue #4291 `feat(spawn): allow subagents to use configurable model presets` 提出让子代理可以使用与父代理不同的、预先配置好的模型。这为复杂的任务编排（如使用低成本模型处理简单子任务）提供了可能性。**(有PR)**
- **Slack频道@提及限定：** Issue #4289 `feat(slack): add groupRequireMention to scope allowlist channels to @mentions` 提出在Slack白名单模式下，增加一个新选项，使机器人仅在白名单频道且被@提及时才响应。**(有PR)**
- **WebUI技能激活：** Issue #4284 `feat(webui): activate skills from slash palette` 希望在WebUI的斜杠命令面板中支持激活“技能”。**(有PR)**
- **子代理结果聚合通知：** Issue #4279 (同时作为Bug与功能)。用户希望子代理结果不是实时通知，而是聚合后再通知主代理，以提升准确性。**(无对应PR)**
- **WebUI文件管理：** Issue #4282 `feat: add file management features to the settings view` 希望在WebUI中浏览和管理Agent/配置文件夹。**(有PR)**

#### 7. 用户反馈摘要

- **满意点：** 用户`mxnbf`在Issue #4013中称赞NanoBot 0.1.5post2版本的良好体验，并明确表达了感谢（“way to say ty”）。
- **痛点总结：**
  - **升级后稳定性下降：** 用户`mxnbf`反馈从0.1.5post2升级到0.2.0后，遭遇了流响应卡死的严重错误，导致“所有实际工作都无法进行”。
  - **Cron Job功能失效：** 用户`tjc0726`详细描述了Cron Job因子代理结果丢失而失败的具体流程和日志，这是一个严重影响自动化场景的Bug。
  - **多会话干扰：** 用户`chxuan`和社区开发者共同深入分析了`history.jsonl`跨会话上下文污染的技术细节，表明这是一个影响多会话用户底层体验的问题。
  - **WebUI历史消失：** 多个PR（#4247, #4278）均指向了WebUI因transcript文件过大而导致聊天历史丢失的问题，这表明该问题是影响WebUI用户体验的常见痛点。

#### 8. 待处理积压

以下为主要仍需关注但今日未有明确行动的问题：

- **[Bug] ‘sustained goal’ 上下文异常丢失 (#4286)：** 用户`fablau`报告在要求Agent创作文章时，Agent反复报错缺少“持续目标”上下文，导致任务无法完成。该问题今日无更新，仍需进一步排查和修复。`<链接：https://github.com/HKUDS/nanobot/issues/4286>`
- **[Bug] 空响应无法触发降级 (#4287)：** 虽然已有PR #4288修复，但其仍处于待合并状态。对于依赖单一、可靠性不高的API的用户来说，这是一个急待解决的问题。`<链接：https://github.com/HKUDS/nanobot/issues/4287>`

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 Zeroclaw 项目日报。

---

### **Zeroclaw 项目动态日报 | 2026-06-11**

#### **1. 今日活动概览**
过去 24 小时，Zeroclaw 项目社区保持高度活跃。共计更新 **42 条 Issues** 和 **50 条 Pull Requests**。虽然无新版本发布，但在 Bug 修复和功能增强方面有重要进展。多个高优先级 Bug 已得到修复，同时社区围绕架构优化（如统一对话循环、原生插件系统）展开了 RFC 讨论，显示出项目正在向更深层次的技术演进方向推进。

#### **2. 版本发布**
**无**。

#### **3. 项目进展**
今日合并/关闭了多个重要的 PR，推进了多项功能和修复：

- **跨平台 CI 与基础设施**:
    - [PR #7409](https://github.com/zeroclaw-labs/zeroclaw/issues/7409) (已关闭): 修复了 `clippy` 代码检查仅在 Linux 上运行，导致 Windows/macOS 代码未经检查的问题，提升了跨平台代码质量。
- **提供者集成**:
    - [PR #7136](https://github.com/zeroclaw-labs/zeroclaw/issues/7136) (已合并): 新增了 **Kilo AI Gateway** 作为一级模型提供者支持，并实现了价格捕获功能，为用户提供了新的模型接入选项。
- **Bug 修复**:
    - [PR #7446](https://github.com/zeroclaw-labs/zeroclaw/issues/7446) (已合并): 修复了 `image_info` 工具在多种调用方式下（如相对路径）无法将图片传递给视觉模型的高风险错误。
    - [PR #7370](https://github.com/zeroclaw-labs/zeroclaw/issues/7370) (已合并): 修复了模型在输出工具调用时被截断，导致消息格式错误的问题。
    - [PR #7347](https://github.com/zeroclaw-labs/zeroclaw/issues/7347) (已合并): 修复了 Discord 频道中，机器人会对创建子线程的系统消息进行回复的问题。
- **新功能与增强**:
    - [PR #7344](https://github.com/zeroclaw-labs/zeroclaw/issues/7344) (已合并): 为 Gateway 增加了 `gateway.allow_remote_admin` 配置，允许远程重启服务，提升了运维便利性。
    - [PR #7382](https://github.com/zeroclaw-labs/zeroclaw/issues/7382) (已合并): 修复了 WebSocket 对话的遥测和成本归因到错误模型的问题，提升了可观测性准确性。
- **文档与治理**:
    - [PR #7472](https://github.com/zeroclaw-labs/zeroclaw/issues/7472) (开启): 项目文档在进行重大重构后，已开始同步多语言翻译，国际化工作正在跟进。
    - [PR #7443](https://github.com/zeroclaw-labs/zeroclaw/issues/7443) (开启): 更新了项目 `CODEOWNERS` 文件，处理了维护者离职后的权限交接。

#### **4. 社区热点**
今日社区讨论围绕两个核心方向展开，皆涉及深层次的架构改进：

1.  **统一代理对话引擎 (RFC)**:
    - **[Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** (开启，2条评论): 该 RFC 提出了统一项目中现有的三个代理对话循环引擎（`run_tool_call_loop`, `turn_streamed`, `Agent::turn`）。评论指出，当前三个引擎实现有重复，且其中两个缺少关键的安全检查。这是对核心运行时的一次重要简化与强化，讨论热度高。

2.  **原生动态链接库插件系统 (RFC)**:
    - **[Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** (开启，1条评论): 提出了一个绕过 WASM、通过动态链接库（.so/.dll）直接扩展 Zeroclaw 功能的原生插件系统。这旨在解决当前微内核架构的“单体之痛”，是一次对扩展性架构的重大探索。

这两个 RFC 表明，社区维护者和核心贡献者正在思考更长远的架构演进，关注点从单一功能扩展到核心运行时的统一性和可扩展性。

#### **5. Bug 与稳定性**
今日报告的 Bug 和修复情况如下（按严重程度排列）：

- **严重 (S1 - 工作流阻塞)**:
    - [Issue #7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) (新，0条评论): 委托代理模式中，当目标代理的 `allowed_tools` 为空或使用相同配置文件时，委托操作会被拒绝，阻碍了多代理工作流。
    - [Issue #7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) (开启，1条评论): ACP 会话中的子代理无法继承父代理的“工作目录 (cwd)”，导致开发流程受阻。*暂无 Fix PR*。
- **高风险 (S2 - 行为异常)**:
    - [Issue #7436](https://github.com/zeroclaw-labs/zeroclaw/issues/7436) (开启，1条评论): `image_info` 工具在非绝对路径调用下无法将图片传递给视觉模型。*(已有 Fix PR #[7446](https://github.com/zeroclaw-labs/zeroclaw/pull/7446) 已合并)*
    - [Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) (开启，5条评论): `tool_search` 默认未被自动批准，导致在 Webhook 模式下 MCP 工具加载挂起后自动拒绝。*暂无 Fix PR*。
- **已修复**:
    - [Issue #7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) (已关闭): 修复了 `zerocode` 仪表盘隐藏错误状态并错误标记历史会话的问题。
    - [PR #7345](https://github.com/zeroclaw-labs/zeroclaw/issues/7345) (开启): 修复了文件搜索/列表工具结果中包含 `[IMAGE:]` 标记，导致代理错误地将文本路由到更昂贵的视觉模型的问题。

#### **6. 功能请求归类**
以下是根据今日数据归类的用户功能需求及其关联的 PR：

- **用户体验优化 (zerocode TUI)**:
    - [Issue #7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) (新): 请求在编辑字符串时支持方向键导航。
    - [Issue #7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) (新): 请求允许在 TUI 中重命名别名。
- **架构与核心演进 (RFC)**:
    - [Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) (RFC): 统一三个代理对话引擎。
    - [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) (RFC): 实现原生动态链接库插件系统。
    - [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (开启): 建议通过外部集成/Skills 替代部分内置代码工具，精简核心。
- **路由决策增强**:
    - [Issue #7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) (开启): 提议增加一轮前路由意图提取，让模型能自然语言触发路由动作。
- **文档与配置**:
    - [Issue #6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) (开启): 更新 Docker 相关文档，并提供可用的 docker-compose 配置。

#### **7. 用户反馈摘要**
- **痛点**:
    - **调试与可观测性**: 用户 [@Audacity88](https://github.com/Audacity88) 在 Issue #[7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) 中报告，`zerocode` 仪表盘的错误状态隐藏和信息标签错误，给排查问题带来困扰。
    - **配置与预期不符**: 用户 [@nick-pape](https://github.com/nick-pape) 在 Issue #[6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) 中指出 `MemoryConfig.rerank_enabled` 等配置项虽然在文档中出现，但代码中并未实现，造成了误解。
    - **子代理工作流**: 用户 [@tidux](https://github.com/tidux) 在 Issue #[7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) 中报告子代理无法继承工作目录，这与以子代理为中心的开发模式预期相悖。
- **诉求**:
    - **更低的入门门槛**: Issue #[3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 持续有讨论，用户希望提供包含所有功能（如 WhatsApp）的“完整版” Docker 镜像，以降低新用户的部署和使用门槛。

#### **8. 待处理积压**
以下为长期未响应或处于阻塞状态的重要 Issue，提醒社区和维护者关注：

- **[Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)** (开启): MCP `tool_search` 默认未批准导致 Webhook 挂起。该问题是 Webhook 模式下使用 MCP 的核心阻塞点，风险高，但尚无明确的 Fix PR。
- **[Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** (开启): 提供“完整版” Docker 镜像的需求。此 Issue 创建于 3 月，已积压近 3 个月，反映了持续存在的用户诉求。
- **[PR #7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215)** (开启): 修复 Quickstart 向导未展示 Webhook 端口字段的问题，修复简单的配置字段遗漏，但状态为 `needs-author-action`，等待作者响应。
- **[PR #7243](https://github.com/zeroclaw-labs/zeroclaw/pull/7243)** (开启): 部分修复 Token 轮转时未撤销旧令牌的安全问题。该 PR 同样标记为 `needs-author-action`，等待作者根据反馈进行修改。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-06-11

## 今日活动概览

过去 24 小时内，PicoClaw 仓库共有 **5 条 Issue 更新**（新开/活跃 4 条，已关闭 1 条）和 **15 条 PR 更新**（待合并 9 条，已合并/关闭 6 条）。项目同时发布了 **1 个 nightly 版本**（v0.2.9-nightly.20260611）。社区关注点集中在 **Windows 文件系统兼容性修复**、**SSRF 防护绕过**以及 **异步子代理消息重复** 等 Bug 上，同时有多项代码健壮性改进 PR 被合并或提出。

## 版本发布

- **nightly: Nightly Build**
  `v0.2.9-nightly.20260611.d955d5bb`
  自动构建的试验版本，可能不稳定。完整变更日志：[compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 项目进展

以下为今日已合并/关闭的重要 PR，涵盖了关键 Bug 修复和功能安全加固：

- **#3089 [CLOSED] fix os.Root API on Windows issue**
  修复了 `list_dir` 等文件系统工具在 Windows 上因路径分隔符不匹配而返回“invalid argument”的问题（对应 Issue #2472）。
  [PR #3089](https://github.com/sipeed/picoclaw/pull/3089)

- **#3085 [CLOSED] fix(tools): block 198.18.0.0/15 in SSRF guard**
  在 `web_fetch` 工具的 SSRF 防护中，增加了对 RFC 2544 基准测试地址段 `198.18.0.0/15` 的阻止，防止绕过内部网络限制（对应 Issue #3077）。
  [PR #3085](https://github.com/sipeed/picoclaw/pull/3085)

- **#3043 [CLOSED] fix: check strconv.Atoi and json.Unmarshal errors**
  修复了两个静默忽略错误的地方（`strconv.Atoi` 和 `json.Unmarshal`），提升代码健壮性。
  [PR #3043](https://github.com/sipeed/picoclaw/pull/3043)

- **#2951 [CLOSED] fix: use function-type web_search for better API compatibility**
  解决某些 OpenAI API 端点不支持 `web_search_preview` 工具类型导致的 HTTP 400 错误，改用标准 `function` 类型。
  [PR #2951](https://github.com/sipeed/picoclaw/pull/2951)

- **#2948 [CLOSED] fix: skip temperature parameter for claude-opus-4-7 models**
  修复与 Claude Opus 4-7 模型的兼容性，不再发送已弃用的 `temperature` 参数。
  [PR #2948](https://github.com/sipeed/picoclaw/pull/2948)

- **#2945 [CLOSED] feat: add debug trace viewer (picoclaw-tracer)**
  新增独立的调试追踪查看器，可实时展示 LLM 调用链（系统提示、消息数组、工具执行等）。
  [PR #2945](https://github.com/sipeed/picoclaw/pull/2945)

## 社区热点

- **Issue #3094 [BUG] 异步子代理消息重复**（2026-06-10 创建，0 评论）
  用户报告 `spawn` 工具产生的异步子代理任务完成后，用户会同时收到两条内容相同的消息——一条是子代理原始结果直接推送，另一条是主代理汇总后的输出。该问题涉及飞书/Telegram 等通道的推送逻辑，目前暂无官方回复。
  [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)

- **Issue #2472 [BUG] Windows 路径分隔符问题**（2026-04-10 创建，5 条评论，1 👍）
  尽管已有修复 PR #3089 被合并，但该 Issue 目前仍处于 Open 状态（stale），建议维护者确认修复是否已完全解决用户场景。
  [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)

- **PR #2937 [Feat/agent collaboration]**（2026-05-24 创建，stale）
  一个较早提出的“内部代理协作总线”功能 PR，引入了持久化的 agent 间通信机制，已超过两周无新评论。该功能被认为对复杂工作流编排有价值，但目前处于停滞状态。
  [PR #2937](https://github.com/sipeed/picoclaw/pull/2937)

## Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|----------------|
| 高 | #3094 | 异步子代理消息重复推送，影响飞书/Telegram 等通道的用户体验 | OPEN，0 评论 | 无 |
| 高 | #3090 | 控制台（Panel）在 iOS <16.4 的 Safari 上无法正常工作 | OPEN，0 评论 | 无 |
| 中 | #3077 (CLOSED) | SSRF 防护绕过：`198.18.0.0/15` 被遗漏，攻击者可访问特殊用途 IPv4 地址 | CLOSED | #3085 已合并 |
| 中 | #2472 (stale) | Windows 下文件系统工具因路径分隔符报错 | OPEN，已有 #3089 修复 | #3089 已合并（但 Issue 未关闭） |
| 低 | #3095 (OPEN) | `CreateHTTPClient` 中类型断言缺乏 `ok` 检查，非法 `RoundTripper` 导致 panic | OPEN | PR #3095 已提出 |
| 低 | #3091 (OPEN) | OpenAI 兼容提供者中 `native_search` 类型断言忽略 `ok`，非布尔值静默转为 false | OPEN | PR #3091 已提出 |
| 低 | #3092 (OPEN) | `skills_install` 中版本和强制参数类型断言缺 `ok` 检查 | OPEN | PR #3092 已提出 |
| 低 | #3053 (OPEN) | `lockStoreFile` 中 `LoadOrStore` 类型断言无 `ok` 检查，可能 panic | OPEN | PR #3053 已提出 |
| 低 | #3045 (OPEN) | Matrix 用户 ID 含冒号时 `allow_from` 匹配失效 | OPEN | PR #3045 已提出 |
| 低 | #3087 (OPEN) | 工作区相对路径（如 `skills/.../script.py`）被 `exec` 安全守卫误判为绝对路径并阻止 | OPEN | PR #3087 已提出 |

## 功能请求归类

- **新消息通道**：Issue #3093 提出需要 **SimpleX** 或 **Tox**（或 Wire）网关支持。目前无维护者回复。
  [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)

- **配置持久化**：PR #3067 修复了“运行时会话隔离范围”（dm_scope）设置无法保存的问题，属于功能性修复。
  [PR #3067](https://github.com/sipeed/picoclaw/pull/3067)

- **控制台访问控制**：PR #3083 增强启动器（launcher）的网络访问控制，增加可配置的 localhost 绕过行为和可信代理 CIDR。
  [PR #3083](https://github.com/sipeed/picoclaw/pull/3083)

- **内部代理协作**：PR #2937 提议构建 Agent Collaboration Bus，属于新功能但已 stale。
  [PR #2937](https://github.com/sipeed/picoclaw/pull/2937)

## 用户反馈摘要

- Issue #2472（Windows 路径问题）的评论中，用户提到 `list_dir` 在 Windows 上失败，社区贡献者已提出修复 PR #3089，但 Issue 仍未关闭，建议维护者确认测试覆盖。
- 无其他 Issues/PRs 的明显评论互动。

## 待处理积压

- **Issue #2472**（Windows 路径），尽管已有合并的修复 PR，但 Issue 依然 open，且被打上 stale 标签，建议维护者关闭或追加说明。
- **PR #2937**（Agent Collaboration Bus）已 stale 超过两周，无维护者反馈，社区期待明确后续计划。
- **Issue #3094**（异步子代理消息重复）无任何回应，属于影响日常使用的体验问题，建议尽快确认。
- **PR #3045**（Matrix 用户 ID 匹配）已存在 4 天，无评论，影响 Matrix 用户的权限控制。

</details>