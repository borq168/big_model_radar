# Skills Ecosystem Highlights 2026-04-30

> Generated: 2026-04-30 02:06 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>The user wants me to generate a skills community highlights report based on the provided GitHub data from the anthropics/skills repository. Let me analyze the data and create a structured report.

Looking at the data:

**Pull Requests (sorted by comments, 50 total, showing top 20):**
- #514 - document-typography skill
- #538 - fix(pdf): case-sensitive file references
- #83 - skill-quality-analyzer and skill-security-analyzer
- #210 - Improve frontend-design skill
- #486 - ODT skill
- #539 - fix(skill-creator): warn on unquoted description
- #541 - fix(docx): prevent tracked change w:id collision
- #509 - docs: add CONTRIBUTING.md
- #723 - testing-patterns skill
- #95 - Add comprehensive system documentation
- #181 - SAP-RPT-1-OSS predictor skill
- #335 - masonry-generate-image-and-videos skill
- #54 - Añadida mejora en los docs
- #806 - sensory skill — native macOS automation via AppleScript
- #147 - codebase-inventory-audit skill
- #154 - shodh-memory skill
- #568 - ServiceNow platform skill
- #666 - Remove duplicate skill-creator skill
- #664 - claude-obsidian-reporter
- #616 - HADS skill

**Issues (sorted by comments, 50 total, showing top 15):**
- #62 - Skills disappeared (10 comments)
- #228 - Enable org-wide skill sharing (9 comments)
- #202 - skill-creator should be updated (8 comments)
- #556 - run_eval.py never triggers skills (6 comments)
- #189 - document-skills and example-skills duplicates (5 comments)


- #492 - Security: Community skills trust boundary abuse (4 comments)
- #412 - Skill proposal: agent-governance (4 comments)
- #29 - Usage with bedrock (4 comments)
- #16 - Expose Skills as MCPs (4 comments)
- #184 - agentskills.io page redirect error (3 comments)
- #61 - "Not found" error when loading Skills (3 comments)
- #868 - spei (2 comments)
- #532 - skill-creator: description optimizer requires ANTHROPIC_API_KEY (2 comments)
- #406 - unable to upload or replace existing skills (2 comments)
- #403 - Unable to delete skill versions (2 comments)

Now I'll organize this into the requested sections. For the top skills ranking, I need to identify which ones generated the most discussion and engagement. The document-typography skill (#514) appears to be a major focus with significant activity around typographic quality control for AI-generated documents. The ODT skill (#486) for OpenDocument handling also shows strong community interest. I should highlight these alongside other high-engagement skills that demonstrate clear functionality and community momentum.

Looking at the issues data, there's clear demand for organizational features like skill sharing across teams (#228), concerns about security and trust boundaries (#492), and infrastructure needs like Bedrock integration (#29). The agent-governance proposal (#412) suggests interest in safety patterns for AI systems. These patterns indicate where the community sees gaps in current capabilities.

