# OpenClaw 生态日报 2026-05-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-01 02:10 UTC

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

**报告日期：** 2026-05-01
**项目仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

2026-05-01 是 OpenClaw 项目极为活跃的一天。24小时内共产生 **500 条 Issues 更新**（其中479条新开/活跃，21条已关闭）和 **500 条 PR 更新**（474条待合并，26条已合并/关闭），项目整体活跃度维持在高位。今日正式发布了 **v2026.4.29** 正式版及4个 beta 版本，主要聚焦于 Messaging 自动化、内存系统增强和子代理路由元数据功能。社区讨论热度较高，Android APK 预构建版本请求获得最多关注（23条评论），同时多个回归 Bug（Gateway CPU 占用、内存插件超时）引发广泛讨论。项目当前处于快速迭代期，建议用户关注最新版本以获取稳定性修复。

---

## 2. 版本发布

### v2026.4.29 正式版发布

**发布时间：** 2026-04-29
**发布类型：** 功能更新 + 稳定性修复

#### 主要更新内容

| 功能领域 | 更新内容 | 贡献者 |
|---------|---------|--------|
| **Messaging & Automation** | Active-run steering 默认启用，visible-reply 强制执行，spawned 子代理路由元数据支持，heartbeat 提醒的 opt-in follow-up commitments | @vincentkoc, @scoootscooob, @samzong, @vignesh07 |
| **Memory** | 内存系统增强（详情截断） | - |

#### Beta 版本迭代轨迹

| 版本 | 状态 |
|------|------|
| v2026.4.29-beta.1 | ✅ 已发布 |
| v2026.4.29-beta.2 | ✅ 已发布 |
| v2026.4.29-beta.3 | ✅ 已发布 |
| v2026.4.29-beta.4 | ✅ 已发布 |
| **v2026.4.29** | ✅ 正式版 |

#### 迁移注意事项

⚠️ **建议升级前注意：**
- Active-run steering 改为默认启用，可能影响现有工作流行为
- 建议在非生产环境验证后再全面升级

---

## 3. 项目进展

过去24小时内共 **合并/关闭 26 条 PR**，以下是具有代表性的重要进展：

### 关键修复 PRs

