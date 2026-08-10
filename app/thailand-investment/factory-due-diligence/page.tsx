import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "泰国买地或租厂前，这12项没查清楚先别签｜BaiheAI",
  description:
    "泰国工厂选址进入签约前，逐项核对土地与厂房用途、电力、水与污水、消防、物流、结构、改造权、扩建空间、费用与园区规则，避免低价厂房变成高成本项目。",
  alternates: {
    canonical: "https://www.baihediy.com/thailand-investment/factory-due-diligence",
  },
};

const compareRows = [
  ["谁来核实", "很多条件需要企业自己分别向土地、政府部门和公用事业单位确认", "园区管理方通常能提供较集中的资料，但具体地块、容量和用途仍要书面确认", "BOI看的是获促进项目，不替代土地、厂房和公用工程尽调"],
  ["电力", "重点核实供电点、现有容量、增容条件和周期", "不同IEAT园区公开的电压与配电容量并不一样，不能只听“园区有电”", "BOI不会自动解决现场电力容量"],
  ["污水", "企业要确认排放条件、接入方式及是否需要自建预处理", "园区通常有集中污水系统，但处理能力、收费和进水标准因园区而异", "BOI优惠不等于排放条件放宽"],
  ["改造 / 扩建", "看土地法规、房东授权、地方审批和实际基础设施", "同时受租约/产权、园区规则和审批要求影响", "若涉及获促进项目范围或土地使用，还要核对BOI批准条件"],
  ["最容易踩的坑", "低价签约后才发现配套要自己补", "把园区公共配套误解成自己这个地块什么都有、什么都能用", "为了优惠先做方案，后面才发现实际生产需求不匹配"],
];

const checks = [
  {
    no: "01",
    title: "土地与厂房到底允许做什么",
    question: "你的产品、工艺、仓储、办公室和后续扩建，在这个地块上能不能做？",
    detail:
      "不要只看销售写的“工业用地”三个字。把实际生产流程、原料、设备、排放和建筑用途一起拿去确认。今天能签，不代表明天所有用途都能批。",
  },
  {
    no: "02",
    title: "电力不是“有或没有”，而是“够不够”",
    question: "现有容量多少？变压器谁出钱？增容能不能做、要多久？",
    detail:
      "机器铭牌功率、启动电流、空压机、冷水机、空调、照明都要算进去。最怕的是厂房看着很好，设备到了以后才发现电力方案要重做。",
  },
  {
    no: "03",
    title: "生产用水和污水分开算",
    question: "每天用多少水？排什么水？园区或当地系统到底接不接？",
    detail:
      "有集中污水处理系统，不代表你的生产废水可以不经过处理直接排进去。要提前把水量、污染物类型和接入标准问清楚。",
  },
  {
    no: "04",
    title: "消防不能只看墙上有没有灭火器",
    question: "你的行业、面积、仓储和设备，对消防系统有什么实际要求？",
    detail:
      "喷淋、消防水、报警、疏散、危险品区域都可能影响改造。租现成厂房时，已有系统是否适配你的用途尤其重要。",
  },
  {
    no: "05",
    title: "层高、柱距、地坪承重",
    question: "设备进得去吗？装得下吗？运行以后地面扛得住吗？",
    detail:
      "看厂时最容易被“面积够大”骗过去。设备基础、吊装空间、维修通道和叉车路线都应该按真实布置图来核。",
  },
  {
    no: "06",
    title: "40尺柜能不能真正到门口",
    question: "道路宽度、转弯半径、装卸位、大型设备进场有没有障碍？",
    detail:
      "地图上离港口近，不代表最后一公里好走。大型设备进场前，门宽、道路、电线高度和吊装位置都要实地看。",
  },
  {
    no: "07",
    title: "雨季和排水不能只在晴天看",
    question: "大雨时水往哪走？历史上有没有积水？厂区标高够不够？",
    detail:
      "选址考察如果只在晴天去一次，很容易漏掉最实际的问题。排水沟、防洪系统和周边地势都值得单独看。",
  },
  {
    no: "08",
    title: "租厂时，哪些东西你有权改",
    question: "打基础、开孔、加电房、做排风、拆墙、加办公室，房东到底同不同意？",
    detail:
      "口头说“都可以改”不够。改造范围、审批责任、恢复原状、退租时怎么处理，尽量写进合同或附件。",
  },
  {
    no: "09",
    title: "自建时，别把生活用途顺手塞进工业建筑",
    question: "办公室、食堂、宿舍、值班房的实际用途是否需要单独审批？",
    detail:
      "我们自己就遇到过“前面的楼空着，隔几个房间给员工住”的想法。工业项目里，建筑属于你，不代表实际用途可以自己随意改。",
  },
  {
    no: "10",
    title: "园区规则要在签约前问，不要进场后才问",
    question: "施工期安保、夜间施工、材料进出、正式投产后的保安和运营规则是什么？",
    detail:
      "不同园区的现场规则可能不一样。我们在具体项目里就碰到过施工单位保安不能自行夜间驻守的问题，所以这类事情一定要针对目标园区确认。",
  },
  {
    no: "11",
    title: "把所有固定费用拉出来",
    question: "除了租金或地价，每个月还要付什么？",
    detail:
      "园区维护费、水费、污水处理费、电力、垃圾处理、保安、公共服务等都可能形成长期成本。IEAT不同园区公开收费就存在明显差异。",
  },
  {
    no: "12",
    title: "给未来扩产留位置",
    question: "如果两年后产能翻倍，电、水、污水、仓库和土地还有没有余量？",
    detail:
      "很多厂第一年看起来刚刚好，第三年就开始拆了重做。签约前多问一句“以后怎么办”，往往比今天省一点租金更值钱。",
  },
];

