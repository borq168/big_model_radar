# Skills Ecosystem Highlights 2026-05-08

> Generated: 2026-05-08 02:10 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights — 2026-05-08

## Top Skills Ranking

The following Skills PRs attracted the most community discussion or represent significant ecosystem contributions:

**1. `document-typography` — typographic quality control (#514)**
- **Functionality:** Prevents orphan word wrap (1–6 words on a new line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment in AI-generated documents.
- **Discussion highlights:** The PR notes these issues "affect every document Claude generates" and that users "rarely ask for good typography" — positioning this as a hidden quality gap the model should handle proactively.
- **Status:** Open, created 2026-03-04, updated 2026-03-13.
- **Link:** https://github.com/anthropics/skills/pull/514

**2. `skill-quality-analyzer` & `skill-security-analyzer` — meta-skills for the marketplace (#83)**
- **Functionality:** Two meta-skills — the first evaluates skills across Structure & Documentation (20%), examples, and resources; the second focuses on security analysis.
- **Discussion highlights:** The PR explicitly positions these as "meta skills" for the marketplace, i.e., tools to evaluate other skills rather than end-user workflows.
- **Status:** Open, created 2025-11-06, updated 2026-01-07.
- **Link:** https://github.com/anthropics/skills/pull/83

**3. `odt` — OpenDocument text creation and template filling (#486)**
- **Functionality:** Creates, fills, reads, and converts ODF files (.odt, .ods). Triggers on mentions of "ODT," "ODS," "OpenDocument," or "LibreOffice document."
- **Discussion highlights:** Community-authored; covers both creation and template-based filling, plus ODT→HTML conversion. One of several format-specific skills (alongside PDF, DOCX, PPTX).
- **Status:** Open, created 2026-03-01, updated 2026-04-14.
- **Link:** https://github.com/anthropics/skills/pull/486

**4. `testing-patterns` — comprehensive testing stack skill (#723)**
- **Functionality:** Covers testing philosophy (Testing Trophy model), unit testing (AAA pattern, pure functions), React component testing (Testing Library), and what not to test.
- **Discussion highlights:** Reflects demand for structured QA guidance within Claude Code — note the skill prescribes *what not to test*, not just patterns.
- **Status:** Open, created 2026-03-22, updated 2026-04-21.
- **Link:** https://github.com/anthropics/skills/pull/723

**5. `appdeploy` — full-stack webapp deployment from Claude (#360)**
- **Functionality:** Deploys and manages web apps via AppDeploy.ai, including full-stack apps, lifecycle management, status checks, and versioning.
- **Discussion highlights:** Enables a "deploy from conversation" workflow; covers not just deployment but ongoing management.
- **Status:** Open, created 2026-02-09, updated 2026-05-04.
- **Link:** https://github.com/anthropics/skills/pull/360

**6. `servicenow` — ServiceNow platform skill (#568)**
- **Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub.
- **Discussion highlights:** One of the most enterprise-focused skills in the repo — covers a wide platform surface rather than a narrow scripting helper. Updated as recently as 2026-04-23.
- **Status:** Open, created 2026-03-08, updated 2026-04-23.
- **Link:** https://github.com/anthropics/skills/pull/568

---

## Community Demand Clusters

From Issues, the following unmet needs or new skill directions appear most frequently:

**Organization and sharing workflows**
- Issue #228 requests org-wide skill sharing without requiring manual file transfers (Slack/Teams → Settings upload). 7 👍, 9 comments, open since 2026-01-13.
- Issue #189 reports that the two official skill plugins (`document-skills` and `example-skills`) install identical content, causing duplicates. 8 👍, 6 comments, open.
- **Link:** https://github.com/anthropics/skills/issues/228

**Security, trust, and governance**
- Issue #492 flags that community skills distributed under the `anthropic/` namespace enable trust boundary abuse — users may grant elevated permissions believing them official. 2 👍, 4 comments, open.
- Issue #412 (closed) proposed an `agent-governance` skill for safety patterns in AI agent systems (policy enforcement, threat detection, trust scoring, audit trails). Closed status unknown, but the proposal direction is notable.
- **Link:** https://github.com/anthropics/skills/issues/492

**Skill infrastructure and tooling bugs**
- Issue #556: `run_eval.py` triggers no skills at 0% rate across all queries — the eval harness appears broken for all commands. 6 👍, 6 comments, open.
- Issue #532: skill-creator's description optimizer requires `ANTHROPIC_API_KEY`, making it unusable for enterprise/SSO users. 1 👍, 2 comments, closed.
- Issue #406: upload/replace API returning 500 internal server errors across both desktop and browser. 4 👍, 2 comments, open.
- **Links:** #556 (https://github.com/anthropics/skills/issues/556), #532 (https://github.com/anthropics/skills/issues/532), #406 (https://github.com/anthropics/skills/issues/406)

**Platform integration gaps**
- Issue #29 asks how to use skills with AWS Bedrock — no resolution visible.
- Issue #16 proposes exposing Skills as MCPs (Model Context Protocol) to create a standard API surface.

---

## Active Pending Skills

These PRs have substantive discussion or recent updates and remain unmerged:

**`skill-quality-analyzer` & `skill-security-analyzer` (#83)**
- Meta-skills that evaluate other skills. Open since 2025-11-06, last updated 2026-01-07. This is one of the longest-open non-trivial PRs. Discussion may center on whether meta-skills belong in the main repo or should be separate.
- **Link:** https://github.com/anthropics/skills/pull/83

**`shodh-memory` — persistent context for AI agents (#154)**
- Teaches Claude a `proactive_context` pattern to surface relevant memories from a persistent store. Open since 2025-12-19, last updated 2026-03-03. Community memory skills are a recurring pattern (see also AURELION suite #444).
- **Link:** https://github.com/anthropics/skills/pull/154

**`AURELION` skill suite (#444)**
- Four skills (kernel, advisor, agent, memory) forming a cognitive + memory framework for professional knowledge management. Updated 2026-05-06, making it one of the most recently touched open PRs. May be under active review.
- **Link:** https://github.com/anthropics/skills/pull/444

**Multiple bugfix PRs by @Lubrsy706 (#538, #541, #539)**
- #538 fixes case-sensitive file references in the PDF skill (breaks on Linux/macOS).
- #541 fixes DOCX tracked-change ID collisions causing document corruption.
- #539 adds YAML pre-parse validation for unquoted descriptions.
- All created 2026-03-06, all updated in mid-April. These are targeted fixes rather than new skills, but they represent substantial quality-of-life corrections.
- **Links:** #538 (https://github.com/anthropics/skills/pull/538), #541 (https://github.com/anthropics/skills/pull/541), #539 (https://github.com/anthropics/skills/pull/539)

**`sensory` — native macOS automation via AppleScript (#806)**
- Uses `osascript` for direct app scripting and System Events UI automation, offered as an alternative to screenshot-based computer use. Two-tier permission system. Created 2026-03-29, updated 2026-04-02.
- **Link:** https://github.com/anthropics/skills/pull/806

---

## Daily Notes

1. **Meta-skills and quality tooling are a growing category.** The `skill-quality-analyzer` (#83), `skill-security-analyzer` (#83), and the `skill-creator` bugfix PRs (#539, #532) all focus on the skill ecosystem itself — validating, evaluating, and securing skills rather than providing end-user workflows. This suggests the community is iterating on the skill authoring infrastructure in parallel with domain-specific skill development.

2. **Format/document skills dominate the PR list by volume, but infrastructure fixes receive the most sustained engagement.** Document skills (typography, ODT, PDF, DOCX) and platform skills (ServiceNow, AppDeploy) show many PRs in the top 20, but the bugfix PRs by @Lubrsy706 (#538, #541) and the skill-creator validation work (#539) address root causes (case sensitivity, XML corruption, YAML parsing) that affect many users. The evaluation harness bug (#556, 6 👍) and upload API errors (#406, 4 👍) confirm operational reliability is a community concern.

3. **The security/trust boundary issue (#492) is a structurally significant concern with no public resolution.** The fact that community skills are distributed under the `anthropic/` namespace — without signals distinguishing official from community content — creates a trust boundary vulnerability. The issue has been open since 2026-03-02 with 4 comments and no visible maintainer response as of the data snapshot. This contrasts with the active PR review cadence seen elsewhere.