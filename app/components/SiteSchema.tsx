export default function SiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BaiheAI",
    url: "https://www.baihediy.com",
    description:
      "面向中国企业提供泰国投资咨询、BOI方向与申请支持、公司与项目落地、工厂验厂辅导、客户委托泰国现场验厂、本地资源对接及AI数字化服务。",
    areaServed: [
      { "@type": "Country", name: "Thailand" },
      { "@type": "Place", name: "Southeast Asia" },
    ],
    knowsAbout: [
      "泰国投资咨询",
      "泰国BOI",
      "泰国公司注册",
      "泰国建厂",
      "泰国验厂",
      "工厂验厂辅导",
      "客户委托现场验厂",
      "泰国供应商验厂",
      "工厂审核前准备与现场支持",
      "泰国工作许可",
      "中国企业出海泰国",
      "企业数字化",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