const redFlags = [
  "“电肯定够，签了再帮你确认。”",
  "“污水没问题，大家都这样排。”",
  "“想怎么改都可以，合同里不用写。”",
  "“这里是工业园，所以什么工厂都能做。”",
  "“以后扩建旁边还有地，到时再说。”",
  "“园区有24小时保安，你们工地不用另外考虑。”",
];

export default function FactoryDueDiligencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute right-[-8rem] top-[-7rem] h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="absolute left-[-7rem] bottom-[-8rem] h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
            <Link href="/thailand-investment" className="text-sm font-black text-sky-700">
              ← 返回泰国建厂闭环
            </Link>
            <p className="mt-8 text-xs font-black tracking-[.24em] text-sky-600">STEP 03 · DUE DILIGENCE</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              泰国买地或租厂前，<br />
              <span className="text-sky-600">这12项没查清楚，我建议先别签。</span>
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              看厂当天最容易谈的是价格，最容易漏掉的却是后面真正要花钱的条件：电够不够、污水接不接、消防要不要重做、厂房能不能改、园区有哪些自己的规则。
            </p>
            <div className="mt-7 rounded-2xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4 font-bold leading-7 text-slate-700">
              有些问题，签约前只是一个问题；签约后，就会变成一笔钱。
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <section>
            <p className="text-xs font-black tracking-[.2em] text-sky-600">先看区别</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">园区外、IEAT、BOI，在尽调阶段要查的重点不一样</h2>
            <p className="mt-3 max-w-4xl leading-8 text-slate-600">
              这里不是比较谁“更高级”。IEAT工业园能提供较完整的园区基础设施和管理体系，但具体容量、收费、地块条件仍然要核；BOI则是项目促进机制，不会替企业完成现场尽调。
            </p>

            <div className="mt-6 hidden overflow-hidden rounded-3xl border border-sky-100 bg-white md:grid md:grid-cols-[.9fr_repeat(3,1.2fr)]">
              <div className="bg-sky-700 p-4 font-black text-white">对比维度</div>
              <div className="bg-sky-700 p-4 font-black text-white">园区外</div>
              <div className="bg-sky-700 p-4 font-black text-white">IEAT工业园</div>
              <div className="bg-sky-700 p-4 font-black text-white">BOI项目</div>
              {compareRows.flatMap((row) =>
                row.map((cell, index) => (
                  <div
                    key={`${row[0]}-${index}`}
                    className={`${index === 0 ? "bg-slate-50 font-black" : "bg-white"} border-t border-slate-100 p-4 text-sm leading-7 text-slate-700`}
                  >
                    {cell}
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 grid gap-4 md:hidden">
              {[1, 2, 3].map((col) => (
                <div key={col} className="rounded-3xl border border-sky-100 bg-white p-5">
                  <h3 className="text-xl font-black text-sky-700">{["", "园区外", "IEAT工业园", "BOI项目"][col]}</h3>
                  <div className="mt-4 space-y-3">
                    {compareRows.map((row) => (
                      <div key={row[0]} className="border-t border-slate-100 pt-3">
                        <b className="text-sm text-slate-950">{row[0]}</b>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{row[col]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-blue-700">一个最常见的误区</p>
            <h2 className="mt-3 text-3xl font-black">“园区有电”这句话，对选厂几乎没意义。</h2>
            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>真正要问的是：这个地块现在能拿到多少容量？你的设备启动以后峰值多少？要不要新做变压器？增容由谁申请？钱谁出？工期多久？</p>
              <p>IEAT官网公开的不同工业园，本身就能看到明显差异：有的页面列22 kV配电，有的园区公开115/22 kV系统，也有园区直接列出MVA级配电容量。这恰恰说明，不能用一句“IEAT都有电”代替具体地块核实。</p>
              <p className="font-black text-slate-950">看厂时听到“没问题”，最好继续追问一句：能不能把容量、接入点和增容责任写进文件？</p>
            </div>
          </section>

          <section className="mt-14">
            <p className="text-xs font-black tracking-[.2em] text-sky-600">签约前清单</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">这12项，最好一项一项留下书面答案</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {checks.map((item) => (
                <article key={item.no} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_12px_34px_rgba(37,99,235,.045)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-black text-sky-600">{item.no}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">签约前确认</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 font-bold leading-7 text-slate-800">{item.question}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-amber-700">真实项目提醒</p>
            <h2 className="mt-3 text-3xl font-black">厂房是你的，不代表里面想怎么用就怎么用。</h2>
            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>我们自己碰到过很典型的想法：厂房前面的楼空着，隔几个房间让员工住，感觉既方便又省钱。</p>
              <p>真正进入园区管理和用途问题以后才发现，关键不是“房间装修得像不像宿舍”，而是这栋建筑和这块土地实际允许拿来做什么。工业用途、办公用途、住宿用途不能靠企业自己想当然。</p>
              <p className="font-black text-slate-950">所以这类需求，最便宜的处理时间永远是在设计和签约之前，而不是房间已经隔好以后。</p>
            </div>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-[2rem] border border-red-200 bg-red-50/70 p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-red-700">听到这些话，先别急着签</p>
              <h2 className="mt-3 text-2xl font-black">6个值得继续追问的“危险信号”</h2>
              <div className="mt-5 space-y-3">
                {redFlags.map((item, i) => (
                  <div key={item} className="rounded-2xl border border-red-100 bg-white/80 px-4 py-3 text-sm font-semibold leading-7 text-slate-700">
                    <span className="mr-2 font-black text-red-600">{i + 1}.</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-black tracking-[.18em] text-slate-500">签约动作</p>
              <h2 className="mt-3 text-2xl font-black">口头承诺，尽量变成附件。</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>如果某个条件会直接影响你的投产，最好不要停留在销售微信或口头承诺里。</p>
                <p><b className="text-slate-950">电力：</b>容量、接入、增容责任。</p>
                <p><b className="text-slate-950">改造：</b>允许做什么、谁审批、退租要不要恢复。</p>
                <p><b className="text-slate-950">污水：</b>接入条件、标准、费用、企业预处理责任。</p>
                <p><b className="text-slate-950">园区运营：</b>施工期和投产后的安保、进出、夜间施工等具体规则。</p>
                <p className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-800">一句话：能影响投产时间和成本的条件，尽量让它从“销售说过”变成“文件写过”。</p>
              </div>
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-sky-100 bg-white p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-sky-600">政策核实</p>
            <h2 className="mt-3 text-2xl font-black">为什么这篇一直强调“具体地块、具体园区、具体项目”？</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              <p>• IEAT官方对工业园的定义本身就包含道路、排水、中央污水处理、防洪、电力和供水等基础设施，但不同园区公开的容量、收费和系统规格并不完全相同。</p>
              <p>• IEAT不同园区页面会分别列土地/厂房价格、维护费、水费、污水处理费、道路、电力、消防等，因此签约前应该查目标园区，而不是拿“IEAT平均情况”代替。</p>
              <p>• BOI Section 27土地权益针对获促进业务，并要求结合行业、土地使用计划及相关证明审查，所以BOI不能替代选址和土地尽调。</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-black text-sky-700">
              <a href="https://www.ieat.go.th/en/roles-responsibilities" target="_blank" rel="noreferrer" className="rounded-xl bg-sky-50 px-4 py-2">IEAT职责与工业园定义 ↗</a>
              <a href="https://www.ieat.go.th/en/estates/40" target="_blank" rel="noreferrer" className="rounded-xl bg-sky-50 px-4 py-2">IEAT园区公开参数示例 ↗</a>
              <a href="https://www.boi.go.th/index.php?language=en&page=procedures_land" target="_blank" rel="noreferrer" className="rounded-xl bg-sky-50 px-4 py-2">BOI土地权益 ↗</a>
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] bg-gradient-to-r from-slate-950 to-blue-950 p-7 text-white sm:p-9">
            <p className="text-xs font-black tracking-[.18em] text-cyan-300">NEXT STEP 04</p>
            <h2 className="mt-3 text-3xl font-black">IEAT、BOI、园区外，到底该走哪条路径？</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">下一步不再讲“优惠大全”，而是从土地、股权、税收、设备进口、外籍人员、限制和持续合规逐项比较，看看哪些政策真的适合你的项目。</p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
