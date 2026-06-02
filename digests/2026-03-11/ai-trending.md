# AI 开源趋势日报 2026-03-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-11 00:55 UTC

---

# AI 开源趋势日报（2026-03-11）

## 1. 今日速览

今日 GitHub AI 开源生态呈现“智能体爆发、工具链成熟、垂直应用深化”三大特征。多个 Agent 框架单日获星超千，反映开发者对可组合、可部署的智能体架构需求激增；RAG 与向量数据库生态持续活跃，支撑企业级知识增强场景落地；同时，轻量化 LLM 推理与本地部署工具热度不减，推动 AI 能力向边缘和隐私优先场景渗透。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)** ⭐0 (+661 today)  
  支持多模型对比、红队测试与 CI/CD 集成的提示词与 RAG 评测工具，助力生产级 AI 应用质量保障。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐164,782  
  本地一键运行主流开源大模型（如 DeepSeek、Qwen、Gemma）的 CLI 工具，生态成熟度领先。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐72,757  
  高吞吐、低延迟的 LLM 推理引擎，已成为业界部署开源模型的事实标准后端。

### 🤖 AI 智能体/工作流
- **[openclaw/openclaw](https://github.com/openclaw/openclaw)** ⭐0 (+9080 today)  
  跨平台个人 AI 助手框架，“龙虾哲学”设计强调极简与可组合性，单日涨星破万引爆社区。
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐0 (+1413 today)  
  字节跳动开源的 SuperAgent 框架，集成沙箱、记忆、子代理等模块，支持分钟级到小时级复杂任务。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐0 (+781 today)  
  强调“伴随成长”的个性化 Agent，结合长期记忆与自适应行为，探索 Agent 的生命周期演进。
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** ⭐0 (+891 today)  
  基于自然语言控制网页 GUI 的 in-page Agent，填补浏览器自动化与 LLM 交互的空白。

### 📦 AI 应用
- **[virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)** ⭐0 (+300 today)  
  模拟对冲基金决策流程的 AI 团队应用，展示 Agent 在金融分析中的多角色协作潜力。
- **[saturndec/waoowaoo](https://github.com/saturndec/waoowaoo)** ⭐9,061  
  工业级 AI 影视生产平台，覆盖从短片到实拍的全流程，体现 Agent 在创意产业的落地能力。

### 🧠 大模型/训练
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐157,711  
  多模态 Transformer 模型统一框架，仍是训练与推理的核心基础设施。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐87,636  
  从零实现 ChatGPT 的教程项目，持续吸引初学者深入理解 LLM 底层机制。
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐68,165  
  支持 100+ LLM/VLM 的高效微调工具，ACL 2024 成果，降低企业定制模型门槛。

### 🔍 RAG/知识库
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐74,692  
  融合 RAG 与 Agent 能力的开源引擎，提供企业级上下文增强解决方案。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐43,299  
  云原生高性能向量数据库，支撑大规模语义检索与 AI 应用后端。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐49,325  
  为 AI Agent 提供通用记忆层，实现跨会话状态持久化与个性化响应。

---

## 3. 趋势信号分析

今日热榜中，**智能体框架**呈现爆发式增长，openclaw（+9080 stars）、deer-flow（+1413）、page-agent（+891）等项目均聚焦于可操作、可组合的 Agent 架构，反映出社区从“模型调用”向“自主行为系统”的范式转移。值得注意的是，**浏览器与桌面控制类 Agent**（如 page-agent、trycua/cua）首次密集登榜，表明“Computer-Use Agent”正从研究走向工程实践。此外，RAG 生态持续深化，rflow、mem0 等项目强调“记忆+检索+行动”三位一体，呼应了企业对长期上下文与任务执行融合的需求。整体来看，AI 开源正从模型中心转向**以 Agent 为核心的应用架构**，工具链日趋完整。

---

## 4. 社区关注热点

- **openclaw/openclaw**：单日涨星近万，极简设计理念可能重塑个人 AI 助手开发范式。  
- **bytedance/deer-flow**：字节背书 + 完整任务生命周期支持，或成企业级 Agent 开发新选择。  
- **alibaba/page-agent**：填补 LLM 与网页 GUI 自动化之间的鸿沟，拓展 Agent 应用场景边界。  
- **mem0ai/mem0**：通用记忆层概念成熟，有望成为 Agent 持久化状态的标准中间件。  
- **promptfoo/promptfoo**：随着 Agent 复杂度上升，评测与红队工具将成为生产部署刚需。

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*