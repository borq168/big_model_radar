# AI Open Source Trends 2026-04-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-04-28 02:05 UTC

---

<think>Let me analyze this data carefully and create a structured AI Open Source Trends Report.

First, let me filter AI-related projects from the trending list:

From the trending list (13 repos):
1. mattpocock/skills - Shell, not AI
2. abhigyanpatwari/GitNexus - AI-related (knowledge graph, Graph RAG Agent) ✓
3. ComposioHQ/awesome-codex-skills - AI-related (Codex skills) ✓
4. Alishahryar1/free-claude-code - AI-related (Claude Code) ✓
5. gastownhall/beads - AI-related (memory for coding agent) ✓
6. penpot/penpot - Design tool, not AI
7. davila7/claude-code-templates - AI-related (Claude Code) ✓
8. microsoft/VibeVoice - AI-related (Voice AI) ✓
9. Z4nzu/hackingtool - Not AI
10. TauricResearch/TradingAgents - AI-related (LLM Financial Trading) ✓
11. CJackHwang/ds2api - AI-related (DeepSeek API) ✓
12. deepseek-ai/DeepSeek-V3 - AI-related (LLM) ✓
13. donnemartin/system-design-primer - Not AI

From the topic search (already AI-filtered), I need to categorize them.

Let me categorize:

AI Infrastructure:
- run-llama/llama_index (vector-db, RAG platform)
- langchain-ai/langchain (LLM framework)
- vllm-project/vllm (inference engine)
- hiyouga/LlamaFactory (fine-tuning)
- Shubhamsaboo/awesome-llm-apps (collection)


- langgenius/dify (workflow platform)
- FlowiseAI/Flowise (visual flow builder)
- open-webui/open-webui (UI interface)
- firecrawl/firecrawl (web scraping for AI)
- browser-use/browser-use (browser automation)
- OpenHands/OpenHands (AI-driven development)
- googleworkspace/cli (AI agent skills)
- CopilotKit/CopilotKit (agent UI framework)
- activepieces/activepieces (automation with MCP)
- jackwener/OpenCLI (universal CLI hub)
- trycua/cua (computer-use agents)
- e2b-dev/E2B (secure execution environment)
- alibaba/OpenSandbox (sandbox runtime)
- langchain4j/langchain4j (Java LLM library)
- 0xPlaygrounds/rig (Rust LLM framework)
- apache/casbin-gateway (MCP security gateway)
- paulburgess1357/nvim-mcp (Neovim MCP server)

AI Agents / Workflows:
- NousResearch/hermes-agent (agent framework)
- CherryHQ/cherry-studio (AI studio with agents)
- zh ayujie/CowAgent (multi-platform agent)
- HKUDS/nanobot (lightweight agent)
- CopilotKit/CopilotKit (agent UI)
- activepieces/activepieces (automation)
- trycua/cua (computer-use agents)
- e2b-dev/E2B (secure environment)
- saturndec/waoowaoo (video production agent)
- OpenHands/OpenHands (AI development)
- browser-use/browser-use (web automation)
- Shubhamsaboo/awesome-llm-apps (agent apps collection)
- datawhalechina/hello-agents (agent tutorial)
- starpig1129/DATAGEN (research assistant)

AI Applications:
- microsoft/VibeVoice (voice AI)
- TauricResearch/TradingAgents (financial trading)
- hugohe3/ppt-master (PPT generation)
- saturndec/waoowaoo (video production)
- OpenBB-finance/OpenBB (financial platform)
- Shubhamsaboo/awesome-llm-apps (LLM app collection)
- jeecgboot/JeecgBoot (low-code with AI)
- mind

I'm organizing these tools by their primary function—some fit multiple categories depending on use case. The infrastructure layer includes orchestration and deployment tools, while the application layer spans specific domains like finance, productivity, and creative work. Notable patterns emerging: agent frameworks enabling autonomous task execution, visual builders lowering the barrier to workflow creation, and domain-specific AI applications gaining traction across industries. -db)
- topoteretes/cognee (vector-db)
- weaviate/weaviate (vector-db)
- lancedb/lancedb (vector-db)
- zilliztech/claude-context (vector search for Claude)
- alibaba/zvec (vector-db)
- databendlabs/databend (data warehouse)
- VectifyAI/PageIndex (RAG without vectors)
- yichuan-w/LEANN (RAG with compression)
- Shubhamsaboo/awesome-llm-apps (RAG apps)
- PaddlePaddle/PaddleOCR (OCR for RAG)
- mem0ai/mem0 (memory for agents)
- mindsdb/mindsdb (AI data queries)
- HKUDS/LightRAG (fast RAG)
- thedotmack/claude-mem (Claude memory)
- microsoft/synthetic-rag-index (synthetic data for RAG)

Now I'm organizing these by category and preparing to write up the report with today's most significant developments. The key highlights include GitNexus as a browser-based knowledge graph with Graph RAG capabilities, free-claude-code for accessing Claude Code without cost, VibeVoice as Microsoft's open voice AI solution, DeepSeek-V3 as a major open weights model, and TradingAgents demonstrating multi-agent LLM applications in finance. I should structure this to show how these projects represent different segments of the AI ecosystem.
</think>

