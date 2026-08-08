import { NextRequest, NextResponse } from "next/server";

const SITE = process.env.BAIDU_SITE || "www.baihediy.com";
const TOKEN = process.env.BAIDU_TOKEN;
const SECRET = process.env.BAIDU_SUBMIT_SECRET;

function normalizeUrls(input: unknown): string[] {
  if (!Array.isArray(input)) return [];

  return input
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.startsWith("https://www.baihediy.com/"))
    .slice(0, 100);
}

export async function POST(request: NextRequest) {
  if (!TOKEN || !SECRET) {
    return NextResponse.json(
      {
        ok: false,
        message: "百度普通收录 API 尚未启用。请先在 Vercel 设置 BAIDU_TOKEN 与 BAIDU_SUBMIT_SECRET。",
      },
      { status: 503 }
    );
  }

  const providedSecret = request.headers.get("x-baiheai-secret");
  if (providedSecret !== SECRET) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const urls = normalizeUrls(body?.urls);

  if (!urls.length) {
    return NextResponse.json(
      { ok: false, message: "请提供属于 https://www.baihediy.com/ 的 URL 数组。" },
      { status: 400 }
    );
  }

  const endpoint = `http://data.zz.baidu.com/urls?site=${encodeURIComponent(SITE)}&token=${encodeURIComponent(TOKEN)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: urls.join("\n"),
    cache: "no-store",
  });

  const raw = await response.text();
  let result: unknown = raw;

  try {
    result = JSON.parse(raw);
  } catch {}

  return NextResponse.json(
    {
      ok: response.ok,
      submitted: urls.length,
      baidu: result,
    },
    { status: response.status }
  );
}
