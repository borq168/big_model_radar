# 架构 V2 迭代文档

> 最后更新：2026-04-21
>
> 本文档是新架构迭代的 **单一事实来源（source of truth）**。以后所有架构调整、已完成事项、未完成事项、运行时约束和阶段结论都持续写在这里。

## 目标与前提

本轮迭代**不考虑向后兼容**，直接面向一套新的目标架构设计。

目标只有三个：

1. 用统一配置表达多类追踪任务，而不是继续维护 `cli_repos` / `skills_repo` / `openclaw` / `openclaw_peers` / 固定站点这些特例。
2. 让这套架构能在两个运行环境中稳定工作：
   - **GitHub Actions**：抓取、生成、提交产物。
   - **Cloudflare Worker**：读取产物、提供查询 / MCP 接口。
3. 把计划、状态、已做 / 未做事项持续沉淀到文档，而不是留在聊天记录里。

## 当前结论（一句话版）

这套新架构**可以同时在 GitHub Actions 和 Cloudflare Worker 中用起来**，但两边承担的职责必须明确分层：

- **GitHub Actions = build / crawl / generate / commit 平面**
- **Cloudflare Worker = serve / query / MCP 平面**

也就是说，**抓取器和报告生成器放在 Actions 跑，Worker 只消费由 Actions 生成并发布到 GitHub Pages 的静态产物**。

## 运行时可行性结论

### GitHub Actions

当前仓库已经具备完整的 Node.js 执行条件：

- `ubuntu-latest`
- Node.js 22
- `pnpm install`
- `tsx src/index.ts`
- 可读写仓库工作目录并提交 `digests/`、`manifest.json`、`feed.xml`

因此 GitHub Actions 非常适合作为：

- YAML 配置加载层
- GitHub / RSS / sitemap / HN / Trending 抓取层
- LLM 调用层
- Markdown 报告生成层
- 静态 JSON 产物生成层
- 状态文件持久化层

### Cloudflare Worker

当前 `mcp/` 已经是一个纯 Worker 运行时：

- 无 Node.js `fs` / `path` 依赖
- 通过 HTTP 读取 GitHub Pages 上的 `manifest.json` 和报告 Markdown
- 对外暴露 MCP 工具

所以 Worker 很适合作为：

- 运行时查询接口
- 报告索引与检索入口
- 动态 report registry 的消费端

但 Worker **不应该**承担以下职责：

- 直接抓取并生成日报
- 管理 Git 仓库写入
- 持久化复杂 crawl state
- 在运行时解析仓库本地 YAML 文件

结论：

> 新架构可在 Worker 中“用起来”，但方式不是“把整套采集器搬进 Worker”，而是“让 Worker 读取 Actions 产出的标准化 JSON / Markdown 产物”。

## LLM 运行时策略（已收敛）

## 结论

**当前仓库已决定移除对 Copilot CLI 的支持，LLM 调用统一收敛为 OpenAI-compatible HTTP API。**

更准确地说：

- **GitHub Actions / 本地终端侧统一使用 OpenAI-compatible `chat/completions` 接口。**
- **Cloudflare Worker 仍然不直接调用 LLM，只消费 Actions 产出的静态产物。**
- **`OPENAI_*` 是当前唯一维护的 LLM 运行时配置；`ANTHROPIC_*` 仅保留为别名。**

## 为什么要收敛为单一 provider

这次收敛不是能力问题，而是工程取舍问题：

- Copilot CLI 会引入 runner 安装、认证状态、CLI 输出协议、并发行为和请求额度消耗等额外复杂度。
- 本仓库的报告生成更适合稳定的 HTTP API 语义：`chat/completions`、明确的 `max_tokens`、可控的错误处理与重试逻辑。
- GitHub Actions 与本地运行都需要尽量保持一致，避免“一套 prompt，两种执行协议”带来的排障成本。

## 对当前仓库的直接影响

### 1. `src/report.ts`

`callLlm(prompt, maxTokens)` 已收敛为单一 OpenAI-compatible 实现，不再维护 `copilot-cli` 分支、CLI 子进程调用或本地 session 回退逻辑。

### 2. GitHub Actions workflow

日报 / 周报 / 月报 workflow 统一保留：

- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `OPENAI_MODEL`

不再安装 `@github/copilot`，也不再读取 `LLM_PROVIDER` / `COPILOT_*`。

