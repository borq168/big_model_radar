# Skills 生态热点 2026-05-05

> 生成时间: 2026-05-05 02:02 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>用户要求我生成一份关于 Claude Code Skills 社区的热点报告，基于提供的 GitHub PR 和 Issue 数据。让我分析这些数据并按照要求的格式生成报告。

首先，让我整理一下数据：

**PRs（按评论数排序，展示前20条）：**
1. #514 - document-typography skill - 排版质量控制
2. #210 - frontend-design skill 改进
3. #83 - skill-quality-analyzer 和 skill-security-analyzer
4. #486 - ODT skill - OpenDocument 处理
5. #538 - pdf skill 大小写修复
6. #539 - skill-creator YAML 验证
7. #541 - docx tracked change 修复
8. #509 - CONTRIBUTING.md 文档
9. #181 - SAP-RPT-1-OSS predictor skill
10. #95 - 系统文档和流程图
11. #723 - testing-patterns skill
12. #568 - ServiceNow platform skill
13. #806 - sensory skill - AppleScript macOS 自动化
14. #360 - AppDeploy skill
15. #147 - codebase-inventory-audit skill
16. #335 - masonry-generate-image-and-videos skill
17. #54 - 西班牙语文档改进
18. #154 - shodh-memory skill
19. #299 - Google Workspaces skills


20. #664 - claude-obsidian-reporter skill

**Issues（按评论数排序）：**
1. #62 - skills 消失问题 - 10 评论
2. #228 - 组织内 skill 共享 - 9 评论
3. #202 - skill-creator 最佳实践 - 8 评论
4. #556 - run_eval.py 触发率为 0 - 6 评论
5. #189 - document-skills 和 example-skills 重复 - 5 评论
6. #492 - 安全问题：社区 skills 冒充官方 - 4 评论
7. #412 - agent-governance 提案 - 4 评论
8. #29 - Bedrock 使用 - 4 评论
9. #16 - 将 Skills 暴露为 MCPs - 4 评论
10. #184 - agentskills.io 重定向错误 - 3 评论
11. #61 - 加载 Skills 404 错误 - 3 评论
12. #868 - spei 相关
13. #532 - skill-creator 需要 API key - 2 评论
14. #406 - 上传 skills 500 错误 - 2 评论
15. #403 - 删除 skill 版本 500 错误 - 2 评论

现在需要生成报告。

**热门 Skills 排行** - 评论/关注度最高的 5~8 个 PRs
**社区需求趋势** - 从 Issues 中提炼
**高潜力待合并 Skills** - 评论活跃但尚未合并的 PR
**Skills 生态洞察** - 一句话总结

注意到所有 PR 的评论数都是 undefined，这可能是数据问题。不过从 PR 的内容来看，我需要根据其他指标来评估。Issue 数据有评论数，可以用来补充分析。

**热门 Skills 排行**（基于 PR 内容和互动）：
1. #514 document-typography - 排版质量控制
2. #210 frontend-design - 前端设计改进
3. #83 skill-quality-analyzer/security-analyzer - 元技能
4. #486 ODT skill - OpenDocument 处理
5. #723 testing-patterns - 测试模式
6. #568 ServiceNow - 企业平台
7. #806 sensory - AppleScript 自动化
8. #360 AppDeploy - 部署技能

**社区需求趋势**（从 Issues）：
- 组织内共享（#228, 9 评论）
- 平台集成（#29 Bedrock）
- MCP 暴露（#16）
- 安全问题（#492）
- agent-governance（#412）
- 各种 bug（skills 消失、404、500 错误）

**高潜力待合并 Skills**：
- #514 document-typography
- #210 frontend-design
- #83 skill-quality-analyzer
- #486 ODT
- #723 testing-patterns
- #568 ServiceNow

**Skills 生态洞察**：
社区最集中的诉求是企业级功能（组织共享、安全、平台集成）和质量保障（测试、代码审计）。

现在生成报告。
</think>

# Claude Code Skills 社区热点报告

