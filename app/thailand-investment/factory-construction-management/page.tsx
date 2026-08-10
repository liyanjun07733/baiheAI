import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "泰国工厂施工现场管理：电缆被盗、承包商与园区安保边界｜BaiheAI",
  description:
    "中国企业赴泰建厂第06步：从真实施工经历出发，讲清楚泰国工厂建设阶段的材料防盗、夜间安保、承包商管理、责任边界、工程变更和工期风险。",
  alternates: {
    canonical: "https://www.baihediy.com/thailand-investment/factory-construction-management",
  },
};

const compareRows = [
  {
    label: "安保怎么问",
    outside: "先确认土地/厂房业主是否限制保安公司、夜间驻守和人员进出；不要默认施工单位想安排谁就安排谁。",
    ieat: "除了工地自己的管理，还要确认所在园区的公共区域安保、承包商进出、夜间作业和厂区内部安保规则。不同园区的实际要求可能不同。",
    boi: "BOI本身不是园区安保管理机制。即使项目有BOI，也要按实际所在地、园区和施工现场规则处理安全与保卫。",
  },
  {
    label: "材料责任",
    outside: "合同里要写清材料到场后由谁保管、谁签收、谁承担夜间损失，不能只靠口头说“总包负责”。",
    ieat: "园区有公共安保，不等于园区当然承担企业工地内部材料损失。公共区域责任和项目内部责任要分开确认。",
    boi: "BOI优惠不会覆盖现场失窃、停工和重做风险；这些仍是项目管理和保险问题。",
  },
  {
    label: "人员进出",
    outside: "总包、分包、送货、临时工、设备商要有统一登记，不然现场出了问题连谁当天进过场都说不清。",
    ieat: "园区通常还有自己的入口和承包商管理要求，企业内部登记不能代替园区要求，园区登记也不能代替工地自己的台账。",
    boi: "建设期人员管理与BOI外籍专家机制不是一回事，不要混在一起。",
  },
  {
    label: "最容易误判",
    outside: "觉得“地是自己的/厂是租的”就可以完全按中国工地习惯管理。",
    ieat: "觉得“园区有24小时安保”就等于施工现场已经有人替你看材料。",
    boi: "觉得政策项目等级高，就会自然降低施工现场风险。",
  },
];

const controls = [
  ["01", "高价值材料不要过早进场", "铜缆、配电设备、贵重仪器不要因为‘早到比较安心’就长期放在半开放工地。到货时间要跟安装窗口对上。"],
  ["02", "每晚做一次材料和开口巡查", "已经敷设但尚未通电的电缆、配电房、设备间、门窗和围挡，晚上停工前都要有人确认。"],
  ["03", "总包、分包、送货人员分开登记", "谁几点进、几点出、带了什么工具、车辆牌照是什么，至少关键区域要留得下记录。"],
  ["04", "把摄像头当证据系统，不是装饰", "不是有摄像头就够了。要确认盲区、夜视、存储天数、供电和断网后的记录是否还在。"],
  ["05", "安保责任写进施工合同", "材料到场后的保管责任、夜间巡逻、失窃后的责任分担和报警流程，尽量在合同和现场管理制度里写明。"],
  ["06", "园区规则要单独确认", "施工单位能不能自行安排保安夜间驻守、正式投产后能否自行选择厂区保安，这类问题不要用其他园区经验套用。"],
  ["07", "工程变更必须留下书面痕迹", "现场一句‘这样改更快’往往就是后面追加预算和扯皮的起点。谁提出、为什么改、多少钱、影响几天都要留记录。"],
  ["08", "把工期损失和材料损失分开算", "一批材料丢了不只是重买。还要把等待采购、重新安装、后续工序停摆和客户节点延期一起算进去。"],
];

