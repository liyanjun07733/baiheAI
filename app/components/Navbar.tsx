"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          border-b
          border-white/5
          bg-black/40
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-black/30
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            px-5
            md:px-8
            py-4
            md:py-5
          "
        >

          {/* Logo */}
          <a href="#home" className="group">
            <h1
              className="
                text-2xl
                md:text-3xl
                font-black
                tracking-tight
                text-white
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,.5)]
              "
            >
              Baihe
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </a>

          {/* PC导航 */}
          <nav className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

            <a
              href="#home"
              className="relative transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              首页
            </a>

            <a
              href="#services"
              className="relative transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              服务
            </a>

            <a
              href="#about"
              className="relative transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              关于我们
            </a>

            <a
              href="#contact"
              className="relative transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              联系我们
            </a>

          </nav>

          <div className="flex items-center gap-3">

            {/* PC咨询按钮 */}
            <button
              onClick={() => setOpen(true)}
              className="
                hidden
                md:block
                relative
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
                hover:shadow-cyan-500/30
              "
            >
              免费咨询
            </button>

            {/* 手机菜单按钮 */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                flex
                flex-col
                justify-center
                gap-1.5
                w-10
                h-10
              "
            >
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
            </button>

          </div>
        </div>          {/* 手机菜单 */}
          {menuOpen && (
            <div
              className="
                md:hidden
                border-t
                border-white/10
                bg-black/95
                backdrop-blur-xl
              "
            >
              <nav className="flex flex-col px-6 py-5 space-y-5">

                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  首页
                </a>

                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  服务
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  关于我们
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  联系我们
                </a>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setOpen(true);
                  }}
                  className="
                    mt-3
                    w-full
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  免费咨询
                </button>

              </nav>
            </div>
          )}

      </header>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}