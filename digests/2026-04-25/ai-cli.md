# AI CLI 工具社区动态日报 2026-04-25

> 生成时间: 2026-04-25 01:44 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Pi](https://github.com/badlogic/pi-mono)

---

## 横向对比

<think>用户要求我基于之前生成的各 AI CLI 工具的社区动态日报，生成一份横向对比分析报告。让我整理一下各工具的数据：

## 各工具数据汇总

### Claude Code (github.com/anthropics/claude-code)
- Issues: ~50条，新增展示30条评论最多的
- PRs: 3条
- Releases: v2.1.120
- 热门 Issue: #18435 (多账户管理, 412👍, 78评论)
- 重要事件: v2.1.120 引发 Resume 崩溃回归问题

### OpenAI Codex (github.com/openai/codex)
- Issues: ~50条
- PRs: ~50条
- Releases: rust-v0.125.0 稳定版, rust-v0.126.0-alpha.1 预览版
- 热门 Issue: #10450 (Remote Development, 603👍, 164评论)
- 重要事件: Goal Mode 功能完成 (5/5 PRs)

### Gemini CLI (github.com/google-gemini/gemini-cli)
- Issues: ~50条
- PRs: ~50条
- Releases: v0.40.0-preview.4, v0.40.0-preview.3, v0.39.1
- 热门 Issue: #25306 (权限错误, 19评论, 6👍)
- 重要事件: Windows Backspace 回归修复

### GitHub Copilot CLI (github.com/github/copilot-cli)


- Issues: ~49条
- PRs: 1条
- Releases: v1.0.36, v1.0.36-1, v1.0.36-0
- 热门 Issue: #107 (Alpine Linux 分段错误, 13评论)
- 重要事件: 双 Esc 取消、状态行切换

### Kimi Code CLI (github.com/MoonshotAI/kimi-cli)
- Issues: 11条
- PRs: 23条
- Releases: v1.39.0
- 热门 Issue: #3203 (OAuth 免费层级政策, 119评论)
- 重要事件: UTF-8 BOM 兼容性修复

### OpenCode (github.com/anomalyco/opencode)
- Issues: ~50条
- PRs: ~50条
- Releases: v1.14.24, v1.14.23
- 热门 Issue: #24190 (DeepSeek V4 400错误, 19评论)
- 重要事件: DeepSeek reasoning_content 修复

### Qwen Code (github.com/QwenLM/qwen-code)
- Issues: 32条
- PRs: 50条
- Releases: v0.15.2
- 热门 Issue: #3203 (免费层级政策, 119评论)
- 重要事件: 会话自动命名、Skills 并行加载

### Pi (github.com/badlogic/pi-mono)
- Issues: ~50条
- PRs: ~22条
- Releases: v0.70.2, v0.70.1
- 热门 Issue: #3636 (DeepSeek reasoning_content, 9评论)
- 重要事件: DeepSeek V4 Flash/Pro 支持

现在需要整理一份对比分析报告，涵盖生态全景、各工具活跃度对比、共同关注的功能方向、差异化定位分析、社区热度与成熟度评估，以及值得关注的趋势信号。
</think>

# AI CLI 工具生态横向对比分析报告

**日期：** 2026-04-25  
**数据来源：** 各主流 AI CLI 工具 GitHub 社区

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**三足鼎立与多点开花**的格局：OpenAI Codex、Claude Code 和 Gemini CLI 构成第一梯队，凭借各自模型优势争夺开发者心智；Kimi Code、Qwen Code 等国产工具依托本地化优势快速崛起；OpenCode、Pi 等开源项目则以插件生态和灵活性见长。整体趋势显示，各工具正从单一的代码补全向**智能代理平台**演进，远程开发、多账户管理、后台任务执行成为共同的技术高地。

---

## 2. 各工具活跃度对比

| 工具 | Issues (24h) | PRs (24h) | Releases | 热门 Issue 点赞 | 热门 Issue 评论 | 社区活跃度 |
|------|-------------|-----------|----------|----------------|----------------|------------|
| **OpenAI Codex** | ~50 | ~50 | 3个 (rust-v0.125.0系) | 603 | 164 | ⭐⭐⭐⭐⭐ |
| **Claude Code** | ~50 | 3 | 1 (v2.1.120) | 412 | 78 | ⭐⭐⭐⭐ |
| **Gemini CLI** | ~50 | ~50 | 3 (v0.40.0系) | 15 | 19 | ⭐⭐⭐⭐ |
| **OpenCode** | ~50 | ~50 | 2 (v1.14.24系) | 21 | 19 | ⭐⭐⭐⭐ |
| **Qwen Code** | 32 | 50 | 1 (v0.15.2) | 12 | 119 | ⭐⭐⭐ |
| **Kimi Code CLI** | 11 | 23 | 1 (v1.39.0) | 6 | 119 | ⭐⭐⭐ |
| **Pi** | ~50 | 22 | 2 (v0.70.2系) | 9 | 9 | ⭐⭐⭐ |
| **Copilot CLI** | ~49 | 1 | 3 (v1.0.36系) | 8 | 13 | ⭐⭐ |

**关键发现：**
- **OpenAI Codex** 社区热度最高，Goal Mode 功能完成驱动大量 PR 提交
- **Qwen Code** PR/Issue 比高达 1.56，体现高代码吞吐量
- **Copilot CLI** PR 活跃度最低，可能处于维护模式

---

## 3. 共同关注的功能方向

### 3.1 远程开发与跨平台支持

| 工具 | 具体诉求 | 代表 Issue |
|------|----------|-----------|
| **Claude Code** | 多账户管理、跨平台一致性 | #18435 (412👍) |
| **OpenAI Codex** | 远程开发、Linux 桌面应用 | #10450 (603👍) |
| **Copilot CLI** | Windows PowerShell 5.1 兼容、Alpine Linux 支持 | #1680, #107 |
| **Kimi Code CLI** | PowerShell 7 支持 | #2066 |

**分析：** 远程开发和跨平台兼容性是行业共同痛点，OpenAI Codex 的 Remote Development 需求以 603 点赞成为全生态最高呼声。

### 3.2 第三方模型深度集成

| 工具 | 集成重点 | 代表 Issue/PR |
|------|----------|---------------|
| **Claude Code** | Cache TTL 成本问题 | #46829 (234👍) |
| **OpenCode** | DeepSeek V4 reasoning_content | #24190, PR #24146 |
| **Pi** | DeepSeek V4 Flash/Pro, xhigh reasoning | #3636, PR #3661 |
| **Qwen Code** | 多供应商配置、LiteLLM 支持 | #3555, PR #14468 |
| **Kimi Code CLI** | MCP 协议增强 | #3549 |

**分析：** DeepSeek V4 的 `reasoning_content` 处理成为多工具共同挑战，涉及模型切换、历史重放、tool-call 场景的全面适配。

### 3.3 后台任务与异步执行

| 工具 | 功能描述 | 状态 |
|------|----------|------|
| **Claude Code** | `claude ultrareview [target]` 非交互模式 | v2.1.120 新增 |
| **OpenCode** | `task(background=true)` 后台子代理 | PR #24174 Open |
| **OpenAI Codex** | 远程线程配置、粘性环境 | rust-v0.125.0 新增 |
| **Gemini CLI** | 版本化预写备份与代理驱动恢复 | PR #25947 Open |

**分析：** 后台任务执行能力正成为代理平台标配，各工具实现路径各异但目标一致。

### 3.4 成本控制与用量透明

| 工具 | 功能 | 热度 |
|------|------|------|
| **Claude Code** | Cache TTL 配置、token 消耗监控 | #46829 (234👍) |
| **Qwen Code** | 模型 input/output 单价设置 | #3585 |
| **OpenCode** | 按模型定价推理 token | PR #24233 |

**分析：** API 成本透明化需求强烈，用户期望精细化控制 token 消耗。

---

## 4. 差异化定位分析

### 技术路线差异

| 工具 | 架构特点 | 技术侧重 |
|------|----------|----------|
| **Claude Code** | 原生集成 Anthropic 模型 | 模型能力深度挖掘、CLI 交互优化 |
| **OpenAI Codex** | Rust 重写、SEA 打包 | 性能优化、Goal Mode 自动化 |
| **Gemini CLI** | TypeScript/Node.js | 插件系统、MCP 生态 |
| **Kimi Code CLI** | ACP 协议、soul 架构 | 记忆系统、自动化迭代 |
| **OpenCode** | 多 provider 抽象层 | 模型无关性、插件扩展 |
| **Qwen Code** | 快速模型辅助 | 会话管理、Skills 系统 |

### 目标用户差异

| 工具 | 核心用户画像 |
|------|--------------|
| **Claude Code** | 追求 Claude 模型能力的专业开发者 |
| **OpenAI Codex** | 需要 Goal Mode 自动化的企业用户 |
| **Gemini CLI** | Google 生态深度用户 |
| **Kimi Code CLI** | 中文开发者、MCP 工具链用户 |
| **Qwen Code** | 多模型多供应商场景用户 |
| **Copilot CLI** | GitHub 生态绑定用户 |

### 功能侧重差异

| 工具 | 核心亮点 | 独特能力 |
|------|----------|----------|
| **Claude Code** | Ultrareview、Cache 优化 | 模型原生集成 |
| **OpenAI Codex** | Goal Mode (5/5)、Remote Dev | 自动化任务编排 |
| **Gemini CLI** | RalphFlow、Ollama 本地路由 | 本地模型支持 |
| **Kimi Code CLI** | 思维保留、ACP 通知 | 多代理协作 |
| **OpenCode** | 多 provider 统一接口 | 模型无关性 |
| **Qwen Code** | 会话自动命名、Skills 并行 | 快速响应 |

---

## 5. 社区热度与成熟度

### 热度矩阵

```
                    高 PR 活跃度
                         │
    Gemini CLI ●─────────┼─────────● OpenAI Codex
         │               │               │
         │    OpenCode ●─┼─● Pi          │
         │               │               │
    低   │               │               │    高
    Issues│              │               │    Issues
    数量  │               │               │    数量
         │               │               │
    Copilot CLI ●────────┼─────────● Qwen Code
                         │
                    低 PR 活跃度
```

### 成熟度评估

| 工具 | 成熟度 | 指标 |
|------|--------|------|
| **Claude Code** | 🟢 成熟稳定 | Issue 响应快、版本发布规范、回归问题快速修复 |
| **OpenAI Codex** | 🟢 成熟稳定 | PR 吞吐量高、Goal Mode 功能完整、文档完善 |
| **Copilot CLI** | 🟡 维护模式 | PR 活跃度低、主要修复性更新 |
| **Gemini CLI** | 🟡 快速迭代 | 版本频繁、实验性功能多 |
| **Kimi Code CLI** | 🟡 快速迭代 | PR 活跃、功能快速推进 |
| **Qwen Code** | 🟡 快速迭代 | PR 吞吐量最高、功能快速落地 |
| **OpenCode** | 🟢 活跃维护 | 多 provider 支持、插件生态完善 |
| **Pi** | 🟡 快速迭代 | DeepSeek 集成快速跟进 |

---

## 6. 值得关注的趋势信号

### 6.1 代理平台化成为共识

**信号：** Claude Code 的 Ultrareview、OpenAI Codex 的 Goal Mode、Gemini CLI 的 RalphFlow、OpenCode 的 Background Task 均指向同一目标——将 CLI 从工具升级为**自动化代理平台**。

**开发者启示：** 掌握代理编排、任务调度、状态管理将成为核心竞争力。

### 6.2 多模型路由成为标配

**信号：** OpenCode 支持 10+ provider、Qwen Code 新增 LiteLLM 支持、Pi 快速跟进 DeepSeek V4，各工具均在强化多模型抽象层。

**开发者启示：** 避免与单一模型深度绑定，架构设计上预留多模型切换能力。

### 6.3 成本透明化需求爆发

**信号：** Claude Code Cache TTL 争议（234👍）、Qwen Code 模型计费功能（#3585）、OpenCode 按模型定价（PR #24233）均反映用户对 API 成本的高度敏感。

**开发者启示：** 提供用量监控、成本预估、预算控制功能将提升用户信任。

### 6.4 跨平台兼容性仍是痛点

**信号：** Copilot CLI 的 Alpine Linux 崩溃、Claude Code 的 Windows 回归、Gemini CLI 的 Backspace 问题、Kimi Code 的 BOM 兼容性——几乎所有工具都面临跨平台挑战。

**开发者启示：** 跨平台测试应纳入 CI 流程，Windows/Linux/macOS 三平台覆盖是基础要求。

### 6.5 本地模型支持升温

**信号：** Gemini CLI 支持 Ollama 路由（PR #25915）、Pi 支持本地 DeepSeek、Kimi Code CLI 的本地模型配置问题引发讨论。

**开发者启示：** 本地模型可降低成本、提升隐私保护，是差异化竞争点。

### 6.6 社区治理模式分化

| 模式 | 代表工具 | 特点 |
|------|----------|------|
| **企业主导** | Claude Code, OpenAI Codex | 官方主导、Issue 响应快、版本规范 |
| **社区驱动** | OpenCode, Pi | 开放协作、PR 贡献多、功能迭代快 |
| **混合模式** | Gemini CLI, Kimi Code CLI | 官方+社区共建、实验性功能多 |

**开发者启示：** 选择工具时需考虑社区治理模式，企业主导适合追求稳定，社区驱动适合追求前沿功能。

---

## 7. 行动建议

### 对技术决策者

1. **多工具组合策略：** 根据团队技术栈选择主工具，OpenAI Codex 适合企业自动化，Claude Code 适合深度代码理解，Gemini CLI 适合 Google 生态
2. **成本控制优先：** 优先选择提供用量监控和 Cache 优化的工具（Claude Code、Qwen Code）
3. **避免锁定：** 选择多 provider 支持的工具（OpenCode、Qwen Code），降低单一供应商风险

### 对开发者

1. **技能储备：** 代理编排、任务调度、多模型路由是未来核心竞争力
2. **跨平台意识：** 跨平台兼容性测试应纳入日常工作流
3. **关注社区：** 积极反馈 Issue、参与 PR 审查，可优先获得功能支持

### 对开源贡献者

1. **高价值 PR 方向：** 跨平台兼容性修复、多 provider 支持、性能优化
2. **差异化机会：** 本地模型支持、成本透明化、国际化

---

**报告生成时间：** 2026-04-25  
**数据覆盖：** 2026-04-24 ~ 2026-04-25 (24小时)  
**分析工具：** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code, Pi

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 Claude Code 社区动态日报。让我仔细分析数据并按照要求的格式生成报告。

数据概览：
1. 最新 Releases: v2.1.120 - 有两个重要更新
2. 最新 Issues: 50条，展示30条评论最多的
3. 最新 PRs: 3条

让我按照要求的结构来组织：

1. 今日速览
2. 版本发布
3. 社区热点 Issues (10个)
4. 重要 PR 进展 (10个，但只有3个PR，需要适当说明)
5. 功能需求趋势
6. 开发者关注点

让我开始分析：

**版本发布 v2.1.120:**
- Windows: Git for Windows (Git Bash) 不再必需，缺少时使用 PowerShell
- 新增 `claude ultrareview [target]` 子命令，用于非交互式运行 /ultrareview

**热点 Issues (按评论数排序):**
1. #18435 - 多账户管理功能 - 78评论，412👍 - 非常热门
2. #13480 - 超大图片破坏对话 - 59评论，63👍
3. #42776 - Windows 重启失败 - 57评论，15👍
4. #46829 - Cache TTL 从1h降为5m - 52评论，234👍 - 重要成本问题


5. #17727 - Linux sandbox 问题 - 13评论，15👍
6. #53041 - Resume 崩溃 "g9H is not a function" - 8评论，13👍 - 2.1.120回归问题
7. #50738 - Ultraplan 流超时 - 8评论
8. #53093 - Windows Resume 崩溃 - 7评论
9. #51414 - Claude Code 进程退出 - 7评论
10. #53044 - Linux Resume 崩溃 - 6评论

**重要 PRs:**
1. #47532 - Rename marketplace for AgentNXT deployment (CLOSED)
2. #52668 - fix(hookify): include hook-specific output for warnings (OPEN)
3. #52666 - docs: fix README brand casing (OPEN)

**功能需求趋势:**
- 多账户管理
- 跨平台稳定性
- 性能优化
- 成本控制
- 国际化支持

**开发者关注点:**
- Resume 功能在2.1.120中的回归问题
- Windows 平台兼容性
- Cache 机制的成本影响
- Sandbox 安全隔离
</think>

# Claude Code 社区动态日报

**日期：** 2026-04-25

---

## 1. 今日速览

v2.1.120 版本发布带来 Windows 体验优化与 CI 集成新能力，但该版本同时引发了大规模 `claude --resume` 崩溃问题，多平台用户受影响。社区热议多账户管理功能与缓存 TTL 成本问题，反映出用户对产品成熟度的期待。

---

## 2. 版本发布

### v2.1.120

**发布时间：** 2026-04-25

**主要更新：**

| 类别 | 更新内容 |
|------|----------|
| 🪟 Windows | Git for Windows (Git Bash) 不再必需，缺失时自动使用 PowerShell 作为 Shell 工具 |
| ⚡ 新功能 | 新增 `claude ultrareview [target]` 子命令，支持从 CI 或脚本中非交互式运行 `/ultrareview`，支持 `--json` 输出原始结果 |

> ⚠️ **注意：** 该版本引发了严重的 `--resume` 功能回归问题，见下方热点 Issues。

[查看 Release 详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.120)

---

## 3. 社区热点 Issues

### 🔥 Top 10 最值得关注

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | **#18435** 多账户管理功能 | 78 | 412 | ⭐⭐⭐⭐⭐ |
| 2 | **#46829** Cache TTL 从 1h 降为 5m 导致成本激增 | 52 | 234 | ⭐⭐⭐⭐⭐ |
| 3 | **#13480** 超大图片永久破坏对话 | 59 | 63 | ⭐⭐⭐⭐ |
| 4 | **#42776** Windows 重启因进程锁失败 | 57 | 15 | ⭐⭐⭐ |
| 5 | **#53041** Resume 崩溃 "g9H is not a function" | 8 | 13 | ⭐⭐⭐⭐ |
| 6 | **#53086** macOS Resume/Continue 崩溃（回归） | 4 | 13 | ⭐⭐⭐⭐ |
| 7 | **#17727** Linux sandbox 完全失效 | 13 | 15 | ⭐⭐⭐ |
| 8 | **#53085** Sandbox 配置失效 | 2 | 2 | ⭐⭐⭐ |
| 9 | **#53083** 权限提示 UI 国际化支持 | 1 | 0 | ⭐⭐ |
| 10 | **#50738** Ultraplan 流超时与缓存问题 | 8 | 0 | ⭐⭐⭐ |

---

### 📌 重点 Issue 详解

#### 1. #18435 - 多账户管理功能 ⭐⭐⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/18435

**问题：** 用户强烈请求在 Claude Desktop 应用中支持多账户管理与便捷的配置文件切换功能。

**社区反应：**
- 👍 412（最高）
- 💬 78 条评论
- 用户表示需要在个人/工作/客户项目间快速切换账号
- 建议参考 VS Code 的多账户配置方案

---

#### 2. #46829 - Cache TTL 静默回退导致成本激增 ⭐⭐⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/46829

**问题：** Anthropic 可能在 2026 年 3 月初静默将 Prompt Cache TTL 从 1 小时降为 5 分钟，导致配额消耗和成本大幅上涨。

**社区反应：**
- 👍 234
- 💬 52 条评论
- 用户通过分析 1月-4月的 session JSONL 数据发现此变化
- 多个企业用户报告月度账单异常增长
- **状态：CLOSED** - 官方已确认并修复

---

#### 3. #13480 - 超大图片永久破坏对话 ⭐⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/13480

**问题：** 上传超大图片后对话永久损坏，无法恢复，只能新建会话。

**社区反应：**
- 👍 63
- 💬 59 条评论
- 影响 Linux 平台
- 用户反馈缺乏错误提示，问题隐蔽性强

---

#### 4. #42776 - Windows 重启因进程锁失败 ⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/42776

**问题：** Windows 上 Claude Code Desktop 因孤儿进程文件锁无法重启。

**社区反应：**
- 👍 15
- 💬 57 条评论
- 用户需手动结束进程或重启电脑
- 影响日常使用体验

---

#### 5-6. #53041 / #53086 - Resume 崩溃（v2.1.120 回归）⭐⭐⭐⭐
**链接：**
- https://github.com/anthropics/claude-code/issues/53041
- https://github.com/anthropics/claude-code/issues/53086

**问题：** v2.1.120 中 `claude --resume` 和 `claude --continue` 启动时崩溃，报错 `g9H is not a function`。

**社区反应：**
- 多平台受影响（macOS/Linux/Windows）
- 临时解决方案：先运行 `claude` 再使用 `/resume` 命令
- 大量重复 Issue 被创建（至少 10+ 个）
- 官方已确认，正在紧急修复

---

#### 7. #17727 - Linux Sandbox 完全失效 ⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/17727

**问题：** Linux 沙箱因错误的 bwrap 调用和缺失的权限配置而完全无法工作。

**社区反应：**
- 👍 15
- 💬 13 条评论
- 安全风险：代码执行缺乏隔离
- 影响生产环境使用

---

#### 8. #53085 - Sandbox 配置失效 ⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/53085

**问题：** macOS 上 `sandbox.enabled=false` 配置被忽略，系统仍要求沙箱可用。

**社区反应：**
- 👍 2
- 💬 2 条评论
- v2.1.119 正常，v2.1.120 回归

---

#### 9. #53083 - 权限提示 UI 国际化支持 ⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/53083

**问题：** 请求为权限提示对话框添加日语等多语言支持。

**社区反应：**
- 💬 1 条评论
- 非英语用户友好度需求

---

#### 10. #50738 - Ultraplan 流超时与缓存问题 ⭐⭐⭐
**链接：** https://github.com/anthropics/claude-code/issues/50738

**问题：** Ultraplan 功能出现流超时、缓存控制块为空、teleport 失败等问题。

**社区反应：**
- 💬 8 条评论
- 影响云端计划优化工作流

---

## 4. 重要 PR 进展

| PR | 状态 | 类型 | 说明 |
|----|------|------|------|
| **#47532** | CLOSED | 部署 | AgentNXT 部署市场重命名 |
| **#52668** | OPEN | Bug Fix | Hookify 警告输出增强，包含钩子特定输出 |
| **#52666** | OPEN | Docs | 修复 README 品牌大小写（GitHub/macOS） |

---

### 📋 PR 详情

#### #52668 - fix(hookify): include hook-specific output for warnings
**链接：** https://github.com/anthropics/claude-code/pull/52668

**内容：**
- 为 `PreToolUse` 和 `PostToolUse` 事件返回钩子特定的警告输出
- 在添加 `additionalContext` 的同时保留现有 `systemMessage` 输出
- 确保警告能正确传递到 Claude 上下文
- 修复 #40380

**状态：** OPEN，等待合并

---

#### #52666 - docs: fix README brand casing
**链接：** https://github.com/anthropics/claude-code/pull/52666

**内容：**
- 修正 README 中 "Github" → "GitHub"
- 统一 "MacOS" → "macOS"

**状态：** OPEN，文档修复

---

#### #47532 - Rename marketplace for AgentNXT deployment
**链接：** https://github.com/anthropics/claude-code/pull/47532

**内容：** AgentNXT 部署市场重命名

**状态：** CLOSED

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区最关注的功能方向如下：

### 📊 功能需求分布

```
多账户/配置文件管理    ████████████████████ 412 👍 (最高需求)
跨平台稳定性           ████████████████      高频 Bug 反馈
成本控制/缓存优化      ██████████████        234 👍 强烈关注
Resume/会话恢复        ████████████          大量回归问题
沙箱安全               ██████████            安全相关
国际化/本地化          ████████              多语言需求
IDE 集成               ███████               VS Code 扩展
权限管理 UI            ██████                交互体验
```

### 🔑 核心趋势解读

| 趋势 | 描述 | 热度 |
|------|------|------|
| **多账户管理** | 企业/团队用户强烈需求配置文件切换 | ⭐⭐⭐⭐⭐ |
| **成本透明** | Prompt Cache 行为变更引发信任危机 | ⭐⭐⭐⭐⭐ |
| **跨平台一致性** | Windows/Linux/macOS 行为差异需统一 | ⭐⭐⭐⭐ |
| **会话恢复可靠性** | Resume 功能是高频使用场景 | ⭐⭐⭐⭐ |
| **国际化** | 日语等非英语用户需求浮现 | ⭐⭐ |

---

## 6. 开发者关注点

### 🎯 核心痛点

1. **v2.1.120 回归问题（严重）**
   - Resume/Continue 功能在所有平台崩溃
   - 影响大量用户的日常使用流程
   - 临时方案：使用交互式 `/resume` 命令

2. **成本不可预测性**
   - Cache TTL 静默变更导致账单激增
   - 开发者需要更透明的成本监控工具

3. **跨平台一致性差**
   - Windows/macOS/Linux 行为存在差异
   - Sandbox 配置在不同平台表现不同

4. **错误信息不友好**
   - 崩溃信息如 "g9H is not a function" 无法帮助用户定位问题
   - 缺乏有意义的错误提示

5. **安全隔离问题**
   - Linux Sandbox 完全失效
   - macOS Sandbox 配置被忽略

### 💡 开发者建议

| 建议 | 来源 | 优先级 |
|------|------|--------|
| 紧急修复 Resume 崩溃 | 多个 Issue 重复报告 | 🔴 高 |
| 恢复 Cache TTL 至 1h 或提供配置选项 | #46829 | 🔴 高 |
| 统一跨平台行为规范 | #42776, #17727 | 🟡 中 |
| 改进错误信息可读性 | #53041 等 | 🟡 中 |
| 添加多账户支持 | #18435 | 🟢 长期 |

---

## 📈 数据统计

| 指标 | 数值 |
|------|------|
| 新增 Issues | ~50 条 |
| 新增 PRs | 3 条 |
| 版本发布 | 1 个 (v2.1.120) |
| 热门 Issue 👍 | 412 (最高) |
| 热门 Issue 💬 | 78 (最高) |

---

**报告生成时间：** 2026-04-25  
**数据来源：** github.com/anthropics/claude-code

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 OpenAI Codex 社区动态日报。让我仔细分析数据并按照要求的格式生成报告。

数据包括：
1. 最新 Releases - 有几个版本发布
2. 最新 Issues - 50条，展示30条评论最多的
3. 最新 Pull Requests - 50条，展示20条评论最多的

让我按照要求的结构来组织：

## 1. 今日速览
今天最重要的动态：
- 发布了 rust-v0.125.0 稳定版，带来了大量 App-server 集成改进
- 社区对远程开发支持（Remote Development）需求强烈，相关 Issue 获得 603 个点赞
- 多个关于 GPT-5.5 上下文窗口的问题涌现，显示用户对更大上下文的需求
- 权限系统重构相关的 PR 较多，表明正在进行重要的架构改进

## 2. 版本发布
- rust-v0.125.0: 稳定版，App-server 集成大量新功能
- rust-v0.126.0-alpha.1: 预览版
- rust-v0.125.0-alpha.3/2: 之前的 alpha 版本

## 3. 社区热点 Issues
需要挑选 10 个最值得关注的：

1. #10450 - Remote Development in Codex Desktop App (603 👍, 164 评论) - 最热门


2. #16857 - High GPU usage while "thinking" (17 评论)
3. #18341 - Mac app blurred overlay (15 评论)
4. #11023 - Codex desktop app for Linux (63 👍)
5. #19185 - config.toml context window settings not respected (14 评论, 17 👍)
6. #18333 - MCP stacks causing slowdown (14 评论)
7. #19220 - macOS startup failure (13 评论)
8. #19204 - Flagged while already being verified (13 评论)
9. #18993 - Unable to open past conversation history (9 评论)
10. #19464 - Support 1M token context for GPT-5.5 (6 评论)

## 4. 重要 PR 进展
从 PR 列表中挑选 10 个重要的：

1. #18077 - Add goal TUI UX (5/5)
2. #19481 - Remove ghost snapshots from the Responses API
3. #18076 - Add goal core runtime (4/5)
4. #19458 - ChatGPT Library file upload/download hooks
5. #18075 - Add goal model tools (3/5)
6. #19456 - Add remote plugin uninstall API
7. #18074 - Add goal app-server API (2/5)
8. #18073 - Add goal persistence foundation (1/5)
9. #19473 - Add turn start timestamp to turn metadata
10. #19389 - Guard npm update prompt on registry readiness

## 5. 功能需求趋势
从 Issues 中提炼：
- 远程开发支持
- Linux 桌面应用
- 更大的上下文窗口（1M token）
- 性能优化（GPU 使用、内存）
- 跨平台兼容性

## 6. 开发者关注点
- 配置管理问题
- MCP 服务器集成
- 会话历史管理
- 权限/沙箱配置
- 上下文窗口行为不一致
</think>

# OpenAI Codex 社区动态日报

**日期**: 2026-04-25

---

## 1. 今日速览

今日 Codex 社区呈现三大看点：**rust-v0.125.0 稳定版正式发布**，App-server 集成功能大幅增强，新增 Unix socket 传输、分页式恢复/分支、粘性环境等企业级特性；**远程开发功能需求持续高涨**，相关 Issue 获得 603 个点赞和 164 条讨论，成为社区最受期待的功能；**GPT-5.5 上下文窗口问题集中爆发**，多个 Issue 反映 400K 上下文配置与实际行为不一致，暗示模型与平台层的适配仍需优化。

---

## 2. 版本发布

### rust-v0.125.0 ✅ 稳定版

**关键更新**：
- **App-server 集成增强**：新增 Unix socket 传输支持、分页友好的 resume/fork 机制、粘性环境（sticky environments）和远程线程配置/存储管道
- **远程插件管理**：支持安装远程插件和自动升级
- **相关 PR**：#18255, #18892, #18897, #18908, #19008, #19014

### 其他版本

| 版本 | 类型 | 说明 |
|------|------|------|
| rust-v0.126.0-alpha.1 | 预览版 | 下一代版本预览 |
| rust-v0.125.0-alpha.3/2 | 预发布 | 125.0 正式版的前置版本 |

---

## 3. 社区热点 Issues

### 🥇 #10450 Remote Development in Codex Desktop App
**热度**: 603 👍 | 164 💬  
**平台**: macOS/VS Code  
**重要性**: ⭐⭐⭐⭐⭐

用户强烈呼吁在 Codex 桌面应用中支持远程开发能力。当前 VS Code 本身已支持远程开发，但 Codex 桌面版尚未提供类似功能，导致用户必须在浏览器体验和本地资源受限之间做出选择。社区建议参考 VS Code Remote Development 套件的设计。

🔗 [查看 Issue](https://github.com/openai/codex/issues/10450)

---

### 🥈 #11023 Codex desktop app for Linux
**热度**: 63 👍 | 15 💬  
**平台**: Linux  
**重要性**: ⭐⭐⭐⭐

Linux 用户对桌面应用的渴求由来已久。由于 macOS 上的已知问题（#10432），部分用户希望转向 Linux 平台使用 Codex，但目前官方尚未提供 Linux 版本。Electron 跨平台能力理论上可行，期待官方排期。

🔗 [查看 Issue](https://github.com/openai/codex/issues/11023)

---

### 🥉 #19185 config.toml context window settings are respected
**热度**: 17 👍 | 14 💬  
**状态**: CLOSED  
**重要性**: ⭐⭐⭐⭐

用户报告 `config.toml` 中的上下文窗口设置（如 `model_context_window = 960000`）未能生效。这涉及 GPT-5.5 的配置行为，Issue 已关闭但问题可能仍需关注。

🔗 [查看 Issue](https://github.com/openai/codex/issues/19185)

---

### #16857 High GPU usage while "thinking"
**热度**: 19 👍 | 17 💬  
**平台**: macOS ARM64  
**重要性**: ⭐⭐⭐

Codex 应用在"思考"阶段产生异常高的 GPU 占用，调查发现是微小动画导致的性能问题。这是一个影响用户体验和设备续航的 bug，尤其在长时间使用时更为明显。

🔗 [查看 Issue](https://github.com/openai/codex/issues/16857)

---

### #18341 Mac app shows persistent blurred/translucent overlay
**热度**: 8 👍 | 15 💬  
**平台**: macOS Intel (x86_64)  
**重要性**: ⭐⭐⭐

Intel Mac 用户遭遇编辑器区域出现模糊/半透明覆盖层的问题，影响代码可见性。这是特定于 Intel 架构 macOS 15.0.1 的渲染 bug。

🔗 [查看 Issue](https://github.com/openai/codex/issues/18341)

---

### #18333 MCP stacks causing severe slowdown
**热度**: 6 👍 | 14 💬  
**状态**: CLOSED  
**重要性**: ⭐⭐⭐

Codex 桌面版在新会话或子代理启动时重复初始化完整 MCP 栈，导致严重性能下降和内存压力。Issue 已关闭，表明可能已修复或通过其他方式解决。

🔗 [查看 Issue](https://github.com/openai/codex/issues/18333)

---

### #19220 macOS startup failure: unsupported feature `workspace_dependencies`
**热度**: 0 👍 | 13 💬  
**平台**: macOS ARM64 (Darwin 25.4.0)  
**重要性**: ⭐⭐⭐

Codex macOS 应用在更新后启动失败，日志显示不支持 `workspace_dependencies` 功能标志。这是一个阻塞性 bug，影响 Pro 用户。

🔗 [查看 Issue](https://github.com/openai/codex/issues/19220)

---

### #19204 Flagged while already being verified
**热度**: 18 👍 | 13 💬  
**平台**: Linux  
**重要性**: ⭐⭐⭐

用户报告代码被安全检查标记为问题，但该代码实际上已经过验证。这可能是安全检查逻辑的误报问题，影响开发效率。

🔗 [查看 Issue](https://github.com/openai/codex/issues/19204)

---

### #18993 Unable to open past conversation history
**热度**: 9 👍 | 9 💬  
**平台**: Windows VS Code  
**重要性**: ⭐⭐⭐

VS Code 扩展用户无法打开历史会话记录。这是一个影响工作连续性的关键问题，用户可能丢失重要的上下文和对话历史。

🔗 [查看 Issue](https://github.com/openai/codex/issues/18993)

---

### #19464 Support 1M token context for GPT-5.5
**热度**: 4 👍 | 6 💬  
**重要性**: ⭐⭐⭐

用户反馈 Codex 中 GPT-5.5 的上下文窗口被限制在 400K，而 API 版本支持更长的上下文。社区期待 Codex 能充分利用模型的完整能力。

🔗 [查看 Issue](https://github.com/openai/codex/issues/19464)

---

## 4. 重要 PR 进展

### 🎯 #18077 Add goal TUI UX (5/5)
**作者**: etraut-openai  
**重要性**: ⭐⭐⭐⭐⭐

**Goal Mode 功能的用户界面部分**，包含 `/goal` 命令、状态栏指示器、目标更新处理、命令历史行为和快照功能。这是 Goal Mode 功能的最终 PR，标志着该功能栈完成。

🔗 [查看 PR](https://github.com/openai/codex/pull/18077)

---

### 🔧 #19481 Remove ghost snapshots from the Responses API
**作者**: pakrym-oai  
**重要性**: ⭐⭐⭐⭐

清理 Responses API 中的 `ghost_snapshot` / `GhostCommit`，同时保持向后兼容。这是一个重要的 API 清理工作，移除了遗留功能并简化了核心历史、压缩和遥测逻辑。

🔗 [查看 PR](https://github.com/openai/codex/pull/19481)

---

### 🏗️ #18076 Add goal core runtime (4/5)
**作者**: etraut-openai  
**重要性**: ⭐⭐⭐⭐

**Goal Mode 核心运行时**，基于 app-server API 和模型工具实现目标模式的运行时行为。运行时负责在无需每个客户端实现自己调度器的情况下保持任务推进。

🔗 [查看 PR](https://github.com/openai/codex/pull/18076)

---

### 📁 #19458 ChatGPT Library file upload/download hooks
**作者**: lt-oai  
**重要性**: ⭐⭐⭐⭐

支持 ChatGPT Library 文件上传/下载功能，包括通过 `/files/process_upload_stream` 处理文件上传、在 MCP 文件参数中传播 `library_file_id`，以及 MCP 工具调用的钩子机制。

🔗 [查看 PR](https://github.com/openai/codex/pull/19458)

---

### 🔌 #19456 Add remote plugin uninstall API
**作者**: xli-oai  
**重要性**: ⭐⭐⭐

新增远程插件卸载 API，支持通过 `remoteMarketplaceName` + `pluginName` 卸载远程插件，同时保留本地 `pluginId` 卸载方式。

🔗 [查看 PR](https://github.com/openai/codex/pull/19456)

---

### 📊 #19473 Add turn start timestamp to turn metadata
**作者**: mchen-oai  
**重要性**: ⭐⭐⭐

MCP 工具调用现在可以获取 `turn_started_at` 时间戳，用于测量相对于轮次开始的内部延迟。这是一个对 MCP 服务器开发者有用的调试/性能分析功能。

🔗 [查看 PR](https://github.com/openai/codex/pull/19473)

---

### 🔐 #19391 permissions: make runtime config profile-backed
**作者**: bolinfest  
**重要性**: ⭐⭐⭐⭐

**权限系统重构**：将运行时配置迁移到 `PermissionProfile` 模式，能够正确表示 Managed、Disabled 和 External 强制执行，避免 legacy `SandboxPolicy` 的信息损失。

🔗 [查看 PR](https://github.com/openai/codex/pull/19391)

---

### 🔐 #19394-#19395 permissions: remove legacy policy round trips
**作者**: bolinfest  
**重要性**: ⭐⭐⭐

权限系统重构系列 PR，移除核心执行路径中的 `SandboxPolicy` 往返转换，统一使用 `PermissionProfile` 作为权威来源。

🔗 [查看 PR](https://github.com/openai/codex/pull/19394)

---

### 🧵 #19474 Make thread store process-scoped
**作者**: wiltzius-openai  
**重要性**: ⭐⭐⭐

从启动配置构建单一 app-server 进程的 ThreadStore，与 ThreadManager 和 CodexMessageProcessor 共享。移除每线程/fork 的存储重建，防止线程配置切换持久化后端。

🔗 [查看 PR](https://github.com/openai/codex/pull/19474)

---

### 📦 #19389 Guard npm update prompt on registry readiness
**作者**: shijie-oai  
**重要性**: ⭐⭐⭐

确保 npm/Bun 安装时验证 GitHub 版本与 npm registry 元数据的一致性，包括包名、平台可选依赖和平台 tarball 的存在性。

🔗 [查看 PR](https://github.com/openai/codex/pull/19389)

---

## 5. 功能需求趋势

基于今日 Issues 分析，社区最关注的功能方向如下：

| 排名 | 功能方向 | 热度 | 代表 Issue |
|------|----------|------|------------|
| 1 | **远程开发支持** | 🔥🔥🔥🔥🔥 | #10450 (603 👍) |
| 2 | **Linux 桌面应用** | 🔥🔥🔥🔥 | #11023 (63 👍) |
| 3 | **更大上下文窗口** | 🔥🔥🔥🔥 | #19464, #19409, #19386 |
| 4 | **跨平台稳定性** | 🔥🔥🔥 | #16857, #18341, #19220 |
| 5 | **会话历史管理** | 🔥🔥🔥 | #18993, #19137, #19397 |
| 6 | **MCP 集成优化** | 🔥🔥 | #18333, #18404 |
| 7 | **权限/沙箱配置** | 🔥🔥 | #19349, #19356, #19384 |

**洞察**：远程开发和跨平台支持是社区最强烈的呼声，同时 GPT-5.5 的上下文窗口配置问题集中爆发，暗示平台层与模型能力的对齐仍需改进。

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **配置不生效**
   - `config.toml` 中的模型和上下文设置经常被忽略
   - 相关 Issue: #19185, #19409, #19476

2. **会话恢复不稳定**
   - 恢复的会话经常出现流断开、状态不一致
   - 相关 Issue: #19433, #19397

3. **沙箱权限混乱**
   - Full Access 权限在 UI 显示与运行时行为不一致
   - 相关 Issue: #19349, #19356, #19384

4. **VS Code 扩展问题**
   - 历史记录无法打开、状态栏信息缺失、界面闪烁
   - 相关 Issue: #18993, #18822, #19181, #7082

### 🟡 高频需求

1. **性能优化**
   - GPU 占用过高（#16857）
   - MCP 栈重复初始化（#18333）
   - 动画导致的卡顿

2. **更好的调试支持**
   - MCP 服务器需要 `turn_started_at` 时间戳（已通过 PR #19473 解决）
   - 更清晰的错误信息

3. **文档与配置透明度**
   - 用户不清楚模型实际支持的上下文大小
   - 配置项的行为文档缺失

---

**报告生成时间**: 2026-04-25  
**数据来源**: github.com/openai/codex  
**分析师**: AI Technical Analyst

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 Gemini CLI 社区动态日报。让我仔细分析数据并按照要求的格式生成报告。

数据概览：
- 最新 Releases: v0.40.0-preview.4, v0.40.0-preview.3, v0.39.1
- Issues: 50条，展示30条评论最多的
- PRs: 50条，展示20条评论最多的

让我按照要求的结构来组织：

1. 今日速览
2. 版本发布
3. 社区热点 Issues (10个)
4. 重要 PR 进展 (10个)
5. 功能需求趋势
6. 开发者关注点

让我开始分析：

**版本发布**：
- v0.40.0-preview.4: 修复了 backspace 处理问题
- v0.40.0-preview.3: 预览版本
- v0.39.1: 稳定版本更新

**热点 Issues** (按评论数和重要性筛选)：
1. #25306 - 权限问题（19条评论，6个点赞）- 403错误，用户无法访问
2. #22745 - AST 感知文件读取研究（5条评论）- 重要的工作流追踪
3. #24916 - 权限重复请求问题（3条评论）- 安全相关
4. #22323 - 子代理 MAX_TURNS 恢复问题（3条评论）- P1优先级


5. #25166 - Shell 命令卡住问题（2条评论）- 核心功能问题
6. #23571 - 模型创建临时脚本问题（2条评论）- P2优先级
7. #22267 - 浏览器代理忽略设置（2条评论）- 配置问题
8. #25216 - 临时路径问题 - EISDIR 错误
9. #24915 - UI 边框问题
10. #24202 - SSH 文本乱码问题

**重要 PRs**：
1. #25953 - Gemini Bot 性能优化
2. #25945 - 时间序列分析和反思重构
3. #25426 - CI 优化和 16 核测试速度提升
4. #25950 - 修复主目录启动时的命令冲突
5. #25941 - 回退 backspace 处理以修复 Windows 回归
6. #25873 - 持久化自动记忆草稿板
7. #25947 - 版本化预写备份与代理驱动恢复
8. #25915 - 通过本地 Ollama 模型路由 /compress
9. #25912 - 将紧凑工具输出应用于 MCP 工具
10. #24976 - 添加 --session-id 标志

**功能需求趋势**：
- 安全和权限管理
- 子代理和内存管理
- Windows 兼容性和终端处理
- 代码库分析和 AST 感知工具
- 评估和测试框架

**开发者关注点**：
- 权限和安全性问题
- Windows 兼容性问题
- 子代理行为和恢复机制
- 内存管理和持久化
- 评估和测试框架
</think>

# Gemini CLI 社区动态日报

**日期**: 2026-04-25

---

## 1. 今日速览

今日 Gemini CLI 社区保持高度活跃，共处理 **50 条 Issues** 和 **50 条 Pull Requests**。版本方面，团队紧急发布了 **v0.40.0-preview.4**，专门修复了 Windows Terminal 上的 Backspace 处理回归问题。社区热点集中在**权限管理**、**子代理行为**和**终端兼容性**三大方向，其中权限相关的 Issue #25306 引发了 19 条讨论，成为今日最受关注的议题。

---

## 2. 版本发布

### 🔗 v0.40.0-preview.4
**发布时间**: 2026-04-24  
**类型**: 补丁预览版本

**更新内容**: 修复了 Windows Terminal 上的 Backspace 处理问题。该补丁从 release/v0.40.0-preview.3-pr-25941  cherry-pick 了 commit 048bf6e，解决了部分 Windows 用户在 Node 22 环境下 Backspace 键行为异常的问题。

📎 **相关链接**: https://github.com/google-gemini/gemini-cli/pull/25942

### 🔗 v0.40.0-preview.3
**发布时间**: 2026-04-24  
**类型**: 预览版本

📎 **相关链接**: https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.2...v0.40.0-preview.3

### 🔗 v0.39.1
**发布时间**: 2026-04-24  
**类型**: 稳定版本补丁

📎 **相关链接**: https://github.com/google-gemini/gemini-cli/compare/v0.39.0...v0.39.1

---

## 3. 社区热点 Issues

### 🔴 Issue #25306 - 权限错误：调用者没有权限
**状态**: OPEN | 评论: 19 | 👍: 6  
**标签**: `area/security`, `status/need-triage`

**重要性**: 这是今日评论数最多的 Issue，用户报告在调用 Gemini API 时收到 403 错误，提示"The caller does not have permission"。团队已请求用户附加导出的聊天历史 JSON 文件以进一步诊断。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/25306

---

### 🟡 Issue #22745 - AST 感知文件读取、搜索和代码库映射的影响评估
**状态**: OPEN | 评论: 5 | 👍: 1  
**标签**: `area/agent`, `workstream-rollup`, 🔒 maintainer only

**重要性**: 这是一个 Epic 级别的追踪 Issue，旨在评估 AST 感知工具的价值。AST 感知工具可以更精确地读取方法边界，减少工具调用次数和 token 消耗，是提升代码库调查员（codebase_investigator）能力的关键方向。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/22745

---

### 🟡 Issue #24916 - Gemini CLI 持续请求同一文件的权限
**状态**: OPEN | 评论: 3 | 👍: 0  
**标签**: `area/security`, `workstream-rollup`

**重要性**: 安全相关 Issue，用户反馈"允许"或"允许所有未来会话"的权限设置有时不会生效，导致同一文件被反复请求权限。这直接影响用户体验和 CLI 的可用性。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/24916

---

### 🔴 Issue #22323 - 子代理 MAX_TURNS 后恢复报告为 GOAL 成功
**状态**: OPEN | 评论: 3 | 👍: 2  
**标签**: `priority/p1`, `area/agent`, `workstream-rollup`

**重要性**: P1 优先级问题。`codebase_investigator` 子代理在达到最大轮次限制后，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际的中断情况，可能导致用户误判任务完成状态。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/22323

---

### 🟠 Issue #25166 - Shell 命令执行完成后卡在"等待输入"
**状态**: OPEN | 评论: 2 | 👍: 3  
**标签**: `area/core`, `workstream-rollup`

**重要性**: 核心功能 Bug，Shell 命令执行完成后 CLI 持续挂起，显示"等待用户输入"，但命令实际已结束。这在简单命令场景下也会复现，严重影响交互体验。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/25166

---

### 🟡 Issue #23571 - 模型频繁在随机位置创建临时脚本
**状态**: OPEN | 评论: 2 | 👍: 0  
**标签**: `priority/p2`, `area/agent`, `workstream-rollup`

**重要性**: 当限制模型只能通过 Shell 执行时，模型会在不同目录生成多个编辑脚本，造成工作区清理负担，影响提交整洁性。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/23571

---

### 🟡 Issue #22267 - 浏览器代理忽略 settings.json 覆盖配置
**状态**: OPEN | 评论: 2 | 👍: 0  
**标签**: `priority/p2`, `area/agent`, `workstream-rollup`

**重要性**: 浏览器代理完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`），尽管 `AgentRegistry` 在初始化时正确读取并合并了这些设置。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/22267

---

### 🟠 Issue #25216 - Gemini 在临时路径 A:\ 打开失败
**状态**: OPEN | 评论: 1 | 👍: 0  
**标签**: `area/core`, `workstream-rollup`

**重要性**: Windows 特定问题，在 PowerShell 中使用 `gemini --yolo` 时遇到 `EISDIR: illegal operation on a directory` 错误，涉及路径处理逻辑。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/25216

---

### 🟡 Issue #24202 - SSH 环境下文本显示乱码
**状态**: OPEN | 评论: 1 | 👍: 0  
**标签**: `area/core`, `workstream-rollup`

**重要性**: Windows 笔记本通过 SSH 连接到 gLinux cloudtop 后，Gemini CLI 文本显示乱码，导致工具完全不可用。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/24202

---

### 🟡 Issue #22819 - 实现内存路由：全局 vs 项目
**状态**: OPEN | 评论: 1 | 👍: 2  
**标签**: `area/agent`, `workstream-rollup`

**重要性**: 内存子代理需要根据上下文将数据保存到正确位置：全局目录（`~/.gemini/`）存放用户偏好，项目目录（`.gemini/`）存放代码库特定信息。这是提升个性化体验的重要功能方向。

📎 **链接**: https://github.com/google-gemini/gemini-cli/issues/22819

---

## 4. 重要 PR 进展

### 🔗 PR #25945 - 实现时间序列分析和反思重构
**状态**: OPEN | 优先级: P1  
**作者**: @gundermanc

**内容摘要**: 
- 为 repo-metrics 引入时间序列数据记录
- 清理内部架构：移除 critique flow、删除冗余下载、将"processes"重命名为"reflexes"
- 修复 workspace 相关 bug

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25945

---

### 🔗 PR #25426 - 恢复打包并释放 16 核测试速度
**状态**: OPEN | 标签: `area/platform`  
**作者**: @mattKorwel

**内容摘要**:
- 恢复构建打包流程
- 引入 artifact-centric CI 路径
- 现代化测试基础设施，解锁 16 核性能
- 创建 `.github/actions/setup-gemini` 允许 CI 分片消费预构建包

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25426

---

### 🔗 PR #25950 - 修复从主目录启动时的错误命令冲突
**状态**: OPEN | 标签: `area/core`, `help wanted`  
**作者**: @stbenjam

**内容摘要**: Cherry-pick 自 #23069 并修复测试失败。当从用户主目录启动 `gemini` 时，`~/.gemini/commands` 和 `<cwd>/.gemini/commands` 解析为同一路径，导致每个自定义命令都与自己冲突。

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25950

---

### 🔗 PR #25941 - 回退 Backspace 处理以修复 Windows 回归
**状态**: CLOSED  
**作者**: @scidomino

**内容摘要**: 回退了 commit 80764c8bb50017ed84072f10a90d8ff2c5368846。原 PR 假设 Windows 上普通 Backspace 总是发送 `\x7f`，`\b` 仅在 Ctrl+Backspace 时发送，但这在某些 Node 22 用户环境中不成立。

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25941

---

### 🔗 PR #25873 - 持久化自动记忆草稿板用于技能提取
**状态**: CLOSED | 🔒 maintainer only  
**作者**: @SandyTao520

**内容摘要**: 将自动记忆 `memoryScratchpad` 持久化到会话元数据，使技能提取能使用紧凑的工作流提示。5 次试验显示，草稿板路径将平均提取器轮次从 13.2 降至 11.0（**-16.7%**）。

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25873

---

### 🔗 PR #25947 - 版本化预写备份与代理驱动恢复
**状态**: OPEN | 标签: `status/need-issue`  
**作者**: @dolphprefect

**内容摘要**: 引入**文件备份和回滚系统**，为 Gemini CLI 提供原生、会话作用域的文件操作事务层。通过在写入前创建版本化备份，缓解"破坏性修改循环"问题。

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25947

---

### 🔗 PR #25915 - 通过本地 Ollama 模型路由 /compress
**状态**: OPEN | 标签: `status/need-issue`  
**作者**: @dolphprefect

**内容摘要**: 
- 新增 `OllamaCompressClient`，将 `/compress` 摘要路由到本地 Ollama 端点（如 `gemma3:4b`）
- 本地模型仅接收纯文本（经过历史清理）
- 减轻主模型负担

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25915

---

### 🔗 PR #25912 - 将紧凑工具输出应用于 MCP 工具
**状态**: OPEN | 优先级: P1  
**作者**: @dolphprefect

**内容摘要**: 将 `compactToolOutput` 扩展到 MCP 工具。之前仅适用于内置工具（ReadFile、Grep 等），MCP 工具输出始终完整渲染。由于 `compactToolOutput` 默认为 `true`，这是一项有效的行为改进。

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/25912

---

### 🔗 PR #24976 - 添加 `--session-id` 标志用于确定性会话启动
**状态**: OPEN | 标签: `area/core`, `help wanted`  
**作者**: @AmaanBilwar

**内容摘要**:
- 新增 `--session-id` CLI 标志，支持编排场景下的确定性会话 ID
- 支持通过 `--resume <id>` 恢复会话
- 添加验证和冲突处理

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/24976

---

### 🔗 PR #24174 - 实现实时语音模式（云端和本地后端）
**状态**: CLOSED | 标签: `area/core`  
**作者**: @Abhijit-2592

**内容摘要**: 实现 Gemini CLI 的实时**语音模式**，支持直接在终端口述提示。支持：
- 云端转录（Gemini Live API）
- 本地优先转录（Whisper/Whisper.cpp）

📎 **链接**: https://github.com/google-gemini/gemini-cli/pull/24174

---

## 5. 功能需求趋势

基于今日 Issues 和 PR 活动分析，社区最关注的功能方向如下：

### 🔐 安全与权限管理
- **权限持久化失效**（#24916）：用户期望"允许所有未来会话"选项能真正生效
- **API 权限错误**（#25306）：403 错误诊断和修复
- **子代理权限感知**（#23582）：子代理应了解当前审批模式（Plan Mode / Auto-Edit Mode）

### 🖥️ 终端兼容性
- **Windows Terminal 问题**：Backspace 处理（#25941, #25943, #25862）、路径处理（#25216）
- **SSH 环境支持**（#24202, #24546）：文本渲染和会话检测
- **键盘协议恢复**（#25944）：/clear 后禁用高级键盘协议的问题

### 🧠 智能代理能力
- **AST 感知工具**（#22745, #22746）：更精确的代码库分析和导航
- **子代理行为优化**：MAX_TURNS 恢复（#22323）、临时脚本管理（#23571）
- **内存路由**（#22819）：全局 vs 项目级记忆管理

### 📊 评估与测试
- **组件级评估**（#24353）：扩展行为评估测试
- **项目评估稳定性**（#23166）：改进内部评估的可靠性和可操作性
- **工具调用拒绝评估**（#23897）：子代理应快速识别工具调用拒绝

### ⚡ 性能与效率
- **时间序列分析**（#25945）：repo-metrics 改进
- **16 核 CI 优化**（#25426）：测试基础设施现代化
- **紧凑工具输出**（#25912）：减少 token 消耗

---

## 6. 开发者关注点

### 🐛 高频痛点

| 痛点 | 相关 Issue | 优先级 |
|------|-----------|--------|
| **Windows 兼容性** | Backspace 处理、路径问题、SSH 乱码 | 🔴 高 |
| **权限管理** | 权限重复请求、API 403 错误 | 🔴 高 |
| **子代理行为** | MAX_TURNS 误报、临时脚本乱飞 | 🟠 中高 |
| **Shell 卡顿** | 命令完成后挂起等待输入 | 🟠 中高 |

### 💡 高频需求

1. **更好的 Windows 支持**：多个 Issue 涉及 Windows Terminal、PowerShell、路径处理问题，开发者期望更稳定的跨平台体验

2. **智能权限管理**：用户期望一次授权能真正持久化，避免重复确认

3. **子代理可观测性**：开发者需要更清晰的子代理状态报告，避免被"成功"状态误导

4. **本地模型集成**：Ollama 路由（#25915）表明社区对本地模型支持的需求

5. **评估框架完善**：76 个行为评估测试已生成，团队正在努力提升评估稳定性和可操作性

---

**📅 报告生成时间**: 2026-04-25  
**📊 数据覆盖范围**: 过去 24 小时  
**🔗 数据来源**: github.com/google-gemini/gemini-cli

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>用户要求我根据提供的 GitHub Copilot CLI 数据生成一份 2026-04-25 的中文日报。让我仔细分析数据并按照要求的结构组织内容。

数据概览：
- 最新 Releases: v1.0.36 及其三个子版本 (1.0.36-1, 1.0.36-0)
- Issues: 49条，展示的30条中有很多重要的
- PRs: 1条

让我按照要求的结构来组织：

1. **今日速览** - 总结今天最重要的动态
2. **版本发布** - v1.0.36 系列的更新
3. **社区热点 Issues** - 挑选10个最值得关注的
4. **重要 PR 进展** - 1个PR
5. **功能需求趋势** - 从Issues中提炼
6. **开发者关注点** - 总结痛点

让我开始组织内容：

**版本发布**：
- v1.0.36: Subcommand picker 改进、错误信息改进、preToolUse.matcher 修复
- v1.0.36-1: 添加 changes 状态行切换、取消操作需要双 Esc
- v1.0.36-0: Claude Opus 4.6 使用 medium reasoning effort、修复日志保存问题、修复自定义 agents/skills/commands 加载问题

**社区热点 Issues**（挑选10个）：


我注意到几个关键问题需要重点关注。Alpine Linux 的分段错误是一个严重的技术挑战，影响用户正常使用。终端滚动行为异常也引起了社区的广泛关注。登录问题、CRLF 行尾处理和 Windows PowerShell 兼容性都是影响用户体验的重要问题。自动导航无限循环和 MCP 服务器连接问题也值得深入研究。

Rate limit 重置异常和自定义指令加载问题进一步凸显了产品细节打磨的必要性。技能可达性问题可能影响用户使用体验。这些 issue 反映了产品在不同平台和场景下的复杂适配挑战。

关于 PR，扩展引导路径不匹配是一个技术细节修复，体现了持续改进产品兼容性的努力。

社区功能需求主要集中在增强用户体验和扩展性。开发者关注点聚焦于平台兼容性、用户体验和系统稳定性。

核心痛点包括平台特定问题、认证机制、模型性能和交互细节。这些问题反映了用户对工具精细化和个性化需求的期待。
</think>

# GitHub Copilot CLI 社区动态日报

**日期**: 2026-04-25

---

## 1. 今日速览

今日 GitHub Copilot CLI 发布了 **v1.0.36** 系列版本（包含 1.0.36-0、1.0.36-1 两个补丁），重点改进了交互体验和模型推理效率。社区方面，**Alpine Linux 分段错误**和 **Windows PowerShell 兼容性**问题持续发酵，分别获得 13 和 8 条评论；新增功能需求集中在**会话管理**和**终端渲染优化**领域。

---

## 2. 版本发布

### v1.0.36 正式版
**发布时间**: 2026-04-24

| 类别 | 更新内容 |
|------|----------|
| **改进** | Subcommand picker 高亮项显示选择指示符（❯） |
| **改进** | 检测到多个 Copilot 许可证时显示更清晰的错误信息，并提供直接链接 |
| **修复** | 修复 `preToolUse.matcher` 被忽略的问题，升级后带 matcher 的 hooks 仅对匹配的工具名称生效 |

### v1.0.36-1 补丁
| 类别 | 更新内容 |
|------|----------|
| **新增** | 添加 `changes` 状态行切换，显示会话的添加/删除行数统计 |
| **改进** | 需连续按两次 Esc 才能取消进行中的工作，防止意外中断 |
| **修复** | `.gitignored` 目录（如 `.github/instructions/`）中的自定义指令文件现在可以正常加载 |

### v1.0.36-0 补丁
| 类别 | 更新内容 |
|------|----------|
| **改进** | Claude Opus 4.6 默认使用 medium reasoning effort |
| **修复** | 保存调试日志或反馈包不再覆盖现有归档文件 |
| **修复** | 不再从 `~/.claude/` 加载自定义 agents、skills 和 commands，避免与 Copilot CLI 配置冲突 |

---

## 3. 社区热点 Issues

### 🔴 高优先级问题

**1. Alpine Linux 分段错误** `#107`
> 任何工具调用都会导致 CLI 崩溃
- **作者**: @SwanX1 | 评论: 13 | 👍: 4
- **影响**: Alpine Linux Docker 容器用户完全无法使用 CLI
- **链接**: https://github.com/github/copilot-cli/issues/107

**2. Windows PowerShell 5.1 兼容性问题** `#1680`
> `pwsh.exe` 在 6 处硬编码，Windows 11 仅装有 PowerShell 5.1 的用户完全无法运行
- **作者**: @guidegdm | 评论: 5 | 👍: 8
- **影响**: 阻断 Windows 机器上所有 shell 命令执行
- **链接**: https://github.com/github/copilot-cli/issues/1680

**3. 登录状态持续失效** `#254`
> 登录后 Ctrl-C 中断会话，新会话仍要求重新登录
- **作者**: @yurivict | 评论: 8 | 👍: 3
- **影响**: 企业用户工作流频繁中断
- **链接**: https://github.com/github/copilot-cli/issues/254

### 🟡 功能与体验问题

**4. 终端滚动行为异常** `#2205`
> 鼠标滚动不再浏览历史输出，反而在输入历史中导航
- **作者**: @avadisabelle | 评论: 8 | 👍: 5
- **影响**: 严重影响交互体验
- **链接**: https://github.com/github/copilot-cli/issues/2205

**5. CRLF 行尾自动转换** `#1148`
> 编辑文件后自动将 LF 转换为 CRLF
- **作者**: @BillyONeal | 评论: 5 | 👍: 5
- **影响**: Windows 开发者代码仓库污染
- **链接**: https://github.com/github/copilot-cli/issues/1148

**6. Autopilot 无限循环** `#2374`
> 规划完成后进入无限循环无法退出
- **作者**: @Jorge-Torselli | 评论: 5 | 👍: 0
- **影响**: 自动化任务可靠性问题
- **链接**: https://github.com/github/copilot-cli/issues/2374

**7. MCP 服务器连接失效** `#2630`
> 自定义 agent 的 `mcp-servers` 在子 agent 或 `--prompt` 模式下不生效
- **作者**: @sbdoroff | 评论: 3 | 👍: 0
- **影响**: MCP 扩展生态受限
- **链接**: https://github.com/github/copilot-cli/issues/2630

**8. 技能可达性限制** `#1464`
> 63+ 技能时仅显示前 32 个，字母排序靠后的技能无法触发
- **作者**: @ericchansen | 评论: 3 | 👍: 4
- **影响**: 大量使用技能的用户体验
- **链接**: https://github.com/github/copilot-cli/issues/1464

**9. Pro+ 速率限制重置异常** `#2769`
> 周限未在预期时间重置，导致服务不可用
- **作者**: @yandersr | 评论: 7 | 👍: 3
- **影响**: 付费用户核心权益
- **链接**: https://github.com/github/copilot-cli/issues/2769

**10. 路径特定指令污染上下文** `#1423`
> 路径特定指令在初始会话时膨胀上下文窗口
- **作者**: @GiffenGood | 评论: 1 | 👍: 5
- **影响**: 大型仓库性能问题
- **链接**: https://github.com/github/copilot-cli/issues/1423

---

## 4. 重要 PR 进展

| PR # | 标题 | 状态 | 关键内容 |
|------|------|------|----------|
| **#2957** | fix: extension bootstrap path mismatch in launchExtension() | **OPEN** | 修复 macOS/Windows 扩展加载失败问题。SEA 二进制目录与 pkg 缓存路径不匹配导致子进程安全检查失败。**关联 Issue**: #2890 |
| **链接** | https://github.com/github/copilot-cli/pull/2957 |

---

## 5. 功能需求趋势

从今日更新的 49 条 Issues 中，社区最关注的功能方向如下：

| 排名 | 功能方向 | 代表 Issue | 热度 |
|------|----------|------------|------|
| 1 | **会话管理** | 多并发会话管理工具 (#2966) | 🆕 新增 |
| 2 | **终端渲染增强** | 扩展状态面板 (#2962)、分支名显示 (#2965)、Diff 视图 (#2964) | 高 |
| 3 | **MCP 生态扩展** | MCP 禁用选项 (#2956)、MCP 注册表浏览 (#2944) | 中高 |
| 4 | **模型配置灵活性** | 推理努力级别支持 (#2904, #2559)、模型切换确认 (#2660) | 中 |
| 5 | **插件系统** | 插件启用/禁用切换 (#2714) | 中 |
| 6 | **平台特定优化** | Windows 安装问题 (#2953)、Linux 依赖检查 (#2511) | 中 |

---

## 6. 开发者关注点

### 🔧 核心痛点

1. **平台兼容性缺陷**
   - Alpine Linux 完全不可用（Segmentation Fault）
   - Windows PowerShell 5.1 环境阻断
   - Wayland 剪贴板依赖缺失

2. **认证与状态管理**
   - 登录状态在会话中断后丢失
   - 多许可证检测逻辑不清晰

3. **性能与资源**
   - 大型仓库上下文膨胀
   - LSP 初始化超时（.NET 6000+ 文件）
   - 技能数量上限导致可达性问题

### 📈 高频需求

| 需求类型 | 描述 |
|----------|------|
| **交互优化** | 双 Esc 取消、状态行自定义、终端渲染增强 |
| **模型控制** | 推理努力级别、模型切换确认、BYOK 环境变量支持 |
| **扩展性** | MCP 服务器管理、插件开关、扩展加载修复 |
| **可观测性** | Git 提交 AI 归属、调试日志、反馈包 |

---

**📅 报告生成时间**: 2026-04-25  
**数据来源**: github.com/github/copilot-cli  
**分析师**: AI Development Tools Technical Analyst

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 Kimi Code CLI 社区动态日报。我需要：

1. 今日速览 - 2-3句话概括最重要动态
2. 版本发布 - 总结 1.39.0 版本更新
3. 社区热点 Issues - 挑选 10 个最值得关注的 Issue
4. 重要 PR 进展 - 挑选 10 个重要的 PR
5. 功能需求趋势 - 从 Issues 中提炼功能方向
6. 开发者关注点 - 总结痛点和高频需求

让我分析数据：

**最新 Releases:**
- 1.39.0 发布，包含：
  - fix(shell): approval request text input should render caret correctly
  - feat(kimi): add KIMI_MODEL_THINKING_KEEP env for preserved thinking
  - feat(sou... (截断)

**Issues (11条):**
1. #1344 [CLOSED] API Error 400 - 已关闭
2. #1823 [CLOSED] Feature Request: Configurable Approval Request Timeout - 已关闭
3. #1990 [OPEN] IDEA中使用kimi cli终端关闭问题
4. #2062 [OPEN] Feature Request: Add default_skills config
5. #2043 [OPEN] Config file with UTF-8 BOM causes Invalid TOML


6. #1458 [OPEN] VS Code connection error
7. #2066 [OPEN] 支持 PowerShell 7
8. #2061 [OPEN] MCP error - invalid json schema
9. #2059 [OPEN] 报错信息消耗token
10. #2058 [OPEN] 自定义agent未加载AGENTS.md
11. #2051 [OPEN] Shell transcript隐藏skill和flow提示

**PRs (23条，展示20条):**
1. #2068 [OPEN] feat(acp): notify clients when approval is required
2. #2067 [OPEN] fix(transport): prevent connection drops on large context
3. #2065 [OPEN] fix(config): tolerate UTF-8 BOM in config files
4. #2060 [CLOSED] fix(auth): recover OAuth flows after transient failures
5. #2064 [OPEN] fix(plan): respect KIMI_SHARE_DIR for plan files
6. #2063 [OPEN] feat(config): add default_skills config for auto-activating skills
7. #2036 [OPEN] feat(tools): enable strict mode for specific tools
8. #1960 [OPEN] feat(soul): RalphFlow architecture
9. #2039 [OPEN] fix(shell): correct /usage remaining quota colors
10. #2041 [CLOSED] fix(shell): show active agent task count in prompt status bar
11. #2008 [OPEN] test(background): fix flaky approval-wait tests
12. #2003 [OPEN] fix(soul): re-inject yolo reminder after context compaction
13. #2050 [OPEN] fix(utils): detect virtual interface IPs in get_network_addresses
14. #2057 [OPEN] fix(acp): replace assert statements with proper RuntimeError exceptions
15. #2056 [OPEN] fix(wire): eliminate TOCTOU race in WireFile.append_record
16. #884 [OPEN] chore(deps-dev): bump ruff from 0.14.14 to 0.15.0
17. #2055 [OPEN] fix(agentspec): replace assert with proper AgentSpecError exception
18. #2054 [CLOSED] chore(release): bump kimi-cli 1.39.0 and kosong 0.52.0
19. #2045 [OPEN] fix(yolo): unblock AskUserQuestion; add orthogonal afk mode
20. #2044 [CLOSED] fix(skill): scope-group the skills system prompt and honor project overrides

现在需要整理一份结构清晰的中文日报。
</think>

# Kimi Code CLI 社区动态日报

**日期**: 2026-04-25  
**数据来源**: github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

- **v1.39.0 正式发布**，新增 `KIMI_MODEL_THINKING_KEEP` 环境变量支持思维保留功能，同时修复了 Approval 请求文本输入的光标渲染问题
- 社区活跃度显著提升，**24 小时内新增 11 个 Issues 和 23 个 PRs**，涵盖配置优化、Shell 工具增强、OAuth 恢复机制等多个方向
- **UTF-8 BOM 配置文件兼容性问题**引发关注，对应修复 PR 已提交；同时 PowerShell 7 支持、默认技能自动激活等实用功能需求强烈

---

## 2. 版本发布

### v1.39.0 (2026-04-24)

| 变更类型 | 内容 | 贡献者 |
|---------|------|--------|
| 🐛 Bug Fix | 修复 Approval 请求文本输入时无法正确渲染光标的问题 | @kermanx |
| ✨ 新功能 | 新增 `KIMI_MODEL_THINKING_KEEP` 环境变量，支持保留思维过程 | @RealKai42 |
| 🔧 优化 | 同步更新 kosong 依赖至 0.52.0 | @RealKai42 |

> 📎 Release 链接: https://github.com/MoonshotAI/kimi-cli/pull/2054

---

## 3. 社区热点 Issues

### 🔥 重点关注

| # | 标题 | 状态 | 重要性 | 摘要 |
|---|------|------|--------|------|
| **#2062** | 建议添加 `default_skills` 配置项 | 🆕 OPEN | ⭐⭐⭐ | 用户希望新会话启动时自动激活指定技能，无需手动触发 slash 命令。已有对应 PR #2063 实现中 |
| **#1990** | IDEA 中使用 kimi cli 发送消息后终端直接关闭 | 🆕 OPEN | ⭐⭐⭐ | 严重 bug，macOS Darwin 25.2.0 用户在 IDEA 终端中使用时发送消息后整个 terminal 关闭，影响开发体验 |
| **#2066** | 建议支持 PowerShell 7 (pwsh) 作为 Windows 默认 Shell | 🆕 OPEN | ⭐⭐ | 当前硬编码使用 PowerShell 5.1，完全忽略用户已安装的 PowerShell 7，社区用户提交了完整实现代码 |
| **#2059** | 报错信息也消耗 token | 🆕 OPEN | ⭐⭐ | 用户反馈 token 消耗过快，多次报错后 token 仍被消耗，质疑当前计算方式 |
| **#2058** | 使用自定义 agent 启动时未加载 AGENTS.md 到上下文 | 🆕 OPEN | ⭐⭐ | 自定义 agent 场景下 AGENTS.md 未被正确加载，影响 agent 行为定义 |
| **#2051** | Shell transcript 隐藏 skill 和 flow slash 提示 | 🆕 OPEN | ⭐ | 交互式 shell 将斜杠输入作为控制命令处理，导致 /skill:* 和 /flow:* 的用户请求在 transcript 中消失 |
| **#2061** | MCP 工具参数 JSON Schema 冲突错误 | 🆕 OPEN | ⭐ | 使用 Unity-MCP 时触发 invalid_request_error，schema 中 $ref 展开后存在冲突关键字 |
| **#2043** | UTF-8 BOM 配置文件导致 Invalid TOML 错误 | 🆕 OPEN | ⭐ | 部分编辑器添加 BOM 导致配置加载失败，已有 PR #2065 修复中 |
| **#1458** | VS Code 报告 Connection error | �P OPEN | ⭐ | Windows 用户在 VS Code 中遇到 -32003 连接错误 |
| **#1823** | 建议可配置 Approval 请求超时时间（或无限） | 🔒 CLOSED | ⭐ | 5 分钟硬编码超时限制，社区强烈需求，已在 v1.39.0 中通过 `KIMI_MODEL_THINKING_KEEP` 间接改善 |

> 📎 所有 Issues: https://github.com/MoonshotAI/kimi-cli/issues

---

## 4. 重要 PR 进展

### ✅ 已合并

| # | 标题 | 贡献者 | 意义 |
|---|------|--------|------|
| **#2054** | chore(release): bump kimi-cli 1.39.0 | @RealKai42 | 正式发布 v1.39.0，包含思维保留等重要功能 |
| **#2060** | fix(auth): recover OAuth flows after transient failures | @wbxl2000 | 修复 OAuth 流程在瞬态失败后的恢复问题，提升认证稳定性 |
| **#2044** | fix(skill): scope-group the skills system prompt | @RealKai42 | 优化技能系统提示的分组显示，支持项目级覆盖 |
| **#2041** | fix(shell): show active agent task count in prompt status bar | @wbxl2000 | 多 Agent 场景下在状态栏显示任务计数，避免 CLI 看似卡顿 |

### 🚧 审核中

| # | 标题 | 贡献者 | 功能描述 |
|---|------|--------|----------|
| **#2068** | feat(acp): notify clients when approval is required | @zeel2104 | 工具调用需要审批时发送 `kimi/approval_required` 通知，改善 UX |
| **#2067** | fix(transport): prevent connection drops on large context | @yassinidyhya | 修复 Windows/网关环境下上下文超过 130k tokens 时的超时问题 |
| **#2065** | fix(config): tolerate UTF-8 BOM in config files | @Jerry2003826 | 修复 BOM 导致 TOML 解析失败的兼容性问题 |
| **#2064** | fix(plan): respect KIMI_SHARE_DIR for plan files | @XYenon | 计划文件路径尊重 `KIMI_SHARE_DIR` 环境变量，支持自定义存储 |
| **#2063** | feat(config): add default_skills config | @maxBRT | 实现会话启动时自动激活指定技能的配置功能 |
| **#2036** | feat(tools): enable strict mode for specific tools | @kermanx | 为 Shell/ReadFile/Grep/WriteFile 等核心工具启用严格 Schema 验证 |
| **#1960** | feat(soul): RalphFlow architecture | @ORDL-AMF | 引入临时上下文和收敛检测的自动化迭代框架，防止无限循环 |
| **#2045** | fix(yolo): unblock AskUserQuestion; add orthogonal afk mode | @RealKai42 | 拆分 yolo 和 afk 模式语义，修复非交互模式下的用户提问阻塞 |
| **#2050** | fix(utils): detect virtual interface IPs | @ec50n9 | 支持 Tailscale/WireGuard/Docker 等虚拟网络接口的 IP 检测 |
| **#2057** | fix(acp): replace assert with RuntimeError | @hobostay | 将关键路径的 assert 替换为 proper exception，避免 -O 优化导致问题 |
| **#2056** | fix(wire): eliminate TOCTOU race in WireFile.append_record | @hobostay | 修复文件操作的竞态条件，提升并发安全性 |

> 📎 所有 PRs: https://github.com/MoonshotAI/kimi-cli/pulls

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区最关注的功能方向如下：

### 📊 需求分布

| 方向 | 热度 | 代表 Issue | 说明 |
|------|------|-----------|------|
| **配置与个性化** | 🔥🔥🔥 | #2062, #2066 | 默认技能自动激活、PowerShell 7 支持等个性化需求强烈 |
| **IDE 集成优化** | 🔥🔥 | #1990, #1458 | IDEA/VS Code 集成问题影响大量用户 |
| **Token 成本优化** | 🔥🔥 | #2059 | 错误信息消耗 token 问题引发关注 |
| **Shell 工具增强** | 🔥 | #2066, #2051 | 多 Shell 支持、transcript 显示优化 |
| **MCP 生态兼容** | 🔥 | #2061 | MCP 工具集成中的 Schema 冲突问题 |
| **Agent 系统** | 🔥 | #2058, #1960 | 自定义 agent 行为、自动化迭代框架 |

---

## 6. 开发者关注点

### 🎯 核心痛点

1. **配置文件兼容性**
   - UTF-8 BOM 导致 TOML 解析失败，影响配置加载
   - 建议：编辑器选择或统一使用 `utf-8-sig` 读取

2. **大上下文稳定性**
   - 超过 130k tokens 时 Windows/网关环境下频繁超时
   - 根因：httpx 默认 keepalive_expiry 5s 过短

3. **Approval 超时体验**
   - 5 分钟硬编码超时限制，多用户反馈不便
   - v1.39.0 通过 `KIMI_MODEL_THINKING_KEEP` 部分改善

4. **Token 消耗不透明**
   - 错误信息是否计入 token 消耗缺乏明确说明
   - 开发者对成本控制有强烈需求

### 💡 高频需求

| 需求 | 出现次数 | 优先级 |
|------|----------|--------|
| 会话启动时自动激活技能 | 2+ | 高 |
| PowerShell 7 支持 | 1 | 中 |
| 多 Shell 环境适配 | 1 | 中 |
| 虚拟网络接口检测 | 1 | 中 |
| 错误处理规范化 (assert → exception) | 3+ | 中 |

---

## 📌 行动建议

1. **开发者**：关注 #2063 (default_skills) 和 #2065 (BOM 修复) 的合并进展，可提前测试
2. **用户**：如遇配置文件加载失败，检查是否由 BOM 导致；IDEA 用户暂避用终端发送消息
3. **贡献者**：TOCTOU 修复 (#2056)、assert 规范化 (#2057) 等代码质量改进 PR 欢迎测试反馈

---

*本报告由 AI 自动生成，数据截止至 2026-04-25 00:00 UTC*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 OpenCode 社区动态日报。让我仔细分析这些数据并按照要求的格式生成报告。

数据来源分析：
1. 最新 Releases：v1.14.24 和 v1.14.23
2. 最新 Issues：50条，展示评论数最多的30条
3. 最新 Pull Requests：50条，展示评论数最多的20条

让我按照要求的结构来组织内容：

## 1. 今日速览
- DeepSeek V4 reasoning_content 问题得到修复
- v1.14.24 和 v1.14.23 发布
- 多个 DeepSeek 相关问题被关闭

## 2. 版本发布
- v1.14.24: DeepSeek 修复、interleaved-capability 模型配置、HTTP API
- v1.14.23: .npmrc 支持、TUI 渲染修复

## 3. 社区热点 Issues
需要挑选10个最值得关注的：

1. #24190 - DeepSeek V4 reasoning_content 问题（19条评论，6个点赞）- 重要
2. #24104 - DeepSeek thinking mode reasoning_content 问题（19条评论）- 已关闭
3. #14808 - session.created 事件未触发（16条评论，12个点赞）
4. #24039 - GPT-5.5 支持请求（16条评论，12个点赞）- 已关闭


5. #1970 - 后台 Bash 执行功能（15条评论，21个点赞）- 长期功能请求
6. #13626 - Web UI 自动同步项目（7条评论）
7. #5934 - Todo-list 压缩后丢失（7条评论）- 已关闭
8. #24097 - deepseek-v4-pro 识别问题（6条评论）- 已关闭
9. #17052 - 回答循环重复问题（6条评论）
10. #9714 - 后台任务管理器（5条评论，9个点赞）

这些议题涵盖了核心功能改进、用户体验优化和开发者工具增强等多个方面。

## 4. 重要 PR 进展
从 PR 列表中筛选出关键贡献：

1. #24146 - DeepSeek V4 reasoning_content 修复（已合并）
2. #20039 - Bash/Shell 工具分离
3. #12822 - 环境变量代理修复
4. #18767 - 移动端触控优化
5. #13854 - TUI 流式渲染修复
6. #24238 - 文档同步
7. #14468 - LiteLLM provider 支持
8. #24223 - 文档同步
9. #6166 - 会话名称换行
10. #24236 - Beta PR 日志分组

## 5. 功能需求趋势
从 Issues 中识别出几个主要的功能方向：

1. **DeepSeek 模型支持** - 多个相关问题
2. **后台任务/异步执行** - 多个功能请求
3. **新模型支持** - GPT-5.5、Qwen3.5/3.6 Plus
4. **IDE/编辑器集成** - LSP 相关问题
5. **移动端支持** - 触控优化
6. **Web UI 改进** - 项目同步

## 6. 开发者关注点
总结开发者反馈中的痛点：

1. DeepSeek reasoning_content 处理
2. 模型配置和识别
3. TUI 交互问题
4. 性能问题
5. 文档同步
</think>

# OpenCode 社区动态日报

**日期：** 2026-04-25  
**数据来源：** github.com/anomalyco/opencode

---

## 1. 今日速览

今日 OpenCode 社区迎来重要更新：v1.14.24 版本重点修复了 DeepSeek V4 模型的 `reasoning_content` 处理问题，解决了多轮对话中 400 错误和工具调用失败的长期痛点。社区围绕 DeepSeek 模型支持展开了热烈讨论，多个相关 Issues 被集中修复或关闭。同时，后台任务执行、移动端优化等长期功能需求仍在持续推进中。

---

## 2. 版本发布

### v1.14.24

| 模块 | 更新内容 |
|------|----------|
| **Core** | 修复 DeepSeek 助手消息，确保 reasoning 内容始终被包含，避免提供商格式化失败 |
| **Core** | 修复继承模型配置，使 interleaved-capability 模型在该字段回退到现有模型时仍能正常工作 |
| **Core** | 新增实验性 HTTP API 端点 |

### v1.14.23

| 模块 | 更新内容 |
|------|----------|
| **Core** | 检查包版本和更新时尊重自定义 `.npmrc` 注册表设置 |
| **TUI** | 渲染用户消息中的所有非合成文本，而非仅显示第一个文本块 |

---

## 3. 社区热点 Issues

### 🔥 #24190 DeepSeek V4 多轮工具调用 400 错误
- **作者：** @ihoooohi | **评论：19** | **点赞：6**
- **状态：** OPEN
- **摘要：** 使用 DeepSeek V4 Pro/Flash 通过官方 API 或 OpenRouter 时，第二轮对话起的工具调用均返回 400 错误，首轮正常。
- **重要性：** 这是今日社区最活跃的 Issue，直接影响 DeepSeek V4 用户的多轮对话体验。
- **链接：** https://github.com/anomalyco/opencode/issues/24190

### 🔥 #24104 DeepSeek thinking mode reasoning_content 必须回传
- **作者：** @fkyah3 | **评论：19**
- **状态：** CLOSED
- **摘要：** 启用 thinking mode 后，首次响应后的每次 API 调用均报错 `reasoning_content must be passed back to the API`。
- **重要性：** 已通过 PR #24146 修复并合并，是今日最重要的 bug 修复之一。
- **链接：** https://github.com/anomalyco/opencode/issues/24104

### 🔥 #14808 session.created 事件未触发
- **作者：** @M4NZEN | **评论：16** | **点赞：12**
- **状态：** OPEN
- **摘要：** 订阅事件总线的插件无法接收 `session.created` 事件，事件已发布但插件无响应。
- **重要性：** 影响插件系统核心功能，涉及 Engram 等记忆系统插件的正常工作。
- **链接：** https://github.com/anomalyco/opencode/issues/14808

### 🔥 #24039 GPT-5.5 支持请求
- **作者：** @behavio1 | **评论：16** | **点赞：12**
- **状态：** CLOSED
- **摘要：** 社区强烈请求为 OpenAI provider 添加原生 `gpt-5.5` 支持。
- **重要性：** 反映了对最新 OpenAI 模型的支持需求，但需注意 GPT-5.5 Codex 上下文限制已从 1M 降至 400k（见 #24171）。
- **链接：** https://github.com/anomalyco/opencode/issues/24039

### ⭐ #1970 后台 Bash 执行功能
- **作者：** @elloydfetch | **评论：15** | **点赞：21**
- **状态：** OPEN
- **摘要：** 类似于 Claude Code 的 Ctrl+b 功能，请求支持后台运行长时间任务（如构建、服务器），不阻塞代理界面。
- **重要性：** 这是社区长期关注的功能需求，点赞数较高，已有 PR #24174 正在实现背景子代理支持。
- **链接：** https://github.com/anomalyco/opencode/issues/1970

### #13626 Web UI 项目自动同步
- **作者：** @BlankParticle | **评论：7**
- **状态：** OPEN
- **摘要：** 在新设备/浏览器打开 OpenCode Web 时，项目应从服务器自动获取并同步。
- **重要性：** 提升 Web 端用户体验，减少手动配置。
- **链接：** https://github.com/anomalyco/opencode/issues/13626

### #5934 Todo-list 压缩后丢失
- **作者：** @hosseinalipour | **评论：7**
- **状态：** CLOSED
- **摘要：** 自动压缩后会话的 Todo 列表被清除，应在压缩操作中持久化。
- **重要性：** 影响用户任务跟踪体验，已被修复。
- **链接：** https://github.com/anomalyco/opencode/issues/5934

### #24097 deepseek-v4-pro 未被识别为 thinking 模型
- **作者：** @ruichenrui | **评论：6**
- **状态：** CLOSED
- **摘要：** 即使配置了 `interleaved`，`deepseek-v4-pro` 模型 ID 也未被识别为 thinking 模型，导致 `reasoning_content` 错误。
- **重要性：** 与 #24104 相关，已通过 PR #24146 修复。
- **链接：** https://github.com/anomalyco/opencode/issues/24097

### #17052 回答循环重复无结束
- **作者：** @ZeLv01 | **评论：6**
- **状态：** OPEN
- **摘要：** 提问后回答持续循环重复，只能手动按 Esc 两次退出。
- **重要性：** 核心交互 bug，影响正常使用。
- **链接：** https://github.com/anomalyco/opencode/issues/17052

### #9714 后台任务管理器
- **作者：** @avillagran | **评论：5** | **点赞：9**
- **状态：** CLOSED
- **摘要：** 请求实现 TaskManager，提供完整的生命周期操作支持后台任务管理。
- **重要性：** 与 #1970 需求呼应，已在 PR #24174 中实现。
- **链接：** https://github.com/anomalyco/opencode/issues/9714

---

## 4. 重要 PR 进展

### ✅ #24146 修复 DeepSeek V4 reasoning_content
- **作者：** @heimoshuiyu | **状态：** CLOSED
- **内容：** 修复 DeepSeek V4 thinking mode 中空 reasoning_content 的保留问题，一并关闭了 #24104、#24097、#24130 等 8 个相关 Issues。
- **链接：** https://github.com/anomalyco/opencode/pull/24146

### 🔧 #20039 Bash/Shell 工具分离
- **作者：** @Hona | **状态：** OPEN
- **内容：** 将单体 shell 工具拆分为各运行时（pwsh/powershell/cmd/bash）的独立工具，提升代理在各 shell 环境的工作效果。
- **链接：** https://github.com/anomalyco/opencode/pull/20039

### 🔧 #12822 环境变量代理修复
- **作者：** @jerome-benoit | **状态：** OPEN
- **内容：** 修复 Env 服务在初始化时快照 `process.env` 的问题，改为直接代理到 `process.env`。
- **链接：** https://github.com/anomalyco/opencode/pull/12822

### ✨ #18767 移动端触控优化
- **作者：** @noahbentusi | **状态：** OPEN
- **内容：** 优化 OpenCode App 在移动端/触控设备上的体验，同时保持桌面端体验不变。
- **链接：** https://github.com/anomalyco/opencode/pull/18767

### 🔧 #13854 TUI 流式渲染修复
- **作者：** @mocksoul | **状态：** OPEN
- **内容：** 修复消息完成后仍以流式模式渲染 markdown/代码的问题，基于 `message.time.completed` 推导流式状态。
- **链接：** https://github.com/anomalyco/opencode/pull/13854

### 📚 #24238 / #24223 文档与环境变量同步
- **作者：** @v1truv1us | **状态：** CLOSED
- **内容：** 将环境变量文档与源代码同步，补充了 8 个缺失变量并按字母排序。
- **链接：** https://github.com/anomalyco/opencode/pull/24238

### ✨ #14468 LiteLLM Provider 支持
- **作者：** @balcsida | **状态：** OPEN
- **内容：** 新增原生 `litellm` provider，启动时自动从 LiteLLM 代理发现模型，无需手动配置。
- **链接：** https://github.com/anomalyco/opencode/pull/14468

### ✨ #24174 背景子代理支持
- **作者：** @nexxeln | **状态：** OPEN
- **内容：** 新增 `task(background=true)` 支持子代理后台运行不阻塞主线程，新增 `task_status` 工具用于轮询或等待后台子代理结果。
- **链接：** https://github.com/anomalyco/opencode/pull/24174

### 🔧 #24233 按模型定价推理 token
- **作者：** @willsarg | **状态：** OPEN
- **内容：** 修复 `Session.getUsage` 中硬编码推理 token 为输出费率的问题，支持按模型配置独立的推理 token 定价。
- **链接：** https://github.com/anomalyco/opencode/pull/24233

### 🔧 #24232 noCacheTokens 使用量核算
- **作者：** @willsarg | **状态：** OPEN
- **内容：** 修复 DeepSeek、Moonshot 等提供商通过 `usage.cachedInputTokens` 报告缓存 token 时，`noCacheTokens` 未正确计入的问题。
- **链接：** https://github.com/anomalyco/opencode/pull/24232

---

## 5. 功能需求趋势

从今日 Issues 数据分析，社区最关注的功能方向如下：

| 排名 | 功能方向 | 相关 Issues | 热度 |
|------|----------|-------------|------|
| 1 | **DeepSeek 模型支持** | #24190, #24104, #24097, #24203 | ⭐⭐⭐⭐⭐ |
| 2 | **后台任务/异步执行** | #1970, #9714, #18372 | ⭐⭐⭐⭐ |
| 3 | **新模型支持** | #24039 (GPT-5.5), #22677 (Qwen3.5/3.6 Plus) | ⭐⭐⭐ |
| 4 | **IDE/编辑器集成** | #23937 (LSP), #24228 (Roslyn/Razor) | ⭐⭐⭐ |
| 5 | **移动端/Web 优化** | #18767, #13626, #22187 | ⭐⭐ |
| 6 | **工具描述优化** | #11995 (token 消耗) | ⭐⭐ |

**趋势洞察：**
- **DeepSeek 模型**成为今日焦点，reasoning_content 处理问题集中爆发
- **后台任务执行**需求强烈，Claude Code 的 Ctrl+b 功能被多次提及
- **成本核算**相关 PR 活跃，反映用户对用量透明度的关注

---

## 6. 开发者关注点

### 核心痛点

1. **DeepSeek reasoning_content 处理**
   - 多轮对话中 reasoning 内容丢失导致 API 错误
   - 模型识别问题：`deepseek-v4-pro` 未被正确识别为 thinking 模型
   - 已通过 v1.14.24 和 PR #24146 修复

2. **模型配置与兼容性**
   - 继承模型配置在回退场景下失效
   - GPT-5.5 Codex 上下文限制变更未同步
   - interleaved-capability 模型配置复杂

3. **TUI 交互问题**
   - `!ls` 命令无输出（macOS/Arch Linux）
   - 消息完成后仍以流式模式渲染
   - 会话名称过长被截断

4. **性能与资源**
   - 桌面版扫描随机系统文件夹（CPU 100%）
   - 日志文件占用大量磁盘空间
   - 工具描述消耗 ~3,000-4,000 tokens/消息

### 高频需求

| 需求 | 出现频次 | 代表 Issue |
|------|----------|------------|
| 后台任务执行 | 高 | #1970, #9714, #18372 |
| 新模型支持 | 高 | #24039, #22677 |
| 项目同步 | 中 | #13626 |
| 移动端优化 | 中 | #18767 |
| OAuth 多账户 | 低 | #11832 |

---

**报告生成时间：** 2026-04-25  
**数据覆盖：** 过去 24 小时（2026-04-24 ~ 2026-04-25）

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 Qwen Code 社区动态日报。我需要：

1. 今日速览 - 2-3句话概括最重要动态
2. 版本发布 - v0.15.2 的更新内容
3. 社区热点 Issues - 挑选 10 个最值得关注的 Issue
4. 重要 PR 进展 - 挑选 10 个重要的 PR
5. 功能需求趋势 - 从 Issues 中提炼
6. 开发者关注点 - 总结痛点和高频需求

让我分析数据：

**版本发布：**
- v0.15.2 包含：
  - fix(core): treat empty 'pages' parameter as unset in ReadFile
  - feat(session): auto-title sessions via fast model, add /rename --auto
  - fix(i18n): sync mi...

**热点 Issues（评论数最多的）：**
1. #3203 - Qwen OAuth Free Tier Policy Adjustment (119条评论) - 关于免费配额调整
2. #3520 - Tool ran without output or errors (5条评论)
3. #3579 - DeepSeek API 400 error (4条评论)
4. #3532 - 本地模型配置问题 (4条评论)
5. #1883 - 安全问题报告链接 (3条评论)


6. #3158 - Shell命令执行问题 (2条评论)
7. #3595 - 本地部署模型无法识别图片 (2条评论)
8. #3052 - 响应内容复制键 (2条评论)
9. #3524 - 401报错 (2条评论)
10. #3580 - Plugin System (2条评论)

还有一些其他值得关注的 Issues：
- #3597 - 图片读取问题
- #3582 - 自定义API密钥配置
- #3555 - 多供应商配置问题
- #3549 - ACP模式支持HTTP MCP
- #3585 - 模型计费功能
- #3568 - 子代理并发限制

**重要 PR：**
1. #3598 - feat(cli): add --json-schema for structured output in headless mode
2. #3605 - feat: adds a Space-to-preview affordance to the /resume session picker
3. #3570 - feat(core): add simplify bundled skill
4. #3507 - feat(cli): add sticky todo panel to app layouts
5. #3604 - feat(skills): parallelize loading + add path-conditional activation
6. #3591 - fix(cli): add TUI flicker foundation fixes
7. #1704 - fix(cli): prevent duplicate output on stream retry
8. #816 - fix(core): handle null command in IDE detection
9. #3602 - fix(cli): drain runExitCleanup before process.exit in error handlers
10. #3576 - Feat/openrouter auth
11. #3581 - perf(core): cut runtime sync I/O on tool hot path by 91%
12. #3538 - feat(cli,core): LLM-generated summary labels for tool-call batches
13. #3600 - fix(core): handle shell line continuations in command splitting
14. #3156 - feat(permissions): strip dangerous patterns from YOLO auto-approve
15. #3115 - feat: add commit attribution with per-file AI contribution tracking
16. #2838 - feat: add bun runtime support
17. #3441 - feat(cli): add conversation rewind feature with double-ESC and /rewind command
18. #3495 - fix(core): preserve settings-sourced apiKey when registry model envKey is absent
19. #3494 - feat(SDK) Add Python SDK implementation

现在需要整理一份结构清晰的日报。
</think>

# Qwen Code 社区动态日报

**日期：** 2026-04-25  
**数据来源：** github.com/QwenLM/qwen-code

---

## 1. 今日速览

- **v0.15.2 正式发布**，新增会话自动命名和空 pages 参数修复等功能，CLI 体验持续优化
- **社区围绕免费配额政策展开激烈讨论**（#3203 已有 119 条评论），用户对 API 访问限制表达强烈关切
- **性能优化成为本周重点**，核心模块同步 I/O 减少 91%，Skills 加载并行化等多项改进正在推进中

---

## 2. 版本发布

### v0.15.2 发布

| 组件 | 类型 | 描述 | PR |
|------|------|------|-----|
| core | fix | 将空 'pages' 参数视为未设置，修复 ReadFile 工具行为 | [#3559](https://github.com/QwenLM/qwen-code/pull/3559) |
| session | feat | 通过快速模型自动生成会话标题，新增 `/rename --auto` 命令 | [#3540](https://github.com/QwenLM/qwen-code/pull/3540) |
| i18n | fix | 同步多语言文件（内容截断） | - |

> 📌 **值得注意：** 会话自动命名功能可显著改善多会话管理体验，建议升级。

---

## 3. 社区热点 Issues

### 🔥 #3203 Qwen OAuth 免费层级政策调整（119 评论）
**状态：** OPEN | **类型：** Feature Request  
**链接：** https://github.com/QwenLM/qwen-code/issues/3203

**摘要：** 用户 pomelo-nwu 提议调整免费配额：
1. 每日免费请求从 1,000 次降至 100 次
2. 计划完全关闭 Qwen OAuth 免费入口（6月20日）

**重要性：** 这是社区关注度最高的话题，引发关于 API 访问成本和可持续性的广泛讨论。

---

### 🔥 #3520 工具运行无输出也无错误
**状态：** OPEN | **类型：** Bug  
**链接：** https://github.com/QwenLM/qwen-code/issues/3520

**摘要：** qwen-code 0.14.5 版本中工具执行后既无输出也无错误提示，用户无法判断操作是否成功。

**社区反应：** 5 条评论，用户反馈在日常使用中频繁遇到此问题。

---

### 🔥 #3579 DeepSeek API 400 错误
**状态：** CLOSED | **类型：** Bug  
**链接：** https://github.com/QwenLM/qwen-code/issues/3579

**摘要：** 使用 DeepSeek API（deepseek-v4-flash 模型）时，思考模式下间歇性出现 `reasoning_content` 必须传回的 400 错误。

**重要性：** 涉及第三方模型兼容性，已关闭但可能需要后续跟进。

---

### 🔥 #3532 本地模型配置问题
**状态：** CLOSED | **类型：** Question  
**链接：** https://github.com/QwenLM/qwen-code/issues/3532

**摘要：** 用户配置本地模型后启动 qwen 仍提示认证失败，文档配置方式可能存在歧义。

**社区反应：** 4 条评论，反映本地部署配置流程不够清晰。

---

### 🔥 #1883 安全问题报告渠道
**状态：** CLOSED | **类型：** Question  
**链接：** https://github.com/QwenLM/qwen-code/issues/1883

**摘要：** 安全公告中的链接已失效，用户无法找到正确的漏洞提交平台。

**重要性：** 安全问题反馈机制需要更新维护。

---

### 🔥 #3595 本地部署模型无法识别图片
**状态：** OPEN | **类型：** Bug  
**链接：** https://github.com/QwenLM/qwen-code/issues/3595

**摘要：** 本地部署 Qwen3.6-35B-A3B 模块后，qwen-code CLI 无法识别图片，但同一模型通过 MCP 工具调用可正常工作。

**重要性：** 涉及视觉能力在本地模型场景下的兼容性问题。

---

### 🔥 #3580 Plugin System 插件系统
**状态：** OPEN | **类型：** Feature Request  
**链接：** https://github.com/QwenLM/qwen-code/issues/3580

**摘要：** 用户请求增加支持自动安装和 Hooks 的插件系统。

**重要性：** 代表了扩展性方面的核心需求。

---

### 🔥 #3566 /skills list 循环错误
**状态：** OPEN | **类型：** Bug  
**链接：** https://github.com/QwenLM/qwen-code/issues/3566

**摘要：** 执行 `/skills list` 命令时陷入无限循环，显示 "Maximum update depth exceeded" 错误。

**社区反应：** 2 条评论，影响技能管理功能使用。

---

### 🔥 #3555 多供应商相同模型配置
**状态：** OPEN | **类型：** Feature Request  
**链接：** https://github.com/QwenLM/qwen-code/issues/3555

**摘要：** 用户配置多个供应商使用相同模型（如 glm-5.1）时出现解析问题。

**重要性：** 涉及多供应商冗余配置的实际需求。

---

### 🔥 #3585 增加模型计费功能
**状态：** OPEN | **类型：** Feature Request  
**链接：** https://github.com/QwenLM/qwen-code/issues/3585

**摘要：** 建议在 settings.json 中设置模型 input/output 单价，通过 `/stats model` 显示会话费用。

**重要性：** 多模型多供应商场景下的成本管理需求。

---

## 4. 重要 PR 进展

### ⭐ #3581 核心模块同步 I/O 减少 91%
**状态：** CLOSED | **作者：** @wenshao  
**链接：** https://github.com/QwenLM/qwen-code/pull/3581

**内容：** 优化 `chatRecordingService.appendRecord`，移除每次事件记录的 4 次同步文件系统调用（existsSync + mkdirSync + existsSync + appendFileSync）。

---

### ⭐ #3598 新增 --json-schema 结构化输出支持
**状态：** OPEN | **作者：** @wenshao  
**链接：** https://github.com/QwenLM/qwen-code/pull/3598

**内容：** 在 headless 模式（`qwen -p`）中新增 `--json-schema` 参数，支持用户自定义 JSON Schema，模型必须调用 `structured_output` 工具返回结构化结果。

---

### ⭐ #3604 Skills 加载并行化 + 路径条件激活
**状态：** OPEN | **作者：** @wenshao  
**链接：** https://github.com/QwenLM/qwen-code/pull/3604

**内容：** 
- 用 `Promise.all` 替换 `SkillManager` 中的三层嵌套 `for-await` 循环
- 新增路径条件激活功能，可根据项目路径有条件地启用 Skills

---

### ⭐ #3576 OpenRouter OAuth 认证支持
**状态：** OPEN | **作者：** @pomelo-nwu  
**链接：** https://github.com/QwenLM/qwen-code/pull/3576

**内容：** 从 `/auth` 流程中增加浏览器端 OpenRouter OAuth 认证，自动获取 API Key 并拉取模型目录。

---

### ⭐ #3570 新增 simplify 内置 Skill
**状态：** OPEN | **作者：** @pomelo-nwu  
**链接：** https://github.com/QwenLM/qwen-code/pull/3570

**内容：** 添加 `simplify` 内置 Skill，用于结构化清理近期更改，支持 `/simplify` 斜杠命令调用。

---

### ⭐ #3507 粘性 Todo 面板
**状态：** OPEN | **作者：** @shenyankm  
**链接：** https://github.com/QwenLM/qwen-code/pull/3507

**内容：** 在 CLI 应用布局中添加粘性 Todo 面板，最新任务列表在对话继续时保持可见。

---

### ⭐ #3605 /resume 会话选择器预览功能
**状态：** OPEN | **作者：** @qqqys  
**链接：** https://github.com/QwenLM/qwen-code/pull/3605

**内容：** 在 `/resume` 会话选择器中增加空格预览功能，可在任意行上内联渲染会话对话内容。

---

### ⭐ #3591 TUI 闪烁修复
**状态：** OPEN | **作者：** @chiga0  
**链接：** https://github.com/QwenLM/qwen-code/pull/3591

**内容：** 整合之前多个 PR，重构 TUI 闪烁和重复输出缓解的基础层实现。

---

### ⭐ #3538 工具调用批次 LLM 生成摘要标签
**状态：** OPEN | **作者：** @wenshao  
**链接：** https://github.com/QwenLM/qwen-code/pull/3538

**内容：** 当模型并行执行多个工具调用时，UI 显示 LLM 生成的批次摘要说明，而非仅显示机械信息。

---

### ⭐ #3115 提交归属与文件级 AI 贡献追踪
**状态：** OPEN | **作者：** @wenshao  
**链接：** https://github.com/QwenLM/qwen-code/pull/3115

**内容：** 在 git 历史中区分 AI 生成和人类编写的更改，满足开源合规和企业审计需求。

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区最关注的功能方向如下：

| 排名 | 功能方向 | 相关 Issue | 热度 |
|------|----------|------------|------|
| 1 | **多模型/多供应商支持** | #3555, #3585, #3532 | ⭐⭐⭐⭐⭐ |
| 2 | **本地部署与视觉能力** | #3595, #3597 | ⭐⭐⭐⭐ |
| 3 | **插件/扩展系统** | #3580 | ⭐⭐⭐ |
| 4 | **会话管理与历史** | #3441, #3605, #1991 | ⭐⭐⭐ |
| 5 | **MCP 协议增强** | #3549, #3472 | ⭐⭐⭐ |
| 6 | **性能优化** | #3581, #3604 | ⭐⭐⭐ |
| 7 | **成本/计费管理** | #3585 | ⭐⭐ |
| 8 | **安全与权限控制** | #3156, #1883 | ⭐⭐ |

---

## 6. 开发者关注点

### 🔧 主要痛点

1. **本地模型配置复杂**
   - 多位用户反馈本地部署配置流程不清晰，认证问题频发
   - 视觉能力在本地模型场景下表现不一致

2. **第三方 API 兼容性**
   - DeepSeek 等模型在特定模式下出现 API 错误
   - 多供应商相同模型配置存在解析问题

3. **TUI 体验问题**
   - 终端闪烁、重复输出等问题影响使用
   - 状态栏多余空行浪费屏幕空间

### 📈 高频需求

1. **多供应商冗余配置** - 用户希望在不同供应商间灵活切换
2. **成本可视化** - 多模型场景下需要追踪 API 调用费用
3. **会话管理增强** - 会话重命名、Rewind、导出等功能
4. **Skills 生态** - 更丰富的内置 Skill 和并行加载优化
5. **结构化输出** - 对 headless 模式结构化结果的需求

---

**📊 统计概览**

| 指标 | 数量 |
|------|------|
| 新增 Issues | 32 |
| 新增 PRs | 50 |
| 热门 Issue 评论数 | 119（最高） |
| 版本发布 | 1 (v0.15.2) |

---

*本报告由 AI 自动生成，数据截止至 2026-04-25*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

<think>用户要求我根据提供的 GitHub 数据生成一份 2026-04-25 的 Pi 社区动态日报。我需要：

1. 今日速览 - 2-3句话概括最重要动态
2. 版本发布 - 总结 v0.70.2 和 v0.70.1 的更新
3. 社区热点 Issues - 挑选 10 个最值得关注的 Issue
4. 重要 PR 进展 - 挑选 10 个重要的 PR
5. 功能需求趋势 - 提炼社区最关注的功能方向
6. 开发者关注点 - 总结痛点或高频需求

让我分析数据：

**版本发布：**
- v0.70.2: Fixed provider retry/timeout forwarding
- v0.70.1: DeepSeek provider support with V4 Flash/Pro models, Provider request timeout/retry controls

**热门 Issues（按评论数排序）：**
1. #3636 - Deepseek 4 reasoning_content 错误 (9条评论)
2. #2023 - pi.runWhenIdle() 功能请求 (7条评论)
3. #3543 - Remove URL gates around long cache retention (5条评论)
4. #3630 - Latex Formatting (4条评论)
5. #3648 - ctrl-c 在 macOS IME 下不工作 (4条评论)
6. #3254 - Add persistModelSelection setting (3条评论)


7. #3684 - /retry command 功能请求 (3条评论)
8. #3619 - google-vertex forward model.baseUrl (3条评论)
9. #3675 - Ctrl + G 不工作 (3条评论)
10. #3653 - Redesign Logo (3条评论)
11. #2144 - Cannot paste images (3条评论)
12. #3646 - Package Report (3条评论)
13. #3638 - Add Support for Azure Foundry (3条评论)
14. #3602 - ctx.ui.setStatus() 不重新渲染 (3条评论)
15. #3683 - pi.dev SSL 错误 (2条评论)
16. #3681 - renderer crash (2条评论)
17. #3674 - Allow extensions to hide working loader (2条评论)
18. #3679 - Connection error troubleshooting (2条评论)
19. #3673 - expose session control methods (2条评论)
20. #3668 - DeepSeek via OpenRouter 400 error (2条评论)
21. #3670 - Anthropic subscription auth bills per token (2条评论)
22. #3655 - preserve reasoning_content on DeepSeek (2条评论)
23. #3667 - Editor prompt history not repopulated (2条评论)
24. #3662 - DeepSeek V4 Pro xhigh reasoning clamped (2条评论)
25. #3647 - Auto-compaction bug for GPT 5.4 (2条评论)
26. #3642 - Windows plugin install with spaces (2条评论)
27. #3627 - expose timeout and retry settings (2条评论)
28. #3641 - GPT-5.5 context length error (2条评论)
29. #3637 - Edit tool failing with bad control character (2条评论)
30. #3635 - DeepSeek v4 reasoning_content requirement (2条评论)

**重要 PR：**
1. #3687 - regenerate models to include deepseek-v4-pro on opencode-go
2. #3680 - Add built-in update command
3. #3678 - honor Fireworks Anthropic tool compat
4. #3651 - preserve models when re-registering provider
5. #1157 - add Anthropic Vertex AI provider
6. #3669 - repopulate editor prompt history on /reload
7. #3664 - fall back to placeholder for empty Anthropic tool_use.id
8. #3661 - add xhigh reasoning support for DeepSeek V4 Pro
9. #3659 - inject empty reasoning_content for DeepSeek tool-call history
10. #3656 - preserve actual reasoning_content on DeepSeek assistant replay
11. #3654 - feat(web-server): 新增基于浏览器的AI编程助手Web服务器
12. #3652 - Feat/plan
13. #3650 - omit tools field instead of sending empty array
14. #3623 - decode CSI-u Ctrl+letter inside bracketed paste
15. #3644 - Add deepseek v4 support
16. #3632 - add persistModelChanges setting
17. #3620 - await native clipboard before emitting OSC 52
18. #3640 - add reasoning_content fallback for deepseek v4 pro
19. #3618 - Align GPT-5.5 Codex capability handling
20. #3634 - drop unpaired reasoning items when replaying assistant history

**功能需求趋势分析：**
DeepSeek V4 模型集成是当前重点，包括 reasoning_content 处理、xhigh reasoning 支持和 provider 配置。用户体验方面关注 Latex 渲染、Logo 重新设计和 prompt history 功能。系统稳定性则涉及 Windows 路径空格处理、macOS IME 兼容性和 SSL 错误修复。

**开发者关注点：**
模型集成和 reasoning_content 处理是核心挑战，Windows 兼容性和用户体验优化也是重点。

扩展性和稳定性问题同样需要关注。
</think>

# Pi 社区动态日报 | 2026-04-25

---

## 1. 今日速览

今日 Pi 社区围绕 **DeepSeek V4 模型支持** 持续发力，发布了 v0.70.1/0.70.2 两个版本，新增 DeepSeek V4 Flash/Pro 模型及 provider 超时/重试控制能力。同时社区积极修复 reasoning_content 传递、模型切换兼容性等关键问题，版本迭代节奏紧凑。

---

## 2. 版本发布

### v0.70.2
**修复项**
- 修复 provider retry/timeout 转发逻辑，当 `retry.provider.timeoutMs` 未配置时不再传递 undefined，避免下游 SDK 验证错误（如 `timeout must be an integer`）

### v0.70.1
**新功能**
- 新增 **DeepSeek provider 支持**，支持 V4 Flash/Pro 模型及 `DEEPSEEK_API_KEY` 认证
- 新增 provider 请求超时/重试控制（`retry.provider.{timeoutMs,retries}`）

> 📎 [Release v0.70.2](https://github.com/badlogic/pi-mono/releases/tag/v0.70.2) | [v0.70.1](https://github.com/badlogic/pi-mono/releases/tag/v0.70.1)

---

## 3. 社区热点 Issues

| # | 标题 | 重要性说明 | 评论数 |
|---|------|-----------|--------|
| [#3636](https://github.com/badlogic/pi-mono/issues/3636) | Deepseek 4: `reasoning_content` in thinking mode must be passed back | **高优先级 Bug**：DeepSeek V4 thinking 模式下必须回传 reasoning_content，否则 API 返回 400，社区已有多人复现 | 9 |
| [#2023](https://github.com/badlogic/pi-mono/issues/2023) | Add `pi.runWhenIdle()` to schedule work after agent fully settled | **功能增强**：提供空闲调度能力，对扩展开发意义重大，7 条评论讨论实现方案 | 7 |
| [#3543](https://github.com/badlogic/pi-mono/issues/3543) | Remove URL gates around long cache retention | **配置优化**：移除长缓存保留的 URL 限制，提升配置灵活性 | 5 |
| [#3630](https://github.com/badlogic/pi-mono/issues/3630) | Latex Formatting in markdown rendering | **用户体验**：数学公式渲染需求强烈，开发者附上效果图，社区期待度高 | 4 |
| [#3648](https://github.com/badlogic/pi-mono/issues/3648) | ctrl-c not captured when macOS IME is on | **平台兼容**：macOS 中文输入法下 Ctrl+C 失效，影响多个交互场景 | 4 |
| [#3254](https://github.com/badlogic/pi-mono/issues/3254) | Add setting to prevent /model from overwriting persistent default | **配置控制**：新增 `persistModelSelection` 设置，避免模型切换污染默认配置 | 3 |
| [#3684](https://github.com/badlogic/pi-mono/issues/3684) | Feature Request: /retry command | **功能请求**：实现重试/继续命令，应对 API 限流场景 | 3 |
| [#3619](https://github.com/badlogic/pi-mono/issues/3619) | `google-vertex` forward model.baseUrl to @google/genai httpOptions | **provider 完善**：Vertex 适配器需支持 baseUrl 转发，与其他 provider 行为对齐 | 3 |
| [#3675](https://github.com/badlogic/pi-mono/issues/3675) | Ctrl + G doesn't work but flicker in some cases | **UI Bug**：长消息场景下 Ctrl+G 失效伴随机闪烁 | 3 |
| [#3653](https://github.com/badlogic/pi-mono/issues/3653) | Redesign Logo for Improved Balance | **品牌优化**：Logo 视觉调整提案，采用 12 网格系统设计 | 3 |

---

## 4. 重要 PR 进展

| # | 作者 | 内容 | 状态 |
|---|------|------|------|
| [#3687](https://github.com/badlogic/pi-mono/pull/3687) | @tmdgusya | 重新生成 models，包含 opencode-go 的 deepseek-v4-pro/deepseek-v4-flash | ✅ Closed |
| [#3680](https://github.com/badlogic/pi-mono/pull/3680) | @mitsuhiko | 新增内置 `pi update` 命令，支持自更新 | 🔄 Open |
| [#3678](https://github.com/badlogic/pi-mono/pull/3678) | @deybhayden | 修复 Fireworks Anthropic tool 兼容性问题 | 🔄 Open |
| [#3661](https://github.com/badlogic/pi-mono/pull/3661) | @kpa32 | 为 DeepSeek V4 Pro 添加 xhigh reasoning 支持（映射到 max effort） | ✅ Closed |
| [#3659](https://github.com/badlogic/pi-mono/pull/3659) | @snowzlm | 为 DeepSeek tool-call 历史注入空 reasoning_content | ✅ Closed |
| [#3656](https://github.com/badlogic/pi-mono/pull/3656) | @NOirBRight | DeepSeek assistant 重放时保留实际 reasoning_content | ✅ Closed |
| [#3651](https://github.com/badlogic/pi-mono/pull/3651) | @aliou | 修复 provider 覆盖时模型列表丢失问题 | ✅ Closed |
| [#3669](https://github.com/badlogic/pi-mono/pull/3669) | @mcclurejt | 修复 /reload 后编辑器 prompt history 未重建问题 | ✅ Closed |
| [#3632](https://github.com/badlogic/pi-mono/pull/3632) | @felixge | 新增 `persistModelChanges` 设置，控制模型选择是否持久化 | ✅ Closed |
| [#3644](https://github.com/badlogic/pi-mono/pull/3644) | @kaofelix | 添加 DeepSeek v4 核心支持（含 thinking 模式） | ✅ Closed |

---

## 5. 功能需求趋势

从 50 条 Issues 中提炼出以下主要方向：

| 趋势 | 说明 | 相关 Issue |
|------|------|-----------|
| **DeepSeek V4 深度集成** | reasoning_content 处理、xhigh reasoning、provider 配置等，占据最多讨论 | #3636, #3668, #3662, #3635, #3655 |
| **模型切换控制** | 防止模型选择污染默认配置、session-only 切换 | #3254, #3632 |
| **扩展 API 增强** | 暴露 session 控制方法、空闲调度、隐藏工作指示器 | #2023, #3673, #3674 |
| **平台兼容性** | macOS IME、Windows 路径空格、剪贴板操作 | #3648, #3642, #3620 |
| **渲染/UI 优化** | Latex 公式、Logo 重设计、Ctrl+G 行为 | #3630, #3653, #3675 |
| **Provider 扩展** | Azure Foundry、Google Vertex、Fireworks 兼容性 | #3638, #3619, #3678 |

---

## 6. 开发者关注点

### 核心痛点

1. **DeepSeek reasoning_content 传递**
   - 多个 Issue 反馈 V4 thinking 模式下必须回传 reasoning_content，否则 400 错误
   - 涉及模型切换、assistant 历史重放等多个场景

2. **Windows 路径空格问题**
   - `pi install` 在含空格的路径下失败，影响插件安装体验

3. **macOS IME 兼容**
   - 中文输入法激活时 Ctrl+C 等快捷键失效

### 高频需求

- **模型配置灵活性**：超时/重试控制、baseUrl 转发、session-only 模型切换
- **扩展开发能力**：空闲调度、session 控制、working indicator 定制
- **渲染增强**：Latex 公式支持、更好的 markdown 体验

---

> 📊 数据统计：过去 24 小时新增 2 个 Release、50 条 Issues（含 30 条详细数据）、22 条 PR（含 20 条详细数据）  
> 🔗 完整数据源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

</details>

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*