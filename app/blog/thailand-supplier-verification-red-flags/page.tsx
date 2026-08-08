import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "找泰国供应商时，现场最值得警惕的 8 类信号",
  description: "从厂房、设备、订单、质量、仓储和沟通一致性识别供应商现场风险。",
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-supplier-verification-red-flags" },
  openGraph: {
    title: "找泰国供应商时，现场最值得警惕的 8 类信号",
    description: "从厂房、设备、订单、质量、仓储和沟通一致性识别供应商现场风险。",
    url: "https://www.baihediy.com/blog/thailand-supplier-verification-red-flags",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="找泰国供应商时，现场最值得警惕的 8 类信号"
        description="从厂房、设备、订单、质量、仓储和沟通一致性识别供应商现场风险。"
        url="https://www.baihediy.com/blog/thailand-supplier-verification-red-flags"
      />
      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="SUPPLIER"
          title="找泰国供应商时，现场最值得警惕的 8 类信号"
          intro="供应商提供的宣传册、报价单和照片只能说明一部分情况。真正去现场考察时，更重要的是判断“资料、说法和现场是否一致”。"
          sections={[
            { title: "信息不一致", bullets: ["公司介绍中的规模与现场明显不符。", "关键生产环节实际由外部完成但前期未说明。", "接待人员对产品、设备或客户情况回答反复变化。"] },
            { title: "生产现场信号", bullets: ["关键设备长期停机或缺乏正常生产迹象。", "现场批次、工序、物料标识混乱。", "产能承诺与设备、人员、班次明显不匹配。"] },
            { title: "质量与异常管理", bullets: ["没有清晰的检验记录或异常隔离方式。", "历史问题无法说明原因、措施与验证结果。"] },
            { title: "应该怎么处理", bullets: ["不要仅凭一个异常立即下结论。", "记录事实、照片、时间和对方解释。", "将无法核实的内容列入后续补充材料清单。"] }
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
