export default function Why() {
  const items = [
    {
      icon: "🚀",
      title: "AI 驱动",
      desc: "利用 AI 自动化提升企业运营效率，帮助企业快速增长。",
    },
    {
      icon: "🌏",
      title: "东南亚市场",
      desc: "熟悉泰国、马来西亚、新加坡等市场，助力企业出海。",
    },
    {
      icon: "⚡",
      title: "快速交付",
      desc: "从方案设计到正式上线，最快 7 天即可交付。",
    },
    {
      icon: "🤝",
      title: "长期合作",
      desc: "持续提供运营、推广、AI 升级等长期服务。",
    },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-32 scroll-mt-24"
    >
      {/* 标题 */}
      <div className="text-center mb-20">

        <p className="text-blue-400 font-semibold uppercase tracking-[6px]">
          WHY BAIHEAI
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-5">
          为什么选择 BaiheAI
        </h2>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
          我们不仅开发 AI 网站，更帮助企业真正获得海外客户，
          建立持续增长的商业系统。
        </p>

      </div>

      {/* 卡片 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {items.map((item) => (
          <div
            key={item.title}
            className="
              group
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
            <div
              className="
                text-5xl
                mb-6
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}