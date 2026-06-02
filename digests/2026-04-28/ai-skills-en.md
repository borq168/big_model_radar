# Skills Ecosystem Highlights 2026-04-28

> Generated: 2026-04-28 02:05 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

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
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*
