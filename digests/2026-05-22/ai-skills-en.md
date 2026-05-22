# Skills Ecosystem Highlights 2026-05-22

> Generated: 2026-05-22 02:33 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-22

## 1. Top Skills Ranking

### 1. document-typography (#514 — OPEN)
- **Functionality**: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets typographic issues affecting every document Claude produces.
- **Discussion highlights**: The PR creator notes these problems are universal and users rarely request good typography explicitly. No comment data available.
- **Status**: Open since 2026-03-04, last updated 2026-03-13.
- **Link**: https://github.com/anthropics/skills/pull/514

### 2. ODT skill (#486 — OPEN)
- **Functionality**: OpenDocument Text creation, template filling, and ODT-to-HTML conversion. Triggers on mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice.
- **Discussion highlights**: Addresses an ISO-standard format gap in the existing document skills collection.
- **Status**: Open since 2026-03-01, last updated 2026-04-14.
- **Link**: https://github.com/anthropics/skills/pull/486

### 3. frontend-design improvement (#210 — OPEN)
- **Functionality**: Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Each instruction must be executable within a single conversation.
- **Discussion highlights**: Focused on making skill guidance specific enough to steer behavior without being overly prescriptive.
- **Status**: Open since 2026-01-05, last updated 2026-03-07.
- **Link**: https://github.com/anthropics/skills/pull/210

### 4. skill-quality-analyzer & skill-security-analyzer (#83 — OPEN)
- **Functionality**: Two meta-skills. The quality analyzer evaluates across five dimensions (Structure & Documentation 20%, plus four others). The security analyzer is described as a companion tool.
- **Discussion highlights**: Represents a meta-layer of quality assurance for the skills ecosystem itself.
- **Status**: Open since 2025-11-06, last updated 2026-01-07.
- **Link**: https://github.com/anthropics/skills/pull/83

### 5. SAP-RPT-1-OSS predictor (#181 — OPEN)
- **Functionality**: Skill for using SAP's open-source tabular foundation model (Apache 2.0, released at SAP TechEd 2025) for predictive analytics on SAP business data.
- **Discussion highlights**: Enterprise-focused; leverages SAP's first open-source foundation model.
- **Status**: Open since 2025-12-28, last updated 2026-03-16.
- **Link**: https://github.com/anthropics/skills/pull/181

### 6. testing-patterns (#723 — OPEN)
- **Functionality**: Covers the full testing stack: Testing Trophy philosophy, AAA pattern, React component testing with Testing Library, and what not to test.
- **Discussion highlights**: Comprehensive skill addressing a gap in testing guidance.
- **Status**: Open since 2026-03-22, last updated 2026-04-21.
- **Link**: https://github.com/anthropics/skills/pull/723

### 7. AppDeploy (#360 — OPEN)
- **Functionality**: Enables Claude to deploy and manage full-stack web apps to a public URL via AppDeploy, including lifecycle management, status checks, and versioning.
- **Discussion highlights**: Bridges AI code generation with deployment infrastructure.
- **Status**: Open since 2026-02-09, last updated 2026-05-04.
- **Link**: https://github.com/anthropics/skills/pull/360

### 8. ServiceNow platform (#568 — OPEN)
- **Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
- **Discussion highlights**: One of the most enterprise-focused skill contributions, spanning multiple ServiceNow modules.
- **Status**: Open since 2026-03-08, last updated 2026-04-23.
- **Link**: https://github.com/anthropics/skills/pull/568

---

## 2. Community Demand Clusters

### Infrastructure and Plugin Management
Multiple issues report problems with skill installation and loading. **Issue #189** (8 👍) documents that `document-skills` and `example-skills` plugins contain identical content causing duplicates. **Issue #1087** reports that the `document-skills` plugin loads all 17 skills from the repo instead of the 4 declared in `marketplace.json`. **Issue #228** (7 👍) requests org-wide skill sharing to replace the current download-and-upload workflow. **Issue #61** reports 404 errors loading skills on claude.ai for Team plan users.

### Security and Trust Boundaries
**Issue #492** (2 👍) raises that community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability, potentially causing users to grant elevated permissions to unofficial skills. This is the only security-related issue in the top 15.

### Enterprise and Platform Integration
**Issue #532** reports the skill-creator's description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users. **Issue #29** asks about using skills with AWS Bedrock. **Issue #16** proposes exposing skills as MCPs for standardized API signaling.

### Content and Quality
**Issue #202** (closed) argued that the skill-creator skill reads like developer documentation rather than operational instructions, violating guidelines. **Issue #412** (closed) proposed an `agent-governance` skill for safety patterns in AI agent systems.

---

## 3. Active Pending Skills

All PRs in the top 20 remain open. Several have ongoing discussion periods exceeding 2 months:

- **#514 (document-typography)**: Open ~79 days. No maintainer comments visible in the data.
- **#486 (ODT skill)**: Open ~82 days. Last updated 2026-04-14, suggesting recent activity.
- **#538, #539, #541 (fixes by @Lubrsy706)**: Three fix PRs from the same author, all opened 2026-03-06. Address case sensitivity in PDF skill, YAML parsing in skill-creator, and DOCX tracked change ID collisions. These are narrow bugfixes rather than new skills.
- **#509 (CONTRIBUTING.md)**: Directly addresses community health gap raised in Issue #452. Open since 2026-03-03, last updated 2026-03-19.

The total pool of 50 PRs with none merged suggests a backlog or bottleneck in review/approval. The most recently opened PR in the top 20 (#806, sensory skill) is from 2026-03-29, meaning no top-discussed PRs have been opened in the last 54 days.

---

## 4. Daily Notes

- **Document quality skills dominate the PR pipeline**. Three of the top 8 PRs (#514, #486, #538) directly address document generation fidelity—typography, ODT support, and case-sensitive file references. This suggests the community is actively filling gaps in the document-skills collection.

- **Fix PRs outnumber new skill PRs among active contributors**. @Lubrsy706 submitted three fix PRs (#538, #539, #541) addressing concrete bugs in existing skills. The shift from proposing new skills to fixing existing ones may indicate the repository is maturing past initial creation phase, though this is a single-author observation.

- **A plugin loading bug is the most-upvoted issue**. Issue #189 (8 👍) about duplicate skills from plugin installation has the highest reaction count among the top issues. Combined with Issue #1087 about the `document-skills` plugin loading all skills, the data shows concrete problems with the plugin infrastructure that affect user experience. No clear signal on when these might be resolved.