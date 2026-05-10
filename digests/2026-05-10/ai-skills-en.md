# Skills Ecosystem Highlights 2026-05-10

> Generated: 2026-05-10 02:05 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-10

## Top Skills Ranking

The following Pull Requests (PRs) represent the most-discussed skill additions or major improvements. All are currently **open**.

1. **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**
   *Purpose:* Prevents common typographic defects in AI-generated documents (orphan/widow lines, numbering misalignment).
   *Discussion highlights:* Addresses a universal pain point for Claude-generated documents. No maintainer response visible.
   *Status:* Open since 2026-03-04, last updated 2026-03-13.

2. **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**
   *Purpose:* Two meta-skills: one that evaluates skill quality across five dimensions (structure, documentation, examples, etc.), and one that checks for security vulnerabilities in skill content.
   *Discussion highlights:* Proposes a governance layer for the skills ecosystem.
   *Status:* Open since 2025-11-06, last updated 2026-01-07.

3. **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**
   *Purpose:* Revises existing `frontend-design` skill to be more specific, actionable, and conversation-friendly.
   *Discussion highlights:* Focuses on making instructions Claude-followable in a single turn.
   *Status:* Open since 2026-01-05, last updated 2026-03-07.

4. **[#486 — Add ODT skill (OpenDocument text creation, template filling, ODT→HTML)](https://github.com/anthropics/skills/pull/486)**
   *Purpose:* Enables creation, editing, and conversion of OpenDocument Format files (.odt, .ods).
   *Discussion highlights:* Covers ISO-standard document formats used by LibreOffice and other open-source tools.
   *Status:* Open since 2026-03-01, last updated 2026-04-14.

5. **[#538 — Fix case-sensitive file references in PDF skill](https://github.com/anthropics/skills/pull/538)**
   *Purpose:* Corrects 8 case mismatches (e.g., `REFERENCE.md` → `reference.md`) that break skills on case-sensitive file systems.
   *Discussion highlights:* Demonstrates ongoing reliability maintenance for existing skills.
   *Status:* Open since 2026-03-06, last updated 2026-04-29.

6. **[#541 — Fix DOCX tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**
   *Purpose:* Prevents document corruption when tracked changes use hardcoded low IDs that conflict with pre-existing bookmarks in OOXML.
   *Discussion highlights:* Root cause analysis of shared `w:id` namespace.
   *Status:* Open since 2026-03-06, last updated 2026-04-16.

7. **[#539 — Fix skill-creator: warn on unquoted description with YAML special characters](https://github.com/anthropics/skills/pull/539)**
   *Purpose:* Adds pre-parse validation to catch unquoted `description` fields containing `:` to avoid silent YAML parsing failures.
   *Discussion highlights:* Improves the core `skill-creator` tooling.
   *Status:* Open since 2026-03-06, last updated 2026-04-16.

8. **[#181 — Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)**
   *Purpose:* Integrates SAP’s open-source tabular foundation model (SAP-RPT-1-OSS) for predictive analytics on SAP business data.
   *Discussion highlights:* Enterprise-focused skill connecting Claude to SAP’s AI model.
   *Status:* Open since 2025-12-28, last updated 2026-03-16.

## Community Demand Clusters

From the top 15 Issues (sorted by comments), the following unmet needs and friction points emerge:

- **Skill Management & Sharing**
  - [#228](https://github.com/anthropics/skills/issues/228): Request for org-wide skill sharing (9 comments, 7 👍). Currently requires manual file transfer.
  - [#62](https://github.com/anthropics/skills/issues/62): Skills disappearing after file rename (10 comments, 1 👍).
  - [#61](https://github.com/anthropics/skills/issues/61): 404 error on skills list API for Team plan (3 comments).

- **Infrastructure & Integration**
  - [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` triggers 0% skill activation (7 comments, 6 👍) — critical evaluation pipeline bug.
  - [#189](https://github.com/anthropics/skills/issues/189): Duplicate skills when installing both `document-skills` and `example-skills` plugins (6 comments, 8 👍).
  - [#1087](https://github.com/anthropics/skills/issues/1087): Plugin loads all skills from repo instead of declared subset (2 comments, 1 👍).
  - [#406](https://github.com/anthropics/skills/issues/406): Upload/replace fails with internal server error (2 comments, 4 👍).
  - [#29](https://github.com/anthropics/skills/issues/29): Request for AWS Bedrock compatibility (4 comments).

- **Security & Trust**
  - [#492](https://github.com/anthropics/skills/issues/492): Community skills under `anthropic/` namespace create trust boundary risks (4 comments, 2 👍).

- **New Skill Proposals**
  - [#412](https://github.com/anthropics/skills/issues/412): Proposal for an `agent-governance` skill (safety patterns for AI agents) (4 comments, closed after community discussion).
  - [#16](https://github.com/anthropics/skills/issues/16): Request to expose Skills as MCPs (4 comments).

- **Tooling & Usability**
  - [#202](https://github.com/anthropics/skills/issues/202): `skill-creator` skill needs rewrite to be more operational (8 comments, closed).
  - [#532](https://github.com/anthropics/skills/issues/532): `skill-creator` description optimizer unusable for enterprise/SSO users (2 comments, 1 👍).

## Active Pending Skills

Notable open PRs (not yet merged) with ongoing discussion or recent updates:

- **[#723 — feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**
  Comprehensive testing skill covering philosophy (Testing Trophy), unit tests, React Testing Library, and more. Last updated 2026-04-21.

- **[#360 — Added AppDeploy skill for deploying full-stack webapps](https://github.com/anthropics/skills/pull/360)**
  Enables Claude to deploy and manage web apps via AppDeploy.ai. Last updated 2026-05-04, indicating recent activity.

- **[#444 — feat: add AURELION skill suite](https://github.com/anthropics/skills/pull/444)**
  Four skills (kernel, advisor, agent, memory) for structured cognitive frameworks. Last updated 2026-05-06 — most recently touched skill-related PR in the top 20.

- **[#568 — feat: add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)**
  Broad ServiceNow assistant covering ITSM, ITOM, ITAM, SecOps, and more. Last updated 2026-04-23.

- **[#806 — feat: add sensory skill (macOS automation via AppleScript)](https://github.com/anthropics/skills/pull/806)**
  Offers native macOS automation as an alternative to screenshot-based computer use. Last updated 2026-04-02.

- **[#509 — docs: add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)**
  Addresses community health gap (25% GitHub community score). Closes issue #452. Last updated 2026-03-19.

## Daily Notes

- **High fix/validation activity**: Three of the top eight PRs (##538, #541, #539) are bug fixes or tooling improvements for existing skills (PDF, DOCX, skill-creator). This suggests a maturing ecosystem where reliability and cross-platform compatibility are becoming focal points.
- **Plugin loading issues are a recurring pain point**: Issues #189 and #1087 both report that plugins load incorrect skill sets — either duplicating content or ignoring `marketplace.json` declarations. Combined with #556 (0% evaluation trigger rate), the skill tooling pipeline shows significant friction that could slow community adoption.
- **Enterprise/org features gap**: Issues #228 (org-wide sharing), #532 (SSO incompatibility), and #29 (Bedrock) indicate demand for enterprise-grade deployment and sharing capabilities, which are not yet addressed by the current repository or client apps.