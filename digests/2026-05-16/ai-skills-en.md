# Skills Ecosystem Highlights 2026-05-16

> Generated: 2026-05-16 02:07 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-16

## 1. Top Skills Ranking

Based on pull request discussion volume (sorted by comments, 50 total, top 20 shown).

- **#514 – document-typography** ([PR](https://github.com/anthropics/skills/pull/514))
  *Status:* Open, last updated 2026-03-13
  *Functionality:* Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
  *Discussion highlights:* Addresses common typographic defects; high potential impact given Claude’s document output frequency.

- **#538 – fix(pdf): case-sensitive file references** ([PR](https://github.com/anthropics/skills/pull/538))
  *Status:* Open, last updated 2026-04-29
  *Functionality:* Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where uppercase references broke on case-sensitive filesystems.
  *Discussion highlights:* Simple but critical compatibility fix.

- **#486 – ODT skill** ([PR](https://github.com/anthropics/skills/pull/486))
  *Status:* Open, last updated 2026-04-14
  *Functionality:* OpenDocument text creation, template filling, and ODT-to-HTML parsing.
  *Discussion highlights:* Expands document format coverage beyond PDF/DOCX.

- **#210 – Improve frontend-design skill clarity and actionability** ([PR](https://github.com/anthropics/skills/pull/210))
  *Status:* Open, last updated 2026-03-07
  *Functionality:* Revises the existing frontend-design skill to make instructions actionable within a single conversation.
  *Discussion highlights:* Focus on instruction quality and behavioral specificity.

- **#83 – skill-quality-analyzer and skill-security-analyzer** ([PR](https://github.com/anthropics/skills/pull/83))
  *Status:* Open, last updated 2026-01-07
  *Functionality:* Meta skills that evaluate other skills across structure, documentation, security, and quality dimensions.
  *Discussion highlights:* One of the first community contributions; still awaiting merge.

- **#541 – fix(docx): prevent tracked change w:id collision** ([PR](https://github.com/anthropics/skills/pull/541))
  *Status:* Open, last updated 2026-04-16
  *Functionality:* Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks, addressing OOXML `w:id` ID space conflicts.
  *Discussion highlights:* Technical fix for a common corruption scenario.

- **#539 – fix(skill-creator): warn on unquoted YAML description** ([PR](https://github.com/anthropics/skills/pull/539))
  *Status:* Open, last updated 2026-04-16
  *Functionality:* Adds pre-parse validation to detect unquoted `description` fields containing `:` to prevent silent YAML parsing failures.
  *Discussion highlights:* Tooling improvement for skill authors.

- **#723 – testing-patterns skill** ([PR](https://github.com/anthropics/skills/pull/723))
  *Status:* Open, last updated 2026-04-21
  *Functionality:* Covers testing philosophy (Testing Trophy model), unit testing with AAA pattern, React component testing with Testing Library, integration tests, and E2E.
  *Discussion highlights:* Comprehensive skill addressing a core developer need.

## 2. Community Demand Clusters

From Issues (50 total, top 15 shown by comment count):

- **Organizational Skill Sharing**
  Issue #228 ([link](https://github.com/anthropics/skills/issues/228)) – 13 comments, 7 👍
  Users request org-wide sharing mechanisms (shared library or direct links) instead of manual `.skill` file exchange. No official response visible in the data.

- **Plugin & Installation Friction**
  Issues #189 ([link](https://github.com/anthropics/skills/issues/189), 6 comments), #1087 ([link](https://github.com/anthropics/skills/issues/1087), 2 comments)
  Duplicate skills when installing `document-skills` and `example-skills` plugins; mismatch between declared skills in `marketplace.json` and actual loaded skills (all 17 vs 4). Community expects stricter plugin boundaries.

- **Tooling Reliability**
  Issue #556 ([link](https://github.com/anthropics/skills/issues/556), 8 comments) – `run_eval.py` never triggers skills/commands, 0% trigger rate.
  Issue #202 ([link](https://github.com/anthropics/skills/issues/202), 8 comments) – `skill-creator` reads like documentation rather than operational instructions. (Closed, but referenced in fixes).
  Issue #532 ([link](https://github.com/anthropics/skills/issues/532), 2 comments) – `skill-creator`’s description optimizer requires `ANTHROPIC_API_KEY`, blocking enterprise/SSO users.

- **Security & Trust**
  Issue #492 ([link](https://github.com/anthropics/skills/issues/492), 6 comments) – Community skills distributed under the `anthropic/` namespace impersonate official skills, creating a trust boundary vulnerability.

- **Platform & Integration Requests**
  Issue #29 ([link](https://github.com/anthropics/skills/issues/29), 4 comments) – AWS Bedrock compatibility.
  Issue #16 ([link](https://github.com/anthropics/skills/issues/16), 4 comments) – Expose Skills as MCPs.

- **New Skill Proposals**
  Issue #412 ([link](https://github.com/anthropics/skills/issues/412), 4 comments) – Agent governance safety patterns. (Closed, but proposal noted.)

## 3. Active Pending Skills

PRs with ongoing discussion and no sign of imminent merge (all open).

- **#538 – fix(pdf) case-sensitive references** ([PR](https://github.com/anthropics/skills/pull/538))
  Last updated April 29. The fix is well-understood but has not been merged for nearly two months. No maintainer comments visible in the data.

- **#541 – fix(docx) w:id collision** ([PR](https://github.com/anthropics/skills/pull/541))
  Last updated April 16. Technical fix with clear root cause; discussion may be waiting on review or additional testing.

- **#539 – fix(skill-creator) YAML validation** ([PR](https://github.com/anthropics/skills/pull/539))
  Last updated April 16. Tied to the tooling issues raised in #202 and #532; given multiple related issues, this PR may receive more attention.

- **#509 – CONTRIBUTING.md** ([PR](https://github.com/anthropics/skills/pull/509))
  Last updated March 19. Addresses community health gap (25% GitHub community metrics). Low-complexity but impactful addition; still open after 2+ months.

- **#568 – ServiceNow platform skill** ([PR](https://github.com/anthropics/skills/pull/568))
  Last updated April 23. Broad enterprise platform coverage (ITSM, ITOM, SecOps, etc.). No clear blockers.

- **#444 – AURELION skill suite** ([PR](https://github.com/anthropics/skills/pull/444))
  Last updated May 6 (most recent update among pending). Four skills (kernel, advisor, agent, memory) for structured cognitive frameworks. Still under review.

## 4. Daily Notes

- Document formatting and generation skills dominate the PR list (PDF, DOCX, ODT, typography). This suggests the community places high value on output quality and compatibility with office document formats.
- Several Issues around plugin behavior (#189, #1087) and trust boundaries (#492) indicate that the skills distribution model is causing real friction for users. The plugin system may need boundary enforcement or clearer namespace labeling.
- The skill-creator toolchain has multiple unresolved issues (evaluation trigger rate at 0%, API key dependency for SSO, unquoted YAML bugs). This signals that the development tooling for skills itself requires additional polish before a large creator community can work efficiently.