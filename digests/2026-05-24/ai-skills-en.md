# Skills Ecosystem Highlights 2026-05-24

> Generated: 2026-05-24 02:29 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-24

**Data source:** github.com/anthropics/skills | **Snapshot:** 2026-05-24

---

## 1. Top Skills Ranking

The following Pull Requests show the most community discussion this cycle. All remain **open** as of today.

### #514 — document-typography skill
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a class of typographic issues that "affect every document Claude generates."
**Discussion highlights:** The PR has attracted ongoing comments through March 2026. The author frames this as a quality-of-life improvement for all document outputs, not a niche use case.
**Status:** Open, last updated 2026-03-13
🔗 https://github.com/anthropics/skills/pull/514

### #486 — ODT skill (OpenDocument text creation and template filling)
**Functionality:** Creates, fills, reads, and converts .odt/.ods files. Triggers on mentions of ODT, ODS, LibreOffice, or requests for ISO-standard documents.
**Discussion highlights:** Discussion spans March–April 2026. The skill addresses a gap for open-source document format support in the skills ecosystem.
**Status:** Open, last updated 2026-04-14
🔗 https://github.com/anthropics/skills/pull/486

### #210 — Improve frontend-design skill clarity and actionability
**Functionality:** Revises the existing frontend-design skill to ensure every instruction is executable within a single conversation, with specific behavioral guidance.
**Discussion highlights:** Discussion active through March 2026. Focus is on making skill instructions actionable rather than theoretical — a recurring theme in skill quality conversations.
**Status:** Open, last updated 2026-03-07
🔗 https://github.com/anthropics/skills/pull/210

### #83 — skill-quality-analyzer and skill-security-analyzer (meta skills)
**Functionality:** Two meta-skills: one evaluates skill quality across five dimensions (structure, documentation, examples, resource usage, best practices); the other scans for security issues (prompt injection, command execution, dangerous permissions).
**Discussion highlights:** Active discussion November 2025–January 2026. These are meta-tools for the ecosystem itself, reflecting community concern about skill quality and safety.
**Status:** Open, last updated 2026-01-07
🔗 https://github.com/anthropics/skills/pull/83

### #568 — ServiceNow platform skill
**Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.
**Discussion highlights:** Comments from March–April 2026. The skill is unusually broad for a single skill — covering an entire enterprise platform rather than a narrow workflow.
**Status:** Open, last updated 2026-04-23
🔗 https://github.com/anthropics/skills/pull/568

### #806 — sensory skill (macOS automation via AppleScript)
**Functionality:** Teaches Claude to use `osascript` for native macOS automation. Two-tier permission system: Tier 1 (direct app scripting, no extra permissions), Tier 2 (System Events UI automation requiring Accessibility permissions).
**Discussion highlights:** Active March–April 2026. Addresses the limitation of screenshot-based computer use by offering a native automation path.
**Status:** Open, last updated 2026-04-02
🔗 https://github.com/anthropics/skills/pull/806

### #723 — testing-patterns skill
**Functionality:** Covers full testing stack: Testing Trophy model, unit testing (AAA pattern, naming, edge cases), React component testing with Testing Library, E2E testing with Playwright/Cypress, and CI integration.
**Discussion highlights:** Comment period March–April 2026. Addresses a gap in testing methodology guidance.
**Status:** Open, last updated 2026-04-21
🔗 https://github.com/anthropics/skills/pull/723

---

## 2. Community Demand Clusters

From Issues (50 total), the following unmet workflow needs appear with multiple mentions:

### Organizational skill sharing and management
- **Issue #228** (13 comments, 👍7): "Enable org-wide skill sharing in Claude.ai" — users must currently download .skill files and share manually via Slack/Teams; requests a shared skill library or direct sharing link.
- **Issue #62** (10 comments): Skills disappeared after file rename in Downloads folder; user lost 12 skills.
- **Issue #61** (3 comments): 404 error when loading skills on Claude.ai Team plan.

**Signal:** Multiple users reporting friction in skill management and distribution within teams.

