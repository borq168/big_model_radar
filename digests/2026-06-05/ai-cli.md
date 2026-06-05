# AI CLI 工具社区动态日报 2026-06-05

> 生成时间: 2026-06-05 02:36 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

好的，作为专注于AI开发工具生态的资深技术分析师，以下是根据您今日提供的各工具社区动态生成的横向对比分析报告。

---

### AI CLI 工具社区动态横向对比分析报告 (2026-06-05)

**报告日期:** 2026-06-05
**分析师:** AI开发工具生态技术分析师

---

#### 1. 今日横向概览

今日，七个主流AI CLI工具的社区均处于活跃状态，但关注的焦点和活跃度呈现明显分化。**Claude Code** 和 **OpenCode** 社区在功能诉求和稳定性修复上讨论最为激烈，前者围绕标准化（`AGENTS.md`）和计费透明度，后者则聚焦于内存泄漏、模型兼容性等底层问题。**Gemini CLI** 和 **OpenAI Codex** 的核心痛点集中在跨平台稳定性（尤其是macOS和Windows环境）和底层子系统（如PTY、安全进程）的资源泄漏上。相比之下，**GitHub Copilot CLI** 和 **Qwen Code** 社区则更多地围绕具体的交互体验优化和功能增强（如会话管理、统计看板）展开。**Kimi Code CLI** 社区规模虽小，但认证错误和性能退化是用户最紧急的诉求。整体上，社区对工具的 **计费透明度、跨平台稳定性、标准化互操作性** 的关注度显著提升。

#### 2. 各工具活跃度对比

| 工具名称 | 今日精选热度 | (粗略) 活跃 Issue 数 | (粗略) 活跃 PR 数 | 今日版本发布 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 极高（5个高赞Bug/Feature） | 10+ | 5 | 是 (v2.1.163) |
| **OpenAI Codex** | 高（macOS泄漏主题集中） | 10+ | 10+ | 是 (4个 Rust Alpha 版本) |
| **Gemini CLI** | 高（PTY/CJK主题集中） | 10+ | 10+ | 是 (v0.47.0-nightly, v0.45.1) |
| **GitHub Copilot CLI** | 中等（快捷键冲突继承）| 10+ | 2 | 是 (v1.0.60-0) |
| **Kimi Code CLI** | 中等偏低（认证错误突出） | 5 | 6 | 否 |
| **OpenCode** | 极高（内存主题贴持续发酵）| 10+ | 10+ | 否 |
| **Qwen Code** | 高（模型切换、统计记忆） | 10+ | 10+ | 是 (v0.17.1-nightly) |

**注释:** 活跃数据基于日报中列出的**精选**Issue和PR数量，不代表当日全部变更，但可反映社区关注的热点密度。

#### 3. 共同出现的功能方向

今日，多个工具社区均出现了相似的功能诉求，显示出行业层面的共同趋势：

