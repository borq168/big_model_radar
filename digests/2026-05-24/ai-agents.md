# OpenClaw 生态日报 2026-05-24

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-24 02:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026-05-24

---

## 1. 今日活动概览

过去 24 小时内，OpenClaw 仓库共产生 **500 条 Issue 更新**（其中新开/活跃 475 条，关闭 25 条）和 **500 条 PR 更新**（待合并 219 条，已合并/关闭 281 条）。项目发布了 **2 个新版本**：`v2026.5.22`（Gateway 性能优化）和 `v2026.5.22-beta.1`（文档改进）。社区讨论集中在桌面客户端缺失、工具调用文本泄漏、Signal 守护进程竞态条件等长期痛点；同时有多项修复 PR 进入可审查或自动合并状态。

---

## 2. 版本发布

### v2026.5.22（正式版）
- **性能改进**：Gateway 复用进程稳定的频道目录读取，避免重复的捆绑频道边界检查；轮转网关监视 CPU profiling 文件以防止 Benchmark 运行时产生无界产物。
- **优化**：在启动时复用不可变的插件元数据快照。

[查看发布详情](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22)

### v2026.5.22-beta.1（测试版）
- **文档更新**：澄清 README 入门前置条件与 Gateway 启动路径；修复 WhatsApp QR/408 恢复指南、Cron 输出语言提示、技能高级功能、Gateway 上游 403 故障排除及插件回退覆盖指引。
- 感谢贡献者 @deepujain, @Zacxxx, @Jah-yee, @neyric, @usimic。

[查看发布详情](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1)

---

## 3. 项目进展（已合并 / 关闭的重要 PR）

以下 PR 今日被合并或关闭，代表了项目的实际推进：

- **#85898** — `test(heartbeat): cover target none scheduler dispatch`（已关闭）：为心跳调度添加回归测试，覆盖 `heartbeat.target: "none"` 场景。
- **#44086** — `fix(agents): assistant message content null instead of empty string breaks OpenAI-compatible providers`（已关闭）：修复 DeepSeek 等兼容提供方因空内容块被过滤为 `null` 导致的错误。
- **#43982** — `fix(gateway): strip inline image payloads from chat history`（已关闭）：从聊天历史记录中删除内联 base64 图片负载，避免历史记录膨胀。
- **#43912** — `CLI: prefer bundled installs for scoped plugin specs`（已关闭）：修复重复安装已捆绑插件的问题。
- **#43895** — `status: avoid misleading default model when agent defaults vary`（已关闭）：`openclaw status` 命令现在正确显示各代理的独立模型默认值。
- **#43832** — `fix(cron): drain in-flight ops on hot reload to prevent state overwrite`（已关闭）：热重载时先排空正在运行的 Cron 任务，防止状态被覆盖。
- **#43808** — `cron: keep failure destination for threaded delivery`（已关闭）：确保 Cron 失败通知在 Telegram 话题中正确投递。
- **#43467** — `fix: include all dimensions in cosineSimilarity norm for different-length vectors`（已关闭）：修复余弦相似度计算中对不同长度向量范数估算过高的 bug。
- **#43416** — `feat(ui): add copy button for assistant messages`（已关闭）：为 Web UI 助手消息添加一键复制按钮。
- **#72748** — `fix(memory): complete recursive memory search follow-up`（已关闭）：完成递归记忆搜索的后续修复。

---

## 4. 社区热点

