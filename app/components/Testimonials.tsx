"use client";

import FadeUp from "./FadeUp";

export default function Testimonials() {
  const reviews = [
    {
      company: "深圳制造企业",
      name: "海外业务负责人",
      text:
        "BaiheAI 帮助我们建立 AI 外贸获客系统，仅三个月海外询盘增长 180%，团队效率提升明显。",
    },
    {
      company: "跨境电商品牌",
      name: "运营总监",
      text:
        "AI 自动化帮助我们节省了大量客服时间，让团队能够专注于业务增长。",
    },
    {
      company: "泰国酒店集团",
      name: "Marketing Manager",
      text:
        "官网升级、多语言 AI 客服上线后，海外订单转化率提升了 35%。",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <FadeUp>
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl font-black mt-5">
            客户怎么评价我们
          </h2>

          <p className="text-gray-400 text-xl mt-6">
            每一次合作，都希望帮助客户真正实现增长。
          </p>
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {reviews.map((item, index) => (
          <FadeUp
            key={index}
            delay={index * 0.2}
          >
            <div
              className="
                h-full
                flex
                flex-col
                justify-between
                bg-gray-900/80
                border
                border-gray-800
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-2xl
                hover:shadow-blue-500/20
              "
            >
              <div>
                <div className="text-yellow-400 text-xl mb-5">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-8 min-h-[130px]">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h4 className="font-bold text-lg">
                  {item.company}
                </h4>

                <p className="text-gray-500 mt-1">
                  {item.name}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}