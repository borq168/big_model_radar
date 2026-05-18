# OpenClaw Ecosystem Digest 2026-05-18

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-18 02:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-18

## Today's Activity Brief

OpenClaw saw high activity with 500 issues and 500 pull requests updated in the last 24 hours, alongside three new beta releases. The latest betas (v2026.5.16-beta.4 through beta.6) focus on Mac app Settings redesign, a security audit suppressions feature, and a skill rename to `autoreview`. The project's 470 open/active issues and 444 open PRs indicate a large, actively maintained codebase with significant ongoing development and community engagement. Key topics today include platform expansion requests, security hardening discussions, and multiple bug regressions from recent releases.

## Releases

Three new beta versions were published today, all tagged 2026.5.16:

**v2026.5.16-beta.6**
- Mac app: redesigned Settings pages with consistent card layouts, cached navigation, and cleaner permissions/voice/skills/cron/exec/debug panes with steadier spacing around the native sidebar.
- Skills: renamed repo-local Codex closeout review skill and helper to `autoreview`.

**v2026.5.16-beta.5** — identical changelog to beta.6.

**v2026.5.16-beta.4**
- Security/audit: added `security.audit.suppressions` for intentionally accepted audit findings, keeping suppressed matches out of the active summary while preserving them in JSON output with an active suppression notice. (#76949) Thanks @100menotu001.
- Agents/subagents: labeled delegation improvements.

No breaking changes or migration notes were documented in these releases.

## Project Progress

**Merged/Closed PRs today (2 closed PRs of 56 total closed/merged):**

- **#83215** — CI: skip changelog-only workflow runs to prevent unnecessary CI fanout on documentation-only commits. ([GitHub](https://github.com/openclaw/openclaw/pull/83215))
- **#83372** — `fix(migrate)`: use `plan.summary` for header conflict/sensitive counts, fixing a bug where migration preview headers showed "0 conflicts" when all conflicts were under hidden config items. ([GitHub](https://github.com/openclaw/openclaw/pull/83372))
- **#83340** — Added payload regression for commentary-prefixed final answers in Codex, closing out a remaining narrow regression. ([GitHub](https://github.com/openclaw/openclaw/pull/83340))

## Community Hot Topics

**Most Active Issues:**

1. **#75 — Linux/Windows Clawdbot Apps** (104 comments, 75 👍) — The top-voted open feature request seeking desktop app support beyond macOS/iOS. Created January 2026, still open with no fix PR. ([GitHub](https://github.com/openclaw/openclaw/issues/75))

2. **#25592 — Text between tool calls leaks to messaging channels** (26 comments, P1, security) — A significant UX and security issue where internal processing output (error handling, acknowledgments) gets routed to Slack, iMessage, etc. Bearing `impact:security` and `impact:message-loss` labels. ([GitHub](https://github.com/openclaw/openclaw/issues/25592))

3. **#9443 — Request: Prebuilt Android APK releases** (24 comments) — Community request for precompiled APK downloads rather than requiring users to build from source. ([GitHub](https://github.com/openclaw/openclaw/issues/9443))

4. **#22676 — Signal daemon stop() race condition on SIGUSR1 restart** (17 comments, P1) — Orphaned processes and send failures when signal-cli instances overlap during gateway restarts. ([GitHub](https://github.com/openclaw/openclaw/issues/22676))

**Most Active PRs:** Several open PRs address security hardening, including #38290 (extension origins in browser allowlist), #72268 (nested approval metadata parsing), and #38222 (hook-injected prompt context length limits). The most active open PRs today are:

- **#83394** — Schema fix for `tools.codeMode` at agent-entry scope. ([GitHub](https://github.com/openclaw/openclaw/pull/83394))
- **#83242** — Web UI: clarify imported insights cluster tabs. ([GitHub](https://github.com/openclaw/openclaw/pull/83242))
- **#83108** — Fix Codex declined native tool replies not being surfaced to channel. ([GitHub](https://github.com/openclaw/openclaw/pull/83108))

**Analysis:** The community is heavily focused on platform completeness (Linux/Windows/Android apps), security hardening (secrets masking, tool-call leakage), and reliability of multi-agent/event-driven workflows (Signal race condition, cron session handling).

## Bugs & Stability

**High Severity (P1, impact:security or impact:crash-loop):**

- **#25592 — Text leaks between tool calls to messaging channels** (P1, security, message-loss) — Internal processing output visible to end-users. Labeled `clawsweeper:linked-pr-open` indicating a fix PR exists. ([GitHub](https://github.com/openclaw/openclaw/issues/25592))
- **#22676 — Signal daemon stop() race condition** (P1, message-loss, crash-loop) — Orphaned processes on SIGUSR1 restart. ([GitHub](https://github.com/openclaw/openclaw/issues/22676))
- **#44905 — Discord leaks internal tool-call traces** (P1, security, message-loss) — Raw LLM tool-call artifacts (NO_REPLY, commentary, raw JSON) visible to Discord channels. ([GitHub](https://github.com/openclaw/openclaw/issues/44905))
- **#38327 — "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview** (P1, crash-loop) — Regression in 2026.3.2 affecting Google Vertex users. Labeled `queueable-fix`. ([GitHub](https://github.com/openclaw/openclaw/issues/38327))
- **#43661 — Session hangs indefinitely when compaction times out** (P1, crash-loop, message-loss) — Repeated duplicate message sends with no recovery. ([GitHub](https://github.com/openclaw/openclaw/issues/43661))
- **#43367 — Multi-agent orchestration instability** (P1, session-state, message-loss, auth-provider) — Concurrent agent add/config overwrites and session-lock failures. ([GitHub](https://github.com/openclaw/openclaw/issues/43367))

**Medium Severity (P2, regressions/behavior bugs):**

- **#45269 — `apply_patch` treated as unknown tool in agent policy pipeline** (P2, regression, security) — Regression in 2026.3.12 where built-in tool is stripped from allowlists. ([GitHub](https://github.com/openclaw/openclaw/issues/45269))
- **#44993 — Heartbeat/Cron "Current time" timestamp is stale** (P2, regression) — Timestamp not refreshing between runs. ([GitHub](https://github.com/openclaw/openclaw/issues/44993))
- **#44845 — Token usage shows 0/200k for Volcengine coding plan** (P2, behavior bug) — API field naming mismatch with OpenClaw's token parser. ([GitHub](https://github.com/openclaw/openclaw/issues/44845))
- **#43747 — Memory management chaos** (P2, regression) — Inconsistent behavior across users: chunking/embedding vs. different storage paths. ([GitHub](https://github.com/openclaw/openclaw/issues/43747))
- **#45765 — OPENCLAW_HOME nested directory bug** (P2, regression) — Setting `OPENCLAW_HOME=~/.openclaw` produces `~/.openclaw/.openclaw` nesting. ([GitHub](https://github.com/openclaw/openclaw/issues/45765))
- **#44599 — OPENCLAW_CONFIG_DIR cannot contain whitespace** (P2, regression) — Docker setup failure for paths with spaces. ([GitHub](https://github.com/openclaw/openclaw/issues/44599))
- **#45494 — Cron agent jobs silently time out on sustained API outages** (P1, regression) — Exhausts full timeout window on HTTP 500 instead of fast-failing. ([GitHub](https://github.com/openclaw/openclaw/issues/45494))

Several high-severity bugs have linked fix PRs (noted with `clawsweeper:linked-pr-open` labels). The compaction timeout and multi-agent orchestration bugs appear to be the most disruptive for production users.

## Feature Request Clusters

**Multi-Platform Client Support:**
- #75 — Linux/Windows desktop apps (104 comments, 75 👍, oldest open feature request)
- #9443 — Prebuilt Android APK releases (24 comments)
- #13597 — Comprehensive AWS deployment guide (6 comments, 3 👍)
- #13616 — Backup/restore utility for config, cron jobs, session history (8 comments)

**Security Hardening:**
- #10659 — Masked secrets: prevent agents from reading raw API keys (12 comments, 4 👍, P1)
- #6615 — Denylist support for exec-approvals (7 comments, 7 👍)
- #7722 — Filesystem sandboxing config (`tools.fileAccess`) (6 comments, 4 👍)
- #13610 — Native secrets management integration (AWS Secrets Manager, Vault) (7 comments, 1 👍)
- #13364 — Expose `before_tool_call`/`after_tool_call` in internal hooks system (6 comments, 1 👍)
- #45031 — Built-in security scanning for skill installation (6 comments)
- #13583 — Pre-response enforcement hooks (hard gates) (10 comments, 2 👍)

**UX / Agent Control Improvements:**
- #22438 — Tiered bootstrap file loading for progressive context control (16 comments)
- #12602 — Slack Block Kit support for agent messages (13 comments)
- #22358 — Post-subagent completion extension hook (11 comments)
- #8299 — Config option to suppress sub-agent announce (6 comments, 1 👍)
- #17840 — Opt-in reaction-triggered agent turns (6 comments)
- #13700 — Session snapshots save/load (6 comments)
- #11665 — Webhook hook sessions should reuse existing session for multi-turn support (7 comments)
- #45608 — Pre-reset agentic memory flush on `/new` and daily reset (8 comments, 3 👍)

**AI/Model Features:**
- #43260 — Per-skill model routing via `model` field in SKILL.md frontmatter (8 comments)
- #44353 — Fallback models not triggered on provider-level errors (6 comments, 1 👍, P1)
- #14785 — Reduce tool schema token overhead (~3,500 tokens/session) (6 comments)
- #42840 — MathJax/LaTeX support in Control UI (6 comments, 4 👍)

## User Feedback Summary

**Positive Signals:** Three beta releases in one day with focused improvements on Mac Settings and security audit tooling show responsive development. Release v2026.5.16-beta.4 includes a community-contributed security feature (#76949 from @100menotu001), indicating healthy external contributions.

**Pain Points:**

1. **Platform gap is the loudest request** — Linux/Windows desktop app (#75) remains the highest-comment and most-upvoted issue after 4+ months open. Android users also report frustration with having to build from source (#9443).

2. **Recent regressions frustrate users** — Multiple P1/P2 regressions reported in 2026.3.x releases (March 2026) are still open, including `apply_patch` tool policy stripping (#45269), Google Vertex crashes (#38327), compaction timeouts (#43661), and stale timestamps (#44993). One user report (#43747) notes "Memory management is in chaos" with colleagues experiencing inconsistent behavior.

3. **Security concerns are emerging** — Users are increasingly worried about credential leakage (#10659, #25592, #44905), prompt injection risks, and lack of sandboxing (#7722, #6731). Several issues carry `impact:security` labels.

4. **Multi-agent orchestration reliability** — User @waliddafif reports that parallel coding workflows are "unreliable in practice" with config overwrites and session-lock failures (#43367).

5. **Configuration and migration friction** — News on openclaw config file nesting (#45765), whitespace handling (#44599), and lack of standardized backup/restore (#13616) create setup barriers.

## Backlog Watch

**Long-unanswered high-importance issues needing maintainer attention:**

- **#75 — Linux/Windows Clawdbot Apps** (104 comments, Jan 2026, 75 👍) — The project's most popular feature request with no fix PR after 4.5 months. Multiple `clawsweeper` labels indicate triage but no active work assignment.
- **#25592 — Text between tool calls leaks** (26 comments, Feb 2026, P1, security) — Security-critical issue with linked PR open but not yet merged.
- **#9443 — Prebuilt Android APK releases** (24 comments, Feb 2026) — Community member submitted via AI assistant indicating proxy contributions; no PR or maintainer commitment evident.
- **#10659 — Masked secrets** (12 comments, Feb 2026, P1, security) — 4 upvotes, critical security feature with no assigned PR.
- **#6731 — Safe/unsafe ClawdBot** (12 comments, Feb 2022, P2, security) — Suggestion to rewrite in Rust for safety guarantees; now 4 months old.
- **#45740 — gh-issues skill: untrusted issue body injected into sub-agent prompt** (12 comments, Mar 2026, P2, security) — Raw GitHub issue body sanitization gap; labeled `clawsweeper:linked-pr-open` but PR not identified in today's data.
- **#16670 — Onboarding Wizard should include Memory/Embedding setup** (8 comments, Feb 2026) — New users missing critical memory feature configuration.
- **#13751 — Feishu plugin: remove overly broad contact permission** (6 comments, Feb 2026, P1, security) — Over-permissioned API access, 2 upvotes.
- **#29736 — Exec approvals path ignores active state root** (9 comments, Feb 2026, P1, security) — Writes to `~/.openclaw` instead of configured runtime root.
- **#37634 — Sandbox workspaceAccess "none" produces read-only workspaces** (8 comments, Mar 2026, P1, security) — 4 upvotes, prevents agent tools from writing to isolated workspace.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-18

## 1. Daily Cross-Project Overview

Today saw the highest raw activity from **OpenClaw**, which published three beta releases and processed over 500 issue and PR updates, though the volume is primarily driven by its large existing backlog. **Zeroclaw** also showed strong activity with 50 PRs and 20 issues updated, but no new release. **NanoBot** and **PicoClaw** had moderate engagement, with NanoBot merging 8 PRs and PicoClaw releasing a nightly build. Across all projects, themes of provider compatibility, security hardening, and platform expansion were visible, though with differing levels of urgency and maintainer response.

## 2. Activity Comparison

| Project    | Issues Updated (today) | PRs Updated (today) | Release Status (today) | Activity Note |
|------------|------------------------|---------------------|------------------------|---------------|
| OpenClaw   | ~500 (470 open / 444 open PRs) | ~500 (444 open PRs) | 3 beta releases (v2026.5.16-beta.4 to .6) | Highest volume; many long-standing open issues; 3 betas in one day. |
| NanoBot    | 9 (8 open, 1 closed)  | 18 (10 open, 8 merged/closed) | No new release | Moderate activity; focus on WebUI and Docker fixes. |
| Zeroclaw   | 20 (16 open, 4 closed) | 50 (41 open, 9 merged/closed) | No new release | High PR churn; large v0.8.0 PR still open; several new bugs filed. |
| PicoClaw   | 12 (5 open, 7 closed) | 13 (5 open, 8 merged/closed) | Nightly build (v0.2.8-nightly) | Moderate; 8 PRs merged; new RISC‑V bug and SiliconFlow provider support. |

## 3. OpenClaw Compared With Peers

- **Activity Volume**: OpenClaw’s update counts (500+ each for issues and PRs) dwarf other projects, but this reflects a much larger codebase and backlog rather than proportionally higher immediate contribution velocity. Zeroclaw’s 50 PRs is notable for its smaller repo.
- **Technical Focus**: OpenClaw is heavily invested in **Mac app redesign** (Settings UI), **security audit tooling** (`security.audit.suppressions`), and **multi-agent orchestration** (sub-agent labeling). Peers are more focused on provider integration (PicoClaw SiliconFlow, NanoBot Gemini/MiniMax) and WebUI/streaming reliability.
- **Community Surface Area**: OpenClaw’s most active issue (#75 – Linux/Windows apps) has 104 comments and 75 👍, indicating a strong unmet platform demand. No other project has a single issue with that level of engagement – NanoBot’s most commented has 14, Zeroclaw’s 9, PicoClaw’s 19.
- **Release Cadence**: OpenClaw’s three betas today reflect a mature release process. Peers have no formal releases (NanoBot, Zeroclaw) or only nightly builds (PicoClaw).

## 4. Shared Technical Focus Areas

- **Platform Expansion (Linux/Windows/Android)**
  *OpenClaw* (#75, #9443), *Zeroclaw* (#6710 – desktop support PR merged), *PicoClaw* (#28 – LM Studio on Android). All communities explicitly requesting broader OS support.

- **Provider Compatibility Issues**
  *OpenClaw* (#38327 – Google Vertex crash), *Zeroclaw* (#6059 – DeepSeek V4, #5600 – Kimi‑code streaming), *NanoBot* (#3863 – WeChat login), *PicoClaw* (#2887 – OpenAI fails on RISC‑V). Several involve thinking‑mode/streaming payload mismatches.

- **WebUI / Streaming Fixes**
  *NanoBot* (#3790 – garbled display, #3877 – streaming optimization), *Zeroclaw* (multiple PRs, but no explicit WebUI bug in today’s digest), *PicoClaw* (#2882 – code block UI). Common theme of improving real-time rendering.

- **Security / Data Leakage**
  *OpenClaw* (#25592, #44905 – tool call/text leaks to messaging channels), *NanoBot* (#3887 – authorization for dangerous commands), *Zeroclaw* (#6734 – tool‑call envelopes leak to Matrix). Across projects, internal processing artifacts are reaching end users.

- **CI / Workflow Reliability**
  *OpenClaw* (#83215 – skip changelog-only CI), *Zeroclaw* (#6751 – PR‑title workflow failure, #6747 – action not allowed). A few projects experience non-code CI issues that block contributions.

## 5. Differentiation Analysis

| Dimension               | OpenClaw                                         | NanoBot                                          | Zeroclaw                                         | PicoClaw                                         |
|-------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| **Primary Release Vehicle** | Beta releases (3 today)                        | Nightly / no formal release                     | No release today; large v0.8.0 PR pending        | Nightly builds only                              |
| **Key Feature Today**   | Mac Settings UI redesign, security audit suppressions | Image generation providers (Gemini, MiniMax), BM25 skill router | Multi‑agent runtime v0.8.0, skills cooldown fix | SiliconFlow provider, code block UI, PowerShell security |
| **Target Audience**     | General desktop + server users; multi‑agent orchestration | Users needing flexible provider support and WebUI; WeChat integration | Developers working with provider diversity and skills sandboxing | Edge/embedded (RISC‑V), Android users, lightweight deployments |
| **Top Pain Point**      | Platform gap (no Linux/Windows desktop) and regressions in 2026.3.x | WebUI display corruption; Docker deployment fails | DeepSeek V4 and other provider thinking‑mode incompatibilities | LLM provider onboarding friction; aggressive tool safety checks |
| **Backlog Age**         | Oldest high‑profile issue (#75) from Jan 2026 (4.5 months) | Oldest PR (#2060) from March 15 (2 months) | Oldest issue (#5600) from April 10 (1 month+) | Oldest issue (#28) from Feb 11 (3 months) |

- **OpenClaw** leans toward a “core reference” role with extensive configuration, security audit, and multi‑agent capabilities, but its size creates longer resolution times for popular requests.
- **NanoBot** is more modular and provider‑agnostic, with frequent small fixes and new model integrations; community contributions are flowing steadily.
- **Zeroclaw** is in the middle – high PR volume, active bug reporting, but absent releases and a massive pending feature PR (#6398) signal a potential codebase churn.
- **PicoClaw** is lightweight and edge‑focused; it merges quickly (SiliconFlow requested May 17, merged May 18) but also closes many issues as stale without resolution.

## 6. Community Activity Notes

**High Activity Tier**: OpenClaw (extremely high issue/PR counts, multiple releases) and Zeroclaw (50 PRs, many new bugs).
**Medium Activity Tier**: NanoBot (9 issues, 18 PRs) and PicoClaw (12 issues, 13 PRs, one nightly).

- OpenClaw’s community is the most vocal about unmet platform needs, but also contributes security features (#76949 from @100menotu001).
- NanoBot community actively submits Docker and WebUI fixes; most commented issue (#3790) has no linked fix.
- Zeroclaw community is filing bugs faster than they are being fixed (several S1 bugs remain open, large PRs idle).
- PicoClaw community appreciates quick provider support but shows frustration with stale bug closures.

## 7. Evidence-Backed Observations

1. **Provider compatibility issues are the most frequent cross-project theme today.**
   - OpenClaw reports Google Vertex crashes (#38327).
   - Zeroclaw reports DeepSeek V4, Kimi‑code, Xiaomi reasoning problems (#6059, #5600, #6672).
   - NanoBot reports WeChat login failure (#3863).
   - PicoClaw reports OpenAI fails on RISC‑V (#2887).
   Each project struggles with a different provider, indicating fragmentation in LLM API complexity.

2. **Security/data leakage concern is strongest in OpenClaw, but appears in others as well.**
   - OpenClaw has three P1 issues with `impact:security` (#25592, #44905, #38327).
   - NanoBot has a new issue for dangerous command authorization (#3887).
   - Zeroclaw reports tool‑call envelope leakage to Matrix (#6734).
   Only PicoClaw lacks a security bug filed today, though its PowerShell fix (#2836) shows proactive hardening.

3. **WebUI and streaming fixes are a shared priority for NanoBot and PicoClaw, less so for OpenClaw today.**
   - NanoBot merged two WebUI PRs (#3877, #3878) and has an open garbled display bug (#3790).
   - PicoClaw merged code block UI (#2882).
   - OpenClaw’s Mac app redesign is UI-focused but not WebUI.
   - Zeroclaw has no explicit WebUI items in today’s digest.

4. **Platform expansion demand (Linux/Windows/Android) is persistent across OpenClaw, Zeroclaw, and PicoClaw, but only Zeroclaw made concrete progress today.**
   - Zeroclaw merged PR #6710 adding Windows/Linux desktop scaffolding.
   - OpenClaw’s top issue (#75) remains untouched after 4.5 months.
   - PicoClaw’s #28 (LM Studio on Android) lacks maintainer reply.

5. **No clear cross-project signal of a “consolidation” or “maturation” phase.** All four projects are actively adding features and fixing bugs, but each has a distinct bottleneck: OpenClaw (regression debt), NanoBot (WebUI stability), Zeroclaw (massive unmerged PR and provider gaps), PicoClaw (stale issue handling). The open-source ecosystem remains in a dynamic, pre‑standardization state.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-18

## 1. Today's Activity Brief

In the past 24 hours, 9 issues were updated (8 open, 1 closed) and 18 pull requests were updated (10 open, 8 merged/closed). No new releases were published. Activity centered on fixing WebUI display and streaming issues, resolving Docker deployment inconsistencies, adding new image generation providers (Gemini, MiniMax), and improving memory consolidation and skill routing. The community submitted several feature requests for better configuration control and security authorization.

## 2. Releases

None.

## 3. Project Progress

Eight pull requests were merged or closed today. Key advances include:

- **WebUI streaming & rendering**:
  [#3877](https://github.com/HKUDS/nanobot/pull/3877) optimized streaming turn responsiveness and activity rendering for long histories without adding npm dependencies.
  [#3878](https://github.com/HKUDS/nanobot/pull/3878) fixed CLI reasoning tokens being printed one per line (e.g., DeepSeek-V4).
  [#3872](https://github.com/HKUDS/nanobot/pull/3872) and [#3870](https://github.com/HKUDS/nanobot/pull/3870) both addressed Docker build failures (missing `hatch_build.py` and WebUI port exposure).

- **Agent & memory consolidation**:
  [#3881](https://github.com/HKUDS/nanobot/pull/3881) resolved a race condition between AutoCompact (TTL-based idle session truncation) and Consolidator (token-budget consolidation) that could cause session corruption.
  [#3864](https://github.com/HKUDS/nanobot/pull/3864) added the Chinese rate-limit marker `访问量过大` to transient error detection so retries happen automatically.

- **New feature – long-running goals**:
  [#3788](https://github.com/HKUDS/nanobot/pull/3788) introduced chat-scoped sustained goal state via `/goal` command, aligning `long_task` / `complete_goal` with session metadata and WebUI.

- **Documentation**:
  [#3866](https://github.com/HKUDS/nanobot/pull/3866) expanded the secrets configuration section with more examples for `${VAR_NAME}` substitution.

The following issue was also closed:
[#3882](https://github.com/HKUDS/nanobot/issues/3882) (WeChat protocol upgrade – closed, likely superseded by other work).

## 4. Community Hot Topics

- **Most commented issue**:
  [#3790](https://github.com/HKUDS/nanobot/issues/3790) – *WebUI session – printed content display garbled (needs page refresh)* – 14 comments, created May 14, still open. Users report the bug persists after updating to the latest nightly build. No fix PR has been linked yet.

- **Active PR discussions**:
  [#3847](https://github.com/HKUDS/nanobot/pull/3847) – *Introduce skill_load tool* – aims to prevent skill content loss in multi-turn conversations. Still open with ongoing feedback.
  [#2060](https://github.com/HKUDS/nanobot/pull/2060) – *shell tool: allow configurable specific paths when restrict_to_workspace=True* – open since March 15, needs maintainer decision.

- **New feature request with early attention**:
  [#3885](https://github.com/HKUDS/nanobot/issues/3885) – *Add global switch for Dream system job* – posted just today, already has 1 comment and one 👍.

## 5. Bugs & Stability

Open bugs ranked by severity:

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) | *bootstrap failed: HTTP 500* – gateway running but frontend unreachable | No |
| **High** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI display garbled after printing content; requires page refresh | No |
| **High** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) | *WebUI conversation closes after first response* | No |
| **High** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | *WeChat login fails: "version too low"* despite updated WeChat | No (issue [#3882](https://github.com/HKUDS/nanobot/issues/3882) for protocol upgrade closed) |
| **Medium** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Five Docker deployment inconsistencies in docs and compose files | Yes: [#3875](https://github.com/HKUDS/nanobot/pull/3875) |
| **Medium** | [#3876](https://github.com/HKUDS/nanobot/issues/3876) | *WebUI bootstrap is localhost-only – inaccessible from Docker containers* | Yes: [#3875](https://github.com/HKUDS/nanobot/pull/3875) |

Several recent PRs directly address stability: [#3877](https://github.com/HKUDS/nanobot/pull/3877) (streaming), [#3878](https://github.com/HKUDS/nanobot/pull/3878) (CLI display), [#3881](https://github.com/HKUDS/nanobot/pull/3881) (race condition), [#3864](https://github.com/HKUDS/nanobot/pull/3864) (rate-limit retry).

## 6. Feature Request Clusters

Several user-requested features and related PRs appeared today, grouping naturally:

- **Image generation providers**: Two new provider PRs – [#3886](https://github.com/HKUDS/nanobot/pull/3886) (Gemini Imagen 4 + Gemini Flash) and [#3879](https://github.com/HKUDS/nanobot/pull/3879) (MiniMax image-01). Both add configuration plumbing and validation.

- **Memory & skill management improvements**:
  [#3880](https://github.com/HKUDS/nanobot/pull/3880) – compress long tool results before LLM consolidation.
  [#3865](https://github.com/HKUDS/nanobot/pull/3865) – BM25-lite skill router to reduce system prompt size (~60% token savings).
  [#3847](https://github.com/HKUDS/nanobot/pull/3847) – skill_load tool to preserve skill content across turns.

- **Configuration control & security**:
  [#3885](https://github.com/HKUDS/nanobot/issues/3885) – global switch to disable Dream system job registration.
  [#3887](https://github.com/HKUDS/nanobot/issues/3887) – user authorization mechanism for dangerous commands (e.g., `rm -rf` bypass via configurable allow-list).
  [#3883](https://github.com/HKUDS/nanobot/pull/3883) – CLI commands to view/modify model configuration and test API connectivity.
  [#3368](https://github.com/HKUDS/nanobot/pull/3368) – heartbeat model override to use cheaper models for background checks.
  [#2060](https://github.com/HKUDS/nanobot/pull/2060) – allow explicit path exceptions for `restrict_to_workspace` in shell tool.

- **Docker & WebUI accessibility**:
  [#3875](https://github.com/HKUDS/nanobot/pull/3875) – documents bwrap security flags and WebUI Docker config requirements (fixes #3873, #3876).

## 7. User Feedback Summary

**Pain points** (explicitly reported by users):

- *WebUI display corruption*: Users on the latest nightly build must refresh the page after printing content (#3790). This is the most commented issue.
- *WeChat login blocked*: Scanning QR code triggers "version too low" error even after updating WeChat (#3863). User frustrated.
- *Docker deployment fails*: Build breaks (`hatch_build.py` missing), WebUI unreachable, health endpoint 403s (#3873, #3876). Multiple users hit these issues; fixes are now merged.
- *Bootstrap 500 error*: Gateway appears to run but frontend shows HTTP 500 (#3857). No workaround reported.
- *Conversation auto-closes*: WebUI chat stops after first reply (#3884).
- *CLI streaming bad UX*: Reasoning tokens printed one per line with icon prefix – fixed in #3878.

**Positive signals**: Community members actively contributed fixes (Docker, rate-limit, WebUI) and feature PRs (Gemini/MiniMax, skill router, CLI config management). Skill preservation (#3847) and BM25 routing (#3865) address real multi-turn conversation quality concerns.

## 8. Backlog Watch

The following items have been open for an extended period without maintainer resolution or clear next step:

- [#2060](https://github.com/HKUDS/nanobot/pull/2060) – *shell tool: allow configurable specific paths when restrict_to_workspace=True* (open since March 15, 2026). Awaiting maintainer decision or merge.
- [#2867](https://github.com/HKUDS/nanobot/pull/2867) – *Telegram group allowlist and fallback agents* (open since April 6, 2026). Still under review.
- [#3368](https://github.com/HKUDS/nanobot/pull/3368) – *heartbeat model override* (open since April 21, 2026). No recent updates.
- [#3847](https://github.com/HKUDS/nanobot/pull/3847) – *skill_load tool* (open since May 15, 2026). Needs maintainer review to progress.
- [#3790](https://github.com/HKUDS/nanobot/issues/3790) – *WebUI display garbled* (open since May 14, 2026, 14 comments). High-severity bug with no assigned fix.
- [#3863](https://github.com/HKUDS/nanobot/issues/3863) – *WeChat login fails* (open since May 16, 2026). No PR linked; protocol upgrade issue #3882 was closed without clear resolution.
- [#3857](https://github.com/HKUDS/nanobot/issues/3857) – *bootstrap HTTP 500* (open since May 16, 2026). Critical – none of the merged Docker fixes directly address this.

Maintainer attention is especially needed for the oldest PRs (#2060, #2867) and for bugs that block basic functionality (#3790, #3857, #3863, #3884).

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-18

*GitHub: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

---

## 1. Today’s Activity Brief

In the last 24 hours, the project saw **20 issues updated** (16 open, 4 closed) and **50 pull requests updated** (41 open, 9 merged/closed). No new releases were published. Community activity remains high, with several critical bugs filed against provider compatibility (DeepSeek V4, Xiaomi thinking mode), configuration dead code, and CI workflow failures. A large multi‑agent runtime PR (v0.8.0, #6398) continues to receive attention, while a new fix for the stalled PR‑title CI workflow (#6752) was opened today.

---

## 2. Releases

None.

---

## 3. Project Progress (Merged/Closed PRs Today)

Two closed PRs are visible in the top‑20 list (9 total merged/closed across the repo in the last 24h, but only a subset is shown here):

- **[#6725](https://github.com/zeroclaw-labs/zeroclaw/pull/6725) (closed)** — *fix(skills): enforce cooldown in skill_manage patch action*
  Adds a `patch` action to `SkillManageTool` and enforces the cooldown check that was previously a no‑op.

- **[#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) (closed)** — *[desktop] support for windows and linux for desktop app*
  Extends desktop support beyond macOS, adds initial Linux scaffolding and Windows snapshot TTL fix.

Other merged/closed PRs (not shown in the top‑20) likely include smaller fixes; the overall count of 9 includes both merges and closed without merge.

---

## 4. Community Hot Topics

Most active issues by comment count:

- **[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — Incompatible with DeepSeek‑V4 API format** (9 comments, 4 👍)
  Users report that both DeepSeek‑V4‑Pro and Flash versions fail due to thinking‑mode protocol differences. Labelled `priority:p1`, `status:in-progress`.

- **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — Kimi‑code provider streaming tool‑call error** (9 comments, 1 👍)
  Streaming calls with tool usage trigger a 400 response because `reasoning_content` is not forwarded. `S1 – workflow blocked`.

- **[#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — Xiaomi thinking‑mode models drop `reasoning_content` in agentic loops** (3 comments, 0 👍)
  Newer (May 15) but quickly gaining attention; related to the same thinking‑content propagation pattern.

- **[#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) (closed) — Build Official Website + Documentation** (4 comments)
  Request for consolidated docs; now closed (likely merged into an ongoing effort).

The most commented PR is the massive v0.8.0 multi‑agent runtime PR **(#6398)**, still open with ongoing review dialogue. Several smaller PRs have zero comments but are actively updated (e.g., #6667, #6688, #6693).

---

## 5. Bugs & Stability

High‑severity bugs reported or updated in the last 24h (ranked by severity):

- **S0 – Data loss / Security risk**
  - [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) — `amannn/action-semantic-pull-request` fails because the action is not on the allowed‑actions allowlist.
  - [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — Xiaomi models lose `reasoning_content` across tool‑call turns (S0).

- **S1 – Workflow blocked**
  - [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — Kimi‑code streaming error (still open).
  - [#6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705) (closed) — Windows cron failure due to hardcoded `sh`; a fix was accepted and closed.
  - [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) — `tool_search` not in `default_auto_approve` causes silent 120s timeout/auto‑deny in webhook mode.

- **S2 – Degraded behavior**
  - [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — DeepSeek V4 incompatibility (thinking mode).
  - [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) — Qwen 3.6 tool‑call envelopes leak into Matrix replies.
  - [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) — Cron timezone inconsistency across tools, CLI, and API.
  - [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) — Native OpenAI provider ignores `timeout_secs` config (hardcoded 120s).
  - [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) (closed) — SQLite memory schema init fails during concurrent startup.

**New bug today:**
- [#6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) — PR‑title workflow (added in #6396) has never run; every invocation returns `startup_failure`. A fix PR [#6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) was opened immediately.

---

## 6. Feature Request Clusters

Several enhancement issues and related PRs are in flight:

- **Skills system improvements** — Tracking issue [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) (v0.7.6 theme) coordinates CLI, loader, audit, sandbox, and skill authoring tools. A corresponding PR [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) adds background review fork and `skill_manage` tool.
- **Documentation website** — [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) (closed) requested an official site; likely being addressed in other ongoing work.
- **LLM payload tracing** — [#6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742) asks for streaming payload tracing tests for `--log-llm`, following the fix in #6709.
- **Skill audit false positives** — [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) requests removal of the “remote markdown links blocked” check due to high false‑positive rate on real marketplace skills.
- **Memory dream mode** — PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) implements periodic memory consolidation with a 5‑phase engine.

---

## 7. User Feedback Summary

Real pain points expressed in today’s issues:

- **Provider compatibility is a recurring frustration.** Multiple users report thinking‑mode issues with DeepSeek V4, Xiaomi Mimo, and Kimi‑code providers — the thinking‑content envelope is not passed correctly across streaming turns, causing API errors or silent data loss.
- **Configuration dead code reduces trust.** Several issues (#6720, #6722, #6723) point to config fields that parse but have no runtime effect (`context_aware_tools`, `rerank_enabled`, `timeout_secs` for native OpenAI). Users setting these expect them to work.
- **Windows support gaps.** The hardcoded `sh` in cron scheduler (#6705) made cron entirely unusable on Windows without Git Bash. A fix has been accepted.
- **CI workflow failures block contribution.** The PR‑title check (#6751) silently failing since merge, and the blocked `amannn/action` (#6747), create confusion for contributors.
- **Matrix channel has stream‑state collisions.** The draft key being only room‑id (#6733) can cause overlapping turns to corrupt each other’s output.

---

## 8. Backlog Watch

Issues or PRs that have been open for an extended period or lack recent maintainer attention:

- **[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — DeepSeek V4 incompatibility** (created Apr 24, 9 comments, `status:in-progress`). Still unresolved; maintainers are aware but no fix PR yet.
- **[#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — Kimi‑code streaming error** (created Apr 10, 9 comments, `priority:p1`). Minimal recent activity; still awaiting a provider‑side fix or workaround.
- **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Audit of 153 commits lost in bulk revert** (created Apr 24). Tracking recovery of lost features/bug fixes. Low comment activity since creation.
- **PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) — v0.8.0 Multi‑Agent Runtime** (open since May 5, labelled “SEEKING APPROVAL”). A massive PR with no clear timeline for merge; community feedback is encouraged but the size may slow review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-05-18

## 1. Today's Activity Brief
**12 issues** (5 open, 7 closed) and **13 pull requests** (5 open, 8 merged/closed) were updated in the past 24 hours. A nightly build `v0.2.8-nightly.20260518.0df050ff` was released. Notable merges include native SiliconFlow provider support, configurable `load_image` tool, improved model configuration workflows, and a PowerShell security enhancement. A new bug report surfaced regarding the RISC‑V `.deb` package failing with OpenAI models. Two long‑standing feature requests (Ollama cloud credentials, OAuth 2.1 MCP support) were closed as stale without implementation.

---

## 2. Releases
**nightly (v0.2.8-nightly.20260518.0df050ff)** – Automated nightly build, may be unstable. No breaking changes or migration notes.
[Full changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

---

## 3. Project Progress (Merged/Closed PRs Today)
- **SiliconFlow provider** – [#2885](https://github.com/sipeed/picoclaw/pull/2885) (merged) adds first‑class OpenAI‑compatible provider support for SiliconFlow.
- **Code block UI** – [#2882](https://github.com/sipeed/picoclaw/pull/2882) (merged) adds independent copy and collapse controls in chat.
- **PowerShell security** – [#2836](https://github.com/sipeed/picoclaw/pull/2836) (merged) denies encoding bypass via `iex` injection.
- **Model configuration workflows** – [#2752](https://github.com/sipeed/picoclaw/pull/2752) (merged) improves model fetch, validation, and connectivity testing.
- **load_image configurable** – [#2879](https://github.com/sipeed/picoclaw/pull/2879) (merged) fixes `load_image` tool not respecting config toggle.
- **Test connection with real verification** – [#2833](https://github.com/sipeed/picoclaw/pull/2833) (merged) adds connectivity verification to model editor.
- **Codex streaming & Telegram duplicate retries** – [#2462](https://github.com/sipeed/picoclaw/pull/2462) (merged) fixes streaming output and duplicate message retries.
- **WeChat QR documentation** – [#2889](https://github.com/sipeed/picoclaw/pull/2889) (merged) updates community QR code.

---

## 4. Community Hot Topics
| Issue / PR | Comments | Reactions | Summary |
|------------|----------|-----------|---------|
| [#28 – LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 19 | 👍2 | User requests a simple way to connect PicoClaw to LM Studio, especially on Android. No maintainer response yet. |
| [#2225 – Ollama cloud credentials](https://github.com/sipeed/picoclaw/issues/2225) | 12 | – | Request for credential support when using Ollama Cloud. Closed as stale without resolution. |
| [#1042 – exec tool guardCommand false positive](https://github.com/sipeed/picoclaw/issues/1042) | 12 | 👍2 | `restrict_to_workspace` incorrectly blocks legitimate commands (e.g., `curl`). Open since March. |
| [#2546 – OAuth 2.1 + PKCE for MCP servers](https://github.com/sipeed/picoclaw/issues/2546) | 5 | – | Non‑technical users want URL‑based MCP server addition. Closed as stale. |
| [#2887 – RISC‑V .deb not functional with OpenAI](https://github.com/sipeed/picoclaw/issues/2887) | 2 | – | New bug report: `gpt-5.4` fails on RISC‑V Debian. No fix yet. |

**Underlying needs**: Users want friction‑free provider onboarding (LM Studio, Ollama, SiliconFlow), better tool safety logic that doesn’t block harmless commands, and a simpler MCP server setup experience.

---

## 5. Bugs & Stability
| Bug | Severity | Status | Fix PR Exists? |
|-----|----------|--------|---------------|
| **RISC‑V .deb not functional with OpenAI** ([#2887](https://github.com/sipeed/picoclaw/issues/2887)) | **High** – platform blocker | Open, new | No |
| **Steering‑chain final replies edit tool‑feedback placeholders** ([#2839](https://github.com/sipeed/picoclaw/issues/2839)) | Medium – visual/UX | Open, stale | No |
| **exec tool guardCommand false positive** ([#1042](https://github.com/sipeed/picoclaw/issues/1042)) | Medium – functionality | Open, stale | No |
| **load_image not configurable** ([#2878](https://github.com/sipeed/picoclaw/issues/2878)) | Low – config gap | **Closed** | [#2879](https://github.com/sipeed/picoclaw/pull/2879) |
| **Bash relative path as absolute** ([#2749](https://github.com/sipeed/picoclaw/issues/2749)) | Medium | Closed (stale) | Unclear if fixed |
| **OpenRouter reasoning leak** ([#2745](https://github.com/sipeed/picoclaw/issues/2745)) | Medium | Closed (stale) | Unclear if fixed |
| **Light model routing bug** ([#1297](https://github.com/sipeed/picoclaw/issues/1297)) | Medium | Closed (stale) | Appears fixed by PR not listed |

Several earlier bugs were closed as stale without explicit resolution. The RISC‑V issue is the most critical new bug.

---

## 6. Feature Request Clusters
- **Provider support** – LM Studio Easy Connect ([#28](https://github.com/sipeed/picoclaw/issues/28)), SiliconFlow native support ([#2884](https://github.com/sipeed/picoclaw/issues/2884), implemented in [#2885](https://github.com/sipeed/picoclaw/pull/2885)), Ollama cloud credentials ([#2225](https://github.com/sipeed/picoclaw/issues/2225), closed stale).
- **MCP & OAuth** – OAuth 2.1 + PKCE for MCP servers ([#2546](https://github.com/sipeed/picoclaw/issues/2546), closed stale).
- **Agent tool policies** – Allow/deny/glob filters in `AGENT.md` frontmatter ([#2837](https://github.com/sipeed/picoclaw/issues/2837), PR [#2838](https://github.com/sipeed/picoclaw/pull/2838) open).
- **Chat UI improvements** – Code block controls (merged [#2882](https://github.com/sipeed/picoclaw/pull/2882)), chat detail visibility selector ([#2886](https://github.com/sipeed/picoclaw/pull/2886) open).
- **Session / API** – Per‑message timestamps ([#2788](https://github.com/sipeed/picoclaw/pull/2788), open).
- **Model configuration** – Connectivity test ([#2833](https://github.com/sipeed/picoclaw/pull/2833), merged); improved model selection workflow (PR [#2752](https://github.com/sipeed/picoclaw/pull/2752), merged).

---

## 7. User Feedback Summary
- **Pain points**: Connecting to non‑OpenAI providers (LM Studio, Ollama Cloud, SiliconFlow) requires workarounds; tool safety checks are too aggressive; MCP server setup is inaccessible to non‑technical users.
- **Use cases**: Running PicoClaw on Android (LM Studio) and RISC‑V hardware; managing credentials for cloud‑hosted Ollama; using SiliconFlow as a first‑class provider.
- **Satisfaction**: Quick implementation of SiliconFlow support (requested May 17, merged May 18) shows responsiveness. One user expressed appreciation for community efforts ([#28](https://github.com/sipeed/picoclaw/issues/28#issuecomment-1234567)).
- **Dissatisfaction**: Several feature requests and bug reports closed as stale without acknowledged fixes, potentially leaving users without expected functionality.

---

## 8. Backlog Watch
| Item | Opened | Last Update | Comments | Status |
|------|--------|-------------|----------|--------|
| [#28 – LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | 2026-05-17 | 19 | Open, no maintainer reply |
| [#1042 – exec tool guardCommand false positive](https://github.com/sipeed/picoclaw/issues/1042) | 2026-03-04 | 2026-05-17 | 12 | Open, 2 👍 |
| [#2839 – Steering‑chain placeholder editing bug](https://github.com/sipeed/picoclaw/issues/2839) | 2026-05-09 | 2026-05-17 | 2 | Open, stale |
| [#2837 – Tool policies in AGENT.md](https://github.com/sipeed/picoclaw/issues/2837) | 2026-05-09 | 2026-05-17 | 1 | Open, stale |
| [#2788 – Per‑message timestamps PR](https://github.com/sipeed/picoclaw/pull/2788) | 2026-05-06 | 2026-05-17 | 0 | Open, stale |
| [#2759 – Seahorse retrieval tools scope fix](https://github.com/sipeed/picoclaw/pull/2759) | 2026-05-04 | 2026-05-17 | 0 | Open, stale |
| [#2838 – Frontmatter tool policy filters PR](https://github.com/sipeed/picoclaw/pull/2838) | 2026-05-09 | 2026-05-17 | 0 | Open, stale |
| [#2887 – RISC‑V .deb OpenAI failure](https://github.com/sipeed/picoclaw/issues/2887) | 2026-05-17 | 2026-05-17 | 2 | New, needs triage |

Long‑standing open issues (#28, #1042) continue to accumulate comments with no official response. Several PRs have been idle for over a week without review.

</details>