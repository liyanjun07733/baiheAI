"use client";

import FadeUp from "./FadeUp";

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "AI 官网",
      desc: "打造国际化企业官网，支持中英泰多语言展示，帮助海外客户快速了解企业，提高品牌信任度。",
    },
    {
      icon: "🤖",
      title: "AI 获客",
      desc: "通过 Google、Facebook、TikTok、LinkedIn 等渠道，结合 AI 自动寻找潜在客户，持续获取海外询盘。",
    },
    {
      icon: "⚙️",
      title: "AI 自动化",
      desc: "自动回复客户、邮件营销、CRM、WhatsApp 等业务流程自动化，大幅提高工作效率。",
    },
    {
      icon: "🚀",
      title: "品牌出海",
      desc: "结合东南亚市场资源，为中国企业建立海外品牌形象，帮助企业快速进入海外市场。",
    },
  ];

  return (
    <section
      id="services"
      className="
        max-w-7xl
        mx-auto
        px-5
        md:px-8
        py-20
        md:py-32
        scroll-mt-24
      "
    >
      {/* 标题 */}
      <FadeUp>
        <div className="text-center mb-14 md:mb-20">
          <p className="text-blue-400 font-semibold uppercase tracking-[6px]">
            OUR SERVICES
          </p>
          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-black
              leading-tight
            "
          >
            我们能帮助企业做什么？
          </h2>
          <p
            className="
              text-gray-400
              text-base
              md:text-xl
              mt-6
              max-w-3xl
              mx-auto
              leading-8
              md:leading-9
            "
          >
            不只是开发网站，
            更帮助企业建立 AI 获客、
            自动化运营、
            海外品牌增长体系。
          </p>
        </div>
      </FadeUp>

      {/* 服务卡片 */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          md:gap-8
        "
      >
        {services.map((service, index) => (
          <FadeUp key={service.title} delay={index * 0.15}>
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
                p-8
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
                  -top-24
                  -right-24
                  w-40
                  h-40
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
                {service.icon}
              </div>
              {/* 标题 */}
              <h3 className="text-2xl font-bold mb-5 text-white">
                {service.title}
              </h3>
              {/* 描述 */}
              <p
                className="
                  text-gray-400
                  leading-8
                  text-base
                  flex-1
                  min-h-[120px]
                "
              >
                {service.desc}
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