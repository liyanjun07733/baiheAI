"use client";

import Link from "next/link";
import { useState } from "react";
import SiteSearch from "./SiteSearch";

const menus = [
  { name: "首页", href: "/" },
  { name: "服务中心", href: "/services" },
  { name: "泰国投资", href: "/thailand-investment" },
  { name: "顾问团队", href: "/about#team" },
  { name: "案例中心", href: "/cases" },
  { name: "知识中心", href: "/blog" },
  { name: "资料下载", href: "/resources" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,.04)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center px-4 sm:h-20 sm:px-6 xl:px-8">
        <Link href="/" className="shrink-0 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          Baihe<span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">AI</span>
        </Link>

        <nav className="ml-auto hidden min-w-0 items-center gap-1 text-[13px] font-bold text-slate-600 xl:flex 2xl:gap-2 2xl:text-sm">
          {menus.map((item, index) => (
            <Link
              key={`${item.href}-${item.name}`}
              href={item.href}
              className={`${index >= 5 ? "hidden 2xl:block" : "block"} whitespace-nowrap rounded-xl px-2.5 py-2.5 transition hover:bg-sky-50 hover:text-sky-700`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="ml-3 hidden shrink-0 items-center gap-2 2xl:flex">
          <SiteSearch />
          <Link href="/free-plan" className="whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-black text-white shadow-[0_8px_24px_rgba(14,165,233,.18)] transition hover:-translate-y-0.5">
            免费咨询
          </Link>
        </div>

        <Link href="/free-plan" className="ml-3 hidden shrink-0 whitespace-nowrap rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-black text-white shadow-[0_8px_24px_rgba(14,165,233,.18)] xl:block 2xl:hidden">
          免费咨询
        </Link>

        <button
          type="button"
          aria-label="打开导航菜单"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm xl:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/98 px-4 pb-5 pt-4 shadow-xl xl:hidden">
          <div className="mx-auto max-w-7xl">
            <SiteSearch mobile />
            <nav className="mt-4 grid grid-cols-2 gap-2">
              {menus.map((item) => (
                <Link
                  key={`${item.href}-${item.name}`}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/free-plan" onClick={() => setMenuOpen(false)} className="col-span-2 mt-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-center font-black text-white">
                免费获取企业落地建议
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
