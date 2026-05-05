# OpenClaw 生态日报 2026-05-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-04 02:02 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [NemoClaw](https://github.com/NVIDIA/NemoClaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **500 条 Issues 更新**（425 条新开/活跃，75 条关闭）和 **500 条 PR 更新**（454 条待合并，46 条已合并/关闭）。项目发布了 **v2026.5.3-beta.2**，引入了文件传输插件等新功能。社区在性能优化方面取得显著进展，多个 PR 解决了长期困扰用户的工具准备延迟问题（~8s 降至更低水平）。整体项目健康度良好，合并率较高，但仍有大量 Issues 处于开放状态需要关注。

---

## 2. 版本发布

### v2026.5.3-beta.2 发布

**发布说明：** OpenClaw 2026.5.3 beta 2

**主要更新内容：**

| 类别 | 更新内容 |
|------|----------|
| **新插件** | `plugins/file-transfer`：新增捆绑式文件传输插件，提供以下 Agent 工具：<br>• `file_fetch` - 从配对节点获取文件<br>• `dir_list` - 列出配对节点目录<br>• `dir_fetch` - 获取配对节点目录内容<br>• `file_write` - 向配对节点写入文件 |
| **安全策略** | 引入 `plugins.entries.file-transfer.config.nodes` 下的默认拒绝（default-deny）路径策略，需运营商批准 |

