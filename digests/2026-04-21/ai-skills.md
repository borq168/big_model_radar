# Skills 生态热点 2026-04-21

> 生成时间: 2026-04-21 06:47 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>Let me analyze the provided data and create a comprehensive Skills community hot report.

Looking at the data:

**PRs (Skills):**
- #514: document-typography skill - typographic quality control
- #210: frontend-design skill improvement
- #83: skill-quality-analyzer and skill-security-analyzer
- #486: ODT skill - OpenDocument text
- #541: fix(docx): prevent tracked change w:id collision
- #539: fix(skill-creator): warn on unquoted description
- #538: fix(pdf): correct case-sensitive file references
- #509: docs: add CONTRIBUTING.md
- #181: SAP-RPT-1-OSS predictor skill
- #95: Add comprehensive system documentation and flowcharts
- #806: sensory skill — native macOS automation via AppleScript
- #54: Añadida mejora en los docs
- #147: codebase-inventory-audit skill
- #335: masonry-generate-image-and-videos skill
- #154: shodh-memory skill: persistent context for AI agents
- #723: testing-patterns skill
- #536: roadmap-pilot: incremental codebase cleanup autopilot
- #36: Fix skill-creator frontmatter validation
- #363: Fix feature-dev workflow phases skipped
- #622: hads-convert skill: convert any document to HADS format

**Issues:**
- #62: Skills disappeared - 10 comments
- #228: Enable org-wide skill sharing - 9 comments
- #202: skill-creator should be updated to best practice - 8 comments
- #556: run_eval.py never triggers skills - 6 comments
- #189: document-skills and example-skills plugins install identical content - 5 comments


- #492: Security: Community skills distributed under anthropic/ namespace - 4 comments
- #412: Skill proposal: agent-governance — safety patterns - 4 comments
- #29: Usage with bedrock - 4 comments
- #16: Expose Skills as MCPs - 4 comments
- #184: agentskills.io page is giving "too many redirects" error - 3 comments
- #61: "Not found" error when loading Skills - 3 comments
- #868: spei - 2 comments
- #532: skill-creator: description optimizer requires ANTHROPIC_API_KEY - 2 comments
- #406: unable to upload or replace existing skills - 2 comments
- #403: Unable to delete skill versions — API returns 500 - 2 comments

The most active discussions center around infrastructure and security concerns. Several issues highlight problems with skill management—skills disappearing, upload failures, and inability to delete versions. There's also a security vulnerability flagged around community skills using the anthropic namespace. The skill-creator tool needs improvements, particularly around API key requirements and evaluation triggers. Cross-platform support questions appear with Bedrock usage, while the agentskills.io site has redirect problems. The MCP exposure proposal and agent-governance safety patterns represent forward-looking feature requests that could shape the platform's direction.
</think>

# Skills 社区热点报告
**数据来源：** github.com/anthropics/skills | **快照日期：** 2026-04-21

---

## 1. 热门 Skills 排行

| 排名 | Skill 名称 | 功能定位 | 讨论热点 | 状态 |
|:---:|---|---|---|:---:|
| 1 | **document-typography** | AI 生成文档的排版质量控制（孤行/寡占控制、编号对齐） | 解决所有 Claude 生成文档的通用排版缺陷 | 🟡 Open |
| 2 | **frontend-design** 改进版 | 提升前端设计 Skill 的清晰度与可执行性 | 强调单次对话内可完成、指令具体化 | 🟡 Open |
| 3 | **skill-quality-analyzer + skill-security-analyzer** | 元技能：五维度质量评估 + 安全分析 | 结构化评估框架（质量占 20%，安全专项） | 🟡 Open |
| 4 | **ODT (OpenDocument)** | 创建/填充/解析 OpenDocument 格式文件 | 填补开源/ISO标准文档格式支持空白 | 🟡 Open |
| 5 | **sensory (macOS 自动化)** | 通过 AppleScript 实现原生 macOS 自动化 | 双层权限设计、绕过截图方案 | 🟡 Open |
| 6 | **testing-patterns** | 全栈测试技能（单元/组件/E2E/集成） | Testing Trophy 理念、React Testing Library | 🟡 Open |
| 7 | **roadmap-pilot** | 增量式代码库清理自动驾驶 | 解决大重构项目的上下文溢出问题 | 🟡 Open |
| 8 | **SAP-RPT-1-OSS predictor** | SAP 表格基础模型的预测分析 | 企业数据分析场景落地 | 🟡 Open |

