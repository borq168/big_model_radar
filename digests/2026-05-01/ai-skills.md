# Skills 生态热点 2026-05-01

> 生成时间: 2026-05-01 02:10 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>用户要求我生成一份关于 Claude Code Skills 社区的热点报告，基于提供的 GitHub PR 和 Issue 数据。让我分析这些数据并按照要求的四个部分来组织报告。

首先，让我整理一下数据：

**PRs（按评论数排序，展示前20条）：**
1. #514 - document-typography skill - 排版质量控制
2. #538 - fix(pdf): 修复大小写敏感问题
3. #83 - skill-quality-analyzer 和 skill-security-analyzer
4. #210 - frontend-design skill 改进
5. #486 - ODT skill - OpenDocument 处理
6. #539 - fix(skill-creator): YAML 特殊字符警告
7. #541 - fix(docx): 防止 tracked change w:id 冲突
8. #509 - docs: 添加 CONTRIBUTING.md
9. #723 - testing-patterns skill
10. #95 - 系统文档和流程图
11. #181 - SAP-RPT-1-OSS predictor skill
12. #335 - masonry-generate-image-and-videos skill
13. #54 - 西班牙语文档改进
14. #806 - sensory skill - AppleScript 自动化
15. #147 - codebase-inventory-audit skill
16. #154 - shodh-memory skill - 持久化上下文
17. #568 - ServiceNow platform skill
18. #666 - 移除重复的 skill-creator


19. #664 - claude-obsidian-reporter
20. #616 - HADS skill - 文档标准

**Issues（按评论数排序）：**
1. #62 - 技能消失问题 (10条评论)
2. #228 - 组织内技能共享 (9条评论)
3. #202 - skill-creator 应更新最佳实践 (8条评论)
4. #556 - run_eval.py 技能触发率 0% (6条评论)
5. #189 - 文档技能重复 (5条评论)
6. #492 - 安全问题：社区技能信任边界 (4条评论)
7. #412 - 代理治理技能提案 (4条评论)
8. #29 - Bedrock 使用问题 (4条评论)
9. #16 - 将技能暴露为 MCP (4条评论)
10. #184 - agentskills.io 重定向错误 (3条评论)
11. #61 - 加载技能时 404 错误 (3条评论)
12. #868 - spei (2条评论)
13. #532 - skill-creator 需要 API key (2条评论)
14. #406 - 无法上传技能 (2条评论)
15. #403 - 无法删除技能版本 (2条评论)

现在需要整理成四个主要部分来呈现这些数据。

首先识别最活跃的 PR，按评论数排序后发现大多数 PR 的评论数都未定义，这表明评论数据可能不完整或缺失。需要重新评估排序方式，可能应该考虑其他指标如点赞数或活动状态。

从现有数据来看，#514 的 document-typography skill 涉及排版质量控制，#538 修复了 PDF 相关的大小写问题，#83 引入了质量分析器，#210 改进了前端设计技能，#486 添加了 ODT 支持，#539 和 #541 分别修复了 YAML 和 DOCX 的问题，#509 添加了贡献指南，#723 引入了测试模式技能，#806 提供了 AppleScript 自动化功能，#568 扩展了 ServiceNow 平台支持，#616 提出了 HADS 文档标准。

在 Issues 中，#62 获得了 10 条评论但未定义点赞数，#228 有 9 条评论和 7 个赞，#202 有 8 条评论，#556 有 6 条评论和 6 个赞，#189 有 5 条评论和 7 个赞，#492 有 4 条评论和 2 个赞，#412 有 4 条评论但未定义点赞数，#29 有 4 条评论但未定义点赞数，#16 有 4 条评论但未定义点赞数。

现在需要整理成报告格式。
</think>

# Claude Code Skills 社区热点报告

**数据来源**: github.com/anthropics/skills | **统计日期**: 2026-05-01

---

## 1. 热门 Skills 排行

以下为近期社区关注度最高的 Skills（按 PR 活跃度与功能影响力综合评估）：

