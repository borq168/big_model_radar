# Skills 生态热点 2026-04-27

> 生成时间: 2026-04-27 01:58 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>用户要求我生成一份关于 GitHub 上 anthropics/skills 仓库的 Skills 社区热点报告。我需要分析提供的 PR 和 Issue 数据，按照要求的四个部分来组织报告。

让我先整理数据：

**PR 数据（按评论数排序，但评论数都是 undefined，所以按更新日期和内容重要性来筛选）：**

1. #514 - document-typography skill - 排版质量控制
2. #83 - skill-quality-analyzer and skill-security-analyzer - 元技能
3. #210 - frontend-design skill 改进
4. #486 - ODT skill - OpenDocument 处理
5. #539 - fix(skill-creator): warn on unquoted description
6. #541 - fix(docx): prevent tracked change w:id collision
7. #538 - fix(pdf): correct case-sensitive file references
8. #509 - docs: add CONTRIBUTING.md
9. #723 - testing-patterns skill
10. #181 - SAP-RPT-1-OSS predictor skill
11. #95 - Add comprehensive system documentation
12. #568 - ServiceNow platform skill
13. #335 - masonry-generate-image-and-videos skill
14. #147 - codebase-inventory-audit skill
15. #806 - sensory skill — native macOS automation
16. #154 - shodh-memory skill
17. #666 - Remove duplicate skill-creator skill
18. #997 - xiao — Xiaomi Robot Vacuum


19. #22 - Add a 'my_templates' directory for pptx skill

**Issue 数据（按评论数排序）：**

1. #62 - All my skills have disappeared - 评论:10, 👍:1
2. #228 - Enable org-wide skill sharing - 评论:9, 👍:5
3. #202 - skill-creator should be updated to best practice - 评论:8, 👍:1
4. #556 - run_eval.py: claude -p never triggers skills - 评论:6, 👍:6
5. #189 - document-skills and example-skills plugins install identical content - 评论:5, 👍:7
6. #492 - Security: Community skills distributed under anthropic/ namespace - 评论:4, 👍:2
7. #412 - Skill proposal: agent-governance - 评论:4, 👍:0
8. #29 - Usage with bedrock - 评论:4, 👍:0
9. #16 - Expose Skills as MCPs - 评论:4, 👍:0
10. #184 - agentskills.io page is giving "too many redirects" - 评论:3, 👍:4
11. #61 - "Not found" error when loading Skills - 评论:3, 👍:0
12. #868 - spei - 评论:2, 👍:0
13. #532 - skill-creator: description optimizer requires ANTHROPIC_API_KEY - 评论:2, 👍:1
14. #406 - unable to upload or replace existing skills - 评论:2, 👍:4
15. #403 - Unable to delete skill versions — API returns 500 - 评论:2, 👍:0

现在需要整理成报告。评论数最多的 PR 都没有显示评论数据，所以按更新日期和内容重要性来筛选。关键修复包括 #539、#541、#538 都是近期活跃的修复型 PR，#514 和 #83 则是功能性的重要提案。

新增技能方面，#723 的 testing-patterns、#568 的 ServiceNow、#806 的 sensory skill 和 #997 的 xiao 都是近期活跃的功能性 PR。

现在需要按四个部分组织报告内容。
</think>

# Skills 社区热点报告

> 数据来源：github.com/anthropics/skills | 统计日期：2026-04-27

---

## 1. 热门 Skills 排行

以下为近期活跃度高、功能亮点突出的 Skills 提案：

