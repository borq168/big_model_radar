# Skills 生态热点 2026-04-28

> 生成时间: 2026-04-28 02:05 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills 社区热点报告

**数据来源**: github.com/anthropics/skills
**统计周期**: 截至 2026-04-28
**样本量**: PR 50 条 / Issues 50 条

---

## 1. 热门 Skills 排行

以下为社区关注度最高的 Skills（按功能完整性与讨论价值综合评估）：

| # | Skill 名称 | 功能概述 | 讨论热点 | 状态 |
|---|-----------|---------|---------|------|
| 1 | **document-typography** | 排版质量控制，防止孤行/寡行问题、编号错位等 AI 生成文档常见缺陷 | 通用性强，影响所有文档生成场景 | [OPEN] #514 |
| 2 | **testing-patterns** | 覆盖测试哲学、单元测试、React 组件测试、集成测试的全栈测试指南 | Testing Trophy 模型 vs 传统测试金字塔的取舍 | [OPEN] #723 |
| 3 | **ServiceNow platform** | 涵盖 ITSM/ITOM/ITAM/FSM/HRSD/CSM/SPM/安全运营等企业级平台能力 | 平台覆盖广度 vs 深度平衡 | [OPEN] #568 |
| 4 | **ODT (OpenDocument)** | 创建、填充、解析 OpenDocument 格式文件（.odt/.ods） | 开源/ISO 标准文档格式的 AI 处理需求 | [OPEN] #486 |
| 5 | **sensory (AppleScript)** | 通过 osascript 实现原生 macOS 自动化，替代截图式 computer use | 权限分层设计（Tier 1/2），安全性讨论 | [OPEN] #806 |
| 6 | **claude-obsidian-reporter** | 自动读取 Git 提交，生成 Obsidian 格式的日报/周报/月报 | 个人知识管理 + AI 报告生成场景 | [OPEN] #664 |
| 7 | **HADS (Human-AI Document Standard)** | 统一文档规范，让同一份 Markdown 同时服务人类和 AI 读者 | 文档即 prompt 的元编程思路 | [OPEN] #616 |
| 8 | **SAP-RPT-1-OSS predictor** | SAP 开源表格预测模型的 AI 集成技能 | 企业数据分析场景落地 | [OPEN] #181 |

---

## 2. 社区需求趋势

从 Issues 中提炼出以下高优先级需求方向：

### 🔴 平台基础设施
- **组织级技能共享**（#228, 9 评论）：企业用户强烈需求跨团队技能分发，而非手动上传下载
- **技能版本管理**（#403）：无法删除技能版本的 API 缺陷阻碍迭代

### 🟡 质量与安全
- **信任边界滥用**（#492）：社区技能使用 `anthropic/` 命名空间冒充官方，存在安全风险
- **技能质量分析**（#83）：Meta skill 需求——用 AI 分析其他 Skill 的质量

### 🟢 平台兼容性
- **Bedrock 集成**（#29）：AWS Bedrock 用户无法使用 Skills
- **MCP 暴露**（#16）：将 Skills 封装为 MCP 协议接口的标准化诉求

### 🔵 开发者体验
- **skill-creator 最佳实践**（#202）：现有技能创建工具过于冗长，不够可操作
- **run_eval.py 触发率 0%**（#556）：技能评估工具本身存在 bug

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或功能完整，预计近期可能合并：

| Skill | 亮点 | 合并概率 |
|-------|------|---------|
| **testing-patterns** (#723) | 覆盖完整测试生命周期，文档结构清晰 | ⭐⭐⭐⭐⭐ |
| **ServiceNow platform** (#568) | 企业需求明确，覆盖 8+ 模块 | ⭐⭐⭐⭐ |
| **sensory** (#806) | 差异化 macOS 自动化能力，Tier 权限设计合理 | ⭐⭐⭐⭐ |
| **document-typography** (#514) | 解决高频痛点，通用性强 | ⭐⭐⭐⭐ |
| **fix(docx): w:id collision** (#541) | Bug 修复，根因清晰（OOXML ID 空间冲突） | ⭐⭐⭐⭐⭐ |
| **fix(pdf): case-sensitive** (#538) | 小而关键的修复，解决实际 break | ⭐⭐⭐⭐⭐ |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：从「技能数量增长」转向「技能质量与平台基础设施完善」——企业级共享机制、安全边界定义、跨平台兼容性是下一阶段核心战场。**

---

*报告生成时间: 2026-04-28 | 数据覆盖: github.com/anthropics/skills*

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*