# AI Open Source Trends Report

**Date:** April 28, 2026  
**Data Sources:** GitHub Trending + AI Topic Search (81 repos)

---

## Step 1: Filtered AI Projects

From the 13 trending repositories, **9 are AI-related** (excluded: skills, penpot, hackingtool, system-design-primer). The topic search data is pre-filtered for AI relevance.

---

## Step 2: Categorized Projects

### 🔧 AI Infrastructure

| Project | Stars | Description |
|---------|-------|-------------|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 78,349 | High-throughput LLM inference engine with PagedAttention memory optimization |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 135,151 | Agent engineering platform with unified API for LLMs, tools, and memory |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 48,988 | Leading document agent and RAG framework with 100+ data connector integrations |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 70,682 | Unified fine-tuning platform for 100+ LLMs and VLMs with efficient training methods |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 134,501 | User-friendly web interface supporting Ollama, OpenAI, and custom model backends |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 112,690 | Web scraping API purpose-built for AI ingestion and RAG pipeline data collection |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 30,469 | React/Angular stack for building agentic UIs with AG-UI protocol standardization |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11,947 | Secure sandbox runtime providing real-world tools for enterprise-grade AI agents |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | 10,321 | Fast, extensible sandbox for AI agent execution with security isolation |

### 🤖 AI Agents / Workflows

