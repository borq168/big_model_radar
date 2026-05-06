# Skills Ecosystem Highlights 2026-05-06

> Generated: 2026-05-06 02:01 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report
**Repository:** github.com/anthropics/skills | **Data as of:** 2026-05-06

---

## 1. Top Skills Ranking

The following Skills (PRs) represent the most active or significant contributions to the ecosystem:

| # | Skill | Author | Status | Key Functionality |
|---|-------|--------|--------|-------------------|
| 1 | **document-typography** | @PGTBoos | OPEN | Prevents typographic issues in AI-generated docs: orphan word wrap, widow paragraphs, numbering misalignment. [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** improvement | @justinwetch | OPEN | Revises skill for clarity and actionability—ensures every instruction is executable within a single conversation. [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer** + **skill-security-analyzer** | @eovidiu | OPEN | Meta skills evaluating Skills across five dimensions: Structure, Documentation, Actionability, Security, and Completeness. [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **ODT** (OpenDocument) | @GitHubNewbie0 | OPEN | Creates, fills, reads, and converts .odt/.ods/.odf files; parses ODT to HTML. [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **testing-patterns** | @4444J99 | OPEN | Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library). [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **ServiceNow platform** | @Vanka07 | OPEN | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response. [PR #568](https://github.com/anthropics/skills/pull/568) |
| 7 | **sensory** (AppleScript) | @AdelElo13 | OPEN | Teaches Claude native macOS automation via `osascript` instead of screenshot-based computer use. [PR #806](https://github.com/anthropics/skills/pull/806) |
| 8 | **AppDeploy** | @avimak | OPEN | Deploys and manages full-stack web apps to public URLs via AppDeploy. [PR #360](https://github.com/anthropics/skills/pull/360) |

**Notable fix PRs** (technical debt resolution):
- [PR #538](https://github.com/anthropics/skills/pull/538): Fixes case-sensitive file references in PDF skill
- [PR #541](https://github.com/anthropics/skills/pull/541): Prevents DOCX corruption from tracked change w:id collisions
- [PR #539](https://github.com/anthropics/skills/pull/539): Warns on unquoted YAML special characters in skill descriptions

---

## 2. Community Demand Trends

Issues reveal concentrated demand in three areas:

**A. Collaboration & Sharing Infrastructure**
- **[Issue #228](https://github.com/anthropics/skills/issues/228)** (9 comments, 7 👍): Users strongly request **org-wide skill sharing**—currently a manual download/upload workflow via Slack/Teams.
- **[Issue #62](https://github.com/anthropics/skills/issues/62)** (10 comments): Skills disappearing after file renames highlights need for **persistence and migration tooling**.

**B. Skill Quality & Governance**
- **[Issue #202](https://github.com/anthropics/skills/issues/202)** (CLOSED, 8 comments): skill-creator is too verbose/educational; needs operational focus.
- **[Issue #492](https://github.com/anthropics/skills/issues/492)** (4 comments): **Security concern**—community skills distributed under `anthropic/` namespace create trust boundary abuse risk.
- **[Issue #189](https://github.com/anthropics/skills/issues/189)** (5 comments): `document-skills` and `example-skills` plugins install **duplicate skills**, causing context pollution.

**C. Platform Integration & Extensibility**
- **[Issue #16](https://github.com/anthropics/skills/issues/16)** (4 comments): Request to **expose Skills as MCPs** for standardized API packaging.
- **[Issue #29](https://github.com/anthropics/skills/issues/29)** (4 comments): Demand for **AWS Bedrock** compatibility.
- **[Issue #412](https://github.com/anthropics/skills/issues/412)** (CLOSED, 4 comments): Proposal for **agent-governance** skill covering policy enforcement, threat detection, trust scoring.

**D. Reliability & Bug Fixes**
- **[Issue #556](https://github.com/anthropics/skills/issues/556)** (6 comments): `run_eval.py` achieves **0% skill trigger rate**—skills not activating in evaluation.
- **[Issue #403](https://github.com/anthropics/skills/issues/403)** (2 comments): API returns **500 error** when deleting skill versions.
- **[Issue #406](https://github.com/anthropics/skills/issues/406)** (2 comments): **Internal server error** prevents skill upload/replacement.

---

## 3. High-Potential Pending Skills

These active PRs have substantive scope and may land soon:

| Skill | PR | Author | Highlights |
|-------|-----|--------|------------|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | @4444J99 | Full testing stack: philosophy (Testing Trophy), unit, React, E2E, performance |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | @Vanka07 | Enterprise ITSM/ITOM/ITAM/FSM coverage—high enterprise demand signal |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | @PGTBoos | Addresses universal document quality gap across all AI-generated output |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | @eovidiu | Meta-skill for skill evaluation; addresses quality governance demand |
| **sensory** (AppleScript) | [#806](https://github.com/anthropics/skills/pull/806) | @AdelElo13 | Native macOS automation without screenshot-based computer use |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | @varun29ankuS | Persistent context across conversations via `proactive_context` |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill infrastructure—org-wide sharing, governance/quality tooling, and reliability fixes—alongside expansion into vertical platforms (ServiceNow, SAP, testing) and document-format handling (ODT, typography).**