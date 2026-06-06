# OpenClaw 生态日报 2026-06-06

> Issues: 468 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-06 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 2026-06-06

## 1. 今日活动概览

过去24小时内，OpenClaw 仓库共更新 **468 条 Issue**（其中新开/活跃 340 条，关闭 128 条），**500 条 Pull Request**（其中待合并 373 条，已合并/关闭 127 条）。无新版本发布。社区讨论集中在 **多起升级后的回归问题**（Coding Agent 完全无输出、控制面高延迟、GPT-5.4/5.5 推理错误）以及 **分层上下文加载、MCP 工具调用审批**等长期功能需求上。仅一例 PR 被合并关闭，其余待合并 PR 仍在审查中。

## 2. 版本发布

无

## 3. 项目进展

今日 **仅有 1 个 PR 被合并/关闭**：

- **`#90607`** fix(voice-call): track Twilio streams after connect（已关闭，自动合并）
  修复语音通话中 Twilio 媒体流连接跟踪问题，使呼叫状态仅在媒体流实际连接后标记为活跃，避免因过早标记导致队列管理异常。
  [链接](https://github.com/openclaw/openclaw/pull/90607)

其余 373 个待合并 PR 中，部分已进入维护者审查阶段，例如：

- `#90328` Expose model picker agent runtimes（展现模型运行时代理的 UI 选择器）
- `#86036` Fix Control UI CJK IME composition（修复中文输入法合成问题）
- `#90748` fix(memory): resolve adapter default model in plain status identity check（修复 memory status 显示空白的问题）

## 4. 社区热点

以下 Issues 在过去 24 小时内评论最活跃，反映出社区高度关注的问题：

### #22438 **[OPEN] feat: Tiered bootstrap file loading for progressive context control** (17 评论)
用户提出分层引导文件加载机制，允许按需加载不同层级的文件以节省 Token 预算。主要争议点在于实现复杂度与配置灵活性之间的平衡。
[链接](https://github.com/openclaw/openclaw/issues/22438)

### #62505 **[OPEN] [Bug]: Coding Agent never completes anything (worked in 2026.4.2 and earlier)** (14 评论)
一位依赖 Coding Agent 的深度用户报告：2026.4.2 之后版本中的 Coding Agent 不再产出实际代码，只输出模糊状态更新和道歉。该问题被标记为 **P1 regression**，社区急盼修复。
[链接](https://github.com/openclaw/openclaw/issues/62505)

### #76562 **[CLOSED] High CPU, extreme control-plane RPC latency, and unstable polling after upgrade** (13 评论)
用户从 2026.4.24 升级到 4.29/5.2 后遭遇 CPU 100%、控制面响应延迟飙升、轮询不稳定。该问题已被视为严重回归并关闭，但未明确说明修复版本。
[链接](https://github.com/openclaw/openclaw/issues/76562)

### #78308 **[OPEN] [Feature]: Channel-mediated approval for MCP tool calls (consent envelope)** (12 评论)
要求将现有的针对 shell 执行的“/approve”审批通道扩展至 MCP 工具调用，允许用户在执行破坏性操作前进行确认。评论中安全诉求突出。
[链接](https://github.com/openclaw/openclaw/issues/78308)

### #90083 **[OPEN] [Bug]: 2026.6.1 OpenAI ChatGPT Responses transport fails with invalid_provider_content_type for gpt-5.4/gpt-5.5** (12 评论)
升级到 2026.6.1 后，OpenAI/ChatGPT Responses 推理链路对 gpt-5.4/5.5 模型返回 `invalid_provider_content_type` 错误，导致所有依赖这些模型的用户服务中断。
[链接](https://github.com/openclaw/openclaw/issues/90083)

## 5. Bug 与稳定性

今日报告的 Bug 中以 **P1 回归** 为主，多个升级后功能完全失效。以下按严重性排列（均无对应修复 PR 提交，除注明已关闭的以外）：

| # | 优先级 | 问题摘要 | 状态 | 关联 PR |
|---|--------|----------|------|---------|
| 62505 | P1 | Coding Agent 完全无输出（回归至 2026.4.2 前） | OPEN | 无 |
| 90083 | P1 | OpenAI ChatGPT Responses 传输因 `invalid_provider_content_type` 失败 | OPEN | 无 |
| 86215 | P1 | Codex OAuth 刷新失败后代理长时间卡死，无明确告警 | OPEN | 无 |
| 87756 | P1 | prompt 启动的 Lobster 工作流在 /tools/invoke 挂起 | OPEN | 无 |
| 72031 | P1 | Bedrock `image` 工具在 aws-sdk 认证模式下因 `requireApiKey` 失败 | OPEN | #72092（待审查） |
| 90466 | P2 | memory-core dreaming 会话语料包含已删除路径，叙述阶段写入无效回退 | OPEN | 无 |
| 76562 | P1 | 升级后高 CPU、控制面延迟（已关闭，疑似修复） | CLOSED | 未公开 |

**特别关注**：`#62505` 和 `#90083` 直接影响了核心推理与模型调用能力，且无修复 PR 进入队列，建议维护者优先排查。

## 6. 功能请求归类

以下为今日讨论较多的未实现功能请求，属于用户明确提出的新能力：

- **分层 Bootstrap 文件加载** (#22438)：按需加载上下文文件，减少 Token 浪费。评论数最多（17），涉及全部会话类型。
- **MCP 工具调用审批通道** (#78308)：为 MCP 工具增加 `/approve` 机制，提升安全性。
- **Per-Agent 记忆 Wiki 隔离** (#63829)：每个代理可拥有独立的知识文库，避免多代理场景下敏感信息污染。
- **减少工具 Schema Token 开销** (#14785)：建议通过按需加载等方式降低每次会话 3500 固定 Token 消耗。
- **保证最后 N 条原始消息在上下文中不丢失** (#58818)：要求会话重置或压缩后仍保持原始消息可见。
- **Session 时长/Token 消耗上限配置** (#64463)：设置 session.maxDurationMinutes 和 session.maxTokensPerSession。

这些请求大多仍处于 `needs-maintainer-review` 或 `needs-product-decision` 状态，尚未进入开发阶段。

## 7. 用户反馈摘要

从 Issues 评论中提取的真实用户声音：

> “I have an agent setup specifically for coding… worked for weeks and now just doesn’t do **_anything_ ** apart from vague status updates and then apologies.”
> — #62505，用户表达对 Coding Agent 完全失效的强烈挫折感，并说明该问题在多个此前版本正常工作。

> “After upgrading from 2026.4.24 to 2026.4.29 / 2026.5.2, the gateway exhibits severe performance regressions… CPU pinned near 100%, control-plane RPC latency from 2ms to 15s.”
> — #76562，用户详细描述了升级后系统几乎不可用的状态，并提供了复现环境。

> “Upgrading from 2026.5.28 to 2026.6.1 silently wiped 44 of 45 cron jobs during the SQLite migration.”
> — #90072（已关闭），用户数据丢失但无原文备份提示，引发对迁移脚本安全性的质疑。

> “The ‘Connect’ button is inactive when operator offline — Android onboarding stuck.”
> — #61005，新用户首次配置被阻塞，反馈离线状态下无法完成初始设置，影响首次体验。

> “In a Slack DM running through a container sandbox, inbound attachments fail with placeholder-only turn.”
> — #63905，使用容器沙箱的 Slack 用户无法正常处理文件附件，导致会话一直产生占位符回复。

## 8. 待处理积压

以下 Issue/PR 创建时间较早但长期未获得维护者响应或修复，建议重点关注：

| # | 创建日期 | 标题 | 优先级 | 最后更新 |
|---|----------|------|--------|----------|
| 14785 | 2026-02-12 | Reduce tool schema token overhead (~3,500 tok/session) | P2 | 2026-06-05 |
| 37446 | 2026-03-06 | Sub-agent timeout recovery creates duplicate API posts | P2 | 2026-06-05 |
| 43015 | 2026-03-11 | message.send schema overexposes poll/components/modal | P1 | 2026-06-05 |
| 45269 | 2026-03-13 | `apply_patch` treated as unknown/plugin-only tool | P2 | 2026-06-05 |
| 61009 | 2026-04-04 | docs/tools/exec says host=node override allowed but runtime rejects | P2 | 2026-06-05 |
| 62288 | 2026-04-07 | Browser: prefer managed openclaw lane; existing session attach brittle | P1 | 2026-06-05 |
| 62322 | 2026-04-07 | Recovery chain inconsistency after aborted runs | P2 | 2026-06-05 |

这些积压问题涉及性能、正确性、安全性等多个维度，且部分已有用户复现路径和初步分析，复现成本较低，希望维护团队能安排人力跟进。

---

## 横向生态对比

好的，作为专注于AI智能体与个人AI助手开源生态的资深技术分析师，以下是基于您提供的2026-06-06各项目社区动态摘要，生成的横向对比分析报告。

---

### AI智能体与个人AI助手开源项目横向对比日报 | 2026-06-06

**报告周期**：2026-06-05 至 2026-06-06

---

#### 1. 今日横向概览

今日，四个开源项目社区均保持高度活跃，但呈现出截然不同的发展态势。**OpenClaw** 在高社区活动量下，正遭遇严重的大版本回归问题，Coding Agent等核心功能失效，维护者修复压力巨大。**NanoBot** 与 **Zeroclaw** 则处于积极的“功能扩张”阶段，前者重点修复SDK集成稳定性并完善技能系统，后者通过大量PR高速引入新渠道、插件和模型提供商。**PicoClaw** 作为轻量级方案，专注于小而精的Bug修复和依赖更新，社区讨论量虽少但闭环效率高。

#### 2. 各项目活跃度对比

| 项目名称 | 今日 Issues 更新 | 今日 PR 更新 | 今日版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 468 (新开/活跃 340, 关闭 128) | 500 (待合并 373, 已合并/关闭 127) | 无 | 社区热度最高，但处于**高修复压力**下，大量P1回归问题待解决，合并率极低（0.2%）。 |
| **NanoBot** | 11 (新开 6, 关闭 5) | 28 (待合并 17, 已合并/关闭 11) | 无 | 活动量适中，**修复与功能推进均衡**，对用户反馈响应较快，多个Bug已有对应修复PR。 |
| **Zeroclaw** | 50 (新开/活跃 44, 关闭 6) | 50 (待合并 36, 已合并/关闭 14) | 无 | 活动量极高，**以功能扩展为主**，大量新渠道和插件PR被提交，社区讨论集中在架构RFC。 |
| **PicoClaw** | 6 (新开 2, 关闭 4) | 22 (待合并 2, 已合并/关闭 20) | **有** (nightly) | **小而精、高闭环**。合并/关闭率高达90.9%，修复节奏快，并发布了自动夜间构建版本。 |

#### 3. OpenClaw 与同类对照

- **活动量与合并效率**: OpenClaw 的 Issues/PR 数量级远超其他项目，但其极低的合并率 (0.2%) 与其他项目形成鲜明对比。这暴露出OpenClaw在面对大量社区反馈，尤其是回归问题时，维护团队的响应和修复能力存在瓶颈。NanoBot 和 PicoClaw 则展现了更高的沟通与修复效率。
- **技术重点**: OpenClaw 的技术重点被**回归问题**所主导，关注点集中在 `Coding Agent 失效`、`GPT-5.x 兼容性` 和 `高CPU负载` 等严重稳定性问题上。其他项目则未报告此类大规模回归，其技术重点更多在于**功能扩展**（如 Zeroclaw 的新渠道、NanoBot 的 `/skill` 命令）和 **小规模 Bug 修复**。
- **社区讨论面**: OpenClaw 的社区讨论充满“紧迫感”，用户报告的是影响正常使用的“灾难性”问题，情绪激烈。而 Zeroclaw 的讨论更具“前瞻性”，围绕架构 RFC、安全策略（如高危命令确认）和长期功能需求展开，社区处于参与设计的阶段。

#### 4. 共同出现的技术方向

今日数据中，多个项目共同关注了以下技术方向：

1.  **MCP (Model Context Protocol) 工具调用与安全**:
    - **OpenClaw**: 提出了为 MCP 工具调用增加 `/approve` 审批通道的功能请求 (`#78308`)。
    - **NanoBot**: 用户在 Issue `#4211` 中报告了 SDK 退出时 MCP 连接未正确关闭导致崩溃的 Bug，已有修复 PR。
    - **Zeroclaw**: 通过 `#7229` PR 为 Web UI 增加了 MCP 管理标签，方便用户配置。
    - **结论**: 随着多代理和工具链的复杂化，MCP 的**稳定性**、**安全性**和**易管理性**已成为所有项目的共同技术课题。

2.  **安全与权限控制**:
    - **OpenClaw**: 提出 MCP 工具调用审批 (`#78308`)。
    - **Zeroclaw**: 提出高危 Shell 命令的“每次执行确认”层级 (`#7155`) 和可插拔安全提供者接口 (`#7142`)。
    - **PicoClaw**: 修复了 `exec` 工具路径安全检查误杀合法命令的问题 (`#1042`)，侧面反映了安全策略的精细化需求。
    - **结论**: 在追求自动化和功能增强的同时，精细化的、用户可控的安全机制是当前社区的一致诉求。

3.  **渠道与消息路由**:
    - **OpenClaw**: 未明确提及。
    - **NanoBot**: 修复了微信和 Telegram 渠道的私信配对问题 (`#4197`)。
    - **Zeroclaw**: 大规模扩展渠道支持，如 SMS（Twilio 等）、社交（Mastodon 等）、Twitch 聊天 (`#7265`, `#7270`, `#7275`)。同时探讨统一输出路由模型 (`#6969`)。
    - **PicoClaw**: 修复了 OneBot 适配器在群聊中使用私人API的 Bug (`#3009`)。
    - **结论**: 多平台、多场景的渠道接入是个人AI助手项目的基础能力，Zeroclaw 在此方面的投入最为激进。

4.  **工作流与代理治理**:
    - **OpenClaw**: 用户报告 `Coding Agent` 完全失效 (`#62505`)。
    - **Zeroclaw**: 用户提出 `Work Lanes` 和看板自动化RFC来优化治理流程 (`#6808`)。
    - **PicoClaw**: 报告了 Evolution 功能持续消耗 Token 的问题，暗示后台进程管理可能不完善 (`#3012`)。
    - **结论**: 代理的稳定性、可管理性和资源消耗是普遍痛点，但各项目治理的抽象层级不同（从修复具体Agent到优化整体工作流）。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全功能AI智能体平台，强调**复杂工作流**、**深度推理**与**企业级能力**。 | **个人AI助手**，强调**易用性**、**桌面端体验**和**SDK集成**。 | **下一代AI平台**，强调**高可扩展性**、**插件化渠道**和**架构创新**。 | **嵌入式/轻量级AI助手**，强调**低资源占用**和**快速集成**（如QQ频道）。 |
| **目标用户** | 高级开发者、企业用户、需要构建复杂代理的团队。 | 桌面端个人用户、开发者（SDK集成场景）。 | 创新开发者、社区贡献者、希望探索前沿架构的用户。 | 硬件厂商（如Sipeed）、对成本敏感、需要轻量化解决方案的用户。 |
| **技术架构** | 大型、模块化、高度可配置，但带来升级风险和维护复杂度。 | 追求稳定性，注重SDK和桌面端技术栈的迭代。采用**依赖变更谨慎**的态度。 | 拥抱 Schema v3、WASM、OIDC 等新技术，架构演进速度快，但稳定性尚需验证。 | 技术栈相对传统和稳定，修复效率高，但功能范围有限。 |

#### 6. 社区活跃度记录

基于今日数据，各项目活跃度可作如下分层：

- **超高活跃，高压环境**: **OpenClaw**。社区反馈量最大，但面临严重的回归问题，修复积压严重，处于“救火”状态。
- **稳定活跃，均衡发展**: **NanoBot** 与 **Zeroclaw**。两者都有大量的社区贡献和讨论，但在“修复问题”与“扩展功能”上侧重不同。Zeroclaw 的功能扩展欲望更强。今日暂不做成熟度评分。
- **低活跃，高闭环**: **PicoClaw**。社区规模相对较小，但Issue/PR的关闭效率极高，社区沟通和修复流程成熟，迭代节奏稳健。

#### 7. 有证据支撑的观察

1.  **版本升级风险是当前最大痛点**：OpenClaw 今日多个 P1 回归（Coding Agent 失效、GPT-5.x 错误、高负载）均由版本升级直接引发。这强烈警示采用高迭代频率的全功能平台时，需要更完善的回归测试和渐进式升级策略。

2.  **“合并危机”信号清晰**：OpenClaw 高达 373 个待合并 PR 与仅 1 个被合并的事实，形成一个明确的危机信号，表明维护者审查能力严重跟不上社区贡献速度。这可能导致优秀贡献者流失和项目活力下降。

3.  **架构“重量级”与“灵活性”之争显现**：OpenClaw 对分层上下文、Token 开销等问题的讨论，Zeroclaw 对轻量级核心、可插拔安全层的 RFC，PicoClaw 的轻量化定位，共同指向一个核心矛盾：如何在提供强大功能的同时，不增加过度的系统复杂度和资源消耗。

4.  **Zeroclaw 成为“功能扩张”先锋**：Zeroclaw 今日提交了涵盖SMS、社交、Twitch等大量新渠道的PR，其在连接外部系统方面的能力正在快速超越其他项目。但其渠道数量的增多，未来也可能带来类似OpenClaw的稳定性挑战。

5.  **PicoClaw 定位最具区分度**：在 OpenClaw、NanoBot、Zeroclaw 都面向通用计算平台时，PicoClaw 通过嵌入式（Sipeed）和特定渠道（OneBot）的定位，服务了有明确资源约束和特定生态需求的细分市场，且修复效率在本日报中表现最优。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NanoBot 项目数据，以下是为您生成的 2026-06-06 项目动态日报。

---

### NanoBot 项目动态日报 | 2026-06-06

**日报作者：AI 智能体与个人 AI 助手领域开源项目分析师**

---

#### 1. 今日活动概览

今日项目社区活跃度依然很高，共产生 11 条 Issue 更新和 28 条 PR 更新。其中，Issues 方面有 6 个新开了问题，5 个被关闭；PR 方面则有多达 17 个处于待合并状态，11 个已被合并或关闭。引人注目的是，今日没有新版本发布，这表明社区的开发焦点目前集中在功能完善、Bug 修复和内部架构优化上。新提交的 PR 和 Issues 主要围绕**桌面端体验优化**、**SDK 稳定性修复**、**新功能请求**和**代码质量改进**展开。

#### 2. 版本发布

- **无**

#### 3. 项目进展

今日合并或关闭了多项重要 PR，推进了项目在多个方面的进展：

- **桌面端稳定性修复**：`#4210` [已关闭] 由 @chengyongru 提交的 PR，修复了桌面端重启后 token 和 WebSocket 回放间隙的问题，提升了桌面应用的健壮性。
- **新增 /skill 命令**：`#3968` [已关闭] 由 @Endeavour-Yuan 提交的 PR 被合并。该 PR 新增了 `/skill` 内置斜杠命令，用于列出所有启用的技能，解决了用户无法发现可用技能的问题 (关联 Issue `#3959`)。
- **渠道兼容性修复**：`#4197` [已关闭] 由 @chengyongru 提交的 PR，修复了微信 (Weixin) 和 Telegram 渠道的私信配对问题，确保了被禁止的私信发送者不会触发不必要的后台操作。
- **代码质量与文档**：`#4195` [开放] 和 `#4177` [开放] 等 PR 也在持续演进中，前者打磨桌面端的 UI/UX，后者则致力于优化初学者的引导文档。

#### 4. 社区热点

今日的社区讨论热点主要集中在以下几个方面：

1.  **Github Copilot 登录问题** (`#2573`)：这是今日最受关注的 Issue，获得了 9 个 👍。用户 @cheanus 反馈在使用 `nanobot provider login github-copilot` 命令时，由于 `openai` 库替代了 `litellm` 后出现新 Bug，导致 OAuth 登录失败。这暴露了近期依赖库变更带来的兼容性问题，引起了社区用户的广泛共鸣。
2.  **SDK 使用崩溃问题** (`#4211`, PR `#4216`)：用户 @pblocz 报告了使用 SDK 嵌入 NanoBot 时，由于 `stdio` MCP 连接未正确关闭，导致程序退出时抛出 `RuntimeError`。此问题直接关系到开发者集成 NanoBot 的稳定性，并且立即有 PR `#4216` 提交修复，体现了社区维护者对反馈的快速响应。
3.  **“记住但会忘”的历史记忆机制** (`#4212`)：用户 @joaoinacio 提出了一个非常深入且具有前瞻性的 Issue，探讨了 NanoBot 的长时记忆机制中，如何防止被修正过的、未确认的推理被反复注入到系统提示中，从而固化为“事实”。这引发了关于对话历史和事实性之间平衡的技术讨论。

#### 5. Bug 与稳定性

今日报告了多个 Bug，按严重程度排列如下：

- **严重**：
    - **SDK 退出时崩溃** (`#4211`)：
        - **描述**：通过 `asyncio.run()` 和 `Nanobot` SDK 运行后，程序退出时因 MCP 连接未清理而崩溃。
        - **状态**：已有对应修复 PR `#4216` [开放]。
    - **会话消息全部丢失** (`#4203`)：
        - **描述**：`find_legal_message_start` 函数在处理“孤立的工具结果”时逻辑缺陷，可能导致用户在浏览器中刷新后，**所有消息被丢弃**。
        - **状态**：已有对应修复 PR `#4215` [开放]。
- **中等**：
    - **浏览器刷新后用户消息丢失** (`#4200`)：
        - **描述**：WebUI 在刷新后，之前的对话内容可能丢失。
        - **状态**：已关闭 (可能已修复或标记为重复/暂不处理)。
    - **获取模型列表时缺少 API 版本参数** (`#4204`)：
        - **描述**：部分 Azure 风格的 API 网关需要 `?api-version=` 参数，但现有配置不支持，导致 404 错误。
        - **状态**：已有对应修复 PR `#4204` [开放]。
- **低风险/功能性**：
    - **/skill 命令列出了禁用的技能** (`#3959`)：已通过 PR `#3968` 修复。
    - **无法使用火山引擎的图片生成模型** (`#4196`)：已被标记为重复。

#### 6. 功能请求归类

今日用户提出的功能需求，已经形成明确证据的包括：

- **更灵活的图片生成供应商支持**：
    - **Issue `#4196`** [已关闭/重复] ：请求支持火山引擎 (Volcengine) 的图片生成功能。
    - **Issue `#4132`** [已关闭] ：请求支持自定义图片生成供应商 (如 Agnes AI)。
- **增强子代理 (Subagent) 的容错能力**：
    - **Issue `#4198`** [开放]：建议允许用户通过配置文件调整子代理在工具调用出错后的行为 (即 `fail_on_tool_error`)，赋予子代理重试或调整的机会。
- **桌面端体验增强**：
    - **PR `#4195`** [开放]：为桌面端 Shell 和 WebUI 进行 UI/UX 打磨，并增加文件预览、技能、自动化等 API 网关。
- **新增搜索供应商**：
    - **PR `#4213`** [开放]：由社区成员 @erikmackinnon 提交，为项目增加了 Exa 网络搜索供应商。

#### 7. 用户反馈摘要

从今日的 Issues 和 PR 评论中可以提炼出以下真实用户反馈：

- **痛点**：@cheanus 在 `#2573` 中遭遇的 Github Copilot 登录失败，以及 @pblocz 在 `#4211` 中遇到的 SDK 退出崩溃，都直接影响了用户对 NanoBot 核心功能和集成能力的正常使用，反映了软件变更可能带来的意外影响。
- **使用场景**：用户 @erikmackinnon 主动提交 PR `#4213` 以增加 Exa 搜索，这一行为本身就明确指向了社区用户对**特定工具供应商**的依赖和使用需求，推动了项目的实用化扩展。
- **建设性意见**：用户 @joaoinacio 在 `#4212` 中提出的关于长时记忆机制的讨论，展示了对 AI 对话系统深层次问题的思考，并非简单的“修复 Bug”，而是希望项目在核心逻辑上更严谨、更智能。

#### 8. 待处理积压

以下为需要项目维护者关注的长期未解决或重要但尚在推进中的 Issue / PR：

- **`#1946`** [开放]：一个在 `main` 分支上出现的 Matrix 测试报错问题，自 2026-03-13 提出以来，长时间未得到解决，可能影响 CI/CD 管线的稳定性或新功能的开发。
- **`#1408` / `#1284`** [开放]：这两个 PR 都旨在为项目添加 CI 工作流和代码质量检查，但分别处于自 2026-03-02 和 2026-02-27 以来长期开放的状态。持续的 CI 建设对于维护大型开源项目的代码质量和贡献者体验至关重要，提醒维护者关注。
- **`#3992`** [开放]：这是一个功能较为复杂的 PR，旨在实现**跨代理实例的消息总线**。其复杂性和对新架构的引入可能导致了审查周期较长，需要维护者投入时间进行评估和指导。
- **`#4198`** [开放]：关于子代理容错的配置需求，虽然今日才提出，但直接关系到代理工作流的鲁棒性，值得维护者认真考虑和反馈。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 Zeroclaw 项目 2026-06-06 动态日报。

---

## Zeroclaw 项目动态日报 | 2026-06-06

### 今日活动概览

过去24小时内，项目社区活跃度极高，共产生50条Issue更新和50条PR更新。Issue方面，新开和活跃讨论共44条，同时有6个问题被关闭。PR方面，有36个合并请求待处理，14个已被合并或关闭。虽然没有新版本发布，但多个重量级的“功能请求”和“RFC”讨论持续进行，同时有大量新功能PR被提交，特别是在渠道集成和Web UI管理方面。

### 项目进展

今日没有合并或关闭的重大PR，但社区提交了多项关键的功能实现和修复，展示了项目的快速迭代态势。

*   **新的渠道和插件支持**: 大量新渠道和插件通过PR被添加。
    *   **SMS 渠道支持**: 新增了 Twilio, Plivo, Telnyx, Sinch 和 Vonage 五个SMS渠道的Schema v3实现。 (#7265)
    *   **社交/聊天渠道**: 新增 Mastodon, Rocket.Chat, Zulip, Lemmy 等社交/聊天渠道的支持。 (#7270)
    *   **Twitch 聊天**: 增加了Twitch聊天频道作为IRC渠道的适配器。 (#7275)
    *   **Shazam WASM 插件**: 添加了Shazam音乐识别WASM插件作为参考实现。 (#7277)

*   **核心功能与可观测性增强**:
    *   **结构化可观测性**: 一个大型PR (#7233) 提交了对可观测性系统的全面增强，包括丰富事件上下文、OpenTelemetry (OTel) 链路追踪关联和桥接重构，以解决现有的可观测性缺口。 (#7232)
    *   **MCP 和插件管理UI**: 一个大型PR (#7229) 为Web UI增加了MCP、技能、插件和提供商的管理标签，旨在减少手动配置文件编辑。 (#7229)
    *   **新提供商支持**: 新增了7个兼容OpenAI的模型提供商（如Morph, GitHub Models, Upstage等）。 (#7260)

*   **Bug 修复**:
    *   **会话突变修复**: 修复了ACP会话被删除后仍可恢复的Bug，现在会正确标记已杀死状态。 (#7258)
    *   **工具调用解析**: 修复了因HTML/代码载荷中未转义双引号导致的工具调用JSON解析失败问题。 (#7244)
    *   **配置 Bug 修复**:
        *   修复了Quickstart表单中提供商别名字段被硬编码的问题。 (#7240)
        *   修复了Web UI中 `paired_tokens` 漂移检测的误报问题，并使ReloadBanner可关闭。 (#7247)
        *   修复了配置文件中嵌套对象/数组的密钥未正确脱敏的问题。 (#7261)
    *   **文本截断修复**: 修复了在BlueSky、LinkedIn等渠道中，因在多字节字符边界处按字节截断文本导致的程序崩溃。 (#7123)

### 社区热点

今日最活跃的讨论主要围绕几个关键的RFC和功能请求，反映了社区对架构演进、安全性和开发者体验的高度关注。

1.  **工作流与治理架构**:
    *   #6808 **RFC: Work Lanes, Board Automation, and Label Cleanup**: 以9条评论成为今日最热门讨论。该RFC提出了通过轻量级PR车道和看板自动化来优化工作流，以减少维护者手动管理成本。摘要指出这是一个旨在“让工作更容易路由，而无需维护者维持另一个手动系统”的治理RFC。
        *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)

2.  **输出路由模型与安全**:
    *   #6969 **RFC: unified output routing model**: 获得7条评论，讨论如何让用户和代理能够精细控制消息的交付方式和位置，包括基于用户指令和持久化偏好。这表明用户对输出灵活性有强烈需求。
        *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)
    *   #7155 **RFC: Add a per-execution confirmation tier for high-risk shell commands**: 获得4条评论。提议引入一个中间安全层，要求高危Shell命令每次执行都需手动确认，并支持像Claude Code那样基于模式的策略。这反映了社区对工程安全性的持续关注。
        *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
    *   #7142 和 #7141: 这两个由 `@singlerider` 提交的安全架构相关的RFC（分别讨论可插拔安全提供者接口和OIDC认证支持），都获得了4条评论，表明安全架构的演进是社区关注焦点。
        *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)
        *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)

### Bug 与稳定性

今日报告的Bug主要集中在配置文件管理和渠道信任问题，但社区已经迅速提交了多个修复PR。

*   **严重 (S1/S2)**:
    *   (S2) #7059 **[Bug]: excise "default model provider" credential/URL fallback from channel orchestrator**: 报告称频道编排器中的“默认模型提供商”凭据回退机制与V3架构冲突，可能导致安全或行为异常。目前尚未有直接修复PR。
        *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7059)

*   **中/低风险修复**:
    *   **ACP 会话突变**: (#7258) 修复了一个Bug，即管理员的“杀死会话”操作因未标记墓碑记录，导致后续请求可能静默复活该会话。已提交修复PR。
    *   **UTF-8 截断崩溃**: (#7123) 修复了多字节字符（如CJK文字）导致的程序崩溃。已提交修复PR。
    *   **Quickstart 配置问题**: (#7240) 修复了新用户无法编辑提供商别名的Bug。
    *   **配置脱敏问题**: (#7261) 修复了嵌套对象/数组中的密钥在配置读取时未脱敏的问题。

### 功能请求归类

用户提出的新功能请求主要围绕架构扩展、安全性和开发者体验。

*   **架构与可扩展性**
    *   [#6969] RFC: unified output routing model (per-peer modality preference + agent send_via tool) [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)
    *   [#6165] RFC: Prefer a lighter ZeroClaw core through external integrations [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
    *   [#6293] RFC: Air-gapped execution mode with companion daemon over unix socket (enclave support) [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)

*   **安全性与权限**
    *   [#7155] RFC: Add a per-execution confirmation tier for high-risk shell commands [link](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
    *   [#7142] [Feature]: Expose the security enforcement layer as a pluggable provider interface [link](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)
    *   [#7141] [Feature]: OIDC Authentication Provider support for the RPC/WSS transport [link](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)
    *   [#6914] feat: enforce allowed_tools / denied_tools in main agent loop [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)
    *   [#6915] feat: skill-scoped tool activation (temporary elevation during skill execution) [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)
    *   [#6916] feat: process-memory limits on shell/skill_tool subprocess execution [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)

*   **开发者体验 (DX)**
    *   [#5907] RFC: Opt-in LSP support for ZeroCode coding workflows [link](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)
    *   [#6279] [Release]: Improve Release tag milestone triage selection criteria [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6279)
    *   [#6714] [Feature]: Remove remote-markdown-link block from skill audit [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)

### 用户反馈摘要

*   **关于“默认凭据”的隐患**: 用户 `@singlerider` 在 #7059 中指出，现有的“默认模型提供商”凭据回退机制构成了安全隐患，因为它绕过了V3架构显式的引用模型，可能导致凭据泄露或错误使用场景。
*   **对安全确认层级的文根**: 用户 `@NiuBlibing` 在 #7155 中提到，当前Shell命令的“允许/拒绝”二元选项不够精细，期望有一个“每次执行都需确认”的中间状态，以便在灵活性和安全性之间取得平衡。
*   **代码回滚的恢复诉求**: 用户 `@Audacity88` 在 #6074 中报告了一个大型的线性化丢失问题，并持续跟踪了153个因回滚而丢失的提交。这反映了对代码历史完整性和恢复工作的长期关注。

### 待处理积压

以下为一些长期未解决或关键的重要Issue，提醒维护者和社区关注。

*   #5601 **[Feature]: Add subscription-native OAuth support**: (2026-04-10 创建, 6条评论, `status:blocked`) 请求为Ollama Cloud等四个提供商增加OAuth登录支持。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)
*   #6293 **RFC: Air-gapped execution mode with companion daemon**: (2026-05-03 创建, 3条评论, `status:blocked`, `needs-maintainer-review`) 一个关于实现离线执行模式的架构RFC。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)
*   #5907 **RFC: Opt-in LSP support**: (2026-04-19 创建, 4条评论, `status:blocked`) 请求为编码工作流添加LSP支持以减少幻觉。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)
*   #5908 **[Feature]: GitHub Actions CI/CD Container Builds**: (2026-04-19 创建, 2条评论, `status:blocked`) 请求为Debian容器镜像建立自动化CI/CD管线。
    *   [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5908)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，以下是根据您提供的 PicoClaw (github.com/sipeed/picoclaw) 项目数据生成的 2026-06-06 项目动态日报。

---

## PicoClaw 项目动态日报 | 2026-06-06

### 1. 今日活动概览

过去 24 小时内，PicoClaw 项目更新活跃，主要集中于 Bug 修复和依赖更新。共计处理 6 个 Issues，其中关闭 4 个，新增 2 个。PR 方面，共有 22 个更新，其中 20 个已合并或关闭，2 个仍在开放中，合并/关闭率高达 90.9%。此外，项目发布了 `nightly` 版本的自动构建，以确保最新代码的可用性。修复重点为 OneBot 适配器、Agent 订阅模块和频道配置的类型断言安全问题，以及技能创建文档的更新。

### 2. 版本发布

- **nightly: v0.2.9-nightly.20260606.89ee8f1b**
  - **说明**：这是一个自动化的夜间构建版本，基于 `main` 分支最新代码。该版本包含了过去 24 小时合并的所有修复和改进，但可能不稳定。建议核心开发者和测试人员在隔离环境中使用。
  - **变更加载**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

### 3. 项目进展

今日合并的 PR 主要聚焦于修复已知 Bug 和提升代码健壮性：

- **OneBot 适配器修复**：`#3009` (由 【@chengzhichao-xydt】 提交) 修复了群聊回复错误使用 `send_private_msg` 的问题，确保了群聊 API 调用的正确性。
- **代码健壮性加固**：`#3010` 和 `#3011` (均由 【@chengzhichao-xydt】 提交) 解决了在频道配置类型断言和 Agent 订阅卸载中的潜在 panic 问题，提升了系统稳定性。
- **文档与配置同步**：`#3013` (由 【@shenjiecode】 提交) 更新了 `skill-creator` 的技能文档，移除了缺失的脚本引用，替换为与当前项目结构兼容的说明。
- **上下文信息展示优化**：`#2985` (由 【@chengzhichao-xydt】 提交) 修复了 `/context` 命令仅显示压缩阈值的问题，现在同时展示“归纳”与“压缩”两种阈值，改善了用户体验。

### 4. 社区热点

- **#2964 [OPEN] Feat/image input compression**：该 PR 提议为 PicoClaw 的视觉管道添加可配置的入站图像压缩功能。虽然创建至今已有些时日，但仍在维护中，反映了社区对图像处理效率提升的需求。
- **#3012 [OPEN] [BUG] 启用 Evolution 功能后每分钟持续消耗 Token**：这是今日新开的 Issue，由用户 【@xpader】 报告。该问题指出，当开启 Evolution 功能后，系统会持续消耗 Token。这引发了社区对于资源优化和后台任务机制的关注。目前已有 1 条评论，暂未分配或标记为待修复。

### 5. Bug 与稳定性

1. **严重：`toChannelHashes` 和 `UnsubscribeEvents` 函数中的类型断言 panic (已修复)**
   - **Issue**: `#3010` (已通过 PR 修复)、`#3011` (已通过 PR 修复) 和 `#3009` (已通过 PR 修复)
   - **描述**: 当频道配置格式异常或 Agent 内部状态不一致时，这些函数会由于未进行安全类型断言而直接 panic，导致服务崩溃。
   - **状态**: 已在 `#3010`, `#3011` 和 `#3009` 中修复并合并。

2. **中等：OneBot 群聊回复使用错误 API (已修复)**
   - **Issue**: `#3002` (已关闭)
   - **描述**: 群聊回复错误使用了 `send_private_msg` 并误将群号当作 `user_id`，导致 NapCat 等客户端报错。
   - **状态**: 已在 `#3009` 中修复。

3. **中等：`/context` 命令显示不完整 (已修复)**
   - **Issue**: `#2968` (已关闭)
   - **描述**: `/context` 命令始终显示 `Compress at: 76800 tokens`，只展示了强制压缩阈值，而未显示用户配置的软触发“归纳”阈值，造成用户困惑。
   - **状态**: 已通过 `#2985` 修复。

4. **低：Evolution 功能持续消耗 Token (待处理)**
   - **Issue**: `#3012` (新建)
   - **描述**: 启用 Evolution 功能后，系统会周期性消耗 Token，用户怀疑存在非预期行为。

### 6. 功能请求归类

- **图像处理优化**：
  - `#2964 [OPEN]`：提议为视觉管道增加可配置的入站图像压缩功能，旨在优化 Token 消耗和提升处理效率。
- **底层库依赖更新**：多个 PR (如 `#2919`, `#2922`, `#2924`, `#2927`) 由 Dependabot 提交，用于更新 Go 和前端依赖。其中 `#2962` 将 Anthropic SDK 从 `v1.26.0` 大幅升级至 `v1.46.0`，可能带来新功能和性能改进。
- **模型供应商支持增强**：
  - `#2915 (已合并)` 为 MiMo 模型供应商添加了通用模型列表 (`CommonModels`)，包括支持多模态的 `mimo-v2.5` 和仅文本的 `mimo-v2.5-pro`，以便 WebUI 能推荐正确的模型类型。

### 7. 用户反馈摘要

- **`exec` 工具路径安全检查误杀**：用户在 `#1042` (已关闭) 中报告，`exec` 工具的正则路径校验过于简单，导致 `curl wttr.in/Beijing` 等不涉及文件系统操作的命令被误判为路径穿越并阻止。这反映了安全机制与用户实用场景之间的矛盾。
- **技能创建文档不完善**：用户在 `#652` 中反馈 `skill-creator` 的指引文件指向了缺失的脚本，导致无法直接运行。该问题在 `#3013` 的 PR 中得到了修正，维护者移除了未发布的脚本引用。
- **群聊回复问题**：用户 `#3002` 的报告直接点明了 OneBot 适配器的一个具体错误点（`send_private_msg` 与 `send_group_msg` 混用），并且得到了快速修复，体现了良好的社区反馈闭环。

### 8. 待处理积压

- **#652 [OPEN] [Task] Check correction of workspace skills/ skill-creator**：创建于 2026-02-22，长期未关闭。虽然 #3013 解决了文档脚本缺失的问题，但此 Issue 要求全面审计 `skill-creator`，可能仍有待处理的子任务未被关闭。
- **#2551 [OPEN] [refactor] Standardize channel identification**：创建于 2026-04-16，这是一个重要的重构 PR，旨在解耦频道名称与供应商类型，以实现同一供应商的多个实例。该 PR 已标记为“stale”，可能需要维护者关注其状态，决定是推进、关闭还是请求作者更新。

</details>