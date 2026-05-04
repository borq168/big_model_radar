# Skills Ecosystem Highlights 2026-05-04

> Generated: 2026-05-04 02:02 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>The user wants me to analyze the GitHub data from the anthropics/skills repository and generate a skills community highlights report. Let me parse through the data carefully.

From the PRs (sorted by comments, showing top 20):
1. #514 - document-typography skill (typographic quality control)
2. #538 - fix(pdf): case-sensitive file references
3. #83 - skill-quality-analyzer and skill-security-analyzer
4. #210 - Improve frontend-design skill
5. #486 - ODT skill (OpenDocument)
6. #539 - fix(skill-creator): warn on unquoted description
7. #541 - fix(docx): prevent tracked change w:id collision
8. #509 - docs: add CONTRIBUTING.md
9. #95 - Add comprehensive system documentation
10. #181 - SAP-RPT-1-OSS predictor skill
11. #723 - testing-patterns skill
12. #335 - masonry-generate-image-and-videos skill
13. #806 - sensory skill (AppleScript macOS automation)
14. #54 - docs improvement (Spanish)
15. #154 - shodh-memory skill (persistent context)
16. #147 - codebase-inventory-audit skill
17. #568 - ServiceNow platform skill
18. #36 - Fix skill-creator frontmatter validation
19. #664 - claude-obsidian-reporter skill
20. #616 - HADS skill (Human-AI Document Standard)

From the Issues (sorted by comments, showing top 15):
1. #62 - Skills disappeared (10 comments)
2. #228 - Enable org-wide skill sharing (9 comments)
3. #202 - skill-creator should be updated (8 comments)
4. #556 - run_eval.py never triggers skills (6 comments)


5. #189 - document-skills and example-skills plugins install identical content (5 comments)
6. #492 - Security: Community skills under anthropic/ namespace (4 comments)
7. #412 - Skill proposal: agent-governance (4 comments)
8. #29 - Usage with bedrock (4 comments)
9. #16 - Expose Skills as MCPs (4 comments)
10. #184 - agentskills.io page redirect error (3 comments)
11. #61 - "Not found" error when loading Skills (3 comments)
12. #868 - spei (2 comments)
13. #532 - skill-creator: description optimizer requires ANTHROPIC_API_KEY (2 comments)
14. #406 - unable to upload or replace existing skills (2 comments)
15. #403 - Unable to delete skill versions (2 comments)

The most active discussions center on skill management and sharing capabilities. Users are experiencing issues with skill visibility and organization, particularly around plugin conflicts and version control. There's also interest in expanding skills to support more platforms and use cases, with some security concerns about namespace handling.

Looking at the PRs, several focus on improving skill quality and documentation. The document-typography skill addresses formatting consistency, while the skill-quality-analyzer and skill-security-analyzer aim to enhance overall skill reliability. The ODT skill introduces OpenDocument support, and the testing-patterns skill provides comprehensive testing coverage. The sensory skill enables AppleScript automation, and the HADS skill establishes a human-AI document standard. The ServiceNow platform skill is also gaining traction.

The Issues reveal critical gaps in the ecosystem. Users want better organization-wide skill sharing mechanisms, improved skill creation tools, and more reliable skill triggering. There's also demand for agent governance capabilities and better integration with external platforms like Bedrock. The community is actively discussing how to expose skills as MCPs and resolve various operational issues that prevent smooth skill deployment.
</think>

# Skills Community Highlights Report

**Repository:** [github.com/anthropics/skills](https://github.com/anthropics/skills)  
**Data as of:** 2026-05-04 | **PRs analyzed:** 50 | **Issues analyzed:** 50

---

## 1. Top Skills Ranking

The following Skills (PRs) generated the most community discussion:

| # | PR | Skill | Functionality | Status |
|---|-----|-------|---------------|--------|
| 1 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment | OPEN |
| 2 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT (OpenDocument)** | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) with ISO standard compliance | OPEN |
| 3 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing stack covering philosophy (Testing Trophy), unit testing (AAA pattern), and React component testing | OPEN |
| 4 | [#806](https://github.com/anthropics/skills/pull/806) | **sensory** | Native macOS automation via AppleScript with two-tier permission system for app scripting and UI automation | OPEN |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, SecOps, and IntegrationHub | OPEN |
| 6 | [#616](https://github.com/anthropics/skills/pull/616) | **HADS** | Human-AI Document Standard—a lightweight Markdown convention serving both human and AI readers | OPEN |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer** | Meta skills evaluating Claude Skills across structure, documentation, security, and quality dimensions | OPEN |

**Key Discussion Highlights:**
- The **document-typography** skill addresses a universal pain point affecting every document Claude generates
- **ServiceNow** skill represents enterprise demand for platform-specific depth
- **testing-patterns** signals growing maturity in the ecosystem's testing culture

---

## 2. Community Demand Trends

Issues reveal concentrated demand in these directions:

| Demand | Issue | Comments | Link |
|--------|-------|----------|------|
| **Org-wide skill sharing** | #228 | 9 | [Link](https://github.com/anthropics/skills/issues/228) |
| **Skill reliability/triggering** | #556 | 6 | [Link](https://github.com/anthropics/skills/issues/556) |
| **Agent governance patterns** | #412 | 4 | [Link](https://github.com/anthropics/skills/issues/412) |
| **Skills as MCPs** | #16 | 4 | [Link](https://github.com/anthropics/skills/issues/16) |
| **AWS Bedrock integration** | #29 | 4 | [Link](https://github.com/anthropics/skills/issues/29) |

**Emerging Trends:**
- **Enterprise collaboration**: Users need shared skill libraries within organizations, not manual file sharing
- **Reliability gaps**: `run_eval.py` shows 0% skill trigger rate—core functionality concerns
- **Trust & safety**: Community skills under `anthropic/` namespace create security confusion
- **Platform extensibility**: Demand for Bedrock support and MCP protocol exposure

---

## 3. High-Potential Pending Skills

Active PRs with engagement signals (not yet merged):

| Skill | PR | Highlights | Link |
|-------|-----|------------|------|
| **testing-patterns** | #723 | Full testing stack from philosophy to React components | [Link](https://github.com/anthropics/skills/pull/723) |
| **ServiceNow platform** | #568 | Covers ITSM, ITOM, ITAM, FSM, SecOps, CSDM | [Link](https://github.com/anthropics/skills/pull/568) |
| **HADS (Human-AI Document Standard)** | #616 | Dual-audience Markdown convention | [Link](https://github.com/anthropics/skills/pull/616) |
| **sensory (AppleScript)** | #806 | Native macOS automation replacing screenshot-based approaches | [Link](https://github.com/anthropics/skills/pull/806) |
| **claude-obsidian-reporter** | #664 | Auto-generates Git reports into Obsidian vault | [Link](https://github.com/anthropics/skills/pull/664) |
| **SAP-RPT-1-OSS predictor** | #181 | Tabular foundation model for SAP predictive analytics | [Link](https://github.com/anthropics/skills/pull/181) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill management—org-wide sharing, reliable triggering, and platform extensibility—while simultaneously building domain-specific depth across document formats, testing, and platform integrations.**

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*