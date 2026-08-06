"use client";

import Link from "next/link";
import { useState } from "react";

const menus = [
  { name: "首页", href: "/" },
  { name: "服务中心", href: "/services" },
  { name: "泰国投资", href: "/thailand-investment" },
  { name: "案例中心", href: "/cases" },
  { name: "知识中心", href: "/blog" },
  { name: "关于我们", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          Baihe<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AI</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-300 lg:flex">
          {menus.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/free-plan"
            className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02] sm:inline-flex"
          >
            免费咨询
          </Link>
          <button
            type="button"
            aria-label="打开导航菜单"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 pb-5 pt-3 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
            {menus.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/free-plan"
              onClick={() => setMenuOpen(false)}
              className="col-span-2 mt-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center font-bold text-white"
            >
              免费获取企业落地建议
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
