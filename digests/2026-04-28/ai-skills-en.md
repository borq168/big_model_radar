# Skills Ecosystem Highlights 2026-04-28

> Generated: 2026-04-28 02:05 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>Let me analyze the data provided from the GitHub repository to create a comprehensive skills community highlights report.

First, let me identify the most-discussed PRs (Skills) by looking at the data:

Looking at the PRs sorted by comments (though comments show "undefined" for most):
1. #514 - document-typography skill
2. #83 - skill-quality-analyzer and skill-security-analyzer
3. #210 - frontend-design skill improvement
4. #486 - ODT skill
5. #539 - fix(skill-creator): warn on unquoted description
6. #541 - fix(docx): prevent tracked change w:id collision
7. #538 - fix(pdf): correct case-sensitive file references
8. #509 - docs: add CONTRIBUTING.md
9. #723 - testing-patterns skill
10. #95 - comprehensive system documentation and flowcharts
11. #181 - SAP-RPT-1-OSS predictor skill
12. #335 - masonry-generate-image-and-videos skill
13. #54 - Añadida mejora en los docs
14. #806 - sensory skill — native macOS automation via AppleScript
15. #147 - codebase-inventory-audit skill
16. #154 - shodh-memory skill
17. #568 - ServiceNow platform skill
18. #666 - Remove duplicate skill-creator skill
19. #664 - claude-obsidian-reporter
20. #616 - HADS skill — Human-AI Document Standard

Now let me look at the Issues with the most comments:
1. #62 - Skills disappeared, errors (10 comments)
2. #228 - Enable org-wide skill sharing (9 comments)
3. #202 - skill-creator should be updated to best practice (8 comments)


4. #556 - run_eval.py: claude -p never triggers skills (6 comments)
5. #189 - document-skills and example-skills plugins install identical content (5 comments)
6. #492 - Security: Community skills distributed under anthropic/ namespace (4 comments)
7. #412 - Skill proposal: agent-governance (4 comments)
8. #29 - Usage with bedrock (4 comments)
9. #16 - Expose Skills as MCPs (4 comments)
10. #184 - agentskills.io page is giving "too many redirects" error (3 comments)

I notice several critical issues emerging around skill management and evaluation. The most pressing concerns involve skill triggering, plugin conflicts, and namespace security. Key problems include evaluation scripts failing to activate skills, duplicate skill installations, and potential security risks with community-developed skills under the Anthropic namespace.

The issues reveal systemic challenges in skill distribution, testing, and governance. Developers are experiencing difficulties with skill reliability, plugin interactions, and maintaining clean, secure skill ecosystems. These problems suggest a need for more robust testing frameworks, clearer namespace management, and improved skill validation processes.

Proposed solutions focus on enhancing skill discoverability, implementing stricter validation checks, and creating more comprehensive governance mechanisms for skill development and deployment.
</think>

# Skills Community Highlights Report

**Repository:** github.com/anthropics/skills  
**Data as of:** 2026-04-28  
**Scope:** 50 PRs, 50 Issues analyzed

---

## 1. Top Skills Ranking

The following Skills (PRs) represent the most significant contributions or discussions in the current pipeline:

| # | PR | Skill | Description | Status |
|---|-----|-------|-------------|--------|
| 1 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), and full testing stack philosophy. | OPEN |
| 2 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow platform** | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub. | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. Targets universal document quality improvement. | OPEN |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT (OpenDocument)** | Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) with ISO standard compliance. | OPEN |
| 5 | [#806](https://github.com/anthropics/skills/pull/806) | **sensory (macOS automation)** | Teaches Claude to use `osascript` for native macOS automation via AppleScript with two-tier permission system. | OPEN |
| 6 | [#616](https://github.com/anthropics/skills/pull/616) | **HADS (Human-AI Document Standard)** | Lightweight Markdown convention for technical documentation serving both human and AI readers without maintaining separate files. | OPEN |
| 7 | [#664](https://github.com/anthropics/skills/pull/664) | **claude-obsidian-reporter** | End-of-day skill that reads Git commits and auto-generates structured daily, weekly, and monthly reports into Obsidian vault. | OPEN |
| 8 | [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** | Integration with SAP's open-source tabular foundation model for predictive analytics on SAP business data. | OPEN |

**Key Observation:** All top skills are currently **OPEN** (not yet merged), indicating a backlog of quality contributions awaiting review.

---

## 2. Community Demand Trends

Issues reveal concentrated demand in four primary areas:

### 🔐 Enterprise & Security
- **Org-wide skill sharing** (#228, 9 comments): Users need shared skill libraries within organizations rather than manual file distribution.
- **Security namespace concerns** (#492, 4 comments): Community skills distributed under `anthropic/` namespace create trust boundary vulnerabilities.
- **API key dependency** (#532): Enterprise/SSO users cannot use skill-creator's description optimizer due to `ANTHROPIC_API_KEY` requirement.

### 🛠️ Platform Reliability
- **Skills disappearing/errors** (#62, 10 comments): Users report losing access to created skills with no recovery path.
- **Upload failures** (#406): Internal server errors preventing skill uploads/replacements.
- **Deletion API failures** (#403): 500 errors when attempting to delete skill versions.

### 🔧 Developer Experience
- **Skill triggering issues** (#556, 6 comments): `run_eval.py` shows 0% trigger rate—skills fail to activate during evaluation.
- **Duplicate skills** (#189, 5 comments): `document-skills` and `example-skills` plugins contain identical content.
- **skill-creator best practices** (#202, 8 comments): Current skill reads like developer documentation rather than operational instructions.

### 🔮 Integration & Extensibility
- **Skills as MCPs** (#16, 4 comments): Requests to expose Skills as Model Context Protocol endpoints for broader software integration.
- **Bedrock compatibility** (#29, 4 comments): Users seeking AWS Bedrock integration paths.
- **agentskills.io redirects** (#184): External reference page broken, affecting documentation discoverability.

---

## 3. High-Potential Pending Skills

These active PRs have substantial scope and may land soon:

| PR | Skill | Potential Impact | Review Priority |
|----|-------|------------------|-----------------|
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | High—fills critical testing workflow gap | High |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | High—enterprise platform coverage | High |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Medium—addresses universal document quality | Medium |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory (macOS)** | Medium—native OS automation capability | Medium |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** + **skill-security-analyzer** | High—meta skills for skill validation | Pending |

**Notable Fix PRs:**
- [#539](https://github.com/anthropics/skills/pull/539): YAML validation fix for skill-creator
- [#541](https://github.com/anthropics/skills/pull/541): DOCX corruption prevention
- [#538](https://github.com/anthropics/skills/pull/538): PDF case-sensitivity fix

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill management infrastructure—specifically org-wide sharing, reliable upload/delete APIs, and security boundaries—combined with a backlog of high-quality domain-specific skills (testing, ServiceNow, typography) awaiting merge review.**

---

*Report generated from github.com/anthropics/skills data (50 PRs, 50 Issues) as of 2026-04-28.*

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*