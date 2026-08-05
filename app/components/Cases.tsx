"use client";

import FadeUp from "./FadeUp";

export default function Cases() {
  const cases = [
    {
      icon: "🏭",
      company: "制造企业",
      title: "AI 外贸获客系统",
      result: "+180%",
      desc: "海外询盘增长",
      tag: "Lead Generation",
    },
    {
      icon: "🛒",
      company: "跨境电商",
      title: "AI 自动化运营",
      result: "-60%",
      desc: "运营成本降低",
      tag: "Automation",
    },
    {
      icon: "🏨",
      company: "泰国酒店",
      title: "AI 多语言客服",
      result: "+35%",
      desc: "订单转化率提升",
      tag: "Customer Service",
    },
  ];

  return (
    <section
      id="cases"
      className="max-w-7xl mx-auto px-8 py-32 scroll-mt-24"
    >
      <FadeUp>
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
            SUCCESS STORIES
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            成功案例
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
            每一个项目，都以业务增长为目标，而不仅仅是交付技术。
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <FadeUp key={item.company} delay={index * 0.2}>
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-800
                bg-gray-900/80
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-2xl
                hover:shadow-blue-500/20
              "
            >
              {/* 光晕 */}
              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-52
                  h-52
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  group-hover:bg-blue-500/20
                  transition-all
                  duration-500
                "
              />

              {/* 标签 */}
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6">
                {item.tag}
              </div>

              {/* 图标 */}
              <div className="text-6xl mb-6 transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>

              {/* 公司 */}
              <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">
                {item.company}
              </p>

              {/* 标题 */}
              <h3 className="text-2xl font-bold mb-8">
                {item.title}
              </h3>

              {/* 数据 */}
              <div className="mb-8">
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  {item.result}
                </div>

                <div className="text-gray-400 mt-2">
                  {item.desc}
                </div>
              </div>

              {/* 底部 */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  真实项目成果
                </span>

                <div className="text-blue-400 font-semibold group-hover:translate-x-2 transition">
                  查看详情 →
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}