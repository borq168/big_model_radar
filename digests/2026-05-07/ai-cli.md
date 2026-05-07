# AI CLI 工具社区动态日报 2026-05-07

> 生成时间: 2026-05-07 02:04 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)

---

## 横向对比

# AI CLI 工具社区动态横向对比报告

**报告日期**: 2026-05-07

---

## 1. 今日横向概览

今日六款主流 AI CLI 工具均保持更新节奏。Claude Code 发布两个补丁版本修复 Windows VS Code 扩展和 Mantle 端点认证问题；OpenAI Codex 和 Gemini CLI 均以依赖更新为主（Rust 工具链和 V8 引擎）；GitHub Copilot CLI 聚焦 MCP 服务器诊断增强和用户体验优化；Qwen Code 引入 FileReadCache 缓存机制；OpenCode 发布远程配置文件支持。社区层面，权限系统回归、MCP 生态完善、Windows 平台兼容性是跨工具共性议题。

---

## 2. 各工具活跃度对比

| 工具 | Issues 数 | PRs 数 | Releases 数 | 今日版本 |
|------|-----------|--------|-------------|----------|
| Claude Code | 50 | 6 | 2 | v2.1.131, v2.1.132 |
| OpenAI Codex | 50 | 50 | 4 | rusty-v8-v147.4.0, rust-v0.129.0-alpha 系列 |
| Gemini CLI | 50 | 50 | 3 | v0.42.0-preview.2, v0.42.0-nightly, v0.41.2 |
| GitHub Copilot CLI | 50 | 2 | 3 | v1.0.42, v1.0.43-0, v1.0.43 |
| Kimi Code CLI | 11 | 3 | 0 | — |
| OpenCode | 50 | 50 | 1 | v1.14.40 |
| Qwen Code | 30 | 50 | 1 | v0.15.6-nightly.20260507 |

**观察**：OpenAI Codex、Gemini CLI、OpenCode、Qwen Code 的 PR 数量均达到 50 条，显示较高的代码贡献活跃度。Kimi Code CLI 社区规模相对较小，Issues 和 PR 数量显著低于其他工具。

---

## 3. 共同出现的功能方向

### MCP 生态完善
- **Claude Code**: MCP OAuth scope 问题（#7744）、MCP 工具输出渲染（#45839）
- **Kimi Code CLI**: MCP 连接失败容错（#769）、OAuth `client_secret_basic` 支持（#2172）
- **GitHub Copilot CLI**: MCP 服务器子进程未完全终止（#2543）、自定义 MCP 服务器误判（#3162）
- **OpenCode**: MCP 服务器配置生效但未进入工具清单（#21406）

**诉求**：连接容错机制、OAuth 认证完善、子进程生命周期管理

### Windows 平台兼容性
- **Claude Code**: VS Code 扩展激活失败（v2.1.131 修复）、开发者模式文档（#56334）
- **OpenAI Codex**: 桌面应用启动卡死（#20114）、WSL 响应缓慢（#20967）
- **Gemini CLI**: Git Bash 退格键行为（#26189）、PowerShell 路径处理（#25216）
- **Qwen Code**: 代理设置未正确生效（#3883）

**诉求**：终端行为一致性、路径处理、开发者模式支持

### 权限与认证系统
- **Claude Code**: Skills/subagents 权限继承问题（#18950）、PreToolUse 权限决策回归（#51798）
- **GitHub Copilot CLI**: 企业用户访问被 Copilot 策略拒绝（#3101）、Shell 权限简化需求（#2693）
- **OpenCode**: GitHub Enterprise 授权问题（#3936）

**诉求**：用户级权限持久化、企业策略一致性、权限决策可预测性

### AGENTS.md / 全局配置支持
- **Claude Code**: AGENTS.md 支持请求（#31005，154👍）
- **Kimi Code CLI**: 全局 `~/.kimi/AGENTS.md` 支持（#2152）
- **Qwen Code**: `QWEN_HOME` 自定义配置目录（#2953）

**诉求**：跨项目共享约定文件、自定义配置路径

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级 AI 编程助手 | 深度开发团队 | 强调权限安全、Sonnet 子代理、hooks 扩展 |
| **OpenAI Codex** | 通用代码智能平台 | 企业与个人开发者 | GPT-5.5 驱动、企业托管功能、跨平台桌面 |
| **Gemini CLI** | Google AI 集成工具 | Google 生态用户 | A2A 协议、Wayland 支持、内存系统重构 |
| **GitHub Copilot CLI** | GitHub 原生 CLI | GitHub 用户、企业 | ACP 协议、MCP 扩展、账户状态显示 |
| **Kimi Code CLI** | 中文 AI 编程工具 | 中文开发者 | RalphFlow 架构、自定义皮肤、Python 优先 |
| **OpenCode** | 开源 AI 代码平台 | 开源社区贡献者 | 插件系统、utilityProcess 隔离、多 provider |
| **Qwen Code** | 通义千问 CLI | 阿里云/通义用户 | 本地模型支持、Agent Team、上下文压缩 |

**观察**：Claude Code 和 OpenAI Codex 侧重企业级功能（权限管理、托管策略），Kimi Code CLI 和 Qwen Code 面向中文开发者社区并强调本地模型支持，Gemini CLI 深度集成 Google 生态，OpenCode 走开源插件生态路线。

---

## 5. 社区活跃度记录

### 高活跃度工具
- **OpenAI Codex**: 50 Issues + 50 PRs，4 个版本发布，企业功能 PR 密集（托管需求、插件市场管理、技能加载控制）
- **Gemini CLI**: 50 Issues + 50 PRs，3 个版本发布，安全修复 PR 突出（SSRF 漏洞、不安全 exec）
- **OpenCode**: 50 Issues + 50 PRs，1 个版本发布，桌面端插件系统和国际化工作并行

### 中等活跃度工具
- **Claude Code**: 50 Issues + 6 PRs，2 个补丁版本，维护者主要聚焦 bug 修复
- **GitHub Copilot CLI**: 50 Issues + 2 PRs，3 个版本发布，用户反馈驱动迭代
- **Qwen Code**: 30 Issues + 50 PRs，1 个 nightly 版本，代码贡献活跃但 Issue 反馈较少

### 低活跃度工具
- **Kimi Code CLI**: 11 Issues + 3 PRs，无版本发布，社区规模相对较小

---

## 6. 有证据支撑的观察

### 观察 1：安全修复优先级提升
Gemini CLI 今日有两个安全相关 PR（SSRF 漏洞 #26615、不安全 exec #26169），GitHub Copilot CLI v1.0.43 明确提及"防护恶意攻击导致的 RCE 风险"。多工具在同一天聚焦安全修复，反映出 AI CLI 工具链在快速迭代中对安全审计流程的重视。

### 观察 2：Windows 平台问题具有共性
Claude Code（VS Code 扩展激活）、OpenAI Codex（启动卡死、WSL 性能）、Gemini CLI（Git Bash 退格键、PowerShell 路径）、Qwen Code（代理设置）均报告 Windows 相关问题。Windows 平台的终端行为差异、路径处理、开发者模式依赖构成跨工具的技术挑战。

### 观察 3：MCP 生态从"能用"向"好用"演进
Claude Code（OAuth scope）、Kimi Code CLI（连接容错、client_secret_basic）、GitHub Copilot CLI（子进程管理、注册表验证）均报告 MCP 相关问题。社区反馈显示 MCP 协议的基础连接能力已具备，但认证灵活性、错误处理、生命周期管理仍需完善。

### 观察 4：企业级功能差异化推进
OpenAI Codex 的托管需求、插件市场管理、技能加载控制 PR 密集推进；Claude Code 的权限系统回归问题引发社区广泛关注；GitHub Copilot CLI 的企业用户策略拒绝问题持续。三个工具在企业场景的投入方向不同，但均反映出对组织级部署需求的重视。

### 观察 5：配置持久化是跨工具痛点
Claude Code（权限设置不继承）、GitHub Copilot CLI（速度设置重置）、Qwen Code（settings.json 被覆盖）、Gemini CLI（权限设置有时不生效）均报告配置持久化问题。用户期望"配置一次，永久生效"，但当前各工具在配置写入时机、合并策略、格式保留上存在不一致。

---

*本报告基于 2026-05-07 各工具 GitHub 公开数据生成，仅记录事实性内容。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code 社区动态日报

**日期**: 2026-05-07
**数据来源**: github.com/anthropics/claude-code

---

## 1. 今日更新概览

今日 Claude Code 发布了 v2.1.131 和 v2.1.132 两个补丁版本，主要修复了 Windows VS Code 扩展激活问题和 Mantle 端点认证问题，并新增了两个环境变量（会话 ID 和全屏渲染控制）。社区方面共 50 条 Issues 更新，6 条 Pull Requests 更新，热度集中在会话成本异常、权限系统回归和 RTL 语言支持三个方向。

---

## 2. 版本发布

