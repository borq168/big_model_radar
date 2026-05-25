# GitHub AI 热榜日报 2026-05-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-25 02:37 UTC

---

# GitHub AI 热榜日报（2026-05-25）

## 今日热榜概览

今日 GitHub Trending 共 16 个仓库，其中 15 个与 AI/ML 明确相关。热门分布集中于 **AI 智能体/工作流**（Claude Code 插件、技能、托管平台）和 **AI 基础工具**（终端优化、技能配置文件），**代码知识图谱** 方向出现两个高星项目（分别获得 +3999 和 +3003 stars），**免费使用 Claude Code** 的工具也获得 553 stars。此外，金融领域基座模型、群体智能引擎等特定方向项目同样上榜。主题搜索中并未提供今日新增 stars，故以下分析以 Trending 榜单为核心。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、CLI、配置）

| 项目 | Stars（总量 / 今日新增） | 一句话说明 |
|------|--------------------------|------------|
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | +2551 | 一份 CLAUDE.md 文件，基于 Karpathy 对 LLM 编码缺陷的观察改进 Claude Code 行为。 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | +696 | 基于 Ghostty 的 macOS 终端，为 AI 编码代理提供垂直标签和通知。 |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | +553 | 在终端、VSCode 或 Discord 中免费使用 Claude Code，支持语音。 |
| [dotnet/skills](https://github.com/dotnet/skills) | +183 | 为 .NET/C# 开发的 AI 编码代理提供结构化技能仓库。 |

### 🤖 AI 智能体/工作流（Agent 框架、插件、编排、技能库）

| 项目 | Stars（总量 / 今日新增） | 一句话说明 |
|------|--------------------------|------------|
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | +1173 | Anthropic 官方维护的高质量 Claude Code 插件目录。 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | +930 | 754 个结构化网络安全技能，映射 5 个行业框架，兼容 20+ 代理平台。 |
| [multica-ai/multica](https://github.com/multica-ai/multica) | +585 | 开源托管智能体平台：将编码代理转为可分配任务、跟踪进度、复用技能的真实队友。 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | +550 | 面向知识工作者的 Claude Cowork 官方插件集。 |
| [earendil-works/pi](https://github.com/earendil-works/pi) | +456 | AI 代理工具包：编码代理 CLI、统一 LLM API、TUI/Web UI 库、Slack 机器人、vLLM 集群。 |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | +197 | 简洁通用的群体智能引擎，可用于预测任何时间序列或模式。 |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars（总量 / 今日新增） | 一句话说明 |
|------|--------------------------|------------|
| [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | +3999 | 将任意代码转为可交互、可搜索、可提问的知识图谱，适配 Claude Code、Codex、Cursor 等代理。 |
| [blakeblackshear/frigate](https://github.com/blakeblackshear/frigate) | +181 | 面向 IP 摄像头的实时本地目标检测 NVR，支持 AI 事件分析。 |

### 🧠 大模型/训练（模型权重、微调、特定领域模型）

| 项目 | Stars（总量 / 今日新增） | 一句话说明 |
|------|--------------------------|------------|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | +106 | 为金融市场语言设计的基座模型，今日新增虽少但代表一个新兴细分方向。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识图谱）

| 项目 | Stars（总量 / 今日新增） | 一句话说明 |
|------|--------------------------|------------|
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | +3003 | 预索引的代码知识图谱，专为 Claude Code、Codex、Cursor 等设计，减少 token 消耗和工具调用，完全本地运行。 |

---

## 热榜观察

- **Claude Code 生态集中爆发**：今日 Trending 中超过一半项目（8 个）直接与 Claude Code 或同类 AI 编码代理相关，涉及官方插件目录、知识工作者插件、行为优化配置、免费使用工具、代码知识图等。这说明开发者社区正围绕“如何更高效、更低成本地使用 AI 编码代理”形成密集的工具创新。
- **代码知识图谱成为今日最热门细分方向**：`Understand-Anything` 和 `codegraph` 分别获得 +3999 和 +3003 stars，两者均将代码库转为可查询的知识图，以增强代理的上下文理解。这一方向之前较少出现在 Trending 榜单前列，值得关注其后续发展。
- **金融领域专用大模型出现**：`Kronos` 虽然 stars 数量不高，但作为少数专注于金融语言的基座模型，表明在通用大模型之外，垂直领域自训练模型仍在获得关注。
- **未见全新训练框架或基础模型发布**：今日热门主要集中在工具、配置、插件和应用层面，而非底层模型或训练方法。这与近期 LLM 基础模型发布节奏放缓、开发者转向生产化工具的行业趋势一致。

---

## 可跟踪项目

- [Understand-Anything](https://github.com/Lum1104/Understand-Anything)（+3999 stars）—— 交互式代码知识图谱，其“graphs that teach”理念可能影响未来代理辅助编程的交互范式。
- [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)（+3003 stars）—— 预索引代码知识图，目标是减少 token 和工具调用，若能稳定落地可能成为编码代理的基础设施。
- [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)（+930 stars）—— 大规模网络安全技能库，覆盖 5 个行业框架且兼容 20+ 平台，若被广泛采用可能成为安全代理的技能标准。
- [multica-ai/multica](https://github.com/multica-ai/multica)（+585 stars）—— 开源托管智能体平台，试图将编码代理从“单次任务工具”提升为“可持续协作的队友”，其任务管理、技能复用设计值得观察。
- [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)（+106 stars）—— 金融领域基座模型，团队若持续更新评测和微调工具，可能成为量化分析领域的有力选择。