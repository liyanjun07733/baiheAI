import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.baihediy.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/start`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/consultation`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/packages`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/trust`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/thailand-investment`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/policies`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/policies/boi-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/policies/company-registration`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/policies/work-permit`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/content-center`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/guides/thailand-investment-consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/thailand-boi-application`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/thailand-company-registration`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/thailand-factory-setup`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/thailand-industrial-estate`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/guides/thailand-work-permit`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/thailand-factory-rent-or-buy`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/thailand-investment-cost-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/thailand-business-translation-support`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/ai-lead-generation-thailand`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/thailand-factory-due-diligence`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/china-company-thailand-market-entry`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cases`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/free-plan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
