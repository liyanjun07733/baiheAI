"use client";

import Link from "next/link";
import FadeUp from "./FadeUp";

const serviceLinks = [
  { label: "泰国投资咨询", href: "/thailand-investment" },
  { label: "企业服务中心", href: "/services" },
  { label: "AI 官网与获客", href: "/services" },
  { label: "1 分钟项目诊断", href: "/consultation?from=footer" },
];

const companyLinks = [
  { label: "首页", href: "/" },
  { label: "成功案例", href: "/cases" },
  { label: "知识中心", href: "/blog" },
  { label: "关于我们", href: "/about" },
  { label: "政策操作", href: "/policies" },
  { label: "免费资料", href: "/resources" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-10">
          {/* 品牌介绍：手机占满整行，桌面恢复 1 列 */}
          <div className="col-span-2 lg:col-span-1">
            <FadeUp>
              <div>
                <Link href="/" className="inline-flex text-3xl font-black text-slate-950">
                  Baihe
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                    AI
                  </span>
                </Link>

                <p className="mt-5 text-sm font-black uppercase tracking-[3px] text-sky-700">
                  China · Thailand · SEA
                </p>

                <p className="mt-4 max-w-sm leading-8">
                  帮助中国企业进入泰国及东南亚市场，提供咨询、资源对接、项目协助与 AI 数字化服务。
                </p>
              </div>
            </FadeUp>
          </div>

          {/* 手机左列 */}
          <div className="col-span-1">
            <FadeUp delay={0.1}>
              <div>
                <h3 className="text-lg font-black text-slate-950">核心服务</h3>

                <ul className="mt-5 space-y-3">
                  {serviceLinks.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="font-semibold transition hover:text-sky-700"
                      >
                        → {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* 手机右列 */}
          <div className="col-span-1">
            <FadeUp delay={0.2}>
              <div>
                <h3 className="text-lg font-black text-slate-950">快速导航</h3>

                <ul className="mt-5 space-y-3">
                  {companyLinks.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="font-semibold transition hover:text-sky-700"
                      >
                        → {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* 联系方式：手机占满整行，桌面恢复 1 列 */}
          <div className="col-span-2 lg:col-span-1">
            <FadeUp delay={0.3}>
              <div>
                <h3 className="text-lg font-black text-slate-950">联系我们</h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="tel:+66964080781"
                    className="block rounded-xl border border-sky-200 bg-white px-4 py-3 font-bold text-sky-700 shadow-sm"
                  >
                    📞 +66 964080781
                  </a>

                  <a
                    href="https://line.me/ti/p/~liyanjun0773"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-emerald-200 bg-white px-4 py-3 font-bold text-emerald-700 shadow-sm"
                  >
                    💬 LINE：liyanjun0773
                  </a>

                  <a
                    href="https://wa.me/8613003137828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-emerald-200 bg-white px-4 py-3 font-bold text-emerald-700 shadow-sm"
                  >
                    🟢 WhatsApp
                  </a>

                  <a
                    href="mailto:liyanjun07733@gmail.com"
                    className="block break-all rounded-xl border border-blue-200 bg-white px-4 py-3 font-bold text-blue-700 shadow-sm"
                  >
                    ✉️ liyanjun07733@gmail.com
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm text-slate-500 md:flex-row md:px-8 md:text-left">
          <p>© 2026 BaiheAI. All Rights Reserved.</p>
          <p>企业咨询 · 资源对接 · 项目落地 · AI 增长</p>
        </div>
      </div>
    </footer>
  );
}
