# GitHub AI Trending Digest 2026-05-16

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-16 02:07 UTC

---

# GitHub AI Trending Digest — 2026-05-16

## Today’s Hot List Brief
Today’s GitHub trending landscape is overwhelmingly shaped by **agent skill frameworks** — four independent projects (obra/superpowers, anthropics/skills, K-Dense-AI/scientific-agent-skills, mattpocock/skills) all surged into the top 12, signaling a coordinated community shift toward reusable, declarative agent capabilities. Meanwhile, two novel on-device AI projects (supertone-inc/supertonic for TTS, ruvnet/RuView for WiFi-based sensing) demonstrated strong traction in edge inference. NVIDIA also contributed a reference architecture for GPU-accelerated video analytics. Non-AI projects (telegraf, bun) were excluded from the filtered analysis below.

---

## Top Projects by Category

### 🔧 AI Infrastructure
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+1,648 today)
  An agentic skills framework and software development methodology — promises to standardize how agents build and evolve skills.
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [TypeScript] ⭐60,677
  A minimal “agent harness” built from scratch, demonstrating how to replicate Claude Code-like functionality with pure Bash.
- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** [Python] ⭐312
  On-device LLM inference library using X-Bit quantization — targets resource-constrained environments.

### 🤖 AI Agents / Workflows
- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** [Python] ⭐0 (+646 today)
  Ready-to-use agent skills for research, engineering, finance, and writing — aimed at domain-specific automation.
- **[anthropics/skills](https://github.com/anthropics/skills)** [Python] ⭐0 (+689 today)
  Anthropic’s official public repository for Agent Skills, likely tied to Claude’s growing ecosystem.
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0 (+3,132 today)
  “Skills for Real Engineers” — directly extracted from the author’s .claude directory, this repo garnered the most daily stars of any project today.
- **[czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp)** [TypeScript] ⭐0 (+68 today)
  A Model Context Protocol (MCP) server that lets Claude Desktop/Code, Windsurf, and Cursor build n8n workflows automatically.
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** [TypeScript] ⭐51,572
  Agent orchestration platform for Claude — supports multi-agent swarms, self-learning, and native Claude Code / Codex integration.

### 📦 AI Applications
- **[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)** [Rust] ⭐0 (+1,271 today)
  A personal AI super intelligence — emphasizes privacy, simplicity, and local-first execution.
- **[supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)** [Swift] ⭐0 (+719 today)
  Lightning-fast, on-device multilingual TTS running natively via ONNX — a clear push for edge-based speech synthesis.
- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** [Rust] ⭐0 (+1,859 today)
  Transforms commodity WiFi signals into spatial intelligence and vital sign monitoring — no cameras required.
- **[NVIDIA-AI-Blueprints/video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization)** [Python] ⭐0 (+308 today)
  GPU-accelerated reference architecture for building vision agents and AI-powered video analytics.
- **[joeseesun/qiaomu-anything-to-notebooklm](https://github.com/joeseesun/qiaomu-anything-to-notebooklm)** [Python] ⭐0 (+438 today)
  A Claude Skill that converts WeChat articles, YouTube, PDFs, and web pages into NotebookLM-compatible formats (Podcast/PPT/MindMap).
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** [TypeScript] ⭐45,737
  AI productivity studio with smart chat, 300+ assistants, and autonomous agents — unified access to frontier LLMs.

### 🧠 LLMs / Training
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐152,085
  “The agent that grows with you” — a large, active agent project with significant community investment.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐184,334
  The original autonomous GPT agent framework remains a long-standing staple in the LLM-agent space.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐80,132
  High-throughput LLM inference engine — essential infrastructure for serving open-weight models.
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐94,866
  Step-by-step implementation of a ChatGPT-like LLM in PyTorch — a go-to educational resource.

### 🔍 RAG / Knowledge
- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐141,523
  Production-ready platform for agentic workflow development — widely adopted for RAG pipelines.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Python] ⭐80,591
  Open-source RAG engine combining retrieval-augmented generation with agent capabilities.
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐60,101
  All-in-one AI productivity accelerator with local-first, privacy-focused document ingestion.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** [Go] ⭐44,314
  Cloud-native vector database purpose-built for scalable ANN search.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐76,000
  Persistent context system that captures, compresses, and injects session data across agent sessions.

---

## Hot List Observations

**Agent Skills dominate the trending list.** Four of the top twelve trending repositories today are dedicated to agent skill frameworks (`obra/superpowers`, `anthropics/skills`, `K-Dense-AI/scientific-agent-skills`, `mattpocock/skills`). This cluster suggests the community is standardizing around skill-as-a-unit-of-capability — a pattern where agents load modular, reusable skills from structured directories rather than relying on monolithic prompts. The simultaneous release of `mattpocock/skills` (+3,132 stars in one day) indicates that individual developer skill-sharing workflows are resonating widely.

**On-device and edge AI have a strong showing.** Both `supertone-inc/supertonic` (local TTS via ONNX) and `ruvnet/RuView` (WiFi-based sensing) are hardware-adjacent AI applications that run without cloud dependencies. This aligns with the growing demand for privacy-preserving, low-latency inference.

**Video AI infrastructure gains reference architecture.** The NVIDIA-AI-Blueprints video search project (308 stars today) is a notable addition — it provides a blueprint for building GPU-accelerated vision agents, which may signal increasing professional interest in structured video understanding.

**Missing categories.** Traditional ML training frameworks (TensorFlow, PyTorch) appear only in the topic search with no trending activity today. The entire hot list is dominated by agent workflows and application-layer AI rather than model training or core infrastructure.

---

## Community Hot Spots

- **Skills as a format / protocol** — `mattpocock/skills`, `anthropics/skills`, and `obra/superpowers` are collectively defining what a “skill” file should look like. Developers building agent-related tools should monitor these repositories for emerging conventions around skill packaging, versioning, and discovery.

- **CherryHQ/cherry-studio** — With 45k+ stars and 300+ built-in assistants, this is a rapidly growing AI productivity platform worth examining as a reference for frontend agent integration.

- **Edge AI with novel modalities** — `ruvnet/RuView` (WiFi sensing) and `supertone-inc/supertonic` (on-device TTS) represent frontier use cases where AI leaves the chatbot paradigm and enters physical or perception domains.

- **OpenCLI and agent-native tooling** — `jackwener/OpenCLI` and `googleworkspace/cli` (both in topic search) show that turning websites and services into CLI tools for agents is an active design pattern.

- **Learn from zero** — `shareAI-lab/learn-claude-code` and `zhayujie/CowAgent` (44k+ stars) provide clean, minimal implementations of agent harnesses — excellent resources for developers who want to understand agent internals without vendor lock-in.