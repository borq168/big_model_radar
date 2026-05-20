# GitHub AI Trending Digest 2026-05-20

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-20 02:31 UTC

---

# GitHub AI Trending Digest — 2026-05-20

## Today's Hot List Brief
Today’s trending AI repositories are dominated by agent‑centric tooling, with multiple projects focused on improving Claude Code and similar coding agents. The biggest bursts came from **openhuman** (+3,973 stars, a personal AI super intelligence), **academic-research-skills** (+3,164, research workflow for Claude Code), and **codegraph** (+1,850, local code knowledge graph). A strong undercurrent is the quest for persistent memory (**agentmemory**, **claude-mem**) and token reduction (**rtk**, **CLI-Anything**), reflecting a maturing need for production‑grade agent infrastructure. No major new LLM releases are visible in today’s data, but the ecosystem is clearly coalescing around agent skills, plugins, and memory layers.

---

## Top Projects by Category

### 🔧 AI Infrastructure
- **[rtk-ai/rtk](https://github.com/rtk-ai/rtk)** — ⭐0 (+704 today) — A Rust‑based CLI proxy that reduces LLM token consumption by 60–90% on common dev commands; zero‑dependency binary.
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — ⭐0 (+1,038 today) — Makes any software “agent‑native” by exposing CLIs that autonomous agents can invoke; published as CLI‑Hub.
- **[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)** — ⭐0 (+3,973 today) — A private, simple “personal AI super intelligence” built in Rust; aims to replace cloud‑based assistants.
- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐0 (+1,623 today) — An agentic skills framework and software development methodology designed for coding agents.
- **[Picovoice/picollm](https://github.com/Picovoice/picollm)** — ⭐311 total — On‑device LLM inference via X‑Bit quantization, suitable for embedded AI agents.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐80,503 total — High‑throughput LLM inference engine; a staple for agent serving.

### 🤖 AI Agents / Workflows
- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** — ⭐0 (+1,120 today) — A complete “AI agency” with specialist agents (frontend, Reddit, whimsy injector) driven by clear processes.
- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** — ⭐0 (+1,850 today) — Pre‑indexed code knowledge graph for agents (Claude Code, Codex, Cursor), reducing tokens and tool calls.
- **[rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)** — ⭐0 (+1,609 today) — “#1 persistent memory for AI coding agents” based on real‑world benchmarks; TypeScript.
- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** — ⭐0 (+171 today) — Anthropic‑managed directory of high‑quality Claude Code Plugins; signals official curation.
- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** — ⭐0 (+1,955 today) — A single `CLAUDE.md` file derived from Karpathy’s observations to improve Claude Code behavior.
- **[microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners)** — ⭐0 (+818 today) — 12‑lesson course on building AI agents; a strong entry‑level resource.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐158,142 total — Popular agent framework that “grows with you”, recently active.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — ⭐184,429 total — The pioneering autonomous agent project continues to be a reference.

### 📦 AI Applications
- **[Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** — ⭐0 (+3,164 today) — A Claude Code plugin for the academic research workflow (research → write → review → revise).
- **[HKUDS/ViMax](https://github.com/HKUDS/ViMax)** — ⭐0 (+503 today) — Agentic video generation: a single end‑to‑end pipeline with Director, Screenwriter, Producer, and Video Generator.
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** — ⭐0 (+563 today) — Free access to Claude Code via terminal, VSCode extension, or Discord; uses OpenClaw as backend.
- **[Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)** — ⭐27,200 total — “Runs anywhere, uses anything”; a cross‑platform Claude Code launcher.

### 🧠 LLMs / Training
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — ⭐50,229 total — Train a 64M‑parameter LLM from scratch in 2 hours; popular for education.
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — ⭐95,196 total — Step‑by‑step implementation of a ChatGPT‑like LLM in PyTorch.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — ⭐7,014 total — Comprehensive LLM evaluation platform supporting 100+ datasets.

### 🔍 RAG / Knowledge
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐76,874 total — Persistent context across sessions for any agent; compresses and injects relevant context.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐80,838 total — Leading open‑source RAG engine with agent capabilities.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐56,191 total — Universal memory layer for AI agents.
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** — ⭐49,705 total — Turn code, docs, images into a queryable knowledge graph for AI agents.
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — ⭐44,367 total — Scalable vector database for LLM‐powered search and RAG.

---

## Hot List Observations

**Dominance of agent‑centric infrastructure.** Over 70% of today’s trending AI repos are directly related to coding agents—plugins, memory systems, skill frameworks, and token optimizers. The ecosystem is moving beyond simple chat interfaces toward persistent, knowledge‑augmented agents that can work across sessions (**agentmemory**, **claude-mem**) and reduce API costs (**rtk**, **codegraph**).

**Emergence of “agent skills” as a formal pattern.** Projects like **superpowers**, **andrej-karpathy-skills**, and **academic-research-skills** treat agent behavior as modular, versioned skills defined in configuration (e.g., `CLAUDE.md`). This signals a shift from monolithic agent prompt engineering to composable, shareable skill packages.

**Token efficiency is now a first‑class concern.** With **rtk** and **CLI-Anything** both gaining hundreds of stars today, the community is actively seeking ways to lower LLM API costs—especially for developer‑facing agents that run repeatedly on the same codebase.

**No new model releases in trending.** The most active model‑related projects in the topic search are training tutorials (minimind, LLMs‑from‑scratch) rather than new proprietary or open‑weight releases. The energy is on how to *use* existing models more effectively.

---

## Community Hot Spots

- **Persistent memory for agents** – Projects like **rohitg00/agentmemory** and **thedotmack/claude-mem** are solving the “session reset” problem; worth watching if you build agent workflows.
- **Claude Code plugins / skills ecosystem** – The official **anthropics/claude-plugins-official** repo and the surge of community skills indicate a fast‑growing plugin market. Developers can contribute skills easily via `CLAUDE.md`.
- **Token‑saving proxies** – **rtk** and **CLI-Anything** are reshaping how agents interact with external tools by cutting token usage significantly; both are single‑binary and easy to adopt.
- **Free Claude Code access** – **free-claude-code** and **openclaude** are lowering the barrier for developers who want to experiment without a paid Anthropic account; expect more forks and spin‑offs.
- **Academic workflows meet agents** – **academic-research-skills** scored +3,164 stars today, showing strong demand for agent‑assisted research (literature review, writing, revision). This vertical is under‑served.