> 📌 **技术修复类 PR**（#541、#539、#538）虽未列入排行，但修复了 DOCX/YAML/PDF 场景的明确 bug，预计将快速合并。

---

## 2. 社区需求趋势

从 16 条 Issues 中提炼出三大核心诉求：

### 🔧 基础设施与可靠性
- **Skill 生命周期管理**：上传失败（#406）、版本删除 API 500 错误（#403）、加载 404（#61）、Skill 莫名消失（#62）
- **eval 机制失效**：`run_eval.py` 触发率为 0%（#556），Skill 质量验证链路断裂

### 🔒 安全与信任
- **命名空间滥用**：社区 Skill 挂靠 `anthropic/` 前缀冒充官方（#492），存在信任边界风险
- **权限模型**：企业 SSO 用户无法使用 skill-creator 的 API_KEY 依赖功能（#532）

### 🌐 协作与分发
- **组织级共享**：企业用户强烈需求 org 内直接分享 Skill（#228，9 条评论）
- **插件重复冲突**：`document-skills` 与 `example-skills` 内容完全重叠（#189）

### 💡 新方向提案（尚未实现）
| 提案 | 描述 | 热度 |
|---|---|:---:|
| **agent-governance** | AI Agent 安全模式：策略执行、威胁检测、审计追踪 | 4 👍 |
| **Skills as MCPs** | 将 Skill 暴露为 MCP 协议接口，实现标准化打包 | 4 👍 |
| **Bedrock 集成** | 支持 AWS Bedrock 运行 Skills | 4 👍 |

---

## 3. 高潜力待合并 Skills

以下 PR 具备**高活跃度或明确业务价值**，预计近期落地：

| PR | 亮点 | 合并概率 |
|---|---|:---:|
| **#509** `CONTRIBUTING.md` | 解决社区健康指标缺口（当前 25%），直接提升 GitHub 指标 | ⭐⭐⭐⭐⭐ |
| **#541** `fix(docx): w:id collision` | 修复文档损坏 bug，影响所有使用 DOCX tracked changes 的用户 | ⭐⭐⭐⭐⭐ |
| **#539** `fix(skill-creator): YAML validation` | 防止 YAML 解析静默失败，修复创建流程的基础缺陷 | ⭐⭐⭐⭐ |
| **#538** `fix(pdf): case-sensitive paths` | 修复大小写路径不匹配导致的 Linux 兼容性问题 | ⭐⭐⭐⭐ |
| **#806** `sensory: AppleScript` | 填补 Claude Code macOS 原生自动化的能力空白 | ⭐⭐⭐ |
| **#723** `testing-patterns` | 测试技能栈完整度提升，企业开发流程强需求 | ⭐⭐⭐ |

> ⚠️ **#556（eval 触发率 0%）** 是阻塞性问题，若不修复，所有 Skill 的自动化质量评估将失效。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：完善 Skill 的全生命周期基础设施——从创建验证、分发共享到质量评估——以支撑企业级规模的协作与安全合规。**

---

### 附录：关键链接索引

| 类型 | 链接 |
|---|---|
| Skills 仓库 | https://github.com/anthropics/skills |
| 高优先级 Issue | [#228](https://github.com/anthropics/skills/issues/228) · [#556](https://github.com/anthropics/skills/issues/556) · [#492](https://github.com/anthropics/skills/issues/492) |
| 待合并 PR | [#509](https://github.com/anthropics/skills/pull/509) · [#541](https://github.com/anthropics/skills/pull/541) · [#539](https://github.com/anthropics/skills/pull/539) |
| 新兴 Skill | [#514](https://github.com/anthropics/skills/pull/514) · [#806](https://github.com/anthropics/skills/pull/806) · [#723](https://github.com/anthropics/skills/pull/723) |

---
*本日报由 [Big Model Radar](https://github.com/owner/repo) 自动生成。*