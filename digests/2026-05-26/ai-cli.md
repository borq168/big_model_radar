# AI CLI 工具社区动态日报 2026-05-26

> 生成时间: 2026-05-26 02:28 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具横向对比分析报告 | 2026-05-26

## 1. 今日横向概览

2026年5月26日，各AI CLI工具社区均保持活跃，但热度差异明显。OpenCode、OpenAI Codex、Gemini CLI 和 Claude Code 每日有 50 条左右 Issue/PR 更新，GitHub Copilot CLI 为 21 条，Qwen Code 约 10 条，Kimi Code CLI 仅 3 条。除 Qwen Code 发布了一个 nightly 版本外，其余均无正式版本发布。社区焦点集中在子代理（Sub-agent）权限与嵌套、长会话上下文管理与成本控制、MCP 工具集成可靠性、以及 IDE/终端兼容性等方向，其中 Agent 系统行为预期和资源消耗控制是跨工具的高频痛点。

## 2. 各工具活跃度对比

| 工具 | 24h 更新 Issues 数 | 24h 更新 PR 数 | 今日 Release | 备注 |
|------|-------------------|---------------|-------------|------|
| Claude Code | 50 | 8 | 无 | 高热度 Issue #38029（会话恢复异常消耗） |
| OpenAI Codex | 50 | 47 | 无 | 上下文压缩失败 #10823 引发多例重复 |
| Gemini CLI | 50 | 42 | 无 | 计划模式不生效 #27434 用户强烈投诉 |
| GitHub Copilot CLI | 21 | 未统计（约10个活跃PR） | 无 | 远程会话 v1.0.51 回归 #3442 |
| Kimi Code CLI | 3 | 2 | 无 | 后台超时 #2232、WebSocket 挂死 #2365 |
| OpenCode | 50 | 50 | 无 | Kimi k2.5 工具调用失败 #20650 69评论 |
| Qwen Code | 约10 | 约10 | v0.16.1-nightly | 服务化（Daemon）路线图 #4514 成焦点 |

**注**：以上数字均来源于各工具日报原文中明确标注的“24小时更新数量”。

## 3. 共同出现的功能方向

以下方向在两个及以上工具社区中同时出现，具有跨工具共性：

- **Agent/子代理系统行为与可控性**
  - Claude Code：子代理无法嵌套创建（#61993）、子代理权限级联失败（#57037）
  - Gemini CLI：SubAgent 生命周期钩子缺失（#15269）、子代理递归委托（#15179）
  - GitHub Copilot CLI：子代理模型被自动降级（#2758）、子代理解析 MCP JSON 数组失败（#3030）
  - OpenCode：任务工具增加 directory 参数以支持子 Agent 分发（#29271）

- **长会话上下文管理与成本控制**
  - Claude Code：会话恢复异常消耗（#38029）、超时中断（#49619）
  - OpenAI Codex：上下文压缩失败（#10823、#22107、#24449）、元数据膨胀导致线程导航慢（#21211）
  - Qwen Code：每日 Token 统计需求（#4479）、硬核压缩重试限制（#4526）
  - OpenCode：`/compact` 支持 OpenAI Responses API（#5200）

- **MCP 工具集成稳定性**
  - Claude Code：无特定 MCP 问题（但有多工具调用相关）
  - OpenAI Codex：MCP 服务器在 VS Code 扩展中无法识别（#6465）
  - Gemini CLI：无法连接不同 MCP 服务器（#27431）、空资源列表处理（#26873）
  - GitHub Copilot CLI：子代理 MCP 调用 JSON 数组解析失败（#3030）
  - OpenCode：自定义 OpenAI 兼容提供商 MCP 工具 schema 递归 $ref 问题（#29295）

- **平台/IDE 兼容性**
  - Claude Code：VS Code 集成终端字符损坏（#59163，已关闭）
  - OpenAI Codex：Windows 独立安装程序请求（#13993）、ANSI 转义序列乱码（#23740）
  - Gemini CLI：Windows/WezTerm F10 回退键（#26088）
  - GitHub Copilot CLI：Windows 原生崩溃（#3250）、Android App 限制远程会话（#2979）
  - Qwen Code：VS Code 左侧栏不显示（#4488）、Rider OAuth 无限重定向（#4493）

- **内容安全与权限控制**
  - Claude Code：AGPLv3 许可证被误拦（#12705）、阻止构建命令 Hook 示例（PR #62264）
  - Gemini CLI：Hook 沙箱化讨论（#15272）、IPv6 安全修复（#26881）
  - GitHub Copilot CLI：扩展 Hook 工作目录路径为空（#3508）
  - OpenCode：容器环境 os.userInfo() 异常（#29292）、JSON 配置解析错误（#29208）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
|------|---------|---------|-------------|
| **Claude Code** | Agent 稳定性与资源控制、编辑工具（Edit/MultiEdit）文件冲突 | 重度开发团队，关注成本 | 会话缓存复用、插件系统、Hook 沙箱 |
| **OpenAI Codex** | 长对话压缩、Vim 模式增强、审查叙事驾驶舱 | 大量会话历史的重度用户 | TUI 编辑器体验、线程树追踪、元数据分析 |
| **Gemini CLI** | SubAgent 生命周期、无头模式模型回退、MCP 连接能力 | 自动化流程与 CI/CD 用户 | 配额桶管理、计划模式、多架构 Docker |
| **GitHub Copilot CLI** | 远程会话协作、插件 Hook 精细化控制、移动端集成 | 企业/团队协作用户 | 扩展生命周期、BYOK 模型、会话恢复自动CD |
| **Kimi Code CLI** | 后台任务超时控制、WebSocket 通信 | 国内个人开发者 | Python 实现，社区建议重写为 TS/Bun |
| **OpenCode** | 多模型兼容性（Kimi/GPT/DeepSeek）、性能优化、技能隐藏 | 多模型切换的发烧友 | 天蓝色主题、大量社区贡献 PR、Go 订阅模型 |
| **Qwen Code** | 服务化（Daemon）模式、Side query 语言控制、Think链开关 | 阿里云生态用户 | DashScope 集成、React Web Shell、ACP Streamable HTTP |

**观察**：Claude Code、OpenAI Codex、Gemini CLI 和 GitHub Copilot CLI 均面向专业开发者，重 Agent 编排能力；Kimi Code 和 Qwen Code 相对更聚焦基础 CLI 体验和 API 集成；OpenCode 则凭借高社区参与度在多模型兼容性上突出。

## 5. 社区活跃度记录

- **Issue 数量**：OpenCode（50）、OpenAI Codex（50）、Gemini CLI（50）、Claude Code（50）、GitHub Copilot CLI（21）、Qwen Code（约10）、Kimi Code CLI（3）
- **PR 数量**：OpenCode（50）、OpenAI Codex（47）、Gemini CLI（42）、Claude Code（8）、Qwen Code（约10）、Kimi Code CLI（2）、GitHub Copilot CLI（未统计但至少10个活跃）
- **维护者回应**：Claude Code 有多个 Issue 被标记并在 PR 中得到修复（如 #59163 关闭）；OpenAI Codex 有开发者注释根因（#21211）；Gemini CLI 在多个 PR 中合并修复；OpenCode 维护者提交了多个补丁；Kimi Code 开放 Issue 无官方回复；Qwen Code 发布了 nightly 版本并有很多活跃 PR 合并。
- **高热度 Issue**：Claude Code #38029（32👍）、OpenAI Codex #20161（103👍，已解决）、Gemini CLI #3132（50👍）、GitHub Copilot #3442（10👍）、OpenCode #20650（69条评论）、Qwen Code #4514（7条评论）。

**活跃度排序**（综合考虑 Issue/PR 数量及维护互动）：OpenCode ≈ OpenAI Codex ≈ Gemini CLI > Claude Code > GitHub Copilot CLI > Qwen Code > Kimi Code CLI。

## 6. 有证据支撑的观察

1. **Agent/子代理系统仍是各工具最大共同盲区。** Claude Code、Gemini CLI、GitHub Copilot CLI 均在子代理嵌套、权限继承、模型控制上出现不同程度的问题，且社区对“子代理应遵守父配置”的期望强烈（如 Copilot #2758、Gemini #3132）。OpenCode 也未幸免，多个 Issue 涉及 Agent 行为不可预测。

2. **长会话上下文管理是成本控制的核心痛点。** Claude Code 因会话恢复异常消耗引发 32 人点赞；OpenAI Codex 的上下文压缩失败在三天内出现 3 条同类 Issue（#10823、#22107、#24449）；Qwen Code 用户报告单次消耗 3000 万 Token（#4479）。跨工具用户均对 Token 激增和缓存失效高度敏感。

3. **MCP 集成在各工具中仍处于“联调阶段”。** Gemini CLI、OpenAI Codex、GitHub Copilot CLI 均有明确的 MCP 连接或解析 Bug；OpenCode 也有 schema 递归引用问题。这表明尽管 MCP 协议已标准化，但各工具的实现尚不稳定，尤其涉及子代理或 arrays 返回时容易出错。

