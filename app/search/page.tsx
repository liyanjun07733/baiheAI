import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchResults from "./SearchResults";

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="page-enter min-h-screen bg-[#030711] pt-16 text-white sm:pt-20">
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold tracking-[.32em] text-cyan-300">SITE SEARCH / 站内搜索</p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">找到你需要的信息</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">搜索服务、泰国投资、BOI、政策实操、案例、团队介绍和免费资料。资料文件名也会自动进入搜索结果。</p>
          <Suspense fallback={<p className="mt-8 text-slate-500">正在加载搜索…</p>}>
            <SearchResults />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
