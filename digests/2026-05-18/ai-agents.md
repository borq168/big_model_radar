# OpenClaw 生态日报 2026-05-18

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-18 02:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 OpenClaw 项目数据生成的 2026-05-18 项目动态日报。

---

# OpenClaw 项目日报 2026-05-18

## 今日活动概览

今日项目活跃度极高，过去24小时内共处理了500条Issue和500条PR，用户和贡献者的参与非常积极。项目发布了3个新的Beta版本（v2026.5.16-beta.4/5/6），主要聚焦Mac桌面应用界面重构和`autoreview`技能的重命名。在PR方面，有多个旨在修复Codex兼容性、网关稳定性和CLI工具的补丁被提交，社区维护者也在持续响应安全问题。

## 版本发布

**最新版本：v2026.5.16-beta.4, v2026.5.16-beta.5, v2026.5.16-beta.6**

**主要更新内容：**
- **Mac 桌面应用：** 对设置页面进行了全面重构，采用了统一的卡片式布局和缓存导航，美化了权限、语音、技能等配置面板，并优化了原生侧边栏的间距。
- **技能模块：** 将仓库本地的 Codex closeout review 技能及其辅助工具更名为 `autoreview`，以保持命名语义的清晰一致性。
- **安全审计：** 在beta.4版本中新增了 `security.audit.suppressions` 配置项，允许用户主动忽略已知的安全审计发现。被忽略的项目将不会出现在活跃摘要中，但会在JSON输出中保留并附上“主动忽略”标注。
- **代理/子代理：** 修复了委托子代理时的相关逻辑。

**破坏性变更与迁移注意事项：**
- 本次发布似乎没有引入破坏性变更。如果您之前使用了名为 `codex-closeout-review` 的技能，请将其引用更新为 `autoreview`。

## 项目进展

今日合并/关闭了若干重要PR，主要集中在小范围修复和功能增强上。

- **#83372 fix(migrate): use plan.summary for header conflict/sensitive counts** （已关闭）：修复了迁移预览头部中，当冲突项属于隐藏配置时，错误显示为“0冲突”的问题。
- **#83340 [codex] Add payload regression for commentary-prefixed final answers** （已关闭）：为Codex的一个payload回归问题增加了回归测试用例。
- **#83215 ci: skip changelog-only workflow runs** （已关闭）：优化CI流程，当PR仅修改`CHANGELOG.md`时将跳过不必要的CI工作流，减少不必要的资源消耗。

## 社区热点

今日讨论最活跃、关注度最高的问题主要集中在以下几个方面：

1.  **跨平台支持（#75）：** 这个老牌Issue（104条评论）今天仍然是最热的话题。用户 `@steipete` 强烈呼吁为Linux和Windows提供类似macOS的功能完整的桌面应用，这反映了社区对桌面端体验的普遍需求。
    - 链接：https://github.com/openclaw/openclaw/issues/75

2.  **严重安全问题引发热议（#25592）：** Issue #25592（26条评论）报告代理在工具调用之间产生的“内部处理文本”会泄露到公开的消息频道（如Slack、iMessage）。这是一个严重的UX和隐私问题，被标记为P1优先级，且已有PR关联，社区对此非常关注。
    - 链接：https://github.com/openclaw/openclaw/issues/25592

3.  **构建与分发体验（#9443）：** 用户 `@AstridQing-AI` 代表另一位用户提交了Issue，强烈请求提供预构建的Android APK文件，而不是让用户自己编译。表明社区对降低使用门槛有强烈诉求。
    - 链接：https://github.com/openclaw/openclaw/issues/9443

## Bug 与稳定性

今日报告的Bug数量众多，涵盖了从崩溃回归到功能异常的多种类型。以下为严重程度较高的几个：

