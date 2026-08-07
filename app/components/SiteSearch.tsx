"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Result = {
  title: string;
  href: string;
  category: string;
  description: string;
};

export default function SiteSearch({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const value = query.trim();
    if (!value) {
      setResults([]);
      setOpen(false);
      return;
    }

    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(value)}`, {
          cache: "no-store",
        });
        const data = await response.json();
        setResults(data.results ?? []);
        setOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 160);

    return () => window.clearTimeout(timer);
  }, [query]);

  function goTo(href: string) {
    setOpen(false);
    setQuery("");
    if (href.startsWith("/downloads/")) {
      window.location.href = href;
      return;
    }
    router.push(href);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    if (results.length > 0) goTo(results[0].href);
    else router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <div
      ref={boxRef}
      className={`relative ${mobile ? "w-full" : "w-[155px] 2xl:w-[210px]"}`}
    >
      <form onSubmit={submit} className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
          ⌕
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder={mobile ? "搜索 BOI、签证、厂房…" : "搜索站内内容"}
          aria-label="站内搜索"
          className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.05] pl-9 pr-8 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.075]"
        />
        {loading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 animate-pulse text-xs text-cyan-300">
            •••
          </span>
        )}
      </form>

      {open && (
        <div
          className={`absolute z-[80] mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#07101d]/98 p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl ${
            mobile ? "left-0 right-0" : "right-0 w-[360px]"
          }`}
        >
          {results.length > 0 ? (
            <div className="max-h-[420px] overflow-y-auto">
              {results.slice(0, 7).map((result) => (
                <button
                  type="button"
                  key={`${result.href}-${result.title}`}
                  onClick={() => goTo(result.href)}
                  className="block w-full rounded-xl px-4 py-3 text-left transition hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[10px] font-bold text-cyan-300">
                      {result.category}
                    </span>
                    <span className="min-w-0 truncate text-sm font-bold text-white">
                      {result.title}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {result.description}
                  </p>
                </button>
              ))}
              <button
                type="button"
                onClick={() => router.push(`/search?q=${encodeURIComponent(query.trim())}`)}
                className="mt-1 w-full rounded-xl border border-white/10 px-4 py-3 text-center text-xs font-bold text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                查看全部搜索结果 →
              </button>
            </div>
          ) : !loading ? (
            <div className="px-4 py-5 text-center text-sm text-slate-500">
              暂时没有找到相关内容
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
