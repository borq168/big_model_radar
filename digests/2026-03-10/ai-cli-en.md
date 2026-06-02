# AI CLI Tools Community Digest 2026-03-10

> Generated: 2026-03-10 01:22 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

**Cross-Tool AI CLI Ecosystem Comparison Report – 2026-03-10**

---

### 1. Ecosystem Overview  
The AI CLI tools landscape in early 2026 is highly dynamic, with major players—Anthropic, OpenAI, Google, GitHub, and emerging vendors like MoonshotAI and QwenLM—competing on reliability, extensibility, and cross-platform maturity. All tools now emphasize MCP (Model Context Protocol) integration, agentic workflows, and terminal-native UX, but differ significantly in stability, enterprise readiness, and developer experience. Rapid iteration is the norm, though critical bugs around file safety, authentication, and performance continue to challenge user trust across the board.

---

### 2. Activity Comparison  

| Tool | Open Hot Issues* | PRs Merged/Updated (24h) | Latest Release | Release Cadence |
|------|------------------|--------------------------|----------------|-----------------|
| **Claude Code** | 10 | 10 | v2.1.72 (2026-03-10) | Weekly patches |
| **OpenAI Codex** | 10 | 10 | rust-v0.113.0-alpha.2 (2026-03-10) | Alpha-heavy; internal refactors |
| **Gemini CLI** | 10 | 10 | v0.33.0-preview.9 (2026-03-10) | Daily preview builds |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.3 (2026-03-09) | Bi-weekly stable |
| **Kimi Code CLI** | 10 | 10 | v1.18.0 (2026-03-10) | Weekly feature releases |
| **OpenCode** | 10 | 10 | v1.2.24 (2026-03-10) | Weekly with hotfixes |
| **Qwen Code** | 10 | 9 | v0.12.0 (2026-03-10) | Bi-weekly + patch sprints |

*\*“Hot Issues” defined as top 10 most urgent/community-signaled bugs or feature requests per digest.*

---

### 3. Shared Feature Directions  

- **MCP & Subagent Integration**: Demanded by **Claude Code**, **OpenCode**, **Qwen Code**, and **GitHub Copilot CLI** for secure, scoped access to external tools (e.g., databases, OAuth services).  
- **Terminal UX Control**: Disabling animations (**Copilot CLI**, **OpenCode**), fixing scroll hijacking (**Copilot CLI**, **Gemini CLI**), and paste/input reliability (**Copilot CLI**, **Qwen Code**) are cross-cutting priorities.  
- **Session & State Management**: Multi-session navigation (**Kimi**, **OpenCode**), resume error clarity (**Gemini**, **Kimi**), and undo reliability (**OpenCode**, **Qwen**) reflect demand for robust conversational state.  
- **Cross-Platform Parity**: Windows/WSL config isolation (**OpenAI Codex**, **Qwen Code**), macOS sandboxing (**OpenAI Codex**), and Linux line-ending handling (**Qwen Code**) highlight uneven platform support.  
- **Extensibility Hooks**: Event hooks (**Qwen Code**), plugin lifecycles (**OpenCode**), and custom skill loading (**Qwen Code**, **Claude Code**) signal a shift toward modular, auditable architectures.

---

### 4. Differentiation Analysis  

| Dimension | Leaders & Distinctions |
|---------|------------------------|
| **Enterprise Readiness** | **GitHub Copilot CLI** (MCP config via `.devc`, OAuth roadmap) and **OpenCode** (Bedrock IAM, multi-account auth) lead in policy-aware, deployable setups. |
| **Agent Autonomy** | **Claude Code** (cc-taskrunner plugin) and **Qwen Code** (YOLO mode, event hooks) push toward unattended execution; others remain confirmation-heavy. |
| **IDE Integration Depth** | **Kimi Code CLI** (Zed ACP enhancements) and **OpenCode** (MCP Apps iframe support) invest heavily in editor embedding; **Copilot CLI** lags in IDE context awareness. |
| **Performance & Stability** | **Gemini CLI** shows rapid bug resolution (plan truncation, session resume); **Claude Code** struggles with cowork VM bloat and data loss risks. |
| **Developer Experience** | **OpenAI Codex** leads in observability (guardian threads, usage diagnostics); **Qwen Code** and **Copilot CLI** suffer from input/input fragmentation across shells. |

---

### 5. Community Momentum & Maturity  

- **Highest Velocity**: **Gemini CLI** (daily previews, rapid PR turnaround) and **Kimi Code CLI** (weekly feature drops with immediate bug response) demonstrate aggressive iteration.  
- **Most Mature UX**: **OpenCode** balances innovation (plugins, MCP Apps) with systematic fixes (memory leaks, tmux compatibility), signaling product-market fit.  
- **Enterprise Traction**: **GitHub Copilot CLI** and **OpenAI Codex** see strong demand for `.codexignore`, standalone installers, and policy controls—key for regulated environments.  
- **Emerging Players**: **Qwen Code** and **Kimi Code CLI** are gaining developer mindshare through cross-ecosystem compatibility (e.g., loading `.claude/` skills) and media-rich features (video clipboard).  

---

### 6. Trend Signals  

- **Safety > Speed**: Data loss risks (**Claude Code cowork**), silent file overwrites (**Qwen Code**), and insecure MCP defaults (**Copilot CLI**) are triggering calls for opt-in automation and audit trails.  
- **Hybrid Deployment Surge**: Support for local LLMs (LM Studio), cloud providers (Azure, Bedrock), and multi-account auth reflects demand for vendor-flexible, air-gapped-ready tooling.  
- **Terminal as Primary IDE**: Features like collapsible task groups (**Gemini CLI**), clickable links (**OpenCode**), and semantic prompts (OSC 133) indicate terminals are becoming full development environments—not just assistants.  
- **Cost Transparency Crisis**: Unpredictable token drain (**OpenAI Codex Fast mode**), opaque rate limits (**Claude Code**), and MCP overhead (**Copilot CLI**) are pushing for built-in usage dashboards and per-tool cost controls.  

> **Strategic Takeaway**: Developers should prioritize tools with strong MCP extensibility, cross-platform reliability, and clear safety guardrails—especially if deploying in enterprise or autonomous workflows. OpenCode and GitHub Copilot CLI currently offer the best balance; Claude Code and Qwen Code lead in ambition but require tolerance for instability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026-03-10 | Source: github.com/anthropics/skills*

---

### 1. **Top Skills Ranking**  
*(Ranked by community engagement via comments and reactions)*

