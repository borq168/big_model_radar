# OpenClaw 生态日报 2026-05-26

> Issues: 471 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-26 02:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-05-26

## 1. 今日活动概览

过去 24 小时（2026-05-25 → 2026-05-26），OpenClaw 项目共处理 **471 条 Issue 更新**（新开/活跃 188，关闭 283）和 **500 条 PR 更新**（待合并 273，已合并/关闭 227）。无新版本发布。社区讨论集中在子代理通信可靠性、doctor 破坏性迁移、以及多通道消息静默丢失等 P1 级 Bug；多个修复 PR 已提交或进入维护者审查阶段。内部代码库的两个大型重构 PR（SQLite 运行时迁移、Pi 运行时内化）仍处于开放且需要进一步证明的状态。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

以下为今日已合并/关闭的重要 PR（基于 PR 列表中标记为 CLOSED 且具有实质性修复的条目）：

- **#70112 – fix(agents): use CJK-aware token estimation in compaction path**
  编译路径改用 CJK 感知的 token 估算器，解决中、日、韩文内容因 token 严重低估导致编译延迟、上下文超出限制的问题。由 @MoerAI 提交，已合并。
  https://github.com/openclaw/openclaw/pull/70112

- **#86697 – fix(whatsapp): restore ack emoji identity fallback**
  修复 WhatsApp 确认表情（ackReaction）的配置回退逻辑，使仅含 `direct/group` 字段的配置能正确使用默认 emoji。已合并。
  https://github.com/openclaw/openclaw/pull/86697

- **#86720 – Fix iMessage group media delivery**
  修复 iMessage 群组中只发送图片/附件时无法送达的问题，将媒体发送路由改为 `imsg send-attachment --transport auto`。已合并。
  https://github.com/openclaw/openclaw/pull/86720

- **#86288 – Clarify AGENTS.md review policy for config/default additions**
  文档更新，明确 ClawSweeper 审查策略中应将配置/默认值的新增或修改作为审查指标和合并风险项。已关闭。
  https://github.com/openclaw/openclaw/pull/86288

- **#85048 – Manifest-id mismatch warning fires for ~30+ built-in plugins**
  修复内置插件在启动时因 `entry hint` 与 `id` 字段不匹配引发的警告（非阻塞性）。已关闭。
  https://github.com/openclaw/openclaw/pull/85048

- **#84945 – LLM idle timeout error silently dropped when agentRunStarted is true**
  修复 LLM 空闲超时错误在 agent 已启动后不会广播给客户端的问题，用户不再看到静默截断。已关闭。
  https://github.com/openclaw/openclaw/pull/84945

此外，大型重构 PR **#81402**（SQLite 运行时迁移）和 **#85341**（Pi 运行时内化）仍处于开放状态，需要更多实际行为证明（status: 📣 needs proof）。

## 4. 社区热点

以下为今日评论数最多的 Issue，背后需求集中于**子代理通信可靠性、配置安全、信道消息丢失**：

| Issue | 标题 | 评论数 | 核心诉求 |
|-------|------|--------|---------|
| #80319 | QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity | 17 | 澄清 QA 测试套件将 Codex 原生工具与 OpenClaw 动态工具集混淆，导致误报工具丢失；要求区分测试逻辑。 |
| #44925 | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout | 17 | 子代理完成通知静默丢失，无重试和自动重启机制；涉及 Telegram 论坛模式的多模式失败。 |
| #84038 | doctor --fix silently migrates openai-codex/ config to openai/, breaking PI+OAuth runtime | 12 | `doctor --fix` 将用户显式配置的 `openai-codex/` 条目迁移为 `openai/`，导致 OAuth 运行时故障和 token 用量膨胀 3-4倍。 |
| #18160 | Feature: Direct Exec Mode for Cron Jobs | 12 | 标书：Cron 作业强制走 `agentTurn` 导致 LLM 调用延迟和可靠性下降，请求直执行模式跳过 LLM。 |
| #80520 | Telegram messages silently dropped, no sendMessage logged | 11 | Telegram 消息被网关接收但未调用 sendMessage API，用户收不到回复，频繁发生。 |

链接：
https://github.com/openclaw/openclaw/issues/80319
https://github.com/openclaw/openclaw/issues/44925
https://github.com/openclaw/openclaw/issues/84038
https://github.com/openclaw/openclaw/issues/18160
https://github.com/openclaw/openclaw/issues/80520

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在 **会话状态丢失、启动阻塞、文件描述符泄漏、跨用户隐私泄漏** 等方面，按严重程度排列如下：

### P1 / P0 级 Bug（已有 fix PR 或正在审查）

| Issue | 标题 | 是否已有关联 PR | 状态 |
|-------|------|----------------|------|
| #85240 | [P0 Security] relevant-memories: Cross-user privacy leakage via semantic recall without sender_id isolation | 已有关联 PR（#? 未在列表中显示） | 需安全审查 |
| #84038 | doctor --fix silently migrates openai-codex/ config, breaking PI+OAuth | 未提及具体 PR，但已触发维护者讨论 | 开放中 |
| #86613 | Gateway accumulates >12K read-only FDs on workspace memory/**; correlated with memory_search | PR #86701（fix(memory-core): avoid per-file watcher FD fan-out） | 已提交PR，等待实际行为验证 |
| #85913 | EmbeddedAttemptSessionTakeoverError races between heartbeat lane and channel/direct lane | 多个相关 Issue（如 #85306），暂无专门 fix PR | 开放中 |
| #86599 | Local model provider calls thread block gateway event loop on Windows beta | 无专门 PR，但已被标记为 Beta release blocker | 开放中 |
| #85999 | 2026.5.22 gateway pre-warm blocks event loop ~60s on startup | 已关闭（#85999 CLOSED），可能已有修复 | 已关闭 |
| #86201 | 2026.5.22 slow responses / high CPU on WSL2 after upgrade | 已关闭，需关注是否在后续版本修复 | 已关闭 |

