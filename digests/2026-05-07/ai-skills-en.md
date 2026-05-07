# Skills Ecosystem Highlights 2026-05-07

> Generated: 2026-05-07 02:04 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-07

## 1. Top Skills Ranking

The following Skills (PRs) represent the most substantive contributions in the current dataset. All are currently **OPEN** with no recorded comments, indicating they are pending review.

| # | Skill | Author | Summary |
|---|-------|--------|---------|
| #723 | **testing-patterns** | @4444J99 | Comprehensive testing skill covering Testing Trophy philosophy, unit testing (AAA pattern), React component testing (Testing Library), and full testing stack guidance. [Link](https://github.com/anthropics/skills/pull/723) |
| #568 | **ServiceNow platform** | @Vanka07 | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub. [Link](https://github.com/anthropics/skills/pull/568) |
| #444 | **AURELION skill suite** | @Chase-Key | Four-skill cognitive + memory framework: kernel (structured thinking templates), advisor, agent, and memory components for professional knowledge management. [Link](https://github.com/anthropics/skills/pull/444) |
| #360 | **AppDeploy** | @avimak | Enables Claude to deploy and manage full-stack web apps to public URLs via AppDeploy, including lifecycle management and versioning. [Link](https://github.com/anthropics/skills/pull/360) |
| #514 | **document-typography** | @PGTBoos | Prevents typographic issues in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. [Link](https://github.com/anthropics/skills/pull/514) |
| #181 | **SAP-RPT-1-OSS predictor** | @amitlals | Skill for using SAP's open-source tabular foundation model for predictive analytics on SAP business data. [Link](https://github.com/anthropics/skills/pull/181) |
| #806 | **sensory (macOS automation)** | @AdelElo13 | Native macOS automation via AppleScript/osascript instead of screenshot-based computer use, with two-tier permission system. [Link](https://github.com/anthropics/skills/pull/806) |

---

## 2. Community Demand Clusters

Issues reveal several recurring themes in unmet workflow demand:

**Skill Sharing & Collaboration Infrastructure**
- **#228** (9 comments, 7 👍): Users request org-wide skill sharing without manual download/upload cycles. Currently requires Slack/Teams file transfer and manual Settings navigation.
- **#62** (10 comments, 1 👍): Users report complete loss of uploaded skills after file renaming, indicating fragile persistence mechanisms.

**Skill Lifecycle Management**
- **#406** (2 comments, 4 👍): Upload/replace operations failing with internal server errors.
- **#403** (2 comments): Deletion API returns 500 Internal Server Error, preventing skill cleanup.
- **#61** (3 comments): 404 errors when loading skills via API for Team plans.

**Skill Quality & Evaluation**
- **#556** (6 comments, 6 👍): `run_eval.py` reports 0% skill trigger rate across all queries—a critical reliability gap for skill validation.
- **#189** (6 comments, 8 👍): `document-skills` and `example-skills` plugins contain identical content, creating duplicate skills in context.

**Trust & Security**
- **#492** (4 comments, 2 👍): Community skills distributed under `anthropic/` namespace may enable trust boundary abuse; users cannot distinguish official from community contributions.

**Platform Integration**
- **#29** (4 comments): Requests for AWS Bedrock compatibility remain unanswered.
- **#16** (4 comments): Proposal to expose Skills as MCPs for standardized API packaging.

---

## 3. Active Pending Skills

The following PRs have active discussion or recent updates but remain unmerged:

| # | Skill | Key Discussion Points | Last Updated |
|---|-------|----------------------|--------------|
| #509 | **CONTRIBUTING.md** | Addresses community health gap (repo at 25% on GitHub metrics); closes #452 | 2026-03-19 |
| #210 | **frontend-design improvement** | Revises skill for clarity and actionability; ensures instructions are followable within single conversation | 2026-03-07 |
| #538 | **pdf fix** | Corrects 8 case-sensitivity mismatches in SKILL.md references; fixes broken links on case-sensitive filesystems | 2026-04-29 |
| #541 | **docx fix** | Prevents document corruption when tracked changes collide with existing bookmarks (shared `w:id` namespace) | 2026-04-16 |
| #539 | **skill-creator fix** | Adds pre-parse validation for unquoted YAML descriptions with `:` character | 2026-04-16 |

---

## 4. Daily Notes

1. **Enterprise workflow gaps dominate Issues**: The highest-comment Issues (#62, #228, #406, #403) all relate to team/organizational use cases—skill sharing, persistence, upload/delete operations. This suggests the community is actively trying to use Skills in enterprise contexts, but core infrastructure for collaboration and lifecycle management is incomplete.

2. **Skill quality tooling has a reliability problem**: Issue #556 reports `run_eval.py` achieves 0% trigger rate during skill evaluation. If this tool is used to validate PRs, unmerged Skills may have undetected functional failures. This warrants maintainer attention.

3. **No clear signal on trending skill domains**: The PR list shows broad diversification (document handling, testing, platform integrations, cognitive frameworks, automation) without a dominant category. The most "discussed" items by any metric are bug fixes and infrastructure improvements rather than new capability domains.