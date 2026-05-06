# OpenClaw Ecosystem Digest 2026-05-06

> Issues: 500 | PRs: 500 | Projects covered: 4 | Generated: 2026-05-06 02:01 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-06

## 1. Today's Overview

OpenClaw continues to show high activity with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.5.4** with significant Google Meet/Voice Call improvements, bringing realtime Gemini voice bridge integration to Twilio dial-in participants. Community engagement remains strong with 344 open issues and 357 open PRs. The maintainer team is actively merging fixes (143 PRs closed today), while several regressions—particularly around Discord gateway hangs and Control UI message handling—warrant priority attention.

---

## 2. Releases

### v2026.5.4 (Stable)
**GitHub Release:** https://github.com/openclaw/openclaw/releases/tag/v2026.5.4

**Highlights:**
- **Google Meet/Voice Call Twilio Integration Overhaul**: Twilio dial-in joins now speak through the realtime Gemini voice bridge with:
  - Paced audio streaming
  - Backpressure-aware buffering
  - Barge-in queue clearing
  - No TwiML fallback during realtime speech
  - Result: Significantly snappier experience for Meet participants

### v2026.5.4-beta.3 (Beta)
**GitHub Release:** https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.3

Contains the same Google Meet/Voice Call improvements as the stable release.

---

## 3. Project Progress

