# OpenClaw 生态日报 2026-05-07

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-07 02:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 | 2026-05-07

---

## 1. 今日活动概览

过去 24 小时内，OpenClaw 项目保持极高活跃度：共处理 **500 条 Issues**（新开/活跃 306 条，已关闭 194 条）和 **500 条 PRs**（待合并 353 条，已合并/关闭 147 条）。项目方连续发布两个版本（v2026.5.5 和 v2026.5.6），主要针对近期回归问题进行紧急修复。今日社区讨论焦点集中在 Gateway 性能回归、WeChat/Discord 插件兼容性问题，以及 doctor 命令对 OAuth 配置的意外修改。

---

## 2. 版本发布

### v2026.5.6
**发布时间**：2026-05-06

**修复内容**：
- **Doctor/OpenAI Codex 修复**：回滚 v2026.5.5 中 `doctor --fix` 对 `openai-codex/*` ChatGPT/Codex OAuth 路由的错误重写。该修复在 v2026.5.5 中将有效路由改写为 `openai/*`，可能导致仅使用 OAuth 的 GPT-5.5 配置被破坏，或意外使用 API-key 路由。

🔗 https://github.com/openclaw/openclaw/releases/tag/v2026.5.6

### v2026.5.5
**发布时间**：2026-05-06

**修复内容**：
- **Feishu 修复**：修复 topic session 中首次消息与后续消息使用不同 session key 的问题，确保对话保持在同一 topic session 中。感谢 @joeyzenghuan（#78262）
- **LINE 修复**：拒绝没有通配符 `allowFrom` 的 `dmPolicy: "open"` 配置

🔗 https://github.com/openclaw/openclaw/releases/tag/v2026.5.5

---

## 3. 项目进展

