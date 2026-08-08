import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国厂房考察时，水电气和基础设施怎么检查？",
  description: "设备能放进去不等于能生产，电力、排水、消防、网络和装卸能力要在签约前核对。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-factory-utilities-checklist" },
  openGraph: {
    title: "泰国厂房考察时，水电气和基础设施怎么检查？",
    description: "设备能放进去不等于能生产，电力、排水、消防、网络和装卸能力要在签约前核对。",
    url: "https://www.baihediy.com/blog/thailand-factory-utilities-checklist",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="泰国厂房考察时，水电气和基础设施怎么检查？"
        description="设备能放进去不等于能生产，电力、排水、消防、网络和装卸能力要在签约前核对。"
        url="https://www.baihediy.com/blog/thailand-factory-utilities-checklist"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="UTILITIES"
          title="泰国厂房考察时，水电气和基础设施怎么检查？"
          intro="厂房外观看起来合适，并不代表能满足生产。尤其制造业项目，很多后期追加成本都来自签约前没有把基础设施需求核对清楚。"
          sections={[
            { title: "电力", bullets: ["现有容量是否满足设备总负荷和启动负荷。", "增容是否可行，谁承担费用和时间。"] },
            { title: "用水、排水与其他公用工程", bullets: ["生产和生活用水需求是否满足。", "排水、废水、压缩空气或其他工艺需求是否需要新增系统。"] },
            { title: "消防与安全", bullets: ["现有消防设施是否适合未来用途和布局。", "改造时是否涉及园区、房东或主管部门要求。"] },
            { title: "网络、物流与日常运营", bullets: ["网络、门禁、监控和办公室条件。", "货车、集装箱、叉车和装卸空间。", "正式签约前建议将关键参数形成书面确认清单。"] }
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
