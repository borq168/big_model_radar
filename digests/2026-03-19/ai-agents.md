# OpenClaw 生态日报 2026-03-19

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-19 01:03 UTC

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

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

OpenClaw 社区在过去24小时内保持极高活跃度，共产生 **500条 Issues 更新**（新开/活跃 461 条，关闭 39 条）和 **500条 PR 更新**（待合并 405 条，已合并/关闭 95 条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但核心功能迭代持续推进，尤其在会话管理、多通道稳定性、插件架构和身份认证等关键模块。社区对国际化（i18n）、MCP 协议支持、外部记忆 API 等长期需求讨论热烈，反映出项目正从“可用”向“可扩展、可定制”演进。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版本仍为 `v2026.3.13`，多个高优先级回归问题（如网关重启、CLI 握手失败、子代理恢复）已在 PR 层修复，预计将纳入下一热修复版本。

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于**系统稳定性与架构优化**：

- **#49249**（已合并）：修复 Ollama 本地模式 onboarding 时自动拉取 `glm-4.7-flash` 模型的问题，避免资源浪费（[链接](https://github.com/openclaw/openclaw/pull/49249)）
- **#48880**（已合并）：修正 Web UI 中 token 统计显示逻辑，使用 `totalTokens` 替代历史累计输入值，提升用户体验清晰度（[链接](https://github.com/openclaw/openclaw/pull/48880)）
- **#49760**（已合并）：修复 OpenRouter 模型选择器发送错误 provider 引用的问题，确保 Control UI 正确路由模型请求（[链接](https://github.com/openclaw/openclaw/pull/49760)）
- **#47541**（已合并）：实现**可插拔 Web 搜索提供程序 API**，支持 SearXNG、Tavily、Bing 等第三方引擎，增强架构扩展性（[链接](https://github.com/openclaw/openclaw/pull/47541)）
- **#45420**（已合并）：修复网关重启后子代理丢失、webhook 路由未恢复及内存未正确刷新的问题，显著提升多代理场景可靠性（[链接](https://github.com/openclaw/openclaw/pull/45420)）

