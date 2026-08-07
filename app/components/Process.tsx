"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";

const steps = [
  {
    number: "01",
    icon: "🧭",
    title: "需求与项目阶段诊断",
    desc: "先了解行业、投资目标、时间、人员、场地与市场需求，判断现在最应该先解决什么。",
    result: "形成项目问题清单",
  },
  {
    number: "02",
    icon: "🗂️",
    title: "明确服务范围与责任",
    desc: "区分哪些事项由 BaiheAI 协助、哪些需要本地专业机构或政府主管部门确认，并确定交付范围。",
    result: "确认范围、节奏与报价",
  },
  {
    number: "03",
    icon: "🤝",
    title: "资料、资源与执行协作",
    desc: "按项目需要推进资料沟通、BOI 方向、本地资源、场地、翻译、公司与人员相关事项的协作。",
    result: "减少多头沟通与信息断层",
  },
  {
    number: "04",
    icon: "🤖",
    title: "数字化与海外获客",
    desc: "企业进入运营阶段后，可继续建设官网、内容、AI 知识库、自动化和海外客户咨询体系。",
    result: "把落地能力延伸到长期增长",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">HOW WE WORK</p>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              从判断到落地，
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">先把责任和步骤说清楚</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              投资落地不是一个按钮就能完成。我们更重视前期判断、服务边界、资料协作与持续执行。
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 0.1}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-500/35 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-2xl">{step.icon}</div>
                  <span className="text-4xl font-black text-blue-500/30">{step.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
                <p className="mt-4 leading-8 text-gray-400">{step.desc}</p>
                <div className="mt-6 rounded-xl border border-blue-500/15 bg-blue-500/[0.06] px-4 py-3 text-sm font-semibold text-blue-300">
                  ✓ {step.result}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.05] p-6 text-center sm:p-8 lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-black text-white">先判断，再投入。</h3>
              <p className="mt-2 max-w-2xl leading-7 text-gray-400">如果项目还在早期，先做需求诊断，不必一次购买所有服务。</p>
            </div>
            <Link href="/consultation" className="w-full shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-black text-white sm:w-auto">
              开始项目诊断 →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
