# Skills Ecosystem Highlights 2026-05-17

> Generated: 2026-05-17 02:11 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-17

## 1. Top Skills Ranking

The following pull requests represent the most-discussed or most-substantial Skill additions currently open in the repository, based on community engagement and scope.

### document-typography skill (#514)
- **Functionality**: Prevents orphan word wrap (1–6 words on a new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment in AI-generated documents. Aims to solve visual quality issues common across all Claude document output.
- **Discussion**: Author notes these typographic problems "affect every document Claude generates." No maintainer response visible; PR remains open since March 2026.
- **Status**: Open, no merge activity.
- **Link**: https://github.com/anthropics/skills/pull/514

### ODT skill — OpenDocument text creation and template filling (#486)
- **Functionality**: Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of ODF, LibreOffice, or OpenDocument. Addresses a gap in office format support beyond DOCX.
- **Discussion**: Covers a specific user need (open-source document formats). No maintainer comments visible.
- **Status**: Open since March 2026.
- **Link**: https://github.com/anthropics/skills/pull/486

### frontend-design skill revision (#210)
- **Functionality**: Revises the frontend-design skill to improve clarity, actionability, and internal coherence. Goal is to make every instruction something Claude can follow within a single conversation, with specific guidance to steer behavior without over-constraining.
- **Discussion**: Focuses on skill quality and usability rather than new functionality. No maintainer response.
- **Status**: Open since January 2026.
- **Link**: https://github.com/anthropics/skills/pull/210

### skill-quality-analyzer and skill-security-analyzer (#83)
- **Functionality**: Two meta-skills for evaluating other Skills. The quality analyzer scores across five dimensions (Structure & Documentation, etc.). The security analyzer presumably addresses safety patterns.
- **Discussion**: Meta-skills are a novel category in this repository. PR has been open since November 2025, suggesting either low priority or significant complexity.
- **Status**: Open for over six months.
- **Link**: https://github.com/anthropics/skills/pull/83

### testing-patterns skill (#723)
- **Functionality**: Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing with Testing Library, and guidance on what not to test.
- **Discussion**: Addresses a common developer workflow need. No maintainer response.
- **Status**: Open since March 2026.
- **Link**: https://github.com/anthropics/skills/pull/723

### ServiceNow platform skill (#568)
- **Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, and IntegrationHub. Designed as a platform-wide skill rather than narrow scripting helper.
- **Discussion**: Covers an enterprise platform with significant scope. No maintainer response.
- **Status**: Open since March 2026.
- **Link**: https://github.com/anthropics/skills/pull/568

### AURELION skill suite (kernel, advisor, agent, memory) (#444)
- **Functionality**: Four skills from the AURELION ecosystem — a structured cognitive + memory framework. Includes a 5-floor cognitive framework (kernel), advisor, agent, and memory components for professional knowledge management.
- **Discussion**: Represents a multi-skill suite. No maintainer response. PR has been open since February 2026.
- **Status**: Open.
- **Link**: https://github.com/anthropics/skills/pull/444

---

## 2. Community Demand Clusters

The following unmet needs appear across multiple Issues, though none reach strong enough evidence to call a confirmed trend.

### Enterprise and Org Sharing
- **Issue #228**: Requests org-wide skill sharing in Claude.ai, noting users currently must download .skill files and share via Slack/Teams. 7 upvotes, 13 comments.
- **Issue #532**: Notes that skill-creator's description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users.
- **Link**: https://github.com/anthropics/skills/issues/228

### Plugin Installation and Duplication Issues
- **Issue #189**: Reports that `document-skills` and `example-skills` plugins contain identical content, causing duplicate skills in Claude Code's context window. 8 upvotes.
- **Issue #1087**: Reports that `document-skills` plugin loads all 17 skills from the repo instead of only the 4 declared in `marketplace.json`.
- **Link**: https://github.com/anthropics/skills/issues/189

### Security and Trust Boundary Concerns
- **Issue #492**: Flags that community skills distributed under the `anthropic/` namespace impersonate official Anthropic skills, creating a trust boundary vulnerability. 2 upvotes, 6 comments.
- **Link**: https://github.com/anthropics/skills/issues/492

### Evaluation Infrastructure
- **Issue #556**: Reports that `run_eval.py` never triggers skills or commands — 0% trigger rate across all queries in testing. 6 upvotes, 8 comments.
- **Link**: https://github.com/anthropics/skills/issues/556

---

## 3. Active Pending Skills

These pull requests have recent activity or ongoing discussion but have not been merged.

### PDF skill — case-sensitive file references (#538)
- **Discussion**: Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Breaks on case-sensitive filesystems. Last updated April 29.
- **Status**: Open, awaiting review.
- **Link**: https://github.com/anthropics/skills/pull/538

### DOCX skill — tracked change ID collision with bookmarks (#541)
- **Discussion**: Fixes document corruption when adding tracked changes to documents with existing bookmarks. Root cause is shared `w:id` ID space in OOXML. Uses hardcoded low IDs (1, 2, 3) that conflict. Last updated April 16.
- **Status**: Open.
- **Link**: https://github.com/anthropics/skills/pull/541

### skill-creator — unquoted description YAML validation (#539)
- **Discussion**: Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing colons, which cause silent YAML parsing failures. Last updated April 16.
- **Status**: Open.
- **Link**: https://github.com/anthropics/skills/pull/539

### skill-creator — best practice update (Issue #202, CLOSED)
- **Discussion**: This issue was closed after 8 comments. The skill-creator skill was criticized as reading "like developer documentation than an operational skill" with a "verbose, educational tone [that] significantly undermines token efficiency." The PRs above (#539, #532) represent follow-on work.
- **Link**: https://github.com/anthropics/skills/issues/202

### AppDeploy skill — full-stack web app deployment (#360)
- **Discussion**: Enables Claude to deploy and manage web apps using AppDeploy. Covers deployment, lifecycle management, status checks, and versioning. Last updated May 4.
- **Status**: Open.
- **Link**: https://github.com/anthropics/skills/pull/360

### sensory skill — macOS automation via AppleScript (#806)
- **Discussion**: Teaches Claude to use `osascript` (AppleScript) for native macOS automation, with a two-tier permission system. An alternative to screenshot-based computer use. Last updated April 2.
- **Status**: Open.
- **Link**: https://github.com/anthropics/skills/pull/806

---

## 4. Daily Notes

1. **Bug fixes now outnumber new Skill proposals in recent PRs.** Of the 50 PRs examined, the most recently created ones (March 2026) include four fixes for case sensitivity, YAML parsing, DOCX corruption, and PDF references — alongside new Skills. This suggests the community is shifting attention toward reliability and compatibility issues rather than only adding new capabilities.

2. **The skill ecosystem has two unresolved infrastructure problems.** Issue #189 (duplicate skills from plugins) and Issue #1087 (plugin loading all skills instead of declared subset) both describe the same underlying problem: plugin installation does not respect `marketplace.json` filters. With 8 upvotes across these two issues, this is the most consistently reported quality problem in the current data.

3. **No clear signal on Security/Trust concerns.** Issue #492 raises the namespace impersonation problem with 2 upvotes and 6 comments, but no other Issues or PRs in this dataset independently address security boundaries. The lack of multiple, independent security reports means this cannot yet be called a trend.