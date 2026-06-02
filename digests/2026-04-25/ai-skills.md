# Skills 生态热点 2026-04-25

> 生成时间: 2026-04-25 01:44 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills 社区热点报告

> 数据来源：github.com/anthropics/skills | 统计日期：2026-04-25
> 样本范围：50 条 PR + 50 条 Issues

---

## 1. 热门 Skills 排行

| 排名 | Skill 名称 | 功能定位 | 讨论热点 | 状态 |
|:---:|------------|----------|----------|:----:|
| 1 | **document-typography** | AI 生成文档的排版质量控制（孤行控制、寡妇段落、编号对齐） | 解决所有 Claude 生成文档的通用排版问题 | 🔵 OPEN |
| 2 | **testing-patterns** | 完整测试栈指南（测试哲学、单元测试、React 组件测试） | 覆盖 Testing Trophy 模型与最佳实践 | 🔵 OPEN |
| 3 | **ServiceNow 平台** | 覆盖 ITSM/ITOM/ITAM/FSM/SecOps 等全平台能力 | 企业级 ServiceNow 生态集成 | 🔵 OPEN |
| 4 | **sensory** | 通过 AppleScript 实现原生 macOS 自动化 | 替代截图式 computer use 的 Tier 1/2 权限方案 | 🔵 OPEN |
| 5 | **SAP-RPT-1-OSS predictor** | SAP 开源表格基础模型的预测分析 | 企业数据分析场景落地 | 🔵 OPEN |
| 6 | **ODT** | OpenDocument 格式创建、模板填充、ODT→HTML 转换 | ISO 标准开源文档格式支持 | 🔵 OPEN |
| 7 | **skill-quality-analyzer** | 元技能：五维度评估 Skill 质量（结构/安全/可维护性/效率/文档） | Skill 质量标准化 | 🔵 OPEN |
| 8 | **xiao** | 小米扫地机器人 X20+ 的 CLI 控制 | 物联网 Agent 集成示范 | 🔵 OPEN |

**讨论焦点**：当前热门 Skills 集中在**企业级集成**（ServiceNow、SAP）、**文档质量**（排版、ODT）和**自动化**（macOS、IoT）三大方向。

🔗 [PR #514 document-typography](https://github.com/anthropics/skills/pull/514) | [PR #723 testing-patterns](https://github.com/anthropics/skills/pull/723) | [PR #568 ServiceNow](https://github.com/anthropics/skills/pull/568)

---

## 2. 社区需求趋势

从 Issues 中提炼出以下高优先级需求：

### 🔴 核心痛点

| 需求方向 | Issue | 核心诉求 |
|----------|-------|----------|
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) (9评论) | 企业内直接共享技能库，替代手动上传/下载 |
| **技能触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) (6评论) | `run_eval.py` 技能触发率 0%，严重影响 Skill 验证 |
| **技能重复/冲突** | [#189](https://github.com/anthropics/skills/issues/189) (5评论) | document-skills 与 example-skills 内容完全重复 |

### 🟡 功能增强

| 需求方向 | Issue | 核心诉求 |
|----------|-------|----------|
| **Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | 政策执行、威胁检测、信任评分、审计追踪 |
| **MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 标准化为 MCP 协议接口 |
| **Skill 质量标准** | [#202](https://github.com/anthropics/skills/issues/202) | skill-creator 应遵循最佳实践而非教学文档 |

### 🟠 基础设施问题

| 问题类型 | Issue | 影响范围 |
|----------|-------|----------|
| 技能消失/加载失败 | [#62](https://github.com/anthropics/skills/issues/62) | 用户自定义技能不可见 |
| 上传/删除 API 错误 | [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | 500/404 错误阻断操作 |
| 信任边界滥用 | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能伪装成官方命名空间 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或修复关键问题，预计近期合并：

| PR | 类型 | 亮点 | 合并优先级 |
|----|------|------|:----------:|
| [#539](https://github.com/anthropics/skills/pull/539) | Bug Fix | 修复 YAML 特殊字符导致的前端解析静默失败 | ⭐⭐⭐ 高 |
| [#541](https://github.com/anthropics/skills/pull/541) | Bug Fix | 修复 DOCX 书签与 tracked change 的 ID 冲突导致文档损坏 | ⭐⭐⭐ 高 |
| [#538](https://github.com/anthropics/skills/pull/538) | Bug Fix | 修复 PDF Skill 大小写敏感文件引用（8处） | ⭐⭐ 高 |
| [#509](https://github.com/anthropics/skills/pull/509) | 社区治理 | 添加 CONTRIBUTING.md，将社区健康评分从 25% 提升 | ⭐⭐ 高 |
| [#666](https://github.com/anthropics/skills/pull/666) | 清理 | 移除与 claude-plugins-official 重复的 skill-creator | ⭐⭐ 中 |

**注**：多数 PR 评论数为 undefined，可能因数据采集时未同步或采用其他互动指标。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：构建企业级 Skills 基础设施——解决技能共享、可靠性验证和质量标准化的核心痛点，同时扩展企业集成能力（ServiceNow、SAP）与平台覆盖（macOS 自动化、IoT）。**

---

### 附录：关键 Issue 速查

| Issue | 主题 | 状态 |
|-------|------|:----:|
| [#62](https://github.com/anthropics/skills/issues/62) | 技能消失错误 | 🔵 OPEN |
| [#228](https://github.com/anthropics/skills/issues/228) | 组织内技能共享 | 🔵 OPEN |
| [#556](https://github.com/anthropics/skills/issues/556) | 技能触发率 0% Bug | 🔵 OPEN |
| [#492](https://github.com/anthropics/skills/issues/492) | 社区技能信任滥用 | 🔵 OPEN |
| [#202](https://github.com/anthropics/skills/issues/202) | skill-creator 最佳实践 | ✅ CLOSED |

---

*报告生成时间：2026-04-25 | 数据完整性：PR 50条 / Issues 50条*

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*
