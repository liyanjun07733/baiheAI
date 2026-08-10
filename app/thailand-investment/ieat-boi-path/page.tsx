import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "园区外、IEAT、BOI怎么选？从买地到用工一次讲透｜BaiheAI",
  description:
    "从中国企业赴泰投资建厂的真实决策顺序，对比园区外、IEAT工业园、BOI项目与IEAT+BOI路径，覆盖土地、外资、税收、设备进口、外籍人员、审批、持续合规与退出风险。",
  alternates: {
    canonical: "https://www.baihediy.com/thailand-investment/ieat-boi-path",
  },
};

const rows = [
  {
    label: "核心性质",
    outside: "普通公司路径。厂址可以在园区外或非IEAT工业区，具体权利和限制看公司业务、土地、工厂及其他适用法规。",
    ieat: "先解决“在哪里做”。企业进入IEAT管理的工业园体系，享受园区基础设施、许可服务及IEAT项下的特定非税权益。",
    boi: "先解决“做什么”。项目必须属于BOI可促进活动，并按获批项目使用相应税收和非税优惠。",
  },
  {
    label: "土地",
    outside: "外资企业不能只凭“公司注册好了”就假定可以买工业土地；需要按股权结构、土地法及具体许可路径判断。",
    ieat: "IEAT公开资料把“工业园内土地所有权许可”列为非税权益之一，但仍要按IEAT程序和园区条件办理。",
    boi: "受促进项目可依Section 27申请持有与获促进业务相适应的土地；不是拿到BOI证书后任何土地都能自由购买。",
  },
  {
    label: "外资持股",
    outside: "要看《外商经营法》业务类别及其他专项法律，不能简单写成“普通公司永远只能49%外资”。",
    ieat: "IEAT解决的重点不是给所有业务自动改写外资经营限制，仍需结合企业实际经营活动判断。",
    boi: "BOI官方规则：List One活动通常要求泰方不少于51%；List Two/Three原则上BOI本身不设外资股比限制，但其他法律另有规定的除外。",
  },
  {
    label: "企业所得税",
    outside: "没有BOI促进时，通常按企业本身适用的常规税制执行。",
    ieat: "“在IEAT园区”本身不等于企业所得税自动免税；General Industrial Zone与I-EA-T Free Zone也不能混为一谈。",
    boi: "是否减免、减免多久、是否有额度，取决于获促进活动、类别及批准条件，不能把最高优惠当成每个项目的标准待遇。",
  },
  {
    label: "机器 / 原材料进口",
    outside: "按正常海关和税务规则处理；如另有其他海关制度则按具体制度执行。",
    ieat: "I-EA-T Free Zone可有进口税、VAT、消费税、出口税等法定权益；General Zone不能直接套用Free Zone结论。",
    boi: "获促进项目可能享有机器设备、出口生产所需原材料等进口税优惠，但要在批准范围内使用并办理相应手续。",
  },
  {
    label: "外国专家 / 技术人员",
    outside: "走普通Non-B、Work Permit等路径，实际条件要看公司、职位、资本、人员和主管机关要求。",
    ieat: "IEAT公开权益包括为外国专家、技术人员及家属申请在泰停留等便利，但不是“任何外籍员工自动不限人数”。",
    boi: "BOI有外国专家和技术人员专门审批路径。重点是获批职位和项目需要，不等于普通外籍劳工都能直接套用。",
  },
  {
    label: "审批与投产",
    outside: "自由度可能更高，但很多事项需要企业自己分别协调，第一次进入泰国时更考验本地执行能力。",
    ieat: "IEAT通过Total Solution Center等机制提供园区内许可和服务便利，但具体项目仍需满足建设、环保、安全等条件。",
    boi: "BOI先做项目审批，后续还有证书、机器、土地、专家、税收优惠使用、项目进度等持续事项。",
  },
  {
    label: "持续合规",
    outside: "没有BOI项目义务不代表没有工厂、劳动、环保、税务等日常合规。",
    ieat: "进入园区后还要遵守园区的建设、用途、安全、环境和运营规则；便利和规范是同时存在的。",
    boi: "优惠是给获批项目的，不是给公司一张永久通行证；实际经营偏离获批内容时要评估是否影响权益。",
  },
  {
    label: "最容易误解",
    outside: "“园区外便宜，所以一定更省。”真正成本可能藏在基础设施、审批和时间里。",
    ieat: "“进IEAT就有BOI、就免税、就什么都不用管。”这三句话都容易把概念混在一起。",
    boi: "“拿BOI就100%外资、随便买地、随便派中国员工、所有收入都免税。”这些都需要按项目条件拆开看。",
  },
];

