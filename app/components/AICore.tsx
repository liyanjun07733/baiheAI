export default function AICore() {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px]">

      {/* 最外层光晕 */}
      <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-[180px] animate-pulse"></div>

      {/* 第二层光晕 */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[120px]"></div>

      {/* 外圈 */}
      <div
        className="absolute w-[430px] h-[430px] rounded-full border border-blue-500/20 animate-spin"
        style={{ animationDuration: "25s" }}
      />

      {/* 第二圈 */}
      <div
        className="absolute w-[340px] h-[340px] rounded-full border border-cyan-400/30 animate-spin"
        style={{
          animationDuration: "16s",
          animationDirection: "reverse",
        }}
      />

      {/* 第三圈 */}
      <div className="absolute w-[250px] h-[250px] rounded-full border border-blue-300/20"></div>

      {/* AI 核心 */}
      <div
        className="
        relative
        flex
        items-center
        justify-center
        w-48
        h-48
        rounded-full
        bg-gradient-to-br
        from-cyan-300
        via-blue-500
        to-blue-900
        shadow-[0_0_100px_rgba(59,130,246,.8)]
        animate-pulse
      "
      >
        {/* 内层 */}
        <div className="w-24 h-24 rounded-full bg-black/70 border border-cyan-300 flex items-center justify-center">

          {/* 能量点 */}
          <div className="w-6 h-6 rounded-full bg-cyan-200 shadow-[0_0_30px_#67e8f9] animate-ping"></div>

        </div>
      </div>

      {/* 漂浮粒子 */}
      <div className="absolute top-10 left-20 text-cyan-300 text-2xl animate-pulse">
        ✦
      </div>

      <div className="absolute top-20 right-10 text-blue-400 text-xl animate-pulse">
        ✦
      </div>

      <div className="absolute bottom-16 left-10 text-cyan-300 text-xl animate-pulse">
        ✦
      </div>

      <div className="absolute bottom-10 right-16 text-blue-300 text-2xl animate-pulse">
        ✦
      </div>

      <div className="absolute top-32 right-24 w-2 h-2 rounded-full bg-cyan-300"></div>

      <div className="absolute bottom-28 left-24 w-2 h-2 rounded-full bg-blue-400"></div>

      <div className="absolute left-8 top-1/2 w-3 h-3 rounded-full bg-cyan-300 animate-pulse"></div>

      <div className="absolute right-8 top-1/2 w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>

    </div>
  );
}