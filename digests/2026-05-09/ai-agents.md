# OpenClaw 生态日报 2026-05-09

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-09 02:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目动态日报。

---

# OpenClaw 项目日报 - 2026-05-09

## 今日活动概览

过去24小时内，项目更新活跃，总计有500条Issue和500条PR更新。其中新开或活跃的Issue为284条，关闭216条；PR方面，有352条待合并，148条已合并或关闭。今日无新版本发布。社区讨论焦点集中在多个新报告的Bug以及一个涉及Docker环境的安装问题，同时维护者在ACP（Agent Communication Protocol）集成和运行时状态重构方面提交了大量修复性PR。

## 项目进展

今日无新版本发布。项目在技术债清理和稳定性修复方面有显著进展，特别是在ACP协议集成的修复上。多个PR针对ACP会话的元数据展示、事件日志写入、会话生命周期管理以及令牌消耗追踪进行了修复和功能增强。

*   **ACP 集成修复**: 维护者 `@efpiva` 提交了一系列针对ACP协议的修复PR，包括：
    *   **修复ACP会话报告**: [#79550](https://github.com/openclaw/openclaw/pull/79550) 和 [#79543](https://github.com/openclaw/openclaw/pull/79543) 修复了ACP会话在显示`openclaw sessions`命令时，运行时类型和模型信息不准确的问题。
    *   **修复ACP事件日志**: [#79539](https://github.com/openclaw/openclaw/pull/79539) 修复了ACP会话的JSONL事件流未写入指定路径的问题。
    *   **修复ACP令牌追踪**: [#79540](https://github.com/openclaw/openclaw/pull/79540) 修复了ACP会话的令牌消耗统计始终为`null`的问题。
    *   **修复ACP子会话分类**: [#79544](https://github.com/openclaw/openclaw/pull/79544) 修复了在Telegram中由超级群组生成的子会话被错误分类的问题。
    *   **新增ACP诊断工具**: [#79542](https://github.com/openclaw/openclaw/pull/79542) 新增了 `openclaw sessions link` 命令，帮助运维人员在 OpenClaw 与 Copilot 之间关联ACP会话。
*   **核心架构重构**: 维护者 `@steipete` 提交了一个大型PR [#78595](https://github.com/openclaw/openclaw/pull/78595)，旨在将运行时状态迁移至SQLite，以替代当前分散的JSON/JSONL文件存储模式。
*   **插件系统改进**: PR [#79198](https://github.com/openclaw/openclaw/pull/79198) 重构了插件的加载元数据，为后续的“预运行时解析”迁移铺平道路。
*   **子进程生命周期管理**: PR [#79571](https://github.com/openclaw/openclaw/pull/79571) 为启动器添加了父进程死亡后停止重生子进程的防护逻辑。
*   **其他功能合并**:
    *   PR [#79566](https://github.com/openclaw/openclaw/pull/79566) 为 `github-copilot` 插件添加了动态模型目录发现功能。
    *   PR [#78583](https://github.com/openclaw/openclaw/pull/78583) 引入了 World ID AgentKit 支持，可为特定工具调用添加人工确认（HITL）流程。
    *   PR [#78668](https://github.com/openclaw/openclaw/pull/78668) 为 Discord 频道添加了编辑和删除预定事件的功能。
    *   PR [#79387](https://github.com/openclaw/openclaw/pull/79387) 为 iMessage 频道新增了离线期间的入站消息回溯（catchup）功能。

## 社区热点

今日社区讨论热度最高的议题主要集中在功能失效和用户体验问题上。

1.  **Docker 环境下的 `brew` 依赖问题**：Issue [#14593](https://github.com/openclaw/openclaw/issues/14593) 报告了在官方Docker容器中运行`openclaw onboard`时，选择依赖`brew`的技能安装失败，因为容器内未安装Homebrew。该问题获得29条评论和17个点赞，是今日讨论最热烈的议题。这表明用户在Docker环境下使用特定技能时遇到了明确的障碍。

2.  **核心文件系统工具丢失**：Issue [#34810](https://github.com/openclaw/openclaw/issues/34810) 报告了OpenClaw代理突然失去执行文件和系统命令的能力，包括创建文件、运行命令和远程部署代码。该问题获得29条评论和9个赞，尽管最终被关闭，但反映了一个严重的稳定性问题。

3.  **Discord 网关挂起**：Issue [#77668](https://github.com/openclaw/openclaw/issues/77668) 报告了macOS上Discord网关插件在重启后无限期挂起，无法进入就绪状态，且有6个重复报告。该问题被标记为回归问题，引发了21条评论。

4.  **`openclaw doctor --fix` 破坏性写入**：Issue [#78407](https://github.com/openclaw/openclaw/issues/78407) 报告了 `openclaw doctor --fix` 命令在更新后自动将 `openai-codex/*` 的模型引用改写为 `openai/*`，导致通过ChatGPT OAuth登录的用户无法使用。该问题获得了19条评论和3个赞。**值得注意的是，即使该Issue已被关闭，后续的Issue [#79461](https://github.com/openclaw/openclaw/issues/79461) 报告在2026.5.7版本中相同的问题依然存在**。

## Bug 与稳定性

今日报告的Bug和回归问题较多，以下按关注度和影响范围排列：

*   **高严重性**:
    *   **`openclaw doctor --fix` 修复无效**：虽然Issue [#78407](https://github.com/openclaw/openclaw/issues/78407) 已于昨日关闭，但今日报告的新Issue [#79461](https://github.com/openclaw/openclaw/issues/79461) 指出，在2026.5.7版本中，`openclaw doctor --fix` 仍然错误地重写了 `openai-codex/*` 模型引用。这表明之前的修复可能不完整或未完全生效。
    *   **Discord网关进程泄漏**：Issue [#73655](https://github.com/openclaw/openclaw/issues/73655) 报告了插件重启时，地址冲突、信号处理器累积和同步磁盘I/O导致WebSocket升级过程饥饿的复合型泄漏，最终导致所有客户端连接超时。
    *   **电报频道回复丢失**：Issue [#79408](https://github.com/openclaw/openclaw/issues/79408) 和 [#79455](https://github.com/openclaw/openclaw/issues/79455) 都报告了Telegram频道中，当`message_thread_id`无效时，回复消息会消失不见。这影响了客户端的使用体验。
*   **中严重性**:
    *   **控制界面消息消失**：Issue [#77374](https://github.com/openclaw/openclaw/issues/77374) 报告在控制UI中，每次用户发送新消息后，之前的助理回复会消失。
    *   **ACP运行时返回空响应**：Issue [#79492](https://github.com/openclaw/openclaw/issues/79492) 和 [#78546](https://github.com/openclaw/openclaw/issues/78546) 报告 `sessions_spawn` 使用ACP运行时调用特定模型时失败，但直接通过ACPX CLI调用却可以工作。
    *   **`memoryFlush` 不可靠**：Issue [#12590](https://github.com/openclaw/openclaw/issues/12590) 报告内存刷新功能不能稳定触发，每隔一次内存压缩周期才会执行一次。
*   **其他**:
    *   **矩阵频道缺少依赖**：Issue [#77896](https://github.com/openclaw/openclaw/issues/77896) 报告更新后Matrix频道因缺少`matrix-js-sdk`而启动失败。
    *   **信号守护进程竞态条件**：Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) 报告了在SIGUSR1重启过程中，信号进程管理不当导致端口和文件锁冲突。
    *   **Cron任务模型白名单问题**：Issue [#78000](https://github.com/openclaw/openclaw/issues/78000) 报告了新版模型白名单导致使用旧模型名称的Cron任务失败。

## 功能请求归类

今日用户提交的功能请求主要集中在对现有渠道功能的补齐和权限管理的细化上。

*   **通信渠道改进**:
    *   **[Telegram]** 为Telegram群组添加 `allowBots` 支持，以实现机器人间的通信 ([#8295](https://github.com/openclaw/openclaw/issues/8295))。
    *   **[Telegram Business]** 支持Telegram Business Bot，以接收来自商务连接的私人聊天消息 ([#20786](https://github.com/openclaw/openclaw/issues/20786))。
    *   **[Matrix]** 支持矩阵频道中的语音消息功能 ([#78016](https://github.com/openclaw/openclaw/issues/78016))。
    *   **[WhatsApp]** 为WhatsApp通道的消息工具添加“删除”操作，使代理能够撤回其已发送的消息 ([#14344](https://github.com/openclaw/openclaw/issues/14344))。
*   **功能增强**:
    *   **[Cron]** 为定时任务添加“直接执行模式”，以避免每次任务都经过不必要的AI模型解释 ([#18160](https://github.com/openclaw/openclaw/issues/18160))。
    *   **[权限]** 基于能力的技能/工具权限模型，默认拒绝高风险操作 ([#12678](https://github.com/openclaw/openclaw/issues/12678))。
    *   **[配置]** 为引导文件引入分层加载机制，以节省上下文窗口代币 ([#22438](https://github.com/openclaw/openclaw/issues/22438))。

## 用户反馈摘要

从今日的Issues和评论中，可以提炼出以下用户痛点和使用反馈：

*   **“我按照你的方法试了，但还是不行”**：用户 `@islandpreneur007` 在报告修复无效时表示：“在一个只有Codex OAuth的主机上运行 `openclaw doctor --fix --yes`，它仍然执行了不安全的迁移... 和 [#78407](https://github.com/openclaw/openclaw/issues/78407) 是同一个Bug类。” 这反映了用户对修复版未能信守承诺的失望。
*   **“无声的失败”**：用户 `@luuq2026` 在报告MCP工具回归问题时强调：“v2026.4.27引入了`silent confabulation`作为失败模式，比之前的失败更危险。” 这表明相对于明确的错误，用户更担心系统在用户不知情的情况下生成错误的结果。
*   **“它根本不工作”**：用户 `@frankdierolf` 在报告Matrix语音消息问题时，用一个例子描述：“当我向我的代理发送语音消息时，它没有真正地‘听’到音频，而是编造了一个礼貌的回复，而不是回答我的问题。” 这是对核心功能失效的典型抱怨。

## 待处理积压

以下为部分长期未得到解决或需要维护者关注的Issue：

1.  **长期存在的功能请求**：
    *   **[Feature]: Add allowBots support for Telegram groups** ([#8295](https://github.com/openclaw/openclaw/issues/8295)) - 此功能请求自2026年2月以来一直开放，支持者较多（👍 4）。
    *   **[Feature]: Support native web_search passthrough for ZAI (GLM) and Google (Gemini) providers** ([#17925](https://github.com/openclaw/openclaw/issues/17925)) - 同样自2月以来开放，希望将原生网络搜索功能扩展到更多AI提供商。
    *   **[Feature]: make agent aware of communication channel** ([#20837](https://github.com/openclaw/openclaw/issues/20837)) - 自2月以来开放，代理无法识别消息来源渠道的问题。
2.  **重要的待合并PR**：
    *   **[codex] refresh plugin regression fixtures** ([#79444](https://github.com/openclaw/openclaw/pull/79444)) - 这是一个确保插件回归测试高质量的PR，今日未获得评论或合并，可能需进一步关注。
    *   **[docs, size: XS] docs(install): clarify install-cli.sh manages its own Node 22.22.0 runtime** ([#79586](https://github.com/openclaw/openclaw/pull/79586)) - 这是一个及时澄清文档的PR，以消除用户的安装困惑。

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，现基于您提供的 2026-05-09 各项目动态摘要，为您生成一份横向对比分析报告。

---

## AI 智能体开源项目横向对比日报 (2026-05-09)

### 1. 今日横向概览

今日各项目均保持了较高的开发活跃度，但焦点和节奏有所不同。**OpenClaw** 和 **Zeroclaw** 在核心架构重构和版本发布方面动作较大，前者侧重技术债清理（如运行时状态迁移至SQLite）及ACP协议的大规模修复，后者则正式发布了v0.7.5，引入浏览器内引导流程。**NanoBot** 和 **PicoClaw** 更侧重于解决直接影响用户体验的稳定性Bug和渠道兼容性问题，例如工具调用循环、飞书消息分发错乱、Android端数据访问等。社区讨论方面，跨项目共同关注的痛点集中在第三方服务集成（如MCP工具、自定义Provider）、渠道稳定性（Matrix、飞书）以及工具安全机制的平衡性上。

### 2. 各项目活跃度对比

| 项目 | 今日新开/活跃 Issues | 今日 PR 总数 (含合并/关闭) | 今日 Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 284 | 500 (352待合并，148已合/关) | 无 | 活动集中在核心架构重构、ACP协议修复、社区Bug报告（Docker `brew`依赖、`doctor--fix`修复无效）。 |
| **NanoBot** | 10 | 22 (状态未明确区分) | 无 | 主要合并了工具循环、飞书、Windows emoji崩溃等关键修复。多项功能增强PR（WebUI重设计）仍在待合并队列。 |
| **Zeroclaw** | 19 | 45 (12已合/关，其余待合并) | **v0.7.5** | 发布了含浏览器内引导流程的新版本，并铺垫了v0.8.0的破坏性变更。社区对远程Provider兼容性、审批绕过和SSE事件流的Bug反馈集中。 |
| **PicoClaw** | 6 | 42 (16已合/关，26待合并) | nightly构建 | 聚焦于exec工具安全、MCP Schema兼容性、Matrix频道过滤等精准修复。新增了MQTT通道和Gemini搜索提供商等小功能。 |

### 3. OpenClaw 与同类对照

- **活动量级**：OpenClaw 的 Issue 和 PR 总数（284 + 500）远超其他项目，这与其核心项目地位及相对更成熟的社区有关。活动量级差异巨大，部分原因可能是其 Issue 和 PR 统计口径更宽（包含机器人自动关闭的陈旧Issue）。
- **技术重点**：OpenClaw 的技术动作偏向**底层架构**（运行时状态迁移至SQLite）和**协议标准**（ACP协议修复），体现出作为“核心参照”项目的基础设施属性。而其他三个项目更多关注**上层功能**（WebUI、渠道）和**稳定性修复**（工具循环、渠道Bug）。
- **社区讨论面**：OpenClaw 的社区Bug报告种类繁杂（从Docker环境到核心文件系统丢失），反映了其作为高度可配置系统的复杂性。相比之下，NanoBot 和 Zeroclaw 的社区讨论则更聚焦于具体的**功能优化**（自定义Bot名称、审批UI）和**集成痛点**（Provider配置不透明）。

### 4. 共同出现的技术方向

今日多个项目在以下方向出现了相同或类似的需求：

1.  **通信渠道稳定性与功能增强**：
    - **涉及项目**：NanoBot、Zeroclaw、PicoClaw
    - **具体诉求**：Matrix 和 飞书（Feishu/Lark）是共同痛点。NanoBot 修复了飞书群组消息分发错乱，Zeroclaw 修复了Matrix 重复投递，PicoClaw 修复了Matrix 过滤失效。此外，多个项目用户都请求了对 **飞书** 功能的增强（如流式输出、通知优化）。

2.  **工具调用（Tool Calling）与 MCP 兼容性**：
    - **涉及项目**：NanoBot、Zeroclaw、PicoClaw
    - **具体诉求**：
        - **工具循环**：NanoBot 新增了工具调用循环防护；Zeroclaw 的社区也关注上下文溢出导致的幻觉/主题漂移问题。
        - **MCP 集成**：OpenClaw 修复了MCP工具回归问题（无声失败），而 PicoClaw 修复了MCP工具Schema与Gemini兼容性问题。这表明MCP作为工具扩展的标准协议正在被广泛采用，但其实现细节仍需打磨。

3.  **自定义/第三方 Provider 兼容性**：
    - **涉及项目**：OpenClaw、Zeroclaw、PicoClaw
    - **具体诉求**：OpenClaw 的 `doctor --fix` 命令破坏了 `openai-codex` 引用；Zeroclaw 用户反馈远程vLLM Provider 路径错误和鉴权失败问题；PicoClaw 用户关注Codex OAuth 空响应和LM Studio简易连接。这揭示了用户对连接非标准模型后端（本地或第三方）的需求旺盛，但生态碎片化带来的兼容性问题依然严峻。

4.  **Agent 安全与监督机制**：
    - **涉及项目**：OpenClaw、Zeroclaw、PicoClaw
    - **具体诉求**：OpenClaw 引入了World ID AgentKit支持人工确认（HITL）；Zeroclaw 报告了Web仪表板审批绕过Bug，并收到关于基于能力的权限模型的功能请求；PicoClaw 围绕exec工具的安全守卫机制（guardCommand）引发了社区对安全性与可用性平衡的讨论。

### 5. 差异化定位分析

| 维度 | **OpenClaw** | **NanoBot** | **Zeroclaw** | **PicoClaw** |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 通用智能体平台，强调核心架构稳定性、协议标准（ACP）、与Coplilot等生态集成。 | 专注于个人助手场景，强化工具调用循环管理、渠道消息分发（飞书/Weixin）和无人值守功能（Dream/Heartbeat）。 | 面向开发者和高级用户，提供多界面（CLI/TUI/Web）和高可配置性（人格编辑器、属性级网关管理），注重引导流程简化。 | 轻量级智能体，优先解决特定平台（Android/Mac）、特定工具（exec/MQTT/串口）和基础模型兼容性（Gemini/LM Studio）。 |
| **目标用户** | 核心开发者、希望深度定制和参与标准制定的技术团队。 | 个人用户、小型团队，注重开箱即用的个人AI助手功能，尤其是有飞书（Feishu）和微信（Weixin）使用习惯的用户。 | 技术探索者、对系统细节有控制欲的用户，以及需要从零搭建智能体流程的开发者。 | 资源有限的用户（如树莓派、低端Android）、喜欢尝试多种模型后端的技术爱好者、嵌入式开发人员。 |
| **关键架构差异** | **核心+插件**架构，重构运行时状态至SQLite，体现对数据管理结构的严格要求。 | **中间件/渠道**驱动，关注对话循环控制（Loop Guard），体现对会话交互质量的精细管理。 | **多界面**统一后台，v0.8.0引入的破坏性环境变量变更，展示了其追求更一致、更清晰配置模型的决心。 | **轻量**集成，关注特定工具（如exec）的安全策略和特定模型（如Gemini）的适配，体现其作为“胶水”角色的灵活性。 |

### 6. 社区活跃度记录

基于今日的 Issue/PR 数量和版本发布情况，可对项目活跃度进行分层：

- **高活跃度（核心基础设施）**：
    - **OpenClaw**：数量级最高的Issue/PR活动，并进行着复杂的核心架构重构。
    - **Zeroclaw**：发布了正式版本(v0.7.5)，并有大量活跃的PR和社区热点讨论。
- **中活跃度（功能迭代与修复）**：
    - **NanoBot**：有明确的Bug修复和功能增强被合并，社区讨论焦点清晰。
    - **PicoClaw**：有大量精准的Bug修复PR，并发布了Nightly构建，显示出持续的演进。

### 7. 有证据支撑的观察

1.  **渠道集成正从“能用”走向“好用”**：多个项目在Matrix、飞书渠道上的修复和功能请求，表明基本的连接能力已不再是瓶颈，社区开始聚焦于消息分发的准确性（如线程归属）、响应体验（流式输出）和功能完整性（如语音消息）。这是一个社区成熟度提升的信号。

2.  **工具调用安全与可用性之间的张力是持续的社区痛点**：从NanoBot的工具循环防护，到OpenClaw的MCP工具回归，再到Zeroclaw的Web审批绕过和PicoClaw的exec守卫争议，安全机制的设计直接影响用户的实际工作流。过于严格的防御会破坏可用性（如PicoClaw的exec问题），而过于宽松则可能导致非预期行为（如无效的循环）。**这是一个尚未有完美解决方案的领域。**

3.  **MCP 协议正在成为事实上的工具扩展标准，但实现细节仍需打磨**：OpenClaw、Zeroclaw和PicoClaw均出现了与MCP相关的Bug或需求。这表明开发者社区已广泛采纳MCP，但由于各模型对其实现要求不同（如Schema格式、tool_call_id格式），在跨模型兼容性上仍存在不小的工作量。

4.  **“无声的失败”模式引发开发者警惕**：OpenClaw 用户对MCP工具的“无声的confabulation（捏造）”表示担忧，Zeroclaw 用户也指出了SSE事件流的“静默丢弃”。这反映了一个核心要求：在复杂AI系统中，**明确的失败信号比模糊的成功回应更有价值**。系统在处理错误时，应优先选择向用户报告，而非“假装”成功。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是 2026-05-09 的 NanoBot 项目动态日报。

---

## NanoBot 项目动态日报 (2026-05-09)

### 1. 今日活动概览

过去 24 小时内，NanoBot 项目活跃度较高，共产生 10 条 Issues 和 22 个 Pull Requests。社区针对工具调用循环、飞书(Feishu)群组消息分发、终端 emoji 输入崩溃等关键问题提交了修复（已合并）。多个关于功能增强的 PR 仍在待合并队列中，包括 WebUI 设置重设计和模型预设功能。本周无新版本发布。

### 2. 版本发布

无

### 3. 项目进展

今日有多个重要的修复和功能被合并，标志着项目在稳定性和新功能上取得进展：

- **工具调用循环防护**：社区贡献者 [@andrew-ellis-engineering](https://github.com/andrew-ellis-engineering) 提交了两个紧密相关的 PR，均已合并：
    - [#3701](https://github.com/HKUDS/nanobot/pull/3701): 针对单轮对话中重复的本地工具调用（如 `read_file`）添加了防护，防止模型陷入无限推理循环。
    - [#3702](https://github.com/HKUDS/nanobot/pull/3702): 基于上述防护，新增了可配置的升级策略，用于处理重复工具调用模式，提供了确定性的中断行为。
- **飞书(Feishu)渠道修复**：[#3704](https://github.com/HKUDS/nanobot/pull/3704) 已合并，修复了飞书群组话题中多文件发送时，部分文件被错误发送到群组而非话题的问题（关联 Issue #3694）。
- **Windows 平台稳定性修复**：[#3697](https://github.com/HKUDS/nanobot/pull/3697) 已合并，修复了 Windows 终端因 emoji 产生的代理对（surrogate code points）导致 JSON 序列化崩溃的问题。
- **WebUI 与智能体能力增强**：
    - [#3695](https://github.com/HKUDS/nanobot/pull/3695) 已合并，新增了图片生成工具和配套的 WebUI 模式。现在智能体可以生成图片，并在 WebUI 中提供迭代编辑的工作流。
    - [#3703](https://github.com/HKUDS/nanobot/pull/3703) 已合并，对 WebUI 的设置体验进行了重新设计，引入了专门的设置侧边栏和 BYOK 配置管理视图。
- **后台任务并发优化**：针对后台任务（如心跳、自动压缩、Dream）对本地 LLM 端点造成并发压力的问题，[#3693](https://github.com/HKUDS/nanobot/pull/3693) 提交了集中化管理 LLM 并发门的修复方案，旨在解决连接错误和超时问题。

### 4. 社区热点

- **Issue #3650: 配置机器人的名称和图标**：该 Issue 获得 3 条评论，讨论了让用户自定义 Agent 模式下机器人的显示名称和图标。用户希望看到“mybot is thinking...”而不是“nanobot is thinking...”。这是一个呼声较高的体验增强需求。

- **Issue #3637: 转录提供商配置不透明**：该 Issue 讨论了 Groq 语音转录配置不透明的问题，指出用户在配置文件中的特定写法会导致无效设置。这反映了用户在配置第三方服务时面临的困惑，对文档和配置校验提出了要求。

- **Issue #1412: 来自另一个 bot 的消息处理？**：这是一个长期存在的 Issue（自 3 月起），用户寻求让 NanoBot 响应来自另一个 HomeAssistant 机器人 ID 的消息。该问题有 2 条评论和 1 个 👍，表明社区对跨系统、跨 Bot 交互的潜在需求。

### 5. Bug 与稳定性

- **[严重]** **重复工具调用导致无限循环** (Issue #3699): 报告指出模型在单轮对话中可重复调用相同的本地工具（如 `read_file`）导致无限循环。**已通过 PR #3701 修复**。
- **[中]** **飞书群组消息分发错乱** (Issue #3694): 在飞书群组的话题中发送多个文件时，部分文件被发送到群组而非话题。**已通过 PR #3704 修复**。
- **[中]** **会话中断后记忆丢失** (Issue #3689): 用户报告在打断模型执行任务后，模型似乎丢失了之前会话的记忆，无法继续上下文。这是一个关于会话管理的关键问题，目前尚无关联的修复 PR。
- **[中]** **Windows 终端 emoji 导致崩溃** (PR #3697): 在 Windows 终端输入 emoji 会导致程序崩溃。**已通过 PR #3697 修复**。
- **[低]** **微信(Weixin)渠道静默丢消息** (PR #3684): 报告指出微信渠道存在轮询异常、令牌过期等导致的消息静默丢失问题。**已有修复 PR #3684 待合并**。

### 6. 功能请求归类

- **配置与自定义**:
    - [#3650](https://github.com/HKUDS/nanobot/issues/3650): 请求允许用户配置 Agent 模式的机器人名称和图标。
    - [#3696](https://github.com/HKUDS/nanobot/pull/3696) (OPEN): 新增模型预设功能，支持快速切换模型和自动故障转移。
    - [#3591](https://github.com/HKUDS/nanobot/pull/3591) (OPEN): 为 Dream 功能添加范围控制，允许用户限制其更新范围。
- **飞书(Feishu)频道**:
    - [#3692](https://github.com/HKUDS/nanobot/issues/3692): 请求为飞书群组的“话题隔离”功能提供开关设置，以便用户控制是否将群组内发送的不同文件隔离到不同话题。
- **API 与集成**:
    - [#3698](https://github.com/HKUDS/nanobot/issues/3698): 请求在 API Server 的流式响应中注入工具调用事件，以便前端能监控智能体的思考过程。
    - [#3590](https://github.com/HKUDS/nanobot/pull/3590) (OPEN): 为心跳(Heartbeat)功能添加手动触发指令，方便用户调试或按需执行。
- **通用增强**:
    - [#3652](https://github.com/HKUDS/nanobot/issues/3652) (CLOSED): 请求为 Dream 功能添加启用/禁用开关。

### 7. 用户反馈摘要

- **对配置不透明的抱怨**：在 Issue #3637 中，用户 `@sandr1x` 指出 Groq 语音转录的配置极易导致无效设置，反映了对配置文档化和验证的强烈需求。
- **对上下文丢失的困惑**：在 Issue #3689 中，用户 `@lyh161` 描述了打断模型后模型“失忆”的困惑，认为这是上下文丢失，期望模型能记住对话历史和任务进度。
- **对飞书功能的混合使用体验**：飞书群组话题功能在 Issue #3692 和 #3694 中引发了正反两方面的反馈。一方面用户赞赏该功能，另一方面发现文件发送逻辑有 Bug，且缺乏开关无法按需控制。

### 8. 待处理积压

- **跨 Bot 消息处理** (Issue #1412): 自 3 月以来无相应进展，该功能请求旨在让 NanoBot 处理来自其他机器人（如 HomeAssistant）的消息，可能涉及跨平台互操作性，建议维护者评估其可行性和优先级。
- **Dream 功能控制** (PR #3591) **和** **手动心跳触发** (PR #3590): 这两个由同一作者提交的 PR 已开放一周，目前无维护者回应。它们提供了对核心无人值守功能（Dream 和 Heartbeat）更精细的控制，建议维护者关注并审阅。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据提供的 Zeroclaw 项目数据，生成 2026-05-09 的项目动态日报。

---

# Zeroclaw 项目动态日报 — 2026-05-09

## 1. 今日活动概览

过去24小时内，Zeroclaw 项目保持着极高的活跃度。官方发布了新版本 **v0.7.5**，重点引入了浏览器内引导和配置功能（`/onboard` 流程）。社区和贡献者共提交了 **19 条 Issue** 和 **45 条 PR**，其中 12 个 PR 已被合并或关闭。开发活动集中在修复稳定性 Bug（如 Matrix 频道重复投递、SQLite 并发启动失败）和推进 **v0.8.0** 的破坏性变更（新环境变量语法）。

## 2. 版本发布

- **v0.7.5** [查看完整更新日志](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.5)
  - **核心更新**：引入了浏览器内引导和配置流程（`/onboard`），显著降低新用户的上手门槛；增加了针对 `OpenAPI 3.1` 规范的属性级网关 CRUD 管理界面；提供了 CLI / TUI / Web 三界面的“人格编辑器”。
  - **破坏性变更**：该版本是 **v0.8.0** 的铺垫，包含了对“操作者可见的环境变量语法”的破坏性变更，涉及 `integration/v0.8.0` 分支。该变更旨在统一并通过模式来镜像配置。PR #6523 详细说明了新的语法规则和旧机制的废弃。**升级前请务必仔细阅读相关 PR 和迁移指南。**

## 3. 项目进展

- **内存上下文标记常量共享（PR #6319）**：`Audacity88` 提交的 PR 已被合并。该重构将散落在多个注入点的 `[Memory context]` 字符串提取为共享常量，减少了代码硬编码和维护成本。
- **Matrix 频道重复投递修复（PR #6306）**：`patrickzzz` 的修复已被合并。此 PR 解决了因 `run_sync_loop` 每次重新进入都注册新事件处理器而卸载旧处理器，导致频道重启后每条消息被重复投递 N 次的严重问题。
- **Mistral 工具调用修复（PR #5121）**：`Alix-007` 的 PR 已被合并，强制在 OpenAI 兼容的 provider 路径中序列化符合 Mistral 要求的 `tool_call.id`（9位字母数字），解决了 Mistral 模型工具调用失败的问题。
- **v0.7.5 发布 CI 修复（PR #6502）**：`singlerider` 的 PR 已关闭（已上线），修复了 `Release Stable` 工作流在构建 Web 端时因找不到 `./api-generated` 模块而失败的问题，直接保障了 v0.7.5 的顺利发布。

## 4. 社区热点

- **自定义远程 Provider 图片路径问题（Issue #6399）**：该 Issue 获得了 **4 条评论**，是今日讨论焦点。一位 Raspberry Pi 用户在尝试使用远程 `vllm` 作为 Provider 时，发现系统发送了本地图片文件路径而非数据 URL，导致多模态请求失败。此问题被视为“S1 - 工作流阻塞”，影响了使用自定义远程 Provider 的用户，表明社区对第三方服务集成的可靠性非常关注。
  - [Issue #6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)
- **Web 仪表板审批绕过问题（Issue #6207）**：虽只有 **3 条评论**，但被标记为“P1”优先级和“S1”严重等级。此 Bug 指出通过 WebSocket (`/ws/chat`) 进行的工具调用会绕过 `ApprovalManager`，意味着需要人工监督的工具执行在网页 UI 上完全不可见，直接影响核心安全与审批流程，社区对此反应强烈。
  - [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)
- **SSE 事件流丢失工具调用事件（Issue #6526 / PR #6527）**：新报告的 Issue 指出 `/api/events` 的 SSE 端点“静默丢弃”了大部分代理事件，特别是 `tool_call_start` 等关键事件。这是影响实时事件追踪的基础功能问题，贡献者 `mn13` 已迅速提交了修复 PR（#6527），表明社区对实时、可靠的事件流有迫切需求。
  - [Issue #6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526)
  - [PR #6527](https://github.com/zeroclaw-labs/zeroclaw/pull/6527)

## 5. Bug 与稳定性

**严重等级（S1 - 工作流阻塞）**：
- **[Bug]: 自定义远程 Provider 发送本地文件路径（#6399）**：影响多模态请求。**已有讨论，暂无 fix PR。**
- **[Bug]: Web 仪表板绕过审批管理器（#6207）**：导致监督模式失效。**状态：进行中**。
- **[Bug]: ACP cwd 变更锁定技能文件读取（#6516）**：当会话的 `cwd` 指向 ZeroClaw 工作区外的仓库时，代理无法读取技能文件。贡献者 `tidux` 提出的 **PR #6532** 旨在通过将 `ReadSkillTool` 路径固定解析到 `workspace_dir` 来修复此问题。

**严重等级（S2 - 降级行为）**：
- **[Bug]: Matrix 语音转录失败（#6153）**：已关闭，说明已修复或找到临时方案。
- **[Bug]: SQLite 并发启动失败（#6431）**：多组件同时初始化同一 SQLite 工作区时失败。贡献者 `drbparadise` 已提交 **PR #6432** 来修复。
- **[Bug]: 上下文溢出致幻觉/主题漂移（#6517）**：长对话填满上下文窗口后模型开始幻觉。暂无明确修复。
- **[Bug]: Matrix 根时间线消息创建独立线程会话（#6524）**：在 `reply_in_thread = true` 配置下，普通的根消息被错误地作为新线程处理。
- **[Bug]: 构建失败: matrix-sdk v0.16.0 递归限制溢出（#6530）**：影响启用 Matrix 频道功能的新版本构建。

## 6. 功能请求归类

- **桌面端 macOS UI 控制（Issue #6499）**：用户请求为 macOS 桌面端实现截图、点击、按键等 UI 操作的能力。**有讨论，暂无直接关联 PR。**
- **Web 聊天工具审批 UI（Issue #6522）**：由于后端的审批协议已实现，但前端未处理 `approval_request` 帧，该 Issue 请求为 Web 前端添加审批 UI。**有讨论，暂无 PR。**
- **多智能体运行时（Issue #6272）**：用户请求引入 V3 代理文件系统布局，为每个 alias 创建独立工作区，并支持权限和资源共享。**有讨论，暂无 PR。**
- **信任系统 CA 证书（Issue #6528）**：用户请求在 provider 请求中信任系统的 CA 根证书，以便连接使用自签名证书的自定义 Provider。

## 7. 用户反馈摘要

- **Provider 兼容性是核心痛点**：多个 Issue（#6399, #6474）都反映了用户在使用非 OpenAI 标准 Provider（如 vllm, Ollama, Llama.cpp）时遇到的兼容性问题，包括路径处理错误、重复调用 LLM、以及工具调用失败等。这表明社区正在积极尝试多种模型后端，但对集成的稳定性和配置的简便性有较高期望。
- **渠道集成（Matrix）仍存在问题**：尽管有多个 PR 修复了 Matrix 频道的 Bug（#6306, #6153），但新报告的 Bug（#6530, #6524）显示该渠道的稳定性和功能完整性仍待加强，是社区反馈的集中区域。
- **对实时事件流有明确需求**：Issue #6526 反馈 SSE 事件流“静默丢弃”事件，这直接影响了基于事件进行二次开发或监控的用户体验。贡献者 `mn13` 的快速响应（提交 PR #6527）反映了社区对基础实时功能的重视。
- **文档与引导流程受关注**：v0.7.5 引入的 `/onboard` 引导流程、PR #6473 对审阅流程的说明以及 PR #6281 对 InboxAPI 技能的文档补充（在“项目进展”外），表明社区和贡献者都在持续关注降低新用户的学习和使用门槛。

## 8. 待处理积压

- **PR #5254 — 修复 llama.cpp gemma4 工具模式**：此 PR 提交于 4 月 3 日，旨在修复 llama.cpp 对 Gemma 4 模型工具模式的兼容性问题，距今已一个多月仍未合并。作为解决 Provider 兼容性问题的关键补丁，建议维护者关注。
  - [PR #5254](https://github.com/zeroclaw-labs/zeroclaw/pull/5254)
- **PR #5986 — 为代理回合生命周期添加运行时追踪和 SSE 广播**：此 PR 是一个重要的增强，能显著提升可观测性，但与 Issue #6526（SSE 事件丢失）的问题范围有所重叠。建议评估是否与已有的修复方案集成或合并。**标记为需要作者操作。**
  - [PR #5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986)
- **PR #5838 — Webhook 频道添加指数退避重试逻辑**：此增强 PR 已开启近一个月，**标记为需要作者操作**。Webhook 是集成外部系统的重要渠道，其失败重试机制对稳定性至关重要。
  - [PR #5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-05-09

## 今日活动概览

过去24小时内，项目维护与社区讨论活跃。共处理了20条Issue（新开/活跃6条，关闭14条）和42个Pull Request（待合并26个，已合并/关闭16个）。项目发布了最新的Nightly构建版本（v0.2.8-nightly.20260509）。多个关键Bug已被修复或提出修复PR，社区关于功能增强的讨论也较为集中。

## 版本发布

项目发布了最新的Nightly构建版本：

- **版本**：[nightly: Nightly Build (v0.2.8-nightly.20260509.8508f806)](https://github.com/sipeed/picoclaw/releases/tag/nightly)
- **说明**：这是一个自动化的每日构建版本，可能不稳定，需谨慎使用。
- **变更日志**：详情请查阅 [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) 的完整对比。

## 项目进展

今日有多个重要的PR被合并或处于活跃状态，推动了Bug修复和功能增强：

- **Bug修复**：
  - **exec工具安全保护修复**：[PR #2826](https://github.com/sipeed/picoclaw/pull/2826) 修复了exec工具中`guardCommand`方法对相对路径处理不当的问题（关联Issue #2749），解决了因“命令中存在相对路径”而误报安全风险的问题。
  - **工具反馈（Tool Feedback）机制修复**：合并了多个由 [@bogdanovich](https://github.com/bogdanovich) 提交的修复，包括：
    - [PR #2828](https://github.com/sipeed/picoclaw/pull/2828): 修复了队列中的语音跟随式消息（voice follow-ups）未能正确转录的问题。
    - [PR #2823](https://github.com/sipeed/picoclaw/pull/2823): 修复了当代理工具已回复消息时，工具反馈未被正确清除的问题。
    - [PR #2822](https://github.com/sipeed/picoclaw/pull/2822): 修复了子对话完成后，子工具反馈未被清除的问题。
  - **MCP工具Schema兼容性修复**：[PR #2681](https://github.com/sipeed/picoclaw/pull/2681)（已合并）修复了Gemini模型与复杂MCP工具Schema不兼容导致的崩溃问题。
  - **MQTT通道支持**：[PR #2705](https://github.com/sipeed/picoclaw/pull/2705)（已合并）正式新增了对MQTT协议通道的支持。
  - **Matrix通道修复**：[PR #2827](https://github.com/sipeed/picoclaw/pull/2827) 修复了Matrix频道`allow_from`过滤功能因用户ID格式（包含冒号）而完全失效的问题。
- **功能增强**：
  - **Gemini搜索提供商**：[PR #2763](https://github.com/sipeed/picoclaw/pull/2763) 为`web_search`工具新增了Gemini Google Search提供商，可选用谷歌搜索并获取带引用的答案。

## 社区热点

今日社区讨论的焦点主要集中在连接外部服务、工具安全性和终端用户体验上。

1.  **LM Studio 简易连接**
    - **Issue**：[#28](https://github.com/sipeed/picoclaw/issues/28) - “Feat Request: LM Studio Easy Connect”
    - **热度**：长期活跃，共18条评论，2个赞。尽管创建于2月，但依然有最新更新。
    - **诉求**：用户请求一个更简便的方式连接LM Studio，特别是希望在Android设备上安装和使用。这反映了社区对简化本地模型配置步骤的强烈需求。

2.  **exec工具安全保护争议**
    - **Issue**：[#1042](https://github.com/sipeed/picoclaw/issues/1042) - “[BUG] exec工具的guardCommand方法问题”
    - **关联PR**：[#2826](https://github.com/sipeed/picoclaw/pull/2826)
    - **热度**：10条评论，2个赞。
    - **核心问题**：`exec`工具的安全守卫（guardCommand）过于粗暴，错误地将`curl wttr.in/Beijing`等命令中的路径片段识别为非法相对路径，导致命令被误杀。该Issue和修复PR引来较多关注，表明社区对这个功能区的体验和安全性平衡非常敏感。

3.  **Android v0.2.8 数据访问问题**
    - **Issue**：[#2744](https://github.com/sipeed/picoclaw/issues/2744) - “[BUG] Android v0.2.8, cannot access any data from tabs”
    - **热度**：虽然只有1条评论，但问题严重性高。内测用户报告Android 0.2.8版本无法访问来自Tabs的任何数据，这可能是一个影响核心操作的回归问题。

## Bug 与稳定性

今日报告和修复的Bug按严重程度排列如下：

1.  **[严重] Android v0.2.8 数据访问完全中断**：[Issue #2744](https://github.com/sipeed/picoclaw/issues/2744)。用户报告在升级到v0.2.8后，无法从任何Tabs访问数据。暂无修复PR。
2.  **[高] Codex OAuth 返回空响应**：[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)。当使用ChatGPT Codex后端时，助手返回空响应。该问题有3个赞，说明影响范围不小。暂无修复PR。
3.  **[高] exec工具安全守卫误判**：[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)。已有对应的修复PR [#2826](https://github.com/sipeed/picoclaw/pull/2826) 被提出。
4.  **[中] 图片识别失效**：[Issue #2738](https://github.com/sipeed/picoclaw/issues/2738)（已关闭）。用户报告v0.2.8版本无法识别上传的图片，该问题已被标记为已关闭，但未说明修复方式。
5.  **[中] 语音队列转录失败**：[Issue 关联PR #2828](https://github.com/sipeed/picoclaw/pull/2828)。已修复。
6.  **[中] Matrix通道过滤失效**：[Issue 关联PR #2827](https://github.com/sipeed/picoclaw/pull/2827)。已修复。

## 功能请求归类

以下是用户提出的新功能需求，暂无明确路线图承诺。

- **通道与集成**：
  - 优化飞书（Lark/Feishu）插件，希望支持流式输出、显示状态信息等（Issue [#2580](https://github.com/sipeed/picoclaw/issues/2580)），已有相关修复PR [#2785](https://github.com/sipeed/picoclaw/issues/2785) 讨论通知栏工具调用信息显示问题。
  - 提供预编译的WhatsApp支持版本，方便在树莓派Zero等设备上部署（Issue [#2625](https://github.com/sipeed/picoclaw/issues/2625)）。
  - 新增`serial port`串口工具支持（Issue [#2649](https://github.com/sipeed/picoclaw/issues/2649)）。
  - 支持GitHub Copilot作为提供商（Issue [#2652](https://github.com/sipeed/picoclaw/issues/2652)）。
  - 支持让飞书通知中心显示多条工具调用信息（Issue [#2785](https://github.com/sipeed/picoclaw/issues/2785)）。

- **功能增强**：
  - 开发一个强大的记忆系统，集成mem0、Supermemory等第三方提供商的API（Issue [#2515](https://github.com/sipeed/picoclaw/issues/2515)）。
  - 提供一个选项，禁用“Enter”键发送消息，以支持多行输入（Issue [#2376](https://github.com/sipeed/picoclaw/issues/2376)）。
  - 使Seahorse代理的`fresh_tail_size`参数可配置（Issue [#2527](https://github.com/sipeed/picoclaw/issues/2527)）。

## 用户反馈摘要

- **痛点**：
  - **安卓体验**：Android版升级后由于数据访问方面的Bug（#2744）和对“Enter”键功能的槽点（#2376），影响了用户的基础体验。
  - **功能限制**：exec工具的安全设置过于严格，限制了诸如查询天气等合法命令的执行（#1042）。
  - **跨平台/国产化需求**：中国用户呼吁对飞书（Lark）频道进行优化，希望获得与官方插件类似的体验（#2580）。树莓派用户则苦于无法快速更新WhatsApp版本（#2625）。

- **使用场景**：用户使用场景多样，包括在移动设备（Android， #28）、低功耗设备（树莓派Zero， #2625）上运行，以及连接各种自建（LM Studio， #28）和云端（Codex， #2674）的AI模型。

## 待处理积压

以下为长期未响应或重要性较高的积压项，建议维护者关注：

- **功能请求**：
  - **[#28] LM Studio Easy Connect**：自2月创建以来持续活跃，社区中已有18条讨论，但尚未看到官方或社区的实质性进展或方案。
  - **[#2515] 强大的记忆系统集成**：提出了集成多种记忆提供商的目标，是一个较大的功能模块，设计复杂，目前仍处于讨论阶段。

- **Bug与缺陷**：
  - **[#2744] Android v0.2.8数据访问问题**：直接影响Android核心功能，需紧急排查和定位。
  - **[#2674] Codex OAuth 空响应问题**：影响使用特定后端的用户，已有3个赞，但尚未有PR或明确的修复方案。

</details>