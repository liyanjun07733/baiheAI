"use client";

import Link from "next/link";
import { useState } from "react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    question: "BaiheAI 主要适合哪些企业？",
    answer:
      "目前重点服务计划进入泰国及东南亚市场的中国企业，尤其是正在评估投资、建厂、公司设立、本地资源、商务沟通，以及希望建立海外官网和 AI 获客能力的企业。",
  },
  {
    question: "项目还没决定投资，可以先咨询吗？",
    answer:
      "可以。前期最重要的往往不是马上办理，而是先把行业、投资目标、时间、场地、人员和市场需求梳理清楚。可以先使用网站的项目需求诊断，再决定下一步。",
  },
  {
    question: "你们能保证 BOI 获批吗？",
    answer:
      "不能。BaiheAI 可以协助企业梳理 BOI 方向、资料和沟通事项，但是否符合条件、可获得哪些优惠以及最终审批结果，应以泰国 BOI 等主管部门的正式审核为准。",
  },
  {
    question: "公司注册、签证和工作许可可以一起协助吗？",
    answer:
      "可以根据项目实际范围协助梳理并连接相应执行资源。不同企业的股权、业务、人员和许可要求不同，因此会先确认情况，再确定具体服务范围。",
  },
  {
    question: "可以帮助找厂房、仓库或办公室吗？",
    answer:
      "可以协助梳理面积、位置、产业配套、物流、预算等条件，并连接相应本地资源。最终租赁、购买、许可与合同事项需要企业结合专业意见自行确认。",
  },
  {
    question: "可以提供客户验厂或工厂审核前的咨询支持吗？",
    answer:
      "可以。BaiheAI 可根据企业和客户的验厂场景，协助梳理验厂前准备清单、资料与现场流程、客户沟通、翻译陪同、问题记录及后续改进事项。我们提供的是咨询与协作支持，不替代客户、认证机构或第三方审核机构的正式审核结论。",
  },
  {
    question: "不会泰语，也没有泰国团队怎么办？",
    answer:
      "可根据项目需要提供泰语 / 英语商务支持、文件沟通、商务陪同及本地资源协作，减少企业前期多方沟通的成本。",
  },
  {
    question: "AI 获客服务具体做什么？",
    answer:
      "重点是把海外官网、搜索内容、客户咨询入口、知识库、AI 工具和自动化流程连接起来，让网站不只是展示页面，而是逐步形成可持续积累的海外获客基础。",
  },
  {
    question: "服务费用为什么没有统一标价？",
    answer:
      "泰国投资和企业落地项目差异很大。服务范围会受项目阶段、行业、资料复杂度、涉及地区、执行周期和资源协调量影响，因此先确认工作范围，再给出对应报价更合理。",
  },
  {
    question: "通常怎么开始合作？",
    answer:
      "建议先做 1 分钟需求诊断，或提交详细项目情况。我们先判断您现在最应该解决的问题，再确认是否需要进入正式咨询或执行服务。",
  },
  {
    question: "网站上的政策内容可以直接作为法律或投资结论吗？",
    answer:
      "不建议。网站内容用于前期信息整理和项目沟通，不替代律师、会计师、税务顾问或政府主管部门的正式意见。涉及重大投资决策时，应结合对应专业机构和官方要求核实。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-24 md:py-32 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">FAQ</p>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              企业最常问的几个问题
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg md:text-xl md:leading-9">
              先把服务范围、合作方式与重要边界说清楚，再决定是否进入下一步。
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 space-y-4 md:mt-20">
          {faqs.slice(0, 7).map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeUp key={item.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl transition hover:border-cyan-500/30">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-white sm:text-lg">{item.question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xl text-cyan-300 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="border-t border-white/10 px-5 py-5 leading-8 text-gray-400 sm:px-6 sm:py-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.35}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.05] p-6 text-center sm:p-8 lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-black text-white">还有更具体的问题？</h3>
              <p className="mt-2 max-w-2xl leading-7 text-gray-400">
                查看完整 FAQ 与合作边界，或直接做项目需求诊断。
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/faq" className="rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-center font-bold text-white">
                查看完整 FAQ
              </Link>
              <Link href="/consultation?from=home-faq" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-center font-black text-white">
                1 分钟需求诊断
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
