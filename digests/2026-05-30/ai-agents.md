# OpenClaw 生态日报 2026-05-30

> Issues: 330 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-30 02:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-05-30

## 1. 今日活动概览

过去 24 小时 OpenClaw 项目共产生 330 条 Issues 更新（新开/活跃 155 条，已关闭 175 条）和 500 条 PR 更新（待合并 331 条，已合并/关闭 169 条）。发布了 4 个 v2026.5.28 系列的 beta 版本（beta.1 → beta.4），核心聚焦 Agent 与 Codex 运行时恢复的稳定性改进。社区讨论集中在 Windows UI 输入吞字、Codex 运行时配置冲突、消息路由回归等问题上，同时有多项 PR 合并修复了重启续传、图片生成、iMessage 路由等关键路径。

## 2. 版本发布

**v2026.5.28-beta.1 / beta.2 / beta.3 / beta.4**（共 4 个版本，Highlights 内容一致）

- **Highlights**: Agent 和 Codex 运行时恢复更稳定：子代理保持 cwd/workspace 隔离；hook 上下文仅限 prompt-local；会话锁在超时中止时正确释放；避免陈旧重启延续；Codex app-server/helper 失败不再破坏共享运行时状态。
- **破坏性变更**: 官方 Release Notes 未说明破坏性变更或迁移注意事项，注意本次更新可能对 codex 相关配置有隐式影响（参考下方 Issues）。

