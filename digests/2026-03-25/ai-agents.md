# OpenClaw 生态日报 2026-03-25

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-25 01:02 UTC

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

# OpenClaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

OpenClaw 社区在24小时内保持高度活跃，共产生 **500条 Issues 更新**（新开/活跃427条，关闭73条）和 **500条 PR 更新**（待合并398条，已合并/关闭102条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但多个关键回归问题被快速识别并修复，反映出维护团队对稳定性的高度重视。社区讨论聚焦于跨平台兼容性、插件生态一致性及 OAuth 持久化等核心体验问题，整体项目健康度良好，处于快速迭代与问题响应并行的成熟阶段。

---

## 2. 版本发布

**无新版本发布**。最近一次版本为 `2026.3.22`，但该版本暴露出多个回归问题（见下文 Bug 部分），社区正集中修复中，预计下一版本将包含关键补丁。

---

## 3. 项目进展

今日有 **102个 PR 被合并或关闭**，其中多个关键修复显著提升了系统稳定性与用户体验：

- **网关重启逻辑优化**：通过 #54125 和 #54124 修复了 ACP（Agent Control Protocol）任务活跃期间网关重启导致的状态丢失问题，并优化了错误 defer 机制，避免短暂故障误触发最终失败。
- **插件生命周期修复**：#54091 引入 `providerOnly` 模式，防止快照加载时非必要插件注册引发副作用，提升启动可靠性。
- **UI 资产构建回归修复**：针对 #52808 和 #52823 报告的 Control UI 缺失问题，相关构建流程已在内部修复，预计随下一版本发布。
- **Discord 与 Telegram 通道增强**：#54118 改进命令部署失败日志可读性；#53052 修复 Telegram 论坛主题线程路由丢失问题。
- **内存搜索性能优化**：#54092 引入会话转录本读取的 LRU 缓存，显著降低 `sessions.list` 在大规模会话下的延迟。

> 整体来看，项目正向更稳定、可观测性更强的方向迈进，尤其在多通道协同与网关健壮性方面取得实质进展。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

