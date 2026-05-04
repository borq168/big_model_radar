# Skills 生态热点 2026-05-04

> 生成时间: 2026-05-04 02:02 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>Let me analyze the provided data about the Claude Code Skills repository and generate a comprehensive report.

First, let me organize the data:

**PRs (Pull Requests) - 50 total, showing top 20:**
1. #514 - document-typography skill (typographic quality control)
2. #538 - fix(pdf): correct case-sensitive file references
3. #83 - Add skill-quality-analyzer and skill-security-analyzer
4. #210 - Improve frontend-design skill clarity
5. #486 - Add ODT skill (OpenDocument text)
6. #539 - fix(skill-creator): warn on unquoted description
7. #541 - fix(docx): prevent tracked change w:id collision
8. #509 - docs: add CONTRIBUTING.md
9. #95 - Add comprehensive system documentation
10. #181 - Add SAP-RPT-1-OSS predictor skill
11. #723 - feat: add testing-patterns skill
12. #335 - Add masonry-generate-image-and-videos skill
13. #806 - feat: add sensory skill (AppleScript macOS automation)
14. #54 - Añadida mejora en los docs
15. #154 - Add shodh-memory skill (persistent context)
16. #147 - Add codebase-inventory-audit skill
17. #568 - feat: add ServiceNow platform skill
18. #36 - Fix skill-creator frontmatter validation
19. #664 - Add claude-obsidian-reporter
20. #616 - add: HADS skill (Human-AI Document Standard)

**Issues - 50 total, showing top 15:**
1. #62 - Skills disappeared (10 comments)
2. #228 - Enable org-wide skill sharing (9 comments, 7 👍)


3. #202 - skill-creator should be updated to best practice (8 comments)
4. #556 - run_eval.py never triggers skills (6 comments, 6 👍)
5. #189 - document-skills and example-skills plugins install identical content (5 comments, 7 👍)
6. #492 - Security: Community skills under anthropic/ namespace (4 comments)
7. #412 - Skill proposal: agent-governance (4 comments)
8. #29 - Usage with bedrock (4 comments)
9. #16 - Expose Skills as MCPs (4 comments)
10. #184 - agentskills.io page redirect error (3 comments)
11. #61 - "Not found" error when loading Skills (3 comments)
12. #868 - spei (2 comments)
13. #532 - skill-creator: description optimizer requires ANTHROPIC_API_KEY (2 comments)
14. #406 - unable to upload or replace existing skills (2 comments)
15. #403 - Unable to delete skill versions (2 comments)

Now I'll structure the report with the most impactful findings. The issues reveal several critical gaps: skill sharing across organizations needs improvement, the evaluation framework isn't properly triggering skills, plugin duplication is causing confusion, and there are security concerns around namespace usage. The skill-creator tool itself has API key dependencies that limit functionality, while basic operations like uploading and deleting skills are experiencing server errors.
</think>

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills | 统计日期：2026-05-04

---

## 1. 热门 Skills 排行

以下为当前社区关注度最高的 Skills（按 PR 热度/功能性综合评估）：

