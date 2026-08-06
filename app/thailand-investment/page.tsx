export default function ThailandInvestmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Thailand Investment Guide
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            为什么越来越多中国企业
            <br />
            选择投资泰国？
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            从投资环境、BOI方向、厂房、签证、供应链、本地资源到 AI
            数字化运营，一站式了解中国企业进入泰国市场时需要关注的重要事项。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/free-plan"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold"
            >
              免费咨询
            </a>

            <a
              href="/"
              className="rounded-xl border border-white/10 px-8 py-4 font-bold"
            >
              返回首页
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-black">为什么选择泰国？</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["🌏","东盟中心","连接东盟市场，区位优势明显。"],
            ["🏭","制造业基础","拥有成熟产业链和工业园。"],
            ["🚢","物流便利","海运、陆运和航空网络完善。"],
            ["💼","投资政策","不同项目可能适用不同投资促进政策。"],
            ["🤝","国际合作","国际企业聚集，供应链完善。"],
            ["🤖","AI数字化","企业可同步建设官网、获客和自动化。"],
          ].map(([icon,title,desc])=>(
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-8 text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8">
          <h2 className="text-3xl font-black">投资前建议重点了解</h2>
          <ul className="mt-6 space-y-4 text-gray-300 leading-8">
            <li>✓ 是否适合申请 BOI 或其他投资促进政策。</li>
            <li>✓ 公司设立、经营范围及合规要求。</li>
            <li>✓ 厂房、仓库、办公地点选择。</li>
            <li>✓ 商务签证、工作许可等安排。</li>
            <li>✓ 合同、翻译及合作伙伴尽职了解。</li>
            <li>✓ 官网、品牌和海外获客同步规划。</li>
          </ul>

          <a
            href="/free-plan"
            className="mt-10 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold"
          >
            免费获取投资与 AI 出海建议
          </a>
        </div>
      </section>
    </main>
  );
}
