export default function Process() {
  const steps = [
    {
      number: "01",
      title: "需求沟通",
      desc: "深入了解企业业务、目标市场和实际需求。",
    },
    {
      number: "02",
      title: "AI 方案制定",
      desc: "设计适合企业的 AI 官网、获客和自动化方案。",
    },
    {
      number: "03",
      title: "开发部署",
      desc: "快速完成开发，上线并进行系统测试。",
    },
    {
      number: "04",
      title: "持续增长",
      desc: "持续优化 AI 系统，帮助企业不断获得客户。",
    },
  ];

  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      {/* 标题 */}
      <div className="text-center mb-20">

        <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
          WORK PROCESS
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-5">
          我们如何合作
        </h2>

        <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
          从咨询到上线，每一步都有专业团队陪伴，帮助企业快速实现 AI 增长。
        </p>

      </div>

      {/* 流程 */}
      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step) => (
          <div
            key={step.number}
            className="
              group
              relative
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
            {/* 编号 */}
            <div
              className="
                text-6xl
                font-black
                text-blue-500/30
                mb-8
                transition-all
                duration-500
                group-hover:text-blue-400
              "
            >
              {step.number}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {step.title}
            </h3>

            <p className="text-gray-400 leading-8">
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
        ))}
      </div>
    </section>
  );
}