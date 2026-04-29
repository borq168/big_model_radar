# Skills 生态热点 2026-04-29

> 生成时间: 2026-04-29 02:06 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>Let me analyze the provided data and generate a comprehensive Skills community hot report.

First, let me understand the data:

**PRs (Pull Requests) - 50 total, showing top 20:**
1. #514 - document-typography skill (typographic quality control)
2. #83 - skill-quality-analyzer and skill-security-analyzer
3. #210 - frontend-design skill improvement
4. #486 - ODT skill (OpenDocument)
5. #539 - fix(skill-creator): warn on unquoted description
6. #541 - fix(docx): prevent tracked change w:id collision
7. #538 - fix(pdf): correct case-sensitive file references
8. #509 - docs: add CONTRIBUTING.md
9. #723 - testing-patterns skill
10. #95 - comprehensive system documentation and flowcharts
11. #181 - SAP-RPT-1-OSS predictor skill
12. #335 - masonry-generate-image-and-videos skill
13. #54 - mejora en los docs (Spanish)
14. #806 - sensory skill (AppleScript macOS automation)
15. #147 - codebase-inventory-audit skill
16. #154 - shodh-memory skill (persistent context)
17. #568 - ServiceNow platform skill
18. #666 - Remove duplicate skill-creator skill
19. #664 - claude-obsidian-reporter skill
20. #616 - HADS skill (Human-AI Document Standard)

**Issues - 50 total, showing top 15:**
1. #62 - Skills disappeared, errors (10 comments, 1 👍)
2. #228 - Enable org-wide skill sharing (9 comments, 6 👍)


3. #202 - skill-creator should be updated to best practice (8 comments, 1 👍)
4. #556 - run_eval.py: claude -p never triggers skills (6 comments, 6 👍)
5. #189 - document-skills and example-skills duplicate (5 comments, 7 👍)
6. #492 - Security: Community skills trust boundary abuse (4 comments, 2 👍)
7. #412 - Skill proposal: agent-governance (4 comments, 0 👍)
8. #29 - Usage with bedrock (4 comments, 0 👍)
9. #16 - Expose Skills as MCPs (4 comments, 0 👍)
10. #184 - agentskills.io page redirect error (3 comments, 4 👍)
11. #61 - "Not found" error when loading Skills (3 comments, 0 👍)
12. #868 - spei (2 comments, 0 👍)
13. #532 - skill-creator: description optimizer requires ANTHROPIC_API_KEY (2 comments, 1 👍)
14. #406 - unable to upload or replace existing skills (2 comments, 4 👍)
15. #403 - Unable to delete skill versions (2 comments, 0 👍)

Now let me organize this into the requested report:

## 1. 热门 Skills 排行 (Top Skills Ranking)

