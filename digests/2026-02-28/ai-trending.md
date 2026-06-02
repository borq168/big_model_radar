# AI 开源趋势日报 2026-02-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-02-28 03:32 UTC

---

# AI 开源趋势日报 | 2026-02-28

---

## 第一步：AI 相关性过滤

**Trending 榜单过滤结果**：16 个仓库中，**13 个为 AI/ML 相关**，排除 3 个非 AI 项目：
- ❌ `tukaani-project/xz`（压缩工具）
- ❌ `D4Vinci/Scrapling`（通用爬虫框架，非 AI 原生）
- ❌ `steipete/CodexBar`（工具使用统计，辅助性工具）

**主题搜索**：79 个仓库均为 AI 相关，全部保留。

---

## 第二步：分类体系

| 类别 | 定义 |
|:---|:---|
| 🔧 **AI 基础工具** | 推理引擎、开发框架、CLI 工具、SDK、部署基础设施 |
| 🤖 **AI 智能体/工作流** | Agent 框架、多智能体编排、自动化工作流、MCP/工具调用 |
| 📦 **AI 应用** | 具体产品形态：聊天客户端、代码助手、OCR、语音、教育内容 |
| 🧠 **大模型/训练** | 模型实现、训练框架、微调工具、量化推理、ASR/CV 模型 |
| 🔍 **RAG/知识库** | 向量数据库、检索增强生成、知识图谱、记忆层 |

---

## 第三步：日报正文

### 1. 今日速览

