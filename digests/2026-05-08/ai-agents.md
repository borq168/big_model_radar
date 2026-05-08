# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-08 02:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 OpenClaw 项目数据，我为您生成了 2026-05-08 的项目动态日报。

---

### OpenClaw 项目动态日报 | 2026-05-08

**数据周期：** 2026-05-07 至 2026-05-08

---

#### 1. 今日活动概览

过去24小时内，OpenClaw 项目社区活跃度极高，共产生约500条 Issue 更新和500条 PR 更新。项目发布了 v2026.5.7 版本，专注于提升 ClawHub 插件发布流程的稳健性。在社区讨论中，关于“`openai-codex/*` 模型引用因更新被错误重写”和“网关因事件循环饥饿频繁断开连接”等问题引发了大量关注。同时，用户对“掩码密钥”和安全模型的需求持续升温。

#### 2. 版本发布

- **发布版本：** [v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)
- **主要更新内容：** 本次为修复性版本，主要针对 ClawHub 插件发布流程进行了增强。
    - **重试机制：** 增加了对 ClawHub CLI 依赖安装失败的自动重试功能，以应对临时性网络问题。
    - **发布健壮性：** 即使单一预览单元出现非确定性故障（flake），也能保证其他通过预览的插件正常发布。
    - **发布后验证：** 在发布后自动验证 ClawHub 上每个期望的包版本，以加快维护版本的恢复速度，并降低发布时遇到意外的可能性。

#### 3. 项目进展

今日共有 147 个 PR 被合并或关闭，以下为几个关键进展：

