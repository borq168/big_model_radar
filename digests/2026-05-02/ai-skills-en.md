# Skills Ecosystem Highlights 2026-05-02

> Generated: 2026-05-02 01:57 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>The user wants me to analyze the provided GitHub data from the anthropics/skills repository and generate a skills community highlights report. Let me parse through the data carefully.

From the PRs (Pull Requests), I need to identify the most-discussed skills. The PRs are sorted by comments, but all show "undefined" for comments. Let me look at other indicators - the PR numbers seem to correlate with recency (higher numbers = more recent). Let me identify the top skills based on the data provided.

Looking at the PRs:
1. #514 - document-typography skill (typographic quality control)
2. #538 - fix(pdf): case-sensitive file references
3. #83 - skill-quality-analyzer and skill-security-analyzer
4. #210 - Improve frontend-design skill
5. #486 - ODT skill (OpenDocument)
6. #539 - fix(skill-creator): YAML special characters
7. #541 - fix(docx): tracked change w:id collision
8. #509 - docs: add CONTRIBUTING.md
9. #95 - comprehensive system documentation
10. #181 - SAP-RPT-1-OSS predictor skill
11. #723 - testing-patterns skill
12. #335 - masonry-generate-image-and-videos skill
13. #806 - sensory skill (AppleScript/macOS automation)
14. #54 - docs improvement
15. #154 - shodh-memory skill
16. #147 - codebase-inventory-audit skill
17. #568 - ServiceNow platform skill
18. #666 - Remove duplicate skill-creator skill
19. #664 - claude-obsidian-reporter skill
20. #616 - HADS skill (Human-AI Document Standard)

From Issues (sorted by comments):
1. #62 - Skills disappeared (10 comments)
2. #228 - Enable org-wide skill sharing (9 comments)


3. #202 - skill-creator should be updated (8 comments)
4. #556 - run_eval.py never triggers skills (6 comments)
5. #189 - document-skills and example-skills duplicate (5 comments)
6. #492 - Security: Community skills namespace (4 comments)
7. #412 - agent-governance skill proposal (4 comments)
8. #29 - Usage with bedrock (4 comments)
9. #16 - Expose Skills as MCPs (4 comments)
10. #184 - agentskills.io redirect error (3 comments)
11. #61 - Not found error when loading skills (3 comments)

I'll focus on the most critical issues affecting the skills ecosystem. The top issues reveal significant challenges in skill management, sharing, and implementation. Key problems include skills disappearing, lack of org-wide sharing, and evaluation script limitations. These issues suggest a need for more robust skill management infrastructure and improved developer tools.

The security concern about community skills namespace and the agent-governance skill proposal indicate growing awareness of responsible AI skill development. The bedrock usage and MCP exposure issues highlight the need for more flexible integration options.

The most discussed skills span diverse domains: typography, document handling, quality analysis, frontend design, and platform-specific integrations like ServiceNow and SAP. This diversity reflects the expanding scope of AI skill development across different technical and business contexts.

The testing-patterns skill and sensory skill demonstrate emerging trends in comprehensive skill design, covering everything from testing methodologies to native platform automation. The obsidian-reporter and HADS skill further underscore the community's focus on documentation, reporting, and standardized human-AI interactions.

The issues highlight critical infrastructure needs: sharing mechanisms, skill evaluation, and addressing namespace security concerns. These challenges suggest the community is actively refining the technical and operational foundations of skill development.

The emerging skill directions point toward deeper platform integration, enhanced quality assurance, and more robust automation capabilities across various domains.
</think>

# Skills Community Highlights Report

