import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { cases } from "../data/cases";

export default function CasesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-6 md:pt-40">
        <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">CASE STUDIES</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">项目案例与落地方法</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
          展示 BaiheAI 在泰国市场进入、项目落地、AI 数字化与海外获客方向的方法与案例。真实客户信息仅在获得授权后公开。
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 sm:px-6 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((item, index) => (
          <Link
            key={item.slug}
            href={`/cases/${item.slug}`}
            className="group min-w-0 rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white/[0.055]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">CASE {String(index + 1).padStart(2, "0")}</span>
              <div className="flex flex-wrap gap-2">
                {item.isDemo && <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1 text-xs text-amber-200/80">方法示例</span>}
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">{item.market}</span>
              </div>
            </div>
            {item.cover && <img src={item.cover} alt={item.title} className="mt-5 aspect-[16/10] w-full rounded-2xl object-cover" />}
            <h2 className="mt-6 break-words text-2xl font-black leading-tight">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{item.industry}</p>
            <p className="mt-5 break-words leading-7 text-gray-400">{item.summary}</p>
            {item.services && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.services.slice(0, 4).map((service) => (
                  <span key={service} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-xs text-gray-400">{service}</span>
                ))}
              </div>
            )}
            <div className="mt-7 text-sm font-bold text-cyan-300 transition group-hover:translate-x-1">查看项目详情 →</div>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
