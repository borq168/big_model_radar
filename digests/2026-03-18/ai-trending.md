# AI 开源趋势日报 2026-03-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-18 01:03 UTC

---

# AI 开源趋势日报（2026-03-18）

## 1. 今日速览

今日 GitHub AI 生态呈现“智能体工程化”与“本地 AI 基础设施”双轮驱动趋势。LangChain 系 Agent 框架 **deepagents** 单日暴涨 1415 stars，反映开发者对复杂任务编排能力的需求激增；浏览器端知识图谱工具 **GitNexus** 和 Claude Code 插件生态（如 **claude-hud**、**claude-mem**）持续升温，标志“AI 编程助手”进入深度集成阶段。同时，向量数据库与 RAG 引擎（如 **ragflow**、**mem0**）稳居主流，而轻量化本地推理（**ollama**、**unsloth**）仍为长期热点。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- [**langchain-ai/deepagents**](https://github.com/langchain-ai/deepagents) ⭐0 (+1415 today)  
  基于 LangChain/LangGraph 的智能体 harness，支持规划、文件系统操作与子智能体派生，今日爆发式增长体现复杂 Agent 开发工具需求。
- [**ollama/ollama**](https://github.com/ollama/ollama) ⭐165,379  
  本地大模型运行时标杆，持续集成 Kimi-K2.5、GLM-5 等最新模型，是个人与企业部署 LLM 的首选基础设施。
- [**vllm-project/vllm**](https://github.com/vllm-project/vllm) ⭐73,444  
  高性能 LLM 推理引擎，支撑生产级高吞吐场景，被多家云厂商集成，代表推理优化技术主流方向。

### 🤖 AI 智能体/工作流
- [**OpenHands/OpenHands**](https://github.com/OpenHands/OpenHands) ⭐69,307  
  AI 驱动的全栈开发代理，可自主编码、测试与部署，代表“AI 程序员”技术前沿。
- [**CopilotKit/CopilotKit**](https://github.com/CopilotKit/CopilotKit) ⭐29,485  
  前端 Agent 开发栈，支持 React/Angular 集成，推动生成式 UI 与客户端智能体融合。
- [**activepieces/activepieces**](https://github.com/activepieces/activepieces) ⭐21,268  
  低代码 AI 工作流平台，内置 400+ MCP 服务，连接企业系统与 AI 能力，加速自动化落地。

### 📦 AI 应用
- [**open-webui/open-webui**](https://github.com/open-webui/open-webui) ⭐127,605  
  用户友好的本地 AI 聊天界面，兼容 Ollama/OpenAI，是个人与企业私有化部署的热门选择。
- [**khoj-ai/khoj**](https://github.com/khoj-ai/khoj) ⭐33,462  
  “AI 第二大脑”应用，支持文档问答、自动化调度与深度研究，展现个性化知识管理潜力。
- [**browser-use/browser-use**](https://github.com/browser-use/browser-use) ⭐81,113  
  让 AI 智能体操控浏览器完成在线任务， bridging web automation 与 Agent 能力。

### 🧠 大模型/训练
- [**huggingface/transformers**](https://github.com/huggingface/transformers) ⭐157,970  
  事实上的标准模型定义与推理框架，覆盖文本、视觉、音频等多模态，生态统治力持续强化。
- [**unslothai/unsloth**](https://github.com/unslothai/unsloth) ⭐54,662  
  本地高效微调与运行开源模型（Qwen、DeepSeek 等）的统一界面，降低个人开发者参与门槛。
- [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) ⭐68,595  
  支持 100+ LLM/VLM 的统一微调框架，ACL 2024 成果，推动模型定制平民化。

### 🔍 RAG/知识库
- [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) ⭐75,285  
  融合 Agent 能力的开源 RAG 引擎，提供高质量上下文层，解决企业知识检索痛点。
- [**mem0ai/mem0**](https://github.com/mem0ai/mem0) ⭐50,192  
  AI 智能体的通用记忆层，实现跨会话状态持久化，是长期记忆架构的关键组件。
- [**milvus-io/milvus**](https://github.com/milvus-io/milvus) ⭐43,355  
  云原生向量数据库标杆，支撑大规模 ANN 搜索，为 RAG 提供核心检索基础设施。

---

## 3. 趋势信号分析

今日热榜凸显三大信号：  
其一，**Agent 工程正从原型走向生产**，deepagents 的爆发与 CopilotKit、activepieces 的活跃表明，开发者不再满足于简单聊天机器人，转而构建具备规划、记忆与工具调用能力的复杂智能体系统。  
其二，**Claude Code 生态快速成熟**，claude-hud（可视化执行状态）与 claude-mem（自动上下文记忆）等插件涌现，显示 Anthropic 开发者工具链已形成正向反馈循环。  
其三，**浏览器端 AI 能力崛起**，GitNexus 实现纯前端知识图谱与 Graph RAG，预示“无服务器 AI”将成为轻量化部署新范式。整体趋势与近期多模态 Agent、MCP 协议普及及企业 RAG 落地需求高度吻合。

---

## 4. 社区关注热点

- **GitNexus**：首个完全在浏览器运行的代码知识图谱工具，零部署成本探索 Graph RAG 新路径，值得关注其技术实现。  
- **deepagents**：LangChain 官方推出的 Agent harness，集成规划器与子智能体机制，或成复杂任务自动化新标准。  
- **claude-mem**：利用 Claude 自身压缩历史交互并注入上下文，解决长期记忆难题，对 Agent 记忆架构有启发意义。  
- **ragflow**：将 Agent 能力深度融入 RAG 流程，提升检索相关性与推理质量，代表下一代知识引擎方向。  
- **unsloth**：持续优化本地训练效率，使个人设备微调 7B+ 模型成为常态，推动开源模型民主化。

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*