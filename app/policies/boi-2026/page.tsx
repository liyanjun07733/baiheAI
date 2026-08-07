import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page(){return <><Navbar/><main className="min-h-screen bg-[#030711] pt-20 text-white"><article className="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-24"><p className="text-xs font-bold tracking-[.28em] text-cyan-300">BOI · 2026 GUIDE</p><h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">泰国 BOI：企业前期应该先判断什么？</h1><p className="mt-6 text-lg leading-9 text-slate-400">BOI 官方已经发布 2026 Investment Promotion Guide，同时持续发布新的投资促进措施和活动类别调整。企业在准备申请前，最重要的不是先做材料，而是先把项目本身梳理清楚。</p>
<div className="mt-12 space-y-8">
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">第一步：把项目基本信息做成一张表</h2><div className="mt-5 space-y-3 leading-8 text-slate-300">{["产品或服务到底是什么","主要生产工艺或技术流程","计划投资金额与设备清单","厂房或办公地点的预期区域","预计用工人数及外籍人员安排","项目客户、供应链及出口方向"].map(x=><p key={x}>✓ {x}</p>)}</div></section>
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">第二步：核对是否属于可促进活动</h2><p className="mt-4 leading-8 text-slate-400">BOI 的优惠并不是所有企业都自动适用。需要结合当期活动类别、项目条件、技术要求、投资门槛及其他标准进行判断。2026 年 BOI 仍在发布新的公告和对既有活动清单进行调整，因此不要只依赖旧版中文资料。</p></section>
<section className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><h2 className="text-2xl font-black">第三步：再决定是否进入申请准备</h2><p className="mt-4 leading-8 text-slate-400">如果初步匹配，再进一步准备公司资料、项目说明、财务数据、设备与工艺资料等。具体所需资料取决于项目类别和主管部门要求。</p></section>
</div>
<div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/[.05] p-6 text-sm leading-7 text-amber-100/80">提示：本页用于项目方向梳理，不构成法律、税务或官方审批意见。正式申请前应以 BOI 当期公告和主管部门要求为准。</div>
<div className="mt-10 flex flex-wrap gap-3"><a href="https://www.boi.go.th/index.php?language=en&page=guides" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">BOI 官方指南 ↗</a><Link href="/resources" className="rounded-xl border border-white/15 px-5 py-3 font-bold">下载项目清单</Link></div>
</article></main><Footer/></>}
