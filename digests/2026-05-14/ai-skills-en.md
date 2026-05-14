# Skills Ecosystem Highlights 2026-05-14

> Generated: 2026-05-14 02:26 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-14

## 1. Top Skills Ranking

The following PRs represent the most-discussed Skill proposals and improvements in the repository currently.

**#514 — document-typography** ([link](https://github.com/anthropics/skills/pull/514))
*Functionality*: Prevents common typographic problems in AI-generated documents: orphan word wrap (1-6 words spilling onto next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.
*Discussion highlights*: Author notes these issues affect every document Claude generates and that users rarely request typographic fixes explicitly. PR targets a gap between user expectations and output quality.
*Status*: Open, created 2026-03-04, updated 2026-03-13.

**#210 — frontend-design skill clarity/actionability** ([link](https://github.com/anthropics/skills/pull/210))
*Functionality*: Revises the frontend-design skill so instructions are executable within a single conversation, with specific enough guidance to steer behavior without over-constraining.
*Discussion highlights*: Focuses on internal coherence and actionability. Author aims to solve the problem of skills reading like documentation rather than operational instructions.
*Status*: Open, created 2026-01-05, updated 2026-03-07.

**#83 — skill-quality-analyzer and skill-security-analyzer** ([link](https://github.com/anthropics/skills/pull/83))
*Functionality*: Two meta-skills added to example-skills collection. skill-quality-analyzer evaluates across five dimensions (Structure & Documentation 20%, plus others); skill-security-analyzer performs security analysis.
*Discussion highlights*: Meta-skills that analyze other skills represent a new category in the ecosystem. The five-dimension evaluation framework introduces measurable quality standards.
*Status*: Open, created 2025-11-06, updated 2026-01-07.

**#486 — ODT skill (OpenDocument text)** ([link](https://github.com/anthropics/skills/pull/486))
*Functionality*: Create, fill, read, or convert OpenDocument Format files (.odt, .ods). Triggers on mentions of 'ODT', 'ODS', 'ODF', 'OpenDocument', 'LibreOffice document', or requests for open-source/ISO standard documents.
*Discussion highlights*: Addresses a gap in document format support. ODT/ODF is an ISO standard format widely used outside Microsoft Office ecosystems.
*Status*: Open, created 2026-03-01, updated 2026-04-14.

**#723 — testing-patterns** ([link](https://github.com/anthropics/skills/pull/723))
*Functionality*: Comprehensive testing skill covering: testing philosophy (Testing Trophy model), unit testing (AAA pattern, test naming, pure functions, edge cases), React component testing (Testing Library), and what to test vs. what not to test.
*Discussion highlights*: First comprehensive testing skill in the repository. Covers both philosophy and practical patterns across the full testing stack.
*Status*: Open, created 2026-03-22, updated 2026-04-21.

**#444 — AURELION skill suite** ([link](https://github.com/anthropics/skills/pull/444))
*Functionality*: Four skills from the AURELION ecosystem: aurelion-kernel (structured thinking templates, 5-floor cognitive framework), plus advisor, agent, and memory skills for professional knowledge management.
*Discussion highlights*: A multi-skill suite rather than a single skill. Introduces a cognitive framework for structured AI agent collaboration.
*Status*: Open, created 2026-02-21, updated 2026-05-06.

**#568 — ServiceNow platform skill** ([link](https://github.com/anthropics/skills/pull/568))
*Functionality*: Covers ServiceNow platform broadly: ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, IntegrationHub, and CSDM.
*Discussion highlights*: Designed as a broad platform assistant rather than a narrow scripting helper. Very wide scope across multiple ServiceNow modules.
*Status*: Open, created 2026-03-08, updated 2026-04-23.

**#538 — fix(pdf): case-sensitive file references** ([link](https://github.com/anthropics/skills/pull/538))
*Functionality*: Fixes 8 case-sensitivity mismatches in skills/pdf/SKILL.md where REFERENCE.md and FORMS.md are referenced in uppercase but the actual files are lowercase.
*Discussion highlights*: Highlights cross-platform compatibility issues. Breaks on case-sensitive filesystems (Linux/macOS).
*Status*: Open, created 2026-03-06, updated 2026-04-29.

---

## 2. Community Demand Clusters

The following directions emerge from Issues as unmet skill or platform needs.

**Organizational skill sharing and management** (Issue #228 — 13 comments, 7 👍)
Users want to share skills within organizations directly rather than downloading .skill files and sending via Slack/Teams. A shared skill library or direct sharing link is requested.
[Issue #228](https://github.com/anthropics/skills/issues/228)

**Skill infrastructure and reliability** (Issues #62, #61, #556, #202)
Multiple users report skills disappearing, 404 errors on loading, and the evaluation tool (`run_eval.py`) not triggering skills at all (0% trigger rate across all queries). The skill-creator itself is reported as reading more like developer documentation than an operational skill.
[Issue #62](https://github.com/anthropics/skills/issues/62) | [Issue #61](https://github.com/anthropics/skills/issues/61) | [Issue #556](https://github.com/anthropics/skills/issues/556) | [Issue #202](https://github.com/anthropics/skills/issues/202)

**Security and trust boundaries** (Issue #492 — 6 comments)
Community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability. Users may grant elevated permissions to community skills they believe are official.
[Issue #492](https://github.com/anthropics/skills/issues/492)

**Plugin loading behavior** (Issues #189, #1087)
document-skills and example-skills plugins install identical content causing duplicate skills. Separately, the document-skills plugin loads all 17 skills from the repo instead of only the 4 declared in marketplace.json.
[Issue #189](https://github.com/anthropics/skills/issues/189) | [Issue #1087](https://github.com/anthropics/skills/issues/1087)

**Platform integration gaps** (Issues #29, #16, #532)
Users request skills support on AWS Bedrock, exposure of skills as MCPs, and note that skill-creator's description optimizer requires ANTHROPIC_API_KEY making it unusable for enterprise/SSO users.
[Issue #29](https://github.com/anthropics/skills/issues/29) | [Issue #16](https://github.com/anthropics/skills/issues/16) | [Issue #532](https://github.com/anthropics/skills/issues/532)

**Governance skill proposal** (Issue #412 — closed)
A proposal for an "agent-governance" skill covering policy enforcement, threat detection, trust scoring, and audit trails. Currently the skills collection covers creative, technical, and enterprise workflows but nothing focused on agent safety patterns.
[Issue #412](https://github.com/anthropics/skills/issues/412)

---

## 3. Active Pending Skills

PRs with recent updates that have not yet been merged.

**#539 — skill-creator: warn on unquoted description with YAML special characters** ([link](https://github.com/anthropics/skills/pull/539))
Adds pre-parse validation in quick_validate.py to detect unquoted `description` fields containing `:`. Prevents silent YAML parsing failures where description is truncated or split into multiple keys. Author: @Lubrsy706. Updated 2026-04-16.

**#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks** ([link](https://github.com/anthropics/skills/pull/541))
Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. Root cause: shared ID space across bookmarks, tracked changes, comments, and move ranges in OOXML. Author: @Lubrsy706. Updated 2026-04-16.

**#360 — AppDeploy skill for deploying full-stack web apps** ([link](https://github.com/anthropics/skills/pull/360))
Enables Claude to deploy and manage web apps using AppDeploy.ai. Covers deployment, lifecycle management (status checks, versioning), and environment configuration. Author: @avimak. Updated 2026-05-04.

**#806 — sensory skill: native macOS automation via AppleScript** ([link](https://github.com/anthropics/skills/pull/806))
Teaches Claude to use `osascript` (AppleScript) for native macOS automation instead of screenshot-based computer use. Two-tier permission system: Tier 1 works out of the box, Tier 2 requires Accessibility permissions. Author: @AdelElo13. Updated 2026-04-02.

**#509 — CONTRIBUTING.md** ([link](https://github.com/anthropics/skills/pull/509))
Adds CONTRIBUTING.md addressing community health metrics (repo currently scores 25% on GitHub's community health metrics). Five sections covering process, skill standards, PR guidelines, and review expectations. Author: @narenkatakam. Updated 2026-03-19.

**#512 — Pull request template** ([link](https://github.com/anthropics/skills/pull/512))
Adds lightweight .github/PULL_REQUEST_TEMPLATE.md. Companion to CONTRIBUTING.md (#509). Author: @narenkatakam. Updated 2026-03-19.

---

## 4. Daily Notes

- **Document/enterprise skills dominate the top of the PR list.** Three of the top eight most-discussed PRs target document formats or document quality (typography, ODT, PDF fixes). This suggests document generation quality and format coverage are active areas of community contribution, though this is a single-day observation.

- **Infrastructure friction is the most consistent theme across Issues.** Multiple authenticated/open issues report skills not loading, skills disappearing, duplicate installations, evaluation tools not working (0% trigger rate), and enterprise authentication blocking tooling. This cluster of reliability concerns spans October 2025 through May 2026, indicating persistent unresolved platform issues rather than transient bugs.

- **The namespace trust boundary concern (Issue #492) introduces a security dimension new to this repository's issue history.** Community skills distributed under `anthropic/` namespace may mislead users about skill provenance. No maintainer response appears in the data provided.