# Radar Forge

English | [中文](./README.zh.md)

An agent-powered GitHub Actions workflow that acts as a radar for open-source projects and ecosystem signals. The default configuration tracks GitHub activity from AI CLI tools, OpenClaw and its peer projects in the AI agent ecosystem, scrapes official news and research from Anthropic and OpenAI, monitors the GitHub AI daily hot list, and watches Hacker News — then publishes bilingual (Chinese + English) daily digests as GitHub Issues and committed Markdown files. Weekly and monthly rollup reports are also generated automatically.

## Architecture roadmap

The V2 architecture has largely landed. The remaining tail-work and status board live in [`docs/architecture-v2.md`](./docs/architecture-v2.md). This is the canonical place for what has shipped already and what is still being cleaned up.

## Web UI

**[https://borq168.github.io/radar-forge](https://borq168.github.io/radar-forge)**

Browse all historical digests in a clean, dark-themed interface — no login required. Reports are rendered from the Markdown files in this repo via GitHub Pages.

## RSS Feed

**[https://borq168.github.io/radar-forge/feed.xml](https://borq168.github.io/radar-forge/feed.xml)**

Subscribe in any RSS reader (Feedly, Reeder, NewsBlur, etc.) to receive new digests automatically. The feed includes the latest 30 reports across all report types, updated daily alongside `manifest.json`.

## MCP Server

**`https://radar-forge-mcp.<your-subdomain>.workers.dev`**

A hosted [Model Context Protocol](https://modelcontextprotocol.io) server that exposes Radar Forge data as tools. Any MCP-compatible client (Claude Desktop, OpenClaw, etc.) can query the latest AI ecosystem reports directly.

**Available tools:**

| Tool | Description |
|------|-------------|
| `list_reports` | List available dates and report types (last N days) |
| `get_latest` | Fetch the most recent report of a given type |
| `get_report` | Fetch a specific report by date and type |
| `search` | Keyword search across recent reports |

**Claude Desktop setup** — add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "radar-forge": {
      "url": "https://radar-forge-mcp.<your-subdomain>.workers.dev"
    }
  }
}
```

Restart Claude Desktop after saving. You can then ask Claude things like:
- *"What's the latest in AI CLI tools?"* → calls `get_latest`
- *"Search for Claude Code mentions this week"* → calls `search`
- *"Show me the GitHub AI hot-list report for 2026-03-05"* → calls `get_report`

**OpenClaw setup** — run the following command:

```bash
openclaw mcp add --transport http radar-forge https://radar-forge-mcp.<your-subdomain>.workers.dev
```

Or add it manually to `~/.openclaw/openclaw.json`:

```json
{
  "mcpServers": {
    "radar-forge": {
      "type": "http",
      "url": "https://radar-forge-mcp.<your-subdomain>.workers.dev"
    }
  }
}
```

You can then ask OpenClaw things like:
- *"What's the latest in AI CLI tools?"* → calls `get_latest`
- *"Search for Claude Code mentions this week"* → calls `search`
- *"Show me the GitHub AI hot-list report for 2026-03-05"* → calls `get_report`

**Self-hosting** — deploy your own instance from the `mcp/` directory:

```bash
cd mcp
pnpm install
wrangler deploy
```

## Telegram Channel

**[t.me/agents_radar](https://t.me/agents_radar)**

Subscribe to get daily digest notifications pushed directly to Telegram. Each message links to all reports for that day (ZH and EN variants) plus the Web UI and RSS feed.

## Tracked sources

### AI CLI tools (GitHub)

| Tool | Repository |
|------|-----------|
| Claude Code | [anthropics/claude-code](https://github.com/anthropics/claude-code) |
| OpenAI Codex | [openai/codex](https://github.com/openai/codex) |
| Gemini CLI | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) |
| GitHub Copilot CLI | [github/copilot-cli](https://github.com/github/copilot-cli) |
| Kimi Code CLI | [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) |
| OpenCode | [anomalyco/opencode](https://github.com/anomalyco/opencode) |
| Qwen Code | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) |

### Claude Code Skills (GitHub)

| Source | Repository |
|--------|-----------|
| Claude Code Skills | [anthropics/skills](https://github.com/anthropics/skills) |

PRs and issues are fetched without a date filter and sorted by popularity (comment count), so the report always reflects the most actively discussed skills — not just the newest.

### OpenClaw + AI agent ecosystem (GitHub)

OpenClaw is tracked as the primary reference project. The current default config compares it with three peer projects in the personal AI assistant / autonomous agent space.

| Project | Repository |
|---------|-----------|
| OpenClaw | [openclaw/openclaw](https://github.com/openclaw/openclaw) |
| NanoBot | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) |
| Zeroclaw | [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) |
| PicoClaw | [sipeed/picoclaw](https://github.com/sipeed/picoclaw) |

### GitHub AI Hot List

Two data sources are fetched in parallel every day:

| Source | Details |
|--------|---------|
| [github.com/trending](https://github.com/trending?since=daily) | Today's trending repos — parsed from HTML; includes today's new star count |
| GitHub Search API | Repos active in the last 7 days matching 6 AI topics: `llm`, `ai-agent`, `rag`, `vector-database`, `large-language-model`, `machine-learning` |

The LLM filters out non-AI repos from the trending list, classifies the rest by dimension (AI infrastructure / agents / applications / models / RAG), and records daily hot-list observations without forcing long-term trend conclusions from one day of data.

### Hacker News

Top AI stories from the last 24 hours, fetched via the [Algolia HN Search API](https://hn.algolia.com/api). Six queries run in parallel (`AI`, `LLM`, `Claude`, `OpenAI`, `Anthropic`, `machine learning`), results are deduplicated and ranked by points. The top 30 stories are passed to the LLM for analysis.

### Official web content (feed-based)

| Organization | Site | Discovery |
|---|---|---|
| Anthropic | [anthropic.com](https://www.anthropic.com) | RSS mirror of Anthropic newsroom content |
| OpenAI | [openai.com](https://openai.com) | Official RSS feed: `https://openai.com/news/rss.xml` |
| Cloudflare Blog | [blog.cloudflare.com](https://blog.cloudflare.com/) | RSS feed |

New articles are detected by comparing feed identifiers, URLs, and publish timestamps against a persisted state file (`digests/web-state.json`). On the **first run**, up to 25 recent articles per site are fetched and a comprehensive overview report is generated. On subsequent runs, only new or updated feed entries trigger a report; if nothing changed, the web report step is skipped entirely. Anthropic does not currently publish an official RSS/Atom feed, so the default configuration uses a community RSS mirror that links back to original `anthropic.com` URLs.

## Features

- Fetches issues, pull requests, and releases updated in the last 24 hours across all tracked repos
- Tracks trending Claude Code Skills — sorted by community engagement, not recency
- Generates a per-tool summary for each CLI repository and a cross-tool comparative analysis
- Generates a deep OpenClaw project report plus a cross-ecosystem comparison against the configured peer projects
- Tracks official-site content through feed-style sources; detects new articles incrementally
- Monitors GitHub Trending daily + searches 6 AI topic tags; classifies repos by dimension and records hot-list observations
- Fetches top-30 AI stories from Hacker News (last 24h, ranked by points); generates community sentiment report
- Generates `ai-daily.md` as the reader-facing entrypoint across all detailed daily reports, and uses it as the preferred source for weekly/monthly rollups
- Publishes GitHub Issues for each report type; commits Markdown files to `digests/YYYY-MM-DD/`
- Runs on a daily schedule via GitHub Actions; supports manual triggering
- All tracked repositories are configurable via `config.yml` — no code changes needed
- The runtime configuration is defined in `config.yml` using the `tracks[]` schema

## Setup

### 1. Fork this repository

### 2. Customize `config.yml`

Edit `config.yml` in the repo root to add, remove, or replace tracked repositories and content sources. This file is the single runtime configuration entrypoint and must define a `tracks[]` array.

Legacy keys such as `cli_repos`, `skills_repo`, `openclaw`, and `openclaw_peers` are no longer supported.

Current `tracks[]` support boundary:

- `github_group` tracks for CLI / skills / agents are supported by the loader
- skills tracks can now aggregate **multiple** repositories into one skills ecosystem summary
- `content_group` tracks now execute through the runtime with config-driven source discovery and extraction
- supported content discovery kinds: `sitemap`, `sitemap-index`, `sitemap-index-template`, `rss`, `atom`
- supported extraction modes: `full-page`, `metadata-only`, `feed-first`, `feed-only`

```yaml
# Add a new CLI tool under the ai-cli track
tracks:
  - id: ai-cli
    kind: github_group
    members:
      - id: my-tool
        repo: owner/my-ai-cli
        name: My AI Tool

# Add a new peer project under the ai-agents track
  - id: ai-agents
    kind: github_group
    members:
      - id: my-agent
        repo: owner/my-agent
        name: My Agent
```

### 3. Add Secrets and Variables

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Required | Description |
|--------|----------|-------------|
| `OPENAI_API_KEY` | required | API key for any OpenAI-compatible endpoint |
| `OPENAI_BASE_URL` | optional | API endpoint override. Leave unset for OpenAI, or set a compatible provider URL such as `https://api.openai.com/v1` |
| `OPENAI_MODEL` | optional | Model name passed to `chat/completions`, e.g. `gpt-4.1-mini` |
| `REPORT_LANGS` | optional | Report languages, e.g. `zh` or `zh,en` (default: `zh`) |
| `PAGES_URL` | recommended | Public site base URL, e.g. `https://your-user.github.io/radar-forge`. Prefer a repository variable for this |
| `TELEGRAM_BOT_TOKEN` | optional | Telegram bot token from [@BotFather](https://t.me/BotFather). If set, a message is sent after each digest run |
| `TELEGRAM_CHAT_ID` | optional | Telegram chat/channel/group ID to send notifications to. Required if you enable Telegram notifications |

> `GITHUB_TOKEN` is provided automatically by GitHub Actions.
> Backward compatibility: `ANTHROPIC_API_KEY`, `ANTHROPIC_BASE_URL`, and `ANTHROPIC_MODEL` are still accepted as aliases, but new setups should use `OPENAI_*`.

**Setting up Telegram notifications** (optional):
1. Message [@BotFather](https://t.me/BotFather) on Telegram, create a bot, and copy the token
2. Add the bot to your channel/group, or start a DM with it
3. Get the chat ID via [@userinfobot](https://t.me/userinfobot) or the [getUpdates](https://core.telegram.org/bots/api#getupdates) API
4. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as repository secrets
5. Add `PAGES_URL` as a repository variable under **Settings → Secrets and variables → Actions → Variables**

> If neither secret is set, the notification step is silently skipped.
> If `PAGES_URL` is unset, the site URL is derived from `owner/repo` as `https://owner.github.io/repo`.

### 3. Enable the workflow

Confirm the workflow is enabled in the **Actions** tab.

To test immediately, go to **Actions → Daily Radar Forge → Run workflow**.

> **First run note**: The web content step will fetch up to 50 articles (25 per site) and may take a few extra minutes. Subsequent runs are fast — only new articles are processed.

## Running locally

Local scripts automatically load `.env` via `dotenv`, so if you've already filled in the repo-root `.env`, you can usually run the commands directly without re-exporting every variable in your shell.

OpenAI-compatible endpoint example:

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export OPENAI_BASE_URL=https://api.openai.com/v1
export OPENAI_API_KEY=sk-xxxxxxxx
export OPENAI_MODEL=gpt-4.1-mini
export REPORT_LANGS=zh
export DIGEST_REPO=your-username/radar-forge  # optional; omit to only write files

pnpm start
```

Or simply:

```bash
pnpm start
```

when your `.env` file is already configured.

## Output format

Files are written to `digests/YYYY-MM-DD/`:

| File | Content | GitHub Issue label |
|------|---------|-------------------|
| `ai-daily.md` | AI ecosystem daily brief — entrypoint across all detailed reports for the day | `daily` |
| `ai-cli.md` | CLI digest — cross-tool comparison + per-tool details | `digest` |
| `ai-skills.md` | Skills ecosystem digest — cross-repository skills highlights | `skills` |
| `ai-agents.md` | OpenClaw deep report + cross-ecosystem comparison + configured peer details | `openclaw` |
| `ai-web.md` | Official web content report (only written when new content exists) | `web` |
| `ai-trending.md` | GitHub AI trending digest — repos classified by dimension + hot-list observations (only written when data is available) | `trending` |
| `ai-hn.md` | Hacker News AI community digest — top stories + sentiment analysis (only written when fetch succeeds) | `hn` |

A shared state file `digests/web-state.json` tracks which web URLs have been seen; it is committed alongside the daily digests.

Each report is generated in both Chinese (`ai-cli.md`) and English (`ai-cli-en.md`). The Web UI sidebar shows ZH / EN toggle buttons for reports that have both variants.

---

`ai-daily.md` / `ai-daily-en.md` structure:
```
At a glance                 (8-12 factual bullets with source tags)
Browse by theme             (CLI / Agents / Skills / Official / GitHub / HN)
Follow-up watch             (explicitly unresolved, newly released, or active items)
Detailed report index       (what each detailed report is for + filename)
Data gaps                   (only when a source report was skipped or failed)
```

`ai-cli.md` / `ai-cli-en.md` structure:
```
## Cross-Tool Comparison
  Daily overview / Activity comparison table / Shared themes / Differentiation / Evidence-backed observations

## Per-Tool Reports
  <details> Claude Code    — Today's update brief / Hot issues / PR progress / Demand clusters
  <details> OpenAI Codex   — Today's update brief / Hot issues / PR progress / Demand clusters
  <details> Gemini CLI     — ...
  <details> GitHub Copilot CLI — ...
  <details> Kimi Code CLI  — ...
  <details> OpenCode       — ...
  <details> Qwen Code      — ...
```

`ai-skills.md` / `ai-skills-en.md` structure:
```
## Skills Ecosystem Highlights
  Top skills across repositories / Repository-by-repository highlights /
  Community demand clusters / Active pending skills / Cross-repo daily notes
```

`ai-agents.md` / `ai-agents-en.md` structure:
```
Issues: N | PRs: N | Projects covered: configured peer set

## OpenClaw Deep Dive
  Today's summary / Releases / Project progress / Community highlights /
  Bug stability / Feature requests / User feedback / Backlog

## Cross-Ecosystem Comparison
  Ecosystem overview / Activity table / OpenClaw positioning /
  Shared technical directions / Differentiation / Community activity / Evidence-backed observations

## Peer Project Reports
  <details> NanoBot    — Today's summary / Releases / Progress / ... (8 sections)
  <details> Zeroclaw   — ...
  <details> PicoClaw   — ...
```

`ai-web.md` / `ai-web-en.md` structure:
```
Sources: configured content sources (each source shows new/discovered counts)

Today's summary
Per-source highlights          (organized by source and category)
Cross-source update notes
Notable details
[First full crawl also includes: Content landscape overview]
```

`ai-trending.md` / `ai-trending-en.md` structure:
```
Sources: GitHub Trending + GitHub Search API

Today's summary
Top repos by dimension
  🔧 AI Infrastructure  — frameworks / SDKs / inference engines / CLIs
  🤖 AI Agents          — agent frameworks / multi-agent / automation
  📦 AI Applications    — vertical products / solutions
  🧠 Models & Training  — model weights / training frameworks / fine-tuning
  🔍 RAG & Knowledge    — vector databases / retrieval augmentation
Hot-list observations
Projects to track
```

`ai-hn.md` / `ai-hn-en.md` structure:
```
Sources: Hacker News (top-30 AI stories, last 24h)

Today's summary
Top stories & discussions
  🔬 Models & Research  — new model releases / papers / benchmarks
  🛠️ Tools & Engineering — open-source projects / frameworks / engineering practice
  🏢 Industry news      — company news / funding / product launches
  💬 Opinions & debate  — Ask HN / Show HN / hot threads
Community discussion notes
Worth reading
```

`ai-weekly.md` / `ai-weekly-en.md` structure (generated every Monday):
```
Coverage: YYYY-MM-DD ~ YYYY-MM-DD  (last 7 daily digests)

Weekly highlights
Key trends & developments
Notable releases
Community momentum
Outlook
```

`ai-monthly.md` / `ai-monthly-en.md` structure (generated on the 1st of each month):
```
Sources: N weekly reports  (or sampled daily reports if fewer than 2 weeklies available)

Month in review
Major themes
Ecosystem shifts
Top projects & releases
Looking ahead
```

Historical digests are stored in [`digests/`](./digests/). Published issues are tagged by type: [`digest`](../../issues?label=digest) · [`openclaw`](../../issues?label=openclaw) · [`web`](../../issues?label=web) · [`trending`](../../issues?label=trending) · [`hn`](../../issues?label=hn) · [`weekly`](../../issues?label=weekly) · [`monthly`](../../issues?label=monthly).

## Schedule

| Workflow | Cron | UTC | CST |
|----------|------|-----|-----|
| Daily digest | `0 0 * * *` | 00:00 daily | 08:00 daily |
| Weekly rollup | `0 1 * * 1` | 01:00 Monday | 09:00 Monday |
| Monthly rollup | `0 2 1 * *` | 02:00 on the 1st | 10:00 on the 1st |

To change the schedule, edit the cron expressions in the corresponding workflow files under `.github/workflows/`.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=borq168/radar-forge&type=Date)](https://star-history.com/#borq168/radar-forge&Date)
