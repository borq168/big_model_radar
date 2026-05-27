# Skills Ecosystem Highlights 2026-05-27

> Generated: 2026-05-27 02:37 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights — 2026-05-27

## Top Skills Ranking

The following Pull Requests represent the most substantial new Skill proposals under active discussion, based on community engagement and functional scope.

1. **#514 — Add document-typography skill** (PGTBoos, opened 2026-03-04, updated 2026-03-13)
   - [PR link](https://github.com/anthropics/skills/pull/514)
   - Provides typographic quality control for AI-generated documents, targeting orphan word wrap, widow paragraph headers, and numbering misalignment. Author argues these issues affect every document Claude generates and are rarely requested by users explicitly.
   - Discussion highlights: zero 👍 reactions but positioned as a broad-impact utility skill. No maintainer review comments visible.

2. **#486 — Add ODT skill** (GitHubNewbie0, opened 2026-03-01, updated 2026-04-14)
   - [PR link](https://github.com/anthropics/skills/pull/486)
   - Covers OpenDocument Format creation, template filling, and ODT-to-HTML conversion. Triggers include mentions of "ODT", "ODS", "ODF", and "LibreOffice document".
   - Status: open, last updated over a month ago.

3. **#181 — Add SAP-RPT-1-OSS predictor skill** (amitlals, opened 2025-12-28, updated 2026-03-16)
   - [PR link](https://github.com/anthropics/skills/pull/181)
   - Interfaces with SAP's open source tabular foundation model (Apache 2.0, released at TechEd 2025) for predictive analytics on SAP business data.
   - Represents enterprise/ERP domain expansion for the skills ecosystem.

4. **#723 — Add testing-patterns skill** (4444J99, opened 2026-03-22, updated 2026-04-21)
   - [PR link](https://github.com/anthropics/skills/pull/723)
   - Comprehensive testing stack coverage: Testing Trophy philosophy, AAA pattern, React Testing Library, API testing, Playwright E2E, and property-based testing.
   - Discussion highlights: codifies testing patterns Claude should follow, filling a pedagogical gap.

5. **#444 — Add AURELION skill suite** (Chase-Key, opened 2026-02-21, updated 2026-05-06)
   - [PR link](https://github.com/anthropics/skills/pull/444)
   - Four skills (kernel, advisor, agent, memory) implementing a structured cognitive + memory framework for professional knowledge management. The kernel uses a 5-floor cognitive framework for structured thinking.
   - Discussion highlights: large scope with multiple interdependent skills; last updated early May.

6. **#568 — Add ServiceNow platform skill** (Vanka07, opened 2026-03-08, updated 2026-04-23)
   - [PR link](https://github.com/anthropics/skills/pull/568)
   - Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, and IntegrationHub.
   - Discussion highlights: positions as platform-wide assistant rather than narrow scripting helper.

7. **#154 — Add shodh-memory skill** (varun29ankuS, opened 2025-12-19, updated 2026-03-03)
   - [PR link](https://github.com/anthropics/skills/pull/154)
   - Persistent memory system for AI agents across conversations. Teaches Claude when to call `proactive_context`, how to structure memories, and how to maintain continuity.
   - Represents emerging demand for cross-session context persistence.

8. **#190 — Add n8n-builder, n8n-debugger skills** (Wolfe-Jam, opened 2025-12-31, updated 2026-05-18)
   - [PR link](https://github.com/anthropics/skills/pull/190)
   - Production-tested community skills for n8n workflow automation, plus a faf-expert skill for Foundational AI-context Format files and MCP server configuration.
   - Discussion highlights: actively maintained, last updated May 18.

---

## Community Demand Clusters

From Issues (50 total, sorted by comments), the following unmet workflow demands emerge:

### Infrastructure & Distribution
- **Org-wide skill sharing** (#228, 👍7, comments 13): Users cannot share skills within organizations without manual file transfer. Requests a shared skill library or direct sharing links.
  - [Issue link](https://github.com/anthropics/skills/issues/228)
- **Skill disappearance** (#62, comments 10, closed): Users report skills vanishing from Claude.ai after file renames or uploads.
- **Plugin loading errors** (#189, comments 6, 👍8): Installing both `document-skills` and `example-skills` plugins loads identical content, creating duplicate skills.
- **Plugin loads too many skills** (#1087, comments 2): `document-skills` plugin loads all 17 repo skills instead of the 4 declared in marketplace.json.

### Security & Trust
- **Namespace trust abuse** (#492, comments 6, 👍2): Community skills distributed under `anthropic/` namespace impersonate official skills, creating trust boundary vulnerabilities.
  - [Issue link](https://github.com/anthropics/skills/issues/492)
- **SharePoint permissions** (#1175, comments 2): Concerns about embedding access control logic in SKILL.md files, and potential context window overflow from SPO document handling.

### Tooling & Platform Gaps
- **run_eval.py broken** (#556, comments 8, 👍6): 0% trigger rate for skills/commands when using `claude -p`, making the evaluation optimization loop return `precision=100% recall=0%`.
  - [Issue link](https://github.com/anthropics/skills/issues/556)
- **Skill-creator needs rewrite** (#202, closed, comments 8): Current skill-creator reads as developer documentation rather than operational instructions, violating guidelines.
- **Bedrock compatibility** (#29, comments 4): Users requesting skills support with AWS Bedrock.
- **MCP integration** (#16, comments 4): Request for exposing Skills as MCP tools for broader interoperability.
- **MCP returns excess data** (#1102, comments 2): Large database query results via MCP can cause context congestion.

### New Domain Proposals
- **Agent governance** (#412, closed, comments 4): Proposal for safety patterns — policy enforcement, threat detection, trust scoring, audit trails. Currently no equivalent skill exists in the collection.

---

## Active Pending Skills

PRs with recent updates and/or ongoing discussion, not yet merged:

1. **#1099 — skill-creator: fix run_eval.py crash on Windows** (joshuawowk, updated 2026-05-24)
   - [PR link](https://github.com/anthropics/skills/pull/1099)
   - Fixes subprocess pipe reading crash on Windows where every query records as "not triggered." Associated with Issue #556.
   - Status: active, updated 3 days ago.

2. **#1050 — skill-creator: fix Windows subprocess + encoding bugs** (gstreet-ops, updated 2026-05-24)
   - [PR link](https://github.com/anthropics/skills/pull/1050)
   - Two 1-line fixes: `PATHEXT` not honored for `claude.cmd`, and UTF-8 encoding issue in subprocess output.
   - Status: active, same update date as above.

3. **#541 — fix(docx): prevent tracked change w:id collision** (Lubrsy706, updated 2026-04-16)
   - [PR link](https://github.com/anthropics/skills/pull/541)
   - Fixes document corruption when DOCX skill's hardcoded w:ids collide with existing bookmarks in OOXML shared ID space. Root cause analysis included.
   - Status: open since March 6, last updated mid-April.

4. **#538 — fix(pdf): correct case-sensitive file references** (Lubrsy706, updated 2026-04-29)
   - [PR link](https://github.com/anthropics/skills/pull/538)
   - Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` that break on case-sensitive filesystems.
   - Status: open since March 6.

5. **#539 — fix(skill-creator): warn on unquoted description with YAML special characters** (Lubrsy706, updated 2026-04-16)
   - [PR link](https://github.com/anthropics/skills/pull/539)
   - Prevents silent YAML parsing failures from unquoted description fields containing colons.
   - Status: open since March 6.

6. **#509 — docs: add CONTRIBUTING.md** (narenkatakam, opened 2026-03-03, updated 2026-03-19)
   - [PR link](https://github.com/anthropics/skills/pull/509)
   - Addresses community health gap (25% score), closes Issue #452.
   - Status: open, last updated March 19.

---

## Daily Notes

1. **Windows compatibility is the most frequently reported tooling issue.** Two open PRs (#1099, #1050) and Issue #556 all address run_eval.py failures on Windows — subprocess pipe crashes, PATHEXT handling, and encoding bugs. The optimization loop is effectively unusable on Windows, which may limit community skill development on that platform.

2. **Demand for infrastructure features (sharing, MCP exposure, plugin correctness) is growing but unaddressed by maintainers.** Issues #228 (org sharing, 👍7), #189 (duplicate skills, 👍8), #1087 (plugin loading), and #16 (MCP integration) have no visible maintainer responses. These represent coordination and distribution bottlenecks for the ecosystem.

3. **Security and trust concerns are emerging as a distinct community signal.** Issue #492 identifies namespace impersonation risks; Issue #1175 raises concerns about embedding access control in skill files. Both received 2-6 comments but no maintainer acknowledgment. The agent-governance proposal (#412) was closed without implementation, leaving a gap in safety-oriented skills.