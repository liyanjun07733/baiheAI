"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    question: "BaiheAI 主要帮助哪些企业？",
    answer:
      "我们主要服务希望进入泰国、越南、马来西亚、新加坡等东南亚市场的中国企业，包括制造业、跨境电商、酒店旅游、贸易服务和教育培训等行业。",
  },
  {
    question: "没有 AI 基础，也可以合作吗？",
    answer:
      "可以。您不需要具备技术背景。我们会先了解业务目标，再把方案拆解成清晰步骤，帮助您从最容易落地、最有价值的部分开始。",
  },
  {
    question: "你们可以提供哪些服务？",
    answer:
      "服务包括 AI 官网、海外获客系统、AI 客服、业务流程自动化、多语言内容、本地化运营和海外品牌建设等。",
  },
  {
    question: "项目通常多久可以上线？",
    answer:
      "简单项目最快约 7 天可以上线。更复杂的官网、自动化或多语言项目，会根据功能范围制定明确时间表。",
  },
  {
    question: "网站上线后还会继续维护吗？",
    answer:
      "会。我们可以继续提供网站维护、内容更新、系统优化、AI 功能升级和海外获客支持。",
  },
  {
    question: "如何开始合作？",
    answer:
      "点击免费咨询，告诉我们您的行业、目标国家、产品和当前问题。我们会先进行一次需求沟通，再给出适合当前阶段的建议。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">
              FAQ
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              常见问题
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg md:text-xl md:leading-9">
              提前了解合作方式、项目周期和服务范围，
              让您更快判断 BaiheAI 是否适合您的企业。
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 space-y-4 md:mt-20">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeUp key={item.question} delay={index * 0.06}>
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.035]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-500/30
                  "
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      sm:px-6
                      sm:py-6
                    "
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-white sm:text-lg">
                      {item.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        text-xl
                        text-cyan-300
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                    `}
                  >
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

        <FadeUp delay={0.4}>
          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-between
              gap-6
              rounded-3xl
              border
              border-cyan-500/20
              bg-gradient-to-r
              from-blue-500/10
              via-cyan-500/[0.06]
              to-blue-500/10
              p-6
              text-center
              sm:p-8
              lg:flex-row
              lg:text-left
            "
          >
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                还有其他问题？
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-gray-400">
                直接告诉我们您的行业、目标市场和当前困难，
                我们会尽快回复并给出建议。
              </p>
            </div>

            <a
              href="#contact"
              className="
                w-full
                shrink-0
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-7
                py-4
                text-center
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
                hover:shadow-cyan-500/20
                sm:w-auto
              "
            >
              免费咨询
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