| Project | Stars | Description |
|---------|-------|-------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 120,745 | Adaptive agent framework with skill growth and tool use capabilities |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 44,592 | AI productivity studio with 300+ assistants and unified multi-model access |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 43,778 | Multi-platform AI assistant (WeChat, Feishu, DingTalk) with long-term memory |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 41,081 | Ultra-lightweight personal AI agent optimized for resource-constrained environments |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 72,207 | AI-driven development agent for autonomous coding and debugging tasks |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 90,784 | Browser automation framework enabling AI agents to interact with any website |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,944 | Workflow automation platform with ~400 MCP server integrations for AI agents |
| [trycua/cua](https://github.com/trycua/cua) | 14,755 | Open-source infrastructure for training and evaluating computer-use agents across OSes |
| [starpig1129/DATAGEN](https://github.com/starpig1129/DATAGEN) | 1,701 | Multi-agent research assistant automating hypothesis generation and report writing |

### 📦 AI Applications

| Project | Stars | Today | Description |
|---------|-------|-------|-------------|
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | — | +757 | Open-source frontier voice AI for real-time speech interaction |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | — | +248 | Multi-agent LLM framework for financial trading research and execution |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 8,702 | — | AI-powered PPTX generation from documents with native editable shapes |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 11,826 | — | Industrial AI video production platform with Hollywood-standard workflows |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 66,621 | — | Financial data platform for analysts, quants, and AI agents |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 45,994 | — | Low-code platform with integrated AI chat, knowledge base, and workflow orchestration |
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | — | +1,102 | Browser-based knowledge graph creator with Graph RAG agent for code exploration |

### 🧠 LLMs / Training

| Project | Stars | Today | Description |
|---------|-------|-------|-------------|
| [deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | — | +81 | Latest DeepSeek model with advanced reasoning and cost efficiency |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 48,436 | — | Train a 64M GPT from scratch in 2 hours—educational LLM training guide |
| [ollama/ollama](https://github.com/ollama/ollama) | 170,166 | — | Local LLM inference with support for DeepSeek, Qwen, Gemma, and 100+ models |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160,005 | — | State-of-the-art ML models for text, vision, audio, and multimodal tasks |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 194,917 | — | Production ML framework with broad industry adoption and tooling |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 99,487 | — | Dynamic neural network framework with GPU acceleration dominance |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,128 | — | LLM inference serving course on Apple Silicon with vLLM + Qwen optimization |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 207 | — | Minimal library for pretraining foundation and world models at scale |

### 🔍 RAG / Knowledge

| Project | Stars | Description |
|---------|-------|-------------|
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 59,114 | All-in-one AI productivity tool with on-device, privacy-first document processing |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,330 | Lightning-fast search API with AI-powered hybrid search capabilities |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,013 | Cloud-native vector database for high-performance ANN search at scale |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 30,792 | High-performance vector database with filtering and cloud offering |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 10,105 | Embedded vector database optimized for multimodal AI and local deployment |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 54,238 | Universal memory layer enabling persistent context for AI agents |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 34,416 | EMNLP 2025 paper—simple and fast retrieval-augmented generation system |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 76,710 | OCR toolkit bridging PDFs/images to structured data for LLM consumption |
| [mindsdb/mindsdb](https://github.com/mindsdb/mindsdb) | 39,065 | AI data vault allowing agents to query any datasource with SQL-like interface |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 25,873 | Vectorless RAG using reasoning-based retrieval for reduced storage |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 10,919 | MLSys 2026—RAG with 97% storage savings for private on-device applications |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 9,871 | Claude Code MCP server for codebase-wide context injection |

---

## Step 3: Trend Report

### 1. Today's Highlights

The AI open-source ecosystem is experiencing a surge in **coding agent tooling**, with projects like [free-claude-code](https://github.com/Alishahryar1/free-claude-code) (+2,949 stars) democratizing access to Claude Code, while memory and context solutions like [beads](https://github.com/gastownhall/beads) and [GitNexus](https://github.com/abhigyanpatwari/GitNexus) address critical gaps in agent reliability. Microsoft's entry into open voice AI with [VibeVoice](https://github.com/microsoft/VibeVoice) signals growing competition in multimodal interfaces. The financial AI vertical is heating up with [TradingAgents](https://github.com/TauricResearch/TradingAgents) demonstrating multi-agent architectures for real-world domain applications. DeepSeek continues its momentum with [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3), reinforcing the trend of capable open-weights models challenging proprietary APIs.

### 2. Top Projects by Category

#### 🔧 AI Infrastructure
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐78,349 — Industry-standard inference engine enabling efficient LLM serving with PagedAttention; critical for production deployments.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** ⭐135,151 — The dominant agent development framework, now with improved memory and tool-calling abstractions.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐112,690 — Purpose-built web scraping for AI; essential for RAG pipelines needing fresh web data.
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** ⭐30,469 — Standardizing agent-frontend communication with AG-UI protocol; emerging as the React layer for AI apps.

#### 🤖 AI Agents / Workflows
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐120,745 — Adaptive agent with skill growth; represents the "agent that evolves" paradigm.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐90,784 — Makes any website an AI-interactable surface; key enabler for web automation agents.
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐72,207 — Autonomous coding agent achieving state-of-the-art on SWE-bench; backed by extensive community.
- **[trycua/cua](https://github.com/trycua/cua)** ⭐14,755 — Cross-platform computer-use agent infrastructure; addresses the "AI controls desktop" challenge.

#### 📦 AI Applications
- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** ⭐— (+757 today) — Open frontier voice AI; Microsoft's bet on competing with proprietary speech APIs.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐— (+248 today) — Multi-agent financial trading framework; shows LLM application in high-stakes domains.
- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** ⭐66,621 — Financial data platform bridging quant workflows with AI agent capabilities.

#### 🧠 LLMs / Training
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐170,166 — Local inference made simple; supports 100+ models including latest DeepSeek and Qwen releases.
- **[deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)** ⭐— (+81 today) — Latest open-weights model from DeepSeek; continues cost-efficiency innovation.
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐70,682 — One-click fine-tuning for 100+ LLMs; democratizing model customization.

#### 🔍 RAG / Knowledge
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** ⭐59,114 — Privacy-first, on-device RAG; growing demand for local document intelligence.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐54,238 — Universal agent memory; solves the "forget everything between sessions" problem.
- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** ⭐34,416 — EMNLP 2025 paper implementation; fast, simple RAG gaining rapid adoption.
- **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** ⭐10,919 — MLSys 2026 paper; 97% storage reduction for on-device RAG applications.

### 3. Trend Signal Analysis

**Coding agents dominate today's momentum.** The top 5 trending AI repos all relate to coding assistance—free access to Claude Code (+2,949), memory upgrades for agents (+498), knowledge graph exploration (+1,102), and CLI templates (+154). This signals the community's hunger for production-ready agent tooling beyond demos.

**Memory and context are the new battleground.** Projects like [beads](https://github.com/gastownhall/beads), [mem0ai/mem0](https://github.com/mem0ai/mem0), and [zilliztech/claude-context](https://github.com/zilliztech/claude-context) address the fundamental limitation of stateless LLMs. The emergence of vectorless RAG approaches ([VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)) suggests the community is actively questioning the "embed everything" paradigm.

**Vertical AI applications are maturing.** [TradingAgents](https://github.com/TauricResearch/TradingAgents) and [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) demonstrate multi-agent architectures purpose-built for finance—a high-value domain where LLMs can provide tangible ROI. Similarly, [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) targets professional video production.

**Infrastructure consolidation continues.** Vector databases (Milvus, Qdrant, Weaviate, LanceDB) and LLM frameworks (LangChain, LlamaIndex) have established ecosystems. New entrants differentiate through specialization: [alibaba/zvec](https://github.com/alibaba/zvec) for in-process speed, [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) for Rust safety.

### 4. Community Hot Spots

- **[trycua/cua](https://github.com/trycua/cua)** — Computer-use agents are the next frontier; cua provides the sandbox + SDK + benchmark infrastructure. Watch for production deployments in 2026.

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent memory is becoming a first-class concern. Mem0's universal API for persistent context is gaining traction; consider integration for any agent project.

- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** — Open voice AI is nascent; Microsoft's entry could catalyze a wave of local speech interfaces. Testbed for multimodal agent development.

- **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** — On-device RAG with 97% storage savings (MLSys 2026) addresses privacy and edge deployment concerns. Early indicator of "small but smart" RAG trends.

- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** — AG-UI protocol standardization for agent-frontend communication. If adopted, it becomes the React of AI interfaces—worth monitoring for ecosystem lock-in potential.

---

*Report generated from GitHub Trending + AI Topic Search data. Stars and daily gains reflect public metrics as of 2026-04-28.*

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*