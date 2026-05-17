# OpenClaw Ecosystem Digest 2026-05-17

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-17 02:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-17

---

## 1. Today's Activity Brief

In the last 24 hours, 500 issues were updated (416 open, 84 closed) and 500 pull requests were updated (419 open, 81 merged/closed). Two new beta releases were published — v2026.5.16-beta.2 and v2026.5.16-beta.3 — both focusing on xAI Grok OAuth support for SuperGrok subscribers and new CLI cron run controls. The community remains highly active with 17+ comment issues covering memory leaks, TUI interrupt failures, and subagent completion losses. Multiple P1 fix PRs landed today targeting subagent delivery hardening, exec approval trust, and CLI web command SecretRef resolution.

---

## 2. Releases

Two releases tagged today:
- **v2026.5.16-beta.3** (latest)
- **v2026.5.16-beta.2**

Both share identical changelogs:
- **Providers/xAI**: Added xAI Grok OAuth login for SuperGrok subscribers, allowing `xai/*` models and xAI media/tool providers to authenticate without needing `XAI_API_KEY`.
- **CLI/cron**: Added `openclaw cron run --wait` with configurable timeout and poll interval controls, plus exact `cron.runs --run-id` filtering.

No breaking changes or migration notes were listed.

---

## 3. Project Progress

Of the 81 merged/closed PRs in the last 24 hours, several notable ones appear in the top activity list:

- **#82819** (CLOSED, large) — `fix(cli): resolve web command SecretRefs`. Resolves web search/fetch SecretRefs with CLI provider overrides, adds gateway protocol support for web provider overrides.
- **#82699** (CLOSED) — `fix(cli): resolve plugin web search SecretRefs for infer web search`. Fixes raw config left as unresolved SecretRef objects in `openclaw infer web search`.
- **#82834** (OPEN) — `fix(agents): harden subagent completion delivery`. Consolidates multiple narrow subagent delivery fixes into one runtime change, participating in agent-mediated delivery. References issues #44925, #82784, #82804 etc.
- **#82836** (OPEN) — `fix(tasks): recover childless Codex native subagent tasks`. Treats childless task mirrors as recoverable registry-only records with extended grace period.
- **#82825** (OPEN) — `[codex] Bind exec approval trust to realpaths`. Introduces canonical exec approval trust path, applies to path-shaped allowlists, safe-bin trust, skill auto-allow, and audit metadata.
- **#82810** (OPEN) — `[codex] Add Control UI sidebar session shortcuts`. Moves settings to workspace, adds recent session shortcuts, one-click new session, simplifies Cron Jobs.
- **#82800** (OPEN) — `feat(env): add api key info when fails`. Adds `auth.source` label to missing-auth error messages across four code paths.
- **#82832** (OPEN) — `[Fix] acpx: keep startup probe in runtime service`. Ensures ACPX probe remains in the inner runtime service to prevent drift from readiness contract.

Other merged/closed PRs visible include various fixes for Discord typing lifecycle, Telegram deduplication, browser credential filtering, and doctor scope scanning. The overall velocity remains high with many small-to-medium fixes in CLI, agent, and channel plugin areas.

---

## 4. Community Hot Topics

The most active issues by comment count (updated today or yesterday):

