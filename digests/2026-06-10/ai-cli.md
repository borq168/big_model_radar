# AI CLI 工具社区动态日报 2026-06-10

> 生成时间: 2026-06-10 02:36 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具社区动态横向对比分析报告（2026-06-10）

## 1. 今日横向概览

今日（2026-06-10）六个主流 AI CLI 工具社区均保持了较高活跃度，其中 **Claude Code** 因 Fable 5 模型发布引发了大量 Bug 报告（安全分类器回退、数据丢失等），**OpenAI Codex** 与 **Gemini CLI** 各发布一个正式版，前者聚焦 Web 搜索集成与工具输入模式，后者修复 PTY 崩溃。**OpenCode** 与 **Qwen Code** 虽然未发布正式版，但各有大量 PR 合入（如 OpenCode 的 ACP 客户端编辑审查、Qwen Code 的 Agent Team 实验特性）。**GitHub Copilot CLI** 的 v1.0.61 主要打磨 Agents 界面。**Kimi Code CLI** 社区规模最小，仅更新 2 条 Issue 和 1 条 PR。终端复制粘贴问题、模型选择受限、会话可靠性成为跨工具共现的高频痛点。

## 2. 各工具活跃度对比

| 工具 | 当日 Release 数 | 当日新增/更新 Issue 数* | 当日新增/更新 PR 数* | 社区最强信号（点赞/评论） |
|------|----------------|------------------------|---------------------|-------------------------|
| Claude Code | 1 (v2.1.170) | 10 (热点) | 9 | #65697 Linux 桌面版获 406 👍 |
| OpenAI Codex | 4 (含 v0.139.0) | 10 (热点) | 10 | #24391 Windows 沙箱崩溃 25 👍 |
| Gemini CLI | 4 (含 v0.46.0) | 10 (热点) | 10 | #27417 Agent 不听话 (社区热议) |
| GitHub Copilot CLI | 1 (v1.0.61) | 10 (热点) | 1 | #53 命令兼容性 75 👍 |
| Kimi Code CLI | 0 | 2 | 1 | #640 文件读取循环 (7 条评论) |
| OpenCode | 0 | 10 (热点) | 10 | #20695 内存问题 64 👍 |
| Qwen Code | 2 (预览版) | 10 (热点) | 10 | #4615 MCP 安全审批 (新建即热门) |

*注：Issue 和 PR 数据来源于各日报中列入的“社区热点”和“重要 PR”数量，并非仓库完整计数。

## 3. 共同出现的功能方向