### v2.1.132
**发布时间**: 2026-05-07
**更新内容**:
- 新增 `CLAUDE_CODE_SESSION_ID` 环境变量，传递给 Bash 工具子进程，与 hooks 中的 `session_id` 保持一致
- 新增 `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` 环境变量，可选择退出全屏交替屏幕渲染模式

**链接**: https://github.com/anthropics/claude-code/releases/tag/v2.1.132

### v2.1.131
**发布时间**: 2026-05-06
**更新内容**:
- 修复 VS Code 扩展在 Windows 上激活失败的问题（bundled SDK 中 `createRequire` polyfill 路径硬编码 bug）
- 修复 Mantle 端点认证失败问题（缺少 `x-api-key` 请求头）

**链接**: https://github.com/anthropics/claude-code/releases/tag/v2.1.131

---

## 3. 社区热点 Issues

### 🔥 #55053 | 会话窗口消耗异常（34 条评论）
**标签**: `[bug, area:cost]`
**作者**: DEF29 | **👍**: 12
**问题**: 自 4 月 29 日晚间起，5 小时会话窗口消耗速度比之前快 5-10 倍。轻度编辑任务（少量 scp、Read、小补丁）在不到一小时内消耗约 20-25% 的会话窗口。Sonnet 子代理启动后消耗尤为严重。
**链接**: https://github.com/anthropics/claude-code/issues/55053

---

### 🔥 #26408 | 模型选择问题（25 条评论）
**标签**: `[bug]`
**作者**: nibblesnbits | **👍**: 9
**问题**: claude-sonnet-4-6 模型存在使用问题，用户反馈在 preflight 检查通过后仍遇到异常。
**链接**: https://github.com/anthropics/claude-code/issues/26408

---

### 🔥 #55982 | 升级支付失败（22 条评论）
**标签**: `[invalid]`
**作者**: ssshreyans26 | **👍**: 6
**问题**: 计划升级支付失败，PaymentIntent 在 confirm 完成前立即被 `void_invoice` 作废。
**链接**: https://github.com/anthropics/claude-code/issues/55982

---

### 🔥 #18950 | Skills/subagents 权限继承问题（20 条评论）
**标签**: `[bug, has repro, platform:macos, area:tools, area:core, area:security]`
**作者**: thomast73 | **👍**: 49
**问题**: `~/.claude/settings.json` 中配置的 `permissions.allow` 用户级权限未被 Skills/subagents 继承。在 Skill 中执行 bash 命令需要权限提示，但在主对话中相同命令可自动批准。
**链接**: https://github.com/anthropics/claude-code/issues/18950

---

### 🔥 #7744 | MCP OAuth scope 问题（19 条评论）
**标签**: `[bug, has repro, platform:macos, area:auth, area:mcp]`
**作者**: phernandez | **👍**: 29
**问题**: Claude Code MCP 客户端忽略 OAuth 受保护资源元数据中的 `scopes_supported`，导致无法颁发 refresh token。
**链接**: https://github.com/anthropics/claude-code/issues/7744

---

### 🔥 #51798 | 权限决策回归问题（17 条评论）
**标签**: `[bug, has repro, platform:macos, area:bash, area:hooks, regression, area:permissions, area:sandbox]`
**作者**: ww2283 | **👍**: 2
**问题**: 在 2.1.116/2.1.117 中，PreToolUse hook 返回 `permissionDecision: "allow"` 时，Bash 工具调用（`dangerouslyDisableSandbox: true`）仍会弹出"未沙箱化 Bash 命令"确认提示。该行为在 2.1.112 中正常。
**链接**: https://github.com/anthropics/claude-code/issues/51798

---

### 📌 #34235 | AGENTS.md 支持请求（12 条评论）
**标签**: `[duplicate, enhancement, area:core]`
**作者**: nathanjohnpayne | **👍**: 39
**问题**: 请求支持 `AGENTS.md` 作为与 `CLAUDE.md` 并列的原生上下文文件。AGENTS.md 是 Codex 等 AI 编码工具广泛采用的工具无关约定。
**链接**: https://github.com/anthropics/claude-code/issues/34235

---

### 📌 #31005 | AGENTS.md 和 .agents/skills/ 支持（6 条评论）
**标签**: `[duplicate, enhancement, area:core, memory]`
**作者**: kvnwolf | **👍**: 154
**问题**: 社区自 2025 年 8 月起持续请求支持 `AGENTS.md` 和 `.agents/skills/` 目录，这是呼声最高的功能请求之一。
**链接**: https://github.com/anthropics/claude-code/issues/31005

---

### 📌 #56860 | Windows 会话挂起问题（5 条评论）
**标签**: `[bug, has repro, platform:windows, area:tui, area:mcp, area:agents]`
**作者**: larro1991 | **👍**: 0
**问题**: Windows 11 环境下会话无限挂起，thinking 指示器持续旋转。已确认 3 种变体（包括 /btw MCP teardown）。
**链接**: https://github.com/anthropics/claude-code/issues/56860

---

### 📌 #56865 | Web 版本自动提交推送（3 条评论）
**标签**: `[bug, area:claude-code-web, platform:web]`
**作者**: fcsouza | **👍**: 0
**问题**: Claude Code Web 版本自动提交和推送，task-agent 系统提示硬编码了 commit/push 指令，覆盖了 CLAUDE.md 配置。
**链接**: https://github.com/anthropics/claude-code/issues/56865

---

## 4. 重要 PR 进展

### 📝 #56334 | Windows 开发者模式文档
**作者**: EnjouZeratul
**状态**: OPEN
**内容**: 添加 Windows 用户需要启用开发者模式才能支持符号链接的说明。Issue #55263 报告了未启用开发者模式时后台代理输出显示"0 tokens"且无错误提示的问题。
**链接**: https://github.com/anthropics/claude-code/pull/56334

---

### 📝 #49596 | GitHub API 客户端重构
**作者**: bsene
**状态**: OPEN
**内容**: 将共享 GitHub API 客户端提取为独立 `github-api.ts` 模块并添加测试。
**链接**: https://github.com/anthropics/claude-code/pull/49596

---

### 📝 #56784 | GitHub Actions SHA 固定
**作者**: jportner-ant
**状态**: OPEN
**内容**: 将第三方 GitHub Actions 引用固定到不可变的提交 SHA，提升供应链安全性。
**链接**: https://github.com/anthropics/claude-code/pull/56784

---

### 📝 #56621 | 防火墙规则重复检查
**作者**: respawned86
**状态**: OPEN
**内容**: 修复 init-firewall.sh 脚本设置重复防火墙规则导致失败的问题，添加规则存在性检查。
**链接**: https://github.com/anthropics/claude-code/pull/56621

---

### ✅ #20824 | CLAUDE.md 文档添加
**作者**: cnewcomb-tu
**状态**: CLOSED
**内容**: 添加 `CLAUDE.md` 综合指南文档，包含项目结构、插件系统、开发工作流和最佳实践。
**链接**: https://github.com/anthropics/claude-code/pull/20824

---

### ✅ #42162 | hookify 插件相对导入修复
**作者**: lcainger
**状态**: CLOSED
**内容**: 修复 hookify 插件通过插件缓存安装时因缺少相对导入导致无法工作的问题。
**链接**: https://github.com/anthropics/claude-code/pull/42162

---

## 5. 功能需求归类

基于今日 Issues 整理，用户反复提到的功能方向如下：

### RTL 语言支持
多个 Issue 反映 Claude Code 对希伯来语、阿拉伯语等从右到左语言的支持不足，包括：
- #38005、#45906、#49611、#56266、#50711、#41544
- 涉及 TUI、Desktop App、VS Code 扩展等多个界面

### AGENTS.md 和 .agents/skills/ 支持
- #34235、#31005
- 社区自 2025 年 8 月起持续请求，#31005 获得 154 个 👍

### MCP 相关功能
- MCP OAuth scope 处理（#7744、#55954）
- MCP 工具输出渲染（#45839、#56874）
- MCP 会话挂起（#56860）

### 权限和认证系统
- 用户级权限继承（#18950）
- PreToolUse 权限决策回归（#51798）
- Enterprise 账户使用限制（#56828）

### IDE 集成
- VS Code 扩展功能（#56516、#41544）
- Chrome 扩展多设备连接（#56878）

---

## 6. 开发者关注点

### ⚠️ 会话成本异常
Issue #55053 引发广泛关注，多名用户报告自 4 月 29 日起会话窗口消耗速度异常。该问题影响所有用户且消耗速度提升 5-10 倍，是当前社区最紧迫的问题。

### ⚠️ 权限系统回归
多个 Issue 反映权限系统存在问题：
- #51798 报告 PreToolUse hook 权限决策在 2.1.116+ 版本后失效
- #18950 报告 Skills/subagents 不继承用户级权限配置

### ⚠️ MCP OAuth 认证
- #7744 和 #55954 均反映 MCP OAuth scope 处理问题
- 影响 GitLab 自托管等场景下的 refresh token 获取

### 📌 Web 版本行为
- #56865 报告 Web 版本自动提交推送行为覆盖 CLAUDE.md 配置
- 开发者需注意 Web 版本与 CLI 版本的差异

