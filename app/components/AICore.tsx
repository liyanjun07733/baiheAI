export default function AICore() {
  return (
    <div className="relative flex h-[390px] w-[390px] items-center justify-center xl:h-[440px] xl:w-[440px]">
      <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/10 blur-[150px] animate-pulse xl:h-[480px] xl:w-[480px]" />
      <div className="absolute h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-[110px] xl:h-[390px] xl:w-[390px]" />

      <div
        className="absolute h-[360px] w-[360px] rounded-full border border-blue-500/20 xl:h-[410px] xl:w-[410px]"
        style={{ animation: "spin 25s linear infinite" }}
      />
      <div
        className="absolute h-[285px] w-[285px] rounded-full border border-cyan-400/30 xl:h-[325px] xl:w-[325px]"
        style={{ animation: "spin 16s linear infinite reverse" }}
      />
      <div className="absolute h-[210px] w-[210px] rounded-full border border-blue-300/20 xl:h-[235px] xl:w-[235px]" />

      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-900 shadow-[0_0_90px_rgba(59,130,246,.65)] animate-pulse xl:h-44 xl:w-44">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300 bg-black/70 xl:h-24 xl:w-24">
          <div className="h-5 w-5 rounded-full bg-cyan-200 shadow-[0_0_28px_#67e8f9] animate-ping" />
        </div>
      </div>

      <span className="absolute left-12 top-10 text-xl text-cyan-300 animate-pulse">✦</span>
      <span className="absolute right-10 top-16 text-lg text-blue-400 animate-pulse">✦</span>
      <span className="absolute bottom-14 left-8 text-lg text-cyan-300 animate-pulse">✦</span>
      <span className="absolute bottom-8 right-14 text-xl text-blue-300 animate-pulse">✦</span>
      <span className="absolute left-3 top-1/2 h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
      <span className="absolute right-3 top-1/2 h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
    </div>
  );
}
