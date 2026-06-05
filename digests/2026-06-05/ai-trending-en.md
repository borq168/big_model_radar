# GitHub AI Trending Digest 2026-06-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-05 02:36 UTC

---

# GitHub AI Trending Digest — 2026-06-05

## 1. Today’s Hot List Brief

Today’s trending AI repos are dominated by **agent harnesses and agent infrastructure**, with three repos each surging over 1,700 stars: **headroom** (token compression for LLM contexts, +3,142), **hermes-agent** (a growing agent platform, +1,913), and **ECC** (an agent performance optimization system, +1,750). **Open-LLM-VTuber** (+581) and the **copy of NotebookLM called open-notebook** (+212) also attracted strong interest. Meanwhile, **NVIDIA/cosmos** (+133) stands out as a serious world‑model platform for physical AI. The list indicates a strong community focus on making agents smaller, faster, easier to build, and more interactive.

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- **[chopratejas/headroom](https://github.com/chopratejas/headroom)** ⭐0 (+3,142 today)
  A library, proxy, and MCP server that compresses tool outputs, logs, files, and RAG chunks before they reach the LLM – achieving 60‑95% fewer tokens with identical answers.
- **[github/copilot-sdk](https://github.com/github/copilot-sdk)** ⭐0 (+38 today)
  Multi‑platform SDK for integrating GitHub Copilot Agent into apps and services. Official tooling from GitHub.
- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** ⭐79,941 (+141 today)
  Lightweight OCR toolkit that turns PDFs and images into structured data for LLMs; supports 100+ languages and is widely used as a document ingestion layer.
- **[openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node)** ⭐0 (+411 today)
  Companion suite for OpenClaw (the open‑source agent harness), including a system tray app, shared library, Node integration, and PowerToys Command Palette extension.

### 🤖 AI Agents / Workflows
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐181,138 (+1,913 today)
  “The agent that grows with you” – a rapidly evolving agent framework with strong community adoption.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐207,342 (+1,750 today)
  An agent harness performance optimization system with skills, instincts, memory, and security, designed for Claude Code, Codex, Cursor, and other coding agents.
- **[Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)** ⭐0 (+581 today)
  Hands‑free voice interaction with any LLM, supports voice interruption and Live2D avatars – all running locally.
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** ⭐0 (+199 today)
  An AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web, then synthesises a grounded summary.

### 📦 AI Applications
- **[lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)** ⭐0 (+212 today)
  An open‑source implementation of Notebook LM with additional flexibility and features – note‑taking and research assistant powered by LLMs.
- **[NVIDIA/cosmos](https://github.com/NVIDIA/cosmos)** ⭐0 (+133 today)
  Open platform of world models, datasets, and tools for building physical AI – robotics, autonomous vehicles, smart infrastructure.
- **[Open-LLM-VTuber/Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber)** (also listed above)
  Cross‑platform VTuber / voice assistant application.

### 🧠 LLMs / Training
*(No repo from today’s trending list falls into this category, but the broader topic data highlights several active projects.)*
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐51,141 – Train a 64M‑parameter LLM from scratch in ~2 hours.
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐96,664 – Step‑by‑step PyTorch implementation of a ChatGPT‑like model.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐81,955 – High‑throughput LLM inference and serving engine.

### 🔍 RAG / Knowledge
- **[chopratejas/headroom](https://github.com/chopratejas/headroom)** (also infrastructure) – Token compression directly benefits RAG pipelines.
- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** (also infrastructure) – Document‑to‑structured‑data bridge for RAG.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐81,933 – Leading open‑source RAG engine with agent capabilities.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐57,731 – Universal memory layer for AI agents, enabling persistent context.

## 3. Hot List Observations

Today’s trending distribution is heavily skewed toward **AI agents and the tools that build/support them**. Of the 11 AI‑relevant trending repos, at least seven are directly agent‑related (hermes‑agent, ECC, headroom, copilot‑sdk, openclaw‑windows‑node, Open‑LLM‑VTuber, last30days‑skill). This reflects a community that is actively moving from “talking to LLMs” to “deploying autonomous agents” – and simultaneously needing better infrastructure for context management, voice interaction, and skill composition.

A notable new pattern is the emergence of **“agent harness”** systems: ECC and hermes‑agent (and by extension OpenClaw) position themselves as the operating system for coding agents like Claude Code and Codex. The high star counts suggest strong developer interest in standardising how agents are configured, secured, and extended.

**headroom** is an unusual project – token compression has been a niche optimisation, but its sheer star volume today (+3,142) indicates that reducing LLM context cost is now a mainstream pain point. **PaddleOCR**’s continued popularity (+141 today, 79k total) shows that document parsing remains a critical bottleneck for enterprise AI adoption.

**NVIDIA/cosmos** is the only large‑scale physical AI entry, signalling a distinct sub‑community focused on world models and robotics. Its modest daily gain (+133) compared to agent tools suggests the physical AI space is still more research‑oriented, while agent tools are experiencing a rapid product‑driven growth.

## 4. Community Hot Spots

- **Agent harnesses (ECC, hermes‑agent, OpenClaw)** – The race to become the standard environment for code‑centric agents is heating up. ECC’s “skills, instincts, memory, security” approach and hermes‑agent’s “grows with you” philosophy are attracting rapid adoption.
- **Token compression for LLM contexts (headroom)** – A new category of tool that addresses the “context window cost” problem. Expect more projects providing proxy‑based or library‑level compression for RAG, logs, and tool outputs.
- **Voice & multimodal agents (Open‑LLM‑VTuber)** – Voice interaction with LLMs is moving from demo to product. Open‑LLM‑VTuber’s cross‑platform local deployment is a sign of increasing demand for real‑time speech + avatar experiences.
- **NotebookLM clones (open‑notebook)** – Google’s NotebookLM has created a template for AI‑augmented note‑taking. Open‑source replicas are gaining traction, especially those offering customisation and privacy.
- **Agent skill ecosystems (last30days‑skill, shareAI-lab/learn-claude-code)** – The idea of reusable, swappable skills for agents (research, coding, job search) is becoming a distinct development direction, with several repositories providing pre‑built examples.