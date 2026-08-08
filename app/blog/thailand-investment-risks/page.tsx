import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"中国企业投资泰国常见风险：建厂与项目落地前先检查这些问题"',
  description: '"中国企业赴泰投资时，常见风险来自信息不完整、场地先签后核、审批路径不清、合作边界模糊和时间计划过于乐观。"',
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-investment-risks" },
  openGraph: {
    title: '"中国企业投资泰国常见风险：建厂与项目落地前先检查这些问题"',
    description: '"中国企业赴泰投资时，常见风险来自信息不完整、场地先签后核、审批路径不清、合作边界模糊和时间计划过于乐观。"',
    url: "https://www.baihediy.com/blog/thailand-investment-risks",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"中国企业投资泰国常见风险：建厂与项目落地前先检查这些问题"'
        description='"中国企业赴泰投资时，常见风险来自信息不完整、场地先签后核、审批路径不清、合作边界模糊和时间计划过于乐观。"'
        url="https://www.baihediy.com/blog/thailand-investment-risks"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"THAILAND INVESTMENT RISKS"'
          title='"中国企业投资泰国常见风险：建厂与项目落地前先检查这些问题"'
          intro='"项目落地风险往往不是来自一个明显的大错误，而是多个小问题叠加：公司、场地、审批、合同、人员和设备之间没有统一时间表，最终造成重复投入或延期。"'
          sections={[
            {
              title: "风险一：还没把项目说清楚就开始找资源",
              bullets: ["产品、工艺、产能、客户、设备和人员没有统一版本，会导致场地和政策判断反复变化。"],
            },
            {
              title: "风险二：先签场地，再确认是否适合",
              bullets: ["租金合适不代表基础设施、改造条件和项目限制都适合。", "重要条件应在签约前形成书面核对清单。"],
            },
            {
              title: "风险三：把“咨询意见”当成最终审批结果",
              bullets: ["BOI、签证、工作许可和其他政府事项最终以主管机构审核为准。", "前期咨询应帮助企业准备与判断，而不是承诺审批结果。"],
            },
            {
              title: "风险四：本地合作没有明确责任边界",
              bullets: ["谁负责资料、现场、付款、政府沟通、翻译和后续维护，应在合作前说清楚。"],
            },
            {
              title: "风险五：项目时间表没有预留缓冲",
              bullets: ["公司、场地、装修、设备、人员和审批常常并行推进。", "建议给关键节点设置责任人、前置条件和备用方案。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