- **计费与模型配额透明度：**
    - **Claude Code** (Issue #63060): 用户强烈不满1M上下文窗口默认启用并消耗积分，要求更透明的计费逻辑。
    - **OpenCode** (Issue #28846): 社区要求服务提供商（DeepSeek）的降价能同步反映在订阅配额调整上。
    - **Gemini CLI** (Issue #24039): 用户在模型容量耗尽时遭遇静默降级，缺乏通知，引发信任危机。
    - **Qwen Code** (Issue #4754): 社区要求`/model`命令仅作用于当前会话而非默认持久化到配置文件，避免非预期的配额消耗策略变更。

- **终端与交互稳定性：**
    - **Gemini CLI** (Issue #27155, PRs #27348, #27354): PTY内存与文件描述符泄漏是当前最大的稳定性热点，多个PR正在进行修复。
    - **Kimi Code CLI** (Issue #2422, PR #2429): 终端自动滚屏问题严重影响阅读体验，社区开发者已提交修复。
    - **OpenCode** (Issue #27749): 在Windows下执行`/exit`命令会杀死整个终端窗口，而非返回Shell。
    - **Qwen Code** (PR #4677): 修复Vim模式下的多个键盘交互问题。

- **跨工具标准化与互操作性：**
    - **Claude Code** (Issue #6235): **社区呼声最高的诉求**，要求支持通用的 `AGENTS.md` 文件规范，以构建与Cursor、Codex等其他工具的兼容生态。
    - **Gemini CLI** (Issue #21597): 用户不满其核心体验被 Git 仓库绑定，要求支持 Mercurial 等非 Git 版本控制系统。

- **会话与数据持久化管理：**
    - **GitHub Copilot CLI** (Issue #3596): 恢复会话后认证状态丢失，导致无法列出模型。
    - **OpenCode** (Issue #30811): 长对话中语境压缩（Compaction）导致早期上下文丢失，引发代码质量下降。
    - **Qwen Code** (Issue #4747): 用户强烈要求支持跨项目的用户级自动记忆，避免在新项目中重复训练AI对个人偏好的认知。

#### 4. 差异化定位分析

基于今日的动态，各工具的定位差异体现在：

| 工具名称 | 核心功能侧重 | 目标用户 | 技术路线与当前挑战 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级治理与标准化** | 对代码质量、安全合规、费用管理有高要求的专业开发者和企业团队。 | 侧重版本管理、插件生态、审查体验。**挑战:** 解决标准化（AGENTS.md）诉求，平衡强大功能（1M上下文）与计费透明性。 |
| **OpenAI Codex** | **桌面应用深度集成与多平台体验** | 依赖桌面IDE和复杂操作系统环境的开发者，尤其是macOS和Windows用户。 | 侧重桌面体验、插件集成、系统级适配。**挑战:** 解决macOS性能泄漏和Windows/WSL兼容性问题。 |
| **Gemini CLI** | **国际化支持与底层系统稳定性** | 全球用户，特别是非英语开发者，以及需要长时间运行复杂任务的高级用户。 | 侧重国际化（CJK），在PTY等底层系统上有深厚投入。**挑战:** 解决内存泄漏、终端卡死等严重影响可靠性的技术债务。 |
| **GitHub Copilot CLI** | **Git生态下的会话与权限管理** | 深度使用GitHub和Git工作流的开发者，以及企业内网用户。 | 侧重会话管理、权限控制、以及和GitHub服务的协同。**挑战:** 解决长期存在的快捷键冲突和会话恢复认证问题。 |
| **Kimi Code CLI** | **基础稳定性和服务可达性** | 工具早期采用者，对核心功能（对话、函数调用）可访问性最为关注。 | 面临基础架构挑战（403错误）、新版本性能退化的严峻问题，当前阶段首要任务是恢复用户信心。 |
| **OpenCode** | **开源社区驱动的功能创新与深度定制** | 追求高灵活性、自托管、以及丰富模型集成的技术极客和社区开发者。 | 拥有最活跃的PR贡献，功能迭代迅速。**挑战:** 解决内存泄漏、本地模型兼容性、以及功能迭代带来的稳定性风险。 |
| **Qwen Code** | **数据意识与用户体验精细化** | 注重数据分析、个人效率提升，对模型切换和记忆功能有精细要求的开发者。 | 强调统计、记忆、模型管理，VM模式等。**挑战:** 在功能丰富性与稳定性之间取得平衡（如模型切换副作用）。 |

#### 5. 社区活跃度记录

- **最活跃/讨论量最大:** **OpenCode**（内存主题帖 #20695 达90评论），**Claude Code**（标准化Issue #6235 超300评论）以及 **Gemini CLI**（PTY相关多个高赞Issue）社区讨论最为激烈，用户参与度极高。
- **版本发布最密集:** **OpenAI Codex** 一日内发布了4个Rust Alpha版本，虽然无详细日志，但反映出其在快速迭代和测试；**Gemini CLI** 和 **Qwen Code** 也分别有夜间版和补丁版本发布。
- **维护者响应度最高:** **Claude Code** 通过发布v2.1.163版本，直接回应了企业治理需求；**Qwen Code** 维护者快速关闭了关于模型ID显示和模型命令持久化的Issue，展现出较高的响应效率。**OpenCode** 的维护者则在内存收集帖中给出了具体的行动指令。
- **PR贡献活跃度:** **OpenAI Codex**、**Gemini CLI**、**OpenCode** 和 **Qwen Code** 均有超过10个精选PR在活动，显示出其社区开发者的高参与度和项目本身的活跃开发状态。**GitHub Copilot CLI** 和 **Kimi Code CLI** 的PR活动相对较少。

#### 6. 有证据支撑的观察

- **观察一：计费与配额管理是跨工具普遍痛点。** Claude Code（1M窗口积分消耗）、OpenCode（对标DeepSeek降价）、Gemini CLI（静默降级模型）、Qwen Code（模型切换副作用）的多个高赞Issue表明，用户对费用产生机制、资源消耗方式和配置变更的透明度和控制力有强烈要求，这已演变为一个行业性的用户信任问题。

- **观察二：“标准化”呼声开始从单一工具蔓延至生态层面。** Claude Code社区对`AGENTS.md`的强烈诉求（#6235，4060 👍）是一个强烈信号。这表明用户不再满足于单点工具的使用，而是期待构建一个可以无缝切换、协同工作的AI编码工具链。这可能是生态走向成熟的重要标志。

- **观察三：底层系统级（PTY、syspolicyd、musl）稳定性问题是各工具的“公敌”。** 从Gemini CLI的PTY泄漏、到OpenAI Codex的macOS系统进程泄漏、再到OpenCode在Alpine Linux上的崩溃，这些底层问题顽固且跨工具出现，严重影响了工具的可靠性和用户信任。这些问题对专注于桌面和底层集成体验的工具（Gemini、Codex）影响最大。

- **观察四：会话与记忆管理的“跨会话、跨项目”需求日益凸显。** Qwen Code的跨项目自动记忆（#4747）和OpenCode的语境压缩丢失上下文（#30811）等相关讨论表明，用户期望模型不再是一个“一次性”的对话窗口，而是一个能够长期学习、积累个人和工作知识，并能在不同上下文中应用的“AI同事”。

- **观察五：今日暂无明确的跨工具“趋势”信号。** 尽管上述观察构成了共同方向，但今日数据尚不足以支撑“即将成为事实标准”或“爆发拐点”等强判断。例如，`AGENTS.md`虽在Claude Code社区呼声极高，但在其他工具社区中未见直接呼应（Qwen Code的规则系统Issue是询问而非强烈要求采用该标准）。各项功能需求仍处于各自工具的社区讨论和修复阶段。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026 年 6 月 5 日 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-06-05

## 今日更新概览

社区活跃度持续高涨，过去24小时内提交数十条新 Issue 和 PR，其中围绕“1M上下文窗口计费”的讨论依然是焦点。Anthropic 发布了 v2.1.163 版本，引入版本范围管理机制。此外，关于标准化 AGENTS.md 文件的支持诉求（Issue #6235）持续占据热度榜首。

## 版本发布

### v2.1.163 发布

- **新增**: 版本范围管理配置项 `requiredMinimumVersion` 和 `requiredMaximumVersion`。当 Claude Code 版本超出组织设定的范围时，将拒绝启动并引导用户升级或降级至经批准的版本。
- **新增**: `/plugin list` 命令，用于列出已安装的插件，支持 `--enabled` 和 `--disabled` 筛选参数。
- **相关链接**: [v2.1.163 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.163)

## 社区热点 Issues

1. **[Feature Request: 支持 AGENTS.md 标准化规范]**
   - **Issue #6235**: 随着 Codex、Amp、Cursor 等工具开始采用统一的 `AGENTS.md` 文件来帮助编码代理理解代码库，社区强烈呼吁 Claude Code 也遵循此标准，而非使用仅限 Claude 的 `CLAUDE.md`。
   - 评论数: 310，👍: 4060
   - **链接**: [Issue #6235](https://github.com/anthropics/claude-code/issues/6235)

2. **[BUG: 1M 上下文窗口需要消耗使用积分]**
   - **Issue #63060**: 用户反馈在 Pro 套餐下，Claude Code 默认启用 1M 上下文窗口，但此模式需要消耗“使用积分”（Usage Credits），导致用户在不知情的情况下消耗额外配额。
   - 评论数: 63，👍: 19
   - **链接**: [Issue #63060](https://github.com/anthropics/claude-code/issues/63060)

3. **[BUG: 工具调用解析失败导致处理中断]**
   - **Issue #62123**: 使用 opus 4.7 模型时，频繁出现 `The model's tool call could not be parsed (retry also failed)` 错误，导致任务中断，严重影响工作流。
   - 评论数: 45，👍: 91
   - **链接**: [Issue #62123](https://github.com/anthropics/claude-code/issues/62123)

4. **[BUG: “工具调用解析失败”错误在Windows平台上频繁出现]**
   - **Issue #63875**: 多个用户在 Windows 上报告了与 Issue #62123 相同的解析错误，表明该问题跨平台存在且影响范围较广。
   - 评论数: 32，👍: 45
   - **链接**: [Issue #63875](https://github.com/anthropics/claude-code/issues/63875)

5. **[BUG: Cowork功能编辑/写入文件时静默截断]**
   - **Issue #53940**: Cowork 模式下的 Edit/Write 工具存在字节缓冲区上限，导致文件被静默截断，该问题可稳定复现且影响所有文件大小。
   - 评论数: 22，👍: 11
   - **链接**: [Issue #53940](https://github.com/anthropics/claude-code/issues/53940)

6. **[Feature: VSCode 扩展需要类似 Copilot 的差异审查UI]**
   - **Issue #33932**: 用户请求在 VSCode 扩展中增加类似 GitHub Copilot Edits 的 diff review UI，以便在合并前逐条审查、拒绝或修改代码更改。
   - 评论数: 18，👍: 81
   - **链接**: [Issue #33932](https://github.com/anthropics/claude-code/issues/33932)

7. **[BUG: Pro 套餐在无操作时也反复达到使用限制]**
   - **Issue #61012**: 用户在未主动使用 Claude Code 的情况下，仍会收到使用限制已到的提示，计费机制存在异常。
   - 评论数: 9，👍: 3
   - **链接**: [Issue #61012](https://github.com/anthropics/claude-code/issues/61012)

8. **[Feature: 为. claude/skills/ 编辑权限回退]**
   - **Issue #36497**: 自 v2.1.79 版本起，编辑 `.claude/skills/` 下的文件时会弹出权限确认提示，违反了文档中关于该目录免受保护规则的说法。用户认为是回归问题。
   - 评论数: 8，👍: 10
   - **链接**: [Issue #36497](https://github.com/anthropics/claude-code/issues/36497)

9. **[BUG: 并行会话在同一个Git工作树上互相冲突]**
   - **Issue #52051**: 当用户同时运行两个 Claude Code 会话（如一个实现、一个审查）时，未提交的修改和分支切换会互相干扰，导致工作区混乱。
   - 评论数: 2，👍: 1
   - **链接**: [Issue #52051](https://github.com/anthropics/claude-code/issues/52051)

10. **[Feature: 远程会话缺少明确标识]**
    - **Issue #65527**: 当 Claude Code 操作远程机器时，UI 上无法清晰指示命令是运行在本地还是远程，尤其是在同一项目组下，本地和远程会话难以区分。
    - 评论数: 3，👍: 0
    - **链接**: [Issue #65527](https://github.com/anthropics/claude-code/issues/65527)

## 重要 PR 进展

1. **[修复: 自动关闭重复Issue脚本逻辑错误]**
   - **PR #65344**: 修复了在遍历分页Issue时的 `markStale()` 函数中提前返回的逻辑错误。同时为自动关闭重复Issue的脚本添加了 `--debug` 标志以改善调试体验。
   - **链接**: [PR #65344](https://github.com/anthropics/claude-code/pull/65344)

2. **[修复: 会话持久化数据丢失的诊断工具]**
   - **PR #44742**: 针对 VSCode 扩展因会话未可靠保存到磁盘而丢失历史记录的严重问题，新增了一个用户侧诊断脚本，帮助用户排查会话持久化失败的原因。
   - **状态**: 已关闭
   - **链接**: [PR #44742](https://github.com/anthropics/claude-code/pull/44742)

3. **[修复: 为 plugin-dev 添加缺失的 manifest 文件]**
   - **PR #65286**: 为 `plugin-dev` 插件添加了缺失的 `.claude-plugin/plugin.json` manifest 文件，使其能被标准的插件发现和安装机制正确识别。
   - **链接**: [PR #65286](https://github.com/anthropics/claude-code/pull/65286)

4. **[脚本: 新增识别浅色主题颜色冲突的诊断工具]**
   - **PR #65314**: 新增一个分类脚本，用于扫描关于浅色主题下文本不可读的 Issue，并将其归类到已知的 `color7`/`color0` 冲突问题中，便于问题追踪。
   - **链接**: [PR #65314](https://github.com/anthropics/claude-code/pull/65314)

5. **[修复: 安全指导插件中的拼写错误]**
   - **PR #65223**: 修正了安全指导插件中 `reqwest` 为 `request` 的拼写错误。
   - **状态**: 已关闭
   - **链接**: [PR #65223](https://github.com/anthropics/claude-code/pull/65223)

## 功能需求归类

- **IDE 集成与审查体验**：用户强烈希望在 VSCode 扩展中获得更精细的代码变更审查控制，例如像 Copilot 一样展示 diff 并允许逐条审批（#33932），以及批量显示所有更改后再批准的模式（#31888）。
- **标准化支持**：社区呼吁 Claude Code 支持 `AGENTS.md` 文件标准，以提升与 Cursor、Codex 等其他 AI 编码工具的互操作性（#6235）。
- **计费与模型体验**：1M 上下文窗口的计费逻辑引发大量困惑和不满，用户认为默认启用并消耗积分的行为不够透明（#63060, #61869, #62063）。同时，模型工具调用解析失败的问题（#62123, #63875）是另一个主要的可用性痛点。
- **并行工作流与安全性**：支持并行会话而不冲突（#52051）是用户提高效率的潜在需求。此外，用户也对 AI 模型推荐可能带来安全隐患的代码（如暴露敏感文件）表示担忧（#65517）。

## 开发者关注点

- **工具调用可靠性**：“模型工具调用无法解析（重试后仍然失败）”是开发者在最新版本中遇到的主要痛点，该问题在 Opus 模型上尤为突出，且跨平台（macOS, Windows）均有报告。
- **积分与计费混乱**：关于 1M 上下文窗口需要额外消耗使用积分的问题，导致许多 Pro 用户在无感知的情况下快速耗尽配额。开发者期望能更清晰地管理上下文窗口大小，或在会话启动时明确告知积分消耗情况。
- **VSCode扩展体验**：在 VSCode 中使用 Claude Code 时，缺乏像样的 Diff 审查界面是突出的短板，与 Cursor 等竞品相比差距明显。此外，VSCode 扩展的任务栏 UI 不够直观，无法清晰区分本地与远程会话。
- **默认行为与用户期望不符**：多个 Issue 反映了用户对 Claude Code 默认行为的不满，例如自动创建新分支（#64948）和默认启用 1M 上下文窗口（#62063）。用户希望这些行为是可配置的。
- **静默错误与数据丢失**：Cowork 工具静默截断文件（#53940）和 VSCode 扩展可能丢失会话历史（#44742）的问题，严重动摇了用户对工具稳定性的信心。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-06-05**
**数据来源：github.com/openai/codex**

---

## 今日更新概览

过去 24 小时 Codex 发布了 4 个 Rust CLI 的 alpha 版本（0.138.0-alpha.1~4），修复和优化集中在构建与平台兼容性上。Issue 与 PR 活跃度较高，**macOS 系统进程（syspolicyd）文件描述符泄漏** 是当前社区反馈最集中的性能故障，多个相关 issue 获得高赞；同时 Windows 桌面端的渲染与 WSL 集成问题持续被报告。

---

## 版本发布

| 版本 | 链接 |
|------|------|
| rust-v0.138.0-alpha.4 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.4) |
| rust-v0.138.0-alpha.3 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.3) |
| rust-v0.138.0-alpha.2 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.2) |
| rust-v0.138.0-alpha.1 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.1) |

**说明**：四个 alpha 版本均无附带更新日志，可能为内部连续性发布。暂无用户可见的变更细节。

---

## 社区热点 Issues（精选 10 条）

### 1. 📌 Linux 桌面应用功能请求
`#11023` — 476 👍 / 97 评论
**摘要**：用户因 macOS 版 Codex 桌面应用存在性能问题（引用 #10432）而转向 Linux 桌面，希望官方提供原生 Linux 支持。
[链接](https://github.com/openai/codex/issues/11023)

### 2. 🐛 桌面应用聊天历史消失
`#20741` — 14 👍 / 26 评论
**摘要**：macOS 用户更新后项目聊天记录全部丢失，App 版本 26.429.30905，订阅 ChatGPT Pro。影响范围广。
[链接](https://github.com/openai/codex/issues/20741)

### 3. 🐛 Windows + WSL 性能严重下降
`#25715` — 22 👍 / 21 评论
**摘要**：Codex 桌面版在 Windows 下以 WSL 为 Agent 环境时，操作延迟极高（“routine turns in …”）。用户使用 ChatGPT Pro。
[链接](https://github.com/openai/codex/issues/25715)

### 4. 🐛 macOS syspolicyd CPU/内存泄漏（重复触发）
`#25719` — 13 👍 / 14 评论
**摘要**：Codex Desktop 持续触发系统安全进程 `syspolicyd` / `trustd` 的 CPU 和内存暴涨，影响整个系统稳定性。Plus 订阅用户报告。
[链接](https://github.com/openai/codex/issues/25719)

### 5. 🐛 Windows 半透明侧边栏导致窗口渲染异常
`#25249` — 0 👍 / 13 评论
**摘要**：启用“半透明侧边栏”后，窗口最大化时左侧和顶部区域变为透明/未绘制。影响视觉体验。
[链接](https://github.com/openai/codex/issues/25249)

### 6. 🐛 macOS app 循环启动自身导致 syspolicyd 耗尽文件描述符
`#25882` — 9 👍 / 12 评论
**摘要**：Codex 在 macOS 上反复启动主二进制文件，耗尽系统安全进程的文件描述符，最终导致整个系统无法启动新应用。
[链接](https://github.com/openai/codex/issues/25882)

### 7. 🐛 Windows bundled 插件因 EFS 加密无法安装
`#25220` — 3 👍 / 12 评论
**摘要**：Microsoft Store 安装的 Codex 中，Computer Use、Browser、Chrome、LaTeX 等捆绑插件显示不可用，原因是复制文件时对 EFS 加密的 WindowsApps 文件失败。
[链接](https://github.com/openai/codex/issues/25220)

### 8. 🐛 macOS 上 Computer Use 查看 Outlook 时崩溃
`#20683` — 1 👍 / 11 评论
**摘要**：调用 `get_app_state` 查询 Outlook 时，`SkyComputerUseService` 崩溃。影响 Outlook 用户。
[链接](https://github.com/openai/codex/issues/20683)

### 9. 🐛 Windows 企业网络策略屏蔽浏览器功能
`#24814` — 0 👍 / 9 评论
**摘要**：Codex 内置浏览器因企业网络策略无法访问任何网站（包括 `example.com`），用户需要手动允许代理。
[链接](https://github.com/openai/codex/issues/24814)

### 10. 🐛 Windows 最大化窗口 UI 变形
`#25160` — 7 👍 / 7 评论
**摘要**：点击最大化后窗口顶部标题栏透明，UI 布局异常。Windows 10 用户报告。
[链接](https://github.com/openai/codex/issues/25160)

---

## 重要 PR 进展（精选 10 条）

### 1. 🔒 fix(rmcp)：启动前刷新过期 OAuth 令牌
`#26482`（已合并）
**修复**：当 persistent 的 `expires_at` 为过去时间时，Codex 会重建缺失的 `expires_in`，导致 RMCP 0.15 将空值视为零而失败。
[链接](https://github.com/openai/codex/pull/26482)

### 2. 🧱 core：从权限配置中派生文件系统策略
`#26499`（新）
**改进**：将 `FileSystemSandboxPolicy` 统一由 `PermissionProfile` 管理，消除 exec-policy 中的重复定义，避免测试和生产状态不一致。
[链接](https://github.com/openai/codex/pull/26499)

### 3. 🛡️ 添加托管 macOS sandbox 能力
`#26023`（新）
**功能**：为托管权限配置文件增加 macOS Seatbelt 能力，在运行时策略转换中保留这些能力，并保持 `codex sandbox macos` 调试标志作为诊断叠加层。
[链接](https://github.com/openai/codex/pull/26023)

### 4. 🔄 重试 RMCP 启动时的流式 HTTP 初始化失败
`#25147`（新）
**改进**：对 RMCP 启动过程中的 `initialize` 请求和只读的 `tools/list` 添加重试逻辑，覆盖可重试的 HTTP 状态码和请求层故障。
[链接](https://github.com/openai/codex/pull/25147)

### 5. 🪟 exec-policy 尊重 Windows sandbox 后端
`#26307`（新）
**修复**：Windows 托管文件系统权限现已支持真实的沙箱后端，之前 exec-policy 忽略此配置导致部分命令（如 PowerShell 目录列举）被误阻断。
[链接](https://github.com/openai/codex/pull/26307)

### 6. 🔗 Windows 桌面支持通过 deep link 打开工作区
`#26500`（新）
**功能**：`codex app PATH` 在 Windows 上可直接通过 `codex://threads/new?path=...` 打开指定工作区，而不再仅打印手动提示。修复 #26423。
[链接](https://github.com/openai/codex/pull/26500)

### 7. 🤖 自动审核模式下更主动的提示策略
`#26496`（新）
**改进**：对于自动审核的生产力运行，当 sandbox 阻止时，提前升级提示级别，避免需要远程服务或认证的命令在沙箱内失败。
[链接](https://github.com/openai/codex/pull/26496)

### 8. ⚡ 保持 Bazel 启动选项在命令间稳定
`#26256`（新）
**优化**：`just bazel-clippy` 之前会切换 `--experimental_remote_repo_contents_cache` 导致 Bazel 重启服务器。现在统一使用 workspace 默认值，避免反复 kill/restart。
[链接](https://github.com/openai/codex/pull/26256)

### 9. 📡 添加 `use_responses_lite` 覆盖逻辑
`#26487`（已合并）
**功能**：在 `ModelInfo` 中增加 `use_responses_lite` 字段，支持在响应 Lite 模式下序列化 `reasoning.context`，并保留现有 effort/summary 路径。未对任何模型启用。
[链接](https://github.com/openai/codex/pull/26487)

### 10. 🧰 为 Responses Lite 使用独立工具
`#26490`（新）
**功能**：Responses Lite 不执行托管 Responses 工具，因此模型必须通过 Codex 自有执行器和独立 Response API 端点来路由网络搜索和图像生成。
[链接](https://github.com/openai/codex/pull/26490)

---

## 功能需求归类

| 需求方向 | 对应 Issue / PR | 说明 |
|----------|----------------|------|
| **桌面应用平台支持** | #11023（Linux 原生桌面）、#26500（Windows deep link） | 社区对多平台桌面体验持续有诉求 |
| **性能与资源泄漏** | #25719、#25882、#26341（macOS 文件描述符泄漏） | 同一类 `syspolicyd` 问题被多名用户独立报告 |
| **Windows 兼容性** | #25715（WSL 慢）、#25249（半透明渲染）、#25220（插件不可用） | Windows + WSL 场景是持续痛点 |
| **Computer Use 稳定性** | #20683（Outlook 崩溃）、#25271（无法确定 Chrome URL） | macOS 和 Windows 上均有偶发崩溃 |
| **CLI 功能改进** | #21073（自动恢复限速后会话）、#24685（改进复制粘贴）、#26363（自定义 agent 不可选） | 用户期望 CLI 在限速、交互、自定义方面更完善 |
| **企业/网络策略** | #24814（企业代理屏蔽）、#26496（自动审核提升提示） | 在受限环境中需要更灵活的 sandbox 和网络控制 |
| **插件与 Sandbox 集成** | #26488（插件钩子视为内部）、#26307（Windows sandbox 后端） | 插件和沙箱后端的正确集成仍在完善 |

---

## 开发者关注点

- **macOS syspolicyd 文件描述符泄漏** 是最集中的性能故障，多个 issue（#25719、#25882、#26117、#26341）描述了相似现象：Codex 反复打开自身二进制文件，耗尽系统安全进程资源，最终导致 **DMG 文件报错“已损坏”** 或 **无法启动任何应用**。该问题影响从 Plus 到 Pro 订阅用户，但官方尚未给出明确修复时间。
- **Windows+WSL 环境** 的可用性仍需改进。除性能慢外，还出现了路径桥接导致首 token 延迟 20 秒（#23277）、Sandbox 启动失败（#25362）等障碍。
- **聊天历史丢失**（#20741）虽已存在一个月，但仍有新用户遇到，且缺乏官方回复。
- **CLI v0.137.0 的回归**（#26363）中自定义代理商无法选择，子 agent 继承父模型而非使用指定配置，影响工作流可靠性。
- **多次报告 Windows 窗口最大化渲染异常**（#25160、#25249），虽非致命，但影响日常使用体验，社区期望尽快修复。

以上为今日 Codex 社区动态。建议关注 macOS 性能问题的后续修复进展，以及 Windows/WSL 场景的优化 PR 合并情况。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 2026-06-05 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-06-05

## 今日更新概览

今日社区活跃度极高，共有超过 80 个 Issue 和 PR 被更新。核心关注点集中在 **PTY 内存泄漏与崩溃修复** 以及 **CJK (中日韩) 字符渲染与处理优化** 上，多项修复工作已进入 PR 阶段。此外，谷歌团队发布了两个版本：一个侧重于 CI 流程优化的夜间版 v0.47.0，以及一个针对特定补丁的 v0.45.1 版本。

## 版本发布

- **`v0.47.0-nightly.20260604.g4196596f7`**: 该夜间发布主要涉及 CI 流程的优化，包括添加了自动化的 PR 大小标签器和批处理工作流，并修复了 Fork 分支的 PR 写入权限问题。
- **`v0.45.1`**: 这是一个补丁版本，通过 cherry-pick 修复了 `v0.45.0` 版本中的一个特定问题，并由此创建了 `v0.45.1`。

## 社区热点 Issues

1.  **符号链接被搜索工具忽略** ([#22171](https://github.com/google-gemini/gemini-cli/issues/22171)): `bfsFileSearch` 和 `grep` 工具在处理符号链接重重的项目时，会静默跳过链接文件，导致上下文不完整。此问题对项目文档和配置文件查找影响较大。
2.  **`/copy` 命令后输入无响应** ([#24098](https://github.com/google-gemini/gemini-cli/issues/24098)): 用户在使用 `/copy` 命令后，输入字段会残留文本并变得无响应，需要手动清除。这是一个影响日常交互流畅性的 Bug。
3.  **Mercurial 仓库工作区根目录检测失败** ([#21597](https://github.com/google-gemini/gemini-cli/issues/21597)): 当前 CLI 要求项目必须包含 `.git` 目录才能锚定本地策略，导致在 Mercurial (Hg) 仓库中配置失败。该问题影响非 Git 用户的核心体验。
4.  **请求无响应、卡死** ([#24264](https://github.com/google-gemini/gemini-cli/issues/24264)): 部分用户报告无法与任何模型对话，请求会一直卡住。该问题获得 5 个 👍，表明有较多用户受到影响。
5.  **HDD 上启动时间极慢** ([#21662](https://github.com/google-gemini/gemini-cli/issues/21662)): 在机械硬盘上，冷启动 `gemini --help` 耗时长达 77 秒，严重影响开发体验，是一个 P1 优先级的性能问题。
6.  **关键工作流损坏：API 容量耗尽时静默降级模型** ([#24039](https://github.com/google-gemini/gemini-cli/issues/24039)): 当用户指定的模型因容量限制（429 错误）不可用时，CLI 会静默切换到其他模型，但没有提示用户，导致用户感知行为不一致。
7.  **`ShellExecutionService` PTY 内存和文件描述符泄漏** ([#27155](https://github.com/google-gemini/gemini-cli/issues/27155)): 长时间运行的后台 shell 执行（如 MCP 服务器）会导致 `ptyProcess` 持久未被回收，造成严重的内存泄漏。这是当前社区关注的稳定性热点之一。
8.  **`Auto-Context` 路径解析误伤邮件地址** ([#23527](https://github.com/google-gemini/gemini-cli/issues/23527)): 自动上下文功能对 `@` 符号的路径解析过于激进，会错误地将邮件地址或配置字符串当作文件路径处理，导致解析异常。
9.  `AfterAgent`/`AfterModel` Hook 包含重复文本 ([#27030](https://github.com/google-gemini/gemini-cli/issues/27030)): 使用 Hook 功能时，流式传输的响应在传递给 Hook 的 payload 中会出现文本重复或损坏，影响依赖此功能的扩展和工具。
10. **Windows 上嵌入式终端卡死** ([#27334](https://github.com/google-gemini/gemini-cli/issues/27334)): 在 Windows 平台的嵌入式终端中，执行后台进程或本地构建命令后，终端会卡死或显示异常，对 Windows 用户影响较大。

## 重要 PR 进展

1.  **修复 PTY 内存泄漏与崩溃** ([#27348](https://github.com/google-gemini/gemini-cli/pull/27348), [#27354](https://github.com/google-gemini/gemini-cli/pull/27354), [#27347](https://github.com/google-gemini/gemini-cli/pull/27347), [#27529](https://github.com/google-gemini/gemini-cli/pull/27529)): 多个 PR 针对 PTY 相关问题进行修复，包括在崩溃时避免 `cannot read properties of undefined` 错误、禁止自然语言被保存为 shell 命令、以及在 WSL 环境下自动绕过 `node-pty` 以解决兼容性问题。
2.  **修复 CJK 字符显示问题** ([#27349](https://github.com/google-gemini/gemini-cli/pull/27349), [#27505](https://github.com/google-gemini/gemini-cli/pull/27505)): 分别修复了 CJK 字符在模型思考输出中显示不正确（如混入英文控制字符）、以及 CJK 宽字符间出现多余空格的问题，提升了国际用户的体验。
3.  **修复 A2A 任务工作区路径与信任问题** ([#27343](https://github.com/google-gemini/gemini-cli/pull/27343), [#27337](https://github.com/google-gemini/gemini-cli/pull/27337)): 解决了 A2A (Agent-to-Agent) 任务中工作区存档路径未能基于持久化设置的问题，并且将任务工作区的信任检查从请求元数据迁移到服务端验证，增强了安全性。
4.  **修复 SSRF 漏洞：Web 抓取工具跟随重定向** ([#27335](https://github.com/google-gemini/gemini-cli/pull/27335)): 修复了 `web-fetch` 工具中，初始 URL 的 SSRF 检查无法跟随 HTTP 重定向的问题，防止恶意服务器通过重定向访问内网资源。
5.  **修复 CLI 启动时因缺少目录而崩溃** ([#27329](https://github.com/google-gemini/gemini-cli/pull/27329)): 当 `settings.json` 中配置的 `includeDirectories` 路径不存在时，CLI 会直接崩溃。该 PR 将其修复为静默跳过不存在的目录，提高了启动的鲁棒性。
6.  **修复函数调用 ID 导致的 API 400 错误** ([#27341](https://github.com/google-gemini/gemini-cli/pull/27341)): 解决了工具调用后下一次请求因 `function_call` 和 `function_response` 中的 `id` 字段不合法而触发 400 错误的问题。
7.  **修复 `GEMINI_CLI_HOME` 环境变量相关的配置路径问题** ([#27524](https://github.com/google-gemini/gemini-cli/pull/27524), [#27331](https://github.com/google-gemini/gemini-cli/pull/27331)): 当用户设置 `GEMINI_CLI_HOME` 时，CLI 未能从正确的路径读取设置文件，相关 PR 修正了此问题并更新了文档。
8.  **修复 `isFunctionCall` 对空 `parts` 的判断** ([#27527](https://github.com/google-gemini/gemini-cli/pull/27527)): 增加了对 API 响应中可能出现的空 `parts` 数组的保护性判断，防止在处理函数调用时因访问空对象而崩溃。
9.  **清理和翻译主题：`~/gemini-Themes` 目录** ([#27453](https://github.com/google-gemini/gemini-cli/pull/27453)): 社区开发者清理了 `~/gemini-Themes` 主题目录中的多余文件，并将其翻译成英文，旨在推广主题功能。
10. **新增 `summarize` 命令的“偷窥”机制** ([#27535](https://github.com/google-gemini/gemini-cli/pull/27535)): 社区新增功能，允许在 `summarize` 命令输出时，默认展示新内容的摘要，增强了交互的及时性。

## 功能需求归类

- **CJK/国际化支持**: 用户持续反馈非英语环境下（特别是中日韩）的渲染、输入和输出问题，如 CJK 字符显示错误、Auto-Context 误伤邮件地址等。
- **终端稳定性与PTY**: 大量 Issue 和 PR 围绕 PTY 展开，包括内存泄漏、文件描述符泄漏、Windows 和 WSL 下的终端卡死/崩溃，是当前社区最关注的技术债务。
- **安全与配置路径**: 用户关注 `GEMINI_CLI_HOME` 配置路径、`settings.json` 文件名错误、以及 SSRF 漏洞等安全问题，这表明企业级用户对正确配置和安全性有明确需求。
- **企业治理与VCS支持**: 持续有用户提出对 Mercurial 等非 Git VCS 的支持，以及对本地策略锁定、托管策略 UI 等企业管理功能的需求。
- **Agent 功能扩展与限制**: 用户希望增加 Agent 的并行性、Token/上下文窗口大小，并提出了针对 MCP 服务器只读工具、任务工作区信任等更精细的控制需求。
- **性能与资源管理**: 从启动时间过长到 Token 不准确、容量耗尽等问题，用户对 CLI 的底层性能、资源管理和使用透明度的需求很强烈。

## 开发者关注点

- **PTY 相关稳定性是最大痛点**: 从 Issue 和 PR 的密集程度看，PTY 相关的内存泄露、文件描述符泄露以及跨平台（特别是 Windows/WSL）的终端崩溃问题是目前社区开发者和用户反馈最集中的痛点。
- **CJK 字符处理有历史遗留问题**: 多个 PR 针对 CJK 字符渲染和输入进行了修复，表明这部分功能在早期可能未被充分测试，是国际用户使用的主要障碍。
- **企业/高级用户对配置和安全性要求高**: 涉及企业功能（如非 Git VCS、代理配置、SSRF修复）的 Issue 和 PR 频繁出现，表明 Gemini CLI 的用户群体正在从个人开发者扩展到更复杂的企业环境。
- **“静默”行为引发信任危机**: 多个 Issue 反馈 CLI 在特定场景下（如模型降级、Hook 数据损坏、搜索工具跳过链接）会发生“静默”或“不透明”的行为，开发者期望 CLI 能提供更明确的反馈和日志。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，这是为您生成的 2026-06-05 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-05

## 今日更新概览

今日发布了 v1.0.60-0 版本，主要新增了计费帮助主题、vim 导航键支持及会话信息展示等。社区活跃度较高，过去24小时内共有 35 个 Issue 和 2 个 PR 被更新，其中 Copy/Paste 快捷键冲突及会话恢复后认证状态丢失是用户反馈最集中的问题。

## 版本发布

### v1.0.60-0
**链接**: [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.60-0)

**新增功能**:
- **计费与用量**: 增加了新的 `billing` 帮助主题，提供了 AI 信用用量功能的概述。
- **交互体验**: 为 `/diff` 视图添加了 vim 风格的导航键支持（`g`， `G`, `Ctrl+D`， `Ctrl+U`）。
- **会话管理**: 在 `/session info` 视图中，现在可以显示同步会话的 Mission Control 共享状态。
- **快捷键**: 新增 `-r` 作为 `--resume` 的简写。
- **配置**: 新增 LSP 服务器配置项 `a`（具体功能待进一步明确）。

## 社区热点 Issues

1.  **[#2082] Linux 上复制快捷键 ctrl+shift+c 失效**
    - **影响**: 影响所有 Ubuntu 24.04 等 Linux 用户，`ctrl+shift+c` 在 CLI 中不再能复制文本。
    - **社区反应**: 19 条评论，8 个赞，属于历史遗留问题，至今未修复，社区关注度较高。
    - **链接**: https://github.com/github/copilot-cli/issues/2082

2.  **[#3260] SSH + tmux 环境下 Copy/Paste 功能损坏**
    - **影响**: 影响通过 SSH 连接到 Windows Server 2025，且客户端在 tmux 会话中的用户，升级至 v1.0.47 后出现此问题。
    - **社区反应**: 6 条评论，问题场景较为具体但复现明确。
    - **链接**: https://github.com/github/copilot-cli/issues/3260

3.  **[#3529] Copilot PR 审查功能报错**
    - **影响**: 用户在请求 Copilot 进行 Pull Request 审查时，频繁遇到“Copilot encountered an error”的错误，导致审查功能无法使用。
    - **社区反应**: 3 条评论，3 个赞。问题影响开发流程，用户反馈已付费但功能不可用。
    - **链接**: https://github.com/github/copilot-cli/issues/3529

4.  **[#3596] 恢复会话后无法列出可用模型**
    - **影响**: 当用户使用 `copilot --resume` 恢复特定会话后，`/model` 命令失效，并报错“Not authenticated”。
    - **社区反应**: 2 条评论，8 个赞。此问题严重影响多会话管理的用户，点赞数较高，表明这可能是普遍痛点。
    - **链接**: https://github.com/github/copilot-cli/issues/3596

5.  **[#3636] 企业 VPN 环境下无法启用语音模式**
    - **影响**: 在受限制的企业网络环境中，CLI 无法获取语音模型目录，导致 `/voice` 功能完全无法使用。
    - **社区反应**: 2 条评论，3 个赞。
    - **链接**: https://github.com/github/copilot-cli/issues/3636

6.  **[#3653] Linux 上本地沙箱模式无法工作**
    - **影响**: 根据 GitHub 官方博客宣布的沙箱功能，Linux 用户无法正常启用，限制了安全执行环境的可用性。
    - **社区反应**: 1 条评论。
    - **链接**: https://github.com/github/copilot-cli/issues/3653

7.  **[#3666] 复制换行输出时意外丢失空格**
    - **影响**: 当复制 CLI 生成的、因换行而被包装的代码时，文本间的空格可能被删除，例如 `var c = ""` 会变成 `varc`。
    - **社区反应**: 3 条评论。影响日常代码复制使用体验。
    - **链接**: https://github.com/github/copilot-cli/issues/3666

8.  **[#3674] /undo 命令错误恢复已删除文件**
    - **影响**: 用户在 Git 仓库中调用 `/undo` 时，可能会错误地将 Git 中已删除的文件恢复回来，或重置非 Copilot 引起的文件变更。
    - **社区反应**: 用户担心此行为可能导致工作丢失。
    - **链接**: https://github.com/github/copilot-cli/issues/3674

9.  **[#3677] 模型上下文压缩比例异常**
    - **影响**: 使用 `claude-opus-4.7-1m-internal` 等拥有大上下文窗口的模型时，CLI 错误地使用了较小的上下限制（128K），导致在仅使用 18% 容量时即触发上下文压缩。
    - **社区反应**: 1 条评论。此问题可能导致长上下文工作流的性能下降。
    - **链接**: https://github.com/github/copilot-cli/issues/3677

10. **[#3676] /session 命令不再列出除当前会话外的其他会话**
    - **影响**: 升级到 v1.0.59 后，`/session` 命令只能显示当前会话，用户无法通过此命令方便地找到并恢复来自其他工作区的历史会话。
    - **社区反应**: 1 条评论，已被关闭。
    - **链接**: https://github.com/github/copilot-cli/issues/3676

## 重要 PR 进展

过去24小时内，仅有 2 个 PR 被更新，且均非功能性修复或重大变更：
- **#3651**: 创建 xcopilotcli（项目创建相关）。
- **#3473**: 更新 README 项目名称（疑似恶意或测试提交）。

今日无关键性的代码修复或功能合并 PR。

## 功能需求归类

基于近期 Issues，社区反复提及的需求可归类如下：

- **键盘交互与快捷键**: 包括对 vim 键位支持（已部分实现在 `/diff` 视图中）、自定义快捷键以及解决 `ctrl+shift+c` 等系统级快捷键冲突。
- **会话与工作区管理**: 如支持机器级别的默认权限配置文件，能够更便捷地跨工作区恢复、管理和清理会话工作区。
- **权限与安全**: 关注子代理权限提示缺乏上下文、敏感操作确认机制，以及凭证（如 MCP OAuth 令牌）的安全存储。
- **代理与工具链**: 涉及主代理与子代理间的通信问题、自定义代理的配置灵活性（如配置模型 effort level）。
- **本地化与国际化**: 有用户提出希望支持命令描述等界面的西班牙语翻译。
- **插件与钩子系统**: 围绕 `hooks` 功能的执行路径兼容性（如 `~` 不展开）、跨项目共享配置文件的能力。

## 开发者关注点

- **键盘快捷键冲突与稳定性**: Linux 和跨平台（macOS/Windows + SSH + tmux）的复制粘贴问题是目前的突出痛点，直接影响核心操作。
- **会话中断与认证丢失**: 恢复会话后，模型列表加载失败 (`/model` 报错) 是一个高频且影响较大的问题，多个 Issue 指向此问题。
- **权限与执行安全**: 开发者对子代理执行命令时的权限提示缺乏上下文表示担忧，同时希望有更灵活的默认权限配置，以减少重复审批。
- **新功能兼容性**: 官方新推出的本地沙箱模式在 Linux 上的不可用，以及企业网络环境下语音模式的故障，显示出新功能在特定环境下的适配不足。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为您生成的 2026-06-05 Kimi Code CLI 社区动态日报。

---

## Kimi Code CLI 社区动态日报 | 2026-06-05

### 今日更新概览
过去 24 小时内，社区围绕 **403 认证与授权错误** 以及 **终端 UI 交互体验** 展开了集中讨论。同时，多位维护者提交了针对会话历史回放、粘贴文本处理等底层机制的修复性 PR，其中一项 PR 直接关联并修复了用户反馈的“终端自动滚屏”问题。

### 社区热点 Issues

1. **[严重] 403 认证错误：用户遭遇普遍性访问限制**
   **Issue #2425** 与 **Issue #2427** 均报告了用户在使用 `kimi-for-coding` 模型时收到 `403 Forbidden` 错误，提示该模型“仅对编码代理可用”。该问题涉及不同版本（0.9.0, 1.46.0）和平台（macOS, WSL2），社区讨论活跃（#2425 有 10 条评论），表明这可能是一个服务端策略或 API 密钥验证问题。
   - 链接: [#2425](https://github.com/MoonshotAI/kimi-cli/issues/2425), [#2427](https://github.com/MoonshotAI/kimi-cli/issues/2427)

2. **[UI/UX] 对话完成后滚动查看内容自动回到底部**
   **Issue #2422** 报告了在对话结束后，用户向上滚动阅读历史输出时，终端会每隔约 1 秒自动跳转回底部，导致长输出的阅读体验极差。该问题已被社区开发者定位并提交修复。
   - 链接: [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422)

3. **[稳定性] 任务执行中途自动登出**
   **Issue #2430** 报告用户在离开任务等待期间返回时，发现被“auto logged out”（自动登出），导致任务中断。这影响了长时间运行的自动化工作流。
   - 链接: [#2430](https://github.com/MoonshotAI/kimi-cli/issues/2430)

4. **[平台差异] VS Code 扩展中 '/title' 命令不可用**
   **Issue #2428** 指出在 VS Code 的 Kimi Code 扩展中使用 `/title` 命令无效，表明该命令在独立 CLI 和 VS Code 扩展中的实现存在差异。
   - 链接: [#2428](https://github.com/MoonshotAI/kimi-cli/issues/2428)

5. **[性能] 引擎过载与响应速度下降**
   **Issue #2424** 和 **#2423** 分别报告了近期（过去几天）与最新版本（1.46.0）中遇到“engine overloaded”错误和响应速度显著变慢的问题。多个用户反馈新版性能不如以前。
   - 链接: [#2424](https://github.com/MoonshotAI/kimi-cli/issues/2424), [#2423](https://github.com/MoonshotAI/kimi-cli/issues/2423)

### 重要 PR 进展

1. **[修复] 修复终端自动滚屏问题**
   **PR #2429** 由社区开发者 @GH-ytym 提交，直接针对 Issue #2422，通过阻止空闲光标闪烁强制滚动到底部的行为，解决了 Linux 终端下的自动跳转问题。
   - 链接: [#2429](https://github.com/MoonshotAI/kimi-cli/pull/2429)

2. **[修复] 持久化粘贴文本占位符**
   **PR #2388** 旨在修复长文本被折叠为 `[Pasted text #1]` 后，在会话历史恢复时丢失的问题，确保上下文一致性。
   - 链接: [#2388](https://github.com/MoonshotAI/kimi-cli/pull/2388)

3. **[修复] 保留 Shell 命令标题详情**
   **PR #2387** 优化了终端中 `Used Shell (...)` 行标题的显示，避免对长命令进行不合理的截断，提升可读性。
   - 链接: [#2387](https://github.com/MoonshotAI/kimi-cli/pull/2387)

4. **[修复] 映射会话撤销操作与上下文更新**
   **PR #2386** 修复了 `/undo` 操作可能无法正确同步上下文截断的问题，确保撤销操作在逻辑上与数据状态一致。
   - 链接: [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386)

5. **[修复] 修复会话历史回放中的孤立工具调用**
   **PR #2383** 解决了当会话在中途被意外终止（如内存压力、进程杀死）时，恢复后可能遗留无效 `tool_calls` 数据的问题，提高了对话恢复的稳定性。
   - 链接: [#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383)

6. **[修复] 自动转换不支持的图片格式**
   **PR #2382** 使 `ReadMediaFile` 功能在遇到 `.ico` 等非标准图片格式时，能自动转换为 `PNG` 格式，以兼容上游模型（如 Anthropic, Google）的图像输入要求。
   - 链接: [#2382](https://github.com/MoonshotAI/kimi-cli/pull/2382)

### 功能需求归类

根据过去 24 小时的 Issue 反馈，用户核心关注点可归纳如下：
- **服务端访问与认证**：解决 `403 Forbidden` 错误，确保付费用户能稳定使用 `kimi-for-coding` 等特定模型。
- **终端交互体验**：修复自动滚动等干扰性 UI 行为，改善长输出的阅读体验。
- **系统稳定性**：解决任务执行中的自动登出和引擎超载问题，确保长时间任务的可靠性。
- **集成兼容性**：确保 CLI 命令和功能在 VS Code 扩展环境中完全可用。

### 开发者关注点

当前开发者社区反馈的痛点和高频需求集中在：
- **性能退化**：用户普遍对新版本的响应速度表示不满，期待回归或超越旧版本的性能水平。
- **频繁的认证/授权问题**：部分用户无法正常使用特定模型，影响了工具的核心功能，需要官方尽快澄清服务策略或修复 API 验证漏洞。
- **跨环境的一致性**：开发者在不同终端环境（Linux, macOS, WSL2）和 IDE 集成（VS Code）中遇到了不一致的行为，希望获得更统一的体验。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-05

---

## 1. 今日更新概览

今日 OpenCode 社区活跃，共更新了 50 个 Issue 和 50 个 Pull Request。内存问题集中讨论帖（#20695）持续高热（90 条评论），DeepSeek V4 Pro 永久降价 75% 引发使用限制调整建议（#28846）获得广泛支持。多个关键 Bug 修复 PR 处于开放或已合并状态，包括子代理模型变体未应用、压缩摘要失败循环等。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues（10 条）

### #20695 – Memory Megathread（🔥 90 评论，👍 63）
[issue](https://github.com/anomalyco/opencode/issues/20695)
**影响场景**：用户报告多种内存问题，项目方请求集中收集堆快照。明确要求“不要运行 LLM 猜测解决方案”，仅需手动抓取快照。

### #28846 – [FEATURE] 调整 Go 使用限制以反映 DeepSeek V4 Pro 永久降价 75%（69 评论，👍 74）
[issue](https://github.com/anomalyco/opencode/issues/28846)
**影响场景**：DeepSeek V4 Pro API 价格永久降低 75%，社区建议 OpenCode Go 订阅的配额相应调整。评论中大部分表示支持，项目方尚未正式回复。

### #27589 – TUI 在 Alpine Linux (musl) 上崩溃（27 评论，👍 12）
[issue](https://github.com/anomalyco/opencode/issues/27589)
**影响场景**：1.14.50 版本在 musl C 库环境下无法初始化 TUI 渲染库，报错`getcontext`符号未找到。1.14.48 正常，确认是回归问题。

### #27530 – 启动时“4 of 5 requests failed”服务器错误（26 评论，👍 16）
[issue](https://github.com/anomalyco/opencode/issues/27530)
**影响场景**：运行`opencode`后立即报错，涉及`config.providers`、`provider.list`、`app.agents`等请求均返回“Unexpected server error”。影响所有使用该版本的用户的正常启动。

### #590 – 使用本地模型（Ollama）无法写入文件（18 评论，👍 1）
[issue](https://github.com/anomalyco/opencode/issues/590)
**影响场景**：调用 Ollama 本地模型时能收到`write`工具调用 JSON，但文件实际不被写入。问题持续近一年，至今未修复。

### #12789 – “The requested model is not supported.” 错误（16 评论，👍 10）
[issue](https://github.com/anomalyco/opencode/issues/12789)
**影响场景**：GitHub Copilot 提供商下 Claude 模型不可用，Gemini 正常。用户已重试认证，问题依旧。

### #20118 – 查询失败：`PRAGMA journal_mode = WAL`（10 评论，👍 10）
[issue](https://github.com/anomalyco/opencode/issues/20118)
**影响场景**：版本回退后数据库兼容出错，SQLite 查询执行失败，缺少错误处理和日志。

### #20954 – GitHub Copilot 模型均不可用（8 评论）
[issue](https://github.com/anomalyco/opencode/issues/20954)
**影响场景**：尽管订阅激活、设置启用、配额充足，GPT 和 Claude 模型均返回“不受支持”，Gemini 输出异常。

### #27749 – `/exit` 命令在 Windows PowerShell 中杀死终端（6 评论，👍 1）
[issue](https://github.com/anomalyco/opencode/issues/27749)
**影响场景**：使用`/quit`或`/exit`退出 TUI 时，整个终端窗口关闭而非返回 shell 提示符。Windows 11 下复现，项目方已确认。

### #30811 – [FEATURE] 长对话代码质量下降，压缩丢失上下文（6 评论）
[issue](https://github.com/anomalyco/opencode/issues/30811)
**影响场景**：对话变长后 AI 错误增多，压缩（compaction）丢弃早期上下文，且编辑后缺乏自动验证。用户建议每次编辑后验证文件完整性。

---

## 4. 重要 PR 进展（10 条）

### #30836 — fix(opencode): finish errored compaction summaries（开放）
[PR](https://github.com/anomalyco/opencode/pull/30836)
**内容**：修复压缩摘要失败时留下未完成`finish`的 assistant 消息，导致循环重试。修复 #30806。

### #30837 — fix(opencode): optimize first-time snapshot.track & add UI for clarity（开放）
[PR](https://github.com/anomalyco/opencode/pull/30837)
**内容**：优化首次快照追踪，降低快照目录重复数据，部分处理 #9290 和 #12437。新增 UI 提示。

### #24962 — [contributor] fix(opencode): apply agent variant when no explicit model is configured（开放）
[PR](https://github.com/anomalyco/opencode/pull/24962)
**内容**：修复子代理的`variant`设置在 v1.4.0 中无效的问题（#21632），恢复 v1.3.17 的行为。

### #30789 — [contributor] feat(core): persist v2 session context epochs（开放）
[PR](https://github.com/anomalyco/opencode/pull/30789)
**内容**：持久化 V2 会话的系统上下文“纪元”，将不变基线与结构化源快照以时间顺序存储为系统消息，提升会话重启后的上下文一致性。

### #30832 — [contributor] feat(core): attach global native tools（开放）
[PR](https://github.com/anomalyco/opencode/pull/30832)
**内容**：允许嵌入应用通过公开 API 定义同进程工具并动态附加到运行中的 OpenCode 实例。面向 Embedding 场景。

### #30678 — feat(app): improve desktop multi-server support（开放）
[PR](https://github.com/anomalyco/opencode/pull/30678)
**内容**：桌面版多服务器 Home 页改进：支持聚焦某服务器、按项目过滤近期会话、从服务器头部添加项目。项目状态与所属服务器隔离。

### #30824 — [contributor] feat(app): color themes（已关闭/合并）
[PR](https://github.com/anomalyco/opencode/pull/30824)
**内容**：新增运行时主题解析函数`resolveThemeVariantV2`，将主题调色板映射为 V2 语义令牌。已合并入主分支。

### #30828 — [contributor] feat(core): add public native API（已关闭/合并）
[PR](https://github.com/anomalyco/opencode/pull/30828)
**内容**：添加`@opencode-ai/core/public`作为官方原生 Effect API 入口，公开`OpenCode`、`Session`、`Prompt`等核心类型，定义受支持的会话操作表面。

### #30477 — feat: add "reasoning" as interleaved field option for vLLM providers（开放）
[PR](https://github.com/anomalyco/opencode/pull/30477)
**内容**：允许将`reasoning`作为模型`interleaved.field`的值（新增选项），与现有的`reasoning_content`/`reasoning`并列，增强与 vLLM 的兼容性（#19988）。

### #30488 — [contributor, beta] feat(tui): allow backgrounding synchronous subagents（开放）
[PR](https://github.com/anomalyco/opencode/pull/30488)
**内容**：添加后台任务提升路径，使同步子代理可被分离而不需重启。暴露 POST 端点，在 TUI 底部显示`ctrl+b background`提示。

---

## 5. 功能需求归类

从今日 Issues 和 PRs 中可归纳出以下用户反复提及的需求方向：

- **内存与性能优化**：内存问题集中帖（#20695）、压缩上下文丢失（#30811）表明用户对长期会话的稳定性要求迫切。
- **模型兼容性**：DeepSeek V4 Pro 降价后配额调整（#28846）、vLLM 推理字段支持（#30477）、Amazon Bedrock GPT-5.5/5.4 支持（#30819）反映社区要求快速适配新模型和降价变化。
- **终端/TUI 兼容性**：Alpine Linux musl 崩溃（#27589）、Windows 退出杀死终端（#27749）、tmux/zellij 下通知不工作（#29099）凸显多平台适配不足。
- **会话与数据管理**：请求`--resume`恢复会话（#18569）、删除会话留有残留数据（#30814）、会话时间戳使用 UTC 而非本地时间（#30347）说明用户对会话持久化和易用性有更高期待。
- **安全性**：提示注入（#30799）和读取前检查缺失（#30795、#30791）引起社区对工具安全的关注。
- **子代理行为**：子代理无限重试（#17169）、模型变体未应用（#21632）影响复杂工作流的成本和控制。

---

## 6. 开发者关注点

- **内存泄漏影响生产使用**：#20695 中用户分散报告，项目方直接要求堆快照而非猜测方案。
- **本地模型工具调用失败**：#590 长期未解决，影响 Ollama 用户的基本文件操作。
- **子代理无限重试导致高 API 成本**：#17169 提到单次子代理调用可能产生 $15+ 费用，社区呼吁加入重试上限。
- **压缩算法破坏会话上下文**：#30811 和 #30834 指出压缩摘要失败后无限重试或丢失关键上下文，开发者正在修复（#30836）。
- **Windows 终端异常退出**：#27749 和 #28673 均报告`/exit`或 Ctrl+C 杀死父进程，影响 Windows 开发者日常使用。
- **跨平台兼容性仍是瓶颈**：Alpine Linux、Windows PowerShell、tmux 等多环境下的回归问题持续出现，要求维护者在 CI 中增加多平台测试。

---

*日报数据来源：[GitHub - anomalyco/opencode](https://github.com/anomalyco/opencode)，数据截止 2026-06-05 UTC。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 2026-06-05 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-06-05

**数据来源:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

## 今日更新概览

Qwen Code 今日发布了 `v0.17.1` 的夜版本，主要修复了 CLI 复制输出和自动更新等问题。社区活跃度较高，过去24小时内有30个 Issue 和50个 PR 更新，围绕模型切换、统计能力增强、用户记忆功能及多项 Bug 修复展开了密集的讨论与开发。

## 版本发布

### v0.17.1-nightly.20260605.715266537

- **发布链接:** [v0.17.1-nightly.20260605.715266537](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260605.715266537)
- **更新内容:** 本次夜版本为 `v0.17.1` 的正式发布做准备，并包含一个关键修复。
  - **Bug 修复**:
    - **`fix(cli): skip thought parts in copy output`**: 修复了 `/copy` 命令会复制模型内部思考内容到剪贴板的问题。用户现在可以干净地复制模型的最终输出，无需手动清理思考过程。

## 社区热点 Issues

1.  **#4722 [CLOSED] 状态栏显示模型 ID 而非名称**
    - **链接:** [Issue #4722](https://github.com/QwenLM/qwen-code/issues/4722)
    - **摘要:** 状态栏只显示原始模型 ID（如 `qwen3-coder-plus`），而不是用户友好的名称（如 `Qwen3 Coder Plus`）。在多模型设置下，这会阻碍用户识别当前使用的模型。
    - **社区反应:** 已关闭，表明该问题已得到修复或处理。

2.  **#4754 [CLOSED] `/model` 命令不应默认持久化设置**
    - **链接:** [Issue #4754](https://github.com/QwenLM/qwen-code/issues/4754)
    - **摘要:** 用户在执行 `/model qwen-plus` 命令时，该命令不仅切换了当前会话模型，还将其写入 `settings.json`，导致重启后模型被永久更改。用户希望该命令仅作用于当前会话。
    - **社区反应:** 该需求被社区积极响应，开发者已关闭此 Issue，暗示相关调整已在进行或完成。

3.  **#4723 [OPEN] Qwen Code 是否支持类似 Claude Code 的规则/指令系统？**
    - **链接:** [Issue #4723](https://github.com/QwenLM/qwen-code/issues/4723)
    - **摘要:** 用户询问 Qwen Code 是否具备基于规则的系统，用于统一设置语言风格、跨会话指南等，类似 Claude Code 的 Rules 或 Copilot 的 Instructions。这反映了用户对一致化行为控制的需求。

4.  **#3568 [CLOSED] 为并发子代理添加可配置限制**
    - **链接:** [Issue #3568](https://github.com/QwenLM/qwen-code/issues/3568)
    - **摘要:** 用户在本地运行模型时，希望子代理能串行执行而非并行，以解决并行执行带来的整体性能问题。建议添加一个并发子代理数量上限的配置项。
    - **社区反应:** 该 Issue 已关闭，暗示相关功能可能已实现或此需求已在其他方案中得到解决。

5.  **#4597 [OPEN] 增强 `stats` 能力，支持跨会话全局用量统计**
    - **链接:** [Issue #4597](https://github.com/QwenLM/qwen-code/issues/4597)
    - **摘要:** 用户希望增强 `/stats` 命令，使其能够将用量数据持久化到本地文件，并支持跨会话的历史趋势和聚合用量分析，对标 Claude Code 的 Stats 体验。该需求获得了社区点赞。

6.  **#4747 [OPEN] 支持跨项目的用户级自动记忆**
    - **链接:** [Issue #4747](https://github.com/QwenLM/qwen-code/issues/4747)
    - **摘要:** 当前自动记忆按项目存储，导致用户的偏好、工作风格等信息需要在新项目中重新学习。用户建议增加全局 `~/.qwen/memories/` 目录，用于存储通用的用户级记忆。

7.  **#4783 [OPEN] 关于 `aes-128-ecb` 加密算法的安全性**
    - **链接:** [Issue #4783](https://github.com/QwenLM/qwen-code/issues/4783)
    - **摘要:** 用户对项目中使用的 `aes-128-ecb` 加密算法提出安全性疑问，并询问是否可以替换。这暴露了开发者在安全性方面的关注。

8.  **#4421 [OPEN] 本地问题诊断框架：Ring Buffer + Diagnostic ID**
    - **链接:** [Issue #4421](https://github.com/QwenLM/qwen-code/issues/4421)
    - **摘要:** 用户提议构建一个本地诊断框架，使用环形缓冲区记录近期的 API/SSE 流异常，配合诊断 ID 和 `/bug collect bundle` 命令，帮助用户在不开启 Debug 模式的情况下也能收集有效的反馈信息。

9.  **#4264 [OPEN] 请求 `/compress-fast` 非 AI 辅助的上下文压缩**
    - **链接:** [Issue #4264](https://github.com/QwenLM/qwen-code/issues/4264)
    - **摘要:** 用户希望增加一个快速上下文压缩命令，通过非 AI 的方式（如裁剪工具调用、思考过程等）来缩减上下文，以提升性能，而不是依赖耗时的 AI 压缩。

10. **#4769 [OPEN] 在 Desktop UI 中醒目显示 Git 分支名**
    - **链接:** [Issue #4769](https://github.com/QwenLM/qwen-code/issues/4769)
    - **摘要:** 用户希望 Desktop 版应用能直接在界面上显示当前 Git 分支名称，而不是将其隐藏在鼠标悬浮的工具提示中，以提升开发效率。

## 重要 PR 进展

1.  **#4751 [CLOSED] feat(daemon): 优化 ACP 子进程生命周期**
    - **链接:** [PR #4751](https://github.com/QwenLM/qwen-code/pull/4751)
    - **摘要:** 针对 Daemon 模式的 ACP 子进程进行优化，包括跳过不必要的子进程重新启动、预加热、空闲保活等功能，以提升 ACP 通信的响应速度和稳定性。

2.  **#4781 [OPEN] fix(core): 将延迟工具列表移出缓存系统提示**
    - **链接:** [PR #4781](https://github.com/QwenLM/qwen-code/pull/4781)
    - **摘要:** 关键的性能修复。将 MCP 工具的“延迟工具列表”从缓存系统提示中移除，改为在每轮对话中动态注入。这解决了 MCP 工具列表更新时，导致整个系统提示缓存失效的问题。

3.  **#4780 [OPEN] feat(cli): 新增 `/fork` 后台代理命令**
    - **链接:** [PR #4780](https://github.com/QwenLM/qwen-code/pull/4780)
    - **摘要:** 实现了 `/fork <directive>` 命令，用于生成一个继承当前会话上下文但不阻塞主对话的后台代理，可处理额外的指令。

4.  **#4677 [OPEN] fix(cli): 修复 Vim 模式下的多个问题**
    - **链接:** [PR #4677](https://github.com/QwenLM/qwen-code/pull/4677)
    - **摘要:** 修复了 Vim 模式下 Esc 键事件泄露、Enter 键提交、渲染延迟等问题，并实现了部分缺失的 NORMAL 模式命令，显著改进了 Vim 用户的体验。

5.  **#4779 [OPEN] feat(stats): 添加交互式 `/stats` 仪表盘**
    - **链接:** [PR #4779](https://github.com/QwenLM/qwen-code/pull/4779)
    - **摘要:** 针对 Issue #4597 的实现。新增了一个交互式统计看板，包含“会话”、“活动”和“效率”三个标签页，用于展示跨会话的用量趋势和性能指标。

6.  **#4764 [OPEN] feat(memory): 添加用户级自动记忆支持**
    - **链接:** [PR #4764](https://github.com/QwenLM/qwen-code/pull/4764)
    - **摘要:** 针对 Issue #4747 的实现。在 `~/.qwen/memories/` 目录下增加了跨项目的用户级自动记忆功能，复用现有记忆类型分类法。

7.  **#4716 [OPEN] fix(cli): 避免在无头浏览器环境下打开时崩溃**
    - **链接:** [PR #4716](https://github.com/QwenLM/qwen-code/pull/4716)
    - **摘要:** 修复了在无图形界面的 Linux 环境中，执行 `/bug`、`/docs`、`/insight` 等命令时，因试图调用 `xdg-open` 而导致的进程崩溃问题。替换为更安全的 `openBrowserSecurely()` 路径。

8.  **#4490 [OPEN] feat(daemon): 合并守护进程模式功能批次**
    - **链接:** [PR #4490](https://github.com/QwenLM/qwen-code/pull/4490)
    - **摘要:** 将守护进程模式（Daemon Mode）的功能分支 `daemon_mode_b_main` 合并入主分支，涉及386个文件，包含核心守护进程功能，是 ACP Streamable HTTP 协议支持的基础。

9.  **#4572 [OPEN] feat: 强化自动模式的自修改检查**
    - **链接:** [PR #4572](https://github.com/QwenLM/qwen-code/pull/4572)
    - **摘要:** 强化自动模式的自我修改安全检查，阻止对配置文件、指令、Hook、MCP 配置等关键路径的绕过操作，确保可控性。

10. **#4705 [OPEN] feat(daemon): 添加 `POST /session/:id/language` 端点**
    - **链接:** [PR #4705](https://github.com/QwenLM/qwen-code/pull/4705)
    - **摘要:** 为守护进程添加了运行时切换会话语言（UI和LLM输出）的 HTTP 端点，且不影响已有会话记录。

## 功能需求归类

从今日的 Issues 中，可以归纳出用户持续关注的几个功能方向：

1.  **模型管理与切换:** 用户对模型切换的行为有精细化管理需求，如 `/model` 不应持久化（#4754），状态栏应显示模型名称而非ID（#4722）。
2.  **统计与分析:** 对数据分析功能有更高的期待，希望 `/stats` 能从会话级别扩展到持久化的、跨会话的全局用量统计（#4597）。
3.  **记忆与持久化:** 跨项目的用户级记忆（#4747）是社区高频呼声，用户不希望在不同项目中重复训练 AI 认识自己的偏好。
4.  **性能优化:** 社区持续关注性能，包括子代理并发控制（#3568）和快速的、非AI的上下文压缩方法（#4264）。
5.  **安全性与加密:** 用户开始关注底层算法的安全性，如对 `aes-128-ecb` 的质疑（#4783）。
6.  **开发者体验与工具链:** CLI 的稳定性（如 Vim 模式修复 #4677）和 UI 的易用性（如 Git 分支名显示 #4769）是社区关注的重点。

## 开发者关注点

- **模型管理痛点:** `/model` 命令的副作用（持久化到设置）和状态栏模型标识的混淆，是影响用户体验的常见痛点，已经引起维护者的注意并得到快速响应（#4754, #4722 均已关闭）。
- **自动记忆的局限性:** 自动记忆按项目隔离的设计被多次提及为痛点，用户希望对 AI 的“个人偏好”进行一次设定，即可在所有项目中生效（#4747, #4764）。
- **本地诊断能力不足:** 面对难以复现的 API 或程序异常，用户缺乏有效的本地诊断工具，不得不依赖提前开启 Debug 模式或事后分析日志，效率低下（#4421）。
- **性能瓶颈:** 尤其是在本地模型场景下，并发子代理和 AI 压缩带来的性能开销是实际使用中的瓶颈，用户希望有更灵活的配置和更快的非AI替代方案（#3568, #4264）。
- **配置与启动问题:** npm 安装路径权限问题导致的自动更新失败（#4627），以及在无头 Linux 环境下运行特定命令导致的崩溃（#4712），是开发者在实际部署中遇到的典型环境兼容性问题。

</details>