import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"中国企业去泰国建厂流程怎么梳理？从前期判断到落地执行"',
  description: '"中国企业计划在泰国建厂时，建议按项目可行性、投资路径、公司主体、场地、审批、人员、设备和投产准备分阶段推进。"',
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-factory-setup-process" },
  openGraph: {
    title: '"中国企业去泰国建厂流程怎么梳理？从前期判断到落地执行"',
    description: '"中国企业计划在泰国建厂时，建议按项目可行性、投资路径、公司主体、场地、审批、人员、设备和投产准备分阶段推进。"',
    url: "https://www.baihediy.com/blog/thailand-factory-setup-process",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"中国企业去泰国建厂流程怎么梳理？从前期判断到落地执行"'
        description='"中国企业计划在泰国建厂时，建议按项目可行性、投资路径、公司主体、场地、审批、人员、设备和投产准备分阶段推进。"'
        url="https://www.baihediy.com/blog/thailand-factory-setup-process"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"THAILAND FACTORY SETUP"'
          title='"中国企业去泰国建厂流程怎么梳理？从前期判断到落地执行"'
          intro='"泰国建厂不是“先注册公司，再租厂房”这么简单。行业、投资方式、BOI方向、场地条件、设备计划和人员安排会相互影响，顺序不清楚容易造成重复投入。"'
          sections={[
            {
              title: "第一阶段：明确项目边界",
              bullets: ["产品是什么、工艺是什么、预计产能是多少。", "主要客户在哪里，原材料和物流从哪里来。", "项目计划时间、预算和人员安排。"],
            },
            {
              title: "第二阶段：判断投资与政策路径",
              bullets: ["梳理公司主体、股权结构和经营活动。", "判断是否需要进一步评估 BOI 或其他许可方向。", "涉及法律、税务和许可事项时，应以官方要求和专业意见为准。"],
            },
            {
              title: "第三阶段：场地与基础设施",
              bullets: ["根据工艺确定面积、用电、用水、排水、消防、装卸和仓储需求。", "比较工业园、现成厂房与自建方案的时间和责任边界。"],
            },
            {
              title: "第四阶段：设备、人员与投产准备",
              bullets: ["设备进场、安装调试和供应商支持应与厂房条件同步。", "外籍人员赴泰工作安排应提前核对签证与工作许可路径。", "建立开工前的采购、质量、仓储、财务和行政基本流程。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
