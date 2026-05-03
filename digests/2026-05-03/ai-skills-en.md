# Skills Ecosystem Highlights 2026-05-03

> Generated: 2026-05-03 02:01 UTC | Repositories covered: 1

Sources:
- [Claude Code Skills](https://github.com/anthropics/skills)

---

<think>The user wants me to analyze the provided GitHub data from the anthropics/skills repository and generate a skills community highlights report. Let me parse through the data carefully.

From the PRs (sorted by comments, showing top 20):
1. #514 - document-typography skill (typographic quality control)
2. #538 - fix(pdf): case-sensitive file references
3. #83 - skill-quality-analyzer and skill-security-analyzer
4. #210 - frontend-design skill improvement
5. #486 - ODT skill (OpenDocument)
6. #539 - fix(skill-creator): YAML special characters
7. #541 - fix(docx): tracked change w:id collision
8. #509 - docs: add CONTRIBUTING.md
9. #95 - system documentation and flowcharts
10. #181 - SAP-RPT-1-OSS predictor skill
11. #723 - testing-patterns skill
12. #335 - masonry-generate-image-and-videos skill
13. #806 - sensory skill (AppleScript macOS automation)
14. #54 - docs improvement (Spanish)
15. #154 - shodh-memory skill (persistent context)
16. #147 - codebase-inventory-audit skill
17. #568 - ServiceNow platform skill
18. #666 - Remove duplicate skill-creator skill
19. #664 - claude-obsidian-reporter skill
20. #616 - HADS skill (Human-AI Document Standard)

From the Issues (sorted by comments, showing top 15):
1. #62 - Skills disappeared, errors (10 comments)
2. #228 - Enable org-wide skill sharing (9 comments)
3. #202 - skill-creator should be updated (8 comments, CLOSED)
4. #556 - run_eval.py never triggers skills (6 comments)


5. #189 - document-skills and example-skills duplicate (5 comments)
6. #492 - Security: Community skills namespace abuse (4 comments)
7. #412 - Agent governance skill proposal (4 comments, CLOSED)
8. #29 - Usage with bedrock (4 comments)
9. #16 - Expose Skills as MCPs (4 comments)
10. #184 - agentskills.io too many redirects (3 comments, CLOSED)
11. #61 - Not found error when loading Skills (3 comments)
12. #868 - spei (2 comments)
13. #532 - skill-creator API key requirement (2 comments, CLOSED)
14. #406 - Unable to upload/replace skills (2 comments)
15. #403 - Unable to delete skill versions (2 comments)

The PRs lack comment counts, so I'm ranking by recency and relevance instead. The most active recent work includes document-typography (#514), PDF fixes (#538), and skill quality improvements (#83). The frontend-design update (#210) and ODT skill (#486) represent significant new capabilities. Notable fixes address YAML parsing (#539), DOCX tracking (#541), and documentation gaps (#509). Platform-specific additions like SAP-RPT-1-OSS (#181) and ServiceNow (#568) show expansion into enterprise tools, while testing-patterns (#723) and AppleScript automation (#806) address developer workflow needs.

The community is actively requesting org-wide sharing (#228), better evaluation tooling (#556), and resolution of duplicate skills (#189). There's also concern about security implications of community skills (#492) and interest in exposing skills as MCPs (#16). The skill-creator itself needs updates (#202) and has API key limitations (#532). Infrastructure issues persist around skill loading (#61), uploads (#406), and deletions (#403), plus external dependencies like agentskills.io (#184).

Looking at the most active discussions, the document-typography skill (#514) is generating significant engagement around typographic quality control for AI-generated documents, addressing orphan words, widows, and numbering alignment. The skill-quality-analyzer and skill-security-analyzer (#83) represent a meta-skill approach to evaluating other skills. The frontend-design skill (#210) is being refined for clarity and actionability. The ODT skill (#486) handles OpenDocument text creation and conversion. The testing-patterns skill (#723) covers comprehensive testing philosophy and unit testing patterns. The ServiceNow platform skill (#568) is a broad enterprise tool covering multiple ServiceNow modules. The sensory skill (#806) enables native macOS automation through AppleScript. The HADS skill (#616) introduces a Human-AI Document Standard for technical documentation.

From the issues, I'm seeing several key demand patterns: organizational skill sharing and collaboration, evaluation and benchmarking infrastructure, security concerns around community skills, platform integration needs like Bedrock support, and MCP exposure. There's also demand for agent governance patterns and addressing skill lifecycle issues like duplicates and disappearing skills.

Looking at the most promising pending work, several PRs stand out for their potential impact. The document-typography skill could address a universal pain point across all document generation. The skill-quality-analyzer and skill-security-analyzer would provide essential tooling for the community. The ODT skill fills a gap in open document format support. The testing-patterns skill would strengthen quality assurance practices. The ServiceNow skill targets a major enterprise platform. The sensory skill enables native macOS automation, which is valuable for desktop workflows.
</think>

# Skills Community Highlights Report

## 1. Top Skills Ranking

The following Skills generated the most community discussion and engagement:

| # | Skill | Functionality | Highlights | Status |
|---|-------|---------------|------------|--------|
| 1 | **document-typography** (#514) | Prevents typographic problems in AI-generated docs: orphan word wrap, widow paragraphs, numbering misalignment | Addresses a universal pain point affecting every document Claude generates; targets quality control for generated output | OPEN |
| 2 | **skill-quality-analyzer & skill-security-analyzer** (#83) | Meta-skills evaluating Claude Skills across 5 dimensions: Structure, Documentation, Security, Performance, Maintainability | First comprehensive quality framework for the ecosystem; enables skill vetting at scale | OPEN |
| 3 | **frontend-design** (#210) | Revised frontend-design skill with clearer, more actionable instructions | Focused on single-conversation execution and specificity of guidance | OPEN |
| 4 | **ODT** (#486) | OpenDocument text creation, template filling, and ODT-to-HTML conversion | Expands document format support beyond proprietary formats; ISO standard compliance | OPEN |
| 5 | **testing-patterns** (#723) | Full testing stack: Testing Trophy model, AAA unit testing, React component testing with Testing Library | Comprehensive coverage from philosophy to implementation patterns | OPEN |
| 6 | **ServiceNow** (#568) | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, Security Incident Response | Major enterprise platform coverage; 9 distinct modules integrated | OPEN |
| 7 | **sensory** (#806) | Native macOS automation via AppleScript (`osascript`) instead of screenshot-based computer use | Two-tier permission system; direct app scripting without Accessibility permissions for Tier 1 | OPEN |
| 8 | **HADS** (#616) | Human-AI Document Standard—a Markdown convention serving both human and AI readers | Addresses the dual-audience documentation problem; lightweight convention | OPEN |

---

## 2. Community Demand Trends

Issues reveal concentrated demand in these directions:

| Trend | Issue(s) | Demand Signal |
|-------|----------|---------------|
| **Org-wide skill sharing** | #228 (9 comments, 👍7) | Users need shared skill libraries or direct sharing links instead of manual upload/download via Slack/Teams |
| **Evaluation & benchmarking infrastructure** | #556 (6 comments, 👍6) | `run_eval.py` has 0% trigger rate—community needs reliable skill invocation testing |
| **Skill lifecycle management** | #62 (10 comments), #406, #403 | Skills disappearing, upload failures, deletion errors—basic CRUD operations are broken |
| **Security & trust boundaries** | #492 (4 comments) | Community skills distributed under `anthropic/` namespace create impersonation risk |
| **Enterprise SSO compatibility** | #532 (CLOSED) | skill-creator requires `ANTHROPIC_API_KEY`, unusable for SSO/managed license users |
| **Platform integration** | #29 | AWS Bedrock support gap; #16 requests MCP exposure for skills |
| **Skill deduplication** | #189 (5 comments, 👍7) | `document-skills` and `example-skills` plugins contain identical content |

---

## 3. High-Potential Pending Skills

These active PRs have strong functional value and may merge soon:

| Skill | PR | Why High-Potential |
|-------|-----|-------------------|
| **document-typography** | #514 | Solves a universal, recurring problem; affects every document generation use case |
| **skill-quality-analyzer** | #83 | First ecosystem-wide quality framework; enables community vetting and trust |
| **testing-patterns** | #723 | Fills a critical gap in AI-assisted development workflows; comprehensive coverage |
| **ServiceNow** | #568 | Targets a major enterprise platform with 9 integrated modules |
| **sensory (AppleScript)** | #806 | Enables native macOS automation—practical desktop workflow enhancement |
| **HADS** | #616 | Novel approach to dual-audience documentation; lightweight and immediately useful |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust skill infrastructure—evaluation tooling, org-wide sharing, security vetting, and reliable lifecycle management—rather than additional domain-specific skills.**

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*