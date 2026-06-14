# OpenClaw Ecosystem Digest 2026-06-14

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-14 02:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-14

## 1. Today's Activity Brief

The OpenClaw repository saw high activity over the past 24 hours, with **500 issues** and **500 pull requests** updated. Of these, **400 issues remain open/active** and **100 were closed**; on the PR side, **302 are open** and **198 were merged or closed**. Two new beta releases were published (v2026.6.8-beta.1 and v2026.6.7-beta.1), primarily improving Telegram and WhatsApp channel delivery robustness and adding Slack, Telegram, and outbound media enhancements. The community continues to raise concerns around session-state corruption, silent failures, and memory leaks, with several P1/P0 bugs receiving active discussion and linked fix PRs.

---

## 2. Releases

Two beta releases were tagged:

- **v2026.6.8-beta.1** (2026.6.8)
  - Telegram and WhatsApp channel delivery made richer and less brittle.
  - Telegram now supports structured rich text (tables, lists, expandable blockquotes), prompt-preserving CLI backend delivery, retired native draft migration, and safer rich-media boundaries.
  - WhatsApp improvements also included (details in full release notes).

- **v2026.6.7-beta.1** (2026.6.7)
  - Channel delivery tightened across Slack, Telegram, outbound media, silent replies, progress drafts, and paged action results.
  - Slack: same-channel finals persist in transcripts.
  - Telegram: expandable blockquotes and spooling improvements.
  - Top-level `image` message-tool can now send attached media.

No migration notes or breaking changes were mentioned in the provided excerpts. Users on previous betas can upgrade via `npm install -g openclaw@latest` or `openclaw update`.

---

## 3. Project Progress

The 198 merged/closed PRs from the last 24 hours reflect sustained development velocity. Among the top‑30 highest‑comment PRs (all but one still open), the only closed one visible:

- **#92555** — *ci: gate stable releases on Windows companion assets* (merged/closed). Improves release process by requiring Windows node assets and digest verification before publishing.

Other notable open PRs that appear close to landing or under active review:

- **#92716** — Windows `schtasks /Run` restart fix for silently dropped scheduled tasks.
- **#90057** — Workboard operations UI polish (web‑ui, agents, XL size, P2).
- **#92682** — System encoding fallback on Windows for `read` tool (non‑UTF‑8 files).
- **#92842** — Telegram progress bubble stuck above subsequent messages.
- **#92840** — Feishu HTTP server shutdown await (fixes memory leak).
- **#88970** — Heartbeat scheduler silent failure regression fix.
- **#88968** — Memory flush failure aborting user reply (P1, high confidence).

Closed issues (updated in last 24h):
- **#90991** — Cron contamination of global runtime state (P1, closed).
- **#45698** — Control UI progressively stuck (P2, closed).
- **#43260** — Skill‑level model routing feature (P2, closed after design decision).
- **#45778** — Background push via crontab (closed without merge).
- **#44922** — Cron `sessionTarget: "main"` double delivery (P2, closed).
- **#84644** — Windows node connects but reports no commands (P1, closed after fix).

---

## 4. Community Hot Topics

Issues and PRs with the highest engagement (comments and reactions):

| Issue/PR | Title | Comments | 👍 | Tags |
|----------|-------|----------|----|------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification, no auto‑restart | 19 | 1 | P1, diamond lobster |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Centralized filename encoding utility for multi‑encoding Content‑Disposition | 18 | 0 | P2, platinum hermit |
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | Feishu monitor state memory leak in httpServers Map | 18 | 0 | P2, diamond lobster |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh‑issues skill: untrusted issue body injected into sub‑agent prompt (security) | 13 | 1 | P2, diamond lobster |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron contamination of global runtime state (now closed) | 13 | 1 | P1 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode not injecting messages mid‑turn for main sessions | 12 | 2 | P1, diamond lobster |
| [#48573](https://github.com/openclaw/openclaw/issues/48573) | Embedded‑run zombie agents after parent termination | 12 | 0 | P2, diamond lobster |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per‑agent cost budget enforcement at gateway level | 12 | 1 | P2, off‑meta |

**Underlying needs**: Users are hitting reliability walls in production: subagent orchestration fails silently, session state leaks across runs, and gateway‑level cost controls are absent. The community is pushing for architectural fixes (centralized encoding, per‑agent budgets) and urgent patch fixes (memory leaks, security injection).

---

## 5. Bugs & Stability

### High‑Severity Bugs (P0/P1)

| Issue | Summary | Created | Fix PR Exists? |
|-------|---------|---------|----------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) (P0) | Gateway memory leak: RSS 350 MB → 15.5 GB in days → OOM crashes | 2026-06-09 | No linked fix PR yet. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) (P1) | Subagent completion silently lost — multiple failure modes | 2026-03-13 | No; `needs-maintainer-review` `needs-product-decision` |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) (P1) | Steer mode doesn't inject messages mid‑turn | 2026-03-16 | PR #??? not in top 30; linked PR open per tag |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) (P1) | Feishu: read image tool result loses media before final outbound | 2026-03-10 | Linked PR open (tag `clawsweeper:linked-pr-open`) |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) (P1) | Write tool lacks append mode — cron sessions overwrite shared files | 2026-03-08 | Linked PR open |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) (P1) | Discord leaks internal tool‑call traces | 2026-03-13 | No fix PR; `needs-live-repro` |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) (P1) | Multi‑agent orchestration unstable: config overwrites, session‑lock failures | 2026-03-11 | Linked PR open |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) (P1) | Session hangs on compaction timeout → duplicate message sends | 2026-03-12 | No fix PR; `needs-product-decision` |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) (P1) | Cron jobs silently time out during LLM API outages | 2026-03-13 | Linked PR open |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) (P1) | `tools.elevated.enabled: true` breaks exec routing | 2026-03-15 | No fix PR; needs security review |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) (P1) | “Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1 | 2026-03-06 | No fix PR; needs live repro |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) (P1) | `openclaw update` fails with EBUSY on Windows | 2026-03-09 | No fix PR; needs live repro |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) (P1) | Telegram DMs land in `agent:main:main` polluting heartbeat sessions | 2026-03-09 | No fix PR; needs live repro |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) (P1) | Codex app‑server goes silent after `turn/started` — wedges session | 2026-05-22 | No fix PR; `queueable-fix` tag |

