# OpenClaw 生态日报 2026-03-11

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-11 00:55 UTC

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

# OpenClaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区活跃度处于高位：共产生 **500条 Issues 更新**（新开/活跃 364，关闭 136）和 **500条 PR 更新**（待合并 364，已合并/关闭 136），显示出强烈的开发参与和问题反馈意愿。尽管无新版本发布，但多个关键回归 Bug 被集中报告，主要集中在 **v2026.3.7 至 v2026.3.8 版本升级后的兼容性问题**，涉及工具调用、认证、Cron 任务执行等核心功能。社区对国际化（i18n）、xAI/Grok 支持、Agent Teams 并行协调等长期功能需求持续关注。

---

## 2. 版本发布

**无新版本发布**。  
上一个稳定版本仍为 `v2026.3.8`，但该版本已暴露出多个严重回归问题（见第5节），建议用户谨慎升级或回退至 `v2026.3.7` 暂避风险。

---

## 3. 项目进展

今日有多个重要 PR 被合并或推进，主要集中在 **稳定性修复与工具链增强**：

- ✅ **#38812**：为连续工具调用添加安全阀机制，防止因 API 错误导致无限重试循环（[链接](https://github.com/openclaw/openclaw/pull/38812)）
- ✅ **#42580**：为 `edit` 工具添加 `old_text`/`new_text` 参数别名支持，提升与 Qwen 等模型的兼容性（[链接](https://github.com/openclaw/openclaw/pull/42580)）
- ✅ **#40574**：为 `write` 工具引入 `append` 模式，避免多会话并发写入时的数据丢失（[链接](https://github.com/openclaw/openclaw/pull/40574)）
- ✅ **#42595**：修复配置写入时不尊重 `commands.restart=false` 的问题（[链接](https://github.com/openclaw/openclaw/pull/42595)）
- 🔄 **#39496**（Feishu 插件大重构）：包含流式卡片、日历集成、技能支持等，仍在 review 中，预计将显著提升企业 IM 集成体验（[链接](https://github.com/openclaw/openclaw/pull/39496)）

整体来看，项目正积极应对近期版本引入的稳定性问题，同时在企业通信插件（如飞书、Matrix）方向持续投入。

---

## 4. 社区热点

以下 Issues 获得高关注度，反映用户核心诉求：

