export default function CasesPage() {
  const cases = [
    {
      title: "中国制造企业进入泰国",
      industry: "制造业",
      result: "建立 AI 官网 + WhatsApp + LINE + 海外询盘流程",
      desc: "帮助企业规划海外品牌展示、客户咨询入口和数字化获客流程。",
    },
    {
      title: "酒店品牌国际化升级",
      industry: "酒店旅游",
      result: "多语言官网 + AI 客服 + 品牌展示",
      desc: "提升海外客户沟通体验，优化线上品牌形象。",
    },
    {
      title: "贸易企业海外获客",
      industry: "国际贸易",
      result: "Google SEO + AI 内容 + 官网优化",
      desc: "帮助企业建立持续获取海外客户的基础能力。",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          SUCCESS STORIES
        </span>

        <h1 className="mt-8 text-5xl font-black md:text-7xl">
          成功案例中心
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
          展示企业数字化、AI 出海和泰国市场拓展方向的案例。后续将持续更新真实客户案例。
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24">
        {cases.map((item, index) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[3px] text-cyan-300">
                  Case {index + 1}
                </div>
                <h2 className="mt-3 text-3xl font-black">{item.title}</h2>
                <p className="mt-2 text-gray-500">{item.industry}</p>
              </div>

              <a
                href="/free-plan"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold"
              >
                咨询类似方案
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {[
                "需求分析",
                "方案设计",
                "系统实施",
                "上线运营",
                "持续优化",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center"
                >
                  <div className="text-xl font-black text-cyan-300">✓</div>
                  <div className="mt-2 font-semibold">{step}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-6">
              <h3 className="text-xl font-bold">项目成果方向</h3>
              <p className="mt-4 leading-8 text-gray-300">{item.result}</p>
              <p className="mt-4 leading-8 text-gray-400">{item.desc}</p>
            </div>
          </article>
        ))}

        <section className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-10 text-center">
          <h2 className="text-3xl font-black">
            您的企业也可以成为下一位成功案例
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            告诉我们您的行业、目标市场和项目需求，我们将为您提供适合当前阶段的解决方案。
          </p>

          <a
            href="/free-plan"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold"
          >
            免费获取 AI 出海方案
          </a>
        </section>
      </section>
    </main>
  );
}
