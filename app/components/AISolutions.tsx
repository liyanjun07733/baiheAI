"use client";

import FadeUp from "./FadeUp";

export default function AISolutions() {
  const solutions = [
    {
      icon: "🤖",
      title: "AI 智能客服",
      desc: "7×24 小时自动回复客户咨询，提高响应速度，降低人工成本。",
    },
    {
      icon: "📈",
      title: "AI 获客系统",
      desc: "自动筛选潜在客户，帮助企业持续获取海外询盘。",
    },
    {
      icon: "🌏",
      title: "AI 本地化",
      desc: "支持中文、英文、泰文等多语言内容，助力东南亚市场拓展。",
    },
    {
      icon: "⚙️",
      title: "AI 工作流",
      desc: "自动处理邮件、报表、客服等重复工作，提升运营效率。",
    },
    {
      icon: "📊",
      title: "AI 数据分析",
      desc: "快速分析业务数据，为企业提供更精准的决策支持。",
    },
    {
      icon: "🧠",
      title: "AI 知识库",
      desc: "打造企业专属 AI 助手，让团队快速获取内部知识。",
    },
  ];

  return (
    <section
      id="solutions"
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
            AI SOLUTIONS
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
            AI 解决方案
          </h2>

          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              mt-5
              sm:mt-6
              max-w-3xl
              mx-auto
              leading-8
              md:leading-9
            "
          >
            我们不仅提供网站，更帮助企业建立完整的 AI 业务增长体系。
          </p>
        </div>
      </FadeUp>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
        "
      >        {solutions.map((item, index) => (
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
                  min-h-[96px]
                "
              >
                {item.desc}
              </p>

              {/* 底部按钮 */}
              <button
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-500/40
                  px-5
                  py-3
                  text-blue-400
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:text-white
                  hover:border-blue-500
                "
              >
                了解更多
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          </FadeUp>
        ))}

      </div>

    </section>
  );
}