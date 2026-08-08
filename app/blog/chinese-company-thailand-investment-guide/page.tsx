import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"中国企业投资泰国完整前期清单：第一次考察前要准备什么"',
  description: '"第一次去泰国考察投资或建厂前，企业可先准备项目简介、产品工艺、客户供应链、场地条件、人员设备和时间预算信息，提高考察效率。"',
  alternates: { canonical: "https://www.baihediy.com/blog/chinese-company-thailand-investment-guide" },
  openGraph: {
    title: '"中国企业投资泰国完整前期清单：第一次考察前要准备什么"',
    description: '"第一次去泰国考察投资或建厂前，企业可先准备项目简介、产品工艺、客户供应链、场地条件、人员设备和时间预算信息，提高考察效率。"',
    url: "https://www.baihediy.com/blog/chinese-company-thailand-investment-guide",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"中国企业投资泰国完整前期清单：第一次考察前要准备什么"'
        description='"第一次去泰国考察投资或建厂前，企业可先准备项目简介、产品工艺、客户供应链、场地条件、人员设备和时间预算信息，提高考察效率。"'
        url="https://www.baihediy.com/blog/chinese-company-thailand-investment-guide"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"CHINA TO THAILAND"'
          title='"中国企业投资泰国完整前期清单：第一次考察前要准备什么"'
          intro='"第一次去泰国考察，如果只安排“看园区、看厂房、见中介”，回来后往往还是无法做决定。考察前先把内部信息准备好，现场才能围绕真正的问题核实。"'
          sections={[
            {
              title: "一、准备一页项目简介",
              bullets: ["企业做什么、计划在泰国做什么、目标客户是谁。", "预计产品、工艺、产能、投资阶段和落地时间。"],
            },
            {
              title: "二、列出场地硬条件",
              bullets: ["面积、层高、用电、用水、装卸、仓储和特殊工艺要求。", "如果已有设备清单，应带上主要设备尺寸和基础条件。"],
            },
            {
              title: "三、列出政策与公司问题",
              bullets: ["公司主体和股权安排有哪些初步想法。", "哪些问题需要进一步咨询 BOI、签证、工作许可、税务或其他专业事项。"],
            },
            {
              title: "四、把考察对象分组",
              bullets: ["工业园和厂房用于解决场地问题。", "顾问和专业机构用于解决政策、公司、许可与执行问题。", "供应商、客户和合作伙伴用于验证业务与供应链条件。"],
            },
            {
              title: "五、考察结束必须形成决策清单",
              bullets: ["哪些信息已确认、哪些待确认、哪些是风险项。", "下一步责任人、截止时间和决策条件分别是什么。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
