import Link from "next/link";
import FadeUp from "./FadeUp";

export default function HomeCTA() {
  return (
    <section className="px-5 py-20 sm:px-6 md:px-8 md:py-28">
      <FadeUp>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-blue-600/15 p-7 text-center sm:p-10 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-300">START YOUR PROJECT</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black text-white sm:text-4xl md:text-5xl">准备进入泰国市场，或正在寻找可靠的本地协助？</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">告诉我们您的行业、投资计划和当前问题，我们会先帮您梳理方向，再判断下一步需要连接哪些资源。</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/free-plan" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-bold text-white">免费提交项目需求</Link>
            <Link href="/about" className="rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 font-bold text-white">了解 BaiheAI</Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
