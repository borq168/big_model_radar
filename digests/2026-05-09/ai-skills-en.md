# Skills Ecosystem Highlights 2026-05-09

> Generated: 2026-05-09 02:04 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-09

## 1. Top Skills Ranking

The following PRs attracted the most discussion (sorted by comment count) among the 50 PRs analyzed. All remain open.

**#514 — Add document-typography skill**
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — three typographic issues the author notes affect "every document Claude generates."
- **Discussion highlights**: The PR addresses a universal pain point for document output. No counterarguments are visible in the available data; the skill appears uncontroversial.
- **Status**: Open since 2026-03-04, last updated 2026-03-13. [PR link](https://github.com/anthropics/skills/pull/514)

**#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace**
- **Functionality**: Two meta-skills: one evaluates skills across five quality dimensions (Structure & Documentation 20%, plus four others), the other analyzes security posture.
- **Discussion highlights**: This is the only PR proposing meta-skills that inspect other skills. The dual focus on quality and security suggests community interest in skill governance tooling.
- **Status**: Open since 2025-11-06, last updated 2026-01-07. [PR link](https://github.com/anthropics/skills/pull/83)

**#210 — Improve frontend-design skill clarity and actionability**
- **Functionality**: Revises the existing frontend-design skill to make every instruction executable within a single conversation and to steer Claude behavior more specifically.
- **Discussion highlights**: The PR is a pure revision rather than a new skill — notable because it signals unmet demand for skill quality improvements over quantity.
- **Status**: Open since 2026-01-05, last updated 2026-03-07. [PR link](https://github.com/anthropics/skills/pull/210)

**#486 — Add ODT skill (OpenDocument text creation and template filling)**
- **Functionality**: Creates, fills, reads, and converts .odt and .ods files — LibreOffice/ISO-standard document format. Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice document".
- **Discussion highlights**: Expands the document format coverage beyond the existing DOCX and PDF skills. No specific objections visible.
- **Status**: Open since 2026-03-01, last updated 2026-04-14. [PR link](https://github.com/anthropics/skills/pull/486)

**#538 — fix(pdf): correct case-sensitive file references in SKILL.md**
- **Functionality**: Fixes 8 case-sensitivity mismatches where SKILL.md referenced REFERENCE.md and FORMS.md instead of the actual lowercase file names.
- **Discussion highlights**: A bug-fix PR that reveals the PDF skill had been broken on case-sensitive filesystems (Linux, macOS). The fix is purely mechanical.
- **Status**: Open since 2026-03-06, last updated 2026-04-29. [PR link](https://github.com/anthropics/skills/pull/538)

**#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks**
- **Functionality**: Fixes document corruption when the DOCX skill adds tracked changes to documents that already have bookmarks. Root cause is a shared ID space in OOXML.
- **Discussion highlights**: Identifies a real corruption bug in the DOCX skill. The fix uses dynamic ID generation instead of hardcoded low IDs.
- **Status**: Open since 2026-03-06, last updated 2026-04-16. [PR link](https://github.com/anthropics/skills/pull/541)

**#539 — fix(skill-creator): warn on unquoted description with YAML special characters**
- **Functionality**: Adds pre-parse validation in quick_validate.py to detect unquoted `description` fields containing `:` — prevents silent YAML parsing failures.
- **Discussion highlights**: A defensive fix for the skill-creator tool itself, catching a common authoring mistake before it produces broken skills.
- **Status**: Open since 2026-03-06, last updated 2026-04-16. [PR link](https://github.com/anthropics/skills/pull/539)

---

## 2. Community Demand Clusters

From 50 Issues (sorted by comments), the following unmet workflow demands emerge. Grouped into clusters; no single cluster is dominant enough to call a trend.

### Skill Discovery & Sharing
- **#228** (9 comments, 7 👍): Users want org-wide skill sharing without manual file transfer via Slack/Teams. Requests a shared skill library or direct sharing link. [Issue link](https://github.com/anthropics/skills/issues/228)
- **#202** (8 comments, 1 👍): The skill-creator skill itself is criticized as reading "like developer documentation" rather than an operational skill, undermining token efficiency. [Issue link](https://github.com/anthropics/skills/issues/202)

### Evaluation Infrastructure
- **#556** (6 comments, 6 👍): `run_eval.py`'s `claude -p` command never triggers skills — 0% trigger rate across all test queries — rendering the evaluation pipeline non-functional. [Issue link](https://github.com/anthropics/skills/issues/556)
- **#532** (2 comments, 1 👍): The skill-creator description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users who lack API keys. [Issue link](https://github.com/anthropics/skills/issues/532)

### Security & Trust Boundaries
- **#492** (4 comments, 2 👍): Community skills distributed under the `anthropic/` GitHub namespace create a trust boundary vulnerability — users may grant elevated permissions to skills they mistake for official Anthropic offerings. [Issue link](https://github.com/anthropics/skills/issues/492)

### Enterprise / SSO Integration
- **#29** (4 comments): Users cannot make skills work with AWS Bedrock. [Issue link](https://github.com/anthropics/skills/issues/29)
- **#532** (also in Evaluation above) — the API key requirement blocks enterprise SSO users.

### Plugin Loading Issues
- **#189** (6 comments, 8 👍): The `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in Claude Code's context window. [Issue link](https://github.com/anthropics/skills/issues/189)
- **#1087** (2 comments, 1 👍): The `document-skills` plugin loads all 17 repo skills instead of only the 4 declared in `marketplace.json`. [Issue link](https://github.com/anthropics/skills/issues/1087)

### Platform Stability
- **#62** (10 comments, 1 👍): A user's 12 skills disappeared; likely related to file renaming in the Downloads folder. [Issue link](https://github.com/anthropics/skills/issues/62)
- **#406** (2 comments, 4 👍): Users report an internal server error preventing skill upload/replacement. [Issue link](https://github.com/anthropics/skills/issues/406)

---

## 3. Active Pending Skills

All PRs listed in the Top Skills Ranking section above remain open. Below are additional open PRs with observable activity but not among the top by comment count:

- **#723 — feat: add testing-patterns skill**: Covers the full testing stack (Testing Trophy model, unit testing AAA pattern, React Testing Library, mocking strategies, E2E). Open since 2026-03-22, last updated 2026-04-21. [PR link](https://github.com/anthropics/skills/pull/723)
- **#509 — docs: add CONTRIBUTING.md**: Adds a CONTRIBUTING.md to address a community health gap (repo scored 25% on GitHub's health metrics). Closes Issue #452. Open since 2026-03-03, last updated 2026-03-19. [PR link](https://github.com/anthropics/skills/pull/509)
- **#360 — Added AppDeploy skill for deploying full-stack webapps**: Enables Claude to deploy and manage web apps to a public URL via AppDeploy.ai. Open since 2026-02-09, last updated 2026-05-04. [PR link](https://github.com/anthropics/skills/pull/360)
- **#568 — feat: add ServiceNow platform skill**: Covers ITSM, ITOM, ITAM, SAM Pro, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub. Open since 2026-03-08, last updated 2026-04-23. [PR link](https://github.com/anthropics/skills/pull/568)
- **#444 — feat: add AURELION skill suite (kernel, advisor, agent, memory)**: Four skills from the AURELION ecosystem for professional knowledge management and AI collaboration. Open since 2026-02-21, last updated 2026-05-06. [PR link](https://github.com/anthropics/skills/pull/444)

---

## 4. Daily Notes

1. **Document generation and quality control dominate today's PR activity.** Four of the top seven PRs (document-typography, ODT, PDF case-sensitivity fix, DOCX w:id fix) relate to document output. This is the highest density of thematic coverage in the dataset, driven by both new capabilities (#514, #486) and bug fixes for existing document skills (#538, #541).

2. **Evaluation infrastructure is a clear pain point but not yet a trend.** Issue #556 (0% trigger rate in `run_eval.py`) received 6 comments and 6 thumbs-up — the highest reaction count of any open issue. Combined with Issue #532 (API key requirement blocking enterprise users), the skill-creator/evaluation toolchain has multiple unresolved blockers. However, only two issues touch this topic, so calling it a trend would overstate the evidence.

3. **Plugin loading behavior is drawing scrutiny.** Two separate issues (#189 and #1087) report that plugins load more skills than declared in their marketplace manifests — one describing duplicates, the other describing excess skills. Both point to a mismatch between the plugin's declared contents and what actually loads, which undermines user control over the skills context window.