# Skills Ecosystem Highlights 2026-06-07

> Generated: 2026-06-07 02:42 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-07

## 1. Top Skills Ranking

**1. document-typography** — #514 (Open)
A skill focused on typographic quality control for AI-generated documents, preventing orphan word wrap, widow paragraphs, and numbering misalignment. The summary identifies these as "issues every document Claude generates." Status: open, no merged status. The PR has been open since 2026-03-04 with no maintainer comments visible.
https://github.com/anthropics/skills/pull/514

**2. ODT skill (OpenDocument)** — #486 (Open)
Adds capability for creating, filling, reading, and converting OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, LibreOffice, or requests for open-source/ISO standard documents. Status: open since 2026-03-01, last updated 2026-04-14.
https://github.com/anthropics/skills/pull/486

**3. frontend-design improvement** — #210 (Open)
Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Goal is ensuring every instruction is executable within a single conversation. Status: open since 2026-01-05, last updated 2026-03-07.
https://github.com/anthropics/skills/pull/210

**4. skill-quality-analyzer + skill-security-analyzer** — #83 (Open)
Two meta-skills: a quality analyzer evaluating across five dimensions (Structure & Documentation, etc.) and a security analyzer. Submitted to the example-skills collection. Status: open since 2025-11-06.
https://github.com/anthropics/skills/pull/83

**5. testing-patterns** — #723 (Open)
Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern, naming, pure functions), React component testing with Testing Library, and guidance on what not to test. Status: open since 2026-03-22.
https://github.com/anthropics/skills/pull/723

**6. masonry-generate-image-and-videos** — #335 (Open)
Adds Masonry CLI skill for AI-powered image (Imagen 3.0) and video (Veo 3.1) generation, including job management. Status: open since 2026-02-04.
https://github.com/anthropics/skills/pull/335

**7. ServiceNow platform skill** — #568 (Open)
Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, SecOps, and IntegrationHub. Status: open since 2026-03-08.
https://github.com/anthropics/skills/pull/568

**8. agent-creator meta-skill** — #1140 (Open)
Adds a meta-skill for creating task-specific agent sets, alongside fixes for multi-tool evaluation and Windows support for recalc.py. Addresses Issue #1120. Status: open since 2026-05-15, most recently updated 2026-06-02.
https://github.com/anthropics/skills/pull/1140

---

## 2. Community Demand Clusters

**Governance & Security Patterns**
Issue #412 proposes an agent-governance skill for safety patterns in AI agent systems (policy enforcement, threat detection, trust scoring, audit trails). Issue #492 raises trust boundary abuse concerns about community skills distributed under the anthropic/ namespace. Issue #1175 questions how to handle SharePoint Online document security within SKILL.md files. These three issues suggest growing unease about security boundaries in the skills ecosystem.
https://github.com/anthropics/skills/issues/412
https://github.com/anthropics/skills/issues/492
https://github.com/anthropics/skills/issues/1175

**Sharing & Distribution Infrastructure**
Issue #228 requests org-wide skill sharing in Claude.ai, noting the manual download/upload friction. Issue #189 reports duplicate skills when installing both document-skills and example-skills plugins. Issue #1156 asks about maintaining per-skill portability labels honestly. Issue #16 proposes exposing Skills as MCPs for a standardized API interface.
https://github.com/anthropics/skills/issues/228
https://github.com/anthropics/skills/issues/189
https://github.com/anthropics/skills/issues/1156
https://github.com/anthropics/skills/issues/16

**Skill-Creator & Tooling Quality**
Issue #202 (closed) requests the skill-creator be updated to best practices, noting it reads like developer documentation rather than an operational skill. Issue #556 reports a 0% trigger rate bug in run_eval.py. Issue #1220 requests multi-file preload/inline bundling for skill reference files. Multiple PRs (#1099, #1050, #538, #539, #541) also fix tooling bugs, suggesting the developer experience layer needs maturation.
https://github.com/anthropics/skills/issues/202
https://github.com/anthropics/skills/issues/556
https://github.com/anthropics/skills/issues/1220

---

## 3. Active Pending Skills

**agent-creator meta-skill** — #1140 (Open, updated 2026-06-02)
Adds agent-creator for task-specific agent sets. Discussion centers on stability fixes (evaluation multi-tool handling, Windows recalc.py paths). The PR explicitly fixes Issue #1120. Status: active, last updated 3 days before report date.
https://github.com/anthropics/skills/pull/1140

**feature-dev workflow fix** — #363 (Open, updated 2026-06-03)
Fixes the TodoWrite overwrite bug causing Phase 6 (Quality Review) and Phase 7 (Summary) to be skipped. Discussion appears focused on the root cause: TodoWrite replaces the entire todo list on each call. Status: active, most recent update is the day before this report.
https://github.com/anthropics/skills/pull/363

**Windows compatibility fixes** — #1099 (Open, updated 2026-05-24) and #1050 (Open, updated 2026-05-24)
Two PRs address Windows-specific bugs in skill-creator scripts. #1099 fixes run_eval.py crashes from subprocess pipe reads. #1050 fixes subprocess.Popen failing because the CLI ships as claude.cmd (PATHEXT not honored) and encoding issues. Both describe run_eval.py as "unusable on Windows." Status: both updated 2026-05-24 with no maintainer response visible.
https://github.com/anthropics/skills/pull/1099
https://github.com/anthropics/skills/pull/1050

**Case-sensitivity and YAML fixes** — #538, #539, #541 (All open, updated 2026-04-16 to 2026-04-29)
Three small fixes: #538 corrects 8 case-sensitivity mismatches in pdf/SKILL.md. #539 adds pre-parse YAML validation to catch unquoted description fields with colons. #541 prevents DOCX tracked change ID collisions with existing bookmarks. Status: all open for 2+ months.
https://github.com/anthropics/skills/pull/538
https://github.com/anthropics/skills/pull/539
https://github.com/anthropics/skills/pull/541

---

## 4. Daily Notes

- **Evaluation tooling is a recurring pain point.** Two separate PRs (#1099, #1050) and one Issue (#556) all describe broken evaluation scripts on Windows or Linux. The run_eval.py tool reports 0% trigger rates regardless of input, and a flood of WinError 10038 messages. This suggests the skill evaluation pipeline—critical for community contributors—has reliability gaps that may discourage new skill development.

- **Governance concerns are surfacing but not yet dominant.** Three Issues (#412, #492, #1175) raise security and governance topics (agent safety patterns, trust boundary abuse from namespace impersonation, SharePoint permission logic), but no corresponding PRs have been submitted. This is a demand cluster with no supply yet.

- **Most PRs remain open and unmerged for extended periods.** Of the 50 PRs examined, none appear to have been merged. The oldest PR considered (#83) has been open since November 2025. The longest-open PR in the top 20 is #95 from November 11, 2025. This data alone cannot determine whether this reflects a slow review process, intentional design—or if the data snapshot includes only open PRs.