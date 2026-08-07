type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
};

export default function ArticleJsonLd({
  title,
  description,
  url,
  datePublished = "2026-08-07",
  dateModified = "2026-08-07",
}: ArticleJsonLdProps) {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    datePublished,
    dateModified,
    inLanguage: "zh-CN",
    author: {
      "@type": "Organization",
      name: "BaiheAI",
      url: "https://www.baihediy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BaiheAI",
      url: "https://www.baihediy.com",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://www.baihediy.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "内容中心",
        item: "https://www.baihediy.com/content-center",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
