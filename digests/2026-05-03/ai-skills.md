# Skills 生态热点 2026-05-03

> 生成时间: 2026-05-03 02:01 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>用户要求我作为技术分析师，基于提供的 GitHub 数据生成一份 Skills 社区热点报告。让我分析这些数据：

**PR 数据分析（按评论数排序，展示前20条）：**
1. #514 - document-typography skill - 排版质量控制
2. #538 - fix(pdf): 大小写敏感文件引用修复
3. #83 - skill-quality-analyzer 和 skill-security-analyzer
4. #210 - frontend-design skill 改进
5. #486 - ODT skill - OpenDocument 处理
6. #539 - fix(skill-creator): YAML 特殊字符警告
7. #541 - fix(docx): 书签与修订冲突修复
8. #509 - docs: 添加 CONTRIBUTING.md
9. #95 - 系统文档和流程图
10. #181 - SAP-RPT-1-OSS 预测技能
11. #723 - testing-patterns skill
12. #335 - masonry-generate-image-and-videos skill
13. #806 - sensory skill - AppleScript 自动化
14. #54 - 西班牙语文档改进
15. #154 - shodh-memory skill - 持久化上下文
16. #147 - codebase-inventory-audit skill
17. #568 - ServiceNow platform skill
18. #666 - 移除重复的 skill-creator


19. #664 - claude-obsidian-reporter
20. #616 - HADS skill - 文档标准

**Issue 数据分析（按评论数排序）：**
1. #62 - 技能消失问题 (10条评论)
2. #228 - 组织内技能共享 (9条评论)
3. #202 - skill-creator 应更新最佳实践 (8条评论)
4. #556 - run_eval.py 技能触发率0% (6条评论)
5. #189 - 文档和示例技能重复 (5条评论)
6. #492 - 安全问题：社区技能信任边界 (4条评论)
7. #412 - agent-governance 技能提案 (4条评论)
8. #29 - Bedrock 使用问题 (4条评论)
9. #16 - 将技能暴露为 MCP (4条评论)
10. #184 - agentskills.io 重定向错误 (3条评论)
11. #61 - 加载技能404错误 (3条评论)
12. #868 - spei 相关 (2条评论)
13. #532 - skill-creator 需要 API key (2条评论)
14. #406 - 无法上传技能 (2条评论)
15. #403 - 无法删除技能版本 (2条评论)

现在需要整理成报告格式。
</think>

# Skills 社区热点报告

> 数据来源：github.com/anthropics/skills | 统计日期：2026-05-03  
> 样本范围：50 条 PR + 50 条 Issues

---

## 1. 热门 Skills 排行

| 排名 | Skill 名称 | 功能定位 | 讨论热点 | 状态 |
|:---:|------------|----------|----------|:----:|
| 1 | **document-typography** | AI 生成文档的排版质量控制（孤行/寡行控制、编号对齐） | 解决所有 AI 文档生成的通用排版问题 | 🔵 OPEN |
| 2 | **testing-patterns** | 完整测试栈指南（测试哲学、单元测试、React 组件测试） | Testing Trophy 模型与实践落地 | 🔵 OPEN |
| 3 | **ServiceNow platform** | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD 等全平台能力 | 企业级 ServiceNow 生态整合 | 🔵 OPEN |
| 4 | **ODT (OpenDocument)** | 创建、填充、解析 OpenDocument 格式文件 | ISO 标准文档格式支持 | 🔵 OPEN |
| 5 | **sensory (AppleScript)** | 原生 macOS 自动化，替代截图式 computer use | 两层权限系统设计 | 🔵 OPEN |
| 6 | **claude-obsidian-reporter** | 自动生成 Git 提交日报/周报/月报写入 Obsidian | 开发者工作流自动化 | 🔵 OPEN |
| 7 | **HADS (Human-AI Doc Standard)** | Markdown 文档规范，同时服务人类和 AI 读者 | 文档双轨维护问题 | 🔵 OPEN |
| 8 | **SAP-RPT-1-OSS predictor** | SAP 表格基础模型的预测分析技能 | 企业数据分析场景 | 🔵 OPEN |

