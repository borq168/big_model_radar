# AI CLI 工具社区动态日报 2026-06-11

> 生成时间: 2026-06-11 02:46 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# 各主流 AI CLI 工具横向对比分析报告（2026-06-11）

## 1. 今日横向概览

今日六个主流 AI CLI 工具中，**Claude Code** 和 **OpenCode** 分别发布了新版本（v2.1.172、v1.17.0~v1.17.3），**Gemini CLI** 提交了针对 Shell 卡死的关键修复 PR（#27842），而 **OpenAI Codex**、**Kimi Code CLI** 和 **Qwen Code** 则无版本发布。社区焦点集中在 **Windows 平台兼容性问题**（Codex、Claude Code、OpenCode 均有报告）、**Agent 行为可靠性**（Gemini CLI、Claude Code、Qwen Code 均有反馈）以及 **安全误报/策略过严**（Claude Code 的 Fable 5、Gemini CLI 的 HITL 旁路修复）。Copilot CLI 的模型可用性争议和反馈缺失问题持续受关注。

## 2. 各工具活跃度对比

| 工具 | Issues 活跃数 (24h) | PR 活跃数 (24h) | 今日 Release | 关键热度指标 |
|---|---|---|---|---|
| **Claude Code** | 50 条 | 26 条 | ✅ v2.1.172 | 最高赞 Issue #18435（580👍），内存泄漏 #11315（64条评论） |
| **OpenAI Codex** | 未明确总数（热点10条） | 未明确总数（重点10条） | ❌ 无（仅 Rust alpha 版本） | 令牌消耗 #14593（265👍, 604条评论） |
| **Gemini CLI** | 未明确总数（热点10条） | 未明确总数（重点10条） | ❌ 无 | P1 Shell 卡死 #25166 对应 PR #27842 |
| **GitHub Copilot CLI** | 41 条 | 0 条（无新 PR） | ❌ 无 | 命令破坏 #53（75👍, 34条评论，官方6个月未回应） |
| **Kimi Code CLI** | 3 条 | 23 条（多为已合并） | ❌ 无 | 仅 3 个活跃 Issue，社区基数明显偏小 |
| **OpenCode** | 50+ 条 | 50+ 条 | ✅ v1.17.0~v1.17.3 | CPU 飙升 #30086，桌面崩溃紧急修复 |
| **Qwen Code** | 32 条 | 50 条 | ❌ 无 | 多 PR 推进守护进程模式（#4773, 46 commits） |

## 3. 共同出现的功能方向

### 3.1 Windows 平台兼容性（4个工具）
- **OpenAI Codex**: 非 ASCII 用户名导致崩溃（#13553, #27506）、应用卡顿（#23198）
- **Claude Code**: ARM64 Cowork 失败（#50674）、工具结果丢失回归（#46767）、WSL 集成缺失（#49933）
- **OpenCode**: Web UI 无法选择 D 盘目录（#6490）
- **Kimi Code CLI**: 日志文件冲突修复（PR #2354）、控制台字体重置修复（PR #2289）

### 3.2 Agent 行为不可靠/卡死（3个工具）
- **Gemini CLI**: 通用 Agent 挂起（#21409）、Shell 命令后卡死（#25166，P1）
- **Claude Code**: 模型无视 CLAUDE.md 多步骤工作流（跨版本持续3个月）
- **Qwen Code**: Subagent 读取图片返回无关内容（#4876）

### 3.3 安全误报/策略过严（2个工具）
- **Claude Code**: Fable 5 将合规安全审计标记为高风险（#67302, #67305）
- **Gemini CLI**: 修复了 HITL 旁路漏洞（PR #27472）、主机名绕过检查（PR #27473）

### 3.4 终端交互体验倒退（3个工具）
- **Claude Code**: TUI alternate-screen 破坏 tmux 回滚（#67289）
- **Copilot CLI**: 强制 alt-screen 模式引发反弹（#2334）、流式渲染乱码（#3749）
- **Qwen Code**: 缩放导致内容碎片化（#4891）、鼠标序列泄露（#4974）

### 3.5 MCP 生态成熟度（3个工具）
- **Copilot CLI**: 第三方 MCP 服务器被错误禁用反复出现（#1707 已关, #3756 新开）
- **Qwen Code**: MCP 工具调用时数字字符串参数类型未转换（#4966）
- **OpenCode**: 插件 HTTP 服务器保障、localhost 自动授权（均 PR 中）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 深度工作流编排、子智能体递归（最多5层） | 重度开发者、多项目管理 | 强模型绑定（Claude Opus），MCP 插件生态初具雏形 |
| **OpenAI Codex** | 上下文管理自动化（压缩、窗口新建）、多模态（TUI 图片） | 全栈开发者、企业用户 | 依托 OpenAI 模型体系，Rust 重写（alpha），强调上下文 Token 预算控制 |
| **Gemini CLI** | 自动记忆（Auto Memory）、安全加固 | 追求 AI 自主性的开发者 | 高风险高收益：功能激进（自动记忆）vs 稳定性缺口（P1 卡死） |
| **GitHub Copilot CLI** | 企业级策略管理、模型多选 | 企业组织用户 | 生态绑定（GitHub 组织策略），反馈循环弱，模型多样性 vs 策略冲突 |
| **Kimi Code CLI** | 轻量级编码辅助，跨平台修复 | 初/中级开发者 | 社区规模最小，以基础稳定性和 bug 修复为主，无重大功能迭代 |
| **OpenCode** | MCP/插件生态、Provider 兼容（Cohere/Cerebras） | 追求模型开放性的开发者 | 兼容最多第三方 Provider，守护进程模式探索中（REST API + WebSocket） |
| **Qwen Code** | 守护进程模式、`/stats` 统计分析 | 追求可观测性和后端集成的开发者 | 基于 Qwen 模型生态，核心 PR 集中于 Daemon 模式落地（+115k 行代码） |

## 5. 社区活跃度记录

**最活跃（发布+高热度反馈）：** **Claude Code** 和 **OpenCode**。Claude Code 在 Issue 数量（50条）、PR 数量（26条）和发布节奏上均领先，且拥有今日最高赞 Issue（#18435, 580👍）。OpenCode 同样发布 4 个版本，Issue/PR 合计超 100 条。

**中度活跃（无发布但 PR/Issue 持续更新）：** **OpenAI Codex**、**Qwen Code**、**Copilot CLI**。Codex 的令牌消耗问题持续 604 条评论；Qwen Code 有 32 个 Issue 和 50 个 PR 更新；Copilot CLI 虽无新 PR，但 41 条 Issue 更新反映了用户活跃度。

**低活跃：** **Kimi Code CLI**。仅 3 个活跃 Issue、无新版本发布，社区体量明显偏小。

## 6. 有证据支撑的观察

### 观察 1：Windows 平台兼容性是多工具的共同短板
**证据**：今天 Codex（非ASCII用户名崩溃）、Claude Code（ARM64 Cowork 失败、WSL 缺失）、OpenCode（Web UI 盘符限制）、Kimi Code（日志冲突、窗口弹出）等4个工具均有 Windows 相关 Issue/PR，且多为阻碍使用的中高严重度问题。Windows 平台已成为 AI CLI 工具生态中最显著的薄弱环节。

### 观察 2：Agent 行为一致性受到普遍性质疑
**证据**：Claude Code 用户反馈 Opus 4.6/4.7/4.8 连续三个版本无视 CLAUDE.md 工作流（已跨版本持续3个月）；Gemini CLI 的通用 Agent 挂起（#21409）、子 Agent 虚假成功报告（#22323）；Qwen Code 子 Agent 读取图片返回无关内容（#4876）。三个独立工具均有类似“模型不按用户指令执行”的反馈，指向基础 Agent 架构的一致性缺陷。

### 观察 3：MCP 生态已成为标配，但兼容性问题是主要矛盾
**证据**：Copilot CLI 的第三方 MCP 服务器被策略误禁反复出现（#1707 已关，今日新开 #3756）；Qwen Code 的 MCP 工具调用数字参数类型未转换（#4966）；OpenCode 的 MCP 提示/资源请求修复（v1.17.1）。MCP 已经成为 CLI 工具的标配能力，但模型-工具间的参数 Schema 兼容、企业策略判断逻辑仍是主要瓶颈。

### 观察 4：子智能体/多代理功能加速普及，但稳定性不足
**证据**：Claude Code v2.1.172 新增递归子智能体（最多5层）；Codex 的多代理功能持续报告错误（#26753 Schema 错误、#27399 循环死亡）；Kimi Code 的 Agent 最后一个 Todo 项卡住（#2447）。子智能体功能正在快速推进，但用户反馈表明其实用性受限于状态管理、错误恢复等底层稳定性。

### 观察 5：终端交互体验因近期更新出现集体性退步
**证据**：Claude Code（alt-screen 破坏 tmux 回滚 #67289）、Copilot CLI（强制 alt-screen 被用户要求恢复 #2334，流式渲染乱码 #3749）、Qwen Code（缩放导致内容碎片化 #4891）。三个工具在同一天出现与终端渲染/回滚/流式输出相关的用户体验回归，显示终端交互模块在快速迭代中缺乏充分的兼容性测试。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报 — 2026-06-11

