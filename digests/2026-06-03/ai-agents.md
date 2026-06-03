# OpenClaw 生态日报 2026-06-03

> Issues: 451 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-03 02:54 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目动态日报。

---

# OpenClaw 项目动态日报 — 2026-06-03

## 今日活动概览

过去24小时，项目活动量维持在高位，共产生 451 条 Issue 更新和 500 条 PR 更新。Issue 讨论热点集中在 `session_send` 回归性 Bug、会话状态迁移方案、以及 Windows Chat UI 的渲染问题。PR 方面，维护者正在推进多项关键修复，包括 Codex 服务端认证、会话崩溃恢复和 Telegram 频道消息渲染优化。今日无新版本发布。

## 版本发布

无

## 项目进展

今日无合并或关闭的重大 PR。以下为处于活跃推进中的关键修复 PR：

- **fix(agents): forward turn-source for embedded plugin approvals** ([#89590](https://github.com/openclaw/openclaw/pull/89590)) - 修复嵌入运行中插件审批无法正确路由回原始聊天渠道的问题。
- **fix(openai): harden Codex OAuth callback cleanup** ([#89491](https://github.com/openclaw/openclaw/pull/89491)) - 旨在修复 Codex OAuth 流中的 SSRF 策略问题，已关联 Issue [#81865](https://github.com/openclaw/openclaw/issues/81865)。
- **fix: recover crashed main sessions via lock-file detection fallback** ([#86806](https://github.com/openclaw/openclaw/pull/86806)) - 通过更健壮的锁文件检测机制，修复网关崩溃后主会话无法恢复的问题。
- **fix(telegram): silently skip empty-text sends** ([#88810](https://github.com/openclaw/openclaw/pull/88810)) - 修复 Telegram 频道因发送空文本导致消息丢失或异常的问题。

## 社区热点

过去24小时，社区讨论最热烈的议题集中在用户体验和会话管理方面：

1.  **会话状态回归 Bug** ([#52875](https://github.com/openclaw/openclaw/issues/52875)): 用户报告升级后，主代理无法联系其他代理（`Session_send gives no session found`），引起 21 条评论。该 Issue 为回归性 Bug，严重影响核心功能的可用性，目前社区正在积极反馈细节。
2.  **核心会话/转录迁移方案** ([#88838](https://github.com/openclaw/openclaw/issues/88838)): 一个关于将会话运行时状态迁移到 SQLite 的技术方案讨论，获得了 17 条评论。这反映了社区对长期性能和可靠性的关注，但也意味着当前状态管理可能已遇到瓶颈。
3.  **Cron 任务中 `thinking=none` 参数异常** ([#63918](https://github.com/openclaw/openclaw/issues/63918)): 用户发现 Cron 任务向 OpenAI 模型发送了不支持的 `thinking` 参数，导致任务失败。此问题已持续近两个月，今日仍有新讨论，表明配置逻辑存在未被完全覆盖的边缘情况。

## Bug 与稳定性

今日上报及活跃的 Bug 中，确定或疑似为回归问题的高优先级 Bug 较多，核心影响集中在会话状态丢失和消息投递失败。

**P1 级（严重）问题：**

- **会话状态回归 Bug** ([#52875](https://github.com/openclaw/openclaw/issues/52875)): 升级后主代理无法找到会话。**状态**: 待处理，`P2` 但评论最多，实际影响严重。
- **Codex 应用服务器中断** ([#88312](https://github.com/openclaw/openclaw/issues/88312)): `2026.5.27` 版本出现 Codex 回合完成中断，是此前已修复问题的回归。**状态**: 待处理，已有关联修复 PR。
- **Windows Chat UI 回归** ([#67035](https://github.com/openclaw/openclaw/issues/67035)): `2026.4.14` 后，Web UI 出现输入文字被吞、流式回复不可见等问题。**状态**: 长期待解决，有 `needs-product-decision` 标签。
- **Telegram 消息重复** ([#86519](https://github.com/openclaw/openclaw/issues/86519)): `2026.5.20` 更新后，Telegram 频道出现 2-10 次重复回复。**状态**: 降级但未完全修复，`P1`。

**P2 级（中等）问题：**

- **飞书消息投递失败** ([#87646](https://github.com/openclaw/openclaw/issues/87646), 已关闭): `v2026.5.27` 升级后，飞书频道无法发送消息。**状态**: 已关闭，表明问题已解决或有临时方案。
- **`sessions.json` 无限增长导致 OOM** ([#55334](https://github.com/openclaw/openclaw/issues/55334)): 会话文件无限制增长导致内存溢出。**状态**: 待处理，`P2` 但影响性能稳定性。
- **Slack 回复被静默丢弃** ([#80715](https://github.com/openclaw/openclaw/issues/80715)): 对话完成但消息未发送到 Slack。**状态**: 待处理，好评数较多（8个👍）。

## 功能请求归类

今日主要的功能请求集中在以下方面：

- **网络与安全**: 新增 `tools.web.fetch.allowPrivateNetwork` 配置选项，允许 agent 在显式启用后访问内网地址 ([#39604](https://github.com/openclaw/openclaw/issues/39604))。该需求获得 9 个 👍。
- **UI/UX 改进**: 建议在侧边栏的“最近会话”中添加下拉折叠功能，以优化小屏幕设备上的显示空间 ([#84216](https://github.com/openclaw/openclaw/issues/84216))。
- **插件系统增强**: 提出 `before_route_inbound_message` 钩子，用于在消息路由前进行拦截，以实现渠道桥接等高级功能 ([#81061](https://github.com/openclaw/openclaw/issues/81061))。
- **Cron任务优化**: 建议新增 `acceptSilentStop` 标志，允许不产生输出的 Cron 任务不被标记为失败 ([#76159](https://github.com/openclaw/openclaw/issues/76159))。

## 用户反馈摘要

- **升级体验不佳**: 多位用户反馈，升级到新版本后出现核心功能回归，如“找不到会话”、“消息投递失败”等，表明版本间兼容性测试存在疏漏 ([#52875](https://github.com/openclaw/openclaw/issues/52875), [#87646](https://github.com/openclaw/openclaw/issues/87646))。
- **Windows 用户痛点**: 社区对 Windows 平台上 Web Chat UI 的渲染问题反应强烈，该问题持续一个月未解决，已影响到大量 Windows 用户的日常使用体验 ([#67035](https://github.com/openclaw/openclaw/issues/67035))。
- **对会话管理稳定性的普遍关注**: 社区讨论焦点（如 Issue [#88838](https://github.com/openclaw/openclaw/issues/88838)）表明，用户对当前会话/转录状态的持久化和管理机制感到担忧，期待更健壮的解决方案。
- **对工具使用成本的担忧**: Bug [#55334](https://github.com/openclaw/openclaw/issues/55334) 中提到的 `skillsSnapshot` 重复导致 OOM 问题，反映了用户对资源消耗和运行成本的敏感。
- **特定渠道的兼容性**: Telegram 和 Slack 渠道的消息回复问题持续被报告，表明在不同消息平台上的适配和稳定性仍是需要重点关注的领域 ([#86519](https://github.com/openclaw/openclaw/issues/86519), [#80715](https://github.com/openclaw/openclaw/issues/80715))。

## 待处理积压

以下为长期未响应或处于待决策状态的重要 Issue/PR，建议维护者关注：

- **Issue**: **[Feature]: Add tools.web.fetch.allowPrivateNetwork to allow private network access** ([#39604](https://github.com/openclaw/openclaw/issues/39604)) - 社区呼声高（9 👍），涉及安全边界，标签中包含 `needs-product-decision` 和 `needs-security-review`，已搁置近三个月。
- **Issue**: **[Bug]: `apply_patch` is treated as an unknown/plugin-only tool** ([#45269](https://github.com/openclaw/openclaw/issues/45269)) - 2 月前报告的回归性 Bug，导致核心工具无法使用，带有多个待处理标签，长期未合并/关闭。
- **Issue**: **[Feature]: Add a dropdown to the recent sessions in control menu** ([#84216](https://github.com/openclaw/openclaw/issues/84216)) - 社区呼声较高（3 👍），为体验优化类需求，状态为 OPEN，无明确进展。
- **PR**: **fix(agents): bootstrap non-main models.json on skip to prevent Unknown model** ([#58373](https://github.com/openclaw/openclaw/pull/58373)) - 修复新建 agent 时潜在的模型加载失败问题，已存在两个多月，状态为 `⏳ waiting on author`，需要作者回应。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手开源生态的技术分析师，现基于您提供的2026-06-03各项目动态，为您生成横向对比分析报告。

---

### AI智能体与个人AI助手开源项目横向对比报告 — 2026-06-03

#### 1. 今日横向概览

今日各项目活动量分化明显。**OpenClaw** 以极高的Issue和PR数量维持了核心参照项目的高强度维护节奏，但社区反馈显示版本升级带来的回归性Bug是当前主要矛盾。**Zeroclaw** 发布了里程碑式的新版本 `v0.8.0-beta-2`，重点引入终端UI和multi-agent运行时，处于功能迭代的活跃期。**NanoBot** 和 **PicoClaw** 活动量相对较小，但均专注于具体技术问题（如MCP服务稳定性、会话历史显示、特定API兼容性）和功能增强（如新通道、轻量级RAG）。整体来看，社区焦点从单一功能开发转向了“稳定生产”与“差异化能力”并存的阶段。

#### 2. 各项目活跃度对比

| 项目 | 今日Issues更新 | 今日PR更新 | 今日版本发布 | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 451条 | 500条 | 无 | 活动量最高，但主要为Bug修复与维护工作。 |
| **NanoBot** | 9条 | 25条 | 无 | 活动量中等，PR合入效率高，重点在邮件通道、WebUI修复和轻量级RAG。 |
| **Zeroclaw** | 50条 | 50条 | **v0.8.0-beta-2** | 发布重大版本，社区焦点在新功能（TUI/多Agent）和Fresh Install的配置问题。 |
| **PicoClaw** | 3条 | 14条 | v0.2.9-nightly | 活动量最小，但修复响应快，专注于多模型API兼容和会话显示Bug。 |

#### 3. OpenClaw 与同类对照

- **活动量**：OpenClaw 的 Issues（451条）和 PRs（500条）更新量远超 NanoBot、Zeroclaw 和 PicoClaw，表明其作为社区核心参照项目，吸引了最多的讨论和开发贡献。
- **技术重点**：与今日无重大版本发布的其他项目不同，OpenClaw 的 PR 主要集中在 **修复回归性Bug**（如会话崩溃恢复、消息渲染、OAuth认证），反映了大型项目在快速迭代后面临的稳定性挑战。相比之下，NanoBot 和 Zeroclaw 则在积极合入新功能（邮件附件、QQ通道、TUI）。
- **社区讨论面**：OpenClaw 的社区讨论主要集中在 **影响广泛的回归Bug**（`session_send`无响应、Windows UI渲染）和 **长期架构方案**（会话状态迁移）。这与其他项目专注于 **具体功能配置**（如NanoBot的MCP权限、Zeroclaw的default_model问题）形成了鲜明对比。OpenClaw用户对“升级后核心功能失效”的反馈尤为强烈。

#### 4. 共同出现的技术方向

今日的日报中，跨项目出现了以下共同的技术方向：

- **会话/状态管理稳定性**：这是今日最突出的共同痛点。
    - **OpenClaw**：用户报告 `session_send` 回归Bug（[#52875](https://github.com/openclaw/openclaw/issues/52875)），并专门讨论会话状态迁移方案（[#88838](https://github.com/openclaw/openclaw/issues/88838)）。
    - **PicoClaw**：用户报告升级后新会话附加旧消息（[#2972](https://github.com/sipeed/picoclaw/issues/2972)），以及 WebUI 仅显示最后一条用户消息（[#2796](https://github.com/sipeed/picoclaw/issues/2796)）。
    - **Zeroclaw**：通过 PR [#6026](https://github.com/zeroclaw-labs/zeroclaw/pull/6026) 修复了日程任务会话中原始工具调用payload输出的问题。
    - **NanoBot**：计划通过轻量级RAG（[#4109](https://github.com/HKUDS/nanobot/pull/4109)）增强记忆检索，间接指向会话管理的优化。

- **特定渠道/LLM的兼容性问题**：
    - **OpenClaw**：Telegram（[#86519](https://github.com/openclaw/openclaw/issues/86519)）和 Slack（[#80715](https://github.com/openclaw/openclaw/issues/80715)）消息投递问题。
    - **NanoBot**：图片生成API与特定OpenAI兼容服务（如Agnes AI）不兼容（[#4167](https://github.com/HKUDS/nanobot/issues/4167)）。
    - **PicoClaw**：智谱GLM-5-Turbo API错误码（[#2943](https://github.com/sipeed/picoclaw/issues/2943)）、Claude Opus模型温度参数（[#2948](https://github.com/sipeed/picoclaw/pull/2948)）兼容性。
    - **Zeroclaw**：WhatsApp Web服务端协议更新（[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)）导致通信中断。

- **用户成本与资源消耗关注**：多个项目用户对资源的使用表达了关切。
    - **OpenClaw**：`sessions.json` 无限增长导致OOM（[#55334](https://github.com/openclaw/openclaw/issues/55334)）。
    - **NanoBot**：用户 `@hamb1y` 发起关于优化缓存未命中输入Token成本的讨论（[#4142](https://github.com/HKUDS/nanobot/issues/4142)）。

#### 5. 差异化定位分析

- **功能侧重**：
    - **OpenClaw**：更像一个综合性平台，覆盖了最广泛的功能场景（多渠道、插件、Cron、Codex集成），今日焦点在“修复”。**PicoClaw**也类似，但体量更小，关注点更集中在特定API和协议的兼容上。
    - **Zeroclaw**：今日最大亮点是 **终端用户界面(zerocode)** 和**multi-agent**，表明其向“开发者友好”和“复杂任务编排”方向倾斜。
    - **NanoBot**：活跃于**MCP协议集成**、**邮件/QQ等轻量化通道**和**WebUI交互优化**，显示出其对“灵活扩展”和“易用性”的侧重。

- **目标用户**：
    - **OpenClaw**：社区讨论涉及代理、渠道、插件、核心架构等全栈问题，目标用户可能覆盖从个人开发者到企业运维的广泛群体。
    - **Zeroclaw**：`v0.8.0-beta-2` 引入的TUI和针对Bubblewrap沙箱的修复，暗示其目标用户偏向于**资深开发者或需要在服务器/云环境中高效管理Agent的用户**。
    - **NanoBot**：对**Notion MCP**、**HuggingFace Spaces部署**的关注，以及对轻量级RAG和特定渠道（QQ, 邮件）的支持，表明其目标用户可能更侧重于**个人或小团队，追求快速集成和部署**。

- **技术架构**：
    - **内核语言**：OpenClaw、Zeroclaw（基于今日数据推断为Rust/Go）、NanoBot（Python）和PicoClaw（Go）在内核语言上形成了多语言生态。PicoClaw在今日修复了Go协程泄漏问题（[#2986](https://github.com/sipeed/picoclaw/pull/2986)），显示出Go语言在并发处理上的某些典型挑战。NanoBot的轻量级RAG和Dream模块重构体现了Python在AI/ML生态中的敏捷性。

#### 6. 社区活跃度记录

基于今日的Issue、PR数量和版本发布情况，活跃度分层如下：

- **高活跃度**：**OpenClaw**（极高Issue/PR数，大量社区讨论）。
- **中高活跃度**：**Zeroclaw**（中等数量Issue/PR，但有重大版本发布，社区聚焦in。
- **中等活跃度**：**NanoBot**（中等数量，但PR合入效率高，持续有新功能/通道加入）。
- **低活跃度**：**PicoClaw**（数量最少，但修复响应快，聚焦解决用户具体问题）。

#### 7. 有证据支撑的观察

1.  **回归性Bug成为大型项目的普遍挑战**：OpenClaw和PicoClaw均出现了因版本升级导致的核心功能回归问题（OpenClaw的会话查找、PicoClaw的会话历史显示），NanoBot的MCP服务随机断开（[#4168](https://github.com/HKUDS/nanobot/issues/4168)）也可能与版本迭代有关。这表明随着功能堆叠，保障版本间兼容性成为一个突出的运维和测试难点。

2.  **“会话”作为核心概念的稳定性是共同焦点**：从OpenClaw的会话丢失和迁移讨论，到PicoClaw的会话历史混乱，再到NanoBot用RAG增强记忆、Zeroclaw修复日程会话中的payload输出，所有项目都在围绕“会话”这一用户交互的核心单元进行优化和修复，暗示其底层数据模型或状态管理机制可能已接近瓶颈。

3.  **API兼容性是接入真实世界的主要障碍**：无论是PicoClaw对智谱和Claude模型的适配，NanoBot对自定义图片服务的支持，还是Zeroclaw对WhatsApp协议的适配，都指向了多模型、多渠道生态下，与外部API的兼容性是影响用户体验和平台稳定性的关键因素。

4.  **用户对运维成本和资源消耗愈发敏感**：OpenClaw的OOM问题和NanoBot对Token成本的讨论，结合Zeroclaw默认沙箱配置对Python开发者造成阻碍的反馈，表明社区用户已不满足于“能用”，而是开始关注“用得起”和“可持续运行”，项目需要在功能丰富度和资源效率之间寻找平衡。

5.  **新用户引导流程是薄弱环节**：Zeroclaw 新安装后 `default_model` 配置问题（[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)）和引导流程中Codex配置工作流阻断（[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)）是两个直接证据。OpenClaw用户反馈中的“升级体验不佳”本质上也是版本间引导不清晰的问题。这为所有项目敲响了警钟：在功能快速演进的同时，平滑的上手和升级体验至关重要。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据您提供的 NanoBot 项目数据，为您生成 2026 年 6 月 3 日的项目动态日报。

---

### **NanoBot 项目动态日报 | 2026-06-03**

**报告周期：** 2026-06-02 至 2026-06-03
**数据来源：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

#### **1. 今日活动概览**

过去 24 小时，NanoBot 项目活跃度较高，共产生 9 条 Issues 和 25 条 Pull Requests。其中，Issues 方面新开/活跃 6 条，关闭 3 条；PR 方面合并/关闭 17 条，另有 8 条处于待合并状态。今日没有新版本发布，社区焦点集中于 **MCP（模型上下文协议）服务的稳定性与权限优化**、**WebUI 的视觉与路由修复**，以及 **邮件通道的功能增强**。

---

#### **2. 版本发布**

*无。*

---

#### **3. 项目进展**

过去 24 小时，项目合并/关闭了多项重要 PR，主要涉及功能增强与 BUG 修复：

- **邮件通道功能增强**：多项 PR 已合并，为邮件通道增加了文件附件支持，提升了实用性。
    - 相关 PR：[#4162](https://github.com/HKUDS/nanobot/pull/4162), [#4160](https://github.com/HKUDS/nanobot/pull/4160)
- **新增 QQ 通道**：合并了由 `@chengyongru` 提交的 Napcat (QQ) 通道支持，基于 OneBot v11 协议，扩展了项目的通讯渠道。
    - 相关 PR：[#4146](https://github.com/HKUDS/nanobot/pull/4146)
- **WebUI 稳定性与体验修复**：修复了 WebUI 在刷新后无法保持路由、复制功能在非安全上下文下失效、启动时请求可能永久挂起等问题，以及侧边栏“聊天”分组的排序逻辑。
    - 相关 PR：[#4150](https://github.com/HKUDS/nanobot/pull/4150), [#4149](https://github.com/HKUDS/nanobot/pull/4149), [#4157](https://github.com/HKUDS/nanobot/pull/4157), [#4151](https://github.com/HKUDS/nanobot/pull/4151)
- **Dream 模块重构**：合并了重构 Dream 模块的 PR，用更简洁的基于定时任务和 `process_direct` 的流程替换了旧的两阶段设计。
    - 相关 PR：[#3990](https://github.com/HKUDS/nanobot/pull/3990)
- **轻量级 RAG 实现**：合并了轻量级 RAG（检索增强生成）功能的 PR，用于增强记忆检索能力。
    - 相关 PR：[#4109](https://github.com/HKUDS/nanobot/pull/4109)
- **WebUI 网关重构**：合并了拆分 WebUI 网关依赖的 PR，将 HTTP 路由从 WebSocketChannel 中解耦。
    - 相关 PR：[#4115](https://github.com/HKUDS/nanobot/pull/4115)

---

#### **4. 社区热点**

- **MCP 服务稳定性（[#4168](https://github.com/HKUDS/nanobot/issues/4168)）**：用户报告 MCP 服务器会在一段随机时间后无法连接，报错 `McpError: Session terminated`。这引发了社区对 MCP 长连接稳定性的关注。目前已有讨论但尚未分配或关闭。

- **子代理访问 MCP 服务（[#4166](https://github.com/HKUDS/nanobot/issues/4166)）**：用户请求允许通过 `spawn()` 方法创建的子代理（subagent）访问 MCP 服务提供的工具，认为这限制了复杂任务的完成能力。该需求获得了关注，但尚无 PR 关联。

- **图片生成 API 兼容性优化（[#4167](https://github.com/HKUDS/nanobot/issues/4167)）**：用户报告在使用不支持 `response_format` 参数的 OpenAI 兼容 API（如 Agnes AI）时，`generate_image` 工具会报错。此问题是另一个相关功能请求 ([#4132](https://github.com/HKUDS/nanobot/issues/4132)) 的直接体现，说明社区对自定义 API 的兼容性有较高期待。

---

#### **5. Bug 与稳定性**

当日报告的 Bug 主要集中在兼容性、功能崩溃和并发问题上：

- **严重（已有 Fix PR）**：
    - **`read_file` 工具离线死循环（[#4153](https://github.com/HKUDS/nanobot/issues/4153)）**：当 `read_file` 的结果被持久化到磁盘后，再次读取时会失败。此 Bug 已有由 `@jiehaoZ` 提交的修复 PR [#4155](https://github.com/HKUDS/nanobot/pull/4155)，并已被合并。
    - **WebUI 下 `uv tool` 安装 CLI App 失败（[#4158](https://github.com/HKUDS/nanobot/issues/4158)）**：当 NanoBot 通过 `uv tool` 安装和启动时，从 WebUI 安装 pip 包会失败。此 Bug 已有修复 PR [#4164](https://github.com/HKUDS/nanobot/pull/4164)（待合并）和一个自动修复 PR [#4159](https://github.com/HKUDS/nanobot/pull/4159)（已关闭）。

- **中等（需要关注）**：
    - **图片生成 API 兼容性（[#4167](https://github.com/HKUDS/nanobot/issues/4167)）**：与不兼容的 OpenAI 类 API 交互时功能故障。
    - **MCP 服务随机断开（[#4168](https://github.com/HKUDS/nanobot/issues/4168)）**：MCP 会话在随机时间后非正常终止。

- **已修复（已关闭）**：
    - **`MemoryStore` 并发写入 Bug（[#4081](https://github.com/HKUDS/nanobot/issues/4081)）**：在并发写入场景下，`append_history()` 方法可能分配重复的游标。该问题已被关闭。

---

#### **6. 功能请求归类**

用户今日提出的核心功能需求，主要围绕以下几点：

- **MCP 权限扩展**：
    - **子代理访问 MCP 服务（[#4166](https://github.com/HKUDS/nanobot/issues/4166)）**：希望配置选项允许由主代理创建的子代理使用 MCP 工具。
- **API 兼容性与自定义 Provider**：
    - **支持自定义图片生成供应商（[#4132](https://github.com/HKUDS/nanobot/issues/4132)，[#4167](https://github.com/HKUDS/nanobot/issues/4167)）**：用户希望 `generate_image` 工具能支持在 `config.json` 中自定义配置的 API 供应商，如 Agnes AI。
- **WebUI 交互增强**：
    - **对话复刻（Fork from here）（[#4163](https://github.com/HKUDS/nanobot/pull/4163)）**：一个待合并的 PR，为 WebUI 用户消息增加了“从此处复刻”功能，允许用户基于历史消息创建新会话。
- **部署与平台支持**：
    - **云平台部署层（[#4139](https://github.com/HKUDS/nanobot/pull/4139)）**：一个待合并的 PR，提议增加对 HuggingFace Spaces 和 ModelScope Studio 等云平台的一键部署支持。

---

#### **7. 用户反馈摘要**

从 Issues 评论中提炼的用户真实声音：

- **使用场景痛点**：用户在使用 Notion MCP 连接时遇到困难（[#1168](https://github.com/HKUDS/nanobot/issues/1168)），指出其核查 API 多次无果，而 Claude 可以顺利连接，暗示了连接兼容性或配置引导上的问题。
- **成本关注**：用户 `@hamb1y` 发起了关于优化缓存未命中（cache-miss）输入 Token 成本的讨论（[#4142](https://github.com/HKUDS/nanobot/issues/4142)），表明社区对使用成本有实际考量，尤其针对 DeepSeek 等新模型。
- **体验反馈**：用户因邮件通道未跳过进度消息而收到空邮件（[#4165](https://github.com/HKUDS/nanobot/pull/4165)），该问题虽已被修复，但暴露了工具调用流程中消息处理的细节问题。

---

#### **8. 待处理积压**

- **Notion MCP 连接失败（[#1168](https://github.com/HKUDS/nanobot/issues/1168)）**：该 Issue 从 2026-02-25 已开启，至今已有三个多月。虽有用户跟帖表示遇到相似问题，但尚未被官方标记或关闭。该项目可能影响新用户体验，建议维护者关注。
- **云平台部署层 PR（[#4139](https://github.com/HKUDS/nanobot/pull/4139)）**：该 PR 已开启 2 天，拥有较大的代码变更量（+851 行），旨在解决云平台部署的痛点。目前尚未合并也未收到维护者的明确反馈，建议加快审阅节奏。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，以下是为您生成的 Zeroclaw 项目动态日报。

---

# Zeroclaw 项目动态日报 — 2026-06-03

## 1. 今日活动概览

过去 24 小时，Zeroclaw 项目保持了较高的活跃度。共处理了 **50 条 Issues** 和 **50 条 PRs**，其中关闭了大量已解决的问题和合并的代码请求，显示项目维护者在持续推进代码清理和稳定性工作。此外，项目发布了 **v0.8.0-beta-2** 版本，这是一个里程碑式的大版本，重点引入了全新的终端用户界面 `zerocode` 和 `multi-agent` 运行时。社区讨论主要集中在解决 `fresh install` 后的默认模型配置问题，以及针对各种特定场景（如WhatsApp Web协议更新、Bubblewrap sandbox兼容性）的Bug修复。

## 2. 版本发布

- **v0.8.0-beta-2**: 这是自 v0.7.5 以来最大的版本发布。其核心功能是 **`zerocode`**，一个全新的、功能齐全的终端用户界面（TUI），允许用户在不离开终端的情况下运行和操作 Agent。此版本还包含了 `multi-agent` 运行时。该版本没有提及明确的破坏性变更或需要用户特别注意的迁移事项。

## 3. 项目进展

今日有大量 PR 被合并或关闭，反映了多个领域的进展：

- **技能系统 (Skills) 优化与修复**:
    - **技能审计范围界定**：[PR #5952](https://github.com/zeroclaw-labs/zeroclaw/pull/5952) 已合并，将技能审计限制为结构性检查，将命令内容安全交予执行时的 Shell 策略处理，减少审计误报。
    - **技能超时配置**：[PR #6054](https://github.com/zeroclaw-labs/zeroclaw/pull/6054) 修复了 `SKILL.toml` 中的 `timeout_secs` 配置项被忽略的问题。
    - **Python 技能文档**：[PR #6057](https://github.com/zeroclaw-labs/zeroclaw/pull/6057) 已合并，提供了 Python 技能快速入门文档，回应了社区对沙箱配置模式的需求。
    - **`allow_scripts` 传递修复**：[PR #5981](https://github.com/zeroclaw-labs/zeroclaw/pull/5981) 修复了 `ReadSkillTool` 未正确传递 `allow_scripts` 配置的问题。
- **渠道 (Channels) 与 UI 改进**:
    - **Web UI 稳定性**：[PR #7077](https://github.com/zeroclaw-labs/zeroclaw/pull/7077) 修复了浏览器自动翻译功能导致 React 管理的聊天页面崩溃的问题。
    - **Bluesky UI 修复**：[PR #7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123) 修复了在处理多字节字符时，文本截断可能引发 panic 的问题。
- **日程任务 (Cron) 稳定性**：[PR #6026](https://github.com/zeroclaw-labs/zeroclaw/pull/6026) 修复了 cron agent 运行时可能输出原始工具调用 payload 以及投递失败仍被标记为成功的问题。

## 4. 社区热点

- **[Bug]: default_model issue on fresh install** ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123))
    - **热度**: 18 条评论
    - **分析**: 这是今日讨论最热烈的 Issue。用户在新安装环境中报告，当 Ollama 服务运行在另一台机器上时，设置向导完成后 Agent 无法正常工作，报错信息显示 `default_model` 配置可能为空。该问题已被关闭，说明维护团队已经定位并处理此问题，但具体解决方案未在摘要中体现。这表明新用户的上手体验是当前维护者关注的重点。

## 5. Bug 与稳定性

**严重程度: S1 - 工作流阻塞**
- **Default Shell Sandbox 配置** ([#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)): 默认沙箱配置（alpine，无网络，只读根文件系统）阻止了大多数真实的 Python 技能模式。已在 v0.8.0-beta-2 或相关文档中解决。
- **WhatsApp Web 协议** ([#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)): 配对成功但消息无法流动，原因在于 WhatsApp Web 服务端协议更新。已被关闭。
- **仪表盘/WebSocket 绕过审批管理器** ([#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)): 通过 WebUI 交互时，受监督的工具审批提示从未显示给用户。已被关闭。
- **Bubblewrap 兼容性** ([#6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878)): 在 Fedora 43 上，Bubblewrap 沙箱因找不到 `/lib64`，无法链接库而启动失败。已被关闭。

**严重程度: S2 - 功能降级**
- **Deploy Agent 忽略全局 Skills 配置** ([#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155)): Delegate agents 始终使用全量技能注入模式，忽略 `compact` 或更精简的配置。仍处于 `OPEN` 状态。
- **上下文压缩器** ([#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)): 上下文压缩会丢弃 `reasoning_content` 字段，影响需要此字段的 providers。已被关闭。

**关键修复 (已有 Fix PR)**
- **WhatsApp Web 协议更新** ([#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)): 已关闭。
- **WASM 插件路径不一致** ([#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254)): 安装路径与运行时扫描路径不一致，导致插件对 Agent 不可见。仍处于 `OPEN` 状态。
- **Skills 安装 panic** ([#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)): `zeroclaw skills install clawhub:*` 命令会立即 panic。已被关闭。

## 6. 功能请求归类

- **技能安装标准化**: [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) 请求支持从 `.well-known` URI 安装技能，以实现技能分发标准化。仍处于 `OPEN` 状态。
- **终端用户界面 (TUI)**: [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) 是 `zerocode` TUI 功能的跟踪 issue，描述了其当前状态和未来计划（如富文本渲染、图片支持）。该功能已在 v0.8.0-beta-2 版本中发布。
- **ACP 协议扩展**: [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) 请求为 diff/文件提案消息类型扩展 ACP 协议，以支持 TUI 和 Web 仪表盘展示差异对比。其相关功能已部分实现。
- **文档需求**: [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) 请求增加关于“如何编写和添加技能”的文档。该 Issue 已被关闭，说明已有对应文档产出。

## 7. 用户反馈摘要

- **新用户上手问题**: 在 `[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)` 中，用户反馈了在特定网络环境（Ollama 服务位于容器内）下，`zeroclaw agent` 命令因 `default_model` 问题而报错。这反映出项目在复杂网络配置下的新用户引导流程仍有优化空间。
- **Python 开发者困境**: 在 `[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)` 中，用户详细描述了默认沙箱环境与真实 Python 开发工作流之间的矛盾，这阻碍了基于 Python 的金融分析技能（如 `InvestorClaw`）的开发。该问题已通过文档和配置调整得到解决。
- **WhatsApp 用户痛点**: 在 `[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)` 中，用户报告了因 WhatsApp Web 服务端协议升级导致的通信中断。这凸显了依赖第三方服务的渠道可能面临的稳定性挑战。
- **DeepSeek 提供商反馈**: 在 `[#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)` 中，用户反馈在使用 DeepSeek 等要求 `reasoning_content` 的 provider 时，上下文压缩导致内容丢失，影响了模型推理的连续性。

## 8. 待处理积压

- **[Bug]: Delegate agents ignore [skills].prompt_injection_mode** ([ #5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155)): 这个从 3 月底就存在的严重问题依然 `OPEN`。Delegate agents 始终使用全量技能注入模式，无论全局配置如何，这会占用大量 token。该 Issue 被标记为 `p1`、`status:in-progress` 和 `status:accepted`，表明项目已确认并正在处理，但长期未合并。
- **[Bug]: Onboarding: choosing OpenAI Codex prompts for OpenAI API key** ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)): 新用户引导流程中，选择 OpenAI Codex 时会被要求输入 OpenAI API 密钥，导致工作流阻塞。仍处于 `OPEN` 状态。
- **[Feature]: Installing skills from `.well-known` URI** ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)): 这是一个重要的技能生态标准化特性，被标记为 `help wanted` 且已接受，但已等待超过两个月，仍然 `OPEN`。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-06-03）

## 1. 今日活动概览

过去 24 小时内，PicoClaw 项目共有 **3 条 Issue 更新**（2 条开放，1 条关闭）和 **14 条 Pull Request 更新**（6 条已合并/关闭，8 条待合并）。项目发布了 **1 个 nightly 版本**（v0.2.9-nightly.20260603）。社区活跃度较高，主要集中在会话历史修复、智谱 API 兼容性适配、WebSocket 协议扩展以及工具调用消息过滤等方向。

## 2. 版本发布

**nightly 版本**
- **版本号**：`v0.2.9-nightly.20260603.a502aa7f`
- **类型**：自动构建，可能不稳定
- **变更日志**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- **说明**：该版本为 nightly 自动构建，未标注破坏性变更或迁移注意事项，建议谨慎使用。

## 3. 项目进展

今日合并或关闭的 Pull Request 共 6 条，列举如下：

- **#2994 docs(skill): self describing Picoclaw agent skill**（已关闭）
  新增 `picoclaw-agent` 技能文档，作为 Agent 行为操作指南。
  https://github.com/sipeed/picoclaw/pull/2994

- **#2991 fix(agent): retry transient LLM HTTP errors using provider error classifier**（已关闭）
  改进 LLM 请求重试机制，识别 OpenRouter/OpenAI 兼容的 500 错误并触发重试/回退。
  https://github.com/sipeed/picoclaw/pull/2991

- **#2986 fix(tools): add Stop() to SessionManager to prevent goroutine leak**（已关闭）
  修复 SessionManager 后台清理协程无法停止导致的 goroutine 泄漏问题。
  https://github.com/sipeed/picoclaw/pull/2986

- **#2989 fix(providers): add Zhipu API error code 1210 to format error patterns**（已关闭）
  修复微信渠道发送图片至智谱 GLM-5-Turbo 时因错误码 1210 未被识别而无法回退的问题。
  https://github.com/sipeed/picoclaw/pull/2989

- **#2239 modify docker compose with privileged**（已关闭）
  修改 Docker Compose 配置，添加特权模式支持。
  https://github.com/sipeed/picoclaw/pull/2239

- **#2993 docs(skill): self describing Picoclaw agent skill**（已关闭）
  与 #2994 类似，另一份 Agent 技能文档提交（已关闭，可能重复或合并）。
  https://github.com/sipeed/picoclaw/pull/2993

## 4. 社区热点

**最活跃 Issue**
- **#2404 [Feature] Add in config to send streaming HTTP request**
  获得 10 条评论、1 个 👍，创建于 2026-04-07，已标记 stale。用户希望增加 `"streaming": true` 配置项以支持流式 HTTP 请求（类似 OpenAI Python 客户端）。该需求讨论热烈但长期未实现。
  https://github.com/sipeed/picoclaw/issues/2404

**新开高关注 Issue**
- **#2984 [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients**
  创建于 2026-06-02，获得 1 个 👍。外部客户端需要确定性的“回合完成”信号，目前只能通过事件流推断。
  https://github.com/sipeed/picoclaw/issues/2984

**高活跃 PR（今日合并）**
- **#2991 fix(agent): retry transient LLM HTTP errors** 在合并后获得社区关注，解决 OpenRouter 等平台 HTTP 500 错误的恢复能力。
  https://github.com/sipeed/picoclaw/pull/2991

## 5. Bug 与稳定性

以下按严重程度排列，多数已有对应修复 PR：

| 严重程度 | Issue / PR | 问题描述 | 状态 |
|----------|------------|----------|------|
| 高 | #2943 (已关闭) | 微信渠道发送图片触发智谱 GLM-5-Turbo API error 1210（参数错误），导致请求失败无法回退 | 已修复（PR #2989） |
| 高 | #2972（未出现在最新列表，但 PR #2992 关联） | 升级 v0.2.9 后 Web UI 新会话附加旧消息，历史数据混乱 | 已提交修复（PR #2992） |
| 中 | #2796（参见 PR #2990） | Web UI 只能看到会话中最后一条用户消息，无法查看完整历史 | 已提交修复（PR #2990） |
| 中 | #2958（参见 PR #2987） | 活跃流式会话期间，`tool_calls` 消息被错误过滤丢弃 | 已提交修复（PR #2987） |
| 中 | #2968（参见 PR #2985、#2988） | `/context` 命令始终显示固定压缩阈值，未使用 `summarize_token_percent` 配置 | 已提交修复（PR #2985、#2988） |

此外，PR #2948 和 #2951 分别修复了 Claude Opus 4-7 模型的温度参数弃用问题和 OpenAI 原生搜索 API 的 `web_search_preview` 类型不兼容问题（均为 stale 状态，尚未合并）。

## 6. 功能请求归类

- **流式 HTTP 请求**（#2404）
  用户请求在配置中添加 `"streaming": true`，以便向后端 LLM 发送流式请求。目前无对应 PR，仍为开放 enhancement。

- **WebSocket 回合完成信号**（#2984）
  新增请求：为 Pico 协议 WebSocket 客户端提供明确的“回合完成”信号，避免客户端依赖推测。无对应 PR。

- **Agent 技能自描述文档**（#2994 / #2993）
  已通过 PR 添加 `picoclaw-agent` 技能文档，作为 Agent 操作指南，属于文档类功能增强。

## 7. 用户反馈摘要

- **会话历史显示问题**：用户反馈升级后新会话自动附加旧消息（#2972），以及 Web UI 只能显示最后一条用户消息（#2796）。这两项已在同一天得到修复，社区响应迅速。
- **智谱 API 兼容性**：用户报告微信发送图片时智谱 GLM-5-Turbo 返回 1210 错误，且未触发回退（#2943）。该问题已通过错误分类器扩展修复。
- **Claude Opus 4-7 模型兼容**：用户发现此类模型不再接受 `temperature` 参数，发送将返回错误（对应 PR #2948，待合并）。
- **OpenAI 原生搜索兼容**：用户发现 OpenAI 接口不支持 `web_search_preview` 类型，需改用 `function` 类型（PR #2951，待合并）。

## 8. 待处理积压

以下 Issue / PR 长期未响应或已标记 stale，建议维护者关注：

| 类型 | 编号 | 描述 | 最后更新 | 备注 |
|------|------|------|----------|------|
| Issue | #2404 | 支持流式 HTTP 请求配置（enhancement） | 2026-06-02 | 10 条评论，已久未合并 |
| PR | #2951 | 使用 function 类型修复 web_search 兼容性 | 2026-06-02 | stale 状态，无评论 |
| PR | #2948 | 为 Claude Opus 4-7 跳过 temperature 参数 | 2026-06-02 | stale 状态，无评论 |
| PR | #2945 | 新增调试跟踪查看器 picoclaw-tracer | 2026-06-02 | stale 状态，无评论 |

以上 PR 均属功能性改进或 bug 修复，建议维护者进行 review 合并或反馈。

</details>