| PR 编号 | 标题 | 领域 | 状态 |
|---------|------|------|------|
| [#74844](https://github.com/openclaw/openclaw/pull/74844) | MCP server tools missing from agent's request body | MCP/Gateway | CLOSED |
| [#68033](https://github.com/openclaw/openclaw/pull/68033) | openai-codex provider broken since 2026.4.5 | Provider | CLOSED |
| [#51918](https://github.com/openclaw/openclaw/pull/51918) | Owner message priority / preemption during agent turns | Messaging | CLOSED |
| [#39554](https://github.com/openclaw/openclaw/pull/39554) | Google Chat plugin: invalid thread resource name | Channel | CLOSED |

### 活跃中的重要 PRs

| PR 编号 | 标题 | 领域 | 规模 |
|---------|------|------|------|
| [#51078](https://github.com/openclaw/openclaw/pull/51078) | fix(android): restore chat and screen tab behavior | Android | XS |
| [#50527](https://github.com/openclaw/openclaw/pull/50527) | security: add input length limits to hook agent payload metadata fields | Security | S |
| [#50521](https://github.com/openclaw/openclaw/pull/50521) | security: reject null bytes in archive entry paths | Security | XS |
| [#50507](https://github.com/openclaw/openclaw/pull/50507) | feat(whatsapp): support native location messages via message tool | WhatsApp | M |
| [#49794](https://github.com/openclaw/openclaw/pull/49794) | fix: add hard timeout to memory_search to prevent session wedging | Memory | S |
| [#49685](https://github.com/openclaw/openclaw/pull/49685) | feat(skills): split fat SKILL.md files into lean overview + references/ | Skills | XL |
| [#49335](https://github.com/openclaw/openclaw/pull/49335) | gateway: tail-read session transcripts to prevent chat.history freezes | Gateway | S |
| [#49332](https://github.com/openclaw/openclaw/pull/49332) | fix(ui): prevent duplicate chat messages from retransmitted final events | UI | XL |

### 安全相关 PRs

项目持续推进安全加固，以下 PR 值得关注：

- [#50527](https://github.com/openclaw/openclaw/pull/50527) - 为 hook agent payload 元数据字段添加输入长度限制
- [#50521](https://github.com/openclaw/openclaw/pull/50521) - 拒绝归档路径中的空字节，防止路径截断攻击

---

## 4. 社区热点

以下 Issues 和 PRs 在过去24小时内获得最多关注：

### 热门 Issues TOP 10

| 排名 | Issue 编号 | 标题 | 评论数 | 👍 | 状态 |
|------|-----------|------|--------|-----|------|
| 1 | [#9443](https://github.com/openclaw/openclaw/issues/9443) | Request: Prebuilt Android APK releases | 23 | 1 | OPEN |
| 2 | [#73303](https://github.com/openclaw/openclaw/issues/73303) | Gateway restart can hang ~3-4 min before new process starts | 12 | 2 | OPEN |
| 3 | [#73306](https://github.com/openclaw/openclaw/issues/73306) | Active Memory plugin times out on every run | 11 | 2 | OPEN |
| 4 | [#51857](https://github.com/openclaw/openclaw/issues/51857) | The Blind Spot Problem — When Your Agent Can't See What You Sent | 8 | 0 | OPEN |
| 5 | [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send: target agent can call sessions_send back, causing duplicate messages | 8 | 0 | OPEN |
| 6 | [#71736](https://github.com/openclaw/openclaw/issues/71736) | [RFC] Control UI plugin contribution slots | 8 | 0 | OPEN |
| 7 | [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes strips operator scopes unconditionally | 7 | 0 | OPEN |
| 8 | [#74328](https://github.com/openclaw/openclaw/issues/74328) | Gateway main thread CPU-bound at ~100% (fs.stat storm) | 7 | 3 | OPEN |
| 9 | [#75330](https://github.com/openclaw/openclaw/issues/75330) | Gateway event loop blocked during agent prep: max delay 32s | 4 | 4 | OPEN |
| 10 | [#61005](https://github.com/openclaw/openclaw/issues/61005) | Android onboarding: "Connect" button inactive when operator offline | 6 | 3 | OPEN |

### 热点分析

#### 🔥 #9443 - Android APK 预构建版本请求（23条评论）

**核心诉求：** 用户希望 GitHub Releases 提供预编译的 Android APK，而非仅提供源码。

**用户场景：**
- 用户 @AstridQing-AI 代表 Lysen 提交此 Issue
- 当前仓库 `apps/android` 包含源码，但无预编译产物
- 用户期望开箱即用的 Android companion app 体验

**社区反响：** 这是评论最多的 Issue，反映了大量非技术用户对简化安装流程的强烈需求。

#### 🔥 #73303 / #74328 - Gateway 性能回归问题

**问题类型：** 回归 Bug（Regression）

**影响范围：**
- #73303: macOS LaunchAgent 模式下 Gateway 重启耗时 3-4 分钟
- #74328: Gateway 主线程 CPU 占用 100%，fs.stat 风暴

**严重程度：** ⚠️ 高 - 影响生产环境可用性

#### 🔥 #51857 - Agent 视觉/媒体盲点问题

**问题描述：** Agent 无法看到用户发送的媒体内容，尽管配置了 imageModel 和附件。

**问题本质：** Driftnet 追踪到一系列媒体和视觉失败问题，Agent 在每层都报告成功但实际未处理用户发送的内容。

---

## 5. Bug 与稳定性

### 严重 Bug（影响生产）

| Issue | 标题 | 严重程度 | 回归 | 已有 Fix PR |
|-------|------|---------|------|-------------|
| [#74328](https://github.com/openclaw/openclaw/issues/74328) | Gateway CPU 100% (fs.stat storm) | 🔴 严重 | ✅ 是 | ❌ 无 |
| [#73303](https://github.com/openclaw/openclaw/issues/73303) | Gateway restart hang 3-4 min | 🔴 严重 | ✅ 是 | ❌ 无 |
| [#73306](https://github.com/openclaw/openclaw/issues/73306) | Active Memory plugin timeout | 🟠 高 | ✅ 是 | ❌ 无 |
| [#75330](https://github.com/openclaw/openclaw/issues/75330) | Gateway event loop blocked 32s | 🟠 高 | ❓ 待确认 | ❌ 无 |
| [#75069](https://github.com/openclaw/openclaw/issues/75069) | Bundled plugin runtime mirror blocks main thread | 🟠 高 | ✅ 是 | ❌ 无 |

### 中等 Bug

| Issue | 标题 | 严重程度 | 回归 |
|-------|------|---------|------|
| [#74844](https://github.com/openclaw/openclaw/issues/74844) | MCP server tools missing from request body | 🟡 中 | ✅ 是 |
| [#72208](https://github.com/openclaw/openclaw/issues/72208) | 4.24版本全局安装后卡死 | 🟡 中 | ✅ 是 |
| [#70857](https://github.com/openclaw/openclaw/issues/70857) | Windows startup latency, session lock held 191s | 🟡 中 | ✅ 是 |
| [#74209](https://github.com/openclaw/openclaw/issues/74209) | Default bundled plugins block gateway startup | 🟡 中 | ✅ 是 |

### 回归问题汇总

⚠️ **过去24小时报告的回归 Bug 数量较多，建议优先处理：**

1. **v2026.4.26+ 引入的回归：**
   - Gateway CPU 占用异常
   - 内存插件超时
   - 插件运行时镜像阻塞主线程
   - MCP server tools 缺失

2. **v2026.4.22+ 引入的回归：**
   - 插件运行时镜像同步阻塞

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 标题 | 评论数 | 预计影响 |
|-------|------|--------|---------|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK releases | 23 | 用户增长 |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | Multi-Slot Memory Architecture | 5 | 架构改进 |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | OpenAI Realtime (speech-to-speech) for Talk Mode | 5 | 功能增强 |
| [#19075](https://github.com/openclaw/openclaw/issues/19075) | Add baseUrl option for Brave Search provider | 5 | 企业部署 |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) | Built-in auto-update with configurable schedule | 5 | UX 改进 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | Support YAML as config file format | 6 | DX 改进 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | Support multiple Azure/Teams bots | 4 | 企业功能 |

### 已有相关 PR 的功能请求

以下功能请求已有对应 PR 实现，很可能纳入下一版本：

| 功能 | PR | 状态 |
|------|-----|------|
| WhatsApp 原生位置消息 | [#50507](https://github.com/openclaw/openclaw/pull/50507) | OPEN |
| Discord/Telegram 命令溢出警告改进 | [#50191](https://github.com/openclaw/openclaw/pull/50191) | OPEN |
| memory_search 硬超时防止会话卡死 | [#49794](https://github.com/openclaw/openclaw/pull/49794) | OPEN |
| SKILL.md 文件拆分减少 token 负载 | [#49685](https://github.com/openclaw/openclaw/pull/49685) | OPEN |
| 多智能体编排模式文档 | [#48608](https://github.com/openclaw/openclaw/pull/48608) | OPEN |
| Gemini final tags 泄漏修复 | [#48593](https://github.com/openclaw/openclaw/pull/48593) | OPEN |

---

## 7. 用户反馈摘要

### 用户痛点

#### 1. Android 体验不友好
> *"As a user who wants to run the OpenClaw Android companion app, I would like to have prebuilt APK downloads available in GitHub releases."*
> — @AstridQing-AI (代表 Lysen)

**问题：** 用户需要自行编译 Android 应用，门槛过高。

#### 2. 稳定性回归影响生产
> *"After upgrading from v2026.4.22 to v2026.4.26, the gateway sits at ~100% CPU on its single main thread and stops responding to local probes."*
> — @odrobnik

**问题：** 新版本引入性能回归，生产环境受影响。

#### 3. 多实例 Docker 容器名冲突
> *"When multiple OpenClaw instances run on the same host with Docker sandbox enabled, container name collisions occur."*
> — @wnbhr

**问题：** 同一主机运行多个实例时，sandbox 容器命名冲突。

#### 4. Telegram 多机器人路由问题
> *"When multiple Telegram bot accounts are configured, outgoing messages always route through the same bot instead of respecting the configured routing."*
> — @McoreD

**问题：** 多机器人场景下消息路由不正确。

### 用户满意点

1. **功能丰富：** 多渠道支持（Slack、Discord、Telegram、WhatsApp 等）
2. **插件系统：** 开放的插件架构获得好评
3. **社区活跃：** Issue 和 PR 响应及时

---

## 8. 待处理积压

以下 Issue 长期未得到响应或需要维护者关注：

### 高优先级积压

| Issue | 标题 | 创建时间 | 最后更新 | 评论数 | 状态 |
|-------|------|---------|---------|--------|------|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Prebuilt Android APK releases | 2026-02-05 | 2026-05-01 | 23 | OPEN |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send duplicate messages | 2026-03-08 | 2026-05-01 | 8 | OPEN |
| [#39497](https://github.com/openclaw/openclaw/issues/39497) | read tool path guard rejects valid /agent/ mount paths | 2026-03-08 | 2026-05-01 | 5 | OPEN |
| [#51857](https://github.com/openclaw/openclaw/issues/51857) | The Blind Spot Problem | 2026-03-21 | 2026-05-01 | 8 | OPEN |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes regression | 2026-03-20 | 2026-05-01 | 7 | OPEN |

### 建议行动

1. **#9443 Android APK：** 考虑添加 GitHub Actions 自动构建和发布 APK
2. **#39476 A2A 循环调用：** 这是协议层面问题，需要设计防护机制
3. **#51857 媒体盲点：** 涉及多模块，建议指定负责人统筹调查
4. **#51396 权限回归：** 安全相关，建议尽快评估和修复

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 更新总数 | 500 |
| - 新开/活跃 | 479 |
| - 已关闭 | 21 |
| PR 更新总数 | 500 |
| - 待合并 | 474 |
| - 已合并/关闭 | 26 |
| 新版本发布 | 5 |
| 热门 Issue 评论峰值 | 23 (#9443) |
| 回归 Bug 报告数 | 8+ |

---

**报告生成时间：** 2026-05-01
**数据来源：** GitHub OpenClaw 仓库活动日志

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-05-01
**分析范围：** 10 个核心开源项目

---

## 1. 生态全景

2026年5月初，个人 AI 助手与自主智能体开源生态呈现**"一超多强、差异化演进"**的整体态势。OpenClaw 以日均 500 条 Issues/PR 更新的绝对体量占据生态核心位置，但其周边项目（NanoBot、Zeroclaw、PicoClaw、NemoClaw）同样保持高度活跃，形成功能互补的矩阵式生态。值得关注的是，**多项目正在经历从"单 Agent"向"多 Agent 协作"的架构转型**，OpenClaw 的 A2A 协议、NemoClaw 的 GPU passthrough、IronClaw 的 Reborn 架构均指向这一方向。社区反馈显示，**渠道集成（WhatsApp/Telegram/飞书）、本地推理（Ollama）、安全加固**是跨项目共性需求，而各项目在技术路线、目标用户、部署场景上已呈现明显分化。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃→关闭) | PRs (待合并→已合并) | Releases | 合并率 | 健康度 |
|------|------------------------|---------------------|----------|--------|--------|
| **OpenClaw** | 500 (479→21) | 500 (474→26) | 5 个 (v2026.4.29) | 5.2% | ⭐⭐⭐⭐⭐ |
| **NemoClaw** | 50 (37→13) | 50 (19→31) | 0 | 62% | ⭐⭐⭐⭐ |
| **Zeroclaw** | 50 (49→1) | 50 (38→12) | 0 (v0.7.4 准备中) | 24% | ⭐⭐⭐⭐ |
| **PicoClaw** | 36 (35→1) | 38 (32→6) | 2 个 (v0.2.8) | 15.8% | ⭐⭐⭐⭐ |
| **NanoBot** | 14 (7→7) | 27 (18→9) | 0 | 33.3% | ⭐⭐⭐⭐ |
| **IronClaw** | 26 (25→1) | 38 (18→20) | 0 | 52.6% | ⭐⭐⭐ |
| **NanoClaw** | 8 (5→3) | 46 (9→37) | 0 | 80.4% | ⭐⭐⭐ |
| **LobsterAI** | 1 (1→0) | 21 (12→9) | 0 | 42.9% | ⭐⭐⭐ |
| **Moltis** | 10 (4→6) | 21 (3→18) | 1 个 (v20260430.01) | 85.7% | ⭐⭐⭐ |
| **EasyClaw** | 0 | 0 | 1 个 (v1.8.10) | N/A | ⭐ |

**数据洞察：**

- **OpenClaw** 活跃度断档领先，但 PR 合并率仅 5.2%，表明大量 PR 处于评审积压状态
- **NanoClaw、Moltis** 合并率最高（80%+），代码质量把控严格
- **NemoClaw、IronClaw** PR 吞吐量与合并率平衡良好，迭代效率较高
- **EasyClaw** 近乎静默，可能处于维护模式或节假日停更

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位

OpenClaw 是整个生态的**事实标准制定者**：

| 维度 | OpenClaw | 生态均值 |
|------|----------|----------|
| 日均 Issues 吞吐量 | 500 | 69.5 |
| 日均 PR 吞吐量 | 500 | 79.1 |
| 版本发布频率 | 5 个/日 | 0.9 个/日 |
| 社区规模（评论数） | 最高单 Issue 23 条 | 4.2 条 |

### 3.2 技术路线差异

| 特性 | OpenClaw | Zeroclaw | NemoClaw | NanoBot |
|------|----------|----------|----------|---------|
| **协议层** | A2A (Agent-to-Agent) | ACP | 私有协议 | 私有协议 |
| **本地推理** | Ollama Provider | Ollama Provider | Ollama 深度集成 | Ollama Provider |
| **渠道集成** | 20+ 渠道 | 10+ 渠道 | 5+ 渠道 | 8+ 渠道 |
| **CLI 框架** | 自研 | 自研 | oclif 迁移中 | 自研 |
| **安全机制** | HMAC tool receipts | ApprovalManager | SSRF 防护 | HookCenter 钩子 |

### 3.3 社区规模对比

| 项目 | 关注者数 (估算) | 今日评论总量 | 核心贡献者 |
|------|----------------|--------------|------------|
| **OpenClaw** | 最高 | 最高 | @vincentkoc, @scoootscooob, @samzong |
| **NemoClaw** | 高 | 高 | NVIDIA 官方维护 |
| **IronClaw** | 中 | 中 | nearai 官方维护 |
| **NanoBot** | 中 | 中 | HKUDS 学术团队 |

**结论：** OpenClaw 以 **10 倍于平均水平的活动量** 主导生态，其 A2A 协议、多渠道集成、Memory 系统已成为其他项目的参考实现。

---

## 4. 共同关注的技术方向

以下需求在多个项目中**同步涌现**，反映行业共识：

### 4.1 本地推理（Ollama）集成

| 项目 | 问题描述 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | #603 无法使用 ollama 本地，配置复杂 | 🟡 中 |
| **NemoClaw** | #2733 Ollama tool-call-leak failure<br>#2199 local-inference policy missing Ollama ports<br>#2616 HTTP_PROXY 环境变量污染 | 🔴 高 |
| **NanoBot** | #603 ollama 配置卡死 | 🟡 中 |
| **PicoClaw** | #2149 硬编码 90s 空闲超时破坏本地模型设置 | 🟡 中 |

**共性诉求：** 统一的 Ollama Provider 配置体验、端口自动发现、环境变量隔离、工具调用可靠性保障。

### 4.2 多渠道消息处理稳定性

| 项目 | 问题描述 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | #73303 Gateway restart hang<br>#73306 Active Memory plugin timeout | 🔴 高 |
| **Zeroclaw** | #6123 default_model issue on fresh install<br>#6224 WhatsApp cron 失败 | 🔴 高 |
| **NanoClaw** | #2159 OneCLI ensureAgent 失败 | 🟡 中 |
| **LobsterAI** | #1878 微信接口无法输入验证码 | 🔴 高 |
| **CoPaw** | #2757 企业微信频繁断开<br>#3300 跨事件循环错误 | 🔴 高 |

**共性诉求：** 渠道连接稳定性、消息去重、错误恢复机制、配置持久化。

### 4.3 安全加固

| 项目 | 安全问题 | 类型 |
|------|----------|------|
| **OpenClaw** | #979 rm 指令防护可被绕过 | 沙箱逃逸 |
| **NanoClaw** | #458 代理容器网络限制缺失<br>#457 stopContainer() 命令注入漏洞 | 容器安全 |
| **NemoClaw** | #2414 SSRF 防护加固<br>#1912 Slack Bot Token 无验证 | 配置安全 |
| **PicoClaw** | #2377 exec 工具输出不安全终端控制字符 | 输出安全 |

**共性诉求：** 沙箱隔离、命令注入防护、SSRF 保护、凭证验证。

### 4.4 多 Agent 架构演进

| 项目 | 进展 | 里程碑 |
|------|------|--------|
| **OpenClaw** | A2A 协议实现中 | #39476 A2A sessions_send 循环检测 |
| **IronClaw** | Reborn 架构落地 | HostRuntime、HTTP Egress 已合并 |
| **NemoClaw** | 多 Agent 邮箱通道 | #3461 文件系统邮箱通道插件 |
| **Zeroclaw** | RFC 进行中 | #5890 Multi-agent UX flow 等待投票 |

**共性诉求：** Agent 间通信协议、任务分发、状态同步、循环检测。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 差异化亮点 |
|------|----------|------------|
| **OpenClaw** | 全功能 AI 助手平台 | A2A 协议、Memory 系统、20+ 渠道 |
| **NemoClaw** | NVIDIA GPU 加速 | GPU passthrough、oclif CLI、代码索引 |
| **IronClaw** | Web/云端部署 | Reborn 架构、OpenTelemetry、Responses API |
| **NanoBot** | 轻量级助手 | HookCenter 插件系统、Matrix 通道 |
| **Zeroclaw** | 企业级部署 | Schema v3、Onboarding 优化、多用户支持 |
| **PicoClaw** | 嵌入式助手 | MCP 集成、WhatsApp 原生、音频处理 |
| **LobsterAI** | 桌面客户端 | Electron 架构、CoWork 协作 |
| **Moltis** | 开发者工具 | Zen Provider、远程沙箱、Session 标题 |
| **CoPaw** | 企业微信集成 | 飞书卡片处理器、工具审批按钮化 |
| **NanoClaw** | 安全沙箱 | 容器网络限制、HMAC tool receipts |

### 5.2 目标用户

| 项目 | 主要用户 | 部署场景 |
|------|----------|----------|
| **OpenClaw** | 开发者、极客 | 自托管、云端 |
| **NemoClaw** | AI 开发者、研究者 | NVIDIA DGX、本地 GPU |
| **IronClaw** | 企业用户 | Vercel、Fly.io 云端部署 |
| **Zeroclaw** | 企业 IT | 生产环境、多租户 |
| **NanoBot** | 轻量需求用户 | 个人服务器 |
| **PicoClaw** | 嵌入式场景 | IoT、边缘设备 |
| **LobsterAI** | 企业用户 | 飞书/企业微信办公 |
| **CoPaw** | 企业用户 | 企业微信、飞书办公 |

### 5.3 技术架构关键差异

| 维度 | OpenClaw | NemoClaw | IronClaw | Moltis |
|------|----------|----------|----------|--------|
| **运行时** | Node.js | Go + Node.js | TypeScript | TypeScript |
| **沙箱** | Docker | Docker/Firecracker | WASM | Vercel/Remote |
| **CLI** | 自研 | oclif | 自研 | 自研 |
| **存储** | SQLite + 文件 | SQLite | PostgreSQL | 云存储 |
| **协议** | A2A | 私有 | 私有 | 私有 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────────┐
│  第一梯队：超高速迭代                                             │
│  OpenClaw (500 Issues/PRs/日)                                    │
│  特征：大量 PR 积压、版本高频、社区高度参与                        │
├─────────────────────────────────────────────────────────────────┤
│  第二梯队：高速迭代                                               │
│  NemoClaw, Zeroclaw, PicoClaw (36-50 Issues/PRs/日)              │
│  特征：功能快速推进、PR 合并率 15-62%、有明确路线图                │
├─────────────────────────────────────────────────────────────────┤
│  第三梯队：稳定迭代                                               │
│  NanoBot, IronClaw, NanoClaw, LobsterAI, Moltis (8-26 Issues/PRs)│
│  特征：代码质量优先、合并率 33-85%、功能稳步交付                   │
├─────────────────────────────────────────────────────────────────┤
│  第四梯队：维护/沉寂                                              │
│  EasyClaw (0 Issues/PRs)                                         │
│  特征：低活动量、可能处于维护模式或节假日停更                      │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度 | 指标 | 说明 |
|------|--------|------|------|
| **OpenClaw** | ⭐⭐⭐⭐⭐ | 高活跃+高积压 | 生态核心，但 PR 积压严重需优化流程 |
| **NemoClaw** | ⭐⭐⭐⭐ | 高活跃+高合并率 | 迭代效率最佳，NVIDIA 背书 |
| **IronClaw** | ⭐⭐⭐⭐ | 高活跃+架构重构 | Reborn 架构落地中，质量把控良好 |
| **NanoClaw** | ⭐⭐⭐⭐ | 低活跃+高合并率 | 安全优先，代码质量导向 |
| **Moltis** | ⭐⭐⭐⭐ | 低活跃+最高合并率 | 质量优先，功能稳步交付 |
| **Zeroclaw** | ⭐⭐⭐ | 高活跃+低合并率 | 功能多但评审流程需优化 |
| **PicoClaw** | ⭐⭐⭐ | 高活跃+低合并率 | MCP 集成领先，但 PR 积压 |
| **CoPaw** | ⭐⭐⭐ | 中等活跃 | 企业微信集成稳定推进 |
| **NanoBot** | ⭐⭐⭐ | 中等活跃 | HookCenter 创新，文档需加强 |
| **LobsterAI** | ⭐⭐ | 低活跃 | 维护者活跃但社区参与度低 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

#### 趋势 1：多 Agent 协作从概念走向落地

**信号：**
- OpenClaw A2A 协议（#39476）
- IronClaw Reborn 架构（#3095, #3098）
- NemoClaw 多 Agent 邮箱通道（#3461）
- Zeroclaw RFC #5890 等待投票

**对开发者的价值：** 如果你的项目需要 Agent 间通信，现在正是参考 OpenClaw A2A 协议实现或等待 IronClaw Reborn 稳定版发布的时机。

#### 趋势 2：本地推理（Ollama）成为标配但体验仍需优化

**信号：**
- 4 个项目同时报告 Ollama 集成问题
- NemoClaw 专门针对 Ollama 端口配置、HTTP_PROXY 隔离等问题
- PicoClaw 修复 90s 超时破坏本地模型设置

**对开发者的价值：** Ollama Provider 已成为标配，但配置复杂度、端口发现、环境变量隔离仍是痛点。建议项目方提供一键式 Ollama 集成向导。

#### 趋势 3：安全从被动修复走向主动设计

**信号：**
- NanoClaw 容器网络限制（#458）、命令注入防护（#457）
- NemoClaw SSRF 防护（#2414）、Slack token 验证（#1912）
- OpenClaw HMAC tool receipts（#6214）
- PicoClaw 终端控制字符过滤（#2377）

**对开发者的价值：** 安全设计正从"发现问题后修复"转向"架构层面内置防护"。建议在新项目设计阶段即引入沙箱隔离、输入验证、凭证加密机制。

#### 趋势 4：CLI 现代化成为技术债务清理重点

**信号：**
- NemoClaw 全面迁移至 oclif（#2775-#2788）
- OpenClaw CLI 增强（#6046 memory reindex）
- Moltis 新增 5 个斜

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期：** 2026-05-01
**项目仓库：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**数据周期：** 过去 24 小时

---

## 1. 今日速览

NanoBot 项目今日保持高度活跃，共产生 **41 条更新**（14 条 Issues + 27 条 PRs）。社区参与度显著提升，7 个新 Issue 开启，9 个 PR 已合并/关闭。核心开发围绕 **HookCenter 事件系统**、**Matrix 通道稳定性**、**DeepSeek 推理模式兼容**三大方向推进。值得注意的是，项目正积极引入 **OpenTelemetry 可观测性**和**多代理通信**等企业级特性，路线图清晰。今日无新版本发布，但积压的 18 个待合并 PR 预示着下一版本将包含大量功能更新。

---

## 2. 版本发布

**今日无新版本发布。**

最近版本信息请参阅 [Releases 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 3. 项目进展

### 已合并/关闭的 PRs（9 条）

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| [#3562](https://github.com/HKUDS/nanobot/pull/3562) | fix(matrix): skip empty stream deltas before processing | CLOSED | 修复 DeepSeek 空 reasoning_content 导致的 Matrix 房间空消息刷屏问题 |
| [#3565](https://github.com/HKUDS/nanobot/pull/3565) | fix(matrix): skip empty stream deltas before processing | CLOSED | 同上（重复提交，已处理） |
| [#3557](https://github.com/HKUDS/nanobot/pull/3557) | lunarpixie | CLOSED | 社区贡献者更新 |
| [#3556](https://github.com/HKUDS/nanobot/pull/3556) | chore: define repository line endings via .gitattributes | CLOSED | 规范化跨平台行尾处理，解决 Windows CRLF 问题 |
| [#3550](https://github.com/HKUDS/nanobot/pull/3550) | docs: avoid POSIX-only temp paths in examples | CLOSED | 文档示例跨平台兼容改进 |

### 重点待合并 PRs（18 条）

| PR | 标题 | 方向 | 亮点 |
|----|------|------|------|
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | feat(hooks): HookCenter typed-event hook system | **插件系统** | 全新类型化事件钩子系统，支持 `observe/transform/guard` 三种模式，外部开发者可通过 `entry_points` 分发插件 |
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) | feat(provider): add Manifest LLM router support | **Provider** | 新增 Manifest 构建器作为内置 Provider，支持 `mnfst_` 前缀自动识别 |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | feat(config): add model presets for quick model switching | **配置** | 模型预设功能，支持快速切换模型+生成参数组合 |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | feat(observability): OpenTelemetry tracing | **可观测性** | 引入 OpenTelemetry 追踪，支持 Langfuse/LangSmith 后端 |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | feat: multi-agent mailbox channel plugin | **多代理** | 文件系统邮箱通道插件，支持代理间通信，含 TTL 防循环机制 |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | feat(feishu): include sender identity in model prompt | **飞书** | 消息中注入发送者身份信息，解决群聊中模型无法区分用户的问题 |
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | feat(context): Add sender_id to LLM runtime context | **上下文** | 通用 sender_id 注入，支持 Discord/飞书等多平台用户感知 |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) | feat: add gateway lifecycle notification hooks | **生命周期** | 网关启动/停止通知钩子 |
| [#3560](https://github.com/HKUDS/nanobot/pull/3560) | fix: adjust DeepSeek reasoning mode check condition | **Bug Fix** | 修复 #3554，DeepSeek-V4 reasoning_content 错误 |
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | fix: API stream lifecycle for tool-backed requests | **Bug Fix** | 修复 #3551，工具调用时 SSE 流过早终止 |
| [#3561](https://github.com/HKUDS/nanobot/pull/3561) | fix: origin_message_id support and outbound deduplication | **增强** | 消息去重与来源追踪 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**1. #660** - 项目声称"ultra-lightweight"但包含 Node.js 依赖 ⭐ 5 👍
📌 [https://github.com/HKUDS/nanobot/issues/660](https://github.com/HKUDS/nanobot/issues/660)
**诉求分析：** 用户质疑项目定位与实现不符，要求澄清技术栈选择。11 条评论显示社区对"轻量级"定义存在分歧。

**2. #603** - 无法使用 ollama 本地 ⭐ 0 👍
📌 [https://github.com/HKUDS/nanobot/issues/603](https://github.com/HKUDS/nanobot/issues/603)
**诉求分析：** 7 条评论，用户在配置本地 ollama 时遇到"nanobot is thinking"卡死问题，涉及 vLLM provider 配置。

**3. #3546** - NanoBot 失忆问题 ⭐ 0 👍
📌 [https://github.com/HKUDS/nanobot/issues/3546](https://github.com/HKUDS/nanobot/issues/3546)
**诉求分析：** 6 条评论，用户反馈飞书群聊中 bot 存在记忆丢失问题，同时抱怨 `reply_in_thread` 被强制开启无法配置。

**4. #2298** - 打破无限工具调用循环 ⭐ 0 👍
📌 [https://github.com/HKUDS/nanobot/issues/2298](https://github.com/HKUDS/nanobot/issues/2298)
**诉求分析：** 4 条评论，小型/本地模型容易陷入无限循环，提议增加检测和中断机制。

**5. #979** - 防止执行 rm 指令是防不住 AI 的 ⭐ 0 👍
📌 [https://github.com/HKUDS/nanobot/issues/979](https://github.com/HKUDS/nanobot/issues/979)
**诉求分析：** 4 条评论，安全相关，用户演示 AI 成功绕过 rm 防护执行删除操作。

### 热点 PR

**#3564** - HookCenter 类型化事件钩子系统
📌 [https://github.com/HKUDS/nanobot/pull/3564](https://github.com/HKUDS/nanobot/pull/3564)
**热度分析：** 核心架构重构，引入插件化机制，预计将大幅提升项目扩展性。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|--------|-------|------|--------|------|
| 🔴 高 | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | DeepSeek-V4 reasoning_content 错误在 v0.1.5.post3 仍可复现（WebUI + exec + Windows） | [#3560](https://github.com/HKUDS/nanobot/pull/3560) | Fix 已提交 |
| 🔴 高 | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | OpenAI 兼容流式 API 在工具调用时过早关闭 | [#3555](https://github.com/HKUDS/nanobot/pull/3555) | Fix 已提交 |
| 🟡 中 | [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix 通道启动时重复读取旧消息 | - | 待处理 |
| 🟡 中 | [#3506](https://github.com/HKUDS/nanobot/issues/3506) | Matrix 通道在 Windows 上因文件名含冒号导致 OSError 123 | - | 待处理 |
| 🟡 中 | [#3533](https://github.com/HKUDS/nanobot/issues/3533) | 飞书群聊中 reply_in_thread 被强制忽略配置 | - | 待处理 |
| 🟢 低 | [#3559](https://github.com/HKUDS/nanobot/issues/3559) | WebSocket 通道无法替代 webhooks 实现主动消息推送 | - | 设计讨论 |

### 已修复的 Bug

- ✅ **Matrix 空消息刷屏**：由 DeepSeek 空 reasoning_content 触发，已通过 [#3562](https://github.com/HKUDS/nanobot/pull/3562) 修复

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| 请求 | Issue | 描述 | 相关 PR | 纳入可能性 |
|------|-------|------|---------|------------|
| **打破无限循环** | [#2298](https://github.com/HKUDS/nanobot/issues/2298) | 检测并中断重复工具调用 | - | 🟡 中 |
| **用户身份感知** | [#3549](https://github.com/HKUDS/nanobot/pull/3549) | 群聊中模型识别发送者 | [#3552](https://github.com/HKUDS/nanobot/pull/3552) | ✅ 高 |
| **飞书 reply_in_thread 可配置** | [#3546](https://github.com/HKUDS/nanobot/issues/3546) | 用户控制线程回复行为 | - | 🟡 中 |
| **Kimi Provider 支持** | [#1007](https://github.com/HKUDS/nanobot/issues/1007) | 添加 Kimi codingplan | - | 🟡 中 |
| **OpenTelemetry 可观测性** | [#3173](https://github.com/HKUDS/nanobot/pull/3173) | LLM 调用全链路追踪 | - | ✅ 高 |

### 路线图信号

从 PR 趋势判断，项目正朝着以下方向演进：
1. **企业级特性**：OpenTelemetry 追踪、多代理通信、生命周期钩子
2. **开发者体验**：HookCenter 插件系统、模型预设快速切换
3. **多平台深化**：飞书身份感知、Matrix 稳定性增强
4. **Provider 扩展**：Manifest 路由支持

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 来源 | 影响 |
|------|------|------|
| **本地模型配置复杂** | #603 | 用户难以成功配置 ollama/vLLM，导致体验挫败 |
| **Bot 记忆丢失** | #3546 | 飞书群聊中上下文不可靠，影响实用性 |
| **安全防护不足** | #979 | rm 指令防护可被绕过，引发安全担忧 |
| **Windows 兼容性** | #3506, #3554 | Matrix 通道和 DeepSeek 在 Windows 上存在问题 |

### 用户诉求

- **简化配置**：降低本地模型使用门槛
- **稳定性优先**：修复失忆、循环等影响核心体验的问题
- **平台一致性**：减少 Windows/macOS/Linux 行为差异
- **安全加固**：防止 AI 执行危险操作

### 正面反馈信号

- 项目活跃度高，社区参与积极
- 维护者响应迅速（多数 Issue 24 小时内有更新）
- 新功能（如 HookCenter）受到期待

---

## 8. 待处理积压

### 长期未解决的重要 Issues（>30 天无更新）

| Issue | 创建日期 | 标题 | 优先级 |
|-------|----------|------|--------|
| [#979](https://github.com/HKUDS/nanobot/issues/979) | 2026-02-22 | 防止执行 rm 指令是防不住 AI 的 | 🔴 高 |
| [#1007](https://github.com/HKUDS/nanobot/issues/1007) | 2026-02-22 | 支持 kimi 的 codingplan | 🟡 中 |
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) | 2026-03-20 | 打破无限工具调用循环 | 🔴 高 |
| [#603](https://github.com/HKUDS/nanobot/issues/603) | 2026-02-13 | 无法使用 ollama 本地 | 🟡 中 |

### 长期未合并的 PRs（>30 天）

| PR | 创建日期 | 标题 | 状态 |
|----|----------|------|------|
| [#1385](https://github.com/HKUDS/nanobot/pull/1385) | 2026-03-01 | fix(providers): preserve reasoning_details for multi-turn tool calling | OPEN |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) | 2026-04-15 | feat(observability): OpenTelemetry tracing | OPEN |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | 2026-04-21 | feat(config): add model presets | OPEN |

### 建议关注

1. **#979 安全问题**：AI 绕过 rm 防护已存在 2+ 月，需评估是否需要架构级修复
2. **#2298 无限循环**：影响小型模型用户体验，建议优先实现循环检测
3. **#1385 reasoning_details**：多轮推理模型兼容性，阻塞_reasoning 模型生态

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去 24 小时 Issues 更新 | 14 条 |
| 过去 24 小时 PR 更新 | 27 条 |
| 新版本发布 | 0 个 |
| 待合并 PRs | 18 个 |
| 已合并/关闭 PRs | 9 个 |
| 热门 Issue 评论数 | 11 条（#660） |
| 热门 Issue 点赞数 | 5 个（#660） |

---

*报告生成时间：2026-05-01*
*数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期：** 2026-05-01
**数据来源：** github.com/zeroclaw-labs/zeroclaw
**数据周期：** 过去 24 小时

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时内保持高度活跃，共产生 **50 条 Issues 更新**（新开/活跃 49 条，关闭 1 条）和 **50 条 PR 更新**（待合并 38 条，已合并/关闭 12 条）。项目正在积极准备 **v0.7.4 版本发布**（PR #6248），涵盖 110 次提交和 36 位贡献者。社区讨论热度较高，尤其是配置系统、渠道集成和 Agent 行为相关的议题。值得注意的是，今日报告了 **多个 P1 优先级 Bug**，涉及 Slack 配置、WhatsApp 功能和 Web dashboard 安全问题，需要维护团队重点关注。

---

## 2. 版本发布

**当前状态：** 无正式发布，但 v0.7.4 正在准备中

| PR | 状态 | 内容摘要 |
|----|------|----------|
| [#6248](https://github.com/zeroclaw-labs/zeroclaw/pull/6248) | OPEN | **chore(release): v0.7.4** - 添加 CHANGELOG-next.md，版本号升至 0.7.4，包含 110 次提交、36 位贡献者 |

> ⚠️ **迁移提示：** v0.7.4 为常规版本更新，未标记破坏性变更。建议关注 CHANGELOG 中的配置字段变更说明。

---

## 3. 项目进展

以下 PR 正在推进项目功能与稳定性：

### 功能增强

| PR | 标题 | 风险等级 | 状态 |
|----|------|----------|------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | feat(gateway,web,cli): web onboarding parity via per-property CRUD endpoints | 🔴 高 | OPEN |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) | feat(webui): hot-switch model & preserve chat context across page navigation | 🟡 中 | OPEN |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | feat(cron): manually trigger cron from webui | 🔴 高 | OPEN |
| [#5943](https://github.com/zeroclaw-labs/zeroclaw/pull/5943) | feat(channels): add Inworld TTS and STT providers | 🔴 高 | OPEN |
| [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242) | feat(i18n): add zh-CN WeChat CLI strings | 🟡 中 | OPEN |
| [#6218](https://github.com/zeroclaw-labs/zeroclaw/pull/6218) | feat(web): mark OpenRouter free models in default-model dropdown | 🟢 低 | OPEN |
| [#6217](https://github.com/zeroclaw-labs/zeroclaw/pull/6217) | feat(web): open agent chat from memory row when session_id is present | 🟢 低 | OPEN |
| [#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220) | feat(web): chat input lock + stop button + running indicator | 🟢 低 | OPEN |
| [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | feat(memory): expose `zeroclaw memory reindex` CLI | 🟡 中 | OPEN |
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | feat(agent,config): activate HMAC tool receipts | 🟡 中 | OPEN |

### Bug 修复

| PR | 标题 | 风险等级 | 状态 |
|----|------|----------|------|
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | fix(channels/acp): implement ACP protocol v1 with tool-call permission | 🔴 高 | OPEN |
| [#6221](https://github.com/zeroclaw-labs/zeroclaw/pull/6221) | fix(daemon,gateway,channels): share canvas store across daemon subsystems | 🔴 高 | OPEN |
| [#6216](https://github.com/zeroclaw-labs/zeroclaw/pull/6216) | fix(gateway): evict cancel_tokens entry when session is deleted mid-turn | 🔴 高 | OPEN |
| [#6215](https://github.com/zeroclaw-labs/zeroclaw/pull/6215) | fix(gateway,channels): mirror #6099 fail-loud model resolution | 🟡 中 | OPEN |
| [#6219](https://github.com/zeroclaw-labs/zeroclaw/pull/6219) | fix(doctor): self-test report shows configured host alongside probed loopback | 🟢 低 | OPEN |
| [#5945](https://github.com/zeroclaw-labs/zeroclaw/pull/5945) | fix(tools): honor tool_timeout_secs for HTTP SSE tool calls | 🟡 中 | OPEN |

### 基础设施

| PR | 标题 | 风险等级 | 状态 |
|----|------|----------|------|
| [#6247](https://github.com/zeroclaw-labs/zeroclaw/pull/6247) | Feat/sop webhook dispatch | 🔴 高 | OPEN |
| [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) | docs(i18n): sync fr/ja/es translations and add zh-CN | 🟢 低 | OPEN |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | feat(obs): instrument runtime memory ops with OTel GenAI spans | 🟡 中 | OPEN |

---

## 4. 社区热点

以下 Issues 和 PRs 引发最多讨论：

### 热门 Issues（按评论数排序）

| # | 标题 | 评论数 | 核心诉求 |
|---|------|--------|----------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | [Bug]: default_model issue on fresh install | 15 | 新安装用户在 LXC 容器中配置 ollama 时遇到 default_model 错误，workflow 被阻塞 |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow — design | 7 | 多代理用户体验设计 RFC，7 天讨论期已结束，等待核心团队投票 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | [Feature]: schema v3 — batch breaking field migrations | 6 | Schema v3 批量破坏性字段迁移，需要协调所有配置变更 |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | [Bug]: zeroclaw does not know it can add cron | 6 | Agent 无法识别可以使用 `zeroclaw cron` 工具 |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | [Bug]: Matrix: voice transcription failed | 6 | Matrix 渠道语音转录失败，音频格式不支持 |

### 热点分析

1. **配置系统问题突出**：Issue #6123（15 条评论）反映新用户在使用 ollama provider 时的配置困境，表明 onboarding 流程对第三方 provider 的支持存在痛点。

2. **多代理架构讨论热烈**：RFC #5890 已完成 7 天讨论期，正在等待核心团队投票，这是项目向多代理架构演进的重要信号。

3. **Schema v3 迁移复杂**：Issue #5947 作为 merge blocker，需要协调多个破坏性变更，维护团队正在谨慎推进。

---

## 5. Bug 与稳定性

### P1 优先级（工作流阻塞）

| # | 标题 | 组件 | 状态 | Fix PR |
|---|------|------|------|--------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | provider | OPEN | - |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge auto-integrator emits non-schema fields | skills | OPEN | - |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | Agent enters infinite tool-call loop on Termux/Android | agent, runtime | OPEN | - |
| [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) | slack bot_token must be stored in config file | channel:slack | OPEN | - |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | Cron Job Dispatch to WhatsApp Web | channel:whatsapp | OPEN | - |
| [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) | web_fetch in WhatsApp Web is not working | channel:whatsapp | OPEN | - |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Web dashboard / WebSocket bypasses ApprovalManager | runtime, security | OPEN | - |
| [#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) | Onboarding fails with "Unknown property" for custom OpenAI | onboard | OPEN | - |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding: choosing OpenAI Codex prompts for OpenAI API key | onboard | OPEN | - |

### P2 优先级（降级行为）

| # | 标题 | 组件 | 状态 | Fix PR |
|---|------|------|------|--------|
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix: voice transcription failed | channel:matrix | OPEN | - |
| [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | Smart Truncation for Telegram | channel:telegram | OPEN | - |
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | chat_messages_to_native() drops reasoning_content | provider:deepseek | OPEN | - |
| [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) | mention_only=true does not suppress photo responses | channel:telegram | OPEN | - |
| [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) | `status` hardcodes `zeroclaw.service` | runtime | OPEN | - |
| [#6222](https://github.com/zeroclaw-labs/zeroclaw/issues/6222) | Config reference docs missing in github | docs | OPEN | - |

### 稳定性评估

⚠️ **当前有 9 个 P1 Bug 处于 OPEN 状态**，主要集中在：
- **渠道集成**：Slack、WhatsApp、Matrix 各有阻塞性问题
- **Onboarding 流程**：新用户配置体验存在多个问题
- **安全**：Web dashboard 存在 ApprovalManager 绕过问题

建议优先处理 Issue #6207（安全）和 #6237（Slack 配置），这两个问题影响用户正常工作流。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| # | 标题 | 状态 | 预计影响 |
|---|------|------|----------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow | RFC 讨论期结束 | ⭐⭐⭐ 战略级 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 — batch breaking field migrations | IN PROGRESS | ⭐⭐⭐ 架构级 |
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) | Build Official Website + End-to-End Documentation | NEEDS REVIEW | ⭐⭐⭐ 用户体验 |
| [#5999](https://github.com/zeroclaw-labs/zeroclaw/issues/5999) | Gateway Web Chat UX Improvements | IN PROGRESS | ⭐⭐ 用户体验 |
| [#5618](https://github.com/zeroclaw-labs/zeroclaw/issues/5618) | Phase 2 D1: Replace DaemonSubsystems callbacks with typed Registry API | ACCEPTED | ⭐⭐ 架构级 |
| [#5932](https://github.com/zeroclaw-labs/zeroclaw/issues/5932) | feat(providers/groq): per-model or configurable native tool support | NO STALE | ⭐⭐ Provider |

### 路线图信号分析

1. **多代理架构呼之欲出**：RFC #5890 已完成讨论，等待投票。若通过，将是项目重大架构演进。

2. **Schema v3 作为协调性变更**：Issue #5947 明确标记为 merge blocker，表明维护团队正在系统性清理配置字段技术债务。

3. **文档体系建设加速**：Issue #5994 请求建设官方文档网站，Issue #6222 报告文档链接失效，反映文档需求迫切。

---

## 7. 用户反馈摘要

### 核心痛点

**1. 配置复杂度高**
- Issue #6123：新用户在 LXC 环境中配置 ollama provider 时遇到 default_model 错误
- Issue #6206：自定义 OpenAI 兼容端点 onboarding 失败
- Issue #6120：OpenAI Codex 订阅配置时提示错误

**2. 渠道集成不稳定**
- Issue #6153：Matrix 语音转录功能完全不可用
- Issue #6224/#6223：WhatsApp cron 和 web_fetch 功能缺失
- Issue #6229：Telegram mention_only 配置未生效

**3. 文档缺失**
- Issue #6222：GitHub 文档链接大量失效
- Issue #5863：用户请求 Skills 格式文档
- Issue #6208：博客无 RSS、无 sitemap，订阅困难

### 正面反馈信号

- PR #6218（标记 OpenRouter 免费模型）获得社区认可，解决了用户无法识别免费模型的问题
- PR #6220（聊天输入锁定和停止按钮）改善了 Web UI 可用性
- i18n 工作持续推进（PR #6242 添加中文 WeChat 支持）

---

## 8. 待处理积压

以下 Issues/PRs 长期未解决或需要维护者关注：

### 长期开放 Issue（超过 7 天无更新）

| # | 标题 | 创建日期 | 优先级 | 备注 |
|---|------|----------|--------|------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow | 2026-04-19 | 高 | 等待核心团队投票 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 migrations | 2026-04-20 | 高 | Merge blocker |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw does not know it can add cron | 2026-04-18 | P2 | 6 条评论待响应 |
| [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) | matrix-sdk 0.16 compile failure | 2026-03-14 | S2 | 已关闭但可能回归 |

### 需要维护者行动的 PRs

| # | 标题 | 风险 | 状态 | 阻塞原因 |
|---|------|------|------|----------|
| [#617

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-05-01
**项目**: PicoClaw (github.com/sipeed/picoclaw)
**数据周期**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 项目今日保持高度活跃状态，共产生 **36 条 Issues 更新**（35 新开/活跃，1 已关闭）和 **38 条 PR 更新**（32 待合并，6 已合并/关闭）。项目正式发布了 **v0.2.8 稳定版本**，包含 MCP CLI 命令增强、工具调用空参数修复及构建问题修复等重要更新，同时推送了针对 v0.2.8-nightly.20260501 的每日构建版本。社区讨论热度集中在多渠道消息处理、WhatsApp 原生支持及 API 凭证管理等领域，整体项目健康度良好，迭代节奏稳定。

---

## 2. 版本发布

### 2.1 正式版本: v0.2.8

**发布状态**: ✅ 已发布
**发布时间**: 2026-05-01

**主要更新内容**:

| Commit | 类型 | 描述 |
|--------|------|------|
| `2da05c2` | 功能增强 | feat(mcp): 新增 show、add、list、remove、test、edit CLI 命令 |
| `9d8f0dc` | Bug 修复 | fix(mcp): 工具调用时发送空对象而非 null |
| `a741460` | 构建修复 | fix: 修复构建失败问题 (#2723) |

**变更亮点**:
- **MCP 集成增强**: 新增完整的 MCP 服务器管理 CLI 命令，显著提升开发者体验
- **兼容性修复**: 修复与 Zod 验证库的兼容性问题，确保 MCP 工具调用参数校验正常
- **构建稳定性**: 解决 v0.2.8 版本构建失败问题

**迁移注意事项**: 无破坏性变更，建议所有用户升级至 v0.2.8 以获得最佳 MCP 工具调用体验。

🔗 **完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

### 2.2 每日构建: v0.2.8-nightly.20260501.6e1fab80

**发布状态**: ⚠️ 自动化构建，可能不稳定
**发布时间**: 2026-05-01

**警告**: 此为自动化构建版本，可能存在不稳定因素，请谨慎在生产环境使用。

🔗 **下载链接**: https://github.com/sipeed/picoclaw/releases/tag/nightly

---

## 3. 项目进展

### 3.1 今日合并/关闭的 PRs (6 条)

| PR # | 作者 | 类型 | 状态 | 描述 |
|------|------|------|------|------|
| #2736 | dependabot[bot] | 依赖更新 | 待合并 | 升级 larksuite/oapi-sdk-go/v3: 3.5.4 → 3.6.1 |
| #2735 | dependabot[bot] | 依赖更新 | 待合并 | 升级 aws/aws-sdk-go-v2/config: 1.32.16 → 1.32.17 |

**依赖维护**: 项目持续保持依赖库更新节奏，今日有 2 个依赖升级 PR 待合并，确保安全性和兼容性。

### 3.2 待合并的重要 PRs (32 条)

以下为值得关注的高优先级 PRs：

| PR # | 作者 | 类型 | 描述 | 领域 |
|------|------|------|------|------|
| #2719 | @loafoe | 功能 | 新增 slack_webhook 输出专用频道，支持 Block Kit 格式 | 频道 |
| #2626 | @webhtb | 功能 | 支持多模态 LLM 原生音频输入 (Gemini 1.5 等) | Provider/Agent |
| #2587 | @SiYue-ZO | 功能 | Pico Web Chat 流式输出和滚动 UX 重构 | 频道/Agent |
| #2522 | @badgerbees | Bug 修复 | OpenAI 兼容 Provider 流式 usage 支持 | Provider |
| #2504 | @jacrify | Bug 修复 | 修复 OGG Opus 解码器缓冲区复用导致的音频损坏 | 音频 |
| #2460 | @alexrexby | Bug 修复 | MCP 工具调用发送空对象而非 nil 参数 | MCP |
| #2313 | @stevef1uk | 安全/功能 | 多用户支持、安全加固、技能白名单 | 安全/Agent |

**项目推进评估**:
- **功能层面**: Slack Webhook 频道、流式 Web Chat 体验、多模态音频输入等重要功能正在推进
- **稳定性层面**: 多个 Bug 修复 PR 覆盖音频解码、工具调用、Provider 兼容等领域
- **整体进度**: 项目迭代健康，多个功能模块并行开发

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues (按评论数排序)

| Issue # | 标题 | 评论数 | 👍 | 领域 | 链接 |
|---------|------|--------|-----|------|------|
| #2408 | [Feature] LLM Account Stacking (Cartridge-Belt): Automatic API key rotation | 10 | 0 | Provider/Config | [🔗](https://github.com/sipeed/picoclaw/issues/2408) |
| #2225 | [Feature] Ollama cloud credentials | 9 | 0 | Provider | [🔗](https://github.com/sipeed/picoclaw/issues/2225) |
| #2171 | [Refactor] Consider moving all OpenAI based endpoints to use OpenAI Responses API | 9 | 0 | Provider | [🔗](https://github.com/sipeed/picoclaw/issues/2171) |
| #2468 | [BUG] Scheduled Task Fails to Execute | 7 | 0 | Cron | [🔗](https://github.com/sipeed/picoclaw/issues/2468) |
| #1763 | [BUG] aarch64 .deb not install | 7 | 0 | Build | [🔗](https://github.com/sipeed/picoclaw/issues/1763) |
| #2465 | [Feature] 频道增加"通过SMTP发送邮件" | 6 | 0 | Channel/Cron | [🔗](https://github.com/sipeed/picoclaw/issues/2465) |
| #2377 | [BUG] exec and logs can emit unsafe terminal control characters | 6 | 0 | Tool | [🔗](https://github.com/sipeed/picoclaw/issues/2377) |
| #2478 | [BUG] 多次使用装备模式指定skill时前面指定的skill会被覆盖 | 5 | 0 | Agent/Skill | [🔗](https://github.com/sipeed/picoclaw/issues/2478) |

### 4.2 热点分析

**Provider/Config 领域 (最热)**:
- **#2408 LLM Account Stacking**: 用户强烈需求自动 API Key 轮换机制，在遇到速率限制或配额限制时自动切换账户，类似于"弹匣式"设计。这是企业级用户的关键需求。
- **#2225 Ollama Cloud**: Ollama Cloud 凭证支持缺失，用户无法使用自托管 Ollama 服务的云端版本。
- **#2171 OpenAI Responses API**: 社区关注 OpenAI 最新 API 规范迁移，计划将现有 Chat Completions API 迁移至 Responses API。

**多渠道消息处理问题**:
- **#2468 定时任务执行失败**: cron 工具执行受限错误
- **#2447 只处理最新消息**: 多任务连续发送时只处理最后一条
- **#2446 消息回显问题**: 多渠道设置下消息可能错误回显

**安全与终端输出**:
- **#2377 终端控制字符**: exec 工具和日志可能输出不安全的 ANSI 控制字符和 Unicode 双向格式字符

🔗 **查看全部 36 条 Issues**: https://github.com/sipeed/picoclaw/issues?q=updated%3A2026-05-01

---

## 5. Bug 与稳定性

### 5.1 今日报告的 Bug (按严重程度排列)

| 严重程度 | Issue # | 描述 | 领域 | 状态 | Fix PR |
|----------|---------|------|------|------|--------|
| 🔴 高 | #2468 | 定时任务执行失败，报错 "scheduling command execution is restricted to internal channels" | Cron | Open | - |
| 🔴 高 | #2377 | exec 和日志输出不安全的终端控制字符，可能导致渲染异常或安全问题 | Tool | Open | - |
| 🔴 高 | #2478 | 多次使用 /use 指定 skill 时前面指定的 skill 被覆盖 | Agent/Skill | Open | - |
| 🟡 中 | #1763 | aarch64 .deb 安装失败 | Build | Open | - |
| 🟡 中 | #2482 | open weights 模型使用 openai 后端时工具调用不工作 | Provider/Tool | Open | - |
| 🟡 中 | #2472 | list_dir 在 Windows 上因路径分隔符不匹配返回 "invalid argument" | Tool | Open | - |
| 🟡 中 | #2540 | WhatsApp LID 迁移账户消息被静默丢弃 | Channel | Open | - |
| 🟡 中 | #2541 | WhatsApp group_trigger.mention_only 功能存在四个复合缺陷 | Channel | Open | - |
| 🟢 低 | #2447 | 多任务连续发送只处理最新消息 | Channel | Open | - |
| 🟢 低 | #2446 | 多渠道设置下消息可能错误回显 | Channel | Open | - |

### 5.2 已有 Fix PR 的 Bug

| PR # | 描述 | 状态 |
|------|------|------|
| #2504 | 修复 OGG Opus 解码器缓冲区复用导致的音频损坏 | 待合并 |
| #2460 | MCP 工具调用发送空对象而非 nil 参数 | 待合并 |
| #2522 | OpenAI 兼容 Provider 流式 usage 支持 | 待合并 |

### 5.3 稳定性评估

**关注点**:
1. **Cron/定时任务**: #2468 报告了严重的定时任务执行限制问题，影响自动化工作流
2. **终端安全**: #2377 涉及潜在的终端渲染安全问题，需要关注
3. **多渠道消息处理**: 多个 Issue 反映多渠道场景下的消息处理异常
4. **WhatsApp 集成**: LID 迁移和 group_trigger 功能存在多个未修复缺陷

**建议**: 优先处理 Cron 工具执行限制和终端安全输出问题。

---

## 6. 功能请求与路线图信号

### 6.1 高优先级功能请求

| Issue # | 功能描述 | 领域 | 评论数 | 链接 |
|---------|----------|------|--------|------|
| #2408 | LLM Account Stacking - API Key 自动轮换 | Provider/Config | 10 | [🔗](https://github.com/sipeed/picoclaw/issues/2408) |
| #2171 | 迁移至 OpenAI Responses API | Provider | 9 | [🔗](https://github.com/sipeed/picoclaw/issues/2171) |
| #2465 | SMTP 邮件发送频道支持 | Channel/Cron | 6 | [🔗](https://github.com/sipeed/picoclaw/issues/2465) |
| #2169 | 双重 HEAD 认证支持 | Provider | 4 | [🔗](https://github.com/sipeed/picoclaw/issues/2169) |
| #2625 | 提供内置 WhatsApp 支持的编译版本 | Build/Channel | 2 | [🔗](https://github.com/sipeed/picoclaw/issues/2625) |
| #2546 | 支持 OAuth 2.1 + PKCE 的 MCP 服务器 | Config | 2 | [🔗](https://github.com/sipeed/picoclaw/issues/2546) |
| #2515 | 集成 mem0/Supermemory 等记忆系统 | Provider | 2 | [🔗](https://github.com/sipeed/picoclaw/issues/2515) |
| #2527 | 可配置的 fresh_tail_size | Agent/Config | 2 | [🔗](https://github.com/sipeed/picoclaw/issues/2527) |

### 6.2 路线图信号分析

**企业级功能需求明显**:
- 多 API Key 自动轮换 (#2408) - 高需求
- OAuth 2.1 + PKCE 认证 (#2546) - 企业安全要求
- 双重 HEAD 认证 (#2169) - 自托管模型支持

**多模态能力扩展**:
- 原生音频输入支持 - PR #2626 正在推进
- OpenAI Responses API 迁移 (#2171) - 跟进官方最新规范

**渠道功能增强**:
- Slack Webhook 输出频道 - PR #2719 正在推进
- SMTP 邮件通知 (#2465) - 定时任务结果通知
- 飞书流式输出和状态显示 (#2580) - 中国用户需求

**记忆与上下文管理**:
- 外部记忆系统集成 (#2515) - mem0/Supermemory
- 可配置上下文窗口 (#2527) - 用户调优需求

### 6.3 可能纳入下一版本的功能

基于 PR 状态和社区讨论，以下功能最有可能在近期版本中出现：

| 功能 | 来源 | 可能性 |
|------|------|--------|
| MCP CLI 命令增强 (show/add/list/remove/test/edit) | ✅ 已合并在 v0.2.8 | 100% |
| Slack Webhook 频道 | PR #2719 | 高 |
| 流式 Web Chat UX | PR #2587 | 高 |
| 多模态音频输入 | PR #2626 | 高 |
| OAuth 2.1 + PKCE MCP 支持 | Issue #2546 | 中 |

---

## 7. 用户反馈摘要

### 7.1 真实用户痛点

**1. 企业级 API 管理需求**
> "Introduce a 'Stacked Authorized LLM Accounts' feature (conceptually like a cartridge-belt). This would allow users to provide multiple API keys/accounts for the same LLM provider." - @tranthiphu56

用户需要在单一 LLM 提供商上配置多个 API Key，以应对速率限制和配额限制场景。

**2. 自托管模型认证限制**
> "由于自建的模型使用了双重HEAD认证...目前picoclaw的提交字段中好像不支持这个方式" - @eastwoodnet

自托管模型用户需要支持自定义 HTTP Header 的能力。

**3. 多渠道消息处理异常**
> "When multiple tasks are sent consecutively from the same channel, Pico does not process each message separately. Instead, it only processes the last task and ignores the earlier one." - @zuozhehao

多任务并发场景下消息丢失问题影响用户体验。

**4. 终端输出安全隐患**
> "Terminal-facing output from the `exec` tool and structured logs can include raw ANSI control bytes and Unicode bidi format characters." - @vjanelle

安全敏感用户关注终端输出可能导致的渲染异常和潜在安全风险。

**5. 构建平台兼容性问题**
> "I download from github sudo apt install ./picoclaw_aarch64.deb... The following packages were automatically installed and are no longer required" - @Damian-o2

ARM64 架构用户遇到安装依赖问题。

### 7.2 用户满意度观察

**满意点**:
- MCP 集成功能持续完善（v0.2.8 新增完整 CLI 命令）
- 多渠道支持丰富（Telegram、Feishu、WhatsApp、Slack 等）

**不满意点**:
- 多渠道消息处理存在 bug
- Windows 平台支持有待改进
- 企业级功能（如 OAuth、多 API Key）缺失

---

## 8. 待处理积压

### 8.1 长期未响应的重要 Issues (超过 30 天未更新)

| Issue # | 创建日期 | 领域 | 描述 | 状态 |
|---------|----------|------|------|------|
| #1763 | 2026-03-18 | Build | aarch64 .deb 安装失败 | Stale |
| #2171 | 2026-03-30 | Provider | 迁移至 OpenAI Responses API | Stale |
| #2225 | 2026-03-31 | Provider | Ollama Cloud 凭证支持 | Stale |
| #2408 | 2026-04-07 | Provider/Config | LLM Account Stacking | Stale |
| #2468 | 2026-04-10 | Cron | 定时任务执行失败 | Stale |

### 8.2 长期未合并的重要 PRs (超过 30 天未更新)

| PR # | 创建日期 | 领域 | 描述 | 状态 |
|------|----------|------|------|------|
| #2313 | 2026-04-03 | Security | 多用户支持

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-05-01
**项目仓库：** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

过去24小时内，NanoClaw 项目保持极高的开发活跃度，共处理 **46 条 PR 更新**（其中 37 条已合并/关闭）和 **8 条 Issues 更新**（5 条新开/活跃，3 条已关闭）。项目在安全修复方面取得显著进展，连续关闭了两个高危安全漏洞（#458 网络限制、#457 命令注入）。同时，OpenCode provider 存在多个待修复的高优先级 Bug，主要集中在上下文丢失和进程泄漏问题。整体项目健康度良好，合并率高达 80%，但 OpenCode provider 分支需尽快处理积压的安全和稳定性问题。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

### 3.1 已合并的重要 PR

| PR 编号 | 标题 | 贡献者 | 意义 |
|---------|------|--------|------|
| [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) | [security] fix(container): 防止容器通过 outbox 路径读取/删除主机文件 | @Hinotoi-agent | **关键安全修复** - 强化了主机/容器文件系统边界，防止容器控制的消息行和可写会话 outbox 被恶意利用 |
| [#2053](https://github.com/qwibitai/nanoclaw/pull/2053) | fix(session-manager): 对入站附件应用 outbox 路径限制 | @dim0627 | 在 #2001 基础上进一步加固文件系统隔离 |
| [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) | fix(setup): 注入 ~/.local/bin 到 PATH | @dooha333 | 修复新 Linux 安装时 onecli 找不到的问题 |
| [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) | feat(signal): 支持出站附件 | @ddaniels | Signal 适配器现已支持发送文件，告别警告丢弃行为 |
| [#2114](https://github.com/qwibitai/nanoclaw/pull/2114) | fix(poll-loop): 对后续注入也应用预任务脚本 | @robbyczgw-cla | 修复预任务脚本仅在初始消息批次生效的问题 |
| [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) | fix: 将后续轮询的任务消息延迟到主循环 | @mzazon | 解决 follow-up 轮询期间任务消息处理异常 |
| [#2142](https://github.com/qwibitai/nanoclaw/pull/2142) | fix(scheduling): 在 schedule_task content JSON 中包含路由 | @mnolet | 修复路由字段丢失导致 handleSystemAction 无法正确转发 |
| [#2111](https://github.com/qwibitai/nanoclaw/pull/2111) | feat(setup): ping-pong 后删除临时代理，简化流程 | @gabi-simons | 改善首次安装体验，清理测试产生的临时代理 |
| [#2027](https://github.com/qwibitai/nanoclaw/pull/2027) | v2: 添加 host-actions 容器技能 | @Koshkoshinsk | 为代理提供识别和路由主机操作请求的能力 |
| [#2155](https://github.com/qwibitai/nanoclaw/pull/2155) | Add root user warning gate to Linux setup | @Koshkoshinsk | 提升 Linux 安装安全性，引导非 root 用户创建 |
| [#2157](https://github.com/qwibitai/nanoclaw/pull/2157) | refactor(setup): 每步环境变量复用替代一次性加载 | @gabi-simons | 改善环境配置灵活性，支持逐服务复用 |
| [#2107](https://github.com/qwibitai/nanoclaw/pull/2107) | feat: 为 Slack 和 Telegram 实现 resolveChannelName | @gabi-simons | 频道审批流程现可显示实际频道/群组名称 |
| [#2105](https://github.com/qwibitai/nanoclaw/pull/2105) | feat: 更丰富的频道审批流程，支持代理选择和自由命名 | @gabi-simons | 大幅改善多代理场景下的频道连接体验 |
| [#2158](https://github.com/qwibitai/nanoclaw/pull/2158) | feat(setup): 启动时显示 lobster splash | @alipgoldberg | 提升品牌辨识度和用户愉悦感 |
| [#2141](https://github.com/qwibitai/nanoclaw/pull/2141) | feat: 飞书决策桥接 via IPC | @brookgao | 新增飞书 DM 决策匹配功能 |

### 3.2 待合并的 PR

| PR 编号 | 标题 | 贡献者 | 状态说明 |
|---------|------|--------|----------|
| [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) | fix(setup): 自动引导本地 OneCLI admin | @dooha333 | 修复全新安装后 onecli 未认证问题 |
| [#2053](https://github.com/qwibitai/nanoclaw/pull/2053) | fix(session-manager): 入站附件路径限制 | @dim0627 | 堆叠在 #2001 上的安全修复 |

---

## 4. 社区热点

### 4.1 热门 Issues 讨论

| 编号 | 标题 | 类型/优先级 | 互动数据 | 热度分析 |
|------|------|-------------|----------|----------|
| [#458](https://github.com/qwibitai/nanoclaw/issues/458) | Security: 为代理容器添加网络限制 | Enhancement / High | 👍 4, 💬 2 | **最高互动** - 社区对容器安全高度关注，4 个点赞反映普遍担忧 |
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | OpenCode: wrapPromptWithContext 发送字面 @./...md 行 | Bug / High | 💬 1 | **沉默的上下文丢失** - 代理无指令运行，风险极高 |
| [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | Host sweep: orphan processing_ack 行导致 claim-stuck 循环 | Bug / High | 💬 0 | **会话锁定** - 每次 kill 后自动触发，需手动 DB 编辑恢复 |

### 4.2 热点诉求分析

**安全加固成为社区焦点：**
- Issue #458（网络限制）和 #457（命令注入）均已关闭，表明维护团队对安全问题的响应速度较快
- 社区对容器安全有较高期待，建议持续关注 `bypassPermissions` 模式的风险

**OpenCode provider 质量问题突出：**
- 连续 4 个 Issue 指向同一 provider（#2150, #2148, #2149, #2147），均为高优先级
- 反映出 `providers` 分支可能存在系统性技术债务

---

## 5. Bug 与稳定性

### 5.1 新报告的 Bug（按严重程度排列）

| 编号 | 标题 | 严重程度 | 是否有 Fix PR | 备注 |
|------|------|----------|---------------|------|
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | OpenCode: wrapPromptWithContext 发送字面 @./...md 行 | 🔴 High | ❌ 无 | **静默上下文丢失** - 片段和 CLAUDE.md 从未到达 LLM |
| [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) | OpenCode: SIGKILL 泄漏底层二进制，占用端口 4096 | 🔴 High | ❌ 无 | 与 90s 超时叠加，每次超时泄漏一个进程 |
| [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | orphan processing_ack 行导致 claim-stuck 循环 | 🔴 High | ❌ 无 | kill 后会话锁定，需手动 DB 编辑或服务重启 |
| [#2159](https://github.com/qwibitai/nanoclaw/issues/2159) | OneCLI ensureAgent 失败：代理组 ID 含下划线 | 🟡 Medium | ❌ 无 | v2 生成的 `ag_f249a3521081` 被 OneCLI 拒绝 |
| [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) | OpenCode: 硬编码 90s 空闲超时破坏本地模型设置 | 🟡 Medium | ❌ 无 | 慢推理场景下静默失败 |

### 5.2 已关闭的 Bug

| 编号 | 标题 | 状态 | 修复方式 |
|------|------|------|----------|
| [#457](https://github.com/qwibitai/nanoclaw/issues/457) | stopContainer() 命令注入漏洞 | ✅ 已关闭 | 需查看对应 PR |
| [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | register-claude-token.sh 在新 Linux 上失败 | ✅ 已关闭 | PR #2055 修复 PATH 问题 |

---

## 6. 功能请求与路线图信号

### 6.1 新功能请求

| 编号 | 标题 | 类型 | 评估 |
|------|------|------|------|
| [#458](https://github.com/qwibitai/nanoclaw/issues/458) | 为代理容器添加网络限制 | Enhancement | **高价值** - 安全增强，可能影响架构设计 |
| [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) | OpenCode 空闲超时可配置化 | Enhancement | **中等价值** - 改善本地模型兼容性 |

### 6.2 路线图信号

基于已合并 PR 分析，项目近期重点方向：

1. **Setup 体验优化** - 多个 PR 聚焦安装流程（#2052, #2055, #2111, #2155, #2157），表明 v2 安装体验是当前重点
2. **多渠道支持** - Signal 附件、飞书决策桥接、Slack/Telegram 频道名称解析等
3. **安全加固** - 容器文件系统边界、命令注入防护持续推进
4. **OpenCode provider** - 存在较多待修复问题，可能进入稳定化阶段

---

## 7. 用户反馈摘要

### 7.1 真实痛点提炼

**安装与配置问题：**
- 新 Linux 系统 PATH 未传播到 bash 子进程，导致 `onecli not found`
- 全新安装后 OneCLI 未认证，需手动引导
- root 用户运行安装存在风险

**稳定性问题：**
- OpenCode provider 在本地模型场景下静默失败
- 进程 SIGKILL 后端口泄漏，容器逐渐不可用
- kill-ceiling 后 orphan 行导致会话永久锁定

**功能缺失：**
- Signal 适配器无法发送文件（已通过 #2040 修复）
- 频道审批流程不支持显示实际名称（已通过 #2107 修复）

### 7.2 用户满意度指标

| 指标 | 观察 |
|------|------|
| Issue 解决速度 | ✅ 安全问题响应快（#457, #458 约 2 个月内关闭） |
| PR 合并率 | ✅ 80% (37/46) - 健康的贡献循环 |
| 社区参与度 | ⚠️ 部分 Issue 缺乏互动（0 👍/评论），可能需要跟进 |

---

## 8. 待处理积压

### 8.1 长期未响应的 Issue

| 编号 | 标题 | 创建日期 | 状态 | 建议 |
|------|------|----------|------|------|
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | OpenCode: 上下文丢失 | 2026-04-30 | Open | 🔴 **紧急** - 高严重性，需优先处理 |
| [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) | OpenCode: 进程泄漏 | 2026-04-30 | Open | 🔴 **紧急** - 容器可用性受损 |
| [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | claim-stuck 循环 | 2026-04-30 | Open | 🔴 **紧急** - 会话锁定 |
| [#2159](https://github.com/qwibitai/nanoclaw/issues/2159) | OneCLI ID 验证失败 | 2026-04-30 | Open | 🟡 需确认 v2 兼容性 |

### 8.2 维护建议

1. **OpenCode provider 专项修复** - 建议安排专门时间处理 #2150, #2148, #2149, #2147
2. **安全审计常态化** - #458 和 #457 表明容器安全是持续关注点
3. **Issue 响应时效** - 部分新 Issue 缺乏维护者响应，建议 48 小时内确认

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去 24 小时 Issues 更新 | 8 条（新开/活跃: 5，已关闭: 3） |
| 过去 24 小时 PR 更新 | 46 条（待合并: 9，已合并/关闭: 37） |
| 新版本发布 | 0 个 |
| 合并率 | 80.4% |
| 高优先级 Bug 积压 | 4 个 |
| 安全修复完成 | 2 个 |

---

*报告生成时间：2026-05-01 | 数据来源：GitHub NanoClaw 仓库*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-05-01
**项目仓库：** github.com/nearai/ironclaw

---

## 1. 今日速览

IronClaw 今日保持极高的开发活跃度，共处理 **38 条 PR 更新**（其中 20 条已合并/关闭）和 **26 条 Issue 更新**。项目核心工作仍围绕 **Reborn 架构落地** 展开，多个关键服务组件（HostRuntime、HTTP Egress、WASM Runtime）已陆续合并。值得注意的是，今日出现 **3 条 Live Canary 自动化测试失败**，以及若干用户报告的 Mission/Gmail 集成问题，需关注稳定性回归风险。整体而言，项目在架构重构与功能交付之间保持平衡推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日已合并/关闭的重要 PR，按影响力排序：

| PR 编号 | 标题 | 状态 | 关键内容 |
|---------|------|------|----------|
| [#3098](https://github.com/nearai/ironclaw/pull/3098) | feat(reborn): add shared runtime HTTP egress | ✅ 已合并 | 新增 `RuntimeHttpEgress` 契约和 `HostHttpEgressService`，统一 HTTP 出站策略（DNS/SSRF 保护、重定向禁用、资源计量），为 WASM/Script/MCP 提供共享网络层 |
| [#3095](https://github.com/nearai/ironclaw/pull/3095) | feat(reborn): add host runtime contract facade | ✅ 已合并 | 添加 `ironclaw_host_runtime` 契约门面，为上层 Reborn 组件（TurnCoordinator、AgentLoopHost、模型网关）提供稳定 API |
| [#3120](https://github.com/nearai/ironclaw/pull/3120) | fix(reborn): make host runtime cancel and health real | ✅ 已合并 | 将 `DefaultHostRuntime` 的取消操作从 stub 升级为真实进程取消，修复 health probe 始终就绪的问题 |
| [#3117](https://github.com/nearai/ironclaw/pull/3117) | test(reborn): cover WASM runtime failure edges | ✅ 已合并 | 补充 WASM 运行时边界测试，覆盖非 WASM 字节拒绝、core WASM 非 component-model 工具拒绝等场景 |
| [#3119](https://github.com/nearai/ironclaw/pull/3119) | fix: disable canary issues creation | ✅ 已合并 | 禁用 Canary 失败时自动创建 Issue，减少噪音 |
| [#3123](https://github.com/nearai/ironclaw/pull/3123) | feat(reborn): route WASM HTTP through shared egress | 🟡 待合并 | 将 WASM WIT `http-request` 路由至共享 `RuntimeHttpEgress`，替代原有的 mock HTTP 表面 |
| [#3126](https://github.com/nearai/ironclaw/pull/3126) | feat(reborn): add host runtime services graph | 🟡 待合并 | 添加 `HostRuntimeServices` 图谱，将 Script/MCP/WASM 适配器接入 `RuntimeDispatcher`，构建完整 `DefaultHostRuntime` |
| [#3080](https://github.com/nearai/ironclaw/pull/3080) | feat(reborn): wire built-in obligations and handoffs | 🟡 待合并 | 实现 V1 内置义务（审计、网络策略、密钥注入、资源挂载）的运行时交接契约 |
| [#3104](https://github.com/nearai/ironclaw/pull/3104) | ci: cut over workflows for main merge queue | 🟡 待合并 | 将 CI 工作流迁移至 `main` 分支合并队列，替代原有的 staging-first 流程 |

**推进评估：** Reborn 架构的核心服务层（HostRuntime、HTTP Egress、WASM Adapter）已具备雏形，预计下一阶段将进入集成测试与产品表面迁移阶段。

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃：

### 讨论热度排行

| 编号 | 类型 | 标题 | 评论数 | 核心诉求 |
|------|------|------|--------|----------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | Issue | [EPIC] Track Reborn architecture landing strategy | 43 | 协调 Reborn 架构分批落地，避免单次大规模 stacked PR 审查 |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | Issue | [TEST] Reborn: Add vertical-slice integration test suite | 10 | 需建立端到端集成测试，验证 Reborn 通过公共入口点而非单元测试运行 |
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | Issue | High ASCII TUI in new ironclaw does not display correctly | 7 | TUI 高 ASCII 字符在部分终端显示异常，需提供回退选项 |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | Issue | [EPIC] Configuration-as-Code for IronClaw Reborn | 2 | 用户/运营商希望声明式配置 IronClaw（当前需手动编辑 .env、settings JSON 等，缺乏 schema/diff/审计） |

**热点分析：** 社区对 Reborn 架构落地的**协作流程**（#2987，43 条评论）最为关注，反映出开发者对分批 PR 审查策略的期待。#3067 强调集成测试必要性，呼应架构重构后的质量保障需求。#3103 则是少数来自最终用户的可用性反馈。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 高优先级

| 编号 | 标题 | 严重性 | 状态 | 说明 |
|------|------|--------|------|------|
| [#3116](https://github.com/nearai/ironclaw/issues/3116) | Live canary failed: public-smoke | 高 | Open | 自动化 smoke 测试失败，commit `2a65da7c2a9d1b14665a373338266e084e9f4096` |
| [#3115](https://github.com/nearai/ironclaw/issues/3115) | Live canary failed: persona-rotating | 高 | Open | persona-rotating 场景测试失败，同 commit |
| [#3113](https://github.com/nearai/ironclaw/issues/3113) | Live canary failed: provider-matrix anthropic | 高 | Open | anthropic provider 矩阵测试失败，同 commit |
| [#3108](https://github.com/nearai/ironclaw/issues/3108) | Web IDE-issued NEAR AI API keys return 401 | 高 | Open | Web IDE 生成的 API Key 在 `private.near.ai` 网关返回 401 "Session not found"，实例级 Key 正常 |

### 🟡 中优先级

| 编号 | 标题 | 严重性 | 状态 | 说明 |
|------|------|--------|------|------|
| [#3132](https://github.com/nearai/ironclaw/issues/3132) | Mission creation fails - cooldown_secs type error | 中 | Open | `cooldown_secs` 参数期望 integer，但收到字符串 "120" |
| [#3128](https://github.com/nearai/ironclaw/issues/3128) | Connecting to Gmail gives 502 | 中 | Open | Gmail 认证流程结束时回调链接返回 502，通过设置页安装扩展可绕过 |
| [#3133](https://github.com/nearai/ironclaw/issues/3133) | Mission to send an email failed | 中 | Open | Gmail 集成失败，无法发送邮件，认证/方法待调试 |

### 🟢 低优先级

| 编号 | 标题 | 严重性 | 状态 | 说明 |
|------|------|--------|------|------|
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | High ASCII TUI display issue | 低 | Open | TUI 高 ASCII 字符在部分 TTY 显示异常（滚动问题） |

**稳定性小结：** 3 条 Live Canary 失败需优先排查（同一 commit 触发），可能影响生产环境部署信心。Gmail 集成问题影响用户任务执行体验。#3132 的类型错误可能指向参数序列化缺陷。

---

## 6. 功能请求与路线图信号

以下功能请求值得关注，结合已有 PR 判断实现可能性：

### 明确纳入路线图（已有对应 PR/Issue）

| 编号 | 功能 | 证据 | 预计方向 |
|------|------|------|----------|
| [#3131](https://github.com/nearai/ironclaw/pull/3131) | Trace Commons 客户端集成 | PR open 中 | 为 Reborn 添加追踪/审计客户端，支持本地队列、CLI 命令、Web API |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | Responses API 支持外部工具 | PR open 中 | 在 `/v1/responses` 和 `/api/v1/responses` 支持 `function`-typed 工具，兼容 OpenAI SDK |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | Configuration-as-Code | Issue open | 声明式配置蓝图，支持 tenant 级别配置和使用场景 harness |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | 独立 ironclaw-reborn 二进制 | Issue open | 将 Reborn 作为独立可执行文件发布，与现有 ironclaw 并行 |

### 用户需求信号

| 编号 | 需求 | 背景 |
|------|------|------|
| [#3103](https://github.com/nearai/ironclaw/issues/3103) | TUI 回退选项 | 用户依赖高 ASCII 字符渲染，需兼容旧版行为 |
| [#3128](https://github.com/nearai/ironclaw/issues/3128) | Gmail OAuth 稳定性 | Gmail 认证流程偶发 502，影响 MCP 集成体验 |

---

## 7. 用户反馈摘要

从今日 Issues 评论与内容中提炼的用户痛点：

### 核心痛点

1. **Gmail 集成不稳定**
   - 用户通过聊天助手添加 Gmail 时，认证流程结束时返回 502
   - 邮件发送任务（每 3 分钟）因认证失败无法执行
   - 临时方案：通过设置页手动安装扩展可绕过

2. **Mission 参数类型校验问题**
   - `cooldown_secs` 期望 integer，但传入字符串 "120" 导致创建失败
   - 指向参数序列化或 API 契约不一致

3. **API Key 认证差异**
   - Web IDE 生成的 Key 在私有网关返回 401
   - 实例级 Key 正常，暗示 Key 生成或网关验证逻辑存在差异

4. **TUI 可用性回退需求**
   - 高 ASCII 字符在新版本显示异常
   - 用户明确请求提供回退参数以恢复旧版行为

### 正面信号

- 社区对 Reborn 架构分批落地策略（#2987）表示理解并积极参与讨论
- 配置即代码的需求（#3036）反映用户对可维护性的追求

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键路径，需维护者关注：

### 长期开放的关键 Issues

| 编号 | 标题 | 创建日期 | 状态 | 风险 |
|------|------|----------|------|------|
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | feat: Abound demo — Responses API, credential injection, skills, guardrails | 2026-03-30 | Open | XL size PR，涵盖 Responses API、凭证注入、技能、护栏，停滞约 1 个月 |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | feat: add Aliyun Coding Plan support | 2026-03-20 | Open | XL size PR，添加阿里云支持，停滞约 6 周 |
| [#1479](https://github.com/nearai/ironclaw/pull/1479) | feat: add tool for near-intents | 2026-03-20 | Open | 接近 6 周未合并，涉及 WASM 工具集成 |

### 建议行动

1. **优先推进 #1764、#1446** — 两者均停滞超过 1 个月，建议拆分或明确审查优先级
2. **排查 #3116/#3115/#3113** — 同一 commit 触发多条 Canary 失败，需确认是否为回归
3. **响应 Gmail 集成问题** — 影响用户核心任务执行，今日已有 2 条相关 Issue

---

**报告生成时间：** 2026-05-01
**数据来源：** GitHub Issues & Pull Requests (nearai/ironclaw)
**本报告基于过去 24 小时公开数据整理，仅供参考。**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**: 2026-05-01
**项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去24小时内，LobsterAI 项目保持高度活跃状态，共处理 **21 条 PR 更新**（其中 9 条已合并/关闭，12 条待处理），Issue 层面有 **1 条新开问题**。项目整体呈现良好的迭代节奏，维护者 @liuzhq1986 持续推进多项 bug 修复和功能优化，涵盖 Windows 安装器、IM 渠道图片预览、配置管理等核心模块。值得注意的是，仓库中存在 **8 个长期开放的 stale PR**（创建于 2026-03-25），这些提案涉及安全增强、性能优化和新功能，期待维护团队尽快评审。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

过去24小时内共合并/关闭 **9 条 Pull Requests**，全部由维护者 **@liuzhq1986** 提交，主要集中在 bug 修复和用户体验优化：

| PR 编号 | 标题 | 领域 | 状态 |
|---------|------|------|------|
| [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) | fix(installer): use IntCmp instead of StrCmp for NSIS exit code check | platform: windows | CLOSED |
| [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) | fix(cowork): constrain markdown image size and add click-to-preview for IM channel images | area: renderer, cowork | CLOSED |
| [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) | fix(cowork): abort gateway run on lifecycle error fallback to prevent session deadlock | area: main | CLOSED |
| [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) | feat(skill): upgrade youdaonote skill | area: docs, skills | CLOSED |
| [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) | fix(cowork): prevent gateway hard restart when switching models on home page | area: main | CLOSED |
| [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) | fix(ui): truncate long model names in ModelSelector to prevent header overflow | area: renderer | CLOSED |
| [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851) | fix(skills): release file watchers before deleting skill directory on Windows | area: main, skills | CLOSED |
| [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) | fix(config): prevent updateConfig from overwriting stored providers with stale defaults | area: renderer | CLOSED |
| [#1829](https://github.com/netease-youdao/LobsterAI/pull/1829) | fix(update): remove inaccurate auto-restart hint from installing state | area: renderer | CLOSED |

**关键修复亮点**：

- **#1869** 解决了网关重试失败请求时导致的会话死锁问题，通过在清理本地 turn 前发送 `chat.abort` 信号
- **#1868** 优化了 IM 渠道（尤其是微信）图片展示尺寸，并新增点击预览功能
- **#1857** 修复了首页切换模型时网关意外硬重启的问题
- **#1840** 修复了配置更新时可能用过期默认值覆盖已存储 provider 的问题

---

## 4. 社区热点

本日讨论最活跃的内容为 **Issue #1878**，用户报告了 IM 机器人微信接口配置扫码后无法输入验证码的问题：

> **#1878** [OPEN] IM机器人 微信接口 配置扫码后无法输入验证码
> 作者: [@iwos2610](https://github.com/iwos2610) | 创建: 2026-04-30 | 评论: 1 | 👍: 0
> 链接: https://github.com/netease-youdao/LobsterAI/issues/1878

**问题摘要**：最新版微信端扫码后会提示要求在 OpenClaw 端输入对应的6位数字验证码，但客户端未提供输入界面，导致无法成功配置微信渠道。

**诉求分析**：该问题直接影响用户接入微信渠道的核心功能，属于**阻塞性问题**，期待维护团队优先响应。

---

## 5. Bug 与稳定性

本日报告的 Bug 按严重程度排列如下：

| 严重程度 | Issue 编号 | 描述 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🔴 **高** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 微信接口配置扫码后无法输入验证码，阻塞渠道接入 | OPEN | ❌ 无 |

**回归风险提示**：近期合并的 #1868（IM 图片预览）和 #1869（网关生命周期）涉及 IM 核心模块，建议关注是否存在关联影响。

---

## 6. 功能请求与路线图信号

仓库中存在 **8 个长期开放的 stale PR**（创建于 2026-03-25），这些提案可能代表下一版本的潜在方向：

| PR 编号 | 类型 | 标题 | 核心功能 |
|---------|------|------|----------|
| [#826](https://github.com/netease-youdao/LobsterAI/pull/826) | 安全修复 | add URL protocol validation for shell.openExternal | 防止 javascript: 等恶意协议 |
| [#827](https://github.com/netease-youdao/LobsterAI/pull/827) | 功能增强 | prevent installing duplicate skill | 阻止重复安装同名 skill |
| [#828](https://github.com/netease-youdao/LobsterAI/pull/828) | 安全修复 | prevent path traversal in localfile:// protocol handler | 防止路径穿越攻击 |
| [#830](https://github.com/netease-youdao/LobsterAI/pull/830) | 性能优化 | optimize database performance parameters | SQLite 参数调优 |
| [#835](https://github.com/netease-youdao/LobsterAI/pull/835) | 功能增强 | add JSON paste mode for batch MCP server creation | 批量创建 MCP 服务器 |
| [#836](https://github.com/netease-youdao/LobsterAI/pull/836) | 功能增强 | handle duplicate local skill imports | 处理本地 skill 重复导入 |
| [#838](https://github.com/netease-youdao/LobsterAI/pull/838) | 功能增强 | add per-channel model override for IM bot sessions | IM 渠道独立模型配置 |
| [#841](https://github.com/netease-youdao/LobsterAI/pull/841) | 稳定性修复 | prevent overlapping runtime poll cycles | 防止轮询周期重叠 |
| [#842](https://github.com/netease-youdao/LobsterAI/pull/842) | 安全功能 | add security environment scanning with friendly UI | 安全环境扫描与权限管理 |
| [#847](https://github.com/netease-youdao/LobsterAI/pull/847) | Bug 修复 | preserve single tilde ranges in chat rendering | 保留单波浪号温度范围格式 |
| [#848](https://github.com/netease-youdao/LobsterAI/pull/848) | 性能优化 | batch config writes in transaction | 批量配置写入事务优化 |

**路线图信号分析**：
- **安全** 是高频主题（#826, #828, #842），建议优先评审合并
- **IM 渠道增强**（#838）与当前 #1878 问题形成呼应，微信渠道能力建设是明确需求
- **Skill 管理**（#827, #836）体现了用户对 skill 生态的规范化诉求

---

## 7. 用户反馈摘要

从本日 Issue 评论中提炼的用户痛点：

**微信渠道接入障碍**（#1878）：
- **场景**：用户尝试配置 IM 机器人微信接口，扫码后需要输入6位验证码
- **痛点**：客户端缺少验证码输入界面，导致配置流程无法完成
- **影响**：阻塞微信渠道的正常使用，属于核心功能缺陷
- **期望**：在 OpenClaw 客户端提供验证码输入框或替代验证方式

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 类型 | 编号 | 创建时间 | 标题 | 优先级 |
|------|------|----------|------|--------|
| 🔴 **Issue** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 2026-04-30 | IM机器人 微信接口 配置扫码后无法输入验证码 | **高** |
| 🟡 **PR** | [#826](https://github.com/netease-youdao/LobsterAI/pull/826) | 2026-03-25 | fix(security): add URL protocol validation | 中 |
| 🟡 **PR** | [#828](https://github.com/netease-youdao/LobsterAI/pull/828) | 2026-03-25 | fix(security): prevent path traversal | 中 |
| 🟡 **PR** | [#838](https://github.com/netease-youdao/LobsterAI/pull/838) | 2026-03-25 | feat(im): add per-channel model override | 中 |

**积压原因分析**：这些 stale PR 已开放超过5周，可能因维护者资源有限或需要更多评审讨论。建议对安全相关 PR 优先处理，功能性 PR 可考虑分阶段合并或提供明确的拒绝/延期理由。

---

## 总结

LobsterAI 项目在 2026-05-01 保持稳定迭代节奏，维护者活跃度高。**紧急事项**为 #1878 微信验证码输入问题；**战略重点**建议关注安全类 stale PR 的评审，以及 IM 渠道功能的持续完善。

---
*报告生成时间: 2026-05-01 | 数据来源: GitHub LobsterAI Repository*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-05-01
**项目**：moltis-org/moltis
**数据范围**：过去 24 小时

---

## 1. 今日速览

Moltis 项目今日保持高度活跃，共处理 **10 条 Issues**（4 新开/活跃，6 已关闭）和 **21 条 PRs**（3 待合并，18 已合并/关闭）。项目发布了 **v20260430.01**，并完成了多项重要功能迭代，包括新增 Zen 多协议 Provider、远程沙箱支持、Session 标题自动生成等。今日社区聚焦于 UI/UX 问题的修复（滚动、布局、剪贴板等），同时推进了代码索引自动触发、Skill 使用遥测等高级功能。项目整体健康度良好，合并率高，积压较少。

---

## 2. 版本发布

### v20260430.01

**发布时间**：2026-04-30
**类型**：常规版本更新

本次版本包含多项功能增强和问题修复，主要亮点：

| 类别 | 内容 |
|------|------|
| **新 Provider** | 新增 DeepInfra Provider，支持 8 款主流模型（Llama 4、DeepSeek V3/R1、Qwen3 等） |
| **沙箱增强** | 支持远程沙箱和多后端（Vercel、Daytona、Firecracker），解决云端部署中 Docker-in-Docker 不可用的问题 |
| **Session 管理** | 新增自动生成 Session 标题功能（基于 LLM 调用，3-8 词描述） |
| **Skill 遥测** | 新增按 Skill 使用统计，跟踪读写次数并通过 `/insights` 展示 |
| **UI 改进** | 修复 system-notice 文本溢出、滚动行为、剪贴板按钮在非安全上下文失效等问题 |
| **信号处理** | 完善 SIGTERM/SIGHUP 处理，支持 Docker 优雅关闭 |

**破坏性变更**：无
**迁移注意事项**：无

---

## 3. 项目进展

过去 24 小时共合并/关闭 **18 条 PRs**，以下是重要进展：

### 功能增强

| PR | 作者 | 说明 | 关联 Issue |
|----|------|------|------------|
| [#944](https://github.com/moltis-org/moltis/pull/944) | @gaarf | **新增 Zen Provider**（opencode.ai 多协议代理，支持 GPT/Claude/Gemini 等） | - |
| [#942](https://github.com/moltis-org/moltis/pull/942) | @penso | **远程沙箱支持**（Vercel、Daytona、Firecracker），解决云端部署痛点 | - |
| [#933](https://github.com/moltis-org/moltis/pull/933) | @penso | **自动生成 Session 标题**，提升会话管理效率 | - |
| [#935](https://github.com/moltis-org/moltis/pull/935) | @penso | **Skill 使用遥测**，支持 `/insights` 查看使用统计 | - |
| [#932](https://github.com/moltis-org/moltis/pull/932) | @penso | **消息操作栏**：Copy/Retry/Fork 按钮，提升交互体验 | - |
| [#926](https://github.com/moltis-org/moltis/pull/926) | @penso | **新增 5 个斜杠命令**：`/btw`、`/fast`、`/insights`、`/steer`、`/queue` | - |
| [#943](https://github.com/moltis-org/moltis/pull/943) | @gaarf | **语音按钮条件显示**，仅在 STT/TTS 启用时显示 | - |
| [#921](https://github.com/moltis-org/moltis/pull/921) | @Cstewart-HC | **代码索引自动触发**（Spec 007），项目文件变更时自动重新索引 | - |

### 问题修复

| PR | 作者 | 修复内容 | 关联 Issue |
|----|------|----------|------------|
| [#925](https://github.com/moltis-org/moltis/pull/925) | @Cstewart-HC | 修复滚动行为回归：移除 ResizeObserver 滚动劫持 | [#922](https://github.com/moltis-org/moltis/issues/922) |
| [#941](https://github.com/moltis-org/moltis/pull/941) | @penso | 修复 system-notice 文本溢出圆角容器 | [#938](https://github.com/moltis-org/moltis/issues/938) |
| [#940](https://github.com/moltis-org/moltis/pull/940) | @penso | 修复 SIGTERM 处理，支持 Docker 优雅关闭 | [#939](https://github.com/moltis-org/moltis/issues/939) |
| [#936](https://github.com/moltis-org/moltis/pull/936) | @gaarf | 修复非安全上下文下剪贴板按钮失效 | - |
| [#931](https://github.com/moltis-org/moltis/pull/931) | @penso | 修复大模型（100B+）30 秒超时导致发现失败 | [#919](https://github.com/moltis-org/moltis/issues/919) |

### 依赖与基础设施

| PR | 作者 | 说明 |
|----|------|------|
| [#928](https://github.com/moltis-org/moltis/pull/928) | dependabot | 升级 marked 18.0.0 → 18.0.2 |
| [#259](https://github.com/moltis-org/moltis/pull/259) | blacksmith-sh | 迁移 GitHub Actions 到 Blacksmith runners |

---

## 4. 社区热点

### 今日活跃讨论

| 类型 | 编号 | 标题 | 作者 | 评论数 | 亮点 |
|------|------|------|------|--------|------|
| **Issue** | [#922](https://github.com/moltis-org/moltis/issues/922) | Chat scrolling isn't working | @bsarkisov | 3 | 已修复（#925），讨论了 ResizeObserver 滚动劫持问题 |
| **Issue** | [#266](https://github.com/moltis-org/moltis/issues/266) | Feature Request: Native 9router support | @M2noa | 2 | 功能请求：集成 9router AI 代理/路由器 |

### 热点分析

1. **UI/UX 问题持续受关注**：Chat 滚动问题（#922）引发 3 条评论，开发者快速响应并合并修复（#925），体现了高效的迭代节奏。

2. **Provider 生态扩展需求**：9router 功能请求（#266）获得关注，该工具专为 Claude Code、Codex、Cursor 等 AI 编码工具设计，支持 OpenAI/Claude 多提供商路由。

3. **今日 Open PRs 预览**：
   - [#944](https://github.com/moltis-org/moltis/pull/944)：Zen Provider（待合并）
   - [#943](https://github.com/moltis-org/moltis/pull/943)：语音按钮条件显示（待合并）
   - [#942](https://github.com/moltis-org/moltis/pull/942)：远程沙箱支持（待合并）

---

## 5. Bug 与稳定性

### 今日报告的 Bug

| 严重程度 | 编号 | 标题 | 作者 | 状态 | 是否有 Fix |
|----------|------|------|------|------|------------|
| 🟡 中 | [#947](https://github.com/moltis-org/moltis/issues/947) | [Bug]: 通用 Bug 报告 | @bashrusakh | OPEN | 无 |
| 🟡 中 | [#946](https://github.com/moltis-org/moltis/issues/946) | chat doesn't auto-scroll when at end | @vvuk | OPEN | 无（疑似 #922 回归） |
| 🟡 中 | [#945](https://github.com/moltis-org/moltis/issues/945) | chat layout seems broken -- too wide | @vvuk | OPEN | 无 |
| 🟡 中 | [#937](https://github.com/moltis-org/moltis/issues/937) | settings/terminal tmux error | @gaarf | OPEN | 无 |

### 已修复的 Bug

| 编号 | 标题 | 修复 PR | 状态 |
|------|------|---------|------|
| [#922](https://github.com/moltis-org/moltis/issues/922) | Chat scrolling isn't working | [#925](https://github.com/moltis-org/moltis/pull/925) | ✅ 已合并 |
| [#939](https://github.com/moltis-org/moltis/issues/939) | SIGTERM isn't handled | [#940](https://github.com/moltis-org/moltis/pull/940) | ✅ 已合并 |
| [#938](https://github.com/moltis-org/moltis/issues/938) | system-notice text overflows | [#941](https://github.com/moltis-org/moltis/pull/941) | ✅ 已合并 |
| [#919](https://github.com/moltis-org/moltis/issues/919) | Model discovery fails after 30 sec | [#931](https://github.com/moltis-org/moltis/pull/931) | ✅ 已合并 |
| [#927](https://github.com/moltis-org/moltis/issues/927) | MCP page missing re-authenticate button | - | ✅ 已关闭（无修复 PR） |

### 稳定性评估

**整体评价：良好**
- 今日报告 4 个新 Bug，均为 UI/UX 相关（滚动、布局、tmux 错误）
- 滚动问题（#946）疑似 #922 回归，需关注
- 维护者响应迅速，历史积压 Bug 均已修复或关闭

---

## 6. 功能请求与路线图信号

### 今日功能请求

| 编号 | 请求内容 | 作者 | 状态 | 纳入可能性 |
|------|----------|------|------|------------|
| [#266](https://github.com/moltis-org/moltis/issues/266) | **Native 9router 支持**：集成通用 AI 代理路由器，支持 Claude Code/Codex/Cursor | @M2noa | OPEN | 🟢 高（已有 Zen Provider 类似实现） |

### 路线图信号分析

从今日 PR 活动可以推断项目近期方向：

1. **Provider 生态扩展**：Zen Provider（#944）即将合并，9router 支持请求（#266）表明社区对多 Provider 统一接入的需求强烈。

2. **云端部署优化**：远程沙箱支持（#942）解决了 Vercel、Fly.io、Render 等平台的部署痛点，这是向云原生迈进的重要一步。

3. **智能化会话管理**：自动标题生成（#933）、Skill 遥测（#935）等功能表明项目在向更智能的个人助手方向演进。

4. **交互体验提升**：消息操作栏（#932）、语音按钮条件显示（#943）、多个斜杠命令（#926）共同提升日常使用体验。

---

## 7. 用户反馈摘要

### 从 Issues 评论中提炼

| 场景 | 反馈 | 来源 |
|------|------|------|
| **滚动体验** | 用户反馈 Chat 滚动行为异常，无法自由滚动查看历史消息 | [#922](https://github.com/moltis-org/moltis/issues/922) |
| **布局问题** | 用户报告 Chat 布局过宽，影响阅读体验 | [#945](https://github.com/moltis-org/moltis/issues/945) |
| **模型发现** | 大模型（100B+）加载超时导致模型发现失败，影响使用 | [#919](https://github.com/moltis-org/moltis/issues/919) |
| **OAuth 体验** | MCP 页面缺少重新认证按钮，OAuth token 过期后无法恢复 | [#927](https://github.com/moltis-org/moltis/issues/927) |
| **信号处理** | Docker 环境下无法优雅关闭，用户需要强制终止 | [#939](https://github.com/moltis-org/moltis/issues/939) |

### 痛点分析

1. **UI 稳定性**：滚动和布局问题反复出现，暗示前端测试覆盖可能不足
2. **大模型支持**：100B+ 模型的加载时间问题需要更优雅的处理方案
3. **部署体验**：云端部署（Docker、非本地环境）的兼容性仍需加强

---

## 8. 待处理积压

### 长期未响应的 Issues

| 编号 | 标题 | 创建时间 | 最后更新 | 状态 | 建议 |
|------|------|----------|----------|------|------|
| [#266](https://github.com/moltis-org/moltis/issues/266) | Feature Request: Native 9router support | 2026-02-28 | 2026-04-30 | OPEN | 已有 Zen Provider 类似实现，建议评估合并可能性 |

### 建议关注

1. **9router 功能请求**（#266）：创建于 2026-02-28，已讨论但未实现。考虑到 Zen Provider（#944）即将合并，建议评估是否可复用类似架构。

2. **今日 Open Bug 监控**：
   - [#947](https://github.com/moltis-org/moltis/issues/947)：通用 Bug，需确认具体问题
   - [#946](https://github.com/moltis-org/moltis/issues/946)：滚动问题疑似回归
   - [#945](https://github.com/moltis-org/moltis/issues/945)：布局问题
   - [#937](https://github.com/moltis-org/moltis/issues/937)：tmux 配置错误

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 4 |
| Issues 已关闭 | 6 |
| PRs 待合并 | 3 |
| PRs 已合并/关闭 | 18 |
| 新版本发布 | 1 |
| 合并率 | 85.7%（18/21） |

---

*报告生成时间：2026-05-01*
*数据来源：GitHub moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期**: 2026-05-01
**项目**: CoPaw (QwenPaw) | agentscope-ai/CoPaw
**数据周期**: 过去 24 小时

---

## 1. 今日速览

CoPaw 项目在过去 24 小时保持高度活跃，共处理 **50 条 Issues**（17 新开/活跃，33 关闭）和 **15 条 PRs**（1 待合并，14 已合并/关闭），并发布了 **v1.1.5.post1** 小版本。社区重点关注安全漏洞修复（Windows 路径遍历）、企业微信通道稳定性、以及前端性能优化。整体项目健康度良好，Issue 关闭率高达 66%，PR 合并效率较高。

---

## 2. 版本发布

### v1.1.5.post1 ✅ 已发布

| 项目 | 内容 |
|------|------|
| **版本号** | v1.1.5.post1 |
| **发布时间** | 2026-04-30 |
| **PR** | [#3970](https://github.com/agentscope-ai/QwenPaw/pull/3970) |

**主要变更**:
- **版本号更新**: 正式标记为 v1.1.5.post1
- **新功能**: 引入 `FeishuCardHandler`，将飞书工具审批从文本命令流程升级为**一键交互卡片**（Approve/Deny 按钮）
- **文档增强**: 在审批卡片中添加文档链接，指导用户订阅 `card.action.trigger`

> ⚠️ **迁移注意**: 飞书用户需确保已订阅 `card.action.trigger` 事件，否则 Approve/Deny 按钮将静默失败。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR | 状态 | 贡献者 | 主题 | 意义 |
|----|------|--------|------|------|
| [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) | ✅ CLOSED | @zhijianma | **安全修复**: 防止路径遍历攻击，拒绝绝对路径静态文件 | 🔴 高优先级安全修复 |
| [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) | ✅ CLOSED | @hongxicheng | 飞书交互卡片处理器 + 工具审批按钮化 | ✨ 新功能落地 |
| [#3300](https://github.com/agentscope-ai/QwenPaw/pull/3300) | ✅ CLOSED | @octo-patch | 修复企业微信 `send_file_to_user` 跨事件循环错误 | 🐛 长期 Bug 修复 |
| [#3978](https://github.com/agentscope-ai/QwenPaw/pull/3978) | ✅ CLOSED | @celestialhorse51D | 修复企业微信跨循环运行时错误 | 🐛 稳定性修复 |
| [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) | ✅ CLOSED | @hongxicheng | 避免企业微信双重重连竞争和跨循环断开 | 🐛 稳定性修复 |
| [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) | ✅ CLOSED | @hongxicheng | 保持占位流活跃，防止 "Thinking..." 卡死 | 🐛 UX 修复 |
| [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948) | ✅ CLOSED | @hongxicheng | 企业微信群聊 `share_session_in_group` 开关 | ✨ 新配置选项 |
| [#3981](https://github.com/agentscope-ai/QwenPaw/pull/3981) | ✅ CLOSED | @bowenliang123 | 迁移废弃的 antd v5 API，消除控制台警告 | 🔧 代码质量 |
| [#3960](https://github.com/agentscope-ai/QwenPaw/pull/3960) | ✅ CLOSED | @bowenliang123 | 修复 CodeMirror 工具调用块长行换行 | 🔧 前端样式 |
| [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) | ✅ CLOSED | @zhenai1314521 | 切换 Agent 时恢复聊天会话 | 🐛 UX 修复 |
| [#3959](https://github.com/agentscope-ai/QwenPaw/pull/3959) | ✅ CLOSED | @zhenai1314521 | 导航离开时保持 Chat 组件挂载 | 🐛 UX 修复 |
| [#3982](https://github.com/agentscope-ai/QwenPaw/pull/3982) | ✅ CLOSED | @hongxicheng | 飞书审批卡片添加文档提示链接 | 📖 文档增强 |

**待合并 PR**:
| PR | 状态 | 贡献者 | 主题 |
|----|------|--------|------|
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | 🔄 Under Review | @celestialhorse51D | 统一微信/企业微信标识符（`weixin` vs `wechat`） |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 状态 | 主题 | 热度分析 |
|-------|------|------|------|----------|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | 12 | 🔴 CLOSED | **Windows 服务器任意文件遍历漏洞** | 🔥🔥🔥 安全漏洞引发社区高度关注，已修复 |
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | 10 | 🔴 CLOSED | Debian 页面冻结，需重启服务 | 🔥🔥 高优先级 Bug，已关闭但根因待确认 |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | 7 | 🔴 CLOSED | 企业微信频繁断开连接 | 🔥🔥 长期问题，社区反馈强烈 |
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 6 | 🟡 OPEN | 超多轮对话（200+）页面滚动卡顿 | 🔥 性能问题，需前端优化 |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | 5 | 🟡 OPEN | Agent workspace 错误切换导致身份混淆 | 🔥 严重逻辑 Bug，需优先处理 |

### 热点分析

1. **安全漏洞 (#3955)**: Windows 服务器任意文件遍历漏洞获得最多关注（12 条评论），已通过 [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) 修复。社区对安全问题响应迅速。

2. **企业微信稳定性**: 多个 Issue 涉及企业微信通道问题（#2757, #3937, #3296），社区持续反馈断开、文件发送失败等问题。维护者已通过多个 PR 修复事件循环冲突问题。

3. **前端性能**: #3350 反映超长对话场景下页面卡顿，这是 AI Agent 项目的典型场景，需要关注虚拟滚动或分页加载优化。

4. **Workspace 隔离问题 (#3957)**: 主控 Agent 收到其他 Agent 消息后 workspace 错误切换，导致身份混淆，这是严重的逻辑 Bug，需优先处理。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|--------|-------|------|------|--------|
| 🔴 **Critical** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | ✅ 已修复 | Windows 服务器任意文件遍历漏洞 | [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) |
| 🔴 **Critical** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | 🟡 OPEN | Agent workspace 错误切换导致身份混淆 | 无 |
| 🔴 **Critical** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | 🟡 OPEN | 会话空闲清理机制错误取消正在运行的任务 | 无 |
| 🟠 **High** | [#3971](https://github.com/agentscope-ai/QwenPaw/issues/3971) | ✅ 已关闭 | Windows exe 首次运行白屏（7 台机器复现） | 无 |
| 🟠 **High** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | ✅ 已关闭 | Debian 页面冻结无法刷新 | 无 |
| 🟠 **High** | [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) | 🟡 OPEN | Running Config 设置页面返回 404 | 无 |
| 🟠 **High** | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | 🟡 OPEN | `FunctionCallOutput` 验证错误 + `loop_config.json` 损坏 | 无 |
| 🟡 **Medium** | [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | 🟡 OPEN | memory_search 报错 `AttributeError: 'list' object has no attribute 'get'` | 无 |
| 🟡 **Medium** | [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | 🟡 OPEN | Console 页面对话多次中断 | 无 |
| 🟡 **Medium** | [#3965](https://github.com/agentscope-ai/QwenPaw/issues/3965) | ✅ 已关闭 | 通道消息对话窗口没有显示输入 | 无 |

### 稳定性总结

- **已修复**: 4 个 Critical/High Bug（路径遍历、企业微信循环错误等）
- **待处理**: 7 个 Critical/High Bug 仍处于 OPEN 状态
- **回归风险**: Windows exe 白屏问题影响 7 台测试机器，需确认是否为打包问题

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 状态 | 请求 | 潜在价值 | 关联 PR |
|-------|------|------|----------|---------|
| [#3972](https://github.com/agentscope-ai/QwenPaw/issues/3972) | ✅ CLOSED | `/ralph-loop` 魔法命令，实现自引用任务循环执行 | ⭐⭐⭐ 高需求 | 无 |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) | 🟡 OPEN | 引入 Hermes 理念实现 Agent 自动进化 | ⭐⭐⭐ 战略方向 | 无 |
| [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) | 🟡 OPEN | Windows 客户端关闭后后台运行（系统托盘） | ⭐⭐ 用户体验 | 无 |
| [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | 🟡 OPEN | 核心配置区与用户工作区分离 | ⭐⭐ 架构优化 | 无 |
| [#2434](https://github.com/agentscope-ai/QwenPaw/issues/2434) | ✅ 已关闭 | Console Web 支持粘贴图片/文件 | ⭐⭐ 功能增强 | 无 |
| [#3146](https://github.com/agentscope-ai/QwenPaw/issues/3146) | ✅ 已关闭 | 对话界面宽屏切换 | ⭐ UI 优化 | 无 |
| [#3038](https://github.com/agentscope-ai/QwenPaw/issues/3038) | ✅ 已关闭 | 聊天界面添加时间戳 | ⭐ UI 优化 | 无 |

### 路线图信号分析

1. **Agent 自主性增强**: #3972 (`/ralph-loop`) 和 #3516 (Hermes 自动进化) 反映用户对 Agent 自主执行能力的期待
2. **桌面客户端体验**: #3979 要求 Windows 客户端支持系统托盘后台运行，这是桌面应用的标配功能
3. **工作区管理**: #3967 建议分离核心配置区和用户工作区，降低误删风险
4. **前端增强**: 时间戳、宽屏模式、粘贴上传等 UI 优化需求持续存在

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | Issue | 反馈内容 |
|------|-------|----------|
| **企业微信不稳定** | [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | 配置企业微信频道后经常断开，需重新保存配置才能恢复，已配置心跳仍无效 |
| **长对话卡顿** | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 工程级代码迭代场景下，200+ 轮对话导致页面滚动卡顿，希望提供优化方案 |
| **工作区混乱** | [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | 核心配置和用户文档混在一起，普通用户难以区分，容易误删导致系统不可用 |
| **历史指令泄露** | [#3975](https://github.com/agentscope-ai/QwenPaw/issues/3975) | 按方向键查看历史消息时显示系统内部指令（如 `[Mission active]`），影响用户体验 |
| **Windows 安装问题** | [#3971](https://github.com/agentscope-ai/QwenPaw/issues/3971) | v1.1.4 Windows exe 安装包首次运行白屏，7 台机器全部复现 |

### 用户满意度信号

- ✅ **满意点**: 飞书交互卡片功能获得正面反馈，工具审批按钮化提升了操作效率
- ⚠️ **不满点**: 企业微信通道稳定性、Debian 兼容性、Windows 安装体验需要改进

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 主题 | 等待时间 | 优先级 |
|-------|----------|------|------|----------|--------|
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | 2026-04-01 | 🔴 CLOSED | 企业微信频繁断开 | ~30 天 | 🟠 High |
| [#3350](https://github

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**报告日期**：2026-05-01
**项目仓库**：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)
**数据来源**：GitHub API

---

## 1. 今日速览

今日（2026-05-01）EasyClaw 项目整体呈现**低活跃度**状态。过去24小时内无 Issue 和 Pull Request 的创建、更新或关闭操作，社区互动基本停滞。唯一重大事件是 **v1.8.10 版本正式发布**，主要聚焦于 macOS 安装体验优化，修复了 Gatekeeper 安全机制导致的用户体验问题。鉴于无新增功能开发或 bug 修复，建议关注后续版本迭代节奏是否正常。

---

## 2. 版本发布

### ✅ v1.8.10 - RivonClaw v1.8.10

**发布时间**：2026-05-01
**发布类型**：常规迭代
**仓库链接**：[v1.8.10 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.10)

#### 更新内容

| 类别 | 描述 |
|------|------|
| **Bug 修复** | 修复 macOS Gatekeeper 安全机制导致的 `"RivonClaw" is damaged and can't be opened` 误报问题 |
| **用户体验** | 提供清晰的错误提示文案，说明文件未实际损坏，仅为签名验证问题 |

#### 破坏性变更
**无** — 本次更新完全向后兼容。

#### 迁移注意事项
对于从旧版本升级的用户，若在 macOS 上遇到安装后无法启动的问题，请按以下步骤操作：

```bash
# 方法一：终端命令解除隔离
xattr -d com.apple.quarantine /Applications/RivonClaw.app

# 方法二：右键手动打开
# 在 Finder 中找到应用 → 右键点击"打开" → 确认提示框
```

#### 评估
本次更新属于**体验优化型发布**，未涉及核心功能变更，表明项目当前处于稳定维护阶段。

---

## 3. 项目进展

过去24小时内 **无 Pull Request 活动**。

| 指标 | 数量 |
|------|------|
| 新开 PR | 0 |
| 待合并 PR | 0 |
| 已合并/关闭 PR | 0 |

**分析**：项目开发节奏可能受节假日、维护者时间安排或版本规划影响，建议持续观察未来3-5日的活动趋势。

---

## 4. 社区热点

过去24小时内 **无社区讨论活动**。

| 指标 | 数量 |
|------|------|
| 新开 Issue | 0 |
| 活跃 Issue | 0 |
| 已关闭 Issue | 0 |

**说明**：无新增讨论，无法进行热点分析。建议关注历史 Issue 中是否存在长期未关闭的高关注度话题。

---

## 5. Bug 与稳定性

过去24小时内 **无 Bug 报告**。

#### 稳定性评估

| 维度 | 状态 |
|------|------|
| 新报告 Bug | 0 |
| 崩溃/回归问题 | 0 |
| 待修复 Bug | 0 |

**结论**：项目当前无已知稳定性风险。

---

## 6. 功能请求与路线图信号

过去24小时内 **无新增功能请求**。

由于缺乏近期 Issue 数据，无法判断用户社区的功能诉求方向。建议维护者参考以下方向探索路线图：

- macOS 签名/公证流程优化（从 v1.8.10 修复方向推测）
- 跨平台安装体验一致性
- CLI 工具链完善

---

## 7. 用户反馈摘要

过去24小时内 **无用户反馈数据**。

#### 历史反馈参考（基于 v1.8.10 发布说明推断）

| 反馈类型 | 可能诉求 |
|----------|----------|
| **安装体验** | macOS 用户频繁遭遇 Gatekeeper 拦截，需要明确指引 |
| **文档完善** | 需要在 README 或官网提供多语言（中文/英文）故障排除指南 |

---

## 8. 待处理积压

基于当前数据，**无积压项可识别**。

#### 建议关注事项

| 优先级 | 事项 | 说明 |
|--------|------|------|
| 🔴 高 | 版本发布频率监控 | 建议确认 v1.8.10 是否为正常迭代周期内的版本 |
| 🟡 中 | 长期未响应 Issue | 建议扫描历史 Issue，识别是否存在用户等待回复的问题 |
| 🟢 低 | 文档更新 | 建议将 v1.8.10 的 macOS 安装修复方案同步至 README |

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新 Issue | 0 | ➖ 持平 |
| 新 PR | 0 | ➖ 持平 |
| 版本发布 | 1 | ⬆️ 新增 |
| 合并 PR | 0 | ➖ 持平 |

---

## 📌 维护者行动建议

1. **确认版本节奏**：核实 v1.8.10 是否按计划发布，评估开发进度是否正常
2. **扫描积压 Issue**：检查是否存在长期未回复的用户问题，提升社区满意度
3. **更新文档**：将 macOS 安装问题解决方案补充至项目 README

---

*报告生成时间：2026-05-01 | 数据覆盖范围：过去 24 小时*
*如需更详细的趋势分析，建议提供更长时间窗口的数据（7天/30天）*

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

# NemoClaw 项目动态日报

**报告日期：** 2026-05-01
**项目：** NVIDIA/NemoClaw
**数据区间：** 过去 24 小时

---

## 1. 今日速览

NemoClaw 今日保持高度活跃，共处理 **50 条 Issues**（新开/活跃 37 条，关闭 13 条）和 **50 条 PRs**（待合并 19 条，已合并/关闭 31 条）。项目持续推进 CLI 现代化改造，多个 oclif 迁移 PR 进入待合并状态，同时新增 GPU passthrough 功能预览。社区讨论焦点集中在 Nightly E2E 测试失败（#1992，294 条评论）和 Ollama 本地推理集成问题上。整体项目健康度良好，功能迭代稳步推进，但部分跨平台回归问题仍需关注。

---

## 2. 版本发布

**今日无新版本发布。**

最近一个版本为 v0.0.32，相关文档更新 PR（#2784）已合并，为版本发布做好准备。

---

## 3. 项目进展

### 3.1 今日合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#2793](https://github.com/NVIDIA/NemoClaw/pull/2793) | docs(skills): improve docs to skills conversion to take in priority, and refresh skills | ✅ 已合并 | ⭐⭐⭐ | 增强文档到技能转换器，支持优先级配置 |
| [#2784](https://github.com/NVIDIA/NemoClaw/pull/2784) | docs: prepare documentation for v0.0.32 | ✅ 已合并 | ⭐⭐⭐ | v0.0.32 文档准备就绪 |
| [#2777](https://github.com/NVIDIA/NemoClaw/pull/2777) | fix(recovery): keep gateway guard preloads active after respawn | ✅ 已合并 | ⭐⭐⭐ | 修复网关守护进程恢复问题 |
| [#2732](https://github.com/NVIDIA/NemoClaw/pull/2732) | chore(skills): sync generated skills | ✅ 已合并 | ⭐ | 自动同步生成技能 |
| [#2736](https://github.com/NVIDIA/NemoClaw/pull/2736) | chore(skills): sync generated skills | ✅ 已合并 | ⭐ | 自动同步生成技能 |
| [#2785](https://github.com/NVIDIA/NemoClaw/pull/2785) | chore(skills): sync generated skills | ✅ 已合并 | ⭐ | 自动同步生成技能 |
| [#2783](https://github.com/NVIDIA/NemoClaw/pull/2783) | chore(skills): sync generated skills | ✅ 已合并 | ⭐ | 自动同步生成技能 |
| [#2782](https://github.com/NVIDIA/NemoClaw/pull/2782) | chore(skills): sync generated skills | ✅ 已合并 | ⭐ | 自动同步生成技能 |

### 3.2 待合并的重要 PRs

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#2795](https://github.com/NVIDIA/NemoClaw/pull/2795) | feat(onboard): add `--gpu` flag for GPU passthrough into sandbox | 🔄 待合并 | ⭐⭐⭐⭐ | 新增 GPU 穿透功能，支持沙箱内 CUDA 计算 |
| [#2781](https://github.com/NVIDIA/NemoClaw/pull/2781) | fix: repair NemoHermes first-run onboarding | 🔄 待合并 | ⭐⭐⭐ | 修复 NemoHermes 首次运行引导问题 |
| [#2788](https://github.com/NVIDIA/NemoClaw/pull/2788) | refactor(cli): migrate maintenance commands to oclif | 🔄 待合并 | ⭐⭐⭐ | CLI 现代化：维护命令迁移 |
| [#2787](https://github.com/NVIDIA/NemoClaw/pull/2787) | refactor(cli): migrate sandbox inspection commands to oclif | 🔄 待合并 | ⭐⭐⭐ | CLI 现代化：沙箱检查命令迁移 |
| [#2786](https://github.com/NVIDIA/NemoClaw/pull/2786) | refactor(cli): migrate credentials commands to oclif | 🔄 待合并 | ⭐⭐⭐ | CLI 现代化：凭证命令迁移 |
| [#2776](https://github.com/NVIDIA/NemoClaw/pull/2776) | refactor(cli): migrate debug uninstall and gateway-token to oclif | 🔄 待合并 | ⭐⭐⭐ | CLI 现代化：调试/卸载/网关令牌迁移 |
| [#2775](https://github.com/NVIDIA/NemoClaw/pull/2775) | refactor(cli): migrate status and tunnel commands to oclif | 🔄 待合并 | ⭐⭐⭐ | CLI 现代化：状态/隧道命令迁移 |
| [#2498](https://github.com/NVIDIA/NemoClaw/pull/2498) | fix(onboard): display port override hint in dashboard port conflict error | 🔄 待合并 | ⭐⭐ | 改进端口冲突错误提示 |
| [#2050](https://github.com/NVIDIA/NemoClaw/pull/2050) | fix(cli): add nemoclaw `<name>` recover command | 🔄 待合并 | ⭐⭐⭐ | 新增沙箱恢复命令 |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | fix(security): harden config set SSRF validation | 🔄 待合并 | ⭐⭐⭐⭐ | 安全加固：SSRF 防护 |
| [#2646](https://github.com/NVIDIA/NemoClaw/pull/2646) | fix(recovery): add connect probe recovery path | 🔄 待合并 | ⭐⭐⭐ | 新增连接探测恢复路径 |
| [#2693](https://github.com/NVIDIA/NemoClaw/pull/2693) | fix(sandbox): graceful EACCES in mutateConfigFile | 🔄 待合并 | ⭐⭐ | 修复配置修改权限问题 |

**项目进展总结：**
CLI 现代化改造进入关键阶段，oclif 迁移工作已覆盖维护命令、沙箱检查、凭证管理、状态/隧道等多个模块，预计完成后将显著提升 CLI 一致性和可维护性。GPU passthrough 功能的加入标志着 NemoClaw 向高性能计算场景拓展。安全方面，SSRF 防护加固正在进行中。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 状态 | 热度分析 |
|------------|------|--------|------|----------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | [bug, CI/CD, E2E] Nightly E2E failed | **294** | 🔴 OPEN | **最高热度** - CI/CD 基础设施问题，影响所有开发者 |
| [#1551](https://github.com/NVIDIA/NemoClaw/issues/1551) | Docs: recommend host.docker.internal bridge path | 7 | ✅ CLOSED | 文档改进建议，已解决 |
| [#2733](https://github.com/NVIDIA/NemoClaw/issues/2733) | Tool-call reliability: Ollama tool-call-leak failure | 5 | 🔴 OPEN | 本地模型集成痛点 |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | local-inference policy preset missing Ollama ports | 5 | 🔴 OPEN | 端口配置遗漏问题 |

### 4.2 热点分析

**#1992 Nightly E2E 失败（294 条评论）**
这是今日绝对焦点问题。GitHub Actions 自动化测试持续失败，大量开发者参与讨论根因和解决方案。Run 日志和 Artifacts 已提供，但问题尚未解决。建议优先处理此问题以恢复 CI/CD 流程健康度。

**Ollama 本地推理集成问题（#2733, #2199, #2616）**
多个 Issue 聚焦 Ollama 集成失败场景：
- 工具调用可靠性问题（#2733）
- 端口配置缺失（#2199）
- HTTP_PROXY 环境变量污染（#2616）

这表明 Ollama 作为推荐本地推理后端时存在系统性集成问题，需要统一梳理和修复。

---

## 5. Bug 与稳定性

### 5.1 按严重程度排列的 Bug 报告

#### 🔴 高优先级（影响核心功能/多人使用）

| Issue 编号 | 标题 | 平台 | 是否有 Fix PR | 说明 |
|------------|------|------|---------------|------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E failed | All | ❌ | CI/CD 基础设施故障 |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | perf: investigate and reduce networking latency | Windows/WSL | ❌ | 性能回归，onboard 缓慢 |
| [#2604](https://github.com/NVIDIA/NemoClaw/issues/2604) | nemoclaw status omits Connected/Inference fields | DGX Spark, Ubuntu | ❌ | 状态显示不完整 |
| [#1912](https://github.com/NVIDIA/NemoClaw/issues/1912) | Slack Bot Token accepted without validation | All | ❌ | 安全问题：无效 token 被接受 |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | SSRF validation (PR) | - | ✅ #2414 | 安全加固 PR 待合并 |

#### 🟡 中优先级（影响特定场景）

| Issue 编号 | 标题 | 平台 | 是否有 Fix PR | 说明 |
|------------|------|------|---------------|------|
| [#2733](https://github.com/NVIDIA/NemoClaw/issues/2733) | Ollama tool-call-leak failure | All (Ollama) | ❌ | 工具调用静默失败 |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | local-inference policy missing Ollama ports | All | ❌ | 沙箱无法访问 Ollama |
| [#2616](https://github.com/NVIDIA/NemoClaw/issues/2616) | Ollama inherits host HTTP_PROXY without NO_PROXY | macOS | ❌ | 本地推理通过代理失败 |
| [#2097](https://github.com/NVIDIA/NemoClaw/issues/2097) | nemoclaw lacks way to remove/stop messaging channels | Brev | ❌ | 消息渠道管理缺失 |
| [#1825](https://github.com/NVIDIA/NemoClaw/issues/1825) | nemoclaw stop doesn't stop Telegram/Discord/Slack | All | ❌ | 停止命令不完整 |
| [#2681](https://github.com/NVIDIA/NemoClaw/issues/2681) | Enable Dreaming fails with EACCES | DGX Spark | ✅ #2693 | 权限问题，已修复 PR |

#### 🟢 低优先级（特定环境/边缘情况）

| Issue 编号 | 标题 | 平台 | 是否有 Fix PR | 说明 |
|------------|------|------|---------------|------|
| [#2767](https://github.com/NVIDIA/NemoClaw/issues/2767) | npm install hangs with ECONNRESET (regression) | macOS | ❌ | v0.0.28+ 回归 |
| [#2515](https://github.com/NVIDIA/NemoClaw/issues/2515) | npm install silently succeeds when npm link fails | Ubuntu | ❌ | 开发环境安装问题 |
| [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) | Gateway fails with cpuset cgroup (v2) on WSL2 | WSL2 | ❌ | WSL2 兼容性问题 |
| [#2766](https://github.com/NVIDIA/NemoClaw/issues/2766) | Telegram bot hangs at starting provider | All | ❌ | Telegram 集成卡死 |

### 5.2 回归问题追踪

| Issue 编号 | 版本 | 回归描述 | 状态 |
|------------|------|----------|------|
| [#2767](https://github.com/NVIDIA/NemoClaw/issues/2767) | v0.0.28+ | macOS npm install 大文件下载 ECONNRESET | 🔴 OPEN |
| [#2177](https://github.com/NVIDIA/NemoClaw/issues/2177) | v0.0.32 | presets do not apply correctly | 🔴 OPEN |

---

## 6. 功能请求与路线图信号

### 6.1 新功能请求

| Issue 编号 | 标题 | 类型 | 提议者 | 评估 | 可能纳入版本 |
|------------|------|------|--------|------|--------------|
| [#2795](https://github.com/NVIDIA/NemoClaw/pull/2795) | feat(onboard): add `--gpu` flag for GPU passthrough | ⭐⭐⭐⭐ 功能 | @prekshivyas | **高价值** - 扩展使用场景 | v0.0.33+ |
| [#642](https://github.com/NVIDIA/NemoClaw/issues/642) | feat(cli): add self-update command | ⭐⭐⭐ 功能 | @vasanth53 | 用户体验改进 | 规划中 |
| [#2779](https://github.com/NVIDIA/NemoClaw/issues/2779) | Allow alternate port (8080) and Address 0.0.0.0 | ⭐⭐ 功能 | @fmotta | 灵活性增强 | 待评估 |
| [#2390](https://github.com/NVIDIA/NemoClaw/issues/2390) | refactor(arch): introduce Dashboard Delivery Contract | ⭐⭐⭐ 架构 | @jyaunches | 架构改进，提高可维护性 | 规划中 |

### 6.2 路线图信号分析

**CLI 现代化（oclif 迁移）**
多个 PR（#2775-#2788）正在推进 CLI 迁移至 oclif 框架，这是重要的技术债务清理工作，完成后将统一命令解析、验证和帮助系统。

**GPU 支持**
#2795 添加 `--gpu` flag 表明项目向高性能计算场景拓展，支持沙箱内 CUDA 工作负载。

**安全加固**
#2414 SSRF 防护加固正在进行，#1912 Slack token 验证问题也需关注安全角度。

---

## 7. 用户反馈摘要

### 7.1 真实痛点提炼

#### 痛点 1：Ollama 本地推理集成体验差
- **来源：** #2733, #2199, #2616
- **场景：** 用户使用 `nemoclaw onboard` 选择 Ollama 作为本地推理后端
- **问题：**
  - 工具调用静默失败（#2733）
  - 沙箱无法访问 Ollama 端口（#2199）
  - HTTP_PROXY 环境变量导致 localhost 推理失败（#2616）
- **用户影响：** 本地推理作为推荐功能，实际使用障碍重重

#### 痛点 2：CI/CD 基础设施不稳定
- **来源：** #1992
- **场景：** 开发者提交代码后 Nightly E2E 测试失败
- **问题：** 流水线持续失败，294 条评论显示社区高度关注
- **用户影响：** 降低开发效率，延长功能交付周期

#### 痛点 3：端口配置硬编码
- **来源：** #2779
- **场景：** 用户 8080 端口被占用时无法自定义
- **问题：** NemoClaw 硬编码端口，缺乏灵活性
- **用户影响：** 与常见开发工具冲突，用户体验不佳

#### 痛点 4：消息渠道管理不完整
- **来源：** #2097, #1825
- **场景：** 用户配置 Telegram/Discord/Slack 消息渠道后
- **问题：**
  - 无法移除/停止已配置的渠道（#2097）
  - `nemoclaw stop` 不停止消息桥梁（#1825）
- **用户影响：** 资源占用，配置管理不直观

### 7.2 正面反馈

- **文档改进：** #1551 已关闭，文档新增 host.docker.internal 说明
- **CLI 现代化：** oclif 迁移获得社区认可（#909 获 1 赞）

---

## 8. 待处理积压

### 8.1 长期未响应的重要 Issue

| Issue 编号 | 创建日期 | 距今 | 标题 | 优先级 | 建议 |
|------------|----------|------|------|--------|------|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | 2026-04-17 | 14 天 | Nightly E2E failed | 🔴 高 | **需优先处理** |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | 2026-04-17 | 14

</details>

---
*本日报由 [Big Model Radar](https://github.com/borq168/big_model_radar) 自动生成。*
