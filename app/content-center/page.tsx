import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contentPlan } from "../data/contentPlan";

export const metadata: Metadata = {
  title: "泰国投资与企业落地内容中心｜BaiheAI",
  description:
    "围绕泰国投资、建厂、BOI、IEAT、公司注册、工作许可和企业落地，整理已经发布且可直接使用的实战内容。",
  alternates: { canonical: "https://www.baihediy.com/content-center" },
};

export default function ContentCenterPage() {
  const published = contentPlan.filter((item) => item.status === "已发布");

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
              不再展示“下一批准备写什么”。这里只保留已经发布、用户现在就能看的内容；泰国建厂相关内容则按真实项目顺序进入完整闭环。
            </p>
          </div>

          <section className="mt-12 rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 p-6 md:p-8">
            <p className="text-sm font-semibold text-cyan-300">THAILAND FACTORY JOURNEY</p>
            <h2 className="mt-2 text-3xl font-black">准备去泰国建厂？不要在几十篇文章里自己找顺序。</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/60">
              从租厂还是自建、选址、尽调、IEAT / BOI，到设计报批、施工、设备、用工和正式生产，按一个项目真正发生的顺序往下走。
            </p>
            <Link href="/thailand-investment" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">
              进入泰国建厂闭环 →
            </Link>
          </section>

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
                  <span className="text-xs font-semibold text-emerald-400">已发布</span>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
