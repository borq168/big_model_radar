# OpenClaw 生态日报 2026-06-07

> Issues: 297 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-07 02:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是根据您提供的OpenClaw GitHub数据生成的2026-06-07项目动态日报。

---

# OpenClaw 项目日报 — 2026-06-07

## 1. 今日活动概览

过去24小时内，OpenClaw项目更新活跃。Issues与PR总数分别达到297条和500条，其中Issues新开与活跃数量（149条）与关闭数量（148条）基本持平，PR则积压了401条待合并。项目发布了两个`v2026.6.5`的Beta版本，主要修复了QQ频道机器人的原始推理标签泄露问题，并优化了MCP工具结果的类型转换。社区对`gpt-5.4/5.5`的传输失败回归问题讨论热烈，同时一个关于升级后DeepSeek缓存失效导致成本飙升的严重问题也受到了重点关注。

## 2. 版本发布

项目发布了两个版本：`v2026.6.5-beta.2` 和 `v2026.6.5-beta.1`，均为6月5日的迭代版本。

- **主要亮点** (两个版本共通):
    - **QQ频道机器人修复**: 现在QQ机器人（QQBot）在发送消息前会自动剥离模型输出的推理/思考过程（`<thinking>`标记），防止原始思考内容泄露到频道回复中。 (#89913, #90132)
    - **MCP工具结果兼容性增强**: 对MCP工具返回的结果进行强制类型转换，以兼容 `resource_link`、`resource`、`audio`、格式错误的图片等资源类型，提高了处理容错性。

- **注意**: 两个版本的更新摘要几乎完全一致，`beta.2` 可能是在 `beta.1` 基础上进行了非常微小的修复或调整。

**最新版下载地址**: [OpenClaw Releases](https://github.com/openclaw/openclaw/releases)

## 3. 项目进展

尽管今日合并/关闭的PR数量（99条）相对较少，但多个重要PR正在积极推进中，状态为“ready for maintainer look”或已有进展：

- **CI修复**: `#91070` 修复了主线分支上的lint和导入图检查失败问题，确保持续集成的稳定性。
- **并行搜索修复**: `#91066` 为免费的Parallel Search MCP客户端设置了 `openclaw-parallel` 的用户代理头，解决了因默认 `node` 用户代理可能被限流的问题。
- **UI错误折叠**: `#90122` 修复了WebChat中非致命的内部工具错误被错误地显示为红色“Tool error”大横幅的问题，现在这些错误会在UI中被折叠，提升用户体验。
- **Anthropic模型支持**: `#90110` 为 `anthropic` 提供商添加了缺失的Claude Haiku 4.5模型静态目录条目，确保该模型能被 `openclaw` 提供商正确解析和使用。
- **子代理工具权限**: `#78441` 实现了为 `sessions_spawn` API添加 `toolsAllow` 参数的功能，允许在生成子代理时对工具权限进行更精细的控制。

## 4. 社区热点

- **#90083: OpenAI ChatGPT Responses传输故障**: 该Issue获得14条评论和3个赞，是今日最活跃的议题之一。用户报告在升级到2026.6.1后，使用 `openai/gpt-5.4` 和 `openai/gpt-5.5` 模型时出现 `invalid_provider_content_type` 错误，导致推理失败。此问题严重影响了用户使用最新模型的能力。
    - 链接: [#90083](https://github.com/openclaw/openclaw/issues/90083)

- **#88312: Codex应用服务器回合完成停滞回归**: 该问题有13条评论和3个赞，是一个P1级别的回归Bug。用户指出在2026.5.27版本中，多工具代理回合可靠地失败，而2026.5.26版本正常。这影响了ChatGPT Plus订阅用户的Codex应用服务体验。
    - 链接: [#88312](https://github.com/openclaw/openclaw/issues/88312)

- **#91018: 升级后DeepSeek Prompt Cache失效**: 虽然评论数不多（4条），但这是一个P1级别的严重问题。用户反馈从`2026.5.7`升级到`2026.6.1`后，DeepSeek的Prompt Cache完全失效，导致每小时额外花费约$6，引起了强烈关注。
    - 链接: [#91018](https://github.com/openclaw/openclaw/issues/91018)

## 5. Bug 与稳定性

今日报告了多个严重的Bug和回归问题，按优先级排列如下：

- **P0/P1级别**:
    - **回归**: `#88312` (Codex回合完成停滞) - **P1**, 已确认在 `2026.5.27` 版本回归，重现了之前修复的问题。
    - **回归**: `#90083` (OpenAI `gpt-5.4/5.5` 传输失败) - **P1**, 升级后新模型无法使用。
    - **严重**: `#91018` (DeepSeek缓存失效) - **P1**, 导致成本急剧上升。
    - **新发现**: `#90991` (Cron定时器污染全局状态) - **P1**, 报告称Cron触发器会污染全局运行时状态，导致系统范围过载。**暂无关联的修复PR**。
    - **回归**: `#90925` (子代理压缩路由错误) - **P1**, 子代理完成后的压缩流程错误地进入了OpenAI Responses API密钥路由，导致失败。
- **P2级别**:
    - **行为Bug**: `#90964` (`read`工具无法读取WebChat上传图片) - 被标记为回归，用户通过WebChat上传的图片，`read`工具因路径解析问题无法访问。

## 6. 功能请求归类

社区在24小时内提出了多项新功能需求，以下为部分归类整理：

- **会话与管理**:
    - `#90916`: 提出为“一个助手，多个会话”场景增加“话题-会话系列”（topic-session family）模型，允许在不同命名上下文通道中拥有隔离的上下文。 (**P2**)
    - `#90354`: 建议为预压缩内存刷新（pre-compaction memory flush）增加有界/验证的追加语义，防止模型写入过大或无效内容。 (**P2**)

- **提供商与模型**:
    - `#89265`: 建议增加更多本地模型提供商支持，以应对AI成本上升，并将本地模型视为一等公民。 (**P3**)
    - `#59413`:（长期需求）建议为模型回退机制增加每个候选者的重试计数，以更好地支持基于池的/代理提供商。 (**P2**)

- **安全性**:
    - `#58730`:（长期需求）基于Claude Code源码泄露的分析，请求改进 `exec()` 沙箱隔离和工具权限模型。 (**P1**)
    - `#11955`:（长期需求）提出多项内存/上下文改进，包括指标、全局语义搜索、对话链等。 (**P2**)

## 7. 用户反馈摘要

- **对回归和稳定性不满**: 从高热度议题 `#88312` 和 `#90083` 可以看出，升级后出现的回归问题让用户感到沮丧。用户明确指出了“上一个版本能用，新版本不行”的矛盾点，并提供了详细的复现步骤，期望维护者能快速定位并修复。
- **对成本敏感**: Issue `#91018` 的用户在描述中使用了“⚠️ 严重警告”和“$6 in one hour”等措辞，直接反映了成本飙升对用户造成的实际困扰和经济压力。这突显了Prompt Cache功能对使用付费API用户的重要性。
- **设备兼容性困扰**: `#90428` 和 `#47441` 反映了用户在特定环境（如WSL2、Android/Termux）下遇到的问题。用户期待项目能更好地支持多样化的部署方式，这直接关系到项目的易用性和普及度。

## 8. 待处理积压

- **Issue #49603**: “Orphaned lock files not cleared on gateway restart” (孤儿锁文件未在网关重启时清除) 这是一个P1级别的问题，自2026年3月18日创建至今未关闭，已积压近三个月，可能影响服务稳定性。
    - 链接: [#49603](https://github.com/openclaw/openclaw/issues/49603)

- **Issue #59413**: “Per-candidate retry count for model fallback” (模型回退的每候选者重试计数) 这是一个长时间未解决的功能请求（自4月2日），对于使用代理/池化API提供商的用户至关重要。
    - 链接: [#59413](https://github.com/openclaw/openclaw/issues/59413)

- **PR #86054**: (未在今日列表中，但作为一般提醒) 审查队列中存在大量积压的PR，尤其是一些标记为“waiting on author”或“needs proof”的较早PR，可能需要维护者介入，推动其进入下一个评审或合并阶段。例如 `#86627` (Keep core doctor health in contribution order) 自5月25日创建，已标记为“waiting on author”。

---

## 横向生态对比

好的，作为一名关注AI智能体与个人AI助手开源生态的资深技术分析师，我已根据您提供的各项目2026年6月7日的社区动态数据，为您整理了一份横向对比分析报告。

---

### 2026-06-07 开源 AI 智能体项目横向对比分析

#### 1. 今日横向概览

今日四个上游项目（OpenClaw, NanoBot, Zeroclaw, PicoClaw）均保持活跃，但活动重心和社区关注点差异显著。**OpenClaw** 作为核心参照，陷入了模型升级后的稳定性和成本回归风波，其 Issue 和 PR 的绝对数量远超其他项目，但大量 PR 处于积压状态。**NanoBot** 和 **PicoClaw** 更多地集中在具体的 Bug 修复和功能完善上，如多平台桥接稳定性和代码防御性编程，社区讨论相对温和。相比之下，**Zeroclaw** 则展现出激进的功能扩展态势，尤其在安全沙箱、插件注册表和自托管生态方面投入显著，其新开 PR 数量多，社区对高级安全认证（OAuth/OIDC）的讨论热度持续升温。

#### 2. 各项目活跃度对比

| 项目 | 当日 Issue 活跃 | 当日 PR 活跃 | 新增 Release | 事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 149 新开/活跃 | 99 合并/关闭 (401 PR 积压) | 2 个 Beta 版 | 核心回归和成本问题集中爆发，社区讨论激烈。 |
| **NanoBot** | 4 新开/活跃 (2 关闭) | 10 合并/关闭 (14 PR 待合并) | 无 | 修复稳定性和桥接功能，社区讨论平稳。 |
| **Zeroclaw** | 24 新开/活跃 | 5 合并/关闭 (45 PR 待合并) | 无 | 全力推进新插件系统和安全加固，大量功能 PR 在审。 |
| **PicoClaw** | 10 新开 | 15 合并/关闭 | 1 个 Nightly 版 | 防御性修复和 Slack 功能增强为主，并启动新模块开发。 |

#### 3. OpenClaw 与同类对照

仅基于今日数据，**OpenClaw** 的活动量（Issue 149条, PR 99条合并）和 PR 积压量（401条）在所有项目中最为庞大，但其社区动态显示出明显的“危机响应”模式。

-   **活动量对比**: OpenClaw 的 Issue/PR 总量显著高于其他三个项目，但其 PR 合并率（99/500 ≈ 20%）相对较低，大量工作积压。相比之下，**PicoClaw** 的合并率（15/15 = 100%）极高，说明其维护者响应迅速。
-   **技术重点偏移**: OpenClaw 的技术重点集中于**模型兼容性和回归修复**，例如 OpenAI `gpt-5.4/5.5` 传输故障、DeepSeek 缓存失效等，反映出其作为核心项目在快速迭代后承受的稳定性压力。而 **Zeroclaw** 则更侧重于**架构安全与生态扩展**（如 WASM 沙箱、远程插件注册表），**NanoBot** 和 **PicoClaw** 则更关注具体的通道桥接和代码健壮性。
-   **社区讨论面**: OpenClaw 的讨论高度集中在**回归问题、成本飙升**和对维护者的压力上。其他项目的社区讨论则更多样，包括安全策略（Zeroclaw）、功能请求（NanoBot, PicoClaw）和仓库维护（Zeroclaw）。

#### 4. 共同出现的技术方向

多项目今日出现了以下共同的技术需求，显示出整个生态的共性痛点：

-   **安全与权限模型细化**:
    -   **涉及项目**: OpenClaw, Zeroclaw, NanoBot, PicoClaw
    -   **具体诉求**: 多个社区要求更精细的工具权限控制。例如，OpenClaw 有 `exec()` 沙箱隔离（#58730）和子代理 `toolsAllow` 参数（#78441）；Zeroclaw 有技能执行命令权限细化（#5775）和临时工具激活权限（#6915）；NanoBot 有 MCP 服务器基于用户的访问控制（#2533）和工具执行中的符号链接逃逸阻止（#4221）；PicoClaw 也包含对不安全类型断言的防御性修复。这反映出社区对安全性的普遍焦虑和对权限控制的强烈需求。

-   **模型/API 兼容性维护**:
    -   **涉及项目**: OpenClaw, NanoBot, PicoClaw, Zeroclaw
    -   **具体诉求**: 今日多个项目都出现了与特定模型或 API 的适配问题。OpenClaw 有 `gpt-5.4/5.5` 传输失败和 Claude Haiku 4.5 支持；NanoBot 有 `reasoning_content` 空值丢失；PicoClaw 有对 `modelscope.cn` 中 deepseek 协议的支持；Zeroclaw 则要求为多个新提供商（如 kimmo, minimax）增加 OAuth 支持。

-   **成本与缓存优化**:
    -   **涉及项目**: OpenClaw, NanoBot
    -   **具体诉求**: OpenClaw 社区因 DeepSeek 缓存失效登上头条，用户直接抱怨每小时额外成本。NanoBot 也有 Issue（#4222）指出 `max_messages` 截断机制导致前缀缓存频繁失效。这表明在 API 付费模式下，缓存效率是直接影响用户实际成本的关键因素，且架构优化的需求非常突出。

#### 5. 差异化定位分析

-   **功能侧重**:
    -   **OpenClaw**：核心 AI 助手框架，追求广泛的模型、平台提供商和工具支持，功能全面但今日显得“大而有不稳定”。
    -   **NanoBot**：侧重于多渠道桥接和与现有生态（如 GitHub Copilot）的集成，更像个“AI 代理网关”，今日改动多为 WhatsApp、微信通道和 MCP 提供商。
    -   **Zeroclaw**：强调**自托管、安全性和插件生态**，通过 WASM 沙箱和远程注册表试图构建一个更可控的“插件平台”，目标用户可能是对安全和管控有更高要求的企业或个人。
    -   **PicoClaw**：偏向于**嵌入式和边缘设备**（如树莓派）以及模块化架构，今日启动了 `Exchange` 金融交易模块，显示出其面向特定行业的野心。

-   **目标用户**:
    -   **OpenClaw & NanoBot**：面向广大的个人开发者、AI 应用爱好者，追求快速集成和使用。
    -   **Zeroclaw**：更倾向于对安全、权限有较高要求的技术团队，或需要自建 AI 代理平台的企业。
    -   **PicoClaw**：除了普通开发者，也吸引了硬件爱好者（如树莓派用户）和希望将 AI 代理应用于特定业务（如交易）的专业用户。

-   **技术架构**:
    -   **Zeroclaw** 的创新点在于其基于 WASM 的插件沙箱，这是一种较新且安全的设计。而 **NanoBot** 和 **OpenClaw** 更多地在现有成熟的通道和 API 协议上做适配。**PicoClaw** 使用 Go 语言实现，强调性能和资源占用。

#### 6. 社区活跃度分层

基于今日的 Issue/PR 数量和版本发布情况，项目活跃度可作如下分层：

-   **第一梯队 (高活跃)**: **OpenClaw**, **Zeroclaw**
    -   **理由**: OpenClaw 拥有远超其他项目的 Issue/PR 绝对数量，社区互动（如点赞、评论）激烈。Zeroclaw 尽管 Issue 数较低，但 PR 数量同样庞大，且功能迭代内容（WASM、远程注册表）极具前瞻性，开发活跃度很高。
-   **第二梯队 (中等活跃)**: **PicoClaw**
    -   **理由**: PR 合并数量高，且有 nightly 版本发布，维护者响应积极。新功能（Exchange 模块）的开发计划清晰。
-   **第三梯队 (相对温和)**: **NanoBot**
    -   **理由**: 各项数据指标（ Issue / PR 数量，发布频率）均为最低，更新内容偏向稳定性和小功能修复，社区讨论热度也较低。

#### 7. 有证据支撑的观察

1.  **稳定性回归是不同项目社区的共同痛点**: OpenClaw 的 `gpt-5.4` 传输失败 (#90083) 和 Codex 回合完成停滞 (#88312)，Zeroclaw 的 `session/kill` 导致会话复活 (#7252) 以及 PicoClaw 的 Windows QQ 频道连接失败 (#3015)，都指向近期升级或功能迭代引入了 P1/P0 级别的回归问题，严重影响了用户体验。

2.  **安全与权限精细化需求显著集中**: 多个社区（OpenClaw, Zeroclaw, NanoBot）在同一天提出了关于工具权限控制、沙箱隔离、执行钩子（hooks）等需求。这已不是偶发，而是随着 AI 代理能力提升，用户对安全风险的关注度同步上升的体现。

3.  **用户对成本高度敏感**: OpenClaw 的 DeepSeek 缓存失效问题直接导致用户抱怨每小时多花 $6，NanoBot 也有关于缓存命中率降低的讨论。API 调用成本已成为一个公开且紧迫的社区议题，而非技术性能指标。

4.

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-07

（数据统计周期：2026-06-06 UTC 全天）

---

## 1. 今日活动概览

过去 24 小时内，NanoBot 项目共产生 7 条 Issue 更新（4 条新开/活跃，3 条已关闭）和 24 条 PR 更新（14 条待合并，10 条已合并/关闭）。无新版本发布。社区焦点集中在自定义 Provider 的 `reasoning_content` 空值丢失、会话缓存失效等稳定性修复，同时多个 WhatsApp 桥接修复和功能增强 PR 被合并。

---

## 2. 版本发布

无

---

## 3. 项目进展

今日共有 10 个 PR 被合并或关闭，其中较重要的变更如下：

| PR | 摘要 | 类型 |
|----|------|------|
| [#4228](https://github.com/HKUDS/nanobot/pull/4228) | 修复流式响应解析中 `reasoning_content` 空字符串被丢弃的问题（关闭 #4105） | Bug 修复 |
| [#4209](https://github.com/HKUDS/nanobot/pull/4209) | 允许通过 `extraBody` 传入 null 覆盖 OpenAI 图像生成默认参数（关闭 #4167） | 配置增强 |
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | 打磨桌面端外壳，统一 WebUI 共享界面，为首次桌面端发布做准备 | 功能增强 |
| [#2968](https://github.com/HKUDS/nanobot/pull/2968) | 新增 `agents.defaults.per_user_memory` 配置，实现多用户环境下的内存隔离 | 多用户支持 |
| [#2533](https://github.com/HKUDS/nanobot/pull/2533) | 为每个 MCP 服务器添加 `allowFrom` 字段，支持基于用户的访问控制 | 权限管理 |
| [#2532](https://github.com/HKUDS/nanobot/pull/2532) | 新增 Serper.dev 作为 Google 搜索提供商 | 搜索扩展 |
| [#2555](https://github.com/HKUDS/nanobot/pull/2555) | 修复 WhatsApp 桥接旧连接导致重复消息的问题 | 桥接稳定性 |
| [#2529](https://github.com/HKUDS/nanobot/pull/2529) | 修复 WhatsApp 音频消息无法下载转录的问题 | 桥接功能 |
| [#2528](https://github.com/HKUDS/nanobot/pull/2528) | 桥接启动时丢弃启动时间戳之前的旧消息，避免重放历史 | 桥接默认行为 |

此外还有多个待合并的 PR（如 #4229、#4227、#4226、#4225、#4224、#4221 等）正在等待审核。

---

## 4. 社区热点

- **#2573 – GitHub Copilot 登录失败**
  [Issue 链接](https://github.com/HKUDS/nanobot/issues/2573)
  该 Issue 获得 9 个 👍 和 3 条评论，是今日关注度最高的话题。用户报告切换到 openai 替代 litellm 后，OAuth 设备流出现 `Authorization header is badly formatted` 错误。该 Issue 已于今日关闭，但未附上具体修复说明。

- **#4105 – 自定义 Provider 丢弃空的 reasoning_content**
  [Issue 链接](https://github.com/HKUDS/nanobot/issues/4105)
  该 Bug 报告获得 1 条评论，同日两个独立 PR（#4228 与 #4227）均尝试修复同一问题，体现出社区对该问题的重视。其中 #4228 已被合并，但 #4227 仍开放中。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 当前状态 |
|----------|-------|------|----------|
| ⚠️ 高 | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | `max_messages` 截断和微压缩机制持续导致前缀/提示缓存失效，每次对话轮次都会改变发送给 LLM 的消息前缀，严重降低缓存命中率 | 无关联 PR |
| 中 | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | 自定义 Provider 在流式解析中会将 `reasoning_content=""` 转为 `None`，导致 DeepSeek 等 Thinking 模式下的字段丢失 | 已合并 #4228 |
| 中 | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | SDK 退出时 stdio MCP 未关闭引发 `RuntimeError: Attempted to exit cancel scope in a different task` | 已关闭（未说明修复方式） |
| 低 | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | 不支持 `response_format` 参数的 OpenAI 兼容图像 API 调用失败 | 已合并 #4209 |

其他已提交 PR 的修复：
- [#4229](https://github.com/HKUDS/nanobot/pull/4229) – 防止 `find_legal_message_start` 因尾部孤立工具结果而丢弃所有消息
- [#4219](https://github.com/HKUDS/nanobot/pull/4219) – 会话历史修剪前丢弃孤立工具结果
- [#4221](https://github.com/HKUDS/nanobot/pull/4221) – 阻止执行工具中相对符号链接逃逸工作区
- [#4223](https://github.com/HKUDS/nanobot/pull/4223) – 微信频道 session 过期后重载状态，修复永久静默死循环

---

## 6. 功能请求归类

| 请求 | 类型 | 关联 PR/Issue | 备注 |
|------|------|---------------|------|
| [#4220](https://github.com/HKUDS/nanobot/issues/4220) | 企业集成 | 无 | 希望支持 GitHub Copilot for Business / Enterprise 的不同 API 端点 |
| [#4218](https://github.com/HKUDS/nanobot/issues/4218) | 管理界面 | 无 | 希望在 WebUI 中添加 Cron 任务管理面板，避免手动编辑 config.json |
| [#4225](https://github.com/HKUDS/nanobot/pull/4225) (PR) | Cron 增强 | 无 | 新增 `silent` 模式（背景任务不推送）和 `lock_recipient`（固定接收者） |
| [#4224](https://github.com/HKUDS/nanobot/pull/4224) (PR) | 转录提供商 | 无 | 新增 Assembly

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的Zeroclaw GitHub数据，生成了2026年6月7日的项目动态日报。

---

## Zeroclaw 项目动态日报 — 2026-06-07

### 1. 今日活动概览

过去24小时内，Zeroclaw 项目保持高度活跃。项目共产生39条Issue更新（其中新开/活跃24条，已关闭15条）和50条PR更新（其中待合并45条，已合并/关闭5条）。本周暂无新版本发布。开发力量主要集中在新版插件系统的功能开发与安全加固，包括WASM沙箱、远程插件注册表，以及一系列面向用户自有基础设施的自托管插件。同时，大量关于安全策略、配置管理和稳定性问题的Bug修复也在同步推进。

### 2. 版本发布

无

### 3. 项目进展

今日有多个重要功能特性被合并或持续推进，具体如下：

- **安全与策略修复**:
    - **[#7281]**: 合并了关于 `forbidden_path_argument` 安全检查的修复，解决了其对heredoc和引号内 `~` 路径的误报问题，提升了策略的准确性。
    - **[#7297]**: 合并了网关功能，允许通过 `POST /webhook?agent=` 参数进行按请求的智能体分发，增强了webhook的灵活性。

- **通道修复**:
    - **[#7334]**: 合并了针对Telegram通道的Bug修复，确保当 `draft_update_interval_ms` 配置为 `0` 时，不会导致飞快的编辑洪水。

- **新插件与功能** (均为待合并状态):
    - **[#7335]**: 提出了为WASM插件引入沙箱隔离，包含资源限制、SSRF出口防护和环境变量作用域等关键安全特性。
    - **[#7333]**: 实现了远程插件注册表功能，用户可通过 `zeroclaw plugin search` 命令按名称搜索和安装已发布的插件。
    - **[#7328], [#7331], [#7325], [#7327], [#7326], [#7324]**: 提交了一系列面向自托管服务的新插件，包括n8n工作流触发器、ACE-Step音乐生成、Stable Diffusion图像生成、Nominatim地理编码、LanguageTool语法检查以及Ollama本地嵌入模型，极大丰富了“自托管”生态。

### 4. 社区热点

今日讨论最活跃的Issue和PR集中在安全架构的讨论和社区积压的清理需求上。

- **[#5601]**: 关于为Ollama Cloud、智谱、Kimi和MiniMax等提供商添加订阅原生OAuth支持的议题，依然在持续讨论中。这反映了社区对简化API密钥管理、支持多种付费订阅模式的强烈需求。
    - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/5601
- **[#7141]**: 关于增加OIDC身份验证提供者支持的议题，讨论热度不减。这标志着项目在安全架构上向企业级标准靠拢，社区对此功能十分关注。
    - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/7141
- **[#6715]**: 一个关于清理仓库中不再需要的200多个分支的议题，获得了多个赞同。这体现出社区成员对项目仓库整洁和更清晰的协作流程的关切。
    - 链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6715

### 5. Bug 与稳定性

今日报告的Bug修复集中在影响运行时行为的严重问题上，已有多位贡献者提交了对应的修复PR。

- **S0 级 (数据丢失/安全风险)**:
    - **[#7252]**: 报告了一个严重Bug： `session/kill` 路径无法彻底清除持久化历史中的ACP会话，导致“已杀死”的会话可以被重新激活。此问题已关闭。
    - **[#6978]**: 修复了配置中 `Vec<T>` 类型的密钥字段在对象数组属性中显示时未被隐藏的安全问题。此问题已关闭。
- **S2 级 (行为降级)**:
    - **[#7332]**: Telegram通道支持零值的 `draft_update_interval_ms`，导致极度频繁的编辑请求。**已有修复PR #7334**。
    - **[#7133]**: 路径安全策略(`path-policy`)对引用/heredoc命令中的`~`令牌产生误报。**已有修复PR #7281**。
    - **[#7126]**: Web UI的“清除所有”按钮仅清除了前端显示，未清空后端会话历史。
    - **[#7197]**: Web UI的工具栏在Windows系统上加载缓慢，并会弹出可见的cmd窗口。
    - **[#7151]**: 可观测性的 `tool_call` 遥测数据泄漏到聊天WebSocket，导致UI持续渲染“未知”工具卡片。

### 6. 功能请求归类

社区提出的新功能需求多集中于**安全与认证**、**工具权限细化**以及**基础设施集成**。

- **安全与认证**:
    - **OAuth/OIDC支持**: [#5601] 和 [#7141] 分别要求为更多提供商增加OAuth登录和支持OIDC认证。
    - **技能权限细化**: [#6915] 和 [#5775] 均提出技能在执行期间应获得临时的、作用域限定的工具激活权限或命令执行权限。
    - **预执行钩子**: [#5607] 建议为cron任务和SOP触发器增加轻量级的预检查钩子，以决定是否跳过执行。
- **工具权限与执行**:
    - **工具许可执行**: [#6914] 要求确保已定义的 `allowed_tools` / `denied_tools` 在智能体主循环的每个执行点都得到强制检查。
    - **Composio动作过滤**: [#6917] 要求能在Composio工具分派时，根据“动作范围”列表进行过滤。
- **基础设施与构建**:
    - **CI/CD容器镜像**: [#5908] 要求在每次PR和Release时自动构建并推送Debian容器镜像。
    - **Nix Flake改进**: [#6906] 建议改进Nix Flake的输出，使其能正确暴露 `zeroclaw` 包和模块。

### 7. 用户反馈摘要

- **极速模式下Telegram编辑风暴**: 在Bug [#7332] 中，有用户报告了Telegram通道在极速流式传输时的“洪水”问题，这表明用户对默认配置下的性能稳定性有很高期待。
- **开源/商业部署的“安全缝隙”**: 在多个与安全相关的Issue中（如 [#7133], [#6978], [#7068]），用户社区表达了对在开源部署或测试环境中可能存在的安全暴露问题的担忧，例如误报和遥测泄漏。
- **仓库维护的“负担”**: 社区成员通过 [#6715] 表达了对仓库中存在大量已合并但未清理分支的维护负担感到困扰，希望项目保持更整洁的状态。

### 8. 待处理积压

以下是一些标记为 `status:blocked` (阻塞) 或 `status:accepted` (已接受) 的长期重要Issue，可能需要维护者的关注。

- **[#5601]**: 为多提供商添加OAuth支持的功能请求。自4月10日创建以来已讨论两个多月，目前处于 `blocked` 状态，可能依赖于架构决策。
- **[#6715]**: 清理不必要的分支。虽不复杂，但作为一个集体行动任务，可能需要核心维护者主动执行。
- **[#6914]**: 强制 `allowed_tools` 许可。这是一个关键的安全功能，其实现将直接影响系统稳定性，但当前状态为 `blocked`。
- **[#5908]**: 自动构建Debian镜像。这有助于提升用户体验和项目可用性，但可能受限于CI资源或基础设施的复杂性。
- **[#5775], [#5607]**: 这些是社区功能请求，虽然已被接受为目标，但可能需要进一步的规划或设计才能进入开发阶段。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，以下是基于您提供的 PicoClaw 项目 GitHub 数据生成的 2026 年 6 月 7 日项目动态日报。

---

# PicoClaw 项目日报 | 2026-06-07

## 今日活动概览

过去 24 小时内，PicoClaw 项目社区提交活跃，共处理了 12 项 Issues（其中 10 项为新开，2 项已关闭），并合并或关闭了 15 项 Pull Requests。项目发布了一个新的 nightly 版本 (v0.2.9-nightly.20260607.7d2b0c2a)。今日主要变化包括：一项旨在建立新 `Exchange` 基础设施模块的系列 Issue 被创建，标志着代号为 “EXM” 的新功能开发启动；多个针对代码健壮性和防御性编程的修复 PR 被快速合并；此外，Slack 频道的消息格式和路由逻辑得到了改进。

## 版本发布

项目今日发布了一个自动化 nightly 构建版本，供社区测试。

-   **版本号**: [v0.2.9-nightly.20260607.7d2b0c2a](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260607.7d2b0c2a)
-   **说明**: Nightly Build，自动构建，可能存在不稳定性。完整变更日志可查看 [v0.2.9...main 的对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)。
-   **影响**: 此版本为自动化产出，未标记破坏性变更。建议使用稳定版的用户谨慎升级。

## 项目进展

今日社区合并了多项对项目有实际推进作用的 PR，主要集中在代码健壮性和功能完善上。

-   **Slack 功能增强 (PR #3020)**: 已合并的 [PR #3020](https://github.com/sipeed/picoclaw/pull/3020) 改进了 Slack 工具反馈跟踪和消息格式，并增加了基于频道的 allow/ignore 过滤器，以支持更精细的路由控制。
-   **核心稳定性修复 (PR #3014, #3021, #3022, #3023 等)**: 贡献者 @chengzhichao-xydt 今日提交并合并了多个修复 PR，重点解决潜在的程序崩溃和数据安全问题。这些修复包括：修复 `Manager.Reload()` 时的 goroutine 泄漏；防止 `agent` 为 nil 时对 map 进行不安全访问；为 `sync.Map` 的 `LoadAndDelete` 操作添加 ok 检查，防止 panic；在文件解压函数中检查 `Close()` 错误，避免静默的 I/O 错误导致文件损坏。
-   **多智能体协作框架 (PR #423)**: 一个早期的工作进展（WIP）PR [PR #423](https://github.com/sipeed/picoclaw/pull/423) 被合并，它建立了一个基础的多智能体协作框架，包含共享上下文池、代理交接和发现工具。
-   **协议支持扩展 (PR #1112)**: 已合并的 [PR #1112](https://github.com/sipeed/picoclaw/pull/1112) 增加了对 `modelscope.cn` 平台中 `deepseek-ai` 协议的支持，解决了用户在使用 deepseek 模型时遇到的协议识别错误。

## 社区热点

今日最受关注的 Issue 是 [Issue #2625 “[Feature] Provide compiled builds with WhatsApp support”](https://github.com/sipeed/picoclaw/issues/2625)，它获得了 1 个 👍 和 8 条评论。用户 `@duckida` 希望在树莓派 Zero 2 的 arm64 构建中使用 WhatsApp 频道，但官方构建未包含该支持。该诉求通过编译器标志提议，现已被关闭，表明可能已被采纳或提供了解决方案。

另一个值得关注的 PR 是 [#3020](https://github.com/sipeed/picoclaw/pull/3020) (Slack 格式化/过滤)，它在描述中提到“this includes the Slack formatting/rendering work plus channel filtering needed for routing #review”，暗示这是一次重要的功能迭代，可能解决了用户对 Slack 频道使用体验的反馈。

## Bug 与稳定性

今日报告的 Bug 及进行的防御性修复主要集中在崩溃和资源泄漏问题上。

-   **[严重] QQ 频道 Windows 连接失败 (Issue #3015)**: 该 [Issue](https://github.com/sipeed/picoclaw/issues/3015) 报告在 Windows 构建版本上，运行 QQ 频道时因获取 token 超时而导致启动失败。目前尚未有关联的修复 PR。
-   **[严重] goroutine 泄漏与空指针问题 (PR #3014, PR #3016)**: 两个 PR 均指向 `Manager.Reload()` 方法在配置重载时未取消旧任务，导致后台 goroutine 泄漏。此外，当 `ts.agent` 为 nil 时，可能触发空指针解引用。PR #3016 是目前开放的跟进版本。
-   **[一般] 不安全类型断言导致 panic (PR #3021, #3022, #3018)**: 数个修复 PR 针对 Slack、LINE、Feishu 等频道和存储模块中 `sync.Map` 操作的不安全类型断言进行了修复，这些断言在键不存在时会直接 panic。
-   **[一般] I/O 错误漏报 (PR #3023)**: 更新器模块中的文件解压函数 (`extractZip`, `extractTarFromReader`) 未检查 `Close()` 错误，可能导致磁盘满等 I/O 故障被静默忽略，从而产生损坏文件。
-   **[一般] Base64 编码器未关闭 (PR #3017)**: `encodeMediaFile` 函数中，当 `io.Copy` 出错时，base64 编码器未关闭，导致输出不完整。

## 功能请求归类

今日社区提出的新功能请求主要集中在构建一个全新的 `Exchange`（交易所）模块上，由用户 `@jcafeitosa` 发起，并通过多个 Issue 分解任务。

-   **Exchange 模块:** 一组新创建的 Issue 清晰描述了一个新功能的框架：
    -   **核心接口定义**: `EX-001` ([#3024](https://github.com/sipeed/picoclaw/issues/3024)): 定义 `Exchange` 接口和 Go 类型。
    -   **连接器实现**: `EX-002` ([#3025](https://github.com/sipeed/picoclaw/issues/3025)): 实现 Binance WebSocket 连接器；`EX-003` ([#3026](https://github.com/sipeed/picoclaw/issues/3026)): 实现 Binance REST 连接器。
    -   **性能优化**: `EX-004` ([#3027](https://github.com/sipeed/picoclaw/issues/3027)): 为订单簿实现无锁环形缓冲区；`EX-005` ([#3028](https://github.com/sipeed/picoclaw/issues/3028)): 对交易所连接器进行延迟基准测试。
    -   **风险与 CLI**: `RG-001` ([#3029](https://github.com/sipeed/picoclaw/issues/3029)): 定义风险管理器接口；`EXM-001` 至 `EXM-003` ([#3030](https://github.com/sipeed/picoclaw/issues/3030), [#3031](https://github.com/sipeed/picoclaw/issues/3031), [#3032](https://github.com/sipeed/picoclaw/issues/3032)): 定义 ClawHub 消息类型、CI/CD 流水线和 `clawtrade` CLI 结构。
-   **i18n 文档**: [PR #2935](https://github.com/sipeed/picoclaw/pull/2935) 提出为项目文档和前端增加繁体中文（zh-TW）支持，目前仍处于开放状态。

## 用户反馈摘要

-   **Raspberry Pi 用户对 WhatsApp 支持的需求**: [Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) 的用户明确表示，因为 arm64 构建包不包含 WhatsApp 支持，导致无法在树莓派上快速更新和使用 PicoClaw。
-   **Windows 用户反馈 QQ 频道连接问题**: [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) 的用户报告在 Windows 上运行 QQ 频道时出现 token 获取超时，而 Pico 频道则工作正常，这表明问题可能与 QQ 频道的 Windows 集成部分有关。
-   **技能创建流程优化**: PR #3013 的文档更新旨在移除对缺失脚本 (`init_skill.py`, `package_skill.py`) 的引用，以简化用户手动创建技能的流程。这反映出用户在使用 `skill-creator` 功能时遇到的困惑。

## 待处理积压

-   **繁体中文本地化 PR**: [PR #2935](https://github.com/sipeed/picoclaw/pull/2935) 自 5 月 24 日创建以来仍处于开放状态，并未被标记为陈旧（stale）。该 PR 为文档和前端提供了完整的繁体中文支持，建议维护者根据项目规划评估合并优先级。
-   **Exchange 模块待完成**: 新创建的 [Issues #3024 - #3032](https://github.com/sipeed/picoclaw/issues/3024) 系列明确了 `Exchange` 模块的具体任务，目前均无关联的 PR，标志着该功能的开发刚刚起步，维护者若对该功能感兴趣，可关注其后续进展。
-   **`Reload()` 方法 goroutine 泄漏修复 (跟进)**: [PR #3016](https://github.com/sipeed/picoclaw/pull/3016) 是对已关闭的 PR #3014 的跟进，目前仍处于开放状态。维护者需要对其内容进行审查和确认。

</details>