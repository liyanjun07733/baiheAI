import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export type CompareRow = { label: string; values: string[] };
export type InfoBlock = { title: string; paragraphs: string[]; bullets?: string[] };
export type SourceItem = { label: string; href: string };
export type CaseBlock = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  note?: string;
};

export type InvestmentArticleData = {
  step: string;
  kicker: string;
  title: string;
  deck: string;
  opening?: string[];
  compare?: { title: string; note?: string; columns: string[]; rows: CompareRow[] };
  blocks?: InfoBlock[];
  caseBlock?: CaseBlock;
  checklist?: { title: string; intro?: string; items: string[] };
  takeaway: { title: string; text: string };
  sources?: SourceItem[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

function CompareTable({ data }: { data: NonNullable<InvestmentArticleData["compare"]> }) {
  return (
    <section className="mt-12 rounded-[2rem] border border-sky-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.06)] sm:p-8">
      <p className="text-xs font-black tracking-[.24em] text-sky-700">DECISION TABLE</p>
      <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">{data.title}</h2>
      {data.note ? <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{data.note}</p> : null}

      <div className="mt-6 hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
        <div className="grid" style={{ gridTemplateColumns: `1.05fr repeat(${data.columns.length}, minmax(0, 1fr))` }}>
          <div className="bg-sky-50 p-4 text-sm font-black text-slate-800">对比维度</div>
          {data.columns.map((column) => <div key={column} className="border-l border-slate-200 bg-sky-50 p-4 text-sm font-black text-slate-800">{column}</div>)}
          {data.rows.flatMap((row) => [
            <div key={`${row.label}-label`} className="border-t border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-800">{row.label}</div>,
            ...row.values.map((value, index) => <div key={`${row.label}-${index}`} className="border-l border-t border-slate-200 p-4 text-sm leading-7 text-slate-600">{value}</div>)
          ])}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:hidden">
        {data.columns.map((column, columnIndex) => (
          <div key={column} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <h3 className="text-lg font-black text-sky-800">{column}</h3>
            <div className="mt-4 space-y-3">
              {data.rows.map((row) => (
                <div key={row.label} className="border-t border-slate-200 pt-3 first:border-0 first:pt-0">
                  <p className="text-xs font-black text-slate-500">{row.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{row.values[columnIndex]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RealCase({ data }: { data: CaseBlock }) {
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 shadow-[0_20px_60px_rgba(127,29,29,.06)]">
      <div className="p-6 sm:p-9">
        <p className="text-xs font-black tracking-[.24em] text-rose-700">{data.eyebrow || "REAL PROJECT CASE"}</p>
        <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{data.title}</h2>
        <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-700 sm:text-base">
          {data.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>

        {data.image ? (
          <figure className="mt-7 overflow-hidden rounded-2xl border border-rose-100 bg-white p-2 sm:p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.image}
              alt={data.imageAlt || data.title}
              className="block h-auto w-full rounded-xl object-contain"
            />
            <figcaption className="px-2 pb-1 pt-3 text-xs leading-6 text-slate-500">
              真实项目现场图片。图片保持原始比例展示，不做裁切。
            </figcaption>
          </figure>
        ) : null}

        {data.bullets?.length ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {data.bullets.map((item) => <div key={item} className="rounded-2xl border border-rose-100 bg-white/90 p-4 text-sm font-bold leading-6 text-slate-700">{item}</div>)}
          </div>
        ) : null}

        {data.note ? <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-6 text-slate-700">{data.note}</p> : null}
      </div>
    </section>
  );
}

export default function InvestmentArticle({ data }: { data: InvestmentArticleData }) {
  return (
    <>
      <Navbar />
      <main className="page-enter min-h-screen bg-[#f8fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-white via-sky-50/60 to-emerald-50/40">
          <div className="absolute left-[6%] top-[-8rem] h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />
          <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <Link href="/thailand-investment" className="text-sm font-bold text-sky-700 hover:underline">← 返回泰国建厂闭环</Link>
            <div className="mt-8 max-w-5xl">
              <div className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-black tracking-[.18em] text-sky-700">STEP {data.step} · {data.kicker}</div>
              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-.035em] sm:text-5xl lg:text-6xl">{data.title}</h1>
              <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">{data.deck}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
          {data.opening?.length ? (
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,.05)] sm:p-9">
              <p className="text-xs font-black tracking-[.24em] text-emerald-700">从投资者的角度说</p>
              <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate-700 sm:text-base">
                {data.opening.map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>
          ) : null}

          {data.compare ? <CompareTable data={data.compare} /> : null}
          {data.caseBlock ? <RealCase data={data.caseBlock} /> : null}

          {data.blocks?.map((block) => (
            <section key={block.title} className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-9">
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">{block.title}</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-700 sm:text-base">
                {block.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              {block.bullets?.length ? <div className="mt-6 grid gap-3 sm:grid-cols-2">{block.bullets.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-700">✓ {item}</div>)}</div> : null}
            </section>
          ))}

          {data.checklist ? (
            <section className="mt-12 rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-6 sm:p-9">
              <p className="text-xs font-black tracking-[.24em] text-emerald-700">CHECKLIST</p>
              <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">{data.checklist.title}</h2>
              {data.checklist.intro ? <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{data.checklist.intro}</p> : null}
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {data.checklist.items.map((item, i) => <div key={item} className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm font-bold leading-6 text-slate-700"><span className="mr-2 text-emerald-600">{String(i + 1).padStart(2, "0")}</span>{item}</div>)}
              </div>
            </section>
          ) : null}

          <section className="mt-12 rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-7 shadow-[0_18px_50px_rgba(14,116,144,.06)] sm:p-10">
            <p className="text-xs font-black tracking-[.24em] text-sky-700">THE POINT</p>
            <h2 className="mt-4 text-2xl font-black text-slate-950 sm:text-3xl">{data.takeaway.title}</h2>
            <p className="mt-4 max-w-4xl text-base font-medium leading-8 text-slate-700">{data.takeaway.text}</p>
          </section>

          {data.sources?.length ? (
            <section className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-sm font-black text-slate-900">政策核实来源</h2>
              <p className="mt-2 text-xs leading-6 text-slate-500">政策会调整。本文只把官方资料能支持的部分写成结论；具体项目仍应以主管机关、园区及书面批复为准。</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-sky-700 hover:border-sky-300">{source.label} ↗</a>)}
              </div>
            </section>
          ) : null}

          <nav className="mt-12 grid gap-4 sm:grid-cols-2">
            {data.prev ? <Link href={data.prev.href} className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-slate-800 hover:border-sky-300">← {data.prev.label}</Link> : <div />}
            {data.next ? <Link href={data.next.href} className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-right font-black text-white">{data.next.label} →</Link> : null}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
