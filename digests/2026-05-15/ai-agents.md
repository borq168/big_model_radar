# OpenClaw 生态日报 2026-05-15

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-15 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，以下是基于您提供的数据生成的 OpenClaw 项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-05-15

## 今日活动概览

过去24小时内，项目活跃度极高，共产生500条Issue更新和500条PR更新，社区讨论和开发贡献均非常密集。核心发布方面，项目连续发布了4个新版本（`v2026.5.14-beta.1`、`v2026.5.12`、`v2026.5.12-beta.8`、`v2026.5.12-beta.7`），主要工作集中在将WhatsApp、Slack、Amazon Bedrock等提供商和插件依赖从核心运行时中剥离，以实现更精简的按需安装。此外，Telegram渠道的可靠性和稳定性得到了显著提升，包括隔离轮询和更安全的群组媒体处理。

## 版本发布

项目在今日发布了4个新版本，重点在于核心运行时的“减肥”和依赖项的优化。

*   **`v2026.5.14-beta.1`**:
    *   **核心变更**: 将根级别的 `proxy-agent`、`https-proxy-agent` 和 `minimatch` 依赖移除，通过 `@openclaw/proxyline` 包统一管理路由代理。
    *   **i18n改进**: 新增 `pnpm ui:i18n:report` 基线报告，用于检查硬编码文本和语言回退元数据。
*   **`v2026.5.12` (及 `beta.7`, `beta.8`)**:
    *   **核心变更**: **重大调整**。WhatsApp、Slack、Amazon Bedrock、Anthropic Vertex 等提供商和插件的依赖包已从核心运行时中完全外部化。这意味着执行最小化安装时，将不再自动下载这些大型依赖，大幅减少了基础安装体积。
    *   **Telegram 稳定性**: Telegram 渠道获得了显著增强，包括隔离的轮询机制、持久的本地消息暂存，以及更安全的群组媒体处理逻辑。

**注意事项**:
*   **破坏性变更**: 如果您依赖容器化安装的 `brew` 包管理功能，请注意新版 Docker 镜像可能已移除了相关支持（相关 Issue: #14593）。建议确认您的使用场景。
*   **迁移**: 用户若使用外部化的插件，可能需要手动执行 `npm install` 或 `openclaw install` 来确保特定插件所需的依赖被正确安装。例如，使用Bedrock的用户需明确安装 `@openclaw/provider-bedrock`。
*   **代理配置**: 使用自定义代理的用户，未来需要更新配置以通过 `@openclaw/proxyline` 进行路由。

## 项目进展

今日合并/关闭了45个PR，以下是一些关键或新提交的PR，反映了项目正在推进的具体工作：

*   **`#81970` [fix: preserve ACP metadata across stale session-store writes]**: 修复了一个重要的稳定性问题，即一个“过时”的会话存储写入可能导致其他会话的ACP元数据丢失，进而引发后续ACP交互失败。
*   **`#81312` [fix(plugins): preserve bundled capability manifest contracts]**: 修复了打包插件（如飞书）在运行时重建时丢失其声明的 `manifest.contracts` 元数据的问题，确保了依赖合约的工具能正常工作。
*   **`#81841` [fix: retry silent reasoning and empty-error turns with feedback]**: 改进了LLM推理过程中的错误处理。当模型仅输出“推理”内容或返回空错误时，不再静默忽略，而是向模型注入可见的反馈指令进行重试，以期望得到有效回复。
*   **`#81895` [Add config unset dry-run]**: 为 `openclaw config unset` 命令增加了 `--dry-run` 模式，允许用户在真正执行前预览配置移除的效果，降低误操作风险。
*   **`#81834` [feat(senseaudio): add SenseAudio TTS provider]**: 为 SenseAudio 插件新增了文本转语音（TTS）功能，补全了该插件的语音交互能力。

## 社区热点

今日讨论最为活跃的社区议题主要集中在**工具行为**、**Docker兼容性**和**功能缺失**上。