| # | Skill 名称 | 功能定位 | 讨论热点 | 状态 |
|---|-----------|---------|---------|------|
| 1 | **testing-patterns** (#723) | 覆盖完整测试栈：Testing Trophy 模型、单元测试、React 组件测试、集成测试、E2E | 填补 Claude Code 在测试场景指导上的空白 | OPEN (2026-04-21 更新) |
| 2 | **ServiceNow Platform** (#568) | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/SPM 等全平台能力 | 企业级 ServiceNow 自动化需求旺盛 | OPEN (2026-04-23 更新) |
| 3 | **sensory** (#806) | 通过 AppleScript 实现原生 macOS 自动化，替代截图式 computer use | 两级权限设计兼顾安全与可用性 | OPEN (2026-04-02 更新) |
| 4 | **xiao** (#997) | 控制小米扫地机器人 X20+ 的开源 CLI | 硬件控制 + Agent 集成的典型案例 | OPEN (2026-04-21) |
| 5 | **SAP-RPT-1-OSS** (#181) | SAP 开源表格模型的预测分析技能 | 企业数据平台集成需求 | OPEN (2026-03-16 更新) |
| 6 | **ODT** (#486) | OpenDocument 格式创建、模板填充、HTML 解析 | 开放标准文档支持 | OPEN (2026-04-14 更新) |
| 7 | **shodh-memory** (#154) | AI Agent 持久化记忆系统 | 跨对话上下文保持 | OPEN (2026-03-03 更新) |
| 8 | **document-typography** (#514) | 排版质量控制（孤行、寡段、编号对齐） | 解决 AI 生成文档的典型排版问题 | OPEN (2026-03-13 更新) |

🔗 链接：
- https://github.com/anthropics/skills/pull/723
- https://github.com/anthropics/skills/pull/568
- https://github.com/anthropics/skills/pull/806
- https://github.com/anthropics/skills/pull/997
- https://github.com/anthropics/skills/pull/181
- https://github.com/anthropics/skills/pull/486
- https://github.com/anthropics/skills/pull/154
- https://github.com/anthropics/skills/pull/514

---

## 2. 社区需求趋势

从 Issues 中提炼出以下高优先级需求方向：

### 🔴 平台与协作
- **组织级 Skill 共享** (#228, 9 评论) — 企业用户强烈呼吁内置共享机制，替代手动下载/上传流程
- **Skills 消失/加载失败** (#62, 10 评论) — 用户数据丢失问题频发，404/500 错误影响核心体验

### 🟡 质量与安全
- **信任边界滥用** (#492, 4 评论) — 社区技能伪装成官方命名空间，安全性存疑
- **skill-creator 最佳实践** (#202, 8 评论) — 当前 skill-creator 过于教育性，指令效率低

### 🟢 平台扩展
- **MCP 暴露** (#16, 4 评论) — 社区希望 Skills 可作为 MCP 协议接口暴露
- **Bedrock 兼容** (#29, 4 评论) — AWS Bedrock 用户无法使用 Skills

### 🔧 工具链问题
- **run_eval.py 触发率为 0%** (#556, 6 评论) — 评估脚本无法正确触发 Skills
- **重复技能冲突** (#189, 5 评论) — document-skills 与 example-skills 内容重叠

🔗 链接：
- https://github.com/anthropics/skills/issues/228
- https://github.com/anthropics/skills/issues/62
- https://github.com/anthropics/skills/issues/492
- https://github.com/anthropics/skills/issues/202
- https://github.com/anthropics/skills/issues/556
- https://github.com/anthropics/skills/issues/189

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或近期更新，预计近期可能合并落地：

| PR | 类型 | 亮点 | 合并概率 |
|----|------|------|---------|
| **#539** fix(skill-creator) | Bug Fix | 修复 YAML 特殊字符未转义导致的解析失败 | ⭐⭐⭐⭐ 高 |
| **#541** fix(docx) | Bug Fix | 修复书签与修订标识 ID 冲突导致的文档损坏 | ⭐⭐⭐⭐ 高 |
| **#538** fix(pdf) | Bug Fix | 修复大小写路径不匹配问题 | ⭐⭐⭐⭐ 高 |
| **#509** docs: CONTRIBUTING.md | 社区治理 | 填补仓库健康度指标短板（当前 25%） | ⭐⭐⭐⭐ 高 |
| **#666** Remove duplicate skill-creator | 清理 | 消除与 claude-plugins-official 的重复 | ⭐⭐⭐ 中高 |
| **#723** testing-patterns | 新功能 | 覆盖完整测试栈，企业刚需 | ⭐⭐⭐ 中 |

🔗 链接：
- https://github.com/anthropics/skills/pull/539
- https://github.com/anthropics/skills/pull/541
- https://github.com/anthropics/skills/pull/538
- https://github.com/anthropics/skills/pull/509
- https://github.com/anthropics/skills/pull/666
- https://github.com/anthropics/skills/pull/723

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：企业级协作与平台稳定性** —— 一方面用户强烈需要组织内 Skill 共享、跨平台部署（Bedrock）等企业功能；另一方面 Skills 的加载可靠性、数据持久化、API 稳定性问题（404/500 错误）正在消耗核心用户信任。

---

*报告生成时间：2026-04-27 | 数据覆盖：50 条 PR + 50 条 Issues*

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*