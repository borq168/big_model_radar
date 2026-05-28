# Skills Ecosystem Highlights 2026-05-28

> Generated: 2026-05-28 02:13 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Skills Community Highlights Report – 2026-05-28

### 1. Top Skills Ranking

The most-discussed Pull Requests (sorted by comment count) cover a mix of new domain skills and quality-of-life improvements. Below are the top 7.

1. **#514 – Add document-typography skill** ([PR](https://github.com/anthropics/skills/pull/514))
   Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Discussion focuses on the pervasiveness of these issues across all Claude outputs.
   *Status: Open, last updated March 13.*

2. **#486 – Add ODT skill** ([PR](https://github.com/anthropics/skills/pull/486))
   Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of “LibreOffice” or “ODF”. Discussion highlights the need for ISO-standard document support.
   *Status: Open, last updated April 14.*

3. **#210 – Improve frontend-design skill clarity** ([PR](https://github.com/anthropics/skills/pull/210))
   Rewrites the existing frontend-design skill to be more actionable and specific for Claude. Discussion centers on ensuring each instruction is executable within a single conversation.
   *Status: Open, last updated March 7.*

4. **#83 – Add skill-quality-analyzer and skill-security-analyzer** ([PR](https://github.com/anthropics/skills/pull/83))
   Two meta‑skills for evaluating Skill quality (structure, documentation, performance) and security (vulnerability scanning, permission analysis). Discussion touches on standardization for community contributions.
   *Status: Open, last updated January 7.*

5. **#538 – fix(pdf): correct case-sensitive file references** ([PR](https://github.com/anthropics/skills/pull/538))
   Fixes 8 mismatches between uppercase references in `SKILL.md` and lowercase actual filenames. Relevant for case‑sensitive filesystems (e.g., Linux).
   *Status: Open, last updated April 29.*

6. **#539 – fix(skill-creator): warn on unquoted description with YAML special characters** ([PR](https://github.com/anthropics/skills/pull/539))
   Adds pre‑parse validation to detect unquoted `description` fields containing `:` that cause silent YAML truncation. Discussion notes this is a common authoring mistake.
   *Status: Open, last updated April 16.*

7. **#541 – fix(docx): prevent tracked change w:id collision** ([PR](https://github.com/anthropics/skills/pull/541))
   Fixes document corruption when tracked changes are added to DOCX files with existing bookmarks. The root cause is a shared ID space in OOXML.
   *Status: Open, last updated April 16.*

### 2. Community Demand Clusters

Issues reveal unmet workflow needs and desired new Skill categories:

- **Organizational Sharing & Distribution** (#228 – org‑wide skill sharing, #1087 – plugin loads all skills instead of declared set, #16 – expose Skills as MCPs). Users want centralized libraries, sharing links, and MCP interfaces rather than manual `.skill` file transfers.

- **Trust & Security Boundaries** (#492 – namespace impersonation under `anthropic/`, #1175 – SharePoint permission logic in SKILL.md). Community members are concerned about granting elevated permissions to unofficial skills and about handling enterprise document access.

- **Cross‑Platform Reliability** (#556 – `run_eval.py` never triggers skills, #62 – skills disappearing, #61 – 404 errors on Team plan). Windows‑specific bugs and inconsistent tool behavior are top pain points.

- **New Skill Directions**
  - **Agent Governance** (#412 – proposal for a skill on policy enforcement, threat detection, audit trails).
  - **MCP Integration** (#16 – expose Skills as MCP tools).
  - **Enterprise Platforms** (implied by SharePoint and ODT requests).

### 3. Active Pending Skills

PRs with recent activity (updated within the last 30 days) indicate ongoing refinement:

- **#1099 – skill-creator: fix run_eval.py crash on Windows** ([PR](https://github.com/anthropics/skills/pull/1099))
  Updated May 24. Addresses subprocess pipe failures that cause 0% recall in evaluation. Discussion includes exact error reproduction and proposed fix.

- **#1050 – skill-creator: fix Windows subprocess + encoding bugs** ([PR](https://github.com/anthropics/skills/pull/1050))
  Updated May 24. Two one‑line fixes for `PATHEXT` handling and encoding in `run_loop.py`. Both PRs suggest the evaluation tooling is a focal point for Windows users.

- **#190 – Add 2 community skills: n8n-builder, n8n-debugger** ([PR](https://github.com/anthropics/skills/pull/190))
  Updated May 18. Adds four production‑tested skills (including faf-expert). Discussion around skill naming and maintenance.

- **#444 – feat: add AURELION skill suite** ([PR](https://github.com/anthropics/skills/pull/444))
  Updated May 6. A 5‑floor cognitive framework for structured reasoning. Reviewers question overlap with existing pattern‑based skills.

- **#568 – feat: add ServiceNow platform skill** ([PR](https://github.com/anthropics/skills/pull/568))
  Updated April 23. Covers ITSM, ITOM, SecOps, and more. Discussion about scope (broad platform assistant vs. narrow scripting helper).

### 4. Daily Notes

- **Windows compatibility is the dominant infrastructure theme.** Two open PRs (#1099, #1050) and Issue #556 all report fundamental breakage of the `skill-creator` evaluation pipeline on Windows. The community is actively submitting fixes, though no merge has occurred yet.

- **Skill quality tooling is emerging as a meta‑category.** Two PRs (#83, #539) introduce validation, analysis, or security scanning for Skills themselves. This suggests growing demand for standardization before the ecosystem scales further.

- **Enterprise and governance requests are increasing but remain low‑volume.** Issues #228 (org sharing), #492 (namespace trust), #1175 (SharePoint security), and #412 (agent governance) each have only a few comments, yet they cover distinct vulnerabilities that could hinder adoption in regulated environments. No clear cluster yet, but the topics are recurring.