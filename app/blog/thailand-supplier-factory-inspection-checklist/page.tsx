import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"泰国供应商验厂看什么？采购方现场考察检查清单"',
  description: '"泰国供应商现场考察可从企业真实性、生产现场、设备产线、质量管理、仓储物流、人员沟通和后续配合等方面建立检查清单。"',
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-supplier-factory-inspection-checklist" },
  openGraph: {
    title: '"泰国供应商验厂看什么？采购方现场考察检查清单"',
    description: '"泰国供应商现场考察可从企业真实性、生产现场、设备产线、质量管理、仓储物流、人员沟通和后续配合等方面建立检查清单。"',
    url: "https://www.baihediy.com/blog/thailand-supplier-factory-inspection-checklist",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"泰国供应商验厂看什么？采购方现场考察检查清单"'
        description='"泰国供应商现场考察可从企业真实性、生产现场、设备产线、质量管理、仓储物流、人员沟通和后续配合等方面建立检查清单。"'
        url="https://www.baihediy.com/blog/thailand-supplier-factory-inspection-checklist"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"SUPPLIER FACTORY CHECKLIST"'
          title='"泰国供应商验厂看什么？采购方现场考察检查清单"'
          intro='"供应商资料做得很完整，并不等于现场情况与资料完全一致。采购方第一次考察泰国供应商时，建立一张结构化检查清单，有助于把现场信息带回公司继续评估。"'
          sections={[
            {
              title: "一、企业与现场基础信息",
              bullets: ["核对工厂名称、地址、联系人和现场运营状态。", "了解主要产品、客户类型、生产区域和基本组织情况。"],
            },
            {
              title: "二、生产与设备",
              bullets: ["查看与目标产品相关的生产区域、主要设备和工序。", "询问关键工序由工厂自行完成还是外包。", "记录产能信息时，应注明信息来源并留待后续验证。"],
            },
            {
              title: "三、质量与仓储",
              bullets: ["观察来料、生产、成品和不合格品的基本管理方式。", "查看仓库区域、标识、批次管理和出货流程是否与合作要求匹配。"],
            },
            {
              title: "四、沟通与后续配合",
              bullets: ["确认谁负责报价、订单、技术、质量和异常沟通。", "记录样品、试单、交期、质量问题处理等下一步事项。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