*   **`#14593` [Bug]: Skill install fails in Docker: `brew not installed`** (29条评论, 17👍): 这是一个长期存在的问题，用户在官方Docker容器中运行 `openclaw onboard` 安装需要 `brew` 的技能时失败，因为镜像未预装 `brew`。用户希望官方能提供解决方案或更新镜像。 [链接](https://github.com/openclaw/openclaw/issues/14593)
*   **`#25592` [Text between tool calls leaks to messaging channels]** (26条评论): 一个严重的UX问题。当Agent在工具调用之间产生文本（如错误处理、处理确认）时，这些本应对用户可见的内部处理过程会被发送到聊天频道中，影响用户体验。 [链接](https://github.com/openclaw/openclaw/issues/25592)
*   **`#9443` [Request: Prebuilt Android APK releases]** (24条评论, 1👍): 用户请求官方提供预编译的Android APK文件，以便更便捷地在手机上运行OpenClaw伴侣应用。目前只有源码，编译门槛较高。 [链接](https://github.com/openclaw/openclaw/issues/9443)
*   **`#22438` [feat: Tiered bootstrap file loading for progressive context control]** (16条评论): 用户建议引入分层引导文件加载机制，以便在不同的会话（如主会话、子代理、Cron任务）中使用不同的文件，从而节省LLM Token消耗。 [链接](https://github.com/openclaw/openclaw/issues/22438)
*   **`#18160` [Feature]: Direct Exec Mode for Cron Jobs** (10条评论, 9👍): 用户希望Cron任务能支持“直接执行模式”，跳过LLM推理步骤，直接运行简单命令，以避免因LLM超时导致任务失败。 [链接](https://github.com/openclaw/openclaw/issues/18160)

## Bug 与稳定性

今日报告的Bug涵盖了回归、行为异常等多个方面，严重性较高的如下：

*   **严重 - 运行时退化**:
    *   **`#73323` [Gateway runtime degradation]**: **回归**。用户在Windows 11 + Node 24环境中报告了多系统网络/定时器退化问题，包括定价获取60秒超时、Telegram轮询暂停和RPC变慢。这是一个跨版本（4.23/4.25/4.26）的慢性问题。 [链接](https://github.com/openclaw/openclaw/issues/73323)
*   **严重 - 功能中断**:
    *   **`#41330` [iMessage duplicate message loop]** (已关闭): iMessage渠道存在严重bug，Agent发送的消息会被系统重新读取并视为新的入站消息，导致无限循环。 **此Issue已于今日被关闭，表明已有修复方案**。 [链接](https://github.com/openclaw/openclaw/issues/41330)
    *   **`#40540` [Bug]: `openclaw update` command fails with EBUSY error on Windows**: Windows系统上执行 `openclaw update` 失败，原因是文件被占用（EBUSY），导致无法完成自更新。 [链接](https://github.com/openclaw/openclaw/issues/40540)
    *   **`#38327` [Bug]: "Cannot convert undefined or null to object"** : **回归**。更新到2026.3.2后，使用 `google-vertex/gemini-3.1-pro-preview` 模型的嵌入式Agent会因类型错误完全无法工作。 [链接](https://github.com/openclaw/openclaw/issues/38327)
*   **中等 - 行为异常**:
    *   **`#22676` [Bug]: Signal daemon stop() race condition**: 在SIGUSR1重启时，Signal守护进程存在竞态条件，导致旧进程未完全释放资源就启动新进程，造成进程孤儿和发送失败。 [链接](https://github.com/openclaw/openclaw/issues/22676)
    *   **`#32296` [Bug]: Agent replies to previous message instead of current message**: Agent会话上下文似乎出现混淆，导致回复内容与当前问询不匹配。 [链接](https://github.com/openclaw/openclaw/issues/32296)
*   **低影响/配置问题**:
    *   **`#32473`[Bug]: control ui requires device identity**: **回归**。在Hostinger VPS等非HTTPS/非Localhost环境下，控制UI会强制要求设备身份验证，导致无法访问。 [链接](https://github.com/openclaw/openclaw/issues/32473)
    *   **`#29387` [Bug]: Bootstrap files in agentDir are silently ignored**: 放置在特定Agent目录下的引导文件被忽略，只有工作空间目录下的才生效，这违背了用户的预期配置逻辑。 [链接](https://github.com/openclaw/openclaw/issues/29387)

**关联修复PR**:
*   与 `#42303` (fix: restore Linuxbrew installation support in Docker builds) 相关的Issue为 `#14593`。
*   PR `#42208` (security: enforce human approval for destructive tools...) 和安全审查相关。
*   `#40001` (Write tool lacks append mode) 已有关联PR吗? 未在列表中看到直接对应的。

## 功能请求归类

过去24小时内，用户提出的新功能请求主要集中在**安全性**、**交互增强**和**开发者工具**上。

*   **安全与权限**:
    *   **`#10659` [Masked Secrets]**: 请求一个“掩码机密”系统，让Agent能使用但不能看到API Keys，以防止提示注入攻击造成泄漏。 [链接](https://github.com/openclaw/openclaw/issues/10659)
    *   **`#39979` [Path-scoped RWX permissions]**: 建议基于路径而非二进制文件来定义读写执行权限，以实现更精细的访问控制。 [链接](https://github.com/openclaw/openclaw/issues/39979)
    *   **`#13610` [Native secrets management integration]**: 请求集成AWS Secrets Manager、Vault等秘密管理服务，以替代在纯文本配置文件中存储密钥。 [链接](https://github.com/openclaw/openclaw/issues/13610)
*   **消息与渠道交互**:
    *   **`#12602` [Slack Block Kit support]**: 希望Agent能发送富文本的Slack Block Kit消息，用于CRM摘要、数据库查询结果等场景。 [链接](https://github.com/openclaw/openclaw/issues/12602)
    *   **`#20786` [Telegram Business Bot support]**: 希望支持接收来自Telegram Business连接的个人聊天消息。 [链接](https://github.com/openclaw/openclaw/issues/20786)
    *   **`#33413` [Slack: Show tool-level progress]**: 希望在Slack线程状态中动态显示当前正在运行的tool名称，而不是静态的“typing...”。 [链接](https://github.com/openclaw/openclaw/issues/33413)
*   **系统与运维**:
    *   **`#13616` [Backup/restore utility]**: 希望有标准化的备份/恢复工具来管理配置、Cron任务和会话历史，便于灾难恢复和环境迁移。 [链接](https://github.com/openclaw/openclaw/issues/13616)
    *   **`#22438` [Tiered bootstrap file loading]**: 分层加载引导文件以控制Token消耗。 [链接](https://github.com/openclaw/openclaw/issues/22438)
    *   **`#28300` [Theme Customization System]**: 为控制UI添加主题自定义系统，包括预设主题和自定义工作室。 [链接](https://github.com/openclaw/openclaw/issues/28300)
*   **Agent能力与流程**:
    *   **`#13583` [Pre-response enforcement hooks]**: 请求在Agent回复前强制执行某些工具调用（硬门控），用于金融、安全等高风险场景。 [链接](https://github.com/openclaw/openclaw/issues/13583)
    *   **`#22358` [Post-subagent completion extension hook]**: 希望在子Agent完成后触发一个扩展钩子，用于自动生成轨迹文件等。 [链接](https://github.com/openclaw/openclaw/issues/22358)
    *   **`#35203` [Multi-Agent Collaboration Enhancement]**: 一个全面的RFC，提议通过能力分析、共享黑板、分层内存和Token成本治理来增强多Agent协作。 [链接](https://github.com/openclaw/openclaw/issues/35203)

## 用户反馈摘要

从今日的热点Issue评论中，可以提炼出以下用户痛点和使用场景：

*   **Docker体验痛点**: 用户在Docker容器中运行OpenClaw时，遇到了`brew`缺失（`#14593`）和Sandbox无法正确挂载工作空间（`#31331`）的问题，影响了常规技能安装和沙盒功能。
*   **多渠道消息混乱**: iMessage渠道的**重复消息循环**（`#41330`）和Agent在工具调用间**泄漏内部文本**（`#25592`）是影响聊天体验最严重的问题。前者会导致消息风暴，后者则会污染频道。
*   **稳定性和性能抱怨**: 用户报告了在Windows系统上的**运行时性能退化**（`#73323`），包括长时间超时和轮询卡顿。同时，Agent的**会话混淆**（`#32296`）和**Cron任务超时**（`#18160`）也影响了系统交付结果的可靠性。
*   **平台兼容性需求**: 除Docker外，用户希望官方提供**预编译Android APK**（`#9443`），并解决**非HTTPS环境下的控制UI访问问题**（`#32473`），显示出用户对在不同设备和网络环境运行的强烈需求。
*   **安全意识的提升**: 用户通过`#10659`（Masked Secrets）和`#13610`（集成密钥管理）明确表达了对API Key泄露和配置安全的担忧，现有的.env文件方式已无法满足其安全要求。

## 待处理积压

以下是在积压中等待维护者关注的重要Issue和PR，它们具有较高社区关注度或影响核心功能。

*   **`#14593` [Bug]: Skill install fails in Docker** (创建于 2026-02-12, 29条评论, 17👍): 一个长期未解决的关键问题，直接影响用户在Docker环境中的开箱即用体验。
*   **`

---

## 横向生态对比

好的，作为 AI 智能体与个人 AI 助手开源生态的资深技术分析师，以下是根据您提供的 2026-05-15 各项目动态数据生成的横向对比分析报告。

---

## 2026-05-15 AI 智能体开源项目横向对比分析

### 1. 今日横向概览

今日，四个项目社区活动呈现显著分化。**OpenClaw** 依旧是生态中最活跃的项目，核心团队通过密集发布版本来推动架构革新，将依赖包外部化以实现“减肥”。**Zeroclaw** 和 **PicoClaw** 同样活跃，但焦点集中在修复 Cron 任务、Telegram 频道和网络工具等关键功能的严重 Bug，反映出项目正处于从“能用”到“好用”的稳定性攻坚期。相比之下，**NanoBot** 社区热度较低，但成功处理了多个飞书渠道的兼容性问题。总体来看，**Cron 任务可靠性**和**消息渠道稳定性**成为今日跨项目共同的技术痛点，而 **OpenClaw** 的“插件外部化”是今日最重大的架构决策。

### 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **4 个版本** | 项目绝对核心，活动量级远超其他项目。核心事件是依赖外部化重构，并修复了 iMessage 消息循环等严重 Bug。 |
| **NanoBot** | 22 | 23 | **0** | 活动量最低，但 Bug 修复效率较高（如飞书事件处理问题当日关闭）。无新版本发布。 |
| **Zeroclaw** | 24 | 50 | **0** | PR 数量较多，且多为高优先级修复（SSE 日志、技能系统、安全更新），但均处于待合并状态，合并速度慢。 |
| **PicoClaw** | 9 | 23 | **1 个 nightly** | 发布了一个 Nightly 版本用于测试。依赖项升级是主要活动，社区贡献的 PR 多于官方合并。 |

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与其他项目在活动量和定位上存在明显差异：

- **活动量级差异巨大**：OpenClaw 的 Issue 和 PR 更新数（各 500）是其他项目（多为 9-50 条）的 **10 到 50 倍**，表明其社区规模、维护团队资源投入和代码变更频次均为最高。
- **技术重点不同**：
    - **OpenClaw 聚焦架构层**：今日核心工作是剥离 WhatsApp、Slack、Bedrock 等依赖，实现核心运行时的“瘦身”。这是一个破坏性的架构变更，旨在提升基础部署的灵活性和效率。
    - **Zeroclaw & PicoClaw 聚焦功能层和稳定性**：Zeroclaw 重点修复 Cron 任务输出路由、SSE 日志流故障；PicoClaw 重点修复 LLM 调用重试、会话历史等。这些是提升用户体验和可靠性的“修补”工作，而非架构重构。
- **社区讨论面**：
    - **OpenClaw 社区讨论更广泛**：涉及 Docker 兼容性、工具行为泄露、Android APK 编译等宏观生态问题。
    - **Zeroclaw & PicoClaw 讨论更聚焦**：集中在特定渠道（Telegram）的 Bug、特定功能（Cron、Skills）的不达预期，以及特定模型（小米 MIMO）的兼容性上。

**结论**：OpenClaw 更像是一个正在快速演进的**平台级**项目，而 Zeroclaw 和 PicoClaw 在当前阶段更像是在 **平台底座上打磨功能**的“专项”项目。

### 4. 共同出现的技术方向

今日数据中，以下两个技术方向被多个项目同时提及，表明其为社区通用痛点：

1.  **Cron 任务的功能与可靠性**：
    - **OpenClaw**：用户请求为 Cron 任务增加“直接执行模式”以跳过 LLM 推理，避免超时（`#18160`）。
    - **Zeroclaw**：报告了多个相关 Bug，包括 Cron 任务输出未路由到配置频道（`#6647`）、会话隔离未按配置生效（`#6648`）、Webhook 回调丢失 `thread_id`（`#6634`）等。
    - **PicoClaw**：社区贡献者提交了 PR 以“抑制”计划轮次的反馈（`#2766`）。

2.  **Telegram 渠道的稳定性与功能增强**：
    - **OpenClaw**：新版本显著增强了 Telegram 渠道的隔离轮询和群组媒体处理逻辑。
    - **Zeroclaw**：报告了 Telegram 频道 `mention_only` 配置对媒体消息无效（`#6229`，已关闭）、工具调用不触发（`#6646`）等 Bug。用户请求显示工具调用进度（`#6663`）。
    - **PicoClaw**：社区 PR 试图为 Telegram 话题组添加独立触发规则（`#2779`）。

3.  **安全与权限管理需求**：
    - **OpenClaw**：用户请求了“掩码机密”系统（`#10659`）、基于路径的权限控制（`#39979`）和原生密钥管理集成（`#13610`）。
    - **NanoBot**：用户请求了 DM 发送者白名单/配对机制（`#3768`）和更精细的文件访问控制（`#3780`）。
    - **Zeroclaw**：CI 依赖扫描报告了 `lettre` 包的 TLS 漏洞（`#6657`），并存在一个长期未解决的 `web_fetch` 私有主机安全配置问题（`#5122`）。

4.  **用户体验优化**：
    - **OpenClaw**：用户抱怨 Agent 工具调用间泄漏文本到聊天频道（`#25592`）。
    - **NanoBot**：用户报告 WebUI 会话内容显示错乱（`#3790`）。
    - **PicoClaw**：用户反馈会话历史显示不全、缺少消息时间戳（`#2795`, `#2787`）。

### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **全栈式个人 AI 助手框架** | **轻量级、渠道优先的个人助手** | **专业级、可观察性强的智能体平台** | **面向资源受限端的轻量级 AI 助手** |
| **功能侧重** | Agent 编排、工具生态、消息渠道聚合、运行时架构 | 飞书/Telegram等特定渠道的深度集成、私密消息处理 | Cron 任务、技能系统、OpenTelemetry 可观测性、Docker 部署友好 | **关键区别**：无明确“技能”或“插件”系统介绍，依赖包直接集成；社区请求 Dockerfile 支持|
| **目标用户** | 开发者、高级用户、寻求构建复合 AI 工作流的团队 | 追求快速部署、特定渠道（尤其飞书）内高效配置的个人用户 | 需要运行定时任务、复杂技能和严格监控的运维/开发者 | 边缘设备、嵌入式系统、追求极简安装的用户 |
| **今日架构差异** | **大版本重构期**。主动剥离大型依赖，推进模块化。 | **稳定性修复期**。无重大架构变更，专注修复渠道 Bug。 | **功能集成期**。大量 PR 等待合并，集成社区贡献的技能和安全更新。 | **依赖追新期**。活动主要来自自动依赖更新，修复较少。 |

### 6. 社区活跃度记录

基于今日的数据，对四个项目的社区活跃度进行分层：

- **第一梯队 (核心层)**：**OpenClaw**
    - **数量**: Issue/PR 更新量（500）远超其他项目，是绝对的社区主导者。
    - **事件**: 今日 4 个版本的发布和核心架构变更（依赖外部化）是生态内的重大事件。

- **第二梯队 (活跃层)**：**Zeroclaw**, **PicoClaw**
    - **数量**: 每日产生数十条 Issue 和 PR 更新，社区反馈和贡献者输入持续。
    - **事件**: 主要集中在功能 Bug 的修复和社区贡献的 PR 提交（如 Zeroclaw 的可观测性修复、PicoClaw 的 Telegram 修复）。

- **第三梯队 (维护层)**：**NanoBot**
    - **数量**: 活动量最低，但 Bug 响应和关闭速度快。
    - **事件**: 无版本发布，社区讨论强度中等。

### 7. 有证据支撑的观察

1.  **Cron 任务功能普遍存在短板**：OpenClaw、Zeroclaw 和 PicoClaw 三个项目今日均出现了关于 Cron 任务的功能请求或 Bug 报告（从跳过 LLM 推理到输出路由失败）。这表明“定时自动化”是个人 AI 助手的关键应用场景，但现有实现普遍在处理异常的稳定性和预期行为一致性上存在问题，是社区共同的“阿喀琉斯之踵”。

2.  **Telegram 渠道是用户最大的“心头好”与“心头恨”**：三个非 NanoBot 的项目今日均有涉及 Telegram 的改进、Bug 或功能请求。这说明 Telegram 是用户使用 AI 助手的主要入口之一，其功能（如媒体处理、群组交互、Trigger配置）的完善度和稳定性直接影响了用户的部署信心和满意度。

3.  **安全需求从“建议”走向“痛点”**：OpenClaw、NanoBot 和 Zeroclaw 今日均涉及安全相关的请求或 Bug，内容从“集成密钥管理”到“文件访问控制”，再到“依赖漏洞扫描”。这不再是少数高级用户的建议，而是已成为阻碍项目在生产环境（尤其企业场景）中应用的实际障碍。

4.  **跨项目重复劳动的存在**：多个项目（如 OpenClaw、Zeroclaw）都在独立解决 Telegram 渠道的相似问题（如 `mention_only` 配置对媒体消息无效），这反映出缺乏一个公认的、可复用的消息处理中间件标准或核心库。各项目在基础渠道稳定性上投入了独立且重复的研发力量。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，以下是基于您提供的 NanoBot 项目数据生成的 2026 年 5 月 15 日项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-15

### 1. 今日活动概览

过去24小时内，项目活跃度较高，共更新22条Issue和23条PR。其中，10个新Issue被开启，12个被关闭；PR方面，有8个被合并或关闭，仍有15个处于待合并状态。今日无新版本发布。社区讨论焦点集中在飞书机器人的事件处理错误、WebUI显示异常以及多项功能请求（如配置格式迁移、安全策略增强）上。

### 2. 版本发布

**无**

### 3. 项目进展

今日有多项重要的Bug修复和功能改进被合并或关闭，主要进展如下：

- **[安全] 飞书频道安全增强**：`#3775` 已合并，通过为机器人成员事件注册无操作处理函数，修复了飞书WebSocket模式下机器人被其他机器人艾特时引发的“处理器未找到”错误。`#3789` (OPEN) 则进一步强化了下载媒体文件的安全性，防止API返回的文件名被用作路径。
- **[功能] 快捷指令持久化**：`#3779` 已合并，修复了 `/help`、`/pairing` 等快捷指令产生的对话未被持久化到会话文件的问题，解决了此前WebUI历史记录为空的情况。
- **[功能] Telegram频道转写功能**：`#3786` 已合并，修复了 `transcription_*` 配置项对Telegram语音消息无效的问题，现在语音消息可以正确被转写为文本。
- **[功能] 模型路由功能关闭**：`#3070` 作为功能请求被关闭。

### 4. 社区热点

- **#3772 [CLOSED] 飞书群聊被其他机器人艾特时出错**：该Issue引发了关于飞书频道健壮性的讨论。用户[@bigsinger]报告称，当同一群组内的其他机器人艾特NanoBot时，会导致错误。该问题获得了2条评论，并在24小时内被迅速修复（PR `#3775`），显示了项目组对渠道稳定性问题的快速响应。
- **#2880 [OPEN] 无论发什么消息都回复报错**：这是一个长期遗留问题，已经持续超过一个月，获得了最多的17条评论。用户[@breeze303]报告了一个严重Bug，即在常规对话中所有消息都会报错，但使用“agent”模式却正常。该问题被标记为“stale”，其高关注度和长时间未解决是社区的主要痛点，暗示问题可能与特定的功能分支或配置兼容性有关。[[链接](https://github.com/HKUDS/nanobot/issues/2880)]
- **#3787 [OPEN] 关于Bot回复提及的功能请求**：该Issue深入探讨了飞书机器人在群组中被其他机器人操作（如添加/移除）时产生错误的根本原因，并提出了一个通用的解决方案思路。虽然具体问题已被 `#3775` 修复，但该Issue的讨论表明社区对飞书事件的完整性和健壮性有较高要求。[[链接](https://github.com/HKUDS/nanobot/issues/3787)]

### 5. Bug 与稳定性

今日报告的Bug主要集中在以下几个方面，按严重程度排列：

- **严重Bug - 通用回复报错 (#2880)**：用户报告所有消息均无法正常回复，为全局性问题。暂无关联的Fix PR。
- **Bug - WebUI显示错乱 (#3790)**：更新源码后，WebUI会话内容打印后显示错乱，需要刷新页面才能恢复。该问题为“Open”状态，已有2条评论，但尚无明确的修复PR。
- **Bug - DeepSeek模型兼容性 (#3760)**：使用 `deepseek-v4-flash` 模型时因 `reasoning_content` 参数问题导致400错误。此问题已被关闭，但未提及具体修复方式，可能需要用户自行调整配置。
- **Bug - 模型忽略外部文件内容 (#3754)**：`deepseek-v4-flash` 模型在处理小文件或常见知识时，会跳过 `read_file` 工具调用，直接生成内容。此问题已被关闭，无后续修复说明。
- **稳定性 - 流式输出缺少StreamId (#3718)**：Cron任务触发的流式消息缺少 `streamid`，可能导致客户端处理异常。该问题为“Open”状态。
- **稳定性 - 运行时上下文泄漏 (#3670)**：在 `nightly` 分支上，运行时上下文提示会泄漏到持久化的聊天历史中。此问题已被关闭。

### 6. 功能请求归类

今日提出的功能请求涵盖了配置、安全、模型、用户体验、监控和CLI等多个领域。

- **配置与集成**：
    - 使用TOML代替JSON作为配置文件格式（#3402，已关闭）。
    - 模型路由功能，根据任务复杂度选择性价比高的模型（#3070，已关闭）。
- **安全与访问控制**：
    - 支持更精细的文件访问控制与脚本审查机制 (#3780, 已关闭)。
    - 引入DM（私聊）发送者白名单/配对机制（#3768，OPEN），以防止API额度被滥用和提示注入攻击。
- **模型与工具**：
    - 支持供应商托管的网页搜索工具，并带本地回退功能（#3741，OPEN）。
    - 在API Server的流式响应中注入工具调用事件（#3698，OPEN）。
- **用户体验与监控**：
    - 添加 `/insights` 命令，用于追踪历史Token用量（#3731，OPEN）。
    - 添加 `nanobot doctor` CLI诊断命令，用于验证安装、配置和渠道连接（#3769，OPEN）。
- **其他**：
    - 在中断任务时保持会话上下文不丢失（#3689，已关闭）。
    - 使用本地tokenizer估算提示词Token，避免网络依赖（#3647，OPEN）。

### 7. 用户反馈摘要

- **痛点：会话中断与上下文丢失**：用户@lyh161在 `#3689` 中描述了在打断Agent执行任务时，Agent会丢失上下文的问题。他期望中断时Agent能记住对话历史和任务进度，这反映了用户对Agent任务连续性体验的高要求。
- **痛点：企业级安全与文件访问控制**：用户@lyh161在 `#3780` 中代表其公司提出了更精细的文件访问控制需求。他们希望NanoBot能在不启用沙箱的Windows服务器上安全运行，既能分析外部数据，又能防止误操作，体现了企业用户对生产环境安全性的普遍关切。
- **痛点：企业代理环境下的SSL兼容性**：PR `#3783` 和 `#3784` 的作者报告了在公司代理环境下，因SSL证书拦截导致的Web工具操作失败。这反映了一个现实的企业IT场景，即项目需要考虑对各种复杂网络环境的兼容性。
- **满意：快速的问题响应**：用户在 `#3772` 中报告的飞书错误在24小时内得到了修复（`#3775`），这种快速响应有助于提升社区对项目维护团队处理关键渠道问题能力的信任。

### 8. 待处理积压

- **#2880 [BUG] 无论发什么消息都回复报错**：此Bug自4月7日报告，已有17条评论，是受害最广的Bug之一。目前无关联修复PR，且标记为“stale”，建议维护团队优先评估和回应。[[链接](https://github.com/HKUDS/nanobot/issues/2880)]
- **#3790 [BUG] WebUI会话-打印内容显示错乱**：这是一个新的、影响WebUI直接使用的显示问题。目前只有2条评论，尚无明确的修复进展，需关注。[[链接](https://github.com/HKUDS/nanobot/issues/3790)]
- **#3787 [Feature Request] Bot Reply Mention**：该Issue虽然关联的问题(`#3772`)已被修复，但其提出的根本原因分析和通用解决方案思路具有长期价值，可考虑作为改进飞书或其他渠道事件处理机制的参考资料。[[链接](https://github.com/HKUDS/nanobot/issues/3787)]

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Zeroclaw 项目 GitHub 数据，生成 2026-05-15 的项目动态日报。

---

## Zeroclaw 项目动态日报 | 2026-05-15

**数据统计区间：** 2026-05-14 至 2026-05-15

### 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目社区活跃度较高。共产生 **24 条** Issue 更新（新开及活跃 20 条，关闭 4 条），以及 **50 条** PR 更新（待合并 47 条，合并/关闭 3 条）。没有新版本发布。Issue 方面，社区集中报告了涉及 **Telegram 频道**、**Cron 任务** 及 **Provider** 相关的多个严重 Bug，维护者已有部分响应并标记处理。PR 方面，有多个高优先级修复与功能提案进入待合并状态，涵盖 **SSE 日志流修复**、**技能系统集成** 及 **依赖安全更新** 等关键领域。

### 3. 项目进展 (重要 PR 合并/关闭情况)

今日无 PR 被合并至主分支的明确记录。目前有 `47` 个 PR 处于待合并状态，其中多个为高风险、核心功能修复或增强，正在等待维护者审阅。

- **`#6627` [已关闭] [Bug]: Stale tool-result images replay across later provider turns**：该 Bug 已被修复并关闭。问题描述为工具执行结果中的图片标记会在后续轮次被错误地重复发送给 Provider，此修复有助于提升多轮对话中图像处理的准确性。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6627))

- **`#6547` [已关闭] [Feature]: homebrew merge fail**：该关于 Homebrew 合并失败的问题已被关闭。问题源于版本号缺失，目前已解决。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6547))

- **`#6229` [已关闭] [Bug]: mention_only=true does not suppress responses to photo/media messages in Telegram groups**：此关于 Telegram 频道 `mention_only` 配置对媒体消息无效的 Bug 已被关闭。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6229))

- **`#6634` [已关闭] [Bug]: cron-scheduled webhook callbacks drop thread_id**：此关于 Cron 调度的 Webhook 回调丢失 `thread_id` 的 Bug 已被关闭。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6634))

### 4. 社区热点

- **#6253 `[Feature]: Track: zeroclaw skills support and UX (v0.7.6)`**：此 Issue 是 v0.7.6 版本关于技能系统（Skills）的追踪议题，明确欢迎社区输入。虽然创建于 5 月 1 日，但在今日仍有更新，表明社区对技能系统的改进和用户体验优化有持续关注。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6253))

- **#6553 `[OPEN] fix(observability): restore broken SSE /logs stream; add build-stamped version and health pulse for remote/Docker deployments`**：这是一个高风险、大尺寸的 PR，旨在修复损坏的 SSE 日志流，并为远程/Docker 部署添加版本标记和健康检查。它集成了先前的 PR，在社区中关注度较高。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6553))

### 5. Bug 与稳定性

今日报告了多个影响工作流的严重 Bug，涵盖了核心运行时和多个频道：

- **业务中断级 (S1)**：
    - **#6647 `[Bug]: Cron job output not routed to configured channels`**：Cron 任务的结果仅显示在 Web 面板，无法路由到已配置的频道（如 Telegram），严重阻塞基于 Cron 的工作流。`status: accepted`。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6647))
    - **#6646 `[Bug]: Title: web_search_tool and web_fetch not firing via Telegram channel in v0.7.5`**：在 v0.7.5 版本中，通过 Telegram 频道发起的 `web_search_tool` 和 `web_fetch` 工具无法触发。`status: accepted`。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6646))

- **功能降级 (S2)**：
    - **#6269 `Context compressor drops reasoning_content from compressed assistant messages`**：上下文压缩功能丢弃了助手消息中的 `reasoning_content`，导致依赖该字段的 Provider 行为异常。`status: in-progress`。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6269))
    - **#6648 `[Bug]: cron session_target=main still runs in an isolated cron session`**：即使配置了 `session_target=main`，Cron 任务仍在隔离会话中运行，违背了用户预期。`status: accepted`。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6648))
    - **#6651 `[Bug]: matrix channel leaks ~1 MB Pss per /admin/reload`**：Matrix 频道在每次 `/admin/reload` 时都会发生约 1MB 的内存泄漏，由上游依赖 `matrix-sdk 0.17` 的一个循环引用引起。`status: blocked`（被上游依赖阻塞）。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6651))

- **安全相关**：
    - **#6657 `ci: Advisory scan failed — 2026-05-14`**：CI 依赖扫描失败，报告 `lettre 0.11.21` 包存在 TLS 主机名验证被禁用的安全漏洞。`status: in-progress`。已有对应的修复 PR **#6662**。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6657))
    - **#5122 `[Bug]: web_fetch allowed_private_hosts list is essentially useless for domain names that resolve to private IPs`**：`allowed_private_hosts` 配置对解析为私有 IP 的域名无效，这是一个长期存在的安全配置问题。`status: no-stale`。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5122))

- **其他**：
    - **#6645 `SkillImprover + skill_manage only handle SKILL.toml, not manifest.toml`**：技能改进和管理工具只处理 `SKILL.toml`，忽略了部分内置技能使用的 `manifest.toml` 文件。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6645))
    - **#6654 `[Bug]: Cron read-only queries still hit the writable schema-ensure path`**：Cron 存储的只读查询仍会触发写操作路径，属于轻微设计问题。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6654))

### 6. 功能请求归类

社区在以下领域提出了新的功能请求：
- **频道体验**：
    - **#6663 `feat(telegram): show tool-call progress during partial streaming`**：要求在 Telegram 的 `partial` 流式模式下显示工具调用进度。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6663))
- **会话与路由**：
    - **#6661 `[Feature]: preserve committed streamed output during websocket steering`**：要求在 WebSocket 转向（steering）时保留已提交的流式输出和日志完整性。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6661))
- **安装与兼容性**：
    - **#6658 `[Feature]: Install script support musl aarch64 linux with --prebuilt`**：要求安装脚本支持基于 musl libc 的 aarch64 Linux 设备。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6658))
- **可观测性**：
    - **#6641 & #6642**：两项由同一位贡献者提出的增强特性，分别要求实现**回合级 OTel 链路追踪**（将 llm.call 等跨度嵌套在一个回合追踪下）和**捕获 llm.call 跨度中的完整提示/补全信息**。两者目前均处于 `status: blocked`，等待维护者 `@alexandme` 的响应。
      ([链接1](https://github.com/zeroclaw-labs/zeroclaw/issues/6641))
      ([链接2](https://github.com/zeroclaw-labs/zeroclaw/issues/6642))
- **监控与系统**：
    - **#6653 `feat(update): define host-architecture policy for emulated installs`**：提议 `zeroclaw update` 应检测物理主机的架构而非运行时目标，以正确处理模拟安装。
      ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6653))

### 7. 用户反馈摘要

- **对 Telegram 频道功能的不满**：用户 `@icemann521` 在 **#6647** 和 **#6646** 中详细描述了 Cron 任务输出丢失和工具调用不触发的问题。他们分别提供了配置示例，明确指出这些 Bug 导致其基于 Telegram 频道的工作流完全阻塞。
- **对 `mention_only` 配置的反馈**：用户 `@hirscr` 在 **#6229** 中报告了 `mention_only=true` 在 Telegram 群组中对媒体消息（如图片）无效的问题，并提供了复现步骤。此问题已被关闭，意味着修复已合并。
- **对技能系统一致性的担忧**：用户 `@JordanTheJet` 在 **#6645** 中指出了技能工具只针对 `SKILL.toml` 工作，但内置技能却使用 `manifest.toml` 的不一致问题。这表明技能系统的文档或实现可能存在指引不清的情况。
- **对 cron 会话隔离的困惑**：用户 `@Audacity88` 在 **#6648** 中发现 `session_target=main` 选项并未如文档所述那样工作，实际仍然运行在隔离会话中。这说明现有文档与代码行为之间存在偏差。

### 8. 待处理积压

以下为长期未响应、可能阻塞社区贡献或影响用户体验的重要 Issue/PR：

- **`#5122` `[Bug]: web_fetch allowed_private_hosts list is essentially useless...`**：此安全相关 Bug 自 3 月 29 日创建以来，状态为 `status:no-stale`，目前仍未得到解决。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5122))

- **`#6641` 与 `#6642`**：这两项关于 OTel 链路追踪的重大增强特性，目前均 `status:blocked`，等待维护者 `@alexandme` 的响应。由于该维护者此前在此领域表现活跃，社区贡献者 `@JordanTheJet` 在提交请求时明确指定了期望的负责人。
  ([链接1](https://github.com/zeroclaw-labs/zeroclaw/issues/6641))
  ([链接2](https://github.com/zeroclaw-labs/zeroclaw/issues/6642))

- **`#6553` `fix(observability): ...`**：这是一个综合性修复 PR，希望解决多个关于可观测性的问题时，目前处于开放状态，需要维护者审阅和合并。
  ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6553))

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的 **PicoClaw 项目动态日报**，日期为 **2026 年 5 月 15 日**。

---

## PicoClaw 项目动态日报 | 2026-05-15

### 1. 今日活动概览

在过去的 24 小时内，PicoClaw 项目活动主要围绕依赖项更新展开，共有 23 个 Pull Request 和 9 个 Issue 获得更新。社区贡献者 **@bogdanovich** 活跃度高，提交了多项围绕 Telegram 频道和 Agent 行为的修复性 PR。版本方面，发布了一个自动构建的 Nightly 版本。值得注意的是，多个关于会话历史、消息时间戳和 Agent 角色继承的老旧 Issue 仍在等待跟进，开发者关注度有待提高。

### 2. 版本发布

- **[nightly]: Nightly Build v0.2.8-nightly.20260515.794eb04f**
  - 这是一个自动构建的 Nightly 版本，稳定性未知，仅供测试。
  - **版本链接**: https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260515.794eb04f
  - **变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

### 3. 项目进展

今日合并/关闭了 5 个 PR，主要集中于依赖升级和社区贡献的后端功能推进：

- **依赖项升级**： 项目通过 `dependabot` 合并了多个依赖项更新，包括 `telego` (Telegram Bot lib)、`oapi-sdk-go` (飞书)、`sqlite`、`vite` 等。这确保了项目对上游库稳定性和安全性更新的追随。
- **功能推进 (已合并)**：
  - **[PR #2832]** `feat(web,api): fetch models and saved catalog support`：该 PR 合并了后端 `POST /api/models/fetch` 和 `GET /api/models/saved` 接口，为前端提供了从上游获取模型列表和保存常用模型的功能。
  - **[PR #2766]** `docs: sync all documentation to V3 config format`：合并了文档同步，将 26 个文件更新以匹配新的 V3 配置格式（如 `api_key` → `api_keys`），降低了用户配置迁移的混淆。
- **社区修复（待合并队列）**： 社区成员 **@bogdanovich** 提交了多条修复 PR，包括 `fix(cron): suppress feedback for scheduled turns` 和 `fix(telegram): stop typing for topic replies`，显示了社区对 Telegram 频道体验和后台任务静默性的关注。

### 4. 社区热点

今日最活跃的讨论集中在两个长期存在的 Issue 上：

- **[#629] [BUG] Didn't retry if meet LLM call failed**: 该 Issue 讨论热度最高（14 条评论），用户反映当 LLM 调用返回 HTTP 500 时，任务会挂起而不会自动重试。这暴露了基础架构的健壮性问题，影响长期任务的可靠性。
  - **链接**: https://github.com/sipeed/picoclaw/issues/629
- **[#2171] [CLOSED] [Refactor] Consider moving all OpenAI based endpoints supported to use OpenAI Responses API**: 该 Issue 虽然已于今日关闭，但在关闭前有 11 条评论，讨论了迁移至 OpenAI 新 Responses API 的决策。最终被标记为完成，但可能对后续提供者的兼容性产生影响。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2171

### 5. Bug 与稳定性

今日报告的 Bug 涉及多个模块，按严重程度排列如下：

1.  **关键: LLM 调用失败无重试** (Issue [#629])：LLM 返回 HTTP 500 时任务挂起。这是一个经典的重试逻辑缺失问题，影响所有提供者。**无相关 Fix PR**。
    - **链接**: https://github.com/sipeed/picoclaw/issues/629
2.  **严重: 会话历史竞争条件** (Issue [#2721], 已关闭)：用户报告 `tool_use_id` 400 错误在 v0.2.5 版本中仍然复现。虽然已关闭，但描述中提到“没有可见的修复”，该问题可能被低估。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2721
3.  **重要: 小米模型多轮对话错误** (Issue [#2859])：连接小米 `mimo-2.5` 模型后，经过 2-3 轮对话会因 `Param Incorrect` 失败。这反映了对非主流模型提供者的兼容性问题。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2859
4.  **中等级别: 对话历史显示不全 & 缺少时间戳** (Issues [#2795], [#2787])：用户反馈在切换对话时只看到最后一条消息，且消息列表缺少独立时间戳。这些是用户前端体验的真实痛点，影响可用性。**无相关 Fix PR**。
    - **链接**: https://github.com/sipeed/picoclaw/issues/2795 | https://github.com/sipeed/picoclaw/issues/2787

### 6. 功能请求归类

今日用户主要提出以下功能需求：

- **Agent 角色继承问题** (Issue [#2775])：用户 `@sdjeny` 提出子 Agent 会错误继承根 Agent 的 `AGENT.md` 配置，导致角色混淆。这是一个涉及多 Agent 架构的核心设计问题。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2775
- **小爱/小米模型集成** (Issue [#2859])：用户尝试集成小米 MIMO 模型，并在多轮对话中遇到参数错误。这表明用户对扩展模型支持范围有真实需求。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2859
- **Telegram 话题组触发覆盖** (PR [#2779])：一个社区 PR 尝试为 Telegram 话题组添加独立的触发规则（如 `mention_only`），解决群组配置与话题配置冲突的问题。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2779

### 7. 用户反馈摘要

从今日讨论和 Issue 描述中提取的用户主要反馈点：

- **稳定性痛点**: 用户 `@manhnt9` (Issues #629) 明确提到“Task hang without retry”，这是对任务执行可靠性的直接投诉。
- **模型兼容性痛点**: 用户 `@KeysPAN0114` (Issues #2859) 和 `@gerroon` (Issues #2798) 在不同模型中遇到特定错误，反映项目对新模型的适配速度与质量有待提升。
- **功能期望**: 用户 `@LiusCraft` (Issues #2787) 期望每个消息能有独立的时间戳，而不是共享会话的 `updated` 时间，这是一个符合直觉的简单改进。
- **社区贡献活跃**: 用户 `@bogdanovich` 密集提交多个 Telegram 和 Agent 行为相关的修复，显示了核心贡献者对特定议题的深度投入。

### 8. 待处理积压

以下 Issue/PR 长期未获得有效更新或维护者响应，可能需要重点关注：

- **[#2702] [BUG] Multi-user group channels: conversation history lacks sender attribution**: 该 Issue 关于多用户群聊中会话历史缺少发送者归属的问题，自 2026-04-28 起已有 3 条讨论，但无维护者介入。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2702
- **[#2775] [Feature]子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆**: 该 Feature/Bug 涉及核心的多 Agent 架构，自 2026-05-05 提出后，仅用户界面有反馈，未见开发团队讨论。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2775
- **[#2812] [OPEN] Make a Dockerfile in the root**: 一个来自社区的 Dockerfile 建议，自 2026-05-07 提交后未获得任何合并或关闭动作。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2812

</details>