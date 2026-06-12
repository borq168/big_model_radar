# GitHub AI Trending Digest 2026-06-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-12 02:42 UTC

---

# GitHub AI Trending Digest — 2026-06-12

## Today's Hot List Brief

Today's trending data shows a strong surge in **AI agent skill ecosystems** and **agent security tooling**, with three of the top four trending repos by new stars directly addressing agent skill marketplaces, skill-based development methodologies, and vulnerability scanning for agent skills. The rise of `addyosmani/agent-skills` (3,278 new stars) and `obra/superpowers` (1,322 new stars) signals growing developer interest in structured, production-grade skill libraries for coding agents. Notably, `NVIDIA/SkillSpector` (319 new stars) introduces a dedicated security layer for agent skills, suggesting the ecosystem is maturing beyond pure functionality toward safety and governance. Meanwhile, `hexo-ai/sia` (199 new stars) brings a "self-improving AI" paradigm that could reshape how agents optimize performance on benchmarks without human intervention.

---

## Top Projects by Category

### 🔧 AI Infrastructure

- **[hexo-ai/sia](https://github.com/hexo-ai/sia)** — ⭐ new (+199 today) — A self-improving AI framework that autonomously improves any AI system's performance on benchmark tasks, representing a novel paradigm in model/agent optimization without human retuning.
- **[apple/container](https://github.com/apple/container)** — ⭐ new (+2,430 today) — A Swift-native tool for running Linux containers via lightweight VMs on Mac; relevant to AI infra as it provides isolated environments for AI agent sandboxing and reproducible ML workloads.
- **[soxoj/maigret](https://github.com/soxoj/maigret)** — ⭐ new (+661 today) — A powerful OSINT tool that collects dossiers from 3,000+ sites by username; emerging as critical infrastructure for AI agents needing real-time web intelligence gathering.
- **[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)** — ⭐ new (+368 today) — A comprehensive collection of system prompts, internal tools, and AI models from 25+ AI coding tools—valuable reference for understanding how AI agents are orchestrated behind the scenes.

### 🤖 AI Agents / Workflows

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — ⭐ new (+3,278 today) — Today's top trending AI repo: production-grade engineering skills for AI coding agents, providing reusable, tested skill modules for tasks like debugging, refactoring, and deployment.
- **[phuryn/pm-skills](https://github.com/phuryn/pm-skills)** — ⭐ new (+1,978 today) — A PM Skills Marketplace with 100+ agentic skills covering product management workflows—from discovery to launch—targeting AI-augmented product development.
- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** — ⭐ new (+1,599 today) — A complete AI agency skill framework with specialized agents for frontend, Reddit engagement, "whimsy injection," and deliverables—an unusual but fast-growing take on multi-agent productivity.
- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐ new (+1,322 today) — An agentic skills framework and software development methodology that combines skill modules with structured development practices; notable for attempting to standardize how agents collaborate on complex projects.
- **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** — ⭐ new (+319 today) — Security scanner purpose-built for AI agent skills, detecting vulnerabilities, malicious patterns, and security risks—an early mover in the emerging "agent security" category.
- **[kenn-io/agentsview](https://github.com/kenn-io/agentsview)** — ⭐ new (+114 today) — Local-first session analytics for coding agents (Claude Code, Codex, 20+ others); positions itself as a 100x faster alternative to cusage, addressing the growing need for agent observability.

### 📦 AI Applications

- **[maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed)** — ⭐ new (+426 today) — Open-source healthcare AI; represents continued interest in domain-specific open-source AI applications for the medical/clinical vertical.
- **[alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill)** — ⭐ new (+89 today) — A "cognitive operating system" skill for Chinese education/career planning (college admissions, graduate exams, career strategy) built on the "Nüwa.skill" framework—interesting regional AI skill productization.
- **[refactoringhq/tolaria](https://github.com/refactoringhq/tolaria)** — ⭐ new (+604 today) — Desktop app for managing Markdown knowledge bases; sits at the intersection of personal knowledge management and AI-augmented workflows.

### 🧠 LLMs / Training

*(No new LLM training repo appeared in today's trending list beyond the data above; established repos like `langchain-ai/langchain`, `ollama/ollama`, `huggingface/transformers` remain dominant in the Topic Search results.)*

### 🔍 RAG / Knowledge

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐ 81,855 (topic:rag) — Persistent context across agent sessions: captures session activity, compresses it with AI, and injects relevant context into future sessions—addressing the fragmentation problem in multi-session agent workflows.
- **[safishamsi/graphify](https://github.com/safishamsi/graphify)** — ⭐ 65,721 (topic:rag) — Turns any code folder, schema, docs, or media into a queryable knowledge graph; gains traction as an "everything-in-one-graph" approach for RAG over mixed code/documentation/data assets.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐ 58,368 (topic:rag) — Universal memory layer for AI agents; continues to be a foundational building block for persistent, long-term agent memory across sessions and tools.

---

## Hot List Observations

**Dominant category: AI Agent Skills and Skill Marketplaces.** The top three trending AI repos (by new stars) and two others in the top ten all focus on creating, selling, or securing agent "skills" (`agent-skills`, `pm-skills`, `agency-agents`, `superpowers`, `SkillSpector`). This clustering suggests the community is actively building the **"app store" layer for AI agents**—structured, reusable, composable skill modules rather than monolithic agent code.

**Emerging sub-category: Agent Security.** NVIDIA's SkillSpector is the first security scanner specifically for agent skills. Its appearance alongside the broader skill explosion indicates that as skills proliferate, concerns about supply-chain security, malicious skill injection, and vulnerability management are already driving tooling responses.

**Notable newcomers: self-improving AI and session analytics.** `hexo-ai/sia` (self-improving AI framework) and `kenn-io/agentsview` (agent session analytics) represent two novel directions—one focused on autonomous performance optimization, the other on observability and debugging of agent behavior. These signal maturation beyond "making agents work" toward "making agents work better".

**Regional specialization visible.** The presence of `zhangxuefeng-skill` (Chinese education career planning) and the prominence of Chinese-language comment sections in related repos suggest that skill marketplaces are regionalizing early, with localized content markets emerging faster than anticipated.

---

## Community Hot Spots

- **AI Agent Skill Frameworks**: `addyosmani/agent-skills`, `obra/superpowers`, and `msitarzewski/agency-agents` are defining new patterns for how agents access and execute specialized capabilities. Developers working on agent architectures should evaluate these for standardization potential.
- **Agent Security Scanning**: `NVIDIA/SkillSpector` is likely to become a prerequisite in any skill marketplace; its approach to detecting malicious patterns in agent skills is worth following as the ecosystem scales.
- **Self-Improving AI Systems**: `hexo-ai/sia` represents a paradigm shift from "train once, deploy" to continuous autonomous improvement. Worth attention for any team building benchmark-driven agent pipelines.
- **Local Healthcare AI**: `maziyarpanahi/openmed` points to growing demand for open-source, privacy-preserving medical AI assistants, a space that remains underserved by commercial offerings.
- **RAG + Persistent Memory**: `thedotmack/claude-mem` and `mem0ai/mem0` together represent the two leading approaches to solving the "session isolation" problem in agents—compression-based vs. structured memory storage. Both are essential for building agents with true long-term utility.