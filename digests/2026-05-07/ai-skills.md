# Skills 生态热点 2026-05-07

> 生成时间: 2026-05-07 02:04 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills 社区热点报告（2026-05-07）

## 1. 热门 Skills 排行

以下为当前讨论热度较高的 Skills PR，按更新频率和内容丰富度筛选：

| # | Skill 名称 | 功能概述 | 讨论热点 | 状态 |
|---|-----------|---------|---------|------|
| #514 | document-typography | 排版质量控制，防止孤行/寡行、编号错位等 AI 生成文档常见问题 | 通用性需求，覆盖所有文档输出场景 | OPEN，2026-03-13 更新 |
| #83 | skill-quality-analyzer + skill-security-analyzer | 元技能，对其他 Skills 进行质量评估（结构/文档/安全等五维度） | 生态治理需求，Skill 质量保障机制 | OPEN，2026-01-07 更新 |
| #723 | testing-patterns | 全栈测试技能，覆盖测试哲学、单元测试、React 组件测试等 | 测试实践标准化 | OPEN，2026-04-21 更新 |
| #568 | ServiceNow platform skill | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD 等多个 ServiceNow 模块 | 企业级平台集成需求旺盛 | OPEN，2026-04-23 更新 |
| #444 | AURELION skill suite | 包含 kernel/advisor/agent/memory 四个子技能，认知+记忆框架 | 知识管理专业化方向 | OPEN，2026-05-06 更新 |
| #360 | AppDeploy skill | 从 Claude 直接部署全栈 Web 应用到公网 URL | 简化部署工作流 | OPEN，2026-05-04 更新 |
| #486 | ODT skill | 创建/填充/解析 OpenDocument 格式文件（.odt/.ods） | 开源文档格式支持 | OPEN，2026-04-14 更新 |
| #806 | sensory skill | 通过 AppleScript 实现原生 macOS 自动化 | 替代截图式 computer use | OPEN，2026-04-02 更新 |

> 链接：https://github.com/anthropics/skills/pulls

---

## 2. 社区需求归类

从 Issues 中识别出的新 Skill 方向（按评论数排序）：

**协作与分发**
- **组织内 Skill 共享**（#228，9 评论/7 👍）：用户希望直接在组织内部分享 Skills，而非通过文件传输+手动上传
- **Skills 作为 MCP 暴露**（#16，4 评论）：建议将 Skills 标准化为 MCP 协议接口

**质量与安全**
- **社区 Skills 信任边界问题**（#492，4 评论）：社区贡献的 Skills 使用 `anthropic/` 命名空间，可能被误认为官方技能，存在安全风险
- **Skill 质量分析器**（#83 PR）：对 Skills 进行结构/文档/安全多维度评估

**平台集成**
- **AWS Bedrock 兼容性**（#29，4 评论）：用户询问 Skills 如何在 Bedrock 上运行
- **ServiceNow 平台技能**（#568 PR）：覆盖 ITSM/ITOM/ITAM/FSM 等多个模块

**工具链改进**
- **run_eval.py 触发率问题**（#556，6 评论/6 👍）：Skill 触发机制失效，0% 触发率
- **skill-creator 最佳实践**（#202，8 评论）：现有 skill-creator 过于文档化而非操作化

**文档与格式**
- **ODT/OpenDocument 支持**（#486 PR）：开源 ISO 标准文档格式
- **CONTRIBUTING.md 缺失**（#509 PR）：社区健康指标仅 25%，贡献指南缺失

> 链接：https://github.com/anthropics/skills/issues

---

## 3. 活跃待合并 Skills

以下 PR 评论/更新较活跃，但尚未合并：

| # | Skill | 当前讨论焦点 | 最后更新 |
|---|-------|-------------|---------|
| #444 | AURELION skill suite | 认知框架设计，kernel/advisor/agent/memory 四件套 | 2026-05-06 |
| #360 | AppDeploy | 生命周期管理、状态检查、版本控制能力 | 2026-05-04 |
| #189 | document-skills vs example-skills 重复 | 插件安装后 Skills 重复，影响上下文窗口 | 2026-05-06 |
| #538 | fix(pdf) 大小写 | 修复 8 处大小写不匹配导致的跨平台问题 | 2026-04-29 |
| #541 | fix(docx) w:id 冲突 | 修复 tracked changes 与 bookmarks 的 ID 冲突导致的文档损坏 | 2026-04-16 |
| #539 | fix(skill-creator) YAML | 预防 YAML 解析静默失败 | 2026-04-16 |

> 注：以上 PR 均处于 OPEN 状态，合并时间线未知。

---

## 4. 今日记录备注

- **Skills 仓库活跃度**：当日纳入分析 50 条 PR + 50 条 Issues，涵盖文档处理（PDF/DOCX/ODT/PPTX）、平台集成（ServiceNow/SAP/AWS Bedrock）、测试工程、企业部署等多个方向，生态覆盖面持续扩展。

- **Bug Fix 类 PR 集中**：#538、#541、#539 三个 PR 均来自同一作者 @Lubrsy706，聚焦 PDF/DOCX/Skill-creator 的边界情况修复，说明文档格式处理和工具链健壮性是当前维护重点。

- **社区反馈指向平台层问题**：Issues 中 #62（Skills 消失）、#61（404 加载错误）、#406（上传失败）、#403（删除返回 500）等平台层问题获得较多评论，反映用户侧实际使用障碍与 Skill 内容开发并行存在。

---

*数据来源：github.com/anthropics/skills，采集于 2026-05-07*