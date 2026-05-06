# OpenClaw 生态日报 2026-05-06

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-06 02:01 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-05-06
**数据区间：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **500 条 Issues 更新**（344 新开/活跃，156 关闭）和 **500 条 PR 更新**（357 待合并，143 已合并/关闭）。项目发布了 **v2026.5.4 正式版及 beta.3**，重点优化了 Google Meet/Voice Call 与 Twilio 拨号接入的实时语音桥接能力。社区讨论热度集中在跨平台应用缺失（Linux/Windows）、工具调用间文本泄漏问题以及 Discord 网关稳定性上。整体项目健康度良好，但存在若干回归问题需要关注。

---

## 2. 版本发布

### v2026.5.4 正式版

**发布内容：** Google Meet/Voice Call 实时语音桥接重大升级

| 特性 | 说明 |
|------|------|
| Twilio 拨号接入优化 | 使 Twilio 拨号加入通过实时 Gemini 语音桥接传输 |
|  paced audio streaming | 节奏感音频流传输 |
| backpressure-aware buffering | 背压感知缓冲机制 |
| barge-in queue clearing | 插队队列清理 |
| 无 TwiML 回退 | 实时语音期间不再降级到 TwiML |

**影响评估：** 此版本为功能性增强，无破坏性变更。建议使用 Google Meet 集成或语音通话功能的用户升级。

### v2026.5.4-beta.3

