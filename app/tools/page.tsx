import type { Metadata } from "next";
import Link from "next/link";
import SmartParticles from "../components/SmartParticles";

export const metadata: Metadata = {
  title: "工厂实用工具｜BaiheAI Factory Tools",
  description: "BaiheAI Factory Tools 为中小工厂提供简单、实用、无需培训的质量与工厂管理工具。",
  alternates: { canonical: "https://www.baihediy.com/tools" },
};

const items = [
  { code:"QC-01", title:"通用智能检验记录", category:"质量检验", href:"/tools/inspection-record", status:"免费使用" },
  { code:"QC-02", title:"单产品智能验货报告", category:"验货报告", href:"/tools/inspection-report", status:"免费使用" },
  { code:"QA-01", title:"智能质量判定", category:"质量决策", href:"/tools/quality-decision", status:"免费使用" },
];

const cards = [
  {
    code:"QC-01", category:"质量检验", title:"通用智能检验记录",
    desc:"输入批量与不良数量，自动计算抽样数并判断合格 / 不合格。",
    features:["AQL 自动抽样","进料 / 过程 / 成品","自动判定结果"],
    href:"/tools/inspection-record",
    proHref:"/tools/inspection-record/pro"
  },
  {
    code:"QC-02", category:"验货报告", title:"单产品智能验货报告",
    desc:"一个产品一份报告，可录入不良与照片，并打印或保存 PDF。",
    features:["AQL 自动判定","产品 / 不良照片","打印 / 保存 PDF"],
    href:"/tools/inspection-report",
    proHref:""
  },
  {
    code:"QA-01", category:"质量决策", title:"智能质量判定",
    desc:"不只看数量，继续判断不良来源、系统性、扩散风险并给出改善方向。",
    features:["风险等级","系统性 / 偶发性","改善行动计划"],
    href:"/tools/quality-decision",
    proHref:""
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <SmartParticles />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-blue-700">
              BAIHEAI FACTORY TOOLS
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight md:text-5xl">
              工厂每天真正<span className="text-blue-600">用得上的工具</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              不做复杂 ERP，不要求培训。先免费把真实问题解决，
              当你需要长期记录、正式报告和企业自己的数据体系时，再选择专业版。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tools" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700">浏览全部工具</a>
              <Link href="/services" className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">企业定制服务</Link>
            </div>
            <div className="mt-7 text-sm text-slate-500">
              核心功能免费 <span className="mx-3 text-slate-300">•</span>
              专业版一次购买 <span className="mx-3 text-slate-300">•</span>
              企业需求可定制
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold">Factory Tools</div>
                <div className="mt-1 text-xs text-slate-500">第一批工厂实用工具</div>
              </div>
              <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">3 Tools</div>
            </div>

            <div className="mt-5 space-y-3">
              {items.map((tool,index)=>(
                <Link key={tool.code} href={tool.href} className="flex items-center gap-4 rounded-2xl border border-blue-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600">{String(index+1).padStart(2,"0")}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-bold">{tool.title}</div>
                    <div className="mt-1 text-xs text-slate-500">{tool.category}</div>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{tool.status}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-blue-600">FACTORY TOOLS</div>
          <h2 className="mt-3 text-3xl font-black">3 个工具，3 个不同层次</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            QC-01 解决“怎么抽、数量上合不合格”；QC-02 解决“怎么形成一份正式单产品验货报告”；
            QA-01 继续解决“数量超标以后，实际风险到底有多大、应该从哪里开始改善”。
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cards.map(tool=>(
            <article key={tool.code} className="flex min-h-[360px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex justify-between">
                <span className="text-xs font-bold text-slate-400">{tool.code}</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">在线可用</span>
              </div>
              <div className="mt-6 text-xs font-semibold text-blue-600">{tool.category}</div>
              <h3 className="mt-2 text-xl font-black">{tool.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{tool.desc}</p>
              <div className="mt-5 space-y-2.5">
                {tool.features.map(f=><div key={f} className="flex items-center gap-2 text-sm text-slate-700"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/>{f}</div>)}
              </div>
              <div className="mt-auto space-y-3 pt-7">
                <Link href={tool.href} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700">免费在线使用</Link>
                {tool.proHref ? (
                  <Link href={tool.proHref} className="inline-flex w-full items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-black text-amber-800 transition hover:bg-amber-100">查看 Professional Edition</Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[0.2em] text-blue-600">WHY PAY</div>
            <h2 className="mt-3 text-2xl font-black">免费版解决问题，专业版把解决方法变成企业资产</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              我们不会靠“故意限制免费功能”逼用户购买。在线免费版应该足够完成一次真实工作。
              专业版真正收费的地方，是让结果可以被保存、修改、复用、追溯和正式交付。
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-7">
              <div className="text-xs font-bold tracking-[0.15em] text-blue-700">FREE ONLINE</div>
              <h3 className="mt-2 text-xl font-black">适合：今天先把问题解决</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p>✓ 不注册也能直接用核心逻辑。</p>
                <p>✓ 用真实数据验证工具是否适合你的工作。</p>
                <p>✓ 适合临时计算、快速判断、现场参考。</p>
                <p>✓ 不需要先付费才能知道工具有没有价值。</p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-7">
              <div className="text-xs font-bold tracking-[0.15em] text-amber-700">PROFESSIONAL</div>
              <h3 className="mt-2 text-xl font-black">适合：把质量工作长期管理起来</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p>✓ Excel / 专业文件离线长期使用，数据留在自己手里。</p>
                <p>✓ 保存历史记录、正式报告和改善闭环，而不是算完一次就结束。</p>
                <p>✓ 可以修改企业自己的不良分类、参数、客户标准与流程。</p>
                <p>✓ 更适合客户验货、供应商管理、内部审核和长期追溯。</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            <b className="text-slate-900">简单说：</b>
            如果你只是偶尔需要“算一次、判断一次”，免费版就够了；
            如果这些判断会反复发生，而且需要留下证据、交给客户、交接给同事、以后还能查回来，
            那么专业版的价值就不是“多几个按钮”，而是让质量管理变得可积累。
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="rounded-3xl bg-[#0f2747] px-7 py-8 text-white md:flex md:items-center md:justify-between">
          <div>
            <div className="text-xs font-bold tracking-[0.16em] text-blue-300">ENTERPRISE CUSTOMIZATION</div>
            <h2 className="mt-2 text-xl font-bold">标准工具不够，可以按工厂流程定制。</h2>
            <p className="mt-2 text-sm text-slate-300">Logo、多语言、客户专用标准、自动报告、Dashboard、企业自己的规则库等均可定制。</p>
          </div>
          <Link href="/services" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 md:mt-0">查看定制服务</Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© 2026 BaiheAI · Factory Tools</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/terms" className="hover:text-blue-700">服务条款 Terms</Link>
            <Link href="/privacy" className="hover:text-blue-700">隐私政策 Privacy</Link>
            <Link href="/refund-policy" className="hover:text-blue-700">退款政策 Refunds</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
