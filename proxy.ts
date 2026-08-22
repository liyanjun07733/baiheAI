import { NextRequest, NextResponse } from "next/server";

const STORE_HOST = "tools.baihediy.com";

export default function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  // Main BaiheAI website remains unchanged.
  if (host !== STORE_HOST) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Store homepage:
  // tools.baihediy.com -> internally serve /tools
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/tools";
    return NextResponse.rewrite(url);
  }

  // If an old /tools/... URL is used on the store subdomain,
  // redirect it to the cleaner URL without the /tools prefix.
  if (pathname === "/tools" || pathname.startsWith("/tools/")) {
    const url = request.nextUrl.clone();
    const cleanPath = pathname === "/tools" ? "/" : pathname.slice("/tools".length);
    url.pathname = cleanPath || "/";
    return NextResponse.redirect(url);
  }

  // Every public path on tools.baihediy.com maps to app/tools/...
  // Examples:
  // /inspection-record/pro -> /tools/inspection-record/pro
  // /knowledge             -> /tools/knowledge
  // /legal/terms           -> /tools/legal/terms
  // /support               -> /tools/support
  const url = request.nextUrl.clone();
  url.pathname = `/tools${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?)$).*)",
  ],
};
