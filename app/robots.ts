import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/search", "/seo-monitor"],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/search", "/seo-monitor"],
      },
    ],
    sitemap: "https://www.baihediy.com/sitemap.xml",
    host: "https://www.baihediy.com",
  };
}
