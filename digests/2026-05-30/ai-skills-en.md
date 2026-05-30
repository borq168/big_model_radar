# Skills Ecosystem Highlights 2026-05-30

> Generated: 2026-05-30 02:13 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report
**Date**: 2026-05-30
**Source**: github.com/anthropics/skills (50 PRs, 50 Issues analyzed)

---

## 1. Top Skills Ranking

The following Skills (PRs) received the most community discussion and activity:

1. **Add document-typography skill** (#514) — Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Discussion highlights: addresses a universal pain point across all Claude-generated documents. **Status**: Open, no maintainer response visible.

2. **Add ODT skill** (#486) — OpenDocument text creation, template filling, and ODT-to-HTML conversion. Discussion highlights: community interest in ISO standard document format support, LibreOffice ecosystem. **Status**: Open since March 2026.

3. **Improve frontend-design skill clarity** (#210) — Revises existing skill to improve actionability and internal coherence for single-conversation use. Discussion highlights: focus on making skill instructions executable rather than educational. **Status**: Open, updated March 2026.

4. **Add skill-quality-analyzer and skill-security-analyzer** (#83) — Meta-skills for evaluating and auditing other skills across structure, documentation, and security dimensions. Discussion highlights: first meta-skills proposed for the ecosystem; addresses quality assurance gap. **Status**: Open since November 2025.

5. **fix(pdf): correct case-sensitive file references** (#538) — Fixes 8 case-sensitivity mismatches in SKILL.md that break on Linux. Discussion highlights: reveals underlying assumption of case-insensitive filesystem (macOS/Windows). **Status**: Open.

6. **fix(skill-creator): warn on unquoted description with YAML special characters** (#539) — Pre-validation in quick_validate.py to catch unquoted descriptions containing colons. Discussion highlights: addresses silent YAML parsing failures that truncate skill descriptions. **Status**: Open.

7. **add AURELION skill suite** (#444) — Four skills implementing a structured cognitive framework (kernel, advisor, agent, memory). Discussion highlights: complex multi-skill submission; represents professional knowledge management use case. **Status**: Open, updated May 2026.

---

## 2. Community Demand Clusters

From Issues, the following recurring unmet workflow demands emerge:

**Skill sharing and distribution**
- #228 (13 comments): Request for org-wide skill sharing without manual .skill file transfer. 7 upvotes.
- #189 (6 comments): Plugin installer loads duplicate skills from overlapping plugin packages. 8 upvotes.

**Evaluation and debugging tools**
- #556 (9 comments): `run_eval.py` reports 0% trigger rate across all queries — core evaluation tooling is broken. 6 upvotes.
- #202 (8 comments, closed): skill-creator reads like developer docs, not operational skill instructions.

**Trust and security boundaries**
- #492 (6 comments): Community skills distributed under `anthropic/` namespace creates trust boundary vulnerability. Users may grant elevated permissions to impersonating skills.
- #1175 (2 comments, closed): Security and context window concerns when handling SharePoint Online documents via skill mechanisms.

**Plugin and platform compatibility**
- #1087 (2 comments): document-skills plugin loads all 17 repo skills instead of declared 4 in marketplace.json.
- #1102 (2 comments): MCP returns uncompressable large data causing context congestion.
- #29 (4 comments): Request for AWS Bedrock compatibility.
- #16 (4 comments): Request to expose Skills as MCPs for programmatic use.

**Note**: The evaluation tooling bug (#556) and namespace security issue (#492) garnered the most substantive community discussion and maintainer engagement.

---

## 3. Active Pending Skills

PRs with active community discussion that have not yet been merged:

- **#1099 skill-creator: fix run_eval.py crash on Windows** — Submitted May 7. Reports `run_eval.py` is completely unusable on Windows: every query recorded as "not triggered," optimization loop reports `precision=100% recall=0%`. Root cause: subprocess pipe reading fails with WinError 10038. Updated May 24 with continued discussion.

- **#1050 skill-creator: fix Windows subprocess + encoding bugs** — Submitted April 27. Two one-line fixes: `PATHEXT` not honored for `claude.cmd` on Windows 11. Updated May 24. Discusses identical class of bugs as #1099 but with different proposed fix.

- **#190 Add n8n-builder, n8n-debugger skills** — Submitted December 2025. Four production-tested community skills including n8n workflow builder/debugger and faf-expert for persistent project context. Updated May 18 with new commits. One of the longest-running open submissions.

- **#568 feat: add ServiceNow platform skill** — Submitted March 8. Covers ITSM, ITOM, ITAM, FSM, HRSD, CSDM, IntegrationHub. Updated April 23. Broad enterprise platform coverage.

**Note**: The two Windows compatibility fixes (#1099, #1050) overlap significantly in scope but propose different fix approaches — no consensus has emerged.

---

## 4. Daily Notes

- **Windows ecosystem gaps are the most active fix area**: Two overlapping PRs (#1099, #1050) and multiple Issues document that the skill-creator tooling chain (run_eval.py, subprocess handling) is effectively broken on Windows. This is the single most concrete barrier to cross-platform adoption visible in today's data.

- **Namespace trust issue surfaces without resolution**: Issue #492 raises that community skills distributed under `anthropics/` GitHub organization and `anthropic/` namespace in marketplace.json create impersonation risk. No maintainer response or proposed remediation visible as of May 30. This is a security concern with 2 upvotes and ongoing May discussion.

- **No formal maintainer responses visible for the top 20 PRs or top Issues**: The data shows no merged PRs, no assigned reviewers, and no maintainer comments in the open items sampled. This is a neutral observation — activity patterns may reflect periodic batch review cycles rather than neglect.