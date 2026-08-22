import { NextRequest, NextResponse } from "next/server";

const STORE_HOST = "tools.baihediy.com";

function isStorePath(pathname: string) {
  return (
    pathname === "/tools" ||
    pathname.startsWith("/tools/") ||
    pathname === "/favicon.ico"
  );
}

export default function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  // Main BaiheAI site remains unchanged.
  if (host !== STORE_HOST) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Make tools.baihediy.com open the software storefront directly.
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/tools";
    return NextResponse.rewrite(url);
  }

  // On the software subdomain, expose only the Factory Tools storefront.
  if (isStorePath(pathname)) {
    return NextResponse.next();
  }

  // Prevent the software-review domain from exposing the main site's
  // consulting/marketing/service pages under the same hostname.
  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?)$).*)"],
};
