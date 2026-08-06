"use client";

import FadeUp from "./FadeUp";

const serviceLinks = [
  { label: "AI 官网开发", href: "#services" },
  { label: "AI 获客系统", href: "#services" },
  { label: "AI 自动化", href: "#solutions" },
  { label: "海外品牌建设", href: "#whychoose" },
];

const companyLinks = [
  { label: "首页", href: "#home" },
  { label: "为什么选择我们", href: "#about" },
  { label: "成功案例", href: "#cases" },
  { label: "合作流程", href: "#process" },
  { label: "联系我们", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
        text-gray-400
      "
    >
      {/* 背景光效 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-140px] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-140px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 品牌 */}
          <FadeUp>
            <div>
              <a href="#home" className="inline-flex items-center gap-1">
                <span className="text-3xl font-black text-white sm:text-4xl">
                  Baihe
                </span>

                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                  AI
                </span>
              </a>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[3px] text-blue-400">
                AI Growth Partner
              </p>

              <p className="mt-4 max-w-sm leading-8 text-gray-400">
                帮助中国企业利用 AI 官网、AI 获客和自动化运营，
                以更低成本进入东南亚市场。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Thailand", "Vietnam", "Malaysia", "Singapore"].map(
                  (country) => (
                    <span
                      key={country}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-400"
                    >
                      {country}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeUp>

          {/* 服务 */}
          <FadeUp delay={0.1}>
            <div>
              <h3 className="text-lg font-bold text-white">
                服务
              </h3>

              <ul className="mt-5 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 transition hover:text-cyan-300"
                    >
                      <span className="text-blue-400">→</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* 快速导航 */}
          <FadeUp delay={0.2}>
            <div>
              <h3 className="text-lg font-bold text-white">
                快速导航
              </h3>

              <ul className="mt-5 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 transition hover:text-cyan-300"
                    >
                      <span className="text-blue-400">→</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* 联系方式 */}
          <FadeUp delay={0.3}>
            <div>
              <h3 className="text-lg font-bold text-white">
                联系方式
              </h3>

              <div className="mt-5 space-y-3">
                <a
                  href="tel:+66964080781"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-cyan-500/15
                    bg-cyan-500/[0.05]
                    px-4
                    py-3
                    transition
                    hover:border-cyan-400/40
                    hover:bg-cyan-500/10
                  "
                >
                  <span>📞</span>

                  <span>
                    <span className="block text-xs text-gray-500">
                      Thailand
                    </span>
                    <span className="text-sm font-medium text-cyan-300">
                      +66 964080781
                    </span>
                  </span>
                </a>

                <a
                  href="https://wa.me/8613003137828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-green-500/15
                    bg-green-500/[0.05]
                    px-4
                    py-3
                    transition
                    hover:border-green-400/40
                    hover:bg-green-500/10
                  "
                >
                  <span>💬</span>

                  <span>
                    <span className="block text-xs text-gray-500">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium text-green-300">
                      +86 13003137828
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:liyanjun07733@gmail.com"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-blue-500/15
                    bg-blue-500/[0.05]
                    px-4
                    py-3
                    transition
                    hover:border-blue-400/40
                    hover:bg-blue-500/10
                  "
                >
                  <span>✉️</span>

                  <span className="min-w-0">
                    <span className="block text-xs text-gray-500">
                      Email
                    </span>
                    <span className="block break-all text-sm font-medium text-blue-300">
                      liyanjun07733@gmail.com
                    </span>
                  </span>
                </a>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-xs text-gray-500">
                    WeChat
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-300">
                    baiheft
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 底部 CTA */}
        <FadeUp delay={0.4}>
          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-between
              gap-5
              rounded-3xl
              border
              border-cyan-500/20
              bg-gradient-to-r
              from-blue-500/10
              via-cyan-500/[0.06]
              to-blue-500/10
              p-6
              text-center
              sm:p-8
              lg:flex-row
              lg:text-left
            "
          >
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                准备好进入东南亚市场了吗？
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-gray-400">
                获取一份适合您企业当前阶段的 AI 官网、获客与自动化建议。
              </p>
            </div>

            <a
              href="#contact"
              className="
                w-full
                shrink-0
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-7
                py-4
                text-center
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
                hover:shadow-cyan-500/20
                sm:w-auto
              "
            >
              免费获取 AI 出海方案
            </a>
          </div>
        </FadeUp>
      </div>

      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            px-5
            py-6
            text-center
            text-sm
            text-gray-500
            sm:px-6
            md:flex-row
            md:px-8
            md:text-left
          "
        >
          <p>© 2026 BaiheAI. All Rights Reserved.</p>

          <p>
            AI 赋能企业出海东南亚
          </p>
        </div>
      </div>
    </footer>
  );
}
