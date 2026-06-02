# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-02 01:57 UTC

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

**报告日期：** 2026-05-02
**数据来源：** github.com/openclaw/openclaw

---

## 1. 今日速览

过去24小时，OpenClaw 项目保持极高活跃度，共处理 **500 条 Issues 更新**（467 条新开/活跃，33 条关闭）和 **500 条 PR 更新**（465 条待合并，35 条已合并/关闭）。今日未发布新版本。项目整体呈现"高提交量、高反馈量"的双高态势，社区参与热情高涨。值得注意的是，多个长期未解决的 Bug（如 Gateway 内存泄漏、Telegram 稳定性问题）持续引发讨论，表明核心系统的稳定性仍是当前痛点。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，推进了关键功能或修复：

| PR 编号 | 标题 | 变更类型 | 重要性 |
|---------|------|----------|--------|
| [#75880](https://github.com/openclaw/openclaw/pull/75880) | feat(browser): add --headed flag to browser start | 功能新增 | ⭐⭐⭐ |
| [#75672](https://github.com/openclaw/openclaw/pull/75672) | feat(sessions): clean up archived transcript files on cleanup | 清理增强 | ⭐⭐ |
| [#75495](https://github.com/openclaw/openclaw/pull/75495) | fix(memory-host-markdown): use global regex to replace all managed blocks | Bug 修复 | ⭐⭐ |
| [#73079](https://github.com/openclaw/openclaw/pull/73079) | fix(minimax): request hex TTS output explicitly | Bug 修复 | ⭐⭐ |
| [#72843](https://github.com/openclaw/openclaw/pull/72843) | fix(agents): warm context-window cache for the gateway daemon | 性能优化 | ⭐⭐⭐ |
| [#75076](https://github.com/openclaw/openclaw/pull/75076) | Harden Control UI auth, status warnings, and build provenance | 安全加固 | ⭐⭐⭐⭐ |
| [#68435](https://github.com/openclaw/openclaw/pull/68435) | feat(gateway): accept audio/file content blocks in /v1/chat/completions | 功能增强 | ⭐⭐⭐ |

**亮点 PR 解读：**

- **#75880** 新增 `--headed` 标志，允许用户在运行时切换浏览器模式，提升开发体验
- **#75076** 大幅强化 Control UI 安全，包括安全头/CSP、认证引导配置、令牌清理等，属于安全专项改进
- **#72843** 修复 Gateway 守护进程长期运行时上下文窗口缓存未预热问题，避免首次运行后模型切换性能抖动

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃（按评论数排序）：

### Issues 热度榜

| 编号 | 标题 | 评论数 | 核心诉求 |
|------|------|--------|----------|
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway runtime degradation: pricing fetch 60s timeouts, Telegram polling stalls | 15 | **严重性能回归**：跨多版本（4.23/4.25/4.26）Windows 11 + Node 24 环境出现网络/定时器级联退化 |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad on plugin restart | 11 | **内存泄漏三连**：Manifest EADDRINUSE 重试循环、信号处理器累积、同步 I/O 导致 WS 握手饥饿 |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | Silently lost connection to Slack | 11 | Slack 连接静默断开，用户无法感知问题发生 |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | memory_search should support recursive subdirectory search | 10 | **功能增强**：支持 `memory/**/*.md` 递归搜索，解决日积月累的日记文件检索问题 |
| [#50248](https://github.com/openclaw/openclaw/issues/50248) | sessions cleanup --fix-missing can prune fresh cron sessions | 8 | 清理工具误删有效会话，导致任务丢失 |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | [RFC] Control UI plugin contribution slots | 8 | **架构提案**：为插件系统设计数据驱动的 UI 贡献槽位 |
| [#66944](https://github.com/openclaw/openclaw/issues/66944) | Plugin UI Extension System | 7 | 允许插件声明原生页面作为 Control UI Tab |

**热点分析：**
- **稳定性问题占主导**：前三位热点 Issue 均涉及 Gateway 稳定性，核心问题是长时间运行后的资源泄漏和网络退化
- **插件生态扩展需求旺盛**：#71736 和 #66944 均指向 Control UI 插件化，社区对开放扩展能力期待强烈
- **Slack/Telegram 集成问题突出**：多个 Issue 涉及这两个渠道的可靠性，表明多平台消息处理仍是挑战

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 严重（影响核心功能/安全）

| 编号 | 标题 | 严重性 | 已有 Fix PR? |
|------|------|--------|--------------|
| [#75707](https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU pinned at 100% | **Critical** | 否 |
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | macOS node auto-trusts first TLS certificate and accepts rogue gateway control | **Critical (CVSS 9.0)** | 否 |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) | Tailscale serve + auth.mode=none exposes gateway to full Tailnet | **Critical (CVSS 9.3)** | 否 |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway runtime degradation (pricing fetch 60s timeouts, Telegram polling stalls) | **High** | 否 |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad on plugin restart | **High** | 否 |

### 🟠 高（影响生产使用）

| 编号 | 标题 | 严重性 | 已有 Fix PR? |
|------|------|--------|--------------|
| [#75137](https://github.com/openclaw/openclaw/issues/75137) | TUI process consumes 89-99% CPU at idle (busy-loop) | **High** | 否 |
| [#73874](https://github.com/openclaw/openclaw/issues/73874) | Gateway HTTP/WS dispatch deadlock on Windows + Docker Desktop | **High** | 否 |
| [#68944](https://github.com/openclaw/openclaw/issues/68944) | CLI commands hang at WebSocket gateway handshake | **High** | 否 |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | Multi-tool turn replay produces orphan tool_use blocks (v2026.4.x regression) | **High** | 否 |

### 🟡 中（影响体验）

| 编号 | 标题 | 严重性 | 已有 Fix PR? |
|------|------|--------|--------------|
| [#74358](https://github.com/openclaw/openclaw/issues/74358) | Slack streaming preview silent when toolProgress: false | **Medium** | 否 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode does not inject messages mid-turn | **Medium** | 否 |
| [#50490](https://github.com/openclaw/openclaw/issues/50490) | Feishu activation mode switch ineffective | **Medium** | 否 |

**稳定性总结：**
- **Gateway 稳定性问题集中爆发**：CPU 100%、内存泄漏、WS 握手挂起等问题形成"稳定性危机"
- **安全漏洞需紧急关注**：TLS 证书信任和 Tailscale 认证绕过两个 Critical 安全问题尚未有 Fix PR
- **回归问题频发**：多个 Bug 标注为 "regression"，表明版本迭代中测试覆盖存在盲区

---

## 6. 功能请求与路线图信号

以下功能请求今日获得较多关注，可能进入下一版本：

| 编号 | 标题 | 需求类型 | 纳入可能性 |
|------|------|----------|------------|
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | memory_search 支持递归子目录搜索 | 功能增强 | ⭐⭐⭐⭐ 高 |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | Control UI plugin contribution slots (RFC) | 架构提案 | ⭐⭐⭐⭐ 高 |
| [#66944](https://github.com/openclaw/openclaw/issues/66944) | Plugin UI Extension System — native pages in Control UI | 功能增强 | ⭐⭐⭐ 中高 |
| [#50199](https://github.com/openclaw/openclaw/issues/50199) | Add Skill Priority Configuration | 功能增强 | ⭐⭐⭐ 中 |
| [#50404](https://github.com/openclaw/openclaw/issues/50404) | Session Sidebar with Chat History Management | UI 增强 | ⭐⭐⭐ 中 |
| [#50739](https://github.com/openclaw/openclaw/issues/50739) | system event priority/bypass-queue mode | 可靠性增强 | ⭐⭐⭐ 中 |
| [#47597](https://github.com/openclaw/openclaw/issues/47597) | Add streamTo="parent" support for runtime="subagent" | 功能补全 | ⭐⭐ 中 |
| [#47856](https://github.com/openclaw/openclaw/issues/47856) | configurable mediaLocalRoots for image tool | 配置增强 | ⭐⭐ 中 |

**路线图信号解读：**
- **Control UI 插件化** 是社区最强烈的呼声，与 #71736 RFC 和 #66944 Feature Request 形成呼应
- **记忆系统增强**（递归搜索、优先级配置）是提升 AI 能力的关键方向
- **会话管理 UI** 需求表明 Control UI 的用户体验仍有较大改进空间

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

### 痛点 1：Gateway 长时间运行不可靠
> "After a normal post-update gateway restart... three independent leaks compounded over ~10 minutes and starved the WS upgrade handler." — @bryangauvin

**场景**：生产环境 Gateway 运行一段时间后出现级联退化
**影响**：WebSocket 连接超时、消息处理停滞
**诉求**：稳定性优先，建议增加资源泄漏检测和自动恢复机制

### 痛点 2：Slack 连接静默失败
> "My slack connection to my openclaw had been working fine for several days. Today at lunch, I tried to demo to some friends and it never answered." — @tleyden

**场景**：重要演示时 Slack 连接静默断开
**影响**：无法及时发现故障，错过关键消息
**诉求**：增加连接状态监控和告警机制

### 痛点 3：记忆文件检索困难
> "As daily memory files (`memory/YYYY-MM-DD.md`) accumulate over months, users may want to search across all of them." — @leafbird

**场景**：日记式记忆管理，日积月累后检索困难
**影响**：历史信息无法有效复用
**诉求**：支持递归目录搜索

### 痛点 4：TUI 性能问题
> "`openclaw-tui` sits at **89-99 % CPU** for as long as the window is open — both while idle waiting for user input and while a backend turn is in progress." — @CalyieX

**场景**：本地 TUI 客户端 CPU 占用异常高
**影响**：设备发热、续航下降
**诉求**：优化渲染循环和状态更新逻辑

### 痛点 5：安全配置困惑
> "Gateway shows 'Run clawdbot doctor --fix' on startup but does not auto-apply safe fixes." — @coywolffuturist

**场景**：每次启动看到修复建议但需手动执行
**影响**：配置漂移、安全隐患累积
**诉求**：自动应用安全修复，减少用户操作负担

---

## 8. 待处理积压

以下 Issue 长期未响应或存在未解决的重要问题，需维护者关注：

### 长期开放 Issue（超过 30 天未解决）

| 编号 | 标题 | 创建日期 | 状态 | 优先级 |
|------|------|----------|------|--------|
| [#34400](https://github.com/openclaw/openclaw/issues/34400) | memory_search 递归搜索 | 2026-03-04 | OPEN | 高 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable | 2026-03-11 | OPEN | 高 |
| [#47597](https://github.com/openclaw/openclaw/issues/47597) | streamTo="parent" for subagent | 2026-03-15 | OPEN | 中 |
| [#47643](https://github.com/openclaw/openclaw/issues/47643) | Telegram sync failures on Windows | 2026-03-15 | OPEN | 高 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent sessions persist after completion | 2026-03-16 | OPEN | 高 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode inject issues | 2026-03-16 | OPEN | 中 |
| [#48780](https://github.com/openclaw/openclaw/issues/48780) | exec()/read() corrupted with </arg_value>> suffix | 2026-03-17 | OPEN | 高 |
| [#49157](https://github.com/openclaw/openclaw/issues/49157) | Session write locks leak causing deadlocks | 2026-03-17 | OPEN | Critical |
| [#50040](https://github.com/openclaw/openclaw/issues/50040) | Telegram polling stalls cause message loss | 2026-03-18 | OPEN | 高 |
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | TLS certificate trust issue (Security) | 2026-03-19 | OPEN | Critical |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) | Tailscale auth bypass (Security) | 2026-03-19 | OPEN | Critical |

### 关键积压问题提醒

1. **安全漏洞未修复**：#50642 和 #50630 两个 Critical 安全问题已开放超过 30 天，建议优先处理
2. **多代理编排不稳定**：#43367、#47975、#49157 形成"多代理问题集群"，影响高级用户使用
3. **Windows 兼容性问题突出**：多个 Issue 涉及 Windows 环境下的回归问题（#47643、#48780、#73874），建议建立 Windows CI 覆盖
4. **Telegram 集成持续有问题**：#50040、#47643 等表明 Telegram 渠道稳定性需系统性改进

---

## 总结建议

| 维度 | 评估 | 建议行动 |
|------|------|----------|
| **活跃度** | ✅ 极高 | 社区参与热情高涨，保持当前节奏 |
| **稳定性** | ⚠️ 需关注 | Gateway 稳定性问题集中，建议优先修复内存泄漏和 CPU 100% 问题 |
| **安全性** | 🔴 紧急 | 两个 Critical 安全漏洞（#50642、#50630）需紧急处理 |
| **功能进展** | ✅ 良好 | Control UI 插件化、记忆系统增强方向明确 |
| **积压处理** | ⚠️ 需加速 | 30+ 天未解决 Issue 较多，建议分类处理 |

---

*报告生成时间：2026-05-02 | 数据截止：2026-05-02 23:59 UTC*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-05-02
**分析范围：** 13 个开源项目（OpenClaw 核心生态 + 关联项目）

---

## 1. 生态全景

2026 年 5 月初，个人 AI 助手/自主智能体开源生态呈现**"一超多强、差异化演进"**的整体态势。OpenClaw 以日均 500 条 Issues/PR 更新的绝对体量占据生态核心位置，其下游项目（NanoBot、Zeroclaw、PicoClaw、NemoClaw 等）围绕不同场景和平台进行垂直分化。生态整体处于**高速迭代期**，多数项目周均发布新版本，功能扩展与稳定性修复并行推进。值得关注的是，安全问题（TLS 认证、SSRF 防护、mTLS 证书生命周期）成为跨项目共同的技术债务，多个项目同时推进安全加固工作。同时，多智能体协作、记忆系统增强、Control UI 插件化等方向在多个项目中形成共识性需求，预示着下一阶段的技术演进方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃) | Issues (关闭) | PRs (待合并) | PRs (已合并) | Releases | 健康度 | 备注 |
|------|------------------|---------------|--------------|--------------|----------|--------|------|
| **OpenClaw** | 467 | 33 | 465 | 35 | 0 | 🟡 需关注 | 安全漏洞积压、Gateway 稳定性问题 |
| **NanoBot** | 2 | 9 | 7 | 24 | 0 | 🟢 良好 | 高 PR 合并率，Bug 修复效率高 |
| **Zeroclaw** | 37 | 13 | 45 | 5 | 1 (v0.7.4) | 🟢 良好 | PR 积压较多，安全功能批量合并 |
| **PicoClaw** | 10 | 1 | 11 | 13 | 1 (nightly) | 🟠 需关注 | v0.2.8 回归 Bug，3 个高严重度问题 |
| **NanoClaw** | 6 | 4 | 12 | 16 | 0 | 🟢 良好 | OpenCode provider 稳定性修复集中 |
| **IronClaw** | 22 | 7 | 31 | 19 | 0 | 🟢 良好 | Reborn 架构落地，依赖更新频繁 |
| **LobsterAI** | 0 | 0 | 6 | 0 | 0 | 🟡 积压 | 6 个 PR 全部 stale，审查周期过长 |
| **Moltis** | 1 | 5 | 2 | 9 | 0 | 🟢 良好 | Bug 修复效率极高，24h 内全部关闭 |
| **CoPaw** | 7 | 0 | 3 | 1 | 0 | 🟢 良好 | 功能迭代为主，PR 合并节奏稳定 |
| **NemoClaw** | 38 | 12 | 42 | 8 | 0 | 🟡 需关注 | CI 持续失败，WSL/多平台问题积压 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 静默 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 静默 | 无活动 |
| **EasyClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 静默 | 无活动 |

**活跃度分层：**

- **第一梯队（高活跃）：** OpenClaw、NemoClaw、Zeroclaw、IronClaw（日均 29-500 条更新）
- **第二梯队（中等活跃）：** NanoBot、NanoClaw、PicoClaw、CoPaw（日均 10-31 条更新）
- **第三梯队（低活跃）：** Moltis、LobsterAI（日均 6-11 条更新）
- **静默项目：** TinyClaw、ZeptoClaw、EasyClaw（24h 无活动）

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位

OpenClaw 是整个生态的**技术基座和事实标准**。其核心地位体现在：

| 维度 | OpenClaw | 典型下游项目 |
|------|----------|--------------|
| **社区规模** | 日均 500 条更新，Issue/PR 双向活跃 | 日均 10-50 条更新 |
| **版本节奏** | 持续迭代，无固定发布周期 | 跟随 OpenClaw 同步更新 |
| **功能覆盖** | 全功能全集 | 场景化裁剪（移动端、硬件、平台特定） |
| **技术影响力** | 定义 schema、协议、API 契约 | 依赖或扩展 OpenClaw 核心 |

### 3.2 技术路线差异

| 维度 | OpenClaw | Zeroclaw | PicoClaw | NemoClaw |
|------|----------|----------|----------|----------|
| **架构定位** | 通用自主智能体框架 | 企业级安全强化 | 移动端/嵌入式 | NVIDIA 硬件生态 |
| **核心语言** | TypeScript/Node.js | TypeScript/Node.js | TypeScript/Node.js | Python/Shell |
| **安全策略** | 基础安全 | mTLS、RBAC、审计日志 | 基础安全 | seccomp、容器隔离 |
| **部署模式** | 自托管/云 | 企业自托管 | 移动端/边缘 | DGX/云原生 |
| **差异化能力** | 全协议支持 | 安全合规 | 便携性 | GPU 优化 |

### 3.3 社区规模对比

| 项目 | 活跃贡献者 | Issue 评论密度 | PR 合并周期 | 社区成熟度 |
|------|------------|----------------|-------------|------------|
| **OpenClaw** | 极高 | 高（单 Issue 最高 15 条评论） | 较长（安全类 PR 积压） | 成熟期 |
| **NanoBot** | 中高 | 中（单 Issue 最高 8 条评论） | 短（平均 <24h） | 成长期 |
| **Zeroclaw** | 中 | 中 | 中 | 成长期 |
| **IronClaw** | 中高 | 高（Epic 44 条评论） | 中 | 架构重构期 |
| **NemoClaw** | 中 | 极高（#1992 达 319 条评论） | 长（CI 问题阻塞） | 问题修复期 |

---

## 4. 共同关注的技术方向

以下技术方向在多个项目中同步涌现，表明行业存在明确的共识性需求：

### 4.1 安全加固（跨项目共识度：⭐⭐⭐⭐⭐）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| **OpenClaw** | TLS 证书信任（#50642）、Tailscale 认证绕过（#50630）、Gateway 稳定性 | 未修复 |
| **Zeroclaw** | WebUI 安全加固（#75076）、公开部署 footguns | PR 待合并 |
| **NemoClaw** | SSRF 防护（#2414）、mTLS 证书生命周期管理（#888） | PR 待合并 |
| **IronClaw** | 会话级隔离、技能白名单、安全盾牌 | 批量合并中 |

**共同根因：** 自主智能体需要访问外部资源（API、文件、网络），安全边界定义和运行时防护是系统性挑战。

### 4.2 多智能体协作（跨项目共识度：⭐⭐⭐⭐）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| **OpenClaw** | Multi-agent UX flow RFC（#5890）已通过 | 提案阶段 |
| **NanoBot** | Multi-Agent Routing（#2072），8 条评论 | 讨论中 |
| **CoPaw** | 增强记忆管理与召回机制（#3995） | 需求提出 |
| **IronClaw** | Reborn 架构落地，CapabilityCatalog、EventProjectionService | 密集开发中 |

**共同根因：** 单智能体在复杂任务中能力受限，多智能体分工协作（planner/executor/monitor）是提升任务完成率的关键。

### 4.3 记忆系统增强（跨项目共识度：⭐⭐⭐⭐）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| **OpenClaw** | 递归子目录搜索（#34400）、记忆优先级配置（#50199） | 长期积压 |
| **NanoClaw** | 记忆管理增强、冲突检测、自动归档 | 需求提出 |
| **CoPaw** | 增强记忆管理与召回机制（#3995） | 需求提出 |
| **IronClaw** | Reborn 原生内存存储/搜索服务（#3180-3185 PR 栈） | PR 待合并 |

**共同根因：** 长期运行 agent 会产生大量上下文，记忆的有效组织直接影响 agent 的"经验积累"能力。

### 4.4 Control UI / 开发者工具（跨项目共识度：⭐⭐⭐⭐）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| **OpenClaw** | Control UI 插件贡献槽位（#71736）、原生页面扩展（#66944） | RFC 阶段 |
| **Zeroclaw** | Web onboarding 与 CLI 对等（#6179）、会话侧边栏（#50404） | PR 待合并 |
| **NemoClaw** | `sandbox doctor` 命令（#2848）、健康检查工具 | PR 待合并 |
| **LobsterAI** | 技能文件夹快速访问（#1185）、流式响应渲染优化（#1186） | PR 待合并 |

**共同根因：** 随着 agent 能力增强，用户需要更好的可观测性和调试工具。

### 4.5 多渠道消息集成（跨项目共识度：⭐⭐⭐）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| **OpenClaw** | Slack 连接静默失败（#72808）、Telegram 稳定性（#50040） | 长期问题 |
| **Moltis** | Discord slash 命令参数（#948）、Telegram 文件上传 panic（#947） | 已修复 |
| **NanoClaw** | WhatsApp 媒体双向（#2170）、Telegram cron 错误（#1757） | 已修复/待修复 |
| **NemoClaw** | Telegram mention-only 模式（#1737） | PR 推进中 |

**共同根因：** 消息渠道是 agent 的"感知器官"，渠道稳定性直接影响用户体验。

---

## 5. 差异化定位分析

### 5.1 功能侧重差异

| 项目 | 核心功能 | 目标用户 | 差异化亮点 |
|------|----------|----------|------------|
| **OpenClaw** | 通用自主智能体框架 | 开发者、技术用户 | 全协议支持、最广泛的渠道集成 |
| **Zeroclaw** | 企业级安全强化 | 企业用户、合规场景 | mTLS、RBAC、审计日志、Skills 白名单 |
| **PicoClaw** | 移动端/嵌入式部署 | 移动开发者、边缘计算 | 便携性、Android 支持 |
| **NemoClaw** | NVIDIA 硬件生态集成 | AI 研究者、GPU 用户 | DGX Spark 支持、GPU 优化 |
| **IronClaw** | Reborn 架构落地 | 企业高级用户 | 原生内存服务、成本预算治理 |
| **NanoBot** | 轻量级 agent 框架 | 快速原型开发 | 简洁架构、快速上手 |
| **Moltis** | Rust 实现的多渠道 agent | Rust 生态用户 | 性能优势、跨平台 |
| **CoPaw** | Qwen 模型集成 | 中文开发者 | Qwen/DashScope 深度集成 |

### 5.2 技术架构差异

| 项目 | 核心语言 | 存储方案 | 部署复杂度 | 扩展机制 |
|------|----------|----------|------------|----------|
| **OpenClaw** | TypeScript | SQLite/JSONL | 中 | Plugin 系统 |
| **Zeroclaw** | TypeScript | SQLite | 中高 | Plugin + Skills |
| **PicoClaw** | TypeScript | SQLite | 低 | Plugin 系统 |
| **NemoClaw** | Python/Shell | SQLite | 中 | Docker/Sandbox |
| **IronClaw** | Rust | libSQL/Postgres | 高 | WASM/Script/MCP |
| **Moltis** | Rust | SQLite | 中 | Plugin 系统 |
| **NanoBot** | Python | SQLite | 低 | MCP 工具 |

### 5.3 目标用户分层

```
企业级用户
├── IronClaw（Reborn 架构、成本治理）
├── Zeroclaw（安全合规、审计）
└── NemoClaw（GPU 集群、硬件优化）

技术开发者
├── OpenClaw（全功能、协议丰富）
├── NanoBot（简洁架构）
└── Moltis（Rust 生态、性能）

轻量/移动场景
├── PicoClaw（移动端、便携）
└── CoPaw（Qwen 集成、快速部署）
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 阶段 | 项目 | 特征 |
|------|------|------|
| **快速迭代期** | OpenClaw、IronClaw、NemoClaw、Zeroclaw | 高 Issue/PR 吞吐量，架构频繁变更，功能快速扩展 |
| **质量巩固期** | NanoBot、NanoClaw、Moltis、CoPaw | 活跃度适中，重点修复 Bug 和完善现有功能 |
| **功能探索期** | PicoClaw | 新版本发布后遇到回归问题，需稳定核心体验 |
| **维护期** | LobsterAI | PR 积压，审查节奏放缓 |
| **静默期** | TinyClaw、ZeptoClaw、EasyClaw | 无近期活动，可能已停止维护 |

### 6.2 成熟度评估

| 项目 | Issue 响应速度 | PR 合并效率 | Bug 修复率 | 版本稳定性 |
|------|----------------|-------------|------------|------------|
| **Moltis** | ⭐⭐⭐⭐⭐ (<24h) | ⭐⭐⭐⭐⭐ (9/11) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **NanoBot** | ⭐⭐⭐⭐ (平均 <24h) | ⭐⭐⭐⭐ (24/31) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **NanoClaw** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ (16/28) | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **OpenClaw** | ⭐⭐⭐ (安全类积压) | ⭐⭐ (35/500) | ⭐⭐⭐ | ⭐⭐⭐ |
| **NemoClaw** | ⭐⭐ (CI 问题阻塞) | ⭐⭐ (8/50) | ⭐⭐ | ⭐⭐ |
| **PicoClaw** | ⭐⭐⭐ | ⭐⭐⭐ (13/24) | ⭐⭐ (回归问题) | ⭐⭐ |

---

## 7. 值得关注的趋势信号

### 7.1 技术趋势

| 趋势 | 描述 | 涉及项目 | 对开发者的参考价值 |
|------|------|----------|-------------------|
| **安全左移** | 安全检查从运行时前移至配置阶段（SSRF 扫描、凭证验证、Skills 白名单） | OpenClaw、Zeroclaw、NemoClaw、IronClaw | 自主智能体必须内置安全边界，否则生产环境风险极高 |
| **多智能体原生架构** | 从单 agent 扩展到 planner/executor/monitor 协作模式 | OpenClaw、NanoBot、IronClaw | 复杂任务需要多 agent 协作，设计时需考虑通信协议和状态管理 |
| **持久化记忆系统** | 从简单的 Markdown 文件到结构化向量存储/数据库 | OpenClaw、NanoClaw、CoPaw、IronClaw | 长期运行的 agent 需要"经验积累"机制，记忆管理是核心竞争力 |
| **Provider 抽象层** | 统一接口支持多模型提供商，支持 failover | NanoBot、Zeroclaw、CoPaw | 避免厂商锁定，Provider 抽象是事实标准 |
| **CLI 现代化** | 从 ad-hoc 脚本迁移至 oclif 等框架 | NemoClaw、Zeroclaw | 统一的 CLI 体验是开发者工具的基础 |
| **多渠道一致性** | 同一 agent 在不同消息渠道（Slack/Telegram/Discord）行为一致 | OpenClaw、Moltis、NanoClaw | 渠道抽象层设计是关键工程挑战 |

### 7.2 社区运营趋势

| 趋势 | 描述 | 涉及项目 | 启示 |
|------|------|----------|------|
| **PR 积压风险** | Lob

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-02
**项目**: HKUDS/nanobot
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

过去 24 小时内，NanoBot 项目保持高度活跃态势。共处理 **11 条 Issues**（2 条新开/活跃，9 条关闭）和 **31 条 PR 更新**（7 条待合并，24 条已合并/关闭），无新版本发布。项目整体呈现**高质量输出状态**，多个关键 Bug 修复已合并，包括 Matrix 频道认证错误、tiktoken 回退机制崩溃、Anthropic 长请求流式处理等稳定性问题。社区在多智能体路由、工具循环防护、WebUI 体验等方向提出新需求，功能演进路线图信号清晰。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 3.1 已合并的重要 PR

| PR 编号 | 标题 | 贡献者 | 状态 | 意义 |
|---------|------|--------|------|------|
| [#3582](https://github.com/HKUDS/nanobot/pull/3582) | fix(helpers): restore tiktoken fallback | @yorkhellen | ✅ 已合并 | 修复 `estimate_prompt_tokens_chain()` 因 `estimated` 未定义导致的崩溃，保障 token 计数在 provider 不可用时的健壮性 |
| [#3579](https://github.com/HKUDS/nanobot/pull/3579) | fix(anthropic): auto-fallback to stream | @coldxiangyu163 | ✅ 已合并 | 解决 Anthropic SDK 超过 10 分钟请求的 `ValueError`，自动切换流式模式 |
| [#3578](https://github.com/HKUDS/nanobot/pull/3578) | fix(matrix): stop sync loop on irrecoverable auth errors | @coldxiangyu163 | ✅ 已合并 | 修复 Matrix 认证错误导致无限重试 spam 服务器的问题 |
| [#3555](https://github.com/HKUDS/nanobot/pull/3555) | fix: API stream lifecycle for tool-backed requests | @boogieLing | ✅ 已合并 | 修复 OpenAI 兼容接口在工具调用场景下 SSE 流过早终止的问题 |
| [#3549](https://github.com/HKUDS/nanobot/pull/3549) | feat(context): Add sender_id to LLM runtime context | @yorkhellen | ✅ 已合并 | 将 `sender_id` 注入 LLM 上下文，解决群聊中无法识别用户身份的问题 |
| [#3577](https://github.com/HKUDS/nanobot/pull/3577) | fix: strip partial think tags in streaming output | @hongshunanhai | ✅ 已合并 | 防止流式输出中不完整的 `# Zeroclaw 项目动态日报

**报告日期：** 2026-05-02
**数据来源：** github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时内保持高度活跃状态，共产生 **50 条 Issues 更新**（37 新开/活跃，13 已关闭）和 **50 条 PR 更新**（45 待合并，5 已合并/关闭）。项目于今日正式发布 **v0.7.4** 版本，带来 Matrix 重写、Mozilla Fluent i18n 流水线、CLI/TUI onboarding 重写等重要更新。社区讨论热度较高，Issue #6123（default_model 问题）以 15 条评论领跑，多个 P1 优先级的 Bug 和功能增强正在并行推进，整体项目健康度良好。

---

## 2. 版本发布

### ✅ v0.7.4 正式发布

**发布说明：** 这是 v0.7.x 工作区基础上的首个补丁版本。

**主要更新内容：**

| 类别 | 更新内容 |
|------|----------|
| **Matrix 重写** | 完成 clean-room Matrix 实现 |
| **国际化** | 引入 Mozilla Fluent i18n 流水线，支持多语言文档 |
| **Onboarding 重写** | 从零重构 CLI/TUI 引导流程 |
| **通道恢复** | 恢复 WeChat iLink Bot 通道支持 |

> **Changelog：** https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4

---

## 3. 项目进展

### 已合并/关闭的 PR（5 条）

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | feat(gateway,web,cli): web onboarding parity via per-property CRUD endpoints | ✅ CLOSED | 新增 `/api/config/*` CRUD 接口，实现 Web onboarding 与 CLI 对等体验 |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | feat(cron): manually trigger cron from webui | ✅ CLOSED | 新增 `POST /api/cron/{id}/run` 接口，支持从 Web UI 手动触发 cron |
| [#6262](https://github.com/zeroclaw-labs/zeroclaw/pull/6262) | chore(ci): test | ✅ CLOSED | CI 测试 PR |
| [#5416](https://github.com/zeroclaw-labs/zeroclaw/pull/5416) | Add Codex runner (parity with claude code) | ✅ CLOSED | 新增 Codex runner 工具，与 claude_code_runner 功能对等 |

### 重点待合并 PR（45 条）

| PR | 标题 | 风险等级 | 说明 |
|----|------|----------|------|
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | fix(channels/acp): implement ACP protocol v1 | 🔴 HIGH | 实现 ACP 协议 v1，恢复与 Nori 等外部 ACP 消费者的连接 |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | feat(obs): enrich OTel tool spans | 🟡 MEDIUM | 丰富 OpenTelemetry 工具跨度属性 |
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | fix(gateway): record cost and token usage | 🔴 HIGH | 修复 gateway 未记录成本和 token 使用的问题 |
| [#6092](https://github.com/zeroclaw-labs/zeroclaw/pull/6092) | fix(providers): read api_key, base_url from config | 🟡 MEDIUM | 修复 fallback providers 配置读取问题 |
| [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) | Feat/v2 to v3 | - | Schema v3 迁移进行中 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 链接 |
|-------|------|--------|------|
| **#6123** | [Bug]: default_model issue on fresh install | 15 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **#5862** | [Bug]: zeroclaw does not know it can add cron | 8 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| **#4710** | [Feature]: A better LOGO of Zeroclaw | 8 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) |
| **#5890** | RFC: Multi-agent UX flow — design | 7 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) |
| **#5947** | [Feature]: schema v3 — batch breaking field migrations | 6 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |

### 热点分析

1. **#6123 (default_model 问题)**：新用户在 LXC 容器全新安装后遇到配置问题，Ollama 运行在另一容器中。这是影响新用户体验的 P1 问题，需要优先解决。

2. **#5890 (多代理 UX 设计 RFC)**：RFC 讨论期已结束，核心团队投票通过，正在等待提案提取到文档。这是项目重大方向性更新。

3. **#4710 (Logo 设计)**：社区对品牌视觉有诉求，8 条评论显示用户参与度较高，但风险等级为 low。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 严重 Bug（需立即关注）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | OPEN | ❌ |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox blocks Python skill patterns | OPEN | ❌ |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | gateway-chat succeeds but /api/cost stays zero | OPEN | ✅ [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | install.sh does not extract web dashboard | OPEN | ❌ |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) | fix(gateway): evict cancel_tokens entries | CLOSED | ✅ 已修复 |

### 🟡 P2 中等优先级 Bug

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | CPU spikes when typing into agent chat | CLOSED | ❌ |
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | Dashboard Channels tab crash | OPEN | ❌ |
| [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | zeroclaw self-test reports 127.0.0.1 | OPEN | ✅ [#6219](https://github.com/zeroclaw-labs/zeroclaw/pull/6219) |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | Canvas tool from channel server fails | CLOSED | ❌ |

### 稳定性风险提示

- **#5722** 涉及 shell 沙箱配置，影响 Python skill 实际使用场景，风险等级 high
- **#5125** CPU 峰值问题在 Firefox 浏览器中复现，可能影响用户体验
- **#6254** WASM 插件安装路径与运行时扫描路径不一致，导致插件不可见

---

## 6. 功能请求与路线图信号

### 重大功能增强（可能纳入下一版本）

| Issue/PR | 标题 | 状态 | 纳入可能性 |
|-----------|------|------|------------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow | RFC 已通过 | ⭐⭐⭐ 高 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | schema v3 — batch breaking field migrations | IN PROGRESS | ⭐⭐⭐ 高 |
| [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) | Web onboarding parity with zeroclaw onboard | IN PROGRESS | ⭐⭐⭐ 高 |
| [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | Configurable LM Studio server URL | OPEN | ⭐⭐ 中 |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Installing skills from .well-known URI | IN PROGRESS | ⭐⭐ 中 |

### 社区功能请求

| Issue | 标题 | 链接 |
|-------|------|------|
| #4710 | A better LOGO of Zeroclaw | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) |
| #5501 | trigger cron manually | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) ✅ 已实现 |
| #6145 | Recover agent chat from memory location in Web UI | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/6145) |
| #6260 | Configurable LM Studio server URL | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) |

---

## 7. 用户反馈摘要

### 用户痛点

1. **安装配置复杂**（#6123）
   > "I have a fresh install on an LXC container. My ollama is on another LXC in the same server. After I set up my onboarding I get this error"
   - 新用户首次安装配置流程不顺畅

2. **Shell 沙箱限制**（#5722）
   > "Default shell sandbox configuration blocks all realistic Python skill patterns"
   - 沙箱安全策略过于严格，影响实际使用

3. **Web UI 编辑体验差**（#6073）
   > "When you use the (default) web UI for advanced setting to edit the config file, the mouse pointer/cursor is shown in the middle of the characters"
   - 配置编辑器光标定位问题

### 用户诉求

- **易用性**：简化首次安装和配置流程
- **灵活性**：支持更多模型提供商和本地部署场景
- **可观测性**：改进成本追踪和使用统计功能
- **文档**：需要更完善的 skills 开发文档（#5863）

---

## 8. 待处理积压

### 长期未解决的重要 Issue

| Issue | 标题 | 创建时间 | 状态 | 优先级 | 积压天数 |
|-------|------|----------|------|--------|----------|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | A better LOGO of Zeroclaw | 2026-03-25 | OPEN | P2 | 38 天 |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Installing skills from .well-known URI | 2026-03-27 | IN PROGRESS | P2 | 36 天 |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | CPU spikes when typing | 2026-03-29 | CLOSED | P1 | 34 天 |
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | Dashboard Channels tab crash | 2026-04-03 | OPEN | P1 | 29 天 |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | Canvas tool from channel server | 2026-04-05 | CLOSED | P2 | 27 天 |

### 需维护者关注的 PR

| PR | 标题 | 风险 | 说明 |
|----|------|------|------|
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | ACP protocol v1 | HIGH | 协议兼容性修复，需尽快审查 |
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | Record cost and token usage | HIGH | 修复成本追踪问题 |
| [#6265](https://github.com/zeroclaw-labs/zeroclaw/pull/6265) | Remove CHANGELOG-next.md cleanup | - | 修复 release workflow |

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 50 条/24h | 📈 持平 |
| PR 活跃度 | 50 条/24h | 📈 持平 |
| 合并率 | 10% (5/50) | - |
| P1 Bug 数量 | 8 个 | ⚠️ 需关注 |
| 新版本发布 | v0.7.4 | ✅ |

---

**报告生成时间：** 2026-05-02
**数据截止时间：** 2026-05-02 23:59 UTC

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-05-02
**项目仓库：** github.com/sipeed/picoclaw
**数据区间：** 过去 24 小时

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持高度活跃状态，共产生 **11 条 Issues 更新**（新开/活跃 10 条，关闭 1 条）和 **24 条 PR 更新**（待合并 11 条，已合并/关闭 13 条）。项目发布了 **v0.2.8-nightly.20260502.6e1fab80** 每日构建版本。今日社区重点关注 v0.2.8 版本的稳定性问题，共报告 4 个相关 Bug（图像识别、通道启动、Android 数据访问等）。安全与多租户隔离相关的 PR 批量合并（13 个已关闭），表明项目在企业级功能方向持续推进。

---

## 2. 版本发布

### Nightly Build 发布

| 项目 | 详情 |
|------|------|
| **版本号** | `v0.2.8-nightly.20260502.6e1fab80` |
| **类型** | Nightly Build（非稳定版） |
| **全量变更日志** | [v0.2.8...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**说明：** 此为自动化构建版本，可能存在不稳定因素，请谨慎使用。建议关注正式 Release 版本以获得更可靠的体验。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（13 条）

| PR 编号 | 类型 | 标题 | 贡献者 | 意义 |
|---------|------|------|--------|------|
| [#2739](https://github.com/sipeed/picoclaw/pull/2739) | Bug Fix | fix(telegram): wrap markdown pipe tables in fenced code blocks | @cjkihl | 修复 Telegram 管道表格渲染问题 |
| [#2743](https://github.com/sipeed/picoclaw/pull/2743) | Bug Fix | fix(openai_compat): detect DeepSeek models behind non-deepseek proxies | @cjkihl | 扩展 DeepSeek 模型检测兼容性 |
| [#2326](https://github.com/sipeed/picoclaw/pull/2326) | Enhancement | feat: Add K3s deployment manifests and specialized Dockerfiles | @stevef1uk | **新增 K3s 部署支持** |
| [#2325](https://github.com/sipeed/picoclaw/pull/2325) | Enhancement | feat: Add Skills Whitelisting for enhanced agent security | @stevef1uk | **新增技能白名单安全机制** |
| [#2324](https://github.com/sipeed/picoclaw/pull/2324) | Enhancement | feat: add asynchronous /chat HTTP endpoint for external integrations | @stevef1uk | **新增异步 HTTP 集成接口** |
| [#2323](https://github.com/sipeed/picoclaw/pull/2323) | Enhancement | feat: add NVIDIA and Azure AI providers | @stevef1uk | **新增 NVIDIA/Azure AI 提供商支持** |
| [#2322](https://github.com/sipeed/picoclaw/pull/2322) | Enhancement | feat: Implement Session-Level Workspace Isolation and Security Hardening | @stevef1uk | **会话级工作区隔离** |
| [#2102](https://github.com/sipeed/picoclaw/pull/2102) | Bug Fix | Fix/isolation hardening | @stevef1uk | 修复项目隔离问题 |
| [#2095](https://github.com/sipeed/picoclaw/pull/2095) | Enhancement | feat: Multi-User Session Isolation plus | @stevef1uk | **多租户会话隔离** |
| [#1991](https://github.com/sipeed/picoclaw/pull/1991) | Enhancement | Chat async | @stevef1uk | 异步聊天功能 |
| [#1963](https://github.com/sipeed/picoclaw/pull/1963) | Enhancement | Azure skills whitelisting | @stevef1uk | Azure 技能白名单 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Enhancement | Multi-User Support, Security Hardening, Skills whitelisting | @stevef1uk | 综合安全加固 |
| [#2327](https://github.com/sipeed/picoclaw/pull/2327) | Enhancement | feat: Final Security Shield & Hardening Tidy-up | @stevef1uk | **安全盾牌最终整合** |

**进展评估：** 今日批量合并了 @stevef1uk 的多项安全与多租户相关 PR，项目在企业级安全架构方向取得显著进展。@cjkihl 的 DeepSeek 相关修复也已完成，提升了模型兼容性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 类型 | 标题 | 评论数 | 点赞 | 热度分析 |
|------------|------|------|--------|------|----------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Bug | [BUG] when I ask my agent to do perform a task every hour of the day I now get channel error | 6 | 0 | **高评论** - Telegram 定时任务通道错误，用户反馈强烈 |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | Feature | [Feature] Option to disable 'Enter' key from sending messages | 4 | 1 | **功能请求** - 移动端用户对换行符需求的普遍诉求 |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | Bug | [BUG] OAuth Authentication Errors | 3 | 0 | **认证问题** - OpenAI/Antigravity OAuth 授权失败 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Feature | [Feature] Add in config to send streaming HTTP request | 3 | 1 | **功能请求** - 流式输出需求 |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | Question | How to build on windows? | 3 | 0 | **文档需求** - Windows 构建指南缺失 |

### 热点 PR

| PR 编号 | 类型 | 标题 | 热度分析 |
|---------|------|------|----------|
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | Bug Fix | fix(deepseek): capture reasoning_content from streaming | **待合并** - 修复 DeepSeek 思维模式流式输出丢失问题 |

**热点分析：** 社区对 Telegram 通道的定时任务问题（#1757）关注度最高，已有 6 条评论，表明这是影响较多用户的痛点。移动端换行符需求（#2376）也反映了对用户体验的普遍关注。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🔴 **高** | [#2738](https://github.com/sipeed/picoclaw/issues/2738) | [BUG] Image recognition issue in v0.2.8 | OPEN | ❌ 无 |
| 🔴 **高** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) | [BUG] gateway starts with no channels in v0.2.8 | OPEN | ❌ 无 |
| 🔴 **高** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | [BUG] Android v0.2.8, cannot access any data from tabs | OPEN | ❌ 无 |
| 🟡 **中** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] channel error when using cron (Telegram) | OPEN | ❌ 无 |
| 🟡 **中** | [#2602](https://github.com/sipeed/picoclaw/issues/2602) | [BUG] OAuth Authentication Errors | OPEN | ❌ 无 |
| 🟡 **中** | [#1533](https://github.com/sipeed/picoclaw/issues/1533) | [BUG] tool: Tool not found {tool=skill_vetter} | **CLOSED** | ✅ 已关闭（可能已修复） |

### 回归问题警示

**v0.2.8 版本出现多个回归 Bug：**
- 图像识别功能失效
- 网关启动时通道加载失败
- Android 端数据访问异常

**建议：** 维护者应优先处理上述 3 个高严重程度问题，考虑发布补丁版本。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue/PR 编号 | 类型 | 标题 | 需求分析 | 纳入可能性 |
|---------------|------|------|----------|------------|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | Feature | Option to disable 'Enter' key from sending messages | 移动端换行符需求，4 条评论支持 | ⭐⭐⭐ 高 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Feature | Add in config to send streaming HTTP request | 流式输出配置需求 | ⭐⭐⭐ 高 |
| [#2649](https://github.com/sipeed/picoclaw/issues/2649) | Feature | Added support for serial port tools | UART 串口工具，嵌入式场景需求 | ⭐⭐ 中 |
| [#2652](https://github.com/sipeed/picoclaw/issues/2652) | Feature | Can support github/copilot? | GitHub Copilot 集成 | ⭐ 低 |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | Enhancement | feat(agent): support native audio input for multimodal LLMs | **待合并** - 音频输入支持 | ⭐⭐⭐ 高 |

### 路线图信号

从今日 PR 合并情况判断，项目路线图重点方向为：
1. **企业级安全** - 会话隔离、技能白名单、安全盾牌
2. **多提供商支持** - NVIDIA、Azure AI、DeepSeek
3. **部署灵活性** - K3s 部署、Docker 多架构支持
4. **多模态能力** - 音频输入支持（#2626 待合并）

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | Issue | 反馈内容 |
|------|-------|----------|
| **Telegram 定时任务** | #1757 | 用户在 Raspberry Pi Zero W 上配置每小时定时任务时遇到通道错误，影响自动化工作流 |
| **移动端输入体验** | #2376 | Android 用户无法在消息中使用换行符，只能通过 Enter 发送消息，体验不佳 |
| **OAuth 认证失败** | #2602 | OpenAI 和 Antigravity 的 OAuth 授权均失败，用户无法正常认证 |
| **Windows 构建困难** | #2651 | 新用户反馈在 Windows 环境下构建项目缺乏文档指导 |

### 用户满意度信号

- **正面：** 安全功能（技能白名单、会话隔离）获得积极反馈，多租户支持满足企业用户需求
- **负面：** v0.2.8 版本稳定性问题引发用户担忧，多个回归 Bug 影响生产环境使用

---

## 8. 待处理积压

### 长期未响应的 Issues（>7 天无维护者回复）

| Issue 编号 | 创建时间 | 标题 | 状态 | 建议 |
|------------|----------|------|------|------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 2026-03-18 | [BUG] channel error when using cron | OPEN | 需维护者确认是否为已知问题 |
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 2026-04-06 | [Feature] Option to disable 'Enter' key | OPEN | 功能合理，建议评估优先级 |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 2026-04-07 | [Feature] Add streaming HTTP request config | OPEN | 流式输出是常见需求 |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | 2026-04-20 | [BUG] OAuth Authentication Errors | OPEN | 认证问题影响用户体验 |
| [#2651](https://github.com/sipeed/picoclaw/issues/2651) | 2026-04-24 | How to build on windows? | OPEN | 建议补充 Windows 构建文档 |

### 待合并的 Open PRs（建议优先处理）

| PR 编号 | 类型 | 标题 | 建议 |
|---------|------|------|------|
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | Bug Fix | fix(deepseek): capture reasoning_content from streaming | 修复 DeepSeek 流式输出问题，建议优先合并 |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | Enhancement | feat(agent): support native audio input for multimodal LLMs | 多模态功能，建议评估 |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | Bug Fix | fix: enable web_search tool config YAML support | 修复配置问题，建议合并 |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | Documentation | Unify vendors table in providers documentation | 文档改进，建议合并 |

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 11 条/24h | 📈 活跃 |
| PR 活跃度 | 24 条/24h | 📈 高度活跃 |
| 已合并 PR | 13 条 | ✅ 高效 |
| 待合并 PR | 11 条 | ⏳ 积压可控 |
| 新增 Bug | 4 个（v0.2.8 回归） | ⚠️ 需关注 |
| 功能请求 | 5 个 | 💡 需求丰富 |

---

**报告生成时间：** 2026-05-02
**数据来源：** GitHub PicoClaw 仓库实时数据

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-05-02
**项目仓库：** github.com/qwibbitai/nanoclaw

---

## 1. 今日速览

NanoClaw 今日保持高度活跃，共处理 **28 条 PR 更新**（其中 16 条已合并/关闭）和 **10 条 Issues 更新**（4 条已关闭）。项目在 OpenCode provider 稳定性方面取得显著进展，连续修复了进程泄漏、超时配置、CLAUDE.md 加载等多个关键问题。同时，V1→V2 迁移工作持续推进，涉及操作契约、诊断机制和中断恢复等基础设施改进。社区贡献涵盖 WhatsApp 媒体支持、Gemini provider 集成、webchat 技能等多个方向。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 合并/关闭的重要 PR

| PR | 标题 | 状态 | 贡献者 | 摘要 |
|---|---|---|---|---|
| [#2180](https://github.com/qwibitai/nanoclaw/pull/2180) | Upgrade to 2.0.0 base | CLOSED | @ufJmacca | 升级至 2.0.0 基础版本 |
| [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | fix(host-sweep): clear orphan processing_ack rows | CLOSED | @glifocat | 修复 kill 时清理孤立 processing_ack 行，防止 claim-stuck 重生循环 |
| [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | fix(opencode): kill server process group + configurable IDLE_TIMEOUT_MS | CLOSED | @glifocat | 修复进程组杀死逻辑，将硬编码 90s 超时改为可配置 |
| [#2165](https://github.com/qwibitai/nanoclaw/pull/2165) | Resolve CLAUDE.md includes for OpenCode provider | CLOSED | @CopyPasteFail | 修复 OpenCode provider 的 CLAUDE.md 引用解析问题 |
| [#2153](https://github.com/qwibitai/nanoclaw/pull/2153) | fix(opencode): use native instructions config to load CLAUDE.md | CLOSED | @glifocat | 使用原生指令配置加载 CLAUDE.md 和片段 |
| [#2171](https://github.com/qwibitai/nanoclaw/pull/2171) | chore(tooling): switch pre-commit hook to lint-staged | CLOSED | @topcoder1 | 将 pre-commit 切换至 lint-staged，提升大型仓库提交性能 |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) | feat: bidirectional WhatsApp media messages | CLOSED | @jonwhittlestone | 实现 WhatsApp 媒体消息双向收发功能 |
| [#2160](https://github.com/qwibitai/nanoclaw/pull/2160) | fix(agent-runner): open inbound.db fresh per messages_in read | CLOSED | @kky | 修复 agent-runner 每次读取 messages_in 时重新打开 inbound.db |
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) | fix: inject date/time context into all agent prompts | CLOSED | @glifocat | 为所有 agent prompts 注入当前日期时间上下文 |
| [#746](https://github.com/qwibitai/nanoclaw/pull/746) | fix(whatsapp): prevent service restart hammering on auth failure | CLOSED | @glifocat | 防止 WhatsApp 认证失败后服务反复重启 |
| [#1076](https://github.com/qwibitai/nanoclaw/pull/1076) | fix: OAuth credential proxy — auto-refresh tokens + beta header | CLOSED | @glifocat | OAuth 凭证代理自动刷新 token |

### 开放中的重要 PR

| PR | 标题 | 贡献者 | 摘要 |
|---|---|---|---|
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | feat(providers): add Google Gemini provider support | @farooqu | 新增 Google Gemini 作为 agent provider |
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) | feat: v1 → v2 migration to setup flow (experimental) | @gabi-simons | V1→V2 自动化迁移流程 |
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) | Skill/webchat v1 | @javexed | 新增 webchat 技能 |
| [#2178](https://github.com/qwibitai/nanoclaw/pull/2178) | Andy ops fixes: 10 issues | @blaykeelder1-commits | 修复 10 个运营问题（agent-browser、Maps、Twitter、LinkedIn 等） |
| [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) | fix: sanitize OneCLI agent identifiers | @CopyPasteFail | 规范化 OneCLI agent 标识符（下划线转连字符） |
| [#2168](https://github.com/qwibitai/nanoclaw/pull/2168) | fix(container): pin host.docker.internal to OneCLI's bridge IP | @kpscheffel | 修复 rootless Docker 中 host.docker.internal 映射 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#2150](https://github.com/qwibitai/nanoclaw/issues/2150)** - OpenCode provider: wrapPromptWithContext 发送字面 `@./...md` 行
   - **作者：** @glifocat | **评论：5** | **状态：** CLOSED
   - **热度分析：** 该问题引发 5 条评论，是今日评论最多的 Issue。核心诉求是修复 OpenCode provider 在处理 CLAUDE.md 引用时的解析逻辑，确保片段和基础配置能正确传递给 LLM。

2. **[#2177](https://github.com/qwibitai/nanoclaw/issues/2177)** - Active-query push-mode 空结果后静默卡住
   - **作者：** @yaniv-golan | **评论：2** | **状态：** OPEN
   - **热度分析：** 涉及非聊天场景的技能合成，当 turn 产生空文本结果时 push-mode 会静默卡住，影响 Telegram WebApp 等入站路由场景。

3. **[#2173](https://github.com/qwibitai/nanoclaw/issues/2173)** - B-01: 中断运行检测和可观察性
   - **作者：** @lazer-maker | **评论：1** | **状态：** OPEN
   - **热度分析：** 提出 NanoClaw 缺乏对已分发但未收到持久响应的消息的可见性追踪机制，需要持久化标记。

### 热点 PR

- **[#2136](https://github.com/qwibitai/nanoclaw/pull/2136)** - Google Gemini provider 支持
  - 社区对多 provider 支持有强烈需求，该 PR 提供了 OpenAI Codex 之后的首个新 provider 集成。

---

## 5. Bug 与稳定性

### 高严重度 Bug（已有 Fix PR）

| Issue | 标题 | 严重度 | Fix PR | 状态 |
|---|---|---|---|---|
| [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) | OpenCode provider SIGKILL 泄漏底层二进制，占用端口 4096 | High | [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | 已合并 |
| [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | Host sweep orphan processing_ack 行导致 claim-stuck 循环 | High | [#2151](https://github.com/qwibitai/nanoclaw/pull/2151) | 已合并 |
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | OpenCode provider CLAUDE.md 引用未解析 | High | [#2165](https://github.com/qwibitai/nanoclaw/pull/2165), [#2153](https://github.com/qwibitai/nanoclaw/pull/2153) | 已合并 |

### 中等严重度 Bug

| Issue | 标题 | 严重度 | 状态 |
|---|---|---|---|
| [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) | OpenCode provider 硬编码 90s 超时破坏本地模型设置 | Medium | 已合并 Fix [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) |

### 待修复 Bug

| Issue | 标题 | 严重度 | 状态 |
|---|---|---|---|
| [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) | Active-query push-mode 空结果后静默卡住 | High | OPEN |
| [#2172](https://github.com/qwibitai/nanoclaw/issues/2172) | macOS 大小写不敏感文件系统导致镜像 slug 计算差异 | Medium | OPEN |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue/PR | 标题 | 提出者 | 分析 |
|---|---|---|---|
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | 添加 Google Gemini provider 支持 | @farooqu | 高度可能纳入，基于已有 OpenAI Codex 模式实现 |
| [#2069](https://github.com/qwibitai/nanoclaw/pull/2069) | Skill/webchat v1 | @javexed | 社区技能贡献，待 review |
| [#2170](https://github.com/qwibitai/nanoclaw/pull/2170) | WhatsApp 双向媒体消息 | @jonwhittlestone | 已合并，丰富 channel 能力 |
| [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) | V1 → V2 升级：操作契约、诊断、安全委托 | @lazer-maker | 战略级需求，V2 迁移核心依赖 |
| [#2176](https://github.com/qwibitai/nanoclaw/issues/2176) | SC 短跟进连续性被 Gmail 新会话破坏 | @lazer-maker | 场景优化，需平衡安全隔离与上下文保持 |

### 路线图信号

- **V2 迁移基础设施：** [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) 自动化迁移 + [#2175](https://github.com/qwibitai/nanoclaw/issues/2175) 操作契约保留
- **可靠性增强：** B-01/B-02 中断检测与恢复机制（[#2173](https://github.com/qwibitai/nanoclaw/issues/2173)、[#2174](https://github.com/qwibitai/nanoclaw/issues/2174)）
- **多 provider 扩展：** Gemini provider 集成进行中

---

## 7. 用户反馈摘要

### 真实痛点

1. **OpenCode provider 稳定性问题**
   - 用户 @glifocat 连续报告多个 OpenCode provider 高严重度 bug，包括进程泄漏、超时配置、CLAUDE.md 加载失败
   - 影响：silent context loss，agent 无指令运行；容器不可用

2. **中断运行可观察性缺失**
   - @lazer-maker 指出 NanoClaw 无法追踪已分发但未响应的消息，缺乏持久化标记
   - 影响：运营透明度，问题排查困难

3. **macOS 兼容性**
   - @ariel-oversee 报告大小写不敏感文件系统导致镜像 slug 计算差异
   - 影响：跨平台一致性

### 满意点

- WhatsApp 媒体消息双向功能（[#2170](https://github.com/qwibitai/nanoclaw/pull/2170)）获得积极实现
- lint-staged 切换（[#2171](https://github.com/qwibitai/nanoclaw/pull/2171)）改善开发者体验

---

## 8. 待处理积压

### 长期未响应的 Issue

| Issue | 标题 | 创建时间 | 状态 | 提醒 |
|---|---|---|---|---|
| [#701](https://github.com/qwibitai/nanoclaw/pull/701) | fix: inject date/time context into all agent prompts | 2026-03-04 | CLOSED | 长期项目，已合并 |
| [#746](https://github.com/qwibitai/nanoclaw/pull/746) | fix(whatsapp): prevent service restart hammering | 2026-03-05 | CLOSED | 长期项目，已合并 |
| [#1076](https://github.com/qwibitai/nanoclaw/pull/1076) | fix: OAuth credential proxy | 2026-03-14 | CLOSED | 长期项目，已合并 |

### 需关注的 Open PR

| PR | 标题 | 创建时间 | 状态 | 提醒 |
|---|---|---|---|---|
| [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) | v1 → v2 migration to setup flow | 2026-04-23 | OPEN | V2 迁移关键路径，需优先 review |
| [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) | fix(setup): auto-bootstrap local OneCLI admin | 2026-04-27 | OPEN | 影响首次安装体验 |
| [#2054](https://github.com/qwibitai/nanoclaw/pull/2054) | fix(setup): prevent invisible-sudo hangs | 2026-04-27 | OPEN | 影响安装稳定性 |
| [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) | add Google Gemini provider support | 2026-04-29 | OPEN | 新 provider 集成，社区期待 |

---

## 总结

**项目健康度：良好**
- OpenCode provider 稳定性问题已系统性修复（4 个高严重度 bug 全部有对应 fix 并已合并）
- V2 迁移基础设施持续完善
- 社区贡献活跃，涵盖多 provider、WhatsApp 媒体、技能开发等多个方向
- 待合并 PR 积压 12 条，建议优先处理 V2 迁移相关 PR

**建议关注：**
1. [#2177](https://github.com/qwibitai/nanoclaw/issues/2177) - Active-query push-mode 空结果卡住问题
2. [#2172](https://github.com/qwibitai/nanoclaw/issues/2172) - macOS 兼容性问题
3. [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) - V2 迁移流程

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-05-02
**项目仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日保持极高的开发活跃度，共处理 **29 条 Issues**（新开/活跃 22 条，关闭 7 条）和 **50 条 PRs**（待合并 31 条，已合并/关闭 19 条）。核心工作集中在 **Reborn 架构落地** 领域，多个关键服务组件（HostRuntime、HTTP egress、Secrets/Network boundary）已完成 wiring 并关闭相关 Issue。同时社区贡献者 @abbyshekit 提交了多个大型功能 PR，涵盖 CLI 增强、法律文档处理、X/Twitter 书签等场景。依赖更新方面，Dependabot 提交了 44 个依赖升级（39+5）。整体项目健康度良好，Reborn 架构迁移进入深水区，预计短期内将有更多集成测试落地。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PRs

| PR # | 标题 | 贡献者 | 说明 |
|------|------|--------|------|
| [#3155](https://github.com/nearai/ironclaw/pull/3155) | fix(bridge): mission_* tools accept name; resolves #2583 | @ilblackdragon | **关键 Bug 修复** — 解决 Routine 创建时因 `mission_*` 处理器强制要求 UUID 而非 name 导致的 "5 consecutive code errors" 问题 |
| [#3129](https://github.com/nearai/ironclaw/pull/3129) | plumb reasoning and smoke tests | @zetyquickly | 新增 `emit_reasoning_trace` 辅助函数，支持 GLM-5、DeepSeek、OpenAI o-series、Qwen reasoning 变体的 chain-of-thought 追踪 |
| [#3172](https://github.com/nearai/ironclaw/pull/3172) | fix(release): bump cargo-dist to 0.31.0 to fix installer (#2818) | @ilblackdragon | 升级 cargo-dist 修复命名空间 release tag 的安装器下载 URL 问题 |
| [#3157](https://github.com/nearai/ironclaw/pull/3157) | fix(engine): inline gate await for Tier 0 + Tier 1 Approval gates | @ilblackdragon | 修复 Approval gate 场景下脚本内错误暴露问题，改为正确的用户暂停交互 |
| [#3159](https://github.com/nearai/ironclaw/pull/3159) | Wire EnforceResourceCeiling into runtime and sandbox enforcement | @serrrfirat | 将资源上限义务接入 Reborn host-runtime 义务路径 |

### 3.2 待合并的 PRs（重点关注）

| PR # | 标题 | 贡献者 | 说明 |
|------|------|--------|------|
| [#3180-#3185](https://github.com/nearai/ironclaw/pulls?q=is%3Apr+is%3Aopen+3180..3185) | reborn-memory 完整 PR 栈（6 个 PR） | @nickpismenkov | 实现原生 Reborn 内存存储/搜索服务，含 libSQL 和 Postgres 后端实现及垂直集成测试 |
| [#3173](https://github.com/nearai/ironclaw/pull/3173) | Legal harness — foundation: projects, documents, ingest | @abbyshekit | 法律文档处理平台基础：项目/文档管理、PDF/DOCX 解析入库 |
| [#3179](https://github.com/nearai/ironclaw/pull/3179) | Legal harness — chat-with-docs RAG (Stream B) | @abbyshekit | 基于项目文档的 RAG 对话功能 |
| [#3177](https://github.com/nearai/ironclaw/pull/3177) | feat(cli): add `ironclaw insights` for usage analytics | @abbyshekit | 新增使用分析命令，聚合 agent_jobs、routine_runs、job_actions 数据 |
| [#3178](https://github.com/nearai/ironclaw/pull/3178) | feat(cli): add `ironclaw backup --quick` | @abbyshekit | 便携式状态快照功能，打包数据库+配置+manifest 为 zip |
| [#3175](https://github.com/nearai/ironclaw/pull/3175) | feat(auth): add readonly google drive scope | @abbyshekit | Google Drive 细粒度 OAuth scope，支持只读模式 |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 核心话题 |
|---------|------|--------|----------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | [EPIC] Track Reborn architecture landing strategy | **44** | Reborn 架构落地策略追踪，包含 PR 分组计划、contract freeze、staging 流程 |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | [TEST] Reborn: Add vertical-slice integration test suite | **14** | 通过公共入口点验证 substrate 的调用级 Reborn 集成测试 |
| [#3085](https://github.com/nearai/ironclaw/issues/3085) | Use shared Reborn runtime HTTP egress for WASM, Script, and MCP | **7** | 统一 HTTP egress 路径，避免各 runtime lane 重复实现 |
| [#3087](https://github.com/nearai/ironclaw/issues/3087) | [Reborn] Compose ironclaw_host_runtime services | **4** | HostRuntime 服务组合结构设计 |

### 4.2 热点分析

**Reborn 架构落地** 是绝对核心话题，Epic #2987 已有 44 条评论，表明团队正在密集讨论：
- 如何避免一次性 massive stacked PR review
- 分组 PR 的落地流程设计
- 各服务组件（HostRuntime、HTTP egress、Secrets、Network）的 wiring 依赖关系

**法律文档处理平台**（#3173 系列）引发关注，这是社区贡献者主导的 Apache-2.0 重实现，目标是项目级合同审查。

---

## 5. Bug 与稳定性

### 5.1 已修复的 Bug

| Issue # | 描述 | 严重度 | 状态 | Fix PR |
|---------|------|--------|------|--------|
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine 创建失败，报 "5 consecutive code errors" | P1 | ✅ 已修复 | [#3155](https://github.com/nearai/ironclaw/pull/3155) |

### 5.2 待处理的 Bug Reports

| Issue # | 描述 | 严重度 | 状态 | 备注 |
|---------|------|--------|------|------|
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | 安装脚本报错 "there isn't a download for your platform x86_64-unknown-linux-gnu" | 高 | 🟡 待处理 | Release 页面有该平台文件，但安装脚本无法找到 |
| [#2818](https://github.com/nearai/ironclaw/issues/2818) | v0.26.0 安装器在 x86_64-unknown-linux-gnu 失败 | 高 | ✅ 已修复 | [#3172](https://github.com/nearai/ironclaw/pull/3172) 已合并 |
| [#2963](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub 镜像 `nearai/ironclaw:latest` 不存在 | 中 | 🟡 待处理 | 文档引用了不存在的镜像 |
| [#3133](https://github.com/nearai/ironclaw/issues/3133) | Gmail 认证失败导致邮件任务无法执行 | 中 | 🟡 待处理 | 需调试 Gmail OAuth 流程 |

---

## 6. 功能请求与路线图信号

### 6.1 新功能请求

| Issue # | 标题 | 风险/范围 | 预计影响 |
|---------|------|-----------|----------|
| [#3168](https://github.com/nearai/ironclaw/issues/3168) | Add arm64/aarch64 platform support for Docker builds | 中 | 扩展 ARM64 机器支持，Cranelift 已支持 aarch64 |
| [#3166](https://github.com/nearai/ironclaw/issues/3166) | Mission auto-resume after auth/approval gate resolution | 中 | 授权/审批门解决后自动恢复任务执行 |
| [#3090](https://github.com/nearai/ironclaw/issues/3090) | [Reborn] Add ToolSurfaceService and CapabilityCatalog | 高 | 定义模型可见的工具/capability 表面 |
| [#3093](https://github.com/nearai/ironclaw/issues/3093) | [Reborn] Add EventProjectionService | 高 | 事件投影服务，支持资源使用量估算 |
| [#3141](https://github.com/nearai/ironclaw/issues/3141) | [Reborn] Integrate cost-based budgets into ResourceGovernor | 高 | 成本预算集成到资源治理 |
| [#3162](https://github.com/nearai/ironclaw/issues/3162) | [Reborn] Add standalone durable event/audit store | 高 | 生产二进制独立持久化事件/审计存储 |
| [#3145](https://github.com/nearai/ironclaw/issues/3145) | Define background process obligation reconciliation lifecycle | 高 | 后台进程义务协调生命周期定义 |

### 6.2 路线图信号

从 Issue 标签和 PR 栈判断，**Reborn 架构落地**仍是最高优先级：
- Epic #2987 下的子任务正在逐个关闭
- #3080（Obligation handler）相关 wiring 密集进行
- reborn-memory 服务栈（#3180-#3185）即将完成

---

## 7. 用户反馈摘要

### 7.1 用户痛点

1. **安装失败**（#2949, #2818）
   - 用户在 Linux x86_64 平台无法通过安装脚本安装
   - 已有 fix（#3172）合并，但旧版本用户可能仍受影响

2. **Docker 镜像缺失**（#2963）
   - 文档引用的 `nearai/ironclaw:latest` 镜像不存在
   - `docker pull` 报错 "pull access denied"

3. **Gmail 集成问题**（#3133）
   - 用户尝试创建每 3 分钟发送邮件的任务失败
   - OAuth 认证流程存在问题

### 7.2 用户需求

- **跨平台支持**：ARM64 Docker 镜像需求（#3168）
- **数据导出**：用户期望能导出任务/对话记录（#3174 DOCX 导出）
- **使用分析**：用户希望查看 agent_jobs、routine_runs 聚合数据（#3177 insights 命令）
- **备份恢复**：便携式状态快照功能（#3178 backup --quick）

---

## 8. 待处理积压

### 8.1 长期未响应的 Issue

| Issue # | 标题 | 创建日期 | 状态 | 建议 |
|---------|------|----------|------|------|
| [#2963](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub image missing | 2026-04-26 | Open | 确认 Docker 镜像发布流程 |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | 安装脚本平台下载错误 | 2026-04-24 | Open | 需确认是否与 #2818 的 fix 解决了同一问题 |

### 8.2 高优先级积压

| Issue # | 标题 | 风险 | 说明 |
|---------|------|------|------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | Reborn 架构落地 Epic | 高 | 44 条评论，需持续推进 |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | [EPIC] Reborn product surface migration | 高 | 产品表面迁移，blocking #3020 |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | Reborn 垂直集成测试套件 | 高 | 测试覆盖度关键 |
| [#3162](https://github.com/nearai/ironclaw/issues/3162) | 独立持久化事件/审计存储 | 高 | 生产就绪关键组件 |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues (新开/活跃) | 22 |
| Issues (已关闭) | 7 |
| PRs (待合并) | 31 |
| PRs (已合并/关闭) | 19 |
| 新版本发布 | 0 |
| 依赖更新 | 44 个（#2973: 39, #2971: 5） |
| 核心贡献者 | @serrrfirat, @ilblackdragon, @nickpismenkov, @abbyshekit |

---

*报告生成时间：2026-05-02 | 数据来源：GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：** 2026-05-02
**项目仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

2026-05-02 期间，LobsterAI 项目保持平稳运行，无新增 Issues 报告，亦无版本发布。过去 24 小时内共有 **6 个 Pull Requests** 处于待合并状态，涵盖功能增强、Bug 修复及性能优化三大类别。值得注意的是，所有待合并 PR 均带有 `[stale]` 标签，表明这些 PR 自创建以来已超过 30 天未获合并，建议维护团队尽快进行代码审查与合并决策。项目整体处于功能迭代阶段，社区贡献活跃度良好。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

过去 24 小时内共有 **6 个 PR 待合并**，无已合并 PR。以下为待合并 PR 详情：

| PR 编号 | 类型 | 标题 | 作者 | 状态 |
|---------|------|------|------|------|
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | Bug Fix | fix(cowork): hide OpenClaw main agent sessions from session list | @Noodles006 | OPEN |
| [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | Bug Fix | fix(auth): unify token refresh lock to eliminate race conditions | @gongcongrong | OPEN |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | Bug Fix | fix(skill): add duplicate detection for local skill uploads | @OnePieceJoker | OPEN |
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | Feature | feat(skills): 为已导入的技能卡片添加打开文件夹按钮 | @Housum | OPEN |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | Performance | 优化流式响应渲染性能，消除消息列表在 AI 回复过程中的全量重渲染 | @grayalone921 | OPEN |
| [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | Bug Fix | fix(installer): stop app before Windows uninstall | @leedalei | OPEN |

**关键进展分析：**

- **#1186 性能优化 PR** 值得关注：该 PR 针对 AI 流式响应期间的渲染性能问题进行了深度优化，通过引入 `createSelector` 稳定对象引用、为 `AssistantTurnBlock` 添加自定义比较器的 `React.memo`，预计可将 100 条消息会话中的全量消息树遍历次数从约 6600 次降至最低，显著改善界面滚动流畅度与 CPU 占用。

- **#822 认证模块重构**：统一了三个 token 刷新路径（被动 401 触发、主动临近过期触发、手动 IPC 触发）的并发控制机制，消除多请求并发 401 时的竞态条件，提升认证系统稳定性。

---

## 4. 社区热点

**本期无新增 Issues 讨论。** 以下为待合并 PR 中反映的社区热点诉求：

| PR 编号 | 热点主题 | 社区关注度 |
|---------|----------|------------|
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | Skill 重复上传检测 | 用户频繁反馈同名 Skill 多次出现、存储浪费 |
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | 技能文件夹快速访问 | 用户强烈需求直接编辑已安装技能文件的能力 |
| [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | Windows 卸载体验 | 用户反馈卸载后应用仍可运行，造成困惑 |

**热点分析：** 社区反馈集中在**用户体验细节优化**与**系统健壮性增强**两个方向。Skill 管理相关功能（#825、#1185）反映了用户对本地技能定制化的强烈需求；Windows 安装器修复（#1190）则体现了对生产环境稳定性的关注。

---

## 5. Bug 与稳定性

本期无新增 Bug 报告。以下为待合并 PR 中涉及的已知 Bug 修复：

| 严重程度 | PR 编号 | Bug 描述 | 修复方案 | 是否有 Fix |
|----------|---------|----------|----------|------------|
| **中** | [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | Token 刷新竞态条件：多请求并发 401 时全部并发调用刷新接口 | 统一并发锁机制 | ✅ |
| **中** | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | OpenClaw 主 Agent 会话暴露在用户会话列表中，造成困惑 | 新增 `hidden` 字段标记内部会话 | ✅ |
| **低** | [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | Skill 重复上传创建多个副本（skill-1, skill-2...） | 基于 SHA256 内容哈希检测重复 | ✅ |
| **低** | [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | Windows 卸载时应用未终止，卸载后仍可运行 | 新增 `customUnInit` 钩子执行进程终止 | ✅ |

**稳定性评估：** 所有已知 Bug 均已有对应 Fix PR，建议优先合并以提升产品质量。Token 刷新竞态条件（#822）建议作为高优先级处理。

---

## 6. 功能请求与路线图信号

以下待合并 PR 反映了用户对新功能的需求，可作为下一版本规划参考：

| PR 编号 | 功能类型 | 功能描述 | 潜在价值 |
|---------|----------|----------|----------|
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | 技能管理增强 | 为已导入技能卡片添加「打开文件夹」按钮 | 提升开发者体验，降低技能定制门槛 |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | 性能优化 | 流式响应渲染优化，消除全量重渲染 | 显著提升长对话场景下的 UI 流畅度 |

**路线图建议：**
- **短期（vX.x）：** 合并 #1186 性能优化与 #822 安全修复，提升核心体验
- **中期：** 完善 Skill 生态系统（#825、#1185），增强本地化定制能力
- **长期：** 考虑构建 Skill 市场或版本管理机制，应对 Skill 数量增长

---

## 7. 用户反馈摘要

从待合并 PR 摘要中提炼的用户痛点与需求：

| 场景 | 用户痛点 | 对应 PR |
|------|----------|---------|
| **AI 流式对话** | 界面滚动卡顿、CPU 占用偏高，长对话体验差 | [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) |
| **Skill 管理** | 重复上传 Skill 导致存储浪费、列表混乱 | [#825](https://github.com/netease-youdao/LobsterAI/pull/825) |
| **技能定制** | 无法快速定位已安装技能的文件位置 | [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) |
| **认证稳定性** | 多标签页同时使用时报错或会话失效 | [#822](https://github.com/netease-youdao/LobsterAI/pull/822) |
| **Windows 卸载** | 卸载后应用仍可运行，产生困惑 | [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) |

**用户满意度洞察：** 用户对产品的**核心 AI 功能**较为满意，但反馈集中在**工程细节**（性能、稳定性、开发者工具）层面，表明产品已进入精细化运营阶段。

---

## 8. 待处理积压

以下 PR 长期未合并，建议维护团队关注：

| PR 编号 | 创建时间 | 积压天数 | 优先级 | 建议 |
|---------|----------|----------|--------|------|
| [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | 2026-03-25 | **38 天** | ⚠️ 高 | 涉及认证安全，建议尽快审查合并 |
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | 2026-03-25 | **38 天** | 中 | 功能完整，建议安排审查 |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | 2026-04-01 | **31 天** | 中 | 用户体验修复，建议合并 |
| [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185) | 2026-04-01 | **31 天** | 中 | 功能增强，建议合并 |
| [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | 2026-04-01 | **31 天** | 高 | 性能优化显著，建议优先合并 |
| [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | 2026-04-01 | **31 天** | 中 | 安装器修复，建议合并 |

**积压原因分析：** 所有 PR 均带有 `[stale]` 标签，可能原因包括：
1. 维护团队资源有限，审查周期较长
2. PR 涉及跨模块改动，需要更多协调
3. 部分 PR（如 #822）可能需要额外的测试验证

**建议行动：**
- 建立 stale PR 定期清理机制，每两周审查一次
- 对高优先级 PR（#822、#1186）安排专人跟进
- 考虑使用 GitHub Actions 自动标记和提醒 stale PR

---

## 附录：数据来源

- **项目主页：** https://github.com/netease-youdao/LobsterAI
- **数据统计时间：** 2026-05-02 00:00 至 2026-05-02 23:59（UTC+8）
- **数据完整性：** Issues 0 条，PRs 6 条，Releases 0 个

---

*本报告由自动化系统生成，如有疑问请联系项目维护团队。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：** 2026-05-02
**项目仓库：** github.com/moltis-org/moltis
**数据周期：** 过去 24 小时

---

## 1. 今日速览

Moltis 项目在过去 24 小时内保持高度活跃，共处理 **6 条 Issues** 和 **11 条 Pull Requests**。项目团队展现出高效的 Bug 修复能力——5 个已关闭的 Issues 中包含多个关键问题（如 Telegram 文件上传 panic、Discord 命令参数缺失、聊天布局异常），均已通过对应 PR 修复。代码库合并了 9 个 PR，涵盖 UI 修复、多语言支持、新功能模块（便携式数据迁移、电话支持）等多个维度。值得注意的是，仍有 **2 个重要 PR 处于 Open 状态**（#942 远程沙箱支持、#920 Twilio 电话支持），预示着下一版本的功能扩展方向。整体项目健康度良好，Issue 响应及时，无版本发布但代码库持续迭代推进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **9 个 Pull Requests**，项目在多个方向取得实质性进展：

### 核心修复类 PR

| PR 编号 | 标题 | 状态 | 关联 Issue |
|---------|------|------|------------|
| [#954](https://github.com/moltis-org/moltis/pull/954) | fix(telegram): 升级 teloxide 0.13→0.17 修复 multipart ThreadId panic | ✅ 已合并 | #947 |
| [#952](https://github.com/moltis-org/moltis/pull/952) | fix(web-ui): 修复聊天消息容器水平溢出 | ✅ 已合并 | #945 |
| [#950](https://github.com/moltis-org/moltis/pull/950) | fix(discord): 注册 slash 命令参数并添加所有思考级别 | ✅ 已合并 | #948 |
| [#955](https://github.com/moltis-org/moltis/pull/955) | fix(terminal): 防止标签页创建时的虚假"窗口不存在"错误 | ✅ 已合并 | #937 |
| [#953](https://github.com/moltis-org/moltis/pull/953) | test(e2e): 为 #946 添加自动滚动回归测试 | ✅ 已合并 | #946 |

### 功能增强类 PR

| PR 编号 | 标题 | 状态 | 亮点 |
|---------|------|------|------|
| [#951](https://github.com/moltis-org/moltis/pull/951) | feat(portable): 添加配置/数据库/会话的数据导入导出 | ✅ 已合并 | 新增 `moltis-portable` crate，支持 `.tar.gz` 归档备份 |
| [#339](https://github.com/moltis-org/moltis/pull/339) | feat(i18n): 添加 zh-TW 繁体中文语言支持 | ✅ 已合并 | 覆盖 macOS 和 Web 应用全 UI |
| [#943](https://github.com/moltis-org/moltis/pull/943) | feat(web-ui): 当 stt/tts 禁用时隐藏语音按钮 | ✅ 已合并 | 配置驱动的 UI 条件渲染 |
| [#944](https://github.com/moltis-org/moltis/pull/944) | feat(providers): 添加 Zen (opencode.ai) 多协议 provider | ✅ 已合并 | 支持 GPT/Claude/Gemini 等模型统一接入 |

### 待合并的重要 PR

| PR 编号 | 标题 | 状态 | 预计影响 |
|---------|------|------|----------|
| [#942](https://github.com/moltis-org/moltis/pull/942) | feat(sandbox): 远程和多后端沙箱支持 (Vercel, Daytona, Firecracker) | 🔄 Open | 云端部署场景的关键功能 |
| [#920](https://github.com/moltis-org/moltis/pull/920) | feat(telephony): 通过 Twilio 添加电话呼叫支持 | 🔄 Open | 拓展至语音通话场景 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**#949** [OPEN] Feature: Add provider failover support for sub-agents spawned via spawn_agent
🔗 https://github.com/moltis-org/moltis/issues/949
👤 作者: @Cstewart-HC | 创建: 2026-05-01

**核心诉求：** 子代理（scout、analyst、builder 等预设）当前缺乏 provider 故障转移能力。当指定模型（如 `custom-opencode-ai::glm-5.1`）的 provider 宕机、限流或返回 5xx 错误时，整个子代理调用链将失败。用户请求为 `spawn_agent` 工具添加自动 failover 机制。

**影响分析：** 该需求直击生产环境可靠性痛点。若实现，将显著提升 Moltis 在企业级场景的可用性。

---

### 热门 PR 讨论

**#951** feat(portable): 数据导入导出功能
🔗 https://github.com/moltis-org/moltis/pull/951
✅ 已合并

该 PR 引入的 `moltis-portable` crate 解决了用户长期反馈的"实例迁移难"问题，支持配置、工作区、数据库、会话的全量备份与恢复，预计将成为运维场景的高频使用功能。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

| 严重程度 | Issue 编号 | 描述 | 状态 | Fix PR |
|----------|------------|------|------|--------|
| 🔴 **高** | [#947](https://github.com/moltis-org/moltis/issues/947) | Telegram `send_document` 上传文档时 panic/重启 | ✅ 已修复 | [#954](https://github.com/moltis-org/moltis/pull/954) |
| 🔴 **高** | [#948](https://github.com/moltis-org/moltis/issues/948) | Discord Slash 命令参数被静默忽略 | ✅ 已修复 | [#950](https://github.com/moltis-org/moltis/pull/950) |
| 🟡 **中** | [#945](https://github.com/moltis-org/moltis/issues/945) | 聊天布局过宽，产生水平滚动条 | ✅ 已修复 | [#952](https://github.com/moltis-org/moltis/pull/952) |
| 🟡 **中** | [#946](https://github.com/moltis-org/moltis/issues/946) | 聊天窗口在底部时不自动滚动 | ✅ 已修复 | [#953](https://github.com/moltis-org/moltis/pull/953) (含回归测试) |
| 🟡 **中** | [#937](https://github.com/moltis-org/moltis/issues/937) | settings/terminal tmux 错误 | ✅ 已修复 | [#955](https://github.com/moltis-org/moltis/pull/955) |

**稳定性评估：** 今日所有报告的 Bug 均已关闭，平均响应时间 < 24 小时。项目团队展现出对关键路径（消息发送、命令执行）问题的快速修复能力。#946 的修复附带完整的 e2e 回归测试，为后续稳定性提供保障。

---

## 6. 功能请求与路线图信号

### 新功能请求

**#949** [OPEN] Provider failover support for sub-agents
🔗 https://github.com/moltis-org/moltis/issues/949

**需求分析：**
- 当前 `spawn_agent` 工具硬编码单一模型，缺乏容错
- 建议实现：主 provider 失败时自动切换至备用 provider
- 优先级：高（影响生产可用性）

**路线图关联度：** 🔴 高
**实现可能性：** 中高（#944 已引入 Zen 多协议 provider，为 failover 奠定基础）

### 进行中的功能 PR

| PR | 功能 | 成熟度 | 预计纳入版本 |
|----|------|--------|--------------|
| [#942](https://github.com/moltis-org/moltis/pull/942) | 远程沙箱（Vercel/Daytona/Firecracker） | 🟡 开发中 | 下一 minor 版本 |
| [#920](https://github.com/moltis-org/moltis/pull/920) | Twilio 电话呼叫 | 🟡 开发中 | 下一 minor 版本 |

---

## 7. 用户反馈摘要

### 痛点与场景

1. **多平台消息一致性**
   - Discord 用户反馈 slash 命令参数不生效（#948），影响多平台统一体验
   - Telegram 用户遭遇文件上传崩溃（#947），阻断媒体密集型工作流

2. **UI/UX 细节**
   - 聊天布局宽度异常（#945）影响阅读体验
   - 自动滚动行为不符合预期（#946），打断对话流

3. **运维需求**
   - 用户对数据迁移能力有明确需求，#951 的便携式导入导出功能直接响应此诉求

### 满意度指标

- 👍 反馈：1 个 Issue 获得 1 个 👍（#946 自动滚动问题）
- 评论活跃度：整体较低，说明 Bug 描述清晰、修复及时，减少了来回沟通成本

---

## 8. 待处理积压

### 长期未响应的 Issues

**无长期积压 Issues。**
所有 6 个 Issues 均在 24 小时内得到处理（5 个已关闭，1 个新功能请求待评估）。

### 待 Review 的重要 PR

| PR 编号 | 标题 | 等待时长 | 优先级 | 备注 |
|---------|------|----------|--------|------|
| [#942](https://github.com/moltis-org/moltis/pull/942) | 远程沙箱支持 | ~2 天 | 🔴 高 | 云端部署关键功能 |
| [#920](https://github.com/moltis-org/moltis/pull/920) | Twilio 电话支持 | ~3 天 | 🟡 中 | 新功能模块 |

**建议维护者关注：** #942 和 #920 均处于 Open 状态超过 2 天，建议尽快进行代码 review 以加速功能发布。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开 | 1 |
| Issues 已关闭 | 5 |
| PR 新开 | 4 |
| PR 已合并 | 9 |
| PR 待合并 | 2 |
| 新版本发布 | 0 |
| 参与贡献者 | @bashrusakh, @gaarf, @vvuk, @MMMaellon, @Cstewart-HC, @penso, @PeterDaveHello |

---

*报告生成时间：2026-05-02*
*数据来源：GitHub Moltis 仓库活动日志*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期**: 2026-05-02
**项目**: CoPaw (agentscope-ai/CoPaw)
**数据来源**: GitHub Activity (过去24小时)

---

## 1. 今日速览

过去24小时内，CoPaw 项目保持较高活跃度，共产生 **7 条新 Issue** 和 **4 条 PR 更新**。项目整体呈现**功能迭代为主**的态势——7个 Issue 中包含 4 个功能增强请求和 2 个 Bug 报告，PR 层面有 1 个新功能贡献被合并（#3989），另有 3 个 PR 处于待审查状态。值得注意的是，今日未产生新版本发布，但社区对记忆管理、OpenAI Responses API 支持、火山引擎 Provider 等功能表现出明确需求，项目功能矩阵正在快速扩展。

---

## 2. 版本发布

**无新版本发布**

过去24小时内项目未发布新版本，最近的 Release 信息为空。如有版本升级计划，建议关注项目 Release 页面以获取最新动态。

---

## 3. 项目进展

### 合并/关闭的 PR

| PR 编号 | 标题 | 状态 | 贡献者 | 说明 |
|---------|------|------|--------|------|
| [#3989](https://github.com/agentscope-ai/QwenPaw/pull/3989) | add knowledge | ✅ CLOSED | @suisrc | 首次贡献者提交的知识库补充内容，已被合并 |

### 待审查的 PR

| PR 编号 | 标题 | 状态 | 贡献者 | 预估影响 |
|---------|------|------|--------|----------|
| [#3994](https://github.com/agentscope-ai/QwenPaw/pull/3994) | Feat/volcengine provider | OPEN | @Nioolek | 🟢 **高价值** - 新增火山引擎及其 Coding Plan Provider，扩展云服务集成 |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | feat(cron): create Discord thread before agent dispatch | Under Review | @energyd | 🟡 中价值 - 优化 Discord 定时任务的输出隔离，避免与常规对话混淆 |
| [#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831) | Add vector model connection test feature | OPEN | @no-teasy | 🟡 中价值 - 新增向量模型连接测试功能，便于调试 |

**进展评估**: 项目今日推进了知识库内容的完善（#3989），同时有多个功能 PR 等待审查。火山引擎 Provider（#3994）作为新增 Provider 的重要补充，预计将获得优先合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 类型 | 热度分析 |
|------------|------|--------|------|----------|
| [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | [Bug]: 和agent聊天几轮后不会继续执行 | 2 | Bug | 🟠 **高关注** - 核心对话功能缺陷，影响用户体验连续性 |
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | [Bug]: Windows打包conda-pack与pip install冲突 | 2 | Bug | 🟠 **高关注** - Windows 用户打包场景的兼容性问题 |
| [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) | [Feature]: 通道响应速度太慢 | 2 | Enhancement | 🟡 中关注 - 性能优化需求，涉及多渠道响应延迟 |
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | [Feature]: 增强记忆管理与召回机制 | 1 | Enhancement | 🟡 中关注 - 长期使用痛点，需求明确且具体 |

**热点分析**: 今日社区讨论集中在两个方向——**Bug 修复**（对话中断、Windows 打包冲突）和**功能增强**（响应速度、记忆管理）。#3992 和 #3988 各获得 2 条评论，表明用户对这两个问题的关注度较高，建议优先响应。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🔴 **高** | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | 和agent聊天几轮后不会继续执行 | OPEN | ❌ 无 |
| 🔴 **高** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Windows打包conda-pack与pip install冲突 | OPEN | ❌ 无 |
| 🟠 **中** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Ollama频道无法携带对话历史 | OPEN | ❌ 无 |

**Bug 评估**:
- **#3992** 是今日最严重的 Bug，用户报告在与 Agent 交互几轮后系统停止响应，直接影响核心使用流程
- **#3988** 影响 Windows 用户的打包流程，涉及 conda-pack 与 pip 的依赖冲突
- **#3991** 是 Ollama 本地模型用户的特定问题，与在线 API 模型的记忆功能正常形成对比

**稳定性建议**: 建议维护者尽快响应 #3992，该问题可能影响大量用户的基本使用体验。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| Issue 编号 | 标题 | 类型 | 预估价值 | 与现有 PR 关联 |
|------------|------|------|----------|----------------|
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | 增强记忆管理与召回机制 | Enhancement | 🟢 高 | 无直接关联 PR |
| [#3993](https://github.com/agentscope-ai/QwenPaw/issues/3993) | Add Support for OpenAI Responses API | Enhancement | 🟢 高 | 无直接关联 PR |
| [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) | DeepSeek V4缺少xhigh/max thinking levels | Enhancement | 🟡 中 | 无直接关联 PR |
| [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) | 通道响应速度太慢 | Enhancement | 🟡 中 | 无直接关联 PR |

**路线图信号分析**:

1. **记忆管理系统升级** (#3995): 用户提出自动归档策略、冲突检测等具体需求，表明当前 Markdown 文件方案在长期使用中已触及瓶颈，可能成为下一版本的重点优化方向

2. **OpenAI Responses API 支持** (#3993): 社区明确请求支持 OpenAI 最新协议，这是跟进官方 API 演进的必要工作

3. **DeepSeek V4 增强** (#3996): 用户需要更细粒度的 thinking 控制（xhigh/max），表明 DeepSeek 模型集成正在深化

4. **火山引擎 Provider** (#3994 PR): 与 #3995 等 Issue 形成呼应，项目正在扩展 Provider 矩阵

---

## 7. 用户反馈摘要

### 真实用户痛点提炼

| 场景 | Issue 编号 | 用户反馈 | 痛点类型 |
|------|------------|----------|----------|
| **对话中断** | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | "和agent聊天了几轮之后，就不会继续执行了" | 🔴 核心功能缺陷 |
| **Windows 打包** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | "conda-pack <=0.7.1 与 pip install qwenpaw[full] 动作冲突"，打包程序缺乏子进程输出 | 🟠 工程化痛点 |
| **本地模型记忆** | [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | "使用 Ollama 部署的本地模型时，QwenPaw 无法正确携带上下文，每一轮对话都被当作全新请求" | 🟠 功能缺失 |
| **记忆膨胀** | [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | "每日笔记只会越来越多，没有自动归档/清理机制"，"手动精简依赖 agent 自觉" | 🟡 长期使用痛点 |
| **响应延迟** | [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) | "通道响应速度太慢" | 🟡 性能问题 |

**用户画像洞察**:
- **企业用户**: 关注 Windows 打包、Ollama 本地部署等工程化需求
- **高级用户**: 提出记忆管理、OpenAI Responses API 等深度功能需求
- **普通用户**: 遇到对话中断等直接影响使用的核心 Bug

---

## 8. 待处理积压

### 长期未响应的 Issue/PR（超过 7 天无更新）

| 编号 | 标题 | 类型 | 创建时间 | 最后更新 | 积压原因 |
|------|------|------|----------|----------|----------|
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | feat(cron): create Discord thread before agent dispatch | PR | 2026-04-17 | 2026-05-01 | 等待审查（14天） |

### 重要但未获响应的 Issue

| 编号 | 标题 | 类型 | 创建时间 | 优先级 |
|------|------|------|----------|--------|
| [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | [Bug]: 和agent聊天几轮后不会继续执行 | Bug | 2026-05-01 | 🔴 高 |
| [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | [Bug]: Windows打包conda-pack与pip install冲突 | Bug | 2026-04-30 | 🔴 高 |

**积压评估**:
- PR #3525 已等待审查 14 天，建议优先处理以保持贡献者活跃度
- Bug #3992 和 #3988 虽创建时间较短，但属于高优先级问题，建议 24 小时内响应

---

## 总结

| 维度 | 状态 | 评估 |
|------|------|------|
| **活跃度** | 🟢 良好 | 7 Issues + 4 PRs，产出稳定 |
| **版本节奏** | ⚪ 暂停 | 无新版本发布 |
| **Bug 处理** | 🟠 需关注 | 3 个 Bug 报告，2 个高严重度 |
| **功能推进** | 🟢 良好 | 火山引擎 Provider 等 PR 待合并 |
| **社区参与** | 🟢 良好 | 首次贡献者 PR 已合并 |

**建议行动项**:
1. 🔴 **紧急**: 响应 #3992（对话中断 Bug）
2. 🔴 **紧急**: 评估 #3988（Windows 打包冲突）
3. 🟡 **尽快**: 审查 PR #3525（Discord cron 功能）
4. 🟢 **规划**: 评估 #3995（记忆管理增强）是否纳入下一版本路线图

---

*报告生成时间: 2026-05-02 | 数据覆盖: 2026-05-01 00:00 至 2026-05-02 00:00 (UTC)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NemoClaw</strong> — <a href="https://github.com/NVIDIA/NemoClaw">NVIDIA/NemoClaw</a></summary>

# NemoClaw 项目动态日报

**报告日期：** 2026-05-02
**项目：** NVIDIA/NemoClaw
**数据窗口：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，NemoClaw 社区保持高度活跃，共产生 **50 条 Issue 更新**（38 条新开/活跃，12 条关闭）和 **50 条 PR 更新**（42 条待合并，8 条已合并/关闭），未发布新版本。今日的核心动向集中在三个方面：① CLI 向 oclif 框架的大规模迁移持续推进（多条 refactor PR 合并/待合入）；② 安全加固类 PR 集中出现（SSRF 防护、配置验证、运行时加固）；③ 多个平台（Brev、DGX Spark、macOS、Windows/WSL）上的 E2E 回归和安装体验问题被持续报告。整体来看，项目处于高迭代节奏，代码侧推进积极，但 Issue 积压量较大，部分高优先级 Bug 尚未有明确 fix。

---

## 2. 版本发布

**无新版本发布。** 最新稳定版仍为 v0.0.33（相关 PR 文档刷新已在进行中，参见 PR #2866），正式 tag 尚未打出。

---

## 3. 项目进展

以下为过去 24 小时内已合并或接近合入的重要 PR：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#2788](https://github.com/NVIDIA/NemoClaw/pull/2788) | refactor(cli): migrate maintenance commands to oclif | **CLOSED** | 将 `backup-all`、`upgrade-sandboxes`、`gc` 迁移至 oclif 框架，统一 CLI 架构 |
| [#2787](https://github.com/NVIDIA/NemoClaw/pull/2787) | refactor(cli): migrate sandbox inspection commands to oclif | **CLOSED** | 将 `status`、`policy`、`channels`、`config` 等只读检查命令迁移至 oclif |
| [#2796](https://github.com/NVIDIA/NemoClaw/pull/2796) | refactor(cli): migrate sandbox logs command to oclif | **CLOSED** | `logs [--follow]` 命令完成 oclif 迁移 |
| [#2860](https://github.com/NVIDIA/NemoClaw/pull/2860) | feat(inference): refresh NVIDIA endpoint model options | **CLOSED** | 新增 DeepSeek V4 Pro 作为精选云端模型，替换已弃用的 minimax-m2.5 |
| [#2382](https://github.com/NVIDIA/NemoClaw/pull/2382) | fix(hermes): pre-create rc files so .bashrc sources HERMES_HOME | **CLOSED** | 修复 Hermes 集成中 rc 文件缺失导致的路径问题 |
| [#2866](https://github.com/NVIDIA/NemoClaw/pull/2866) | docs: refresh release prep docs for 0.0.33 | **CLOSED** | 文档日常刷新，覆盖 Telegram mention-only、in-sandbox 消息关闭、Hermes 行为等变更 |

**待合并的高优先级 PR：**

| PR | 标题 | 核心价值 |
|---|---|---|
| [#2797](https://github.com/NVIDIA/NemoClaw/pull/2797) | refactor(cli): migrate skill install command to oclif | CLI 迁移栈的下一块拼图 |
| [#2646](https://github.com/NVIDIA/NemoClaw/pull/2646) | fix(recovery): add connect probe recovery path | 新增 `connect --probe-only` 非交互式网关恢复探针 |
| [#2414](https://github.com/NVIDIA/NemoClaw/pull/2414) | fix(security): harden config set SSRF validation | 递归扫描配置值中的 http/https 字符串，防止 SSRF |
| [#2874](https://github.com/NVIDIA/NemoClaw/pull/2874) | fix(runtime): harden overrides and gateway recovery | 运行时覆盖原子化 + 网关恢复前清理旧进程 |
| [#2876](https://github.com/NVIDIA/NemoClaw/pull/2876) | fix: harden Dockerfile replaceConfigFile patch | 提取 `rcf_patch.py` 脚本，对 OpenClaw 配置替换进行鲁棒化 |
| [#2848](https://github.com/NVIDIA/NemoClaw/pull/2848) | feat(cli): add sandbox doctor command | 新增 `nemoclaw <name> doctor` 健康检查命令 |
| [#2696](https://github.com/NVIDIA/NemoClaw/pull/2696) | fix: make Dockerfile replaceConfigFile patch robust for 2026.4.24 | 修复 Dockerfile patch 对 OpenClaw 2026.4.24 的兼容性问题 |
| [#2834](https://github.com/NVIDIA/NemoClaw/pull/2834) | Correctly install Hermes Agent dependencies | 引入 UV 同步 Python 依赖 + npm 安装 JS 依赖，解决 discord.py 等缺失问题 |
| [#2873](https://github.com/NVIDIA/NemoClaw/pull/2873) | ci(wsl): run e2e from ext4 workspace | WSL E2E 测试从 Windows 挂载目录迁移至 ext4 文件系统，减少 DrvFS I/O 开销 |

---

## 4. 社区热点

**评论数最多的 Issue：**

- **#1992** — Nightly E2E failed（319 条评论，OPEN）
  链接：https://github.com/NVIDIA/NemoClaw/issues/1992
  摘要：夜间 E2E 流水线失败，涉及 CI/CD 基础设施问题。评论数远超其他 Issue，表明社区对 CI 稳定性高度关注。

- **#414** — Web Plugin `getaddrinfo EAI_AGAIN api.search.brave.com`（10 条评论，CLOSED）
  链接：https://github.com/NVIDIA/NemoClaw/issues/414
  摘要：Windows/WSL 环境下 Brave 搜索工具 DNS 解析失败，影响入门体验。

- **#888** — Gateway 重启导致 TLS 证书重新生成，破坏现有沙箱连接（6 条评论，CLOSED）
  链接：https://github.com/NVIDIA/NemoClaw/issues/888
  摘要：安全相关，mTLS CA 密钥对在网关重启时重新生成，导致已连接沙箱断开。

**热点 PR：**

- **#2797** — skill install 命令迁移至 oclif（OPEN）
  链接：https://github.com/NVIDIA/NemoClaw/pull/2797
  社区关注度：CLI 重构是长期路线图中的关键工作，多个关联 PR 正在栈式推进。

- **#2414** — SSRF 防护加固（OPEN）
  链接：https://github.com/NVIDIA/NemoClaw/pull/2414
  安全研究员和用户高度关注，递归配置扫描是实质性的安全改进。

**热点分析：** 当前社区最集中的诉求是**安装和 onboarding 体验的可靠性**（WSL 安装失败、PATH 配置失效、非 TTY 模式下第三方软件许可标志被忽略），以及 **CI/CD 稳定性**（E2E 夜间构建持续失败）。CLI 现代化（oclif 迁移）获得了较多正面关注，但迁移过程中的回归风险也引发了讨论。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 高优先级（影响核心功能或多人受影响）

| Issue | 标题 | 平台 | 状态 | Fix PR |
|---|---|---|---|---|
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E failed | All | OPEN | — |
| [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) | WSL2 Gateway fails — cpuset cgroup (v2) not found | Windows/WSL | OPEN | — |
| [#2604](https://github.com/NVIDIA/NemoClaw/issues/2604) | `nemoclaw status` omits Connected/Inference fields, cloudflared stopped with no context | DGX Spark, Ubuntu | OPEN | — |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | perf: investigate and reduce networking latency during onboard and validation | Windows/WSL | OPEN | — |
| [#2342](https://github.com/NVIDIA/NemoClaw/issues/2342) | Brev Launchable deployment shows "Version n/a" and "Health Offline" | Brev | OPEN | — |

### 🟡 中优先级（功能受损但有 workaround）

| Issue | 标题 | 平台 | 状态 | Fix PR |
|---|---|---|---|---|
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | local-inference policy preset missing Ollama ports 11434/11435 | All | OPEN | — |
| [#2177](https://github.com/NVIDIA/NemoClaw/issues/2177) | [Regression] presets do not apply correctly | All | OPEN | — |
| [#2267](https://github.com/NVIDIA/NemoClaw/issues/2267) | Exported port not effective with TUI | macOS | OPEN | — |
| [#2097](https://github.com/NVIDIA/NemoClaw/issues/2097) | `nemoclaw` lacks way to remove/stop messaging channels | Brev | OPEN | — |
| [#2791](https://github.com/NVIDIA/NemoClaw/issues/2791) | `openclaw config set` is not available | All | OPEN | — |
| [#2515](https://github.com/NVIDIA/NemoClaw/issues/2515) | `npm install` silently succeeds when `npm link` fails — `nemoclaw` not on PATH | Ubuntu | OPEN | — |
| [#2868](https://github.com/NVIDIA/NemoClaw/issues/2868) | Post-install shell PATH can leave nemoclaw unavailable | All | OPEN | — |
| [#2869](https://github.com/NVIDIA/NemoClaw/issues/2869) | Sandbox name validation remains easy to miss on Brev | Brev | OPEN | — |

### 🟢 低优先级 / 已关闭

| Issue | 标题 | 状态 | 备注 |
|---|---|---|---|
| [#414](https://github.com/NVIDIA/NemoClaw/issues/414) | Web Plugin DNS failure | CLOSED | — |
| [#888](https://github.com/NVIDIA/NemoClaw/issues/888) | TLS cert regeneration breaks connections | CLOSED | — |
| [#2376](https://github.com/NVIDIA/NemoClaw/issues/2376) | Hermes Agent writes to wrong location | CLOSED | 已通过 #2382 修复 |
| [#2681](https://github.com/NVIDIA/NemoClaw/issues/2681) | "Enable Dreaming" fails with EACCES | CLOSED | — |
| [#2766](https://github.com/NVIDIA/NemoClaw/issues/2766) | Telegram bot hangs at starting provider | CLOSED | — |

**回归风险提示：** v0.0.33 相关的 regression 问题（#2177 presets 不生效、#2199 Ollama 端口缺失）需在发布前重点验证。

---

## 6. 功能请求与路线图信号

**新功能请求（OPEN Issues）：**

| Issue | 标题 | 类型 | 评估 |
|---|---|---|---|
| [#2390](https://github.com/NVIDIA/NemoClaw/issues/2390) | refactor(arch): introduce Dashboard Delivery Contract | 架构重构 | 有 PR 跟进意向，提议统一仪表盘可达性配置 |
| [#2848](https://github.com/NVIDIA/NemoClaw/pull/2848) | feat(cli): add sandbox doctor command | 功能新增 | PR 已 OPEN，接近合入 |
| [#2797](https://github.com/NVIDIA/NemoClaw/pull/2797) | refactor(cli): migrate skill install command to oclif | CLI 现代化 | 属于已规划路线图，持续推进中 |
| [#1417](https://github.com/NVIDIA/NemoClaw/issues/1417) | [All Platforms][Skill] weather skill cannot complete in sandbox | 功能修复 | 长期未解决，影响内置技能可用性 |
| [#1737](https://github.com/NVIDIA/NemoClaw/issues/1737) | support Telegram mention-only mode (parity with Discord requireMention) | 功能增强 | 已有多条相关 Issue，PR 推进中 |

**模型弃用相关：**

| Issue | 标题 | 截止日期 | 行动 |
|---|---|---|---|
| [#2120](https://github.com/NVIDIA/NemoClaw/issues/2120) | Model Deprecation: kimi-k2.5 → kimi-k2.6 | 2026-05-20 | API 重定向已激活，需确认端到端迁移完成 |
| [#2855](https://github.com/NVIDIA/NemoClaw/issues/2855) | Model Deprecation: minimax-m2.5 → minimax-m2.7 | 2026-05-12 | 无延期窗口，UI 和 API 同日关闭，需紧急处理 |

**路线图信号：** CLI oclif 化是当前明确的短期路线。安全加固（SSRF、seccomp、mTLS 稳定性）持续受到关注但进展不一（部分标记 wont-fix）。多平台一致性（Brev、DGX Spark、macOS、Windows）是用户反馈最强烈的需求方向。

---

## 7. 用户反馈摘要

从 Issue 评论和内容中提炼的真实用户声音：

**痛点：**

- **安装体验脆弱**：WSL2 安装在 cgroup v2 检测阶段失败（#2096）；`npm install` 静默失败导致 `nemoclaw` 命令不可用（#2515）；安装后 PATH 未生效（#2868）。用户反映"安装看起来成功了，但完全无法使用"。
- **多平台不一致**：同一功能在不同平台（macOS、Ubuntu、Brev、DGX Spark）表现差异大，用户要求"All Platforms"修复的 Issue 数量众多。
- **夜间 CI 持续失败**：#1992 拥有 319 条评论，说明 CI 稳定性问题严重影响了贡献者信心和开发效率。
- **Hermes 集成配置复杂**：依赖安装路径问题（#2376/#2382）和工具调用模板泄漏问题（#2731）反映出 Hermes 作为二级集成与主系统的磨合不足。

**满意点：**

- Telegram mention-only 模式的需求得到响应（#1737 关联多个 PR），Discord 用户期待的功能终于在 Telegram 侧实现。
- CLI 迁移至 oclif 的方向获得认可，`doctor` 命令等新工具受到期待。

---

## 8. 待处理积压

以下 Issue 长期未响应或存在明确需求但尚未解决，提醒维护者关注：

| Issue | 标题 | 创建时间 | 状态 | 积压原因 |
|---|---|---|---|---|
| [#1417](https://github.com/NVIDIA/NemoClaw/issues/1417) | weather skill cannot complete in sandbox | 2026-04-03 | OPEN | 约 29 天未解决，内置技能可用性受损 |
| [#1992](https://github.com/NVIDIA/NemoClaw/issues/1992) | Nightly E2E failed | 2026-04-17 | OPEN | 约 15 天，CI 基础设施问题影响全社区 |
| [#2096](https://github.com/NVIDIA/NemoClaw/issues/2096) | WSL2 Gateway fails — cpuset cgroup (v2) | 2026-04-20 | OPEN | 约 12 天，Windows/WSL 用户入门阻断 |
| [#2097](https://github.com/NVIDIA/NemoClaw/issues/2097) | nemoclaw lacks way to remove/stop messaging channels | 2026-04-20 | OPEN | 约 12 天，功能缺失，用户需手动清理 |
| [#2199](https://github.com/NVIDIA/NemoClaw/issues/2199) | local-inference preset missing Ollama ports | 2026-04-21 | OPEN | 约 11 天，本地模型使用受阻 |
| [#2177](https://github.com/NVIDIA/NemoClaw/issues/2177) | [Regression] presets do not apply correctly | 2026-04-21 | OPEN | 约 11 天，v0.0.33 regression，需优先验证 |
| [#2001](https://github.com/NVIDIA/NemoClaw/issues/2001) | perf: reduce networking latency during onboard | 2026-04-17 | OPEN | 约 15 天，多个 workaround 已堆积，根因未定位 |
| [#803](https://github.com/NVIDIA/NemoClaw/issues/803) | No custom seccomp profile | 2026-03-24 | CLOSED (wont-fix) | 标记 wont-fix 但安全社区可能持续关注 |
| [#801](https://github.com/NVIDIA/NemoClaw/issues/801) | No per-task lifecycle tracking or graceful abort | 2026-03-24 | CLOSED (wont-fix) | 标记 wont-fix，长期需求未被满足 |

**积压风险提示：** 8 个 OPEN Issue 创建时间超过 10 天，其中 #1417 已近一个月。CI 失败（#1992）和 WSL2 安装（#2096）属于高优先级阻断性问题，建议优先分配资源。

---

*本报告由自动化数据提取生成，数据来源：GitHub NemoClaw 仓库 2026-05-02 活动记录。*

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*
