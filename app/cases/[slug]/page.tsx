import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { cases } from "../../data/cases";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const sections = [
    ["项目背景 / 挑战", item.challenge],
    ["BaiheAI 解决路径", item.solution],
    ["项目成果", item.result],
  ] as const;

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-32 sm:px-6 md:pt-40">
        <Link href="/cases" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">← 返回案例中心</Link>
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[2px] text-gray-400">
          {item.isDemo && <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-2 text-amber-200/80">方法示例</span>}
          <span className="rounded-full border border-white/10 px-3 py-2">{item.industry}</span>
          <span className="rounded-full border border-white/10 px-3 py-2">{item.market}</span>
          {item.location && <span className="rounded-full border border-white/10 px-3 py-2">{item.location}</span>}
          {item.projectPeriod && <span className="rounded-full border border-white/10 px-3 py-2">{item.projectPeriod}</span>}
        </div>
        <h1 className="mt-6 max-w-5xl break-words text-4xl font-black leading-tight sm:text-5xl md:text-6xl">{item.title}</h1>
        {item.clientName && <p className="mt-4 text-sm font-semibold text-cyan-300">客户：{item.clientName}</p>}
        <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-400">{item.summary}</p>
        {item.services && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.services.map((service) => <span key={service} className="rounded-full border border-cyan-500/15 bg-cyan-500/[0.05] px-3 py-2 text-xs text-cyan-200">{service}</span>)}
          </div>
        )}
      </section>

      {item.cover && (
        <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-6">
          <img src={item.cover} alt={item.title} className="max-h-[620px] w-full rounded-3xl border border-white/10 object-cover" />
        </section>
      )}

      {item.metrics && item.metrics.length > 0 && (
        <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {item.metrics.map((metric) => (
            <div key={`${metric.label}-${metric.value}`} className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.05] p-5">
              <p className="text-2xl font-black text-cyan-300">{metric.value}</p>
              <p className="mt-2 text-sm text-gray-400">{metric.label}</p>
            </div>
          ))}
        </section>
      )}

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-10 sm:px-6">
        {sections.map(([title, items]) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <h2 className="text-2xl font-black">{title}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {items.map((text) => (
                <div key={text} className="flex min-w-0 gap-3 rounded-2xl border border-white/5 bg-black/30 p-4 text-gray-300">
                  <span className="mt-1 shrink-0 text-cyan-400">✓</span><span className="break-words leading-7">{text}</span>
                </div>
              ))}
            </div>
          </article>
        ))}

        {item.gallery && item.gallery.length > 0 && (
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <h2 className="text-2xl font-black">项目图片</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {item.gallery.map((src, index) => <img key={`${src}-${index}`} src={src} alt={`${item.title} ${index + 1}`} className="aspect-[16/10] w-full rounded-2xl object-cover" />)}
            </div>
          </article>
        )}

        {item.note && <p className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.05] p-4 text-sm leading-7 text-amber-100/70">{item.note}</p>}
        <div className="flex flex-col gap-3 py-6 sm:flex-row">
          <Link href="/free-plan" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center font-bold">咨询类似项目</Link>
          <Link href="/services" className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center font-bold text-gray-200">查看全部服务</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
