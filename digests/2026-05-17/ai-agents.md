# OpenClaw 生态日报 2026-05-17

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-17 02:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是您要求的 OpenClaw 项目 2026-05-17 动态日报。

---

# OpenClaw 项目日报 — 2026-05-17

## 1. 今日活动概览

过去24小时内，OpenClaw 项目呈现高活跃度，共更新了500条 Issue 和500条 PR，其中新开/活跃 Issue 416条，待合并 PR 419条。项目发布了两个新的 Beta 版本（v2026.5.16-beta.2 和 v2026.5.16-beta.3），主要引入了对 xAI Grok 的 OAuth 登录支持，并为 CLI 的 cron 任务增加了`--wait`等高级控制功能。社区讨论聚焦于会话管理、内存泄漏、安全漏洞及多 Agent 稳定性等关键问题，多个高优先级 Bug 报告获得了大量关注。

## 2. 版本发布

项目于今日发布了两个 Beta 版本。

- **v2026.5.16-beta.3**: 该版本主要包含以下变更：
    - **Providers/xAI**: 为 SuperGrok 订阅者增加了 xAI Grok OAuth 登录功能，允许使用`xai/*`模型及 xAI 媒体/工具提供商在无需设置`XAI_API_KEY`环境变量的情况下完成认证。
    - **CLI/cron**: 为`openclaw cron run`命令增加了`--wait`选项，支持超时和轮询间隔控制。同时，新增了`cron.runs --run-id`精确过滤功能。

- **v2026.5.16-beta.2**: 该版本的变更内容与 v2026.5.16-beta.3 完全相同。

## 3. 项目进展

以下为今日被合并或关闭的重要 PR，代表了项目在特定功能或修复上的推进：