[Release 列表](https://github.com/openclaw/openclaw/releases)

## 3. 项目进展

今日合并/关闭的重要 PR（以下 PR 均已在过去 24 小时内被合并或关闭）：

- **#88161** – `Fix restart sentinel internal continuations`：修复重启哨兵的内部续传逻辑，避免合成重启回合自动发送最终输出到原始频道。已合并。
- **#88191** – `Fix Codex raw image generation media projection`：将 Codex app-server 的原始图片生成结果映射为 OpenClaw 可管理的媒体工件，并处理去重。已合并。
- **#88134** – `fix(imessage): preserve SMS approval reply routes`：保持 iMessage 中 SMS 认证回复路径的正确路由。已合并。
- **#88190** – `feat(minimax): add MiniMax-M3 with native multimodal + 512K context`：新增 MiniMax-M3 模型支持，原生多模态+512K 上下文。已合并。
- **#82056** – `feat(minimax): migrate OAuth to account/oauth2 endpoints + add refresh`：MiniMax OAuth 端点迁移并增加刷新机制。已合并。
- **#87772** – `fix(reply): deliver plugin binding replies`：确保插件绑定的回复在 `message_tool_only` 模式下也能发送。已合并。
- **#87956** – `fix(codex): keep turn alive after image_generation_call`：防止 Codex 图片生成后空闲看门狗过早结束 turn。已合并。
- **#87743** – `fix(reply): deliver plugin binding replies under message-tool mode`：类似 #87772，针对 Discord 等频道的插件回复修复。已合并。

此外，有多项高关注度 PR 仍处于开放待合并状态，详见章节 4 与 8。

## 4. 社区热点

过去 24 小时内评论数最多的 Issues（附链接）：

| Issue | 标题 | 评论数 | 核心痛点 |
|-------|------|--------|----------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | [Bug]: 2026.4.14 Windows chat UI regression: input text swallowed, streamed replies often invisible | 13 | Windows 升级后聊天 UI 输入文本被吞，流式回复不可见，刷新后恢复 |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | [Bug]: doctor --fix silently migrates intentional openai-codex/ config to openai/ | 12 | `doctor --fix` 自动迁移配置导致 PI+OAuth 运行时错误及 3-4 倍 token 膨胀 |
| [#86820](https://github.com/openclaw/openclaw/issues/86820) | [Bug]: Codex OAuth compaction falls back to direct OpenAI API and fails without OPENAI_API_KEY | 11 | 压缩时回退到直接 API 但缺少 key，导致失败 |
| [#88102](https://github.com/openclaw/openclaw/issues/88102) | [Bug]: 2026.5.27 Codex runtime rejects openai/gpt-5.5; workaround drops Telegram /status usage | 11 | 升级后 Codex 运行时拒绝 `openai/gpt-5.5`，改用 `codex/gpt-5.5` 后 Telegram 状态功能丢失 |
| [#51871](https://github.com/openclaw/openclaw/issues/51871) | [Bug]: Control UI: Cron jobs not displayed in dashboard (2026.3.13) | 10 | 控制 UI 不显示定时任务，长期未完全修复 |
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | [Bug]: feishu cannot dispatch messages after v2026.5.27 upgrade — TypeError: read property 'run' of undefined | 7 | 飞书频道升级后消息派发崩溃 |

**分析**：Windows UI 回归（#67035）已持续一个半月，评论中用户表示“不是简单的速度问题”且维护者未给出修复时间表；Codex 运行时相关 regression（#84038、#86820、#88102）集中出现在近两周的版本中，用户对 `doctor --fix` 的副作用和模型命名冲突感到困扰。飞书和 Telegram 的路由问题也引发大量反馈。

## 5. Bug 与稳定性

按严重程度排列，P1 级 Bug 及现有 fix PR 状态：

| 严重度 | Issue | 标题 | 现状 | Fix PR |
|--------|-------|------|------|--------|
| P1 | [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI regression | 开放，无 fix PR | — |
| P1 | [#84038](https://github.com/openclaw/openclaw/issues/84038) | doctor --fix 破坏 Codex 配置 | 已关闭（修复？但需确认 Release 中包含） | 关联 PR 状态未标 |
| P1 | [#88102](https://github.com/openclaw/openclaw/issues/88102) | Codex runtime 拒绝 gpt-5.5 | 已关闭，未标明 Fix PR | — |
| P1 | [#87646](https://github.com/openclaw/openclaw/issues/87646) | feishu 消息派发崩溃 | 开放，无 fix PR | — |
| P1 | [#87711](https://github.com/openclaw/openclaw/issues/87711) | Telegram 空回复（footer-only） | 开放，无 fix PR | — |
| P1 | [#75378](https://github.com/openclaw/openclaw/issues/75378) | 网关事件循环饱和导致 1012 重启 | 开放，无 fix PR | — |
| P1 | [#83184](https://github.com/openclaw/openclaw/issues/83184) | Heartbeat 驱动回复阻塞后续心跳 | 开放，无 fix PR | — |
| P1 | [#86948](https://github.com/openclaw/openclaw/issues/86948) | Beta blocker: codex app-server 静默丢 turn | 已关闭，有 fix（#87956 合并） | #87956 |
| P1 | [#86509](https://github.com/openclaw/openclaw/issues/86509) | 事件循环饥饿回归（5.22） | 已关闭，回退到 5.20 可恢复 | — |
| P2 | [#86613](https://github.com/openclaw/openclaw/issues/86613) | memory_search 每次调用泄露 FD | 已关闭，有 fix PR？未明确 | — |

**稳定性趋势**：Codex 运行时相关的 Regression 在本日周期内大量涌现，包括配置迁移、模型拒绝、turn 静默丢失、图片生成后超时等。已合并的 #87956 和 #88191 试图缓解部分问题，但核心的 #88102 和 #87646 尚未修复。

## 6. 功能请求归类

用户提出的新功能需求及相关 PR（仅记录证据，不预测路线图）：

| Issue/PR | 标题 | 类型 | 说明 |
|----------|------|------|------|
| [#88154](https://github.com/openclaw/openclaw/issues/88154) | [Feature]: Add Slack Modal Support for Interactive Workflows | Enhancement | 希望在 Slack 中支持模态对话框以收集结构化输入 |
| [#17925](https://github.com/openclaw/openclaw/issues/17925) | [Feature]: Support native web_search passthrough for ZAI (GLM) and Google (Gemini) | Enhancement | 为 ZAI 和 Gemini 提供原生 web_search 传递，已开放约3个月 |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | TUI: Support Shift+Enter for newline (Enter to send) | Enhancement | TUI 中希望 Shift+Enter 换行，Enter 发送，已开放近4个月 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Feature Request: Per-agent dreaming configuration | Enhancement | 希望每个 agent 可以单独配置 dreaming 调度，避免同时运行导致 OOM |
| [#87072](https://github.com/openclaw/openclaw/pull/87072) | feat(telegram): opt-in interleaved progress lane | PR | 新增 Telegram 推理过程进度显示（可选），待合并 |
| [#88048](https://github.com/openclaw/openclaw/pull/88048) | feat(gateway): add opt-in WebChat OpenResponses progress event | PR | 为 WebChat 添加可选 progress 事件，待合并 |
| [#81851](https://github.com/openclaw/openclaw/pull/81851) | feat(anthropic): claude-cli-interactive backend | PR | 新增 Claude CLI 交互式后端，通过本地 TLS 代理流式推理，待合并 |

## 7. 用户反馈摘要

从 Issues 评论中提取的真实用户痛点与场景：

- **Windows 用户**（#67035）：对话框输入文本经常不出现，流式回复在未刷新前不可见，打字指示器闪烁后变空白。用户认为不是模型速度问题，而是 UI 渲染层的严重回归。
- **OAuth 配置用户**（#84038）：`doctor --fix` 自动将 `openai-codex/` 迁移为 `openai/`，导致 OAuth 运行时错误，token 使用量膨胀 3-4 倍。用户认为此行为应该需要确认而不是静默执行。
- **Telegram 群组用户**（#77576）：群消息触发的 agent 回复被错误路由到 webchat 而非 Telegram 群组。用户强调这是升级后出现的 regression，之前可正常路由。
- **Telegram /new 用户**（#87711）：在 Telegram 使用 `/new` 后，首次对话收到的回复只有 footer（“— out 使用量”），没有实际内容。用户怀疑是 session 状态初始化问题。
- **飞书用户**（#87646）：升级到 v2026.5.27 后飞书频道无法派发消息，报错 `Cannot read properties of undefined (reading 'run')`。用户被迫回滚。
- **Codex 用户**（#88102, #86820）：多个用户反映 Codex 运行时在 5.27 版本拒绝 `openai/gpt-5.5`，或者 OAuth 压缩时因缺少 API key 失败。用户尝试 workaround 但导致 Telegram 状态命令不可用。

## 8. 待处理积压

长期未响应或等待维护者关注的 Issue/PR：

| 条目 | 标题 | 创建/最后更新 | 状态 | 备注 |
|------|------|---------------|------|------|
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak: 389MB → 14.7GB over 4 days | 2026-03-25 创建，2026-05-29 更新 | OPEN，P1 | 内存泄漏严重，无维护者回复 |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) | Moonshot/Kimi duplicate tool-call IDs | 2026-03-21 创建，2026-05-29 更新 | OPEN，P1 | 维护者分析认为非 WhatsApp 独有的问题，修复尚在讨论 |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) | node:sqlite missing FTS5 module — memory keyword fallback broken | 2026-04-07 创建，2026-05-29 更新 | OPEN，P2 | 依赖 Node.js sqlite 缺少 FTS5，影响记忆搜索 |
| [#17925](https://github.com/openclaw/openclaw/issues/17925) | Support native web_search pas

---

## 横向生态对比

# 多项目横向对比分析报告 — 2026-05-30

## 1. 今日横向概览

今日三个可获取数据的项目（OpenClaw、NanoBot、Zeroclaw）均保持高活跃度。OpenClaw 发布了 4 个 beta 版本，重点修复 Codex 运行时稳定性和 Agent 恢复逻辑，同时社区围绕 Windows UI 回归和 Codex 配置迁移产生了大量讨论。NanoBot 经历了一次密集的安全审计，社区贡献者提交了超过 5 个高危安全漏洞报告及配套修复 PR，维护者响应迅速。Zeroclaw 聚焦于成本优化（分类器模型分离）和内存策略抽象，但 Slack 与 Telegram 通道出现工作流阻断级别 Bug，文档版本与发布脱节问题也引发用户不满。PicoClaw 因数据缺失无法纳入对比。

## 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 版本发布 | 备注 |
|------|--------------|-----------|---------|------|
| OpenClaw | 330 (新开/活跃 155, 关闭 175) | 500 (待合并 331, 合并/关闭 169) | 4 个 beta 版 (v2026.5.28-beta.1~4) | 社区讨论集中在 Codex 运行时回归和 Windows UI 问题 |
| NanoBot | 32 (以新开为主，含大量安全报告) | 42 (已合并/关闭 2, 待合并 >10) | 无 | 安全审计密集，维护者快速响应 |
| Zeroclaw | 18 (新开/活跃 17, 关闭 1) | 46 (待合并 38, 合并/关闭 8) | 无 | 出现两个 S1 级工作流阻塞 Bug（Slack、Telegram） |
| PicoClaw | 数据缺失 | 数据缺失 | 数据缺失 | 摘要生成失败，无法分析 |

## 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 的 Issue 和 PR 数量远超 NanoBot 和 Zeroclaw，版本发布频率也最高（一日 4 个 beta），表明其维护团队在持续快速迭代。
- **技术重点**：OpenClaw 今日核心是 **运行时恢复稳定性**（Agent、Codex），修复了重启续传、图片生成、消息路由等关键路径；NanoBot 侧重 **安全与并发修复**；Zeroclaw 侧重 **成本优化与架构抽象**（分类器模型、内存策略）。
- **社区讨论面**：OpenClaw 社区讨论覆盖 Windows UI 回归（#67035 持续 1.5 个月）、Codex 配置迁移（#84038）、模型命名冲突（#88102）等多个长期痛点；NanoBot 讨论集中于短时记忆丢失（#4044）和安全漏洞；Zeroclaw 讨论集中于通道阻塞（Telegram 语音、Slack 认证）和文档版本脱节。OpenClaw 的问题影响面更广（跨平台、跨通道），而 NanoBot 和 Zeroclaw 的讨论更集中于特定功能模块。

## 4. 共同出现的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| **模型配置/命名冲突** | OpenClaw, NanoBot, Zeroclaw | OpenClaw: Codex 运行时拒绝 `openai/gpt-5.5`；NanoBot: 工具调用 ID 重复（#4058, #4059）；Zeroclaw: 供应商配置键名重载导致路由错误（#6607 已修复） |
| **通道集成稳定性** | OpenClaw, Zeroclaw | OpenClaw: iMessage 路由回归、飞书崩溃、Telegram 空回复；Zeroclaw: Telegram 语音转录失败、Slack Socket Mode 认证拒绝 |
| **会话/上下文管理** | OpenClaw, NanoBot, Zeroclaw | OpenClaw: 会话锁超时释放、子代理隔离；NanoBot: 短时记忆丢失、并发写入光标重复；Zeroclaw: 记忆策略 trait 抽象（#6907） |
| **安全/配置风险** | NanoBot, Zeroclaw | NanoBot: 多处未鉴权、SSRF 绕过；Zeroclaw: 文档版本脱节、`max_response_size=0` 逻辑错误（#6884 已修复） |

注意：共同方向均有今日数据支撑，但 OpenClaw 在会话管理上已有多项修复合并，NanoBot 和 Zeroclaw 则更多处于报告或待修复阶段。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw |
|------|----------|---------|----------|
| **功能侧重** | 多 Agent 运行时、Codex 代码执行、多通道消息路由（iMessage、Telegram、飞书等） | 轻量级个人助手，快速会话，记忆管理 | 沙箱化执行、工具链集成、成本优化、结构化输出（Schema-Guided Reasoning） |
| **目标用户** | 需要复杂 Agent 编排和代码执行能力的开发者/团队，支持多平台部署 | 个人用户和轻量级聊天助手场景，注重隐私与低资源运行 | 重视安全合规、成本控制的企业开发者，以及需要细粒度工具控制的用户 |
| **技术架构差异** | 基于 Node.js，强调运行时恢复和幂等性，依赖 Codex app-server 架构 | 模块化设计，近期引入手动记忆模式和模型预设，响应式安全审计 | Rust 实现（推测），强调内存策略 trait、沙箱策略、i18n/本地化，有大型集成 PR（TUI、RPC） |

今日数据未显示三个项目存在直接竞争关系，而是在 AI 智能体赛道中各有侧重。

## 6. 社区活跃度记录

基于今日数量与发布记录做活跃度分层（从上到下活跃度递减）：

- **第一梯队：OpenClaw** — 日 Issue+PR 更新 830+ 条，发布 4 个 beta 版本，社区讨论深入且持续（多个长周期 Issue 仍在活跃），维护者响应较快（多个 P1 修复已合并）。
- **第二梯队：NanoBot 与 Zeroclaw** — 均无版本发布，但 NanoBot 因安全审计产生密集 Issue/PR（74 条更新），维护者当日即提交修复 PR；Zeroclaw 更新数量较少（64 条），但社区讨论集中在高影响 Bug 和大型集成 PR 上，维护者持续评论。
- **不可评估：PicoClaw** — 数据缺失。

**注意：** 不做成熟度评分，仅根据今日数据量分层。Zeroclaw 的 PR 合并/关闭率（8/46 ≈ 17%）低于 NanoBot（2/42 ≈ 5%，但待合并 PR 数量多反映正在处理），OpenClaw 合并/关闭率较高（169/500 ≈ 34%），但待合并数量也大。

## 7. 有证据支撑的观察

1. **通道集成稳定性是跨项目共性痛点**：OpenClaw 出现了 iMessage、Telegram、飞书的问题，Zeroclaw 出现了 Telegram 和 Slack 的问题，NanoBot 虽无直接通道 Bug，但其 API 未鉴权问题也会间接影响通道集成。这表明外部平台接口的兼容性维护是此类项目的持续挑战。

2. **Codex/运行时类模块的回归频率偏高**：OpenClaw 今日修复了大量 Codex 运行时问题（图片生成、turn 寿命、配置迁移），而这类问题在过去两周的版本中反复出现（#88102, #86820, #87956）。NanoBot 的“短时记忆丢失”也涉及上下文窗口管理，属于运行时层面的回归。Zeroclaw 的“供应商配置重载”也属于运行时路由问题。

3. **安全审计正在成为社区驱动的重点活动**：NanoBot 今日由单一贡献者 @hamb1y 提交了至少 6 个安全相关 Issue（SSRF、未鉴权、WebSocket 令牌等），并同步提交了修复 PR。这种“报告+修复”模式表明社区自发性安全审计正成为项目健康度提升的常见方式。OpenClaw 和 Zeroclaw 今日未出现类似密集安全报告。

4. **成本优化功能获得用户明确认可**：Zeroclaw PR #6945（为分类任务指定更便宜模型）被合并，NanoBot 的模型预设功能（PR #3696）被关闭，OpenClaw 则通过多模型支持（MiniMax-M3 等）间接降低选择成本。用户对控制 token 消耗的需求在三个项目中均有体现。

5. **文档与版本脱节问题开始影响用户体验**：Zeroclaw Issue #6997 明确提出文档基于 main 分支而非发布版本，导致用户混淆。OpenClaw 虽未直接提类似 Issue，但其频繁的 beta 版本（一日 4 个）可能使用户难以追踪文档更新。这是一个值得关注的用户体验风险。

**今日暂无明确跨项目信号：** 如技术路线趋同、生态合作、社区成员交叉等均无证据。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，以下是根据您提供的 NanoBot 项目数据生成的 2026-05-30 项目动态日报。

---

## NanoBot 项目动态日报 - 2026-05-30

**数据统计周期**: 过去 24 小时

---

### 1. 今日活动概览

今日项目活跃度极高，收到大量来自社区的Issue和PR贡献。共产生32条Issue更新和42条PR更新，其中大部分Issue为新提交的Bug报告与安全相关问题，表明项目经历了密集的功能审查与压力测试。维护团队响应迅速，针对这些问题提交了超过10个待合并的修复PR。今日无新版本发布。

### 2. 版本发布

无

### 3. 项目进展

今日有2个PR被合并/关闭，另有多个重要修复PR已提交。

- **PR #3696 [CLOSED]**: **feat(config): add model presets for quick model switching**。该PR介绍了模型预设功能，允许用户定义捆绑了模型、提供者和生成参数的命名预设，并支持运行时切换和自动回退。这是一个重要的功能增强，已于今日关闭。(https://github.com/HKUDS/nanobot/pull/3696)

- **PR #4051 [CLOSED]**: **fix(exec): bypass cmd.exe for multi-line python -c commands on Windows**。修复了在Windows系统上执行多行Python命令时，通过`cmd.exe`运行会导致代码被截断的问题。现在会使用PowerShell作为替代。(https://github.com/HKUDS/nanobot/pull/4051)

- **PR #4050 [OPEN]**: **feat: add manual memory mode**。引入了手动记忆模式，为用户提供了独立于自动记忆流程的记忆管理选项。(https://github.com/HKUDS/nanobot/pull/4050)

- **PR #4104 [OPEN]**: **fix(agent): acquire per-session lock in process_direct (#4080)**。修复了`process_direct()`绕过会话分发锁导致并发写入的问题。(https://github.com/HKUDS/nanobot/pull/4104)

此外，社区贡献者`@hamb1y`提交了一系列针对近期报告Bug的修复PR，包括会话存储键安全、内容裁剪连续性、流式缓冲区、协议修复等，总数超过10个，均处于待合并状态。

### 4. 社区热点

- **Issue #4044 [OPEN]**: **[bug] short term memory loss**。该Issue获得了4条评论，是目前讨论最活跃的话题。用户抱怨在与Nanobot对话时，机器人会忘记它刚刚问过的问题，导致对话上下文断裂。报告者详细分析了可能的原因，包括**上下文窗口压力**（系统提示词过长）、以及**记忆注入机制**的问题，这直接触及了长期对话连贯性的核心痛点。(https://github.com/HKUDS/nanobot/issues/4044)

- **安全相关Issue系列**: 贡献者`@hamb1y`提交了一系列安全问题报告（如#4074至#4078），涉及MCP SSRF绕过、API未鉴权、WebSocket令牌发放漏洞等，总计超过5个Issue。这些报告引发了广泛关注，表明社区对项目安全性非常重视，且项目正在经历一次集中的安全审计。作为回应，`@hamb1y`也提交了相应的修复PR（如#4100, #4103），维护者响应迅速。

### 5. Bug 与稳定性

今日报告了大量Bug，问题集中且严重，特别是安全与并发方面。以下按严重程度排列：

- **严重 - 安全漏洞**:
    - **MCP HTTP/SSE SSRF绕过** (#4074): 配置MCP连接时可能尝试回环连接，存在SSRF风险。已有修复PR #4100。
    - **OpenAI兼容API未鉴权** (#4078): `/v1/chat/completions`端点可无需认证直接调用。暂无关联PR。
    - **WebSocket令牌发放绕过** (#4077): 可无认证签发短时效令牌。已有修复PR #4103。
    - **Dream技能覆盖** (#4075): Dream功能可无所有权检查地覆盖用户创建的技能。已有修复PR #4101。
    - **文件系统越权写入** (#4073): 只读配置目录被允许写入。已有修复PR #4099。
    - **可执行工具工作区绕过** (#4072): 通过相对符号链接可读取工作区外文件。已有修复PR #4098。
    - **消息工具未鉴权** (#4076): 消息工具可向未授权目标发送消息。已有修复PR #4102。

- **严重 - 数据一致性与逻辑错误**:
    - **并发写入导致光标重复** (#4081): `MemoryStore.append_history`并发写入时会分配重复的序列号。
    - **API空重试导致用户消息重复** (#4079): API重试时用户消息会被重复处理。
    - **Cron任务会话上下文复用** (#4082): Crontab固定使用同一会话ID，导致多次执行共享上下文。
    - **短时记忆丢失** (#4044): 上下文裁剪导致机器人遗忘刚问的问题。已有修复PR #4089。
    - **会话键名冲突** (#4057): 不同的会话键经过文件名净化后可能冲突。已有修复PR #4090。

- **中等**:
    - **无效配置静默使用默认值** (#4067): 配置文件加载失败时没有报错，可能导致意料之外的行为。已有修复PR #4095。
    - **流式超时配置解析崩溃** (#4065): 环境变量`NANOBOT_STREAM_IDLE_TIMEOUT_S`值为无效字符时导致程序崩溃。已有修复PR #4095。
    - **多流合并错误** (#4063, #4068): 流式传输在频道级别和Matrix频道上因键值设置问题导致不同流被错误合并。均有修复PR。
    - **上下文中继丢失元数据** (#4064): 待处理消息注入时丢失发送者/频道等运行时上下文。已有修复PR #4094。

- **低/优化类**:
    - **工具调用ID重复** (#4058, #4059): 非流式解析器未进行去重，可能导致执行错误。均有修复PR。
    - **Anthropic Provider缺少类型字段** (#4060): 内容块可能缺少必须的`type`字段。已有修复PR #4093。
    - **WebSocket不可用时丢弃消息** (#4062): 无订阅者时，预警类消息会被丢弃。已有修复PR #4094。

### 6. 功能请求归类

- **增强功能**:
    - **配置禁用文档提取** (#4043): 用户希望在特定工作流中能够选择关闭Nanobot自动提取文档的功能，以获得更灵活的控制。
    - **手动记忆模式** (#4050, PR): 相关PR已提交，旨在提供手动记忆模式，让用户控制何时保存记忆。
    - **API欠费警告** (#3006, CLOSED): 用户希望在API Key欠费时收到明确警告，而非静默无响应。此Issue已于今日关闭。

### 7. 用户反馈摘要

- **核心痛点 - 对话连贯性**: Issue #4044 (短时记忆丢失) 的详细描述代表了用户的核心痛点。用户表示机器人在提出问题并收到回答后，似乎完全忘记了刚才的对话，导致对话断裂。报告者@bjoshuanoah 明确指出问题可能源于系统提示词过长导致的上下文窗口压力，这一问题直接影响了机器人作为“助手”的可用性。
- **交互体验**: Issue #3006 中用户反馈，当API欠费时系统无任何反馈，这不仅让用户困惑，也可能产生数据丢失的担忧。

### 8. 待处理积压

近期没有明显的长期未响应Issue。今天大量新报告的问题均已获得维护者或社区贡献者的快速响应，并附有解决方案。值得关注的是，随着安全审计的密集进行，部分安全相关Issue（如#4078）虽然已被报告，但尚未看到关联的PR提交，需待维护团队后续跟进。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目 GitHub 数据生成的 2026-05-30 项目动态日报。

---

## Zeroclaw 项目动态日报 — 2026-05-30

### 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目保持高度活跃，尤其在问题修复和功能开发方面。项目共处理了 18 条 Issues（新开或活跃 17 条，关闭 1 条），以及 46 条 Pull Requests（待合并 38 条，已合并/关闭 8 条）。社区关注的焦点集中在多个与安全、配置和通道集成相关的**高风险 Bug**，例如 Slack 和 Telegram 通道的功能阻断问题。同时，一些重要的增强功能如本地优先模式 (Local-First Mode) 和新工具 `file_download` 也在持续推进中。本周暂无新版本发布。

### 2. 版本发布

- **无新版本发布。**

### 3. 项目进展

以下是在过去 24 小时内已合并或关闭的重要 PR，反映了项目的最新进展：

- **[#6945] feat(agents): add per-agent `classifier_provider` to route reply-intent precheck to a cheaper model** (已合并)
  - 这是一个显著的成本优化功能。它允许为“是否回复”的分类任务单独指定一个更便宜的模型，从而避免在每次收到消息时都使用主智能体的昂贵模型进行预检查。
  - 链接: [PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945)

- **[#6607] fix(providers): respect explicit provider kind** (已合并)
  - 修复了供应商配置中的一个路径问题，确保显式指定的 `kind` 能够被正确路由，避免因配置键名重载导致的错误。
  - 链接: [PR #6607](https://github.com/zeroclaw-labs/zeroclaw/pull/6607)

- **[#6907] feat(memory): introduce MemoryStrategy trait and DefaultMemoryStrategy** (已合并)
  - 引入了 `MemoryStrategy` trait，将高级别的内存生命周期策略与底层的 `Memory` 存储分离，为更灵活的记忆管理机制打下了基础。
  - 链接: [PR #6907](https://github.com/zeroclaw-labs/zeroclaw/pull/6907)

- **[#6884] fix(web_fetch): treat max_response_size=0 as unlimited** (已合并)
  - 修复了一个使用逻辑问题。之前 `max_response_size=0` 会被错误地处理为只能读取 1 字节，现在修改为可配置为“无限制”。
  - 链接: [PR #6884](https://github.com/zeroclaw-labs/zeroclaw/pull/6884)

- **[#5450] fix(tools): add ipv6 support and use reqwest.url** (已合并)
  - 为 `http_request` 等工具增加了对 IPv6 地址的解析支持，并使用 `reqwest::Url` 替换了自定义的 URL 解析逻辑，提升了工具的网络兼容性。
  - 链接: [PR #5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450)

此外，作为 v0.8.1 集成工作的一部分，PR [#7013] 和 [#7014] 分别涉及历史记录修剪和运行时配置，已被标记为活跃待合并状态。

### 4. 社区热点

过去 24 小时内，以下 Issue 和 PR 引发了社区讨论：

- **[Issue #6999] [Bug]: Telegram voice transcription always fails** (风险: 高, 状态: 开放)
  - **诉求:** 用户报告Telegram的语音转录功能完全不可用，根本原因是通道未能正确关联 `transcription_provider` 配置别名。
  - **热度:** 这是最新的影响 S1（工作流阻塞）等级的 Bug，与 Telegram 体验强相关，受到社区高度关注。
  - 链接: [Issue #6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999)

- **[Issue #6992] [Bug]: Slack Socket Mode rejects all messages as "unauthorized user"** (风险: 高, 状态: 开放)
  - **诉求:** 用户报告 Slack Socket Mode 通道拒绝所有传入消息，认证机制可能出现了问题或兼容性问题，导致该通道完全无法使用。
  - **热度:** 同样为 S1 级别 Bug，严重影响了使用 Slack 的用户，是今日最紧急的 Bug 之一。
  - 链接: [Issue #6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992)

- **[PR #6848] feat(integration): introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration** (风险: 高, 状态: 开放)
  - **动态:** 这是一个大型集成功能的 PR（影响范围覆盖几乎所有模块），旨在集成 TUI、RPC 传输和新的审批模式，是 v0.8.0-beta-2 的基础。维护者正在寻求首轮反馈，讨论热度很高。
  - 链接: [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)

### 5. Bug 与稳定性

今日报告了多个高风险的 Bug，其中不少达到了“工作流阻塞 (Workflow Blocked)”级别：

- **S1 - 工作流阻塞 (Workflow Blocked):**
  - **[#6999] Telegram 语音转录失败:** 通道未正确配置 `transcription_provider`，所有语音消息被静默丢弃。目前无修复 PR。
  - **[#6992] Slack Socket Mode 认证拒绝:** 所有消息被标记为“未授权用户”，导致通道完全不可用。目前无修复 PR。
  - **[#6997] 文档版本与最新发布不匹配:** 用户反映文档内容与官方发布版本 (v0.7.5) 脱节，基于 main 分支的文档可能导致用户混淆。目前无修复 PR。

- **S2 - 功能降级 (Degraded Behavior):**
  - **[#6991] Native 工具序列化忽略风险/过滤器:** `tools_to_openai_format` 在 v0.8.0-beta-1 中忽略了风险配置和工具过滤规则，可能导致 Agent 行为不符合预期。目前无修复 PR。
  - **[#7001] 多 Agent 配置中 TTS 语音回复解析错误:** 通道 `TTS` 回复在多个 Agent 的环境中会因使用错误的配置而失效。目前无修复 PR。
  - **[#6995] CLI 回退键对 CJK 字符支持不良:** 交互式 CLI 模式下，回退键按字节删除，而非按字符，导致输入中文等字符时需要多次按退格键。目前无修复 PR。

此外，还有一个与性能相关的S3级别Bug：
- **[#7005] Onboarding 向导仍包含未被国际化的用户界面字符串:** 部分界面文字绕过 Fluent/i18n 系统，后续会逐步改进。

### 6. 功能请求归类

以下为今日用户提出的主要新功能请求：

- **安全与配置增强:**
  - **[#6989] 扩展 `#[secret]` 宏以支持 Header 令牌红化:** 用户请求将 `#[secret]` 功能扩展到 `Headers` 等 Map 类型，以便在日志中自动隐藏 Bearer Token 等敏感信息。
  - **[#6996] RFC: 文件系统和网络沙箱策略的精细化配置:** 提议为沙箱子系统增加更多可配置的细粒度限制，增强安全性。
  - **[#6998] RFC: Schema-Guided Reasoning (SGR) 结构化输出:** 提出一种跨供应商的结构化输出新方法，旨在使 Agent 能有效利用复杂 JSON Schema 进行推理。

- **用户体验与工具:**
  - **[#6990] i18n: 将 `file_download` 工具字符串接入 i18n 体系:** 新工具的文件描述和错误信息使用了硬编码字符串，需按项目规范迁移到 Fluent 本地化系统。
  - **[#6998] RFC: Schema-Guided Reasoning (SGR) 结构化输出:** 旨在统一和增强 Agent 对结构化输入/输出的处理能力。
  - **[#5287] 本地优先模式 (Local-First Mode):** 针对小型本地模型优化，减少 Prompt 体积，禁用宽松的解析，防止内部指令泄露，核心是提升在低资源设备上的可用性和隐私性。

### 7. 用户反馈摘要

从今日的 Issues 中，可以提炼出以下几个真实用户痛点：

- **通道体验问题:** 用户在 Telegram 和 Slack 通道上遇到了工作流阻断问题，这表明这些外部集成的稳定性和兼容性亟待提升。语音转录失败和认证错误是清晰的使用障碍。
- **文档与版本脱节:** “文档版本与最新发布不匹配” ([Issue #6997]) 的提出，反映用户希望能够信任和依赖最新、最准确的官方文档进行学习和部署。这种脱节会严重降低开发和集成效率。
- **国际化与本地化痛点:** 无论是新手引导（Onboarding）还是新工具，都出现了硬编码字符串的情况 ([Issue #7005])。对于非英语用户来说，这些遗留的、未国际化的文本构成了体验障碍。
- **本地模型支持诉求:** Issue [#5287] “本地优先模式”获得了用户点赞，证明了社区对小而精、专注于本地推理能力的 AI Agent 模式存在明确需求，尤其是在隐私和成本敏感的场景下。

### 8. 待处理积压

以下 Issue 或 PR 已处于开放状态较长时间，或缺少必要的维护者反馈和行动，建议重点关注：

- **[Issue #6074] 审计：追踪 153 个因批量回滚丢失的 commits:** 该 Issue 已开放一个多月，旨在追踪一次错误回滚中丢失的代码。作为一次重要的审计工作，其对项目历史完整性和代码质量有潜在影响，但目前更新较少，需要社区和核心开发者共同推动。
  - 链接: [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)

- **[PR #6284] fix(provider/compatible): preserve reasoning_content for plain-text assistant turns:** 该 PR 旨在修复 DeepSeek 等模型在回复不含工具调用时，其 `reasoning_content`（思考过程）未被保留的问题。目前已开放近一个月，对需要 Model Provider 兼容性的用户来说很重要。
  - 链接: [PR #6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284)

- **[PR #5187] feat(ci): add arm64 docker target:** 添加 ARM64 Docker 构建支持的 PR 已开放近两个月，这对于支持 Apple Silicon 和 ARM 服务器环境的用户至关重要。目前已被标记为 `needs-author-action`，可能需要贡献者回应或处理冲突。
  - 链接: [PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>