| Issue | Comments | Summary |
|-------|----------|---------|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | 17 | [P2] Feishu monitor state cleanup incomplete – httpServers Map memory leak. |
| [#71127](https://github.com/openclaw/openclaw/issues/71127) | 14 | [P1] Stuck processing sessions detected but never aborted – gateway requires external restart. |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | 12 | [P2] Feature request: safe/unsafe ClawdBot mode, possibly rewriting in Rust. |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | 12 | [P2] gh-issues skill injects untrusted issue body directly into sub-agent prompt – security concern. |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | 11 | Safeguard compaction ignores `compaction.model` config – uses session model instead. |
| [#48573](https://github.com/openclaw/openclaw/issues/48573) | 10 | [P2] Embedded-run session state leak leads to zombie agents persisting after parent termination. |
| [#45326](https://github.com/openclaw/openclaw/issues/45326) | 10 | [P1] TUI input typed during generation swallowed and queued for next turn – interrupt failure. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 10 | [P1] Subagent completion silently lost – no retry, no notification, no auto-restart on timeout. |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 10 | [P1] Repeated hard resets on same session key despite high reserveTokensFloor. |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | 10 | Heartbeat/Cron stale "Current time" timestamp – not refreshing between runs. |

**Underlying needs:**
- **Reliability and resilience**: Users expect agent sessions to recover from timeouts, stuck states, and compaction failures without manual restarts. The subagent completion loss (#44925) and stuck session detection (#71127) are particularly painful for automated workflows.
- **Security awareness**: The gh-issues skill prompt injection (#45740) and Discord internal tool-call leakage (#44905) show users are alert to attack surfaces and data privacy.
- **Memory and state management**: Multiple issues around compaction config bypass, state leaks, and hard resets indicate that session memory handling is a persistent source of frustration.
- **TUI interaction**: Interrupt failures (#45326) hamper real-time use, especially for power users who rely on quick abort/retry.

On the PR side, high-activity PRs today include the large fix for plugin approvals (#81864) and the subagent delivery hardening PR (#82834), reflecting maintainer responsiveness to top community concerns.

---

## 5. Bugs & Stability

**High-severity (P1) bugs updated today:**

| Issue | Summary | Fix PR Exists |
|-------|---------|---------------|
| [#71127](https://github.com/openclaw/openclaw/issues/71127) | Stuck sessions detected but never aborted – gateway requires restart | No |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost on timeout | Yes – #82834 open |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets despite high reserveTokensFloor | No |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron jobs silently time out on sustained LLM API errors | No |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | Session hangs during compaction timeout, duplicate messages | No |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable – config overwrites, session-lock failures | No |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode – cron sessions overwrite shared files | No |
| [#45326](https://github.com/openclaw/openclaw/issues/45326) | TUI interrupt failure – swallowed input | No |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord leaks internal tool-call traces (NO_REPLY, raw JSON) | No |
| [#44202](https://github.com/openclaw/openclaw/issues/44202) | Apple Silicon ggml-metal crashes during embedding shutdown | No |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | Compaction retry creates orphan fork in parentId chain (dead-end branch) | No |
| [#48780](https://github.com/openclaw/openclaw/issues/48780) | Windows: exec()/read() commands corrupted with `</arg_value>>` suffix | No |

**Regressions reported today (updated 2026-05-17):**
- [#45706](https://github.com/openclaw/openclaw/issues/45706) (CLOSED) – HTTP 422 error with local DeepSeek/Mindie API.
- [#44599](https://github.com/openclaw/openclaw/issues/44599) – `OPENCLAW_CONFIG_DIR` cannot contain whitespace.
- [#45765](https://github.com/openclaw/openclaw/issues/45765) – `OPENCLAW_HOME` set to `~/.openclaw` creates nested `~/.openclaw/.openclaw` directory.

**Notable fix PRs merged/opened today:**
- #82834 – Harden subagent completion delivery (addresses #44925, #82784, etc.)
- #82825 – Bind exec approval trust to realpaths (security hardening)
- #82836 – Recover childless Codex native subagent tasks
- #82819 (merged) – Fix CLI web command SecretRef resolution
- #82699 (merged) – Fix plugin web search SecretRefs
- #82832 – Keep ACPX startup probe in runtime service

The overall bug landscape shows persistent issues in session lifecycle management (compaction, subagents, cron) and cross-platform quirks (Windows, Apple Silicon). However, the maintainer team is actively landing fixes, especially around subagent delivery and approval trust.

---

## 6. Feature Request Clusters

Several distinct clusters emerge from today's data:

### Security & Sandboxing
- [#6731](https://github.com/openclaw/openclaw/issues/6731) – safe/unsafe ClawdBot mode (since Feb 2)
- [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem sandboxing config (`tools.fileAccess`)
- [#45031](https://github.com/openclaw/openclaw/issues/45031) – Built-in security scanning for skill installation (suggests AgentShield integration)
- [#45740](https://github.com/openclaw/openclaw/issues/45740) – Prompt injection mitigation for gh-issues skill

### Configuration Flexibility
- [#43260](https://github.com/openclaw/openclaw/issues/43260) – Per-skill model routing (`model` field in SKILL.md frontmatter)
- [#45758](https://github.com/openclaw/openclaw/issues/45758) – YAML config file support alongside JSON5
- [#42475](https://github.com/openclaw/openclaw/issues/42475) – Per-agent cost budget enforcement at gateway level
- [#45565](https://github.com/openclaw/openclaw/issues/45565) – Route gateway lifecycle warnings to dedicated channel

### UX & UI Improvements
- [#42840](https://github.com/openclaw/openclaw/issues/42840) – MathJax/LaTeX rendering in Control UI
- [#45608](https://github.com/openclaw/openclaw/issues/45608) – Pre-reset agentic memory flush before `/new` and daily reset
- [#8299](https://github.com/openclaw/openclaw/issues/8299) – Config option to suppress sub-agent announce
- [#7476](https://github.com/openclaw/openclaw/issues/7476) – WhatsApp sticker send support

### Agent Orchestration & Skills
- [#48874](https://github.com/openclaw/openclaw/issues/48874) – Multi-session architecture: shared LLM + isolated sessions + knowledge base (RFC)
- [#45778](https://github.com/openclaw/openclaw/issues/45778) – Allow skills to push background messages via crontab
- [#44431](https://github.com/openclaw/openclaw/issues/44431) – Seven browser tool improvements from real-world field test
- [#49178](https://github.com/openclaw/openclaw/issues/49178) – Reusable gateway WebSocket client SDK package

### Related PRs (open today)
- #81864 – Plugin approval plain-language copy (improves UX for approval prompts)
- #82810 – Control UI sidebar session shortcuts
- #80681 – Override for trajectory per-event byte cap
- #58808 – Pass sender context to channel agent tool factories

No feature requests were closed today; all remain open for discussion and implementation.

---

## 7. User Feedback Summary

**Common pain points from issues updated today:**

- **Silent failures and lost state**: "Subagent completion silently lost" (#44925), "Stuck sessions never aborted" (#71127), "MEDIA directives silently dropped" (PR #69310). Users want explicit error feedback instead of quiet degradation.
- **Configuration friction**: Environment variable path issues (`OPENCLAW_HOME` nesting #457

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-17

## 1. Daily Cross-Project Overview

Today saw high activity across the four tracked projects. OpenClaw led with 500 issues and 500 PRs updated, releasing two beta versions focused on xAI Grok OAuth and CLI cron controls. NanoBot shipped v0.2.0 with its `/goal` persistent objective feature, alongside 16 merged PRs covering refactoring and bug fixes. ZeroClaw updated 50 issues and 50 PRs, merging skill cooldown enforcement and model-switch persistence fixes while its v0.8.0 mega-PR remains open for approval. PicoClaw had modest activity (5 issues, 4 PRs) with a nightly build and a new WeChat multi-account configuration PR.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Activity Note |
|---------|---------------|-------------|----------------|----------------|
| OpenClaw | 500 (416 open, 84 closed) | 500 (419 open, 81 merged/closed) | 2 beta releases (v2026.5.16-beta.2, .beta.3) | Highest volume; dominant focus on subagent reliability, CLI SecretRef resolution, and exec approval trust |
| NanoBot | 7 (4 open, 3 closed) | 26 (10 open, 16 merged/closed) | v0.2.0 released (105 PRs merged) | Major feature release with `/goal`; heavy refactoring of agent loop and context management |
| ZeroClaw | 50 (45 open, 5 closed) | 50 (40 open, 10 merged/closed) | No release today | Moderate activity; v0.8.0 mega-PR (#6398) pending; skill cooldown and model-switch fixes merged |
| PicoClaw | 5 (4 open, 1 closed) | 4 (3 open, 1 closed) | Nightly v0.2.8-nightly.20260517 | Low activity; one new feature PR (WeChat multi-account), one closed stale feature request |

## 3. OpenClaw Compared With Peers

**Activity volume:** OpenClaw’s 500+ updates dwarf ZeroClaw (50), NanoBot (7–26), and PicoClaw (5–4). This reflects a much larger community surface area and contributor base.

**Release cadence:** OpenClaw shipped two betas in one day. NanoBot shipped a major stable release (v0.2.0). ZeroClaw has no new release; its next milestone (v0.8.0) is still in review. PicoClaw’s nightly build is automated.

**Technical focus:** OpenClaw’s top PRs today target subagent delivery hardening (#82834), exec approval trust paths (#82825), and CLI SecretRef resolution (#82819). These are infrastructure-level reliability and security improvements. NanoBot focuses on goal-aware memory persistence and agent loop refactoring. ZeroClaw emphasizes skills ecosystem polish (cooldown enforcement, web dashboard, issue triage skills). PicoClaw focuses on channel expansion (WeChat multi-account) and UI copy/collapse controls.

**Community surface area:** OpenClaw has the most active issue discussions (17 comments on memory leak #48183, 14 on stuck sessions #71127). NanoBot’s top issue (#3790, WebUI corruption) has 12 comments. ZeroClaw’s most commented issue (#6123, fresh install bug) was closed with 18 comments. PicoClaw’s most active issue (#2421, email channel) has only 6 comments and is stale.

## 4. Shared Technical Focus Areas

**Session and state management reliability:**
- OpenClaw: subagent completion loss (#44925), stuck session detection (#71127), compaction retry creating orphans (#48810)
- NanoBot: goal persistence in `/goal`, loop detection hooks (#3728), duplicate context removal (#3859)
- ZeroClaw: model-switch persistence across turns (#6173, fixed #6719), ACP session store PR (#6649)
- PicoClaw: gateway starts with no channels regression (#2742)

**Provider integration and timeout handling:**
- OpenClaw: xAI Grok OAuth addition, local DeepSeek HTTP 422 regression (#45706)
- NanoBot: OpenRouter thinking control fixes (#3851, #3867), MiMo thinking control via OpenRouter (#3845)
- ZeroClaw: OpenAI provider hardcoded 120s timeout (#6723), custom remote provider sending local file paths (#6399)
- PicoClaw: MCP Streamable HTTP transport feature request closed as stale (#2782)

**Security and permission hardening:**
- OpenClaw: exec approval trust to realpaths (#82825), gh-issues skill prompt injection (#45740), safe/unsafe mode request (#6731)
- NanoBot: secret reference support documentation (#3866, follow-up to #2172)
- ZeroClaw: per-skill security permissions (#5775), extra args validation allowlist (#5842), tool_search auto-approve hang (#6721)
- PicoClaw: no security-specific activity today

**Multi-account and channel expansion:**
- OpenClaw: Discord typing lifecycle fixes, Telegram deduplication, browser credential filtering
- NanoBot: Signal channel PR (#3852), mailbox channel (#3461) merged
- ZeroClaw: Slack unfurl configuration fix
- PicoClaw: WeChat multi-account PR (#2883)

## 5. Differentiation Analysis

**Target user and deployment scale:**
- OpenClaw: appears designed for power users and enterprise deployments (CLI, cron, gateway, subagents). Strong emphasis on security controls (exec approval trust, SecretRefs, audit).
- NanoBot: more focused on individual agent capabilities – persistent goal tracking, context management, and spawning sub-agents. Its HKUDS origin suggests research/academic roots.
- ZeroClaw: invests in a skills marketplace (agentskills.io), web dashboard, and modular architecture. Targets developers building custom agents with extensible skills.
- PicoClaw: lightweight, potentially targeting embedded or low-resource environments (Sipeed hardware). WeChat support and Android app indicate mobile/consumer use.

**Architectural emphasis:**
- OpenClaw: heavyweight gateway/service orchestrator with multiple channels, cron, and subagent runtime. High issue count suggests broad feature surface.
- NanoBot: single-agent loop with goal awareness. Smaller scope, but deep refactoring of context and checkpoint mechanics.
- ZeroClaw: agent-centric but with schema versioning (V3), multi-agent runtime proposal (#6398), and ACP protocol. Skills and tool cooldown enforcement are key.
- PicoClaw: minimal feature set – chat channels, basic UI, nightly builds. No evidence of multi-agent or complex orchestration.

**Community size and maintainer responsiveness:**
- OpenClaw: multiple high-severity P1 bugs with no fix PRs (stuck sessions, hard resets, TUI interrupt). But also fast turnaround on subagent delivery (PR #82834 opened today). Mixed.
- NanoBot: maintainer @chengyongru highly active (multiple refactors and bug fixes merged today). Some issues like WebUI corruption (#3790) lack a fix yet.
- ZeroClaw: moderate maintainer activity – skill cooldown fixes merged same day as bug report. v0.8.0 mega-PR awaiting approval.
- PicoClaw: low maintainer responsiveness – gateway regression (#2742) has no response after 16 days.

## 6. Community Activity Notes

Based solely on today’s update counts and releases:

- **Tier 1 (High):** OpenClaw – 500 issues, 500 PRs, 2 beta releases. Community discussion threads with 10–17 comments.
- **Tier 2 (Medium):** ZeroClaw – 50 issues, 50 PRs, no release. Several new bugs filed today; most active issue has 18 comments (now closed).
- **Tier 3 (Low but eventful):** NanoBot – 7 issues, 26 PRs, major v0.2.0 release. Top issue has 12 comments.
- **Tier 4 (Low):** PicoClaw – 5 issues, 4 PRs, nightly build. Top issue has 6 comments and is stale.

## 7. Evidence-Backed Observations

1. **Session reliability remains the most frequent pain point across projects.** OpenClaw has multiple P1 bugs (subagent loss #44925, stuck sessions #71127, hard resets #63216). NanoBot addresses this via goal persistence and loop detection hooks (#3728). ZeroClaw fixed model-switch persistence today but still has ACP session work in progress. PicoClaw’s gateway regression (#2742) is a session startup failure. This is a shared concern, not a single-project issue.

2. **Provider integration consistency is a recurring source of user friction.** OpenClaw added xAI OAuth but had a DeepSeek regression. NanoBot’s OpenRouter thinking control fix was incomplete (follow-up #3867). ZeroClaw has hardcoded timeouts (#6723) and local file path bugs (#6399). PicoClaw’s MCP transport request was closed without resolution. No project is immune.

3. **Security and permission handling is gaining explicit attention.** OpenClaw’s exec approval trust PR (#82825) and the gh-issues prompt injection issue (#45740) indicate hardening. ZeroClaw has per-skill permissions (#5775) and a new auto-approve gap (#6721). NanoBot is documenting secret references. PicoClaw has no security activity, but the other three projects are actively addressing or requesting improvements.

4. **Multi-account and channel expansion is being developed in parallel.** OpenClaw fixes Discord/Telegram issues. NanoBot adds Signal and mailbox channels. ZeroClaw tunes Slack configuration. PicoClaw adds WeChat multi-account. This suggests sustained demand for multi-platform agent deployments, but no cross-project API standardization.

5. **No clear cross-project signal on architectural direction or market positioning.** Each project pursues distinct goals (OpenClaw: full-stack agent orchestrator, NanoBot: memory-persistent single agent, ZeroClaw: skills marketplace, PicoClaw: lightweight channel bridge). Today’s data does not indicate convergence or competition; rather, specialization persists.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-17

## 1. Today's Activity Brief

The project saw heavy development activity with **7 issues updated** (4 open, 3 closed) and **26 PRs updated** (10 open, 16 merged/closed) in the last 24 hours. A major release **v0.2.0** shipped, bringing the `/goal` feature for sustained objective tracking. Maintainer [@chengyongru] was highly productive, driving multiple refactors and bug fixes including duplicate context removal and timeout re-evaluation. The community reported a significant WebUI display regression (#3790) and a new WeChat login failure (#3863), both still open.

## 2. Releases

### v0.2.0 — *"The agent learned to hold a goal"*
- **Merge count**: 105 PRs merged
- **New contributors**: 20
- **Headline feature**: `/goal` – marks a thread as a sustained objective with `long_task`. The active goal stays pinned in Runtime Context every turn, surviving compaction and long tool chains.
- **Significance**: Changes the agent's core memory model from stateless turns to persistent goal-aware sessions.
- **Migration notes**: Not explicitly provided in the release data; users on v0.1.5.post3 (reported in #3790) should test carefully.

## 3. Project Progress

**16 PRs merged/closed today**, with several significant advances:

| PR | Description | Type |
|---|---|---|
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | Fix MiMo thinking control when routed through gateway providers (OpenRouter) | Bug fix |
| [#3856](https://github.com/HKUDS/nanobot/pull/3856) | Extract `checkpoint.py` and `turn_writer.py` from `loop.py` | Refactor |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | Extract `ContextBuilder.build_user_content()` as public method | Refactor |
| [#3859](https://github.com/HKUDS/nanobot/pull/3859) | Remove duplicate runtime context injection in mid-turn drain | Bug fix |
| [#3860](https://github.com/HKUDS/nanobot/pull/3860) | Update `CLAUDE.md` to reflect current codebase state | Documentation |
| [#3861](https://github.com/HKUDS/nanobot/pull/3861) | Re-evaluate LLM timeout per request when goal state changes mid-run | Bug fix |
| [#3853](https://github.com/HKUDS/nanobot/pull/3853) | Allow `format` in URL parameters while still blocking the `format` command | Bug fix |
| [#3516](https://github.com/HKUDS/nanobot/pull/3516) | Automatic cleanup of expired sessions (closed as invalid) | — |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | Multi-agent mailbox channel plugin | Feature |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) | `spawn_status`, `spawn_cancel` tools and spawn params | Feature |

**Key theme**: The agent loop and context management are being systematically refactored for better maintainability and correctness. The mailbox channel (#3461) and spawn management (#3223) are now merged, expanding inter-agent communication capabilities.

## 4. Community Hot Topics

### Most Active Issue: #3790 — WebUI display corruption
- **Status**: [OPEN](https://github.com/HKUDS/nanobot/issues/3790)
- **Comments**: 12 (highest in dataset)
- **Author**: [@kxsk-git]
- **Problem**: After updating to the latest 5.13 source, printed WebUI session content displays scrambled; requires page refresh.
- **Analysis**: This is affecting real users on the latest release candidate. The 12 comments suggest active troubleshooting. Likely a frontend rendering issue introduced in the v0.2.0 release cycle. No fix PR yet attached.

### Long-standing Feature: #2172 — Secret reference support
- **Status**: [CLOSED](https://github.com/HKUDS/nanobot/issues/2172)
- **Comments**: 5
- **Author**: [@EvanNotFound]
- **Context**: Requested support for reading secrets from `file` or `exec` instead of plaintext `config.json`. Closed but followed up by PR [#3866](https://github.com/HKUDS/nanobot/pull/3866) (open, documentation expansion). Indicates the feature may have been partially implemented; community waiting for docs.

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR Exists? |
|---|---|---|---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) — WebUI display corruption | **High** – core UX broken | Open | No |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) — WeChat login failure ("version too low") | **Medium** – channel blocker | Open | No |
| [#3857](https://github.com/HKUDS/nanobot/issues/3857) — Bootstrap fails with HTTP 500 | **Medium** – prevents FE access | Open | No |
| [#3845](https://github.com/HKUDS/nanobot/issues/3845) — MiMo thinking control broken via OpenRouter | **Low** – fixed already | Closed | [#3851](https://github.com/HKUDS/nanobot/pull/3851) (merged) |
| [#3864](https://github.com/HKUDS/nanobot/pull/3864) — Chinese rate-limit marker not recognized as transient | **Low** – retry improvement | Open | PR itself is the fix |
| [#3849](https://github.com/HKUDS/nanobot/issues/3849) — `ruff format` produces ~80-file unrelated diff | **Low** – development QoL | Closed | — |

**Notable**: The MiMo/OpenRouter thinking control fix (#3851) is already merged, but a follow-up PR [#3867](https://github.com/HKUDS/nanobot/pull/3867) is open to inject `reasoning.effort` directly for OpenRouter, suggesting the fix was incomplete.

## 6. Feature Request Clusters

### Skill/Context Management
- [#3846](https://github.com/HKUDS/nanobot/issues/3846) — Keep skill content in multi-turn conversations (open, 1 👍)
- [#3865](https://github.com/HKUDS/nanobot/pull/3865) — BM25-lite skill router to reduce system prompt by ~60% (open)
- **Observation**: Two independent proposals for improving how skill definitions are handled across turns. The BM25 approach (PR) is a concrete implementation; the issue proposes a different design. Both address token waste in multi-turn conversations.

### Security & Configuration
- [#2172](https://github.com/HKUDS/nanobot/issues/2172) — Secret reference support (closed, followed by docs PR #3866)
- **Observation**: The community wants better secret management. The documentation PR (#3866) suggests the feature exists but lacks guidance.

### Multi-Instance & Channel Expansion
- [#3854](https://github.com/HKUDS/nanobot/pull/3854) — Expose peer roster via bootstrap endpoint (open)
- [#3852](https://github.com/HKUDS/nanobot/pull/3852) — Add Signal channel support (open)
- **Observation**: Growing interest in multi-agent deployments (peer discovery) and expanding beyond mainstream chat platforms (Signal).

### Agent Self-Correction
- [#3728](https://github.com/HKUDS/nanobot/pull/3728) — Add LoopDetectHook and ReflectRetryHook (open since May 10)
- **Observation**: Addresses agents getting stuck in tool-call loops or blind retries. Still under review.

## 7. User Feedback Summary

- **Visual reliability**: User [@kxsk-git] reports frustration with WebUI print display corruption (#3790). The bug affects core usability and requires manual refresh.
- **Login confusion**: User [@KennethYCK] cannot log into WeChat despite having the latest app (#3863). Hint of an outdated compatibility layer.
- **Deployment friction**: User [@prakmyl] hit a `bootstrap failed: HTTP 500` error (#3857), suggesting gateway-to-FE handshake issues on some setups.
- **Provider inconsistency**: User [@ClearPlume] experienced that MiMo thinking control works with native provider but not via OpenRouter (#3845). This was partially fixed but a follow-up is still open (#3867).
- **Positive response**: The mailbox channel (#3461) and spawn management (#3223) are now merged, fulfilling earlier community requests for multi-agent workflows.

## 8. Backlog Watch

| Item | Age | Status | Notes |
|---|---|---|---|
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) — LoopDetectHook + ReflectRetryHook | 7 days open | No recent activity | Core agent improvement; needs maintainer review |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) — OpenRouter `reasoning.effort` injection | 1 day open | Just created | Follow-up to incomplete MiMo fix |
| [#3870](https://github.com/HKUDS/nanobot/pull/3870) — Docker build fix (`hatch_build.py` missing) | 1 day open | One-line fix | Blocks container deployments |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) — Keep skill content in multi-turn | 2 days open | No maintainer response | Design question without resolution |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) — BM25-lite skill router | 1 day open | Just created | Competing approach to #3846 |

**Observation**: The Docker build regression (#3870) is a one-line fix that directly blocks anyone using containers. The loop detection hooks (#3728) have been waiting a week and would meaningfully improve agent robustness.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-17

## Today's Activity Brief
The project saw **50 issues updated** (45 open/active, 5 closed) and **50 PRs updated** (40 open, 10 merged/closed) in the last 24 hours. No new releases were cut. Today's activity is dominated by the ongoing **v0.8.0 mega-PR (#6398)** seeking final approval for a multi-agent runtime and schema V3 release, alongside a surge of small fix PRs from multiple contributors addressing skill cooldown enforcement, model switch persistence, and Slack configuration gaps. Three new issues filed today expose blocking bugs in the channels supervisor, OpenAI provider timeout handling, and MCP deferred-loading approval gates.

## Releases
None today.

## Project Progress
**Closed issues (5):**
- [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) — `[Bug]: default_model issue on fresh install` (provider onboarding fix)
- [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) — `[Feature]: I hope the webhook endpoint can support agent mode` (webhook agent-mode trigger)
- [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) — `[Bug]: Custom remote provider sends local image file paths instead of data URLs`
- [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) — `No API for pushing notifications into an operator's gateway session` (zeroclaw 0.7.4)
- [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) — `audit(#5972 follow-up): extend manifest prompt audit to scan [skill].prompts`

**Merged/closed PRs (10):**
- [#6728](https://github.com/zeroclaw-labs/zeroclaw/pull/6728) — `feat(web-dashboard): M5.0 — Overview page + shared SectionNav` (merged)
- [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) — `feat(skills): background review fork + skill_manage tool (agentskills.io SKILL.md)` (merged)
- [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) — `fix(skills): enforce cooldown in skill_manage patch action` (merged, closes #6683)
- [#6725](https://github.com/zeroclaw-labs/zeroclaw/pull/6725) — `fix(skills): enforce cooldown in skill_manage patch action` (alternative impl, merged)
- [#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719) — `fix(runtime,channels): persist model_switch across turns in all paths` (merged)
- [#6707](https://github.com/zeroclaw-labs/zeroclaw/pull/6707) — `fix(xtask): parse Fluent audit inputs correctly` (merged)
- [#6709](https://github.com/zeroclaw-labs/zeroclaw/pull/6709) — `feat(debug): restore --log-llm payload tracing` (merged)
- [#6712](https://github.com/zeroclaw-labs/zeroclaw/pull/6712) — `fix(provider): replace expect_err panic with propagated error in Codex stream cleanup` (merged)
- [#6718](https://github.com/zeroclaw-labs/zeroclaw/pull/6718) — `feat(skills): document work queue query in issue triage skill` (merged)
- [#6717](https://github.com/zeroclaw-labs/zeroclaw/pull/6717) — `feat(skills): integrate arch-review artifact into PR review session` (merged)

**Key advances:**
- **Skill cooldown enforcement** now live via two merged PRs (#6684, #6725) — closes previously-dormant cooldown predicate
- **Model switch persistence** fixed across all paths (#6719) — addresses #6173
- **Web dashboard** now has an Overview page hitting real API endpoints (#6728)
- **ACP session persistence** PR (#6649) open and active, adding SQLite-backed ACP session store

## Community Hot Topics
**Most active Issues (by comment count):**
- [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (CLOSED, 18 comments) — Fresh install `default_model` bug — resolved after discussion around LXC Ollama setups and onboarding flow
- [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (8 comments, 1 👍) — `[Bug]: Use kimi-code provider in streaming chat call tools, provider API reports an error` — still open, needs repro, blocked on `reasoning_content` handling
- [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) (5 comments) — `[Feature]: Webhook transforms` — open since March, blocked, needs maintainer review

**Top PR (by size/impact):**
- [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) — `v0.8.0: Multi-Agent Runtime and Schema V3` — still open and seeking approval. Described by author as "BETA release" basis. Massive scope touching virtually every component

**Emerging pattern today:** Multiple new contributors (kmsquire, nick-pape, abhinavmathur-atlan) filed focused PRs fixing small, concrete pain points — Slack unfurl config, cron suppression, Codex error propagation, skill documentation. This suggests the v0.8.0 readiness push is attracting both maintainer and community polish work.

## Bugs & Stability
**High-severity bugs reported today:**
- [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) (new, no comments) — `tool_search not in default_auto_approve → deferred_loading+webhook silently hangs 120s then auto-denies` — blocks MCP tool discovery in non-interactive mode. No fix PR yet.
- [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) (new, no comments) — `Native OpenAI provider hardcodes 120s request timeout, silently ignores timeout_secs config` — user on vllm with long-running models needs 900s timeout. No fix PR yet.
- [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) (new, no comments) — `Channels supervisor crashloops when all configured channels have enabled=false` — 2-second restart loop, operator-unfriendly. No fix PR yet.

**Existing high-risk bugs with fix PRs today:**
- [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) (skill_manage `patch` ignores cooldown) — **Fixed** via #6684 and #6725 (both merged today)
- [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) (model_switch tool does not persist across turns) — **Fixed** via #6719 (merged today)

## Feature Request Clusters
**Gateway/Webhook improvements** (multiple items):
- [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) — Webhook transforms (custom paths + payload inspection) — blocked since March
- [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) — Gateway silent-fallback hardening — follow-up to #6099, accepted
- [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) — Notification push API for gateway — closed today (fix merged in earlier cycle)

**Security/permission model** (growing cluster):
- [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) — Per-skill security permissions (`allow_scripts` scoping) — blocked, needs maintainer review
- [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) — `extra_args` validation allowlist for Codex CLI security — blocked
- [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) (filed today) — Per-agent capability flags for `shared/` access and workspace escape — new, low risk

**Skills UX & developer experience**:
- [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — v0.7.6 tracker for skills support and UX — accepted
- [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — Prefer lighter ZeroClaw (remove ad-hoc integrations in favor of skills) — RFC, blocked

**Provider/model configuration**:
- [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) — OAuth support for Ollama Cloud, Zhipu, Kimi, MiniMax — blocked since April
- [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) — Per-model reasoning configuration — blocked

## User Feedback Summary
**Pain points expressed today:**
- **Fresh install frustration:** User @rgnyldz (closed #6123) struggled with default_model on first run in LXC; resolution required clarifying onboarding flow behavior
- **Streaming/thinking protocol incompatibility:** @hvvvvvvv (#5600) reports `reasoning_content` missing from Kimi provider responses — blocks tool-calling chat entirely
- **MCP deferred loading UX:** @nick-pape (#6721) describes 120-second silent hang followed by auto-deny when `tool_search` isn't in default_auto_approve — "no client to approve" in webhook mode
- **Timeout inflexibility:** @nick-pape (#6723) needs 900s timeouts for long-running vllm models; hardcoded 120s in OpenAI provider "silently ignores" config
- **Channels supervisor crash:** @nick-pape (#6724) reports 2-second restart loop when channels are configured but disabled — no user-facing error, just continuous restarts

**Positive signals:**
- Multiple small quality-of-life PRs merged (Slack unfurl toggle, cron suppression, web dashboard overview, --log-llm restore) — maintainers responsive to community pain points
- Skill cooldown enforcement merged same day as bug report (#6683 → #6684/#6725) — fast turnaround

## Backlog Watch
**Issues needing maintainer attention (blocked >2 weeks, priority tagged):**
- [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) — OAuth for 4 providers (blocked, priority:p2, opened 2026-04-10)
- [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) — Pre-hook skip gates for cron/SOP (blocked, priority:p2, opened 2026-04-10)
- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — LSP support (RFC, blocked, opened 2026-04-19)
- [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — Lighter ZeroClaw (RFC, blocked, opened 2026-04-27)
- [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) — model_switch persistence (blocked, priority:p1, opened 2026-04-28 — **fix merged today** via #6719, status may update)

**Notable:**
- [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (v0.8.0 mega-PR) remains open and is explicitly seeking approval — this is the single largest pending item and will define the next release
- [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) (Webhook transforms, opened 2026-03-02) — oldest open feature request with maintainer-blocked status

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-17

## Today's Activity Brief
- **5 issues** were updated in the last 24 hours (4 open, 1 closed).
- **4 pull requests** were updated (3 open, 1 closed).
- **1 new release** was published: a nightly build of v0.2.8-nightly.20260517.
- A new feature PR for WeChat multi-account support was opened (#2883) after a similar PR was closed (#2881).
- A bug was reported on Android (permission denied, v0.1.3) and a regression in v0.2.8 (gateway starts with no channels) remains open.

## Releases
- **nightly — v0.2.8-nightly.20260517.0df050ff** (automated, unstable)
  [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  No breaking changes or migration notes accompany this build; use with caution.

## Project Progress
- **Merged/closed PRs today:**
  - [#2881](https://github.com/sipeed/picoclaw/pull/2881) — **feat: support WeChat multi-account configuration** (closed; replaced by #2883).
- **Merged/closed issues today:**
  - [#2782](https://github.com/sipeed/picoclaw/issues/2782) — Feature request for MCP Streamable HTTP transport (closed, stale).
- **Open PRs worth noting:**
  - [#2882](https://github.com/sipeed/picoclaw/pull/2882) — Adds independent copy and collapse controls for code blocks in chat UI.
  - [#2883](https://github.com/sipeed/picoclaw/pull/2883) — New WeChat multi-account configuration support (open).
  - [#2835](https://github.com/sipeed/picoclaw/pull/2835) — Fixes suppression of final replies when the `message` tool is used for interim updates (open, stale).

## Community Hot Topics
- **Most commented issue:** [#2421](https://github.com/sipeed/picoclaw/issues/2421) (6 comments, 1 👍) — Feature request to add email as a native channel. Discussed for use in corporate/non-chat environments. Now a stale issue after over a month.
- **Second most active:** [#2742](https://github.com/sipeed/picoclaw/issues/2742) (4 comments) — Bug: gateway starts with no channels in v0.2.8. User provided config and steps; no maintainer response visible yet.

## Bugs & Stability
| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) | **High** | v0.2.8 regression: gateway starts with zero channels despite configured Telegram. | None |
| [#2880](https://github.com/sipeed/picoclaw/issues/2880) | **Medium** | Android app (v0.1.3) crashes with permission denied when creating `Downloads/picoclaw` directory on Xiaomi Pocophone F1. User granted all storage permissions. | None |
| [#2835](https://github.com/sipeed/picoclaw/pull/2835) | (Fix PR) | Agent final reply sometimes suppressed after using `message` tool for progress updates. PR aims to always publish final reply. | Open PR (stale) |

## Feature Request Clusters
- **New channels:**
  - [#2421](https://github.com/sipeed/picoclaw/issues/2421) — Add email as a native channel.
  - [#2881](https://github.com/sipeed/picoclaw/pull/2881) / [#2883](https://github.com/sipeed/picoclaw/pull/2883) — Support multiple WeChat accounts (dynamic config key `weixin_*`).
- **UI improvements:**
  - [#2882](https://github.com/sipeed/picoclaw/pull/2882) — Independent copy/ collapse controls for code blocks in web chat.
- **Update mechanism:**
  - [#2834](https://github.com/sipeed/picoclaw/issues/2834) — Request for a tutorial on upgrading from source (stale).

## User Feedback Summary
- **Pain points:**
  - Gateway fails to load any channels in v0.2.8 – a critical regression for Telegram users.
  - Android users on older version (0.1.3) cannot start service due to file permission denial.
  - Users request clear upgrade instructions (#2834).
- **Use cases:**
  - Email channel desired for corporate and “non-chat-platform” workflows (#2421).
  - Need for MCP Streamable HTTP transport to connect with modern MCP servers (#2782, now closed).
- **Satisfaction signals:** None directly recorded; no positive reactions on recent issues.

## Backlog Watch
- **Stale issues needing maintainer attention:**
  - [#2421](https://github.com/sipeed/picoclaw/issues/2421) — Email channel request (open since Apr 8, stale).
  - [#2834](https://github.com/sipeed/picoclaw/issues/2834) — Update from source tutorial (open since May 9, stale).
  - [#2742](https://github.com/sipeed/picoclaw/issues/2742) — Gateway/no-channels bug (open since May 1, no response).
- **Stale PR:**
  - [#2835](https://github.com/sipeed/picoclaw/pull/2835) — Agent final reply fix (open since May 9, no review activity).

</details>