1. **#514 – Document Typography Skill**  
   *Functionality*: Prevents typographic flaws in AI-generated docs (orphans, widows, numbering misalignment).  
   *Discussion*: High relevance noted—“affects every document Claude generates”; users rarely request it explicitly but benefit universally.  
   *Status*: Open | [PR #514](https://github.com/anthropics/skills/pull/514)

2. **#154 – Shodh Memory Skill**  
   *Functionality*: Persistent memory system across sessions using `.claude/knowledge/entries/` to retain context.  
   *Discussion*: Addresses core Claude Code limitation—context loss between sessions; praised for proactive context surfacing.  
   *Status*: Open | [PR #154](https://github.com/anthropics/skills/pull/154)

3. **#521 – Record Knowledge Skill**  
   *Functionality*: Lets Claude persist workaround discoveries and insights as tagged Markdown entries.  
   *Discussion*: Complementary to #154; solves “rediscover yesterday’s fix today” pain point.  
   *Status*: Open | [PR #521](https://github.com/anthropics/skills/pull/521)

4. **#522 – Plan Task Skill**  
   *Functionality*: Persists multi-step plans and progress in `.claude/tasks/` with Git-tracked or local modes.  
   *Discussion*: Critical for long-running workflows; enables session continuity for complex projects.  
   *Status*: Open | [PR #522](https://github.com/anthropics/skills/pull/522)

5. **#210 – Frontend Design Skill (Improvement)**  
   *Functionality*: Refines existing skill for clearer, actionable UI/UX guidance within single conversations.  
   *Discussion*: Focus on token efficiency and executability—addresses feedback that original was too verbose.  
   *Status*: Open | [PR #210](https://github.com/anthropics/skills/pull/210)

6. **#83 – Skill Quality & Security Analyzers**  
   *Functionality*: Meta-skills to evaluate other Skills on structure, docs, security, and compliance.  
   *Discussion*: Seen as essential for enterprise adoption and marketplace trust.  
   *Status*: Open | [PR #83](https://github.com/anthropics/skills/pull/83)

7. **#486 – ODT Skill**  
   *Functionality*: Create, fill, and parse OpenDocument (.odt) files—supports LibreOffice, OnlyOffice, etc.  
   *Discussion*: Fills gap in open-standard document handling beyond Microsoft formats.  
   *Status*: Open | [PR #486](https://github.com/anthropics/skills/pull/486)

---

### 2. **Community Demand Trends**  
*(From top Issues by comment volume)*

- **Session Persistence**: Repeated calls for memory, task continuity, and knowledge retention (#154, #521, #522).  
- **Enterprise Integration**: Demand for SSO/API compatibility (#532), governance patterns (#412), and auditability.  
- **Security & Trust**: Concerns over namespace abuse (#492) and skill validation (#83).  
- **Workflow Automation**: Interest in calendar/email triage (#299), SAP predictive analytics (#181), and codebase audits (#147).  
- **Documentation Clarity**: Need for CONTRIBUTING.md (#509) and plugin deduplication (#189) to reduce confusion.

---

### 3. **High-Potential Pending Skills**  
*(Active PRs with recent updates, likely to merge soon)*

- **#514 Document Typography**: Universally applicable; low-risk, high-impact fix.  
- **#521 Record Knowledge** & **#522 Plan Task**: Both by @LevNas; address critical session-handling gaps with clear file-based persistence.  
- **#210 Frontend Design Improvements**: Direct response to community feedback on usability.  
- **#486 ODT Skill**: Niche but standards-compliant; fills interoperability gap.

---

### 4. **Skills Ecosystem Insight**  
The community’s most concentrated demand is for **session-persistent capabilities**—enabling Claude Code to retain context, plans, and learned knowledge across interactions—to transform it from a stateless assistant into a continuous collaborator.

---

**Claude Code Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
The Claude Code team released **v2.1.72**, introducing a new file-write shortcut in `/copy` and removing reliance on a deprecated proxy environment variable. Meanwhile, critical bugs around **cowork VM bloat (10GB bundles)**, **rate limit misreporting**, and **data loss during file operations** continue to dominate community concern, with several high-engagement issues seeing active discussion.

---

### 2. Releases  
**v2.1.72** ([Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.72))  
- Added `w` key in `/copy` command to write selected content directly to a file (bypassing clipboard), improving remote/SSH workflows.  
- Removed deprecated `CLAUDE_CODE_PROXY_SUPPORTS_TOOL_REFERENCE`; tool search now bypasses third-party proxy gate when a new (unspecified) env var is set.

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#22543](https://github.com/anthropics/claude-code/issues/22543): Cowork creates 10GB VM bundle degrading performance | Persistent performance collapse after using cowork feature; impacts daily usability. | **102 upvotes**, 42 comments — users report slow startups, UI lag, and session degradation over time. |
| [#29579](https://github.com/anthropics/claude-code/issues/29579): API rate limit reached despite Max subscription & low usage | Billing/quota system misalignment blocks legitimate high-tier users. | **15 upvotes**, 24 comments — frustration over inaccurate telemetry and lack of transparency. |
| [#26224](https://github.com/anthropics/claude-code/issues/26224): Hanging/freezing on prompts for 5–20 minutes | Core responsiveness failure disrupts development flow. | **33 upvotes**, 24 comments — labeled “URGENT!!!”; affects multiple platforms. |
| [#32637](https://github.com/anthropics/claude-code/issues/32637): Cowork destroys user files via iCloud stub mishandling | **Critical data loss** risk on macOS with Optimize Storage enabled. | **2 upvotes**, 2 comments — newly reported but severe; involves `cp` + `rm -rf` on 0-byte stubs. |
| [#15199](https://github.com/anthropics/claude-code/issues/15199): CLI formatting artifacts break copy/paste | Output indentation and hard wraps corrupt copied code, wasting tokens on cleanup. | **35 upvotes**, 7 comments — long-standing UX pain point for CLI users. |
| [#10906](https://github.com/anthropics/claude-code/issues/10906): Plan agent ignores pre-approved tools in settings.json | Repeated permission prompts break automation and trust in config. | **27 upvotes**, 15 comments — undermines intended security workflow. |
| [#22855](https://github.com/anthropics/claude-code/issues/22855): Extremely slow response on WSL2 vs native Linux | Platform-specific performance regression hinders Windows devs. | **5 upvotes**, 6 comments — reproducible; suggests backend routing or filesystem overhead. |
| [#19649](https://github.com/anthropics/claude-code/issues/19649): Overuse of Bash tools instead of built-ins (Read/Grep) | Inefficient tool selection increases token cost and reduces reliability. | **31 upvotes**, 8 comments — model behavior misaligned with available abstractions. |
| [#23134](https://github.com/anthropics/claude-code/issues/23134): Disable paste text collapse in input field | Collapsed pasted content prevents review before submission. | **29 upvotes**, 13 comments — frequent request for better TUI control. |
| [#7744](https://github.com/anthropics/claude-code/issues/7744): MCP client ignores OAuth `scopes_supported`, blocking refresh tokens | Breaks secure, long-lived integrations with external services. | **21 upvotes**, 10 comments — affects enterprise MCP adoption. |

---

### 4. Key PR Progress  

| PR | Summary |
|----|--------|
| [#32629](https://github.com/anthropics/claude-code/pull/32629): **cc-taskrunner plugin** | Adds autonomous task queue with branch isolation, enabling unattended execution (e.g., overnight jobs) while protecting main branches. |
| [#32408](https://github.com/anthropics/claude-code/pull/32408): **Paper Writing Plugin** | Introduces guided academic writing workflow with specialized agents for argument development, literature synthesis, and structure planning. |
| [#32142](https://github.com/anthropics/claude-code/pull/32142): **Usage transparency plugin** | Helps users distinguish between rate limits, quota exhaustion, and auth issues via local diagnostics—addresses confusion in issue #29579. |
| [#32625](https://github.com/anthropics/claude-code/pull/32625): **CLAUDE.md for repo** | Adds internal developer guide covering repo structure, plugin architecture, and automation—improves contributor onboarding. |
| [#32430](https://github.com/anthropics/claude-code/pull/32430): **Clarify plugin vs built-in scope** | Updates docs to prevent misuse of example plugins as replacements for core features. |
| [#31543](https://github.com/anthropics/claude-code/pull/31543): **Piped command permissions tip** | Documents that each command in a pipeline (`|`, `&&`, etc.) needs separate `allow` entries in settings—reduces support burden. |
| [#28850](https://github.com/anthropics/claude-code/pull/28850): **Windows install PowerShell note** | Prevents common install failures by clarifying that Windows setup requires PowerShell, not CMD. |
| [#32488](https://github.com/anthropics/claude-code/pull/32488): **Dedupe workflow hardening** | Improves metadata consistency and telemetry accuracy for duplicate issue detection. |
| [#17776](https://github.com/anthropics/claude-code/pull/17776): **Security-guidance plugin docs** | Completes documentation coverage for all official plugins. |
| [#32563](https://github.com/anthropics/claude-code/pull/32563): **Bash heredoc single-quote fix** *(implied fix)* | Addresses parsing bug where single quotes inside single-quoted heredocs caused EOF errors. |

---

### 5. Feature Request Trends  

- **MCP & Subagent Integration**: Multiple requests ([#24841](https://github.com/anthropics/claude-code/issues/24841), [#26252](https://github.com/anthropics/claude-code/issues/26252)) ask for MCP tool access in Task subagents—critical for database/external service workflows.  
- **Terminal Semantic Prompts**: OSC 133 support ([#26235](https://github.com/anthropics/claude-code/issues/26235), [#32635](https://github.com/anthropics/claude-code/issues/32635)) enables modern terminal navigation (jump-to-prompt, output selection).  
- **LSP Enhancements**: Users want LSP tools to auto-detect installed language servers ([#15619](https://github.com/anthropics/claude-code/issues/15619)) and fix plugin failures ([#29501](https://github.com/anthropics/claude-code/issues/29501)).  
- **TUI Customization**: Demand for disabling paste collapse ([#23134](https://github.com/anthropics/claude-code/issues/23134)) and reducing output artifacts ([#15199](https://github.com/anthropics/claude-code/issues/15199)) reflects need for cleaner, scriptable interfaces.  
- **Cowork Reliability**: Beyond performance, users seek session persistence ([#28402](https://github.com/anthropics/claude-code/issues/28402)) and safer file operations to prevent data loss.

---

### 6. Developer Pain Points  

- **Quota & Rate Limit Confusion**: Users conflate billing, auth, and throttling errors due to opaque messaging—leading to frustration even on paid plans.  
- **Permission Model Gaps**: Repeated prompts for pre-approved tools and lack of `canUseTool` callback support in background subagents break automation trust.  
- **Cross-Platform Inconsistencies**: WSL2 slowness, Windows HCS VM errors ([#31877](https://github.com/anthropics/claude-code/issues/31877)), and macOS iCloud file handling reveal uneven platform maturity.  
- **Output Integrity**: Formatting artifacts in CLI output force manual cleanup, increasing token waste and reducing copy-paste reliability.  
- **Data Safety Risks**: Cowork’s aggressive file operations—especially on cloud-synced directories—pose real data loss threats without clear safeguards.  

— *Stay tuned for fixes on cowork stability and MCP subagent support in upcoming sprints.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
A critical CLI hang bug affecting all models was closed after rapid community escalation, while a new alpha release (`rust-v0.113.0-alpha.2`) signals ongoing infrastructure work. Developers continue to push for better file exclusion controls and Windows/WSL parity, with growing concern over usage spikes in Fast mode.

---

### 2. Releases  
- **[rust-v0.113.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.113.0-alpha.2)**: Internal Rust-based component update; no user-facing changelog provided yet, but likely tied to sandboxing and IPC improvements under active development.

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#14048](https://github.com/openai/codex/issues/14048) (CLOSED) – CLI hangs indefinitely | Affected all major models (gpt-5.3/5.4) across Windows/WSL, blocking core functionality. High urgency due to widespread impact. | 76 upvotes, 98 comments; users reported complete workflow paralysis until resolved. |
| [#2847](https://github.com/openai/codex/issues/2847) – Exclude sensitive files via `.codexignore` | Security and privacy risk: agents may leak credentials or binaries. Long-standing request since 2025. | 246 upvotes; repeatedly cited as essential for enterprise adoption. |
| [#12764](https://github.com/openai/codex/issues/12764) – 401 Unauthorized errors on Windows | Authentication failures disrupt CLI usage despite valid credentials; suggests token-handling bugs in Windows env. | 51 comments; users suspect Ray ID correlation points to backend routing issues. |
| [#9634](https://github.com/openai/codex/issues/9634) – Refresh token reuse error | Forces re-login loops, breaking automated workflows and CI integrations. | 22 comments; affects Pro users on macOS, indicating auth-state sync flaws. |
| [#13549](https://github.com/openai/codex/issues/13549) – WSL mode uses Windows `config.toml` | Breaks isolation expectations; WSL users can’t maintain separate configs, leading to misconfigured agents. | 11 upvotes; highlights poor cross-platform config resolution logic. |
| [#14116](https://github.com/openai/codex/issues/14116) – Usage drain spike in Fast mode | Unexpected token consumption post-v0.111.0 threatens cost predictability for power users. | Early reports link to aggressive multi-agent spawning—high concern for Pro tier. |
| [#12852](https://github.com/openai/codex/issues/12852) – Desktop threads stuck “Thinking” | Requires force-killing processes; indicates poor thread lifecycle management in app-server. | Affects Business tier users; undermines reliability of long-running tasks. |
| [#11086](https://github.com/openai/codex/issues/11086) – Message editing in App | UX gap vs competitors like Cursor; limits iterative refinement of prompts. | 21 upvotes; frequently requested for collaborative debugging sessions. |
| [#13993](https://github.com/openai/codex/issues/13993) – Standalone Windows installer | Microsoft Store dependency blocks air-gapped/corporate deployments. | 8 upvotes; aligns with broader demand for deployment flexibility. |
| [#14133](https://github.com/openai/codex/issues/14133) – Desktop ignores `model_context_window` in config | Local GUI threads ignore user-defined context limits, reducing effective window size. | Contradicts CLI behavior; suggests config loading inconsistency in Electron layer. |

---

### 4. Key PR Progress  

| PR | Feature / Fix | Impact |
|----|---------------|--------|
| [#14018](https://github.com/openai/codex/pull/14018) – Migrate TUI to in-process app-server | Unifies TUI communication via app-server protocol, enabling future features like permission checks and thread sharing. | Critical for consistency and security; ends direct `CodexThread` bypass. |
| [#13860](https://github.com/openai/codex/pull/13860) – Guardian assessment thread items | Surfaces auto-approval review states in UI/TUI, improving transparency for guarded actions. | Enhances safety UX; part of broader “guardian” permission system rollout. |
| [#14107](https://github.com/openai/codex/pull/14107) – Forward-compatible permissions profiles | Prevents config load failures from unknown `:special_path` tokens; fails closed with warnings. | Reduces breaking changes; improves resilience for custom permission setups. |
| [#13978](https://github.com/openai/codex/pull/13978) – Server-side compaction (feature-flagged) | Offloads context compaction to OpenAI backend, reducing local token overhead. | Potential major efficiency gain; currently opt-in via flag. |
| [#13792](https://github.com/openai/codex/pull/13792) – Disable bundled system skills | Allows disabling default skills via `[skills.bundled] enabled = false`. | Empowers advanced users to reduce noise or conflicts in custom skill environments. |
| [#13622](https://github.com/openai/codex/pull/13622) – Chromium Seatbelt extension (macOS) | Adds opt-in MachPortRendezvous permission for Chromium-based tools. | Enables secure browser automation under Seatbelt sandbox; niche but critical for web agents. |
| [#13276](https://github.com/openai/codex/pull/13276) – Hooks engine MVP | Introduces `SessionStart`/`Stop` hooks for custom logic injection. | Foundation for observability, telemetry, and third-party integrations. |
| [#13825](https://github.com/openai/codex/pull/13825) – Custom model aliases in config.toml | Lets users define aliases (e.g., `my-gpt5 = "gpt-5.4-fast"`) with overrideable settings. | Improves model management flexibility; supersedes older PR #13665. |
| [#14139](https://github.com/openai/codex/pull/14139) – Windows sandbox runner IPC foundation | Builds low-level IPC transport for future `unified_exec` on Windows. | Key step toward consistent sandboxing across platforms. |
| [#13522](https://github.com/openai/codex/pull/13522) – `/title` terminal override | Allows manual terminal title control for multi-CLI workflows. | Small but high-value UX improvement for power users. |

---

### 5. Feature Request Trends  

- **File & Path Exclusion**: Overwhelming demand for `.codexignore`-style mechanisms ([#2847]) to prevent leakage of secrets, build artifacts, or large binaries.
- **Windows/WSL Parity**: Recurring calls for consistent config handling, installer options ([#13993]), and filesystem behavior between native Windows and WSL modes ([#13549], [#13762]).
- **Message Editing & History UX**: Users want editable threads ([#11086]), renameable task titles ([#12564]), and markdown export ([#2880]) for documentation workflows.
- **Cost & Usage Transparency**: Growing concern over unpredictable token consumption, especially with Fast mode defaults ([#14116]).
- **Deployment Flexibility**: Need for standalone installers, air-gap support, and clearer MCP server scoping ([#13025]).

---

### 6. Developer Pain Points  

- **Authentication Instability**: Frequent 401s ([#12764]) and refresh token errors ([#9634]) disrupt headless and CI use cases.
- **Thread Lifecycle Bugs**: Stuck “Thinking” states ([#12852], [#14094]) and orphaned threads ([#14137]) indicate weak cleanup in app-server.
- **Config Inconsistency**: Desktop app ignoring `~/.codex/config.toml` ([#14133]) or preferring global over project-local MCP configs ([#13025]) creates debugging friction.
- **Platform Fragmentation**: Windows users face installer limitations, WSL config confusion, and Unicode path bugs ([#13575]), while macOS users encounter sandbox permission hurdles.
- **Lack of Observability**: Limited insight into token usage, agent spawning, or compaction behavior hampers optimization and troubleshooting.

—  
*Stay tuned for next week’s digest. Report bugs early and star high-impact issues to help shape the roadmap.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
The Gemini CLI team continues rapid iteration on the v0.33.0 preview line, with multiple patch releases addressing stability and UX issues—most notably fixing plan truncation in approval dialogs and improving session resume error messaging. Community contributions are driving meaningful improvements in documentation clarity, policy handling, and shell integration, while maintainers prioritize performance optimizations and agent self-awareness enhancements.

---

### 2. Releases  
- **v0.33.0-preview.9**: Cherry-picked fix for release pipeline conflicts ([PR #21788](https://github.com/google-gemini/gemini-cli/pull/21788)).  
- **v0.33.0-preview.8**: Patched version bump from preview.7 ([PR #21782](https://github.com/google-gemini/gemini-cli/pull/21782)).  
- **v0.33.0-preview.7 & .6**: Internal patch releases with automated backports for stability ([PR #21720](https://github.com/google-gemini/gemini-cli/pull/21720)).

> Full changelogs: [v0.33.0-preview.9](https://github.com/google-gemini/gemini-cli/compare/v0.33.0-preview.8...v0.33.0-preview.9)

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|------|----------------|-------------------|
| [#18896](https://github.com/google-gemini/gemini-cli/issues/18896) Screen glitching on Windows during scrolling | Impacts usability for long outputs; affects core terminal rendering | 10 comments; users report frustration with visual instability |
| [#20716](https://github.com/google-gemini/gemini-cli/issues/20716) Plan truncation in approval dialog (15-line limit) | Blocks review of complex plans; high-priority UX flaw | 8 comments; widely acknowledged as critical |
| [#20549](https://github.com/google-gemini/gemini-cli/issues/20549) Stuck in plan mode due to wrong path | Breaks workflow continuity; P1 priority | 7 comments; reproducible across environments |
| [#21718](https://github.com/google-gemini/gemini-cli/issues/21718) CONTRIBUTING.md gamification concerns | Risks misaligned community contributions | 6 comments; calls for clearer contribution guidelines |
| [#19239](https://github.com/google-gemini/gemini-cli/issues/19239) `/clear` docs omit context reset | Misleading documentation affects user expectations | 5 comments; resolved via [PR #21801](https://github.com/google-gemini/gemini-cli/pull/21801) |
| [#21395](https://github.com/google-gemini/gemini-cli/issues/21395) Quota mismatch for Google AI Pro | Enterprise users face unexpected limits | 3 comments; 1 upvote; potential billing confusion |
| [#21803](https://github.com/google-gemini/gemini-cli/issues/21803) Typo: `adminControlsListner` → `adminControlsListener` | Minor but impacts code maintainability | 2 comments; quick fix candidate |
| [#21764](https://github.com/google-gemini/gemini-cli/issues/21764) Improve `--resume` error with session list | UX improvement for session management | 2 comments; addressed in [PR #21804](https://github.com/google-gemini/gemini-cli/pull/21804) |
| [#21461](https://github.com/google-gemini/gemini-cli/issues/21461) Shell commands ignore aliases | Limits shell interoperability | 2 comments; requires deeper shell integration |
| [#20886](https://github.com/google-gemini/gemini-cli/issues/20886) Refine subagent UX | Part of broader agent experience overhaul | 2 comments; tied to design system updates |

---

### 4. Key PR Progress  

| PR | Summary | Impact |
|----|--------|--------|
| [#21037](https://github.com/google-gemini/gemini-cli/pull/21037) | Fixes plan truncation in approval dialog by enabling unconstrained height | Resolves #20716; major UX win for long-plan workflows |
| [#21802](https://github.com/google-gemini/gemini-cli/pull/21802) | Handles `ALLOW` policy correctly for `exit_plan_mode` | Fixes silent failure when policies auto-approve exit |
| [#21804](https://github.com/google-gemini/gemini-cli/pull/21804) | Shows available sessions directly in `--resume` error | Improves discoverability; reduces friction |
| [#21313](https://github.com/google-gemini/gemini-cli/pull/21313) | Stage 1 improvements to `web_fetch` tool (rate limiting, SSRF hardening) | Security + reliability boost for web interactions |
| [#21439](https://github.com/google-gemini/gemini-cli/pull/21439) | Adds active checkpoint tag fallback for `/chat save` | Smoother iterative conversation branching |
| [#21797](https://github.com/google-gemini/gemini-cli/pull/21797) | Compact session list in invalid `--resume` errors | Alternative implementation to #21804 |
| [#20774](https://github.com/google-gemini/gemini-cli/pull/20774) | Renames `/directory` → `/workspace` with unified terminology | Aligns CLI with modern dev workspace concepts |
| [#21790](https://github.com/google-gemini/gemini-cli/pull/21790) | Revamps async PR review skill with staged logging | Better observability for automated reviews |
| [#21791](https://github.com/google-gemini/gemini-cli/pull/21791) | Handles dirty worktrees in `review.sh` + safety warnings | Prevents accidental execution on untrusted code |
| [#21796](https://github.com/google-gemini/gemini-cli/pull/21796) | Renames `'return'` key to `'enter'` for VS Code alignment | Prepares for standardized keybinding support |

---

### 5. Feature Request Trends  

- **Enhanced Shell Integration**: Multiple requests for alias support ([#21461](https://github.com/google-gemini/gemini-cli/issues/21461)), "smart shell mode" ([#21798](https://github.com/google-gemini/gemini-cli/issues/21798)), and natural-language command interpretation.
- **Agent Self-Awareness**: Growing demand for the CLI to accurately describe its own flags, hotkeys, and execution behavior ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
- **UI/UX Polish**: Collapsible task groups ([#21453](https://github.com/google-gemini/gemini-cli/issues/21453)), auto-collapsing completed tasks ([#21454](https://github.com/google-gemini/gemini-cli/issues/21454)), and reduced verbosity are top priorities.
- **Performance Optimization**: Parallelizing I/O and network calls ([#21646](https://github.com/google-gemini/gemini-cli/issues/21646)), caching strategies ([#21518](https://github.com/google-gemini/gemini-cli/issues/21518), [#21519](https://github.com/google-gemini/gemini-cli/issues/21519)), and avoiding `await` bottlenecks ([#21528](https://github.com/google-gemini/gemini-cli/issues/21528)).
- **Policy Safety**: Warnings for risky auto-approval rules ([#21596](https://github.com/google-gemini/gemini-cli/issues/21596)) and better policy validation.

---

### 6. Developer Pain Points  

- **Plan Mode Friction**: Users frequently get stuck or face truncated plans, indicating workflow design gaps.
- **Documentation Inconsistencies**: Broken links ([#21435](https://github.com/google-gemini/gemini-cli/issues/21435)) and missing context (e.g., `/clear` behavior) erode trust.
- **Session Management Confusion**: Invalid `--resume` IDs lack actionable feedback—now being addressed.
- **Windows-Specific Rendering Bugs**: Terminal glitches hinder adoption on Windows platforms.
- **Overly Verbose Output**: Developers seek cleaner, collapsible interfaces to manage information density during complex tasks.

— *Stay tuned for next week’s digest. Contribute, report, or upvote issues to shape Gemini CLI’s evolution.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
The Copilot CLI team shipped **v1.0.3**, introducing experimental **Extensions** powered by `@github/copilot-sdk`, enabling developers to build custom tools and hooks. The release also improves configurability with support for MCP server settings via `.devc` files and better environment variable documentation. Community feedback remains highly active around terminal UX issues—especially scrolling, animations, and input handling—indicating strong demand for stability refinements.

---

### 2. Releases  
**v1.0.3** (2026-03-09)  
- 🚀 **Experimental Extensions**: Developers can now ask Copilot to write custom tools/hooks using the new [`@github/copilot-sdk`](https://github.com/github/copilot-cli/releases/tag/v1.0.3).  
- ⚙️ **MCP Configuration**: Read server config from `.devc` files for streamlined setup.  
- 📚 **Env Var Docs**: Added help documentation for `GH_HOST`, `HTTP_PROXY`, `HTTPS_PROXY`, `NO_COLOR`, and `NO_PROXY`.  
- 🛠️ **UX Improvements**: Background task notifications now appear in timeline with expandable details; added `--binary-version` flag and `quit` command support.  
*Full changelog: [v1.0.3](https://github.com/github/copilot-cli/releases/tag/v1.0.3)*

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|------|----------------|--------------------|
| [#33 OAuth MCP Servers](https://github.com/github/copilot-cli/issues/33) (Closed) | Critical for integrating remote MCP services like Figma/Atlassian that require OAuth auth. | 👍 103 upvotes; widely requested enterprise integration path. |
| [#1584 Incessant Scrolling](https://github.com/github/copilot-cli/issues/1584) (Open) | Terminal scroll hijacking during long ops disrupts workflow and causes usability fatigue. | 👍 14; users call it “seizure-inducing”—top UX pain point. |
| [#373 CLI Stutters & Scrolls](https://github.com/github/copilot-cli/issues/373) (Open) | Rapid terminal flickering breaks concentration; manual scroll reset required. | 👍 9; recurring across macOS/Linux, linked to output buffering. |
| [#1326 Disable All Animations](https://github.com/github/copilot-cli/issues/1326) (Open) | Animations consume attention and CPU; users want a `--no-animation` flag. | 👍 13; aligns with accessibility and performance needs. |
| [#768 Disable MCP Servers by Default](https://github.com/github/copilot-cli/issues/768) (Open) | Token efficiency concern—users want opt-in MCP activation to avoid unnecessary LLM calls. | 👍 18; growing interest in cost-aware AI tooling. |
| [#1928 Pause Copilot Work](https://github.com/github/copilot-cli/issues/1928) (Open) | No way to interrupt misguided agent behavior mid-task without losing context. | New but urgent—reflects need for better conversational control. |
| [#1842 Scrolling Broken in Tmux](https://github.com/github/copilot-cli/issues/1842) (Open) | Breaks usability in tmux sessions—response content becomes unreadable. | Affects advanced terminal users; blocks adoption in dev workflows. |
| [#1685 Paste (Ctrl+V) Fails on Windows](https://github.com/github/copilot-cli/issues/1685) (Open) | Core input dysfunction in PowerShell breaks basic clipboard ops. | Blocks Windows devs; RMB paste also unreliable. |
| [#1595 Cannot Access Any Model](https://github.com/github/copilot-cli/issues/1595) (Open) | Enterprise users see “access denied by Copilot policy” despite valid subscriptions. | Policy sync issue—frustrating for paying customers. |
| [#1937 MSBuild Floods Terminal with VT Sequences](https://github.com/github/copilot-cli/issues/1937) (Open) | Raw ANSI escape codes crash terminals when running MSBuild via PowerShell tool. | Severe stability risk; affects .NET developers on Windows. |

---

### 4. Key PR Progress  
*No pull requests were merged or updated in the last 24 hours.*

---

### 5. Feature Request Trends  
- **Terminal UX Control**: High demand for disabling animations (`#1326`), fixing scroll behavior (`#1584`, `#373`, `#1842`), and adding pause/interrupt capabilities (`#1928`).  
- **MCP Flexibility**: Requests for OAuth support (`#33`), per-server enable/disable toggles (`#768`), and deferred/lazy MCP initialization (`#1938`) signal need for finer-grained integration control.  
- **Input Reliability**: Clipboard/paste fixes on Windows (`#1685`, `#1934`) and stdin compatibility with `--agent` (`#691`) highlight cross-platform input parity as critical.  
- **Enterprise Readiness**: Better Java/JVM ecosystem support (`#1349`), org agent portability (`#571`), and policy-aware model access (`#1595`) reflect enterprise adoption barriers.

---

### 6. Developer Pain Points  
- **Unstable Terminal Behavior**: Scrolling, flickering, and animation overload disrupt focus—especially during long-running tasks.  
- **Input Fragmentation**: Clipboard, paste, and stdin handling vary across OS and shell environments (Windows/PowerShell, tmux, fish).  
- **MCP Overhead**: Automatic server connections consume tokens and cause errors; users want opt-in or lazy-loading models.  
- **Enterprise Integration Gaps**: OAuth, policy enforcement, and non-JS language support (e.g., Java) hinder adoption in regulated or polyglot environments.  
- **Lack of Interruption Controls**: No way to pause, steer, or halt agents mid-execution leads to wasted tokens and frustration.

— *Stay tuned for next week’s digest. Report bugs and feature requests at [github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
The Kimi Code CLI team shipped **v1.18.0**, introducing enhanced ACP support for Zed editor file references and improved clipboard handling for video files. Meanwhile, the community is actively addressing critical bugs around proxy configuration, JSON parsing with control characters, and session management—highlighting strong engagement in reliability and usability improvements.

---

### 2. Releases  
**v1.18.0** ([Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.18.0))  
- ✅ **ACP Enhancement**: Embedded context now supported in ACP mode for Zed `@` file references ([PR #1264](https://github.com/MoonshotAI/kimi-cli/pull/1264))  
- ✅ **Clipboard Support**: Extended `Ctrl+V` to paste video files (mp4, mov, mkv, etc.) alongside images ([PR #1369](https://github.com/MoonshotAI/kimi-cli/pull/1369))  
- ✅ **Anthropic Integration**: Session `user_id` now passed via metadata ([PR #1336](https://github.com/MoonshotAI/kimi-cli/pull/1336))  
- 🛠️ Minor fixes including typo corrections and platform-specific shortcut handling.

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|------|----------------|-------------------|
| [#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234): Proxy not working with `kimi login` due to aiohttp defaults | Blocks users behind corporate proxies; affects authentication flow | 10 comments, 1 upvote — active debugging ongoing |
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375): File mentions (`@`) fail to resolve files in v1.18.0 | Breaks core IDE integration workflow post-update | 3 comments — regression concern raised |
| [#1380](https://github.com/MoonshotAI/kimi-cli/issues/1380): ACP terminal tool fails with `module acp has no attribute TerminalHandle` | Renders terminal tools unusable in latest versions | New issue, high urgency implied |
| [#1378](https://github.com/MoonshotAI/kimi-cli/issues/1378): JSON parsing error with control characters in tool calls | Causes runtime crashes when LLM generates special chars | Immediate PR fix submitted ([PR #1379](https://github.com/MoonshotAI/kimi-cli/pull/1379)) |
| [#1368](https://github.com/MoonshotAI/kimi-cli/issues/1368): HTTP header failure when `platform.version()` contains `#` | Linux compatibility issue affecting request headers | Silent but critical for affected distros |
| [#1371](https://github.com/MoonshotAI/kimi-cli/issues/1371): IPv6 connection errors | Limits accessibility for IPv6-only or dual-stack environments | No comments yet — emerging concern |
| [#1054](https://github.com/MoonshotAI/kimi-cli/issues/1054): Zed ACP doesn’t recognize active files | Longstanding IDE integration gap | Recently updated — suggests renewed interest |
| [#1366](https://github.com/MoonshotAI/kimi-cli/issues/1366): Request for session selection CLI args | Improves multi-session workflow efficiency | Promptly addressed by [PR #1376](https://github.com/MoonshotAI/kimi-cli/pull/1376) |

---

### 4. Key PR Progress  

| PR | Impact | Status |
|----|--------|--------|
| [#1376](https://github.com/MoonshotAI/kimi-cli/pull/1376): Add `--sessions` / `--list-sessions` CLI options | Enables interactive session listing and selection — resolves #1366 | 🟢 Open |
| [#1379](https://github.com/MoonshotAI/kimi-cli/pull/1379): Fix JSON parsing with control characters | Direct response to #1378; improves tool call robustness | 🟢 Open |
| [#1377](https://github.com/MoonshotAI/kimi-cli/pull/1377): Vim-style j/k navigation for prompts | UX enhancement for power users | 🟢 Open |
| [#1264](https://github.com/MoonshotAI/kimi-cli/pull/1264): Support embedded context in ACP for Zed | Critical for Zed editor users; shipped in v1.18.0 | ✅ Closed |
| [#1369](https://github.com/MoonshotAI/kimi-cli/pull/1369): Paste video files from clipboard | Expands media support beyond images | ✅ Closed |
| [#1372](https://github.com/MoonshotAI/kimi-cli/pull/1372): Platform-correct search shortcut (Cmd+F vs Ctrl+F) | Fixes cross-platform UX inconsistency | ✅ Closed |
| [#1359](https://github.com/MoonshotAI/kimi-cli/pull/1359): Preserve slash commands on WebSocket reconnect | Improves web UI stability | ✅ Closed |
| [#1223](https://github.com/MoonshotAI/kimi-cli/pull/1223): Enable `default_query` & `custom_headers` for Azure Kimi | Essential for enterprise Azure OpenAI deployments | 🟢 Open |
| [#1358](https://github.com/MoonshotAI/kimi-cli/pull/1358): Avoid implicit reasoning-off in OpenAI Responses | Prevents unintended behavior with reasoning models | 🟢 Open |
| [#739](https://github.com/MoonshotAI/kimi-cli/pull/739): Strip JSON Schema metadata for Google GenAI | Fixes MCP tool compatibility with Google providers | 🟢 Open |

---

### 5. Feature Request Trends  
- **Session Management**: Multiple requests (e.g., #1366) for better session navigation and persistence — now partially addressed via `--list-sessions`.  
- **IDE Integration Depth**: Zed, VS Code, and terminal tooling require tighter file/context awareness (see #1054, #1380).  
- **Cross-Platform UX Consistency**: Clipboard, shortcuts, and proxy behavior need platform-aware logic (Linux/macOS/Windows).  
- **Provider Flexibility**: Demand for Azure, Google GenAI, and Anthropic metadata support signals growing multi-provider usage.

---

### 6. Developer Pain Points  
- **Proxy & Network Configuration**: Recurring issues with aiohttp defaults and IPv6/header encoding hinder enterprise adoption.  
- **Tool Call Reliability**: JSON parsing edge cases and missing module attributes cause runtime failures in ACP/MCP workflows.  
- **Regression Sensitivity**: Rapid releases (e.g., v1.18.0 breaking `@` file mentions) erode trust; better testing for IDE integrations needed.  
- **Session State Management**: Lack of granular session control forces workarounds for multi-task coding sessions.

— *Stay tuned for next week’s digest. Contribute, report, or fix: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
OpenCode shipped **v1.2.24** with foundational workspace support in the TUI, expanded model compatibility (including Copilot GPT-5.4 xhigh), and critical UI fixes for scroll jitter and session titles. The community is actively addressing long-standing pain points like memory leaks, authentication edge cases, and cross-platform inconsistencies—while also pushing forward on extensibility via plugins and MCP integrations.

---

### 2. Releases  
**v1.2.24** ([GitHub](https://github.com/anomalyco/opencode/releases/tag/v1.2.24))  
- **Core**: Initial TUI workspace support; GitLab 1M context window header; Copilot GPT-5.4 xhigh model support  
- **Desktop**: Fixed scroll jitter/loops, session title spinner rendering, and sidebar overflow  
- **TUI**: Auth header passthrough in `run --attach` (@ericclemmons)  

**v1.2.23** ([GitHub](https://github.com/anomalyco/opencode/releases/tag/v1.2.23))  
- Disabled fallback to free nano for small model requests  
- Removed deprecated `oc-1` theme; reverted unstable "Stupid Sexy T" experiment  

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|-------|----------------|--------------------|
| [#2072: Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072) | Cursor’s CLI dominance raises integration demand; could expand OpenCode’s reach if API access becomes feasible. | High interest (127 👍, 57 comments); speculative but strategic. |
| [#13768: Opus 4.6 assistant prefill error](https://github.com/anomalyco/opencode/issues/13768) | Blocks Claude Opus usage due to message formatting mismatch—core protocol issue. | Frustration over model-specific breakage (11 👍). |
| [#16470: Code invisible in light mode](https://github.com/anomalyco/opencode/issues/16470) | Renders code output unusable for light-theme users—UX regression. | Urgent fix needed (3 👍, visual proof attached). |
| [#16351: TUI broken in tmux after v1.2.17](https://github.com/anomalyco/opencode/issues/16351) | Breaks terminal multiplexing workflows; root cause identified (SGR escape seq). | High impact for devs (10 👍); fix likely imminent. |
| [#16697: Memory leaks in TUI](https://github.com/anomalyco/opencode/issues/16697) | Unbounded RAM growth during extended use—critical stability flaw. | Massive contributor effort noted; systemic fix underway. |
| [#8832: Not respecting permissions](https://github.com/anomalyco/opencode/issues/8832) | Security/compliance risk: bypasses `opencode.json` bash restrictions. | Silent but serious (3 👍); needs audit. |
| [#11141: LM Studio local model truncation error](https://github.com/anomalyco/opencode/issues/11141) | Blocks local LLM adoption due to misconfigured `n_ctx`/`n_keep`. | Niche but growing use case (5 👍). |
| [#16281: OpenAI OAuth 403 on macOS](https://github.com/anomalyco/opencode/issues/16281) | Breaks ChatGPT Pro/Plus login flow—blocks premium tier users. | Platform-specific auth fragility (1 👍). |
| [#1168: Make links clickable](https://github.com/anomalyco/opencode/issues/1168) | Long-requested UX enhancement; Ctrl+click to open URLs. | Persistent demand (49 👍); low-hanging fruit. |
| [#4704: /undo doesn’t revert file edits](https://github.com/anomalyco/opencode/issues/4704) | Undermines core undo functionality—especially critical on Windows. | Underrated severity (9 👍); Git integration gap. |

---

### 4. Key PR Progress  

| PR | Impact | Status |
|----|--------|--------|
| [#16598: Session.stopping hook](https://github.com/anomalyco/opencode/pull/16598) | Enables plugins to clean up on session end—key for lifecycle management. | Open |
| [#16625: Fix mobile scroll flickering](https://github.com/anomalyco/opencode/pull/16625) | Resolves infinite scroll during AI streaming on touch devices. | Open |
| [#16817: Cost chunk format fix](https://github.com/anomalyco/opencode/pull/16817) | Ensures cost metadata respects client format (OpenAI vs Anthropic). | Open |
| [#15487: Multi-account workspace auth](https://github.com/anomalyco/opencode/pull/15487) | Safe account switching + device-flow login—major auth overhaul. | Open |
| [#16811: Mention popup quick-open](https://github.com/anomalyco/opencode/pull/16811) | Adds file/dir shortcuts to `@` mention menu—UX boost. | Open |
| [#16802: Favorite model cycling keybinds](https://github.com/anomalyco/opencode/pull/16802) | Exposes hidden Alt+C/X binds for faster model switching. | Open |
| [#16804: Plugin sidebar contributions](https://github.com/anomalyco/opencode/pull/16804) | First step toward plugin-extensible UI—ecosystem enabler. | Open |
| [#15926: MCP Apps iframe support](https://github.com/anomalyco/opencode/pull/15926) | Enables rich embedded UIs from MCP servers—next-gen extensibility. | Open |
| [#14969: Bedrock IAM credentials](https://github.com/anomalyco/opencode/pull/14969) | Replaces generic API key with proper IAM/env auth—enterprise-ready. | Open |
| [#16799: Focus terminal on toggle](https://github.com/anomalyco/opencode/pull/16799) | Fixes focus loss when opening terminal via shortcut—polish win. | Open |

---

### 5. Feature Request Trends  
- **IDE Integration**: Cursor support (#2072), Zed/ACP compatibility (#6002), and jdtls+lombok (#8032) show demand for deeper editor embedding.  
- **UI/UX Polish**: Clickable links (#1168), quick-open shortcuts (#16809), and model cycling keybinds (#16801) dominate usability asks.  
- **Extensibility**: Plugin hooks (#16598), sidebar contributions (#16804), and MCP Apps (#15926) signal shift toward modular architecture.  
- **Local & Enterprise LLMs**: LM Studio (#11141), Bedrock IAM (#14969), and Augment (#10216) reflect hybrid deployment needs.  

---

### 6. Developer Pain Points  
- **Authentication Fragility**: OAuth failures (#16281), certificate errors (#12408), and missing Google Vertex scopes (#15109) plague multi-provider setups.  
- **Cross-Platform Bugs**: Windows symlink handling (#16342), tmux TUI breaks (#16351), and light-mode code invisibility (#16470) erode trust.  
- **Undo & State Reliability**: `/undo` not reverting edits (#4704) and session leakage across worktrees (#16806) undermine core workflows.  
- **Memory & Performance**: Unbounded RAM growth (#16697) and large-directory snapshot risks (#8577) threaten long-running usage.  
- **Model Protocol Gaps**: Assistant prefill errors (#13768), XML tool-call escaping (#16734), and multi-system-prompt breaks (#15059) reveal adapter inconsistencies.  

— *Stay tuned for v1.2.25, which is expected to include memory leak mitigations and tmux compatibility fixes.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026-03-10**

---

### 1. Today's Highlights  
The Qwen Code team released **v0.12.0**, introducing critical Windows compatibility fixes and enhanced code highlighting with configurable tab width. Meanwhile, the community is actively addressing UX pain points in YOLO mode, CLI input handling, and MCP integration—reflected in a surge of high-signal bug reports and feature refinements ahead of the upcoming v0.12.1 patch.

---

### 2. Releases  
**v0.12.0** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.0))  
- **Fix**: Resolved markdown frontmatter parsing failures on Windows due to CRLF/BOM line endings ([#2078](https://github.com/QwenLM/qwen-code/pull/2078))  
- **Feat**: Added `tabWidth` support in `CodeColorizer` and standardized tab-to-space conversion for consistent syntax highlighting ([#2077](https://github.com/QwenLM/qwen-code/pull/2077))

---

### 3. Hot Issues  

| Issue | Why It Matters | Community Reaction |
|------|----------------|-------------------|
| [#2101](https://github.com/QwenLM/qwen-code/issues/2101): Space button not registering in CLI | Blocks basic text input; affects all Windows users | 5 upvotes, 9 comments — urgent usability concern |
| [#1922](https://github.com/QwenLM/qwen-code/issues/1922): Edit tool fails to modify files in v0.10.5+ | Core functionality regression; breaks file editing workflows | 6 comments; users report downgrading as workaround |
| [#2191](https://github.com/QwenLM/qwen-code/issues/2191): DashScope web search throttling (429 errors) | Impacts research-assisted coding; persistent for 3+ days | 2 upvotes; suggests API rate limit misconfiguration |
| [#2198](https://github.com/QwenLM/qwen-code/issues/2198): Cannot type spacebar in CLI input | Duplicates #2101; confirms cross-user reproducibility | 4 comments; high-priority input bug |
| [#2206](https://github.com/QwenLM/qwen-code/issues/2206): YOLO mode still opens VS Code diff editor | Violates core "auto-apply" promise; degrades trust in automation | 1 comment; aligns with broader YOLO UX complaints |
| [#2210](https://github.com/QwenLM/qwen-code/issues/2210): Tab key interrupts YOLO/auto-edit responses | Causes loss of AI output; disrupts flow during critical edits | 0 comments but mirrors #2206 — part of larger mode-switching flaw |
| [#2223](https://github.com/QwenLM/qwen-code/issues/2223): High memory usage (7.83 GB) | Risk of OOM crashes; affects long-running sessions | New report; needs profiling |
| [#2222](https://github.com/QwenLM/qwen-code/issues/2222): Shell commands fail with quoted arguments | Breaks common dev workflows (e.g., `playwright-cli type "hello world"`) | Windows-specific parsing issue |
| [#795](https://github.com/QwenLM/qwen-code/issues/795): Request for `--output-format json/stream-json` | Needed for programmatic integration (vs. Claude Code parity) | 9 comments; closed but signals strong demand |
| [#268](https://github.com/QwenLM/qwen-code/issues/268): Add Claude-like hooks for tool execution | Enables auditability and deterministic multi-agent workflows | 8 upvotes; foundational extensibility ask |

---

### 4. Key PR Progress  

| PR | Impact | Status |
|----|--------|--------|
| [#2221](https://github.com/QwenLM/qwen-code/pull/2221): Skip `openDiff` in YOLO mode | Fixes #2206 — prevents unwanted VS Code diff popups during auto-edits | Open |
| [#2211](https://github.com/QwenLM/qwen-code/pull/2211): Block Tab key during AI streaming | Addresses #2210 — stops accidental mode switches from interrupting responses | Open |
| [#2220](https://github.com/QwenLM/qwen-code/pull/2220): Refactor model provider config to V4 | Enables cleaner multi-provider management via `providerId`; includes migration path | Open |
| [#2203](https://github.com/QwenLM/qwen-code/pull/2203): Implement 10 core event hooks | Delivers on #268 — enables extensible lifecycle/tool instrumentation | Open |
| [#2202](https://github.com/QwenLM/qwen-code/pull/2202): Support skills in `.agents/` and other dirs | Improves interoperability with Claude/Cursor ecosystems | Open |
| [#2188](https://github.com/QwenLM/qwen-code/pull/2188): VS Code sidebar + multi-layout chat | Enhances IDE companion UX with flexible UI placement | Open |
| [#1912](https://github.com/QwenLM/qwen-code/pull/1912): Agent collaboration arena | Multi-model competitive execution via isolated git worktrees | Open (long-running) |
| [#2205](https://github.com/QwenLM/qwen-code/pull/2205): Respect `NO_PROXY` env var | Fixes corporate proxy bypass for internal LLM endpoints | Open |
| [#2197](https://github.com/QwenLM/qwen-code/pull/2197): Always load global directives | Resolves "amnesia" where `~/.qwen/QWEN.md` was ignored in projects | Closed (merged) |
| [#1890](https://github.com/QwenLM/qwen-code/pull/1890): Fix Windows CRLF silent failures | Critical fix for subagent/skill loading on Windows (foundational for v0.12.0) | Closed (merged) |

---

### 5. Feature Request Trends  

- **Programmatic Output Formats**: Strong demand for machine-readable outputs (`--output-format json/stream-json`) to enable CI/CD and toolchain integration ([#795](https://github.com/QwenLM/qwen-code/issues/795)).  
- **Extensibility Hooks**: Users want fine-grained control over tool execution lifecycle (pre/post hooks, status injection) for auditing and multi-agent orchestration ([#268](https://github.com/QwenLM/qwen-code/issues/268), [#2203](https://github.com/QwenLM/qwen-code/pull/2203)).  
- **Skill Ecosystem Interop**: Support for loading skills from `.agents/`, `.cursor/`, and `.claude/` directories signals desire for cross-platform compatibility ([#2202](https://github.com/QwenLM/qwen-code/pull/2202)).  
- **YOLO Mode Polish**: Multiple reports indicate incomplete implementation—users expect true "no-confirmation" behavior without diff editors or interruptions ([#2206](https://github.com/QwenLM/qwen-code/issues/2206), [#2210](https://github.com/QwenLM/qwen-code/issues/2210)).  
- **Prompt Optimization**: Request for an "Improve Prompt" button (like Lingma IDE) to auto-refine user inputs ([#1935](https://github.com/QwenLM/qwen-code/issues/1935)).

---

### 6. Developer Pain Points  

- **Windows Input & Line Ending Bugs**: Recurring issues with spacebar input ([#2101](https://github.com/QwenLM/qwen-code/issues/2101), [#2198](https://github.com/QwenLM/qwen-code/issues/2198)) and CRLF handling ([#1890](https://github.com/QwenLM/qwen-code/pull/1890)) highlight platform-specific fragility.  
- **YOLO Mode Inconsistencies**: Despite being a flagship feature, it fails to suppress confirmations reliably, eroding user trust in autonomous editing.  
- **Proxy & Auth Configuration Complexity**: Users struggle with corporate proxy setups ([#2205](https://github.com/QwenLM/qwen-code/pull/2205)) and multi-provider credential management ([#1506](https://github.com/QwenLM/qwen-code/issues/1506), [#2220](https://github.com/QwenLM/qwen-code/pull/2220)).  
- **Memory & Stability**: Reports of 7GB+ memory usage ([#2223](https://github.com/QwenLM/qwen-code/issues/2223)) and session terminations ([#2209](https://github.com/QwenLM/qwen-code/issues/2209)) suggest resource management needs optimization.  
- **Tool Reliability**: File editing regressions ([#1922](https://github.com/QwenLM/qwen-code/issues/1922)) and shell command parsing errors ([#2222](https://github.com/QwenLM/qwen-code/issues/2222)) undermine core automation promises.  

— *Stay tuned for v0.12.1, which aims to address many of these pain points with targeted fixes.*

</details>

---
*This digest is auto-generated by [Radar Forge](https://github.com/borq168/radar-forge).*