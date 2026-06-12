# Skills Ecosystem Highlights 2026-06-12

> Generated: 2026-06-12 02:42 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-12

## 1. Top Skills Ranking

The following Pull Requests represent the most-discussed Skill additions or improvements in the repository.

**#1046 — feat: add new skill definition files for frontend-design, ai-experience-consultant, and automation-workflows-builder**
Three new skills bundled in one PR. Most recent activity on 2026-06-10 with no maintainer merge signal yet. Repository is **Open**. URL: https://github.com/anthropics/skills/pull/1046

**#514 — Add document-typography skill: typographic quality control for generated documents**
Addresses orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Specific, narrow scope with broad applicability. Last updated 2026-03-13. URL: https://github.com/anthropics/skills/pull/514

**#486 — Add ODT skill — OpenDocument text creation and template filling**
Covers .odt, .ods, OpenDocument format creation, reading, and conversion. Triggers include mentions of LibreOffice or ISO standard document formats. URL: https://github.com/anthropics/skills/pull/486

**#210 — Improve frontend-design skill clarity and actionability**
Revises existing frontend-design skill for better executable instructions, ensuring each directive is followable within a single conversation. Discussed as a model for skill refactoring. URL: https://github.com/anthropics/skills/pull/210

**#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace**
Meta-skills that evaluate other skills across structure, documentation, and security dimensions. Addressed as part of skill ecosystem quality tooling. URL: https://github.com/anthropics/skills/pull/83

**#181 — Add SAP-RPT-1-OSS predictor skill**
Integrates SAP's open source tabular foundation model for predictive analytics on SAP business data. Enterprise-oriented skill with specific model dependency. URL: https://github.com/anthropics/skills/pull/181

**#723 — feat: add testing-patterns skill**
Comprehensive testing skill covering Testing Trophy model, AAA pattern, React Testing Library, E2E with Playwright, and visual regression. Covers full testing stack. URL: https://github.com/anthropics/skills/pull/723

**#509 — docs: add CONTRIBUTING.md**
Addresses community health gap, raises repo from 25% on GitHub's community health metrics. Five-section guide covering skill proposal, creation, validation, submission, and best practices. URL: https://github.com/anthropics/skills/pull/509

---

## 2. Community Demand Clusters

The following unmet workflow needs are visible in the Issues dataset (50 total, top 15 with comments). Groupings are based on recurring request patterns.

### Skill Distribution & Sharing
- **#228 — Enable org-wide skill sharing in Claude.ai** (14 comments, 7 👍). Users must currently download `.skill` files and share manually via Slack/Teams. A shared library or direct sharing link is requested.
- **#189 — document-skills and example-skills plugins install identical content** (6 comments, 8 👍). Duplicate skills consuming context window space when both plugins are installed.
- **#492 — Security: Community skills under anthropic/ namespace enable trust boundary abuse** (7 comments, 2 👍). Community skills impersonating official Anthropic skills, creating permission trust issues.
URLs: https://github.com/anthropics/skills/issues/228 | https://github.com/anthropics/skills/issues/189 | https://github.com/anthropics/skills/issues/492

### Tooling & Reliability
- **#556 — run_eval.py: claude -p never triggers skills/commands** (12 comments, 7 👍). Critical bug: evaluation script reports 0% trigger rate across all queries, breaking the description-optimization loop. **Independent reproductions confirmed by multiple contributors.**
- **#1061 — Windows compatibility: skill-creator scripts fail** (3 comments). Three blocking issues: subprocess PATHEXT, cp1252 encoding, select on pipes.
- **#1169 — skill-creator description-optimisation loop: recall=0% on every iteration** (2 comments, 1 👍). Related to #556; even literal slash-command queries score 0% recall.
URLs: https://github.com/anthropics/skills/issues/556 | https://github.com/anthropics/skills/issues/1061 | https://github.com/anthropics/skills/issues/1169