**📌 链接：**
- document-typography: https://github.com/anthropics/skills/pull/514
- testing-patterns: https://github.com/anthropics/skills/pull/723
- ServiceNow: https://github.com/anthropics/skills/pull/568
- ODT: https://github.com/anthropics/skills/pull/486
- sensory: https://github.com/anthropics/skills/pull/806
- claude-obsidian-reporter: https://github.com/anthropics/skills/pull/664
- HADS: https://github.com/anthropics/skills/pull/616
- SAP-RPT-1-OSS: https://github.com/anthropics/skills/pull/181

---

## 2. 社区需求趋势

从 Issues 中提炼出以下高优先级需求方向：

### 🔴 核心痛点

| 需求方向 | Issue | 核心诉求 |
|----------|-------|----------|
| **组织级技能共享** | #228 (9👍) | 企业内直接共享技能库，消除手动上传/下载流程 |
| **技能触发可靠性** | #556 (6👍) | `run_eval.py` 中技能触发率为 0%，严重影响开发验证 |
| **技能重复/冲突** | #189 (5👍) | `document-skills` 与 `example-skills` 内容完全重复 |

### 🟡 功能增强

| 需求方向 | Issue | 核心诉求 |
|----------|-------|----------|
| **安全信任边界** | #492 (4👍) | 社区技能冒用 `anthropic/` 命名空间，误导用户信任 |
| **MCP 标准化** | #16 (4👍) | 将 Skills 暴露为 MCP 协议接口，实现统一打包分发 |
| **Agent 治理** | #412 (4👍) | 政策执行、威胁检测、审计追踪等 AI Agent 安全模式 |

### 🟢 基础设施

| 需求方向 | Issue | 核心诉求 |
|----------|-------|----------|
| **skill-creator 改进** | #202 (8👍) | 当前过于冗长、教育性强，应改为可执行指令风格 |
| **API Key 依赖** | #532 (2👍) | 企业 SSO 用户无法使用描述优化功能 |
| **Bedrock 兼容** | #29 (4👍) | 技能在 AWS Bedrock 上的运行支持 |

**📌 链接：**
- 组织共享: https://github.com/anthropics/skills/issues/228
- 触发率问题: https://github.com/anthropics/skills/issues/556
- 技能重复: https://github.com/anthropics/skills/issues/189
- 安全问题: https://github.com/anthropics/skills/issues/492
- MCP 标准化: https://github.com/anthropics/skills/issues/16
- Agent 治理: https://github.com/anthropics/skills/issues/412

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或功能价值突出，预计近期可能合并：

| Skill | 亮点 | 合并优先级 |
|-------|------|:----------:|
| **testing-patterns** (#723) | 覆盖完整测试栈，含 Testing Trophy 理念 | ⭐⭐⭐⭐⭐ |
| **ServiceNow platform** (#568) | 企业级全平台覆盖，需求明确 | ⭐⭐⭐⭐ |
| **sensory (AppleScript)** (#806) | 创新性替代方案，两层权限设计安全 | ⭐⭐⭐⭐ |
| **claude-obsidian-reporter** (#664) | 开发者工作流刚需，集成度高 | ⭐⭐⭐ |
| **HADS** (#616) | 解决文档双轨维护痛点 | ⭐⭐⭐ |
| **fix(docx)** (#541) | 修复文档损坏 bug，根因清晰 | ⭐⭐⭐ |
| **fix(skill-creator)** (#539) | 防止 YAML 解析静默失败 | ⭐⭐⭐ |

**📌 链接：**
- https://github.com/anthropics/skills/pull/723
- https://github.com/anthropics/skills/pull/568
- https://github.com/anthropics/skills/pull/806
- https://github.com/anthropics/skills/pull/664
- https://github.com/anthropics/skills/pull/616
- https://github.com/anthropics/skills/pull/541
- https://github.com/anthropics/skills/pull/539

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求是：推动 Skills 从「个人工具」向「企业级协作基础设施」演进——核心挑战包括跨组织共享机制、可靠性验证（触发率 0% 的 bug）、安全信任边界划定，以及 skill-creator 本身的工程化成熟度。**

---

*报告生成时间：2026-05-03 | 数据覆盖：50 PR + 50 Issues*

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*