### 3. 配置与文档

`.env`、README、AGENTS、CLAUDE 等文档统一只保留 OpenAI-compatible 配置说明，避免继续向用户暴露已经废弃的 CLI 路径。

## 当前建议

后续若继续扩展 LLM 能力，应默认围绕 **OpenAI-compatible endpoint** 演进，而不是重新引入 CLI provider 抽象层。

## 关键架构决策

## 1. 用 `tracks[]` 取代所有特例配置

新的配置顶层应统一成：

```yaml
tracks:
  - id: ai-cli
    kind: github_group
    ...

  - id: ai-skills
    kind: github_group
    ...

  - id: ai-agents
    kind: github_group
    ...

  - id: ai-web
    kind: content_group
    ...
```

不再保留“某一类报告天生就是硬编码特例”的设计。

## 2. `github_group` 与 `content_group` 分开建模

外层统一，内层分型：

- `github_group`：面向 GitHub 仓库集合
- `content_group`：面向 RSS / Atom / Sitemap / Sitemap Index 等内容源

不要把 GitHub 仓库和网站源硬塞进同一个成员结构，否则抓取语义会变得非常别扭。

## 3. GitHub 组要支持不同拓扑（topology）

### `primary-peer`

适用于像 OpenClaw 这种“一个核心项目 + 多个对照项目”的生态组。

```yaml
topology: primary-peer
primary_member_id: openclaw
```

### `symmetric`

适用于 Skills 仓库组、CLI 工具组这种“所有成员平级”的横向对比。

```yaml
topology: symmetric
```

## 4. Skills 不再是 CLI 报告里的附属特例

Skills 多仓库对比本质上也是 `github_group`，但特征是：

- `topology: symmetric`
- `analysis_profile: skills`
- `fetch.mode: hot`

也就是说，Skills 组不该再寄生在 `ai-cli.md` 的某个段落里，而应该是一个可独立输出的 track。

## 5. 网站内容源必须配置化

新架构中的 `content_group` 应至少支持以下发现协议：

- `rss`
- `atom`
- `sitemap`
- `sitemap-index`
- `sitemap-index-template`

并支持以下提取模式：

- `full-page`
- `metadata-only`
- `feed-first`

这意味着未来 Anthropic / OpenAI / Hugging Face / LangChain / Cloudflare Blog 之类的来源，都可以只通过配置新增，而不是再改 `src/web.ts` 里的硬编码。

## 6. 必须引入动态 report registry

当前仓库很多位置都把报告 ID 和标题硬编码死了，例如：

- `src/generate-manifest.ts`
- `index.html`
- `src/notify.ts`
- `mcp/src/index.ts`
- `src/rollup.ts`

V2 必须把这些信息统一抽成运行时 registry，例如：

```ts
interface ReportRegistryEntry {
  id: string;
  kind: "github_group" | "content_group";
  label: string;
  titleZh: string;
  titleEn: string;
  includeInRollups: boolean;
}
```

然后由配置生成：

- Web UI 标签
- MCP 支持的报告类型
- 通知标签
- rollup 输入列表
- manifest 附加元数据

## 目标配置草案

