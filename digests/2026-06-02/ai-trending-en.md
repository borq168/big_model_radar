# GitHub AI Trending Digest 2026-06-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-02 02:45 UTC

---

# GitHub AI Trending Digest – 2026-06-02

## 1. Today’s Hot List Brief
The AI‑focused trending list is dominated by **AI Agents** and **LLM training/inference tools**, with **MoneyPrinterTurbo** (AI video generation) and **microsoft/markitdown** (file‑to‑Markdown conversion) earning the highest daily star counts (+3,375 and +3,034, respectively). Two new agent‑centric projects – **hermes-webui** and **revfactory/harness** – saw strong interest alongside **VoxCPM** (multilingual TTS) and **train-llm-from-scratch** (hands‑on LLM training guide). Several infrastructure and agent‑oriented plugins (e.g., compound‑engineering‑plugin, oh‑my‑pi) round out a list that leans toward practical, build‑it‑yourself AI tooling.

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- **[microsoft/markitdown](https://github.com/microsoft/markitdown)** ⭐0 (today +3,034)
  Python tool that converts files and office documents to Markdown – widely applicable for preprocessing data for AI pipelines.
- **[EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)** ⭐0 (today +417)
  Official plugin for Claude Code, Codex, Cursor, etc. that provides pre‑built agent skills and engineering workflows.
- **[pbakaus/impeccable](https://github.com/pbakaus/impeccable)** ⭐0 (today +485)
  A design language / UI framework tailored to making AI agents more capable at visual tasks.

### 🤖 AI Agents / Workflows
- **[nesquena/hermes-webui](https://github.com/nesquena/hermes-webui)** ⭐0 (today +945)
  Web UI for running Hermes Agent from a browser or mobile – lowers the barrier to using agentic workflows.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐0 (today +299)
  Multi‑agent LLM framework for financial trading; already a significant topic‑search star (81,835).
- **[revfactory/harness](https://github.com/revfactory/harness)** ⭐0 (today +524)
  A “meta‑skill” that designs domain‑specific agent teams and generates the skills they use, targeting automation.
- **[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)** ⭐0 (today +335)
  Terminal‑based AI coding agent with hash‑anchored edits, LSP support, and sub‑agent orchestration.

### 📦 AI Applications
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐0 (today +3,375)
  One‑click short video generation using AI LLMs – the most starred project today.
- **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** ⭐0 (today +888)
  Tokenizer‑free TTS model for multilingual speech, voice cloning, and creative voice design.
- **[stefan-jansen/machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading)** ⭐0 (today +93)
  Code companion to the book “Machine Learning for Algorithmic Trading” – a practical ML‑for‑finance resource.

### 🧠 LLMs / Training
- **[p-e-w/heretic](https://github.com/p-e-w/heretic)** ⭐0 (today +249)
  Fully automatic censorship removal for language models – a controversial but popular utility.
- **[FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)** ⭐0 (today +861)
  Straightforward guide and code for training a small LLM from data download to text generation.

### 🔍 RAG / Knowledge
- **[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)** ⭐0 (today +647)
  Fast, scalable memory engine and app designed as a memory API for the AI era – fits the RAG/memory layer category.

## 3. Hot List Observations
- **Agent‑first mindset dominates:** Over half of today’s AI trending repos are directly about building, hosting, or orchestrating AI agents (hermes‑webui, TradingAgents, harness, oh‑my‑pi, compound‑engineering‑plugin). This aligns with the broader ecosystem shift toward agentic workflows.
- **Practical tooling and tutorials remain strong:** MoneyPrinterTurbo and train‑llm‑from‑scratch are both highly actionable—one generates videos, the other teaches LLM training. Their star counts reflect a demand for “do it yourself” AI.
- **Censorship and uncensoring are a niche but active topic:** heretic’s +249 stars suggest continued developer interest in unfiltered model access, even if it remains a fringe area.
- **RAG / memory entries are sparse on the trending list** (only supermemory), while the topic search reveals a huge backlog (mem0, LightRAG, RAGflow, etc.). This indicates that the RAG category is more established and not currently seeing a sudden spike in new projects.
- **Notable non‑AI trending projects** (Scrapling, godot, fff, build‑your‑own‑x) were excluded; their popularity highlights that today’s overall GitHub trending is not exclusively AI.

## 4. Community Hot Spots
- **Hermes Agent ecosystem:** With both **hermes-webui** and the underlying **NousResearch/hermes-agent** appearing across trending and topic search, the Hermes agent is gaining a user‑friendly interface. Developers should watch its plugin model and UI patterns.
- **Multi‑agent trading frameworks:** **TradingAgents** is already a topic‑search star (81,835 total) and its trending entry (+299) confirms sustained interest in LLM‑powered financial automation.
- **Local LLM fine‑tuning guides:** **train-llm-from-scratch** (+861) and **MiniMind** (50,971 total) show a strong appetite for accessible, small‑scale LLM training – a potential entry point for many newcomers.
- **Agent memory layers:** **supermemory** and the much‑starred **mem0** (57,339 total) demonstrate that persistent, session‑aware memory for agents is a hot topic; developers building agent apps should evaluate these lightweight memory solutions.
- **Plugin ecosystems for Claude Code/Codex:** The **compound-engineering-plugin** (+417) is part of a growing trend of vendor‑agnostic agent skill plugins – expect more such templates and integrations to appear.