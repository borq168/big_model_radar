# OpenClaw 生态日报 2026-06-02

> Issues: 463 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-02 02:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-06-02

## 1. 今日活动概览

过去24小时，OpenClaw 项目保持高活跃度：共产生463条 Issue 更新（新开/活跃299条，关闭164条），500条 PR 更新（待合并397条，已合并/关闭103条）。此外，项目发布了两个 Beta 版本（v2026.6.1-beta.2 和 v2026.6.1-beta.1），主要聚焦于 Agent 运行时中断恢复、会话绑定清理、压缩移交以及渠道/移动端投递的稳定性提升。当前积压的开放 Issue 和 PR 数量依然较大，社区排查与维护者审查正在密集进行。

## 2. 版本发布

**v2026.6.1-beta.2 / v2026.6.1-beta.1**
这两个版本内容基本一致，主要内容包括：
- Agents 和 CLI 后端运行时在遇到中断的工具调用、过期的会话绑定、压缩移交以及媒体投递重试时，能够更干净地恢复（参考 #88129, #88136, #88141, #88162, #88182）。
- 渠道与移动端投递在 Telegram、WhatsApp、iMe（beta.1 中还包括 iMessage、Slack）上更加稳定。

无明确的破坏性变更或迁移说明。

## 3. 项目进展

今日共有 **103 个 PR 被合并或关闭**。在评论数最多的 30 个 PR 中，多数仍处于开放或等待审查状态，但有以下几个值得关注的进展：

- **#74185** `fix(infra): wrap provider auth resolution in timeout for status --usage --json`（状态：👀 ready for maintainer look）—— 通过在认证解析外层添加超时机制，防止 `status --usage --json` 命令因 OAuth 刷新或插件认证钩子挂起而无限阻塞。
- **#74136** `fix(agents): accept multi-line ANNOUNCE_SKIP on final line`（状态：👀 ready for maintainer look）—— 修复子代理输出中 `ANNOUNCE_SKIP` 出现在多行末尾时未被正确识别的问题。
- **#89027** `fix(cli): prevent empty_response failover for completed thinking-only turns`（状态：📣 needs proof）—— 避免 Claude CLI 模式下，仅产生思考块（无文本）的有效回复被误判为 `empty_response` 从而触发模型回退。
- **#89291** `test(plugins): cover filtered bundle MCP servers`（状态：👀 ready for maintainer look）—— 新增对 Codex 兼容 bundle 中 `toolFilter` 的回归测试。
- **#89289** `fix: aggregate archived session usage`（状态：👀 ready for maintainer look）—— 将会话归档文件（`.jsonl.reset.*` / `.jsonl.deleted.*`）纳入用量统计。

另外，多个针对 QQBot、Telegram、WhatsApp 投递修复的 PR 正在等待实测证明（`needs proof`），例如 #88066、#89038、#89251 等。

## 4. 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

| Issue # | 标题 | 评论数 | 状态 | 链接 |
|---------|------|--------|------|------|
| #80171 | Codex-vs-Pi runtime parity QA harness (RFC + tracking) | 15 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/80171) |
| #80380 | [Feature]: updating openclaw to use gemini-3.1-flash-lite | 14 | OPEN | [链接](https://github.com/openclaw/openclaw/issues/80380) |
| #88838 | Track core session/transcript SQLite migration via accessor seam | 12 | OPEN | [链接](https://github.com/openclaw/openclaw/issues/88838) |
| #84038 | [Bug]: doctor --fix silently migrates intentional openai-codex/ config to openai/ | 12 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/84038) |
| #86820 | [Bug]: Codex OAuth compaction falls back to direct OpenAI API and fails | 12 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/86820) |

**分析**：
- **#80171**（已关闭）作为 Codex 与 PI 运行时一致性 QA 框架的 RFC 与追踪，积累了 15 条评论，反映出社区对 Codex 运行时迁移的高度关注。随附的 #80397、#80365 等子问题也已关闭，表明该 QA 框架已阶段性完成。
- **#80380**（开放）请求将 Gemini 3.1 Flash-Lite 从 preview 更新至 GA 版本，获得 4 个 👍，显示用户对最新模型支持的迫切需求。
- **#88838**（开放）讨论通过访问器接缝（seam）逐步迁移会话/记录到 SQLite，以避免一次性大规模重构风险。该方案获得维护者与贡献者的积极讨论，是当前架构演进的核心话题。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在**消息重复、会话状态丢失、代理运行时崩溃**三类。按严重程度（P1 最高）排列如下：

| 严重级别 | Issue # | 标题 | 状态 | 是否存在 fix PR |
|----------|---------|------|------|----------------|
| P1 | #88312 | [Regression] Codex app-server turn-completion stall | OPEN | 未提具体PR，但提及是 #84076 的回归 | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| P1 | #87744 | Codex-backed Telegram turns repeatedly time out | OPEN | 无明确的 fix PR | [链接](https://github.com/openclaw/openclaw/issues/87744) |
| P1 | #86519 | Agent repeats identical replies 2-10x on Telegram | OPEN | 有相关PR #88992 尝试修复，但未合并 | [链接](https://github.com/openclaw/openclaw/issues/86519) |
| P1 | #88039 | Session-selected model incorrectly included in fallback list | OPEN | 无明确PR | [链接](https://github.com/openclaw/openclaw/issues/88039) |
| P1 | #84038 | doctor --fix silently migrates openai-codex/ config (已关闭) | CLOSED | 有 linked-pr-open 标签，推测已修复 | [链接](https://github.com/openclaw/openclaw/issues/84038) |
| P1 | #86820 | Codex OAuth compaction fallback (已关闭) | CLOSED | 可能已修复 | [链接](https://github.com/openclaw/openclaw/issues/86820) |
| P1 | #87177 | Message Duplication in QQBot Channel (已关闭) | CLOSED | 可能与 PR #89038 相关 | [链接](https://github.com/openclaw/openclaw/issues/87177) |
| P1 | #88102 | Codex runtime rejects openai/gpt-5.5 (已关闭) | CLOSED | 可能已修复 | [链接](https://github.com/openclaw/openclaw/issues/88102) |

