"use client";

import FadeUp from "./FadeUp";

export default function Why() {

  const items = [

    {
      icon: "🚀",
      title: "AI 驱动增长",
      desc: "利用 AI 自动化帮助企业提升运营效率、降低成本，实现持续增长。",
    },

    {
      icon: "🌏",
      title: "深耕东南亚",
      desc: "熟悉泰国、越南、马来西亚、新加坡等市场，帮助中国企业快速出海。",
    },

    {
      icon: "⚡",
      title: "快速交付",
      desc: "从需求分析、网站建设到正式上线，最快 7 天即可投入运营。",
    },

    {
      icon: "🤝",
      title: "长期陪跑",
      desc: "不仅交付网站，更持续提供 AI、获客、运营及品牌增长服务。",
    },

  ];

  return (

    <section
      id="about"
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
            WHY BAIHEAI
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
            为什么选择 BaiheAI
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
            我们不仅开发 AI 官网，
            更帮助企业建立完整的海外获客、
            自动化运营和品牌增长体系。
          </p>

        </div>

      </FadeUp>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          md:gap-8
        "
      >        {items.map((item, index) => (

          <FadeUp
            key={item.title}
            delay={index * 0.15}
          >

            <div
              className="
                group
                relative
                h-full
                rounded-3xl
                border
                border-gray-800
                bg-gray-900/70
                backdrop-blur-xl
                p-7
                md:p-8
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-2xl
                hover:shadow-blue-500/20
              "
            >

              {/* 光效 */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-36
                  h-36
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-500/20
                "
              />

              {/* 图标 */}
              <div
                className="
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

              {/* 标题 */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {item.title}
              </h3>

              {/* 描述 */}
              <p
                className="
                  text-gray-400
                  leading-8
                  text-base
                  min-h-[110px]
                "
              >
                {item.desc}
              </p>

              {/* 底部 */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  text-blue-400
                  font-semibold
                  transition-all
                  duration-300
                  group-hover:translate-x-2
                "
              >
                了解更多
                <span className="ml-2">→</span>
              </div>

            </div>

          </FadeUp>

        ))}

      </div>

    </section>

  );
}