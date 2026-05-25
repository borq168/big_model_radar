# Skills Ecosystem Highlights 2026-05-25

> Generated: 2026-05-25 02:37 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

# Skills Community Highlights — 2026-05-25

## Top Skills Ranking

The following PRs have attracted the most community discussion and represent the most active skill development efforts:

### 1. document-typography (#514) — Open
**Functionality**: Prevents typographic issues in AI-generated documents: orphan word wrap (1–6 words on new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Covers a class of output-quality problems that affect every document Claude generates.
**Discussion**: The PR notes these issues are pervasive and users rarely request typographic fixes explicitly, making this a proactive quality-of-life skill.
**Status**: Open, last updated 2026-03-13
**Link**: https://github.com/anthropics/skills/pull/514

### 2. ODT skill (#486) — Open
**Functionality**: OpenDocument Text (.odt, .ods) creation, template filling, and parsing ODT to HTML. Triggers on mentions of 'ODT', 'ODS', 'ODF', 'OpenDocument', 'LibreOffice document', or requests for ISO-standard format documents.
**Discussion**: Addresses a format gap — the repo already has PDF, DOCX, and PPTX skills but lacked OpenDocument support.
**Status**: Open, last updated 2026-04-14
**Link**: https://github.com/anthropics/skills/pull/486

### 3. Frontend-design skill improvement (#210) — Open
**Functionality**: Revises the existing frontend-design skill for clarity, actionability, and internal coherence. Ensures every instruction is something Claude can follow within a single conversation.
**Discussion**: Focused on skill quality — making instructions specific enough to steer behavior without being too verbose.
**Status**: Open, last updated 2026-03-07
**Link**: https://github.com/anthropics/skills/pull/210

### 4. Skill-quality-analyzer and skill-security-analyzer (#83) — Open
**Functionality**: Two meta-skills: (1) a quality analysis tool evaluating Structure & Documentation (20%), examples, resources; (2) a security analysis tool for community skills.
**Discussion**: Represents a meta-layer — skills that analyze other skills. Signals growing interest in skill quality assurance.
**Status**: Open, last updated 2026-01-07
**Link**: https://github.com/anthropics/skills/pull/83

### 5. AURELION skill suite (#444) — Open
**Functionality**: Four skills from the AURELION ecosystem — structured cognitive + memory framework for professional knowledge management. Includes `aurelion-kernel` (5-floor cognitive framework for structured thinking), plus advisor, agent, and memory skills.
**Discussion**: Largest single-PR skill addition by count (4 skills). Represents a full ecosystem integration rather than a single capability.
**Status**: Open, last updated 2026-05-06
**Link**: https://github.com/anthropics/skills/pull/444

### 6. ServiceNow platform skill (#568) — Open
**Functionality**: Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, and IntegrationHub.
**Discussion**: Enterprise platform skill targeting ServiceNow — a specific enterprise tool ecosystem rather than a general capability.
**Status**: Open, last updated 2026-04-23
**Link**: https://github.com/anthropics/skills/pull/568

### 7. Testing-patterns skill (#723) — Open
**Functionality**: Comprehensive testing skill covering Testing Trophy model, unit testing (AAA pattern, pure functions, edge cases), React component testing with Testing Library, integration testing, and E2E testing.
**Discussion**: Addresses a core software engineering workflow — testing — with structured guidance across the full stack.
**Status**: Open, last updated 2026-04-21
**Link**: https://github.com/anthropics/skills/pull/723

### 8. n8n-builder and n8n-debugger (#190) — Open
**Functionality**: Two workflow-automation skills: building n8n workflows from scratch and debugging existing n8n workflows. Also includes `faf-expert` for Foundational AI-context Format files and CLAUDE.md bi-sync.
**Discussion**: Production-tested community skills covering a popular automation tool (n8n) plus persistent project context management (FAF).
**Status**: Open, last updated 2026-05-18
**Link**: https://github.com/anthropics/skills/pull/190

---

## Community Demand Clusters

Issues reveal the following groups of unmet workflow needs or pain points:

### Skill sharing and organization
- **#228** (13 comments, 7 👍): Request for org-wide skill sharing in Claude.ai — currently users must download `.skill` files and send them manually.
- **#189** (6 comments, 8 👍): Duplicate skills when installing both `document-skills` and `example-skills` plugins — they contain identical content.
- **#1087** (2 comments, 1 👍): `document-skills` plugin loads all 17 skills from the repo instead of only the 4 declared in `marketplace.json`.

### Tooling and evaluation bugs
- **#556** (8 comments, 6 👍): `run_eval.py` has 0% trigger rate — `claude -p` never triggers skills/commands, making the evaluation loop report `precision=100% recall=0%`.
- **#202** (8 comments, 1 👍, CLOSED): `skill-creator` reads like developer documentation rather than an operational skill; its verbose educational tone undermines token efficiency.
- **#62** (10 comments, 2 👍): Skills disappearing after file rename in the Downloads folder — user created 12 skills that became no longer visible.

### Security and trust
- **#492** (6 comments, 2 👍): Community skills distributed under `anthropic/` namespace create trust boundary vulnerability — users may grant elevated permissions to skills they believe are official.
- **#1175** (2 comments): Concerns about security and context window when handling SharePoint Online documents via agent skills — writing access control logic directly in SKILL.md.

### Format support requests
- **#16** (4 comments): Request to expose Skills as MCPs — using MCP protocol to create and package AI software.
- **#29** (4 comments): Request for AWS Bedrock compatibility — user unable to make skills work with Bedrock.

---

## Active Pending Skills

The following PRs have recent activity and remain open without merge:

### PDF skill case-sensitive file references (#538) — Open
**Current discussion**: Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` are referenced in uppercase but the actual files are lowercase. Breaks on case-sensitive filesystems. Last updated 2026-04-29.
**Link**: https://github.com/anthropics/skills/pull/538

### Skill-creator YAML validation (#539) — Open
**Current discussion**: Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing `:`, preventing silent YAML parsing failures where description is truncated. Last updated 2026-04-16.
**Link**: https://github.com/anthropics/skills/pull/539

### DOCX tracked change w:id collision (#541) — Open
**Current discussion**: Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. Root cause is shared `w:id` ID space across bookmarks, tracked changes, comments, and move ranges — hardcoded low IDs (1, 2, 3) conflict with existing document IDs. Last updated 2026-04-16.
**Link**: https://github.com/anthropics/skills/pull/541

### run_eval.py Windows subprocess pipe crash (#1099) — Open
**Current discussion**: `run_eval.py` unusable on Windows — every query recorded as "not triggered" regardless of description being tested. Symptom is `[WinError 10038]` flood from subprocess pipe. Last updated 2026-05-24.
**Link**: https://github.com/anthropics/skills/pull/1099

### Skill-creator Windows subprocess + encoding bugs (#1050) — Open
**Current discussion**: Two Windows compatibility fixes: (1) `subprocess.Popen(["claude", ...])` fails because Windows CLI ships as `claude.cmd` and Python's subprocess doesn't honor `PATHEXT`; (2) encoding issue. Last updated 2026-05-24.
**Link**: https://github.com/anthropics/skills/pull/1050

### CONTRIBUTING.md (#509) — Open
**Current discussion**: Adds `CONTRIBUTING.md` addressing community health gap (repo scores 25% on GitHub community health metrics). Five sections covering expectations, setup, skill structure, review criteria, and resources. Closes issue #452. Last updated 2026-03-19.
**Link**: https://github.com/anthropics/skills/pull/509

---

## Daily Notes

1. **Windows compatibility is the most active single fix area.** Two separate PRs (#1099, #1050) both address Windows-specific subprocess failures in the skill-creator tooling, with both last updated 2026-05-24. Issue #556 independently reports 0% trigger rate on `run_eval.py` which is also Windows-related. This suggests the tooling has received significantly less testing on Windows than on macOS/Linux.

2. **Plugin vs. marketplace inconsistency is a recurring issue theme.** Issue #189 (duplicate content across plugins), issue #1087 (plugin loads undeclared skills), and issue #492 (namespace trust concerns) all point to the plugin/marketplace distribution layer having structural problems that affect user experience and security perception.

3. **No clear signal on new skill direction preference.** The open PRs span a wide range: document typography, ODT format, ServiceNow enterprise platform, AURELION cognitive framework, n8n workflow automation, testing patterns, and SAP predictive analytics. No single domain dominates the incoming skill proposals.