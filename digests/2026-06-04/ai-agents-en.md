# OpenClaw Ecosystem Digest 2026-06-04

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-06-04 02:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest – 2026-06-04

## 1. Today's Activity Brief
In the last 24 hours, 500 issues and 500 pull requests were updated, with 119 issues closed and 93 PRs merged or closed. Three new releases were published, including a beta of 2026.6.2 which replaces the old dangerous-code scanner with an operator install policy for plugin and skill installs. A cluster of open issues continues to focus on session state corruption, message loss, and recovery regressions, while merged PRs today include control-plane scaffolding for tranche A/B registries and a fix for Telegram reconnect drain re-entry.

## 2. Releases
Three releases landed, all dated June 2–3, 2026:

- **v2026.6.2-beta.1** (2026.6.2) — Highlights: Plugin and skill installs now use an **operator install policy** instead of the old dangerous-code scanner path, with clearer surfaces in doctor, CLI, ClawHub, and troubleshooting for all install types (#89516). (Release notes cut off after “Te”.)
- **v2026.6.1** — Highlights: Agents and CLI-backed runtimes recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries (#88129, #88136, #88141, #88162, #88182). Channels and mobile delivery are steadier across Telegram, WhatsApp, iMessage, Slack.
- **v2026.6.1-beta.3** — Identical highlights to v2026.6.1; presumably the beta preceded the stable release.

No breaking changes or migration notes were explicitly listed beyond the install policy shift.

## 3. Project Progress
Of the 93 merged/closed PRs today, two notable ones from the top 30 by comment count:

- **#90127** (CLOSED) – *feat(control-plane): add tranche A/B registry and CI gate* – Adds contracts, schemas, registries, queues, reports, and dashboards for a control-plane scaffold, plus a read-only CI gate.
- **#90087** (CLOSED) – *feat(control-plane): add tranche A/B registry and CI gate* – Similar scaffolding, overlapping description; likely a duplicate or replacement.

Other PRs remain open but show active work:
- **#90066** – *fix(telegram): suppress reconnect drain re-entry while delivery is in-flight* – Addresses a stall reported in #89953.
- **#90123** – *fix(auto-reply): count message tool sends as delivery* – Fixes auto-reply not counting tool-delivered messages as final delivery.
- **#89183** – *fix(tui): keep local slash commands out of model prompts* – Closes #71592.
- **#88504** – *feat(memory): add multi-slot memory role architecture* – Adds purpose-specific memory role slots so plugins can compose instead of replacing each other.

## 4. Community Hot Topics
The most active issues (by comment count, 17 down to 12 comments) center on session state and message delivery:

- **#88838** (17 comments) – Track core session/transcript SQLite migration via accessor seam. Goal: avoid one large rewrite by using branch-by-abstraction. Community discussing migration strategy and review process.
- **#65161** (14 comments) – Heartbeat isolated mode stalls: cadence doesn’t continue after initial pulse, `heartbeat last` mislabels exec-events, heartbeat-state writer appears missing.
- **#67035** (14 comments, closed) – Windows chat UI regression (v2026.4.14): input swallowed, streamed replies invisible until refresh. Fixed in a later release?
- **#88312** (12 comments) – **Regression**: Codex app-server turn-completion stall returns (“Codex stopped before confirming the turn was complete”) reappearing after a previous fix (#85107). Users report reliable failure on 2026.5.27+.

These issues share a common underlying need: **session state integrity and reliable message delivery across channel and agent runtime boundaries**. The heartbeat and stall regressions indicate ongoing fragility in the session lifecycle.

## 5. Bugs & Stability
Multiple high-severity regressions and crashes remain open:

- **P1 – Regression** – **#88312**: Codex turn-completion stall (recurrence of #84076, previously fixed by #85107). No fix PR linked yet.
- **P1 – Regression** – **#67035** (closed): Windows chat UI regression – resolved? Likely fixed in a later release.
- **P1 – Open** – **#68113**: Mattermost slash commands return 503 “not yet initialized” in v2026.4.15. Labeled `queueable-fix`.
- **P1 – Open** – **#63216**: Repeated hard resets on same session key despite high `reserveTokensFloor`; retry loop re-injects bootstrap context.
- **P1 – Open** – **#86214**: Codex app-server client closes mid-turn during image/tool requests with large `logs_2.sqlite`.
- **P2 – Open** – **#81484**: Discord guild reply regression in v2026.5.7: malformed send payloads and repeated outbound loops.
- **P2 – Open** – **#63673**: Keychat bridge receives no inbound messages after update to 2026.4.8.
- **P2 – Open** – **#64810**: Heartbeat/async system events interrupt and swallow in-progress replies in Telegram topic sessions.

Some have linked fix PRs (e.g., #68113 listed `queueable-fix`, #67288 `linked-pr-open`), but no specific fix PRs were visible in the top 30 PR list today.

## 6. Feature Request Clusters
User-requested features with active discussion or implementation PRs:

- **Security/Guardrail Interface** – **#72741**: Standard interface for external security and guardrail checks.
- **Multi-Index Embedding Memory** – **#63990**: Model-aware failover without mixed vector spaces.
- **Remote Reranker Endpoint** – **#64438**: Support for external reranker APIs.
- **Session Warm-Up / Reuse** – **#67000**: Reduce cold-start overhead for embedded agents (active-memory).
- **Per-Job `acceptSilentStop`** – **#76159**: Treat zero-output cron jobs as ok instead of errors.
- **Configurable Upload Size Limit** – **#71142**: For Control UI file uploads (currently hardcoded at 5MB).
- **Anthropic Advisor Tool** – **#63930**: Support for beta server-side tool (`advisor-tool-2026-03-01`).
- **Voice-as-IO for Discord** – **#73699**: Bridge Discord voice channel I/O to text-channel agent session.

Implementations in progress:
- **#88504** (open) – Multi-slot memory role architecture (addresses #63990’s goal of composable memory).
- **#87568** (open) – KaTeX math rendering support (`ui.mathRendering`).
- **#82572** (open) – Persist followup queues across gateway restarts.
- **#90003** (open) – Policy for exec approvals artifact.
- **#73476** (open) – `directReply` flag on tool results to bypass LLM inference.

## 7. User Feedback Summary
User-reported pain points (from issue summaries) indicate frequent session-related frustrations:

- **Session context bloat** – #67419: Bootstrap files re-injected every turn, wasting 20-30% of tokens.
- **Heartbeat interrupts replies** – #64810: “A normal user question can get interrupted.”
- **WebChat messages disappear** – #77136: TUI works fine, WebChat fails to render some assistant messages.
- **Backup fails during cleanup** – #67417: `openclaw backup create` throws `ENOENT` if a session file is deleted in between enumeration and archive.
- **Cron jobs with no output classified as errors** – #76159: User wants `acceptSilentStop` for intentional no-output runs.
- **Model override dropped on session rollover** – #90119 (referenced in PR #90128): `/model` setting silently lost at daily/idle reset.

Satisfaction signals: Closed issue #67035 (Windows UI regression) suggests that important UI fix has been delivered. The steady stream of release notes and many open PRs show active maintainer response.

## 8. Backlog Watch
Several important issues have been open for weeks with no clear fix PR in sight:

- **#65161** (created 2026-04-12, updated 2026-06-03) – Heartbeat isolated mode stalls. Labeled `stale`, `needs-maintainer-review`, `needs-product-decision`. No linked PR.
- **#64500** (2026-04-10) – `globalCircuitBreakerThreshold` blocks per-tool, not per-pair, allowing ping-pong loops to survive. `needs-maintainer-review`, `needs-product-decision`.
- **#63216** (2026-04-08) – Repeated hard resets on same session key. `needs-maintainer-review`, `needs-product-decision`.
- **#63998** (2026-04-10) – Session transcript doomloop: crash-restart cycle inflates transcript until gateway OOMs. `needs-maintainer-review`, `needs-product-decision`.
- **#66661** (2026-04-14, not in top 50 but #86215) – Codex OAuth refresh failures can wedge an agent for hours. `needs-maintainer-review`, `needs-product-decision`.

On the PR side, several have status “waiting on author”:
- **#86806** – fix crashed main sessions via lock-file detection fallback.
- **#87568** – KaTeX math rendering.
- **#90003** – feat(policy): cover exec approvals artifact.
- **#90057** – Polish Workboard operations view (mock-only-proof).

These items would benefit from maintainer review or author updates to move forward.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-04

## 1. Daily Cross-Project Overview

Today’s activity varied significantly by project: OpenClaw saw an order-of-magnitude higher volume (500 issues and 500 PRs updated, three new releases) while NanoBot, ZeroClaw, and PicoClaw ranged from moderate to low activity. All four projects had at least one merged fix or release, but no cross-project coordination or shared release event was noted. Session state reliability and security surfaced as common pain points, though each project addressed them through distinct technical approaches (e.g., MCP session reconnection in NanoBot, session reaping in ZeroClaw, PID singleton checks in PicoClaw, and operator install policy in OpenClaw).

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Releases | Notable Activity |
|---------|---------------|-------------|-------------------|----------|------------------|
| **OpenClaw** | 500 | 500 | 93 | 3 (v2026.6.2-beta.1, v2026.6.1, v2026.6.1-beta.3) | High-volume day; control-plane scaffolding merged; session state corruption remains top open topic |
| **NanoBot** | 33 | 32 | 18 | 0 | MCP session reconnect merged; multi-agent mailbox channel merged; long-running task stall unresolved |
| **ZeroClaw** | 30 | 50 | 3 | 0 | OIDC and pluggable security tracking issues active; RPC session reaping fix in progress; TUI freeze bug open |
| **PicoClaw** | 4 | 10 | 2 | 0 | Go security fix merged; MQTT TLS config merged; PID singleton bug still open with two stale fix PRs |

## 3. OpenClaw Compared With Peers

- **Activity volume**: OpenClaw’s 500 issue updates and 500 PR updates dwarf the other projects (33–50 updates). This reflects its role as a core reference implementation with a larger contributor base and broader feature surface.
- **Technical focus**: OpenClaw’s control-plane tranche A/B registry scaffolding and operator install policy shift are not mirrored in any peer project today. Its session state corruption and stall regressions (e.g., #88312 Codex turn-completion stall) represent a maturity challenge at scale that NanoBot and ZeroClaw have not yet encountered.
- **Community surface area**: OpenClaw had three new releases and 119 closed issues; no other project had a release today. OpenClaw’s issue tracker also contains long-standing backlog items with `needs-maintainer-review` labels (e.g., #65161, #63216), indicating a maintenance bottleneck despite high activity.

## 4. Shared Technical Focus Areas

- **Session lifecycle stability** – Appears in all four projects:
  - OpenClaw: session state corruption (#88838), heartbeat stalls (#65161), Codex turn-completion stall (#88312)
  - NanoBot: MCP session termination (#4168, fix merged), long-running tasks stall (#1022, no fix)
  - ZeroClaw: RPC session reaping after 10 minutes (#7179, fix in progress); TUI freeze on daemon disconnect (#7125)
  - PicoClaw: PID singleton check failure crashes startup (#2720, two fix PRs stale); tool call messages dropped during streaming (#2958, fix PR open)

- **Security hardening** – Emerges in three projects:
  - OpenClaw: replaces dangerous-code scanner with operator install policy (#89516); standard guardrail interface requested (#72741)
  - NanoBot: filesystem tools bypass `restrict_to_workspace` (#143); MCP SSRF safety PR open (#4123); `rm` guard bypass demonstrated (#979)
  - ZeroClaw: pluggable security provider interface (#7142); OIDC authentication for RPC/WSS (#7141); path-policy false positive on quoted tokens (#7133)

- **UI polish** – Three projects had UI-related fixes or bugs:
  - OpenClaw: Windows chat UI regression (#67035, closed); TUI slash commands fix (#89183, merged)
  - NanoBot: WebUI startup timeout fix (#4157); new chat keyboard shortcut (#4181); progress streaming leak (#954, open)
  - ZeroClaw: TUI freeze on disconnect (#7125, open); chat UI blank lines, timestamp placement, missing translation (#6702, #7157, #7139)

- **Multi-agent / agent-to-agent communication** – Only NanoBot had significant activity (mailbox channel merged in PR #3461; A2A orchestration issue filed #4179; cross-instance message bus PR #3992 open), but ZeroClaw’s OIDC and pluggable security features could support multi-tenant deployments.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | ZeroClaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Primary language** | Go (implicit) | Go (implicit) | Rust | Go |
| **Target user** | Full-featured agent framework, plugin ecosystem | Lightweight agent with multi-agent orchestration | Network-aware, security-first agent with TUI | Minimal embedded/small-footprint agent |
| **Key differentiator today** | Control-plane scaffolding for registry/gating; operator install policy | MCP reconnect, mailbox channel, task-specific model config requests | OIDC authentication, pluggable security provider, Rust resource efficiency | Go security fix, MQTT TLS, PID singleton bug (reliability at small scale) |
| **Release cadence** | Multiple beta/stable releases in one week (v2026.6.x) | No new release today; v0.1.4 is recent | No new release today | No new release today; v0.2.9 most recent |
| **Notable architecture** | Tranche A/B registry (control-plane scaffold) | Event-bus refactor in WebUI; composable hooks | RPC surface; cron block scheduler | Streaming HTTP request config pending |

## 6. Community Activity Notes

- **High activity tier**: OpenClaw (500+ updates, 3 releases, 93 merged/closed PRs). The volume is dominated by issue and PR updates; actual merges (93) are still substantial.
- **Medium activity tier**: NanoBot (33 issues, 32 PRs updated, 18 merged) and ZeroClaw (30 issues, 50 PRs, 3 merged). Both saw concentrated technical work but no new releases.
- **Low activity tier**: PicoClaw (4 issues, 10 PRs, 2 merged). The project’s pace is consistent with its focused scope and smaller community.

## 7. Evidence-Backed Observations

1. **Session lifecycle instability is a cross-project theme, but manifestations differ.** OpenClaw faces session state corruption and turn-completion stalls at scale; NanoBot’s MCP session termination was fixed today but long task stalls remain; ZeroClaw’s 10-minute RPC reaping breaks long conversations; PicoClaw’s PID singleton bug prevents startup entirely. Each project struggles with a different part of the session lifecycle, suggesting no universal solution exists yet.

2. **Security is being addressed reactively across all active projects.** OpenClaw replaced a dangerous-code scanner with an operator install policy; NanoBot received reports of filesystem bypasses and `rm` guard failures; ZeroClaw is designing a pluggable security provider and OIDC; PicoClaw fixed a TLS verification loophole and a Go vulnerability. No project appears to have a comprehensive security model beyond point fixes or early RFCs.

3. **Multi-agent orchestration is an emerging focus only in NanoBot.** The mailbox channel merge (#3461), A2A orchestration issue (#4179), and cross-instance message bus (#3992) represent concrete progress toward multi-agent teams. OpenClaw, ZeroClaw, and PicoClaw have no equivalent feature work visible today, indicating that NanoBot is the current leader in this area.

4. **UI polish remains a low-severity but persistent burden across projects with web or terminal interfaces.** OpenClaw fixed Telegram reconnect and TUI slash commands; NanoBot added WebUI timeout and keyboard shortcuts; ZeroClaw has multiple open UI artifacts (blank lines, timestamps, drift banners). These are not blocking but degrade user experience incrementally.

5. **No clear cross-project signal for a single dominant technical direction.** OpenClaw’s control-plane work, NanoBot’s agent-to-agent focus, ZeroClaw’s Rust security emphasis, and PicoClaw’s minimalism are distinct. The data does not support the claim that any one approach is becoming standard.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-06-04

## Today's Activity Brief

Activity was high over the last 24 hours, with 33 issues and 32 PRs updated. No new releases were tagged. The project saw 18 merged/closed PRs, mainly focused on MCP session reconnection, WebUI stability, agent hook lifecycle, and code quality fixes. Community discussions continued to center on multi-agent orchestration, memory management, and tool security.

## Releases

No new releases.

## Project Progress

18 PRs were merged or closed today. Notable merged changes include:

- **MCP Session Reconnection (#4171)** by @chengyongru: Automatically reconnects terminated MCP sessions (e.g., `Session terminated` or `Connection closed`) and retries the current call once on a fresh session. Adds protection against duplicate reconnects.
- **QQ Channel Fix (#4180)** by @yorkhellen: Fixes pairing code delivery for unauthorized C2C users in the QQ channel.
- **WebUI Startup Timeout Fix (#4157)** by @chengyongru: Adds a `fetchWithTimeout` helper to prevent startup requests from hanging indefinitely; applies to bootstrap and session-list API calls.
- **Runtime Event Bus Refactor (#4135)** by @chengyongru: Migrates WebUI runtime state to an event-bus architecture, decoupling turn/run/model/goal notifications from hard-wired state variables.
- **Long-Task / Sustained Goal Fix (#3999)** by @chengyongru: Prevents `AgentRunner` from exiting prematurely when a `/goal` objective is active but the LLM produces a final text response without calling `complete_goal`.
- **Dream Refactor (#3990)** by @chengyongru: Replaces the two-phase Dream class with a simpler cron + `process_direct` flow, building Dream prompts from unprocessed memory history.
- **Provider Stream Fix (#3932)** by @chengyongru: Fixes duplicate `tool_call_id` values in OpenAI-compatible stream parsing, which caused API rejection.
- **Memory Prompt Enhancement (#3952)** by @chengyongru: Improves Dream and Consolidator prompts to reduce redundancy and produce more MECE (Mutually Exclusive, Collectively Exhaustive) long-term memory entries.
- **Multi-Agent Mailbox Channel (#3461)** by @chengyongru: Introduces a file-system-based mailbox channel plugin for inter-agent communication, with atomic file I/O, anti-loop protection, and zero modifications to existing code.
- **Auth Command (#3221)** by @chengyongru: Adds `nanobot auth` command with OAuth Device Flow and `--auth-key` support, auto-configuring a default provider so `nanobot agent` works directly after authentication.
- **Import Order Fix (#4174)** by @chengyongru: Restores top-level import order compliance.
- **Bocha Web Search Provider (#4182)** by @morandot: Adds Bocha (博查) as a new web search provider, serving as the search API provider for DeepSeek and many AI applications in China.
- **WebUI New Chat Shortcut (#4181)** by @axelray-dev: Adds `Cmd/Ctrl+Shift+O` to start a new chat, matching ChatGPT/Claude.ai/Gemini conventions.

Also re-opened / in-progress PRs:
- **Azure AAD Authentication (#4126)** by @kunalk16: Adds Azure Identity-based auth (without API key) for Azure OpenAI provider.
- **Agent Hook Lifecycle (#4176)** by @chengyongru: Adds run-level `AgentHook` callbacks (`before_run`, `after_run`, `on_error`, `on_finally`) with a `CompositeHook` fan-out pattern.
- **Cross-Instance Message Bus (#3992)** by @ysofologis: Adds agent collaboration via a shared message bus between multiple agent instances.
- **MCP SSRF Safety (#4123)** by @yu-xin-c: Validates MCP SSE and Streamable HTTP URLs with a shared SSRF guard before client construction.

## Community Hot Topics

### Most Active Issues

1. **Issue #222: Multi agents setup – Supported?** (10 comments, +7 👍) — [Link](https://github.com/HKUDS/nanobot/issues/222)
   Author @snimavat asks whether multi-agent setup is supported and requests a guide. This is a long-standing request (Feb 2026) with sustained community interest.

2. **Issue #979: “AI bypassed rm prevention”** (5 comments) — [Link](https://github.com/HKUDS/nanobot/issues/979)
   User demonstrates that the `rm` command guard is ineffective by instructing the agent to delete backup directories. Highlights an ongoing security/guardrail concern.

3. **Issue #1022: Long-running tasks fail silently** (4 comments, +3 👍) — [Link](https://github.com/HKUDS/nanobot/issues/1022)
   @eddielu reports that nanobot frequently returns "Starting execution now" or similar messages but does nothing for tasks like scraping multiple web pages.

4. **Issue #80: Lightweight memory retrieval** (4 comments) — [Link](https://github.com/HKUDS/nanobot/issues/80)
   @WangCheng0116 proposes adding BM25 or TF-IDF retrieval to inject only top-k relevant chunks instead of full/fixed memory, aiming to reduce token usage as memory scales.

5. **Issue #954: Progress streaming leaks internal tool calls** (3 comments, +1 👍) — [Link](https://github.com/HKUDS/nanobot/issues/954)
   @ivyrebot reports that internal tool calls (e.g., exec, read_file) are broadcast to the user chat after upgrading to v0.1.4, breaking the user-facing isolation.

6. **Issue #912: Task-specific model configuration** (3 comments, +3 👍) — [Link](https://github.com/HKUDS/nanobot/issues/912)
   @mmhy2003 requests the ability to configure separate models for conversational, tool-use, and browser-use tasks.

7. **Issue #937: Too many hallucinations in exec tool** (2 comments) — [Link](https://github.com/HKUDS/nanobot/issues/937)
   @jaydenchoe reports that the exec tool hallucinates outputs even with SOTA LLMs, leading them to suspend evaluation of the framework.

8. **Issue #143: Filesystem tools ignore restrict_to_workspace** (2 comments, +4 👍) — [Link](https://github.com/HKUDS/nanobot/issues/143)
   @skhsu4321 identifies a security gap where direct file tools (`ReadFileTool`, `WriteFileTool`, etc.) bypass the `restrict_to_workspace` config.

9. **Issue #97: Core architecture improvements (Memory, Security, Testing)** (1 comment, +6 👍) — [Link](https://github.com/HKUDS/nanobot/issues/97)
   @Cryptoistaken identifies several enhancement areas after a codebase deep-dive, receiving strong community upvote.

10. **New issues from today:**
    - **Issue #4179: Agent-to-Agent (A2A) orchestration via peer subagents** — [Link](https://github.com/HKUDS/nanobot/issues/4179)
      @FlowFalcon proposes native multi-agent team orchestration (Supervisor → Researcher → Writer) with shared memory and handoff protocol.
    - **Issue #4178: WebUI new chat keyboard shortcut (Ctrl+Shift+O)** — [Link](https://github.com/HKUDS/nanobot/issues/4178)
      @fuleinist requests a dedicated keyboard shortcut for starting a new chat; a PR (#4181) was already submitted.
    - **Issue #4168: MCP server unreachable after random time (Session terminated)** — [Link](https://github.com/HKUDS/nanobot/issues/4168)
      @tjc0726 reports that MCP connections drop with "McpError: Session terminated" and require nanobot restart; a fix PR (#4171) was merged the same day.

### Most Active PRs

**PR #4171** (MCP reconnect, merged) — [Link](https://github.com/HKUDS/nanobot/pull/4171)
Most impactful merged PR today, directly addressing the MCP session-drop bug reported in #4168.

**PR #4180** (QQ channel fix, merged) — [Link](https://github.com/HKUDS/nanobot/pull/4180)
Fixes a functional gap in QQ channel authorization.

**PR #4126** (Azure AAD auth) — [Link](https://github.com/HKUDS/nanobot/pull/4126)
Open PR that would add Azure identity-based authentication to Azure OpenAI provider; progress being tracked.

**PR #3992** (Cross-agent message bus) — [Link](https://github.com/HKUDS/nanobot/pull/3992)
Open PR @ysofologis implementing cross-agent collaboration via a message bus; currently undergoing review.

**PR #4182** (Bocha web search) — [Link](https://github.com/HKUDS/nanobot/pull/4182)
Recently opened PR adding a China-focused search provider with community interest.

## Bugs & Stability

**High Severity**

1. **MCP Session Termination (fix merged)**
   - Bug: #4168 — MCP servers unreachable after random time with `McpError: Session terminated`; requires restart.
   - Fix: #4171 (merged) — Auto-reconnects dead MCP sessions and retries once.

2. **Long-Running Tasks Stall**
   - Bug: #1022 — Tasks like scraping spreadsheets return "Starting execution now" but do nothing.
   - Status: No fix PR yet; remains open.

3. **Exec Tool Hallucinations**
   - Bug: #937 — exec tool produces hallucinated outputs with SOTA models, causing user to halt evaluation.
   - Status: No fix PR yet; user reports as critical for tool reliability.

**Medium Severity**

4. **Progress Streaming Leaks Internal Tool Calls**
   - Bug: #954 — After v0.1.4, tool calls (exec, read_file) appear in user chat.
   - Status: Open, reported by @ivyrebot.

5. **Filesystem Tools Bypass Workspace Restriction**
   - Bug: #143 — `ReadFileTool`, `WriteFileTool`, etc. ignore `restrict_to_workspace` config.
   - Status: Open; has +4 👍 and security implications.

6. **Media Files Never Cleaned**
   - Bug: #896 — Telegram/Discord media files accumulate unboundedly in `~/.nanobot/media/`.
   - Status: Open; reported by @nikolasdehor.

**Low Severity**

7. **Duplicate tool_call_id in Stream Mode**
   - Bug: #3932 (fix merged) — OpenAI-compatible stream parsing produced duplicate tool_call_ids causing API rejection.
   - Fix: Included in today's merged PRs.

8. **WebUI Startup Hangs**
   - Bug: #4157 (fix merged) — Startup fetch requests could hang indefinitely.
   - Fix: Merged today with timeouts.

## Feature Request Clusters

### Multi-Agent Orchestration (High Activity)
- **#222**: Multi-agent setup support (open since Feb, +7 👍)
- **#1006**: Subagent control plane (list/kill commands) (open since Feb)
- **#1012**: Subagent profiles with configurable tools and skills (open since Feb)
- **#4179**: Native A2A orchestration via peer subagents (filed today)
- **#3992**: Cross-instance message bus PR (open, under review)
- **#3461**: Mailbox channel plugin (merged today)

These all cluster around the theme of making nanobot a platform for multi-agent teams, with both operator-control and agent-to-agent communication.

### Memory & Context Management
- **#80**: Lightweight memory retrieval (BM25/TF-IDF) (open since Feb)
- **#3952**: MECE long-term memory prompts (fix merged today)
- **#3920**: Compaction benchmark + prompt optimization (merged)
- **#3990**: Dream refactor (merged)

The community is pushing for scalable, non-redundant memory systems that don't inflate context windows.

### Security & Sandboxing
- **#143**: Filesystem tools bypass restrict_to_workspace (open, +4 👍)
- **#931**: Native sandbox interface for untrusted plugins (open since Feb)
- **#979**: rm command prevention bypass demonstrated (closed today)
- **#940**: Sandbox isolation blocks skills/media processing (open since Feb)
- **#4123**: MCP SSRF URL safety (open PR)

Multiple issues and PRs address security gaps in tool execution, workspace isolation, and external integration safety.

### Chat Channels & Multi-Tenant
- **#240**: SimpleX Chat channel request (open since Feb, +2 👍)
- **#192**: WeChat function request (open since Feb)
- **#1011**: Mattermost channel request (open since Feb, +4 👍)
- **#936**: Multi-tenant gateway (open since Feb)
- **#976**: Default multi-tenant support (discussion, closed today)
- **#117**: WhatsApp self-chat ignored (open since Feb)
- **#990**: Pre-handler hook for zero-token routing (open since Feb)

Persistent demand for broader platform support (WeChat, Mattermost, SimpleX) and multi-tenant operations.

### Task-Specific Configuration
- **#912**: Task-specific model configuration (open, +3 👍)
- **#97**: Core architecture improvements (RFC, +6 👍)
- **#1010**: Per-channel session isolation in Slack (open, +1 👍)

## User Feedback Summary

- **Satisfaction**: Multiple users express appreciation for the project's lightweight architecture (#97, #1022 "thanks for a great project"). The recent MCP reconnect fix (#4171), memory improvements (#3952), and Dream refactor (#3990) address common pain points.
- **Dissatisfaction**:
  - *Reliability*: @jaydenchoe (#937) stopped evaluating nanobot due to exec tool hallucinations, calling it "essential and critical."
  - *Security*: @skhsu4321 (#143) reports a security gap in filesystem tools that "can still read and write any file."
  - *User experience*: @ivyrebot (#954) describes the progress streaming leak as "broadcasting internal tool calls to the user's chat interface when it shouldn't."
  - *Long tasks*: @eddielu (#1022) encounters silent failures on multi-step web scraping tasks.
- **Unmet needs**: Multi-agent support (#222, +7 👍), task-specific models (#912, +3 👍), and broader chat channels (Mattermost, WeChat, SimpleX) are recurring themes with sustained community interest.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Date | Age | Significance |
|-------|------|-----|-------------|
| [#222 – Multi-agent setup](https://github.com/HKUDS/nanobot/issues/222) | Feb 6 | ~4 months | Most upvoted open feature request (+7 👍) |
| [#97 – Core architecture RFC](https://github.com/HKUDS/nanobot/issues/97) | Feb 4 | ~4 months | +6 👍, comprehensive proposal on memory, security, testing |
| [#143 – Filesystem workspace bypass](https://github.com/HKUDS/nanobot/issues/143) | Feb 5 | ~4 months | +4 👍, security issue with no fix PR |
| [#80 – Lightweight memory retrieval](https://github.com/HKUDS/nanobot/issues/80) | Feb 4 | ~4 months | +0 👍 but addresses scalability |
| [#117 – WhatsApp self-chat ignored](https://github.com/HKUDS/nanobot/issues/117) | Feb 4 | ~4 months | Channel bug blocking WhatsApp use |
| [#1022 – Long tasks stall](https://github.com/HKUDS/nanobot/issues/1022) | Feb 22 | ~3.5 months | +3 👍, reported by multiple users |
| [#937 – Exec tool hallucinations](https://github.com/HKUDS/nanobot/issues/937) | Feb 21 | ~3.5 months | User stopped evaluation over this |
| [#954 – Progress streaming leak](https://github.com/HKUDS/nanobot/issues/954) | Feb 21 | ~3.5 months | v0.1.4 regression |
| [#912 – Task-specific models](https://github.com/HKUDS/nanobot/issues/912) | Feb 20 | ~3.5 months | +3 👍, clear use case |

### PRs Needing Review

| PR | Date | Age | Notes |
|----|------|-----|-------|
|

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-04

## 1. Today's Activity Brief
- 30 issues were updated in the last 24 hours (27 open, 3 closed), and 50 pull requests were updated (47 open, 3 merged/closed).
- No new releases were published.
- Activity concentrated on security architecture (OIDC authentication, pluggable security provider), the new TUI binary (`zerocode`), session lifecycle fixes, and a cluster of UI polish issues (chat timestamps, blank lines, telemetry leaks).
- Three issues were closed, including the session‑branching feature (#7167, #7168) and the addition of `zerocode` to the release build matrix (#6822).

## 2. Releases
*None today.*

## 3. Project Progress (Merged/Closed PRs & Issues)
- **PR #7181** (`fix(update,skills)`) – merged: hardens error handling by logging `remove_file` failures and strengthening path‑traversal guards.
- **Issue #7167 / #7168** – both closed (session‑branching feature requests were accepted and likely merged; exact PRs not listed in today’s data).
- **Issue #6822** – closed: `zerocode` TUI binary is now included in the release build matrix and CI pipeline.

Other notable open PRs making progress toward merge:
- **#7182** – persistent RPC sessions (addressing the 10‑minute reaping bug).
- **#7180** – honour `wire_api = "responses"` for custom/openai-compatible providers.
- **#7160** – resilient daemon config load with critical gating (fixes malformed field crashes).

## 4. Community Hot Topics
- **#7142 / #7141** (both by @singlerider) – each received 3 comments in the past 24 hours. They propose a pluggable security‑enforcement provider interface and OIDC authentication for the RPC/WSS transport. These are tracking issues for **v0.9.0** and generated discussion around architecture and scope.
  - [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)
  - [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)
- **#6826** (TUI tracker) – updated today; while it has no comments, it is a high‑activity tracking issue covering the new terminal interface (`zerocode`), which continues to see PRs and bug reports (e.g., #7125).

## 5. Bugs & Stability

**High severity (S1 – workflow blocked):**
- **#7179** – ZeroClaw reaps idle RPC sessions after 10 minutes, breaking long‑running conversations. **Fix in progress**: [#7182](https://github.com/zeroclaw-labs/zeroclaw/pull/7182) removes the idle TTL.
- **#7173** – quickstart webhook channel setup omits port configuration, causing agent startup to fail with missing field `port`. No fix PR yet.
- **#7125** – TUI (`zerocode`) freezes entirely when the daemon disconnects, requiring force‑quit. No fix PR yet.

**Medium severity (S2 – degraded behavior):**
- **#7151** – observability tool_call telemetry leaks onto the chat WebSocket, rendering permanent “unknown” tool cards. No fix PR yet.
- **#7133** – path‑policy false‑positive on `~` tokens inside quoted/heredoc command data (S2). No fix PR yet.
- **#7126** – “Clear all” button in the web UI only clears frontend messages; backend session history remains. No fix PR yet.

**Low severity (S3 – minor):**
- **#6702** – dashboard assistant bubble accumulates blank lines for each tool‑call card.
- **#7157** – chat message timestamps rendered inside the message bubble instead of as separate metadata.
- **#7156** – persistent reload/drift banner for `gateway.paired_tokens (secret)` that never clears.
- **#7139** – missing translation keys for chat toolbar buttons (clear_all, compact_mode, etc.) when switching languages.

## 6. Feature Request Clusters

**Security / Architecture (v0.9.0 tracked):**
- Pluggable security provider interface ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142))
- OIDC authentication for RPC/WSS transport ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141))
- Workspace‑wide `forbid(unsafe_code)` carve‑out ([#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130))
- Per‑execution confirmation tier for high‑risk shell commands with allow/ask/deny policies ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155))
- Granular sandbox filesystem / network restrictions (RFC [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996))

**Chat / User Interface Enhancements:**
- File upload / path selection UI in gateway web chat ([#7138](https://github.com/zeroclaw-labs/zeroclaw/issues/7138))
- Slash commands (`/clear`, `/help`, `/new`, `/model`) in web chat ([#7137](https://github.com/zeroclaw-labs/zeroclaw/issues/7137))
- Omit `temperature` on the wire when unset ([#7145](https://github.com/zeroclaw-labs/zeroclaw/issues/7145))

**Config & Tooling:**
- Typed delete‑with‑cascade for aliased config entries (providers/agents/channels) ([#7175](https://github.com/zeroclaw-labs/zeroclaw/issues/7175))
- Move i18n `.ftl` and `.po` files into a git submodule ([#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184))
- Publish daemon RPC surface as machine‑readable OpenRPC spec ([#7131](https://github.com/zeroclaw-labs/zeroclaw/issues/7131))

**Integration / Provider Additions:**
- Kilo AI Gateway as a first‑class model provider (PR [#7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136))
- Per‑alias model‑provider fallback on failure (PR [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178))
- Cron: support relative `after` schedules and block scheduler mutation tools in agent jobs (PRs [#7188](https://github.com/zeroclaw-labs/zeroclaw/pull/7188), [#7189](https://github.com/zeroclaw-labs/zeroclaw/pull/7189))

## 7. User Feedback Summary
- **Positive:** @sbenedetto ([#7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143)) thanked the team for a “Rust‑based agent runtime that is much lighter on resources than many other agent systems.”
- **Pain points reported today:**
  - Workflow blocked by session reaping after 10 minutes (S1).
  - Quickstart web hook channel lacks port field, blocking new user setup (S1).
  - TUI freezes on daemon disconnect, forcing force‑quit (S1).
  - Chat UI artifacts: blank lines in assistant bubbles, timestamps inside messages, persistent drift banners, “unknown” tool spinners, missing translation in toolbar.
  - Agent repeatedly runs near‑duplicate shell discovery commands until `max_tool_iterations` is exhausted (issue #7143).
  - “Clear all” button does not clear backend session history.
- **Feature interest:** Multiple users (@sentinel-nnet, @NiuBlibing, @xianshishan) requested session branching, file upload, slash commands, and language UI fixes, indicating active community engagement.

## 8. Backlog Watch
The following issues, likely needing maintainer attention, have received no responses or have been open for several days:

- **#7143** (agent runs duplicate discovery commands) – reported by @sbenedetto, zero maintainer comments.
- **#7173** (quickstart channel port missing) – reported by @eugeneb50, zero responses.
- **#7139** (i18n missing translation keys) – reported by @xianshishan, zero responses.
- **#6996** (RFC: granular sandbox filesystem/network) – opened May 28, labelled `needs-maintainer-review`, zero comments.
- **#7128** (scrub stale `zeroclaw onboard` references after deletion) – a chore that could cause user confusion, but no PR or assignee yet.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-04

## 1. Today’s Activity Brief
In the last 24 hours, 4 issues were updated (all remain open) and 10 pull requests saw activity (8 open, 2 closed). No new releases were published. The most active discussion continues around adding a streaming HTTP request configuration (#2404, 11 comments), while two separate fix PRs for a high‑priority PID singleton bug (#2720) remain open and stale. Two dependency/channel fixes were merged: a Go version bump for a security fix (#2997) and configurable TLS verification for the MQTT channel (#2899). Two new fix PRs targeting tool‑call dropping in streaming (#2957) and session history promotion (#2992) were contributed.

## 2. Releases
No new releases were created today. The most recent release remains v0.2.9 (as referenced in PR #2992).

## 3. Project Progress
Two pull requests were merged/closed in the last 24 hours:

- **fix(deps): bump go from 1.25.10 to 1.25.11 (GO-2026-5039)** (#2997)
  Security fix: header names in error messages are now escaped.
  [PR #2997](https://github.com/sipeed/picoclaw/pull/2997)

- **fix: add configurable TLS verification for MQTT channel** (#2899)
  Hardcoded `InsecureSkipVerify: true` is replaced by a config field (default `false`). Users can opt‑in to skip verification for self‑signed certificates.
  [PR #2899](https://github.com/sipeed/picoclaw/pull/2899)

These changes improve security posture and resolve a Go vulnerability.

## 4. Community Hot Topics
- **🔹 Issue #2404 — [Feature] Add in config to send streaming HTTP request** (11 comments, 1 👍)
  Request to support `stream: true` in configuration, similar to the OpenAI Python client. The proposal suggests adding a `"streaming": true` field in the config file. This is the most engaged open thread.
  [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)

- **🔹 Issue #2720 — [BUG] Singleton PID check doesn’t verify process identity** (8 comments, high priority, stale)
  A stale PID file causes a startup crash when the PID is reused by an unrelated process (e.g. `systemd-resolved`). Two separate fix PRs (#2813, #2955) have been submitted but remain open.
  [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)

- **🔹 Issue #2958 — tool_calls messages dropped during consecutive requests via pico channel** (1 comment)
  Only the first `tool_calls` is delivered to the UI; subsequent ones are lost. A fix PR (#2957) already exists.
  [Issue #2958](https://github.com/sipeed/picoclaw/issues/2958)

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR(s) |
|----------|-----|--------|-----------|
| High | Singleton PID check doesn’t verify process identity (#2720) – crash loop on stale PID | Open, stale | #2813 (open), #2955 (open) |
| Medium | tool_calls messages dropped during streaming via pico channel (#2958) | Open, stale | #2957 (open) |
| Medium | 32‑bit Android not supported (#2954) | Open, stale | None yet |
| Low | Go dependency vulnerability GO-2026-5039 | **Fixed** in #2997 | Merged |
| Low | Security.yml merge disables channels configured as enabled (#2956 – PR) | Open fix PR | #2956 (open) |
| Low | Session history promotion attaches old messages to new sessions (#2992 – PR) | Open fix PR | #2992 (open) |

Two new bug‑fix PRs were submitted today:
- **#2996** – Handle `json.Marshal` errors in exec tool responses (silent data loss replaced with proper error).
- **#2992** – Skip main‑session alias during history promotion (fixes issue #2972).

## 6. Feature Request Clusters
- **Streaming HTTP request config** (#2404)
  A single feature request to add `"streaming": true` in the config file, enabling streamed responses from LLM backends. No maintainer response yet, but the discussion has 11 comments exploring implementation details.

- **Per‑request dynamic headers for MCP servers** (PR #2696, open, stale)
  Allows channels to forward HTTP headers to MCP servers per‑request via an `mcp:` prefix in `InboundContext.Raw`. This enhancement is still awaiting review.

No other enhancement‑tagged issues were updated today. Both requests originate from community contributors.

## 7. User Feedback Summary
Real pain points reported by users:
- **Startup failures due to PID reuse** – multiple users (and two fix PRs) confirm this is a widespread reliability issue.
- **Tool call messages disappearing in streaming** – affects UI integration and multi‑turn tool workflows.
- **32‑bit Android not supported** – limits deployment on older Android devices.
- **Security.yml merging accidentally disables channels** – reported as a regression when adding credentials.
- **New sessions inheriting old chat history** (issue #2972) – caused by history promotion logic in v0.2.9.

Positive signals: two bug‑fix PRs were merged (Go security update, MQTT TLS). No explicit praise or satisfaction comments were recorded.

## 8. Backlog Watch
Items that appear to require maintainer attention (no recent maintainer response, or stale):

- **Issue #2720 (PID singleton bug, high priority)** – open since 2026-04-30, two competing fix PRs (#2813 from May 7, #2955 from May 27) both stale. Needs maintainer review and decision.
- **Issue #2404 (streaming config)** – open since April 7, has active community discussion but no official maintainer comment.
- **PR #2696 (MCP dynamic headers)** – open since April 28, stale, no review activity.
- **Issue #2954 (32‑bit Android support)** – open since May 27, no maintainer response.

</details>