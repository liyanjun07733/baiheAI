import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "AI 如何帮助中国企业在泰国获取客户｜BaiheAI",
  description: "从海外官网、搜索内容、客户线索、自动化跟进和本地化信息等方面，介绍中国企业在泰国使用 AI 建立获客体系的思路。",
  alternates: { canonical: "https://www.baihediy.com/blog/ai-lead-generation-thailand" },
  openGraph: {
    title: "AI 如何帮助中国企业在泰国获取客户｜BaiheAI",
    description: "通过海外官网、SEO 内容、询盘整理和自动化流程，说明 AI 如何帮助中国企业在泰国和东南亚建立获客体系。",
    url: "https://www.baihediy.com/blog/ai-lead-generation-thailand",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="AI 如何帮助中国企业在泰国获取客户"
        description="通过海外官网、SEO 内容、询盘整理和自动化流程，说明 AI 如何帮助中国企业在泰国和东南亚建立获客体系。"
        url="https://www.baihediy.com/blog/ai-lead-generation-thailand"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow="AI LEAD GENERATION"
          title="AI 如何帮助中国企业在泰国获取客户？"
          intro="AI 获客不是简单生成几篇文章，而是把官网、搜索内容、客户问题、咨询入口和后续跟进连成一条完整路径。"
          sections={[
            { title: "一、先建立可以被客户找到的海外入口", paragraphs: ["企业需要一个清楚说明“做什么、服务谁、在哪个市场、如何联系”的官网或落地页。AI 可以协助整理多语言内容、常见问题、服务页面和销售资料，但最终信息必须由企业确认。"] },
            { title: "二、围绕客户搜索问题持续生产内容", bullets: ["把客户常问的问题拆成独立页面。", "围绕行业、产品、应用场景和地区建立关键词主题。", "用内部链接把文章连接到服务、案例、资料下载和咨询入口。"] },
            { title: "三、把询盘自动整理，而不是只收一封邮件", paragraphs: ["可以使用表单、知识库和自动化流程对客户需求进行初步分类，例如行业、项目阶段、预算、采购或投资需求，再交给人工进一步沟通。"] },
            { title: "四、AI 的价值是提高销售效率", paragraphs: ["对于中国企业开拓泰国和东南亚市场，AI 更适合作为销售和运营工具：帮助企业更快准备内容、更快响应客户、更系统地沉淀知识，而不是替代真实的本地沟通和业务判断。"] },
          ]}
          note="AI 生成内容应经过人工审核，尤其是政策、法律、税务、投资资格和项目数据等信息，应以相关官方来源及专业意见为准。"
        />
      </main>
      <Footer />
    </>
  );
}
