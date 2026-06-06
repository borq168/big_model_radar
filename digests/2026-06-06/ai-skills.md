# Skills 生态热点 2026-06-06

> 生成时间: 2026-06-06 02:15 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills 社区热点报告（2026-06-06）

## 1. 热门 Skills 排行（PR）

以下为评论/关注度较高的 8 个 Pull Requests，均为 OPEN 状态，尚未合并。

| # | PR 标题 | 功能摘要 | 讨论热点 | 状态 |
|---|---------|---------|----------|------|
| 1140 | [feat: implement agent-creator skill and fix multi-tool evaluation](https://github.com/anthropics/skills/pull/1140) | 新增 `agent-creator` 元技能，可根据任务动态生成 Agent 组合；同步修复评估脚本对多工具调用的处理，并添加 Windows %APPDATA% 路径支持。 | 元技能设计、多工具评估稳定性、Windows 兼容性 | OPEN（最近更新 2026-06-02） |
| 514 | [Add document-typography skill](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档中的常见排版问题：孤儿词换行、寡段落（标题孤悬页底）、编号错位等。 | 排版质量控制对文档质量的普遍意义 | OPEN（最近更新 2026-03-13） |
| 723 | [feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723) | 涵盖完整测试栈：测试哲学（Testing Trophy）、单元测试（AAA 模式）、React 组件测试（Testing Library）、端到端测试。 | 测试策略全面性、React 测试实践 | OPEN（最近更新 2026-04-21） |
| 568 | [feat: add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM、ITOM、ITAM/SAM、FSM、HRSD、SPM、CSDM、IntegrationHub 等广泛 ServiceNow 模块。 | 企业平台知识广度、非脚本式助手设计 | OPEN（最近更新 2026-04-23） |
| 154 | [Add shodh-memory skill](https://github.com/anthropics/skills/pull/154) | 跨对话持久记忆系统，允许 Agent 保持上下文（`proactive_context` 触发、结构化记忆存储）。 | 长期记忆实现方案、触发机制设计 | OPEN（最近更新 2026-03-03） |
| 83 | [Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83) | 提供两个元技能：质量分析器（5 维度评分）和安全分析器，用于评估其他技能。 | 元技能生态、技能质量评测标准 | OPEN（最近更新 2026-01-07） |
| 363 | [Fix feature-dev workflow phases skipped due to TodoWrite overwrite](https://github.com/anthropics/skills/pull/363) | 修复 `feature-dev` 工作流中 Phase 6/7 被跳过的 bug —— TodoWrite 每次调用覆盖整个任务列表，导致后续阶段丢失。 | 工作流状态管理、TodoWrite 副作用 | OPEN（最近更新 2026-06-03） |
| 190 | [Add 2 community skills: n8n-builder, n8n-debugger](https://github.com/anthropics/skills/pull/190) | 新增 n8n 工作流构建与调试技能，以及 faf-expert（AI 上下文格式专家）。 | 社区贡献流程、n8n 生态支持 | OPEN（最近更新 2026-05-18） |

## 2. 社区需求归类（Issues）

从 50 条 Issue 中（展示前 15 条）归纳社区明确提出的新 Skill 方向或平台功能需求：

### 新 Skill 方向提案
- **Agent 治理技能**（[#412](https://github.com/anthropics/skills/issues/412)）：提出 `agent-governance` 技能，涵盖策略执行、威胁检测、信任评分和审计日志。目前技能集中缺乏针对 Agent 行为安全的专项技能。
- **多文件内联预加载**（[#1220](https://github.com/anthropics/skills/issues/1220)）：用户期望在技能被调用时，`SKILL.md` 引用的多个参考文件（如 `refs/*.md`）能自动内联打包进上下文，避免文件访问失败或上下文碎片。
- **技能可移植性标签规范**（[#1156](https://github.com/anthropics/skills/issues/1156)）：讨论如何为技能添加“可移植性”标记（如是否依赖特定项目配置、跨平台支持），以便用户判断技能的实际适用范围。

### 平台功能需求
- **组织级技能共享**（[#228](https://github.com/anthropics/skills/issues/228)）：要求直接在企业组织内共享 `.skill` 文件，替代当前手动下载-上传的流程。
- **技能市场安全边界**（[#492](https://github.com/anthropics/skills/issues/492)）：社区技能被放置在 `anthropic/` 命名空间下，用户难以区分官方与社区技能，建议引入命名空间隔离或信任标识。
- **技能安装重复问题**（[#189](https://github.com/anthropics/skills/issues/189)）：`document-skills` 和 `example-skills` 插件包含相同技能，安装后导致重复占用上下文。

### 基础设施与工具问题（影响技能体验）
- **评估工具失效**（[#556](https://github.com/anthropics/skills/issues/556)）：`run_eval.py` 对任何查询均返回 0% 触发率，技能优化流程无法正常运行。
- **Windows 兼容性**（[#1099](https://github.com/anthropics/skills/issues/1099)、[#1050](https://github.com/anthropics/skills/issues/1050)）：多个 PR 和 Issue 指出子进程调用、编码问题导致 Windows 用户无法使用技能创建和评估工具。

## 3. 活跃待合并 Skills（评论活跃但尚未合并）

以下 PR 当前讨论活跃，均处于 OPEN 状态，合并时间未知：

| PR | 讨论焦点 | 当前状态 |
|----|---------|---------|
| [#1140](https://github.com/anthropics/skills/pull/1140) agent-creator | 多工具并行调用的评估修复、Windows %APPDATA% 路径支持；Issue #1120 要求增加 agent 动态组合能力。 | 最近更新 2026-06-02，讨论中 |
| [#363](https://github.com/anthropics/skills/pull/363) feature-dev workflow | `TodoWrite` 覆盖导致工作流阶段丢失，修复方案涉及阶段状态持久化。 | 最近更新 2026-06-03，需评审 |
| [#1099](https://github.com/anthropics/skills/pull/1099) skill-creator Windows 崩溃 | `run_eval.py` 在 Windows 上子进程管道读取失败导致查询全失败，社区已报告复现步骤。 | 最近更新 2026-05-24，等待合并 |
| [#1050](https://github.com/anthropics/skills/pull/1050) Windows subprocess + encoding | `subprocess.Popen` 因 `claude.cmd` 未被正确调用、编码问题导致失败。一行修复，但需确认跨平台影响。 | 最近更新 2026-05-24，讨论中 |
| [#541](https://github.com/anthropics/skills/pull/541) docx tracked change ID | `w:id` 与已有书签 ID 冲突导致文档损坏，建议改用动态 ID 生成。 | 最近更新 2026-04-16，待 Code Review |
| [#190](https://github.com/anthropics/skills/pull/190) n8n-builder & others | 社区贡献的 n8n 技能、faf-expert 技能；讨论聚焦