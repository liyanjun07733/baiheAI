import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "去泰国建厂，前期到底要准备哪些成本？",
  description: "从场地、设备、人员、许可、物流和投产准备拆解泰国建厂前期成本。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-factory-cost-breakdown" },
  openGraph: {
    title: "去泰国建厂，前期到底要准备哪些成本？",
    description: "从场地、设备、人员、许可、物流和投产准备拆解泰国建厂前期成本。",
    url: "https://www.baihediy.com/blog/thailand-factory-cost-breakdown",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="去泰国建厂，前期到底要准备哪些成本？"
        description="从场地、设备、人员、许可、物流和投产准备拆解泰国建厂前期成本。"
        url="https://www.baihediy.com/blog/thailand-factory-cost-breakdown"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="FACTORY COST"
          title="去泰国建厂，前期到底要准备哪些成本？"
          intro="很多企业问“去泰国建厂大概要多少钱”，但真正影响预算的并不是一个单一数字，而是项目规模、工艺、场地、设备、人员与审批路径的组合。先把成本结构拆开，才能避免只看到租金，却漏掉后续投入。"
          sections={[
            { title: "一、场地相关成本", bullets: ["厂房租赁、押金、装修和基础改造。", "电力、用水、排水、消防、装卸和仓储条件的补充投入。", "不同工业园、区域和现成厂房条件差异较大，应按项目参数比较。"] },
            { title: "二、设备与生产准备", bullets: ["设备采购、运输、进口、安装与调试。", "工装、治具、检测设备、备件和维修准备。", "生产线搬迁时还要考虑停线时间和供应商支持。"] },
            { title: "三、人员与管理成本", bullets: ["本地招聘、翻译、行政、财务和管理人员。", "外籍人员赴泰工作的签证、工作许可和生活安排。", "培训、SOP、质量体系和新工厂管理流程的建立。"] },
            { title: "四、不要忽略的时间成本", bullets: ["注册、选址、审批、装修、设备进场之间存在前后依赖。", "越晚发现厂房条件或许可不匹配，返工成本越高。", "建议先做项目成本清单，再决定是租现成厂房、进入工业园还是自建。"] }
          ]}
          relatedLinks={[
            {
              title: "泰国厂房选址：先确认 10 个关键参数",
              desc: "从面积、电力、层高、装卸、消防、用水和物流等参数判断厂房是否真正适合项目。",
              href: "/blog/thailand-factory-site-requirements",
            },
            {
              title: "泰国厂房水电与基础设施检查",
              desc: "现场核实电力、用水、排水、消防、装卸和后续扩容条件，减少后期追加投入。",
              href: "/blog/thailand-factory-utilities-checklist",
            },
            {
              title: "泰国工业园区与选址指南",
              desc: "结合区域、物流、产业配套和项目需求，继续判断适合进入的工业园与厂房位置。",
              href: "/guides/thailand-industrial-estate",
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
