import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page(){return <><Navbar/><main className="min-h-screen bg-[#030711] pt-20 text-white"><article className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24"><p className="text-xs font-bold tracking-[.28em] text-cyan-300">VISA & WORK PERMIT</p><h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">泰国工作许可：先确认“谁、为谁、做什么工作”</h1><p className="mt-6 text-lg leading-9 text-slate-400">泰国就业厅已启用 e-WorkPermit 电子系统处理外国人工作许可相关业务。企业在正式办理前，应先确认外籍人员身份、雇主主体、职位和实际工作内容。</p>
<div className="mt-12 space-y-8">
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">前期先准备这些信息</h2><div className="mt-5 space-y-3 leading-8 text-slate-300">{["申请人的护照与当前在泰身份","泰国雇主或项目主体","职位名称与实际工作内容","工作地点","公司目前人员与经营情况","是否属于 BOI 或其他特殊路径"].map(x=><p key={x}>✓ {x}</p>)}</div></section>
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">e-WorkPermit 已成为重要办理入口</h2><p className="mt-4 leading-8 text-slate-400">泰国就业厅在 2025 年 10 月启动新的 e-WorkPermit 服务，支持在线提交申请、查询状态、审批及取得工作许可等流程。实际适用范围和材料仍需根据申请类别核对。</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">签证与工作许可要一起规划</h2><p className="mt-4 leading-8 text-slate-400">工作许可与入境、居留身份之间存在配套关系。不要等人员已经开始实际工作后才处理，尤其是新设公司、BOI 项目或多人派驻时，应提前建立人员时间表。</p></section>
</div>
<div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/[.05] p-6 text-sm leading-7 text-amber-100/80">提示：不同身份、行业、项目和人员情况可能适用不同程序。本页仅提供前期整理思路，正式办理以泰国就业厅、移民部门及有关主管机构的当期要求为准。</div>
<div className="mt-10 flex flex-wrap gap-3"><a href="https://eworkpermit.doe.go.th/Home" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">e-WorkPermit 官方入口 ↗</a><Link href="/free-plan" className="rounded-xl border border-white/15 px-5 py-3 font-bold">咨询办理方向</Link></div>
</article></main><Footer/></>}
