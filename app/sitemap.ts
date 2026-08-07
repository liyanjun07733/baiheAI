import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.baihediy.com";
  const routes = [
    ["", "weekly", 1],
    ["/services", "monthly", 0.9],
    ["/thailand-investment", "monthly", 0.95],
    ["/cases", "monthly", 0.85],
    ["/blog", "weekly", 0.9],
    ["/policies", "weekly", 0.9],
    ["/resources", "weekly", 0.9],
    ["/about", "monthly", 0.8],
    ["/free-plan", "monthly", 0.95],
  ] as const;

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