今日合并/关闭的重要 PRs：

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#78709](https://github.com/openclaw/openclaw/pull/78709) | feat(memory-core): add log-memory subsystem with auto-dream cycle | extensions | CLOSED |
| [#78678](https://github.com/openclaw/openclaw/pull/78678) | feat(workspace): full oc-path addressing substrate | workspace | OPEN |
| [#78583](https://github.com/openclaw/openclaw/pull/78583) | Add World ID AgentKit HITL approvals | security | OPEN |
| [#78554](https://github.com/openclaw/openclaw/pull/78554) | Fix googlechat grant | channel | OPEN |
| [#78618](https://github.com/openclaw/openclaw/pull/78618) | fix: rotate sessionFile after daily reset | gateway | CLOSED |
| [#78479](https://github.com/openclaw/openclaw/pull/78479) | fix(gateway): close stale WebSocket connections on ping/pong timeout | gateway | CLOSED |
| [#78234](https://github.com/openclaw/openclaw/pull/78234) | Fix repeated Codex native approval prompts after allow-always | extensions | CLOSED |
| [#78235](https://github.com/openclaw/openclaw/pull/78235) | Fix Discord gateway heartbeat ACK timing | channel | CLOSED |
| [#78340](https://github.com/openclaw/openclaw/pull/78340) | fix(ui): read tools.exec.security in Quick Settings | app | CLOSED |

**重点推进**：
- **memory-core 扩展**：新增 log-memory 子系统，支持混合检索（cosine + BM25）、梦境整合和定时循环
- **oc-path 寻址**：实现统一 URI 方案，支持 md/jsonc/json/json5/jsonl/yaml 格式
- **World ID 集成**：为 AgentKit 工具调用添加 World 人机验证审批流程

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 👍 | 状态 |
|---------|------|--------|-----|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 104 | 74 | OPEN |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Request: Prebuilt Android APK releases | 24 | 1 | OPEN |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad on plugin restart | 16 | 1 | OPEN |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway runtime degradation on Windows 11 | 16 | 1 | OPEN |
| [#78407](https://github.com/openclaw/openclaw/issues/78407) | doctor --fix rewrites openai-codex/* to openai/* | 15 | 3 | OPEN |

### 热点分析

**1. 跨平台客户端需求（#75, #9443）**
- Linux/Windows 桌面客户端请求获得 104 条评论和 74 个点赞，是呼声最高的功能需求
- Android APK 预构建版本请求也有较高关注度
- **诉求**：用户希望获得与 macOS/iOS 相同功能集的桌面客户端

**2. Gateway 稳定性问题（#73655, #73323）**
- 插件重启后出现三重泄漏（Manifest EADDRINUSE 重试循环、信号处理器累积、同步 I/O 阻塞）
- Windows 11 + Node 24 环境出现定价获取超时、Telegram 轮询停滞、RPC 延迟等问题
- **诉求**：用户需要 Gateway 在长期运行中的稳定性保证

**3. OAuth 配置意外修改（#78407）**
- v2026.5.5 的 doctor --fix 将 openai-codex/* 路由错误重写为 openai/*
- 影响使用 ChatGPT/Codex OAuth 的用户
- **诉求**：doctor 命令的自动修复不应破坏现有 OAuth 配置

---

## 5. Bug 与稳定性

### 严重 Bug（影响核心功能）

| Issue # | 标题 | 环境 | 状态 | Fix PR |
|---------|------|------|------|--------|
| [#78402](https://github.com/openclaw/openclaw/issues/78402) | Gateway repeatedly closes connections (1000/1005/1006) due to event-loop starvation | v2026.5.5 | OPEN | [#78479](https://github.com/openclaw/openclaw/pull/78479) ✅ |
| [#78604](https://github.com/openclaw/openclaw/issues/78604) | Compaction triggers every ~5 minutes instead of ~30min | v2026.5.5/5.6 | OPEN | - |
| [#78508](https://github.com/openclaw/openclaw/issues/78508) | missing scope: operator.read | v2026.5.5 | OPEN | - |

### 中等 Bug（影响特定功能）

| Issue # | 标题 | 回归 | 状态 | Fix PR |
|---------|------|------|------|--------|
| [#78232](https://github.com/openclaw/openclaw/issues/78232) | openclaw-weixin plugin 2.4.1 incompatible with v2026.5.4 | 是 | OPEN | - |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord channel not loaded in v2026.5.4 | 是 | OPEN | - |
| [#77837](https://github.com/openclaw/openclaw/issues/77837) | weixin getUpdates fetch failed after upgrade to v2026.5.4 | 是 | CLOSED | - |
| [#78000](https://github.com/openclaw/openclaw/issues/78000) | model allowlist breaks cron jobs using claude-haiku-4-5 | 是 | OPEN | - |
| [#67158](https://github.com/openclaw/openclaw/issues/67158) | openai-codex gpt-5.1/5.2/5.3 rejected on OAuth | 是 | CLOSED | - |

### 回归问题统计
今日共报告 **12 个回归问题**，主要集中在：
- v2026.5.4/5.5 引入的插件兼容性问题（WeChat、Discord）
- Gateway 性能和稳定性回归
- 模型白名单对 cron 任务的影响

---

## 6. 功能请求归类

### 平台扩展

| Issue # | 请求 | 评论数 | 状态 |
|---------|------|--------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 桌面客户端 | 104 | OPEN |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Android 预构建 APK | 24 | OPEN |
| [#7476](https://github.com/openclaw/openclaw/issues/7476) | WhatsApp 贴纸发送支持 | 4 | OPEN |

### 安全增强

| Issue # | 请求 | 评论数 | 状态 |
|---------|------|--------|------|
| [#8719](https://github.com/openclaw/openclaw/issues/8719) | OpenClaw Security Profile v1.1 | 6 | OPEN |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | exec-approvals 拒绝名单支持 | 7 | OPEN |
| [#67440](https://github.com/openclaw/openclaw/issues/67440) | exec approvals 添加 TOTP 验证 | 5 | OPEN |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP 工具调用的通道审批 | 8 | OPEN |

### 消息队列与上下文

| Issue # | 请求 | 评论数 | 状态 |
|---------|------|--------|------|
| [#67793](https://github.com/openclaw/openclaw/issues/67793) | queue.mode "collect" 未正确批处理消息 | 9 | OPEN |
| [#50880](https://github.com/openclaw/openclaw/issues/50880) | steer queue mode 静默降级为 followup | 9 | CLOSED |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | steer mode 不注入消息到主会话 | 7 | OPEN |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) | 添加上下文使用百分比到 Runtime 行 | 8 | OPEN |

### 渠道功能

| Issue # | 请求 | 评论数 | 状态 |
|---------|------|--------|------|
| [#8295](https://github.com/openclaw/openclaw/issues/8295) | Telegram groups 支持 allowBots | 5 | OPEN |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 抑制子代理公告选项 | 6 | OPEN |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) | Discord 图片存储为 base64 导致上下文溢出 | 6 | OPEN |

---

## 7. 用户反馈摘要

### 痛点

1. **Gateway 长期运行稳定性**
   - "After a normal post-update gateway restart... three independent leaks compounded over ~10 minutes"（#73655）
   - "Gateway long-running Node process exhibits multi-subsystem network/timer degradation"（#73323）

2. **插件兼容性断裂**
   - "After upgrading from v2026.5.3-beta.4 to v2026.5.4, the @tencent-weixin/openclaw-weixin@2.4.1... channelRuntime API changes break inbound message processing"（#78232）
   - "Discord channel not loaded in 2026.5.4 (and beta.2/beta.3), works in beta.1 and 2026.4.29"（#77930）

3. **doctor 命令的破坏性自动修复**
   - "The doctor migration mutates openclaw.json and rewrites every openai-codex/* model reference to openai/*"（#78407）

### 满意点

1. **Feishu 问题快速修复**
   - #78262 报告后，问题在 v2026.5.5 中得到修复

2. **WhatsApp 稳定性**
   - 部分用户回滚到 v2026.4.23 后问题解决（#74886）

---

## 8. 待处理积压

### 长期未响应的 Issues（>30 天无维护者回复）

| Issue # | 标题 | 创建时间 | 评论数 | 最后更新 |
|---------|------|----------|--------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 2026-01-01 | 104 | 2026-05-06 |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) | Context/state lost after compaction | 2026-01-27 | 8 | 2026-05-06 |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) | Discord images stored as base64 | 2026-01-19 | 6 | 2026-05-06 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | safe/unsafe ClawdBot | 2026-02-02 | 12 | 2026-05-07 |

### 高优先级待处理

| Issue # | 标题 | 优先级 | 备注 |
|---------|------|--------|------|
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad | 高 | 插件重启后泄漏 |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway runtime degradation | 高 | Windows 11 稳定性 |
| [#78604](https://github.com/openclaw/openclaw/issues/78604) | Compaction loop | 高 | 每 5 分钟触发而非 30 分钟 |
| [#78232](https://github.com/openclaw/openclaw/issues/78232) | WeChat plugin incompatible | 中 | v2026.5.4 兼容性 |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord channel not loaded | 中 | v2026.5.4 回归 |

---

**日报生成时间**：2026-05-07
**数据来源**：GitHub OpenClaw/openclaw 仓库
**统计周期**：2026-05-06 00:00 至 2026-05-07 00:00 (UTC)

---

## 横向生态对比

# AI 智能体开源项目横向对比日报 | 2026-05-07

---

## 1. 今日横向概览

今日四个项目均保持活跃状态，其中 OpenClaw 活动量最高（500 条 Issues + 500 条 PRs），连续发布两个补丁版本（v2026.5.5、v2026.5.6）修复 doctor 命令导致的 OAuth 路由错误重写问题。NanoBot 聚焦运行时上下文泄漏修复，提交多个相关 PR。Zeroclaw 推进大规模渠道扩展（Zulip、Rocket.Chat、Mastodon、Twilio SMS）和 7 个新模型提供商接入。PicoClaw 发布 nightly build，在多 Agent 架构、Session API 时间戳和认证问题上有较多讨论。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃 → 已关闭） | PRs（待合并 → 已合并/关闭） | Release 情况 | 今日技术重点 |
|------|------------------------------|------------------------------|--------------|--------------|
| **OpenClaw** | 306 → 194（总计 500） | 353 → 147（总计 500） | v2026.5.5、v2026.5.6 | Gateway 性能回归修复、WeChat/Discord 插件兼容性、OAuth 配置回滚 |
| **NanoBot** | 7 → 9（总计 16） | 21 → 17（总计 38） | 无 | 运行时上下文泄漏修复、DeepSeek reasoning_content 处理、多渠道错误处理 |
| **Zeroclaw** | 45 → 5（总计 50） | 41 → 9（总计 50） | 无（v0.7.5 待发布） | 渠道扩展（4 个新平台）、模型提供商批量接入（7 个）、Nodes 仪表盘 |
| **PicoClaw** | 14 → 7（总计 21） | 41 → 21（总计 62） | v0.2.8-nightly.20260507 | 多 Agent 架构、Session 时间戳、跨提供商认证失败修复、MCP 客户端 |

**备注：**
- OpenClaw 活动量约为其他三项目总和的 2.5 倍，但 PR 合并率较低（29.4%），积压较重
- PicoClaw PR 活跃度高（待合并 41 条），发布节奏最快（nightly build）
- Zeroclaw 渠道扩展和新提供商接入集中度高，单一贡献者 @theonlyhennygod 提交 7 个 provider PR

---

## 3. OpenClaw 与同类对照

### 活动量差异

OpenClaw 今日 Issues 和 PR 处理量均为 NanoBot 的 31 倍、Zeroclaw 的 10 倍、PicoClaw 的 24 倍。这一差距主要来自项目成熟度和用户基数差异，而非开发节奏放缓。OpenClaw 维护者连续发布两个补丁版本，表明对回归问题的响应速度较快。

### 技术重点差异

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **核心问题** | Gateway 稳定性、插件兼容性 | 运行时上下文泄漏 | 渠道协议兼容性、Provider 凭证继承 | 认证可靠性、多 Agent 角色隔离 |
| **修复类型** | 紧急回归修复为主 | 缺陷修复为主 | 功能扩展为主 | 功能增强为主 |
| **版本策略** | 快速补丁（5.5→5.6） | 无发布 | 大版本待发（v0.7.5） | nightly 持续迭代 |

### 社区讨论面差异

- **OpenClaw**：讨论面最广，涵盖 Gateway 泄漏、OAuth 配置、跨平台客户端需求（104 条评论）、插件兼容性等
- **NanoBot**：讨论集中于模型 API 兼容性（GLM-5.1 地区限制、DeepSeek reasoning_content）和 Dream 功能禁用需求
- **Zeroclaw**：讨论集中在新渠道接入（WhatsApp 协议失效被标记 S1）、Shell 工具权限配置失效、WorkspaceManager 启动失败
- **PicoClaw**：讨论集中在认证失败（跨提供商 401）、exec 工具安全守卫误判、浏览器自动化路线图

---

## 4. 共同出现的技术方向

以下需求在多个项目中今日均出现相关 Issue 或 PR：

### 4.1 DeepSeek 模型兼容性

| 项目 | 具体问题 | 状态 |
|------|----------|------|
| **NanoBot** | deepseek-v4-flash reasoning_content 错误，模型在思考模式下必须回传 reasoning_content | OPEN |
| **PicoClaw** | Deepseek v4 thinking model 支持，reasoning_content 回传问题 | OPEN |

**诉求**：两个项目均需适配 DeepSeek v4 的 reasoning_content 字段处理机制，涉及 API 变更兼容性。

### 4.2 渠道稳定性与协议兼容性

| 项目 | 具体问题 | 严重性 |
|------|----------|--------|
| **OpenClaw** | WeChat 插件 v2.4.1 与 v2026.5.4 不兼容；Discord 频道在 v2026.5.4 未加载 | 中 |
| **Zeroclaw** | WhatsApp Web 协议 2026-04-24 升级后完全失效（S1） | S1 |
| **NanoBot** | 微信频道静默丢弃消息；Matrix 频道重复回复 | 中 |
| **PicoClaw** | DingTalk SDK panic 导致 gateway 异常停止 | 高 |

**诉求**：各项目均面临渠道 SDK 与第三方平台协议变更的适配挑战，需要更健壮的错误处理和协议版本检测机制。

### 4.3 多 Agent 架构支持

| 项目 | 具体问题 | 状态 |
|------|----------|------|
| **PicoClaw** | 子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆 | OPEN |
| **OpenClaw** | memory-core 新增 log-memory 子系统，支持梦境整合和定时循环 | PR #78709 |

**诉求**：多 Agent 场景下的身份隔离、上下文管理和协作机制。

### 4.4 认证与安全配置

| 项目 | 具体问题 | 状态 |
|------|----------|------|
| **PicoClaw** | 跨提供商（Groq、OpenRouter、Nvidia）认证失败（401），尽管密钥直接调用有效 | OPEN |
| **NanoBot** | API 服务器添加可选 Bearer token 认证 | PR #3649 待合并 |
| **Zeroclaw** | Shell 工具在 `autonomy = "full"` 配置下仍被拒绝；Fallback Provider 凭证未继承 | OPEN |

**诉求**：认证机制可靠性、配置继承和权限控制的一致性。

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心功能定位 | 今日重点推进 |
|------|--------------|--------------|
| **OpenClaw** | 通用 AI Agent 框架，强调 Gateway 稳定性和插件生态 | Gateway 性能回归修复、memory-core 扩展 |
| **NanoBot** | 轻量级 AI 助手，侧重运行时上下文管理和 Dream 功能 | 上下文泄漏修复、Dream 行为控制 |
| **Zeroclaw** | 桌面端 AI 助手（Tauri），强调多渠道接入和本地运行时 | 渠道扩展（7+ 新平台）、模型提供商接入 |
| **PicoClaw** | 嵌入式/移动端 AI 助手，强调多渠道和多 Agent | 多 Agent 架构、Session API 增强、MCP 客户端 |

### 目标用户

- **OpenClaw**：自托管用户，需要高度可定制和稳定的企业级方案
- **NanoBot**：开发者和技术用户，关注上下文管理和轻量级部署
- **Zeroclaw**：桌面端用户，需要开箱即用的多渠道体验
- **PicoClaw**：移动端和嵌入式场景用户，强调跨平台消息渠道

### 技术架构

| 项目 | 技术栈特征 | 今日架构演进 |
|------|------------|--------------|
| **OpenClaw** | Node.js，Gateway + Plugin 架构 | oc-path 统一 URI 方案、memory-core 子系统 |
| **NanoBot** | Python，强调上下文隔离 | 运行时上下文与持久化历史分离 |
| **Zeroclaw** | Rust + Tauri，本地优先 | Typed-family provider 重构、Atomic Chat 集成 |
| **PicoClaw** | 多语言混合，移动端优化 | LINE SDK 重构、MCP 配置 UI |

---

## 6. 社区活跃度记录

### 活跃度分层

| 层级 | 项目 | 今日数据支撑 |
|------|------|--------------|
| **极高活跃** | OpenClaw | 500 Issues + 500 PRs，连续发布两个版本，维护者响应及时 |
| **高活跃** | Zeroclaw、PicoClaw | 50+ PRs/Issues，大规模功能扩展和 nightly 发布 |
| **中活跃** | NanoBot | 16 Issues + 38 PRs，聚焦缺陷修复，无版本发布 |

### 贡献者集中度观察

- **Zeroclaw**：单一贡献者 @theonlyhennygod 提交 7 个模型提供商 PR，占今日新 PR 的 17%
- **其他项目**：贡献者分布相对分散

### 版本发布节奏

| 项目 | 发布频率 | 今日发布 |
|------|----------|----------|
| OpenClaw | 高（连续两版本） | v2026.5.5、v2026.5.6 |
| PicoClaw | 高（nightly） | v0.2.8-nightly.20260507 |
| Zeroclaw | 低（大版本） | 无（v0.7.5 待合并） |
| NanoBot | 低 | 无 |

---

## 7. 有证据支撑的观察

### 观察 1：OpenClaw 面临集中回归压力

今日 OpenClaw 报告 12 个回归问题，主要集中在 v2026.5.4/5.5 引入的插件兼容性问题（WeChat、Discord）和 Gateway 稳定性回归。维护者连续发布两个补丁版本（5.5→5.6）专门回滚 doctor 命令的破坏性修改，表明快速迭代响应机制有效但问题根源在于自动修复逻辑的测试覆盖不足。

### 观察 2：渠道 SDK 协议变更成为跨项目共性挑战

OpenClaw（WeChat、Discord）、Zeroclaw（WhatsApp Web）、NanoBot（微信、Matrix）、PicoClaw（DingTalk）均报告渠道相关问题，其中 Zeroclaw 的 WhatsApp 协议失效被标记为 S1 级别。第三方平台协议升级的静默破坏性是持续风险，需要建立协议版本检测和降级机制。

### 观察 3：DeepSeek v4 reasoning_content 处理是 NanoBot 和 PicoClaw 的共同需求

两个项目均报告 DeepSeek v4 模型在思考模式下必须回传 reasoning_content，但当前实现未正确处理。这是模型 API 变更带来的兼容性问题，涉及 API 响应解析逻辑的适配。

### 观察 4：认证可靠性问题在 PicoClaw 和 Zeroclaw 中表现突出

PicoClaw 报告跨提供商（Groq、OpenRouter、Nvidia）认证失败，尽管密钥直接调用有效；Zeroclaw 报告 Fallback Provider 未继承 config.toml 凭证配置。两者均指向认证和配置管理机制的健壮性问题。

### 观察 5：多 Agent 架构的身份隔离需求在 PicoClaw 中明确提出

PicoClaw Issue #2775 报告子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆，这是多 Agent 协作场景下的核心挑战。OpenClaw 的 memory-core 梦境整合功能也涉及 Agent 状态管理，两者虽实现路径不同但均指向多 Agent 上下文隔离需求。

---

**报告生成时间**：2026-05-07
**数据来源**：GitHub 各项目仓库公开数据
**分析周期**：2026-05-06 00:00 至 2026-05-07 00:00 (UTC)

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-07

---

## 1. 今日活动概览

过去 24 小时内，NanoBot 项目保持高度活跃：共处理 **16 条 Issues**（7 条新开/活跃，9 条已关闭）和 **38 条 PRs**（21 条待合并，17 条已合并/关闭）。今日未发布新版本。社区重点关注运行时上下文泄漏修复、DeepSeek 模型兼容性、以及多渠道错误处理改进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#3669](https://github.com/HKUDS/nanobot/pull/3669) | Fix/runtime context ephemeral nightly | CLOSED | 修复 nightly 分支运行时上下文提示脚手架泄漏到持久化聊天历史的问题 |
| [#3668](https://github.com/HKUDS/nanobot/pull/3668) | Fix/runtime context ephemeral nightly | CLOSED | 同上，针对不同场景的修复 |
| [#3666](https://github.com/HKUDS/nanobot/pull/3666) | Fix/cli runtime context leak | CLOSED | 将运行时上下文移出用户消息内容，修复 #2132 |
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | fix(dream): restore cursor with memory state | CLOSED | 修复 Dream 恢复时光标不回滚的问题（#3657） |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) | feat(webui): polish chat UX and slash commands | CLOSED | 完善 WebUI 界面、聊天体验及斜杠命令 |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) | fix(weixin): raise exceptions on message send failure | CLOSED | 修复微信频道静默丢弃消息的问题 |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) | fix(webui): require token_issue_secret for LAN bootstrap | CLOSED | 修复 LAN 引导时的安全验证问题 |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) | fix(transcription): retry Whisper calls on transient failures | CLOSED | 对 Whisper 调用添加指数退避重试机制 |
| [#3656](https://github.com/HKUDS/nanobot/pull/3656) | fix(webui): allow LAN access when host is 0.0.0.0 | CLOSED | 修复 WebUI 在 0.0.0.0 绑定时 LAN 访问被拒绝的问题 |

### 待合并的 PRs

| PR | 标题 | 说明 |
|----|------|------|
| [#3649](https://github.com/HKUDS/nanobot/pull/3649) | fix(api): add configurable Bearer token authentication | 为 API 服务器添加可选 Bearer token 认证，修复中危安全问题 |
| [#3672](https://github.com/HKUDS/nanobot/pull/3672) | chore(ci): Enable full ruff -F checks | 启用完整 Ruff F 规则检查，提升代码质量 |
| [#3671](https://github.com/HKUDS/nanobot/pull/3671) | Fix/runtime context ephemeral upstream nightly | 运行时上下文临时性修复（上游 nightly） |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | fix(agent): preserve user message and tool calls when /stop cancels | /stop 取消任务时保留用户消息和工具调用 |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | fix: log errors in silent exception handlers (matrix + weixin) | 修复 Matrix/微信频道静默吞异常的问题 |
| [#3663](https://github.com/HKUDS/nanobot/pull/3663) | fix(transcription): tolerate chat-style apiBase for Groq/OpenAI | 接受聊天风格或完整 URL 格式的转录端点 |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | fix(tokens): avoid network loads during estimation | 避免分词器估算时的网络加载 |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | feat(dream): add update scope controls | 添加 Dream 更新范围控制 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#3618](https://github.com/HKUDS/nanobot/issues/3618)** - 严重 BUG：模型地区不可用错误（GLM-5.1）
   - 评论数：11 条
   - 状态：已关闭
   - 摘要：用户报告智谱 GLM-5.1 模型因地区限制返回 403 错误，导致 4 月 25 日至 5 月 4 日期间大量定时任务失败。用户通过备份恢复后问题解决。

2. **[#3639](https://github.com/HKUDS/nanobot/issues/3639)** - 提案：跨代理信任的身份+入职协议
   - 评论数：3 条
   - 状态：已关闭
   - 摘要：提议为 NanoBot 添加 Ed25519 可验证身份协议和跨设备代理入职机制，增强安全性和信任度。

3. **[#3665](https://github.com/HKUDS/nanobot/issues/3665)** - deepseek-v4-flash reasoning_content 错误
   - 评论数：1 条
   - 状态：开放中
   - 摘要：DeepSeek 模型在思考模式下必须回传 reasoning_content，但当前实现未正确处理，导致请求被拒绝。

### 热点分析

- **运行时上下文泄漏问题** 引发多个相关 PR 连续提交（#3666, #3668, #3669, #3671），社区对此问题的关注度较高
- **DeepSeek 模型兼容性** 成为新痛点，涉及 API 变更和 reasoning_content 处理
- **多渠道稳定性**（微信、WhatsApp、Matrix）持续有改进 PR

---

## 5. Bug 与稳定性

### 严重 Bug（高优先级）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | deepseek-v4-flash reasoning_content 错误 | OPEN | 无 |
| [#3670](https://github.com/HKUDS/nanobot/issues/3670) | 运行时上下文提示脚手架泄漏到持久化聊天历史 | OPEN | [#3671](https://github.com/HKUDS/nanobot/pull/3671) 待合并 |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 使用 GPT-5.5 时出现 "Duplicate item found with id" 错误 | OPEN | 无 |

### 中等 Bug

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | 转录提供商配置不够透明 | OPEN | [#3663](https://github.com/HKUDS/nanobot/pull/3663) 待合并 |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | 无法配置机器人名称和图标 | OPEN | 无 |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | 分词器估算依赖网络 | OPEN | [#3662](https://github.com/HKUDS/nanobot/pull/3662) 待合并 |

### 已修复的 Bug

| Issue | 标题 | 修复 PR |
|-------|------|---------|
| [#3618](https://github.com/HKUDS/nanobot/issues/3618) | 模型地区不可用错误 | 用户自行恢复 |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API reasoning_content 错误 | 已关闭 |
| [#3638](https://github.com/HKUDS/nanobot/issues/3638) | MCP streamable_http_client 导致 100% CPU 泄漏 | 已关闭 |
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | NanoBot 无法访问工作区根目录 | 已关闭 |
| [#3605](https://github.com/HKUDS/nanobot/issues/3605) | 安全防护中止静默丢弃回合 | 已关闭 |
| [#3657](https://github.com/HKUDS/nanobot/issues/3657) | Dream 恢复不回滚 .dream_cursor | [#3660](https://github.com/HKUDS/nanobot/pull/3660) |
| [#3625](https://github.com/HKUDS/nanobot/issues/3625) | WhatsApp 频道发送单独令牌消息 | [#3514](https://github.com/HKUDS/nanobot/pull/3514) |

---

## 6. 功能请求归类

### 新功能请求

| Issue | 标题 | 说明 |
|-------|------|------|
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | 能否禁用 Dream 功能？ | 建议添加 `enabled` 配置项 |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | 配置机器人名称和图标 | 允许自定义 bot 名称和 logo |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | 使用本地分词器估算提示令牌 | 避免网络依赖 |
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) | 代理身份和入职协议 | Ed25519 可验证身份 |

### 功能增强相关 PRs

| PR | 标题 | 说明 |
|----|------|------|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | /stop 取消任务时保留用户消息和工具调用 | 改进任务取消体验 |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) | 添加 /clear 命令重置会话历史 | 新增会话管理命令 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 解耦心跳推理和通知 | 新增 `sendReasoning` 配置 |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | Dream 添加更新范围控制 | 细粒度控制 Dream 行为 |

---

## 7. 用户反馈摘要

### 用户痛点

1. **模型可用性问题**：用户报告智谱 GLM-5.1 模型因地区限制导致服务中断长达 10 天，影响定时任务和个人使用。用户强调备份习惯的重要性。

2. **离线环境支持**：用户反馈 `tiktoken.get_encoding()` 在无网络环境下会卡顿数秒，影响离线使用体验。

3. **渠道稳定性**：微信频道存在静默丢消息问题，用户无法察觉消息发送失败；WhatsApp 频道在特定配置下会发送大量单独令牌消息。

### 用户诉求

- 希望能够**完全禁用 Dream 功能**，避免不想要的技能漂移
- 希望能够**自定义机器人名称和图标**，提升品牌一致性
- 希望**运行时上下文不会泄漏到聊天历史**，保持对话清洁

### 正面反馈

- 用户对维护者的响应速度表示认可，问题能够得到及时处理
- 备份和恢复机制在关键时刻发挥作用

---

## 8. 待处理积压

### 长期未响应的 Issues（超过 3 天无维护者回复）

| Issue | 标题 | 创建时间 | 说明 |
|-------|------|----------|------|
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 使用 GPT-5.5 时出现 "Duplicate item found with id" 错误 | 2026-05-05 | 已 2 天无响应，影响模型使用 |
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | deepseek-v4-flash reasoning_content 错误 | 2026-05-06 | 新报告，需确认是否已知问题 |
| [#3670](https://github.com/HKUDS/nanobot/issues/3670) | 运行时上下文提示脚手架泄漏 | 2026-05-06 | 已有相关 PR #3671 |

### 建议关注

- **#3633** 和 **#3665** 涉及模型 API 兼容性问题，建议优先评估影响范围
- **#3670** 已有修复 PR，建议尽快审查合并

---

*本日报基于 2026-05-07 的 GitHub 数据生成，数据来源：[NanoBot Repository](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 | 2026-05-07

---

## 1. 今日活动概览

过去 24 小时内，Zeroclaw 项目保持高度活跃：共产生 **50 条 Issues 更新**（45 条新开/活跃，5 条关闭）和 **50 条 PR 更新**（41 条待合并，9 条已合并/关闭）。今日未发布新版本，但 PR #6492 已提交 v0.7.5 版本号更新，预示该版本即将正式发布。社区在渠道扩展（Zulip、Rocket.Chat、Mastodon、Twilio SMS）、模型提供商接入（Inception Labs、Lambda、Arcee、Featherless、Morph 等 7 个新 provider）以及网关/仪表盘功能上推进显著，同时多个高优先级 Bug 仍在处理中。

---

## 2. 版本发布

**无新版本发布。**

PR #6492（[chore: bump version to v0.7.5](https://github.com/zeroclaw-labs/zeroclaw/pull/6492)）已提交但尚未合并，该 PR 将版本号从 v0.7.4 提升至 v0.7.5，覆盖 Cargo.toml、Cargo.lock、Tauri 配置、市场模板、工作流示例及 CHANGELOG-next.md。Issue #5878（[v0.7.5 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)）为该版本的权威范围定义，当前有 8 条评论讨论自动化发布流程细节。

---

## 3. 项目进展

以下 PR 在今日取得重要进展或已合并：

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#6492](https://github.com/zeroclaw-labs/zeroclaw/pull/6492) | chore: bump version to v0.7.5 | OPEN | 版本号更新，准备发布 |
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | feat(providers): separate llama.cpp into dedicated provider kind | OPEN | 将 llama.cpp 拆分为独立 Provider 类型，路由至 OpenAI Responses API |
| [#6491](https://github.com/zeroclaw-labs/zeroclaw/pull/6491) | feat: integrate Atomic Chat as local OpenAI-compatible runtime provider | OPEN | 新增 Atomic Chat（Jan runtime）支持 |
| [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) | fix(cron): allow whatsapp as cron delivery channel | OPEN | 允许 cron 任务通过 WhatsApp 渠道投递通知 |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | feat(config,providers): typed-family split for model + TTS providers | OPEN | 重构模型和 TTS 提供商配置结构，目标分支为 integration/v0.8.0 |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | feat(gateway,web): nodes dashboard + device identification | OPEN | 新增 `/nodes` 仪表盘页面，展示多实例健康状态 |
| [#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) | feat(gateway,web): dashboard self-update flow | OPEN | 仪表盘新增"Update ZeroClaw"按钮，封装 CLI update 流程 |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) | feat(codex): support native Responses tool calls | OPEN | openai-codex provider 支持原生 Responses API tool calls |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | fix(matrix): avoid duplicate inbound replies | OPEN | 修复 Matrix 同步循环中重复注册事件处理器导致重复回复的问题 |
| [#6369](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) | fix(web): agent tool button height | CLOSED | 修复 Agent Tools 按钮悬停时高度不覆盖全部可用空间的问题 |
| [#6486](https://github.com/zeroclaw-labs/zeroclaw/pull/6486) | fix(docs): generate lang switcher before mdbook sync | OPEN | 修复 mdbook sync 前生成语言切换器的构建顺序问题 |
| [#6490](https://github.com/zeroclaw-labs/zeroclaw/pull/6490) | fix(web,runtime): human-readable integration category labels | OPEN | 修复 Integrations 页面分类标题显示原始枚举名而非人类可读标签的问题 |

---

## 4. 社区热点

以下 Issues 和 PR 今日讨论最为活跃：

**Issues 评论数排名：**

1. **#4710** — [Feature: A better LOGO of Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — **10 条评论**，作者 mastwet 提议重新设计项目 Logo，附上了设计草图。社区对此展开讨论，涉及品牌视觉方向。

2. **#5878** — [v0.7.5 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) — **8 条评论**，维护者 WareWolf-MoonWall 主导，聚焦自动化发布管道的范围定义和进度跟踪。

3. **#6246** — [Bug: WhatsApp Web channel pair succeeds but messages don't flow after April 2026 server-side protocol bump](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) — **4 条评论**，WhatsApp Web 协议在 2026-04-24 服务端升级后静默失效，影响消息收发，被标记为 S1 级别。

**PR 活跃度观察：**

- 模型提供商批量接入：#6463 (Inception Labs)、#6462 (Lambda AI)、#6461 (Arcee AI)、#6460 (Featherless AI)、#6459 (Upstage Solar)、#6445 (GitHub Models)、#6440 (Morph) — 全部由 @theonlyhennygod 提交，均处于 OPEN 状态，展示了极高的贡献频率。
- 渠道扩展：#6437 (Zulip)、#6435 (Rocket.Chat)、#6423 (Mastodon)、#6427 (Twilio SMS) — 均为 in-progress 状态，指向统一的功能路线。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### S0 / S1 — 阻断性问题（数据丢失或工作流阻塞）

| Issue | 标题 | 严重性 | 状态 | Fix PR |
|-------|------|--------|------|--------|
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) | Multi-alias channel instances silently clobber each other; shared Matrix state_dir corrupts sessions | **P0 blocker** | OPEN | 无 |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web: pair succeeds but messages don't flow after April 2026 protocol bump | S1 | OPEN | 无 |
| [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | WhatsApp Web reacts to own-account outbound messages (is_from_me leak) | S1 | CLOSED | 无（标记为已关闭，疑似已修复或重复） |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls refused at `[autonomy] level = "full"` — no `tool_dispatch` reaches runtime | S1 | OPEN | 无 |
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager fails to load profiles at Runtime startup | S0 | OPEN | 无 |
| [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) | Fallback Providers Fail to Inherit Credentials from config.toml | S0 | CLOSED | 无（标记为 duplicate） |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | gateway can not use postgres — runtime panic: Cannot start a runtime from within a runtime | S2 | OPEN | 无 |
| [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | Slack channel: process 1 user request, invoking LLM twice repeatedly | P1 | IN-PROGRESS | 无 |

### S2 — 降级行为

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | SQLite memory schema init can fail during concurrent startup | IN-PROGRESS | 无 |
| [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) | Heartbeat not working in combination with Matrix channel | OPEN | 无 |
| [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) | cron_add: improve schedule parameter error message for plain string input | OPEN | 无 |

### S3 — 小问题

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6368](https://github.com/zeroclaw-labs/zeroclaw/issues/6368) | Agent tools button behaviour on hover | CLOSED | [#6369](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) 已合并 |

**稳定性观察：** 今日 S0/S1 级 Bug 集中于 WhatsApp 渠道协议兼容性、Shell 工具权限、WorkspaceManager 启动和 Provider 凭证继承等核心路径，其中多个涉及安全风险（is_from_me 泄漏、autonomy 配置失效）。Matrix 渠道的多实例状态共享问题（#6487）被标记为 P0 blocker，需优先关注。

---

## 6. 功能请求归类

今日社区提出的功能请求可归纳为以下方向：

### 渠道扩展

| Issue/PR | 功能 | 状态 |
|----------|------|------|
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | Zulip channel (long-poll events MVP) | IN-PROGRESS |
| [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435) | Rocket.Chat channel (REST polling MVP) | IN-PROGRESS |
| [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) | Mastodon (ActivityPub) channel | IN-PROGRESS |
| [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) | Twilio SMS channel (gateway-routed webhook + REST send) | IN-PROGRESS |
| [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) | WhatsApp as cron delivery channel | OPEN |

### 模型提供商接入

| Issue/PR | 提供商 | 状态 |
|----------|--------|------|
| [#6463](https://github.com/zeroclaw-labs/zeroclaw/pull/6463) | Inception Labs (Mercury diffusion-based LLM) | OPEN |
| [#6462](https://github.com/zeroclaw-labs/zeroclaw/pull/6462) | Lambda AI Inference | OPEN |
| [#6461](https://github.com/zeroclaw-labs/zeroclaw/pull/6461) | Arcee AI | OPEN |
| [#6460](https://github.com/zeroclaw-labs/zeroclaw/pull/6460) | Featherless AI | OPEN |
| [#6459](https://github.com/zeroclaw-labs/zeroclaw/pull/6459) | Upstage Solar | OPEN |
| [#6445](https://github.com/zeroclaw-labs/zeroclaw/pull/6445) | GitHub Models | OPEN |
| [#6440](https://github.com/zeroclaw-labs/zeroclaw/pull/6440) | Morph (fast apply-edits) | OPEN |
| [#6491](https://github.com/zeroclaw-labs/zeroclaw/pull/6491) | Atomic Chat (Jan runtime) | OPEN |
| [#6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) | Morph (feature request) | IN-PROGRESS |

### 网关与仪表盘

| Issue/PR | 功能 | 状态 |
|----------|------|------|
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | Nodes dashboard + device identification | OPEN |
| [#6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) | Dashboard self-update flow | OPEN |
| [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) | Dashboard "Update ZeroClaw" button | IN-PROGRESS |
| [#6490](https://github.com/zeroclaw-labs/zeroclaw/pull/6490) | Human-readable integration category labels | OPEN |

### 配置与架构

| Issue/PR | 功能 | 状态 |
|----------|------|------|
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | Typed-family split for model + TTS providers | OPEN (v0.8.0 branch) |
| [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) | Typed-family split for model/TTS providers; dead Azure field deletion | OPEN |
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | Separate llama.cpp into dedicated provider kind | OPEN |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | "Everything is a plugin" — phased path from Integrations → unified plugin catalog | OPEN |
| [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) | Document about skills wanted | OPEN |

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的真实用户诉求：

- **WhatsApp 协议失效**（#6246）：用户反映 WhatsApp Web 渠道在 2026-04-24 服务端协议升级后完全失效，配对成功但消息无法收发，影响生产使用。
- **Shell 工具权限配置失效**（#6434）：用户在 `[autonomy] level = "full"` 完全开放配置下，Shell 工具调用仍被拒绝，工具调度无法到达运行时，疑似 autonomy 配置未生效。
- **Postgres 网关连接崩溃**（#6472）：用户报告 gateway 使用 postgres 时触发 panic `Cannot start a runtime from within a runtime`，运行时初始化存在嵌套问题。
- **WorkspaceManager 启动失败**（#6419）：用户反映 Runtime 启动时 WorkspaceManager 无法加载 profiles，导致工作区工具不可用。
- **Fallback Provider 凭证丢失**（#6418）：用户在故障转移时（如 Gemini → OpenRouter）发现 fallback provider 未继承 config.toml 中的凭证配置。
- **Slack 重复调用 LLM**（#6474）：用户使用本地 omlx (vllm) 作为 LLM 服务器时，单个请求触发两次 LLM 调用，资源浪费且响应延迟。
- **文档需求**（#5863）：用户 PeterlitsZo 明确表示希望了解如何为 Zeroclaw 添加 skills，以及 skill 的格式规范，当前文档缺失。
- **Logo 设计讨论**（#4710）：社区对项目 Logo 重新设计表示兴趣，多名用户参与讨论。

---

## 8. 待处理

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-05-07
**项目**: PicoClaw (github.com/sipeed/picoclaw)

---

## 1. 今日活动概览

过去24小时内，PicoClaw 项目保持高度活跃：共处理 **21 条 Issues**（新开/活跃 14 条，已关闭 7 条）和 **62 条 PRs**（待合并 41 条，已合并/关闭 21 条）。发布了 **nightly build v0.2.8-nightly.20260507.788cda5c**。社区在多 Agent 架构、Session API 时间戳、认证问题和 MCP 客户端支持等方面有较多讨论和贡献。

---

## 2. 版本发布

### Nightly Build 发布

| 版本 | 变更集 |
|------|--------|
| **v0.2.8-nightly.20260507.788cda5c** | [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

> ⚠️ **注意**: 此为自动化构建版本，可能不稳定，请谨慎使用。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 描述 | 状态 |
|----|------|------|
| [#2629](https://github.com/sipeed/picoclaw/pull/2629) | fix(tools): improve web search provider fallback - 统一 Web 搜索提供商的可用性判断和选择逻辑 | ✅ CLOSED |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | feat(providers): add openai-compatible embeddings support - 为 vLLM 风格端点添加嵌入支持 | ✅ CLOSED |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | ci(release): support releasing from existing tag - 支持从现有标签发布 | ✅ CLOSED |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | feat: enhance Weixin channel support and configuration - 增强微信频道多实例支持 | ✅ CLOSED |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | fix(provider): handle split SSE stream chunk parsing - 修复 SSE 流分块解析问题 | ✅ CLOSED |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | fix(provider): anthropic_messages sends system as content blocks with cache_control - 修复 Anthropic 提示缓存问题 | ✅ CLOSED |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) | docs: add Engram MCP memory server integration guide - 添加 Engram MCP 集成文档 | ✅ CLOSED |

### 待合并的活跃 PRs

| PR | 描述 | 状态 |
|----|------|------|
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | feat(session): add per-message created_at timestamps - 为消息添加独立时间戳 | 🔄 OPEN |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | feat(agents): add working summary tool feedback - 添加工作摘要工具反馈样式 | 🔄 OPEN |
| [#2770](https://github.com/sipeed/picoclaw/pull/2770) | Add MCP section to config web UI - 在配置页面添加 MCP 配置区块 | 🔄 OPEN |
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | feat: attribute history messages per sender for multi-user group chats - 多用户群聊消息归属 | 🔄 OPEN |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | feat: add get_current_time tool - 添加获取当前时间工具 | 🔄 OPEN |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | fix: enable ChatGPT subscription (OAuth) in picoclaw - 启用 ChatGPT OAuth 订阅 | 🔄 OPEN |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | refactor(line): use official LINE Bot SDK v8 - 重构 LINE 频道使用官方 SDK | 🔄 OPEN |
| [#2383](https://github.com/sipeed/picoclaw/pull/2383) | fix(gateway): add CLI stop/status commands - 添加网关停止/状态命令 | 🔄 OPEN |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) | fix(session): preserve archived chat history after summarize truncation - 保留摘要截断后的聊天历史 | 🔄 OPEN |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 点赞 | 状态 |
|-------|------|--------|------|------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | [BUG] Didn't retry if meet LLM call failed | 12 | 0 | 🔴 OPEN |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | [BUG] exec工具的guardCommand方法问题 | 7 | 1 | 🔴 OPEN |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Feature: Autonomous Browser Operations | 7 | 8 | 🔴 OPEN |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | [Error] Multiple authentication credentials received | 6 | 0 | ✅ CLOSED |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | [BUG] The title of the last screen in the app remains in Chinese when English is selected | 6 | 0 | ✅ CLOSED |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | [BUG] Android app. Model is not configured for local models | 5 | 0 | 🔴 OPEN |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 关于对话的历史记录显示问题 | 5 | 0 | ✅ CLOSED |

### 热点分析

1. **LLM 调用重试机制缺失** (#629): 用户报告长任务执行时遇到 HTTP 500 错误后任务挂起，期望自动重试机制。这是稳定性相关的核心问题。

2. **exec 工具安全守卫误判** (#1042): `guardCommand` 方法对 URL 参数（如 `wttr.in/Beijing?T`）误判为路径遍历，导致合法命令被阻止。

3. **浏览器自动化路线图** (#293): 高优先级功能请求（8 赞），期望实现 AI 直接操作网页的能力，社区正在讨论实现路径。

---

## 5. Bug 与稳定性

### 严重 Bug（高影响）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | **PicoClaw authentication fails with valid API keys (401 across providers)** - 跨提供商（Groq、OpenRouter、Nvidia）认证失败，尽管密钥直接调用有效 | 🔴 OPEN | - |
| [#2704](https://github.com/sipeed/picoclaw/issues/2704) | **DingTalk SDK 的 panic 导致 gateway 异常停止** - 钉钉 SDK 并发错误导致 panic，涉及竞态条件 | 🔴 OPEN | - |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | **LLM 调用失败不重试** - HTTP 500 时任务挂起 | 🔴 OPEN | - |

### 中等 Bug

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#2780](https://github.com/sipeed/picoclaw/issues/2780) | Reload config broke voice recognition - 重载配置后语音识别失效 | 🟡 OPEN | - |
| [#2785](https://github.com/sipeed/picoclaw/issues/2785) | separate_messages 导致飞书只显示第一条工具调用消息 | 🟡 OPEN | - |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 误判 URL 参数为路径遍历 | 🟡 OPEN | - |

### 已修复的 Bug

| Issue | 描述 | 状态 |
|-------|------|------|
| [#2786](https://github.com/sipeed/picoclaw/issues/2786) | Session API 消息缺少独立时间戳 | ✅ CLOSED |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Multiple authentication credentials received | ✅ CLOSED |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | App 标题语言切换后仍显示中文 | ✅ CLOSED |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 对话历史记录显示不完整 | ✅ CLOSED |
| [#2621](https://github.com/sipeed/picoclaw/issues/2621) | API 超时后 Session context 丢失 | ✅ CLOSED |

---

## 6. 功能请求归类

### 核心功能增强

| Issue/PR | 描述 | 状态 |
|----------|------|------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) | **Autonomous Browser Operations** - 浏览器自动化能力 | 🔴 OPEN |
| [#2782](https://github.com/sipeed/picoclaw/issues/2782) | **MCP client should support Streamable HTTP transport** - 支持新版 MCP 传输协议 | 🔴 OPEN |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | **子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆** - 多 Agent 角色隔离 | 🔴 OPEN |
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) | **Deepseek v4 thinking model 支持** - reasoning_content 回传问题 | 🔴 OPEN |
| [#2671](https://github.com/sipeed/picoclaw/issues/2671) | **模型提供商支持 opencode** - 支持 opencode zen 和 go 订阅 | 🔴 OPEN |

### 工具/体验改进

| Issue/PR | 描述 | 状态 |
|----------|------|------|
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | 为 Session 消息添加 per-message created_at 时间戳 | 🔄 OPEN |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | 添加 working summary tool feedback 样式 | 🔄 OPEN |
| [#2770](https://github.com/sipeed/picoclaw/pull/2770) | Web UI 配置页面添加 MCP 配置区块 | 🔄 OPEN |
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | 多用户群聊消息归属支持 | 🔄 OPEN |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | 添加 get_current_time 工具 | 🔄 OPEN |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) | 启用 ChatGPT OAuth 订阅 | 🔄 OPEN |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) | WebUI Token 消耗统计仪表板 | ✅ CLOSED |

---

## 7. 用户反馈摘要

### 核心痛点

1. **认证可靠性**: 多名用户反馈有效 API 密钥在多个提供商（Groq、OpenRouter、Nvidia）返回 401 错误，影响生产使用 ([#2769](https://github.com/sipeed/picoclaw/issues/2769))

2. **会话持久性**:
   - 历史记录显示不完整，关闭页面后只保留最近 1-2 条 ([#2310](https://github.com/sipeed/picoclaw/issues/2310))
   - API 超时后 Session context 丢失，创建重复的默认会话 ([#2621](https://github.com/sipeed/picoclaw/issues/2621))
   - 消息缺少独立时间戳，前端只能使用 session 级别的 updated 时间 ([#2787](https://github.com/sipeed/picoclaw/issues/2787))

3. **移动端体验**: Android App 配置本地模型后仍显示"not configured"，无法选择使用 ([#2368](https://github.com/sipeed/picoclaw/issues/2368))

4. **多 Agent 架构**: 子 Agent 继承根 Agent 的 AGENT.md，导致角色身份混淆 ([#2775](https://github.com/sipeed/picoclaw/issues/2775))

### 正面反馈

- 社区积极贡献：多用户群聊消息归属 ([#2715](https://github.com/sipeed/picoclaw/pull/2715))、LINE SDK 重构 ([#2413](https://github.com/sipeed/picoclaw/pull/2413)) 等功能正在推进

---

## 8. 待处理积压

### 长期未响应的 Issues（>30 天未更新）

| Issue | 标题 | 创建时间 | 最后更新 | 状态 |
|-------|------|----------|----------|------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Feature: Autonomous Browser Operations | 2026-02-16 | 2026-05-06 | 🔴 OPEN |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | [BUG] Didn't retry if meet LLM call failed | 2026-02-22 | 2026-05-06 | 🔴 OPEN |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec工具的guardCommand方法问题 | 2026-03-04 | 2026-05-06 | 🔴 OPEN |

### 长期未响应的 PRs（>30 天未更新）

</details>