此外，还有多个 P2/P3 级别的 Bug，如 Feishu 消息投递崩溃（#88234）、Cron 任务 MiniMax 503（#85888）、原生钩子桥接不可用（#87536）等。值得注意的是，多个围绕 Codex 运行时的回归问题被标记为“Regression”，且出现编号回退（如 #88312 是 #84076 的回归），表明 Codex 迁移引入的稳定性挑战仍在持续。

## 6. 功能请求归类

今日新增或活跃的功能请求主要来自以下 Issues：

- **Model 更新**
  - #80380：升级至 `gemini-3.1-flash-lite` GA 版本（4 👍，14 条评论）。
  - #89265：要求将本地模型作为一等公民（4 条评论，创建于今日）。

- **渠道与交互**
  - #79077：支持 Telegram 的 bot-to-bot 和 guest-bot 模式（7 👍，仍开放）。
  - #78308：为 MCP 工具调用增加渠道中介审批通道（仍开放）。

- **多代理与协作**
  - #35203：RFC 提议多代理协作增强——能力分析、共享黑板、分层记忆与 Token 成本治理（8 条评论，已开放3个月）。

- **国际化**
  - #79458：为斜杠命令描述添加 i18n 字段（5 条评论，仍开放）。

对应的 PR 方面，#89268 提议在 Telegram 中通过消息反应解决待审批项，#87072 添加可选的交织进度通道。这些功能尚处于早期实现或需求阶段。

## 7. 用户反馈摘要

从 Issue 摘要中提炼的真实用户痛点：

- **消息重复**：多名用户报告 Telegram、QQBot 渠道出现 2-10 倍的重复回复（#86519, #87177），严重影响使用体验。升级到较新版本后有所减轻但未根除。
- **Codex 运行时中断**：使用 Codex 的 ChatGPT Plus 订阅用户频繁遭遇“turn-completion stall”（#88312），致使会话无法结束。用户 @yair 明确表示 `2026.5.26` 正常，`2026.5.27` 必现。
- **配置损坏与 token 膨胀**：`doctor --fix` 命令在不知情的情况下将用户手动配置的 `openai-codex/` 路径迁移为 `openai/`，导致 OAuth 运行时失效并产生 3-4 倍 token 消耗（#84038，已修复）。
- **原生插件加载静默失败**：插件加载器对无效插件契约（如缺失 `pkg.json`）仅返回空对象而不报警，造成数小时调试时间浪费（#78301）。
- **Cron 作业特定时段失效**：MiniMax 模型在北京时间 05:00-07:30 持续返回 503 过载错误，手动触发却能成功（#85888），用户推测为调度机制问题。
- **飞书（Feishu）渠道问题**：群聊消息被接收但回复数为 0（#77666），以及 Bot 身份恢复竞态导致永久断连（#77717），多位用户持续上报。

这些反馈多集中在体验回归和渠道兼容性上，表明近期更新对高频消息场景的稳定性产生了负面影响。

## 8. 待处理积压

以下为创建时间较早且仍处于开放状态的重要 Issue 或 PR，提醒维护者关注：

| 编号 | 标题 | 创建时间 | 最新更新 | 标签 | 链接 |
|------|------|----------|----------|------|------|
| #35203 | [RFC] Multi-Agent Collaboration Enhancement | 2026-03-05 | 2026-06-01 | enhancement, P2 | [链接](https://github.com/openclaw/openclaw/issues/35203) |
| #42820 | message tool: Feishu send action polluted by poll schema | 2026-03-11 | 2026-06-01 | P1, clawsweeper:... | [链接](https://github.com/openclaw/openclaw/issues/42820) |
| #44870 | [Bug]: I have been unable to verify using the codex from the transfer station | 2026-03-13 | 2026-06-01 | bug, P2 | [链接](https://github.com/openclaw/openclaw/issues/44870) |
| #63685 | [Bug]: Cannot run gemma 4 models from google ai studio | 2026-04-09 | 2026-06-01 | bug, P2 | [链接](https://github.com/openclaw/openclaw/issues/63685) |
| #75767 | openclaw gateway restart hangs on macOS with SMB-mounted volumes | 2026-05-01 | 2026-06-01 | P2 | [链接](https://github.com/openclaw/openclaw/issues/75767) |
| #78308 | [Feature]: Channel-mediated approval for MCP tool calls | 2026-05-06 | 2026-06-01 | P2 | [链接](https://github.com/openclaw/openclaw/issues/78308) |
| #79077 | Support for Telegram bot-to-bot and guest-bot modes | 2026-05-07 | 2026-06-01 | stale | [链接](https://github.com/openclaw/openclaw/issues/79077) |
| #79552 | Android node sends node.event before websocket connect handshake completes | 2026-05-08 | 2026-06-01 | stale | [链接](https://github.com/openclaw/openclaw/issues/79552) |
| #80036 | Chrome MCP existing-session `profile=user` page tools time out |

