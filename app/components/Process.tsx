"use client";

import FadeUp from "./FadeUp";

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "免费需求沟通",
    desc: "了解您的行业、产品、目标国家和当前问题，明确最值得优先解决的业务需求。",
    result: "明确目标与优先级",
  },
  {
    number: "02",
    icon: "🧠",
    title: "制定 AI 出海方案",
    desc: "根据企业实际情况，规划 AI 官网、海外获客、客服自动化与品牌本地化方案。",
    result: "获得清晰实施路线",
  },
  {
    number: "03",
    icon: "🚀",
    title: "开发、测试与上线",
    desc: "按确认后的方案完成开发和部署，并对手机端、表单、联系方式和核心流程进行测试。",
    result: "快速上线投入使用",
  },
  {
    number: "04",
    icon: "📈",
    title: "持续优化与增长",
    desc: "根据真实访问、客户咨询和业务反馈持续优化，让系统逐步提高获客与运营效率。",
    result: "持续提升业务效果",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">
              HOW WE WORK
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              从需求到增长，
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                每一步都清晰可见
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg md:text-xl md:leading-9">
              不需要复杂的技术准备。我们会从业务目标出发，
              帮助您把想法一步步变成可以实际使用的 AI 增长系统。
            </p>
          </div>
        </FadeUp>

        <div className="relative mt-14 sm:mt-16 md:mt-20">
          <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent xl:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {steps.map((step, index) => (
              <FadeUp key={step.number} delay={index * 0.12}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-7">
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-2xl shadow-lg shadow-cyan-500/10">
                      {step.icon}
                    </div>

                    <span className="text-4xl font-black text-blue-500/25 transition group-hover:text-blue-400/60">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="relative mt-4 leading-8 text-gray-400">
                    {step.desc}
                  </p>

                  <div className="relative mt-6 flex items-center gap-2 rounded-xl border border-blue-500/15 bg-blue-500/[0.06] px-4 py-3 text-sm font-semibold text-blue-300">
                    <span className="text-cyan-400">✓</span>
                    {step.result}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.45}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/[0.06] to-blue-500/10 p-6 text-center sm:p-8 lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                不确定应该从哪里开始？
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-gray-400">
                先进行一次免费沟通。我们会根据您的行业、目标市场和预算，
                给出适合当前阶段的实施建议。
              </p>
            </div>

            <a
              href="#contact"
              className="w-full shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20 sm:w-auto"
            >
              免费获取实施建议
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
