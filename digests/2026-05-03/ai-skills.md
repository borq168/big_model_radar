# Skills 生态热点 2026-05-03

> 生成时间: 2026-05-03 02:01 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

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
