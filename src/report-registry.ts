import type { RadarTrack } from "./config.ts";

export type ReportKind = "github_group" | "content_group" | "rollup";
export type ReportLanguage = "zh" | "en";

interface ReportVariantDefinition {
  id: string;
  shortLabel: string;
  fullTitle: string;
  language: ReportLanguage;
  includeInSearch: boolean;
}

interface BaseReportDefinition {
  baseId: string;
  kind: ReportKind;
  order: number;
  includeInRollups: boolean;
  variants: Record<ReportLanguage, ReportVariantDefinition>;
}

export interface ReportRegistryEntry {
  id: string;
  baseId: string;
  kind: ReportKind;
  order: number;
  filename: string;
  language: ReportLanguage;
  shortLabel: string;
  fullTitle: string;
  includeInRollups: boolean;
  includeInSearch: boolean;
  pairId: string;
}

export interface TrackRuntimeEntry {
  id: string;
  kind: ReportKind;
  order: number;
  includeInRollups: boolean;
  variants: Array<{
    id: string;
    language: ReportLanguage;
    shortLabel: string;
    fullTitle: string;
  }>;
}

export interface ReportRegistryArtifact {
  generated: string;
  tracks: TrackRuntimeEntry[];
  reports: ReportRegistryEntry[];
}

export interface TracksRuntimeArtifact {
  generated: string;
  tracks: TrackRuntimeEntry[];
}

interface DynamicTrackReportOverride {
  order?: number;
  shortLabelZh?: string;
  shortLabelEn?: string;
}

const BASE_REPORT_DEFINITIONS: BaseReportDefinition[] = [
  {
    baseId: "ai-cli",
    kind: "github_group",
    order: 10,
    includeInRollups: true,
    variants: {
      zh: {
        id: "ai-cli",
        shortLabel: "AI CLI 工具",
        fullTitle: "AI CLI 工具社区动态日报",
        language: "zh",
        includeInSearch: true,
      },
      en: {
        id: "ai-cli-en",
        shortLabel: "AI CLI Tools",
        fullTitle: "AI CLI Tools Digest",
        language: "en",
        includeInSearch: false,
      },
    },
  },
  {
    baseId: "ai-agents",
    kind: "github_group",
    order: 20,
    includeInRollups: true,
    variants: {
      zh: {
        id: "ai-agents",
        shortLabel: "AI Agents 生态",
        fullTitle: "AI Agents 生态日报",
        language: "zh",
        includeInSearch: true,
      },
      en: {
        id: "ai-agents-en",
        shortLabel: "AI Agents Ecosystem",
        fullTitle: "AI Agents Ecosystem Digest",
        language: "en",
        includeInSearch: false,
      },
    },
  },
  {
    baseId: "ai-web",
    kind: "content_group",
    order: 30,
    includeInRollups: true,
    variants: {
      zh: {
        id: "ai-web",
        shortLabel: "OpenAI & Anthropic 官网动态",
        fullTitle: "AI 官方内容追踪报告",
        language: "zh",
        includeInSearch: true,
      },
      en: {
        id: "ai-web-en",
        shortLabel: "OpenAI & Anthropic Updates",
        fullTitle: "Official AI Content Report",
        language: "en",
        includeInSearch: false,
      },
    },
  },
  {
    baseId: "ai-trending",
    kind: "content_group",
    order: 40,
    includeInRollups: true,
    variants: {
      zh: {
        id: "ai-trending",
        shortLabel: "GitHub AI 趋势",
        fullTitle: "AI 开源趋势日报",
        language: "zh",
        includeInSearch: true,
      },
      en: {
        id: "ai-trending-en",
        shortLabel: "GitHub AI Trends",
        fullTitle: "AI Open Source Trends",
        language: "en",
        includeInSearch: false,
      },
    },
  },
  {
    baseId: "ai-hn",
    kind: "content_group",
    order: 50,
    includeInRollups: true,
    variants: {
      zh: {
        id: "ai-hn",
        shortLabel: "HN 社区动态",
        fullTitle: "Hacker News AI 社区动态日报",
        language: "zh",
        includeInSearch: true,
      },
      en: {
        id: "ai-hn-en",
        shortLabel: "HN Community Digest",
        fullTitle: "Hacker News AI Community Digest",
        language: "en",
        includeInSearch: false,
      },
    },
  },
  {
    baseId: "ai-weekly",
    kind: "rollup",
    order: 100,
    includeInRollups: false,
    variants: {
      zh: {
        id: "ai-weekly",
        shortLabel: "AI 工具生态周报",
        fullTitle: "AI 工具生态周报",
        language: "zh",
        includeInSearch: false,
      },
      en: {
        id: "ai-weekly-en",
        shortLabel: "AI Tools Weekly",
        fullTitle: "AI Tools Weekly Digest",
        language: "en",
        includeInSearch: false,
      },
    },
  },
  {
    baseId: "ai-monthly",
    kind: "rollup",
    order: 110,
    includeInRollups: false,
    variants: {
      zh: {
        id: "ai-monthly",
        shortLabel: "AI 工具生态月报",
        fullTitle: "AI 工具生态月报",
        language: "zh",
        includeInSearch: false,
      },
      en: {
        id: "ai-monthly-en",
        shortLabel: "AI Tools Monthly",
        fullTitle: "AI Tools Monthly Digest",
        language: "en",
        includeInSearch: false,
      },
    },
  },
];

