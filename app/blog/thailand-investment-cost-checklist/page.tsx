import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国投资常见成本清单：企业前期预算怎么做｜BaiheAI",
  description: "从公司设立、厂房、设备、人员、合规、物流和市场开发等维度，建立泰国投资前期预算清单。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-investment-cost-checklist" },
  openGraph: {
    title: "泰国投资常见成本清单：企业前期预算怎么做｜BaiheAI",
    description: "梳理中国企业进入泰国市场时常见的公司设立、厂房、设备、人员、运营和获客预算项目。",
    url: "https://www.baihediy.com/blog/thailand-investment-cost-checklist",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="泰国投资常见成本清单：企业前期预算怎么做"
        description="梳理中国企业进入泰国市场时常见的公司设立、厂房、设备、人员、运营和获客预算项目。"
        url="https://www.baihediy.com/blog/thailand-investment-cost-checklist"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow="INVESTMENT BUDGET"
          title="泰国投资常见成本清单：企业前期预算怎么做"
          intro="企业第一次做泰国投资预算时，最容易漏掉的不是某一笔大费用，而是项目启动后不断出现的小项和时间成本。建议从“设立、场地、设备、人员、合规、运营、获客”七个部分拆开。"
          sections={[
            { title: "一、公司与项目设立", bullets: ["公司注册及必要的专业服务费用。", "项目可行性、结构与前期咨询成本。", "翻译、文件准备、公证认证或其他资料处理成本。"] },
            { title: "二、厂房与基础设施", bullets: ["厂房租赁或购买相关投入。", "押金、装修、设备基础、仓储与办公空间。", "电力、用水、网络、消防、环保和其他配套改造。"] },
            { title: "三、设备与供应链", bullets: ["设备采购、运输、安装和调试。", "模具、备件、耗材和首批原材料。", "跨境物流、仓储、报关及供应链缓冲资金。"] },
            { title: "四、人员与日常运营", bullets: ["招聘、本地员工薪酬与培训。", "外派人员的签证、工作许可、住宿和交通。", "会计、行政、IT、保险及日常运营支出。"] },
            { title: "五、别漏掉市场与客户开发预算", paragraphs: ["很多制造企业把预算全部放在建厂，却忽略投产后的客户开发。官网、本地化内容、搜索曝光、销售线索管理和 AI 自动化获客，也应该在项目初期进入预算。"] },
          ]}
          note="实际成本会因行业、规模、地点、园区、人员配置和政策条件产生较大差异。本文仅提供预算框架，具体金额应根据真实项目逐项核算。"
        />
      </main>
      <Footer />
    </>
  );
}
