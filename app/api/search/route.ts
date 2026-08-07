import fs from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { searchIndex, type SearchEntry } from "../../lib/searchIndex";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOWNLOAD_DIR = path.join(process.cwd(), "public", "downloads");

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function downloadEntries(): SearchEntry[] {
  try {
    if (!fs.existsSync(DOWNLOAD_DIR)) return [];

    return fs
      .readdirSync(DOWNLOAD_DIR, { withFileTypes: true })
      .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
      .map((entry) => ({
        title: entry.name,
        href: `/downloads/${encodeURIComponent(entry.name)}`,
        category: "资料下载",
        description: `免费下载：${entry.name}`,
        keywords: ["资料", "下载", "文件", entry.name],
      }));
  } catch {
    return [];
  }
}

function scoreEntry(entry: SearchEntry, query: string) {
  const q = normalize(query);
  const tokens = q.split(/[\s,，、/]+/).filter(Boolean);
  const title = normalize(entry.title);
  const category = normalize(entry.category);
  const description = normalize(entry.description);
  const keywords = normalize(entry.keywords.join(" "));

  let score = 0;
  if (title === q) score += 180;
  if (title.includes(q)) score += 100;
  if (category.includes(q)) score += 70;
  if (keywords.includes(q)) score += 55;
  if (description.includes(q)) score += 35;

  for (const token of tokens) {
    if (title.includes(token)) score += 30;
    if (keywords.includes(token)) score += 16;
    if (description.includes(token)) score += 8;
  }

  return score;
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const allEntries = [...searchIndex, ...downloadEntries()];

  if (!query) {
    return NextResponse.json({ query, results: searchIndex.slice(0, 6) });
  }

  const results = allEntries
    .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((item) => item.entry);

  return NextResponse.json({ query, results });
}
