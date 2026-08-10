import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "泰国工厂设计与报批：最贵的不是审批，是建完以后才发现批不了｜BaiheAI",
  description:
    "中国企业赴泰建厂第05步：从生产工艺、土地与建筑用途，到电力、消防、环保和IEAT园区报批，讲清楚为什么设计前确认比建完整改便宜得多。",
  alternates: {
    canonical: "https://www.baihediy.com/thailand-investment/factory-design-approval",
  },
};

const compareRows = [
  {
    label: "先确认什么",
    outside: "先确认土地用途、建筑许可路径、地方主管机关要求，以及项目是否涉及其他专项许可。",
    ieat: "除了建筑本身，还要先确认所在IEAT园区的土地使用、建筑许可、环境与安全要求；具体园区和分区不能想当然。",
    boi: "BOI不是建筑审批机关，但获促进项目的产品、工艺、投资、机器等内容应与实际实施保持一致，重大变化要先评估是否影响促进条件。",
  },
  {
    label: "建筑用途",
    outside: "办公室、仓库、生产区、危险品区、住宿等用途不能只按企业自己的方便来安排，要看土地和建筑许可。",
    ieat: "IEAT园区本身存在工业区、住宅/商业区等不同规划。工业项目里的空间要做什么，最好设计阶段就问清楚。",
    boi: "BOI优惠不会自动替代土地和建筑用途审批。拿到BOI，也不能跳过建筑、消防、环境等要求。",
  },
  {
    label: "电力 / 公用工程",
    outside: "设计前就要拿设备清单算负荷、水量、气体、排污和扩产余量，否则厂房画完再改成本很高。",
    ieat: "园区有基础设施不代表每块地、每个项目都能直接满足你的负荷；仍要向园区确认容量、接入条件和费用。",
    boi: "机器设备如果与BOI项目有关，采购和进口计划最好与实际投产节奏一起规划，不要等建筑完成才倒推。",
  },
  {
    label: "环保 / 安全",
    outside: "工艺不同，废水、废气、噪声、化学品、消防和职业安全要求差异很大。先确认工艺，再做建筑。",
    ieat: "IEAT公开职责覆盖环境与安全，园区也有相应管理部门。项目仍需按具体风险和园区要求执行。",
    boi: "BOI优惠不能替代环保和安全合规；项目是否享受促进，与能不能合法建设和生产是两套问题。",
  },
  {
    label: "最容易踩的坑",
    outside: "觉得“先建起来再补手续”能省时间，最后可能在用途、消防、电力或排污上返工。",
    ieat: "觉得“园区里什么都有人管”，于是施工前没有把特殊用途和运营需求书面确认。",
    boi: "为了赶项目先改产品、工艺或设备，后面才发现和获批项目内容不一致。",
  },
];

const flow = [
  ["01", "先把生产工艺画出来", "产品怎么进、设备怎么摆、原料怎么走、成品怎么出，先做流程，不要先画漂亮厂房。"],
  ["02", "把特殊条件单独列出来", "大功率设备、重型基础、化学品、废水、废气、洁净要求、高温、噪声、危险区域，一个都不要藏。"],
  ["03", "确认土地和建筑实际用途", "生产、仓库、办公室、停车、宿舍、食堂分别放哪里，哪些用途需要另行确认，先问清楚再定图。"],
  ["04", "核电、水、污水和消防", "不是问“有没有”，而是拿真实参数去确认容量、接口、处理条件和改造责任。"],
  ["05", "正式报批前做一次交叉检查", "建筑、工艺、园区、环保、消防、电力、BOI项目资料不要各做各的，最后才发现互相冲突。"],
  ["06", "批准逻辑稳定后再大规模施工", "能提前做的准备可以做，但对用途和许可有影响的内容，不要用“以后再补”赌工期。"],
];

