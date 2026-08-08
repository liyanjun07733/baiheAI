import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "服务合作方案 | 泰国投资落地与 AI 获客",
  description:
    "BaiheAI 面向中国企业提供泰国投资前期诊断、项目落地协作、本地资源对接及 AI 官网与海外获客服务。根据项目实际范围确定合作方式。",
  alternates: {
    canonical: "/packages",
  },
};

const packages = [
  {
    tag: "START",
    title: "方向诊断",
    subtitle: "适合：刚开始考虑泰国或东南亚市场",
    desc: "先把项目目标、行业、时间、重点问题和潜在路径整理清楚，再决定是否需要进入正式服务。",
    items: [
      "项目需求快速梳理",
      "泰国投资 / BOI 初步方向",
      "公司、场地、签证等需求拆分",
      "优先事项与下一步建议",
    ],
    cta: "先做 1 分钟诊断",
    href: "/consultation?from=packages",
  },
  {
    tag: "LANDING",
    title: "泰国落地协作",
    subtitle: "适合：已经准备进入泰国或正在推进项目",
    desc: "围绕企业实际阶段，把咨询、资料、本地资源和执行支持组合起来，减少多头沟通和信息断层。",
    items: [
      "投资路径与前期事项梳理",
      "BOI 文件与沟通支持",
      "公司设立及本地服务资源对接",
      "厂房 / 仓库 / 办公场地协助",
      "签证、工作许可方向协助",
      "中泰翻译、商务陪同与现场协作",
    ],
    cta: "提交项目情况",
    href: "/free-plan",
  },
  {
    tag: "GROWTH",
    title: "AI 海外获客系统",
    subtitle: "适合：希望在东南亚建立稳定线上获客能力",
    desc: "不只做一个网站，而是把官网、搜索内容、客户入口、AI 与自动化组合成持续可积累的获客基础。",
    items: [
      "海外官网与多语言内容结构",
      "SEO 搜索获客内容",
      "客户需求诊断与咨询入口",
      "AI 客服 / 知识库方向",
      "自动化运营与线索整理",
      "持续内容与转化优化",
    ],
    cta: "了解 AI 获客服务",
    href: "/services",
  },
];

const principles = [
  ["不强推固定套餐", "企业项目差异很大，先确认范围，再决定合作内容。"],
  ["按阶段拆分", "前期判断、正式落地、长期运营可以分阶段推进。"],
  ["不承诺审批结果", "BOI、签证及政府相关事项以主管部门最终审核为准。"],
  ["先解决关键问题", "优先处理会影响投资决策、落地时间和获客结果的事项。"],
];

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#030711] pt-20 text-white">
        <section className="relative border-b border-white/5 px-5 py-16 sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />
          <div className="relative mx-auto max-w-6xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
              SERVICE PACKAGES
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              不先卖套餐，
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                先判断企业真正需要什么。
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              泰国投资、建厂、BOI、本地资源和 AI 获客通常不是一个标准产品。
              BaiheAI 按项目阶段组合服务，避免企业为暂时不需要的项目提前投入。
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/consultation?from=packages"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-black text-white"
              >
                1 分钟项目需求诊断
              </Link>
              <Link
                href="/free-plan"
                className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.06] px-7 py-4 font-bold text-cyan-200"
              >
                提交详细项目需求
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-3xl border p-6 sm:p-8 ${
                  index === 1
                    ? "border-cyan-400/30 bg-cyan-400/[0.055] shadow-2xl shadow-cyan-500/5"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <p className="text-xs font-black tracking-[0.3em] text-cyan-300">
                  {item.tag}
                </p>
                <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm font-bold text-slate-300">
                  {item.subtitle}
                </p>
                <p className="mt-5 leading-7 text-slate-400">{item.desc}</p>

                <div className="mt-7 space-y-3">
                  {item.items.map((service) => (
                    <div
                      key={service}
                      className="rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-slate-300"
                    >
                      ✓ {service}
                    </div>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className={`mt-7 block rounded-xl px-5 py-3.5 text-center font-black ${
                    index === 1
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-200"
                  }`}
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-9">
            <div className="max-w-3xl">
              <p className="text-xs font-black tracking-[0.28em] text-cyan-300">
                HOW WE QUOTE
              </p>
              <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                合作费用怎么确定？
              </h2>
              <p className="mt-4 leading-8 text-slate-400">
                不在网站上虚构统一价格。我们会根据项目范围、执行周期、涉及地区、资料复杂度和需要协调的资源确认工作内容，再给出对应报价。
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/8 bg-black/20 p-5"
                >
                  <h3 className="font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link href="/trust" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
              <p className="text-xs font-black tracking-[0.24em] text-cyan-300">SERVICE BOUNDARY</p>
              <h2 className="mt-3 text-xl font-black">合作前先看服务边界 →</h2>
              <p className="mt-3 leading-7 text-slate-400">哪些事项由我们协助、哪些需要专业第三方、哪些最终由主管部门决定。</p>
            </Link>
            <Link href="/faq" className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
              <p className="text-xs font-black tracking-[0.24em] text-cyan-300">FAQ</p>
              <h2 className="mt-3 text-xl font-black">合作前常见问题 →</h2>
              <p className="mt-3 leading-7 text-slate-400">BOI、公司注册、场地、签证、费用与 AI 海外获客常见问题集中说明。</p>
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
            <div>
              <h2 className="text-2xl font-black">不知道应该选哪一种？</h2>
              <p className="mt-2 text-slate-400">
                先做需求诊断。我们先理解项目，再决定应该从咨询、落地还是获客开始。
              </p>
            </div>
            <Link
              href="/consultation?from=packages"
              className="mt-5 block shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-black text-white sm:mt-0"
            >
              开始项目诊断 →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
