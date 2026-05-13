# OpenClaw Ecosystem Digest 2026-05-13

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-13 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-13

## Today's Activity Brief

OpenClaw saw intense activity over the past 24 hours: 500 issues were updated (424 open/active, 76 closed) alongside 500 pull requests (460 open, 40 merged/closed). Three beta releases shipped (v2026.5.12-beta.1 through beta.3), all primarily containing fixes rather than new features. The project continues to see heavy community engagement around Codex runtime parity, gateway reliability on Windows, and a significant subagent regression reported in the latest stable release (v2026.5.7). Maintainers merged several targeted fixes including WhatsApp close sequencing, xAI reasoning model gating, and SSH transport security checks.

## Releases

Three releases shipped today, all under the `v2026.5.12-beta` tag:

**v2026.5.12-beta.3** and **v2026.5.12-beta.2** share identical changelogs:
- **Codex harness**: Kept auth-profile-backed media tools (e.g., `image_generate`) available when OpenAI auth lives in the agent's auth-profile store instead of environment variables.
- **WhatsApp/install**: Allowed Baileys' pinned libsignal git subdependency under pnpm 11 so source installs work.

**v2026.5.12-beta.1** included:
- `memory-wiki`: Requires admin scope for ingest and write scope for Obsidian search.
- **Build**: Skipped copied metadata for bundled plugins excluded from build entries, preventing update/status issues.

No breaking changes or migration notes were documented in these releases.

## Project Progress

Today's 40 merged/closed PRs included several notable fixes:

