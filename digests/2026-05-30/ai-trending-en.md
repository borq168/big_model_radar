# GitHub AI Trending Digest 2026-05-30

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-30 02:13 UTC

---

# GitHub AI Trending Digest – 2026-05-30

## Today’s Hot List Brief

Today’s AI trending list is dominated by **agentic coding tools** and **AI skill/quality‑of‑life enhancements**. Anthropic’s **claude-code** gained +395 stars, while two complementary projects—**taste-skill** (+2,062) and **stop-slop** (+617)—focus on cleaning up AI‑generated prose. The video generation tool **MoneyPrinterTurbo** (+3,567) and the document parser **liteparse** (+701) also saw strong traction. Meanwhile, the topic‑search data shows sustained interest in RAG systems (e.g., **RAGFlow**, **LlamaIndex**) and agent harnesses (e.g., **ECC**, **hermes-agent**).

## Top Projects by Category

### 🔧 AI Infrastructure
- **[claude-code](https://github.com/anthropics/claude-code)** – Python, ⭐0 (+395 today)
  Agentic coding tool that runs in the terminal, understands codebases, and handles git workflows via natural language.
- **[cursor/plugins](https://github.com/cursor/plugins)** – TypeScript, ⭐0 (+134 today)
  Official plugin specification for Cursor, enabling third‑party extensions for AI‑powered coding.
- **[compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)** – TypeScript, ⭐0 (+353 today)
  Plugin for Claude Code, Codex, Cursor, and others to integrate compound engineering workflows.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** – Python, ⭐81,385 (topic:llm)
  High‑throughput, memory‑efficient inference engine for LLMs, widely used in production.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** – Python, ⭐137,990 (topic:llm)
  Agent engineering platform that provides building blocks for LLM‑powered applications.

### 🤖 AI Agents / Workflows
- **[ECC](https://github.com/affaan-m/ECC)** – JavaScript, ⭐0 (+1,406 today)
  “Agent harness” that adds skills, instincts, memory, and security to Claude Code, Codex, and Cursor.
- **[taste-skill](https://github.com/Leonxlnx/taste-skill)** – Shell, ⭐0 (+2,062 today)
  A skill file that stops AI from generating boring, generic outputs—implements “good taste” for agents.
- **[stop-slop](https://github.com/hardikpandya/stop-slop)** – Markdown, ⭐0 (+617 today)
  Skill file for removing common AI tells (“delve”, “it’s important to note”) from generated prose.
- **[hermes-agent](https://github.com/NousResearch/hermes-agent)** – Python, ⭐172,892 (topic:llm)
  An agent that grows with you, supporting pluggable skills and memory.
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** – Python, ⭐69,964 (topic:llm)
  Long‑horizon SuperAgent harness that researches, codes, and creates with sandboxes and sub‑agents.
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** – TypeScript, ⭐46,573 (topic:ai-agent)
  AI productivity studio with smart chat, autonomous agents, and 300+ assistants.

### 📦 AI Applications
- **[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** – Python, ⭐0 (+3,567 today)
  One‑click AI short‑video generation using LLMs, popular for content creation.
- **[twentyhq/twenty](https://github.com/twentyhq/twenty)** – TypeScript, ⭐0 (+578 today)
  Open‑source CRM designed for AI integration, positioning as an alternative to Salesforce.
- **[project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** – TypeScript, ⭐0 (+318 today)
  Self‑contained offline survival computer packed with AI tools for emergency scenarios.
- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** – Python, ⭐78,968 (topic:rag)
  Lightweight OCR toolkit that bridges PDFs/images with LLMs for structured data extraction.
- **[FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)** – TypeScript, ⭐53,208 (topic:rag)
  Visual builder for AI agents and RAG workflows, popular among non‑coders.

### 🧠 LLMs / Training
- **[stable-worldmodel](https://github.com/galilai-group/stable-worldmodel)** – Python, ⭐0 (+362 today)
  Platform for reproducible world model research and evaluation.
- **[Biohub/esm](https://github.com/Biohub/esm)** – Jupyter Notebook, ⭐0 (+52 today)
  Protein language models (ESM family) for biological sequence understanding.
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** – Python, ⭐71,701 (topic:llm)
  Unified fine‑tuning framework for 100+ LLMs and VLMs, widely used in research.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** – Python, ⭐7,047 (topic:llm-model)
  Comprehensive LLM evaluation platform supporting 100+ datasets.

### 🔍 RAG / Knowledge
- **[liteparse](https://github.com/run-llama/liteparse)** – Rust, ⭐0 (+701 today)
  Fast, open‑source document parser from the LlamaIndex team, designed for AI pipelines.
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** – Python, ⭐49,764 (topic:vector-db)
  Leading document agent and OCR platform, now positioning as a general RAG framework.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** – Python, ⭐81,528 (topic:rag)
  Open‑source RAG engine with built‑in agent capabilities and a superior context layer.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** – Python, ⭐57,100 (topic:rag)
  Universal memory layer for AI agents, enabling persistent cross‑session context.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** – Go, ⭐44,537 (topic:vector-db)
  Cloud‑native vector database for scalable ANN search, a staple in RAG stacks.

## Hot List Observations

- **Agent harnesses dominate**: Three of the top‑starred trending repos today (ECC, taste-skill, stop-slop) are skill‑focused modifications for agentic coding tools (Claude Code, Codex, Cursor). This suggests a growing focus on *refining agent behavior*—reducing verbose output, enforcing stylistic constraints, and adding meta‑skills.
- **Video generation maintains momentum**: MoneyPrinterTurbo’s explosive +3,567 stars today confirms that AI video creation remains a high‑demand application, especially for one‑click, template‑based tools.
- **Document parsing sees new entrants**: liteparse (Rust, from LlamaIndex) and the continued popularity of PaddleOCR indicate that bridging unstructured documents and AI systems is a persistent need.
- **Open‑source BI/CRM with AI twist**: twentyhq/twenty’s +578 stars shows interest in AI‑first CRM, though it’s still early relative to incumbents.
- **No single LLM release dominates**: Today’s list lacks a major new model launch; instead, the energy is on tooling, agent tailoring, and data preprocessing.

## Community Hot Spots

- **ECC** – The “agent harness” concept is evolving beyond simple RAG into full skill management. Developers should watch how ECC’s memory, instinct, and security modules influence future agent frameworks.
- **taste-skill / stop-slop** – A emerging category of “AI style guides” that let users control the tone and verbosity of LLM output. Could become a standard component in agent deployments.
- **liteparse** – As a Rust‑based, fast document parser from the LlamaIndex team, it may challenge existing Python‑heavy parsers for production RAG pipelines.
- **claude-code** – Anthropic’s CLI agent is gaining traction quickly; its plugin ecosystem (compound-engineering-plugin, cursor/plugins) is expanding, making it a potential rival to Codex/Cursor.
- **stable-worldmodel** – Reproducible world model evaluation is still niche but signals growing research emphasis on standardized benchmarks for world models.