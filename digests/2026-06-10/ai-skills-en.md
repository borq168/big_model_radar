# Skills Ecosystem Highlights 2026-06-10

> Generated: 2026-06-10 02:36 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-10

Data source: github.com/anthropics/skills (50 PRs, 50 Issues, snapshot as of 2026-06-10).

---

## 1. Top Skills Ranking

The following represent the most-discussed Skill submissions (by comment activity) currently open in the repository. Functional descriptions are drawn from PR summaries.

### 1.1 `document-typography` — Typographic quality control for generated documents
**PR #514** ([link](https://github.com/anthropics/skills/pull/514)) — opened 2026-03-04
Aims to prevent common typographic problems in AI‑generated documents: orphan word wrap (1–6 words spilling to next line), widow paragraphs, and numbering misalignment. The author argues these affect every generated document and are rarely requested by users.
**Status:** Open, last updated 2026-03-13.

### 1.2 `odt` — OpenDocument text creation, template filling, and ODT→HTML conversion
**PR #486** ([link](https://github.com/anthropics/skills/pull/486)) — opened 2026-03-01
Teaches Claude to create, fill, read, and convert `.odt` / `.ods` files. Triggers on mentions of “OpenDocument”, “LibreOffice”, or ISO‑standard document formats.
**Status:** Open, last updated 2026-04-14.

### 1.3 `skill-quality-analyzer` + `skill-security-analyzer` — Meta skills for quality and security audit
**PR #83** ([link](https://github.com/anthropics/skills/pull/83)) — opened 2025-11-06
Two meta‑skills: the quality analyzer evaluates Structure & Documentation (20%), Completeness, Correctness, Performance, and Robustness; the security analyzer checks for common vulnerabilities. Both are proposed as example marketplace skills.
**Status:** Open, last updated 2026-01-07.

### 1.4 `SAP-RPT-1-OSS` — Predictive analytics using SAP’s tabular foundation model
**PR #181** ([link](https://github.com/anthropics/skills/pull/181)) — opened 2025-12-28
Adds a skill to use SAP’s open‑source (Apache 2.0) tabular foundation model released at SAP TechEd 2025. Enables predictive analytics on SAP business data directly from Claude.
**Status:** Open, last updated 2026-03-16.

### 1.5 `agent-creator` — Meta‑skill for task‑specific agent sets (with stability fixes)
**PR #1140** ([link](https://github.com/anthropics/skills/pull/1140)) — opened 2026-05-15
Addresses Issue #1120 by adding an `agent‑creator` meta‑skill, fixing multi‑tool evaluation in `evaluation.py`, and adding Windows support for `recalc.py`.
**Status:** Open, last updated 2026-06-02.

### 1.6 `testing-patterns` — Comprehensive testing stack skill
**PR #723** ([link](https://github.com/anthropics/skills/pull/723)) — opened 2026-03-22
Covers testing philosophy (Trophy model), unit testing (AAA pattern, test naming), React component testing (Testing Library), mocking strategies, E2E with Playwright, and performance testing.
**Status:** Open, last updated 2026-04-21.

### 1.7 `masonry-generate-image-and-videos` — Image & video generation via Masonry CLI
**PR #335** ([link](https://github.com/anthropics/skills/pull/335)) — opened 2026-02-04
Enables AI‑powered image (Imagen 3.0) and video (Veo 3.1) generation from text prompts, including job management (status, download, history).
**Status:** Open, last updated 2026-03-14.

### 1.8 `n8n-builder` + `n8n-debugger` — Community skills for n8n workflow automation
**PR #190** ([link](https://github.com/anthropics/skills/pull/190)) — opened 2025-12-31
Adds four production‑tested skills: `faf-expert` (Foundational AI‑context Format), `n8n-builder` (building n8n workflows from scratch), `n8n-debugger` (debugging and fixing workflows), and `n8n-documenter` (documenting workflows).
**Status:** Open, last updated 2026-05-18.

---

## 2. Community Demand Clusters

Several Issue categories recur across the data. Grouped by theme:

### 2.1 Developer Tooling & Workflow Bugs
Multiple Issues report that the skill‑evaluation tooling (`run_eval.py`, `improve_description.py`) is unreliable.
- **#556** ([link](https://github.com/anthropics/skills/issues/556)): `claude -p` never triggers skills — 0% trigger rate across all queries.
- **#1169** ([link](https://github.com/anthropics/skills/issues/1169)): skill‑creator loop returns recall=0% on every iteration, even for literal slash‑command queries.
- **#202** ([link](https://github.com/anthropics/skills/issues/202)): skill‑creator reads like developer documentation rather than an operational skill, reducing token efficiency.
- **#1220** ([link](https://github.com/anthropics/skills/issues/1220)): Request for multi‑file preload/inline bundling for skill reference files (currently only `SKILL.md` is delivered).

These indicate friction in the skill‑creation and validation workflow.

### 2.2 Distribution, Trust & Sharing
Community members are raising concerns about how skills are distributed and verified.
- **#228** ([link](https://github.com/anthropics/skills/issues/228)): Request for org‑wide skill sharing (currently requires manual `.skill` file sharing).
- **#492** ([link](https://github.com/anthropics/skills/issues/492)): Security risk from community skills distributed under the `anthropic/` namespace — trust boundary abuse.
- **#189** ([link](https://github.com/anthropics/skills/issues/189)): `document-skills` and `example-skills` plugins install identical content, causing duplicate skills.
- **#184** ([link](https://github.com/anthropics/skills/issues/184)): `agentskills.io` page gives “too many redirects” error.

Two distinct sub‑themes: (a) better internal sharing mechanisms, (b) improved trust and deduplication in the public repository.

### 2.3 Security & Governance Patterns
Demand for skills that enforce safety and compliance.
- **#412** ([link](https://github.com/anthropics/skills/issues/412)): Proposal for an `agent-governance` skill covering policy enforcement, threat detection, trust scoring, and audit trails.
- **#1175** ([link](https://github.com/anthropics/skills/issues/1175)): Security and context‑window concerns when handling SharePoint Online documents via skills — user wants to embed access control logic inside `SKILL.md`.

These point to a need for structured security patterns within the skill ecosystem.

### 2.4 Platform Integration
- **#29** ([link](https://github.com/anthropics/skills/issues/29)): How to use skills with AWS Bedrock?
- **#16** ([link](https://github.com/anthropics/skills/issues/16)): Expose Skills as MCPs for external API consumption.

Both remain unresolved.

---

## 3. Active Pending Skills

The following open PRs for new skills have seen recent activity or updates. Discussion highlights are inferred from commit summaries and status changes.

### `servicenow` — Broad ServiceNow platform skill
**PR #568** ([link](https://github.com/anthropics/skills/pull/568)) — last updated 2026-04-23
Covers ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub. The author designed it as a platform assistant rather than a narrow scripting helper.