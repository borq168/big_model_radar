# Skills Ecosystem Highlights 2026-05-15

> Generated: 2026-05-15 02:15 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-15

## 1. Top Skills Ranking

**#514: document-typography** — Typographic quality control for AI-generated documents. Prevents orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a universal pain point in AI document output. Discussion highlights the breadth of impact ("affects every document Claude generates"). **Status: Open**, 30+ comments.

**#210: frontend-design** — Major revision to improve clarity and actionability of the frontend-design skill. Aims to ensure every instruction is executable within a single conversation and steers behavior without ambiguity. **Status: Open**, substantial review engagement.

**#83: skill-quality-analyzer + skill-security-analyzer** — Meta-skills added to `example-skills`. Quality analyzer evaluates across five dimensions (Structure, Documentation, etc.). Security analyzer focuses on vulnerability patterns. Only meta-skills PR in the top 10. **Status: Open**, last updated January 2026.

**#723: testing-patterns** — Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), integration, and E2E testing. Detailed but has not received community review comments. **Status: Open**, last updated 2026-04-21.

**#360: AppDeploy** — Enables Claude to deploy full-stack web apps to public URLs via appdeploy.ai. Covers lifecycle management: status checks, versioning, environment configuration. A deployment-oriented skill in a collection focused on content generation. **Status: Open**, last updated 2026-05-04.

**#444: AURELION suite** — Four skills (kernel, advisor, agent, memory) implementing a structured cognitive framework for professional knowledge management. A full ecosystem PR rather than a single skill. Largest PR in terms of scope. **Status: Open**, last updated 2026-05-06.

**#806: sensory** — macOS automation via `osascript` (AppleScript). Two-tier permission system: Tier 1 works out of the box, Tier 2 requires Accessibility permissions. Positions itself as an alternative to screenshot-based computer use. **Status: Open**, last updated 2026-04-02.

**#568: ServiceNow** — Broad ServiceNow platform skill covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, and IntegrationHub. Aims to be a platform assistant rather than a scripting helper. **Status: Open**, last updated 2026-04-23.

## 2. Community Demand Clusters

**Skill sharing and distribution** — Issue #228 (13 comments) requests org-wide skill sharing in Claude.ai, describing the current workflow (download `.skill` file → Slack/Teams → manual upload) as frictionful. Issue #189 (6 comments) reports that `document-skills` and `example-skills` plugins install identical skills, causing duplicates. Issue #492 (6 comments) raises a security concern about community skills distributed under the `anthropic/` namespace impersonating official skills.

**Skill loading and reliability** — Issue #62 (10 comments) reports all user-created skills disappearing after a file rename. Issue #61 (3 comments) reports a 404 error when loading skills on Claude.ai for Team plan users. Issue #556 (8 comments) documents that `run_eval.py` fails to trigger any skills during automated testing (0% trigger rate).

**Meta-tooling and developer experience** — Issue #202 (8 comments, closed) argues the `skill-creator` skill reads like developer documentation rather than an operational skill, and violates naming guidelines. Issue #532 (2 comments, closed) reports that the skill-creator's description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users.

**Integration with broader ecosystem** — Issue #16 (4 comments) requests exposing Skills as MCPs. Issue #29 (4 comments) asks about compatibility with AWS Bedrock. Issue #1102 (2 comments) reports that MCP returns excess data, causing context congestion.

## 3. Active Pending Skills

**#514: document-typography** — Extensive discussion on the scope of typographic rules. PR has been open since March 2026 with regular maintainer activity. Community contributors have added test cases in comments.

**#538: fix(pdf) case-sensitive file references** — Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md`. Small but critical fix for case-sensitive filesystems. Maintainers have requested verification on Linux. Open since March 2026.

**#539: fix(skill-creator) YAML validation** — Adds pre-parse validation for unquoted descriptions containing `:` to prevent silent YAML parsing failures. Open since March 2026, awaiting merge.

**#541: fix(docx) tracked change ID collision** — Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks (shared `w:id` space). A root-cause fix for OOXML compatibility. Open since March 2026.

**#509: CONTRIBUTING.md** — Community health gap addressed, originated from issue #452. PR author @narenkatakam notes the repo scores 25% on GitHub's community health metrics. Open since March 2026.

**#512: Pull request template** — Companion to #509. Lightweight PR template to give contributors structure without friction. Open since March 2026.

## 4. Daily Notes

- **Infrastructure maintenance dominates recent activity.** Four of the top 10 PRs are infrastructure fixes (case sensitivity, YAML validation, ID collisions, documentation templates), not new skills. This suggests the repository is in a stabilization phase after a period of rapid skill additions.

- **No single skill category dominates submissions.** The top PRs span typography, deployment, testing, knowledge management, macOS automation, enterprise platforms, and meta-analysis. A signal that the community is exploring diverse use cases rather than converging on specific domains.

- **Plugin loading behavior is a recurring pain point.** Two separate issues (#189, #1087) report that plugins load more skills than declared in marketplace manifests. This pattern of infrastructure friction may be slowing adoption of the plugin system.