| Issue | 热度 | 核心诉求 |
|------|------|--------|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 👍65, 💬48 | 强烈呼吁补齐 Linux/Windows 桌面端应用，实现与 macOS 对等的功能体验 |
| [#52808 dist/control-ui/ missing from npm package](https://github.com/openclaw/openclaw/issues/52808) | 👍61, 💬30 | 用户升级至 `2026.3.22` 后 Control UI 完全不可用，属高优先级回归 |
| [#49836 ⚠️Phishing Scam Detected](https://github.com/openclaw/openclaw/issues/49836) | 💬33 | 安全警报：项目名被用于钓鱼攻击，需官方澄清并加强品牌保护 |
| [#52885 微信插件兼容性断裂](https://github.com/openclaw/openclaw/issues/52885) | 💬32 | 第三方插件因 ESM 模块解析变更而崩溃，暴露插件 SDK 接口稳定性问题 |

> 分析：用户对 **跨平台支持** 和 **插件生态稳定性** 的需求尤为迫切，同时安全事件提示项目已进入恶意行为者视野，需加强官方沟通。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 问题 | 状态 | 修复进展 |
|------|------|--------|
| **Control UI 资产缺失（#52808, #52823）** | 🔴 高优先级回归 | 已定位为 npm 打包流程遗漏 `dist/control-ui/`，修复中 |
| **WhatsApp 插件崩溃（#53247）** | 🔴 回归 | 缺失 `light-runtime-api`，bundled 包不完整，需重构插件打包逻辑 |
| **OAuth 令牌不持久化（#52037, #53317）** | 🔴 数据丢失风险 | OpenAI Codex 刷新后未写入磁盘，导致重复认证失败，#54090 提供 abort API 辅助调试 |
| **Discord WebSocket 1006 崩溃（#53644）** | 🔴 进程崩溃 | 异常关闭未被捕获，直接导致网关退出，需增强重连容错 |
| **XDG_CONFIG_HOME 未解析（#53628）** | 🟡 行为异常 | Docker 环境下技能安装路径错误，影响配置灵活性 |
| **CJK 文本搜索失效（#20730）** | 🟡 功能降级 | SQLite FTS5 默认 tokenizer 不支持中日韩，需切换至 `icu` 或自定义分词 |

> 注：🔴=严重/阻塞性，🟡=功能性缺陷。多数高优先级问题已有对应 PR 在推进。

---

## 6. 功能请求与路线图信号

用户明确提出且已有开发动向的功能：

- **自动模型路由（#53710）**：根据消息复杂度动态选择模型，避免昂贵模型处理简单请求 → 已有 PR，可能纳入下一版本。
- **迁移工具（#53520）**：`openclaw migrate export/import` 支持跨设备状态迁移 → PR 已开，解决用户多设备协同痛点。
- **工具运行时可见性（#54088）**：新增 `/tools` 端点展示 agent 当前可用工具，提升透明度 → 大型 PR 正在 review。
- **阿拉伯语本地化（#50460）**：完整 UI 翻译完成，即将合并，体现国际化扩展。

> 信号：项目正从“基础功能完善”转向“高级 orchestration 与用户体验精细化”。

---

## 7. 用户反馈摘要

从 Issues 评论提炼的真实声音：

- **满意点**：  
  > “OpenClaw 的 agent 连续性设计让我感觉真有一个长期伙伴” —— 来自 #50096 讨论  
  > “Control UI 的实时状态监控非常直观，比 CLI 友好太多” —— 多份反馈提及

- **痛点**：  
  > “每次更新都要手动 rebuild UI，文档却没写清楚” —— #52823 用户  
  > “插件一升级就坏，不敢轻易更新版本” —— #52885 微信插件用户  
  > “Raspberry Pi 上根本跑不起来，ARM 支持形同虚设” —— #23909 树莓派用户

- **典型场景**：  
  开发者希望将 OpenClaw 作为本地 AI 助手嵌入工作流，但受限于插件兼容性与跨平台缺失；企业用户关注 OAuth 代理与令牌持久化以集成内部系统。

---

## 8. 待处理积压

以下长期未响应问题需维护者关注：

| Issue | 年龄 | 重要性 |
|------|------|--------|
| [#10386 Workspace/extraDirs skills not discovered](https://github.com/openclaw/openclaw/issues/10386) | >55天 | 自定义技能无法加载，影响扩展性 |
| [#25215 SSRF check blocks Clash fake-ip range](https://github.com/openclaw/openclaw/issues/25215) | >28天 | 网络代理用户被误拦截，需调整 RFC2544 策略 |
| [#26322 OAuth token refresh race condition](https://github.com/openclaw/openclaw/issues/26322) | >27天 | 多 agent 共享认证时数据竞争，安全隐患 |
| [#23829 Fallback chain not traversing providers](https://github.com/openclaw/openclaw/issues/23829) | >30天 | 故障转移机制不完善，降低可用性 |

> 建议：优先处理 #10386 和 #26322，二者直接影响核心功能与安全性。

--- 

**报告生成时间：2026-03-25 UTC**  
**数据来源：OpenClaw GitHub Repository**

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-03-25）

---

## 1. 生态全景

2026年Q1末，个人 AI 助手开源生态呈现**高活跃度、强工程化、多场景分化**的成熟态势。主流项目普遍完成基础功能构建，进入**稳定性优化、多通道集成与架构演进**阶段。安全（OAuth、供应链投毒）、跨平台兼容性（ARM/Linux/Windows）、插件生态一致性成为社区核心关切。项目间技术路线趋同但定位分化明显，从轻量嵌入（TinyClaw）到企业级多租户（IronClaw）形成完整光谱。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500 | 500 | ❌ | ⭐⭐⭐⭐☆ |
| **NanoBot** | 21 | 51 | ❌ | ⭐⭐⭐☆☆ |
| **Zeroclaw** | 50 | 50 | ✅ (v0.6.0–v0.6.2) | ⭐⭐⭐⭐☆ |
| **PicoClaw** | 17 | 67 | ✅ (nightly) | ⭐⭐⭐⭐☆ |
| **NanoClaw** | 13 | 50 | ❌ | ⭐⭐⭐⭐☆ |
| **IronClaw** | 14 | 49 | ❌ | ⭐⭐⭐⭐☆ |
| **LobsterAI** | 24 | 50 | ❌ | ⭐⭐⭐☆☆ |
| **TinyClaw** | 0 | 8 | ✅ (v0.0.17–v0.0.19) | ⭐⭐⭐⭐☆ |
| **Moltis** | 10 | 18 | ❌ | ⭐⭐⭐☆☆ |
| **CoPaw** | 50 | 50 | ✅ (v0.2.0) | ⭐⭐⭐☆☆ |
| **ZeptoClaw** | 5 | 29 | ✅ (v0.8.1–v0.8.2) | ⭐⭐⭐⭐☆ |
| **EasyClaw** | 0 | 3 | ❌ | ⭐⭐⭐⭐☆ |

> 注：健康度综合响应速度、积压处理、稳定性修复效率评估。

---

## 3. OpenClaw 在生态中的定位

**核心优势**：  
- **最大社区规模**（500+ Issues/PR 单日），反映广泛用户基础与问题暴露广度；  
- **最完整通道支持**（Discord/Telegram/微信/钉钉全覆盖）与**插件生态成熟度**；  
- **企业级特性先行**（OAuth 持久化、多代理协作、A2A 协议）。  

**技术路线差异**：  
相比 TinyClaw/ZeptoClaw 的轻量聚焦，OpenClaw 采用**模块化网关架构**，强调可观测性（Control UI）与生产部署能力；相较 IronClaw 的多租户方向，更侧重**个人到中小团队场景**的灵活扩展。  

**社区规模**：GitHub 互动量超其他项目 2–5 倍，Issue 响应速度 <24h，形成正向反馈循环。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **跨平台兼容性** | OpenClaw (#75)、Zeroclaw (#4623)、CoPaw (#2097) | Linux/Windows 桌面端、ARMv6（Pi Zero）支持 |
| **插件/技能生态稳定性** | OpenClaw (#52885)、Moltis (#452)、LobsterAI (#763) | ESM 模块兼容、技能状态同步、manifest 校验 |
| **OAuth 与身份持久化** | OpenClaw (#52037)、IronClaw (#1602)、NanoBot (#2375) | 令牌刷新、多设备同步、SSO 集成 |
| **多模态交互** | PicoClaw (#1648)、LobsterAI (#722)、ZeptoClaw (#419) | TTS/ASR 集成、图片/语音消息支持 |
| **长期记忆与自学习** | NanoClaw (#1256)、CoPaw (#2166)、Moltis (#483) | 记忆持久化、任务连续性、行为进化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **TinyClaw** | 消息系统可靠性 | 开发者/极客 | 事件驱动 + 子进程隔离 |
| **Zeroclaw** | 多代理协作 | 研究型用户 | A2A 协议 + 技能自进化 |
| **IronClaw** | 企业级多租户 | 组织/团队 | WASM 沙箱 + RBAC |
| **PicoClaw** | 嵌入式部署 | NAS/家庭用户 | 轻量网关 + Web UI |
| **NanoClaw** | 远程运维集成 | DevOps | Host 级 Claude Code 会话 |
| **CoPaw** | 智能体间通信 | 多代理研究者 | 内置 QA Agent + 路由判决 |

> 关键差异点：**OpenClaw 强在生态广度，IronClaw/Zeroclaw 强在架构前瞻性，TinyClaw/PicoClaw 强在部署轻量化**。

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比 + 频繁发布）：  
  **Zeroclaw**（v0.6.x 密集发布）、**TinyClaw**（3 版本/日）、**PicoClaw**（nightly 构建）  
  → 特征：功能实验性强，适合技术尝鲜者。

- **质量巩固阶段**（高合并率 + 低积压）：  
  **OpenClaw**（500 PR 中 102 合并）、**IronClaw**（15/49 PR 合并）、**ZeptoClaw**（21/29 PR 合并）  
  → 特征：聚焦稳定性修复，适合生产环境。

- **社区驱动创新**：  
  **NanoClaw**（多 AI 后端）、**Moltis**（Docker/MCP 优化）体现用户深度参与架构演进。

---

## 7. 值得关注的趋势信号

1. **从“单代理”到“多代理系统”**：  
   Zeroclaw（A2A）、CoPaw（agent message）、IronClaw（WASM 工具）均布局多代理通信，预示**协作智能体**将成为下一代范式。

2. **安全与供应链治理优先级跃升**：  
   NanoBot（litellm 投毒）、OpenClaw（钓鱼攻击）事件推动项目普遍加强依赖审计与签名验证，**SBOM 与可信构建**将成标配。

3. **本地 LLM 优化成为竞争焦点**：  
   Moltis（动态 datetime 注入）、TinyClaw（grammY 迁移）显示项目正针对 Ollama/LM Studio 等本地运行时做深度调优，**KV 缓存效率**与**工具调用兼容性**是关键指标。

4. **开发者体验（DX）决定 adoption**：  
   EasyClaw（UI 组件化）、PicoClaw（配置安全处理）表明项目开始系统投资 DX，**CLI/Web UI 一致性**与**错误可调试性**显著影响用户留存。

> **对开发者的建议**：优先选择具备明确架构演进路线（如 A2A、WASM 沙箱）且社区响应迅速的项目；在集成第三方插件时，严格验证 ESM 兼容性与权限边界。

---  
**报告生成时间：2026-03-25 UTC**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-25）

---

## 1. 今日速览

NanoBot 社区活跃度显著上升，过去24小时内共产生 **21条 Issues 更新** 和 **51条 PR 更新**，反映出项目处于高并发开发与维护状态。核心关注点集中于 **安全漏洞响应**（LiteLLM 供应链投毒）、**心跳机制性能优化** 及 **多通道兼容性修复**。尽管无新版本发布，但多个关键修复已进入合并流程，项目整体正向稳定与安全性强化迈进。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.4.post5`，但该版本因捆绑受污染的 `litellm` 依赖而存在严重安全风险，建议用户暂缓部署或等待紧急修复版本。

---

## 3. 项目进展

今日有 **11个 PR 被合并或关闭**，其中多项关键改进推动项目向前：

- ✅ **#2448 [CLOSED] refactor: replace litellm with native openai + anthropic SDKs**  
  → 彻底移除受污染的 `litellm` 依赖，改用原生 OpenAI/Anthropic SDK，从根本上解决供应链安全问题（[PR链接](https://github.com/HKUDS/nanobot/pull/2448)）。

- ✅ **#2441 [CLOSED] security: prevent litellm 1.82.7+**  
  → 在依赖层面阻止安装已知恶意版本，作为临时缓解措施（[PR链接](https://github.com/HKUDS/nanobot/pull/2441)）。

- ✅ **#2428 [CLOSED] Fix/Feat(WeiXin): Adapt to WeChat plugin 1.0.3**  
  → 修复微信通道对新版插件的兼容性问题，支持 `SKRouteTag` 头部与登录态持久化（[PR链接](https://github.com/HKUDS/nanobot/pull/2428)）。

- ✅ **#2423 [CLOSED] fix: cherry-pick shell zombie process reaping from upstream**  
  → 修复长时间运行代理产生僵尸进程的问题，提升系统稳定性（[PR链接](https://github.com/HKUDS/nanobot/issues/2423)）。

> 项目在 **安全性、通道稳定性、资源管理** 三个维度取得实质性进展。

---

## 4. 社区热点

### 🔥 #2375 [OPEN] Heartbeat session history causes ENORMOUS token usage  
**评论：9 | 👍：1** | [Issue链接](https://github.com/HKUDS/nanobot/issues/2375)  
用户反馈心跳任务每次消耗 **56万 tokens**，源于 `heartbeat.jsonl` 日志无限累积。此问题暴露了长期运行代理的**成本失控风险**，引发社区对内存/会话管理机制的广泛讨论。已有优化提案（见 #2435）。

### 🔥 #2439 [OPEN] Security: Malicious data-exfiltration code found in litellm_init.pth  
**评论：4 | 👍：3** | [Issue链接](https://github.com/HKUDS/nanobot/issues/2439)  
用户发现 PyPI 包中捆绑的 `litellm_init.pth` 包含恶意代码，标记为 **Critical 级安全漏洞**。该问题直接促使团队启动 #2448 重构，成为今日最高优先级事件。

### 🔥 #2443 [OPEN] LiteLLM has been quarantined  
**评论：5** | [Issue链接](https://github.com/HKUDS/nanobot/issues/2443)  
依赖库 `litellm` 被 PyPI 隔离，社区呼吁尽快迁移。此 Issue 与 #2439 形成联动，凸显供应链安全已成为项目生存关键。

> 社区核心诉求：**立即解决 litellm 安全风险 + 优化心跳机制成本效率**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 Critical | #2439 | PyPI 包含恶意代码（数据外泄） | ✅ #2448（已合并） |
| 🔴 Critical | #2443 | 依赖库 litellm 被 PyPI 隔离 | ✅ #2448（已合并） |
| 🟠 High | #2375 | 心跳任务单次消耗 560k tokens | 🔄 #2435（优化中） |
| 🟠 High | #2369 | 定时提醒被评估器静默丢弃 | ✅ #2449（已提交） |
| 🟠 High | #2450 | Minimax via Ollama Cloud 第二次请求失败 | ❌ 无 |
| 🟡 Medium | #2437 | 大日志导致请求超限（工具输出未截断） | ❌ 无 |
| 🟡 Medium | #2432 | 'NoneType' object is not subscriptable | ❌ 无 |

> 当前最紧急风险已由 #2448 缓解，但**心跳成本**与**大文件处理**仍是性能瓶颈。

---

## 6. 功能请求与路线图信号

- **长期记忆支持**：#2183 提出集成 Honcho 实现可选长期记忆，响应路线图 #39，已进入开发阶段（[PR链接](https://github.com/HKUDS/nanobot/pull/2183)）。
- **事件驱动钩子系统**：#1934 引入可禁用技能的 Hook 机制，提升用户可扩展性，处于活跃开发（[PR链接](https://github.com/HKUDS/nanobot/pull/1934)）。
- **IP 地理信息查询技能**：#2451 新增 `ipinfo` 技能，展示社区贡献生态活跃度（[PR链接](https://github.com/HKUDS/nanobot/pull/2451)）。
- **OAuth 订阅模式替代 API 计费**：#2170 用户呼吁支持 OpenAI/Gemini 等 OAuth 订阅制，可能影响未来 provider 架构。

> 功能演进聚焦于 **可扩展性、成本控制、生态集成**，符合个人 AI 助手长期发展方向。

---

## 7. 用户反馈摘要

- **痛点**：
  - “心跳任务每小时吃掉我 $5+ 的 token 费用”（#2375）
  - “读完大日志就崩溃，根本没法用”（#2437）
  - “企业微信通道突然不能用了，报错 401”（#2329）
- **满意点**：
  - “本地 Whisper 转录非常准确，虽然慢但可靠”（#1358）
  - “Docker 部署体验流畅，技能安装自动化做得好”
- **使用场景**：
  - 邮件自动检查（30分钟心跳）
  - 企业微信/飞书办公集成
  - 本地日志监控与告警

> 用户高度依赖 NanoBot 作为**自动化办公中枢**，但对**成本敏感度极高**，且对通道稳定性要求严苛。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 提醒 |
|--------|--------|------|------|
| #1681 Matrix auth issue | 2026-03-07 | OPEN | Matrix 通道解密失败问题超18天未响应，影响加密通信用户 |
| #144 Missing gemini_api_key | 2026-02-05 | OPEN | Gemini 模型配置逻辑缺陷，超50天未修复 |
| #1934 feat(hooks): event-driven hook system | 2026-03-12 | OPEN | 重要架构改进，需维护者 review |
| #2183 feat: long-term memory via Honcho | 2026-03-17 | OPEN | 路线图关键功能，建议优先推进 |

> 建议维护团队本周内集中处理 **Matrix 认证** 与 **Gemini 配置** 等长期阻塞问题，避免用户流失。

--- 

**报告生成时间：2026-03-25**  
**数据来源：GitHub HKUDS/nanobot**

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

Zeroclaw 在 2026-03-24 至 2026-03-25 期间表现出极高的开发活跃度：**50 条 Issues 更新**（43 条关闭，7 条新开）、**50 条 PR 更新**（31 条合并/关闭，19 条待合并），并发布了 **4 个新版本**（v0.6.0 至 v0.6.2）。社区反馈密集，涉及安全策略误判、ARMv6 兼容性、流式输出缺失等关键问题，同时多项核心功能（如 A2A 协议、技能自进化、内存隔离）进入实现阶段。项目整体处于快速迭代与稳定性修复并行的高强度开发周期。

---

## 2. 版本发布

### v0.6.2（最新稳定版）
- **更新内容**：增量改进与细节优化（"Incremental improvements and polish"）
- **破坏性变更**：无明确说明，但结合 Issues 可知默认提示词（prompt）已重构，可能影响 agent 行为模式
- **迁移注意**：
  - 用户报告 v0.5+ 版本出现“安全策略过度拦截”问题（#4496），建议检查 `autonomy.level` 配置或等待 #4615 合并后的行为调整
  - ARMv6 设备（如 Pi Zero W）用户需注意：v0.6.2 官方二进制仍存在 segfault 问题（#4623），暂不建议升级

> 🔗 [v0.6.2 Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.6.2)

> 📌 注：v0.6.0 ~ v0.6.1 均为过渡版本，更新日志一致，推测为 CI 自动化发布策略所致。

---

## 3. 项目进展

今日共 **31 个 PR 被合并或关闭**，重点推进以下方向：

| 类别 | 关键进展 | PR 链接 |
|------|--------|--------|
| **安全性** | 修复高熵令牌检测误判本地媒体路径问题，避免 `[IMAGE:<path>]` 被错误脱敏 | [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) |
| **配置系统** | 实现 Windows 平台 `sync_directory` 功能，提升数据持久化可靠性 | [#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613) |
| **Docker 支持** | 将 `whatsapp-web` 特性纳入官方 Docker 镜像，消除用户自定义构建需求 | [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) |
| **Agent 行为** | 重写安全提示词段落，减少 AI 过度保守倾向，恢复工具执行主动性 | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) |
| **技能系统** | 实现技能自进化机制（SkillImprover）与流水线工具调用（execute_pipeline） | [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) |
| **CLI 体验** | 为 agent REPL 添加流式输出与 Ctrl+C 中断支持，改善交互反馈 | [#4620](https://github.com/zeroclaw-labs/zeroclaw/pull/4620) |

> ✅ 项目整体向“多代理协作”、“自适应学习”、“跨平台稳定”三大目标显著迈进。

---

## 4. 社区热点

### 🔥 高热度 Issues（评论数 ≥3）

| Issue | 主题 | 核心诉求 | 链接 |
|------|------|--------|------|
| #2487 | Agent 聊天报错 "Invalid schema for function 'channel_ack_config'" | 修复运行时 schema 校验失败导致工作流阻塞 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) |
| #1518 | 多独立 Agent 进程间通信（IPC） | 通过共享 SQLite 实现 agent 发现与消息交换 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) |
| #1924 | FreeBSD 平台支持 | 请求发布 FreeBSD amd64 预编译二进制 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) |
| #3683 | 自主技能创建与自我改进 | 引入 Hermes Agent 学习循环机制 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) |
| #4496 | v0.5+ “降智商”问题 | 安全策略过于严格，阻碍基础命令执行 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/4496) |

> 💡 分析：用户强烈关注 **agent 自主性** 与 **跨平台可用性**，#4496 反映的安全策略退化已成为 S1 级体验障碍，推动 #4615 快速合并。

---

## 5. Bug 与稳定性

按严重程度排序（S0 > S1 > S2）：

| 严重度 | Issue | 问题描述 | 状态 | Fix PR |
|-------|------|--------|------|--------|
| **S0** | #3664 | 运行时数据丢失/安全风险（附截图） | 🔴 未修复 | — |
| **S0** | #4532 | `.secret_key` 文件权限错误导致认证失败 | ✅ 已关闭 | — |
| **S0** | #4576 | Docker 镜像硬编码特性，无法启用 WhatsApp Web | ✅ 已修复 | [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611) |
| **S1** | #4623 | v0.6.2 ARMv6 二进制 segfault（Pi Zero W） | 🔴 未修复 | — |
| **S1** | #4496 | 安全策略过度拦截，连 `ls /` 都禁止 | ✅ 已缓解 | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) |
| **S1** | #4567 | Azure AI 提供商流式响应报错 | ✅ 已关闭 | — |
| **S2** | #3658 | v0.3.2 交互式 onboarding 失效 | ✅ 已修复 | [#4618](https://github.com/zeroclaw-labs/zeroclaw/pull/4618) |

> ⚠️ **重点关注**：#4623（ARMv6 segfault）尚无修复方案，影响边缘设备用户；#3664 虽为 S0 但未提供复现步骤，需维护者主动联系。

---

## 6. 功能请求与路线图信号

| 功能方向 | 用户请求（Issue） | 对应 PR | 纳入可能性 |
|--------|------------------|--------|----------|
| **多代理协作** | #1518（IPC）、#3030（Bloom 架构对齐） | [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166)（A2A 协议） | ⭐⭐⭐⭐☆ |
| **自主进化** | #3683（技能自创建/改进） | [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | ⭐⭐⭐⭐⭐ |
| **内存隔离** | — | [#4626](https://github.com/zeroclaw-labs/zeroclaw/pull/4626)（NamespacedMemory） | ⭐⭐⭐☆☆ |
| **Web UI 增强** | — | [#4603](https://github.com/zeroclaw-labs/zeroclaw/pull/4603)（可折叠推理 UI）、[#4625](https://github.com/zeroclaw-labs/zeroclaw/pull/4625)（移动端适配） | ⭐⭐⭐⭐☆ |
| **外部集成** | #4298（合作伙伴接入） | — | ⭐⭐☆☆☆（商业导向，优先级待评估） |

> 📌 路线图清晰：**A2A 协议 + 技能自进化** 构成下一代多代理架构核心，预计 v0.7 版本重点发布。

---

## 7. 用户反馈摘要

### 😠 主要痛点
- **“v0.5 以后变笨了”**：安全策略从“验证后执行”变为“默认拒绝”，导致 `ls /`、脚本运行等基础操作被拦截（#4496）
- **ARM 设备兼容性差**：Pi Zero W 用户无法使用官方二进制，需自行编译（#4623）
- **Web Dashboard 体验割裂**：404 错误频发，移动端无法使用（#3454、#4625）
- **流式输出缺失**：Discord/Web 界面长响应无中间反馈，体验卡顿（#4551、#4603）

### ✅ 满意点
- **快速响应**：多数 Bug 在 24 小时内关闭（如 #4532、#4567）
- **功能前瞻性**：A2A、技能自进化等特性获社区高度认可（#3683、#4166）
- **跨平台努力**：FreeBSD、Windows 支持持续推进（#1924、#4613）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #3664 | [Bug] 运行时异常（附截图） | 2026-03-16 | 🔴 未响应 | 需维护者联系用户获取复现步骤 |
| Issue | #4623 | ARMv6 segfault | 2026-03-24 | 🔴 未修复 | CI 需增加 ARMv6 测试矩阵 |
| PR | #4551 | Discord 流式输出 | 2026-03-24 | 🟡 待合并 | 高价值 UX 改进，建议优先 review |
| PR | #4626 | 内存隔离装饰器 | 2026-03-24 | 🟡 待合并 | 多代理场景关键基础设施 |

> 🛎️ **维护者行动建议**：  
> 1. 联系 @Fun-Fox 补充 #3664 复现信息  
> 2. 评估 #4623 是否需回退 ARM 构建工具链  
> 3. 加速 #4551、#4626 的 code review

--- 

📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高强度开发中保持良好响应速度，核心功能演进积极，但边缘平台兼容性与部分 S0 Bug 需加强关注。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

PicoClaw 在 2026-03-24 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **17 条 Issues 更新**（11 新开/活跃，6 已关闭）和 **67 条 PR 更新**（23 待合并，44 已合并/关闭），显示出强劲的开发节奏。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260324.4d7a629b`），主要聚焦于配置安全、Web UI 稳定性与语音功能集成。整体项目健康度良好，功能迭代与 Bug 修复并重，社区参与度显著提升。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260324.4d7a629b`
- **类型**：自动化 nightly 构建（非稳定版，谨慎使用）
- **更新范围**：包含自 `v0.2.3` 以来主分支的全部变更
- **关键改进方向**（基于关联 PR）：
  - Web 控制台增加 SSE 降级通信机制（[#1949](https://github.com/sipeed/picoclaw/pull/1949)）
  - Launcher Dashboard 增加 Token 认证保护（[#1953](https://github.com/sipeed/picoclaw/pull/1953)）
  - 修复自定义端口下 WebSocket 连接失效问题（[#1957](https://github.com/sipeed/picoclaw/pull/1957)）
  - 配置保存时安全凭据处理逻辑优化（[#1929](https://github.com/sipeed/picoclaw/pull/1929)）
- **⚠️ 注意事项**：此为开发预览版，不建议用于生产环境；部分新功能（如 TTS/ASR）仍处于实验阶段。

> [查看完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展

今日共 **44 个 PR 被合并或关闭**，核心进展包括：

| 类别 | 关键 PR | 说明 |
|------|--------|------|
| **🔐 安全增强** | [#1929](https://github.com/sipeed/picoclaw/pull/1929)（已合并） | 修复 Web 配置保存时因安全凭据未提前加载导致的验证失败问题，提升配置系统鲁棒性 |
| **🌐 Web UI 稳定性** | [#1949](https://github.com/sipeed/picoclaw/pull/1949)（开放中） | 为 Web Chat 添加 SSE 降级路径，解决 WebSocket 不可用时的通信中断问题 |
| | [#1953](https://github.com/sipeed/picoclaw/pull/1953)（开放中） | 为 Launcher Dashboard 增加基于 Token 的认证机制，防止未授权访问 |
| | [#1957](https://github.com/sipeed/picoclaw/pull/1957)（开放中） | 修复自定义端口映射下前端无法建立 WebSocket 连接的 Bug |
| **🛠️ 工具与配置** | [#1981](https://github.com/sipeed/picoclaw/pull/1981)（开放中） | 实现按行分页的 `ReadFileTool` 替代方案，提升大文件阅读体验 |
| | [#1978](https://github.com/sipeed/picoclaw/pull/1978)（开放中） | 统一“重启 required”提示机制，覆盖工具与配置变更场景 |
| **🔊 语音功能** | [#1939](https://github.com/sipeed/picoclaw/pull/1939)（开放中） | 集成 Discord/Telegram/WeChat 的 TTS 与 ASR 完整语音通路，支持端到端语音交互 |
| **🐞 Bug 修复** | [#1902](https://github.com/sipeed/picoclaw/pull/1902)（已合并） | 修复“占位消息”设置关闭后无法持久化的问题（#1774） |
| | [#1977](https://github.com/sipeed/picoclaw/pull/1977)（已合并） | 防止虚拟多密钥模型被误持久化到配置中 |

> 项目在 **Web 体验、安全性、语音能力**三大方向取得实质性推进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#1648 — Adding TTS and ASR Support to PicoClaw](https://github.com/sipeed/picoclaw/issues/1648)（22 条评论）
- **诉求分析**：用户强烈呼吁将语音能力（TTS/ASR）从实验性 PR 集成至主网关，实现端到端语音交互。已有 PR [#1939](https://github.com/sipeed/picoclaw/pull/1939) 实现多平台支持，但尚未合并。
- **背后趋势**：反映用户对 **多模态交互** 的迫切需求，尤其在移动端与无障碍场景中。

### 💬 高关注度 Bug：[#1941 — Picoclaw Config is Wiped](https://github.com/sipeed/picoclaw/issues/1941)（11 条评论，1 👍）
- 用户报告配置在运行中被意外清空，涉及 Telegram 通道启用后配置丢失。
- 社区正在排查是否与配置持久化或安全模块加载顺序有关，暂未定位根因。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|--------|-------|------|---------------|
| 🔴 高 | [#1941] 配置被清空 | OPEN | ❌ 无 |
| 🟠 中 | [#1737] Launcher 模式下 WebSocket 端口 18800 文档缺失导致 Web UI 输入禁用 | OPEN | ✅ [#1957] 已提供修复 |
| 🟠 中 | [#1058] Cron `deliver=false` 任务静默丢弃 LLM 响应 | OPEN | ❌ 无（需逻辑重构） |
| 🟡 低 | [#1973] 工具/配置变更无“重启 required”提示 | OPEN | ✅ [#1978] 正在实现统一机制 |
| 🟡 低 | [#1946] Cron 定时任务不执行（特定时间段失效） | OPEN | ❌ 需进一步日志分析 |

> 建议优先处理 #1941（配置丢失）与 #1058（消息丢失），二者影响核心可靠性。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 关联 PR | 纳入可能性 |
|--------|-------|--------|----------|
| **语音交互（TTS/ASR）** | [#1648] | [#1939] | ⭐⭐⭐⭐☆（高，已有实现） |
| **Web Chat 流式输出** | [#1950] | 无 | ⭐⭐☆☆☆（低优先级，标记为 Nice-to-Have） |
| **Seahorse 生物启发记忆系统** | [#1919] | 无 | ⭐⭐☆☆☆（前瞻性研究，暂无实现） |
| **Matrix 加密消息支持** | [#1840] | 无 | ⭐⭐☆☆☆（低优先级，已关闭但未解决） |
| **ReadFileTool 行分页** | [#1974] | [#1981] | ⭐⭐⭐⭐☆（高，PR 已提交） |

> **TTS/ASR 集成** 和 **ReadFileTool 改进** 最可能进入下一稳定版。

---

## 7. 用户反馈摘要

- **痛点**：
  - “配置保存后莫名其妙消失，重启又回来了”（#1941）
  - “Docker 映射端口后 Web 聊天框直接禁用，体验极差”（#1737 → 已由 #1957 修复）
  - “Cron 任务设了不跑，日志也没报错，完全静默”（#1946）
- **满意点**：
  - “Nightly 版本更新很快，问题响应及时”
  - “Web UI 功能越来越完善，接近生产可用”
- **使用场景**：
  - 家庭 NAS 上的自动化助手（Cron + Telegram）
  - 企业微信机器人集成（WeCom WS 通道）
  - 多模型切换与密钥管理（.security.yml 支持）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议动作 |
|------|------|------|--------|--------|
| Issue | [#1058] | Cron deliver=false 静默丢弃响应 | >50 天 | 高优先级修复，影响消息可达性 |
| Issue | [#1737] | WebSocket 端口文档缺失 | >6 天 | 补充文档或自动检测端口 |
| PR | [#1939] | TTS/ASR 多平台集成 | 1 天 | 审查后尽快合并，满足社区期待 |
| Issue | [#1919] | Seahorse 记忆系统提案 | 1 天 | 评估技术可行性，纳入长期路线图 |

> 建议维护者优先处理 **#1058** 与 **#1939**，二者分别代表稳定性与功能扩展的关键瓶颈。

---

**报告生成时间**：2026-03-25  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，社区贡献与自动化流程并行推进：共产生 **13 条新 Issues**（全部为新增/活跃，无关闭），**50 条 PR 更新**（35 条待合并，15 条已合并/关闭），但**无新版本发布**。  
核心开发聚焦于**多通道集成、容器稳定性修复与技能分支维护**，同时暴露出多个因主分支频繁提交导致的技能分支合并冲突问题。  
社区对扩展 AI 后端支持（如 GitHub Copilot、OpenCode）和 Web 通道替代方案表现出强烈兴趣，反映出用户对平台开放性与部署灵活性的迫切需求。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为持续集成状态，未触发正式版本标签。

---

## 3. 项目进展

今日共 **15 个 PR 被合并或关闭**，关键进展包括：

- ✅ **#1397 [CLOSED]**：修复 root 用户运行时 IPC 文件权限问题，避免容器内 agent 陷入 `EACCES` 死循环（[链接](https://github.com/qwibitai/nanoclaw/pull/1397)）  
- ✅ **#1410 [CLOSED]**：新增日志分析技能（log analyzer），增强运维可观测性（[链接](https://github.com/qwibitai/nanoclaw/pull/1410)）  
- ✅ **#1372 [CLOSED]**：修复诊断提示（diagnostics prompt）因 Markdown 链接未被解析而静默跳过的问题，确保用户可见（[链接](https://github.com/qwibitai/nanoclaw/pull/1372)）  
- ✅ **#1400 [CLOSED]**：在 CLAUDE.md 中增加 OneCLI 密钥管理机制说明，提升安全上下文透明度（[链接](https://github.com/qwibitai/nanoclaw/pull/1400)）  
- ✅ **#1072 [CLOSED]**：实现 `/remote-control` 命令，支持从任意通道启动持久化 host 级 Claude Code 会话（[链接](https://github.com/qwibitai/nanoclaw/pull/1072)）

> 整体项目在**容器稳定性、安全策略与远程运维能力**方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高互动议题

- **#1273 [OPEN]**：用户 @rozek 提出并实现了一个**多会话 Web 通道**，作为对当前仅支持 messenger 模式的补充，强调教学与研究场景下的轻量部署需求（👍2，评论3）  
  → 反映核心痛点：**缺乏非即时通讯场景的交互入口**  
  [链接](https://github.com/qwibitai/nanoclaw/issues/1273)

- **#1163 [OPEN]**：@pedrorocha-net 建议引入 **OpenCode + JS SDK** 以支持多 AI 提供商（如企业自托管模型），并分享已实现的并行架构经验（👍3）  
  → 指向平台**供应商锁定风险**，呼吁架构解耦  
  [链接](https://github.com/qwibitai/nanoclaw/issues/1163)

- **#1351 [OPEN]**：@scottgl9 提交 PR 集成 **GitHub Copilot SDK** 作为 Anthropic 之外的 AI 后端选项，支持 GPT-4.1 等模型（[链接](https://github.com/qwibitai/nanoclaw/pull/1351)）  
  → 社区正积极推动**多模型运行时架构**

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #1391 / #1390 | 新建 group 时未自动生成 `CLAUDE.md`，导致 agent 无身份指令启动 | ❌ 尚无 |
| ⚠️ 高 | #1412–#1395（共7条） | 自动化 merge-forward 工作流在多个技能分支（`skill/apple-container`, `skill/compact`, `skill/ollama-tool` 等）持续失败，主分支更新无法同步 | ❌ 需手动干预 |
| ⚠️ 中 | #1407 | 请求添加 Telegram emoji reaction MCP 工具，当前缺失影响交互体验 | ✅ 已有提案，待实现 |

> **维护警报**：技能分支与主分支严重脱节，可能阻碍新功能交付。

---

## 6. 功能请求与路线图信号

以下需求具备高采纳可能性，已有对应 PR 或明确技术路径：

- **多 AI 后端支持**：通过 #1351（Copilot SDK）和 #1163（OpenCode）推动，架构向“可插拔 SDK”演进  
- **Web 通道替代方案**：#1273 提供完整实现参考，可能催生官方轻量前端  
- **持久化记忆增强**：#1256 引入 mem0 + Qdrant/Neo4j 图记忆，满足长期上下文需求  
- **安全策略引擎**：#1380 集成 agentsh，强化容器内命令/文件访问控制  

> 预计下一版本将围绕 **“多模型支持” + “部署灵活性”** 展开。

---

## 7. 用户反馈摘要

- **满意点**：  
  - “NanoClaw 是出色的工具”（#1273），尤其在 messenger 集成上表现稳定  
  - 对 `/remote-control` 功能高度认可，解决 host 级操作痛点（#1072）

- **痛点与诉求**：  
  - “仅支持 messenger 操作限制了教学使用” → 需 Web UI（#1273）  
  - “企业已有其他 AI 提供商，无法迁移全部工作流” → 需多后端支持（#1163）  
  - “新建 group 后 agent 无指令，行为不可预测” → 急需修复 CLAUDE.md 生成逻辑（#1390/#1391）

---

## 8. 待处理积压

| 类型 | ID | 标题 | 积压天数 | 状态 |
|------|----|------|--------|------|
| Issue | #1163 | 支持 OpenCode 替代/并行 Claude Code | 9 天 | 未响应，高价值 |
| PR | #850 | 通道无关附件接口与下载管道 | 17 天 | Needs Review，架构关键 |
| PR | #1098 | 消息时间戳包含星期信息 | 10 天 | Needs Review，影响上下文准确性 |
| Issue | #1407 | 添加 Telegram emoji reaction MCP 工具 | 1 天 | 新提出，但需求明确 |

> **建议维护者优先处理**：#850（附件标准化）、#1163（多 AI 支持讨论）、#1390/#1391（基础功能缺陷）

---

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
活跃贡献与功能创新强劲，但**技能分支维护滞后**和**基础流程缺陷**可能影响用户体验。建议加强自动化合并策略与 CLAUDE.md 初始化逻辑。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

IronClaw 在 2026-03-25 继续保持高活跃度，24 小时内产生 **49 条 PR 更新**（含 15 条合并/关闭）和 **14 条 Issue 更新**（9 新开，5 关闭），显示出核心团队与社区贡献者的密集协作。项目正集中推进多租户架构、安全加固与 WASM 扩展支持等关键方向，技术债清理与性能优化同步进行。尽管无新版本发布，但 staging 分支已通过 CI 自动推进至新 promote 节点（#1627），为下一版本奠定基础。

---

## 2. 版本发布

**无新版本发布**。当前开发重点仍集中在 staging 环境的功能集成与稳定性验证，预计近期将基于 `staging-promote/59014516-23505370929` 节点发布正式版本。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显著推进了核心架构演进：

- **#1625（已合并）**：修复 Web 网关启动时的 owner-scoped 身份隔离问题，确保 E2E 测试中 stderr 错误可见性，提升调试体验（[链接](https://github.com/nearai/ironclaw/pull/1625)）。
- **#1592（已合并）**：优化审批线程解析性能，解决 UUID 重复解析与锁竞争问题（对应 Issues #1488、#1489），降低高并发下延迟（[链接](https://github.com/nearai/ironclaw/pull/1592)）。
- **#1602（已合并）**：修复通过代理刷新托管 OAuth 令牌的逻辑，增强企业部署场景下的身份验证可靠性（[链接](https://github.com/nearai/ironclaw/pull/1602)）。
- **#1627（已合并）**：自动 promotion 将 staging 批量变更（含 82822d7b）提升至 promote 分支，标志一批功能进入预发布阶段（[链接](https://github.com/nearai/ironclaw/pull/1627)）。

整体来看，项目在**多租户隔离**（#1614）、**安全策略**（#1617）、**WASM 运行时稳定性**（#1619、#1621）等方向取得实质性进展。

---

## 4. 社区热点

**最活跃讨论集中于多租户与企业级功能需求**：

- **#1610（SSO/OIDC 认证）**：@ilblackdragon 提出支持 Google、Okta 及通用 OIDC 提供商的 SSO 登录，直指企业 adoption 关键障碍（[链接](https://github.com/nearai/ironclaw/issues/1610)）。该 Issue 虽无评论，但关联 PR #1626 已实现 DB 用户管理，为 SSO 铺路。
- **#1607（Workspace 实体化）**：呼吁将隐式用户隔离升级为显式 workspace 模型，支持跨 workspace 共享与成员管理（P1 优先级）（[链接](https://github.com/nearai/ironclaw/issues/1607)）。
- **#1584（WeChat 插件需求）**：社区成员 @think-in-universe 提出为 IronClaw 集成微信通道，反映对本土化通信渠道的强烈需求（👍2，评论 3）（[链接](https://github.com/nearai/ironclaw/issues/1584)）。

这些议题共同指向 IronClaw 从“个人 AI 助手”向“企业级协作平台”的战略转型。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| **高** | #1629 | Bedrock Converse API 在缺少 `toolConfig` 时因 `toolUse`/`toolResult` 块报错 | 新开，**无 fix PR**（[链接](https://github.com/nearai/ironclaw/issues/1629)） |
| **中** | #846 | `ironclaw onboard` 报数据库保存失败，但主程序可正常启动 | 长期未解，可能涉及初始化流程竞态（[链接](https://github.com/nearai/ironclaw/issues/846)） |
| **中** | #1611 | Docker Sandbox Worker 因空工具响应循环耗尽 50 次迭代限制 | 用户反馈本地 Ollama 模型兼容性问题（[链接](https://github.com/nearai/ironclaw/issues/1611)） |

> 注：#1538（Microsoft Defender 误报）已关闭，疑似误报已缓解。

---

## 6. 功能请求与路线图信号

以下功能请求已获得对应 PR 支持，极可能纳入下一版本：

- ✅ **DB 用户管理**（#1605）：由 #1626 实现，支持注册、令牌与邀请流程。
- ✅ **多租户隔离 Phase 2–4**（#59）：由 #1614 完成数据库作用域隔离。
- ✅ **RBAC 与 Workspace 模型**（#1608、#1607）：虽无直接 PR，但 #1626 和 #1614 构建了其基础数据层。
- 🔄 **WASM 安全策略**：#1617 引入 outbound trust policy，为扩展安全提供框架。

此外，**#1622（NEAR Intents WASM 工具）** 显示项目正积极集成区块链能力，拓展应用场景。

---

## 7. 用户反馈摘要

- **痛点**：  
  - 企业用户强烈呼吁摆脱 API token-only 认证（#1610），现有方式阻碍 SSO 集成。  
  - 开发者遭遇 Bedrock API 工具调用校验严格性问题（#1629），影响 AWS 生态集成。  
  - 本地模型（如 Ollama）空响应导致 worker 崩溃（#1611），暴露容错机制不足。

- **满意点**：  
  - 社区赞赏 OpenClaw 微信插件先行（#1584），期待 IronClaw 快速跟进。  
  - 安全修复（如 #1590 防跨通道劫持）获隐性认可，体现项目对安全的重视。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 说明 |
|--------|------|--------|------|
| #59 | Issue | >40 天 | “Consider multi tenancy” 虽有关联 PR，但完整多租户 UX 仍未闭环 |
| #846 | Issue | >15 天 | `onboard` 数据库错误影响新用户首次体验，需优先排查 |
| #1557 | PR | >3 天 | “Unified Execution Engine v2” 大型重构尚未合并，需核心团队 review |

> 建议维护者重点关注 #846（用户体验阻塞）与 #1557（架构升级关键路径）。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 明确路线图 + 安全/企业功能并进，社区诉求响应及时，仅少量关键 Bug 待闭环。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-25）

---

## 1. 今日速览

LobsterAI 在 2026-03-25 继续保持高活跃度，社区与开发团队互动频繁。过去24小时内共产生 **24 条新 Issue**（全部为新增，无关闭），**50 条 PR 更新**（26 条待合并，24 条已合并/关闭），显示出强烈的用户反馈需求和积极的代码迭代节奏。尽管无新版本发布，但核心功能模块（如 Cowork 会话、MCP 集成、性能优化）持续获得实质性改进。项目整体处于快速演进阶段，技术债治理与用户体验优化并重。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v2026.3.24`，用户反馈集中在该版本的稳定性与功能兼容性问题。

---

## 3. 项目进展

今日有 **24 条 PR 被合并或关闭**，重点推进了以下方向：

- **Cowork 会话体验增强**：新增消息批量删除功能（#772）、文件浏览面板（#773）、图片附件缩略图预览（#771），显著提升多模态协作效率。
- **性能优化**：通过为 `MarkdownContent` 添加 `React.memo`（#736、#770）和引入虚拟滚动（#764），有效缓解长对话卡顿与白屏问题。
- **国际化与稳定性修复**：替换硬编码中文字符串为 i18n 键值（#726），修复 Windows 开机自启窗口焦点问题（#690）。
- **新模型支持**：集成 GitHub Copilot 认证（#707）和 Novita AI 提供商（#766），扩展 LLM 生态兼容性。
- **配置与任务管理优化**：修复排程任务重复创建问题（#760 对应 #758）、优化 API 格式自动检测（#762）。

> 整体项目在 **协作效率、渲染性能、多模型支持** 三个维度取得实质性进展。

---

## 4. 社区热点

以下 Issues 引发最多讨论，反映用户核心痛点：

- **#703 更新缓慢问题**（4 评论）：Windows 用户从 `2026.3.17` 升级至 `2026.3.22` 时卡在 30%~85% 进度，耗时超 2 分钟，疑似网络或增量更新机制缺陷。
- **#728 MCP 配置无法调用**（4 评论）：用户正确配置 MCP 服务后仍提示“0 tools”，无法触发工具调用，涉及 MCP 桥接逻辑或权限同步问题。
- **#691 钉钉机器人重复回复**（3 评论）：钉钉集成场景下 AI 回复两条消息，可能与消息去重或 webhook 回调机制有关。
- **#751 钉钉机器人响应中断**（2 评论）：新安装用户遭遇 `fetch failed` 错误，日志显示 OpenClaw 网关通信异常，影响基础可用性。

> 用户迫切希望解决 **第三方集成稳定性**（钉钉/微信）与 **MCP 工具调用失效** 两大关键路径问题。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 **高** | #751 钉钉机器人无法聊天 | 新用户安装后完全不可用，`fetch failed` 阻断核心功能 | ❌ 无 |
| 🔴 **高** | #734 删除运行中会话未真正 abort | 后台任务继续执行，存在资源泄漏与副作用风险 | ❌ 无 |
| 🟠 **中** | #775 排程任务重启后重复创建 | 缺乏幂等性检查，导致任务爆炸性增长 | ✅ #760 已修复部分 |
| 🟠 **中** | #763 关闭的 skills 仍可被调用 | 状态同步失效，影响用户控制预期 | ❌ 无 |
| 🟠 **中** | #743 断网恢复后无法中断 AI 回复 | 发送按钮未切换为停止按钮，交互逻辑缺陷 | ❌ 无 |
| 🟡 **低** | #761 网页端与 APP 端积分不一致 | 数据同步延迟，影响用户体验一致性 | ❌ 无 |

> 建议优先处理 **#751** 和 **#734**，二者直接影响核心功能可用性与系统安全性。

---

## 6. 功能请求与路线图信号

用户明确提出的新需求包括：

- **语音输入支持**（#722）：“打字太多太费劲”，指向无障碍与效率场景。
- **MCP 服务调用指南**（#728、#724）：非技术用户难以理解 MCP 配置生效机制，需文档或 UI 引导。
- **聊天记录导出**（已由 #755 实现）：用户强烈需求归档能力，PR 已合并，预计下版本上线。
- **自动检测 API 格式**（#762 已实现）：减少用户配置错误，提升易用性。

> 结合 PR 动态，**语音输入**、**MCP 可视化调试工具**、**更细粒度权限控制** 可能成为下一版本重点。

---

## 7. 用户反馈摘要

- **满意点**：Cowork 协作模式、多模型切换灵活性、记忆系统设计理念获认可。
- **痛点集中**：
  - 第三方机器人（钉钉/微信）集成不稳定，错误提示不友好（如 `fetch failed` 无排查指引）。
  - MCP 配置“黑盒”感强，用户无法确认是否生效。
  - 长对话性能差，滚动卡顿影响使用信心。
  - 更新机制不透明，进度卡顿时无反馈。
- **典型场景**：企业用户通过钉钉机器人接入 LobsterAI 处理日常任务，但对重复消息和连接中断极为敏感。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者关注：

- **#568 英文版本适配问题**（创建于 2026-03-20，最后更新 2026-03-24）：UI 文本未完全国际化，影响海外用户体验。
- **#688 “BUG？”**（创建于 2026-03-23）：仅附截图无描述，但可能涉及严重界面异常，需主动跟进。
- **#692 开机自启失效**（创建于 2026-03-23）：虽已有 #690 修复窗口焦点，但未验证自启注册逻辑是否完整。

> 建议对 **#568** 和 **#688** 主动联系用户补充信息，避免遗漏关键回归问题。

---

**报告生成时间**：2026-03-25  
**数据来源**：[LobsterAI GitHub Repository](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目日报（2026-03-25）**  
*基于 GitHub 数据生成 | 数据周期：2026-03-24 至 2026-03-25*

---

### 1. 今日速览  
TinyClaw 项目在今日展现出**高活跃度与强工程执行力**：过去24小时内无新增 Issue，但完成了 **8 个 PR 的合并/关闭**，并发布了 **3 个连续版本（v0.0.17–v0.0.19）**，体现出团队聚焦于稳定性修复与核心功能迭代。整体开发节奏紧凑，以“小步快跑”方式推进系统可靠性与用户体验优化，社区反馈通道保持静默，表明当前版本运行平稳。

---

### 2. 版本发布  

#### 🔹 v0.0.19（最新）  
- **Bug Fixes**  
  - 修复定时消息未持久化至 `agent_messages` 表的问题，确保调度内容可检索（#259）  
  - 解决 `invoke` 流程中 `signalDone` 宽限期竞态条件，避免子进程被提前终止导致异常拒绝（#258）  
> ✅ 无破坏性变更，建议所有用户升级以保障消息一致性与任务稳定性。

#### 🔹 v0.0.18  
- **Bug Fixes**  
  - 修复 `handleTeamResponse` 中重复响应流问题，消除团队协作消息输出冗余（8dd7f42）  
> ✅ 纯修复版本，无 API 或行为变更。

#### 🔹 v0.0.17（功能里程碑）  
- **Highlights**  
  - **新增技能管理器（Skills Manager）**：支持代理动态搜索、安装技能包，实现运行时能力扩展（#254）  
  - **Telegram 通道重构**：从 `node-telegram-bot-api` 迁移至现代框架 `grammY`，提升连接稳定性与可维护性  
> ⚠️ 注意：Telegram 集成方式变更，需检查自定义配置兼容性；技能管理器为实验性功能，建议测试后部署。

> 📦 所有版本均通过 PR 合并发布，无热修复或紧急回滚记录，发布流程健康。

---

### 3. 项目进展  
今日合并的 8 个 PR 集中优化了**消息系统可靠性、代理生命周期管理与用户体验一致性**，标志着 TinyClaw 从“功能实现”向“生产就绪”过渡：

- **消息持久化机制重构**（#250, #256, #259）：实现用户消息即时写入 `agent_messages` 表，消除 UI 显示延迟，支持乐观更新与流式响应，显著提升交互实时性。  
- **子进程生命周期强化**（#251, #258）：引入基于事件的超时终止机制（30秒宽限期），防止代理子进程僵死导致队列阻塞，增强系统鲁棒性。  
- **SSE 事件补全**（#257）：修复主动消息（proactive messages）无法实时推送至 Telegram 的问题，保障跨通道消息可达性。  
- **仪表盘状态准确性修复**（#255）：修正代理会话面板中“排队/处理中”状态误判问题，提升运维可观测性。  

> 项目整体向前迈出关键一步：**消息系统完成从“最终一致”到“近实时一致”的演进**，为多代理协作与高并发场景打下基础。

---

### 4. 社区热点  
**无活跃讨论或高互动 Issue/PR**。过去24小时 Issue 更新为 0，PR 虽密集合并但均无评论或点赞（👍: 0），表明当前开发由核心团队主导，社区处于“静默验证”阶段。建议后续通过文档更新或示例引导用户反馈。

---

### 5. Bug 与稳定性  
所有已识别问题均已通过 PR 修复并随版本发布，**无未修复高严重性 Bug**：

| 问题描述 | 严重程度 | 修复状态 | 链接 |
|--------|--------|--------|------|
| 定时消息丢失（未落盘） | 高 | ✅ 已修复（#259） | [PR #259](https://github.com/TinyAGI/tinyagi/pull/259) |
| 子进程竞态导致任务异常终止 | 高 | ✅ 已修复（#258） | [PR #258](https://github.com/TinyAGI/tinyagi/pull/258) |
| 主动消息无法推送至 Telegram | 中 | ✅ 已修复（#257） | [PR #257](https://github.com/TinyAGI/tinyagi/pull/257) |
| 仪表盘状态显示错误 | 中 | ✅ 已修复（#255） | [PR #255](https://github.com/TinyAGI/tinyagi/pull/255) |

> 系统稳定性显著提升，建议监控 v0.0.19 上线后子进程退出行为与消息延迟指标。

---

### 6. 功能请求与路线图信号  
虽无显式功能请求 Issue，但从 PR 内容可推断未来方向：

- **动态技能生态**：`skills-manager` 的引入（#254）暗示将向“可插拔代理能力市场”演进，可能支持第三方技能注册与版本管理。  
- **多通道统一事件总线**：SSE 事件补全（#257）与流式响应（#256）为构建统一消息分发层铺路，支持更多异步通道（如 Slack、Discord）。  
- **代理会话治理 API**：手动终止会话功能（#251）预示将开放更细粒度的代理生命周期控制接口。  

> 预计下一版本将围绕**技能生态标准化**与**通道抽象层**展开。

---

### 7. 用户反馈摘要  
**无直接用户评论或 Issue 反馈**。但通过修复内容反推，可识别以下隐含痛点：

- 用户遭遇“消息发送后不显示”问题 → 推动即时持久化（#250, #256）  
- 团队协作中出现重复回复 → 触发响应流去重（v0.0.18）  
- 主动通知延迟或丢失 → 促使 SSE 事件机制完善（#257）  

> 用户核心诉求：**消息可见性、实时性与跨通道一致性**，当前修复已有效响应。

---

### 8. 待处理积压  
**无长期未响应 Issue 或 PR**。所有 PR 均在创建后 24 小时内合并，Issue 数量为零，维护响应效率极高。建议继续保持此节奏，并适时开放社区贡献通道以扩大生态。

---  
**健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
*高开发活跃度 + 零积压 + 快速迭代 + 稳定性优先 → 项目处于良性演进轨道*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-25）

---

## 1. 今日速览

Moltis 项目在过去24小时内表现出**高活跃度**，共处理 18 条 Pull Requests（其中 17 条已合并/关闭）和 10 条 Issues（6 条已关闭）。开发重心集中在**核心稳定性修复、多通道支持增强与本地 LLM 性能优化**上，尤其是系统提示工程、Docker 环境兼容性及工具链健壮性方面取得显著进展。社区贡献持续活跃，@penso 成为当日主要贡献者，主导了多项关键修复与功能实现。

---

## 2. 版本发布

**无新版本发布**。当前仍处于功能迭代与问题修复阶段，未触发正式版本发布流程。

---

## 3. 项目进展

今日共 **17 个 PR 被合并或关闭**，推动项目在多个关键方向取得实质性进展：

- **系统提示优化**：通过 [PR #476](https://github.com/moltis-org/moltis/pull/476) 将 `datetime` 从系统提示中移出并改为动态注入，显著提升本地 LLM（如 Ollama、LM Studio）的 KV 缓存命中率，降低推理延迟。
- **Docker 环境完善**：[PR #479](https://github.com/moltis-org/moltis/pull/479) 向 Docker 镜像添加 Node.js 与 npm，使 MCP 服务器（多数为 npm 包）可直接运行，解决了长期存在的部署障碍。
- **技能管理健壮性提升**：[PR #484](https://github.com/moltis-org/moltis/pull/484) 修复技能名称校验失败导致静默丢失的问题，引入 `slug` 作为回退机制，确保 `skills-manifest.json` 完整性。
- **网络与协议支持增强**：
  - [PR #481](https://github.com/moltis-org/moltis/pull/481) 修复 IPv6 地址绑定崩溃问题（原 Issue #447）。
  - [PR #482](https://github.com/moltis-org/moltis/pull/482) 为 Matrix 通道添加完整媒体支持（图像、语音 STT、文件上传），对齐 Telegram 功能水平。
- **配置导入体验改进**：[PR #478](https://github.com/moltis-org/moltis/pull/478) 保留 OpenClaw 导入过程中的 TOML 注释模板，避免用户配置说明被覆盖。
- **工具链容错性增强**：[PR #480](https://github.com/moltis-org/moltis/pull/480) 使 cron 工具能自动解析 LLM 输出的字符串化 JSON 或扁平化参数，兼容 Qwen3-Coder 等非标准输出模型。

> 整体来看，项目在**生产可用性、多模态交互支持与开发者体验**三个维度均有明显推进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#176](https://github.com/moltis-org/moltis/issues/176) — *Add datetime to system prompt context*
- **评论数：14** | **👍：1** | 最后更新：2026-03-24
- 尽管该 Issue 提出将 datetime 加入系统提示，但今日合并的 [PR #476](https://github.com/moltis-org/moltis/pull/476) 实际上采取了**相反但更优的策略**：将 datetime **移出**系统提示，改为运行时动态注入，以解决 KV 缓存失效问题。
- **社区诉求分析**：用户关注时间上下文准确性，但开发者通过架构优化实现了更高性能与一致性的平衡，体现了对底层机制深入理解后的技术决策。

### ⚠️ 高关注度 Bug：[#414](https://github.com/moltis-org/moltis/issues/414) — *z.ai does not work out of the box and manual gives network errors*
- **评论数：7** | 作者：@najef1979-code
- 反映第三方集成（z.ai）开箱即用失败，伴随网络错误。虽无直接修复 PR，但近期对 HTTP 层（[PR #465](https://github.com/moltis-org/moltis/pull/465)）和 MCP 超时配置（[PR #419](https://github.com/moltis-org/moltis/pull/419)）的改进可能间接缓解此类问题。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 高 | [#485](https://github.com/moltis-org/moltis/issues/485) | 内置工具生成无效 JSON Schema，导致 strict 模式提供商（如 OpenAI）拒绝请求 | **无 fix PR**，需紧急处理 |
| 🟠 中 | [#414](https://github.com/moltis-org/moltis/issues/414) | z.ai 集成网络错误，无法开箱即用 | 未修复，需进一步诊断 |
| 🟢 低 | [#430](https://github.com/moltis-org/moltis/issues/430) | Agent 无法使用 cron 工具 | 已由 [PR #480](https://github.com/moltis-org/moltis/pull/480) 修复 |
| 🟢 低 | [#447](https://github.com/moltis-org/moltis/issues/447) | IPv6 绑定导致崩溃 | 已由 [PR #481](https://github.com/moltis-org/moltis/pull/481) 修复 |

> 建议优先处理 #485，因其影响核心工具调用可靠性。

---

## 6. 功能请求与路线图信号

- **Tiered Memory Recall 重构**：[Issue #483](https://github.com/moltis-org/moltis/issues/483) 提出重新实现分层记忆召回机制，解决 MEMORY.md 前端截断导致新记忆丢失问题。该需求源自已关闭的 [PR #253](https://github.com/moltis-org/moltis/pull/253)，表明社区对**长期记忆一致性**有强烈需求，可能成为下一版本重点。
- **Multi-Agent 架构落地**：[PR #34](https://github.com/moltis-org/moltis/pull/34) 虽已关闭，但其设计文档仍具参考价值。结合 [Issue #453](https://github.com/moltis-org/moltis/issues/453) 对“管理代理过载”的担忧，预示多代理系统需优化资源调度策略。
- **macOS 发布签名支持**：[PR #422](https://github.com/moltis-org/moltis/pull/422) 已开启，为正式 macOS 应用分发铺路，反映项目向**桌面端产品化**迈进。

---

## 7. 用户反馈摘要

- **痛点**：
  - 技能名称含特殊字符时被静默忽略（[#452](https://github.com/moltis-org/moltis/issues/452)），影响自定义技能部署。
  - OpenClaw 导入后配置模板注释丢失（[#458](https://github.com/moltis-org/moltis/issues/458)），增加新用户学习成本。
  - 部分 LLM（如 Qwen3-Coder）输出格式不规范，导致工具调用失败（[#430](https://github.com/moltis-org/moltis/issues/430)）。
- **满意点**：
  - Docker 镜像逐步完善，MCP 支持趋于开箱即用（[#118](https://github.com/moltis-org/moltis/issues/118) 已闭环）。
  - 系统提示优化显著提升本地 LLM 响应速度（社区隐含认可 [PR #476]）。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | [#176](https://github.com/moltis-org/moltis/issues/176) | Add datetime to system prompt context | 2026-02-17 | OPEN | 虽已有技术替代方案，但需官方回应是否采纳原提案 |
| Issue | [#414](https://github.com/moltis-org/moltis/issues/414) | z.ai does not work out of the box | 2026-03-11 | OPEN | 超 10 天未响应，需排查网络/认证逻辑 |
| Issue | [#485](https://github.com/moltis-org/moltis/issues/485) | Built-in tools generate invalid JSON Schema | 2026-03-24 | OPEN | **新报高危 Bug**，建议 48 小时内评估 |
| PR | [#422](https://github.com/moltis-org/moltis/pull/422) | fix(macos): configure release signing and notarization | 2026-03-12 | OPEN | 超 10 天未合并，影响 macOS 发布流程 |

> 建议维护者优先处理 #485 与 #422，前者关乎核心功能稳定性，后者阻碍正式版本发布。

---  
**报告生成时间**：2026-03-25  
**数据来源**：[Moltis GitHub Repository](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

CoPaw 项目在 2026-03-25 继续保持高活跃度，24 小时内共处理 **50 条 Issues**（新开/活跃 39 条，关闭 11 条）和 **50 条 Pull Requests**（合并/关闭 33 条，待合并 17 条），社区参与度显著。项目正式发布了 **v0.2.0 版本**，引入多项核心功能增强。尽管新功能快速迭代，但用户反馈中暴露出多个影响体验的稳定性问题，尤其在多智能体、上下文压缩和通道集成方面需重点关注。

---

## 2. 版本发布

### 🎉 v0.2.0 正式发布

**核心新增功能：**
- **智能体间通信支持**：新增 `copaw agents` 和 `copaw message` CLI 命令，支持列出智能体、向频道推送消息及智能体间请求通信（[#1959](https://github.com/agentscope-ai/CoPaw/pull/1959), [#2161](https://github.com/agentscope-ai/CoPaw/pull/2161)）。
- **内置 QA 智能体**：新增面向 CoPaw 自身知识问答的预设智能体，集成源码索引与文档检索能力（[#2189](https://github.com/agentscope-ai/CoPaw/pull/2189)）。
- **工具增强**：`grep_search`、`glob_search` 和 `browser_use` 工具被加入 QA Agent 预设，提升本地与在线信息检索能力（[#2211](https://github.com/agentscope-ai/CoPaw/pull/2211)）。
- **模型容错机制**：引入自动模型回退（fallback）与冷却机制，应对 API 限流或服务错误（[#2199](https://github.com/agentscope-ai/CoPaw/pull/2199)）。

**其他重要更新：**
- 统一技能管理 API，支持为新建智能体自定义启用/禁用内置技能（[#2219](https://github.com/agentscope-ai/CoPaw/pull/2219)）。
- 修复心跳任务 cron 表达式解析问题（`0 6 * * *` 不再被误判无效）（[#2217](https://github.com/agentscope-ai/CoPaw/pull/2217)）。
- 移除 `litellm` 依赖，升级 `reme-ai` 至 0.3.1.3（[#2206](https://github.com/agentscope-ai/CoPaw/pull/2206)）。

> ⚠️ **迁移注意**：v0.2.0 对模型提供方接口和技能管理逻辑有调整，建议检查自定义技能与多模型配置兼容性。

---

## 3. 项目进展

今日共 **33 个 PR 被合并或关闭**，推动项目在多个方向取得实质性进展：

- **路由与调度优化**：引入本地判决路由 v1，替代固定启发式策略，提升任务分发灵活性（[#2144](https://github.com/agentscope-ai/CoPaw/pull/2144)）。
- **通道稳定性增强**：微信通道实现 QR 登录与消息投递稳定化（[#2123](https://github.com/agentscope-ai/CoPaw/pull/2123)）；修复钉钉 sessionWebhook 过期导致 cron 推送失败问题（[#2153](https://github.com/agentscope-ai/CoPaw/issues/2153) 相关修复进行中）。
- **用户体验改进**：统一 `/stop` 命令跨通道支持已进入开发阶段（[#1913](https://github.com/agentscope-ai/CoPaw/pull/1913), [#2067](https://github.com/agentscope-ai/CoPaw/pull/2067)），解决用户无法中断长任务痛点。
- **浏览器工具隔离**：实现多工作区浏览器状态与 Cookie 隔离，避免会话串扰（[#2131](https://github.com/agentscope-ai/CoPaw/pull/2131)）。

整体来看，项目正从“基础功能搭建”向“稳定性与可扩展性深化”过渡。

---

## 4. 社区热点

以下 Issues 引发社区高度关注，反映核心使用场景中的关键诉求：

| Issue | 讨论焦点 | 链接 |
|------|--------|------|
| #2097 | Docker 升级至 0.1.0 后 skills 与 workspace 文件在控制面板不显示（尽管容器内存在） | [链接](https://github.com/agentscope-ai/CoPaw/issues/2097) |
| #2043 | 请求支持微信 ClawBot 频道集成（9 👍） | [链接](https://github.com/agentscope-ai/CoPaw/issues/2043) |
| #1974 | 上下文压缩导致任务中断与会话丢失，严重影响长流程体验 | [链接](https://github.com/agentscope-ai/CoPaw/issues/1974) |
| #2166 | 用户抱怨智能体缺乏自学习能力，“记吃不记打” | [链接](https://github.com/agentscope-ai/CoPaw/issues/2166) |

**分析**：用户强烈期望提升系统稳定性（尤其是文件系统与上下文管理）和智能体记忆能力，同时对微信生态集成有明确需求。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 问题 | 严重性 | 状态 | 相关 PR |
|------|--------|------|--------|
| #2218：主进程空闲时 CPU 占用 100%（忙轮询 epoll 循环） | 🔴 高（资源耗尽） | 🟡 未修复 | — |
| #1974：上下文压缩中断任务并丢失会话 | 🔴 高（功能阻断） | 🟡 未修复 | — |
| #2097：Docker 部署升级后文件不显示 | 🔴 高（数据不可见） | 🟡 未修复 | — |
| #2175：钉钉群聊多会话显示为同一会话 | 🟠 中（UI 混乱） | 🟡 未修复 | — |
| #2196：QQ 频道 + 千帆模型报错 400 | 🟠 中（通道兼容） | 🟡 未修复 | — |
| #2190：Windows 桌面端无停止按钮，任务无法终止 | 🟠 中（操作阻断） | 🟢 已有 PR ([#1913](https://github.com/agentscope-ai/CoPaw/pull/1913)) | ✅ |
| #2207：心跳 cron 表达式 `"0 6 * * *"` 被误判无效 | 🟡 低 | 🟢 已修复 ([#2217](https://github.com/agentscope-ai/CoPaw/pull/2217)) | ✅ |

> 💡 建议优先处理 #2218（CPU 占用）和 #1974（上下文压缩），二者直接影响系统可用性与核心体验。

---

## 6. 功能请求与路线图信号

用户提出的新需求中，以下具备较高优先级并被积极开发：

- **微信 ClawBot 支持**（#2043）：已有社区成员关注，且微信通道正在重构（[#2123](https://github.com/agentscope-ai/CoPaw/pull/2123)），预计下版本落地。
- **智能体自学习/记忆持久化**（#2166）：虽无直接 PR，但 #2215 提出“跳过摘要生成以节省 token 并保持任务连续性”，可视为优化方向。
- **前端图片展示**（#2220）：用户希望在对话窗口直接显示 AI 生成的图片，提升交互体验。
- **工具执行追踪**（#2216）：请求内置技能成功率、耗时等监控指标，利于优化。
- **Markdown 输入格式化**（#2214）：控制台输入 Markdown 格式损坏，影响技术文档交互。

**预测**：微信集成、工具追踪、前端富媒体支持有望纳入 v0.3.0 路线图。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “升级后 skills 全没了，控制面板看不到，但文件还在容器里” —— Docker 用户遭遇配置持久化断裂。
  - “让它记下方法，第二天照样从头试，根本没学会” —— 对智能体缺乏长期记忆表示失望。
  - “审批超时也不提示，一直干等” —— 工具调用流程缺乏反馈机制。
  - “只有创建机器人的用户能对话，其他人发消息没反应” —— 多用户权限控制存在缺陷。

- **满意点**：
  - “v0.2.0 的 QA Agent 回答很准确，能结合源码解释” —— 内置智能体实用性获认可。
  - “/stop 命令终于要支持了，救星！” —— 对中断机制改进表示期待。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

| Issue | 类型 | 创建时间 | 说明 |
|------|------|--------|------|
| #430 | 功能清单 | 2026-03-03 | “Help Wanted: Open Tasks” 列表，含 P0-P2 优先级任务，需分配负责人并推进 |
| #1059 | 协议支持 | 2026-03-09 | 请求支持 ACP（Agent Communication Protocol），实现与 IDE 编码代理双向集成，尚未有对应 PR |
| #1932 | 通道限制 | 2026-03-20 | 钉钉机器人聊天达一定长度后崩溃（50MB buffer limit），影响生产环境使用 |

> 📌 建议：为 #430 设立专项小组，推动社区协作；对 #1059 评估技术可行性，明确是否纳入路线图。

--- 

**报告生成时间**：2026-03-25  
**数据来源**：GitHub CoPaw 仓库公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-25）

---

## 1. 今日速览

ZeptoClaw 在 2026-03-24 表现出极高的开发活跃度，共处理 **29 条 PR 更新**（21 条已合并/关闭，8 条待合并）和 **5 条 Issues 更新**（3 条新开，2 条已关闭）。项目维护者 @qhkm 主导了多项关键修复，同时社区贡献者 @stuartbowness 和 @rafaellin 积极参与功能增强与问题反馈。连续发布两个新版本（v0.8.1 与 v0.8.2），表明项目处于快速迭代与稳定性优化阶段。整体健康度优秀，响应迅速，技术债控制良好。

---

## 2. 版本发布

### 🔹 v0.8.2（最新）
- **类型**：维护性更新（依赖升级）
- **关键变更**：
  - 升级 GitHub Actions 依赖：`Swatinem/rust-cache` 从 2.8.2 → 2.9.1（[#412](https://github.com/qhkm/zeptoclaw/pull/412)）
  - 升级 `docker/metadata-action` 从 5.10.0 → 6.0.0（[#382](https://github.com/qhkm/zeptoclaw/pull/382)）
  - 升级开发依赖 `@types/node` 等前端工具链
- **影响**：无破坏性变更，纯 CI/CD 和依赖维护，建议用户无需主动迁移。

### 🔹 v0.8.1
- **类型**：功能增强 + 安全修复
- **关键变更**：
  - **安全加固**：修复嵌入式 ZeptoAgent 工具执行漏洞（[#402](https://github.com/qhkm/zeptoclaw/pull/402)）
  - **功能增强**：
    - 添加 conformance fixtures 支持
    - 改进 `edit_file` 工具的模糊匹配逻辑与输出截断机制（[#398](https://github.com/qhkm/zeptoclaw/pull/398)）
  - **Telegram 通道优化**：提升消息处理稳定性与安全性
- **影响**：推荐所有用户升级，尤其涉及敏感操作或生产环境部署。

---

## 3. 项目进展

今日共 **21 条 PR 被合并或关闭**，显著推进了核心功能与稳定性：

- ✅ **Telegram 通道重大改进**：
  - 修复长消息被静默丢弃问题，现支持自动分段发送（[#409](https://github.com/qhkm/zeptoclaw/pull/409)）
  - 解决并发消息下 typing 指示器竞态条件（[#418](https://github.com/qhkm/zeptoclaw/pull/418)）
  - 新增对照片与图像文档的支持（[#420](https://github.com/qhkm/zeptoclaw/pull/420)）
- ✅ **核心工具链修复**：
  - 修复 `edit_file` 模糊匹配中的字节范围映射错误与空字符串死循环问题（[#398](https://github.com/qhkm/zeptoclaw/pull/398)）
- ✅ **模型提供者系统修复**：
  - 修复合并 PR #407 后引入的模型发现回归问题，解决 OpenRouter 路由警告与运行时模型加载失败（[#417](https://github.com/qhkm/zeptoclaw/pull/417)）
- ✅ **文档与协作规范**：
  - 新增 Claude Code 会话的 PR 提交规范文档（[#421](https://github.com/qhkm/zeptoclaw/pull/421)），提升 AI 辅助开发一致性

> 项目整体向多通道稳定化、AI 工具链健壮性迈出关键一步。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 编号 | 类型 | 热度 | 链接 |
|------|------|------|------|
| #419 | Issue（Open） | ⭐ 新报告，影响用户体验 | [查看](https://github.com/qhkm/zeptoclaw/issues/419) |
| #415 | Issue（Open） | ⭐ 并发场景下的关键 UX 缺陷 | [查看](https://github.com/qhkm/zeptoclaw/issues/415) |
| #420 | PR（Open） | 🔥 直接响应 #419，社区驱动修复 | [查看](https://github.com/qhkm/zeptoclaw/pull/420) |
| #417 | PR（Open） | 🔧 维护者主导的多问题聚合修复 | [查看](https://github.com/qhkm/zeptoclaw/pull/417) |

**分析**：  
社区对 **Telegram 通道的完整性**高度关注。用户 @stuartbowness 连续报告两个关键问题（照片丢弃、typing 竞态），并主动提交修复 PR，体现深度使用场景。维护者 @qhkm 快速响应，形成“问题-修复”闭环，展现高效协作模式。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否已有 Fix |
|--------|-------|------|-------------|
| 🔴 P1-critical | [#416](https://github.com/qhkm/zeptoclaw/issues/416) | `provider_name_for_model()` 错误解析带前缀模型 ID（如 `anthropic/claude-*`），导致 OpenRouter 路由失败与启动警告 | ✅ 已有 Fix（[#417](https://github.com/qhkm/zeptoclaw/pull/417)） |
| 🔴 P1-critical | [#403](https://github.com/qhkm/zeptoclaw/issues/403) | `edit_file` 模糊匹配存在字节映射错误与空字符串死循环 | ✅ 已修复（[#398](https://github.com/qhkm/zeptoclaw/pull/398)） |
| 🟠 High | [#419](https://github.com/qhkm/zeptoclaw/issues/419) | Telegram 照片消息被静默丢弃，无响应无报错 | ✅ 已有 Fix（[#420](https://github.com/qhkm/zeptoclaw/pull/420)） |
| 🟠 High | [#415](https://github.com/qhkm/zeptoclaw/issues/415) | 并发消息导致 typing 指示器错乱，用户体验受损 | ✅ 已有 Fix（[#418](https://github.com/qhkm/zeptoclaw/pull/418)） |

> 所有高优先级 Bug 均已进入修复流程，项目稳定性持续向好。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 状态 | 可能性评估 |
|--------|------|------|----------|
| **Telegram 多媒体支持** | [#419](https://github.com/qhkm/zeptoclaw/issues/419) + [#420](https://github.com/qhkm/zeptoclaw/pull/420) | 已提交 PR | ⭐⭐⭐⭐☆ 极可能纳入 v0.9 |
| **ACP（Agent Client Protocol）通道** | [#356](https://github.com/qhkm/zeptoclaw/pull/356) | 长期开放 PR，近期更新 | ⭐⭐⭐☆☆ 架构级功能，需进一步测试 |
| **社区交流平台建立** | [#397](https://github.com/qhkm/zeptoclaw/issues/397) | 已关闭（未明确方案） | ⭐☆☆☆☆ 需求存在，但优先级较低 |

> 多媒体通道扩展是当前最明确的功能演进方向，ACP 协议支持可能成为下一阶段架构亮点。

---

## 7. 用户反馈摘要

- **痛点**：
  - “配置 Qwen 与 ZeptoClaw 协同工作非常困难，缺乏成功案例指导”（[#397](https://github.com/qhkm/zeptoclaw/issues/397)）
  - “发送图片后 bot 毫无反应，一度以为功能不可用”（[#419](https://github.com/qhkm/zeptoclaw/issues/419)）
  - “长回复突然消失，体验断裂”（隐含于 [#409](https://github.com/qhkm/zeptoclaw/pull/409) 背景）

- **满意点**：
  - 维护者响应迅速，问题通常在 24 小时内得到修复或 PR 回应
  - 文档逐步完善（如新增 Claude PR 规范），降低贡献门槛

- **使用场景**：
  - 用户尝试将 ZeptoClaw 与本地大模型（如 Qwen）集成，用于私有部署
  - 通过 Telegram 进行日常 AI 助手交互，依赖多媒体输入

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) | PR（feat） | 2026-03-13 | Open | **ACP 协议实现已停滞 11 天**，建议评估是否进入测试或合并流程 |
| [#414](https://github.com/qhkm/zeptoclaw/pull/414) | PR（fix） | 2026-03-24 | Open | Discord 文本附件修复未关联 Issue，需确认是否遗漏引用 |

> 建议维护者优先推进 ACP 通道的集成测试，该功能对项目生态扩展具有重要意义。

---  
**报告生成时间**：2026-03-25  
**数据来源**：GitHub Repository `qhkm/zeptoclaw`

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-25）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度中等，无新 Issue 提交或新版本发布，但社区贡献者持续推进 UI 层重构工作。共合并/关闭 3 个 Pull Request，均围绕用户界面现代化与组件解耦展开，体现出项目正系统性优化前端架构。无新增 Bug 报告或功能请求，维护节奏稳定，技术债清理成效显著。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
今日共合并/关闭 3 个重要 PR，标志着项目在用户体验与代码可维护性方面取得关键进展：

- **#24 [CLOSED] Account UI redesign popover**（[链接](https://github.com/gaoyangz77/rivonclaw/pull/24)）  
  重构账户入口交互逻辑，将原有 `/account` 页面导航替换为头像点击触发的 Popover 下拉菜单。登录态展示用户信息卡片（邮箱、注册时间、订阅计划）与登出按钮；未登录态提供引导式登录/注册入口。样式统一采用 `theme-menu-popup` 设计规范，支持深色模式，提升一致性。

- **#20 [CLOSED] UI Migration: Component Refactor + Theme Separation + Skills Page**（[链接](https://github.com/gaoyangz77/rivonclaw/pull/20)）  
  完成核心 UI 组件抽离与主题系统解耦：将侧边栏底部操作按钮（主题切换、语言切换、帮助链接、用户头像）封装为 `<BottomActions>` 组件；集中管理所有 SVG 图标至 `icons.tsx`，引入 `Icon` 基类提升复用性；同步完成 Skills 页面迁移，为后续功能扩展奠定基础。

- **#23 [CLOSED] feat(ui): redesign auth modal & account page**（[链接](https://github.com/gaoyangz77/rivonclaw/pull/23)）  
  全面升级认证流程体验：登录/注册模态框采用药丸式标签切换、密码可见性切换、强度指示条、紧凑型验证码行、输入长度限制及隐私条款链接；账户页采用分卡片布局，对齐设置页风格，强化信息层级与视觉一致性。

> 综合来看，三项 PR 均出自 @chinayin，聚焦于前端架构标准化与用户体验精细化，推动项目向模块化、可维护、高一致性的方向迈进。

---

### 4. 社区热点  
无活跃讨论的 Issues 或 PR。过去24小时无新评论或点赞互动，社区反馈暂时沉寂。

---

### 5. Bug 与稳定性  
无新报告的 Bug、崩溃或回归问题。当前无已知高优先级稳定性风险。

---

### 6. 功能请求与路线图信号  
虽无显式功能请求 Issue，但从已合并 PR 可推断出项目近期路线图重点：  
- **UI/UX 统一化**：通过组件抽离、主题分离、交互标准化（如 Popover、Modal、Card 布局）构建设计系统雏形。  
- **认证流程优化**：增强安全性（密码强度、验证码）与转化率（自动注册未知邮箱），暗示产品正关注用户增长与留存。  
- **国际化准备**：`LangToggle` 组件的引入表明多语言支持已在技术层面铺路，可能为后续全球化部署做准备。

建议维护者关注这些方向是否需配套文档更新或开发者指南补充。

---

### 7. 用户反馈摘要  
无新增用户评论或反馈内容。现有 PR 描述均为技术实现细节，未体现终端用户直接声音。建议后续通过 Issue 模板或社区渠道主动收集使用场景与痛点。

---

### 8. 待处理积压  
当前无长期未响应的重要 Issue 或 PR。所有近期提交均已及时处理，项目响应效率高，维护状态健康。

> **健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
> 技术迭代有序，代码质量提升明显，社区虽静默但无阻塞问题，整体处于稳健演进阶段。建议加强用户侧反馈机制建设，以平衡技术驱动与需求驱动的发展节奏。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*