### Merged/Closed PRs (Top Highlights)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#78198](https://github.com/openclaw/openclaw/pull/78198) | bryce-d-greybeard | Fix Honcho migration config—prevents writing dangling plugin entries | ✅ Closed |
| [#78192](https://github.com/openclaw/openclaw/pull/78192) | bryce-d-greybeard | Keep Telegram DM silent fallbacks quiet | ✅ Closed |
| [#78189](https://github.com/openclaw/openclaw/pull/78189) | bryce-d-greybeard | Suppress leaked reply scaffolding | ✅ Closed |
| [#71237](https://github.com/openclaw/openclaw/pull/71237) | lukeboyett | Add pruneOrphanedTranscripts utility for orphaned JSONL cleanup | ✅ Closed |

### Active Development (Open PRs)

| PR | Author | Summary | Size |
|----|--------|---------|------|
| [#77929](https://github.com/openclaw/openclaw/pull/77929) | steipete | **Unify Talk session runtime** across browser, native, Voice Call realtime, Google Meet, transcription relay, VoiceClaw, and STT/TTS paths | XL |
| [#73476](https://github.com/openclaw/openclaw/pull/73476) | laughy | Add `directReply` flag to tool results for bypassing LLM inference when tool result is final answer | L |
| [#77018](https://github.com/openclaw/openclaw/pull/77018) | jesse-merhi | Narrow Gateway proxy bypass target; add `proxy.loopbackMode` configuration | L |
| [#69822](https://github.com/openclaw/openclaw/pull/69822) | gdibble | Add `socket.drain` for session-message-events to resolve vite test deadlocks | M |
| [#77891](https://github.com/openclaw/openclaw/pull/77891) | openperf | Unbind conversation bindings when missing transcripts are pruned | M |
| [#78157](https://github.com/openclaw/openclaw/pull/78157) | BunsDev | Preserve mixed assistant history text in Gateway `chat.history` display | M |
| [#78184](https://github.com/openclaw/openclaw/pull/78184) | vincentkoc | Clean approval-pending chat prompts for Telegram/Zollie | M |
| [#78031](https://github.com/openclaw/openclaw/pull/78031) | jimdawdy-hub | Teach compact writing style—83% less token load on workspace templates | XS |
| [#73839](https://github.com/openclaw/openclaw/pull/73839) | bradhallett | Disable Pi auto-compaction when safeguard mode is active | S |
| [#76342](https://github.com/openclaw/openclaw/pull/76342) | ottodeng | Raise dreaming narrative timeout to 240s and allow env override | S |
| [#78133](https://github.com/openclaw/openclaw/pull/78133) | stevenepalmer | Add configurable trajectory flush timeout for reasoning traces | S |
| [#78181](https://github.com/openclaw/openclaw/pull/78181) | stevenepalmer | Include event timestamp in cron failure alert body | S |
| [#49145](https://github.com/openclaw/openclaw/pull/49145) | ebeuvaliers | Signal: reliable reply context, reaction wake, and quoted replies (v2) | M |
| [#72201](https://github.com/openclaw/openclaw/pull/72201) | lukeboyett | Add `audience` field for hidden runtime-context system events | M |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

1. **[#75](https://github.com/openclaw/openclaw/issues/75)** — Linux/Windows Clawdbot Apps
   - **Comments:** 104 | **Reactions:** 74 👍
   - **Author:** @steipete | **Created:** 2026-01-01
   - **Summary:** macOS, iOS, and Android apps exist; Linux and Windows are missing. Strong community demand for feature parity.
   - **Signal:** Cross-platform desktop support is a major gap; high engagement indicates this should be prioritized.

2. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — Text between tool calls leaks to messaging channels
   - **Comments:** 25 | **Reactions:** 0
   - **Summary:** Internal processing output (error handling, acknowledgments, narration) incorrectly routes to Slack, iMessage, etc.
   - **Signal:** UX quality issue affecting all messaging channel users.

3. **[#9443](https://github.com/openclaw/openclaw/issues/9443)** — Prebuilt Android APK releases
   - **Comments:** 24 | **Reactions:** 1 👍
   - **Summary:** Users want downloadable APKs rather than building from source.
   - **Signal:** Accessibility barrier for non-technical Android users.

4. **[#77598](https://github.com/openclaw/openclaw/issues/77598)** — Track live dev agent behavior and trajectory
   - **Comments:** 22 | **Reactions:** 1 👍
   - **Author:** @pashpashpash
   - **Summary:** Running 24-hour watch of dev agent behavior for observational analysis.
   - **Signal:** Growing interest in agent behavior monitoring and transparency.

5. **[#12590](https://github.com/openclaw/openclaw/issues/12590)** — `memoryFlush` does not fire reliably
   - **Comments:** 19 | **Reactions:** 0
   - **Summary:** `memoryFlush` only fires on every other auto-compaction cycle due to dedup logic bug.
   - **Signal:** Core memory management reliability issue.

---

## 5. Bugs & Stability

### Critical/Regression Bugs

| Issue | Author | Severity | Summary | Fix PR |
|-------|--------|----------|---------|--------|
| **[#77668](https://github.com/openclaw/openclaw/issues/77668)** | @RyanSandoval | **Regression** | Discord gateway hangs at 'awaiting gateway readiness' on macOS (6 closed dups); raw-ws test isolates to Carbon Client lifecycle | — |
| **[#77779](https://github.com/openclaw/openclaw/issues/77779)** | @php737 | **Regression** | WeChat plugin fails to start—`api.runtime undefined` in v2026.5.4 causes runtime initialization timeout | — |
| **[#77374](https://github.com/openclaw/openclaw/issues/77374)** | @GuanxiongWuEgo | **High** | Control UI: assistant messages disappear after each new user message | — |
| **[#77248](https://github.com/openclaw/openclaw/issues/77248)** | @jack-jackhui | Behavior Bug | Telegram Forum Topic delivery silently fails—responses dropped | — |
| **[#44077](https://github.com/openclaw/openclaw/issues/44077)** | @patosullivan | **Regression** | Sandbox file-tool edits rewrite workspace files to 0600, causing EACCES | — |
| **[#12590](https://github.com/openclaw/openclaw/issues/12590)** | @dial481 | Bug | `memoryFlush` does not fire reliably (every other cycle) | — |
| **[#46637](https://github.com/openclaw/openclaw/issues/46637)** | @zipzagster | **Regression** | `reasoning_content` in conversation history causes oMLX JSON parse error | — |
| **[#44051](https://github.com/openclaw/openclaw/issues/44051)** | @libeibei-22 | **Regression** | Skipping skill path error on officially installed skills via clawhub (WSL) | — |
| **[#77116](https://github.com/openclaw/openclaw/issues/77116)** | @lyh-github-97 | Regression | Feishu channel crashes after upgrading to 2026.5.2—appId/appSecret fields incompatible | — |
| **[#77087](https://github.com/openclaw/openclaw/issues/77087)** | @westlife219 | Crash | Gateway can't recover from npm chunk-hash replacement during in-place upgrade | — |
| **[#75907](https://github.com/openclaw/openclaw/issues/75907)** | @dlrik | Performance | core-plugin-tools blocks for 30-40s on every cold start (Windows + Node 24 only) | — |

### Performance Issues

| Issue | Author | Summary |
|-------|--------|---------|
| **[#76552](https://github.com/openclaw/openclaw/issues/76552)** | @liushuaiiu | High CPU/load average during Codex runtime tasks, amplified by hook relay and session/history work |
| **[#75839](https://github.com/openclaw/openclaw/issues/75839)** | @BomBastikDE | `sessions.list` latency ~10s and fixed 10s pi-trajectory-flush timeout under moderate load |
| **[#72015](https://github.com/openclaw/openclaw/issues/72015)** | @0xCNAI | active-memory blocks replies and QMD boot initialization can overload multi-agent gateways |

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests

| Issue | Author | Comments | Summary | Roadmap Signal |
|-------|--------|----------|---------|----------------|
| **[#75](https://github.com/openclaw/openclaw/issues/75)** | @steipete | 104 | Linux/Windows Clawdbot Apps | **High priority**—platform parity |
| **[#10687](https://github.com/openclaw/openclaw/issues/10687)** | @joshp123 | 8 | Fully dynamic model discovery (OpenRouter + beyond) | **High priority**—model flexibility |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** | @AstridQing-AI | 24 | Prebuilt Android APK releases | Distribution improvement |
| **[#8719](https://github.com/openclaw/openclaw/issues/8719)** | @Ar3ss12 | 6 | OpenClaw Security Profile v1.1 (data-centric, secure-by-default) | Security hardening |
| **[#6615](https://github.com/openclaw/openclaw/issues/6615)** | @aaroneden | 7 | Add denylist support for exec-approvals | Security/UX improvement |
| **[#7722](https://github.com/openclaw/openclaw/issues/7722)** | @LumenLantern | 4 | Filesystem Sandboxing Config (`tools.fileAccess`) | Security feature |
| **[#2597](https://github.com/openclaw/openclaw/issues/2597)** | @Alvin-MN | 8 | Context/state visibility (context usage percentage in Runtime line) | Observability |
| **[#9986](https://github.com/openclaw/openclaw/issues/9986)** | @amirarenco-create | 5 | Trigger model fallback on context length exceeded | Reliability |
| **[#11665](https://github.com/openclaw/openclaw/issues/11665)** | @marieldejesus12 | 6 | Webhook hook sessions should reuse existing session (multi-turn support) | API parity |
| **[#6820](https://github.com/openclaw/openclaw/issues/6820)** | @alfadb | 5 | Add `openai-codex/gpt-5.2` to xhigh thinking whitelist | Model support |
| **[#8295](https://github.com/openclaw/openclaw/issues/8295)** | @arekqq | 5 | Add `allowBots` support for Telegram groups (parity with Discord/Slack) | Channel parity |
| **[#9016](https://github.com/openclaw/openclaw/issues/9016)** | @eric-wien | 4 | Expose OpenRouter usage cost to agent runtime | Cost visibility |
| **[#9465](https://github.com/openclaw/openclaw/issues/9465)** | @guyhuang | 4 | Cron Job Hooks System | Automation |
| **[#10118](https://github.com/openclaw/openclaw/issues/10118)** | @david-wooo | 4 | TUI: Support Shift+Enter for newline (Enter to send) | UX improvement |
| **[#9637](https://github.com/openclaw/openclaw/issues/9637)** | @robin24 | 5 | Add accessibility config option to disable emojis/unicode in TUI | Accessibility |
| **[#9764](https://github.com/openclaw/openclaw/issues/9764)** | @ndohuu | 4 | Google Chat: Add user OAuth support for reactions and media uploads | Channel feature |

### Predicted Next Version Priorities
Based on issue activity and PR momentum:
1. **Talk session unification** (#77929) — large PR in review suggests voice/Talk improvements are near completion
2. **Direct reply tool optimization** (#73476) — bypasses unnecessary LLM inference
3. **Cross-platform desktop apps** (#75) — highest community demand
4. **Dynamic model discovery** (#10687) — addresses OpenRouter catalog changes

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue | User Impact |
|----------|-------|-------------|
| **Channel Reliability** | Discord gateway hangs (#77668), WeChat plugin fails (#77779), Feishu crashes (#77116) | Users unable to use core messaging integrations after recent updates |
| **Memory Management** | `memoryFlush` unreliable (#12590), active-memory blocking (#72015) | Unpredictable agent behavior, performance degradation |
| **Context/Token Issues** | Context overflow from base64 images (#1210), no context usage visibility (#2597) | Sessions hitting limits unexpectedly, poor state management |
| **Platform Gaps** | No Linux/Windows apps (#75), no Android APKs (#9443) | Limited accessibility for non-macOS/iOS users |
| **Tool Chain Issues** | Text between tool calls leaks (#25592), final text segments dropped (#76477) | Poor UX in messaging channels, invisible failures |
| **Performance** | 30-40s cold start on Windows (#75907), high CPU during Codex tasks (#76552) | Poor user experience on certain platforms |

### Use Cases & Satisfaction Signals

| Signal | Evidence |
|--------|----------|
| **Strong interest in voice/Talk features** | Large PR #77929 for Talk unification, Google Meet improvements in v2026.5.4 |
| **Agent monitoring demand** |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem demonstrates robust activity across four major projects, with collective engagement exceeding 600 combined issue/PR updates in 24 hours. OpenClaw maintains a commanding lead in community size and feature breadth, while NanoBot, Zeroclaw, and PicoClaw each carve distinct niches around memory management, multi-channel reliability, and embedded/edge deployment respectively. The ecosystem reveals strong convergence on Telegram integration as a de facto standard, with voice/Talk capabilities emerging as the next battleground. Cross-project themes include memory management reliability, observability gaps, and platform-specific deployment challenges—indicating a maturing market where basic functionality is giving way to enterprise-grade reliability demands.

## 2. Activity Comparison

| Metric | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|--------|----------|---------|----------|----------|
| **Issues Updated (24h)** | 500 | 6 | 50 | 17 |
| **PRs Updated (24h)** | 500 | 14 | 50 | 29 |
| **Open Issues** | 344 | ~15 (est.) | ~40 (est.) | 13 |
| **Open PRs** | 357 | 6 | ~30 (est.) | 20 |
| **Releases (24h)** | 1 (v2026.5.4) | 0 | 0 | 1 (nightly) |
| **PRs Closed/Merged** | 143 | 8 | 11 | 9 |
| **Critical Bugs** | 11 | 3 | 7 | 3 |
| **Security Issues** | 0 | 0 | 0 | 1 (High) |

**Health Score Assessment:**

| Project | Score | Rationale |
|---------|-------|-----------|
| **OpenClaw** | 7.2/10 | High velocity offset by 11 critical bugs including regressions; strong release cadence |
| **NanoBot** | 7.8/10 | Focused development with recent stability fixes; Telegram reliability gap is concerning |
| **Zeroclaw** | 6.1/10 | 7 active P1 bugs, WhatsApp Web protocol issues, onboarding failures drag score |
| **PicoClaw** | 6.8/10 | Security vulnerability, stale PRs, but active nightly development |

## 3. OpenClaw's Position

### Advantages vs Peers

- **Community Scale**: 344 open issues and 357 open PRs dwarf competitors (NanoBot: ~21, Zeroclaw: ~70, PicoClaw: ~33 combined)
- **Feature Breadth**: Voice/Talk unification (#77929), Google Meet integration, Twilio dial-in bridge—capabilities 6-12 months ahead of peers
- **Release Cadence**: Shipped v2026.5.4 with meaningful improvements; competitors ship nightly/unstable builds
- **Ecosystem Integration**: ClawHub skill marketplace, extensive channel support (Discord, Slack, Telegram, WeChat, Feishu)

### Technical Approach Differences

| Aspect | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|--------|----------|---------|----------|----------|
| **Architecture** | Monolithic core + plugin system | Modular agent framework | Lightweight daemon + gateway | Embedded/edge-optimized |
| **Memory Model** | Dream phase + active-memory | Subagent KV cache management | Session-based autosave | Minimal footprint |
| **Voice Strategy** | Realtime Gemini bridge + Twilio | Not primary focus | Not primary focus | Not primary focus |
| **Config System** | Hierarchical with env overrides | YAML-based | Typed-family provider split (v0.8.0) | V2 format migration issues |

### Community Size Comparison

OpenClaw's issue #75 (Linux/Windows apps) generated 104 comments and 74 reactions—triple the engagement of NanoBot's most active issue (9 comments). Zeroclaw's onboarding issue (#6123) attracted 17 comments, indicating mid-tier community investment. PicoClaw's highest-engagement issue reached 8 comments, reflecting a smaller but active contributor base.

## 4. Shared Technical Focus Areas

### Cross-Project Requirements Emerging

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Memory Management Reliability** | OpenClaw, NanoBot, Zeroclaw | OpenClaw: `memoryFlush` fires unreliably (#12590); NanoBot: dream_cursor silent drops (#3630 fixed); Zeroclaw: session_id mismatch (#5550 fixed) |
| **Telegram Integration Stability** | OpenClaw, NanoBot, PicoClaw | All three report Telegram reliability issues—OpenClaw silent fallbacks (#78192), NanoBot long-polling hangs (#3626), PicoClaw forum topic delivery (#77248) |
| **Observability/Gateway Visibility** | OpenClaw, Zeroclaw, NanoBot | OpenClaw: trajectory flush timeout (#75839); Zeroclaw: cost tracking broken (#6001); NanoBot: LangSmith restoration (#3140) |
| **Channel Parity** | OpenClaw, Zeroclaw, PicoClaw | Discord restrictions (OpenClaw #6378, Zeroclaw #6378), WhatsApp protocol compliance (Zeroclaw #6246), Feishu crashes (OpenClaw #77116) |
| **Concurrent Execution Control** | NanoBot, OpenClaw | NanoBot: maxConcurrentSubagents merged (#3634); OpenClaw: subagent OOM concerns via active-memory blocking (#72015) |
| **Provider/Model Flexibility** | OpenClaw, Zeroclaw, PicoClaw | OpenClaw: dynamic model discovery (#10687); Zeroclaw: typed-family provider split (#6403); PicoClaw: Gemini web search provider (#2763) |

### Critical Shared Bug Pattern

Three of four projects have **silent failure modes** affecting production deployments:

- OpenClaw: Control UI messages disappear (#77374), Telegram Forum delivery drops (#77248)
- NanoBot: Telegram bot appears healthy but stops receiving (#3626)
- Zeroclaw: web_search silently fails (#6373), cost tracking returns zero (#6001)
- PicoClaw: Gateway startup appears normal but functions abnormally (#2513)

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Differentiation | Secondary Focus |
|---------|------------------------|-----------------|
| **OpenClaw** | Voice/Talk unification across browser, native, Twilio, Google Meet | Cross-platform desktop apps, realtime audio bridging |
| **NanoBot** | Multi-agent subagent orchestration with concurrent limits | HF Spaces deployment, SimpleX channel expansion |
| **Zeroclaw** | Fleet management with nodes dashboard, device identification | Desktop menu-bar parity, universal macOS binary |
| **PicoClaw** | Embedded/edge deployment (Raspberry Pi, NXP i.MX93, Android ADB) | MQTT channel support, hardware diversity |

### Target Users

| Project | Primary Audience | Deployment Context |
|---------|------------------|-------------------|
| **OpenClaw** | Power users, developers wanting full-featured assistants | Self-hosted, cloud gateway |
| **NanoBot** | Researchers, developers building multi-agent systems | Local LLM servers, HF Spaces |
| **Zeroclaw** | Self-hosted enthusiasts needing multi-channel relay | Daemon-based, Docker deployment |
| **PicoClaw** | Edge/IoT developers, hardware enthusiasts | Embedded systems, mobile (ADB) |

### Technical Architecture

```
OpenClaw:     [Gateway] ←→ [Core Engine] ←→ [Plugin System] ←→ [Channels: 10+]
NanoBot:      [Runner] ←→ [Agent] ←→ [Subagents] ←→ [Channels: Telegram, Feishu, SimpleX]
Zeroclaw:     [Daemon] ←→ [Gateway] ←→ [Providers] ←→ [Channels: WhatsApp, Discord, Matrix]
PicoClaw:     [Gateway] ←→ [Agent] ←→ [Tools] ←→ [Channels: Telegram, LINE, MQTT]
```

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Characteristics |
|------|---------|-----------------|
| **Tier 1: Rapid Iteration** | OpenClaw, PicoClaw | 500+ and 29+ PR updates daily; nightly/stable releases; aggressive feature development |
| **Tier 2: Focused Development** | NanoBot, Zeroclaw | 14 and 50 updates daily; stability-focused; preparing major releases (v0.1.6, v0.8.0) |

### Iteration Velocity Assessment

| Project | Velocity Trend | Stability Trend | Notes |
|---------|---------------|-----------------|-------|
| **OpenClaw** | Accelerating | Declining | 143 PRs closed today but 11 critical bugs; regressions from v2026.5.4 |
| **NanoBot** | Stable | Improving | Memory fixes (#3631), subagent limits (#3634) address recent stability issues |
| **Zeroclaw** | Stable | Concerning | 7 P1 bugs, WhatsApp protocol issues unresolved; v0.8.0 integration ongoing |
| **PicoClaw** | Accelerating | Stable | Nightly builds, security patch needed (#2688), stale PRs accumulating |

### Maturity Indicators

| Indicator | OpenClaw | NanoBot | Zeroclaw | PicoClaw |
|-----------|----------|---------|----------|----------|
| **Release Process** | Mature (stable + beta) | Basic (versioned releases) | Basic (milestone tracking) | Early (nightly builds) |
| **Bug Triage** | Active (maintainer response) | Active | Active | Needs improvement (stale issues) |
| **Security Response** | Standard | Standard | Standard | **Needs immediate attention** |
| **Community Governance** | Established (maintainer team) | Emerging | Established | Emerging |

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Voice-First Architecture Is Table Stakes**
   - OpenClaw's realtime Gemini voice bridge (#77929) and Google Meet integration represent the new baseline
   - Signal: By 2027, text-only assistants will be considered incomplete

2. **Multi-Agent Orchestration Demands Concurrent Safety**
   - NanoBot's maxConcurrentSubagents feature (#3634) and OpenClaw's active-memory blocking (#72015) reveal systemic gaps
   - Signal: Single-agent frameworks will need concurrent execution models or face OOM failures at scale

3. **Channel Reliability Over Feature Expansion**
   - Three of four projects report Telegram silent failures; Zeroclaw's WhatsApp protocol broke post-April 2026
   - Signal: Users prioritize reliable channels over new integrations; maintenance burden is unsustainable

4. **Observability Is a Critical Gap**
   - Cost tracking broken (Zeroclaw), trajectory flush timeouts (OpenClaw), LangSmith integration missing (NanoBot)
   - Signal: Production deployments require enterprise-grade telemetry; DIY solutions are insufficient

5. **Edge/Embedded Deployment Is Growing**
   - PicoClaw on Raspberry Pi Zero W, NXP i.MX93, Android ADB shows demand beyond desktop
   - Signal: AI assistants will increasingly run on constrained hardware; optimization for memory/CPU is a differentiator

6. **Security Hardening Is Lagging**
   - PicoClaw's sandbox bypass (#2688), SSRF guard issues (NanoBot #3635), exec-approvals denylist requests (OpenClaw #6615)
   - Signal: As assistants gain tool access, security surface area expands faster than defensive measures

7. **Cross-Platform Parity Is a Major Pain Point**
   - OpenClaw's Linux/Windows app demand (#75, 104 comments), Zeroclaw's universal macOS binary request (#6339)
   - Signal: Users expect feature parity across platforms; single-platform lock-in faces community resistance

### Value for AI Agent Developers

| Signal | Actionable Insight |
|--------|-------------------|
| **Voice/Talk unification** | Invest in WebRTC, Twilio, and realtime streaming; audio-first features attract users |
| **Memory management** | Implement explicit cursor management; silent failures destroy user trust |
| **Channel reliability** | Prioritize Telegram/WhatsApp stability over new integrations; silent failures are production-killers |
| **Observability** | Integrate OpenTelemetry early; users demand cost tracking, trajectory visibility, and trace files |
| **Edge deployment** | Optimize for sub-1GB RAM targets; hardware diversity is a competitive advantage |
| **Security** | Sandboxing, SSRF guards, and exec-approvals are table stakes for production; audit tool access paths |

---

*Report generated 2026-05-06. Data sourced from OpenClaw, NanoBot, Zeroclaw, and PicoClaw GitHub activity digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-06

## 1. Today's Overview

NanoBot maintains high development velocity with 14 PRs and 6 issues updated in the last 24 hours. The project shows healthy activity with 8 PRs merged/closed and 6 new PRs opened, indicating active feature development alongside bug fixes. No new releases were published today. Notable progress includes concurrent subagent execution limits (merged twice—likely parallel work consolidated), Feishu channel improvements, and SDK result population fixes. Community engagement remains strong with feature discussions and bug reports across Telegram, DeepSeek, and GPT integrations.

## 2. Releases

**No new releases today.** The project last published around v0.1.5.post3. Users encountering the DeepSeek API `reasoning_content` error (#3584) should monitor for an upcoming patch.

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary |
|----|--------|---------|
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | @Re-bin | Softened SSRF guard recovery—returns non-retryable tool error instead of aborting runtime turn |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | @chengyongru | **SDK fix**: Populated `RunResult.tools_used` and `RunResult.messages` (were hardcoded to `[]`) |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | @kaseru | Telegram: ignore unauthorized users silently; enforce allowlist before `/start`, `/help`, and message handling |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | @BarclayII | Feishu: include sender identity (display name, open_id, user_id) in model prompt for group chat awareness |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | @futurist | Feishu: return absolute path for downloaded media files (fixes downstream transcription issues) |
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | @JiajunBernoulli | Dream: only advance `dream_cursor` on completed batches—prevents silent memory loss |
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | @chengyongru | Agent: limit concurrent subagent execution via `maxConcurrentSubagents` config (default: 1) |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | @mrbob-git | Agent: limit concurrent subagent execution (duplicate effort merged; closes #3611) |

### Open PRs (6 items)

| PR | Author | Summary |
|----|--------|---------|
| [#3636](https://github.com/HKUDS/nanobot/pull/3636) | @fancile | Added comments in main functions (runner) for better code understanding |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) | @DreamShepherd2006 | Production-ready multi-role agent squad deployment for Hugging Face Spaces |
| [#3610](https://github.com/HKUDS/nanobot/pull/3610) | @mt-huerta | MCP: shield `aclose` on failed connect to prevent event-loop spin |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | @pve | Restore full-featured LangSmith integration (auto-instrumentation, observability) |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) | @OniricApps | Add SimpleX messaging channel support via SimpleX Terminal CLI |
| [#3628](https://github.com/HKUDS/nanobot/pull/3628) | @yaotutu | Add `before_process` hook for message preprocessing with media handling |

## 4. Community Hot Topics

### Most Active Issue
**#3292** — [Feature Request: Session-Level Focus Tool](https://github.com/HKUDS/nanobot/issues/3292)
*Author: @piliplaker | 9 comments*
**Signal**: Users want persistent task awareness across interruptions. The request argues that humans maintain a mental "task board" when interrupted, and LLMs lack this ability to anchor attention on primary goals. The current `_runtime_vars` scratchpad is insufficient. This reflects growing demand for more sophisticated agent memory and context management.

### Notable Open Discussions
- **#3621** (PR) — Multi-role agent squad for HF Spaces has potential for democratizing NanoBot deployment
- **#3140** (PR) — LangSmith integration restoration addresses observability gaps since v0.1.5

## 5. Bugs & Stability

### Active Bugs (Ranked by Impact)

| # | Issue | Severity | Status | Fix PR |
|---|-------|----------|--------|--------|
| 1 | **#3626** — Telegram long polling silently hangs (bot alive but stops receiving updates) | **High** | Open | None |
| 2 | **#3584** — DeepSeek API `reasoning_content` error (strict API validation failure) | **High** | Open | None |
| 3 | **#3633** — GPT "Duplicate item found with id" error preventing resume | **Medium** | Open | None |

### Recently Fixed Bugs
- **#3630 → #3631**: Dream cursor advancement bug causing silent memory entry drops (fixed)
- **#3611 → #3634/#3615**: OOM crashes from unlimited concurrent subagent spawning (fixed)

**Stability Note**: Telegram reliability (#3626) is a critical issue for production deployments. The silent failure mode (bot appears healthy but stops receiving) makes debugging difficult.

## 6. Feature Requests & Roadmap Signals

### High-Interest Requests
1. **#3292** — Session-Level Focus Tool (9 comments, most engaged feature request)
2. **#3486** — SimpleX channel integration (expands messaging platform coverage)
3. **#3621** — HF Spaces deployment (lowers barrier to entry for non-technical users)

### Predicted Next Version Indicators
- **Memory management fixes** (dream_cursor, concurrent subagent limits) suggest v0.1.6 may focus on stability
- **LangSmith restoration** (#3140) indicates observability is a priority
- **Channel expansions** (SimpleX, Feishu improvements) show multi-platform strategy

## 7. User Feedback Summary

### Pain Points
- **Telegram reliability**: Users report silent failures where the bot appears healthy but stops receiving messages (#3626)
- **OOM on local LLM servers**: Multiple subagents simultaneously allocating KV caches crashes consumer hardware (#3611—now fixed)
- **DeepSeek compatibility**: API validation errors after v0.1.5.post3 update (#3584)
- **Memory loss**: Dream phase errors silently dropping memory entries without user notification (#3630—now fixed)

### Positive Signals
- **SDK improvements**: Users expected `RunResult.tools_used` and `RunResult.messages` to work (#3620—now fixed)
- **Feishu group chat awareness**: Sender identity in prompts improves multi-user experience (#3552)
- **Security hardening**: SSRF guard improvements show security-conscious development (#3635)

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Title | Age | Priority | Notes |
|---|-------|-----|----------|-------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Session-Level Focus Tool | ~17 days | High | Most commented issue; significant user demand |
| [#3626](https://github.com/HKUDS/nanobot/issues/3626) | Telegram long polling hangs | 1 day | **Critical** | Silent failure; affects production deployments |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API error | 5 days | High | Blocks DeepSeek model users |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | GPT duplicate ID error | 1 day | Medium | Prevents session resume |

### PRs Awaiting Review

| # | Title | Age | Priority | Notes |
|---|-------|-----|----------|-------|
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | Restore LangSmith integration | 22 days | High | Major observability feature |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) | SimpleX channel | 9 days | Medium | New platform support |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) | HF Spaces deployment | 2 days | Medium | Expands accessibility |

---
*Digest generated from NanoBot (HKUDS/nanobot) GitHub activity on 2026-05-06*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-05-06

## 1. Today's Overview

Zeroclaw maintains high development velocity with 50 issues and 50 PRs updated in the last 24 hours, indicating active maintenance and feature work. No new releases shipped today, but the project is clearly in a heavy integration phase for v0.8.0, with multiple PRs targeting `integration/v0.8.0` rather than `master`. Community engagement is strong, particularly around WhatsApp Web channel stability (multiple security and protocol bugs), Discord channel restrictions, and gateway observability. The bug queue shows several P1-severity issues affecting core workflows, while feature work focuses on configurability, desktop experience parity, and CI/CD automation.

---

## 2. Releases

**None** — No new releases in the last 24 hours. The project is tracking v0.7.5 milestones ([#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)) and preparing v0.8.0 integration work.

---

## 3. Project Progress

### PRs Merged/Closed (11 total in last 24h)

| PR | Title | Status | Key Change |
|----|-------|--------|------------|
| [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) | fix(whatsapp): drop own-account outbound in non-self chats | Open | Prevents agent replying to operator's own messages in WhatsApp personal mode |
| [#6411](https://github.com/zeroclaw-labs/zeroclaw/pull/6411) | ci(release): restore MUSL static binaries | Open | Re-adds `x86_64-unknown-linux-musl` and `aarch64-unknown-linux-musl` targets |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | feat(config,providers): typed-family split for model + TTS providers | Open (→integration/v0.8.0) | Major config refactor; closes #6273 |
| [#6409](https://github.com/zeroclaw-labs/zeroclaw/pull/6409) | feat(skills): show tier banner on `zeroclaw skills install` | Open | Trust signaling for skill provenance |
| [#6412](https://github.com/zeroclaw-labs/zeroclaw/pull/6412) | fix(ci): re-introduce post-release CHANGELOG-next.md cleanup | Open | Restores automated changelog maintenance |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | fix(matrix): avoid duplicate inbound replies | Open | Drops event handlers on sync loop restart |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | feat(gateway,web): nodes dashboard + device identification | Open | Fleet visibility with live health monitoring |
| [#6385](https://github.com/zeroclaw-labs/zeroclaw/pull/6385) | feat(installer): --preset, --with/--without-gateway | Open | Three-way installer overhaul with presets |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | feat(obs): enrich OTel tool spans with gen_ai.tool.* attrs | Open | Improved observability for tool execution |
| [#6384](https://github.com/zeroclaw-labs/zeroclaw/pull/6384) | fix(runtime, channels): unify session backend | Open | Fixes session visibility across WS and CLI |
| [#6405](https://github.com/zeroclaw-labs/zeroclaw/pull/6405) | fix(tools): align MCP HTTP/SSE timeouts with tool-call budget | Open | Request-scoped timeouts for MCP tools |
| [#6408](https://github.com/zeroclaw-labs/zeroclaw/pull/6408) | fix(channels): reject concurrent ACP prompts | Open | Prevents turn cancellation race conditions |
| [#6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) | feat(config/channels): add reply_min_interval_secs to TelegramConfig | Open | Anti-spam throttle for Telegram |
| [#6396](https://github.com/zeroclaw-labs/zeroclaw/pull/6396) | feat(ci): force check PR title | Open | Enforces `type(scope): description` format |
| [#6382](https://github.com/zeroclaw-labs/zeroclaw/pull/6382) | docs(channels): reconcile against schema | Open | Fixes stale CLI references across 11 doc pages |
| [#6386](https://github.com/zeroclaw-labs/zeroclaw/pull/6386) | refactor(integrations): schema-derive channel list | Open | Drops `ComingSoon` pattern; auto-surfaces new channels |
| [#6388](https://github.com/zeroclaw-labs/zeroclaw/pull/6388) | fix(web/agent-chat): default tool_call/tool_result off | Open | Cleaner message stream in dashboard |
| [#6387](https://github.com/zeroclaw-labs/zeroclaw/pull/6387) | feat(gateway/ws): tool-approval back-channel via WsApprovalChannel | Open | Enables user approval for supervised tool calls |
| [#6114](https://github.com/zeroclaw-labs/zeroclaw/pull/6114) | fix(provider): strip media markers in auxiliary LLM calls | Open | Prevents `[IMAGE:/local/path]` leaking to non-vision models |
| [#6395](https://github.com/zeroclaw-labs/zeroclaw/pull/6395) | build(docs): gitignore lang-switcher.js | Open | Prevents working tree dirt from mdbook builds |

**Notable closed issues:**
- [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) — Memory autosave session_id mismatch bug (closed, P1)
- [#6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075) — Discord channel restriction (closed as duplicate of #6378)

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Priority | Theme |
|-------|-------|----------|----------|-------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | 17 | P1 | Onboarding/provider configuration |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better LOGO of Zeroclaw | 9 | P2 | Branding/identity |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | v0.7.5 milestone tracking | 6 | P1 | Release automation |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | Memory session_id mismatch | 6 | P1 | Memory/recall bug (now closed) |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | gateway-chat cost tracking broken | 3 | P1 | Observability/gateway |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot respond only in specific channels | 3 | P2 | Channel access control |
| [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) | GitHub action that checks PR title | 3 | P2 | CI/CD quality gate |

**Analysis:** The #6123 default_model issue has attracted the most community attention (17 comments), indicating onboarding friction for new users. The memory bug (#5550) was significant enough to draw discussion before closure. Discord channel restriction (#6378) has community interest, with a duplicate (#6075) already closed.

---

## 5. Bugs & Stability

### P1 (Critical/Workflow-Blocking) Bugs

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | default_model issue on fresh install | S1 | Open | No |
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web messages stop after April 2026 protocol bump | S1 | Open | No |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | context_compression drops tool_calls for OpenAI-compatible providers | S1 | In Progress | No |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | Custom remote provider sends local image paths instead of data URLs | S1 | Open | No |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Llama.cpp throws 500s on tool usage | S1 | Open | No |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding: OpenAI Codex prompts for API key instead | S1 | Accepted | No |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount shadows pre-built web dashboard | S2 | Open | No |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | Bash completion infinite recursion | S2 | Open | No |
| [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp self-chat-mode triggers on all fromMe messages | S2 | In Progress | [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp allowed-numbers bypassed for LID contacts | S2 | Accepted | No |

### P2 (Degraded Behavior) Bugs

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt Caching broken on Telegram | Open | No |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | /api/cost stays zero, no trace files | Open | No |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | web_search doesn't work on fresh install | Open | No |
| [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) | Documentation error for Docker installation | Open | No |

**Stability Assessment:** 7 active P1 bugs, with WhatsApp Web channel showing the most concentrated issues (protocol bump, self-chat mode, allowed-numbers bypass). The #6414 PR directly addresses the self-chat mode issue. No PRs yet address the critical default_model, protocol bump, or context_compression bugs.

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Work

| Issue/PR | Title | Priority | Status | Likely v0.8.0? |
|----------|-------|----------|--------|----------------|
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | Typed-family split for model + TTS providers | P1 | In Progress | Yes (→integration/v0.8.0) |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | Per-channel reply_min_interval_secs | P1 | In Progress | Yes |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | Nodes dashboard + device identification | P2 | Open | Likely |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord allowed_channels | P2 | Accepted | Possible |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Real heartbeat tracking for daemon nodes | P2 | Blocked | Future |
| [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327) | Desktop menu-bar channels overview parity | P2 | Accepted | Possible |
| [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | Menu-bar tray menu items | P2 | Accepted | Possible |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | Universal binary (arm64 + x86_64) for macOS | P2 | Accepted | Possible |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | V3 env-var override mechanism | P2 | Needs Review | Likely |
| [#6251](https://github.com/zeroclaw-labs/zeroclaw/issues/6251) | Add cost under provider | P2 | In Progress | Possible |

**Roadmap Signals:** The v0.8.0 integration branch is actively merging config/provider refactors. Desktop app improvements (menu-bar, tray, universal binary) show sustained community interest. Gateway observability (nodes dashboard, heartbeat tracking) addresses fleet management needs. Discord channel restriction aligns with existing Matrix/Nextcloud patterns.

---

## 7. User Feedback Summary

### Pain Points

1. **Onboarding failures** — Fresh installs fail on default_model configuration ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123), 17 comments), with related provider selection bugs ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120), [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377))

2. **WhatsApp Web instability** — Protocol bump from April 2026 broke message flow entirely ([#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)); security issues cause agent to reply to operator's contacts ([#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351))

3. **Observability gaps** — Cost tracking returns zero ([#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)); no runtime traces written; web_search silently fails ([#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373))

4. **Docker deployment issues** — Bind mount shadows built-in web dashboard ([#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400)); documentation errors for container setup ([#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393))

5. **CLI tooling bugs** — Bash completion causes infinite recursion crash ([#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402))

### Positive Signals

- Community engagement is high (17 comments on onboarding issue indicates user investment)
- Feature requests like Discord channel restriction ([#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/637

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-06

## 1. Today's Overview

PicoClaw shows **high development velocity** on 2026-05-06, with 29 PRs updated and 17 issues touched in the last 24 hours. A new nightly build (**v0.2.8-nightly.20260506.eb4e1875**) was published, indicating active progress toward v0.2.8. Community engagement is strong, with multiple contributors filing bugs, enhancements, and features. Notably, a **security issue** (#2688) was reported regarding path enumeration via `find /` bypassing the workspace sandbox, which warrants prompt attention. Telegram channel improvements dominate recent PRs, reflecting heavy usage of that integration.

---

## 2. Releases

### Nightly Build Published
- **Version:** `v0.2.8-nightly.20260506.eb4e1875`
- **Type:** Automated nightly build (unstable)
- **Note:** This build is for testing purposes; production users should stick to tagged releases.
- **Full Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ **Migration Note:** No breaking changes flagged for this nightly, but as an unstable build, backward compatibility is not guaranteed.

---

## 3. Project Progress

### Merged/Closed PRs (9 total)
| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | neotty | tool, cron | Fix cron task creation and execution failures |
| [#2470](https://github.com/sipeed/picoclaw/pull/2470) | dsus4wang | config, cron | Fix cron reminder phrasing and improve MCP tool visibility |
| [#2372](https://github.com/sipeed/picoclaw/pull/2372) | SaiBalusu-usf | provider, config | Resolve api_key, model lookup, and fallback bugs |
| [#2370](https://github.com/sipeed/picoclaw/pull/2370) | diegofornalha | channel | Tolerate whitespace in split marker from LLM output |
| [#2369](https://github.com/sipeed/picoclaw/pull/2369) | diegofornalha | channel, tool | PicoWatch — trial monitoring menu bar app + WhatsApp status counter |
| [#2364](https://github.com/sipeed/picoclaw/pull/2364) | changeworldBT | agent | Avoid restoring stale sessions with dangling tool calls |
| [#2726](https://github.com/sipeed/picoclaw/issues/2726) | YellowDusk04 | agent | Bug fix for `generateLeafSummary` acceptance criteria (closed) |
| [#2716](https://github.com/sipeed/picoclaw/issues/2716) | islobodan | channel | Fix SVG file sending on Telegram (closed) |
| [#2431](https://github.com/sipeed/picoclaw/issues/2431) | zuozhehao | tool | Tool execution failures now report which tool was blocked (closed) |

**Key Themes:**
- **Telegram improvements:** Multiple PRs address forum topics, media groups, and typing indicators.
- **Bug fixes:** Cron tasks, session restoration, and provider configuration bugs resolved.
- **New tooling:** `update_plan` tool ported from OpenClaw; Gemini web search provider added.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Author | Comments | Domain |
|-------|-------|--------|----------|--------|
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | [BUG] gateway start abnormal | @darrkz | 8 | channel |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | [BUG] cron task causes channel error | @dhensen | 7 | channel, cron |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | [Feature] Streaming Output for Web Chat | @lc6464 | 6 | channel |
| [#2431](https://github.com/sipeed/picoclaw/issues/2431) | Tool execution failures should report which tool was blocked | @zuozhehao | 4 | tool |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | [Feature] Add in config to send streaming HTTP request | @OuSatoru | 4 | provider, config |

### Most Active PRs (by recent updates)

| PR | Title | Author | Domain |
|----|-------|--------|--------|
| [#2776](https://github.com/sipeed/picoclaw/pull/2776) | fix(telegram): stop typing for topic replies | @bogdanovich | channel |
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | add MQTT channel support | @hehaijunandhenry | channel |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) | fix(seahorse): retrieval tools to current session | @bogdanovich | agent |
| [#2772](https://github.com/sipeed/picoclaw/pull/2772) | fix(telegram): Preserve Telegram forum topic for message tool sends | @bogdanovich | channel |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) | feat(tools): port update_plan tool from OpenClaw | @bogdanovich | tools |

**Analysis:**
- **Telegram channel** is the most active area, with multiple PRs from @bogdanovich improving forum topic handling, media groups, and typing indicators.
- **Streaming capabilities** are requested by multiple users (#1950, #2404), indicating demand for real-time output.
- **MQTT channel support** (#2705) is a new integration request with moderate community interest.

---

## 5. Bugs & Stability

### Critical / High Severity

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Security: `find /` enumerates paths outside workspace sandbox | **High** | Open | No |
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway start abnormal | High | Open | No |
| [#2694](https://github.com/sipeed/picoclaw/issues/2694) | Certificate verification failure in ADB shell | High | Open | No |

### Medium / Low Severity

| Issue | Title | Domain | Status |
|-------|-------|--------|--------|
| [#2716](https://github.com/sipeed/picoclaw/issues/2716) | SVG files fail to send on Telegram | channel | **Closed** (fixed) |
| [#2726](https://github.com/sipeed/picoclaw/issues/2726) | `generateLeafSummary` acceptance criteria issue | agent | Closed |
| [#2471](https://github.com/sipeed/picoclaw/issues/2471) | Cannot add Neometron NVIDIA AI or Gemini models | provider | Closed |
| [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Missing Mission Control integration | agent | Open |

> 🚨 **Security Alert:** Issue #2688 reports that `find /` bypasses the workspace sandbox, allowing filesystem enumeration outside `/var/lib/picoclaw/workspace`. This should be prioritized for a patch release.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Issue | Title | Author | Domain | Predicted for v0.2.8? |
|-------|-------|--------|--------|----------------------|
| [#2705](https://github.com/sipeed/picoclaw/pull/2705) | MQTT channel support | @hehaijunandhenry | channel | Likely |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | @lc6464 | channel | Possible |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming HTTP request config | @OuSatoru | provider | Possible |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) | Provider-backed image generation tool | @bogdanovich | tools | Likely |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | Gemini web search provider | @bogdanovich | providers | Likely |
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) | Config reliability and migration UX | @SiYue-ZO | config | Possible |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) | Context and memory management (magic-context plugin) | @wwth8819 | agent | Future |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | Sub-agent role identity confusion | @sdjeny | agent | Future |

**Roadmap Signals:**
- **Provider expansion:** Image generation and Gemini web search are in-flight.
- **Channel diversification:** MQTT support is under review.
- **Agent architecture:** Multi-agent role management and memory improvements are emerging themes.

---

## 7. User Feedback Summary

### Pain Points

1. **Gateway startup issues** (#2513): Users on Debian 13 with glm4.7 report abnormal gateway startup when using `-public -no-browser` flags.
2. **Cron task failures** (#1757): Scheduled hourly tasks cause channel errors on Raspberry Pi Zero W with Telegram.
3. **Certificate errors on Android** (#2694): Running PicoClaw via ADB shell fails with x509 certificate verification errors.
4. **Config migration UX** (#2771): Example config still uses outdated V2 format; users face friction during upgrades.

### Use Cases & Satisfaction

- **Positive:** PicoClaw successfully launched on NXP i.MX93 EVK (#2646), demonstrating hardware diversity.
- **Positive:** LINE Bot SDK refactor (#2413) reduces maintenance burden and improves reliability.
- **Request:** Users want streaming output for web chat and HTTP requests, aligning with modern LLM interaction patterns.
- **Request:** Mission Control integration (#2698) is desired for enhanced monitoring.

---

## 8. Backlog Watch

### Long-Unanswered or Stale Issues Needing Maintainer Attention

| Issue | Title | Age | Stale? | Priority |
|-------|-------|-----|--------|----------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Cron task causes channel error | ~49 days | Yes | High |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Streaming Output for Web Chat | ~43 days | Yes | Medium |
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | CLI: Improve embedding of workspace files | ~23 days | Yes | Medium |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | CLI: Fix onboard advisory about config files | ~24 days | Yes | Low |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | refactor(line): use official LINE Bot SDK v8 | ~29 days | Yes | Medium |
| [#2695](https://github.com/sipeed/picoclaw/issues/2695) | Documentation for libpicolaw.so on Android | ~8 days | Yes | Low |

### Stale PRs at Risk of Bitrot

| PR | Title | Age | Stale? |
|----|-------|-----|--------|
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | CLI: Improve embedding of workspace files | ~23 days | Yes |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | Add session management commands: /status, /compact, /new | ~24 days | Yes |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | CLI: Fix onboard advisory about config files | ~24 days | Yes |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | refactor(line): use official LINE Bot SDK v8 | ~29 days | Yes |

> ⚠️ **Maintainer Action Recommended:** Several PRs and issues have been stale for 3+ weeks. Consider triaging or closing with a clear roadmap response to maintain community trust.

---

## Summary Metrics (Last 24h)

| Metric | Value |
|--------|-------|
| Issues Updated | 17 |
| PRs Updated | 29 |
| New Releases | 1 (nightly) |
| Open Issues | 13 |
| Closed Issues | 4 |
| Open PRs | 20 |
| Merged/Closed PRs | 9 |

---

*Digest generated for 2026-05-06. Data sourced from github.com/sipeed/picoclaw.*

</details>