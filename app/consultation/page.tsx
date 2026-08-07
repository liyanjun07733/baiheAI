import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConsultationWizard from "./ConsultationWizard";

export const metadata: Metadata = {
  title: "项目需求诊断 | 泰国投资与 AI 获客咨询",
  description:
    "用 1 分钟梳理泰国投资、BOI、公司注册、厂房选址、签证工作证、翻译、本地资源与 AI 获客需求，并获得下一步咨询方向。",
  alternates: {
    canonical: "/consultation",
  },
};

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#02060d] pt-20 text-white">
        <section className="relative border-b border-white/5 px-5 py-14 sm:px-6 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              BaiheAI · Project Diagnosis
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              1 分钟梳理您的
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                泰国落地与 AI 获客需求
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              不需要先懂 BOI、公司注册或 AI 技术。选择您当前的情况，我们先帮助您把项目方向整理清楚，再决定下一步。
            </p>
          </div>
        </section>

        <ConsultationWizard />
      </main>
      <Footer />
    </>
  );
}
