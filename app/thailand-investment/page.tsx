import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  { n: "01", title: "租厂还是自建", desc: "先把5年的现金流、投产速度、扩产和退出成本算完。", href: "/thailand-investment/factory-rent-or-build", tag: "决策起点" },
  { n: "02", title: "工厂选址", desc: "土地价格只是第一行，电、水、污水、物流和员工才决定能不能生产。", href: "/thailand-investment/factory-location", tag: "选区域" },
  { n: "03", title: "厂房性质 / IEAT / BOI", desc: "分清园区与项目促进机制，不因为“优惠多”就默认更适合。", href: "/thailand-investment/ieat-boi-path", tag: "政策路径" },
  { n: "04", title: "签约前尽调", desc: "把销售口中的“都可以”变成能写进合同和技术附件的答案。", href: "/thailand-investment/factory-due-diligence", tag: "签约前" },
  { n: "05", title: "设计与报批", desc: "先确认用途再施工，避免建完才发现批不了、用不了。", href: "/thailand-investment/factory-design-approval", tag: "先批后建" },
  { n: "06", title: "施工现场管理", desc: "承包商、材料、夜间安保和责任边界，都是海外项目的真实压力。", href: "/thailand-investment/factory-construction-management", tag: "真实案例" },
  { n: "07", title: "设备进场与验收", desc: "吊装、电力、基础、BOI机器流程和试机节点要一起排。", href: "/thailand-investment/factory-equipment-commissioning", tag: "设备" },
  { n: "08", title: "泰国员工与班次", desc: "最低工资只是底线，真正成本是招聘、通勤、班次和人员流失。", href: "/thailand-investment/factory-thai-workforce", tag: "用工" },
  { n: "09", title: "中国员工 / Work Permit", desc: "不要拿一个“4:1”套所有项目，逐人看职位、路径和批准范围。", href: "/thailand-investment/factory-foreign-workers", tag: "外籍人员" },
  { n: "10", title: "投产与持续运营", desc: "开机不是终点，许可证、BOI/IEAT条件和人员制度要长期跑。", href: "/thailand-investment/factory-production-operations", tag: "正式生产" },
];

export default function ThailandInvestmentPage() {
  return <><Navbar/><main className="page-enter min-h-screen bg-[#f8fbff] pt-16 text-slate-950 sm:pt-20">
    <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-white via-sky-50/70 to-emerald-50/50">
      <div className="absolute left-[8%] top-[-9rem] h-96 w-96 rounded-full bg-sky-300/20 blur-[130px]"/>
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-xs font-black tracking-[.3em] text-sky-700">THAILAND FACTORY ROADMAP</p>
        <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.06] tracking-[-.04em] sm:text-6xl lg:text-7xl">中国企业去泰国建厂，<br/><span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">别从“优惠”开始，从真实项目顺序开始。</span></h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">从租厂还是自建、选址、IEAT/BOI、签约、设计施工，一直写到设备、泰国员工、中国员工和正式生产。政策是骨架，真实项目里发生过的事情才告诉你哪里最容易出问题。</p>
        <div className="mt-8 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-slate-700"><b>我们写这些，不是为了劝你不要来泰国。</b> 是希望你带着钱进来之前，先知道别人已经踩过什么坑。很多损失对公司账面也许不算大，但一件又一件没人提前告诉你的事情，才最消耗投资者的信心。</div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-xs font-black tracking-[.24em] text-emerald-700">PROJECT ROADMAP</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">一条路走到底，不再让用户在几十篇文章里找答案</h2></div>
        <p className="max-w-xl text-sm leading-7 text-slate-500">每一步先解决一个投资决策，再用真实案例、对比表和检查清单往下走。</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((step)=><Link key={step.n} href={step.href} className="group rounded-[1.75rem] border border-sky-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,.045)] transition hover:-translate-y-1 hover:border-sky-400">
          <div className="flex items-start justify-between gap-4"><span className="text-sm font-black text-sky-700">{step.n}</span><span className={`rounded-full px-3 py-1 text-xs font-black ${step.tag==="真实案例"?"bg-rose-100 text-rose-700":"bg-sky-50 text-sky-700"}`}>{step.tag}</span></div>
          <h3 className="mt-7 text-2xl font-black text-slate-950 group-hover:text-sky-800">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
        </Link>)}
      </div>
    </section>

    <section className="border-y border-rose-100 bg-rose-50/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-black tracking-[.24em] text-rose-700">REAL PROJECT EXPERIENCE</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">这些不是“注意事项”，是真正发生过以后留下的教训</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Link href="/thailand-investment/factory-construction-management" className="overflow-hidden rounded-[2rem] border border-rose-200 bg-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}<img src="/cases/thailand-investment/amata-chonburi2-theft.png" alt="春武里AMATA City Chonburi 2施工项目电缆失窃现场" className="h-56 w-full object-cover"/>
            <div className="p-6"><span className="text-xs font-black text-rose-700">施工期真实案例</span><h3 className="mt-3 text-2xl font-black leading-tight">春武里府 AMATA City Chonburi 2：钢结构、电缆失窃与施工安保空档</h3><p className="mt-3 text-sm leading-7 text-slate-600">损失不只是材料钱。最折磨项目负责人的，是返工、工期和“还有多少事我不知道”的无力感。</p></div>
          </Link>
          <Link href="/thailand-investment/factory-design-approval" className="rounded-[2rem] border border-amber-200 bg-white p-7 shadow-sm"><span className="text-xs font-black text-amber-700">用途真实案例</span><h3 className="mt-3 text-2xl font-black leading-tight">厂房前楼隔了十多个房间，准备给员工住：建完以后才开始问用途能不能批</h3><p className="mt-4 text-sm leading-7 text-slate-600">自己的厂房，不等于任何空间都能按自己的想法使用。这个问题如果在设计前问，成本和建完以后再问完全不是一个量级。</p><div className="mt-6 inline-flex rounded-xl bg-amber-50 px-4 py-2 text-sm font-black text-amber-800">看完整案例 →</div></Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-7 shadow-[0_18px_50px_rgba(14,116,144,.07)] sm:p-10">
        <p className="text-xs font-black tracking-[.24em] text-sky-700">OUR RULE</p>
        <h2 className="mt-4 max-w-5xl text-2xl font-black leading-tight text-slate-950 sm:text-3xl">政策能核实的才写成结论；具体园区的经历，就明确写成具体园区案例。</h2>
        <p className="mt-5 max-w-4xl text-[15px] font-medium leading-8 text-slate-700 sm:text-base">国家法律、IEAT规则、BOI项目条件、具体工业园运营规则、企业自己签的合同，是不同层次。我们不会再把其中一层发生的事情写成“全泰国都这样”。</p>
      </div>
    </section>
  </main><Footer/></>;
}
