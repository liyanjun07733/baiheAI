import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国验厂报告应该包含什么？现场验厂报告内容清单",
  description: "无法亲自赴泰时，现场照片、视频、生产能力、质量、仓储和异常记录应形成可追溯报告。",
  alternates: {
    canonical: "https://www.baihediy.com/blog/thailand-factory-audit-report-content",
  },
  openGraph: {
    title: "泰国验厂报告应该包含什么？现场验厂报告内容清单",
    description: "无法亲自赴泰时，现场照片、视频、生产能力、质量、仓储和异常记录应形成可追溯报告。",
    url: "https://www.baihediy.com/blog/thailand-factory-audit-report-content",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />

      <ArticleJsonLd
        title="泰国验厂报告应该包含什么？现场验厂报告内容清单"
        description="无法亲自赴泰时，现场照片、视频、生产能力、质量、仓储和异常记录应形成可追溯报告。"
        url="https://www.baihediy.com/blog/thailand-factory-audit-report-content"
      />

      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="FACTORY AUDIT"
          title="泰国验厂报告应该包含什么？现场验厂报告内容清单"
          intro="客户委托当地团队去工厂现场，并不是“帮忙拍几张照片”就结束。真正有价值的现场验厂，应让委托方在不在现场的情况下，也能理解工厂真实情况和需要继续确认的问题。"
          sections={[
            {
              title: "基础信息核实",
              bullets: [
                "工厂名称、地址、联系人和现场区域。",
                "生产、仓储、办公等主要区域是否与前期资料一致。",
              ],
            },
            {
              title: "生产与设备",
              bullets: [
                "主要工序、生产线、关键设备和现场运行情况。",
                "产能相关信息应注明来源，避免把口头说法当成已验证事实。",
              ],
            },
            {
              title: "质量与仓储",
              bullets: [
                "来料、过程、成品检验的实际执行情况。",
                "原材料、在制品、成品、异常品的标识与存放。",
              ],
            },
            {
              title: "报告如何让客户真正能用",
              bullets: [
                "照片和视频应带说明，而不是只堆图片。",
                "问题按严重程度和后续动作分类。",
                "无法现场确认的事项明确标注“待进一步核实”。",
              ],
            },
          ]}
          relatedLinks={[
            {
              title: "找泰国供应商时，现场最值得警惕的 8 类信号",
              desc: "从现场管理、设备状态、质量记录、仓储和人员沟通中识别需要继续核实的风险点。",
              href: "/blog/thailand-supplier-verification-red-flags",
            },
            {
              title: "客户委托泰国现场验厂，前期应该怎么准备？",
              desc: "先明确验厂目标、核实范围、拍摄重点和不能确认的事项，让现场工作更有结果。",
              href: "/blog/thailand-customer-commissioned-factory-audit",
            },
            {
              title: "泰国验厂与现场核查服务",
              desc: "如果企业无法亲自赴泰，可查看 BaiheAI 的现场验厂与工厂核查服务入口。",
              href: "/factory-audit",
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>

      <Footer />
    </>
  );
}
