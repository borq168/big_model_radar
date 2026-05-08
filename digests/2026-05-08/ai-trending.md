# GitHub AI 热榜日报 2026-05-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-08 02:10 UTC

---

## 今日热榜概览

今日 GitHub AI 相关热度集中在 **终端 AI Agent** 与 **无向量 RAG** 两个方向。Trending 榜共 13 个项目，其中 10 个与 AI/ML 明确相关；重点项目中，`Hmbown/DeepSeek-TUI` 以 **+5,799 stars** 领涨，`addyosmani/agent-skills` 新增 +3,062，`VectifyAI/PageIndex`（无向量 RAG）新增 +943。主题搜索累计 80 个 AI 仓库，以 Agent 框架（如 NousResearch/hermes-agent 137k stars）和 RAG/向量数据库（如 Milvus、Qdrant）为主；**低资源模型训练**（如 `jingyaogong/minimind` 49k stars）和 **LLM 推理引擎**（如 vLLM 79k stars）持续受到关注。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐170,957
  本地运行大模型的轻量工具，支持 Kimi、DeepSeek、Qwen 等主流模型，是本地 AI 开发的首选 CLI。

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐79,325
  高吞吐、低延迟的 LLM 推理引擎，生产环境部署标配，今日因持续迭代保持热度。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐116,603
  为 AI Agent 提供网页搜索、抓取和交互 API，支持多种 LLM 调用，近期新增结构化数据接口。

- **[z-lab/dflash](https://github.com/z-lab/dflash)** ⭐0 (+671 today)
  Block Diffusion 解码加速新技术，显著提升 Speculative Decoding 效率，适合对推理延迟敏感的场景。

- **[decolua/9router](https://github.com/decolua/9router)** ⭐0 (+149 today)
  AI API 路由与自动降级工具，支持 40+ 提供商，可减少 40% token 消耗，降低编码 Agent 成本。

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐140,518
  生产级 Agent 工作流开发平台，支持可视化编排、RAG、多模型接入，今日持续更新 Agent 模板。

- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐72,851
  AI 驱动的软件开发 Agent，可自主编写、测试、调试代码，社区活跃度极高。

- **[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)** ⭐0 (+5,799 today)
  专为 DeepSeek 模型打造的终端 Coding Agent，轻量、零依赖，今日 stars 增长最高。

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐0 (+3,062 today)
  面向 AI 编码 Agent 的生产级工程技能集合，涵盖代码风格、测试、安全等最佳实践。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐137,650
  可成长 Agent 框架，支持记忆、技能学习，社区构建了丰富插件生态。

- **[vercel-labs/open-agents](https://github.com/vercel-labs/open-agents)** ⭐0 (+131 today)
  Vercel 开源的云 Agent 模板，结合 Next.js 和 AI SDK，快速搭建可部署的 Agent 服务。

- **[aaif-goose/goose](https://github.com/aaif-goose/goose)** ⭐0 (+390 today)
  可扩展的 AI Agent，支持安装、执行、编辑、测试等完整开发流程，兼容任意 LLM。

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research)** ⭐0 (+559 today)
  本地深度研究助手，支持所有本地/云端 LLM、10+ 搜索引擎（arXiv、PubMed），隐私优先，SingleQA 准确率达 95%。

- **[PriorLabs/TabPFN](https://github.com/PriorLabs/TabPFN)** ⭐0 (+230 today)
  表格数据基础模型，可在小样本和零样本场景下直接预测，无需传统特征工程。

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐45,206
  全功能 AI 生产力工作室，集成智能聊天、Agent 调度、300+ 预设助手，统一调用前沿 LLM。

- **[insforge/InsForge](https://github.com/InsForge/InsForge)** ⭐0 (+460 today)
  基于 Postgres 的全栈后端平台，内置认证、存储、计算、托管和 AI 网关，专为 Coding Agent 构建。

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐92,123
  从零实现 ChatGPT 风格 LLM 的教程项目，支持 PyTorch 逐步构建，持续更新至 2026 年。

- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐71,018
  统一高效的 LLM/VLM 微调框架，支持 100+ 模型，ACL 2024 论文配套实现。

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐49,171
  2 小时从零训出 64M 参数 LLM，适合入门和教学，近日新增量化评估模块。

- **[ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai)** ⭐24,598
  基于 LLM 的智能爬虫框架，可直接用自然语言定义抓取规则，大幅降低数据采集门槛。

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐79,923
  领先的开源 RAG 引擎，融合 Agent 能力，提供高质量上下文层，近期支持多模态文档理解。

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐0 (+943 today)
  无向量、基于推理的文档索引方案，宣称比向量检索更省存储且保持高准确度，今日 Trending 新星。

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐44,165
  云原生向量数据库，支持大规模 ANN 搜索，今日更新存储压缩优化。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐55,025
  AI Agent 通用记忆层，提供长期记忆与上下文压缩，今日新增多模态记忆支持。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐73,389
  Claude Code 插件，自动记录编码会话并用 AI 压缩注入未来上下文，提升 Agent 连续性。

---

## 热榜观察

- **Agent 类项目占据绝对多数**：今日 Trending 10 个 AI 项目中，8 个直接与 Agent 相关（DeepSeek-TUI、agent-skills、goose、open-agents、InsForge、9router 等），主题搜索中 ai-agent 标签项目达 15+ 个且 stars 均超 10 万。这表明无论社区关注度还是开发投入，**Agent 仍是当前 AI 生态最热赛道**。
- **“无向量”RAG 方案崭露头角**：`VectifyAI/PageIndex` 今日新增 943 stars，其“基于推理而非向量索引”的思路引发讨论。与此同时 `mem0`、`claude-mem` 等记忆层方案也在关注 Agent 长期上下文，与无向量 RAG 形成互补。
- **低资源模型训练持续活跃**：`minimind`、`LLMs-from-scratch`、`bit-brain` 等项目表明，社区对“用小资源复现大模型”的教程和工具需求不减，这与本地部署趋势一致。
- **未见与特定大模型发布强关联的热点**：今日热度更多来自基础设施层的工具优化（如 DFlash 解码加速）和 Agent 工程化，而非某新模型权重发布。

---

## 可跟踪项目

- `LearningCircuit/local-deep-research`：本地深度研究 + 隐私加密，如果持续集成更多搜索引擎和文档格式，有望成为个人知识工作者的标配工具。
- `Hmbown/DeepSeek-TUI`：今日新增 stars 最高，其终端 Agent 体验是否比 GUI 更高效，值得关注后续迭代和插件生态。
- `VectifyAI/PageIndex`：无向量 RAG 方案若能在大规模测试中保持正确率，可能改变当前“向量数据库主导 RAG”的格局。
- `PriorLabs/TabPFN`：表格数据基础模型在小样本场景的表现已受学术界认可，后续若有企业级 API 或微调接口，将冲击传统 AutoML 市场。
- `vercel-labs/open-agents`：Vercel 官方出品的 Agent 模板，结合其边缘计算和前端生态，可能降低云 Agent 部署门槛。