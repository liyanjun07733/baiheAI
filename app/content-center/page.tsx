import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contentPlan } from "../data/contentPlan";

export const metadata: Metadata = {
  title: "泰国投资与企业落地内容中心｜BaiheAI",
  description:
    "围绕泰国投资、BOI、公司注册、建厂选址、工作许可、商务支持与AI获客持续整理实用内容。",
  alternates: { canonical: "https://www.baihediy.com/content-center" },
};

export default function ContentCenterPage() {
  const published = contentPlan.filter((item) => item.status === "已发布");
  const upcoming = contentPlan.filter((item) => item.status !== "已发布");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              BAIHEAI CONTENT CENTER
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              泰国投资与企业落地内容中心
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/65">
              持续整理中国企业进入泰国与东南亚过程中常见的投资、建厂、公司注册、BOI、工作许可、商务支持和 AI 获客问题。
            </p>
          </div>

          <section className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-blue-400">PUBLISHED</p>
                <h2 className="mt-2 text-2xl font-bold">已经发布的实用指南</h2>
              </div>
              <Link href="/guides" className="text-sm font-semibold text-blue-400 hover:text-blue-300">
                查看全部指南 →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {published.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-emerald-400">已发布</span>
                    <span className="text-xs text-white/40">优先级：{item.priority}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.searchIntent}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="text-sm text-emerald-400">NEXT CONTENT</p>
            <h2 className="mt-2 text-2xl font-bold">下一批重点内容方向</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/55">
              这些主题来自客户在投资决策、建厂准备和海外获客阶段常见的搜索需求。发布时应优先补充真实经验、项目场景、官方来源和明确的咨询入口。
            </p>

            <div className="mt-6 space-y-3">
              {upcoming.map((item) => (
                <div key={item.slug} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-amber-300">{item.status}</span>
                        <span className="text-xs text-white/35">优先级：{item.priority}</span>
                      </div>
                      <h3 className="mt-2 font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/50">{item.searchIntent}</p>
                    </div>
                    <div className="text-xs text-white/35">计划路径：{item.slug}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              ["01", "先解决搜索问题", "每篇内容只围绕一个明确问题，标题直接对应客户搜索词。"],
              ["02", "再建立专业信任", "用真实项目经验、官方政策来源、流程和风险提示增强可信度。"],
              ["03", "最后引导咨询", "文章结尾连接服务页、资料页或免费咨询，让流量进入获客路径。"],
            ].map(([no, title, desc]) => (
              <div key={no} className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm font-bold text-blue-400">{no}</p>
                <h3 className="mt-2 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