```yaml
tracks:
  - id: ai-cli
    kind: github_group
    name: AI CLI Tools
    analysis_profile: cli
    topology: symmetric
    report:
      label: digest
      title_zh: AI CLI 工具社区动态日报
      title_en: AI CLI Tools Digest
      include_in_rollups: true
    fetch:
      mode: daily
    members:
      - id: claude-code
        repo: anthropics/claude-code
        name: Claude Code
      - id: codex
        repo: openai/codex
        name: OpenAI Codex

  - id: ai-skills
    kind: github_group
    name: Skills Ecosystem
    analysis_profile: skills
    topology: symmetric
    report:
      label: skills
      title_zh: Skills 生态热点
      title_en: Skills Ecosystem Highlights
      include_in_rollups: true
    fetch:
      mode: hot
      issue_sort: comments
      pr_sort: popularity
    members:
      - id: claude-skills
        repo: anthropics/skills
        name: Claude Skills
      - id: copilot-skills
        repo: owner/copilot-skills
        name: Copilot Skills

  - id: ai-agents
    kind: github_group
    name: AI Agents Ecosystem
    analysis_profile: project
    topology: primary-peer
    primary_member_id: openclaw
    report:
      label: agents
      title_zh: AI Agents 生态日报
      title_en: AI Agents Ecosystem Digest
      include_in_rollups: true
    fetch:
      mode: daily
    members:
      - id: openclaw
        repo: openclaw/openclaw
        name: OpenClaw
        paginated: true
      - id: nanobot
        repo: HKUDS/nanobot
        name: NanoBot

  - id: ai-web
    kind: content_group
    name: Official AI Sites
    analysis_profile: official_content
    report:
      label: web
      title_zh: AI 官方内容追踪报告
      title_en: Official AI Content Report
      include_in_rollups: true
    sources:
      - id: anthropic
        name: Anthropic
        discovery:
          kind: sitemap
          url: https://www.anthropic.com/sitemap.xml
          include_path_prefixes: ["/news/", "/research/", "/engineering/", "/learn/"]
        extract:
          mode: full-page

      - id: openai
        name: OpenAI
        discovery:
          kind: sitemap-index-template
          template: https://openai.com/sitemap.xml/{name}/
          names: [research, publication, release, company, engineering, milestone, learn-guides, safety, product]
        extract:
          mode: metadata-only

      - id: hf-blog
        name: Hugging Face Blog
        discovery:
          kind: rss
          url: https://huggingface.co/blog/feed.xml
        extract:
          mode: feed-first
```

## 运行时分层设计

## GitHub Actions（Node Runtime）

建议承担以下模块：

- 配置加载：读取 `config.yml` 或新的统一配置文件
- 组执行器：执行 `github_group` / `content_group`
- 报告生成器：生成 Markdown
- registry 生成器：生成 report registry JSON
- manifest 生成器：生成 manifest / RSS feed / search index
- 状态写入器：写入 `digests/` 下的状态文件与产物

### 建议产物

除了现有的：

- `manifest.json`
- `feed.xml`
- `digests/YYYY-MM-DD/*.md`

新增：

- `report-registry.json`
- `tracks.runtime.json`
- `search-index.json`（可选）
- `digests/content-state.json`（替代当前固定的 `web-state.json`）

## Cloudflare Worker（MCP / Query Runtime）

建议只承担：

- 拉取 `manifest.json`
- 拉取 `report-registry.json`
- 拉取 `tracks.runtime.json`
- 拉取报告 Markdown 或 search index
- 动态暴露 MCP 工具

### Worker 侧关键约束

1. 不依赖 Node.js 文件系统。
2. 不直接解析仓库本地 YAML。
3. 不保存复杂抓取状态。
4. 只消费 GitHub Pages 暴露出来的静态构建产物。

## 推荐目录分层

```text
src/
  core/
    config-schema.ts
    track-types.ts
    report-registry.ts
    github-group/
    content-group/
    prompts/
  node/
    run-daily.ts
    run-weekly.ts
    run-monthly.ts
    build-runtime-artifacts.ts
    persistence/
  shared/
    text.ts
    dates.ts
    urls.ts

mcp/
  src/
    index.ts
    registry.ts
    tools/

docs/
  architecture-v2.md
```

## 状态板

状态说明：

- `已完成`：已经确认或已经落实到仓库
- `进行中`：当前正在做
- `未开始`：已确认要做，但尚未动手
- `阻塞`：依赖外部条件

