# AI CLI 工具社区动态日报 2026-03-25

> 生成时间: 2026-03-25 01:02 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告（2026-03-25）

---

## 1. 生态全景

当前 AI CLI 工具生态正从“代码补全助手”向“可编程智能代理”演进，核心竞争聚焦于**跨平台稳定性、权限治理精细化、会话记忆持久化**三大支柱。社区普遍通过插件机制弥补官方功能缺口，反映出“可扩展架构”已成为主流设计范式。与此同时，企业用户对远程开发、多账户管理、安全审计等生产级能力的需求显著上升，推动工具向 DevOps 深度集成方向转型。

---

## 2. 各工具活跃度对比

| 工具 | 新增 Issues | 活跃 PR | 今日 Release | 社区响应强度 |
|------|-------------|--------|--------------|--------------|
| **Claude Code** | 9 | 9（含 2 合并） | ❌ | 高（多 Issue 获 50+ 👍） |
| **OpenAI Codex** | 10 | 10 | ✅（Rust alpha 链） | 中高（Token 消耗问题引发焦虑） |
| **Gemini CLI** | 10 | 10（多需关联 Issue） | ✅（v0.36.0-preview） | 中（维护者主导技术调研） |
| **GitHub Copilot CLI** | 10 | 0 | ❌ | 中（跨平台不一致成焦点） |
| **Kimi Code CLI** | 9 | 8（含 2 合并） | ❌ | 中高（插件系统引发热议） |
| **OpenCode** | 10 | 10 | ✅（v1.3.2） | 高（内存泄漏、OAuth 故障集中爆发） |
| **Qwen Code** | 10 | 10 | ✅（nightly） | 中（权限与稳定性回归受关注） |

> 注：活跃度综合 Issue 讨论热度、PR 技术深度及 Release 频率评估。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|--------|--------|--------|
| **权限与沙箱精细化** | 全生态 | 支持超时拒绝（Claude）、策略同步（Copilot）、通配符规则（Gemini）、最小权限审计（Codex） |
| **会话与记忆管理** | Claude / Gemini / Qwen | 跨会话记忆持久化、项目级任务追踪、上下文压缩与符号化提示 |
| **IDE 集成一致性** | Copilot / Kimi / Qwen | CLI 与 VS Code 插件行为对齐（模型可见性、技能加载、快捷键） |
| **远程与分布式能力** | Codex / Gemini / OpenCode | SSH/容器开发支持、会话跨设备迁移（`/teleport`）、内嵌浏览器 |
| **插件/技能生态建设** | Kimi / OpenCode / Claude | 插件兼容性标准、自动发现机制、官方市场提案 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|--------|--------|-------------|
| **Claude Code** | 企业级智能编码代理 | 全栈开发者、DevOps 工程师 | 强权限控制 + 插件扩展生态，侧重生产环境鲁棒性 |
| **OpenAI Codex** | 高性能 AI 编程基础设施 | 技术决策者、平台开发者 | Rust 底层重构 + 沙箱安全强化，追求极致性能与隔离 |
| **Gemini CLI** | 策略驱动的多代理协作平台 | 架构师、SDD 工作流用户 | 数据驱动策略引擎 + 任务 DAG 追踪，强调可观测性与流程控制 |
| **GitHub Copilot CLI** | GitHub 生态无缝延伸 | GitHub 企业用户 | 深度绑定 GitHub 权限策略，但跨平台一致性成短板 |
| **Kimi Code CLI** | 轻量级国产编码助手 | 中文开发者、JetBrains 用户 | 快速迭代插件系统 + ACP 终端重构，注重本地化体验 |
| **OpenCode** | 开源多模型统一前端 | 独立开发者、多云用户 | 支持 Poe/Amazon Bedrock 等多认证源，强调整合与可定制 |
| **Qwen Code** | 全球化 AI 编码终端 | 多语言开发者、自动化脚本用户 | 新增 `/loop` 定时任务 + Telegram 通道，迈向通用 Agent 平台 |

---

## 5. 社区热度与成熟度

- **高活跃度 & 快速迭代**：  
  **OpenCode**（v1.3.2 紧急修复内存泄漏）、**Qwen Code**（nightly 高频发布）、**Gemini CLI**（预览版密集更新）处于快速演进阶段，社区反馈直接驱动版本节奏。

- **高成熟度 & 企业级关注**：  
  **Claude Code** 与 **OpenAI Codex** 社区讨论聚焦稳定性与安全性，Issue 多涉及生产环境故障（如 BSOD、Token 异常消耗），反映其已进入企业部署深水区。

- **生态整合期**：  
  **GitHub Copilot CLI** 与 **Kimi Code CLI** 面临跨平台一致性挑战，社区正倒逼团队对齐 IDE 与 CLI 行为，属功能收敛阶段。

---

## 6. 值得关注的趋势信号

| 趋势 | 数据支撑 | 对开发者的参考价值 |
|------|--------|------------------|
| **权限系统从“弹窗拦截”向“策略引擎”演进** | Gemini 重构为通配符策略、Codex 引入置信度字段、Claude 支持超时拒绝 | 开发者需关注策略 DSL 设计，未来权限配置将可编程化 |
| **插件生态成为功能扩展主战场** | Kimi/OpenCode/Claude 均通过插件解决官方未覆盖场景（如 WhatsApp 控制、Git 集成） | 建议优先基于插件架构开发定制工具，降低对核心版本依赖 |
| **内存与性能问题成稳定性瓶颈** | OpenCode（#16697）、Codex（#15393）、Qwen（PTY 崩溃）均报告资源泄漏 | 在集成 AI CLI 至 CI/CD 前，务必进行压力测试与堆快照分析 |
| **远程开发能力决定企业 adoption** | Codex（#10450）、Gemini（Workspaces）、OpenCode（内嵌浏览器）同步发力 | 若团队使用 SSH/Docker 开发，应优先评估工具远程支持成熟度 |
| **模型输出质量波动引发信任危机** | Gemini（#23734）、Qwen（流控失效）、Copilot（Claude 4.6 中断）均出现异常 | 建议在生产流程中加入模型输出校验与 fallback 机制 |

> **结语**：AI CLI 工具正经历从“辅助编码”到“自主代理”的关键跃迁。开发者选型时应重点关注**权限模型灵活性、插件生态开放性、远程协作完备性**三大维度，并警惕过度依赖单一模型带来的稳定性风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026-03-25）**

---

### 1. 热门 Skills 排行（按社区关注度）

