"use client";

import Link from "next/link";

const services = [
  "BOI 政策与申请方向",
  "公司与项目落地协助",
  "商务签证与工作许可",
  "厂房、仓库与办公场地",
  "中泰翻译与商务陪同",
  "泰国投资避坑咨询",
  "AI 官网与海外获客",
  "AI 自动化运营",
];

export default function FreePlanFooter() {
  return (
    <footer
      className="
        relative
        mt-20
        overflow-hidden
        border-t
        border-white/10
        bg-[#050914]
        text-gray-400
      "
    >
      {/* 背景光效 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-8 md:py-18">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 品牌 */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-3xl font-black text-white">
                Baihe
              </span>

              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
                AI
              </span>
            </Link>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[3px] text-blue-400">
              Thailand Investment & AI Growth
            </p>

            <p className="mt-4 max-w-sm leading-8 text-gray-400">
              帮助中国企业进入泰国与东南亚市场，
              提供投资落地咨询、本地执行协助和 AI 增长服务。
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Thailand", "BOI", "Visa", "Factory", "AI Growth"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* 咨询服务 */}
          <div>
            <h3 className="text-lg font-bold text-white">
              咨询服务
            </h3>

            <ul className="mt-5 space-y-3">
              {services.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 实操与增长 */}
          <div>
            <h3 className="text-lg font-bold text-white">
              实操与增长
            </h3>

            <ul className="mt-5 space-y-3">
              {services.slice(4).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
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
                href="https://line.me/ti/p/~liyanjun0773"
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
                    LINE
                  </span>

                  <span className="text-sm font-medium text-green-300">
                    liyanjun0773
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
                <span>🟢</span>

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
            </div>
          </div>
        </div>

        {/* 免责声明 */}
        <div className="mt-12 rounded-2xl border border-amber-500/15 bg-amber-500/[0.04] p-5">
          <p className="text-xs leading-6 text-gray-500">
            说明：BaiheAI 提供商业咨询、项目协助与资源对接服务。
            涉及 BOI、法律、税务、签证、工作许可及政府审批等事项时，
            最终意见与办理结果应由具备相应资质的专业机构或主管部门确认。
          </p>
        </div>

        {/* 底部 */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-white/10
            pt-6
            text-center
            text-sm
            text-gray-500
            md:flex-row
            md:text-left
          "
        >
          <p>© 2026 BaiheAI. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="transition hover:text-cyan-300">
              返回首页
            </Link>

            <a href="#top" className="transition hover:text-cyan-300">
              返回顶部
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