export default function FactoryDesignApprovalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute left-[-8rem] top-[-9rem] h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute right-[-7rem] top-12 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-black tracking-[.28em] text-sky-600">STEP 05 · DESIGN & APPROVAL</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              泰国建厂最贵的不是审批，<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">是建完以后才发现批不了、用不了。</span>
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              真正开始画图、下单、施工以后，每改一次都是真金白银。设计阶段最重要的不是“图画得多快”，而是先把生产、土地用途、建筑用途、电力、消防、环保和园区规则放到同一张桌子上。
            </p>
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              一个很实用的判断：现在问一个问题，可能只是改一张图；混凝土浇完、墙砌完以后再问，同一个问题就可能变成整改、停工和重新报批。
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-black tracking-[.22em] text-sky-600">DO NOT START WITH THE DRAWING</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">先画生产，再画厂房。</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            设备供应商给设备尺寸，建筑师画建筑，机电顾问算电，环保顾问看排放——如果每个人只做自己的部分，最后最容易出问题。项目方要先把生产流程和特殊条件统一起来，再让设计往下走。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {flow.map(([no, title, text]) => (
              <div key={no} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_14px_40px_rgba(37,99,235,.05)]">
                <div className="text-sm font-black text-sky-600">{no}</div>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">DESIGN STAGE COMPARISON</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">园区外、IEAT、BOI：设计阶段分别要防什么？</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              这张表不是把三条路径硬凑成三选一。BOI不是园区，IEAT也不是BOI。这里只从“准备建设”这一阶段看，每条路径最容易忽略什么。
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
          <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-rose-700">REAL PROJECT LESSON</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">我们遇到过：楼已经隔成房间了，才发现“能建”不等于“能拿来住”。</h2>
              <p className="mt-5 leading-8 text-slate-700">
                当时厂房前面有一栋和工厂一起建设的楼。最开始想法很简单：本来就是办公和辅助空间，空着也是空着，隔十几个房间给员工住宿，生活上方便，管理也方便。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                真正往后走才发现，问题不是“房间装修得像不像宿舍”，而是<strong>这块区域、这栋建筑和这个实际用途有没有被允许</strong>。IEAT公开的园区资料本身就会区分General Industrial Zone与Residential/Commercial Area，这已经提醒企业：工业园里的空间不是只有“是不是我的”这一层判断。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                这个经历给我们的教训很直接：宿舍、食堂、仓库、危险品区、办公区这些功能，设计阶段就要拿出来问。不要等墙都砌好了，再拿实际用途去碰管理规则。
              </p>
              <div className="mt-5 rounded-2xl border border-rose-200 bg-white/75 px-5 py-4 text-sm font-bold leading-7 text-slate-700">
                这是具体项目经历，不代表所有IEAT园区都采用完全相同的操作要求。正式项目应以所在园区分区、批准图纸和主管机关书面确认结果为准。
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-sky-600">ONE SMALL HABIT</p>
              <h2 className="mt-3 text-2xl font-black">所有“口头说可以”，尽量变成一张纸。</h2>
              <p className="mt-4 leading-8 text-slate-600">
                看地、设计、施工阶段经常会听到“没问题”“很多厂都这样做”。这句话可以作为经验参考，但不能替代项目确认。
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                真正影响投资的事项——用途、电力容量、排污条件、改造权限、施工限制——能邮件确认就邮件确认，能写进合同或批准文件就不要只留在聊天记录里。
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-sky-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">BEFORE CONSTRUCTION</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">开工前，至少把这10件事对一遍</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                "最终产品、工艺和产能是否已经稳定？",
                "设备尺寸、重量、功率、基础和维修空间是否已进入设计？",
                "生产区、仓库、办公室、食堂、住宿等实际用途是否分别确认？",
                "土地/厂房所在分区是否允许计划中的生产活动？",
                "电力容量、变压器、备用电和未来扩产是否已经算进去？",
                "生产用水、废水、废气、噪声和固废处理路径是否明确？",
                "消防系统是否按实际物料、工艺和建筑条件设计？",
                "IEAT或所在地主管机关需要的建筑/运营审批是否已经确认流程？",
                "BOI项目实际产品、机器和投资计划是否与获批内容一致？",
                "总包合同里，设计变更、审批延误和返工责任由谁承担？",
              ].map((item, idx) => (
                <div key={item} className="rounded-2xl border border-sky-100 bg-white px-5 py-4 leading-7 text-slate-700">
                  <span className="mr-2 font-black text-sky-600">{String(idx + 1).padStart(2, "0")}</span>{item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-sky-600">OFFICIAL CHECK</p>
            <h2 className="mt-3 text-2xl font-black">为什么这一步不能靠“听说”</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              IEAT官网目前单独公布了“工业园内建筑许可”的办事手册，同时官网Q&amp;A也把Building Permit Division、环境和职业安全部门列为不同的咨询窗口。这说明在IEAT项目里，建筑、环境和安全本来就是需要分别确认的管理事项，不适合用一句“园区会帮忙搞定”概括。
            </p>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              另外，IEAT公开园区信息会明确列出General Industrial Zone、Residential/Commercial Area等分区。具体到某栋楼能否改用途、怎样申请，仍应以所在园区和主管机关的正式确认结果为准。
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://ieat.go.th/th/performance-standards/content" target="_blank" rel="noreferrer">IEAT 建筑许可办事手册 ↗</a>
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.ieat.go.th/en/q-a" target="_blank" rel="noreferrer">IEAT 许可/环境/安全咨询窗口 ↗</a>
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.ieat.go.th/en/roles-responsibilities" target="_blank" rel="noreferrer">IEAT 园区职责与基础设施 ↗</a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link href="/thailand-investment/ieat-boi-path" className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300">
              <div className="text-xs font-black tracking-[.18em] text-slate-500">PREVIOUS</div>
              <div className="mt-2 text-xl font-black">← 第04步：IEAT / BOI政策路径</div>
            </Link>
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-6 text-white">
              <div className="text-xs font-black tracking-[.18em] text-sky-100">NEXT</div>
              <div className="mt-2 text-xl font-black">第06步：施工与现场管理 →</div>
              <p className="mt-2 text-sm leading-6 text-sky-100">下一步进入真正容易产生意外损失的阶段：承包商、安保、材料、电缆、工程变更和工期。</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
