# Skills Ecosystem Highlights 2026-06-13

> Generated: 2026-06-13 02:35 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-13

## Top Skills Ranking

**1. skill-creator meta-skill fixes (multiple PRs)**
PRs #1298, #1140, #1099, #1050, #362, #361, #539 — The most heavily discussed cluster across the repository. Multiple contributors are independently fixing critical bugs in the skill-creator evaluation pipeline, particularly around Windows compatibility and the `run_eval.py` script consistently reporting 0% recall. PR #1298 ([link](https://github.com/anthropics/skills/pull/1298)) by @MartinCajiao is the most recent comprehensive fix, addressing Windows stream reading, trigger detection, parallel workers, and the evaluator's failure to install the eval artifact as a real skill. Current status: all open, with #1298 updated as recently as 2026-06-11.

**2. document-typography (PR #514)**
A quality-control skill for AI-generated documents targeting orphan word wrap, widow paragraphs, and numbering misalignment. Author @PGTBoos notes these are "issues every document Claude generates." The skill is notable for addressing a universal pain point in document generation. Status: open since March 2026. [Link](https://github.com/anthropics/skills/pull/514)

**3. testing-patterns (PR #723)**
Comprehensive skill covering the full testing stack: Testing Trophy philosophy, AAA pattern, React component testing, Playwright E2E, performance testing, and security testing. Added by @4444J99. Status: open since March 2026. [Link](https://github.com/anthropics/skills/pull/723)

**4. agent-creator (PR #1140)**
A meta-skill that creates task-specific agent sets. Also includes fixes for multi-tool parallel evaluation and Windows support. Author @SyedaQurratAI addresses Issue #1120. Status: open since May 2026, updated June 2. [Link](https://github.com/anthropics/skills/pull/1140)

**5. frontend-design refinement (PR #210)**
Substantive revision of an existing skill for clarity and actionability, ensuring every instruction is executable within a single conversation. Author @justinwetch. Status: open since January 2026, last updated March. [Link](https://github.com/anthropics/skills/pull/210)

**6. color-expert (PR #1302)**
Self-contained color expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912), color space selection tables, and practical color manipulation guidance. Author @meodai. Status: open since June 10, updated June 12. [Link](https://github.com/anthropics/skills/pull/1302)

---

## Community Demand Clusters

**Trust and distribution safety**
Issue #492 ("Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse") has 7 comments and documents that community-made skills in the official namespace could trick users into granting elevated permissions. This is the most substantive security discussion in the issue tracker. [Link](https://github.com/anthropics/skills/issues/492)

**Org-wide sharing and installation**
Issue #228 (14 comments, 7 👍) requests org-wide skill sharing without requiring manual file downloads and re-upload. No maintainer response visible in the data. [Link](https://github.com/anthropics/skills/issues/228)

**Windows compatibility**
Issues #1061, #556, #1169 all document the skill-creator pipeline failing on Windows. This cluster includes subprocess PATHEXT issues, cp1252 encoding, and select-based pipe handling. Multiple independent reports from different users. [Link to #1061](https://github.com/anthropics/skills/issues/1061)

**Skill duplication**
Issue #189 (6 comments, 8 👍) reports that installing both `document-skills` and `example-skills` plugins installs identical content, creating duplicates that consume context window space. [Link](https://github.com/anthropics/skills/issues/189)

**Multi-file reference loading**
Issue #1220 requests inline bundling or preloading for skills split across multiple reference files, since only `SKILL.md` is delivered to the agent's context at invocation time. [Link](https://github.com/anthropics/skills/issues/1220)

**Skill governance and safety patterns**
Issue #412 proposed an agent-governance skill for policy enforcement, threat detection, trust scoring, and audit trails. Now closed, with 4 comments. [Link](https://github.com/anthropics/skills/issues/412)

---

## Active Pending Skills

**PR #1298 — skill-creator eval pipeline overhaul (@MartinCajiao)**
The most active open PR. Addresses the well-documented `recall=0%` bug (Issue #556, Issue #1169, 10+ independent reproductions reported). Changes include: install the eval artifact as a real skill, fix Windows stream reading, fix trigger detection, fix parallel worker shutdown. Updated June 11 with active discussion. [Link](https://github.com/anthropics/skills/pull/1298)

**PR #1140 — agent-creator meta-skill (@SyedaQurratAI)**
Adds agent-creator functionality plus fixes for evaluation.py multi-tool handling and Windows recalc.py paths. References Issue #1120. Last updated June 2. [Link](https://github.com/anthropics/skills/pull/1140)

**PR #1302 — color-expert (@meodai)**
New skill, last updated June 12. Includes extensive color systems reference. No substantive discussion yet. [Link](https://github.com/anthropics/skills/pull/1302)

**PR #190 — community skills: n8n-builder, n8n-debugger, faf-expert (@Wolfe-Jam)**
Pending since December 2025, last updated May 2026. Four production-tested skills for n8n workflow development and FAF context file management. [Link](https://github.com/anthropics/skills/pull/190)

---

## Daily Notes

1. **The run_eval.py 0% recall bug is the single largest blocker in the skill-creator toolchain.** Multiple independent contributors (at least 6 different users across PRs #1298, #1099, #1050, #361, #362 and issues #556, #1169, #1061) have identified and attempted fixes for this. The root cause appears to be a combination of: the eval artifact not being properly installed as a real skill, Windows pipe handling issues, and YAML parsing edge cases. PR #1298 is the most comprehensive fix attempted so far.

2. **Windows compatibility is the most frequently reported cross-cutting issue** across both PRs and Issues. The pattern is consistent: Unix-first assumptions in subprocess handling (no `PATHEXT` resolution for `claude.cmd`), encoding assumptions (cp1252 vs UTF-8), and exclusive use of `select` on pipes (which fails on Windows). All contributors submitting Windows fixes describe the same inability to run evaluation scripts.

3. **The trust boundary issue around community skill distribution (Issue #492) has received substantive discussion but no visible maintainer response.** This is distinct from the technical bugs — it's a process/security concern about the `anthropic/` namespace being used for community contributions, and could become a governance question as the skills ecosystem grows.