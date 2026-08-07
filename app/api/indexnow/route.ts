import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const host = "www.baihediy.com";
const key = "9473ec348679b74b2485a0b7c0d7a0d5";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/guides`,
  `https://${host}/guides/thailand-investment-consulting`,
  `https://${host}/guides/thailand-boi-application`,
  `https://${host}/guides/thailand-company-registration`,
  `https://${host}/guides/thailand-factory-setup`,
  `https://${host}/guides/thailand-industrial-estate`,
  `https://${host}/guides/thailand-work-permit`,
];

export async function GET() {
  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key, keyLocation, urlList }),
      cache: "no-store",
    });

    const responseText = await response.text();

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      message: response.ok
        ? "IndexNow submission accepted. The new guide URLs have been submitted."
        : "IndexNow returned a non-success status. Check status and response.",
      submitted: urlList,
      response: responseText || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "IndexNow submission failed.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
