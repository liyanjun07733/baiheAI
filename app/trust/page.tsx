import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "合作原则与服务边界 | BaiheAI",
  description:
    "了解 BaiheAI 在泰国投资咨询、项目落地、本地资源与 AI 海外获客服务中的合作原则、信息边界、审批说明与案例公开原则。",
  alternates: { canonical: "/trust" },
};

const principles = [
  ["先确认事实，再给建议", "项目开始前先理解行业、目标、时间、资料和实际限制，不用通用答案替代具体判断。"],
  ["服务范围写清楚", "正式合作前明确交付内容、责任边界、客户需要配合的资料，以及第三方专业服务。"],
  ["不承诺政府审批", "BOI、签证、工作许可和其他政府审批事项，最终以主管部门的审核与正式文件为准。"],
  ["不虚构客户成果", "未获得授权的客户名称、评价、经营数据和项目图片不作为公开成交证明。"],
  ["重要事项建议复核", "涉及法律、税务、会计、合同、土地、许可等重大事项时，建议由具备相应资格的专业机构复核。"],
  ["按项目阶段投入", "前期诊断、项目落地与长期增长可以分开推进，避免企业一次承担暂时不需要的工作。"],
];

const responsibility = [
  ["BaiheAI 可协助", "前期需求梳理、项目路径沟通、BOI 方向与资料协作、本地资源连接、翻译商务支持、数字化和 AI 获客建设。"],
  ["可能需要专业第三方", "法律、税务、会计、审计、合同、特定许可证、工程设计、环保及其他依法需要专业资格的事项。"],
  ["最终由主管部门决定", "BOI 激励、签证、工作许可、公司及行业许可等政府审批与登记事项。"],
  ["企业需要确认", "商业决策、投资金额、合同签署、供应商选择、最终场地与经营风险。"],
];

export default function TrustPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-black pt-28 text-white">
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">TRUST & RESPONSIBILITY</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            我们更愿意把不能保证的事情，也提前告诉您
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            跨境投资需要建立在清晰信息和责任边界上。BaiheAI 的角色是帮助企业减少信息断层、提高沟通与执行效率，而不是替代主管部门或所有专业机构。
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([title, desc]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-xl font-black text-white">{title}</h2>
                <p className="mt-4 leading-8 text-gray-400">{desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-9">
            <p className="text-xs font-black tracking-[0.28em] text-cyan-300">RESPONSIBILITY MAP</p>
            <h2 className="mt-4 text-3xl font-black">谁负责什么？</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {responsibility.map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <h3 className="font-black text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Link href="/about#team" className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-400/30">
              <p className="text-xs font-black tracking-[0.22em] text-cyan-300">TEAM</p>
              <h2 className="mt-3 text-xl font-black">查看顾问资料 →</h2>
              <p className="mt-3 leading-7 text-gray-400">了解当前公开的顾问职责、能力方向与联系方式。</p>
            </Link>
            <Link href="/cases" className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-400/30">
              <p className="text-xs font-black tracking-[0.22em] text-cyan-300">CASES</p>
              <h2 className="mt-3 text-xl font-black">查看案例公开原则 →</h2>
              <p className="mt-3 leading-7 text-gray-400">示例案例明确标识，不将方法示例包装成真实客户成果。</p>
            </Link>
            <Link href="/faq" className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-400/30">
              <p className="text-xs font-black tracking-[0.22em] text-cyan-300">FAQ</p>
              <h2 className="mt-3 text-xl font-black">查看完整常见问题 →</h2>
              <p className="mt-3 leading-7 text-gray-400">了解 BOI、公司、场地、签证、AI 获客与合作方式。</p>
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
            <div>
              <h2 className="text-2xl font-black">准备讨论您的实际项目？</h2>
              <p className="mt-2 text-gray-400">先把需求、阶段和时间整理清楚，我们再进入具体沟通。</p>
            </div>
            <Link href="/consultation" className="mt-5 block shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-black text-white sm:mt-0">
              1 分钟需求诊断 →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
