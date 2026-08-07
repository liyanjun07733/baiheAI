import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BoiOfficialClient from "./BoiOfficialClient";

export const metadata = {
  title: "BOI 官方入口",
  description: "泰国投资促进委员会 BOI 官方指南入口与微信访问备用方式。",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030711] pt-20 text-white">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-bold tracking-[.28em] text-cyan-300">OFFICIAL SOURCE</p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">BOI 官方指南入口</h1>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            这里提供泰国投资促进委员会（BOI）官方指南入口。微信内置浏览器有时会限制外部网站，因此同时提供“复制官网地址”的备用方式。
          </p>

          <BoiOfficialClient />

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/policies/boi-2026" className="rounded-xl border border-white/15 px-5 py-3 font-bold text-white">
              ← 返回 BOI 政策说明
            </Link>
            <Link href="/policies" className="rounded-xl border border-white/15 px-5 py-3 font-bold text-white">
              返回政策中心
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
