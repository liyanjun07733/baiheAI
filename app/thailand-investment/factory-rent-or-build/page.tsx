import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "去泰国建厂，先租还是自己建？别急着比租金｜BaiheAI",
  description: "从投产速度、现金流、设备适配、扩产、退出成本与政策路径，比较泰国租厂房和买地自建工厂。",
  alternates: { canonical: "https://www.baihediy.com/thailand-investment/factory-rent-or-build" },
};

const rows = [
  ["前期投入", "相对低，主要是押金、租金、装修和设备改造", "高，土地、设计、施工、基础设施和审批都会占用资金"],
  ["投产速度", "条件合适时更快", "选地、设计、审批、施工都需要时间"],
  ["厂房适配", "受现有层高、柱距、地坪、电力、排污限制", "可以按设备和生产流程倒推设计"],
  ["扩产能力", "取决于房东和周边是否还有空间", "前期规划得当时更主动"],
  ["退出成本", "相对容易", "土地、建筑和固定投入退出更慢"],
  ["最大风险", "租到一个“看起来能用，实际上不适合生产”的厂房", "地买了、设计做了以后才发现用途或基础设施不匹配"],
];

export default function FactoryRentOrBuildPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="border-b border-sky-100 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <Link href="/thailand-investment" className="text-sm font-black text-sky-700">← 返回泰国建厂闭环</Link>
            <p className="mt-8 text-xs font-black tracking-[.24em] text-sky-600">STEP 01 · RENT OR BUILD</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">去泰国建厂，先租还是自己建？<br /><span className="text-sky-600">别急着比租金，先把后面5年的账算完。</span></h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">很多老板第一次看泰国厂房，第一句话就是“一个月多少钱”。这个问题当然要问，但真正决定总成本的，往往是设备能不能放、电够不够、污水能不能处理、以后能不能扩，以及项目不顺时能不能退出。</p>
            <div className="mt-7 rounded-2xl border-l-4 border-sky-500 bg-sky-50 px-5 py-4 font-bold leading-7 text-slate-700">先问自己：你来泰国是准备先试一试，还是已经决定至少做5年以上？这个答案，比租金单价重要得多。</div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black">先把两条路放在桌面上</h2>
          <div className="mt-6 hidden overflow-hidden rounded-3xl border border-sky-100 bg-white md:grid md:grid-cols-[1fr_1.5fr_1.5fr]">
            <div className="bg-sky-50 p-4 font-black">对比维度</div><div className="bg-sky-50 p-4 font-black">租现成厂房</div><div className="bg-sky-50 p-4 font-black">买地自建</div>
            {rows.flatMap((row) => row.map((cell, index) => <div key={`${row[0]}-${index}`} className={`${index === 0 ? "bg-slate-50 font-black" : "bg-white"} border-t border-slate-100 p-4 leading-7 text-slate-700`}>{cell}</div>))}
          </div>
          <div className="mt-6 grid gap-4 md:hidden">
            {rows.map(([label, rent, build]) => <div key={label} className="rounded-2xl border border-sky-100 bg-white p-5"><h3 className="font-black text-sky-700">{label}</h3><div className="mt-3 text-sm leading-7 text-slate-600"><b className="text-slate-900">租厂：</b>{rent}</div><div className="mt-2 text-sm leading-7 text-slate-600"><b className="text-slate-900">自建：</b>{build}</div></div>)}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8"><p className="text-xs font-black tracking-[.18em] text-emerald-700">什么时候先租更合理</p><h2 className="mt-3 text-2xl font-black">第一次进入泰国，订单还没跑稳。</h2><p className="mt-4 leading-8 text-slate-700">这时候租厂实际上是在买“退出的机会”。订单好，可以扩大；业务不理想，还能缩小。不要因为“租金付出去就没了”这句话，就过早把大量现金压进土地和建筑。</p></div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8"><p className="text-xs font-black tracking-[.18em] text-blue-700">什么时候自建更合理</p><h2 className="mt-3 text-2xl font-black">生产流程已经很清楚，设备对厂房要求高。</h2><p className="mt-4 leading-8 text-slate-700">自建真正的价值不是“土地是自己的”，而是可以从设备、物流、仓储、电房、人员动线倒推建筑。但这也意味着前期判断一旦错，后面修改会很贵。</p></div>
          </div>

          <section className="mt-12 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-amber-700">最容易忽略的现实问题</p>
            <h2 className="mt-3 text-3xl font-black">厂房是你的，也不代表里面想怎么用就怎么用。</h2>
            <p className="mt-4 leading-8 text-slate-700">工业项目里，“建筑属于谁”和“建筑依法允许拿来做什么”是两回事。我们后面会专门写一个真实经历：厂房前面的楼空着，隔成房间给员工住，看起来只是内部装修，真正麻烦的却是建筑和土地用途是否允许。</p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black">决定前先回答这 8 个问题</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["泰国项目计划做几年？","预计产能多久会翻倍？","设备有没有特殊层高、承重、电力或排放要求？","客户要求多久开始供货？","水、电、污水的真实需求是多少？","中国人员是否长期驻厂？","项目是否真的符合BOI促进活动？","如果三年后项目不做了，最坏情况是什么？"].map((item, i) => <div key={item} className="rounded-2xl border border-sky-100 bg-white p-5 font-semibold leading-7 text-slate-700"><span className="mr-2 font-black text-sky-600">{String(i+1).padStart(2,"0")}</span>{item}</div>)}
            </div>
          </section>

          <Link href="/thailand-investment/factory-location" className="mt-12 block rounded-[2rem] bg-gradient-to-r from-slate-950 to-blue-950 p-7 text-white sm:p-9"><p className="text-xs font-black tracking-[.18em] text-cyan-300">NEXT STEP 02</p><h2 className="mt-3 text-3xl font-black">厂址怎么选：便宜的地，为什么最后可能最贵？ →</h2><p className="mt-3 max-w-3xl leading-7 text-slate-300">下一步正式比较园区外、IEAT以及BOI项目在选址阶段到底意味着什么。</p></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
