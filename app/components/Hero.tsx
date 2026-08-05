import AICore from "./AICore";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden max-w-7xl mx-auto px-8 pt-44 pb-28"
    >
      {/* 背景光效 */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-600/15 blur-[220px] -z-20"></div>

      <div className="absolute right-0 top-32 w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-[150px] -z-10"></div>

      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* 左侧 */}
        <div>

          <p className="text-blue-400 uppercase tracking-[8px] font-semibold mb-6">
            AI Growth Partner
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            帮助中国企业
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              开拓东南亚市场
            </span>

          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-xl mb-12">
            BaiheAI 利用 AI 官网、AI 获客系统、
            自动化运营及海外品牌建设，
            帮助企业以更低成本、更高效率进入东南亚市场。
          </p>

          {/* 按钮 */}
          <div className="flex flex-wrap gap-5 mb-16">

            <button
              className="
              relative
              overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-9
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
              hover:shadow-cyan-500/30
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
                免费咨询
              </span>
            </button>

            <button
              className="
              rounded-xl
              border
              border-gray-700
              bg-white/5
              px-9
              py-4
              font-semibold
              backdrop-blur
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-white/10
              hover:text-blue-300
              "
            >
              查看服务
            </button>

          </div>

          {/* 数据 */}
          <div className="grid grid-cols-3 gap-10 max-w-xl border-t border-white/10 pt-8">

            <div>
              <div className="text-5xl font-black text-blue-400">
                100+
              </div>

              <p className="text-gray-500 mt-3">
                合作企业
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-blue-400">
                50+
              </div>

              <p className="text-gray-500 mt-3">
                AI 项目
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-blue-400">
                99%
              </div>

              <p className="text-gray-500 mt-3">
                客户满意度
              </p>
            </div>

          </div>

        </div>

        {/* 右侧 */}
        <div className="relative flex justify-center">

          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>

          <AICore />

        </div>

      </div>

    </section>
  );
}