| 项目 | 状态 | 说明 |
| ---- | ---- | ---- |
| 新架构运行时评估（Actions + Worker） | 已完成 | 已确认新架构可行，但职责必须分层：Actions 负责构建，Worker 负责消费产物 |
| `tracks[]` 统一配置模型设计 | 已完成 | 已确定 `github_group` + `content_group` 双类型方向 |
| GitHub 组拓扑模型设计 | 已完成 | 已确定支持 `primary-peer` 与 `symmetric` |
| Skills 多仓库对比建模方案 | 已完成 | 已确定作为 `github_group + symmetric + skills profile` 独立 track |
| 网站类来源配置化方案 | 已完成 | 已确定支持 RSS / Atom / Sitemap / Sitemap Index |
| 动态 report registry 方案 | 已完成 | 已确认必须抽离，不能继续散落在多个文件硬编码 |
| Copilot CLI 作为 LLM provider 的可行性评估 | 已完成 | 已完成评估，但当前已重新决策：不再采用，仓库已移除相关支持 |
| 本迭代文档建立 | 已完成 | 本文档已创建，后续持续更新 |
| README 入口挂载 | 已完成 | 已在 `README.md` 与 `README.zh.md` 中加入本文档入口 |
| LLM provider abstraction 设计 | 已完成 | 运行时已从 dual provider 收敛回单一 OpenAI-compatible provider |
| Copilot CLI provider 落代码 | 已移除 | 相关 CLI 子进程实现已从 `src/report.ts` 删除 |
| Copilot CLI 本地认证回退 | 已移除 | 不再维护本地 CLI session / PAT 回退逻辑 |
| GitHub Actions Copilot CLI 支持 | 已移除 | workflow 已移除 `LLM_PROVIDER` 条件分支与 Copilot CLI 安装步骤 |
| GitHub API 瞬时失败重试 / 降级 | 已完成 | `src/github.ts` 已对瞬时网络错误、429 与 5xx 增加重试退避；`src/index.ts` 会把单仓库抓取失败降级为局部告警而非整次中止 |
| Skills 多仓库运行时 | 已完成 | `src/index.ts` 与 `src/prompts.ts` 已支持聚合多个 skills 仓库抓取结果并生成统一的 skills 生态摘要 |
| Skills 独立日报产物 | 已完成 | `ai-skills.md` / `ai-skills-en.md` 已作为独立 track 产出，不再寄生在 `ai-cli` 报告内部 |
| `tracks[]` schema 落代码 | 进行中 | `src/config.ts` 已支持解析 `tracks[]` 并投影到当前运行时字段，但执行器仍未完全以 `tracks[]` 为中心 |
| 本地日报全链路验证（OpenAI-compatible + 抓取容错） | 进行中 | `pnpm typecheck`、`pnpm lint` 已通过；接下来以 OpenAI-compatible 路径继续做完整链路复验 |
| `github_group` 执行器重构 | 进行中 | Skills 已独立化并接入多仓库聚合，但 CLI / OpenClaw / Skills 仍未完全抽象成统一执行器 |
| `content_group` 执行器重构 | 已完成 | `src/web.ts` 已泛化为配置驱动执行器，支持多个 content track 与多来源抓取 |
| RSS / Atom 支持 | 已完成 | 已作为 `content_group` 的 discovery 类型接入运行时 |
| 通用内容状态文件 | 已完成 | `digests/web-state.json` 已升级为按 source-id 记录的通用状态结构，并兼容旧数据 |
| 内容 / Trending / HN 抓取韧性加固 | 已完成 | `src/web.ts`、`src/trending.ts`、`src/hn.ts` 已为超时、AbortError、429 / 5xx 与瞬时网络错误增加有限重试与退避 |
| registry 驱动的 manifest / UI / notify / MCP | 已完成 | `src/report-registry.ts`、`report-registry.json`、`tracks.runtime.json` 已接入 manifest 生成、Web UI、Telegram 通知与 MCP worker |
| Worker 动态读取 registry | 已完成 | `mcp/src/index.ts` 已改为读取 `report-registry.json`，不再依赖固定报告标签常量 |
| rollup 改为基于 registry | 已完成 | `src/rollup.ts` 已改为基于 `report-registry.ts` 的 `includeInRollups` 选择输入 |

## 分阶段实施计划

## Phase 0 — 文档与边界确认

### Phase 0 已完成

- 明确本轮**不考虑兼容性**。
- 明确 GitHub Actions 与 Worker 的职责边界。
- 明确统一配置目标为 `tracks[]`。
- 明确 Skills / OpenClaw / Web 都进入统一架构，但不是同一种成员模型。
- 建立本迭代文档作为长期状态板。
- 完成 README 和 README.zh 入口更新。

## Phase 1 — 配置与 registry 内核

### Phase 1 目标

先把“配置”和“报告注册表”打通，不急着一次性改完所有抓取器。

### Phase 1 待做

- 设计 `track-types.ts`
- 设计 `config-schema.ts`
- 将 `src/index.ts` / `src/config.ts` 的执行路径改为真正以 `tracks[]` 为中心

## Phase 2 — GitHub 组执行器

### Phase 2 目标

把 CLI / Skills / OpenClaw 生态统一到 `github_group` 执行模型。

### Phase 2 待做

- `fetch.mode: daily`
- `fetch.mode: hot`
- `analysis_profile: cli`
- `analysis_profile: project`
- `analysis_profile: skills`
- `topology: symmetric`
- `topology: primary-peer`

