# Skills 生态热点 2026-04-26

> 生成时间: 2026-04-26 01:55 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills 社区热点报告
**数据来源：** github.com/anthropics/skills | **快照日期：** 2026-04-26

---

## 1. 热门 Skills 排行

| 排名 | PR | 功能定位 | 讨论热点 | 状态 |
|:---:|---|---|---|:---:|
| 1 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 全栈测试技能（单元/组件/E2E） | 覆盖 Testing Trophy 模型、React Testing Library、Playwright 等完整测试栈 | OPEN |
| 2 | **[ServiceNow platform](https://github.com/anthropics/skills/pull/568)** | 企业 IT 运维平台助手 | 覆盖 ITSM/ITOM/ITAM/FSM/SecOps 等 10+ 模块，定位为"平台级"而非"脚本助手" | OPEN |
| 3 | **[sensory (AppleScript)](https://github.com/anthropics/skills/pull/806)** | macOS 原生自动化 | 替代截图式 computer use，提供 Tier 1/2 权限分层方案 | OPEN |
| 4 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | SAP 表格预测分析 | 集成 SAP 开源 foundation model，赋能企业数据分析场景 | OPEN |
| 5 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | AI Agent 持久化记忆 | 跨会话上下文保持，解决长程任务中的信息丢失问题 | OPEN |
| 6 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument 格式处理 | 支持 .odt/.ods 创建、填充、解析为 HTML，覆盖 ISO 标准文档场景 | OPEN |
| 7 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | AI 生成文档排版质量控制 | 解决孤行/寡妇段落/编号错位等高频排版问题 | OPEN |
| 8 | **[xiao (Xiaomi Vacuum)](https://github.com/anthropics/skills/pull/997)** | 机器人 vacuum 代理控制 | MIT 许可 CLI，通过云 API 控制硬件，展示 Agent+IoT 场景 | OPEN |

> **观察：** 头部 PR 以**企业级平台集成**（ServiceNow、SAP）和**垂直领域自动化**（AppleScript、IoT）为主，Skills 正从通用工具向行业解决方案扩展。

---

## 2. 社区需求趋势

从 50 条 Issues 中提炼出三大核心诉求：

### 🔴 高优先级（评论 ≥ 5）

| Issue | 核心诉求 | 链接 |
|---|---|---|
| **组织内技能共享** | 企业用户希望直接共享/分发 Skills，而非手动导出 zip → 传输 → 上传 | [#228](https://github.com/anthropics/skills/issues/228) |
| **Skills 重复安装问题** | `document-skills` 与 `example-skills` 内容重叠，导致上下文污染 | [#189](https://github.com/anthropics/skills/issues/189) |
| **skill-creator 最佳实践** | 当前版本更像"教学文档"而非"执行指令"，token 效率低 | [#202](https://github.com/anthropics/skills/issues/202) |

### 🟡 中优先级（评论 3~4）

| 方向 | 需求描述 |
|---|---|
| **安全信任边界** | 社区 Skills 冒充官方 `anthropic/` 命名空间，用户可能误授高权限 |
| **Agent 治理** | 呼吁专门的 agent-governance skill，覆盖策略执行/威胁检测/审计追踪 |
| **MCP 标准化** | 建议将 Skills 暴露为 MCP 协议接口，实现跨 Agent 互操作 |
| **Bedrock 兼容** | 企业用户无法在 AWS Bedrock 上使用 Skills，亟需集成路径 |

### 🟢 基础设施痛点

| Issue | 问题 |
|---|---|
| **技能触发率 0%** | `run_eval.py` 中 `claude -p` 模式无法触发 Skills（核心功能失效） |
| **API 稳定性** | 上传/删除 Skills 时偶发 500/404 错误，影响生产使用 |

---

## 3. 高潜力待合并 Skills

以下 PR 具备**高社区活跃度**或**明确功能价值**，预计近期可能合并：

| PR | 亮点 | 合并概率 |
|---|---|:---:|
| **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 填补社区健康指标（当前 25%），直接解决 [#452](https://github.com/anthropics/skills/issues/452) | ⭐⭐⭐⭐⭐ |
| **[fix(pdf): 大小写修复](https://github.com/anthropics/skills/pull/538)** | 修复 Linux/macOS 兼容性 bug，8 处路径错误 | ⭐⭐⭐⭐ |
| **[fix(docx): 书签冲突](https://github.com/anthropics/skills/pull/541)** | 解决文档损坏问题，根因分析清晰（OOXML ID 空间共享） | ⭐⭐⭐⭐ |
| **[fix(skill-creator): YAML 验证](https://github.com/anthropics/skills/pull/539)** | 防止 silent parsing failure，提升 Skill 创建健壮性 | ⭐⭐⭐ |
| **[Remove duplicate skill-creator](https://github.com/anthropics/skills/pull/666)** | 消除 `anthropics/skills` 与 `claude-plugins-official` 重复 | ⭐⭐⭐ |

> **注：** PR 评论数普遍为 undefined，可能因数据采集时未同步 GitHub API。建议关注 PR 的 review 状态和 CI 通过情况。

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求：企业级协作与安全治理** —— 从 Issues 高赞趋势看，用户不再满足于"能用 Skills"，而是要求"安全地共享 Skills"、"合规地管理 Skills"、"跨平台地集成 Skills"，Skills 生态正从工具层向**企业基础设施层**演进。

---

**附：快速索引**
- 📂 仓库：[github.com/anthropics/skills](https://github.com/anthropics/skills)
- 📋 全部 PR：[PRs 列表](https://github.com/anthropics/skills/pulls?q=is%3Apr+sort%3Acomments-desc)
- 🐛 全部 Issues：[Issues 列表](https://github.com/anthropics/skills/issues?q=is%3Aissue+sort%3Acomments-desc)

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*
