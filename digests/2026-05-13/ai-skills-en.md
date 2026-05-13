# Skills Ecosystem Highlights 2026-05-13

> Generated: 2026-05-13 02:15 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-13

## 1. Top Skills Ranking (Most-Discussed PRs)

Based on the sorted PR list (top by comment volume), these skill additions and improvements have generated the most discussion:

### #514 — Document Typography Skill
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — common typographic problems that affect every document Claude generates.
**Discussion highlights:** Addresses a universal pain point for document generation. The PR author notes users rarely ask for good typography, but the skill proactively fixes it.
**Status:** Open since 2026-03-04.
[#514](https://github.com/anthropics/skills/pull/514)

### #486 — ODT Skill (OpenDocument Text)
**Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) including template filling and ODT-to-HTML parsing.
**Discussion highlights:** Targets LibreOffice/ISO standard document workflows, broadening the skill ecosystem beyond DOCX and PDF.
**Status:** Open since 2026-03-01, last updated 2026-04-14.
[#486](https://github.com/anthropics/skills/pull/486)

### #723 — Testing-Patterns Skill
**Functionality:** Comprehensive coverage of testing philosophy (Trophy model), unit testing (AAA pattern, pure functions), React component testing with Testing Library, and integration / E2E patterns.
**Discussion highlights:** Adds structured guidance for a full testing stack — a frequently requested capability.
**Status:** Open since 2026-03-22, last updated 2026-04-21.
[#723](https://github.com/anthropics/skills/pull/723)

### #181 — SAP-RPT-1-OSS Predictor Skill
**Functionality:** Wraps SAP’s open-source tabular foundation model (released at TechEd 2025) for predictive analytics on SAP business data.
**Discussion highlights:** Enterprise-focused skill; connects Claude to SAP’s own AI model for business forecasting.
**Status:** Open since 2025-12-28, last updated 2026-03-16.
[#181](https://github.com/anthropics/skills/pull/181)

### #568 — ServiceNow Platform Skill
**Functionality:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
**Discussion highlights:** Aims to be a platform-wide companion rather than a narrow scripting helper, addressing multiple IT workflows.
**Status:** Open since 2026-03-08, last updated 2026-04-23.
[#568](https://github.com/anthropics/skills/pull/568)

### #444 — AURELION Skill Suite (Kernel, Advisor, Agent, Memory)
**Functionality:** Four skills from the AURELION ecosystem — a 5-floor cognitive framework, structured knowledge templates, and persistent memory for AI agents.
**Discussion highlights:** Introduces a full cognitive/memory framework for professional knowledge management, a departure from single-purpose skills.
**Status:** Open since 2026-02-21, last updated 2026-05-06.
[#444](https://github.com/anthropics/skills/pull/444)

### #806 — Sensory Skill (macOS Automation via AppleScript)
**Functionality:** Teaches Claude to use `osascript` (AppleScript) for native macOS automation instead of screenshot-based computer use. Includes a two-tier permission system.
**Discussion highlights:** Offers an alternative to vision-based automation, with explicit permission tiers for out-of-the-box vs. accessibility-restricted functionality.
**Status:** Open since 2026-03-29, last updated 2026-04-02.
[#806](https://github.com/anthropics/skills/pull/806)

---

## 2. Community Demand Clusters (from Issues)

**Distribution & Trust**
- **Org-wide skill sharing (#228, 11 comments):** Users want a shared skill library or direct sharing links instead of manual file transfers. This is the most-commented open issue, suggesting strong demand.
- **Duplicate skills from plugins (#189, 6 comments):** Installing both `document-skills` and `example-skills` plugins loads identical skills, wasting context window. Users expect clear separation.
- **Security/namespace trust (#492, 6 comments):** Community skills hosted under the `anthropic/` namespace impersonate official skills, creating trust-boundary vulnerabilities.
- **Plugin loading excess (#1087, 2 comments):** `document-skills` plugin loads all 17 repo skills instead of the 4 declared in `marketplace.json`.

**Evaluation & Tooling Bugs**
- **run_eval.py 0% trigger rate (#556, 8 comments):** The evaluation script never triggers any skill — a critical gap for testing skill effectiveness.
- **skill-creator API key requirement (#532, 2 comments, closed):** Description optimizer requires `ANTHROPIC_API_KEY`, blocking enterprise/SSO users.
- **Agentskills.io redirect loop (#184, 3 comments, closed):** The skills standard reference site was completely broken.

**Feature Requests & Ecosystem Gaps**
- **Agent governance skill proposal (#412, 4 comments, closed):** Proposed skill for safety patterns — policy enforcement, threat detection, audit trails — but not yet implemented.
- **Bedrock compatibility (#29, 4 comments):** Users want skills to work with AWS Bedrock; no official support yet.
- **Expose Skills as MCPs (#16, 4 comments):** Suggestion to formalize skill APIs via the Model Context Protocol.

These clusters indicate priorities: improving skill distribution and trust, fixing evaluation infrastructure, and expanding platform compatibility.

---

## 3. Active Pending Skills (Not Yet Merged, with Recent Activity)

Several open PRs show continued discussion and updates over the past month:

- **#444 AURELION skill suite** — Updated 2026-05-06. Discussion around integrating a multi-skill cognitive framework into the curated collection.
- **#360 AppDeploy skill** — Updated 2026-05-04. Allows full-stack web app deployment and management from Claude via appdeploy.ai.
- **#568 ServiceNow platform skill** — Updated 2026-04-23. Broad scope and enterprise focus are likely generating review feedback.
- **#723 Testing-patterns skill** — Updated 2026-04-21. Comprehensive testing stack skill still under review.
- **#806 Sensory skill (macOS automation)** — Updated 2026-04-02. AppleScript-based approach may require security review.
- **#514 Document-typography skill** — Updated 2026-03-13. An early high-engagement PR that remains open; discussion may involve scope refinement.

All are open with no signs of imminent close or merge. No merged PRs appear in the top 50.

---

## 4. Daily Notes

- **Skill ecosystem breadth is expanding rapidly into enterprise and platform-specific domains.** This batch includes SAP predictive analytics, ServiceNow IT workflows, AppleScript macOS automation, and a full cognitive framework — suggesting contributors are targeting professional environments beyond general coding.
- **Distribution and evaluation infrastructure are under strain.** Multiple issues report plugin loading errors, duplicate skills, namespace impersonation, and a 0% trigger rate in the evaluation script. These are blocking both development (for skill authors) and deployment (for team users).
- **Community governance tooling is maturing.** The addition of a CONTRIBUTING.md (#509) and a PR template (#512) indicates the repository is moving toward more structured contribution processes, though these are still open and not yet merged.