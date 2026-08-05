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
      className="max-w-7xl mx-auto px-8 py-32 scroll-mt-24"
    >
      <FadeUp>
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
            AI SOLUTIONS
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            AI 解决方案
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
            我们不仅提供网站，更帮助企业建立完整的 AI 业务增长体系。
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <FadeUp key={item.title} delay={index * 0.1}>
            <div className="group rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}