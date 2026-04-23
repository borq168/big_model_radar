/**
 * Telegram notification — reads manifest.json and sends a message
 * with links to the latest reports. Skips silently if secrets are not set.
 *
 * Required env vars:
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — channel/group/user chat ID
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL; derived from repo slug when omitted
 */

import "./env.ts";

import fs from "node:fs";

const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] ?? "";

interface ReportRegistryEntry {
  id: string;
  shortLabel: string;
  kind: "github_group" | "content_group" | "rollup";
}

function resolvePagesUrl(): string {
  const explicit = process.env["PAGES_URL"] ?? process.env["SITE_URL"];
  if (explicit) return explicit.replace(/\/$/, "");

  const repo = process.env["DIGEST_REPO"] ?? process.env["GITHUB_REPOSITORY"];
  if (repo) {
    const [owner, name] = repo.split("/");
    if (owner && name) return `https://${owner}.github.io/${name}`;
  }

  throw new Error("Missing PAGES_URL/SITE_URL and unable to derive from repository.");
}

const PAGES_URL = resolvePagesUrl();

function loadRegistryMap(): Record<string, ReportRegistryEntry> {
  if (!fs.existsSync("report-registry.json")) return {};

  try {
    const { reports } = JSON.parse(fs.readFileSync("report-registry.json", "utf-8")) as {
      reports?: ReportRegistryEntry[];
    };
    return Object.fromEntries((reports ?? []).map((report) => [report.id, report]));
  } catch (error) {
    console.warn(
      `[notify] Failed to load report-registry.json: ${error instanceof Error ? error.message : String(error)}`,
    );
    return {};
  }
}

const REPORTS_BY_ID = loadRegistryMap();

function getShortLabel(reportId: string): string {
  return REPORTS_BY_ID[reportId]?.shortLabel ?? reportId;
}

function isRollup(reportId: string): boolean {
  const kind = REPORTS_BY_ID[reportId]?.kind;
  if (kind) return kind === "rollup";
  return reportId.includes("weekly") || reportId.includes("monthly");
}

async function sendTelegram(text: string): Promise<void> {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API ${res.status}: ${body}`);
  }
}

function buildMessage(date: string, reports: string[]): string {
  const baseReports = reports.filter((r) => !r.endsWith("-en"));
  const isWeekly = baseReports.includes("ai-weekly");
  const isMonthly = baseReports.includes("ai-monthly");

  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
  const lines: string[] = [`${icon} <b>Big Model Radar${suffix} · ${date}</b>\n`];

  const ordered = [
    ...baseReports.filter((r) => !isRollup(r)),
    ...baseReports.filter((r) => isRollup(r)),
  ];

  for (const r of ordered) {
    const zhLabel = getShortLabel(r);
    const zhUrl = `${PAGES_URL}/#${date}/${r}`;
    const enKey = `${r}-en`;
    if (reports.includes(enKey)) {
      const enLabel = getShortLabel(enKey);
      const enUrl = `${PAGES_URL}/#${date}/${enKey}`;
      lines.push(`• <a href="${zhUrl}">${zhLabel}</a>  ·  <a href="${enUrl}">${enLabel}</a>`);
    } else {
      lines.push(`• <a href="${zhUrl}">${zhLabel}</a>`);
    }
  }

  lines.push(`\n<a href="${PAGES_URL}">🌐 Web UI</a>  ·  <a href="${PAGES_URL}/feed.xml">⊕ RSS</a>`);
  return lines.join("\n");
}

async function main(): Promise<void> {
  if (!BOT_TOKEN) {
    console.log("[notify] TELEGRAM_BOT_TOKEN not set — skipping.");
    return;
  }
  if (!CHAT_ID) {
    console.log("[notify] TELEGRAM_CHAT_ID not set — skipping.");
    return;
  }

  if (!fs.existsSync("manifest.json")) {
    console.log("[notify] manifest.json not found — skipping.");
    return;
  }

  const { dates } = JSON.parse(fs.readFileSync("manifest.json", "utf-8")) as {
    dates: { date: string; reports: string[] }[];
  };

  const latest = dates?.[0];
  if (!latest) {
    console.log("[notify] manifest is empty — skipping.");
    return;
  }
  const { date, reports } = latest;
  const text = buildMessage(date, reports);

  console.log(`[notify] Sending Telegram message for ${date} (${reports.length} reports)…`);
  await sendTelegram(text);
  console.log("[notify] Done!");
}

main().catch((e: unknown) => {
  console.error("[notify]", e instanceof Error ? e.message : e);
  process.exit(1);
});