**破坏性变更：** 无重大破坏性变更
**迁移注意事项：** 使用文件传输功能需在配置中显式启用节点路径策略

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#77031](https://github.com/openclaw/openclaw/pull/77031) | fix: reduce gateway tool prep stalls | ✅ CLOSED | ⭐⭐⭐ | 解决工具准备阶段 ~8.3s 延迟问题，避免在插件工具准备期间克隆完整 secrets 运行时快照 |
| [#77005](https://github.com/openclaw/openclaw/pull/77005) | fix: lazy-load pdfjs-dist | ✅ CLOSED | ⭐⭐⭐ | 将 pdfjs-dist 改为懒加载，消除每轮 ~2.5s 阻塞开销 |
| [#77036](https://github.com/openclaw/openclaw/pull/77036) | Keep pnpm source installs compatible with Baileys | ✅ CLOSED | ⭐⭐ | 修复 pnpm 严格模式下 WhatsApp/Baileys 依赖解析问题 |
| [#77034](https://github.com/openclaw/openclaw/pull/77034) | feat(gateway): add diagnostics.pricing method | ✅ CLOSED | ⭐⭐ | 新增 `diagnostics.pricing` 网关方法，暴露模型定价缓存状态 |
| [#70681](https://github.com/openclaw/openclaw/pull/70681) | fix(infra/restart): verify gateway PIDs via ps argv | ✅ CLOSED | ⭐⭐ | 修复 macOS 上 lsof 解析网关 PID 的问题 |
| [#76238](https://github.com/openclaw/openclaw/pull/76238) | fix(telegram): render interactive reply buttons | ✅ CLOSED | ⭐⭐ | 修复 Telegram 交互式回复按钮渲染 |
| [#76870](https://github.com/openclaw/openclaw/pull/76870) | fix(openai-codex): retry on IPv4 when IPv6 egress fails | ✅ CLOSED | ⭐⭐ | 修复 IPv4-only 主机的 Codex 请求问题 |

### 正在审查的热门 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#77033](https://github.com/openclaw/openclaw/pull/77033) | fix: prevent stale transcript replay | 🔍 OPEN | 防止 WebChat 中重复的助手消息，解决 #76804 |
| [#77023](https://github.com/openclaw/openclaw/pull/77023) | feat: steer mid-turn prompts by default | 🔍 OPEN | 默认启用中轮提示词转向，移除旧的 `/queue` 模式 |
| [#77013](https://github.com/openclaw/openclaw/pull/77013) | feat(codex): bridge native goal completion | 🔍 OPEN | 新增 `/goal` 命令别名，桥接 Codex 目标完成状态 |
| [#76923](https://github.com/openclaw/openclaw/pull/76923) | fix(gateway): add safe restart coordinator | 🔍 OPEN | 新增安全重启协调器，支持快照和优雅重启 |
| [#76851](https://github.com/openclaw/openclaw/pull/76851) | fix(agents/tools): cache getActiveSecretsRuntimeSnapshot() | 🔍 OPEN | 缓存 secrets 快照，消除 ~8s 核心工具延迟 |

---

## 4. 社区热点

### 评论最多的 Issues（Top 10）

| 排名 | Issue | 评论数 | 核心诉求 |
|------|-------|--------|----------|
| 1 | [#43735](https://github.com/openclaw/openclaw/issues/43735) Skills not loading in agent context | 12 | Agent 无法加载全部 skills，仅显示部分可用技能 |
| 2 | [#45740](https://github.com/openclaw/openclaw/issues/45740) gh-issues skill: untrusted issue body injected | 12 | GitHub issue 内容未消毒直接注入子代理提示词，存在安全风险 |
| 3 | [#39604](https://github.com/openclaw/openclaw/issues/39604) Add tools.web.fetch.allowPrivateNetwork | 12 👍5 | 请求添加私网访问配置项 |
| 4 | [#76307](https://github.com/openclaw/openclaw/issues/76307) long-output agent turns truncate | 11 👍1 | 长输出被截断至 25-80 字符，回归问题 |
| 5 | [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | 10 | 子代理结果静默丢失，无重试无通知 |
| 6 | [#29552](https://github.com/openclaw/openclaw/issues/29552) Version mismatch | 10 | 全局版本不匹配问题 |
| 7 | [#41744](https://github.com/openclaw/openclaw/issues/41744) Feishu: read image tool result loses media | 10 | 飞书渠道图片读取后媒体丢失 |
| 8 | [#41494](https://github.com/openclaw/openclaw/issues/41494) Gemini reasoning leaks into chat | 10 | Gemini 推理内容泄漏到聊天界面 |
| 9 | [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement | 9 | 请求在网关层实现按代理成本预算控制 |
| 10 | [#43260](https://github.com/openclaw/openclaw/issues/43260) Support model field in SKILL.md | 8 | 请求支持在技能级别指定模型路由 |

### 热点分析

**安全与隔离问题突出：** Issue #45740 揭示了 gh-issues 技能存在未消毒内容注入漏洞，社区对此高度关注（12 条评论），反映出对多代理安全隔离的重视。

**性能回归问题受关注：** #76307 和 #76295 均涉及性能回归（长输出截断、工具准备延迟），#77031 和 #76851 的 PR 已针对性修复。

**功能请求集中于精细化控制：** 用户对按技能路由模型（#43260）、按代理成本预算（#42475）、私网访问（#39604）等精细化配置需求强烈。

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#76307](https://github.com/openclaw/openclaw/issues/76307) | long-output agent turns truncate at ~25–80 chars | OPEN | ❌ 无 |
| [#76295](https://github.com/openclaw/openclaw/issues/76295) | core-plugin-tools stage constant ~8.3s latency | OPEN | ✅ [#77031](https://github.com/openclaw/openclaw/pull/77031) 已合并 |
| [#76382](https://github.com/openclaw/openclaw/issues/76382) | Gateway becoming very slow, CPU 100% | CLOSED | ✅ 已修复 |
| [#76804](https://github.com/openclaw/openclaw/issues/76804) | WebChat assistant text responses not persisted | OPEN | ✅ [#77033](https://github.com/openclaw/openclaw/pull/77033) 审查中 |

### 严重程度：中 🟡

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#43735](https://github.com/openclaw/openclaw/issues/43735) | Skills not loading in agent context | OPEN | ❌ 无 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | OPEN | ❌ 无 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | Session hangs when compaction times out | OPEN | ❌ 无 |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management is in chaos | OPEN | ❌ 无 |
| [#46637](https://github.com/openclaw/openclaw/issues/46637) | reasoning_content causes JSON parse error | OPEN | ❌ 无 |

### 严重程度：低 🟢

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | openclaw update fails with EBUSY on Windows | OPEN | ❌ 无 |
| [#39038](https://github.com/openclaw/openclaw/issues/39038) | Node program hangs on Windows 11 24H2 | OPEN | ❌ 无 |
| [#45799](https://github.com/openclaw/openclaw/issues/45799) | Telegram media download fails silently | OPEN | ❌ 无 |
| [#44599](https://github.com/openclaw/openclaw/issues/44599) | OPENCLAW_CONFIG_DIR cannot contain whitespace | OPEN | ❌ 无 |

---

## 6. 功能请求与路线图信号

### 高呼声功能请求（按 👍 排序）

| Issue | 功能 | 👍 | 相关 PR | 纳入可能性 |
|-------|------|-----|---------|-----------|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` 私网访问 | 5 | 无 | 🟡 中等 |
| [#76804](https://github.com/openclaw/openclaw/issues/76804) | WebChat 会话持久化 | 4 | [#77033](https://github.com/openclaw/openclaw/pull/77033) | 🟢 高 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX 支持 | 4 | 无 | 🟡 中等 |
| [#76295](https://github.com/openclaw/openclaw/issues/76295) | 工具准备延迟优化 | 4 | [#77031](https://github.com/openclaw/openclaw/pull/77031) | 🟢 已实现 |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | Pre-reset agentic memory flush | 2 | 无 | 🟡 中等 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | 会话压缩超时处理 | 2 | 无 | 🟡 中等 |
| [#45269](https://github.com/openclaw/openclaw/issues/45269) | apply_patch 工具策略修复 | 2 | 无 | 🟡 中等 |

### 路线图信号分析

从今日 PR 活动可推断近期路线图方向：

1. **性能优化优先**：多个 PR 集中解决工具准备延迟（#77031, #76851, #77005），表明项目正在系统性优化响应速度
2. **多代理协作增强**：#77023（mid-turn 提示词转向）、#77013（Codex 目标桥接）暗示多代理编排能力加强
3. **运维能力提升**：#76923（安全重启协调器）、#77034（诊断定价缓存）提升生产环境可观测性
4. **文件传输能力**：`v2026.5.3-beta.2` 新增的文件传输插件标志跨节点协作功能成为重点

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 相关 Issue | 用户场景 |
|------|-----------|----------|
| **技能加载不完整** | #43735 | 用户在 `~/.openclaw/workspace/skills/` 放置多个技能，但 Agent 仅能看到部分可用技能 |
| **子代理结果丢失** | #44925 | Telegram 论坛模式下子代理任务结果静默丢失，无重试机制 |
| **内存管理混乱** | #43747 | 不同用户的内存管理行为不一致（chunking、embedding 存储方式各异） |
| **会话频繁重置** | #47668 | 会话上下文在 ~80-100 条消息后即填满，破坏对话连续性 |
| **飞书图片丢失** | #41744 | 飞书渠道使用 read 工具读取图片后，媒体附件在最终发送时丢失 |

### 用户满意点

- **文件传输插件**（v2026.5.3-beta.2）：社区对新增的 `file_fetch`、`dir_list` 等工具反应积极
- **性能修复**：#77031 合并后工具准备延迟从 ~8.3s 大幅降低，用户体验显著提升
- **定价诊断**（#77034）：新增的 `diagnostics.pricing` 方法提升了成本可观测性

### 典型使用场景

1. **多代理协作**：用户通过 gh-issues 技能处理 GitHub 问题，涉及子代理任务分发
2. **跨平台部署**：Windows/Linux/macOS 多平台使用，涉及 Docker、WSL、macOS companion app
3. **本地模型集成**：部分用户使用 Qwen、Claude 本地模型，涉及 embedding 和推理配置
4. **企业级应用**：Telegram/Discord/飞书等渠道集成，涉及成本控制和合规要求

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30 天无维护者回复）

| Issue | 创建日期 | 标题 | 最后更新 | 优先级 |
|-------|----------|------|----------|--------|
| [#38204](https://github.com/openclaw/openclaw/issues/38204) | 2026-03-06 | Support for the new Grok 4.2 Multi Model

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-05-04
**分析范围：** 13 个开源项目（11 个活跃 + 2 个无活动）

---

## 1. 生态全景

2026 年 5 月初，个人 AI 助手与自主智能体开源生态呈现**"一超多强、差异化演进"**的格局。OpenClaw 以绝对领先的社区活跃度（日均 500+ Issues/PRs）稳居生态核心，其插件架构和工具生态正成为事实标准，吸引大量项目采用其接口规范。围绕 OpenClaw 形成的 **Claw 生态集群**（Zeroclaw、PicoClaw、NanoClaw、IronClaw、ZeptoClaw、NemoClaw）虽各具侧重，但普遍受益于 OpenClaw 的技术溢出。与此同时，NanoBot、CoPaw 等独立项目通过差异化功能（多渠道集成、记忆系统）开辟了细分市场。整体生态处于**快速迭代期**，安全加固、多模态支持、Agent 编排能力成为共同的技术演进方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃→关闭) | PRs (待合并→已合/关) | Releases | 健康度 | 定位 |
|------|------------------------|----------------------|----------|--------|------|
| **OpenClaw** | 500 (425→75) | 500 (454→46) | 1 (v2026.5.3-beta.2) | ⭐⭐⭐⭐⭐ | **生态核心** |
| **Zeroclaw** | 50 (42→8) | 50 (30→20) | 0 | ⭐⭐⭐⭐ | 桌面应用 + 语音 |
| **NemoClaw** | 17 (8→9) | 50 (39→11) | 0 | ⭐⭐⭐⭐ | NVIDIA 集成 + 安全 |
| **NanoClaw** | 10 (2→8) | 50 (19→31) | 0 | ⭐⭐⭐⭐ | 轻量化 + 渠道集成 |
| **CoPaw** | 33 (22→11) | 16 (11→5) | 0 | ⭐⭐⭐⭐ | 记忆系统 + 多渠道 |
| **NanoBot** | 6 (4→2) | 22 (15→7) | 0 | ⭐⭐⭐⭐ | 多渠道 + 安全 |
| **ZeptoClaw** | 5 (4→1) | 22 (3→19) | 0 | ⭐⭐⭐⭐ | 中间件 + 边缘 AI |
| **PicoClaw** | 5 (4→1) | 20 (14→6) | 0 | ⭐⭐⭐⭐ | 轻量化 + MCP |
| **IronClaw** | 19 (19→0) | 24 (21→3) | 0 | ⭐⭐⭐ | NEAR 集成 + Reborn 架构 |
| **LobsterAI** | 1 (1→0) | 2 (2→0) | 0 | ⭐⭐ | WebUI + 本地部署 |
| **Moltis** | 1 (1→0) | 2 (2→0) | 0 | ⭐⭐ | 多 Provider 兼容 |
| TinyClaw | — | — | — | — | 无活动 |
| EasyClaw | — | — | — | — | 无活动 |

**关键发现：**
- **OpenClaw 活跃度是第二名的 10 倍**，但 PR 合并率仅 9.2%，存在积压风险
- **Claw 生态项目**（Zerocaw、NemoClaw、NanoClaw、ZeptoClaw）PR 合并率普遍较高（38-86%），社区贡献消化能力强
- **IronClaw** 呈现"只进不出"特征（19 Issues 全为新开，3 PRs 全为合并），可能处于架构重构期

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位与技术优势

OpenClaw 是整个生态的**技术锚点**，体现在三个层面：

| 维度 | OpenClaw 现状 | 生态影响 |
|------|---------------|----------|
| **工具生态** | 100+ 内置工具，插件市场活跃 | Zeroclaw、PicoClaw、NanoClaw 直接复用其工具接口 |
| **协议规范** | ACP (Agent Communication Protocol) 成熟 | CoPaw 的 Skill 系统、ZeptoClaw 的中间件框架均参考其设计 |
| **多渠道支持** | 30+ 官方渠道适配器 | NanoBot、CoPaw 等项目以 OpenClaw 为后端核心 |

### 3.2 技术路线差异

| 项目 | 技术路线 | 与 OpenClaw 差异 |
|------|----------|------------------|
| **OpenClaw** | 全功能平台，插件驱动 | 基准 |
| **Zeroclaw** | Tauri 桌面应用 + 语音全双工 | 专注端侧体验，工具链独立 |
| **IronClaw** | NEAR 区块链集成 + Reborn 架构 | 去中心化 + 事件溯源架构 |
| **ZeptoClaw** | 中间件框架 + 边缘 AI | 可插拔架构，支持 Liquid AI 等边缘模型 |
| **NanoBot** | 安全优先 + 多渠道 | 独立安全模型，工具链自研 |
| **CoPaw** | 记忆系统 + Auto-Memory | 长期记忆增强，技能管理 |

### 3.3 社区规模对比

| 指标 | OpenClaw | Zeroclaw | NemoClaw | NanoClaw | CoPaw |
|------|----------|----------|----------|----------|-------|
| 日均 Issues | 500 | 50 | 17 | 10 | 33 |
| 日均 PRs | 500 | 50 | 50 | 50 | 16 |
| 贡献者密度 | 高 | 高 | 中 | 中 | 中 |
| 维护者响应 | 快 | 快 | 快 | 快 | 中 |

---

## 4. 共同关注的技术方向

以下技术方向在多个项目中**同步涌现**，反映行业共识：

### 4.1 安全加固（NanoBot、Zeroclaw、NemoClaw、NanoClaw）

| 项目 | 安全诉求 | 具体 Issue/PR |
|------|----------|---------------|
| **NanoBot** | SSRF 防护、文件系统层保护、CSRF 防护 | #3492, #3255, #3252, #3235 |
| **NemoClaw** | Token 泄露防护、SSRF 验证加固 | #2467, #2414 |
| **NanoClaw** | Channel installer 信任边界、Webhook 请求体限制 | #2004, #2000, #1999 |
| **Zeroclaw** | 公共部署安全、审批绕过修复 | #3492, #6207 |

**共同根源：** Agent 访问外部资源（文件、网络、API）时的安全边界定义尚无统一标准，各项目正在独立探索。

---

### 4.2 多模态支持（OpenClaw、PicoClaw、Zeroclaw）

| 项目 | 多模态进展 | 具体 PR |
|------|------------|---------|
| **OpenClaw** | 文件传输插件、图像工具增强 | v2026.5.3-beta.2 |
| **PicoClaw** | streaming reasoning_content + 视频支持 | #2755 |
| **Zeroclaw** | WebSocket 多模态标记处理 | #6183 |
| **PicoClaw** | WhatsApp 语音消息下载 | #3607 |

**共同根源：** LLM 多模态能力（GPT-4o、Gemini、Claude 3.5）普及后，Agent 需要原生处理图像、音频、视频内容。

---

### 4.3 记忆与上下文管理（CoPaw、OpenClaw、Zeroclaw）

| 项目 | 记忆系统诉求 | 具体 Issue/PR |
|------|--------------|---------------|
| **CoPaw** | Auto-Memory 排除心跳、记忆质量提升 | #3944, #3977, #3995 |
| **OpenClaw** | Skills 加载不完整、子代理结果丢失 | #43735, #44925 |
| **Zeroclaw** | 长期记忆工具触发短语 | #569, #571 |
| **ZeptoClaw** | Hermes Agent 自改进循环（技能管理→使用遥测） | #567, #568, #569 |

**共同根源：** Agent 在长对话中上下文窗口有限，如何选择性保留关键信息成为核心工程问题。

---

### 4.4 多 Agent 协作与编排（OpenClaw、IronClaw、ZeptoClaw）

| 项目 | 编排诉求 | 具体 PR/Issue |
|------|----------|---------------|
| **OpenClaw** | 子代理并发限制、mid-turn 提示词转向 | #3615, #77023 |
| **IronClaw** | Reborn 架构：TurnCoordinator、事件溯源 | #3013, #3016 |
| **ZeptoClaw** | 中间件框架 Phase 1（11 个实现） | #564 |
| **PicoClaw** | 多子代理并行调用 | #2754 |

**共同根源：** 单 Agent 能力有限，多 Agent 协作（分工、委托、状态同步）成为复杂任务处理的必由之路。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 目标用户 |
|------|----------|----------|
| **OpenClaw** | 全功能 Agent 平台、插件市场 | 开发者、企业 |
| **Zeroclaw** | 桌面应用（Tauri）、语音全双工 | 桌面用户、语音交互场景 |
| **IronClaw** | NEAR 区块链集成、事件溯源 | Web3 开发者、去中心化应用 |
| **ZeptoClaw** | 中间件框架、边缘 AI（Liquid AI） | 边缘部署、定制化需求 |
| **CoPaw** | 记忆系统、Auto-Memory | 长期对话场景 |
| **NanoBot** | 多渠道集成、安全加固 | 企业多平台部署 |
| **NemoClaw** | NVIDIA 生态集成、GPU 加速 | AI/ML 开发者 |
| **PicoClaw** | 轻量化、MCP 协议支持 | 资源受限环境 |

### 5.2 技术架构差异

| 项目 | 架构特点 | 技术选型 |
|------|----------|----------|
| **OpenClaw** | 插件化、工具驱动 | TypeScript/Node.js |
| **Zeroclaw** | Tauri 桌面 + Rust 后端 | Rust + Tauri |
| **IronClaw** | 事件溯源、Reborn 架构 | Rust |
| **ZeptoClaw** | 中间件管道、可插拔 | Rust |
| **CoPaw** | 记忆优先、Hook 机制 | Python |
| **NemoClaw** | NVIDIA 集成、CUDA 优化 | Go + Python |

### 5.3 目标用户分层

```
┌─────────────────────────────────────────────────────────────┐
│                    企业级 / 复杂场景                          │
│  OpenClaw (全功能) | IronClaw (Web3) | NemoClaw (NVIDIA)    │
├─────────────────────────────────────────────────────────────┤
│                    开发者 / 定制化需求                        │
│  Zeroclaw (桌面) | ZeptoClaw (边缘) | NanoBot (安全)        │
├─────────────────────────────────────────────────────────────┤
│                    普通用户 / 即开即用                        │
│  CoPaw (记忆增强) | PicoClaw (轻量) | LobsterAI (WebUI)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **🚀 快速迭代期** | OpenClaw, Zeroclaw, NemoClaw | 日均 50+ PRs，架构快速演进，安全/功能并行 |
| **📈 成长扩张期** | NanoClaw, CoPaw, ZeptoClaw, PicoClaw, NanoBot | 日均 10-50 PRs，功能丰富度提升，文档完善 |
| **🔧 质量巩固期** | IronClaw | 大规模架构重构（Reborn），PR 积压较多 |
| **⏸️ 休眠期** | LobsterAI, Moltis | 社区活跃度低，依赖维护为主 |
| **❌ 停滞期** | TinyClaw, EasyClaw | 无活动记录 |

### 6.2 成熟度评估

| 项目 | 代码质量 | 文档完善度 | 社区活跃度 | 商业准备度 |
|------|----------|------------|------------|------------|
| **OpenClaw** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Zeroclaw** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **NemoClaw** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **CoPaw** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **IronClaw** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **ZeptoClaw** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 证据 | 对开发者的建议 |
|------|------|----------------|
| **① 安全成为第一公民** | NanoBot/NemoClaw/NanoClaw 同步推进 SSRF、Token 泄露、文件系统边界防护 | 任何 Agent 项目需从设计阶段纳入安全架构 |
| **② 多 Agent 协作是下一个主战场** | OpenClaw 子代理并发、IronClaw Reborn、ZeptoClaw 中间件均指向此方向 | 关注 Agent 通信协议（ACP）和状态同步机制 |
| **③ 记忆系统差异化竞争** | CoPaw Auto-Memory、Zeroclaw 触发短语、ZeptoClaw 使用遥测 | 长期记忆的质量和召回准确性将成为核心竞争力 |
| **④ 边缘部署需求崛起** | Ze

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-04
**项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

过去24小时 NanoBot 项目保持高度活跃，共处理 **22 条 PR 更新**（其中 7 条已合并/关闭，15 条待合并）和 **6 条 Issues 更新**（4 条新开/活跃，2 条已关闭）。项目今日聚焦于**安全性增强**和**用户体验修复**，多个安全相关 PR（#3613, #3614, #3492, #3255, #3252, #3235）持续推进，CLI 交互体验问题（#3609, #3600）已修复。社区对 WhatsApp 集成和并发控制表现出较高关注度。

---

## 2. 版本发布

**无新版本发布**

过去24小时内未检测到新版本标签（Release/Tag）。项目当前处于持续迭代阶段，建议关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases) 获取版本更新通知。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（7 条）

| PR 编号 | 标题 | 状态 | 贡献者 | 关键内容 |
|---------|------|------|--------|----------|
| [#3613](https://github.com/HKUDS/nanobot/pull/3613) | fix(agent): prevent safety guard false positives and streamed message drop | CLOSED | @chengyongru | 修复安全防护误报 `/dev/*` 路径、防止流式消息丢失 |
| [#3614](https://github.com/HKUDS/nanobot/pull/3614) | fix(runner): soft workspace boundary with retry throttle | CLOSED | @Re-bin | 用软边界策略替代致命中止，重复违规增加节流延迟 |
| [#3609](https://github.com/HKUDS/nanobot/pull/3609) | fix(cli): stop provider retry messages garbling interactive output | CLOSED | @04cb | 修复 CLI 重试消息混入流式输出导致终端乱码问题 |
| [#3606](https://github.com/HKUDS/nanobot/pull/3606) | fix(cron): atomic write for jobs.json + don't silently overwrite corrupt store | CLOSED | @hussein1362 | 修复定时任务在容器重启后静默消失的严重 Bug |
| [#2727](https://github.com/HKUDS/nanobot/pull/2727) | feat(cli): add provider logout command | CLOSED | @mikaku9944 | 实现 `nanobot provider logout` 命令清除 OAuth 凭证 |
| [#3583](https://github.com/HKUDS/nanobot/pull/3583) | enhancement: Improve beta WebUI turn completion and chat isolation | CLOSED | @ramonpaolo | 改进 WebUI 流式体验和会话切换隔离 |

### 待合并的重要 PR（15 条）

| PR 编号 | 标题 | 贡献者 | 关键内容 |
|---------|------|--------|----------|
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | feat(agent): limit concurrent subagent execution | @mrbob-git | 添加 `maxConcurrentSubagents` 配置防止本地 LLM 服务器 OOM |
| [#3607](https://github.com/HKUDS/nanobot/pull/3607) | fix(bridge): support WhatsApp voice message download | @yorkhellen | 修复 WhatsApp 语音消息无法下载和理解的问题 |
| [#3612](https://github.com/HKUDS/nanobot/pull/3612) | feat(cli): add provider logout command | @chengyongru | 添加 provider logout 命令（openai-codex, github-copilot） |
| [#3492](https://github.com/HKUDS/nanobot/pull/3492) | fix(security): harden public-deploy footguns + browser-CSRF | @mohamed-elkholy95 | 加强公共部署安全配置，修复 CSRF 漏洞 |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) | feat(security): enforce history.jsonl / .dream_cursor at filesystem layer | @mohamed-elkholy95 | 文件系统层保护敏感文件，防止 bash 扩展绕过 |
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) | fix(sdk): populate RunResult.tools_used and RunResult.messages | @mohamed-elkholy95 | 修复 SDK 返回空数组问题，暴露实际工具调用和消息 |
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) | fix(security): detect non-http schemes in shell-command SSRF scan | @mohamed-elkholy95 | 检测 `file://`, `gopher://` 等非 HTTP 协议防止 SSRF |
| [#3235](https://github.com/HKUDS/nanobot/pull/3235) | fix(security): fail closed on DNS failure in validate_resolved_url | @mohamed-elkholy95 | DNS 解析失败时安全关闭而非开放 |
| [#3610](https://github.com/HKUDS/nanobot/pull/3610) | fix(mcp): shield aclose on failed connect to prevent event-loop spin | @mt-huerta | 修复 MCP 连接失败导致事件循环卡死问题 |
| [#3601](https://github.com/HKUDS/nanobot/pull/3601) | feat(cli): panel-based terminal display for agent responses | @Zeknes | 引入面板式终端显示提升 CLI 视觉体验 |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | feat(hooks): HookCenter typed-event hook system with plugin support | @aiguozhi123456 | 构建基于类型化事件的钩子系统，支持外部插件分发 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | feat: decouple heartbeat reasoning from notification | @phelps-sg | 解耦心跳推理与通知，默认静默推理 |
| [#2867](https://github.com/HKUDS/nanobot/pull/2867) | telegram group allowlist, fallback agents with context tokens | @tycoi2005 | Telegram 群组白名单和上下文令牌回退代理 |
| [#3608](https://github.com/HKUDS/nanobot/pull/3608) | Prepare Sen local setup docs | @0xdungbui | 添加 Sen Agent 本地设置文档 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#2665** - OpenAI Codex 重新认证问题（3 条评论）
- **链接**: https://github.com/HKUDS/nanobot/issues/2665
- **诉求**: 用户账户变更（团队账号到期→升级 Plus）后无法重新登录 Codex OAuth
- **分析**: 暴露了 provider 认证流程缺乏登出机制的痛点，已通过 PR #3612/#2727 修复

**#3604** - WhatsApp 语音消息不工作（1 条评论）
- **链接**: https://github.com/HKUDS/nanobot/issues/3604
- **诉求**: WhatsApp 语音消息无法下载，LLM 无法理解
- **分析**: 已有 PR #3607 修复中，社区对多渠道消息支持持续关注

### 热点 PR 分析

**安全类 PR 集中爆发**: @mohamed-elkholy95 贡献了 5 个安全相关 PR（#3492, #3255, #3254, #3252, #3235），反映出项目在公共部署场景下的安全加固成为优先事项。

**并发控制需求明确**: Issue #3611 和 PR #3615 聚焦子代理并发限制，社区反馈强烈（本地 LLM 用户受 OOM 问题困扰），预计将快速合并。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重程度 | Issue 编号 | 描述 | 状态 | Fix PR |
|----------|------------|------|------|--------|
| 🔴 高 | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | 安全防护静默中止对话，用户无错误提示 | OPEN | 无 |
| 🟡 中 | [#3604](https://github.com/HKUDS/nanobot/issues/3604) | WhatsApp 语音消息无法下载 | OPEN | [#3607](https://github.com/HKUDS/nanobot/pull/3607) |
| 🟡 中 | [#2665](https://github.com/HKUDS/nanobot/issues/2665) | OAuth 账户变更后无法重新认证 | OPEN | [#3612](https://github.com/HKUDS/nanobot/pull/3612) |

### 已修复的 Bug

| Issue 编号 | 描述 | Fix PR |
|------------|------|--------|
| [#3599](https://github.com/HKUDS/nanobot/issues/3599) | 升级后安全防护误报 "path outside working dir" | [#3613](https://github.com/HKUDS/nanobot/pull/3613) |
| [#3600](https://github.com/HKUDS/nanobot/issues/3600) | CLI 重试消息导致终端乱码 | [#3609](https://github.com/HKUDS/nanobot/pull/3609) |

### 回归/稳定性风险提示

⚠️ **#3605 需优先处理**: 安全防护触发时用户完全收不到错误反馈，在 Telegram 等渠道表现为"消息消失"，严重影响用户体验和信任度。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| 请求 | Issue/PR | 贡献者 | 预计影响 | 纳入可能性 |
|------|----------|--------|----------|------------|
| 子代理并发限制 | [#3611](https://github.com/HKUDS/nanobot/issues/3611) → [#3615](https://github.com/HKUDS/nanobot/pull/3615) | @andrew-ellis-engineering | 解决本地 LLM OOM 痛点 | ⭐⭐⭐⭐⭐ 高 |
| Provider logout 命令 | [#2665](https://github.com/HKUDS/nanobot/issues/2665) → [#3612](https://github.com/HKUDS/nanobot/pull/3612) | @liuzhangjie1713 | 完善 OAuth 生命周期管理 | ⭐⭐⭐⭐⭐ 高 |
| WhatsApp 语音支持 | [#3604](https://github.com/HKUDS/nanobot/issues/3604) → [#3607](https://github.com/HKUDS/nanobot/pull/3607) | @KennethYCK | 扩展多模态消息渠道 | ⭐⭐⭐⭐ 高 |
| 面板式终端显示 | [#3601](https://github.com/HKUDS/nanobot/pull/3601) | @Zeknes | 提升 CLI 视觉体验 | ⭐⭐⭐ 中 |
| HookCenter 插件系统 | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | @aiguozhi123456 | 开放生态，降低定制门槛 | ⭐⭐⭐⭐ 高 |

### 路线图信号

从 PR 分布来看，项目下一阶段重点可能包括：
1. **安全性全面加固** - 公共部署防护、SSRF 防护、文件系统层保护
2. **多渠道消息完善** - WhatsApp 语音、Telegram 群组支持
3. **开发者体验** - SDK 完善、Hook 插件系统、文档增强

---

## 7. 用户反馈摘要

### 真实痛点提取

**认证与账户管理**
> "I previously connected to the Codex API via OpenAI Codex (OAuth), but my previous team account has expired. Now that I have upgraded to the Plus plan, how can I log back into my now account in nanobot? I checked nanobot provider --help, but I did not see any logout command."

- **场景**: 团队账号迁移后需要重新授权
- **痛点**: 缺乏 logout 命令导致无法清除旧凭证
- **满意**: nanobot provider 命令基本可用

**安全防护体验**
> "在v0.1.5.post2 的时候并没有遇到过。让ai重试又可以实现我需要的功能。看日志操作的是工作目录内的内容，应该是被允许的。"

- **场景**: 使用 `rm /home/nanobot/.nanobot/workspace/test_print.txt 2>/dev/null` 被误拦截
- **痛点**: 安全防护规则过于严格，误报率高
- **反馈**: 已有 PR #3613 修复 `/dev/null` 误报

**CLI 交互体验**
> "在 CLI 渠道（`nanobot chat`）中，当 LLM API 请求失败触发自动重试时，重试等待的提示消息会混入正常的流式输出，导致终端出现大量 ANSI 转义码和乱码文本。"

- **场景**: SSH 远程终端环境下使用 CLI
- **痛点**: 重试消息破坏终端输出，影响可用性
- **反馈**: PR #3609 已修复，体验将改善

**本地 LLM 资源限制**
> "On local LLM servers (e.g. mlx_lm, Ollama), multiple subagents spawned simultaneously each attempt to allocate a full KV cache. On consumer hardware this causes OOM crashes."

- **场景**: 消费级硬件运行本地模型
- **痛点**: 并发子代理耗尽内存
- **需求**: 明确的并发控制机制

---

## 8. 待处理积压

### 长期未响应的 Issue（超过 30 天无更新）

| Issue 编号 | 创建日期 | 标题 | 状态 | 建议 |
|------------|----------|------|------|------|
| [#2665](https://github.com/HKUDS/nanobot/issues/2665) | 2026-03-31 | OpenAI Codex 重新认证问题 | OPEN | 已有 PR #3612 修复中 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 2026-03-02 | 解耦心跳推理与通知 | OPEN | PR 持续推进中 |

### 建议优先关注的 PR

| PR 编号 | 标题 | 关注原因 |
|---------|------|----------|
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | 限制并发子代理执行 | 解决用户 OOM 痛点，Issue #3611 明确提出 |
| [#3607](https://github.com/HKUDS/nanobot/pull/3607) | WhatsApp 语音消息下载 | Issue #3604 用户报告，影响渠道完整性 |
| [#3612](https://github.com/HKUDS/nanobot/pull/3612) | Provider logout 命令 | Issue #2665 用户迫切需求 |
| [#3605](https://github.com/HKUDS/nanobot/issues/3605) | 安全防护静默中止 | 高优先级 Bug，无 Fix PR |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去24小时 Issues 更新 | 6 条 |
| 过去24小时 PR 更新 | 22 条 |
| 新版本发布 | 0 个 |
| 活跃贡献者 | @mohamed-elkholy95, @chengyongru, @mrbob-git 等 |
| 安全类 PR 数量 | 6 个 |
| 核心功能 PR 数量 | 9 个 |
| 文档/体验 PR 数量 | 5 个 |

---

*报告生成时间: 2026-05-04 | 数据截止: 2026-05-04 23:59 UTC*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期：** 2026-05-04
**数据来源：** github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

过去 24 小时内，Zeroclaw 项目保持高度活跃，共处理 **50 条 Issues** 和 **50 条 PRs**。项目整体呈现稳健推进态势：Issues 方面新开/活跃 42 条、关闭 8 条；PRs 方面待合并 30 条、已合并/关闭 20 条。今日未发布新版本，但有多个重要功能 PR 持续推进，尤其是桌面应用（Tauri）和语音全双工通信功能进入关键开发阶段。社区围绕配置文档准确性、WhatsApp 频道稳定性以及 WebSocket 多模态支持等问题展开了深入讨论。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) | feat(skills): consolidate first-party skills into repo, default to compact mode | ✅ 已合并 | 将第一方 Skills 从独立仓库迁移至主仓库 `skills/` 目录，统一管理，简化安装流程 |
| [#6265](https://github.com/zeroclaw-labs/zeroclaw/pull/6265) | fix(ci): remove CHANGELOG-next.md cleanup step from release workflow | ✅ 已合并 | 移除发布流程中不稳定的 git push 步骤，修复 #6249 |
| [#5590](https://github.com/zeroclaw-labs/zeroclaw/pull/5590) | docs: AI-assisted alignment audit and restructure | ✅ 已关闭 | RFC #5576 第二三阶段文档对齐审计完成 |
| [#5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589) | docs: archive current documentation tree to docs/legacy/ | ✅ 已关闭 | RFC #5576 第一阶段文档归档完成 |

### 待合并的重点 PRs（建议优先关注）

| PR 编号 | 标题 | 风险等级 | 说明 |
|---------|------|----------|------|
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | fix(multimodal): normalize image markers across agent and tool history | 🔴 高 | 修复 WebSocket `/ws/chat` 无法处理 `[IMAGE:]` 多模态标记的问题，直接解决 #5453 |
| [#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299) | fix(installer): install prebuilt dashboard assets | 🟡 中 | 修复 `install.sh` 不提取 Web Dashboard 资源的问题，对应 #6096 |
| [#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317) | fix(config): preserve dotted provider map keys | 🟡 中 | 修复配置解析时点号键名被错误分割的问题 |
| [#6314](https://github.com/zeroclaw-labs/zeroclaw/pull/6314) | fix(providers/anthropic): respect base_url config | 🟡 中 | 修复 Anthropic Provider 不读取 base_url 配置的问题 |
| [#6296](https://github.com/zeroclaw-labs/zeroclaw/pull/6296) | fix(memory): treat bare wildcard recall as recent memory query | 🟡 中 | 修复 `memory_recall` 通配符查询返回空结果的问题 |

---

## 4. 社区热点

### 评论最多的 Issues

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | feat(channels): add cancellation support for ACP-protocol sessions | 4 | ACP 协议会话缺少取消机制，缺少类似 Gateway 的 `POST /api/sessions/{id}/abort` 端点 |
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | [Bug]: config.toml examples for YOLO / local testing do not match current config keys | 4 | 文档中的配置示例与实际二进制不匹配，导致本地测试配置失效（S1 级阻塞） |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | [Bug]: shell policy blocks `git -C <path>` by lowercasing args | 3 | 安全沙箱将 `-C` 参数小写化后与 `-c` 混淆，导致 `git -C` 命令被拒绝 |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | [Bug]: install.sh does not extract web dashboard from release tarball | 3 | 预编译二进制安装后未提取 Web Dashboard 资源，Gateway 无法正常启动 |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | [Bug]: zeroclaw self-test reports using 127.0.0.1 (localhost) contrary to any config | 3 | 自检工具忽略配置中的 `0.0.0.0` 绑定地址，始终报告使用 `127.0.0.1` |

### 热点 PRs

| PR 编号 | 标题 | 热度分析 |
|---------|------|----------|
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | feat(voice): speech capture buffer + STT dispatch | 语音全双工会话的核心 PR，持续推进中 |
| [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) | feat(voice): energy-based Voice Activity Detector | 实现基于 RMS 幅度的 VAD，替代原有的 NoopVad |
| [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | feat(voice): WebSocket binary audio frames with PCM16 validation | WebSocket 网关支持二进制音频帧（PCM16 LE mono 16kHz） |
| [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) | docs(i18n): sync fr/ja/es translations and add zh-CN | 新增简体中文翻译支持，多语言国际化持续完善 |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | feat(config): schema v3 migration, channel aliasing, model-provider aliasing | 大型配置系统重构，面向 v0.8.0 的大版本升级 |

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 S1 - 工作流阻塞（高优先级）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | config.toml 示例与实际配置键不匹配 | 已关闭（待验证） | 无专用 Fix PR |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | self-test 报告使用 localhost 而非配置的 0.0.0.0 | 已关闭（待验证） | 无专用 Fix PR |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | Fallback provider chain 忽略 `[providers.X]` 配置 | 进行中 | 无专用 Fix PR |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | WebSocket 网关绕过 ApprovalManager，审批提示不显示 | 待维护者审查 | 无专用 Fix PR |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | model_switch 工具切换不跨轮次持久化 | 新提交 | 无专用 Fix PR |

#### 🟠 S2 - 功能降级（中优先级）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | shell policy 将 `-C` 小写化导致 git 命令被拒 | 已关闭（待验证） | 无专用 Fix PR |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | install.sh 不提取 Web Dashboard 资源 | 已关闭 | [#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299) |
| [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) | WebSocket `/ws/chat` 不处理 `[IMAGE:]` 多模态标记 | 新提交 | [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp self-chat-mode 触发所有 fromMe 消息 | 新提交 | 无 |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp allowed-numbers 对 LID 联系人失效 | 新提交 | 无 |
| [#6348](https://github.com/zeroclaw-labs/zeroclaw/issues/6348) | Dashboard Agent 聊天将每个 tool_call 渲染为独立气泡 | 新提交 | 无 |
| [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) | Desktop 菜单栏聊天同样将 tool_call 渲染为独立气泡 | 新提交 | 无 |

#### 🟡 测试/CI 问题

| Issue 编号 | 标题 | 说明 |
|------------|------|------|
| [#6347](https://github.com/zeroclaw-labs/zeroclaw/issues/6347) | telegram tests fail under default features | `build_channel_by_id` 测试在默认 features 下失败 |

---

## 6. 功能请求与路线图信号

### 桌面应用（Tauri）相关（高优先级）

| Issue 编号 | 标题 | 优先级 | 说明 |
|------------|------|--------|------|
| [#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) | Track: v0.7.7 — Desktop app parity, menu bar, macOS accessibility | P1 | 桌面应用功能对齐 Web Dashboard，菜单栏、托盘、全局快捷键 |
| [#6341](https://github.com/zeroclaw-labs/zeroclaw/issues/6341) | Ship a signed .dmg in GitHub releases for macOS | P1 | 发布签名 + 公证的 .dmg 安装包 |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | Universal binary (arm64 + x86_64) build | P1 | 构建 lipo 合并的通用二进制 |
| [#6338](https://github.com/zeroclaw-labs/zeroclaw/issues/6338) | macOS notarization + code-signing pipeline | P1 | 添加 Developer ID 签名和公证流程 |
| [#6340](https://github.com/zeroclaw-labs/zeroclaw/issues/6340) | Crash reporting / panic capture for desktop app | P1 | 捕获 Rust panic 和 WebView 崩溃日志 |
| [#6342](https://github.com/zeroclaw-labs/zeroclaw/issues/6342) | install.sh `--desktop` flag | P1 | 仅安装菜单栏应用，跳过 systemd 服务 |

### 语音全双工会话（Feature: #5896）

| PR 编号 | 标题 | 状态 |
|---------|------|------|
| [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | WebSocket binary audio frames with PCM16 validation | 进行中 |
| [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) | Energy-based Voice Activity Detector | 进行中 |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | Speech capture buffer + STT dispatch | 进行中 |

### 安装器与配置改进

| Issue/PR 编号 | 标题 | 说明 |
|---------------|------|------|
| [#6292](https://github.com/zeroclaw-labs/zeroclaw/issues/6292) | installer.sh overhaul, feature selection, web dist handling | 全面重构安装脚本，支持功能预设和选择性安装 |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | schema v3 migration, channel aliasing, model-provider aliasing | v0.8.0 配置系统大重构 |

### 用户体验增强

| Issue 编号 | 标题 | 说明 |
|------------|------|------|
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | Clipboard paste & drag-and-drop image support in Web Chat UI | 支持粘贴和拖拽图片到 Web 聊天界面 |
| [#6344](https://github.com/zeroclaw-labs/zeroclaw/issues/6344) | Dashboard editor for workspace persona files | Dashboard 可视化编辑 SOUL/IDENTITY/USER 等文件 |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | Per-channel reply-min-interval-secs | 频道级消息发送频率限制 |
| [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) | zeroclaw node CLI + dashboard health & management | 节点健康检查和管理命令 |

---

## 7. 用户反馈摘要

### 配置与文档问题（高频痛点）

- **配置示例过时**（#6149）：用户反映按照文档配置本地测试环境时，配置键名与实际二进制不匹配，导致功能无法正常工作。这是 S1 级阻塞问题，影响新用户上手体验。
- **自检工具行为不符预期**（#6051）：用户配置的 `0.0.0.0` 绑定地址被忽略，自检工具始终报告使用 `127.0.0.1`，造成调试困惑。

### 安全沙箱限制过严

- **git -C 命令被阻止**（#5809）：安全策略将 `-C` 参数小写化后与 `-c` 混淆，导致 `git -C /path/to/repo` 等常见用法被拒绝，影响开发者工作

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-05-04
**项目**: PicoClaw (github.com/sipeed/picoclaw)
**数据周期**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 今日保持高度活跃，共产生 25 项更新（5 条 Issues + 20 条 PRs）。社区贡献者提交了 14 个待合并 PR，涵盖 Provider 增强、Agent 稳定性修复及工具链改进。已合并 6 个 PR，包括运行时事件基础设施（#2677）和 Gemini MCP schema 修复（#2681）等重要变更。整体项目健康度良好，核心功能迭代稳步推进，未发现阻断性严重问题。

---

## 2. 版本发布

**今日无新版本发布**。最新 Release 信息为空，项目可能处于功能开发周期中。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 贡献者 | 状态 | 影响 |
|---------|------|--------|------|------|
| [#2677](https://github.com/sipeed/picoclaw/pull/2677) | Feat/runtime events | @alexhoshina | CLOSED | 引入统一运行时事件基础设施，迁移 Agent 可观测性至新架构 |
| [#2682](https://github.com/sipeed/picoclaw/pull/2682) | docs: fix agents.defaults model configuration format | @dtapps | CLOSED | 修复文档中错误的模型配置格式 |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | fix(mcp): sanitize MCP tool schemas for Gemini | @afjcjsbx | CLOSED | 修复 Gemini 函数调用时 MCP 工具复杂 JSON Schema 导致的 HTTP 400 错误 |
| [#2717](https://github.com/sipeed/picoclaw/pull/2717) | feat: add DeepSeek vision unsupported error detection | @LiusCraft | CLOSED | 为 DeepSeek 等严格 Provider 添加 `image_url` 字段拒绝检测 |
| [#2669](https://github.com/sipeed/picoclaw/pull/2669) | feat(agent): add network error retry | @david1gp | CLOSED | 为 LLM 调用管道添加可配置重试次数和退避的网络错误处理 |
| [#2735](https://github.com/sipeed/picoclaw/pull/2735) | build(deps): bump aws-sdk-go-v2/config | @dependabot[bot] | CLOSED | 依赖升级至 v1.32.17 |

### 待合并的高优先级 PR

| PR 编号 | 标题 | 贡献者 | 状态 | 预计影响 |
|---------|------|--------|------|----------|
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | fix: support OpenAI OAuth for Codex and transcription | @bogdanovich | OPEN | 统一 OpenAI OAuth 令牌管理，支持转录端点 OAuth 认证 |
| [#2756](https://github.com/sipeed/picoclaw/pull/2756) | fix: preserve Telegram topic context for final responses | @bogdanovich | OPEN | 修复 Telegram 论坛主题回复丢失 `TopicID` 问题 |
| [#2725](https://github.com/sipeed/picoclaw/pull/2725) | fix(agent): make MCP initialization failure non-fatal | @dtapps | OPEN | 防止 MCP 服务器全部连接失败时 Agent 循环退出导致僵尸状态 |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | feat(providers): add streaming reasoning_content and video support | @BeaconCat | OPEN | 为 OpenAI 兼容 Provider 层添加推理内容和视频媒体支持 |
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | fix(deepseek): capture reasoning_content from streaming | @cjkihl | OPEN | 修复 DeepSeek thinking-mode 流式响应中 `reasoning_content` 被丢弃的问题 |
| [#2754](https://github.com/sipeed/picoclaw/pull/2754) | Feature/multi subagent parallel calls | @tbeaudouin05 | OPEN | 新增多子代理并行调用工具，支持同轮次并行委托 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#2225** - Ollama Cloud Credentials 功能请求
- **作者**: @Suisei110 | **评论**: 10 | **👍**: 0
- **链接**: https://github.com/sipeed/picoclaw/issues/2225
- **摘要**: 用户请求为 Ollama Cloud 添加凭证支持功能，当前 PicoClaw 不支持 Ollama Cloud 的认证配置。
- **分析**: 社区对多 Provider 支持有明确需求，Ollama 作为本地部署的热门选择，官方云端支持呼声较高。

**#2668** - Gemini API MCP tools JSON Schema Bug
- **作者**: @YoranBrault | **评论**: 1 | **👍**: 1 | **状态**: CLOSED
- **链接**: https://github.com/sipeed/picoclaw/issues/2668
- **摘要**: 使用 Gemini 模型时，包含 `$ref`、`$defs`、`anyOf` 等复杂 JSON Schema 的 MCP 工具导致 HTTP 400 错误。
- **分析**: 已通过 PR #2681 修复，该问题反映了多 Provider 兼容性的持续挑战。

### 热门 PR

**#2754** - 多子代理并行调用
- **作者**: @tbeaudouin05 | **状态**: OPEN
- **链接**: https://github.com/sipeed/picoclaw/pull/2754
- **摘要**: 新增多子代理并行调用工具，支持在单次工具调用中并行调度多个子代理。
- **热度**: 作为功能增强类 PR，体现了用户对复杂 Agent 编排能力的需求。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重程度 | Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🔴 高 | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Build from source → launcher does not exist | OPEN | 无 |
| 🟡 中 | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8, cannot access any data from tabs | OPEN | 无 |
| 🟢 低 | [#2718](https://github.com/sipeed/picoclaw/issues/2718) | DeepSeek image_url 400 error | CLOSED | ✅ PR #2717 |

### 关键 Bug 详情

**#2753** - 源码构建后 launcher 不存在
- **环境**: Ubuntu 24.04, Go 1.26, main 分支
- **复现步骤**: 按 README 执行源码安装后，运行 `picoclaw-launcher` 提示文件不存在
- **影响**: 开发者体验受损，源码构建流程断裂
- **建议**: 维护者需检查构建脚本和 Makefile

**#2744** - Android 版本数据访问问题
- **环境**: Android v0.2.8, Termux
- **现象**: 无法从 tabs 访问任何数据
- **影响**: 移动端用户体验问题
- **建议**: 需进一步诊断是否为 UI 问题或后端 API 问题

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue/PR | 请求内容 | 贡献者 | 评估 |
|----------|----------|--------|------|
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama Cloud 凭证支持 | @Suisei110 | 需求明确，已有讨论，可能纳入 Provider 增强路线 |
| [#2754](https://github.com/sipeed/picoclaw/pull/2754) | 多子代理并行调用 | @tbeaudouin05 | 功能完整度较高，PR 已提交 |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | streaming reasoning_content 和视频支持 | @BeaconCat | 扩展多模态能力，与 Xiaomi Mimo 集成相关 |
| [#2752](https://github://github.com/sipeed/picoclaw/pull/2752) | 改进模型配置工作流 | @SiYue-ZO | UI/UX 改进，提升用户体验 |

### 路线图信号分析

1. **多模态能力增强**: reasoning_content 流式解析、视频/音频理解支持成为近期重点方向
2. **Provider 生态扩展**: Ollama Cloud 支持请求反映用户对更多 Provider 的需求
3. **Agent 编排能力**: 多子代理并行调用功能表明复杂 Agent 工作流是发展方向
4. **稳定性优先**: MCP 初始化容错、网络重试机制等修复体现对生产稳定性的重视

---

## 7. 用户反馈摘要

### 真实用户痛点

**构建体验问题**
用户 @guettli 反馈源码构建后无法找到 launcher，提示"No such file"。这反映了文档与实际构建流程存在脱节，建议维护者更新构建文档或修复构建脚本。

**移动端兼容性问题**
用户 @stl3 在 Android Termux 环境下遇到 tabs 数据访问问题，可能影响移动端用户的核心使用场景。

**多 Provider 兼容挑战**
用户反馈显示，不同 Provider（如 DeepSeek、Gemini）对消息格式的要求差异较大，需要 PicoClaw 在 Provider 抽象层做更多兼容性处理。

### 用户满意点

- 社区响应积极：#2668 和 #2718 两个 Bug 均在数天内得到修复
- 功能迭代活跃：运行时事件基础设施（#2677）等基础设施改进获得合并
- 文档改进：配置格式文档修复（#2682）提升了用户配置准确性

---

## 8. 待处理积压

### 长期未响应的 Issues

| Issue 编号 | 标题 | 创建时间 | 状态 | 积压时长 |
|------------|------|----------|------|----------|
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama Cloud credentials | 2026-03-31 | OPEN | ~34 天 |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | modify docker compose with privileged | 2026-04-01 | OPEN | ~33 天 |

### 建议关注

1. **#2225** - Ollama Cloud 功能请求已有 10 条评论，社区关注度高，建议维护者评估优先级并给出回应
2. **#2239** - Docker Compose 特权模式修改 PR 长期 OPEN，需确认是否需要或应关闭
3. **#2753** - 今日新报告的构建问题需尽快响应，避免影响更多开发者

---

## 总结

**2026-05-04 PicoClaw 项目健康度评分: 8/10**

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 25 项更新，14 个待合并 PR |
| Bug 修复 | ⭐⭐⭐⭐ | 2 个 Bug 已关闭，2 个新 Bug 待处理 |
| 功能推进 | ⭐⭐⭐⭐⭐ | 多模态、Agent 编排、Provider 扩展全面开花 |
| 社区响应 | ⭐⭐⭐⭐ | 核心问题响应及时，部分积压需关注 |
| 文档质量 | ⭐⭐⭐ | 构建文档需与代码同步更新 |

**明日建议**:
1. 优先处理 #2753 构建问题和 #2744 Android 问题
2. 评估 #2225 Ollama Cloud 功能请求的优先级
3. 清理长期 OPEN 的 PR (#2239)

---

*报告生成时间: 2026-05-04 | 数据来源: GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

2026-05-04 是 NanoClaw 高度活跃的一天。项目在过去 24 小时内处理了 **10 条 Issues**（其中 8 条已关闭，仅 2 条保持开放）和 **50 条 PRs**（19 条待合并，31 条已合并/关闭），整体呈现"高产出、高消化"的健康状态。值得注意的是，今日社区贡献集中在**安全性修复**（3 个 security PRs）、**用户体验优化**（setup 改进、migration 脚本）和**功能增强**（调度器、容器配置）三大方向。维护者响应迅速，所有报告的 Bug 均已关联修复 PR 或已有明确处理方案。项目当前无新版本发布，但多个 track issues 标记完成，表明核心架构优化持续推进中。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR 编号 | 类型 | 标题 | 贡献者 | 状态 |
|---------|------|------|--------|------|
| [#2206](https://github.com/qwibitai/nanoclaw/pull/2206) | Feature | feat(setup): add "Other…" option to channel picker | @javexed | CLOSED |
| [#2229](https://github.com/qwibitai/nanoclaw/pull/2229) | Fix | Recognize ANTHROPIC_AUTH_TOKEN in setup verification | @SebTardif | CLOSED |
| [#2216](https://github.com/qwibitai/nanoclaw/pull/2216) | Fix | migration script UX improvements | @Koshkoshinsk | CLOSED |
| [#2097](https://github.com/qwibitai/nanoclaw/pull/2097) | Feature | feat(skill): add Lore Context semantic memory skill | @zhushuanbao-dot | CLOSED |
| [#2228](https://github.com/qwibitai/nanoclaw/pull/2228) | Feature | feat(baget): partial team support — CoS-required, specialists optional | @SamBagetAI | CLOSED |

**关键进展说明：**

1. **#2206 - Setup 通道选择器增强**：新增 "Other…" 选项，解决了用户安装非标准通道（matrix、github、linear、webex 等）时无入口的问题，降低了新用户上手门槛。

2. **#2229 - ANTHROPIC_AUTH_TOKEN 支持**：修复了 setup 验证步骤无法识别 Claude Code 官方 CLI 使用的 `ANTHROPIC_AUTH_TOKEN` 环境变量的问题，与 Issue #853 对应。

3. **#2097 - Lore Context 语义记忆技能**：为 NanoClaw agents 引入了跨会话语义记忆能力，从纯文件记忆升级为结构化语义检索，提升了 agent 的上下文理解深度。

4. **#2228 - Baget 团队支持**：实现了 CoS（Circle of Service）必需、专业人员可选的部分团队支持模式，优化了多角色场景下的 agent 行为。

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs

| 编号 | 类型 | 标题 | 评论数 | 热度分析 |
|------|------|------|--------|----------|
| [#853](https://github.com/qwibitai/nanoclaw/issues/853) | Issue | Support ANTHROPIC_AUTH_TOKEN in setup verification | 3 | 涉及认证流程兼容性，已通过 PR #2229 修复 |
| [#2223](https://github.com/qwibitai/nanoclaw/issues/2223) | Issue | Agent conflates Telegram handle with identity | 1 | 身份混淆问题，需关注 |
| [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) | Issue | gh CLI missing from agent container PATH | 1 | 回归问题，已关闭 |
| [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) | Issue | Agent posts in deregistered chat | 1 | 状态同步问题，已关闭 |
| [#2219](https://github.com/qwibitai/nanoclaw/issues/2219) | Issue | Track: RULES.md diet (12K removal) | 1 | 文档精简 track，已完成 |

**热点分析：**

- **#853** 是今日评论最多的 Issue，反映了用户对 Claude Code 兼容性的强烈需求。社区多位用户（@scguoi 等）参与讨论，最终通过 PR #2229 解决。
- **#2223** 揭示了容器环境下 agent 身份识别的边界问题——Telegram bot handle 不应与 agent 自身 identity 混淆，这是多 agent 架构下的典型问题。
- 多个 track issues（#2219、#2218、#2217）标记完成，表明项目在文档治理、预发布验证、工具过滤等基础设施层面持续优化。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue 编号 | 标题 | 状态 | Fix PR |
|----------|------------|------|------|--------|
| **High** | [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) | gh CLI missing from agent container PATH (regression) | CLOSED | 需跟进 |
| **High** | [#2214](https://github.com/qwibitai/nanoclaw/issues/2214) | iMessage local-mode adapter never delivers inbound messages | CLOSED | 需跟进 |
| **Medium** | [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) | Bug: engage_mode='always' not handled in evaluateEngage() | OPEN | 无 |
| **Medium** | [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) | Agent posts in deregistered 'Old.wtf' chat | CLOSED | 需跟进 |
| **Low** | [#2223](https://github.com/qwibitai/nanoclaw/issues/2223) | Agent conflates Telegram handle with identity | CLOSED | 需跟进 |

**Bug 详情：**

1. **#2221 - gh CLI 路径回归**：agent 容器内无法找到 `gh` 命令，影响 GitHub issues/PR 数据获取能力。这是回归问题，需确认是容器构建变更还是环境变量问题。

2. **#2214 - iMessage 适配器消息丢失**：macOS 本地模式下，`imessage` 通道的 Photon SDK watcher 初始化正常，但入站消息从未触发 `onInbound` handler，且无错误日志。这是一个静默失败问题，可能需要增加调试日志。

3. **#2227 - engage_mode='always' 未处理**：这是当前唯一保持开放的中等优先级 Bug。`evaluateEngage()` 函数缺少 `'always'` 分支，导致所有群组消息被静默丢弃。**建议维护者优先处理**。

4. **#2220 - 向已注销聊天发送消息**：agent 仍向已注销的 "Old.wtf" Telegram 聊天发送消息，表明状态同步存在缺陷。

---

## 6. 功能请求与路线图信号

### 新功能需求

| PR/Issue 编号 | 标题 | 类型 | 贡献者 | 纳入可能性 |
|---------------|------|------|--------|------------|
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | Can this work with llama.cpp? | Question | @Kwisss | 待评估 |
| [#2238](https://github.com/qwibitai/nanoclaw/pull/2238) | feat(setup): support MacPorts as macOS package manager | Feature | @felipek | 高 |
| [#2237](https://github.com/qwibitai/nanoclaw/pull/2237) | feat(scheduling): add interval-based recurrence (@every:<ms>) | Feature | @NeuerUser | 高 |
| [#2233](https://github.com/qwibitai/nanoclaw/pull/2233) | feat(container-config): add per-group model + effort overrides | Feature | @tamasPetki | 中 |
| [#2231](https://github.com/qwibitai/nanoclaw/pull/2231) | feat(chat-sdk-bridge): add sendAsRaw flag | Feature | @tamasPetki | 高 |

**路线图信号分析：**

1. **#2234 - llama.cpp 兼容性**：用户反馈 NanoClaw 无法连接 llama-server，而 Claude Code 原生支持。这是重要的生态兼容性问题，可能影响开源社区采用率。

2. **#2238 - MacPorts 支持**：扩展 macOS 包管理器支持，降低 Homebrew 单一依赖风险，符合多平台战略。

3. **#2237 - 间隔调度**：为现有 cron 调度系统补充 `@every:<ms>` 格式，增强灵活性，对定时任务场景有实际价值。

4. **#2231 - sendAsRaw 标志**：允许绕过适配器的 Markdown 往返转换，解决特定消息格式兼容性问题。

---

## 7. 用户反馈摘要

### 从 Issues 评论中提炼的用户痛点

| 痛点类别 | 相关 Issue | 用户声音 |
|----------|------------|----------|
| **认证兼容性** | #853 | Claude Code 使用 `ANTHROPIC_AUTH_TOKEN`，但 NanoClaw 只认 `ANTHROPIC_API_KEY`，导致设置验证失败 |
| **多平台支持** | #2234 | "Claude code works seamlessly with llama.cpp, but Nano-claw seems to have trouble to connect" |
| **用户体验** | #2216 | migration 脚本在 Claude Code Bash 工具中运行时输出被折叠，用户无法看到指导信息 |
| **身份识别** | #2223 | Telegram bot handle (@MythicalClawBot) 被 agent 误认为自身身份，导致对话混乱 |
| **工具可用性** | #2221 | "gh CLI is not available in this environment"，影响 GitHub 集成功能 |

**用户满意度观察：**
- 用户对 **Lore Context 语义记忆技能**（#2097）表现出积极兴趣，这是对现有文件记忆能力的显著增强。
- **Setup 改进**（#2206 "Other…" 选项）解决了新用户安装非主流通道的实际痛点。
- **Baget 团队支持**（#2228）响应了多角色 agent 协作场景需求。

---

## 8. 待处理积压

### 长期未响应或重要的 Issue/PR

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 建议 |
|------|------|------|----------|------|------|
| [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) | PR | fix(setup): trust only canonical channels remote | 2026-04-25 | OPEN | 安全修复，建议优先审查 |
| [#2000](https://github.com/qwibitai/nanoclaw/pull/2000) | PR | fix(webhook): cap request bodies before adapter dispatch | 2026-04-25 | OPEN | 安全修复，建议优先审查 |
| [#1999](https://github.com/qwibitai/nanoclaw/pull/1999) | PR | fix(container): reject symlinked host-managed directories | 2026-04-25 | OPEN | 安全修复，建议优先审查 |
| [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) | Issue | Bug: engage_mode='always' not handled | 2026-05-03 | OPEN | 需分配开发者处理 |
| [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | Issue | Can this work with llama.cpp? | 2026-05-03 | OPEN | 需官方回应生态兼容性 |

**积压分析：**

1. **安全 PRs 积压**：#2004、#2000、#1999 三个安全修复 PR 自 4 月 25 日提交至今已 9 天未合并，建议维护者尽快审查发布。这些修复涉及 channel installer 信任边界、webhook 请求体限制、容器文件系统边界等关键安全领域。

2. **Bug #2227**：已开放 1 天，`engage_mode='always'` 场景会导致消息静默丢失，影响用户体验，建议尽快分配处理。

3. **生态兼容性 #2234**：用户询问 llama.cpp 集成问题，这是 NanoClaw 与更广泛开源生态对接的重要信号，建议官方明确立场（支持/不支持/路线图）。

---

## 总结

**项目健康度评分：🟢 良好**

| 指标 | 数值 | 评价 |
|------|------|------|
| Issues 关闭率 | 80% (8/10) | 高效 |
| PRs 合并率 | 62% (31/50) | 高产出 |
| 安全修复积压 | 3 个 | 需关注 |
| 开放 Bug | 1 个 | 需处理 |
| 社区活跃度 | 高 | 多贡献者参与 |

**建议行动项：**
1. 优先审查并合并 3 个安全 PRs（#2004、#2000、#1999）
2. 分配开发者处理 #2227 engage_mode bug
3. 评估 #2234 llama.cpp 兼容性需求
4. 为 #2214 iMessage 静默失败问题增加调试日志

---

*报告生成时间：2026-05-04 | 数据来源：GitHub NanoClaw Repository*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)
**数据区间：** 过去 24 小时

---

## 1. 今日速览

IronClaw 今日保持高度活跃，共产生 19 条 Issue 更新和 24 条 PR 更新。最重大的进展是 **Reborn 架构 substrate 正式合入 main 分支**（PR #3230），这是一个 XL 级别的里程碑式变更，将 Reborn 置于默认关闭状态，为后续用户可见的切换奠定基础。同时维护团队处理了多个 Critical 级别的 Bug，包括 Gemini API 工具调用失败和 LLM Provider 配置回滚问题。社区贡献方面，Slack Socket Mode 连接方案和 NEAR Intents 试验模式正在推进中。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

### 3.1 已合并/关闭的 PR（3 条）

| PR | 标题 | 贡献者 | 说明 |
|---|---|---|---|
| [#3226](https://github.com/nearai/ironclaw/pull/3226) | fix(llm): preserve Gemini thought_signature in OpenAI-compatible tool loops | @thomasmaerz | 修复 Gemini API Key 认证模式下工具调用失败问题，在第二轮 LLM 调用时丢失 `thought_signature` 导致 HTTP 400 错误 |
| [#3234](https://github.com/nearai/ironclaw/pull/3234) | ci(e2e): replace deleted preflight test with tool_activate surface | @ilblackdragon | 清理已删除测试文件的 CI 引用，避免 E2E 工作流失败 |
| [#3170](https://github.com/nearai/ironclaw/pull/3170) | test(reborn): add host runtime vertical gates | @serrrfirat | 为 Reborn HostRuntime 增加垂直门控测试覆盖，重基线到最新 `reborn-integration` |

### 3.2 重大待合并 PR

| PR | 标题 | 贡献者 | 规模 | 说明 |
|---|---|---|---|---|
| [#3230](https://github.com/nearai/ironclaw/pull/3230) | feat:(reborn) land Reborn substrate into main behind default-off gates | @serrrfirat | **XL** | 🔴 **核心里程碑**：将 Reborn substrate 从 `reborn-integration` 分支合入 `main`，消除长分支漂移，允许 CI 验证合并树。Reborn 仍默认关闭，非用户可见切换 |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | Add Reborn transport adapter contract | @zmanian | XL | 新增 `ironclaw_transport` 合约 crate，定义类型化路由、入口/出口、注册生命周期等 |
| [#3171](https://github.com/nearai/ironclaw/pull/3171) | Add Reborn event store backends | @zmanian | XL | 新增 Reborn 自有的持久化事件/审计存储 crate，支持 JSONL、PostgreSQL、libSQL 后端及迁移 |
| [#3212](https://github.com/nearai/ironclaw/pull/3212) | Add Reborn event projection service | @zmanian | XL | 新增 `ironclaw_event_projections`，包含 `EventProjectionService`、`ThreadTimeline`、`RunStatusProjection` 等 DTO |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | feat: Slack Socket Mode for NAT-friendly connectivity | @KonstantinMirin | XL | WebSocket-based Socket Mode 网桥，无需公网 URL/隧道即可接收 Slack 事件 |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | [reborn] Reborn cutover blocker: add reference AgentLoopHost facade | 3 | 定义 AgentLoopHost 外观接口，是 Reborn 架构的关键依赖项 |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | [reborn] Reborn cutover blocker: add kernel TurnCoordinator | 1 | 定义主机层 TurnCoordinator，负责线程/轮次准入和单活跃运行强制 |
| [#3225](https://github.com/nearai/ironclaw/issues/3225) | bug: gemini API-key backend fails tool-calling | 1 | Gemini API Key 认证模式下工具调用失败，已通过 PR #3226 修复 |

### 4.2 热点分析

**Reborn 架构推进是绝对焦点。** 今日有 14 个以 `[reborn]` 标记的 Issue 处于活跃状态，涵盖 TurnCoordinator、TurnRunner、循环支持服务、工具表面服务、取消语义、HTTP 系统调用合约等核心组件的定义。这些 Issue 大多相互依赖，形成完整的架构设计追踪网络，表明团队正在系统性地完成 Reborn 的架构文档化工作。

---

## 5. Bug 与稳定性

### 5.1 Critical 级别

| Issue | 标题 | 环境 | 状态 | Fix PR |
|---|---|---|---|---|
| [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM provider fallback persists to DB on startup, permanently destroying user's model/provider config | v0.27.0, libSQL | **OPEN** | 无 |

**摘要：** LLM Provider 回退逻辑会将配置永久写入数据库，导致重启后用户配置的模型/Provider 被不可逆覆盖。

### 5.2 High 级别

| Issue | 标题 | 环境 | 状态 | Fix PR |
|---|---|---|---|---|
| [#3228](https://github.com/nearai/ironclaw/issues/3228) | Terminal corruption after /quit in SSH/noVNC/screen/tmux — mouse tracking only partially disabled | v0.27.0, LXC, Debian trixie | **OPEN** | 无 |
| [#3225](https://github.com/nearai/ironclaw/issues/3225) | gemini API-key backend fails tool-calling with missing thought_signature | gemini-3.1-flash-lite-preview | **CLOSED** | [#3226](https://github.com/nearai/ironclaw/pull/3226) ✅ |

### 5.3 Medium 级别

| Issue | 标题 | 环境 | 状态 | Fix PR |
|---|---|---|---|---|
| [#3227](https://github.com/nearai/ironclaw/issues/3227) | TUI text copy fails silently in headless/X11-less environments | v0.27.0, LXC headless | **OPEN** | 无 |
| [#3201](https://github.com/nearai/ironclaw/issues/3201) | [QA] Tool use for Deepseek is not working | local, deepseek-v4-flash | **OPEN** | 无 |

### 5.4 Bug 趋势分析

**稳定性风险提示：**
- **Critical Bug #3229** 涉及配置持久化机制缺陷，可能导致用户配置丢失，需优先处理
- **终端相关问题集中爆发**（#3228、#3227），在无头/远程环境中暴露了 TUI 和剪贴板功能的兼容性问题
- **多 Provider 工具调用异常**（Gemini #3225、Deepseek #3201），建议建立跨 Provider 的工具调用回归测试套件

---

## 6. 功能请求与路线图信号

### 6.1 高价值功能请求

| Issue/PR | 标题 | 贡献者 | 潜在纳入版本 | 说明 |
|---|---|---|---|---|
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | feat: Slack Socket Mode for NAT-friendly connectivity | @KonstantinMirin | 待定 | WebSocket 模式绕过 NAT/防火墙限制，显著降低部署门槛 |
| [#3218](https://github.com/nearai/ironclaw/pull/3218) | [codex] Add nominal NEAR intents trial mode | @abbyshekit | 待定 | NEAR Intents 试验模式，支持小额 NEAR 纸面/报价演练 |
| [#3224](https://github.com/nearai/ironclaw/pull/3224) | feat(portfolio): basket DCA + multi-asset NL prompts | @abbyshekit | 待定 | 多资产 DCA 策略，固定比例跨多 NEAR-Intents 目标累积 |
| [#3223](https://github.com/nearai/ironclaw/pull/3223) | feat(portfolio): IronClaw mission scaffold for DCA schedules | @abbyshekit | 待定 | DCA 调度任务脚手架，自动生成 cron 表达式和桥接调用列表 |

### 6.2 路线图信号

**Reborn 架构是当前核心路线图。** 从 Issue 追踪网络可见，团队正在完成以下架构组件的定义：
- TurnCoordinator 和 TurnRunner 执行模型
- 循环支持服务层（PromptContextService、MemoryPromptContextService 等）
- 工具表面服务和 CapabilityCatalog
- 事件存储和投影服务
- 取消语义和运行时 HTTP 系统调用合约

**预计下一阶段：** Reborn substrate 合入 main 后，将推进 `ironclaw_turns` crate 边界定义和公开 API 形状确定。

---

## 7. 用户反馈摘要

### 7.1 痛点提炼

| 来源 | 痛点描述 | 相关 Issue |
|---|---|---|
| @thomasmaerz | Gemini API Key 认证模式下工具调用在第二轮必定失败，影响生产部署 | [#3225](https://github.com/nearai/ironclaw/issues/3225) |
| @thomasmaerz | LLM Provider 配置在启动时被回滚到默认值，用户配置丢失且无法恢复 | [#3229](https://github.com/nearai/ironclaw/issues/3229) |
| @thomasmaerz | 在 SSH/noVNC/screen/tmux 环境中执行 `/quit` 后终端状态损坏 | [#3228](https://github.com/nearai/ironclaw/issues/3228) |
| @CaveNightingale | Deepseek Provider 的工具调用功能完全不工作 | [#3201](https://github.com/nearai/ironclaw/issues/3201) |

### 7.2 使用场景

- **远程/无头环境部署**：用户反馈集中在 LXC 容器、无 X11/Wayland 环境下的稳定性问题
- **多 Provider 集成**：Gemini、Deepseek 等非 OpenAI 兼容 Provider 的工具调用支持
- **金融操作自动化**：DCA 调度、NEAR Intents 等投资相关功能需求明确

---

## 8. 待处理积压

### 8.1 长期未响应的 Issue

| Issue | 标题 | 创建时间 | 最后更新 | 状态 | 建议 |
|---|---|---|---|---|---|
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | feat: Slack Socket Mode for NAT-friendly connectivity | 2026-03-21 | 2026-05-03 | OPEN（XL） | 核心功能请求，43 天未合并，建议评估优先级 |
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | [reborn] Reborn cutover blocker: add kernel TurnCoordinator | 2026-04-28 | 2026-05-03 | OPEN | Reborn 关键路径阻塞项，需尽快推进 |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | [reborn] Reborn cutover blocker: add reference AgentLoopHost facade | 2026-04-28 | 2026-05-03 | OPEN | Reborn 关键路径阻塞项，需尽快推进 |

### 8.2 积压 PR 统计

| 状态 | 数量 | 规模分布 |
|---|---|---|
| 待合并 | 21 | 含 7 个 XL、2 个 L、5 个 M、4 个 S/XS |
| 已合并/关闭 | 3 | 1 个 L、2 个 XS/S |

**积压风险：** 21 个待合并 PR 中包含多个 XL 级别的核心功能（#3230、#3099、#3171、#3212），建议维护团队评估审查资源，避免阻塞社区贡献。

---

## 附录：关键链接

- **项目主页：** https://github.com/nearai/ironclaw
- **Reborn 架构追踪：** #2987
- **今日核心里程碑 PR：** [#3230](https://github.com/nearai/ironclaw/pull/3230)
- **Critical Bug：** [#3229](https://github.com/nearai/ironclaw/issues/3229)

---

*本报告由自动化数据提取生成，如有疑问请联系项目维护团队。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报

**报告日期**: 2026-05-04
**项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
**数据来源**: GitHub Activity (过去24小时)

---

## 1. 今日速览

过去24小时内，LobsterAI 项目保持低活跃状态，共产生 **1 条新 Issue** 和 **2 条待合并 PR**，无版本发布。社区主要聚焦于功能增强讨论，Issue #1880 提出 Hermes Agent 集成需求，PR #812 和 #871 分别针对 SQLite 性能优化和 Skill 统计功能进行推进。值得注意的是，两个待合并 PR 均被标记为 `[stale]`（陈旧），表明可能存在维护者响应延迟的情况。整体项目健康度评估为 **中等**，建议关注积压 PR 的处理进度。

---

## 2. 版本发布

**无新版本发布**

过去24小时内项目未发布任何新版本。如需了解历史版本信息，请参阅 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)。

---

## 3. 项目进展

以下 PR 正在等待合并，代表项目当前的主要推进方向：

### PR #812 | perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞
- **作者**: [@noransu](https://github.com/noransu)
- **状态**: `[OPEN]` `[stale]`
- **链接**: https://github.com/netease-youdao/LobsterAI/pull/812
- **摘要**: 针对 Issue #562 提出的 SQLite 同步写入阻塞主进程问题，本 PR 做了两项互补优化：
  - **save() 防抖 + 异步写入**：将 `save()` 改为 500ms 防抖，多次调用合并为一次写入，实际写盘改用 `fs.promises.writeFile` 异步操作
  - **预期效果**：显著减少 Electron 主线程阻塞，提升 UI 响应性
- **评估**: 🔧 **性能优化** — 解决核心体验问题，建议优先合并

### PR #871 | feat(skills): 新增skill执行统计展示
- **作者**: [@tiamy](https://github.com/tiamy)
- **状态**: `[OPEN]` `[stale]`
- **链接**: https://github.com/netease-youdao/LobsterAI/pull/871
- **摘要**: 新增 Skill 执行统计分析功能，通过解析 OpenClaw 会话 JSONL 数据，计算每个 Skill 的调用统计，并在 SkillsManager UI 中以弹窗形式展示统计信息。
- **评估**: ✨ **功能增强** — 提升用户对 Skill 使用情况的可见性

---

## 4. 社区热点

### Issue #1880 | 希望增加Hermes Agent功能
- **作者**: [@ecolife007](https://github.com/ecolife007)
- **状态**: `[OPEN]`
- **创建时间**: 2026-05-03
- **链接**: https://github.com/netease-youdao/LobsterAI/issues/1880
- **摘要**: 参照 Open WebUI 的功能设计，请求将 Hermes Agent 和 OpenClaw 作为 Agent 接入 LobsterAI，并参考 [Open WebUI 文档](https://docs.openwebui.com/getting-started/quick-start/connect-an-agent/) 实现简单易用的集成方案。
- **热度**: 👍 0 | 💬 0
- **分析**: 📌 **功能扩展请求** — 用户希望扩展 Agent 生态，与 Open WebUI 生态对齐。考虑到 PR #871 也涉及 OpenClaw 相关功能（Skill 统计），OpenClaw 集成可能是项目路线图中的潜在方向。建议维护者评估此需求的优先级。

---

## 5. Bug 与稳定性

**过去24小时内无 Bug 报告**

未检测到新报告的崩溃、回归或稳定性问题。如需查看历史 Bug 列表，请访问 [Issues 页面](https://github.com/netease-youdao/LobsterAI/issues?q=is%3Aissue+label%3Abug)。

---

## 6. 功能请求与路线图信号

基于今日数据，以下功能请求值得关注：

| 优先级 | 类型 | 描述 | 来源 |
|--------|------|------|------|
| ⭐⭐⭐ | 功能请求 | Hermes Agent / OpenClaw Agent 集成 | [Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880) |
| ⭐⭐ | 功能增强 | Skill 执行统计展示 | [PR #871](https://github.com/netease-youdao/LobsterAI/pull/871) |
| ⭐⭐ | 性能优化 | SQLite 防抖写入，减少主线程阻塞 | [PR #812](https://github.com/netease-youdao/LobsterAI/pull/812) |

**路线图信号分析**：
- OpenClaw 生态整合是近期社区关注的焦点（PR #871 + Issue #1880）
- 性能优化（PR #812）针对的是 Issue #562 的长期问题，表明项目正在逐步解决技术债务

---

## 7. 用户反馈摘要

从今日 Issue 讨论中提炼的用户诉求：

**功能扩展诉求**：
- 用户（[@ecolife007](https://github.com/ecolife007)）明确表达了希望 LobsterAI 支持更多 Agent 类型的意愿
- 参考竞品 Open WebUI 的功能设计，表明用户对标行业最佳实践的需求
- 期望通过标准化集成方式（如 Open WebUI 文档中的连接指南）降低使用门槛

**潜在痛点**：
- 当前 LobsterAI 的 Agent 生态可能不够丰富
- 用户需要手动配置或缺乏开箱即用的 Agent 支持

---

## 8. 待处理积压

以下项目需要维护者关注：

### 🔴 高优先级 — 长期未响应的 PR

| PR | 标题 | 作者 | 创建时间 | 状态 | 关注原因 |
|----|------|------|----------|------|----------|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | perf(sqlite): debounce save() | [@noransu](https://github.com/noransu) | 2026-03-25 | `[stale]` | 解决核心性能问题，用户等待超 40 天 |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | feat(skills): 新增skill执行统计 | [@tiamy](https://github.com/tiamy) | 2026-03-25 | `[stale]` | 功能完整度较高，等待超 40 天 |

**建议**：
1. 维护者应对这两个 `[stale]` PR 进行状态确认（是否继续推进或已放弃）
2. PR #812 涉及性能修复，建议评估后尽快合并或给出反馈
3. 如 PR 无法在短期内合并，考虑标记为 `wontfix` 或引导贡献者重新提交

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新 Issue | 1 | ➡️ 持平 |
| 新 PR | 2 | ➡️ 持平 |
| 待合并 PR | 2 | ⚠️ 积压 |
| 新版本 | 0 | ➡️ 无变化 |
| Stale PR | 2 | ⚠️ 需关注 |

---

**报告生成时间**: 2026-05-04
**分析师**: AI Assistant (MiniMax-M2.7)
**免责声明**: 本报告基于 GitHub 公开数据自动生成，仅供参考。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** github.com/moltis-org/moltis

---

## 1. 今日速览

过去 24 小时内，Moltis 项目保持平稳活跃状态，共产生 3 项更新：1 个新 Issue 报告了工具调用参数验证的关键 Bug，2 个 PR 处于待合并状态，分别涉及本地 TTS 提供商文档更新和 DeepSeek 推理内容回放修复。项目整体处于功能迭代阶段，无新版本发布，维护者响应及时。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 待合并 PR

| PR # | 标题 | 作者 | 状态 | 关联 Issue |
|------|------|------|------|------------|
| #962 | Update local TTS provider docs | @penso | OPEN | Fixes #958 |
| #961 | fix(providers): replay DeepSeek reasoning content | @penso | OPEN | Fixes #959 |

#### PR #962 - 更新本地 TTS 提供商文档
**链接：** https://github.com/moltis-org/moltis/pull/962

**主要变更：**
- 修复 Issue #958
- 更新 Piper 文档，链接至维护中的 OHF-Voice 仓库及当前语音页面
- 更新 Coqui 文档，引用维护中的 idiap/coqui-ai-TTS 分支、`coqui-tts` 包及当前容器镜像
- 新增 Piper `.onnx.json` 配置下载以匹配 CUDA 支持

**评估：** 此 PR 属于文档维护类更新，提升了本地 TTS 提供商的可维护性和用户指引清晰度，预计可快速合并。

---

#### PR #961 - 修复 DeepSeek 推理内容回放
**链接：** https://github.com/moltis-org/moltis/pull/961

**主要变更：**
- 修复 Issue #959
- 在转换持久化聊天历史时保留 provider reasoning
- 将持久化的工具推理作为 `reasoning_content` 回放，用于需要该字段的 DeepSeek/OpenAI 兼容后续请求
- 新增 DeepSeek V4 thinking-mode 回归测试覆盖

**评估：** 此修复解决了 DeepSeek 集成中的推理内容丢失问题，对使用该模型的用户体验有直接影响，同时补充了测试覆盖，提升代码质量。

---

## 4. 社区热点

### 活跃讨论

| 类型 | 编号 | 标题 | 作者 | 评论数 | 点赞 |
|------|------|------|------|--------|------|
| Issue | #963 | Tool calls with malformed or empty arguments collapse to missing required fields | @Cstewart-HC | 0 | 0 |

**#963 分析：**
此 Issue 由 @Cstewart-HC 于 2026-05-03 报告，描述了间歇性的 `exec` 调用失败问题——即使模型已成功激活 `exec` 工具并执行过命令，仍会在预调度 schema 验证阶段被拒绝，错误信息为 `missing=command`。该问题发生在 `ExecTool.execute()` 或 `BeforeToolCall` 钩子运行之前，表明问题根源在参数校验层。

**诉求分析：** 用户期望工具调用在参数格式异常时能给出更明确的错误提示，而非直接判定为缺失必填字段。这涉及用户体验和调试友好性。

---

## 5. Bug 与稳定性

### 今日报告 Bug（按严重程度）

| 严重程度 | Issue # | 标题 | 状态 | 已有 Fix PR |
|----------|---------|------|------|-------------|
| **高** | #963 | Tool calls with malformed or empty arguments collapse to missing required fields | OPEN | 无 |

**#963 详细说明：**
- **问题类型：** 工具调用参数验证逻辑缺陷
- **影响范围：** 使用 `exec` 工具的场景，可能导致间歇性命令执行失败
- **复现条件：** 工具调用参数格式异常或为空时
- **当前状态：** 维护者尚未响应，建议优先关注

---

## 6. 功能请求与路线图信号

### 今日功能相关活动

**从 PR 推断的路线图信号：**

1. **本地 TTS 能力强化**（#962）
   - 表明项目持续投入本地语音合成能力建设
   - 关注维护状态良好的第三方依赖

2. **多模型推理支持**（#961）
   - DeepSeek 推理内容回放功能暗示项目正扩展对非 OpenAI 原生模型的支持
   - 跨模型聊天历史兼容性成为重要方向

**潜在功能方向：**
- 更健壮的参数校验与错误提示
- 扩展的模型支持（尤其是 reasoning 模型）
- 文档与依赖维护的持续投入

---

## 7. 用户反馈摘要

### 从 Issue 评论提炼

**#963 用户痛点：**
- **场景：** 在使用 `exec` 工具执行命令时遇到间歇性失败
- **不满点：**
  - 错误信息不够明确（`missing=command` 无法定位真正原因）
  - 问题发生在工具执行前，难以通过业务层捕获
- **期望：** 工具调用在参数异常时能提供更精确的错误诊断

---

## 8. 待处理积压

### 长期未响应项

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 积压时长 |
|------|------|------|----------|------|----------|
| #963 | Issue | Tool calls with malformed or empty arguments collapse to missing required fields | 2026-05-03 | OPEN | 1 天 |

**提醒：** Issue #963 报告已超过 24 小时暂无维护者响应，该 Bug 涉及核心工具调用功能，建议优先评估处理。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 新开/活跃 Issues | 1 |
| 已关闭 Issues | 0 |
| 待合并 PRs | 2 |
| 已合并 PRs | 0 |
| 新版本发布 | 0 |

---

*报告生成时间：2026-05-04*
*数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览

CoPaw 项目今日保持高度活跃，共产生 **33 条 Issues 更新**（新开/活跃 22 条，关闭 11 条）和 **16 条 PR 更新**（待合并 11 条，已合并/关闭 5 条）。社区讨论围绕**智能体隔离机制**和**记忆管理系统**展开，这两个议题各获得 8 条和 4 条评论。值得注意的是，版本已悄然推进至 **v1.1.6b1**，暗示下一版本正在积极筹备中。今日 PR 合并数量较往日偏少，但待合并队列积压较多，表明代码审查环节可能存在瓶颈。

---

## 2. 版本发布

**今日无新正式版本发布。**

但值得注意的是，PR #4012 已将版本号提升至 **v1.1.6b1**（beta 1），暗示 v1.1.6 的开发周期已启动。建议关注该版本的变更日志，预计将包含 MemoryHook 长期记忆增强、文件 URL 音频块修复等重要更新。

---

## 3. 项目进展

今日共合并/关闭 **5 条 PR**，推进了以下工作：

| PR | 标题 | 状态 | 贡献者 | 说明 |
|----|------|------|--------|------|
| [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) | docs(website): update documentation to v1.1.5 | ✅ 已合并 | xieyxclack | 文档同步至最新版本 |
| [#1642](https://github.com/agentscope-ai/QwenPaw/pull/1642) | feat(error code): add error code | ✅ 已合并 | xieyxclack | 错误代码体系完善 |
| [#1055](https://github.com/agentscope-ai/QwenPaw/pull/1055) | feat: add MiniMax as a built-in provider | ✅ 已合并 | ximiximi423 | 新增 MiniMax provider 支持 |
| [#559](https://github.com/agentscope-ai/QwenPaw/pull/559) | fix: remove failed user messages from memory | ✅ 已合并 | beiyu | 防止会话污染的内存清理修复 |
| [#4012](https://github.com/agentscope-ai/QwenPaw/pull/4012) | chore(version): bumping version to 1.1.6b1 | ✅ 已合并 | xieyxclack | 版本号更新 |

**亮点 PR 解析：**

- **#1055 MiniMax Provider**：历时近两个月终于合并，将 MiniMax-M2.5 系列模型纳入内置 provider，降低用户配置门槛。
- **#559 会话污染修复**：解决了 DashScope 400 错误时用户消息已被写入内存但会话已失败的问题，提升系统健壮性。

---

## 4. 社区热点

今日讨论最活跃的 Issues：

### 🥇 #3936 - 智能体隔离机制讨论
**评论数：8 | 状态：CLOSED | 链接：[Issue #3936](https://github.com/agentscope-ai/QwenPaw/issues/3936)**

用户 **@WT-AHA** 提出了核心诉求：希望智能体之间可以完全隔离，或让使用者选择是否隔离。目前智能体 1 可以读取智能体 2 的 workspace，期望实现每个智能体独立的 workspace 空间。

**核心痛点：**
- 文件防护功能是整体配置，不支持按智能体单独配置
- 仅支持黑名单机制，不支持白名单（指定特定目录访问权限）

**诉求分析：** 这是一个**多租户隔离**需求，在企业场景中尤为重要。社区对此讨论热烈（8 条评论），反映出对安全隔离能力的强烈期待。

---

### 🥈 #1516 - Telegram 语音消息处理缺陷
**评论数：5 | 状态：OPEN | 链接：[Issue #1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)**

用户 **@JobJobovich** 报告 Telegram 频道不支持 `AudioContent`，语音消息无法被 LLM 正确理解。问题出在消息格式化管道。

**关联 PR：** #4021 已提交修复，贡献者 @karls0r 解决了 `file://` URL 音频块的路径解析问题。

---

### 🥉 #3977 - 对话上下文记忆管理失效
**评论数：4 | 状态：OPEN | 链接：[Issue #3977](https://github.com/agentscope-ai/QwenPaw/issues/3977)**

用户 **@DeltaFarce** 报告使用 `memory_search` 时报错：`AttributeError: 'list' object has no attribute 'get'`。这表明记忆管理模块存在类型处理错误。

**关联 PR：** #4007（MemoryHook）可能间接解决此问题，但需进一步验证。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

### 🔴 高优先级

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | 会话空闲清理机制错误取消正在运行的任务 | OPEN | ❌ |
| [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | 开启 HEARTBEAT.md 后网络中断无法自动重连 | OPEN | ❌ |
| [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | FunctionCallOutput validation error when call_id is None | OPEN | ❌ |

**#3976 详细分析：** UnifiedQueueManager 的空闲清理机制存在竞态条件，将正在处理 AI 响应的会话错误标记为"空闲"并强制取消消费者任务。用户等待 10 分钟后会话被强制结束，AI 响应完全丢失。这是一个**影响生产环境可用性**的严重 Bug。

---

### 🟡 中优先级

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) | 更新后 embedding_model_config 被重置为空 | OPEN | ⚠️ #4007 |
| [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) | 技能卸载后 skill.json 编码损坏 | OPEN | ❌ |
| [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | context_check 导致聊天历史出现孤立 assistant 消息 | OPEN | ❌ |

**#4018 详细分析：** 每次 `qwenpaw update` 更新版本后，`agent.json` 中的 embedding 模型配置被重置为空默认值，导致向量搜索失效。这影响依赖 `memory_search` 功能的用户。关联 PR #4007 新增 MemoryHook，可能修复此问题。

---

### 🟢 已关闭的 Bug

| Issue | 标题 | 状态 | 说明 |
|-------|------|------|------|
| [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama 无法携带对话历史 | CLOSED | 会话记忆丢失问题 |
| [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | 和 agent 聊天几轮后不继续执行 | CLOSED | 需确认是否真正修复 |
| [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) | Running Config 设置页面返回 Not Found | CLOSED | API 端点问题 |

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本路线图：

### 🔥 高热度功能请求

| Issue | 标题 | 评论数 | 链接 | 评估 |
|-------|------|--------|------|------|
| #2430 | 系统托盘图标和最小化到托盘功能 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/2430) | ⭐⭐⭐ 长期需求，Windows 用户强烈期待 |
| #3944 | Auto-Memory 排除心跳与定时任务 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/3944) | ⭐⭐⭐ 改善记忆质量 |
| #4011 | 增加 fallback 模型选项 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4011) | ⭐⭐⭐ 生产环境刚需 |
| #4010 | 飞书、微信等渠道端打断/终止功能 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4010) | ⭐⭐ 提升可控性 |
| #4002 | 对话界面增加可视化共享区域 | 2 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/4002) | ⭐⭐ 交互体验提升 |

### 📊 关联 PR 分析

以下待合并 PR 可能实现对应功能：

| PR | 功能 | 状态 |
|----|------|------|
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | 添加火山引擎 provider | OPEN |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | 添加 GPT image 2 工具插件 | OPEN |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | 添加巴西葡萄牙语 (pt-BR) 国际化支持 | Under Review |
| [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) | MemoryHook 长期记忆增强 | OPEN |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

### 💬 核心痛点

1. **记忆系统不稳定**
   - `memory_search` 返回空结果（#3977, #4018）
   - 对话历史无法正确携带（#3991）
   - Auto-Memory 错误纳入系统自动化对话（#3944）

2. **渠道稳定性问题**
   - Telegram 语音消息无法处理（#1516）
   - 网络中断后无法自动重连（#4017）
   - 长时间运行后任务被错误取消（#3976）

3. **配置管理混乱**
   - 更新后配置被重置（#4018）
   - 技能卸载后 JSON 编码损坏（#3019）

### ✨ 正面反馈

- 用户 **@q1023884985** 称赞 CoPaw 为"非常优秀的工具"
- CLI 技能测试命令（#3999）获得新贡献者积极响应
- MiniMax provider 合并后获得社区认可

---

## 8. 待处理积压

以下 Issue 长期未响应或存在潜在风险：

### ⚠️ 长期未解决

| Issue | 标题 | 创建时间 | 状态 | 风险 |
|-------|------|----------|------|------|
| [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430) | 系统托盘图标功能 | 2026-03-27 | OPEN | 38天未响应，Windows 用户核心诉求 |
| [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) | 技能卸载后 skill.json 损坏 | 2026-04-07 | OPEN | 28天未响应，影响中文用户 |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | Telegram AudioContent 不支持 | 2026-03-15 | OPEN | 51天未响应，已有 Fix PR 待合并 |

### 📋 建议优先处理

1. **#3976 会话空闲清理机制** - 影响生产环境稳定性，建议紧急处理
2. **#4017 网络重连问题** - 与 HEARTBEAT.md 功能耦合，需统一排查
3. **#3936 智能体隔离** - 社区讨论热烈，是多租户场景的阻塞点

---

## 📈 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 33 条/24h | 📊 持平 |
| PR 活跃度 | 16 条/24h | 📊 持平 |
| 合并率 | 31% (5/16) | 📉 略低 |
| 首次贡献者 PR | 7 条 | ⭐ 活跃 |
| 待合并 PR 积压 | 11 条 | ⚠️ 需关注 |

---

**报告生成时间：** 2026-05-04
**数据来源：** GitHub CoPaw Repository
**分析师：** AI Assistant

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

ZeptoClaw 项目在 2026-05-03 展现出极高的开发活跃度。过去24小时内共处理 **22 条 PR**（其中 19 条已合并/关闭）和 **5 条 Issues**（1 条已关闭）。项目重心聚焦于三大方向：① 完成中间件框架 Phase 1（#564）；② 推进 Hermes Agent 自改进循环模式的本地化适配（#567-569）；③ 统一项目定位文档与竞品对比措辞（#565, #570）。整体开发节奏稳健，无新增版本发布，依赖维护保持高频更新（当日合并 14 个 Dependabot PR）。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 意义 |
|---------|------|------|------|
| [#564](https://github.com/qhkm/zeptoclaw/pull/564) | refactor(agent): middleware framework + 11 implementations (phase 1 of #399) | ✅ CLOSED | **核心架构升级** — 引入 Middleware trait、ToolMiddleware trait、PipelineContext 等框架类型，并实现 11 个中间件。该 PR 是 #399 的 Phase 1，仅做增量添加，尚未接入 Agent 循环，为后续功能扩展奠定基础 |
| [#404](https://github.com/qhkm/zeptoclaw/pull/404) | refactor(agent): middleware pipeline scaffolding (#399) | ✅ CLOSED | 已被 #564 替代，是中间件框架的早期原型，已完成历史使命 |

### 3.2 待合并的 PR（3 条）

| PR 编号 | 标题 | 状态 | 预计影响 |
|---------|------|------|----------|
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | feat(tools): trigger-phrase nudges in longterm_memory description | 🔄 OPEN | 为 `longterm_memory` 工具描述添加 "Use when" / "Do NOT use when" 触发短语，对齐 Hermes Agent 的 memory_tool.py 模式，并新增 doc-test 保护触发块 |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | docs: align ZeptoClaw positioning claims | 🔄 OPEN | 统一 README、Cargo 元数据、CLAUDE.md、AGENTS.md 的定位表述；修正对 Aisar、ZeptoStack、NemoClaw 的竞品对比措辞；更新 provider/channel 数量统计 |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) | docs: refresh positioning, channel/provider counts, test status | 🔄 OPEN | 刷新 AGENTS.md 的 LOC 统计（~106k → ~154k）；澄清 MQTT 通道状态；移除已过期的 nextest blocker 说明 |

### 3.3 依赖更新（14 条 Dependabot PR 已合并）

**Rust 生态：**
- `tokio` 1.50.0 → 1.51.1（#550）
- `libc` 0.2.184 → 0.2.185（#560）
- `zip` 8.4.0 → 8.5.1（#555）
- `lettre` 0.11.20 → 0.11.21（#563）
- `webpki-roots` 1.0.6 → 1.0.7（#558）

**JavaScript/前端生态：**
- `astro` 6.0.8 → 6.1.6（#557, #552）
- `@astrojs/starlight` 0.38.2 → 0.38.3（#559, #554）
- `vite` 8.0.0 → 8.0.8（#561）

**GitHub Actions 生态：**
- `taiki-e/install-action` 2.75.10 → 2.75.17（#562）
- `EmbarkStudios/cargo-deny-action` 2.0.16 → 2.0.17（#556）
- `softprops/action-gh-release` 2.6.1 → 3.0.0（#553）
- `actions/upload-artifact` 7.0.0 → 7.0.1（#551）

**Docker 生态：**
- `debian` trixie-slim 更新（#549）

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 热度分析 |
|------------|------|--------|----------|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | feat(providers): Liquid AI (LFM) provider integration — edge-native models | 2 | **已关闭** — 引入 Liquid AI 的 LFM（Liquid Foundation Models）支持，包括 LFM-1B/3B/7B 非 Transformer 架构模型，专为边缘部署优化（iOS/Android via LEAP SDK）。该功能填补了 ZeptoClaw 在边缘 AI 推理场景的能力空白 |

### 4.2 新提起的功能提案（均为 P3-normal）

| Issue 编号 | 标题 | 关联 PR | 战略意义 |
|------------|------|---------|----------|
| [#567](https://github.com/qhkm/zeptoclaw/issues/567) | feat(tools): agent-callable skill_manage tool (CRUD on user skills) | — | **Phase 1 of Hermes Agent 自改进循环** — 让 Agent 能在对话中动态增删改用户技能，突破当前技能需预先编写的限制 |
| [#568](https://github.com/qhkm/zeptoclaw/issues/568) | feat(skills): usage telemetry sidecar (.usage.json) | — | **Phase 2 of Hermes Agent 自改进循环** — 追踪每个技能的使用频率，为技能存活性判断提供数据依据 |
| [#569](https://github.com/qhkm/zeptoclaw/issues/569) | feat(tools): trigger-phrase nudges in longterm_memory tool description | [#571](https://github.com/qhkm/zeptoclaw/pull/571) | **Phase 1.5 of Hermes Agent 自改进循环** — 优化长期记忆工具的触发引导，提升 Agent 自我改进能力 |
| [#565](https://github.com/qhkm/zeptoclaw/issues/565) | docs: align ZeptoClaw positioning and comparison claims | [#570](https://github.com/qhkm/zeptoclaw/pull/570) | 统一项目定位，消除对竞品的不当比较，提升品牌公信力 |

**热点洞察：** 项目正在系统性地借鉴 Hermes Agent 的自改进循环模式（技能管理 → 使用遥测 → 触发引导），这是一个从"静态工具集"向"动态自进化助手"演进的重要信号。

---

## 5. Bug 与稳定性

**本日无新增 Bug 报告。**

依赖更新中包含多个安全补丁：
- `tokio` 1.51.1 包含 2026-04-08 的修复
- `softprops/action-gh-release` 升级至 3.0.0（大版本更新）
- `webpki-roots` 1.0.7 包含 2026年4月 root store 更新

---

## 6. 功能请求与路线图信号

### 6.1 已进入 Review 阶段的功能

| 功能 | Issue/PR | 优先级 | 纳入下一版本的可能性 |
|------|----------|--------|---------------------|
| 中间件框架 Phase 1 | #564 | P2 | ✅ 已合并 |
| 长期记忆工具触发短语优化 | #571 | P3 | ✅ 预计近期合并 |
| 项目定位文档统一 | #570 | P3 | ✅ 预计近期合并 |

### 6.2 路线图信号

**Hermes Agent 自改进循环三阶段计划：**

```
Phase 1  →  skill_manage tool (#567)      [提议中]
Phase 1.5 → trigger-phrase nudges (#569)  [PR 待合并]
Phase 2  →  usage telemetry (#568)        [提议中]
```

**边缘 AI 能力扩展：**
- Liquid AI LFM provider (#541) 已完成集成，标志 ZeptoClaw 正式进入边缘部署场景

**中间件架构演进：**
- #564 完成 Phase 1 后，预计 Phase 2 将中间件接入 Agent 循环

---

## 7. 用户反馈摘要

从本日 Issues 评论中提炼：

### 7.1 核心诉求

| 场景 | 反馈来源 | 需求描述 |
|------|----------|----------|
| 边缘部署 | #541 | 用户对 LFM 非 Transformer 架构的低内存特性有强烈需求，特别是 iOS/Android 端侧推理场景 |
| 技能管理 | #567 | 用户希望 Agent 能"边用边学"，而非依赖预先编写的静态技能 |
| 定位清晰度 | #565 | 社区反馈项目定位表述存在不一致，影响新用户理解 |

### 7.2 满意度观察

- **文档质量提升：** #566 和 #570 反映了维护者对文档准确性的重视，LOC 统计、竞品对比等细节正在被系统性修正
- **依赖维护积极：** 14 个 Dependabot PR 在单日内合并，依赖健康度良好

---

## 8. 待处理积压

### 8.1 长期未响应的 Issues（>7 天无更新）

| Issue 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------------|------|----------|------|------|
| [#541](https://github.com/qhkm/zeptoclaw/issues/541) | Liquid AI provider integration | 2026-04-23 | ✅ 已关闭 | 已解决 |
| — | 无其他长期积压 | — | — | 项目维护响应及时 |

### 8.2 建议关注的事项

| 项目 | 现状 | 建议 |
|------|------|------|
| **#567-569 系列** | 均在 2026-05-03 创建，尚未分配优先级 | 建议维护者评估是否纳入近期 milestone |
| **中间件 Phase 2** | #564 已完成 Phase 1，Phase 2 尚未启动 | 建议明确 Phase 2 时间线 |
| **竞品对比措辞** | #565 指出存在未充分依据的比较声明 | 建议优先合并 #570 进行修正 |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去24小时 Issues 更新 | 5 条（新开/活跃: 4，已关闭: 1） |
| 过去24小时 PR 更新 | 22 条（待合并: 3，已合并/关闭: 19） |
| 新版本发布 | 0 个 |
| Dependabot PR 合并数 | 14 条 |
| 核心功能 PR 合并数 | 2 条（#564, #404） |

---

*本报告由 AI 自动生成，基于 2026-05-04 的 GitHub 数据。数据来源：[ZeptoClaw Repository](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

# NemoClaw 项目动态日报

**报告日期：** 2026-05-04
**项目仓库：** [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw)

---

## 1. 今日速览

NemoClaw 今日保持高度活跃，共处理 **17 条 Issues**（8 新开/活跃，9 已关闭）和 **50 条 PRs**（11 已合并/关闭，39 待合并）。项目整体呈现健康状态，测试覆盖率提升成为今日重点，多个 CLI 适配器测试 PR 集中提交。安全修复持续推进，包括 SSRF 验证加固和 Token 泄露防护。Hermes 集成相关问题开始浮现，涉及快照持久化和 TUI 启动失败。**无新版本发布**，项目仍处于 v0.0.34 准备阶段。

---

## 2. 版本发布

**今日无新版本发布。**

项目当前稳定版本为 v0.0.34，多个 PR 已标记为该版本目标，预计近期将正式发布。

---

## 3. 项目进展

### 已合并/关闭的 Pull Requests

| PR 编号 | 标题 | 状态 | 贡献者 | 关键变更 |
|---------|------|------|--------|----------|
| [#2946](https://github.com/NVIDIA/NemoClaw/pull/2946) | test(cli): narrow sandbox destroy coverage ignores | CLOSED | @cv | 移除 sandbox destroy 动作的宽泛覆盖率忽略，聚焦破坏性子进程清理路径 |
| [#2945](https://github.com/NVIDIA/NemoClaw/pull/2945) | test(cli): cover maintenance action helpers | CLOSED | @cv | 新增维护和升级动作逻辑的直接辅助函数测试 |
| [#2943](https://github.com/NVIDIA/NemoClaw/pull/2943) | test(cli): cover global action facade | CLOSED | @cv | 覆盖全局 CLI 动作外观的直接测试 |
| [#2820](https://github.com/NVIDIA/NemoClaw/pull/2820) | fix(policy): remove deprecated tls termination directives | CLOSED | @deepujain | 移除废弃的 `tls: terminate` 指令，修复 #2749 |

### 待合并的重要 PRs

| PR 编号 | 标题 | 目标版本 | 关键变更 |
|---------|------|----------|----------|
| [#2950](https://github.com/NVIDIA/NemoClaw/pull/2950) | fix(channels): allow distinct messaging credentials across sandboxes | v0.0.34 | 跨沙箱消息凭证冲突检测范围调整至凭证哈希 |
| [#2948](https://github.com/NVIDIA/NemoClaw/pull/2948) | fix(brev): reject invalid sandbox names before deploy | v0.0.34 | Brev 部署前验证沙箱名称格式 |
| [#2941](https://github.com/NVIDIA/NemoClaw/pull/2941) | fix(snapshot): preserve Hermes durable state | v0.0.34 | 新增 `state_files` 支持，保护 Hermes 持久化状态 |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | fix(security): harden config set SSRF validation | v0.0.34 | 递归扫描配置值中的 http/https 字符串，防止 SSRF |
| [#2935](https://github.com/NVIDIA/NemoClaw/pull/2935) | fix(onboard): use systemd drop-in for Linux Ollama OLLAMA_HOST override | v0.0.34 | 修复 Linux 原生安装时 Ollama 端口冲突问题 |
| [#2888](https://github.com/NVIDIA/NemoClaw/pull/2888) | fix: normalize OpenClaw config generator permissions | v0.0.34 | 规范化 Dockerfile 中 Python 脚本权限 |

**今日测试覆盖率提升工作集中推进**，由 @cv 提交的 10+ 个测试相关 PR 正在等待合并，覆盖 CLI 适配器、运行时工具、命令路由等模块。

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#1992** - Nightly E2E failed（341 条评论）
- **状态：** OPEN
- **创建时间：** 2026-04-17
- **活跃度：** 持续关注，2026-05-04 仍有更新
- **诉求分析：** CI/CD 流水线夜间 E2E 测试失败，涉及多个工件日志需排查。长期未解决表明问题复杂，可能涉及环境依赖或间歇性问题。
- **链接：** https://github.com/NVIDIA/NemoClaw/issues/1992

**#1045** - Declarative Interface for Host Filesystem Access（8 条评论）
- **状态：** OPEN
- **创建时间：** 2026-03-28
- **诉求分析：** 用户希望在 WSL/本地开发环境中更灵活地访问宿主机文件系统，当前 Landlock/OpenShell 隔离机制过于严格造成开发体验摩擦。
- **链接：** https://github.com/NVIDIA/NemoClaw/issues/1045

### 热点 PR

**#2823** - docs(inference): document local tool-call reliability
- **状态：** OPEN
- **诉求分析：** 文档团队新增 Ollama 工具调用可靠性故障排除指南，解决 vLLM 与 Ollama 在工具调用行为上的差异问题。
- **链接：** https://github.com/NVIDIA/NemoClaw/pull/2823

---

## 5. Bug 与稳定性

### 高优先级 Bug

| 优先级 | Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|--------|------------|------|------|---------------|
| 🔴 高 | [#2467](https://github.com/NVIDIA/NemoClaw/issues/2467) | fix(security): route dashboard URL output through redact() to prevent token leakage | CLOSED | ✅ 已修复 |
| 🔴 高 | [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | fix(security): harden config set SSRF validation | OPEN | ⚠️ PR 待合并 |
| 🟠 中 | [#2755](https://github.com/NVIDIA/NemoClaw/issues/2755) | nemoclaw logs --tail/--since/--help flags silently ignored | OPEN | ❌ 无 |
| 🟠 中 | [#2756](https://github.com/NVIDIA/NemoClaw/issues/2756) | failed onboard registers ghost sandbox via session recovery | OPEN | ❌ 无 |
| 🟠 中 | [#2757](https://github.com/NVIDIA/NemoClaw/issues/2757) | openclaw gateway killed — no auto-respawn | OPEN | ❌ 无 |
| 🟠 中 | [#2595](https://github.com/NVIDIA/NemoClaw/issues/2595) | nemoclaw status reports "Inference: healthy" while gateway is down | CLOSED | ✅ 已修复 |

### 新报告的 Bug

| Issue 编号 | 标题 | 平台 | 状态 |
|------------|------|------|------|
| [#2882](https://github.com/NVIDIA/NemoClaw/issues/2882) | nemoclaw snapshot command misses crucial data (Hermes SQLite) | All | OPEN |
| [#2949](https://github.com/NVIDIA/NemoClaw/issues/2949) | [hermes] Missing hermes TUI | All | OPEN |
| [#2947](https://github.com/NVIDIA/NemoClaw/issues/2947) | PR #2773 missing in hermes sandbox | All | OPEN |
| [#2801](https://github.com/NVIDIA/NemoClaw/issues/2801) | Decide NemoHermes gateway naming and branding behavior | All | OPEN |

### 已修复的 Bug

| Issue 编号 | 标题 | 修复方式 |
|------------|------|----------|
| [#2754](https://github.com/NVIDIA/NemoClaw/issues/2754) | NEMOCLAW_OPENSHELL_BIN env var ignored by preflight | 已关闭 |
| [#2749](https://github.com/NVIDIA/NemoClaw/issues/2749) | deprecated tls: terminate warnings persist | PR #2820 |
| [#2748](https://github.com/NVIDIA/NemoClaw/issues/2748) | sandbox policy references /usr/local/bin/claude | 已关闭 |
| [#2753](https://github.com/NVIDIA/NemoClaw/issues/2753) | sandbox name written before creation | 已关闭 |
| [#2639](https://github.com/NVIDIA/NemoClaw/issues/2639) | Show model size before Ollama model download | 已关闭 |
| [#2765](https://github.com/NVIDIA/NemoClaw/issues/2765) | Stale onboard.lock not cleaned up after preflight failure | 已关闭 |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue 编号 | 标题 | 类型 | 状态 | 纳入版本可能性 |
|------------|------|------|------|----------------|
| [#1045](https://github.com/NVIDIA/NemoClaw/issues/1045) | Declarative Interface for Host Filesystem Access (WSL/Local Dev) | enhancement | OPEN | 🟡 待评估 |
| [#2801](https://github.com/NVIDIA/NemoClaw/issues/2801) | Decide NemoHermes gateway naming and branding behavior | enhancement | OPEN | 🟡 待评估 |

### 路线图信号分析

1. **Hermes 集成深化**：多个 Issue 涉及 Hermes 持久化状态、TUI 启动、Dockerfile 同步，表明 Hermes 正成为核心集成组件
2. **安全加固持续**：SSRF 验证和 Token 泄露防护显示安全优先级提升
3. **CLI 体验优化**：日志过滤、状态报告准确性、onboard 流程稳定性等 UX 改进需求明显
4. **跨平台一致性**：Windows/WSL、macOS、Ubuntu 多平台问题并行出现，跨平台测试覆盖待加强

---

## 7. 用户反馈摘要

### 用户痛点

1. **Hermes 集成体验断裂**
   - 快照命令遗漏 Hermes SQLite 数据库（#2882）
   - TUI 无法启动，npm 安装到只读路径（#2949）
   - PR #2773 功能未同步到 Hermes Dockerfile（#2947）

2. **CLI 可靠性问题**
   - `logs --tail/--since` 标志被静默忽略（#2755）
   - `status` 命令在网关宕机时仍报告 healthy（#2595）
   - onboard 失败后产生幽灵沙箱（#2756）

3. **开发环境摩擦**
   - Landlock 隔离过于严格，影响本地开发（#1045）
   - Linux Ollama 安装时端口冲突（#2935）

### 用户满意点

- 安全修复响应迅速（Token 泄露、SSRF）
- 文档持续完善（Ollama 工具调用可靠性指南）
- 测试覆盖率提升意识增强

---

## 8. 待处理积压

### 长期未响应的 Issue

| Issue 编号 | 创建时间 | 标题 | 状态 | 等待原因 |
|------------|----------|------|------|----------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | 2026-04-17 | Nightly E2E failed | OPEN | 需 CI/CD 团队介入，17天未解决 |
| [#1045](https://github.com/NVIDIA/NemoClaw/issues/1045) | 2026-03-28 | Declarative Interface for Host Filesystem Access | OPEN | 功能设计讨论中，36天 |

### 建议优先处理

1. **#2882** - Hermes 快照丢失关键数据，影响用户数据持久化
2. **#2755** - CLI 日志过滤功能失效，影响日常使用
3. **#2757** - 网关无自动重启，运维体验差
4. **#2414** - SSRF 安全漏洞，PR 已就绪待合并

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 8 |
| 今日关闭 Issues | 9 |
| 今日新增 PRs | 39 |
| 今日合并/关闭 PRs | 11 |
| 新版本发布 | 0 |
| 安全相关修复 | 2 |
| 测试覆盖率 PRs | 10+ |

---

*报告生成时间：2026-05-04*
*数据来源：GitHub NemoClaw 仓库活动日志*

</details>

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*