export default function FactoryConstructionManagementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute left-[-8rem] top-[-9rem] h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute right-[-7rem] top-12 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-black tracking-[.28em] text-sky-600">STEP 06 · CONSTRUCTION & SITE CONTROL</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              工厂开始施工以后，<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">最怕的不是忙，是没人知道风险到底归谁管。</span>
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              承包商进场、材料到货、临时用电、夜间停工、工程变更——这时候每天都有几十件小事。真正把项目拖贵的，往往就是大家都以为“别人会管”的那几件事。
            </p>
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              施工期要把三层责任分开看：<strong>园区公共区域怎么管、项目工地内部怎么管、总包和分包之间怎么管。</strong>三层混在一起，出了事最容易互相说“这不是我的责任”。
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-black tracking-[.22em] text-rose-600">REAL PROJECT EXPERIENCE</p>
          <h2 className="mt-2 max-w-5xl text-3xl font-black tracking-tight sm:text-4xl">我们在AMATA City Chonburi 2施工时，真正吃过一次“园区有保安 ≠ 工地有人替你看东西”的亏。</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 sm:p-8">
              <p className="leading-8 text-slate-700">
                项目在春武里府Ban Bueng一带的AMATA City Chonburi 2，工厂还在建设阶段。最开始大家的感觉很自然：这是工业园，园区有自己的保安、巡逻和监控，施工现场应该不会像完全开放的工地那样难管。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                但我们当时在这个具体项目里遇到的现场要求是：<strong>施工单位不能自行安排自己的保安人员夜间留在园区工地守夜。</strong>与此同时，园区公共区域的保安体系并不等于替每一家正在施工的企业承担工地内部材料保管责任。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                后来事情真的发生了——从变压器到低压柜的一整段电缆被剪走。那一刻才发现，真正麻烦的并不是“铜值多少钱”，而是重新采购、重新敷设，后面的工序一起停下来等。
              </p>
              <div className="mt-5 rounded-2xl border border-rose-200 bg-white/80 px-5 py-4 text-sm font-bold leading-7 text-slate-700">
                这段关于夜间驻守和现场安保的描述，是我们在该具体项目中实际遇到的管理要求。它不代表AMATA所有项目、也不代表泰国所有IEAT园区都执行完全相同的规则。其他园区可能允许施工单位自行安排保安，因此签约和开工前要向具体园区书面确认。
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-sky-600">THE REAL LOSS</p>
              <h3 className="mt-3 text-2xl font-black">被偷的是电缆，损失的是工期。</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>材料损失：</strong>重新采购电缆和辅材。</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>人工损失：</strong>已经做过的工作重新做。</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>工序损失：</strong>配电没完成，后面的调试和验收一起往后推。</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>管理损失：</strong>报警、追查、重新协调承包商和安保。</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">SECURITY RESPONSIBILITY</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">园区外、IEAT、BOI：施工安保不要放在一个概念里。</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              BOI不是园区，IEAT也不是某一家园区开发商。施工现场的保安、人员进出和材料责任，最终仍要回到实际所在地、园区规则和施工合同。
            </p>

            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,.05)]">
              <table className="min-w-[1040px] w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#176786] text-white">
                    <th className="w-[15%] px-5 py-4 text-base font-black">对比维度</th>
                    <th className="w-[28.3%] px-5 py-4 text-base font-black">园区外 / 普通路径</th>
                    <th className="w-[28.3%] px-5 py-4 text-base font-black">IEAT工业园</th>
                    <th className="w-[28.3%] px-5 py-4 text-base font-black">BOI项目</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? "bg-slate-50/80" : "bg-white"}>
                      <th className="border-t border-slate-200 px-5 py-5 align-top text-base font-black text-slate-900">{row.label}</th>
                      <td className="border-l border-t border-slate-200 px-5 py-5 align-top leading-7 text-slate-600">{row.outside}</td>
                      <td className="border-l border-t border-slate-200 px-5 py-5 align-top leading-7 text-slate-600">{row.ieat}</td>
                      <td className="border-l border-t border-slate-200 px-5 py-5 align-top leading-7 text-slate-600">{row.boi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-black tracking-[.22em] text-sky-600">WHAT PUBLIC SOURCES ACTUALLY SAY</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">公开资料能确认什么，不能确认什么？</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <h3 className="text-2xl font-black">能确认：AMATA有自己的园区公共安保体系。</h3>
              <p className="mt-4 leading-8 text-slate-700">
                AMATA官方说明，AMATA Facility Services负责工业园公共区域的安保、交通和应急管理，并对重点区域进行24小时监控；AMATA关于客户安全的公开资料也把公共区域安保和应急响应作为园区服务的一部分。
              </p>
            </div>
            <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-2xl font-black">不能直接推出：所有IEAT工厂必须用某一家指定保安公司。</h3>
              <p className="mt-4 leading-8 text-slate-700">
                我们目前没有在IEAT公开资料中找到一条可以支持“全泰国所有IEAT园区的工厂一律只能使用园区指定保安公司”的统一规定。因此，这类要求在网站上只会写成具体园区/具体项目的实际管理经验，正式项目应向所在园区确认。
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
            <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://amata.com/services?catid=83&id=379&view=article" target="_blank" rel="noreferrer">AMATA Security & Safety ↗</a>
            <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://amata.com/sustainability/creating-value-for-society/building-a-safe-society" target="_blank" rel="noreferrer">AMATA Contractor Safety ↗</a>
            <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.ieat.go.th/en" target="_blank" rel="noreferrer">IEAT Official ↗</a>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-sky-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">SITE CONTROL CHECKLIST</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">开工以后，至少把这8件事盯住。</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {controls.map(([no, title, text]) => (
                <div key={no} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_12px_32px_rgba(37,99,235,.05)]">
                  <div className="text-sm font-black text-sky-600">{no}</div>
                  <h3 className="mt-3 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-sky-600">ONE QUESTION BEFORE SIGNING</p>
            <h2 className="mt-3 text-2xl font-black">看园区时，别只问“有没有24小时保安”。</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              把问题换成：施工单位自己的保安能不能夜间驻守？园区保安负责到哪里？厂区内部谁负责？正式投产后工厂保安是否可以自行选择？发生财物损失后责任怎么划？这些答案，比宣传册上的“24小时安保”更能决定你的实际风险。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link href="/thailand-investment/factory-design-approval" className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300">
              <div className="text-xs font-black tracking-[.18em] text-slate-500">PREVIOUS</div>
              <div className="mt-2 text-xl font-black">← 第05步：工厂设计与报批</div>
            </Link>
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-6 text-white">
              <div className="text-xs font-black tracking-[.18em] text-sky-100">NEXT</div>
              <div className="mt-2 text-xl font-black">第07步：设备进场与验收 →</div>
              <p className="mt-2 text-sm leading-6 text-sky-100">厂房看起来建完，并不等于马上能生产。下一步进入设备基础、电力、消防、调试和验收。</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
