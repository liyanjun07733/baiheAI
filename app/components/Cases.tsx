"use client";

import FadeUp from "./FadeUp";

const cases = [
  {
    icon: "🏭",
    company: "制造企业",
    title: "AI 外贸获客系统",
    summary: "帮助企业建立海外品牌入口与持续获客流程。",
    result: "+180%",
    resultLabel: "海外询盘增长",
    services: ["AI 官网", "Google SEO", "AI 获客"],
    outcomes: ["海外询盘持续增加", "品牌形象国际化", "获客流程更加稳定"],
    tag: "Lead Generation",
  },
  {
    icon: "🛒",
    company: "跨境电商品牌",
    title: "AI 自动化运营",
    summary: "通过自动客服与运营流程优化，降低重复人工成本。",
    result: "-60%",
    resultLabel: "运营成本降低",
    services: ["AI 客服", "流程自动化", "数据分析"],
    outcomes: ["客服响应速度提升", "重复工作明显减少", "团队专注核心业务"],
    tag: "Automation",
  },
  {
    icon: "🏨",
    company: "泰国酒店集团",
    title: "AI 多语言客服",
    summary: "升级官网与多语言沟通体验，提升海外客户转化。",
    result: "+35%",
    resultLabel: "订单转化率提升",
    services: ["多语言官网", "AI 客服", "品牌升级"],
    outcomes: ["海外咨询更加顺畅", "客户响应效率提高", "品牌信任度进一步提升"],
    tag: "Customer Service",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">
              SUCCESS STORIES
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              我们交付的不只是技术，
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                更是业务结果
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg md:text-xl md:leading-9">
              每一个项目都围绕企业真实业务目标展开，
              从品牌展示、客户获取到运营效率，持续创造可衡量的价值。
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 lg:grid-cols-3">
          {cases.map((item, index) => (
            <FadeUp key={item.company} delay={index * 0.12}>
              <article
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-500/40
                  hover:bg-white/[0.055]
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                  sm:p-7
                "
              >
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-3xl">
                    {item.icon}
                  </div>

                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
                    {item.tag}
                  </span>
                </div>

                <div className="relative mt-6">
                  <p className="text-sm uppercase tracking-[2px] text-gray-500">
                    {item.company}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {item.summary}
                  </p>
                </div>

                <div className="relative mt-7 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.06] p-5">
                  <div className="text-4xl font-black text-cyan-300 sm:text-5xl">
                    {item.result}
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-300">
                    {item.resultLabel}
                  </p>
                </div>

                <div className="relative mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                    项目内容
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-blue-500/15 bg-blue-500/[0.06] px-3 py-2 text-xs font-medium text-blue-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                    项目成果
                  </p>

                  <div className="mt-3 space-y-3">
                    {item.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                      >
                        <span className="mt-0.5 text-cyan-400">✓</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 border-t border-white/10 pt-5">
                  <a
                    href="/consultation?from=cases"
                    className="inline-flex items-center gap-2 font-semibold text-blue-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300"
                  >
                    免费获取解决方案
                    <span>→</span>
                  </a>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.45}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/[0.06] to-blue-500/10 p-6 text-center sm:p-8 lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                您的企业也可以拥有清晰的增长路径
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-gray-400">
                告诉我们您的行业、目标国家和当前问题，
                我们会为您梳理适合的 AI 官网、获客与自动化方案。
              </p>
            </div>

            <a
              href="/consultation?from=cases"
              className="w-full shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20 sm:w-auto"
            >
              免费获取方案
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
