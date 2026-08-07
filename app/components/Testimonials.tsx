import Link from "next/link";
import FadeUp from "./FadeUp";

const trustPoints = [
  {
    icon: "📌",
    title: "案例公开不造数据",
    desc: "未获得客户公开授权的项目，不使用虚构公司名、评价、增长百分比或订单数据作为成交证明。",
  },
  {
    icon: "🧾",
    title: "服务范围先确认",
    desc: "正式合作前先明确工作内容、责任边界、需要客户提供的资料，以及哪些事项需要第三方专业机构参与。",
  },
  {
    icon: "🏛️",
    title: "审批结果不做保证",
    desc: "BOI、签证、工作许可及其他政府审批事项，以相应主管部门的正式审核结果为准。",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400 sm:tracking-[6px]">TRUST FIRST</p>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              信任不是靠夸大的数字，
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">而是把事实与边界说清楚</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              网站现阶段公开的案例以项目方法示例为主；真实客户名称、图片、评价与经营数据只在获得授权后发布。
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {trustPoints.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-7">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 leading-8 text-gray-400">{item.desc}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.35}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/cases" className="rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 text-center font-bold text-white">
              查看案例与项目方法
            </Link>
            <Link href="/about#team" className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 text-center font-bold text-cyan-200">
              查看顾问资料
            </Link>
            <Link href="/trust" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-center font-black text-white">
              查看合作原则
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
