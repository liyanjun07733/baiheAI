export default function BlogPage() {
  const posts = [
    {
      title: "中国企业为什么选择投资泰国？",
      desc: "从区位、产业、市场和商业环境等角度，介绍进入泰国市场时值得关注的因素。",
      tag: "Thailand",
      href: "/thailand-investment",
    },
    {
      title: "BOI 政策方向介绍（概览）",
      desc: "帮助企业了解 BOI 的基本概念、适用方向以及前期准备思路。",
      tag: "BOI",
      href: "/free-plan",
    },
    {
      title: "在泰国建厂前需要准备什么？",
      desc: "围绕场地、团队、供应链、合规等方面整理准备建议。",
      tag: "Factory",
      href: "/free-plan",
    },
    {
      title: "AI 如何帮助企业获得海外客户？",
      desc: "介绍 AI 官网、内容营销、自动化客服等数字化能力。",
      tag: "AI",
      href: "/services",
    },
    {
      title: "中国企业进入东南亚市场的建议",
      desc: "从市场选择、本地化、品牌建设等角度进行整理。",
      tag: "SEA",
      href: "/services",
    },
    {
      title: "泰国投资常见问题",
      desc: "汇总企业常见咨询问题，方便快速了解。",
      tag: "FAQ",
      href: "/free-plan",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          BAIHEAI INSIGHTS
        </span>

        <h1 className="mt-8 text-5xl font-black md:text-7xl">
          行业洞察与知识中心
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
          分享东南亚市场、泰国投资、AI 企业数字化及海外获客相关内容，
          持续更新，为企业提供参考。
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-500/40"
          >
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              {post.tag}
            </span>

            <h2 className="mt-5 text-2xl font-black">{post.title}</h2>

            <p className="mt-4 leading-8 text-gray-400">
              {post.desc}
            </p>

            <a
              href={post.href}
              className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold"
            >
              阅读更多
            </a>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center">
          <h2 className="text-3xl font-black">
            需要针对您企业的建议？
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            欢迎填写免费 AI 出海方案，我们将根据您的行业和目标市场提供建议。
          </p>

          <a
            href="/free-plan"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold"
          >
            免费获取 AI 出海方案
          </a>
        </div>
      </section>
    </main>
  );
}
