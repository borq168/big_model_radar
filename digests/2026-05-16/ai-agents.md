# OpenClaw 生态日报 2026-05-16

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-16 02:07 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，遵照您的指示。以下是为 OpenClaw 项目生成的 2026-05-16 项目动态日报。

---

# OpenClaw 项目日报 — 2026-05-16

## 今日活动概览

今日项目活跃度极高，24小时内共有500条Issue和500条PR更新，并发布了2个新版本。新版本v2026.5.16-beta.1主要优化了维护者工具链，并增加了对多语言（英文、简体中文）CLI设置向导的支持。然而，大量新增的PR和Issue导致合并与关闭率较低，社区讨论主要集中在近期版本引入的回归性问题上，特别是与Telegram、Discord等通道集成及Codex后端的兼容性。

## 版本发布

今日发布了两个Beta版本，具体内容如下：

1.  **v2026.5.16-beta.1**
    -   **下载/详情**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.1
    -   **变更内容**:
        -   **维护者工具**: 将Crabox技能的默认路由通过仓库代理的AWS配置，使Blacksmith Testbox成为明确的“选择加入”选项，而非默认选项。
        -   **CLI/引导**: 为设置向导和捆绑的频道设置流程增加了对英文和简体中文的本地化支持。

2.  **v2026.5.14-beta.2**
    -   **下载/详情**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.2
    -   **变更内容**:
        -   **通道/SDK**: 为通道turns构建增加了标准化的命令turn事实，并为插件入站上下文暴露了命令turn助手。
        -   **代理/配置**: 支持**单个代理**的启动文件覆盖配置，如 `contextInjection`, `bootstrapMaxChars`, `bootstrapTotalMaxChars`。

## 项目进展

今日合并或关闭了27个PR，其中一些关键进展包括：

-   **修复Codex后端稳定性**: PR #82378 合并，修复了Codex应用服务器在处理原始工具输出后可能因看门狗超时而导致会话挂起的问题，并增加了相关的回归测试。
-   **增加xAI Grok OAuth支持**: PR #82362 合并，为xAI Grok模型增加了OAuth登录支持，方便SuperGrok订阅用户集成。
-   **修复Android聊天链接点击问题**: PR #82392 合并，修复了Android客户端中聊天消息内的链接无法点击的问题。
-   **合并配置修复**: PR #82391 合并，用于在使用备用网络搜索插件时，对过期的配置状态发出警告。

## 社区热点

今日社区讨论最为活跃的议题集中在近期的回归性Bug上，特别是涉及到通道消息送达、代号变更和版本升级后的不兼容问题。

