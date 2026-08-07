import Link from "next/link";
import { team } from "../data/team";

export default function TeamPreview() {
  if (!team.length) return null;

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-400 sm:text-sm">
              Professional Team
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              认识负责项目落地的顾问
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              从泰国投资与 BOI 文件支持，到工厂规划、数字化建设与 AI 获客，由对应专业顾问参与项目沟通与执行。
            </p>
          </div>

          <Link
            href="/about#team"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.1]"
          >
            查看完整团队资料
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {team.slice(0, 2).map((person) => (
            <Link
              key={person.name}
              href="/about#team"
              className="group min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-6"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="h-[108px] w-[84px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:h-[128px] sm:w-[100px]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-cyan-400/90">
                    BaiheAI Consultant
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white sm:text-[28px]">
                    {person.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-bold leading-6 text-cyan-300 sm:text-base">
                    {person.role}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {person.focus.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-cyan-400/10 bg-cyan-400/[0.055] px-2.5 py-1 text-[11px] leading-5 text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-white/8 pt-4">
                <p className="line-clamp-2 text-sm leading-7 text-gray-400">
                  {person.responsibility}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-gray-500">点击查看详细能力与联系方式</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
