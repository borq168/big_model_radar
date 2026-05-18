# Skills Ecosystem Highlights 2026-05-18

> Generated: 2026-05-18 02:32 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-18

## 1. Top Skills Ranking

The following PRs represent the most-discussed or most-active Skills proposals based on comment activity and update frequency.

**#514 — Add document-typography skill** (OPEN, updated 2026-03-13)
Targets AI-generated document issues: orphan word wrap, widow paragraphs, numbering misalignment. Author notes these affect "every document Claude generates." Discussion centers on whether this should be a standalone skill or integrated into existing document skills.
[https://github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)

**#538 — fix(pdf): correct case-sensitive file references** (OPEN, updated 2026-04-29)
Fixes 8 case-sensitivity mismatches between SKILL.md references (`REFERENCE.md`, `FORMS.md`) and actual lowercase filenames. A maintenance fix that surfaced platform-level issues with case-sensitive filesystems.
[https://github.com/anthropics/skills/pull/538](https://github.com/anthropics/skills/pull/538)

**#486 — Add ODT skill** (OPEN, updated 2026-04-14)
Covers OpenDocument Format creation, template filling, and ODT-to-HTML conversion. Triggers include "ODT", "ODS", "ODF", "OpenDocument", and "LibreOffice document." Discussion includes scope boundaries with existing DOCX/PDF skills.
[https://github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)

**#210 — Improve frontend-design skill clarity** (OPEN, updated 2026-03-07)
Revises existing frontend-design skill for actionability. Goal is "every instruction is something Claude can actually follow within a single conversation." Reviewer feedback focuses on specificity and behavioral steering.
[https://github.com/anthropics/skills/pull/210](https://github.com/anthropics/skills/pull/210)

**#83 — Add skill-quality-analyzer and skill-security-analyzer** (OPEN, updated 2026-01-07)
Meta-skills for evaluating other skills across five dimensions (Structure & Documentation, etc.). Discussion raised questions about where meta-skills should live and whether they should be maintained by Anthropic.
[https://github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)

**#723 — feat: add testing-patterns skill** (OPEN, updated 2026-04-21)
Comprehensive testing skill covering the Testing Trophy model, AAA pattern, React component testing with Testing Library, and integration/E2E guidance. Discussion includes whether to keep this general or split by framework.
[https://github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)

**#568 — feat: add ServiceNow platform skill** (OPEN, updated 2026-04-23)
Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSDM, IntegrationHub. Discussion notes the skill is exceptionally large; maintainers asked about scope reduction.
[https://github.com/anthropics/skills/pull/568](https://github.com/anthropics/skills/pull/568)

**#360 — Added AppDeploy skill** (OPEN, updated 2026-05-04)
Enables Claude to deploy and manage web apps via AppDeploy. Covers deployment, status checks, versioning. Active discussion about credential management and how the skill handles API keys.
[https://github.com/anthropics/skills/pull/360](https://github.com/anthropics/skills/pull/360)

---

## 2. Community Demand Clusters

### Organizational Sharing and Distribution (#228, #184, #1087)
Issue #228 ("Enable org-wide skill sharing in Claude.ai") has 13 comments and 7 👍, the highest engagement of any open issue. Users want shared skill libraries or direct sharing links rather than downloading `.skill` files and uploading manually. Related issues: #184 reports `agentskills.io` is giving "too many redirects" errors; #1087 reports the `document-skills` plugin loads all 17 skills from the repo instead of the 4 declared in `marketplace.json`.

[https://github.com/anthropics/skills/issues/228](https://github.com/anthropics/skills/issues/228)
[https://github.com/anthropics/skills/issues/1087](https://github.com/anthropics/skills/issues/1087)

### Evaluation and Trigger Reliability (#556, #532)
Issue #556 ("run_eval.py: claude -p never triggers skills/commands") reports 0% trigger rate across all test queries. The eval tool creates command files but Claude never invokes `Skill` or `Read` tools. This affects skill development workflow. Issue #532 reports the skill-creator's description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users.

[https://github.com/anthropics/skills/issues/556](https://github.com/anthropics/skills/issues/556)
[https://github.com/anthropics/skills/issues/532](https://github.com/anthropics/skills/issues/532)

### Security and Trust Boundaries (#492)
Issue #492 ("Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse") has 6 comments. Users may grant elevated permissions to community skills they believe are official. The issue is still open with no maintainer resolution posted.

[https://github.com/anthropics/skills/issues/492](https://github.com/anthropics/skills/issues/492)

### Skill-Creator Quality (#202)
CLOSED issue #202 argued the `skill-creator` skill reads like developer documentation rather than an operational skill. It was closed after the skill was revised. The discussion raised broader questions about skill-writing best practices.

[https://github.com/anthropics/skills/issues/202](https://github.com/anthropics/skills/issues/202)

### Plugin Duplication (#189)
Issue #189 reports that `document-skills` and `example-skills` plugins contain identical skills, causing duplicates in Claude Code's context window. No fix has been published.

[https://github.com/anthropics/skills/issues/189](https://github.com/anthropics/skills/issues/189)

---

## 3. Active Pending Skills

**#514 — document-typography skill** (OPEN, no merged status)
Last updated March 13. Discussion focused on whether typographic fixes belong in a separate skill or should be integrated into DOCX/PDF skills. Author argues the issues are format-agnostic.

**#538 — fix(pdf): case-sensitive file references** (OPEN, no merged status)
Last updated April 29. A simple but blocking fix for users on case-sensitive filesystems (Linux, macOS with case-sensitive volumes). Waiting for maintainer review.

**#539 — fix(skill-creator): warn on unquoted description with YAML special characters** (OPEN, updated 2026-04-16)
Adds pre-parse validation in `quick_validate.py`. Discussion clarified that this addresses a class of silent YAML parsing failures. Author has made test cases available.

**#541 — fix(docx): prevent tracked change w:id collision** (OPEN, updated 2026-04-16)
Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks. Root cause is that `w:id` is a shared ID space in OOXML. Discussion includes ID generation strategies.

**#723 — testing-patterns skill** (OPEN, updated 2026-04-21)
Comprehensive and still under review. Comments ask whether React-specific guidance should be separated from general testing patterns. Author argues the unified approach is more useful.

**#568 — ServiceNow platform skill** (OPEN, updated 2026-04-23)
Large scope skill. Maintainers asked if it could be split into domain-specific sub-skills. Author argued a single broad skill is more practical for cross-domain ServiceNow workflows.

**#806 — sensory skill (macOS automation via AppleScript)** (OPEN, updated 2026-04-02)
Teaches Claude to use `osascript` for native macOS automation. Includes two-tier permission system: direct app scripting (Tier 1) vs. Accessibility permissions (Tier 2). Discussion covers permission documentation completeness.

---

## 4. Daily Notes

- **Document format skills dominate the open PR queue.** Of the top 20 PRs by comments, 6 involve document creation or manipulation (typography, PDF, ODT, DOCX). This suggests community demand for polished document output is currently outpacing skill availability for other domains.

- **The eval tooling gap is clearly surfaced.** Issue #556 documents a 0% trigger rate for skills in `run_eval.py`, and issue #532 documents an API key dependency that blocks enterprise SSO users. Together these indicate that skill testing infrastructure is a barrier to community contributions.

- **One security concern remains unaddressed.** Issue #492 (namespace impersonation) has been open for two months with no maintainer response. This is the only security-class issue in the top 15 by comments.