### 📌 Windows 平台问题
- #56860 会话挂起问题（3 种变体）
- #56516 VS Code 命令未找到（已关闭为重复）
- 建议 Windows 用户关注 #56334 文档中的开发者模式说明

---

*本日报基于 2026-05-07 GitHub 公开数据生成，仅记录事实性内容。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-05-07
**数据来源**: github.com/openai/codex

---

## 1. 今日更新概览

今日 Codex 仓库共有 4 个新版本发布，均为 Rust 相关依赖更新（rusty-v8-v147.4.0、rust-v0.129.0-alpha 系列）。社区活跃度较高，过去 24 小时内更新了 50 条 Issues 和 50 条 Pull Requests。热点议题集中在 GPT-5.5 上下文扩展、VS Code 集成优化、Windows 平台稳定性及企业级管理功能等方面。

---

## 2. 版本发布

| 版本号 | 类型 | 说明 |
|--------|------|------|
| `rusty-v8-v147.4.0` | 依赖更新 | V8 JavaScript 引擎 Rust 绑定更新 |
| `rust-v0.129.0-alpha.9` | 预发布版 | Rust 工具链预览版本 |
| `rust-v0.129.0-alpha.10` | 预发布版 | Rust 工具链预览版本 |
| `rust-v0.129.0-alpha.12` | 预发布版 | Rust 工具链预览版本 |

> 注：本次发布主要涉及底层依赖迭代，未包含用户面向的功能变更。

---

## 3. 社区热点 Issues

### 🔥 #19464 - GPT-5.5 上下文窗口扩展请求
- **作者**: @umikato | 评论: 132 | 👍: 167
- **内容**: 用户请求在 Codex 中为 GPT-5.5 启用 1M token 上下文窗口，当前文档标注上限为 400K。
- **影响**: 大型代码库分析、长对话场景
- **链接**: https://github.com/openai/codex/issues/19464

### 🔥 #20161 - 手机号验证失效
- **作者**: @Sistem-Pack | 评论: 94 | 👍: 71
- **内容**: 跨设备登录时强制要求手机号验证，但用户未在账户中绑定手机。
- **影响**: 认证流程、跨设备使用体验
- **链接**: https://github.com/openai/codex/issues/20161

### 💬 #2153 - ChatGPT 集成需求
- **作者**: @aehlke | 评论: 33 | 👍: 127
- **内容**: 希望能在 Codex 和 ChatGPT 之间无缝迁移会话，结合 Web 搜索等功能。
- **影响**: 多工具协作、工作流整合
- **链接**: https://github.com/openai/codex/issues/2153

### 💬 #3550 - VS Code 项目级会话隔离
- **作者**: @majid4466 | 评论: 22 | 👍: 58
- **内容**: 建议按 VS Code 工作区隔离 Codex 聊天列表，避免跨项目会话混杂。
- **影响**: VS Code 扩展用户体验、项目管理
- **链接**: https://github.com/openai/codex/issues/3550

### 🐛 #19558 - GPT-5.5 远程上下文压缩失败
- **作者**: @DreamZzz | 评论: 17 | 👍: 10
- **内容**: Codex Desktop 在 GPT-5.5 下自动远程上下文压缩失败，导致线程不可用。
- **影响**: Codex Desktop 稳定性、GPT-5.5 使用
- **链接**: https://github.com/openai/codex/issues/19558

### 🛠️ #5547 - /review 命令可配置化
- **作者**: @guidedways | 评论: 15 | 👍: 58
- **内容**: 希望 `/review` 命令支持指定返回问题数量。
- **影响**: 代码审查功能灵活性
- **链接**: https://github.com/openai/codex/issues/5547

### 🐛 #20740 - 内存膨胀至 75GB+
- **作者**: @evilfps | 评论: 4 | 👍: 0
- **内容**: 基础会话中内存占用异常增长，触发 macOS 内存耗尽警告。
- **影响**: macOS 平台稳定性、资源占用
- **链接**: https://github.com/openai/codex/issues/20740

### 🐛 #20162 - 速度设置在 VS Code 重启后重置
- **作者**: @shurkanTwo | 评论: 11 | 👍: 7
- **内容**: VS Code 重启后 Codex 速度设置恢复为 Fast，且设置页打开时无法修改。
- **影响**: VS Code 扩展配置持久化
- **链接**: https://github.com/openai/codex/issues/20162

### 🐛 #19903 - macOS 端 git add 扫描整个主目录
- **作者**: @iamtoruk | 评论: 2 | 👍: 0
- **内容**: macOS 版 Codex Desktop 触发 `git add` 进程扫描整个 home 目录，CPU 占用 100%。
- **影响**: macOS 平台性能、系统资源
- **链接**: https://github.com/openai/codex/issues/19903

### 🐛 #21453 - Windows VS Code 扩展绕过只读配置
- **作者**: @DrDonGoodeve | 评论: 2 | 👍: 0
- **内容**: Windows 上 VS Code 扩展在只读/按需审批配置下仍会直接写入文件。
- **影响**: Windows 平台安全配置、企业合规
- **链接**: https://github.com/openai/codex/issues/21453

---

## 4. 重要 PR 进展

| PR # | 标题 | 类型 | 说明 |
|------|------|------|------|
| #21454 | Remove string-keyed MCP tool maps | 重构 | 移除 MCP 工具发现中的字符串键映射，改用规范化的 `Vec<ToolInfo>` |
| #21461 | Move tool specs onto handlers | 重构 | 将工具规格定义移至处理器本身，统一注册表行为和工具定义来源 |
| #21108 | feat(app-server): add managed remote file uploads | 功能 | 新增服务端远程文件上传暂存能力，支持客户端路径到远程主机的映射 |
| #21109 | feat(tui): add local file upload command | 功能 | TUI 新增 `/upload <local-path>` 命令，支持本地文件流式上传至远程 |
| #21456 | feat(cli): add Linux desktop app launcher | 功能 | 为 Linux 添加 `codex app` 命令，补全跨平台桌面启动能力 |
| #21061 | feat(connectors): support managed app tool approval requirements | 企业功能 | 支持通过 `requirements.toml` 集中管理连接器工具审批规则 |
| #21458 | feat: enforce managed plugin allowlists | 企业功能 | 强制执行插件市场准入策略，禁用不合规市场 |
| #21457 | feat: enforce managed skill requirements | 企业功能 | 限制技能加载源，防止企业策略被本地/仓库级配置绕过 |
| #20252 | feat(tui): render responsive Markdown tables in TUI | 功能 | TUI 支持响应式 Markdown 表格渲染，终端 resize 时自动重排 |
| #21450 | fix(tui): clear first inline viewport render | 修复 | 修复 TUI 首次渲染时旧终端文本残留问题 |

> 其他值得关注的 PR：#21413（托管制品需求 schema）、#21414（暴露托管制品需求）、#21459（强制插件入口点管理）、#21447（插件详情页展示钩子）、#18868（MITM 钩子配置模型）

---

## 5. 功能需求归类

根据 Issues 反馈，社区功能需求主要集中在以下方向：

### IDE 集成
- 按 VS Code 项目/工作区隔离会话列表（#3550）
- 速度设置持久化问题（#20162）
- 窗口标题显示当前项目/会话名（#12311）

### 平台稳定性
- **Windows**: 桌面应用启动卡死（#20114）、WSL 响应缓慢（#20967）、Slack 安装卡顿（#20526）
- **macOS**: git add 扫描整个 home 目录（#19903）、PTY 泄漏（#17133）、内存膨胀（#20740）

### 模型与上下文
- GPT-5.5 1M token 上下文支持（#19464）
- GPT-5.5 远程上下文压缩失败（#19558）

### CLI / TUI 增强
- `/review` 命令可配置问题数量（#5547）
- `--worktree` 和 `--tmux` 隔离会话标志（#12862）
- Vim 内词文本对象支持（#21383）
- TUI 状态栏显示上下文/token 使用（#21324）

### 企业管理
- 托管插件/技能/制品需求强制执行（#21457、#21458、#21414）
- MCP 服务器配置生效但未进入工具清单（#21406）

---

## 6. 开发者关注点

### 高频痛点

1. **平台兼容性问题突出**
   - Windows 平台问题占比较高（启动卡死、WSL 性能、文件写入绕过配置）
   - macOS 存在资源管理缺陷（内存泄漏、git 进程异常）

2. **配置持久化失效**
   - VS Code 扩展速度设置重启后重置
   - Windows 只读配置被绕过

3. **GPT-5.5 稳定性待提升**
   - 远程上下文压缩机制存在失败路径
   - 用户对更大上下文窗口有明确需求

4. **企业功能快速迭代**
   - 多个 PR 并行推进托管需求、插件市场管理、技能加载控制
   - 体现了企业级部署场景的合规性需求

5. **TUI 功能完善中**
   - Markdown 表格渲染、状态栏信息、文件上传等用户侧功能持续补全

---

