import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: '"泰国工厂客户验厂前怎么准备？现场、资料与沟通清单"',
  description: '"泰国工厂即将接受客户验厂时，可从现场、资料、流程、人员与沟通五个方面提前准备，减少临时返工与信息遗漏。"',
  alternates: { canonical: "https://www.baihediy.com/blog/thailand-factory-audit-preparation" },
  openGraph: {
    title: '"泰国工厂客户验厂前怎么准备？现场、资料与沟通清单"',
    description: '"泰国工厂即将接受客户验厂时，可从现场、资料、流程、人员与沟通五个方面提前准备，减少临时返工与信息遗漏。"',
    url: "https://www.baihediy.com/blog/thailand-factory-audit-preparation",
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title='"泰国工厂客户验厂前怎么准备？现场、资料与沟通清单"'
        description='"泰国工厂即将接受客户验厂时，可从现场、资料、流程、人员与沟通五个方面提前准备，减少临时返工与信息遗漏。"'
        url="https://www.baihediy.com/blog/thailand-factory-audit-preparation"
      />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <SeoArticle
          eyebrow='"FACTORY AUDIT PREPARATION"'
          title='"泰国工厂客户验厂前怎么准备？现场、资料与沟通清单"'
          intro='"客户确定来厂日期后，最容易出现的问题不是完全没有准备，而是准备事项分散在不同部门，没有统一清单。把现场、资料、人员和沟通要求提前汇总，是验厂准备的第一步。"'
          sections={[
            {
              title: "一、先确认客户到底要看什么",
              bullets: ["确认客户此次是一般商务考察、供应商审核、质量体系检查还是专项审核。", "向客户确认重点区域、需要查看的资料、是否需要拍照以及预计停留时间。", "如果客户提供审核清单，应先逐项分配内部责任人。"],
            },
            {
              title: "二、把现场走一遍",
              bullets: ["从客户进入工厂的路线开始检查接待区、生产区、仓库、设备、标识、卫生和安全状态。", "现场问题尽量在验厂前发现，而不是等客户到场后再临时处理。"],
            },
            {
              title: "三、资料不要只准备“有”，还要准备“找得到”",
              bullets: ["把客户可能查看的公司、生产、质量、人员、设备和安全类资料按主题整理。", "指定熟悉资料位置的人负责现场调取，避免会议中长时间寻找文件。"],
            },
            {
              title: "四、确定谁来回答哪些问题",
              bullets: ["管理、生产、质量、采购、人事等问题通常由不同人员回答。", "提前确定主联系人和各部门配合人员，可以减少现场信息不一致。"],
            },
            {
              title: "五、做一次模拟验厂",
              bullets: ["按照客户参观路线走一遍，并模拟常见提问。", "把发现的问题分成“必须立即处理、需要解释、后续改善”三类，形成内部行动清单。"],
            },
          ]}
          note="本文用于企业前期商业判断与项目梳理，不替代法律、税务、工程、认证或政府主管机构意见。涉及正式审批、认证、合同与合规事项时，应根据具体项目核对最新官方要求并取得相应专业意见。"
        />
      </main>
      <Footer />
    </>
  );
}
