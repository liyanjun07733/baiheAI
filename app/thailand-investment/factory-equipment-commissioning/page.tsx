import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "泰国工厂设备进场与验收：机器到了，不等于明天就能开机｜BaiheAI",
  description:
    "中国企业赴泰建厂第07步：设备进场、吊装路线、设备基础、电力容量、BOI机器进口、安装调试与试生产前验收的真实项目清单。",
  alternates: {
    canonical: "https://www.baihediy.com/thailand-investment/factory-equipment-commissioning",
  },
};

const compareRows = [
  {
    label: "设备什么时候进",
    outside: "主要看厂房条件、海关安排、施工进度和合同节点。没有园区统一时间表，但越早进场越要承担保管、吊装和返工风险。",
    ieat: "除了项目自己的施工计划，还要确认园区车辆、吊装、特殊运输、临时作业等现场规则。具体要求以所在园区为准。",
    boi: "如果要使用BOI机器进口税收权益，不能把“设备发货”当成纯物流动作，要先核对机器清单、进口期限和eMT流程。",
  },
  {
    label: "机器进口",
    outside: "按普通进口和海关规则处理，税费与设备类别、原产地和适用协定有关。",
    ieat: "是否位于IEAT Free Zone会影响货物与税务路径，但不能只听到“Free Zone”三个字就默认所有设备自动免税。",
    boi: "BOI官方要求受促进项目按批准的机器清单和进口程序使用权益；机器进口期限、清单审批和放行都有单独流程。",
  },
  {
    label: "安装以后能不能开机",
    outside: "要看工厂许可、设备安全、电力、消防、环保等条件是否已经具备，机器安装完成不等于生产条件自动完成。",
    ieat: "还要叠加园区内相关许可和运营要求；IEAT是园区管理体系，不是“装好设备就自动允许生产”。",
    boi: "BOI项目还有项目条件与开工/投产节点。BOI公开流程要求受促进项目在规定期限内完成建设、安装并准备投入运营。",
  },
  {
    label: "最容易踩的坑",
    outside: "设备先到、基础没好、电没好、门洞进不去，最后整台机器在现场等。",
    ieat: "以为园区基础设施完整，就省略了对自己设备负荷、吊装路线和特殊作业的二次核对。",
    boi: "机器已经装船甚至到港，才发现BOI机器清单、进口权益或时间节点没有处理好。",
  },
];

const checks = [
  ["01", "先画一遍设备进场路线", "从园区大门、厂区门口、转弯半径、门洞高度，到最终设备位置，一台设备按真实尺寸走一遍。不要等平板车到了才发现最后20米过不去。"],
  ["02", "设备基础必须在到货前复核", "基础尺寸、标高、预埋件、地脚螺栓、承载能力，最好由设备方和土建方一起签字确认。"],
  ["03", "电力不是问‘有没有’，而是问‘够不够’", "核对总负荷、启动电流、电压、频率、变压器容量、配电柜和电缆规格。设备铭牌和实际产线同时运行要放在一起算。"],
  ["04", "压缩空气、冷却水、排风别最后才接", "很多设备本体到了才发现辅助系统没完成。机器能摆进去，不代表机器能稳定跑。"],
  ["05", "BOI机器清单提前对", "准备使用BOI机器进口权益的项目，设备英文名称、数量、用途和项目工艺要提前对应，不要到了海关再临时解释。"],
  ["06", "吊装方案和保险单独看", "几十吨设备的吊装，不要只听承包商一句‘没问题’。吊点、吊车吨位、地面承载、天气和事故责任都要有方案。"],
  ["07", "安装完成做SAT，不只看机器会动", "把安全联锁、精度、产能、连续运行、异常停机、报警、能耗等写进现场验收条件。"],
  ["08", "把‘试机’和‘正式生产’分开", "试机是发现问题的阶段。工厂许可、环境、安全、BOI项目节点等没有确认完成前，不要因为客户催货就把试机直接变成正常生产。"],
];

export default function FactoryEquipmentCommissioningPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute left-[-8rem] top-[-9rem] h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute right-[-7rem] top-12 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-black tracking-[.28em] text-sky-600">STEP 07 · EQUIPMENT & COMMISSIONING</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              机器运到泰国，<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">不等于第二天就能开机生产。</span>
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              设备进场是建设和生产之间最容易“卡住”的一段。门洞差20厘米、基础偏几毫米、电力晚两周、BOI机器清单没对上，任何一个小问题都可能让一台几百万泰铢的设备在现场等。
            </p>
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              这一阶段不要只问“机器什么时候到”。应该同时问：<strong>到哪里、怎么进、放哪里、谁来吊、接什么电、用什么进口路径、什么时候才算验收完成。</strong>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-black tracking-[.22em] text-sky-600">REAL PROJECT LOGIC</p>
          <h2 className="mt-2 max-w-5xl text-3xl font-black tracking-tight sm:text-4xl">工厂建设最常见的误区：厂房看起来完工了，就开始催设备进场。</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ["设备太早到", "门窗、地坪、配电、消防还在施工，设备只能先放着。现场多放一天，就多一天受潮、碰撞和失窃风险。"],
              ["基础没复核", "土建按图做了，不代表设备商默认接受。等机器吊上去才发现孔位、标高或尺寸不对，返工代价最高。"],
              ["电力最后才确认", "厂房有电和设备能稳定运行是两件事。变压器容量、启动电流、保护和电缆规格都要按整线负荷核。"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_14px_40px_rgba(37,99,235,.05)] sm:p-7">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">COMPARE THE PATHS</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">园区外、IEAT、BOI：设备进场阶段到底差在哪里？</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              这里最重要的是别把三个概念混在一起。IEAT影响的是园区与现场管理环境，BOI影响的是受促进项目及相关机器权益；两者可以叠加，也可能只存在其中一个。
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
          <p className="text-xs font-black tracking-[.22em] text-sky-600">BOI MACHINERY REALITY</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">BOI项目最怕的，不是没有优惠，而是设备已经在路上，手续才开始补。</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
            <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <p className="leading-8 text-slate-700">
                BOI目前公开的机器权益流程很明确：用于受促进项目并申请机器进口税收权益时，需要通过eMT处理机器清单和每批进口放行。BOI还设定机器进口期限；如果机器在项目获批前后不同时间到港，处理路径也不一样。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                所以设备采购阶段最不该出现的一句话就是：<strong>“先让中国那边发货，泰国手续到了再说。”</strong> 有些事情可以补，有些事情补起来会多出税款、担保、时间和解释成本。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                BOI官方同时说明，受促进项目通常需要在规定期限内完成机器进口、建设、安装，并达到准备运营的阶段。具体项目仍以促进证书和批准条件为准。
              </p>
            </div>
            <div className="rounded-[2rem] border border-sky-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-sky-600">发货前四问</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>1.</strong> 这台机器是否已经在BOI机器清单/项目工艺逻辑里对应好？</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>2.</strong> 进口时间是否还在项目可使用权益的期限内？</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>3.</strong> 这一票货按普通进口、BOI权益还是其他路径放行？</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3"><strong>4.</strong> 机器英文名称、型号、数量、用途和发票描述是否一致？</div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
            <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.boi.go.th/index.php?language=en&newpage=true&page=procedures_machinery" target="_blank" rel="noreferrer">BOI Machinery Procedure ↗</a>
            <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.diw.go.th/webdiw/s-fac/" target="_blank" rel="noreferrer">DIW Factory Services ↗</a>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-sky-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">PRE-COMMISSIONING CHECKLIST</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">设备到厂前后，至少把这8件事盯住。</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {checks.map(([no, title, desc]) => (
                <div key={no} className="rounded-3xl border border-sky-100 bg-white p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-100 text-sm font-black text-sky-700">{no}</div>
                    <div>
                      <h3 className="text-lg font-black">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-black tracking-[.22em] text-emerald-600">THE LAST 10% BEFORE PRODUCTION</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">机器会动，不等于工厂已经能稳定生产。</h2>
          <div className="mt-8 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <p className="max-w-4xl leading-8 text-slate-700">
              真正的验收应该从“单机能不能转”继续看到“整条线能不能稳定跑”：连续运行、报警、联锁、品质、产能、能耗、人员操作、备件、保养和异常停机都要过一遍。泰国主管机关也有独立的工厂许可与运营系统，所以设备安装完成和正式生产资格不是同一个节点。
            </p>
            <p className="mt-4 max-w-4xl leading-8 text-slate-700">
              很多项目最后一个月最容易犯的错，是客户催、老板催、机器也能转，于是直接把试机当正常生产。越到最后，越要把<strong>“能开机”</strong>和<strong>“可以正式生产”</strong>分开。
            </p>
          </div>
        </section>

        <section className="border-t border-sky-100 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-black tracking-[.22em] text-cyan-400">NEXT STEP · 08</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">设备开始跑以后，下一个难题不是机器，是人。</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">下一步进入泰国员工招聘：区域劳动力、工资、班次、通勤和中国式管理为什么经常落不了地。</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/thailand-investment/factory-construction-management" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-black text-slate-200 hover:border-slate-500">← 上一步：施工现场管理</Link>
                <Link href="/thailand-investment" className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 hover:bg-slate-100">返回建厂闭环</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