| Issue | 主题 | 评论数 | 关键诉求 |
|------|------|--------|--------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 国际化（i18n）与本地化支持 | 97 | 多语言支持是全球化部署刚需，社区已多次提议但官方资源不足 |
| [#27009](https://github.com/openclaw/openclaw/issues/27009) | 支持 OpenCode Go 订阅接入 | 21 | 用户希望快速集成高性价比开源模型（如 Kimi K2.5、GLM-5） |
| [#6872](https://github.com/openclaw/openclaw/issues/6872) | xAI（Grok）原生工具支持 | 12 | Grok 4.1 Fast 能力受限，需开放 `x_search`、`web_search` 等原生工具配置 |
| [#10010](https://github.com/openclaw/openclaw/issues/10010) | Agent Teams 并行代理协调 | 10 | 对标 Claude Code，实现多 Agent 协同工作流 |

> 💡 **分析**：用户需求从“基础功能可用”转向“高级能力扩展”，尤其在模型生态集成与多代理架构方面期待突破。

---

## 5. Bug 与稳定性

以下为今日报告的 **高严重性回归 Bug**，按影响范围排序：

| Issue | 问题描述 | 影响版本 | 是否有 Fix PR |
|------|--------|--------|-------------|
| [#41266](https://github.com/openclaw/openclaw/issues/41266) | 手动 Cron 任务 enqueue 后不执行（Linux） | v2026.3.8 | ❌ 无 |
| [#41405](https://github.com/openclaw/openclaw/issues/41405) | Cron 任务完全静默失效，无日志 | v2026.3.8 | ❌ 无 |
| [#42270](https://github.com/openclaw/openclaw/issues/42270) | 空 agent payload + WebSocket 1006 断开（LM Studio 后端） | v2026.3.8 | ❌ 无 |
| [#39792](https://github.com/openclaw/openclaw/issues/39792) | OpenAI Codex OAuth 返回 400 'Authorization header is badly formatted' | v2026.3.7+ | ✅ #42610（日志增强，非根治） |
| [#41690](https://github.com/openclaw/openclaw/issues/41690) | Kimi K2.5 配置验证失败：`requiresOpenAiAnthropicToolPayload` 键未识别 | v2026.3.8 | ✅ #41098（部分修复） |
| [#39062](https://github.com/openclaw/openclaw/issues/39062) | 文件系统工具（exec/read/write）丢失 | v2026.3.2+ | ❌ 无 |

> ⚠️ **警示**：v2026.3.8 存在系统性回归风险，尤其在 **任务调度（Cron）** 和 **本地模型后端兼容性** 方面。建议维护者优先发布 hotfix。

---

## 6. 功能请求与路线图信号

结合 PR 与 Issue，以下功能有望纳入近期版本：

- **🔥 高优先级**：
  - **编辑工具参数别名标准化**（#42580、#42605）：已合并，提升模型兼容性
  - **Cron 任务执行引擎修复**：多个相关 Issue 指向同一底层问题，需紧急处理
  - **OAuth 错误可见性增强**（#42610）：已合并，改善调试体验

- **🆕 新功能方向**：
  - **自进化扩展（Self-Evolve）**（#42323）：实验性 PR，探索运行时反馈学习机制
  - **Gemini Embedding v2 支持**（#42501）：扩展记忆系统能力
  - **Feishu 插件全面重构**（#39496）：企业级 IM 集成升级

> 📌 国际化（#3460）虽呼声高，但官方明确表示“暂无带宽支持”，短期内难有进展。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼真实声音：

- **痛点**：
  - “升级后 Cron 完全不动，日志什么都没有，差点耽误生产任务”（#41405）
  - “Kimi 配置一直报错，文档也没说清楚这个 `compat` 字段是干嘛的”（#41690）
  - “用 Qwen2.5-coder:3b 居然只返回 JSON 不执行，换模型成本太高”（#8933）

- **满意点**：
  - “飞书插件终于要支持流式卡片了，等了好久！”（#39496 评论区）
  - “append 模式救了我的日志文件，之前总被覆盖”（#40574 相关讨论）

- **使用场景**：
  - 企业内网部署（CentOS/Ubuntu Docker）、Raspberry Pi 边缘设备、多通道（Slack/Telegram/飞书）集成

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，需维护者关注：

| Issue | 主题 | 创建时间 | 状态 |
|------|------|--------|------|
| [#9157](https://github.com/openclaw/openclaw/issues/9157) | 工作区文件注入浪费 93.5% token 预算 | 2026-02-04 | OPEN，性能优化关键 |
| [#18237](https://github.com/openclaw/openclaw/issues/18237) | 异步 exec 回调：进程退出后将结果注入会话 | 2026-02-16 | OPEN，影响长任务体验 |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | Memory v2：关联遍历、显著性加权与基于访问的遗忘 | 2026-02-27 | OPEN，记忆系统演进方向 |
| [#15622](https://github.com/openclaw/openclaw/issues/15622) | Teams 扩展依赖被 npm update 清除 | 2026-02-13 | OPEN，影响 MS Teams 用户 |

> 🔔 **提醒**：#9157 涉及核心性能问题，token 浪费严重，应优先评估优化方案。

---

**报告生成时间**：2026-03-11  
**数据来源**：OpenClaw GitHub Repository (github.com/openclaw/openclaw)  
**分析师备注**：项目整体健康度中等偏下，近期版本稳定性问题突出，建议发布 v2026.3.9 hotfix 集中修复 Cron、OAuth 与工具调用回归。长期需加强 CI/CD 回归测试覆盖。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-03-11）

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **高活跃度、快速迭代、功能分化** 的态势。以 OpenClaw 为核心参照，多个项目（如 PicoClaw、NanoClaw、ZeptoClaw）在工具调用、多通道集成、本地模型支持等方向持续演进，反映出从“基础可用”向“生产级稳定”过渡的整体趋势。社区关注点从单一功能实现转向 **系统稳定性、安全策略灵活性、多代理协同与长期记忆管理**，标志着生态进入成熟化竞争阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500 | 500 | ❌ | ⭐⭐⭐☆☆（中等偏下，回归 Bug 突出） |
| **NanoBot** | 34 | 66 | ❌ | ⭐⭐⭐⭐☆（良好，响应快） |
| **Zeroclaw** | 34 | 50 | ❌ | ⭐⭐⭐⭐☆（高活跃，安全争议待解） |
| **PicoClaw** | 31 | 81 | ✅ v0.2.1-nightly | ⭐⭐⭐⭐⭐（优秀，功能与安全并重） |
| **NanoClaw** | 22 | 50 | ❌ | ⭐⭐⭐⭐☆（高潜力，架构演进清晰） |
| **IronClaw** | 50 | 50 | ✅ v0.17.0 | ⭐⭐⭐☆☆（高活跃但 CI 报告多 CRITICAL Bug） |
| **LobsterAI** | 12 | 8 | ❌ | ⭐⭐⭐☆☆（中等，部署稳定性存疑） |
| **TinyClaw** | 0 | 8 | ❌ | ⭐⭐⭐⭐☆（架构重构完成，体验优化中） |
| **Moltis** | 13 | 13 | ❌ | ⭐⭐⭐⭐☆（稳健，关键 Bug 快速闭环） |
| **CoPaw** | 50 | 50 | ❌ | ⭐⭐⭐⭐☆（活跃，Windows 桌面端风险高） |
| **ZeptoClaw** | 11 | 18 | ✅ v0.7.2–v0.7.4 | ⭐⭐⭐⭐⭐（高效维护，用户体验优先） |
| **EasyClaw** | 1 | 1 | ✅ v1.6.3–v1.6.5 | ⭐⭐⭐⭐☆（稳定收尾，聚焦 macOS 体验） |

> 注：健康度综合 Issue/PR 响应速度、Bug 严重性、版本节奏与社区反馈判断。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **社区规模最大**（单日 500+ Issues/PR），生态影响力强，是企业级集成的事实参考标准；  
- **功能最全面**，支持飞书、Matrix、Cron、OAuth、多模型兼容等复杂场景；  
- **插件化架构成熟**，Feishu 重构（#39496）等 PR 显示其扩展能力领先。

**技术路线差异**：  
- 相比 NanoClaw 的容器化隔离、TinyClaw 的 monorepo + SQLite 轻量化、ZeptoClaw 的 CLI-first 设计，OpenClaw 更偏向 **全功能一体化平台**，牺牲部分简洁性换取能力广度。

**社区规模对比**：  
- OpenClaw 的 Issue 数量是第二梯队（如 CoPaw、IronClaw）的 1.5–2 倍，但响应速度慢于 PicoClaw、ZeptoClaw 等新兴项目，存在“大而不灵”风险。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多通道消息集成** | OpenClaw, PicoClaw, LobsterAI, CoPaw, ZeptoClaw | 支持 Telegram、飞书、企业微信、Discord 等 IM 平台，强调上下文隔离（如 Forum Topics）与消息可靠性 |
| **本地模型兼容性** | NanoBot, CoPaw, ZeptoClaw, LobsterAI | 适配 Ollama、LM Studio、Qwen、Kimi 等本地/国产模型，解决工具调用格式差异（如 `old_text`/`new_text` 别名） |
| **任务调度稳定性** | OpenClaw, NanoBot, LobsterAI | Cron 任务失效、静默失败、重复执行等问题普遍，需增强日志与重试机制 |
| **安全与功能平衡** | Zeroclaw, NanoClaw, OpenClaw | 用户抱怨安全策略过度限制（如禁止 `exec`），呼吁“开发者模式”或细粒度权限控制 |
| **长期记忆与学习能力** | NanoClaw, Moltis, OpenClaw | 结构化记忆（USER.md/MEMORY.md）、FTS5 搜索、技能自创建成为高端用户刚需 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级多通道代理 | 中大型团队、ISV | 单体架构，强插件系统，兼容性强 |
| **PicoClaw** | 安全可控的轻量代理 | 开发者、安全敏感场景 | Rust 实现，强调沙箱与 SSRF 防护 |
| **NanoClaw** | 自进化代理实验平台 | 研究者、AI 开发者 | 容器化执行，SOUL/AGENT 抽象层，支持 IPC 技能创建 |
| **ZeptoClaw** | CLI 优先的极简代理 | 终端用户、自动化爱好者 | Rust + TUI，零配置启动，原生 WhatsApp 支持 |
| **TinyClaw** | 看板驱动的任务自动化 | 项目管理者 | Monorepo + SQLite 队列，替代 BullMQ/Redis |
| **CoPaw** | 多模型路由与桌面端集成 | 企业知识工作者 | Electron 桌面应用，支持飞书/Discord 多通道 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**：PicoClaw、ZeptoClaw、TinyClaw、NanoClaw  
  → 特征：高频 PR 合并、架构重构、CLI/UX 优化，吸引技术尝鲜者。
  
- **质量巩固阶段**：Moltis、EasyClaw、NanoBot  
  → 特征：Bug 修复为主，版本稳定，用户反馈趋于收敛，适合生产部署。

- **规模与风险并存**：OpenClaw、IronClaw、CoPaw  
  → 特征：高活跃度但伴随严重回归 Bug（如 Cron 失效、Windows 崩溃），需加强 CI/CD 回归测试。

---

## 7. 值得关注的趋势信号

1. **从“单代理”到“多代理协同”**：  
   OpenClaw（#10010）、LobsterAI（#320）、NanoClaw（#946）均出现“Agent Teams”或“军团”需求，预示 **Swarm Intelligence** 将成为下一阶段核心能力。

2. **配置即代码（Config-as-Code）兴起**：  
   ZeptoClaw 的 `config reset`、TinyClaw 的 monorepo 配置、OpenClaw 的插件声明式安装，反映用户对 **可版本化、可审计的配置管理** 的强烈需求。

3. **本地模型生态加速整合**：  
   Kimi、Qwen、GLM、LM Studio 等国产/本地模型支持成为社区高频诉求（涉及 6+ 项目），开发者需优先保障 **工具调用协议兼容性**。

4. **安全模型需从“全有或全无”转向“渐进式信任”**：  
   Zeroclaw #1478 与 NanoClaw #865 揭示：过度依赖容器或全局禁用 `exec` 已不可行，未来需设计 **基于上下文的动态权限系统**。

> **对开发者的建议**：聚焦垂直场景（如企业 IM 集成、CLI 自动化、研究型代理），避免与 OpenClaw 正面竞争；优先解决部署友好性、配置清晰度、多模态一致性等“最后一公里”问题。

---  
**报告生成时间**：2026-03-11  
**数据来源**：各项目 GitHub 仓库公开动态

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-11）

---

## 1. 今日速览

NanoBot 在过去24小时内保持高度活跃，共产生 **34条 Issues 更新** 和 **66条 PR 更新**，社区参与度显著上升。尽管无新版本发布，但开发节奏紧凑，**12个 PR 被合并或关闭**，主要集中在内存管理、子代理兼容性与安全加固等核心模块。用户对新渠道（如微信、飞书）和中文文档的需求持续高涨，反映出项目在东亚市场的扩张潜力。整体项目健康度良好，但部分关键 Bug（如重复响应、cron 失效）仍需优先处理。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.1.4.post4`，但该版本存在已知回归问题（见下文 Bug 部分）。

---

## 3. 项目进展

今日有 **12个 PR 被合并或关闭**，推动多项关键改进：

- **#1848** & **#1846**：修复 Deepseek Reasoner 模型下 `spawn` 子代理因缺失 `reasoning_content` 字段导致的崩溃问题，提升多模型兼容性。
- **#1825** & **#1847**：解决内存 consolidation 过程中未继承主代理的 `temperature`、`max_tokens` 等生成参数的问题，确保行为一致性。
- **#1845**：修复 `restrictToWorkspace` 安全机制可被 `~` 路径绕过的漏洞，增强沙箱安全性。
- **#1853**（已关闭）：尝试集成 NVIDIA 模型支持，虽未合并但为后续多厂商适配提供参考。
- **#111**（已关闭）：Google Vertex AI 支持已完成代码提交，待测试验证后可能纳入下一版本。

> 链接：[PR #1848](https://github.com/HKUDS/nanobot/pull/1848) | [PR #1825](https://github.com/HKUDS/nanobot/pull/1825) | [PR #1845](https://github.com/HKUDS/nanobot/pull/1845)

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

- **#1617**（7评论）：强烈呼吁提供中文 README，认为缺乏本地化文档影响中国开发者体验。  
  → 链接：[Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)

- **#1692**（4评论，3👍）：Telegram 机器人重复发送消息（带/不带 Markdown 渲染），严重影响使用体验。  
  → 链接：[Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)

- **#1819**（4评论）：请求增加微信（WeChat）渠道支持，强调“对中国用户至关重要”。  
  → 链接：[Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)

- **#97**（6👍）：提出架构级改进提案（内存、安全、测试），获社区广泛认同，预示未来技术路线方向。  
  → 链接：[Issue #97](https://github.com/HKUDS/nanobot/issues/97)

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|---------------|
| 🔴 高 | #1692 | Telegram 机器人重复响应 | ❌ 无 |
| 🔴 高 | #1816 | `nanobot cron` 命令在 v0.1.4.post4 中被意外移除 | ❌ 无（需回滚或热修复） |
| 🔴 高 | #1833 | 频繁收到 `SIGTERM` 导致进程退出，无明确原因 | ❌ 无 |
| 🟠 中 | #1828 | Cron 提醒功能创建成功但无实际触发 | ❌ 无（需排查调度机制） |
| 🟠 中 | #1826 | Docker Compose 启动后 SSH 连接中断 | ❌ 无（可能为配置冲突） |
| 🟢 低 | #1843 | System 消息 content 为空列表时引发 IndexError | ✅ 有（PR #1843 已提交） |

> 链接：[Issue #1692](https://github.com/HKUDS/nanobot/issues/1692) | [Issue #1816](https://github.com/HKUDS/nanobot/issues/1816) | [PR #1843](https://github.com/HKUDS/nanobot/pull/1843)

---

## 6. 功能请求与路线图信号

用户提出的新功能中，以下具备较高落地可能性：

- **微信/飞书渠道支持**（#1819, #1815）：已有开发者表示愿贡献代码（#1411），结合 Discord/Slack 已有实现，技术路径清晰。
- **中文文档**（#1617）：低成本高回报，可优先由社区翻译（已有越南语 README PR #1164 先例）。
- **Cron 历史追踪**（#1837）：已有详细设计提案，适合纳入下一版本增强可观测性。
- **多端点 LLM 容灾**（PR #1849）：Provider endpoint 轮询与冷却机制已提交，解决生产环境稳定性痛点。

> 链接：[PR #1849](https://github.com/HKUDS/nanobot/pull/1849) | [Issue #1837](https://github.com/HKUDS/nanobot/issues/1837)

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “Telegram 回复两次，根本无法正常使用”（#1692）
  - “cron 提醒设了但没动静，文档也没说清楚怎么调试”（#1828）
  - “Docker 跑完连不上服务器了，吓一跳”（#1826）

- **满意点**：
  - “架构很干净，4k 行实现这么多功能真不容易”（#97）
  - “子代理 spawn 功能很强大，终于能拆复杂任务了”

- **使用场景**：
  - 个人助理（定时提醒、信息整理）
  - 企业知识库集成（飞书文档、MCP 工具调用）
  - 多平台消息中枢（Telegram + Discord + 未来微信）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#123**（Discord 渠道支持）：创建于 2026-02-04，虽已实现（PR #24）但缺乏测试覆盖（#1804），存在质量风险。
- **#1300**（Matrix 渠道无法启动）：自 2026-02-27 起持续报错，影响小众但活跃用户群。
- **#1774**（长期记忆混乱）：质疑纯文本 MEMORY.md 设计，建议引入 SQLite，涉及核心架构演进。
- **#1556**（阿里云 Coding Plan 兼容性）：中国云厂商集成需求，具战略意义。

> 链接：[Issue #123](https://github.com/HKUDS/nanobot/issues/123) | [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300) | [Issue #1774](https://github.com/HKUDS/nanobot/issues/1774)

--- 

**分析师备注**：NanoBot 正处于从“可用”向“稳定可靠”过渡的关键阶段。建议短期内聚焦修复高影响 Bug（如重复响应、cron 失效），同时启动中文文档与微信渠道的社区协作，以巩固亚洲市场优势。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

Zeroclaw 项目在 2026-03-10 继续保持高活跃度，社区贡献与问题反馈密集。过去24小时内共产生 **34 条 Issues 更新**（24 新开/活跃，10 已关闭）和 **50 条 PR 更新**（36 待合并，14 已合并/关闭），显示出强劲的开发节奏与用户参与度。尽管无新版本发布，但多个关键功能优化与稳定性修复被快速合并，尤其在 Web UI、工具调用、安全配置和跨平台兼容性方面取得显著进展。社区对“过度安全限制”和“功能可用性”的争议持续发酵，反映出产品易用性与安全策略之间的张力。

---

## 2. 版本发布

**无新版本发布**。当前主干（`master`）仍处于功能迭代与问题修复阶段，未触发正式版本发布流程。

---

## 3. 项目进展

今日共 **14 个 PR 被合并或关闭**，涵盖功能增强、Bug 修复、文档优化与 CI 改进，推动项目在多方面向前迈进：

- **Web UI 体验提升**：实现了聊天输入框自动扩展（#3133）和消息悬停复制功能（#3121），显著改善长提示编辑与内容复用体验，对齐 OpenClaw 的 UX 标准。
- **工具调用稳定性增强**：修复了 WebSocket 聊天接口中工具执行失效问题（#3124），并强化了对畸形 `<tool_call>` 输出的容错解析，减少因模型输出不规范导致的交互中断。
- **Ollama 集成优化**：解决了 Qwen 模型返回“仅思考文本、无结构化工具调用”的回归问题（#3116），通过参数归一化确保工具动作正确触发。
- **安全与会话管理**：修复了 Telegram 语音消息被忽略（#3115）、Slack 线程回复丢失（#3084）等问题，并初步支持 WhatsApp Web 会话重连与二维码展示（#3045）。
- **配置与文档规范化**：统一了 OpenRouter 快速接入命令示例（#3136），修正了贡献指南中的路径引用错误（#3137），并优化了 CI 权限与 Action 安全策略（#3099）。

> 整体来看，项目在提升终端用户体验、增强多通道适配能力、强化工具调用鲁棒性方面迈出坚实步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issue：#1478 “除了安全,什么功能也没有.”
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/1478
- **评论数**：33 | **👍**：3
- **核心诉求**：用户强烈抱怨 Zeroclaw 在启用安全配置后完全拒绝执行外部命令（如安装 `ffmpeg`），导致其退化为“只能聊天的 bot”，违背轻量替代 OpenClaw 的初衷。
- **背后信号**：反映产品当前安全策略过于刚性，缺乏用户可控的“开发者模式”或“本地信任环境”豁免机制，亟需在安全与功能之间提供灵活配置选项。

### 其他热点：
- **#3070 GLIBC 版本依赖问题**（S0 严重性）：用户报告二进制文件因依赖 `GLIBC_2.39` 而无法在旧系统运行，暴露跨平台兼容性短板。
- **#3095 按需加载 MCP 工具**：提出延迟加载工具 schema 以减少系统提示膨胀，获得社区关注，可能影响未来架构设计。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否已有 Fix PR |
|--------|------|------|----------------|
| **S0** | #3070 | 运行时因 `GLIBC_2.39` 缺失导致崩溃 | ❌ 无 |
| **S1** | #2487 | 聊天时出现 `Invalid schema for function 'channel_ack_config'` 错误，阻塞工作流 | ❌ 无 |
| **S1** | #3079 | Ollama + Qwen 模型工具调用失败，动作丢失 | ✅ #3116 已修复 |
| **S1** | #3126 | `secrets.encrypt` 未保护 Telegram `bot_token`，存在明文泄露风险 | ❌ 无 |
| **S1** | #3135 | Windows 平台 `cargo clippy` 预推送钩子因路径同步失败 | ❌ 无 |
| **S2** | #3088 | 通道模式下 token 成本统计失效（始终显示 $0.00） | ❌ 无 |
| **S3** | #3033 | `default_temperature` 配置未被 CLI 命令（如 `zeroclaw agent`）遵守 | ❌ 无 |

> 注：S0/S1 级问题中仍有多个关键 Bug 待修复，需优先投入资源。

---

## 6. 功能请求与路线图信号

以下功能请求具备较高采纳可能性，部分已有对应 PR：

- **✅ 已实现**：  
  - Web 聊天消息复制（#3120 → #3121）  
  - 多行输入框自动扩展（#3119 → #3133）  
  - Telegram 内联按钮审批工具（#3146 → #3143）

- **🚧 进行中 / 高潜力**：  
  - **按需加载 MCP 工具**（#3095）：可显著降低上下文开销，适合大规模工具集场景，架构影响较大，可能纳入 v0.5+ 路线图。  
  - **自定义 API 路径后缀支持**（#3125）：满足非标准 OpenAI 兼容端点需求，扩展 provider 灵活性。  
  - **消息草稿保存**（#3129）：提升多任务切换体验，技术实现简单，用户价值明确。

- **⚠️ 需权衡**：  
  - **放宽安全限制配置**（#1478）：虽呼声高，但涉及核心安全模型调整，需设计细粒度权限控制方案，短期内难有突破。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **不满点**：  
  > “我装 Zeroclaw 就是为了轻量，结果它比 OpenClaw 还难用——什么都不能自动做！”（#1478）  
  > “网页端 agent 完全不能用，CLI 正常但 Web 一片空白，控制台报错 `crypto.randomUUID is not a function`”（#1575）  
  > “加密了 secret 还是明文存 bot_token，这安全有啥用？”（#3126）

- **满意点**：  
  > “Web UI 的复制按钮和自动展开输入框终于来了，和 OpenClaw 一样顺手！”（#3121/#3133 相关讨论）  
  > “Ollama 工具调用现在稳定多了，Qwen 不再只输出思考过程。”（#3116 验证反馈）

- **典型使用场景**：  
  个人开发者用于本地自动化（如浏览器操作、文件处理）、多平台消息聚合（Telegram/Slack/Matrix）、低成本 LLM 代理（Ollama + 本地模型）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|------|--------|------|------|
| Issue | #2487 | `Invalid schema for function 'channel_ack_config'` | 2026-02-02 | OPEN | S1 阻塞性问题，影响核心聊天功能，需排查 schema 注册逻辑 |
| Issue | #3070 | `GLIBC_2.39` not found | 2026-03-09 | OPEN | S0 级兼容性问题，阻碍新用户部署，建议提供静态链接构建或降级 GLIBC 依赖 |
| Issue | #1478 | 安全策略过度限制功能 | 2026-02-23 | CLOSED* | 虽关闭但争议未消，建议重新评估并设计“本地信任模式” |
| PR | #2017 | 添加 Avian 提供商支持 | 2026-02-27 | OPEN | 功能完整但长期未合入，可能因分支策略（target: `dev`）或测试缺失 |

> *注：#1478 虽标记为 CLOSED，但用户情绪未平息，实质问题未解决。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
高活跃度与快速响应是亮点，但安全策略僵化与跨平台兼容性构成主要风险。建议下一阶段聚焦 **用户体验一致性** 与 **部署友好性**，平衡安全与功能。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

PicoClaw 在 2026-03-10 至 2026-03-11 期间保持极高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **31 条 Issues 更新**（27 新开/活跃，4 关闭）和 **81 条 PR 更新**（45 待合并，36 已合并/关闭），显示出强劲的开发节奏与用户参与度。项目发布两个新版本，涵盖 Telegram 论坛主题支持、调试模式优化等关键功能。整体项目健康度优秀，功能迭代与稳定性修复并重。

---

## 2. 版本发布

### 🔹 v0.2.1-nightly.20260311.9cd2d218（[Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)）
- **核心更新**：
  - ✅ 合并 #1207：**调试模式下禁用日志截断**，提升开发排查效率（[PR #1207](https://github.com/sipeed/picoclaw/pull/1207)）
  - ✅ 合并 #1291：**Telegram Forum Topics 支持**，实现多话题上下文隔离（[PR #1291](https://github.com/sipeed/picoclaw/pull/1291)）
  - 📝 更新调试文档，增强可读性
- **注意事项**：此为 nightly 构建，可能存在不稳定行为，建议生产环境谨慎使用。
- **迁移说明**：无破坏性变更，但启用 Telegram Forum Topics 需在配置中显式设置 `thread_id` 或使用 `/topic` 命令。

> 🔗 [完整 Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.1...v0.2.1-nightly.20260311.9cd2d218)

---

## 3. 项目进展

今日共 **36 个 PR 被合并或关闭**，重点进展包括：

| 类别 | 关键 PR | 说明 |
|------|--------|------|
| 🛠️ **功能增强** | [#1291](https://github.com/sipeed/picoclaw/pull/1291) | 实现 Telegram Forum Topics 支持，解决多会话上下文混淆问题 |
| 🔐 **安全修复** | [#1012](https://github.com/sipeed/picoclaw/pull/1012) | 修复 WebFetchTool 的 SSRF 漏洞，阻止内网资源访问 |
| 🧩 **工具链优化** | [#1261](https://github.com/sipeed/picoclaw/pull/1261) | 为 exec 工具添加环境变量净化机制，防止敏感信息泄露 |
| 📦 **部署体验** | [#1304](https://github.com/sipeed/picoclaw/pull/1304) | Docker 镜像预装 curl、jq、git 等开发工具，提升开箱即用性 |
| ⚙️ **配置健壮性** | [#1301](https://github.com/sipeed/picoclaw/pull/1301) | 支持 allow_from 字段中使用中文逗号，降低配置错误率 |

> 项目整体向 **多通道高可用、安全可控、开发者友好** 方向稳步迈进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（附链接）

| Issue | 评论数 | 核心诉求 |
|------|--------|--------|
| [#1218 Agent refactor: what an Agent is](https://github.com/sipeed/picoclaw/issues/1218) | 12 | 请求明确 Agent 架构定义，推动 `SOUL.md` 与 `AGENT.md` 标准化，提升可解释性与可定制性 |
| [#1270 Telegram Forum Topics Support](https://github.com/sipeed/picoclaw/issues/1270) | 7 | 强烈需求 Telegram 多话题支持，已实现于 nightly 版本，社区反馈积极 |
| [#1278 Subagent tool access and inheritance](https://github.com/sipeed/picoclaw/issues/1278) | 6 | 呼吁子 Agent 继承工具权限（如 read_file、exec），支撑复杂自动化工作流 |
| [#1316 Event-driven agent loop](https://github.com/sipeed/picoclaw/issues/1316) | 3 (+1👍) | 提议重构 Agent 循环为事件驱动架构，支持 Hook、中断与消息追加，提升可扩展性 |

> 社区正从“功能实现”转向“架构治理”，对 Agent 抽象层与生命周期管理关注度显著上升。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按优先级排序）

| Issue | 严重程度 | 状态 | 关联 Fix PR |
|------|--------|------|------------|
| [#1287 Tool calling fails (JSON unmarshal error)](https://github.com/sipeed/picoclaw/issues/1287) | 🔴 高 | 未修复 | — |
| [#1299 MCP not working in agent mode](https://github.com/sipeed/picoclaw/issues/1299) | 🔴 高 | 未修复 | — |
| [#1323 Endless "typing" message on Telegram](https://github.com/sipeed/picoclaw/issues/1323) | 🟠 中 | 未修复 | — |
| [#1307 Feishu auth expired after 12h](https://github.com/sipeed/picoclaw/issues/1307) | 🟠 中 | **已修复** | [#1318](https://github.com/sipeed/picoclaw/pull/1318) |
| [#1281 Feishu missing user_id in @ messages](https://github.com/sipeed/picoclaw/issues/1281) | 🟠 中 | 未修复 | — |

> 工具调用解析失败（#1287）和 MCP 失效（#1299）为当前最紧急问题，影响核心功能可用性，建议优先排查 LLM 响应格式兼容性。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能（已有 PR 或强社区支持）

| 功能 | 状态 | 关联 Issue/PR | 纳入可能性 |
|------|------|---------------|-----------|
| Telegram Forum Topics | ✅ 已实现 | [#1270](https://github.com/sipeed/picoclaw/issues/1270) / [#1291](https://github.com/sipeed/picoclaw/pull/1291) | 已发布 |
| Mattermost 通道支持 | 🔄 开发中 | [#1288](https://github.com/sipeed/picoclaw/pull/1288) | 高（企业用户刚需） |
| 实时工具反馈（tool_feedback） | 🔄 开发中 | [#1332](https://github.com/sipeed/picoclaw/pull/1332) | 高（UX 显著提升） |
| Kimi Coding Provider | 💬 提议中 | [#1293](https://github.com/sipeed/picoclaw/issues/1293) | 中（需 API 适配） |
| 企业微信长链接模式 | 💬 提议中 | [#1276](https://github.com/sipeed/picoclaw/issues/1276) | 高（内网部署关键） |

> 下一版本（v0.2.2）有望集成 Mattermost 支持与实时工具反馈，进一步扩展企业级通道覆盖。

---

## 7. 用户反馈摘要

### 💬 真实用户声音（来自 Issues 评论）

- **满意点**：
  - “Telegram Forum Topics 终于来了！终于不用在一个群里混聊多个项目了。” —— @dimonb（#1270）
  - “Docker 镜像加了 jq 和 curl 后调试方便多了，不用再手动进容器装工具。” —— @darrenzeng2025（#1304）

- **痛点**：
  - “飞书 token 12小时就过期，每次都要重启服务，太影响自动化流程。” —— @Vast-Stars（#1307）
  - “工具调用一直报错 JSON 解析失败，LLM 明明返回了正确结构。” —— @tsterbak（#1287）
  - “中文逗号配置报错，文档没说清楚只能用英文逗号。” —— @KISSKISSCAT（#1280）

> 用户最关注 **稳定性（认证、工具调用）** 与 **多通道上下文隔离**，对配置友好性要求日益提高。

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|---------|------|--------|------|------|
| [#906 Configurable tool timeout](https://github.com/sipeed/picoclaw/issues/906) | Enhancement | 2026-02-28 | OPEN（3条评论） | 工具超时硬编码问题持续被提及，建议评估优先级 |
| [#657 Separate directory for generated files](https://github.com/sipeed/picoclaw/issues/657) | Enhancement | 2026-02-22 | OPEN（2条评论） | 工作区文件混杂问题影响用户体验，需设计输出隔离机制 |
| [#747 Interactive command mode](https://github.com/sipeed/picoclaw/pull/747) | PR | 2026-02-25 | OPEN（未合并） | 功能完整但久未 review，可能阻塞 CLI 体验改进 |

> 建议维护团队本周内对上述积压项进行 triage，避免社区贡献热情衰减。

---

**报告生成时间**：2026-03-11  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目处于快速成长期，建议加强 Issue 分类标签一致性与 PR review 响应速度，以维持社区健康度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共产生 **22 条 Issues 更新**（12 新开 / 10 关闭）和 **50 条 PR 更新**（33 待合并 / 17 已合并或关闭），显示出社区贡献与核心维护并行推进的态势。尽管无新版本发布，但多个关键功能（如结构化记忆、会话搜索、技能自创建）进入设计细化阶段，标志着项目正从基础架构向**自主学习能力**演进。自动化流程（如 merge-forward）暴露出技能分支同步问题，但已被快速识别并关闭，整体稳定性可控。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于功能增强与架构优化，而非版本迭代。

---

## 3. 项目进展

今日共 **17 个 PR 被合并或关闭**，重点进展包括：

- **权限与容器稳定性修复**：  
  - [#942](https://github.com/qwibitai/nanoclaw/pull/942) 和 [#929](https://github.com/qwibitai/nanoclaw/pull/929) 解决了 Linux root 用户运行时的 `EACCES/ENOENT` 权限错误及 Apple Container 对文件挂载的不兼容问题，显著提升跨平台部署可靠性。  
  - [#928](https://github.com/qwibitai/nanoclaw/pull/928) 引入会话文件自动轮转机制，防止大日志文件导致容器启动超时，缓解了 #697 报告的性能瓶颈。

- **OAuth 与进程管理优化**：  
  - [#930](https://github.com/qwibitai/nanoclaw/pull/930) 实现 OAuth 令牌自动刷新，解决 `CLAUDE_CODE_OAUTH_TOKEN` 过期引发的 401 错误（#730）。  
  - [#940](https://github.com/qwibitai/nanoclaw/pull/940) 添加 PID 锁文件机制，避免多实例并发导致的重复响应（#693）。

- **用户体验改进**：  
  - [#944](https://github.com/qwibitai/nanoclaw/pull/944) 新增“即时确认”功能，在代理开始处理请求时即发送响应，减少用户等待焦虑，尤其适用于长任务场景。

> 整体来看，项目在**容器运行时稳定性、身份认证健壮性、用户交互体验**三个维度取得实质性推进。

---

## 4. 社区热点

以下 Issues/PRs 引发较高关注，反映核心演进方向：

- **[#907] Epic: nanoclaw-learning-system**（[链接](https://github.com/qwibitai/nanoclaw/issues/907)）  
  由 @matt-carvalho 提出的学习系统史诗级需求，涵盖 FTS5 会话搜索、结构化记忆（USER.md/MEMORY.md）、技能自创建 IPC 流程等四大能力，已被拆分为多个高优先级子任务（#908–#913），成为当前开发主线。

- **[#926] Admin mode: intercept main-channel admin commands**（[链接](https://github.com/qwibitai/nanoclaw/issues/926)）  
  提出在主通道中拦截管理员命令并实现 `/capabilities` 只读查询功能，标志着项目向**多角色权限控制**迈出第一步。

- **[#865] Using containers alone doesn't make you more secure**（[链接](https://github.com/qwibitai/nanoclaw/issues/865)）  
  安全研究者 @calebfaruki 指出当前架构对容器过度信任的问题，呼吁重构脚本执行边界，引发对**纵深防御策略**的深入讨论。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| **Critical** | [#825] fix(scheduler): once-task race condition（[链接](https://github.com/qwibitai/nanoclaw/issues/825)） | 调度器在触发前标记任务为“已完成”，导致“伪造工具调用”事故 | ✅ 已有分析，待 PR |
| **High** | [#941] unnecessary TS recompilations degrade performance（[链接](https://github.com/qwibitai/nanoclaw/issues/941)） | 每次请求触发 TypeScript 重编译，显著拖慢响应速度 | 🔄 调查中，Claude 已定位日志瓶颈 |
| **High** | [#905] Agent runner source mount never updated（[链接](https://github.com/qwibitai/nanoclaw/issues/905)） | 容器内源码挂载仅在首次复制，后续更新无效 | 🔄 未修复，影响热更新能力 |

> 注：多个 merge-forward 失败 Issue（#892–#898）已被自动关闭，属 CI 流程噪音，不影响主干稳定性。

---

## 6. 功能请求与路线图信号

以下高优先级功能请求极可能纳入下一阶段开发：

- **结构化记忆系统**（#910）：将记忆拆分为 `USER.md`（用户偏好）与 `MEMORY.md`（环境事实），支持字符限制，提升长期上下文管理能力。
- **FTS5 会话搜索**（#908）+ **IPC 搜索工具**（#909）：构建基于 SQLite FTS5 的全文检索能力，使代理可主动召回历史对话。
- **技能自创建机制**（#911–#912）：通过 IPC 实现代理发起技能提案，并集成安全扫描，迈向“自进化代理”愿景。
- **管理员模式**（#926）：为多用户/企业场景提供命令隔离与能力查询接口。

> 上述功能均围绕 **#907 学习系统史诗** 展开，构成 2026 Q2 核心路线图。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **正面反馈**：  
  > “nanoclaw scored 92.1 (A+) on Nerq Trust Index — top 5 AI agents”（#924）—— 第三方信任评级提升项目公信力。

- **痛点反馈**：  
  - 性能问题突出：“responses are slow… 13:27:43 Spawning container → 13:27:44 ‘working on it’”（#941），反映容器启动与 TS 编译开销过大。  
  - 权限模型脆弱：“when host runs as root… containers crash”（#942），暴露生产环境部署风险。  
  - 会话连续性差：“session files grow unbounded… cause timeouts”（#928），影响长对话体验。

- **使用场景**：  
  用户已在 WhatsApp、Gmail、Telegram 等多通道部署（#917、#931），并尝试构建“代理 swarm”（#946），表明项目正从单代理向**多代理协作系统**扩展。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- **[#301] feat(skill): enhance add-telegram skill**（[链接](https://github.com/qwibitai/nanoclaw/pull/301)）  
  **状态：Blocked / Pending Closure**，创建于 2026-02-18，涉及 Telegram 技能增强（Markdown 渲染、文件下载），但因架构变动长期搁置。

- **[#777] Container permission mismatch when running as root**（隐含于 #942/#936）  
  虽已有修复 PR，但原始 Issue 未闭环，需确认是否彻底解决。

- **[#697] Session file size causes container timeouts**  
  已被 #928 部分缓解，但缺乏对“理想会话文件大小阈值”的明确规范，易复发。

> 建议：对 blocked PR 明确关闭或重启讨论；对高频性能问题（如 #941）分配专项优化资源。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 清晰演进路线 + 快速修复能力，但需警惕技术债积累与性能瓶颈。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

IronClaw 项目在 2026-03-11 继续保持高强度开发节奏，过去24小时内共处理 **50条 Issues**（新开/活跃36条，关闭14条）和 **50条 Pull Requests**（待合并26条，已合并/关闭24条），活跃度处于高位。项目于昨日发布 **v0.17.0** 版本，引入 LLM 参数过滤、任务持久化等关键能力，并伴随多个 staging 到 main 的自动 promotion PR，表明主干分支正快速集成新功能。然而，Staging CI Review 持续报告大量高严重性 Bug（包括 CRITICAL 级并发与资源管理问题），反映出近期代码变更带来的稳定性风险上升。

---

## 2. 版本发布

### 🔖 v0.17.0（2026-03-10）

**新增功能：**
- **LLM 层增强**：支持按 provider 过滤 unsupported 参数（#809），提升与不同模型 API 的兼容性。
- **任务追踪改进**：在 `save_job` 中持久化 `user_id`，并在 routine 执行时暴露 `job_id`（#709），增强审计与调试能力。
- **CI 流程优化**：实现 chained promotion PRs 机制，支持多批次 staging 到 main 的自动化合并。

> ⚠️ 无明确 API 破坏性变更说明，但结合后续 PR #885 提示 v0.18.0 将含 breaking changes，建议用户关注升级路径。

[查看 Release](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)

---

## 3. 项目进展

今日多个重要 PR 被合并或推进，显著提升系统健壮性与扩展性：

- **#800（已合并）**：重构三大 agentic loop 为统一 `AgenticLoop` 引擎，消除代码重复，提升可维护性（[链接](https://github.com/nearai/ironclaw/pull/800)）。
- **#790（已合并）**：集成 Slack 外部 channel-relay 服务，支持 SSE 流、OAuth 重定向与自动重连，扩展了 IronClaw 的实时通信能力（[链接](https://github.com/nearai/ironclaw/pull/790)）。
- **#904 / #901 / #865（部分合并）**：连续 staging promotion PR 将大量修复与功能（如 WASM 工具加载、MCP 会话管理、token 预算控制）同步至主干，体现 CI/CD 流程高效运转。
- **#905（待合并）**：针对 #869 的紧急修复，解决 webhook 处理中锁跨越异步边界的关键性能阻塞问题（[链接](https://github.com/nearai/ironclaw/pull/905)）。

整体项目在 agent 架构、通道集成、安全审计三方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issue：#67 “near.ai account is shoehorned in”
- **评论数：4 | 👍：8**  
- 用户 @lee-b 强烈质疑项目强制绑定 near.ai 账户的设计偏向性，认为此举限制了社区采用与生态扩展（[链接](https://github.com/nearai/ironclaw/issues/67)）。  
- **分析**：该 Issue 虽已关闭，但高赞数反映社区对“去中心化身份”与“厂商中立”的强烈诉求，可能影响未来认证架构设计。

### 🔧 高互动 PR：#796 “Add Slack approval buttons for tool execution in DMs”
- 开发者 @PierreLeGuen 提出为 Slack DM 添加交互式审批按钮，提升工具执行安全性（[链接](https://github.com/nearai/ironclaw/pull/796)）。  
- **信号**：表明用户正推动 IronClaw 向生产级安全代理演进，强调人机协同控制。

---

## 5. Bug 与稳定性

Staging CI Review 在 24 小时内报告 **超过 20 个 HIGH/CRITICAL 级 Bug**，集中暴露于近期 promotion 代码：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 CRITICAL | #869 | 锁跨越 async I/O 边界，阻塞 webhook 处理 | ✅ #905 |
| 🔴 CRITICAL | #868 | SIGHUP 期间环境变量竞争修改 | ❌ 无 |
| 🔴 CRITICAL | #867 | 默认模型 `gpt-5-mini` 不存在于 OpenAI API | ❌ 无 |
| 🔴 CRITICAL | #813 | 非事务性多步上下文更新导致状态不一致 | ❌ 无 |
| 🔴 CRITICAL | #908 | 连接成功后未重置 `consecutive_failures` 计数器 | ❌ 无 |
| 🟠 HIGH | #840 | 新安装 WASM 工具因 WIT 版本不兼容被拒绝 | ❌ 无 |
| 🟠 HIGH | #697 | 沙箱不可用时 routine 静默失败，无反馈 | ❌ 无 |

> ⚠️ **风险提示**：多个 CRITICAL 问题尚无修复方案，可能影响生产部署稳定性，建议暂停高风险环境升级。

---

## 6. 功能请求与路线图信号

用户明确提出以下新功能需求，部分已有对应 PR 推进：

- **#766：支持图像+文本多模态输入**  
  用户 @sergeiest 指出 NEAR AI Cloud API 已支持 vision，需 IronClaw Chat API 透传该能力（[链接](https://github.com/nearai/ironclaw/issues/766)）。  
  → **路线图信号强**：符合 LLM 多模态趋势，预计 v0.18+ 纳入。

- **#333：Slack Socket Mode 支持**  
  解决 NAT 环境下无公网 URL 的连通性问题（[链接](https://github.com/nearai/ironclaw/pull/333)）。  
  → 已有完整实现，待合并，属基础设施增强。

- **#903：导入 OpenClaw 记忆与设置**  
  用户 @nickpismenkov 提议跨项目配置迁移（[链接](https://github.com/nearai/ironclaw/pull/903)）。  
  → 反映生态整合需求，可能成为用户增长策略。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户痛点：

- **认证与 MCP 集成困难**：@FrenchMajesty 在 #299 中表示“无法修改 `mcpServers` JSON 配置”，导致 Browserbase MCP 连接失败，暴露配置灵活性不足。
- **静默失败体验差**：@sergeiest 在 #697 强调“Docker 不可用时 job 无报错”，凸显系统可观测性缺失。
- **WASM 工具链断裂**：@micsama 在 #840 反馈“新安装工具立即报错 WIT 版本不匹配”，反映发布流程未保障向后兼容。
- **满意度点**：Slack relay 集成（#790）、`ironclaw doctor` 诊断扩展（#822）获社区认可，体现开发者响应速度。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

- **#299 “Unable to authenticate MCP servers”**（创建于 2026-02-22，最后更新 2026-03-10）  
  用户持续反馈 MCP 认证机制不灵活，虽有 PR #313 尝试修复，但核心配置架构未变（[链接](https://github.com/nearai/ironclaw/issues/299)）。

- **#439 “Registry update workflow fails”**（创建于 2026-03-01）  
  GitHub 分支保护导致 WASM 工具安装失败，影响新用户 onboarding（[链接](https://github.com/nearai/ironclaw/issues/439)）。

- **#635 “Orphaned tool_results in Worker”**（创建于 2026-03-06）  
  关键 Worker 逻辑 Bug，可能导致 Anthropic API 返回空响应，尚未合并（[链接](https://github.com/nearai/ironclaw/pull/635)）。

> 📌 **建议**：优先处理 #439 与 #635，二者直接影响核心功能可用性。

--- 

**报告生成时间：2026-03-11**  
**数据来源：GitHub IronClaw Repository**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-11）

---

## 1. 今日速览

LobsterAI 在过去24小时内保持较高活跃度，共产生 **12条新 Issues** 与 **8条 PR 更新**，其中 **6个 PR 被合并/关闭**，表明核心团队响应迅速、开发节奏稳健。社区反馈集中于本地部署稳定性、多代理支持及第三方平台集成等实际使用场景。尽管无新版本发布，但底层架构（如 OpenClaw 插件系统、IM 渠道扩展）持续优化，项目正向企业级多通道 AI 助手演进。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

今日共 **6个 PR 被合并或关闭**，显著推进了 OpenClaw 架构的插件化与多平台集成能力：

- **#346 [CLOSED] feat: OpenClaw plugin preinstall system + IM channel config sync**  
  引入通用插件预装系统，支持在 `package.json` 中声明插件并自动下载/打包，同时实现钉钉、飞书、QQ、企业微信四大官方 IM 渠道的配置自动同步，极大降低部署复杂度。  
  🔗 [PR #346](https://github.com/netease-youdao/LobsterAI/pull/346)

- **#355 [CLOSED] Liuzhq/chat paging**  
  在聊天界面新增对话轮次上下翻页功能，提升长对话场景下的用户体验与可操作性。  
  🔗 [PR #355](https://github.com/netease-youdao/LobsterAI/pull/355)

- **#356 / #359 / #363 / #364 [CLOSED]**  
  一系列 OpenClaw 实现的 IM 渠道扩展与 Bug 修复，涵盖 Telegram、Discord、飞书等平台，强化了跨平台消息推送能力。  
  🔗 [PR #356](https://github.com/netease-youdao/LobsterAI/pull/356) | [PR #359](https://github.com/netease-youdao/LobsterAI/pull/359) | [PR #363](https://github.com/netease-youdao/LobsterAI/pull/363) | [PR #364](https://github.com/netease-youdao/LobsterAI/pull/364)

> ✅ 项目整体在“多代理架构”与“企业级消息集成”方向迈出关键步伐。

---

## 4. 社区热点

### 🔥 #320 [OPEN] 请问能否配置出龙虾军团呢?  
**作者**: @twttdjcopc94492 | **评论**: 3 | **链接**: [Issue #320](https://github.com/netease-youdao/LobsterAI/issues/320)  
用户询问是否支持本地运行多个 Agent 代理（即“龙虾军团”），反映对**多智能体协同工作流**的强烈需求。该问题虽非技术 Bug，但揭示了用户对复杂任务自动化、分布式代理调度的期待，可能成为未来路线图重点。

### 💬 #369 [OPEN] 定时任务中的通知问题  
**作者**: @Harteyang | **评论**: 0（但描述详细） | **链接**: [Issue #369](https://github.com/netease-youdao/LobsterAI/issues/369)  
用户反馈定时任务无法触发钉钉通知，尽管 IM 配置正常。此问题涉及**任务调度与消息通道的解耦逻辑**，若普遍存在将影响自动化可靠性，需优先排查。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #357 图片读取卡死 | 用户上传图片后界面卡死，影响核心交互功能 | ❌ 无 |
| ⚠️ 高 | #360 本地模型调用失败（502 ERR_EMPTY_RESPONSE） | 自部署 Qwen3-235B 模型在 LobsterAI 中报错，Postman 正常，疑似前端代理或超时配置问题 | ❌ 无 |
| ⚠️ 中 | #368 Ubuntu 24.04 安装后界面空白 | 自行打包的 deb 文件安装后无显示，可能涉及 Electron 渲染或依赖缺失 | ❌ 无 |
| ⚠️ 中 | #354 卡死在循环中无法清除记忆 | Agent 持续重复未完成任务，缺乏“重置上下文”机制 | ❌ 无 |
| ⚠️ 低 | #361 聊天界面无法显示图片 | 图片未渲染但提示已显示，UI 状态不一致 | ❌ 无 |

> ❗ 多个高影响 Bug 集中于**本地部署稳定性**与**多模态交互可靠性**，建议维护者优先复现并发布热修复。

---

## 6. 功能请求与路线图信号

以下用户需求具备高采纳可能性，且已有相关 PR 或架构铺垫：

- **多代理支持（“龙虾军团”）**：#320 提出，虽无直接 PR，但 #346 的插件化架构为多 Agent 管理奠定基础，**极可能纳入 v2.1+ 路线图**。
- **LM Studio 集成**：#365 明确要求支持本地 LM Studio 服务，契合项目“本地模型优先”战略，**开发优先级高**。
- **腾讯 CodePaln 支持**：#362 询问 API 兼容性，若接口符合 OpenAI 规范，可快速适配。
- **企业微信渠道**：#120 长期未关闭，结合 #346 已实现 WeCom 自动配置，**预计下个版本默认启用**。

---

## 7. 用户反馈摘要

- **痛点**：  
  - 本地部署门槛高（#368、#360），尤其对非技术用户；  
  - 多模态支持不稳定（#357、#361），图片处理成主要瓶颈；  
  - 自动化任务可靠性不足（#369、#358），影响生产环境使用信心。

- **满意点**：  
  - OpenClaw 插件系统获积极认可（#346 合并后无负面反馈）；  
  - 多平台 IM 集成（钉钉、飞书、Telegram）功能实用，用户主动测试并反馈。

- **典型场景**：  
  企业用户尝试将 LobsterAI 作为内部 AI 助手，对接钉钉/企业微信实现定时报告、代码审查自动化，但对**任务中断恢复**与**上下文管理**有强需求。

---

## 8. 待处理积压

| Issue/PR | 状态 | 积压时长 | 建议行动 |
|--------|------|--------|--------|
| #120 需要企业微信渠道 | OPEN | 13天 | 虽已有 #346 支持，但未明确文档说明，建议补充指南并关闭 |
| #5 ESLint 规则修复 | OPEN | 20天 | 含 269 个 lint 问题，影响代码质量，建议分配人力清理 |
| #366 Gateway 端口与 status 失败 | OPEN | 1天 | 涉及 OpenClaw 核心服务启动，需验证默认端口与日志路径配置 |

> 📌 维护者应优先处理 #5（代码健康度）与 #120（用户体验闭环），避免技术债累积。

---  
**报告生成时间**: 2026-03-11  
**数据来源**: GitHub LobsterAI 仓库公开数据

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报（2026-03-11）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目保持高活跃度，虽无新版本发布或 Issue 更新，但 Pull Request 活动显著：共处理 8 条 PR，其中 4 条已合并/关闭，4 条仍处于开放状态。开发重点集中在架构重构、CLI 体验优化与任务自动化流程改进。项目整体处于快速迭代阶段，技术债务清理与模块化演进并行推进，健康度良好。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
今日合并/关闭的 PR 推动多项关键改进：

- **#186 [CLOSED] refactor: split monolith into npm workspaces monorepo with SQLite queue**  
  将单体代码库重构为基于 npm workspaces 的 monorepo 结构，划分为 `@tinyclaw/core`、`@tinyclaw/teams` 等五个独立包，显著提升模块边界清晰度与维护性；同时用轻量级 SQLite + better-sqlite3 替代 BullMQ/Redis 队列系统，降低部署复杂度并提升本地开发体验。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/186

- **#187 [CLOSED] fix(build): use tsc --build to respect dependency order in monorepo**  
  修复因 monorepo 重构导致的构建失败问题，通过改用 `tsc --build` 确保 TypeScript 项目引用依赖按正确顺序编译，保障构建稳定性。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/187

- **#188 [CLOSED] chore: gitignore tsbuildinfo files**  
  清理版本控制中的 TypeScript 增量构建缓存文件（`*.tsbuildinfo`），避免污染仓库历史。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/188

- **#177 [CLOSED] Add chatroom API and real-time CLI viewer**  
  新增团队聊天室的 REST API 接口（`GET/POST /api/chatroom/:teamId`）及配套实时 CLI 查看器，支持用户直接查看和发送消息，增强人机协作透明度与交互能力。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/177

> 上述变更标志着项目从原型阶段向可维护、可扩展的生产级架构迈出关键一步。

---

### 4. 社区热点  
无 Issues 更新，但以下开放 PR 显示出明确的社区协作方向：

- **#172 [OPEN] Modularized channels and added a TUI channel as example**  
  提出对通信通道（channels）进行模块化设计，并提供 TUI 通道作为示例，可能为未来支持 Slack、Discord 等第三方集成奠定基础。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/172

- **#185 [OPEN] refactor(cli): migrate interactive prompts to @clack/prompts**  
  将超过 1500 行基于 bash `read` 的交互提示迁移至 TypeScript 实现的 `@clack/prompts`，显著提升 CLI 用户体验（含输入验证、彩色输出、结构化交互），反映开发者对终端产品化体验的重视。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/185

尽管暂无评论，这两项 PR 的技术方向符合现代 CLI 工具发展趋势，预计将成为后续版本亮点。

---

### 5. Bug 与稳定性  
过去24小时未报告新 Bug 或崩溃问题。已合并的 #187 主动修复了因架构变更引入的构建顺序问题，体现了良好的回归防控意识。

---

### 6. 功能请求与路线图信号  
从开放 PR 可识别以下潜在路线图方向：

- **任务自动化触发机制**（#182）：当任务拖入“进行中”列时自动触发代理执行，减少手动操作步骤，提升工作流效率。该功能已编码实现，待合并后可能成为 v0.5+ 核心特性。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/182

- **UI 简化与事件流优化**（#183）：移除冗余 `message_received` 事件，简化办公室界面展示逻辑，表明团队正聚焦于减少认知负荷、提升界面一致性。  
  🔗 https://github.com/TinyAGI/tinyclaw/pull/183

- **通道模块化扩展能力**（#172）：为未来多平台消息接入预留架构空间，暗示项目正从“内部工具”向“开放集成平台”演进。

---

### 7. 用户反馈摘要  
本期无新增 Issue 评论，但结合近期 PR 内容可推断：  
用户痛点集中于 **部署复杂性高**（原依赖 Redis）、**CLI 交互体验原始**、**任务流转需手动触发**；满意度体现在对 **实时聊天可见性**（#177）和 **看板自动化**（#182）的积极响应。开发者正通过 SQLite 替代方案与交互重构直接回应这些诉求。

---

### 8. 待处理积压  
当前无长期未响应的重要 Issue。所有开放 PR（#172、#182、#183、#185）均在过去48小时内创建并持续更新，维护者响应及时。建议优先审查 #182（任务自动触发）与 #185（CLI 重构），二者对用户体验影响显著，且代码已就绪。

---  
*数据截止：2026-03-11 00:00 UTC | 来源：GitHub TinyAGI/tinyclaw*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-11）

---

## 1. 今日速览

Moltis 项目在过去24小时内保持高活跃度，共处理 **13条 Issues** 和 **13条 Pull Requests**，其中 **8个 Issues 被关闭**、**8个 PR 被合并或关闭**，显示出高效的维护节奏。社区贡献者积极修复关键 Bug，涵盖 WebSocket 连接、身份文件路径、LLM 工具调用历史等核心功能。尽管无新版本发布，但多个关键问题已通过 PR 得到解决，项目稳定性显著提升。整体开发重心集中在 **Bug 修复与用户体验优化**，反映出项目进入成熟维护阶段。

---

## 2. 版本发布

**无新版本发布**。  
当前开发活动以修复和优化为主，未触发正式版本发布流程。

---

## 3. 项目进展

今日共 **8个 PR 被合并或关闭**，推动多项关键修复落地：

- **#382**（[@lijunle](https://github.com/lijunle)）修复了节点 WebSocket 连接失败问题，新增 `/ws` 路由并调整认证中间件逻辑，解决了远程节点无法连接网关的核心通信障碍（[#380](https://github.com/moltis-org/moltis/issues/380)、[#381](https://github.com/moltis-org/moltis/issues/381)）。
- **#389**（[@penso](https://github.com/penso)）修复了 LLM 在多轮对话中无法看到自身工具调用输出的问题，通过将 `tool_result` 正确转换为 `ChatMessage::Tool` 并纳入历史记录，显著提升代理推理连贯性（关联 Issue #319）。
- **#384** 与 **#387** 分别修复了身份文件（`IDENTITY.md`/`SOUL.md`）写入路径错误及 WhatsApp 账户持久化与优雅关闭问题，增强了配置一致性与服务可靠性。
- **#386** 与 **#379** 协同解决了 onboarding 阶段 STT 测试因认证拦截导致的 401 错误，允许本地请求绕过 `auth_gate`，改善首次使用体验。
- **#368** 修复了可信网络代理启动后立即退出的问题，通过保留 shutdown channel sender 避免信号提前触发（Issue #367）。

> 整体项目在 **通信稳定性、代理行为一致性与用户引导流程** 方面取得实质性进展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#319](https://github.com/moltis-org/moltis/issues/319) — LLM 工具调用输出丢失
- **评论数：2** | **👍：1** | 作者：@alexhooketh  
- 用户反馈 LLM 在多轮迭代中“看不到自己之前的工具调用结果”，导致重复调用或幻觉。此问题直接影响代理智能体核心能力，已被 PR #389 修复，社区关注度较高。

### 🔧 高价值 PR：[#382](https://github.com/moltis-org/moltis/pull/382) — 节点连接修复
- 同时解决两个关键连接问题（#380、#381），涉及网关路由设计与认证流程调整，是近期基础设施层面最重要的改进之一。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 高 | [#319](https://github.com/moltis-org/moltis/issues/319) | LLM 无法感知自身工具调用输出，导致逻辑断裂 | ✅ 已修复（PR #389） |
| 🔴 高 | [#381](https://github.com/moltis-org/moltis/issues/381) | 节点 WebSocket 连接失败（无 `/ws` 路由 + 认证拦截） | ✅ 已修复（PR #382） |
| 🟠 中 | [#376](https://github.com/moltis-org/moltis/issues/376) | 设置 UI 将身份文件写入错误目录（根目录而非 `agents/main/`） | ✅ 已修复（PR #384） |
| 🟠 中 | [#378](https://github.com/moltis-org/moltis/issues/378) | Onboarding 阶段 STT 测试返回 401 错误 | ✅ 已修复（PR #386 / #379） |
| 🟠 中 | [#367](https://github.com/moltis-org/moltis/issues/367) | 可信网络代理启动后立即退出 | ✅ 已修复（PR #368） |
| 🟡 低 | [#375](https://github.com/moltis-org/moltis/issues/375) | Google 模型函数调用缺少 `thought_signature` | 🔄 待处理（无 PR） |

> 所有高优先级 Bug 均已闭环，系统稳定性处于近期最佳状态。

---

## 6. 功能请求与路线图信号

- **#383**（[@memwey](https://github.com/moltis-org/moltis/issues/383)）提出支持 **Lark/Feishu** 平台集成，属新通信渠道扩展需求，目前尚无对应 PR，但符合项目多平台接入的战略方向。
- **#339**（[@PeterDaveHello](https://github.com/moltis-org/moltis/pull/339)）正在推进 **繁体中文（zh-TW）本地化支持**，涵盖 macOS 与 Web 端 UI 翻译，显示国际化进程加速。
- **#358**（[@lijunle](https://github.com/moltis-org/moltis/pull/358)）针对 GitHub Copilot 企业版 Token 路由优化，解决 421 错误，反映对主流 AI 开发工具链的深度适配意图。

> 预计下一版本将优先纳入 **i18n 支持** 与 **Copilot 企业集成优化**，Lark/Feishu 支持可能进入中期路线图。

---

## 7. 用户反馈摘要

- **痛点**：  
  - 新用户 onboarding 流程中遭遇认证拦截（STT 测试失败），影响首次体验（#378）。  
  - 多轮对话中 LLM 行为不一致，用户需手动重复指令（#319）。  
  - 配置文件写入位置不直观，导致更新无效（#376）。

- **满意点**：  
  - 文档响应迅速，Docker socket 行为说明已澄清（#351 → PR #388）。  
  - 节点连接问题修复后，远程部署稳定性提升（#381 社区认可度高）。

- **使用场景**：  
  用户主要将 Moltis 用于 **本地 AI 代理开发、多工具调用工作流、以及与企业 IM/IDE 集成**，对可靠性和可观测性要求较高。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | [#261](https://github.com/moltis-org/moltis/issues/261) | GitHub Copilot provider errors | 2026-02-28 | OPEN | 超10天未响应，涉及主流 AI 工具集成，建议优先排查 |
| Issue | [#375](https://github.com/moltis-org/moltis/issues/375) | Google 模型函数调用缺失 thought_signature | 2026-03-09 | OPEN | 影响 Google Gemini 等模型兼容性，需评估修复优先级 |
| PR | [#285](https://github.com/moltis-org/moltis/pull/285) | WhatsApp sled 持久化与优雅关闭 | 2026-03-02 | OPEN | 虽被 #387 部分合并，但原 PR 仍开放，需确认是否关闭或补充 |

> 建议维护团队本周内回应 #261 与 #375，并清理 #285 状态以避免混淆。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高响应速度、关键问题快速闭环、社区贡献活跃，整体处于稳健演进阶段。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃35条，关闭15条）和 **50条 PR 更新**（待合并23条，已合并/关闭27条），显示出高强度开发与问题反馈节奏。尽管无新版本发布，但多个关键功能 PR 进入合并阶段，涵盖模型路由、重试机制、飞书增强等核心能力。社区对 **模型配置兼容性、多轮对话支持、桌面端稳定性** 等问题关注度集中，反映出用户正深入生产环境部署。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 v0.0.6.post1，但已有多个修复与功能 PR 完成合并，预计将在下一版本中集中体现。

---

## 3. 项目进展

今日共 **27个 PR 被合并或关闭**，重点进展包括：

- ✅ **#1158**：飞书频道新增“完成回复后自动添加表情”功能，解决用户无法感知模型响应结束的问题（[链接](https://github.com/agentscope-ai/CoPaw/pull/1158)）  
- ✅ **#1150**：引入 LLM API 调用自动重试机制（指数退避），提升网络波动下的稳定性（[链接](https://github.com/agentscope-ai/CoPaw/pull/1150)）  
- ✅ **#1159**：飞书富文本消息支持解析内嵌媒体文件，增强内容理解能力（[链接](https://github.com/agentscope-ai/CoPaw/pull/1159)）  
- ✅ **#1001**：修复 Discord 频道因消息超长（>2000字符）导致的发送失败问题（[链接](https://github.com/agentscope-ai/CoPaw/pull/1001)）  
- ✅ **#256**：优化 Ollama 连接错误处理，返回明确 503 错误提示而非通用 500（[链接](https://github.com/agentscope-ai/CoPaw/pull/256)）  

> 项目在 **多通道稳定性、模型容错能力、用户体验反馈闭环** 方面取得实质性推进。

---

## 4. 社区热点

以下 Issues 引发高频讨论，反映核心痛点：

- 🔥 **#282**：`pptxgenjs` 工具调用触发 `RemoteProtocolError`，导致任务中断（7条评论）——用户依赖外部工具链时协议层健壮性不足（[链接](https://github.com/agentscope-ai/CoPaw/issues/282)）  
- 🔥 **#1125**：阿里云 Coding Plan 配置后报 `AGENT_UNKNOWN_ERROR`（6条评论）——国际/国内子域名兼容性问题凸显（[链接](https://github.com/agentscope-ai/CoPaw/issues/1125)）  
- 🔥 **#275**：QQ 配置中 IP 白名单指向不明（6条评论）——文档缺失导致部署困惑（[链接](https://github.com/agentscope-ai/CoPaw/issues/275)）  
- 🔥 **#52**：多模型自适应路由需求（4条评论）——已有 PR #1089 实现 Web/CLI 配置界面，社区期待落地（[链接](https://github.com/agentscope-ai/CoPaw/issues/52)）  

> 诉求集中于 **第三方服务集成稳定性、配置文档清晰度、智能路由效率优化**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | #1144 | Win11 桌面端双击启动无界面（完全不可用） | ❌ 无 |
| 🔴 高 | #1139 | 升级至 0.0.6.post1 后内存压缩报错 `too many values to unpack` | ❌ 无 |
| 🔴 高 | #1177 | llama.cpp 模型加载失败（GGUF 文件路径解析异常） | ❌ 无 |
| 🟠 中 | #1100 | 飞书频道重复回复历史消息 | ❌ 无 |
| 🟠 中 | #1162 | 飞书图片仍无法显示 | ❌ 无 |
| 🟢 低 | #1136 | Windows 下 `execute_shell_command` 卡死会话 | ❌ 无 |

> 桌面端 Windows 兼容性为当前最大风险点，需紧急排查。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能：

- ✅ **LLM 路由配置**（#52 + #1089）：支持按任务复杂度切换模型，已进入实现阶段（[PR #1089](https://github.com/agentscope-ai/CoPaw/pull/1089)）  
- ✅ **DingTalk AI Card 支持**（#1118）：富交互卡片回复，提升企业场景体验（[PR #1118](https://github.com/agentscope-ai/CoPaw/pull/1118)）  
- ✅ **OpenRouter 提供商支持**（#1192）：扩展国际模型接入能力（[PR #1192](https://github.com/agentscope-ai/CoPaw/pull/1192)）  
- ✅ **LM Studio 集成**（#1134）：本地模型部署新选项（[PR #1134](https://github.com/agentscope-ai/CoPaw/pull/1134)）  

> 下一版本 likely 聚焦 **多模型调度、本地/云端混合部署、企业 IM 深度集成**。

---

## 7. 用户反馈摘要

**痛点：**
- “Docker 部署后模型配置不持久化，每次重启丢失”（#1156）
- “Ollama 在 Docker 内无法连接宿主机物理机服务”（#1094）
- “桌面端随机端口导致钉钉回调失败，必须手动改配置”（#1164）
- “Kimi、MiniMax、Qwen 等国产模型配置流程复杂，测试通过但实际不可用”（#1029, #1175）

**满意点：**
- 飞书表情反馈机制获赞（#978 → #1158）
- Discord 消息分片修复解决长代码块发送问题（#1001）
- 重试机制显著降低网络抖动导致的 AGENT_UNKNOWN_ERROR（#1150）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先处理：

- ⏳ **#282**（2026-03-02 创建）：`pptxgenjs` 工具调用崩溃，影响工作流连续性 —— 需排查 HTTP chunked 读取逻辑  
- ⏳ **#275**（2026-03-02 创建）：QQ IP 白名单文档缺失 —— 需补充部署指南  
- ⏳ **#919**（2026-03-08 创建）：图片处理导致机器人持续报错 —— 涉及多模态输入校验漏洞  
- ⏳ **#876**（2026-03-07 创建）：飞书群中多个 Bot 无法区分 @ 消息 —— 通道层消息过滤逻辑缺陷  

> 建议建立 **“高影响低修复成本” Issue 快速响应机制**，提升社区信任度。

--- 

**项目健康度评估：** ⭐⭐⭐⭐☆（4/5）  
活跃开发中，功能迭代迅速，但 Windows 桌面端稳定性与文档完整性构成短期风险。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-11）

---

## 1. 今日速览

ZeptoClaw 在过去24小时内表现出**高活跃度**，共处理 11 条 Issues（关闭 8 条）和 18 条 PR（合并/关闭 5 条），并发布 3 个新版本（v0.7.2–v0.7.4）。核心功能持续迭代，重点聚焦于 CLI 体验优化、配置系统健壮性提升以及原生通信渠道集成。项目整体处于**快速演进阶段**，维护者响应迅速，技术债清理与用户体验改进并行推进。

---

## 2. 版本发布

### 🔹 v0.7.4（最新）
- **核心更新**：通过 [`wa-rs`](https://github.com/qhkm/zeptoclaw/pull/294) 实现**原生 WhatsApp Web 通道**，彻底替换依赖外部二进制 `whatsmeow-bridge` 的旧方案。
- **特性开关**：需启用 `--features whatsapp-web` 编译，默认构建不受影响。
- **迁移说明**：原有 WhatsApp 配置将自动失效，用户需重新扫码登录；建议备份会话数据前升级。
- [查看完整变更](https://github.com/qhkm/zeptoclaw/compare/v0.7.3...v0.7.4)

### 🔹 v0.7.3
- **认证增强**：新增**自动导入 Claude CLI 凭证作为 fallback**机制（[#290](https://github.com/qhkm/zeptoclaw/pull/290)），解决无显式 API Key 时的零配置接入问题。
- **合规提示**：每次使用导入凭证时输出 ToS 警告，确保用户知情。

### 🔹 v0.7.2
- **工具扩展**：新增 `grep`、`find` 和统一 diff 编辑工具（[#283](https://github.com/qhkm/zeptoclaw/pull/283)），强化本地文件操作能力。
- **稳定性修复**：修正 onboard 流程中对 HTTP 429 的误判（[#293](https://github.com/qhkm/zeptoclaw/pull/293)），避免新用户因速率限制误认为密钥无效。

> ✅ 无破坏性 API 变更，但 WhatsApp 用户需注意通道迁移。

---

## 3. 项目进展

今日合并/关闭的关键 PR 显著提升了系统可靠性与用户体验：

- **配置验证对齐**：[#314](https://github.com/qhkm/zeptoclaw/pull/314) 修复 `config check` 命令误报合法字段（如 `tunnel`、`timezone`）的问题，消除用户困惑。
- **CLI 日志降噪**：[#313](https://github.com/qhkm/zeptoclaw/pull/313) 将 `agent` 和 `batch` 命令默认日志级别设为 `warn`，解决“信息墙”干扰问题（#312）。
- **模型-提供商兼容性预检**：[#311](https://github.com/qhkm/zeptoclaw/pull/311) 在启动时主动检测模型与提供商匹配性（如 GPT 模型配 Anthropic），提前拦截运行时错误。
- **配置重置功能**：[#306](https://github.com/qhkm/zeptoclaw/pull/306) 新增 `zeptoclaw config reset`，支持安全回滚至默认配置并自动备份。

> 📌 上述改进标志着项目从“功能堆叠”向“生产就绪”迈进，重点解决真实场景下的配置与运维痛点。

---

## 4. 社区热点

### 🔥 #288 [CLOSED] Native WhatsApp Web support  
[链接](https://github.com/qhkm/zeptoclaw/issues/288) | 作者：@deorozindo  
- **讨论焦点**：旧版 WhatsApp 通道依赖不存在的 `whatsmeow-bridge` 二进制，导致功能不可用。
- **社区诉求**：强烈要求官方提供**自包含、无需外部依赖**的 WhatsApp 集成方案。
- **结果**：已由维护者 @qhkm 在 v0.7.4 中通过原生 `wa-rs` 实现闭环，问题彻底解决。

> 💡 此 Issue 反映了用户对**部署简洁性**和**依赖透明性**的高度关注，推动项目向“开箱即用”方向优化。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|--------|------|------|--------|
| ⚠️ P1-critical | #310 配置校验器与运行时 schema 不同步 | 🟡 待合并 | [#314](https://github.com/qhkm/zeptoclaw/pull/314) |
| ⚠️ P2-high | #312 CLI agent 模式日志过多 | ✅ 已修复 | [#313](https://github.com/qhkm/zeptoclaw/pull/313) |
| ⚠️ P2-high | #291 缺少对 rate-limited API 验证的回归测试 | ✅ 已修复 | [#293](https://github.com/qhkm/zeptoclaw/pull/293) |

> 🔍 当前无未修复的高危 Bug，所有关键问题均已进入修复流程或已完成。

---

## 6. 功能请求与路线图信号

以下功能请求已被维护者采纳并进入实现阶段，预示下一版本重点方向：

- **`zeptoclaw uninstall` 命令**（#307 / #308）：支持安全卸载用户状态与二进制，提升生命周期管理能力 → 已由 [#315](https://github.com/qhkm/zeptoclaw/pull/315) 实现。
- **Threads 发布技能**（#295）：基于现有工具构建 Meta Threads 自动化发布流程 → 预计作为内置技能加入 v0.8。
- **模型-提供商兼容性校验**（#309）：已在 [#311](https://github.com/qhkm/zeptoclaw/pull/311) 中实现，将成为配置系统的标准预检项。

> 📈 路线图清晰：**CLI 工具链完善** + **多平台通信集成** + **配置自愈能力** 是近期三大支柱。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “第一次运行 `zeptoclaw onboard` 就因 429 报错，差点以为密钥无效”（#292）→ 已修复。
  - “`config check` 拒绝我明明在代码里见过的字段，很困惑”（#310）→ 已对齐 schema。
- **满意点**：
  - “自动导入 Claude CLI 凭证太方便了，终于不用手动复制密钥”（#289 隐含反馈）。
  - “原生 WhatsApp 支持终于来了，不用再折腾桥接服务”（#288 关闭后社区反响积极）。
- **使用场景**：
  - 开发者用于自动化消息推送（WhatsApp/Threads）。
  - 个人用户作为轻量级 AI 代理终端，依赖 CLI 快速交互。

---

## 8. 待处理积压

经筛查，**无长期未响应的重要 Issue 或 PR**。所有 P1/P2 级问题均在 24 小时内被维护者认领或关闭，体现高效维护节奏。

> ✅ 项目健康度优秀：Issue 平均响应时间 <12 小时，PR 合并周期短，技术债可控。

---  
**报告生成时间**：2026-03-11  
**数据来源**：[ZeptoClaw GitHub Repository](https://github.com/qhkm/zeptoclaw)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报**  
📅 日期：2026-03-11  
🔗 项目主页：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. **今日速览**  
过去24小时内，EasyClaw 项目整体活跃度中等偏低，但发布节奏显著加快。共发布 **3个新版本**（v1.6.3–v1.6.5），显示团队正集中修复关键问题或优化用户体验。社区互动趋于收敛：仅1个 Issue 被关闭，1个 PR 待合并，无新 Issue 提出，表明近期功能趋于稳定，用户反馈进入收尾阶段。

---

### 2. **版本发布**  
✅ **连续发布 v1.6.3、v1.6.4、v1.6.5 三个版本**，更新日志聚焦于 **macOS 安装体验优化**，重点解决 Gatekeeper 安全机制误报问题。

- **核心更新内容**：  
  所有三个版本均提供详细的 **macOS 安装指引**，明确说明“应用已损坏”提示实为系统拦截未签名应用，非文件损坏，并提供 Terminal 命令行绕过方案（如 `xattr -cr /Applications/EasyClaw.app`）。
- **破坏性变更**：无。
- **迁移注意事项**：用户无需主动迁移，但建议 macOS 用户按新版说明操作以避免启动失败。

> 📌 相关链接：  
> [v1.6.5 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.5) |  
> [v1.6.4 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.4) |  
> [v1.6.3 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.3)

---

### 3. **项目进展**  
🔧 **PR #15（待合并）**：由 @mylinkedai 提交的修复 macOS Dock 与系统托盘图标显示异常的 PR 仍处于开放状态，尚未合并。该修复针对 macOS 平台视觉一致性，提升专业用户体验，预计将在下个版本中落地。

> 🔗 [PR #15: fix: app icon in macos dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15)

---

### 4. **社区热点**  
💬 **Issue #13（已关闭）** 是过去24小时唯一活跃的讨论，聚焦于 **多模态输入兼容性问题**：用户在对话中上传图片后，模型未能正确接收或处理图像内容，但在 Codex 模式下正常。

- **用户诉求分析**：  
  该问题反映出 EasyClaw 在不同 AI 模型后端（如通用对话 vs Codex）对多模态输入的支持存在不一致性，暴露出架构层面对图像路由或预处理逻辑的差异化处理缺陷。
- **解决状态**：已关闭，推测已通过近期版本（v1.6.3+）修复，但未明确标注修复版本号，建议补充 changelog 说明。

> 🔗 [Issue #13: 在对话chat选择图片，但是模型并没有接受到图片](https://github.com/gaoyangz77/easyclaw/issues/13)

---

### 5. **Bug 与稳定性**  
⚠️ **无新报告 Bug**。历史问题 Issue #13 已关闭，结合连续三个版本的发布行为，可合理推断该图像输入失效问题已在 v1.6.3 至 v1.6.5 中被修复，**暂无已知高严重性回归或崩溃报告**。

---

### 6. **功能请求与路线图信号**  
📥 当前无明确新功能请求提出。但从 Issue #13 和 PR #15 可提取潜在路线图方向：

- **多模态交互一致性**：确保图像、文件等输入在所有模型模式下行为统一，可能成为下一阶段重点。
- **macOS 原生体验优化**：包括图标、权限提示、Gatekeeper 兼容性等，显示项目正加强跨平台（尤其是 macOS）的专业化适配。

---

### 7. **用户反馈摘要**  
🗣️ 从 Issue #13 评论中提炼关键用户声音：

- **痛点**：图像上传后无反馈、模型“视而不见”，导致用户怀疑功能是否可用。
- **使用场景**：用户期望在通用对话中直接分析截图、图表或设计稿，类似 Codex 的图像理解能力。
- **满意度**：对 Codex 模式下的图像支持表示认可，但对其他模式缺失该功能感到困惑与不满。

> 💡 建议：在 UI 层面增加图像接收状态提示（如“已上传”、“模型已接收”），降低认知负担。

---

### 8. **待处理积压**  
⏳ **长期未响应事项提醒**：

- **PR #15（macOS 图标修复）** 已开放超过24小时，虽非紧急，但涉及用户体验细节，建议维护者尽快 review 并合并，以配合近期 macOS 优化节奏。
- 无超过7天未响应的 Issue，整体响应效率良好。

> 🔔 维护者行动建议：  
> 1. 合并 PR #15 并纳入 v1.6.6 或后续版本；  
> 2. 在 Release Notes 中明确标注 Issue #13 的修复版本，增强透明度。

---  
📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
版本迭代积极，关键问题快速响应，社区互动平稳，macOS 体验持续优化，整体处于稳健发展期。

</details>

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*