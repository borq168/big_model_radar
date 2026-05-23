# GitHub AI Trending Digest 2026-05-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-23 02:10 UTC

---

# GitHub AI Trending Digest – 2026-05-23

## Today's Hot List Brief

Today’s AI-related trending on GitHub is dominated by tools that enhance or extend AI coding agents. **colbymchenry/codegraph** (+3,684 stars) provides a pre-indexed code knowledge graph to reduce token and tool-call usage for agents like Claude Code and Cursor. The official **anthropics/claude-plugins-official** (+2,549 stars) launched a curated directory of Claude Code plugins. **Lum1104/Understand-Anything** (+1,393 stars) turns any codebase into an interactive knowledge graph. Other notable entries include `oh-my-pi` (a terminal AI coding agent), `chrome-devtools-mcp` (MCP for Chrome DevTools), and `dotnet/skills` (skills for .NET AI agents). Educational resources `ai-engineering-from-scratch` (+988) and `nn-zero-to-hero` (+159) also trend.

## Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)

| Project | Stars (total / today) | Why it matters |
|--------|----------------------|----------------|
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | 0 / +3,684 | Pre-indexed code knowledge graph for AI coding agents – reduces tokens and tool calls. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 0 / +501 | Official Chrome DevTools MCP for coding agents – browser debugging from AI. |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 0 / +457 | Terminal AI coding agent with hash-anchored edits, LSP, Python, and subagents. |
| [dotnet/skills](https://github.com/dotnet/skills) | 0 / +389 | Repository of skills to assist AI coding agents with .NET and C#. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,757 / – | High-throughput LLM inference engine – production-standard serving. |

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent)

| Project | Stars (total / today) | Why it matters |
|--------|----------------------|----------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 163,216 / – | “The agent that grows with you” – popular general-purpose AI agent. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 62,047 / – | Nano “Claude Code” agent harness built from 0 to 1 – educational. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 54,198 / – | Multi-agent orchestration platform for Claude, with swarm intelligence. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 31,679 / – | Frontend stack for agents & generative UI – React + Angular. |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 22,354 / – | AI agents & MCP workflow automation, ~400 MCP servers. |

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Stars (total / today) | Why it matters |
|--------|----------------------|----------------|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 0 / +988 | Learn AI engineering by building and shipping – practical roadmap. |
| [karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero) | – / +159 | Classic neural networks course from zero to hero. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 67,953 / – | Financial data platform for analysts, quants and AI agents. |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 25,761 / – | AI-powered web scraper – turn any site into structured data. |

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning)

| Project | Stars (total / today) | Why it matters |
|--------|----------------------|----------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50,419 / – | Train a 64M-parameter LLM from scratch in 2 hours – accessible pretraining. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 95,400 / – | Implement a ChatGPT-like LLM in PyTorch from scratch. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,197 / – | Learn LLM inference serving on Apple Silicon – build a tiny vLLM. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,019 / – | Comprehensive LLM evaluation platform supporting 100+ datasets. |

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Stars (total / today) | Why it matters |
|--------|----------------------|----------------|
| [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | 0 / +1,393 | Interactive knowledge graph for code – explore and ask questions. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 60,478 / – | All-in-one AI productivity accelerator with vector DB – privacy first. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,407 / – | High-performance cloud-native vector database for ANN search. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 56,463 / – | Universal memory layer for AI agents – persist and retrieve context. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 77,522 / – | Persistent context across sessions for every agent – compresses and reinjects. |

## Hot List Observations

Today’s data reveals a clear concentration on **AI coding agent tooling**. Six of the eight AI-related trending repos are directly related to enhancing agents (plugins, knowledge graphs, MCP servers, skills). This suggests the ecosystem is moving beyond basic agents to specialized infrastructure that reduces token usage and improves agent accuracy. The `codegraph` and `Understand-Anything` projects approach the same problem (code understanding) from different angles—pre-indexed graphs vs. interactive exploration.

The topic search also shows high star counts for **agent memory systems** (`claude-mem`, `mem0`, `cognee`) and **multi-agent orchestration** (`ruflo`, `activepieces`). Vector databases remain a bedrock category, with mature projects like Milvus, Qdrant, and LanceDB all active. There are no major new LLM model releases apparent in today’s data; the focus is on infrastructure around existing models.

Educational projects (`ai-engineering-from-scratch`, `nn-zero-to-hero`, `minimind`, `LLMs-from-scratch`) continue to draw attention, indicating sustained interest in building understanding from the ground up.

## Community Hot Spots

- **Code Knowledge Graphs for Agents** – Projects like `codegraph` and `Understand-Anything` are rethinking how agents consume codebases. They promise to reduce token usage and tool calls, a key pain point for advanced agent workflows.
- **MCP (Model Context Protocol) Enablers** – `chrome-devtools-mcp` and `claude-plugins-official` extend the reach of coding agents into browser debugging and plugin ecosystems. MCP is becoming a standard interface.
- **Agent Memory and Persistence** – `claude-mem` (+77K total stars) and `mem0` (+56K) show strong community demand for agents that remember across sessions. This is a critical missing piece for long-running agent tasks.
- **Financial AI Agents** – `OpenBB`, `TradingAgents`, and `ZhuLinsen/daily_stock_analysis` reflect a growing niche where LLM agents are applied to market analysis and trading. The trend is supported by agent frameworks that integrate financial data APIs.
- **Lightweight LLM Training** – `minimind` and `tiny-llm` make training and serving small models accessible on consumer hardware, lowering the barrier to entry for LLM experimentation.