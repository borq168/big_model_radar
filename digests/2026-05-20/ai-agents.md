# OpenClaw 生态日报 2026-05-20

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-20 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 — 2026‑05‑20

---

## 1. 今日活动概览

过去 24 小时共更新 **500 条 Issues**（新开/活跃 450，关闭 50）和 **500 条 Pull Requests**（待合并 467，已合并/关闭 33）。发布了 **2 个新版本**（alpha.1 与 beta.2），主要涉及代理逻辑清理、依赖更新（`@openclaw/proxyline` 0.3.3、Pi 包 0.75.1）以及 Node.js 最低版本提升至 22。社区讨论集中在跨平台客户端支持、聊天 UI 回归、安全加固和成本控制等方向。

---

## 2. 版本发布

### v2026.5.19-alpha.1
- **变更内容**：
  - Agents：明确修复应默认为干净的有限重构、精简内部逻辑，并给出显式的插件 SDK/API 弃用路径。
  - 依赖：更新 `@openclaw/proxyline` 至 0.3.3。
  - 依赖：更新 Pi 包至 0.75.1，并将最低支持的 Node.js 版本提升至 22。

### v2026.5.19-beta.2
- **变更内容**：与 alpha.1 完全一致（见上）。

> 两个版本内容相同，alpha.1 为早期快照，beta.2 为同日的稳定预览版。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 状态 | 摘要 |
|----|------|------|------|
| [#84369](https://github.com/openclaw/openclaw/pull/84369) | Fix Codex image generation tool timeout | 已关闭 | 由 ClawSweeper 自动合并，修复 Codex 图片生成工具的超时问题。 |
| [#84398](https://github.com/openclaw/openclaw/pull/84398) | fix: use context-aware reserveTokensFloor in overflow recovery hint | 已关闭 | 替换硬编码的 `20000` 建议值，根据模型上下文窗口大小动态推荐 `reserveTokensFloor`。 |
| [#84362](https://github.com/openclaw/openclaw/pull/84362) | fix(doctor): preserve explicit agentRuntime pin during codex model migration | 开放（automerge 已武装） | 确保 `doctor --fix` 在迁移 Codex 模型配置时保留用户显式指定的 `agentRuntime` 参数。 |

此外，今日共有 33 个 PR 被合并/关闭，涉及会话修复、插件加载优化、实时通信稳定性等方向。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**
   - **评论数**：105 | **👍**：75
   - **诉求**：用户强烈要求提供 Linux 和 Windows 桌面客户端，目前仅有 macOS、iOS、Android。该项目已开放 4 个多月，仍为 P2 待决策，社区呼声极高。

2. **[#18677 – Security Scan Hook API for skill:install](https://github.com/openclaw/openclaw/issues/18677)**
   - **评论数**：16
   - **诉求**：在安装技能（skill）前提供安全扫描钩子，防止恶意代码注入。标签含 `security`、`stale`，维护者尚未回应。

3. **[#11829 – Security Roadmap: Protecting API Keys from Agent Access](https://github.com/openclaw/openclaw/issues/11829)**
   - **评论数**：16
   - **诉求**：系统性地保护 API 密钥，防止泄漏给 LLM 或暴露在聊天中。已有多条 PR 部分修复（如 #84390、#84396）。

4. **[#67035 – Windows chat UI regression](https://github.com/openclaw/openclaw/issues/67035)**
   - **评论数**：13
   - **描述**：升级后聊天 UI 出现输入文本被吞、流式回复不可见、打字指示器闪烁等问题。标记为 P1，尚无双向验证（live repro）。

5. **[#42475 – Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475)**
   - **评论数**：13
   - **诉求**：在网关层增加按代理的日/月成本预算上限，防止因模型调用失控导致费用超支。

### 分析
- 跨平台客户端（#75）和安全性（#18677、#11829）是社区长期关注的两大方向，维护者需优先回应。
- Windows 回归问题（#67035）直接影响大量桌面用户，已有 13 条讨论但尚未有修复 PR。

---

## 5. Bug 与稳定性

以下按优先级排列，注明是否已有对应的修复 PR。

| Issue | 标题 | 优先级 | 影响 | 是否有 Fix PR |
|-------|------|--------|------|---------------|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI regression（输入/流式回复异常） | P1 | 会话状态、消息丢失 | 无（需 live repro） |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json 无界增长导致网关 OOM | P1 | 崩溃循环 | 无（已标注 fix‑shape‑clear） |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 硬重置循环：同一会话键反复触发上下文溢出 | P1 | 会话状态、消息丢失 | 无（待决策） |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | Mattermost 斜杠命令返回 503 "not yet initialized" | 回归 | 通道不可用 | 无（源再现已提供） |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | doctor --fix 静默迁移 codex 配置导致 3-4 倍 token 膨胀 | P1 | 数据丢失、认证提供者 | 无（linked‑pr‑open 但未固定） |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram 消息静默丢失，无 sendMessage 日志 | P1 | 会话状态、消息丢失 | 无 |
| [#83615](https://github.com/openclaw/openclaw/issues/83615) | 升级后回复截断 + kimi-k2.6 模式不兼容 | P1 | 会话状态、消息丢失 | 无（需 live repro） |
| [#64500](https://github.com/openclaw/openclaw/issues/64500) | 全局断路器无法阻止工具对间的乒乓循环 | P2 | 会话状态、崩溃循环 | 无（已标注 fix‑shape‑clear） |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | 心跳隔离模式多个回归（节奏停滞、标签错误等） | P2 | 会话状态、消息丢失 | 无（需 live repro） |
| [#66561](https://github.com/openclaw/openclaw/issues/66561) | openai-codex SSE 流开始后被本地中止，显示 408 超时 | P1 | 会话状态、消息丢失 | 无（linked‑pr‑open 不明确） |
| [#84059](https://github.com/openclaw/openclaw/issues/84059) | EmbeddedAttemptSessionTakeoverError 导致所有嵌入式代理失败 | P1 | 会话状态、消息丢失 | 无（live repro） |

**关键观察**：今日报告的严重 Bug 主要集中于会话状态一致性、消息丢失和回归问题，且相当一部分缺少修复 PR，维护者需优先投入资源。

---

## 6. 功能请求归类

| 类别 | 代表性 Issue | 诉求摘要 |
|------|--------------|----------|
| **安全加固** | [#18677](https://github.com/openclaw/openclaw/issues/18677) | 技能安装前安全扫描钩子 |
| | [#11829](https://github.com/openclaw/openclaw/issues/11829) | API 密钥防护路线图 |
| | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 文件系统沙箱配置（tools.fileAccess） |
| | [#8719](https://github.com/openclaw/openclaw/issues/8719) | v1.1 安全配置文件（数据中心、安全默认） |
| **成本控制** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 每代理日/月成本预算（网关层） |
| **插件/扩展** | [#66944](https://github.com/openclaw/openclaw/issues/66944) | 插件可向控制 UI 贡献原生页面 |
| | [#13364](https://github.com/openclaw/openclaw/issues/13364) | 暴露 before/after_tool_call 钩子 |
| | [#22358](https://github.com/openclaw/openclaw/issues/22358) | 子代理完成后的扩展钩子（post_subagent_complete） |
| **UI/UX** | [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 原生客户端 |
| **多代理** | [#63829](https://github.com/openclaw/openclaw/issues/63829) | 每代理独立记忆 wiki 库 |
| | [#66252](https://github.com/openclaw/openclaw/issues/66252) | 每代理 TTS/STT 配置覆盖 |
| | [#43260](https://github.com/openclaw/openclaw/issues/43260) | SKILL.md 中支持 model 字段进行技能级模型路由 |
| **自治/工作流** | [#27445](https://github.com/openclaw/openclaw/issues/27445) | 子代理完成 announce 可路由到父会话作为用户消息 |
| | [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook 钩子的多轮会话支持 |
| **其他** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置的流式 watchdog 超时阈值 |
| | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 允许 web_fetch 访问私有网络（opt-in） |

---

## 7. 用户反馈摘要

- **跨平台需求迫切**：Issue #75 自 1 月 1 日创建以来已积累 105 条评论、75 个 👍，用户反复表达对 Linux/Windows 客户端的需求，目前仍为 P2 待决策，社区不满情绪较高。
- **Windows 升级体验恶化**：#67035 的汇报者详细描述了升级后聊天 UI 在输入和流式显示上的严重退化，表示“这不像是简单的慢模型问题”，多位用户跟帖确认。
- **安全配置引发困惑**：#84038 中用户发现 `doctor --fix` 将 `openai-codex/` 配置静默迁移为 `openai/`，导致 token 消耗膨胀 3-4 倍，且破坏了 PI+OAuth 运行时，用户指出这是“已知上游问题但被自动迁移掩盖”。
- **心跳机制干扰正常会话**：多个 Issue（#65161、#64810）反映心跳在隔离模式下会打断正在进行的用户对话，甚至导致回复消失，用户期望心跳应完全透明。
- **MCP 工具配置不生效**：#80909 用户抱怨从 v4.26 到 v5.7 的所有稳定版中，MCP 服务器工具都无法出现在代理的 outbound `tools[]` 数组中，问题持续多个版本未解决。
- **嵌入式代理不可用**：#84059 用户升级后所有嵌入式代理均失败，错误为“session file changed while embedded prompt lock was released”，要求紧急修复。

---

## 8. 待处理积压

以下为长期未响应的关键 Issue 或 PR，建议维护者优先关注：

| 编号 | 标题 | 创建时间 | 最后活动 | 备注 |
|------|------|----------|----------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 2026-01-01 | 2026-05-19 | 105 条评论，P2 待决策，社区呼声最高 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 完全动态模型发现（OpenRouter 等） | 2026-02-06 | 2026-05-19 | 9 条评论，标注 maintainer，无 PR |
| [#7227](https://github.com/openclaw/openclaw/issues/7227) | 可访问性权限请求暴露所有 npm 包 | 2026-02-02 | 2026-05-19 | 安全 Bug，stale |
| [#18677](https://github.com/openclaw/openclaw/issues/18677) | Security Scan Hook API | 2026-02-16 | 2026-05-19 | stale，无维护者回应 |
| [#52075](https://github.com/openclaw/openclaw/pull/52075) | 澄清自定义移动客户端使用文档 | 2026-03-22 | 2026-05-20 | PR 标注 waiting on author，状态停滞 |
| [#69060](https://github.com/openclaw/openclaw/pull/69060) | 添加 x-openclaw-session 头部 | 2026-04-19 | 2026-05-20 | 部分解决 #68920，但 waiting on author |
| [#69312](https://github.com/openclaw/openclaw/pull/69312) | 防止 MEDIA: 从缩进代码块中误提取 | 2026-04-20 | 2026-05-20 | 标记 actively grinding，但长期未合并 |

---

**总结**：OpenClaw 社区在安全加固、跨平台支持和会话稳定性方面呼声强烈，今日发布的 alpha/beta 版本主要进行内部重构和依赖更新，未直接回应社区最关注的问题。多个 P1 Bug 缺少修复 PR，建议维护团队尽快分配资源解决 Windows UI 回归、配置迁移误伤和嵌入式代理不可用等紧急问题。

---

## 横向生态对比

好的，作为资深技术分析师，现基于您提供的2026-05-20各项目社区动态摘要，为您生成一份聚焦于事实与数据的横向对比分析报告。

---

### 1. 今日横向概览

今日，OpenClaw、NanoBot、ZeroClaw 和 PicoClaw 四个核心项目均处于活跃状态。OpenClaw 和 ZeroClaw 的 Issue 与 PR 提交量显著，主要集中在 Bug 修复、代码重构和功能请求讨论上。NanoBot 在 Provider 扩展和 WebUI 重构方面取得进展，而 PicoClaw 则发布了新的 Nightly 版本，重点修复了多项关键 Bug。社区讨论普遍聚焦于会话稳定性、安全加固和跨平台支持等方向，其中跨平台客户端和会话状态一致性问题在多个项目中均为热点。

### 2. 各项目活跃度对比

| 项目 | 今日 Issue 更新 | 今日 PR 更新 | 新 Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃 450, 关闭 50) | 500 (待合并 467, 已合并/关闭 33) | 2个 (alpha.1, beta.2) | 社区讨论活跃度最高，聚焦于安全、跨平台、稳定性。 |
| **NanoBot** | 31 (新开/活跃 4, 关闭 27) | 35 (待合并 12, 已合并/关闭 23) | 0 | 提交量中等，集中在 Provider 集成和 WebUI 重构。 |
| **ZeroClaw** | 8 (新开/活跃 6, 关闭 2) | 44 (待合并 41, 已合并/关闭 3) | 0 | PR 数量较多，主要源于 v0.8.0 分支的代码重构。 |
| **PicoClaw** | 9 (新开/活跃 4, 关闭 5) | 19 (待合并 10, 已合并/关闭 9) | 1 (Nightly版本) | 提交量稳定，重点在 Bug 修复和新功能支持（如OpenVINO）。 |

### 3. OpenClaw 与同类对照

- **活动量与讨论广度**：OpenClaw 的 Issue 与 PR 数量远超其他三个项目（且多为新开），显示了其作为“核心参照”项目的巨大社区活跃度和更广泛的用户基数。其讨论覆盖安全路线图、跨平台客户端、成本控制、插件机制等高级议题，社区成熟度明显更高。
- **技术重点**：OpenClaw 今日的重点是内部重构（代理逻辑清理）和依赖更新，同时面临多个 P1 级别的会话/消息一致性 Bug。相比之下，NanoBot 和 PicoClaw 的重心仍在功能扩展（新 Provider）和 Bug 修复上，而 ZeroClaw 则在进行大规模架构重构（v0.8.0）。
- **社区诉求**：OpenClaw 社区对“Linux/Windows 桌面客户端”（#75）的呼声极高且持续时间长，这在其他三个项目中未形成同等规模的集中讨论。

### 4. 共同出现的技术方向

基于今日数据，以下方向在多个项目中被明确提出：

- **会话与消息稳定性**：
  - **OpenClaw**：多个 P1 Bug 报告了聊天 UI 回归、回复截断、消息静默丢失等问题。
  - **NanoBot**：存在 WebUI 打印内容错乱、对话自动关闭、会话历史无限增长等 Bug。
  - **ZeroClaw**：部分 Bug（如 #6771 安全策略误伤）间接影响正常工作流，但未直接报告会话一致性问题。
  - **PicoClaw**：报告了 Codex OAuth 后端下的空响应问题。

- **安全加固**：
  - **OpenClaw**：明确提出了技能安装前安全扫描钩子、API 密钥保护路线图和文件系统沙箱配置等高级需求。
  - **ZeroClaw**：用户报告安全策略误阻断自身技能（#6771）。
  - **PicoClaw**：用户报告了 `find /` 命令可绕过工作区沙箱枚举文件路径（#2688，已修复）。

- **本地化/私有化部署支持**：
  - **NanoBot**：新增了 Skywork、APIFree、StepFun 等国产 Provider，并修复了远程 Docker 部署的白名单访问问题。
  - **PicoClaw**：新增了对 Intel OpenVINO 模型服务器和自定义 GLM/Zai 模型 OpenAI 兼容端点的支持。

### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | 全能型 AI Agent 框架，强调插件、安全、多代理协作，社区讨论覆盖从底层架构到上层 UI/UX 的广泛议题。 | 个人 AI 助手优先，快速集成多种 AI 服务和 Provider，注重 WebUI 体验和单/多容器部署便捷性。 | 专注 Multi-Agent 编排与长期记忆，通过“梦境模式”等技术探索持续的上下文学习。 | 轻量化边缘部署，聚焦于低功耗设备（如树莓派），支持多种后端（OpenVINO, Codex OAuth等）和通道（Discord）。 |
| **目标用户** | 高级开发者、深度定制需求的组织，需要构建复杂、安全、可控的 Agent 系统。 | 个人开发者、快速原型验证者，希望快速搭建功能丰富的聊天机器人或助手。 | 研究人员、对长期记忆和复杂 Agent 协作场景感兴趣的开发者。 | 嵌入式开发者、IoT 设备用户、隐私敏感的本地化部署场景。 |
| **技术架构** | 核心架构复杂，有独立的`proxyline`、`Pi`包，支持插件SDK/API，社区讨论涉及网关、断路器、心跳隔离等高级概念。 | 采用模块化设计，易于集成新 Provider，Gateway 冷启动优化显著。 | 正进行 v0.8.0 大规模架构重构，统一频道`Allowlist`，探索安全执行隔离（`air-gapped`）。 | 代码库相对轻量，以 Nightly 构建快速迭代，修复具体 Bug 和适配新硬件的速度较快。 |

### 6. 社区活跃度记录

- **极高活跃**：**OpenClaw**。其 Issue/PR 数量、社区讨论热度、涉及议题的广度与深度均远超其他项目，今日发布的 alpha/beta 版本也表明其开发节奏较快。
- **中等活跃**：**NanoBot** 和 **ZeroClaw**。两个项目提交量相当（NanoBot: 66条，ZeroClaw: 52条），均有清晰的技术演进方向（NanoBot 扩展生态，ZeroClaw 重构架构）。NanoBot 无新版本发布，但其 PR 合并速度（23条）显示出较高的迭代效率。
- **中等偏低活跃**：**PicoClaw**。提交总量为 28 条，发布了 Nightly 版本，Bug 修复（9条PR合并）是其主要活动，社区讨论规模较小。

### 7. 有证据支撑的观察

1.  **会话稳定性和安全性是社区最迫切的两大需求**：OpenClaw 的多个 P1 Bug 和社区热点讨论，以及 NanoBot、ZeroClaw、PicoClaw 报告的类似问题，共同指向了这个结论。这并非单一项目的孤立问题，而是整个 AI Agent 开源生态面临的核心挑战。

2.  **跨平台客户端支持需求在主流项目中未被充分满足**：OpenClaw 的 Issue #75 已开放超过4个月，获得 75 个 👍 和 105 条评论，社区呼声极高，但维护者反馈依然停留在“P2 待决策”。这显示出功能规划与社区核心诉求之间存在明显脱节。

3.  **项目间技术方向开始出现分化**：OpenClaw 和 NanoBot 更注重通用性、生态集成和平台能力；ZeroClaw 则明确向 Multi-Agent 和长期记忆方向深耕；PicoClaw 则聚焦于边缘计算场景。这种分化有助于满足不同细分市场的需求，但也可能意味着各项目社区间的共识度降低。

4.  **“成本控制”正从功能请求升级为高频痛点**：OpenClaw 社区明确提出“每代理成本预算”的请求，而 NanoBot 也已开发 `/insights` 命令用于追踪 Token 用量。这反映出随着 AI Agent 应用的深入，运行成本的可观测性和可管理性正成为用户的核心关切点。

5.  **今日暂无明确跨项目信号表明项目间存在直接的技术集成或协作**：各项目的发展路径相对独立，未观察到有直接的代码共享、功能嫁接或联合社区活动的迹象。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-20)

## 1. 今日活动概览

过去24小时内，NanoBot 项目共产生 **31 条 Issue 更新**（新开/活跃 4 条，已关闭 27 条）和 **35 条 PR 更新**（待合并 12 条，已合并/关闭 23 条）。社区在 Bug 修复、Provider 扩展和性能优化方面保持活跃，但无新版本发布。值得注意的变化包括：Gateway 冷启动优化 PR 将启动时间从 ~6.9s 降至 ~385ms；WebUI 设置页面被重构为分类控制中心；多个新 Provider（Skywork、APIFree、StepFun）已完成合并。

## 2. 版本发布

无。

## 3. 项目进展

今日合并或关闭的重要 PR 如下：

- **#3919** 修复 shell 工具中 `restrictToWorkspace` 的 bug，确保限制生效时能正确阻止针对子目录的命令。
  https://github.com/HKUDS/nanobot/pull/3919

- **#3916** 将 Skywork 注册为一级 OpenAI 兼容 Provider，自动在 WebUI 设置中展示并提供配置入口。
  https://github.com/HKUDS/nanobot/pull/3916

- **#3915** 添加 APIFree 作为内置 Provider，支持 `skywork-ai/skyclaw-v1` 等模型。
  https://github.com/HKUDS/nanobot/pull/3915

- **#3910** 添加 StepFun（阶跃星辰）图像生成 Provider，支持 `step-image-edit-2` 和 `step-1x-medium` 模型。
  https://github.com/HKUDS/nanobot/pull/3910

- **#3914** 将图像生成 Provider 代码从单一文件拆分为按 Provider 分模块的包，提升可维护性。
  https://github.com/HKUDS/nanobot/pull/3914

- **#3894** 修复 WebUI 工具调用轨迹显示问题，现在 `end` 和 `error` 阶段也能被正确渲染。
  https://github.com/HKUDS/nanobot/pull/3894

- **#3906** 升级 WebUI 设置页面为应用风格的控制中心，新增外观、模型、Provider、运行时等分类。
  https://github.com/HKUDS/nanobot/pull/3906

- **#3854** 为 WebUI bootstrap 端点添加 peer 发现注入，支持多实例编排场景。
  https://github.com/HKUDS/nanobot/pull/3854

- **#3891** 为 WebUI 添加 `bootstrap_allow_from` 配置项，允许远程 Docker 部署用户通过 IP/CIDR 白名单访问。
  https://github.com/HKUDS/nanobot/pull/3891

- **#3621** 引入多 Agent 编排方案，适用于 Hugging Face Spaces 单容器部署，展示四个角色的 Agent Squad。
  https://github.com/HKUDS/nanobot/pull/3621

此外，以下开放 PR 正在推进：
- **#3918** Gateway 冷启动优化（~6.9s → ~385ms，94% 提升）。
  https://github.com/HKUDS/nanobot/pull/3918
- **#3920** 上下文压缩 Benchmark 框架及优化 prompt。
  https://github.com/HKUDS/nanobot/pull/3920
- **#3852** 新增 Signal 渠道支持。
  https://github.com/HKUDS/nanobot/pull/3852
- **#3913** 多 Agent 集成展示 “Nanobot Legion”。
  https://github.com/HKUDS/nanobot/pull/3913
- **#3735** `/insights` 命令用于历史 token 用量追踪。
  https://github.com/HKUDS/nanobot/pull/3735

## 4. 社区热点

- **#3790** WebUI 会话打印内容显示错乱（14 条评论）
  用户反馈更新至 5.13 版本源码后，WebUI 会话内容打印后显示错乱需刷新恢复。该 Issue 标记为“open + stale”，尚无合并修复，前段渲染回归值得关注。
  https://github.com/HKUDS/nanobot/issues/3790

- **#193** Ollama API 支持请求（14 条评论，已关闭）
  用户询问是否支持 Ollama API，目前仅看到 vLLM 支持。同日 README 更新中增加了本地 Provider 设置指南并显式链接到 Ollama，间接回应了该需求。
  https://github.com/HKUDS/nanobot/issues/193

- **#2463** 架构问题：不保留精确 prompt 前缀（11 条评论，已关闭）
  用户指出 nanobot 持久化的对话历史与发送给模型的 prompt 前缀不一致，造成与 OpenAI 协议的冲突。虽已关闭但未明确解决方案，可能影响其他模型兼容性。
  https://github.com/HKUDS/nanobot/issues/2463

- **#1692** Telegram 机器人重复回答（9 条评论，4 👍，已关闭）
  用户收到两次回复（一次带 markdown 渲染，一次不带）。该 Issue 已关闭，推测已修复。
  https://github.com/HKUDS/nanobot/issues/1692

## 5. Bug 与稳定性

按影响程度排列：

- **#3790** WebUI 会话打印内容显示错乱（OPEN）
  直接影响用户交互体验，属回归 bug，尚无修复 PR。
  https://github.com/HKUDS/nanobot/issues/3790

- **#3884** WebUI 对话在第一次回复后自动关闭（OPEN）
  Debian 服务模式下，WebUI 对话在首次回复后关闭。开发者已在调查。
  https://github.com/HKUDS/nanobot/issues/3884

- **#3907** 思考模式渲染问题（CLOSED）
  使用 DeepSeek v4-pro 时，推理内容逐词换行显示，原因是 `IncrementalThinkExtractor` 未做行缓冲合并。已于 5-20 关闭，表明已修复。
  https://github.com/HKUDS/nanobot/issues/3907

- **#3901** X checking 任务陷入工具调用死循环（CLOSED）
  用户尝试设置 cron 任务检查 X 帖子，但 bot 达到最大工具调用迭代次数。虽已关闭，但反映 agent 工具终止条件仍需改进。
  https://github.com/HKUDS/nanobot/issues/3901

- **#3863** 微信登录提示版本过低（CLOSED）
  用户微信扫码登录失败，但本身已是最新版本。已关闭但未给出根因。
  https://github.com/HKUDS/nanobot/issues/3863

- **#2638 / #3029** 会话历史无限增长导致 agent 无响应（均 CLOSED）
  多位用户报告当内存压缩失败时，上下文持续增长直至超出模型窗口，agent 静默失败。各获 2 👍，表明该问题是社区共同痛点。
  https://github.com/HKUDS/nanobot/issues/2638
  https://github.com/HKUDS/nanobot/issues/3029

今日合并的修复 PR：**#3919**（shell tool restrict）、**#3894**（WebUI tool trace）、**#3869**（开放 PR，解决 DeepSeek null content）。

## 6. 功能请求归类

以下为今日活跃的用户

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-05-20

## 今日活动概览

过去 24 小时内，ZeroClaw 仓库共产生 8 条 Issue 更新（6 条新开/活跃、2 条已关闭），44 条 PR 更新（41 条待合并、3 条已合并/关闭），无新版本发布。社区提交量较大，主要集中于 v0.8.0 分支的代码重构（如频道 allowlist 统一迁移）和两个高影响 Bug 的修复。核心 Issue 讨论热度最高的是“梦境模式”长期记忆功能（#5849），当前已有 10 条评论。

## 项目进展

### 已合并/关闭的 PR（共 3 条）

- **#6776** — [fix(web): 0.8.0 ui fixes](https://github.com/zeroclaw-labs/zeroclaw/pull/6776)
  由 @ilteoood 提交，修复了 0.8.0 版本 Web UI 中 reload banner 文字对齐问题（居中对齐）。该 PR 已在今天被合并/关闭。

其他 2 条已合并/关闭的 PR 未在本日数据列表中展示，推测为小范围修正或文档更新。

### 重要开放 PR

- **#6398** — [v0.8.0: Multi-Agent Runtime and Schema V3](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)
  一个超大体量的合并请求，涵盖内核、渠道、配置、安全、测试等几乎所有模块的改动，旨在将 v0.8.0 分支作为 Beta 版基线的候选。当前标记为“SEEKING APPROVAL”，需要维护者批准。

- **#6238** — [fix(channel): persist WeChat context_tokens and expand tilde in config paths](https://github.com/zeroclaw-labs/zeroclaw/pull/6238)
  修复 WeChat 渠道重启后丢失 `context_tokens` 导致重复扫码的问题，同时添加 `expand_tilde_in_path()` 辅助函数。

- **#6777** — [fix(memory): purge_namespace deletes by namespace, not category column](https://github.com/zeroclaw-labs/zeroclaw/pull/6777)
  对应 Bug #6801，将 `SqliteMemory::purge_namespace` 中错误的 `DELETE FROM memories WHERE category = ?1` 改为使用正确的 `namespace` 字段。

- **#6800–#6788**（共约 20 条 PR）— 由 @yijunyu 提交的批量 PR，将各频道（Slack、Telegram、WhatsApp、Discord 等）手工编写的 allowlist 校验函数统一迁移到 `aspect_std::AllowlistAspect` 框架下。这些 PR 注明属于「ICSE 2027 M1 评估」的一部分，表明该项目正在进行代码架构的标准化重构。

## 社区热点

### 最活跃 Issue

- [**#5849** [Feature]: Dream Mode — Periodic Memory Consolidation & Reflective Learning](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)
  创建于 4 月 18 日，过去 24 小时仍有新评论（共 10 条），被标记为 `priority:p1`、`status:accepted`。社区用户希望 ZeroClaw 在空闲时段自动进入“梦境模式”，对当天记忆进行压缩、反思并更新长期知识。该请求涉及 memory、cron、heartbeat 等多个模块，影响面较广。

### 值得关注的讨论

- [**#6771** [Bug]: Multiline Heredocs incorrectly blocked by SecurityPolicy](https://github.com/zeroclaw-labs/zeroclaw/issues/6771)
  标记为 `S1 - workflow blocked`，用户报告 ZeroClaw 的安全策略阻止了其自身推荐的技能（使用 heredoc 创建 PR），导致工作流中断。这暴露了安全沙箱与内置技能之间的兼容性缺陷，可能影响日常开发效率。

## Bug 与稳定性

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) | Multiline Heredocs incorrectly blocked by SecurityPolicy | S1 - workflow blocked | OPEN | 无 |
| [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) | purge_namespace deletes by category column on integration/v0.8.0 | S2 - degraded behavior | OPEN | [#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) |

- #6801 为今天新建的 Bug，`SqliteMemory::purge_namespace` 方法实际执行了错误的 SQL（使用了 `category` 列而非 `namespace` 列），属于代码重构过程中引入的语义错误。对应修复 PR #6777 已经提交。
- #6771 尚无关联 PR，但其造成的“工作流阻塞”问题如果普遍存在，可能影响用户对技能的采用。

## 功能请求归类

- **#5849** — [Dream Mode: 空闲时期记忆压缩与反思学习](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)
  请求新增后台进程，在空闲时合并短期记忆并更新长期知识结构。`priority:p1`, `status:accepted`。

- **#6293** — [Air-gapped execution mode with companion daemon over unix socket](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)
  请求将 ZeroClaw 拆分为离线代理容器和在线伴生守护进程，通过 Unix socket 通信，实现仅允许经过批准的 ACP/MCP 服务器的网络访问。`priority:p2`, `status:blocked`, `needs-maintainer-review`。

- **#6770** — [`zeroclaw channel list` should only show channels compiled into the current build](https://github.com/zeroclaw-labs/zeroclaw/issues/6770)
  用户认为 `channel list` 命令应仅显示当前编译时启用了 Cargo feature 的渠道，而非全部列出。该请求属于 CLI 体验优化。

- **#6253** — [Track: zeroclaw skills support and UX (v0.7.6)](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)
  v0.7.6 版本的技能支持和用户体验改进跟踪 issue，涵盖 CLI、加载器、审计、安装路径、沙箱、测试框架和技能创作工具。`priority:p1`, `status:accepted`。

## 用户反馈摘要

- 在 #6771 中，用户抱怨 ZeroClaw 的安全策略阻止了其自身推荐的创建 PR 的技能，指出这是一种“自锁”问题：“ZeroClaw's own security policy prevents ZeroClaw from using ZeroClaw's prescribed skill for raising a PR。” 这反映了安全沙箱规则与内置技能白名单之间的不一致。
- 在 #5849 的评论中（具体内容未提供，但摘要明确），社区对“梦境模式”的认知记忆整合功能表现出浓厚兴趣，认为这是 ZeroClaw 实现持续学习能力的关键特性。
- 已关闭的 #1458（本地 CA 证书支持）在过去 24 小时内有 5 条评论，说明自定义推理端点证书信任仍是部分用户的刚需，尤其是在私有化部署场景。

## 待处理积压

以下为长期未得到维护者明确回复或进展缓慢的高优先级 Issue：

- **#5849** (Dream Mode, p1, accepted) 自 4 月 18 日创建以来已有超过一个月，虽然社区持续评论，但尚未分配具体实现计划。
- **#6293** (Air-gapped mode, p2, blocked) 标有 `needs-maintainer-review`，自 5 月 3 日创建后仅 2 条评论，至今无官方回应。
- **#6253** (Skills tracking, p1, accepted) 作为 v0.7.6 的协调 issue，当前仍处于开放状态，相关 PR 未见具体关联。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-20)

## 今日活动概览

过去24小时内，项目共收到9条Issues更新（新开/活跃4条，关闭5条），19条PR更新（待合并10条，已合并/关闭9条），并发布了1个新的Nightly版本（v0.2.8-nightly.20260520.639b3270）。核心变化包括：修复了多个关键Bug（如DeepSeek流式reasoning丢失、Singleton PID检查不完善），新增了对Intel OpenVINO模型服务的支持以及通用流式传输（Streaming）的配置化能力，同时社区对Codex OAuth空响应、上下文记忆增强等问题的讨论持续活跃。

## 版本发布

- **Nightly Build (v0.2.8-nightly.20260520.639b3270)**
  自动构建，可能不稳定。完整变更日志：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。建议谨慎使用。

## 项目进展

今日合并/关闭了9个PR，其中重要的功能推进和修复包括：

- **#317 – Discord mention_only 选项**：支持仅在@提及后响应（[链接](https://github.com/sipeed/picoclaw/pull/317)）
- **#82 – 为GLM/Zai模型添加OpenAI兼容端点支持**：允许自定义API地址如Chutes.ai（[链接](https://github.com/sipeed/picoclaw/pull/82)）
- **#2740 – 修复DeepSeek流式中reasoning_content丢失**：补全流解析逻辑（[链接](https://github.com/sipeed/picoclaw/pull/2740)）
- **#2703 – 添加Intel OpenVINO模型服务器支持**：用于本地LLM推理（[链接](https://github.com/sipeed/picoclaw/pull/2703)）
- **#2491 – 新增会话管理命令 /status, /compact, /new**：便于手动管理上下文（[链接](https://github.com/sipeed/picoclaw/pull/2491)）
- **#2892 – 通用流式传输支持**：通过配置化双选模式启用（[链接](https://github.com/sipeed/picoclaw/pull/2892)）
- **#2761 – 同步subagent支持agent_id**：可显示选择子代理（[链接](https://github.com/sipeed/picoclaw/pull/2761)）
- **#2755 – 流式reasoning_content与视频媒体支持**：增强多模态（[链接](https://github.com/sipeed/picoclaw/pull/2755)）
- **#2888 – 修复工具配置加载图片反应**（[链接](https://github.com/sipeed/picoclaw/pull/2888)）

## 社区热点

- **Issue #2674 – Codex OAuth空响应**（[链接](https://github.com/sipeed/picoclaw/issues/2674)）
  获得4个👍，5条评论。用户反馈使用ChatGPT后端时，assistant返回空响应，即使模型有正常输出。讨论集中在流式事件`response.output_item.done`的处理上，尚未有对应修复PR。

- **Issue #1934 – Agent Refactor Phase 2（多代理协作）**（[链接](https://github.com/sipeed/picoclaw/issues/1934)）
  7条评论，长期Meta议题。维护者正在规划Phase 2目标，社区对「单Pico内多代理协作」「代理记忆」等方向表示关注。

- **PR #2897 – 持久化并显示model_name**（[链接](https://github.com/sipeed/picoclaw/pull/2897)）
  今日新提交，目标是在聊天历史、API、Web UI中统一保留模型名称，引起活跃讨论（暂无评论数）。

## Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|----------|-------|------|------|
| 高 | #2720 | Singleton PID检查只验证PID存在但不验证进程身份，导致stale PID造成启动崩溃循环 | 开放，已有修复PR #2813待合并 |
| 高 | #2688 | `find /`命令可绕过工作区沙箱枚举全路径文件 | 已关闭（推测已修复） |
| 中 | #2674 | Codex OAuth空响应（见社区热点） | 开放，无修复PR |
| 中 | #1757 | 定时任务报频道错误，用户使用v0.2.3 + GLM模型 | 已关闭（可能是用户配置问题） |
| 中 | #2753 | 从源码构建后缺少launcher二进制文件 | 已关闭 |
| 低 | #2771 | 配置文件示例过时，迁移体验需优化 | 已关闭 |

今日未发现明显回归问题。注意#2720的修复PR #2813（已更新）仍未合并，需维护者关注。

## 功能请求归类

以下为用户提出的新功能需求及相关PR（仅记录证据，不预测路线图）：

- **上下文记忆管理**（#2774）：受opencode插件启发，要求Agent具备缓存感知无限上下文、跨会话记忆、后台历史压缩。无对应PR。
- **显式异步结果交付策略**（#2829 / PR #2830）：spawn子代理后避免父代理不必要的第二次回合。PR #2830已提交待合并。
- **Web搜索工具YAML配置支持**（#2616 / PR #2647）：启用DuckDuckGo为默认提供者，PR待合并。
- **减少Skill Catalog Token消耗**（PR #2781）：优化LLM系统提示字数，减少中间工具调用回合的重复注入，PR待合并。
- **会话消息级时间戳**（PR #2788）：为每个消息添加created_at，PR待合并。
- **持久化model_name**（PR #2897）：已提交（见社区热点）。
- **统一provider元数据**（PR #2896）：将后端目录作为主数据源，减少维护成本，今日新提交。
- **SeaHorse上下文预算修复**（PR #2895）：修复fresh tail超出预算问题，今日新提交。
- **通道标识与名称解耦**（PR #2551）：允许多个同类型提供者实例，PR长期开放（4月16日创建，有stale标签）。

## 用户反馈摘要

从Issues评论中提炼的关键用户反馈：

- **定时任务可靠性**（#1757）：用户使用Raspberry Pi Zero W + Telegram频道，请求Agent每小时执行任务时出现频道错误，且无法通过重新启动解决。社区建议检查频道路由或升级版本。
- **空响应困惑**（#2674）：用户报告Codex OAuth提供商下模型正常输出但PicoClaw显示空响应，认为可能是流式事件处理缺陷，期待官方修复。
- **PID文件残留**（#2720）：用户遇到系统进程（如systemd-resolved）复用PID导致网关无法启动，认为检查逻辑过于简单，建议增加进程名验证。
- **安全沙箱绕过**（#2688）：用户惊讶地发现`find /`命令能列出整个文件系统的路径，认为安全边界不完整，已收到维护者感谢并修复。
- **构建体验**（#2753）：用户按README源码安装后未生成launcher二进制，认为文档与构建脚本需要同步更新。
- **配置迁移**（#2771）：用户指出示例配置仍为V2格式，建议自动迁移提示、备份恢复、diff预览等UX改进。
- **子代理结果重复**（#2829）：用户描述spawn子代理后父代理会再次处理同一结果，导致不必要的第二轮对话，期望可配置的交付策略。

## 待处理积压

以下为长时间未合并或未响应的关键Issue/PR，建议维护者关注：

- **#1934 – Agent Refactor Phase 2 Meta Issue**：长期开放，已积累7条评论，规划中。
- **#2674 – Codex OAuth空响应**：4个👍，5条评论，无修复PR，社区期望较高。
- **#2720 – PID检查修复（PR #2813）**：PR提交已两周，但未合并，可能需review。
- **#2829 – 异步交付策略（PR #2830）**：PR待合并，需评估是否能解决父代理重复问题。
- **#2551 – 通道标识解耦**：4月16日创建，无近期活动，有stale标签。
- **#2647 – Web搜索YAML配置**：4月24日创建，PR待合并。
- **#2788 – 消息时间戳**：5月6日创建，PR待合并。
- **#2781 – Skill Catalog Token优化**：5月6日创建，PR待合并。

---

> 本日报基于GitHub数据自动生成，仅反映项目公开活动，不包含未公开的决策或预测。

</details>