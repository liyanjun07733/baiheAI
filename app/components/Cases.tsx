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
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        md:px-8
        py-20
        sm:py-24
        md:py-32
        scroll-mt-24
      "
    >

      <FadeUp>

        <div className="text-center mb-14 sm:mb-16 md:mb-20">

          <p
            className="
              text-blue-400
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              font-semibold
              text-sm
              sm:text-base
            "
          >
            SUCCESS STORIES
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-tight
            "
          >
            成功案例
          </h2>

          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              mt-6
              max-w-3xl
              mx-auto
              leading-8
              md:leading-9
            "
          >
            每一个项目，
            都以帮助客户实现业务增长为目标，
            而不仅仅是交付技术。
          </p>

        </div>

      </FadeUp>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          md:gap-8
        "
      >        {cases.map((item, index) => (
          <FadeUp
            key={item.company}
            delay={index * 0.15}
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-gray-800
                bg-gray-900/70
                backdrop-blur-xl
                p-7
                md:p-8
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
                  transition-all
                  duration-500
                  group-hover:bg-cyan-500/20
                "
              />

              {/* 标签 */}
              <div
                className="
                  relative
                  inline-block
                  rounded-full
                  bg-blue-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-blue-400
                  mb-6
                "
              >
                {item.tag}
              </div>

              {/* 图标 */}
              <div
                className="
                  relative
                  text-5xl
                  md:text-6xl
                  mb-6
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {item.icon}
              </div>

              {/* 公司 */}
              <p className="relative text-gray-500 uppercase tracking-wider text-sm mb-2">
                {item.company}
              </p>

              {/* 标题 */}
              <h3 className="relative text-2xl font-bold mb-8 text-white">
                {item.title}
              </h3>

              {/* 数据 */}
              <div className="relative mb-8">
                <div
                  className="
                    text-4xl
                    sm:text-5xl
                    font-black
                    bg-gradient-to-r
                    from-cyan-300
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.result}
                </div>

                <div className="text-gray-400 mt-2">
                  {item.desc}
                </div>
              </div>

              {/* 底部 */}
              <div className="relative flex items-center justify-between gap-4">
                <span className="text-gray-500 text-sm">
                  真实项目成果
                </span>

                <button
                  className="
                    text-blue-400
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  查看详情 →
                </button>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}