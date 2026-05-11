# Skills Ecosystem Highlights 2026-05-11

> Generated: 2026-05-11 02:14 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-05-11

## 1. Top Skills Ranking

The following PRs represent the most-discussed Skill additions or improvements in the repository (sorted by comment volume in the top 20, though exact comment counts are not recorded in the data).

**#514 — Add document-typography skill: typographic quality control for generated documents** ([PR](https://github.com/anthropics/skills/pull/514))
- **Functionality:** Targets three common typographic issues in AI-generated documents: orphan word wrap (1–6 word lines), widow paragraphs (headers stranded at page bottom), and numbering misalignment.
- **Discussion highlights:** Author argues these problems affect every document Claude generates and users rarely notice or request fixes. The skill appears designed as a universal quality layer.
- **Status:** Open. Created 2026-03-04, last updated 2026-03-13.

**#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace** ([PR](https://github.com/anthropics/skills/pull/83))
- **Functionality:** Two meta-skills that analyze other skills: `skill-quality-analyzer` evaluates Structure & Documentation (20%), examples, resource usage across five dimensions; `skill-security-analyzer` assesses security posture.
- **Discussion highlights:** Addresses the growing need for quality assurance in the skills ecosystem. The meta-skill approach is novel — skills that evaluate skills.
- **Status:** Open. Created 2025-11-06, last updated 2026-01-07.

**#210 — Improve frontend-design skill clarity and actionability** ([PR](https://github.com/justinwetch/pull/210))
- **Functionality:** Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation and specific enough to steer behavior without ambiguity.
- **Discussion highlights:** Focuses on skill quality and prompt engineering patterns — removing vagueness, adding specificity.
- **Status:** Open. Created 2026-01-05, last updated 2026-03-07.

**#486 — Add ODT skill: OpenDocument text creation and template filling** ([PR](https://github.com/anthropics/skills/pull/486))
- **Functionality:** Covers creating, filling, reading, and converting .odt and .ods files (LibreOffice/OpenDocument format). Triggers on keywords like "ODT", "ODF", "OpenDocument".
- **Discussion highlights:** Fills a gap for open-source document formats; complements the existing DOCX/PDF skills.
- **Status:** Open. Created 2026-03-01, last updated 2026-04-14.

**#723 — Add testing-patterns skill** ([PR](https://github.com/anthropics/skills/pull/723))
- **Functionality:** Comprehensive testing stack coverage: Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), and guidance on what to test vs. what NOT to test.
- **Discussion highlights:** Addresses a core developer workflow need that was previously missing from the skills collection.
- **Status:** Open. Created 2026-03-22, last updated 2026-04-21.

**#568 — Add ServiceNow platform skill** ([PR](https://github.com/anthropics/skills/pull/568))
- **Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
- **Discussion highlights:** Significantly broader than a scripting helper — positions as a full platform knowledge skill.
- **Status:** Open. Created 2026-03-08, last updated 2026-04-23.

**#444 — Add AURELION skill suite (kernel, advisor, agent, memory)** ([PR](https://github.com/anthropics/skills/pull/444))
- **Functionality:** Four skills from the AURELION ecosystem: `aurelion-kernel` (5-floor cognitive framework), plus advisor, agent, and memory skills for structured knowledge management.
- **Discussion highlights:** Largest single skill addition in the dataset (4 skills in one PR). Targets professional knowledge management workflows.
- **Status:** Open. Created 2026-02-21, last updated 2026-05-06.

---

## 2. Community Demand Clusters

Issues reveal several unmet workflow needs and pain points. The following clusters emerged from the top 15 issues by comment activity:

