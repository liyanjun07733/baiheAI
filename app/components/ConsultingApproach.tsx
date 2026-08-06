import FadeUp from "./FadeUp";

const points = [
  { title: "先理解业务", desc: "从行业、产品、预算和目标市场出发，而不是先推销固定套餐。" },
  { title: "再连接资源", desc: "根据项目阶段，对接适合的泰国本地执行与专业服务资源。" },
  { title: "同步数字化", desc: "在落地同时规划官网、品牌、获客和自动化，避免业务上线后没有客户入口。" },
  { title: "持续协同", desc: "项目不是一次性交付，后续可继续支持内容、运营与系统优化。" },
];

export default function ConsultingApproach() {
  return (
    <section className="py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">WHY BAIHEAI</p>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">我们做的是企业之间的连接与协同</h2>
            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">AI 是工具，真正的价值是帮助企业找到方向、连接资源并推动项目落地。</p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {points.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <div className="text-4xl font-black text-blue-500/35">0{index + 1}</div>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-400">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
