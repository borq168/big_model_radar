# Skills Ecosystem Highlights 2026-06-03

> Generated: 2026-06-03 02:54 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-03

Data source: [github.com/anthropics/skills](https://github.com/anthropics/skills) — 50 PRs and 50 Issues as of 2026-06-03.

---

## 1. Top Skills Ranking

The following Pull Requests represent the most discussed skill additions or improvements in the repository (sorted by comment activity). All remain open as of the data snapshot.

### 1.1 `document-typography` (#514)
Adds typographic quality control for generated documents: prevents orphan word wrap (1‑6 words on a new line), widow paragraphs, and numbering misalignment.
- **Status:** Open since 2026-03-04, last updated 2026-03-13.
- [PR #514](https://github.com/anthropics/skills/pull/514)

### 1.2 `odt` — OpenDocument text creation and conversion (#486)
Enables creation, filling, reading, and conversion of `.odt` and `.ods` files. Triggers on mentions of ODT, ODS, ODF, or LibreOffice.
- **Status:** Open since 2026-03-01, last updated 2026-04-14.
- [PR #486](https://github.com/anthropics/skills/pull/486)

### 1.3 Frontend-design skill improvement (#210)
Revises the existing `frontend-design` skill to improve clarity, actionability, and internal coherence. Aims to make each instruction executable within a single conversation.
- **Status:** Open since 2026-01-05, last updated 2026-03-07.
- [PR #210](https://github.com/anthropics/skills/pull/210)

### 1.4 Meta-skills: `skill-quality-analyzer` and `skill-security-analyzer` (#83)
Two new meta-skills for the marketplace: quality analysis across five dimensions (structure, documentation, examples, etc.) and security analysis for skill content.
- **Status:** Open since 2025-11-06, last updated 2026-01-07.
- [PR #83](https://github.com/anthropics/skills/pull/83)

### 1.5 PDF skill — case‑sensitive file reference fix (#538)
Fixes 8 case‑sensitivity mismatches in the PDF skill’s `SKILL.md` where references to `REFERENCE.md` and `FORMS.md` were uppercase while the actual files are lowercase. Breaks on case‑sensitive file systems.
- **Status:** Open since 2026-03-06, last updated 2026-04-29.
- [PR #538](https://github.com/anthropics/skills/pull/538)

### 1.6 Skill‑creator — YAML special character validation (#539)
Adds pre‑parse validation to `quick_validate.py` to detect unquoted `description` fields containing `:`, preventing silent YAML parsing failures.
- **Status:** Open since 2026-03-06, last updated 2026-04-16.
- [PR #539](https://github.com/anthropics/skills/pull/539)

### 1.7 DOCX skill — tracked change `w:id` collision fix (#541)
Prevents document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. The root cause is a shared `w:id` ID space in OOXML; hardcoded low IDs conflicted with existing bookmarks.
- **Status:** Open since 2026-03-06, last updated 2026-04-16.
- [PR #541](https://github.com/anthropics/skills/pull/541)

### 1.8 SAP‑RPT‑1‑OSS predictor skill (#181)
Adds a skill for using SAP’s open‑source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data, released at SAP TechEd 2025.
- **Status:** Open since 2025-12-28, last updated 2026-03-16.
- [PR #181](https://github.com/anthropics/skills/pull/181)

---

## 2. Community Demand Clusters

From the top Issues (sorted by comment count), the following new skill directions or ecosystem improvements are most requested:

- **Enterprise Governance & Sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) requests org‑wide skill sharing (currently requires manual `.skill` file transfer). Issue [#492](https://github.com/anthropics/skills/issues/492) raises security concerns about community skills distributed under the `anthropic/` namespace, creating trust‑boundary risks. Issue [#412](https://github.com/anthropics/skills/issues/412) proposes an `agent-governance` skill covering policy enforcement, threat detection, and audit trails for AI agent systems.

- **Better Skill Development Tooling** — Issue [#202](https://github.com/anthropics/skills/issues/202) notes that `skill-creator` reads like developer documentation rather than an operational skill, calling for a rewrite to best practices. Issue [#1220](https://github.com/anthropics/skills/issues/1220) requests multi‑file preload or inline bundling for skill reference files. Issue [#1102](https://github.com/anthropics/skills/issues/1102) reports that MCP returns excess data, causing context congestion.

- **Platform Reliability & Bug Fixes** — Issues [#62](https://github.com/anthropics/skills/issues/62) and [#61](https://github.com/anthropics/skills/issues/61) report skills disappearing and 404 errors on load. Issue [#556](https://github.com/anthropics/skills/issues/556) describes a 0% trigger rate in `run_eval.py` on Windows. Issue [#189](https://github.com/anthropics/skills/issues/189) shows that `document-skills` and `example-skills` plugins install identical content, causing duplicate skills. Issue [#1087](https://github.com/anthropics/skills/issues/1087) confirms that the `document-skills` plugin loads all repo skills instead of only the declared subset.

- **Broader Platform Integration** — Issue [#16](https://github.com/anthropics/skills/issues/16) suggests exposing skills as MCPs for consistent API signalling. Issue [#29](https://github.com/anthropics/skills/issues/29) asks about AWS Bedrock compatibility.

---

## 3. Active Pending Skills

Several significant new skills remain under review, with recent updates indicating ongoing community engagement. Key examples:

- **Agent‑creator meta‑skill** ([#1140](https://github.com/anthropics/skills/pull/1140)) — adds a meta‑skill for task‑specific agent sets and fixes multi‑tool evaluation. Updated 2026-06-02.
- **Testing‑patterns skill** ([#723](https://github.com/anthropics/skills/pull/723)) — comprehensive coverage of testing philosophy, unit testing (AAA), React component testing, and more. Updated 2026-04-21.
- **ServiceNow platform skill** ([#568](https://github.com/anthropics/skills/pull/568)) — broad assistant covering ITSM, ITOM, ITAM, SecOps, HR, and IntegrationHub. Updated 2026-04-23.
- **Sensory skill (macOS automation via AppleScript)** ([#806](https://github.com/anthropics/skills/pull/806)) — native macOS automation using `osascript` instead of screenshot‑based computer use, with a two‑tier permission system. Updated 2026-04-02.
- **Shodh‑memory skill** ([#154](https://github.com/anthropics/skills/pull/154)) — persistent context across conversations via a proactive memory system. Updated 2026-03-03.
- **AppDeploy skill** ([#360](https://github.com/anthropics/skills/pull/360)) — enables Claude to deploy and manage full‑stack web apps to a public URL. Updated 2026-05-04.

These PRs all remain open with no maintainer merge decision yet visible in the data.

---

## 4. Daily Notes

1. **Cross‑platform compatibility is a recurring pain point** — multiple PRs and Issues address Windows‑specific failures (subprocess `PATHEXT` handling, `run_eval.py` zero trigger rate, UTF‑8 byte‑length panics) and case‑sensitive file system bugs. This suggests the skills toolchain is being actively tested on non‑macOS platforms, but gaps remain.

2. **Enterprise feature requests are concentrated in governance and sharing** — the highest‑commented Issue (#228, 13 comments) demands org‑wide skill sharing without manual file transfer. Issue #492 (security namespace) and #412 (agent governance proposal) reinforce that users want structured control over skill distribution and safety patterns.

3. **No strong signal of a single dominant skill category** — today’s data shows a balanced mix of document‑format skills (ODT, PDF, DOCX), platform‑specific skills (SAP, ServiceNow, macOS), testing, memory, and deployment. The absence of a clear “most requested” type suggests the ecosystem is still in an exploratory phase.