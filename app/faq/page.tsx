import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "常见问题 | 泰国投资、BOI、建厂与 AI 获客",
  description:
    "中国企业进入泰国常见问题：投资前期、BOI、公司注册、厂房、签证工作许可、翻译、本地资源、AI 海外获客及合作方式。",
  alternates: { canonical: "/faq" },
};

const groups = [
  {
    title: "泰国投资与项目落地",
    items: [
      ["项目还没决定投资，可以先咨询吗？", "可以。前期可以先梳理行业、投资目标、时间、人员、场地和市场需求，再决定是否进入正式执行。"],
      ["BaiheAI 能保证 BOI 获批吗？", "不能。可以协助梳理方向、资料与沟通事项，但资格、优惠和最终审批结果以泰国 BOI 等主管部门审核为准。"],
      ["可以协助公司注册吗？", "可以根据项目实际情况梳理公司设立相关事项并连接执行资源。股权、经营范围、许可和税务等需要结合具体情况确认。"],
      ["可以帮忙找厂房、仓库和办公室吗？", "可以协助梳理选址条件并连接相应资源。合同、产权、许可、环保及其他专业事项应在决策前进一步核实。"],
      ["签证和工作许可能一起做吗？", "可根据企业和人员情况协助梳理所需流程与资料。实际资格和审批结果以移民、劳工等主管部门要求为准。"],
    ],
  },
  {
    title: "商务沟通与本地资源",
    items: [
      ["没有泰国团队、不会泰语怎么办？", "可根据项目需要提供泰语 / 英语商务沟通、文件支持、商务陪同和本地资源协作。"],
      ["能帮忙对接供应商或服务商吗？", "可根据项目需求协助寻找和连接本地资源，但企业仍应对供应商资质、报价、合同和履约能力进行独立判断。"],
      ["是否可以只做其中一项服务？", "可以。服务可以按项目阶段拆分，不要求企业一次购买完整方案。"],
    ],
  },
  {
    title: "AI 官网与海外获客",
    items: [
      ["AI 获客是不是投广告？", "不只如此。可包括海外官网、SEO 内容、客户诊断入口、知识库、AI 客服方向与自动化线索整理，广告只是可能使用的渠道之一。"],
      ["做了网站就一定有客户吗？", "不能保证。网站是获客基础设施之一，实际结果还受产品竞争力、市场、内容、渠道、销售跟进和持续运营影响。"],
      ["没有 AI 技术基础可以做吗？", "可以。企业更需要明确业务目标和实际流程，技术方案由项目需求反推，而不是要求客户先学习 AI。"],
    ],
  },
  {
    title: "费用、合作与风险边界",
    items: [
      ["为什么没有统一公开价格？", "不同项目的范围、周期、地区、资料复杂度和资源协调量差异较大，先确认工作范围再报价更准确。"],
      ["正式合作前会确认什么？", "建议至少确认服务范围、交付内容、客户需提供的资料、双方责任、时间节点、费用及第三方成本。"],
      ["网站政策文章能否直接作为投资决定？", "不能。网站内容用于信息整理和沟通，不替代律师、会计师、税务顾问或政府主管部门的正式意见。"],
      ["如何开始？", "可以先做 1 分钟需求诊断，或者提交详细项目情况。先判断问题，再决定是否进入正式合作。"],
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-black pt-28 text-white">
        <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">FAQ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            合作前，把关键问题先说清楚
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            这里集中回答中国企业进入泰国、项目落地和 AI 海外获客过程中最常见的问题。
          </p>
        </section>

        <section className="mx-auto max-w-6xl space-y-6 px-5 pb-20 sm:px-6">
          {groups.map((group) => (
            <section key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white">{group.title}</h2>
              <div className="mt-6 divide-y divide-white/10">
                {group.items.map(([q, a]) => (
                  <article key={q} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="font-black text-white">{q}</h3>
                    <p className="mt-3 leading-8 text-gray-400">{a}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div>
              <h2 className="text-2xl font-black">您的情况不在 FAQ 里？</h2>
              <p className="mt-2 text-gray-400">用 1 分钟把项目情况整理出来，再进入具体沟通。</p>
            </div>
            <Link href="/consultation?from=faq-page" className="mt-5 block shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-black text-white sm:mt-0">
              开始需求诊断 →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
