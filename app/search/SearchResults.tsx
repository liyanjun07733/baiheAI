"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Result = { title: string; href: string; category: string; description: string };

export default function SearchResults() {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = params.get("q")?.trim() ?? "";
    setQuery(value);
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(value)}`, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => setResults(data.results ?? []))
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [params]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <>
      <form onSubmit={submit} className="mt-8 flex max-w-3xl gap-3">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例如：BOI、工作许可、厂房、AI 官网、投资资料" className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40" />
        <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white">搜索</button>
      </form>

      <div className="mt-10">
        {loading ? (
          <p className="text-slate-500">正在搜索…</p>
        ) : results.length > 0 ? (
          <div className="space-y-3">
            <p className="mb-5 text-sm text-slate-500">找到 {results.length} 条相关内容</p>
            {results.map((result) => (
              <a key={`${result.href}-${result.title}`} href={result.href} className="group block rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.045] sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-cyan-400/10 px-2.5 py-1 text-xs font-bold text-cyan-300">{result.category}</span>
                  <h2 className="text-lg font-black text-white transition group-hover:text-cyan-300 sm:text-xl">{result.title}</h2>
                </div>
                <p className="mt-3 leading-7 text-slate-400">{result.description}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-300">打开相关内容 →</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center sm:p-12">
            <div className="text-4xl">⌕</div>
            <h2 className="mt-4 text-xl font-black">没有找到匹配内容</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">可以尝试更短的关键词，例如“BOI”“签证”“厂房”“资料”“AI”。</p>
          </div>
        )}
      </div>
    </>
  );
}