| 排名 | Skill 名称 | 功能概述 | 讨论热点 | 状态 |
|:---:|---|---|---|:---:|
| 1 | **document-typography** | AI 生成文档的排版质量控制，防止孤行、寡段、编号错位等常见问题 | 排版缺陷影响所有 AI 生成文档，用户对专业输出质量需求强烈 | [OPEN](https://github.com/anthropics/skills/pull/514) |
| 2 | **testing-patterns** | 全栈测试技能，覆盖测试哲学、单元测试、React 组件测试、集成测试、E2E | 填补 Claude Code 在测试工作流指导上的空白 | [OPEN](https://github.com/anthropics/skills/pull/723) |
| 3 | **ODT (OpenDocument)** | 创建、填充、读取 OpenDocument 格式文件（.odt/.ods），支持转换为 HTML | 开放标准文档处理能力，ISO 标准兼容性需求 | [OPEN](https://github.com/anthropics/skills/pull/486) |
| 4 | **ServiceNow Platform** | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/CSM/SPM/安全等全平台能力 | 企业级 ServiceNow 生态集成，需求覆盖面广 | [OPEN](https://github.com/anthropics/skills/pull/568) |
| 5 | **sensory (AppleScript)** | 教 Claude 使用 osascript 实现原生 macOS 自动化，替代截图式 computer use | 两级权限设计（无需权限的 Tier 1 + 需辅助功能的 Tier 2） | [OPEN](https://github.com/anthropics/skills/pull/806) |
| 6 | **HADS (Human-AI Doc Standard)** | 轻量级 Markdown 约定，同时服务人类和 AI 读者 | 解决 AI 模型先于人类阅读文档的场景需求 | [OPEN](https://github.com/anthropics/skills/pull/616) |
| 7 | **claude-obsidian-reporter** | 自动读取 Git 提交，生成 Obsidian 格式的日/周/月报 | 开发者工作流自动化，Claude Code 与笔记工具集成 | [OPEN](https://github.com/anthropics/skills/pull/664) |
| 8 | **SAP-RPT-1-OSS Predictor** | SAP 开源表格基础模型的预测分析技能 | 企业数据预测场景，SAP 生态集成 | [OPEN](https://github.com/anthropics/skills/pull/181) |

---

## 2. 社区需求趋势

从 Issues 中提炼出以下核心需求方向：

### 🔴 高优先级问题

| Issue | 核心诉求 | 链接 |
|---|---|---|
| **#62** 技能消失/错误 | 用户创建的 12 个复杂 Skills 突然不可见，文件重命名导致引用断裂 | [查看](https://github.com/anthropics/skills/issues/62) |
| **#556** run_eval.py 触发率 0% | 技能评估脚本无法正确触发 Skills，测试机制失效 | [查看](https://github.com/anthropics/skills/issues/556) |
| **#406/#403** 上传/删除失败 | API 返回 500 错误，用户无法管理 Skills | [查看](https://github.com/anthropics/skills/issues/406) |

### 🟡 功能增强需求

| 需求方向 | Issue | 说明 |
|---|---|---|
| **组织内技能共享** | #228 (9评论, 7👍) | 当前需手动下载/上传/分享，缺少企业级共享机制 |
| **Skill 质量标准** | #202 (8评论) | skill-creator 应更新为最佳实践，提升技能创建效率 |
| **Skill 暴露为 MCP** | #16 (4评论) | 将 Skills 封装为 MCP 协议接口，实现标准化软件封装 |
| **信任边界安全** | #492 (4评论) | 社区技能使用 anthropic/ 命名空间冒充官方，存在安全风险 |

### 🟢 新 Skill 提案

| 提案 | Issue | 状态 |
|---|---|---|
| **agent-governance** | #412 | 代理治理模式：策略执行、威胁检测、信任评分、审计追踪 |
| **skill-quality-analyzer** | #83 | 元技能：评估 Skills 的结构、文档、安全等五维度质量 |
| **codebase-inventory-audit** | #147 | 代码库清理与文档审计，识别孤儿代码和文档缺口 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或功能价值突出，预计近期可能合并落地：

| Skill | 亮点 | 合并优先级 |
|---|---|:---:|
| **testing-patterns** (#723) | 全栈测试覆盖完整，填补工作流空白 | ⭐⭐⭐⭐⭐ |
| **document-typography** (#514) | 解决高频痛点，适用所有文档生成场景 | ⭐⭐⭐⭐⭐ |
| **fix(docx) w:id 冲突** (#541) | 修复文档损坏 bug，影响实际使用 | ⭐⭐⭐⭐ |
| **fix(skill-creator) YAML 验证** (#539) | 防止静默解析失败，提升创建工具健壮性 | ⭐⭐⭐⭐ |
| **CONTRIBUTING.md** (#509) | 解决社区健康指标（当前仅 25%），降低贡献门槛 | ⭐⭐⭐⭐ |
| **sensory AppleScript** (#806) | 突破截图式 automation，扩展 Claude 原生能力 | ⭐⭐⭐⭐ |
| **HADS 文档标准** (#616) | 创新文档范式，适配 AI-first 阅读习惯 | ⭐⭐⭐ |

> ⚠️ **注意**: #666 提议移除重复的 skill-creator，建议合并前确认与 claude-plugins-official 的功能差异。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：完善 Skills 的生命周期管理机制（创建→验证→共享→安全），同时扩展垂直领域覆盖（测试、文档排版、企业平台集成），以满足从个人开发者到企业团队的多层次需求。**

---

### 附：关键数据摘要

| 指标 | 数值 |
|---|---|
| 分析 PR 总数 | 50 |
| 分析 Issue 总数 | 50 |
| 最高评论 Issue | #62 (10条) |
| 最高点赞 Issue | #228, #189 (各7👍) |
| OPEN 状态 PR | 全部 50 条 |
| CLOSED 状态 Issue | 5 条 |

---

*报告生成时间: 2026-05-01 | 数据覆盖: github.com/anthropics/skills*

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*