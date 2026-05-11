# OpenClaw 生态日报 2026-05-11

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-11 02:14 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为AI智能体与个人AI助手领域开源项目的分析师，我已根据您提供的OpenClaw项目数据，为您生成2026年5月11日的项目动态日报。

---

## OpenClaw 项目动态日报 — 2026-05-11

### 1. 今日活动概览

过去24小时，OpenClaw项目活动量巨大，共更新500条Issue和500条PR，其中有444个新开或活跃的Issue以及451个待合并的PR，显示社区讨论和贡献非常踊跃。项目发布了两个测试版本 v2026.5.10-beta.1 和 v2026.5.10-beta.2，核心更新聚焦于基于Telegram的QA自动化测试能力。社区关注的热点集中在内存泄漏、Agent响应卡死、以及会话管理等稳定性与性能问题上。多个关于“Codex-vs-Pi”运行时兼容性的QA相关Issue成为今日讨论的焦点，反映出项目在运行时迁移和测试方面的挑战。

### 2. 版本发布

项目发布了两个测试版本，内容高度相关：
- **v2026.5.10-beta.2** 和 **v2026.5.10-beta.1**: 这两个版本主要新增了 **QA/Mantis** 模块的能力，特别是针对Telegram渠道的自动化测试：
    - 引入了通过凭证租赁、内容捕获、GIF预览和内联PR评论来实现Telegram实时PR证据自动化。
    - 新增Telegram桌面端场景构建器，可以租赁环境、安装原生Telegram桌面客户端并进行配置。
- **无破坏性变更或迁移注意事项。**

### 3. 项目进展