- **[PR #82819] fix(cli): resolve web command SecretRefs**: 修复了 CLI `infer web search/fetch`命令在解析SecretRefs时的问题，确保能正确识别提供商密钥。
- **[Issue #78461] Gateway re-scans plugin metadata during model normalization**: 该 Issue 今日被关闭。它报告了网关在模型别名规范化过程中会重复扫描插件元数据，导致不必要的性能开销。
- **[PR #82699] fix(cli): resolve plugin web search SecretRefs for infer web search**: 已合并，修复了`openclaw infer web search`命令无法解析插件中`webSearch.apiKey`的问题。
- **[Issue #45706] [Bug]: error=HTTP 422 "Check open ai req parameter error"**: 已关闭。该 Issue 报告了本地部署的 DeepSeek 模型通过兼容 OpenAI 接口调用时出现的参数错误问题。

## 4. 社区热点

今日讨论最活跃的议题反映了用户对系统稳定性与可靠性的深切关注：

- **[Bug]: Feishu monitor state cleanup incomplete - potential memory leak in httpServers Map** [#48183](https://github.com/openclaw/openclaw/issues/48183): 该 Issue 以17条评论位居热度榜首。用户报告了飞书插件在停止监控时，由于 httpServers Map 中的条目在服务器完全关闭前被删除，可能导致内存泄漏。这引发了社区对资源清理流程严谨性的讨论。

- **[Bug]: Stuck processing sessions are detected but never aborted — gateway requires external restart to recover** [#71127](https://github.com/openclaw/openclaw/issues/71127): 该议题以14条评论位列第二。用户指出诊断系统虽然能检测到“卡住”的处理会话并发出警告，但运行时缺乏自动恢复机制，导致网关无法自我修复，需要外部重启。社区普遍认为这是一个严重的故障恢复能力缺陷。

- **[Feature]: safe/unsafe ClawdBot** [#6731](https://github.com/openclaw/openclaw/issues/6731): 尽管是功能请求，但获得了12条评论。用户从 Rust 语言的安全性概念出发，提出了为 ClawdBot 增加沙盒“安全模式”的建议，以保护用户免受未定义行为和根权限访问的威胁，体现了社区对安全性的高度关注。

- **[Bug]: gh-issues skill: untrusted issue body injected directly into sub-agent prompt** [#45740](https://github.com/openclaw/openclaw/issues/45740): 同样有12条评论，这是一个严重的安全问题。用户报告 `gh-issues` 技能会将未经验证的 Issue 正文直接注入到子 Agent 的提示词中，存在注入攻击风险，引起了广泛讨论。

- **Gateway re-scans plugin metadata during model normalization** [#78461](https://github.com/openclaw/openclaw/issues/78461): 虽然是已关闭的Issue，但因其获得了3个👍而值得关注。用户建议优化网关的插件元数据缓存机制，避免在模型解析过程中重复扫描，这反映了社区对性能优化的持续需求。

## 5. Bug 与稳定性

今日报告的 Bug 涵盖了内存管理、安全漏洞、功能回退和系统稳定性等多个方面。以下按严重程度排列：

**高严重性 (P1)**
- **[Bug]: Stuck processing sessions are detected but never aborted** [#71127](https://github.com/openclaw/openclaw/issues/71127): 会话卡住导致网关需外部重启，目前已无自动恢复机制。
- **[Bug]: gh-issues skill: untrusted issue body injected directly into sub-agent prompt** [#45740](https://github.com/openclaw/openclaw/issues/45740): 未处理的 Issue 正文注入子 Agent 提示词，存在严重安全风险。
- **[Bug]: Repeated hard resets on same session key despite high reserveTokensFloor** [#63216](https://github.com/openclaw/openclaw/issues/63216): 即使配置了高`reserveTokensFloor`，仍出现频繁的硬重置，用户报告了重试循环问题。
- **[Bug]: Subagent completion silently lost** [#44925](https://github.com/openclaw/openclaw/issues/44925): 子 Agent 任务完成后结果静默丢失，无重试、无通知。
- **[Bug]: TUI: Input typed during model generation is swallowed and incorrectly queued for the next turn** [#45326](https://github.com/openclaw/openclaw/issues/45326): TUI 中打断模型生成失败，输入被吞并错误地在下一轮执行。
- **[Bug]: Multi-agent orchestration is unstable** [#43367](https://github.com/openclaw/openclaw/issues/43367): 多 Agent 编排不稳定，存在配置覆盖、会话锁失败和工作进程脱离等问题。
- **[Bug]: Cron agent jobs silently time out during sustained LLM API outages** [#45494](https://github.com/openclaw/openclaw/issues/45494): Cron 任务在 LLM API 持续错误时静默超时，而非快速失败。
- **[Bug]: 500 v.content is not iterable** [#43795](https://github.com/openclaw/openclaw/issues/43795): 运行时出现“v.content is not iterable”错误，导致500内部错误。
- **[Bug]: [Windows] exec() and read() commands corrupted with `</arg_value>>` suffix** [#48780](https://github.com/openclaw/openclaw/issues/48780): Windows 系统上 `exec()` 和 `read()` 工具调用被错误地附加了`</arg_value>>`后缀。
- **[Bug]: Compaction retry creates orphan fork in parentId chain** [#48810](https://github.com/openclaw/openclaw/issues/48810): 压缩重试在事件链中产生“孤儿分支”，破坏了链重构。
- **[Bug]: Fallback models not triggered on provider-level errors** [#44353](https://github.com/openclaw/openclaw/issues/44353): 当主模型因提供商级别错误失败时，配置的回退模型未能触发。
- **[Bug]: 500 v.content is not iterable** [#43795](https://github.com/openclaw/openclaw/issues/43795): 一个严重的运行时错误，重复出现并影响系统稳定性。

**中高严重性 (P2)**
- **[Bug]: Feishu monitor state cleanup incomplete** [#48183](https://github.com/openclaw/openclaw/issues/48183): 飞书插件潜在的内存泄漏问题。
- **[Bug]: Embedded-run session state leak** [#48573](https://github.com/openclaw/openclaw/issues/48573): 内嵌运行的子 Agent 会话状态泄露，产生僵尸 Agent。
- **[Bug]: Heartbeat/Cron "Current time" timestamp is stale** [#44993](https://github.com/openclaw/openclaw/issues/44993): Heartbeat/Cron 消息中的“当前时间”时间戳未更新，影响 Agent 判断。
- **[Bug]: Control UI becomes progressively stuck** [#45698](https://github.com/openclaw/openclaw/issues/45698): 控制面板在长时间打开后变得卡顿。
- **[Bug]: Memory management is in chaos** [#43747](https://github.com/openclaw/openclaw/issues/43747): 用户报告内存管理表现不一致，存在混乱。
- **[Bug]: Early abort response templates are not populated** [#45314](https://github.com/openclaw/openclaw/issues/45314): 早期中止命令的响应模板变量未被填充。
- **[Bug]: apply_patch is treated as an unknown/plugin-only tool** [#45269](https://github.com/openclaw/openclaw/issues/45269): `apply_patch`工具在 Agent 策略管道中被错误识别，导致无法在 Agent 路由的执行中使用。
- **[Bug]: Control UI Avatar not displaying** [#41201](https://github.com/openclaw/openclaw/issues/41201): 控制面板头像无法显示，属于回退问题。
- **[Bug]: Token usage shows 0/200k for Volcengine coding plan** [#44845](https://github.com/openclaw/openclaw/issues/44845): 使用火山引擎编程计划时，Token 使用量显示为0。
- **[Bug]: Session hangs indefinitely when compaction times out** [#43661](https://github.com/openclaw/openclaw/issues/43661): 压缩超时导致会话无限挂起并重复发送消息。

**其他**
- **[Bug]: OPENCLAW_HOME 设置为 ~/.openclaw 时产生嵌套目录** [#45765](https://github.com/openclaw/openclaw/issues/45765): 环境变量配置导致目录嵌套错误。
- **[Bug]: OPENCLAW_CONFIG_DIR cannot contain whitespace** [#44599](https://github.com/openclaw/openclaw/issues/44599): 配置文件路径不能包含空格。
- **[Bug]: Cron job with sessionTarget: "main" triggers both systemEvent and reminder despite delivery.mode: "none"** [#44922](https://github.com/openclaw/openclaw/issues/44922): Cron 任务忽略`delivery.mode`配置，触发双重事件。
- **[Bug]: local memory embeddings on Apple Silicon can crash gateway** [#44202](https://github.com/openclaw/openclaw/issues/44202): Apple Silicon 上的本地内存嵌入功能可能导致网关崩溃。
- **[Bug]: Discord leaks internal tool-call traces** [#44905](https://github.com/openclaw/openclaw/issues/44905): Discord 渠道泄露内部 LLM 工具调用痕迹。

## 6. 功能请求归类

以下是用户提出的具有代表性的新功能需求：

- **安全与沙箱**: [#6731](https://github.com/openclaw/openclaw/issues/6731) safe/unsafe ClawdBot， [#45031](https://github.com/openclaw/openclaw/issues/45031) 技能安装时内置安全扫描， [#7722](https://github.com/openclaw/openclaw/issues/7722) 文件系统沙箱化配置。
- **成本与管理**: [#42475](https://github.com/openclaw/openclaw/issues/42475) 网关级别的每 Agent 成本预算执行， [#45565](https://github.com/openclaw/openclaw/issues/45565) 将生命周期告警路由到专用频道。
- **性能与资源**: [#45608](https://github.com/openclaw/openclaw/issues/45608) 重置前进行 Agent 内存刷新， [#43260](https://github.com/openclaw/openclaw/issues/43260) 支持 SKILL.md 中的`model`字段进行按技能模型路由， [#8299](https://github.com/openclaw/openclaw/issues/8299) 配置选项以抑制子 Agent 宣告。
- **交互与用户体验**: [#48874](https://github.com/openclaw/openclaw/issues/48874) 多会话架构RFC， [#42840](https://github.com/openclaw/openclaw/issues/42840) 控制面板支持 MathJax/LaTeX 渲染， [#7476](https://github.com/openclaw/openclaw/issues/7476) WhatsApp 贴纸发送支持， [#49178](https://github.com/openclaw/openclaw/issues/49178) 可复用的网关 WebSocket 客户端 SDK。
- **工具与扩展**: [#44431](https://github.com/openclaw/openclaw/issues/44431) 浏览器工具7项改进， [#40001](https://github.com/openclaw/openclaw/issues/40001) `write`工具增加追加模式， [#45778](https://github.com/openclaw/openclaw/issues/45778) 技能通过 crontab 推送后台消息， [#45758](https://github.com/openclaw/openclaw/issues/45758) 支持 YAML 配置文件格式。
- **集成与兼容性**: [#45550](https://github.com/openclaw/openclaw/issues/45550) 迁移 Anthropic 1M上下文到GA， [#43015](https://github.com/openclaw/openclaw/issues/43015) `message.send`模式过度暴露导致 GPT 自动填充错误。
- **相关PR**: [PR #69312](https://github.com/openclaw/openclaw/pull/69312) 修复了 MEDIA 指令从缩进代码块中误提取的问题， [PR #69310](https://github.com/openclaw/openclaw/pull/69310) 将丢弃的 media 信息对用户可见而非静默处理。

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点和使用场景：

- **对系统稳定性和恢复能力的普遍担忧**: 多个高热度 Bug（如#71127卡住会话、#43661压缩超时挂起）表明，用户在真实使用场景中频繁遭遇会话无响应或无限挂起的情况。用户期望系统能在出现问题时自动恢复，而不是依赖外部重启或手动干预。
- **对会话和内存管理一致性的强烈需求**: 用户反馈（如#43747）显示，不同用户的 OpenClaw 实例在内存管理行为上存在显著差异，有的进行大量分块和嵌入，有的则随机存储，导致了混乱。这表明用户期望一个可预测、统一且文档完备的内存管理策略。
- **安全与隐私是高优先级关注点**: 针对 Issue #45740 (Issue 正文注入) 和 #44905 (Discord 泄漏工具调用) 的讨论表明，社区对 Agent 系统的安全边界和信息泄露非常敏感。用户希望在技能使用和消息分发时获得更强的隔离和保护。
- **对TUI和UI交互体验的精细化要求**: 用户报告 TUI 的打断功能失败（#45326）和控制面板的卡顿（#45698），表明用户在日常交互中对流畅、无中断的体验有较高期待，任何输入处理的异常都会被视为严重的可用性问题。
- **对特定工具和功能的定制化需求**: 用户提出了例如`write`工具追加模式（#40001）、浏览器工具改进（#44431）和 YAML 配置支持（#45758）等具体且细致的功能请求，反映出用户在使用过程中遇到了特定的工作流瓶颈，并希望项目能提供更柔性、更符合现有工具习惯的配置方式。

## 8. 待处理积压

以下为长期未响应或未解决的重要 Issue/PR，提醒维护者关注：

- **[Feature]: safe/unsafe ClawdBot** [#6731](https://github.com/openclaw/openclaw/issues/6731): 自2026年2月2日提出，持续有社区关注和讨论（12条评论），涉及项目安全架构的根本性提议。
- **[Feature Request: Filesystem Sandboxing Config (tools.fileAccess)** [#7722](https://github.com/openclaw/openclaw/issues/7722): 自202

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的资深技术分析师，以下是基于今日（2026-05-17）各项目动态生成的横向对比分析报告。

---

### AI智能体开源生态横向对比报告 | 2026-05-17

#### 1. 今日横向概览

今日，四个项目均保持高活跃度，但展现出的活动模式与侧重点差异显著。**OpenClaw** 继续以庞大的Issue和PR数量（合计超千条）主导社区讨论，其焦点集中在系统稳定性、内存泄漏和会话恢复等底层架构问题上。**NanoBot** 与 **Zeroclaw** 则表现出明确的功能迭代节奏，分别通过v0.2.0版本引入`/goal`长期任务机制和通过多个重要PR修复Provider异常与技能冷却逻辑。相比之下，**PicoClaw** 的体量最小，活动主要集中在微信多账号配置这一具体功能的实现与讨论上。社区对“原生邮件通道”的持续需求成为其独特亮点。

#### 2. 各项目活跃度对比

| 项目名称 | Issues 更新数 (新开/活跃) | PR 更新数 (待合并/已处理) | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~416条 | ~419条 | `v2026.5.16-beta.2` `v2026.5.16-beta.3` | 社区讨论核心聚焦于卡死会话、内存泄漏与安全注入等高危Bug。 |
| **NanoBot** | 7条 (4新开/已关闭3) | 26个 (10待处理/16已合并) | `v0.2.0` | 核心功能更新为`/goal`机制，已合并多项Agent循环重构与Bug修复PR。 |
| **Zeroclaw** | 50条 (45新开/5已关闭) | 50条 (40待合并/10已处理) | 无 | 今日提交修复PR较多，覆盖Provider、Skills、Gateway多个组件，社区对Webhook功能期待已久。 |
| **PicoClaw** | 4条 (3新开/1已关闭) | 4个 (3待合并/1已合并) | `v0.2.8-nightly` | 社区热议点集中在“微信多账号管理”和“原生邮件通道”功能。 |

#### 3. OpenClaw与同类对照

*   **活动量维度**：OpenClaw 的Issue和PR活跃度（合计超800条）远超其他三个项目。这与它作为“核心参照”项目的定位相符，社区规模更大，问题反馈和功能讨论更为密集和庞杂。
*   **技术重点维度**：OpenClaw 今日的重心在于**生存性**和**可靠性**，其讨论的核心是“会话卡死”、“内存泄漏”、“注入攻击”等系统稳定性与安全问题。而 **NanoBot** 和 **Zeroclaw** 则更侧重于**功能迭代**与**架构优化**，例如引入新的Agent机制、重构核心循环、修复Provider兼容性等。
*   **社区讨论面**：OpenClaw 的社区讨论面更广，涉及TUI体验、多Agent编排、成本预算等多个高抽象层级话题。相比之下，**NanoBot** 和 **Zeroclaw** 的讨论则更集中于具体Bug修复和新功能实现，如DeepSeek模型支持、技能冷却、OAuth登录等，更具工具性。

#### 4. 共同出现的技术方向

基于今日数据，多个项目都出现了对以下方向的明确需求或改进：

1.  **OAuth/高级认证支持**：
    - **OpenClaw**: 发布了支持xAI Grok OAuth登录的Beta版本。
    - **Zeroclaw**: 社区活跃讨论为Ollama Cloud、Kimi等Provider添加订阅原生OAuth支持的需求 (#5601)。
    - **PicoClaw**: 虽然未直接提及OAuth，但其“微信多账号配置”功能本质上也是解决复杂认证和账号管理问题。
    - **总结**: 社区正积极摆脱对静态API密钥的依赖，转向更安全、更易管理的OAuth认证模式。

2.  **内存与资源管理**：
    - **OpenClaw**: 报告了多个严重Bug，如飞书插件内存泄漏 (#48183)、网关会话状态泄漏 (#48573) 和内存管理混乱 (#43747)。
    - **NanoBot**: 其`/goal`机制要求Agent在长期任务中保持状态，间接对内存管理提出了更高要求。
    - **Zeroclaw**: 关注点在Provider流清理等资源回收环节，避免恐慌崩溃 (#6712)。
    - **总结**: 随着Agent系统运行时间增长和任务复杂性增加，精细化的内存管理和无泄漏的资源释放成为所有项目的共同技术挑战。

3.  **沙箱与安全隔离**：
    - **OpenClaw**: 用户提出“safe/unsafe ClawdBot”沙盒模式 (#6731)，并报告了Issue正文注入子Agent的严重安全漏洞 (#45740)。
    - **Zeroclaw**: 用户提出为Agent添加能力标志以控制workspace逃逸 (#6729)，以及按技能隔离脚本/命令权限的需求 (#5775)。
    - **总结**: 安全隔离不再只是功能选项，而是保障系统可靠性的核心诉求。社区希望在工具调用、技能执行和跨Agent通信层面建立更严格的安全边界。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全栈AI智能体平台，强调复杂编排、网关、会话管理。 | 轻量级、高交互性Agent，侧重多渠道对话与长期任务。 | 可编程、可扩展的Agent框架，强调技能、Webhook与Provider多样性。 | 轻量化边缘Agent，聚焦于移动端使用与渠道连接。 |
| **目标用户** | 高级开发者、系统运维人员，需要深度定制和监控。 | 注重交互体验的开发者、个人用户。 | 追求灵活性和自动化的开发者，需要将Agent集成到工作流中。 | 移动设备用户、对资源占用敏感的用户。 |
| **技术架构** | 核心-网关-渠道分离，多Agent编排架构。 | 聚焦于Agent核心循环，强调上下文管理与工具调用优化。 | 技能驱动，强调Provider与渠道的插件化集成。 | 客户端-服务器架构，注重端侧模型支持与本地数据处理。 |
| **今日证据** | PR集中在CLI、Gateway修复；高热度Bug涉及会话管理、内存泄漏。 | v0.2.0发布，聚焦`/goal`长期任务；PR重构Agent核心循环。 | PR修复技能冷却、Provider超时；社区讨论Webhook、SMTP等功能请求。 | PR实现微信多账号；社区热议原生邮件通道。 |

#### 6. 社区活跃度记录

*   **第一梯队（极高活跃度）**:
    - **OpenClaw**: 基数巨大，以Issue/PR的绝对数量和高热度Bug讨论为标志。
*   **第二梯队（高活跃度）**:
    - **NanoBot** 与 **Zeroclaw**: 均保持稳定的版本迭代和功能开发节奏，PR合并率高，社区讨论聚焦。
*   **第三梯队（中等活跃度）**:
    - **PicoClaw**: 活跃度较前三者低一个量级，但社区在特定功能点（如邮件通道、微信配置）上有深度讨论和贡献。

#### 7. 有证据支撑的观察

1.  **稳定性与安全性成为核心痛点**：**OpenClaw** 今日报告了超过10个被标记为高严重性（P1）的Bug，涉及会话卡死、内存泄漏、安全注入等系统级问题。这与 **NanoBot** 和 **Zeroclaw** 也关注资源管理和安全边界的需求相呼应，表明当前AI智能体生态正从“功能可用”进入“系统可靠”阶段。

2.  **功能演进路径分化明显**：**OpenClaw** 在向企业级平台演进，关注整体架构的健壮性与恢复能力；**NanoBot** 在向“长期任务型Agent”演进，通过`/goal`机制提升任务持续性；**Zeroclaw** 在向“工作流集成工具”演进，强化技能管理和Webhook自动化。**PicoClaw** 则在向“个人专属助理”演进，优化移动端多渠道接入体验。

3.  **Provider兼容性是持续的挑战与机会**：**NanoBot** 和 **Zeroclaw** 今日都有专门针对特定Provider（如DeepSeek、MiMo、Codex、Kimi）的修复或功能请求。这表明，在模型服务商快速迭代的背景下，开源框架的Provider兼容性直接影响了用户体验和采用率，是项目需要持续投入资源的方向。

4.  **社区贡献呈现“热门功能”共鸣**：**PicoClaw** 的“微信多账号配置”出现了两个实现方式不同的PR（#2881与#2883），**Zeroclaw** 的“Webhook transforms”是一个存在数月仍被讨论的长期需求。这说明社区在特定功能点上会形成共鸣，并出现多路径尝试，引导维护者关注并做出决策。

5.  **今日暂无明确跨项目信号**：四个项目今日的活动未显示出明显的技术趋同或相互借鉴的迹象，各自沿着自身的定位路径独立发展。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 NanoBot 项目数据生成的 2026 年 5 月 17 日项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-17

### 1. 今日活动概览

截至 2026 年 5 月 16 日，NanoBot 项目在过去 24 小时内保持高度活跃。社区提交了 **26 个 Pull Request**，其中 **16 个已被合并或关闭**，另有 **10 个等待处理**。Issues 方面，共有 **7 条更新**，其中 **4 个为新开或活跃问题**，**3 个已关闭**。此外，项目发布了 **v0.2.0** 版本，该版本引入了 `/goal` 机制，使智能体能够持续追踪并维护一个长期目标。主要工作集中在 Agent 核心逻辑重构、多渠道支持和多个 Bug 修复上。

### 2. 版本发布

- **v0.2.0**: 🐈 **nanobot `v0.2.0`** 🎉 — 合并了 105 个 PR，新增 20 位贡献者。核心亮点是引入了 `/goal` 命令。现在，用户可以通过 `long_task` 将某个对话线程标记为持续目标，该目标会作为运行时上下文（Runtime Context）在每一轮对话中固定存在，即使在上下文压缩或长时间工具调用后也不会丢失。**未提及破坏性变更或迁移注意事项。**

### 3. 项目进展

今日合并/关闭了多项重要 PR，推进了 Agent 核心机制的稳定性和扩展性。

- **Agent 循环重构**: 系列重构 PR (#3856, #3858) 将检查点（checkpoint）和对话轮次持久化逻辑从庞大的 `loop.py` 中提取到独立的 `checkpoint.py` 和 `turn_writer.py` 模块，提高了代码的可读性和可维护性。
- **Goal 状态修复**: PR #3861 修复了 `llm_timeout_s` 超时仅在运行开始时计算一次的问题。现在，如果在对话中途通过 `/goal` 启用了长期任务，超时时间会随之动态调整。
- **DeepSeek 消息处理**: PR #3869（开放中）和 #3864（已合并）着力解决 DeepSeek 模型的消息兼容性问题，包括处理 `null` 内容导致的 400 错误、占位符泄露以及识别中文限流错误“访问量过大”。
- **MiMo 思考控制**: PR #3851（已合并）修复了通过 OpenRouter 等网关使用小米 MiMo 模型时，`reasoning_effort` 参数无法关闭思考过程的 Bug。
- **Docker 构建修复**: PR #3870（开放中）修复了因 `hatch_build.py` 文件在 Docker 构建镜像中缺失而导致的构建失败问题。

### 4. 社区热点

- **[#3790 [bug] WebUI会话-打印内容显示错乱](https://github.com/HKUDS/nanobot/issues/3790)**: 该 Issue 是今日讨论最活跃的话题，共获得 **12 条评论**。用户反馈在更新到 5.13 版本后，WebUI 的会话日志打印出现显示错乱，需要通过刷新页面才能恢复。这反映了用户对 WebUI 界面稳定性和基础交互体验的高要求。
- **[#3869 fix(providers): DeepSeek message hardening — preserve content, sanitize null/empty](https://github.com/HKUDS/nanobot/pull/3869)**: 该 PR 针对 DeepSeek 提供了一系列消息格式修复，虽然评论数不多，但根据其摘要描述，它解决了社区用户在使用 DeepSeek 模型时遇到的三个具体痛点（400 错误、占位符泄露、消息内容丢失），显示了社区对主流模型支持优化的迫切需求。
- **[#3728 feat(agent): add LoopDetectHook and ReflectRetryHook for agent self-correction](https://github.com/HKUDS/nanobot/pull/3728)**: 该 PR 已开放一周，旨在解决 Agent 常见的工具调用死循环和无意义重试问题。这种自我纠错机制是提升智能体自主性和鲁棒性的关键，受到了社区的持续关注。

### 5. Bug 与稳定性

- **[严重] WebUI 显示错乱** (@kxsk-git, #3790): 特定版本更新后，WebUI 会话内容打印出现错乱，需刷新页面恢复。用户提供了清晰的复现步骤，但暂未关联修复 PR。
- **[重要] 微信登录失败** (@KennethYCK, #3863): 用户反馈使用扫码登录微信时被提示“微信版本较低”，即使已更新至最新版本。该问题影响了核心渠道功能，需要维护者排查。
- **[重要] MiMo 思考控制失效** (@ClearPlume, #3845): 通过 OpenRouter 等网关调用 MiMo 模型时，关闭思考过程的参数不生效。该问题已由 PR #3851 修复，并由 PR #3867 进一步跟进。
- **[严重] 服务端 500 错误** (@prakmyl, #3857): 用户在启动项目的 Web 前端时遇到 HTTP 500 错误，导致无法正常使用。此问题可能涉及服务端环境或配置，暂无关联修复 PR。

### 6. 功能请求归类

- **技能管理增强** (@mkitsdts, #3846): 用户提出增强多轮对话中技能（skill）内容的处理能力。当前系统依赖 `read_file` 工具加载技能定义，这在多轮对话中可能不够高效或精确。此 issue 已获得 1 个 👍。
- **WebUI 对等节点发现** (@DreamShepherd2006, #3854): 提出在 WebUI 的启动端点上增加 `peers` 字段，以支持多实例编排场景下发现其他 Agent 实例。相关 PR 已提交。
- **新增 Signal 渠道** (@zayfod, #3852): 新增对 Signal 即时通讯软件的支持，作为新的聊天渠道。该功能包括私聊、群聊、Markdown 转换、附件处理等，表明社区正在扩展项目的通讯渠道生态。
- **BM25 技能路由** (@Krislu1221, #3865): 提出使用轻量级 BM25 算法进行技能选择，目的是在每次对话时只注入最相关的几个技能描述到系统提示词中，从而减少 token 消耗约 60%。相关 PR 已提交。

### 7. 用户反馈摘要

- **UI 稳定性诉求**: 用户 `kxsk-git` 在 #3790 中详细描述了 WebUI 显示错乱的问题，集中体现了社区用户对图形界面稳定性和一致性的高度关注。刷新页面作为一种临时“workaround”，说明该问题影响用户体验但可能非数据损坏。
- **安全与合规担忧**: 在已关闭的 Issue #2172 中，其讨论的“以明文形式存储密钥不安全”的议题在新 PR #3866 中通过文档增强得到了回应。这表明用户对安全性的诉求未被遗忘，并在逐步落地。
- **模型兼容性**: 用户 `ClearPlume` 在 #3845 中报告 MiMo 模型通过特定渠道调用时的逻辑错误，以及用户 `KennethYCK` 报告的微信登录失败，都反馈了集成第三方服务和模型时常见的版本兼容与参数传递问题。

### 8. 待处理积压

- **[Feature/Security] 密钥引用支持** (@EvanNotFound, #2172): 一个从 3 月 17 日起已关闭的 feature request，虽已关闭但方案未完全实现。今日有 PR #3866 作为后续工作，以文档形式增加了更多环境变量示例。维护者仍需关注以正式代码形式落地该功能。
- **[PR] 多 Agent 邮箱渠道插件** (@chengyongru, #3461): 该 PR 于 4 月 26 日提交，旨在提供一个用于 Agent 间通信的文件系统邮箱插件。虽然该 PR 今日已被合并，但其从提交到合并跨越近三周，表明此类跨 Agent 的复杂功能需要较长的审查和测试周期。

---

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-17)

## 1. 今日活动概览

过去 24 小时，Zeroclaw 项目共产生 50 条 Issue 更新（新开/活跃 45 条，关闭 5 条），以及 50 条 Pull Request 更新（待合并 40 条，已合并/关闭 10 条）。无新版本发布。社区活跃度较高，多个涉及 Provider、Skills、Gateway 的 Bug 和功能请求得到集中讨论或提交修复 PR；今天新开的 Issue 集中在配置、安全、渠道稳定性方面。

## 2. 版本发布

无。

## 3. 项目进展

今日合并/关闭的重要 PR（部分摘要）：

- [#6728 [CLOSED] feat(web-dashboard): M5.0 — Overview page + shared SectionNav](https://github.com/zeroclaw-labs/zeroclaw/pull/6728)
  添加了 Web 仪表盘的概览页面（/overview），包含 Memory、Crons、Integrations、Skills 四张摘要卡片，并提取共享的 SectionNav 组件。该 PR 基于 master 分支，已合并。

- [#6725 [OPEN] fix(skills): enforce cooldown in skill_manage patch action](https://github.com/zeroclaw-labs/zeroclaw/pull/6725)
  针对 Skills 系统 `skill_manage` 的 `patch` 动作，将原本未连接的冷却时间检查（`should_improve_skill`、`is_on_disk_cooldown`）真正应用到生产路径，防止无限制的补丁写入。该 PR 解决 Issue #6683。

- [#6719 [OPEN] fix(runtime,channels): persist model_switch across turns in all paths](https://github.com/zeroclaw-labs/zeroclaw/pull/6719)
  修复 `model_switch` 在渠道通道（通过 `set_route_selection()` 持久化）和运行时路径中的不持久问题，使切换后的模型在对话轮次间保持生效。

- [#6700 [OPEN] feat(gateway): Add skills management API with enable/disable toggle and web dashboard](https://github.com/zeroclaw-labs/zeroclaw/pull/6700)
  为 Gateway 添加技能的启用/禁用 API，并集成到 Web 仪表盘页面。

- [#6709 [OPEN] feat(debug): restore --log-llm payload tracing](https://github.com/zeroclaw-labs/zeroclaw/pull/6709)
  恢复曾被回退的 `--log-llm` 调试标志，用于 #6074 恢复工作的原始负载追踪。

- [#6712 [OPEN] fix(provider): replace expect_err panic with propagated error in Codex stream cleanup](https://github.com/zeroclaw-labs/zeroclaw/pull/6712)
  将 Codex 流清理中的 `expect_err` 恐慌替换为可恢复的 Provider 错误传播，提升稳定性。

## 4. 社区热点

- **#6123 [已关闭] "default_model issue on fresh install"**
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6123
  评论数：18（最高）
  用户 `@rgnyldz` 报告在新 LXC 容器中安装 ZeroClaw 后，配置默认模型出现问题（Ollama 运行在另一容器），导致 agent 工作流被阻塞。该 Issue 已关闭，但期间有 18 条评论，是今日最活跃的热点。

- **#5600 "Use kimi-code provider in streaming chat call tools, provider API reports an error"**
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5600
  评论数：8
  用户 `@hvvvvvvv` 报告使用 kimi-code 提供商进行流式对话调用工具时，收到 400 Bad Request 错误，涉及 `reasoning_content` 缺失。该 Issue 仍处于 `needs-repro` 状态，需要维护者复现。

- **#2467 "Webhook transforms"**
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/2467
  评论数：5
  社区长期的功能请求：希望 Webhook 系统支持自定义路径和 payload 转换，以便与任意 Webhook 发送方（如 GitHub Webhook）兼容。该 Issue 自 3 月 2 日创建，至今未实现，持续受到关注。

- **#5601 "Add subscription-native OAuth support for Ollama Cloud, z.ai, Kimi, MiniMax"**
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5601
  评论数：5
  用户 `@dolsol3` 建议为四个新提供商添加订阅原生 OAuth 登录支持，减少对静态 API 密钥的管理。社区对此需求有 +1 反应。

## 5. Bug 与稳定性

按严重程度排列，标注是否有 fix PR。

- **严重性 S1（工作流阻塞）**
  - [#6123 [已关闭] default_model issue on fresh install](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — 已关闭，可能已修复或用户调整配置解决。
  - [#6399 [已关闭] Custom remote provider sends local image file paths instead of data URLs](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) — 用户 `@vanbukin` 在 Raspberry Pi 4B 上使用远程 vLLM 服务器时，自定义远程提供商发送本地文件路径而非 data URL，导致多模态请求失败。已关闭，推测有修复。
  - [#5600 [OPEN] kimi-code streaming error](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — 仍处于 `needs-repro`，暂无 fix PR。
  - [#6721 [OPEN] tool_search not in default_auto_approve → webhook silently hangs 120s](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) — `tool_search` 未被列入默认的自动批准列表，在非交互式 webhook 模式下会挂起 120 秒后自动拒绝。无 fix PR。

- **严重性 S2（降级行为）**
  - [#6269 [OPEN] Context compressor drops reasoning_content](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) — 上下文压缩器丢失了 assistant 消息中的 `reasoning_content`，影响需要该字段的提供商。已有 #5652 等 PR 在推进原生 extended thinking，但针对该 Bug 尚无直接 fix。
  - [#6173 [OPEN] model_switch tool does not persist across turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) — 已由 PR #6719 直接修复（见项目进展）。

- **其他高风险 Bug**
  - [#6683 [OPEN] skill_manage `patch` ignores cooldown](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) — 已由 PR #6725 修复（见项目进展）。
  - [#6724 [OPEN] Channels supervisor crashloops when all configured channels have enabled=false](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) — 所有渠道均设为 `enabled=false` 时，渠道编排器立即退出，supervisor 每 2 秒重启，导致崩溃循环。无 fix PR。
  - [#6723 [OPEN] Native OpenAI provider hardcodes 120s request timeout, silently ignores timeout_secs config](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) — 原生 OpenAI 提供商硬编码 120 秒超时，无视用户配置的 `timeout_secs`。无 fix PR。

## 6. 功能请求归类

以下为过去 24 小时有更新（包括新创建或讨论活跃）的功能请求：

- **技能与安全管理**
  - [#6729 [NEW] Agent capability flags for shared/ access and workspace escape](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) — 建议为 agent 添加能力标志，控制对 shared/ 目录的读取和 workspace 的逃逸。
  - [#6253 [OPEN] Track: zeroclaw skills support and UX (v0.7.6)](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — v0.7.6 主题追踪，社区反馈征集。
  - [#5775 [OPEN] per-skill security permissions — scoped allow_scripts and allowed_commands](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) — 按技能隔离脚本/命令权限，避免全局开启。
  - [#6165 [OPEN] prefer lighter ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — 建议移除可通过 Skills 替代的内置工具（如 jira、gws-cli），改为 Skill 驱动的架构。

- **渠道与集成**
  - [#5573 [OPEN] Send Emails via SMTP as a channel](https://github.com/zeroclaw-labs/zeroclaw/issues/5573) — 将 SMTP 发送邮件作为渠道，用于 cron 任务结果通知。
  - [#5604 [OPEN] Mattermost 私信支持](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) — 让 bot 支持与 Mattermost 用户私信沟通。
  - [#5745 [OPEN] PDF support in tools](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) — 工具链支持 PDF 文件下载、读取、共享。
  - [#5907 [OPEN] LSP support](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — 集成语言服务器协议，辅助 agent 编程。

- **配置与运行时**
  - [#5843 [OPEN] Model wise Reasoning Configuration](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) — 将推理设置（`reasoning_enabled`、`reasoning_effort`）从全局迁移到模型级别。
  - [#5607 [OPEN] pre-hook skip gates for cron jobs and SOP triggers](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) — cron 任务前添加轻量级前提条件检查，根据脚本返回值决定是否跳过。
  - [#5882 [OPEN] Ratatui-based agent mode REPL](https://github.com/zeroclaw-labs/zeroclaw/issues/5882) — 为终端交互提供类似 Claude Code / Codex 的 agent 模式。

- **安全与治理**
  - [#5601 [OPEN] Subscription-native OAuth 支持](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) — 为多个提供商增加订阅内 OAuth 认证。
  - [#5842 [OPEN] Evaluate extra_args validation / allowlist for security-affecting Codex CLI flags](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) — 评估 Codex CLI 额外参数的安全影响，建议加入白名单。

- **其他**
  - [#5908 [OPEN] GitHub Actions CI/CD container builds for Debian image](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) — 为每次 PR 和发布自动构建并推送 Debian 容器镜像。
  - [#5994 [OPEN] Build Official Website + End-to-End Documentation](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) — 建设官方文档网站作为主要入口。

## 7. 用户反馈摘要

- **#6123**：用户 `@rgnyldz` 反映“全新安装后默认模型配置

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 PicoClaw 项目数据生成的 2026-05-17 项目动态日报。

---

# PicoClaw 项目日报 | 2026-05-17

## 今日活动概览
过去24小时内，PicoClaw 项目活动频繁。社区提交并活跃了 4 个新 Issue，同时关闭了 1 个陈旧 Issue。Pull Request 方面有 3 个新提交待合并，1 个已合并。项目发布了最新的 Nightly 构建版本 v0.2.8-nightly。值得关注的动态包括：用户对添加原生邮件通道的讨论持续进行，已有针对微信多账号配置功能的两次提交，以及一个关于 Android 客户端存储权限的 Bug 报告。

## 版本发布
项目发布了 **Nightly Build** 版本 **v0.2.8-nightly.20260517.0df050ff**。此版本为每日自动构建，可能不稳定，仅供测试使用。完整的变更历史详见 [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) 的 Changelog。

## 项目进展
今日合并了 **1 个** Pull Request，主要涉及微信多账号配置功能。

- **[PR #2881] feat: 支持微信多账号配置 (已合并)**
  - **摘要**: 该 PR 实现了对多个微信账号的管理支持，包括前端配置界面（账号增删改查）和后端 API 及状态管理。验证了多账号状态显示正确，且不干扰现有单账号模式。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2881

此外，有 **3 个** 新提交的 PR 待合并审查：
- **[PR #2882] feat(chat): add independent code block copy and collapse controls**
  - 为 Web UI 聊天界面中的代码块添加了独立的复制和折叠控制。
  - 链接: https://github.com/sipeed/picoclaw/pull/2882
- **[PR #2883] feat: 支持微信多账号配置**
  - 与已合并的 #2881 功能相似，此 PR 也提供了微信多账号支持，但采用不同的实现方式（动态识别 config_key）。需注意两个 PR 均提及此功能，可能需确认冲突或进行整合。
  - 链接: https://github.com/sipeed/picoclaw/pull/2883
- **[PR #2835] fix(agent): always publish final reply after interim message**
  - 修复 Agent 在使用 interim message 后不会发布最终回复的问题。
  - 链接: https://github.com/sipeed/picoclaw/pull/2835

## 社区热点
今日社区讨论的热点集中在新功能需求上。

- **【高活跃度 Issue #2421】 [Feature]: Add email as native channel**
  - **讨论**: 该 Issue 已存在月余，但讨论热度不减，目前已有 6 条评论。用户 `aquaratixc` 提出将 Email 作为 PicoClaw 的原生通道，以满足那些无法使用常用聊天平台（如企业内部、科研环境）的用户。社区对此需求的持续讨论表明，拓展通信渠道的多样性是用户的普遍期待。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2421

- **【新功能 PR #2883】 feat: 支持微信多账号配置**
  - **观察**: 在 #2881 被合并后，同一作者 `jiegehere` 很快提交了另一个同题 PR #2883。这表明社区对微信多账号功能的实现有不同意见或改进方向，可能是对首个合并方案的扩展或替代。该现象值得关注，建议维护者进行澄清或确认。
  - **链接**: https://github.com/sipeed/picoclaw/pull/2883

## Bug 与稳定性
今日无严重回归问题。报告了一个新的客户端 Bug。

- **【新 Bug】Issue #2880: Android 客户端启动服务时提示权限不足**
  - **严重程度**: 高
  - **描述**: 用户在安卓手机 (Redmi Pocophone F1, Android 10, MIUI 12) 上使用 v0.1.3 版本时，点击“启动服务”因无法创建目录而失败。尽管已授予标准存储权限，但仍报错。
  - **状态**: 已提交，无评论，无相关修复 PR。该问题影响到较旧版本的客户端用户。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2880

- **【存量问题】Issue #2742: v0.2.8 版本网关启动时无通道配置**
  - **描述**: 用户在 v0.2.8 版本中配置了 Telegram 通道，但网关启动时不加载任何通道。此问题持续超过半个月，影响新版本用户的正常使用。
  - **状态**: 无进展，无相关修复 PR。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2742

## 功能请求归类
用户今日主要提出了两类功能请求：

1.  **原生邮件通道**: Issue #2421 持续活跃，需求明确且讨论较多，是当前呼声最高的功能点。
2.  **版本更新教程**: Issue #2834 用户请求提供从源码更新的教程。这是一个常见的用户痛点，表明软件更新的流程可能需要更清晰的文档或一键更新功能。

## 用户反馈摘要
- **使用场景**: 用户 `aquaratixc` 在 Issue #2421 中提到，Email 通道对于无法使用 Telegram 等即时通讯软件的 **企业、科研等保守环境** 下的用户至关重要。这反映了 PicoClaw 在特定领域的拓展潜力。
- **痛点**: 用户因 `permission denied` 错误（Issue #2880）而无法在安卓手机上启动服务，这直接影响了其基础功能的使用。用户表示已授予标准权限但仍失败，表明可能存在 Android 系统的特定限制或软件兼容性 Bug。
- **满意之处**: 从新功能请求和 Bug 报告的数量看，社区参与度积极，用户愿意投入时间提出改进建议和反馈问题，表明项目处于健康活跃的发展阶段。

## 待处理积压
- **Issue #2782: MCP client should support Streamable HTTP transport**：这是一个重要的功能请求，关乎与更多 MCP 服务器的互操作性。Issue 已于 2026-05-06 关闭，但若未实现，可能仍有用户受影响。
  - 链接: https://github.com/sipeed/picoclaw/issues/2782
- **Issue #2835: fix(agent) 修复PR**：该修复 PR 已提交一周多，目前仍处于开放状态。此问题会导致用户无法收到 Agent 的最终回复，影响体验，建议尽快审查和合并。
  - 链接: https://github.com/sipeed/picoclaw/pull/2835

</details>