今日 AI 开源领域呈现**"智能体基础设施"爆发态势**：字节跳动开源 `deer-flow` 超级智能体框架、Anthropic 官方 `claude-code` CLI 工具持续高热，叠加多个 Agent 技能库和编排平台（`ruflo`、`superpowers`）同日登榜，标志着**从"模型能力"向"工程化 Agent 系统"**的行业重心迁移。边缘 AI 语音 (`moonshine`)、WiFi 感知 (`wifi-densepose`) 等新型传感+AI 融合技术首次进入主流视野，Vector DB 领域出现 Rust 高性能新玩家 (`ruvector`)。中文社区 `hello-agents` 教育内容获关注，反映 Agent 开发学习需求的快速增长。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | - | +494 | Anthropic 官方终端 Agent 工具，自然语言驱动代码理解、执行与 Git 工作流，定义"对话式开发"新标准 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | - | +696 | 字节开源 SuperAgent 框架，支持沙箱、记忆、工具、子智能体，处理分钟到小时级长周期任务 |
| [ruvnet/ruvector](https://github.com/ruvnet/ruvector) | - | +410 | Rust 构建的高性能实时自学习向量图神经网络数据库，面向下一代 RAG 基础设施 |
| [ollama/ollama](https://github.com/ollama/ollama) | 163,624 | - | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、MiniMax、DeepSeek 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 71,444 | - | 高吞吐、内存高效的 LLM 推理与服务引擎，生产级部署首选 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 125,182 | - | 用户友好的 AI 界面，支持 Ollama 与 OpenAI API 双栈，本地化部署标杆 |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | - | +1,385 | **今日增速最高**：纯浏览器端代码知识图谱+Graph RAG Agent，零服务器架构革新代码探索体验 |
| [moonshine-ai/moonshine](https://github.com/moonshine-ai/moonshine) | - | +593 | 边缘设备快速精准 ASR，C 语言实现，填补端侧语音理解基础设施空白 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [obra/superpowers](https://github.com/obra/superpowers) | - | **+1,546** | **今日增速冠军**：Agent 技能框架与软件开发方法论，强调"可工作的"工程实践而非概念演示 |
| [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | - | +803 | 上下文工程与多智能体架构技能库，生产级 Agent 系统调试优化必备 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | - | +531 | Claude 生态领先的智能体编排平台，支持分布式蜂群智能、RAG 集成、Claude Code/Codex 原生兼容 |
| [langgenius/dify](https://github.com/langgenius/dify) | 130,627 | - | 生产级 Agentic 工作流开发平台，可视化编排+代码级灵活性的平衡标杆 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 127,706 | - | 可靠 Agent 平台的事实标准，工具调用与链式抽象的行业基础设施 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 79,167 | - | 让网站对 AI Agent 可访问，浏览器自动化任务执行的通用层 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 68,285 | - | AI 驱动开发全栈平台，代码生成、测试、PR 全流程自动化 |
| [trycua/cua](https://github.com/trycua/cua) | 12,755 | - | 计算机使用 Agent 开源基础设施，支持 macOS/Linux/Windows 全桌面控制 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11,062 | - | 企业级 Agent 安全沙箱环境，真实工具链集成 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 20,986 | - | ~400 个 MCP 服务器的 AI 自动化平台，Agent 与工作流融合 |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | - | +105 | 通用 AI 应用沙箱平台，多语言 SDK，覆盖 Coding Agent、GUI Agent、RL 训练等场景 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 19,234 | - | 从零构建 Claude Code 类 Agent，"Bash is all you need"的极简工程教学 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 40,355 | - | AI 生产力工作室，智能聊天+自主 Agent+300+助手，统一接入前沿 LLM |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 41,590 | - | 基于大模型的超级 AI 助理 CowAgent，主动思考、任务规划、长期记忆，多平台接入 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 71,320 | - | 轻量强大 OCR 工具包，100+语言，图像/PDF 结构化数据提取桥梁 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | - | +199 | 自托管 Grok 伴侣，实时语音聊天、Minecraft/Factorio 游戏交互，"神经 sama"式虚拟生命 |
| [ruvnet/wifi-densepose](https://github.com/ruvnet/wifi-densepose) | - | +478 | **技术突破**：商用 mesh 路由器实现穿墙实时人体姿态估计，WiFi 感知+AI 融合新范式 |
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | - | +324 | 《从零开始构建智能体》中文教程，填补系统化 Agent 教育内容空白 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 157,110 | - | 最先进的 ML 模型定义框架，文本/视觉/音频/多模态统一 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 86,208 | - | 从零实现 ChatGPT 类 LLM，PyTorch 逐步教学，理解原理首选 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 67,654 | - | 100+ LLM/VLM 统一高效微调，ACL 2024，规模化模型定制基础设施 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 3,829 | - | Apple Silicon 上的 LLM 推理服务课程， tiny vLLM + Qwen 实战 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 300 | - | X-Bit 量化驱动的端侧 LLM 推理，边缘部署新选项 |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | 88 | - | Test-Time Scaling 综述仓库，推理时计算扩展的前沿研究汇总 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 73,875 | - | 领先开源 RAG 引擎，前沿 RAG + Agent 能力融合，LLM 优质上下文层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,247 | - | 领先文档 Agent 与 OCR 平台，数据连接与检索的事实标准 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 48,229 | - | AI Agent 通用记忆层，跨会话长期记忆与个性化 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 12,605 | - | 6 行代码构建 AI Agent 记忆知识引擎，开发体验优先 |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 10,158 | - | 个人设备 RAG，97% 存储节省，100% 隐私，MLsys2026 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,173 | - | 高性能大规模向量数据库，下一代 AI 向量搜索引擎 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,020 | - | 云原生高性能向量 ANN 搜索，可扩展向量数据库 |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | 26,361 | - | AI 应用开源搜索检索数据库，开发者友好嵌入式方案 |

---

### 3. 趋势信号分析

**智能体工程化元年开启**：今日热榜呈现**"Agent 基础设施"集群爆发**——从字节 `deer-flow` 的长周期任务框架、Anthropic `claude-code` 的官方终端工具，到 `superpowers` 的方法论体系、`ruflo` 的 Claude 生态编排，社区正从"演示级 Agent"转向"生产级系统"。`obra/superpowers` 以 +1,546 stars 登顶，其强调"works"的软件工程导向，反映行业对**可靠性优先于炫技**的集体共识。

**新兴技术栈信号**：① **Rust 渗透 AI 基础设施**：`ruvector`（向量+GNN）、`moonshine`（ASR）均以 Rust/C 实现高性能；② **物理世界感知融合**：`wifi-densepose` 开创 WiFi 信号+姿态估计新模态，突破视觉依赖；③ **零服务器架构**：`GitNexus` 纯浏览器端 Graph RAG 挑战传统后端-heavy 范式。

**与行业事件关联**：Anthropic 近期 Claude 系列更新持续发酵，`claude-code` 官方开源+社区镜像服务 (`claude-relay-service`)、技能库 (`everything-claude-code`)、教学项目 (`learn-claude-code`) 形成完整生态层。字节 `deer-flow` 入局标志国内大厂正式参与国际 Agent 框架竞争。

---

### 4. 社区关注热点

- **🔥 `obra/superpowers`** — 增速冠军，"Agent 技能框架+方法论"的组合填补行业空白，适合团队建立 Agent 工程规范
- **🔥 `abhigyanpatwari/GitNexus`** — 纯前端知识图谱+RAG 的架构创新，零运维成本，适合快速代码库探索场景
- **🔥 `ruvnet/wifi-densepose`** — 跨模态感知突破，WiFi 穿墙人体追踪，智能家居/安防/健康监测的新硬件-软件结合点
- **🔥 `bytedance/deer-flow`** — 字节首次开源 Agent 框架，长周期任务 (分钟→小时) 设计对标 Devin 类系统，值得关注后续迭代
- **🔥 `moonshine-ai/moonshine`** — 边缘 ASR 的 C 语言高性能实现，端侧语音 Agent 的关键拼图，IoT/可穿戴场景适用

---

*报告生成时间：2026-02-28 | 数据来源：GitHub Trending & Search API*

---
*本日报由 [Radar Forge](https://github.com/borq168/radar-forge) 自动生成。*