与正式版功能一致，面向 beta 频道用户。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 作者 | 类型 | 说明 |
|----|------|------|------|
| [#78198](https://github.com/openclaw/openclaw/pull/78198) | bryce-d-greybeard | fix | 跳过未安装的 Honcho 迁移配置，避免创建悬空插件条目 |
| [#78192](https://github.com/openclaw/openclaw/pull/78192) | bryce-d-greybeard | fix | 保持 Telegram DM 静默回退安静，避免无意义消息 |
| [#78189](https://github.com/openclaw/openclaw/pull/78189) | bryce-d-greybeard | fix | 抑制泄漏的回复脚手架文本，提升用户体验 |
| [#71237](https://github.com/openclaw/openclaw/pull/71237) | lukeboyett | feat | 新增 `pruneOrphanedTranscripts` 工具清理孤立 JSONL 文件 |
| [#77929](https://github.com/openclaw/openclaw/pull/77929) | steipete | feat | 统一 Talk 会话运行时，整合语音栈（browser/native/Voice Call/Google Meet 等） |

### 推进中的重要 PRs

| PR | 作者 | 类型 | 说明 |
|----|------|------|------|
| [#77929](https://github.com/openclaw/openclaw/pull/77929) | steipete | feat (XL) | 统一 Talk 会话运行时 - 涉及 android/ios/macos/web-ui/google-meet 等多端 |
| [#73476](https://github.com/openclaw/openclaw/pull/73476) | laughy | feat (L) | 工具直接回复标志 `directReply`，绕过 LLM 二次推理 |
| [#77018](https://github.com/openclaw/openclaw/pull/77018) | jesse-merhi | fix (L) | 缩小 Gateway 代理绕过目标，新增 `proxy.loopbackMode` 配置 |
| [#69822](https://github.com/openclaw/openclaw/pull/69822) | gdibble | feat (M) | 会话消息事件 `socket.drain`，解决 vite 测试死锁 |
| [#49145](https://github.com/openclaw/openclaw/pull/49145) | ebeuvaliers | feat (M) | Signal 可靠回复上下文、反应唤醒、引用回复 (v2) |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| #75 | 104 | **[enhancement] Linux/Windows Clawdbot Apps** - 跨平台应用缺失 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| #25592 | 25 | **[bug] 工具调用间文本泄漏到消息渠道** | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| #9443 | 24 | **[enhancement] 请求预构建 Android APK 发布** | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| #77598 | 22 | **[maintainer] 追踪实时开发 agent 行为和轨迹** | [#77598](https://github.com/openclaw/openclaw/issues/77598) |
| #12590 | 19 | **[bug] memoryFlush 不能可靠触发** | [#12590](https://github.com/openclaw/openclaw/issues/12590) |
| #77668 | 17 | **[bug] Discord 网关在 'awaiting gateway readiness' 处挂起** | [#77668](https://github.com/openclaw/openclaw/issues/77668) |

### 热点分析

**#75 Linux/Windows 应用需求** 持续高热（104 评论），反映出用户对跨平台覆盖的强烈诉求。macOS/iOS/Android 已有应用，但 Linux 和 Windows 平台缺失，用户期望功能 parity。

**#25592 工具调用文本泄漏**（25 评论）是一个 UX 关键问题：agent 在工具调用之间产生的内部处理文本被错误路由到 Slack/iMessage 等消息渠道，影响用户体验。

**#9443 Android APK 预构建**（24 评论）表明用户希望开箱即用，而非自行编译 Android 应用。

---

## 5. Bug 与稳定性

### 高严重度 Bug

| Issue | 严重度 | 状态 | 说明 | Fix PR |
|-------|--------|------|------|--------|
| [#77668](https://github.com/openclaw/openclaw/issues/77668) | Regression | OPEN | Discord 网关在 macOS 上挂起，6 个重复已关闭 | - |
| [#77779](https://github.com/openclaw/openclaw/issues/77779) | Regression | OPEN | WeChat 插件启动失败，`api.runtime undefined` 导致初始化超时 | - |
| [#77116](https://github.com/openclaw/openclaw/issues/77116) | Regression | OPEN | 飞书渠道升级到 2026.5.2 后崩溃重启循环 | - |
| [#77248](https://github.com/openclaw/openclaw/issues/77248) | Behavior | CLOSED | Telegram 论坛主题回复静默丢弃 | - |

### 中等严重度 Bug

| Issue | 严重度 | 状态 | 说明 | Fix PR |
|-------|--------|------|------|--------|
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | Bug | OPEN | `memoryFlush` 每隔一次自动压缩才触发 | - |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | UX Bug | OPEN | 工具调用间文本泄漏到消息渠道 | - |
| [#46637](https://github.com/openclaw/openclaw/issues/46637) | Regression | OPEN | Qwen 3.5 的 `reasoning_content` 导致 oMLX JSON 解析错误 | - |
| [#44077](https://github.com/openclaw/openclaw/issues/44077) | Regression | CLOSED | 沙箱文件工具编辑将文件权限改为 0600，导致 EACCES | - |
| [#75907](https://github.com/openclaw/openclaw/issues/75907) | Regression | CLOSED | Windows + Node 24 冷启动 core-plugin-tools 阻塞 30-40s | - |

### 稳定性问题

| Issue | 主题 | 说明 |
|-------|------|------|
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | 心跳孤立模式问题 | 心跳节奏停滞、lightContext 保持 heavy、状态写入器缺失 |
| [#75839](https://github.com/openclaw/openclaw/issues/75839) | sessions.list 延迟 10s | 中等会话负载下延迟 10-16s，pi-trajectory-flush 超时 |
| [#76552](https://github.com/openclaw/openclaw/issues/76552) | Codex 运行时高 CPU | 小型 Linux 主机 CPU 负载极高，与 hook relay 和会话/历史工作相关 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 主题 | 链接 | 潜在纳入 |
|-------|------|------|----------|
| #75 | Linux/Windows 桌面应用 | [#75](https://github.com/openclaw/openclaw/issues/75) | 长期路线图 |
| #9443 | 预构建 Android APK | [#9443](https://github.com/openclaw/openclaw/issues/9443) | 较高可能性 |
| #10687 | 完全动态模型发现 (OpenRouter) | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 已在讨论 |
| #6615 | exec-approvals 拒绝名单支持 | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 功能合理 |
| #8719 | OpenClaw 安全配置 v1.1 | [#8719](https://github.com/openclaw/openclaw/issues/8719) | 安全相关 |

### 与已有 PR 关联的功能

| PR | 功能 | 说明 |
|----|------|------|
| [#73476](https://github.com/openclaw/openclaw/pull/73476) | 工具直接回复 | `directReply` 标志绕过 LLM 二次推理 |
| [#78031](https://github.com/openclaw/openclaw/pull/78031) | 紧凑写作风格 | 减少 workspace 模板 83% token 负载 |
| [#77929](https://github.com/openclaw/openclaw/pull/77929) | 统一 Talk 会话运行时 | 整合多端语音能力 |
| [#77053](https://github.com/openclaw/openclaw/pull/77053) | LM Studio 空闲 TTL | 通过原生 load API 实现可选空闲超时 |

### 用户体验增强

| Issue | 主题 | 链接 |
|-------|------|------|
| #9637 | TUI 无障碍配置（禁用 emoji/unicode） | [#9637](https://github.com/openclaw/openclaw/issues/9637) |
| #10118 | TUI 支持 Shift+Enter 换行 | [#10118](https://github.com/openclaw/openclaw/issues/10118) |
| #7722 | 文件系统沙箱配置 | [#7722](https://github.com/openclaw/openclaw/issues/7722) |

---

## 7. 用户反馈摘要

### 核心痛点

1. **跨平台覆盖不足**
   - Linux 和 Windows 用户无法获得与 macOS/iOS 相同的产品体验
   - Android 用户需要自行编译，门槛较高

2. **消息渠道文本泄漏**
   - 工具调用间的内部处理文本被暴露给用户
   - 影响专业场景使用体验

3. **版本升级回归问题**
   - 多个渠道（WeChat、飞书、Discord）在升级后出现稳定性问题
   - 用户对升级持谨慎态度

4. **性能与资源消耗**
   - Codex 运行时 CPU 占用高
   - 会话列表操作延迟严重
   - 轨迹刷新超时

### 正面反馈信号

- 社区活跃度高，Issue 和 PR 响应及时
- 新版本 Google Meet/Voice Call 桥接功能获得关注
- 统一 Talk 会话运行时的大规模重构显示项目长期投入

---

## 8. 待处理积压

### 长期未解决的高影响 Issue

| Issue | 创建时间 | 评论数 | 主题 | 建议 |
|-------|----------|--------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 104 | Linux/Windows 应用 | 需官方路线图确认 |
| [#2597](https://github.com/openclaw/openclaw/issues/2597) | 2026-01-27 | 8 | 上下文使用百分比显示 | 功能合理，考虑纳入 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | 12 | safe/unsafe ClawdBot | 安全相关，需评估 |
| [#1210](https://github.com/openclaw/openclaw/issues/1210) | 2026-01-19 | 6 | Discord 图片 base64 存储问题 | 长期存在，影响会话大小 |

### 建议优先处理

1. **回归问题**：Discord/WeChat/飞书渠道稳定性需尽快修复
2. **工具调用文本泄漏**（#25592）：影响核心 UX
3. **memoryFlush 可靠性**（#12590）：影响内存管理
4. **动态模型发现**（#10687）：OpenRouter 用户强烈需求

---

**报告生成时间：** 2026-05-06
**数据来源：** GitHub OpenClaw/openclaw 仓库活动日志

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-05-06
**数据来源：** OpenClaw、NanoBot、Zeroclaw、PicoClaw 四大项目 GitHub 活动日志

---

## 1. 生态全景

2026年5月的个人 AI 助手开源生态呈现**头部项目领跑、多点创新并进**的格局。OpenClaw 以日均 500 条 Issues/PR 更新的绝对体量占据生态核心位置，其 v2026.5.4 版本在实时语音桥接领域取得突破性进展；NanoBot、Zeroclaw、PicoClaw 则在细分场景深耕，分别聚焦多代理并发控制、WhatsApp 集成、边缘嵌入式部署。值得关注的是，**跨平台覆盖不足、工具调用文本泄漏、生产环境稳定性**构成全生态共同挑战，而 MQTT 通道支持、Provider 能力扩展、记忆/上下文管理正成为下一阶段竞逐焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 新版本 | 待合并 PR | 活跃度评级 | 健康度评估 |
|------|-------------|-----------|--------|-----------|-----------|-----------|
| **OpenClaw** | 500 (344新/活跃) | 500 (357待合并) | ✅ v2026.5.4 | 357 | 🔥🔥🔥 极高 | 良好（存在回归问题） |
| **NanoBot** | 6 (2关闭) | 14 (8合并) | ❌ 无 | 6+ | 🔥🔥 高度 | 稳健 |
| **Zeroclaw** | 50 (46新/活跃) | 50 (39待合并) | ❌ 无 | 39 | 🔥🔥 高度 | 稳健推进 |
| **PicoClaw** | 17 (13新/活跃) | 29 (20待合并) | ✅ v0.2.8-nightly | 20 | 🔥🔥 高度 | 良好（1个高危漏洞） |

**关键数据解读：**
- OpenClaw 活跃度是第二梯队项目的 **10 倍**，呈现明显的生态主导地位
- Zeroclaw 与 PicoClaw 活跃度相近，均处于功能快速迭代期
- NanoBot 规模最小但合并效率高（8/14 ≈ 57%），代码质量把控严格

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|----------|
| **社区规模** | 日均 1000 条活动记录 | 远超同类项目总和 |
| **功能覆盖** | 覆盖 Google Meet/Voice Call/Twilio/Discord/Telegram 等 10+ 渠道 | 最全面 |
| **版本节奏** | 保持周级正式版发布 | 最稳定 |
| **技术深度** | 实时语音桥接、背压感知缓冲等前沿特性 | 领先 |

### 3.2 技术路线差异

OpenClaw 采用**全栈集成路线**，将语音栈、消息渠道、工具生态深度整合；NanoBot 侧重**多代理协调与 SDK 完整性**；Zeroclaw 聚焦**安全配置与部署体验**；PicoClaw 则走**轻量化边缘路线**。这种分化反映了市场对 AI 助手产品的不同定位需求。

### 3.3 社区规模量化

| 指标 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| 24h Issues 增量 | 344 | 4 | 46 | 13 |
| 24h PR 增量 | 357 | 6 | 39 | 20 |
| 核心维护者 | bryce-d-greybeard, steipete 等 | chengyongru, JiajunBernoulli | 多人协作 | sipeed 团队 |

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映了生态级技术趋势：

### 4.1 跨平台应用覆盖

| 项目 | 具体诉求 | 优先级 |
|------|----------|--------|
| OpenClaw | Linux/Windows 桌面应用缺失（#75，104 条评论） | ⭐⭐⭐ 长期路线图 |
| PicoClaw | 通用二进制构建（arm64+x86_64，#6339） | ⭐⭐ v0.8.x |
| Zeroclaw | 桌面菜单栏应用（#6327、#6329） | ⭐⭐ v0.8.x |

**诉求本质：** 用户期望在非 macOS 平台获得同等体验，跨平台 parity 成为生态瓶颈。

### 4.2 生产环境稳定性

| 项目 | 具体问题 | 严重度 |
|------|----------|--------|
| OpenClaw | Discord 网关挂起、WeChat/飞书回归问题 | 🔴 Regression |
| NanoBot | Telegram 长轮询静默挂起（#3626） | 🟡 中 |
| Zeroclaw | WhatsApp Web 协议兼容性、消息流中断（#6246） | 🔴 P1 |
| PicoClaw | 网关启动异常（#2513）、定时任务频道错误（#1757） | 🟡 中 |

**诉求本质：** 从「能跑」到「跑稳」是全生态面临的共同挑战。

### 4.3 记忆与上下文管理

| 项目 | 具体诉求 | 状态 |
|------|----------|------|
| OpenClaw | memoryFlush 可靠性（#12590）、轨迹追踪（#77598） | OPEN |
| NanoBot | 会话级焦点工具（#3292，9 条评论） | 讨论中 |
| Zeroclaw | 内存模块 session_id 不匹配（#5550） | CLOSED 待验证 |
| PicoClaw | 上下文和记忆管理增强（#2774） | Issue 新开 |

**诉求本质：** 多任务场景下的注意力维持和长期记忆可靠性。

### 4.4 Provider/模型能力扩展

| 项目 | 具体功能 |
|------|----------|
| PicoClaw | Gemini 网络搜索 Provider（#2763）、图片生成工具（#2760） |
| Zeroclaw | typed-family split for model + TTS providers（#6403） |
| OpenClaw | 动态模型发现 OpenRouter（#10687） |
| NanoBot | LangSmith 完整集成（#3140） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| **核心定位** | 全功能旗舰 | 多代理 SDK | 安全部署专家 | 边缘嵌入式 |
| **目标用户** | 企业级/全场景 | 开发者/集成商 | 自托管/隐私敏感 | 硬件/IoT |
| **架构特点** | 统一 Talk 会话运行时 | 子代理并发控制 | typed-provider 配置 | 轻量化适配 |
| **差异化能力** | 实时语音桥接 | RunResult 完整 SDK | HMAC 工具收据 | MQTT 通道 |
| **安全侧重** | 沙箱文件工具 | SSRF 防护 | allowed-numbers 限制 | find / 沙箱漏洞修复 |

**市场定位矩阵：**

```
                    通用性 →
         ┌─────────────────────────────────────────┐
         │                                         │
   嵌 ╲   │         PicoClaw (边缘)                │
   入 ╲   │                                         │
   式 ╲   │                                         │
         │                                         │
   专 ╲   │                                         │
   业 ╲   │    NanoBot (SDK)    Zeroclaw (安全)    │
   性 ╲   │                                         │
         │                                         │
   ↑     │                                         │
   复 ╲   │                                         │
   杂 ╲   │         OpenClaw (全功能)               │
   性     │                                         │
         └─────────────────────────────────────────┘
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|------|------|------|----------|
| **第一梯队** | OpenClaw | 极高活跃度、成熟发布流程 | 质量巩固 + 持续扩展 |
| **第二梯队** | Zeroclaw、PicoClaw | 高活跃度、功能快速迭代 | 快速成长期 |
| **第三梯队** | NanoBot | 适中活跃度、代码质量优先 | 精细化打磨期 |

### 6.2 成熟度信号

| 信号 | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|------|----------|---------|----------|----------|
| 版本发布节奏 | 周级正式版 | 无（功能积累期） | Milestone 跟踪（v0.7.5） | Nightly 自动构建 |
| Bug 响应速度 | 24h 内响应 | 及时 | 17 条评论 Issue 未解决 | 有积压 |
| 回归问题数量 | 4 个 Regression | 无报告 | 多个 P1 | 1 个安全漏洞 |
| 文档完善度 | 完整 | SDK 文档兑现 | 中文文档有错误 | 基础 |

### 6.3 迭代阶段判断

- **OpenClaw：** 从「功能爆发」转向「稳定性优先」，v2026.5.4 无破坏性变更体现成熟
- **Zeroclaw：** v0.8.0 集成工作进行中，处于架构重构期
- **PicoClaw：** Nightly 构建 + 功能 PR 积压，显示快速迭代特征
- **NanoBot：** 合并效率高（57%），代码质量把控严格，进入精细化阶段

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**① 实时语音桥接成为新战场**

OpenClaw v2026.5.4 的 Google Meet/Voice Call 实时语音桥接升级，叠加 Twilio 拨号优化，标志着头部项目正式将「实时通话」纳入 AI 助手核心能力集。预计 Zeroclaw、PicoClaw 将跟进类似功能。

**② 安全沙箱从「有」到「可靠」**

PicoClaw 的 `find /` 沙箱漏洞（#2688）、OpenClaw 的工具调用文本泄漏（#25592）表明：安全机制的存在已不满足需求，**防绕过设计**和**边界验证**成为下一阶段重点。

**③ 多代理协调从概念走向落地**

NanoBot 的 `maxConcurrentSubagents` 配置（#3634、#3615）、OpenClaw 的统一 Talk 会话运行时（#77929）显示，多代理架构正在从实验性功能转向生产可用。

**④ 边缘/嵌入式场景需求崛起**

PicoClaw 的 MQTT 通道支持（#2705）、NXP i.MX93 硬件适配成功，暗示 AI 助手正从「云端服务」向「端侧部署」延伸。

**⑤ 渠道安全成为 WhatsApp 集成的技术瓶颈**

Zeroclaw 的 self-chat 模式误触发（#6351）、allowed-numbers 绕过（#6350）、协议兼容性（#6246）问题集中爆发，反映 WhatsApp Web 渠道的技术复杂性显著高于其他平台。

### 7.2 对 AI 智能体开发者的参考价值

| 开发者角色 | 关键启示 |
|-----------|----------|
| **框架选型** | 若需全功能覆盖选 OpenClaw；若专注多代理 SDK 选 NanoBot；若重视自托管安全选 Zeroclaw；若面向边缘场景选 PicoClaw |
| **技术投入** | 实时语音、并发控制、记忆管理是 2026 年核心技术方向 |
| **风险规避** | 关注各项目的回归问题积压，升级前检查 changelog；WhatsApp Web 集成需预留额外排障时间 |
| **贡献方向** | 跨平台应用、稳定性修复、文档完善是各项目共同的高价值贡献点 |

---

**报告生成时间：** 2026-05-06
**分析周期：** 过去 24 小时
**数据完整性：** 基于四项目 GitHub 公开活动日志，Issues/PR 数量为实际统计值，评论数截至报告生成时

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-06
**项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**数据周期**: 过去 24 小时

---

## 1. 今日速览

NanoBot 今日保持高度活跃，共处理 **14 条 PR 更新**（其中 8 条已合并/关闭）和 **6 条 Issues 更新**（2 条已关闭）。项目在**并发控制**和**内存管理**两个关键领域取得重要进展：两个独立 PR（#3634、#3615）同时实现了子代理并发限制功能，修复了本地 LLM 服务器 OOM 问题；同时 #3631 修复了 Dream 模块游标错误前进导致的静默内存丢失问题。整体代码合并节奏稳健，无新版本发布，但多个功能 PR 处于待审状态，预计近期将有功能合入。

---

## 2. 版本发布

**今日无新版本发布**。

---

## 3. 项目进展

今日共 **8 条 PR 已合并/关闭**，项目在稳定性、SDK 完善度和多渠道支持方面均有推进：

| PR | 状态 | 主题 | 贡献者 |
|---|---|---|---|
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | ✅ 已合并 | 限制并发子代理执行（新增 `maxConcurrentSubagents` 配置） | @chengyongru |
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | ✅ 已合并 | 仅在批次完成后推进 dream_cursor，防止静默内存丢失 | @JiajunBernoulli |
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | ✅ 已合并 | 软化 SSRF 防护恢复逻辑，避免运行时中止 | @Re-bin |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | ✅ 已合并 | Telegram 静默忽略未授权用户 | @kaseru |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | ✅ 已合并 | 填充 `RunResult.tools_used` 和 `RunResult.messages` | @chengyongru |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | ✅ 已合并 | Feishu 媒体文件返回绝对路径 | @futurist |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | ✅ 已合并 | Feishu 消息中包含发送者身份信息 | @BarclayII |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | ✅ 已合并 | 限制并发子代理执行（独立实现） | @mrbob-git |

**关键进展解读**：
- **并发控制完善**：两个 PR 从不同角度实现了子代理并发限制，#3634 通过配置项 `agents.defaults.maxConcurrentSubagents`（默认 1）提供可控方案，#3615 提供等价实现，均关闭了 #3611
- **内存安全修复**：#3631 修复了 #3630 报告的 Dream 模块游标错误前进问题，避免 Phase 1 错误时静默丢失内存条目
- **SDK 完整性提升**：#3620 终于兑现了 `RunResult` 的文档承诺，SDK 消费者现在可以获取工具调用和消息历史

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#3292** - Session-Level Focus Tool 功能请求（9 条评论）
🔗 https://github.com/HKUDS/nanobot/issues/3292
📅 创建: 2026-04-19 | 更新: 2026-05-05
👤 @piliplaker

**核心诉求**：用户希望在真实工作场景中，AI 代理能像人类一样维护"任务看板"——被临时问题打断后能返回主任务。当前 `my` 工具的 scratchpad 机制不足以实现跨中断的注意力锚定。

**热度分析**：该 Issue 持续活跃超过 2 周，评论数领先其他 Issues，反映了**多任务代理协调**是社区强烈需求的功能方向。

---

**#3626** - Telegram 长轮询静默挂起问题（2 条评论）
🔗 https://github.com/HKUDS/nanobot/issues/3626
📅 创建/更新: 2026-05-05
👤 @WormW

**核心诉求**：网络问题（ISP NAT 超时、Wi-Fi 漫游、防火墙重置）导致 Telegram 长轮询静默挂起，Bot 进程存活但停止接收消息，仅能发送。

**热度分析**：今日新开即获关注，属于**生产环境稳定性**类问题，影响实际部署场景。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | GPT-5.5 模型返回 "Duplicate item found with id" 错误，无法恢复 | 🆕 新开 | 无 |
| 🟡 中 | [#3626](https://github.com/HKUDS/nanobot/issues/3626) | Telegram 长轮询静默挂起，Bot 无法接收消息 | 🆕 新开 | 无 |
| 🟡 中 | [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API `reasoning_content` 验证错误 | 已识别根因 | 已提供 Patch |
| 🟢 低 | [#3630](https://github.com/HKUDS/nanobot/issues/3630) | Dream 游标错误前进导致内存条目静默丢失 | ✅ 已关闭 | [#3631](https://github.com/HKUDS/nanobot/pull/3631) |

**#3633 需重点关注**：GPT 模型返回的 "Duplicate item found with id" 错误导致 Codex 无法恢复，属于**阻断性问题**，建议优先响应。

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本：

| 功能 | Issue/PR | 状态 | 评估 |
|---|---|---|---|
| **会话级焦点工具** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 讨论中 | ⭐⭐⭐ 高优先级，社区需求强烈 |
| **LangSmith 完整集成** | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | 待合并 | ⭐⭐ 可观测性增强，已实现自动插桩 |
| **SimpleX 渠道支持** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | 待合并 | ⭐⭐ 扩展消息渠道覆盖 |
| **HF Spaces 生产部署** | [#3621](https://github.com/HKUDS/nanobot/pull/3621) | 待合并 | ⭐⭐ 部署场景优化 |
| **before_process Hook** | [#3628](https://github.com/HKUDS/nanobot/pull/3628) | 待合并 | ⭐ 消息预处理扩展点 |

**路线图信号**：从今日数据看，项目正朝着**生产稳定性**（并发控制、内存安全）和**可观测性**（LangSmith 集成）方向演进，同时持续扩展多渠道支持。

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的用户痛点：

**正面反馈**：
- 子代理并发限制功能受到欢迎，解决了本地 LLM 服务器 OOM 的实际问题

**痛点与需求**：

1. **多任务注意力维持**：用户期望 AI 代理能像人类一样在被打断后返回主任务（#3292）
2. **生产环境稳定性**：Telegram 部署在网络不稳定环境下存在静默失败风险（#3626）
3. **模型兼容性**：DeepSeek 新模型和 GPT-5.5 存在 API 兼容性问题（#3584、#3633）
4. **内存可靠性**：Dream 模块的错误处理逻辑导致内存静默丢失（#3630，已修复）

---

## 8. 待处理积压

以下 Issues/PR 需维护者关注：

| 类型 | 编号 | 主题 | 积压时间 | 优先级 |
|---|---|---|---|---|
| PR | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | LangSmith 完整集成 | ~22 天 | ⭐⭐ |
| PR | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | SimpleX 渠道支持 | ~9 天 | ⭐⭐ |
| Issue | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 会话级焦点工具 | ~17 天 | ⭐⭐⭐ |
| Issue | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | GPT Duplicate id 错误 | 🆕 今日 | 🔴 高 |

**建议**：#3633 作为新开的阻断性 Bug，建议优先响应；#3292 讨论充分，可考虑给出官方立场。

---

**报告生成时间**: 2026-05-06
**数据来源**: [NanoBot GitHub Repository](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期：** 2026-05-06
**数据来源：** github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

过去 24 小时内，Zeroclaw 项目保持高度活跃，共产生 **50 条 Issues 更新**（46 条新开/活跃，4 条关闭）和 **50 条 PR 更新**（39 条待合并，11 条已合并/关闭）。项目整体呈现稳健推进态势，未发布新版本，但多个高优先级 Bug 修复已进入 Review 阶段。社区讨论热度较高，尤其是 WhatsApp Web 频道的多个安全相关 Bug 引发关注，v0.8.0 版本的集成工作正在积极进行中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **11 条 PR**，以下为重要进展：

| PR 编号 | 类型 | 标题 | 状态 |
|---------|------|------|------|
| [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) | Bug Fix | fix(channel:whatsapp): drop own-account outbound in non-self chats | OPEN |
| [#6411](https://github.com/zeroclaw-labs/zeroclaw/pull/6411) | CI | ci(release): restore MUSL static binaries for Linux | OPEN |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | Enhancement | feat(config,providers): typed-family split for model + TTS providers | OPEN |
| [#6409](https://github.com/zeroclaw-labs/zeroclaw/pull/6409) | Skills | feat(skills): show tier banner on `zeroclaw skills install` | OPEN |
| [#6412](https://github.com/zeroclaw-labs/zeroclaw/pull/6412) | CI | fix(ci): re-introduce post-release CHANGELOG-next.md cleanup | OPEN |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | Bug Fix | fix(matrix): avoid duplicate inbound replies | OPEN |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | Enhancement | feat(gateway,web): nodes dashboard + device identification | OPEN |
| [#6385](https://github.com/zeroclaw-labs/zeroclaw/pull/6385) | Enhancement | feat(installer): --preset, --with/--without-gateway, 3-way onboard prompt | OPEN |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | Enhancement | feat(obs): enrich OTel tool spans with gen_ai.tool.* semantic convention attrs | OPEN |
| [#6384](https://github.com/zeroclaw-labs/zeroclaw/pull/6384) | Bug Fix | fix(runtime, channels): unify session backend behind one factory | OPEN |
| [#6405](https://github.com/zeroclaw-labs/zeroclaw/pull/6405) | Bug Fix | fix(tools): align MCP HTTP/SSE timeouts with tool-call budget | OPEN |

**关键进展解读：**

- **WhatsApp 安全修复**（#6414）：修复个人模式下将操作者自身发送的消息错误识别为入站提示的问题，防止向联系人发送意外回复
- **CI 恢复**（#6411）：恢复 MUSL 静态二进制构建，修复此前删除工作流导致的功能缺失
- **v0.8.0 集成**（#6403）：目标分支为 `integration/v0.8.0`，将模型和 TTS 提供商拆分为类型化家族
- **节点仪表盘**（#6392）：新增 `/nodes` 页面，支持跨集群查看所有 Zeroclaw 实例的健康状态

---

## 4. 社区热点

以下 Issues 和 PRs 引发最多讨论：

### 讨论最活跃的 Issues

| 编号 | 标题 | 评论数 | 核心诉求 |
|------|------|--------|----------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | Bug: default_model issue on fresh install | 17 | 新安装用户在 LXC 容器中配置 ollama 时遇到 default_model 错误，workflow 被阻塞 |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Feature: A better LOGO of Zeroclaw | 9 | 社区呼吁重新设计项目 Logo，提升品牌辨识度 |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | release: v0.7.5 milestone tracking | 6 | v0.7.5 版本自动化发布流程跟踪 |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | bug(memory): autosaved Conversation memories invisible to recall | 6 | 内存模块 session_id 不匹配导致自动保存的对话记忆无法被召回 |

### 热点 PRs

| 编号 | 标题 | 热度分析 |
|------|------|----------|
| [#6396](https://github.com/zeroclaw-labs/zeroclaw/pull/6396) | feat(ci): force check pr title | 自动化 PR 标题格式校验，提升代码库规范性 |
| [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | feat(config/channels): add reply_min_interval_secs to TelegramConfig | 添加消息回复最小间隔配置，防止配对身份频道的过度回复 |

**热点解读：** 社区对项目品牌建设（Logo）、核心功能稳定性（default_model、memory recall）以及开发者体验（PR 规范检查）高度关注。

---

## 5. Bug 与稳定性

按严重程度排列的活跃 Bug：

### P1 - 关键阻塞

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | OPEN | ❌ |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | context_compression drops assistant(tool_calls) for OpenAI-compatible providers | IN-PROGRESS | ❌ |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp Web — self-chat-mode triggers on all fromMe messages | IN-PROGRESS | ✅ #6414 |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web — allowed-numbers bypassed for LID-based contacts | ACCEPTED | ❌ |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web channel: pair succeeds but messages don't flow after April 2026 protocol bump | OPEN | ❌ |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | bash completion infinite recursion | OPEN | ❌ |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount shadows pre-built web dashboard | OPEN | ❌ |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | Custom remote provider sends local image file paths instead of data URLs | OPEN | ❌ |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Onboarding/Providers: Llama.cpp should default to "responses" | OPEN | ❌ |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding: choosing OpenAI Codex prompts for OpenAI API key | ACCEPTED | ❌ |

### P2 - 功能降级

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | gateway-chat succeeds but /api/cost stays zero | OPEN | ❌ |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt Caching does not work with telegram | OPEN | ❌ |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | Per-channel reply-min-interval-secs | IN-PROGRESS | ✅ #6389 |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | Fresh install, web_search doesn't work, web_fetch does | OPEN | ❌ |

**稳定性评估：** WhatsApp Web 频道近期问题频发，涉及协议兼容性、安全漏洞（self-chat 模式、allowed-numbers 绕过）等问题，需优先关注。多个 P1 Bug 已有对应 Fix PR（#6414），预计近期可合并。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| 编号 | 标题 | 状态 | 纳入版本可能性 |
|------|------|------|---------------|
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | v0.7.5 milestone tracking — 自动化发布流程 | IN-PROGRESS | ✅ v0.7.5 |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | typed-family split for model + TTS providers | IN-PROGRESS | ✅ v0.8.0 |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | real heartbeat tracking for daemon nodes | BLOCKED | 🔲 待评估 |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot respond only in specific Discord channels | ACCEPTED | 🔲 待评估 |
| [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) | GitHub action that checks for PR's title | IN-PROGRESS | ✅ 即将合并 |
| [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327) | Desktop menu-bar chat — channels overview parity | ACCEPTED | 🔲 v0.8.x |
| [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | Menu-bar tray menu items | ACCEPTED | 🔲 v0.8.x |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | Universal binary (arm64 + x86_64) build for macOS | ACCEPTED | 🔲 v0.8.x |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | V3 env-var override mechanism for credentials | OPEN | 🔲 待评估 |
| [#6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251) | Add cost under provider | IN-PROGRESS | 🔲 v0.8.x |

**路线图信号：** v0.7.5 聚焦自动化发布，v0.8.0 将带来配置系统的重大重构（typed-family providers）。桌面应用功能（menu-bar、tray、universal binary）正在稳步推进。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

### 部署与配置问题
- **LXC 容器部署**：用户在新安装环境中遇到 ollama 连接配置问题，default_model 设置不生效
- **Docker 部署**：bind mount 覆盖预构建 dashboard，导致用户无法访问 Web 界面
- **Onboarding 流程**：OpenAI Codex 配置选项误导用户；Llama.cpp 默认 API 格式错误

### 频道功能问题
- **WhatsApp Web**：2026 年 4 月协议更新后消息流中断；self-chat 模式误触发；allowed-numbers 限制被绕过
- **Telegram**：Prompt Caching 功能不生效，导致每次都完整处理
- **Discord**：用户希望限制 Bot 仅在特定频道响应

### 开发者体验
- **PR 规范**：社区呼吁自动化 PR 标题格式校验
- **文档**：中文文档网站安装指南存在错误

### 核心功能
- **Memory 模块**：自动保存的对话记忆因 session_id 不匹配无法召回
- **成本追踪**：gateway-chat 成功但 /api/cost 返回零，未生成使用记录文件

---

## 8. 待处理积压

以下 Issue 长期未响应或处于停滞状态，建议维护者关注：

| 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|----------|------|------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Feature: A better LOGO of Zeroclaw | 2026-03-25 | OPEN | 社区关注度高，建议评估是否纳入品牌升级计划 |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | bug(memory): autosaved Conversation memories invisible | 2026-04-09 | CLOSED | 已关闭，需确认是否真正修复 |
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | 2026-04-26 | OPEN | 17 条评论，P1 优先级，需优先处理 |
| [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) | Re-activate HMAC tool receipts | 2026-04-28 | IN-PROGRESS | 文档描述的功能尚未激活，需完成运行时接线 |

**积压评估：** 项目整体响应速度良好，但部分 Issue（如 #6123）评论数高但迟迟未解决，建议优先处理高评论量的阻塞性问题。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 更新（24h） | 50 条 |
| PRs 更新（24h） | 50 条 |
| 新版本发布 | 0 个 |
| 待合并 PRs | 39 条 |
| 已合并/关闭 PRs | 11 条 |
| P1 Bug 总数 | 10 条 |
| P1 Bug 已有 Fix | 2 条 |

---

*报告生成时间：2026-05-06 | 数据截止：2026-05-06 23:59 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-05-06

---

## 1. 今日速览

PicoClaw 项目今日保持高度活跃，共产生 **17 条 Issues 更新**（13 新开/活跃，4 关闭）和 **29 条 PR 更新**（20 待合并，9 已合并/关闭）。项目发布了 **v0.2.8-nightly.20260506** 自动化构建版本。社区在 Telegram 频道功能增强（论坛话题上下文保持、媒体组处理）、Provider 能力扩展（Gemini 网络搜索、图片生成）以及安全修复方面有显著推进。整体项目健康度良好，但存在 **1 个高优先级安全漏洞**（#2688）待修复。

---

## 2. 版本发布

### 🌙 Nightly Build: v0.2.8-nightly.20260506.eb4e1875

| 属性 | 详情 |
|------|------|
| **版本号** | v0.2.8-nightly.20260506.eb4e1875 |
| **构建类型** | 自动化 Nightly Build |
| **稳定性** | 可能不稳定，请谨慎使用 |
| **变更日志** | [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

> ⚠️ **注意**：此为自动化构建版本，可能包含未完全测试的功能，不建议在生产环境使用。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PR

| PR # | 标题 | 状态 | 关键变更 |
|------|------|------|----------|
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | fix: resolve cron task creation and execution failures | CLOSED | 修复定时任务创建和执行失败问题 |
| [#2470](https://github.com/sipeed/picoclaw/pull/2470) | Fix cron reminder phrasing and improve MCP tool visibility | CLOSED | 优化 cron 提醒措辞，提升 MCP 工具可见性 |
| [#2372](https://github.com/sipeed/picoclaw/pull/2372) | fix(config,providers): resolve api_key, model lookup, and fallback bugs | CLOSED | 修复 API 密钥解析、模型查找和回退逻辑 |
| [#2370](https://github.com/sipeed/picoclaw/pull/2370) | fix: tolerate whitespace in split marker from LLM output | CLOSED | 增强 LLM 输出分割标记的容错性 |
| [#2369](https://github.com/sipeed/picoclaw/pull/2369) | feat: PicoWatch — trial monitoring menu bar app + WhatsApp status counter | CLOSED | 新增 macOS 菜单栏监控应用 |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) | fix: avoid restoring stale sessions with dangling tool calls | CLOSED | 防止恢复带有未完成工具调用的过期会话 |

### 🔄 待合并的热门 PR

| PR # | 标题 | 关键变更 | 预期影响 |
|------|------|----------|----------|
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | add MQTT channel support | 新增 MQTT 协议通道支持 | ⭐ 高 - 扩展集成能力 |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | feat(tools): port update_plan tool from OpenClaw | 移植 OpenClaw 的 update_plan 工具 | ⭐ 中 - 增强任务管理 |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | feat(providers): add gemini web search provider | 添加 Gemini 网络搜索 Provider | ⭐ 高 - 扩展搜索能力 |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | feat(providers): add provider-backed image generation tool | 添加 Provider 支持的图片生成工具 | ⭐ 高 - 新功能 |
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) | fix(providers): support OpenAI OAuth for Codex and transcription | 支持 OpenAI OAuth 认证 | ⭐ 中 - 修复认证问题 |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Add session management commands: /status, /compact, /new | 新增会话管理命令 | ⭐ 中 - 提升 UX |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 类型 | 热度分析 |
|---------|------|--------|------|----------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | [BUG] gateway start abnormal | 8 | Bug | 网关启动异常，用户报告 picoclaw-launcher -public -no-browser 后网关进程异常 |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] channel error with cron task | 7 | Bug | 定时任务场景下的频道错误，影响 Telegram 频道用户 |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | [Feature] Streaming Output for Web Chat | 6 | Enhancement | Web 聊天流式输出需求，社区关注度高 |
| [#2431](https://github.com/sipeed/picoclaw/issues/2431) | [Feature] Tool execution failures should report which tool was blocked | 4 | Enhancement | 工具执行失败时需报告被阻止的具体工具，已关闭 |

### 💡 功能请求亮点

1. **MQTT 通道支持** ([#2705](https://github.com/sipeed/picoclaw/pull/2705)) - 社区积极开发中，将扩展 PicoClaw 的协议兼容性
2. **Web 聊天流式输出** ([#1950](https://github.com/sipeed/picoclaw/issues/1950)) - 6 条评论，需求明确
3. **配置流式 HTTP 请求** ([#2404](https://github.com/sipeed/picoclaw/issues/2404)) - 4 条评论，支持 LLM 后端的流式请求

---

## 5. Bug 与稳定性

### 🚨 高优先级问题

| Issue # | 标题 | 严重程度 | 状态 | 备注 |
|---------|------|----------|------|------|
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Security: find / can enumerate paths outside workspace sandbox | 🔴 高 | OPEN | **安全漏洞**：`find /` 命令可枚举工作区外的文件系统路径，绕过安全沙箱 |

### ⚠️ 中等优先级问题

| Issue # | 标题 | 领域 | 状态 | 备注 |
|---------|------|------|------|------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | [BUG] gateway start abnormal | Channel | OPEN | 网关启动异常，8 条评论 |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] channel error with cron task | Channel/Cron | OPEN | 定时任务触发频道错误 |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | [BUG] Multi-user group channels: conversation history lacks sender attribution | Channel/Agent | OPEN | 群组频道会话历史缺少发送者归属 |
| [#2694](https://github.com/sipeed/picoclaw/issues/2694) | [BUG] run in adb shell: failed to verify certificate: x509 | Provider | OPEN | Android ADB 环境证书验证失败 |

### ✅ 已修复/关闭的 Bug

| Issue # | 标题 | 修复方式 |
|---------|------|----------|
| [#2431](https://github.com/sipeed/picoclaw/issues/2431) | Tool execution failures should report which tool was blocked | 已关闭 |
| [#2471](https://github.com/sipeed/picoclaw/issues/2471) | [BUG] neometron nvidia ai / gemini models issues | 已关闭 |
| [#2726](https://github.com/sipeed/picoclaw/issues/2726) | generateLeafSummary 验收标准问题 | 已关闭 |
| [#2716](https://github.com/sipeed/picoclaw/issues/2716) | SVG files fail to send on Telegram | 已关闭 |

---

## 6. 功能请求与路线图信号

### 🌟 值得关注的新功能

| Issue/PR # | 标题 | 预期纳入 | 分析 |
|------------|------|----------|------|
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | add MQTT channel support | 高 | PR 已打开，社区驱动，扩展协议支持 |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | feat(providers): add gemini web search provider | 高 | PR 已打开，增强搜索能力 |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | feat(providers): add provider-backed image generation tool | 高 | PR 已打开，图片生成能力 |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | 中 | Issue 活跃讨论，需求明确 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Add in config to send streaming HTTP request | 中 | 配置驱动的流式请求支持 |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Add session management commands: /status, /compact, /new | 中 | PR 打开中，提升 UX |
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) | Enhance PicoClaw Config Reliability and Migration Experience | 中 | 配置迁移体验优化 |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆 | 中 | 多 Agent 架构问题 |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) | context and memory management (inspired by opencode plugin) | 中 | 上下文和记忆管理增强 |
| [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Add Mission Control support for PicoClaw | 低 | 集成 OpenClaw 的 Mission Control |

### 📊 路线图信号分析

- **通道扩展**：MQTT 支持正在开发中，LINE SDK 正在重构（#2413）
- **Provider 能力增强**：Gemini 网络搜索、图片生成、OpenAI OAuth 支持
- **Telegram 深度优化**：多个 PR 聚焦论坛话题、媒体组、typing 状态处理
- **Agent 架构**：子 Agent 角色隔离、上下文管理、任务规划工具

---

## 7. 用户反馈摘要

### 📝 核心痛点

1. **安全沙箱漏洞** ([#2688](https://github.com/sipeed/picoclaw/issues/2688))
   - 用户报告 `find /` 命令可绕过工作区限制，枚举整个文件系统
   - 影响：所有使用 PicoClaw 处理不可信输入的场景

2. **网关启动异常** ([#2513](https://github.com/sipeed/picoclaw/issues/2513))
   - Debian 13 环境下 `picoclaw-launcher -public -no-browser` 后网关进程异常
   - 影响：公开部署场景

3. **定时任务频道错误** ([#1757](https://github.com/sipeed/picoclaw/issues/1757))
   - Raspberry Pi Zero W + Telegram 环境下，定时任务触发频道错误
   - 影响：自动化任务执行

4. **群组频道消息归属** ([#2702](https://github.com/sipeed/picoclaw/issues/2702))
   - Discord 等群组频道中，历史消息缺少发送者标识
   - 影响：多用户协作场景

### 💬 正面反馈与需求

- **硬件兼容性**：成功在 NXP i.MX93 EVK 上运行（#2646）
- **配置灵活性**：用户期望流式 HTTP 请求配置支持（#2404）
- **Web 聊天体验**：流式输出需求强烈（#1950）

---

## 8. 待处理积压

### ⏰ 长期未响应的 Issues（>14 天无更新）

| Issue # | 标题 | 创建时间 | 最后更新 | 优先级 | 备注 |
|---------|------|----------|----------|--------|------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] channel error with cron task | 2026-03-18 | 2026-05-05 | 中 | 7 条评论，活跃讨论中 |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | [Feature] Streaming Output for Web Chat | 2026-03-24 | 2026-05-05 | 中 | 6 条评论 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | [Feature] Add streaming config | 2026-04-07 | 2026-05-05 | 中 | 4 条评论 |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | refactor(line): use official LINE Bot SDK v8 | 2026-04-07 | 2026-05-05 | 中 | PR 打开中 |
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | CLI: Improve the embedding process | 2026-04-13 | 2026-05-05 | 中 | PR 打开中 |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | CLI: Fix onboard advisory | 2026-04-12 | 2026-05-05 | 低 | PR 打开中 |

### 🎯 建议优先处理

1. **安全漏洞** [#2688](https://github.com/sipeed/picoclaw/issues/2688) - 高优先级，需尽快发布安全修复
2. **网关启动问题** [#2513](https://github.com/sipeed/picoclaw/issues/2513) - 影响公开部署
3. **MQTT 通道** [#2705](https://github.com/sipeed/picoclaw/pull/2705) - 功能完整度高，可优先合并

---

## 📈 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 17 条/24h | 📊 稳定 |
| PR 活跃度 | 29 条/24h | 📈 较高 |
| 待合并 PR | 20

</details>