import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "去泰国投资一定要申请 BOI 吗？先判断这几个问题",
  description: "BOI 不是所有项目都必须申请，先根据业务活动、投资内容和项目目标判断是否值得进一步评估。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-boi-vs-non-boi" },
  openGraph: {
    title: "去泰国投资一定要申请 BOI 吗？先判断这几个问题",
    description: "BOI 不是所有项目都必须申请，先根据业务活动、投资内容和项目目标判断是否值得进一步评估。",
    url: "https://www.baihediy.com/blog/thailand-boi-vs-non-boi",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="去泰国投资一定要申请 BOI 吗？先判断这几个问题"
        description="BOI 不是所有项目都必须申请，先根据业务活动、投资内容和项目目标判断是否值得进一步评估。"
        url="https://www.baihediy.com/blog/thailand-boi-vs-non-boi"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="BOI"
          title="去泰国投资一定要申请 BOI 吗？先判断这几个问题"
          intro="很多企业把“去泰国投资”和“申请 BOI”直接画等号。实际上是否适合 BOI，需要结合项目活动、产品工艺、投资额、设备、人员和长期计划判断。"
          sections={[
            { title: "先看项目本身", bullets: ["企业在泰国实际要做什么业务活动。", "产品、工艺、设备和投资内容是否清晰。", "项目未来的人员结构、出口和客户计划。"] },
            { title: "再看企业真正想解决什么", bullets: ["是否关注税务或特定投资促进权益。", "是否涉及外籍人员、设备进口或其他项目安排。", "是否愿意按要求准备材料并持续履行相应义务。"] },
            { title: "什么时候不应该急着申请", bullets: ["项目范围还没确定。", "场地、设备和投资计划仍然频繁变化。", "仅因为“听说有优惠”而没有明确商业目标。"] },
            { title: "建议的前期动作", bullets: ["先整理项目说明、产品工艺、设备清单和投资计划。", "再根据最新政策确认是否符合具体活动和条件。", "正式申请、法律、税务和合规事项应以主管部门及专业意见为准。"] }
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
