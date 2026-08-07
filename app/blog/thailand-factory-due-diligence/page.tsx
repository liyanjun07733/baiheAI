import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国建厂前期尽调：企业应该检查哪些关键事项｜BaiheAI",
  description:
    "从厂房条件、园区限制、基础设施、合同边界、供应链、人员与审批等方面，梳理中国企业在泰国建厂前期尽调的检查框架。",
  alternates: {
    canonical: "https://www.baihediy.com/blog/thailand-factory-due-diligence",
  },
  openGraph: {
    title: "泰国建厂前期尽调：企业应该检查哪些关键事项｜BaiheAI",
    description: "从厂房条件、园区限制、基础设施、合同边界、供应链、人员与审批等方面，梳理中国企业在泰国建厂前期尽调的检查框架。",
    url: "https://www.baihediy.com/blog/thailand-factory-due-diligence",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="泰国建厂前期尽调：企业应该检查哪些关键事项？"
        description="从厂房条件、园区限制、基础设施、合同边界、供应链、人员与审批等方面，梳理泰国建厂前期尽调框架。"
        url="https://www.baihediy.com/blog/thailand-factory-due-diligence"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow="FACTORY DUE DILIGENCE"
          title="泰国建厂前期尽调：企业应该检查哪些关键事项？"
          intro="企业在泰国选定园区、厂房或项目地点后，不宜马上只看租金、购买价格或装修进度。真正影响后续投产的是场地条件、审批边界、供应链、人员和合同责任是否与项目需求匹配。"
          sections={[
            {
              title: "一、先确认厂房是否真的适合你的产线",
              bullets: [
                "核对建筑面积、层高、地面承重、装卸条件和仓储空间。",
                "确认现有电力、用水、网络、消防、排水等基础设施是否满足生产需求。",
                "如果需要设备基础、洁净区、特殊排风或其他改造，应提前确认可实施范围。",
              ],
            },
            {
              title: "二、确认园区与项目限制",
              paragraphs: [
                "不同工业园、地区和项目类型可能存在不同的经营、环保、消防、建设或审批要求。企业在签约前应把自己的产品、工艺、设备和预期产能说明清楚，再确认项目是否适配。",
              ],
            },
            {
              title: "三、合同里要看清楚责任边界",
              bullets: [
                "哪些基础设施由房东或园区提供，哪些需要企业自行建设。",
                "设备进场、装修、改造、恢复原状和提前退出的责任。",
                "租期、押金、费用调整、维护和违约处理方式。",
              ],
            },
            {
              title: "四、不要忽略人员和供应链",
              paragraphs: [
                "厂房本身合适，并不代表项目整体适合。还需要评估员工通勤、招聘来源、供应商距离、物流半径、港口与高速条件，以及设备维护和备件获取是否方便。",
              ],
            },
            {
              title: "五、把尽调结果转成一张项目清单",
              paragraphs: [
                "建议把场地、基础设施、审批、合同、人员、物流和时间节点统一记录，形成“已确认 / 待确认 / 风险项”三栏清单。这样后续与园区、房东、供应商和顾问沟通时不容易遗漏关键问题。",
              ],
            },
          ]}
          note="本文用于企业前期项目梳理，不替代法律、税务、工程、环保、消防或政府审批意见。正式签约和投资前，应根据具体项目取得相应专业意见并核对官方最新要求。"
        />
      </main>
      <Footer />
    </>
  );
}