- **文档与国际化：**
    - [PR #79159](https://github.com/openclaw/openclaw/pull/79159) 合并，在文档导航中新增了专门的“ClawHub”选项卡。
    - [PR #79016](https://github.com/openclaw/openclaw/pull/79016) 合并，为 CLI 向导添加了简体中文（zh-CN）支持。
    - [PR #78994](https://github.com/openclaw/openclaw/pull/78994) 合并，修复了中文词库中不准确的翻译并补充了缺失条目。

- **Bug 修复：**
    - [PR #79078](https://github.com/openclaw/openclaw/pull/79078) (开启)：修复了 `cron` 任务在 `delivery.mode` 为 `"none"` 时报 `incomplete turn detected` 误报的问题。
    - [PR #79151](https://github.com/openclaw/openclaw/pull/79151) (开启)：改进了 Codex 应用服务器的默认权限设置，当配置文件未指定时，默认为“监护者”模式以增强安全性。

- **新功能：**
    - [PR #78317](https://github.com/openclaw/openclaw/pull/78317) (开启)：为 iMessage 插件增加了通过 `imsg` JSON-RPC 协议支持私有 API 的能力，以支持 Tapbacks、回复、编辑等高级功能。
    - [PR #78583](https://github.com/openclaw/openclaw/pull/78583) (开启)：为 World ID AgentKit 增加了人工在环批准（HITL）功能，可用于保护特定的 agent 工具调用。

#### 4. 社区热点

以下 Issues 在今日获得了大量关注和讨论：

- **[#78407] `openclaw doctor --fix` 重写模型引用导致的锁定问题：**
    - **链接：** [Issue #78407](https://github.com/openclaw/openclaw/issues/78407)
    - **热度：** 16 条评论，3 个 👍
    - **诉求：** 用户报告从 v2026.5.4 更新到 v2026.5.5 后，`openclaw doctor --fix` 命令将配置文件中的 `openai-codex/*` 模型引用重写为 `openai/*`，导致使用 ChatGPT-OAuth 的用户无法正常使用。社区对自动迁移功能的“副作用”感到担忧，希望提供预览或回滚机制。**（状态：已关闭，说明已有修复或处理方案）**

- **[#78402] 网关因工具调用卡住导致 WebSocket 反复断开：**
    - **链接：** [Issue #78402](https://github.com/openclaw/openclaw/issues/78402)
    - **热度：** 11 条评论，2 个 👍
    - **诉求：** 升级到 v2026.5.5 后，本地网关在某个工具调用卡住后引发事件循环饥饿，导致 WebSocket 连接反复断开。此问题严重影响用户体验，被社区标记为回归（Regression）。**（状态：已关闭，表明已修复或定位到原因。）**

- **[#10659] 请求“掩码密钥”系统以保护 API Key：**
    - **链接：** [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)
    - **热度：** 12 条评论，4 个 👍
    - **诉求：** 用户提出希望引入“掩码密钥”（Masked Secrets）系统，让 agent 可以使用 API key 但无法直接查看，以防止在提示注入攻击中泄露凭证。该问题已存在三个月，今日再次获得关注，表明用户对安全性的关切日益增长。

#### 5. Bug 与稳定性

今日处理了大量 Bug 报告，主要集中在回归问题和稳定性方面。

- **严重/阻断性 Bug：**
    - **[#78572] Discord `message` 工具发送失败，报错 "Unknown Channel"**：用户升级后无法向 Discord 频道发送消息。
        - **状态：** [Issue #78572](https://github.com/openclaw/openclaw/issues/78572) (已关闭)
    - **[#78692] `[object Object]` 字符串出现在 Mistral 模型的回复中**：影响模型输出的可读性。
        - **状态：** [Issue #78846](https://github.com/openclaw/openclaw/issues/78846) (已关闭)
    - **[#77551] AWS Bedrock 凭证过期后未自动刷新**：导致服务中断，需手动重启。
        - **状态：** [Issue #77551](https://github.com/openclaw/openclaw/issues/77551) (已关闭)

- **回归问题 (Regression)：**
    - **[#76804] WebChat 中助手文本回复未持久化到会话记录**：为 5.2 版本引入的回归问题。
        - **状态：** [Issue #76804](https://github.com/openclaw/openclaw/issues/76804) (已关闭)
    - **[#78232] `openclaw-weixin` 插件与 v2026.5.4 不兼容**：由于 API 变更导致处理入站消息失败。
        - **状态：** [Issue #78232](https://github.com/openclaw/openclaw/issues/78232) (已关闭)

- **正在处理中的稳定性问题：**
    - **[#76562] 升级后出现高 CPU 和 RPC 延迟** (7 Comments, 4 👍)：问题范围广，影响多个版本，目前仍在调查中。
        - **状态：** [Issue #76562](https://github.com/openclaw/openclaw/issues/76562) (开放)
    - **[#76315] Linux 下子 agent 负载导致网关不稳定** (6 Comments)：表现为 WhatsApp 断开、事件循环卡顿。
        - **状态：** [Issue #76315](https://github.com/openclaw/openclaw/issues/76315) (开放)

#### 6. 功能请求归类

- **安全与权限：**
    - [Feature Request #10659](https://github.com/openclaw/openclaw/issues/10659)：**掩码密钥系统**，防止 Agent 访问原始 API Key。
    - [Feature Request #13583](https://github.com/openclaw/openclaw/issues/13583)：**硬性强制执行钩子**，在 Agent 响应前强制进行工具调用/策略检查。
    - [Feature Request #78308](https://github.com/openclaw/openclaw/issues/78308)：**MCP 工具调用的频道中介批准**，允许用户通过聊天审批 MCP 工具执行。
    - [Feature Request #6615](https://github.com/openclaw/openclaw/issues/6615)：为 `exec-approvals` 添加 **拒绝列表（denylist）** 支持。

- **平台与集成：**
    - [Feature Request #12602](https://github.com/openclaw/openclaw/issues/12602)：支持 **Slack Block Kit** 以提供更丰富的 Agent 消息。
    - [Feature Request #9443](https://github.com/openclaw/openclaw/issues/9443)：提供 **预构建的 Android APK** 下载。
    - [Feature Request #13337](https://github.com/openclaw/openclaw/issues/13337)：为语音呼叫插件添加 **Vapi 提供商** 支持。

- **可用性与运维：**
    - [RFC #48874](https://github.com/openclaw/openclaw/issues/48874)：提出 **多会话架构**，实现共享 LLM + 隔离会话 + 公共知识库。
    - [Feature Request #13616](https://github.com/openclaw/openclaw/issues/13616)：添加 **备份/恢复工具**，用于配置、Cron 任务和会话历史。
    - [Feature Request #13700](https://github.com/openclaw/openclaw/issues/13700)：提供 **会话快照 (Session Snapshots)** 功能，支持保存/加载上下文检查点。

#### 7. 用户反馈摘要

- **痛点：**
    - **升级风险：** 用户反馈多个 v2026.5.x 版本升级后出现回归问题，如 `openclaw doctor` 修改配置文件、插件不兼容、WebSocket 断开等。用户对升级的稳定性表达担忧。
    - **调试困难：** 多个 Bug 报告（如 [#76562](https://github.com/openclaw/openclaw/issues/76562) 高CPU，[#76990](https://github.com/openclaw/openclaw/issues/76990) 回复丢失）显示出系统在繁忙或异常状态下行为难以预测，诊断信息不足。
    - **平台支持：** 用户多次提出希望有预构建的 Android APK 下载 ([#9443](https://github.com/openclaw/openclaw/issues/9443))，以便更方便地在移动设备上使用，无需自行构建。

- **满意点：**
    - **社区响应积极：** 大量 Issue 在短时间内被标记为已关闭，表明维护者在积极追踪和解决问题。例如，关于微信插件、Discord 发送等问题在报告后很快被处理。
    - **国际化持续改进：** 多个 PR 致力于改善对中文社区的支持，包括修正翻译和补充 CLI 向导，受到用户欢迎。

#### 8. 待处理积压

以下为部分评论活跃但尚未关闭或获得明确响应的 Issues，提醒维护者关注：

- **[Issue #2597] 上下文/状态在意外压缩或会话重置后丢失**：持续近三个半月，用户希望在运行时状态栏中看到上下文使用百分比，以进行主动管理。
- **[Issue #76562] 升级后出现高 CPU 和控制平面 RPC 延迟**：有 4 个 👍，描述了一个范围广、影响大的性能回归问题，目前仍处于开放状态。
- **[Issue #75739] Codex 集成中的模型回退和 OAuth 配置问题**：用户报告 Codex 环境下的模型路由和 OAuth 配置存在多个不兼容问题，需要维护者进行根因分析。

---

## 横向生态对比

好的，以下是根据您提供的2026-05-08各项目动态日报数据生成的横向对比分析报告。

---

## AI智能体与个人AI助手开源项目横向对比日报 | 2026-05-08

**报告范围**: 基于 OpenClaw、NanoBot、Zeroclaw、PicoClaw 四个项目的当日 GitHub 活动数据。

---

### 1. 今日横向概览

2026年5月8日，四个项目均保持了正向开发迭代，但活跃度分化明显。**OpenClaw** 以约500条Issue和500条PR更新大幅领先，并发布了修复性版本 v2026.5.7，社区焦点集中在配置自动迁移副作用和WebSocket稳定性上。**Zeroclaw** 和 **PicoClaw** 处于中等活跃区间，分别聚焦于桌面端（Tauri）首次用户体验和Nightly版本发布，但均面临WhatsApp协议升级、LLM调用可靠性等通道与核心稳定性问题。**NanoBot** 活跃度最低，当日无发布，主要处理WebSocket、Dream功能禁用等具体Bug和功能请求。跨项目来看，消息通道（尤其是WebSocket）的稳定性、LLM调用重试机制、API密钥安全管理是今日多个项目共同暴露的痛点。

---

### 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新数 | 今日 PR 更新数 | 版本发布 | 事实性备注 |
|------|-----------------|--------------|--------|----------|
| **OpenClaw** | 约500条 | 约500条 | 是 (v2026.5.7) | 发布专注于ClawHub插件发布流程的稳健性；社区讨论集中在配置重写回归和网关事件循环饥饿。 |
| **Zeroclaw** | 100条（48 Open + 52其他） | 100条（48待合并 + 2合并/关闭 + 50其他） | 否 | 桌面端首次运行向导合并（#6506）为里程碑事件；WhatsApp频道故障（#6246）为当前最热的阻塞性Bug。 |
| **PicoClaw** | 36条（14 Open + 22 Closed） | 48条（29待合并 + 19合并/关闭） | 是 (v0.2.8-nightly) | Nightly版本发布；集中处理Go安全漏洞升级；多通道场景下仅响应最后一条消息的Bug被标记为stale。 |
| **NanoBot** | 9条（3 Open + 6 Closed） | 26条（18待合并 + 8合并/关闭） | 否 | 修复了Dream游标恢复、SSE流式压缩、多项稳定性Bug；长期积压的PR #1835（自定义LLM参数）于今日关闭。 |

---

### 3. OpenClaw 与同类对照

- **活动量与发布节奏**：OpenClaw 的 Issue/PR 数量（约500条）显著高于其他三个项目，几乎是 NanoBot 的50倍以上。其发布版本 v2026.5.7 反映了持续的修复节奏，而 Zeroclaw、NanoBot 当日无正式发布，PicoClaw 的Nightly版本属于自动构建。
- **技术重点**：OpenClaw 当日重点在于 **ClawHub插件生态的发布流程**（重试、验证、健壮性）和 **配置管理**（`openclaw doctor --fix` 导致模型引用被错误重写），体现其更强调平台级插件治理和用户配置安全。其他项目当日技术重点更偏向 **通道连接**（WhatsApp、WebSocket）、**LLM调用可靠性**（超时、重试）和 **桌面端体验**（Tauri向导、离线启动）。
- **社区讨论面**：OpenClaw 最热的Issue涵盖了配置迁移副作用、WebSocket事件循环饥饿、API密钥掩码系统，讨论范围从功能细节到长期安全架构。其他项目的社区讨论更聚焦于单一功能或Bug，例如NanoBot的Dream禁用、Zeroclaw的WhatsApp故障、PicoClaw的API密钥自动轮换，缺乏类似OpenClaw的跨模块系统级议题。

---

### 4. 共同出现的技术方向

基于今日多个项目的数据，以下技术方向被反复提及（已注明涉及项目及具体诉求）：

- **WebSocket / 网关稳定性**：
  - **OpenClaw**：[#78402] 网关因工具调用卡住导致事件循环饥饿，WebSocket连接反复断开。
  - **NanoBot**：[#3682] WebSocket握手失败导致Gateway报错；[#3674] WebSocket通道静默丢弃入站消息中的media字段。
  - **Zeroclaw**：[#6465] 用户希望将聊天界面内嵌到桌面二进制，减少对远程网关的依赖（间接反映对网关稳定性的担忧）。
  - **PicoClaw**：无直接相关Issue，但其多个Issue（如飞书频道仅响应最后一条消息）也指向消息传递的可靠性问题。

- **LLM 调用失败处理与重试机制**：
  - **PicoClaw**：[#629] 用户强烈要求添加自动重试机制，当前后端返回500时任务挂起。
  - **NanoBot**：[#3681] LLM超时后报错“timed out after 300s”，用户怀疑与配置有关。
  - **OpenClaw**：虽未直接讨论重试，但其ClawHub发布流程增加了依赖安装失败的重试（v2026.5.7），属于调用重试的类似场景。

- **API密钥安全与管理**：
  - **OpenClaw**：[#10659] 请求“掩码密钥”系统，防止Agent在提示注入攻击中泄露API Key。
  - **PicoClaw**：[#2408] 用户提议API密钥自动轮换，支持同一提供商配置多个Key并在限速时自动切换。
  - **Zeroclaw**：[#6418] 回退提供者凭据继承失败，导致安全风险和服务中断（S0级）。

- **配置验证与兼容性**：
  - **OpenClaw**：[#78407] `openclaw doctor --fix` 自动重写模型引用导致锁定的回归问题。
  - **Zeroclaw**：[#6416] 增强`zeroclaw onboard`命令以验证`config.toml`并提供不兼容警告。
  - **PicoClaw**：[#2438 / #2439] 用户指出`PICOCLAW_GATEWAY_TOKEN`环境变量行为误导，影响外部集成。

---

### 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | PicoClaw | NanoBot |
|------|----------|----------|----------|---------|
| **功能侧重** | 插件生态（ClawHub）、配置管理、多会话架构（RFC #48874） | 桌面端体验（Tauri）、自动化权限（`[autonomy] level = "full"`）、WhatsApp/Telegram通道 | 多IM通道（Discord/飞书/WhatsApp）、MCP工具调用、安全补丁快速响应 | 简洁轻量、Dream（心跳推理）、CLI交互、小团队或个人场景 |
| **目标用户** | 高阶开发者、团队级部署、对插件和配置灵活性有要求的用户 | 依赖桌面应用、偏好无CLI体验的用户；对自动化权限敏感的用户 | 跨平台、多通道重度用户；追求低成本（如使用本地模型、Nightly测试者） | 追求极简部署、偏好命令行、希望快速搭建个人助手的用户 |
| **技术架构** | 基于模块化的网关+ClawHub插件系统；提供RPC和多种部署方式 | 使用Tauri提供桌面端；支持Docker和PostgreSQL后端；强调“无CLI”的首次体验 | Go语言实现（PicoClaw）；夜间构建更新频繁；对安全漏洞快速升级 | Python实现；重心在Dream（自推理循环）和轻量级API；PR数量不多但合并节奏平稳 |
| **今日关键信号** | 插件生态稳定性受社区高度关注（发布重试、回滚） | 桌面端里程碑（Onboarding Wizard）合并，但WhatsApp频道成为阻塞点 | 安全补丁（Go升级）和新功能（非破坏性重置）同步推进 | 修复了多个细粒度Bug，但功能请求积压（如Dream禁用、自定义LLM参数） |

---

### 6. 社区活跃度记录

| 活跃度层级 | 项目 | 今日 Issue 更新 | 今日 PR 更新 | 版本发布 | 备注 |
|----------|------|---------------|-------------|--------|------|
| **极高** | OpenClaw | ~500条 | ~500条 | 正式发布 (v2026.5.7) | 社区讨论范围广，涉及系统级稳定性、安全、插件生态；Bug修复和社区响应极为密集。 |
| **较高** | Zeroclaw | 100条 | 100条 | 无 | 桌面端进展显著，但WhatsApp通道故障成为焦点，同时出现S0级安全Bug（#6418）。 |
| **中等** | PicoClaw | 36条（14 Open + 22 Closed） | 48条（29待合并 + 19合并/关闭） | Nightly (v0.2.8-nightly) | 安全补丁和核心功能修复并行；多处Bug被标记为stale，反映了维护者对旧Issue的处理策略。 |
| **较低** | NanoBot | 9条 | 26条 | 无 | 无发布，PR以修复为主；长期积压的PR #1835被关闭，但未有新功能亮点。 |

**说明**：活跃度仅基于今日数据，不反映项目长期成熟度或质量。OpenClaw的项目规模（Issue/PR基数）远大于其他项目。

---

### 7. 有证据支撑的观察

1. **WebSocket/网关稳定性是跨项目的共性问题**：OpenClaw（#78402）、NanoBot（#3682、#3674）、Zeroclaw（#6465 间接反映）均出现与WebSocket或网关连接相关的故障，涉及事件循环饥饿、消息静默丢弃、握手失败等。这表明多个项目在消息通道的高负载或异常处理上存在脆弱环节，修复紧迫性高。

2. **API密钥安全管理的呼声从“掩码”向“自动轮换”扩展**：OpenClaw用户提出“掩码密钥”系统，PicoClaw用户提出“自动轮换”机制。两者虽然方案不同，但都指向一个核心诉求：在Agent可以调用外部API的场景下，保护密钥不被泄露（通过提示注入）或避免因单个Key的限速导致服务中断。Zeroclaw的回退凭据继承失败（#6418）进一步印证了这一安全薄弱点的真实性。

3. **配置迁移和兼容性测试存在普遍风险**：OpenClaw的`openclaw doctor --fix`自动重写配置文件导致用户锁定，Zeroclaw的`config.toml`验证需求（#6416），以及PicoClaw的环境变量行为误导（#2438），共同表明：随着项目功能增加，配置项越来越多，用户对“自动化配置”与“手动配置”之间的信任度降低，需要更透明的预览、回滚和验证机制。

4. **桌面端体验成为Zeroclaw和PicoClaw的差异化竞争点**：Zeroclaw当日合并了macOS首次运行向导（#6506），并持续提出离线启动、托盘菜单、权限按需请求等诉求（#6465、#6329等）。PicoClaw无桌面端相关更新，但仍以多IM通道和轻量部署为主。OpenClaw和NanoBot在今日数据中未出现桌面端重点。桌面端可能成为Zeroclaw吸引特定用户群体的核心功能。

5. **今日暂无明确跨项目信号**：四个项目在“Dream功能禁用”（NanoBot #3652）、“MCP Secret存储”（PicoClaw #2444）、“Slack Block Kit支持”（OpenClaw #12602）等议题上未出现其他项目呼应，暂不能形成共同趋势。保持观察即可。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-08

## 1. 今日活动概览

过去24小时内，NanoBot 仓库共收到 9 条 Issue 更新（3 条新开 / 活跃，6 条已关闭）和 26 条 PR 更新（18 条待合并，8 条已合并/关闭）。无新版本发布。社区修复了 WebSocket 连接错误、WeChat 消息静默丢失、LLM 超时、DeepSeek 推理模式错误等多个稳定性问题；同时有若干功能 PR 被合并，如 Dream 游标恢复、API SSE 流式修复、CI 规则增强。长期积压的 PR #1835（自定义 LLM 参数）在本日被关闭。

## 2. 版本发布

无新版本发布。

## 3. 项目进展（今日合并/关闭的重要 PR）

以下 PR 在本日被合并或关闭，标志着功能的推进或修复的落地：

- **#3660** `fix(dream): restore cursor with memory state`
  修复 Dream 功能在恢复时游标未与内存文件同步的问题，并增加回归测试。
  https://github.com/HKUDS/nanobot/pull/3660

- **#3677** `fix(api): remove enable_compression to restore real SSE streaming`
  移除 HTTP 压缩缓冲，恢复 SSE 实时增量推送效果。
  https://github.com/HKUDS/nanobot/pull/3677

- **#3672** `chore(ci): Enable full ruff -F (all F rules) checks and fix related errors`
  增强 CI 代码质量检查，修复所有 F 类规则错误。
  https://github.com/HKUDS/nanobot/pull/3672

- **#3678** `refactor(logging): preserve tracebacks in remaining except blocks`
  将剩余的 `logger.error` 替换为 `logger.exception`，保留异常堆栈信息。
  https://github.com/HKUDS/nanobot/pull/3678

- **#1835** `Added support for sending arbitrary additional arguments to backend LLMs`
  允许用户向后端 LLM 请求添加自定义参数（如 Ollama 的 `stream: false`）。此 PR 创建于 2026-03-10，今日被关闭。
  https://github.com/HKUDS/nanobot/pull/1835

## 4. 社区热点

今日讨论最活跃的 Issue 及背后的用户诉求：

- **#3682** [CLOSED] `[bug] websocket导致的报错`（3 条评论）
  用户报告 Gateway 在 WebSocket 握手时抛出 `opening handshake failed` 错误。维护者通过关闭该 Issue 及关联 #3683 表明已排查或修复。
  https://github.com/HKUDS/nanobot/issues/3682

- **#3652** [OPEN] `[enhancement] Can Dream be disabled?`（2 条评论）
  用户希望完全禁用 Dream 功能，建议在配置中加入 `enabled` 标志。此需求获得 0 个赞但持续有讨论，说明部分用户认为 Dream（智能体自动执行任务）不适用于所有场景。
  https://github.com/HKUDS/nanobot/issues/3652

- **#3665** [CLOSED] `[bug] deepseek-v4-flash "The reasoning_content..."`（2 条评论）
  使用 DeepSeek v4 模型时，连续提问后出现“reasoning_content must be passed back”错误，用户认为与 NanoBot 的思考模式处理有关。Issue 已关闭。
  https://github.com/HKUDS/nanobot/issues/3665

## 5. Bug 与稳定性

今日报告的 Bug 覆盖 WebSocket、渠道消息处理、LLM 调用、模型兼容性等方面。按严重程度排列：

| 严重程度 | Issue / PR | 描述 | 状态 |
|----------|------------|------|------|
| 高 | #3674 [OPEN] | WebSocket 通道静默丢弃入站消息中的 `media` 字段，导致文件/图片附件无法到达 Agent | 未修复 |
| 高 | #3684 [OPEN] (PR) | WeChat 渠道入站异常被 `suppress(Exception)` 吞没，造成消息静默丢失；另修复 token 过期和 ret=-2 问题 | 有修复 PR |
| 中 | #3681 [CLOSED] | `Error calling LLM: timed out after 300s` 频繁超时，用户怀疑与 NanoBot 配置有关 | 已关闭（待确认修复） |
| 中 | #3662 [OPEN] (PR) | Token 估算时强制网络加载 `tiktoken`，在离线环境会失败 | 有修复 PR |
| 低 | #3664 [OPEN] (PR) | Matrix 和 Weixin 渠道存在多个 `except Exception` 静默吞日志 | 有修复 PR |

此外，已关闭的 Bug Issue 还包括 #3683（WebSocket 访问问题）、#3604（WhatsApp 语音消息未下载）等。

## 6. 功能请求归类

根据今日新开 / 活跃的 Issue 及 PR，按功能领域归类，仅记录用户提出的需求，不预测路线图。

**Agent / 智能体增强**
- #3652：希望为 Dream 功能添加 `enabled` 开关，以完全禁用。
  https://github.com/HKUDS/nanobot/issues/3652
- #3650：希望可在 agent 模式下配置 bot 名称和图标（显示自定义名称而非“nanobot is thinking...”）。
  https://github.com/HKUDS/nanobot/issues/3650

**渠道 / 平台互通**
- #3688 [CLOSED]：建议添加 `/sync-meta` 管理命令，将斜杠命令推送到 WhatsApp Business 的 conversational_automation 端点，改善 UI 中的命令提示。
  https://github.com/HKUDS/nanobot/issues/3688
- #3486 [OPEN]：新增 SimpleX 渠道支持（通过 SimpleX Terminal CLI 实现）。
  https://github.com/HKUDS/nanobot/pull/3486

**音频 / 语音**
- #3513 [OPEN]：统一语音转录提供商架构，增加本地 Whisper 支持。
  https://github.com/HKUDS/nanobot/pull/3513

**CLI / 交互体验**
- #3655 [OPEN]：CLI 中增加 `show_reasoning` 配置，支持流式展示模型推理/思考内容。
  https://github.com/HKUDS/nanobot/pull/3655

**内存 / 会话管理**
- #3687 [OPEN]：修复回放窗口隐藏历史消息后，记忆合并遗漏部分会话。
  https://github.com/HKUDS/nanobot/pull/3687
- #3686 [OPEN]：统一 `AutoCompact._archive()` 与 `Consolidator.maybe_consolidate_by_tokens()` 的归档路径，防止摘要丢失。
  https://github.com/HKUDS/nanobot/pull/3686
- #3685 [OPEN]：将 `_last_summary` 持久化到 session metadata，避免进程重启后遗忘已归档上下文。
  https://github.com/HKUDS/nanobot/pull/3685

**执行 / 沙箱**
- #3642 [OPEN]：允许通过配置 `tools.exec.sandboxBindsRo` / `sandboxBindsRw` 自定义 bwrap 绑定挂载。
  https://github.com/HKUDS/nanobot/pull/3642

**心跳**
- #1443 [OPEN]：将心跳推理与通知解耦，默认静默推理，通过配置选择是否自动发送推理内容。
  https://github.com/HKUDS/nanobot/pull/1443
- #1939 [OPEN]：当模型无事可做时跳过心跳 LLM 调用，节省 token。
  https://github.com/HKUDS/nanobot/pull/1939

## 7. 用户反馈摘要

从今日 Issue 评论和摘要中提炼的用户痛点与场景：

- **WebSocket 兼容性**：有用户在 Linux 服务器部署 Gateway 后，Windows 和 Mac 浏览器访问 `8765` 端口无法显示 secret 输入界面，而手机浏览器正常（#3683）。这暗示 WebSocket 通道可能存在跨平台协商问题。
- **Dream 禁用需求**：用户 @skyline75489 表示希望完全禁用 Dream 功能，理由是“I want to disable Dream completely”。没有给出具体原因（#3652），可能涉及资源消耗或意图冲突。
- **自定义品牌化**：用户 @mraad 希望在 agent 模式下将“nanobot is thinking…”替换为自己的 bot 名称和图标，用于面向客户的场景（#3650）。
- **LLM 超时困扰**：用户 @bigsinger 报告最近频繁出现 300 秒超时，不确定是否与 NanoBot 自身有关，期望不超时（#3681）。
- **DeepSeek 模型兼容**：用户 @tomjuggler 在使用 deepseek-v4-flash 时，连续几次查询后收到“reasoning_content must be passed back”错误，表明 NanoBot 在处理模型思考模式时可能未正确传递 reasoning_content（#3665）。

## 8. 待处理积压

以下 PR 或 Issue 创建时间较早且仍处于开放状态，维护者可能需关注：

- **#1219** `Add some enhancement for using bot to analysis stock market`（2026-02-26 创建，已有 80+ 天）
  https://github.com/HKUDS/nanobot/pull/1219
  新增股票分析、代码性能分析等技能，文档和测试较完整，但长期未被合并。

- **#1443** `feat: decouple heartbeat reasoning from notification`（2026-03-02 创建）
  https://github.com/HKUDS/nanobot/pull/1443
  实现心跳静默推理的配置，涉及默认行为变更，可能需要 maintainer 审阅。

- **#1939** `feat: skip heartbeat before llm call`（2026-03-12 创建）
  https://github.com/HKUDS/nanobot/pull/1939
  跳过无操作时的心跳 LLM 调用，可节省用户 token，但停留在 OPEN 状态两个月。

- **#3674** `WebSocket channel silently drops media from inbound messages`（2026-05-07 创建，今日未获得任何评论）
  https://github.com/HKUDS/nanobot/issues/3674
  此 Bug 导致文件/图片附件静默丢失，影响 WebSocket 渠道用户，尚无维护者回复。

以上日报基于今日 GitHub 数据生成，所有链接均可直接访问。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是根据您提供的 Zeroclaw 项目数据生成的 2026-05-08 项目动态日报。

---

## Zeroclaw 项目动态日报 — 2026-05-08

### 1. 今日活动概览

过去24小时内，Zeroclaw 项目社区活跃度较高，累计产生100条 Issues 和 PR 更新。其中，新增或活跃的 Issue 共48个，但有2个已关闭；待合并的 PR 高达48个，另有2个已合并或关闭。无新版本发布。开发与维护工作集中在修复因WhatsApp协议升级导致的通信故障、解决回退提供者的凭据继承安全问题，以及持续推进桌面客户端的首次运行体验和功能完善。

### 2. 版本发布

无。

### 3. 项目进展

今日有2个PR被合并/关闭，均来自桌面客户端（Tauri）的开发工作：

*   **引入截图与AppleScript能力**：PR [#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507)（[CLOSED]）为桌面端新增了 `take_screenshot` 和 `run_applescript` 两个Tauri命令，用于证明桌面端的能力扩展路径可行。
*   **macOS 首次运行向导**：PR [#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506)（[CLOSED]）合并了一个大型功能分支，为 macOS 桌面端增加了包含8个步骤的首次运行向导（Onboarding Wizard），用于引导用户授予权限，标志着桌面端基础体验的一个关键里程碑。

### 4. 社区热点

*   **WhatsApp 频道协议升级故障**：[Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) 是今日评论最多的议题，共6条。用户报告自2026年4月24日WhatsApp服务端协议升级后，WhatsApp Web频道（`whatsapp-web`）出现静默故障，无法收发消息。此问题严重性高（S1 - 工作流阻塞），目前仍处于开放状态，是社区关注的焦点。
*   **回退提供者凭据继承问题**：[Issue #6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) 虽已关闭，但因其严重程度（S0 - 数据丢失/安全风险）和引发的4条讨论而值得关注。该问题揭示了当主模型故障（如429错误）触发回退机制时，系统未能正确传递 `config.toml` 中的凭据，可能导致服务中断或安全风险。该议题已被标记为重复（duplicate），表明维护者已知晓并可能在处理。
*   **桌面端离线启动能力**：[Issue #6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) 提出了将聊天界面 SPA 内嵌到桌面二进制文件中，以实现不依赖远程网关即可启动渲染界面的需求。此特性被标记为 P1 优先级，反映了用户对桌面应用稳定性和离线可用性的普遍诉求。

### 5. Bug 与稳定性

今日报告了多个Bug，按严重程度排列如下：

*   **S0 - 数据丢失 / 安全风险**：
    *   [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) [CLOSED] 回退提供者凭据继承失败，存在安全与服务中断风险。
    *   [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) [OPEN] 文档中引用的 `zeroclawlabs/tool-runner` Docker 镜像在 Docker Hub 上不存在，用户配置后会直接失败。

*   **S1 - 工作流阻塞**：
    *   [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) [OPEN] WhatsApp Web 频道因协议升级而无法收发消息。
    *   [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) [OPEN] 在 `[autonomy] level = "full"` 权限设置下，Shell 工具调用被拒绝，导致用户操作完全受阻。
    *   [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) [OPEN] 自定义远程提供者（如 vLLM）发送图片时，发送的是本地文件路径而非 data URL，导致多模态请求失败。
    *   [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) [OPEN] `google_workspace` 工具在 Windows 上无法找到 `gws.cmd`，且参数传递存在 JSON 格式问题。

*   **S2 - 降级行为**：
    *   [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) [OPEN] 提示词缓存（Prompt Caching）在 Telegram 频道上不生效。
    *   [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) [OPEN] 网关（gateway）使用 PostgreSQL 内存后端时因运行时嵌套而崩溃。
    *   [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) [OPEN] Gemini CLI 提供者因使用过时的命令行参数 `--print` 而非 `--prompt` 导致崩溃。

**已有对应修复 PR 的问题：**
*   [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) 已有作者提出的修复 PR [#6519](https://github.com/zeroclaw-labs/zeroclaw/pull/6519)（将提示词作为命令行参数直接传递）。

### 6. 功能请求归类

以下为用户提出的新功能需求及相关的实现 PR：

*   **增强桌面端易用性**：多个 Issue 均来自同一贡献者，聚焦于桌面端的“无 CLI”使用体验。
    *   [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465): 将聊天界面打包进桌面二进制文件，使其无需远程网关即可启动。
    *   [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339): 为 macOS 应用构建通用二进制文件（Universal Binary），兼容 Apple Silicon 和 Intel。
    *   [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329): 为菜单栏托盘图标增加实用功能，如重启网关、查看日志等。
    *   [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327): 在桌面菜单栏聊天面板中增加频道总览功能。
    *   [#6485](https://github.com/zeroclaw-labs/zeroclaw/issues/6485): 实现按需请求 macOS 系统权限（如通讯录、相册），而非在首次运行时一次性请求。

*   **提供者与配置扩展**：
    *   [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371): 为 WhatsApp Web 频道增加基于JID的群组白名单功能。
    *   [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375): 恢复一种通过环境变量覆盖配置的 V3 机制。
    *   [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518): 请求为首要的自定义/OpenAI兼容提供者（如 Kimi K2.5）提供一等支持，减少配置门槛。
    *   [#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) [PR]: 新增 `atomic-chat` 作为本地模型提供者选项。

*   **其他功能增强**：
    *   [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510): 为 Cron 任务的 `announce` 模式增加选项，使其只发送最终助手的回复而非所有中间文本。
    *   [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416): 增强 `zeroclaw onboard` 命令，使其能够验证 `config.toml` 并警告提供者与设置之间的不兼容性。

### 7. 用户反馈摘要

从今日的 Issues 评论中，可以提炼出以下用户痛点与使用场景：

*   **渠道连接的脆弱性**：WhatsApp 频道在服务端协议更新后立即失效（#6246），表明依赖私有协议的外部渠道集成存在稳定性风险。用户 @alexandme 正在跟进该问题。
*   **回退机制的可靠性**：用户 @kmukul123 报告的凭据继承失败（#6418），体现了即使系统设计了容错机制，其执行逻辑有缺陷时仍会导致更严重的数据与安全问题。
*   **本地部署的配置挑战**：多位用户（如 @vanbukin, @tidux, @essamsalah）反馈了在配置非主流、自托管或本地模型提供者（如 LLaMA.cpp, vLLM, Kimi）时遇到的困难，包括参数传递、路径处理、命令行接口不兼容等问题。这些反馈凸显了提升配置兼容性和提供更智能的默认配置验证的重要性。
*   **桌面端体验的迫切需求**：@theonlyhennygod 提出的多项关于桌面端的增强请求（#6465, #6329 等），反映了用户对桌面应用作为独立、功能完备产品的期待。用户希望在无需了解复杂后端或依赖互联网的情况下，获得流畅的首次体验。
*   **运行时安全隐患**：用户 @sam74S 即使在设置了极高的自动化权限（`level = "full"`）后，Shell 工具仍无法使用（#6434）。这指向了运行时权限模型可能存在逻辑冲突或未被正确解析的 Bug。

### 8. 待处理积压

以下为长期未得到回应或进展缓慢的重要 Issue 和 PR，提请维护者关注：

*   **长期未合并的 PR 需作者回应**：
    *   [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) (`refactor(tools)`: 持续5周，`needs-author-action`)：涉及多个工具的重构，但需要作者回应。此 PR 规模较大，其搁置可能影响整个工具模块的后续开发。
    *   [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) (`feat(security)`: 持续3周，`needs-author-action`, `needs-maintainer-review`)：为 Shell 工具增加基于 TOTP 的命令级权限控制，是一项重要的安全功能，但缺少作者和评审的回应。
    *   [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) (`fix(ci)`: 持续1天，虽不“积压”，但状态为阻塞，`needs-author-action`)：此PR是v0.7.5版本发布的必要前置条件，目前因需要作者处理而停滞，影响了版本的正常发布流程。

*   **关键部署/配置 Bug**：
    *   [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) (`Docker bind mount shadows web dashboard`)：是一个严重的 Docker 部署问题，导致用户无法访问 Web 面板。该 Issue 标记为 P1，但尚无明确修复进展或 PR。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是基于您提供的 PicoClaw GitHub 数据生成的 2026-05-08 项目动态日报。

---

## PicoClaw 项目动态日报 | 2026-05-08

**日报生成时间**: 2026-05-08 | **数据来源**: github.com/sipeed/picoclaw

### 1. 今日活动概览

过去24小时，PicoClaw 项目保持了极高的活跃度，共处理了36条 Issues 和48条 PR。其中，新开启或活跃的 Issue 有14个，另有22个 Issue 被关闭；在 PR 方面，有29个 PR 待合并，19个 PR 已经合并或关闭。此外，项目还发布了一个全新的 Nightly Build 版本（`v0.2.8-nightly`）。从活动内容看，维护者团队正在集中处理来自社区的大量 bug 报告和功能请求，特别是针对多通道、工具执行和模型提供者方面的修复与增强。

### 2. 版本发布

-   **nightly: Nightly Build**
    -   **版本号**: `v0.2.8-nightly.20260508.2834db13`
    -   **说明**: 这是一个自动构建的夜间版本，可能不稳定，仅供测试使用。其变更内容相对于 v0.2.8 版本，详情可查看 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。
    -   **迁移注意事项**: 此为不稳定版本，建议仅在测试环境或需要提前体验最新功能的场景下使用。

### 3. 项目进展（今日合并/关闭的重要 PR）

-   **安全与依赖更新**: 项目对 Go 语言版本和安全漏洞进行了积极响应。
    -   [#2818](https://github.com/sipeed/picoclaw/pull/2818) 和 [#2821](https://github.com/sipeed/picoclaw/pull/2821) 均将 Go 版本从 `1.25.9` 升级至 `1.25.10`，以修复标准库 `net`、`net/http` 和 `net/http/httputil` 中的三个关键安全漏洞。
-   **核心功能修复**: 多个关键 Bug 被修复并关闭。
    -   [#2819](https://github.com/sipeed/picoclaw/pull/2819) 新增了一个非破坏性的 `/reset` 命令，用于在不删除 Seahorse 历史记录的情况下开始新会话，回应了社区对历史数据完整性的诉求。
    -   [#2504](https://github.com/sipeed/picoclaw/pull/2504) 修复了 Opus 音频解码时可能导致 Discord 语音发送失败的缓冲区重用 Bug。
    -   [#2460](https://github.com/sipeed/picoclaw/pull/2460) 修复了 MCP 工具调用时，向某些严格检查参数的 SDK（如 TypeScript SDK）传递 `null` 参数导致调用失败的问题。
-   **新功能集成**: 提供者支持得到扩展。
    -   [#2240](https://github.com/sipeed/picoclaw/pull/2240) 合并，为 GitHub Copilot 提供者增加了 stdio 传输支持。

### 4. 社区热点

-   **最热 Issue: LLM 调用失败重试机制** ([#629](https://github.com/sipeed/picoclaw/issues/629))
    -   **热度**: 13 条评论
    -   **诉求**: 用户在运行长任务时，后端 API 返回 HTTP 500 错误导致任务挂起，但 PicoClaw 没有自动重试机制。这反映了社区对核心 Agent 稳定性和鲁棒性的强烈需求。该 Issue 虽开启时间较早，但近期仍有更新，说明此问题长期受到关注。
-   **次热 Issue: API 密钥自动轮换** ([#2408](https://github.com/sipeed/picoclaw/issues/2408))
    -   **热度**: 11 条评论
    -   **诉求**: 用户提议引入类似“弹匣”的 API 密钥管理功能，允许为同一提供商配置多个 API Key，并在遇到速率限制或配额用尽时自动切换。这体现了重度用户在成本控制和可用性方面的真实痛点。
-   **高关注度 PR: 支持非破坏性会话重置** ([#2819](https://github.com/sipeed/picoclaw/pull/2819))
    -   **热度**: 当日创建并关闭，直接对应了 Issue [#2820](https://github.com/sipeed/picoclaw/issues/2820) 的需求，社区反馈和跟进非常迅速。

### 5. Bug 与稳定性

-   **严重 Bug: LLM 调用失败无重试** ([#629](https://github.com/sipeed/picoclaw/issues/629))
    -   **状态**: Open
    -   **优先级**: 高。核心功能稳定性问题，会导致任务无响应挂起。
    -   **相关工作**: 暂无直接修复 PR。
-   **严重 Bug: 会话历史竞争_Anthropic API 400 错误** ([#2721](https://github.com/sipeed/picoclaw/issues/2721))
    -   **状态**: Open
    -   **摘要**: 用户在 `v0.2.5` 版本中仍然遇到了之前声称已修复的 `tool_use_id` 400 报错，表明该 Bug 可能未被完全解决。
-   **功能 Bug: exec 工具路径安全检查误判** ([#1042](https://github.com/sipeed/picoclaw/issues/1042))
    -   **状态**: Open
    -   **摘要**: 当 `restrict_to_workspace` 开启时，`guardCommand` 的正则匹配会将 `curl "wttr.in/Beijing?T"` 误判为路径越界。PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) 提供了一个修复方案，允许相对脚本路径通过安全检查。
-   **功能 Bug: 高频消息下只响应最后一条** ([#2447](https://github.com/sipeed/picoclaw/issues/2447) 等)
    -   **状态**: 已关闭（stale）
    -   **摘要**: 多个 Issue ([#2447](https://github.com/sipeed/picoclaw/issues/2447), [#2464](https://github.com/sipeed/picoclaw/issues/2464)) 报告了在飞书等频道连续发送消息时，机器人仅处理最后一条的问题。虽然这些 Issue 因长期未活动被关闭，但这是多通道场景下的一个已知痛点。
-   **UI Bug: 启动网关按钮无响应** ([#2483](https://github.com/sipeed/picoclaw/issues/2483))
    -   **状态**: 已关闭（stale）
    -   **摘要**: 用户反馈 Web UI 上的“启动网关”按钮无法点击。该问题可能已修复或在特定环境下被关闭。

### 6. 功能请求归类

-   **会话与历史管理**:
    -   [New] 提供非破坏性的 `/reset` 命令以重开对话但保留历史记录 ([#2820](https://github.com/sipeed/picoclaw/issues/2820))。已有对应 PR [#2819](https://github.com/sipeed/picoclaw/pull/2819) 被合并。
-   **通道功能增强**:
    -   [New] 通过 SMTP 发送邮件，用于定时任务结果通知（如项目周报） ([#2465](https://github.com/sipeed/picoclaw/issues/2465))。
    -   [Planned] 通用附件支持，允许处理通过 IM 通道发送的文件、文档和媒体 ([#348](https://github.com/sipeed/picoclaw/issues/348))。
-   **模型与服务提供商**:
    -   [New] 支持双重 HEAD 认证，适配自建模型的特殊鉴权需求 ([#2169](https://github.com/sipeed/picoclaw/issues/2169))。
    -   [Open] 将 OpenAI 类端点统一迁移至新的 Responses API ([#2171](https://github.com/sipeed/picoclaw/issues/2171))。
-   **工具与MCP**:
    -   [Open] 支持将 MCP 服务器环境变量的密钥存储在 `.security.yml` 中，以提升安全性 ([#2444](https://github.com/sipeed/picoclaw/issues/2444))。

### 7. 用户反馈摘要

-   **稳定性诉求强烈**: 用户对 API 调用失败、会话历史出现异常（如重复响、仅处理最后一条消息）等稳定性问题感到不满。从 Issue [#629](https://github.com/sipeed/picoclaw/issues/629) 的长期活跃状态和 [#2721](https://github.com/sipeed/picoclaw/issues/2721) 的“旧病复发”可以看出，核心 Agent 的健壮性是社区关注的重中之重。
-   **配置复杂性增加**: 随着功能增多，配置项也变得复杂。有用户指出 `PICOCLAW_GATEWAY_TOKEN` 环境变量的行为具有误导性，它并不控制 WebSocket 通道的认证，导致外部集成困难 ([#2438](https://github.com/sipeed/picoclaw/issues/2438), [#2439](https://github.com/sipeed/picoclaw/issues/2439))。
-   **中文用户反馈活跃**: 多个关于 exec 工具路径安全、群组历史记录和频道响应问题的 Bug 由中文用户报告，表明 PicoClaw 在中文社区拥有活跃的用户群体，这些反馈对项目的国际化至关重要。
-   **负面体验**: 有用户因配置和使用困难，在 Issue 中发表了情绪化表达 ([#2429](https://github.com/sipeed/picoclaw/issues/2429))，这提醒项目在迭代新功能的同时，需要持续优化开箱即用的体验和文档。

### 8. 待处理积压

-   **重要 Issue: 通用附件支持** ([#348](https://github.com/sipeed/picoclaw/issues/348))
    -   **状态**: Open，自 2026-02-17 开启。
    -   **优先级**: 高，这是一个路线图级别的功能。
    -   **当前状态**: 已标记 `priority: high` 和 `type: roadmap`，但至今仍无关联的 PR。
-   **重要 Bug: exec 工具路径检查问题** ([#1042](https://github.com/sipeed/picoclaw/issues/1042))
    -   **状态**: Open，自 2026-03-04 开启，有 8 条评论和 2 个👍。
    -   **当前状态**: 虽有关联 PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) 提交，但 Issue 本身尚未被关闭，需要维护者跟进并关闭。
-   **功能请求: MCP Secret 存储到 security.yml** ([#2444](https://github.com/sipeed/picoclaw/issues/2444))
    -   **状态**: 已关闭（stale），但有 2 个👍。
    -   **提醒**: 该功能请求强调了安全最佳实践，虽然因“陈旧”被关闭，但其背后的需求（密钥集中管理）是合理的。建议项目考虑是否将其作为一个长期可规划事项。

</details>