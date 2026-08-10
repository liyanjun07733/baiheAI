import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "泰国工厂选址：便宜的地，为什么最后可能最贵？｜BaiheAI",
  description: "从园区外、IEAT工业园、BOI项目三个层面，比较泰国建厂选址的土地、基础设施、限制、风险与投产确定性，并结合真实施工案例说明。",
  alternates: { canonical: "https://www.baihediy.com/thailand-investment/factory-location" },
};

const compareRows = [
  ["核心逻辑", "更多事情自己核实、自己协调", "进入IEAT工业园的管理与基础设施体系", "针对符合条件的投资活动申请促进"],
  ["用地成本", "有机会更低，但区域差异很大", "园区化工业土地通常包含更多配套与管理条件", "BOI本身不决定土地市场价格"],
  ["基础设施", "电、水、污水、道路要逐项确认", "IEAT工业园体系强调道路、排水、污水处理、防洪、电力、供水等配套", "取决于项目最终选址"],
  ["限制", "灵活度可能更高，但不确定性也更高", "园区有土地使用、环境、安全与运营管理规则", "获批后需持续符合受促进项目条件"],
  ["最大风险", "地便宜，但后面很多问题要自己补", "以为“进园区就什么都不用管”", "只看到优惠，没有算条件与持续合规"],
  ["更适合", "本地资源成熟、工艺相对简单、能自己处理配套", "重视基础设施与项目确定性的制造企业", "本身符合促进活动且优惠真的对项目有价值"],
];

const checks = [
  ["土地 / 厂房用途", "这里到底允许做什么工业活动？以后扩建、仓储、办公怎么安排？"],
  ["电力", "不是问“有没有电”，而是当前容量多少、能否增容、要多久。"],
  ["水与污水", "生产废水能不能接？是否需要企业自己预处理？"],
  ["道路与物流", "40尺柜、大型设备能否顺利进出？雨季有没有明显积水风险？"],
  ["厂房结构", "层高、柱距、地坪承重是否适合你的设备？"],
  ["消防与特殊工艺", "现有条件能不能覆盖你的实际工艺，而不是只看“有消防”。"],
  ["扩建空间", "两年后产能翻倍，还有没有地和基础设施余量？"],
  ["员工通勤", "附近招不招得到人？夜班、通勤车、宿舍怎么处理？"],
  ["园区性质", "General Industrial Zone 与 I-EA-T Free Zone 不要混为一谈。"],
  ["BOI必要性", "先判断项目是否符合、是否值得，再谈优惠。"],
];

