export default function AboutPage() {
  const team = [
    {
      title: "Founder",
      name: "BaiheAI 创始人",
      desc: "负责 AI 企业出海、项目规划、客户咨询与整体解决方案。",
      icon: "👤",
    },
    {
      title: "Thailand Advisor",
      name: "泰国投资顾问",
      desc: "协助投资咨询、项目落地、BOI方向、商务沟通与本地资源。",
      icon: "🇹🇭",
    },
    {
      title: "AI Team",
      name: "AI 技术团队",
      desc: "负责 AI 官网、自动化、海外获客及数字化系统建设。",
      icon: "🤖",
    },
    {
      title: "Local Partner",
      name: "本地合作伙伴",
      desc: "提供翻译、商务陪同、场地、资源对接等支持。",
      icon: "🤝",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          ABOUT BAIHEAI
        </span>

        <h1 className="mt-8 text-5xl font-black md:text-7xl">
          我们不仅开发 AI，
          <br />
          更帮助企业进入东南亚。
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
          BaiheAI 致力于成为中国企业进入东南亚市场的一站式商业合作伙伴，
          提供投资咨询、AI 官网、海外获客、自动化及本地资源协助。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-4xl font-black">核心团队</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-5xl">
                {item.icon}
              </div>

              <div className="mt-6 text-2xl font-black">{item.name}</div>
              <div className="mt-1 text-cyan-300">{item.title}</div>

              <p className="mt-5 leading-8 text-gray-400">{item.desc}</p>

              <div className="mt-8 rounded-2xl border border-dashed border-gray-700 p-8 text-center text-gray-500">
                后续替换真实照片与资历
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center">
          <h2 className="text-3xl font-black">为什么选择 BaiheAI？</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              "AI 官网",
              "海外获客",
              "泰国投资咨询",
              "本地资源协助",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/5 p-6 font-bold">
                {item}
              </div>
            ))}
          </div>

          <a
            href="/free-plan"
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold"
          >
            免费咨询
          </a>
        </div>
      </section>
    </main>
  );
}
