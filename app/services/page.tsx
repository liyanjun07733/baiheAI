export default function ServicesPage() {
  const services = [
    {
      icon:"🌐",
      title:"AI 企业官网",
      items:["品牌官网","多语言","移动端优化","SEO 基础"],
    },
    {
      icon:"📈",
      title:"AI 海外获客",
      items:["Google SEO","内容营销","海外品牌","询盘系统"],
    },
    {
      icon:"🤖",
      title:"AI 自动化",
      items:["AI 客服","WhatsApp","LINE","CRM 自动化"],
    },
    {
      icon:"🇹🇭",
      title:"泰国投资咨询",
      items:["投资方向","市场进入","商业咨询","项目规划"],
    },
    {
      icon:"🏛️",
      title:"BOI 方向咨询",
      items:["政策方向","可行性分析","材料准备建议","项目沟通"],
    },
    {
      icon:"🏭",
      title:"项目落地协助",
      items:["公司设立流程","商务签证","工作许可","厂房与办公室"],
    },
    {
      icon:"🗣️",
      title:"翻译与商务陪同",
      items:["中英泰翻译","文件翻译","商务会议","工厂考察"],
    },
    {
      icon:"🚀",
      title:"企业数字化升级",
      items:["AI 官网","自动化运营","品牌建设","持续维护"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          OUR SERVICES
        </span>
        <h1 className="mt-8 text-5xl font-black md:text-7xl">
          企业服务中心
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
          为中国企业进入东南亚市场提供 AI 数字化、市场拓展和项目协助服务。
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2">
        {services.map((s)=>(
          <div key={s.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-5xl">{s.icon}</div>
            <h2 className="mt-5 text-3xl font-black">{s.title}</h2>
            <ul className="mt-6 space-y-3 text-gray-300">
              {s.items.map(i=>(
                <li key={i}>✓ {i}</li>
              ))}
            </ul>
            <a href="/free-plan" className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold">
              免费咨询
            </a>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center">
          <h2 className="text-3xl font-black">需要定制方案？</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            告诉我们您的行业、目标市场和项目需求，我们会提供适合当前阶段的建议。
          </p>
          <a href="/free-plan" className="mt-8 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold">
            获取免费 AI 出海方案
          </a>
        </div>
      </section>
    </main>
  );
}