部分重要PR在本日被关闭或推进，主要涉及核心功能修复和CI优化：
- **[已关闭] fix(gateway): allow loopback node-role sessions without device identity** (#48285)：修复了从`127.0.0.1`（本地回环）连接且角色为`node`的内部服务（如cron）因缺少设备身份而被拒绝的问题。这是一个影响内部服务调用的关键修复。
- **[已关闭] CI: restore secret scan and agent doc links** (#48115)：恢复了CI中的密钥扫描功能，并更新了相关文档链接，提升了项目的安全性内建检查能力。
- **多个 [QA harness] 相关Issue被修正或关闭**：如“mock provider-plan args” (#80312)、“mock Pi provider” (#80320)、“direct message fixture” (#80321)，这些被确认为测试框架（Harness）本身的问题而非Codex运行时的用户可见bug，体现了项目对QA质量的严格审计。
- **fix(agent): discard aborted assistant messages to prevent stale content** (#48283)：修复了当流式输出被中断时，Agent会将已缓存的陈旧或无关内容（如教程、FAQ模板）作为回复发送给用户的问题。

### 4. 社区热点

今日社区讨论高度集中，评论最多的Issue主要围绕以下问题：
- **内存泄漏与状态清理**：[[Bug]: Feishu monitor state cleanup incomplete - potential memory leak in httpServers Map](https://github.com/openclaw/openclaw/issues/48183)（16条评论）和 [sessions.json unbounded growth causes gateway OOM](https://github.com/openclaw/openclaw/issues/55334)（8条评论，获1个👍）反映了用户对服务长期运行稳定性的担忧。
- **Agent行为异常**：[Heartbeat alternates between sent and ok-token every cycle](https://github.com/openclaw/openclaw/issues/47940)（13条评论）、[Agents stop responding mid work](https://github.com/openclaw/openclaw/issues/76877)（10条评论，获4个👍）和 [Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)（10条评论）是使用中的核心痛点，直接影响了Agent任务的可靠性和可预测性。
- **安全与Prompt注入**：[gh-issues skill: untrusted issue body injected directly into sub-agent prompt](https://github.com/openclaw/openclaw/issues/45740)（12条评论）社区对安全风险的警觉性很高。
- **QA运行时一致性**：[Codex-vs-Pi runtime parity QA harness](https://github.com/openclaw/openclaw/issues/80171)（7条评论，获1个👍）及相关的一系列依赖Issue引发了关于Codex和Pi运行时行为差异的深度讨论。社区成员[100yenadmin](https://github.com/100yenadmin) 提交了多个关于QA框架本身缺陷的Issue，体现了社区对理解项目内部复杂性的积极态度。

**共同诉求：** 用户迫切需要更稳定的基础服务（无泄漏、无卡死）、更可靠的Agent任务执行（不静默失败、不超时吞结果）、以及更透明的安全处理机制（对非受信任内容的隔离）。

### 5. Bug 与稳定性

今日报告的Bug数量众多，以下按严重程度排列：
- **严重 (Crash/Unresponsive/Data Loss)**:
    - `sessions.json` 无限增长导致网关OOM (#55334)。
    - Subagent 任务结果静默丢失，无重试和通知 (#44925)。
    - Control UI 在长时间开启后“卡死” (#45698)。
    - Agent 在2026.5.2版本中“中途停止响应” (#76877，已有回溯确认)。
- **主要 (Functionality Regression/Broken)**:
    - 飞书监控状态清理不彻底，可能导致内存泄漏 (#48183)。
    - 心跳/定时任务的“当前时间”时间戳是过期的，导致Agent获取错误时间 (#44993)。
    - `apply_patch` 工具在Agent策略管道中被错误地当作未知/插件工具 (#45269)。
    - 技能加载不完全，从`skills/`目录加载时跳过部分技能 (#43735)。
    - Telegram 图片/媒体下载因代理不可用而静默失败 (#45799)。
- **一般 (Behavioral/UI)**:
    - TUI 在模型生成期间输入的文字被“吞掉”并被错误地排入下一轮 (#45326)。
    - Discord 渠道泄露内部工具调用痕迹 (#44905)。 (已有关联修复PR #76091)
    - 当配置 `OPENCLAIM_HOME=~/.openclaw` 时会产生嵌套目录 `~/.openclaw/.openclaw` (#45765)。

**修复对应情况：**
- 针对“sessions.json增长”的内存问题，暂无直接修复PR。
- 针对“Agents stop responding”，相关Issue #76877 已报告，但未出现直接Fix PR。
- 针对“Discord leaks internal tool-call traces”，关联修复PR #76091（修复Discord回复打字生命周期）可能部分相关。
- 针对“aborted assistant messages” (#46080) 的问题，已有一个已关闭/合并的修复PR #48283，显示该问题已得到解决。

### 6. 功能请求归类

用户提出的新功能需求涵盖成本控制、模型路由、安全扫描等多个方面：
- **成本/资源管理**:
    - [Per-agent cost budget enforcement at the gateway level](https://github.com/openclaw/openclaw/issues/42475)：在网关层为每个Agent设置每日/每月花费上限。
- **模型路由与配置**:
    - [Support `model` field in SKILL.md frontmatter for per-skill model routing](https://github.com/openclaw/openclaw/issues/43260)：允许在SKILL.md的元数据中指定该技能使用的模型，而非所有技能都使用Agent的默认模型。
- **安全与执行控制**:
    - [Feature: Built-in security scanning for skill installation](https://github.com/openclaw/openclaw/issues/45031)：安装技能时自动进行安全扫描。
    - [[PR] feat: add /trust and /untrust commands for temporary exec security elevation](https://github.com/openclaw/openclaw/pull/47696)：引入临时的可执行权限提升命令，作为现有用户确认机制的补充，以平衡安全与使用体验。
- **开发体验与配置**:
    - [Feature Request: Support YAML as config file format](https://github.com/openclaw/openclaw/issues/45758)：支持YAML格式的配置文件。
    - [[PR] feat(plugins): add trust tier classification for plugin security model](https://github.com/openclaw/openclaw/pull/47743)：为插件安全管理形式化信任等级（`content`, `sandboxed`, `native`）。

### 7. 用户反馈摘要

从今日活跃的Issue评论中，可以提炼出以下用户反馈：
- **对稳定性的沮丧**：多位用户反馈“近几个版本不稳定”（#76877），“每次升级都有新问题”（#76562）。用户希望项目能更注重核心功能的稳定性，而不是快速发布新功能。
- **对问题复现和归因的困惑**：由于项目依赖多个服务（如LLM API、代理、会话管理），Bug表象多样（如无响应、虚假回复、消息丢失），用户难以判断是自身配置问题还是项目Bug。如#48003中的“steer mode”问题，最终被确认为一个特定commit引入的回归。
- **对透明度和控制的需求**：用户希望获得更清晰的控制能力，例如在子Agent无法完成任务时能获得通知（#44925），在cron任务失败时能快速失败而不是耗尽超时时间（#45494），以及能配置将网关生命周期警告路由到专用频道（#45565）。
- **对安全功能的认可**：PR #47696（信任/不信任命令）获得了社区关注，表明用户对更精细、更临时化的安全控制有明确需求，而不仅仅是“全有或全无”的批准模式。

### 8. 待处理积压

以下是有较大影响力但在较长时间内未获得回复或明确解决路径的关键Issue：
- **[Bug]: Skills not loading in agent context from `~/.openclaw/workspace/skills/`** (#43735，创建于2026-03-12)：这是一个影响技能加载的基础bug，但自创建以来已过去2个月，虽有关联PR #48034，但Issue本身仍未关闭，可能问题并未彻底解决或仍有副作用的场景。
- **[Feature]: Add tools.web.fetch.allowPrivateNetwork to allow private network access** (#39604，创建于2026-03-08)：一个获得6个赞的功能请求，允许Agent访问内网资源。对许多企业内部部署的用户至关重要，但讨论活跃度不高，进展可能较慢。
- **[Bug]: Memory management is in chaos** (#43747，创建于2026-03-12)：用户反馈记忆系统在不同设备上行为不一致，存在随机性。这是一个复杂的、可能涉及多个组件的问题，但至今仍为OPEN状态，缺少清晰的解决计划。

---

## 横向生态对比

# 2026-05-11 开源 AI 智能体项目横向对比分析报告

## 1. 今日横向概览

今日四个项目均保持活跃，但活动规模差异显著。OpenClaw 以超过 500 条 Issue/PR 更新量成为社区讨论最密集的项目，并发布了两个测试版本，重点关注基于 Telegram 的 QA 自动化与内存泄漏修复。NanoBot 和 Zeroclaw 分别更新了 5/6 和 20/28 条 Issue/PR，前者聚焦 Agent 自我纠错与插件化架构，后者完成了多智能体运行时合并与配置路径修复。PicoClaw 新增 4 个 Issue 和 6 个待合并 PR，发布了 nightly 构建，社区讨论集中在凭证配置与流式输出 Bug 上。所有项目均未发布正式版本，但在测试版或夜间构建中推进了多项修复。

## 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新数 | 今日 PR 更新数 | 版本发布 | 事实性备注 |
|------|-------------------|----------------|----------|------------|
| **OpenClaw** | 500（含 444 个新开/活跃） | 500（含 451 个待合并） | 2 个测试版（v2026.5.10-beta.1/.2） | 活动量最大；QA 自动化与稳定性 Bug 讨论密集；社区关注 Codex-vs-Pi 运行时兼容。 |
| **NanoBot** | 5 | 6 | 无 | 新增 2 个合并 PR（NVIDIA NIM 支持、KV 缓存修复）；社区聚焦 Agent 回环检测与插件化架构。 |
| **Zeroclaw** | 20 | 28 | 无 | 多个严重 Bug 修复（WebSocket 绕过、SOP 引擎未加载）；多智能体运行时合并至 v0.8.0 集成分支。 |
| **PicoClaw** | 4 | 6（全部待合并） | 1 个 nightly 构建（v0.2.8-nightly） | 无已合并 PR；社区讨论集中在 Ollama 凭证、Codex 流式空响应和启动崩溃。 |

## 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 的 Issue/PR 更新量远超其他三个项目（500 vs. 5~28），社区讨论密度极高，反映出更广泛的用户基础或更复杂的项目架构。Zeroclaw 次之，NanoBot 和 PicoClaw 规模较小。
- **技术重点**：OpenClaw 当前侧重量产自动化测试（QA/Mantis 模块）和运行时兼容性（Codex vs. Pi）。Zeroclaw 重点推进多智能体运行时（V3）与配置路径统一。NanoBot 聚焦 Agent 自我纠错和插件化工具架构。PicoClaw 则处于多个功能修复积压状态，尚未有核心架构升级。
- **社区讨论面**：OpenClaw 的讨论覆盖稳定性（内存泄漏、Agent 卡死）、安全（Prompt 注入）、QA 一致性等多元议题，社区参与度最广。Zeroclaw 的讨论集中在安全网关、构建失败和平台兼容性。NanoBot 和 PicoClaw 的讨论面较窄，分别以 Agent 智能化和凭证配置为主。

## 4. 共同出现的技术方向

- **Agent 任务执行可靠性**：OpenClaw（Subagent 结果静默丢失、中途停止响应）、NanoBot（回环检测 PR）、Zeroclaw（对话丢消息）均涉及 Agent 任务不完整或停滞的问题，表明该方向是行业共性挑战。
- **配置与凭证管理**：OpenClaw（配置路径 `~/.openclaw/.openclaw` 嵌套问题）、Zeroclaw（配置路径硬编码修复）、PicoClaw（Ollama 云端凭证缺失）都出现了配置相关 Issue，反映出多个项目在工程化配置抽象上仍有待完善。
- **多提供商 / 运行时兼容**：OpenClaw（Codex-vs-Pi 运行时一致性 Issue 系列）、NanoBot（新增 NVIDIA NIM 提供商）、Zeroclaw（Qwen 提供商 405 错误、Gemini 参数过时）均体现了对异构模型提供商适配的需求及兼容性挑战。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **功能侧重** | 多渠道 Agent 服务（Telegram、飞书等）、全生命周期 QA 测试、运行时兼容性 | Agent 核心能力增强（自我纠错、动态认知）、插件化工具架构 | 多智能体运行时（V3）、Swarm 配置、通信渠道（Matrix、Discord） | 轻量级 Agent 部署（Nightly 构建）、简单配置（Bash 工具、Session 时间戳） |
| **目标用户** | 运维/开发者（测试自动化、稳定性调试），大型社区 | 追求 Agent 智能化演进的开发者，研究型用户 | 多代理系统架构师、企业级部署（权限、安全管控） | 个人用户/嵌入式场景（Android TV 盒子），偏好低配环境 |
| **技术架构差异** | 模块化多通道、CI/CD 自动化（Mantis QA）、大规模 Issue 管理 | 聚焦 Agent 循环/重试机制（Hook）、工具注册重构（自描述插件） | 面向 V3 多智能体工作空间隔离、SwarmConfig 定义、跨渠道媒体管道 | 依赖 Ollama/Telegram 轻量集成，Singleton PID 检查等基础设施级调试 |

## 6. 社区活跃度记录

基于今日 Issue/PR 更新数量及发布动作，将四个项目分为三个活跃度层级：

- **高活跃**：OpenClaw（500 条 Issue、500 条 PR、2 个测试版）。社区讨论多线程并发，维护者响应密集。
- **中活跃**：Zeroclaw（20 Issue、28 PR、无版本发布）。关键功能合并与严重 Bug 修复并存，社区关注度较高。
- **低活跃**：NanoBot（5 Issue、6 PR、无版本发布）、PicoClaw（4 Issue、6 PR、1 个 nightly 构建）。更新量较小，部分 PR 长期待合并，维护者响应速度较慢。

（注：此分层仅基于今日数据，未涉及项目历史体量或成熟度评分。）

## 7. 有证据支撑的观察

1. **Agent 执行可靠性是跨项目共性痛点**：OpenClaw、NanoBot、Zeroclaw 今日均有报告 Agent 中途停止、消息丢失或回环重试的问题，且社区积极提出修复方案（如 NanoBot 的 LoopDetectHook、OpenClaw 的 aborted assistant 修复）。该方向是未来版本验证重点。

2. **多模型 / 多运行时兼容性正在成为测试焦点**：OpenClaw 设置专门的 Codex-vs-Pi 运行时 parity QA harness 议题，NanoBot 新增 NVIDIA NIM 提供商，Zeroclaw 暴露 Qwen 与 Gemini 的集成故障——说明随着模型生态多样化，兼容性测试与提供商适配成为各项目的共同交付瓶颈。

3. **配置管理是低层级的普遍技术债**：OpenClaw 出现配置目录嵌套、Zeroclaw 修复硬编码路径、PicoClaw 缺少凭证配置——三个项目均暴露出配置抽象不够完善的问题，可能导致多实例部署或跨平台用户的使用障碍。

4. **PicoClaw 的 PR 积压问题突出**：6 个 PR 全部处于待合并状态，且部分已标记 stale 超过一个月（如 #2462），同时存在高优先级 Bug（#2720 启动崩溃）无匹配修复。项目维护响应存在明显延迟。

5. **今日暂无明确跨项目信号**：各项目虽有多处可对应的问题类型，但尚未出现统一的技术路线或互操作性协议讨论。社区间仍处于各自为战的状态。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为您的 AI 智能体与个人 AI 助手领域开源项目分析师，根据 NanoBot 项目在 2026 年 5 月 10 日至 5 月 11 日（统计截止至 2026-05-11）的 GitHub 动态数据，我为您生成以下项目动态日报。

---

### NanoBot 项目动态日报 | 2026-05-11

#### 1. 今日活动概览
过去 24 小时内，项目社区活跃度较高。共更新 5 个 Issue 和 6 个 Pull Request，无新版本发布。社区贡献主要集中在工具系统架构重构、代理自我纠错能力增强以及本地语音转录功能的引入。同时，关于 Agent 回环问题和上下文压缩的 Bug 修复与讨论也较为活跃。

#### 2. 版本发布
无。

#### 3. 项目进展
今日有 2 个重要的 PR 被合并，推动了特定功能与稳定性改进：
- **新增 NVIDIA NIM 提供商支持**：[PR #3707](https://github.com/HKUDS/nanobot/pull/3707) 已被合并。该 PR 为项目添加了对 NVIDIA NIM 推理微服务作为模型提供商的支持，扩展了可用的模型来源。
- **修复回合并上下文压缩导致的 KV 缓存问题**：[PR #3711](https://github.com/HKUDS/nanobot/pull/3711) 已被合并。此修复将归档的对话摘要移入系统提示词（system prompt）中，避免了因摘要内容变化导致的缓存失效，进而提升了推理效率。

#### 4. 社区热点
今日最受关注的议题是 **Agent 功能的增强与架构优化**，多则讨论指向对 Agent 核心行为的改进需求：
- **[Issue #3724](https://github.com/HKUDS/nanobot/pull/3724)**：用户 `@wenge6090-cell` 在感谢项目的同时，提出了一个关于 Agent “涌现”能力的深度探讨。该用户认为当前 Agent 固定系统提示词、工具集和知识库的模式是“牢笼”，希望增加动态认知姿态，使 Agent 能更好地处理不同类型任务。该 Issue 获得了 4 条评论，虽然已被关闭，但其中反映的用户诉求值得关注。
- **[PR #3728](https://github.com/HKUDS/nanobot/pull/3728)**：为此问题提供了直接的解决方案。该 PR 引入了 `LoopDetectHook` 和 `ReflectRetryHook`，旨在探测 Agent 陷入工具调用回环或盲目重试的错误模式，并实现自我纠正，避免资源浪费。
- **[PR #3729](https://github.com/HKUDS/nanobot/pull/3729)**：是一项基础架构改进。该 PR 将现有硬编码的工具注册方式重构为基于“自描述插件”的模式，使工具的开发和管理更加模块化和便捷。

这些讨论与提案共同构成了一幅社区正积极推动 Agent 从“静态执行”向“动态智能”演进的图景。

#### 5. Bug 与稳定性
今日报告了 2 个 Bug，均与核心推理逻辑相关，其中一个问题严重性较高：
- **（严重）上下文压缩导致系统无法运行**：[Issue #3726](https://github.com/HKUDS/nanobot/issues/3726) 报告的 Bug。用户表示“上下文压缩bug”导致系统无法处理消息，日志显示在 token 合并环节出现问题。此问题直接影响服务可用性，需优先处理。
- **（中）Ollama 工具调用功能损坏**：[Issue #2829](https://github.com/HKUDS/nanobot/issues/2829) 状态已更新。用户报告使用 Ollama 与特定模型（如 gemma4:e4b）时，工具调用功能不可用，Agent 会给出虚假回答。此问题已存在较长时间，仍需关注。
- **（中）DeepSeek-V4 API 错误**：[Issue #3469](https://github.com/HKUDS/nanobot/issues/3469) 已关闭。该 Bug 描述在多轮思考场景下，DeepSeek-V4 模型会因 `reasoning_content` 参数问题报错。虽然已关闭，但修复逻辑可供参考。

#### 6. 功能请求归类
- **Agent 核心能力增强**
  - **动态认知姿态**：[Issue #3724](https://github.com/HKUDS/nanobot/issues/3724) 提出使 Agent 能适应不同任务，拥有动态的系统提示词、工具集和知识库。
  - **智能自我纠错**：[PR #3728](https://github.com/HKUDS/nanobot/pull/3728) 实现检测并打断 Agent 的工具调用回环和盲目重试。

- **架构与工具系统**
  - **插件化工具架构**：[PR #3729](https://github.com/HKUDS/nanobot/pull/3729) 重构工具系统，支持自描述插件，便于扩展。

- **语音相关功能**
  - **本地 Whisper 语音转录**：[PR #3723](https://github.com/HKUDS/nanobot/pull/3723) 提议集成 faster-whisper，支持无需 API 密钥的本地语音转文字功能，解决用户对隐私和网络依赖的担忧。

- **配置文档优化**
  - **转录提供商配置不透明**：[Issue #3637](https://github.com/HKUDS/nanobot/issues/3637) 及对应的 [PR #3663](https://github.com/HKUDS/nanobot/pull/3663) 希望优化 Groq/OpenAI 转录服务商的 endpoint 配置方式，并增加调试日志，提升配置透明度和易用性。

#### 7. 用户反馈摘要
- **正面反馈**：用户 `@wenge6090-cell` 在 [Issue #3724](https://github.com/HKUDS/nanobot/issues/3724) 中表达了“非常感谢”项目及其贡献者，并认可 NanoBot 作为其项目基座的价值。
- **痛点反馈**：
  - **工具调用失效**：用户 `@jvgriethuijsen` 在 Issue #2829 中报告与 Ollama 配合使用时工具调用功能彻底损坏，导致 Agent 生成错误信息，严重影响实用性。
  - **复杂场景报错**：用户 `@BCC1108` 在 Issue #3469 中反馈 DeepSeek-V4 在多轮思考时出现 API 错误。
  - **配置不透明**：用户 `@sandr1x` 在 Issue #3637 中抱怨 Groq 语音转录的配置容易导致“无效设置”，缺乏清晰的指引。
  - **系统可用性**：用户 `@jermeyhu` 在 Issue #3726 中报告上下文压缩直接导致“系统无法运行”，这是最严重的可用性问题。

#### 8. 待处理积压
- **重要 Issue 待响应**：
  - **[Issue #2829](https://github.com/HKUDS/nanobot/issues/2829) (4月5日创建)**：关于 Ollama 工具调用完全损坏的问题。该问题持续超过一个月，至今未关闭也无关联修复 PR，从社区角度看，这是一个关键的稳定性问题，建议维护者优先关注。
  - **[Issue #3637](https://github.com/HKUDS/nanobot/issues/3637) (5月6日创建)**：关于转录提供商配置不透明的问题，已有修复 [PR #3663](https://github.com/HKUDS/nanobot/pull/3663) 处于待合并状态，建议核对并合并。
- **待合并 PR**：
  - **[PR #3728](https://github.com/HKUDS/nanobot/pull/3728)** 和 **[PR #3729](https://github.com/HKUDS/nanobot/pull/3729)**：均为提升 Agent 智能与可扩展性的重要架构改进，建议进行代码审查。
  - **[PR #3663](https://github.com/HKUDS/nanobot/pull/3663)**：修复 Issue #3637 的代码，建议合并以解决用户配置痛点。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 Zeroclaw 项目的 AI 智能体与开源项目分析师，我将根据您提供的 GitHub 数据，生成一份客观、数据驱动的项目动态日报。

---

# Zeroclaw 项目日报 2026-05-11

## 1. 今日活动概览
过去24小时，Zeroclaw 项目活动频繁。Issues 和 Pull Requests 的更新量均达到高位，分别有20条和28条。社区讨论主要集中在 WebSocket 安全网关绕过 ( #6207 )、构建失败 ( #6530 ) 和对话丢消息 ( #6034 ) 等严重问题上。值得关注的是，**0.8.0 版本集成分支 ( #6398 ) 继续推进，同时解决了多智能体运行时 ( #6545 ) 和配置路径硬编码 ( #6533 ) 等关键问题**。无新版本发布。

## 2. 版本发布
- 无新版本发布。

## 3. 项目进展
今日有4个Issues和5个PR被关闭，其中重要的合并/关闭包括：
- **【关键功能】多智能体运行时合并 (PR #6545)**：该 PR (`size: XL`) 已合并至 `integration/v0.8.0` 分支，实现了端到端的 V3 多智能体运行时。为日后实现每个智能体独立工作空间、权限和资源共享 (如 Issue #6272 所述) 奠定了基础。
- **【关键修复】配置路径硬编码修复 (PR #6533)**：该 PR (`size: XS`) 已合并，修复了 `ZEROCLAW_CONFIG_DIR` 环境变量未被部分组件识别的问题。现在所有路径字段默认值都会优先考虑该环境变量，解决了多实例部署时配置目录混乱的 Bug (Issue #5605)。
- **【关键修复】SOP引擎未加载修复 (PR #6534)**：该 PR (`size: XS`) 已合并，修复合了由于 `SopEngine` 构造后未调用 `reload()` 方法，导致标准操作规程 (SOPs) 从未被加载执行的严重 Bug。
- **【破坏性变更】V0.8.0 Schema 环境变量语法 (PR #6523)**：该 PR (`size: XL`) 已合并至 `integration/v0.8.0` 分支，是一次针对运维人员接口的 Breaking Change。它重写了 V3 环境变量的语法和覆盖机制，以取代旧的配置方式。请注意，这会影响 v0.8.0 版本的使用方式。

## 4. 社区热点
- **#6207 [CLOSED] WebSocket 安全网关绕过 (评论: 4)**：这是今日最受关注的安全问题，最终被关闭。该问题描述了通过 WebSocket 网关（web dashboard）发出的工具审批指令完全绕过 `ApprovalManager` 的漏洞，导致用户从未在界面上看到审批提示。其在关闭前仍有积极讨论，社区对安全相关议题非常敏感。
- **#6530 [OPEN] Matrix 渠道构建失败 (评论: 4)**：用户 `@rikwade` 报告，启用 Matrix 渠道后，在安装 `matrix-sdk v0.16.0` 时会发生构建失败，错误为“递归限制溢出”。这是一个影响 CI 和特定渠道使用的问题，虽然严重程度被标记为 `S2`，但构建失败会直接阻碍新用户接入该功能。
- **#6034 [OPEN] 对话丢失用户消息 (评论: 3)**：用户 `@lazy-hs` 报告的严重问题 (S1)。用户反馈在单轮或多轮对话中，代理会丢失用户输入的历史消息，导致上下文混乱。该问题持续获得关注，用户期望能得到及时修复。

## 5. Bug 与稳定性
过去24小时共报告了10个Bug，按严重程度排列如下：
- **S0 - 数据丢失/安全风险：**
    - **#6558 [OPEN]** (Qwen 提供商)：“All providers/models failed”错误，具体是 HTTP 405 Method Not Allowed。尚无关联修复 PR。
    - **#5605 [CLOSED]** (配置)：“Default Configuration Path Issues”问题已通过 PR #6533 修复。
- **S1 - 工作流阻塞：**
    - **#6207 [CLOSED]** (WebSocket 网关安全) 已通过关联修复关闭，但未明确是哪个PR。
    - **#6034 [OPEN]** (对话丢失消息)：尚无关联修复 PR。
    - **#6551 [OPEN]** (OpenAI兼容提供商)：非首位 System 消息被发送至 API 导致拒绝。关联修复 PR #6552 待合并。
- **S2 - 降级行为：**
    - **#6530 [OPEN]** (Matrix 渠道构建失败)：尚无关联修复 PR。
    - **#6520 [OPEN]** (Gemini CLI 提供商崩溃)：因使用过时的命令行参数 `--print` 替代 `--prompt` 导致崩溃。
    - **#6419 [OPEN]** (配置文件加载失败)：`WorkspaceManager` 在运行时启动时未能加载配置文件。
    - **#6556 [OPEN]** (Discord 渠道媒体收发损坏)：多路媒体管道故障，包括图片丢失、非图片类型丢弃等问题。

## 6. 功能请求归类
以下是今日活跃的功能请求 (Enhancements)：
- **搜索与网络工具增强：**
    - **#5316 [OPEN]**: 提议支持 SearXNG 作为隐私搜索提供商，并改进 DuckDuckGo 的 CAPTCHA 检测。这是一个长期未决的 `p2` 级别需求。
- **多代理与配置架构：**
    - **#6272 [OPEN]**: 为 V3 多智能体运行时设计“每个别名独立工作空间、权限和共享资源”的方案，是 PR #6545 的后续增强。
    - **#6271 [OPEN]**: 定义并实现 V3 版本的 `SwarmConfig` 架构，处理和迁移 V2 群组配置。
- **通信渠道：**
    - **#6543 [OPEN]**: 请求实现 ACP (Agent Communication Protocol) v1 协议的 `session/load` 命令，用于恢复和恢复之前的会话。
    - **#6563 [OPEN]**: 提议将 ComfyUI (含 Comfy Cloud) 作为一等媒体生成提供商集成，为未来的 `gen_video` 工具铺路。
- **其他：**
    - **#6557 [OPEN]**: 建议在 v0.8.0 版本定型前，协调运行时模型切换与新的提供商架构。

## 7. 用户反馈摘要
- **环境适配痛点 (Windows用户)**：用户 `@kmukul123` 在 #6419 中报告，Zeroclaw 的 `WorkspaceManager` 在 Windows 系统下无法在启动时加载配置文件，暴露了平台兼容性的问题。
- **提供商集成问题**：用户 `@Gihan-1994` (#6520) 在使用 Gemini CLI 时遇到崩溃，体现了主流提供商组件的维护滞后。用户 `@jonhoosh` (#6558) 和 `@lazy-hs` (#6034) 报告了连接自定义 (如 Qwen) API 时遇到的错误，表明社区对异构 provider 集成的稳定性有较高要求。
- **发布流程体验不佳**：用户 `@luckbyte` (#6547) 反馈 Homebrew 合并失败，因为新版本 v0.7.5 的发布版本尚未被 Homebrew 核心仓库收录。这影响了通过 Homebrew 安装用户的升级体验。

## 8. 待处理积压
- **#6074 [OPEN]** (2026-04-24 创建): *审计：追踪批量回退中丢失的153次提交*。该 issue 的目的是跟踪一次大规模的代码回退事件，属于技术债务清理，但至今未被解决，可能会影响后续的版本迭代。
- **#5254 [OPEN]** (2026-04-03 创建): `fix(provider): sanitize llama.cpp gemma4 tool schemas`。该修复 PR 已存在超过一个月，但一直未能合并，可能导致使用本地模型 (llama.cpp) 的用户体验不佳。
- **#5316 [OPEN]** (2026-04-05 创建): *Propose SearXNG search support*。这个关于搜索功能增强的请求已有一个月无人更新，但仍有社区讨论，显示对更稳定、隐私友好的搜索工具有持续需求。
- **#6272 [OPEN]** (2026-05-02 创建) 和 **#6419 [OPEN]** (2026-05-06 创建): 这两个关于多智能体工作空间和配置加载的 Issue 都是社区提出的重要功能或 Bug，且已被维护者标记为 accepted，但目前尚无明确的修复 PR 产生。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-05-11

## 今日活动概览

过去24小时，PicoClaw 项目新增 4 条 Issue（全部处于开放状态）、6 条 Pull Request（全部待合并，无已合并或关闭的 PR），并发布了 1 个 nightly 构建版本（v0.2.8-nightly.20260511）。重点关注的话题包括：Ollama 云凭证功能请求、Codex OAuth 流式输出的空响应问题、Singleton PID 检查导致启动崩溃、Bash 相对路径被错误解析为绝对路径，以及 Telegram Business 模式支持等社区提出的修复与增强。

## 版本发布

**nightly build v0.2.8-nightly.20260511.6e6293e5**
- 这是一个自动构建版本，可能不稳定，使用需谨慎。
- 完整变更日志：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- 无破坏性变更说明或迁移指南。

## 项目进展

今日无任何 PR 被合并或关闭。以下 6 条 PR 处于待合并状态，部分已获得维护者关注：

- **#2826** – `fix: resolve relative paths correctly in exec tool safety guard`
  作者 [@yuxuan-7814](https://github.com/yuxuan-7814) 针对 Issue #2749 提交修复，确保 exec 工具在限制工作空间时正确解析相对路径。
  链接：https://github.com/sipeed/picoclaw/pull/2826

- **#2750** – `fix(tools): exec guard must not treat relative paths as root-absolute`
  作者 [@Chris-dash-T4](https://github.com/Chris-dash-T4) 提交了另一个针对 #2749 的修复方案，改进路径扫描正则表达式。
  链接：https://github.com/sipeed/picoclaw/pull/2750

- **#2462** – `[codex] fix codex streaming output and telegram duplicate retries`
  作者 [@Glucksberg](https://github.com/Glucksberg) 修复了 Codex OAuth 流式输出和 Telegram 重复重试问题，并在描述中分享了在 Android TV 盒子上的实际使用场景。
  链接：https://github.com/sipeed/picoclaw/pull/2462

- **#2788** – `feat(session): add per-message created_at timestamps`
  作者 [@LiusCraft](https://github.com/LiusCraft) 为 Session API 返回的消息添加了单独的时间戳，解决前端只能使用会话级更新时间的问题。
  链接：https://github.com/sipeed/picoclaw/pull/2788

- **#2845** – `feat(telegram): add business mode support`
  作者 [@stolyarchuk](https://github.com/stolyarchuk) 新增 Telegram Business 模式支持，通过 `PICOCLAW_CHANNELS_TELEGRAM_BUSINESS_MODE` 配置启用。
  链接：https://github.com/sipeed/picoclaw/pull/2845

- **#2783** – `fix(gateway): keep media store aligned after reload`
  作者 [@zhangxinping666](https://github.com/zhangxinping666) 修复了 gateway 重载后媒体存储与通道管理器不同步的问题。
  链接：https://github.com/sipeed/picoclaw/pull/2783

## 社区热点

1. **#2225 [Feature] Ollama cloud credentials** – 该 Issue 获得 11 条评论，是目前讨论最活跃的话题。用户 [@Suisei110](https://github.com/Suisei110) 表示正在使用 Ollama 云端服务，但 PicoClaw 缺少凭据配置选项，希望得到帮助。该 Issue 已标记为 `stale`，但仍持续收到关注。
   链接：https://github.com/sipeed/picoclaw/issues/2225

2. **#2674 Codex OAuth: empty assistant response when ChatGPT backend streams items via `response.output_item.done`** – 收到 3 个 👍 和 3 条评论。用户 [@geekgonecrazy](https://github.com/geekgonecrazy) 详细描述了在使用 OpenAI Codex OAuth 提供程序时，助手响应为空的问题，即使模型已生成了内容。该 Bug 与流式处理逻辑相关，PR #2462 尝试修复此问题。
   链接：https://github.com/sipeed/picoclaw/issues/2674

## Bug 与稳定性

| Issue | 严重性 | 描述 | 是否有修复 PR |
|-------|--------|------|---------------|
| #2674 | 高 | Codex OAuth 流式输出返回空响应，用户看到“The model returned an empty response”错误。涉及 ChatGPT 后端 `response.output_item.done` 事件处理。 | 是 – PR #2462 |
| #2720 | 高 | Singleton PID 检查仅验证 PID 是否存在，未验证是否属于 PicoClaw 进程，导致 PID 被重用（如 `systemd-resolved`）时 gateway 启动崩溃循环。 | 暂无明确 PR |
| #2749 | 中 | Bash 工具在执行命令时，将相对路径（如 `archive/SKILL.md`）错误解析为 `/SKILL.md`，导致工作空间检查失败。 | 是 – PR #2826 和 #2750（两个方案） |

## 功能请求归类

以下为用户提出的新功能需求及相关 PR（不包括纯 Bug 修复）：

- **#2225** – 请求为 Ollama 云端添加凭据配置选项（Credentials）。暂无对应 PR。
- **#2845** (PR) – 为 Telegram 通道添加 Business 模式支持，允许订阅商业版更新并转发消息。
- **#2788** (PR) – 为 Session API 的消息添加 `created_at` 时间戳，提升前端显示准确性。

## 用户反馈摘要

- **Ollama 云端使用受阻**：用户 [@Suisei110](https://github.com/Suisei110) 在 Issue #2225 中表示正在使用 Ollama 云端，但无法配置凭据（如 API 密钥或认证参数），希望获得支持。
- **Codex OAuth 空响应**：用户 [@geekgonecrazy](https://github.com/geekgonecrazy) 发现通过 OAuth 连接 ChatGPT 后端时，助手虽然返回内容但 PicoClaw 解析为空，并提示“empty response”。该用户提供了详细的复现环境和步骤。
- **PID 重用导致启动失败**：用户 [@weissfl](https://github.com/weissfl) 报告 gateway 因 PID 文件包含已复用的 PID（如 `systemd-resolved`）而无法启动，建议增加进程身份验证。
- **Bash 相对路径问题**：用户 [@Chris-dash-T4](https://github.com/Chris-dash-T4) 在 Issue #2749 中描述了 Bash 工具错误处理相对路径的场景，并在 PR #2750 中提供了初步修复方案。

## 待处理积压

以下 Issue 或 PR 已标记为 `stale` 或长时间未得到响应，建议维护者关注：

- **#2225** (Issue) – 创建于 2026-03-31，已超过 40 天，仍讨论活跃但无明确行动。
- **#2462** (PR) – 创建于 2026-04-09，已标记 `stale`，涉及 Codex 流式修复，当前仍有其他相关 Issue 未解决。
- **#2720** (Issue) – 创建于 2026-04-30，虽标记 `stale`，但属于启动崩溃的高优先级 Bug，尚无匹配的修复 PR。
- **#2749** (Issue) – 创建于 2026-05-02，有多个修复 PR 提交但尚未合并。

所有链接可通过上述条目中的地址访问。

---

*本日报基于 PicoClaw GitHub 仓库 2026-05-11 的自动化数据生成，仅客观记录事实，不构成对项目健康度的判断。*

</details>