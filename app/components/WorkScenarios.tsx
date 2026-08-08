import Link from "next/link";
import FadeUp from "./FadeUp";

const scenarios = [
  {
    tag: "客户来厂验厂",
    icon: "✅",
    question: "客户下周要来验厂，但现场、资料和整改还没准备完整怎么办？",
    steps: ["先按客户关注点梳理检查清单", "现场与文件同步预查，列出问题项", "按优先级协助整改并准备沟通重点"],
    result: "交付：准备清单、问题记录、整改建议与现场沟通重点",
    href: "/factory-audit",
    cta: "查看验厂服务",
  },
  {
    tag: "无法亲自到泰国",
    icon: "🔎",
    question: "人在中国，想了解泰国供应商或工厂真实现场情况怎么办？",
    steps: ["先确认需要核实的重点与边界", "按约定赴现场查看并与工厂沟通", "整理照片、视频、观察记录与待确认事项"],
    result: "交付：现场考察记录、影像资料与重点问题反馈",
    href: "/factory-audit",
    cta: "了解委托现场验厂",
  },
  {
    tag: "准备进入泰国",
    icon: "🇹🇭",
    question: "准备去泰国投资建厂，但 BOI、公司、签证、场地先做哪个？",
    steps: ["先了解项目行业、投资计划和人员安排", "梳理 BOI 与项目落地的关键前置条件", "把公司、场地、签证与本地资源按顺序拆开"],
    result: "交付：前期事项清单、优先顺序与下一步对接方向",
    href: "/thailand-investment",
    cta: "查看泰国投资服务",
  },
  {
    tag: "海外客户增长",
    icon: "📈",
    question: "企业已经落地，但海外客户不知道我们、询盘也不稳定怎么办？",
    steps: ["梳理目标客户与海外展示内容", "建设多语言官网与可搜索内容入口", "逐步接入咨询、客服与业务流程自动化"],
    result: "交付：官网与内容入口、询盘路径及后续数字化建议",
    href: "/consultation?from=work-scenarios",
    cta: "做 1 分钟需求诊断",
  },
];

export default function WorkScenarios() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <FadeUp>
          <div className="max-w-3xl text-left sm:mx-auto sm:text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-cyan-500 sm:text-sm sm:tracking-[4px]">
              REAL WORK SCENARIOS
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:mt-5 sm:text-4xl md:text-5xl">
              不只告诉您“能做什么”，更说明遇到问题时怎么做
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              从客户真正遇到的场景出发，把问题、处理步骤和最终交付讲清楚，让合作前就知道我们如何介入。
            </p>
          </div>
        </FadeUp>

        <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {scenarios.map((item, index) => (
            <FadeUp key={item.question} delay={index * 0.06}>
              <article className="group h-full rounded-3xl border border-sky-100 bg-white/95 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_20px_55px_rgba(14,165,233,0.10)] sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-2xl">
                      {item.icon}
                    </span>
                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 sm:text-sm">
                      {item.tag}
                    </span>
                  </div>
                  <span className="text-xs font-black tracking-[.22em] text-sky-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black leading-8 text-slate-950 sm:text-2xl sm:leading-9">
                  {item.question}
                </h3>

                <div className="mt-5 space-y-3">
                  {item.steps.map((step, stepIndex) => (
                    <div key={step} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-black text-sky-700">
                        {stepIndex + 1}
                      </span>
                      <p className="text-sm font-medium leading-7 text-slate-700 sm:text-base">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-4">
                  <p className="text-sm font-bold leading-6 text-emerald-800 sm:text-base">{item.result}</p>
                </div>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-900 sm:text-base"
                >
                  {item.cta} <span aria-hidden="true">→</span>
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.18}>
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-lg font-black text-slate-950 sm:text-xl">您的情况不在上面？</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">告诉我们现在卡在哪一步，我们先帮您判断应该从哪里开始。</p>
            </div>
            <Link
              href="/consultation?from=work-scenarios-bottom"
              className="shrink-0 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02] sm:text-base"
            >
              1 分钟需求诊断
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