**Skill Management & Reliability (3 issues)**
- [#62](https://github.com/anthropics/skills/issues/62) — All skills disappeared after file rename in Downloads folder. User reports 12 skills became invisible.
- [#61](https://github.com/anthropics/skills/issues/61) — 404 error when loading skills on claude.ai and Claude Desktop for Team plan users.
- [#406](https://github.com/anthropics/skills/issues/406) — Unable to upload or replace skills due to "internal server error" (specific to 2026-02-17); confirmed by multiple users (4 👍).

**Enterprise & Org Features (2 issues)**
- [#228](https://github.com/anthropics/skills/issues/228) — Request for org-wide skill sharing: currently users must manually download .skill files and send via Slack/Teams. Wants shared library or direct sharing link (7 👍).
- [#532](https://github.com/anthropics/skills/issues/532) — `skill-creator` description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users who lack API keys.

**Plugin & Namespace Integrity (3 issues)**
- [#189](https://github.com/anthropics/skills/issues/189) — `document-skills` and `example-skills` plugins install identical skills, causing duplicates in Claude Code's context window (8 👍).
- [#492](https://github.com/anthropics/skills/issues/492) — Community skills distributed under `anthropic/` namespace enables trust boundary abuse where users may grant elevated permissions thinking skills are official.
- [#1087](https://github.com/anthropics/skills/issues/1087) — `document-skills` plugin loads all 17 repo skills instead of only the 4 declared in `marketplace.json`.

**Skill-Creation Tooling & Evaluation (3 issues)**
- [#202](https://github.com/anthropics/skills/issues/202) — `skill-creator` reads like developer documentation rather than an operational skill; verbose tone undermines token efficiency. (Closed, but generated 8 comments).
- [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` produces 0% trigger rate — `claude -p` never invokes skills/commands, making the evaluation pipeline non-functional (6 👍).
- [#532](https://github.com/anthropics/skills/issues/532) — (also above) API key dependency for core skill creation workflow.

**New Skill Proposals (1 issue)**
- [#412](https://github.com/anthropics/skills/issues/412) — Proposal for `agent-governance` skill covering safety patterns: policy enforcement, threat detection, trust scoring, audit trails for AI agent systems.

**Platform Compatibility & Infrastructure (2 issues)**
- [#29](https://github.com/anthropics/skills/issues/29) — Request for AWS Bedrock compatibility.
- [#16](https://github.com/anthropics/skills/issues/16) — Request to expose Skills as MCPs for standardized API interfaces.
- [#184](https://github.com/anthropics/skills/issues/184) — `agentskills.io` reference page has "too many redirects" error (3 👍, closed).

---

## 3. Active Pending Skills

These open PRs have substantive ongoing discussion or represent notable contributions awaiting review:

**#538 — fix(pdf): correct case-sensitive file references in SKILL.md** ([PR](https://github.com/anthropics/skills/pull/538))
- **Discussion:** Fixes 8 case-sensitivity mismatches (e.g., `REFERENCE.md` → `reference.md`) that break on case-sensitive filesystems. One of several fix PRs by the same author targeting concrete bugs.
- **Status:** Open. Created 2026-03-06, last updated 2026-04-29.

**#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks** ([PR](https://github.com/anthropics/skills/pull/541))
- **Discussion:** Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks. Root cause: `w:id` is a shared ID space across bookmarks, tracked changes, etc. Hardcoded low IDs (1,2,3) commonly collide.
- **Status:** Open. Created 2026-03-06, last updated 2026-04-16.

**#539 — fix(skill-creator): warn on unquoted description with YAML special characters** ([PR](https://github.com/anthropics/skills/pull/539))
- **Discussion:** Adds pre-parse validation to `quick_validate.py` to detect unquoted `description` fields containing colons, preventing silent YAML parsing failures.
- **Status:** Open. Created 2026-03-06, last updated 2026-04-16.

**#509 — docs: add CONTRIBUTING.md** ([PR](https://github.com/anthropics/skills/pull/509))
- **Discussion:** Addresses community health gap — repository scored 25% on GitHub's community health metrics. Five-section CONTRIBUTING.md is described as "the most impactful single addition."
- **Status:** Open. Created 2026-03-03, last updated 2026-03-19.

**#360 — Added AppDeploy skill for deploying full-stack webapps directly from Claude** ([PR](https://github.com/anthropics/skills/pull/360))
- **Discussion:** Integrates with AppDeploy.ai for deploying web apps (including full-stack) to public URLs, plus lifecycle management (status checks, versioning, environment management).
- **Status:** Open. Created 2026-02-09, last updated 2026-05-04.

**#806 — Add sensory skill: native macOS automation via AppleScript** ([PR](https://github.com/anthropics/skills/pull/806))
- **Discussion:** Community skill using `osascript` for native macOS automation as alternative to screenshot-based computer use. Two-tier permission system: Tier 1 works out of box (direct app scripting), Tier 2 requires Accessibility permissions.
- **Status:** Open. Created 2026-03-29, last updated 2026-04-02.

---

## 4. Daily Notes

- **Bug-fix activity clusters around concrete, reproducible issues.** Three PRs by @Lubrsy706 (case-sensitivity in PDF skill, bookmark ID collision in DOCX skill, YAML parsing in skill-creator) all target specific, testable failures. This contrasts with the more speculative nature of many new skill PRs and suggests the ecosystem is maturing from "add features" toward "stabilize existing features."

- **Plugin/namespace confusion is the most commented-on infrastructure concern.** Issues #189 (duplicate skills from plugins), #492 (trust boundary abuse under `anthropic/` namespace), and #1087 (plugin loading all skills instead of declared subset) collectively accumulated 16 total comments and 11 reactions. These are distinct bugs but share a common root: the plugin distribution mechanism lacks clear boundaries between official and community content, and between intended and actual skill loading.

- **Enterprise/org adoption faces multiple blockers.** Issues #228 (no org-wide sharing), #532 (API key dependency incompatible with SSO), #29 (no Bedrock support), and #61/#62 (skill visibility and loading errors for Team accounts) indicate the Skills system currently works best for individual developers and less reliably for team or enterprise deployments. No single fix addresses all these issues.