*本日报基于 2026-05-07 GitHub 公开数据生成，仅记录事实性信息。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-05-07

---

## 1. 今日更新概览

今日 Gemini CLI 仓库共发布 3 个版本（v0.42.0-preview.2、v0.42.0-nightly.20260506、v0.41.2），主要聚焦于 bug 修复和稳定性改进。新增 50 条 Issues 和 50 条 PRs，其中安全修复（SSRF 漏洞、不安全 exec 调用）和 Windows 兼容性改进成为开发者关注焦点。

---

## 2. 版本发布

### v0.42.0-nightly.20260506.g80d269054
**主要修复**:
- 修复 A2A 服务器工具批准竞态条件，改善状态报告
- 修复 CLI 设置对话框边框裁剪问题（使用 maxHeight）

[查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260506.g80d269054)

### v0.42.0-preview.2
**主要修复**:
- Cherry-pick 修复补丁到 release/v0.42.0-preview.1

[查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-preview.2)

### v0.41.2
**主要修复**:
- Cherry-pick 修复补丁到 release/v0.41.1

[查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.2)

---

## 3. 社区热点 Issues

### #21925 | 手势图标误报"需要操作"
**评论**: 16 | **优先级**: - | **区域**: core
Gemini CLI 在 shell 脚本长时间运行时错误显示需要操作的手势图标，即使实际上不需要用户交互。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/21925)

### #24916 | 相同文件重复请求权限
**评论**: 3 | **优先级**: - | **区域**: security
用户反馈权限设置（"allow" 或 "allow for all future sessions"）有时不生效，导致同一文件反复弹出权限请求。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/24916)

### #25166 | Shell 命令完成后卡在"等待输入"
**评论**: 2 | **点赞**: 3 | **优先级**: P2 | **区域**: core
简单的 CLI 命令执行完成后，界面仍显示"等待用户输入"并挂起，即使命令已结束且不需任何交互。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/25166)

### #21983 | 浏览器子代理在 Wayland 环境失败
**评论**: 3 | **优先级**: P1 | **区域**: agent
浏览器代理在 Wayland 环境下无法正常工作，报告 GOAL 完成但实际任务未执行。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/21983)

### #26563 | 工具 "save_memory" 未找到
**评论**: 2 | **优先级**: P2
在 v0.41.1 版本执行 `/memory add` 命令时返回 "Tool save_memory not found" 错误。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/26563)

### #23571 | 模型在随机位置创建临时脚本
**评论**: 2 | **优先级**: P2 | **区域**: agent
通过排除限制模型只能执行 shell 时，模型会在多个目录生成临时编辑脚本，造成提交清理负担。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/23571)

### #22267 | 浏览器代理忽略 settings.json 覆盖
**评论**: 2 | **优先级**: P2 | **区域**: agent
浏览器代理完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 maxTurns）。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/22267)

### #25216 | 临时路径 A:\ 打开失败
**评论**: 1 | **区域**: core
在 Windows PowerShell 中使用 `--yolo` 模式时遇到 `EISDIR: illegal operation on a directory` 错误。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/25216)

### #24246 | 超过 128 个工具时返回 400 错误
**评论**: 1 | **区域**: agent
当可用工具超过 400 个时，Gemini CLI 遇到 400 HTTP 错误。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/24246)

### #24202 | SSH 环境下文本显示混乱
**评论**: 1 | **区域**: core
从 Windows 笔记本通过 SSH 连接到 gLinux cloudtop 后，Gemini CLI 文本显示混乱无法使用。
[查看详情](https://github.com/google-gemini/gemini-cli/issues/24202)

---

## 4. 重要 PR 进展

### #26615 | 修复 web-fetch 工具 SSRF 漏洞
**状态**: OPEN | **区域**: core | **安全相关**
修复 `web-fetch` 工具中的服务器端请求伪造（SSRF）漏洞。问题在于 `fetchWithTimeout` 未设置 `redirect: 'manual'`，导致 Node.js 自动跟随重定向，攻击者可控服务器可绕过私有 IP 封锁。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26615)

### #26169 | 移除 app.ts 中不安全的 exec()
**状态**: OPEN | **安全相关**
修复 `packages/a2a-server/src/http/app.ts` 中的关键安全漏洞，移除不安全的 `exec()` 调用。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26169)

### #26618 | 添加 /fork 会话分支命令
**状态**: OPEN | **区域**: core | **功能新增**
实现 `/fork` 斜杠命令，可对当前会话创建快照并分配新 ID，支持两个终端从同一起点独立恢复，避免 `gemini --resume` 的静默写覆盖问题。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26618)

### #26189 | 修复 Windows Bash 退格键行为
**状态**: OPEN | **状态标签**: pr-nudge-sent
修复 Windows 终端（Git Bash、MSYS2）中退格键错误触发 DELETE_WORD_BACKWARD 的问题。问题源于 ESC + DEL 序列被错误处理。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26189)

### #26609 | 修复 whisper 模型转录文本显示
**状态**: OPEN | **区域**: core
修复 whisper 模型转录文本在释放空格键后不显示的问题，通过延长转录排空宽限期解决。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26609)

### #26594 | 实现 GC backstop 宽松边界策略
**状态**: OPEN
修复上下文管理器中罕见的潜在反馈循环，并添加日志以追踪令牌计算不准确问题。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26594)

### #26529 | 正式化工具生命周期状态
**状态**: OPEN | **区域**: agent
在 AgentProtocol 事件类型中正式定义第一类工具生命周期状态，重构终端 UI 渲染管道以消费这些顶级状态属性。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26529)

### #26548 | 缓存 LocalAgentExecutor 模型路由决策
**状态**: OPEN | **区域**: core, agent
修复当模型设置为 `auto` 时每个回合重复调用 `ModelRouterService.route()` 的问题，在子代理会话期间缓存路由决策。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26548)

### #26605 | memoryV2 启用时隐藏 /memory add
**状态**: OPEN | **优先级**: P2
当 `experimental.memoryV2` 启用时隐藏 `/memory add` 斜杠子命令，因为 v2 不注册 `save_memory` 工具。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26605)

