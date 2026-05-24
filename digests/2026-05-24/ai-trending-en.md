# GitHub AI Trending Digest 2026-05-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-24 02:29 UTC

---

# GitHub AI Trending Digest – 2026-05-24

## Today's Hot List Brief

Today's trending landscape is dominated by projects that augment and extend AI coding agents. The surge in repositories like **codegraph** (+2,456 today), **andrej-karpathy-skills** (+3,507), and **claude-plugins-official** (+2,193) reflects a strong demand for persistent context, skill directories, and pre-indexed knowledge graphs that reduce token usage and improve agent efficiency. Meanwhile, new agent orchestration platforms (e.g., **multica**) and vertical applications (e.g., **presenton** for AI presentations) continue to emerge. The topic search confirms the same direction: agent frameworks (AutoGPT, OpenHands, hermes-agent) and RAG/infrastructure tools remain highly active.

---

## Top Projects by Category

### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools)

| Project | Stars | Why it matters today |
|--------|------|---------------------|
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,817 | High-throughput LLM inference engine, essential for deploying large models. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 137,492 | The de facto agent engineering platform with growing ecosystem support. |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,379 | Production-ready platform for agentic workflow development, trending in topic search. |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | +435 today | Chrome DevTools exposed as MCP server for coding agents – official Google initiative. |
| [ollama/ollama](https://github.com/ollama/ollama) | 172,133 | Local LLM runner, now supports Kimi-K2.5, GLM-5, DeepSeek, etc. |

### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)

| Project | Stars | Why it matters today |
|--------|------|---------------------|
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | +2,456 today | Pre-indexed code knowledge graph for Claude Code, Codex, Cursor – cuts token usage and tool calls. |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | +3,507 today | A single CLAUDE.md file derived from Karpathy's observations to improve Claude Code behavior. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | +2,193 today | Anthropic-managed directory of high-quality Claude Code plugins – official ecosystem standard. |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | +281 today | 754 structured cybersecurity skills for AI agents, mapped to 5 frameworks. |
| [multica-ai/multica](https://github.com/multica-ai/multica) | +410 today | Open-source managed agents platform – turn coding agents into teammates with task tracking and skill compounding. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,481 | The pioneer autonomous agent framework, still actively maintained. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 74,659 | AI-driven development agent platform. |

### 📦 AI Applications (specific apps, vertical solutions)

| Project | Stars | Why it matters today |
|--------|------|---------------------|
| [presenton/presenton](https://github.com/presenton/presenton) | +241 today | Open-source AI presentation generator – alternative to Gamma, Beautiful AI. |
| [NVlabs/LongLive](https://github.com/NVlabs/LongLive) | +94 today | Long video generation infrastructure ("LongLive 2.0: Infra – Long Video Gen"). |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 46,178 | AI productivity studio with 300+ assistants – unified access to frontier LLMs. |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,754 | Super AI assistant that integrates with WeChat, Feishu, DingTalk, etc. |

### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning)

| Project | Stars | Why it matters today |
|--------|------|---------------------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 95,621 | Step-by-step implementation of a ChatGPT-like LLM in PyTorch – educational cornerstone. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,531 | Unified fine-tuning for 100+ LLMs and VLMs (ACL 2024). |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50,464 | Train a 64M-parameter LLM from scratch in 2 hours – minimalist training pipeline. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,203 | Build a tiny vLLM + Qwen on Apple Silicon – hands-on systems course. |

### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

| Project | Stars | Why it matters today |
|--------|------|---------------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,102 | Leading open-source RAG engine with agent capabilities. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 56,540 | Universal memory layer for AI Agents – persistent across sessions. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,426 | Cloud-native vector database for scalable ANN search. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 77,703 | Captures agent session data, compresses with AI, and injects future context – works with multiple agents. |
| [neuml/txtai](https://github.com/neuml/txtai) | 12,605 | All-in-one AI framework for semantic search, LLM orchestration, and language model workflows. |

---

## Hot List Observations

**Category concentration**: The most prominent category in today's trending list is **AI Agents / Workflows**, accounting for over half of the AI-relevant trending repositories. Many of these target the specific problem of **agent context reduction** and **skill composition** – codegraph, karpathy-skills, claude-plugins, and cybersecurity-skills all aim to make agents smarter with less input. Meanwhile, **AI Infrastructure** appears mostly via tool integrations (MCP, DevTools). **LLMs/Training** and **RAG** are nearly absent from the trending list, though they remain highly active in the broader topic search (vllm, RAGFlow, etc.). This suggests that today's "hot" attention is on making existing agents more productive rather than building new models or retrieval systems.

**Novel project types**: Two unusual projects stand out. **andrej-karpathy-skills** is a single configuration file (CLAUDE.md) that has gained 3,507 stars in one day – a new genre of "agent skill template" shared as a recipe. **codegraph** (2,456 stars) introduces pre-indexed code knowledge graphs as a plug-and-play context layer, implying a shift from runtime vector search to precomputed code understanding. Additionally, **multica** (410 stars) positions itself as a "managed agents platform," hinting at enterprise-style team collaboration for AI agents.

**Industry event linkage**: No direct link to specific LLM releases can be drawn from the data, but the flurry of Claude Code plugins (official from Anthropic) and cybersecurity skills (mapped to NIST and MITRE frameworks) suggest increasing institutional adoption and governance for AI coding agents.

---

## Community Hot Spots

- **🔷 Code Knowledge Graphs (codegraph, Understand-Anything, graphify):** These projects transform codebases into interactive, queryable graphs for agents. The combination of pre-indexing + MCP makes them immediately useful for any agent that needs to navigate large repositories. Worth exploring if you work with agent-driven development.

- **🔷 Agent Skill Directories (claude-plugins-official, mukul975 skills, dotnet/skills):** A standardised skill format is emerging. The "agentskills.io" schema appears in multiple repos. This could become the npm-like marketplace for agent capabilities – watch for cross-platform compatibility.

- **🔷 Managed Agent Teams (multica):** Beyond single-agent improvements, multica introduces task assignment, progress tracking, and skill compounding across multiple agents. This is a rare glimpse into production-level agent orchestration and one of the first open-source attempts at "AI team management."

- **🔷 Chrome DevTools MCP (ChromeDevTools/chrome-devtools-mcp):** Official Google/Chrome team release. This turns browser debugging into an MCP tool for coding agents – likely to be adopted by all major agent platforms. Essential for agents that need to test and iterate on web UIs.

- **🔷 Presentation Generation with Native PPTX (presenton):** Unlike image-based tools, presenton generates editable PowerPoint files with real shapes and animations. A solid example of AI vertical application that doesn't sacrifice output quality – relevant for any enterprise use case.