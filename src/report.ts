/**
 * LLM invocation and file output helpers.
 * Supports OpenAI-compatible chat/completions endpoints.
 */

import fs from "node:fs";
import path from "node:path";

const DEFAULT_OPENAI_BASE_URL = "https://api.openai.com/v1";
const DEFAULT_MODEL = "gpt-4.1-mini";

function getConfiguredLlmConcurrency(): number {
  const raw = Number(process.env["LLM_CONCURRENCY"] ?? "");
  if (Number.isFinite(raw) && raw >= 1) return Math.floor(raw);
  return 5;
}

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = getConfiguredLlmConcurrency();
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

function isRetryableLlmError(err: unknown): boolean {
  if (is429(err)) return true;

  const text = String(err).toLowerCase();
  return (
    text.includes("timed out") ||
    text.includes("returned empty output") ||
    text.includes("returned no usable output") ||
    text.includes("rate limit")
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function getOpenAiCompatibleApiKey(): string {
  return process.env["OPENAI_API_KEY"] ?? process.env["ANTHROPIC_API_KEY"] ?? "";
}

export function getLlmBaseUrl(): string {
  return (
    process.env["OPENAI_BASE_URL"] ??
    process.env["ANTHROPIC_BASE_URL"] ??
    DEFAULT_OPENAI_BASE_URL
  ).replace(/\/$/, "");
}

function getOpenAiCompatibleModel(): string {
  return process.env["OPENAI_MODEL"] ?? process.env["ANTHROPIC_MODEL"] ?? DEFAULT_MODEL;
}

export function getLlmRuntimeLabel(): string {
  return `openai-compatible:${getOpenAiCompatibleModel()} @ ${getLlmBaseUrl()}`;
}

export function getLlmConfigurationError(): string {
  return "Missing required environment variable: OPENAI_API_KEY";
}

export function hasLlmCredentials(): boolean {
  return getOpenAiCompatibleApiKey().length > 0;
}

function stripReasoning(text: string): string {
  // Some reasoning models embed <think>...</think> blocks inside the response
  // content. Strip them so they don't leak into published reports.
  return text.replace(/<think>[\s\S]*?<\/think>\s*/gi, "").trim();
}

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return stripReasoning(content);
  if (Array.isArray(content)) {
    const text = content
      .map((part) => {
        if (typeof part === "string") return part;
        if (
          part &&
          typeof part === "object" &&
          "type" in part &&
          part.type === "text" &&
          "text" in part &&
          typeof part.text === "string"
        ) {
          return part.text;
        }
        return "";
      })
      .join("");
    const stripped = stripReasoning(text);
    if (stripped) return stripped;
  }
  throw new Error("Unexpected response type from LLM");
}

async function callOpenAiCompatibleLlm(prompt: string, maxTokens: number): Promise<string> {
  const apiKey = getOpenAiCompatibleApiKey();
  if (!apiKey) throw new Error("Missing required environment variable: OPENAI_API_KEY");

  const resp = await fetch(`${getLlmBaseUrl()}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: getOpenAiCompatibleModel(),
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      max_tokens: maxTokens,
    }),
  });
  if (!resp.ok) {
    throw new Error(`LLM API ${resp.status}: ${await resp.text()}`);
  }

  const data = (await resp.json()) as {
    choices?: Array<{
      message?: {
        content?: unknown;
      };
    }>;
  };
  const content = data.choices?.[0]?.message?.content;
  return extractTextContent(content);
}

export async function callLlm(prompt: string, maxTokens = 4096): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      return await callOpenAiCompatibleLlm(prompt, maxTokens);
    } catch (err) {
      if (attempt < MAX_RETRIES && isRetryableLlmError(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s after: ${String(err)}`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: "zh" | "en" = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return lang === "en"
    ? `\n\n---\n*This digest is auto-generated by [Big Model Radar](https://github.com/${digestRepo}).*`
    : `\n\n---\n*本日报由 [Big Model Radar](https://github.com/${digestRepo}) 自动生成。*`;
}