1.  **MCP工具调用审批请求** [#78308](https://github.com/openclaw/openclaw/issues/78308)
    -   该Issue提议让MCP服务器能够接入现有的 `/approve <id>` 通道审批流程，用于敏感操作。获得了10条评论，表明社区对工具调用的安全性和可控性有强烈需求。

2.  **DeepSeek V4通过OpenRouter返回500错误** [#82150](https://github.com/openclaw/openclaw/issues/82150)
    -   报告了在调用工具后，由于向包含 `tool_calls` 的消息中注入空的 `reasoning_content` 字段，导致DeepSeek V4模型（通过OpenRouter）返回HTTP 500错误。这是一个明确的回归问题，受到了社区高度关注（5条评论，3个赞）。

3.  **Telegram消息静默丢弃** [#80520](https://github.com/openclaw/openclaw/issues/80520)
    -   用户反馈Telegram消息被静默丢弃，网关看似处理了消息，但没有调用发送API，用户也收不到回复。这个问题已经持续数日，影响面广（4条评论，3个赞）。

## Bug 与稳定性

今日报告的Bug主要集中在回归问题、性能退化和特定平台的兼容性上。按严重程度排列如下：

### 严重 Bug

1.  **Agent注入失效 (2026.5.12更新后)** [#81955](https://github.com/openclaw/openclaw/issues/81955)
    -   **状态**: 已关闭
    -   **描述**: 从2026.5.7升级到2026.5.12后，使用Ollama的Agent不再加载身份/人格文件（如IDENTITY.md），导致其行为异常。这是一个严重回归，阻碍了正常使用。

2.  **Telegram孤立入点头部阻塞导致Codex应用服务器空闲超时** [#82274](https://github.com/openclaw/openclaw/issues/82274)
    -   **状态**: 已关闭
    -   **描述**: 报告了两个相关Bug：Telegram频道特定通道的请求会阻塞其他通道；以及在 `custom_tool_call_output` 后，Codex应用服务器会陷入30分钟的空闲超时。

3.  **Codex应用服务器响应交付死锁** [#82343](https://github.com/openclaw/openclaw/issues/82343)
    -   **状态**: 开放中
    -   **描述**: 使用Codex后端的Agent会话成功生成了响应，但响应未能成功发送到Discord或Telegram。证据显示模型输出成功，但交付环节卡住。

### 中低严重度 Bug

4.  **谷歌API 429限流被错误分类为超时** [#81902](https://github.com/openclaw/openclaw/issues/81902)
    -   **状态**: 开放中
    -   **描述**: 谷歌API的速率限制错误（429）被程序误判为超时，无法触发降级到备用提供商的逻辑。

5.  **Telegram部分流式传输最终回复截断** [#82239](https://github.com/openclaw/openclaw/issues/82239)
    -   **状态**: 已关闭
    -   **描述**: 在Telegram群组中使用`streaming.mode = "partial"`时，最终可见的消息被截断，尽管对话记录是完整的。

6.  **小米MiMo提供商因缺少字段导致重播失败** [#82385](https://github.com/openclaw/openclaw/issues/82385)
    -   **状态**: 已关闭
    -   **描述**: 当对话包含工具调用时，MiMo提供商在重播时因缺少 `reasoning_content` 字段而返回400错误。

**注**: 上述已关闭的Issue可能并非指问题已彻底解决，更多是指其被标记为已关闭状态，具体修复进度需查看关联的PR。

## 功能请求归类

-   **通道功能增强**:
    -   [Feature]: Channel-mediated approval for MCP tool calls (consent envelope) [#78308](https://github.com/openclaw/openclaw/issues/78308) - 为MCP工具调用增加审批流程。
    -   [Feature]: Voice messages to agent don‘t work on Matrix [#78016](https://github.com/openclaw/openclaw/issues/78016) - 支持Matrix平台发送语音消息给Agent。
    -   [enhencement]: Feature Request: Configurable upload size limit for Control UI [#71142](https://github.com/openclaw/openclaw/issues/71142) - 允许用户配置Control UI的文件上传大小限制。
    -   [enhancement]: [Feature]: Signal channel: add live tool-call progress (edit-free pattern) [#77202](https://github.com/openclaw/openclaw/issues/77202) - 为Signal频道增加工具调用进度显示。

-   **开发与运维工具**:
    -   Ship version-matched bundled docs + native docs retrieval for agent-guided onboarding [#71301](https://github.com/openclaw/openclaw/issues/71301) - 随版本发布打包的本地文档，并支持Agent检索。
    -   feat: add i18n fields for slash command descriptions [#79458](https://github.com/openclaw/openclaw/issues/79458) - 为斜杠命令的描述字段增加国际化(i18n)功能。

## 用户反馈摘要

-   **升级之痛**: 多个用户报告在升级到最新版（2026.5.12及之后版本）后出现严重功能失效，例如Agent人格丢失（[#81955](https://github.com/openclaw/openclaw/issues/81955)）和多个关键功能同时崩溃（[#81934](https://github.com/openclaw/openclaw/issues/81934)）。这反映出版本发布的稳定性有待加强。
-   **通道交付问题**: Telegram和Discord通道的投递问题依然是用户最大的痛点，包括消息静默丢弃（[#80520](https://github.com/openclaw/openclaw/issues/80520)）和回复被错误地路由到其他聊天（如WebChat或私信，而非群组）（[#77576](https://github.com/openclaw/openclaw/issues/77576), [#79308](https://github.com/openclaw/openclaw/issues/79308)）。
-   **模型集成复杂性**: 用户在使用第三方模型（如DeepSeek、小米MiMo）时遇到了兼容性问题（[#82150](https://github.com/openclaw/openclaw/issues/82150), [#82385](https://github.com/openclaw/openclaw/issues/82385)），表明项目与不同AI提供商的适配工作需要持续投入。

## 待处理积压

-   **功能/增强请求**:
    -   [Feature]: Voice messages to agent don't work on Matrix [#78016](https://github.com/openclaw/openclaw/issues/78016) (2026-05-05) - Matrix语音消息支持，已10天无维护者回复，目前有9条社区评论。
    -   Ship version-matched bundled docs + native docs retrieval for agent-guided onboarding [#71301](https://github.com/openclaw/openclaw/issues/71301) (2026-04-25) - 本地化文档需求，已搁置近一个月。
    -   [enhancement]: [Feature]: Signal channel: add live tool-call progress (edit-free pattern) [#77202](https://github.com/openclaw/openclaw/issues/77202) (2026-05-04) - 信号频道功能增强，待维护者评估。
-   **长期未解决的重要Bug**:
    -   [bug, regression] [Bug]: Switching from openai-codex/gpt-5.4 to codex/gpt-5.4 can trigger runaway context growth and off-task workspace contamination [#68209](https://github.com/openclaw/openclaw/issues/68209) (2026-04-17) - 模型切换引发上下文失控问题，已存在近一个月。
    -   [Bug]: Agent bootstrap takes 3+ minutes per turn; core-plugin-tools, system-prompt, stream-setup each 45-75s [#77532](https://github.com/openclaw/openclaw/issues/77532) (2026-05-04) - Agent启动耗时过长，严重影响用户体验。
    -   [Bug]: WebChat keeps polling after provider 429/idle timeout and only shows assistant failure after refresh [#79803](https://github.com/openclaw/openclaw/issues/79803) (2026-05-09) - WebChat界面在错误发生时无法及时反馈，用户体验差。

---

## 横向生态对比

好的，这是根据您提供的2026-05-16各项目动态摘要生成的横向对比分析报告。

---

# AI智能体与个人AI助手开源生态横向对比日报 — 2026-05-16

## 1. 今日横向概览

今日各项目均保持活跃，但焦点各异。OpenClaw 活动量最大（超1000条Issue/PR更新），但社区讨论与Bug报告高度集中于近期版本引入的通道交付与后端兼容性回归问题。NanoBot 和 PicoClaw 同样在修复通道相关（WebUI、Matrix）的稳定性与功能Bug。Zeroclaw 社区则集中揭露了 SOP（标准作业程序）与技能（Skills）模块在架构实现与文档上的严重脱节问题，并对此提出多份深度报告。跨项目来看，通道交付稳定性、第三方模型集成兼容性，以及对工具调用（MCP）安全性的关注是今日共同的技术热点。

## 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新 | 今日 PR 更新 | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500条 | ~500条 | 2个 Beta 版 | 活跃度最高，但合并/关闭率低 (仅27个PR)；回归Bug是社区讨论焦点。 |
| **NanoBot** | 57条 (5条新开/活跃) | 20条 (5条待合并) | 0 | 新增功能较丰富（Goal/Long-task, Lifecycle hooks），但WebUI有回归Bug待修复。 |
| **Zeroclaw** | 23条 (14条新开/活跃) | 50条 (46条待合并) | 0 | 社区高质量Bug报告多，但PR合并效率极低，导致大量修复积压。 |
| **PicoClaw** | 11条 | 32条 | 1个 Nightly 版 | 专注于修复 Matrix 信道、MiMo模型集成等具体Bug，功能请求相对零散。 |

## 3. OpenClaw 与同类对照

- **活动量级**: OpenClaw 的活动量（500+ Issue & PR）远超其他项目，属于大型项目的典型流量特征。其问题多源于版本迭代后的回归，而其他项目则在解决特定的、范围更小的问题。
- **技术重点**: OpenClaw 今日的技术工作集中在修复由多通道集成（Telegram, Discord, Codex）引发的复杂交互 Bug；NanoBot 则在积极引入新功能（长期任务、生命周期钩子）并优化核心性能（WebUI、Cache key）；Zeroclaw 的焦点在于审计和修补其核心功能（SOP, Skills）的严重架构缺陷；PicoClaw 则在逐个修复特定平台的集成细节（Matrix, MiMo）。
- **社区讨论**: OpenClaw 的社区讨论主要围绕“升级后无法使用”的普遍性回归问题，情绪偏向焦虑；Zeroclaw 社区用户展现出很高的技术深度，能够发现并详细报告架构层面的设计缺陷；NanoBot 和 PicoClaw 的社区反馈则更具体，聚焦于单一功能的故障或缺失。

## 4. 共同出现的技术方向

1.  **通道交付与稳定性**：多项目都出现了特定通道（Telegram, Discord, Matrix, WebChat）消息投递失败或行为异常（消息静默丢弃、内容截断、发送者身份丢失）的问题。
    - **涉及项目**: OpenClaw, NanoBot, Zeroclaw, PicoClaw。
    - **具体诉求**: 用户要求修复消息通道的可靠性，确保消息能正确、完整地送达目标用户。

2.  **第三方模型/提供商的兼容性**：在集成非OpenAI标准模型时，普遍遇到因字段格式/缺失导致的错误，例如小米MiMo、DeepSeek的 `reasoning_content` 字段问题。
    - **涉及项目**: OpenClaw, Zeroclaw, PicoClaw。
    - **具体诉求**: 用户希望项目能更好地兼容不同AI提供商的API差异，特别是在处理推理/思考模型（Thinking Mode）的输出时。

3.  **工具系统的安全性与可控性**：关于工具调用的安全审批流程（MCP Tool Call Approval）和在执行前对Shell命令进行安全扫描（Tirith, TOTP）的需求在多项目中被提出。
    - **涉及项目**: OpenClaw, PicoClaw。
    - **具体诉求**: 用户要求在敏感操作（如执行Shell命令、调用外部工具）前增加审批或安全扫描机制。

## 5. 差异化定位分析

- **功能侧重**:
    - **OpenClaw**: 大型通用平台，侧重多智能体编排、多通道集成与统一网关。今日动态显示其因功能复杂而面临回归风险。
    - **NanoBot**: 专注于单Agent的易用性与功能丰富度，强调WebUI体验和生命周期管理。动态显示其正积极引入长期任务等高级Agent能力。
    - **Zeroclaw**: 强调技能（Skills）和标准作业程序（SOP）的模块化与可编排性，定位更偏向企业级工作流自动化。今日社区反馈显示其架构设计有问题，但目标用户专业度高。
    - **PicoClaw**: 面向嵌入式或轻量级部署场景（SiPEED），侧重硬件适配与基础功能稳定性。动态显示其正解决具体硬件/平台（Matrix, Android, MiMo）的集成问题。
- **目标用户**:
    - **OpenClaw**: 社区贡献者与高端玩家，愿意尝试最新功能，但也承担回归风险。
    - **NanoBot**: 追求开箱即用体验的开发者与个人用户，注重界面与功能的流畅性。
    - **Zeroclaw**: 具有较强研发能力的专业用户或团队，期望通过SOP/技能实现高度定制化的工作流。
    - **PicoClaw**: 嵌入式开发者或特定平台（Matrix, Android）用户，看重对特定硬件的支持。
- **技术架构**:
    - **OpenClaw**: Rust为主的高性能、高并发架构，强调通道抽象与维护者工具链。
    - **NanoBot**: 架构灵活，快速迭代，今日新增Goal（目标）等状态管理概念。
    - **Zeroclaw**: Rust架构，深度依赖MQTT代理与异步技能引擎，但因两个独立的SOP引擎实例引发架构问题。
    - **PicoClaw**: 轻量级架构，与硬件关联紧密，今日大量PR/Issue围绕特定外接服务/硬件的适配。

## 6. 社区活跃度记录

基于今日的项目活动量（Issue+PR更新数）、版本发布记录和社区讨论热度，进行以下活跃度分层：

- **高活跃度**: **OpenClaw** (超千条动态，2个Beta版发布，高度活跃的社区讨论)
- **中等活跃度**: **NanoBot** (近80条动态，无版本发布，有活跃的社区热点Issue); **PicoClaw** (40余条动态，1个Nightly版，有聚焦的社区反馈)
- **低活跃度**[有待验证，证据不足]：**Zeroclaw** (70余条动态，但PR积压严重，版本发布停滞在v0.8前的状态。)

**说明**: 活跃度基于今日单日数据，不评估项目整体健康度或成熟度。Zeroclaw的活跃度虽体现在数量上，但PR合并效率极低，可能反映了项目维护节奏或资源分配上的问题。

## 7. 有证据支撑的观察

1.  **回归Bug成为普遍痛点**：多个项目在近期版本更新后，出现了影响用户核心体验的回归Bug。例如，OpenClaw的通道消息静默丢弃（#80520）、Agent人格注入失效（#81955）；NanoBot的WebUI打印显示错乱（#3790）；Zeroclaw的小米模型 `reasoning_content` 丢失（#6672）。这表明在快速迭代过程中，对核心路径的回归测试可能需要加强。
2.  **MCP协议关注度上升**：来自OpenClaw（#78308）和PicoClaw（#2626, #2811）的用户同时表达了对MCP（Model Context Protocol）的支持或功能增强需求，这包括对MCP工具调用增加审批流程，以及增强MCP传输协议的支持。这印证了MCP在AI智能体生态中正逐步成为事实性的工具调用协议标准。
3.  **社区对安全可控性的需求明确**：用户不再满足于Agent能够“做任何事”，而是提出了对敏感操作（如Shell命令、工具调用）进行事中审批（OpenClaw #78308）和事前安全扫描（PicoClaw #2877）的明确需求。这反映了AI Agent从实验性功能向生产环境工具演进过程中的必要安全考量。
4.  **用户对低门槛、非标准模型集成意愿强**：社区用户积极尝试接入DeepSeek、小米MiMo等非OpenAI标准或高性价比模型，并愿意为此报告兼容性问题（OpenClaw #82150, Zeroclaw #6672, PicoClaw #2859）。这表明开源社区正在主动探索和推动AI基础模型的多样化，对开源中间件的模型兼容性提出了更高要求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，以下是今日的 NanoBot 项目动态日报。

---

# NanoBot 项目动态日报 | 2026-05-16

## 今日活动概览

过去 24 小时内，NanoBot 项目保持着较高的活跃度。共产生 57 条 Issue 更新（其中 5 条为新开或活跃状态），以及 20 条 Pull Request 更新（其中 5 条待合并）。尽管无新版本发布，但项目在 Bug 修复、功能完善和文档建设方面均有显著进展。值得注意的是，大量文档构建和代码注释类的 Issue 在今日被集中关闭，显示出项目团队正在系统性地提升项目质量与可读性。关键的 WebUI 渲染和性能 Bug 得到了快速响应，同时新的 “计划（plan）” 工具和长期任务工具的功能 PR 也在持续推进中。

## 版本发布

今日无新版本发布。

## 项目进展

今日合并/关闭了多项重要的 Pull Request，推进了多个关键功能的修复：

- **WebUI 性能优化**：PR #3782 `fix(webui): remove eager markdown preload` 已合并。该 PR 通过移除启动时预加载大型 Markdown/代码渲染块，显著提升了 WebUI 的首次加载性能。
- **长期任务与目标功能**：PR #3788 `feat(goal): /goal command & long-running tasks (long_task)` 已合并。该 PR 引入了聊天范围的持续目标状态，并集成了长期任务工具，为构建复杂的多步骤 Agent 任务提供了官方支持。
- **网关生命周期通知**：PR #3373 `feat: add gateway lifecycle notification hooks (on_start/on_stop)` 和 PR #3792 `feat: add gateway lifecycle notification hooks in feishu` 已合并。这两个 PR 实现了 Gateway 在启动和停止时的通知钩子，方便用户在后台运行时感知服务状态。
- **Codex 提供商缓存键修复**：PR #3793 `fix(codex): stabilize prompt cache key` 已合并，解决了 `openai_codex` 提供商在多轮对话中因 Prompt 缓存键不稳定导致缓存命中率低的问题。
- **安全与鲁棒性提升**：
    - PR #3842 `fix(message): confine local media attachments` 已合并，限制了在工作区模式下的本地媒体附件路径，防止潜在的安全攻击。
    - PR #3840 `fix(web): back off Brave search rate limits` 已合并，为 Brave 搜索工具增加了限流重试机制，提高了工具的鲁棒性。
    - PR #3789 `fix(feishu): confine downloaded media filenames` 已合并，提升了飞书通道在媒体下载时的文件名安全性。
- **工具重构**：PR #3841 `refactor(tools): remove GlobTool` 已合并。由于 `GrepTool` 已经能够实现文件名筛选的功能，因此移除了冗余的 `GlobTool`，精简了工具系统。

## 社区热点

- **WebUI 打印显示错乱 (#3790)**: 该 Issue 是当前讨论热度最高的开放问题，获得了 9 条评论。用户报告在更新至最新的 5.13 版本后，WebUI 的打印内容出现显示错乱，需要手动刷新页面才能恢复。这表明该 Bug 对用户的实际使用体验造成了明显干扰，引起了社区的广泛关注。
    - **链接**: https://github.com/HKUDS/nanobot/issues/3790
- **Gateway 生命周期通知特性 (#3279)**: 尽管该 Issue 已于今日关闭，但其作为功能请求在社区中曾获得 1 个赞并引起了讨论。用户希望在以 systemd 服务方式运行时能感知 Gateway 的状态。该需求已由 PR #3373 和 #3792 分别实现，展示了社区需求到功能落地的完整流程。
    - **链接**: https://github.com/HKUDS/nanobot/issues/3279

## Bug 与稳定性

- **【严重】WebUI 打印内容错乱 (#3790)**: 更新源码后出现，需刷新页面才能恢复。目前仍处于开放状态，尚未有关联的修复 PR。
    - **链接**: https://github.com/HKUDS/nanobot/issues/3790
- **【一般】WebUI 渲染 Bug (#3848)**: 用户报告的 WebUI 渲染问题，已在今天迅速关闭，推测已被快速修复或确认为无效问题。
    - **链接**: https://github.com/HKUDS/nanobot/issues/3848
- **【已修复】Codex Prompt 缓存键不稳定 (#2440)**: 已被 PR #3793 修复。该 Bug 会导致每次对话都产生新的缓存键，影响 API 调用性能和成本。
    - **链接**: https://github.com/HKUDS/nanobot/issues/2440
- **【已修复】OpenAI 代码执行器 per-turn Prompt 哈希问题 (#2440)**: 该 PR #3793 同时也解决了 `openai_codex` 使用 per-turn 哈希作为缓存键的错误，确保了对话内缓存键的稳定性。
    - **链接**: https://github.com/HKUDS/nanobot/issues/2440

## 功能请求归类

- **安全增强**:
    - **Issue #2172**: 请求支持通过文件或命令执行来引用密钥，而非在 `config.json` 中明文存储。该需求因涉及安全核心，长期受到关注。
        - **链接**: https://github.com/HKUDS/nanobot/issues/2172
- **新工具/能力**:
    - **PR #3847 (待合并)**: 引入 `skill_load` 工具，防止多轮对话中技能文件内容丢失。
        - **链接**: https://github.com/HKUDS/nanobot/pull/3847
    - **PR #3791 (待合并)**: 引入 `plan` 工具，允许 Agent 在执行复杂多步骤任务前进行任务分解和进度跟踪。
        - **链接**: https://github.com/HKUDS/nanobot/pull/3791
    - **PR #3785 (待合并)**: 增加 **OpenCode Go** 网关提供商支持，聚合多个国产大模型 API。
        - **链接**: https://github.com/HKUDS/nanobot/pull/3785
- **流程/生命周期**:
    - **PR #3373 & #3792 (已合并)**: 实现了 Gateway 生命周期通知钩子（启动/停止）。
        - **链接**: https://github.com/HKUDS/nanobot/pull/3373
- **集成/适配**:
    - **PR #3752 (已合并)**: 修复了 WhatsApp 语音消息转录后媒体路径残留的问题。
        - **链接**: https://github.com/HKUDS/nanobot/pull/3752

## 用户反馈摘要

- **痛点**:
    - **WebUI 稳定性**: 用户在 Issue #3790 中明确表达了因 WebUI 打印显示错乱而导致使用不便的困扰，这是目前最直接的负面反馈。
    - **安全问题**: Issue #2172 的长期存在，表明部分用户对当前明文存储密钥的方式感到担忧，认为这是一个安全噩梦。
    - **API 效率**: Issue #2440 中用户报告了因 Prompt 缓存键设计问题导致的高昂 API 调用成本，此问题已得到解决。
- **满意点**:
    - **功能响应**: 用户提交的 Gateway 生命周期通知需求 (#3279) 在较短时间内得到了 PR 实现并合并，体现了项目对社区需求的有效响应。

## 待处理积压

- **安全特性请求 (#2172)**: 关于支持密钥引用的功能请求已开放近两个月，至今仍有 4 条评论。鉴于其涉及安全性，建议维护团队审视优先级，并考虑在后续版本中纳入规划。
    - **链接**: https://github.com/HKUDS/nanobot/issues/2172
- **活跃 Bug (#3790)**: 影响用户正常使用的 WebUI 打印错乱问题尚未有修复 PR 关联，需要项目组重点关注和排查。
    - **链接**: https://github.com/HKUDS/nanobot/issues/3790
- **待合并特性 PR**: 三个重要的功能 PR（#3791 `plan` 工具、#3847 `skill_load` 工具、#3785 OpenCode Go 网关）仍处于待合并状态，它们代表了社区贡献的最新方向，值得关注。
    - **链接**: https://github.com/HKUDS/nanobot/pull/3791
    - **链接**: https://github.com/HKUDS/nanobot/pull/3847
    - **链接**: https://github.com/HKUDS/nanobot/pull/3785

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目 GitHub 数据生成的 2026-05-16 项目动态日报。

---

## Zeroclaw 项目动态日报 — 2026-05-16

### 今日活动概览

过去24小时内，Zeroclaw 项目开发活动密集，主要集中在 bug 修复、技能 (skills) 和标准作业程序 (SOP) 功能的审计与修复上。共有 23 条 Issues 更新，其中新开或活跃 14 条，关闭 9 条。Pull Request 方面，有 50 条更新，但绝大多数（46 条）仍处于待合并状态，合并效率有待提升。本轮未发布新版本。

### 项目进展

今日合并或关闭的 Pull Request 数量较少，但相关 Issues 的关闭表明部分关键问题已找到解决方案并落地。

- **Matrix 频道修复**：`#6525` 修复了 Matrix 频道的线程错误，避免了在根时间轴消息上错误地创建线程。该 PR 状态为 [CLOSED]。
- **CI 安全扫描修复**：`#6657` 指出的依赖项安全公告（`lettre` crate TLS 问题）已被关闭，表明该漏洞已通过更新依赖解决。

### 社区热点

社区讨论热度集中在标准作业程序 (SOP) 和技能 (skills) 功能上，由用户 `@JordanTheJet` 发起的一系列 Issues 引发了广泛关注。

1.  **SOP 运行引擎的架构问题**：`#6687`、`#6686`、`#6685` 和 `#6689` 集中暴露了 SOP 功能的代码与文档脱节问题。核心问题在于存在两个独立的 `SopEngine` 实例（分别用于 agent 和 MQTT），导致状态不共享；此外，文档中承诺的 HTTP fan-in 端点、cron 触发器以及持久化审计功能均未被实际执行或接通。这些 Issues 揭示了 SOP 功能存在严重的实现不完整和文档误导问题。

2.  **技能 (Skills) 功能的稳定性问题**：`#6681` 和 `#6683` 报告了两个影响技能功能的 Bug。
    - `#6681` 指出从 ClawHub 安装技能时，因为 `reqwest::blocking` 客户端与 tokio 异步运行时冲突，导致程序直接崩溃，属于 `S1 - workflow blocked` 严重性问题。
    - `#6683` 指出技能补丁 (patch) 操作无限执行，因为代码中已有的冷却 (cooldown) 检查逻辑在生产路径上未被调用。

### Bug 与稳定性

过去 24 小时内报告了多个严重 bug，部分已有对应的修复 Pull Request。

**S0 - 数据丢失 / 安全风险**
- **小米思考模式模型问题**：`#6672` 报告在使用小米的 `mimo-v2.5` 系列模型时，`reasoning_content` 在 agent 循环中丢失，可能导致后续推理错误。目前无修复 PR。
- **工具名称违反 API 规则**：`#6678` 报告技能工具的名称格式（`{category}.{name}`）不符合 Anthropic API 的命名规范，导致所有请求失败。目前无修复 PR。

**S1 - 工作流阻塞**
- **技能安装崩溃**：`#6681` 报告 `zeroclaw skills install clawhub:*` 命令会立即崩溃。已有对应的修复 PR `#6682`（`fix(skills): run ClawHub install on the async runtime`）。

**S2 - 行为降级**
- **SOP 功能未实现/有缺陷**：`#6687`、`#6686`、`#6685`、`#6689` 系列问题表明 SOP 功能的多个核心组件（如 HTTP 接口、cron 触发器、审计日志）存在代码未接通或文档错误的问题。
- **RUST_LOG 文档过时**：`#6691` 指出调试文档中建议的 `RUST_LOG=zeroclaw=debug` 过滤器已失效，无法产生预期的输出。

**高关注度修复 PR（待合并）**
- **技能冷却机制**：`#6684` 修复了技能补丁操作无限执行的问题，通过代码启用已有的冷却检查。此修复解决了 `#6683`。
- **技能功能修复**：`#6682` 解决了技能安装时的崩溃问题（`#6681`）。
- **Delegate Agent 配置**：`#6688` 修复了 delegate agent 忽略 `prompt_injection_mode` 配置的问题，避免小上下文模型因注入过多内容而报错。
- **可观测性修复**：`#6553` 修复了 SSE `/logs` 流中断的问题，并引入了构建时间和健康检测功能。

### 功能请求归类

- **技能 (Skills) 相关**：`#6670` 提议将 `zeroclaw skills install` 的 CLI 输出进行本地化（Fluent 国际化）。已有对应的功能 PR `#6674`（`feat(skills): localize install output with Fluent`）。
- **可观测性**：`#6669` 提议审计并确保所有可观测性后端（指标、追踪）的数据能够正确路由到已配置的导出器。
- **新频道支持**：`#6680` 提交了大型 PR，为微信企业微信 (WeCom) 的 AI Bot 添加了基于 WebSocket 的频道支持。

### 用户反馈摘要

- **技能安装体验差**：用户 `@NiuBlibing` 在 `#6681` 中反馈，尝试安装 ClawHub 的技能立即导致程序崩溃，这是一个严重的工作流阻塞问题。
- **功能文档与实际脱节**：用户 `@JordanTheJet` 的多条 Issues（`#6689`, `#6685`, `#6686`）明确指出，SOP 功能的文档描述了丰富的功能，但对应的代码实现根本不存在或未被正确集成，这严重影响了用户对功能的信任和使用。

### 待处理积压

- **超大型 PR 待审**：`#6398`（`v0.8.0: Multi-Agent Runtime and Schema V3`）和 `#6611`（`feat(file-rotation)`）是重量级的变更，长时间处于待审状态。尤其是 `#6398`，作为多 Agent 运行时和模式 V3 的重大更新，其审查进度直接影响项目发展路线。
- **长期待决的 TOTP 安全门控**：`#5779`（`feat(security): add gated_commands TOTP gate for shell tool`）自 4 月 15 日起即被标记为 `needs-author-action`，作者暂停了回复，但此功能对 shell 工具的安全性至关重要，建议维护者跟进。
- **SearXNG 搜索支持**：`#5316`（`[Feature]: Propose SearXNG search support`）从 4 月 5 日起开放，虽有更新但未获得合并，是提升 Web 搜索健壮性和隐私性的一个用户明确提出的需求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为您生成的项目动态日报。

---

# PicoClaw 项目动态日报 - 2026-05-16

## 1. 今日活动概览

今日项目活跃度较高，共产生 11 条 Issues 更新和 32 条 PR 更新。项目发布了新的 Nightly 构建版本。社区焦点集中在修复 Matrix 信道的多个关键 Bug、完善 `load_image` 工具的可配置性，以及对 `exec` 工具安全守卫逻辑的改进。总体来看，项目进入密集的 Bug 修复和稳定性提升阶段。

## 2. 版本发布

- **Nightly Build v0.2.8-nightly.20260516.0df050ff**
  - 这是一个自动化构建版本，可能不稳定，仅供测试使用。
  - **对比链接**：https://github.com/sipeed/picoclaw/compare/v0.2.8...main

## 3. 项目进展（合并/关闭的重要 PR）

- **图像处理与配置**：PR [#2874](https://github.com/sipeed/picoclaw/pull/2874) 和 [#2879](https://github.com/sipeed/picoclaw/pull/2879) 相继合并和创建，修复了 `pico` 客户端与 `pico_client` 通道中图像媒体信息的传递问题，并解决了 `load_image` 工具在 `config.json` 中无法配置的问题。
- **MiMo 模型集成修复**：PR [#2862](https://github.com/sipeed/picoclaw/pull/2862) 已合并，修复了小米 MiMo 模型在多轮对话中因推理模式 (`thinking_mode`) 导致 400 错误的问题，使其与 DeepSeek 的推理回放逻辑对齐。
- **MCP 协议增强**：PR [#2811](https://github.com/sipeed/picoclaw/pull/2811) 已合并，为 MCP 传输配置增加了流式 HTTP 别名和请求-响应模式支持，并引入了一个通用的 Docker 集成测试框架。
- **文档同步**：PR [#2766](https://github.com/sipeed/picoclaw/pull/2766) 已合并，将 26 个文件中的配置文档同步到最新的 V3 配置格式。

## 4. 社区热点

- **Matrix 信道 Bug 集中爆发**：用户 [@adinapoli](https://github.com/adinapoli) 在同一日内报告了三个关于 Matrix 信道的独立 Bug:
  - [#2815](https://github.com/sipeed/picoclaw/issues/2815): `allow_from` 过滤器完全失效，任何非空值都会阻止所有消息。
  - [#2816](https://github.com/sipeed/picoclaw/issues/2816): 发送者身份信息（`userID`）未注入到 Agent 上下文中，导致 Agent 无法得知消息来源。
  - [#2827](https://github.com/sipeed/picoclaw/pull/2827): 对应的修复 PR 已创建，指出原因是矩阵用户 ID 中的冒号 (`:`) 导致解析错误。
  **分析**：社区对 Matrix 信道的功能完善和稳定性有强烈需求，这些 Bug 严重影响了基于 Matrix 的部署体验。

- **语音识别集成问题**：Issue [#2817](https://github.com/sipeed/picoclaw/issues/2817) 报告语音转录成功，但 LLM 模型收到的是 `[voice]` 占位符而非转录文本，导致模型尝试自行转录，流程断裂。该问题影响了所有使用 Groq Whisper 等语音服务的用户。

## 5. Bug 与稳定性

- **严重 Bug - Matrix 信道**：
  - `allow_from` 过滤无效 (Issue [#2815](https://github.com/sipeed/picoclaw/issues/2815))，有修复 PR [#2827](https://github.com/sipeed/picoclaw/pull/2827)。
  - 发送者身份缺失 (Issue [#2816](https://github.com/sipeed/picoclaw/issues/2816))，有修复 PR [#2827](https://github.com/sipeed/picoclaw/pull/2827)。
- **频繁 Bug - 工具与配置**：
  - `exec` 工具的 `guardCommand` 方法误判相对路径命令为非法路径 (Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042))，有修复 PR [#2814](https://github.com/sipeed/picoclaw/pull/2814)。
  - `load_image` 工具无法在配置文件中禁用 (Issue [#2878](https://github.com/sipeed/picoclaw/issues/2878))，对应修复 PR [#2879](https://github.com/sipeed/picoclaw/pull/2879) 今日创建。
- **回归/集成问题**：
  - Android 端 v0.2.8 版本无法访问 Tab 页面数据 (Issue [#2744](https://github.com/sipeed/picoclaw/issues/2744))。
  - 集成小米 MiMo 模型时，多轮对话因 `reasoning` 参数不正确导致 400 错误 (Issue [#2859](https://github.com/sipeed/picoclaw/issues/2859))，已通过 PR [#2862](https://github.com/sipeed/picoclaw/pull/2862) 修复。

## 6. 功能请求归类

- **Provider 集成**：
  - **LM Studio 快捷连接** (Issue [#28](https://github.com/sipeed/picoclaw/issues/28))：请求提供一个更简单的连接 LM Studio 的方式。
  - **DeepSeek V4 Thinking Model 支持** (Issue [#2706](https://github.com/sipeed/picoclaw/issues/2706))：请求支持 DeepSeek V4 模型的 Thinking 模式，该问题已关闭。
- **渠道功能**：
  - **飞书通知优化** (Issue [#2785](https://github.com/sipeed/picoclaw/issues/2785))：希望飞书渠道在 `separate_messages` 为 `false` 时，通知中心只显示第一条工具调用消息。
- **用户体验**：
  - **非破坏性会话重置** (Issue [#2820](https://github.com/sipeed/picoclaw/issues/2820))：请求一个不删除历史记录的非破坏性 `/clear` 命令，以支持无缝的“分叉”工作流。
- **模型/工具**：
  - **原生音频输入支持** (PR [#2626](https://github.com/sipeed/picoclaw/pull/2626)，已关闭)：为 Gemini 等多模态模型添加原生音频输入支持。
- **安全与部署**：
  - **Tirith 预执行扫描** (PR [#2877](https://github.com/sipeed/picoclaw/pull/2877) 今日创建)：请求为 `exec` shell 工具添加基于 `Tirith` 的可选预执行命令安全扫描。

## 7. 用户反馈摘要

- **痛点**：
  - **Matrix 集成不完善**：用户 [@adinapoli](https://github.com/adinapoli) 连续提交多个 Matrix 信道 Bug，指出即使配置了 `allow_from` 也无法使用，体验很差。
  - **配置项缺失**：用户 [@coolyu0916](https://github.com/coolyu0916) 在 Issue [#2878](https://github.com/sipeed/picoclaw/issues/2878) 中指出，`load_image` 工具无法通过配置文件关闭，导致软件行为与配置预期不符。
  - **语音功能断裂**：用户 [@aliksend](https://github.com/aliksend) 在 Issue [#2817](https://github.com/sipeed/picoclaw/issues/2817) 中提到，语音转录功能看似成功，但 LLM 收到的是 `[voice]` 占位符，使得该功能在关键链路中断，几乎不可用。
- **使用场景**：
  - **低成本模型**：用户 [@KeysPAN0114](https://github.com/KeysPAN0114) 在 Issue [#2859](https://github.com/sipeed/picoclaw/issues/2859) 中正在测试集成小米 MiMo 这类免费、非主流模型，显示出社区在探索低成本 LLM 接入 PicoClaw 的意图。
  - **跨平台集成**：用户 [@xpader](https://github.com/xpader) 在 Issue [#2785](https://github.com/sipeed/picoclaw/issues/2785) 中，报告的是将 PicoClaw 接入飞书后的通知体验问题，表明其项目已实际部署在飞书环境中。

## 8. 待处理积压

- **长期悬而未决的 Bug/Feature**：
  - **LM Studio Easy Connect** (Issue [#28](https://github.com/sipeed/picoclaw/issues/28)) 创建于 3 个月前，仍有 19 条评论，是社区长期关注的 feature request，但未有维护者明确响应或给出方案。
  - **exec 工具 guardCommand 问题** (Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042)) 创建于 2 个月前，对应的修复 PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) 已开放数天，等待合并。
- **等待合并的 PR**：目前有 13 个 PR 处于开放待合并状态，其中包括大量由 [@bogdanovich](https://github.com/bogdanovich) 提交的修复 Telegram 和 Agent 上下文问题的 PR (如 [#2794](https://github.com/sipeed/picoclaw/pull/2794), [#2791](https://github.com/sipeed/picoclaw/pull/2791), [#2756](https://github.com/sipeed/picoclaw/pull/2756))，这些 PR 对提升聊天体验至关重要，建议尽快评审合并。

</details>