"use client";

import FadeUp from "./FadeUp";

export default function Process() {

  const steps = [

    {
      number: "01",
      title: "需求沟通",
      desc: "深入了解企业业务、目标市场及发展规划，明确 AI 建设方向。",
    },

    {
      number: "02",
      title: "AI 方案制定",
      desc: "结合企业实际需求，制定 AI 官网、获客及自动化整体解决方案。",
    },

    {
      number: "03",
      title: "开发部署",
      desc: "快速完成开发、测试及上线，确保系统稳定运行。",
    },

    {
      number: "04",
      title: "持续增长",
      desc: "持续优化 AI 系统及运营策略，帮助企业不断获得海外客户。",
    },

  ];

  return (

    <section
      id="process"
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        md:px-8
        py-20
        sm:py-24
        md:py-32
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
            WORK PROCESS
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
            "
          >
            我们如何合作
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
            从咨询到正式上线，
            每一步都有专业团队陪伴，
            帮助企业快速实现 AI 增长。
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
      >        {steps.map((step, index) => (
          <FadeUp
            key={step.number}
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
              {/* 光效 */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  h-36
                  w-36
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-500/20
                "
              />

              {/* 编号 */}
              <div
                className="
                  relative
                  mb-8
                  text-5xl
                  md:text-6xl
                  font-black
                  text-blue-500/30
                  transition-all
                  duration-500
                  group-hover:text-blue-400
                "
              >
                {step.number}
              </div>

              {/* 标题 */}
              <h3 className="relative text-2xl font-bold mb-4 text-white">
                {step.title}
              </h3>

              {/* 描述 */}
              <p className="relative text-gray-400 leading-8">
                {step.desc}
              </p>

              {/* 底部发光线 */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}