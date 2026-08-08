import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"泰国 BOI 申请前需要判断什么？企业前期准备要点"',
  description: '"申请泰国 BOI 前，企业应先梳理项目活动、产品工艺、投资内容、设备、人员、市场和时间计划，再根据官方最新政策判断项目方向。"',
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-boi-application-conditions" },
  openGraph: {
    title: '"泰国 BOI 申请前需要判断什么？企业前期准备要点"',
    description: '"申请泰国 BOI 前，企业应先梳理项目活动、产品工艺、投资内容、设备、人员、市场和时间计划，再根据官方最新政策判断项目方向。"',
    url: "https://www.baihediy.com/blog/thailand-boi-application-conditions",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"泰国 BOI 申请前需要判断什么？企业前期准备要点"'
        description='"申请泰国 BOI 前，企业应先梳理项目活动、产品工艺、投资内容、设备、人员、市场和时间计划，再根据官方最新政策判断项目方向。"'
        url="https://www.baihediy.com/blog/thailand-boi-application-conditions"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"THAILAND BOI"'
          title='"泰国 BOI 申请前需要判断什么？企业前期准备要点"'
          intro='"很多企业首先问“我的项目能不能申请 BOI”，但在正式判断前，项目本身的信息必须足够清楚。产品、工艺、设备、投资额和人员计划不明确时，很难形成可靠判断。"'
          sections={[
            {
              title: "一、先说明企业要在泰国做什么",
              bullets: ["产品或服务是什么。", "核心生产或业务流程是什么。", "哪些环节在泰国完成，哪些仍在境外完成。"],
            },
            {
              title: "二、整理投资和设备计划",
              bullets: ["厂房、机器设备、系统和其他主要投入有哪些。", "新设备、二手设备或进口设备的安排需要按项目情况进一步确认。"],
            },
            {
              title: "三、人员和时间计划",
              bullets: ["泰籍与外籍人员的岗位和人数计划。", "预计公司设立、场地确定、设备进场和投产时间。"],
            },
            {
              title: "四、正式申请前核对最新官方要求",
              bullets: ["BOI政策、行业条件和申请要求可能调整。", "应以泰国投资促进委员会的最新公开信息和项目沟通结果为准。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