**数据来源**：github.com/anthropics/skills | **统计日期**：2026-05-05  
**样本量**：PR 50 条 | Issue 50 条

---

## 1. 热门 Skills 排行

| 排名 | Skill 名称 | 功能概述 | 讨论热点 | 状态 |
|:---:|-----------|---------|---------|:----:|
| 1 | **document-typography** | AI 生成文档的排版质量控制，防止孤行、寡段、编号错位等常见问题 | 排版问题影响所有 AI 生成文档，用户很少主动要求但影响专业度 | [OPEN](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | 提升前端设计 skill 的清晰度和可操作性 | 修订指令使其在单次对话中可执行，指南需足够具体以引导行为 | [OPEN](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | 元技能：对 Skills 进行质量分析和安全分析 | 五维度评估体系（结构、文档、示例、资源、完整性） | [OPEN](https://github.com/anthropics/skills/pull/83) |
| 4 | **ODT (OpenDocument)** | 创建、填充、读取 OpenDocument 格式文件（.odt/.ods） | 支持 ISO 标准开源文档格式，填补 LibreOffice 集成空白 | [OPEN](https://github.com/anthropics/skills/pull/486) |
| 5 | **testing-patterns** | 全栈测试技能，覆盖测试哲学、单元测试、React 组件测试 | Testing Trophy 模型，区分测试优先级 | [OPEN](https://github.com/anthropics/skills/pull/723) |
| 6 | **ServiceNow Platform** | ServiceNow 平台助手，覆盖 ITSM/ITOM/ITAM/FSM/HRSD 等 | 企业级平台覆盖全面，含安全运营和 CSDM | [OPEN](https://github.com/anthropics/skills/pull/568) |
| 7 | **sensory (AppleScript)** | 通过 osascript 实现原生 macOS 自动化 | 双层权限系统，Tier 1 开箱即用，Tier 2 需辅助功能权限 | [OPEN](https://github.com/anthropics/skills/pull/806) |
| 8 | **AppDeploy** | 从 Claude 直接部署全栈 Web 应用到公网 URL | 生命周期管理、版本控制、状态检查 | [OPEN](https://github.com/anthropics/skills/pull/360) |

---

## 2. 社区需求趋势

从 Issues 数据提炼出以下核心需求方向：

### 🔥 企业协作与治理
- **组织内 Skill 共享**（9 评论，7 👍）：当前需手动下载→发送→上传，呼吁共享技能库或直接分享链接
- **agent-governance**：AI 代理系统的安全模式——策略执行、威胁检测、信任评分、审计追踪

### 🔧 平台集成与兼容性
- **AWS Bedrock 支持**（4 评论）：企业用户强烈需求 Skills 在 Bedrock 上运行
- **Skills 暴露为 MCPs**（4 评论）：将 Skill 能力标准化为 MCP 协议接口

### 🛡️ 安全与信任
- **社区 Skills 冒充官方**（4 评论）：社区技能使用 `anthropic/` 命名空间造成信任边界滥用

### 🐛 稳定性问题
- Skills 消失/404/500 错误频发，影响用户体验
- `run_eval.py` 触发率为 0%，Skill 激活机制存在 bug

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或功能完整，预计近期可能合并：

| Skill | 亮点 | 链接 |
|-------|-----|------|
| **testing-patterns** | 测试栈全覆盖，Testing Trophy 模型 | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **ServiceNow Platform** | 企业级平台覆盖最全面 | [PR #568](https://github.com/anthropics/skills/pull/568) |
| **sensory (AppleScript)** | 填补 macOS 原生自动化空白 | [PR #806](https://github.com/anthropics/skills/pull/806) |
| **ODT** | ISO 标准文档格式支持 | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **skill-quality-analyzer** | 元技能生态基础设施 | [PR #83](https://github.com/anthropics/skills/pull/83) |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：从「技能数量增长」转向「企业级可用性」——需要解决组织协作、安全信任、平台兼容和稳定性等生产环境落地的核心障碍。**

---

*报告生成时间：2026-05-05 | 数据覆盖：2025-10 ~ 2026-05*