export default function FactoryLocationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <Link href="/thailand-investment" className="text-sm font-black text-sky-700">← 返回泰国建厂闭环</Link>
            <p className="mt-8 text-xs font-black tracking-[.24em] text-sky-600">STEP 02 · FACTORY LOCATION</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">泰国工厂选址：<br /><span className="text-sky-600">便宜的地，为什么最后可能最贵？</span></h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">第一次来看地，大家最容易先问“一莱多少钱”。但真正把项目拖贵的，往往不是土地，而是电、水、污水、审批、物流、人员和后续改造。</p>
            <div className="mt-7 rounded-2xl border-l-4 border-sky-500 bg-sky-50 px-5 py-4 font-bold leading-7 text-slate-700">我现在更愿意先问老板一句：你买的是一块便宜的地，还是一个能按时投产的工厂？</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">先把三个选择放在桌面上</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-600">IEAT和BOI不是三个互斥选项中的两个。IEAT更接近“工业园区与园区管理”，BOI更接近“你的投资活动是否获得促进”。现实中完全可能同时存在。</p>

          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-sky-100 bg-white md:grid md:grid-cols-[.9fr_repeat(3,1.2fr)]">
            <div className="bg-sky-50 p-4 font-black">对比维度</div><div className="bg-sky-50 p-4 font-black">园区外</div><div className="bg-sky-50 p-4 font-black">IEAT工业园</div><div className="bg-sky-50 p-4 font-black">BOI项目</div>
            {compareRows.flatMap((row) => row.map((cell, index) => <div key={`${row[0]}-${index}`} className={`${index === 0 ? "bg-slate-50 font-black" : "bg-white"} border-t border-slate-100 p-4 text-sm leading-7 text-slate-700`}>{cell}</div>))}
          </div>

          <div className="mt-6 grid gap-4 md:hidden">
            {[1,2,3].map((col) => <div key={col} className="rounded-3xl border border-sky-100 bg-white p-5"><h3 className="text-xl font-black text-sky-700">{["", "园区外", "IEAT工业园", "BOI项目"][col]}</h3><div className="mt-4 space-y-3">{compareRows.map((row) => <div key={row[0]} className="border-t border-slate-100 pt-3"><b className="text-sm text-slate-950">{row[0]}</b><p className="mt-1 text-sm leading-6 text-slate-600">{row[col]}</p></div>)}</div></div>)}
          </div>

          <section className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8"><p className="text-xs font-black tracking-[.18em] text-slate-500">园区外</p><h2 className="mt-3 text-2xl font-black">最大的优势是自由，最大的风险也是自由。</h2><p className="mt-4 leading-8 text-slate-700">如果企业已经有成熟本地资源，知道电、水、污水、审批怎么解决，园区外完全可能更划算。但第一次进入泰国、又没有本地执行能力时，很多“便宜”会在后面以时间和追加工程的方式补回来。</p></div>
            <div className="rounded-[2rem] border border-blue-100 bg-blue-50/60 p-6 sm:p-8"><p className="text-xs font-black tracking-[.18em] text-blue-700">IEAT</p><h2 className="mt-3 text-2xl font-black">你买的不只是地，还有一套工业园区体系。</h2><p className="mt-4 leading-8 text-slate-700">IEAT官方把工业园描述为集中工业厂房，并配置道路、排水、中央污水处理、防洪、电力、供水等设施的区域，同时负责园区内审批、环境与安全管理。</p></div>
          </section>

          <section className="mt-12 rounded-[2rem] border border-red-200 bg-red-50/70 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700">真实项目经历</span><span className="text-sm font-bold text-slate-500">AMATA City Chonburi 2 · Ban Bueng 一带施工项目</span></div>
            <h2 className="mt-4 text-3xl font-black">园区有保安，不等于你的工地有人守。</h2>
            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>我们当时在这个项目现场遇到的管理要求是：施工单位不能自行安排自己的保安人员在园区工地夜间驻守。后来项目发生电缆被盗，从变压器到低压柜的一段电缆被剪走，真正麻烦的不只是材料费，而是重新采购、重新施工和后续工序一起等。</p>
              <p>更现实的问题是：建筑公司的保安不能自己留下守工地，但园区公共区域的安保也不会当然替施工方承担工地内部材料损失。这个“安保空档”，如果签约和进场前没人问，往往是出了事才意识到。</p>
              <p className="font-bold text-slate-950">所以现在再看园区，我们不会只问“有没有24小时保安”，而会继续问：施工期谁能守夜？材料区谁负责？园区保安负责公共区域还是厂区内部？正式投产后的保安是否必须使用指定服务商？这些要求必须针对具体园区逐项确认。</p>
            </div>
            <div className="mt-6 rounded-2xl border border-red-200 bg-white/80 p-4 text-sm leading-7 text-slate-600"><b>重要说明：</b>上面是我们在这个具体项目中遇到的现场管理要求，不代表泰国所有IEAT园区、所有AMATA项目或其他工业园都执行相同规则。不同园区的运营规定可能不同，正式决策前应向具体园区和合同文件核实。</div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">第一次看厂址，我建议先查这 10 项</h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">这不是“咨询话术”，而是可以拿着手机到现场直接问的清单。</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {checks.map(([title, desc], i) => <div key={title} className="rounded-2xl border border-sky-100 bg-white p-5"><div className="flex items-start gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-sky-100 text-xs font-black text-sky-700">{i+1}</span><div><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p></div></div></div>)}
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] border border-sky-100 bg-white p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-sky-600">政策核实</p>
            <h2 className="mt-3 text-2xl font-black">这里用到的政策结论，我们只保留官方能支撑的部分。</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              <p>• IEAT官方说明工业园包含道路、排水、中央污水处理、防洪、电力、供水等基础设施，并承担园区审批、环境、安全与土地使用管理职责。</p>
              <p>• IEAT官方把园区划分为 General Industrial Zone 与 I-EA-T Free Zone，两者不能简单写成“IEAT都免税”。</p>
              <p>• BOI官方的土地权益针对获促进项目，并需要按Section 27申请适量土地，不是拿到BOI后可以无限制买地。</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-black text-sky-700">
              <a href="https://www.ieat.go.th/en/roles-responsibilities" target="_blank" rel="noreferrer" className="rounded-xl bg-sky-50 px-4 py-2">IEAT职责与工业园定义 ↗</a>
              <a href="https://www.ieat.go.th/en/types-of-industrial-zone" target="_blank" rel="noreferrer" className="rounded-xl bg-sky-50 px-4 py-2">IEAT园区类型 ↗</a>
              <a href="https://www.boi.go.th/index.php?language=en&page=procedures_land" target="_blank" rel="noreferrer" className="rounded-xl bg-sky-50 px-4 py-2">BOI土地权益 ↗</a>
            </div>
          </section>

          <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-slate-950 to-blue-950 p-7 text-white sm:p-9"><p className="text-xs font-black tracking-[.18em] text-cyan-300">NEXT STEP 03</p><h2 className="mt-3 text-3xl font-black">签土地或厂房合同之前，哪些条件必须写进文件？</h2><p className="mt-3 max-w-3xl leading-7 text-slate-300">下一步进入真正的尽调清单：用途、电力、污水、消防、改造权、扩建空间，以及口头承诺为什么不能算数。</p></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