4. **平台兼容性（Windows、移动端）是持续失分项。** Windows 用户抱怨在 Copilot CLI 中崩溃（#3250）、Claude Code 无相关但 OpenAI Codex 有 ANSI 乱码、Kimi Code 有 WebSocket 挂死。移动端仅 GitHub Copilot 因 Android App 限制而阻断远程会话（#2979）。跨平台一致体验仍为弱项。

5. **成本感知需求急剧上升。** 除 Claude Code #38029 外，OpenCode 有 DeepSeek 降价后调整配额请求（#28846），Qwen Code 有每日 Token 统计功能需求（#4479），Claude Code 的 `/usage` 命令被限流（#32503）。用户不再满足于“用多少花多少”，要求工具提供实时、细粒度的用量可视化。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

好的，请看以下为您生成的 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-05-26

## 今日更新概览

今日社区活跃度较高，核心议题集中在**代理（Agent）系统的稳定性**与**资源消耗控制**两大方向。尽管无新版本发布，但多个高影响力Issue持续发酵，其中关于会话恢复后产生异常API消耗的问题引发了社区对平台计费模型的深入讨论。此外，子代理功能的多项缺陷报告增多，暴露出在处理复杂任务链时存在权限继承与执行中断等系统性短板。

**数据统计**
- **活跃 Issue 数量:** 50条（24小时内更新）
- **活跃 PR 数量:** 8条
- **社区热度最高 Issue:** [#38029] 会话恢复异常消耗（评论: 23，回应: 32👍）

## 社区热点 Issues

### 1. [BUG] 会话恢复后出现异常用量消耗 [🔥 社区关注]
**Issue #38029** | 作者: @kokemizawa | 评论: 23 | 👍: 32
**影响场景:** 用户在使用过程中发现，当恢复（Resume）一个已存在的 Claude Code 会话时，Token 消耗量出现不正常的激增，与正常新启一个会话的成本差异巨大。
**问题范围:** 该问题可能涉及核心会话管理逻辑，即 Cluade Code 在重建上下文时，可能未能有效复用或压缩历史缓存，导致重复消耗。
**社区反应:** 社区讨论热度极高，大量用户在评论区复现了相似问题，并请求 Anthropic 团队调查计费模型是否存在缺陷。
**地址:** https://github.com/anthropics/claude-code/issues/38029

### 2. [BUG] `/plugin update` 命令无法刷新插件缓存
**Issue #14061** | 作者: @shohei-sawaguchi | 评论: 23 | 👍: 28
**影响场景:** 对于重度依赖插件的开发者，在执行`/plugin update`后，预期应加载新版本的插件逻辑。然而，系统仍会从旧缓存中读取配置，导致更新不生效，需要用户手动清理缓存目录。
**问题范围:** 这是 CLI 工具的一个严重用户体验问题，直接影响了插件的迭代开发和热更新流程。
**社区反应:** 该 Issue 持续活跃数月，反映出社区对插件机制稳定性的高度关注。
**地址:** https://github.com/anthropics/claude-code/issues/14061

### 3. [BUG] 长期会话后，VS Code 集成终端出现字符损坏
**Issue #59163（已关闭）** | 作者: @Faithfinder | 评论: 22 | 👍: 15
**影响场景:** 在 macOS 上使用 VS Code 内置终端进行长时间会话后，Claude Code TUI会渲染出乱码和损坏的字符。
**问题范围:** 问题定位在 TUI 渲染层，可能与终端兼容性或长时间运行后的状态机异常有关。该 Issue 已于今日关闭，暗示可能已通过 Hotfix 或在最新版本解决。
**社区反应:** 对重度用户影响较大，因其经常需要进行数小时的持续性开发工作。
**地址:** https://github.com/anthropics/claude-code/issues/59163

### 4. [BUG] Edit/MultiEdit 工具报 "File has been modified since read" 错误
**Issue #3513** | 作者: @panyaoyu | 评论: 21 | 👍: 25
**影响场景:** 该问题是一年前报告的经典 Bug，在 Linux 平台下，Edit 和 MultiEdit 工具在文件写入后频繁抛出文件已被修改的冲突提示，导致编辑链断裂。
**问题范围:** 这表明 Claude Code 内部的文件快照（Snapshot）与版本来回（Version Round-trip）机制存在竞态条件（Race Condition）或同步问题。
**社区反应:** 社区对核心编辑工具的稳定性表示担忧，该 Bug 的长期存在影响了用户对文件变更新能的信任。
**地址:** https://github.com/anthropics/claude-code/issues/3513

### 5. [BUG] 子代理无法嵌套创建子代理
**Issue #61993** | 作者: @xblabs | 评论: 12 | 👍: 0
**影响场景:** 对于计划实现多层代理编排（Orchestrator Pattern）的用户，当前系统限制子代理不能再调用 `Task` 或 `Agent` 原语去创建孙子代代理。
**问题范围:** 这限制了 Claude Code 在复杂任务分解（如大型自动化测试、CI/CD 管道编排）中的能力，使其停留在单层代理结构。
**社区反应:** 这是一个较为技术性的问题，但它是实现高度自治工作流的关键阻塞点。
**地址:** https://github.com/anthropics/claude-code/issues/61993

### 6. [BUG] 长时间工具使用轮次因流式超时中断
**Issue #49619** | 作者: @masterzhuang | 评论: 12 | 👍: 10
**影响场景:** 在 Claude Code Web 版使用 Opus 模型进行长时间的工具调用链时，连接会出现空闲超时并中断，导致部分响应丢失。
**问题范围:** 该问题主要影响 Web 端和大型上下文窗口（1M Token）的使用场景，是长周期自动化操作的主要障碍。
**社区反应:** 用户反馈丢失部分响应可能导致任务进入不可预测状态，对业务连贯性构成风险。
**地址:** https://github.com/anthropics/claude-code/issues/49619

### 7. [BUG] AGPLv3 许可证生成被内容过滤策略阻止
**Issue #12705** | 作者: @jenova-marie | 评论: 22 | 👍: 9
**影响场景:** 用户在请求 Claude Code 生成 AGPLv3 许可证文本时，被系统内容安全策略拦截。
**问题范围:** 该问题揭示了模型内容过滤策略在识别软件许可证时可能出现的过度匹配问题，将常见的开源文本误判为风险内容。
**社区反应:** 开源开发者对此反响强烈，认为这影响了其工作流，并质疑策略的精确性。
**地址:** https://github.com/anthropics/claude-code/issues/12705

### 8. [BUG] `/goal Stop` Hook 在目标文本较大时失败
**Issue #58192** | 作者: @cghart | 评论: 9 | 👍: 9
**影响场景:** 当 Goal 指令中的文字长度较大时，使用 `/goal Stop` Hook 会引发“Prompt is too long”错误，导致用户无法优雅地终止当前任务。
**问题范围:** 这是一个 Hook 机制的边界条件处理问题，表明系统在处理 Hook 回传的上下文中存在 Token 限制。
**社区反应:** 对需要通过 CI 或自动化脚本控制 Claude Code 的用户来说，这是一个关键的功能阻塞点。
**地址:** https://github.com/anthropics/claude-code/issues/58192

### 9. [BUG] `/usage` 命令因速率限制而无法使用
**Issue #32503** | 作者: @jaried | 评论: 8 | 👍: 12
**影响场景:** 用户在需要监控自身用量时，执行 `/usage` 命令会直接返回“rate_limit_error”错误，形成“因为用量高所以被限制查看用量”的死循环。
**问题范围:** 这是一个产品逻辑上的缺陷，API 的通用限流策略不应阻止用户查看自身的计费和使用情况。
**社区反应:** 该问题对开发者成本管理造成了困扰，用户希望这部分 API 调用具有豁免权。
**地址:** https://github.com/anthropics/claude-code/issues/32503

### 10. [BUG] 子代理权限级联失败
**Issue #57037** | 作者: @marcobrien-dev | 评论: 8 | 👍: 1
**影响场景:** 当主 Agent 在一次消息中调用多个“Agent Tool”来创建子代理时，权限授权系统会出现级联失败，导致部分子代理无法获得执行权限。
**问题范围:** 这表明权限检查模块在处理批量请求时存在状态不一致或竞态条件。
**社区反应:** 社区正在探索更复杂的多代理工作流，对此类问题的反馈正在增多。
**地址:** https://github.com/anthropics/claude-code/issues/57037

## 重要 PR 进展

### 1. [Docs] 记录 `CLAUDE_CODE_ATTRIBUTION_HEADER` 环境变量
**PR #62346 (OPEN)** | 作者: @Anish0104
**内容:** 针对当设置 `ANTHROPIC_BASE_URL` 时，Claude Code 会注入动态的 attribution header 导致第三方 LLM 提供商（如代理或私有部署）无法命中缓存的问题，此PR添加了对该隐藏环境变量的文档说明。这有助于用户在自定义部署场景中确保缓存效率。
**地址:** https://github.com/anthropics/claude-code/pull/62346

### 2. [Fix] 修复 Hooks 中的 Hookify 事件过滤
**PR #62315 (OPEN)** | 作者: @AMPGATE
**内容:** 修复了 `PreToolUse` / `PostToolUse` 钩子中事件过滤逻辑的 Bug，确保只有符合特定条件的钩子事件会被触发执行。
**地址:** https://github.com/anthropics/claude-code/pull/62315

### 3. [Fix] 阻止去重机器人建议关闭已关闭/重复的 Issue
**PR #62262 (OPEN)** | 作者: @giruuuuj
**内容:** 社区贡献者主动修复了一个元问题（Meta-Issue #62257）。该 PR 修改了去重机器人（dedupe bot）的逻辑，防止其将新 Issue 与已经关闭或标记为重复的 Issue 进行匹配和自动关闭。
**地址:** https://github.com/anthropics/claude-code/pull/62262

### 4. [Feat] 添加阻止构建命令的 Hook 示例
**PR #62264 (OPEN)** | 作者: @giruuuuj
**内容:** 为希望实施更严格安全策略的用户，提供了一个 `PreToolUse` Hook 示例。该示例能够识别并阻止（通过返回退出码 2）`cmake`、`npm build`、`gcc` 等编译构建命令在 `Bash` 工具中执行。
**地址:** https://github.com/anthropics/claude-code/pull/62264

### 5. [Feat] 添加沙箱文件系统设置示例 (`allowSkillsWrites`)
**PR #62261 (OPEN)** | 作者: @giruuuuj
**内容:** 针对用户希望限制子代理（Agent）在指定技能（Skills）目录之外写入文件的需求，此PR提供了一个新的 `settings` 示例文件。其中演示了如何配置 `allowSkillsWrites` 来定义严格的写入权限范围。
**地址:** https://github.com/anthropics/claude-code/pull/62261

### 6. [Fix] 处理空的 Bug 报告并改进信息提示
**PR #62260 (OPEN)** | 作者: @giruuuuj
**内容:** 优化了 Issue 分类机器人。当新提交的 Bug 报告正文为空（仅有标题和空格式）时，机器人会自动为其打上 `needs-info` 标签，并引导用户填写关键信息。
**地址:** https://github.com/anthropics/claude-code/pull/62260

### 7. [Fix] 防止 Workflow 中 `@claude` 触发的误报
**PR #62023 (CLOSED)** | 作者: @DeliLevente99
**内容:** 修复了 GitHub Actions 工作流中的一个 Bug。原配置使用 `contains()` 函数匹配 `@claude` 字符串，会导致如 `@claude-plugins-official` 等用户名也被错误触发。已改为更精确的单词边界匹配。
**地址:** https://github.com/anthropics/claude-code/pull/62023

## 功能需求归类

### 1. Agent & 子代理系统
近期社区对 Agent 系统的关注度显著提升，可归类为以下子方向：
- **权限与继承:** 子代理权限级联失败（#57037）、子代理无法获取父上下文的“Agent Tool”使用权（#46424）。
- **执行可靠:** 子代理即时空闲不执行任务（#61547）、无法嵌套创建子代理的限制（#61993）。

### 2. 性能与成本控制
- **异常消耗:** 会话恢复后用量激增（#38029）是最受关注的热点。
- **超时中断:** 长时间任务因流式空闲超时而中断（#49619）。
- **预览面板缓存:** 桌面端 Preview 面板不刷新（#40491）。

### 3. 命令行界面与文档
- **TUI 渲染:** 终端字符损坏（#59163）。
- **命令可用性:** `/usage` 命令受限于 API 速率限制（#32503）。
- **Hook 稳定性:** 大文本导致 `/goal Stop` 失败（#58192）。
- **插件管理:** `/plugin update` 不刷新缓存（#14061）。

### 4. 内容过滤与安全
- **过度过滤:** 生成 AGPLv3 许可证被拦截（#12705）。
- **执行安全:** 添加控制构建命令执行的 Hook 示例（PR #62264）。

## 开发者关注点

- **成本与用量控制是首要痛点。** `session resume` 异常消耗和 `/usage` 命令

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是 2026 年 5 月 26 日的 OpenAI Codex 社区动态日报。

---

## OpenAI Codex 社区动态日报 — 2026-05-26

### 今日更新概览

今日社区活跃度较高，共有 50 条 Issue 和 47 条 Pull Request 在 24 小时内更新。核心焦点集中在上下文压缩失败、应用性能问题以及全新的 TUI Vim 编辑器功能 PR 系列上。无新版本发布，但大量 PR 正在酝酿中。

### 版本发布

无新版本发布。

### 社区热点 Issues

1.  **手机验证问题影响 SSO 登录 [#20161]**
    -   **场景**: 用户在不同设备上通过 SSO 登录时，Codex 要求输入未绑定的手机号，导致无法正常使用，该问题已经被标记为已解决。
    -   **范围**: 影响通过 SSO 进行身份验证的用户。
    -   **社区反应**: 这是近期评论数最多的 Issue (162 条)，有 103 个点赞，表明该问题对大量用户造成了严重困扰。
    -   **链接**: https://github.com/openai/codex/issues/20161

2.  **请求支持重命名任务/线程标题 [#12564]**
    -   **场景**: 用户希望为长对话线程手动设置标题，以便在历史记录中快速定位并恢复工作流。
    -   **范围**: 影响所有需要管理多个对话线程的 VS Code 扩展用户。
    -   **社区反应**: 获得 107 个点赞和 60 条评论，是呼声最高的功能请求之一，社区讨论了多种实现方案。
    -   **链接**: https://github.com/openai/codex/issues/12564

3.  **MCP 服务器在 VS Code 扩展中无法被识别 [#6465]**
    -   **场景**: 用户在 Codex CLI 中配置了 MCP 服务器并能正常工作，但在 VS Code 扩展中无法被检测到。
    -   **范围**: 影响依赖 MCP 生态的扩展用户。
    -   **社区反应**: 已持续 6 个月仍为开放状态，有 52 条评论，表明这是一个长期存在的集成痛点。
    -   **链接**: https://github.com/openai/codex/issues/6465

4.  **Windows 用户请求独立安装程序 [#13993]**
    -   **场景**: 许多 Windows 用户因系统限制或公司策略无法使用 Microsoft Store，请求提供传统的 `.exe` 安装包。
    -   **范围**: 影响所有 Windows 企业用户和离线环境用户。
    -   **社区反应**: 获得 119 个点赞，社区广泛讨论了在企业环境中的部署痛点。
    -   **链接**: https://github.com/openai/codex/issues/13993

5.  **App 端“思考”动画导致高 GPU 占用 [#16857]**
    -   **场景**: 用户在等待 Codex 响应时，一个小型动画会导致 GPU 使用率飙升并提升风扇噪音。
    -   **范围**: 影响所有使用 Codex 桌面应用的 macOS 用户。
    -   **社区反应**: 用户抱怨影响续航和体验，开发者已确认设计缺陷。
    -   **链接**: https://github.com/openai/codex/issues/16857

6.  **极长对话的上下文压缩失败 [#10823]**
    -   **场景**: 用户在长时间、多次恢复的会话中，上下文压缩任务持续失败，导致对话无法继续。
    -   **范围**: 影响有长会话需求的重度用户。
    -   **社区反应**: 类似问题 (#22107, #24449) 在今天均有更新，表明这是近期高发故障。
    -   **链接**: https://github.com/openai/codex/issues/10823

7.  **线程导航和加载速度因无界元数据而变慢 [#21211]**
    -   **场景**: 随着对话历史增长，线程列表的加载和导航变得极其缓慢。
    -   **范围**: 影响所有拥有大量会话历史的用户。
    -   **社区反应**: 开发者已指出根因是 SQLite 数据库中的元数据膨胀和历史数据加载策略问题。
    -   **链接**: https://github.com/openai/codex/issues/21211

8.  **企业级用户请求支持 HTTP 代理配置 [#6060]**
    -   **场景**: 企业环境要求通过 `http_proxy` 环境变量配置代理进行网络访问，当前 Codex 不支持。
    -   **范围**: 影响所有在受网络限制的企业或学术环境中工作的用户。
    -   **社区反应**: 获得 53 个点赞，是开放时间最长、呼声最高的企业功能请求之一。
    -   **链接**: https://github.com/openai/codex/issues/6060

9.  **Codex CLI 在 Windows 终端中显示原始 ANSI 转义序列 [#23740]**
    -   **场景**: 自版本 `0.131.0` 起，在 Windows Terminal 中运行 Codex CLI 会显示乱码的 ANSI 控制字符。
    -   **范围**: 影响使用 Windows 作为主要开发环境的 CLI 用户。
    -   **社区反应**: 用户已通过二分法确定了问题版本，并提供了截图和详细的复现步骤。
    -   **链接**: https://github.com/openai/codex/issues/23740

10. **Google Sheets 连接器在重装后写入失败 [#24373]**
    -   **场景**: Google Drive/Sheets 插件在重装后，可以读取但无法写入数据，且触发共享读取配额限制。
    -   **范围**: 影响使用 Google 生态的桌面 app 用户。
    -   **社区反应**: 报告指出权限和认证机制在插件更新后存在不一致问题。
    -   **链接**: https://github.com/openai/codex/issues/24373

### 重要 PR 进展

1.  **TUI 提及选择器过滤 [#24104]**: 修复了 `$` 菜单中对所有应用进行自动补全的问题，确保仅显示当前可访问的应用。这是一个提升用户体验的优化。
    -   **链接**: https://github.com/openai/codex/pull/24104

2.  **修复 `codex resume` 无法恢复 `exec` 会话 [#24503]**: 修复了 `codex resume --include-non-interactive` 命令无法正确列出由 `codex exec` 创建会话的 Bug。
    -   **链接**: https://github.com/openai/codex/pull/24503

3.  **添加子代理追溯元数据 [#24161]**: 新增 `parent_thread_id` 元数据，用于追踪子代理是如何被创建的，有助于理解对话的层次结构和资源管理。
    -   **链接**: https://github.com/openai/codex/pull/24161

4.  **添加分支线程追溯元数据 [#24160]**: 新增 `forked_from_thread_id` 元数据，用于识别当前线程是从哪个线程复制历史而来的，方便下游系统重构完整的对话树状关系。
    -   **链接**: https://github.com/openai/codex/pull/24160

5.  **为 TUI 全面添加 Vim 编辑器模式 (1-9 of 9) [#24476 ~ #24498]**: 这是一个大型 PR 系列，分 9 个步骤逐步为 TUI 添加 Vim 支持，包括行末行为、查找/跳动、文本对象、命令计数、寄存器、可视模式以及点重复功能，标志着 Codex CLI 编辑器体验的显著增强。
    -   **链接**: https://github.com/openai/codex/pull/24476

6.  **为被拒绝的请求添加分析事件 [#24488]**: 新增分析事件来记录被 API 拒绝的 `turn/start` 请求，帮助工程师了解验证失败或输入过大的原因，从而优化应用逻辑。
    -   **链接**: https://github.com/openai/codex/pull/24488

7.  **在 TUI 中渲染 Markdown 表格 [#24489]**: 优化了 TUI 中 Markdown 表格的显示效果，使其更接近桌面应用的外观，提升代码输出和文档的可读性。
    -   **链接**: https://github.com/openai/codex/pull/24489

8.  **新增配置开关以禁用 `request_user_input` 工具 [#24494]**: 提供了一个新的配置项，允许用户在不需要模型主动向用户提问的场景下禁用此功能，为自动化流程提供更高控制权。
    -   **链接**: https://github.com/openai/codex/pull/24494

9.  **增加交互式“审查叙事”驾驶舱 [#24358]**: 为代码审查引入了一个新的 TUI 层，将 AI 生成的变更组织成概念步骤，引导审查者按逻辑顺序理解代码意图，而非传统面向文件行级的 diff。
    -   **链接**: https://github.com/openai/codex/pull/24358

10. **修复 macOS 内存调试功能 [#24479]**: 修复了应用启动前误删除 `MallocStackLogging` 环境变量的硬化逻辑，恢复了 macOS 平台的内存调试诊断能力。
    -   **链接**: https://github.com/openai/codex/pull/24479

### 功能需求归类

-   **性能与稳定性**: 用户反复反馈上下文压缩失败 (#10823, #22107, #24449) 和因无用动画导致的高 GPU 占用 (#16857)。线程导航因元数据膨胀而变慢 (#21211) 也是一个长期痛点。
-   **用户体验增强**: 允许重命名线程标题 (#12564) 和在 App 内持久化显示用量信息 (#24182) 是提升日常使用流畅度的高频需求。
-   **平台与工具支持**: Windows 用户对独立安装程序 (#13993) 和企业代理配置 (#6060) 的需求强烈。此外，TUI 的 Vim 模式增强是该阶段最显著的功能开发方向。
-   **多模型与 MCP 生态**: MCP 服务器在 IDE 扩展中无法工作 (#6465) 和 DeepSeek 模型思维模式的兼容性问题 (#24500) 反映了用户对模型和工具链扩展性的需求。

### 开发者关注点

1.  **核心故障体验**: 上下文压缩的频繁失败是当前影响最深远的 Bug，直接导致长时间对话无法继续，开发者对此反馈最为强烈。
2.  **隐私与安全**: 有一个新提交的 Issue (#24501) 报告了严重的安全问题，指出 Codex 在 Docker 边界上出现混乱，可能导致用户数据被误删除。这触及了用户信任的核心底线。
3.  **透明度和可控性**: 开发者希望了解自己的配额使用情况 (#24182) 并能够控制模型行为，例如通过新增的配置开关 (#24494) 来禁用“请求用户输入”工具。Goal 自动续期降级权限的问题 (#24300) 也反映出对任务执行透明度的高度关注。
4.  **平台差异与兼容性**: Windows 和 WSL 用户持续报告终端显示 (#23740)、浏览器使用 (#21575) 和滚动 (#22936) 等体验问题，表明平台间的适配工作仍有待完善。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-05-26 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-05-26

## 今日更新概览

今日社区活跃度保持高位，共有 50 个 Issues 和 42 个 Pull Requests 在过去 24 小时内获得更新。开发重点集中在 Agent 功能的增强和 Bug 修复上，包括 SubAgent 生命周期管理、MCP 服务器连通性、无头模式下的模型回退以及终端渲染体验的改善。

## 社区热点 Issues

1.  **#3132 [Agents] Post V1.0 Work** - 一个关于在 V1.0 之后实现新的 `SubAgent` 类的功能需求。SubAgent 旨在成为一个可重用的组件，用于管理 LLM 驱动的工具编排，例如让工具迭代地解决遇到的问题。该 Issue 获得了 50 个 👍 和 45 条评论，是社区关注度最高的话题之一。
    [链接](https://github.com/google-gemini/gemini-cli/issues/3132)

2.  **#3717 构建并发布多架构 Docker 镜像** - 一个优化 Docker 构建流程的增强需求，旨在为不同 CPU 架构的用户提供原生性能和兼容性。评论中讨论了当前构建脚本的限制，该 Issue 已有 14 条评论。
    [链接](https://github.com/google-gemini/gemini-cli/issues/3717)

3.  **#27431 无法连接到不同的 MCP 服务器** - 用户反馈在通过 Homebrew 安装的 CLI 中，无法连接到多种 MCP 服务器，并且没有收到任何错误信息来定位原因。
    [链接](https://github.com/google-gemini/gemini-cli/issues/27431)

4.  **#27434 计划模式未生效** - 用户强烈投诉，Gemini CLI 在执行任务时，无视用户要求的“计划模式”，自动审批并立即开始执行代码，导致用户项目受到影响。
    [链接](https://github.com/google-gemini/gemini-cli/issues/27434)

5.  **#22441 函数调用的原始 XML 标签泄漏至标准输出** - 一个持续存在的 Bug，指出在使用工具时，原始的 `<function_calls>` 等内部 XML 标签被直接打印到终端，没有被正确解析和隐藏。该 Issue 已被标记为 `status/need-retesting`。
    [链接](https://github.com/google-gemini/gemini-cli/issues/22441)

6.  **#25166 Shell 命令执行完成后卡死** - 用户报告，在 Gemini 执行完一个简单的 CLI 命令后，界面会卡住，显示“等待输入 (Awaiting user input)”，而该命令实际已执行完毕。这是一个 P1 优先级的问题。
    [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

7.  **#15269 功能：缺少 SubAgent 钩子事件 (Hook Events)** - 随着 SubAgent 的引入，社区提出需要为其生命周期添加 `BeforeSubAgent` 和 `AfterSubAgent` 等钩子事件，以便与主 Agent 的钩子系统保持一致。
    [链接](https://github.com/google-gemini/gemini-cli/issues/15269)

8.  **#10673 无闪烁的稳健终端渲染** - 一个 P2 优先级的 Bug，旨在解决终端渲染的闪烁问题，并支持在常规缓冲区和备用缓冲区模式之间快速切换，以及优化 Ink 静态渲染的替代方案。
    [链接](https://github.com/google-gemini/gemini-cli/issues/10673)

9.  **#22745 评估 AST 感知文件读取的影响** - 一个 EPIC，用于调研是否可以通过增强工具，使其理解代码的抽象语法树 (AST) ，来更精确地读取方法边界，从而减少 Token 消耗和交互轮次。
    [链接](https://github.com/google-gemini/gemini-cli/issues/22745)

10. **#15272 安全：默认钩子沙箱化 (Hook Sandboxing)** - 一个安全相关的讨论，提议研究并实施轻量级沙箱策略，以限制钩子 (Hooks) 在默认情况下的本地代码执行权限，降低安全风险。
    [链接](https://github.com/google-gemini/gemini-cli/issues/15272)

## 重要 PR 进展

以下 PR 多为社区贡献，显示了社区的活跃度。

1.  **#26845 在默认回退策略链中添加 gemini-2.5-flash-lite** - 修复了免费用户在使用 Pro 和 Flash 模型配额耗尽后，无法自动使用更便宜的 Flash-lite 模型的问题，解决了 `QUOTA_EXHAUSTED` 错误。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26845)

2.  **#26876 改善 Gemini 重试可见性和超时处理** - 针对 v0.35 版本后出现的“Thinking...”卡住问题进行了修复，改进了模型容量重试、流打开超时等场景的处理和可见性。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26876)

3.  **#26873 修复(core): 接受 null MCP 资源列表** - 修复了当 MCP 服务器返回 `resources: null` 而不是空数组时，Gemini CLI 会报错的问题。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26873)

4.  **#26851 修复(core): 允许计划模式写入自定义计划目录** - 修复了计划模式只能写入默认 `.gemini` 目录，而无法写入用户自定义的 `planSettings.directory` 路径的问题。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26851)

5.  **#26846 修复(core): 在无头模式下触发静默回退** - 支持在无头模式 (`-p`) 下，当 OAuth 用户遇到持续的配额耗尽错误时，自动进行模型回退，而此前该功能仅适用于交互模式。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26846)

6.  **#26881 修复(安全): 添加 IPv6 回环地址到主机头验证** - 修复了 IDE 主机的安全验证逻辑，增加了对 IPv6 回环地址 `[::1]` 的支持，防止 DNS 重绑定攻击。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26881)

7.  **#27203 修复(core): 防止项目 .env 变量泄露到子进程环境** - 修复了项目 `.env` 文件中的环境变量会被所有 CLI 子进程继承，导致覆盖子进程自身配置的问题（如 Laravel 的测试配置）。
    [链接](https://github.com/google-gemini/gemini-cli/pull/27203)

8.  **#27221 修复(core): 防止零配额桶覆盖有效配额** - 修复了当服务器为同一模型返回多个配额桶时，若其中一个免费桶已耗尽，会导致 CLI 错误报告“配额已达上限”的问题。
    [链接](https://github.com/google-gemini/gemini-cli/pull/27221)

9.  **#26088 修复(cli): 为审批模式切换添加 F10 回退键** - 为 Windows/WezTerm 用户添加 F10 功能键作为切换批准模式的回退快捷键，解决这些终端上 `Shift+Tab` 无法被正确解析的问题。
    [链接](https://github.com/google-gemini/gemini-cli/pull/26088)

10. **#27440 功能(cli): 在斜杠命令自动补全中添加 [Skill] 标签** - 为用户安装的 “Skills” 斜杠命令在自动补全菜单中添加了 `[Skill]` 标签，使其与内置的 `[MCP]` 和 `[Agent]` 命令在视觉上区分开来。
    [链接](https://github.com/google-gemini/gemini-cli/pull/27440)

## 功能需求归类

1.  **Agent 功能增强**：社区持续关注 Agent 核心能力的提升。需求包括更灵活的 SubAgent 组件、丰富的 SubAgent 生命周期钩子 (`#15269`)、探索递归的子代理委托 (`#15179`)，以及为 Agent 构建稳健的组件级评估体系 (`#24353`)。
2.  **用户体验与修复**：修复影响用户体验的 Bug 是当前重点。这包括原始 XML 标签泄漏 (`#22441`)、Shell 命令执行后卡死 (`#25166`)、终端界面闪烁 (`#10673`)，以及计划模式不被尊重 (`#27434`) 等 P1/P2 优先级的问题。
3.  **安全性与可靠性**：安全是持续关注点，涉及 Hook 沙箱化 (`#15272`)、环境变量泄漏 (`#27203` 和 `#26525`)、CI/CD 安全审查 (`#14540`) 以及对 IPv6 等现代网络特性的全面支持 (`#26881`)。
4.  **集成与兼容性**：社区要求更强的集成能力，包括连接更多 MCP 服务器 (`#27431`)、构建多平台 Docker 镜像 (`#3717`)，以及与不同的认证路径进行更全面的集成测试 (`#6787`)。

## 开发者关注点

-   **终端输出一致性**：开发者对原始内部 XML 标签泄漏到标准输出的问题反映强烈，这严重影响了 CLI 输出的可读性和脚本解析。
-   **模型选择和配额管理**：开发者期望 CLI 能更智能地管理模型选择和配额，避免因高级模型配额耗尽而误报错误，并希望在无头模式下也能自动回退到低级模型。
-   **Agent 行为的可预测性**：“计划模式不生效”等问题引发了开发者对 Agent 行为可控性的担忧。用户希望自己的指令（如“只做计划”）能被严格遵守，而不是被自动覆盖。
-   **扩展和集成的稳定性**：MCP 服务器的连接问题，以及环境变量泄露导致子进程行为异常，是开发者在扩展 CLI 功能和集成到现有项目时遇到的主要痛点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，这是为您生成的 2026-05-26 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-05-26

## 今日更新概览

今日社区动态主要集中在问题反馈和功能请求上，共有 21 个 Issue 在过去 24 小时内被更新，其中包含 3 个新创建的 Issue。无新版本发布。值得关注的是，关于扩展插件（Plugins）、子代理（Sub-agents）模型控制以及远程会话（Remote Sessions）的讨论较为活跃，反映了用户对 CLI 控制精度和平台稳定性的持续关注。

## 社区热点 Issues

以下挑选了过去 24 小时内更新的 10 个值得记录的 Issue，覆盖了从 Bug 反馈到功能请求的多个方面。

1.  **远程会话功能在 v1.0.51 失效**
    -   **Issue:** [#3442 Remote sessions are not enabled. Contact your organization administrator to enable remote sessions.](https://github.com/github/copilot-cli/issues/3442)
    -   **摘要:** 用户在更新到 Copilot CLI `v1.0.51` 后，执行 `/remote on` 指令时，系统提示“远程会话未启用”，即使组织管理员已启用该功能。该问题获得 10 个 👍，表明影响范围较广。
    -   **影响场景:** 依赖远程协作的团队和工作流程受阻。

2.  **请求支持 Google Gemini 模型**
    -   **Issue:** [#2854 Google gemini is not available in copilot CLI?](https://github.com/github/copilot-cli/issues/2854)
    -   **摘要:** 用户明确提出希望在 Copilot CLI 中使用 Google 的 Gemini 模型。该请求获得了 15 个 👍，是目前社区呼声很高的功能需求之一。
    -   **影响场景:** 希望使用 Gemini 模型进行开发任务的用户目前无法在 CLI 中实现。

3.  **扩展插件（Hook）静默重写命令功能缺失**
    -   **Issue:** [#2643 [area:plugins] preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow](https://github.com/github/copilot-cli/issues/2643)
    -   **摘要:** 当 `preToolUse` Hook 通过 `updatedInput` 并设置 `permissionDecision: allow` 静默重写命令时，CLI 仍会弹出确认对话框。用户期望能实现完全静默的重写操作。
    -   **影响场景:** 开发高级自动化插件的开发者需要更精细的控制权。

4.  **子代理模型被降级，需添加退出选项**
    -   **Issue:** [#2758 [area:agents, area:models] Feature Request: Allow sub-agents to use the model specified in frontmatter/task() — add opt-out for the cost-multiplier guard](https://github.com/github/copilot-cli/issues/2758)
    -   **摘要:** 用户反馈，子代理（Sub-agent）无法使用 `.agent.md` 配置的模型，而是被“成本限制器”自动降级为最便宜的模型。用户建议添加一个退出标志（opt-out flag）来控制此行为。
    -   **影响场景:** 对特定子代理有高模型要求（如更强推理能力）的复杂工作流受阻。

5.  **Shift+Enter 行为不符合预期**
    -   **Issue:** [#2776 [area:input-keyboard] Shift+Enter currently submits the prompt instead of inserting a new line](https://github.com/github/copilot-cli/issues/2776)
    -   **摘要:** 用户在编辑长提示词时，习惯使用 Shift+Enter 换行，但在 CLI 中该快捷键直接提交了未完成的输入，导致意外执行。
    -   **影响场景:** 所有需要编写多行提示词的用户，影响输入体验。

6.  **GitHub Android App 限制远程会话使用**
    -   **Issue:** [#2979 [area:sessions] GitHub Android app prevents Copilot remote use after monthly request limit reached despite remaining budget](https://github.com/github/copilot-cli/issues/2979)
    -   **摘要:** 用户通过 GitHub Android App 连接到远程会话时，即使账户还有剩余预算，只要达到月度高级请求限制，会话便会变成“只读”状态，无法执行操作。
    -   **影响场景:** 通过移动端参与远程开发的用户体验不佳。

7.  **子代理调用 MCP 工具时解析 JSON 数组失败**
    -   **Issue:** [#3030 [area:agents, area:mcp] Sub-agent MCP tool calls fail with structuredContent: expected record, received array when server returns JSON arrays](https://github.com/github/copilot-cli/issues/3030)
    -   **摘要:** 当子代理调用返回 JSON 数组的 MCP 工具时，会触发 Zod 校验错误，而主代理（Orchestrator）调用同一工具则正常。这限制了子代理处理结构化数据的能力。
    -   **影响场景:** 利用子代理和 MCP 进行复杂数据处理的工作流受限。

8.  **扩展生命周期 Hook 获取空目录路径（已关闭）**
    -   **Issue:** [#3508 [CLOSED] [area:plugins] Extension lifecycle hooks receive empty workingDirectory since CLI ~1.0.51](https://github.com/github/copilot-cli/issues/3508)
    -   **摘要:** 用户报告自 CLI 1.0.51 起，扩展生命周期的 Hook（如 `onSessionStart`）收到的 `workingDirectory` 为空字符串。该 Issue 今日被关闭，但未提及具体修复方案或关闭原因。
    -   **影响场景:** 依赖正确工作目录来执行逻辑的插件开发者。

9.  **Windows 系统下并行启动子代理会触发原生崩溃**
    -   **Issue:** [#3250 [area:agents, area:platform-windows, area:models] Windows native crash when launching parallel subagents with local BYOK provider](https://github.com/github/copilot-cli/issues/3250)
    -   **摘要:** 在 Windows 系统上，当使用本地 BYOK（自带密钥）提供商并行启动多个通用型子代理时，`copilot.exe` 发生原生崩溃（`BEX64`错误）。
    -   **影响场景:** 在 Windows 上使用本地模型并依赖并行子代理的用户。

10. **`resume-auto-cd` 功能在恢复外部创建的会话时设置错误路径**
    -   **Issue:** [#3515 [area:sessions, area:configuration] resume-auto-cd sets CWD to / when session was created by external producer (Agency)](https://github.com/github/copilot-cli/issues/3515)
    -   **摘要:** 新功能 `resume-auto-cd` 在恢复由外部工具（如 Agency CLI）创建的会话时，会将当前工作目录（CWD）设置为 `/`，而不是正确的终端路径。
    -   **影响场景:** 与外部系统集成的用户，恢复会话后工作路径错乱。

## 功能需求归类

从今日更新的 Issue 中，可以观察到社区需求集中在以下几个方向：

- **模型与代理控制：**
    - **新模型支持：** 社区强烈要求支持 Google Gemini 模型（[#2854](#)）。
    - **子代理模型选择：** 用户希望子代理能遵守其配置文件中的模型指定，而不是被自动降级，需要引入更灵活的成本控制机制（[#2758](#)）。

- **会话与远程协作：**
    - **远程会话稳定性：** 新版本 `v1.0.51` 引入了远程会话无法启用的回归 bug（[#3442](#)）。
    - **移动端集成：** GitHub Android App 在预算满足的情况下，因月度请求限制而阻断远程会话，表明移动端体验仍有待优化（[#2979](#)）。
    - **会话管理：** 用户希望增加会话恢复功能，特别是能够找回被误归档的项目会话（[#3518](#)）。

- **扩展与插件生态：**
    - **更精细的 Hook 控制：** 开发者需要更强大的 API 来完全控制命令执行流程，例如实现静默重写（[#2643](#)）。
    - **Plugin 可见性：** 已加载的扩展在 `/env` 命令中不可见，导致 AI 代理无法感知并使用，降低了扩展的价值（[#3479](#)）。
    - **生命周期 hook 数据准确性：** Hook 中 `workingDirectory` 为空的问题会影响插件功能的正确性（[#3508](#)）。

- **输入与交互体验：**
    - **快捷键调整：** 希望将 Shift+Enter 行为调整为换行，而非提交，以符合多数编辑器的习惯（[#2776](#)）。

## 开发者关注点

- **稳定性与回归问题：** `v1.0.51` 版本引入的远程会话问题是当前最大的痛点之一，获得了社区最多关注。此外，`resume-auto-cd` 功能与外部工具的兼容性问题、扩展 Hook 的回归 bug，都表明新版本在兼容性测试上存在短板。
- **代理和扩展的可控性：** 开发者不满足于当前的“黑盒”行为。无论是子代理的模型选择权，还是插件 Hook 的执行控制权，社区都表现出对更高精度、更可预测行为的强烈需求。
- **跨平台兼容性：** Windows 平台下的原生崩溃问题（[#3250](#)）和移动端应用的体验限制（[#2979](#)）表明，跨平台一致性与稳定性仍是需要持续投入的领域。
- **对新兴工具链的支持：** 用户开始依赖 MCP、外部会话生成器等工具构建更复杂的本地工作流，而 CLI 对这些新场景的支持出现了断裂和错误，暴露了扩展生态的边界问题。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报｜2026-05-26

**数据来源**：GitHub [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)
**统计周期**：2026-05-25 18:00 ～ 2026-05-26 18:00（UTC+8）

---

## 今日更新概览

过去 24 小时内，Kimi Code CLI 仓库无新版本发布，社区活跃度平稳。共产生 3 个活跃 Issue（其中 1 个为 Bug 报告，2 个为功能建议）和 2 个活跃 Pull Request（均为长期开放中），无合并动作。核心关注点集中在**后台任务超时控制**、**WebSocket 挂死 Bug** 以及 **编程语言重构提议**。

---

## 版本发布

今日无新 Release。

---

## 社区热点 Issues（共 3 条）

### 1. [#2232] [enhancement] 后台任务需要能调整 timeout（开放中）
- **作者**：[@jin0612787](https://github.com/jin0612787)
- **创建**：2026-05-11 | **最后更新**：2026-05-25 | **评论数**：2 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2232
- **摘要**：用户指出 background task 超时即被杀，但 Kimi 经常过于乐观地估计超时时间，导致任务中途被终止，需要重新调整超时时间再运行。请求支持在后台任务运行过程中动态调整 timeout。该诉求涉及**任务稳定性**，暂未收到官方回复。

### 2. [#2173] [closed] [enhancement] Add crow-cli support to kimi coding plan（已关闭）
- **作者**：[@odellus](https://github.com/odellus)
- **创建**：2026-05-07 | **最后更新**：2026-05-25 | **评论数**：0 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2173
- **摘要**：用户自述是 `crow-cli` 的作者与用户，购买了 kimi coding plan 后发现自己期望的是通过 API Key 与 base URL 在第三方 agent 中使用 Kimi，却无法直接集成。该 issue 讨论的是**外部 CLI 工具集成**支持，已关闭，可能已被合并或拒绝，具体未说明。

### 3. [#2365] [Bug] kimi-code-worker hangs on Shell tool via WebSocket API（开放中）
- **作者**：[@edkim9696-ctrl](https://github.com/edkim9696-ctrl)
- **创建**：2026-05-25 | **最后更新**：2026-05-25 | **评论数**：0 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2365
- **摘要**：用户报告 `kimi-cli 1.44.0` 在 Linux 环境下，通过 WebSocket API 调用 Shell 工具时，`kimi-code-worker` 进程挂死。涉及环境：Python 3.12/3.13，以 `kimi web --host 127.0.0.1 --port 5494` 启动。这是一个**关键 Bug**，影响远程调用场景，暂未有人回复。

---

## 重要 PR 进展（共 2 条）

### 1. [#1689] fix(acp): return invalid params for unsupported session mode（开放中）
- **作者**：[@kyzhang-melo](https://github.com/kyzhang-melo)
- **创建**：2026-04-01 | **最后更新**：2026-05-26（今日有更新） | **评论数**：未提供 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/1689
- **摘要**：修复当 session mode 不受支持时，ACP 协议返回无效参数错误的问题。属于协议层修复，今日有最新提交，但尚未合并。

### 2. [#1707] refactor: rewrite from Python to Bun + TypeScript + React Ink（开放中）
- **作者**：[@Yuandiaodiaodiao](https://github.com/Yuandiaodiaodiao)
- **创建**：2026-04-01 | **最后更新**：2026-05-25 | **评论数**：未提供 | 👍 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/1707
- **摘要**：大胆提议将整个 kimi-cli 从 Python 重写为 **Bun + TypeScript + React Ink**，包含 166 个 TS/TSX 源文件、32k 行代码、37 个测试文件。用户认为“kimi-cli 用 Python 是彻底的失败”。该 PR 已经开放近两月，维护者未明确表态，社区讨论热度不高。

---

## 功能需求归类

从今日活跃 Issue 与 PR 中，可以归纳出社区用户关注的几个方向：

| 归类 | 相关 Issue / PR | 用户期望 |
|------|----------------|----------|
| **任务执行控制** | #2232 | 后台任务支持动态调整 timeout，避免任务中途被强杀 |
| **远程/WebSocket 调用** | #2365 | 修复通过 WebSocket API 调用 Shell 工具时的挂死问题 |
| **外部 CLI 集成** | #2173 | 允许第三方 CLI（如 crow-cli）通过 API 密钥直接接入 Kimi Coding Plan |
| **技术栈重构** | #1707 | 推动使用 TypeScript + Bun 替代 Python，改善性能与生态 |

注意：以上仅为今日数据覆盖的方向，不代表项目路线图。

---

## 开发者关注点

- **任务稳定性痛点**：Issue #2232 反映了生产环境中后台任务超时机制过于刚性，用户需要更灵活的调整能力，尤其适用于长时间运行或耗时不确定的任务。
- **WebSocket 通信可靠性**：Bug #2365 直接影响通过 API 集成 Kimi 服务的开发者，挂死问题会阻塞自动化工作流，属于需要紧急修复的稳定类问题。
- **重构争议**：PR #1707 代表了社区中对当前 Python 实现的不满，但缺乏官方回应意味着方向尚未明确。开发者若关注此方向，可参与讨论提供用例或性能对比数据。

---

> 本日报仅基于公开 GitHub 数据自动生成，不构成官方立场。
> 数据截止时间：2026-05-26 18:00 UTC+8

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## 📅 2026-05-26 OpenCode 社区动态日报

### 1. 今日更新概览

截至 2026 年 5 月 26 日，OpenCode 社区在过去 24 小时内共有 **50 条更新 Issue** 和 **50 条更新 Pull Request**，主要集中在模型兼容性修复、性能优化、配置错误处理以及多项用户提出的新功能请求。多个高热度 Issue 持续获得社区关注，同时维护者提交了包括桌面端启动崩溃修复、工具调用元数据截断问题在内的多项补丁。

---

### 2. 版本发布

**无**（过去 24 小时无新 Release）。

---

### 3. 社区热点 Issues

以下选取 10 个值得关注的 Issue，涵盖模型兼容、性能、配置、用户体验等维度。

| # | 标题 | 评论 | 场景 / 影响 | 链接 |
|---|------|------|-------------|------|
| 20650 | Kimi k2.5 工具调用问题 | 69 | 使用 Kimi k2.5 时工具调用 JSON 解析失败，模型尝试调用不存在的工具，影响自动代码执行和 Shell 操作 | [链接](https://github.com/anomalyco/opencode/issues/20650) |
| 29079 | GPT 模型响应耗时过长 | 44 | 简单指令有时立即响应，有时等待数分钟；用户反馈 GPT 5.4 搭配 xhigh 变体时更新 graphify 卡死 | [链接](https://github.com/anomalyco/opencode/issues/29079) |
| 27167 | [功能] 原生会话目标 `/goal` | 24 | 提出添加持久化的会话目标/生命周期功能，类似自定义斜杠命令但更系统化 | [链接](https://github.com/anomalyco/opencode/issues/27167) |
| 2156 | 陈旧 LSP 错误 (已关闭) | 20 | AI 修复代码后仍看到诊断缓存，误认为修复失败，影响开发效率 | [链接](https://github.com/anomalyco/opencode/issues/2156) |
| 29129 | OpenAI 流式响应间歇性卡死 | 13 | 处于"working"状态但无输出，CPU 高占用，必须手动重启。影响所有使用 OpenAI 模型的用户 | [链接](https://github.com/anomalyco/opencode/issues/29129) |
| 28846 | [功能] 根据 DeepSeek V4 Pro 降价调整 Go 使用限额 | 12 | DeepSeek 官方宣布永久降价 75%，用户要求 OpenCode Go 订阅相应调整模型用量配额 | [链接](https://github.com/anomalyco/opencode/issues/28846) |
| 12888 | 归档对话如何找回（中文） | 11 | 用户意外归档对话后找不到恢复入口，UI 可见性不足 | [链接](https://github.com/anomalyco/opencode/issues/12888) |
| 27906 | v1.15.1+ 破坏 Bun 安装 | 11 | 新版本要求 postinstall 生命周期脚本，但 Bun 默认禁止此类脚本，导致全局安装失败 | [链接](https://github.com/anomalyco/opencode/issues/27906) |
| 4232 | 显示未配置的 LM Studio 模型 (已关闭) | 8 | 即使 `opencode.json` 中只配置了自定义模型，UI 仍列出 LM Studio 中不存在/未配置的模型 | [链接](https://github.com/anomalyco/opencode/issues/4232) |
| 5200 | [功能] `/compact` 应可配置使用 OpenAI Responses API | 7 | 针对 OpenAI Responses API 存在专门的 compaction API，希望 `/compact` 命令能利用 | [链接](https://github.com/anomalyco/opencode/issues/5200) |

---

### 4. 重要 PR 进展

以下 10 个 PR 涉及配置健壮性、桌面端启动、工具元数据、权限路径匹配等关键修复和新功能。

| # | 标题 | 状态 | 内容 | 链接 |
|---|------|------|------|------|
| 29208 | 启动时优雅捕获配置解析错误 | 开放 | `opencode.jsonc` 中无效 JSON/JSONC 导致 "Unexpected server error"，改为捕获 `JsonError` 并显示友好提示 | [链接](https://github.com/anomalyco/opencode/pull/29208) |
| 27231 | 为已连接提供商添加编辑按钮 | 开放 | 允许用户在 UI 中直接编辑已配置的 provider 设置（关联 #20598） | [链接](https://github.com/anomalyco/opencode/pull/27231) |
| 19077 | 强制显式文件模式（忽略 umask） | 已关闭 | 修复 `tool.write` 在 strict umask 下生成非预期权限的问题，统一输出 0644 | [链接](https://github.com/anomalyco/opencode/pull/19077) |
| 29300 | 修复桌面 Electron 启动崩溃 | 开放 | 打包后立即崩溃：`ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING`，将 `@opencode-ai/telemetry` 从 externals 排除 | [链接](https://github.com/anomalyco/opencode/pull/29300) |
| 29193 | 技能添加 `hidden` 前字段 | 开放 | 允许用户标记技能为隐藏，与已有 agent 隐藏功能一致 | [链接](https://github.com/anomalyco/opencode/pull/29193) |
| 7021 | TUI 文件浏览器/编辑器 | 已关闭 | 在 TUI 侧边栏添加项目文件树和语法高亮编辑器，便于直接查看/编辑文件 | [链接](https://github.com/anomalyco/opencode/pull/7021) |
| 29280 | 添加 `simplify` 内置技能 | 已关闭 | 读取当前 git diff，输出简化后的代码建议，帮助开发者清理改动（关联 #29272） | [链接](https://github.com/anomalyco/opencode/pull/29280) |
| 29297 | 修复 Shell 元数据预览按字节截断 | 开放 | 此前用 `text.length`（UTF-16）检查截断，现改为 UTF-8 字节长度（30KB 限制） | [链接](https://github.com/anomalyco/opencode/pull/29297) |
| 29296 | 配置回退：用户信息不可用时 | 开放 | 容器/沙箱环境中 `os.userInfo()` 会抛出异常，改为安全 fallback（关联 #29292） | [链接](https://github.com/anomalyco/opencode/pull/29296) |
| 29295 | 内联 OpenAI 兼容提供商的 tool `$ref` | 开放 | 自定义 OpenAI 兼容提供商在解析 MCP 工具 schema 时遇到递归 `$ref` 导致失败，改为内联引用 | [链接](https://github.com/anomalyco/opencode/pull/29295) |

---

### 5. 功能需求归类

从近期 Issue 中可归纳出以下持续出现的功能方向：

- **模型兼容性与性能**
  - Kimi k2.5 工具调用 JSON 解析失败（#20650）
  - GPT 模型响应延迟（#29079）
  - OpenAI 流式响应卡死（#29129）
  - DeepSeek V4 Pro 降价后 Go 订阅调整建议（#28846, #29115）

- **会话与生命周期管理**
  - 原生 `/goal` 持久会话目标（#27167）
  - 归档对话找回（#12888）
  - 会话钉选（#28872）

- **配置与权限**
  - AGENTS.md 指令未被遵循（#29206）
  - 权限绝对路径/tilde 规则不匹配外部文件（#28108）
  - JSON 配置解析错误处理（#29208）

- **工具与集成**
  - 按 Agent 过滤 MCP 工具以避免超出模型工具数量限制（#28662）
  - 任务工具增加 `directory` 参数以支持 monorepo 子 Agent 分发（#29271）

- **UI/UX 改进**
  - 响应动画在快速模型下显得虚假（#29256）
  - WebUI 手动重载项目实例（#29266）
  - `/compact` 支持 OpenAI Responses API 原生压缩（#5200）

---

### 6. 开发者关注点

- **模型工具调用兼容性仍是首要痛点**：Kimi k2.5 的 JSON 解析失败、GPT 间歇性延迟、OpenAI 流式冻结，使多模型场景下的可靠性受到挑战。
- **性能退化引发广泛不满**：多个 Issue（#27106, #29079）明确抱怨最新版本“极其缓慢”，社区呼吁团队优先排查回归。
- **配置与权限系统不够健壮**：容器环境 `os.userInfo()` 异常（#29292）、JSONC 解析崩溃（#29041）、外部文件权限不匹配（#20045）等问题频繁出现。
- **安装体验受阻**：v1.15.1 强制 postinstall 脚本导致 Bun 用户无法全局安装（#27906），桌面版打包后直接崩溃（#29300）影响新用户试用。
- **功能需求集中但分散**：会话目标、技能隐藏、MCP 工具过滤、归档恢复等呼声高，但尚无证据显示开发团队已纳入明确迭代计划。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据提供的 GitHub 数据生成的 2026 年 5 月 26 日 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 | 2026-05-26

## 今日更新概览
今日发布了 `v0.16.1-nightly` 版本，主要修复构建流程问题。社区方面，围绕 `qwen serve` 服务模式的开发与补全依然是核心议题，同时有多个关于 IDE 兼容性、模型输出及 Token 管理的 Bug 报告和功能请求活跃。

## 版本发布
### [v0.16.1-nightly.20260526](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260526)
- **内容**：修复了在执行 `tsc --build` 之前清理陈旧输出，以防止 TS5055 错误。

## 社区热点 Issues
1. **[#4514 proposal: Daemon capability gaps & prioritized backlog**](https://github.com/QwenLM/qwen-code/issues/4514)
   **作者**: doudouOUC | **热度**: 7条评论 | **摘要**: 系统性梳理了`qwen serve` HTTP/SSE 接口的缺口，并按 ROI 进行优先级排序。明确了当前版本之后需要补全的服务端能力，与 `#4175` 和 `#3803` 共同构成了服务模式的发展路线图。

2. **[#4488 Bug: Qwen Code VS Code 插件左侧栏不显示**](https://github.com/QwenLM/qwen-code/issues/4488)
   **作者**: timilan123 | **热度**: 6条评论 | **摘要**: 用户报告在 VS Code 1.120.0 版本中，插件加载后闪烁消失。此问题直接影响新版 VS Code 用户的正常使用，社区积极寻找复现条件。

3. **[#4479 Feature: 统计每日 Token 消耗量功能**](https://github.com/QwenLM/qwen-code/issues/4479)
   **作者**: xiaopang927423 | **热度**: 3条评论 | **摘要**: 用户反馈发现单次使用消耗了 3 千万 Token，强烈建议增加每日 Token 用量统计功能，反映了用户对成本透明化的迫切需求。

4. **[#4493 Bug: Rider IDE 无法通过 OAuth 登录**](https://github.com/QwenLM/qwen-code/issues/4493)
   **作者**: youxi777 | **热度**: 2条评论 | **摘要**: 报告在 Rider IDE 中调用阿里云 Token Plan 时，OAuth 登录流程陷入无限重定向，导致无法在 JetBrains 生态中使用完整服务。

5. **[#4444 Bug: Token Plan 未启用 Session 缓存**](https://github.com/QwenLM/qwen-code/issues/4444)
   **作者**: goal | **热度**: 已关闭 | **摘要**: 用户通过 `/stats model` 命令发现模型统计信息中未显示缓存相关信息。此问题涉及模型调用性能，已被修复并关闭。

6. **[#4494 Bug: Side queries 忽略用户配置的输出语言**](https://github.com/QwenLM/qwen-code/issues/4494)
   **作者**: pomelo-nwu | **热度**: 1条评论 | **摘要**: 用户配置了中文输出，但会话摘要、标题等 Side queries 仍输出英文。这是一个影响非英语用户日常体验的交互问题，并有对应 PR #4519 在修复。

7. **[#4513 Bug: 多模态输入 PNG 图片导致 400 错误**](https://github.com/QwenLM/qwen-code/issues/4513)
   **作者**: wunan067830-west | **热度**: 1条评论 | **摘要**: 用户发现 Qwen Code 在上下文中携带了 PNG 图片的 `inlineData`，但 `qwen3.7-max` 的 OpenAI 兼容接口不支持此格式，导致请求失败。指向了模型兼容性处理上的一个 Bug。

8. **[#4481 Bug: 模型无法遵守“仅英文”指令**](https://github.com/QwenLM/qwen-code/issues/4481)
   **作者**: mahmoudahmed-bi | **热度**: 2条评论 | **摘要**: 用户要求模型只用英文回复，但模型无视指令，重复输出相同内容。此问题是关于模型指令遵循能力的典型反馈。

9. **[#4501 Bug: DashScope 侧查询禁用思考链失效**](https://github.com/QwenLM/qwen-code/issues/4501)
   **作者**: doudouOUC | **热度**: 0条评论 | **摘要**: 技术细节报告指出，在 DashScope 提供商下，`enable_thinking` 参数因类型检查逻辑错误而从未生效，导致用户无法侧查询中关闭思考链。

10. **[#4508 Bug: `/context` 指令错误显示 MCP 占用上下文**](https://github.com/QwenLM/qwen-code/issues/4508)
    **作者**: wangsijie163-cloud | **热度**: 0条评论 | **摘要**: 用户反馈 `/context` 命令显示 MCP 工具占用了上下文，但实际上 MCP 仅在调用时加载。这是一个关于上下文可视化准确性的 Bug。

## 重要 PR 进展
1. **[#4380 Feat: 添加 Daemon 化的 React Web Shell**](https://github.com/QwenLM/qwen-code/pull/4380)
    **作者**: ytahdn | **摘要**: 创建了由 Daemon 支持的 React Web-Shell，为构建网页版交互 UI 奠定了基础，整合了会话、SSE 事件、权限、MCP 等多种能力。

2. **[#4477 Feat: 并行 Agent 展开的密集内联面板**](https://github.com/QwenLM/qwen-code/pull/4477)
    **作者**: wenshao | **摘要**: 为 `/review` 等并行 Agent 命令提供了全新的密集型内联显示和键盘导航，改进了多 Agent 并行执行时的信息展示效率。

3. **[#4146 Feat: 基于 Ink 7 的长对话虚拟视口**](https://github.com/QwenLM/qwen-code/pull/4146)
    **作者**: chiga0 | **摘要**: 通过虚拟视口技术解决了长对话下 CLI 界面性能问题，是 #3941 的替代方案，经过多轮代码审查。

4. **[#4526 Fix: 限制硬核压缩重试次数**](https://github.com/QwenLM/qwen-code/pull/4526)
    **作者**: Jerry2003826 | **摘要**: 为每次对话的硬核救援压缩增加了重试次数限制，防止极端情况下无限重试导致死循环。

5. **[#4516 Feat: 为 Daemon 添加 Session 压缩和 Meta 路由**](https://github.com/QwenLM/qwen-code/pull/4516)
    **作者**: doudouOUC | **摘要**: 实现了 #4514 提案中的两个 Tier-1 路由，即通过 HTTP 接口手动压缩会话和查询会话元数据，补全了服务模式的能力。

6. **[#4519 Fix: 在 Side queries 中遵守输出语言配置**](https://github.com/QwenLM/qwen-code/pull/4519)
    **作者**: Jerry2003826 | **摘要**: 修复了 #4494 问题，在侧查询的指令中加入了用户配置的输出语言规则，使会话摘要、建议等辅助文本使用正确语言。

7. **[#4524 Fix: 限制前台 Shell 输出捕获大小**](https://github.com/QwenLM/qwen-code/pull/4524)
    **作者**: Jerry2003826 | **摘要**: 限制了前台 Shell 执行结果捕获的字节数，防止超大输出在 JS 环境中造成内存压力，提升了稳定性。

8. **[#4520 Fix: 截断模型端看到的工具输出**](https://github.com/QwenLM/qwen-code/pull/4520)
    **作者**: Jerry2003826 | **摘要**: 自动截断过大的工具输出，将其保存为临时文件并在模型中留下 `read_file` 指针。此举可有效减少 Token 浪费和信息过载。

9. **[#4472 Feat: Daemon 的 ACP Streamable HTTP 传输层**](https://github.com/QwenLM/qwen-code/pull/4472)
    **作者**: chiga0 | **摘要**: 在 `qwen serve` 模式下实现了 ACP 协议的 Streamable HTTP 传输层，为 SDK 和 Web UI 客户端提供了除 REST API 外的另一种标准协议接入方式。

10. **[#4375 Feat: 强化系统提示词**](https://github.com/QwenLM/qwen-code/pull/4375)
    **作者**: DennisYu07 | **摘要**: 通过在系统提示中强化“先读代码再编辑”、“专用工具优先”和“逐步沟通”等原则，旨在提升模型在代码任务上的表现和稳定性。

## 功能需求归类
- **服务化与集成**: 围绕 `qwen serve` 模式的提案与功能补全是当前最高优先级，包括 `daemon` 模式 (#3803)、功能路线图 (#4175) 和能力缺口清单 (#4514)。同时，对第三方 IDE（VS Code、Rider）和 IM 工具（微信）的兼容性优化也是高频主题。
- **IDE 兼容性**: 社区持续报告与 VS Code (#4488) 和 JetBrains Rider (#4493) 的兼容性问题，特别是新版 IDE 的适配和 OAuth 登录流程的稳定性。
- **Telemetry & Token 管理**: 用户对 Token 用量透明化和缓存效能优化有明确需求，如增加每日 Token 统计 (#4479) 和修复缓存显示问题 (#4444)。
- **模型与内容处理**: 涉及多模态输入兼容性 (#4513)、输出语种遵守 (#4494, #4519)、思考链控制 (#4501) 以及模型指令遵循能力 (#4481) 等多个细分方向。

## 开发者关注点
- **IDE 兼容性成为高频痛点**: 从 VS Code 插件不显示到 Rider 无法登录，IDE 环境的兼容性问题是影响用户体验的普遍性痛点，尤其是在较新的 IDE 版本中。
- **核心稳定性为维护者首要关注**: 大量 PR (如 #4526, #4524, #4520) 聚焦于资源边界控制（重试、输出大小、Token 估计），表明维护者正在系统地解决因资源失控导致的各种稳定性问题。
- **多语言和国际化支持细节**: 用户不仅要求英文，也有严格的`仅英文`指令 (#4481) 以及侧查询输出未能遵守中文配置 (#4494) 的问题，表明对模型输出控制精度有较高要求。

</details>