- **P1 (Critical): 工具调用间文本泄露 (#25592)**
    - **影响：** 安全，消息丢失。内部处理逻辑暴露给用户。
    - **修复状态：** 有PR关联 (`clawsweeper:linked-pr-open`)。
    - 链接：https://github.com/openclaw/openclaw/issues/25592

- **P1 (Critical): Signal守护进程竞态条件 (#22676)**
    - **影响：** 消息丢失，崩溃循环。`SIGUSR1`重启时导致孤儿进程和端口竞争。
    - **修复状态：** 有PR关联 (`clawsweeper:linked-pr-open`)。
    - 链接：https://github.com/openclaw/openclaw/issues/22676

- **P1 (Regression): Gemini模型转换空对象错误 (#38327)**
    - **影响：** 身份验证，崩溃循环。升级到`2026.3.2`后，使用`google-vertex/gemini-3.1-pro-preview`模型的嵌入式代理会立即失败。
    - **修复状态：** 已被标记为可修复 (`clawsweeper:queueable-fix`)。
    - 链接：https://github.com/openclaw/openclaw/issues/38327

- **P1 (Security): `exec-approvals.json` 写入错误路径 (#29736)**
    - **影响：** 安全。`exec-approvals` 路径未遵循配置的`state root`，而是写入`~/.openclaw`。
    - **修复状态：** 需要维护者审查。
    - 链接：https://github.com/openclaw/openclaw/issues/29736

- **P1 (Bug)：OPENCLAW_HOME 环境变量导致嵌套目录 (#45765)**
    - **影响：** 影响会话状态。当设置`OPENCLAW_HOME`为`~/.openclaw`时，`onboard`命令会产生`~/.openclaw/.openclaw`的嵌套目录。
    - **修复状态：** 有重现步骤，待修复。
    - 链接：https://github.com/openclaw/openclaw/issues/45765

## 功能请求归类

用户提出的新功能请求主要集中在以下几个方向：

- **安全与信任：**
    - **屏蔽密钥/安全秘密管理 (#10659, #13610)**：防止代理直接读取原生API密钥，建议集成第三方密钥管理服务 (AWS Secrets Manager, Vault等)。
    - **文件系统沙箱 (#7722, #37634)**：通过配置（黑/白名单）限制代理对文件系统的访问，并确保“无工作区访问”模式下的写权限。
    - **预响应强制钩子 (#13583)**：在代理回复前强制执行“必调用工具X”等硬性规则，适用于金融、安全等高合规性场景。

- **平台支持与集成：**
    - **Linux/Windows 桌面应用 (#75)**：社区呼声最高的功能请求。
    - **预构建 Android APK (#9443)**：降低用户使用门槛。
    - **Slack Block Kit 支持 (#12602)**：用于输出更丰富的交互式消息（如表格、按钮）。
    - **Telegram Business 机器人支持 (#20786)**：让机器人能接收来自企业个人聊天的消息。

- **性能与体验优化：**
    - **分层引导文件加载 (#22438)**：按需加载文件以节省LLM的token成本。
    - **减少工具Schema Token开销 (#14785)**：目前每个会话固定消耗约3500 tokens在工具描述上。
    - **会话快照 (#13700)**：支持保存和加载会话检查点，以便于A/B测试和回滚。

## 用户反馈摘要

从今日的Issue评论中，可以提炼出以下真实用户反馈：

- **痛点：** 用户对代理“自言自语”行为感到困扰。无论是工具调用间的文本泄露到聊天频道 (#25592)，还是子代理完成后强制的公告 (#8299)，用户都希望有更多控制权（如配置项来压制）。
- **痛点：** 跨平台体验严重不足。特别是Linux和Windows用户，感到被边缘化 (#75)。同时，Android用户也被迫进行本地编译 (#9443)，提升了使用门槛。
- **场景：** 多智能体编排的实际困难。有用户 ( @waliddafif) 尝试并行运行多个代理时，遇到了配置覆盖、会话锁定失败等稳定性问题 (#43367)，表明该功能的健壮性仍需打磨。
- **反馈：** 对安全功能的重视。用户 ( @aaroneden) 希望能有“黑名单”模式，实现“允许一切，但阻止特定危险命令”的策略 (#6615)，这比现有的纯粹的白名单模式更灵活。此外，对内存嵌入设置的缺失 (#16670) 也有用户表达了不满。

## 待处理积压

以下为长期存在但今日未见明显维护者响应的关键Issue或PR，建议项目维护者关注：

- **#38290 Gateway: allow extension origins in browser allowlist (P2, impact:security)**：该PR已存在超过2个月，旨在修复无法在网关允许列表中添加 `chrome-extension://` 来源的问题。这对于希望集成浏览器扩展管理`Control UI`的用户至关重要。
    - 链接：https://github.com/openclaw/openclaw/pull/38290

- **#13583 Pre-response enforcement hooks (hard gates) (P2, impact:security)**：此功能请求已讨论超3个月，旨在提供强制的工具调用钩子。考虑到目前安全相关的请求越来越多，此功能的优先级可能需要重新评估。
    - 链接：https://github.com/openclaw/openclaw/issues/13583

- **#10659 Feature Request: Masked Secrets (P1, impact:security)**：这个P1安全功能请求已开放超3个月。虽然今日有新的评论，但尚未进入开发阶段。
    - 链接：https://github.com/openclaw/openclaw/issues/10659

- **#43367 Multi-agent orchestration is unstable (P1)**：该Issue报告了多代理编排中的多个严重稳定性问题，自3月11日提出后至今仍未得到解决，影响了高级用户的核心使用场景。
    - 链接：https://github.com/openclaw/openclaw/issues/43367

---

## 横向生态对比

好的，作为 AI 智能体与个人 AI 助手领域开源项目的资深技术分析师，现根据您提供的 2026-05-18 各项目日报数据，生成横向对比分析报告如下。

---

# 开源 AI 智能体项目横向对比日报 (2026-05-18)

## 1. 今日横向概览

今日，四个项目均保持高度活跃。**OpenClaw** 以海量的 Issue (500条) 和 PR (500条) 活动遥遥领先，但其核心热点是公开频道中“内部处理文本泄露”的严重隐私问题；**Zeroclaw** 则聚焦于多个 P1/Bug 的修复和讨论，特别是 API 兼容性与配置项失效问题；**NanoBot** 和 **PicoClaw** 活动量适中，前者侧重 WebUI 稳定性修复与文档完善，后者成功合并了多项关键功能（如 SiliconFlow 原生支持）并修复了安全漏洞。

## 2. 各项目活跃度对比

| 项目 | 新增/更新 Issue | 新增/更新 PR | 版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500条 | ~500条 | 3个Beta版 (v2026.5.16-beta.4/5/6) | 活跃度极高；核心热点是代理工具调用间文本泄露到公共频道的 P1 安全与隐私问题。 |
| **NanoBot** | 9条 (8新, 1关) | 18条 (10待, 8合) | 无 | 活跃度中等；核心工作是修复 WebUI 显示错乱、Docker 构建及微信兼容性问题。 |
| **Zeroclaw** | 20条 (16新, 4关) | 50条 (41待, 9合) | 无 | 活跃度高；多项 P1/Bug 在讨论，涉及 DeepSeek-V4 不兼容、工具调用内容泄露及配置“死代码”。 |
| **PicoClaw** | 12条 (7关) | 13条 (8合) | v0.2.8-nightly | 活跃度中等偏上；合并了 SiliconFlow 支持、Windows 安全加固等重要 PR。 |

## 3. OpenClaw 与同类对照

- **活动量与规模**: **OpenClaw** 的社区参与规模（Issue/PR 数量）远大于其他三个项目，达到了两个数量级的差异，这既反映出其用户基数或问题复杂度的不同，也可能暗示其代码库管理流程的噪音更高。
- **技术重点差异**:
    - **OpenClaw** 技术话题更分散，兼顾桌面应用重构（Mac）、技能重命名 (`autoreview`)、安全审计配置与多代理编排稳定性。
    - **Zeroclaw** 则高度集中于 API 兼容性（DeepSeek-V4、Kimi-code）和底层代码腐化（配置项无实现），更偏向底层集成与工程健壮性。
    - **NanoBot** 和 **PicoClaw** 重点在于修复 Web UI 回归问题、完善轻量级集成（微信、SiliconFlow）和 Docker 部署体验，更侧重易用性与功能扩展。
- **社区讨论焦点**: **OpenClaw** 最热议题是“内部处理文本泄露到公开频道”（#25592），这是一个典型的因功能设计不当导致的公共频道安全和隐私问题。而 **Zeroclaw** 的热点则是特定模型 API 格式不兼容和配置“死代码”，反映的是对新兴模型跟进速度与代码质量的问题。**NanoBot** 和 **PicoClaw** 最热讨论则是用户部署与使用中的具体 Bug（如 WebUI 显示错乱、`exec` 工具误报）。

## 4. 共同出现的技术方向

基于今日数据，多个项目共同关注了以下技术方向：

1.  **工具调用间内容泄露与可见性控制**:
    - **OpenClaw (#25592)**：代理在工具调用产生的内部文本泄露到 Slack/iMessage 等公开频道。
    - **Zeroclaw (#6734)**：Qwen 3.6 模型的工具调用内容泄露到 Matrix 消息。
    - **NanoBot (#3878)**：修复 CLI 模式下推理令牌逐行显示（虽不是泄露，但属于内容展示精细度问题）。
    - **观察**：这些独立问题共同指向一个趋势：在复杂的多工具、多模型调用场景下，如何精确控制“可见”与“不可见”信息，是社区普遍面临的用户体验和安全性挑战。

2.  **技能/工具冷却与审计机制**:
    - **OpenClaw**：讨论 `exec-approvals` 路径错误写入（安全）。
    - **NanoBot**：用户请求 `exec` 工具的强制黑名单覆盖授权机制。
    - **Zeroclaw**：合并了修复技能管理工具冷却时间的 PR (#6725)，请求移除“远程 Markdown 链接被阻止”的误报审计。
    - **趋势**：社区的呼声已经从单纯的“工具执行权限”细化为更精细的“工具行为控制”（如冷却、限流、审计规则）、误报解决与授权覆写机制。

3.  **跨平台与集成兼容问题**:
    - **OpenClaw (#75, #9443)**：社区强烈呼吁 Linux/Windows 桌面应用和 Android 预构建 APK。
    - **NanoBot (#3863, #3873)**：微信登录失败、Docker 部署文档与版本不符。
    - **Zeroclaw (#6705)**：Windows 上 Cron 硬编码 `sh` 命令导致不可用。
    - **PicoClaw (#28, #2887)**：Android 连接 LM Studio 需求、RISC-V 平台兼容性问题。
    - **观察**：跨平台支持（特别是 Windows、Linux、移动端）仍是此类 AI 代理项目的一个普遍短板和持续痛点，直接影响了用户群的扩展。文档滞后于代码是另一个普遍现象。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全能型个人 AI 助手，强在代理编排、安全性、桌面应用与大规模集成。 | 轻量、极简的个人 Agent，强在 Web UI 体验、CLI 和基础聊天的流畅性。 | 开发者导向的任务自动化 Agent，强在多代理编排、Cron 任务、底层技能管理与 API 兼容性。 | 嵌入式/边缘 AI Agent，强在低功耗硬件适配（RISC-V）、轻量化 API 集成与本地部署。 |
| **目标用户** | 追求功能全面、灵活配置和高阶安全控制的进阶用户与开发者。 | 追求快速上手、无需复杂配置的个人用户和轻量级场景开发者。 | 进行复杂任务编排、自动化工作流、深度定制和自托管的高级开发者/运维人员。 | 面向嵌入式、IoT、移动设备和个人私有化的用户，注重便携性与低功耗。 |
| **技术架构差异** | 代码库庞大，功能模块化，社区贡献流程复杂（有安全审计配置）。 | 架构相对简单，高度依赖 Web Gateway 和插件化的 Provider。 | 强调技能（Skills）和 Cron 驱动的自动化，引入了 Dream 模式（记忆整合）和 Schema V3。 | 轻量级架构，后端抽象层易于扩展新 Provider（如 SiliconFlow），注重 Web 和后端配置便捷性。 |

## 6. 社区活跃度记录

- **第一梯队（非常活跃）**：**OpenClaw** 和 **Zeroclaw**。这两个项目的 Issue 和 PR 数量级最高，且集中在核心功能和稳定性问题上。OpenClaw 的活动规模巨大，而 Zeroclaw 的问题严重程度（P1/Bug 密集）和社区反馈激烈程度更高。两者都在推进重大的架构级功能（如 Multi-Agent Runtime）。
- **第二梯队（中等活跃）**：**NanoBot** 和 **PicoClaw**。两者均维持稳定的贡献节奏（每日数个 PR 合入，数个 Issue 更新），更侧重于 Bug 修复、文档更新和中等规模的功能增强。

## 7. 有证据支撑的观察

- **观察1：安全与隐私从“功能”变成“事件”**：OpenClaw 和 Zeroclaw 在同一天出现“工具调用内容泄露到公共频道”的安全事件（OpenClaw #25592, Zeroclaw #6734），且均被标记为高优先级。这印证了在多模态、多通道交互成为常态后，精确控制内部推理与外部输出边界是当前最普遍、最紧急的工程挑战。
- **观察2：项目规模与问题类型正相关**：规模更大、功能更全的项目（OpenClaw, Zeroclaw），其 Bug 报告更偏向底层的“代码腐化”（如配置项无实现、API 兼容性问题）和“架构复杂性缺陷”（如竞态条件）。而较小、更聚焦的项目（NanoBot, PicoClaw）的 Bug 多为 UI、集成细节和 Docker 构建等“用户界面”问题。
- **观察3：文档质量成为普遍共性痛点**：NanoBot 报告了 Docker 文档与当前版本不一致 (#3873)；Zeroclaw 报告了多个配置项在文档中有声明但代码无实现 (#6722)。文档作为项目的“用户体验外壳”，其滞后和不准确正在影响多个项目的用户评价和上手体验。
- **观察4：跨平台支持仍是核心用户长期诉求**：OpenClaw（Linux/Windows桌面、Android APK）和 PicoClaw（Android、RISC-V）今日均收到了引人瞩目的跨平台/硬件需求。这表明社区对“个人 AI 助手”的期望已不满足于仅限 macOS 或 x86 架构，而是追求普遍的无缝体验。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据您提供的 NanoBot (github.com/HKUDS/nanobot) GitHub 数据生成的 2026-05-18 项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-18

### 今日活动概览

过去 24 小时内，NanoBot 项目活跃度较高。共产生 9 条 Issue 更新（8 条新开，1 条已关闭），以及 18 条 PR 更新（10 条待合并，8 条已合并/关闭）。社区反馈集中在 WebUI 稳定性、微信集成兼容性及 Docker 部署文档问题上。在代码贡献方面，维护团队合并了多个关键修复，包括 CLI 流式显示的优化、内部竞态条件的解决，以及 Docker 构建流程的修复，同时有多个新功能 PR 处于待合并状态。

### 版本发布

**无**，过去 24 小时内没有新版本发布。

### 项目进展

今日有 8 个 Pull Request 被合并或关闭，主要集中在问题修复和文档完善上：

- **`fix(cli): buffer reasoning tokens to avoid one-token-per-line display`** ([#3878](https://github.com/HKUDS/nanobot/pull/3878))：合入。修复了 CLI 模式下（如使用 DeepSeek-V4 模型时）推理令牌逐行显示的问题，改善了用户体验。
- **`fix(agent): resolve race between AutoCompact and Consolidator`** ([#3881](https://github.com/HKUDS/nanobot/pull/3881))：合入。解决了“自动压缩（AutoCompact）”与“会话整理器（Consolidator）”之间的竞争状态，提升了会话管理模块的稳定性。
- **`fix: docker build`** ([#3870](https://github.com/HKUDS/nanobot/pull/3870)) / **`fix docker build and webui`** ([#3872](https://github.com/HKUDS/nanobot/pull/3872))：合入。两个 PR 均针对 Docker 构建失败问题进行了修复。
- **`feat(goal): /goal command & long-running tasks (long_task)`** ([#3788](https://github.com/HKUDS/nanobot/pull/3788))：合入。为 WebUI 引入了“目标”（/goal）命令和长时任务支持，这是一个较为重要的功能增强。
- **`fix(providers): recognize Chinese rate-limit marker '访问量过大' as transient error`** ([#3864](https://github.com/HKUDS/nanobot/pull/3864))：合入。一个实用性修复，将中文提示“访问量过大”识别为临时限流错误，使系统能够自动重试。
- **`docs(configuration): expand secrets section with more examples`** ([#3866](https://github.com/HKUDS/nanobot/pull/3866))：合入。完善了配置文档，为用户提供更多关于 Secrets 的示例。
- **`feat(webui+agent): optimize streaming, activity rendering, and runtime sync`** ([#3877](https://github.com/HKUDS/nanobot/pull/3877))：合入。优化了长对话/长历史的 WebUI 渲染和运行时同步性能。

### 社区热点

社区讨论最集中的 Issue 是 WebUI 的显示错乱问题：

- **`[bug] WebUI会话-打印内容显示错乱`** ([#3790](https://github.com/HKUDS/nanobot/pull/3790))：此问题共收到 **14 条评论**，是过去 24 小时内最活跃的议题。用户 `@kxsk-git` 报告在升级到最新源码后，WebUI 会话打印内容显示异常，需刷新页面才能恢复。该 Bug 已存在 4 天，吸引了大量社区关注，表明这是一个影响面较广的 UI 回归问题。维护者尚未对此问题给出明确解决方案或状态更新。

### Bug 与稳定性

今日新增或活跃的 Bug 报告按严重程度排列如下：

**严重：**
1.  **WebUI 会话显示错乱** ([#3790](https://github.com/HKUDS/nanobot/issues/3790))：升级后出现的内容显示异常，需要手动刷新。**状态：** 未修复，等待维护者响应。已有修复 PR ([#3877](https://github.com/HKUDS/nanobot/pull/3877)) 对渲染做了优化，但未能解决此问题。
2.  **WebUI Bootstrap 报错 500** ([#3857](https://github.com/HKUDS/nanobot/issues/3857))：用户报告无法访问前端页面，`bootstrap` 端点返回 HTTP 500 错误。**状态：** 未修复。
3.  **WebUI 对话在首次回复后关闭** ([#3884](https://github.com/HKUDS/nanobot/issues/3884))：用户报告在 Debian 系统上运行 Gateway 服务后，WebUI 对话在第一次响应后即自动关闭。**状态：** 未修复。
4.  **微信无法登录** ([#3863](https://github.com/HKUDS/nanobot/issues/3863))：用户已更新微信至最新版本，但在扫描二维码后仍被提示“微信版本较低”，导致无法登录。**状态：** 未修复。这与已关闭的升级协议 Issue ([#3882](https://github.com/HKUDS/nanobot/issues/3882)) 相关。

**一般：**
5.  **Docker 部署文档与 v0.2.0 不一致** ([#3873](https://github.com/HKUDS/nanobot/issues/3873))：用户 `@URD0TH` 详细列出了 Docker 部署文档中的 5 处不一致问题，影响 WebUI 访问和沙箱功能。**状态：** 有对应的待合并修复 PR ([#3875](https://github.com/HKUDS/nanobot/pull/3875))。

### 功能请求归类

今日社区提出的新功能与相关待合并 PR 如下：

- **Dream 系统作业全局开关** ([#3885](https://github.com/HKUDS/nanobot/issues/3885))：用户希望在配置中添加一个开关，以完全禁用 Dream 系统（记忆整理）作业，避免其即使在记忆功能被禁用时仍被注册到 cron 服务。
- **危险命令检测的用户授权机制** ([#3887](https://github.com/HKUDS/nanobot/issues/3887))：用户请求为 `exec` 工具增加用户授权机制，以在需要时绕过其硬编码的“危险命令”黑名单规则。
- **新增图像生成 Provider**：两个 PR 分别引入了新的图像生成服务提供商：
    - **Gemini** 支持 ([#3886](https://github.com/HKUDS/nanobot/pull/3886))：`@zayfod` 提交，覆盖 Imagen 4 和 Gemini Flash 模型。**状态：** 待合并。
    - **MiniMax** 支持 ([#3879](https://github.com/HKUDS/nanobot/pull/3879))：`@yaotutu` 提交。**状态：** 待合并。
- **CLI 模型管理命令** ([#3883](https://github.com/HKUDS/nanobot/pull/3883))：`@AZX-Eddie` 提交，新增 `nanobot model` 系列命令，用于查看、修改模型配置和测试 API 连通性。**状态：** 待合并。
- **skill_load 工具** ([#3847](https://github.com/HKUDS/nanobot/pull/3847))：`@mkitsdts` 提交，旨在解决多轮对话中 `skill.md` 文件内容丢失的问题。**状态：** 待合并。

### 用户反馈摘要

从今日的 Issue 评论中可以提取出以下真实用户痛点：

- **升级回归问题**：用户 `@kxsk-git` 在升级最新的 `0.1.5.post3.2026.05.13` 版本后，遇到了 WebUI 内容显示错乱的问题。这表明近期发布的版本可能存在回归 Bug。
- **集成痛点**：微信登录失败是另一个高频痛点，用户 `@KennethYCK` 已更新微信但仍无法使用，说明与外部服务的集成兼容性需要持续维护。
- **文档与部署混淆**：用户 `@URD0TH` 指出 Docker 文档与当前版本不匹配，导致部署失败。这反映了文档未能及时跟上代码更新，增加了用户的上手成本。
- **限制性功能的不便**：用户 `@v2up-32mb` 希望为 `exec` 工具增加授权机制，而 `@codeLong1024` 希望有个明确的开关来禁用 Dream 作业。这些都指向用户对现有默认行为的灵活配置需求。

### 待处理积压

以下 Issue 或 PR 长期未得到维护者回应或合并，值得关注：

- **`feat: shell tool: allow configurable specific paths when restrict_to_workspace=True`** ([#2060](https://github.com/HKUDS/nanobot/pull/2060))：此 PR 自 2026-03-15 开启，至今已超过 2 个月，旨在为 `restrict_to_workspace` 功能增加更灵活的路径配置。长时间未合并，可能涉及较大改动或存在争议。
- **`[invalid] telegram group allowlist...`** ([#2867](https://github.com/HKUDS/nanobot/pull/2867))：自 2026-04-06 开启的 PR，增加了 Telegram 群组白名单功能。虽标记为 `invalid`，但已超过 1 个月未更新。
- **`feat(image-generation)` 相关 PR**：图像生成是两个开发者分别提出的功能请求，但相关 PR ([#3886](https://github.com/HKUDS/nanobot/pull/3886)， [#3879](https://github.com/HKUDS/nanobot/pull/3879)) 今日才提交，尚在等待评审。
- **`[bug] bootstrap failed: HTTP 500`** ([#3857](https://github.com/HKUDS/nanobot/issues/3857)) 和 **`[bug] WebUI - The conversation closes after the first response`** ([#3884](https://github.com/HKUDS/nanobot/issues/3884))：两个严重影响使用的 WebUI Bug 尚未得到维护者的评估或回复。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的 Zeroclaw GitHub 数据，以下是为您生成的 2026-05-18 项目动态日报。

---

# Zeroclaw 项目日报 – 2026-05-18

## 1. 今日活动概览

过去24小时内，Zeroclaw项目保持高度活跃。社区共提交了20条Issue更新，其中16条为新开或活跃状态，4条已关闭；同时有50条PR更新，其中41条仍在待合并状态，9条已完成合并或关闭。项目无新版本发布。当日活动主要集中在多项高优先级（P1）Bug的修复与讨论，以及涉及多代理运行时、Dream模式和技能工具链的大型功能PR的推进上。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有多个重要PR被关闭或合并，推动了稳定性、技能管理及桌面端支持的进展。

- **Bug修复与新功能的合并：**
    - PR [#6725](https://github.com/zeroclaw-labs/zeroclaw/pull/6725) (fix/skills: enforce cooldown in skill_manage patch action) 被合并。该PR修复了技能管理工具中冷却时间未生效的问题，确保了技能改进操作的频率限制正常工作。
    - PR [#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) ([desktop] support for windows and linux for desktop app) 被合并。此PR扩展了桌面应用对Windows和Linux操作系统的支持，并处理了Linux平台的屏幕捕获兼容性问题。
    - PR [#6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) (fix(ci): unblock pr-title workflow with inline regex check) 被创建并试图解决CI流程阻塞问题。

- **推进中的大型功能：**
    - PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) (feat(memory): add dream mode for periodic memory consolidation) 仍处于开放状态，引入了周期性记忆整合的“Dream模式”。
    - PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (v0.8.0: Multi-Agent Runtime and Schema V3) 仍在征集反馈中，这是下一个里程碑版本的核心PR。

## 4. 社区热点

当日多个高优先级Bug引发了社区的集中讨论，同时一个已存在两周多的配置问题也被重新聚焦。

- **Provider兼容性与推理内容传递：**
    - Issue [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (Incompatible with DeepSeek-V4 API format) 拥有9条评论，是关于**DeepSeek-V4 API**格式不兼容的P1级Bug，直接导致用户无法使用DeepSeek新版本模型，影响面大。
    - 类似地，Issue [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) (reasoning_content not passed back in agentic tool-call loops with Xiaomi thinking mode models) 报告了使用小米和DeepSeek等模型的**thinking模式**时，`reasoning_content`在工具调用循环中丢失的问题，被标记为S0级数据丢失风险，引发了高度关注。
    - Issue [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (Use kimi-code provider in streaming chat call tools, provider API reports an error) 作为S1级Bug（工作流阻塞），虽在4月10日创建，但近期仍在更新，说明Kimi-code Provider的流式调用问题顽固且仍在影响用户。

- **配置项失效与代码腐化：**
    - 用户`nick-pape`在5月16日集中提交了多个关于**已声明但无效的配置项**的Issue，如[#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) (Native OpenAI provider hardcodes 120s request timeout) 和[#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) (MemoryConfig.rerank_enabled / rerank_threshold scaffolded but no consumer)。这些报告揭示了配置框架与代码实现之间存在严重脱节，引发了社区对项目代码质量和文档准确性的讨论。

## 5. Bug 与稳定性

今日共报告/更新了多个严重级别的Bug，部分已有修复PR。

| 严重等级 | Issue | 摘要 | 影响组件 | Fix PR / 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **S0 - 数据丢失** | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | reasoning_content 在多轮代理调用中丢失 | provider, agent | 无 |
| **S0 - 安全风险** | [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) | CI工具 `amannn/action-semantic-pull-request` 因不在允许列表而无法运行 | tooling/ci | 可通过PR [#6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) 解决 |
| **S1 - 工作流阻塞** | [#6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705) | Windows上Cron任务因硬编码`sh`命令执行失败 | cron | 已关闭，待确认修复 |
| **S1 - 工作流阻塞** | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | `tool_search`不在默认自动批准列表，导致非交互模式下MCP工具加载挂起 | agent, tool | 无 |
| **S2 - 行为降级** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | 与DeepSeek-V4 API格式不兼容 | provider | 无 |
| **S2 - 行为降级** | [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) | Qwen 3.6工具调用内容泄露到Matrix消息中 | provider, channel | 无 |
| **S2 - 行为降级** | [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | Cron时区设置在不同接口（工具、CLI、API）之间不一致 | cron, gateway | PR [#6741](https://github.com/zeroclaw-labs/zeroclaw/pull/6741) 已提出修复 |

此外，CI流程[#6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751)和[#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747)报告了因配置文件/CD工具变更导致的`startup_failure`问题，影响了所有PR的质量门禁，需要立即处理。

## 6. 功能请求归类

社区提出的功能请求主要围绕 **文档完善**、**技能/LLM生态** 和 **测试增强** 三个方面：

- **开发者体验与文档：**
    - [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) (已关闭)：提议构建官方文档网站并建立端到端文档，该请求已在最近被实现/关闭。
    - [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)：作为v0.7.6版本的主题追踪，致力于提升`zeroclaw skills`命令的CLI、加载、审计等用户体验。

- **技能生态优化：**
    - [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)：请求从技能审计中移除“远程Markdown链接被阻止”的检查，因其误报率高，阻碍了真实技能的上架。

- **测试与诊断：**
    - [#6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742)：请求为`--log-llm`功能添加流式负载追踪测试，以验证调试功能的准确性。

## 7. 用户反馈摘要

从今日的Issue和PR评论中，可提取出以下真实用户反馈：

- **对DeepSeek新模型的接入有强烈且受挫的需求**：用户在[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)中反馈，尝试使用DeepSeek-V4系列模型时遭遇了thinking模式兼容性问题，导致整个provider无法工作。这反映出用户对新模型迭代的跟进非常迫切。
- **配置项“死代码”损害用户信任**：多个用户（如`nick-pape`）在[#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)、[#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720)和[#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)中指出，文档中存在`rerank_enabled`、`context_aware_tools`等配置项，但实际代码并未实现，这给用户带来了困惑和误导，降低了配置的可靠性。
- **Windows用户面临严重障碍**：[#6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705)明确指出，硬编码的`sh`命令使得Cron功能在Windows上完全不可用，将该功能的用户体验评级为“工作流阻塞”。

## 8. 待处理积压

以下是一些长期未关闭或关键待响应的议题，值得维护者关注：

- **核心功能与代码质量：**
    - **Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** (audit: track 153 commits lost in bulk revert): 一个关于追踪并恢复因回滚丢失的153个提交的审计任务。该议题自4月24日以来活跃至今，涉及代码库的完整性和历史恢复，是严重的技术债务，需谨慎处理。
    - **PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)** (v0.8.0: Multi-Agent Runtime and Schema V3): 作为下一个大版本的基石，此已有超过一周且仍在寻求反馈。庞大的改动量和“弹幕”式的标签列表意味着它需要大量精力审查，潜在的阻塞风险和重构成本较高。

- **已有PR的冗长周期：**
    - **PR [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512)** (Fix/email html subject attachments): 修复邮件频道问题的PR从5月7日提交至今尚未合并，期间邮件相关功能用户可能持续受影响。
    - **PR [#6209](https://github.com/zeroclaw-labs/zeroclaw/pull/6209)** (fix(skills): strict SkillMeta): 此PR旨在解决核心元数据架构问题，但自4月29日提交后仍在开放中，技术方案与反馈的闭环过程较慢。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-05-18

## 今日活动概览

过去24小时内，PicoClaw 项目活跃度较高。**v0.2.8-nightly** 自动化构建版本已发布。Issue 和 PR 方面，共有 **12条 Issues** 和 **13条 PRs** 产生更新，其中 **7个 Issues** 和 **8个 PRs** 已被关闭/合并，社区贡献节奏良好。核心进展包括**SiliconFlow 提供商**的独立支持已通过 PR 完成合并、**load_image 工具配置** 的 Bug 得到修复，以及聊天界面细节体验的持续优化。

## 版本发布

- **Nightly Build (v0.2.8-nightly.20260518.0df050ff)**
  这是一个自动化构建的夜间版本，基于最新主分支代码，可能包含不稳定因素。
  [发布页](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 项目进展

今日有多个重要 PR 被合并，显著推动了功能和修复：

1.  **新增 SiliconFlow 提供商支持**: PR [#2885](https://github.com/sipeed/picoclaw/pull/2885) 已被合并。该 PR 将 SiliconFlow 作为一等公民提供商集成至后端工厂、模型获取 API 及 Web 提供商注册表，解决用户需通过通用 OpenAI 兼容模式配置的不便。

2.  **修复 load_image 工具配置问题**: PR [#2879](https://github.com/sipeed/picoclaw/pull/2879) 已合并。修复了 `load_image` 工具无法在 `config.json` 中通过 `isToolEnabled` 正确配置启用的 Bug。

3.  **改进模型配置工作流**: PR [#2752](https://github.com/sipeed/picoclaw/pull/2752) 已合并。此 PR 改进了 Web UI 和后端的模型配置流程，新增了上游模型获取、模型目录保存、提供商感知的验证与选择以及基础的模型连通性测试。

4.  **真实连通性验证功能**: PR [#2833](https://github.com/sipeed/picoclaw/pull/2833) 已合并。此功能通过真实的网络请求来验证模型连接的可用性，提升了配置体验。

5.  **Windows PowerShell 安全加固**: PR [#2836](https://github.com/sipeed/picoclaw/pull/2836) 已合并。修复了一个通过 `iex` 注入实现的 PowerShell 编码绕过漏洞，增强了 Windows 平台的安全性。

6.  **聊天界面优化**: PR [#2882](https://github.com/sipeed/picoclaw/pull/2882) 为聊天代码块添加了独立的复制和折叠控制。

## 社区热点

1.  **#28: [Feat Request] LM Studio Easy Connect**：这条持续数月的功能请求，在今日再次更新。它希望为 LM Studio 提供更简易的连接方式，目标是能在 Android 设备上使用。该 Issue 拥有 **19条评论**，是社区讨论热度最高的。
    [Issue #28](https://github.com/sipeed/picoclaw/issues/28)

2.  **#1042: [BUG] exec工具的guardCommand方法问题**：该 Bug 报告了 `exec` 工具的安全守卫方法误报问题，即使命令不涉及路径操作（如 `curl`），也错误地触发了路径保护。引发了 **12条评论** 的讨论，说明此问题对开发者日常工作影响较大。
    [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)

## Bug 与稳定性

- **高优先级**:
    1.  **RISC-V 平台无法使用 OpenAI 模型** ([#2887](https://github.com/sipeed/picoclaw/issues/2887)): 用户报告在 RISC-V 架构的 Debian 系统上，PicoClaw 的 `.deb` 版本无法与 OpenAI 模型（如 gpt-5.4）正常工作。此问题为新报告，尚未有修复 PR。

- **中优先级**:
    1.  **OpenRouter 推理模型泄露思考过程** ([#2745](https://github.com/sipeed/picoclaw/issues/2745)): 已关闭。此问题描述模型推理时的“思考”前缀被错误地展示给最终用户，而非仅输出最终答案。
    2.  **Bash 工具将相对路径视为绝对路径** ([#2749](https://github.com/sipeed/picoclaw/issues/2749)): 已关闭。需确认修复方式。
    3.  **steering-chain 消息编辑问题** ([#2839](https://github.com/sipeed/picoclaw/issues/2839)): 仍开放。当使用 steering 功能时，最终回复会编辑掉之前的“Working...”占位符，导致消息顺序混乱。

- **低优先级**:
    1.  `exec` 工具的 `guardCommand` 路径误判问题（[#1042](https://github.com/sipeed/picoclaw/issues/1042)）：仍开放讨论。

## 功能请求归类

- **新增/已实现**:
    -   **SiliconFlow 提供商支持** ([#2884](https://github.com/sipeed/picoclaw/issues/2884))：用户希望添加独立提供商支持，对应 PR [#2885](https://github.com/sipeed/picoclaw/pull/2885) 今日已合并。
    -   **LOllam Cloud 凭证支持** ([#2225](https://github.com/sipeed/picoclaw/issues/2225))：已关闭，功能已实现或提供替代方案。

- **待讨论/开发中**:
    -   **LM Studio Easy Connect** ([#28](https://github.com/sipeed/picoclaw/issues/28))：社区持续关注，讨论热度高。
    -   **支持 AGENT.md 中的工具策略过滤器** ([#2837](https://github.com/sipeed/picoclaw/issues/2837), PR [#2838](https://github.com/sipeed/picoclaw/pull/2838))：为多 Agent 场景提供细粒度权限控制。PR 仍处于开放状态。
    -   **支持 MCP 服务器的 OAuth 2.1 + PKCE** ([#2546](https://github.com/sipeed/picoclaw/issues/2546))：已关闭，未来可能重新考量。

## 用户反馈摘要

1.  **积极反馈**:
    -   用户对 **SiliconFlow 原生支持** 的呼声得到迅速响应，相关 PR 在一天内被提出并合并，体现了社区活力。
    -   对 **配置文件改进** 和 **连通性测试** 等功能的合并，表明项目在提升可用性方面持续投入。

2.  **具体痛点**:
    -   **Android 使用场景**：用户渴望在 Android 设备上使用 PicoClaw 并连接 LM Studio ([#28](https://github.com/sipeed/picoclaw/issues/28))。
    -   **安全守卫误判**: [#1042](https://github.com/sipeed/picoclaw/issues/1042) 的讨论表明，`exec` 工具的路径守卫规则过于简单，影响了正常使用。
    -   **平台兼容性**：最新报告的 **RISC-V** 架构下的 OpenAI 兼容性问题（[#2887](https://github.com/sipeed/picoclaw/issues/2887)）暴露了在新兴硬件平台上的兼容性挑战。

## 待处理积压

- **工 Issue #1042 (exec工具guardCommand)**：长期开放的核心Bug，直接影响开发者日常使用，已被标记为 `stale` 但仍需要维护者给出更优的解决方案或指引。
    [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)
- **PR #2838 (AGENT.md tool policy filters)**：已开放9天，涉及多Agent协作场景的关键功能，需要合并方进行代码审查。
    [PR #2838](https://github.com/sipeed/picoclaw/pull/2838)
- **PR #2788 (每消息时间戳)**：已开放12天，功能较为独立，可提升会话历史的准确性，有待评估。
    [PR #2788](https://github.com/sipeed/picoclaw/pull/2788)

</details>