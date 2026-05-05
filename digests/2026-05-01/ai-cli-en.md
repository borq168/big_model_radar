# AI CLI Tools Community Digest 2026-05-01

> Generated: 2026-05-01 02:10 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Pi](https://github.com/badlogic/pi-mono)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report

**Date:** 2026-05-01
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code, Pi

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with all eight major platforms actively iterating on release cycles. Today's activity shows 326 combined issues and 303 pull requests across the ecosystem, with 14 releases shipped in the last 24 hours. The dominant themes are **multi-model flexibility**, **permission granularity**, and **session reliability**—reflecting a user base that has moved beyond initial adoption to demanding production-grade tooling. Cross-platform compatibility (particularly Windows and headless environments) remains a persistent friction point, while the emergence of MCP (Model Context Protocol) as a standard is driving convergence on provider extensibility.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Community Size Signal | Velocity Assessment |
|------|-------------|-----------|----------|----------------------|---------------------|
| **Claude Code** | 50 | 50 | 1 | High (177+ 👍 on billing bug) | Rapid iteration |
| **OpenAI Codex** | 50 | 50 | 3 | High (168 👍 on undo request) | Rapid iteration |
| **Gemini CLI** | 50 | 50 | 2 | High (2,342 open backlog) | Rapid iteration |
| **GitHub Copilot CLI** | 41 | 1 | 3 | Moderate | Steady |
| **Kimi Code CLI** | 7 | 13 | 1 | Moderate | Steady |
| **OpenCode** | 50 | 50 | 0 | High (active contributor) | Rapid iteration |
| **Qwen Code** | 28 | 39 | 3 | Moderate | Rapid iteration |
| **Pi** | 50 | 50 | 1 | Moderate | Steady |

**Key Observations:**

- **Gemini CLI** carries the largest open issue backlog (2,342), suggesting either aggressive community engagement or triage challenges
- **GitHub Copilot CLI** shows a stark PR-to-issue ratio (1:41), indicating either low community contribution or internal development cadence
- **Kimi Code CLI** has the lowest issue volume but highest PR-to-issue ratio (13:7), suggesting a contributor-friendly codebase
- **Qwen Code** maintains a healthy balance with strong nightly release cadence (3 releases in 24h)

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide consensus on user needs:

### 3.1 Multi-Model Support & Flexibility

| Tool | Specific Need |
|------|---------------|
| Claude Code | Gateway model discovery via `/v1/models` endpoint |
| OpenAI Codex | Multi-environment process tool model surface |
| Gemini CLI | Gemma 4 models via Gemini API |
| Qwen Code | Fast model isolation for side queries |
| Pi | Cloudflare AI Gateway provider, Xiaomi MiMo |

**Implication:** Users demand heterogeneous model deployments; tools must abstract provider differences while exposing granular control.

### 3.2 Permission Granularity & Auto-Approval

| Tool | Specific Need |
|------|---------------|
| Claude Code | Glob pattern matching for permission rules |
| OpenAI Codex | Tool whitelist for interactive mode (13 👍) |
| Kimi Code CLI | Granular auto-approval rules |
| GitHub Copilot CLI | Tool whitelist (11 👍), MCP permissions config |

**Implication:** The allow-all vs. per-tool model is insufficient; users want risk-tiered permission profiles (e.g., auto-approve safe reads, prompt for writes).

### 3.3 Session Persistence & Memory Management

| Tool | Specific Need |
|------|---------------|
| Claude Code | Session window depletion regression |
| Gemini CLI | Memory routing (global vs. project) |
| Kimi Code CLI | ACP protocol session history |
| Qwen Code | Auto-memory recall blocking, session dir env |
| Pi | Context-file discovery configuration |

**Implication:** Long-running agent sessions require robust state management; memory systems are evolving from simple context windows to persistent, cross-session knowledge.

### 3.4 Cross-Platform Terminal Compatibility

| Tool | Specific Need |
|------|---------------|
| Claude Code | Windows CLI resize, Intel Mac SIGILL |
| OpenAI Codex | Windows browser-use false positives, SSH scrolling |
| Kimi Code CLI | Headless Linux clipboard, Windows image paste |
| Qwen Code | Windows /quit hang, WSL clipboard |
| Pi | Shift+Enter legacy terminals, Windows stdout |

**Implication:** The "works on my machine" problem is amplified in CLI tools where terminal emulation, SSH, and WSL create complex edge cases.

### 3.5 MCP (Model Context Protocol) Integration

| Tool | Specific Need |
|------|---------------|
| Claude Code | MCP OAuth trailing slash issues |
| GitHub Copilot CLI | Client credentials OAuth for MCP servers |
| OpenAI Codex | MCP elicitations through Guardian |
| OpenCode | Google Stitch MCP integration docs |

**Implication:** MCP is becoming the standard for tool extensibility; authentication and permission routing for MCP servers are critical gaps.

---

## 4. Differentiation Analysis

### 4.1 Feature Focus

| Tool | Primary Differentiator | Secondary Focus |
|------|----------------------|-----------------|
| **Claude Code** | Billing transparency, gateway model discovery | HERMES.md routing bug fix, project purge |
| **OpenAI Codex** | Goal workflows, multi-environment support | Computer Use controls, undo (168 👍) |
| **Gemini CLI** | Agent reliability, memory routing | AST-aware file operations, backlog health |
| **GitHub Copilot CLI** | OAuth MCP authentication | Shell completions, Co-authored attribution |
| **Kimi Code CLI** | ACP protocol, Zed integration | Visual context progress, plugin .zip install |
| **OpenCode** | Instance context refactoring | Memory megathread (70 comments) |
| **Qwen Code** | FileReadCache, SubAgent display | Model cost estimation, review pipeline |
| **Pi** | Cloudflare AI Gateway, Shiki highlighting | Local-LLM extensions, Mistral Medium 3.5 |

### 4.2 Target Users

| Tool | Primary Audience | Positioning |
|------|-----------------|-------------|
| **Claude Code** | Anthropic ecosystem users, Max subscribers | Premium, billing-focused |
| **OpenAI Codex** | OpenAI Pro+ users, goal-oriented workflows | Productivity, multi-turn tasks |
| **Gemini CLI** | Google Cloud users, enterprise | Cloud-native, scalable |
| **GitHub Copilot CLI** | GitHub ecosystem users | Developer-native, VS Code adjacent |
| **Kimi Code CLI** | Chinese market, Moonshot users | Regional, ACP-first |
| **OpenCode** | Power users, self-hosters | Open-source, extensible |
| **Qwen Code** | Qwen/Alibaba ecosystem users | Open-source, fast iteration |
| **Pi** | Indie developers, minimalists | Lightweight, provider-agnostic |

### 4.3 Technical Approach

| Tool | Architecture Signature | Notable Patterns |
|------|----------------------|------------------|
| **Claude Code** | Rust backend, gateway abstraction | Model picker from `/v1/models` |
| **OpenAI Codex** | Multi-agent orchestrator | Goal persistence, turn environments |
| **Gemini CLI** | Effect-based architecture | InstanceState.context yielding |
| **GitHub Copilot CLI** | ACP protocol, slash commands | Client credentials OAuth |
| **Kimi Code CLI** | ACP-first design | Session history replay |
| **OpenCode** | Rust core, TypeScript UI | Instance context propagation |
| **Qwen Code** | Nightly-driven, Shiki integration | FileReadCache, review pipeline |
| **Pi** | Provider-agnostic, npm-based | Cloudflare gateway, Bun support |

---

## 5. Community Momentum & Maturity

### 5.1 Community Activity Rankings

| Rank | Tool | Momentum Signal | Maturity Indicator |
|------|------|-----------------|-------------------|
| 1 | **Claude Code** | 177 👍 on billing bug, 71 👍 on working directory | Mature, production-focused |
| 2 | **OpenAI Codex** | 168 👍 on undo, 13 👍 on tool whitelist | Mature, feature-rich |
| 3 | **Gemini CLI** | 2,342 open issues, 50 new in 24h | Rapid growth, triage needed |
| 4 | **OpenCode** | Active contributor @kitlangton, 10+ refactor PRs | Contributor-friendly |
| 5 | **Qwen Code** | 3 releases/24h, 39 PRs | Fast iteration, nightly-driven |
| 6 | **Pi** | 50 PRs, Cloudflare integration | Steady, provider expansion |
| 7 | **Kimi Code CLI** | 13 PRs vs 7 issues | Contributor-friendly ratio |
| 8 | **GitHub Copilot CLI** | 41 issues, 1 PR | Low community contribution |

### 5.2 Iteration Velocity

- **Fastest Release Cadence:** Qwen Code (3 releases/24h including nightly), OpenAI Codex (3 releases including alpha)
- **Most Active Refactoring:** OpenCode (instance context propagation across 6+ PRs), Gemini CLI (Effect-based architecture)
- **Highest Community Engagement:** Claude Code (billing bug 177 👍), OpenAI Codex (undo request 168 👍)
- **Largest Backlog Pressure:** Gemini CLI (2,342 open issues)

### 5.3 Contributor Health

| Tool | External Contributors | Maintainer Response | Issue Resolution Speed |
|------|----------------------|--------------------|-----------------------|
| **Claude Code** | High | Active | Moderate (billing bug took time) |
| **OpenAI Codex** | High | Active | Fast (undo request acknowledged) |
| **Gemini CLI** | High | Automated (stale policy) | Slow (backlog pressure) |
| **OpenCode** | Moderate | Active (@kitlangton) | Fast |
| **Qwen Code** | Moderate | Active | Fast |
| **Pi** | Moderate | Active | Fast |
| **Kimi Code CLI** | Moderate | Active | Fast |
| **GitHub Copilot CLI** | Low | Limited | Slow |

---

## 6. Trend Signals

### 6.1 Industry Trends from Community Feedback

**1. Billing Transparency is a Critical Trust Factor**

Claude Code's HERMES.md routing bug (177 👍, 81 comments) and OpenAI Codex's Pro quota depletion issues (23 comments) reveal that **unexpected costs erode user trust faster than feature gaps**. Expect tools to add real-time credit tracking, clearer quota indicators, and billing anomaly alerts.

**2. MCP is the Extensibility Standard**

Four of eight tools (Claude Code, GitHub Copilot CLI, OpenAI Codex, OpenCode) are actively improving MCP integration. The trend toward **provider-agnostic tool discovery** via MCP signals a shift from built-in tool sets to ecosystem-extensible architectures.

**3. Multi-Model Deployments are the Norm**

Rather than single-provider lock-in, users expect to configure main/fast model pairs, switch between providers dynamically, and route requests through gateways (Cloudflare AI Gateway, Anthropic gateway). The **model picker abstraction** (Claude Code's `/v1/models` discovery) will become expected.

**4. Permission Systems Need Granularity**

The repeated requests for tool whitelists (OpenAI Codex 13 👍, GitHub Copilot CLI 11 👍) and auto-approval rules (Kimi Code CLI) indicate that **binary allow/deny is insufficient**. Risk-tiered permission profiles will become standard.

**5. Cross-Platform is Still Hard**

Windows issues dominate hot issue lists across 5 of 8 tools. The complexity of Windows Defender false positives, WSL clipboard, SSH terminal emulation, and legacy terminal support suggests **cross-platform will remain a competitive differentiator** for years.

**6. Memory and Session Persistence are Maturing**

From Gemini CLI's memory routing to Qwen Code's auto-memory recall to Claude Code's session window depletion concerns, the industry is **graduating from context windows to persistent memory systems**. This includes both AI-managed memory and user-defined context.

**7. Undo/Recovery is a Top Request**

OpenAI Codex's undo request (168 👍) and Claude Code's file write permission request (38 👍) indicate users want **safer experimentation**. Tools that prevent data loss will differentiate in enterprise contexts.

### 6.2 Signals for Technical Decision-Makers

| Signal | Implication |
|--------|-------------|
| **MCP OAuth maturity** (GitHub Copilot CLI client credentials) | Headless MCP authentication is now feasible; enterprise deployments can automate MCP server setup |
| **Instance context refactoring** (OpenCode, Gemini CLI) | Architectural patterns are evolving toward explicit context propagation; expect cleaner APIs |
| **Review pipeline expansion** (Qwen Code) | AI-assisted code review is becoming a first-class feature; not just linting |
| **Cloudflare AI Gateway** (Pi) | Gateway-as-a-provider is a viable business model; caching, rate limiting, and analytics at the proxy layer |
| **Nightly-driven releases** (Qwen Code, Gemini CLI) | Continuous delivery is standard; users expect daily or hourly updates |

### 6.3 Signals for Developers

| Signal | Recommendation |
|--------|----------------|
| **Cross-platform testing is essential** | Invest in Windows/WSL/headless Linux test coverage; these are the highest-friction environments |
| **Billing edge cases cause outsized impact** | Audit your tool's API routing logic for silent cost leaks (e.g., HERMES.md patterns) |
| **Permission systems need UX investment** | Design tiered permission profiles; don't just expose raw allow/deny |
| **MCP is worth learning** | Understanding Model Context Protocol will be valuable across all tools |
| **Session state is fragile** | Implement explicit session persistence and recovery; don't rely on implicit state |

---

## Summary

The AI CLI tools ecosystem is in a **high-velocity maturation phase** with all major platforms iterating rapidly. Claude Code and OpenAI Codex lead in community engagement, while Gemini CLI and OpenCode show the most aggressive architectural refactoring. The shared directions—multi-model flexibility, permission granularity, session persistence, and MCP integration—represent the industry's collective answer to production-grade tooling demands. Cross-platform compatibility remains the persistent friction point, while billing transparency has emerged as a critical trust factor. Decision-makers should prioritize tools that demonstrate active maintenance, clear communication on breaking changes, and investment in permission system design.

---

*Cross-tool analysis synthesized from individual community digests for 2026-05-01. Data sources: GitHub activity across 8 repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code Community Digest — 2026-05-01

## Today's Highlights

The v2.1.126 release introduces gateway model discovery and a new project purge command, while the community grapples with a critical billing bug where `HERMES.md` in git history silently routes API requests to extra usage instead of plan quota. Session window consumption issues and OAuth authentication problems are driving significant discussion.

---

## Releases

### v2.1.126
- **Model Picker Enhancement**: The `/model` picker now dynamically lists models from your gateway's `/v1/models` endpoint when `ANTHROPIC_BASE_URL` points at an Anthropic-compatible gateway, enabling easier model switching for custom deployments.
- **New CLI Command**: Added `claude project purge [path]` to delete all Claude Code state for a project, including transcripts, tasks, file history, and config entries—useful for resetting project context.

---

## Hot Issues

### 1. HERMES.md Billing Bug — 81 comments, 177 👍 [CLOSED]
**Issue #53262**: Git repositories containing the case-sensitive string `HERMES.md` in commit history cause Claude Code to route API requests to "extra usage" billing instead of Max plan quota. Users report silently burning $200 in credits while their Max 20x plan capacity remained unused.

**Why it matters**: This is a silent, financially damaging bug affecting any developer who has worked with documentation files named HERMES.md. The high engagement (177 👍) signals widespread concern about unexpected billing.

---

### 2. Subscription Downgrade Bug — 35 comments, 8 👍
**Issue #41581**: Max subscriptions are being downgraded to Free plan without user action, disrupting active workflows.

**Why it matters**: Subscription management bugs erode trust and can cause unexpected service interruptions during critical development work.

---

### 3. Windows CLI Window Resize — 23 comments, 30 👍
**Issue #6481**: Claude Code CLI exhibits resize behavior problems on Windows, affecting terminal usability.

**Why it matters**: Windows is a primary development platform; UI/TUI issues directly impact daily productivity for a significant user segment.

---

### 4. Working Directory Change Request — 23 comments, 71 👍
**Issue #3473**: Feature request to change the working directory during an active Claude session, currently bound to the initial spawn directory.

**Why it matters**: High 👍 count (71) indicates strong demand for multi-project workflow flexibility. This is a frequently requested quality-of-life improvement.

---

### 5. File Write/Update Permission — 21 comments, 38 👍
**Issue #16550**: Request to allow Claude to write and update project files directly, expanding beyond read-only operations.

**Why it matters**: This would fundamentally change Claude Code's role from an assistant to a more autonomous coding partner, representing a major capability expansion.

---

### 6. Session Window Depletion Regression — 19 comments, 8 👍
**Issue #55053**: Since April 29, 2026, the 5-hour session window depletes 5–10× faster than before for equivalent work. Light editing sessions burn 20–25% in under an hour.

**Why it matters**: This regression dramatically increases token consumption, directly impacting cost predictability for users on metered plans.

---

### 7. Intel Mac SIGILL Crash — 14 comments [CLOSED]
**Issue #50466**: v2.1.113 crashes with SIGILL "illegal hardware instruction" on Ivy Bridge (AVX2-less) Intel Macs—a regression from v2.1.112.

**Why it matters**: Affects developers on older Intel hardware, forcing downgrades or workarounds. The duplicate issue (#37065) confirms this is a broader compatibility problem.

---

### 8. Thinking Process Visibility — 7 comments, 26 👍
**Issue #24285**: Users cannot see Claude's thinking process on Windows and Linux platforms.

**Why it matters**: The thinking block is a key feature for understanding Claude's reasoning; visibility issues reduce trust and utility.

---

### 9. Memory Leak Since v2.1.118 — 5 comments
**Issue #54200**: RAM usage grows to 10GB within 30 seconds of session start on v2.1.118+, affecting specific projects.

**Why it matters**: Memory leaks degrade system performance and can crash sessions, particularly problematic for long-running development work.

---

### 10. Git Required False Positive — 5 comments
**Issue #44297**: Desktop app blocks new sessions with "Git is required" despite git being fully functional.

**Why it matters**: False positives in dependency checks create unnecessary friction and prevent developers from starting work.

---

## Key PR Progress

### 1. Statusline Script with Context/Rate Limit Bars — #55098
Adds `examples/statusline/statusline-command.sh` showing model name, current directory, color-coded context window bar, session cost, clock, and 5-hour rate limit bar. Includes Windows (Git Bash) support.

---

### 2. Devcontainer Firewall Fix — #19871
Fixes ipset duplicate entry errors in devcontainer by adding `-exist` flag to ipset commands, preventing postStartCommand failures when DNS returns duplicate IPs.

---

### 3. Hookify YAML Parser Fix — #54873
Two bugs fixed: (1) hand-rolled YAML parser double-escapes backslashes in `config_loader.py`, and (2) `new_text` field not properly handled on Write operations. Includes a 39-test-case regression harness.

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Theme | Description | Representative Issues |
|-------|-------------|----------------------|
| **Multi-Model Support** | Parallel usage of third-party LLM models alongside Claude | #55163 |
| **Dynamic Working Directory** | Change project directory mid-session | #3473 |
| **Autonomous File Operations** | Allow Claude to write/update files without explicit prompts | #16550 |
| **Credit Balance Visibility** | Expose API credit balance to statusLine scripts | #47574 |
| **Enhanced Permissions** | Better glob pattern matching for permission rules | #55165 |

---

## Developer Pain Points

1. **Billing Surprises**: HERMES.md routing bug and session window depletion issues indicate fragile billing logic that can unexpectedly increase costs.

2. **Platform Inconsistencies**: Windows TUI issues, macOS desktop app problems, and Linux memory leaks suggest uneven platform support.

3. **Authentication Fragility**: OAuth refresh failures (#54443) and MCP OAuth trailing slash issues (#52871) cause repeated login prompts and session interruptions.

4. **Hardware Compatibility**: SIGILL crashes on older Intel CPUs (Ivy Bridge, Westmere) indicate the binary may require AVX2, breaking backward compatibility.

5. **Session State Corruption**: Issues with Dispatch sessions getting wedged (#55123), resume crashes (#55162), and mode reminder inconsistencies (#55171) suggest fragile session management.

6. **Permission System Complexity**: Glob pattern mismatches in allow rules create friction for developers trying to configure secure workflows.

---

*Generated from GitHub data — github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-05-01
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The v0.128.0 release introduces **persisted `/goal` workflows** with full app-server API integration, model tools, runtime continuation, and new TUI controls for create/pause/resume/clear operations. Windows developers face continued friction with browser-use plugins triggering false-positive antivirus detections and bundled node.exe access errors. The community is actively requesting an `/undo` feature (168 👍) to recover from unintended file modifications outside git tracking.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.128.0** | Stable | Persisted `/goal` workflows with app-server APIs, model tools, runtime continuation, and TUI controls (create, pause, resume, clear). Configurable TUI keymaps and plan-mode nudges. |
| **v0.129.0-alpha.1** | Alpha | Early preview release. |
| **v0.128.0-alpha.1** | Alpha | Alpha preview of v0.128.0 features. |

---

## 3. Hot Issues

| # | Issue | Impact | Community Reaction |
|---|-------|--------|-------------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **Request: `/undo` command** — Undo file deletions/modifications not tracked by git | **168 👍** — Highest demand; users report losing untracked work repeatedly | Long-standing request; developers cite this as a critical safety feature |
| [#18258](https://github.com/openai/codex/issues/18258) | **macOS: Computer Use plugin unavailable** despite bundled files existing | **36 👍**, 32 comments | Workaround available via `features.apps = true` in config; users await official fix |
| [#19585](https://github.com/openai/codex/issues/19585) | **Pro $200 weekly limit depletes fast on GPT-5.5** with unstable context compaction | **23 comments**, 9 👍 | Pro users report 5x faster quota consumption; impacts heavy workflows |
| [#18341](https://github.com/openai/codex/issues/18341) | **Mac app: Persistent blurred overlay** below composer on Intel Mac (macOS 15.0.1) | **23 comments**, 9 👍 | Visual bug affects Intel Mac users; likely rendering regression |
| [#20161](https://github.com/openai/codex/issues/20161) | **Auth: Phone number required** when logging in via SSO on new device | **13 comments**, 6 👍 | Users frustrated by unexpected verification barrier |
| [#11014](https://github.com/openai/codex/issues/11014) | **Scrolling breaks** when running CLI over SSH with iOS client apps | **13 comments**, 2 👍 | Terminal compatibility issue across Ubuntu/Mac; affects remote workflows |
| [#4218](https://github.com/openai/codex/issues/4218) | **Shift+Enter regression**: Inserts line break instead of sending prompt (macOS) | **13 comments**, 13 👍 | Re-emergence of old bug; disrupts power-user workflows |
| [#3941](https://github.com/openai/codex/issues/3941) | **Environment setup hangs indefinitely** on codex-web | **12 comments** | Blocks web users; session stuck at "Setting up environment" |
| [#18450](https://github.com/openai/codex/issues/18450) | **Remote compact task stream disconnected** during context compaction | **10 comments**, 6 👍 | Connectivity issue causes compaction failures |
| [#20315](https://github.com/openai/codex/issues/20315) | **Windows: browser-use marked as trojan** by Windows Defender | **7 comments**, 4 👍 | False positive blocks browser automation; affects security-conscious users |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#20281](https://github.com/openai/codex/pull/20281) | **Selected turn environments for runtime context** | Makes selected turn environments the source of truth for session runtime cwd and MCP environment selection |
| [#20520](https://github.com/openai/codex/pull/20520) | **Persist selected environments in turn context replay** | Restores environments when replaying, resuming, or forking threads |
| [#20314](https://github.com/openai/codex/pull/20314) | **Gate multi-environment process tool model surface** | Exposes `environment_id` only when multiple turn environments are selected |
| [#20530](https://github.com/openai/codex/pull/20530) | **Support multi-env filesystem tools** | Adds `environment_id` schema for `apply_patch`, `list_dir`, and `view_image` |
| [#20488](https://github.com/openai/codex/pull/20488) | **Add Computer Use requirements** | Implements `allow_persistent_approval`, `allowed_bundle_ids`, and `denied_bundle_ids` config |
| [#19431](https://github.com/openai/codex/pull/19431) | **Route opted-in MCP elicitations through Guardian** | Browser Use origin-access prompts now route through Guardian approval path |
| [#20300](https://github.com/openai/codex/pull/20300) | **Centralize thread analytics state** | Consolidates per-thread attribution state across analytics event families |
| [#20265](https://github.com/openai/codex/pull/20265) | **Key remote plugin cache by account** | Tracks remote plugin cache with ChatGPT account-scoped key |
| [#20540](https://github.com/openai/codex/pull/20540) | **Move apply-patch file changes into turn items** | Adds core `TurnItem::FileChange` for unified item lifecycle |
| [#20542](https://github.com/openai/codex/pull/20542) | **Prune unused code-mode globals** | Hides Atomics, SharedArrayBuffer, WebAssembly from code-mode runtime |

---

## 5. Feature Request Trends

| Trend | Evidence |
|-------|----------|
| **Undo/Recovery** | #9203 (168 👍) — Undo non-git-tracked changes; prevent data loss |
| **Dynamic Reasoning Control** | #20477 — Change reasoning effort on-the-fly without restarting CLI |
| **Session Lifecycle Hooks** | #20374 — Add `SessionEnd` hook for analytics flush, transcript archive, cleanup |
| **Multi-Environment Support** | Multiple PRs (#20281, #20520, #20314, #20530) — Enhanced environment isolation and switching |
| **Account Management** | #20546 — Account switching in desktop client (currently web-only) |
| **Documentation** | #20536 — Document `/goal` CLI command and Goals lifecycle |
| **Computer Use Controls** | #20488 — Granular approval and bundle ID restrictions |

---

## 6. Developer Pain Points

| Category | Details |
|----------|---------|
| **Windows Platform Issues** | Browser-use flagged as malware by Windows Defender (#20315); bundled node.exe fails with "Access is denied" (#19271); frequent freezes/stutters on Windows 11 (#20214); performance regressions (#20525) |
| **macOS Platform Issues** | Computer Use plugin unavailable despite files present (#18258); blurred overlay on Intel Macs (#18341); Shift+Enter regression (#4218) |
| **Rate Limits & Context** | Pro quota depletes rapidly with GPT-5.5 (#19585); low cache hit rate with GPT-5.5 (#20301); context compaction failures (#18450, #19910) |
| **Terminal Compatibility** | Scrolling breaks over SSH with iOS clients (#11014); Alt+Enter regression in VS Code WSL terminal (#20501) |
| **Auth Edge Cases** | Phone number prompts on SSO login (#20161); token refresh errors on remote connections (#19531); OAuth step-up for MCP transport (#20518) |
| **VS Code Extension** | Error/log loop precedes renderer crashes (#18515) |
| **Safety False Positives** | Non-cybersecurity tasks flagged (#19601); invalid prompt errors (#7250) |

---

*Generated for the OpenAI Codex developer community. Data collected from GitHub activity on 2026-05-01.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-01

## Today's Highlights

The Gemini CLI team shipped two patch releases (v0.40.1 and v0.41.0-preview.1) addressing a cherry-picked fix for release stability. Community activity is high with 50 new issues and PRs in the last 24 hours, including a significant new feature enabling Gemma 4 models via the Gemini API and a fix preventing infinite retry loops during backend outages. The repository's open issue backlog has grown to 2,342 items, prompting automated stale-policy optimization efforts.

---

## Releases

| Version | Type | Summary |
|---------|------|---------|
| **v0.41.0-preview.1** | Preview | Cherry-pick fix from commit 2194da2 to patch v0.41.0-preview.0; resolves release branch stability issue. |
| **v0.40.1** | Patch | Cherry-pick same fix (2194da2) to v0.40.0 branch for production users. |

Both releases address the same underlying fix propagated across active release branches. No breaking changes.

- Release v0.41.0-preview.1: https://github.com/google-gemini/gemini-cli/pull/26269
- Release v0.40.1: https://github.com/google-gemini/gemini-cli/pull/26268

---

## Hot Issues

| # | Title | Area | Why It Matters | Community Reaction |
|---|-------|------|----------------|-------------------|
| **#22745** | Assess impact of AST-aware file reads, search, and mapping | Agent | Epic tracking whether AST-aware tools can reduce token noise and misaligned reads—potential major efficiency gain. | 5 comments, 1 👍 |
| **#22323** | Subagent recovery after MAX_TURNS reports GOAL success, hiding interruption | Agent | Critical reliability bug: subagents silently fail and report success despite hitting turn limits, masking incomplete work. | 4 comments, 2 👍 |
| **#24916** | Gemini CLI keeps asking for permissions on the same file | Security | User experience pain point—permission prompts repeat unexpectedly even after "allow for all future sessions." | 3 comments |
| **#24353** | Robust component-level evaluations | Agent | Epic tracking expansion of behavioral eval tests (currently 76) across 6 supported Gemini models—key for regression prevention. | 3 comments |
| **#25166** | Shell command execution gets stuck with "Waiting input" after command completes | Core | High-impact UX bug: CLI hangs after simple shell commands finish, requiring manual intervention. | 2 comments, 3 👍 |
| **#23571** | Model frequently creates tmp scripts in random spots | Agent | Causes workspace clutter and commit hygiene issues when model is restricted from shell execution. | 2 comments |
| **#22267** | Browser Agent ignores settings.json overrides (e.g., maxTurns) | Agent | Configuration system inconsistency—global/project settings are ignored by browser agent specifically. | 2 comments |
| **#26301** | Voice mode cloud backend requires GEMINI_API_KEY and does not support existing CLI auth | Core | OAuth users cannot use cloud voice mode without detouring to AI Studio—breaks seamless auth flow. | 1 comment |
| **#24246** | Gemini CLI encounters 400 error with > 128 tools | Agent | API limitation causing failures when many tools are enabled—impacts extensibility. | 1 comment |
| **#22819** | Implement memory routing: global vs. project | Agent | Key architectural issue: memory subagent needs to route saves to global (~/.gemini/) vs. project (.gemini/) contexts. | 1 comment, 2 👍 |

---

## Key PR Progress

| # | Title | Author | Status | Significance |
|---|-------|--------|--------|--------------|
| **#26306** | fix(core): prevent infinite retry loop on persistent backend errors | @masqquerade | OPEN | Critical resilience fix—prevents CLI from hanging indefinitely during service outages or quota exhaustion. |
| **#26307** | feat(config): enable Gemma 4 models by default via Gemini API | @Abhijit-2592 | OPEN | Enables Gemma 4 access by default; removes "experimental" label and updates documentation. |
| **#26305** | feat(cli): add /mcp remove slash command for interactive server removal | @martin-hsu-test | OPEN | Completes MCP lifecycle management—adding/removing MCP servers now symmetric. |
| **#25657** | feat(cli): add /restart slash command | @martin-hsu-test | OPEN | Gracefully restarts CLI and auto-resumes chat session—improves auto-update UX. |
| **#26304** | Backlog Health & Stale Policy Optimization | @gemini-cli-robot | OPEN | Automated response to 2,342 open issues; adds backlog health metrics and stale policy improvements. |
| **#26303** | feat(bot): improve nuanced conflict detection and validation in system prompts | @gundermanc | OPEN | Enhances bot's ability to identify architectural conflicts without premature deletion of complementary workflows. |
| **#26073** | Fix bulk of remaining issues with generalist profile | @joshualitt | OPEN | Resolves multiple generalist profile bugs; closes #26072. |
| **#25352** | fix(cli): Massive logs cause scrolling lag and inefficient positioning | @mini2s | OPEN | Adds search and level-based filtering to debug console—improves troubleshooting UX. |
| **#26189** | fix(cli): prevent Windows bash backspace from triggering delete-word | @dreamaeiou | OPEN | Fixes Windows terminal compatibility issue where backspace incorrectly triggered DELETE_WORD_BACKWARD. |
| **#18499** | feat: Add voice input with pluggable backend (Gemini zero-install + Whisper) | @fayerman-source | CLOSED | Merged feature adding native voice input with zero-install Gemini backend and optional Whisper support. |

---

## Feature Request Trends

Analysis of 50 recent issues reveals these dominant feature directions:

1. **Agent Reliability & Recovery** — Multiple issues (#22323, #23582, #22232) request better handling of subagent failures, turn limits, and session recovery.
2. **Memory & Context Management** — Strong interest in memory routing (#22819), proactive memory writes (#22809), and AST-aware codebase mapping (#22745, #22746).
3. **Configuration & Settings Parity** — Users expect consistent behavior across agents; browser agent ignoring settings.json (#22267) highlights gaps.
4. **Tool & Extension Improvements** — MCP lifecycle completion (#26305), better tool scoping (#24246), and behavioral evaluations for tool selection (#26292).
5. **Terminal & UX Polish** — Scroll issues (#24470), SSH text scrambling (#24202), Windows terminal compatibility (#26189), and permission persistence (#24916).

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Permission prompts repeat unexpectedly** | High | Forces repeated user intervention; breaks "allow for all sessions" expectation. |
| **Shell commands hang after completion** | High | CLI becomes unresponsive; requires manual restart. |
| **Subagent failures masked as success** | High | Silent data loss; users don't know work is incomplete. |
| **Browser agent ignores configuration** | Medium | Forces users to work around missing settings support. |
| **Massive logs cause UI lag** | Medium | Debug console becomes unusable during high-volume operations. |
| **Windows terminal key handling issues** | Medium | Backspace and special characters behave incorrectly in Git Bash/MSYS2. |
| **Large open backlog (2,342 issues)** | Growing concern | Community visibility into issue triage and prioritization declining. |

---

*Digest generated from GitHub data for [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) on 2026-05-01.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

**Date:** 2026-05-01
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

GitHub Copilot CLI has released three rapid updates (v1.0.40-1/2/3) introducing headless OAuth authentication for MCP servers, Azure DevOps repository detection, and expanded availability of session history and chronicle features. The community continues to surface critical issues including segmentation faults on Alpine Linux and rate limiting concerns, while feature requests around tool permissions and subagent visibility gain significant traction.

---

## 2. Releases

### v1.0.40-3 (Latest)
- **Added:** Support for `client_credentials` OAuth grant type for MCP servers, enabling fully headless authentication without browser interaction
- **Improved:** Print "Exiting…" to stderr immediately on Ctrl+C during prompt mode for visible shutdown progress
- **Improved:** `/research` command now uses an orchestrator/subagent model

### v1.0.40-2
- **Fixed:** `/update` no longer re-submits the original `-i` prompt after restarting

### v1.0.40-1
- **Added:** Azure DevOps repository detection with automatic GitHub MCP server disabling
- **Added:** Session history, file tracking, and `/chronicle` command now available to all users
- **Added:** Skills available as slash commands in ACP clients, matching CLI experience
- **Improved:** CLI startup performance enhancements

---

## 3. Hot Issues

### 1. Tool Calls Cause Segmentation Fault on Alpine Linux
**Issue #107** | 14 comments | 4 👍
A critical bug affecting Alpine Linux users causes segmentation faults during any tool call in interactive mode or with the `-p` flag. This blocks production use in Docker Alpine containers.
🔗 https://github.com/github/copilot-cli/issues/107

### 2. Auto-Inject Co-authored by Copilot for Commits
**Issue #1455** | 10 comments | 2 👍
Feature request to automatically add "Co-authored by Copilot" attribution to commits, similar to Claude's implementation. Users currently rely on commit hooks for this functionality.
🔗 https://github.com/github/copilot-cli/issues/1455

### 3. Tool Whitelist for Interactive Mode
**Issue #1973** | 9 comments | 13 👍
Users request granular permission control to auto-approve safe read-only operations (grep, cat, find, git log) without enabling destructive tools. Currently, only `/allow-all` or manual approval per tool exists.
🔗 https://github.com/github/copilot-cli/issues/1973

### 4. Weekly Rate Limit Not Resetting (Copilot Pro+)
**Issue #2769** | 9 comments | 3 👍
Pro+ subscribers report rate limits not resetting at expected times, causing service interruptions.
🔗 https://github.com/github/copilot-cli/issues/2769

### 5. Turn Off Alt-Screen Views
**Issue #1799** | 8 comments | 4 👍
Recent alt-screen implementation causing issues for multiple users; request for configuration option to disable.
🔗 https://github.com/github/copilot-cli/issues/1799

### 6. Add Shell Completions
**Issue #334** | 6 comments | 11 👍
Long-standing request for `copilot completion zsh/bash/fish` command to generate shell tab completions.
🔗 https://github.com/github/copilot-cli/issues/334

### 7. Git Commit Attribution for AI-Assisted Changes
**Issue #975** | 5 comments | 3 👍
Request to automatically include AI attribution metadata in Git commits when code was generated or modified by Copilot.
🔗 https://github.com/github/copilot-cli/issues/975

### 8. MCP Permissions Configuration
**Issue #3028** | 3 comments | 1 👍
Feature request for configuration allowance to control which tools from MCP servers can be used, similar to trustedFolders configuration.
🔗 https://github.com/github/copilot-cli/issues/3028

### 9. Show Subagent Tool Call Details
**Issue #1322** | 3 comments | 10 👍
Request for visibility into subagent tool calls during execution, matching VS Code Copilot Chat's drill-down capability.
🔗 https://github.com/github/copilot-cli/issues/1322

### 10. Weekly Rate Limiting - Include Suggestions
**Issue #2828** | 3 comments | 3 👍
When rate limited, users want actionable suggestions on how to proceed rather than just reset time.
🔗 https://github.com/github/copilot-cli/issues/2828

---

## 4. Key PR Progress

### 1. Install: Retry Without Token When Authenticated Requests Fail
**PR #1968** | Author: @devm33
Adds automatic retry logic for installation: attempts download with `GITHUB_TOKEN` first, then falls back to unauthenticated request if SAML enforcement rejects the token. Resolves installation failures for org members without SSO authorization.
🔗 https://github.com/github/copilot-cli/pull/1968

---

## 5. Feature Request Trends

Analysis of 41 active issues reveals the following dominant feature directions:

| Trend | Description | Notable Issues |
|-------|-------------|----------------|
| **Permission Granularity** | Fine-grained tool permissions beyond allow-all vs. per-tool approval | #1973, #1995, #3028 |
| **MCP Server Integration** | Enhanced MCP configuration, permissions, and sampling support | #3028, #2882, #3059 |
| **AI Attribution** | Automatic Co-authored-by metadata for commits | #1455, #975 |
| **Subagent Visibility** | Debugging and visibility into agent tool calls | #1322 |
| **Rate Limit UX** | Better messaging and suggestions during rate limits | #2828, #2769 |
| **Shell Completions** | Native tab completion support | #334 |
| **Custom Agents** | Inheritance/composition for shared base prompts | #3061 |
| **Alternative VCS Support** | Non-Git version control system compatibility | #1381 |

---

## 6. Developer Pain Points

### Critical Issues
- **Alpine Linux Segmentation Faults** (#107): Blocks Docker-based workflows entirely
- **Sudo Command Hangs** (#1082): CLI hangs indefinitely on privileged commands without password prompt
- **File Write Failures** (#3049): Consistent failures when creating plans without code changes

### Authentication & Session Management
- **Re-authentication Loop** (#3057): Users must re-authenticate via browser on every session
- **Token SSO Issues** (#1968): Installation fails for org members without SAML authorization

### Configuration & Control
- **No Alt-Screen Disable** (#1799): Users cannot revert to previous rendering behavior
- **Organization Custom Instructions** (#1406): No way to enforce org-wide guidance in CLI
- **DeepSeek API Support** (#2995): Cannot configure alternative model providers

### MCP Ecosystem
- **VSCode MCP.json Deprecation** (#3059): Breaking change requiring dual configuration
- **MCP Sampling in Non-Interactive Mode** (#2882): Sampling always declined with `--allow-all`

---

*Generated from GitHub Copilot CLI community data*
*Next digest will be available 2026-05-02*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-05-01
**Source:** github.com/MoonshotAI/kimi-cli

---

## 1. Today's Highlights

Kimi Code CLI v1.41.0 shipped with critical fixes for clipboard functionality on headless Linux and plugin installation flexibility. The community is actively addressing cross-platform compatibility issues, with 7 new issues and 13 pull requests in the last 24 hours. Notable developments include ACP protocol improvements for Zed integration and a new auto-approval configuration feature.

---

## 2. Releases

### v1.41.0 (Released 2026-04-30)
Two key fixes included in this release:

- **Clipboard Fix:** Enabled clipboard image paste on headless Linux accessed via SSH ([#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115))
- **Plugin Installation:** Added support for installing plugins directly from `.zip` URLs via HTTP(S) ([#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126))

---

## 3. Hot Issues

### 🔴 Critical / High Priority

**1. [#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131) - Environment Variable Pollution Causing Desktop App Crash**
*Author: @vmware001 | 1 comment*
Kimi Code CLI v1.40.0 pollutes session environment variables, causing the Kimi desktop application to crash immediately on startup. This is a blocking issue for users who run both CLI and desktop versions.

**2. [#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127) - ACP Protocol Session Methods Not Implemented**
*Author: @zhaoxu-233 | 0 comments*
The `session/list` and `session/get` methods of the ACP protocol are missing, preventing Zed editor from loading conversation history. This breaks the Zed integration workflow.

**3. [#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) - Ctrl-V Cannot Paste Pictures in Windows Terminal**
*Author: @zhatlas | 3 comments*
Image paste functionality via Ctrl-V is broken in Windows Terminal, affecting users on the Allegretto subscription using `kimi-for-coding`.

### 🟡 Feature Requests / Enhancements

**4. [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) - Memory System: Persistent Context Across Sessions**
*Author: @CatKang | 5 comments*
Major feature request for a comprehensive memory system that remembers project patterns, user preferences, and context across sessions. Includes both AI-managed automatic memory and user-defined manual instructions.

**5. [#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) - Shift+Enter for Line Breaks**
*Author: @beykery | 0 comments*
Users request Shift+Enter support for line breaks instead of Ctrl+J, aligning with other CLI tools' conventions.

**6. [#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) - Shell Mode Should Use User's Default Shell**
*Author: @scottli139 | 0 comments*
Currently, Shell mode (Ctrl+X) executes commands via fixed `/bin/sh` instead of the user's default shell (zsh/fish), breaking aliases and functions.

### 🟢 Bug Reports / Usability

**7. [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) - Usage Calculation Problem**
*Author: @wanghonghust | 0 comments | 👍: 4*
Token consumption is unexpectedly high due to K2.6's extended chain-of-thought output, exhausting subscription quotas quickly. Users report 2 tasks consuming 2 hours of quota.

**8. [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) - (Already listed above)**

---

## 4. Key PR Progress

### Recently Merged / Closed

| PR | Title | Status |
|----|-------|--------|
| [#2130](https://github.com/MoonshotAI/kimi-cli/pull/2130) | chore(release): bump kimi-cli to 1.41.0 | ✅ CLOSED |
| [#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126) | fix(plugin): support installing from .zip URL | ✅ CLOSED |
| [#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115) | fix(clipboard): enable clipboard paste on headless Linux over SSH | ✅ CLOSED |
| [#2064](https://github.com/MoonshotAI/kimi-cli/pull/2064) | fix(plan): respect KIMI_SHARE_DIR for plan files | ✅ CLOSED |

### Open PRs Under Review

**1. [#2136](https://github.com/MoonshotAI/kimi-cli/pull/2136) - fix(shell): reduce hidden modal input latency**
*Author: @bugkeep*
Optimizes completion startup and refresh intervals for hidden modal inputs, improving UI responsiveness.

**2. [#2135](https://github.com/MoonshotAI/kimi-cli/pull/2135) - fix(shell): throttle toolbar git metadata**
*Author: @bugkeep*
Caches git branch/status metadata per session to prevent subprocess polling on every keystroke.

**3. [#2134](https://github.com/MoonshotAI/kimi-cli/pull/2134) - fix(shell): ignore xterm focus events**
*Author: @bugkeep*
Registers xterm focus events as ignored keys to prevent focus reports from leaking into input.

**4. [#2133](https://github.com/MoonshotAI/kimi-cli/pull/2133) - fix(agent): include AGENTS.md for custom prompts**
*Author: @bugkeep*
Ensures custom agent prompts receive merged AGENTS.md instructions without duplication.

**5. [#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132) - fix(acp): replay session history on load**
*Author: @bugkeep*
Persists wire history for ACP runs and replays user/assistant/thought/tool updates during session load—directly addresses issue #2127.

**6. [#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) - feat(config): Add Granular Auto-Approval Rules**
*Author: @suJayhh*
Adds Claude Code-style granular auto-approval rules to `config.toml`, allowing users to configure approval behavior per operation type.

**7. [#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129) - fix(plan): respect KIMI_SHARE_DIR for plan files**
*Author: @XYenon*
Resolves plan files under configured share directory instead of hardcoded `~/.kimi/plans`.

**8. [#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) - feat(shell): visual context progress bar with color coding**
*Author: @xiaoye5200*
Replaces plain-text context indicator with a color-coded Unicode block progress bar for better visual feedback.

**9. [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) - chore(deps-dev): bump ruff from 0.14.14 to 0.15.0**
*Author: @dependabot[bot]*
Dependency update for the linting tool.

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Frequency | Description |
|-------|-----------|-------------|
| **Cross-Platform Compatibility** | High | Windows Terminal image paste, headless Linux support, shell compatibility |
| **Session Persistence** | High | Memory system, conversation history loading, ACP protocol completion |
| **UX/Keyboard Conventions** | Medium | Shift+Enter line breaks, default shell detection, visual progress indicators |
| **Configuration Flexibility** | Medium | Granular auto-approval rules, configurable share directories |
| **Usage Transparency** | Medium | Token consumption clarity, quota tracking |

---

## 6. Developer Pain Points

### Recurring Frustrations

1. **Environment Pollution**
   CLI modifies session environment variables, causing conflicts with other applications (desktop client crash).

2. **Broken Integrations**
   ACP protocol gaps prevent proper Zed editor integration for session history.

3. **Token Quota Confusion**
   K2.6's extended chain-of-thought consumes tokens faster than users expect, leading to rapid quota exhaustion.

4. **Shell Mode Limitations**
   Forced `/bin/sh` execution breaks zsh/fish workflows with aliases and functions.

5. **Cross-Platform Clipboard Issues**
   Inconsistent clipboard behavior across Windows Terminal, headless Linux, and SSH environments.

---

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-01

## 1. Today's Highlights

The OpenCode community is actively addressing critical memory performance concerns, with a dedicated megathread drawing 70+ comments. Multiple DeepSeek V4 thinking mode bugs surfaced in multi-turn conversations, while contributor @kitlangton continues a major refactoring effort to yield instance context across the codebase. AWS Bedrock integration issues are being tackled with several incoming fixes.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **[perf, core] Memory Megathread** | @thdxr | 70 | Central tracking for scattered memory issues; community explicitly warned against LLM-suggested solutions—heap snapshots needed |
| [#25148](https://github.com/anomalyco/opencode/issues/25148) | **[bug, core] Free BYOK request cap exceeded** | @yanhenrique-dev | 16 | Users reporting subscription not honored; affects all models despite active paid subscriptions |
| [#24648](https://github.com/anomalyco/opencode/issues/24648) | **[bug, core] Problem with AWS Bedrock** | @franjorub | 8 | Dual-model Bedrock setup (Opus/Sonnet) fails on conversation handoff; blocks multi-agent workflows |
| [#24751](https://github.com/anomalyco/opencode/issues/24751) | **[bug, core] GPT 5.5 context limits not respected** | @asaf-genie | 8 | Hard-coded context values override user config in opencode.jsonc; PR #24212 identified as root cause |
| [#20261](https://github.com/anomalyco/opencode/issues/20261) | **[bug, opentui] Colors render incorrectly after editor mode** | @zerox13 | 7 | UI rendering bug after exiting editor mode; affects visual debugging experience |
| [#11391](https://github.com/anomalyco/opencode/issues/11391) | **[docs] Google Stitch MCP server integration** | @cyberprophet | 7 | High-interest documentation request for Model Context Protocol integration |
| [#24803](https://github.com/anomalyco/opencode/issues/24803) | **[bug, core] DeepSeek V4 thinking mode multi-turn failure** | @zzk203 | 6 | `content[].thinking` must be passed back to API on subsequent turns; breaks long conversations |
| [#23566](https://github.com/anomalyco/opencode/issues/23566) | **[bug, docs] LSP docs suggest enabled by default** | @lowlyocean | 6 | Documentation mismatch—LSP intentionally disabled but docs say otherwise; causes user confusion |
| [#6273](https://github.com/anomalyco/opencode/issues/6273) | **[bug, opentui] Vue Syntax highlighting does not work** | @ZainW | 6 | Long-standing Vue support gap despite LSP availability; impacts Vue developers |
| [#23464](https://github.com/anomalyco/opencode/issues/23464) | **[bug, core] Opus 4.7 tool call failures** | @cjnoname | 5 | Question tool receives invalid arguments; intermittent failures with newer Opus model |

---

## 4. Key PR Progress

| # | PR | Author | Type | Summary |
|---|-----|--------|------|---------|
| [#25207](https://github.com/anomalyco/opencode/pull/25207) | refactor(session): yield instance context in system prompt | @kitlangton | refactor | Moves system prompt environment generation into Effect for proper InstanceState.context handling |
| [#25205](https://github.com/anomalyco/opencode/pull/25205) | refactor(file): yield instance context in watcher | @kitlangton | refactor | Explicit instance context in file watcher; routes native callbacks through InstanceState.bind |
| [#25206](https://github.com/anomalyco/opencode/pull/25206) | refactor(sync): capture instance context for publish | @kitlangton | refactor | Captures instance/workspace context before publishing; eliminates legacy ALS reads |
| [#25204](https://github.com/anomalyco/opencode/pull/25204) | refactor(project): yield instance context in bootstrap | @kitlangton | refactor | Replaces legacy bootstrap Instance ALS reads with yielded InstanceState.context |
| [#25203](https://github.com/anomalyco/opencode/pull/25203) | test(effect): stabilize runner active shell check | @kitlangton | test | Replaces flaky 10ms sleep with deterministic synchronization in runner tests |
| [#25200](https://github.com/anomalyco/opencode/pull/25200) | refactor(session): yield instance context in llm | @kitlangton | refactor | Replaces direct Instance.project read with InstanceState.context for provider headers |
| [#25114](https://github.com/anomalyco/opencode/pull/25114) | fix(desktop): Prevent Model response Interruption | @OpeOginni | bug fix | Settings dialog no longer interrupts model responses; closes #24859 |
| [#25201](https://github.com/anomalyco/opencode/pull/25201) | Pass CORS options to HttpApi backend | @kitlangton | fix | Forwards server CORS options into Effect HttpApi backend; adds regression test |
| [#13854](https://github.com/anomalyco/opencode/issues/13854) | fix(tui): stop streaming markdown/code after message completes | @mocksoul | bug fix | Derives streaming state from message.time.completed; fixes table row rendering |
| [#25198](https://github.com/anomalyco/opencode/pull/25198) | fix: fix AI refusing to commit | @scarf005 | bug fix | Removes prompt-policy lines causing AI to refuse commits despite explicit requests |

---

## 5. Feature Request Trends

**Top requested enhancements emerging from the issue tracker:**

1. **Terminal/Bash Management** — Better active/background terminal handling with proper stdio management ([#6375](https://github.com/anomalyco/opencode/issues/6375))

2. **Mobile/Touch Optimization** — OpenCode App needs mobile-friendly interactions ([#18767](https://github.com/anomalyco/opencode/pull/18767))

3. **Configurable UI Layout** — TUI content area max-width and horizontal padding controls ([#25142](https://github.com/anomalyco/opencode/issues/25142))

4. **Provider Access Control** — Ability to disable default provider list for organization admins ([#25159](https://github.com/anomalyco/opencode/issues/25159))

5. **Markdown Preview** — Source/toggle capability in file editor ([#13705](https://github.com/anomalyco/opencode/issues/13705))

6. **Performance Optimization** — ~90% compaction cost reduction via cache improvements ([#25120](https://github.com/anomalyco/opencode/issues/25120))

---

## 6. Developer Pain Points

**Recurring frustrations reported by the community:**

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory consumption** | 70 comments on megathread, heap snapshot requests | Limits long-running agent sessions |
| **DeepSeek V4 thinking mode** | 3+ issues (#24803, #25134, #25168) on multi-turn failures | Breaks conversation continuity |
| **AWS Bedrock dual-model setup** | #24648 with Opus/Sonnet handoff failures | Blocks multi-agent architectures |
| **BYOK credit cap confusion** | #25148, #25151—subscribers seeing cap errors | Billing/UX trust issues |
| **LSP configuration mismatch** | #23566 docs vs reality discrepancy | Developer onboarding friction |
| **Vue syntax highlighting** | #6273 unresolved since Dec 2025 | Degrades DX for Vue projects |
| **GPT-5.5 context limits** | #24751 hard-coded values override config | Reduces model flexibility |
| **LSP timeout too short** | #23982—15s vs 114s needed for Java/Gradle | Blocks large project support |

---

*Digest generated from GitHub data for anomalyco/opencode on 2026-05-01*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-01

## Today's Highlights

The Qwen Code team shipped **v0.15.6** with critical fixes for SubAgent display flicker and memory transcript handling, while a new nightly build introduces a **FileReadCache** for short-circuiting unchanged file reads. The community is actively addressing performance bottlenecks—particularly a 5-second delay caused by auto-memory recall blocking every user turn—and several high-priority bugs affecting Windows users and VSCode plugin behavior.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v0.15.6-nightly.20260501.8b6b0d64f** | Added `FileReadCache` to short-circuit unchanged Reads; fixed proxy settings honoring in CLI |
| **v0.15.6** | Fixed memory transcript path for dream mode; bounded SubAgent display by visual height to prevent flicker; kept sticky todo panel |
| **v0.15.6-preview.0** | Preview release with same fixes as v0.15.6 |

**Note:** A versioning discrepancy was flagged (#3756)—nightly builds currently carry lower semver than the latest stable release, which may cause confusion for users on auto-update.

---

## Hot Issues

1. **[#3652](https://github.com/QwenLM/qwen-code/issues/3652)** — **Internal error 400: Range of input length should be [1, 983616]**
   - **Why it matters:** Users encounter API errors when sending long messages in extended conversations, forcing them to restart chats and repeat context.
   - **Status:** Open, needs-triage | 8 comments

2. **[#3730](https://github.com/QwenLM/qwen-code/issues/3730)** — **Qwen Code automatically stops tasks without user input**
   - **Why it matters:** A P1 regression where heavy tasks running for days are silently terminated, breaking long-running workflows.
   - **Status:** Open, priority/P1 | 1 comment

3. **[#3185](https://github.com/QwenLM/qwen-code/issues/3185)** — **Windows: /quit command hangs with "ansiRegex3 is not a function"**
   - **Why it matters:** Windows users cannot exit the CLI normally, requiring forced terminal closure.
   - **Status:** Open | 2 comments

4. **[#3759](https://github.com/QwenLM/qwen-code/issues/3759)** — **Auto-memory recall blocks every user turn for 5s**
   - **Why it matters:** A severe performance regression causing consistent 5-second delays before the model responds to any input.
   - **Status:** Open, needs-triage | 0 comments

5. **[#3765](https://github.com/QwenLM/qwen-code/issues/3765)** — **Side queries use main model's per-model settings instead of fast model**
   - **Why it matters:** Users with separate main/fast model configurations see unintended "thinking" behavior on fast model queries.
   - **Status:** Open, needs-triage | 0 comments

6. **[#3426](https://github.com/QwenLM/qwen-code/issues/3426)** — **VSCode Plugin: contextPercentageThreshold and contextWindowSize not honored**
   - **Why it matters:** Context compression settings are ignored, causing context to grow past configured limits and eventually fail.
   - **Status:** Open, needs-triage | 1 comment

7. **[#3772](https://github.com/QwenLM/qwen-code/issues/3772)** — **DeepSeek v4 Pro API error 400 with reasoning_content**
   - **Why it matters:** Users of DeepSeek v4 Pro encounter API errors during multi-turn conversations.
   - **Status:** Open, needs-triage | 0 comments

8. **[#3678](https://github.com/QwenLM/qwen-code/issues/3678)** — **Request: Light theme for /export HTML with toggle switch**
   - **Why it matters:** Users want a light theme option for exported chat HTML to reduce eye strain (3 👍).
   - **Status:** Open, needs-triage | 1 comment

9. **[#3000](https://github.com/QwenLM/qwen-code/issues/3000)** — **Memory Diagnostics / 内存诊断 (P3)**
   - **Why it matters:** No tools exist to analyze V8 heap, detect leaks, or check memory pressure—critical for production debugging.
   - **Status:** Open | 3 comments

10. **[#3738](https://github.com/QwenLM/qwen-code/issues/3738)** — **Download connection failure**
    - **Why it matters:** Users cannot download Qwen Code, blocking adoption.
    - **Status:** Open, needs-triage | 3 comments

---

## Key PR Progress

| PR | Title | Impact |
|----|-------|--------|
| **[#3779](https://github.com/QwenLM/qwen-code/pull/3779)** | Telemetry: define HTTP OTLP endpoint behavior and signal routing | Adds explicit OTLP routing for traces, logs, and metrics per OTel spec |
| **[#3190](https://github.com/QwenLM/qwen-code/pull/3190)** | CLI: add /chat file commands for session management | Enables saving, listing, resuming, and deleting named chat sessions |
| **[#3631](https://github.com/QwenLM/qwen-code/pull/3631)** | Stats: add model cost estimation + fix model priority | Introduces per-model pricing configuration and `/stats model` cost display |
| **[#3684](https://github.com/QwenLM/qwen-code/pull/3684)** | Core: event monitor tool with throttled stdout streaming (Phase C) | New Monitor tool with token-bucket throttling for long-running shell commands |
| **[#3774](https://github.com/QwenLM/qwen-code/pull/3774)** | Core: enforce prior read before Edit/WriteFile mutates a file | Ensures model has seen current file bytes before mutations, leveraging FileReadCache |
| **[#3778](https://github.com/QwenLM/qwen-code/pull/3778)** | Desktop: add desktop app package with Qwen ACP SDK integration | New `packages/desktop/` for desktop application distribution |
| **[#3769](https://github.com/QwenLM/qwen-code/pull/3769)** | Core: isolate fast model side queries | Fixes side queries inheriting main model's per-model settings |
| **[#3762](https://github.com/QwenLM/qwen-code/pull/3762)** | VSCode: add message edit/rewind and message metadata UI | Enables full message editing and history navigation in VSCode extension |
| **[#3754](https://github.com/QwenLM/qwen-code/pull/3754)** | Review: expand review pipeline + qwen review CLI subcommands | 9 parallel agents, iterative reverse audit, and 6 cross-platform CLI helpers |
| **[#3749](https://github.com/QwenLM/qwen-code/pull/3749)** | CLI: stop double-wrapping and double-printing API errors in non-interactive mode | Fixes noisy 4xx errors in `-p` mode—now prints single clean line instead of triple output |

---

## Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

1. **Enhanced SubAgent Visibility** — Multiple requests (#3758, #3763, #3770) ask for better SubAgent display, including detailed thought/process visibility and improved keyboard navigation between parallel agents.

2. **Model Configuration Flexibility** — Requests for separate fast model settings (#3760, #3765), small/fast model configuration (#2791), and disabling reasoning on side queries.

3. **Session & Memory Management** — Features for chat session persistence (#3190), auto-memory recall decoupling (#3761), and memory diagnostics tools (#3000).

4. **UI/UX Improvements** — Light theme for HTML exports (#3678), improved slash command behavior in VSCode (#1990), and MCP health indicators (#3741).

5. **Developer Experience** — Background agent resume/continuation (#3739), standalone archive installation (#3776), and Python SDK PyPI release workflow (#3685).

---

## Developer Pain Points

1. **Auto-Memory Recall Blocking** — Every user turn incurs a ~5-second delay due to awaited auto-memory recall selector timing out (#3759). This is a significant regression affecting all users.

2. **Session Persistence Failures** — Directories added via `/directory add` don't persist to `settings.json` (#3746), and background agents cannot resume after interruption (#3739).

3. **VSCode Plugin Configuration Ignored** — Context compression settings (`contextPercentageThreshold`, `contextWindowSize`) are not honored, causing context overflow failures (#3426).

4. **Windows CLI Stability** — The `/quit` command hangs on Windows with a JavaScript error (#3185), and download connections fail (#3738).

5. **Model Settings Leakage** — Fast model side queries incorrectly inherit the main model's per-model settings (e.g., thinking mode), breaking user expectations (#3765).

6. **Non-Interactive Mode Error Noise** — Running `qwen -p` with API errors produces triple output with stack traces instead of clean error handling (#3748, fixed in #3749).

7. **Versioning Confusion** — Nightly builds report lower semver than stable releases, breaking auto-update expectations (#3756).

---

*Generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-05-01.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-01

## Today's Highlights

The **v0.71.0** release removes deprecated Google Gemini CLI and Antigravity support (breaking change), while introducing Cloudflare AI Gateway as a new provider. The community closed 25 PRs and resolved numerous provider compatibility issues, including fixes for Fireworks Anthropic tool support and OpenAI-compatible endpoints. Self-update failures across npm and Bun installations remain an open pain point.

---

## Releases

### v0.71.0
**Breaking Changes:**
- Removed built-in Google Gemini CLI and Google Antigravity support. Existing configurations using those providers must migrate to another supported provider.

**New Features:**
- Added Cloudflare AI Gateway provider support with `CLOUDFLARE_API_KEY`/`CLOUDFLARE_ACCOUNT_ID`/`CLOUDFLARE_GATEWAY_ID` environment variables.

---

## Hot Issues

1. **[#3942](https://github.com/badlogic/pi-mono/issues/3942)** — `pi update --self` fails when pi is installed with npm `--prefix` (7 comments, OPEN)
   - Affects users on Nix or systems with non-writable global npm paths. Self-update mechanism doesn't detect custom installation prefixes.

2. **[#3959](https://github.com/badlogic/pi-mono/issues/3959)** — Error with Mistral API (7 comments, CLOSED)
   - Mistral API returning 404 errors across multiple models (mistral-large, small, codestral). Likely resolved with provider configuration updates.

3. **[#3462](https://github.com/badlogic/pi-mono/issues/3462)** — Support for auto-refreshing Bedrock bearer tokens (7 comments, CLOSED)
   - Feature request for dynamic token refresh in corporate AWS Bedrock contexts, avoiding session-long token expiration issues.

4. **[#3941](https://github.com/badlogic/pi-mono/issues/3941)** — `pi.dev` package copy button not working on Firefox (7 comments, CLOSED)
   - UI bug affecting Firefox users on the packages page; Chrome worked correctly.

5. **[#4035](https://github.com/badlogic/pi-mono/issues/4035)** — Restrict Auth Credentials access from context (6 comments, CLOSED)
   - Introduces "restricted mode" for auth access from extensions, preventing `ctx.modelRegistry` from exposing `authStorage`.

6. **[#2469](https://github.com/badlogic/pi-mono/issues/2469)** — Clipboard image paste to WSL silently fails (5 comments, CLOSED)
   - Screenshots pasted via Ctrl+V in WSL terminals produce no action; affects Windows developers using WSL.

7. **[#2717](https://github.com/badlogic/pi-mono/issues/2717)** — Make context-file discovery configurable (5 comments, CLOSED)
   - Current hardcoded `AGENTS.md`/`CLAUDE.md` search limits flexibility; request to make search scope and filenames configurable.

8. **[#3575](https://github.com/badlogic/pi-mono/issues/3575)** — Anthropic-compatible proxy regression with `eager_input_streaming` (5 comments, CLOSED)
   - Tool definitions with `eager_input_streaming` cause 400 errors on custom `anthropic-messages` backends.

9. **[#3828](https://github.com/badlogic/pi-mono/issues/3828)** — Qwen3.5/Qwen3.6 from OpenCode Go provider return 404 (5 comments, CLOSED)
   - Models selectable but fail with 404 HTML response when prompting.

10. **[#4026](https://github.com/badlogic/pi-mono/issues/4026)** — `openai-codex-responses` default verbosity regression (4 comments, CLOSED)
    - Changed default from "medium" to "low" causes Codex models to emit commentary instead of tool calls, breaking task completion.

---

## Key PR Progress

1. **[#4040](https://github.com/badlogic/pi-mono/pull/4040)** — `fix(openai-completions): honor compat.supportsTools=false`
   - Ensures OpenAI-compatible providers respect `supportsTools: false` in model compat settings, preventing tool emission errors.

2. **[#3856](https://github.com/badlogic/pi-mono/pull/3856)** — `feat(ai): add Cloudflare AI Gateway as a provider`
   - Adds Cloudflare AI Gateway with caching, analytics, rate limiting, and fallbacks for OpenAI/Anthropic/Workers AI.

3. **[#3868](https://github.com/badlogic/pi-mono/pull/3868)** — `refactor(coding-agent): migrate syntax highlighting to Shiki`
   - Replaces terminal and HTML export code highlighting with Shiki for better theme support and language coverage.

4. **[#4005](https://github.com/badlogic/pi-mono/pull/4005)** — `feat(ai): add Xiaomi MiMo provider`
   - Adds Xiaomi MiMo as a built-in OpenAI-completions compatible provider.

5. **[#4025](https://github.com/badlogic/pi-mono/pull/4025)** — `feat(coding-agent): support auth json env`
   - Adds `PI_CODING_AGENT_AUTH_JSON` for inline auth data without reading/writing `auth.json`.

6. **[#4024](https://github.com/badlogic/pi-mono/pull/4024)** — `feat(coding-agent): support session dir env`
   - Adds `PI_CODING_AGENT_SESSION_DIR` environment variable equivalent to `--session-dir` flag.

7. **[#4013](https://github.com/badlogic/pi-mono/pull/4013)** — `fix(coding-agent): remove detached: true on Windows`
   - Fixes `pwsh.exe` stdout/stderr pipe issues on Windows by removing `detached: true` from spawn options.

8. **[#3678](https://github.com/badlogic/pi-mono/pull/3678)** — `fix(ai): honor Fireworks Anthropic tool compat`
   - Resolves Fireworks API provider errors by respecting tool compatibility settings.

9. **[#3832](https://github.com/badlogic/pi-mono/pull/3832)** — `Remove Qwen CLI OAuth provider extension`
   - Removes deprecated Qwen OAuth provider following April 15, 2026 free tier discontinuation.

10. **[#4009](https://github.com/badlogic/pi-mono/pull/4009)** — `feat(ai): add Mistral Medium 3.5 model`
    - Adds Mistral Medium 3.5 model support to the provider lineup.

---

## Feature Request Trends

Based on issue analysis, the community is requesting:

1. **Provider Expansion** — New model providers (Xiaomi MiMo, Grok 3.5) and better configuration options for existing providers.

2. **Security Hardening** — Restricted auth credential access, RCE prevention in tools (grep argument injection), and observable agent steering at tool boundaries.

3. **Installation Flexibility** — Self-update support for non-standard install locations (npm prefix, Bun, Nix) and provenance attestation handling.

4. **Context Management** — Configurable context-file discovery, session directory control via environment variables, and better session state persistence.

5. **UI/UX Improvements** — Firefox compatibility fixes, dropdown contrast issues, and interactive mode visual feedback for thinking levels.

6. **Local LLM Support** — Official extensions for llama.cpp, LM Studio, vLLM, and Ollama providers.

---

## Developer Pain Points

1. **Self-Update Failures** — `pi update` breaks when installed via npm `--prefix`, Bun, or Nix. Multiple open issues (#3942, #3980) highlight this recurring problem.

2. **Provider Compatibility** — Frequent regressions with third-party providers (Mistral 404s, Qwen model failures, Fireworks endpoint errors) require ongoing maintenance.

3. **Windows/WSL Edge Cases** — Clipboard paste failures in WSL, PowerShell stdout issues, and path display inconsistencies across platforms.

4. **Edit Tool Fragility** — Encoding issues with escaped backticks and emoji variation selectors cause silent match failures.

5. **Session State Management** — Duplicate entry IDs causing `/tree` hangs, session resume not switching to original directory, and duplicate rendering issues.

6. **Package Registry Maintenance** — Need for automated detection of deprecated/removed packages and proper provenance attestation handling during installation.

---

*Generated from [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity on 2026-05-01.*

</details>

---
*This digest is auto-generated by [Big Model Radar](https://github.com/borq168/big_model_radar).*