### P2 级 Bug（影响较小或需更多信息）

| Issue | 标题 | 状态 |
|-------|------|------|
| #85015 | Skills config wizard does not list eligible skills when no requirements missing | 开放，需维护者决策 |
| #83184 | Heartbeat-driven agent replies leave pendingFinalDelivery stuck | 开放 |
| #85669 | sessions_history returns unfiltered delivery-mirror messages — duplicates | 开放，队列修复中 |
| #60858 | Three hasRealConversationContent guards silently block compaction | 开放 |
| #85953 | sessions_yield can leave parent session transcript lock held | 开放 |

需要特别关注的安全 Bug：
- #85240（P0 跨用户记忆泄漏）虽已有关联 PR，但尚未合并，需要安全审查。

## 6. 功能请求归类

今日用户提出的新功能需求（包括 Issue 和 PR 中的功能添加）：

| 类型 | 标题 | 关联 PR/Issue | 备注 |
|------|------|---------------|------|
| 功能 | Direct Exec Mode for Cron Jobs（跳过 LLM 直执行） | Issue #18160 | 已存在 12 条评论，P2，长期开放 |
| 功能 | `announceTarget` option for sub-agent completion announce routing | Issue #27445 | 为子代理完成通知提供路由选项，P2 |
| 功能 | Cursored SQLite transcript read API for companion consumers | Issue #79904 | P2，已有相关重构 PR #78595 |
| 功能 | Expose durable session lineage and sessionId discovery | Issue #79903 | P2 |
| 功能 | Add Xiaomi MiMo Token Plan provider support | Issue #86169 | P2，来自社区请求 |
| 功能 | Configurable lane wait diagnostic threshold | Issue #14747 | 已存在 PR #86676（feat: configurable diagnostics.laneWaitWarnMs） |
| 功能 | Channel Broker Phase 4 constrained provider capabilities | PR #86165 | 大型 PR，整合多通道维护 |
| 功能 | Scoped mention pattern policy | PR #70864 | 开放中，需要实际行为证明 |
| 功能 | Structured provider error descriptors | PR #86642 | 已证明充分，等待维护者审查 |

## 7. 用户反馈摘要

从今日 Issues 和 PR 评论中提炼的真实用户痛点：