### 最活跃 Issue：Linux/Windows Clawdbot Apps（#75）
- 评论数：105 | 👍：77 | 创建于 2026-01-01，更新于 2026-05-24
- **诉求**：社区长期期待 macOS/iOS/Android 之外的桌面平台支持。该 Issue 持续获得关注，但暂无明确实现计划。
- [查看 Issue](https://github.com/openclaw/openclaw/issues/75)

### 高互动 Bug：Text between tool calls leaks to messaging channels（#25592）
- 评论数：26 | 标签：P1, security, message-loss
- **用户痛点**：Agent 在工具调用之间生成的中间文本（如错误处理、确认消息）被路由到 Slack/iMessage 等消息通道，导致 UX 混乱。贡献者分析了多种引发场景，要求引擎级别隔离。
- [查看 Issue](https://github.com/openclaw/openclaw/issues/25592)

### 热门功能请求：Prebuilt Android APK releases（#9443）
- 评论数：25 | 👍：2
- 用户 Lysen 委托其 AI 助手 QING 提交，要求发布预编译 Android APK。当前仓库仅提供源码。
- [查看 Issue](https://github.com/openclaw/openclaw/issues/9443)

### 高👍 PR：fix(agents/harness): route CLI backend aliases through PI for in-process compaction（#84966）
- 状态：automerge armed（自动合并就绪）
- 修复了 CLI 后端别名（如 `claude-cli`）在进程内压缩时不生效的问题。
- [查看 PR](https://github.com/openclaw/openclaw/pull/84966)

---

## 5. Bug 与稳定性

以下为今日活跃的严重 Bug（P1/P2），按严重程度排列，并标注是否有修复 PR：

| Issue | 标题 | 严重程度 | 影响 | 关联修复 PR | 备注 |
|-------|------|----------|------|-------------|------|
| #25592 | Text between tool calls leaks to messaging channels | P1 | 消息泄露/安全 | 无公开 fix PR | 需要产品决策与安全审查 |
| #22676 | Signal daemon stop() race condition on SIGUSR1 restart | P1 | 崩溃/消息丢失 | 有 linked-pr-open | 孤儿进程与端口冲突 |
| #32473 | control UI requires device identity (use HTTPS or localhost secure context) | P2 | 认证失败 | 有 linked-pr-open | 回归问题，用户反馈 VPS 部署后控制台无法使用 |
| #29387 | Bootstrap files in agentDir silently ignored | P1 | 会话状态异常 | 无 fix PR | 仅工作区目录有效，代理目录配置被忽略 |
| #31583 | `exec` tool does not inherit `skills.entries.*.env` environment variables | P1 | 安全/配置异常 | 有 linked-pr-open | 回归问题，环境变量不传递给子进程 |
| #38439 | Webchat avatar endpoint /avatar/{agentId} returns 404 | P2 | UI 异常 | 有 linked-pr-open | 回归问题，头像显示为碎裂图片 |
| #40540 | `openclaw update` command fails with EBUSY error on Windows | P1 | 更新无法执行 | 无 fix PR | Windows 独有 EBUSY 错误 |
| #63819 | Session stuck in "running" status persists in v2026.4.9 | P1 | 会话卡死 | 已关闭（标记为修复？） | 用户报告即使应用了之前的修复仍存在问题 |

---

## 6. 功能请求归类

以下功能请求今日获得较多评论或维护者提及（按类别整理）：

- **平台支持**：Linux/Windows 桌面客户端（#75）、预编译 Android APK（#9443）
- **安全与权限**：Masked Secrets（#10659）、safe/unsafe ClawdBot 模式（#6731）、文件系统沙箱配置（#7722）、denylist for exec-approvals（#6615）、路径级 RWX 权限（#39979）、原生密钥管理集成（#13610）、pre-response enforcement hooks（#13583）
- **消息与渠道**：Slack Block Kit 支持（#12602）、Telegram Business Bot 支持（#20786）、子代理完成路由控制（#27445, #8299）、工具级进度展示（#33413）
- **会话与记忆**：分层引导文件加载（#22438）、会话级成本预算（#42475）、递归子目录记忆搜索（#34400）、子代理完成钩子（#22358）
- **工具与扩展**：Cron 直接执行模式（#18160）、私有网络访问允许（#39604）、Write 工具追加模式（#40001）、动态模型发现（#10687）、before_tool_call 钩子暴露（#13364）、推理流支持（#42276）
- **运维**：备份/恢复工具（#13616）、备份排除模式（#40786）、内存/嵌入设置在向导中作为强制步骤（#16670）

---

## 7. 用户反馈摘要

- **#75**：多位用户表示“长期等待 Linux/Windows 支持”，抱怨 macOS/iOS 版虽然可用但桌面主力平台缺失。
- **#25592**：用户 @doomclaw 详细描述了工具调用间文本泄漏如何导致“内部处理输出暴露给最终用户”，并提供了 Slack 和 Telegram 的截图证据。多位维护者确认这是 P1 安全问题。
- **#32473**：用户 @RafaelLee 在 VPS Docker 环境下遇到控制台需要 HTTPS 安全上下文的问题，寻求配置指南，其他用户提供了临时 workaround（使用 Nginx 反向代理 HTTPS）。
- **#29387**：用户 @tuna-chin 发现配置了 `agentDir` 后引导文件被静默忽略，@882soft 在评论中表示自己也遇到了同样问题，认为这是“配置模型的根本性断裂”。
- **#31583**：用户 @cwebb77 指出技能级别的环境变量不再传给 `exec` 子进程，认为是回归，多位用户附议。
- **#38439**：用户 @LuanBSPinheiro 调试发现头像端点返回 404，其他用户确认该问题出现在 `2026.3.2` 版本之后；贡献者已提交修复 PR。
- **#39604**：用户 @alokemajumder 希望 `web_fetch` 能通过 opt-in 配置访问内部网络服务，获得 8 个 👍，多位用户分享了自己需要该功能访问家庭内网服务器的场景。

---

## 8. 待处理积压（长期未响应的重要 Issue / PR）

以下 Issue 或 PR 已存在较长时间，对项目影响较大但尚未得到维护者明确回应或修复：

| 编号 | 标题 | 创建时间 | 最后更新 | 等待原因 |
|------|------|----------|----------|----------|
| #75 | Linux/Windows Clawdbot Apps | 2026-01-01 | 2026-05-24 | 需要产品决策（标签：needs-product-decision），评论 105 条但仍无 roadmap 回复 |
| #25592 | Text between tool calls leaks | 2026-02-24 | 2026-05-23 | 需要安全审查和产品决策，无 fix PR |
| #9443 | Prebuilt Android APK releases | 2026-02-05 | 2026-05-24 | 仅源码提交，无官方构建计划 |
| #22676 | Signal daemon race condition | 2026-02-21 | 2026-05-23 | 有 linked PR 但尚未合并 |
| #29387 | Bootstrap files in agentDir ignored | 2026-02-28 | 2026-05-24 | 需要复现和审查（needs-maintainer-review） |
| #31583 | exec tool env inheritance regression | 2026-03-02 | 2026-05-24 | linked PR 存在但尚未被维护者标记 ready |
| #32473 | control UI requires HTTPS | 2026-03-03 | 2026-05-24 | 有多个用户反馈但无官方解决方案 |
| #40540 | Windows update EBUSY | 2026-03-09 | 2026-05-24 | 需要 Windows 专有修复，无 PR |
| [PR #85341](https://github.com/openclaw/openclaw/pull/85341) | refactor: internalize agent runtime (XL 规模) | 2026-05-22 | 2026-05-24 | 涉及大量依赖和兼容性风险，需维护者仔细审查 |

---

*生成时间：2026-05-24 | 数据来源：GitHub openclaw/openclaw 公开仓库*

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，以下是根据您提供的 2026-05-24 各项目动态摘要生成的横向对比分析报告。

---

## AI 智能体开源生态横向对比分析日报 — 2026-05-24

### 1. 今日横向概览

今日，四个核心 AI 智能体项目均保持高活跃度，但活动焦点分化明显。**OpenClaw** 作为流量中心，社区讨论集中于分布式 Agent 消息安全 (P1) 与桌面客户端缺失等长期痛点，并发布了两个版本。**NanoBot** 专注于修复长期记忆 (Dream) 系统的核心缺陷和 exec 工具超时问题，技术债清理意图明确。**Zeroclaw** 贡献者主导了一次大规模架构重构，旨在统一多频道白名单逻辑，同时 TUI Agent 聊天功能取得整合进展。**PicoClaw** 则更侧重于轻量级功能的迭代与特定环境 (Android, v0.2.8) 的稳定性修复。

### 2. 各项目活跃度对比

| 项目名称 | 仓库地址 | Issues 更新数 | PR 更新数 | Release 版本 | 补充说明 (事实性备注) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | github.com/openclaw/openclaw | 500 (新开/活跃 475, 关闭 25) | 500 (待合并 219, 已合并/关闭 281) | 1 正式版 + 1 Beta 版 | 社区最大，讨论热度远超其他项目。焦点在文本泄漏、桌面客户端缺失。 |
| **NanoBot** | github.com/HKUDS/nanobot | 7 | 10 | 无 | 精力集中于修复长期存在的Bug并增强Dream记忆系统。PR #3865 (BM25) 引起关注。 |
| **Zeroclaw** | github.com/zeroclaw-labs/zeroclaw | 50 | 50 | 无 | 贡献者主导大规模代码重构 (白名单统一, PR数达10+)，目标是满足学术评估要求。 |
| **PicoClaw** | github.com/sipeed/picoclaw | 6 | 9 | 1 夜间预览版 | 轻量级项目，活动侧重于bug修复 (Seahorse, Discord) 和小功能迭代 (捷克语, 前端优化)。 |

> **注**：Issues、PR 更新数包含项目当日报告的所有状态变更，如新开、关闭、合并等，反映社区整体互动流量。

### 3. OpenClaw 与同类对照

基于今日数据，OpenClaw 与其他项目存在显著差异：

- **活动量级**：OpenClaw 的单日 Issue/PR 更新量 (各500条) 是其他项目的 10-100 倍，反映出其作为生态中规模最大、用户基数最广的项目的绝对热度。
- **技术重点**：
    - **OpenClaw**: 核心工作是**Gateway 稳健性**和**消息安全**，专注于修复 Agent 工具调用文本泄露 (P1)、Signal 守护进程竞态条件等分布式通信和安全性问题。
    - **NanoBot**: 侧重**长期记忆系统**与**核心工具 (exec)** 的可靠性修复，属于模型原生能力的改进。
    - **Zeroclaw**: 侧重**架构重构**与**部署体验**，如统一频道白名单逻辑、提供选择性频道构建、整合 TUI 界面。
    - **PicoClaw**: 侧重**信道兼容性**与**边缘部署环境**的适配，如修复 Discord 附件处理、支持 Android 设备。
- **社区讨论面**：OpenClaw 社区讨论覆盖面广，从桌面客户端到安全策略、协议扩展均有涉及，体现了成熟项目的生态广泛性。相比之下，其他项目的讨论更聚焦于技术实现和特定场景痛点。

### 4. 共同出现的技术方向

今日多个项目不约而同地关注了以下方向：

- **Agent 消息流控制与稳定性**：
    - **OpenClaw**：Issue #25592 强调了工具调用间文本泄漏问题，要求引擎级别隔离。
    - **NanoBot**：PR #3967 修复了 exec 工具超时硬编码上限问题，直接影响了 Agent 长时间任务的稳定性。
    - **Zeroclaw**：Issue #6856 要求恢复 v2 的 `show_tool_calls` 选项，社区希望在信道中看到更精细的 Agent 中间过程。
    - **PicoClaw**：修复了 `FreshTail` 路径绕过上下文预算限制的问题 (PR #2895)，直接关系 Agent 推理稳定性。
    - **趋势判断**：**Agent 的消息生成、传递与反馈环节，是当前各项目优化和修复的共同焦点。** 社区不再满足于“能工作”，而是要求对 Agent 的内部工作流有更精细的控制和更可靠的保障。

- **桌面与终端用户界面**：
    - **OpenClaw**：Issue #75 关于 Linux/Windows 桌面客户端缺失的讨论依旧活跃。
    - **Zeroclaw**：PR #6848 成功整合了 **TUI Agent 聊天功能**，尝试在终端提供丰富的交互体验。
    - **PicoClaw**：PR #2933 为 Web 前端代码块添加了行号等优化。
    - **趋势判断**：社区对**非手机端的原生交互界面**需求明确，各项目正在从不同路径（Web UI 增强、TUI 客户端开发）探索解决方案。

- **长期记忆与上下文管理**：
    - **NanoBot**：PR #3952 专门针对长期记忆的“重复膨胀”和“上下文溢出”问题进行了体系化改进。
    - **PicoClaw**：PR #2895 修复了上下文预算绕过漏洞。
    - **Zeroclaw**：Issue #6850 提议通过 `MemoryStrategy` 特质解耦记忆策略与存储后端。
    - **趋势判断**：随着 Agent 持久化交互场景增多，**长期记忆的有效性、冗余控制及上下文管理**成为影响用户体验和 Agent 智能水平的核心技术瓶颈。

### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心目标** | 构建分布式、模块化的个人AI OS | 强化个人Agent的长期记忆与自主运作能力 | 打造模块化、可审计的Rust Agent框架 | 提供轻量级、跨平台的个人AI网关 |
| **目标用户** | 高阶自托管用户、开发者、企业 | 高阶个人用户、希望深度定制AI的开发者 | 注重安全、可靠性及代码质量的开发者 | 资源受限环境、移动端/嵌入式用户、VoIP爱好者 |
| **技术架构** | 外挂组件式 (Gateway/Plugins)，语言以Go为主 | 内聚式 (Dream/Consolidator)，语言以Python为主 | 面向切面编程 (AOP, AllowlistAspect)，语言为Rust | 单二进制分发 (Nightly)，语言为Go |
| **关键差异** | **生态广度**：连接最多渠道，支持最多第三方服务。 | **自主智能**：最强调Agent的“记忆、反思、规划”能力。 | **工程质量**：最强调代码的模块化、可审计性和架构清晰度。 | **边缘部署**：最强调在低功耗、移动设备上的稳定运行和本地化支持。 |
| **今日信号** | 版本发布与大规模社区讨论。 | 聚焦核心系统Bug修复与内存系统升级。 | 贡献者主导的大规模架构重构。 | 稳定性修复与本地化/UI细节优化。 |

### 6. 社区活跃度记录

基于今日数据，将项目活跃度分为三个层级：

- **高爆量级**：
    - **OpenClaw**：单日500条Issue和500条PR的更新量，加上两个版本的发布，活跃度远超其他项目。其社区是当前个人AI Agent领域最大的讨论集散地。

- **持续活跃级**：
    - **Zeroclaw**：单日50条Issue和50条PR更新，且有贡献者一次提交超过10个PR进行重构，展示了极强的社区协作和技术迭代深度。
    - **NanoBot**：单日7条Issue和10条PR更新，虽然绝对数量不高，但内容均为重大技术债修复（Dream系统、exec超时），技术讨论质量高。

- **稳定维护级**：
    - **PicoClaw**：单日6条Issue和9条PR更新，并发布一个夜间预览版。项目维护节奏稳定，专注于修复特定用户的Bug和渐进式功能增强。

### 7. 有证据支撑的观察

1.  **Agent 消息流控制是当前社区最普遍的技术痛点。** OpenClaw 的文本泄漏 (P1)、NanoBot 的 exec 超时、Zeroclaw 的工具调用显示缺失 (show_tool_calls)、PicoClaw 的中间消息吞掉，均指向 Agent 在“思考-行动-观察”循环中的消息生成与控制环节存在不足。

2.  **个人 AI 助手正从“移动优先”向“全平台”扩张。** OpenClaw、Zeroclaw 和 PicoClaw 今日均展现出对桌面端 (Linux/Windows 客户端)、终端 (TUI) 及传统通信渠道 (邮件) 的明确关注，表明只依赖手机 APP 的模式已无法满足用户所有场景的需求。

3.  **Rust 语言在 Agent 基础设施层正获得更多青睐。** Zeroclaw 是唯一使用 Rust 的项目，其今日进行的大规模重构，以及在安全审计（White-list 统一）、性能（Gateway）方面的考量，直接体现了 Rust 在构建安全、可靠的系统级 Agent 框架上的优势。

4.  **“长期记忆”是拉开 Agent 体验差距的关键战场。** NanoBot 今日投入修复其 Dream 系统的核心问题，而 OpenClaw、PicoClaw 也都有关联的上下文管理修复。这并非新功能，而是决定 AI 能否“记住”并“理解”用户的关键基础功能。

5.  **今日暂无明确跨项目信号**表明整个生态出现了统一的技术标准或协同作战的迹象。各项目仍在自身的技术路线和定位上独立演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是为您生成的 NanoBot 项目日报。

---

## NanoBot 项目日报 - 2026-05-24

### 今日活动概览

过去24小时内，NanoBot项目无新版本发布。社区讨论活跃，共产生7条 Issue 和10条 PR。值得关注的是，大量工作集中在系统功能增强与Bug修复上：2项持续数周的Bug（#3595 exec超时、#3637 转录配置）已在昨日通过PR #3967被修复合并；此外，内存与技能路由系统收到多项重要改进（PR #3952、#3865、#3973），表明项目正着力解决长期记忆冗余与上下文管理问题。

### 项目进展

今日共有3项重要 PR 被合并，推动了以下功能或修复：

1.  **修复两大关键Bug**：PR [#3967](https://github.com/HKUDS/nanobot/pull/3967) 由 [@04cb](https://github.com/04cb) 提交，同时解决了 `exec` 超时上限问题和转录提供商配置不透明的问题。具体地：
    - **`exec` 超时修复**：将配置文件中的 `tools.exec.timeout` 与单次调用超时解耦，移除了上限。现在用户可以配置一个较长甚至无限制的超时时间。
    - **转录配置修复**：改进了转录配置逻辑，使其能够正确处理聊天风格的 `apiBase`（如 `https://api.groq.com/openai/v1`），避免了因配置路径不标准导致的设置无效问题。

2.  **增强长期记忆系统**：PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) 由 [@chengyongru](https://github.com/chengyongru) 提交并合并。该PR针对长期记忆系统中的**记忆重复膨胀**、**上下文溢出**和**知识碎片化**三大问题，增强了 Dream + Consolidator 提示词，旨在生成更MECE（相互独立，完全穷尽）的长期记忆。

3.  **新增提供商支持**：PR [#3971](https://github.com/HKUDOS/nanobot/pull/3971) 由 [@JiajunBernoulli](https://github.com/JiajunBernoulli) 提交，新增了对**智谱AI（Zhipu）** 图像生成提供商的支持，扩展了项目的能力边。同时，PR [#3972](https://github.com/HKUDS/nanobot/pull/3972) 更新了文档，指导用户使用内置 `xiaomi_mimo` 提供商而非旧的自定义配置。

### 社区热点

-   **Dream 系统再受关注**：新提交的 Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) 讨论了Dream系统的“饥饿问题”和“缺乏实时学习”能力。用户 [@chxuan](https://github.com/chxuan) 指出，Dream系统仅依赖 `history.jsonl` 作为输入，且在2小时周期内未进行增量合并，这会导致上下文溢出和长期记忆内容冗余。该讨论与昨日合并的PR #3952的目标一致，表明社区对改进Dream系统的诉求非常具体和强烈。

-   **轻量级技能路由提案**：PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) 提出通过BM25算法实现轻量级技能路由器，仅将最相关的技能描述注入系统提示词，旨在减少约60%的系统提示词长度。这项虽仍在开放状态但引发关注，因为它直接回应了多个用户关于上下文窗口限制的痛点。

### Bug 与稳定性

-   **已修复**：
    -   **`exec` 超时硬编码上限 (Severity: High)**：Issue [#3595](https://github.com/HKUDS/nanobot/issues/3595) 报告的600秒超时上限问题，已通过PR [#3967](https://github.com/HKUDS/nanobot/pull/3967) 解决。
    -   **转录提供商配置不透明 (Severity: Medium)**：Issue [#3637](https://github.com/HKUDS/nanobot/issues/3637) 报告的Groq语音转录配置问题，已通过PR [#3967](https://github.com/HKUDS/nanobot/pull/3967) 解决。
    -   **Dream 系统记忆问题 (Severity: Medium)**：Issue [#3047](https://github.com/HKUDS/nanobot/issues/3047) 报告的上下文溢出和记忆重复问题，已通过昨日合并的PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) 得到初步改善。

-   **待修复**：
    -   **使用GPT时出现重复ID错误 (Severity: High)**：Issue [#3633](https://github.com/HKUDS/nanobot/issues/3633) 报告了一个导致Codex代理无法继续运行的“Duplicate item found”错误。该问题目前仍为开放状态，且尚未有关联的修复PR。

### 功能请求归类

-   **子代理精细化控制**：PR [#3975](https://github.com/HKUDS/nanobot/pull/3975) 为 `spawn` 工具添加了可选的 `temperature` 参数，允许为每个子代理设置独立的采样温度，以满足不同任务对创造力的需求。
-   **命令系统增强**：PR [#3968](https://github.com/HKUDS/nanobot/pull/3968) 新增了 `/skill` 内置斜杠命令，用于在对话中列出所有已启用的技能，提高了可发现性。
-   **系统提示词优化**：PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) 提出了基于BM25的轻量级技能路由方案，旨在减少系统提示词长度。
-   **提供商配置扩展**：PR [#3974](https://github.com/HKUDS/nanobot/pull/3974) 为OpenAI提供商新增了 `apiType` 和 `extraBody` 配置字段，以支持更灵活的API调用（如 `chat_completions` 和 `responses` 模式）。
-   **实时学习机制**：Issue [#3973](https://github.com/HKUDS/nanobot/pull/3973) 提出了增强Dream系统实时学习能力的诉求，这是对长期记忆系统的一项关键改进。
-   **语音功能扩展**：PR [#3970](https://github.com/HKUDS/nanobot/pull/3970) 增加了对Azure语音服务（语音转文本）的支持。
-   **WhatsApp自动暂停**：Issue [#2837](https://github.com/HKUDS/nanobot/issues/2837) 请求当人类在WhatsApp聊天中回复时，机器人能自动暂停12小时，以避免干扰。
-   **配置文件hooks**：Issue [#2182](https://github.com/HKUDS/nanobot/issues/2182) 提出实现类似Claude Code的hooks功能，允许在生命周期事件中自动执行用户自定义操作。

### 用户反馈摘要

-   **Dream系统体验**：用户在Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) 中详细描述了Dream系统的不足，认为其“饥饿”且缺乏实时性，导致长期记忆无法有效反映最新交互。
-   **配置透明度**：Issue [#3637](https://github.com/HKUDS/nanobot/issues/3637) 的用户指出Groq转录配置不直观而导致了错误的设置，反映了用户对配置文档和逻辑清晰度的较高期望。
-   **功能缺失反馈**：Issue [#2837](https://github.com/HKUDS/nanobot/issues/2837) 描述了在实际使用WhatsApp时，机器人持续回复干扰了人类对话，用户明确表达了需要一个“冷却期”功能来改善体验。

### 待处理积压

-   **[Hooks功能请求]**：功能请求 Issue [#2182](https://github.com/HKUDS/nanobot/issues/2182) 提出了实现类似Claude Code的hooks系统，从3月17日提出至今已超过2个月，获得了社区点赞和讨论，但目前仍没有对应的PR或明确的时间表。
-   **[BM25路由提案]**：PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) 提出的BM25技能路由方案，旨在解决系统提示词过长和技能选择效率问题，已开放一周有余，虽引发了讨论但尚未合并，可能需要进一步测试与评审。
-   **[WhatsApp交互增强]**：功能请求 Issue [#2837](https://github.com/HKUDS/nanobot/issues/2837) 提出了WhatsApp聊天中的人类介入自动静默功能。该请求已存在超过1个月，目前无维护者回应，是社区使用场景中的一个明确痛点。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 2026-05-24 数据，以下是 Zeroclaw 项目的动态日报。

---

## Zeroclaw 项目日报 — 2026年05月24日

### 今日活动概览

今日项目活跃度极高，过去24小时内共有 **50 条 Issues** 和 **50 条 PR** 更新。其中新开/活跃的 Issue 和待合并 PR 均为 42 条，显示出社区在积极报告问题和提交代码。值得注意的是，来自贡献者 `@yijunyu` 发起了一系列**大规模重构**，将各个频道的硬编码白名单逻辑统一迁移至 `AllowlistAspect` 共享组件，涉及超过10个PR。此外，`@singlerider` 提交了整合 TUI（终端用户界面）Agent 聊天功能的 PR，标志着项目在用户交互体验上的重要进展。无新版本发布。

### 项目进展

- **选择性频道构建**：`@NiuBlibing` 提交了 PR [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866)，新增 `default-channels` feature 包裹，支持 `--no-default-features --features channel-telegram` 等选择性构建方式，优化了依赖管理和编译时间。
- **频道白名单逻辑统一**：贡献者 `@yijunyu` 提交了超过10个（如 [#6785](https://github.com/zeroclaw-labs/zeroclaw/pull/6785)， [#6784](https://github.com/zeroclaw-labs/zeroclaw/pull/6784)， [#6783](https://github.com/zeroclaw-labs/zeroclaw/pull/6783) 等）PR，旨在将 Matrix、Nostr、IRC、WhatsApp、钉钉等各频道的“用户是否被允许”的判断逻辑，统一迁移到共享的 `aspect_std::AllowlistAspect` 组件中。这是为了 **ICSE 2027 M1 评估**的一部分，目标是替换掉16个频道中约147行手写代码。
- **TUI Agent 聊天功能**：`@singlerider` 提交了 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)，整合了 TUI Agent 聊天功能，该功能在终端中提供流式响应、工具调用、结果展示及审批提示等交互体验。
- **文档与日志修复**：`@Audacity88` 的 PR [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) 和 [#6694](https://github.com/zeroclaw-labs/zeroclaw/issues/6694) 已关闭，修复了 `RUST_LOG` 文档中过时的 target 过滤器，并解决了 `cargo mdbook sync` 导致大量 gettext 目录变动的问题。

### 社区热点

- **`[Bug]: show_tool_calls is missing from [channel]`** [Issue #6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) (5条评论)
    用户反映在 schema v3 的 channel 响应中缺少工具调用细节。这是来自多个 channel 用户的共同诉求，社区期望恢复类似 v2 的 `show_tool_calls` 配置选项。

- **`gateway: silent-fallback hardening`** [Issue #6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) (4条评论, 已持续近一个月)
    这是一个长期追踪 Issue，关注 GateWay 端的静默回退问题。社区讨论聚焦于如何确保在配置回退失败时能“大声报错”（fail-loud），而不是静默错误，这直接关系到生产环境的可靠性。

- **`[RFC]: Shared reply-message constructor on SendMessage`** [Issue #6883](https://github.com/zeroclaw-labs/zeroclaw/issues/6883)
    刚创建的新 Issue，作者指出在 Orcestrator 和所有频道中都重复着相同的“构建回复消息”的三步模式，建议提取出一个共享的构造器。这可能成为近期代码优化的一个方向。

### Bug 与稳定性

以下为按严重程度排列的今日活跃 Bug：

- **S0 (数据丢失/安全风险)**
    - `[Bug]: providers erro` [Issue #6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558): 用户报告使用自定义 Qwen API 时因 405 错误导致所有 Provider 尝试失败，工作流被阻塞。**状态：需作者提供更多信息。**
    - `[Bug]: no found when web search 'openclaw'` [Issue #6063](https://github.com/zeroclaw-labs/zeroclaw/issues/6063): Web 搜索工具无法搜索到项目自身相关信息。**状态：需复现。**

- **S1 (工作流阻塞)**
    - `[Bug]: Cannot use the services provided by llama-server` [Issue #6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180): 用户配置 llama-cpp 服务后 Agent 功能报错，无法使用。**状态：需作者提供更多信息。**
    - `fix(email): ignore blank SMTP credential overrides` [Issue #6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881): 当 SMTP 凭证覆盖字段为空时，可能导致 E-mail 频道功能异常。**状态：已接受。**

- **S2 (功能降级)**
    - `[Bug]: show_tool_calls is missing from [channel]` [Issue #6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856): 如上所述，工具调用详情在 channel 响应中丢失。
    - `[v0.8.0-beta-1] Gateway SPA fallback serves index.html for unimplemented /api/* routes` [Issue #6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862): Beta 版本网关中，对于未实现的 `/api/*` 路由，错误地返回了 `index.html`，导致 Web 仪表盘 JSON 解析失败。
    - `bug(cron): manual cron_run still persists best-effort delivery failures as ok` [Issue #6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632): 手动触发的 cron 任务在投递失败时仍被记录为成功状态。

### 功能请求归类

- **架构重构**
    - `[Feature]: Invert zeroclaw-channels → zeroclaw-runtime layer dependency` [Issue #6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864): 提议反转层依赖，将 Agent Orcestrator 移入 `zeroclaw-runtime`。
    - `[Feature]: Decouple memory strategy layer from storage backend via MemoryStrategy trait` [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850): 提议引入 `MemoryStrategy` 特质来解耦内存策略与存储后端。

- **用户界面与交互**
    - `[Tracker]: TUI Agent Chat` [Issue #6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824): TUI Agent 聊天功能的追踪 Issue，目前已实现基本聊天界面和流式显示。相关 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 已提交。
    - `[Feature]: ACP protocol extensions for diff/file-proposal message types` [Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820): 扩展 ACP 协议以支持 diff 和文件提议消息类型，用于 TUI 和 Web 仪表盘的审批流程。

- **安全与配置**
    - `[Feature]: Agent capability flags for shared/ access and workspace escape` [Issue #6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729): 增加 per-agent 的能力标志，控制对共享目录和 workspace 的访问，加强安全边界。
    - `[Feature]: Remove remote-markdown-link block from skill audit` [Issue #6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714): 建议移除技能审计中针对远程 `.md` 链接的检查，因为误报率过高，影响了真实技能的正常发布。

- **文档与运维**
    - `[Feature]: Update Documentation for Docker - Tested v0.7.5-debian` [Issue #6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760): 用户提供了经过验证的 Docker Compose 配置文件示例，希望更新官方文档。
    - `[Feature]: Delete unneeded branches from main zeroclaw-labs/zeroclaw repository` [Issue #6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715): 用户建议清理仓库中超过200个已合并、不再需要的分支，以保持仓库整洁。

### 用户反馈摘要

- **困惑与配置问题**
    - 一位用户指出 `[runtime_profiles.*].max_tool_iterations` 配置项**实际无效**，该参数仅在 `[agents.*]` 上生效，这可能会让按文档配置的用户感到困惑。[Issue #6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877)
    - 使用 llama-cpp 的用户报告 Agent 功能完全不可用，故障排查较为困难。[Issue #6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)

- **功能缺失与回归**
    - 多名用户希望恢复 v2 中的 `show_tool_calls` 选项，以在 Channel 中显示更详细的 Agent 工作流程。[Issue #6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)
    - 一位用户指出，RUST_LOG 的文档示例 `RUST_LOG=zeroclaw=debug` 已无法正常工作，导致日志调试困难。[Issue #6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) (已解决)

- **新功能建议**
    - 用户 `@whistler3` 希望将 ZeroClaw 作为 XCode 开发环境中的主要聊天 Agent，以弥合当前在 Obsidian 中进行思考和直接编码之间的鸿沟。[Issue #6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)

### 待处理积压

- **长期高风险 Issue**
    - `gateway: silent-fallback hardening` [Issue #6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) (创建于2026-04-26): 虽然近期仍有讨论，但作为影响生产可靠性的高优先级问题（P1），其解决进展值得持续关注。
    - `audit: track 153 commits lost in bulk revert` [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (创建于2026-04-24): 追踪因一次批量回退而丢失的153个提交，该 Issue 标记为“进行中”且“不过时”，说明恢复工作仍在推进中。

- **被阻塞且等待作者回复**
    - 多个 Issue，如 `Channels supervisor crashloops` [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724), `providers erro` [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558), `Cannot use the services provided by llama-server` [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)，均处于 `needs-author-action` 状态，等待 Issue 作者提供更多信息以推进复现或调试。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，以下是 2026-05-24 的 PicoClaw 项目动态日报。

---

## 日报：PicoClaw 项目动态 — 2026-05-24

### 1. 今日活动概览

过去 24 小时，PicoClaw 项目保持活跃，共收到 6 条 Issue 更新（其中 2 个新开/活跃，4 个已关闭）和 9 个 PR 更新（其中 3 个待合并，6 个已合并/关闭）。项目发布了 **v0.2.9-nightly** 预览版。核心的代码贡献集中在**漏洞修复**（Seahorse 上下文预算、Discord 附件处理）和**新功能支持**（DeepSeek 思考模式映射、前端代码块优化及捷克语本地化），并完成了一次依赖安全性更新。

### 2. 版本发布

- **标题**: nightly: Nightly Build
- **版本**: **v0.2.9-nightly.20260524.d499cbec**
- **说明**: 这是自动构建的**夜间预览版**，可能不稳定，仅用于测试。
- **变更日志**: [查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

### 3. 项目进展 (合并/关闭的 PR)

- **Seahorse 上下文预算修复**: 合并了 PR [#2895](https://github.com/sipeed/picoclaw/pull/2895)，修复了 `FreshTail` 路径绕过预算限制，导致上下文溢出的问题（关联 Issue [#2894](https://github.com/sipeed/picoclaw/issues/2894)）。
- **DeepSeek 思考模式支持**: 合并了 PR [#2928](https://github.com/sipeed/picoclaw/pull/2928)，将 `thinking_level` 配置正确映射到 DeepSeek 的 API 字段，用户无需再手动编辑 `extra_body`。
- **Discord 附件处理修复**: 合并了 PR [#2931](https://github.com/sipeed/picoclaw/pull/2931)，修复了 Discord 频道中，图片等非音频附件无法被视觉识别模型处理的问题。
- **依赖更新**: 合并了 PR [#2930](https://github.com/sipeed/picoclaw/pull/2930)，将 `golang.org/x/net` 升级至 v0.55.0，以解决安全漏洞扫描 (`govulncheck`) 发现的问题。
- **消息回复逻辑**: 合并了 PR [#2835](https://github.com/sipeed/picoclaw/pull/2835)，修复了当 Agent 在回复中使用 `message` 工具发送过中间消息后，最终回复被意外吞掉的 Bug。
- **配置修正**: 合并了 PR [#1838](https://github.com/sipeed/picoclaw/pull/1838)，修正了 `picoclaw onboard` 命令的提示文本。

### 4. 社区热点

- **最受关注 Issue**: `[Feature]: Add email as native channel` ([#2421](https://github.com/sipeed/picoclaw/issues/2421))
    - **动态**: 已于今日关闭。
    - **分析**: 该 Issue 建议将邮件添加为原生频道，共收获 7 条评论和 2 个 👍。虽然已关闭，但它反映了用户对**非即时通讯类信道的需求**，特别是在企业、科研等无法使用 Telegram 等平台的环境中。维护者未明确说明关闭原因（可能是重复或无法实现），但社区对此类扩展的关注度是明确的。

### 5. Bug 与稳定性

- **Seahorse 上下文溢出 (严重)**
    - **描述**: Issue [#2894](https://github.com/sipeed/picoclaw/issues/2894) 报告，当 `FreshTailCount=32` 时，Seahorse 完全忽略预算限制，导致请求超出模型上下文窗口，触发 400 错误。
    - **状态**: **已关闭**。PR [#2895](https://github.com/sipeed/picoclaw/pull/2895) 已合并修复。

- **v0.2.8 启动时无频道 (严重)**
    - **描述**: Issue [#2742](https://github.com/sipeed/picoclaw/issues/2742) 报告，在 v0.2.8 版本中，Gateway 启动后无法加载任何已配置的频道（如 Telegram），导致服务不可用。
    - **状态**: **待处理 (OPEN)**。

- **Android 权限问题 (崩溃)**
    - **描述**: Issue [#2880](https://github.com/sipeed/picoclaw/issues/2880) 报告，在 Android 10 的 Pocophone F1 上，即使授予了所有存储权限，应用在创建 `Downloads/picoclaw` 目录时仍提示“权限被拒绝”，导致服务无法启动。
    - **状态**: **待处理 (OPEN)**。

### 6. 功能请求归类

- **频道扩展**
    - **Issue [#2421]** (已关闭): 提议将**电子邮件**添加为原生通信频道。
- **UI/UX 提升**
    - **PR [#2933]** (待合并): 为 Web 前端代码块添加**行号**和**全局换行切换**功能，并统一多页面渲染样式。
- **本地化**
    - **PR [#2932]** (待合并): 新增**捷克语 (cs)** 语言支持，覆盖所有 792 条前端字符串。
- **集成与兼容性**
    - **PR [#2883]** (待合并): 支持**微信多账号**配置，允许用户添加和管理多个微信机器人。
    - **Issue [#2903]** (已关闭) / **PR [#2928]** (已合并): 映射 DeepSeek 的**思考模式** (`thinking_level`) 字段。

### 7. 用户反馈摘要

- **配置升级体验**: 用户在 Issue [#2834](https://github.com/sipeed/picoclaw/issues/2834) 中询问“如何升级到新版本（移除旧版本）”，这表明部分用户在非 Docker 环境下进行版本升级时，对具体流程和注意事项存在困惑，可能缺乏清晰的升级文档。
- **原生频道需求**: 用户在 Issue [#2421](https://github.com/sipeed/picoclaw/issues/2421) 中提出添加邮件频道的诉求，强调在企业、科学、保守环境下，邮件是主要甚至唯一的通信方式，这说明了 PicoClaw 在特定 B2B 或传统行业场景下的潜在价值。

### 8. 待处理积压

- **Issue [#2742]**: `[BUG] gateway starts with no channels in v0.2.8` — 一个影响 v0.2.8 版本基础功能的 Bug（启动无频道），自 5 月 1 日上报以来已近 3 周，尚无维护者明确回复或指派修复。
- **Issue [#2880]**: `[BUG]` — Android 权限问题导致应用崩溃，作者自 5 月 16 日报告后，至今仅有一条评论，是社区互助而非官方回应。
- **PR [#2883]**: `feat: 支持微信多账号配置` — 一项来自社区贡献者的新功能 PR，自 5 月 16 日提交后已超过一周，一直处于“待合并”状态，需要维护者进行 Review。

</details>