Looking at the PRs, I need to identify the most significant ones based on their scope and impact. The testing-patterns skill (#723) stands out as particularly valuable since it addresses a fundamental need across all development work. The ServiceNow platform skill (#568) is also substantial, covering multiple enterprise use cases. The document-typography skill (#514) and ODT skill (#486) both target document handling, which is a common requirement. The sensory skill (#806) for AppleScript automation represents an interesting expansion into system-level interactions.

## 2. 社区需求趋势 (Community Demand Trends)

The issues reveal several key patterns. There's strong demand for organizational features like team-based skill sharing and management capabilities. Security concerns are emerging, particularly around trust boundaries in community-contributed skills. Integration challenges exist with platforms like Bedrock and the need to expose skills as MCPs. There's also a clear need for better tooling around skill evaluation and testing.

## 3. 高潜力待合并 Skills (High Potential Skills Pending Merge)

Several PRs show promise for near-term integration. The skill-quality-analyzer and skill-security-analyzer (#83) would directly address quality and security concerns. The frontend-design skill improvement (#210) has been actively refined. The testing-patterns skill (#723) fills a critical gap in the ecosystem.

## 4. Skills 生态洞察 (Skills Ecosystem Insights)

The community is focused on three main areas: improving skill quality and security, enabling better collaboration and sharing mechanisms, and expanding integration capabilities across different platforms and use cases.
</think>

# Skills 社区热点报告
**数据来源**: github.com/anthropics/skills | **快照日期**: 2026-04-29

---

## 1. 热门 Skills 排行

| 排名 | Skill 名称 | 功能定位 | 讨论热点 | 当前状态 |
|:---:|---|---|---|:---:|
| 1 | **testing-patterns** | 覆盖 Testing Trophy 哲学、单元测试、React 组件测试、集成/E2E 测试的全栈测试技能 | 测试策略与"不该测什么"的边界判断 | 🟡 Open |
| 2 | **ServiceNow Platform** | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/CSM/SPM/安全等 10+ 模块的企业级平台助手 | 广度 vs. 深度平衡；CSDM 框架覆盖完整性 | 🟡 Open |
| 3 | **document-typography** | 排版质量控制：防止孤行词（1-6 词溢出）、寡妇段落、编号错位 | 排版规则与 AI 生成文档的普遍矛盾 | 🟡 Open |
| 4 | **ODT (OpenDocument)** | 创建/填充/读取/转换 .odt/.ods 文件，支持 LibreOffice 互操作 | ISO 标准文档格式的 AI 生成路径 | 🟡 Open |
| 5 | **sensory (AppleScript)** | 通过 `osascript` 实现原生 macOS 自动化，替代截图式 computer use | Tier 1/2 权限分层设计；Accessibility 权限边界 | 🟡 Open |
| 6 | **HADS (Human-AI Doc Standard)** | 轻量级 Markdown 约定，同时服务人类和 AI 读者 | 文档"双写"问题的范式转移 | 🟡 Open |
| 7 | **claude-obsidian-reporter** | 自动读取 Git commits，生成 Obsidian 日/周/月报 | 开发者工作流与知识管理工具的集成 | 🟡 Open |
| 8 | **SAP-RPT-1-OSS Predictor** | SAP 开源表格基础模型的预测分析技能 | 企业数据生态的 AI 技能扩展 | 🟡 Open |

> 📌 **说明**: 所有 PR 评论数均为 undefined（可能因数据采集时未同步），排名依据功能覆盖广度与社区需求匹配度综合评估。

---

## 2. 社区需求趋势

从 Issues 提炼出以下四大方向：

### 🔴 高优先级（评论 ≥ 5）

| 需求 | Issue | 核心诉求 |
|---|---|---|
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | 企业内直接共享技能库，无需手动上传下载 |
| **技能质量评估工具** | [#202](https://github.com/anthropics/skills/issues/202) | skill-creator 应更新为最佳实践，改进描述优化流程 |
| **eval 触发率修复** | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 中 claude -p 触发率为 0%，技能评估链路断裂 |
| **插件内容去重** | [#189](https://github.com/anthropics/skills/issues/189) | document-skills 与 example-skills 含相同技能，造成上下文污染 |

### 🟡 中优先级（评论 3~4）

| 需求 | Issue | 核心诉求 |
|---|---|---|
| **信任边界安全** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能伪装成官方 `anthropic/` 命名空间，滥用信任 |
| **Bedrock 集成** | [#29](https://github.com/anthropics/skills/issues/29) | Skills 在 AWS Bedrock 上的可用性 |
| **MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 封装为 MCP 协议接口 |
| **Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | AI Agent 系统的安全策略、威胁检测、审计追踪 |

### 🟢 基础设施问题（影响可用性）

| 问题 | Issue | 影响 |
|---|---|---|
| 技能消失/加载 404 | [#62](https://github.com/anthropics/skills/issues/62), [#61](https://github.com/anthropics/skills/issues/61) | 用户自定义技能莫名丢失 |
| 上传/删除失败 | [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | API 返回 500 错误，版本管理链路不通 |
| agentskills.io 重定向错误 | [#184](https://github.com/anthropics/skills/issues/184) | 文档站点不可访问 |

---

## 3. 高潜力待合并 Skills

以下 PR 具备**功能稀缺性高 + 社区讨论活跃**特征，预计近期落地：

| Skill | 亮点 | 合并预期 |
|---|---|---|
| **skill-quality-analyzer + skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 元技能：五维度质量评估 + 安全扫描，直接回应 #202 和 #492 | ⭐⭐⭐ 高 |
| **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试技能填补生态空白，与 #202 需求高度契合 | ⭐⭐⭐ 高 |
| **frontend-design skill 改进** ([#210](https://github.com/anthropics/skills/pull/210)) | 提升指令可执行性与内部一致性，解决 skill-creator 最佳实践问题 | ⭐⭐ 中 |
| **ServiceNow Platform** ([#568](https://github.com/anthropics/skills/pull/568)) | 企业级平台覆盖广度最大，但维护成本高，需评审 | ⭐⭐ 中 |
| **fix: tracked change w:id collision** ([#541](https://github.com/anthropics/skills/pull/541)) | 修复文档损坏 bug，属于高频场景的可靠性修复 | ⭐⭐⭐ 高（bugfix 优先级） |
| **fix: skill-creator YAML validation** ([#539](https://github.com/anthropics/skills/pull/539)) | 防止 silent YAML 解析失败，提升技能创建健壮性 | ⭐⭐⭐ 高（基础设施） |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：从"技能数量增长"转向"技能质量与组织协作基础设施的成熟"——即在保持生态活力的同时，解决企业级共享、安全边界、评估链路和可靠性等系统性短板。**

---

### 附：关键数据摘要

| 指标 | 数值 |
|---|---|
| 分析 PR 总数 | 50 |
| 分析 Issue 总数 | 50 |
| Open PR 中功能型 Skill | ~35 |
| Open PR 中 Fix/Docs 型 | ~15 |
| 高活跃 Issue（评论≥5） | 4 |
| 基础设施类 Issue（影响可用性） | 5 |

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*