- **子代理静默完成丢失** (#44925)：用户 `@IIIyban` 报告子代理任务在三种模式（E31, E42, E45）下结果静默丢失，无重试、无通知、无自动重启。
  “Telegram 论坛模式下，子代理完成公告失败后没有任何错误提示，用户完全不知道任务已结束。”

- **doctor --fix 破坏 OAuth 运行时** (#84038)：用户 `@danielsan1` 发现 `doctor --fix` 将 `openai-codex/` 配置迁移为 `openai/`，导致 PI+OAuth 授权流程断裂，token 用量膨胀 3-4倍。
  “这是已知上游问题，但 doctor 不应该把用户的显式配置改掉。”

- **Telegram 消息静默丢失** (#80520)：用户 `@kyle20026` 提供了详细的时间线和日志，2026-05-11 当天多次出现消息被网关接收但未调用 sendMessage API，用户无任何回复。

- **Windows Beta 本地模型阻塞事件循环** (#86599)：用户 `@JakeBiggs` 报告在 Windows 2026.5.24-beta.1 上，简单的 `hi, how are you` 推理需要使用近 4 分钟，事件循环被线程阻塞。

- **FD 泄漏导致网关崩溃** (#86613)：用户 `@lukeboyett` 提供了确定性复现方法：对含有数千 `.md` 文件的 workspace 调用 `memory_search` 工具，每个文件打开一个 FD 且从不释放（~12,400个 FD 在捕获中观察到）。

- **跨用户记忆泄漏** (#85240)：用户 `@slysfly` 发现 `relevant-memories` 在检索记忆时未按 `sender_id` 过滤，导致用户 A 的私有记忆被注入用户 B 的对话上下文。安全级别标为 P0。

## 8. 待处理积压

以下为长期未响应或仍处于开放状态的**重要 Issue/PR**，提醒维护者关注：

| 序号 | 编号 | 标题 | 创建时间 | 最后更新 | 备注 |
|------|------|------|----------|----------|------|
| 1 | #18160 | Feature: Direct Exec Mode for Cron Jobs | 2026-02-16 | 2026-05-25 | P2，12条评论，已分配 clawsweeper 标签但未进入审查 |
| 2 | #27445 | Feature: `announceTarget` for sub-agent completion | 2026-02-26 | 2026-05-25 | P2，10条评论，需要维护者决策 |
| 3 | #44925 | Subagent completion silently lost | 2026-03-13 | 2026-05-25 | P1 diamond lobster，17条评论，尚无 fix PR |
| 4 | #60858 | Three guards block compaction silently | 2026-04-04 | 2026-05-25 | P1 diamond lobster，需要维护者审查 |
| 5 | #79904/79903/79905 | SQLite 运行时系列功能请求 | 2026-05-09 | 2026-05-25 | P2，已有重构 PR #78595，但功能未落地 |
| 6 | #85240 | [P0 Security] 跨用户记忆泄漏 | 2026-05-22 | 2026-05-25 | 安全关键，需加快审查 |
| 7 | #86613 | Gateway FD 泄漏（memory_search） | 2026-05-25 | 2026-05-26 | 已有 PR #86701，需尽快验证合并 |
| 8 | #86599 | Windows Beta 事件循环阻塞 | 2026-05-25 | 2026-05-26 | Beta release blocker，无专门 PR |

以上积压项目中，#85240 和 #86613 因直接影响系统安全与稳定性，建议优先处理。

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的 2026-05-26 各项目动态数据，生成一份横向对比分析报告。

---

### AI 智能体开源项目横向对比分析日报 | 2026-05-26

#### 1. 今日横向概览

今日，四大个人 AI 助手开源项目均保持高度活跃。**OpenClaw** 社区规模与活动量最大，焦点集中在子代理通信可靠性、配置安全与信道消息丢失等 P1/P0 级高优 Bug 修复上。**NanoBot** 和 **Zeroclaw** 社区活动量相当，但技术侧重点不同：前者主攻模型兼容性与工具调用的健壮性，后者则聚焦于 DeepSeek-V4 兼容性、底层安全沙箱与架构解耦。**PicoClaw** 作为体量较小的项目，其讨论集中在路径安全误报、PID 检查 bug 以及默认配置的首次体验问题上。所有项目均未发布正式版本，但 PicoClaw 有 Nightly 构建。

#### 2. 各项目活跃度对比

| 指标 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **Issue 更新** | 471 | 5 | 28 | 10 |
| - 新开/活跃 | 188 | 2(新增) | - | 9 |
| - 已关闭 | 283 | 3 | 7 | 1 |
| **PR 更新** | 500 | 117 | 50 | 8 |
| - 待合并/打开 | 273 | 108 | ~50(全开放) | 8 |
| - 已合并/关闭 | 227 | 9 | 15 | 0 |
| **版本发布** | 无 | 无 | 无 | v0.2.9-nightly |
| **事实性备注** | 项目规模最大，社区讨论核心问题，多个高优 Bug 有对应修复。 | 大量 PR 待合并，合并率低，有多个新协议/架构提案。 | 多个高优 Bug 和功能 PR 正在审查，社区热点集中在模型兼容性。 | 项目体量最小，无合并行为，但有多项修复 PR 待评审。 |

#### 3. OpenClaw 与同类对照

- **活动量与范围**：**OpenClaw** 的 Issue 和 PR 数量远超其他项目，反映出其社区规模、用户基数和维护者工作负载均为最大。其讨论覆盖了从子代理通信、多信道消息、跨用户隐私到长尾功能请求等更广泛的场景。
- **技术重点**：OpenClaw 今日的技术重心是**稳定性和可靠性**，特别是子代理的完成丢失 (`#44925`)、关键配置的静默破坏 (`#84038`)、和内存泄漏 (`#86613`)。问题列表中包含P0级安全漏洞，显示出项目对生产级稳定性的高要求。相比之下，NanoBot 和 Zeroclaw 对模型兼容性（特别是 DeepSeek-V4）的讨论更突出。
- **社区讨论面**：OpenClaw 的社区讨论更倾向于**用户痛点与系统行为**，如“我的消息丢了”、“我的配置被改了”、“我的隐私泄漏了”。而 NanoBot 和 Zeroclaw 的讨论则更偏向 **技术实现与功能扩展**，如“如何实现工具循环检测”、“如何支持新的协议”、“如何强化沙箱”。

#### 4. 共同出现的技术方向

基于今日数据，以下技术主题在多个项目中同时出现：

- **模型兼容性与适配**：
    - **Zeroclaw** (Issue #6059) 和 **NanoBot** (Issue #3469) 均报告了与 DeepSeek-V4 API 的兼容性问题。
    - **PicoClaw** (Issue #2941) 和 **Zeroclaw** (Issue #6059) 均涉及具体模型 ID 或参数格式不匹配导致的调用失败。
    - **OpenClaw** (PR #70112) 关注了中、日、韩文内容的 token 估算问题，体现了对特定模型的深度优化。

- **Agent 工具执行安全与策略**：
    - **Zeroclaw** (PR #6920, Issue #6914) 提出了在主循环中强制应用工具白/黑名单。
    - **NanoBot** (Issue #3986, PR #2271) 社区热点之一是通用工具级循环检测，防止 Agent 滥发工具调用。
    - **PicoClaw** (Issue #1042) 则反映了安全策略过于严格导致的误报问题，影响了正常功能。

- **子代理/ Agent 可靠性**：
    - **OpenClaw** (Issue #44925) 报告了子代理完成通知静默丢失、无重试机制的核心问题。
    - **NanoBot** (PR #3999) 修复了 `/goal` 指令下 Agent 过早退出的问题。
    - **Zeroclaw** (PR #6907) 通过引入 `MemoryStrategy` 改善 Agent 内存管理，间接影响其可靠性。

#### 5. 差异化定位分析

- **OpenClaw**：定位更像一个 **“个人 AI 操作系统”** 或 **“企业级通信总线”**。其关注点广泛，从底层内存泄漏到上层用户隐私，从多信道集成（WhatsApp, iMessage, Telegram）到核心 Agent 行为（子代理、编译），试图构建一个全栈、高可靠性的 AI 基座。目标用户是重度技术用户和企业开发者。

- **NanoBot**：定位偏向 **“模型灵活性”** 和 **“开发者友好”**。其社区对模型更新的响应非常快（DeepSeek-V4、Step Fun），同时在尝试标准化 Agent 协议（GitAgent Protocol）和提供更优的 UI（TUI, Apps）。目标是让用户能便捷地接入和使用不同的最新模型，并提供一个良好的二次开发体验。

- **Zeroclaw**：定位是 **“安全与可控的 Agent 运行时”**。其社区活动大量集中在安全沙箱（Bubblewrap）、执行策略（`allowed_tools`）、插件系统（WASM）以及针对特定场景（如子进程内存限制）的强化。其目标用户是高度重视 Agent 行为安全和权限管理的用户。

- **PicoClaw**：定位是 **“轻量边缘部署”** 和 **“特定场景优化”**。数据中出现了 RISC-V 平台兼容性、Termux 环境适配等问题，表明其在低功耗、移动或嵌入式设备上的部署需求。它的社区规模小，问题更具体，修复也更聚焦于基础路径验证、默认配置等细节。

#### 6. 社区活跃度记录

基于今日数据，进行分层记录：

- **第一梯队（极高活跃度）**：
    - **OpenClaw**：日增 Issue/PR 总量近千，合并动作频繁，有明显的维护者团队在响应高优问题。
- **第二梯队（高活跃度）**：
    - **NanoBot**：PR 数量庞大（117），但合并率低。大量功能提案和架构变更在讨论，表明社区在积极提出新方向。
    - **Zeroclaw**：Issue 和 PR 数量适中，社区讨论有明确的焦点，高优 Bug 和 RFC 均有实质进展或讨论。
- **第三梯队（中等活跃度）**：
    - **PicoClaw**：活动量相对较小，且今日无任何 PR 被合并。但新提交的修复 PR 针对性强，表明维护力量有限但有针对性。发布 Nightly 版本说明项目仍在持续迭代。

#### 7. 有证据支撑的观察

基于今日数据，得出以下观察：

- **个人 AI 助手的“可靠性”是核心挑战**：OpenClaw 的子代理静默丢失、NanoBot 的工具循环、以及 Zeroclaw 的 Gemini 历史序列化错误，都指向 Agent 在复杂交互中行为不确定性的普遍问题。用户期望 Agent 能稳定、可预期地完成任务，而当前的核心 Bug 主要集中在这些不可靠的“静默失败”和“状态残留”上。
- **安全防护正从“有”向“精细化”演进**：从 Zeroclaw 的 `allowed_tools` 强制执行和进程内存限制，到 OpenClaw 的跨用户记忆泄漏（P0），再到 PicoClaw 的路径误报，表明社区不再满足于简单的安全机制，而是要求能避免误伤（PicoClaw）和覆盖更多边缘场景（Zeroclaw）。安全策略的设计正变得更具挑战性。
- **跨平台兼容性是持续痛点**：OpenClaw 的 WSL2 高 CPU 问题，Zeroclaw 的 Fedora 43 沙箱失败，PicoClaw 的 macOS 符号链接和 Termux 证书问题，说明这些项目在支持 Windows、Linux、macOS 等主流平台外，还面临着不同发行版和移动环境的兼容性挑战。
- **新模型发布触发了一波集成问题**：DeepSeek-V4 的发布直接导致了 Zeroclaw（API 格式不兼容）和 NanoBot（API 参数错误）两个项目的用户反馈或修复。这反映了开源 AI 助手生态对大型模型更新高度敏感，集成适配工作需要持续投入。
- **默认配置质量显著影响初始体验**：PicoClaw 新用户首次使用即因默认 Anthropic 模型 ID 错误而失败（`#2941`），而 OpenClaw 用户因 `doctor --fix` 破坏了显式配置（`#84038`）。这暴露出项目在“开箱即用”体验上的欠缺，默认配置的初始化和变更策略需要更仔细的设计。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot 项目 GitHub 数据，我已为您生成 2026-05-26 的项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-26

### 1. 今日活动概览

过去 24 小时内，NanoBot 项目保持高度活跃，共处理 5 个 Issue 和 117 个 Pull Request。其中，3 个 Issue 被关闭，新提交了 2 个功能增强请求。PR 方面，待合并数量高达 108 个，另有 9 个 PR 被合并或关闭，显示项目维护者正在进行大规模的代码审查与合并工作。无新版本发布。

### 2. 版本发布

无

### 3. 项目进展

本项目日报周期内，多个重要功能改进和 Bug 修复已被合并或关闭：

- **修复 OpenRouter 等网关提供商对思考模型的控制**：PR #3851 和 #3867 相继关闭，解决了 MiMo 等模型通过 OpenRouter 网关路由时，因 `thinking_style` 配置缺失导致 `reasoning_effort` 参数无法生效的问题，确保了用户对模型推理行为的控制。
  - [PR #3851](https://github.com/HKUDS/nanobot/pull/3851)
  - [PR #3867](https://github.com/HKUDS/nanobot/pull/3867)
- **改进贡献者文档**：PR #3850 被关闭，解决了新贡献者运行 `ruff format` 时会产生大量无关 diff 的问题，改进了开发环境的初始设置文档。
  - [PR #3850](https://github.com/HKUDS/nanobot/pull/3850)
- **Dream 功能改进与 Bug 修复**：PR #3999 被关闭，修复了长期任务（`long_task`）在 Agent 输出最终回复后仍会退出的 Bug，确保了 `/goal` 指令下任务的持久化执行。
  - [PR #3999](https://github.com/HKUDS/nanobot/pull/3999)
- **Step Plan 提供商支持**：PR #3988 被关闭，为 StepFun 的 Step Plan 订阅服务添加了专用提供商支持。
  - [PR #3988](https://github.com/HKUDS/nanobot/pull/3988)
- **修复子代理并发配置**：PR #3978 被关闭，修复了 `maxConcurrentSubagents` 配置无法正确从配置文件传递到子代理管理器的问题。
  - [PR #3978](https://github.com/HKUDS/nanobot/pull/3978)
- **统一 CLI 应用与 MCP 体验**：PR #3991 被关闭，将 CLI 应用和 MCP 预设统一到一个新的 `Apps` 体验中，并引入了新的 `agent-app.v1` 清单协议。
  - [PR #3991](https://github.com/HKUDS/nanobot/pull/3991)

### 4. 社区热点

本周社区讨论的热点集中在 **工具调用的健壮性** 和 **新协议/平台的支持** 上。

- **通用工具级循环检测与速率限制（Issue #3986）**：该 Issue 获得了 1 条评论并被迅速关闭（关联 PR #3985）。它反映了社区中普遍存在的痛点——大模型在调用工具时陷入死循环，如重复搜索、重复读文件等。用户希望引入比现有 `web_search` 更通用的循环检测机制。
  - [Issue #3986](https://github.com/HKUDS/nanobot/pull/3986)
- **GitAgent 协议支持（PR #4005）**：这是一个新提交的 PR，提议引入一个名为 GitAgent Protocol (GAP) 的开放标准，旨在实现 AI Agent 的可移植性和可发现性。该 PR 标题为 `[invalid]`，但其提出本身表明了社区对 Agent 标准化和互操作性的探索兴趣。此外，还有 PR #3990（Dream 单阶段合并）和 PR #3992（跨 Agent 消息总线）等重大架构变更正在讨论和审查中，暗示了社区对更强、更模块化 Agent 能力的追求。
  - [PR #4005](https://github.com/HKUDS/nanobot/pull/4005)
  - [PR #3990](https://github.com/HKUDS/nanobot/pull/3990)
  - [PR #3992](https://github.com/HKUDS/nanobot/pull/3992)

### 5. Bug 与稳定性

- **[已修复] deepseek-v4 API 错误 (Issue #3469)**：用户报告在使用 `deepseek-v4` 模型进行多轮思考时，API 因 `reasoning_content` 参数传递方式错误而报错。该 Issue 已被关闭，表明修复或解决方案已到位。
  - [Issue #3469](https://github.com/HKUDS/nanobot/issues/3469)
- **[已修复] PowerShell 终端刷屏 (Issue #3995)**：用户报告在 PowerShell 环境下，Agent 的流式思考输出存在异常换行，导致“严重刷屏”。该 Bug 已被关闭。
  - [Issue #3995](https://github.com/HKUDS/nanobot/issues/3995)
- **[待修复 / PR 已提交] 空响应后工具调用回退失效 (PR #4002)**：该 PR 修复了当模型（如 Kimi 2.6）仅返回推理 token 而无有效内容或工具调用时，Agent 无法正确触发回退机制的 Orchestration Bug。
  - [PR #4002](https://github.com/HKUDS/nanobot/pull/4002)

### 6. 功能请求归类

- **ASR（语音识别）提供商扩展 (Issue #4000)**：用户提议为 StepFun 的 Step Plan 用户添加原生的 `StepTransc` 语音识别提供商，因为当前仅支持 OpenAI/Groq Whisper 风格，导致 Step Plan 用户无法使用内置的语音转录功能。
  - [Issue #4000](https://github.com/HKUDS/nanobot/pull/4000)
- **Weather Skill 模块化 (Issue #3958)**：用户建议将内置的天气技能（Weather Skill）移到示例文件夹中，作为演示而非核心内置功能，以保持项目核心的轻量。
  - [Issue #3958](https://github.com/HKUDS/nanobot/pull/3958)

### 7. 用户反馈摘要

- **对 deepseek-v4 模型的 API 兼容性不满**：用户 @BCC1108 报告了在使用 `deepseek-v4` 模型时遇到的 API 错误，表明模型与底层框架的集成在参数传递上存在问题，影响了特定模型的使用体验。
- **对终端输出格式的体验抱怨**：用户 @Shiftqueue 报告 PowerShell 下 Agent 思考过程的异常换行导致“严重刷屏”，这是一个影响终端用户实际体验的渲染问题。

### 8. 待处理积压

以下 PR 为长期未合并的提案，虽未被关闭，但已超过两个月无实质性进展，建议维护者评估其优先级：

- **解耦心跳推理与通知 (PR #1443)**：自 2026-03-02 起已开放 85 天。该 PR 提议让心跳 Agent 的推理过程静默执行，仅在有内容时才通知用户，提供了一个更优的用户体验配置选项。
  - [PR #1443](https://github.com/HKUDS/nanobot/pull/1443)
- **为终端添加 TUI 交互模式 (PR #2155)**：自 2026-03-17 起已开放 70 天。该 PR 为 nanobot 添加了终端 TUI 模式，用户可使用 `nanobot tui` 命令进入，对于仅使用终端的用户非常实用，但已较长时间未更新。
  - [PR #2155](https://github.com/HKUDS/nanobot/pull/2155)
- **添加工具循环检测 (PR #2271)**：自 2026-03-19 起已开放 68 天。该 PR 提出了一个 `CycleDetector` 类来检测和防止 Agent 陷入重复调用同一工具的无限循环，与今日社区热点 Issue #3986 的诉求高度一致，但其实现方案值得重新审视。
  - [PR #2271](https://github.com/HKUDS/nanobot/pull/2271)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是基于您提供的 GitHub 数据生成的 Zeroclaw 项目动态日报。

---

# Zeroclaw 项目动态日报 | 2026-05-26

## 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目社区活跃度维持高位，共产生 28 条 Issue 更新和 50 条 Pull Request 更新。其中，有 7 个 Issue 和 15 个 PR 已完成合并或关闭。今日未有新版本发布，但多个涉及核心 Agent 运行时、安全沙箱和 Provider 兼容性的高优先级 Bug 修复与功能增强正在密集推进。社区讨论焦点集中在 DeepSeek-V4 API 不兼容、Gemini 400 错误以及强化 Agent 工具执行安全性的多项提案上。

## 2. 版本发布

无

## 3. 项目进展

今日有多项重要 PR 进入审查或合并阶段，着重于安全加固、核心功能演进和架构解耦。

- **安全强化**：
    - **PR #6942** (OPEN) **fix(web): tighten Canvas iframe sandbox to prevent token theft via XSS**：修复 Canvas iframe 沙箱配置，通过移除 `allow-same-origin` 权限来防止潜在的 XSS 令牌窃取漏洞。
    - **PR #6920** (OPEN) **feat(agent): enforce allowed_tools / denied_tools at execution time**：实现深度防御，在 Agent 执行 MCP 工具调用时强制应用 `allowed_tools / denied_tools` 策略，防止未授权工具被调用。
- **架构演进与核心功能**：
    - **PR #6848** (OPEN) **feat: introduce zerocode TUI, RPC socket transport, ...**：一个大型功能 PR，引入了全新的命令行用户界面 (TUI)、RPC 套接字传输机制、以及 `DenyWithEdit` 审批模式，标志着用户交互方式的重大升级。
    - **PR #6907** (OPEN) **feat(memory): introduce MemoryStrategy trait and DefaultMemoryStrategy**：引入 `MemoryStrategy` 特性，将高层级的内存生命周期策略与底层的 `Memory` CRUD 操作解耦，这是对 Agent 内存管理架构的重要改进。
- **Provider 与 Onboarding 修复**：
    - **PR #6908** (OPEN) **fix(onboard): add Codex subscription auth for OpenAI provider**：修复了 OpenAI 提供商在 `onboard` 流程中无法使用 Codex 订阅认证 (OAuth) 的问题，改善了 OpenAI Codex 用户的配置体验。
    - **PR #6928** (OPEN) **fix(onboard): validate provider catalog aliases**：修复了 `onboard` 流程中提供商目录别名验证问题，确保用户配置的特定别名能够被正确验证。
- **Bug 修复**：
    - **PR #6884** (OPEN) **fix(web_fetch): treat max_response_size=0 as unlimited**：修复了 `web_fetch` 工具中 `max_response_size=0` 会导致只读取 1 字节的错误，将其行为修正为“无限制”。
    - **PR #6913** (OPEN) **fix(config): use platform-agnostic paths in policy tests**：修复了测试中路径处理的问题，增加了对 Windows 绝对路径的支持。

## 4. 社区热点

今日最受关注的 Issue 和 PR 反映了用户对大型模型兼容性、核心功能开发和流程改进的迫切需求。

- **#6059 [Bug]: Incompatible with DeepSeek-V4 API format (12 条评论)**：这是社区讨论的绝对热点。用户报告在使用 DeepSeek-V4 Pro 和 Flash 版本（非 DeepSeek-V4 基础版）API 时，因“思考模式”相关问题导致调用失败。作为最新的开源大模型之一，DeepSeek-V4 的兼容性是用户的核心关切。
- **#6883 [RFC]: Shared reply-message constructor on SendMessage (2 条评论)**：该 RFC 提出了一个简化消息回复方式的 API 改进建议。虽然在评论数量上不是最多，但作为社区驱动的技术提案，它展示了用户对开发体验优化的真实需求。
- **#4710 [Feature]: A better LOGO of Zeroclaw (10 条评论)**：关于项目Logo设计的讨论持续了数月，用户参与度依然很高。这反映出社区成员对项目品牌形象的高度关注和强烈的归属感。

## 5. Bug 与稳定性

今日报告了多个高风险的 Bug，主要集中在 Provider 兼容性和运行时沙箱安全领域，部分已有对应的修复 PR。

- **[S2 - 功能降级] #6059 DeepSeek-V4 API 格式不兼容**：用户在使用 DeepSeek-V4-Pro 和 DeepSeek-V4-Flash 时遇到错误，疑似与“思考模式”有关。当前无明确关联的修复 PR，社区高度关注。
- **[S2 - 功能降级] #6302 Gemini 400 — 历史序列化器不变性违反**：Agent 调用 Gemini 模型时，因构造的对话历史中 `assistant` 轮次出现在 `user` 轮次之前，导致 Gemini 返回 400 错误。暂无直接修复 PR。
- **[S2 - 功能降级] #5636 zai-cn Provider 返回错误 1214**：在上下文修剪后，使用 `glm-5-turbo` 模型进行调用时，Zuoshou AI (zai-cn) 提供商持续返回 1214 错误，导致功能完全失效。标记为高风险，暂无修复 PR。
- **[S2 - 功能降级] #6878 (CLOSED) Bubblewrap 在 Fedora 43 上因缺少 /lib64 参数失败**：已确认的 Bug，沙箱组件 `Bubblewrap` 在 Fedora 43 上启动失败。该 Issue 已被关闭，可能意味着已有修复方案或标记为已知问题。
- **[S2 - 功能降级] #5122 web_fetch 私有域名白名单失效**：当域名解析为私有 IP 时，`allowed_private_hosts` 列表无法生效，导致请求被错误拦截。长期未关闭，暂无修复 PR。

## 6. 功能请求归类

用户今日提出了多项新功能请求，主题集中在安全性、扩展性和开发者体验上。

- **Agent 工具执行安全**：
    - **#6914** [feat]: **enforce allowed_tools / denied_tools in main agent loop**：要求在 Agent 主循环中强制执行工具白/黑名单。
    - **#6916** [feat]: **process-memory limits on shell/skill_tool subprocess execution**：提议为 `shell` 和 `skill_tool` 子进程执行设置内存限制，防止因内存耗尽导致容器崩溃。
    - **#6917** [feat]: **honor action-scope filter in Composio tool dispatch**：要求在调用 Composio 工具时，能根据每个 Agent 的配置限制具体可用的操作。
- **扩展性与集成**：
    - **#6489** [Feature]: **“Everything is a plugin”**：一个长期的架构方向提议，旨在将“集成”和“插件”概念统一，实现统一的插件目录。
    - **#6909** [Feature]: **computer-use support**：提议增加类似 OpenAI Codex 的桌面 GUI 交互能力，包括截图和鼠标键盘控制。
- **开发者体验与配置**：
    - **#6906** [Feature]: **improve Nix flake**：社区用户请求改进 Nix flake 配置，期望能直接通过 Nix 包管理器安装和配置 `zeroclaw`。
    - **#6921** [Feature]: **Document minimum browser requirements**：建议明确声明 Web UI 的最低浏览器版本要求。
- **渠道与核心**：
    - **#6883** [RFC]: **Shared reply-message constructor on SendMessage**：提出一个简化消息回复构建的 API 改进。
    - **#6943** [RFC]: **Deconflict Plugin System Goals in FND-001**：提议用 `wasmtime` 组件模型替换当前的 Extism 插件系统。

**关联 PR**：**PR #6907** 通过引入 `MemoryStrategy` 特性，直接响应了核心架构解耦的需求；而 **PR #6920** 和 **PR #6924** 则是在工具执行安全方面对多个功能请求的代码实现。

## 7. 用户反馈摘要

- **Provider 兼容性痛点**：用户 `@SSDGADsss` 报告了 DeepSeek-V4 API 的兼容性问题，指出“这不公平，因为我相信 Zeroclaw 和 DeepSeek-V4 / V4-Pro 是支持列表里的。现在却不能用。” 这反映了用户对官方支持列表的依赖和对兼容性问题的挫败感。
- **Windows 构建问题**：用户 `@rockswang` 报告了 Windows 上 `setup.bat --minimal` 构建出的文件大小远大于文档说明，影响了开发者对最小化构建的预期。
- **沙箱配置争议**：用户 `@perlowja` 在 Issue **#5722** 中提到，默认的 Shell 沙箱配置阻止了所有现实的 Python 技能模式，并提供了详细的背景和解决方案建议，展现了高级用户对安全策略精细化的深度需求。
- **配置困惑**：用户 `@vrurg` 报告了 OpenAI Codex OAuth 认证可以通过，但程序运行时仍会回退到 `OPENAI_API_KEY`，导致配置行为不一致，令人困惑。

## 8. 待处理积压

以下 Issue 和 PR 长期未得到有效响应或处于阻塞状态，需要维护者关注。

- **#5122** [Bug] **web_fetch allowed_private_hosts list is essentially useless** (2026-03-29)：关于 `web_fetch` 工具私有域名白名单无效的 Bug，已被标记为高风险且接受，但近两个月未有进展。
- **#6074** [enhancement] **audit: track 153 commits lost in bulk revert** (2026-04-24)：关于追踪因批量回滚丢失的 153 次提交的审计任务，已标记为高风险且在进行中，但进展缓慢。
- **#6914 / #6915 / #6916 / #6917**：这 4 个由用户 `@alex-nax` 在同一天提出的增强功能，均关联 Agent 工具执行的安全与权限控制，且全部被标记为 `status:blocked, needs-maintainer-review`，等待维护者评审决策。它们是解决 Agent 安全问题的关键。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 · 2026-05-26

## 1. 今日活动概览

过去24小时内，项目共更新10条Issue（新开/活跃9条，已关闭1条），8条Pull Request（全部待合并，无合并/关闭），并发布1个Nightly版本。社区活跃度较高，多个有关Anthropic模型兼容性、路径安全防护误报、以及Web Chat流式输出等问题的讨论持续升温。新增的PR主要集中在修复默认模型ID格式错误、移除已弃用参数以及增加新渠道支持。

## 2. 版本发布

**Nightly Build (v0.2.9-nightly.20260526.ab6d3946)**
- 类型：自动构建，可能不稳定
- 变更日志：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- 无明确破坏性变更说明，仍建议谨慎使用。

## 3. 项目进展

今日无任何PR被合并或关闭，但以下新提交的修复PR值得关注：

- **#2942**：修复默认配置中`claude-sonnet`模型ID使用点号（`.`）导致Anthropic API返回404的问题，改为规范连字符（`-`）。
- **#2940**：修复`claude-opus-4-7`因`temperature`参数被弃用而请求失败的问题，提供方设置`omitTemperature`即可规避。
- **#2813**：改进PID单例检查逻辑，防止死锁进程PID被复用导致启动失败（对应Issue #2720）。
- **#2890**：修复macOS上因`/var`是`/private/var`符号链接导致的路径验证失败。

这些PR均处于待合并状态，需维护者评审。

## 4. 社区热点

- **#1042** [BUG] exec工具的guardCommand方法误报路径安全问题
  作者：@icyfire，创建于3月4日，今日仍有新评论，共计14条回复。用户反馈当`restrict_to_workspace=true`时，执行`curl -s "wttr.in/Beijing?T"`会被错误拦截——正则匹配到`../../Beijing?T`这类虚假路径，而命令本身不涉及任何文件操作。该问题触发频繁，用户期望安全机制能区分“真正的路径操作”与“非路径参数”。
  → https://github.com/sipeed/picoclaw/issues/1042

- **#1950** [已关闭] [Feature] Web Chat的流式输出支持
  作者：@lc6464，创建于3月24日，今日关闭。经过10条讨论后，该功能已被标记为已完成，虽未明确关联具体PR，但社区对此功能落地表示期待。
  → https://github.com/sipeed/picoclaw/issues/1950

- **#2404** [Feature] 配置中支持流式HTTP请求
  作者：@OuSatoru，创建于4月7日，获得8条评论。用户期望能在配置文件中添加`"streaming": true`以启用流式请求，类似OpenAI Python SDK的`stream=True`。当前尚无明确实现或PR关联。
  → https://github.com/sipeed/picoclaw/issues/2404

- **#2720** [BUG] PID检查不验证进程身份导致崩溃循环
  作者：@weissfl，创建于4月30日，6条评论且优先级标记为high。该问题在多个环境下复现，已有对应PR #2813待合并。
  → https://github.com/sipeed/picoclaw/issues/2720

## 5. Bug 与稳定性

以下按严重程度排列，均收集自今日状态：

| 严重程度 | Issue / PR | 描述 | 备注 |
|----------|-----------|------|------|
| **高** | #2720 | PID文件仅检查进程存在，不验证身份，导致系统进程复用PID时gateway无法启动崩溃循环 | 已有修复PR #2813，待合并 |
| **高** | #2887 | RISC-V平台上的.deb版本无法使用OpenAI模型（gpt-5.4） | 环境：PicoClaw v0.2.8，Debian GNU/Linux |
| **中** | #2944 | 在Termux/termux-chroot中所有HTTPS请求因X509证书错误失败（curl正常），需手动设置SSL_CERT_FILE | 新开Issue，暂无修复 |
| **中** | #2943 | 微信渠道发送图片触发智谱GLM-5 API 1210参数错误 | 新开Issue，暂无修复 |
| **中** | #2941 | 默认配置中Anthropic模型ID使用点号（`claude-sonnet-4.6`），API要求连字符（`claude-sonnet-4-6`），导致首次请求404 | 已有修复PR #2942，待合并 |
| **中** | #2939 | `claude-opus-4-7`使用已弃用的`temperature`参数，返回400错误 | 已有修复PR #2940，待合并 |
| **中** | #2796 | 历史记录中一次对话多次用户消息只能看到最后一条，先前消息消失 | 用户期望对用户显示完整历史，而非压缩 |
| **低** |  #1042 | exec工具的guardCommand误报路径安全（见社区热点） | 长期存在，需改进正则逻辑 |

## 6. 功能请求归类

| 类别 | Issue / PR | 描述 | 状态 |
|------|-----------|------|------|
| 渠道支持 | PR #2893 | 新增Server酱³ Bot (SC3Bot) 渠道，支持轮询和Webhook模式 | 待合并，stale |
| 渠道特性 | Issue #1950 (已关闭) | Web Chat支持流式输出 | 已实现，已关闭 |
| 流式API | Issue #2404 | 配置中增加`streaming: true`，直接向LLM后端发送流式HTTP请求 | 开放，尚无PR |
| pico渠道 | PR #2853 | 为pico渠道添加ChatStream支持，向WebSocket客户端实时推送token | 待合并，stale |
| MCP工具 | PR #2696 | 支持从渠道上下文中动态传递HTTP headers到MCP服务器 | 待合并，stale |
| 性能优化 | PR #2781 | 减少技能目录在工具迭代和后续对话中的token用量 | 待合并，stale |
| 配置修复 | PR #2942 | 将默认Anthropic模型ID从`claude-sonnet-4.6`改为`claude-sonnet-4-6` | 待合并，新鲜 |
| 提供方修复 | PR #2940 | 针对`claude-opus-4-7`弃用`temperature`参数，在请求体中省略该字段 | 待合并，新鲜 |

## 7. 用户反馈摘要

- **误报安全防护** (#1042)：用户`@icyfire`强调，执行`curl -s "wttr.in/Beijing?T"`这类无关路径的命令却被阻止，导致正常功能无法使用。多位用户表示该问题影响日常工具链，期望团队优化URL路径检测逻辑。
- **macOS路径验证** (PR #2890)：贡献者`@dtapps`描述在macOS上测试时，由于`/var`是`/private/var`的符号链接，导致`filepath`验证不一致。修复后能正确解析符号链接的最终目标。
- **Termux证书困扰** (#2944)：用户`@ClockW-TheROOT`报告所有HTTPS请求失败，但`curl`正常，说明Go二进制未自动读取系统CA包。建议在Termux上设置`SSL_CERT_FILE`环境变量作为临时方案，用户希望项目自动检测Termux环境并加载证书。
- **历史记录不完整** (#2796)：用户`@EverestSnow`指出，多次用户消息的对话在重新查看时只显示最后一条，认为“消息压缩应该是针对大模型的，对用户显示的历史消息应该完整”。该反馈反映了UI/UX层面的数据展示缺陷。
- **默认配置导致首次失败** (#2941)：用户`@LegendAlessandro-Liguori`报告新安装后第一次使用即返回404，因为默认生成的模型ID`claude-sonnet-4.6`与Anthropic的API规范不符。用户期望默认配置经过充分测试后再发行。

## 8. 待处理积压

以下为长期未响应或等待评审的重要Issue/PR，提醒维护者关注：

| 项目 | 创建时间 | 最后活跃 | 说明 |
|------|---------|---------|------|
| Issue #2720 (PID检查) | 4月30日 | 5月25日 | 高优先级，已有修复PR #2813待合并，但尚未分配 reviewer |
| Issue #2887 (RISC-V .deb) | 5月17日 | 5月26日 | 平台兼容性问题，无任何回复或assignee |
| Issue #2796 (历史记录) | 5月7日 | 5月25日 | UI体验缺陷，至今无PR或开发者回应 |
| PR #2893 (Server酱³) | 5月18日 | 5月25日 | 新渠道功能，标记stale，需评审 |
| PR #2890 (macOS symlink) | 5月18日 | 5月25日 | 修复macOS路径问题，标记stale |
| PR #2853 (pico流式) | 5月11日 | 5月25日 | 重要功能，标记stale |
| PR #2696 (MCP动态headers) | 4月28日 | 5月25日 | 增强MCP能力，标记stale |
| PR #2781 (token使用优化) | 5月6日 | 5月25日 | 性能优化，标记stale |
| PR #2813 (PID修复) | 5月7日 | 5月25日 | 关联高优Issue，标记stale |

以上所有链接均可在文中直接点击。项目今日无合并动态，建议维护者优先评审近期提交的修复PR（#2942、#2940、#2813），并对高优先级Bug（#2720、#2887）给予明确回应或分配修复任务。

</details>