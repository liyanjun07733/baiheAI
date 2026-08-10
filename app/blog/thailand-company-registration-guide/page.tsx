import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeoArticle from "../../components/SeoArticle";
import ArticleJsonLd from "../../components/ArticleJsonLd";

const url =
  "https://www.baihediy.com/blog/thailand-company-registration-guide";

const title =
  "泰国公司注册流程：材料、股东、资本与办理步骤｜BaiheAI";

const description =
  "中国企业准备在泰国注册公司时，需要先梳理公司名称、股东与董事、注册地址、注册资本、公司章程以及税务和社保等后续事项。本文按办理顺序整理泰国公司注册流程与材料清单。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />

      <ArticleJsonLd
        title="泰国公司注册流程：材料、股东、资本与办理步骤"
        description={description}
        url={url}
        datePublished="2026-08-08"
        dateModified="2026-08-10"
      />

      <main className="min-h-screen bg-[#f8fcff] px-5 pb-20 pt-32 text-slate-950">
        <SeoArticle
          eyebrow="THAILAND COMPANY REGISTRATION"
          title="泰国公司注册流程：材料、股东、资本与办理步骤"
          intro="中国企业准备在泰国设立公司时，不要只看“注册需要多少钱”。真正需要提前确认的是公司名称、股东与董事安排、注册地址、注册资本、经营范围，以及公司成立后的税务、社保、银行账户和外籍人员安排。下面按实际准备顺序整理一份前期清单。"
          lastUpdated="2026-08-10"
          sections={[
            {
              title: "一、注册前先确认公司设立目的",
              paragraphs: [
                "在准备材料之前，先把公司未来要做什么、是否会雇佣员工、是否需要外籍人员赴泰工作、是否考虑 BOI 等问题放在一起判断。公司注册只是泰国项目落地中的一个环节，前期结构会影响后续办理安排。",
              ],
              bullets: [
                "实际经营范围是什么，是否涉及额外许可或行业要求。",
                "股东、董事和注册地址是否已经确定。",
                "公司成立后是否马上需要银行账户、员工、税务和社保安排。",
                "是否计划申请 BOI，或为外籍人员办理 Non-B 与 Work Permit。",
              ],
            },
            {
              title: "二、公司名称与基础资料准备",
              bullets: [
                "准备多个公司名称备选，用于名称核准。",
                "整理股东和董事身份资料，并根据实际股东类型准备相应文件。",
                "确认泰国境内注册地址，并准备与地址相关的证明材料。",
                "明确公司经营范围、股本结构和董事权限等基础事项。",
              ],
            },
            {
              title: "三、股东、董事与注册资本",
              paragraphs: [
                "不同业务结构、股东身份和后续用工安排，对公司设立方案的影响并不相同。现有项目资料中也会把股东、董事和注册资本作为注册前必须先确认的核心事项，因此不建议只按最低成本倒推结构。",
              ],
              bullets: [
                "确认股东构成以及各股东持股比例。",
                "确认董事人选、签字权限和公司内部授权安排。",
                "结合实际业务、外籍人员安排和项目规划确认注册资本。",
                "涉及外资持股、特定行业或特殊经营活动时，应进一步核对适用规则。",
              ],
            },
            {
              title: "四、公司章程与注册申请",
              paragraphs: [
                "名称和基础结构确认后，进入公司章程、法定文件以及正式注册申请阶段。企业内部最好先把股权、董事权限和经营范围确认清楚，再进入正式文件制作和签署。",
              ],
              bullets: [
                "完成公司名称核准。",
                "准备公司章程及注册所需法定文件。",
                "完成必要的股东或公司内部决议。",
                "向泰国商业发展厅（DBD）提交公司注册申请。",
                "取得公司注册文件后，再进入后续经营准备。",
              ],
            },
            {
              title: "五、注册完成并不等于可以直接开始运营",
              paragraphs: [
                "公司注册完成后，还需要根据实际经营情况继续处理税务、银行、员工和日常合规事项。对准备在泰国长期经营的中国企业来说，这部分往往比“把公司注册下来”更重要。",
              ],
              bullets: [
                "根据实际情况办理税务登记及相关税务事项。",
                "如有员工，确认社保和用工登记安排。",
                "准备企业银行账户及日常经营文件。",
                "建立会计、税务申报和财务管理流程。",
                "如有外籍员工，再衔接 Non-B、Work Permit 等人员手续。",
              ],
            },
            {
              title: "六、中国企业最容易遗漏的几个问题",
              bullets: [
                "只关注注册费用，没有把注册后的持续运营成本算进去。",
                "经营范围写得很宽，但没有确认实际业务是否涉及额外许可。",
                "公司先注册了，后面才发现股东、资本或人员安排不适合实际项目。",
                "注册地址、银行、税务、员工和工作许可分别推进，导致项目时间互相等待。",
                "把网上通用信息直接当作自己项目的最终办理要求，没有再核对最新官方规则。",
              ],
            },
            {
              title: "七、正式办理前建议准备的一页项目清单",
              bullets: [
                "计划开展的业务与产品/服务。",
                "预计投资规模与启动时间。",
                "股东与董事安排。",
                "泰国注册地址或计划落地区域。",
                "预计员工人数及是否有中国员工赴泰工作。",
                "是否考虑 BOI、工厂、仓库或其他经营许可。",
                "公司成立后前三个月需要完成的银行、税务、社保与运营事项。",
              ],
            },
          ]}
          relatedLinks={[
            {
              title: "泰国公司注册成本项目",
              desc: "注册费只是其中一部分，继续查看地址、财税、人员、银行和持续运营成本。",
              href: "/blog/thailand-company-registration-cost-items",
            },
            {
              title: "泰国 BOI 与非 BOI 怎么选？",
              desc: "如果项目同时涉及投资优惠和公司结构，可以先判断是否值得进一步评估 BOI。",
              href: "/blog/thailand-boi-vs-non-boi",
            },
            {
              title: "泰国 Non-B 与 Work Permit 指南",
              desc: "公司设立后如有外籍人员赴泰工作，可继续查看雇主端与员工端的前期准备。",
              href: "/blog/thailand-non-b-work-permit-guide",
            },
          ]}
          sources={[
            {
              title: "DBD Online Services / Business Registration",
              href: "https://www.dbd.go.th/en/hotService/online_service",
              publisher: "Department of Business Development (DBD)",
            },
            {
              title: "The Revenue Department",
              href: "https://www.rd.go.th/landing.html",
              publisher: "The Revenue Department",
            },
            {
              title: "Thailand Board of Investment",
              href: "https://www.boi.go.th/",
              publisher: "Thailand Board of Investment (BOI)",
            },
          ]}
          note="本文用于中国企业前期了解泰国公司注册流程和准备事项，不替代法律、税务、会计或政府主管机构意见。公司设立条件、材料、流程和后续合规要求可能随项目类型及政策变化，正式办理前应根据具体业务核对最新官方要求。"
        />
      </main>

      <Footer />
    </>
  );
}
