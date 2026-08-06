"use client";

import FadeUp from "./FadeUp";

export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-gray-800
        bg-black
        text-gray-400
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          md:px-8
          py-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >

        <FadeUp>

          <div>

            <h2
              className="
                text-3xl
                font-black
                text-white
                mb-5
              "
            >
              Baihe
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI
              </span>
            </h2>

            <p className="leading-8 text-gray-400">
              AI Growth Partner
              <br />
              帮助中国企业利用 AI
              <br />
              开拓东南亚市场。
            </p>

          </div>

        </FadeUp>

        <FadeUp delay={0.1}>

          <div>

            <h3 className="text-white font-semibold mb-5">
              服务
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-blue-400 transition">
                AI 官网开发
              </li>

              <li className="hover:text-blue-400 transition">
                AI 获客系统
              </li>

              <li className="hover:text-blue-400 transition">
                AI 自动化
              </li>

              <li className="hover:text-blue-400 transition">
                海外品牌建设
              </li>

            </ul>

          </div>

        </FadeUp>        <FadeUp delay={0.2}>

          <div>

            <h3 className="text-white font-semibold mb-5">
              公司
            </h3>

            <ul className="space-y-3">

              <li className="hover:text-blue-400 transition">
                关于我们
              </li>

              <li className="hover:text-blue-400 transition">
                成功案例
              </li>

              <li className="hover:text-blue-400 transition">
                合作流程
              </li>

              <li className="hover:text-blue-400 transition">
                联系我们
              </li>

            </ul>

          </div>

        </FadeUp>

        <FadeUp delay={0.3}>

          <div>

            <h3 className="text-white font-semibold mb-5">
              联系方式
            </h3>

            <ul className="space-y-3">

              <li>
                📍 Bangkok, Thailand
              </li>

              <li>
                📞 +66 964080781
              </li>

              <li>
                💬 WhatsApp：+86 13003137828
              </li>

              <li>
                💬 WeChat：baiheft
              </li>

              <li>
                📧 liyanjun07733@gmail.com
              </li>

            </ul>

          </div>

        </FadeUp>

      </div>

      <div
        className="
          border-t
          border-gray-800
          py-6
          text-center
          text-sm
          text-gray-500
        "
      >
        © 2026 BaiheAI. All Rights Reserved.
      </div>

    </footer>

  );
}