此外，**#50101**（会话管理改进）、**#48838**（代理级技能策略与 cron 语义）等大型 PR 仍在 review 中，预示下一阶段将强化多代理协作与任务调度能力。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 国际化（i18n）与本地化支持 | 103 | 用户强烈希望支持多语言界面与内容，但维护团队表示当前带宽不足 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot 应用缺失 | 42 | 跨平台用户呼吁补齐桌面端支持，对标 macOS 功能 |
| [#49836](https://github.com/openclaw/openclaw/issues/49836) | 安全警告：仿冒空投钓鱼攻击 | 28 | 社区警惕利用 OpenClaw 名称进行钱包诈骗，需官方发声澄清 |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | 原生 MCP 客户端支持 | 8 | 开发者希望接入标准 MCP 协议，打破 OpenClaw 工具生态孤岛 |

> **分析**：国际化与安全治理成为社区关注焦点，反映出项目全球化部署需求上升；MCP 支持呼声虽少但代表生态融合趋势。

---

## 5. Bug 与稳定性

### ⚠️ 高严重性未修复问题（按影响排序）

| Issue | 问题描述 | 状态 | 是否有 Fix PR |
|------|--------|------|-------------|
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | 网关每 ~50 分钟自动重启（reason=none） | OPEN | ❌ |
| [#45560](https://github.com/openclaw/openclaw/issues/45560) | 本地网关 CLI 握手失败（probe timeout） | OPEN | ❌（相关修复见 #46892） |
| [#48167](https://github.com/openclaw/openclaw/issues/48167) | CLI 完全失效（gateway closed 1000） | OPEN | ❌ |
| [#49191](https://github.com/openclaw/openclaw/issues/49191) | Google Vertex ADC 认证返回 401 | OPEN | ❌ |
| [#48400](https://github.com/openclaw/openclaw/issues/48400) | 自动重试后 Session JSONL 丢失工具调用记录 | OPEN | ❌ |

### ✅ 已修复关键回归

- **#40396**（升级至 v2026.3.7 导致无限循环）→ 已关闭，修复逻辑已合并
- **#48427**（同一 MiniMax API Key 在不同网关表现不一致）→ 已关闭，确认为配置隔离问题

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 纳入可能性 |
|--------|--------------|----------|
| **外部记忆提供程序 API**（零停机上下文压缩） | [#49233](https://github.com/openclaw/openclaw/issues/49233) | ⭐⭐⭐⭐☆（高，已有设计提案） |
| **MCP 客户端原生支持** | [#29053](https://github.com/openclaw/openclaw/issues/29053) | ⭐⭐⭐☆☆（中，需评估协议兼容性） |
| **并行文档附件批处理** | [#34942](https://github.com/openclaw/openclaw/pull/34942)（PR 草案） | ⭐⭐⭐⭐☆（高，解决 UX 痛点） |
| **Parallel.ai 作为 Web 搜索提供程序** | [#50033](https://github.com/openclaw/openclaw/pull/50033) | ⭐⭐⭐⭐☆（高，PR 已提交） |
| **macOS Talk Mode 本地 STT** | [#50051](https://github.com/openclaw/openclaw/pull/50051) | ⭐⭐⭐☆☆（中，依赖 ExecuTorch 集成） |

> **趋势判断**：下一版本 likely 聚焦**会话可靠性**（子代理、重启恢复）、**搜索扩展性**（多 provider 支持）和**边缘设备能力**（本地语音/图像）。

---

## 7. 用户反馈摘要

- **痛点**：
  - “网关频繁重启，日志只写 `reason=none`，根本无法排查”（#48205）
  - “CLI 完全不能用，但网页端正常，重启也没用”（#48167）
  - “Kimi web_search 返回 401，但 Chat API 正常，配置没错”（#44851）
  - “Telegram 发多个文件只处理第一个，后面全丢”（#34942）

- **满意点**：
  - “子代理终于能在重启后恢复了，多机器人协作稳多了”（#45420 评论）
  - “token 统计现在清楚多了，不再误以为超限”（#48880 相关反馈）

- **使用场景**：
  - 企业用户通过 Nginx 反向代理部署 Control UI（#45753）
  - 开发者使用 Docker + 私有 Ollama 构建本地 AI 工作流（#41449）
  - 多语言团队期待 i18n 支持以降低接入门槛（#3460）

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 积压原因 |
|--------|------|--------|--------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 功能请求 | 2026-01-28 | 维护者明确表示“无带宽支持”，需社区驱动或赞助 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 功能请求 | 2026-01-01 | 长期未响应，Windows/Linux 桌面端生态缺口 |
| [#22278](https://github.com/openclaw/openclaw/issues/22278) | 文档/开发者体验 | 2026-02-21 | `openclaw.json` Schema 未公开，导致配置错误难调试 |
| [#19819](https://github.com/openclaw/openclaw/issues/19819) | Bug（Windows） | 2026-02-18 | SIGUSR1 重启在 Windows 崩溃，平台兼容性问题 |
| [#23452](https://github.com/openclaw/openclaw/issues/23452) | Bug（Vision） | 2026-02-22 | 多通道图像识别失效，影响核心 multimodal 能力 |

> **建议**：优先推动 #22278（Schema 发布）和 #19819（Windows 兼容性），二者技术成本低但能显著提升开发者体验与跨平台稳定性。

--- 

**报告生成时间**：2026-03-19  
**数据来源**：OpenClaw GitHub 仓库公开数据

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-03-19**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **“核心框架趋同、垂直场景分化”** 的格局。以 OpenClaw 为代表的核心项目正从“可用”向“可扩展、可定制”演进，聚焦多代理协作、工具链标准化（如 MCP 协议）与部署可靠性；与此同时，NanoBot、PicoClaw 等轻量级项目通过安全加固、多通道集成和用户体验优化争夺细分市场。整体生态活跃度极高，24 小时内 12 个主要项目共产生超 **1,200 条 Issues/PR 更新**，反映出开发者对 AI 智能体架构、安全边界与生产就绪能力的深度关注。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500 | 500 | ❌ | ⭐⭐⭐⭐☆（高活跃，技术债可控） |
| **NanoBot** | 36 | 62 | ❌ | ⭐⭐⭐⭐（稳定迭代，安全优先） |
| **Zeroclaw** | 37 | 50 | ✅ v0.5.0 | ⭐⭐⭐⭐（功能成熟，CI 驱动） |
| **PicoClaw** | 32 | 89 | ✅ Nightly | ⭐⭐⭐☆（高速演进，nightly 风险） |
| **NanoClaw** | 25 | 50 | ❌ | ⭐⭐⭐（轻量但积压严重） |
| **IronClaw** | 50 | 50 | ❌ | ⭐⭐⭐⭐（企业级重构，安全导向） |
| **LobsterAI** | 13 | 11 | ❌ | ⭐⭐⭐（架构迁移中，用户反馈集中） |
| **TinyAGI** | 0 | 16 | ✅ v0.0.15 | ⭐⭐⭐⭐（品牌迁移完成，安装体验优） |
| **Moltis** | 2 | 1 | ❌ | ⭐⭐（维护阶段，低活跃） |
| **CoPaw** | 50 | 50 | ✅ v0.1.0-beta.3 | ⭐⭐⭐⭐（多模态落地，性能问题待解） |
| **ZeptoClaw** | 3 | 2 | ❌ | ⭐⭐⭐（架构前瞻，合并节奏慢） |
| **EasyClaw** | 5 | 2 | ✅ v1.7.1 | ⭐⭐⭐（用户体验优化，兼容性风险） |

> 注：健康度综合考量活跃度、响应速度、技术债、用户反馈闭环能力。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态中 **唯一具备完整多代理协作架构 + 插件化工具链 + 企业级部署能力** 的核心参照项目。相比同类：
- **优势**：社区规模最大（单日 500+ Issues/PR）、功能迭代最快（会话恢复、Web 搜索 API、子代理稳定性）；
- **技术路线差异**：坚持“网关-子代理”分层架构，支持动态模型切换与外部记忆 API，而 NanoBot/Zeroclaw 更侧重单代理轻量化；
- **社区规模**：GitHub 互动量约为第二名 CoPaw 的 10 倍，Issue 讨论深度显著更高（如 #3460 i18n 讨论达 103 条评论）。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **MCP 协议支持** | OpenClaw、Zeroclaw、IronClaw、PicoClaw | 打破工具生态孤岛，实现跨代理工具调用标准化 |
| **多通道稳定性** | NanoBot（Telegram）、Zeroclaw（WhatsApp/Telegram）、PicoClaw（飞书/Google Chat） | 解决消息丢失、重复发送、Webhook 恢复问题 |
| **安全与权限控制** | NanoClaw（#1149 漏洞披露）、Zeroclaw（#1478 安全过严）、IronClaw（SSRF 防护） | 平衡功能可用性与沙箱隔离，防止敏感操作暴露 |
| **本地模型与离线能力** | CoPaw、LobsterAI、TinyAGI | 支持 Ollama/llama.cpp，降低云依赖 |
| **可观测性与调试** | NanoBot（#2189 LLM Trace）、IronClaw（Routine 日志）、CoPaw（#1474 执行链路） | 提供 token 消耗、工具调用轨迹、错误上下文可视化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 多代理协作、企业级部署 | 开发者、企业团队 | 网关-子代理分层，插件化工具链 |
| **NanoBot** | 轻量、安全、Telegram 优先 | 个人用户、隐私敏感者 | 单进程架构，强配置安全（0o600 权限） |
| **Zeroclaw** | 多通道聚合、CLI 体验 | 运维/开发者 | Rust 编写，强调类型安全与自检命令 |
| **PicoClaw** | 多模态、国际化、边缘设备 | 全球化个人用户 | Python + TUI，快速集成 TTS/ASR |
| **TinyAGI** | 极简安装、多代理办公空间 | 技术极客 | Node.js + 自动迁移，强调“一键部署” |
| **CoPaw** | 多模态上传、本地嵌入 | 企业内网开发者 | 控制台 UI + 记忆系统，强交互设计 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比，功能爆发）：  
  **OpenClaw、PicoClaw、CoPaw、TinyAGI** —— 日均 PR > 50，核心功能持续重构，适合早期采用者。
  
- **质量巩固阶段**（高 Issue 响应率，Bug 修复主导）：  
  **NanoBot、Zeroclaw、IronClaw** —— 安全补丁与稳定性优化为主，适合生产环境部署。

- **维护/ niche 阶段**（低活跃，特定场景）：  
  **Moltis、EasyClaw、ZeptoClaw** —— 聚焦兼容性修复或架构探索，社区参与有限。

---

## 7. 值得关注的趋势信号

1. **MCP 协议将成为工具生态事实标准**  
   OpenClaw、Zeroclaw、IronClaw 均推进原生支持，预示未来智能体将像“浏览器插件”一样即插即用。

2. **安全不再是选项，而是架构核心**  
   从 NanoClaw 的漏洞披露流程到 IronClaw 的 SSRF 防护，项目普遍建立安全响应机制，开发者需将权限控制纳入设计初期。

3. **“本地优先 + 多模态”成为个人助手刚需**  
   CoPaw 多模态上传、PicoClaw TTS/ASR、TinyAGI 离线记忆，反映用户对隐私与交互自然度的双重诉求。

4. **部署体验决定 adoption 速度**  
   TinyAGI 的 curl 安装、Zeroclaw 的 self-test 命令、EasyClaw 的 macOS 签名问题，表明**降低部署摩擦**比功能堆砌更重要。

> **对开发者的建议**：优先选择支持 MCP、具备清晰安全边界、提供本地模型集成的项目；若面向企业，关注 IronClaw/Zeroclaw 的审计与隔离能力；若面向个人用户，NanoBot/PicoClaw 的轻量与隐私设计更具优势。

---  
**分析师备注**：生态正从“功能竞赛”转向“可靠性、安全性、可维护性”三位一体竞争，2026 年将是个人 AI 助手走向生产就绪的关键一年。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-19）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **36条 Issues 更新** 和 **62条 PR 更新**，反映出项目处于快速迭代与用户深度参与阶段。尽管无新版本发布，但开发重心明显向 **稳定性修复、安全增强与多通道支持优化** 倾斜。社区对 Telegram 消息重复、配置安全性、LLM 可观测性等核心问题高度关注，推动多项关键 PR 进入合并流程。整体项目健康度良好，技术债逐步清理，用户体验持续改善。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.4.post5`，但多个修复性 PR 已提交并部分合并，预计将在下个补丁版本中集中发布。

---

## 3. 项目进展

今日有 **23个 PR 被合并或关闭**，重点进展包括：

- ✅ **安全加固**：  
  - [`#2225`](https://github.com/HKUDS/nanobot/pull/2225) 合并：修复配置文件与 session 文件权限问题，默认从 `0o644` 提升至 `0o600`，防止敏感信息（如 API Key）被其他本地用户读取。  
  - [`#2218`](https://github.com/HKUDS/nanobot/pull/2218) 合并：支持 `{env:VAR}` 语法引用环境变量，避免密钥明文存储于 `config.json`，响应 #2172 安全诉求。

- ✅ **Telegram 通道稳定性修复**：  
  - [`#2229`](https://github.com/HKUDS/nanobot/pull/2229) 合并：修复群组中 `/command@BotName` 格式命令无法识别的问题，提升多用户场景下的可用性。  
  - [`#2177`](https://github.com/HKUDS/nanobot/pull/2177) 合并：隐藏 `message` 工具在 tool hints 中的显示，解决 #2169 反馈的“消息重复发送”问题。

- ✅ **配置与架构优化**：  
  - [`#2227`](https://github.com/HKUDS/nanobot/pull/2227) 合并：自动填充新增配置项（如 `send_tool_hints`），避免用户手动编辑遗漏导致功能异常。  
  - [`#2224`](https://github.com/HKUDS/nanobot/pull/2224) 合并：使用 `ContextVar` 重构工具路由上下文，提升并发任务下的状态隔离性。

> 项目整体在 **安全性、消息一致性与配置健壮性** 方面迈出关键步伐。

---

## 4. 社区热点

以下 Issues 引发高频讨论，反映核心用户痛点：

- 🔥 [`#1692`](https://github.com/HKUDS/nanobot/issues/1692)（8 评论）：**Telegram 机器人重复回复**（带/不带 Markdown 各一次），严重影响用户体验。已有修复 PR #2177 合并，预计下版本解决。
- 🔥 [`#660`](https://github.com/HKUDS/nanobot/issues/660)（9 评论）：质疑项目“超轻量”定位与依赖 Node.js 的矛盾，引发对架构精简化的讨论。
- 🔥 [`#2189`](https://github.com/HKUDS/nanobot/issues/2189) & [`#2154`](https://github.com/HKUDS/nanobot/issues/2154)（各 4 评论）：集中呼吁支持 **LLM Trace 可观测性**（如 Langfuse 集成），便于调试与性能分析，已有相关 PR #2043 探索子代理轨迹持久化。
- 🔥 [`#2233`](https://github.com/HKUDS/nanobot/issues/2233)（新 Issue）：请求限制实例权限，防止通过 bot 命令暴露系统结构或执行敏感操作，凸显安全边界需求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| [`#1692`](https://github.com/HKUDS/nanobot/issues/1692) Telegram 消息重复发送 | 高 | ✅ 已修复 | #2177 |
| [`#2141`](https://github.com/HKUDS/nanobot/issues/2141) v0.1.4.post5 升级后语音转录失效 | 高 | 🔄 调查中 | 无 |
| [`#2185`](https://github.com/HKUDS/nanobot/issues/2185) 升级后 `gemini-3-flash-preview` 模型不可用 | 中高 | 🔄 调查中 | 无 |
| [`#2200`](https://github.com/HKUDS/nanobot/issues/2200) Anthropic 提供商返回 `BadRequestError` | 中 | 🔄 调查中 | 无 |
| [`#2145`](https://github.com/HKUDS/nanobot/issues/2145) 网络隔离环境下 liteLLM/tiktoken 启动超时 | 中 | 🔄 需优化离线兼容 | 无 |

> 注：语音与模型兼容性问题可能涉及依赖更新或配置变更，建议优先排查。

---

## 6. 功能请求与路线图信号

用户强烈期待以下功能，部分已有实现路径：

- **🔧 多自定义配置支持**（#1991）：允许切换多个 `custom` 模型配置，提升灵活性。
- **📊 LLM 可观测性集成**（#2189, #2154）：支持 Langfuse 等 tracing 系统，PR #2043 已尝试子代理轨迹记录，可视为技术铺垫。
- **🔌 插件系统**（#2231）：类似 Copilot CLI 的扩展机制，提升 agent 可扩展性。
- **📱 QQ 通道文件收发**（#2226）：社区开发者正基于 v0.1.4.post5 适配，有望成为官方扩展。
- **🔐 权限控制**（#2233）：限制 bot 命令暴露范围，防止信息泄露。

> 其中 **可观测性** 与 **插件系统** 最可能纳入下一 major 版本路线图。

---

## 7. 用户反馈摘要

- **满意点**：  
  - 新交互配置向导（#2018）获好评，“终于不用手动改 JSON 了”。  
  - Telegram 命令支持改进（#2229）解决群组使用痛点。

- **痛点与不满**：  
  - “升级后语音不能用了，提示 skill 未安装”（#2141）——版本兼容性差。  
  - “config.json 里明文存密钥，太不安全”（#2172）——推动安全 PR 快速合并。  
  - “agent 执行任务时不响应，又不敢乱敲 /stop”（#2131）——催生 `/status` 命令需求。  
  - “搜出来的结果有成人内容，办公环境没法用”（#2206）——需内容过滤机制。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- [`#660`](https://github.com/HKUDS/nanobot/issues/660)（35天未闭环）：**架构一致性争议**——“超轻量” vs Node.js 依赖，需官方澄清或重构。
- [`#817`](https://github.com/HKUDS/nanobot/pull/817)（29天 open）：**Thinking/Tool Use 流式配置**，功能完整但依赖链未合，影响高级用户体验。
- [`#1636`](https://github.com/HKUDS/nanobot/issues/1636)（13天未响应）：**Kilocode API 网关支持请求**，潜在第三方集成机会。
- [`#2131`](https://github.com/HKUDS/nanobot/issues/2131)（2天，但需求明确）：**/status 命令**，解决 agent 状态不可见问题，实现成本低、价值高。

> 建议对 #660 发布架构说明，并评估 #2131 的快速实现方案。

--- 

**总结**：NanoBot 正处于从“功能堆叠”向“稳定、安全、可观测”演进的关键阶段。社区驱动的问题发现与修复机制运转良好，下一步需加强版本发布节奏与长期路线图沟通。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

Zeroclaw 项目在2026年3月18日至19日期间保持高度活跃，社区贡献与核心开发并行推进。过去24小时内共处理 **37条 Issues**（新开/活跃18条，关闭19条）和 **50条 Pull Requests**（已合并/关闭22条，待合并28条），显示出高效的协作节奏。项目发布了 **8个新版本**，其中 v0.5.0 正式版及多个 beta 版本集中上线，标志着功能成熟度显著提升。核心团队聚焦于多通道支持、运行时模型切换、国际化与技能自动化等关键能力，同时积极响应用户反馈修复关键 Bug。整体项目健康度良好，处于快速迭代与功能完善阶段。

---

## 2. 版本发布

### 🚀 v0.5.0 正式版发布
**发布时间**：2026-03-18  
**主要更新内容**：
- **新增通信渠道适配器**：支持 Reddit、Bluesky 和通用 Webhook 通道（[#3847](https://github.com/zeroclaw-labs/zeroclaw/pull/3847)）
- **CLI 增强**：
  - 新增 `zeroclaw self-test` 命令（快速/完整模式），用于诊断部署环境
  - 新增 `zeroclaw status --format=exit-code`，适配 Docker 健康检查机制
  - 新增 `zeroclaw update` 命令，实现六阶段升级流水线与自动回滚机制
- **CI/CD 优化**：Docker 镜像构建改用预编译二进制文件，显著缩短构建时间

**迁移注意事项**：
- 若从 v0.4.x 升级，请确保 `config.toml` 中 `[channels]` 部分兼容新适配器格式；
- `zeroclaw update` 命令将自动处理配置迁移，但建议备份 `~/.zeroclaw/config.toml`。

> 🔗 [v0.5.0 Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.0)

### 🧪 v0.5.0-beta.365 及后续 beta 版本
- 引入 **运行时模型切换工具**（`model_switch`），允许用户在对话中动态切换 AI 模型（[#3854](https://github.com/zeroclaw-labs/zeroclaw/issues/3854)）
- 子代理超时时间可通过 `config.toml` 配置（原硬编码 120s/300s）
- 工具描述文本外部化，支持多语言翻译（i18n 架构初步落地）
- 实验性功能：**多步骤任务成功后自动生成可复用技能**（[#3825](https://github.com/zeroclaw-labs/zeroclaw/issues/3825)）

---

## 3. 项目进展

今日共 **22个 PR 被合并或关闭**，重点推进以下方向：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **核心功能** | 实现运行时模型切换、子代理超时配置、技能自动生成 | [#3909](https://github.com/zeroclaw-labs/zeroclaw/pull/3909), [#3916](https://github.com/zeroclaw-labs/zeroclaw/pull/3916) |
| **国际化** | 工具描述文本外部化，为多语言支持奠定基础 | [#3912](https://github.com/zeroclaw-labs/zeroclaw/pull/3912) |
| **稳定性修复** | 修复 SOUL.md 在非 TTY 会话未加载、cron_add 解析错误、安装脚本不生成 config.toml 等关键问题 | [#3915](https://github.com/zeroclaw-labs/zeroclaw/pull/3915), [#3905](https://github.com/zeroclaw-labs/zeroclaw/pull/3905), [#3906](https://github.com/zeroclaw-labs/zeroclaw/pull/3906) |
| **通道增强** | Telegram 支持禁用 ack_reactions；WhatsApp 新增 mention_only 模式 | [#3835](https://github.com/zeroclaw-labs/zeroclaw/pull/3835), [#3923](https://github.com/zeroclaw-labs/zeroclaw/pull/3923) |
| **测试与 CI** | 修复 claude_code 提供程序测试中的竞态条件，提升 CI 稳定性 | [#3903](https://github.com/zeroclaw-labs/zeroclaw/pull/3903) |

> ✅ 项目整体向“生产就绪”迈出关键一步，尤其在可观测性（self-test）、可维护性（update 命令）和用户体验（多通道一致性）方面显著增强。

---

## 4. 社区热点

### 🔥 #1478 [CLOSED] “除了安全，什么功能也没有”
- **评论数**：41 | **👍**：5  
- **用户诉求**：强烈抗议默认安全策略过于严格，导致即使本地部署也无法执行 `shell`、`install` 等基础工具，认为“安全到无法使用”。
- **背后信号**：反映 **安全与可用性之间的平衡问题**，用户期望更细粒度的权限控制（如白名单、沙箱模式）。
- **维护者回应**：已在 v0.5.0 中引入 `challenge_max_attempts` 等配置项，并计划后续提供“开发者模式”开关。

> 🔗 [Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)

### 💬 #2503 [OPEN] “Where is Napcat channel?”
- **评论数**：5  
- **用户诉求**：希望集成 OneBot11/Napcat 协议以连接 QQ 机器人生态。
- **现状**：尚无官方支持，但社区已有讨论。可视为 **中国本土化需求的重要信号**。

> 🔗 [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已修复 |
|--------|------|------|----------|
| **S1（阻塞）** | [#3922](https://github.com/zeroclaw-labs/zeroclaw/issues/3922) | Ollama 工具调用握手失败，导致安全提示和工具完全不可用 | ❌ 未修复（需 provider 层调试） |
| | [#3838](https://github.com/zeroclaw-labs/zeroclaw/issues/3838) | 路由级 API Key 在 Channel/Agent 模式下丢失，引发认证失败 | ❌ 未修复 |
| | [#3826](https://github.com/zeroclaw-labs/zeroclaw/issues/3826) | 守护进程模式下 MCP 工具未激活（deferred loading 失效） | ❌ 未修复 |
| **S2（降级）** | [#3802](https://github.com/zeroclaw-labs/zeroclaw/issues/3802) | Telegram 图片传输失败（llamacpp 不支持 vision） | ✅ 已识别，需 provider 能力协商机制 |
| | [#3868](https://github.com/zeroclaw-labs/zeroclaw/issues/3868) | cron one-shot 任务无限重复执行 | ✅ 已定位调度器逻辑错误，待 PR |
| **S3（轻微）** | [#3919](https://github.com/zeroclaw-labs/zeroclaw/issues/3919) | `zeroclaw config schema` 解析 `challenge_max_attempts` 失败 | ✅ 已修复（[#3921](https://github.com/zeroclaw-labs/zeroclaw/pull/3921)） |

---

## 6. 功能请求与路线图信号

| 功能请求 | 社区热度 | 已有 PR | 纳入可能性 |
|--------|--------|--------|----------|
| **阿里云百炼 Coding Plan 支持** | 中（中国用户） | [#3889](https://github.com/zeroclaw-labs/zeroclaw/pull/3889) | ✅ 高（PR 已提交，待 review） |
| **Slack 线程回复选项** | 低 | 无 | 🟡 中（Mattermost 已实现，可复用） |
| **跨通道 TOTP 门禁** | 中 | 无 | 🟡 中（安全团队关注中） |
| **Token 效率优化器** | 高（本地部署用户） | 无 | 🔴 低（架构级改动，远期规划） |
| **Napcat/OneBot 通道** | 高（中文社区） | 无 | 🟡 中（需社区贡献） |

> 📌 下一版本（v0.6.0）可能聚焦：**多语言支持落地、通道中断机制统一、Provider 能力协商协议**。

---

## 7. 用户反馈摘要

- **满意点**：
  - “`zeroclaw update` 命令太棒了！终于不用手动编译了。”（v0.5.0 用户）
  - “self-test 快速模式帮我发现了 podman 权限问题，节省一小时调试。”
- **痛点**：
  - “我完全信任自己的环境，为什么不能一键关闭所有安全限制？”（#1478）
  - “中文用户看不懂工具描述，系统提示全是英文。”（#3901）
  - “cron 任务重复执行，差点把服务器跑崩。”（#3868）
- **典型使用场景**：
  - 本地开发助手（配合 Claude Code / Ollama）
  - 多平台消息聚合机器人（Telegram + Slack + Discord）
  - 自动化运维代理（cron + shell 工具）

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | Feature | 2026-02-17 | OPEN | **跨通道 TOTP 门禁** 安全需求强烈，建议 v0.6.0 规划 |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Feature | 2026-03-02 | OPEN | **Napcat 通道** 为中国用户刚需，可发起社区协作 |
| [#3838](https://github.com/zeroclaw-labs/zeroclaw/issues/3838) | Bug | 2026-03-18 | OPEN | **路由 API Key 丢失** 影响多模型部署，高优先级 |
| [#3826](https://github.com/zeroclaw-labs/zeroclaw/issues/3826) | Bug | 2026-03-17 | OPEN | **MCP 工具未激活** 阻碍生态集成，需紧急排查 |

> ⚠️ 建议维护者优先处理 **#3838 和 #3826**，二者均属 S1 级阻塞问题，影响核心工作流。

---  
**报告生成时间**：2026-03-19  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

PicoClaw 在 2026-03-19 继续保持高活跃度，24 小时内产生 **32 条 Issues 更新**（25 新开/活跃，7 已关闭）和 **89 条 PR 更新**（50 待合并，39 已合并/关闭），社区参与度显著。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260319.e73d9d95`），主要聚焦于 Agent 架构重构、工具链增强与多语言支持。核心开发围绕 **Agent 上下文管理、TTS/ASR 集成、安全加固** 等方向推进，整体处于快速迭代与功能深化阶段。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260319.e73d9d95`
- **类型**：自动化 nightly 构建（非稳定版）
- **更新内容**：
  - 包含自 `v0.2.3` 以来 main 分支的所有最新提交，涵盖 Agent 重构、工具链优化、多语言文档更新等。
  - 主要变更来自近期合并的 PR，如工具反馈机制（#1332）、MCP 延迟加载（#1654）、Alibaba Coding Plan 支持（#1748）等。
- **⚠️ 注意事项**：
  - 此为开发预览版，可能存在未暴露的回归问题，不建议生产环境使用。
  - 用户反馈中已有部分 nightly 版本问题报告（如 #1749 `/switch model` 失效、#1746 `reasoning_channel_id` 不工作）。
- **完整变更日志**：[GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展

今日共 **39 个 PR 被合并或关闭**，关键进展包括：

| 类别 | 关键 PR | 说明 |
|------|--------|------|
| **Agent 重构** | #1356（已合并） | 修复 `spawn` 工具调用子 Agent 时错误使用父 Agent 模型配置的问题，提升多 Agent 协作一致性。 |
| **工具链增强** | #1761（待合并） | 为 `write_file` 工具添加 `overwrite` 参数，防止意外文件覆盖，增强安全性。 |
| | #1762（待合并） | 增强 `web_fetch` 工具对抗 Cloudflare 挑战的能力，提升爬虫鲁棒性。 |
| **配置与部署** | #1707（已合并） | 支持多 API Key 自动故障转移，提升服务可用性。 |
| | #1760（待合并） | 新增沙盒化 Docker Compose 配置，强化主机隔离与安全性（只读文件系统、能力降级等）。 |
| **文档国际化** | #1448（待合并） | 新增西班牙语 README 翻译。 |
| | #1759（待合并） | 新增意大利语 README 与配置文档。 |
| **通道与集成** | #800（已合并） | 飞书通道支持消息卡片与流式输出，提升交互体验。 |
| | #830（已合并） | 新增 Google Chat 通道支持。 |

> 项目整体在 **多模态交互、企业级部署、国际化** 方向迈出实质性步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（附链接）

1. **[#1218 Agent refactor: what an Agent is](https://github.com/sipeed/picoclaw/issues/1218)**（27 评论，已关闭）  
   - 社区对 Agent 人格定义文件 `SOUL.md` 的设计达成共识：采用自由格式 Markdown，强调自然语言表达而非结构化 schema。
   - 衍生出新 Issue #1755 探讨是否引入可选结构，反映用户对灵活性与规范性平衡的需求。

2. **[#1648 Adding TTS and ASR Support to PicoClaw](https://github.com/sipeed/picoclaw/issues/1648)**（10 评论，开放）  
   - 用户强烈呼吁集成语音交互能力，已有相关 PR #1642 但未接入网关。讨论聚焦架构设计原则与模块化集成路径。

3. **[#806 Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806)**（4 评论，7 👍，高优先级）  
   - 非技术用户强烈需求 Web UI 以降低使用门槛，当前 TUI 对新手不够友好。维护者已标记为 roadmap 高优先级。

4. **[#100 "I've completed processing but have no response to give."](https://github.com/sipeed/picoclaw/issues/100)**（11 评论，已关闭）  
   - 多用户报告 OpenRouter 模型返回空响应问题，确认为特定 provider 行为，非 PicoClaw 核心 bug，但暴露 provider 兼容性挑战。

---

## 5. Bug 与稳定性

### 🐞 今日报告 Bug（按严重性排序）

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| **高** | [#1749 /switch model to is broken](https://github.com/sipeed/picoclaw/issues/1749) | nightly 版本中模型切换命令失效，影响核心交互功能。 | ❌ 无 |
| **高** | [#1746 reasoning_channel_id not working with OpenAI-compatible provider](https://github.com/sipeed/picoclaw/issues/1746) | 推理内容无法正确转发至指定 Telegram 频道，尽管 PR #604 声称已支持。 | ❌ 无 |
| **中** | [#1757 channel error on hourly scheduled task](https://github.com/sipeed/picoclaw/issues/1757) | 定时任务执行后通道报错，用户感知无响应。 | ✅ #1766（待合并） |
| **中** | [#1734 launcher crash with no output when log file fails to open](https://github.com/sipeed/picoclaw/issues/1734) | 日志文件打开失败导致静默崩溃，用户体验差。 | ❌ 无 |
| **中** | [#1763 aarch64 .deb not install](https://github.com/sipeed/picoclaw/issues/1763) | ARM64 架构 Debian 包依赖冲突，影响树莓派等设备安装。 | ❌ 无 |
| **低** | [#1767 飞书机器人频繁不回复消息](https://github.com/sipeed/picoclaw/issues/1767) | 疑似网络断开，缺乏自动重连机制。 | ❌ 无 |

> ⚠️ 多个 nightly 版本回归问题需紧急关注，建议加强 nightly 测试流程。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（结合 PR 判断）

| 功能 | Issue | 相关 PR | 纳入可能性 |
|------|-------|--------|------------|
| **TTS/ASR 语音交互** | #1648 | #1642（未合并） | ⭐⭐⭐ 高（已有设计稿，社区呼声强） |
| **Web UI 支持** | #806 | 无 | ⭐⭐⭐ 高（标记为 roadmap 高优先级） |
| **OpenAI API 格式通道** | #1738 | 无 | ⭐⭐ 中（便于嵌入现有系统，技术可行） |
| **OTel GenAI 可观测性** | #1731 | 无 | ⭐⭐ 中（企业级需求，但依赖生态成熟度） |
| **Agent 自我更新 SOUL.md/USER.md** | #1756 | 无 | ⭐⭐ 中（符合 Agent 自治趋势） |
| **Exec 工具 PTY + 后台支持** | #1733 | 无 | ⭐⭐ 中（解决长任务阻塞问题） |

> 下一版本（v0.3.0）有望优先集成 **TTS/ASR** 与 **Web UI 原型**。

---

## 7. 用户反馈摘要

### 💬 真实用户声音提炼

- **痛点**：
  - “飞书机器人经常不回复，后台显示网络断开，有没有自动重连？”（#1767）→ **通道稳定性不足**
  - “定时任务执行了但用户收不到响应”（#1757）→ **异步任务反馈机制缺失**
  - “修改 AGENT.md 后是否需要重启网关？文档没说”（#1728）→ **热重载机制文档不清晰**
  - “GLM Coding Plan 消耗余额或报错”（#1652）→ **第三方 provider 兼容性差**

- **满意点**：
  - 多语言文档（西语、意大利语）获社区积极认可，提升可访问性。
  - `tool_feedback` 功能（#1332）被赞“极大提升工具执行透明度”。
  - 沙盒化 Docker 配置（#1760）受企业用户欢迎，符合安全合规需求。

- **使用场景**：
  - 个人助理（定时提醒、天气查询）
  - 企业自动化（飞书/Google Chat 集成）
  - 开发辅助（代码生成、Web 抓取）

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #547 | Improve AGENT.md: Add task-solving patterns | 2026-02-20 | OPEN | 超 25 天未响应，涉及核心 Agent 行为指导 |
| Issue | #1042 | exec工具 guardCommand 方法问题 | 2026-03-04 | OPEN | 超 14 天，安全机制误判影响正常使用 |
| Issue | #1209 | Timeout error with context deadline exceeded | 2026-03-07 | OPEN | 超 10 天，基础功能稳定性问题 |
| PR | #500 | Use Line Bot SDK | 2026-02-19 | OPEN | 超 25 天未合并，技术债清理类重构 |
| PR | #1401 | Preserve explicit session keys | 2026-03-12 | OPEN | 超 6 天，修复 session 管理逻辑 |

> 🔔 **建议维护者优先处理 #547、#1042、#500**，三者分别涉及文档、安全、技术债，影响面广。

---

**报告生成时间**：2026-03-19  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目处于高速演进期，建议加强 nightly 版本质量门禁与用户反馈闭环机制。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出极高的开发活跃度，共产生 **25条 Issues 更新** 和 **50条 PR 更新**，其中 **40个 PR 待合并**，反映出社区贡献热情高涨但核心维护压力显著。尽管无新版本发布，项目在安全加固、多模型支持、容器化部署和用户体验方面持续推进。值得注意的是，多个高优先级安全类 Issue 被提出，表明项目已进入生产环境深度使用阶段，对稳定性和合规性要求提升。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为持续集成状态，未触发正式版本标签。

---

## 3. 项目进展

今日有 **10个 PR 被合并或关闭**，重点进展包括：

- **安全修复落地**：[#1191](https://github.com/qwibitai/nanoclaw/pull/1191) 合并，修复了容器错误日志中泄露用户完整提示内容的问题（对应 Issue #1150），显著降低敏感信息暴露风险。
- **架构优化推进**：[#1252](https://github.com/qwibitai/nanoclaw/pull/1252)（已关闭）虽未合并，但提出的“三根路径模型”（APP_DIR / CONFIG_ROOT / DATA_DIR）为 NanoClaw 自身容器化运行铺平道路，相关讨论将影响后续设计。
- **技能生态扩展**：新增 `/add-local-voice`（[#1250](https://github.com/qwibitai/nanoclaw/pull/1250)）和 `/add-openmail`（[#1251](https://github.com/qwibitai/nanoclaw/pull/1251)）两个技能 PR，分别支持本地语音转录与 OpenMail 邮件通道，体现项目向多模态、去中心化通信演进。

整体来看，项目在保持轻量核心的同时，正通过模块化技能机制快速扩展能力边界。

---

## 4. 社区热点

以下 Issues/PRs 引发高度关注：

- **[#1149] 安全漏洞披露请求**（[链接](https://github.com/qwibitai/nanoclaw/issues/1149)）：用户 @mcleo-d 请求私有渠道报告关键安全问题，凸显项目面临真实世界安全审计压力，维护团队需尽快建立负责任的披露流程。
- **[#1224] 重新审视 TOS 合规性：用 Claude Code CLI 替代 Agent SDK**（[链接](https://github.com/qwibitai/nanoclaw/issues/1224)）：高优先级增强请求，指出当前依赖 Anthropic Agent SDK 存在服务条款风险，呼吁转向更合规的 CLI 模式，可能影响未来架构方向。
- **[#1163] 支持 OpenCode 等多 AI 提供商**（[链接](https://github.com/qwibitai/nanoclaw/issues/1163)）：获 2 👍，反映企业用户希望摆脱单一供应商锁定，推动项目向多模型架构演进。

这些讨论共同指向 NanoClaw 正从“Claude 专属工具”向“通用 AI 代理框架”转型的关键节点。

---

## 5. Bug 与稳定性

按严重程度排序的高危问题：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| **Critical** | [#1149] 安全漏洞披露 | 未公开细节，但标记为 Critical | ❌ 无 |
| **High** | [#1236] agent-runner 源码更新不同步至已有群组 | 更新仅对新群组生效，导致功能不一致 | ❌ 无 |
| **High** | [#1216] 过期 Claude Code session ID 导致永久恢复失败 | 无自动恢复机制，影响长期会话 | ❌ 无 |
| **High** | [#1135] update-nanoclaw 自动合并静默丢弃自定义代码 | Git 合并策略缺陷，威胁 fork 用户 | ❌ 无 |
| **Medium** | [#1242] 流水线阶段超时未强制执行 | 3 个任务卡死，需看门狗机制 | ❌ 无 |
| **Medium** | [#1141] 数据库中 per-group trigger_pattern 被忽略 | 全局配置覆盖群组设置，功能失效 | ❌ 无 |

> 注：[#1150] 已由 [#1191] 修复并合并。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求：

- **多模型支持**：[#1255] 添加 MiniMax OAuth 支持，[#1163] 呼吁 OpenCode 集成 → 预示将构建抽象层以支持多 LLM 后端。
- **会话管理增强**：[#1211] 请求 `/new` 命令重置会话上下文 → 解决 token 浪费问题，可能纳入下一版 UX 改进。
- **部署灵活性**：[#1253] 修复 WSL 下 credential proxy 绑定问题，[#1252] 容器化就绪设计 → 显示对复杂环境（如 K8s、WSL）的适配优先级提升。
- **监控与可观测性**：[#1111] API 使用追踪、[#1187] 仪表盘技能 → 项目正加强运维可见性，满足企业部署需求。

---

## 7. 用户反馈摘要

从 Issues 评论提炼的真实声音：

- **痛点**：
  - “Linux 支持文档矛盾”（#1075）：官网与 README 不一致，造成部署困惑。
  - “无法在无 Docker 环境运行”（#1225）：Windows/Linux 用户受限于容器依赖。
  - “Sealos K8s 环境部署困难”（#1184）：受限网络策略下集成挑战大。
- **满意点**：
  - “极简设计是最大优势”（#1184）：用户赞赏其轻量替代方案定位。
  - “用现有代码 agent 构建‘Claw’的思路很聪明”（#1184）：认可架构哲学。
- **改进期待**：
  - 希望支持非容器化部署、更细粒度权限控制、会话重置功能。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

- **[#822] 修复 register_group MCP 工具参数传递**（2026-03-08 创建，11天未处理）：影响容器配置动态调整能力。
- **[#418] setup 挂载步骤格式错误导致静默失败**（2026-02-23 创建，24天未处理）：基础功能缺陷，阻碍高级用户自定义。
- **[#932] Gen tech agency main**（2026-03-10 创建，9天未处理，状态 Blocked）：大型功能 PR 阻塞，需明确是否继续推进。
- **[#1043] 升级 memory 至 memory-lancedb-pro**（2026-03-13 创建，6天未处理）：内存检索能力重大升级，技术价值高但 review 滞后。

> 建议维护团队优先处理安全类（#1149）、数据一致性类（#1236, #1141）及长期阻塞 PR，以保障项目健康度与社区信任。

---  
*数据截止：2026-03-19 00:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

IronClaw 项目在 2026-03-19 继续保持高强度开发节奏，**过去24小时内共处理 100 条 Issues 与 PR 更新**（50 条 Issues、50 条 PR），其中 **31 个 Issues 被关闭，21 个 PR 被合并/关闭**，显示出高效的 CI 驱动修复与代码审查机制。项目整体活跃度处于高位，主要由 `ironclaw-ci[bot]` 自动化检测驱动大量安全与设计缺陷修复，同时核心团队持续推进 OAuth、MCP、Routine 引擎等关键模块重构。尽管无新版本发布，但 staging 分支已通过多轮自动 promotion（#1387、#1390），为下一版本打下坚实基础。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中在 staging 分支的稳定性修复与功能集成，预计下一版本将包含 OAuth 通用化、Routine 自恢复机制、SSRF 防护等重大改进。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显著提升了系统安全性、可维护性与运行时可靠性：

- **#1380**（已合并）：针对 PR #1359 引入的多个高危问题实施靶向修复，包括缓存 `discovery_schema()` 避免 N+1 性能问题（#1361）、消除冗余 Vec 分配（#1369）、修复 JobContext 类型安全绕过（#1366）等，大幅优化 Routine 引擎执行效率。
- **#1374**（已合并）：修复 `full_job` 类型 routine 的生命周期管理缺陷（#1317），确保其运行状态持续至关联 worker 任务完成，防止并发控制失效。
- **#1385**（已合并）：移除 `debug_assert!` 在合法错误路径上的误触发，避免 debug 构建下非预期 panic，提升错误处理健壮性。
- **#1221**（开放中）：实现 SSRF 防护机制，对用户可配置的 embedding base URL（如 `OLLAMA_BASE_URL`）进行严格白名单校验，响应 #1103 高危漏洞报告。
- **#1375**（开放中）：将 hosted OAuth 与 MCP auth 流程抽象为通用框架，支持 WASM 工具与 MCP 服务器统一认证，减少代码重复并增强扩展性。

> 项目整体在 **安全加固、架构解耦、运行时稳定性** 三个维度取得实质性推进。

---

## 4. 社区热点

### 🔥 高关注度 Issues

- **#1280**（[链接](https://github.com/nearai/ironclaw/issues/1280)）：OAuth 回调测试在 CI 中因 `OAUTH_CALLBACK_HOST` 竞争条件导致间歇性失败，影响 staging promotion 流程。开发者 @henrypark133 正主导排查，反映 CI 环境配置一致性问题。
- **#1205**（[链接](https://github.com/nearai/ironclaw/issues/1205)）：Slack 工具安装失败，因下载 URL 路径错误（`channels/` vs `tools/` 目录混淆），暴露发布包结构不一致问题，用户 @kristiandupont 提供明确错误日志。
- **#1384**（[链接](https://github.com/nearai/ironclaw/issues/1384)）：Telegram 频道配置时 `ironclaw tool auth` 查找 capabilities 文件路径错误，与实际安装位置不符，阻碍用户完成授权流程。

> 社区核心诉求：**安装/配置流程的端到端可用性** 与 **CI 环境稳定性** 是当前最大痛点。

---

## 5. Bug 与稳定性

按严重程度排序，今日发现/修复的关键问题：

| 严重等级 | Issue | 描述 | 状态 | 关联 PR |
|--------|------|------|------|--------|
| **CRITICAL** | #1281 | Telegram 自动验证逻辑反转，导致验证状态误判 | ✅ 已关闭 | #1279 |
| **CRITICAL** | #1361 | 每次 LLM 调用均重新生成 schema，引发 N+1 性能灾难 | ✅ 已关闭 | #1380 |
| **HIGH** | #1288 | Retry-After 解析逻辑在 3 个模块中重复，违反 DRY | 🔄 开放中 | — |
| **HIGH** | #1362 | `routine_create_schema()` 中无界 JSON 突变，可能导致内存耗尽 | ✅ 已关闭 | #1380 |
| **HIGH** | #1103 | 用户可控 embedding base URL 未校验，存在 SSRF 风险 | 🔄 开放中 | #1221 |
| **MEDIUM** | #1371 | 每次 `tool_info` 调用均重建 discovery schema | ✅ 已关闭 | #1380 |

> 所有 HIGH/CRITICAL 级问题均已定位并大部分修复，体现项目对安全与设计质量的严格把控。

---

## 6. 功能请求与路线图信号

用户与开发者提出的新功能中，以下方向具备高采纳可能性：

- **Routine 自恢复机制**（#1320）：添加对 transient 执行失败的有限重试能力，避免瞬时错误直接暴露给用户。已有详细设计讨论，预计纳入下一版本。
- **MCP 服务器按 Job 过滤**（#1243）：支持 `mcp_servers` 参数限制 worker 容器内挂载的 MCP 服务，提升安全性与资源隔离。
- **自定义 LLM 提供商 Web UI 配置**（#1340）：允许通过图形界面定义非标准 LLM 后端，降低用户使用门槛，已进入开发阶段。
- **Webhook 事件推送替代 SSE 拉取**（#1254）：改用 push 模型接收 relay 事件，简化连接管理并提升实时性。

> 路线图清晰向 **企业级可靠性**（自恢复、隔离）、**用户体验**（Web UI 配置）、**架构现代化**（事件推送）演进。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “安装 telegram 后 `ironclaw tool auth` 报错找不到文件”（#1384）→ **工具链路径不一致** 导致配置中断。
  - “Slack 工具下载 404，是不是文件名错了？”（#1205）→ **发布包命名规范混乱** 影响基础功能。
  - “Routine 经常因为一次 LLM 超时就直接失败，没有重试”（#1320 讨论）→ **缺乏容错机制** 降低可用性。

- **满意点**：
  - “Codecov 覆盖率门禁终于要上了，Mars-rover 级可靠性就靠这个”（#1228）→ 对质量门禁建设高度认可。
  - “自定义 LLM 提供商功能太及时了，终于不用改 `.env` 了”（#1340 评论）→ Web UI 配置显著提升易用性。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#815**（[链接](https://github.com/nearai/ironclaw/issues/815)）：用户元数据可绕过 token 预算限制，**HIGH 风险安全漏洞**，自 2026-03-10 提出后仅 2 条评论，无修复进展。
- **#1103**（[链接](https://github.com/nearai/ironclaw/issues/1103)）：SSRF 风险虽已有 PR #1221，但尚未合并，**需加速安全补丁落地**。
- **#927**（[链接](https://github.com/nearai/ironclaw/pull/927)）：Chat onboarding 与 routine advisor 大型功能 PR，自 2026-03-11 开放，涉及多模块改动，**需分配资源完成 review**。

> 建议：对 #815 启动紧急安全评估，推动 #1221 合并以闭环 SSRF 风险，并安排专项会议推进 #927 审查。

--- 

**报告生成时间：2026-03-19 UTC**  
**数据来源：GitHub IronClaw 仓库 Issues & PRs 活动日志**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-19）

---

## 1. 今日速览

LobsterAI 在过去24小时内保持较高活跃度，共产生 **13条 Issues 更新**（全部为新开或持续活跃，无关闭）和 **11条 PR 更新**（9条已合并/关闭，2条待合并）。社区讨论聚焦于版本兼容性、上下文管理、第三方集成及潜在版权争议。开发团队响应迅速，多个关键 Bug 修复已合并，项目整体处于积极迭代状态，但用户对新版本稳定性和配置迁移问题反馈集中，需重点关注。

---

## 2. 版本发布

**无新版本发布**。  
当前最新稳定版本仍为 v0.2.4，用户反馈中提及的“2026.3.16/3.17 版本”疑似为内部构建或未正式发布的测试版本，建议用户关注官方 Release 页面获取正式更新。

---

## 3. 项目进展

今日共 **9个 PR 被合并或关闭**，主要集中在架构优化、Bug 修复与文档完善：

- **#473**（已合并）：将 NIM（网易云信）网关从原生 SDK 迁移至 OpenClaw 插件架构，统一 IM 通道实现方式，提升可维护性。  
  🔗 [PR #473](https://github.com/netease-youdao/LobsterAI/pull/473)

- **#477**（已合并）：修复定时任务迁移时的时区偏移问题，避免 UTC+8 用户任务时间错乱；同时跳过已过期的单次任务，防止 OpenClaw 网关拒绝执行。  
  🔗 [PR #477](https://github.com/netease-youdao/LobsterAI/pull/477)

- **#484**（已合并）：为 OpenClaw Gateway 添加启动失败后的自动重启机制，增强服务鲁棒性。  
  🔗 [PR #484](https://github.com/netease-youdao/LobsterAI/pull/484)

- **#487**（已合并）：修复在 cowork 会话期间修改 IM 配置导致 UI 卡死在 streaming 状态的严重 Bug，完善了错误事件传递逻辑。  
  🔗 [PR #487](https://github.com/netease-youdao/LobsterAI/pull/487)

- **#486**（已合并）：优化 IM 配置变更逻辑，仅在用户点击“保存”时才同步至 OpenClaw 并重启网关，避免误操作引发中断。  
  🔗 [PR #486](https://github.com/netease-youdao/LobsterAI/pull/486)

- **#483**（已合并）：更新 AGENTS.md 文档，补充 OpenClaw 开发命令、环境变量、运行时构建说明及架构图，提升开发者体验。  
  🔗 [PR #483](https://github.com/netease-youdao/LobsterAI/pull/483)

- **#471**（已合并）：采用 OpenClaw 原生 Skills 加载机制替代内嵌方式，推动技能管理标准化。  
  🔗 [PR #471](https://github.com/netease-youdao/LobsterAI/pull/471)

> ✅ 整体进展显著：架构一致性提升、关键稳定性问题修复、开发者文档完善，为后续功能扩展打下基础。

---

## 4. 社区热点

### 🔥 #435 “这是套壳的嘛？界面高度相似”  
**评论数：5 | 👍：0**  
用户质疑多款国产“Claw”类工具（如 Wind Claw、Zeelin Claw）涉嫌直接套壳 LobsterAI 界面且未保留版权声明，呼吁项目方采取法律行动。  
👉 反映开源项目面临**知识产权滥用风险**，社区期待官方明确立场或技术防伪机制。  
🔗 [Issue #435](https://github.com/netease-youdao/LobsterAI/issues/435)

### 💬 #485 “显示上下文占用状态、上下文压缩和思考过程”  
**评论数：1 | 👍：0**  
资深用户提出三项核心体验优化：  
1. 实时显示上下文 token 占用比例（如 200k 中已用 XXk）  
2. 支持手动触发上下文压缩  
3. 在执行压缩时提供明确 UI 反馈（避免误判为卡死）  
👉 直指当前 AI 助手**透明度不足**痛点，是提升专业用户信任度的关键需求。  
🔗 [Issue #485](https://github.com/netease-youdao/LobsterAI/issues/485)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #490 | OpenClaw 在执行任务时反复出错重启，导致任务中断 | ❌ 无（但 #484 提供网关重启机制可缓解） |
| ⚠️ 高 | #474 | 升级至 2026.3.16 版本后，定时任务丢失、沙箱/本地模式选项消失 | ✅ 部分修复（#477 解决时区问题，但沙箱选项缺失未明确处理） |
| ⚠️ 中 | #481 | Ubuntu 20.04 运行 AppImage 报错 `/tmp` 权限不足 | ❌ 无（需检查打包脚本或临时目录配置） |
| ⚠️ 中 | #124 | 本地模式报 401 错误，疑似与本地 Claude Code 冲突 | ❌ 长期未解决（需排查配置隔离机制） |
| ⚠️ 低 | #480 | 每次对话仍携带完整系统指令，可能影响效率 | ❌ 无 |

> 💡 建议优先处理 #490 和 #474，二者直接影响核心功能可用性。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 是否已有相关 PR | 纳入可能性 |
|--------|------|----------------|----------|
| Telegram Bot 支持 | #478 | ❌ 无 | ⭐⭐⭐（已有 Discord/QQ/WeCom 实现，扩展成本低） |
| 上下文可视化与手动压缩 | #485 | ❌ 无 | ⭐⭐⭐⭐（高频专业用户需求，契合 AI 助手演进方向） |
| 自定义模型兼容性（openai-responses API） | #492 | ❌ 无 | ⭐⭐（需验证协议兼容性） |
| 模型自我认知隔离（避免调用本地 OpenClaw） | #491 | ❌ 无 | ⭐⭐⭐（涉及配置命名空间隔离） |

> 📌 **高优先级信号**：上下文管理优化（#485）极有可能成为下一版本重点功能。

---

## 7. 用户反馈摘要

- **满意点**：  
  “现在软件好用多了”（#485 用户），认可近期稳定性改进。

- **主要痛点**：  
  - 版本更新频繁且**配置不兼容**（#382：“更新的时候所有设置都要重新填写一遍”）  
  - **任务中断无恢复机制**（#490）  
  - **UI 反馈缺失**导致误判系统卡死（#485）  
  - **Linux 兼容性差**（#481、#476 均涉及 Ubuntu 环境问题）

- **使用场景**：  
  用户多用于**定时自动化任务**（#474）、**长上下文协作**（#485）、**多模型切换测试**（#124、#492），表明项目已深入生产/研发场景。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒 |
|--------|--------|------|------|
| #124 本地模式 401 错误 | 2026-02-26 | OPEN | 超过3周未响应，影响本地部署用户体验 |
| #382 更新重置配置 | 2026-03-11 | OPEN | 持续被提及，反映版本管理策略缺陷 |
| #388 MiniMax M2.7 升级 | 2026-03-12 | OPEN | 模型更新 PR 长期未合，可能阻塞新功能 |

> 🛎️ **维护者注意**：建议本周内回应 #124 和 #382，并评估 #388 合并风险。

---

**报告生成时间**：2026-03-19  
**数据来源**：LobsterAI GitHub Repository（netease-youdao/LobsterAI）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyAGI 项目动态日报（2026-03-19）

---

## 1. 今日速览

TinyAGI 项目在2026年3月18日表现出极高的开发活跃度，**过去24小时内无新 Issue 提交，但完成了16个 Pull Request 的更新**，其中13个已合并或关闭，3个仍处于待合并状态。项目整体处于**快速迭代与架构重构阶段**，核心工作聚焦于品牌迁移（TinyClaw → TinyAGI）、安装体验优化和内存系统增强。无用户反馈类 Issue，表明当前版本稳定性良好，社区互动以开发者主导的功能推进为主。

---

## 2. 版本发布

### 🔖 v0.0.15 正式发布

**发布时间**：2026-03-18  
**发布链接**：[v0.0.15 Release](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.15)

#### 主要更新内容：
- ✅ **一键安装脚本成为默认方式**：用户现可通过 `curl -fsSL .../install.sh | bash` 直接完成安装，极大降低使用门槛。
- ✅ **自动数据迁移支持**：从旧版 `~/.tinyclaw` 目录自动迁移至 `~/.tinyagi`，保留用户历史数据，确保平滑过渡。
- ✅ **安装流程重构**：移除冗余脚本（如 `migrate.sh`），修复原生模块（`better-sqlite3`）跨平台兼容性问题。

#### 破坏性变更与迁移注意事项：
> ⚠️ **项目名称已从 TinyClaw 全面迁移至 TinyAGI**，包括：
> - CLI 命令由 `tinyclaw` 变更为 `tinyagi`
> - 配置文件路径由 `~/.tinyclaw` 迁移至 `~/.tinyagi`
> - 数据库文件由 `tinyclaw.db` 重命名为 `tinyagi.db`
>
> 用户升级时**无需手动操作**，启动时会自动检测并迁移旧数据（见 PR #236）。

---

## 3. 项目进展

过去24小时内，**13个 PR 被合并/关闭**，标志着多个关键模块的重大进展：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **品牌迁移完成** | 全代码库完成 TinyClaw → TinyAGI 重命名，涵盖包名、环境变量、CLI 入口等 | [#191](https://github.com/TinyAGI/tinyagi/pull/191) |
| **CLI 架构升级** | `tinyagi.mjs` 成为主入口，替代原有 shell 脚本调度逻辑，支持 `npx tinyagi install` | [#234](https://github.com/TinyAGI/tinyagi/pull/234) |
| **安装体验优化** | 实现 curl 管道安装、自动重建原生模块、修复路径引用 | [#237](https://github.com/TinyAGI/tinyagi/pull/237), [#240](https://github.com/TinyAGI/tinyagi/pull/240) |
| **实时执行流** | 支持 agent 执行过程实时事件流（SSE），提升可观测性 | [#196](https://github.com/TinyAGI/tinyagi/pull/196) |
| **内存系统增强** | 引入层级化持久记忆机制，支持 Markdown + YAML 元数据存储 | [#209](https://github.com/TinyAGI/tinyagi/pull/209) |
| **通信架构简化** | 移除对话状态跟踪，采用扁平化直接消息通信，降低复杂度 | [#213](https://github.com/TinyAGI/tinyagi/pull/213) |

> 📌 整体项目向前迈出关键一步：**从实验性原型向可部署、易维护的生产级个人 AI 助手演进**。

---

## 4. 社区热点

尽管无新 Issue 提交，**PR 讨论热度集中在两个开放提案上**：

### 🔥 #212: Redesign the live office workspace  
- **作者**: @mczabca-boop  
- **链接**: [PR #212](https://github.com/TinyAGI/tinyagi/pull/212)  
- **分析**：该 PR 提出对 `/office` 工作空间进行 UI/UX 重构，反映团队对**多代理协作界面可视化**的重视。虽无评论，但其持续更新表明设计方向仍在迭代，可能为下一阶段重点功能。

### 🔥 #220: Remove chatroom fan-out to prevent agent feedback loops  
- **作者**: @jcenters  
- **链接**: [PR #220](https://github.com/TinyAGI/tinyagi/pull/220)  
- **分析**：揭示了一个关键架构缺陷——团队消息广播导致指数级 agent 调用循环。此问题直接影响系统稳定性与成本，**社区虽未评论，但技术紧迫性高**，预计将优先合并。

---

## 5. Bug 与稳定性

| 问题描述 | 严重程度 | 状态 | 关联 PR |
|--------|--------|------|--------|
| 聊天室消息逆序显示（ newest-on-top 而非 chronological ） | 中 | ✅ 已修复 | [#241](https://github.com/TinyAGI/tinyagi/pull/241) |
| 安装后 `better-sqlite3` 原生模块不兼容 macOS（Linux 构建包） | 高 | ✅ 已修复 | [#240](https://github.com/TinyAGI/tinyagi/pull/240) |
| 多代理团队消息引发反馈循环，导致资源耗尽 | 高 | 🔄 待合并 | [#220](https://github.com/TinyAGI/tinyagi/pull/220) |

> 💡 当前无未修复的高危 Bug，系统稳定性良好。

---

## 6. 功能请求与路线图信号

从近期 PR 可识别以下**潜在路线图方向**：

| 功能方向 | 信号强度 | 依据 |
|--------|--------|------|
| **Web 配置界面** | 强 | PR #214 已实现 `/connect` 页面与自定义 API URL 配置 |
| **周期性记忆维护** | 中 | PR #233 提议通过心跳机制触发记忆整理，体现长期记忆管理需求 |
| **多代理协作优化** | 强 | PR #220 暴露的反馈循环问题 + #212 办公空间 redesign，指向协作体验为核心目标 |
| **安装与部署简化** | 已完成 | v0.0.15 已将 curl 安装设为默认，降低用户入门门槛 |

> 📌 预计下一版本将重点解决**多代理通信效率**与**记忆系统自动化维护**问题。

---

## 7. 用户反馈摘要

> 📭 **过去24小时无新 Issue 提交，无公开用户评论或反馈**。

结合近期变更推测：
- ✅ **满意度高**：一键安装、自动迁移等改进显著降低使用门槛，减少用户配置负担。
- ⚠️ **潜在痛点**：部分用户可能仍在使用旧版 TinyClaw，需依赖自动迁移机制保障体验连续性（已由 PR #236 覆盖）。
- 🔍 **使用场景集中**：开发者与早期采用者为主，典型场景为本地部署多代理协作系统。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|------|--------|------|------|
| PR | #212 | feat(office): redesign the live office workspace | 2026-03-13 | 🔄 Open | 需 UI/UX 设计评审，建议邀请社区参与原型测试 |
| PR | #220 | fix(teams): remove chatroom fan-out to prevent agent feedback loops | 2026-03-16 | 🔄 Open | **高优先级**，影响系统稳定性，建议尽快合并 |
| PR | #233 | feat(heartbeat): trigger periodic memory maintenance | 2026-03-18 | 🔄 Open | 功能有价值，但需评估对性能影响 |

> 🛎️ **维护者提醒**：重点关注 #220 的合并，避免多代理场景下出现不可控资源消耗。

---

**报告生成时间**：2026-03-19  
**数据来源**：[TinyAGI GitHub Repository](https://github.com/TinyAGI/tinyagi)  
**分析师备注**：项目处于高速重构期，建议加强自动化测试覆盖，确保架构变更不影响核心功能稳定性。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**  
📅 日期：2026-03-19  
🔗 项目主页：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

### 1. 今日速览  
过去24小时内，Moltis 社区保持低活跃但聚焦技术问题的状态：共新增/更新 2 个 Issue 和 1 个 PR，无新版本发布。开发者主要围绕工具链稳定性展开修复，社区反馈集中在网络代理与第三方 AI 集成兼容性问题上。整体项目处于维护优化阶段，未出现重大功能推进或紧急故障。

---

### 2. 版本发布  
❌ 无新版本发布。

---

### 3. 项目进展  
✅ **重要修复推进中**：  
PR [#450](https://github.com/moltis-org/moltis/pull/450)（作者：@koatora20）针对 `web_fetch` 工具在处理非 UTF-8 编码页面（如 GBK、Big5）时引发的 panic 问题提出修复。该 PR 直接响应 Issue #420，通过重构字符串切片逻辑避免字节索引越界，显著提升工具鲁棒性。目前 PR 处于待合并状态，若通过 review 将有效减少边缘场景下的运行时崩溃。

> 🔧 影响范围：所有依赖 `web_fetch` 进行网页内容抓取的用户场景，尤其在中文等非拉丁语系环境中。

---

### 4. 社区热点  
🔥 **高关注度 Issue**：  
[#261](https://github.com/moltis-org/moltis/issues/261) “GitHub Copilot provider errors” 在过去24小时内获得 5 条评论和 2 个点赞，成为当日最活跃讨论。用户 @tjsousa 报告在使用 GitHub Copilot 作为 AI 提供者时出现集成错误，疑似认证或 API 协议不兼容。社区成员正尝试复现并提供日志，反映出用户对主流 AI 服务无缝接入的强烈需求。

> 💬 背后诉求：提升对商业 AI 平台（如 Copilot）的兼容性与错误提示清晰度，降低开发者接入门槛。

---

### 5. Bug 与稳定性  
⚠️ **待修复关键问题**（按严重性排序）：

1. **[#407](https://github.com/moltis-org/moltis/issues/407)**：网络过滤代理启动后立即失败，导致 `web_search` 功能完全不可用（@AndrewPix 报告，更新于昨日）。  
   → ❌ 尚无对应 fix PR，需优先排查代理初始化逻辑或依赖配置。

2. **[#261](https://github.com/moltis-org/moltis/issues/261)**：GitHub Copilot 提供者报错，影响特定用户工作流。  
   → ❌ 尚无修复方案，需进一步定位是 SDK 版本、OAuth 流程还是协议变更所致。

3. **已由 PR 覆盖**：`web_fetch` 非 UTF-8 页面 panic（#420）→ ✅ 对应 PR [#450](https://github.com/moltis-org/moltis/pull/450) 已提交，待合并。

---

### 6. 功能请求与路线图信号  
📌 当前 Issue 中未明确标注新功能请求，但从讨论可提取潜在方向：  
- 用户对 **多 AI 提供者稳定性**（如 Copilot、本地模型、云 API）的关注上升，暗示未来需加强 provider 抽象层测试与错误隔离机制。  
- `web_fetch` 和 `web_search` 的健壮性改进（如编码自动检测、代理容错）可能成为下一版本重点优化领域，已有 PR 显示团队正主动解决此类问题。

---

### 7. 用户反馈摘要  
🗣️ 从 Issue 评论提炼关键声音：  
- **痛点**：非标准编码网页抓取崩溃（“legacy sites still use GBK…”）、代理配置隐式失败无明确报错、Copilot 集成“突然不能用”。  
- **使用场景**：用户依赖 Moltis 进行自动化信息检索（如爬取中文政府网站）、AI 辅助编程工作流集成。  
- **满意度**：对问题响应速度表示认可（如 #450 快速响应 #420），但对缺乏详细错误日志和文档指引提出改进建议。

---

### 8. 待处理积压  
⏳ **需维护者关注的长周期 Issue**：  
- [#407](https://github.com/moltis-org/moltis/issues/407)（创建于 2026-03-11，已逾 8 天）：网络代理启动失败问题尚未分配负责人，且影响核心功能 `web_search`，建议优先排查。  
- [#261](https://github.com/moltis-org/moltis/issues/261)（创建于 2026-02-28，近 20 天）：GitHub Copilot 集成问题持续讨论但未闭环，可能涉及上游 API 变更，需官方介入验证。

> 🛎️ 建议：为上述 Issue 分配标签（如 `needs-investigation`）并邀请相关模块维护者参与。

---  
📊 **项目健康度评估**：整体稳定，技术债可控，社区反馈通道畅通。建议加速关键 Bug 修复合并节奏，并增强边缘场景测试覆盖。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

CoPaw 项目在2026年3月18日至19日期间保持高度活跃，24小时内处理了50条 Issues 和50条 Pull Requests，社区贡献者积极参与功能开发与问题修复。项目发布新版本 v0.1.0-beta.3，重点优化了控制台多语言支持与文档导航体验。核心功能如本地模型调用、MCP协议兼容性、记忆系统稳定性等持续收到用户反馈并快速响应。整体项目健康度良好，开发节奏紧凑，社区协作氛围积极。

---

## 2. 版本发布

### 🔖 v0.1.0-beta.3 正式发布

**发布时间**：2026-03-18  
**主要更新内容**：
- ✅ **控制台多语言支持优化**：提升国际化体验，支持更灵活的语言切换（[#1686](https://github.com/agentscope-ai/CoPaw/pull/1686)）
- ✅ **文档导航锚点优化**：改善长文档浏览体验，增强用户定位效率（[#1688](https://github.com/agentscope-ai/CoPaw/pull/1688)）
- 🔧 版本号升级至 `0.1.0b3`，为后续稳定版发布做准备

> ⚠️ **无破坏性变更**，建议所有用户升级以获得更佳体验。

[查看完整 Release 说明](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.3)

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR（精选）

| PR | 类型 | 说明 |
|----|------|------|
| [#1784](https://github.com/agentscope-ai/CoPaw/pull/1784) | 🐛 Bug Fix | 修复 `create_local_chat_model` 导入失败问题，解决本地模型无法加载的关键缺陷 |
| [#1788](https://github.com/agentscope-ai/CoPaw/pull/1788) | 🐛 Bug Fix | 修复聊天页面模型选择下拉菜单显示异常问题 |
| [#1772](https://github.com/agentscope-ai/CoPaw/pull/1772) | ✨ Feature | 实现多模态消息支持（图片与文件上传），覆盖多个历史 Issue 需求 |
| [#1729](https://github.com/agentscope-ai/CoPaw/pull/1729) | ⬆️ Enhancement | 升级 MiniMax 默认模型至 M2.7，提升推理性能 |
| [#1654](https://github.com/agentscope-ai/CoPaw/pull/1654) | ✨ Feature | 添加本地嵌入模型支持，实现离线向量记忆搜索 |
| [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) | 🐛 Bug Fix | 修复推理内容注入顺序错误导致的计数不匹配问题 |

> 📌 今日共合并/关闭 **30个 PR**，涵盖核心功能增强、UI 优化与关键 Bug 修复，项目整体功能完整性与稳定性显著提升。

---

## 4. 社区热点

### 🔥 高关注度 Issues（按评论数排序）

1. **[#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) – CPU 占用飙升至 100% 后不降（Open）**  
   - **评论数**：9  
   - **用户反馈**：Ubuntu 25.10 上 CoPaw 0.0.7 启动后即使无操作也会导致 CPU 持续满载，风扇狂转。  
   - **进展**：用户已定位到 `mcp` 组件相关，并提交了修复 PR（未链接），需维护者跟进验证。  
   - **影响**：严重影响用户体验，属高优先级性能问题。

2. **[#1782](https://github.com/agentscope-ai/CoPaw/issues/1782) – 升级后本地 llama.cpp/Ollama 模型无法调用（Closed）**  
   - **评论数**：8  
   - **状态**：已关闭，由 [#1784](https://github.com/agentscope-ai/CoPaw/pull/1784) 修复  
   - **诉求**：用户依赖本地模型部署，升级后功能中断引发强烈关注。

3. **[#430](https://github.com/agentscope-ai/CoPaw/issues/430) – Help Wanted: Open Tasks（Open）**  
   - **评论数**：7  
   - **说明**：长期开放任务清单，鼓励社区贡献，涵盖 P0-P2 优先级任务，是新人参与入口。

> 💬 社区核心诉求集中在：**本地模型兼容性、性能优化、多模态支持、权限与安全控制**。

---

## 5. Bug 与稳定性

### 🐛 今日报告的主要 Bug（按严重程度排序）

| Issue | 严重程度 | 描述 | 是否已有 Fix |
|------|--------|------|-------------|
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | 🔴 高 | CPU 占用持续 100%，疑似 MCP 组件泄漏 | ❌ 未合并（用户称已提 PR） |
| [#1805](https://github.com/agentscope-ai/CoPaw/issues/1805) | 🔴 高 | 记忆丢失 + 查找历史数据库时系统卡死 | ❌ 新报告，待分析 |
| [#1736](https://github.com/agentscope-ai/CoPaw/issues/1736) | 🟠 中 | MemoryManager 未初始化 `file_stores` 导致搜索失败 | ❌ 未修复 |
| [#1563](https://github.com/agentscope-ai/CoPaw/issues/1563) | 🟠 中 | `write_file` 工具写入大文件时被截断（仅写入19%） | ❌ 未修复 |
| [#1794](https://github.com/agentscope-ai/CoPaw/issues/1794) | 🟠 中 | Windows 桌面版 v0.10b3 本地模型导入错误 | ✅ 已由 [#1784] 修复 |

> ⚠️ 建议优先处理 **#1385（CPU 占用）** 与 **#1805（记忆系统卡死）**，二者均影响核心可用性。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（结合 PR 判断落地可能性）

| 功能需求 | 相关 Issue | 已有 PR | 落地可能性 |
|--------|----------|--------|----------|
| 多模态支持（图片/文件上传） | [#675](https://github.com/agentscope-ai/CoPaw/issues/675), [#1045](https://github.com/agentscope-ai/CoPaw/issues/1045) | ✅ [#1772](https://github.com/agentscope-ai/CoPaw/pull/1772) | ✅ 已实现 |
| 本地嵌入模型支持 | [#1645](https://github.com/agentscope-ai/CoPaw/issues/1645) | ✅ [#1654](https://github.com/agentscope-ai/CoPaw/pull/1654), [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) | ✅ 已实现 |
| Web UI 鉴权登录 | [#492](https://github.com/agentscope-ai/CoPaw/issues/492), [#333](https://github.com/agentscope-ai/CoPaw/issues/333) | ❌ 无 | 🔄 高需求，可能被纳入 v0.2.0 |
| MCP HTTP 协议支持 | [#676](https://github.com/agentscope-ai/CoPaw/issues/676) | ✅ [#1783](https://github.com/agentscope-ai/CoPaw/pull/1783) | ✅ 已支持 `streamable_http` |
| 执行链路日志 | [#1474](https://github.com/agentscope-ai/CoPaw/issues/1474) | ❌ 无 | 🔄 调试需求强烈，建议纳入路线图 |

> ✅ 多模态与本地嵌入已成现实，**鉴权与日志功能**将成为下一版本重点。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音提炼

- **满意点**：
  - “多模态上传终于实现了，终于可以传图分析了！” —— 来自 [#1772] 评论区
  - “本地模型支持越来越完善了，离线使用更安心。” —— 本地部署用户群体
  - “控制台 UI 响应速度快，交互流畅。”

- **痛点与不满**：
  - “升级后本地模型全挂了，差点耽误项目进度。” —— #1782 用户
  - “CPU 一直 100%，笔记本烫得没法用。” —— #1385 用户
  - “记忆系统不稳定，昨天写的代码今天找不到了。” —— #1805 用户
  - “公网部署没有密码，谁敢用？” —— 多个鉴权相关 Issue

- **典型使用场景**：
  - 企业内网部署 + 本地大模型（Ollama/llama.cpp）
  - 多模态数据分析（代码+截图+文档）
  - 长期记忆辅助编程与知识管理

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue / PR

| 编号 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#430](https://github.com/agentscope-ai/CoPaw/issues/430) | Issue | 2026-03-03 | Open | 开放任务清单，需定期更新状态以激励贡献 |
| [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | Bug | 2026-03-12 | Open | CPU 占用问题持续一周，需紧急排查 |
| [#1474](https://github.com/agentscope-ai/CoPaw/issues/1474) | Feature | 2026-03-14 | Open | 执行链路日志需求明确，建议规划实现 |
| [#1088](https://github.com/agentscope-ai/CoPaw/pull/1088) | PR | 2026-03-10 | Open | Venice AI 提供商支持，首次贡献者，建议 review 合并 |
| [#1661](https://github.com/agentscope-ai/CoPaw/pull/1661) | PR | 2026-03-17 | Open | 记忆文件按 Agent ID 获取修复，影响核心功能 |

> 🔔 **维护者注意**：建议本周内处理 [#1385]、[#1661] 与 [#1088]，以提升系统稳定性与社区信任度。

---

**报告生成时间**：2026-03-19  
**数据来源**：GitHub CoPaw 仓库公开数据  
**分析师**：AI 开源项目观察员

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**  
**日期：2026年3月19日**

---

### 1. 今日速览  
过去24小时内，ZeptoClaw 社区保持中等活跃度，共产生 **3条新 Issue** 与 **2条 PR 更新**，无新版本发布。核心贡献者 @taqtiqa-mark 和 @qhkm 持续推动架构演进与功能扩展，重点聚焦于容器化部署、底层库重构及云服务商集成。当前无已合并 PR，但两项长期 PR（#287、#364）仍在积极迭代中，显示项目处于功能深化阶段。整体开发节奏稳健，技术债与前瞻性需求并行推进。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日无 PR 被合并或关闭。但以下两项 PR 在24小时内获得更新，表明开发持续推进：

- **[#287] chore: Dev tools for consistent pre-PR state**（[@taqtiqa-mark](https://github.com/taqtiqa-mark)）  
  提供统一的开发与测试环境配置，确保 `cargo test` 与 `clippy` 检查在贡献者间一致，提升代码质量基线。该 PR 自3月9日开启，持续优化中，是提升项目可维护性的关键基础设施改进。  
  🔗 https://github.com/qhkm/zeptoclaw/pull/287

- **[#364] feat(providers): add Google Vertex AI provider**（[@qhkm](https://github.com/qhkm)）  
  新增对 Google Vertex AI 的官方支持，集成 Gemini 模型并采用企业级 Bearer Token 认证（通过 `VERTEX_ACCESS_TOKEN` 环境变量），复用现有 `reqwest` 与解析逻辑，实现零新增依赖。此功能扩展了 ZeptoClaw 在多云 AI 服务场景下的适用性。  
  🔗 https://github.com/qhkm/zeptoclaw/pull/364

> 尽管尚未合并，两项 PR 均体现项目向标准化、可扩展性与生产就绪方向迈进。

---

### 4. 社区热点  
**[#387] feat: Core templates based on Containerfiles mapped-to/launched-in orchestrated Firecracker VM's**  
🔗 https://github.com/qhkm/zeptoclaw/issues/387  
- **评论数：4**（当前最高）  
- **作者：@taqtiqa-mark**  
- **讨论焦点**：提议将 Coding Agent Frameworks（如 pi-coding-agent、claude-code 等）作为普通应用运行于 Firecracker 微虚拟机中，通过 Containerfile 模板实现轻量级、安全隔离的部署。  
- **背后诉求**：社区关注如何在保障安全边界的前提下，支持多样化 AI 编码工具的即插即用。该提案试图将“功能蔓延”转化为标准化节点管理，反映用户对**安全隔离**与**架构一致性**的双重需求。  
- **争议点**：部分评论质疑 Firecracker 引入的运维复杂度是否值得，尤其在非高安全场景下。

---

### 5. Bug 与稳定性  
**[#388] bug(channels): fix ACP HTTP initialize and notification semantics**（严重程度：高）  
🔗 https://github.com/qhkm/zeptoclaw/issues/388  
- **报告者：@qhkm**  
- **问题摘要**：  
  1. **初始化标志全局共享**：ACP HTTP 协议中 `initialize` 状态为通道级全局变量，导致首个客户端初始化后，后续客户端可跳过握手直接调用 `session/new` 或 `session/prompt`，违反协议安全假设。  
  2. **通知响应体污染**：HTTP 通知机制错误地接收并处理响应体（如 `session/*` 返回内容），干扰正常消息流。  
- **影响范围**：多客户端并发场景下可能引发状态混乱或未授权操作。  
- **修复状态**：尚无对应 PR，需优先处理。建议标记为 `P1` 缺陷。

---

### 6. 功能请求与路线图信号  
以下功能请求具备较高纳入下一版本的可能性，且已有相关开发活动支撑：

| Issue | 功能方向 | 关联 PR | 纳入可能性 |
|------|--------|--------|----------|
| [#389] feat(lib): Evaluate building on utility/lib crate | 架构解耦 | 无直接 PR，但与 #287 开发工具链协同 | ⭐⭐⭐☆ |
| [#387] Firecracker + Containerfile 模板 | 部署架构 | 无 PR，但属长期战略方向 | ⭐⭐☆☆ |
| [#364] Google Vertex AI 支持 | 云服务商集成 | PR #364 已存在 | ⭐⭐⭐⭐ |

> **判断依据**：#364 已有完整实现且无依赖膨胀，最可能在下个版本落地；#389 提出的 `utility/lib` 重构若与 #287 工具链整合，可提升模块复用性，符合项目“减少重复代码”目标。

---

### 7. 用户反馈摘要  
从 Issues 评论中提炼关键用户声音：

- **痛点**：  
  - 多客户端场景下 ACP HTTP 协议存在状态共享漏洞（#388），影响生产环境可信度。  
  - 当前缺乏统一开发环境，导致本地 lint/test 结果不一致（#287 背景动机）。  

- **使用场景**：  
  - 企业用户希望通过 Vertex AI 接入 Gemini 模型，同时要求最小化依赖（#364 明确强调“zero new dependencies”）。  
  - 高级用户探索将 ZeptoClaw 作为 AI 编码代理的底层调度平台，需更强隔离能力（#387）。  

- **满意度**：  
  - 对复用现有解析逻辑（如 `extract_text`）的设计表示认可（#364 隐含反馈）。  
  - 对“将编码代理视为普通应用节点”的抽象理念持开放态度，但担忧运维成本（#387 评论分歧）。

---

### 8. 待处理积压  
以下 Issue/PR 长期未闭环，建议维护者关注：

- **[#287] chore: Dev tools for consistent pre-PR state**  
  **开启时间：2026-03-09（10天前）**  
  虽持续更新，但尚未合并。作为提升贡献体验的基础设施，建议尽快 review 并落地。  

- **[#364] feat(providers): add Google Vertex AI provider**  
  **开启时间：2026-03-15（4天前）**  
  功能完整且设计简洁，建议评估后优先合并以丰富 provider 生态。

> ⚠️ 提示：两项 PR 均无冲突评论，延迟可能源于维护者带宽限制，建议分配 review 资源。

---  
**报告生成时间：2026-03-19 08:00 UTC**  
**数据来源：GitHub API / ZeptoClaw Repository**

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-03-19）

---

## 1. 今日速览

过去24小时内，EasyClaw 项目整体活跃度中等，社区反馈集中但开发响应积极。共关闭 3 个 Issues，均为用户反馈的连接与兼容性问题；新增 2 个 Pull Requests，涉及国际化扩展与 UI 架构重构，显示项目正向多语言支持与界面现代化推进。同时发布 v1.7.1 版本，重点解决 macOS 安装拦截问题。尽管无 PR 合并，但核心功能稳定性与用户体验优化成为当前焦点。

---

## 2. 版本发布

**RivonClaw v1.7.1 正式发布**  
本次发布主要解决 macOS 用户因 Gatekeeper 安全机制导致的安装失败问题。官方明确说明：“‘RivonClaw’ is damaged”提示为系统误报，非文件损坏。  
**解决方案**：用户需通过 Terminal 执行 `xattr -cr /path/to/RivonClaw.app` 命令清除隔离属性以绕过签名验证。  
> ⚠️ 注意：此为临时 workaround，长期需推进 Apple 开发者签名认证。建议维护者优先处理代码签名流程以消除用户安装障碍。  
🔗 [Release v1.7.1](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.1)

---

## 3. 项目进展

今日无 PR 被合并，但两项重要 PR 进入待审状态，预示下一阶段开发方向：

- **#21 feat(i18n): 新增5种语言支持**（@chinayin）  
  添加繁体中文（zh-TW）、日语（ja）、韩语（ko）、越南语（vi）、印地语（hi），完整覆盖 1,333 个翻译键，显著提升全球化能力。  
  🔗 [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)

- **#20 UI Migration: 组件重构 + 主题分离 + Skills 页面**（@chinayin）  
  将底部操作栏抽离为 `<BottomActions>` 组件，统一 SVG 图标管理至 `icons.tsx`，并实现主题切换与语言切换解耦，为后续技能管理功能打下架构基础。  
  🔗 [PR #20](https://github.com/gaoyangz77/rivonclaw/pull/20)

> ✅ 项目正向模块化、国际化与用户体验现代化迈出关键步伐，预计合并后将显著提升可维护性与多地区用户覆盖。

---

## 4. 社区热点

**#18 与 #19：Windows 系统连接失败问题集中爆发**（作者：@slowayear）  
两条 Issue 均报告从 v1.6.8 升级至 v1.7.0 后无法建立连接，即使重装、重配 API 或注册新账号仍卡在“连接中”状态，并附详细截图。  
- #18：发布于 3/16，3/18 关闭，5 条评论  
- #19：发布于 3/18，当日关闭，3 条评论  

🔗 [#18](https://github.com/gaoyangz77/rivonclaw/issues/18) | [#19](https://github.com/gaoyangz77/rivonclaw/issues/19)

> 📌 分析：两 Issue 均被快速关闭，但未说明具体修复方式，可能已在 v1.7.1 中静默修复。用户诉求集中于版本升级后的向后兼容性，反映发布流程缺乏充分 Windows 环境测试。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|--------|--------|------|--------|
| ⚠️ 高 | Windows 10/11 升级至 v1.7.0 后连接失败，UI 卡死 | 已关闭（疑似修复） | 无公开 fix PR |
| ⚠️ 中 | macOS Gatekeeper 误报应用损坏，阻碍安装 | 已发布 v1.7.1 提供 workaround | 无代码级修复 |

> ❗ 建议：尽管 Issue 已关闭，但缺乏透明修复说明可能影响用户信任。建议补充 Release Notes 明确 Windows 连接问题的修复细节。

---

## 6. 功能请求与路线图信号

- **多语言支持**：#21 PR 显示项目正系统性推进国际化，5 种新语言覆盖东亚与南亚主要市场，符合全球化战略。
- **UI 架构升级**：#20 PR 提出组件化重构与主题分离，暗示未来将支持深色模式、自定义主题等高级 UX 功能。
- **技能管理页面**：PR 描述提及“Skills Page”开发，结合项目名“EasyClaw”（易爪），推测将引入 AI 技能插件或工作流定制功能，为下一阶段核心能力扩展。

> ✅ 路线图清晰：**稳定性修复 → 国际化 → UI 现代化 → 技能生态**，当前处于第二阶段向第三阶段过渡。

---

## 7. 用户反馈摘要

- **痛点**：
  - Windows 用户升级后连接失效，影响核心功能使用（@slowayear）
  - macOS 用户遭遇 Gatekeeper 拦截，安装体验差
  - 缺乏官方技术交流渠道，开发者难以及时反馈（#12 社群交流请求）

- **满意点**：
  - 项目架构设计受认可（@Geekbruce 称“非常符合预期架构”）
  - 响应速度较快，Issue 能在数日内关闭

- **使用场景**：
  - 个人 AI 助手部署（注册账号 + API 配置）
  - 多平台跨设备使用（Windows/macOS）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #12 | 社群交流 | 2026-03-08 | 已关闭 | 虽关闭，但反映社区建设缺失，建议建立 Discord/QQ 群提升 engagement |
| PR | #20 | UI Migration | 2026-03-18 | Open | 高价值重构，建议优先 review 并合并 |
| PR | #21 | i18n 扩展 | 2026-03-18 | Open | 国际化关键步骤，建议与 UI 重构同步推进 |

> 🔔 维护者注意：两项 PR 均由 @chinayin 贡献，建议与其沟通合并优先级，避免长期 open 导致冲突。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
- 优势：版本迭代及时、社区反馈响应快、架构演进清晰  
- 风险：跨平台兼容性测试不足、缺乏透明修复说明、社区生态待建设  
- 建议：建立 CI/CD 多平台测试流水线，完善 Release Notes 细节，启动官方交流渠道。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*