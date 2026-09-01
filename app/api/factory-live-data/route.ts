export const dynamic = "force-dynamic";
export const revalidate = 0;

const R2_BASE =
  "https://pub-3e96ff2b29f84dc39a07e45ac834d874.r2.dev";

const DATA_URL = `${R2_BASE}/factory-live-data.js`;
const ACCESS_URL = `${R2_BASE}/factory-access.json`;

const noCacheHeaders = {
  "Content-Type": "application/javascript; charset=utf-8",
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
};

function scriptResponse(body: string) {
  return new Response(body, {
    status: 200,
    headers: noCacheHeaders,
  });
}

function accessScript(
  enabled: boolean,
  extra: Record<string, unknown> = {}
) {
  return `window.BAIHEAI_FACTORY_ACCESS = ${JSON.stringify({
    enabled,
    ...extra,
  })};\n`;
}

export async function GET() {
  try {
    // 1. Check the website switch first.
    // If the switch file does not exist yet, keep the current site open
    // for backward compatibility. Other access-check failures fail closed.
    let access = {
      enabled: true,
      updatedAt: "",
      source: "default",
    };

    try {
      const accessResponse = await fetch(`${ACCESS_URL}?t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      });

      if (accessResponse.ok) {
        const parsed = await accessResponse.json();
        access = {
          enabled: parsed?.enabled !== false,
          updatedAt:
            typeof parsed?.updatedAt === "string" ? parsed.updatedAt : "",
          source: "desktop",
        };
      } else if (accessResponse.status !== 404) {
        return scriptResponse(
          accessScript(false, {
            reason: "access-check-failed",
            message: "数据查看暂时不可用",
          })
        );
      }
    } catch {
      return scriptResponse(
        accessScript(false, {
          reason: "access-check-failed",
          message: "数据查看暂时不可用",
        })
      );
    }

    if (!access.enabled) {
      return scriptResponse(
        accessScript(false, {
          reason: "manually-closed",
          updatedAt: access.updatedAt,
          message: "工厂数据查看暂时关闭",
        })
      );
    }

    // 2. Only after access is confirmed open do we fetch actual factory data.
    const dataResponse = await fetch(`${DATA_URL}?t=${Date.now()}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    });

    if (!dataResponse.ok) {
      return scriptResponse(
        accessScript(false, {
          reason: "data-unavailable",
          message: "数据暂时不可用，请稍后刷新",
        })
      );
    }

    const body = await dataResponse.text();

    return scriptResponse(
      accessScript(true, {
        updatedAt: access.updatedAt,
      }) + body
    );
  } catch {
    // Security-first behavior: if access state cannot be verified,
    // never expose an old/static data snapshot.
    return scriptResponse(
      accessScript(false, {
        reason: "temporary-error",
        message: "数据查看暂时不可用",
      })
    );
  }
}
