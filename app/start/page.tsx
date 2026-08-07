import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShareActions from "./ShareActions";
import { team } from "../data/team";

export const metadata = {
  title: "中国企业进入泰国｜BaiheAI 服务入口",
  description:
    "泰国投资咨询、BOI 方向、工厂与项目落地、本地资源对接、免费资料与 AI 数字化服务入口。",
  alternates: { canonical: "https://www.baihediy.com/start" },
  openGraph: {
    title: "中国企业进入泰国｜BaiheAI",
    description: "泰国投资、BOI、项目落地、本地资源对接与 AI 数字化服务。",
    url: "https://www.baihediy.com/start",
    images: ["/share/baiheai-share-card.svg"],
  },
};

const services = [
  ["泰国投资咨询", "进入泰国前的项目判断、路径梳理与风险点识别"],
  ["BOI 方向支持", "结合项目类型梳理可关注的政策方向与资料准备"],
  ["项目落地协助", "公司、签证、工作许可、厂房、办公室及本地资源对接"],
  ["翻译与商务支持", "中英泰沟通、文件翻译、商务陪同与项目协调"],
  ["AI 数字化增长", "企业官网、AI 客服、自动化、海外获客与品牌建设"],
  ["免费资料与知识", "政策文章、项目清单、实操资料与持续更新内容"],
];

export default function StartPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#02060d] pt-20 text-white">
        <section className="relative border-b border-white/5 px-5 py-16 sm:px-6 sm:py-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">BaiheAI · Thailand Business Partner</p>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
                中国企业进入泰国，
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">先把路径和资源找对</span>
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                BaiheAI 面向准备进入泰国及东南亚市场的中国企业，提供投资咨询、BOI 方向、项目落地、本地资源对接，以及 AI 数字化与海外获客支持。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/consultation" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-center font-black text-white">1 分钟项目需求诊断</Link>
                <Link href="/free-plan" className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.06] px-6 py-3.5 text-center font-bold text-cyan-200">提交详细项目需求</Link>
                <Link href="/resources" className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 text-center font-bold text-cyan-200">查看免费资料</Link>
                <Link href="/policies" className="rounded-xl border border-white/15 bg-white/[0.035] px-6 py-3.5 text-center font-bold text-slate-200">查看政策实操</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/25">
                <h2 className="text-lg font-black text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.015] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">Consultants</p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">直接认识负责项目沟通的人</h2>
              </div>
              <Link href="/about#team" className="text-sm font-bold text-cyan-300">查看完整顾问资料 →</Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {team.slice(0, 2).map((person) => (
                <Link key={person.name} href="/about#team" className="group rounded-3xl border border-white/10 bg-[#08111c] p-5 transition hover:border-cyan-400/30">
                  <div className="flex gap-4">
                    <div className="h-28 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                      <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-black">{person.name}</h3>
                      <p className="mt-1 text-sm font-bold text-cyan-300">{person.role}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {person.focus.slice(0, 3).map((item) => (
                          <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-7 text-slate-400">{person.responsibility}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-6 rounded-[32px] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] to-blue-500/[0.04] p-6 sm:p-8 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">SHARE BAIHEAI</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">把这个页面转给需要进入泰国的朋友</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                这个入口页集中展示核心服务、顾问、政策资料与咨询入口，适合直接转发到微信好友、微信群或朋友圈。
              </p>
              <div className="mt-6"><ShareActions /></div>
              <a href="/share/baiheai-share-card.svg" download className="mt-4 inline-block text-sm font-bold text-cyan-300">下载转发海报 →</a>
            </div>
            <div className="mx-auto rounded-3xl border border-white/10 bg-white p-4 shadow-2xl shadow-cyan-500/10">
              <img src="/share/start-qr.png" alt="BaiheAI 转发入口二维码" className="h-56 w-56" />
              <p className="mt-2 text-center text-xs font-bold text-slate-700">扫码进入 BaiheAI</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
