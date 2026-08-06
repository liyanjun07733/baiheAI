"use client";

import FadeUp from "./FadeUp";

const reviews = [
  {
    company: "深圳制造企业",
    role: "海外业务负责人",
    industry: "制造业",
    icon: "🏭",
    text: "BaiheAI 帮助我们重新梳理了海外获客流程，从官网展示到客户咨询都更清晰，团队处理询盘的效率也明显提升。",
    tags: ["AI 官网", "AI 获客", "海外品牌"],
    result: "+180%",
    resultLabel: "海外询盘增长",
  },
  {
    company: "跨境电商品牌",
    role: "运营总监",
    industry: "跨境电商",
    icon: "🛒",
    text: "自动化流程上线后，大量重复客服和跟进工作被系统处理，团队终于可以把更多时间放在产品和增长上。",
    tags: ["AI 自动化", "AI 客服", "数据分析"],
    result: "-60%",
    resultLabel: "运营成本降低",
  },
  {
    company: "泰国酒店集团",
    role: "Marketing Manager",
    industry: "酒店旅游",
    icon: "🏨",
    text: "多语言官网和 AI 客服上线后，海外客户沟通更顺畅，品牌形象也更专业，订单转化率得到明显提升。",
    tags: ["多语言官网", "AI 客服", "品牌升级"],
    result: "+35%",
    resultLabel: "订单转化率提升",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">
              CLIENT RESULTS
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              客户评价背后，
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                是真实业务结果
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg md:text-xl md:leading-9">
              我们关注的不只是交付是否完成，更关注系统上线后是否真正帮助客户提升效率、获取客户和建立信任。
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 lg:grid-cols-3">
          {reviews.map((item, index) => (
            <FadeUp key={item.company} delay={index * 0.12}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-7">
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-3xl">
                    {item.icon}
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-gray-300">
                    {item.industry}
                  </span>
                </div>

                <div className="relative mt-6 text-xl tracking-[4px] text-yellow-400">
                  ★★★★★
                </div>

                <blockquote className="relative mt-5 flex-1 text-base leading-8 text-gray-300">
                  “{item.text}”
                </blockquote>

                <div className="relative mt-7 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.06] p-5">
                  <div className="text-4xl font-black text-cyan-300">
                    {item.result}
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-300">
                    {item.resultLabel}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-500/15 bg-blue-500/[0.06] px-3 py-2 text-xs font-medium text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-7 border-t border-white/10 pt-5">
                  <h3 className="text-lg font-bold text-white">
                    {item.company}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.45}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/[0.06] to-blue-500/10 p-6 text-center sm:p-8 lg:flex-row lg:text-left">
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                想知道您的企业适合哪种 AI 方案？
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-gray-400">
                告诉我们您的行业、目标市场和当前问题，我们会为您提供适合现阶段的建议。
              </p>
            </div>

            <a href="#contact" className="w-full shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20 sm:w-auto">
              免费咨询适合方案
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