const TRACK_CONFIG_IDS = new Set(["ai-cli", "ai-skills", "ai-agents", "ai-web"]);

const DYNAMIC_TRACK_OVERRIDES: Record<string, DynamicTrackReportOverride> = {
  "ai-skills": {
    order: 15,
    shortLabelZh: "Skills 生态热点",
    shortLabelEn: "Skills Highlights",
  },
};

function buildDynamicTrackDefinition(track: RadarTrack, index: number): BaseReportDefinition {
  const override = DYNAMIC_TRACK_OVERRIDES[track.id];
  const zhTitle = track.report?.titleZh ?? track.name;
  const enTitle = track.report?.titleEn ?? track.name;

  return {
    baseId: track.id,
    kind: track.kind,
    order: override?.order ?? 60 + index * 10,
    includeInRollups: track.report?.includeInRollups ?? true,
    variants: {
      zh: {
        id: track.id,
        shortLabel: override?.shortLabelZh ?? zhTitle,
        fullTitle: zhTitle,
        language: "zh",
        includeInSearch: true,
      },
      en: {
        id: `${track.id}-en`,
        shortLabel: override?.shortLabelEn ?? enTitle,
        fullTitle: enTitle,
        language: "en",
        includeInSearch: false,
      },
    },
  };
}

function getReportDefinitions(tracks?: RadarTrack[]): BaseReportDefinition[] {
  if (!tracks || tracks.length === 0) return BASE_REPORT_DEFINITIONS;

  const trackMap = new Map(tracks.map((track) => [track.id, track]));
  const knownBaseIds = new Set(BASE_REPORT_DEFINITIONS.map((definition) => definition.baseId));

  const knownDefinitions = BASE_REPORT_DEFINITIONS.filter((definition) => {
    if (!TRACK_CONFIG_IDS.has(definition.baseId)) return true;
    return trackMap.has(definition.baseId);
  }).map((definition) => {
    const track = trackMap.get(definition.baseId);
    if (!track?.report) return definition;

    return {
      ...definition,
      kind: track.kind,
      includeInRollups: track.report.includeInRollups ?? definition.includeInRollups,
      variants: {
        zh: {
          ...definition.variants.zh,
          fullTitle: track.report.titleZh ?? definition.variants.zh.fullTitle,
        },
        en: {
          ...definition.variants.en,
          fullTitle: track.report.titleEn ?? definition.variants.en.fullTitle,
        },
      },
    };
  });

  const dynamicDefinitions = tracks
    .filter((track) => !knownBaseIds.has(track.id))
    .map((track, index) => buildDynamicTrackDefinition(track, index));

  return [...knownDefinitions, ...dynamicDefinitions].sort((left, right) => left.order - right.order);
}

export function getTrackRuntimeEntries(tracks?: RadarTrack[]): TrackRuntimeEntry[] {
  return getReportDefinitions(tracks).map((definition) => ({
    id: definition.baseId,
    kind: definition.kind,
    order: definition.order,
    includeInRollups: definition.includeInRollups,
    variants: [definition.variants.zh, definition.variants.en].map((variant) => ({
      id: variant.id,
      language: variant.language,
      shortLabel: variant.shortLabel,
      fullTitle: variant.fullTitle,
    })),
  }));
}

export function getReportRegistryEntries(tracks?: RadarTrack[]): ReportRegistryEntry[] {
  return getReportDefinitions(tracks).flatMap((definition) => {
    const orderedVariants = [definition.variants.zh, definition.variants.en];
    return orderedVariants.map((variant) => ({
      id: variant.id,
      baseId: definition.baseId,
      kind: definition.kind,
      order: definition.order,
      filename: `${variant.id}.md`,
      language: variant.language,
      shortLabel: variant.shortLabel,
      fullTitle: variant.fullTitle,
      includeInRollups: definition.includeInRollups,
      includeInSearch: variant.includeInSearch,
      pairId: variant.language === "zh" ? definition.variants.en.id : definition.variants.zh.id,
    }));
  });
}

export function getReportRegistryMap(
  entries: ReportRegistryEntry[] = getReportRegistryEntries(),
): Record<string, ReportRegistryEntry> {
  return Object.fromEntries(entries.map((entry) => [entry.id, entry]));
}

export function getOrderedReportIds(tracks?: RadarTrack[]): string[] {
  return getReportRegistryEntries(tracks).map((entry) => entry.id);
}

export function sortReportsByRegistry(reportIds: string[], tracks?: RadarTrack[]): string[] {
  const order = new Map(getOrderedReportIds(tracks).map((id, index) => [id, index]));
  return [...reportIds].sort((left, right) => {
    const leftOrder = order.get(left);
    const rightOrder = order.get(right);

    if (leftOrder !== undefined && rightOrder !== undefined) return leftOrder - rightOrder;
    if (leftOrder !== undefined) return -1;
    if (rightOrder !== undefined) return 1;
    return left.localeCompare(right);
  });
}

export function getReportRegistryArtifact(
  generated = new Date().toISOString(),
  tracks?: RadarTrack[],
): ReportRegistryArtifact {
  return {
    generated,
    tracks: getTrackRuntimeEntries(tracks),
    reports: getReportRegistryEntries(tracks),
  };
}

export function getTracksRuntimeArtifact(
  generated = new Date().toISOString(),
  tracks?: RadarTrack[],
): TracksRuntimeArtifact {
  return {
    generated,
    tracks: getTrackRuntimeEntries(tracks),
  };
}
