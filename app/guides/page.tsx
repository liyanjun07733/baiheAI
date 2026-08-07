import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "泰国投资指南｜BOI・注册公司・建厂・工业园・工作证",
  description: "面向中国企业整理泰国投资、BOI申请、公司注册、建厂、工业园区选择、商务签证与工作许可等实操指南。",
  alternates: { canonical: "https://www.baihediy.com/guides" },
};

const guides = [
  ["泰国投资咨询：项目落地前先判断什么？", "从行业、股权、BOI可能性、场地、人员与时间表六个方面梳理。", "/guides/thailand-investment-consulting", "泰国投资咨询"],
  ["泰国 BOI 申请指南", "理解是否属于可促进活动、前期资料、审批关注点与后续落地衔接。", "/guides/thailand-boi-application", "BOI申请"],
  ["中国企业在泰国注册公司指南", "先区分业务模式、股权结构、外商经营限制，再进入公司设立。", "/guides/thailand-company-registration", "泰国注册公司"],
  ["泰国建厂前期准备指南", "场地、产线、许可、公用工程、人员、供应链和投产节奏如何前置规划。", "/guides/thailand-factory-setup", "泰国建厂"],
  ["泰国工业园区怎么选", "从客户供应链、港口物流、劳动力、公用工程、扩产空间等维度比较。", "/guides/thailand-industrial-estate", "泰国工业园区"],
  ["泰国工作证与商务签证指南", "区分入境、停留与合法工作的不同要求，避免把签证和工作许可混为一谈。", "/guides/thailand-work-permit", "泰国工作证"],
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-32 text-center sm:px-6 lg:pt-40">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">THAILAND BUSINESS GUIDES</p>
        <h1 className="mt-5 text-4xl font-black sm:text-6xl">泰国投资与企业落地指南</h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">围绕中国企业最常搜索、也最容易在落地阶段踩坑的问题，整理成可持续更新的专题页面。</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:px-6 md:grid-cols-2 lg:px-8">
        {guides.map(([title, desc, href, tag]) => (
          <Link key={href} href={href} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 sm:p-8">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">{tag}</span>
            <h2 className="mt-5 text-2xl font-black leading-tight group-hover:text-cyan-200">{title}</h2>
            <p className="mt-4 leading-8 text-gray-400">{desc}</p>
            <span className="mt-6 inline-block text-sm font-bold text-cyan-300">阅读全文 →</span>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
