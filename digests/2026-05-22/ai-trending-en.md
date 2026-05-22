# GitHub AI Trending Digest 2026-05-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-22 02:33 UTC

---

# GitHub AI Trending Digest – 2026-05-22

## Today's Hot List Brief
Today’s GitHub AI trending is dominated by agent infrastructure and skill-based tooling. **codegraph** (+4,294 stars) leads with its pre-indexed code knowledge graph for AI coding agents, followed by **andrej-karpathy-skills** (+2,614) and **academic-research-skills** (+2,579) – both single-file skill configurations that directly influence Claude Code behavior. The theme of “making agents smarter with structured skills” is reinforced by **superpowers**, **CLI-Anything**, and **Understand-Anything**, each of which applies agent-friendly abstractions to development workflows. Meanwhile, multi-agent orchestration platforms (**multica**, **agency-agents**) and a new Chrome DevTools MCP server suggest the ecosystem is rapidly standardising interfaces for agent-tool communication.

## Top Projects by Category

### 🔧 AI Infrastructure
- **[codegraph](https://github.com/colbymchenry/codegraph)** — TypeScript ⭐0 (+4,294 today)
  Pre-indexed code knowledge graph for Claude Code, Codex, Cursor, OpenCode – reduces token usage and tool calls while keeping 100% local.

- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** — Python ⭐0 (+682 today)
  Anthropic’s official directory of high‑quality Claude Code Plugins, now open for community contributions.

- **[andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** — ⭐0 (+2,614 today)
  A single `CLAUDE.md` derived from Karpathy’s observations on LLM coding pitfalls – modifies Claude Code behaviour without custom code.

- **[dotnet/skills](https://github.com/dotnet/skills)** — C# ⭐0 (+129 today)
  Repository of skills to assist AI coding agents with .NET and C# – first‑party Microsoft investment in agent skill standards.

- **[CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — Python ⭐0 (+656 today)
  “Making ALL Software Agent‑Native” – generates CLI interfaces for any application, enabling AI agents to interact without custom APIs.

- **[chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — TypeScript ⭐0 (+151 today)
  Official Chrome DevTools MCP server – gives coding agents direct access to browser dev tools via Model Context Protocol.

- **[Understand-Anything](https://github.com/Lum1104/Understand-Anything)** — TypeScript ⭐0 (+666 today)
  Turns any codebase into an interactive, queryable knowledge graph – works with Claude Code, Codex, Copilot, Gemini CLI, and more.

### 🤖 AI Agents / Workflows
- **[superpowers](https://github.com/obra/superpowers)** — Shell ⭐0 (+1,576 today)
  Agentic skills framework and software development methodology – provides a structured approach to building and reusing agent capabilities.

- **[oh-my-pi](https://github.com/can1357/oh-my-pi)** — TypeScript ⭐0 (+500 today)
  Terminal‑based AI coding agent with hash‑anchored edits, LSP integration, browser, subagents, and Python support.

- **[forge](https://github.com/antoinezambelli/forge)** — Python ⭐0 (+398 today)
  Python framework for self‑hosted LLM tool‑calling and multi‑step agentic workflows – emphasises local control and extensibility.

- **[multica](https://github.com/multica-ai/multica)** — Go ⭐0 (+534 today)
  Open‑source managed agents platform – assign tasks, track progress, and compound skills across coding agents as a team.

- **[agency-agents](https://github.com/msitarzewski/agency-agents)** — Shell ⭐0 (+1,018 today)
  A complete AI agency packaged as agents – from frontend wizards to Reddit ninjas, each with specialised skills and deliverables.

### 📦 AI Applications
- **[academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** — Python ⭐0 (+2,579 today)
  Academic research skills for Claude Code – supports full lifecycle from literature research through writing, review, and finalisation.

- **[notebooklm-py](https://github.com/teng-lin/notebooklm-py)** — Python ⭐0 (+186 today)
  Unofficial Python API & agentic skill for Google NotebookLM – exposes features the web UI hides, usable via CLI or AI agents.

- **[ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** — Python ⭐0 (+1,333 today)
  Learning resource that teaches building and shipping AI systems – practical, code‑first approach gaining rapid traction.

### 🧠 LLMs / Training
*(No trending repo today focuses on training; notable high‑star projects from the broader topic search include:)*

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — Jupyter Not. ⭐95,360 (topic search) – step‑by‑step ChatGPT‑like LLM implementation in PyTorch.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — Python ⭐50,352 (topic search) – train a 64M‑parameter LLM from scratch in 2 hours.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — Python ⭐80,677 (topic search) – high‑throughput inference engine for LLMs.

### 🔍 RAG / Knowledge
- **[claude-mem](https://github.com/thedotmack/claude-mem)** — TypeScript ⭐77,296 (topic search) – persistent cross‑session memory for every agent; compresses session history and injects relevant context.
- **[ragflow](https://github.com/infiniflow/ragflow)** — Python ⭐81,009 (topic search) – RAG engine with agent capabilities for superior context layer.
- **[graphify](https://github.com/safishamsi/graphify)** — Python ⭐50,822 (topic search) – turn code/doc folders into queryable knowledge graphs for AI coding agents.

## Hot List Observations
Today’s trending list is heavily skewed toward **agent infrastructure and skill tooling** – 12 of the 19 repos fall into this category. The rise of “skills” as single‑file, plug‑and‑play configurations (e.g., `andrej-karpathy-skills`, `dotnet/skills`, `academic-research-skills`) indicates a community drive to standardise how agents acquire domain‑specific behaviours without altering core models. **codegraph** and **Understand-Anything** represent another notable direction: real‑time code knowledge graphs that reduce token consumption and improve agent accuracy. Multi‑agent platforms (**multica**, **agency-agents**) are also seeing strong adoption, suggesting a shift from single‑agent assistants to coordinated agent teams. The **Chrome DevTools MCP** and **CLI-Anything** projects further the “agent‑native” philosophy, turning existing applications into first‑class interaction surfaces for LLM‑based coding agents. No major new LLM releases or training‑focused repos appear in today’s trending data; the ecosystem’s centre of gravity is currently around **agent integration and usability**.

## Community Hot Spots
- **codegraph** — its pre‑indexed knowledge graph approach directly addresses the token budget problem for large codebases, making it a strong candidate for everyday agent workflows.
- **andrej-karpathy-skills** — demonstrates how a single configuration file can meaningfully improve agent output, lowering the barrier for developers to customise Claude Code.
- **CLI-Anything** — “agent‑nativising” all software is a bold vision; if adopted widely, it could reduce the need for custom tool integrations.
- **multica** — turning coding agents into “teammates” with task tracking and skill compounding may appeal to teams looking to operationalise AI agents beyond one‑off tasks.
- **academic-research-skills** — domain‑specific skills are a growing pattern; this repo shows how agent behaviour can be tailored to rigorous academic workflows, opening up new use cases for researchers.