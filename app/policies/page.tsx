import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const topics = [
  {tag:"BOI 2026", title:"BOI 投资促进：先判断项目是否值得申请", desc:"从行业、产品、工艺、投资规模、设备与人员计划开始梳理，再结合当期 BOI 活动类别和优惠条件判断方向。", href:"/policies/boi-2026"},
  {tag:"COMPANY", title:"泰国公司设立与外国企业经营边界", desc:"先把股东、业务范围、实际经营方式和是否涉及外国人经营限制梳理清楚，再进入注册与许可步骤。", href:"/policies/company-registration"},
  {tag:"WORK PERMIT", title:"签证与工作许可：先确认人员身份和工作安排", desc:"根据人员身份、职位、公司情况与实际工作安排确认路径；工作许可相关事项应以泰国就业厅当期系统与要求为准。", href:"/policies/work-permit"},
];

export default function PoliciesPage(){return <><Navbar/><main className="page-enter min-h-screen bg-[#030711] pt-16 text-white sm:pt-20">
<section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8"><p className="text-xs font-bold tracking-[.32em] text-cyan-300">POLICY & OPERATIONS</p><h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">政策不只要“看懂”，<br/><span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">更要知道下一步怎么做。</span></h1><p className="mt-6 max-w-3xl leading-8 text-slate-400">这里整理泰国投资、公司设立、BOI、签证和工作许可等实操内容。政策会持续更新，办理前仍应以主管部门当期规则为准。</p></section>
<section className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 sm:px-6 lg:grid-cols-3 lg:px-8">{topics.map((item,i)=><Link href={item.href} key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/[.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[.05]"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">{item.tag}</span><span className="text-sm text-slate-600">0{i+1}</span></div><h2 className="mt-8 text-2xl font-black leading-snug">{item.title}</h2><p className="mt-4 leading-8 text-slate-400">{item.desc}</p><span className="mt-7 inline-flex text-sm font-bold text-cyan-300">阅读全文 →</span></Link>)}</section>
<section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8"><div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-blue-600/15 to-cyan-400/5 p-7 sm:p-9"><p className="text-cyan-300">FREE KNOWLEDGE</p><h2 className="mt-4 text-3xl font-black">配合免费资料一起使用</h2><p className="mt-4 max-w-3xl leading-8 text-slate-400">阅读政策后，可以进入资料中心下载清单、模板和项目准备资料，用于内部讨论和前期整理。</p><Link href="/resources" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 font-bold text-slate-950">进入资料中心 →</Link></div></section>
</main><Footer/></>}
