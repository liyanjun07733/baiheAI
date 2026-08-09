import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "中国员工去泰国工作，公司端要提前准备什么？",
  description: "外籍员工办理工作相关手续前，雇主公司、岗位、材料和实际工作安排都需要同步准备。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-work-permit-employer-requirements" },
  openGraph: {
    title: "中国员工去泰国工作，公司端要提前准备什么？",
    description: "外籍员工办理工作相关手续前，雇主公司、岗位、材料和实际工作安排都需要同步准备。",
    url: "https://www.baihediy.com/blog/thailand-work-permit-employer-requirements",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="中国员工去泰国工作，公司端要提前准备什么？"
        description="外籍员工办理工作相关手续前，雇主公司、岗位、材料和实际工作安排都需要同步准备。"
        url="https://www.baihediy.com/blog/thailand-work-permit-employer-requirements"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="WORK PERMIT"
          title="中国员工去泰国工作，公司端要提前准备什么？"
          intro="很多企业只准备员工个人材料，却忽略了工作许可相关安排同时依赖雇主公司和实际职位。公司端越晚准备，越容易影响人员到岗时间。"
          sections={[
            { title: "先明确人员安排", bullets: ["谁需要长期在泰国工作，谁只是短期出差。", "每个人的职位、职责、工作地点和预计到岗时间。", "是否涉及多家公司、多地点或项目现场。"] },
            { title: "公司端应提前整理", bullets: ["公司基本资料、业务和雇佣情况。", "员工岗位与组织架构说明。", "与实际办公、工厂或项目地点相关的资料。"] },
            { title: "时间计划要和项目同步", bullets: ["不要等设备安装或投产前几天才开始准备人员手续。", "管理人员、技术人员和供应商工程师的安排可能不同。", "签证与工作许可要求可能调整，应以最新官方要求为准。"] },
            { title: "常见误区", bullets: ["把旅游或短期入境与正式工作安排混为一谈。", "材料中的岗位、公司和实际工作内容不一致。", "只看员工个人材料，不检查雇主公司的准备情况。"] }
          ]}
          relatedLinks={[
            {
              title: "泰国 Non-B 工作签证与 Work Permit 办理指南",
              desc: "继续查看员工个人材料、签证与工作许可办理路径，以及常见准备事项。",
              href: "/blog/thailand-non-b-work-permit-guide",
            },
            {
              title: "泰国注册公司前，预算里不要只算注册费",
              desc: "了解公司设立后的持续运营、人员、财税与雇主端准备，避免把人员安排和公司条件割裂开。",
              href: "/blog/thailand-company-registration-cost-items",
            },
            {
              title: "泰国工厂团队管理：中方团队与本地员工如何高效协作",
              desc: "人员到岗只是开始，继续查看中方团队、本地员工、SOP、资料管理和跨语言协作安排。",
              href: "/blog/thailand-local-team-management",
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
