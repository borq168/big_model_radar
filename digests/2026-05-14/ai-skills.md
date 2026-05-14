# Skills 生态热点 2026-05-14

> 生成时间: 2026-05-14 02:26 UTC | 覆盖仓库: 1 个

数据来源:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Skills 社区热点报告（2026-05-14 数据快照）

### 1. 热门 Skills 排行

以下 PR 在当前数据中关注度较高（按 PR 列表排序及描述内容推断），均为 **OPEN** 状态。

- **[#514 Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
  新增排版质量控制技能，专注于解决 AI 生成文档中的孤行、寡段和编号错位问题。讨论点在于这些问题是 Claude 生成文档的普遍痛点，但用户通常不会主动要求修复。当前处于 OPEN 状态。

- **[#210 Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**
  重写前端设计技能，确保每条指令在单次对话中可执行，提升内部一致性和具体性。关注如何让技能真正引导 Claude 行为。OPEN。

- **[#83 Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**
  提交两个元技能：质量分析器（结构/文档/示例等五维度）和安全分析器。旨在辅助社区技能审核。OPEN。

- **[#486 Add ODT skill (OpenDocument text creation and template filling)](https://github.com/anthropics/skills/pull/486)**
  实现 .odt/.ods 文件的创建、填充、读取和转换，满足开源文档格式需求。OPEN。

- **[#723 feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**
  完整的测试模式技能，覆盖测试奖杯模型、AAA 模式、React 组件测试、E2E 等多个层面。OPEN。

- **[#360 Added AppDeploy skill for deploying full-stack webapps](https://github.com/anthropics/skills/pull/360)**
  通过 AppDeploy 服务直接从 Claude 部署全栈 Web 应用，并支持生命周期管理。OPEN。

- **[#444 feat: add AURELION skill suite (kernel, advisor, agent, memory)](https://github.com/anthropics/skills/pull/444)**
  四个技能组成的认知与记忆框架套件，面向专业知识管理和 AI 协作。OPEN。

- **[#806 feat: add sensory skill — native macOS automation via AppleScript](https://github.com/anthropics/skills/pull/806)**
  使用 osascript（AppleScript）实现 macOS 原生自动化，替代截图方案，分两级权限。OPEN。

---

### 2. 社区需求归类

从 Issues 中提取社区提出的新技能方向或功能需求（不含纯 bug 报告）：

- **组织级技能共享**（[#228](https://github.com/anthropics/skills/issues/228)）—— 用户希望能在组织内直接分享技能，而不必手动下载上传。
- **代理治理 / 安全模式**（[#412](https://github.com/anthropics/skills/issues/412)）—— 提议新增 `agent-governance` 技能，涵盖策略执行、威胁检测、信任评分和审计追踪。
- **技能暴露为 MCP**（[#16](https://github.com/anthropics/skills/issues/16)）—— 希望将技能包装成可调用的 MCP 服务，统一软件 API 信号。
- **与 AWS Bedrock 集成**（[#29](https://github.com/anthropics/skills/issues/29)）—— 要求技能能够兼容 Bedrock 环境下的使用。
- **企业 SSO 认证支持**（[#532](https://github.com/anthropics/skills/issues/532)）—— 技能创建工具的优化脚本依赖 ANTHROPIC_API_KEY，对使用 SSO 的企业用户不可用。
- **MCP 数据压缩 / 性能优化**（[#1102](https://github.com/anthropics/skills/issues/1102)）—— 反馈 MCP 返回大量数据时造成上下文拥塞，需要工程优化。

此外，**安全问题**（[#492](https://github.com/anthropics/skills/issues/492)）被提出：社区技能在 `anthropic/` 命名空间下分发可能造成信任边界滥用，用户可能误认为是官方技能。

---

### 3. 活跃待合并 Skills

以下 PR 当前仍为 **OPEN** 状态，且讨论较为活跃（根据描述中提及社区反馈或存在持续修改）：

- **[#538 fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**
  修复 PDF 技能中 8 处大小写不一致的文件引用，在区分大小写的文件系统上可导致失败。已得到社区关注。

- **[#539 fix(skill-creator): warn on unquoted description with YAML special characters](https://github.com/anthropics/skills/pull/539)**
  在技能创建器中增加 YAML 前置解析校验，防止 description 字段因包含冒号导致的静默解析错误。

- **[#541 fix(docx): prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**
  修复 DOCX 技能中添加修订痕迹时与现有书签的 ID 冲突，原因是硬编码 ID 与 OOXML 共享 ID 空间冲突。

- **[#509 docs: add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**
  添加贡献指南以改善社区健康指标（当前仅为 25%），关闭 issue #452。社区成员提供了反馈。

- **[#512 docs: add pull request template](https://github.com/anthropics/skills/pull/512)**
  作为 CONTRIBUTING.md 的配套，添加轻量 PR 模板，由同一贡献者提交并引用社区建议。

- **[#568 feat: add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)**
  提交了一个覆盖 ITSM、ITOM、SecOps 等十余个模块的 ServiceNow 平台技能，讨论涉及技能范围界定。

---

### 4. 今日记录备注

- 本次快照包含 50 个 PR 和 50 个 Issue，PR 以新增技能和修复为主，Issue 中功能请求与 bug 报告各占一定比例。
- 社区贡献高度活跃：多个技能覆盖文档排版、测试模式、SAP 预测、macOS 自动化、ServiceNow 等广泛领域。
- 多项修复关注技能本身的正确性和安全性（如文件引用、YAML 解析、文档 ID 冲突、命名空间信任），反映出生态正在走向工程成熟。