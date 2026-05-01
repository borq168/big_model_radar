# Skills Ecosystem Highlights 2026-05-01

> Generated: 2026-05-01 02:10 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>Let me analyze the provided data to create a comprehensive skills community highlights report.

First, let me identify the most-discussed PRs (by comments, though all show "undefined" for comments - I'll need to look at other indicators like updates, activity, or just the content of the PRs themselves). Since all PRs show "Comments: undefined", I'll need to use other metrics or just present the most notable ones based on their content and activity.

Let me categorize the data:

**Top Skills (PRs) - Most notable based on content and activity:**

1. #514 - document-typography skill - typographic quality control
2. #538 - fix(pdf): case-sensitive file references
3. #83 - skill-quality-analyzer and skill-security-analyzer
4. #210 - frontend-design skill improvement
5. #486 - ODT skill (OpenDocument)
6. #539 - fix(skill-creator): YAML special characters warning
7. #541 - fix(docx): tracked change w:id collision
8. #509 - docs: add CONTRIBUTING.md
9. #723 - testing-patterns skill
10. #806 - sensory skill (AppleScript/macOS automation)

**Issues - Community Demand:**
- #62 - Skills disappearing (10 comments) - major UX issue
- #228 - Org-wide skill sharing (9 comments) - enterprise need
- #202 - skill-creator best practices (8 comments) - quality concern
- #556 - run_eval.py skill trigger rate bug (6 comments) - technical issue
- #189 - duplicate skills from plugins (5 comments) - packaging issue
- #492 - Security: community skills namespace trust (4 comments) - security concern
- #412 - agent-governance skill proposal (4 comments) - new direction
- #29 - Usage with Bedrock (4 comments) - platform support
- #16 - Expose Skills as MCPs (4 comments) - integration request


- #184 - agentskills.io redirect error (3 comments) - broken link
- #61 - 404 error loading skills (3 comments) - API issue
- #532 - skill-creator requires ANTHROPIC_API_KEY (2 comments) - enterprise issue
- #406 - unable to upload skills (2 comments) - upload issue
- #403 - unable to delete skill versions (2 comments) - API issue

Now I'll structure the report with the most impactful findings. The skill ecosystem shows strong momentum around document handling and quality assurance, with typography, PDF, and ODT skills gaining traction. Enterprise needs like org-wide sharing and SSO integration are driving significant discussion, while technical issues around skill triggering and API reliability need attention. The security concerns around community skill namespaces and the desire to expose skills as MCPs represent important architectural considerations for the platform's future direction.
</think>

# Skills Community Highlights Report
**Repository:** github.com/anthropics/skills | **Data as of:** 2026-05-01

---

## 1. Top Skills Ranking

| # | Skill | Functionality | Highlights | Status |
|---|-------|---------------|------------|--------|
| 1 | **document-typography** (#514) | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents | Addresses universal document quality issues; targets every document Claude generates | OPEN |
| 2 | **testing-patterns** (#723) | Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library) | Full testing stack coverage; addresses gap in quality assurance workflows | OPEN |
| 3 | **servicenow** (#568) | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, Security Incident Response | Most comprehensive enterprise platform skill; covers 9 ServiceNow modules | OPEN |
| 4 | **skill-quality-analyzer** (#83) | Evaluates skills across 5 dimensions: Structure & Documentation (20%), and 4 other quality dimensions | Meta-skill for skill quality assurance; enables systematic skill evaluation | OPEN |
| 5 | **odt** (#486) | OpenDocument Format (.odt, .ods) creation, template filling, and ODT-to-HTML conversion | Expands document format support; ISO standard/open-source focus | OPEN |
| 6 | **frontend-design** improvement (#210) | Revises skill for clarity, actionability, and internal coherence | Ensures every instruction is executable within a single conversation | OPEN |
| 7 | **sensory** (#806) | Native macOS automation via AppleScript (`osascript`) with two-tier permission system | Moves beyond screenshot-based computer use; Tier 1 works out-of-box | OPEN |
| 8 | **claude-obsidian-reporter** (#664) | Auto-generates daily/weekly/monthly Git reports into Obsidian vault | End-of-day workflow automation; structured reporting | OPEN |

---

## 2. Community Demand Trends

**Enterprise & Collaboration:**
- **Org-wide skill sharing** (#228, 9 comments) — Users need shared skill libraries or direct sharing links instead of manual upload/download via Slack
- **SSO/Enterprise API access** (#532) — skill-creator's description optimizer requires `ANTHROPIC_API_KEY`, unusable for SSO-authenticated enterprise users

**Platform & Integration:**
- **AWS Bedrock support** (#29) — Community requests clarity on skills working with AWS Bedrock
- **Skills as MCPs** (#16) — Expose skills as Model Context Protocol endpoints for standardized AI software packaging

**Quality & Governance:**
- **Agent governance patterns** (#412) — Proposal for safety patterns: policy enforcement, threat detection, trust scoring, audit trails
- **Security namespace concerns** (#492) — Community skills under `anthropic/` namespace create trust boundary vulnerabilities

**Reliability Issues:**
- **Skills disappearing** (#62, 10 comments) — Major UX bug where user-created skills become invisible
- **Upload/delete failures** (#406, #403) — Internal server errors blocking skill management
- **run_eval.py trigger rate** (#556, 6 comments) — 0% skill trigger rate across all queries in evaluation script

---

## 3. High-Potential Pending Skills

These PRs have active development and may merge soon:

| Skill | PR | Key Value | Priority Signal |
|-------|-----|-----------|-----------------|
| **testing-patterns** | #723 | Full testing stack (unit, component, philosophy) | Active updates through Apr 2026 |
| **servicenow** | #568 | 9-module enterprise platform coverage | Active updates through Apr 2026 |
| **document-typography** | #514 | Universal document quality fix | Addresses "every document Claude generates" |
| **skill-quality-analyzer** | #83 | Systematic skill evaluation framework | Meta-skill enabling community quality standards |
| **sensory** | #806 | Native macOS automation | Two-tier permission system for safe AppleScript use |

**Notable Fixes Awaiting Merge:**
- **#541** — DOCX tracked change corruption fix (w:id collision with bookmarks)
- **#539** — YAML special character validation in skill-creator
- **#538** — PDF case-sensitive file reference corrections

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill infrastructure: robust sharing mechanisms, SSO compatibility, and reliable cross-platform deployment—while simultaneously building quality assurance tooling to validate the growing skills library.**

---

*Report generated from 50 PRs and 50 Issues analyzed. All GitHub links reference https://github.com/anthropics/skills.*

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*