- **WhatsApp reliability** ([#81246](https://github.com/openclaw/openclaw/pull/81246)): Fixed debounced inbound messages being dropped when `close()` starts during a pending batch.
- **SSH transport security** ([#73659](https://github.com/openclaw/openclaw/pull/73659)): Properly maps SSH transport connections to loopback tunnel endpoints for websocket security validation.
- **Config data loss prevention** ([#80257](https://github.com/openclaw/openclaw/pull/80257)): Fixes four interacting problems in the update pipeline that destroyed user-authored config fields during version upgrades.
- **Clear poisoned Claude CLI sessions** ([#81247](https://github.com/openclaw/openclaw/pull/81247)): When a reused `claude-cli` session fails with `AbortError`, OpenClaw now clears the stored session ID instead of keeping it for the next turn.
- **Subagent announce routing** ([#80242](https://github.com/openclaw/openclaw/pull/80242)): Subagent completion announces now route to the originating parent session instead of a channel-bound peer session.

Several long-running PRs remain open including the large Teams SDK rebase ([#76262](https://github.com/openclaw/openclaw/pull/76262)) and the OTel per-message tracing extension ([#72645](https://github.com/openclaw/openclaw/pull/72645)).

## Community Hot Topics

The most active discussions this period center on **reliability and runtime parity**:

1. **[Silently lost connection to Slack](https://github.com/openclaw/openclaw/issues/72808)** (16 comments, 2 👍): A user reports their Slack connection worked fine for days then silently stopped, with no error visible to the user. The bug highlights a broader pattern of connection health visibility gaps.

2. **[QA tool-defaults suite conflates Codex-native vs OpenClaw dynamic tools](https://github.com/openclaw/openclaw/issues/80319)** (14 comments, 1 👍): A detailed analysis from @100yenadmin identifying that the QA harness incorrectly conflates Codex-native workspace tools with OpenClaw's dynamic tool parity, leading to false failure reports.

3. **[Gateway restart hang ~3-4 minutes on macOS](https://github.com/openclaw/openclaw/issues/73303)** (12 comments, 2 👍, now **closed**): This issue was resolved, but the discussion revealed ongoing macOS-specific process management challenges.

4. **[Companion-friendly SQLite transcript/session seams](https://github.com/openclaw/openclaw/issues/79902)** (12 comments, 2 👍): Users request structured access to runtime state for building advanced consumers, reflecting demand for better developer APIs.

5. **[Codex-vs-Pi runtime parity QA harness RFC](https://github.com/openclaw/openclaw/issues/80171)** (11 comments, 1 👍): A structured tracking issue for the ongoing transition from Pi to Codex as the default runtime, with extensive sub-issues for confidence proofs and live token efficiency measurement.

## Bugs & Stability

**High severity:**

- **[Subagent regression in v2026.5.7](https://github.com/openclaw/openclaw/issues/81214)** (NEW today, 4 comments, 1 👍): Native/local subagent execution with Ollama runtimes is broken. A major regression in the latest stable release—no fix PR linked yet.

- **[Config data loss during upgrade](https://github.com/openclaw/openclaw/pull/80257)** (resolved today): Users reported losing channel accounts, credentials, and plugin install records after upgrading from v2026.5.6 to v5.7+. Fix now merged.

**Medium severity:**

- **[WhatsApp group auto-reply silently suppressed](https://github.com/openclaw/openclaw/issues/80669)** (5 comments, 2 👍): Group replies are generated but never delivered. The typing indicator sometimes shows but no message arrives.

- **[Slack thread session generates responses but fails to deliver](https://github.com/openclaw/openclaw/issues/78061)** (5 comments, 2 👍): Assistant responses visible in session transcript never reach Slack.

- **[Windows gateway HTTP/WS dispatch deadlock](https://github.com/openclaw/openclaw/issues/73874)** (5 comments): Persists through multiple versions, specific to Docker Desktop bind-mount setups on Windows.

**Lower severity but notable:**

- **[Reasoning default silently flipped to on for Claude models](https://github.com/openclaw/openclaw/issues/73182)** (5 comments): Doubles Anthropic spend, leaks thinking blocks to chat. Users report no notification of the change.
- **[Safeguard compaction ignores compaction.model config](https://github.com/openclaw/openclaw/issues/57901)** (9 comments): Uses session model instead, a long-standing configuration bug.
- **[Stuck processing sessions never aborted](https://github.com/openclaw/openclaw/issues/71127)** (9 comments): Detection exists, but no recovery action is wired to it.

## Feature Request Clusters

Several feature requests received meaningful community engagement this period:

1. **Plugin/skill setup hooks** ([#80213](https://github.com/openclaw/openclaw/issues/80213), 4 comments, 4 👍): Users want skill-defined setup scripts that run on install/update, closing the gap between predefined install types and custom post-install needs.

2. **Per-agent isolated browser instances** ([#37487](https://github.com/openclaw/openclaw/issues/37487), 4 comments, 0 👍): Request for concurrent browser instances with per-instance proxy configuration for parallel workflows.

3. **Control UI contribution slots** ([#71736](https://github.com/openclaw/openclaw/issues/71736), 8 comments, 0 👍): Proposed SDK surface for plugin chat modes, approval cards, and input guards—not yet implemented.

4. **Configurable upload size limit** ([#71142](https://github.com/openclaw/openclaw/issues/71142), 6 comments, 0 👍): The Control UI's hardcoded 5MB upload limit prevents users from sharing larger images through the web interface.

5. **Multiple Azure/Teams bots** ([#71058](https://github.com/openclaw/openclaw/issues/71058), 4 comments, 1 👍): Request for supporting multiple Teams bot identities on a single gateway instance.

## User Feedback Summary

**Pain points:**
- **Connection reliability** is the dominant theme: Slack silently drops, WhatsApp group replies are generated but never delivered, Telegram DMs fabricate silent-reply chatter, and session lanes can starve inbound dispatch for 20-30 minutes.
- **Windows users** face disproportionate issues: the gateway blocks during account startup phase, dispatch deadlocks on Docker setups, and Web GUI/CLI performance is unstable.
- **Update risk** is a growing concern: mid-turn updates cause total message loss, version upgrades destroy user config, and there's no way to detect whether a running install has been locally patched versus pristine npm release.
- **Configuration opacity**: The reasoning default silently flipping for Claude models and the safeguard compaction ignoring its own config both point to a pattern of settings being overridden without user visibility.

**Satisfaction signals:**
- Active QA harness development ([#80171](https://github.com/openclaw/openclaw/issues/80171), [#80319](https://github.com/openclaw/openclaw/issues/80319)) shows community investment in quality infrastructure.
- Chinese localization PRs ([#80924](https://github.com/openclaw/openclaw/pull/80924), [#80955](https://github.com/openclaw/openclaw/pull/80955)) indicate growing international user base engagement.

## Backlog Watch

Issues that have been open for extended periods without resolution or maintainer response:

- **[sandbox: keep workspaceAccess none workspaces writable](https://github.com/openclaw/openclaw/issues/37634)** (created 2026-03-06, 8 comments, 4 👍): Users with `workspaceAccess: "none"` find isolated workspaces mounted read-only, breaking tools that need to write. Long-running request with no fix.

- **[Chrome extension browser relay removed with no cross-machine replacement](https://github.com/openclaw/openclaw/issues/53599)** (created 2026-03-24, 4 comments, 4 👍): The replacement (Chrome DevTools MCP) is host-local only, breaking managed hosting providers. No resolution after nearly two months.

- **[exec() sandbox isolation and tool permission model](https://github.com/openclaw/openclaw/issues/58730)** (created 2026-04-01, 4 comments, 0 👍): Security-focused request inspired by Claude Code source leak analysis. No maintainer response indicated.

- **[Plugin config has no env-var or writable-overlay path](https://github.com/openclaw/openclaw/issues/72950)** (created 2026-04-27, 5 comments, 1 👍): Plugin config is sourced from a Landlock-protected file, making per-deployment configuration impossible without image rebuild. No fix PR.

- **[openclaw agent defaults --channel to last, silently resumes most recent session](https://github.com/openclaw/openclaw/issues/71417)** (created 2026-04-25, 4 comments, 0 👍): Operators running fresh tests get silently routed to previous sessions with no warning. No resolution.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-05-13

## 1. Daily Cross-Project Overview

Today's activity across the four tracked projects ranged from extremely high (OpenClaw) to moderate (ZeroClaw, PicoClaw) and low (NanoBot). OpenClaw processed 500 issues and 500 pull requests alongside three beta releases, while NanoBot had only 8 issue updates and 19 PRs with no release. Bug fixes dominated across all projects: channel reliability, provider compatibility, and configuration integrity were recurring themes. No major new feature launches occurred; most changes addressed stability or incremental improvements.

## 2. Activity Comparison

| Project    | Issues updated (open / closed) | PRs updated (open / merged+closed) | Release status | Activity note |
|------------|--------------------------------|-------------------------------------|----------------|---------------|
| OpenClaw   | 500 (424 open, 76 closed)      | 500 (460 open, 40 merged/closed)    | 3 beta releases (v2026.5.12-beta.1–.3) | Highest volume; heavy community engagement; subagent regression and config data loss fixes |
| NanoBot    | 8 (4 open, 4 closed)           | 19 (9 open, 10 merged/closed)       | No release     | Low activity; channel/Feishu fixes, DeepSeek V4 Flash bugs, tool plugin refactor |
| ZeroClaw   | 10 (5 open, 5 closed)          | 49 (31 open, 18 merged/closed)      | No release     | Moderate activity; large draft integration branch v0.8.0; many small tool rate-limiting PRs |
| PicoClaw   | 17 (11 open, 6 closed)         | 16 (12 open, 4 merged/closed)       | 1 nightly build (v0.2.8-nightly.20260513) | Moderate activity; docs, bug fixes (PID reuse, sandbox bypass), new Xiaomi Mimo issue |

## 3. OpenClaw Compared With Peers

OpenClaw’s activity volume is an order of magnitude higher than the other three projects combined. Its community surface area – 500 issues and 500 PRs in 24 hours – reflects its role as the core reference implementation with a broad user base. By contrast, NanoBot (8 issues, 19 PRs), ZeroClaw (10 issues, 49 PRs), and PicoClaw (17 issues, 16 PRs) operate at a smaller scale.

Technically, OpenClaw deals with platform-level concerns: Codex runtime parity, SSH transport security, Windows gateway deadlocks, and subagent execution regression. The other projects focus on narrower domains: NanoBot on chat channel integration and agent memory, ZeroClaw on tool refactoring and a major version branch, PicoClaw on embedded hardware support (LicheeRV, Xiaomi) and nightly stability. OpenClaw’s bugs (e.g., config data loss across version upgrades) have wider impact on users, while issues in other projects (e.g., DeepSeek V4 Flash `reasoning_content` error in NanoBot) affect specific provider models.

## 4. Shared Technical Focus Areas

Several technical requirements appeared in more than one project today:

- **Channel reliability**: Multiple projects reported or fixed channel delivery issues. OpenClaw: Slack silent disconnection (#72808), WhatsApp group auto-reply suppressed (#80669). NanoBot: WeCom file name fallback (#3737), Feishu topic isolation toggle (#3747). PicoClaw: gateway starts with no channels (#2742), channel error on hourly task (#1757).
- **Provider/API compatibility**: Both OpenClaw and NanoBot experienced issues with reasoning models. OpenClaw: reasoning default silently flipped for Claude (#73182), xAI reasoning model gating. NanoBot: DeepSeek V4 Flash `reasoning_content` 400 error (#3760). Also PicoClaw: Xiaomi Mimo API incompatibility (#2859).
- **Memory and context management**: User requests for better session/memory isolation appeared in NanoBot (session interruption memory #3689, multi-user memory isolation #3744) and PicoClaw (context and memory management inspired by magic-context plugin #2774). OpenClaw also has a related request for companion-friendly SQLite transcript seams (#79902).
- **Configuration and migration friction**: OpenClaw fixed config data loss during upgrade (#80257) and a long-standing safeguard compaction config bug (#57901). PicoClaw flagged stale example config and poor migration experience (#2771). NanoBot has no direct equivalent, but DeepSeek V4 Flash configuration confusion (thinking_style toggle) is similar.
- **Security / permission hardening**: OpenClaw fixed SSH transport mapping for websocket security (#73659). NanoBot softened SSRF guard to return non-retryable errors (#3635). PicoClaw is addressing a workspace sandbox bypass via `find /` (#2688).

## 5. Differentiation Analysis

The four projects occupy distinct niches:

- **OpenClaw** is the broadest platform: supports multiple runtimes (Codex, Pi), many channels (Slack, WhatsApp, Telegram, Teams), SSH transport, and extensive configuration. Its community size and bug surface are the largest.
- **NanoBot** positions itself as a lightweight, Python-based agent with strong chat channel support (WeCom, Feishu, WhatsApp) and a modular tool plugin architecture. It emphasizes ease of use for IM-focused deployments.
- **ZeroClaw** appears to be a derivative focusing on observability (runtime tracing, SSE broadcast) and tool infrastructure (rate-limited wrappers, path-guarded tools). Its draft v0.8.0 integration branch suggests a major refactoring away from the parent project.
- **PicoClaw** targets edge and embedded environments: hardware like LicheeRV (RISC-V), Android ADB, OpenVINO Model Server, and ARM builds. It adopts nightly releases and focuses on system-level reliability for constrained devices.

Target users: OpenClaw for developers and power users running multi-channel agents; NanoBot for chat-centric teams (especially in WeCom/Feishu ecosystems); ZeroClaw for operators needing observability and tool governance; PicoClaw for hardware hackers and IoT deployments.

## 6. Community Activity Notes

Based solely on today’s counts and releases:

- **Very high activity**: OpenClaw (500 issues, 500 PRs, 3 releases)
- **Moderate activity**: ZeroClaw (49 PRs, 18 merged), PicoClaw (16 PRs, 17 issues, 1 nightly)
- **Low activity**: NanoBot (8 issues, 19 PRs, no release)

No qualitative maturity scoring is applied; these are raw activity levels. OpenClaw’s release cadence (three betas in one day) indicates continuous integration. ZeroClaw and PicoClaw show sustained community contribution with multiple external authors (yijunyu, drbparadise, guitaripod in ZeroClaw; several PR authors in PicoClaw). NanoBot’s activity is lower but includes infrastructure fixes (dead code removal, ModelPresetConfig).

## 7. Evidence-Backed Observations

1. **Channel reliability is a cross-project pain point.** OpenClaw reports Slack silent disconnection, WhatsApp group suppression, and Telegram DM chatter fabrication. NanoBot fixed WeCom filename handling and added Feishu topic isolation. PicoClaw has gateway channel loading failures (Telegram not loaded in v0.2.8). These independent reports indicate that multi-channel message delivery remains fragile across implementations.

2. **Provider model compatibility issues are widespread and user-visible.** OpenClaw’s reasoning default silently flipping for Claude and xAI gating, combined with NanoBot’s DeepSeek V4 Flash `reasoning_content` 400 error and file-reading behavior, show that both general-purpose and specialized agent projects struggle with model-specific quirks. No project today reported a systematic solution.

3. **Configuration and migration defects erode user trust.** OpenClaw’s config data loss during upgrade (#80257) directly lost user data (channel accounts, credentials). PicoClaw’s outdated example config and poor migration experience (#2771) create setup friction. NanoBot’s reasoning_default saga is a config opacity problem. This pattern of “settings silently changed or lost” appears in three projects.

4. **Community contributors are active across multiple projects.** OpenClaw’s 40 merged PRs came from both core maintainers and external contributors. ZeroClaw had 18 merged/closed PRs from at least 3 distinct contributors. PicoClaw merged 4 PRs with contributions from multiple authors. This suggests a healthy open-source ecosystem where contributors move between projects or apply similar fixes.

5. **Memory and context management is an emerging user requirement, not a solved problem.** NanoBot users request session interruption memory and multi-user isolation. PicoClaw has a feature request for magic-context-inspired memory management. OpenClaw users ask for structured transcript access. No project today introduced a new memory subsystem; the needs remain at the request stage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-13

## Today's Activity Brief
Over the past 24 hours, 8 issues were updated (4 open, 4 closed) and 19 pull requests saw activity (9 open, 10 merged/closed). The maintainers merged several infrastructure and channel fixes, including a Feishu topic isolation configuration switch, removal of the `ask_user` tool, and a plugin architecture for tools. A series of bugs related to the DeepSeek V4 Flash model (reasoning content injection, file reading) were reported and partially resolved. No new releases were published.

## Releases
No new releases. The latest version remains **v0.1.5.post3**.

## Project Progress
**10 PRs were merged or closed in the last 24 hours** (links to closed PRs):

- [#3759](https://github.com/HKUDS/nanobot/pull/3759) — **WebUI**: default to new chat on load and preserve scroll on settings return (closed).
- [#3757](https://github.com/HKUDS/nanobot/pull/3757) — **Agent**: remove `ask_user` tool and interrupt-based control flow (closed).
- [#3758](https://github.com/HKUDS/nanobot/pull/3758) — **Provider (Bedrock)**: preserve `toolConfig` for history to avoid Converse rejection (closed).
- [#3755](https://github.com/HKUDS/nanobot/pull/3755) — **Chore**: remove 103 lines of dead code verified via vulture + coverage (closed).
- [#3714](https://github.com/HKUDS/nanobot/pull/3714) — **Config**: add `ModelPresetConfig` and runtime preset switching (closed).
- [#3635](https://github.com/HKUDS/nanobot/pull/3635) — **Agent**: soften SSRF guard – return a non-retryable tool error instead of aborting the turn (closed).
- [#3747](https://github.com/HKUDS/nanobot/pull/3747) — **Channel (Feishu)**: add `topic_isolation` config switch (closed).
- [#3738](https://github.com/HKUDS/nanobot/pull/3738) — **Provider (VolcEngine)**: set `supports_max_completion_tokens` to prevent `max_tokens` / `max_completion_tokens` conflict (closed).
- [#3729](https://github.com/HKUDS/nanobot/pull/3729) — **Tools**: refactor into plugin architecture with self-describing tools (closed).
- [#3751](https://github.com/HKUDS/nanobot/pull/3751) — **Channel (WeCom)**: fix filename fallback when payload omits `file.name` (closed, fixes [#3737](https://github.com/HKUDS/nanobot/issues/3737)).

## Community Hot Topics
Most active issues by comment count:

- **#3689** ([link](https://github.com/HKUDS/nanobot/issues/3689)) — **Enhancement**: Interrupting a session loses previous chat history. 4 comments. Users report that breaking a loop causes the model to forget context and restart from scratch. The underlying need is for persistent session memory even after interruptions.
- **#3744** ([link](https://github.com/HKUDS/nanobot/issues/3744)) — **Enhancement**: Multi-user session-level `MEMORY.md` isolation. 3 comments. Users ask how `USER.md` / `MEMORY.md` should work when multiple IM users share a single agent, and what the `session/` directory role is.
- **#3692** ([link](https://github.com/HKUDS/nanobot/issues/3692)) — **Enhancement**: Feishu group topic isolation toggle (1 reaction, 1 comment). This request was addressed by PR [#3747](https://github.com/HKUDS/nanobot/pull/3747), merged today.

Other issues with active discussion (though fewer comments):
- **#3760** ([link](https://github.com/HKUDS/nanobot/issues/3760)) — DeepSeek V4 Flash reasoning_content 400 error (open, 1 comment).
- **#3754** ([link](https://github.com/HKUDS/nanobot/issues/3754)) — DeepSeek V4 Flash ignores external file content (open, 1 comment).

## Bugs & Stability
Three bugs were reported or updated in the last 24 hours (ranked by severity):

1. **Critical**: **DeepSeek V4 Flash `reasoning_content` 400 error**
   [#3760](https://github.com/HKUDS/nanobot/issues/3760) (open) — API returns `invalid_request_error` because `reasoning_content` from thinking mode must be passed back. Also [#3753](https://github.com/HKUDS/nanobot/issues/3753) (closed) reported the same issue; the resolution is unclear (workaround: switch to `deepseek-chat` or disable `thinking_style`). No fix PR yet.

2. **Medium**: **DeepSeek V4 Flash ignores external file content**
   [#3754](https://github.com/HKUDS/nanobot/issues/3754) (open) — Model skips `read_file` tool calls for small/common-knowledge files and invents content. This does not occur with large files.

3. **Low (fixed)**: **WeCom file name `"unknown"`**
   [#3737](https://github.com/HKUDS/nanobot/issues/3737) (closed) — Files saved as `"unknown"` due to missing `file.name` fallback. Fixed in PR [#3751](https://github.com/HKUDS/nanobot/pull/3751).

Additionally, a fix for blank Codex failures was proposed in PR [#3762](https://github.com/HKUDS/nanobot/pull/3762) (open), which normalizes blank/timeout/transport exceptions into retryable errors.

## Feature Request Clusters
Multiple feature requests converge on **context and memory management**:

- **Session interruption memory** ([#3689](https://github.com/HKUDS/nanobot/issues/3689))
- **Multi-user memory isolation** ([#3744](https://github.com/HKUDS/nanobot/issues/3744))
- **Feishu topic isolation toggle** ([#3692](https://github.com/HKUDS/nanobot/issues/3692), now merged in [#3747](https://github.com/HKUDS/nanobot/pull/3747))

**Model switching and failover**:

- **`/model` slash command** ([#3742](https://github.com/HKUDS/nanobot/issues/3742), closed) — request to hot-switch provider/model.
- **Model preset + fallback** — implemented in PR [#3714](https://github.com/HKUDS/nanobot/pull/3714) (closed) and PR [#3756](https://github.com/HKUDS/nanobot/pull/3756) (open, adds `fallback_models`).

**New provider integrations**:

- **Qiniu** ([#3643](https://github.com/HKUDS/nanobot/pull/3643), open)
- **Atomic Chat** ([#3750](https://github.com/HKUDS/nanobot/pull/3750), open)

**Streaming / UX improvements**:

- **Stream tool progress SSE events** ([#3745](https://github.com/HKUDS/nanobot/pull/3745), open)
- **Display reasoning content during streaming** ([#3655](https://github.com/HKUDS/nanobot/pull/3655), open)
- **WhatsApp typing indicator and emoji reaction** ([#3761](https://github.com/HKUDS/nanobot/pull/3761), open)

**Long-running tasks**:

- **LongTaskTool** for multi-step agent tasks ([#3460](https://github.com/HKUDS/nanobot/pull/3460), open).

## User Feedback Summary
Real pain points expressed in today’s data:

- **Context loss on interruption**: Users want the agent to remember progress when they interrupt a looping task, rather than starting over.
- **Shared agent confusion**: When multiple IM users interact with the same agent, the global `USER.md` / `MEMORY.md` files mix personal contexts – users need per-session isolation.
- **Feishu topic isolation lacks control**: Sending files to a Feishu group creates separate topics, breaking workflows that require processing multiple files together. The new toggle addresses this.
- **DeepSeek V4 Flash compatibility broken**: Both the `reasoning_content` bug and the file-reading issue block use of DeepSeek’s latest models. Users are forced to fall back to `deepseek-chat` or disable features.
- **WeCom file name missing**: Files arriving without a `file.name` in the payload were saved as `"unknown"`, causing the LLM to see meaningless file references. Fixed today.
- **Need for runtime model switching**: Users in regions with unstable API endpoints (e.g., mainland China) want a `/model` command to switch providers dynamically.

## Backlog Watch
The following open PRs and issues have been awaiting maintainer attention for an extended period:

- **PR [#3460](https://github.com/HKUDS/nanobot/pull/3460)** (LongTaskTool) — Created **2026-04-26**, no maintainer comments visible. This is the oldest open PR.
- **PR [#3655](https://github.com/HKUDS/nanobot/pull/3655)** (Display reasoning content) — Created **2026-05-06**, still open.
- **PR [#3643](https://github.com/HKUDS/nanobot/pull/3643)** (Qiniu provider) — Created **2026-05-06**, open.
- **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689)** (Session interruption memory) — Created **2026-05-08**, open with 4 comments, no official maintainer response noted.
- **Issue [#3744](https://github.com/HKUDS/nanobot/issues/3744)** (Multi-user memory) — Created **2026-05-11**, open.

These items may benefit from maintainer triage or comment.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-05-13

## Today's Activity Brief
In the past 24 hours, the repository saw 10 issues updated (5 open, 5 closed) and 49 pull requests updated (31 open, 18 merged/closed). No new releases were published. Notable activity includes the ongoing integration/v0.8.0 branch (PR #6398) which remains a large draft, and a flurry of smaller bug-fix PRs (e.g., #6600, #6599, #6598, #6597) from several contributors addressing provider certificate handling, workspace profile loading, and vision capability detection.

## Releases
*None.*

## Project Progress
The following pull requests were merged or closed today (18 total; key examples):

- **#5986** (closed) – `feat(observability): add runtime tracing and SSE broadcast for agent turn lifecycle` – Added comprehensive observability instrumentation. Superseded by #6553.
- **#5772** (closed) – `refactor(tools): delegate rate-limiting to wrappers for glob_search and content_search` – Removed inline rate-limiting guards.
- **#4947** (closed) – `refactor(tools): apply RateLimitedTool+PathGuardedTool to search tools` – Contributed to tool infrastructure cleanup.
- **#4954** (closed) – `refactor(tools): delegate rate-limiting to RateLimitedTool in network/skill tools` – Continued the pattern for BrowserTool, HttpRequestTool, etc.
- **#4953** (closed) – `refactor(tools): delegate rate-limiting to RateLimitedTool in ClaudeCodeRunnerTool` – Small cleanup.

Additionally, several bug-fix issues were closed (#6097, #6422, #6415, #5453, #6556) with corresponding PRs that are not individually listed but resolved those issues.

## Community Hot Topics

### Most Active Issues (by comment count)
- **#3090** [Feature: Wecom(WxWork) channel support] – 4 comments. Users are requesting native Wecom channel integration, citing existing Node.js SDK and openclaw extensions as reference.
- **#6097** [Bug: Local image reading failed] – 3 comments (closed). Discussed fix for skill-generated images using local paths that couldn't be read by the API model.
- **#5316** [Feature: Propose SearXNG search support] – 3 comments. Want privacy-focused search provider and DuckDuckGo CAPTCHA detection. Currently labeled `needs-maintainer-review`.

### Most Notable Pull Request (by scope)
- **#6398** (draft, 49 labels) – `Integration/v0.8.0` – A massive integration branch covering Schema v3 migration, 153+ commit reconciliation, and changes across nearly every subsystem. Still marked "DO NOT APPROVE/MERGE – THIS IS STILL A DRAFT". It has been open since 2026-05-05 and continues to receive updates.

## Bugs & Stability

### Open Bugs (highest severity)
- **#6120** [S1 – workflow blocked] – Onboarding tool prompts for OpenAI API key even when user wants to use Codex subscription. Open, labeled `priority:p1`. No fix PR yet.
- **#6074** [enhancement/audit] – 153 commits lost in a bulk revert; tracking for recovery. Open, high risk.

### Closed Bugs (fixed in last 24h)
- **#6097** – Local image reading failed (closed).
- **#6422** – `cron_add` schedule error message unhelpful for plain string input (closed).
- **#6415** – TTS voice replies silently disabled with `stream_mode = "partial"` (closed).
- **#5453** – WebSocket `/ws/chat` does not process `[IMAGE:]` markers (closed).
- **#6556** – Discord channel media pipeline broken (inbound images never processed, outbound markers leak) (closed).

## Feature Request Clusters

Users are requesting enhancements in three main areas:

1. **New Channels & Providers**
   - **#3090** – Wecom (WxWork) channel support (accepted, no stale).
   - **#5316** – SearXNG search provider (needs maintainer review).

2. **Media & Image Generation**
   - **#6563** – Comfy Cloud / ComfyUI as shared media provider, with groundwork for `gen_video` tool (needs maintainer review).
   - PR **#6555** (open) – Adds RunPod ComfyUI image generation provider.

3. **Observability & Recovery**
   - **#6074** – Audit and recover 153 commits lost in a rollback.
   - PR **#6553** (open) – Restore SSE `/logs` stream and add build-stamped version.

No single cluster dominates; requests span channel support, tooling, and infrastructure improvements.

## User Feedback Summary

- **Pain points** reported today:
  - Onboarding confusion when selecting Codex: system still asks for OpenAI API key (#6120).
  - Discord media handling completely broken (#6556).
  - TTS silently stops working with `stream_mode=partial` (#6415).
  - Local image paths from skills not accessible to models (#6097, closed).
  - WebSocket markers `[IMAGE:]` treated as plain text (#5453, closed).

- **Use cases** expressed:
  - Enterprise Wecom integration (#3090).
  - Privacy-focused search via SearXNG (#5316).
  - Self-hosted Home Assistant control via new tool PR (#6464).

- **Satisfaction signals**:
  - Community contributors are actively submitting fixes (yijunyu, drbparadise, guitaripod) – 7 PRs from these authors merged/opened in 24h.
  - The large refactoring of rate-limiting wrappers (#5772 et al.) was completed and merged, indicating maintenance progress.

## Backlog Watch

Items that may require maintainer attention or have been waiting for review:

- **#5316** (Feature: SearXNG search support) – Labeled `needs-maintainer-review` since 2026-04-05. No maintainer comment yet.
- **#6563** (Feature: Comfy Cloud / ComfyUI media provider) – Labeled `needs-maintainer-review` since 2026-05-10. One comment.
- **#6074** (Audit lost commits) – Open since 2026-04-24, high risk, still no clear resolution path.
- **#6398** (Integration/v0.8.0 draft) – While actively worked, it remains a draft with a warning not to merge. Feedback requested but not yet fully addressed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-13

## 1. Today's Activity Brief
Activity remained high with **17 issues** updated in the last 24 hours (11 open, 6 closed) and **16 pull requests** updated (12 open, 4 merged/closed). A new **nightly build (v0.2.8-nightly.20260513)** was released automatically from the `main` branch, incorporating the latest fixes and features. Notable merged PRs included documentation improvements for agent self-evolution and LicheeRV-Claw hardware news, as well as fixes to the embedded workspace file process and onboarding advisory. A fresh bug was reported today (#2859) involving Xiaomi Mimo integration failures in multi-turn conversations.

## 2. Releases
- **`nightly`**: Nightly Build
  Tag: **v0.2.8-nightly.20260513.223ebdf0**
  Automated build; may be unstable.
  Full changelog: [v0.2.8…main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  No explicit breaking changes or migration notes provided.

## 3. Project Progress
Four PRs were merged or closed in the last 24 hours:

- **#2505** *(closed)* – CLI: Improve embedding of workspace files to include only the latest contents.
- **#2490** *(closed)* – CLI: Fix onboard advisory about configuration files (corrects steps outdated since v0.2.5).
- **#2852** *(closed)* – docs: Add evolution config controls (documentation and Web UI support for agent self-evolution).
- **#2854** *(closed)* – docs: Add LicheeRV-Claw AliExpress news (hardware announcement documentation).

Additionally, two open PRs saw updated commits:
- **#2857** *(open)* – feat(tools): Show unified diff for `edit_file` edits (improves transparency).
- **#2858** *(open)* – fix(exec): Allow quoted heredoc Markdown bodies without blocking literal backticks.

## 4. Community Hot Topics
| Issue/PR | Title | Comments | Reactions | Link |
|----------|-------|----------|-----------|------|
| #2513 (closed) | [BUG] gateway start abnormal | 9 | 0 👍 | [Link](https://github.com/sipeed/picoclaw/issues/2513) |
| #1950 (open) | [Feature] Streaming Output for Web Chat | 8 | 0 👍 | [Link](https://github.com/sipeed/picoclaw/issues/1950) |
| #1757 (open) | [BUG] channel error when agent performs hourly task | 8 | 0 👍 | [Link](https://github.com/sipeed/picoclaw/issues/1757) |
| #2404 (open) | [Feature] Add streaming HTTP request config | 6 | 1 👍 | [Link](https://github.com/sipeed/picoclaw/issues/2404) |
| #2444 (closed) | [Feature] Store MCP server secrets in `.security.yml` | 5 | 2 👍 | [Link](https://github.com/sipeed/picoclaw/issues/2444) |
| #2859 (open) | [BUG] Issues integrating Xiaomi Mimo model | 0 | 1 👍 | [Link](https://github.com/sipeed/picoclaw/issues/2859) |

**Analysis:** Users are actively requesting **streaming support** (#1950, #2404) and improved **secret/security management** (#2444). The most commented issues involve gateway startup problems (#2513) and channel-related errors (#1757, #2859). The new Xiaomi Mimo integration (#2859) is already attracting attention despite being filed today.

## 5. Bugs & Stability
- **High severity**:
  - **#2720** – Singleton PID check does not verify process identity, causing crash loop when PID is reused. **Fix PR #2813** (open) addresses this.
  - **#2688** – `find /` can enumerate paths outside workspace sandbox (security bypass). **Fix PR #2693** (open).
- **Medium severity**:
  - **#2742** – Gateway starts with no channels in v0.2.8 (Telegram not loaded). Reported but no fix PR yet.
  - **#2753** – Building from source yields no `picoclaw-launcher` binary (missing build step).
- **New today**:
  - **#2859** – Xiaomi Mimo multi-turn conversation fails after 2–3 rounds with `400 Param Incorrect`. No fix PR yet.

Other resolved bugs: #2513 (gateway start abnormal) was closed; #2694 (x509 certificate error in Android ADB) closed; #2646 (NXP i.MX93 compatibility) closed as documentation.

## 6. Feature Request Clusters
Multiple requests fall into recurring themes:

- **Streaming & real-time output**
  - #1950: Streaming output for Web Chat
  - #2404: Configurable streaming HTTP requests to LLM backend
  - #2755 (PR): Adds streaming `reasoning_content` and video media support (OpenAI-compatible providers)

- **Security & secret management**
  - #2444: Store MCP server env secrets in `.security.yml` (closed, likely merged)
  - #2688 (bug) already fixed by #2693

- **Build & deployment**
  - #2625: Provide compiled builds with WhatsApp support for ARM
  - #2753: Build-from-source missing launcher (bug)
  - #2695: Documentation request for `libpicolaw.so` in Android releases

- **Configuration & migration UX**
  - #2771: Enhance config reliability and migration experience (example config outdated, validation gaps)
  - #2852 (merged): Added evolution config UI controls

- **Context & memory**
  - #2774: Context and memory management inspired by magic-context plugin
  - #2491 (PR): Add session management commands (`/status`, `/compact`, `/new`)

- **New provider/tool integrations**
  - #2763 (PR): Gemini web search provider
  - #2703 (PR): Intel OpenVINO Model Server support
  - #2647 (PR): Enable DuckDuckGo as default web_search provider
  - #2698: Mission Control integration support

- **Performance**
  - #2781 (PR): Reduce skill catalog token usage on tool iterations

## 7. User Feedback Summary
Real pain points expressed by users:

- **Gateway reliability**: PID reuse causing crash loop (#2720), channels not loading (#2742), startup abnormal (#2513).
- **Build friction**: "launcher does not exist" after source build (#2753), lack of WhatsApp support in default ARM builds (#2625), missing documentation for Android `.so` (#2695).
- **Security concerns**: Workspace sandbox bypass via `find /` (#2688).
- **Integration issues**: Xiaomi Mimo API incompatibility (#2859), certificate validation in ADB shell (#2694).
- **Configuration confusion**: Outdated example config, missing YAML tags for `web_search`, poor migration experience (#2771, #2647).
- **Missing features**: Streaming output, context management, Mission Control integration, better session control.

Satisfaction signals: successful testing on NXP i.MX93 EVK (#2646) and ongoing community contributions (PRs from multiple authors, feature extensions).

## 8. Backlog Watch
Issues/PRs that have remained open for an extended period and may need maintainer attention:

- **#1950** (Feature: Streaming Output for Web Chat) – Opened 2026-03-24, 2 months old, still open with 8 comments. Roadmap-aligned.
- **#1757** (Bug: channel error on hourly task) – Opened 2026-03-18, ~2 months old, 8 comments. Stale, no fix.
- **#2771** (Feature: Config reliability and migration) – Opened 2026-05-05, moderate age, no maintainer response yet.
- **#2753** (Bug: Build from source missing launcher) – Opened 2026-05-03, 10 days, no fix.
- **#2742** (Bug: Gateway no channels v0.2.8) – Opened 2026-05-01, 12 days, no fix.
- **#2703** (PR: Intel OpenVINO Model Server) – Opened 2026-04-28, stale; awaiting review.
- **#2647** (PR: Enable YAML web_search config) – Opened 2026-04-24, stale; needs review.
- **#2491** (PR: Session management commands) – Opened 2026-04-12, stale; valuable UX feature.

</details>