# OpenClaw Ecosystem Digest 2026-06-03

> Issues: 451 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-03 02:54 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-03

## 1. Today's Activity Brief

Activity remains high with **451 issues updated** (274 open, 177 closed) and **500 pull requests updated** (386 open, 114 merged/closed) in the last 24 hours. No new releases were published. The community continues to report regressions around session state, message delivery, and model fallback chains, while maintainers are actively landing fixes for Telegram performance, Codex OAuth cleanup, and tool schema hardening. Notable closed PRs today include suppression of internal agent failure traces (#89125) and a targeted Telegram reset-boundary performance improvement (#88963).

## 2. Releases

*None.*

No new releases were published today. The latest available tags remain the 2026.5.28 series (GHCR image) and earlier.

## 3. Project Progress

**Merged/closed PRs (114 total)** — highlights from the top 30 by comment activity:

- **#89125** (closed): *Suppress internal agent failure traces before channel delivery* — moves trace-line stripping into the shared sanitizer to prevent internal tool-failure payloads from being visible in Discord and other channels.
- **#88963** (closed): *perf(telegram): avoid broad reset-boundary scan* — replaces full materialization of all previous cached messages with a targeted helper for `/new` and `/reset` detection.
- **#89554** (closed) and **#89557** (closed): both filed in error as forks of the same `continue_delegate` issue — no code changes merged.

Other notable closed issues (not PRs) from the issue list:
- **#87646** (closed): Feishu channel message dispatch regression fixed after v2026.5.27.
- **#87436** (closed): Codex harness session-route state recreation after `doctor --fix` — a fix was applied.
- **#84252** (closed): OAuth sidecar partial repair issue — resolved.

Several open PRs are actively awaiting review or proof, including the high-profile Codex turn-watch fix (#89290), Telegram interleaved progress lane (#87072), and gateway hot-mode reload (#89517).

## 4. Community Hot Topics

The most commented issues (all open, with 10–21 comments) reflect user frustration with regressions and session reliability:

- **#52875** (21 comments) — `Session_send` gives "no session found" after upgrade. Author reports that main agent loses ability to contact other agents.
  https://github.com/openclaw/openclaw/issues/52875

- **#88838** (17 comments) — Tracking the session/transcript SQLite migration via a branch-by-abstraction seam. This is a maintainer-led planning issue, but community members are weighing in on migration risk.
  https://github.com/openclaw/openclaw/issues/88838

- **#63918** (17 comments) — Cron `agentTurn` sends `thinking=none` to OpenAI models that only accept `minimal`, causing 400 errors.
  https://github.com/openclaw/openclaw/issues/63918

- **#67035** (14 comments) — Windows chat UI regression: input swallowed, streamed replies invisible until refresh. Users confirm this is not a simple slow-model issue.
  https://github.com/openclaw/openclaw/issues/67035

- **#39604** (13 comments, 9 👍) — Request for `tools.web.fetch.allowPrivateNetwork` to enable private network access via `web_fetch`. High community support.
  https://github.com/openclaw/openclaw/issues/39604

Underlying needs: users are demanding stable session routing, predictable model fallback behavior, and UI reliability on Windows. The SQLite migration discussion indicates the community is aware of a major architectural change in progress.

## 5. Bugs & Stability

**Newly updated bugs today (P1/P2, regressions, stability):**

| Issue | Priority | Summary | Fix PR? |
|-------|----------|---------|---------|
| #89525 | P2 | Telegram `/compact` slash command silently drops after v2026.5.18 upgrade | No linked fix |
| #89549 | P2 | `sessions_spawn` child runs fail with HTTP 401 missing `api.responses.write` | No linked fix |
| #89374 | P1 | Timeout compaction reports success but leaves Codex channel session unrecoverable | No linked fix |
| #88909 | P3 | NSUserDefaults warning on macOS (own bundle ID as suite name) | No linked fix |
| #85103 | (unlabeled) | Model fallback chain not triggered on provider-wide quota exhaustion; `EmbeddedAttemptSessionTakeoverError` blocks fallback | No linked fix |
| #81567 | (unlabeled) | GPT-4o agent sessions exit after single text response instead of continuing tool-use loop | No linked fix |
| #86090 | P1 | `runHeartbeatOnce` returns `{status: "ran"}` on idle agent without executing a model turn — phantom run | No linked fix |

Of these, #89549 and #89374 are tagged `clawsweeper:needs-maintainer-review` and have open linked PRs? Not directly. #89525 is a regression in Telegram. No bug in this list has a confirmed open fix PR as of this writing.

**Widely impacting regressions (still open):**
- #88312 (P1, Codex turn-completion stall regression re-emerging)
- #86519 (P1, Telegram duplicate replies after 5.20)
- #86047 (P1, Codex approval stalls in Nextcloud Talk)
- #80715 (P1, Slack replies silently dropped)

These have been open for days to weeks and continue to affect users across multiple platforms.

## 6. Feature Request Clusters

Several feature requests saw activity today, grouped by domain:

**Network/security controls:**
- #39604 (open, 9 👍) — `tools.web.fetch.allowPrivateNetwork` to opt into private network access.
- #60841 (open) — `toolsAllow` cannot re-expose core tools in embedded cron runs; security implications.

**Platform support:**
- #86169 (closed) — Xiaomi MiMo Token Plan provider integration (already closed, likely implemented or rejected).
- #78172 (open PR) — `skipEmojiSymbols` option for TTS.

**UI/UX improvements:**
- #84216 (open, 3 👍) — Dropdown to minimise recent sessions in the left menu.
- #77036? Not present, but #84216 is active.

**Plugin/extension hooks:**
- #81061 (open) — `before_route_inbound_message` hook for pre-routing interception.
- #76159 (open) — Per-job `acceptSilentStop` flag for cron jobs that intentionally produce no output.

**Codex-specific:**
- #89290 (open PR) — Keep Codex waiting after raw reasoning progress to prevent false timeouts.
- #89491 (open PR) — Harden Codex OAuth callback cleanup.

No strong cluster beyond network/security and platform support.

## 7. User Feedback Summary

**Pain points (reported today):**
- Telegram `/compact` command broken after upgrade (#89525).
- Child session spawns failing with 401 auth scope errors (#89549).
- Codex timeout compaction leaves sessions unrecoverable (#89374).
- Model fallback chain not triggered when provider hits rate limits (#85103).
- macOS NSUserDefaults warning annoys users (#88909).

**Satisfaction signals:**
- Several users thanked maintainers for rapid fixes in closed PRs (e.g., #89125, #88963).
- The Codex turn-watch fix (#89290) and Telegram interleaved progress lane (#87072) are positively anticipated.

**Recurring dissatisfaction:**
- Regressions after minor version upgrades remain the most common complaint. The Windows chat UI regression (#67035) and Slack silent drops (#80715) are particularly demoralising for users who rely on those channels.

## 8. Backlog Watch

**Long-unanswered important issues (maintainer attention needed):**

| Issue | Created | Priority | Tags | Stalled Since |
|-------|---------|----------|------|---------------|
| #52875 | 2026-03-23 | P2 | stale, regression | ~Jun 2 (last update) |
| #63918 | 2026-04-09 | P2 | no-new-fix-pr | Needs product decision |
| #67035 | 2026-04-15 | P1 | needs-product-decision, needs-live-repro | ~Jun 2 |
| #39604 | 2026-03-08 | P2 | needs-security-review | No fix PR linked |
| #55334 | 2026-03-26 | P1 | needs-product-decision, source-repro | ~Jun 2 |
| #52249 | 2026-03-22 | P1 | needs-product-decision | ~Jun 2 |
| #41199 | 2026-03-09 | P1 | needs-maintainer-review | No fix PR linked |

These issues (agent-to-agent communication, unbounded sessions.json growth, Windows UI regression, session_send no session) have been open for 2–3 months and are still awaiting product decisions or maintainer review. The SQLite migration (#88838) may eventually address some session-state problems but is still in early tracking phase.

**Old open PRs:**
- **#58373** (2026-03-31) — `fix(agents): bootstrap non-main models.json` — waiting on author.
- **#78172** (2026-05-06) — `feat(tts): add skipEmojiSymbols` — needs real-behavior proof.

These represent low-risk improvements that have languished due to proof requirements or author inaction.

---

*Digest generated from openclaw/openclaw GitHub data as of 2026-06-03T?Z.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-03

## 1. Daily Cross-Project Overview

Today saw **high but uneven activity** across the four tracked projects. OpenClaw led with **451 issues and 500 PRs updated**, though no new release was published. ZeroClaw released **v0.8.0-beta-2**, its largest update since v0.7.5, while merging 48 PRs and closing 33 issues. NanoBot and PicoClaw showed moderate activity, with 25 and 14 PRs updated respectively, and PicoClaw published a nightly build. Across all projects, bug fixes and stability improvements dominated the day’s work, with channel-specific regressions (Telegram, WhatsApp, WeChat, Email) being a recurring theme.

## 2. Activity Comparison

| Project    | Issues Updated | PRs Updated | Release Today           | Activity Note |
|------------|----------------|-------------|-------------------------|---------------|
| OpenClaw   | 451 (274 open, 177 closed) | 500 (386 open, 114 merged/closed) | None                    | Highest volume; heavy focus on regressions and session reliability |
| NanoBot    | 9 (6 open, 3 closed)      | 25 (8 open, 17 merged/closed)    | None                    | Moderate activity; bug fixes and channel enhancements (email, QQ) |
| ZeroClaw   | 33 closed (17 open remain) | 48 merged/closed                  | **v0.8.0-beta-2**       | Major release with new TUI and multi-agent runtime; many bug fixes |
| PicoClaw   | 3 (2 open, 1 closed)      | 14 (8 open, 6 merged/closed)      | Nightly build            | Light activity; focus on WeChat channel fix and documentation |

## 3. OpenClaw Compared With Peers

**Activity volume**: OpenClaw’s issue and PR counts (451/500) dwarf those of NanoBot (9/25), ZeroClaw (33/48), and PicoClaw (3/14). This reflects its role as the core reference implementation with the largest user base and maintenance surface.

**Technical focus**: OpenClaw is grappling with fundamental session state regressions, model fallback chains, and major architectural changes (SQLite migration, Codex turn-watch). Peers are more focused on specific channel integrations (NanoBot’s email/QQ, PicoClaw’s WeChat), lightweight deployments, and skill tool improvements.

**Community surface area**: OpenClaw’s community hot topics include long-standing, high-engagement issues (#52875 with 21 comments) and widely impacting regressions across Telegram, Slack, Codex, and Windows UI. Peer communities are smaller but more tightly scoped; users report frustrations with installation friction (ZeroClaw #6123, NanoBot #4158) or specific provider incompatibilities (PicoClaw #2404, NanoBot #4167).

## 4. Shared Technical Focus Areas

- **Model fallback and provider error handling**: OpenClaw (#85103, fallback not triggered on quota exhaustion), ZeroClaw (#5962, Ollama provider tool failures), PicoClaw (#2991, retry transient LLM errors; #2989, Zhipu error 1210 fix). All four projects have open or recently fixed issues around provider failures and fallback logic.

- **Channel-specific reliability**: Telegram regressions in OpenClaw (#89525, #86519), WhatsApp protocol bump in ZeroClaw (#6246), WeChat image crash in PicoClaw (#2943/#2989), email progress messages in NanoBot (#4165). Multi-platform channel stability is a universal concern.

- **Configuration and onboarding friction**: OpenClaw’s SQLite migration tracking (#88838), ZeroClaw’s fresh-install default_model bug (#6123), NanoBot’s pip installation under uv (#4158), PicoClaw’s missing streaming HTTP config (#2404). Users across projects struggle with configuration nuances and documentation gaps.

- **Security and tool schema hardening**: OpenClaw (#89125, suppress internal agent failure traces), ZeroClaw (#5952 skill audit scope, #5981 allow_scripts pass-through), NanoBot (#4123 SSRF guard for MCP URLs). All projects are shipping safety improvements.

- **Agent-to-agent and subagent tool access**: OpenClaw (#52875, agent-to-agent communication failure), NanoBot (#4166, subagent MCP tool access), ZeroClaw (#5155, delegate agents ignoring prompt_injection_mode). An emerging need across projects.

## 5. Differentiation Analysis

- **OpenClaw** remains the most feature-complete reference system with the broadest channel support, but also carries the highest regression burden. Its community discussion centers on core infrastructure (session persistence, SQLite migration, Codex integration).

- **NanoBot** targets lightweight, modular deployments with a focus on MCP services and channel-specific enhancements (email attachments, QQ via Napcat). Its smaller issue volume and rapid fix PRs suggest a more streamlined maintenance process.

- **ZeroClaw** differentiates through its new terminal UI (`zerocode`), multi-agent runtime, and extensive skill/sandbox system. Its v0.8.0-beta-2 release indicates a pivot toward power users who need isolated skill execution and advanced tooling (skill audit, versioned docs).

- **PicoClaw** is the most specialized, with a Chinese-ecosystem focus (WeChat, Zhipu API, Docker Compose) and nightly builds. Its community is small but responsive, with external contributors actively fixing bugs.

## 6. Community Activity Notes

- **Tier 1 (Very High)**: OpenClaw – 451 issues, 500 PRs, no release. Community is large but frustrated by regressions; maintainers are actively merging fixes but many high-impact bugs remain open.
- **Tier 2 (High)**: ZeroClaw – 33 issues closed, 48 PRs merged, major release. Significant forward momentum with quick closure of S1 bugs.
- **Tier 3 (Moderate)**: NanoBot – 9 issues, 25 PRs. Steady progress on channel and stability improvements.
- **Tier 4 (Low)**: PicoClaw – 3 issues, 14 PRs, nightly build. Small but dedicated contributor base; most bugs have associated fix PRs.

## 7. Evidence-Backed Observations

1. **Model fallback and provider error handling is the single most recurring technical pain point** across all projects, with OpenClaw’s #85103, ZeroClaw’s #5962, PicoClaw’s #2991/#2989, and NanoBot’s #4167 all addressing or being worked on. No project appears to have a fully resilient solution yet.

2. **Channel-specific regressions are being fixed rapidly but often silently** – OpenClaw merged Telegram performance (#88963) and suppression of internal traces (#89125); ZeroClaw fixed WhatsApp protocol bump (#6246); PicoClaw fixed WeChat Zhipu error (#2989). These fixes are localized rather than systemic.

3. **Fresh-install configuration friction is a cross-project user experience gap** – ZeroClaw (#6123), NanoBot (#4158), and PicoClaw (#2404) all received complaints about setup difficulties. Only ZeroClaw provided documentation updates (PR #6057) in response.

4. **Security hardening (tool schema sanitization, SSRF guards, approval bypass fixes) is a shared priority** across OpenClaw, ZeroClaw, and NanoBot, with multiple PRs merged today in each project. This suggests a coordinated industry focus on safety in agent tool execution.

5. **Agent-to-agent communication and subagent tool access requests are rising** – three projects (OpenClaw #52875, NanoBot #4166, ZeroClaw #5155) have open or recently active issues on this topic, but none have a merged solution yet. This is an emerging requirement without a clear cross-project pattern of resolution.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-06-03

### 1. Today's Activity Brief
9 issues were updated in the last 24 hours (6 open, 3 closed), and 25 pull requests were updated (8 open, 17 merged/closed). No new releases were published. Activity is focused on fixing stability bugs (MCP sessions, pip installation under `uv`, read_file offload loops) and shipping channel improvements (email attachments, Napcat QQ). The community reported compatibility issues with OpenAI-compatible image providers and requested subagent access to MCP services.

### 2. Releases
No new releases today.

### 3. Project Progress
17 pull requests were merged or closed today. Notable advances include:

- **Email channel enhancements** — Multiple PRs added file attachment support (`#4162` `#4160`), fixed progress messages causing empty emails (`#4165` open).
- **Napcat (QQ) channel** — Merged backport of the OneBot v11 Forward WebSocket channel (`#4146`).
- **Lightweight RAG for memory retrieval** — Merged local embedding–based retrieval (`#4109`).
- **WebUI stability** — Added startup fetch timeouts (`#4157`), fixed refresh location routing (`#4150`), assorted sidebar sorting and fallback clipboard copy (`#4151` `#4149`).
- **Dream refactor** — Simplified the Dream flow to use a single cron + `process_direct()` (`#3990` closed).
- **WebUI gateway split** — Extracted HTTP routing from `WebSocketChannel` (`#4115` closed).
- **Bug fixes** — `read_file` offload loop correction (`#4155`), session `last_consolidated` recovery (`#4169` open), pip installation fallback under `uv` (`#4164` open).
- **SSRF guard for MCP URLs** — Validate SSE/streamable HTTP URLs before probe (`#4123` open).
- **Cloud platform deployment layer** — New `deploy/cloud/` directory for HuggingFace Spaces & ModelScope (`#4139` open).

### 4. Community Hot Topics
- **[#4167] Image generation fails with OpenAI-compatible APIs that don't support `response_format`** (2 comments)
  User reports failure with Agnes AI. No fix PR yet.
  https://github.com/HKUDS/nanobot/issues/4167

- **[#4158] WebUI CLI App pip installs under `uv tool`** (1 comment)
  `CliAppManager` fails because `pip` is missing. Two fix PRs exist: `#4159` (auto-fix, closed) and `#4164` (open, fallback to `uv pip`).
  https://github.com/HKUDS/nanobot/issues/4158

- **[#4142] Discussion: Optimization of cache-miss input tokens** (closed, 1 comment)
  User raises API cost concerns, particularly around DeepSeek v4 flash/pro.
  https://github.com/HKUDS/nanobot/issues/4142

### 5. Bugs & Stability
| Bug | Status | Severity | Notes |
|-----|--------|----------|-------|
| MCP server unreachable after random time (`#4168`) | Open | High | No fix in sight; user must restart NanoBot. |
| Image generation fails with `response_format` unsupported (`#4167`) | Open | Medium | Affects users of non-OpenAI APIs (e.g. Agnes AI). |
| WebUI CLI App pip install under `uv` (`#4158`) | Open | Medium | Fix proposed in `#4164` (open). |
| `read_file` cannot recover offloaded tool results (`#4153`) | Closed | Medium | Fixed by `#4155`. |
| MemoryStore duplicate cursors under concurrent writes (`#4081`) | Closed | Medium | Fixed. |
| Session `last_consolidated` out-of-range hides history (`#4066`) | Open (PR `#4169`) | High | Fix PR open, resets offset to 0. |

### 6. Feature Request Clusters
- **Custom image generation provider** — Issue `#4132` (open) requests support for user-configured providers like Agnes AI. Related to bug `#4167`.
- **Subagent MCP tool access** — Issue `#4166` (open) asks for an option to grant spawned subagents access to MCP server tools.
- **Fork-from-here for user messages** — PR `#4163` (open) adds the ability to fork from historical user messages in the WebUI.
- **Cloud platform deployment** — PR `#4139` (open) introduces a `deploy/cloud/` layer for HuggingFace Spaces and ModelScope.
- **Email progress message filtering** — PR `#4165` (open) skips progress messages to prevent empty emails.

### 7. User Feedback Summary
- **Pain points**: Image generation incompatibility with non-OpenAI APIs (Agnes AI), MCP server stability (random disconnections), installation friction under `uv tool`, missing subagent MCP tools.
- **Use cases**: Extending NanoBot with custom APIs, deploying on cloud platforms, using QQ as a channel, attaching files to emails.
- **Satisfaction**: The community is actively contributing fixes (e.g., `#4164`, `#4155`, `#4169`) and feature PRs, indicating engagement. However, unresolved MCP connectivity issues (`#4168`) and the long-standing Notion MCP problem (`#1168`) remain pain points.

### 8. Backlog Watch
- **[#1168] Nanobot 连接 Notion MCP失败！** (open since Feb 25)
  User reports a connection failure to Notion MCP despite correct API keys. No maintainer response on the issue.
  https://github.com/HKUDS/nanobot/issues/1168

- **[#4132] Support custom image generation provider** (open since June 1)
  Feature request that directly ties to the `response_format` bug; no maintainer assignment yet.
  https://github.com/HKUDS/nanobot/issues/4132

- **[#4168] cannot reach MCP server after random time** (new)
  No maintainer reply; may need investigation into session termination handling.
  https://github.com/HKUDS/nanobot/issues/4168

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-03

## 1. Today's Activity Brief

ZeroClaw released **v0.8.0-beta-2** today, its largest update since v0.7.5, headlined by a new terminal UI (`zerocode`) and a multi-agent runtime. In the last 24 hours, 33 issues were closed and 48 PRs were merged/closed, while 17 issues remain open and 2 PRs are still active. The project closed several high-severity bugs (shell sandbox blocking Python skills, web dashboard approval bypass, context compressor dropping `reasoning_content`, Bubblewrap failures on Fedora) and merged a significant documentation infrastructure PR (versioned docs with a version selector). Community discussion was highest around fresh‑install configuration issues, WhatsApp Web protocol bumps, and Ollama provider tool failures.

## 2. Releases

**v0.8.0-beta-2** — [Release page](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)

- **Headline feature**: `zerocode` — a Ratatui‑based terminal UI for running and operating agents without leaving the terminal.
- **Multi‑agent runtime** (new in this release line).
- No breaking changes or migration notes were published in the provided data; users upgrading from v0.7.5 should consult the full changelog.

## 3. Project Progress

The following notable PRs were merged or closed today (48 total):

- **Documentation**: Versioned documentation deployment and version selector (#7023) merged; Python skills quickstart covering config surface and sandbox patterns (#6057) merged; stale `strict-delta` references removed from CI docs (#6133); WhatsApp Web feature reinstall guidance clarified (#5075).
- **Skills & Tools**:
  - Skill whitelist filter and failure‑only LLM‑assisted skill improvement (#5420).
  - LLM reflection for Hermes‑style `SKILL.md` generation (#5874).
  - Restrict skill audit to structural checks only; delegate command‑content safety to shell policy (#5952).
  - Pass `allow_scripts` through `ReadSkillTool` to fix skills blocked despite `allow_scripts = true` (#5981).
  - Respect `timeout_secs` from `SKILL.toml` (`[[tools]]`) (#6054).
  - Stop scanning markdown content for high‑risk command patterns (#6071).
  - Emit positive log when skill tools are registered (#6072).
  - Normalize image markers across agent and tool history (#6183).
- **Providers**:
  - Sanitise llama.cpp Gemma 4 tool schemas (#5254).
  - Strip media markers (`[IMAGE:...]`) in auxiliary LLM calls (Telegram intent classifier, summarizer) (#6114).
- **Gateway & Observability**:
  - Enrich OpenTelemetry tool spans with `gen_ai.tool.*` semantic conventions (#6009).
  - Restore token accounting for webhook observer events (#6103, closed via linked fix).
  - No pairing code shown when gateway started on alternate port (#5266, closed).
- **Config & Channels**:
  - Add `allowed_path`/`allowed_paths` as serde aliases for `allowed_roots` (#6086).
  - Add IPv6 support and use `reqwest::Url` for web‑tool allowlists (#5450).
- **Cron**: Handle tool‑only outputs and degraded delivery (#6026).
- **Other**: Remove stale `lint-delta` command from CI scripts (#6133).

## 4. Community Hot Topics

Issues with the most comments today reveal recurring user needs and system integration pain points:

- **#6123** (18 comments, closed) — `[Bug]: default_model issue on fresh install`. A user on a fresh LXC container with a remote Ollama instance gets an error during onboarding. The issue was closed, but the high engagement suggests many users encounter similar configuration friction.
- **#5722** (6 comments, closed) — Default shell sandbox (`alpine:latest`, `--network none`, read‑only rootfs) blocks all realistic Python/R/Julia/Node skill patterns. Closed by documentation PR #6057, which clarified how to configure the sandbox for interpreted languages.
- **#6246** (6 comments, closed) — WhatsApp Web channel silently stops working after an April 2026 server‑side protocol bump. Closed after fix; affected users who rely on WhatsApp for agent interactions.
- **#5962** (6 comments, **open**) — Ollama provider call fails when tools are needed. Still open, marked `status:in‑progress`. Users with local Ollama instances cannot use tool‑enabled agents.
- **#6210** (5 comments, closed) — SkillForge auto‑integrator emits `source`, `owner`, etc. inside `[skill]` block, which are non‑schema fields and break strict validation. Closed after fix.
- **#5837** (4 comments, closed) — ACP‑protocol sessions lack cancellation support, unlike the gateway’s `POST /api/sessions/{id}/abort`. Feature merged.
- **#6128** (4 comments, closed) — `#[serde(deny_unknown_fields)]` added to `SkillMeta` to surface silent‑drop typos in `SKILL.toml`. Good first issue.
- **#6207** (4 comments, closed) — Web dashboard WebSocket bypasses `ApprovalManager`, so supervised tool approvals never appear in the UI. Critical security fix (S1 severity).
- **#6269** (4 comments, closed) — Context compressor drops `reasoning_content` from compressed assistant messages, breaking providers that require it (e.g. DeepSeek). Closed.
- **#6127** (4 comments, **open**) — Gateway‑side credential resolution still fails silently; hardening requested as follow‑up to #6099. Accepted but unmerged.

## 5. Bugs & Stability

High‑severity bugs closed today:

| Issue | Severity | Summary | Fix PR (if linked) |
|-------|----------|---------|--------------------|
| #5722 | S1 – workflow blocked | Default sandbox blocks Python skills | #6057 (docs) |
| #6207 | S1 – workflow blocked | Web dashboard bypasses ApprovalManager | Not specified in data, but closed |
| #6269 | S2 – degraded behaviour | Context compressor drops `reasoning_content` | Unknown, closed |
| #6878 | S2 – degraded behaviour | Bubblewrap fails on Fedora 43 due to missing `/lib64` | Not specified |
| #6516 | S1 – workflow blocked | ACP `cwd` change locks agent out of own skill files | Unknown, closed |
| #6681 | S1 – workflow blocked | `zeroclaw skills install clawhub:*` panics (reqwest::blocking inside async) | Unknown, closed |
| #5636 | S1 – broken functionality | `zai-cn` provider returns error 1214 after preemptive context trim | Unknown, closed |
| #5697 | S1 – workflow blocked | Skills blocked even when `allow_scripts = true` | #5981 |
| #5453 | S2 – degraded | WebSocket `/ws/chat` does not process `[IMAGE:]` markers | Unknown, closed |

Open bugs with active discussion:

- **#5962** (S1, open since Apr 21) — Ollama provider fails when tools are needed. Marked `in‑progress`.
- **#6120** (S1, open since Apr 26) — Onboarding chooses OpenAI Codex but prompts for OpenAI API key. Still open.
- **#6254** (S2, open since May 1) — WASM plugin install path and runtime scan path diverge; plugins invisible to agent.
- **#5155** (S1, open since Mar 29) — Delegate agents ignore `prompt_injection_mode` and always inject full skills.

## 6. Feature Request Clusters

Several feature requests and their associated PRs were active today:

- **ACP protocol extensions**: #6820 (closed as tracker) — diff/file‑proposal message types for TUI/web clients. Basic chat screen already implemented (#6824, closed as tracker).
- **Skills**: #4853 (open) — installing skills from `.well-known` URI; #5863 (closed) — document about skills wanted; #5956 (closed) — document skill audit scope decision.
- **Observability**: #6742 (closed) — streaming payload tracing tests for `--log-llm`; #6009 (merged) — OTel tool span enrichment.
- **Config ergonomics**: #6086 (merged) — `allowed_path`/`allowed_paths` aliases for `allowed_roots`.
- **Documentation**: #7023 (merged) — versioned docs deployment; #6057 (merged) — Python skills quickstart.

No new feature requests were opened today in the top‑30 list.

## 7. User Feedback Summary

Based on issues and PR comments, users express both satisfaction and frustration:

- **Pain points**:
  - Fresh installation configuration dialogue is brittle when Ollama runs on a separate machine (#6123).
  - The default sandbox is too restrictive for interpreted language skills; users had to dig into documentation to learn how to adjust it (#5722, #6057).
  - WhatsApp Web integration broke silently due to a server‑side protocol change, disrupting users who depend on that channel (#6246).
  - Users of local Ollama instances are blocked from using tools (#5962).
  - The web dashboard lacks tool‑approval UI, making supervised mode unusable in the browser (#6207).
  - `reasoning_content` loss in context compression breaks providers like DeepSeek (#6269).
- **Positive signals**:
  - Many bugs are being closed quickly (33 closed issues in 24h).
  - The new `zerocode` TUI and multi‑agent runtime are welcomed (v0.8.0-beta-2 release).
  - Users appreciate the expanded Python skills documentation (#6057) and versioned docs (#7023).

## 8. Backlog Watch

Issues and PRs that have been open for a while and may need maintainer attention:

| ID | Since | Status | Summary |
|----|-------|--------|---------|
| #5155 | 2026-03-29 | `status:accepted, status:in-progress` | Delegate agents ignore `prompt_injection_mode` (S1, open 66 days) |
| #4853 | 2026-03-27 | `status:accepted` | Feature: installing skills from `.well-known

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-03

**Generated from GitHub data at github.com/sipeed/picoclaw**
*Style: objective, data-driven. Links to issues and PRs are included.*

---

## 1. Today's Activity Brief

In the last 24 hours, 3 issues were updated (2 open, 1 closed) and 14 pull requests were updated (8 open, 6 merged/closed). A new nightly build (`v0.2.9-nightly.20260603.a502aa7f`) was published. The vast majority of PR activity came from three contributors — @chengzhichao-xydt, @yuxuan-7814, and @afjcjsbx — who together merged or closed 7 PRs, addressing multiple bugs and adding documentation. One notable closed PR was a fix for a Zhipu API error (issue #2943) related to image requests from the WeChat channel.

## 2. Releases

- **nightly (v0.2.9-nightly.20260603.a502aa7f)**
  Automated nightly build. May be unstable.
  Full changelog: [v0.2.9…main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
  No breaking changes or migration notes are documented.

## 3. Project Progress

Seven pull requests were merged or closed today:

- **#2994** (closed) – `docs(skill)`: self-describing Picoclaw agent skill, adds `workspace/skills/picoclaw-agent/SKILL.md` as an operational guide.
- **#2993** (closed) – Identical PR to #2994, also closed.
- **#2991** (closed) – `fix(agent)`: retry transient LLM HTTP errors using provider error classifier (fixes OpenRouter/OpenAI 500 errors).
- **#2989** (closed) – `fix(providers)`: add Zhipu API error code 1210 to format error patterns, fixing the WeChat image bug (#2943).
- **#2986** (closed) – `fix(tools)`: add `Stop()` to `SessionManager` to prevent goroutine leak in tests.
- **#2239** (closed) – `modify docker compose with privileged` (stale enhancement from April, closed today).

The main areas advanced were: **documentation**, **LLM error handling**, **provider-specific fixes**, and **resource leak prevention**.

## 4. Community Hot Topics

- **#2404 – [OPEN] [Feature] Add in config to send streaming HTTP request**
  *10 comments, 1 👍* | [Link](https://github.com/sipeed/picoclaw/issues/2404)
  The most active issue. User @OuSatoru requests a `"streaming": true` config option to enable streamed HTTP requests to LLM backends, mirroring the OpenAI Python client’s `stream=True`. The thread reveals that several users want this, but no maintainer response or associated PR has appeared yet (issue is marked stale).

- **#2984 – [OPEN] [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients**
  *0 comments, 1 👍* | [Link](https://github.com/sipeed/picoclaw/issues/2984)
  New request from @Brook-sys for a deterministic “turn finished” event in the WebSocket protocol. Currently clients see `typing.stop` but cannot distinguish intermediate stops from final completion. The need indicates growing external usage of the Pico Protocol for custom clients.

## 5. Bugs & Stability

Several bugs were fixed today via merged PRs, and a few remain open:

- **Critical bug (fixed)**: WeChat channel images to Zhipu GLM-5-Turbo triggered error 1210 without triggering fallback. Fixed in **#2989** (merged).
- **High (fixed)**: Session history display only showed last user message (#2796). Fixed in **#2990** (open, not yet merged).
- **High (fixed)**: `/context` command showed wrong compression threshold, ignoring `summarize_token_percent` config (#2968). Two open PRs address it: **#2988** (fixes the computation) and **#2985** (adds display of both thresholds).
- **Medium (fixed)**: `tool_calls` messages dropped during streaming sessions (#2958). Fixed in **#2987** (open).
- **Medium (fixed)**: New Web UI sessions receiving old messages after upgrade to v0.2.9 (#2972). Fixed in **#2992** (open).
- **Medium (fixed)**: `SessionManager` goroutine leak in tests. Fixed in **#2986** (merged).
- **Low (fixed)**: `temperature` parameter causing HTTP 400 for `claude-opus-4-7` models. PR #2948 still open.

All reported bugs from today’s issues have corresponding fix PRs, most already merged.

## 6. Feature Request Clusters

Two distinct feature requests are visible in today’s data:

- **Streaming HTTP requests** (#2404): a single request with 10 comments, no associated PR. Reflects desire to use PicoClaw with LLM backends that rely on streaming for real-time output.
- **WebSocket protocol turn completion signal** (#2984): a brand-new request (no comments, 1 reaction) from a developer building clients on the Pico Protocol.

No new clusters beyond these two. No PRs are directly linked to either request yet.

## 7. User Feedback Summary

- **Pain points**
  - Users of the WeChat channel encountered a hard crash when sending images to Zhipu GLM-5-Turbo (fixed today).
  - Web UI users could not see full conversation history (#2796), causing confusion.
  - The `/context` command misled users by ignoring the configured summarization threshold.
  - Tool calls were silently dropped during active streaming sessions.

- **Use cases**
  - @OuSatoru (issue #2404) wants streaming to match OpenAI client behaviour for interactive chat.
  - @Brook-sys (issue #2984) is building a custom WebSocket client and needs a reliable “turn finished” signal.

- **Satisfaction signals**
  - Multiple bug reports received quick fix PRs (often within hours).
  - PRs from external contributors (e.g., @yuxuan-7814, @chengzhichao-xydt) are being reviewed and merged promptly.
  - The documentation PR (#2994) was written by a contributor and accepted, indicating willingness to accept community-authored guides.

## 8. Backlog Watch

- **Stale issue with high engagement**: **#2404** (streaming config, created Apr 7, last updated Jun 2, 10 comments) remains open without a maintainer response or assigned milestone.
- **Stale PRs needing review**:
  - **#2951** – Fix native web search for OpenAI endpoints (Created May 26).
  - **#2948** – Skip temperature for claude-opus-4-7 (Created May 26).
  - **#2945** – Add picoclaw-tracer debug viewer (Created May 26).
  All three are marked stale and have no recent comments from maintainers.
- **No critical unanswered issues**: every bug filed in the past week has an associated fix PR either merged or open.

---

*End of digest for 2026-06-03.*

</details>