For pending skills with active discussion, the testing-patterns skill (#723) and ServiceNow platform skill (#568) both show meaningful engagement. The sensory skill for macOS automation (#806) and the quality/security analyzers (#83) represent practical tooling needs. The frontend-design improvements (#210) and codebase-inventory-audit (#147) address workflow optimization.

The core tension emerging is between platform limitations—org-wide sharing, Bedrock compatibility, API key requirements—and the community's desire for more sophisticated, enterprise-ready capabilities. There's also a security dimension where the namespace and trust boundaries need clarification. The ecosystem appears ready for skills that bridge these gaps, particularly around governance, testing, and cross-platform integration.
</think>

# Skills Community Highlights Report

**Repository:** github.com/anthropics/skills
**Data Period:** As of 2026-04-30
**Scope:** 50 PRs, 50 Issues analyzed

---

## 1. Top Skills Ranking

The following Skills generated the most community discussion and engagement:

| # | Skill | Author | Status | Summary |
|---|-------|--------|--------|---------|
| 1 | **document-typography** | @PGTBoos | OPEN | Prevents typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Affects every document Claude generates. [[PR #514](https://github.com/anthropics/skills/pull/514)] |
| 2 | **testing-patterns** | @4444J99 | OPEN | Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), and full testing stack. [[PR #723](https://github.com/anthropics/skills/pull/723)] |
| 3 | **ServiceNow platform** | @Vanka07 | OPEN | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub. [[PR #568](https://github.com/anthropics/skills/pull/568)] |
| 4 | **sensory (macOS automation)** | @AdelElo13 | OPEN | Teaches Claude to use `osascript` for native macOS automation via AppleScript with two-tier permission system. [[PR #806](https://github.com/anthropics/skills/pull/806)] |
| 5 | **skill-quality-analyzer & skill-security-analyzer** | @eovidiu | OPEN | Meta skills for evaluating Claude Skills across five dimensions: Structure, Documentation, Security, Performance, and Maintainability. [[PR #83](https://github.com/anthropics/skills/pull/83)] |
| 6 | **ODT (OpenDocument)** | @GitHubNewbie0 | OPEN | Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) with LibreOffice integration. [[PR #486](https://github.com/anthropics/skills/pull/486)] |
| 7 | **claude-obsidian-reporter** | @sinaayyy | OPEN | End-of-day skill that reads Git commits and auto-generates structured daily, weekly, and monthly reports into Obsidian vault. [[PR #664](https://github.com/anthropics/skills/pull/664)] |
| 8 | **shodh-memory** | @varun29ankuS | OPEN | Persistent memory system for AI agents that maintains context across conversations via `proactive_context` calls. [[PR #154](https://github.com/anthropics/skills/pull/154)] |

**Discussion Highlights:**
- **document-typography** addresses a universal pain point affecting all document generation workflows
- **testing-patterns** fills a critical gap in the skills ecosystem for quality assurance
- **ServiceNow** demonstrates enterprise platform expansion interest
- **sensory** represents the shift toward native OS integration beyond screenshot-based automation

---

## 2. Community Demand Trends

Issues reveal concentrated demand in these areas:

| Trend | Issue | Comments | Key Insight |
|-------|-------|----------|-------------|
| **Enterprise Collaboration** | [[#228](https://github.com/anthropics/skills/issues/228)] | 9 | Org-wide skill sharing is the #1 requested feature—users need direct sharing without manual upload/download workflows |
| **Skill Reliability** | [[#556](https://github.com/anthropics/skills/issues/556)] | 6 | `run_eval.py` has 0% trigger rate—skills aren't being invoked correctly during evaluation |
| **Plugin Conflicts** | [[#189](https://github.com/anthropics/skills/issues/189)] | 5 | `document-skills` and `example-skills` contain duplicate skills, causing context pollution |
| **Security & Trust** | [[#492](https://github.com/anthropics/skills/issues/492)] | 4 | Community skills distributed under `anthropic/` namespace create trust boundary vulnerabilities |
| **Infrastructure Integration** | [[#29](https://github.com/anthropics/skills/issues/29)] | 4 | AWS Bedrock compatibility is a requested but unresolved use case |
| **Governance & Safety** | [[#412](https://github.com/anthropics/skills/issues/412)] | 4 | Agent governance patterns (policy enforcement, threat detection, audit trails) are proposed but not yet delivered |

**Emerging Direction:** The community is maturing from "skill creation" to "skill governance"—demand is shifting toward reliability, security, collaboration, and enterprise integration rather than new domain-specific skills.

---

## 3. High-Potential Pending Skills

These PRs have active development and may merge soon:

| Skill | PR | Key Differentiator | Notable Aspects |
|-------|-----|-------------------|-----------------|
| **testing-patterns** | [[#723](https://github.com/anthropics/skills/pull/723)] | Full testing stack coverage | Testing Trophy model, React component testing, edge cases |
| **ServiceNow platform** | [[#568](https://github.com/anthropics/skills/pull/568)] | Broad platform coverage | 8+ ServiceNow modules covered in single skill |
| **sensory (macOS)** | [[#806](https://github.com/anthropics/skills/pull/806)] | Native OS automation | AppleScript integration with permission tiers |
| **skill-quality-analyzer** | [[#83](https://github.com/anthropics/skills/pull/83)] | Meta-skill for skill quality | 5-dimension evaluation framework |
| **claude-obsidian-reporter** | [[#664](https://github.com/anthropics/skills/pull/664)] | Developer workflow automation | Git-to-Obsidian reporting pipeline |
| **HADS (Human-AI Doc Standard)** | [[#616](https://github.com/anthropics/skills/pull/616)] | Dual human/AI documentation | Single file serves both readers |

**Note:** Several bug-fix PRs ([[#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541)]) address technical debt in existing skills and may be prioritized for merge.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill infrastructure—org-wide sharing, reliable evaluation tooling, and security governance—rather than additional domain-specific skills.**

The top issues focus on collaboration bottlenecks (#228), evaluation reliability (#556), and trust boundaries (#492), signaling that the skills ecosystem has reached sufficient breadth and now requires depth improvements in reliability, security, and team collaboration features.

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*