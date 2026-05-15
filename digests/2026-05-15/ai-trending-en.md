# GitHub AI Trending Digest 2026-05-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-15 02:15 UTC

---

# GitHub AI Trending Digest — 2026-05-15

## Today's Hot List Brief

Today’s trending AI repositories are dominated by **agent skill frameworks and persistent memory systems**. `tinyhumansai/openhuman` leads with +3,329 stars — a privacy-focused “personal AI super intelligence.” `rohitg00/agentmemory` (+1,879) and `mattpocock/skills` (+2,987) both address memory and skill infrastructure for coding agents. Financial AI appears with `shiyu-coder/Kronos` (+363), while edge inference sees `supertone-inc/supertonic` (+1,128) for on-device multilingual TTS. The list also includes a novel sensor-use case: `ruvnet/RuView` (+1,715) for WiFi-based spatial sensing without video.

*(Note: repos starred ≠0 in the raw data reflect the snapshot; actual totals may differ.)*

## Top Projects by Category

### 🔧 AI Infrastructure (SDKs, inference engines, dev tools, CLI)

- [ollama/ollama](https://github.com/ollama/ollama) ⭐171,410 — On‑device LLM runner supporting Kimi‑K2.5, DeepSeek, Qwen, and more.
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐160,623 — The go‑to model‑definition framework for text, vision, audio, and multimodal models.
- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐80,027 — High‑throughput, memory‑efficient LLM inference and serving engine.
- [picovoice/picollm](https://github.com/Picovoice/picollm) ⭐312 — On‑device LLM inference with X‑bit quantization (trending topic).
- [Rust-based rig](https://github.com/0xPlaygrounds/rig) [topic:llm-model] ⭐7,278 — Modular LLM application framework in Rust.

### 🤖 AI Agents / Workflows

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐184,306 — Pioneering accessible autonomous agent platform.
- [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) ⭐73,558 — AI‑driven development assistant that autonomously writes code.
- [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) ⭐182,299 — Agent harness with skills, instincts, memory, and security for Claude Code / Codex / Cursor.
- [obra/superpowers](https://github.com/obra/superpowers) ⭐0 (+1,780 today) — Agentic skills framework and software development methodology.
- [activepieces/activepieces](https://github.com/activepieces/activepieces) ⭐22,190 — AI agents & MCPs for workflow automation, with ~400 MCP servers.
- [HKUDS/nanobot](https://github.com/HKUDS/nanobot) ⭐42,472 — Ultra‑lightweight personal AI agent.

### 📦 AI Applications (vertical solutions, end‑user tools)

- [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) ⭐0 (+3,329 today) — Private, personal AI “super intelligence” running on‑device.
- [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) ⭐0 (+363 today) — Foundation model for financial markets language.
- [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) ⭐0 (+1,128 today) — Lightning‑fast, on‑device multilingual TTS (ONNX native).
- [ruvnet/RuView](https://github.com/ruvnet/RuView) ⭐0 (+1,715 today) — Real‑time spatial intelligence and vital sign monitoring via commodity WiFi.
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐45,670 — AI productivity studio with smart chat, autonomous agents, and 300+ assistants.

### 🧠 LLMs / Training

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐94,773 — Step‑by‑step implementation of a ChatGPT‑like LLM in PyTorch.
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐150,479 — The agent that grows with you — open‑source LLM agent.
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐6,992 — LLM evaluation platform supporting 100+ datasets and models.
- [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) ⭐229 — Minimal library for pretraining foundation and world models.
- [RainBowLuoCS/OpenOmni](https://github.com/RainBowLuoCS/OpenOmni) ⭐140 — Official implementation of (NIPS 2025) open‑source omnimodal LLM.

### 🔍 RAG / Knowledge

- [langgenius/dify](https://github.com/langgenius/dify) ⭐141,401 — Production‑ready platform for agentic workflow development with RAG.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐80,518 — Leading RAG engine merging retrieval, agent capabilities, and context layer for LLMs.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐55,732 — Universal memory layer for AI agents.
- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) ⭐31,323 — Reasoning‑based RAG without traditional vector indices.
- [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) [topic:vector-db] ⭐10,998 — [MLsys2026] RAG on everything with 97% storage savings while preserving privacy.
- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐44,296 — High‑performance cloud‑native vector database for scalable ANN search.

## Hot List Observations

The **agent skill / memory** category dominates both the Trending list and Topic Search results. Repos like `agentmemory`, `skills`, `superpowers`, and `scientific-agent-skills` all target the same gap: giving coding agents (Claude Code, Codex, etc.) persistent, context-rich skill sets. Meanwhile, `openhuman` and `RuView` represent two contrasting edges — one brings general personal AI, the other brings novel sensor‑based AI.

The **financial AI** area sees two entries: `Kronos` (foundation model for finance) and `TauricResearch/TradingAgents` (multi‑agent trading framework), both in today’s data. This suggests a small but real interest in LLM‑driven financial analysis.

**On‑device inference** continues to bubble: `supertone` (iOS/on‑device TTS), `picollm`, and `ollama` all reinforce the push toward local AI. Notably, `supertone`’s native ONNX approach gained +1,128 stars today.

The **RAG / vector DB** landscape remains crowded, with no single new breakthrough in today’s data — established projects (Dify, RAGFlow, Milvus) continue to accumulate stars steadily.

## Community Hot Spots

- **`agentmemory` and `skills`** — The race to standardize persistent memory and reusable skills for AI coding agents is accelerating. These repos directly respond to developers’ frustration with context‑window limits and tool drift.
- **`openhuman`** — A privacy‑focused “super intelligence” that runs locally. The high star count signals strong demand for an alternative to cloud‑dependent personal AI.
- **`supertone/supertonic`** — On‑device TTS that is fast and multilingual. Its native ONNX runtime makes it practical for edge deployment — a growing interest area.
- **`shiyu-coder/Kronos`** — A foundation model for financial language. This vertical LLM could influence how domain‑specific models are built, especially in highly regulated sectors.
- **`NVIDIA-AI-Blueprints/video-search-and-summarization`** — A reference architecture for GPU‑accelerated vision agents. As video content explodes, such blueprints lower the barrier for real‑time video summarization.