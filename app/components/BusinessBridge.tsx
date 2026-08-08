import Link from "next/link";
import FadeUp from "./FadeUp";

const services = [
  { icon: "🇹🇭", title: "泰国投资咨询", desc: "了解市场进入方向、项目条件与优先准备事项。" },
  { icon: "🏛️", title: "BOI 方向咨询", desc: "根据行业和项目情况，梳理政策方向与准备思路。" },
  { icon: "🛂", title: "签证与许可协助", desc: "对接商务签证、工作许可及相关专业服务资源。" },
  { icon: "🏭", title: "场地与项目落地", desc: "协助对接厂房、仓库、办公室与本地配套资源。" },
  { icon: "✅", title: "客户验厂咨询", desc: "协助准备客户来厂审核、现场考察、资料与沟通事项。" },
  { icon: "🗣️", title: "翻译与商务陪同", desc: "中泰翻译、文件翻译、会议陪同与实地沟通。" },
  { icon: "🤝", title: "本地资源牵线", desc: "根据项目需求连接可靠的本地合作与执行资源。" },
  { icon: "🌐", title: "AI 官网与品牌", desc: "建立面向海外客户的专业品牌入口与多语言官网。" },
  { icon: "📈", title: "AI 获客与自动化", desc: "通过内容、客服和流程自动化提升海外获客效率。" },
];

export default function BusinessBridge() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <FadeUp>
          <div className="max-w-3xl text-left sm:mx-auto sm:text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-blue-400 sm:text-sm sm:tracking-[4px]">WHAT WE CONNECT</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">企业进入泰国，需要的不只是信息</h2>
            <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">BaiheAI 帮助企业把咨询、资源、执行和数字化连接起来，减少沟通成本与落地盲区。</p>
          </div>
        </FadeUp>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4">
          {services.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.04}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/35 hover:bg-white/[0.055] sm:rounded-3xl sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-2xl sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-base font-bold leading-6 text-white sm:mt-5 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-gray-400 sm:mt-3 sm:text-base sm:leading-7">{item.desc}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link href="/services" className="inline-flex w-full justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-500/15 sm:w-auto">查看完整服务中心 →</Link>
        </div>
      </div>
    </section>
  );
}
