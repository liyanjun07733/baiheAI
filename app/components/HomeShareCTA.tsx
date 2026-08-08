import Link from "next/link";

export default function HomeShareCTA() {
  return (
    <section className="border-y border-white/5 bg-cyan-400/[0.025] py-12 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">Quick Entry</p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">第一次了解 BaiheAI？从这里快速开始</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">核心服务、顾问、免费政策资料和咨询入口集中在一个页面，方便查看和转发。</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/consultation?from=home-share" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-black text-white transition hover:scale-[1.02]">1 分钟需求诊断 →</Link>
          <Link href="/start" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 font-black text-cyan-200 transition hover:border-cyan-400/35">快速服务入口</Link>
        </div>
      </div>
    </section>
  );
}
