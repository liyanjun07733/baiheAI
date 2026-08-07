import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type GuidePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: Section[];
  keywords: string[];
  officialLinks?: { label: string; href: string }[];
};

export default function GuidePage({
  eyebrow,
  title,
  intro,
  updated = "2026年8月",
  sections,
  keywords,
  officialLinks = [],
}: GuidePageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-cyan-500/[0.08] to-white/[0.02] p-6 sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">{eyebrow}</p>
          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {keywords.map((item) => (
              <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200 sm:text-sm">{item}</span>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-500">内容更新：{updated} · 具体项目以泰国主管机关最新规定和个案条件为准。</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-5 px-5 pb-16 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-sm font-black text-cyan-300">{index + 1}</span>
              <div className="min-w-0">
                <h2 className="text-xl font-black sm:text-2xl">{section.title}</h2>
                {section.paragraphs?.map((p) => <p key={p} className="mt-4 leading-8 text-gray-300">{p}</p>)}
                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-gray-300">
                    {section.bullets.map((b) => <li key={b} className="flex gap-3"><span className="mt-1 text-cyan-300">✓</span><span className="leading-7">{b}</span></li>)}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {officialLinks.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-300/15 bg-amber-300/[0.05] p-6 sm:p-8">
            <h2 className="text-xl font-black">官方信息核对入口</h2>
            <p className="mt-3 leading-7 text-gray-400">政策、资格、表格和办理地点可能调整。实际办理前建议再次核对主管机关最新信息。</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {officialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-cyan-300 hover:border-cyan-400/40">{link.label} ↗</a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-blue-600/15 to-cyan-500/10 p-7 text-center sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">NEXT STEP</p>
          <h2 className="mt-4 text-2xl font-black sm:text-4xl">准备进入泰国市场？先把项目情况梳理清楚</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">可以先查看免费资料，也可以提交项目情况，让顾问根据行业、投资方式、人员安排和落地需求进行初步梳理。</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/resources" className="rounded-xl border border-white/15 px-6 py-3 font-bold text-white hover:border-cyan-400/50">查看免费资料</Link>
            <Link href="/free-plan" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold text-white">提交项目需求</Link>
          </div>
          <Link href="/guides" className="mt-6 inline-block text-sm text-gray-400 hover:text-cyan-300">← 返回泰国投资指南</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
