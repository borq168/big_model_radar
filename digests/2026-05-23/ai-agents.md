# OpenClaw 生态日报 2026-05-23

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-23 02:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目 2026-05-23 项目动态日报。

---

## OpenClaw 项目动态日报 — 2026-05-23

### 1. 今日活动概览

过去24小时内，OpenClaw 项目非常活跃，共收到 **500 条 Issues** 更新（其中 442 条为新开或活跃，58 条已关闭）以及 **500 条 PR** 更新（其中 378 条待合并，122 条已合并或关闭）。全天无新版本发布。活动主要集中在稳定性修复、安全增强以及社区对子代理管理、性能优化和跨平台支持等功能的持续讨论。

### 2. 版本发布

无。

### 3. 项目进展

今天共有 **122 个 PR** 被合并或关闭。尽管大部分 PR 合并细节未在此次数据中提供，但一些重要的修复和功能正在推进中。值得注意的合并进展包括：
- 一个关于审批请求的 Bug 已被关闭（[#58479](https://github.com/openclaw/openclaw/issues/58479)），但该 issue 本身是关闭状态，其修复可能已在之前完成。
- 多个修复性 PR 正在等待审查合并，例如修复会话存档失败、消息队列持久化、以及安全性增强等（详见 Bug 与稳定性部分）。

### 4. 社区热点

今日社区讨论热度最高的议题集中在以下几个方面：

- **跨平台客户端支持与预构建二进制文件**：
  - [#75](https://github.com/openclaw/openclaw/issues/75) 要求提供 Linux 和 Windows 平台的 Clawdbot 桌面端应用，获得了 **105 条评论和 75 个 👍**，是社区最渴望的功能之一。
  - [#9443](https://github.com/openclaw/openclaw/issues/9443) 请求发布预构建的 Android APK 文件，也有 **24 条评论**。这反映了用户对于降低使用门槛、简化部署流程的强烈需求。

- **子代理任务可靠性与稳定性**：
  - [#44925](https://github.com/openclaw/openclaw/issues/44925) 详细报告了子代理任务在超时或完成后，其结果可能被静默丢失的问题，获得了 **14 条评论**。该 Issue 被标记为 P1 优先级，说明开发者社区对此稳定性的高度关注。
  - [#55334](https://github.com/openclaw/openclaw/issues/55334) 报告了`session.json`文件无限增长导致服务内存溢出的性能问题，同样有 **11 条评论**。这表明在长期运行场景下的稳定性是用户的核心痛点。

这些热点问题共同指向了社区对 OpenClaw 在生产环境中的**扩展性、可靠性和易用性**的更高期望。

### 5. Bug 与稳定性

今日报告的 Bug 和性能问题，按严重程度排列如下：

- **严重的 Bug 与回归**：
  - [#58479](https://github.com/openclaw/openclaw/issues/58479) **[CLOSED]** : 审批流程 Bug，Control UI 中批准成功但执行器未收到。该问题已被关闭。
  - [#84607](https://github.com/openclaw/openclaw/issues/84607) [OPEN]: 主模型返回`overloaded_error`时，系统不会自动切换到备用模型。这会影响服务的可靠性。
  - [#57019](https://github.com/openclaw/openclaw/issues/57019) [OPEN]: 会话写入锁存在竞争条件，可能导致锁被错误清理，引发数据一致性问题。相关的修复 PR ([#57019-linked-pr]) 已打开。
  - [#55334](https://github.com/openclaw/openclaw/issues/55334) [OPEN]: `sessions.json`无限增长导致 Gateway 服务 OOM（内存溢出）。这是一个严重的性能退化问题。

- **性能退化**：
  - [#85333](https://github.com/openclaw/openclaw/issues/85333) [OPEN]: `openclaw doctor --fix` 命令在 2026.5.20 版本中执行时间从 55 秒暴增至 229 秒以上，是一个明显的性能回归。

- **其他已报告或已修复的 Bug**：
  - [#71992](https://github.com/openclaw/openclaw/issues/71992) [OPEN]: Control UI 的 webchat 页面每一条助手回复都出现重复显示。
  - [#57019](https://github.com/openclaw/openclaw/issues/57019) [OPEN]: 会话写入锁的竞态问题。
  - 多个修复 PR 正在等待合并，包括修复 Gmail Watcher 进程泄漏 ([#82947](https://github.com/openclaw/openclaw/pull/82947))、exec 审批到期通知未处理异常 ([#83106](https://github.com/openclaw/openclaw/pull/83106)) 等。

### 6. 功能请求归类

用户今天提出的新功能需求和正在讨论中的扩展，按主题分类如下：

- **安全与权限**:
  - [#10659](https://github.com/openclaw/openclaw/issues/10659): 请求实现“屏蔽密钥”(Masked Secrets)系统，防止 Agent 读取原始 API 密钥。
  - [#13583](https://github.com/openclaw/openclaw/issues/13583): 请求“前置执行钩子”（Hard Gates），在 Agent 回复前强制调用特定工具。
  - [#7722](https://github.com/openclaw/openclaw/issues/7722): 请求配置文件系统沙箱，限制 Agent 可访问的目录。
  - [#6615](https://github.com/openclaw/openclaw/issues/6615): 请求为 exec 审批系统添加“拒绝列表”（Denylist）支持。
  - [#14785](https://github.com/openclaw/openclaw/issues/14785): 请求优化工具模式的 Token 消耗，以节省 Token。

- **平台与集成**:
  - [#75](https://github.com/openclaw/openclaw/issues/75): 支持 Linux 和 Windows 桌面应用。
  - [#9443](https://github.com/openclaw/openclaw/issues/9443): 发布预构建的 Android APK。
  - [#11665](https://github.com/openclaw/openclaw/issues/11665): Webhook 钩子会话应支持多轮对话。
  - [#12602](https://github.com/openclaw/openclaw/issues/12602): 支持 Slack 的 Block Kit 消息格式。
  - [#14344](https://github.com/openclaw/openclaw/issues/14344): 为 WhatsApp 渠道增加消息撤回功能。

- **功能增强**:
  - [#22358](https://github.com/openclaw/openclaw/issues/22358): 为子代理完成后的处理增加插件钩子。
  - [#18160](https://github.com/openclaw/openclaw/issues/18160): 为 Cron 任务增加直接执行模式，绕过 LLM 调用。
  - [#22438](https://github.com/openclaw/openclaw/issues/22438): 引入分层的启动文件加载机制，以优化 Token 消耗和上下文控制。
  - [#16670](https://github.com/openclaw/openclaw/issues/16670): 在设置向导中加入记忆/向量数据库配置步骤。
  - [#13616](https://github.com/openclaw/openclaw/issues/13616): 增加配置、Cron 和历史的备份/恢复工具。

### 7. 用户反馈摘要

从今日的评论中，可以提炼出以下用户痛点、使用场景和反馈：

- **痛点**:
  - **子代理任务丢失**：多个用户（如 [#44925](https://github.com/openclaw/openclaw/issues/44925)）反馈子代理任务失败时，系统缺乏通知和自动恢复机制，导致任务静默丢失。
  - **审批流程中断**：用户报告审批流程存在 Bug，控制台批准后，实际执行并未发生 ([#58479](https://github.com/openclaw/openclaw/issues/58479))。
  - **部署与配置困难**：用户抱怨配置管理器（需要特定权限）、记忆功能（需要额外设置）以及 API 密钥存储（以明文形式存储）存在问题，增加了使用门槛 ([#16670](https://github.com/openclaw/openclaw/issues/16670), [#10659](https://github.com/openclaw/openclaw/issues/10659))。

- **使用场景与需求**:
  - **高级工作流**：用户在探索更复杂的自动化场景，例如使用 Slack Block Kit 构建丰富响应 ([#12602](https://github.com/openclaw/openclaw/issues/12602))，或在 CRM 总结、日报生成等场景中进行交互。
  - **成本控制**：社区对 Token 消耗非常敏感，希望通过按需加载配置文件 ([#22438](https://github.com/openclaw/openclaw/issues/22438))、优化工具 schema ([#14785](https://github.com/openclaw/openclaw/issues/14785)) 等方式降低成本。
  - **安全合规生产部署**：企业用户或对安全敏感的用户要求更严格的权限控制、密钥遮蔽 ([#10659](https://github.com/openclaw/openclaw/issues/10659)) 和审计能力。

- **满意点**:
  - 对于 [#22438](https://github.com/openclaw/openclaw/issues/22438) 提出的分层加载方案，部分用户表示肯定，认为这能有效节省大工作区用户的开销。

### 8. 待处理积压

以下是搁置时间较长、但至今仍为开放状态且未获得足够反馈或解决的重要 Issue 和 PR，可能值得维护者关注：

- **Issues**:
  - [#9443](https://github.com/openclaw/openclaw/issues/9443) **[OPEN] (2026-02-05)** : 请求预构建 Android APK，有 24 条评论但并未获得官方路线图的回应。这可能是社区贡献的一个机会点。
  - [#10659](https://github.com/openclaw/openclaw/issues/10659) **[OPEN] (2026-02-06)** : 请求“屏蔽密钥”(Masked Secrets)，社区认为这是一个基本的安全需求，但仍处于功能请求阶段。
  - [#13364](https://github.com/openclaw/openclaw/issues/13364) **[OPEN] (2026-02-10)** : 请求暴露`before_tool_call`/`after_tool_call` 钩子到内部钩子系统。这个功能对于安全插件开发者至关重要，但似乎处于审核停滞状态。
  - [#13610](https://github.com/openclaw/openclaw/issues/13610) **[OPEN] (2026-02-10)** : 请求集成原生密钥管理 (AWS Secrets Manager, Vault) 以解决“配置即代码”的安全问题。

- **PRs**:
  - 许多由贡献者 SebTardif 提交的小型修复 PR（如 [#82951](https://github.com/openclaw/openclaw/pull/82951), [#82950](https://github.com/openclaw/openclaw/pull/82950), [#82943](https://github.com/openclaw/openclaw/pull/82943) 等）已经准备好被维护者审查，它们解决了多个稳健性和安全问题，建议尽快合并。

---

## 横向生态对比

## AI 智能体与个人 AI 助手开源生态横向对比报告（2026-05-23）

---

### 1. 今日横向概览

今日 OpenClaw 社区异常活跃，单日 Issues 与 PR 更新量均达 500 条，主要围绕稳定性修复（session.json 内存溢出、主模型容灾）和跨平台客户端需求。NanoBot 以 21 个 PR 和 6 个 Issues 保持中速推进，重点落在技能管理 Bug 修复与多代理控制温度参数。Zeroclaw 更新量居中（37 Issues、50 PR），核心讨论集中在“Dream Mode”内存整合和 MCP 工具过滤失效问题。PicoClaw 因摘要生成失败，今日无可用数据。

---

### 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 事实性备注 |
|------|-------------|---------|---------|------------|
| OpenClaw | 500（442 新开/活跃，58 关闭） | 500（378 待合并，122 已合并/关闭） | 无 | 当日异常活跃，Bug 与功能请求数量远超其他项目；session.json 无限增长为 P1 问题 |
| NanoBot | 6（均活跃） | 21（12 已合并/关闭） | 无 | 稳定推进；i18n 补全、Ollama 图像生成、SSRF 修复是主要合并内容 |
| Zeroclaw | 37（30 新开/活跃，7 关闭） | 50（36 待合并，14 已合并/关闭） | 无 | WhatsApp 协议修复、Dream Mode PR 提交、MCP 工具过滤 Bug 有修复 PR (#6861) |
| PicoClaw | 无数据 | 无数据 | 无 | 摘要生成失败，无法参与对比 |

---

### 3. OpenClaw 与同类对照

- **活动量差异**：OpenClaw 当日 Issues/PR 更新量是 NanoBot 的 80 倍以上、Zeroclaw 的 13 倍以上，社区参与度明显更高。但需注意数字可能包含批量自动化变更，仍需结合具体内容判断。
- **技术重点**：OpenClaw 同时暴露多个生产级稳定性痛点（主模型容灾、会话锁竞态、审批流程中断），而 NanoBot 和 Zeroclaw 的 Bug 更多集中在功能配置与接口行为（如技能禁用无效、MCP 工具过滤失效）。
- **社区讨论面**：OpenClaw 社区最热议题为跨平台客户端（105 条评论）、子代理任务静默丢失（14 条评论）；NanoBot 集中在技能列表命令 Bug（4 条评论）和多轮对话技能保持（4 条评论）；Zeroclaw 最热为 Dream Mode（11 条评论）和 MCP 工具过滤失效（6 条评论）。OpenClaw 的讨论规模与复杂性显著更高。

---

### 4. 共同出现的技术方向

今日多个项目都出现了以下需求：

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **多代理/子代理控制增强** | OpenClaw、NanoBot、Zeroclaw | OpenClaw：子代理任务结果静默丢失 (#44925)；NanoBot：spawn 工具支持 temperature 参数 (#3969)；Zeroclaw：Dream Mode 定期内存整合 (#5849) |
| **安全加固** | OpenClaw、NanoBot、Zeroclaw | OpenClaw：Masked Secrets (#10659)、文件系统沙箱 (#7722)；NanoBot：修复 SSRF 漏洞 (PR #3928)；Zeroclaw：Slack bot_token 环境变量支持 (#6844) |
| **跨平台/多渠道支持** | OpenClaw、NanoBot、Zeroclaw | OpenClaw：Linux/Windows 桌面端 (#75)、Android APK (#9443)；NanoBot：WebUI i18n 补全 (PR #3964, #3962)；Zeroclaw：WhatsApp QR 显示 Bug (#6847)、Telegram 自定义端点 (#6807) |
| **工具调用与过滤** | OpenClaw、NanoBot、Zeroclaw | OpenClaw：工具模式 Token 优化 (#14785)；NanoBot：skill list 命令行为 Bug (#3959)；Zeroclaw：tool_filter_groups 对 MCP 工具无效 (#6699) |

说明：上述方向均为今日数据中至少两个项目同时出现明确 Issue/PR 记录的领域，非推测。

---

### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw |
|------|----------|---------|----------|
| **功能侧重** | 企业级多代理协调、审批流、网关服务，侧重生产部署 | 个人助理技能系统、轻量多模态（本地 Ollama 图像）、VS Code 集成 | 多渠道消息代理（WhatsApp/Telegram/Slack）、内存与学习机制（Dream Mode）、TUI 界面 |
| **目标用户** | 需要子代理编排、审批控制、高可用部署的团队/企业 | 个人开发者，偏好简洁配置、技能插件化和本地模型使用 | 对隐私敏感、需要多渠道统一管理、希望代理具有持续学习能力的用户 |
| **架构关键差异** | 模块化 Gateway + Executor 分离，支持 Control UI 和审批系统 | 单进程轻量架构，通过 spawn 工具实现多代理，依赖 WebUI 或 CLI | 支持多渠道 adapter 与 RPC 传输层，强调内存持久化与可观测性（OpenTelemetry） |
| **今日最突出的独有议题** | session.json 无限增长导致 OOM (#55334) | /skill list 禁用技能仍然显示 (#3959) | Dream Mode 内存整合 (#5849) 以及 MCP 工具过滤 Bug (#6699) |

---

### 6. 社区活跃度记录

依据今日 Issues/PR 数量与版本发布记录，将项目分为以下活跃度层级：

- **高活跃**：OpenClaw（每日 500+ 更新量，但需注意可能含批量操作；无版本发布，社区讨论深度高）
- **中活跃**：Zeroclaw（37 Issues、50 PR，有多个功能 PR 提交与渠道修复）
- **低活跃**：NanoBot（6 Issues、21 PR，合并速度较快，社区互动规模较小）

说明：PicoClaw 今日无数据，不参与分层。

---

### 7. 有证据支撑的观察

1. **子代理/内存持续学习成为跨项目共识需求**：OpenClaw（子代理任务静默丢失）、NanoBot（spawn 温度参数）、Zeroclaw（Dream Mode）均在今日数据中反映了用户对细粒度控制子代理行为、以及代理具备后台记忆整理能力的期待。

2. **安全加固从“功能请求”转向“紧急修复”**：NanoBot 今日合并了 SSRF 漏洞修复 PR (#3928)，Zeroclaw 用户投诉 Slack token 环境变量缺失 (#6844)，OpenClaw 仍有 5 个开放的安全相关功能请求（密钥遮蔽、沙箱、拒绝列表等）。安全是当前多项目共同瓶颈。

3. **跨平台/多渠道仍为核心痛点**：OpenClaw 社区最热 Issue 是 Linux/Windows 桌面客户端，而 Zeroclaw 同时存在 WhatsApp QR 显示失败与 Slack token 配置问题，NanoBot 则通过 WebUI i18n 补全来降低非英语用户门槛。用户对开箱即用、多渠道一致体验的需求强烈。

4. **OpenClaw 的稳定性问题规模远超同类**：今日 OpenClaw 报告的 P1/P2 级 Bug 涉及会话锁竞态、主模型容灾、审批流程中断、session.json OOM 等，反映其作为较重架构项目，在持续集成中面临更多回归风险。NanoBot 和 Zeroclaw 的 Bug 多集中在单一功能行为上。

5. **NanoBot 合并节奏稳定，小步快跑**：尽管 Issues 和 PR 总数少，但 NanoBot 今日合并了 12 个 PR，涵盖 i18n、图像生成、SSRF、测试覆盖等，说明维护者合并效率较高，适合快速迭代的个人开发者场景。

*今日暂无明确跨项目信号指向特定技术路线的趋同或分化，上述观察均基于每个项目今日数据中至少两条独立证据的交叉验证。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 NanoBot (github.com/HKUDS/nanobot) 2026-05-23 GitHub 数据生成的每日项目动态日报。

---

### NanoBot 项目日报 (2026-05-23)

**日报生成时间：** 2026-05-23

---

#### 1. 今日活动概览

过去24小时内，NanoBot项目活跃度较高，共产生21个Pull Request和6个Issue更新。社区核心关注点集中在**技能管理系统**与**多代理控制能力**上，特别是`/skill`命令的行为、工具的可用性以及多轮对话中的上下文保留问题。同时，项目在**WebUI国际化**、**图像生成支持**（尤其是本地Ollama集成）以及**安全性**（修复SSRF漏洞）方面有显著进展。今日无新版本发布。

#### 2. 版本发布

今日无新版本发布。

#### 3. 项目进展

今日有12个PR被合并或关闭，标志着多项关键功能得到推进和修复：

- **WebUI 国际化 (`i18n`)**: PR [#3964](https://github.com/HKUDS/nanobot/pull/3964) 和 [#3962](https://github.com/HKUDS/nanobot/pull/3962) 被合并，补全了西班牙语、法语、印尼语、韩语、越南语、繁体中文和日语等语言包的翻译键，覆盖了认证、账户、设置等近期新增的UI区域。
- **图像生成支持**: PR [#3946](https://github.com/HKUDS/nanobot/pull/3946) 合并，为NanoBot新增了原生的**Ollama图像生成支持**，实现了对本地 `x/z-image-turbo` 等模型的支持。PR [#3954](https://github.com/HKUDS/nanobot/pull/3954) 合并，新增了对**OpenAI及OpenAI Codex图像生成**的支持。
- **工具与基础能力**: PR [#3960](https://github.com/HKUDS/nanobot/pull/3960) 被合并，重构了 `apply_patch` 工具，移除了旧的unified-diff补丁模式，仅保留结构化 `edits` 数组，简化了工具使用逻辑。PR [#3961](https://github.com/HKUDS/nanobot/pull/3961) 修复了恢复对话时因`rs_*`ID重复导致Codex拒绝的问题。
- **安全与测试**: PR [#3928](https://github.com/HKUDS/nanobot/pull/3928) 合并，修复了`web_fetch`工具的SSRF漏洞，通过对重定向目标进行校验，防止恶意请求指向内部网络。PR [#3965](https://github.com/HKUDS/nanobot/pull/3965) 合并在Windows CI上增加了对CLI Apps的测试覆盖，提升了跨平台稳定性。

#### 4. 社区热点

今日讨论最活跃的议题主要围绕**技能（Skill）的使用与管理**：

- **`/skill list` 命令的准确性**: Issue [#3959](https://github.com/HKUDS/nanobot/pull/3959) (`[bug] /skill list disabled skills`) 获得4条评论，用户指出 `disabledSkills` 配置无法生效，禁用的技能仍会被列出。这是一个用户感知度很高的Bug，因为直接影响了技能的可发现性和配置有效性。
  - **最新进展**: PR [#3968](https://github.com/HKUDS/nanobot/pull/3968) 已提交，旨在新增 `/skill` 命令并仅列出已启用的技能，直接应对此问题。

- **多轮对话中技能内容的保持**: Issue [#3846](https://github.com/HKUDS/nanobot/pull/3846) (`[enhancement] enhance: keep skill content in multi-turn conversations`) 获得4条评论和1个👍。社区在深入讨论如何改进`skill.md`在多轮对话中的处理方式，当前工具`read_file`加载技能内容的方式被认为在复杂对话中不够优雅。这表明用户对个性化、长上下文互动的质量有更高期待。

#### 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

1.  **Anthropic API 400 错误 (已解决)**: Issue [#3956](https://github.com/HKUDS/nanobot/pull/3956) (`[CLOSED] Bug: Tool results with list content...`) 是一个导致永久性API错误的严重Bug。当`read_file`读取图片时，返回的`list`格式内容块在被重放至Anthropic API时会引发400错误。该Issue已关闭，说明修复已合并。

2.  **`/skill list` 错误显示已禁用技能 (已有修复PR)**: Issue [#3959](https://github.com/HKUDS/nanobot/pull/3959) 描述了 `disabledSkills` 配置无效的Bug，属于功能性错误。已有PR [#3968](https://github.com/HKUDS/nanobot/pull/3968) 尝试修复。

3.  **执行超时与转录API地址 (已有修复PR)**: PR [#3967](https://github.com/HKUDS/nanobot/pull/3967) (`fix: uncap exec config timeout...`) 修复了两个问题：一是`tools.exec.timeout`不应被模型per-call cap强限制；二是转录服务的`apiBase`格式问题，这影响到使用如Groq等第三方转录音频的功能。

#### 6. 功能请求归类

今日用户提出的新功能需求及相关PR证据如下：

- **多代理控制增强**:
    - **`spawn` 工具支持温度参数**: Issue [#3969](https://github.com/HKUDS/nanobot/pull/3969) 请求为`spawn`工具增加`temperature`参数，使子代理能为不同任务（如精确解析、创意生成、分析推理）使用不同的采样温度。

- **技能系统优化**:
    - **多轮对话技能内容保持**: Issue [#3846](https://github.com/HKUDS/nanobot/pull/3846) 请求优化在多轮对话中处理`skill.md`内容的设计。
    - **天气技能改为示例**: Issue [#3958](https://github.com/HKUDS/nanobot/pull/3958) 用户建议将天气技能从内置技能中移出，改成一个示例教程，以保持项目核心的轻量化。

- **图像生成扩展**:
    - **Ollama图像生成后端**: Issue [#3941](https://github.com/HKUDS/nanobot/pull/3941)（已关闭，因 PR[#3946] 合并而解决） 请求为Ollama添加图像生成后端。

#### 7. 用户反馈摘要

从今日的Issues评论中提炼出以下用户痛点和场景：

- **对技能管理不满**: 用户`@mraad`在 [#3959](https://github.com/HKUDS/nanobot/pull/3959) 中清晰地表达了配置无法生效的挫败感，并认为 `weather` 不应作为内置技能，而是作为示例，这反映了用户希望项目保持`lean and mean`（精简高效）的诉求。
- **对代理精细化控制的需求**: 用户`@codeLong1024`在 [#3969](https://github.com/HKUDS/nanobot/pull/3969) 中详细描述了通过`spawn`工具为不同任务分配不同思维模式（温度）的场景，表明用户已经将NanoBot用于复杂的多步骤工作流，并有深度调优子代理行为的需求。
- **对稳定性和 `i18n` 的认可**: 从多个“已关闭”的Bug修复和大量“已合并”的`i18n` PR来看，社区维护者对稳定性的关注和为非英语用户提供更好体验的努力得到了成果。

#### 8. 待处理积压

以下长期未响应或对项目稳定性和关键功能有潜在影响的议题，建议维护者关注：

- **心跳推理与通知解耦**: PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) (`feat: decouple heartbeat reasoning from notification`) 自2026年3月2日创建至今已有2个多月，仍在Open状态。该特性允许心跳代理静默推理，对防止后台监控任务产生不必要的用户干扰至关重要。近期有更新，可能需要再次审阅。
- **Manifest LLM路由支持**: PR [#3568](https://github.com/HKUDS/nanobot/pull/3568) (`feat(provider): add Manifest LLM router support`) 自4月30日创建，仍在Open状态。这是对LLM提供商集成的重要补充，能增强项目的企业级网关能力。
- **危险命令的用户确认机制**: PR [#3937](https://github.com/HKUDS/nanobot/pull/3937) (`feat(exec): implement user confirmation mechanism for dangerous commands`) 自5月20日提交，旨在解决一个核心安全/可用性问题，即在执行高危命令前获得用户确认，对于需要执行本地操作的用户场景十分关键。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

你好。我是你的AI智能体与个人AI助手领域开源项目分析师。根据Zeroclaw (github.com/zeroclaw-labs/zeroclaw) 在2026-05-23的GitHub数据，以下是为期一天的**项目动态日报**。

---

### 1. 今日活动概览

过去24小时内，Zeroclaw项目保持高度活跃，共产生37条Issue更新（30条新开/活跃，7条已关闭）和50条PR更新（36条待合并，14条已合并/关闭）。本次日报周期内未发布新版本。社区讨论集中在“Dream Mode”内存整合、`tool_filter_groups`失效的MCP工具过滤Bug，以及WhatsApp、Telegram、Slack等多渠道的配置与协议兼容性问题。多个高优先级Bug已有关联的修复PR提交，尤其值得关注的是MCP工具过滤修复PR #6861和TUI集成PR #6848。

### 2. 版本发布

无

### 3. 项目进展

今日有多个重要PR被合并或关闭，推动了核心功能的修复和项目规范改进：

- **稳定性修复**:
    - [fix(doctor): use configured model provider credentials (#6838)](https://github.com/zeroclaw-labs/zeroclaw/pull/6838) — 修复了`doctor models`命令未读取配置中API Key的问题，提升了自定义提供商诊断的准确性。此PR于今日合并。
    - [fix(scripts/deploy): 更新v0.8.0兼容性 (#6805, #6804)](https://github.com/zeroclaw-labs/zeroclaw/pull/6805) — 两个部署脚本修复PR已关闭，确保旧版服务模板和新版网关启动命令的兼容性。
- **渠道协议修复**:
    - [fix(channels/whatsapp): 恢复Apr-2026协议兼容性 (#6706)](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) — 针对Issue #6246的WhatsApp协议故障修复PR已合并，解决了2026年4月服务端协议升级导致的通信中断问题。
- **可观测性与内部治理**:
    - [feat(obs): 丰富OTel工具调用监控 (#6009)](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) — 增强了OpenTelemetry工具调用追踪的详细信息，包含参数和结果，便于分析调用失败原因。此PR已关闭。
    - [优化GitHub Actions标签规则 (#6814)](https://github.com/zeroclaw-labs/zeroclaw/pull/6814) — 优化了标签规则，避免非CI文件（如图片）被错误标记，改进了项目工作流管理。

### 4. 社区热点

今日讨论最活跃的话题集中在 **“Dream Mode” 功能请求**和 **`tool_filter_groups` Bug** 上。

1.  **Dream Mode — 定期内存整合与反思学习**
    - [Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — 以11条评论成为讨论焦点。用户`@Svtter`提出了一个增强功能，希望ZeroClaw能在空闲时进入“梦境模式”，进行轻量级后台任务，如整理每日记忆、反思交互并更新长期知识结构。
    - **分析**：此功能被标记为`priority:p1`和`enhancement`，且`status:accepted`，显示出维护团队的高度认可。社区对此表现出极大兴趣，体现了用户对代理持久化记忆和自我进化能力的需求不断增强。

2.  **`tool_filter_groups` 对MCP工具无效**
    - [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) — 获得6条评论。该问题报告了一个高风险的Bug：配置项`tool_filter_groups`对真正的MCP工具过滤器无效，原因是前缀检查存在Bug，也未与`deferred_loading`集成。
    - **分析**：社区已经识别出此问题并推动了解决方案。关联的修复PR [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) 已于今日提交，表明维护者对代理核心功能的稳定性问题响应迅速。

### 5. Bug 与稳定性

今日报告了多个影响用户工作流的Bug，按严重程度排列如下：

- **S1 - 工作流阻塞**:
    - [Bug: whatsapp channel not showing QR (#6847)](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) — 新报告。用户在配置WhatsApp渠道时无法看到登录二维码，导致无法完成初始化。**目前无关联fix PR。**
    - [Bug: [multimodal] vision_provider silently ignored (#6841)](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) — 配置的视觉提供商被忽略，入站图片被路由到回退提供商。**目前无关联fix PR。**
    - [Bug: slack bot_token 无法通过环境变量设置 (#6844)](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) — 用户反馈Slack的bot_token必须写在配置文件中，导致安全风险，且此前修复不完整。**目前无关联fix PR。**
    - [Bug: Agent enters infinite tool-call loop on Termux/Android (#6036)](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) — 问题持续存在，状态仍为`status:blocked`，需要作者提供进一步复现信息。
- **S2 - 行为降级**:
    - [Bug: `show_tool_calls` is missing from [channel] (#6856)](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) — 新报告。schema v3下的渠道响应中缺少工具调用细节，影响用户监控代理行为。
    - [Bug: `setup.bat --minimal` produces ~26 MB build instead of ~6 MB (#6836)](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) — Windows最小化构建的实际大小远大于文档预期。
    - [Bug(tests): 渠道并行分发测试存在脆弱的时序阈值 (#6813)](https://github.com/zeroclaw-labs/zeroclaw/issues/6813) — 测试可能在本地环境失败，影响CI稳定性。

**已修复的Bug**:
- [Bug: `SqliteMemory::purge_namespace` 按`category`删除而非`namespace` (#6801)](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) — 已在v0.8.0集成分支上关闭，问题得到解决。
- [Bug: Shell tool output is garbled on Windows (#6704)](https://github.com/zeroclaw-labs/zeroclaw/issues/6704) — 已关闭，问题通过解码Windows控制台代码页得到修复。

### 6. 功能请求归类

用户提出的新功能需求及相关PR（基于今日数据）：

- **持久化与学习**:
    - [Feature: Dream Mode (#5849)](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — 实现了相关PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693)。
    - [Feature: Decouple memory strategy layer (#6850)](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — 提议通过`MemoryStrategy` trait解耦内存策略，相关讨论已开启。
- **用户体验与应用**:
    - [Feature: ACP protocol extensions for diff (#6820)](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) — 为文件编辑提出差异显示的协议扩展，已在TUI和Web中部分实现。
    - [Feature: TUI Agent Chat (#6824)](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) — 终端交互聊天界面跟踪器，已有基本实现（PR #6848附属）。
    - [Feature: Telegram custom webapi endpoint (#6807)](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) — 请求支持自定义Telegram API端点。
- **内部优化与扩展**:
    - [Feature: Runtime RPC dispatch layer (#6837)](https://github.com/zeroclaw-labs/zeroclaw/issues/6837) — 请求为守护进程增加Unix socket RPC传输层，以便TUI或其他客户端直连。
    - [Feature: Session-scoped runtime overrides (#6817)](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) — 允许用户在不重载守护进程的情况下，为单个会话修改模型、温度等运行时参数。
    - [Feature: Move crates/zeroclaw-tui to apps/tui (#6821)](https://github.com/zeroclaw-labs/zeroclaw/issues/6821) — 提议重构目录结构以匹配项目布局规范。

### 7. 用户反馈摘要

从今日更新的Issues评论中，可以提炼出以下用户真实痛点和使用场景：

- **对WhatsApp渠道的困扰**: 用户`@MushiTheMoshi` (Issue #6847) 在安装和配置WhatsApp渠道时无法看到QR码，表达了对团队工作的赞赏，但也反映出一个关键的初始入门障碍。“Best tool out there. Wishing way more stars”，这句话表达了积极的口碑，但技术问题亟待解决。
- **对配置复杂性的不满**: 用户`@gerroon` (Issue #6243) 反馈了自定义HTTP提供商返回流解码错误后系统挂起的问题。该问题状态为`status:blocked, needs-author-action`，说明用户可能未提供足够信息，但报告中的“ZeroClaw seems to hang after a streaming decode error”直接指出了严重的稳定性隐患。
- **安全与配置透明度的诉求**: 用户`@mgstoyanov` (Issue #6844) 明确要求Slack的`bot_token`应支持环境变量配置，指出将敏感信息硬编码在配置文件中的安全风险。这表明用户对符合安全最佳实践有明确诉求。
- **对Windows支持的期待**: 用户`@rockswang` (Issue #6836) 遵循官方文档进行Windows构建，但发现构建产物远大于预期，这提示了文档或构建脚本可能不完全准确。

### 8. 待处理积压

以下为长时间未处理或需要维护者关注的重要问题：

- **需要用户/作者进一步操作的高风险Bug**:
    - [Bug: Agent enters infinite tool-call loop on Termux/Android (#6036)](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) — 已上线近一个月，因需要复现说明而阻塞。
    - [Bug: Streaming error: HTTP error: error decoding response body provider (#6243)](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) — 同样因需要用户提供更多信息而阻塞，但影响S1严重性。
- **持久化待处理的重要功能PR**:
    - [PR: feat(jira): add list_transitions, transition_ticket, create_ticket actions (#6481)](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) — 一个为代理增加Jira工作流操作的重要PR，等待作者回应（`needs-author-action`），自5月初以来一直开放。
    - [PR: feat(memory): add dream mode for periodic memory consolidation (#6693)](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) — 实现核心功能“Dream Mode”的大PR，同样被标记为`needs-author-action`，需要作者进行修改或回应。
- **长期开放的基础设施/RFC**:
    - [RFC: Work Lanes, Board Automation, and Label Cleanup (#6808)](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — 一个关于项目管理自动化的RFC，虽然评论不多，但属于重要的治理优化，维护者需要推进决策或讨论。
    - [audit: track 153 commits lost in bulk revert (#6074)](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — 跟踪被批量回滚的153次提交，该问题标记为 `status:in-progress`，但长时间没有进展更新，维护者可能需要更新当前状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>