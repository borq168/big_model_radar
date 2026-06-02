# AI 开源趋势日报 2026-04-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-04-07 01:09 UTC

---

# AI 开源趋势日报（2026-04-07）

## 1. 今日速览

今日 GitHub AI 生态呈现“智能体工具链爆发”与“本地推理基建强化”双主线：Google AI Edge 系列项目集体冲榜，推动端侧模型部署进入主流视野；Hermes Agent 单日狂揽 1574 stars，反映开发者对可成长型 AI 智能体的强烈需求；同时，RAG 与向量数据库生态持续深化，轻量化、私有化部署成为核心诉求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- **[google-ai-edge/gallery](https://github.com/google-ai-edge/gallery)** ⭐0 (+1107 today)  
  Google 官方推出的端侧 ML/GenAI 用例展示平台，支持本地运行模型，标志大厂正大力推动边缘 AI 落地。
- **[google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)** ⭐0 (+483 today)  
  LiteRT 推理引擎的 LLM 专用版本，为移动端和嵌入式设备提供高效大模型推理能力。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐167,695 (+196 today)  
  支持 Kimi-K2.5、GLM-5 等最新模型的一键本地部署工具，持续领跑开源 LLM 运行时生态。
- **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)** ⭐0 (+267 today)  
  C++ 实现的轻量级 LLM 推理框架，仍是本地量化部署的事实标准。

### 🤖 AI 智能体/工作流
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐28,122 (+1574 today)  
  “伴随你成长”的自主智能体框架，支持长期记忆与技能演化，单日 star 增速创近期新高。
- **[KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon)** ⭐0 (+733 today)  
  白盒 AI 渗透测试智能体，可自动分析源码并执行真实漏洞利用，拓展了 AI Agent 在安全领域的应用边界。
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** ⭐30,019  
  前端智能体开发栈，支持 React/Angular，推动生成式 UI 与 Agent 协议标准化。
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** ⭐21,595  
  集成 400+ MCP 服务器的 AI 工作流平台，强调企业级自动化与 Agent 协同。

### 📦 AI 应用
- **[siddharthvaddem/openscreen](https://github.com/siddharthvaddem/openscreen)** ⭐0 (+1838 today)  
  开源无水印演示录制工具，替代 Screen Studio，满足创作者对隐私与商业自由的需求。
- **[immich-app/immich](https://github.com/immich-app/immich)** ⭐0 (+152 today)  
  高性能自托管照片视频管理方案，集成 AI 分类与搜索，代表 AI 赋能个人数据管理趋势。
- **[TelegramMessenger/Telegram-iOS](https://github.com/TelegramMessenger/Telegram-iOS)** ⭐0 (+25 today)  
  虽非纯 AI 项目，但其内置 AI 助手功能引发关注，反映通讯应用全面智能化。

### 🧠 大模型/训练
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐45,799  
  2 小时从零训练 64M 参数 GPT，降低大模型入门门槛，推动教育与研究民主化。
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐69,624  
  统一高效微调 100+ LLM/VLM 的工具箱，ACL 2024 认可，工业界微调首选。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐75,498  
  高吞吐 LLM 推理引擎，持续优化生产环境部署效率。

### 🔍 RAG/知识库
- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐136,432  
  生产级智能体工作流平台，深度融合 RAG 与 Agent 能力，社区活跃度极高。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐77,249  
  融合 RAG 与 Agent 的开源引擎，提供 superior context layer，技术架构领先。
- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** ⭐32,437  
  EMNLP 2025 论文成果，“简单快速”的 RAG 实现，代表学术向工程转化新方向。
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐30,062  
  高性能向量数据库，云原生架构支撑大规模 AI 应用，开发者首选之一。

---

## 3. 趋势信号分析

今日热榜凸显三大趋势：  
其一，**端侧 AI 部署迎来拐点**，Google AI Edge 系列（gallery、LiteRT-LM）集体上榜，配合 Ollama 与 llama.cpp 的持续热度，表明“本地推理+边缘计算”已成为开发者构建隐私优先、低延迟 AI 应用的核心路径。  
其二，**智能体向专业化与自主化演进**，Hermes Agent 的爆发式增长与 Shannon 这类垂直领域 Agent（安全渗透）的出现，说明社区不再满足于通用聊天机器人，转而追求具备长期记忆、技能进化与真实世界交互能力的 Agent 架构。  
其三，**RAG 生态持续分层**，既有 Dify、RagFlow 等全栈平台，也有 LightRAG、PageIndex 等轻量创新方案，反映 RAG 正从“向量检索”向“推理增强”深化，且更注重存储效率与私有部署。

---

## 4. 社区关注热点

- **Hermes Agent**：单日 +1574 stars，代表“可成长型智能体”理念获广泛认同，值得跟进其记忆机制与技能扩展设计。  
- **Google AI Edge 系列**：大厂正式入场端侧 AI，预示未来移动端模型标准化与工具链将加速成熟。  
- **Shannon（AI 渗透测试 Agent）**：首次出现专注于网络安全的白盒攻击智能体，拓展 AI Agent 应用场景至红队领域。  
- **LightRAG**：学术顶会成果快速开源，体现“简单高效”RAG 新范式，适合资源受限场景落地。  
- **OpenScreen**：+1838 stars 显示创作者对无订阅、无水印 AI 工具强烈需求，反映“去中心化创作工具”崛起。

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*