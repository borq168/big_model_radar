# Skills Ecosystem Highlights 2026-05-23

> Generated: 2026-05-23 02:10 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-23

## 1. Top Skills Ranking

The following PRs received the most community discussion and represent current areas of interest:

**#514 — Add document-typography skill** ([link](https://github.com/anthropics/skills/pull/514))
- Functionality: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
- Discussion: Author notes these issues affect "every document Claude generates." Users rarely request typographic fixes explicitly, making this a proactive quality-control skill. Still open with comments as of March 13.

**#486 — Add ODT skill** ([link](https://github.com/anthropics/skills/pull/486))
- Functionality: Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on mentions of "ODT," "ODS," "LibreOffice document," or requests for ISO-standard document formats.
- Discussion: Appeals to users in open-source and enterprise environments where ODF is mandated. Last updated April 14.

**#723 — Add testing-patterns skill** ([link](https://github.com/anthropics/skills/pull/723))
- Functionality: Covers full testing stack including Testing Trophy philosophy, AAA pattern, React component testing (Testing Library), end-to-end tests with Playwright/Cypress, and visual/accessibility testing.
- Discussion: Broad scope covering both philosophy and concrete patterns. Last updated April 21.

**#568 — Add ServiceNow platform skill** ([link](https://github.com/anthropics/skills/pull/568))
- Functionality: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.
- Discussion: Described as a "broad platform assistant" rather than a narrow scripting helper. Updated April 23.

**#360 — Add AppDeploy skill** ([link](https://github.com/anthropics/skills/pull/360))
- Functionality: Enables Claude to deploy and manage full-stack web apps using AppDeploy. Includes lifecycle management, status checks, and versioning.
- Discussion: Links Claude to a third-party deployment service. Last updated May 4.

**#444 — Add AURELION skill suite** ([link](https://github.com/anthropics/skills/pull/444))
- Functionality: Four skills from the AURELION ecosystem: kernel (structured thinking templates), advisor (consulting methodology), agent (memory orchestration), and memory (persistent context).
- Discussion: A multi-skill submission covering cognitive frameworks and memory management. Updated May 6.

**#806 — Add sensory skill for macOS automation** ([link](https://github.com/anthropics/skills/pull/806))
- Functionality: Teaches Claude to use `osascript` (AppleScript) for native macOS automation. Two-tier permission system: Tier 1 works without Accessibility permissions.
- Discussion: Positions AppleScript-based automation as an alternative to screenshot-based computer use. Updated April 2.

---

## 2. Community Demand Clusters

The following unmet workflow needs emerge from Issues:

**Sharing & collaboration infrastructure** (Issue #228, 13 comments, 7 👍)
- Users want org-wide skill sharing without manual .skill file distribution via Slack/Teams. A shared skill library or direct sharing link is requested. No official response visible in the data.

**Reliability & trust concerns** (Issues #62, #492, #189, #1087)
- Skills disappearing after file renaming (#62, 10 comments).
- Community skills distributed under the `anthropic/` namespace creating trust boundary vulnerabilities (#492, 6 comments, 2 👍).
- Plugin installation loading duplicate skills (#189, 6 comments, 8 👍) and loading undeclared skills (#1087, 2 comments).

**Evaluation & tooling bugs** (Issue #556, 8 comments, 6 👍)
- `run_eval.py` reports 0% skill trigger rate across all queries. The `claude -p` command never invokes Skill or Read tools, making automated skill evaluation non-functional.

---

## 3. Active Pending Skills

Several PRs remain open with ongoing discussion:

**#568 — ServiceNow platform skill** ([link](https://github.com/anthropics/skills/pull/568))
- Status: Open since March 8, most recently updated April 23. Broad platform coverage with 10+ sub-domains. Discussion focuses on scope boundaries.

**#539 — YAML validation fix for skill-creator** ([link](https://github.com/anthropics/skills/pull/539))
- Status: Open since March 6, updated April 16. Adds pre-parse validation to detect unquoted description fields containing colons, preventing silent YAML parsing failures.

**#541 — DOCX tracked change ID collision fix** ([link](https://github.com/anthropics/skills/pull/541))
- Status: Open since March 6, updated April 16. Fixes document corruption when `w:id` values for tracked changes collide with existing bookmark IDs in OOXML documents.

**#360 — AppDeploy skill** ([link](https://github.com/anthropics/skills/pull/360))
- Status: Open since February 9, most recently updated May 4. Discussion covers deployment reliability and third-party dependency management.

**#486 — ODT skill** ([link](https://github.com/anthropics/skills/pull/486))
- Status: Open since March 1, updated April 14. Discussion includes ODF template filling and format conversion edge cases.

**#444 — AURELION skill suite** ([link](https://github.com/anthropics/skills/pull/444))
- Status: Open since February 21, updated May 6. Multi-skill submission with cognitive and memory frameworks. Discussion on integration with existing skill categories.

---

## 4. Daily Notes

- **Enterprise/document workflow skills dominate recent PR activity.** Of the top 20 PRs, at least 8 involve document creation, typography, format conversion, or enterprise platform integration (ServiceNow, ODT, DOCX fixes, typography). This suggests community focus on production-quality output rather than developer tooling alone.
- **The gap between what PRs propose and what Issues request is widening.** PRs add new capabilities (ServiceNow, AURELION, sensory automation) while Issues ask for fundamental reliability fixes (skills disappearing, duplicate loading, evaluation broken). The seven PRs from user `@Lubrsy706` all focus on bug fixes and validation — a counter-signal focused on quality rather than scope expansion.
- **No clear signal on skill distribution mechanism changes.** Issue #228's request for org-wide sharing has 7 👍 and 13 comments but no maintainer response visible in the data. The community is asking for sharing infrastructure, but the repo's current direction appears focused on individual skill development and bug fixing.