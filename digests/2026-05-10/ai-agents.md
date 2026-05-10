# OpenClaw 生态日报 2026-05-10

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-10 02:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 OpenClaw 项目数据生成的 2026-05-10 项目动态日报。

---

# OpenClaw 项目动态日报 — 2026-05-10

## 1. 今日活动概览

过去 24 小时内，OpenClaw 项目共处理了 500 条 Issue 和 500 个 PR，其中新开或活跃的 Issue 达 452 条，待合并的 PR 有 330 个，社区活跃度极高。项目发布了 v2026.5.9-beta.1 版本，主要新增了 `/think default` 和 `/fast default` 命令，并更新了多项核心依赖。在大型重构方面，关于“将运行时状态重构为 SQLite”的巨型 PR(#78595) 和“集中化频道入口访问”的 PR(#79092) 仍处于待合并状态，备受社区关注。同时，一个带有世界 ID 代理工具包 HITL 审批功能的 PR(#78583) 也进展积极，标志着项目在安全协作层面的重要探索。

## 2. 版本发布

-   **最新版本**: v2026.5.9-beta.1
-   **主要变化**:
    -   **新增命令**: 支持使用 `/think default` 和 `/fast default` 命令清除当前会话的模型覆盖设置，继承架构或提供商配置的默认值。[关联 PR #79385]
    -   **依赖更新**: 刷新了工作区依赖锁文件，关键更新包括 `@openai/codex` `v0.130.0`、`acpx` `v0.7.0` 以及 AWS SDK `v3.1044.0`。
-   **破坏性变更**: 此次发布未提及明确的破坏性变更。

## 3. 项目进展

今日有多个重要 PR 被合并或关闭，推动了多项功能和修复的落地：

-   **Codex 文档重构**:  PR #80029 已被合并，该 PR 重构了 Codex 的文档结构，将其拆分为设置、配置、路由、诊断等多个专题页面，提升了可读性。
-   **子代理编排优化**: PR #80028 已被合并，该 PR 优化了子代理的编排流程，通过更强的提示语指导任务委派，并引入了 `taskName` 稳定传递等机制，使主代理在管理复杂任务时更像一个响应式协调者。
-   **ACX 子进程 PID 暴露**: PR #74756 已被关闭（合并？），该 PR 解决了 `sessions_spawn` 无法获取子进程 PID 的问题，现在可以在运行中的 ACP 会话结果中暴露子进程 PID。[关联 Issue #74684]
-   **技能系统增强**: PR #74035 已被关闭（合并？），为技能系统添加了 `persist` 标志（即使在环境检查失败时也保持激活）和 `trustedSources` 配置（可跳过对指定来源的代码安全扫描）。[关联 Issue #73549]
-   **Amazon Bedrock 上下文窗口配置**: PR #73959 已被关闭（合并？），新增 `modelContextWindowOverrides` 配置，允许用户为 Amazon Bedrock 上的 Claude 模型独立设置上下文窗口大小，解决了新模型默认值错误的问题。[关联 Issue #73328]
-   **命令执行失败提示**: PR #80003 已被关闭（合并？），现在当 `exec`/`bash` 工具执行失败但返回“成功”状态时，会向用户显示简洁的警告信息，而不是静默掩盖错误。

## 4. 社区热点

-   **#75 [Linux/Windows Clawdbot Apps]**: 这是目前评论数最多的 Issue，超过 104 条评论，社区对 Linux 和 Windows 原生应用的呼声极高。用户 @steipete 提出希望支持与 macOS 类似的功能集。
-   **#14593 [Docker 容器中技能安装失败]**: 此 Issue 获得了 29 条评论，反映出 Docker 环境下的兼容性问题是一个普遍的痛点。用户在官方 Docker 容器内运行 `openclaw onboard` 选择 Homebrew 技能时会失败，因为 Docker 镜像中没有安装 brew。
-   **#9443 [请求预构建 Android APK]**: 有 24 条评论的 Issue，用户代表提出希望能直接下载预编译的 Android APK 文件，而不是自行编译源码。这体现了一部分用户对便捷使用的强烈需求。
-   **#22438 [分阶加载引导文件]**: 有 16 条评论，讨论了引导文件消耗大量 Token 的问题。用户希望引入“分层加载”机制，允许用户控制哪些文件在哪些会话中加载，以节省上下文窗口资源。
-   **#32473 [控制 UI HTTPS 错误]**: 评论 15 条，这是一个回归 Bug，用户报告在新版本中控制 UI 因 HTTPS 或 localhost 安全上下文问题而无法正常使用。

## 5. Bug 与稳定性

以下为今日报告的主要 Bug 和稳定性问题，按严重性排列：

-   **严重: 控制 UI 需要设备身份验证 [回归] ( #32473 )**: 用户反馈在配置 Brave 密钥后，UI 报错“control ui requires device identity (use HTTPS or localhost secure context)”，导致界面无法使用。
-   **严重: `exec` 工具不继承 `env` 变量 [回归] ( #31583 )**: 用户在 `openclaw.json` 中通过 `skills.entries.*.env` 配置的环境变量无法传递给 `exec` 工具创建的子进程，影响需要注入密码等敏感信息的技能。
-   **高: 网页聊天头像 404 [回归] ( #38439 )**: 控制 UI 中的代理头像无法加载，请求 `/avatar/{agentId}` 接口返回 404 错误。
-   **高: Telegram 论坛话题会话间歇性无响应 ( #79531 )**: Telegram 群组线程中的会话会间歇性地停止响应消息，而独立 DM 会话工作正常。
-   **中: Windows 节点程序启动卡死 ( #39038 )**: OpenClaw 节点程序在 Windows 11 24H2 上启动后，在打印 PATH 信息后卡住，无法连接 Gateway。
-   **中: 配置向导在 Gateway 选择步骤卡死 ( #39223 )**: 运行 `openclaw configure` 时，在“Where will the Gateway run?”步骤卡死，导致无法完成 OAuth 认证流程。

**已有修复 PR 的 Bug**:
-   **#32473**: 暂无对应 fix PR。
-   **#31583**: 暂无对应 fix PR。
-   **#38439**: 暂无对应 fix PR。
-   **#79531**: 关联 PR #76951 (修复 Telegram 话题瓶颈) 可能解决此问题。
    -   **#79380 [树莓派 CPU 满载/崩溃]**: 该回归问题已有对应的修复 PR #79418。

## 6. 功能请求归类

-   **安全与权限**:
    -   用户提议引入“掩码机密”系统 (#10659)，旨在让代理能使用 API Key 但不能看到明文。
    -   社区提出“安全配置文件 v1.1” (#8719)，期望一个不依赖 LLM 判断的数据中心安全模型。
    -   提议为技能建立权限声明标准 (#12219)，实现安装前许可审查。
    -   请求为 `exec-approvals` 增加黑名单支持 (#6615)，实现“允许所有，但阻止特定”的安全策略。
    -   引入预响应强制钩子（硬性门控）(#13583)，要求在执行工具完毕前不允许输出最终答案。

-   **平台与应用**:
    -   **首要请求**: 为 Linux 和 Windows 构建原生桌面应用 (#75)。
    -   提供预编译的 Android APK (#9443)。

-   **性能与 Token 优化**:
    -   分阶加载引导文件 (#22438)。
    -   优化工具 Schema 的 Token 开销（~3500 tok/会话）(#14785)。

-   **集成与渠道**:
    -   支持 Slack Block Kit 富消息 (#12602)。
    -   支持 Telegram 商业机器人 (#20786)。
    -   支持 Anthropic 原生服务器端工具 (#23353)。
    -   为 WhatsApp 增加消息撤回功能 (#14344)。

-   **可用性与 UX**:
    -   在入门向导中增加记忆 / 嵌入设置步骤 (#16670)。
    -   增加 `openclaw doctor` 诊断命令。 (相关 PR: #80055)
    -   建议增加可配置的备份/还原工具 (#13616)。
    -   为会话增加快照功能（保存/加载）(#13700)。

## 7. 用户反馈摘要

-   **积极反馈**: 社区对 Linux/Windows 原生应用的坚定呼声 (#75) 表明 OpenClaw 的多平台战略方向是正确的。同时，安全相关特性 ( #10659, #8719, #6615 ) 获得了大量点赞和讨论，表明高级用户对于在生产环境中安全运行 AI 代理有强烈需求。
-   **痛点**:
    -   **Docker 兼容性**: #14593 反映了官方 Docker 镜像缺乏“brew”等常用工具，使得在容器中部署某些技能时异常困难。
    -   **回归问题**: #32473, #31583, #38439 等多个回归 Bug 表明，近期重构可能引入了一些稳定性问题，尤其是在环境配置、变量继承和 UI 集成方面。
    -   **入门体验**: #9443 中关于“预构建 APK”的请求，暴露了从源代码构建对于非开发者的高门槛。同样，#16670 指出新手无法在向导中配置记忆功能，导致错过核心特性。
    -   **状态管理**: #29736 用户报告 `exec-approvals.json` 文件忽略了配置的运行时根目录，将文件写到了错误的路径（`~/.openclaw` 而非 `/var/lib/openclaw`），表明状态持久化的路径选择存在混淆。
    -   **组策略**: #8299 中，用户反馈子代理完成后的“宣布”步骤难以抑制，因为依赖 AI 模型输出 `ANNOUNCE_SKIP` 的可靠性不足，导致频道被不必要的信息刷屏。

## 8. 待处理积压

以下为长时间未响应或更新的重要 Issue/PR，建议维护者关注：

-   **Issue #75 [Linux/Windows Clawdbot Apps]**: 自 2026-01-01 开设以来，已有 104 条评论和 74 个 👍，是社区的“最高呼声”，但未有明确的项目路线图回应或关联 PR。
-   **Issue #1210 [Discord 图片存为 Base64]**: 自 2026-01-19 开设，描述了图片存储导致上下文溢出的严重问题。虽然该问题历史悠久但未关闭，且社区广泛共识是应该使用引用/链接而非内联 Base64。
-   **WIP PR #16085 [Signal REST API 支持]**: 这是一个大型 PR，旨在增加 Signal 频道的 REST API 支持，改善容器化部署体验。尽管有充分讨论，但自 2026-02-14 提交后，仍处于 `triage: needs-real-behavior-proof` 状态，需要维护者进一步评估和测试。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目的技术分析师，以下是根据您提供的各项目2026-05-10动态日报生成的横向对比分析报告。

---

### AI智能体与个人AI助手开源项目横向对比分析报告 — 2026-05-10

---

#### 1. 今日横向概览

今日，四大开源AI智能体项目均保持高度活跃。OpenClaw 凭借超过1000次的Issue和PR更新，以及新版本的发布，展现了其作为核心参考项目的社区体量和迭代速度。NanoBot 的PR更新数紧随其后，且社区围绕WebUI和模型预设切换展开了热烈讨论。Zeroclaw 和 PicoClaw 虽然社区规模相对较小，但在核心架构和安全修复上取得了关键进展，分别推进了多智能体运行时和Agent工具策略的精细化控制。整体来看，四项目均将技术重心放在了多Agent协作、工具策略控制和用户体验（UX）细节的打磨上。

#### 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | PRs (待合并) | Release 情况 | 关键备注 |
|------|-------------------|--------------|-------------| ----------- |
| **OpenClaw** | 452 | 330 | 发布 `v2026.5.9-beta.1` | 社区体量最大，活动量级远超其他项目。 |
| **NanoBot** | 4 | 106 | 无新版本 | PR 数量多，侧重内部架构重构与WebUI功能增强。 |
| **Zeroclaw** | 48 | 33 | 无新版本 | 核心围绕多智能体运行时（v0.8.0）和S1/S2级Bug修复。 |
| **PicoClaw** | 10 | 15 | 发布 Nightly Build `v0.2.8-nightly.20260510` | 侧重转向链处理和Agent工具权限的精细化控制。 |

> **注**: 数据基于各自日报中的统计，OpenClaw 的Issue和PR活动量包含“处理”和“更新”的总和，数量级远高于其他项目。

#### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与其他项目相比，呈现以下特点：

- **活动量级**: OpenClaw 的Issue和PR数量（约1000次活动）是其他项目的数倍乃至数十倍，表明其拥有更庞大的贡献者社区和更活跃的日常维护。NanoBot 的PR量（136条）紧随其后，说明其代码集成也非常频繁。
- **技术重点**: OpenClaw 正在进行大规模的重构（如“将运行时状态重构为SQLite”的巨型PR），而其他项目更多地聚焦于具体模块的优化。NanoBot 强调架构演进（模型预设切换），Zeroclaw 推动多智能体运行时落地，PicoClaw 则专注于转向链处理策略。
- **社区讨论面**: OpenClaw 的社区讨论更宏观，涉及到多平台（Linux/Windows 原生App）、大规模部署（Docker兼容性）和安全模型（掩码机密等）。其他项目的社区讨论则更具体，例如 NanoBot 对内置WebUI的强烈需求，Zeroclaw 对Discord频道白名单的请求，以及 PicoClaw 对转向链交互体验的精细化反馈。

#### 4. 共同出现的技术方向

以下是在多项目今日日报中同时出现的技术需求或关注方向：

- **Agent 工具策略与权限控制**: 这是今日最突出的跨项目需求。
    - **OpenClaw**: 社区提议为技能建立权限声明标准 (#12219) 和 `exec-approvals` 的黑名单支持 (#6615)。
    - **Zeroclaw**: 修复了 `shell` 调用绕过外部审批流的安全问题 (#6539)。
    - **PicoClaw**: 新增了支持 `allow`/`deny` 的 Agent 工具策略过滤器的 PR (#2838)。

- **对话上下文管理与控制**:
    - **OpenClaw**: 用户提出“分阶加载引导文件”以节省上下文窗口资源 (#22438)。
    - **NanoBot**: 用户请求“中断会话后保留上下文”，希望打断Agent后能恢复之前的对话和步骤 (#3689)。
    - **Zeroclaw**: 修复了上下文压缩丢失工具调用记录的严重Bug (#6361)。
    - **PicoClaw**: 修复了转向链操作中，最终回复会错误地覆盖“工作中”占位符，导致结果不可见的问题 (#2839)。

- **多Agent/子Agent协作与编排**:
    - **OpenClaw**: 合并了优化子代理编排流程的PR，使其更像一个响应式协调者 (#80028)。
    - **Zeroclaw**: 提交了多智能体运行时（v0.8.0）的巨型 PR (#6545)，为每个Agent提供独立工作空间。
    - **PicoClaw**: 修复了子Agent延迟工具发现的问题 (#2793)，并新增了对子Agent异步结果传递策略的控制 (#2829)。

#### 5. 差异化定位分析

基于今日数据，四项目的定位和侧重点开始显现差异：

- **OpenClaw**: 定位为 **全能型Agent平台**，功能最全面，覆盖安全、性能、多平台、集成等全方位议题。其社区讨论的深度和广度最大，是其他项目的“核心参照”。技术架构上正进行深度重构，趋向集成化和标准化。
- **NanoBot**: 定位为 **高度集成的消息中心Agent**，强项在于与飞书、Discord等即时通信工具的深度集成，并致力于提升WebUI作为官方控制台的能力。技术重心在于保持渠道稳定性和提供用户可直接使用的管理界面。
- **Zeroclaw**: 定位为 **分布式、高并发的Agent运行时**，强调多智能体调度、渠道隔离和严格的安全审批。其“多智能体运行时”PR是今日最重大的架构演进，显示了其在复杂业务场景下的野心。用户群体更偏向开发者和需要服务化的用户。
- **PicoClaw**: 定位为 **轻量级、边缘智能的嵌入式Agent框架**，侧重于资源占用优化和精细化的行为控制。其“转向链”特性和“AGENT.md”配置文件，体现了对用户深度定制Agent行为（而非仅收发消息）的支持。

#### 6. 社区活跃度记录

基于今日的Issue和PR更新数量、版本发布记录，按活跃度分为三个梯队：

- **第一梯队（超大型社区）**:
    - **OpenClaw**: 活动量（500+ Issues, 500+ PRs）、新版本、大型重构PR并存，社区讨论纵深广，是无可争议的最活跃项目。

- **第二梯队（中型社区，高度活跃）**:
    - **NanoBot**: PR更新量（136条）巨大，社区讨论集中在WebUI、架构重构等具体特性上，活跃度极高。
    - **Zeroclaw**: Issues 更新量（50条）和功能请求质量高，核心特性PR（多智能体运行时）被广泛关注，技术社区活跃。

- **第三梯队（中小型社区，专注活跃）**:
    - **PicoClaw**: 体量最小，但每日提交的PR和Issue聚焦于Agent行为控制和协议兼容性等前沿话题，社区讨论专业且深入。每天发布Nightly版本，开发活跃度很高。

#### 7. 有证据支撑的观察

基于今日的多条数据，可以得出以下有证据的观察：

1.  **Agent 行为控制是跨项目的核心攻关方向**: OpenClaw 讨论权限声明和黑名单，Zeroclaw 修复审批绕过，PicoClaw 新增策略过滤器，四项目不约而同地将工具级别的权限和行为控制作为当前重点。这表明社区已从“能用Agent”步入到“如何安全、可控、精确地使用Agent”的阶段。

2.  **对话连贯性与状态管理是用户体验的首要痛点**: OpenClaw 用户关注引导文件消耗Token，NanoBot 用户希望中断后保留上下文，Zeroclaw 的上下文压缩Bug导致工具调用丢失，PicoClaw 因转向链回复不当掩盖了Agent工作成果。这些Bug和需求表明，如何让Agent在长时间或多轮交互中保持对历史和结果的感知，是影响用户信任度最直接的问题。

3.  **Zeroclaw 在多智能体运行时的架构演进上最为激进**: 其提交的 `v0.8.0` 多智能体运行时 PR 是一个XL尺寸的巨型PR，旨在为每个Agent提供独立环境。这与其他项目目前的“子Agent”模式（如OpenClaw对子代理的编排优化）不同，显示了Zeroclaw在架构层面面向高并发、强隔离的生产级多Agent系统的明确意图。

4.  **“WebUI”需求持续成为社区长期痛点**: 尽管 OpenClaw、NanoBot、PicoClaw 均有Web界面，但NanoBot社区仍有大量声音（#2949, #3059）希望拥有官方内置WebUI。这表明当前的开源Agent项目中，Web界面的功能完备性、易用性或默认启用程度可能普遍未能满足所有用户的需求，仍是项目吸引非开发者用户的重要门槛。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-05-10

## 1. 今日活动概览

过去 24 小时内，NanoBot 项目共产生 **13 条 Issue 更新**（新开/活跃 4 条，关闭 9 条）和 **136 条 PR 更新**（待合并 106 条，已合并/关闭 30 条）。未发布新版本。社区活跃度集中在**模型预设切换**、**WebUI 功能增强**以及 **Agent 内部重构**等方向。多位贡献者（尤其是 @chengyongru）提交了针对死代码清理、会话损坏修复、流式输出补全等稳定性修复 PR。此外，关于飞书群组话题隔离开关、本地 Whisper 语音转录等功能请求与 PR 获得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

以下为今日被合并或关闭的关键 PR（从已提供的列表中筛选）：

| PR 编号 | 标题 | 状态 | 影响 |
|--------|------|------|------|
| [#3719](https://github.com/HKUDS/nanobot/pull/3719) | fix(utils): remove unreachable dead code in find_legal_message_start | 已合并 | 修复由无效列表切片导致的死代码（对应 Issue [#3716](https://github.com/HKUDS/nanobot/issues/3716)） |
| [#3708](https://github.com/HKUDS/nanobot/pull/3708) | refactor: introduce AgentLoop.from_config() to centralize loop assembly | 已合并 | 提取重复的初始化逻辑，为模型预设功能奠定基础（PR 1/4） |
| [#3715](https://github.com/HKUDS/nanobot/pull/3715) | refactor(loop): convert _process_message to functional state machine | 已合并 | 将 300 行 `_process_message` 重构为显式状态机，提升可读性与可维护性 |
| [#3680](https://github.com/HKUDS/nanobot/pull/3680) | fix: handle corrupted session files where last_consolidated exceeds message count | 已合并 | 修复会话文件损坏导致历史丢失的问题 |
| [#3705](https://github.com/HKUDS/nanobot/pull/3705) | fix(cli): handle retry-wait messages in interactive mode | 已合并 | 修复 CLI 交互模式中 spinner 与重试消息交织导致的终端乱码 |
| [#3722](https://github.com/HKUDS/nanobot/pull/3722) | feat: added instant_memory bypass tool | 已合并（未标注类型） | 新增即时记忆旁路工具，具体用途待验证 |
| [#3685](https://github.com/HKUDS/nanobot/pull/3685) | fix(agent): persist _last_summary across restarts with used sentinel | 已合并 | 修复进程重启后丢失历史摘要上下文的回归问题 |
| [#3709](https://github.com/HKUDS/nanobot/pull/3709) | feat(webui): add BYOK web search settings | 已合并 | WebUI BYOK 设置增加 Web 搜索凭据配置 |

此外，还有其他多项 PR 被关闭或合入，涵盖 Claude Code OAuth 提供商、Hook 系统、飞书表情动态更新等。

## 4. 社区热点

### 4.1 WebUI 需求持续热议
- **Issue [#2949](https://github.com/HKUDS/nanobot/issues/2949)** — “Should nanobot have its own WebUI?” 已关闭，获 13 个 👍 和 10 条评论。该讨论引发社区对内置 WebUI 的广泛兴趣，并在今天迎来社区衍生项目 [#1922](https://github.com/HKUDS/nanobot/issues/1922)（`nanobot-webui` 自托管管理面板）的后续关注。
- **Issue [#3059](https://github.com/HKUDS/nanobot/issues/3059)** — “为 NanoBot API 服务器添加内置 Web UI” 已关闭，提交的 PR 提供了完整单页 Web UI，显示社区已有实现方案。

### 4.2 模型预设切换与架构重构
- **PR [#3714](https://github.com/HKUDS/nanobot/pull/3714)** — “feat(config): add ModelPresetConfig and runtime preset switching” 处于开放状态，由 @chengyongru 提出，引入命名模型预设与运行时原子切换，是近期架构演进的核心部分，引发讨论。

### 4.3 飞书群组话题隔离功能反馈
- **Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692)** — “feishu group topic 隔离支持开关” 有 1 个 👍 和 1 条评论，用户期望支持可配置开关，以避免多文件处理时被错误隔离。该 issue 仍开放。

## 5. Bug 与稳定性

### 严重程度排列：

1. **会话文件损坏导致历史丢失** — 已由 PR [#3680](https://github.com/HKUDS/nanobot/pull/3680) 修复（合并）。当 `last_consolidated` 超过实际消息数时，此前所有会话历史会丢失。该修复在 `last_consolidated` 越界时重置为 0。
2. **WebSocket 通道静默丢弃附件媒体** — Issue [#3674](https://github.com/HKUDS/nanobot/issues/3674) 已关闭，指出 `WebSocketChannel._dispatch_envelope()` 忽略了 `media` 字段。尚未发现对应修复 PR，但问题已被记录。
3. **Cron 提醒流式输出缺少 stream_id** — Issue [#3718](https://github.com/HKUDS/nanobot/issues/3718) 新开，指出定时任务触发的 agent 响应未携带 `stream_id`，导致 WebSocket 客户端无法关联流式片段。对应修复 PR [#3720](https://github.com/HKUDS/nanobot/pull/3720) 已提交。
4. **无效列表切片导致死代码** — Issue [#3716](https://github.com/HKUDS/nanobot/issues/3716) 已关闭，由 PR [#3719](https://github.com/HKUDS/nanobot/pull/3719) 修复。
5. **LLM 流式超时错误** — Issue [#2709](https://github.com/HKUDS/nanobot/issues/2709) 已关闭，用户报告使用 Anthropic API 时出现超时错误，要求强制流式。该 issue 已被标记为已解决（可能是文档指引）。
6. **网关未绑定到 18790 端口** — Issue [#510](https://github.com/HKUDS/nanobot/issues/510) 已关闭，Docker 环境下 `nanobot gateway` 显示绑定但实际上未监听。可能已修复或需要用户自查。

## 6. 功能请求归类

| 功能需求 | 对应 Issue/PR | 状态 | 简述 |
|---------|---------------|------|------|
| 内置 WebUI | [#2949](https://github.com/HKUDS/nanobot/issues/2949)、[#3059](https://github.com/HKUDS/nanobot/issues/3059) | 已关闭，但有社区实现 | 社区期望 nanobot 拥有原生可视化界面 |
| `nanobot update` CLI 命令 | [#3421](https://github.com/HKUDS/nanobot/issues/3421) | 已关闭 | 简化一键升级流程 |
| 子代理配置文件（tools/skills） | [#1012](https://github.com/HKUDS/nanobot/issues/1012) | 开放中 | 支持定义不同子代理类型，使用不同工具和技能 |
| 飞书群组话题隔离开关 | [#3692](https://github.com/HKUDS/nanobot/issues/3692) | 开放中 | 支持可配置开关，避免多文件隔离影响 |
| 中断会话后保留上下文 | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 开放中 | 打断 agent 后丢失上一轮聊天记录，希望保留对话及执行步骤 |
| 本地 Whisper 语音转录 | PR [#3723](https://github.com/HKUDS/nanobot/pull/3723) | 新开 | 通过 faster-whisper 实现本地语音转录，无需 API key |
| OpenWebUI 作为官方 channel | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | 已关闭 | 询问是否可将 OpenWebUI 添加为 channel |

## 7. 用户反馈摘要

- **WebUI 需求**：多位用户在 [#2949](https://github.com/HKUDS/nanobot/issues/2949) 中表示希望有原生 Web 界面，部分用户已开发第三方面板（[nanobot-webui](https://github.com/Good0007/nanobot-webui)）并得到社区认可。
- **飞书话题隔离**：用户 @sonicrang 在 [#3692](https://github.com/HKUDS/nanobot/issues/3692) 中反映，发送多个文件到飞书群组时，每个文件被隔离成不同 topic，期望有开关控制以支持批量处理。
- **会话中断问题**：用户 @lyh161 在 [#3689](https://github.com/HKUDS/nanobot/issues/3689) 中描述：让 agent 执行长时间测试任务，中途打断后 agent 无法恢复之前的对话和步骤，希望保持上下文。
- **Cron 流式输出缺失**：用户 @shs822 在 [#3718](https://github.com/HKUDS/nanobot/issues/3718) 中报告 cron 提醒消息没有 stream_id，影响 WebSocket 客户端正确渲染。

## 8. 待处理积压

以下为开放时间较长或仍未解决的 Issue/PR，提醒维护者关注：

- **Issue [#1012](https://github.com/HKUDS/nanobot/issues/1012)** — “Add subagent profiles with configurable tools and skills”（2026-02-22 创建，开放超过两个月）。该请求涉及子代理个性化配置，对高级用户有重要价值，至今无对应 PR。
- **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689)** — “中断会话丢失上一轮会话的聊天记录”（2026-05-08 创建，开放中）。虽然 PR [#3685](https://github.com/HKUDS/nanobot/pull/3685) 已修复 `_last_summary` 持久化，但该 issue 描述的“打断后无法恢复步骤”可能涉及更深层的上下文管理，需进一步分析。
- **PR [#3564](https://github.com/HKUDS/nanobot/pull/3564)** — “feat(hooks): HookCenter typed-event hook system with plugin support”（2026-04-30 创建，仍开放）。此 PR 引入大型钩子系统和插件分发机制，已停留 10 天未合并，可能需 review 或调整。
- **PR [#3723](https://github.com/HKUDS/nanobot/pull/3723)** — “Local whisper transcription” 今日新开，但若审查周期长可能成为积压。

---

*数据来源：GitHub (HKUDS/nanobot) 截至 2026-05-10 23:59 UTC。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-05-10

---

## 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目保持高活跃度：**50 条 Issues 更新**（新开/活跃 48 条，关闭 2 条），**42 条 PR 更新**（待合并 33 条，已合并/关闭 9 条），无新版本发布。社区讨论集中在 Discord 频道白名单、Matrix 构建失败、空 `tool_calls` 导致 Provider 拒答以及上下文压缩丢失工具调用记录等关键问题上。PR 层面，SOP 引擎加载、网关配对码获取、渠道会话作用域等问题已修复，多智能体运行时（v0.8.0）的大规模 PR 已提交。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

以下为今日合并/关闭的重要 Pull Request 及其影响：

- **#6534 — fix(sop): call reload() after SopEngine construction**
  修复了 `SopEngine` 初始化后从未调用 `reload()` 的缺陷，导致所有 SOP 规则（Standard Operating Procedures）在运行时完全失效。该 PR 已关闭（merged）。
  https://github.com/zeroclaw-labs/zeroclaw/pull/6534

- **#6039 — [已关闭] Copilot provider 无法处理来自 Discord 的图片**
  经过两周修复，该 S1 级别 bug 今日关闭，Discord 上传图片通过 Copilot 提供商的链路现已正常工作。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6039

- **#6404 — [已关闭] MCP HTTP/SSE 超时策略 gap**
  针对 `tool_timeout_secs` 配置被底层超时覆盖的问题，修复后关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6404

此外，以下 PR 虽未合并但已有实质性推进，值得关注：

- **#6545 — feat(runtime): multi-agent runtime**
  v0.8.0 核心特性，为每个 `[agents.<alias>]` 提供独立工作空间、内存、身份文件及权限。PR 尺寸标记为 XL，已提往 `integration/v0.8.0` 分支。
  https://github.com/zeroclaw-labs/zeroclaw/pull/6545

- **#6539 — fix(runtime): require shell approval in direct sessions**
  修复了 ACP 会话与 WebSocket 会话中 `shell` 调用绕过外部审批流的安全问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/6539

- **#6546 — fix(agent): suppress tool protocol when no tools are available**
  当有效工具集为空时，不再向模型注入工具提示词，改善小模型/本地模型兼容性。
  https://github.com/zeroclaw-labs/zeroclaw/pull/6546

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

1. **#6378 — [Feature]: Discord Bot respond only in specific Discord channels**
   评论 5 条。用户请求为 Discord 渠道增加 `allowed_channels` 配置，对标 Matrix 的 `allowed_rooms`。核心诉求：让机器人仅在指定频道响应，防止干扰。维护者已标注 `status:accepted`。
   https://github.com/zeroclaw-labs/zeroclaw/issues/6378

2. **#6530 — [Bug]: Build failure with matrix-sdk v0.16.0: recursion limit overflow**
   评论 3 条。启用 Matrix 特性后构建崩溃（递归限制溢出），影响版本 0.7.5。社区提供临时 `RUSTFLAGS` workaround，维护者标注 `status:blocked`，等待上游 matrix-sdk 修复或降级。
   https://github.com/zeroclaw-labs/zeroclaw/issues/6530

3. **#6298 — [Bug]: Empty tool_calls array sent to provider API (DeepSeek, NVIDIA NIM)**
   评论 3 条。当 `use_native_tools` 启用且模型响应不包含工具调用时，生成空数组 `"tool_calls": []`，被严格校验的 Provider（如 DeepSeek）拒绝（400 错误）。该问题影响工具链核心流程，已标记 P1。
   https://github.com/zeroclaw-labs/zeroclaw/issues/6298

### 热门 PR

PR 评论区暂无有效讨论（数据显示 `undefined`），但以下 PR 因涉及核心修复或新特性而受到关注：

- **#6362 — fix(runtime): preserve plain-text assistant before tool messages**
  关联 #6361 bug，修复上下文压缩边界条件丢失工具调用记录的问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/6362

- **#6541 — fix(channels): scope session key for channel tools**
  修复渠道工具循环中会话密钥未正确作用域化的问题，防止跨会话冲突。
  https://github.com/zeroclaw-labs/zeroclaw/pull/6541

---

## 5. Bug 与稳定性

以下按严重程度排列今日报告的 Bug（S1 最高）：

| 严重级别 | Issue | 描述 | 状态 | Fix PR |
|---------|-------|------|------|--------|
| S1 | #6361 | 上下文压缩丢弃 `assistant(tool_calls)` 和 `tool(result)`，导致 MiniMax 工具循环 | `in-progress` | #6362 已开放 |
| S1 | #6551 | 非首位 `system` 消息被发送至 OpenAI 兼容 Provider，导致拒绝请求 | 新开，无 PR | — |
| S1 | #6433 | Heartbeat 无法与 Matrix 渠道共存（配置限制仅支持 4 种渠道） | `in-progress` | — |
| S2 | #6528 | 自定义 Provider（自签名证书）未信任系统 CA | 新开，`needs-maintainer-review` | — |
| S2 | #6520 | Gemini CLI Provider 因 `--print` vs `--prompt` 参数过期崩溃 | 新开，`status:accepted` | — |
| S2 | #6556 | Discord 渠道媒体管道完全损坏（入站图片丢失、出站标记泄漏） | 新开 | — |
| S2 | #6309 | `model_routing_config` 工具覆盖 `schema_version=2` 配置 | `status:accepted` | — |
| S2 | #6419 | WorkspaceManager 启动时无法加载配置文件（Windows） | `status:accepted` | — |
| S3 | #6548 | 渠道运行时命令回复未使用 Fluent 本地化（硬编码英文） | 新开 | — |

> 注：#6361、#6298、#6422、#6517 等虽未列作 S1 标签，但从摘要描述看同样严重影响工作流。

---

## 6. 功能请求归类

以下为今日用户提出的新功能需求（仅记录，不推测路线图）：

### 渠道增强
- **#6378** — Discord 频道白名单（allowed_channels）
- **#6345** — 按渠道配置 `reply-min-interval-secs` 节流
- **#6510** — Cron `delivery.mode = "announce"` 支持仅发送最终消息
- **#6522** — Web 聊天工具审批 UI（监督模式）

### Provider 兼容性
- **#6518** — 为 Kimi K2.5（Moonshot API）提供一等支持
- **#6298**（实为 Bug，但需求隐含：允许空 `tool_calls` 或裁剪）

### 运行时与配置
- **#6272** — 多智能体运行时：每个别名独立工作空间/权限/共享资源（已对应 PR #6545）
- **#6557** — v0.8.0 前协调运行时模型切换与 Provider 结构
- **#6253** — v0.7.6 技能支持（Skills）的协调跟踪

### 安全与审计
- **#5833** — 会话所有权模型用于破坏性操作
- **#6074** — 跟踪 bulk revert 丢失的 153 个 commits

### 桌面端
- **#6339** — macOS 通用二进制（arm64 + x86_64）
- **#6327** — 桌面菜单栏频道总览
- **#6329** — 托盘菜单项（退出、重启 Gateway、打开仪表盘等）

### 其他
- **#6543** — ACP 会话恢复（session/load 命令）
- **#6547** — Homebrew 合并失败（0.7.5 版本缺失）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与使用场景：

- **工具链兼容性瓶颈**：多位用户（@Svtter, @ralfbawg, @eugeneb50）报告零克应对 OpenAI 兼容 Provider 的严格校验存在多处不一致，导致工作流中断。例如空 `tool_calls` 数组（#6298）、tool 消息被压缩（#6361）、非首位 system 消息（#6551）。
- **Discord 渠道媒体近乎不可用**：@singlerider 在 #6556 详细列举了四条互相关联的缺陷（附件为空、非图片类型被丢弃、出站标记泄漏），指出该渠道的媒体管线“完全损坏”。
- **上下文溢出导致模型幻觉**：@essamsalah 在 #6517 描述长时间对话后 bot 开始离题/幻觉，怀疑上下文压缩机制未正确处理，期望获得更好的上下文管理。
- **cron_add 参数错误提示不友好**：@NerdyShawn 抱怨当 LLM 将 schedule 参数传为纯字符串而非 JSON 对象时，错误信息仅有 `invalid type` 无任何修复建议（#6422）。
- **Matrix 构建阻塞**：@rikwade 报告升级 matrix-sdk v0.16.0 后递归溢出，社区在评论区提供了 `RUSTFLAGS` workaround 但仍期待上游修复（#6530）。
- **Homebrew 安装失败**：@luckbyte 反馈 0.7.5 版本未发布至 Homebrew core，导致 `brew upgrade` 失败（#6547）。

---

## 8. 待处理积压

以下为长期未响应或需要维护者介入的重要 Issue / PR，按创建时间排序：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 备注 |
|------|------|------|----------|------|------|
| Issue | #5833 | sesson ownership model for destructive operations | 2026-04-17 | `blocked` `needs-maintainer-review` | 安全相关，会话密钥未按 Agent 作用域化 |
| Issue | #6074 | track 153 commits lost in bulk revert | 2026-04-24 | `in-progress` | 审计恢复，需制定计划 |
| Issue | #6528 | Trust system CA for provider requests | 2026-05-08 | `needs-maintainer-review` | 影响自签名证书用户 |
| Issue | #6518 | Kimi K2.5 一等支持 | 2026-05-07 | `needs-maintainer-review` | 缺乏官方文档指引 |
| Issue | #6345 | Per-channel reply-min-interval-secs | 2026-05-03 | `in-progress` `needs-maintainer-review` | 已标记接受但需要确定实现方案 |
| PR | #6183 | normalize image markers across agent and tool history | 2026-04-28 | `needs-author-action` | 作者未回应修改请求 |
| PR | #6192 | fix(gateway): target paircode retrieval to running instance | 2026-04-28 | 开放 | 基础分支 `master`，等待审核 |
| PR | #6009 | enrich OTel tool spans with semantic convention | 2026-04-22 | 开放 | 观察性增强，待 review |

---

*本日报基于公开 GitHub 数据生成，状态截止至 2026-05-10 北京时间 12:00。所有链接均可直接访问。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手开源项目分析师，根据您提供的 PicoClaw GitHub 数据，以下是为您生成的 2026-05-10 项目动态日报。

---

## PicoClaw 项目动态日报 | 2026-05-10

### 1. 今日活动概览

过去 24 小时内，PicoClaw 项目活跃度较高。社区共提交了 13 条 Issue（其中 10 个仍活跃，3 个已关闭）和 25 个 PR（其中 15 个待合并，10 个已合并/关闭）。项目发布了新的 Nightly 版本 (v0.2.8-nightly.20260510)。核心贡献者 `bogdanovich` 持续围绕 **steering-chain（转向链）**、**Agent 工具策略** 和 **异步结果处理** 等方向提交了大量改进和修复，是今日最活跃的贡献者。

### 2. 版本发布

- **Nightly Build: v0.2.8-nightly.20260510.6e6293e5**
  - 这是一个自动化构建的每日测试版本，可能不稳定，仅供测试使用。
  - **Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

### 3. 项目进展

今日合并/关闭了数个重要 PR，推进了以下功能与修复：

- **Agent 系统与工具策略**：
  - **[#2790] [CLOSED]** `fix(agents): route spawn tool to target agent`: 修复了 `spawn` 工具无法正确路由到指定子 Agent 的问题，并增加了对不存在的目标 Agent 的错误提示。这增强了多 Agent 调用的可靠性。(https://github.com/sipeed/picoclaw/pull/2790)
  - **[#2793] [CLOSED]** `fix(tools): hidden tools promoted in the parent registry rather than the subagent's registry`: 修复了子 Agent 的延迟工具发现机制中，隐藏工具错误地暴露给父 Agent 的问题。(https://github.com/sipeed/picoclaw/pull/2793)
  - **[#2838] [OPEN]** `feat(agent): support frontmatter tool policy filters`: 这是一个重要的新特性 PR，允许用户通过 `AGENT.md` 文件为 Agent 声明 `allow`/`deny` 工具策略，实现更细粒度的权限控制。(https://github.com/sipeed/picoclaw/pull/2838)
- **转向链（Steering-Chain）处理**：
  - **[#2842] [CLOSED]** `[Feature] synthesize steering-chain final replies from action log`: 合并了该特性 PR，为转向链交互提供了一种新的最终回复合成模式，即从操作日志中生成最终回复，改善了多轮指令后的用户体验。(https://github.com/sipeed/picoclaw/pull/2842)
- **渠道与网关修复**：
  - **[#2828] [CLOSED]** `fix(agent): transcribe queued voice follow-ups`: 修复了在处理语音消息时，如果用户在 Agent 正在工作期间发送第二条语音，这条语音不会被转录为文本的问题。(https://github.com/sipeed/picoclaw/pull/2828)
  - **[#2630] [CLOSED]** `fix(web): show full reply datetime and preserve it in chat history`: 修复了 Web 聊天界面中，AI 回复时间仅显示“几分钟前”等模糊时间的问题，现在会显示完整的日期时间格式，并确保其在聊天历史中被正确保存。(https://github.com/sipeed/picoclaw/pull/2630)
- **Provider 支持**：
  - **[#2260] [CLOSED]** `feat(providers): add xAI compat support`: 新增对 xAI 模型兼容性支持。(https://github.com/sipeed/picoclaw/pull/2260)
  - **[#2163] [CLOSED]** `fix: maintain OAuth scopes during Google Antigravity token refresh`: 修复了 Google Antigravity (Cloud Code Assist) 在 Access Token 刷新时 OAuth 作用域丢失的问题。(https://github.com/sipeed/picoclaw/pull/2163)

### 4. 社区热点

今日最受关注的议题集中在 **Agent 行为的精细化控制** 和 **聊天后处理的完整性** 上。

1.  **[#2843] [OPEN] same-agent final no-tools render for steering-heavy turns**
    - **链接**: https://github.com/sipeed/picoclaw/issues/2843
    - **摘要**: 用户 `bogdanovich` 描述了一个场景：在多轮转向链交互中，Agent 执行了所有操作，但最终回复仅回述了最后一轮的问题，显得不连贯。此 Issue 已有一个对应的 PR [#2844](https://github.com/sipeed/picoclaw/pull/2844) 进行修复。
    - **分析**: 这反映了用户对 Agent 在复杂对话（特别是需要 Agent 在前一步结果上继续工作的场景）中保持上下文连贯性的高要求。

2.  **[#2839] [OPEN] send steering-chain final replies as new messages instead of editing tool-feedback placeholders**
    - **链接**: https://github.com/sipeed/picoclaw/issues/2839
    - **摘要**: 用户 `bogdanovich` 发现，在进行转向链操作时，Agent 有时会用最终回复去编辑之前显示的“工作中...”等占位符消息，这会导致用户永远看不到也搜索不到最终的回复。此 Bug 已有对应的修复 PR [#2840](https://github.com/sipeed/picoclaw/pull/2840)。
    - **分析**: 这是一个重要的 UX 问题，它影响了用户在关键任务完成后对结果的可见性。社区对此类问题的关注度很高，因为它直接关系到 Agent 工作成果的可靠交付。

### 5. Bug 与稳定性

- **[严重] [#2674] [OPEN] Codex OAuth: empty assistant response when ChatGPT backend streams items via `response.output_item.done`**
  - **摘要**: 使用 OpenAI Codex OAuth 连接 ChatGPT 后端时，Assistant 会返回空响应，导致 PicoClaw 显示“模型返回空响应”的报错。该问题有 3 个 👍 支持，表明对部分用户影响较大。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2674

- **[中等] [#2839] [OPEN] send steering-chain final replies as new messages instead of editing tool-feedback placeholders**
  - **摘要**: 上文提到的 UX Bug，影响转向链操作的最终回复可见性。已有修复 PR [#2840](https://github.com/sipeed/picoclaw/pull/2840)。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2839

- **[中等] [#2745] [OPEN] [BUG] OpenRouter reasoning model leaks thinking into assistant content**
  - **摘要**: 使用 OpenRouter 的推理模型时，模型的思考过程（reasoning preamble）会泄露到最终显示给用户的回复内容中。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2745

### 6. 功能请求归类

根据今日新开和活跃的 Issues，用户的需求主要集中在以下几个方面：

| 功能领域 | Issue 标题 | 用户诉求 | 相关 PR |
| :--- | :--- | :--- | :--- |
| **Agent 控制** | [#2843] same-agent final no-tools render | 改善转向链后的对话连贯性 | [#2844](https://github.com/sipeed/picoclaw/pull/2844) |
| **Agent 控制** | [#2837] support allow/deny/glob tool policies | 在多 Agent 场景下精细控制工具权限 | [#2838](https://github.com/sipeed/picoclaw/pull/2838) |
| **Agent 控制** | [#2829] explicit async result delivery policy | 控制子 Agent 生成的异步结果如何回传给父 Agent | [#2830](https://github.com/sipeed/picoclaw/pull/2830) |
| **协议支持** | [#2782] MCP client should support Streamable HTTP | 支持新一代 MCP 协议 Streamable HTTP，以连接更多 MCP 服务器 | 无 |
| **用户体验** | [#2834] Update from source | 希望有更清晰的版本升级教程 | 无 |
| **集成能力** | [#2421] Add email as native channel | 将邮件作为原生通信渠道，满足特定环境需求 | 无 |
| **认证与配置** | [#2546] Support OAuth 2.1 + PKCE for MCP servers | 让非技术人员也能方便地从仪表盘配置 OAuth 保护的 MCP 服务器 | 无 |

### 7. 用户反馈摘要

- **对 Agent 行为精细度的需求增加**: 多个 Issues (如 #2837, #2829, #2843) 清晰地表明，有经验的用户正在推动 PicoClaw 实现更复杂的 Agent 行为控制，不再满足于基础的对话功能，而是要求 PaaS 级别的策略配置。
- **对 MCP 协议演进的支持需求**: Issue #2782 提出了对 MCP **Streamable HTTP** 传输协议的支持，这是一个具体的技术需求，表明用户希望 PicoClaw 能与最新的 MCP 生态系统保持兼容。
- **对体验细节的关注**: Issue #2839 和 #2630 虽然看似微小，但都直接关系到用户能否可靠地获取和追溯 Agent 的工作成果，说明社区对于产品成熟度和交互细节非常在意。

### 8. 待处理积压

- **[#2421] [Feature] Add email as native channel** (创建于 2026-04-08)
  - 这是一个高质量的功能请求，描述了清晰的使用场景（企业、科研等保守环境），且获得了点赞支持。该功能扩展性强，建议项目维护者评估并给出初步的设计回复。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2421

- **[#2546] [Feature] Support OAuth 2.1 + PKCE for MCP servers** (创建于 2026-04-16)
  - 该 Issue 提出了一个明确的痛点：非技术用户无法在仪表盘上轻松配置需要 OAuth 的 MCP 服务器。此功能可以显著降低 PicoClaw 的使用门槛。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2546

- **[#2674] [BUG] Codex OAuth: empty assistant response** (创建于 2026-04-26)
  - 该 Bug 影响 Codex OAuth 流程，导致直接的功能性失败。虽然有讨论，但暂无明确的修复 PR，建议维护者优先跟进。
  - **链接**: https://github.com/sipeed/picoclaw/issues/2674

</details>