const decisionCards = [
  {
    title: "先别问：哪个优惠最多？",
    text: "先把产品、工艺、投资额、设备、客户、出口比例、外籍人员需求和厂址拿出来。政策应该跟着项目走，不是项目为了优惠去迁就政策。",
  },
  {
    title: "IEAT不是BOI的替代品",
    text: "一个偏园区和区位管理，一个偏投资促进项目。现实中完全可能在IEAT园区里，同时申请BOI；也可能厂不在IEAT园区，但项目拿到BOI。",
  },
  {
    title: "优惠越多，管理事项往往也越多",
    text: "土地、机器、原料、专家、税收优惠都可能有各自申请和使用条件。对真正用得上的项目，这是价值；对用不上的项目，就是额外管理成本。",
  },
];

export default function IeatBoiPathPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute left-[-8rem] top-[-9rem] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-[-7rem] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs font-black tracking-[.28em] text-sky-600">STEP 04 · POLICY PATH</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              园区外、IEAT、BOI怎么选？<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">别先看优惠，先看你的项目到底需要什么。</span>
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              很多老板第一次听政策，最容易被“100%外资、买地、免税、外籍员工便利”几个词吸引。真正做项目以后才会发现，这些权利来自不同制度，适用条件也不一样。
            </p>
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
              这页不替任何政策做宣传。我们只回答：从买地、建厂、进口设备，到正式生产和用工，哪条路径对你的项目更合适，代价又是什么。
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">FIRST, GET THE LOGIC RIGHT</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">先把三个概念拆开</h2>
            <p className="mt-4 leading-8 text-slate-600">
              园区外是一个选址和经营环境；IEAT是工业园管理体系；BOI是投资促进体系。它们不是三个互斥选项，更不是“普通、升级、高级”三档套餐。
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {decisionCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_14px_40px_rgba(37,99,235,.05)]">
                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">FULL COMPARISON</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">从前期建设一直比到生产用工</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              PC端直接横向看；手机端建议横向滑动。这里故意不写“谁最好”，因为同一个优点换一个项目，可能就变成限制。
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
                  {rows.map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? "bg-slate-50/80" : "bg-white"}>
                      <th className="border-t border-slate-200 px-5 py-5 align-top text-base font-black text-slate-900">{row.label}</th>
                      <td className="border-l border-t border-slate-200 px-5 py-5 align-top leading-7 text-slate-650">{row.outside}</td>
                      <td className="border-l border-t border-slate-200 px-5 py-5 align-top leading-7 text-slate-650">{row.ieat}</td>
                      <td className="border-l border-t border-slate-200 px-5 py-5 align-top leading-7 text-slate-650">{row.boi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-rose-700">REAL PROJECT LESSON</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">政策便利是真的，园区限制也是真的。</h2>
              <p className="mt-5 leading-8 text-slate-700">
                我们之前在IEAT园区项目里就碰到过一个很实际的问题：厂房前面的楼做成了住宿空间，最初的想法很简单——楼是跟工厂一起建的，空着也是空着，隔成房间给员工住应该没什么。
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                后来真正麻烦的不是装修，而是<strong>建筑和土地实际用途</strong>。工业园管理里，“这是我的厂”并不等于“我想怎么用就怎么用”。这类事情如果设计前问，可能只是改图；建完以后才问，成本和选择都会少很多。
              </p>
              <div className="mt-5 rounded-2xl border border-rose-200 bg-white/70 px-5 py-4 text-sm font-bold leading-7 text-slate-700">
                这也是为什么我们不把IEAT写成“更高级的园区”。它给你基础设施、许可和部分权利，同时也有更明确的园区管理规则。便利和限制，是同一套体系的两面。
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-sky-600">A QUESTION WE OFTEN ASK</p>
              <h2 className="mt-3 text-2xl font-black">“既然BOI这么好，为什么不所有公司都申请？”</h2>
              <p className="mt-4 leading-8 text-slate-600">
                因为企业真正需要的不是“最多优惠”，而是“用得上的优惠”。如果项目本身不符合促进活动，或者优惠节省的钱远小于申请、执行和持续合规带来的成本，那就没必要为了一个标签改变整个项目。
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                反过来，如果项目设备投入大、需要进口机器、长期制造、需要外国技术人员，又正好符合促进活动，那么BOI可能非常有价值。
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-sky-50/60">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-xs font-black tracking-[.22em] text-sky-600">FOUR COMMON PATHS</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">现实项目里，通常不是三选一，而是这四种组合</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["01", "园区外 + 普通公司", "项目简单、本地资源成熟、没有明显BOI需求。优势是灵活；难点是基础设施、许可和落地执行更多靠自己。"],
                ["02", "园区外 + BOI", "项目符合BOI促进活动，但选址不一定需要IEAT。BOI解决促进权益，厂址本身仍需独立尽调。"],
                ["03", "IEAT + 非BOI", "企业看重园区基础设施、土地或IEAT服务，但项目本身没有必要或不符合BOI促进。"],
                ["04", "IEAT + BOI", "同时需要园区体系和BOI项目权益时可以叠加，但两套资格、审批和后续管理不能混成一套。"],
              ].map(([no, title, text]) => (
                <div key={no} className="rounded-3xl border border-sky-100 bg-white p-6 sm:p-7">
                  <div className="text-sm font-black text-sky-600">{no}</div>
                  <h3 className="mt-4 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10">
            <p className="text-xs font-black tracking-[.18em] text-sky-300">BEFORE YOU DECIDE</p>
            <h2 className="mt-3 text-3xl font-black">签地、签厂、申请BOI之前，先把这7个答案写出来。</h2>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {[
                "项目到底生产什么，BOI活动代码是否匹配？",
                "设备投资多大，机器和原材料进口优惠值不值得？",
                "公司业务是否涉及外资经营限制？",
                "是要买地还是租地，土地权益对项目有多重要？",
                "计划派多少中国技术或管理人员，分别是什么职位？",
                "厂房是否有特殊环保、排污、消防或高耗电要求？",
                "如果三年后项目调整、停产或转让，哪条路径退出成本最低？",
              ].map((item, idx) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 leading-7 text-slate-200">
                  <span className="mr-2 font-black text-sky-300">{String(idx + 1).padStart(2, "0")}</span>{item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black">政策依据：这页只用了能核实到的官方口径</h2>
            <p className="mt-4 leading-8 text-slate-600">
              BOI关于外资持股、土地、外国专家及可促进活动，分别以BOI官网现行页面为准；IEAT关于工业园土地、外国技术人员、Free Zone和园区服务，则以IEAT官网现行公开资料为准。具体项目落地时仍需按照最新公告、园区规定及主管机关审批结果执行。
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.boi.go.th/index.php?language=en&page=criteria_for_foreign_shareholding" target="_blank" rel="noreferrer">BOI 外资持股规则 ↗</a>
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.boi.go.th/index.php?language=en&page=procedures_land" target="_blank" rel="noreferrer">BOI 土地程序 ↗</a>
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.boi.go.th/en/procedure_to_bring_in_foreign_experts" target="_blank" rel="noreferrer">BOI 外国专家 ↗</a>
              <a className="rounded-full bg-sky-50 px-4 py-2 text-sky-700 hover:bg-sky-100" href="https://www.ieat.go.th/en/benefits-in-industrial-estates/content" target="_blank" rel="noreferrer">IEAT 园区权益/规则 ↗</a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link href="/thailand-investment/factory-due-diligence" className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300">
              <div className="text-xs font-black tracking-[.18em] text-slate-500">PREVIOUS</div>
              <div className="mt-2 text-xl font-black">← 第03步：买地 / 租厂前尽调</div>
            </Link>
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-6 text-white">
              <div className="text-xs font-black tracking-[.18em] text-sky-100">NEXT</div>
              <div className="mt-2 text-xl font-black">第05步：工厂设计与报批 →</div>
              <p className="mt-2 text-sm leading-6 text-sky-100">下一步进入真正开始花大钱的阶段：生产工艺、建筑用途、设计、审批和施工前准备。</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
