# GitHub AI Trending Digest 2026-05-10

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-10 02:05 UTC

---

# GitHub AI Trending Digest — 2026-05-10

## Today's Hot List Brief

Today's trending list is dominated by AI agent infrastructure and tooling. **anthropics/financial-services** leads with an explosive +3,281 stars, followed by **addyosmani/agent-skills** (+3,009) and **datawhalechina/hello-agents** (+1,197). Memory systems for agents, MCP-based developer tools, and multi-provider AI gateways are the day's strongest themes. A notable influx of educational content (agent and LLM tutorials) also appears, signaling sustained community interest in hands-on learning.

---

## Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — TypeScript, ⭐0 (+107 today)
  Exposes Chrome DevTools as a Model Context Protocol (MCP) server, enabling coding agents to inspect, debug, and control browser contexts directly.

- **[decolua/9router](https://github.com/decolua/9router)** — JavaScript, ⭐0 (+1,031 today)
  A unified proxy gateway that routes requests from Claude Code, Codex, Cursor, etc., to 40+ LLM providers with automatic fallback and token optimization.

- **[oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub)** — Jupyter Notebook, ⭐0 (+90 today)
  Technical resources and notebooks for building AI applications on Oracle AI Database and OCI services.

- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** — TypeScript, ⭐22,121 (from topic search)
  AI workflow automation with 400+ pre-built MCP servers for agents.

- **[samchon/nestia](https://github.com/samchon/nestia)** — TypeScript, ⭐2,148 (from topic search)
  NestJS helper with AI chatbot development support and auto-generated SDKs.

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

- **[bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop)** — TypeScript, ⭐0 (+552 today)
  An open-source multimodal AI agent stack that connects state-of-the-art models with agent infrastructure for desktop automation.

- **[rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)** — TypeScript, ⭐0 (+533 today)
  Persistent memory layer for AI coding agents, benchmarked for real-world use; simplifies stateful agent interactions.

- **[rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat)** — TypeScript, ⭐0 (+144 today)
  Open-source AI coworker with built-in memory, designed to assist developers across tasks.

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — Shell, ⭐0 (+3,009 today)
  Production-grade engineering skills (scripts, prompts, workflows) for AI coding agents; a practical skill library.

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — Python, ⭐141,038 (from topic search)
  A growing personal agent that learns and adapts over time; strong community adoption.

- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** — TypeScript, ⭐47,856 (from topic search)
  Agent orchestration platform for Claude, supporting multi-agent swarms and self-learning.

### 📦 AI Applications (specific apps, vertical solutions)

- **[anthropics/financial-services](https://github.com/anthropics/financial-services)** — Python, ⭐0 (+3,281 today)
  Anthropic's entry into AI-powered financial services; today's top star gainer, likely a domain-specific agent or analysis tool.

- **[santifer/career-ops](https://github.com/santifer/career-ops)** — JavaScript, ⭐43,781 (from topic search)
  AI-powered job search system built on Claude Code with skill modes, PDF generation, and batch processing.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — TypeScript, ⭐45,328 (from topic search)
  AI productivity studio with smart chat, autonomous agents, and 300+ assistant templates.

- **[leon-ai/leon](https://github.com/leon-ai/leon)** — TypeScript, ⭐17,216 (from topic search)
  Open-source personal assistant with AI capabilities, modular and extendable.

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)

- **[Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms)** — Jupyter Notebook, ⭐0 (+160 today)
  Hands-on tutorial series for understanding and building large language models from scratch.

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — Jupyter Notebook, ⭐92,270 (from topic search)
  Step-by-step implementation of a ChatGPT-like LLM in PyTorch; remains a foundational resource.

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — Python, ⭐49,386 (from topic search)
  Train a 64M-parameter LLM from scratch in ~2 hours; popular for LLM education.

- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** — Python, ⭐71,095 (from topic search)
  Unified fine-tuning framework supporting 100+ LLMs and VLMs.

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Python, ⭐55,243 (from topic search)
  Universal memory layer for AI agents, enabling long-term context retention.

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — Python, ⭐80,108 (from topic search)
  Leading open-source RAG engine with agent capabilities; strong in document processing.

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — Go, ⭐44,202 (from topic search)
  High-performance cloud-native vector database for scalable ANN search.

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — Python, ⭐30,278 (from topic search)
  Vectorless, reasoning-based RAG alternative for document indexing.

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — TypeScript, ⭐74,161 (from topic search)
  Plugin that captures and compresses Claude Code sessions for cross-session memory injection.

---

## Hot List Observations

- **Agent memory and persistence** is the strongest theme today. Three trending repos (agentmemory, rowboat, plus the topic-search mem0 and claude-mem) focus on giving coding agents durable, retrievable context. This aligns with the broader shift toward "AI coworkers" rather than stateless assistants.

- **MCP (Model Context Protocol) adoption** grows: Chrome DevTools MCP and agent-skills both leverage MCP to integrate developer tools directly into agent workflows. The presence of a major Chrome developer tool team releasing a repospecific MCP server signals increased industry momentum.

- **Educational surge**: datawhalechina/hello-agents and dive-into-llms are both practical, tutorial-style repositories, indicating that the community is actively learning how to build and customize agents and LLMs. The popularity of these repos (especially hello-agents with +1,197 stars) suggests a hunger for accessible, hands-on materials.

- **Free multi-provider AI gateways** are gaining traction: 9router (+1,031 stars) offers unlimited free routing to Claude, GPT, Gemini, etc. This reflects a cost-conscious developer base looking to experiment across models without vendor lock-in.

- **Financial AI enters the open-source spotlight**: anthropics/financial-services is a notable new entrant from a prominent AI lab. While details are sparse, the massive star count points to high anticipation around domain-specific financial agents.

---

## Community Hot Spots

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — A pragmatic skill library for coding agents that can be immediately reused; its rapid growth (+3,009) suggests developers are eager for battle-tested templates.

- **[rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)** — With +533 stars in one day, this lightweight memory solution for agents is attracting attention as a simpler alternative to heavyweight RAG pipelines.

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — Official Google-backed MCP server for DevTools; worth watching as it could become a standard interface for browser automation in AI agents.

- **[decolua/9router](https://github.com/decolua/9router)** — Offers a zero-cost way to route AI coding tools to multiple providers; popular among cost-conscious indie developers.

- **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** — The companion to a popular Chinese book on building agents; provides code examples in English and Chinese, making agent development accessible to a global audience.