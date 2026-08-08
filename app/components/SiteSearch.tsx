"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Result = {
  title: string;
  href: string;
  category: string;
  description: string;
};

export default function SiteSearch({ mobile = false, compact = false }: { mobile?: boolean; compact?: boolean }) {
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
      className={`relative ${mobile ? "w-full" : compact ? "w-[145px] 2xl:w-[205px]" : "w-[155px] 2xl:w-[210px]"}`}
    >
      <form onSubmit={submit} className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
          ⌕
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder={mobile && compact ? "搜索站内" : mobile ? "搜索 BOI、签证、厂房…" : "搜索站内内容"}
          aria-label="站内搜索"
          className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-8 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-sky-200 hover:bg-white focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
        />
        {loading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 animate-pulse text-xs text-sky-600">
            •••
          </span>
        )}
      </form>

      {open && (
        <div
          className={`z-[80] mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/98 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl ${
            mobile
              ? "fixed left-3 right-3 top-[58px] sm:left-auto sm:right-6 sm:top-[72px] sm:w-[420px]"
              : "absolute right-0 w-[380px]"
          }`}
        >
          {results.length > 0 ? (
            <div className="max-h-[420px] overflow-y-auto">
              {results.slice(0, 7).map((result) => (
                <button
                  type="button"
                  key={`${result.href}-${result.title}`}
                  onClick={() => goTo(result.href)}
                  className="block w-full rounded-xl px-4 py-3 text-left transition hover:bg-sky-50"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-sky-100 px-2 py-1 text-[10px] font-bold text-sky-700">
                      {result.category}
                    </span>
                    <span className="min-w-0 truncate text-sm font-bold text-slate-950">
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
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-center text-xs font-bold text-slate-600 transition hover:border-sky-300 hover:text-sky-700"
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
