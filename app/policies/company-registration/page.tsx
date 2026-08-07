import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page(){return <><Navbar/><main className="min-h-screen bg-[#030711] pt-20 text-white"><article className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24"><p className="text-xs font-bold tracking-[.28em] text-cyan-300">THAILAND COMPANY</p><h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">泰国公司设立：注册之前先把经营边界想清楚</h1><p className="mt-6 text-lg leading-9 text-slate-400">泰国商业发展厅 DBD 负责企业登记，并负责外国企业经营相关管理。对中国企业而言，前期最重要的是把“准备注册什么公司”与“实际要做什么业务”对应起来。</p>
<div className="mt-12 space-y-8">
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">注册前建议先确认 6 个问题</h2><div className="mt-5 space-y-3 leading-8 text-slate-300">{["实际主营业务是什么","客户在泰国还是海外","股东与出资安排如何设计","是否涉及外国企业经营限制","是否需要工厂、仓库或特定场地","后续是否需要聘用外籍员工"].map(x=><p key={x}>✓ {x}</p>)}</div></section>
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">不要把“公司注册完成”等同于“所有业务都可以做”</h2><p className="mt-4 leading-8 text-slate-400">不同业务可能涉及不同监管、许可或外国人经营限制。公司名称、目标、业务范围和实际经营方式需要一起核对，而不是只完成法人登记。</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">DBD 已提供数字化企业登记入口</h2><p className="mt-4 leading-8 text-slate-400">DBD Biz Regist 提供有限公司等法人设立及相关登记服务。具体使用条件、身份验证、文件和流程请以官方系统当期说明为准。</p></section>
</div>
<div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/[.05] p-6 text-sm leading-7 text-amber-100/80">提示：涉及外资比例、Foreign Business Act、许可证、税务、土地或特定行业监管时，应让相应专业机构参与确认。</div>
<div className="mt-10 flex flex-wrap gap-3"><a href="https://edbr.dbd.go.th/" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">DBD Biz Regist ↗</a><Link href="/free-plan" className="rounded-xl border border-white/15 px-5 py-3 font-bold">项目咨询</Link></div>
</article></main><Footer/></>}
