# Skills Ecosystem Highlights 2026-05-26

> Generated: 2026-05-26 02:28 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-26

## 1. Top Skills Ranking

**#514 — document-typography** (PR, OPEN)
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents—common typographic issues across all Claude-generated output.
- **Discussion**: Created 2026-03-04, most recently updated 2026-03-13. Comments undefined in data but appears at top of PR list sorted by comments, indicating high engagement. Author [@PGTBoos](https://github.com/PGTBoos) frames this as fixing issues "every document Claude generates."
- **Status**: OPEN, no merge indication.
- *Link*: https://github.com/anthropics/skills/pull/514

**#486 — ODT skill** (PR, OPEN)
- **Functionality**: OpenDocument text creation, template filling, and ODT-to-HTML conversion. Covers .odt, .ods, .odf formats, triggered by mentions of "ODT", "LibreOffice document", or open-source ISO standard documents.
- **Discussion**: Created 2026-03-01, last updated 2026-04-14. Author [@GitHubNewbie0](https://github.com/GitHubNewbie0). Long open period (~75 days) suggests unresolved review.
- **Status**: OPEN.
- *Link*: https://github.com/anthropics/skills/pull/486

**#210 — Frontend-design skill improvement** (PR, OPEN)
- **Functionality**: Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Aims to make every instruction "something Claude can actually follow within a single conversation."
- **Discussion**: Created 2026-01-05, last updated 2026-03-07. Author [@justinwetch](https://github.com/justinwetch). Represents a skill *improvement* PR rather than net-new skill.
- **Status**: OPEN.
- *Link*: https://github.com/anthropics/skills/pull/210

**#83 — skill-quality-analyzer + skill-security-analyzer** (PR, OPEN)
- **Functionality**: Two meta-skills for the marketplace. `skill-quality-analyzer` evaluates skills across five dimensions (Structure & Documentation 20%, plus four others). `skill-security-analyzer` addresses security review.
- **Discussion**: Created 2025-11-06, last updated 2026-01-07. Author [@eovidiu](https://github.com/eovidiu). Notable as meta-skills (skills about skills), a small but present category.
- **Status**: OPEN.
- *Link*: https://github.com/anthropics/skills/pull/83

**#1099 — skill-creator Windows subprocess fix** (PR, OPEN)
- **Functionality**: Fixes `run_eval.py` crash on Windows where every query records as "not triggered" regardless of description being tested, producing `precision=100% recall=0%` on every iteration. Root cause is `WinError 10038` (socket operation on non-socket).
- **Discussion**: Created 2026-05-07, last updated 2026-05-24. Author [@joshuawowk](https://github.com/joshuawowk). Part of a cluster of Windows compatibility PRs (see also #1050).
- **Status**: OPEN, recently active.
- *Link*: https://github.com/anthropics/skills/pull/1099

**#538, #539, #541 — Lubrsy706 fix cluster** (PRs, OPEN)
- **Functionality**: Three fix PRs by the same author: case-sensitive file refs in PDF skill (8 occurrences), YAML special character validation in skill-creator, and DOCX tracked-change ID collision prevention fixing document corruption.
- **Discussion**: All created 2026-03-06, updated into April. The DOCX fix (#541) addresses a real corruption scenario where hardcoded `w:id` values clash with existing bookmarks.
- **Status**: All OPEN.
- *Links*: https://github.com/anthropics/skills/pull/538 , https://github.com/anthropics/skills/pull/539 , https://github.com/anthropics/skills/pull/541

**#568 — ServiceNow platform skill** (PR, OPEN)
- **Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
- **Discussion**: Created 2026-03-08, last updated 2026-04-23. Author [@Vanka07](https://github.com/Vanka07). Represents enterprise IT platform skill demand.
- **Status**: OPEN.
- *Link*: https://github.com/anthropics/skills/pull/568

---

## 2. Community Demand Clusters

**Enterprise skill sharing and distribution** (Issue #228, #492, #1087)
- Issue #228 (13 comments, 7 👍) requests org-wide skill sharing in Claude.ai without manual .skill file download and Slack forwarding.
- Issue #492 (6 comments, 2 👍) raises security concerns about community skills under the `anthropic/` namespace creating trust boundary vulnerabilities.
- Issue #1087 (2 comments, 1 👍) reports the `document-skills` plugin loads all 17 repo skills instead of only the 4 declared in `marketplace.json`.
- *Links*: https://github.com/anthropics/skills/issues/228 , https://github.com/anthropics/skills/issues/492 , https://github.com/anthropics/skills/issues/1087

**Skill developer tooling and evaluation** (Issue #556, #202, #1102)
- Issue #556 (8 comments, 6 👍): `run_eval.py` fails to trigger any skills with `claude -p`, producing 0% trigger rate.
- Issue #202 (8 comments, 1 👍, CLOSED): Skill-creator reads like developer docs, not operational skill; violates naming guidelines.
- Issue #1102 (2 comments): MCP returns excess data from databases, congesting context window.
- *Links*: https://github.com/anthropics/skills/issues/556 , https://github.com/anthropics/skills/issues/202 , https://github.com/anthropics/skills/issues/1102

**Governance, security, and access control** (Issue #412, #1175)
- Issue #412 (4 comments, CLOSED): Proposed `agent-governance` skill for safety patterns—policy enforcement, threat detection, trust scoring, audit trails.
- Issue #1175 (2 comments): Concerns about writing SharePoint Online access control logic within SKILL.md—security and context window risks.
- *Links*: https://github.com/anthropics/skills/issues/412 , https://github.com/anthropics/skills/issues/1175

**Integration and interoperability** (Issue #16, #29)
- Issue #16 (4 comments): Request to expose Skills as MCPs for standardized API signaling.
- Issue #29 (4 comments): Request for AWS Bedrock compatibility.
- *Links*: https://github.com/anthropics/skills/issues/16 , https://github.com/anthropics/skills/issues/29

---

## 3. Active Pending Skills

**#514 — document-typography** (OPEN since 2026-03-04)
- Most-commented PR in the dataset. Addresses persistent typographic defects in AI-generated documents. No maintainer merge action visible. User-facing improvement with broad applicability.
- *Link*: https://github.com/anthropics/skills/pull/514

**#486 — ODT skill** (OPEN since 2026-03-01)
- Covers a specific file format (OpenDocument) with a long open period. Unclear what blocking review remains.
- *Link*: https://github.com/anthropics/skills/pull/486

**#1099 — skill-creator Windows subprocess fix** (OPEN since 2026-05-07)
- Most recently active among open PRs (last updated 2026-05-24). Part of a Windows compatibility cluster including #1050 (also last updated 2026-05-24). Both address `run_eval.py` and `run_loop.py` on Windows 11.
- *Link*: https://github.com/anthropics/skills/pull/1099

**#1050 — skill-creator Windows encoding fix** (OPEN since 2026-04-27)
- Companion to #1099. Fixes `subprocess.Popen(["claude", ...])` failing on Windows because CLI ships as `claude.cmd` and Python's subprocess doesn't honor `PATHEXT`. Last updated same day as #1099.
- *Link*: https://github.com/anthropics/skills/pull/1050

**#723 — testing-patterns skill** (OPEN since 2026-03-22)
- Comprehensive testing skill covering the Testing Trophy model, AAA pattern, React component testing with Testing Library. Would fill a noted gap in the skills collection.
- *Link*: https://github.com/anthropics/skills/pull/723

**#444 — AURELION skill suite** (OPEN since 2026-02-21)
- Four skills from the AURELION ecosystem: kernel (structured thinking templates), advisor, agent, memory. Cognitive + memory framework for knowledge management. Last updated 2026-05-06, suggesting ongoing activity.
- *Link*: https://github.com/anthropics/skills/pull/444

---

## 4. Daily Notes

1. **Windows compatibility is an active pain point**. Three independent items today—#1099 (run_eval.py crash), #1050 (PATHEXT/claude.cmd), and Issue #556 (0% trigger rate on Windows)—all point to the skill-creator toolchain being effectively broken on Windows. These came from three different authors (joshuawowk, gstreet-ops, dthau120391), which independently corroborates the issue.

2. **Meta-skills (skills about skills) continue to appear but none have merged**. PR #83 (skill-quality-analyzer + skill-security-analyzer) has been open since November 2025. Issue #202 (skill-creator rewrite to best practice) was closed without merge. This suggests the repository maintainers may be cautious about accepting meta-skills or have unresolved design questions.

3. **Document formatting quality is a recurring theme**. Three of the top-discussed PRs (#514 document-typography, #486 ODT, #541 DOCX tracked-change fix) directly address document output quality. This is the clearest topical cluster among high-comment PRs, though the dataset is limited to 50 PRs.