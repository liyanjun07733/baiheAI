type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string | string[];
};

export default function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleJsonLdProps) {
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "zh-CN",
    author: {
      "@type": "Organization",
      "@id": "https://www.baihediy.com/#organization",
      name: "BaiheAI",
      url: "https://www.baihediy.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.baihediy.com/#organization",
      name: "BaiheAI",
      url: "https://www.baihediy.com",
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(image
      ? {
          image: Array.isArray(image) ? image : [image],
        }
      : {}),
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