### Skill security and trust boundaries
- **Issue #492** (6 comments, 👍2): Community skills under the `anthropic/` namespace create a trust boundary vulnerability; users may grant elevated permissions to skills they believe are official.
- **Issue #412** (4 comments, now closed): Proposal for an `agent-governance` skill covering safety patterns — policy enforcement, threat detection, trust scoring, audit trails.
- **Issue #1175** (2 comments): Concerns about security and context window when handling SharePoint Online documents via Agent Skills.

**Signal:** Security concerns appear across multiple dimensions — namespace trust, governance patterns, and data handling.

### Plugin/skill loading and duplication
- **Issue #189** (6 comments, 👍8): `document-skills` and `example-skills` plugins install identical content, causing duplicate skills in Claude Code's context window.
- **Issue #1087** (2 comments, 👍1): `document-skills` plugin loads all 17 skills from repo instead of only the 4 declared in `marketplace.json`.
- **Issue #184** (3 comments, 👍4): `agentskills.io` page returns "too many redirects" error (now closed).

**Signal:** Users are encountering reliability and content organization issues with the plugin distribution system.

### Integration with external platforms
- **Issue #29** (4 comments): "Usage with Bedrock" — asking how to make skills work with AWS Bedrock.
- **Issue #16** (4 comments): "Expose Skills as MCPs" — proposes standardizing skill capabilities as MCP tools.
- **Issue #1102** (2 comments): MCP returns excess data — concern about context window congestion from uncompressible MCP responses.

**Signal:** Interest in using skills outside Claude's native environments (Bedrock, MCP protocol) continues.

---

## 3. Active Pending Skills

These PRs have recent comment activity and remain unmerged.

### #514 — document-typography skill
**Discussion:** Last updated March 13, 2026. Community feedback focuses on the breadth of typographic issues covered. No maintainer merge indication visible.
**Status:** Open, 0 comments shown in data but listed among top commented PRs
🔗 https://github.com/anthropics/skills/pull/514

### #538 — fix(pdf): case-sensitive file references in SKILL.md
**Discussion:** 8 case-sensitivity mismatches fixed (REFERENCE.md → reference.md, FORMS.md → forms.md). Last updated April 29, 2026. Simple bugfix PR — the actual files are lowercase but SKILL.md references them uppercase, breaking on case-sensitive filesystems.
**Status:** Open, last updated 2026-04-29
🔗 https://github.com/anthropics/skills/pull/538

### #539 — fix(skill-creator): warn on unquoted YAML description
**Discussion:** Pre-parse validation to detect unquoted `description` fields containing `:`, which cause silent YAML parsing failures. Last updated April 16, 2026. Impact on new skill authors.
**Status:** Open, last updated 2026-04-16
🔗 https://github.com/anthropics/skills/pull/539

### #541 — fix(docx): prevent tracked change w:id collision
**Discussion:** Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks. Root cause: `w:id` is a shared ID space across bookmarks, tracked changes, comments. Last updated April 16, 2026.
**Status:** Open, last updated 2026-04-16
🔗 https://github.com/anthropics/skills/pull/541

### #723 — testing-patterns skill (see Section 1)
🔗 https://github.com/anthropics/skills/pull/723

### #806 — sensory skill / macOS AppleScript (see Section 1)
🔗 https://github.com/anthropics/skills/pull/806

---

## 4. Daily Notes

1. **Document quality skills dominate new PRs.** Of the top 20 PRs by comments, at least 5 are directly about document generation or document format handling (typography #514, ODT #486, DOCX fix #541, PDF case-sensitivity #538, document-skills system documentation #95). This suggests the community sees document output quality as a primary gap in current skill capabilities.

2. **Plugin distribution mechanics are a recurring source of Issues.** Issues #189 (duplicate skills from two plugins), #1087 (loading all skills instead of declared subset), and #184 (agentskills.io redirect error) all point to infrastructure friction in how skills are packaged and served. No strong conclusion on root cause — could be separate bugs or a systemic pattern.

3. **Meta-skills and quality tooling are being proposed but not yet merged.** The skill-quality-analyzer (#83) and skill-security-analyzer (#83) PRs, along with Issue #202 (skill-creator should be updated to best practice) and Issue #412 (agent-governance proposal), indicate community desire for quality and safety infrastructure. These proposals remain open with no clear merging signal.