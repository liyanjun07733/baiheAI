import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const journey = [
  {
    no: "01",
    title: "租厂还是自建",
    desc: "先决定是用现金换速度，还是用长期投入换自主性。",
    href: "/thailand-investment/factory-rent-or-build",
    status: "已上线",
    caseLabel: "",
  },
  {
    no: "02",
    title: "选址与园区性质",
    desc: "园区外、IEAT、BOI不能混成一个概念，先看项目真正需要什么。",
    href: "/thailand-investment/factory-location",
    status: "已上线",
    caseLabel: "",
  },
  { no: "03", title: "土地 / 厂房尽调", desc: "用途、电力、污水、道路、消防、扩建空间，签约前逐项确认。", href: "/thailand-investment/factory-due-diligence", status: "已上线", caseLabel: "" },
  { no: "04", title: "IEAT / BOI路径", desc: "不追求“优惠最多”，只判断哪些政策真的适合你的项目。", href: "/thailand-investment/ieat-boi-path", status: "已上线", caseLabel: "政策误区：IEAT与BOI不是二选一" },
  { no: "05", title: "设计与报批", desc: "从生产工艺倒推厂房设计，避免建完才发现用途或许可不匹配。", href: "/thailand-investment/factory-design-approval", status: "已上线", caseLabel: "真实案例：厂房前楼隔成宿舍后才发现用途问题" },
  { no: "06", title: "施工与现场管理", desc: "承包商、材料、安保、变更、工期，很多损失都发生在这一段。", href: "/thailand-investment/factory-construction-management", status: "已上线", caseLabel: "真实案例：AMATA City Chonburi 2 施工期电缆被盗" },
  { no: "07", title: "设备进场与验收", desc: "电力、消防、设备基础、BOI机器进口、安装调试与正式生产之间还有一段距离。", href: "/thailand-investment/factory-equipment-commissioning", status: "已上线", caseLabel: "" },
  { no: "08", title: "泰国员工招聘", desc: "工资只是第一层，还要看区域劳动力、通勤和管理方式。", status: "整理中", caseLabel: "" },
  { no: "09", title: "中国员工与工作许可", desc: "Non-B、Work Permit、BOI/IEAT便利不能用一句“4:1”概括。", status: "整理中", caseLabel: "" },
  { no: "10", title: "正式生产与运营", desc: "加班、园区规则、环保、安全、供应链和日常合规才是真正的长期成本。", status: "整理中", caseLabel: "" },
];

export default function ThailandInvestmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6fbff] pt-16 text-slate-950 sm:pt-20">
        <section className="relative overflow-hidden border-b border-sky-100 bg-white">
          <div className="absolute left-[-8rem] top-[-9rem] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-[-7rem] top-12 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-5xl">
              <p className="text-xs font-black tracking-[.28em] text-sky-600">THAILAND FACTORY JOURNEY</p>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                中国企业去泰国建厂，<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">按真实项目顺序一步一步看。</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                不再按“BOI、公司注册、签证”把知识拆成一堆入口。这里按一个老板真实做项目的顺序，从租厂还是自建，一直走到投产和用工。
              </p>
              <div className="mt-7 rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                我们只做一件事：把政策、现场经验和真实风险放在同一条时间线上。政策好，不代表对每一个项目都好。
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black tracking-[.22em] text-sky-600">PROJECT ROADMAP</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">泰国建厂闭环</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500">已上线的步骤可以直接进入深度页面；其余内容会按这个顺序继续补齐，不再横向堆文章。</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {journey.map((item) => {
              const ready = Boolean(item.href);
              const content = (
                <div className={`group h-full rounded-3xl border p-6 transition sm:p-7 ${ready ? "border-sky-200 bg-white shadow-[0_14px_40px_rgba(37,99,235,.06)] hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_50px_rgba(37,99,235,.11)]" : "border-slate-200 bg-white/70"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-black text-sky-600">{item.no}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-black ${ready ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{item.status}</span>
                  </div>
                  <h3 className="mt-7 text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                  {item.caseLabel && (
                    <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-black leading-6 text-rose-700">
                      🔴 {item.caseLabel}
                    </div>
                  )}
                  {ready && <div className="mt-6 text-sm font-black text-sky-700">进入这一步 →</div>}
                </div>
              );
              return ready ? <Link key={item.no} href={item.href!}>{content}</Link> : <div key={item.no}>{content}</div>;
            })}
          </div>

          <div className="mt-12 rounded-[2rem] border border-rose-200 bg-white p-6 shadow-[0_14px_40px_rgba(225,29,72,.06)] sm:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-black tracking-[.2em] text-rose-600">REAL PROJECT CASES</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">真实项目经历，不藏在文章最下面</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-500">这些不是网上拼出来的“案例模板”，而是我们实际项目中遇到过、并需要结合园区规则和现行政策重新核实的问题。</p>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              <Link href="/thailand-investment/factory-construction-management" className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 transition hover:-translate-y-1 hover:border-rose-300">
                <div className="text-xs font-black text-rose-700">施工现场 · 春武里</div>
                <h3 className="mt-3 text-xl font-black leading-8">AMATA City Chonburi 2：施工期电缆被盗</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">从变压器到低压柜的电缆被剪走。真正的损失不是铜线，而是重新采购、重新施工和工期等待。</p>
                <div className="mt-4 text-sm font-black text-rose-700">看完整案例 →</div>
              </Link>

              <Link href="/thailand-investment/factory-design-approval" className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 transition hover:-translate-y-1 hover:border-rose-300">
                <div className="text-xs font-black text-rose-700">建筑用途 · IEAT项目经历</div>
                <h3 className="mt-3 text-xl font-black leading-8">厂房前楼隔成宿舍，建完才发现真正的问题在“用途”</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">自己的厂房，不等于里面任何空间都可以随意改成住宿。先建后问，往往比审批本身贵得多。</p>
                <div className="mt-4 text-sm font-black text-rose-700">看完整案例 →</div>
              </Link>

              <Link href="/thailand-investment/ieat-boi-path" className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 transition hover:-translate-y-1 hover:border-rose-300">
                <div className="text-xs font-black text-rose-700">政策判断 · IEAT / BOI</div>
                <h3 className="mt-3 text-xl font-black leading-8">政策好，不代表对每一个项目都好</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">IEAT、BOI、园区外不是简单的“谁优惠更多”，而是不同项目在土地、审批、税收和持续合规上的取舍。</p>
                <div className="mt-4 text-sm font-black text-rose-700">看政策路径 →</div>
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <p className="text-xs font-black tracking-[.18em] text-amber-700">写作原则</p>
            <h2 className="mt-3 text-2xl font-black">不是替政策做宣传，而是帮投资人判断代价。</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-700">
              每个页面都会尽量按“真实问题 → 对比 → 政策核实 → 现场案例 → 避坑清单”来写。遇到只能代表某个园区、某个项目的经验，会明确写成项目经历，不把它扩大成泰国统一法律。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
