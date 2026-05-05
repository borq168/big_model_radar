# Skills Ecosystem Highlights 2026-05-05

> Generated: 2026-05-05 02:02 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>Let me analyze the provided data to create a comprehensive skills community highlights report.

First, let me identify the most-discussed PRs (by comments, though all show "undefined" for comments, so I'll need to look at other indicators like engagement, recency, and complexity):

Looking at the PRs:
1. #514 - document-typography skill - typographic quality control
2. #210 - frontend-design skill improvement
3. #83 - skill-quality-analyzer and skill-security-analyzer
4. #486 - ODT skill (OpenDocument)
5. #538 - fix(pdf): case-sensitive file references
6. #539 - fix(skill-creator): YAML special characters
7. #541 - fix(docx): tracked change w:id collision
8. #509 - docs: add CONTRIBUTING.md
9. #181 - SAP-RPT-1-OSS predictor skill
10. #95 - comprehensive system documentation
11. #723 - testing-patterns skill
12. #568 - ServiceNow platform skill
13. #806 - sensory skill (AppleScript macOS automation)
14. #360 - AppDeploy skill
15. #147 - codebase-inventory-audit skill
16. #335 - masonry-generate-image-and-videos skill
17. #154 - shodh-memory skill
18. #299 - Google Workspaces skills
19. #664 - claude-obsidian-reporter skill

For Issues (sorted by comments):
1. #62 - Skills disappeared (10 comments)
2. #228 - Org-wide skill sharing (9 comments)
3. #202 - skill-creator best practices (8 comments) - CLOSED
4. #556 - run_eval.py never triggers skills (6 comments)
5. #189 - document-skills and example-skills duplicates (5 comments)


6. #492 - Security: Community skills namespace trust (4 comments)
7. #412 - Agent governance skill proposal (4 comments) - CLOSED
8. #29 - Usage with Bedrock (4 comments)
9. #16 - Expose Skills as MCPs (4 comments)
10. #184 - agentskills.io redirect error (3 comments) - CLOSED
11. #61 - "Not found" error loading skills (3 comments)
12. #868 - spei (2 comments)
13. #532 - skill-creator API key requirement (2 comments) - CLOSED
14. #406 - Unable to upload/replace skills (2 comments)
15. #403 - Unable to delete skill versions (2 comments)

Now I'm organizing this into a structured report format.
</think>

# Skills Community Highlights Report
**Repository:** github.com/anthropics/skills | **Data as of:** 2026-05-05

---

## 1. Top Skills Ranking

The following Skills (PRs) represent the most substantive contributions to the ecosystem, selected by scope, innovation, and community engagement:

| # | Skill | Author | Status | Key Functionality |
|---|-------|--------|--------|-------------------|
| 1 | **testing-patterns** | @4444J99 | OPEN | Comprehensive testing skill covering Testing Trophy philosophy, unit testing (AAA pattern), React component testing with Testing Library, and E2E patterns. [PR #723](https://github.com/anthropics/skills/pull/723) |
| 2 | **ServiceNow platform** | @Vanka07 | OPEN | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub. [PR #568](https://github.com/anthropics/skills/pull/568) |
| 3 | **sensory (AppleScript)** | @AdelElo13 | OPEN | Native macOS automation via `osascript` with two-tier permission system—direct app scripting (Tier 1) and UI automation requiring Accessibility permissions (Tier 2). [PR #806](https://github.com/anthropics/skills/pull/806) |
| 4 | **appdeploy** | @avimak | OPEN | Enables Claude to deploy and manage full-stack web apps to public URLs via AppDeploy, including lifecycle management and versioning. [PR #360](https://github.com/anthropics/skills/pull/360) |
| 5 | **document-typography** | @PGTBoos | OPEN | Prevents typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. [PR #514](https://github.com/anthropics/skills/pull/514) |
| 6 | **skill-quality-analyzer & skill-security-analyzer** | @eovidiu | OPEN | Meta skills evaluating Claude Skills across five dimensions: Structure & Documentation (20%), Clarity & Actionability (20%), Completeness (20%), Correctness (20%), and Safety (20%). [PR #83](https://github.com/anthropics/skills/pull/83) |
| 7 | **SAP-RPT-1-OSS predictor** | @amitlals | OPEN | Uses SAP's open-source tabular foundation model for predictive analytics on SAP business data. [PR #181](https://github.com/anthropics/skills/pull/181) |
| 8 | **claude-obsidian-reporter** | @sinaayyy | OPEN | End-of-day skill that reads Git commits and auto-generates structured daily, weekly, and monthly reports into Obsidian vault. [PR #664](https://github.com/anthropics/skills/pull/664) |

**Discussion Highlights:**
- **testing-patterns** (#723) is the most comprehensive testing skill to date, addressing a gap in systematic testing guidance.
- **ServiceNow** (#568) signals enterprise demand for platform-specific deep dives beyond generic scripting helpers.
- **sensory** (#806) introduces a safer alternative to screenshot-based computer use for macOS automation.
- **skill-quality-analyzer** (#83) represents a meta-layer need—tools to evaluate other skills' quality.

---

## 2. Community Demand Trends

Issues reveal unmet workflow demands and infrastructure gaps. Key themes:

| Theme | Issue | Comments | Insight |
|-------|-------|----------|---------|
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) | 9 | Users want shared skill libraries within organizations instead of manual upload/export via Slack. |
| **Skill reliability & triggers** | [#556](https://github.com/anthropics/skills/issues/556) | 6 | `run_eval.py` shows 0% skill trigger rate—skills aren't being invoked as expected. |
| **Plugin duplication** | [#189](https://github.com/anthropics/skills/issues/189) | 5 | `document-skills` and `example-skills` plugins install identical content, causing duplicates. |
| **Trust & security** | [#492](https://github.com/anthropics/skills/issues/492) | 4 | Community skills distributed under `anthropic/` namespace create trust boundary abuse risk. |
| **MCP exposure** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | Request to expose Skills as MCPs for standardized API packaging. |
| **Bedrock integration** | [#29](https://github.com/anthropics/skills/issues/29) | 4 | No clear path to use skills with AWS Bedrock. |
| **Skill lifecycle management** | [#403](https://github.com/anthropics/skills/issues/403), [#406](https://github.com/anthropics/skills/issues/406) | 2 each | API errors prevent deleting skill versions and uploading/replacing skills. |

**Emerging Demand Vectors:**
1. **Enterprise collaboration** — Org-level skill sharing, SSO compatibility, and team workflows.
2. **Skill reliability engineering** — Ensuring skills actually trigger and execute correctly.
3. **Trust & governance** — Namespace verification, security scanning, and audit trails.
4. **Platform interoperability** — Bedrock support, MCP exposure, and cross-cloud deployment.

---

## 3. High-Potential Pending Skills

These active PRs have substantial scope and may land soon:

| Skill | PR | Highlights | Readiness |
|-------|-----|------------|-----------|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full testing stack: philosophy → unit → component → E2E. Updated 2026-04-21. | High—comprehensive, well-structured |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | Covers 10+ ServiceNow modules. Updated 2026-04-23. | High—enterprise-grade scope |
| **sensory (AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Native macOS automation, two-tier permissions. Updated 2026-04-02. | High—innovative, addresses computer-use risks |
| **appdeploy** | [#360](https://github.com/anthropics/skills/pull/360) | Full-stack deployment to public URLs. Updated 2026-05-04. | High—most recently updated |
| **claude-obsidian-reporter** | [#664](https://github.com/anthropics/skills/pull/664) | Git → Obsidian daily/weekly/monthly reports. Updated 2026-03-22. | Medium—niche but well-defined |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Fixes orphan/widow lines, numbering misalignment. Updated 2026-03-13. | Medium—quality-of-life, broad impact |

**Note:** All listed PRs are OPEN and not yet merged. The most recent activity suggests **appdeploy**, **ServiceNow**, and **testing-patterns** are closest to merge readiness.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill infrastructure: reliable skill triggering, org-wide sharing mechanisms, SSO/API-key-free operation, and trust/security governance—indicating a shift from skill creation to skill deployment and collaboration at scale.**