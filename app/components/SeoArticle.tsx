import Link from "next/link";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type SeoArticleProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  note?: string;
};

const relatedLinks = [
  {
    title: "泰国投资咨询",
    desc: "先梳理投资、BOI、公司落地与建厂前期问题。",
    href: "/thailand-investment",
  },
  {
    title: "泰国落地指南",
    desc: "继续查看 BOI、公司注册、工业园区与工作许可专题。",
    href: "/guides",
  },
  {
    title: "资料下载",
    desc: "查看网站现有的政策与项目资料，方便内部评估。",
    href: "/resources",
  },
];

export default function SeoArticle({ eyebrow, title, intro, sections, note }: SeoArticleProps) {
  return (
    <article className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/45">
        <Link href="/" className="transition hover:text-blue-300">首页</Link>
        <span>/</span>
        <Link href="/content-center" className="transition hover:text-blue-300">内容中心</Link>
        <span>/</span>
        <span className="max-w-[70vw] truncate text-white/65">{title}</span>
      </nav>

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{title}</h1>
      <p className="mt-6 text-lg leading-8 text-white/65">{intro}</p>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/start"
          className="rounded-full border border-blue-400/30 bg-blue-500/[0.08] px-4 py-2 font-semibold text-blue-200 transition hover:border-blue-300/60"
        >
          企业落地入口
        </Link>
        <Link
          href="/free-plan"
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-semibold text-white/70 transition hover:border-blue-300/40 hover:text-white"
        >
          获取免费方案
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-semibold text-white/70 transition hover:border-blue-300/40 hover:text-white"
        >
          查看服务
        </Link>
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-4 leading-8 text-white/60">{p}</p>
            ))}
            {section.bullets && (
              <ul className="mt-5 space-y-3 text-white/60">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-1 text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {note && (
        <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5 text-sm leading-7 text-amber-100/80">
          {note}
        </div>
      )}

      <section className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">RELATED</p>
        <h2 className="mt-2 text-2xl font-bold">继续查看相关内容</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-blue-500/[0.05]"
            >
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{item.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-300">查看 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-blue-500/30 bg-blue-500/[0.08] p-6 md:p-8">
        <p className="text-sm font-semibold text-blue-300">NEXT STEP</p>
        <h2 className="mt-2 text-2xl font-bold">准备进入泰国市场？先把关键问题梳理清楚</h2>
        <p className="mt-3 max-w-2xl leading-7 text-white/60">
          BaiheAI 可协助企业梳理泰国投资、建厂前期、BOI 方向、公司落地、商务支持与 AI 获客需求，再根据项目阶段安排下一步。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/start" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
            开始项目梳理
          </Link>
          <Link href="/free-plan" className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-blue-400/50">
            获取免费方案
          </Link>
          <Link href="/content-center" className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-blue-400/50">
            返回内容中心
          </Link>
        </div>
      </section>
    </article>
  );
}