| # | Skill 名称 | 功能定位 | 讨论热点 | 状态 |
|---|-----------|---------|---------|------|
| 1 | **testing-patterns** | 全栈测试技能，覆盖单元测试、React 组件测试、E2E、Mock 等 | 填补 Claude Code 在测试场景的系统性指导空白 | [OPEN #723](https://github.com/anthropics/skills/pull/723) |
| 2 | **ServiceNow Platform** | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/CSM 等全模块 | 企业级 ServiceNow 平台助手需求旺盛，一站式覆盖降低学习成本 | [OPEN #568](https://github.com/anthropics/skills/pull/568) |
| 3 | **document-typography** | AI 生成文档的排版质量控制（孤行、寡段、编号错位） | 解决 AI 生成文档的"最后一公里"排版问题，通用性强 | [OPEN #514](https://github.com/anthropics/skills/pull/514) |
| 4 | **sensory (AppleScript)** | 原生 macOS 自动化，通过 osascript 替代截图式 computer use | Tier 1/2 权限分层设计兼顾安全与可用性，macOS 自动化场景明确 | [OPEN #806](https://github.com/anthropics/skills/pull/806) |
| 5 | **ODT (OpenDocument)** | 创建、填充、解析 OpenDocument 格式文件 | 填补开源/ISO 标准文档格式支持空白，覆盖 .odt/.ods | [OPEN #486](https://github.com/anthropics/skills/pull/486) |
| 6 | **HADS (Human-AI Document Standard)** | Markdown 双用途文档规范，人机共读 | 提出"AI 先读文档"场景下的文档写作范式创新 | [OPEN #616](https://github.com/anthropics/skills/pull/616) |
| 7 | **claude-obsidian-reporter** | 自动将 Git 提交写入 Obsidian 日/周/月报 | 开发者工作流自动化，Obsidian 生态集成 | [OPEN #664](https://github.com/anthropics/skills/pull/664) |
| 8 | **SAP-RPT-1-OSS** | SAP 开源表格预测模型集成 | 企业数据分析场景，SAP 生态深度集成 | [OPEN #181](https://github.com/anthropics/skills/pull/181) |

---

## 2. 社区需求趋势

从 Issues 中提炼出的核心诉求方向：

### 🔴 高优先级痛点

| 需求方向 | Issue 链接 | 核心诉求 |
|---------|-----------|---------|
| **组织内 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) (9评论, 7👍) | 企业用户希望有共享 Skill 库或直接分享链接，而非手动上传下载 |
| **Skill 触发率问题** | [#556](https://github.com/anthropics/skills/issues/556) (6评论, 6👍) | `run_eval.py` 中 `claude -p` 触发 Skills 的成功率为 0%，严重阻碍 Skill 验证 |
| **插件内容重复** | [#189](https://github.com/anthropics/skills/issues/189) (5评论, 7👍) | `document-skills` 和 `example-skills` 安装后产生重复 Skill，污染上下文 |

### 🟡 功能性需求

| 需求方向 | Issue 链接 | 核心诉求 |
|---------|-----------|---------|
| **Agent 治理能力** | [#412](https://github.com/anthropics/skills/issues/412) | 政策执行、威胁检测、信任评分、审计追踪等 AI Agent 安全模式 |
| **Skills 暴露为 MCP** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skill 能力以 MCP 协议暴露，实现标准化 API 封装 |
| **Bedrock 集成** | [#29](https://github.com/anthropics/skills/issues/29) | 在 AWS Bedrock 上运行 Skills 的路径不明确 |

### 🟠 安全与信任

| 需求方向 | Issue 链接 | 核心诉求 |
|---------|-----------|---------|
| **命名空间滥用** | [#492](https://github.com/anthropics/skills/issues/492) | 社区 Skill 伪装成官方 `anthropic/` 命名空间，存在信任边界风险 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论/交互活跃，具备近期合并潜力：

| Skill | 亮点 | 合并催化因素 |
|-------|------|-------------|
| **testing-patterns** (#723) | 测试金宇塔全覆盖，文档完整 | 社区对测试能力呼声高，文档结构规范 |
| **ServiceNow** (#568) | 覆盖 10+ ServiceNow 模块 | 企业级需求明确，功能范围全面 |
| **sensory** (#806) | AppleScript 自动化，Tier 权限设计 | macOS 自动化场景独特，方案安全可控 |
| **skill-quality-analyzer** (#83) | 元技能，评估 Skill 质量五维度 | 生态治理工具，可提升整体 Skill 质量 |
| **shodh-memory** (#154) | 跨会话持久化上下文 | Agent 记忆系统是高级用例的核心基础设施 |

> ⚠️ **注意**：`skill-creator` 相关 PR（#539, #541, #36）修复了 YAML 解析、OOXML ID 冲突等生产级 Bug，预计会优先合并。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：企业级协作与 Skill 质量保障——从 Skill 的触发验证、跨组织共享，到元技能（质量分析、安全审计）的体系建设，生态正从"数量增长"向"质量可控"演进。**

---

### 附：关键基础设施问题（影响 Skill 落地）

| 问题 | 影响 | 优先级 |
|-----|------|-------|
| `run_eval.py` Skill 触发率 0% | 无法验证 Skill 是否正常工作 | 🔴 阻塞 |
| Skill 上传/删除 API 返回 500 | 用户无法管理自定义 Skill | 🔴 阻塞 |
| `document-skills` 与 `example-skills` 重复 | 上下文污染 | 🟡 体验 |
| 社区 Skill 伪装官方命名空间 | 安全信任风险 | 🟡 安全 |

---

*报告生成时间：2026-05-04 | 数据覆盖：50 PR + 50 Issues*

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*