## 今日更新概览

Anthropic 于今日发布 **v2.1.172**，新增子智能体递归生成（最多5层）及 Amazon Bedrock AWS 区域读取改进。社区 24 小时内活跃度较高，累计更新 50 条 Issue、26 条 PR，**#18435（多账户切换）** 以 109 条评论、580 个 👍 持续领跑社区关注度；用户反复反馈模型行为一致性、Fable 5 安全误报和 macOS 平台问题。

---

## 版本发布

**v2.1.172** [变更日志](https://github.com/anthropics/claude-code/releases/tag/v2.1.172)

- **子智能体递归**：子智能体现可自行创建下级子智能体（最深5层），支持更灵活的层级任务编排
- **Amazon Bedrock 区域配置改进**：当 `AWS_REGION` 未设置时，从 `~/.aws` 配置文件中读取区域，读取来源可通过 `/status` 查看
- **Markdown 搜索**：浏览 mark 文件时新增搜索栏

---

## 社区热点 Issues

### 1. 多账户切换功能请求（最热门）
**#18435** — 要求 Claude Desktop 支持管理多个 Claude 账号并实现快速切换
**讨论**: 109条评论 / 580 👍
**应用场景**: 多账号开发者/组织用户切换个人与工作账号
→ https://github.com/anthropics/claude-code/issues/18435

### 2. 严重内存泄漏（最多关注bug）
**#11315** — Linux 上 Claude Code 消耗 129GB 内存并导致系统冻结
**讨论**: 64条评论
**应用场景**: 长时间使用 Claude Code 进行代码生成/重构的重度用户
→ https://github.com/anthropics/claude-code/issues/11315

### 3. macOS 独立界面工作树创建问题（已关闭）
**#12513** — 要求为单人开发者提供禁用自动工作树创建的选项
**讨论**: 46条评论 / 79 👍
**应用场景**: 使用独立 macOS 版本的非团队开发者
→ https://github.com/anthropics/claude-code/issues/12513

### 4. 图像处理错误消耗使用额度
**#62466** — 反复出现“Image couldn't be processed”API 错误，持续消耗使用限额
**讨论**: 23条评论
**影响**: 涉及图像理解功能的用户被不合理计费
→ https://github.com/anthropics/claude-code/issues/62466

### 5. Windows ARM64 Cowork 功能失败
**#50674** — Cowork 功能在 Snapdragon X ARM64 设备上通过 readiness 检查后仍然失败
**讨论**: 19条评论
→ https://github.com/anthropics/claude-code/issues/50674

### 6. 编辑工具静默转换 Tab 为空格
**#26996** — Edit 工具自动将 Tab 转为空格，导致使用 Tab 缩进的文件匹配失败
**讨论**: 15条评论 / 27 👍
→ https://github.com/anthropics/claude-code/issues/26996

### 7. 工具结果静默丢失（Windows 回归）
**#46767** — Windows v2.1.101 版本中全部工具结果出现“missing due to internal error”
**讨论**: 10条评论
→ https://github.com/anthropics/claude-code/issues/46767

### 8. Opus 4.8 自主编造用户任务
**#64260** — Opus 4.8 在会话中虚构了一个现在时的用户请求并坚持执行
**讨论**: 9条评论
**影响**: 破坏真实用户意图与模型行为的一致性
→ https://github.com/anthropics/claude-code/issues/64260

### 9. WSL 原生远程集成请求
**#49933** — 要求在 Windows Desktop 上支持原生 WSL 远程集成
**讨论**: 9条评论 / 55 👍
→ https://github.com/anthropics/claude-code/issues/49933

### 10. Fable 5 安全筛查导致 CTI 工作不可用
**#67305** — Fable 5 的安全回退机制将常规威胁情报工作标记为高风险，自动切换至 Opus 4.8
**讨论**: 1条评论
→ https://github.com/anthropics/claude-code/issues/67305

### 额外关注：TUI 滚动回归
**#67289** — 新版本 TUI 的 alternate-screen 模式破坏了 tmux 的回滚功能，用户无法查看历史对话
→ https://github.com/anthropics/claude-code/issues/67289

### 额外关注：安全误报频发（新增3条）
今日新增多条 Fable 5 安全误报 Issue（#67304、#67302、#67305），用户一致反映 Fable 5 的安全策略将合规的安全审计、漏洞复现流程标记为违规并强制切换模型
→ https://github.com/anthropics/claude-code/issues/67304
→ https://github.com/anthropics/claude-code/issues/67302

---

## 重要 PR 进展

### 1. Issue 生命周期调整
**#63686** — 将 stale/autoclose 超时从 14 天延长至 90 天
**影响**: 减少因处理时间不足导致的 Issue 过早关闭
→ https://github.com/anthropics/claude-code/pull/63686

### 2. Hookify 字段修复与上下文改进
**#67084** — 修复旧版提示字段映射，新增 `user_prompt` 向后兼容别名，为钩子响应添加额外上下文
→ https://github.com/anthropics/claude-code/pull/67084

### 3. 插件 `.mcp.json` 文档修正
**#64607** — 修复插件文档中 `.mcp.json` 示例错误使用了 `mcpServers` 包装
→ https://github.com/anthropics/claude-code/pull/64607

### 4. 代码审查子进程环境变量转发
**#65875** — 修复 agentic_review 子进程未继承 `ANTHROPIC_BASE_URL`，导致代理/网关端点认证失败
→ https://github.com/anthropics/claude-code/pull/65875

### 5. 子智能体 CLAUDE_PLUGIN_ROOT 限制文档化
**#65919** — 记录子智能体中 `${CLAUDE_PLUGIN_ROOT}` 和 `${CLAUDE_PROJECT_DIR}` 无法正确解析的已知限制
→ https://github.com/anthropics/claude-code/pull/65919

### 6. Devcontainer Docker 检测修复
**#66372** — 修复 PowerShell 中 `docker info` 非零退出码未被捕获的问题
→ https://github.com/anthropics/claude-code/pull/66372

### 7. 颜色主题问题聚类脚本
**#65314** — 新增 triage 脚本自动扫描浅色主题下文字不可读的 Issue 并归类到已知的 color7/color0 冲突
→ https://github.com/anthropics/claude-code/pull/65314

### 8. 验证器脚本竞速中止修复
**#66416** — 修复 plugin-dev 中多个验证器因 `set -e` 导致在第一个失败处提前退出
→ https://github.com/anthropics/claude-code/pull/66416

### 9. npm 安装文档更新
**#63460** — 将 plugins/README.md 中的 `npm install -g` 替换为推荐的 curl/irm 安装方式
→ https://github.com/anthropics/claude-code/pull/63460

### 10. 插件开发者元数据修复
**#65286** / **#66575** / **#66577** — 分别为 plugin-dev、pr-review-toolkit 和 security-guidance 插件补充缺失的 `plugin.json`、修正作者名、同步版本描述
→ https://github.com/anthropics/claude-code/pull/65286
→ https://github.com/anthropics/claude-code/pull/66575
→ https://github.com/anthropics/claude-code/pull/66577

---

## 功能需求归类

从 Issues 中可归纳出以下用户反复提出的功能方向：

| 方向 | 代表 Issue | 用户诉求 |
|---|---|---|
| **多账号管理** | #18435（👍580） | 在 Desktop 中切换多个 Claude 账号 |
| **WSL 远程集成** | #49933（👍55） | Windows 桌面客户端原生连接 WSL 环境 |
| **MCP 生态完善** | #42138 | Telegram 等外部 MCP 通知正确注入对话 |
| **模型行为守则** | #54117、#49259、#65951 | 模型反复跳过 CLAUDE.md 中定义的多步骤流程 |
| **插件开发工具链** | 多个 PR 修复 | 插件发现、文档准确性、子智能体路径 |

---

## 开发者关注点

**1. 模型行为一致性受到广泛质疑**
多位用户（@ktimesk1776、@jmcy9999 等）反复报告 Opus 4.6/4.7/4.8 连续多个版本无视 CLAUDE.md 中明确定义的多步骤工作流（计划→审查→测试→发布），直接跳入编码。该问题已跨版本持续 3 个月仍未解决。

**2. 严重内存与磁盘问题影响生产使用**
#11315（129GB 内存泄漏）和 #63909（Bash 工具报 ENOSPC）属于系统级稳定性 bug，直接影响长时间运行场景。

**3. Windows 平台支持仍是薄弱环节**
Windows 上同时存在 ARM64 Cowork 失败（#50674）、工具结果丢失回归（#46767）、WSL 集成缺失（#49933）等多个开放问题。

**4. Fable 5 安全筛查过严引发大面积误报**
今日集中出现至少 3 条关于 Fable 5 安全误报的新 Issue（#67302、#67304、#67305），涉及网络安全审计、漏洞复现、Bug 报告等合法场景均被阻断，用户认为该模型在安全领域“实际上不可用”。

**5. TUI 体验回归**
#67289 报告 v2.1.172 的 alternate-screen 改变破坏了 tmux 回滚，导致用户无法浏览超出终端可视范围的对话历史。

**6. Cursor 集成退步？** 社区长期抱怨的模型跳过工作流问题仍无实质进展，与此同时开发者发现 `/usage` 命令显示 token 数据异常（#49633），cowork 需手动输入来触发通知处理（#51959），自动化编排体验不佳。

---

_数据来源：github.com/anthropics/claude-code | 统计截止：2026-06-11 23:59 UTC_

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，这是为你生成的2026年6月11日OpenAI Codex社区动态日报。

---

# OpenAI Codex 社区动态日报 | 2026-06-11

## 今日更新概览

今日社区主要关注多项影响使用体验的Bug，尤其是Windows平台的兼容性问题与数据持久化丢失问题。开发团队在PR侧表现活跃，重点推进了上下文压缩、上下文窗口管理及多模态支持等底层功能的优化。昨日发布两个新的Rust alpha版本，但未包含显著的面向用户的功能更新。

## 版本发布

- **rust-v0.140.0-alpha.7**: 0.140.0-alpha.7 ([链接](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.7))
- **rust-v0.140.0-alpha.4**: 0.140.0-alpha.4 ([链接](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.4))

无详细的更新日志。

## 社区热点 Issues

1.  **#14593 - 令牌（Token）消耗极快** ([链接](https://github.com/openai/codex/issues/14593))
    - **影响场景**: 使用VS Code扩展时的套餐用量消耗。
    - **问题范围**: 高热度问题（265 👍，604条评论），持续至今。用户报告在Business订阅下，令牌消耗速度异常快，引发对计费透明度的广泛讨论。
    - **社区反应**: 社区讨论激烈，开发者尚未给出明确解决方案。

2.  **#26867 - 迁移账户后，GitHub PR审查仍使用已停用工作区** ([链接](https://github.com/openai/codex/issues/26867))
    - **影响场景**: 从Business账号迁移至Personal Pro账号后，在Codex Web端进行GitHub PR审查。
    - **问题范围**: 近期出现的认证状态同步问题，导致审查功能无法正常使用。
    - **社区反应**: 用户反馈存在配置残留问题，影响账号迁移流程的顺畅性。

3.  **#25463 - Desktop项目线程从UI消失，但本地文件仍可读** ([链接](https://github.com/openai/codex/issues/25463))
    - **影响场景**: 本地项目对话管理。
    - **问题范围**: 持续数周的数据可见性Bug。Desktop UI无法显示本地已有的对话记录，但底层文件完好。问题在RSSHub项目中被复现。
    - **社区反应**: 用户担心数据永久丢失，社区讨论集中在如何恢复和预防此类问题。

4.  **#17642 - CLI中使用ChatGPT账号调用特定模型失败** ([链接](https://github.com/openai/codex/issues/17642))
    - **影响场景**: CLI下使用 `gpt-5.3-codex-spark` 模型。
    - **问题范围**: 持续已久的认证授权问题。Pro用户无法通过ChatGPT账号使用特定模型。
    - **社区反应**: 用户困惑于模型可用性与订阅计划之间的对应关系。

5.  **#23198 - Windows Desktop应用运行极其缓慢** ([链接](https://github.com/openai/codex/issues/23198))
    - **影响场景**: Windows平台下的日常开发使用。
    - **问题范围**: 性能问题，特征明显（31 👍），问题隔离于Codex应用本身，而非系统整体性能。
    - **社区反应**: Windows用户广泛抱怨此问题，严重影响开发效率。

6.  **#13553 - 含非ASCII字符的Windows用户名导致应用启动失败** ([链接](https://github.com/openai/codex/issues/13553))
    - **影响场景**: Windows Store版本应用首次启动。
    - **问题范围**: 编码兼容性问题。影响非英文（如中文、韩文）用户名的群体。
    - **社区反应**: 一个新用户快速开始的障碍，因系统区域设置而异。

7.  **#27491 - 严重流式输出延迟及卡顿** ([链接](https://github.com/openai/codex/issues/27491))
    - **影响场景**: MacOS上使用“快速模式”（Fast mode）时的交互体验。
    - **问题范围**: 全新Bug。输出速度极慢，几秒才能输出几个字符，然后完全停止。与最新的桌面版本相关。
    - **社区反应**: 严重影响使用体验，用户已提交反馈ID跟踪。

8.  **#27175 - Windows更新后应用崩溃或无法访问** ([链接](https://github.com/openai/codex/issues/27175))
    - **影响场景**: Windows 11上更新至 `26.602.71036` 版本后。
    - **问题范围**: 应用稳定性问题，即使清空会话（session）仍会崩溃。用户已升级至最高级的ChatGPT Pro订阅。
    - **社区反应**: 用户认为新版本存在严重稳定性回归。

9.  **#27296 - Fn全局听写快捷键失效** ([链接](https://github.com/openai/codex/issues/27296))
    - **影响场景**: macOS系统下，使用系统级听写功能。
    - **问题范围**: 应用更新 (`26.608.12217`) 后，干扰或禁用了系统的全局Fn快捷键。
    - **社区反应**: 问题清晰，影响用户跨应用操作，社区迅速响应点赞 (9 👍)。

10. **#27506 - Windows用户名含韩文字符导致启动后立即崩溃** ([链接](https://github.com/openai/codex/issues/27506))
    - **影响场景**: Windows MSIX版本应用启动。
    - **问题范围**: 与 #13553 类似，但更严重，直接导致Crash。错误信息指向 `windows-updater.node` 中的编码转换问题。
    - **社区反应**: 新提交的严重Bug，影响特定语言环境的用户。

## 重要 PR 进展

1.  **#27519 & #27520 - 模型元数据上下文压缩（Compaction）** ([链接](https://github.com/openai/codex/pull/27519), [链接](https://github.com/openai/codex/pull/27520))
    - **功能/修复**: 引入 `comp_hash` 概念，当模型版本变化时自动触发历史记录的压缩。这能有效管理长对话的上下文窗口。
    - **重要性**: 高。自动且智能的上下文管理是保持大型AI工作流健康的关键。

2.  **#27518 & #27488 - 新增上下文工具** ([链接](https://github.com/openai/codex/pull/27518), [链接](https://github.com/openai/codex/pull/27488))
    - **功能/修复**: 为模型提供两种新工具：查询剩余上下文窗口 (`context_remaining`) 和 启动新上下文窗口 (`new context window`)。
    - **重要性**: 高。赋予模型自主管理上下文的能 力，使其在面对复杂或长链任务时更高效、容错率更高。

3.  **#27438 - 新增令牌预算（Token Budget）上下文功能** ([链接](https://github.com/openai/codex/pull/27438))
    - **功能/修复**: 当启用了`token_budget`特性时，模型可以获取上下文窗口的预算元数据。
    - **重要性**: 中高。为模型提供成本意识，有助于优化API调用和用户计费。

4.  **#27501 - 扩展托管网页搜索引用指导** ([链接](https://github.com/openai/codex/pull/27501))
    - **功能/修复**: 优化托管网页搜索的Prompt，改进引用格式，要求模型使用Markdown链接并避免暴露内部轮次ID。
    - **重要性**: 中。提升最终用户获取信息的体验和质量。

5.  **#27415 & #27512 - 改进运行时警告通知** ([链接](https://github.com/openai/codex/pull/27415), [链接](https://github.com/openai/codex/pull/27512))
    - **功能/修复**: 让 `codex exec` 能够将线程初始化时的警告（如项目下无效的`AGENTS.md`文件）传递给用户。
    - **重要性**: 中。改善调试体验，防止开发者忽略关键的非致命错误。

6.  **#27440 - Guardian超时时回退至手动审批** ([链接](https://github.com/openai/codex/pull/27440))
    - **功能/修复**: Guardian自动审查有时会超时但无明确结果。此PR将此情况视为可回退，允许用户手动审批，避免命令被阻塞。
    - **重要性**: 中。提升了代码执行审批流程的健壮性和用户控制权。

7.  **#27508, #27509, #27510 - 栈: 支持TUI目标（Goal）中的多媒体内容** ([链接](https://github.com/openai/codex/pull/27508), [链接](https://github.com/openai/codex/pull/27509), [链接](https://github.com/openai/codex/pull/27510))
    - **功能/修复**: 一个三PR的栈，分步支持在TUI（终端用户界面）的 `/goal` 命令中输入长文本和图片。
    - **重要性**: 高。显著增强了CLI环境下的多模态交互能力，扩展了使用场景。

8.  **#27246 & #27266 & #27247 - 图像处理优化** ([链接](https://github.com/openai/codex/pull/27246), [链接](https://github.com/openai/codex/pull/27266), [链接](https://github.com/openai/codex/pull/27247))
    - **功能/修复**: 在处理图片时去掉不必要的 `detail` 字段，保留元数据，并支持历史图像的缩放。
    - **重要性**: 中。旨在降低API请求成本，同时保证图像质量和信息的完整性。

9.  **#27323 - 提供ARM64 MinGW powl兼容支持** ([链接](https://github.com/openai/codex/pull/27323))
    - **功能/修复**: 修复Windows ARM64平台上使用LLVM MinGW编译时的链接错误。
    - **重要性**: 中。修复了特定平台的构建问题，确保了对原生ARM64设备的支持。

10. **#27514 - 支持实时对话提示覆盖** ([链接](https://github.com/openai/codex/pull/27514))
    - **功能/修复**: 允许调用者在启动实时对话（Realtime）时，提供自定义的开始和结束提示。
    - **重要性**: 中。增加了实时功能的灵活性，使特定应用场景的自定义成为可能。

## 功能需求归类

从近期的Issues中，用户反馈的功能需求集中在以下方面：

- **数据持久性与可靠性**: 大量Issue（如 #25463, #20833, #22796）报告UI无法正确显示或索引本地的会话数据。这表明用户对本地数据的稳定性和可视化管理有强烈需求。
- **Windows平台兼容性与稳定性**: 多个Issues（如 #23198, #27175, #25807, #26310, #13553, #27506）指向Windows平台上的性能、崩溃、编码兼容问题。这是社区目前最集中的痛点。
- **认证与授权管理**: Issues（如 #26867, #17642, #24103）处理了账户迁移、模型订阅权限不匹配、OAuth登录失败等问题。用户需要一个更透明、更自动化的账户-权限-使用场景关联系统。
- **子代理（Subagent）与多代理（MultiAgent）**: 多个Issues（如 #26753, #23496, #23971, #27399）报告了子代理的使用问题，包括Schema错误、指令被忽略、循环死亡等。社区对高级Agent特性的稳定性和易用性有较高期望。
- **上下文与性能**: Issues（如 #14593 - 令牌消耗, #27491 - 流式卡顿, #21777 - 自动压缩）反映了社区对高效、可控、透明的上下文管理和模型响应性能的持续关注。

## 开发者关注点

- **Windows兼容性**: 这是目前最严重的痛点。编码问题（非ASCII路径）、直接崩溃、严重卡顿等问题在该平台上集中爆发，严重影响非英语用户的正常使用。
- **数据“幽灵”丢失**: 多个用户报告UI中对话记录消失，但底层文件仍存在。这造成了巨大的不信任感，开发者迫切需要提供更可靠的数据索引和UI刷新机制。
- **新版本稳定性回归**: 多起更新后立即出现的崩溃（如 #27175）表明发布前的测试流程可能存在不足，特别是针对不同的Windows版本和环境。
- **高级功能的可靠性**: 使用子代理和多代理功能时频繁遇到错误，表明这些强大的特性仍处于一个高度不稳定的状态，对于希望深度使用的开发者来说风险较高。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，这是为您生成的 2026-06-11 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 - 2026-06-11

## 今日更新概览

今日社区活跃度较高，核心聚焦于**Agent行为稳定性**与**性能修复**。开发团队提交了一个关键PR (#27842) 以解决长期存在的Shell命令执行完成后界面卡死的P1级问题。此外，围绕 **Auto Memory系统** 的行为优化（如日志脱敏、低信号会话重试）和 **安全性加固**（如HITL绕过漏洞、路径遍历）的多个PR和Issue也在持续讨论和合并中。

## 社区热点 Issues

### 1. Agent 挂起与性能问题
- **[#21409] 通用 Agent 挂起** (👍8, 💬7)
  - **场景**: 当 Gemini CLI 调用通用 Agent 时，会无限期挂起，即使执行简单的创建文件夹操作也是如此。用户反馈通过指示模型不使用子代理可避免此问题。
  - **问题范围**: 影响所有需要 Agent 能力的工作流，严重影响基础体验。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/21409

- **[#27785] “思考”过久，无响应** (💬3)
  - **场景**: 用户在交互过程中，模型在“Thinking”阶段耗时过长，但最终没有任何结果输出。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/27785

- **[#25166] Shell 命令执行后挂起，显示“等待输入”** (👍3, 💬4)
  - **场景**: 极简单的CLI命令执行完毕后，界面仍显示该命令为活动状态并“Awaiting user input”，导致后续操作无法进行。此Issue已被标记为P1。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/25166

### 2. Agent 行为逻辑与可靠性
- **[#22323] 子 Agent 失败后被错误报告为“成功”** (👍2, 💬6)
  - **场景**: `codebase_investigator` 子代理在达到最大轮次限制后，其自身的报告已明确说明失败，但主系统却将其状态标记为 `success`，导致用户被误导。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/22323

- **[#21968] Gemini 不主动使用自定义技能和子 Agent** (💬6)
  - **场景**: 用户配置了“gradle”和“git”等自定义技能，但Agent在执行相关任务（如构建、版本控制）时，除非用户明确指示，否则不会主动调用这些技能。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/21968

- **[#23571] 模型频繁在随机位置创建临时脚本** (💬3)
  - **场景**: 当限制模型只能通过Shell执行脚本时，它会将生成的编辑脚本散落在各个目录，给工作区的清理和版本控制提交带来不便。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/23571

### 3. 安全与隐私
- **[#26525] 为 Auto Memory 增加确定性脱敏并减少日志**
  - **场景**: Auto Memory在读取本地记录时，会将内容发送给模型进行脱敏，但此时数据已进入模型上下文。同时，服务日志可能会记录已存在的技能信息，存在隐私风险。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/26525

- **[#26522] 阻止 Auto Memory 无限重试低价值会话**
  - **场景**: Auto Memory只有在Agent成功读取某个记录后，才将其标记为已处理。如果Agent认为某个记录价值低而不读取，该记录会永远处于未处理状态，导致被反复推荐和处理，造成资源浪费。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/26522

### 4. 平台兼容性
- **[#21983] 浏览器子 Agent 在 Wayland 环境下失败**
  - **场景**: 使用Wayland显示服务器的用户无法正常使用浏览器子Agent功能。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/21983

### 5. 配置与设置
- **[#22267] 浏览器 Agent 忽略 settings.json 中的覆盖配置**
  - **场景**: 用户尝试通过项目的 `settings.json` 修改 `browser_agent` 的 `maxTurns` 参数，但Agent完全不生效，始终使用默认值。
  - **链接**: https://github.com/google-gemini/gemini-cli/issues/22267

---

## 重要 PR 进展

### 1. 核心稳定性修复
- **[#27842] fix(core): never let shell exit results hang on the output drain** (OPEN)
  - **内容**: 直接针对 Issue #25166，修复了Shell命令完成但CLI界面卡死的bug。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27842

### 2. 安全漏洞修复
- **[#27473] fix(security): resolve hostnames before private-IP check** (CLOSED)
  - **内容**: 修复了一个安全漏洞，该漏洞允许解析到私有IP或链路本地IP的主机名绕过 `isBlockedHost` 检查。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27473

- **[#27472] fix(ui): enforce truncation lockout for tool confirmations to prevent IPI** (CLOSED)
  - **内容**: 修复了一个关键的HITL旁路漏洞 (#23433)，通过强制用户在确认命令前展开查看完整内容，防御间接提示注入攻击。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27472

- **[#27767] fix(cli): prevent path traversal vulnerabilities during skill install** (OPEN)
  - **内容**: 修复了技能安装、链接和卸载过程中存在的路径遍历漏洞。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27767

### 3. 崩溃与异常修复
- **[#27502] fix(core): resolve P1 crash during terminal resize** (CLOSED)
  - **内容**: 修复了终端窗口大小调整时，因竞争条件导致 `ioctl(2)` 调用失败而引发的P1级崩溃。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27502

- **[#27474] fix(core): guard isFunctionCall/isFunctionResponse against empty parts** (CLOSED)
  - **内容**: 修复了由于 `Array.prototype.every()` 对空数组返回 `true` 导致的函数调用/响应误判问题。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27474

### 4. 功能与改进
- **[#27648] feat(core): support list format in trustedFolders.json** (OPEN)
  - **内容**: 允许 `trustedFolders.json` 支持JSON数组格式，简化手动维护信任目录列表的操作。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27648

### 5. CI/CD与依赖
- **[#27753] ci: validate workflow_run origin before consuming the E2E artifact** (OPEN)
  - **内容**: 修复了CI/CD流程中，Fork PR可能通过“artifact投毒”方式执行恶意代码的安全隐患。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27753

### 6. 其他修复
- **[#27839] fix(core): make read_background_output delay abort-aware** (OPEN)
  - **内容**: 修复了按下ESC取消 `read_background_output` 调用时，UI显示已取消但底层操作仍在进行的问题。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27839

- **[#27698] fix(core): Ensure zero-quota limits fail fast** (OPEN)
  - **内容**: 修复了零配额限制导致客户端陷入10次重试死循环的问题，使限流错误能够快速失败并通知用户。
  - **链接**: https://github.com/google-gemini/gemini-cli/pull/27698

---

## 功能需求归类

从近期活跃的Issue中，可以归纳出以下几个用户反复提及的功能方向：

1.  **Agent 行为优化**：用户期望Agent更加智能和稳定。这包括**更主动地调用自定义技能**（#21968）、**避免在不必要的情况下使用子Agent**（#21409）、**更智能地处理文件创建和脚本执行**（#23571），以及**提高Agent在失败后状态上报的真实性**（#22323）。
2.  **稳定性与错误处理**：多个P1级Bug指向了**执行流程卡死**（#25166, #21409）和**意外崩溃**（终端resize）问题。用户对基础操作的稳定性和确定性有很高要求。
3.  **自动记忆（Auto Memory）系统优化**：社区对Auto Memory的**资源消耗**（重试低价值会话 #26522）、**隐私安全**（日志脱敏 #26525）和**无效补丁处理**（#26523）提出了明确的改进意见。
4.  **安全与权限控制**：用户关注**HITL机制的有效性**（防御Prompt注入 #27472）、**域名解析的安全性**（#27473）以及**技能安装的路径安全**（#27767）。这表明随着CLI能力的增强，安全红线问题日益凸显。

---

## 开发者关注点

- **Agent 挂起和卡死是最大痛点**：无论是“通用Agent”还是“Shell命令执行”，任何形式的操作挂起都直接导致工作流断裂，是开发者最急切希望解决的问题。针对#25166的PR #27842 是今日最值得关注的修复。
- **对Agent自主决策的可靠性存疑**：用户反馈了Agent“不调用技能”和“失败却报告成功”的问题。这说明开发者需要Agent具备更强的上下文理解和诚实的自我认知能力，而不是依赖虚假的成功状态。
- **“被遗忘”的自动化背景进程**：Auto Memory等后台功能在带来便利的同时，也引入了新的管理负担和隐私疑虑。开发者希望这类功能的行为是可预测、可配置且透明的，不会在后台无限消耗资源或暴露敏感信息。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，以下是根据您提供的 GitHub 数据生成的 2026-06-11 GitHub Copilot CLI 社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 | 2026-06-11

## 今日更新概览

今日仓库未发布新版本，亦无新的 Pull Request 被创建或更新。社区活跃度集中在 Issue 讨论区，共 41 条 Issue 在过去 24 小时内获得更新，其中模型可用性、终端兼容性及 MCP 服务器策略问题仍是社区讨论的焦点。值得注意的是，一个关于第三方 MCP 服务器被错误禁用的问题 (Issue #3756) 被再次报告，显示该问题可能未在最新版本中完全解决。

## 社区热点 Issues

1.  **[#53] [OPEN] 恢复旧版 CLI 命令，避免破坏工作流**
    -   **影响场景**：所有依赖旧版 Copilot CLI 命令的自动化脚本或工作流。
    -   **问题范围**：这是仓库中反响最热烈的 Issue。用户指出新版本 CLI 更改了核心命令，破坏了现有工作流。社区已开始自建替代方案 (如 `shell-ai`)，但 GitHub 团队在 6 个月内未对这篇高赞帖子做出官方回应。
    -   **社区反应**：34 条评论，75 个 👍。社区情绪偏向沮丧和催促官方回复。
    -   [链接](https://github.com/github/copilot-cli/issues/53)

2.  **[#1703] [CLOSED] CLI 未列出所有组织启用的模型（如 Gemini 3.1 Pro）**
    -   **影响场景**：使用组织策略管理 Copilot 的企业用户，在 CLI 中获取的模型列表比 VS Code 中少。
    -   **问题范围**：用户发现，即使组织已启用特定模型（如 Gemini 3.1 Pro），这些模型在 CLI 中仍不可见，在 VS Code 中却正常，造成体验不一致。
    -   **社区反应**：31 条评论，54 个 👍。该问题已被关闭，表明可能已有修复或官方解释，但未在更新中明确。
    -   [链接](https://github.com/github/copilot-cli/issues/1703)

3.  **[#223] [OPEN] 组织级令牌应能设置 “Copilot 请求” 权限**
    -   **影响场景**：企业环境下，组织管理员为自动化流程创建细粒度令牌（Fine-grained Token）的场景。
    -   **问题范围**：用户希望使用组织所有的令牌来认证自动化流程，以避免使用个人 PAT。但目前创建组织令牌时，无法设置 “Copilot 请求” 权限，导致无法使用。
    -   **社区反应**：29 条评论，76 个 👍。社区关注度高，是当前的开放议题之一。
    -   [链接](https://github.com/github/copilot-cli/issues/223)

4.  **[#2082] [OPEN] Linux 系统下 Ctrl+Shift+C 复制功能失效**
    -   **影响场景**：Linux (Ubuntu 24.04) 用户在使用 Copilot CLI TUI 时的复制操作。
    -   **问题范围**：`Ctrl+Shift+C` 是 Linux 终端的标准复制快捷键，但在 Copilot CLI 1.0.4 版本后被破坏。现有复制方式（`Ctrl+C` 或右键）与部分用户习惯冲突。
    -   **社区反应**：21 条评论，8 个 👍。这是一个典型的平台兼容性断崖，影响特定用户群的肌肉记忆。
    -   [链接](https://github.com/github/copilot-cli/issues/2082)

5.  **[#1707] [CLOSED] 第三方 MCP 服务器被错误禁用**
    -   **影响场景**：使用第三方 MCP 服务器扩展 Copilot CLI 功能的用户。
    -   **问题范围**：用户报告在版本 0.0.418 中，即使组织 Copilot 策略未禁止，第三方 MCP 服务器也无法使用。回退到 0.0.417 版本则正常，而 VS Code 中的 Copilot 可以正常访问。
    -   **社区反应**：9 条评论。此问题已被关闭，但今日有相似问题 (#3756) 再次报告，可能为回归 bug。
    -   [链接](https://github.com/github/copilot-cli/issues/1707)

6.  **[#2334] [CLOSED] 用户要求恢复 “无备用屏幕”（no-alt-screen）模式**
    -   **影响场景**：所有使用 Copilot CLI 终端界面的用户。
    -   **问题范围**：新版本强制使用备用屏幕（alt-screen），导致用户无法滚动查看历史输出、无法在终端内搜索文本，严重影响了代码审查等操作场景的可用性。
    -   **社区反应**：7 条评论，28 个 👍。显示出用户对此变更的强烈反弹。
    -   [链接](https://github.com/github/copilot-cli/issues/2334)

7.  **[#2434] [CLOSED] 要求恢复对 Gemini Pro 模型的支持**
    -   **影响场景**：偏好使用 Google Gemini 3 Pro Preview 模型的用户。
    -   **问题范围**：v1.0.14 版本移除了对 `gemini-3-pro-preview` 模型的支持，用户认为多样的模型选择是他们选择 Copilot CLI 而非其他工具的重要原因。
    -   **社区反应**：7 条评论，10 个 👍。代表了对模型多样性的持续需求。
    -   [链接](https://github.com/github/copilot-cli/issues/2434)

8.  **[#3596] [OPEN] 恢复特定会话时出现 “未认证” 错误**
    -   **影响场景**：长时间使用 Copilot CLI 并依赖会话恢复功能的用户。
    -   **问题范围**：用户在恢复一个特定会话后，无法使用 `/model` 命令列出可用模型，并收到 “Error: Not authenticated” 错误，但启动新会话则正常。
    -   **社区反应**：5 条评论，10 个 👍。指出了会话管理中存在的一个潜在认证状态同步问题。
    -   [链接](https://github.com/github/copilot-cli/issues/3596)

9.  **[#3727] [OPEN] v1.0.60 版本中的 Hook 回归问题**
    -   **影响场景**：使用 Copilot CLI 插件系统（Hooks）注入额外上下文的高级用户。
    -   **问题范围**：用户报告在升级到 v1.0.60 后，自定义的 `userPromptSubmitted` Hook 无法再向规划器注入 `additionalContext`。降级到 v1.0.59 后恢复正常，确定为回归 bug。
    -   **社区反应**：3 条评论。这是一个影响插件生态系统的具体技术问题。
    -   [链接](https://github.com/github/copilot-cli/issues/3727)

10. **[#3749] [OPEN] 终端流式渲染输出乱码**
    -   **影响场景**：所有启用流式输出的用户，特别是在思考/推理阶段的输出。
    -   **问题范围**：终端渲染器在处理流式输出时，出现字符重复、截断、重叠等问题，严重影响阅读体验。
    -   **社区反应**：2 条评论，2 个 👍。这是一个相对较新的 bug，可能影响范围较大。
    -   [链接](https://github.com/github/copilot-cli/issues/3749)

## 功能需求归类

从近期 Issue 可以归纳出几个明确的用户诉求方向：

1.  **模型支持扩展**：社区持续要求增加对更多模型的可用性支持，尤其是 Google 的 Gemini 系列。当前的主要矛盾在于，VS Code Copilot 可用的模型（如 Gemini 3.1 Pro）在 CLI 中或缺失、或被移除，用户期望两者体验对齐。
2.  **终端交互体验与平台兼容性**：
    -   **键盘快捷键**：Linux (`Ctrl+Shift+C`) 和 Windows (`Ctrl+C`) 的复制功能存在问题。
    -   **终端渲染**：备用屏幕 (alt-screen) 模式的强制引入被部分用户视为体验降级。流式渲染乱码 (#3749) 是新出现的严重稳定性问题。
3.  **企业级功能完善**：
    -   **权限管理**：企业用户对于组织级细粒度令牌、策略控制的透明度和一致性有更高要求。
    -   **MCP 服务器策略**：第三方 MCP 服务器被策略错误拦截的问题反复出现，相关政策判断逻辑的稳定性和透明度需要提升。
4.  **系统稳定性与回归**：多个 Issue (#3727, #3749) 指向了特定版本的回归问题，表明新功能引入时对其他模块的兼容性测试可能需要加强。

## 开发者关注点

-   **反馈循环缺失**：社区最热的 Issue (#53) 长期未获官方回复，引发了用户的不满和社区自建替代方案的行为。开发者核心痛点在于反馈渠道不透明，担心投入时间适应新版本后，体验被无预警地破坏。
-   **模型选择权**：用户明确表达，多样化的模型选择是他们选择 Copilot CLI 的重要原因。任何模型支持的增减都应谨慎行事并充分沟通。
-   **终端是核心战场**：CLI 的终端交互体验对于日常开发者至关重要。快捷键、历史记录、复制粘贴等基础功能的稳定性与平台一致性是开发者高效工作的前提，任何在这方面的断崖都会严重影响使用体验。
-   **企业环境是刚需**：企业用户对安全性、可审计性和策略一致性有严格要求。MCP 服务器的策略误判和令牌权限缺失是其采用 Copilot CLI 的主要障碍。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-06-11

## 今日更新概览
过去 24 小时内无新版本发布，但有 3 个 Issue 处于活跃更新状态，其中 2 个为当天新提交的 bug 报告。Pull Request 方面共有 23 个 PR 获得更新，其中大部分为已合并的 bug 修复，另有 3 个来自社区贡献者的开放 PR 正在推进。

---

## 社区热点 Issues

由于当日仅有 3 个活跃 Issue，以下全部列出：

### #2448 [BUG] Yolo 模式下仍要求用户批准
- **作者**: @iaindooley
- **版本**: v0.12.0，k2.6 模型，Debian 系统
- **问题**: 已启用 yolo 模式（无自动批准？），但 CLI 持续弹出批准提示。
- **状态**: Open，无评论，无 👍
- **链接**: [Issue #2448](https://github.com/MoonshotAI/kimi-cli/issues/2448)

### #2447 [BUG] 最终 Todo 项永不完成
- **作者**: @iaindooley
- **版本**: v0.12.0，k2.6 模型，Debian 系统
- **问题**: Agent 使用“...”工具（推测是 shell 或 todo 工具）时，最后一个待办项始终无法标记完成，导致任务卡住。
- **状态**: Open，无评论，无 👍
- **链接**: [Issue #2447](https://github.com/MoonshotAI/kimi-cli/issues/2447)

### #2173 [ENHANCEMENT] 标题只有一个感叹号（已关闭）
- **作者**: @odellus
- **行为**: 该 Issue 于 2026-05-07 创建，仅含标题“!”，无正文。
- **状态**: 已关闭，更新时间 2026-06-10。
- **链接**: [Issue #2173](https://github.com/MoonshotAI/kimi-cli/issues/2173)

> 注：由于 Issue 数量极少，上述三个均为当日值得记录的条目。

---

## 重要 PR 进展（10 条）

### #2387 [OPEN] fix(tools): 保留 shell 命令标题的细节
- **作者**: @Pluviobyte
- **内容**: 解决长 shell 命令在终端中被截断的问题（原 `shorten_middle(width=50)` 导致关键信息丢失），改进 UI 显示。
- **链接**: [PR #2387](https://github.com/MoonshotAI/kimi-cli/pull/2387)

### #2383 [OPEN] fix(soul): 修复回放历史时出现孤立 tool_calls
- **作者**: @Pluviobyte
- **内容**: 当对话在中间被强制终止（如 OOM、kill -9）时，持久化的 `context.jsonl` 可能包含 orphan tool_calls，导致后续请求被拒绝。
- **链接**: [PR #2383](https://github.com/MoonshotAI/kimi-cli/pull/2383)

### #2386 [OPEN] fix(session): 修复 undo 操作中 wire turns 与 context turns 的映射
- **作者**: @Pluviobyte
- **内容**: `/undo` 和 fork 操作错误地用 `wire.jsonl` 的索引来截断 `context.jsonl`，导致本地 slash 命令（如 `/compact`）产生的 turn 被错误处理。
- **链接**: [PR #2386](https://github.com/MoonshotAI/kimi-cli/pull/2386)

### #2355 [CLOSED] fix: 延迟的 MCP 启动失败后继续运行
- **作者**: @he-yufeng
- **内容**: 延迟初始化的 MCP 服务器启动失败不再终止交互轮，而是记录日志并跳过不可用的 MCP 服务器。
- **链接**: [PR #2355](https://github.com/MoonshotAI/kimi-cli/pull/2355)

### #2354 [CLOSED] fix: Windows 上避免共享滚动日志文件冲突
- **作者**: @he-yufeng
- **内容**: Windows 平台改为使用 `kimi.<pid>.log` 的进程独立日志文件，防止 CLI/Web/Worker 并发轮转同一个 `kimi.log`。
- **链接**: [PR #2354](https://github.com/MoonshotAI/kimi-cli/pull/2354)

### #2327 [CLOSED] fix: 超时时终止 shell 进程树
- **作者**: @he-yufeng
- **内容**: 在超时或取消时，将前台 shell 命令放入独立进程组并终止整个进程树，避免残留子进程。
- **链接**: [PR #2327](https://github.com/MoonshotAI/kimi-cli/pull/2327)

### #2289 [CLOSED] fix: 避免 Windows 控制台字体重置
- **作者**: @he-yufeng
- **内容**: 在 Windows 上创建子进程时传递 `CREATE_NO_WINDOW` 标志，防止 Kaos 本地执行弹出新的控制台窗口。
- **链接**: [PR #2289](https://github.com/MoonshotAI/kimi-cli/pull/2289)

### #2288 [CLOSED] fix: 避免重启后重新发送 web 上传
- **作者**: @he-yufeng
- **内容**: 持久化上传标记（`.sent`），在进程重启后不再将已发送的上传文件附加到纯文本提示中。
- **链接**: [PR #2288](https://github.com/MoonshotAI/kimi-cli/pull/2288)

### #2211 [CLOSED] fix(web): 将 afk 模式传播给 worker
- **作者**: @he-yufeng
- **内容**: 使 `kimi --afk web` 开启的 Web 服务器子进程也继承 afk 模式，避免 Web 会话中工具调用仍然要求批准。
- **链接**: [PR #2211](https://github.com/MoonshotAI/kimi-cli/pull/2211)

### #2196 [CLOSED] fix(kosong): 清理历史 tool calls 中的畸形数据
- **作者**: @he-yufeng
- **内容**: 当模型在历史中输出了无效 JSON 的 `function.arguments` 时，在回放时清理这些畸形数据，避免 OpenAI 兼容后端拒绝请求。
- **链接**: [PR #2196](https://github.com/MoonshotAI/kimi-cli/pull/2196)

---

## 功能需求归类
当日 Issue 数量极少，暂无明显的新功能需求集中出现。但从已关闭的 PR 趋势看，近期的修复主要集中在：
- **Windows 兼容性**（日志文件、控制台窗口、字体重置）
- **Yolo 模式 / afk 模式的行为一致性**（#2448 值得关注）
- **会话持久化与恢复**（上传标记、历史工具调用、undo 映射）

---

## 开发者关注点
- **Yolo 模式失效**：#2448 显示在 v0.12.0 中 yolo 模式仍弹批准提示，与预期不符，可能为较严重回归。
- **任务完成性**：#2447 中 Agent 最后一个 Todo 项永不完成，影响自动化工作流完整性。
- **MCP 服务健壮性**：#2355 的修复表明 MCP 启动失败会阻塞交互，社区开发者对此场景敏感。
- **跨平台稳定性**：Windows 用户持续受益于多项底层修复（日志轮转、进程组、控制台窗口）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-11)

## 📋 今日更新概览

OpenCode 于今日发布 v1.17.3 紧急修复版，解决桌面版崩溃问题；社区提交了超过 50 条 Issue 和 PR，围绕模型兼容性、UI 操作改进及性能回归展开集中反馈。开发者活跃度维持高位，多个高赞 feature 与 bugfix 持续得到关注。

## 🚀 版本发布

过去 24 小时内，官方接连发布了 v1.17.0 ~ v1.17.3 四个版本，核心变更如下：

- **v1.17.3**：紧急修复 1.17.2 桌面客户端崩溃问题。
- **v1.17.2**
  - 修复远程配置认证过期后导致配置加载失败的问题（现会提示重新登录）
  - 子代理可重新使用其自身配置的权限
  - 恢复 Linux 桌面启动器与图标身份，修复固定应用失效
- **v1.17.1**
  - 引用（References）支持使用描述、在新文档中展示、可选择从 `@` 自动补全中隐藏
  - 兼容旧版 `reference` 配置项自动迁移至新 `references` 键
  - 修复 MCP 提示与资源请求相关问题
- **v1.17.0**
  - 文件搜索改用 `fff` 后端，大型项目搜索显著加速
  - 新增 `X-Session-Id` 请求头，支持代理粘性路由
  - 新增 Cohere North 模型支持
  - 允许在 `reasoning` 字段中插入交错内容

## 🔥 社区热点 Issues

以下挑选 10 条在今日影响较大、社区讨论活跃的 Issue：

1. **#906 – 粘贴图片支持**
   [@Jawkx](https://github.com/Jawkx) 提出当前仅支持拖拽添加图片，期望能直接粘贴 PNG 到输入框。👍22，评论 36 条，持续近一年未闭。
   → https://github.com/anomalyco/opencode/issues/906

2. **#14273 – 使用 Zen 免费模型时误报“额度超限”**
   [@joaomj](https://github.com/joaomj) 反映使用 Kimi K2.5 / MiniMax2.5 免费版本时，即使 Zen 账户有余额仍被拦截。已于今日关闭（疑似已修复），但引发对免费额度逻辑的讨论。
   → https://github.com/anomalyco/opencode/issues/14273

3. **#6330 – 通用 UI 意图通道**
   [@malhashemi](https://github.com/malhashemi) 提议增加服务端-客户端协议中的“UI intent”事件类型，使插件可驱动跨客户端 UI 行为。👍8，属于插件扩展方向的基础设施需求。
   → https://github.com/anomalyco/opencode/issues/6330

4. **#450 – 在 UI 中支持 reasoning_effort 参数**
   [@unkn0wncode](https://github.com/unkn0wncode) 要求为支持 `reasoning_effort` 的模型（OpenAI、Gemini、DeepSeek 等）增加 UI 配置项。👍26，评论 12 条，已于今日关闭（推测已实现或被拒绝）。
   → https://github.com/anomalyco/opencode/issues/450

5. **#25038 – 长时 Shell 命令（如 Gradle 构建）完成后进程仍然挂起**
   [@universe-st](https://github.com/universe-st) 报告即使控制台输出“BUILD SUCCESSFUL”，OpenCode 仍会卡住不响应。影响 CI/本地构建场景。
   → https://github.com/anomalyco/opencode/issues/25038

6. **#26762 – Cerebras zai-glm-4.7 多轮交互时报错**
   [@ryanl-cerebras](https://github.com/ryanl-cerebras) 指出新版本中，该模型在包含 reasoning 和 tool call 的多轮对话中会因 `reasoning_content` 字段不被支持而失败。影响新模型适配。
   → https://github.com/anomalyco/opencode/issues/26762

7. **#6490 – Web UI 无法选择系统盘以外的文件夹**
   [@arnabclir](https://github.com/arnabclir) 在 Windows 上使用 `opencode web` 时，路径选择受限 (只显示 Downloads 等默认文件夹)，无法访问 D 盘等目录。👍12。
   → https://github.com/anomalyco/opencode/issues/6490

8. **#30086 – 新版本 CPU 占用飙升**
   [@DenisSilent](https://github.com/DenisSilent) 报告约一周前更新后，同时运行 3 个会话就导致系统卡顿，之前可开 10+。疑与快照或搜索变更有关。
   → https://github.com/anomalyco/opencode/issues/30086

9. **#31247 – GitHub Copilot 的 Claude Opus 4.8 泄露工具调用文本**
   [@doomsday616](https://github.com/doomsday616) 发现模型会输出 `call read`、`<invoke>` 等原始标记，被当作普通助手消息持久化。影响对话体验。
   → https://github.com/anomalyco/opencode/issues/31247

10. **#26602 – 桌面版对慢速本地 Provider 有 5 分钟硬超时**
    [@osamahaltassan](https://github.com/osamahaltassan) 即使配置中设置了 `"timeout": false`，OpenCode Desktop 仍会在 5 分钟后中断请求，提示“Headers Timeout Error”。
    → https://github.com/anomalyco/opencode/issues/26602

## 🔧 重要 PR 进展

以下挑选 10 个对核心功能、性能或稳定性有实质影响的 PR：

1. **#31822 – 新增 v2 Session API 端点**
   [@thdxr](https://github.com/thdxr) 添加了 `v2` 的 location resolution、session create/get 端点，以及 session 级别待处理问题列表，同时更新 JavaScript SDK。
   → https://github.com/anomalyco/opencode/pull/31822

2. **#31805 – 修复 TUI 退出时结尾信息被清除**
   [@tobwen](https://github.com/tobwen) 解决 sessions 关闭时提前清空 epilogue 导致用户看不到汇总信息的问题。
   → https://github.com/anomalyco/opencode/pull/31805

3. **#31819 – 讯飞云 provider 请求重试 on “engine busy”**
   [@magicxoxcco](https://github.com/magicxoxcco) 在重试列表中增加对 `engine busy` 错误的匹配，避免临时过载时直接失败。
   → https://github.com/anomalyco/opencode/pull/31819

4. **#13610 – 桌面端快捷键切换项目 (Cmd+1-9)**
   [@dl-alexandre](https://github.com/dl-alexandre) 实现类似浏览器标签切换的快捷键，提升多项目管理效率。
   → https://github.com/anomalyco/opencode/pull/13610

5. **#31817 – 修复 `isV1()` 未识别 compaction 配置**
   [@szzhoujiarui-sketch](https://github.com/szzhoujiarui-sketch) 修复仅含 `compaction` 字段的配置被错误归为 V1，导致 `preserve_recent_tokens` 设置丢失。
   → https://github.com/anomalyco/opencode/pull/31817

6. **#31329 – PDF/图像文件读取失败时优雅处理**
   [@zhiyiwang-byte](https://github.com/zhiyiwang-byte) 修复因文件损坏或权限问题导致 session 崩溃的问题，改为提示错误而非崩溃。
   → https://github.com/anomalyco/opencode/pull/31329

7. **#31809 – 修复工具描述中关于 Read 前置条件的误导**
   [@szzhoujiarui-sketch](https://github.com/szzhoujiarui-sketch) 更正 Write/Edit 工具描述中“必须先调用 Read 否则失败”的错误表述。
   → https://github.com/anomalyco/opencode/pull/31809

8. **#31798 – 快照重用 Git 对象，避免在巨大仓库中重复哈希**
   [@dmtrKovalenko](https://github.com/dmtrKovalenko) 优化 `Snapshot.track`，在 chromium 级别仓库（~50万文件）中不再执行 `git add --all`，大幅提升打开 session 速度。
   → https://github.com/anomalyco/opencode/pull/31798

9. **#31745 – 显示内容过滤（content-filter）导致的 finish reason**
   [@kkdawkins](https://github.com/kkdawkins) 当 provider 因内容过滤终止对话时，将错误信息暴露给用户，避免无提示中断。
   → https://github.com/anomalyco/opencode/pull/31745

10. **#29217 – TUI 内联 `$skill` 调用**
    [@jjdubski](https://github.com/jjdubski) 在输入框中输入 `$` 可弹出技能自动补全，并支持粘贴文本触发。关闭 5 个相关 issue。
    → https://github.com/anomalyco/opencode/pull/29217

## 🗂️ 功能需求归类

近期用户反复提出的功能方向（按提及频次排序）：

- **图像/附件支持**：粘贴图片（#906）、question 工具中拖拽/粘贴图片（#31791）
- **UI/UX 改进**：reasoning_effort 可视化配置（#450）、禁止思考模式开关（#24610/#27555）、隐藏状态面板（#24373）、Ctrl+数字切换项目（#13610）
- **模型控制与兼容**：每 session 选择模型（#31750）、禁用 thinking 模式（#24610）、支持新模型（Cerebras #26762、MiniMax 缓存 #31755）
- **GitHub Actions 增强**：编辑已有评论而非新建（#30468）
- **插件与协议扩展**：通用 UI Intent 通道（#6330）、插件 HTTP 服务器保障（#31821）、localhost 自动授权（#31820）
- **性能与资源**：降低 CPU 占用（#30086）、优化快照大小（#16438）、避免 fff 扫描超时（#31747）

## 👥 开发者关注点

- **桌面端稳定性**：v1.17.2 桌面崩溃（v1.17.3 紧急修复）、Linux 启动器丢失身份（已修复）
- **性能回归**：新版本 CPU 飙升、快照文件膨胀至 16GB 导致整体卡顿
- **远程配置/认证问题**：过期 auth 导致配置加载失败（v1.17.2 已修复）、Zen 免费模型误报额度耗尽
- **工具调用异常**：Shell 命令完成后

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，这是 2026-06-11 的 Qwen Code 社区动态日报。

---

## Qwen Code 社区动态日报 | 2026-06-11

### 今日更新概览

过去 24 小时，社区活跃度较高，共有 32 个 Issue 和 50 个 PR 发生更新。主要集中在交互体验（滚动、渲染、键盘）的 Bug 修复、`stats`统计增强与`Memory`自动召回功能优化，以及MCP工具集成的稳定性改进。此外，守护进程（Daemon）模式的多个 PR 正在推进，有望集成到主分支。

### 社区热点 Issues

1.  **VP模式与Composer的滚动冲突**
    -   **[#4942](https://github.com/QwenLM/qwen-code/issues/4942)【Open/Bug】**：用户反馈在 VP（虚拟历史）模式下，当 Composer（编辑器）激活时，无法通过键盘或鼠标滚轮滚动聊天历史。初始视口高度也存在异常。该问题影响高频使用 Composer 的开发者，社区有4条讨论。

2.  **`/stats`命令的跨会话统计需求**
    -   **[#4597](https://github.com/QwenLM/qwen-code/issues/4597)【Closed/Feature】**: 用户提出增强 `/stats` 功能，希望支持跨会话的持久化用量追踪（如 Token、工具调用次数）和交互式仪表盘。当前统计仅在内存中，CLI退出后数据丢失。该诉求获得开发者支持，已关闭（可能已实现或合并）。

3.  **Subagent读取图片返回非预期内容**
    -   **[#4876](https://github.com/QwenLM/qwen-code/issues/4876)【Closed/Bug】**: 用户报告，使用`subagent`通过`read_file`读取图片时，模型返回了与图片完全无关的内容。已确认主代理使用相同模型读取图片可正常工作，此问题为子代理的特定Bug。

4.  **OpenWork无法区分来自不同提供商的重名模型**
    -   **[#4877](https://github.com/QwenLM/qwen-code/issues/4877)【Open/Bug】**: 用户在 `settings.json` 中配置了同一模型ID（如`glm-5`）来自不同供应商时，`OpenWork`无法区分，导致模型选择器出现混淆。此为多模型配置场景下的UI交互问题。

5.  **钩子(Hook)功能新增 `terminalSequence` 字段**
    -   **[#4882](https://github.com/QwenLM/qwen-code/issues/4882)【Open/Feature】**: 开发者提出为钩子的 JSON 输出增加 `terminalSequence` 字段，使其能在无控制终端的情况下发出桌面通知、更新窗口标题等终端副作用。该特性参考了Claude Code的最新实践。

6.  **终端缩放导致流式输出内容碎片化**
    -   **[#4891](https://github.com/QwenLM/qwen-code/issues/4891)【Open/Bug】**: 用户在流式生成过程中调整终端窗口大小，导致回滚查看时，不同宽度的渲染内容（如工具调用边框）交替出现，输出碎片化。该问题影响了macOS和渲染系统的视觉一致性。

7.  **自动生成的Memory干扰正常CLI调用**
    -   **[#4976](https://github.com/QwenLM/qwen-code/issues/4976)【Open/Bug】**: 用户投诉自动生成的 `memory` 记录了错误的工具调用路径，影响之后正常的阅读流程。这反映了自动记忆在上下文准确性方面存在的问题。

8.  **SGR鼠标滚轮序列泄露为输入文本**
    -   **[#4974](https://github.com/QwenLM/qwen-code/issues/4974)【Open/Bug】**: 在启用SGR鼠标追踪时，每次鼠标滚轮事件产生的控制序列（如`64;50;15M`）被双倍消费：一部分用于正确滚动，另一部分作为普通文本泄露到输入框中。

9.  **Hook延续功能在长`/goal`循环中跳过微压缩**
    -   **[#4838](https://github.com/QwenLM/qwen-code/issues/4838)【Closed/Bug】**: 开发者发现，在使用`/goal`指令的长循环中，Hook延续 (`Hook continuations`) 跳过了对工具结果的微压缩 (`microcompactHistory`) 操作，可能导致上下文迅速膨胀，影响性能。

10. **MCP工具调用因数字字符串类型未转换而失败**
    -   **[#4966](https://github.com/QwenLM/qwen-code/issues/4966)【Open/Bug】**: LLM调用MCP工具时，经常将数字参数（如`depth: "3"`）作为字符串发出。严格的MCP服务器会因此拒绝请求。该问题直接影响Playwright等工具的可靠性。

### 重要 PR 进展

1.  **[#4981](https://github.com/QwenLM/qwen-code/pull/4981)【Open/Fix】**: 修复团队成员任务`claim`过程中的并发问题，确保同一代理不会同时被分配两个任务，并对任务存储的邮箱锁进行强化。
2.  **[#4954](https://github.com/QwenLM/qwen-code/pull/4954)【Open/Fix】**: 修复守护进程模式下，`GET /session/:id/stats` API返回进程级全局统计而非会话级指标的问题，确保统计隔离。
3.  **[#4952](https://github.com/QwenLM/qwen-code/pull/4952)【Open/Fix】**: 改进`web-shell`和`webui`的SSE重连稳定性，并添加错误路由处理和Toast API，提升Web端体验。
4.  **[#4894](https://github.com/QwenLM/qwen-code/pull/4894)【Open/Fix】**: 修复当FIFO（命名管道）启动时没有读取者连接导致的阻塞问题，通过非阻塞模式打开并设置1MB缓冲区。
5.  **[#4856](https://github.com/QwenLM/qwen-code/pull/4856)【Open/Feature】**: 为`web-shell`添加任务认证和目标工作流支持，使其能渲染任务状态、认证和目标面板，扩展守护进程工作流能力。
6.  **[#4971](https://github.com/QwenLM/qwen-code/pull/4971)【Open/Fix】**: 减少交互式CLI中产生的大型工具输出数据的内存占用，通过在渲染后压缩显示元数据来降低调度器状态和UI历史的内存消耗。
7.  **[#4980](https://github.com/QwenLM/qwen-code/pull/4980)【Open/Fix】**: 修复Release工作流中因时间依赖和YAML解析器行为差异导致的测试失败，确保持续集成的稳定性。
8.  **[#4902](https://github.com/QwenLM/qwen-code/pull/4902)【Open/Feature】**: 为REST和ACP HTTP层的会话列表接口添加基于游标的分页功能，通过`?cursor=<mtime>&size=<n>`参数实现。
9.  **[#4773](https://github.com/QwenLM/qwen-code/pull/4773)【Open/Feature】**: 合并`daemon_mode_b_main`分支的批量功能，包含守护进程模式的核心功能集，共46个提交，涉及386个文件（+115k行代码）。
10. **[#4841](https://github.com/QwenLM/qwen-code/pull/4841)【Open/Fix】**: 修复在`@path`补全时，按回车键接受建议后下拉菜单未关闭的问题。此改动确保在回车（非Tab）后立即关闭补全下拉框。

### 功能需求归类

-   **统计与监控增强**：用户希望获得跨会话的持久化用量统计（Token、工具调用等），并支持可视化仪表盘，以提升项目管理能力。
-   **记忆系统优化**：用户对自动生成的记忆表示困扰，要求提供更精细的控制能力，例如禁用自动召回，同时保留手动提取和整合功能。
-   **MCP工具集成稳定性**：随着MCP集成增多，社区频繁反馈工具调用时的参数类型匹配、截断恢复等问题，说明模型与工具间的Schema兼容性是当前热点。
-   **CLI交互体验改进**：多个Issue指向了CLI终端的渲染问题，包括滚动冲突、缩放导致碎片化、鼠标事件泄露等，表明提升交互工具的用户体验是当前重要方向。
-   **子代理功能解锁**：社区对子代理的默认启用和权限模式（如`bubble`模式）有明确诉求，希望减少手动编写代理定义的开销，让后台自动化任务更易用。
-   **守护进程模式**：大量PR集中于为守护进程模式增加REST API、WebSocket传输、会话管理、配置热加载等能力，标志着该模式正向稳定化阶段演进。

### 开发者关注点

-   **兼容性与稳定性**：开发者和用户非常关注不同模式（如VP/Composer、Web/CLI）、不同提供商（如相同模型名）以及不同场景（单/多代理）下的功能兼容性和操作稳定性。
-   **上下文与记忆有效性**：`history`和`memory`的智能管理与准确性是开发者的核心痛点。如何避免记忆干扰、如何在不同循环中有效管理上下文、如何在截断后正确恢复，都是亟待解决的问题。
-   **统计与可观测性**：开发者不仅需要`/stats`展示当前会话数据，更希望获得长期、全局的统计视图，以便量化工作成果和分析使用模式。
-   **扩展性与配置灵活性**：用户期望在`settings.json`中拥有更细粒度的配置控制，例如添加`deniedMcpServers`黑名单、控制模型上下文文件的长度警告等，反映了对工具定制化程度的高要求。

</details>