---

## 横向生态对比

好的，以下是根据您提供的2026-06-02各项目社区动态摘要生成的横向对比分析报告。

---

### AI智能体与个人AI助手开源生态横向对比报告 — 2026-06-02

#### 1. 今日横向概览

今日，四个项目均保持活跃，但活跃度与焦点分化明显。**OpenClaw** 凭借庞大的社区规模占据绝对主导地位，当日Issue和PR处理量（463条Issue, 500条PR）远超其他项目，但积压严重，核心矛盾集中在Codex运行时迁移带来的稳定性问题。**NanoBot** 发布了v0.2.1版本，侧重于WebUI体验和工具调用细节的优化，社区讨论更偏向具体功能与成本控制。**Zeroclaw** 和 **PicoClaw** 则呈现出更聚焦的社区生态，前者今日重点修复了一系列与提供商和渠道相关的Bug，后者则在解决平台兼容性（如RISC-V）和工具安全检查误报等实际部署问题。

#### 2. 各项目活跃度对比

| 项目 | 今日Issues | 今日PRs | 今日版本发布 | 事实性备注 |
|---|---|---|---|---|
| **OpenClaw** | 463更新 (299新开/活跃, 164关闭) | 500更新 (397待合并, 103合并/关闭) | v2026.6.1-beta.1, v2026.6.1-beta.2 | 活动量最大，但积压严重，Codex迁移是核心痛点。 |
| **NanoBot** | 29更新 (4新开/活跃, 25关闭) | 31更新 (14待合并, 17合并/关闭) | v0.2.1 | 发布稳定版，侧重于WebUI体验提升。 |
| **Zeroclaw** | 36更新 | 37更新 | 无 | 积极修复Bug，涉及提供商兼容性、渠道和安全策略。 |
| **PicoClaw** | 7新 | 11更新 (5合并/关闭） | v0.2.9-nightly | 体量最小，聚焦特定平台兼容性与工具路径安全。 |

#### 3. OpenClaw 与同类对照

*   **活动量对比**：OpenClaw的社区活动量级是其他项目的10倍以上。其Issue和PR更新数量（463/500）远超NanoBot（29/31）、Zeroclaw（36/37）及PicoClaw，反映出其拥有最庞大的用户和贡献者基础。
*   **技术焦点**：OpenClaw的当前技术重点明确指向 **Codex运行时迁移带来的稳定性回归**。多个P1级Bug（如#88312、#87744）及相关回归测试Issue（#80171）均证实了这一点。而其他项目则更关注于：
    *   **NanoBot**：WebUI体验优化、工具追踪（孤立工具结果#4006）及成本控制（#4142）。
    *   **Zeroclaw**：特定提供商集成（Ollama #5962、Kimi #7022）、渠道配置（Discord白名单#6378）及安全策略（#7063）。
    *   **PicoClaw**：特定平台问题（RISC-V兼容性#2887）、工具安全检查误报（#1042）及新模型兼容性（#2939）。
*   **社区讨论面**：OpenClaw讨论最广泛，涵盖Codex稳定性、模型更新（Gemini 3.1）、架构演进（SQLite迁移）等。NanoBot讨论趋向工具链的健壮性。Zeroclaw和PicoClaw更侧重于具体的功能请求和本地化部署痛点。

#### 4. 共同出现的技术方向

*   **模型/提供商兼容性**：
    *   **涉及项目**: OpenClaw, Zeroclaw, PicoClaw
    *   **具体诉求**：
        *   **OpenClaw**: 请求将Gemini 3.1 Flash-lite升级至GA版本 (#80380)。
        *   **Zeroclaw**: 修复Kimi K2.6模型的温度参数兼容问题 (PR #7049)。
        *   **PicoClaw**: 修复Anthropic Claude Opus 4.7/4.8等模型的temperature参数兼容性，以及修复默认模型ID格式错误 (#2939, #2941, PR #2942, PR #2982)。
    *   **趋势观察**: 无论项目规模大小，确保与主流及特定模型API的兼容性是持续且普遍的挑战，尤其在模型快速迭代时。

*   **Agent消息/工具调用的健壮性**：
    *   **涉及项目**: OpenClaw, NanoBot, Zeroclaw, PicoClaw
    *   **具体诉求**：
        *   **OpenClaw**: 代理在中断后恢复时，需更干净地处理工具调用和会话绑定。
        *   **NanoBot**: 修复对话历史中孤立工具结果的问题 (#4006)。
        *   **Zeroclaw**: 修复Telegram频道可能将内部scratchpad作为回复发送的问题 (#7068)。
        *   **PicoClaw**: 修复`exec`工具对非路径参数误判为路径安全问题 (#1042)。
    *   **趋势观察**: 工具调用的稳定性、内部状态与用户输出隔离，是提升Agent体验和可信度的关键共性挑战。

*   **Agent协作与扩展**：
    *   **涉及项目**: OpenClaw, PicoClaw
    *   **具体诉求**：
        *   **OpenClaw**: 有RFC提议多代理协作增强，包括能力分析、共享黑板等 (#35203)。
        *   **PicoClaw**: 有PR提议为Agent引入内建的协作通信总线 (PR #2937)。
    *   **趋势观察**: 虽然当前并非所有项目都聚焦于此，但向更复杂的多Agent系统演进是行业共识，部分大型项目已开始规划。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|---|---|---|---|---|
| **功能侧重** | 全功能AI助手框架，覆盖CLI、多渠道、Agent运行时，正经历Codex架构大规模迁移。 | 轻量级、WebUI驱动的个人助手，强调易用性和工具调用体验。 | 高度可配置、注重安全性与企业级集成的多Agent运行时。 | 专注于边缘计算与低功耗设备的轻量级Agent。 |
| **目标用户** | 重度开发者、OEM集成商、追求完整控制和核心功能的社区。 | 个人开发者、追求快速部署和良好Web体验的用户。 | 追求稳定性、安全策略和精细权限控制的高级用户和组织。 | 嵌入式开发者、RISC-V/低功耗设备用户、追求极致轻量。 |
| **技术架构** | 复杂，包含Codex与Pi双运行时，架构正从旧版迁移。 | 简洁，AgentLoop和事件总线架构，易于理解和扩展。 | 模块化，强调渠道、提供商、技能的独立性和安全策略。 | 极简，针对资源受限环境优化。 |
| **社区关注点** | Codex迁移稳定性、架构演进、渠道兼容性。 | WebUI交互、工具追踪、成本优化。 | 提供商集成、安全策略、频道配置。 | 平台兼容性、工具路径安全、新模型支持。 |

#### 6. 社区活跃度记录

基于今日数据，将各项目活跃度分为三个层级：

*   **高活跃度**（有版本发布，Issue/PR双百+）：**OpenClaw**
*   **中等活跃度**（有版本发布，Issue/PR双数十+）：**NanoBot**, **Zeroclaw**
*   **低活跃度**（有版本发布或PR合并，但总量较小）：**PicoClaw**

#### 7. 有证据支撑的观察

1.  **架构迁移阵痛是当前主要风险**：OpenClaw今日数据中，超过70%的P1级Bug直接与Codex运行时相关（如#88312 stall, #87744 timeout, #86519 重复回复）。这表明其正在进行的大规模架构迁移对用户造成了显著影响，社区反馈以“回归”和“中断”为主。

2.  **“工具隔离”与“状态一致性”是多项目共性顽疾**：NanoBot的孤立工具结果（#4006）、Zeroclaw的内部scratchpad泄露（#7068）以及PicoClaw的工具路径误判（#1042），共同指向了Agent工具调用过程中的状态管理和信息隔离是一个普遍性难题。

3.  **渠道兼容性维护成本高**：三大项目（OpenClaw, Zeroclaw, PicoClaw）今日均有针对特定IM渠道（Telegram, QQ, 飞书, Discord, Server酱）的Bug修复或功能请求。这表明在当前阶段，为AI Agent提供稳定可靠的跨平台多IM交互能力仍需持续投入。

4.  **用户对“噪音”极度敏感**：NanoBot用户明确抱怨Cron任务“思考中”消息过多（#3064），Zeroclaw用户不满于机器人发送内部信息（#7068）。这证明在Agent与用户交互时，有效过滤内部工作流信息，只输出最终、干净的结果，是影响用户体验的关键因素。

5.  **部分长期议题存在“需求僵局”**：Zeroclaw的“Token消耗优化”（#5146）和PicoClaw的“exec工具误判”（#1042）在数周甚至数月前即被提出，至今仍处于开放或待修复状态。这表明对于高价值但实现复杂的特性，或需要回溯设计决策的问题，社区存在响应滞后或讨论僵持的情况。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-02

## 1. 今日活动概览
过去 24 小时内，NanoBot 仓库共更新 29 条 Issue（新开/活跃 4 条，关闭 25 条）以及 31 条 PR（待合并 14 条，已合并/关闭 17 条）。项目发布 v0.2.1 版本，重点改进 WebUI 工作流和工具追踪体验。社区围绕孤立工具结果、WebUI 编辑、QQ 通道等议题提交了多个功能 PR 和 Bug 报告，总体活跃度较高。

## 2. 版本发布
**v0.2.1** — 包含 84 个合并的 PR，17 位新贡献者。本次发布的核心变化是 **WebUI 成为实际工作的场所**：聊天界面更流畅、更快、更可靠；实时文件编辑以动态活动形式展示；工具调用轨迹呈现更清晰；引入新的 Agent 工作台。无特别标注的破坏性变更，建议现有用户升级体验。

→ [https://github.com/HKUDS/nanobot/releases/tag/v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1)

## 3. 项目进展（今日合并/关闭的重要 PR）
以下 PR 在过去 24 小时内被合并或关闭，推进了多项功能与修复：

| PR | 内容 | 状态 |
|---|---|---|
| [#4016](https://github.com/HKUDS/nanobot/pull/4016) | DingTalk 群聊新增 `group_user_isolation` 配置，按用户隔离 Session | 已合并 |
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | 重构 WebUI 运行时状态到事件总线，移除 AgentLoop 中的硬编码状态订阅 | 已合并 |
| [#4143](https://github.com/HKUDS/nanobot/pull/4143) | 重构 Session 保留结果，使用命名 `RetentionResult` 提升归档语义清晰度 | 已合并 |
| [#4124](https://github.com/HKUDS/nanobot/pull/4124) | 修复某些模型（mimo-v2.5, glm-5.1）以 XML 文本形式发出工具调用导致消息泄漏的 Bug | 已合并 |
| [#3126](https://github.com/HKUDS/nanobot/pull/3126) | 使 `deliver: false` 的 Cron 任务真正静默，在运行期间抑制进度/工具提示输出 | 已合并 |
| [#2482](https://github.com/HKUDS/nanobot/pull/2482) | 心跳服务跳过 LLM 调用：当 `HEARTBEAT.md` 无活跃任务时不请求模型，节省 Token | 已合并 |
| [#2435](https://github.com/HKUDS/nanobot/pull/2435) | 同样为心跳添加轻量级预检，通过正则扫描 Markdown 复选框判断活跃任务 | 已合并 |
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | 添加本地 Whisper 语音转录功能（faster-whisper），无需 API 密钥 | 已合并 |

## 4. 社区热点
- [#4006](https://github.com/HKUDS/nanobot/issues/4006) （OPEN，2 评论）
  **孤立工具结果**：用户报告在对话历史中存在 `role: "tool"` 消息的 `tool_call_id` 在前序 Assistant 消息的 `tool_calls[]` 中找不到对应项。这违反了 OpenAI/Anthropic 的规范，可能导致严格校验的 API 拒绝请求，以及轨迹渲染错误。该问题在 PR #3984 修复后仍然存在，社区正在跟进是否需要进一步修复。

- [#4142](https://github.com/HKUDS/nanobot/issues/4142) （OPEN，1 评论）
  **成本优化讨论**：用户建议针对 DeepSeek V4 Flash/Pro 等模型的缓存未命中输入 Token 进行专项优化，以减少 API 费用。讨论围绕如何使用更智能的缓存策略和模型选择来降低成本。

- [#4148](https://github.com/HKUDS/nanobot/pull/4148) （OPEN，新 PR）
  **WebUI 消息编辑功能**：允许用户点击编辑图标修改已发送的消息，重发时后端会删除旧消息及其后续内容。社区对此反响积极，认为填补了 WebUI 的基本交互缺失。

## 5. Bug 与稳定性
按严重程度排列（含今日报告及近期活跃的 Bug）：

| 严重度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **高** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 对话历史中存在孤立 tool result（tool_call_id 无对应 tool_call），影响 API 兼容性和轨迹渲染 | OPEN，讨论中，无 fix PR |
| **中** | [#4133](https://github.com/HKUDS/nanobot/issues/4133) | Agent 完成工具调用后最终文本响应未发送到 Telegram，导致对话无声终结（经 #4080 修复后仍偶发） | 已关闭（可能是重复或已修复） |
| **中** | [#4128](https://github.com/HKUDS/nanobot/issues/4128) | `retain_recent_legal_suffix` 在 else 分支下导致用户消息被重复归档，即同时出现在 archive 和 kept 中 | 已关闭（由 PR #4129 修复） |
| **低** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 使用 GPT 模型时出现“Duplicate item found with id”错误，导致 Agent 无法恢复 | 已关闭 |

## 6. 功能请求归类
过去 24 小时内用户提出的新功能需求及相关 PR：

- **自定义图片生成 Provider** ([#4132](https://github.com/HKUDS/nanobot/issues/4132))：用户希望 `generate_image` 工具能够支持 `config.json` 中自定义配置的 API（如 Agnes AI），而非仅内置 Provider。
- **WebUI 消息编辑** ([#4148](https://github.com/HKUDS/nanobot/pull/4148))：直接提供编辑历史消息的交互（已实现 PR）。
- **QQ 通道（Napcat）** ([#4146](https://github.com/HKUDS/nanobot/pull/4146))：基于 OneBot v11 的 QQ 通道，支持私聊和群聊，并提供反脆弱性和单元测试。
- **火山引擎网页搜索 Provider** ([#4141](https://github.com/HKUDS/nanobot/pull/4141))：新增 Volcengine Search 作为内置 `web_search` 选项。
- **文件系统工具开关** ([#4138](https://github.com/HKUDS/nanobot/pull/4138))：为内置文件系统工具增加 `tools.file.enable` 配置项，与 `tools.exec.enable` 一致。
- **Azure AAD 认证** ([#4126](https://github.com/HKUDS/nanobot/pull/4126))：支持 Azure OpenAI 基于身份的认证（无 API Key 场景）。
- **WebUI 语音录制与本地 ASR** ([#4122](https://github.com/HKUDS/nanobot/pull/4122))：为 WebUI 添加录音功能并集成 FunASR 本地语音识别。
- **云平台部署层** ([#4139](https://github.com/HKUDS/nanobot/pull/4139))：统一对 HuggingFace Spaces、ModelScope Studio 等云平台的一键部署支持。

## 7. 用户反馈摘要
从 Issues 评论和描述中提炼的真实用户痛点与使用场景：

- **消息回复完全失效** ([#2880](https://github.com/HKUDS/nanobot/issues/2880))：用户 `@breeze303` 反映无论发送什么消息，Agent 都返回报错，而使用 `nanobot agent` 命令行却能正常回复。尝试卸载重装、清空配置均无效，怀疑是 channel 配置或依赖问题。
- **技能管理不便** ([#1932](https://github.com/HKUDS/nanobot/issues/1932))：用户 `@Diorser` 希望技能支持禁用/启用开关而非仅能删除，以方便临时调整配置。
- **Cron 任务噪音过大** ([#3064](https://github.com/HKUDS/nanobot/issues/3064))：用户 `@kronk307` 报告 Cron 任务会发送多次“思考中”消息，最终才输出结果，造成频道混乱。PR #3126 已修复此问题。
- **心跳重复创建定时任务** ([#3028](https://github.com/HKUDS/nanobot/issues/3028))：用户 `@jermeyhu` 发现心跳机制在触发时又创建了一个新的定时任务，导致问候重复发送，且无法读取上下文。
- **对接免费 API 的需求** ([#101](https://github.com/HKUDS/nanobot/issues/101))：用户 `@LebedevIV` 希望使用免费的 Google API 或 Grok 转录服务，避免依赖 OpenRouter，但希望能跳过默认模型配置。

## 8. 待处理积压
目前无长期未响应的关键 Issue 或 PR。以下开放条目值得关注：

- [#4006](https://github.com/HKUDS/nanobot/issues/4006)（5月26日创建）— 孤立 tool result 问题，虽已有讨论但尚未有修复 PR，可能影响与新式 API 的兼容性。
- [#4142](https://github.com/HKUDS/nanobot/issues/4142)（6月1日创建）— 成本优化讨论，具备一定社区价值，建议维护者

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目 GitHub 数据生成的 2026-06-02 项目动态日报。

---

# Zeroclaw 项目动态日报 — 2026-06-02

## 1. 今日活动概览
过去24小时内，Zeroclaw 项目保持活跃，共产生 36 条 Issue 更新和 37 条 PR 更新。未发布新版本。社区讨论重点集中在 Ollama 提供商集成故障、Discord 频道配置优化以及 Gemini 模型兼容性问题上。同时，多项 Bug 修复和功能增强 PR 被合并，涉及邮件频道、Web 抓取工具和运行时稳定性等方面。值得注意的是，一个新的“Token 消耗优化”长期议题在近期重获关注，以及多项针对多机部署和节点管理的功能请求被提出。

## 2. 版本发布
无

## 3. 项目进展
今日有多项重要 PR 被合并，推动了功能和稳定性的提升：
- **邮件频道修复**: PR #6979 `fix(email): ignore blank SMTP credential overrides` 已合并，修复了空白 SMTP 凭据可能导致工作流阻塞的问题。
- **通道默认配置**: PR #6904 `feat(channels): define lean default channel bundle` 已合并，定义了精简的默认频道集，使标准构建保持轻量。
- **Web 抓取工具安全**: PR #6974 `fix(web_fetch): honor private DNS host allowlist` 已合并，修复了 `web_fetch` 工具对私有 DNS 主机白名单的忽略问题。
- **图像工具路径解析**: PR #6972 `fix(tools): resolve image_info paths through policy` 已合并，修复了 `image_info` 工具路径解析未通过安全策略的问题。
- **运行时稳定性**: PR #6983 `fix(runtime): fall back before visible stream errors` 已合并，恢复了在流错误发生时的降级重试逻辑，提升了运行时健壮性。
- **频道上下文修复**: PR #6931 `fix(channels): restore date-only channel prompt context` 已合并，还原了频道提示上下文中的日期信息，并优化了缓存效率。
- **Kimi 提供商兼容性**: PR #7049 `fix(providers): omit temperature for kimi-k2 models in compatible.rs` 已合并，修复了与 Kimi K2 系列模型的温度参数兼容性问题。

## 4. 社区热点
今日讨论热度较高的议题集中在几个关键问题和功能请求上：

- **Ollama 集成问题**: Issue #5962 `[Bug]: Ollama Provider call failed when tools are needed` 引发 6 条评论。用户报告使用 Ollama 作为提供商时，在需要调用工具的对话中会报错并阻塞后续消息。这反映了社区对于本地模型集成（特别是 Ollama）的稳定性和成熟度有较高期待。
- **Discord 频道白名单**: Issue #6378 `[Feature]: Discord Bot respond only in specific Discord channels` 同样获得 6 条评论。用户期望能像 Matrix 和 Nextcloud Talk 一样，为 Discord 频道增加 `allowed_channels` 配置项，以限制机器人只在特定频道响应。这体现了多频道集成中，细粒度权限控制是普遍需求。
    - 链接: [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)，[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)
- **Gemini 消息历史序列化错误**: Issue #6302 `[Bug]: Gemini 400 — assistant tool_call emitted as first non-system turn` 持续受到关注。该 Bug 导致在调用 Gemini 模型时，因对话历史开头的第一个非系统轮次是`assistant`（而非`user`）而被拒绝。这表明在适配不同模型提供商时，严格遵守其 API 约束至关重要。
- **Token 消耗优化**: Issue #5146 `[Feature]: Token consumption minimization via skill compilation` 在发布两个月后，于近期仍获得评论。用户提出了通过“技能编译”来大幅减少每次对话中技能文件的 Token 开销。该议题虽被标记为 `accepted`，但尚无明确的实现 PR，社区可能期望其获得更多进展。
    - 链接: [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)，[#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

- **严重 (S1 - 工作流阻塞)**:
    - [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063): 通过频道启动的代理会绕过“每代理工具允许列表”，这是严重的安全策略漏洞。
    - [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068): Telegram 频道在 Codex 代理后端下，可能会将内部的 scratchpad/工具调用脚本作为最终回复发送给用户。
- **高级 (风险高)**:
    - [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022): Kimi K2.6 模型因为 `compatible.rs` 始终发送 `0.7` 的 `temperature` 参数而失败。**已有修复 PR #7049 已合并**。
    - [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059): 频道编排器中的“默认模型提供商”凭据回退机制存在设计缺陷，与 V3 架构不兼容。**已有修复 PR #7066 已提交**。
- **中级 (风险中)**:
    - [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548): 部分频道运行时命令回复并未通过 Fluent 本地化系统，导致非英语环境下仍显示英文。
    - [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645): `SkillImprover` 和 `skill_manage` 工具仅能识别 `SKILL.toml`，对于使用 `manifest.toml` 的官方技能不兼容。

## 6. 功能请求归类
以下功能请求于今日被记录或活跃讨论：

- **性能优化**: [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) Token 消耗最小化 - 通过技能编译减少 Token 开销 (风险: 高)。
- **安全性**: [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) 渠道代理的工具白名单过滤 (风险: 高)。
- **运维与管理**:
    - [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) 守护进程节点的真实心跳追踪 (风险: 高)。
    - [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) 提供 `zeroclaw node add <url>` CLI，用于注册远程节点 (风险: 高)。
    - [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) 节点 CLI 与仪表盘的健康与管理功能 (风险: 中)。
- **用户体验**:
    - [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) Discord Bot 的频道白名单 (风险: 高)。
    - [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) 每频道的最小回复间隔限制 (风险: 高)。
    - [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) 仪表盘“更新 ZeroClaw”按钮，从 Web 界面触发更新 (风险: 高)。
- **新能力**: [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) 提议增加一个 `zeroclaw eval` 命令，用于 Agent 的评估与回放测试 (风险: 高)。**已有对应实现 PR #7067**。
- **集成**: [#6827](https://github.com/zeroclaw-labs/zeroclaw/issues/6827) 将 Jina AI 添加为新的 `web_search` 提供商。**已有对应功能 PR #6833 已合并**。

## 7. 用户反馈摘要
从今日的 Issues 评论中可以提炼出以下用户痛点与使用场景：

- **本地模型集成痛点**: 用户 `@ufukbakan` 报告了使用 Ollama 时，工具调用失败的严重问题 (#5962)。这反映出对于希望在本地运行 ZeroClaw 的用户，Ollama 集成（特别是涉及工具调用时）的可靠性和稳定性是他们关心的核心问题。
- **模型兼容性困扰**: 用户 `@RO-mix` 发现 Kimi K2.6 模型因为一个固定的默认 `temperature` 参数而完全无法使用 (#7022)。这表明模型提供商的行为差异（如数值参数的严格校验）会给集成带来预料之外的障碍，用户期望 ZeroClaw 的兼容层能更智能地处理此类差异。
- **内部信息暴露风险**: 用户 `@sbenedetto` 反馈 Telegram 机器人会发送内部 scratchpad 信息给用户 (#7068)。这是一个严重的体验和安全问题，用户期望 Agent 能够明确区分内部思考过程和面向用户的最终回答。

## 8. 待处理积压
以下是创建时间较早、状态为 `accepted` 或 `in-progress`，但可能缺乏最新进展或维护者响应的重要 Issue，提醒关注：

- [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) **Token 消耗最小化 (技能编译)** (创建于 2026-03-29): 这是一个高风险、高价值（被描述为“70% token reduction”）的长期功能。尽管被接受，但缺乏明确的实现路径或进度更新。对于 Token 成本敏感的用户，此功能至关重要。
- [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) **从 `.well-known` URI 安装技能** (创建于 2026-03-27): 此功能旨在遵循正在标准化中的 Agent Skills 发现机制。已标注 `help wanted`，但长期处于 `accepted` 状态。对于建设开放、可发现的技能生态系统非常关键。
- [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) **ZeroClaw 技能支持和用户体验跟踪 (v0.7.6)** (创建于 2026-05-01): 作为 v0.7.6 版本的技能优化跟踪议题，目前仍保持 `open` 状态。虽然 `v0.7.6` 版本可能已发布，但该议题下记录的个别功能点可能出现遗漏或进度延迟，需要维护者评估是否关闭或更新。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-02

## 1. 今日活动概览

过去24小时内，PicoClaw 项目较为活跃，共产生了7条新 Issues 和11条 PR 更新。其中，有5个 PR 被合并或关闭，推进了多项功能与修复。项目还发布了一个新的 **nightly** 版本 **v0.2.9-nightly.20260602.426046fc**。社区讨论集中在 `exec` 工具误判路径安全问题、RISC-V 平台兼容性问题、以及多个针对 Anthropic 新模型（如 `claude-opus-4-7`）的参数兼容性修复上。

## 2. 版本发布

-   **nightly: v0.2.9-nightly.20260602.426046fc**
    - 这是一个自动化构建的**测试版本**，可能不稳定，仅供测试使用。
    - 此版本包含了截至 `main` 分支的最新代码。
    - **参考链接**: [版本对比](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) [发布页面](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260602.426046fc)

## 3. 项目进展

今日共有5个 PR 被合并或关闭，标志着以下功能的完成：

-   **修复 Bedrock 模型参数兼容**：PR [#2982](https://github.com/sipeed/picoclaw/pull/2982) 修复了在 AWS Bedrock 上使用 Claude Opus 4.8 模型因 `temperature` 参数被弃用而导致的调用失败问题。
-   **增强 Cron 工具功能**：PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) 为 `cron` 工具新增了 `get` 和 `update` 操作，允许代理在修改计划任务前查看完整数据，并支持部分更新，从而避免了因查询和重建作业导致的复杂流程。
-   **支持 Server酱³ Bot 频道**：PR [#2893](https://github.com/sipeed/picoclaw/pull/2893) 被合并，为 PicoClaw 新增了与 Server酱³ 通知服务的 Bot 集成，支持轮询和 Webhook 模式。
-   **修复 macOS 符号链接路径验证**：PR [#2890](https://github.com/sipeed/picoclaw/pull/2890) 修复了在 macOS 上因 `/var` 是 `/private/var` 符号链接而导致路径验证失败的问题。
-   **优化 Skill Catalog Token 使用**：PR [#2781](https://github.com/sipeed/picoclaw/pull/2781) 优化了技能目录（skill catalog）的注入策略，不再在每一次 LLM 请求中重复发送，从而减少了 Token 消耗。

## 4. 社区热点

今日最受关注的议题是 `exec` 工具的安全检查误报问题。

-   **Issue [#1042](https://github.com/sipeed/picoclaw/pull/1042) (15 条评论)**: 用户 `@icyfire` 报告了一个 bug，指出 `exec` 工具的 `guardCommand` 方法在验证命令路径时过于粗暴。当执行如 `curl -s "wttr.in/Beijing?T"` 这类不涉及文件路径的命令时，正则匹配会错误地将参数解析为 `../../../../Beijing?T`，导致命令被误拦截并提示“路径越权”。该问题自3月份提出以来，已收到15条评论和2个点赞，说明受影响的用户较多，社区对其修复有较高诉求。
-   **Issue [#2720](https://github.com/sipeed/picoclaw/pull/2720) (7 条评论)**: 关于单例 PID 检查漏洞的问题也获得了较多讨论。用户指出当 PicoClaw 崩溃后，其 PID 文件可能被其他无关进程（如 `systemd-resolved`）复用，导致服务器启动时发生“冒名顶替”而无法启动。

## 5. Bug 与稳定性

过去24小时内报告的 Bug 按严重程度排列如下：

-   **高** `RISC-V` **平台兼容性**：Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) 报告 `.deb` 包在 RISC-V 架构上无法与 OpenAI 模型正常工作。这属于平台级兼容性问题，影响特定硬件用户。
-   **高** `PID` **进程身份校验缺陷**：Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720) 报告的单例 PID 检查只验证进程存在性，不验证进程身份，易导致崩溃循环。已有对应的修复 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 待合并。
-   **中** `exec` **工具路径检查误报**：Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) 描述的 `exec` 工具误拦截行为，严重影响了不涉及文件路径的命令执行。
-   **中** `Anthropic` **模型参数过期**：Issue [#2939](https://github.com/sipeed/picoclaw/issues/2939) 指出 `claude-opus-4-7` 模型已弃用 `temperature` 参数，发送该参数会导致 HTTP 400 错误。对应的修复 PR [#2940](https://github.com/sipeed/picoclaw/pull/2940) 已提交。
-   **低** `Anthropic` **模型 ID 格式错误**：Issue [#2941](https://github.com/sipeed/picoclaw/issues/2941) 指出默认配置使用了带点号的 `claude-sonnet-4.6`，但 Anthropic API 要求使用连字符 `claude-sonnet-4-6`，导致首次使用必定失败。修复 PR [#2942](https://github.com/sipeed/picoclaw/pull/2942) 已提交。

## 6. 功能请求归类

以下是用户明确提出的功能需求，均有相关 Pull Request 跟进：

-   **Agent 协作总线**: PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 提议为 PicoClaw 引入一个内建的 Agent 间协作通信总线，支持信箱、结构化消息和权限控制。
-   **NEAR AI Cloud 提供商**: PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) 提议增加对 NEAR AI Cloud 作为一级 OpenAI 兼容 LLM 提供商的支持。
-   **更新使用手册**: Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981) 请求更新 v0.2.9 版本的使用手册以匹配当前变化。

## 7. 用户反馈摘要

-   **痛点**: 中国用户 `@EverestSnow` 在 Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796) 中报告，在查看历史对话时，只能看到最后一次用户消息，之前的消息全部消失。他认为消息压缩应只针对大模型，而非用户看到的显示内容。
-   **使用场景**: 用户 `@icyfire` 在 Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) 中描述了使用天气技能（调用 `curl`）的场景，暴露了工具安全检查与实际应用场景的脱节。
-   **不满意**: 用户 `@LegendAlessandro-Liguori` 在 Issue [#2941](https://github.com/sipeed/picoclaw/issues/2941) 中明确指出，全新安装后首次使用因默认配置错误而失败，这是较差的第一印象。

## 8. 待处理积压

以下为长期未解决或尚未获得维护者明确回应的重要议题或 PR，提醒维护团队关注：

-   **重要 Bug**:
    -   **[#1042](https://github.com/sipeed/picoclaw/issues/1042)**: `exec` 工具误报路径安全问题（自 2026-03-04 起，已活跃3个月），影响大量工具调用场景。
    -   **[#2720](https://github.com/sipeed/picoclaw/issues/2720)**: 单例 PID 检查缺陷（自 2026-04-30 起），可能导致服务无法启动。虽有 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 修复，但尚在等待合并。
-   **待合并 PR**:
    -   **[#2942](https://github.com/sipeed/picoclaw/pull/2942)**: 修复默认 Anthropic 模型 ID 格式问题（约1周），合并后可解决新用户首次使用失败的问题。
    -   **[#2940](https://github.com/sipeed/picoclaw/pull/2940)**: 修复 `claude-opus-4-7` 的 `temperature` 参数兼容性问题（约1周），对使用此模型的用户至关重要。
    -   **[#2813](https://github.com/sipeed/picoclaw/pull/2813)**: 修复 PID 进程身份校验（近1个月），是 [#2720](https://github.com/sipeed/picoclaw/issues/2720) 的修复方案。

</details>