import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "在泰国找厂房前，先把这 10 个参数准备好",
  description: "面积、电力、层高、装卸、消防、用水和物流等关键参数决定厂房是否真正适合项目。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-factory-site-requirements" },
  openGraph: {
    title: "在泰国找厂房前，先把这 10 个参数准备好",
    description: "面积、电力、层高、装卸、消防、用水和物流等关键参数决定厂房是否真正适合项目。",
    url: "https://www.baihediy.com/blog/thailand-factory-site-requirements",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="在泰国找厂房前，先把这 10 个参数准备好"
        description="面积、电力、层高、装卸、消防、用水和物流等关键参数决定厂房是否真正适合项目。"
        url="https://www.baihediy.com/blog/thailand-factory-site-requirements"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="FACTORY SITE"
          title="在泰国找厂房前，先把这 10 个参数准备好"
          intro="先看厂房照片再决定项目，是很多企业选址时最容易走弯路的方式。正确顺序是先把生产需求变成参数，再去筛选区域、工业园和具体厂房。"
          sections={[
            { title: "最先明确的生产参数", bullets: ["预计建筑面积和仓储面积。", "设备尺寸、重量、层高和地面承重要求。", "最大用电负荷、用水量、排水和压缩空气需求。"] },
            { title: "物流与装卸条件", bullets: ["原材料从哪里来，成品发往哪里。", "每天或每周预计有多少货车、集装箱进出。", "是否需要月台、叉车通道、集装箱回转空间。"] },
            { title: "人员与生活配套", bullets: ["预计员工人数、班次和招聘区域。", "通勤、住宿、餐饮和周边配套是否可接受。", "关键管理人员和外籍员工的工作地点安排。"] },
            { title: "现场考察时重点核实", bullets: ["消防、用途、环保和园区限制。", "电力增容、装修和设备安装是否允许。", "租赁合同中维修、改造、恢复原状等责任如何划分。"] }
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
