import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"泰国工业园怎么选？中国企业选址前应比较的关键因素"',
  description: '"选择泰国工业园或厂房时，不应只看租金。产业配套、物流、用工、基础设施、项目限制、客户距离和后续扩产都应一起比较。"',
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-industrial-estate-selection-guide" },
  openGraph: {
    title: '"泰国工业园怎么选？中国企业选址前应比较的关键因素"',
    description: '"选择泰国工业园或厂房时，不应只看租金。产业配套、物流、用工、基础设施、项目限制、客户距离和后续扩产都应一起比较。"',
    url: "https://www.baihediy.com/blog/thailand-industrial-estate-selection-guide",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"泰国工业园怎么选？中国企业选址前应比较的关键因素"'
        description='"选择泰国工业园或厂房时，不应只看租金。产业配套、物流、用工、基础设施、项目限制、客户距离和后续扩产都应一起比较。"'
        url="https://www.baihediy.com/blog/thailand-industrial-estate-selection-guide"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"INDUSTRIAL ESTATE"'
          title='"泰国工业园怎么选？中国企业选址前应比较的关键因素"'
          intro='"不同企业对“好位置”的定义不同。出口型、汽车供应链、电子、消费品或重物流项目，对港口、高速、客户、劳动力和基础设施的权重并不一样。"'
          sections={[
            {
              title: "一、先用业务需求筛区域",
              bullets: ["主要客户和供应商在哪里。", "货物主要通过港口、机场还是陆运。", "员工招聘和通勤是否可持续。"],
            },
            {
              title: "二、比较基础设施而不是只比面积",
              bullets: ["电力容量、用水、排水、网络、消防和装卸条件是否满足项目。", "如果需要扩建或特殊改造，先确认允许范围和责任方。"],
            },
            {
              title: "三、确认行业与项目适配性",
              bullets: ["把产品、工艺、设备和排放等项目情况说明清楚。", "涉及政府许可或专业判断的事项，应在签约前进一步核对。"],
            },
            {
              title: "四、把总成本放到同一张表里",
              bullets: ["除了租金或购买价格，还要考虑装修、改造、物流、通勤、维护和扩产成本。", "比较不同方案时使用同一套条件，避免只看单一报价。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
