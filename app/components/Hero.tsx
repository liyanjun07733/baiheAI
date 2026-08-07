"use client";

import Link from "next/link";
import AICore from "./AICore";

const mobileHighlights = ["泰国投资与 BOI 方向", "签证、场地与本地资源", "AI 官网与海外获客"];

const desktopServices = [
  "泰国投资咨询",
  "BOI 方向咨询",
  "签证与工作许可",
  "场地与本地资源",
  "中泰翻译陪同",
  "AI 官网与获客",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200/70 pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,#fbfdff_0%,#f4faff_52%,#f0fdf8_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-90px] top-14 h-72 w-72 rounded-full bg-sky-200/45 blur-[100px] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute right-[-100px] top-28 h-80 w-80 rounded-full bg-emerald-200/40 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:px-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:pb-24">
        <div className="relative z-10 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-2 text-[10px] font-black uppercase tracking-[1.8px] text-sky-700 shadow-sm sm:px-4 sm:text-sm sm:tracking-[3px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            China · Thailand · Southeast Asia
          </div>

          <h1 className="mt-6 text-[2.35rem] font-black leading-[1.08] tracking-[-.03em] text-slate-950 sm:text-5xl md:text-6xl xl:text-[4.35rem]">
            帮助中国企业
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              进入泰国及东南亚市场
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-bold leading-7 text-slate-800 sm:text-xl sm:leading-8">
            企业咨询、资源对接、项目落地与 AI 数字化，一站式协助企业从“想进入”走向“真正落地”。
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
            以泰国为核心，连接东南亚本地资源，协助企业梳理投资方向、BOI、签证、场地、翻译、品牌与海外获客。
          </p>

          <div className="mt-6 space-y-2 sm:hidden">
            {mobileHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-700">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 hidden grid-cols-2 gap-3 sm:grid">
            {desktopServices.map((item) => (
              <div key={item} className="flex min-h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_8px_22px_rgba(15,23,42,.04)]">
                <span className="shrink-0 text-emerald-600">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:flex sm:flex-row">
            <Link href="/free-plan" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center text-sm font-black text-white shadow-[0_12px_28px_rgba(14,165,233,.20)] transition hover:-translate-y-0.5 sm:px-7 sm:text-base">
              免费获取企业落地建议
            </Link>
            <Link href="/thailand-investment" className="rounded-xl border border-slate-300 bg-white px-6 py-4 text-center text-sm font-black text-slate-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 sm:px-7 sm:text-base">
              了解泰国投资服务
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 border-t border-slate-200 pt-6 sm:grid-cols-4 sm:gap-3">
            {[
              ["泰国", "核心市场"],
              ["24h", "快速回复"],
              ["1对1", "需求沟通"],
              ["本地", "资源协同"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white px-3 py-3 text-left shadow-[0_8px_22px_rgba(15,23,42,.04)] sm:p-4">
                <div className="text-lg font-black text-sky-700 sm:text-2xl">{value}</div>
                <div className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="relative w-full max-w-[560px] overflow-hidden rounded-[36px] border border-slate-200/90 bg-white/90 p-6 shadow-[0_26px_70px_rgba(15,23,42,.10)] backdrop-blur-xl xl:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-200/45 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-emerald-200/40 blur-[90px]" />

            <div className="relative flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[3px] text-sky-700">Business Bridge</p>
                <h3 className="mt-2 text-xl font-black text-slate-950 xl:text-2xl">
                  咨询 · 资源 · 落地 · AI 增长
                </h3>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">
                THAILAND
              </span>
            </div>

            <div className="relative mt-4 flex h-[370px] items-center justify-center overflow-hidden rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 xl:h-[410px]">
              <div className="scale-[0.88] xl:scale-[0.95]">
                <AICore />
              </div>
            </div>

            <div className="relative mt-4 grid grid-cols-3 gap-3">
              {[
                ["01", "前期咨询"],
                ["02", "项目落地"],
                ["03", "持续增长"],
              ].map(([num, label]) => (
                <div key={num} className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <div className="text-xs font-black text-sky-600">{num}</div>
                  <div className="mt-1 text-xs font-bold text-slate-700 xl:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