## Phase 3 — 内容组执行器

### Phase 3 目标

把当前 `src/web.ts` 泛化为可配置的 `content_group`。

### Phase 3 待做

- `rss`
- `atom`
- `sitemap`
- `sitemap-index`
- `sitemap-index-template`
- `full-page`
- `metadata-only`
- `feed-first`
- 统一的 source state 存储

## Phase 4 — Worker / UI / Registry 消费层

### Phase 4 目标

让 Worker、Web UI、通知系统全部动态消费 registry，而不是手工维护报告枚举。

### Phase 4 待做

- `mcp/src/index.ts` 动态化
- `index.html` 标签和报告映射动态化
- `src/notify.ts` 动态化
- `src/rollup.ts` 动态化

## 持续更新规则

后续每次迭代都按以下方式更新本文档：

1. **先更新状态板，再改代码**，或者最晚与代码改动同一提交完成。
2. 每完成一项工作：
   - 把状态从 `未开始` / `进行中` 改为 `已完成`
   - 在下方“迭代记录”追加一行
3. 每新增一项工作：
   - 必须写进“状态板”或“分阶段计划”
4. 不把关键架构决策只留在聊天记录中。

## 迭代记录

### 2026-04-21

- 完成新架构运行时可行性评估。
- 确认 GitHub Actions 负责构建与抓取，Cloudflare Worker 负责查询与 MCP 暴露。
- 确认配置统一方向为 `tracks[]`。
- 确认 GitHub 追踪分为 `github_group`，网站内容追踪分为 `content_group`。
- 确认 Skills 多仓库对比进入统一组模型，但采用平级 `symmetric` 拓扑。
- 确认网站来源将支持 RSS / Atom / Sitemap 配置化。
- 完成 Copilot CLI 可行性评估，但根据后续决策已不再采用该方案。
- 已将 `src/report.ts` 从 dual provider 收敛回单一 OpenAI-compatible provider 实现。
- 已从日 / 周 / 月 GitHub Actions workflow 中移除 `LLM_PROVIDER`、`COPILOT_*` 与 Copilot CLI 安装逻辑。
- 已更新 `.env`、`README.md`、`README.zh.md`，移除已废弃的 Copilot CLI 配置说明。
- 新增 `src/report-registry.ts`，集中维护所有报告元数据与顺序。
- 在 `src/generate-manifest.ts` 中生成 `report-registry.json` 与 `tracks.runtime.json`，并让 feed / manifest 统一走 registry。
- 让 `index.html`、`src/notify.ts` 与 `mcp/src/index.ts` 改为消费 `report-registry.json`，移除各自维护的报告标签枚举。
- 让 `src/rollup.ts` 改为通过 registry 的 `includeInRollups` 决定周报 / 月报输入源。
- 在 `src/config.ts` 中加入 `tracks[]` schema 支持，并新增 `config.tracks.example.yml` 作为迁移示例。
- 在 `src/github.ts` 中加入 GitHub API 瞬时网络错误 / 429 / 5xx 的重试退避逻辑，并让抓取层支持部分失败降级。
- 在 `src/index.ts` 中把单仓库 / skills 抓取失败从“整次中止”改为“局部告警 + 继续生成可用报告”。
- 已从运行时代码中移除 Copilot CLI provider、本地 session 回退逻辑及相关配置入口。
- 在 `src/config.ts`、`src/index.ts` 与 `src/prompts.ts` 中落地多 skills repo 聚合运行时，不再只消费 skills track 的第一个成员。
- 将 skills 从 `ai-cli` 内嵌章节拆分为独立的 `ai-skills.md` / `ai-skills-en.md` 产物，并与 registry / manifest 语义对齐。
- 在 `src/config.ts`、`src/web.ts`、`src/index.ts` 与 `src/prompts.ts` 中落地配置驱动的 `content_group` 执行器，支持 `rss` / `atom` / `sitemap*` 发现协议与多 track 输出。
- 在 `src/web.ts`、`src/trending.ts` 与 `src/hn.ts` 中补齐抓取超时、AbortError 与瞬时网络失败的有限重试退避，降低真实运行时的偶发网络抖动影响。
- 建立本迭代文档。
- 在 `README.md` 与 `README.zh.md` 中加入本文档入口。
