import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国注册公司前，预算里不要只算注册费",
  description: "公司设立只是开始，办公地址、财税、人员、银行和后续运营成本都应提前纳入预算。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-company-registration-cost-items" },
  openGraph: {
    title: "泰国注册公司前，预算里不要只算注册费",
    description: "公司设立只是开始，办公地址、财税、人员、银行和后续运营成本都应提前纳入预算。",
    url: "https://www.baihediy.com/blog/thailand-company-registration-cost-items",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="泰国注册公司前，预算里不要只算注册费"
        description="公司设立只是开始，办公地址、财税、人员、银行和后续运营成本都应提前纳入预算。"
        url="https://www.baihediy.com/blog/thailand-company-registration-cost-items"
        datePublished="2026-08-07"
        dateModified="2026-08-09"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="COMPANY"
          title="泰国注册公司前，预算里不要只算注册费"
          intro="企业在比较泰国公司注册方案时，很容易只问“注册多少钱”。但真正影响落地成本的是公司成立之后能不能正常运营，因此预算应覆盖注册后的持续事项。"
          sections={[
            { title: "公司设立阶段", bullets: ["公司名称、业务范围、股东董事与注册地址准备。", "文件翻译、签署、认证或相关专业支持。", "根据具体业务确认是否涉及额外许可或行业要求。"] },
            { title: "成立后的持续事项", bullets: ["会计、税务申报和财务管理。", "员工、社保、薪酬和行政管理。", "银行账户、合同、发票和日常经营文件。"] },
            { title: "外籍人员相关准备", bullets: ["公司条件是否支持后续签证和工作许可安排。", "职位、雇佣关系和工作地点是否与实际情况一致。"] },
            { title: "预算建议", bullets: ["把一次性设立成本和每月持续运营成本分开。", "不要选择无法说明后续责任边界的低价方案。", "正式费用和要求应根据企业实际情况向相关机构核实。"] }
          ]}
          relatedLinks={[
            {
              title: "泰国公司注册流程与材料清单",
              desc: "继续查看公司名称、股东董事、注册地址、业务范围和设立材料等基础准备。",
              href: "/blog/thailand-company-registration-guide",
            },
            {
              title: "中国企业落地泰国，项目时间表应该怎么排？",
              desc: "把公司注册与政策、场地、设备、人员和投产准备放到同一张时间表，减少前后脱节。",
              href: "/blog/thailand-investment-timeline",
            },
            {
              title: "泰国投资咨询",
              desc: "如果公司设立、后续运营、人员安排和项目路径还没有完全理清，可以先做整体落地梳理。",
              href: "/thailand-investment",
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
