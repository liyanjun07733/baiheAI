import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { team } from "../data/team";
import TeamProfiles from "./TeamProfiles";

const capabilities = [
  ["泰国项目咨询", "市场进入、项目路径、BOI 方向与前期判断"],
  ["本地资源协作", "公司设立、财税法务、场地、翻译与商务陪同资源对接"],
  ["AI 数字化", "企业官网、海外获客、自动化运营与客户沟通系统"],
  ["长期执行支持", "从前期判断到项目推进与后续数字化运营持续协作"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-6 md:pt-40">
        <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">ABOUT BAIHEAI</p>
        <h1 className="mt-4 max-w-5xl break-words text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          连接中国企业与泰国本地资源
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
          BaiheAI 以泰国为重点，结合商业咨询、本地资源协作与 AI 数字化能力，帮助中国企业更清晰地判断市场进入路径，并提高项目落地与海外运营效率。
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 pb-20 sm:px-6 md:grid-cols-2">
        {capabilities.map(([title, desc]) => (
          <article key={title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <h2 className="break-words text-2xl font-black">{title}</h2>
            <p className="mt-4 break-words leading-8 text-gray-400">{desc}</p>
          </article>
        ))}
      </section>

      {team.length > 0 && (
        <section id="team" className="mx-auto scroll-mt-28 max-w-7xl px-5 pb-24 sm:px-6">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">OUR PEOPLE</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">团队与专业顾问</h2>
            <p className="mt-4 leading-8 text-gray-400">
              根据项目需求，由不同领域顾问参与咨询、沟通与执行。点击人员卡片中的“查看详细能力”，可了解服务领域与专业能力。
            </p>
          </div>
          <TeamProfiles members={team} />
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.05] p-7 sm:p-10">
          <h2 className="text-3xl font-black">有具体项目需要判断？</h2>
          <p className="mt-4 max-w-2xl leading-8 text-gray-400">
            先告诉我们行业、计划地区、投资阶段和目前卡点，我们再判断适合从哪一步开始。
          </p>
          <Link href="/free-plan" className="mt-7 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold">
            提交项目需求
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
