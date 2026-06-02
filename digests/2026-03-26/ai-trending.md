# AI 开源趋势日报 2026-03-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-26 01:07 UTC

---

# AI 开源趋势日报（2026-03-26）

---

## 1. 今日速览

今日 GitHub AI 生态呈现“智能体即服务”爆发态势，多个 Agent 框架与 Claude Code 增强工具集中登榜。字节跳动开源的 **Deer-Flow** 以单日 +3787 stars 成为焦点，标志企业级超级智能体架构进入开源视野。同时，RAG 与向量数据库生态持续活跃，而轻量化模型训练（如 `minimind`）和本地 AI 基础设施（如 `cua`）也获得显著关注，反映开发者对高效、私有化 AI 落地的强烈需求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- **[BerriAI/litellm](https://github.com/BerriAI/litellm)** ⭐0 (+301 today)  
  统一调用 100+ LLM API 的 SDK 与网关，支持成本追踪与负载均衡，是构建多模型应用的必备中间件。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐74,329  
  高性能 LLM 推理引擎，持续领跑开源推理性能基准，被广泛用于生产部署。
- **[unslothai/unsloth](https://github.com/unslothai/unsloth)** ⭐58,202  
  提供本地微调与运行开源模型的高效 Web UI，极大降低个人开发者使用门槛。

### 🤖 AI 智能体/工作流
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐0 (+3787 today)  
  字节跳动开源的“超级智能体”框架，集成沙箱、记忆、子代理与工具调用，支持分钟级到小时级复杂任务自动化。
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** ⭐0 (+1174 today)  
  面向 Claude 的多智能体编排平台，支持分布式 swarm 架构与企业级 RAG 集成。
- **[letta-ai/claude-subconscious](https://github.com/letta-ai/claude-subconscious)** ⭐0 (+71 today)  
  为 Claude Code 注入“潜意识”记忆层，实现上下文感知的持续编码辅助。
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐69,762  
  AI 驱动的全栈开发代理，支持端到端代码生成与环境交互，代表 Agent 能力的边界拓展。

### 📦 AI 应用
- **[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)** ⭐0 (+810 today)  
  面向 AI 时代的高速可扩展记忆引擎，提供 Memory API，赋能个性化长期记忆应用。
- **[khoj-ai/khoj](https://github.com/khoj-ai/khoj)** ⭐33,630  
  自托管“AI 第二大脑”，整合网页与文档检索，支持深度研究与自动化调度。
- **[FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)** ⭐0 (+1065 today)  
  自动化在线盈利流程生成器，体现 AI 在垂直场景（如内容变现）的快速落地趋势。

### 🧠 大模型/训练
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐43,724  
  仅需 2 小时即可从零训练 64M 参数 GPT，推动小模型平民化训练浪潮。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐89,242  
  手把手 PyTorch 实现 ChatGPT 风格模型，仍是教育与实践结合的最佳教程。
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐69,059  
  统一高效微调 100+ LLM/VLM 的工具箱，ACL 2024 认可，工业界微调首选。

### 🔍 RAG/知识库
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐76,130  
  融合 RAG 与 Agent 能力的开源引擎，提供高质量上下文层，解决幻觉问题。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐43,476  
  云原生高性能向量数据库，支撑大规模向量检索，是 RAG 架构核心组件。
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** ⭐14,628  
  6 行代码构建 AI 代理记忆系统，简化知识图谱与向量存储的融合开发。

---

## 3. 趋势信号分析

今日热榜凸显三大趋势：  
其一，**企业级智能体框架**正从闭源走向开源，以 Deer-Flow 为代表，集成沙箱、记忆、工具链与多代理协作，标志 Agent 工程进入系统化阶段；  
其二，**Claude Code 生态爆发**，ruflo、claude-subconscious 等项目围绕其构建增强层，反映 Anthropic 开发者生态的快速扩张；  
其三，**轻量化与本地化**需求旺盛，minimind（小模型训练）、cua（桌面控制代理）、RuView（WiFi 姿态估计）等项目登榜，呼应隐私、成本与边缘部署的现实诉求。  
整体来看，AI 开源正从“模型中心”转向“智能体+基础设施”双轮驱动，且垂直场景落地加速。

---

## 4. 社区关注热点

- **Deer-Flow（字节跳动）**：首个大厂开源的“超级智能体”框架，架构完整，适合研究企业级 Agent 设计范式。  
- **minimind**：极低成本训练小模型，有望 democratize LLM 训练，推动边缘 AI 发展。  
- **ruflo**：专为 Claude 优化的多智能体平台，展示如何围绕特定 LLM 构建生态。  
- **cua（Computer-Use Agents 基础设施）**：提供跨 OS 的桌面控制沙箱与 SDK，是通用 AI 代理迈向现实的关键基建。  
- **RuView（WiFi DensePose）**：无摄像头人体姿态估计，代表非视觉感知 AI 的新方向，具强隐私保护潜力。

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*