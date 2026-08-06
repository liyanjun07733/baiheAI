"use client";

import FadeUp from "./FadeUp";

export default function Testimonials() {

  const reviews = [

    {
      company: "深圳制造企业",
      name: "海外业务负责人",
      text: "BaiheAI 帮助我们建立 AI 外贸获客系统，仅三个月海外询盘增长 180%，团队效率提升明显。",
    },

    {
      company: "跨境电商品牌",
      name: "运营总监",
      text: "AI 自动化帮助我们节省了大量客服时间，让团队能够专注于业务增长。",
    },

    {
      company: "泰国酒店集团",
      name: "Marketing Manager",
      text: "官网升级、多语言 AI 客服上线后，海外订单转化率提升了 35%。",
    },

  ];

  return (

    <section
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        md:px-8
        py-20
        sm:py-24
        md:py-32
      "
    >

      <FadeUp>

        <div className="text-center mb-14 sm:mb-16 md:mb-20">

          <p
            className="
              text-blue-400
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              font-semibold
              text-sm
              sm:text-base
            "
          >
            TESTIMONIALS
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
            "
          >
            客户怎么评价我们
          </h2>

          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              mt-6
              max-w-3xl
              mx-auto
              leading-8
              md:leading-9
            "
          >
            每一次合作，
            我们都希望帮助客户真正实现业务增长。
          </p>

        </div>

      </FadeUp>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
        "
      >        {reviews.map((item, index) => (
          <FadeUp
            key={item.company}
            delay={index * 0.15}
          >
            <div
              className="
                group
                relative
                h-full
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-3xl
                border
                border-gray-800
                bg-gray-900/70
                backdrop-blur-xl
                p-7
                md:p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500
                hover:shadow-2xl
                hover:shadow-blue-500/20
              "
            >
              {/* 光效 */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  h-36
                  w-36
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-cyan-500/20
                "
              />

              <div className="relative">
                <div className="mb-5 text-xl tracking-widest text-yellow-400">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-8">
                  “{item.text}”
                </p>
              </div>

              <div className="relative mt-8 border-t border-gray-800 pt-6">
                <h4 className="text-lg font-bold text-white">
                  {item.company}
                </h4>

                <p className="mt-1 text-gray-500">
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