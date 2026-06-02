# Skills Ecosystem Highlights 2026-06-02

> Generated: 2026-06-02 02:45 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights Report — 2026-06-02

## 1. Top Skills Ranking

The following are the most-discussed Skill PRs (by comment count) in the repository as of today. All are currently open.

### [#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)
**Functionality**: Prevents typographic issues in AI-generated documents: orphan word wrap (1–6 words spilling to next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment.
**Discussion highlights**: The PR argues these problems affect every document Claude generates and that users rarely request typographic fixes explicitly. No maintainer merge signals visible.
**Status**: Open since 2026-03-04, last updated 2026-03-13.

### [#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)
**Functionality**: Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Triggers on keywords like "ODF", "OpenDocument", "LibreOffice document".
**Discussion highlights**: Covers a widely-used open standard format missing from the existing skill set.
**Status**: Open since 2026-03-01, last updated 2026-04-14.

### [#210 — Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)
**Functionality**: Revises the existing frontend-design skill for clarity, actionability, and internal coherence — ensuring instructions Claude can follow within a single conversation.
**Discussion highlights**: Focus on making guidance specific enough to steer behavior without being verbose.
**Status**: Open since 2026-01-05, last updated 2026-03-07.

### [#83 — Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)
**Functionality**: Two meta-skills for evaluating other skills: quality analysis across 5 dimensions (Structure & Documentation, Examples, Resources, etc.) and security analysis.
**Discussion highlights**: Meta-skills addressing quality and safety of the skill ecosystem itself — distinct from most content-domain skills.
**Status**: Open since 2025-11-06, last updated 2026-01-07.

### [#568 — Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)
**Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
**Discussion highlights**: Positioned as a wide platform skill rather than a narrow scripting helper.
**Status**: Open since 2026-03-08, last updated 2026-04-23.

### [#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)
**Functionality**: Comprehensive testing coverage: Testing Trophy philosophy, unit testing (AAA pattern, naming, edge cases), React component testing (Testing Library), and testing anti-patterns.
**Discussion highlights**: Covers testing philosophy and what *not* to test — filling a gap in development workflow skills.
**Status**: Open since 2026-03-22, last updated 2026-04-21.

### [#444 — Add AURELION skill suite](https://github.com/anthropics/skills/pull/444)
**Functionality**: Four skills from the AURELION ecosystem: aurelion-kernel (structured thinking templates with 5-floor cognitive framework), aurelion-advisor, aurelion-agent, aurelion-memory.
**Discussion highlights**: A bundled cognitive framework approach for professional knowledge management.
**Status**: Open since 2026-02-21, last updated 2026-05-06.

---

## 2. Community Demand Clusters

From Issues, the following unmet needs and skill directions appear most frequently. These are grouped by topic rather than presented as confirmed trends.

**Platform and workflow infrastructure**
- [Issue #228](https://github.com/anthropics/skills/issues/228): Request for org-wide skill sharing in Claude.ai — users currently must download and share `.skill` files manually via Slack/Teams, then have colleagues navigate Settings > Capabilities to upload. 13 comments, 7 upvotes.
- [Issue #189](https://github.com/anthropics/skills/issues/189): Duplicate skills when installing both `document-skills` and `example-skills` plugins — they contain identical content despite separate declared purposes. 6 comments, 8 upvotes.

**Bug reports affecting skill tooling**
- [Issue #556](https://github.com/anthropics/skills/issues/556): `run_eval.py` never triggers skills when using `claude -p` — 0% trigger rate across all queries. 9 comments, 6 upvotes.
- [Issue #62](https://github.com/anthropics/skills/issues/62): Skills disappearing from Claude.ai after file rename in local Downloads folder. 10 comments.
- [Issue #61](https://github.com/anthropics/skills/issues/61): 404 error when loading skills on Team plan via `claude.ai/api/organizations/{id}/skills/list-skills`. 3 comments.

**Security and trust boundary concerns**
- [Issue #492](https://github.com/anthropics/skills/issues/492): Community skills distributed under `anthropic/` namespace impersonating official skills — trust boundary vulnerability where users may grant elevated permissions. 7 comments.
- [Issue #1175](https://github.com/anthropics/skills/issues/1175): Security and context window concerns when embedding SharePoint Online access control logic in SKILL.md files. 2 comments.

**Skill distribution and packaging**
- [Issue #1087](https://github.com/anthropics/skills/issues/1087): `document-skills` plugin loads all 17 repo skills instead of only the 4 declared in `marketplace.json`. 2 comments.
- [Issue #1220](https://github.com/anthropics/skills/issues/1220): Request for multi-file preload/inline bundling of reference files — currently only `SKILL.md` is delivered on invocation; logically separated reference files are not loaded. 2 comments.

**Format and integration requests**
- [Issue #16](https://github.com/anthropics/skills/issues/16): Expose Skills as MCPs — using MCP protocol to signal API and package AI software. 4 comments.
- [Issue #29](https://github.com/anthropics/skills/issues/29): Skills usage with AWS Bedrock — unclear if currently possible. 4 comments.

---

## 3. Active Pending Skills

These open PRs have active discussion and are not yet merged. Status is based on comment activity and last-updated timestamps.

### [#1099 — skill-creator: fix run_eval.py crash on Windows](https://github.com/anthropics/skills/pull/1099)
**Discussion**: `run_eval.py` is unusable on Windows — every query returns "not triggered" resulting in precision=100% recall=0% optimization loop. Root cause is subprocess pipe handling with `WinError 10038`. Two maintainer-like comments noted.
**Latest**: Updated 2026-05-24, last comment 2026-05-24. Likely awaiting reproduction confirmation or merge.

### [#1050 — skill-creator: fix Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)
**Discussion**: Two 1-line fixes: (1) `subprocess.Popen(["claude", ...])` fails on Windows because CLI ships as `claude.cmd` and Python doesn't honor `PATHEXT`; (2) encoding issue in `run_loop.py`. Fixes found on Windows 11.
**Latest**: Updated 2026-05-24. Simple, targeted PR; could merge quickly if validated.

### [#361 — Detect unquoted YAML special characters in description fields](https://github.com/anthropics/skills/pull/361)
**Discussion**: Adds pre-parse check in `quick_validate.py` for unquoted `description` and `compatibility` values containing `: # { } [ ]`. These cause `yaml.safe_load()` silent misparse. PR [#539](https://github.com/anthropics/skills/pull/539) addresses the same issue with a slightly different approach (focusing on `:` in descriptions).
**Latest**: Updated 2026-06-01. This is the most recently active of the YAML validation PRs; [#539](https://github.com/anthropics/skills/pull/539) last updated 2026-04-16. Authors are different ([@Mr-Neutr0n](https://github.com/Mr-Neutr0n) vs [@Lubrsy706](https://github.com/Lubrsy706)). Both remain open — no decision on which approach will be accepted.

### [#541 — fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)
**Discussion**: Fixes DOCX corruption when adding tracked changes to documents with existing bookmarks. Root cause: `w:id` is a shared ID space in OOXML across bookmarks, tracked changes, comments, and move ranges — hardcoded low IDs in examples cause collisions.
**Latest**: Updated 2026-04-16. Technical fix with clear root-cause analysis; no maintainer merge yet.

### [#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)
**Discussion**: Fixes 8 case-sensitivity mismatches where SKILL.md references `REFERENCE.md` and `FORMS.md` but actual files are lowercase. Breaks on case-sensitive filesystems.
**Latest**: Updated 2026-04-29. Low-risk fix; appears to be awaiting review.

---

## 4. Daily Notes

**Windows compatibility is a recurring gap in skill-creator tooling.** Two open PRs ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) and one issue ([#556](https://github.com/anthropics/skills/issues/556)) all address Windows-specific subprocess or pipe failures in `run_eval.py` and `run_loop.py`. Together these cover three distinct failure modes (pipe read, PATHEXT resolution, and 0% trigger rate). This is enough data to call a pattern rather than an isolated observation.

**YAML frontmatter parsing robustness is being addressed by two separate contributors.** PR [#361](https://github.com/anthropics/skills/pull/361) and PR [#539](https://github.com/anthropics/skills/pull/539) both target unquoted YAML special characters in description fields, using different approaches but solving the same underlying problem (silent misparse by `yaml.safe_load()`). No maintainer decision has been made on which approach to merge, or whether to merge both. Given the overlap, consolidation may be needed.

**Enterprise and compliance-related demand appears in multiple dimensions** — org-wide sharing ([#228](https://github.com/anthropics/skills/issues/228)), namespace trust/security ([#492](https://github.com/anthropics/skills/issues/492)), SharePoint permission handling ([#1175](https://github.com/anthropics/skills/issues/1175)), and ServiceNow integration ([#568](https://github.com/anthropics/skills/pull/568)). These are separate requests with no single thematic frame, but together suggest the skills ecosystem is being evaluated for organizational deployment scenarios beyond individual developer use.