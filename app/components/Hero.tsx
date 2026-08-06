"use client";

import { useState } from "react";
import AICore from "./AICore";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const scrollToCases = () => {
    document
      .getElementById("cases")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          px-5
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          md:px-8
          lg:min-h-[calc(100vh-80px)]
          lg:pb-24
          lg:pt-36
        "
      >
        {/* 背景光效 */}
        <div className="absolute left-1/2 top-[-180px] -z-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[180px] sm:h-[900px] sm:w-[900px] sm:blur-[220px]" />

        <div className="absolute right-[-100px] top-28 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[130px] lg:h-[420px] lg:w-[420px]" />

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-24
          "
        >
          {/* 左侧价值内容 */}
          <div className="relative z-10 text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-300 sm:text-sm sm:tracking-[4px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              AI Growth Partner
            </div>

            <h1
              className="
                text-4xl
                font-black
                leading-[1.12]
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              帮助中国企业
              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                利用 AI 开拓
              </span>

              <br className="sm:hidden" />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                东南亚市场
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-white/90 sm:text-xl lg:mx-0">
              不只是建设网站，而是帮助企业获得海外客户。
            </p>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
                md:leading-9
                lg:mx-0
              "
            >
              BaiheAI 提供 AI 官网、AI 获客、自动化运营与海外品牌建设，
              帮助企业用更低成本进入泰国、越南、马来西亚和新加坡市场。
            </p>

            {/* 核心能力标签 */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                "AI 官网",
                "AI 获客",
                "AI 自动化",
                "海外品牌",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-300
                    backdrop-blur
                  "
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            {/* 按钮 */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="
                  relative
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:shadow-2xl
                  hover:shadow-cyan-500/25
                  before:absolute
                  before:inset-0
                  before:-translate-x-full
                  before:bg-gradient-to-r
                  before:from-transparent
                  before:via-white/20
                  before:to-transparent
                  before:transition-transform
                  before:duration-700
                  hover:before:translate-x-full
                "
              >
                <span className="relative z-10">
                  免费获取 AI 出海方案
                </span>
              </button>

              <button
                onClick={scrollToCases}
                className="
                  rounded-xl
                  border
                  border-gray-700
                  bg-white/5
                  px-8
                  py-4
                  font-bold
                  text-white
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-white/10
                  hover:text-blue-300
                "
              >
                查看成功案例
              </button>
            </div>

            {/* 价值数据 */}
            <div
              className="
                mt-10
                grid
                grid-cols-2
                gap-3
                border-t
                border-white/10
                pt-7
                sm:grid-cols-4
                sm:gap-5
              "
            >
              <div className="rounded-2xl bg-white/[0.03] p-4 text-center lg:text-left">
                <div className="text-2xl font-black text-blue-400 sm:text-3xl">
                  4+
                </div>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  核心 AI 服务
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] p-4 text-center lg:text-left">
                <div className="text-2xl font-black text-blue-400 sm:text-3xl">
                  24h
                </div>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  咨询快速回复
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] p-4 text-center lg:text-left">
                <div className="text-2xl font-black text-blue-400 sm:text-3xl">
                  4
                </div>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  重点市场覆盖
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] p-4 text-center lg:text-left">
                <div className="text-2xl font-black text-blue-400 sm:text-3xl">
                  1对1
                </div>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  出海方案咨询
                </p>
              </div>
            </div>

            {/* 服务行业 */}
            <div className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-[3px] text-gray-600">
                Serving Industries
              </p>

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-500 lg:justify-start">
                <span>制造业</span>
                <span>跨境电商</span>
                <span>酒店旅游</span>
                <span>贸易服务</span>
                <span>教育培训</span>
              </div>
            </div>
          </div>

          {/* 右侧 AI 视觉 */}
          <div
            className="
              relative
              flex
              min-h-[280px]
              items-center
              justify-center
              sm:min-h-[340px]
              lg:min-h-[560px]
              lg:self-center
              lg:-translate-y-4
            "
          >
            <div className="absolute h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[360px] sm:w-[360px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />

            <div className="relative scale-[0.68] sm:scale-[0.82] md:scale-90 lg:scale-100">
              <AICore />
            </div>

            <div className="absolute bottom-2 left-1/2 w-full max-w-sm -translate-x-1/2 text-center lg:bottom-8">
              <p className="text-xs uppercase tracking-[4px] text-cyan-400/70">
                AI · Automation · Growth
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}