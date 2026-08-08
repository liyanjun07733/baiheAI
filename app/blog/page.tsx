import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts=[
  ['Factory Audit','泰国验厂服务：工厂验厂辅导与客户委托现场验厂','既帮助工厂准备客户验厂，也支持客户无法赴泰时委托现场考察。','/factory-audit'],
  ['Factory Audit','泰国工厂客户验厂前怎么准备？','现场、资料、人员、流程与沟通的验厂前准备清单。','/blog/thailand-factory-audit-preparation'],
  ['Factory Audit','没有时间去泰国验厂怎么办？','了解客户委托当地团队进行供应商现场考察的执行方式与边界。','/blog/thailand-customer-commissioned-factory-audit'],
  ['Supplier','泰国供应商验厂看什么？','采购方考察供应商时可使用的现场检查框架。','/blog/thailand-supplier-factory-inspection-checklist'],
  ['Factory','中国企业去泰国建厂流程怎么梳理？','从前期判断、投资路径、场地到设备与投产准备。','/blog/thailand-factory-setup-process'],
  ['BOI','泰国 BOI 申请前需要判断什么？','正式申请前先把项目、设备、人员和时间计划梳理清楚。','/blog/thailand-boi-application-conditions'],
  ['Location','泰国工业园怎么选？','从客户、物流、用工、基础设施和总成本比较选址。','/blog/thailand-industrial-estate-selection-guide'],
  ['Risk','中国企业投资泰国常见风险','建厂与落地前重点检查信息、场地、审批、合作与时间风险。','/blog/thailand-investment-risks'],
  ['Guide','中国企业投资泰国第一次考察清单','第一次赴泰考察前应准备的项目、场地、政策与决策信息。','/blog/chinese-company-thailand-investment-guide'],
  ['Company','泰国公司注册流程与材料清单','公司注册条件、股东董事资料、注册流程及后续税务与社保前期梳理。','/blog/thailand-company-registration-guide'],
  ['Work Permit','泰国 Non-B 与 Work Permit 办理指南','雇主资质、员工材料、WP3、Non-B 申请与入境后的工作许可流程。','/blog/thailand-non-b-work-permit-guide'],
  ['Thailand','中国企业进入泰国前，先把这 6 个问题想清楚','从行业、客户、投资方式、场地、人员到本地资源，建立第一轮判断框架。','/policies'],
  ['BOI','BOI 项目应该怎样做前期判断？','先准备哪些企业与项目资料，哪些问题适合在正式申请前确认。','/policies'],
  ['Factory','在泰国找厂房前需要准备什么？','区域、面积、用电、物流、人员和预算，是进入场地筛选前最基本的信息。','/policies'],
  ['Visa','人员赴泰工作前要梳理哪些问题？','身份、职位、公司情况与实际工作安排需要一起考虑。','/policies'],
  ['AI Growth','AI 如何帮助企业承接海外客户？','从多语言官网、内容、询盘入口、客服和自动化理解数字化获客。','/services'],
  ['Download','免费资料：泰国项目落地清单','不确定从哪里开始时，可以先下载清单整理项目。','/resources']
];
export default function BlogPage(){return <><Navbar/><main className="page-enter min-h-screen bg-[#030711] pt-16 text-white sm:pt-20"><section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8"><p className="text-xs font-bold tracking-[.32em] text-cyan-300">INSIGHTS / 知识中心</p><div className="mt-6 grid items-end gap-6 lg:grid-cols-[1fr_.45fr]"><h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">把复杂的出海问题，<br/><span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">讲清楚，也做成工具。</span></h1><p className="leading-8 text-slate-400">政策文章、项目清单、实操框架与 AI 出海经验持续更新。政策类内容会标注核对日期与官方来源。</p></div><div className="mt-8 flex flex-wrap gap-3"><Link href="/policies" className="rounded-xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-bold transition hover:border-cyan-400/40">政策操作中心</Link><Link href="/resources" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-bold">免费资料下载</Link></div></section><section className="mx-auto grid max-w-7xl gap-4 px-5 pb-24 sm:px-6 md:grid-cols-2 lg:px-8">{posts.map(([tag,title,desc,href],i)=><Link key={title} href={href} className="glass-card hover-lift group rounded-3xl p-6 sm:p-8"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">{tag}</span><span className="text-sm text-slate-600">0{i+1}</span></div><h2 className="mt-10 text-2xl font-black leading-snug sm:text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-400">{desc}</p><span className="mt-8 inline-flex text-sm font-bold text-white transition group-hover:translate-x-1 group-hover:text-cyan-300">查看内容 →</span></Link>)}</section></main><Footer/></>}
