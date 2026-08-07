import Link from "next/link";
const items=[
  ["泰国 BOI 申请", "/guides/thailand-boi-application"],
  ["泰国注册公司", "/guides/thailand-company-registration"],
  ["泰国建厂", "/guides/thailand-factory-setup"],
  ["泰国工业园区", "/guides/thailand-industrial-estate"],
  ["泰国工作证", "/guides/thailand-work-permit"],
];
export default function SearchGuides(){return <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8"><div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-6 sm:p-9"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">POPULAR SEARCH GUIDES</p><h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">客户常搜的泰国落地问题</h2><p className="mt-3 max-w-2xl leading-7 text-gray-400">从搜索问题直接进入专题指南，再连接到资料、顾问和咨询入口。</p></div><Link href="/guides" className="text-sm font-bold text-cyan-300">查看全部指南 →</Link></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{items.map(([name,href])=><Link key={href} href={href} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 font-semibold text-gray-200 transition hover:border-cyan-400/40 hover:text-cyan-200">{name}<span className="mt-2 block text-xs text-gray-500">查看指南 →</span></Link>)}</div></div></section>}
