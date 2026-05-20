# Skills Ecosystem Highlights 2026-05-20

> Generated: 2026-05-20 02:31 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-20

## 1. Top Skills Ranking

Based on PR activity and comment engagement, the following skills are receiving the most community discussion:

**1. document-typography (#514)** — Typographic quality control for generated documents. Prevents orphan word wrap, widow paragraphs (section headers stranded at page bottom), and numbering misalignment in AI-generated documents. Discussion highlights that these issues affect "every document Claude generates" and users rarely notice them. **Status:** Open, last updated 2026-03-13. [Link](https://github.com/anthropics/skills/pull/514)

**2. ODT skill (#486)** — OpenDocument text creation and template filling, plus ODT-to-HTML conversion. Triggers include mentions of ODT, ODS, ODF, OpenDocument, LibreOffice documents, or requests for ISO standard formats. **Status:** Open, last updated 2026-04-14. [Link](https://github.com/anthropics/skills/pull/486)

**3. frontend-design improvement (#210)** — Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Goal is to ensure every instruction is actionable within a single conversation and specific enough to steer behavior. **Status:** Open, last updated 2026-03-07. [Link](https://github.com/anthropics/skills/pull/210)

**4. Meta skills: skill-quality-analyzer + skill-security-analyzer (#83)** — Two meta skills for the marketplace. The quality analyzer evaluates across five dimensions (Structure & Documentation 20%, plus others). The security analyzer audits skills for trust boundaries. **Status:** Open, last updated 2026-01-07. [Link](https://github.com/anthropics/skills/pull/83)

**5. testing-patterns (#723)** — Comprehensive coverage of the full testing stack: Testing Trophy model, AAA pattern, React component testing with Testing Library, E2E with Playwright, TDD workflow, snapshot testing, mocking strategies, and CI integration. **Status:** Open, last updated 2026-04-21. [Link](https://github.com/anthropics/skills/pull/723)

**6. AppDeploy (#360)** — Enables Claude to deploy and manage web apps (including full-stack) to a public URL via AppDeploy.ai. Includes lifecycle management, status checks, and versioning. **Status:** Open, last updated 2026-05-04. [Link](https://github.com/anthropics/skills/pull/360)

**7. ServiceNow platform (#568)** — Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CMDB, CSDM, and IntegrationHub. **Status:** Open, last updated 2026-04-23. [Link](https://github.com/anthropics/skills/pull/568)

---

## 2. Community Demand Clusters

From Issues analysis, several distinct skill direction requests emerge:

**Organizational sharing and management** — Multiple issues request org-wide skill sharing (#228, 7 👍), report skills disappearing (#62, 10 comments), and seek better discovery mechanisms. The most active request is for a shared skill library or direct sharing links within Claude.ai.

**Skill evaluation and quality assurance** — Issue #556 reports that `run_eval.py` never triggers skills in test queries (0% trigger rate, 6 👍). Issue #532 notes the skill-creator's description optimizer requires ANTHROPIC_API_KEY, making it unusable for enterprise SSO users (1 👍). Issue #202 (closed) identified the skill-creator itself reads more like developer documentation than an operational skill.

**Security and trust boundary concerns** — Issue #492 (6 comments, 2 👍) reports community skills distributed under the `anthropic/` namespace, impersonating official skills. This creates a trust boundary vulnerability where users may grant elevated permissions to community skills they believe are official.

**Duplicate skills from plugin installation** — Issue #189 (6 comments, 8 👍) reports that installing both `document-skills` and `example-skills` plugins from `anthropic-agent-skills` installs identical content. Issue #1087 (2 comments, 1 👍) reports the `document-skills` plugin loads all 17 skills from the repo instead of the 4 declared in `marketplace.json`.

**Integration and platform compatibility** — Requests for Bedrock compatibility (#29, 4 comments), Skills exposed as MCPs (#16, 4 comments), and the `agentskills.io` reference site being broken with redirect errors (#184, 3 comments, 4 👍).

**Agent governance proposal** — Issue #412 (closed) proposed an agent-governance skill for safety patterns in AI agent systems (policy enforcement, threat detection, trust scoring, audit trails). Not merged.

---

## 3. Active Pending Skills

PRs with recent activity that remain open:

**document-typography (#514)** — Created 2026-03-04, last updated 2026-03-13. Addresses orphan word wrap, widow paragraphs, and numbering misalignment. No maintainer response visible. [Link](https://github.com/anthropics/skills/pull/514)

**ODT skill (#486)** — Created 2026-03-01, last updated 2026-04-14. Covers creation, filling, reading, and conversion of OpenDocument files. Extended update period (6+ weeks) without resolution. [Link](https://github.com/anthropics/skills/pull/486)

**Three fix PRs by @Lubrsy706 (#538, #539, #541)** — All created 2026-03-06, all updated mid-April. Includes: (a) case-sensitive file references in pdf/SKILL.md, (b) unquoted description YAML validation in skill-creator, (c) DOCX tracked change w:id collision with existing bookmarks. All three remain open 6+ weeks after creation. [538](https://github.com/anthropics/skills/pull/538) [539](https://github.com/anthropics/skills/pull/539) [541](https://github.com/anthropics/skills/pull/541)

**sensory skill (#806)** — Created 2026-03-29, last updated 2026-04-02. Teaches Claude to use osascript (AppleScript) for native macOS automation instead of screenshot-based computer use. Two-tier permission system. [Link](https://github.com/anthropics/skills/pull/806)

**testing-patterns (#723)** — Created 2026-03-22, last updated 2026-04-21. Comprehensive testing skill. No maintainer response evident. [Link](https://github.com/anthropics/skills/pull/723)

**AppDeploy (#360)** — Created 2026-02-09, last updated 2026-05-04. Full-stack web app deployment skill. Extended review cycle (3 months). [Link](https://github.com/anthropics/skills/pull/360)

**AURELION skill suite (#444)** — Created 2026-02-21, last updated 2026-05-06. Four skills: kernel (structured thinking templates), advisor, agent, memory. Cognitive + memory framework for professional knowledge management. [Link](https://github.com/anthropics/skills/pull/444)

**n8n-builder + n8n-debugger (#190)** — Created 2025-12-31, last updated 2026-05-18. Includes faf-expert skill for Foundational AI-context Format files. Oldest PR still active (5 months). [Link](https://github.com/anthropics/skills/pull/190)

---

## 4. Daily Notes

**Fix contributions concentrated on skill infrastructure quality.** Three of the top 20 PRs by a single author (@Lubrsy706) address case-sensitive file references, YAML parsing failures, and DOCX tracked change ID collisions. No PRs from this author are new skills; all are bug fixes to existing skills. This suggests community efforts are shifting toward improving the reliability of the existing skill base rather than only adding new capabilities.

**Enterprise and organizational features are the most-upvoted unmet needs.** Issue #228 (org-wide skill sharing, 7 👍) and issue #189 (duplicate skills from plugins, 8 👍) have the highest upvote counts among Issues. Issue #556 (evaluation framework not working, 6 👍) is the highest-engagement open bug report. Together these indicate that organizational deployment and quality assurance infrastructure are the primary pain points, not new skill coverage.

**No clear signal on skills not yet merged.** The 10 longest-open PRs span 3–5 months without resolution or maintainer response visible in the data. Without access to internal discussion, merge criteria, or rejections, no meaningful comparison of acceptance patterns can be made from this snapshot alone.