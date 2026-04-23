/**
 * Loads and validates Big Model Radar configuration from config.yml.
 * Supports both the legacy schema and the new `tracks[]` schema.
 * Falls back to built-in defaults if the file is missing or a section is absent.
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type { RepoConfig } from "./github.ts";

// ---------------------------------------------------------------------------
// Schema types
// ---------------------------------------------------------------------------

interface RawRepoEntry {
  id: string;
  repo: string;
  name: string;
  paginated?: boolean;
}

interface RawConfig {
  cli_repos?: RawRepoEntry[];
  skills_repo?: string;
  openclaw?: RawRepoEntry;
  openclaw_peers?: RawRepoEntry[];
  tracks?: RawTrack[];
}

interface RawTrackReport {
  label?: string;
  title_zh?: string;
  title_en?: string;
  include_in_rollups?: boolean;
}

interface RawContentExtract {
  mode?: "full-page" | "metadata-only" | "feed-first";
}

interface RawSitemapDiscovery {
  kind: "sitemap";
  url: string;
  prefixes?: string[];
}

interface RawSitemapIndexDiscovery {
  kind: "sitemap-index";
  url: string;
  includes?: string[];
  excludes?: string[];
}

interface RawSitemapIndexTemplateDiscovery {
  kind: "sitemap-index-template";
  template: string;
  names: string[];
}

interface RawFeedDiscovery {
  kind: "rss" | "atom";
  url: string;
}

type RawContentDiscovery =
  | RawSitemapDiscovery
  | RawSitemapIndexDiscovery
  | RawSitemapIndexTemplateDiscovery
  | RawFeedDiscovery;

interface RawContentSource {
  id: string;
  name?: string;
  discovery: RawContentDiscovery;
  extract?: RawContentExtract;
}

interface RawGithubGroupTrack {
  id: string;
  kind: "github_group";
  name?: string;
  analysis_profile?: string;
  topology?: "symmetric" | "primary-peer";
  primary_member_id?: string;
  members?: RawRepoEntry[];
  report?: RawTrackReport;
}

interface RawContentGroupTrack {
  id: string;
  kind: "content_group";
  name?: string;
  analysis_profile?: string;
  report?: RawTrackReport;
  sources?: RawContentSource[];
}

type RawTrack = RawGithubGroupTrack | RawContentGroupTrack;

export interface RadarTrackReport {
  label?: string;
  titleZh?: string;
  titleEn?: string;
  includeInRollups?: boolean;
}

export type ContentExtractMode = "full-page" | "metadata-only" | "feed-first";

export type ContentDiscovery =
  | { kind: "sitemap"; url: string; prefixes?: string[] }
  | { kind: "sitemap-index"; url: string; includes?: string[]; excludes?: string[] }
  | { kind: "sitemap-index-template"; template: string; names: string[] }
  | { kind: "rss" | "atom"; url: string };

export interface ContentSource {
  id: string;
  name: string;
  discovery: ContentDiscovery;
  extract: { mode: ContentExtractMode };
}

interface BaseRadarTrack {
  id: string;
  kind: "github_group" | "content_group";
  name: string;
  analysisProfile?: string;
  report?: RadarTrackReport;
}

export interface GitHubGroupTrack extends BaseRadarTrack {
  kind: "github_group";
  topology: "symmetric" | "primary-peer";
  members: RepoConfig[];
  primaryMemberId?: string;
}

export interface ContentGroupTrack extends BaseRadarTrack {
  kind: "content_group";
  sources: ContentSource[];
}

export type RadarTrack = GitHubGroupTrack | ContentGroupTrack;

export interface RadarConfig {
  cliRepos: RepoConfig[];
  skillsRepo: string;
  skillsRepos: RepoConfig[];
  openclaw: RepoConfig;
  openclawPeers: RepoConfig[];
  contentTracks: ContentGroupTrack[];
  tracks: RadarTrack[];
}

// ---------------------------------------------------------------------------
// Defaults (mirrors the original hard-coded values)
// ---------------------------------------------------------------------------

const DEFAULT_CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" },
  { id: "codex", repo: "openai/codex", name: "OpenAI Codex" },
  { id: "gemini-cli", repo: "google-gemini/gemini-cli", name: "Gemini CLI" },
  { id: "copilot-cli", repo: "github/copilot-cli", name: "GitHub Copilot CLI" },
  { id: "kimi-cli", repo: "MoonshotAI/kimi-cli", name: "Kimi Code CLI" },
  { id: "opencode", repo: "anomalyco/opencode", name: "OpenCode" },
  { id: "qwen-code", repo: "QwenLM/qwen-code", name: "Qwen Code" },
];

const DEFAULT_SKILLS_REPO = "anthropics/skills";
const DEFAULT_SKILLS_REPOS: RepoConfig[] = [
  { id: "claude-code-skills", repo: DEFAULT_SKILLS_REPO, name: "Claude Code Skills" },
];

const DEFAULT_OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

const DEFAULT_OPENCLAW_PEERS: RepoConfig[] = [
  { id: "nanobot", repo: "HKUDS/nanobot", name: "NanoBot", paginated: true },
  { id: "zeroclaw", repo: "zeroclaw-labs/zeroclaw", name: "Zeroclaw" },
  { id: "picoclaw", repo: "sipeed/picoclaw", name: "PicoClaw", paginated: true },
  { id: "nanoclaw", repo: "qwibitai/nanoclaw", name: "NanoClaw" },
  { id: "ironclaw", repo: "nearai/ironclaw", name: "IronClaw" },
  { id: "lobsterai", repo: "netease-youdao/LobsterAI", name: "LobsterAI" },
  { id: "tinyclaw", repo: "TinyAGI/tinyclaw", name: "TinyClaw" },
  { id: "copaw", repo: "agentscope-ai/CoPaw", name: "CoPaw" },
  { id: "zeptoclaw", repo: "qhkm/zeptoclaw", name: "ZeptoClaw" },
  { id: "easyclaw", repo: "gaoyangz77/easyclaw", name: "EasyClaw" },
];

const DEFAULT_CONTENT_SOURCES: ContentSource[] = [
  {
    id: "anthropic",
    name: "Anthropic (Claude)",
    discovery: {
      kind: "sitemap",
      url: "https://www.anthropic.com/sitemap.xml",
      prefixes: ["/news/", "/research/", "/engineering/", "/learn/"],
    },
    extract: { mode: "full-page" },
  },
  {
    id: "openai",
    name: "OpenAI",
    discovery: {
      kind: "sitemap-index-template",
      template: "https://openai.com/sitemap.xml/{name}/",
      names: [
        "research",
        "publication",
        "release",
        "company",
        "engineering",
        "milestone",
        "learn-guides",
        "safety",
        "product",
      ],
    },
    extract: { mode: "metadata-only" },
  },
];

function buildDefaultTracks(): RadarTrack[] {
  return [
    {
      id: "ai-cli",
      kind: "github_group",
      name: "AI CLI Tools",
      analysisProfile: "cli",
      topology: "symmetric",
      members: DEFAULT_CLI_REPOS,
      report: {
        label: "digest",
        titleZh: "AI CLI 工具社区动态日报",
        titleEn: "AI CLI Tools Digest",
        includeInRollups: true,
      },
    },
    {
      id: "ai-skills",
      kind: "github_group",
      name: "Skills Ecosystem",
      analysisProfile: "skills",
      topology: "symmetric",
      members: DEFAULT_SKILLS_REPOS,
      report: {
        label: "skills",
        titleZh: "Skills 生态热点",
        titleEn: "Skills Ecosystem Highlights",
        includeInRollups: true,
      },
    },
    {
      id: "ai-agents",
      kind: "github_group",
      name: "AI Agents Ecosystem",
      analysisProfile: "project",
      topology: "primary-peer",
      primaryMemberId: DEFAULT_OPENCLAW.id,
      members: [DEFAULT_OPENCLAW, ...DEFAULT_OPENCLAW_PEERS],
      report: {
        label: "agents",
        titleZh: "AI Agents 生态日报",
        titleEn: "AI Agents Ecosystem Digest",
        includeInRollups: true,
      },
    },
    {
      id: "ai-web",
      kind: "content_group",
      name: "Official AI Sites",
      analysisProfile: "official_content",
      sources: DEFAULT_CONTENT_SOURCES,
      report: {
        label: "web",
        titleZh: "AI 官方内容追踪报告",
        titleEn: "Official AI Content Report",
        includeInRollups: true,
      },
    },
  ];
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

function toRepoConfig(e: RawRepoEntry): RepoConfig {
  return { id: e.id, repo: e.repo, name: e.name, ...(e.paginated ? { paginated: true } : {}) };
}

function toTrackReport(report: RawTrackReport | undefined): RadarTrackReport | undefined {
  if (!report) return undefined;

  return {
    ...(report.label ? { label: report.label } : {}),
    ...(report.title_zh ? { titleZh: report.title_zh } : {}),
    ...(report.title_en ? { titleEn: report.title_en } : {}),
    ...(typeof report.include_in_rollups === "boolean"
      ? { includeInRollups: report.include_in_rollups }
      : {}),
  };
}

function toStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
  return items.length > 0 ? items : undefined;
}

function defaultExtractMode(discovery: RawContentDiscovery): ContentExtractMode {
  return discovery.kind === "rss" || discovery.kind === "atom" ? "feed-first" : "full-page";
}

function toContentSource(source: RawContentSource): ContentSource | undefined {
  if (!source?.id || !source?.discovery?.kind) return undefined;

  const id = source.id.trim();
  if (!id) return undefined;

  const name = source.name?.trim() || id;
  const mode = source.extract?.mode ?? defaultExtractMode(source.discovery);

  switch (source.discovery.kind) {
    case "sitemap": {
      const url = source.discovery.url?.trim();
      if (!url) return undefined;
      return {
        id,
        name,
        discovery: {
          kind: "sitemap",
          url,
          ...(toStringArray(source.discovery.prefixes) ? { prefixes: toStringArray(source.discovery.prefixes) } : {}),
        },
        extract: { mode },
      };
    }
    case "sitemap-index": {
      const url = source.discovery.url?.trim();
      if (!url) return undefined;
      return {
        id,
        name,
        discovery: {
          kind: "sitemap-index",
          url,
          ...(toStringArray(source.discovery.includes) ? { includes: toStringArray(source.discovery.includes) } : {}),
          ...(toStringArray(source.discovery.excludes) ? { excludes: toStringArray(source.discovery.excludes) } : {}),
        },
        extract: { mode },
      };
    }
    case "sitemap-index-template": {
      const template = source.discovery.template?.trim();
      const names = toStringArray(source.discovery.names);
      if (!template || !names) return undefined;
      return {
        id,
        name,
        discovery: { kind: "sitemap-index-template", template, names },
        extract: { mode },
      };
    }
    case "rss":
    case "atom": {
      const url = source.discovery.url?.trim();
      if (!url) return undefined;
      return {
        id,
        name,
        discovery: { kind: source.discovery.kind, url },
        extract: { mode },
      };
    }
  }
}

function parseTracks(rawTracks: RawTrack[] | undefined): RadarTrack[] {
  if (!Array.isArray(rawTracks) || rawTracks.length === 0) return [];

  return rawTracks.flatMap((track): RadarTrack[] => {
    if (!track?.id || !track?.kind) return [];

    if (track.kind === "github_group") {
      const members = Array.isArray(track.members) ? track.members.map(toRepoConfig) : [];
      if (members.length === 0) return [];

      return [
        {
          id: track.id,
          kind: "github_group",
          name: track.name?.trim() || track.id,
          analysisProfile: track.analysis_profile?.trim(),
          topology: track.topology ?? "symmetric",
          members,
          ...(track.primary_member_id ? { primaryMemberId: track.primary_member_id } : {}),
          ...(toTrackReport(track.report) ? { report: toTrackReport(track.report) } : {}),
        },
      ];
    }

    return [
      {
        id: track.id,
        kind: "content_group",
        name: track.name?.trim() || track.id,
        analysisProfile: track.analysis_profile?.trim(),
        sources: Array.isArray(track.sources) ? track.sources.map(toContentSource).filter((source): source is ContentSource => Boolean(source)) : [],
        ...(toTrackReport(track.report) ? { report: toTrackReport(track.report) } : {}),
      },
    ];
  });
}

function findGithubTrack(tracks: RadarTrack[], predicate: (track: GitHubGroupTrack) => boolean): GitHubGroupTrack | undefined {
  return tracks.find((track): track is GitHubGroupTrack => track.kind === "github_group" && predicate(track));
}

function deriveSkillsRepos(track: GitHubGroupTrack | undefined): RepoConfig[] {
  if (!track || track.members.length === 0) return DEFAULT_SKILLS_REPOS;
  return track.members;
}

function deriveOpenclawConfig(track: GitHubGroupTrack | undefined): { openclaw: RepoConfig; openclawPeers: RepoConfig[] } {
  if (!track || track.members.length === 0) {
    return { openclaw: DEFAULT_OPENCLAW, openclawPeers: DEFAULT_OPENCLAW_PEERS };
  }

  const primary =
    (track.primaryMemberId ? track.members.find((member) => member.id === track.primaryMemberId) : undefined) ??
    track.members.find((member) => member.id === "openclaw") ??
    track.members[0];

  if (!primary) return { openclaw: DEFAULT_OPENCLAW, openclawPeers: DEFAULT_OPENCLAW_PEERS };

  return {
    openclaw: primary,
    openclawPeers: track.members.filter((member) => member.id !== primary.id),
  };
}

function deriveContentTracks(tracks: RadarTrack[]): ContentGroupTrack[] {
  return tracks.filter((track): track is ContentGroupTrack => track.kind === "content_group");
}

function buildLegacyConfig(raw: RawConfig): RadarConfig {
  const cliRepos =
    Array.isArray(raw?.cli_repos) && raw.cli_repos.length > 0
      ? raw.cli_repos.map(toRepoConfig)
      : DEFAULT_CLI_REPOS;

  const skillsRepo =
    typeof raw?.skills_repo === "string" && raw.skills_repo.trim()
      ? raw.skills_repo.trim()
      : DEFAULT_SKILLS_REPO;
  const skillsRepos = [{ id: "claude-code-skills", repo: skillsRepo, name: "Claude Code Skills" }];

  const openclaw = raw?.openclaw?.id && raw.openclaw.repo ? toRepoConfig(raw.openclaw) : DEFAULT_OPENCLAW;

  const openclawPeers =
    Array.isArray(raw?.openclaw_peers) && raw.openclaw_peers.length > 0
      ? raw.openclaw_peers.map(toRepoConfig)
      : DEFAULT_OPENCLAW_PEERS;

  const tracks = buildDefaultTracks().map((track) => {
    if (track.id === "ai-cli" && track.kind === "github_group") return { ...track, members: cliRepos };
    if (track.id === "ai-skills" && track.kind === "github_group") {
      return {
        ...track,
        members: skillsRepos,
      };
    }
    if (track.id === "ai-agents" && track.kind === "github_group") {
      return { ...track, primaryMemberId: openclaw.id, members: [openclaw, ...openclawPeers] };
    }
    return track;
  });

  return { cliRepos, skillsRepo, skillsRepos, openclaw, openclawPeers, contentTracks: deriveContentTracks(tracks), tracks };
}

function buildTracksConfig(raw: RawConfig, tracks: RadarTrack[]): RadarConfig {
  const cliTrack = findGithubTrack(
    tracks,
    (track) => track.id === "ai-cli" || track.analysisProfile === "cli",
  );
  const skillsTrack = findGithubTrack(
    tracks,
    (track) => track.id === "ai-skills" || track.analysisProfile === "skills",
  );
  const agentsTrack = findGithubTrack(
    tracks,
    (track) =>
      track.id === "ai-agents" || track.topology === "primary-peer" || track.analysisProfile === "project",
  );

  const cliRepos = cliTrack?.members.length ? cliTrack.members : DEFAULT_CLI_REPOS;
  const skillsRepos = deriveSkillsRepos(skillsTrack);
  const skillsRepo = skillsRepos[0]?.repo ?? DEFAULT_SKILLS_REPO;
  const { openclaw, openclawPeers } = deriveOpenclawConfig(agentsTrack);
  const contentTracks = deriveContentTracks(tracks);

  return {
    cliRepos,
    skillsRepo,
    skillsRepos,
    openclaw,
    openclawPeers,
    contentTracks,
    tracks,
  };
}

export function loadConfig(configPath = "config.yml"): RadarConfig {
  const resolved = path.resolve(configPath);

  if (!fs.existsSync(resolved)) {
    console.log(`[config] ${configPath} not found — using built-in defaults.`);
    return {
      cliRepos: DEFAULT_CLI_REPOS,
      skillsRepo: DEFAULT_SKILLS_REPO,
      skillsRepos: DEFAULT_SKILLS_REPOS,
      openclaw: DEFAULT_OPENCLAW,
      openclawPeers: DEFAULT_OPENCLAW_PEERS,
      contentTracks: deriveContentTracks(buildDefaultTracks()),
      tracks: buildDefaultTracks(),
    };
  }

  const raw = yaml.load(fs.readFileSync(resolved, "utf-8")) as RawConfig;

  const tracks = parseTracks(raw?.tracks);
  const config = tracks.length > 0 ? buildTracksConfig(raw, tracks) : buildLegacyConfig(raw);

  const mode = tracks.length > 0 ? "tracks[]" : "legacy";

  console.log(
    `[config] Loaded from ${configPath}: ` +
      `${config.cliRepos.length} CLI repos, ${config.openclawPeers.length} OpenClaw peers, ` +
      `${config.tracks.length} tracks (${mode} schema)`,
  );

  return config;
}
