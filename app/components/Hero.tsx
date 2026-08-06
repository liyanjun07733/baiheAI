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
    <section id="home" className="relative overflow-hidden border-b border-white/5 pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-blue-600/18 blur-[120px] sm:h-[700px] sm:w-[700px] sm:blur-[180px]" />
        <div className="absolute right-[-160px] top-48 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 md:px-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:pb-20">
        <div className="relative z-10 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[1.8px] text-cyan-300 sm:px-4 sm:text-sm sm:tracking-[3px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            China · Thailand · Southeast Asia
          </div>

          <h1 className="mt-5 text-[2.35rem] font-black leading-[1.08] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl xl:text-7xl">
            帮助中国企业
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              进入泰国及东南亚市场
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/90 sm:mt-6 sm:text-xl sm:leading-8">
            企业咨询、资源对接、项目落地与 AI 数字化，一站式协助企业从“想进入”走向“真正落地”。
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-4 sm:text-lg sm:leading-8">
            以泰国为核心，连接东南亚本地资源，协助企业梳理投资方向、BOI、签证、场地、翻译、品牌与海外获客。
          </p>

          <div className="mt-6 space-y-2 sm:hidden">
            {mobileHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-gray-200">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs text-cyan-300">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 hidden grid-cols-2 gap-3 sm:grid">
            {desktopServices.map((item) => (
              <div key={item} className="flex min-h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-gray-300 backdrop-blur">
                <span className="shrink-0 text-cyan-400">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-row">
            <Link href="/free-plan" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center text-sm font-bold text-white shadow-xl shadow-cyan-500/10 transition hover:scale-[1.02] sm:px-7 sm:text-base">
              免费获取企业落地建议
            </Link>
            <Link href="/thailand-investment" className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 text-center text-sm font-bold text-white transition hover:border-cyan-500/50 hover:bg-white/[0.08] sm:px-7 sm:text-base">
              了解泰国投资服务
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-2 border-t border-white/10 pt-5 sm:grid-cols-4 sm:gap-3 sm:pt-7">
            {[
              ["泰国", "核心市场"],
              ["24h", "快速回复"],
              ["1对1", "需求沟通"],
              ["本地", "资源协同"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-white/[0.035] px-3 py-3 text-left sm:rounded-2xl sm:p-4">
                <div className="text-lg font-black text-cyan-300 sm:text-2xl">{value}</div>
                <div className="mt-1 text-[11px] leading-4 text-gray-500 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="flex flex-col items-center gap-4 xl:gap-6">
            <AICore />
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-center backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[3px] text-cyan-400">Business Bridge</p>
              <p className="mt-2 text-sm text-gray-400">咨询 · 资源 · 落地 · AI 增长</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