### Regressions Noticed

Multiple issues are tagged `regression`:
- **#44993**: Heartbeat/Cron “Current time” timestamp stale.
- **#43747**: Memory management chaos across users with different storage locations.
- **#45765**: `OPENCLAW_HOME` set to `~/.openclaw` produces nested directory.
- **#41201**: Control UI avatar not displaying (broken images).
- **#45494**: Cron timeout during LLM API outage (was previously faster).
- **#46786**: `tools.elevated.enabled: true` broke exec routing.
- **#84644**: Windows node connects but reports no commands (closed with fix).

### Notable Fix Efforts

- **#48183** (Feishu memory leak) has PR **#48588** (open) and a clownfish‑bot PR **#92840** (open) to rebase/update the fix.
- **#91588** (gateway memory leak) has no linked PR but is P0 and actively discussed.
- **#88970** addresses heartbeat scheduler silent failure (P1, fix PR open).

---

## 6. Feature Request Clusters

Several feature requests received multiple comments and maintainer tag attention:

### Cost & Budget Management
- [#42475](https://github.com/openclaw/openclaw/issues/42475): Per‑agent cost budgets at gateway level (P2, needs product decision).
- [#46252](https://github.com/openclaw/openclaw/issues/46252): Cost dashboard omits `.jsonl.reset.*` archives, severely undercounting spend after `/new` (P2, linked PR open).

### Session & Memory Improvements
- [#7707](https://github.com/openclaw/openclaw/issues/7707): Memory Trust Tagging by source (P2, needs security review).
- [#45608](https://github.com/openclaw/openclaw/issues/45608): Pre‑reset agentic memory flush before `/new`/daily reset (P2, 4 👍).
- [#40418](https://github.com/openclaw/openclaw/issues/40418): Automated session memory preservation & synthesis before reset (P2).
- [#41366](https://github.com/openclaw/openclaw/issues/41366): Durable natural‑language rule learning with multi‑mention reply semantics (P2).

### Channel & Delivery
- [#45565](https://github.com/openclaw/openclaw/issues/45565): Route gateway lifecycle warnings to a dedicated channel (P2).
- [#48788](https://github.com/openclaw/openclaw/issues/48788): Centralized filename encoding utility for multi‑encoding Content‑Disposition (P2, 18 comments).
- [#43015](https://github.com/openclaw/openclaw/issues/43015): `message.send` schema overexposes poll/components/modal causing GPT auto‑population (P1, 3 👍).

### Security & Permission
- [#45740](https://github.com/openclaw/openclaw/issues/45740): Untrusted issue body injection into sub‑agent prompt (P2, security).
- [#39979](https://github.com/openclaw/openclaw/issues/39979): Path‑scoped RWX permissions for exec and file tools (P2, security).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report – 2026-06-14

## 1. Daily Cross-Project Overview

Today saw continued high activity in the OpenClaw and Zeroclaw repositories, with OpenClaw processing 500 issues and 500 PRs and releasing two beta versions, while Zeroclaw touched 42 issues and 50 PRs. NanoBot and PicoClaw had lower volumes but landed meaningful fixes – NanoBot merged five PRs including a memory compaction fix, and PicoClaw fixed a vision model routing hallucination bug and released a nightly build. Across all projects, memory leaks, session stability, and channel delivery reliability remain the most frequently addressed concerns.

## 2. Activity Comparison

| Project    | Issues Updated (24h) | PRs Updated (24h) | Release(s) Today | Activity Note |
|------------|----------------------|-------------------|------------------|---------------|
| OpenClaw   | 500 (400 open, 100 closed) | 500 (302 open, 198 merged/closed) | v2026.6.8-beta.1, v2026.6.7-beta.1 | Very high – two betas, many bug fixes and features |
| NanoBot    | 5 (2 open, 3 closed) | 19 (14 open, 5 merged/closed) | None | Moderate – focused merges on memory, WebUI, config |
| Zeroclaw   | 42 (25 open, 17 closed) | 50 (41 open, 9 merged/closed) | None | High – many open PRs, prominent S1 bugs, RFC activity |
| PicoClaw   | 2 (1 open, 1 closed) | 7 (5 merged/closed, 2 open) | v0.2.9-nightly | Low – mainly small fixes and one feature PR |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issues and 500 PRs updated dwarf the other projects combined. It is the core reference implementation and receives the most community attention.
- **Technical focus**: OpenClaw’s top issues revolve around memory leaks (P0 gateway OOM), subagent silent failures, cron contamination, and channel delivery (Telegram, WhatsApp, Slack). In contrast, NanoBot focuses on WebUI parity and TUI, Zeroclaw on plugin RFCs and WebSocket `ask_user` bugs, and PicoClaw on vision model routing and edge connectivity.
- **Community surface area**: OpenClaw has high‑engagement threads (e.g., Issue #44925 with 19 comments) and a strong bug reporting culture. NanoBot’s community is smaller but actively contributing PRs. Zeroclaw has lively RFC discussions (Dream Mode, native plugins). PicoClaw has minimal community feedback today.

## 4. Shared Technical Focus Areas

Multiple projects are addressing similar concerns today:

- **Memory & session stability** – OpenClaw: P0 gateway memory leak (#91588), Feishu memory leak (#48183), session hang on compaction (#43661). NanoBot: fixed idle compaction summarising the wrong tail (#4326). Zeroclaw: canvas-store regression (#7563), WebSocket `ask_user` channel closure (#7542). PicoClaw: continuous token consumption with Evolution (#3012, likely memory-related). **Observation**: stability issues remain the most common pain point across all projects.

- **Subagent orchestration** – OpenClaw: subagent completion silently lost (#44925), multi-agent orchestration unstable (#43367). NanoBot: PR #4291 adds subagents with configurable model presets. Zeroclaw: Issue #7514 asks to allow subagents with different risk profiles. **Observation**: subagent reliability and flexibility are active development areas.

- **WebUI & dashboard improvements** – OpenClaw: workboard operations UI polish (#90057). NanoBot: WebUI parity with config.json (#4313), path prefix support (#4328), automation management view (#4330). Zeroclaw: dashboard broken on macOS (#7523), multi-session request (#7543). PicoClaw: remote WebSocket mode (#3118). **Observation**: all projects have ongoing WebUI work, with Zeroclaw facing the most acute user-facing bugs.

- **Channel delivery robustness** – OpenClaw: betas improved Telegram and WhatsApp; Slack same-channel finals. Zeroclaw: streaming card messages for QQ/DingTalk/WeChat/Feishu (#7531), WhatsApp reactions (#7518). PicoClaw: no channel-specific work today. **Observation**: channel support is a key differentiator, with OpenClaw and Zeroclaw investing heavily.

- **Cost management** – OpenClaw: per-agent cost budgets (#42475), cost dashboard undercounting (#46252). PicoClaw: continuous token drain when Evolution is enabled (#3012). NanoBot and Zeroclaw have no explicit cost-related items today. **Observation**: cost control is an emerging need, especially in OpenClaw and PicoClaw.

## 5. Differentiation Analysis

| Aspect | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|--------|----------|---------|----------|----------|
| **Primary user** | Production deployers, enterprise | Individual developers, WebUI-first | Community building, plugin extensibility | Edge/lightweight, Sipeed ecosystem |
| **Feature focus** | Channel delivery, orchestration, stability | WebUI config parity, TUI, TTS, automations | Plugin systems (native, OCI), Dream Mode, cron | Vision routing, image compression, TTS voice overrides, remote connectivity |
| **Technical architecture** | Reference agent with large issue/PR volume | Modular Pydantic config, circular import cleanup | Plugin-based (WASM, native library RFC), gateway WebSocket | Nightly builds, embedded, nightly releases |
| **Community engagement** | High – many bug reports, active maintainer responses | Moderate – contributors active, few long threads | High – RFCs and design discussions | Low – only 1 open bug with no maintainer comment today |

## 6. Community Activity Notes

- **Tier 1 (Very High)** : OpenClaw – 500 issues, 500 PRs, two beta releases. Dominates raw activity.
- **Tier 2 (High)** : Zeroclaw – 42 issues, 50 PRs, no release but many open fix PRs and RFCs.
- **Tier 3 (Moderate)** : NanoBot – 5 issues, 19 PRs, no release, but meaningful merged fixes.
- **Tier 4 (Low)** : PicoClaw – 2 issues, 7 PRs, one nightly release. Minimal community interaction.

*Note: Activity counts do not directly correlate with project maturity or quality; they reflect differing community sizes and development rhythms.*

## 7. Evidence-Backed Observations

1. **Memory and stability issues are the top cross-project concern.** Three of four projects reported memory-related bugs (OpenClaw P0 gateway OOM, NanoBot compaction fix, PicoClaw token drain), and Zeroclaw’s WebSocket `ask_user` failure also stems from session lifecycle problems. This suggests ongoing architectural challenges in session and memory management across agents.

2. **WebUI and dashboard development is accelerating, but usability bugs are prominent.** NanoBot merged significant WebUI parity features; Zeroclaw has two S1 bugs rendering its dashboard unusable on macOS and behind WebSocket; OpenClaw continues polishing workboard UI. The pattern indicates that WebUI is a key battleground, but the pace of feature addition sometimes outpaces stability.

3. **Subagent orchestration features are being added across multiple projects.** OpenClaw is fixing silent failures, NanoBot is allowing model presets for child agents, and Zeroclaw is exploring differentiated risk profiles. This shared focus reflects growing demand for complex multi-agent workflows.

4. **Channel delivery improvements cluster in OpenClaw and Zeroclaw, while NanoBot and PicoClaw prioritise other areas.** OpenClaw’s betas targeted Telegram/WhatsApp/Slack; Zeroclaw has requests for streaming cards on Chinese platforms and WhatsApp reactions. Neither NanoBot nor PicoClaw had channel-related updates today, signalling different product strategies.

5. **Cost management is an emerging but not yet uniformly addressed need.** OpenClaw has open feature requests for per-agent budgets and dashboard accuracy; PicoClaw has a user reporting uncontrollable token consumption. NanoBot and Zeroclaw have no cost-related items in today’s data. This suggests cost governance will become a more pressing concern as agents scale in production.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-14

## 1. Today’s Activity Brief
In the last 24 hours, 5 issues were updated (3 closed, 2 remain open) and 19 pull requests were touched (14 open, 5 merged/closed). No new releases were published. The project saw several important bug fixes land, including a memory compaction fix and a WebUI startup performance improvement, while two newly reported regressions (a `NameError` crash and a breaking `temperature` parameter for certain Anthropic models) are already being addressed by open PRs.

---

## 2. Releases
No new releases today.

---

## 3. Project Progress
Five pull requests were merged or closed in the last 24 hours:

- **#4098** – Fix exec workspace symlink guard and path precedence
  ([PR](https://github.com/HKUDS/nanobot/pull/4098))
  Blocked restricted exec commands from following symlinks that escape the workspace and fixed `pathAppend` to prepend instead of append on Unix, so configured tool paths take lookup precedence.

- **#4326** – fix(memory): summarize full session tail during idle compaction (#4264)
  ([PR](https://github.com/HKUDS/nanobot/pull/4326))
  Resolves the bug where `idleCompact` was summarising only the dropped prefix instead of the full unconsolidated tail, preserving the corrective turns of a conversation.

- **#4327** – Fix WebUI startup blocking on slow gateway routes
  ([PR](https://github.com/HKUDS/nanobot/pull/4327))
  Moved slow HTTP handlers off the gateway event loop, avoided full session JSONL reads when resolving workspace scope, and made the chat surface fetch only installed CLI apps at startup.

- **#4314** – Break tool config schema import cycle
  ([PR](https://github.com/HKUDS/nanobot/pull/4314))
  Refactored the shared Pydantic config into a tiny `nanobot.config_base` module to eliminate circular imports while keeping tool config classes beside their implementations.

- **#4313** – Feat(webui): config.json/webui parity
  ([PR](https://github.com/HKUDS/nanobot/pull/4313))
  Added new write endpoints for temperature, tool limits, dream, channels, and memory fields, plus expanded UI controls in the Models, Agent limits, and Memory panels to close the gap between the WebUI and raw `config.json`.

---

## 4. Community Hot Topics
The most active discussion remains **Issue #193** – “Ollama api support?”
([issue](https://github.com/HKUDS/nanobot/issues/193))
Created in February, it accumulated 15 comments before being closed today. The user requested Ollama API support (only vLLM was available). Maintainers appear to have addressed the request (no further details in the data), and the closure suggests a resolution or decision.

No other issue or PR in today’s sample received more than 1 comment, so activity was spread across many new items rather than concentrated on a single topic.

---

## 5. Bugs & Stability
Two new open bugs of high severity were reported today:

- **#4322** – `NameError: 'session_key' is not defined` in `context.py` after merge
  ([issue](https://github.com/HKUDS/nanobot/issues/4322))
  A merge (`origin/main` into `fix/prompt-caching`) extracted a new method `_build_memory_context` but left a reference to `session_key` unresolved, crashing the agent on startup. No fix PR has yet appeared.

- **#4333** – Anthropic provider sends deprecated `temperature` to opus-4-8 / Fable → 400 error
  ([issue](https://github.com/HKUDS/nanobot/issues/4333))
  The provider only suppresses `temperature` for `opus-4-7`; newer models (`opus-4-8`, Fable) reject the parameter, breaking every request. A fix PR **#4334** is already open:
  ([PR](https://github.com/HKUDS/nanobot/pull/4334))
  – it widens the `omit_temperature` check to cover these models.

Additionally, closed bug **#4264** (idleCompact summarising the wrong tail) was fixed in PR #4326, and closed bug **#4083** (pathAppend not taking precedence) was fixed in PR #4098.

---

## 6. Feature Request Clusters
Several feature requests or enhancements surfaced through new issues and PRs. Notable clusters:

- **New terminal UI** – PR #4329 introduces an inline TUI for the `nanobot agent` command, with markdown rendering, slash-command panel, and multi-modal input.
  ([PR](https://github.com/HKUDS/nanobot/pull/4329))

- **Toggle for built-in filesystem tools** – PR #4138 adds a `tools.file.enable` flag, mirroring the existing `exec` and `web` enable/disable switches.
  ([PR](https://github.com/HKUDS/nanobot/pull/4138))

- **Subagents with configurable model presets** – PR #4291 allows the LLM to specify a named model preset when spawning a subagent, enabling different provider/model/temperature for child agents.
  ([PR](https://github.com/HKUDS/nanobot/pull/4291))

- **WebUI under a path prefix** – PR #4328 fixes all hardcoded root-relative URLs so the WebUI can be served behind a reverse proxy or sub-path (e.g., `https://host/nanobot/`).
  ([PR](https://github.com/HKUDS/nanobot/pull/4328))

- **TTS configuration system** – PR #4316 adds a configurable text-to-speech system with multi-provider support (OpenAI, Groq/Orpheus, ElevenLabs), exposed via the WebUI.
  ([PR](https://github.com/HKUDS/nanobot/pull/4316))

- **Automation management view** – PR #4330 adds a WebUI page for listing, filtering, running, pausing/resuming, and deleting automations, with protected system automation handling.
  ([PR](https://github.com/HKUDS/nanobot/pull/4330))

- **Localisation improvements** – PR #4331 adds i18n resources for the update-check copy across all WebUI locales.
  ([PR](https://github.com/HKUDS/nanobot/pull/4331))

---

## 7. User Feedback Summary
Real pain points voiced in today’s data:

- **Ollama API support** – Long-standing request (#193) finally closed; users wanted a broader provider choice beyond vLLM.
- **Incorrect history compaction** – A user described a realistic scenario where the last corrective turns (the actual successful outcome) were cut from the summarisation window, leaving wrong conclusions in `history.jsonl` (#4264).
- **Transcription env-var resolution** – Two PRs (#4323, #4324, #4325) address cases where `${VAR}` templates in config were not resolved before credential checks, causing silent failures for transcription and settings updates.
- **Parameter compatibility with new Anthropic models** – User reports a 400 error on every request because a deprecated parameter is still sent (#4333). This was a clear regression affecting production use of `claude-opus-4-8` and Fable.
- **Startup crash after merge** – A maintainer merging a branch inadvertently introduced a `NameError` that prevents the agent from starting (#4322). This highlights the risk of rapid merges without testing the combined state.

Overall, users are actively contributing fixes and reporting sharp edges, suggesting an engaged community but also a need for more robust merge and regression testing.

---

## 8. Backlog Watch
No issues or PRs that have remained unanswered for an extended period stand out in today’s data, as most open items are recent (within the last few days). Two older items that were resolved today:

- **#193** (Ollama API support, created 2026-02-06) – after 4 months of discussion, it was closed. No explanation of the resolution is present in the data, but it marks the end of a long-standing request.
- **#4083** (pathAppend precedence, created 2026-05-29) – closed via PR #4098 today.

The only PR that has been open relatively longer (since June 1) is **#4138** (toggle filesystem tools), which has not yet received maintainer review or merge. It may be worth noting for future attention.
([PR](https://github.com/HKUDS/nanobot/pull/4138))

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-06-14

## Today's Activity Brief

In the last 24 hours, 42 issues were updated (25 open, 17 closed) and 50 pull requests saw activity (41 open, 9 merged/closed). No new releases were published. Key merged work includes the addition of pause/resume for cron tasks (PR #7398) and progress on fixing several WebSocket‑related `ask_user` bugs with multiple corresponding fix PRs. The project continues to see high‑activity RFCs around a native plugin system and OCI‑based plugin storage, alongside steady patch work for channel and gateway stability.

## Releases

None — no new versions were tagged in the reporting period.

## Project Progress

**Merged/closed PRs (9 total; details available for top‑comment PRs):**

- [#7398 — feat(cron): add pause/resume for scheduled tasks](https://github.com/zeroclaw-labs/zeroclaw/pull/7398) – Allows toggling job enabled state without deleting and recreating. Changes include `cron_add`/`cron_update` accepting an `enabled` field and a new `PATCH /api/cron/:id` endpoint.

Other closed PRs in the top 20 by comment count are duplicates or earlier attempts at the same fix (e.g., #7586, #7587, #7585, #7584) and were not merged; the merged fix for #7542 appears to be #7588 (open, not yet merged). The overview indicates 9 PRs were closed/merged overall, but the provided data only shows one definitively merged item.

## Community Hot Topics

1. **[#5849 — Dream Mode: Periodic Memory Consolidation & Reflective Learning](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)** (18 comments, open since Apr 18, accepted)
   A feature request to let ZeroClaw consolidate daily memories and reflect on interactions during idle periods. High risk, no‑stale. Remains the most discussed open issue.

2. **[#5470 — Multiple issues when running safely (closed)](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)** (5 comments) – Closed with `r:needs-repro`. The reporter experienced duplicate message storage in Telegram and other weird behaviour with GPT‑5.4.

3. **[#5570 — Faster SQLite memory vector search (closed)](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)** (5 comments) – Request to replace brute‑force O(n) vector scan with an ANN index. Closed stale/blocked.

4. **[#6760 — Update Docker documentation for v0.7.5-debian](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)** (4 comments, open/in‑progress) – User provided working Docker YAML for Gateway and Web UI build.

5. **[#7415 — RFC: Unify the three agent turn engines (closed)](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** (4 comments) – This RFC has been executed as a single consolidation PR (#7540). The discussion is now resolved.

6. **[#6289 — Prompt‑triggered install suggestions for missing skills/plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)** (3 comments, open/accepted) – Users want ZeroClaw to suggest installing a skill or plugin when the agent cannot fulfill a request due to missing capabilities.

7. **[#7420 — RFC: Native Dynamic‑Library Plugin System](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** (3 comments, open, needs maintainer review) – Proposes moving from WASM plugins to native `.so`/`.dylib` plugins to reduce overhead and enable deeper system integration.

## Bugs & Stability

**High‑severity (S1) bugs reported or updated in the last 24h:**

- [#7563 — canvas‑store regression in WS chat/ACP sessions breaks /canvas after #6986](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) – The Web UI `/canvas` page stays empty after a WebSocket chat session uses the `canvas` tool. **Severity: S1** (workflow blocked). Open, accepted, no fix PR yet.

- [#7542 — `ask_user` fails instantly with “Channel closed before receiving a response” in gateway web dashboard WebSocket sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) – Agent calls `ask_user` from the dashboard, never delivers the question. **S1**. Multiple fix PRs submitted: [#7588](https://github.com/zeroclaw-labs/zeroclaw/pull/7588) (open), [#7586](https://github.com/zeroclaw-labs/zeroclaw/pull/7586) (open), [#7584](https://github.com/zeroclaw-labs/zeroclaw/pull/7584) (open). Also related: #7551 (free‑form `ask_user` bug) with fix PRs [#7589](https://github.com/zeroclaw-labs/zeroclaw/pull/7589), [#7587](https://github.com/zeroclaw-labs/zeroclaw/pull/7587), [#7585](https://github.com/zeroclaw-labs/zeroclaw/pull/7585).

- [#7523 — dashboard not available on macOS brew install](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) – After `brew install zeroclaw`, the web dashboard at port 42617 shows blank. **S1**. Open, status in‑progress.

- [#7527 — macOS app not work (permissions, empty page, window disappears)](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) – **S1**, open, status blocked. The macOS desktop app fails to detect granted permissions and becomes unresponsive.

- [#7507 — quickstart infinite redraw loop on non‑TTY stdin (closed)](https://github.com/zeroclaw-labs/zeroclaw/issues/7507) – **S1** but closed after fix. When run without an interactive TTY, the quickstart checklist flooded 4.3 GB of output.

**Medium severity (S2) bugs:**

- [#7377 — zerocode dark themes inherit unreadable terminal foreground text](https://github.com/zeroclaw-labs/zeroclaw/issues/7377) – **S2**, closed/in‑progress.

**Low severity (S3) bugs:**

- [#7378 — zerocode treats macOS Cmd‑C as quit chord](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) – **S3**, closed.

- [#7509 — update self‑test fails on Windows hosts (zip assets rejected)](https://github.com/zeroclaw-labs/zeroclaw/issues/7509) – **S3**, closed.

## Feature Request Clusters

1. **Memory & Reflection**
   #5849 (Dream Mode) continues to gather community interest, though no corresponding PR has emerged. It is the most commented issue overall.

2. **Plugin & Skill Systems**
   - #7420 (native dynamic‑library plugins) and #7497 (OCI‑compliant container registries for WASM plugins) are both RFCs awaiting maintainer review.
   - #6289 (prompt‑triggered install suggestions) is accepted but unassigned.

3. **Terminal UI (Zerocode)**
   Three trackers remain active: #6823 (ACP Bridge), #6826 (Zerocode TUI), #6825 (Zerocode UX) — all accepted and no‑stale. The TUI is a separate binary under active development.

4. **Channel Improvements**
   - #7531 (streaming card messages for QQ, DingTalk, WeChat, Feishu) – accepted, open.
   - #7518 (WhatsApp message reactions parity with Telegram/Discord/Matrix) – in‑progress.
   - #6223 (web_fetch in WhatsApp not working) – closed.

5. **Web UI & Gateway**
   - #7543 (multi‑session support in web chat: new / switch / rename / delete) – accepted.
   - #6760 (Docker documentation update) – in‑progress.
   - #6211 (stabilize Node.js version to LTS) – in‑progress.

6. **Provider & Model Flexibility**
   - #7539 (llama.cpp model router for quick switching) – accepted.
   - #5797 (TLS CA cert path for custom inference providers) – open PR, needs author action.

7. **Delegation & Security**
   - #7514 (change `delegate` tool to allow subagents with different risk profiles) – accepted.
   - #6876 (risk_profile.allowed_tools does not restrict MCP tools) – closed as by‑design gap, documentation updated.

## User Feedback Summary

- **Pain points:**
  - Web dashboard is broken on macOS (`brew install` → blank page, #7523).
  - WebSocket `ask_user` is completely non‑functional (#7542), blocking all interactive workflows from the web UI.
  - Canvas tool usage after a normal chat session breaks the `/canvas` page (#7563).
  - The macOS desktop app has severe permission and UI issues (#7527).
  - Non‑UTF‑8 text files are unreadable via `file_read` (#7521).
  - Users of Chinese messaging platforms (QQ, DingTalk, etc.) experience long wait times because rich card messages are not streamed (#7531).
  - The web chat is limited to a single session; users request multi‑session management (#7543).
  - Local model users want quick switching between llama.cpp models without editing config (#7539).

- **Satisfaction signals:**
  - Docker documentation contributions (#6760) and the quickstart infinite‑loop fix (#7507, closed) show responsive maintainer engagement.
  - The cron pause/resume feature (#7398) was merged, directly addressing user request #7356.

## Backlog Watch

- **#5849 (Dream Mode)** – open since April 18, accepted and no‑stale, but no assignment or PR. High risk, high community interest.
- **#6289 (Prompt‑triggered install suggestions)** – accepted since May 2, no activity beyond initial discussion.
- **RFCs awaiting maintainer review:**
  - #7420 (native plugin system) – open since June 9, requires maintainer review.
  - #7497 (OCI container registries for plugins) – open since June 11, requires maintainer review.
- **#6823, #6826, #6825 (Zerocode TUI trackers)** – accepted since May 21, no‑stale, but no visible progress on individual tasks.
- **#6970 (v0.8.1 PR queue tracker)** – created May 27, open, but no updates beyond the initial post.
- **#7514 (delegate tool risk profile change)** – accepted since June 11, no PR yet.
- **#7521 (file_read non‑UTF‑8 detection)** – accepted since June 11, no PR yet.

Items with `needs-maintainer-review` label (#7420, #7497) should be prioritised to avoid blocking the larger plugin architecture discussions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-06-14

## 1. Today's Activity Brief

In the last 24 hours, 2 issues were updated (1 open, 1 closed) and 7 pull requests saw activity (5 merged/closed, 2 open). A new nightly build (v0.2.9-nightly) was released. Among the merged PRs, notable fixes include routing media turns to vision-capable models (fixing the hallucination bug #3108), OpenRouter TTS voice overrides with fallback, and explicit error handling on file close paths. Two new feature PRs are open: configurable image input compression and a remote WebSocket mode for the `picoclaw agent` command. An open bug report (#3012) about continuous token consumption when Evolution is enabled remains under discussion.

## 2. Releases

- **Nightly Build** – `v0.2.9-nightly.20260614.cf67dd38`
  Automated nightly build based on the current `main` branch. The release notes caution that it may be unstable. No breaking changes or migration notes are provided.
  Full changelog: [compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress

Five pull requests were merged/closed in the last 24 hours:

- **#3119** – [fix(tts): support OpenRouter voice overrides and fallback](https://github.com/sipeed/picoclaw/pull/3119)
  Adds per‑model TTS voice/format overrides via `extra_body` and an automatic retry fallback when `response_format` is rejected.

- **#3117** – [fix(agent): route media turns to image models](https://github.com/sipeed/picoclaw/pull/3117)
  Fixes #3108: media turns and `load_image` follow‑ups are now sent to the configured image model instead of retrying on a text‑only model. Also embeds the onboarding workspace from the tracked root.

- **#3065** – [fix(seahorse): explicitly ignore Close() errors on PRAGMA/migration failure paths](https://github.com/sipeed/picoclaw/pull/3065)
  Suppresses linter warnings by acknowledging ignored errors.

- **#3066** – [fix: explicitly ignore Close() errors on temp file write/sync failure paths](https://github.com/sipeed/picoclaw/pull/3066)
  Consistent error handling in `normalization.go`, WeCom media handling, and filesystem tools.

- **#2935** – [docs(i18n): add Traditional Chinese (zh-TW) locale and READMEs](https://github.com/sipeed/picoclaw/pull/2935)
  Adds full Traditional Chinese documentation and frontend locale (merged after “stale” label).

Two open PRs advanced:

- **#2964** – [Feat/image input compression](https://github.com/sipeed/picoclaw/pull/2964) (open, updated)
- **#3118** – [Add remote Pico WebSocket mode to picoclaw agent](https://github.com/sipeed/picoclaw/pull/3118) (open, updated)

## 4. Community Hot Topics

The most active discussion in the past 24 hours is **Issue #3012** (3 comments):

- **[BUG] Continuous consumption of tokens every minutes when evolution is enabled** – [link](https://github.com/sipeed/picoclaw/issues/3012)
  Author @xpader reports that with Evolution Mode set to “Draft” and a code path trigger, PicoClaw consumes tokens every minute even without user input. The environment is FreeBSD, Go 1.25.10, MiniMax model via Web channel. No maintainer response or fix PR has been linked yet. The lack of reactions may indicate a lower profile, but the underlying concern about unexpected token usage is a clear cost‑related pain point.

No other issues or PRs received comments or reactions today.

## 5. Bugs & Stability

- **Severity: High** – [#3012 (open)](https://github.com/sipeed/picoclaw/issues/3012)
  Continuous token drain every minute with Evolution enabled. Could lead to excessive API costs. No fix available. No response from maintainers yet.

- **Severity: Medium (fixed)** – [#3108 (closed)](https://github.com/sipeed/picoclaw/issues/3108)
  Image description hallucinations when the active model lacks vision support. **Fixed** by PR #3117, which now correctly routes media turns to the configured image model.

- **Stability note**: The nightly release (`v0.2.9-nightly`) is flagged as potentially unstable. Users are advised to use with caution.

## 6. Feature Request Clusters

The following feature‑oriented PRs are currently in development (no explicit user feature requests were filed in today’s issues):

- **Image input compression** – PR #2964 adds configurable multi‑level compression for inbound images before building the model payload, a response to the existing `max_media_size` limit being insufficient for some use cases.
- **Remote Pico WebSocket mode** – PR #3118 introduces a `--remote` flag to the `picoclaw agent` command, allowing the agent to connect to a remote Pico instance via WebSocket. Local behavior remains unchanged.
- **TTS voice overrides** – PR #3119 (already merged) adds per‑model voice/format configuration for OpenRouter TTS, requested implicitly by the need to control voice parameters across different providers.

These represent ongoing work in vision pipeline performance, agent connectivity, and TTS flexibility.

## 7. User Feedback Summary

- **Pain point: unexpected token usage** – Issue #3012 reports the agent burning tokens on a timer when Evolution is active, even when idle. This is a direct usability and cost concern.
- **Pain point (fixed): image hallucinations** – Issue #3108 was resolved by PR #3117. The user’s workflow (describing images via `deepseek/deepseek-v4-flash` on OpenRouter) now correctly routes vision tasks to a compatible model.
- **General observation**: No explicit satisfaction feedback appears in today’s data. The closed hallucination bug indicates a responsive fix cycle for reported vision issues.

## 8. Backlog Watch

- **Issue #3012** – Open for 9 days, last updated yesterday. No maintainer comment or assignee. The bug’s impact (continuous token consumption) suggests it should be prioritized. A fix or request for more details would help the community.
- **PR #2964** – Open since May 28 (17 days), last updated yesterday. No review comments or merges. As a feature PR with vision compression, it may be awaiting maintainer feedback or additional testing.
- **PR #2935** – Formerly “stale”, now merged. No other long‑unanswered items stand out. PR #3118 is only two days old and is not yet considered backlog.

</details>