**Repository:** [github.com/anthropics/skills](https://github.com/anthropics/skills)  
**Data Period:** As of 2026-05-02 | **PRs Analyzed:** 50 | **Issues Analyzed:** 50

---

## 1. Top Skills Ranking

The following skills represent the most actively proposed or improved work in the repository:

| # | Skill | PR | Status | Description |
|---|-------|-----|--------|-------------|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | OPEN | Prevents typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Targets a universal pain point affecting every document Claude generates. |
| 2 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | OPEN | Comprehensive testing skill covering the Testing Trophy model, AAA unit testing patterns, React component testing with Testing Library, and end-to-end testing strategies. |
| 3 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | OPEN | Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Addresses open-source/ISO standard document workflows. |
| 4 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | OPEN | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub. |
| 5 | **sensory (AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | OPEN | Teaches Claude native macOS automation via `osascript` instead of screenshot-based computer use, with a two-tier permission system for app scripting. |
| 6 | **claude-obsidian-reporter** | [#664](https://github.com/anthropics/skills/pull/664) | OPEN | End-of-day skill that reads Git commits and auto-generates structured daily, weekly, and monthly reports into Obsidian vaults. |
| 7 | **HADS (Human-AI Document Standard)** | [#616](https://github.com/anthropics/skills/pull/616) | OPEN | Implements a Markdown convention for technical documentation that serves both human and AI readers without maintaining separate files. |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | OPEN | Enables predictive analytics on SAP business data using SAP's open-source tabular foundation model released at SAP TechEd 2025. |

---

## 2. Community Demand Trends

Issues reveal concentrated demand in four areas:

**🔧 Infrastructure & Reliability**
- **Org-wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228), 9 comments): Users need shared skill libraries within organizations instead of manual file distribution.
- **Skill loading failures** ([#62](https://github.com/anthropics/skills/issues/62), 10 comments): Users report complete loss of custom skills with no recovery path.
- **Upload/delete API errors** ([#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403)): Internal server errors blocking skill management operations.

**📦 Skill Quality & Validation**
- **run_eval.py trigger failures** ([#556](https://github.com/anthropics/skills/issues/556), 6 comments): The evaluation framework fails to trigger skills, making quality benchmarking impossible.
- **skill-creator best practices** ([#202](https://github.com/anthropics/skills/issues/202), 8 comments): Existing skill creation guidance reads as developer documentation rather than executable instructions.

**🔒 Security & Trust**
- **Namespace trust abuse** ([#492](https://github.com/anthropics/skills/issues/492), 4 comments): Community skills distributed under `anthropic/` namespace may deceive users into granting elevated permissions.
- **Duplicate skills** ([#189](https://github.com/anthropics/skills/issues/189), 5 comments): `document-skills` and `example-skills` plugins contain identical content, causing context pollution.

**🌐 Platform Integration**
- **AWS Bedrock compatibility** ([#29](https://github.com/anthropics/skills/issues/29), 4 comments): No clear path to use skills with AWS Bedrock deployments.
- **MCP exposure** ([#16](https://github.com/anthropics/skills/issues/16), 4 comments): Requests to expose skills as Model Context Protocol endpoints for standardized software integration.

---

## 3. High-Potential Pending Skills

These PRs have active development and could land soon:

| Skill | PR | Key Highlights | Est. Impact |
|-------|-----|----------------|-------------|
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skills evaluating structure, documentation, security, and performance across 5 dimensions. Would enable automated skill vetting. | High |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent memory system for AI agents using `proactive_context` to maintain cross-conversation context. | High |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step workflow for identifying orphaned code, unused files, and documentation gaps. | Medium |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Integrates Imagen 3.0 and Veo 3.1 for AI-powered media generation with job management. | Medium |
| **frontend-design clarity improvements** | [#210](https://github.com/anthropics/skills/pull/210) | Revises existing skill to ensure every instruction is actionable within a single conversation. | Medium |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust skill infrastructure—reliable sharing, evaluation, and security controls—combined with expansion into enterprise platforms (ServiceNow, SAP) and professional document workflows (ODT, typography, testing).**

---

*Report generated from github.com/anthropics/skills activity as of 2026-05-02.*

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*