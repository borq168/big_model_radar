# AI 开源趋势日报 2026-03-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-29 01:10 UTC

---

# AI 开源趋势日报（2026-03-29）

## 1. 今日速览

今日 GitHub AI 生态呈现“应用爆发、工具深化”态势：**实时换脸与深度伪造工具 Deep-Live-Cam 单日暴涨 1814 stars**，引发对生成式 AI 滥用风险的广泛讨论；**AI 科研自动化平台 AI-Scientist-v2 与金融研究智能体 Dexter 同步登榜**，显示 Agent 能力正向专业领域纵深拓展；RAG 与向量数据库生态持续活跃，多个项目在检索增强与知识管理方向获得高关注度。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐158,502 — 主流模型定义与推理框架，仍是开发者接入 SOTA 模型的核心入口。
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐74,582 — 高吞吐 LLM 推理引擎，被广泛用于生产级部署，社区活跃度持续领先。
- [ollama/ollama](https://github.com/ollama/ollama) ⭐166,354 — 本地大模型运行平台，支持 DeepSeek、Qwen 等主流开源模型一键启动。

### 🤖 AI 智能体/工作流
- [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) ⭐0 (+506 today) — 基于树搜索的自动化科研智能体，可自主设计实验并撰写论文草稿。
- [virattt/dexter](https://github.com/virattt/dexter) ⭐0 (+581 today) — 专用于深度金融研究的自主智能体，集成数据抓取、分析与推理能力。
- [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) ⭐0 (+398 today) — 强调可观测性与可信度的 Agent 开发框架，适合企业级应用。
- [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) ⭐70,049 — AI 驱动的全栈开发助手，支持代码生成与环境交互。

### 📦 AI 应用
- [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) ⭐0 (+1814 today) — 单图实时换脸与一键视频深伪工具，技术门槛低但伦理风险高，引发热议。
- [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) ⭐0 (+880 today) — 开源 AI 聊天平台，兼容所有主流 LLM，集成高级上下文管理功能。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐129,090 — 用户友好的本地 AI 界面，支持 Ollama 与 OpenAI API，社区生态成熟。

### 🧠 大模型/训练
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐44,364 — 2 小时内从零训练 64M 参数 GPT，极小成本验证 LLM 训练流程。
- [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) ⭐69,187 — 统一高效微调 100+ LLM/VLM 的工具箱，ACL 2024 推荐方案。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐89,422 — 从零实现 ChatGPT 风格模型的教程项目，教育价值极高。

### 🔍 RAG/知识库
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐76,456 — 融合 Agent 能力的 RAG 引擎，提供上下文增强层，适合企业级知识问答。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐43,478 — 云原生高性能向量数据库，支撑大规模 ANN 搜索场景。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐51,345 — 为 AI Agent 提供通用记忆层，实现跨会话状态持久化。
- [datalab-to/chandra](https://github.com/datalab-to/chandra) ⭐0 (+687 today) — 复杂表格、手写体与表单 OCR 模型，解决非结构化文档解析难题。

---

## 3. 趋势信号分析

今日热榜凸显三大趋势：其一，**生成式 AI 应用正从“演示玩具”走向“即用工具”**，如 Deep-Live-Cam 和 onyx 的快速获星表明用户对低门槛、高交互性 AI 应用的强烈需求；其二，**专业领域 Agent 框架加速落地**，AI-Scientist-v2 与 Dexter 分别切入科研与金融，反映 Agent 能力正从通用任务向高价值垂直场景迁移；其三，**RAG 基础设施持续完善**，chandra 对复杂文档的 OCR 支持与 ragflow 的 Agent 融合设计，说明社区正着力解决真实业务中的“最后一公里”问题。值得注意的是，Deep-Live-Cam 的爆发也警示开源社区需加强伦理治理。

---

## 4. 社区关注热点

- **Deep-Live-Cam**：技术极简但影响深远，需警惕滥用风险，同时关注其底层换脸算法演进。
- **AI-Scientist-v2**：代表“AI for Science”新范式，树搜索机制为自动化科研提供新思路。
- **dexter**：金融 Agent 的标杆项目，展示如何将 LLM 与数据管道、分析逻辑深度集成。
- **chandra**：解决真实世界文档 OCR 痛点，尤其适合法律、医疗等结构化信息提取场景。
- **mem0**：记忆层成为 Agent 架构新标配，预示“有状态 AI”将成为下一代智能体核心特征。

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*