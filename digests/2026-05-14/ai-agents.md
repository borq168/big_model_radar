# OpenClaw 生态日报 2026-05-14

> Issues: 500 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-14 02:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw 项目深度报告

好的，这是为您生成的 OpenClaw 项目日报。

---

# OpenClaw 项目动态日报 — 2026-05-14

## 今日活动概览

过去24小时内，OpenClaw项目社区高度活跃，共产生500条Issue更新和500条PR更新。其中，新开或重新活跃的Issue为446条，有54条已关闭；新提交的PR中，有473条待合并，27条已被合并或关闭。此外，项目发布了3个新的Beta版本（v2026.5.12-beta.4、beta.5、beta.6），均以错误修复为主。社区讨论焦点集中在Slack连接稳定性、插件配置无法热加载、会话死锁等问题上，维护者也快速响应，提交了针对网关TLS安全、SSRF防护和Codex集成的修复PR。

## 版本发布

### v2026.5.12-beta.6
- **Fixes**:
    - 修复iMessage在发送纯媒体原生消息时，会显示可见的 `<media:image>` 占位符文本的问题，同时保留了防止自我回显重复的内部echo键。 (#81209)
    - 确保在第一个 `sessio...` (描述不完整)。

### v2026.5.12-beta.5
- **Fixes**:
    - 修复网关在解析时，未能将Talk会话作用域传递给解析器的问题。 (#81379)
    - 强化网关协议，要求v4客户端和流式显式发送 `deltaText`/`replace` 帧，以便SDK客户端无需本地差异化即可使用助手更新。 (#80725)
    - 修复GitHub Copilot相关问题的早期部分。 (描述不完整)

### v2026.5.12-beta.4
- **Fixes**:
    - 修复Codex运行时：允许官方安装的 `@openclaw/codex` 包使用其私有的任务运行时SDK辅助程序，解决了迁移后的OpenAI/Codex Beta运行中出现的 `MODULE_NOT_FOUND` 错误。
    - 修复Codex迁移：使“Enter”键在继续操作前先激活高亮显示的单选行，避免 `Skip for now` (跳过) 等操作出现意外行为。

**破坏性变更与迁移注意事项**: 当前版本的Release Notes未明确提及破坏性变更。

## 项目进展

今日共有27个PR被合并或关闭，以下为值得关注的进展：

- **安全性增强**:
    - `fix: macOS node auto-trusts first TLS certificate and accepts rogue...` (#50643) 已被关闭。该PR修复了一个严重的安全漏洞，防止macOS节点客户端自动信任首次连接的任何TLS证书，从而避免被中间人攻击。此修复直接回应了已存在较长时间的Issue #50642。
    - `fix(ssrf): allow hostnameAllowlist to bypass .internal/.localhost/.local blocks` (#79862) 正在推进，旨在修复SSRF保护规则在用户明确配置 `hostnameAllowlist` 后仍会拦截 `.internal` 等域名的问题。
- **开发者体验改进**:
    - `Expose reload kind in config schema lookup` (#81574) 被关闭。该PR旨在允许外部工具查询特定配置项是否需要重启网关才能生效。
    - `fix(deepseek): strip reasoning_content from input messages when thinking is enabled` (#75350) 针对使用DeepSeek V4推理模型时，因 `reasoning_content` 字段未正确清理导致的多轮对话400错误提供了修复方案。
- **功能与稳定性**:
    - `Route Codex message tool replies back to WebChat and TUI` (#81586) 已提交。该PR旨在解决Codex生成的回复在WebChat和TUI界面中不可见的问题。
    - `fix(cron): persist due job outcomes incrementally` (#81572) 提交，旨在解决一次性Cron任务完成后状态未即时更新的问题。

## 社区热点

以下Issue和PR是今日讨论最活跃的焦点：

1.  **Silently lost connection to Slack (#72808)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/72808](https://github.com/openclaw/openclaw/issues/72808)
    - **分析**: 此Bug已存在超过两周，获得16条评论和2个赞。用户反映与Slack的连接会在无预警的情况下断开，导致机器人无法响应消息。这是一个严重影响用户体验的问题，特别是在演示等场景下。社区对此表现出高度关注，但尚未看到对应的修复PR被合并。

2.  **Plugin config has no env-var or writable-overlay path (#72950)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/72950](https://github.com/openclaw/openclaw/issues/72950)
    - **分析**: 用户指出，插件的配置（`plugins.entries.<id>.config`）在启动时从 `openclaw.json` 读取，但在某些安全沙箱环境下，此目录是只读的，导致任何配置变更都需要重建镜像。用户诉求是为插件配置提供环境变量或可写覆盖路径的支持，以提升部署灵活性。

3.  **thought_signature 400 regression in 2026.4.25 (#72879)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/72879](https://github.com/openclaw/openclaw/issues/72879)
    - **分析**: 用户报告一个已修复的Bug（`thought_signature` 400错误）在v2026.4.25版本中再次出现。这是一个典型的回归问题，且涉及对Google生成式AI API的兼容性，社区对此反应迅速，有8条评论，说明该问题影响了部分用户的正常使用。

## Bug 与稳定性

今日报告的Bug主要集中在以下几类，按严重性排序：

**严重 / 高影响**
- **macOS TLS自动信任漏洞 (#50642)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/50642](https://github.com/openclaw/openclaw/issues/50642)
    - **严重程度**: 严重（CVSS v3.1评分 9.0 / v4.0评分 9.5）
    - **状态**: 已有配套修复PR (#50643)，今日已被关闭。
- **Stuck sessions never aborted (#71127)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/71127](https://github.com/openclaw/openclaw/issues/71127)
    - **严重程度**: 高 (Crash/Hang)
    - **摘要**: 诊断系统检测到卡住的会话，但运行时没有自动恢复机制，导致卡住的会话需要手动重启网关才能恢复。
- **Multi-tool turn replay produces orphan tool_use blocks (#74907)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/74907](https://github.com/openclaw/openclaw/issues/74907)
    - **严重程度**: 高
    - **摘要**: 这是一个v2026.4.x的回归问题。在长时间运行的会话中，包含多工具调用的回合会触发Anthropic API的400错误，导致对话中断。

**中 / 低影响**
- **SSRF guard blocks hostnames ending in .internal (#79850)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/79850](https://github.com/openclaw/openclaw/issues/79850)
    - **摘要**: 即使配置了 `allowPrivateNetwork: true`，SSRF防护仍会错误拦截以 `.internal` 结尾的域名。已有修复PR (#79862)。
- **Subagents list still empty on v2026.4.29 (#75593)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/75593](https://github.com/openclaw/openclaw/issues/75593)
    - **摘要**: 用户报告 `subagents` 列表命令即使刚创建子代理后也返回空列表，怀疑是之前修复的问题再次出现。
- **TGUI requires scope re-approval after reboot (#80730)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/80730](https://github.com/openclaw/openclaw/issues/80730)
    - **摘要**: 尽管 `paired.json` 中存有有效令牌，但重启机器后，TUI仍要求用户重新批准作用域。该Issue今日已被关闭。

## 功能请求归类

用户今日提出的功能请求及讨论主要有：

- **Configurable upload size limit for Control UI (#71142)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/71142](https://github.com/openclaw/openclaw/issues/71142)
    - **摘要**: 用户请求将Control UI聊天窗口内5MB的硬编码文件上传限制改为可配置项，以便上传更大的图片或文件。
- **Support for multiple Azure/Teams bots on a single Gateway (#71058)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/71058](https://github.com/openclaw/openclaw/issues/71058)
    - **摘要**: 用户请求允许在一个OpenClaw实例上配置多个Teams机器人，以满足不同的应用场景。
- **/v1/responses drops every built-in tool call from output (#75074)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/75074](https://github.com/openclaw/openclaw/issues/75074)
    - **摘要**: 开发者请求 `/v1/responses` API能够选择性地暴露内建工具调用信息，以便进行离线的工具使用评估或日志记录。
- **Separate internal service identity from user auth (#69066)**
    - **链接**: [https://github.com/openclaw/openclaw/issues/69066](https://github.com/openclaw/openclaw/issues/69066)
    - **摘要**: RFC请求将网关内部服务身份与用户认证分离，以支持更灵活的授权模型和内部RPC调用。

## 用户反馈摘要

- **Slack连接丢失问题令用户失望**: 用户在Issue #72808中反馈，Slack连接在未报错的情况下静默中断，导致在向朋友演示时机器人完全没有响应，严重影响了产品可用性和用户信任。
- **通信通道的不一致行为造成困扰**: 多个Issue反映了不同通道（Telegram、Slack、Matrix）在处理消息时的特殊行为和Bug（如制造虚假回复、流式传输静默、重复消息等），这些不一致性给管理多通道的用户带来了额外负担。
- **代理和会话管理复杂易出错**: 用户反馈关于子代理列表为空（#75593）、会话卡死需手动重启（#71127）、配置变更需重建镜像（#72950）等问题，表明OpenClaw在复杂部署场景下的可靠性和易用性仍是痛点。
- **反馈周期短，社区声音被快速响应**: 如 #50642 的高危漏洞，从报告到修复PR关闭，周期较长但在今日得到解决。同时，针对SSRF问题的PR (#79862) 也已提交。这表明维护者对严重问题和核心安全漏洞有较高的响应优先级。

## 待处理积压

以下为今日发现的、尚未得到明确回应的长期或重要Issue/PR：

- **长期Issue**:
    - **Add TTL/Expiry for Delivery Queue Messages (#16555)**: 此功能请求自2026年2月提出，讨论如何为消息投递队列添加过期时间，以防止重启后大量过期消息泛滥。目前已有4条评论，但状态仍为`OPEN`，未看到跟进计划。
        - 链接: [https://github.com/openclaw/openclaw/issues/16555](https://github.com/openclaw/openclaw/issues/16555)
- **重要但未解决的Bug**:
    - **Write/exec tool parameters silently dropped (#53408)**: 此Bug自2026年3月报告，描述了在长对话后，`write` 和 `exec` 工具的**所有参数**会静默丢失，是一个严重影响使用的问题。虽然讨论持续到今日，但尚未有修复PR。
        - 链接: [https://github.com/openclaw/openclaw/issues/53408](https://github.com/openclaw/openclaw/issues/53408)
- **状态模糊的PR**:
    - **`[COMMANDS]` feat(doctor): add disk space health check for state directory (#59196)**: 此PR自2026年4月1日提交，旨在为`doctor`命令增加磁盘空间检查功能，但至今仍被标记为 `triage: needs-real-behavior-proof`，处于待审状态。
        - 链接: [https://github.com/openclaw/openclaw/pull/59196](https://github.com/openclaw/openclaw/pull/59196)

---

## 横向生态对比

好的，这是基于您提供的四个开源项目日报生成的横向对比分析报告。

---

### 开源AI Agent项目横向对比分析报告 (2026-05-14)

#### 1. 今日横向概览

今日各项目均表现出较高活跃度，但在规模和焦点上差异明显。**OpenClaw** 继续以其庞大的社区体量和企业级稳定性（如Slack连接、TLS安全）占据主导地位，单日处理近1000条Issue/PR。**NanoBot** 和 **Zeroclaw** 则专注于核心功能迭代，前者在安全（DM策略）和稳定性（模型故障转移、MCP连接）上取得显著进展，后者正全力推进v0.8.0多智能体架构，并暴露了多项严重Bug。**PicoClaw** 作为轻量级项目，更新集中在通道适配、工具增强和模型兼容性修复上，但一个影响广泛的API认证Bug成为今日焦点。

#### 2. 各项目活跃度对比

| 项目 | 活跃Issues | 活跃PRs | 版本发布 | 关键事实性备注 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (446新开, 54关闭) | 500 (473待合并, 27合并/关闭) | 3个Beta版 | 社区规模最大，讨论集中在企业级集成问题（Slack连接丢失、插件配置）。高危漏洞（TLS自动信任）修复已关闭。 |
| **NanoBot** | 16 (3新开, 13关闭) | 14 (6待合并, 8合并/关闭) | 无 | 活跃度相对较低，但PR合并效率高。核心进展包括模型自动切换和MCP稳定性。安全方面，DM白名单诉求和新诊断工具提议是热点。 |
| **Zeroclaw** | 37 (22新开, 15关闭) | 50 (33待合并, 17合并/关闭) | 无 | 处于核心架构升级期（v0.8.0多智能体）。社区关注安全加固（配对码强度）和新技能系统，但多个S1级Bug（Cron、搜索工具）被报告。 |
| **PicoClaw** | 9 (4新开, 5关闭) | 43 (14待合并, 29合并/关闭) | 1个Nightly版 | 活跃度中等，PR合并数量高。重要更新包括Gemini搜索工具和群聊功能。但一个**API密钥认证全面失败**的严重Bug (Issue #2769) 亟待解决。 |

#### 3. OpenClaw 与同类对照

- **活动量差异巨大**：OpenClaw的单日Issue/PR数量是其他项目总和的数倍甚至数十倍，反映了其更广泛的用户基础、更复杂的生态系统和更高的维护工作量。
- **技术重点分化**：OpenClaw今日的技术重点在于**网关安全**（TLS、SSRF防护）、**集成稳定性**（Slack、Codex）和**配置管理**。而NanoBot侧重**运行时稳定性**（模型故障转移、MCP连接），Zeroclaw聚焦于**多智能体架构与技能系统**，PicoClaw则致力于**通道与工具功能补全**。
- **社区讨论面**：OpenClaw的社区讨论更多涉及企业级部署场景（如Slack连接、只读文件系统、多机器人支持），反映了其面向DevOps和高级用户的定位。其他项目的社区议题更聚焦于基础功能体验，如NanoBot的“静默回复”和PicoClaw的“流式输出”。

#### 4. 共同出现的技术方向

今日多个项目均出现了以下共同需求：

- **模型兼容性与稳定性**：
    - **Deepseek模型适配**：OpenClaw（PR #75350）和PicoClaw（Issue #2706）都报告并处理了因Deepseek V4模型的`reasoning_content`字段引起的问题。这表明该模型在社区中应用广泛，但集成过程中存在普遍的技术挑战。
    - **模型故障转移/自动切换**：OpenClaw和NanoBot社区均有相关讨论。OpenClaw的Issue #72950（环境配置文件变更）间接涉及了配置灵活性与灾备；NanoBot的PR #3756明确实现了`fallback_models`功能。这反映了用户对高可用模型服务的普遍需求。
- **安全性增强**：
    - **网关与认证安全**：OpenClaw修复了macOS TLS证书自动信任的高危漏洞，并持续改进SSRF防护。NanoBot新增了DM白名单的需求（Issue #3768）。Zeroclaw的社区成员强烈要求提升配对码强度（Issue #6613）。安全加固是各项目共同关注的方向。
- **诊断与调试工具**：
    - **诊断命令（`doctor`）**：NanoBot社区（Issue #3769）和OpenClaw项目（PR #59196）均出现了增加`doctor`类诊断命令的请求或实现。这表明随着系统复杂性增加，用户对易用的运维调试工具需求日益增长。

#### 5. 差异化定位分析

- **功能侧重**：
    - **OpenClaw**：企业级集成与网关管理，强调跨平台消息通道（Slack, Teams）的稳定性和安全性。
    - **NanoBot**：个人助手与Agent编排，强调模型容灾、上下文压缩和子代理管理等运行时优化。
    - **Zeroclaw**：下一代多智能体协作框架，当前正重构运行时与技能系统，面向复杂的自动化工作流。
    - **PicoClaw**：轻量级、边缘友好型Agent，重点适配低功耗设备（树莓派）和主流聊天通道（Telegram, Discord），功能迭代快。
- **目标用户**：
    - **OpenClaw**：DevOps工程师、系统管理员、企业级AI应用开发者。
    - **NanoBot**：个人开发者、AI爱好者、需要稳定个人助手功能的用户。
    - **Zeroclaw**：高级开发者、AI研究员，探索多Agent协作和复杂任务分解的用户。
    - **PicoClaw**：嵌入式/物联网开发者、偏好简洁架构的开发者、Raspberry Pi用户。
- **技术架构**：
    - **OpenClaw**：模块化网关架构，支持多种后端、通道和插件，配置复杂。
    - **NanoBot & Zeroclaw**：从代码结构和近期PR看，更偏向单体或多进程的Agent运行时，但Zeroclaw正通过v0.8.0向微服务架构演进。
    - **PicoClaw**：架构简洁、单一二进制部署是其显著特征，优先保证启动速度和资源占用。

#### 6. 社区活跃度记录

基于今日的数据和发布情况，可进行如下活跃度分层：

- **高度活跃**：**OpenClaw**。绝对的活动体量（近1000条Issue/PR）、连续发布3个Beta版本、对高危漏洞的快速响应，均表明其社区核心活跃且维护投入巨大。
- **中度活跃**：**Zeroclaw**、**PicoClaw**。两者均有数十条PR和Issue更新。Zeroclaw的活跃度来源于核心架构升级（v0.8.0 PR）和随之而来的系统性Bug，而PicoClaw则得益于频繁的功能性PR合并。
- **低度活跃但高效**：**NanoBot**。虽然Issue/PR数量最少，但其合并比例高，且合并了“模型故障转移”这样影响深远的特性，体现了项目管理的聚焦与高效。

#### 7. 有证据支撑的观察

1.  **社区关注点从“能用”转向“好用”**：多个项目的热点诉求反映了用户不再满足于基础功能。OpenClaw用户对Slack静默断连的失望、NanoBot用户请求“模型自动切换”和“配置诊断工具”、Zeroclaw用户要求“更强的配对码”，都表明社区已从探索性使用转向对可靠性、安全性、易用性的深度要求。
2.  **多智能体是明确但仍在进化的发展方向**：Zeroclaw将v0.8.0多智能体运行时作为核心主线，OpenClaw社区也有相关功能请求。但今日NanoBot和PicoClaw的日报中未有类似主题，说明该领域尚处早期，各项目路线图分化。
3.  **模型生态的兼容性仍是普遍性痛点**：OpenClaw和PicoClaw同时遇到Deepseek V4模型字段兼容性问题，OpenClaw和NanoBot社区均提及模型故障转移。这表明，在快速发展的模型生态中，Agent框架的适配工作繁重且具挑战性。
4.  **PicoClaw出现潜在的致命性故障**：其Issue #2769（API密钥认证全面失败）是目前所有项目中影响范围最广的Bug。如果此问题不能迅速定位修复，将会严重动摇用户对PicoClaw稳定性的信任。相比之下，其他项目的严重Bug（如OpenClaw的TLS漏洞）已有对应修复。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 NanoBot 项目动态日报。

---

## NanoBot 项目动态日报 | 2026-05-14

### 1. 今日活动概览

过去24小时内，项目活跃度良好。共产生16条Issue更新（其中新开3条，关闭13条）和14条PR更新（其中6条待合并，8条已合并/关闭）。重点活动集中在安全增强（DM策略）、诊断工具（`nanobot doctor`）以及稳定性修复（MCP连接、模型自动切换、上下文压缩）。社区提交了多项有意义的贡献，特别是在Windows兼容性、Telegram通道功能方面。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日合并了多项重要的功能增强与修复：

- **模型失败自动切换（Provider/Model Failover）**：`#3756` 已合并。该PR实现了当主模型报错且无内容流时，自动按顺序尝试`fallback_models`配置列表中的备选模型（可跨不同提供商），增强了服务的可用性。呼应了此前 `#3376` 社区对多模型容灾能力的诉求。
- **MCP连接稳定性修复**：`#3740` 已合并。修复了当配置的MCP服务器不可达时，`streamable_http_client`引发的RuntimeError导致事件循环崩溃的问题。现在会在连接前先通过TCP探测端口，避免整体程序崩溃。
- **会话消息保留逻辑修复**：`#3765` 已合并。该PR修复了自动压缩功能 (`AutoCompact`) 会破坏性替换`session.messages`的Bug。现在会将压缩后的消息正确追加至会话，而非替换，确保会话历史不丢失。
- **测试与代码结构优化**：`#3766` 已合并。为`ContextBuilder`、`SubagentManager`、`AutoCompact`等核心组件新增了121项测试，并将超长的`test_runner.py`拆分为9个聚焦文件，显著提升了代码可维护性。
- **其他已合并/关闭的PR**：还包括对Shell工具输出截断的可配置支持 (`#1923`, `#1896`)、显示模型推理内容 (`#3655`)、以及若干文档和拼写修复 (`#1135`, `#915`)。

### 4. 社区热点

- **[#235] `I've completed processing but have no response to give.`**
  - **链接**: https://github.com/HKUDS/nanobot/issues/235
  - **摘要**: 该Issue虽已关闭，但仍是今日互动量最高的议题，获得15条评论和9个👍。用户报告在使用`deepseek/deepseek-chat`模型时，Bot会静默地回复“已完成处理但无响应”，网关日志无任何错误信息。此问题可能涉及模型返回空内容的静默处理，值得后续关注。

- **[#3376] [enhancement] 支持模型异常自动切换**
  - **链接**: https://github.com/HKUDS/nanobot/issues/3376
  - **摘要**: 此功能请求已关闭，但其对应的PR `#3756` 已于今日合并。说明社区对多模型配置下的自动容灾能力有强烈需求，该需求已得到官方及时响应和解决。

- **[#3768] [enhancement] `dmPolicy` — unknown sender pairing/allowlist**
  - **链接**: https://github.com/HKUDS/nanobot/issues/3768
  - **摘要**: 今日新开的安全增强Issue，获得1个👍。用户提出私信(DM)未做任何鉴权，任意知晓Bot用户名的人均可消耗API配额或探测工具，请求增加白名单机制。此议题反映用户对安全性的关注度提升。

- **[#3769] [enhancement, feature request] `nanobot doctor`**
  - **链接**: https://github.com/HKUDS/nanobot/issues/3769
  - **摘要**: 今日新开的功能请求，请求添加类似`doctor`的诊断命令，用于一键验证配置和通道连通性。灵感来自 `openclaw doctor`，表明用户对部署和调试的易用性有更高期待。

### 5. Bug 与稳定性

今日报告了数个影响运行的Bug，均已有对应的修复或关闭记录：

- **严重** | **[#3726] 上下文压缩bug导致系统无法运行**
  - **链接**: https://github.com/HKUDS/nanobot/issues/3726
  - **状态**: 已关闭
  - **描述**: 报告了静默压缩时因`token_count`为0导致的计算异常，可能造成无限循环。
  - **对应修复**: PR `#3765` 已合并，修复了此逻辑。

- **严重** | **[#3739] MCP服务未启动时启动nanobot agent报错**
  - **链接**: https://github.com/HKUDS/nanobot/issues/3739
  - **状态**: 已关闭
  - **描述**: 当配置的MCP服务未启动时，agent会报错崩溃。
  - **对应修复**: PR `#3740` 已合并，通过探活机制避免了崩溃。

- **一般** | **[#3746] WebUI: markdown渲染器启动后预加载大块代码高亮资源 (>1 MB)**
  - **链接**: https://github.com/HKUDS/nanobot/issues/3746
  - **状态**: 打开 (新开)
  - **描述**: 报告了WebUI启动时强制预加载约1MB的代码高亮库，即使当前会话不需要，影响启动速度和首次加载性能。

- **一般** | **[#1640] 会话卡死，手动删除内存文件无效**
  - **链接**: https://github.com/HKUDS/nanobot/issues/1640
  - **状态**: 标记为`closed`/`stale`
  - **描述**: 报告了会话上下文无法通过删除内存文件重置的卡死问题，数周未得到明确修复。

### 6. 功能请求归类

以下是根据今日活跃数据梳理的用户功能请求：

- **安全/访问控制**:
  - **[#3768]** 请求为DM（私信）添加发送者配对与白名单策略，防止未经授权的访问和资源消耗。
  - **[#3770]** (PR) 为Telegram通道添加按聊天室配置的访问权限规则。
- **诊断与运维**:
  - **[#3769]** 请求新增`nanobot doctor`命令，用于一键诊断配置和通道健康状态。
  - **[#3771]** (PR) 为Telegram通道添加轮询健康检查能力，并与Docker配置集成。
- **Agent 能力**:
  - **[#3460]** (PR) 新增 `LongTaskTool`，用于将一个复杂的长期任务分解为多个步骤执行，增强处理复杂任务的能力。
- **平台兼容性**:
  - **[#3764]** (PR) 修复Shell工具在Windows环境下对UNC路径（`\\server\share`）的路径提取问题。
- **通知与提示**:
  - **[#3765]** (PR) 新增压缩指示器 (`CompressionIndicator`)，在WebUI上显示上下文压缩的摘要摘要。
- **用户体验**:
  - **[#1860]** 已关闭的旧功能请求，建议增加模型流式输出能力，以更直观地看到模型生成过程（已在 `#3655` PR中实现）。

### 7. 用户反馈摘要

- **痛点**：核心Bug影响了正常使用，如会话卡死无法重置 (`#1640`)、静默失败无反馈 (`#235`)、MCP服务异常导致整体崩溃 (`#3739`)。安全性方面，用户担心未授权访问 (`#3768`)。
- **使用场景**：用户广泛使用Telegram等聊天平台，配置多个模型提供商，并期望系统具备自动容灾能力 (`#3376`)。用户有通过WebSocket调用agent的需求 (`#1685`)。
- **满意度**：社区对关键功能请求（如模型故障转移）得到快速响应和合并 (`#3756`) 表示认可。对易用性（如`nanobot doctor`诊断工具）和稳定性（如MCP连接）的改进呼声较高。

### 8. 待处理积压

- **旧Issue**:
  - **[#941] Only Brave web search tool is allowed** (2026-02-21创建)：用户抱怨只支持Brave搜索，希望集成更多免费搜索工具。长期未得到关注。
  - **[#1640] session stuck even after manual memory file deletion** (2026-03-07创建)：一个可能导致用户数据丢失的严重Bug，虽已关闭，但未明确修复方案。
- **待合并PR**:
  - **[#3460] feat(long-task): add LongTaskTool** (2026-04-26创建)：该PR提出了一项重要的Agent能力增强，已有一个月历史，建议维护者尽快 review。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，遵照您的指示。以下是为期 2026-05-14 的 Zeroclaw 项目动态日报。

---

## **Zeroclaw 项目动态日报 — 2026-05-14**

### 1. 今日活动概览

过去24小时内，项目社区贡献活跃，共产生 **37 条 Issue**（15 条已关闭）和 **50 条 PR**（17 条已合并/关闭）。尽管无新版本发布，但生态取得重大进展：v0.8.0 多智能体运行时的超大型 PR 正在进行渐进式审查，多项影响核心功能的 Bug（如 Workspace 配置加载、API 事件流丢失）已通过 PR 关闭。社区对新功能的需求集中于**技能系统增强**与**安全加固**，同时今日报出多个影响用户工作流的 S1 级别 Bug。

### 2. 版本发布

无。

### 3. 项目进展

- **v0.8.0 多智能体架构推进**：PR #6398 (v0.8.0: Multi-Agent Runtime and Schema V3) 已进入「增量审查流程」(Incremental Review Process)，维护者鼓励社区提供截图和具体引用进行审查。该 PR 涉及所有核心组件变更，是近期最主要的开发主线。
- **ACP 会话持久化**：PR #6602 (feat(channels/acp): persist ACP sessions) 已关闭，该功能使编辑器 ACP 会话能在重连后保留上下文，提升了连接的鲁棒性。
- **技能系统优化**：PR #6594 (feat(skills): background review fork + skill_manage tool) 仍在审查中，该 PR 引入了类似 Hermes 的后台技能审查机制和 `skill_manage` 工具，旨在激活此前停用的 `SkillImprover`。
- **多项 Bug 修复关闭**：
  - **Workspace 配置加载**：PR #6605 已关闭，修复了 Issue #6419 中 `WorkspaceManager` 在运行时启动时无法加载配置文件的问题。
  - **API 事件流**：PR #6527 (虽未列出，但通过 Issue #6526 的状态推断其相关) 修复了 `/api/events` SSE 流丢弃工具调用事件的问题（关掉 Issue #6526）。
  - **Gemini CLI 参数**：PR 关联 Issue #6520 已关闭，修复了因参数语法过时 (`--print` vs `--prompt`) 导致的崩溃问题。
  - **WebSocket 终止**：Issue #6514 (gateway WebSocket turn may spin after client disconnect) 已关闭，解决了客户端断开后 WebSocket 循环旋转导致无法响应的问题。

### 4. 社区热点

- **[Feature]: 强制使用更强的配对码**
  - **链接**: [Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)
  - **热度**: 评论 1, 优先级 P1。用户 `@sken130` 提出要求，认为默认的 6 位数字配对码太弱（Too weak），建议允许用户配置更长的、包含字母和数字的密码，并建议默认使用 32 位复杂字符。这反映了社区对安全性的持续关注。

- **[Feature]: 多智能体支持（与 OpenClaw 对齐）**
  - **链接**: [Issue #6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604)
  - **热度**: 评论 1, 优先级 P1。用户 `@libaoo` 提交了该需求，要求实现原生多智能体编排，支持角色分工、独立工具/技能，以及智能体间通信。尽管被标记为 `duplicate` 后关闭，但该提案与当前 v0.8.0 主分支方向高度契合，表明社区对多智能体协作有强烈诉求。

### 5. Bug 与稳定性

- **严重 (S1 - Workflow Blocked)**
  - **Cron 输出路由失败**：Issue #6647 报告 cron 任务结果仅在 Web Dashboard 显示，未能送达已配置的 Telegram 等频道，严重阻碍了用户通过 cron 进行自动化的流程。
  - **Web 搜索工具不触发**：Issue #6646 报告在 v0.7.5 版本下，`web_search_tool` 和 `web_fetch` 在 Telegram 频道中无法正常调用，导致代理无法执行搜索任务。
  - **Cron 会话隔离异常**：Issue #6648 报告 `cron_add` 工具中的 `session_target=main` 参数失效，即使指定使用主会话，任务仍在隔离会话中运行，导致上下文无法继承。（已有修复 PR #6635）。

- **中等 (S2 - Degraded Behavior)**
  - **Thoughts 泄漏**：Issue #6643 报告使用 GLM-5.1 模型时，模型思考过程（Thoughts）错误地混入最终回复中，影响最终输出质量。该问题被认为此前已关闭但未解决，用户要求重新开启。
  - **配对码安全性**：如“社区热点”所述，Issue #6613 指出 6 位数字配对码过于简单。
  - **Windows 系统 CA 信任**：Issue #6528 (已关闭) 修复了连接使用系统信任的自签名证书的 Provider 失败的问题，是重要的安全修复。

- **其他**
  - **Nextcloud Talk 请求超时**：Issue #6156 (已关闭) 修复了调用慢速本地 LLM 时，请求因超时 (~5秒) 被取消的问题。
  - **Matrix 附件缺失元数据**：Issue #6609 (已关闭) 修复了 Matrix 出站附件遗漏 `size` 元数据的问题。

### 6. 功能请求归类

- **技能系统增强**：Issue #6140 提出 “hybrid skills + WASM tools” 功能，旨在支持单个插件同时包含 skill 编排文件和 WASM 二进制文件。Issue #6253 作为 v0.7.6 版本的协调追踪任务，目标是全面提升技能系统的 CLI、加载、审计、沙箱等用户体验。
- **多智能体协作**：如前所述，Issue #6604 代表了社区对此功能的明确请求。
- **安全加固**：Issue #6613 强烈要求提升配对码强度和可配置性。
- **可观测性增强**：Issue #6642 提议在 OTel 的 `llm.call` spans 中捕获完整提示词和补全内容，Issue #6641 提议为每次代理循环中的 LLM 调用、工具调用等操作创建统一的追踪链路，以提升调试和监控能力。
- **图片消息处理**：Issue #6574 建议为当前 Provider 不支持视觉能力且未配置备用 Provider 时，配置图像消息的处理行为，避免直接报错。

### 7. 用户反馈摘要

- **工具兼容性（Windows）**：用户 `@BaroDevelopment` 在 Issue #6410 中指出 `google_workspace` 工具在 Windows 上因未正确处理 `.cmd` 扩展名而失败，同时透传 JSON 参数时也会出错，这影响了 Windows 用户的使用体验。
- **Docker 镜像缺失**：用户 `@adoyle-h` 在 Issue #6500 中指出文档中引用的 Docker 沙箱镜像 (`zeroclawlabs/tool-runner`) 在 Docker Hub 上不存在，导致用户无法通过文档指引启用 Docker 沙箱。
- **Agent 代理迁移问题**：用户 `@eugeneb50` 在 Issue #6309 中报告，当代理运行 `model_routing_config` 工具时，会错误地覆盖已升级到 schema_v2 的 `config.toml` 配置，导致用户配置丢失或错误。
- **新手上路引导问题**：用户 `@tidux` 在 Issue #6120 中反馈，新手上路工具在选择 OpenAI Codex 订阅时，错误地提示用户输入 OpenAI API 密钥而非 Codex 密钥，导致流程无法继续。

### 8. 待处理积压

- **长期等待作者回应的 PR**
  - **PR #5652** (feat(provider): add native extended thinking for Anthropic and Bedrock): 添加对 Anthropic 和 Bedrock 原生扩展思考功能的支持，已创建超一个月，标签为 `needs-author-action`，等待作者更新。
  - **PR #6009** (feat(obs): enrich OTel tool spans): 增强 OpenTelemetry 工具 span，标记为 `needs-author-action`。
  - **PR #6228** (fix: sanitize session keys at the channel orchestrator layer): 修复 Slack 频道重启后丢失对话上下文的问题，已创建半个月，标记为 `needs-author-action`。

- **长期开放的重要 Issue**
  - **Issue #6140** (plugins: skill capability — hybrid skills + WASM tools): 社区对技能系统的核心功能诉求，已开放近三周，虽已为 `accepted` 但尚未有对应的活跃 PR。
  - **Issue #6253** ([Feature]: Track: zeroclaw skills support and UX): 作为技能系统改进的里程碑 Issue，关注度高，其进展直接关系到下一代技能功能的上线。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于您提供的PicoClaw项目数据生成的日报。

---

# PicoClaw 项目动态日报 | 2026-05-14

## 1. 今日活动概览

截至 2026-05-14，PicoClaw 项目在过去24小时内保持高度活跃。期间共产生了 9 条 Issues 更新（其中新开4条，关闭5条），以及 43 条 PR 更新（其中待合并14条，已合并/关闭29条）。项目发布了最新的 Nightly 构建版本 `v0.2.8-nightly.20260514`。社区讨论集中在流式输出支持、API密钥认证失败等关键功能与稳定性问题上，同时多个关于工具增强、提供商支持的功能性PR正在积极开发中。

## 2. 版本发布

项目发布了最新的 Nightly 构建版本 **v0.2.8-nightly.20260514.eb065307**。

- **版本号**: `v0.2.8-nightly.20260514.eb065307`
- **说明**: 此版本为自动化 Nightly 构建，可能包含不稳定因素，建议谨慎使用。
- **变更日志**: 完整变更日志请见 [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) 对比页。

## 3. 项目进展

今日有多项重要PR被合并或关闭，推动了功能完善与问题修复：

- **新增提供商支持**: PR [#2763](https://github.com/sipeed/picoclaw/pull/2763) 已合并，新增了 `Gemini` 作为 `web_search` 工具的提供商。该特性允许用户通过 Gemini 的 grounding 功能获取带引用的搜索结果。
- **多用户群聊功能**: PR [#2715](https://github.com/sipeed/picoclaw/pull/2715) 已关闭（合并），实现了对 Discord、Telegram 等群聊通道中历史消息的发送者属性标记，为更精确的多用户对话管理打下基础。
- **网关管理增强**: PR [#2383](https://github.com/sipeed/picoclaw/pull/2383) 已关闭（合并），为网关添加了 `picoclaw gateway status` 和 `picoclaw gateway stop` 命令行指令，便于用户查询网关状态和优雅地停止进程。
- **会话与上下文修复**:
    - PR [#2311](https://github.com/sipeed/picoclaw/pull/2311) 已合并，修复了历史摘要后归档聊天记录丢失的问题，确保 `SessionStore.Save` 不会错误地清空归档记录。
    - PR [#2309](https://github.com/sipeed/picoclaw/pull/2309) 已合并，优化了对某些严格API提供商（如OpenAI）的工具调用历史记录标准化处理，防止因冗余或缺失的工具结果消息导致请求错误。
    - PR [#2306](https://github.com/sipeed/picoclaw/pull/2306) 已合并，修复了直接引用模型时 `thinking_level` 参数不起作用的Bug。
- **通道适配优化**:
    - PR [#2199](https://github.com/sipeed/picoclaw/pull/2199) 已合并，修复了 Telegram 通道的回复上下文引用问题，避免在解析 `/` 和 `!` 命令时出错。
    - PR [#2183](https://github.com/sipeed/picoclaw/pull/2183) 已合并，修复了子代理模型ID未标准化的问题，例如现在能正确处理 `openrouter/...` 这类带前缀的模型名。

## 4. 社区热点

今日社区讨论聚焦于两大方向：**流式输出**和**模型兼容性**。

- **流式输出呼声高涨**:
    - **Issue #1950** ([链接](https://github.com/sipeed/picoclaw/issues/1950)): 关于为Web Chat支持流式输出的功能请求，由 `@lc6464` 提出，已获得8条评论。这是一个延续至今的热点。
    - **Issue #2404** ([链接](https://github.com/sipeed/picoclaw/issues/2404)): 用户 `@OuSatoru` 请求在配置中增加 `streaming` 参数，以支持向LLM后端发送流式HTTP请求，获得了6条评论。
    - **相关性分析**: 两个Issue的活跃表明社区对实时、逐字返回的聊天体验有强烈需求，这是提升Web端易用性的关键点。

- **模型兼容性与认证问题**:
    - **Issue #2706** ([链接](https://github.com/sipeed/picoclaw/issues/2706)): 用户报告Deepseek V4模型在使用 `thinking mode` 时会因字段 `reasoning_content` 未被正确保存和回传而导致400错误。这一问题反映了对前沿模型特定格式支持的需求。
    - **Issue #2769** ([链接](https://github.com/sipeed/picoclaw/issues/2769)): 用户 `@sandr1x` 报告了跨多个提供商（Groq, OpenRouter, Nvidia）的API密钥认证失败问题（401错误），但确认密钥本身有效。这一问题严重影响用户体验，正在积极讨论中。

## 5. Bug 与稳定性

今日报告的Bug及稳定性问题列表：

1.  **严重: API认证全面失败**
    - **Issue #2769** ([链接](https://github.com/sipeed/picoclaw/issues/2769)): 报告称PicoClaw在多个主流提供商上均返回 `401 Invalid API Key` 错误，而密钥直连API调用成功。此Bug影响所有用户，严重性极高。
    - **当前状态**: 开放，暂无对应修复PR。

2.  **严重: SDK Panic导致网关崩溃**
    - **Issue #2704** ([链接](https://github.com/sipeed/picoclaw/issues/2704)): 钉钉 SDK (`dingtalk-stream-sdk-go`) 的内部并发竞态条件导致网关因 `panic` 而崩溃。该问题在连接超时时复现。
    - **当前状态**: 已关闭。推测已在代码层面解决或通过其他方式规避。

3.  **中等: 本地模型配置问题（Android）**
    - **Issue #2368** ([链接](https://github.com/sipeed/picoclaw/issues/2368)): Android用户添加本地模型后，即使配置正确，仍显示“未配置”而无法使用。
    - **当前状态**: 已关闭，问题已修复。

4.  **中等: Deepseek v4 thinking模型问题**
    - **Issue #2706** ([链接](https://github.com/sipeed/picoclaw/issues/2706)): 用户报错因`reasoning_content`字段处理不当导致请求400错误。
    - **当前状态**: 已关闭。相关的修复PR #2741 正在开放中。

## 6. 功能请求归类

根据近期活跃的Issues，社区主要功能诉求如下：

- **流式输出优化**:
    - **Issue #1950** ([链接](https://github.com/sipeed/picoclaw/issues/1950)): 为Web Chat添加流式输出功能。
    - **Issue #2404** ([链接](https://github.com/sipeed/picoclaw/issues/2404)): 在配置文件中增加 `streaming` 开关以支持流式HTTP请求。目前已有PR #2741 可能相关。

- **模型与提供商兼容性**:
    - **Issue #2706** ([链接](https://github.com/sipeed/picoclaw/issues/2706)): 支持Deepseek v4模型的Thinking Mode（已有关联PR #2741）。
    - **Issue #2671** ([链接](https://github.com/sipeed/picoclaw/issues/2671)): 希望支持 `opencode` 模型提供商的 `zen` 和 `go` 订阅。

- **构建与部署配置**:
    - **Issue #2625** ([链接](https://github.com/sipeed/picoclaw/issues/2625)): 希望官方为Raspberry Pi等设备提供预编译且包含WhatsApp支持的二进制文件，以便快速更新。

- **工具与用户界面增强**:
    - **Issue #2848** ([链接](https://github.com/sipeed/picoclaw/issues/2848)): 请求在 `edit_file` 工具执行替换操作后，显示统一的差异预览。
    - **PR #2765** ([链接](https://github.com/sipeed/picoclaw/pull/2765)): 提议移植 `update_plan` 工具，用于多步任务的结构化进度更新。
    - **PR #2760** ([链接](https://github.com/sipeed/picoclaw/pull/2760)): 提议增加与提供商无关的图像生成工具。
    - **PR #2691** ([链接](https://github.com/sipeed/picoclaw/pull/2691)): 提议增加 `get_current_time` 工具，帮助Agent获取当前时间日期。

## 7. 用户反馈摘要

- **配置与易用性**:
    - 用户在 **Issue #2368** (已修复) 中反馈，Android端添加本地模型后无法正常使用，呈现出“配置了但等于没配置”的困惑体验。
    - 用户在 **Issue #2769** (新报告) 中反馈，即使API密钥有效也反复遇到401错误，这会使用户对应用的可靠性产生严重怀疑。

- **平台与功能限制**:
    - 用户在 **Issue #2625** 中分享使用场景为 Raspberry Pi Zero 2，并指出默认Arm64构建缺少WhatsApp支持，导致更新过程繁琐，这是小设备用户的典型痛点。

## 8. 待处理积压

- **高风险积压**:
    - **Issue #2769** ([链接](https://github.com/sipeed/picoclaw/issues/2769)): **API密钥认证失败（401）** 问题。该问题影响所有主流提供商，是当前最严重的功能性故障，急需维护者响应和定位。

- **长期功能需求**:
    - **Issue #1950** ([链接](https://github.com/sipeed/picoclaw/issues/1950)): 关于 **Web Chat 流式输出** 的功能请求自2026年3月提出，至今已有8条评论，社区关注度高，但尚无明确的修复路径。
    - **Issue #2404** ([链接](https://github.com/sipeed/picoclaw/issues/2404)): 关于 **配置文件支持流式HTTP** 的请求，与上个Issue紧密相关，同样是长期未被满足的关键需求。

- **等待更新的开放PR**:
    - **PR #2768** ([链接](https://github.com/sipeed/picoclaw/pull/2768)): 修复Agent处理临时LLM HTTP错误的重试机制。虽然是修复，但等待合并时间已较长。
    - **PR #2766** ([链接](https://github.com/sipeed/picoclaw/pull/2766)): 将文档同步到V3配置格式。文档的滞后会影响新用户的快速上手。

</details>