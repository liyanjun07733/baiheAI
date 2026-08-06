import Link from "next/link";
import FadeUp from "./FadeUp";

const focus = [
  "项目是否适合进入泰国",
  "BOI 与投资路径如何理解",
  "公司、签证与工作许可如何准备",
  "厂房、仓库和办公室如何筛选",
  "合同、翻译和合作方如何降低风险",
  "进入市场后如何建立品牌与客户来源",
];

export default function ThailandFocus() {
  return (
    <section className="py-16 sm:py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <FadeUp>
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.08] to-white/[0.02] p-5 sm:rounded-3xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-amber-300 sm:text-sm sm:tracking-[4px]">THAILAND FOCUS</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">以泰国为起点，连接东南亚市场</h2>
            <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">泰国是许多中国企业进入东南亚的重要落点，但真正落地涉及政策、场地、人员、合同、本地沟通与后续获客。我们帮助企业先把关键问题想清楚，再连接合适资源。</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:flex sm:flex-row">
              <Link href="/thailand-investment" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center text-sm font-bold text-white sm:text-base">了解泰国投资</Link>
              <Link href="/free-plan" className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 text-center text-sm font-bold text-white sm:text-base">提交项目需求</Link>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="grid gap-3 sm:gap-4">
            {focus.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:gap-4 sm:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-xs font-black text-cyan-300 sm:h-10 sm:w-10 sm:text-sm">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm font-medium leading-6 text-gray-300 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
