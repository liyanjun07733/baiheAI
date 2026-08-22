import type { Metadata } from "next";
import Link from "next/link";
import SmartParticles from "../components/SmartParticles";

export const metadata: Metadata = {
  title: "BaiheAI Factory Tools｜工厂数字软件工具",
  description: "面向工厂质量、检验与生产记录的预制数字软件工具。免费在线工具 + 可下载 Professional Edition。",
  alternates: { canonical: "https://tools.baihediy.com/" },
};

const tools = [
  {
    code: "QC-01",
    title: "通用智能检验记录",
    category: "Quality Inspection",
    desc: "根据批量与 AQL 自动计算抽样数量并完成 Critical / Major / Minor 合格判定。",
    freeHref: "/tools/inspection-record",
    proHref: "/tools/inspection-record/pro",
    pro: "Professional Edition 已发布",
  },
  {
    code: "QC-02",
    title: "单产品智能验货报告",
    category: "Inspection Report",
    desc: "一个产品一份报告，录入检验结果与照片，并生成可打印的单产品验货记录。",
    freeHref: "/tools/inspection-report",
    proHref: "",
    pro: "Professional Edition 开发中",
  },
  {
    code: "QA-01",
    title: "智能质量判定",
    category: "Quality Decision",
    desc: "结合不良来源、重复性、实际影响与风险程度，对 AQL 结果进行进一步质量风险分析。",
    freeHref: "/tools/quality-decision",
    proHref: "",
    pro: "Professional Edition 开发中",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <SmartParticles />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black tracking-[0.18em] text-blue-700">
              BAIHEAI FACTORY TOOLS
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight md:text-5xl">
              为工厂日常工作准备的
              <span className="text-blue-600">数字软件工具</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              免费在线工具解决一次实际问题；Professional Edition 提供可下载、可长期保存和可离线使用的预制软件产品。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-700">
                浏览软件产品
              </a>
              <Link href="/tools/support" className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:border-blue-200 hover:text-blue-700">
                产品支持
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>✓ 预制数字软件</span>
              <span>✓ 一次购买产品</span>
              <span>✓ ZIP 数字交付</span>
              <span>✓ 本地数据保存</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="text-xs font-black tracking-[0.16em] text-blue-600">SOFTWARE CATALOG</div>
            <div className="mt-2 text-2xl font-black">Factory Software Catalog</div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              当前商店仅提供 BaiheAI 自主制作的标准化数字软件产品，不通过本商店销售咨询、营销或定制软件开发服务。
            </p>
            <div className="mt-5 space-y-3">
              {tools.map((tool) => (
                <Link key={tool.code} href={tool.freeHref} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-700">{tool.code}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-black">{tool.title}</div>
                    <div className="mt-1 text-xs text-slate-500">{tool.category}</div>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Free</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-black tracking-[0.2em] text-blue-600">PRODUCTS</div>
          <h2 className="mt-3 text-3xl font-black">免费在线版 + 可下载专业版</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            在线版本让用户先验证核心逻辑；Professional Edition 则用于长期记录、正式输出、离线使用和企业内部数据保存。
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {tools.map((tool) => (
            <article key={tool.code} className="flex min-h-[390px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-black text-slate-400">{tool.code}</div>
                  <div className="mt-1 text-xs font-bold text-blue-600">{tool.category}</div>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Free Online</span>
              </div>
              <h3 className="mt-6 text-xl font-black">{tool.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{tool.desc}</p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs font-semibold leading-6 text-slate-600">{tool.pro}</div>
              <div className="mt-auto space-y-3 pt-7">
                <Link href={tool.freeHref} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white hover:bg-blue-700">
                  免费在线使用
                </Link>
                {tool.proHref ? (
                  <Link href={tool.proHref} className="inline-flex w-full items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-black text-amber-800 hover:bg-amber-100">
                    查看 Professional Edition
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["PRE-BUILT", "预制软件产品", "产品在购买前已经开发完成，商品页会清楚说明功能、版本、价格和交付内容。"],
              ["DIGITAL DELIVERY", "数字交付", "付费产品以 ZIP Professional Package 方式交付，包含软件文件和使用说明。"],
              ["LOCAL USE", "本地长期使用", "下载后的 Excel / 本地软件由购买者保存在自己的设备中，日常数据不依赖云端账户。"],
            ].map(([eyebrow, title, text]) => (
              <div key={eyebrow} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-black tracking-[0.14em] text-blue-600">{eyebrow}</div>
                <h3 className="mt-2 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="rounded-3xl bg-[#0f2747] px-7 py-8 text-white md:px-9">
          <div className="text-xs font-black tracking-[0.16em] text-blue-300">STORE SCOPE</div>
          <h2 className="mt-2 text-xl font-black">这个商店只销售标准化数字软件产品。</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            BaiheAI Factory Tools 不通过本软件商店销售广告、营销、商业咨询、人工顾问服务或定制软件开发服务。商品页展示的价格仅对应已完成的标准软件产品和数字交付内容。
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© 2026 BaiheAI Factory Tools · Digital Software Store</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/tools/legal/terms" className="hover:text-blue-700">Terms</Link>
            <Link href="/tools/legal/privacy" className="hover:text-blue-700">Privacy</Link>
            <Link href="/tools/legal/refund-policy" className="hover:text-blue-700">Refund Policy</Link>
            <Link href="/tools/support" className="hover:text-blue-700">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
