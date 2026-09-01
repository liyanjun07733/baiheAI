export const dynamic = "force-dynamic";
export const revalidate = 0;

const R2_URL =
  "https://pub-3e96ff2b29f84dc39a07e45ac834d874.r2.dev/factory-live-data.js";

export async function GET() {
  try {
    const url = `${R2_URL}?t=${Date.now()}`;

    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      return new Response(
        `console.warn("BaiheAI R2 data unavailable: HTTP ${response.status}");`,
        {
          status: 200,
          headers: {
            "Content-Type": "application/javascript; charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
          },
        }
      );
    }

    const body = await response.text();

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        "CDN-Cache-Control": "no-store",
        "Vercel-CDN-Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown R2 fetch error";

    return new Response(
      `console.warn(${JSON.stringify("BaiheAI R2 fetch failed: ")} + ${JSON.stringify(message)});`,
      {
        status: 200,
        headers: {
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  }
}
