# Skills Ecosystem Highlights 2026-05-19

> Generated: 2026-05-19 02:31 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-19

## Top Skills Ranking

The most-discussed Skill PRs (by comment activity) are:

1. **[document-typography skill](https://github.com/anthropics/skills/pull/514)** — Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Discussion focuses on the pervasiveness of these issues across Claude outputs. **Status:** Open.

2. **[ODT skill](https://github.com/anthropics/skills/pull/486)** — Creates, fills, reads, and converts OpenDocument files (.odt, .ods). Triggers on mentions of LibreOffice/ISO-standard formats. **Status:** Open, with recent activity (last updated Apr 14).

3. **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** — Revises the existing skill for clarity and actionability, ensuring every instruction is followable within a single conversation. **Status:** Open, multiple updates.

4. **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — Two meta-skills for evaluating Skills across five dimensions (structure, documentation, quality) and security patterns. **Status:** Open, no recent activity since Jan 2026.

5. **[fix(pdf): case-sensitive file references](https://github.com/anthropics/skills/pull/538)** — Fixes 8 case mismatches in `SKILL.md` that break on case-sensitive file systems. **Status:** Open, with ongoing review (last updated Apr 29).

6. **[fix(skill-creator): warn on unquoted description](https://github.com/anthropics/skills/pull/539)** — Adds YAML pre-parse validation to detect unquoted `description` fields containing `:`. Prevents silent truncation. **Status:** Open, last updated Apr 16.

7. **[fix(docx): prevent tracked change ID collision](https://github.com/anthropics/skills/pull/541)** — Fixes document corruption when `w:id` values conflict with existing bookmarks. **Status:** Open, last updated Apr 16.

8. **[SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)** — Uses SAP’s open-source tabular foundation model for predictive analytics on SAP business data. **Status:** Open, with updates into March 2026.

## Community Demand Clusters

From the top Issues (by comment count), the following unmet workflow demands emerge:

- **Organizational Sharing & Platform Integration** (Issues #228, #16, #1087) — Users request org-wide skill libraries (#228, 13 comments, 7 👍), MCP exposure for Skills (#16, 4 comments), and report that plugins load all skills instead of declared subsets (#1087, 2 comments).
- **Trust & Security Boundaries** (Issue #492, 6 comments) — Community skills distributed under the `anthropic/` namespace create a trust vulnerability; users may grant elevated permissions to unofficial skills.
- **Skill-Creator Tooling Gaps** (Issues #202, #532, #556) — The skill-creator skill reads like human documentation (#202, closed), requires `ANTHROPIC_API_KEY` (blocking enterprise SSO users, #532), and its eval script (`run_eval.py`) fails to trigger skills (#556, 8 comments, 6 👍).
- **Proposal: Agent Governance** (Issue #412, 4 comments) — A skill for AI agent safety patterns (policy enforcement, threat detection, audit trails) was proposed but remains unimplemented.

## Active Pending Skills

Several open PRs accumulate threaded discussion without being merged:

- **[document-typography](https://github.com/anthropics/skills/pull/514)** — Ongoing refinement of typographic rules; last updated mid-March.
- **[ODT skill](https://github.com/anthropics/skills/pull/486)** — Active through April with template-filling and HTML conversion coverage.
- **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** — Discussion around integration details and model usage continues.
- **[ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** — Broad coverage of ITSM, ITOM, SecOps, and IntegrationHub; last updated Apr 23.
- **[AURELION skill suite](https://github.com/anthropics/skills/pull/444)** — Four skills (kernel, advisor, agent, memory) for cognitive frameworks; discussion spans architecture and naming.
- **[AppDeploy skill](https://github.com/anthropics/skills/pull/360)** — Enables full-stack web app deployment from Claude; last updated May 4.

None of these appear to have maintainer decisions on merging; all remain open with intermittent updates.

## Daily Notes

- **Format quality and document generation dominate PR activity.** Four of the top eight PRs (document-typography, ODT, PDF fix, DOCX fix) directly address document production quality, indicating strong community interest in polished, standards-compliant output.
- **Infrastructure-level pain points are the most-commented Issues.** Org sharing (#228, 13 comments), eval failures (#556, 8 comments), and platform integration (#16, #1087) collectively receive more discussion than any single new skill proposal.
- **Meta-skills for quality and security assessment have been proposed but stalled.** PR #83 (skill-quality-analyzer) has not seen updates since January, and security concerns around namespace trust (#492) remain unresolved.