import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "中国企业落地泰国，项目时间表应该怎么排？",
  description: "把公司、政策、场地、设备、人员和投产准备放到同一张时间表，减少互相等待。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-investment-timeline" },
  openGraph: {
    title: "中国企业落地泰国，项目时间表应该怎么排？",
    description: "把公司、政策、场地、设备、人员和投产准备放到同一张时间表，减少互相等待。",
    url: "https://www.baihediy.com/blog/thailand-investment-timeline",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="中国企业落地泰国，项目时间表应该怎么排？"
        description="把公司、政策、场地、设备、人员和投产准备放到同一张时间表，减少互相等待。"
        url="https://www.baihediy.com/blog/thailand-investment-timeline"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="TIMELINE"
          title="中国企业落地泰国，项目时间表应该怎么排？"
          intro="泰国项目延期往往不是某一个环节特别慢，而是多个事项没有按依赖关系排好。把所有工作放在一张时间表里，才能看出哪些可以并行，哪些必须前置完成。"
          sections={[
            { title: "第一阶段：项目定义", bullets: ["明确产品、工艺、产能、预算和目标投产时间。", "确定核心团队和决策责任人。"] },
            { title: "第二阶段：公司与政策路径", bullets: ["梳理公司主体、经营活动和可能涉及的投资促进或许可问题。", "在场地和设备最终确定前，把关键限制条件问清楚。"] },
            { title: "第三阶段：场地与设备并行", bullets: ["场地筛选与设备条件核对同步进行。", "提前检查电力、消防、环保、装卸和施工条件。"] },
            { title: "第四阶段：人员与投产", bullets: ["招聘、签证工作许可、培训与SOP提前准备。", "设备调试、试生产、质量和仓储流程同步验证。"] }
          ]}
          relatedLinks={[
            {
              title: "泰国 BOI vs 非 BOI：企业到底该不该申请 BOI？",
              desc: "先根据业务活动、投资内容、人员与设备安排判断是否真的需要 BOI，而不是只看“有没有优惠”。",
              href: "/blog/thailand-boi-vs-non-boi",
            },
            {
              title: "泰国投资落地指南",
              desc: "继续查看公司注册、BOI、工业园区、工作许可和建厂相关专题，补齐项目时间表里的关键环节。",
              href: "/guides",
            },
            {
              title: "泰国投资咨询",
              desc: "如果项目节点之间存在依赖或不确定项，可先梳理公司、政策、场地、设备和人员的前后顺序。",
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