以下需求在 ≥3 个工具社区中同时出现：

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **终端复制粘贴失效** | Claude Code (#62699), Copilot CLI (#2082), OpenCode (#13984) | Linux 和 TUI 模式下 `Ctrl+Shift+C` 无法复制输出文本 |
| **模型选择/可见性受限** | Claude Code (#66757), Copilot CLI (#1703), OpenCode (#5674), Qwen Code (#4904) | CLI 不展示企业已启用的模型、无法自由切换非 Opus/Gemini 模型 |
| **会话/历史可靠性** | Claude Code (#66734), Codex (#20741), Gemini CLI (#27770), Qwen Code (#30662) | 更新后聊天历史消失、会话 JSONL 数据覆写、会话恢复时认证丢失 |
| **安全与权限管理** | Claude Code (#66359), Gemini (#22672), OpenCode (#2242), Qwen Code (#4615) | 插件注入、Agent 破坏性行为、沙箱隔离、MCP 配置需审批 |
| **跨平台兼容性** | Claude Code (Linux 桌面版 #65697), Codex (Windows 沙箱 #24391), Gemini (Wayland #21983), Qwen Code (Windows 安装 #4903) | Linux 缺少桌面版/剪切板、Windows 沙箱崩溃/进程锁、Wayland 子 Agent 故障 |
| **内存/性能问题** | Gemini (#27460 8.6GB 高内存), OpenCode (#20695 内存泄漏线程), Qwen Code (#4810 AbortSignal 泄漏) | Agent 占用过高内存、输出渲染卡顿 |

## 4. 差异化定位分析

| 工具 | 核心差异化 | 目标用户 | 技术路线重点 |
|------|-----------|---------|------------|
| **Claude Code** | 以 Fable 5 模型为卖点，强调 Agent 自主性与插件市场 | 追求模型能力前沿的开发者 | 模型更新驱动 + 插件生态，但新模型稳定性待打磨 |
| **OpenAI Codex** | 官方 Web 搜索集成、工具输入模式增强、Pro 计划配额透明化 | Pro 用户和企业开发者 | Rust 重写核心 + 频繁发布 alpha，强调效率与成本控制 |
| **Gemini CLI** | 子 Agent（浏览器 Agent）与技能系统，Agent 决策边界可控 | 需要多 Agent 协作和自定义扩展的开发者 | 重视 Agent 行为安全（阻止破坏性操作），修复 PTY/会话恢复 |
| **GitHub Copilot CLI** | 企业级 BYOK、组织模型列表、MCP 服务器集成 | GitHub Copilot 企业客户 | 稳定版本迭代，关注回归问题和键盘兼容性，插件钩子系统 |
| **Kimi Code CLI** | 极简功能集，适配自定义 Anthropic 端点和 k2.6 模型 | 小型团队或独立开发者 | 社区规模小，修复优先级低，主要依靠外部 PR 改进 |
| **OpenCode** | 开放自定义提供商、Agent 沙箱讨论、付费流程争议 | 开源社区和本地 LLM 用户 | 社区驱动，内存问题集中追踪，ACL/ACP 协议兼容，退款问题突出 |
| **Qwen Code** | Daemon 模式（ACP 协议）、Agent Team 实验性协作、Sub-Agent 功能 | 使用 Qwen 模型且需要 IDE 集成的高级用户 | 快速迭代 Daemon/AI 协议兼容，MCP 安全审批，Windows 安装修复 |

## 5. 社区活跃度记录

- **最活跃（发布+Issue+PR 密度高）**：**Claude Code、OpenCode、Qwen Code** — 三者均有大量 PR 合入（≥9）和高热度 Issue（≥64👍）。
- **版本发布频繁**：**OpenAI Codex**（4 个版本）、**Gemini CLI**（4 个版本），但部分为 alpha/preview，正式版少。
- **维护者响应积极**：**Qwen Code** 的 PR 来自多名 contributor（chiga0、yiliang114 等），**Gemini CLI** 的安全修复（目录遍历）和 MCP 编码修复快速合入。
- **社区规模小但稳定**：**Kimi Code CLI** 仅 2 个 Issue 但仍有活跃维护（PR 来自 @zwpdbh）。
- **争议性 Issue**：**OpenCode** 的退款争议（#26508、#29182）造成负面社区情绪，**Claude Code** 的 Fable 5 安全分类器回退引发信任危机。

## 6. 有证据支撑的观察

1. **终端复制粘贴是跨工具高频失效点**：Claude Code（Linux）、Copilot CLI（Linux）、OpenCode（CLI 无输出）均报告同一问题，且长期未修复。这反映 TUI 模式下剪贴板集成（OSC52/系统剪贴板）仍是通用技术债。

2. **模型选择与 Provider 管理成为企业级瓶颈**：Claude Code、Copilot CLI、Qwen Code 的用户都抱怨 CLI 不显示组织启用的新模型或无法自由切换。这表明 CLI 的模型列表同步机制落后于 IDE 扩展，影响企业采购决策。

3. **新模型发布伴随高密度 Bug 报告已成规律**：Claude Code 的 Fable 5 在发布当日即出现安全分类器回退、假阳性误判、API 兼容性失败等 4 个严重 Bug；OpenAI Codex 的 gpt-5.5 也导致配额消耗异常。显示 CLI 团队对新模型的集成测试不够充分。

4. **Agent 自主性与用户控制权矛盾突出**：Gemini CLI 的 #27417（Agent 不听指令）、OpenCode 的 #2242（缺乏沙箱）、Claude Code 的 #66359（提示注入）均指向同一诉求：用户希望 Agent 在授权范围内执行，并能随时干预破坏性行为。

5. **Windows/Linux 体验差距持续存在**：Claude Code 缺乏 Linux 桌面版（406👍）、Copilot CLI 在 Linux 和 Windows 的键盘快捷键不兼容、Codex 的 Windows 沙箱反复崩溃、Qwen Code 特别修复 Windows 安装。macOS 是当前最佳平台，跨平台一致性仍是各工具的共同短板。

**今日暂无明确跨工具信号**：关于“AI CLI 将成为 IDE 替代”或“成本控制成为核心竞争维度”等观点，今日数据中各工具虽有提及（如 Codex 配额消耗、OpenCode 退款），但证据尚不足以形成趋势判断。各工具仍以修 Bug 和补功能为主，未出现明确的生态分化信号。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是为您生成的 2026-06-10 Claude Code 社区动态日报。

---

## 🗞️ **Claude Code 社区动态日报 | 2026-06-10**

**今日更新概览**

今日社区高度活跃，核心关注点围绕全新发布的 **Claude Fable 5 模型** 进行大规模测试，同时，大量错误报告集中在数据持久性、模型行为稳定性（特别是 Fable 5 的安全分类器）以及 Linux 平台体验上。此外，社区对**官方 Linux 桌面版**的呼声持续高涨，已获得超过 400 个赞。

### 🚀 **版本发布**

- **v2.1.170**: 此版本的核心亮点是引入了全新的 **Claude Fable 5** 模型。官方博客宣称其为“Mythos 级”模型，能力超越此前所有可用模型。此版本同时修复了 `session` 相关问题。
    - [发布链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.170)

### 📌 **社区热点 Issues**

1.  **[FEATURE] Official Claude Desktop build for Linux (Ubuntu LTS / Debian)**
    社区对官方 Linux 桌面客户端的需求极为强烈，该 Issue 获得了 **406 个赞**，并持续有 31 条评论，是社区目前呼声最高的功能请求。
    - **影响场景**: Linux 用户的桌面集成体验。
    - **范围与评论**: 评论者普遍认为缺乏官方桌面版是 Linux 生态的最大短板。
    - [Issue #65697](https://github.com/anthropics/claude-code/issues/65697)

2.  **[BUG] Claude Code Desktop fails to Relaunch on Windows due to orphaned process file lock**
    一个严重的 Windows 平台Bug，导致桌面应用在重启后因进程文件锁未释放而无法启动。评论数高达 **86** 条，说明大量用户受到影响。
    - **影响场景**: Windows 桌面应用的日常使用。
    - **范围与评论**: 用户报告重启后应用无法自动恢复，必须手动结束进程，体验极差。
    - [Issue #42776](https://github.com/anthropics/claude-code/issues/42776)

3.  **[BUG] Session JSONL rewritten in-place to metadata-only stub**
    一个严重的数据丢失Bug，会话 `.jsonl` 文件被覆写为仅含元数据的文件，导致无法恢复对话内容。
    - **影响场景**: 会话持久化与恢复功能。
    - **范围与评论**: 用户依赖会话日志进行工作复盘，数据丢失是不可接受的问题。
    - **数据支撑**: 这是一个涉及数据丢失的高优先级Bug。
    - [Issue #66734](https://github.com/anthropics/claude-code/issues/66734)

4.  **[BUG] Fable 5 safety classifier auto-switches to Opus mid-session**
    用户报告在授权范围内的安全测试中，Fable 5 的分类器会自动回退至 Opus 模型，导致测试中断且逻辑不一致。
    - **影响场景**: 安全研究人员使用 Fable 5 进行合规测试。
    - **范围与评论**: 评论指出此行为违反了由 Claude Code 处理的明确指示，属于模型行为缺陷。
    - [Issue #66641](https://github.com/anthropics/claude-code/issues/66641)

5.  **[BUG] Text cannot be copied from Claude Code's output using `Ctrl+Shift+C` or right-click context menu on Linux**
    Linux 用户反馈在 TUI 模式下无法复制输出文本，严重影响日常编码效率。
    - **影响场景**: Linux 环境下使用 Claude Code CLI 的开发者。
    - **范围与评论**: 这是 Linux 平台上的一个高频痛点，与缺少官方桌面版并列。
    - [Issue #62699](https://github.com/anthropics/claude-code/issues/62699)

6.  **[Bug] Unattributable prompt injection instruction detected in Claude Code session after plugin installation**
    用户在安装某插件后，检测到来源不明的提示注入指令，存在环境变量泄露风险。
    - **影响场景**: 使用第三方或社区插件的开发者。
    - **范围与评论**: 此事引发了社区对插件安全性的关注，用户呼吁更严格的沙箱和权限控制。
    - [Issue #66359](https://github.com/anthropics/claude-code/issues/66359)

7.  **[BUG] Regression in 2.1.163: cursor desync + progressive frame corruption in iOS SSH terminal**
    通过 iOS 设备（如 Secure ShellFish 客户端）远程 SSH 使用时，特定版本升级后出现光标不同步和屏幕渲染损坏。
    - **影响场景**: 通过移动设备进行远程开发的开发者。
    - **范围与评论**: 该Bug已被成功二分定位到 v2.1.163 版本，是近期一个明显的回归事件。
    - [Issue #65989](https://github.com/anthropics/claude-code/issues/65989)

8.  **[BUG] API 400: harness emits content block with type: "fallback"**
    一个核心的 API 兼容性问题，Claude Code 内部生成了 API 不支持的 `type: "fallback"` 内容块，导致会话永久不可恢复。
    - **影响场景**: 任何使用 Claude Code 的用户在遇到此问题时。
    - **范围与评论**: 用户需要强制删除 `message` 块才能恢复，修复难度较高。
    - [Issue #66760](https://github.com/anthropics/claude-code/issues/66760)

9.  **[FEATURE] Enable Remote Control for Claude Code sessions in Claude Desktop App**
    用户强烈要求能从桌面应用远程控制 Claude Code 会话，该功能请求获得了 **94 个赞**。
    - **影响场景**: 需要在桌面终端外监控或干预长时间运行任务的用户。
    - **范围与评论**: 社区期待类似 VS Code Remote 的体验。
    - [Issue #29006](https://github.com/anthropics/claude-code/issues/29006)

10. **[BUG] claude agents: cursor not visible in typing window on first session attach**
    Windows 11 用户在使用 `claude agents` 命令时，初次附加会话的输入窗口光标不可见，虽然可以打字，但严重影响编辑体验。
    - **影响场景**: Windows 用户使用 Agent 模式。
    - **范围与评论**: 属于特定平台上的UI/UX问题。
    - [Issue #66398](https://github.com/anthropics/claude-code/issues/66398)

### 🛠️ **重要 PR 进展**

1.  **[修复] fix(#66592): False positive: Usage Policy block on lattice gauge theory question (Fable 5)**
    由自动化工具 **REAPR** 提交，旨在修复 Fable 5 在回答学术物理问题时因安全分类器导致的误判。
    - [PR #66608](https://github.com/anthropics/claude-code/pull/66608)

2.  **[修复] fix(#66595): [BUG] Fable 5 safety classifier auto-switches to Opus mid-session**
    同样由 **REAPR** 提交，尝试修复 Fable 5 安全分类器在授权安全测试中自动切换模型的核心 bug。
    - [PR #66607](https://github.com/anthropics/claude-code/pull/66607)

3.  **[修复] fix(pr-review-toolkit): use full author name in plugin manifest**
    修正了 `pr-review-toolkit` 插件的作者名，使之与全局保持一致。
    - [PR #66650](https://github.com/anthropics/claude-code/pull/66650)

4.  **[修复] fix(marketplace): sync security-guidance version and description with plugin.json**
    同步插件市场中 `security-guidance` 条目的版本号和描述信息，修复不一致问题。
    - [PR #66577](https://github.com/anthropics/claude-code/pull/66577)

5.  **[修复] fix(ralph-wiggum): restore dead error handlers broken by set -euo pipefail**
    修复了 `ralph-wiggum` 插件中因 `set -euo pipefail` 导致的错误处理逻辑中断问题。
    - [PR #66573](https://github.com/anthropics/claude-code/pull/66573)

6.  **[修复] fix(plugin-dev): validator scripts abort on first finding due to `set -e`**
    修复了 `plugin-dev` 中多个验证脚本因 `set -e` 而在找到第一个错误后立即退出的问题。
    - [PR #66416](https://github.com/anthropics/claude-code/pull/66416)

7.  **[修复] fix(pr-review-toolkit): use full author name in plugin.json**
    另一个关于插件作者名修复的 PR，指向与 #66650 相同的问题。
    - [PR #66575](https://github.com/anthropics/claude-code/pull/66575)

8.  **[WIP] [BUG] Repeated "Image couldn't be processed" API errors consuming usage limit**
    针对 Issue #62466 的修复，旨在解决图片处理失败的 API 错误不断重试并消耗额度的 Bug。
    - [PR #66572](https://github.com/anthropics/claude-code/pull/66572)

9.  **[其他] 两个有争议或无有效描述信息的 PR** (#65723, #66608 的变体)，暂无更多详细分析。

### 📊 **功能需求归类**

1.  **Linux 平台支持**：社区对官方 Linux 桌面版（.deb）的呼声（#65697）是所有需求中最强的，与 Linux TUI 的复制粘贴问题（#62699）一同构成了 Linux 用户的核心诉求。
2.  **模型选择与透明度**：用户希望能在 Claude Code 中自由选择非 Opus 模型（如 Fable/Mythos）（#66757）。
3.  **成本控制与额度管理**：用户抱怨 Ultracode 模式在 Agent 协作场景下会“静默”消耗大量 Token 和额度（#66762），并请求限流感知的延迟调度功能（#59634）。
4.  **远程控制与集成**：对远程控制会话（#29006）、从 CLI/深度链接启动特定工作目录的桌面会话（#54614）等功能有明确需求。
5.  **插件与钩子系统增强**：用户希望能在无官方桌面版的 Linux 上安装/更新市场插件（#66750），并且要求增加响应文本输出的钩子（#37243）。
6.  **会话与工作流恢复**：关于删除 `/history` 命令后（#66754）以及因 API 错误（#66760）导致会话无法恢复的问题，反映出社区对会话健壮性的重视。

### 🧑‍💻 **开发者关注点**

1.  **数据可靠性是核心**：会话 JSONL 文件被覆写（#66734）和 PR 监控芯片无法清除（#66763）等问题，暴露了数据持久化方面的风险，开发者对此类问题容忍度极低。
2.  **新模型初期的信任挑战**：围绕 **Fable 5** 的几起报告（假阳性、安全分类器回退、幻觉用户输入(#66771)）表明，开发者对模型行为的稳定性和可信度要求极高，任何不确定性都会直接影响其采用率。
3.  **平台体验不均**：Windows（进程锁、启动失败、光标问题）和 Linux（缺乏桌面版、复制粘贴问题）的用户体验远落后于 macOS，这是开发者在跨平台使用时的主要痛点。
4.  **安全意识提升**：对“提示注入”的担忧（#66359）表明，随着插件生态的发展，安全性成为开发者关注的焦点。用户开始主动监控和报告此类问题。
5.  **对成本过度消耗的担忧**：“Ultracode”模式的高消耗（#66762）导致了功能滥用和额度耗尽的顾虑，用户希望有更明确的成本控制和监控机制。

**观察**：今日社区动态主要围绕 **Fable 5 新模型的发布与“磨合”** 展开。大量 Bug 报告直接指向该模型的安全分类器、行为稳定性和 API 兼容性。这表明，尽管模型能力被认为很强，但其“可用性”在当前阶段仍存在挑战，开发者社区正以极高的密度进行测试和反馈。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-06-10 OpenAI Codex 社区动态日报

## 今日更新概览

过去24小时内，Codex仓库发布了4个版本（含1个正式版和3个alpha），其中v0.139.0带来了直接调用Web搜索和增强工具输入模式的能力。社区讨论集中在多个与聊天历史丢失、Windows沙箱崩溃、Pro用户配额消耗异常相关的bug上，共有50个活跃Issue和50个PR被更新。

## 版本发布

- **rust-v0.139.0 (0.139.0)** 正式版发布
  - Code模式现在可以直接调用独立Web搜索（包括从嵌套JavaScript工具调用中触发），并返回纯文本搜索结果。
  - 工具和连接器输入模式保留 `oneOf` 和 `allOf` 结构，大模式在压缩时保留更多浅层结构。
- **rust-v0.140.0-alpha.2** ：继续推进0.140.0系列的实验性改动。
- **rust-v0.139.0-alpha.3 / rust-v0.139.0-alpha.2** ：早期测试版本，无详细变更说明。

## 社区热点 Issues

1. **#24391** — `[bug] Windows sandbox: spawn setup refresh fails on Codex CLI 0.133.0`
   - 用户反映升级CLI后Windows沙箱启动失败，已有44条评论和25个👍，影响大量Windows用户。
   → [链接](https://github.com/openai/codex/issues/24391)

2. **#20741** — `[bug] Codex Desktop project chat histories disappeared after recent update`
   - 更新后桌面端项目聊天历史完全消失，33条评论，涉及macOS用户。
   → [链接](https://github.com/openai/codex/issues/20741)

3. **#19585** — `[bug] Pro weekly usage limit depletes unusually fast on 5.5`
   - Pro用户每周配额消耗异常加快，伴随不稳定的上下文压缩，29条评论，26个👍。
   → [链接](https://github.com/openai/codex/issues/19585)

4. **#21128** — `[bug] Codex Desktop silently hides project conversations outside global recent-50 window`
   - 当项目对话超出全局最近50条窗口时被静默隐藏，无法通过UI恢复，23条评论。
   → [链接](https://github.com/openai/codex/issues/21128)

5. **#23979** — `[bug] Codex Desktop 26.519.22136: local project conversation history missing after update`
   - 更新后本地聊天历史从UI消失，但底层SQLite数据仍然存在，20条评论。
   → [链接](https://github.com/openai/codex/issues/23979)

6. **#25500** — `[bug] Codex Desktop Projects sidebar shows "No chats" for projects with older non-archived conversations`
   - 项目侧边栏对旧对话显示“无聊天”，17条评论，覆盖Windows和macOS。
   → [链接](https://github.com/openai/codex/issues/25500)

7. **#26493** — `[bug] Codex App: context compaction fails with invalid_enum_value for context_compaction`
   - 上下文压缩因无效枚举值失败，影响Windows和macOS用户，16条评论。
   → [链接](https://github.com/openai/codex/issues/26493)

8. **#26158** — `[bug] Windows sandbox regression in Codex CLI 0.138.0: setup refresh fails`
   - Windows沙箱再次出现回归错误，用户需回退到0.132.0才能工作，8条评论。
   → [链接](https://github.com/openai/codex/issues/26158)

9. **#27242** — `[bug] Codex is burning weekly limits much faster: token efficiency regression`
   - 近期版本Token效率大幅下降，20x Pro配额感觉不够用，3条评论，新发问题。
   → [链接](https://github.com/openai/codex/issues/27242)

10. **#2909** — `[enhancement] Support for multi-root workspaces` （持续受关注）
    - 多根工作区支持需求已存在近一年，现有125个👍，9条评论，仍是社区强诉求。
    → [链接](https://github.com/openai/codex/issues/2909)

## 重要 PR 进展

1. **#27261** — `Make MCP connection startup fallible`
   - 让MCP连接启动变为可失败，避免因强制要求导致会话初始化阻塞。
   → [链接](https://github.com/openai/codex/pull/27261)

2. **#27127** — `Forward assistant output to realtime through handoffs`
   - 将前端模型（语音）与Codex编排器的助手输出统一路由，使实时语音体验更连贯。
   → [链接](https://github.com/openai/codex/pull/27127)

3. **#27055** — `Add parent turn id to Codex turn analytics`
   - 在分析事件中增加父轮次ID，便于追踪多代理和子任务链路。
   → [链接](https://github.com/openai/codex/pull/27055)

4. **#27259** — `Replace MCP manager lock with explicit retirement`
   - 用显式退役替代已有RwLock，解决预热时工具列表等待MCP启动的锁竞争。
   → [链接](https://github.com/openai/codex/pull/27259)

5. **#27276** — `Reduce archive rollout lookup CPU`
   - 优化归档时查找rollout路径，避免因状态数据库缺少路径而触发高CPU开销的全局搜索。
   → [链接](https://github.com/openai/codex/pull/27276)

6. **#25232** — `derive window generation from effective rollout lineage`（已关闭）
   - 确保 `x-codex-window-id` 能识别回滚、恢复后的有效压缩窗口代数。
   → [链接](https://github.com/openai/codex/pull/25232)

7. **#27078** — `emit goal lifecycle analytics`（已关闭）
   - 添加 `/goal` 行为的生命周期分析事件，填补现有分析空白。
   → [链接](https://github.com/openai/codex/pull/27078)

8. **#17931** — `fix: support encrypted local secrets for keyring auth`
   - 解决Windows凭据管理器对大认证负载的限制，支持加密本地密钥存储。
   → [链接](https://github.com/openai/codex/pull/17931)

9. **#27258** — `Cache tool search handler across sampling continuations`
   - 缓存工具BM25搜索索引，避免每次采样延续时重建（约113ms/次）。
   → [链接](https://github.com/openai/codex/pull/27258)

10. **#25158** — `Support more Vim normal commands`
    - 为Composer大缓冲区增加更多Vim正常模式命令（gg/G/dG等），提升编辑器体验。
    → [链接](https://github.com/openai/codex/pull/25158)

## 功能需求归类

从近期活跃Issues中可归纳出社区反复提及的功能方向：

- **对话历史可靠性**：大量bug报告指向更新后聊天历史消失或隐藏（#20741、#21128、#23979、#25500、#25084等），用户希望有可靠的本地历史存储和恢复机制，以及更好的UI显示逻辑。
- **Windows平台兼容性**：Windows沙箱启动失败（#24391、#26158）、上下文压缩枚举错误（#26493）、Windows终端目录不一致（#20858）等持续困扰用户。
- **上下文压缩与性能**：Pro用户配额消耗过快（#19585、#27242）、压缩失败（#26493、#24544）反映当前上下文管理效率需优化，同时存在Token浪费问题。
- **速率限制与配额透明化**：用户对Pro计划的“20x”配额使用速度不满，希望有更细粒度的消耗监控或配额调整。
- **MCP（Multi-Client Protocol）与工具集成**：MCP连接管理、加密认证、工具搜索缓存等改进（#27261、#27259、#27258）表明社区对扩展工具生态有较高依赖。
- **多根工作区支持**：#2909 长期高票需求，反映VS Code用户需要同时处理多个项目目录。

## 开发者关注点

- **更新后数据丢失**：多起事件显示升级Codex Desktop或CLI后，本地聊天历史从UI“消失”但数据仍在磁盘上。开发者需要紧急修复状态数据库的索引或UI检索逻辑。
- **Windows沙箱持续不稳定**：从v0.132.0到v0.138.0均出现不同原因导致沙箱启动失败，Windows开发者依赖沙箱进行安全代码执行，此问题严重阻碍开发流程。
- **Token效率下降**：多位Pro用户（特别是使用gpt-5.5的用户）反馈完成相同任务消耗的Token量显著增加，导致每周配额过快耗尽，可能影响用户续费意愿。
- **上下文压缩失败**：`invalid_enum_value`错误在多个平台上出现，压缩功能无法正常触发，导致长会话无法继续，急需修复枚举值兼容性。
- **未归档的聊天被静默隐藏**：项目侧边栏经常出现“No chats”，而实际存在历史会话。用户期望Codex能提供更明确的“可见性”控制（如分页、排序、手动加载所有历史）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-10

## 今日更新概览

今日社区活跃度较高，发布了多个版本更新，包括重要的稳定版 v0.46.0 和预览版 v0.47.0-preview.0。开发侧聚焦于修复稳定性（PTY 调整、模型映射）和社区反馈热点（如 Agent 行为过界、高内存占用等），提交和问题讨论频繁。

## 版本发布

今日有 4 个版本发布，涵盖稳定版和预览版，修复了关键问题：

- **[v0.47.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0)**: 最新预览版，包含对后端定义的优化。此版本也展现了团队在工程发布流程上的同步更新。
- **[v0.46.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0)**: 新的稳定版本，主要修复了一个关键的核心问题：**harden PTY resize against native crashes**，增强了终端模拟器在窗口大小调整时的稳定性，避免原生级别的崩溃。
- **[v0.46.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3)**: 预览版补丁，修复了在预期版本上的特定问题。
- **[v0.45.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.3)**: 稳定版补丁，与 v0.46.0-preview.3 同步进行了问题修复。

## 社区热点 Issues

本周社区报告问题集中在 Agent 行为、稳定性及性能方面：

1. **[#27417 Gemini overrules user action and does what it wants](https://github.com/google-gemini/gemini-cli/issues/27417)**: 用户投诉 Gemini CLI 会无视用户指令自行其是，这是一个严重的**用户体验问题**，社区讨论热烈，涉及到 Agent 核心决策逻辑的边界。
2. **[#27766 Thinking Bug](https://github.com/google-gemini/gemini-cli/issues/27766)**: 用户反馈“Thinking”状态卡住超过 7 分钟，怀疑是推理速度的 bug。这反映了**响应性能和用户等待体验**的痛点。
3. **[#25166 Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**: 核心问题，Shell 命令执行完毕后仍显示“等待输入”，导致会话卡死。这严重影响了**工具执行流程的可靠性**，获得社区投票支持。
4. **[#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**: 用户反馈 Agent 不主动使用自定义技能和子 Agent，**Agent 工具调用的自主性和智能性**是用户关注的焦点。
5. **[#27454 Bug when pasting json String](https://github.com/google-gemini/gemini-cli/issues/27454)**: 粘贴 JSON 字符串时发生程序错误，这是**基础文本输入处理的常见瓶颈**。
6. **[#24246 Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: 当工具超过 128 个时返回 400 错误，涉及**大规模工具集管理与 API 限制**的冲突。
7. **[#22267 Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**: **浏览器子 Agent** 无视配置文件的参数覆盖，减少了高级用户的可定制性。
8. **[#22672 Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: 用户希望 Agent 能识别并阻止潜在的破坏性操作（如强制重置、危险数据库操作），涉及 **Agent 的安全性和沙箱机制**。
9. **[#27460 prno (High memory usage detected)](https://github.com/google-gemini/gemini-cli/issues/27460)**: 报告遇到**高内存占用**问题（8.64 GB），性能优化仍是关注重点。
10. **[#21983 browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: **浏览器子 Agent 在 Wayland 环境下的兼容性问题**，影响部分 Linux 用户的体验。

## 重要 PR 进展

代码库健康度、安全性和用户体验优化是今日代码合并的主要方向：

1. **[#27767 fix(cli): prevent path traversal vulnerabilities during skill install…](https://github.com/google-gemini/gemini-cli/pull/27767)**: **修复了技能安装过程中的目录遍历漏洞**，加强了安全防护。
2. **[#27772 refactor(core): standardize tool output formatting](https://github.com/google-gemini/gemini-cli/pull/27772)**: **标准化了外部工具输出格式**（如 MCP、Shell、web-fetch），提高数据一致性，有助于后续处理和集成。
3. **[#27771 Fix MCP header encoding for non-ASCII values](https://github.com/google-gemini/gemini-cli/pull/27771)**: **解决 MCP HTTP 传输中非 ASCII 头部值的编码问题**，修复了国际化场景下的连接障碍。
4. **[#27749 Vertex ai model mapping fix](https://github.com/google-gemini/gemini-cli/pull/27749)**: **修复了非 API Key 认证下的模型映射问题**，更新了对 Gemini 3.5 Flash 模型的路由支持。
5. **[#27770 Avoid persisting empty resume sessions](https://github.com/google-gemini/gemini-cli/pull/27770)**: **避免持久化空会话**，优化了会话恢复的体验，防止无意义的历史记录。
6. **[#27465 fix(cli): surface extension disable/enable feedback](https://github.com/google-gemini/gemini-cli/pull/27465)**: **修复了扩展禁用/启用命令缺少终端反馈**的问题，改进了命令行交互体验。
7. **[#27453 fix(core): re-seed metadata when chat session file is recreated](https://github.com/google-gemini/gemini-cli/pull/27453)**: **修复了会话文件被外部删除重建后元数据丢失**的问题，增强了系统健壮性。
8. **[#27643 fix(build): resolve parallel workspace compilation race condition](https://github.com/google-gemini/gemini-cli/pull/27643)**: **解决了多工作区并行编译的竞态条件**，提升了 monorepo 构建的稳定性和速度。
9. **[#27391 fix(cli): filter internal session context from history during resumption](https://github.com/google-gemini/gemini-cli/pull/27391)**: **修复了会话恢复时显示内部系统上下文块**的问题，保持了用户历史记录的清洁。
10. **[#27631 Add static eval source analyzer](https://github.com/google-gemini/gemini-cli/pull/27631)**: **增加了静态评估源代码分析器**，为项目内部评估系统增加新工具。

## 功能需求归类

从近期 Issues 中，可以观察到用户对以下几类功能的持续关注：

- **Agent 自主性与策略优化**：用户普遍希望 Agent 能更智能地使用工具、技能和子 Agent，而不是依赖用户明确指令。同时，Agent 的行为边界（如避免破坏性操作）也受到关注。
- **核心稳定性与性能**：修复 UI 卡死、命令挂起、终端适配和高内存占用等底层问题，是提升用户满意度最直接的基础工作。
- **安全与内存系统**：关于 Auto Memory 的安全日志、无效补丁处理和低信号会话处理等问题，表明用户对数据安全与智能记忆系统有较高期待。
- **外部集成与 Web 功能**：对浏览器子 Agent（Wayland 兼容、配置覆盖）和 MCP 扩展（编码、反馈）的讨论，体现了用户对更广泛环境支持的需求。

## 开发者关注点

- **Agent“不听话”**：Issue #27417 中关于 Agent 违背用户指令的问题，是来自社区最强烈的反馈，指向 Agent 在自主决策与用户控制权之间的平衡点。
- **工具执行卡死**：Issue #25166 反映的 shell 命令执行后依然显示“等待输入”的 bug，是影响开发者日常工作流的核心痛点，且已获得社区高度关注。
- **子 Agent 行为问题**：多个 Issue（如 #22323、#21968、#21983）指出了子 Agent（如 Browser Agent）存在汇报虚假成功、忽略配置和兼容性故障等问题，开发者期望子 Agent 系统更加可靠和可配置。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-10

## 今日更新概览

- **版本发布**：昨日（2026-06-09）推送了 v1.0.61，主要涉及 Agents 界面打磨、设置对话框、会话恢复 bug 修复等。
- **社区活跃**：过去 24 小时内共有 30 条 Issue 更新（含新建、重新打开、维护者回复），其中 8 条为今日新提交；另有 1 条新 Pull Request。
- **开发者焦点**：模型可用性（BYOK / 企业自定义模型）、键盘快捷键兼容性（Linux/Windows）、非 UTF‑8 编码数据损坏、以及 MCP 服务器配置问题是今日讨论最密集的方向。

---

## 版本发布

**v1.0.61**（2026-06-09）
主要变更：
- 优化 Agents 选择器与“新建 Agent”向导，统一边框、标题和输入样式
- 修复恢复会话时可能白屏的 bug
- 新增 `/settings` 交互式对话框，支持在单一界面浏览/编辑所有用户设置
- 本地会话恢复功能持续增强（后续详情见提交日志）

---

## 社区热点 Issues（10 条）

### 1. [#53] Bring back the GitHub Copilot in the CLI commands to not break workflows
**作者**: @EDM115 | 评论 31 | 👍 75
**状态**: 开放（创建于 2025-09-26，最近更新 2026-06-09）
**摘要**: 社区因 CLI 命令变更而无法正常运行，有开发者自行开发替代工具（如 `shell-ai`），期待官方回应。
**链接**: https://github.com/github/copilot-cli/issues/53

### 2. [#1703] Copilot CLI 不列出全部组织启用的模型（如 Gemini 3.1 Pro），VS Code 中正常
**作者**: @Smotrov | 评论 29 | 👍 54
**状态**: 开放
**摘要**: 同一账号/组织下，CLI 可选的模型列表比 VS Code Copilot 少，例如 Gemini 3.1 Pro 可被组织启用但 CLI 不显示，影响企业用户。
**链接**: https://github.com/github/copilot-cli/issues/1703

### 3. [#2050] Claude Sonnet 4.6 请求反复失败（HTTP/2 GOAWAY 503）
**作者**: @tinonetic | 评论 8 | 👍 4
**状态**: 开放（更新于 2026-06-10）
**摘要**: 使用 `claude-sonnet-4.6` 模型执行规格生成任务时出现连接中断，重试 5 次仍失败；Gemini 3 Pro 无此问题。
**链接**: https://github.com/github/copilot-cli/issues/2050

### 4. [#2082] Linux 下 Ctrl+Shift+C 无法复制文本
**作者**: @MasonMcV | 评论 20 | 👍 8
**状态**: 开放
**摘要**: 自 v1.0.4 起，Ubuntu 24.04 等 Linux 系统终端中标准的复制快捷键失效，影响日常交互。
**链接**: https://github.com/github/copilot-cli/issues/2082

### 5. [#3436] MCP 搜索命令构造错误 URL（缺少 `/v0.1/` 路径段）
**作者**: @lvthillo | 评论 7 | 👍 1
**状态**: 已关闭（被修复）
**摘要**: `/mcp search` 在 v1.0.49 引入，但请求 `{registryUrl}/servers` 而非 `{registryUrl}/v0.1/servers`，导致自建 MCP 注册表返回 404。
**链接**: https://github.com/github/copilot-cli/issues/3436

### 6. [#3596] 恢复特定会话后无法加载模型列表：Not authenticated
**作者**: @baynezy | 评论 3 | 👍 10
**状态**: 开放
**摘要**: 执行 `/model` 命令时提示“未认证”，新建会话正常。影响版本 v1.0.56+。
**链接**: https://github.com/github/copilot-cli/issues/3596

### 7. [#3123] `/research` 命令无法写入研究报告文件
**作者**: @Lythenas | 评论 4 | 👍 4
**状态**: 开放
**摘要**: 执行 `/research TOPIC` 后 Agent 完成调研，但无法使用 `create` 工具保存 Markdown 文件，报告输出到临时目录后消失。
**链接**: https://github.com/github/copilot-cli/issues/3123

### 8. [#3736] BYOK 模型不显示思考 Token / 思考文本
**作者**: @aosama | 评论 0 | 👍 0
**状态**: 开放（今日新建）
**摘要**: v1.0.61 中，无论使用何种端点类型，BYOK 模型均不呈现思考过程文字。
**链接**: https://github.com/github/copilot-cli/issues/3736

### 9. [#3601] Bash 工具因 `LC_CTYPE=C` 丢弃非 ASCII 字符
**作者**: @404hub | 评论 1 | 👍 0
**状态**: 开放
**摘要**: CLI 使用 `LANG=""` 和 `LC_CTYPE="C"` 启动 shell，导致中文、日文、表情符号等被静默截断，路径含非 ASCII 字符时无法工作。
**链接**: https://github.com/github/copilot-cli/issues/3601

### 10. [#3727] v1.0.60 回归：`userPromptSubmitted` 钩子的 `additionalContext` 未注入 planner
**作者**: @Harihara04sudhan | 评论 0 | 👍 0
**状态**: 开放（今日新建）
**摘要**: 插件钩子 `userPromptSubmitted` 返回的额外上下文在 v1.0.59 正常，v1.0.60 起不再传递给 planner，影响自定义上下文注入。
**链接**: https://github.com/github/copilot-cli/issues/3727

---

## 重要 PR 进展

今日只有 1 条 PR 更新，内容如下：

### [#3737] Jigg empire ai
**作者**: @j2030aiNotez | 创建于 2026-06-10 | 无评论 | 👍 0
**链接**: https://github.com/github/copilot-cli/pull/3737
**摘要**: 标题与描述（“Let’s try this new method”）未说明具体变更，可能为测试性提交或新功能提案，需进一步审查。

（注：其他 PR 在指定时间窗口内无更新。）

---

## 功能需求归类

从今日活跃的 Issue 中可归结出以下反复出现的功能方向：

- **模型支持与可见性**：用户期望 CLI 能展示与企业组织设置一致的模型列表（#1703），同时 BYOK 模式下能显示思考 Token（#3736），并支持企业自定义模型（#3730）。
- **输入与键盘兼容性**：Linux 下 `Ctrl+Shift+C` 复制失效（#2082）、Windows 下 `Ctrl+G` 无法启动 `code-insiders --wait`（#3733）、Windows Terminal 缩放快捷键被拦截（#3735）均反映跨平台键盘交互的痛点。
- **MCP 服务器集成**：自建 MCP 注册表的路径构造问题（#3436）、远程 MCP OAuth 重复启动（#3706），以及自定义 MCP 注册表配置的持久化需求（#3548）表明 MCP 功能的成熟度与可用性仍需提升。
- **会话与状态管理**：恢复特定会话时认证状态丢失（#3596）、`cwd` 和 `branch` 不再持久化（#2655）、跨机器会话共享（#3729）等都是会话系统的常见诉求。
- **插件钩子与自动化**：`preToolUse` 钩子不触发（#2540）、v1.0.60 回归导致 `additionalContext` 失效（#3727）说明插件机制仍不稳定，开发者依赖钩子扩展工作流。

---

## 开发者关注点

- **模型连接稳定性**：Claude Sonnet 4.6 频繁返回 503 错误（#2050）影响生产任务，用户期待更清晰的错误原因与重试策略。
- **编码与数据完整性**：非 UTF‑8 文件被静默损坏（#3732）、Bash 工具丢弃非 ASCII 字符（#3601）对国际用户和多语言项目影响严重，且无警告提示。
- **回归问题高发**：v1.0.60 出现多个之前已修复的功能再次损坏（#3727），社区对版本质量控制表示担忧。
- **企业级特性缺失**：CLI 不显示企业自定义模型（#3730）、私有网络 `web_fetch` 权限被过度限制（#3731），影响企业环境采用。

---

以上日报基于 `github.com/github/copilot-cli` 在 2026-06-10 00:00 UTC 至 2026-06-10 23:59 UTC 期间的数据整理。所有链接均直接对应 GitHub 页面，欢迎点击查看详细讨论。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-10

## 1. 今日更新概览

过去24小时内，Kimi Code CLI 仓库无新版本发布；Issues 活动较平淡，共 2 条更新（含 1 条新创建 Issue），1 条新 Pull Request 被创建。社区反馈主要集中于工具行为异常（文件读取死循环、Edit 工具频繁失败），开发者在 PR 中尝试改进钩子系统稳定性。

---

## 2. 版本发布

无新版本。

---

## 3. 社区热点 Issues

### #640 [Bug] Kimi CLI stuck in reading one file again and again and stuck in a loop
- **作者**：@isbafatima90-arch
- **状态**：Open（创建于 2026-01-19，最后更新 2026-06-10）
- **评论数**：7 | 👍 1
- **影响场景**：使用自定义 Anthropic 端点（mimo-v2-flash 模型）时，Kimi CLI v0.76 持续反复读取同一个文件，陷入无限循环。
- **社区反应**：问题存在约5个月后于今日再次更新，说明用户仍受此影响，或开发者正在排查。Linux 环境（Arch）下复现。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/640

### #2443 [Bug] Edit tool keeps failing in new kimi-code
- **作者**：@iaindooley
- **状态**：Open（创建于 2026-06-09，最后更新 2026-06-09）
- **评论数**：0 | 👍 0
- **影响场景**：Kimi Code v0.12.0 / “k2.6” 模型下，Edit 工具输出中频繁出现错误信息，用户未登录（/login 仅为占位符？），导致编辑功能不可用。
- **社区反应**：尚未有回复或复现确认，但反馈者明确给出了版本、平台（Debian）和错误频次特征，属于较清晰的 bug 报告。
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2443

---

## 4. 重要 PR 进展

### #2445 [Open] feat(hooks): surface PostToolUse hook stderr to LLM context
- **作者**：@zwpdbh
- **状态**：Open（创建于 2026-06-10）
- **功能/修复内容**：将 `PostToolUse` hook 从 fire-and-forget 改为 await 模式，使 hook 的 stderr 能够被捕获并追加到工具结果消息中，从而让 LLM 即时感知 hook 的输出。
- **价值点**：提升工具链的可观测性，尤其有利于调试自定义 hook 的异常输出。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2445

---

## 5. 功能需求归类

基于今日活跃的 2 个 Issue，可归类出以下用户反复提到的功能方向：

| 功能方向 | 对应 Issue | 用户诉求描述 |
|---------|-----------|------------|
| **Bug 修复（稳定性）** | #640, #2443 | 文件读取死循环、Edit 工具频繁失败，直接影响日常开发流程。 |
| **模型兼容性** | #640 | 用户在自建端点上使用非官方模型（mimo-v2-flash）时出现异常，暗示 CLI 对第三方模型的支持可能不够健壮。 |
| **工具调用可靠性** | #2443 | Edit 工具在 k2.6 模型下报错，可能涉及工具与模型之间的接口或权限问题。 |

由于 Issue 数量有限，未出现其他高频需求（如 IDE 集成、性能等）的明显证据。

---

## 6. 开发者关注点

- **循环读取文件导致任务卡死**（#640）：用户已等待约5个月未解决，今日的更新时间可能意味着官方开始关注。该问题对依赖自动文件处理的工作流影响严重（无进度、无超时）。
- **Edit 工具高频失败**（#2443）：刚提交的 bug 尚未获得开发者回应，但“frequently in the output”的描述提示该问题概率较高，可能影响代码生成/修改的可用性。
- **Hook 系统稳定性改进**（#2445）：PR 作者主动增强钩子错误暴露能力，侧面反映社区在调试 hook 时遇到信息不足的痛点。该 PR 可能间接帮助诊断类似 #640 的怪异行为。

所有反馈和进展均已链接至原始 GitHub 页面，建议开发者关注后续回复和补丁。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-10

## 今日更新概览

社区讨论热度维持高位，累计有 50 条 Issue 和 50 条 PR 在过去 24 小时内获得更新。内存问题追踪、Agent 沙箱能力与自定义模型提供商兼容性仍是讨论最集中的方向。与此同时，多个针对 TUI 交互细节与 CLI 稳定性的修复 PR 正在推进中。

## 社区热点 Issues

1. **#20695 Memory Megathread (内存问题集中追踪)**
   - 评论数: 91 | 👍 64
   - 社区持续在统一线程中报告内存泄漏与异常占用问题。维护者明确要求用户提供堆快照（Heap Snapshot），并强调“不要运行 LLM 并给出解决方案——它永远是错的”。目前官方给出了手动堆快照流程。
   - [链接](https://github.com/anomalyco/opencode/issues/20695)

2. **#2242 Agent 沙箱机制**
   - 评论数: 64 | 👍 53
   - 用户关注 Agent 执行终端命令时能否限制文件访问范围。对比了 Gemini CLI 和 Codex CLI 在 macOS 上使用 Seatbelt 的做法，认为 OpenCode 缺少类似权限隔离机制。
   - [链接](https://github.com/anomalyco/opencode/issues/2242)

3. **#13984 OpenCode CLI 中无法复制粘贴**
   - 评论数: 45 | 👍 20
   - 用户反馈在 OpenCode CLI 中点击“复制到剪贴板”后，按 Ctrl+V 无实际输出。问题持续数月未解决，影响大量终端用户的基础交互。
   - [链接](https://github.com/anomalyco/opencode/issues/13984)

4. **#3472 VSCode 扩展上下文感知功能不生效**
   - 评论数: 38 | 👍 26
   - 虽已被关闭，但社区仍在追问：VSCode 扩展页面宣传的“上下文感知”在选中代码行后并未真正传递给 Agent。用户质疑该功能的实际存在性与使用方式。
   - [链接](https://github.com/anomalyco/opencode/issues/3472)

5. **#5674 自定义 OpenAI 兼容提供商的选项未传递至 API 调用**
   - 评论数: 23 | 👍 13
   - 用户在 `opencode.json` 中配置的 `baseURL` 与 `apiKey` 等选项未实际应用于 API 请求，导致无法使用本地或自建 LLM 后端。
   - [链接](https://github.com/anomalyco/opencode/issues/5674)

6. **#20802 自定义提供商的图片附件无法正确传递**
   - 评论数: 15 | 👍 7
   - 用户在使用自定义 OpenAI 兼容提供商时，图片附件未能以可用的视觉输入形式到达模型，而同一模型在原生 API 调用中正常工作。
   - [链接](https://github.com/anomalyco/opencode/issues/20802)

7. **#26508 ZEN 支付渠道退款争议**
   - 评论数: 12 | 👍 2
   - 用户指控付费流程中存在“诈骗式 UI”设计：点击订阅时被重定向至第三方支付渠道 ZEN，操作后未获得预期服务且退款困难。该 Issue 已被关闭。
   - [链接](https://github.com/anomalyco/opencode/issues/26508)

8. **#29182 付款后 12 天未收到退款回应**
   - 评论数: 9 | 👍 0
   - 用户通过官方支持邮箱联系退款 12 天无回复。附带了收据编号与发票信息，反映付费用户体验环节存在严重客服响应滞后。
   - [链接](https://github.com/anomalyco/opencode/issues/29182)

9. **#31498 开发者 Prompt 质量极差**
   - 评论数: 7 | 👍 1
   - 重度用户直言开发者 Prompt 在简单文件移动操作中表现得过于繁琐，与工具本身的高效形成巨大反差。
   - [链接](https://github.com/anomalyco/opencode/issues/31498)

10. **#30662 自动会话标题生成失败**
    - 评论数: 5 | 👍 0
    - 使用 OpenCode 自有模型（如 `big-pickle`）时，自动标题生成静默失败，标题始终为默认值。原因为标题 Agent 调用时依赖 `smallOptions`，但 OpenCode 提供商的配置被隐式默认值覆盖。
    - [链接](https://github.com/anomalyco/opencode/issues/30662)

## 重要 PR 进展

1. **#31392 为 ACP 客户端提供原生阶段性编辑审查能力**
   - 使 OpenCode 与 Zed、Devin 等 ACP 客户端的原生文件审查流程协同工作，属于长期需求 `#4240` 的实现。
   - [链接](https://github.com/anomalyco/opencode/pull/31392)

2. **#28592 修复 GNU Screen 下的 OSC52 剪贴板传递**
   - 修复了在 GNU Screen 终端复用器下 OSC52 粘贴不工作的问题。此前只兼容 tmux。
   - [链接](https://github.com/anomalyco/opencode/pull/28592)

3. **#31595 使 MCP 客户端创建错误安全**
   - 将 MCP 客户端创建过程处理为有类型失败边界，避免因单个客户端初始化失败导致整体挂起或不稳定。
   - [链接](https://github.com/anomalyco/opencode/pull/31595)

4. **#31515 为 Web 工具添加 iFlow 提供商路径**
   - 为 `websearch` 和 `webfetch` 工具新增可选的 iFlow 提供商支持，扩展工具链选择范围。
   - [链接](https://github.com/anomalyco/opencode/pull/31515)

5. **#28936 修复 TUI 中问题输入占用打开对话框的问题**
   - 使用 React Hooks 思路修复了问题输入框抢占对话界面的 Bug。
   - [链接](https://github.com/anomalyco/opencode/pull/28936)

6. **#31591 修复 CLI 中 `.fail()` 不输出错误信息**
   - 修复用户输入 `opencode --unkown-flag` 等错误命令时，仅输出 `--help` 内容、不显示具体错误信息的问题。
   - [链接](https://github.com/anomalyco/opencode/pull/31591)

7. **#30682 在项目 ID 漂移时保留孤儿会话**
   - 对于无远程 URL 的 Git 项目，当用户 `rebase` 改写历史根提交后，会话不再被丢失。
   - [链接](https://github.com/anomalyco/opencode/pull/30682)

8. **#31589 使用 v2 文件系统搜索重构应用选择器**
   - 将遗留的文件查找端点迁移至 `v2.fs.find`，统一响应映射，保留排序与路径标准化行为。
   - [链接](https://github.com/anomalyco/opencode/pull/31589)

9. **#29173 添加 Question 创建与等待 API 端点**
   - 新增 `POST /question` 与 `GET /question/:requestID/wait` 两个接口，使外部客户端无需管理事件总线状态即可发起并等待提问结果。
   - [链接](https://github.com/anomalyco/opencode/pull/29173)

10. **#24943 为探索子 Agent 使用小模型**
    - 为主流提供商定义了小模型优先级列表。当探索 Agent 未指定模型时自动使用小模型降配，降低运行成本。
    - [链接](https://github.com/anomalyco/opencode/pull/24943)

## 功能需求归类

- **自定义提供商与新模型支持**：多个 Issue（#5674、#20802、#26412、#30662）聚焦自定义 OpenAI 兼容提供商无法正常工作、参数未传递、图片附件丢失、流式调用失败等问题。
- **沙箱与 CLI 交互体验**：沙箱机制（#2242）、复制粘贴（#13984）、TUI 宽度可配置（#31582）、Tmux 窗口命名（#24822）、输入字段异常（#31588）反映出终端用户体验的细节瓶颈。
- **上下文感知与 IDE 集成**：VSCode 扩展的上下文感知（#3472、#22235）重复被提及但状态未能改善，社区对“自动附着选中代码”功能的期望未得到满足。
- **付费与退款流程**：两起退款争议（#26508、#29182）暴露了支付渠道引导与客服响应的严重问题。
- **性能与稳定性**：内存问题（#20695）、工具执行中止（#18757）、桌面端崩溃（#31594）仍在持续影响日常使用。

## 开发者关注点

- **自定义提供商兼容性**是最集中的技术痛点，不仅配置未生效，视觉模型的图像输入也被阻断。开发者在尝试接入本地模型或私有 endpoint 时频繁受挫。
- **CLI 基础交互行为**存在多处退化：无法粘贴、错误信息不显示、会话标题无法自动生成、Bash 超时输出串入输入框，直接影响工作流流畅度。
- **钱包体验**因支付跳转流程不清与退款无回应，部分用户的信任度正在下降。社区在等待付费问题得到具体、可追踪的回复。
- **性能稳定性**仍是长期缠绕的焦点：尤其是大规模代码 diff 渲染时的界面冻结与内存占用，尚未有明确的修复路径。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是为您生成的 2026-06-10 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 ｜ 2026-06-10

## 今日更新概览

今日社区活跃度极高，发布了两个修复性预览版本 v0.18.0-preview.0 / .1，主要为 v0.18.0 正式版做准备。同时，社区提交了超过 20 条新的 Issues 和 PRs，讨论热度集中于 Daemon 模式、MCP 集成、模型切换体验及 Windows 安装兼容性问题。

## 版本发布

**v0.18.0-preview.0 & v0.18.0-preview.1**
- **发布说明**：两个版本内容一致，均为 v0.18.0 的预览版。核心修复是 CLI 在复制输出时，会**跳过模型思考过程（thought parts）**。
- **影响**：改进了命令行下复制代码或文本的体验，避免将模型内部思考的冗长内容一同复制。
- **相关 PR/Commit**: [v0.18.0-preview.1 发布页面](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0-preview.1)

---

## 社区热点 Issues

以下挑选了 10 个值得关注的 Issue，涵盖了 Daemon 功能缺口、MCP 安全、模型配置、桌面端体验等多个维度。

1.  **#4514 [Daemon] `qwen serve` 后端能力缺口追踪**
    - **作者**：[@doudouOUC](https://github.com/doudouOUC)
    - **摘要**：追踪 `qwen serve` HTTP/SSE 接口在 ACP 协议兼容性方面尚未补齐的功能。目前外部客户端已可通过兼容 ACP 的 slash 命令进行交互，但仍有多项缺口待补。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4514

2.  **#4615 [MCP 安全] 支持项目级 `.mcp.json` 及待审批语义**
    - **作者**：[@qqqys](https://github.com/qqqys)
    - **摘要**：提议支持项目作用域下的 `.mcp.json` MCP 服务配置，并在启动或连接任何服务器前，增加一个明确的“待审批”状态。这能防止项目中的 MCP 配置在未获用户确认时自动运行，提升安全性。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4615

3.  **#4727 [TUI] Dual Output 模式下 TUI 无响应**
    - **作者**：[@yumiao5279](https://github.com/yumiao5279)
    - **摘要**：用户在 v0.17.0 版本中，通过 `--json-file` 和 `--input-file` 启动双输出模式时，TUI 界面完全无响应。这是一个影响特定使用场景（如管道通信）的 Bug。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4727

4.  **#4782 [Daemon] ACP Streamable HTTP 传输实现状态追踪**
    - **作者**：[@chiga0](https://github.com/chiga0)
    - **摘要**：说明 Qwen Code Daemon 已实现 ACP (Agent Client Protocol) 的 Streamable HTTP 传输。这意味着 Zed、Goose、JetBrains 等支持 ACP 的编辑器可以直接连接 `qwen serve`，无需适配代码，是 Daemon 模式走向开放集成的重要一步。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4782

5.  **#4898 [用户体验] 希望更自由地约束 user 画像生成和 Skill 提炼**
    - **作者**：[@wunan067830-west](https://github.com/wunan067830-west)
    - **摘要**：用户希望增加更灵活的功能来控制模型如何构建用户画像（User Portrait）和提炼技能（Skill），以避免不必要的上下文信息污染对话。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4898

6.  **#4888 [IDE 插件] IDEA 插件中 `ask_user_question` 功能异常**
    - **作者**：[@byx1728](https://github.com/byx1728)
    - **摘要**：在 IDEA 插件中，当 Qwen Code 需要通过 `ask_user_question` 向用户提问时，问题文本不显示，且用户无法输入答案，只能看到“提交”和“取消”按钮。这是一个严重的 IDE 集成 Bug。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4888

7.  **#4876 [Sub-Agent] SubAgent 读取图片返回非预期内容**
    - **作者**：[@MachineXu](https://github.com/MachineXu)
    - **摘要**：用户创建了一个专门分析图片的 SubAgent（子代理），但 SubAgent 读取图片后返回了与图片无关的随机内容。而主 Agent 使用相同模型读取时能正确理解，说明 SubAgent 模式下可能存在上下文传递或工具调用问题。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4876

8.  **#4904 [模型切换] 无法切换到新模型（如 qwen3.7-plus）**
    - **作者**：[@Cities2000](https://github.com/Cities2000)
    - **摘要**：用户反馈在 Qwen Code 0.17.1 中，即使接入了支持 qwen3.7-plus 的后端，也无法在编程计划（Coding Plan）场景下切换到该模型，报错提示模型不可用。这涉及多 Provider 配置和模型列表同步问题。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4904

9.  **#4907 [UI/键盘] 向下箭头需按两次才能从输入框到达 SubAgent 内容区**
    - **作者**：[@pomelo-nwu](https://github.com/pomelo-nwu)
    - **摘要**：当 SubAgent 运行时，键盘焦点链存在问题。从输入框按一次 ↓ 会错误地聚焦到空的 Tab 栏，再按一次才能到达 SubAgent 的任务内容。这破坏了操作流畅性，是一个典型的 UI 导航缺陷。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4907

10. **#4891 [UI/渲染] 流式输出时调整终端窗口，导致回滚内容错位**
    - **作者**：[@tanzhenxin](https://github.com/tanzhenxin)
    - **摘要**：在模型流式生成过程中调整终端窗口大小，回看历史输出时，会发现内容宽度不一致，部分段落被截断或渲染错位。这是一个影响终端美杜莎体验的 Bug。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4891

---

## 重要 PR 进展

以下挑选了 10 个推动项目进展的重要 PR。

1.  **#4773 [Daemon] 增加 ACP WebSocket 传输支持**
    - **作者**：[@chiga0](https://github.com/chiga0)
    - **摘要**：实现 ACP 的 WebSocket 传输层，与现有的 SSE 传输共存，是完善 Daemon 模式 ACP 协议支持的关键一步。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4773

2.  **#4827 [Daemon] 实现 29 个 `_qwen/*` 新方法，达成 ACP/REST 功能对等**
    - **作者**：[@chiga0](https://github.com/chiga0)
    - **摘要**：为 Daemon 的 REST 接口增加了 29 个新的分发方法，实现了与 ACP 协议的功能对等。这是 `qwen serve` 走向成熟的核心 PR。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4827

3.  **#4844 [功能] 新增 Agent Team 实验性特性**
    - **作者**：[@tanzhenxin](https://github.com/tanzhenxin)
    - **摘要**：引入实验性的“Agent Team”模式。模型可以创建一个团队，生成多个并行工作的 SubAgent（队友），并通过 Leader 协调汇总结果。这是对 Agent 协作能力的重要探索。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4844

4.  **#4810 [Bug 修复] 隔离 OpenAI SDK 的 AbortSignal 监听器泄漏**
    - **作者**：[@yiliang114](https://github.com/yiliang114)
    - **摘要**：修复了因 OpenAI SDK 内部 `AbortController` 监听器未正确移除而可能引发的内存泄漏问题。通过为每次请求创建子控制器来隔离泄漏。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4810

5.  **#4890 [功能] 添加 `/cd` 命令**
    - **作者**：[@qqqys](https://github.com/qqqys)
    - **摘要**：增加一个新的交互式 slash 命令 `/cd <path>`，允许用户在不重启 Qwen Code 会话的情况下，将当前工作目录切换到一个新的路径。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4890

6.  **#4894 [Bug 修复] 修复 Dual Output 模式下 FIFO 启动阻塞**
    - **作者**：[@chiga0](https://github.com/chiga0)
    - **摘要**：修复当 `--json-file` 指向一个没有读取端的 FIFO（命名管道）时，Qwen Code 会阻塞启动的问题。现在使用非阻塞模式打开，并增加了缓冲区水位线设置。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4894

7.  **#4903 [Bug 修复] Windows 安装程序：自动检测 SYSTEM 账户**
    - **作者**：[@yiliang114](https://github.com/yiliang114)
    - **摘要**：修复了当 Windows 独立安装程序在 SYSTEM 账户下运行时，`qwen` 命令在新终端中无法找到的问题。现在会自动将 PATH 作用域设置为“机器”级别。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4903

8.  **#4917 [Bug 修复] 默认启用 `splitToolMedia` 以兼容 Open AI 后端**
    - **作者**：[@LaZzyMan](https://github.com/LaZzyMan)
    - **摘要**：修复了在严格兼容 OpenAI API 的后端上，工具调用返回的图片（例如 `read_file` 读取的图片）无法传递给模型的问题。现在默认将媒体内容拆分到独立的 `user` 消息中。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4917

9.  **#4833 [Daemon] 为 Daemon 添加会话空闲回收器**
    - **作者**：[@chiga0](https://github.com/chiga0)
    - **摘要**：为 Daemon 模式引入两层清理机制：关闭最后客户端后立即关闭会话，以及基于超时的空闲会话清理。有助于管理服务端资源。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4833

10. **#4906 [功能] 为 Shell 子进程注入 Traceparent 环境变量**
    - **作者**：[@doudouOUC](https://github.com/doudouOUC)
    - **摘要**：启用分布式追踪功能后，会将 W3C 标准的 `TRACEPARENT` 环境变量注入到所有由 Shell 工具、Hook 等启动的子进程中。这对于排查复杂工作流中的性能问题非常有价值。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4906

---

## 功能需求归类

从今日的 Issues 和 PRs 中，可以归出以下几个用户反复提及的功能方向：

| 需求方向 | 相关 Issue/PR 举例 | 描述 |
| :--- | :--- | :--- |
| **Daemon 模式完善** | #4514, #4782, #4773, #4827, #4833 | 用户体验到 Daemon 模式的潜力，并提出更高的功能对等（ACP/HTTP）和稳定性（会话管理）要求。 |
| **MCP 集成与安全** | #4615, #4889 | 用户不仅希望有 MCP 支持，更关注其安全性，例如需要审批流程。同时，Python SDK 的 MCP 集成也是热门需求。 |
| **模型切换与多Provider管理** | #4904, #4813, #4877 | 用户在使用多模型、多 Provider 时，频繁遇到模型不可用、URL 无法共享、模型名显示混乱等问题，期望更健壮的配置方案。 |
| **Sub-Agent 与协作** | #4876, #4907, #4844 | 用户正在积极测试 Agent 团队协作能力，反馈了包括图像处理、键盘导航等具体问题，并期待像 `/cd` 这样的命令来改进工作流。 |
| **终端与桌面 UI 优化** | #4727, #4891, #4907, #4885 | 终端环境下的流式渲染、键盘导航、双输出模式等问题依然是关注焦点。同时，桌面端应用的文件浏览方式也提出了改进建议。 |

---

## 开发者关注点

1.  **模型切换与配置管理是当前痛点**：多 Provider 配置（如 `modelProviders`）下的模型切换、URL 共享、以及特定模型的可用性同步问题（#4904, #4813, #4877），是目前开发者反映最集中的配置类问题。这影响了高级用户在使用多种后端（如千问 Coding Plan、vLLM）时的顺畅体验。
2.  **Sub-Agent 功能的可靠性有待提升**：Sub-Agent 在读取图像时返回无关内容（#4876），以及键盘导航逻辑混乱（#4907）等问题，说明 Sub-Agent 功能虽然在快速迭代，但基础可靠性和交互细节仍需打磨。
3.  **安全与权限管理呼声渐高**：以 #4615 为代表的 MCP 配置需“待审批”的功能，以及 #4883 提出的 `--safe-mode` 标志，反映出社区对代码运行权限、安全沙箱等问题的关注度正在上升。
4.  **Windows 平台兼容性问题**：Windows 独立安装程序在 SYSTEM 账户下的 PATH 问题 (#4901, #4903) 被修复，说明开发者团队正在积极解决 Windows 用户的安装和使用痛点，使其与 macOS/Linux 体验对齐。

</details>