### #26603 | 修复 CI 工作流参数过长错误
**状态**: CLOSED | **区域**: platform
修复 `Gemini Scheduled Issue Triage` 和 `Gemini Automated Issue Triage` 工作流中的 "Argument list too long" 错误。
[查看 PR](https://github.com/google-gemini/gemini-cli/pull/26603)

---

## 5. 功能需求归类

基于今日 Issues 统计，功能需求主要集中在以下方向：

| 类别 | 相关 Issue | 描述 |
|------|-----------|------|
| **权限管理** | #24916 | 用户期望权限设置持久化，避免重复授权 |
| **Shell 交互** | #25166, #24202 | 命令执行状态反馈、终端兼容性 |
| **浏览器代理** | #21983, #22267 | Wayland 支持、配置覆盖失效 |
| **内存系统** | #26563, #26525, #26523, #26522, #26516 | Auto Memory 多个子问题（重试逻辑、补丁验证、日志脱敏） |
| **工具调用** | #24246, #24943 | 工具数量限制、并行调用布局 |
| **UI/UX** | #22203, #22816, #25218 | 命名规范、依赖树显示、表格流式渲染 |
| **子代理能力** | #21968, #22323 | 技能调用主动性、MAX_TURNS 恢复 |

---

## 6. 开发者关注点

1. **安全修复优先级提升**: 今日有两个安全相关 PR（SSRF 漏洞 #26615、不安全 exec #26169）提交，开发者需关注依赖更新和安全审计流程。

2. **Windows 兼容性仍需改进**: 涉及 Git Bash 退格键（#26189）、PowerShell 路径处理（#25216）、SSH 文本显示（#24202）等问题。

3. **内存系统重构中**: 多个维护者专用 Issue 聚焦 Auto Memory 的质量改进，预计 v0.42 版本将有较大变动。

4. **工具生态扩展**: `/fork` 会话分支命令（#26618）和模型路由缓存（#26548）反映了开发者对多会话管理和性能优化的需求。

---

*本日报基于 2026-05-07 GitHub 公开数据生成*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期**: 2026-05-07
**数据来源**: github.com/github/copilot-cli

---

## 1. 今日更新概览

今日（2026-05-06）Copilot CLI 连续发布三个版本（v1.0.42、v1.0.43-0、v1.0.43），聚焦于用户体验优化与 MCP 服务器稳定性修复。社区共新增 50 条 Issues 更新，涵盖模型请求消耗、终端渲染、MCP 服务器等多个领域；另有 2 条 PR 更新。

---

## 2. 版本发布

### v1.0.43（2026-05-06）
**链接**: https://github.com/github/copilot-cli/releases/tag/v1.0.43

| 类型 | 更新内容 |
|------|----------|
| 新增 | `/statusline` 选择器增加用户名切换开关，可在底部显示当前活跃账户 |
| 改进 | Auto 模式使用服务器端模型路由，提升实时模型选择的响应速度 |
| 改进 | 多会话场景下恢复提示正确显示会话名称 |
| 安全 | 防护恶意攻击导致的远程代码执行（RCE）风险 |

### v1.0.43-0（2026-05-06）
**链接**: https://github.com/github/copilot-cli/releases/tag/v1.0.43-0

| 类型 | 更新内容 |
|------|----------|
| 改进 | 运行 `update` 命令时显示下载进度 |

### v1.0.42（2026-05-06）
**链接**: https://github.com/github/copilot-cli/releases/tag/v1.0.42

| 类型 | 更新内容 |
|------|----------|
| 改进 | MCP 服务器启动失败警告增加可直接运行的 `/mcp show` 命令建议（针对服务器名含空格的场景） |
| 改进 | MCP 服务器失败警告包含 stderr 输出，便于诊断连接错误 |
| 新增 | 新增 `-C <directory>` 参数，可在启动前切换工作目录 |

---

## 3. 社区热点 Issues

### 🔥 高热度问题

**1. 单会话请求导致无限 Premium 请求消耗**
- **编号**: [#2591](https://github.com/github/copilot-cli/issues/2591) | **状态**: CLOSED
- **作者**: @saa7wz | **评论**: 32 | **👍**: 13
- **摘要**: 单次请求触发的会话中，每次 agent 回复（工具调用或思考过程）都会额外消耗 premium 请求配额，导致一次用户请求实际消耗 80-100 个请求。
- **影响场景**: 使用 Copilot CLI 进行深度代码分析或多轮对话的企业用户

**2. 瞬态 API 错误导致速率限制**
- **编号**: [#2101](https://github.com/github/copilot-cli/issues/2101) | **状态**: OPEN
- **作者**: @AmauMaill | **评论**: 24 | **👍**: 16
- **摘要**: 频繁出现 "Request failed due to a transient API error" 错误，最终触发速率限制，用户需等待 1 分钟后重试。
- **影响场景**: 高频使用 CLI 的开发者

**3. Windows 鼠标滚轮被输入框捕获**
- **编号**: [#1944](https://github.com/github/copilot-cli/issues/1944) | **状态**: CLOSED
- **作者**: @chenxizhang | **评论**: 8 | **👍**: 2
- **摘要**: Windows 平台下鼠标滚轮无法滚动对话历史，反而被底部文本输入框捕获（回归问题）。
- **影响场景**: Windows 用户浏览长对话历史

### 📌 功能需求

**4. CLI 输入模式需要 Vi/Vim 支持**
- **编号**: [#13](https://github.com/github/copilot-cli/issues/13) | **状态**: OPEN
- **作者**: @RyanHecht | **评论**: 5 | **👍**: 57
- **摘要**: 社区强烈呼吁为 CLI 交互区域添加 vi/vim 风格的键盘驱动导航和编辑模式。
- **影响场景**: 习惯使用 modal 编辑器的开发者

**5. 子代理工具调用详情展示**
- **编号**: [#1322](https://github.com/github/copilot-cli/issues/1322) | **状态**: OPEN
- **作者**: @cephalin | **评论**: 4 | **👍**: 12
- **摘要**: 期望在 CLI 中查看子代理的工具调用细节，类似 VS Code Copilot Chat 的可展开功能。
- **影响场景**: 使用多代理架构的高级用户

### ⚠️ 权限与认证

**6. 企业用户访问被 Copilot 策略拒绝**
- **编号**: [#3101](https://github.com/github/copilot-cli/issues/3101) | **状态**: OPEN
- **作者**: @kkleeberger | **评论**: 5 | **👍**: 3
- **摘要**: 企业环境下执行 `/model get` 报错 "access denied by Copilot policy"。
- **影响场景**: GitHub Enterprise Cloud 用户

**7. `2>/dev/null` 仍需权限确认**
- **编号**: [#2693](https://github.com/github/copilot-cli/issues/2693) | **状态**: OPEN
- **作者**: @eihigh | **评论**: 2 | **👍**: 2
- **摘要**: 即使是无害的 shell 命令重定向仍触发权限提示。
- **影响场景**: 所有使用 shell 工具的用户

### 🛠️ MCP 服务器

**8. MCP 服务器子进程未完全终止**
- **编号**: [#2543](https://github.com/github/copilot-cli/issues/2543) | **状态**: OPEN
- **作者**: @KeithIsSleeping | **评论**: 1 | **👍**: 2
- **摘要**: 并发子代理事件导致会话状态损坏，后续消息永久报错 "tool_use ids were found without tool_result blocks"。
- **影响场景**: 使用 MCP 扩展的开发者

**9. 自定义 MCP 服务器被误判为策略阻止**
- **编号**: [#3162](https://github.com/github/copilot-cli/issues/3162) | **状态**: OPEN
- **作者**: @goldsziggy | **评论**: 2 | **👍**: 0
- **摘要**: v1.0.42 中已在 MCP 注册表列出的自定义服务器被错误标记为 "blocked by policy"。
- **影响场景**: 使用自定义 MCP 服务器的企业用户

### 🔧 终端渲染

**10. 终端输出覆盖而非追加到回滚缓冲区**
- **编号**: [#3110](https://github.com/github/copilot-cli/issues/3110) | **状态**: OPEN
- **作者**: @Richard-Marlow | **评论**: 1 | **👍**: 0
- **摘要**: CLI 使用光标移动/覆盖序列重写行，导致当前会话输出永远不会进入终端回滚缓冲区。
- **影响场景**: 需要回溯查看历史输出的开发者

---

## 4. 重要 PR 进展

| 编号 | 标题 | 作者 | 状态 | 摘要 |
|------|------|------|------|------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | ViewSonic monitor | @tijuks | OPEN | 为 #2591、#3561、#3559 添加监控的 GitHub Action runners |
| [#3137](https://github.com/github/copilot-cli/pull/3137) | Add initial devcontainer configuration | @jepbu4gamfuz-arch | CLOSED | 添加初始 devcontainer 配置，便于本地开发环境搭建 |

---

## 5. 功能需求归类

基于过去 24 小时 Issues 更新，社区反馈的功能需求可归纳为以下方向：

### 模型与 API
- **请求配额消耗异常**：单次会话触发超额 API 调用（#2591）
- **速率限制处理**：瞬态错误后的限流问题（#2101）
- **模型名称一致性**：CLI 与 VS Code 的自定义模型名称解析差异（#1752）
- **Effort 级别切换**：模型切换时 effort 参数未正确应用（#3159）

### 终端渲染体验
- **鼠标滚轮行为**：Windows 与 VSCode 终端的滚动行为不一致（#1944、#2405）
- **输出回滚问题**：终端输出覆盖而非追加（#3110）
- **文件引用可点击**：期望直接点击打开文件（#3134）

### MCP 服务器
- **子进程管理**：会话结束时 MCP 子进程未完全终止
- **错误诊断**：失败警告信息不够详细
- **注册表验证**：自定义服务器被误判（#3162）
- **采样响应**：返回内容包含系统提示词（#2467）

### 权限与认证
- **企业认证**：ACP 服务器不支持企业用户认证（#3161）
- **Shell 权限**：复合命令和未列出的二进制文件仍需确认（#3165）
- **用户切换**：多账户场景下指定用户（#3169）

### 代理与上下文
- **子代理详情**：缺乏工具调用展开功能（#1322）
- **循环问题**：Plan→Compact→Re-Plan 无限循环（#3154、#3157、#3158）
- **上下文管理**：图片占用上下文空间（#3168）

### 插件与扩展
- **插件目录加载**：--agent 与 --plugin-dir 组合失效（#2795）
- **私有仓库支持**：插件市场不支持私有仓库（#1243）
- **扩展热重载**：快照陈旧导致 preToolUse 静默丢弃（#3167）

---

## 6. 开发者关注点

根据 Issues 反馈，以下问题获得较高关注：

### 🔴 高优先级
1. **Premium 请求超额消耗**：影响企业成本控制，已引起广泛讨论
2. **速率限制体验**：频繁触发限流影响开发效率
3. **Plan→Compact→Re-Plan 循环**：导致会话完全卡死，无法完成任何操作

### 🟡 中等优先级
4. **MCP 服务器稳定性**：子进程泄漏、注册表误判影响扩展生态
5. **终端输出回滚**：调试和回溯场景受限
6. **企业认证支持**：GHE 用户无法正常使用 ACP

### 🟢 持续关注
7. **Vi/Vim 输入模式**：社区投票最高的功能需求（57👍）
8. **Shell 权限简化**：提升日常使用体验
9. **子代理工具详情**：对高级用户和调试场景有重要价值

---

**报告生成时间**: 2026-05-07
**数据覆盖范围**: 2026-05-06 00:00 至 2026-05-07 00:00 (UTC)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：** 2026-05-07
**数据来源：** github.com/MoonshotAI/kimi-cli

---

## 1. 今日更新概览

今日社区共新增 **11 条 Issues** 和 **3 条 Pull Requests**，整体活跃度保持平稳。Issues 涵盖 MCP 连接稳定性、OAuth 认证、Python 3.14 兼容性、用户体验增强等多个方向。PR 层面有 3 个功能提案正在推进，包括用户自定义主题、RalphFlow 架构优化及图片占位符编辑功能。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内未检测到版本标签更新。

---

## 3. 社区热点 Issues

### 🔴 高优先级问题

**#769** | **[enhancement] MCP 连接失败时不应自动退出**
作者：[@xchen-zhao](https://github.com/xchen-zhao) | 创建：2026-01-28 | 更新：2026-05-06 | 👍 6 | 💬 3
链接：https://github.com/MoonshotAI/kimi-cli/issues/769

**问题描述：** 当前 Kimi Code CLI 启动时，若任何已配置的 MCP 服务器连接失败，CLI 会立即退出并抛出致命错误（`MCPRuntimeError`）。这导致用户即使仅需使用内置工具或其他正常 MCP 工具，也因单一节点故障无法进入交互界面。

**用户诉求：** 建议与 Codex/Claude Code 保持一致，允许部分 MCP 服务器失败时继续运行，而非“一刀切”退出。

---

**#2166** | **[bug] Python 3.14.0a6 导致 SIGSEGV 崩溃**
作者：[@Arcobalneo](https://github.com/Arcobalneo) | 创建：2026-05-06 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/issues/2166

**问题描述：** 使用 Python 3.14+（`kimi term` / Toad 所需）时，运行任何非平凡命令（如 `kimi`、`kimi info`）会导致段错误。`--help` 和 `--version` 因不触发完整导入链而正常工作。

**影响范围：** PyYAML C 扩展 ABI 不兼容问题，影响尝鲜 Python 3.14 的开发者。

---

**#2172** | **[bug] MCP OAuth 失败：client_secret_basic 不被支持**
作者：[@owesazevedo](https://github.com/owesazevedo) | 创建：2026-05-07 | 更新：2026-05-07
链接：https://github.com/MoonshotAI/kimi-cli/issues/2172

**问题描述：** 连接使用 `client_secret_basic` 认证方式的 MCP 服务器时，Kimi CLI 抛出验证错误。`OAuthClientInformationFull` 仅接受 `none` 或 `client_secret_post`。

**环境：** kimi-cli 1.41.0 / macOS / Python 3.13

---

**#2165** | **[bug] 无效工具调用破坏整个会话**
作者：[@RightL](https://github.com/RightL) | 创建：2026-05-06 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/issues/2165

**问题描述：** 当模型生成无效工具调用时，会导致整个会话损坏，用户无法继续交互。

**环境：** kimi 1.41.0 / 本地 vLLM 部署 kimi-k2.6 / Linux

---

### 🟡 功能增强建议

**#2152** | **[Feature Request] 支持全局 ~/.kimi/AGENTS.md**
作者：[@lNeverl](https://github.com/lNeverl) | 创建：2026-05-03 | 更新：2026-05-06 | 👍 2 | 💬 1
链接：https://github.com/MoonshotAI/kimi-cli/issues/2152

**用户场景：** 当前 `AGENTS.md` 仅从当前工作目录加载。对于并行维护多个项目的开发者（10+ 个不相关项目），每个项目都需要单独配置共享规则，造成显著摩擦。

**建议：** 支持全局 `~/.kimi/AGENTS.md` 文件，实现跨项目共享约定。

---

**#2169** | **[Feature Request] 非交互式 `kimi usage` 命令**
作者：[@Mitsi-ag](https://github.com/Mitsi-ag) | 创建：2026-05-06 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/issues/2169

**用户场景：** 当前仅能通过 REPL 内交互式 `/usage` 命令查看配额，无编程方式访问。在脚本、CI 步骤、仪表盘或菜单栏小部件中无法读取。

**尝试失败：** `kimi -p "/usage" --print` 返回 `Unknown slash command "/usage"`

---

**#2171** | **RFC: 用户自定义颜色皮肤（YAML 格式）**
作者：[@VrtxOmega](https://github.com/VrtxOmega) | 创建：2026-05-06 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/issues/2171

**现状：** 当前 `/theme` 命令仅提供 `dark` / `light` 两个内置调色板。
**诉求：** 用户无法在不修改源码的情况下定义自己的配色方案。高级用户、自定义终端、品牌环境或无障碍调优场景有强烈需求。

---

**#2173** | **[enhancement] 添加 crow-cli 支持**
作者：[@odellus](https://github.com/odellus) | 创建：2026-05-07 | 更新：2026-05-07
链接：https://github.com/MoonshotAI/kimi-cli/issues/2173

**背景：** 用户是 `crow-cli` 作者，同时也是 Kimi Coding Plan 订阅用户。希望能在 Kimi Code 中集成自定义 API Key 和 Base URL 配置。

---

**#2167** | **[enhancement] Web UI：标签页标题闪烁通知**
作者：[@caremi66-dev](https://github.com/caremi66-dev) | 创建：2026-05-06 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/issues/2167

**用户场景：** 多标签页用户需要在其他标签页工作时，收到待批准操作的通知。当前 Kimi Web 标签页不会闪烁或改变标题，导致用户错过待审批的 tool approval。

---

### 🟢 其他问题

**#2017** | **[bug] 对话无法继续，上下文内容丢失**
作者：[@shumyun](https://github.com/shumyun) | 创建：2026-04-23 | 更新：2026-05-06 | 💬 2
链接：https://github.com/MoonshotAI/kimi-cli/issues/2017

**环境：** kimi 1.37.0 / VS Code / Windows 10 x64
**症状：** 提示 "Service temporarily unavailable"

---

**#2168** | **[bug] 系统提示词消失**
作者：[@dream-1ab](https://github.com/dream-1ab) | 创建：2026-05-06 | 更新：2026-05-06 | 👍 1
链接：https://github.com/MoonshotAI/kimi-cli/issues/2168

**环境：** kimi 1.41.0 / Kimi Code 订阅 / 模型 2.6 / Ubuntu 24.04 & macOS 26
**诉求：** 用户强烈请求恢复系统提示词功能。

---

## 4. 重要 PR 进展

### #2170 | **feat: 添加用户自定义颜色皮肤（YAML 格式）**
作者：[@VrtxOmega](https://github.com/VrtxOmega) | 创建：2026-05-06 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/pull/2170

**主要变更：**
- 新增 `/skin` 斜杠命令 —— 运行时切换命名皮肤，功能类似 `/theme` 但支持用户定义调色板
- YAML 皮肤加载器 —— `~/.kimi/skins/<name>.yaml` 文件以 Hermes 兼容格式定义完整颜色方案
- 缺失的 token 自动回退到默认主题

**关联 Issue：** #2171

---

### #1960 | **feat(soul): RalphFlow 架构（临时上下文与收敛检测）**
作者：[@ORDL-AMF](https://github.com/ORDL-AMF) | 创建：2026-04-20 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/pull/1960

**核心设计：**
- **临时上下文（Ephemeral Context）**：Flow 迭代在隔离的临时上下文文件中运行
- **收敛检测（Convergence Detection）**：防止无限循环，同时支持稳健的多步骤工作流
- **RalphFlow 架构**：Kimi Code CLI Agent 的自动化迭代框架

---

### #1848 | **feat(prompt): 图片和粘贴文本占位符编辑为块**
作者：[@HynoR](https://github.com/HynoR) | 创建：2026-04-12 | 更新：2026-05-06
链接：https://github.com/MoonshotAI/kimi-cli/pull/1848

**功能目标：** 允许用户将图片和粘贴的文本占位符作为块进行编辑，提升多模态输入的可用性。

---

## 5. 功能需求归类

基于今日 Issues 统计，用户反复提到的功能方向如下：

| 类别 | 具体需求 | 相关 Issues |
|------|----------|-------------|
| **MCP 生态** | MCP 连接失败容错、OAuth 认证支持 | #769, #2172 |
| **配置灵活性** | 全局 AGENTS.md、用户自定义皮肤、crow-cli 集成 | #2152, #2171, #2173 |
| **可编程性** | 非交互式 `/usage` 命令、CLI 脚本化 | #2169 |
| **稳定性** | Python 3.14 兼容性、会话损坏修复 | #2166, #2165 |
| **UI/UX** | Web 标签页通知、系统提示词恢复 | #2167, #2168 |
| **多模态** | 图片占位符块编辑 | #1848 (PR) |

---

## 6. 开发者关注点

1. **MCP 生态完善**：多个 Issue 聚焦 MCP 服务器的健壮性（连接容错、OAuth 认证），反映出开发者对 MCP 协议深度集成的期待。

2. **Python 版本兼容性**：Python 3.14 预览版的 ABI 不兼容问题需要关注，建议在正式版发布前完成适配。

3. **用户体验一致性**：系统提示词消失、Web UI 通知缺失等问题表明核心交互体验仍有优化空间。

4. **配置与个性化**：全局配置、用户自定义皮肤等需求旺盛，开发者希望减少重复配置工作。

5. **可观测性**：配额查询的编程化访问需求明确，适用于 CI/CD 和监控场景。

---

*本日报基于 GitHub 公开数据生成，仅反映社区动态，不代表官方立场。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期**: 2026-05-07
**数据来源**: github.com/anomalyco/opencode

---

## 1. 今日更新概览

今日 OpenCode 社区保持高度活跃。**v1.14.40** 正式发布，带来了远程配置文件支持和多项 bug 修复。过去 24 小时内共产生 50 条 Issues 和 50 条 Pull Requests，其中多个涉及桌面端插件系统、模型兼容性和工具执行稳定性问题。

---

## 2. 版本发布

### v1.14.40

**发布时间**: 2026-05-07

**Core 改进**:
- 支持 `.well-known/opencode` 配置文件，可指向独立的远程配置文件

**Bugfix**:
- 重放签名推理块时保留助手文本（@edevil）
- 对缺失会话返回一致的 404 错误
- 在认证前应用 CORS 头

---

## 3. 社区热点 Issues

### 🔥 #3936 [CLOSED] GitHub Enterprise 授权问题
- **作者**: @rdentato | 评论: 58 | 👍 15
- **场景**: 企业用户使用 GitHub Enterprise 登录时遇到意外错误
- **链接**: https://github.com/anomalyco/opencode/issues/3936

### ✨ #6680 [OPEN] 桌面端查看归档会话功能
- **作者**: @0xajka | 评论: 32 | 👍 6
- **场景**: 需在侧边栏 `...` 菜单添加查看归档会话入口
- **链接**: https://github.com/anomalyco/opencode/issues/6680

### 🐛 #24529 [OPEN] edit 工具崩溃
- **作者**: @SuyeshBadge | 评论: 20 | 👍 0
- **场景**: 修改现有文件时 `output.args.filePath` 为 undefined 导致崩溃
- **链接**: https://github.com/anomalyco/opencode/issues/24529

### ⚠️ #23944 [OPEN] OpenAI 频繁报错
- **作者**: @berenddeboer | 评论: 15 | 👍 9
- **场景**: 使用 GPT-5.4 时频繁出现 server_error
- **链接**: https://github.com/anomalyco/opencode/issues/23944

### ⌨️ #6719 [OPEN] /reload 斜杠命令
- **作者**: @wojons | 评论: 14 | 👍 54
- **场景**: 需要 `/reload` 命令重新加载配置文件
- **链接**: https://github.com/anomalyco/opencode/issues/6719

### 📁 #16878 [OPEN] 旧会话无法加载
- **作者**: @Laurenz-Ruzicka | 评论: 13 | 👍 1
- **场景**: 会话列表为空，无法恢复历史会话
- **链接**: https://github.com/anomalyco/opencode/issues/16878

### 🖥️ #25840 [OPEN] 桌面端插件列表不显示
- **作者**: @dxdiag11 | 评论: 10 | 👍 2
- **场景**: v1.14.37 后桌面端 Agent 不显示插件列表，CLI 正常
- **链接**: https://github.com/anomalyco/opencode/issues/25840

### 🔌 #25630 [OPEN] 插件 provider.models() 钩子失效
- **作者**: @ErcinDedeoglu | 评论: 6 | 👍 2
- **场景**: PR #25167 后自定义 provider 的 models() 钩子无法填充模型
- **链接**: https://github.com/anomalyco/opencode/issues/25630

### 💻 #25873 [OPEN] Bash 工具只读属性错误
- **作者**: @stephanschielke | 评论: 4 | 👍 1
- **场景**: v1.14.34+ 编译后二进制文件执行工具时抛出 "Attempted to assign to readonly property"
- **链接**: https://github.com/anomalyco/opencode/issues/25873

### 🛠️ #26097 [OPEN] TUI 插件 API 扩展
- **作者**: @juanma91m | 评论: 2 | 👍 0
- **场景**: 提议扩展 TUI 插件 API，支持会话投影和会话列表适配器
- **链接**: https://github.com/anomalyco/opencode/issues/26097

---

## 4. 重要 PR 进展

### ✨ #25662 fix: 匹配非 ASCII 文件夹名
- **作者**: @ysm-dev
- **内容**: 修复 Open Project 搜索在 macOS 上无法匹配韩文等非 ASCII 文件夹名的问题
- **链接**: https://github.com/anomalyco/opencode/pull/25662

### ⌨️ #26065 feat: Shell 模式 Tab 补全
- **作者**: @LycanW
- **内容**: 为 CLI TUI 的 `!` 命令添加类 bash 的路径/文件补全
- **链接**: https://github.com/anomalyco/opencode/pull/26065

### 📝 #25368 fix: Markdown 导出时包装 reasoning 标签
- **作者**: @1fanwang
- **内容**: 修复 Markdown 转录中 thinking 内容缺少闭合标签的问题
- **链接**: https://github.com/anomalyco/opencode/pull/25368

### 🌐 #25800 chore: 完成中文翻译
- **作者**: @LifetimeVip
- **内容**: 完成 app、ui、desktop 模块的简体中文翻译
- **链接**: https://github.com/anomalyco/opencode/pull/25800

### ✅ #25856 feat: 自动清理过期待办
- **作者**: @LifetimeVip
- **内容**: 新增 `/clear-tasks` 和 `/清除任务` 命令，自动清理过期待办事项
- **链接**: https://github.com/anomalyco/opencode/pull/25856

### 🖥️ #25962 [beta] feat: 桌面端迁移到 utilityProcess
- **作者**: @Brendonovich
- **内容**: 将服务器初始化移至 Electron utilityProcess，提升隔离性和稳定性
- **链接**: https://github.com/anomalyco/opencode/pull/25962

### 🧠 #16552 feat: ACP 中的 thought level 配置
- **作者**: @knotbin
- **内容**: 统一 ACP 中模型的 thinking 模式配置方式
- **链接**: https://github.com/anomalyco/opencode/pull/16552

### 🌐 #24865 feat: SDK 添加 CORS 选项
- **作者**: @rodrigodmpa
- **内容**: 在 ServerOptions 中添加 cors 选项，支持自定义允许的来源
- **链接**: https://github.com/anomalyco/opencode/pull/24865

### 🔧 #24849 feat: 按路径过滤会话
- **作者**: @jlongster
- **内容**: 新增按目录过滤会话功能，并添加禁用设置
- **链接**: https://github.com/anomalyco/opencode/pull/24849

### 🧪 #24712 [bug, contributor] 添加原生 LLM 核心
- **作者**: @kitlangton
- **内容**: 新增 `packages/llm`，提供原生 Effect-based LLM 核心
- **链接**: https://github.com/anomalyco/opencode/pull/24712

---

## 5. 功能需求归类

基于今日 Issues 统计，功能需求主要集中在以下方向：

| 类别 | 相关 Issue | 典型诉求 |
|------|-----------|---------|
| **会话管理** | #6680, #16878, #25978 | 归档会话查看、旧会话恢复、按路径过滤 |
| **IDE 集成** | #15422 | VS Code 侧边栏集成 |
| **Git 功能** | #19433 | 桌面端 Git 分支管理 |
| **Shell 体验** | #7755, #26065 | Tab 补全、reload 命令 |
| **插件系统** | #25840, #25630, #26097 | 插件列表显示、provider 钩子、API 扩展 |
| **模型兼容** | #23944, #25758, #26107 | OpenAI 错误、推理内容缺失、免费模型限制 |
| **国际化** | #25800 | 中文翻译完善 |
| **移动端** | #18767 | 移动触摸优化 |

---

## 6. 开发者关注点

### 高频痛点

1. **桌面端稳定性**
   - 插件系统问题（#25840, #25630）影响桌面端用户体验
   - utilityProcess 迁移（#25962）正在进行中

2. **工具执行错误**
   - Bash 工具在编译后版本出现只读属性错误（#25873）
   - edit 工具在修改文件时崩溃（#24529）

3. **会话管理**
   - 旧会话无法加载（#16878）阻碍工作连续性
   - 会话列表不完整（#25978）

4. **模型兼容**
   - OpenAI 服务端错误频繁（#23944）
   - 推理内容处理不一致（#25758）
   - 免费模型使用限制问题（#26107）

5. **企业场景**
   - GitHub Enterprise 授权问题（#3936）长期未完全解决

### 社区活跃度观察

- 今日 Issues 总量 50 条，PR 总量 50 条，社区贡献活跃
- 高评论 Issue 多集中于授权、插件、模型兼容性领域
- 国际化工作（中文翻译）持续推进

---

*本日报由 OpenCode 社区数据自动生成 | 生成时间: 2026-05-07*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**: 2026-05-07

---

## 1. 今日更新概览

今日 Qwen Code 发布了 `v0.15.6-nightly.20260507.15342b893` 版本，主要引入了 FileReadCache 缓存机制和代理设置修复。社区活跃度较高，共新增 30 条 Issues 和 50 条 PR 更新，多个功能特性和 bug 修复正在推进中。

---

## 2. 版本发布

### v0.15.6-nightly.20260507.15342b893

| 变更类型 | 内容 | 贡献者 |
|---------|------|--------|
| Feature | `feat(core)`: 新增 FileReadCache，对未变更的文件读取进行短路优化 | @wenshao |
| Bug Fix | `fix(cli)`: 修复代理设置未正确生效的问题 | @cyphercodes |
| Chore | 版本发布自动化 | @qwen-code-ci-bot |

> **链接**: https://github.com/QwenLM/qwen-code/pull/3766

---

## 3. 社区热点 Issues

### 🔴 高优先级 Bug

| # | 标题 | 状态 | 摘要 |
|---|------|------|------|
| #3878 | 上下文窗口大小设置被忽略 | OPEN | 本地模型 `settings.json` 中的 `contextWindowSize: 192000` 配置未生效，用户期望自定义上下文窗口大小。影响使用本地大模型的用户。 |
| #3843 | 启动时完全覆盖 settings.json | OPEN | Qwen Code 启动时会自动重写 `settings.json`，导致用户自定义配置丢失。影响所有手动配置过设置的用户。 |
| #3730 | 更新后自动停止任务 | OPEN | P1 优先级问题：新版本即使用户未按 ESC 键，Qwen Code 也会自动发送停止指令，导致长时间运行任务中断。 |
| #3823 | SDK 升级后 CLI 报错退出 | OPEN | `@qwen-code/sdk` 从 0.1.5 升级至 0.1.6/0.1.7 后，调用 Qwen3.5-397B 模型时有概率触发 `code 1` 退出。 |

### 🟡 功能性问题

| # | 标题 | 状态 | 摘要 |
|---|------|------|------|
| #3829 | Wayland 上无法粘贴图片 | OPEN | 与 #2885 相同问题，在 Wayland 环境下使用 pacman 安装后无法粘贴图片，已安装 xdg-utils 和 wl-clipboard。 |
| #3877 | .env 文件中的 API Key 被忽略 | OPEN | 用户已在 `~/.qwen/.env` 设置 `OPENCODE_GO_API_KEY`，但启动时仍强制要求选择认证方式。 |
| #3881 | 本地模型持续返回 "/" | OPEN | 调用本地 qwen3.6-27b 模型时，首次提问容易导致模型持续返回 "/" 直到 token 上限。 |

### 🟢 已关闭问题

| # | 标题 | 状态 | 摘要 |
|---|------|------|------|
| #3837 | ACP 模式不支持斜杠命令选择技能 | CLOSED | 在 Zed 客户端中 ACP 模式无法使用 `/` 斜杠命令选择技能，已修复。 |
| #3822 | 大文件编辑导致 session JSONL 膨胀 | CLOSED | `edit`/`write_file` 处理大文件时，`toolCallResult.resultDisplay` 未做大小边界控制，导致 `/resume` 加载极慢。根因是 `originalContent`、`newContent`、`fileDiff` 字段过大。 |

> **链接**: 所有 Issues https://github.com/QwenLM/qwen-code/issues

---

## 4. 重要 PR 进展

### ✨ 新增功能

| # | 标题 | 贡献者 | 说明 |
|---|------|--------|------|
| #3598 | `feat(cli)`: headless 模式 `--json-schema` 结构化输出 | @wenshao | 新增 `--json-schema` 参数支持结构化输出，模型需调用 `structured_output` 工具返回结果。 |
| #3680 | `feat(cli)`: 扩展 TUI markdown 渲染 | @chiga0 | 支持 Mermaid 图表、数学公式、任务列表、引用块等丰富 Markdown 渲染。 |
| #2886 | `feat`: Agent Team 实验特性 | @tanzhenxin | 支持 lead agent 并行协调多个子 agent 团队完成任务，默认关闭。 |
| #3847 | `feat(telemetry)`: 注入 traceId/spanId | @doudouOUC | 在调试日志中注入追踪 ID，便于与 OpenTelemetry traces 关联。 |
| #3864 | `feat(cli)`: 重构 provider 注册表认证 | @pomelo-nwu | 围绕 provider 注册表重构认证流程，分离 ModelStudio、Token Plan、Coding Plan 认证。 |

### 🔧 Bug 修复

| # | 标题 | 贡献者 | 说明 |
|---|------|--------|------|
| #3848 | `fix(memory)`: 自动内存召回路由到快速模型 | @B-A-M-N | 将自动内存召回选择器路由到配置的快速模型而非主模型。 |
| #3861 | `fix(cli)`: 保留 settings.json 注释和格式 | @B-A-M-N | 修复 `persistSettingsObject()` 使用格式保留写入，保留注释、尾随逗号和自定义格式。 |
| #3867 | `fix(cli)`: 规范化 /directory remove 路径 | @B-A-M-N | 使用 `fs.realpathSync` 规范化路径，防止符号链接/相对路径绕过检查。 |
| #3873 | `fix(core)`: 子代理 Config 覆盖时重建工具注册表 | @wenshao | 修复子代理 Config 覆盖时已绑定工具未正确迁移的问题。 |
| #3883 | `fix(cli)`: provider 生成配置警告 | @doudouOUC | 当 provider 后端模型有被忽略的顶级生成设置时发出启动警告。 |

### 🔄 持续迭代

| # | 标题 | 贡献者 | 说明 |
|---|------|--------|------|
| #2953 | `feat(core)`: 支持 QWEN_HOME 环境变量 | @tanzhenxin | 允许用户自定义 `~/.qwen` 配置目录位置，便于外置磁盘用户。 |
| #3879 | `feat(core)`: 上下文溢出时响应式压缩 | @doudouOUC | 识别 provider 上下文窗口溢出错误，压缩对话后重试一次。 |
| #3871 | `feat(cli)`: 核心内置 i18n 覆盖 | @shenyankm | 扩展内置 UI 语言覆盖，本地化斜杠命令描述等高可见度文本。 |

> **链接**: 所有 PRs https://github.com/QwenLM/qwen-code/pulls

---

## 5. 功能需求归类

根据今日 Issues 统计，用户反复提到的功能方向如下：

### 📁 会话与文件管理
- **Session JSONL 膨胀**: 大文件编辑导致会话数据过大，影响 `/resume` 性能（#3822 已修复）
- **会话选择器优化**: 建议增加搜索框，支持更多过滤方式（#3869）
- **目录管理增强**: `--add-dir` 功能完善，包括 remove 子命令（#3856）

### 🎨 IDE 集成
- **自动补全能力**: 参照 Cursor 实现 workspace 自动补全，可指定文件带入上下文（#1540）
- **VS Code 光标位置检测**: 从 VS Code 终端启动时自动获取当前文件和行号（#597）
- **Zed 客户端支持**: ACP 模式斜杠命令支持（#3837 已修复）

### 🔧 配置与认证
- **settings.json 保护**: 启动时不应覆盖用户配置（#3843）
- **环境变量支持**: 正确读取 `.env` 文件中的 API Key（#3877）
- **QWEN_HOME 自定义**: 支持自定义配置目录位置（#2953）

### 🖼️ 平台兼容性
- **Wayland 图片粘贴**: Wayland 环境下无法粘贴图片（#3829）
- **代理设置**: CLI 应正确遵循系统代理配置（#3883）

### 🤖 模型与推理
- **上下文窗口配置**: 本地模型上下文窗口大小设置未生效（#3878）
- **思考过程语言**: ACP 模式下思考语言与用户目标语言不一致（#3787）
- **Daemon 模式**: 常驻后台运行并提供 Web 界面交互（#2271, #3803）

### 📊 后台任务与性能
- **后台任务管理**: 路线图和下一步计划（#3634）
- **Agent Team**: 并行子代理协调（#2886）
- **上下文压缩**: 多层上下文压缩机制（#3017）

---

## 6. 开发者关注点

### 痛点反馈

1. **配置迁移破坏性**
   - 多个用户反馈启动时 `settings.json` 被覆盖，导致自定义配置丢失（#3843, #3861）
   - 开发者已通过 #3861 修复格式保留问题

2. **大文件处理性能**
   - 大文件 `edit`/`write_file` 导致 session JSONL 膨胀，`/resume` 极慢（#3822）
   - 根因是 `originalContent`、`newContent`、`fileDiff` 字段未做大小控制

3. **本地模型兼容**
   - 本地部署模型（qwen3.6-27b）存在上下文窗口设置被忽略（#3878）、持续返回 "/"（#3881）等问题
   - SDK 升级后 CLI 进程异常退出（#3823）

4. **平台差异**
   - Wayland 环境图片粘贴问题长期未解决（#3829）
   - 代理设置在 CLI 中未正确生效

### 高频需求

| 需求 | 提及次数 | 相关 Issue |
|------|---------|-----------|
| Daemon 模式 | 2 | #2271, #3803 |
| 自动补全 | 1 | #1540 |
| 远程控制 | 1 | #1946 |
| Agent Team | 1 | #2886 |
| 独立安装包 | 1 | #3728 |

---

**日报生成时间**: 2026-05-07
**数据来源**: github.com/QwenLM/qwen-code

</details>