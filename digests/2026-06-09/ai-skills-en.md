# Skills Ecosystem Highlights 2026-06-09

> Generated: 2026-06-09 02:12 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-09

## 1. Top Skills Ranking

**1. `servicenow` — ServiceNow platform skill**
PR #568 adds a broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub. Discussion highlights the challenge of keeping a single skill comprehensive enough for an entire platform.
*Status:* Open, last updated 2026-04-23
https://github.com/anthropics/skills/pull/568

**2. `testing-patterns` — Comprehensive testing stack skill**
PR #723 covers testing philosophy (Testing Trophy model), unit testing (AAA pattern, edge cases), React component testing with Testing Library, and E2E with Playwright. Discussion focused on breadth vs. depth tradeoffs and whether such a skill fits within the skills format.
*Status:* Open, last updated 2026-04-21
https://github.com/anthropics/skills/pull/723

**3. `odt` — OpenDocument text creation and template filling**
PR #486 adds ODT/ODS/ODF file creation, filling, reading, and conversion to HTML. Discussion centered on LibreOffice/OpenOffice integration patterns and whether the skill should also cover ODS spreadsheet operations.
*Status:* Open, last updated 2026-04-14
https://github.com/anthropics/skills/pull/486

**4. `document-typography` — Typographic quality control**
PR #514 addresses orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. The author notes these issues affect "every document Claude generates." Discussion focused on whether typography rules belong in a separate skill or should be folded into existing document skills.
*Status:* Open, last updated 2026-03-13
https://github.com/anthropics/skills/pull/514

**5. `agent-creator` — Meta-skill for task-specific agent sets**
PR #1140 implements the agent-creator meta-skill alongside fixes for multi-tool evaluation and Windows support for recalc.py. Discussion covers meta-skill architecture and evaluation pipeline reliability.
*Status:* Open, last updated 2026-06-02
https://github.com/anthropics/skills/pull/1140

**6. `n8n-builder`, `n8n-debugger` — n8n workflow skills**
PR #190 adds four production-tested community skills including n8n-builder and n8n-debugger. Discussion noted the demand for low-code/nocode workflow automation skills and how these complement existing enterprise skill offerings.
*Status:* Open, last updated 2026-05-18
https://github.com/anthropics/skills/pull/190

**7. `shodh-memory` — Persistent context for AI agents**
PR #154 implements a memory system that maintains context across conversations using proactive_context calls and structured memory content. Discussion raised questions about skill-scoped vs. agent-scoped memory and potential conflicts with other memory implementations.
*Status:* Open, last updated 2026-03-03
https://github.com/anthropics/skills/pull/154

**8. `feature-dev` — TodoWrite overwrite fix**
PR #363 fixes a bug where TodoWrite replaces the entire todo list, causing Phase 6 (Quality Review) and Phase 7 (Summary) to be skipped in the /feature-dev workflow. Discussion included edge cases for task-level todos and potential conflicts with other workflow skills.
*Status:* Open, last updated 2026-06-03
https://github.com/anthropics/skills/pull/363

---

## 2. Community Demand Clusters

**Skill Sharing and Distribution Infrastructure**
Multiple issues request better ways to share and discover skills:
- Org-wide skill sharing in Claude.ai (#228, 13 comments, 7 👍)
- Skills as MCPs for standard API exposure (#16, 4 comments)
- agentskills.io being broken with redirect errors (#184, 3 comments, 4 👍)
- Duplicate content between document-skills and example-skills plugins (#189, 6 comments, 8 👍)

https://github.com/anthropics/skills/issues/228
https://github.com/anthropics/skills/issues/16
https://github.com/anthropics/skills/issues/184
https://github.com/anthropics/skills/issues/189

**Evaluation and Optimization Pipeline Bugs**
Several issues report that `run_eval.py` and related optimization scripts produce always-false results:
- run_eval.py: 0% trigger rate across all queries (#556, 11 comments, 7 👍)
- description-optimisation loop: recall=0% on every iteration (#1169, 2 comments, 1 👍)
- run_eval.py crash on Windows subprocess pipe (#1099, corresponding PR)

https://github.com/anthropics/skills/issues/556
https://github.com/anthropics/skills/issues/1169
https://github.com/anthropics/skills/pull/1099

**Security and Trust Boundaries**
Concerns about skill distribution under the anthropic/ namespace creating trust vulnerabilities (#492, 7 comments, 2 👍). A separate issue discusses security and context window limits when handling SharePoint Online documents via agent skills (#1175, 3 comments).

https://github.com/anthropics/skills/issues/492
https://github.com/anthropics/skills/issues/1175

**Skill Packaging and Portability**
Feature request for multi-file preload/inline bundling for skills with multiple reference files (#1220, 2 comments). Question about how to maintain per-skill portability labels honestly across different environments (#1156, 2 comments).

https://github.com/anthropics/skills/issues/1220
https://github.com/anthropics/skills/issues/1156

---

## 3. Active Pending Skills

**skill-creator fixes for Windows compatibility (PR #1050, #1099)**
Two PRs address Windows-specific subprocess and encoding bugs. PR #1050 fixes `subprocess.Popen(["claude", ...])` failing with `[WinError 2]` because the Windows CLI ships as `claude.cmd`. PR #1099 fixes `run_eval.py` crash when reading from subprocess pipes on Windows. Both have active discussion about edge cases and cross-platform testing.
https://github.com/anthropics/skills/pull/1050
https://github.com/anthropics/skills/pull/1099

**DOCX tracked change ID collision fix (PR #541)**
Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks. The root cause is shared w:id space across bookmarks, tracked changes, comments, and move ranges. Discussion ongoing about best practices for ID generation in OOXML.
https://github.com/anthropics/skills/pull/541

**skill-creator YAML unquoted description validation (PR #539)**
Adds pre-parse validation to detect unquoted description fields containing colons, preventing silent YAML parsing failures. Discussion centers on whether validation should be in quick_validate.py or build into skill-creator itself.
https://github.com/anthropics/skills/pull/539

**PDF case-sensitive file reference fix (PR #538)**
Fixes 8 case-sensitivity mismatches in SKILL.md that break on case-sensitive filesystems. Simple fix with ongoing discussion about adding case-sensitivity checks to CI.
https://github.com/anthropics/skills/pull/538

---

## 4. Daily Notes

**Note 1: Bug-fix PRs now dominate the recent activity, especially around Windows compatibility and evaluation pipeline correctness.** Four of the eight most recently updated PRs (#1140, #1099, #1050, #363) address infrastructure or pipeline fixes rather than new skill content. The `run_eval.py` issues (#556, #1169) reporting 0% trigger rates suggest the skill optimization loop may not be functional for many users.

**Note 2: Community interest in enterprise platform skills is growing.** The ServiceNow skill (#568) and the SAP-RPT-1-OSS predictor skill (#181) alongside n8n workflow skills (#190) represent a cluster of enterprise-oriented contributions. These are single data points rather than a confirmed trend, but together they suggest interest in skills for specific business platforms.

**Note 3: Documentation and quality-of-life improvements are receiving sustained attention.** The CONTRIBUTING.md PR (#509), the document-typography skill (#514), and the skill-quality-analyzer meta-skill (#83) indicate the community is investing in making skills development more accessible and the output quality more consistent. No strong signal about adoption rates for these improvements is available from today's data.