### Platform & Integration
- **#29 — Usage with Bedrock** (4 comments). Users unable to use skills with AWS Bedrock.
- **#16 — Expose Skills as MCPs** (4 comments). Request for MCP protocol interface for skill creation and packaging.
- **#1220 — Feature request: multi-file preload / inline bundling for skill reference files** (2 comments). Currently only SKILL.md is delivered; reference files are not preloaded into context.
URLs: https://github.com/anthropics/skills/issues/29 | https://github.com/anthropics/skills/issues/16 | https://github.com/anthropics/skills/issues/1220

### New Skill Proposals
- **#412 — Skill proposal: agent-governance (safety patterns for AI agent systems)** (4 comments, now closed). Policy enforcement, threat detection, trust scoring, audit trails.
- **#1175 — Concerns regarding Security and Context Window when handling SharePoint Online documents** (3 comments, closed). Permission logic in SKILL.md and context window limits.
URLs: https://github.com/anthropics/skills/issues/412 | https://github.com/anthropics/skills/issues/1175

---

## 3. Active Pending Skills

Pull Requests with recent comment activity that have not yet been merged. Status descriptions reflect current discussion only.

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall**
PR proposes three fixes: proper evaluation artifact installation as a real skill, Windows stream reading fix, trigger detection fix, and parallel worker handling. Author @MartinCajiao. Last updated 2026-06-11. Addresses #556 and #1169. URL: https://github.com/anthropics/skills/pull/1298

**#1140 — feat: implement agent-creator skill and fix multi-tool evaluation**
Adds meta-skill for task-specific agent sets. Fixes evaluation.py for parallel tool calls and adds Windows support for recalc.py via %APPDATA% paths. Addresses #1120. Last updated 2026-06-02. URL: https://github.com/anthropics/skills/pull/1140

**#1099 — skill-creator: fix run_eval.py crash on Windows**
Fixes subprocess pipe reading on Windows where every query records as "not triggered." Single-purpose fix for WinError 10038. Last updated 2026-05-24. URL: https://github.com/anthropics/skills/pull/1099

**#1050 — skill-creator: fix Windows subprocess + encoding bugs**
Two 1-line fixes for `run_loop.py`: subprocess Popen failing on Windows when CLI ships as `claude.cmd`, and character encoding issues. Last updated 2026-05-24. URL: https://github.com/anthropics/skills/pull/1050

**#806 — feat: add sensory skill — native macOS automation via AppleScript**
Community skill using `osascript` for native macOS automation instead of screenshot-based computer use. Two-tier permission system. Last updated 2026-04-02. URL: https://github.com/anthropics/skills/pull/806

**#361 — Detect unquoted YAML special characters in description fields**
Adds pre-parse validation for unquoted `description` and `compatibility` values containing `: # { } [ ]`. Related to #539. Last updated 2026-06-10. URL: https://github.com/anthropics/skills/pull/361

---

## 4. Daily Notes

1. **The `run_eval.py` 0% recall bug is the single biggest blocker for skill development tooling** as of this snapshot. Issue #556 (12 comments) has been independently reproduced by at least 10 contributors (per PR #1298), and three separate PRs (#1099, #1050, #1298) propose overlapping but not fully consolidated fixes. No maintainer merge or canonical fix is visible in the data.

2. **Windows compatibility issues are a recurring and unresolved cross-cutting concern.** PRs #1099, #1050, #1140, and Issues #1061 all address distinct Windows failures (subprocess, encoding, pipe reading, file paths). These are separate problems with separate root causes, not a single bug.

3. **Skill distribution and trust boundaries are emerging as platform-level gaps.** Issue #228 (org-wide sharing) has the highest comment count at 14 and 7 upvotes. Issue #492 (namespace impersonation) raises a security concern with no visible resolution. The duplicate plugin content issue (#189) also remains open. No maintainer response to any of these three is visible in the data.