"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";

const serviceLinks = [
  { label: "泰国投资咨询", href: "/thailand-investment" },
  { label: "企业服务中心", href: "/services" },
  { label: "AI 官网与获客", href: "/services" },
  { label: "免费项目诊断", href: "/free-plan" },
];

const companyLinks = [
  { label: "首页", href: "/" },
  { label: "成功案例", href: "/cases" },
  { label: "知识中心", href: "/blog" },
  { label: "关于我们", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030711] text-gray-400">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-140px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FadeUp>
            <div>
              <Link href="/" className="inline-flex text-3xl font-black text-white">Baihe<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI</span></Link>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[3px] text-blue-400">China · Thailand · SEA</p>
              <p className="mt-4 max-w-sm leading-8">帮助中国企业进入泰国及东南亚市场，提供咨询、资源对接、项目协助与 AI 数字化服务。</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <h3 className="text-lg font-bold text-white">核心服务</h3>
              <ul className="mt-5 space-y-3">{serviceLinks.map((item) => <li key={item.href}><Link href={item.href} className="transition hover:text-cyan-300">→ {item.label}</Link></li>)}</ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h3 className="text-lg font-bold text-white">快速导航</h3>
              <ul className="mt-5 space-y-3">{companyLinks.map((item) => <li key={item.href}><Link href={item.href} className="transition hover:text-cyan-300">→ {item.label}</Link></li>)}</ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div>
              <h3 className="text-lg font-bold text-white">联系我们</h3>
              <div className="mt-5 space-y-3">
                <a href="tel:+66964080781" className="block rounded-xl border border-cyan-500/15 bg-cyan-500/[0.05] px-4 py-3 text-cyan-300">📞 +66 964080781</a>
                <a href="https://line.me/ti/p/~liyanjun0773" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-green-500/15 bg-green-500/[0.05] px-4 py-3 text-green-300">💬 LINE：liyanjun0773</a>
                <a href="https://wa.me/8613003137828" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-green-500/15 bg-green-500/[0.05] px-4 py-3 text-green-300">🟢 WhatsApp</a>
                <a href="mailto:liyanjun07733@gmail.com" className="block break-all rounded-xl border border-blue-500/15 bg-blue-500/[0.05] px-4 py-3 text-blue-300">✉️ liyanjun07733@gmail.com</a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm text-gray-500 md:flex-row md:px-8 md:text-left">
          <p>© 2026 BaiheAI. All Rights Reserved.</p>
          <p>企业咨询 · 资源对接 · 项目落地 · AI 增长</p>
        </div>
      </div>
    </footer>
  );
}