| 排名 | Skill | 功能简述 | 社区讨论热点 | 状态 |
|------|------|--------|------------|------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | 自动修复 AI 生成文档中的排版问题（孤行、寡行、编号错位） | 用户普遍反馈 Claude 生成的文档存在基础排版缺陷，此 Skill 直击痛点，被广泛认为是“刚需型”改进 | Open |
| 2 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 为 AI 代理提供跨会话持久化记忆能力 | 解决上下文丢失问题，支持长期任务连续性，被视为提升 Claude Code 实用性的关键突破 | Open |
| 3 | **[session-memory](https://github.com/anthropics/skills/pull/629)** | 在上下文压缩和会话重启时保留关键技术事实 | 与 shodh-memory 类似但更轻量、零依赖，聚焦“技术事实”持久化，避免重复劳动 | Open |
| 4 | **[plan-task](https://github.com/anthropics/skills/pull/522)** | 持久化多步任务计划与进度，支持 Git 跟踪 | 解决 Claude Code 每次会话重置导致计划中断的问题，提升复杂任务执行能力 | Open |
| 5 | **[record-knowledge](https://github.com/anthropics/skills/pull/521)** | 将经验性知识以 Markdown 形式持久存储，供团队复用 | 针对“昨日 workaround 今日重搜”痛点，推动知识沉淀与共享 | Open |
| 6 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 自动化代码库审计：识别冗余文件、文档缺口、架构臃肿 | 企业级代码治理需求强烈，尤其适合中大型项目维护 | Open |
| 7 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 提升前端设计指导的可操作性与清晰度 | 开发者反馈现有设计建议过于笼统，此 PR 强调“单轮对话内可执行”的指令优化 | Open |
| 8 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | 集成 SAP 开源表格预测模型，用于业务数据分析 | 企业级 AI 与 ERP 系统融合的代表，满足 SAP 用户自动化报表需求 | Open |

---

### 2. 社区需求趋势（来自 Issues 提炼）

- **上下文持久化**：多个高赞 Issue（如 #62、#556）反映用户对跨会话记忆、任务延续、知识留存的核心诉求。
- **技能安全性与信任机制**：Issue #492 警示社区技能冒用 `anthropic/` 命名空间的风险，呼吁建立官方认证或沙箱机制。
- **技能去重与插件管理**：Issue #189 指出 `document-skills` 与 `example-skills` 内容重复，影响上下文效率，需明确分类标准。
- **企业集成支持**：包括 Bedrock 兼容性（#29）、SSO/API Key 限制（#532）、SAP/Google Workspace 对接等，显示企业用户强烈需求。
- **MCP 标准化扩展**：Issue #16 和 #369 呼吁将 Skills 封装为 MCP（Model Context Protocol）接口，推动生态互操作性。

> 核心趋势：**从“功能实现”转向“可持续、安全、可集成的智能工作流”**。

---

### 3. 高潜力待合并 Skills

以下 PR 评论活跃、解决明确痛点，有望近期合并：

- **[session-memory](https://github.com/anthropics/skills/pull/629)**：轻量级记忆方案，无依赖，技术实现简洁。
- **[plan-task](https://github.com/anthropics/skills/pull/522)** 与 **[record-knowledge](https://github.com/anthropics/skills/pull/521)**：由同一作者提交，形成“计划-执行-知识沉淀”闭环，逻辑自洽。
- **[document-typography](https://github.com/anthropics/skills/pull/514)**：解决所有用户共有的文档质量问题，普适性强。
- **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**：提供标准化审计报告，契合 DevOps 流程需求。

---

### 4. Skills 生态洞察

> **当前社区最集中的诉求是：打破会话边界，实现上下文、任务与知识的持久化，同时确保技能分发的安全性与标准化。**

用户不再满足于单次对话内的辅助，而是期望 Claude Code 成为具备记忆、规划与协作能力的长期智能伙伴。

---

**Claude Code 社区动态日报（2026-03-25）**

---

### 1. 今日速览  
社区对跨平台兼容性与权限控制问题的关注度持续上升，FreeBSD 安装失败、Windows 权限提示异常及 ARM64 Linux 内核兼容性等底层问题成为焦点；同时，开发者积极提交插件 PR 以解决终端滚动、子代理上下文膨胀等实际使用痛点。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 社区热点 Issues  

| 问题 | 重要性说明 | 社区反应 |
|------|-----------|---------|
| [#30640](https://github.com/anthropics/claude-code/issues/30640) FreeBSD 原生安装器失效 | 影响非主流 Unix 系统用户接入，暴露打包流程对小众平台支持不足 | 👍 52，32 条评论，用户强烈要求官方支持 |
| [#25713](https://github.com/anthropics/claude-code/issues/25713) ARM64 Linux 64K 页内核下 Bun/JSC 崩溃 | 关键运行时兼容性问题，阻碍服务器级部署 | 👍 7，9 条评论，需底层修复 |
| [#37157](https://github.com/anthropics/claude-code/issues/37157) `.claude/skills/` 目录未豁免权限提示 | 违背官方文档承诺，破坏技能开发工作流 | 4 条评论，开发者质疑权限逻辑一致性 |
| [#38200](https://github.com/anthropics/claude-code/issues/38200) 多步代理会话中系统性误判任务完成 | 模型行为可靠性问题，影响自动化流程信任度 | 新报 bug，4 条评论，需模型层排查 |
| [#34819](https://github.com/anthropics/claude-code/issues/34819) 凭证文件内容意外暴露于对话 | 严重安全风险，违反最小信息披露原则 | 4 条评论，标记为安全事件 |
| [#24726](https://github.com/anthropics/claude-code/issues/24726) VS Code 扩展：禁用自动附加打开文件/选区 | IDE 集成体验优化需求，减少干扰 | 👍 39，14 条评论，高需求功能 |
| [#31724](https://github.com/anthropics/claude-code/issues/31724) `/voice` 模式支持语言设置 | 国际化刚需，当前仅默认英语影响非英语用户 | 👍 27，8 条评论，呼声较高 |
| [#37913](https://github.com/anthropics/claude-code/issues/37913) 权限请求超时自动拒绝机制 | 解决后台会话因权限卡死问题，提升自动化鲁棒性 | 👍 1，3 条评论，实用性强 |
| [#33636](https://github.com/anthropics/claude-code/issues/33636) 项目目录移动导致会话丢失 | 数据持久化缺陷，影响工作流连续性 | 👍 4，2 条评论，需架构级修复 |
| [#36362](https://github.com/anthropics/claude-code/issues/36362) Claude Desktop Code 模式无响应 | 桌面端核心功能故障，与 CLI/VSCode 表现不一致 | 6 条评论，用户困惑于平台差异 |

---

### 4. 重要 PR 进展  

| PR | 功能/修复内容 | 状态 |
|----|---------------|------|
| [#38105](https://github.com/anthropics/claude-code/pull/38105) 添加 WhatsApp 通道插件 | 基于 Baileys 协议实现双向远程控制与消息同步 | OPEN |
| [#35710](https://github.com/anthropics/claude-code/pull/35710) 工具互斥插件防止 Windows BSOD | 限制并行文件系统操作，修复 Wof.sys 蓝屏问题 | OPEN |
| [#35683](https://github.com/anthropics/claude-code/pull/35683) 终端滚动回归修复插件 | 修复光标跳转至顶部问题，支持 Ctrl+6 冻结切换 | OPEN |
| [#38045](https://github.com/anthropics/claude-code/pull/38045) lean-agents 插件应对子代理上下文膨胀 | 提供轻量替代代理，规避“prompt too long”错误 | OPEN |
| [#36614](https://github.com/anthropics/claude-code/pull/36614) git-branch-info 插件 | 会话启动与提交时自动注入 Git 分支状态信息 | OPEN |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) session-rename 插件 | 支持 `/rename` 命令自定义会话标题，非侵入式元数据存储 | OPEN |
| [#27140](https://github.com/anthropics/claude-code/pull/27140) memory-bridge 插件 | 会话边界上下文 consolidation，支持持久化记忆 | OPEN |
| [#37159](https://github.com/anthropics/claude-code/pull/37159) 代理持久记忆与会话管理系统 | 完整记忆银行架构，支持跨会话知识保留 | OPEN |
| [#31701](https://github.com/anthropics/claude-code/pull/31701) 修复硬编码 `/tmp/claude` 路径 | 兼容 Termux/Android 等受限环境，尊重 `$TMPDIR` | CLOSED（已合并） |
| [#37236](https://github.com/anthropics/claude-code/pull/37236) tmp-cwd-cleanup 插件 | 清理 Bash 工具遗留的临时文件，防止磁盘泄漏 | CLOSED（已合并） |

---

### 5. 功能需求趋势  

- **跨平台兼容性**：FreeBSD、ARM64 Linux、Windows 权限模型等边缘平台问题集中爆发，社区呼吁官方完善构建与测试矩阵。
- **IDE 集成精细化控制**：VS Code 用户对自动附加文件、快捷键自定义、状态栏信息扩展等需求强烈，反映开发者对“无干扰编码”体验的追求。
- **安全与权限治理**：凭证泄露、权限豁免失效、远程执行越权等问题频发，推动权限系统向可审计、可超时、可配置方向演进。
- **会话与记忆管理**：多会话监控、项目目录迁移、持久化记忆等需求凸显长期项目协作场景下的架构短板。
- **语音与国际化**：非英语语音支持成为高频诉求，暴露当前多模态能力的地域局限性。

---

### 6. 开发者关注点  

- **稳定性与可靠性**：模型误判任务完成、工具并行导致系统崩溃（如 BSOD）、会话丢失等问题严重削弱开发者对自动化流程的信任。
- **插件生态扩展**：社区通过插件机制积极补足官方功能缺口（如 Git 集成、内存管理、远程通信），体现“可扩展架构”的成功。
- **环境适配成本**：从 Termux 到 FreeBSD，再到 64K 页内核，开发者频繁遭遇“能跑但需手动 patch”的尴尬，呼吁更健壮的跨平台抽象层。
- **权限与安全的平衡**：既希望减少频繁弹窗干扰，又担忧敏感操作缺乏防护，亟需细粒度、可审计的权限策略。

---  
*数据来源：github.com/anthropics/claude-code | 生成时间：2026-03-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-03-25）

---

## 1. 今日速览

今日 Codex 社区聚焦于 **性能优化与资源管理问题**，多个高热度 Issue 反映 VS Code 扩展及桌面应用在空闲状态下 CPU 占用过高，引发广泛讨论；同时，远程开发支持、沙箱权限控制及 CLI 调度能力等增强需求持续升温。开发团队积极回应，提交了多项底层架构改进 PR，涵盖线程元数据、遥测系统重构与沙箱兼容性修复。

---

## 2. 版本发布

- **rust-v0.117.0-alpha.14** 至 **alpha.11**：连续发布多个 Rust 工具链预发布版本，表明团队正在密集迭代底层运行时与沙箱安全模块，可能为下一阶段稳定性更新做准备。  
  🔗 [Release 0.117.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.14)

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|---------|
| [#14593](https://github.com/openai/codex/issues/14593) | VS Code 扩展更新后仍快速消耗 Token | 用户反馈 Business 订阅下 Token 消耗异常，影响生产环境使用，疑似速率限制逻辑未修复 | 🔥 231 条评论，83 👍，情绪焦虑 |
| [#10450](https://github.com/openai/codex/issues/10450) | 请求 Codex 桌面应用支持远程开发 | 对比 VS Code Remote，Codex 桌面版缺乏 SSH/容器开发能力，阻碍企业级工作流 | 💬 79 条评论，440 👍，呼声极高 |
| [#15393](https://github.com/openai/codex/issues/15393) | Linux 下 Electron 进程高 CPU 占用 | 禁用扩展后 CPU 回落，指向扩展自身资源泄漏 | ⚠️ 5 条评论，4 👍，新发但典型 |
| [#15503](https://github.com/openai/codex/issues/15503) | 正常使用中突发 CPU 峰值 | Ubuntu 用户报告毫秒级调试输出暴增，疑似事件循环阻塞 | ⚠️ 5 条评论，6 👍 |
| [#15620](https://github.com/openai/codex/issues/15620) | 桌面应用空闲时后台 Git/子进程 churn | macOS 用户发现即使 UI 无操作，Node 层仍持续轮询 | 🐞 4 条评论，1 👍 |
| [#15169](https://github.com/openai/codex/issues/15169) | macOS 上 Playwright MCP 不再记住“本次会话批准” | 权限记忆功能回归，降低自动化效率 | 🔁 4 条评论，7 👍 |
| [#15680](https://github.com/openai/codex/issues/15680) | Agent 可未经授权修改 `.codex/config.toml` | 沙箱逃逸风险，违反最小权限原则 | 🔒 3 条评论，0 👍，安全敏感 |
| [#15696](https://github.com/openai/codex/issues/15696) | `codex exec` 权限限制比交互模式更严 | 同一 shell 下行为不一致，影响脚本化集成 | ⚙️ 3 条评论，0 👍 |
| [#8317](https://github.com/openai/codex/issues/8317) | 请求 CLI 支持定时任务调度 | 类似 cron 的延迟/轮询执行能力缺失 | 📅 4 条评论，17 👍，长期需求 |
| [#4323](https://github.com/openai/codex/issues/4323) | IDE 扩展缺少 CHANGELOG | 用户无法定位版本变更内容，影响升级决策 | 📚 6 条评论，66 👍，文档刚需 |

---

## 4. 重要 PR 进展

| PR 编号 | 功能/修复内容 | 技术价值 |
|--------|----------------|--------|
| [#15701](https://github.com/openai/codex/pull/15701) | TUI 新增 `/btw` 临时侧边问题线程 | 提升多任务上下文隔离体验，避免主对话污染 |
| [#15675](https://github.com/openai/codex/pull/15675) | 支持线程级自定义元数据持久化 | 为第三方集成提供扩展钩子，增强可观测性 |
| [#15583](https://github.com/openai/codex/pull/15583) | 复用 app-server 状态 DB 减少冷查询开销 | 优化 SQLite 连接管理，降低延迟与资源争用 |
| [#14172](https://github.com/openai/codex/pull/14172) | 修复 Windows 受限令牌沙箱的分割策略支持 | 提升 Windows 沙箱安全性与兼容性 |
| [#15693](https://github.com/openai/codex/pull/15693) | 兼容旧版 bubblewrap（不支持 `--argv0`） | 避免 Linux 沙箱启动失败，扩大部署兼容性 |
| [#15597](https://github.com/openai/codex/pull/15597) | 实现本地临时屏幕录制 v1 | 为未来远程协助/调试功能铺路 |
| [#15120](https://github.com/openai/codex/pull/15120) | 重构网络权限为显式域名/Unix socket 规则 | 精细化网络控制，支撑 MCP 安全模型 |
| [#15667](https://github.com/openai/codex/pull/15667) | 显式处理 guardian 审查超时 | 提升错误可诊断性，避免静默失败 |
| [#15703](https://github.com/openai/codex/pull/15703) | 在 guardian 中增加用户授权置信度字段 | 强化安全策略决策透明度 |
| [#15548](https://github.com/openai/codex/pull/15548) | 将 rollout 模块拆分为独立 crate | 架构解耦，便于测试与复用 |

---

## 5. 功能需求趋势

从 Issues 分析，社区核心关注方向如下：

- **性能与资源效率**：CPU/内存占用过高（尤其 Electron 层）、Token 消耗异常成为最紧迫问题，影响日常可用性。
- **远程与协作能力**：远程开发（SSH/容器）、屏幕录制、MCP 权限记忆等功能需求强烈，反映企业用户向分布式工作流迁移。
- **CLI 自动化增强**：定时任务、持久化回调、循环提示等需求凸显开发者对“可编程 AI 代理”的期待。
- **安全与权限精细化**：沙箱逃逸、config 文件越权修改、网络规则细化等问题表明用户对执行边界控制日益重视。
- **开发者体验（DX）**：CHANGELOG 缺失、错误信息不清晰、快捷键行为变更等反馈指向文档与交互一致性待优化。

---

## 6. 开发者关注点

- **高频痛点**：  
  - VS Code 扩展资源泄漏（CPU/GPU）导致系统卡顿  
  - Windows/Linux 沙箱兼容性问题频发  
  - Token 消耗速率与实际使用不匹配，缺乏透明计费反馈  

- **强烈诉求**：  
  - 提供扩展版本变更日志（CHANGELOG）  
  - 支持 CLI 定时/条件任务调度（对标 Claude Code）  
  - 实现桌面端远程开发能力（SSH/Docker）  
  - 统一 `codex exec` 与交互模式的权限策略  

> 建议优先解决 **#14593（Token 消耗）** 与 **#10450（远程开发）**，二者分别代表核心功能可用性与生态竞争力短板。

---  
*数据来源：github.com/openai/codex | 生成时间：2026-03-25*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-03-25）

---

## 1. 今日速览

Gemini CLI 今日发布 v0.36.0-preview.0，引入多注册中心架构与子代理工具过滤能力，同时优化了策略引擎的权限控制机制。社区持续关注启动性能、任务追踪系统完善及模型输出质量等核心体验问题。

---

## 2. 版本发布

### [v0.36.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.0)
- **核心架构升级**：实现多注册中心架构（multi-registry），支持子代理按策略动态过滤可用工具（[#22712](https://github.com/google-gemini/gemini-cli/pull/22712)）
- **策略引擎重构**：将 YOLO 模式替换为数据驱动的通配符策略，提升权限管理灵活性与可维护性（[#23041](https://github.com/google-gemini/gemini-cli/pull/23041)）

### [v0.35.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0)
- **CLI 交互增强**：支持自定义键盘快捷键（[#21945](https://github.com/google-gemini/gemini-cli/pull/21945)）
- **上下文传递优化**：将 `AgentLoopContext` 贯穿核心执行链路，提升状态一致性（[#21944](https://github.com/google-gemini/gemini-cli/pull/21944)）

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|--------|
| [#21623](https://github.com/google-gemini/gemini-cli/issues/21623) | CLI 启动极慢（20–30秒） | 高频用户痛点，严重影响开发效率 | 19👍，19条评论，长期未解决 |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) | Plan 模式退出后未自动切换模型 | 影响工作流连贯性，违背设计预期 | 1👍，10条评论，疑似配置同步问题 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索的价值评估 | 探索精准代码理解能力，减少误读与 Token 浪费 | 维护者主导调研，技术前瞻性强 |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | `/plan` 应支持直接传入提示文本 | 提升单命令启动效率，减少交互步骤 | 2👍，需求明确，UX 优化方向 |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | 实现持久化项目级任务追踪存储 | 支持跨会话任务状态保存与 Git 协作 | 维护者推动，SDD 工作流关键升级 |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | 子代理需感知当前审批模式 | 避免指令与策略冲突，提升行为一致性 | 1👍，涉及策略与代理协同机制 |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | 实现全局 vs 项目级记忆路由 | 区分用户偏好与项目上下文，提升记忆精准度 | 1👍，长期记忆架构重要一环 |
| [#23577](https://github.com/google-gemini/gemini-cli/issues/23577) | Plan 应自适应终端高度 | 改善大屏用户查看体验，减少手动展开 | 1👍，UI/UX 细节优化 |
| [#23133](https://github.com/google-gemini/gemini-cli/issues/23133) | 启用后任务追踪托盘仍不可见 | 功能可见性问题，影响用户发现能力 | 1👍，疑似前端状态同步 Bug |
| [#23734](https://github.com/google-gemini/gemini-cli/issues/23734) | 模型输出质量下降 | 用户反馈“模型被破坏”，需紧急排查 | 新提交，附 CLI 版本信息，待复现 |

---

## 4. 重要 PR 进展

| PR 编号 | 功能/修复内容 | 状态 |
|--------|----------------|------|
| [#23041](https://github.com/google-gemini/gemini-cli/pull/23041) | 策略引擎重构：YOLO 模式 → 通配符策略 | Open |
| [#23508](https://github.com/google-gemini/gemini-cli/pull/23508) | 审批模式指示器移至状态栏首位 | Open |
| [#23729](https://github.com/google-gemini/gemini-cli/pull/23729) | 条件暴露 `additional_permissions` 参数（沙箱启用时） | Open |
| [#23618](https://github.com/google-gemini/gemini-cli/pull/23618) | 修复 Node.js 22 下 `cpSync` 目录已存在报错 | Open |
| [#23680](https://github.com/google-gemini/gemini-cli/pull/23680) | 支持跨工作区文件附件的交互式权限请求 | Open |
| [#23064](https://github.com/google-gemini/gemini-cli/pull/23064) | 上下文压缩 UI 重设计：自动压缩 + 符号化提示 | Open |
| [#22714](https://github.com/google-gemini/gemini-cli/pull/22714) | 引入高性能远程开发工作空间（Gemini Workspaces） | Open |
| [#22808](https://github.com/google-gemini/gemini-cli/pull/22808) | 远程代理接入 ExecutionLifecycleService | Open |
| [#22585](https://github.com/google-gemini/gemini-cli/pull/22585) | 新增 `/teleport` 命令实现会话跨设备迁移 | Open |
| [#20136](https://github.com/google-gemini/gemini-cli/pull/20136) | 修复斜杠子命令自动补全误触发问题 | Open |

> 注：多个 PR 标记为 `status/need-issue`，表明需关联 Issue 后合并。

---

## 5. 功能需求趋势

- **任务追踪系统深化**：围绕 `.gemini/tracker/` 持久化、DAG 任务图、非交互模式支持等需求密集（#23724、#23320、#23033），成为 SDD 工作流核心支柱。
- **代理协同与策略一致性**：子代理需感知审批模式（#23582）、记忆路由分层（#22819）、主动写入记忆（#22809）等，反映多代理架构成熟度提升。
- **远程与分布式能力**：远程工作空间（#22714）、会话 teleport（#22585）、远程代理生命周期管理（#22808）显示向云原生开发演进。
- **AST 感知工具探索**：评估 AST 级文件操作价值（#22745、#22746），旨在降低 Token 消耗并提升代码理解精度。
- **UI/UX 精细化**：Plan 高度自适应（#23577）、审批模式位置调整（#23508）、工具调用折叠（#23126）等优化持续迭代。

---

## 6. 开发者关注点

- **启动性能瓶颈**：#21623 持续高热，20–30秒冷启动严重影响日常使用，亟需 profiling 与优化。
- **模型输出质量波动**：#23734 用户直诉“模型被破坏”，需结合导出日志排查近期变更影响。
- **临时文件管理混乱**：#23571 指出模型在随机目录生成脚本，增加清理成本，需规范执行沙箱路径。
- **测试稳定性问题**：多个 PR（#23732、#23731）处理 Ctrl+C 相关 flaky 测试，反映 CI 可靠性挑战。
- **权限与沙箱边界模糊**：#23680 尝试解决跨工作区附件读取权限，凸显安全策略与用户体验平衡难题。

---  
*数据来源：github.com/google-gemini/gemini-cli | 生成时间：2026-03-25*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报**  
**2026年3月25日**

---

### 1. 今日速览  
今日社区讨论聚焦于 **Copilot CLI 与 VS Code 功能不一致问题**，尤其是组织级模型可见性、MCP 服务器策略误报及技能加载差异。多个高热度 Issue 被关闭，但核心兼容性与权限控制问题仍待解决，开发者对跨平台行为统一性呼声强烈。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 社区热点 Issues  

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|----------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | Copilot CLI 不显示组织启用的模型（如 Gemini 3.1 Pro） | **关键兼容性问题**：CLI 模型列表少于 VS Code，影响企业用户工作流 | 👍22，评论13条，持续发酵 |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | 组织注册表中的 MCP 服务器消失并误报“被组织禁用” | **策略同步故障**：实际策略未禁用，但 CLI 错误拦截第三方 MCP 服务 | 👍8，3条评论，紧急程度高 |
| [#1329](https://github.com/github/copilot-cli/issues/1329) | CLI 不读取 `~/.agents/skills` 目录技能 | **跨平台不一致**：VS Code 支持而 CLI 忽略，破坏技能复用 | 👍3，已关闭但未彻底解决 |
| [#1707](https://github.com/github/copilot-cli/issues/1707) | 第三方 MCP 服务器被错误禁用（v0.0.418） | **版本回退现象**：降级至 v417 可恢复，表明新版本引入策略误判 | 已关闭，但暴露策略引擎缺陷 |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | Claude Sonnet 4.6 执行失败（HTTP/2 GOAWAY） | **模型稳定性问题**：特定模型连接中断，重试机制未有效恢复 | 👍3，6条评论，影响复杂任务 |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | 频繁触发 API 限流错误 | **用户体验瓶颈**：重试提示后仍快速超限，疑似请求频率控制缺陷 | 👍2，5条评论 |
| [#989](https://github.com/github/copilot-cli/issues/989) | `--acp` 模式下工具权限请求返回错误 tool ID | **协议合规性问题**：tool call ID 格式不符合标准，影响权限系统集成 | 👍3，长期未修复 |
| [#899](https://github.com/github/copilot-cli/issues/899) | 请求支持文件/路径/语言类型过滤功能 | **安全与定制化需求**：用户需细粒度控制 Copilot 可访问资源 | 👍4，4条评论，需求明确 |
| [#1148](https://github.com/github/copilot-cli/issues/1148) | 编辑文件时强制转换为 CRLF 行尾 | **跨平台文本处理 bug**：破坏 LF 文件一致性，影响 Git 仓库 | 👍2，Windows 用户痛点 |
| [#2256](https://github.com/github/copilot-cli/issues/2256) | 请求永久启用常用二进制命令（如 `ls`） | **交互效率优化**：避免每次会话重复授权基础命令 | 👍1，新提需求，反映 UX 改进方向 |

---

### 4. 重要 PR 进展  
无 Pull Request 更新。

---

### 5. 功能需求趋势  

- **跨平台一致性**：多个 Issue（#1703、#1329、#2236）反映 CLI 与 VS Code 在模型、技能、MCP 策略上的行为差异，成为当前最突出矛盾。
- **MCP 与第三方集成稳定性**：组织级 MCP 服务器管理、权限策略同步、超时控制（#172）等问题集中爆发，显示扩展架构仍需加固。
- **终端体验优化**：包括滚动条缺失（#2252）、WSL CPU 占用过高（#2208）、PowerShell 只读命令免审（#2273）等，指向 TUI 性能与交互设计短板。
- **自动化与脚本支持**：如启动时指定模式（#2268）、会话 ID 传递（#2108）、二进制白名单（#2256），表明开发者正将 CLI 集成至自动化流水线，需更强可控性。

---

### 6. 开发者关注点  

- **策略与权限逻辑不透明**：组织策略在 CLI 中误判或延迟生效（#2236、#1707），缺乏调试接口。
- **模型与工具链稳定性**：Claude 4.6 连接中断、Glob 忽略 `.gitignore` 外文件（#2084）、子代理 UI 抖动（#1577）等问题影响复杂任务执行。
- **配置灵活度不足**：无法预设执行模式、过滤文件类型、指定 Shell 类型（#2271），限制 CI/CD 与多环境适配。
- **资源消耗过高**：CLI SDK 多会话导致 CPU 满载（#2269），WSL 下 TUI 无响应（#2208），亟需性能优化。

> 建议优先解决 **跨平台策略同步** 与 **MCP 服务器可见性** 问题，以提升企业用户信任度；同时加强 CLI 与 VS Code 的功能对齐，减少上下文切换成本。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报**  
📅 2026-03-25 | 数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

### 1. 今日速览  
昨日社区聚焦于 **v1.25.0 版本升级后的工具稳定性问题**，尤其是 `writefile` 和 `Shell` 工具在处理含引号内容时频繁报错；同时，**插件系统作为新功能引发广泛讨论**，用户对其兼容性、安装方式及交互体验提出多项疑问。ACP 终端模块的底层重构也持续推进，相关修复 PR 已合并。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 社区热点 Issues  

| 编号 | 标题 | 重要性 | 社区反应 |
|------|------|--------|----------|
| [#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564) | 升级到1.25.0后，writefile工具经常出错 | ⭐⭐⭐⭐ | 用户反馈升级后文件写入失败率显著上升，影响核心编码流程，已有2条评论讨论临时解决方案（如分段写入）。 |
| [#1565](https://github.com/MoonshotAI/kimi-cli/issues/1565) | WriteFile/Shell 工具 Invalid arguments error with HTML content containing quotes | ⭐⭐⭐⭐ | 涉及参数解析缺陷，导致含引号的HTML内容无法正常生成，属关键工具链故障，亟待修复。 |
| [#1566](https://github.com/MoonshotAI/kimi-cli/issues/1566) | 【Kimi Plugin】对现在的插件提出一些疑问 | ⭐⭐⭐⭐ | 插件系统刚上线即引发关注，用户询问是否支持 Claude Code / Open Code 插件及安装方式，反映生态兼容需求强烈。 |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) | Jetbrains IDE kimi不可用 | ⭐⭐⭐ | 长期未闭合问题，影响主流IDE用户体验，更新显示仍在排查中，社区期待官方响应。 |
| [#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560) | Vscode kimicode插件中 skill交互优化 | ⭐⭐⭐ | 提出VSCode插件交互逻辑与CLI不一致问题（选skill后直接发起请求），影响操作流畅性。 |
| [#1567](https://github.com/MoonshotAI/kimi-cli/issues/1567) | Disable ctrl+w clipboard | ⭐⭐ | Mac用户反馈Ctrl+W误触导致剪贴板污染，属UX细节但影响高频操作体验。 |
| [#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559) | 官网中下载kimi-cli命令报错 | ⭐⭐⭐ | 官网指引存在技术错误，阻碍新用户入门，需文档团队紧急修复。 |
| [#1380](https://github.com/MoonshotAI/kimi-cli/issues/1380) | ACP terminal tool fails with 'module acp has no attribute TerminalHandle' | ⭐⭐⭐ | 虽已关闭，但反映旧版本ACP接口兼容性问题，提示用户需及时升级。 |
| [#1476](https://github.com/MoonshotAI/kimi-cli/issues/1476) | 处于plan模式，但输出“已经不在plan mode了” | ⭐⭐ | 状态同步异常，可能涉及UI/逻辑层不一致，影响计划模式可信度。 |

> 注：以上按影响范围、使用频率及讨论热度筛选。

---

### 4. 重要 PR 进展  

| 编号 | 标题 | 类型 | 说明 |
|------|------|------|------|
| [#1562](https://github.com/MoonshotAI/kimi-cli/pull/1562) | fix: auto-resolve QuestionRequest in yolo/print mode | 🔧 修复 | 解决 `--print` 模式下工具调用挂起问题，提升无交互场景稳定性。 |
| [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) | fix: replace removed acp.TerminalHandle with Client terminal methods | 🔧 修复 | 完成ACP 0.8 API迁移，彻底解决TerminalHandle缺失错误，已合并。 |
| [#1563](https://github.com/MoonshotAI/kimi-cli/pull/1563) | feat(agent): support Jinja2 include directive in system prompts | ✨ 功能 | 支持系统提示模板通过 `{% include %}` 复用文件，增强提示工程灵活性。 |
| [#1561](https://github.com/MoonshotAI/kimi-cli/pull/1561) | feat(hooks): add lifecycle hooks system (Wire 1.7) | ✨ 功能 | 引入13种生命周期钩子（如PreToolUse、PostToolUse），对齐Claude Code架构，扩展性强。 |
| [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | feat(plugin): add configurable compaction providers | ✨ 功能 | 允许为上下文压缩指定独立模型，避免与主对话模型耦合，提升资源控制粒度。 |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | fix(acp): handle ValueError when 'kimi' not in sys.argv | 🔧 修复 | 修复IDE集成启动失败问题，增强启动鲁棒性。 |
| [#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558) | docs: mark plugin system as beta | 📚 文档 | 明确标注插件系统为Beta阶段，管理用户预期，降低误用风险。 |
| [#1213](https://github.com/MoonshotAI/kimi-cli/pull/1213) | feat: add nix devShell support | 🛠️ 开发 | 为Nix用户提供开发环境支持，吸引函数式包管理开发者群体。 |

> 注：已合并PR标记为CLOSED，进行中为OPEN。

---

### 5. 功能需求趋势  

- **插件系统生态建设**：用户强烈关注插件兼容性（如Claude Code/Open Code）、安装机制及稳定性，表明社区希望构建可扩展的AI编码工具生态。
- **IDE集成优化**：JetBrains与VSCode插件的交互体验、功能一致性成为焦点，反映开发者对无缝IDE工作流的高度依赖。
- **工具链健壮性**：`writefile`、`Shell` 等核心工具在复杂内容（如含引号HTML）下的参数解析问题频发，亟需统一输入验证与转义机制。
- **交互一致性**：CLI与GUI（如VSCode插件）在skill选择、plan模式等行为上需对齐，避免认知割裂。

---

### 6. 开发者关注点  

- **升级兼容性风险**：v1.25.0 引入的插件系统与API变更导致部分工具异常，开发者呼吁更完善的迁移指南与回滚机制。
- **跨平台行为差异**：Mac（Ctrl+W剪贴板）、Windows/Linux（工具报错）等平台特异性问题需统一处理。
- **文档准确性**：官网安装命令报错暴露文档与代码不同步问题，影响第一印象。
- **调试支持不足**：用户尝试“用Kimi Code自己调试”侧面反映缺乏内置诊断工具，建议增加 `--debug-tool` 等辅助功能。

---  
📌 **结语**：当前社区核心诉求集中于 **稳定性修复** 与 **插件生态 clarity**，建议团队优先处理 writefile/Shell 参数解析问题，并发布插件开发规范文档以引导生态健康发展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-03-25）

---

## 今日速览

OpenCode 发布 v1.3.2，新增 TUI 和服务器进程的堆快照功能，助力内存问题排查；同时 v1.3.1 引入 Poe 认证、Kotlin/HCL/Lua/TOML 语法高亮等特性。社区对内存泄漏、OAuth 认证异常及 Web 端崩溃问题高度关注，多个关键 Bug 进入修复流程。

---

## 版本发布

### [v1.3.2](https://github.com/anomalyco/opencode/releases/tag/v1.3.2)
- **TUI 堆快照功能**：支持通过“Write heap snapshot”命令捕获 TUI 与服务器进程的内存快照，文件分别保存为 `tui.heapsnapshot` 和 `server.heapsnapshot`，便于诊断内存泄漏问题。

### [v1.3.1](https://github.com/anomalyco/opencode/releases/tag/v1.3.1)
- 新增 **Poe 作为内置认证提供者**（OAuth + API Key）
- 支持 **Amazon Bedrock 自定义提供者的 Token 缓存**
- 扩展语法高亮至 **Kotlin、HCL、Lua、TOML**
- 增加主题模式的手动锁定/解锁功能

---

## 社区热点 Issues

1. **[#16470] 代码输出在浅色模式下不可读**  
   *（24 评论，26 👍）*  
   格式化代码因配色方案错误导致文字与背景融合，严重影响可读性。社区普遍认为这是核心 UI 缺陷，亟待修复。  
   🔗 https://github.com/anomalyco/opencode/issues/16470

2. **[#16697] 长时间使用 TUI 导致内存无限增长**  
   *（14 评论，11 👍）*  
   多个独立内存泄漏源被确认，已有 20+ 贡献者参与修复。此问题直接影响生产环境稳定性，是当前最高优先级性能问题之一。  
   🔗 https://github.com/anomalyco/opencode/issues/16697

3. **[#17910] OAuth + cache_control ephemeral 导致 Claude 模型 HTTP 400 错误**  
   *（11 评论，2 👍）*  
   自 2026-03-17 起，所有 Claude 模型在使用 OAuth 认证时失败，非 Anthropic 模型正常。根因指向 `@ai-sdk/anthropic` 无条件注入参数，需紧急热修。  
   🔗 https://github.com/anomalyco/opencode/issues/17910

4. **[#19034] `opencode web` 在 v1.3.2 后完全崩溃**  
   *（6 评论）*  
   用户未升级版本仍受影响，表现为模型加载失败、会话丢失、请求错误。疑似服务端变更引发兼容性断裂，引发广泛担忧。  
   🔗 https://github.com/anomalyco/opencode/issues/19034

5. **[#5391] 支持每个认证提供者多个配置文件**  
   *（10 评论，24 👍）*  
   高频需求，用户希望在切换项目时快速切换不同 API Key 或账户，提升多环境开发效率。  
   🔗 https://github.com/anomalyco/opencode/issues/5391

6. **[#11176] 官方 VS Code 扩展支持**  
   *（9 评论，23 👍）*  
   强烈呼吁将 OpenCode 集成至 VS Code，实现原生编辑器体验，是 IDE 生态扩展的关键一步。  
   🔗 https://github.com/anomalyco/opencode/issues/11176

7. **[#7467] 基于 GitHub 的 Agent 市场**  
   *（10 评论）*  
   提议建立中心化 Agent 共享平台，解决当前手动复制技能文件的低效问题，推动社区协作生态建设。  
   🔗 https://github.com/anomalyco/opencode/issues/7467

8. **[#18950] Web UI 无法连接 Claude（仅显示 API Key 输入）**  
   *（4 评论，2 👍）*  
   最新更新后 OAuth 选项消失，普通用户难以获取 Claude API Key，造成功能降级体验。  
   🔗 https://github.com/anomalyco/opencode/issues/18950

9. **[#18364] Windows 下 TUI 输入时频繁崩溃**  
   *（4 评论）*  
   编辑状态大量丢失，严重影响 Windows 用户工作流，需优先排查平台特定 Bug。  
   🔗 https://github.com/anomalyco/opencode/issues/18364

10. **[#12741] 技能文件未在 `~/.agents/skills/**` 自动检测**  
    *（7 评论，5 👍）*  
    文档承诺的功能未生效，导致自定义技能无法加载，影响插件系统可用性。  
    🔗 https://github.com/anomalyco/opencode/issues/12741

---

## 重要 PR 进展

1. **[#18891] 修复小窗口下 TUI 选择项显示不全**  
   优化 `/select` 对话框在窄终端中的滚动逻辑，提升小屏设备体验。  
   🔗 https://github.com/anomalyco/opencode/pull/18891

2. **[#18433] 支持 AI SDK v6**  
   关键基础设施升级，为未来模型兼容性与性能优化奠定基础（当前阻塞于上游依赖）。  
   🔗 https://github.com/anomalyco/opencode/pull/18433

3. **[#18767] 移动端触控优化**  
   新增触摸手势支持、响应式布局与虚拟键盘适配，拓展 OpenCode 在平板/手机场景的使用能力。  
   🔗 https://github.com/anomalyco/opencode/pull/18767

4. **[#18900] 恢复 Git 背板的代码审查模式**  
   重构 Git 服务为 Effect 架构，统一 VCS 操作入口，修复桌面端无法查看分支差异的问题。  
   🔗 https://github.com/anomalyco/opencode/pull/18900

5. **[#17529] 修复 DeepSeek 推理内容缺失导致的 400 错误**  
   正确处理 `reasoning_content` 字段，确保 DeepSeek 模型在思考模式下稳定运行。  
   🔗 https://github.com/anomalyco/opencode/pull/17529

6. **[#19039] 使 `/status` 对话框可滚动**  
   解决 MCP/LSP/插件列表溢出问题，提升信息密集场景下的可用性。  
   🔗 https://github.com/anomalyco/opencode/pull/19039

7. **[#19041] 防止因文件过期导致的重复重试循环**  
   当外部工具修改文件时，自动重新读取以避免模型陷入无限重试，显著提升鲁棒性。  
   🔗 https://github.com/anomalyco/opencode/pull/19041

8. **[#18947] 自动注册直接路由项目**  
   修复通过 URL 路径打开项目时不注册到“最近项目”列表的问题，改善导航体验。  
   🔗 https://github.com/anomalyco/opencode/pull/18947

9. **[#18419] 文件搜索切换至 fff 引擎**  
   替换旧版 ripgrep 实现，统一文件搜索、树形浏览与 grep 操作，提升性能与一致性。  
   🔗 https://github.com/anomalyco/opencode/pull/18419

10. **[#19038] 在桌面应用中内嵌浏览器**  
    新增应用内网页查看功能，避免频繁切换外部浏览器，增强一体化工作流。  
    🔗 https://github.com/anomalyco/opencode/pull/19038

---

## 功能需求趋势

| 方向 | 热度 | 典型 Issue |
|------|------|-----------|
| **IDE 集成** | ⭐⭐⭐⭐☆ | VS Code 扩展 ([#11176])、内嵌浏览器 ([#19038]) |
| **认证与多账户管理** | ⭐⭐⭐⭐ | 多认证配置 ([#5391])、OAuth 异常 ([#17910]) |
| **性能与稳定性** | ⭐⭐⭐⭐⭐ | 内存泄漏 ([#16697])、CPU 占用高 ([#4804])、Web 崩溃 ([#19034]) |
| **移动端与触控支持** | ⭐⭐⭐ | 触控优化 ([#18767])、P2P 远程访问 ([#19013]) |
| **插件与技能生态** | ⭐⭐⭐⭐ | Agent 市场 ([#7467])、技能自动发现 ([#12741])、插件重命名为扩展 ([#18697]) |
| **模型与推理支持** | ⭐⭐⭐ | DeepSeek 推理修复 ([#17529])、Claude Opus 上下文窗口差异 ([#18832]) |

---

## 开发者关注点

- **内存与性能问题成焦点**：多个高星 Issue 指向内存泄漏、CPU 占用过高及 Web 端崩溃，反映底层架构需进一步优化。
- **认证流程体验割裂**：OAuth 支持不稳定、API Key 获取门槛高，阻碍 Claude 等高级模型的使用。
- **跨平台一致性不足**：Windows 路径匹配、TUI 输入崩溃、浅色主题对比度等问题凸显平台适配短板。
- **技能/插件系统亟需完善**：自动发现失效、缺乏官方市场，限制社区贡献积极性。
- **移动端潜力被重视**：触控优化与 P2P 远程访问提案显示团队正探索移动开发场景。

> 报告基于 GitHub 数据自动生成 | 数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-03-25）

---

## 1. 今日速览

Qwen Code 社区在权限系统、IDE 集成和跨平台兼容性方面持续优化，今日重点包括：新增 `/loop` 命令支持周期性任务执行，修复 Windows 下 Git Bash/MSYS2 环境识别问题，并针对中文文件名读取、会话持久化等高频反馈推进修复。多个长期悬而未决的 Issue 进入关闭流程，显示团队响应效率提升。

---

## 2. 版本发布

**v0.13.0-nightly.20260325.3776825c2**  
✅ 支持非 GitHub Git URL 的扩展安装（如 GitLab、Bitbucket 等自托管平台），提升企业用户部署灵活性。  
🔗 [Release v0.13.0-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260325.3776825c2)

---

## 3. 社区热点 Issues

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#2626](https://github.com/QwenLM/qwen-code/issues/2626) | Linux 下 CLI 执行权限请求时崩溃（"Terminated"） | ⚠️ 高 | 用户反馈在 Ubuntu + tmux 环境下复现，Windows 正常，需紧急排查信号处理逻辑 |
| [#2632](https://github.com/QwenLM/qwen-code/issues/2632) | 回答永不结束，需手动 ESC 终止 | ⚠️ 高 | 多用户报告流控失效，疑似模型输出未正确触发结束标记 |
| [#2640](https://github.com/QwenLM/qwen-code/issues/2640) | 单次会话内重复询问权限（如 "Always allow"） | ⚠️ 高 | 👍 5 赞同，严重影响交互体验，权限缓存机制疑似失效 |
| [#241](https://github.com/QwenLM/qwen-code/issues/241) | Shift+Enter 发送消息而非换行 | ⚠️ 中高 | 👍 4 赞同，违背主流 IDE/聊天工具惯例，影响代码输入效率 |
| [#2629](https://github.com/QwenLM/qwen-code/issues/2629) | 文件读取报错 "params must have required property 'file_path'" | ⚠️ 高 | 新版本回归问题，工具调用参数校验过严 |
| [#2496](https://github.com/QwenLM/qwen-code/issues/2496) | 中英文混合文件名无法读取（误判空格） | ⚠️ 中 | 中文用户高频痛点，路径解析逻辑缺陷 |
| [#2530](https://github.com/QwenLM/qwen-code/issues/2530) | OpenRouter 模型返回空响应或未调用工具 | ⚠️ 中 | 第三方 API 集成稳定性问题，影响生态兼容性 |
| [#2518](https://github.com/QwenLM/qwen-code/issues/2518) | 选择自定义 `/` 命令后 `@` 文件搜索失效 | ⚠️ 中 | UI 状态管理 bug，打断工作流 |
| [#2522](https://github.com/QwenLM/qwen-code/issues/2522) | YOLO 模式下 `exit_plan_mode` 返回拒绝 | ⚠️ 中 | 模式切换逻辑错误，导致计划无法提交 |
| [#1370](https://github.com/QwenLM/qwen-code/issues/1370) | VSCode 插件缺乏设置 UI 说明 | ⚠️ 中 | 新用户上手障碍，文档/UX 待完善 |

---

## 4. 重要 PR 进展

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#2643](https://github.com/QwenLM/qwen-code/pull/2643) | feat(cli): 添加 `/loop` 命令支持周期性任务 | ✨ 新功能 | 实现定时执行 prompt，适用于监控、巡检等场景 |
| [#2645](https://github.com/QwenLM/qwen-code/pull/2645) | fix(windows): 支持 Git Bash/MSYS2 环境检测 | 🐛 修复 | 解决 Windows 下 shell 命令误用 cmd.exe 问题 |
| [#2637](https://github.com/QwenLM/qwen-code/pull/2637) | feat: 权限系统 UX 改进（可读标签 + 拒绝反馈） | ✨ 改进 | 提升权限确认对话框可读性，明确 deny 规则提示 |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | feat(channels): 集成 Telegram 通道（ACP 桥接） | ✨ 新功能 | 扩展多通道交互能力，迈向通用 Agent 平台 |
| [#2636](https://github.com/QwenLM/qwen-code/pull/2636) | fix(core): 接受纯 thought 响应（Gemini 流验证） | 🐛 修复 | 兼容思考模型输出格式，避免 InvalidStreamError |
| [#2631](https://github.com/QwenLM/qwen-code/pull/2631) | fix(acp): 清理子 Agent diff 确认状态 | 🐛 修复 | 解决 IDE 接受变更后终端仍卡住的问题 |
| [#2611](https://github.com/QwenLM/qwen-code/pull/2611) | fix(shell): 优雅处理 PTY 竞态条件错误 | 🐛 修复 | 提升 macOS/Linux 下 shell 执行稳定性 |
| [#2525](https>//github.com/QwenLM/qwen-code/pull/2525) | feat: 添加 Follow-up Suggestions 功能 | ✨ 新功能 | 任务完成后推荐下一步操作（类似 Claude Code） |
| [#2602](https://github.com/QwenLM/qwen-code/pull/2602) | feat(hooks ui): 重构 /hooks 命令 UI | ✨ 改进 | 提供更清晰的钩子管理界面，支持扩展钩子 |
| [#2623](https://github.com/QwenLM/qwen-code/pull/2623) | feat: 新增 qwen-settings-config 技能 | ✨ 新功能 | 内置配置文档技能，提升自服务能力 |

---

## 5. 功能需求趋势

从近期 Issues 和 PR 可提炼出三大核心方向：

1. **IDE 深度集成优化**  
   - 高频诉求：VSCode 插件设置 UI（[#1370](https://github.com/QwenLM/qwen-code/issues/1370)）、会话命名（[#2619](https://github.com/QwenLM/qwen-code/issues/2619)）、剪贴板图片粘贴（[#1891](https://github.com/QwenLM/qwen-code/issues/1891)、[#1951](https://github.com/QwenLM/qwen-code/issues/1951)）
   - 趋势：向 Copilot/Claude Code 体验对齐，强化开发者工作流无缝衔接

2. **权限与安全性增强**  
   - 焦点：会话级权限持久化（[#2335](https://github.com/QwenLM/qwen-code/issues/2335)）、Policy Engine 支持（[#1933](https://github.com/QwenLM/qwen-code/issues/1933)）、MCP 只读工具配置（[#2570](https://github.com/QwenLM/qwen-code/pull/2570)）
   - 趋势：企业级安全管控需求上升，推动细粒度权限模型演进

3. **多平台与国际化适配**  
   - 痛点：中文路径解析（[#2496](https://github.com/QwenLM/qwen-code/issues/2496)）、Windows Shell 兼容（[#2645](https://github.com/QwenLM/qwen-code/pull/2645)）、IME 输入可靠性（[#2612](https://github.com/QwenLM/qwen-code/pull/2612)）
   - 趋势：全球化部署要求提升，非英语环境体验成关键指标

---

## 6. 开发者关注点

- **稳定性回归**：v0.13.0 引入文件读取参数校验过严（[#2629](https://github.com/QwenLM/qwen-code/issues/2629)）、PTY 崩溃（[#2611](https://github.com/QwenLM/qwen-code/pull/2611)）等问题引发担忧，建议加强回归测试覆盖。
- **工具调用可靠性**：多个 Issue（如 [#2530](https://github.com/QwenLM/qwen-code/issues/2530)、[#2505](https://github.com/QwenLM/qwen-code/issues/2505)）反映第三方模型集成时工具调用失败，需优化容错与日志。
- **交互一致性**：Shift+Enter 行为（[#241](https://github.com/QwenLM/qwen-code/issues/241)）、Vim 模式快捷键（[#2561](https://github.com/QwenLM/qwen-code/issues/2561)）等细节影响专业用户效率，需建立 UX 规范。

> 📌 **建议关注**：权限系统重构（[#2637](https://github.com/QwenLM/qwen-code/pull/2637)）和 `/loop` 命令（[#2643](https://github.com/QwenLM/qwen-code/pull/2643)）标志着 Qwen Code 正从“编码助手”向“自动化 Agent”演进，值得持续跟踪。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*