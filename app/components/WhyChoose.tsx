"use client";

import FadeUp from "./FadeUp";

const items = [
  {
    icon: "🚀",
    title: "AI 官网",
    desc: "打造专业国际化官网，让海外客户第一时间信任您的品牌。",
  },
  {
    icon: "📈",
    title: "AI 获客",
    desc: "帮助企业持续获取海外询盘，提高客户转化率。",
  },
  {
    icon: "⚙️",
    title: "AI 自动化",
    desc: "让客服、营销、数据处理自动运行，节省大量人工成本。",
  },
  {
    icon: "🌏",
    title: "东南亚市场",
    desc: "专注泰国、越南、马来西亚、新加坡市场，帮助企业快速出海。",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="whychoose"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* 背景光效 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
              WHY BAIHEAI
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              为什么选择 BaiheAI？
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              我们不仅帮助企业建设网站，
              更帮助企业获得海外客户，
              建立品牌，实现 AI 自动化运营。
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <div
                className="
                  group
                  h-full
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/50
                  hover:bg-white/[0.05]
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.desc}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-semibold">
                  了解更多
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.5}>
          <div
            className="
              mt-20
              rounded-3xl
              border
              border-cyan-500/20
              bg-gradient-to-r
              from-cyan-500/10
              to-blue-500/10
              p-8
              text-center
            "
          >
            <h3 className="text-3xl font-black text-white">
              AI 不是未来，而是企业现在的竞争力。
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              BaiheAI 帮助中国企业利用 AI 建立海外品牌、
              自动获取客户、提升运营效率，
              让企业以更低成本进入东南亚市场。
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}