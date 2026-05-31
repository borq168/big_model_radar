# Skills Ecosystem Highlights 2026-05-31

> Generated: 2026-05-31 02:38 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights — 2026-05-31

## 1. Top Skills Ranking

The following Pull Requests represent the most-discussed Skill additions based on comment activity and substantive review engagement:

**#514 — Add document-typography skill** ([link](https://github.com/anthropics/skills/pull/514))
A quality-control skill targeting three common typographic defects in AI-generated documents: orphan word wrap (1–6 words on a new line), widow paragraph headers stranded at page bottoms, and numbering misalignment. The authors note these issues "affect every document Claude generates." Discussion centers on whether the skill should be integrated into existing document skills versus kept separate. *Status: Open, last updated 2026-03-13.*

**#486 — Add ODT skill** ([link](https://github.com/anthropics/skills/pull/486))
Adds support for OpenDocument Format (.odt, .ods) creation, template filling, and conversion to HTML. Triggers on mentions of "ODT", "ODS", "ODF", "OpenDocument", or "LibreOffice document." Discussion touches on ISO standard compliance and handling of complex formatting across LibreOffice and Microsoft Office interop. *Status: Open, last updated 2026-04-14.*

**#181 — Add SAP-RPT-1-OSS predictor skill** ([link](https://github.com/anthropics/skills/pull/181))
Wraps SAP's open-source tabular foundation model (Apache 2.0, released at SAP TechEd 2025) for predictive analytics on SAP business data. The skill handles data preparation, model inference, and interpretation of results. Early feedback requests clearer documentation on required SAP system access permissions. *Status: Open, last updated 2026-03-16.*

**#723 — Add testing-patterns skill** ([link](https://github.com/anthropics/skills/pull/723))
Comprehensive testing skill covering the full stack: testing philosophy (Testing Trophy model), AAA pattern for unit tests, React component testing with Testing Library, plus guidance on what to test versus what to skip. Reviewers have suggested adding end-to-end (E2E) testing examples. *Status: Open, last updated 2026-04-21.*

**#444 — Add AURELION skill suite** ([link](https://github.com/anthropics/skills/pull/444))
Four skills from the AURELION ecosystem: kernel (structured thinking templates with 5-floor cognitive framework), advisor (prompt engineering agent), agent (autonomous task executor), and memory (conversation persistence). Discussion focuses on whether this should be one skill or four, and potential overlap with existing memory/context skills. *Status: Open, last updated 2026-05-06.*

**#568 — Add ServiceNow platform skill** ([link](https://github.com/anthropics/skills/pull/568))
Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub. Distinguishes itself from narrow scripting helpers by targeting platform-wide guidance. *Status: Open, last updated 2026-04-23.*

**#147 — Add codebase-inventory-audit skill** ([link](https://github.com/anthropics/skills/pull/147))
Systematic 10-step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat, producing a CODEBASE-STATUS.md summary. Reviewers have requested examples of output format and guidance on large-repo performance. *Status: Open, last updated 2026-02-04.*

---

## 2. Community Demand Clusters

From 50 Issues examined, the following unmet workflow directions received multiple mentions:

**Skill sharing and distribution infrastructure**
Issues #228, #189, #1087, and #1220 all request better mechanisms for sharing skills across teams and controlling which skills are installed. #228 requests org-wide sharing in Claude.ai without manual file transfer. #189 and #1087 document that plugins install duplicate or excessive skills beyond what is declared in marketplace.json. #1220 asks for multi-file preload/bundling for skill reference files instead of depending on SKILL.md alone.

**Plugin and evaluation tooling reliability**
Issues #202, #556, and #1099 concern the skill-creator tooling. #202 (closed) called for skill-creator to be rewritten as an operational skill rather than developer documentation. #556 documents that `run_eval.py` reports 0% trigger rates across all queries—linked to the same subprocess behavior addressed in PR #1099. Discussion across these issues suggests the evaluation pipeline is the highest-friction point for skill authors.

**Security and governance**
Issue #492 raises that community skills under the `anthropic/` namespace create a trust boundary vulnerability where users may grant elevated permissions to unofficial skills. Issue #1175 asks about security patterns for handling SharePoint Online documents via skills, specifically around embedding access control logic in SKILL.md. Issue #412 (closed) proposed a dedicated agent-governance skill for safety patterns. These three issues share a concern about skill-level authorization but do not propose a unified solution.

---

## 3. Active Pending Skills

Pull Requests with recent comment activity and substantive unresolved discussion:

**#1099 — skill-creator: Windows subprocess pipe fix** ([link](https://github.com/anthropics/skills/pull/1099))
Fixes `run_eval.py` being unusable on Windows where every query records as "not triggered," producing `precision=100% recall=0%` on every optimization iteration. Root cause is a `[WinError 10038]` on pipe reads. Discussion includes testing protocol on multiple Windows versions. Last updated 2026-05-24.

**#1050 — skill-creator: two Windows compatibility fixes** ([link](https://github.com/anthropics/skills/pull/1050))
Two one-line fixes: patching `subprocess.Popen` to honor Windows `PATHEXT` for `claude.cmd`, and fixing an encoding issue. Partially overlaps with #1099 but addresses a slightly different failure mode. Last updated 2026-05-24.

**#190 — Add n8n-builder, n8n-debugger, and other community skills** ([link](https://github.com/anthropics/skills/pull/190))
Adds four skills including n8n workflow builder, n8n debugger, faf-expert (for Foundational AI-context Format), and project context management. Discussion has focused on whether bundling four unrelated skills in one PR is appropriate versus splitting. Last updated 2026-05-18.

**#538, #539, #541 — Case sensitivity, YAML validation, and DOCX ID collision fixes** ([links](https://github.com/anthropics/skills/pull/538), [see #539](https://github.com/anthropics/skills/pull/539), [see #541](https://github.com/anthropics/skills/pull/541))
Three focused fixes by @Lubrsy706: (a) 8 case-sensitivity mismatches in the PDF skill that break on Linux file systems; (b) pre-parse YAML validation for unquoted descriptions containing colons; (c) preventing DOCX corruption from `w:id` collisions when adding tracked changes to documents with existing bookmarks. Still open with no objections. Last updated 2026-04-16 to 2026-04-29.

---

## 4. Daily Notes

- **Windows tooling issues are the most active topic today.** Four of the top 15 Issues and two of the most recently updated PRs (#1099, #1050) relate to Windows compatibility bugs in skill-creator and run_eval.py. This is a clear signal that the development toolchain has gaps on non-macOS platforms, and skill authors on Windows are experiencing blocked workflows.

- **Enterprise platform skills continue to be submitted.** The addition of ServiceNow (#568), SAP-RPT-1-OSS (#181), and n8n workflow (#190) skills suggests ongoing community interest in wrapping enterprise SaaS platforms as Claude skills. No evidence yet of adoption metrics, but the rate of submission in this category has been consistent for the past several months.

- **Skill distribution remains an unresolved pain point.** Issues #228, #189, and #1087 all describe problems with how skills reach end users—whether through org sharing, plugin loading, or multi-file reference handling. No single Issue or PR proposes a comprehensive solution; discussion is fragmented across these separate problems.