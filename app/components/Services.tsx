"use client";

import FadeUp from "./FadeUp";

export default function Services() {
  const services = [
    {
      icon: "🤖",
      title: "AI 获客",
      desc: "帮助企业利用 AI 自动寻找海外客户，提高销售效率，降低获客成本。",
    },
    {
      icon: "🌏",
      title: "东南亚市场",
      desc: "依托泰国本地资源，帮助中国企业快速进入东南亚市场，实现品牌本地化。",
    },
    {
      icon: "⚡",
      title: "AI 自动化",
      desc: "自动处理客服、邮件、内容生成等重复工作，帮助企业节省时间与成本。",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-32 scroll-mt-24"
    >
      {/* 标题 */}
      <FadeUp>
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold uppercase tracking-[6px]">
            OUR SERVICES
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            我们能帮助企业做什么？
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
            不只是开发网站，而是帮助企业建立 AI 获客、
            自动化运营和海外品牌增长体系。
          </p>
        </div>
      </FadeUp>

      {/* 服务卡片 */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeUp key={service.title} delay={index * 0.2}>
            <div
              className="
                group
                relative
                rounded-3xl
                border
                border-gray-800
                bg-gray-900/80
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
              {/* 顶部光效 */}
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
                  group-hover:bg-blue-500/20
                  transition-all
                  duration-500
                "
              />

              {/* 图标 */}
              <div
                className="
                  text-6xl
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
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-400 leading-8 mb-8">
                {service.desc}
              </p>

              {/* 底部 */}
              <div
                className="
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