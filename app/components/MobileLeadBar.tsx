"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const hiddenPrefixes = [
  "/consultation",
  "/free-plan",
  "/seo-monitor",
  "/content-center",
];

export default function MobileLeadBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [siteChecked, setSiteChecked] = useState(false);
  const [isFactoryTools, setIsFactoryTools] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname.toLowerCase();

    setIsFactoryTools(
      hostname === "tools.baihediy.com" ||
      pathname === "/tools" ||
      pathname.startsWith("/tools/")
    );
    setSiteChecked(true);
  }, [pathname]);

  // 首次加载时先不显示，避免 tools 子域名出现底栏闪烁。
  if (
    !siteChecked ||
    isFactoryTools ||
    hiddenPrefixes.some((prefix) => pathname.startsWith(prefix))
  ) {
    return null;
  }

  const copyWechat = async () => {
    const value = "13003137828";

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      {/* 给固定底栏预留空间，避免遮挡手机端页面底部内容 */}
      <div className="h-[82px] lg:hidden" aria-hidden="true" />

      {open && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button
            type="button"
            aria-label="关闭联系顾问面板"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
          />

          <section className="absolute inset-x-0 bottom-0 rounded-t-[28px] border-t border-slate-200 bg-white px-4 pb-[calc(18px+env(safe-area-inset-bottom))] pt-4 shadow-[0_-20px_60px_rgba(15,23,42,.18)]">
            <div className="mx-auto max-w-lg">
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-200" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[2px] text-sky-600">
                    Contact BaiheAI
                  </p>
                  <h2 className="mt-1 text-xl font-black text-slate-950">
                    选择一种方式联系顾问
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    如果项目还不清楚，建议先做 1 分钟需求诊断。
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl font-bold text-slate-600"
                  aria-label="关闭"
                >
                  ×
                </button>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href="tel:+66964080781"
                  className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-4 text-left transition active:scale-[0.99]"
                >
                  <span className="block text-lg">📞</span>
                  <span className="mt-2 block text-sm font-black text-sky-800">泰国电话</span>
                  <span className="mt-1 block text-xs text-slate-500">+66 964080781</span>
                </a>

                <a
                  href="tel:+8613003137828"
                  className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-4 text-left transition active:scale-[0.99]"
                >
                  <span className="block text-lg">📱</span>
                  <span className="mt-2 block text-sm font-black text-sky-800">中国电话</span>
                  <span className="mt-1 block text-xs text-slate-500">+86 13003137828</span>
                </a>

                <a
                  href="https://wa.me/8613003137828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-left transition active:scale-[0.99]"
                >
                  <span className="block text-lg">🟢</span>
                  <span className="mt-2 block text-sm font-black text-emerald-800">WhatsApp</span>
                  <span className="mt-1 block text-xs text-slate-500">直接发消息</span>
                </a>

                <a
                  href="https://line.me/ti/p/~liyanjun0773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-left transition active:scale-[0.99]"
                >
                  <span className="block text-lg">💬</span>
                  <span className="mt-2 block text-sm font-black text-emerald-800">LINE</span>
                  <span className="mt-1 block text-xs text-slate-500">liyanjun0773</span>
                </a>
              </div>

              <button
                type="button"
                onClick={copyWechat}
                className="mt-3 flex min-h-12 w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left"
              >
                <span>
                  <span className="block text-sm font-black text-slate-800">微信：13003137828</span>
                  <span className="mt-1 block text-xs text-slate-500">点击复制微信号</span>
                </span>
                <span className={`rounded-full px-3 py-1.5 text-xs font-black ${copied ? "bg-emerald-100 text-emerald-700" : "bg-white text-sky-700 shadow-sm"}`}>
                  {copied ? "已复制 ✓" : "复制"}
                </span>
              </button>

              <Link
                href="/consultation?from=mobile-contact-sheet"
                onClick={() => setOpen(false)}
                className="mt-4 block min-h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-4 text-center text-base font-black text-white shadow-lg shadow-sky-500/15"
              >
                不确定怎么说？先做 1 分钟需求诊断
              </Link>
            </div>
          </section>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-slate-200/90 bg-white/96 px-3 pb-[calc(8px+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_rgba(15,23,42,.10)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-[1.15fr_.85fr] gap-2">
          <Link
            href="/consultation?from=mobile-bar"
            className="flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-3 text-sm font-black text-white shadow-md shadow-sky-500/15 active:scale-[0.99]"
          >
            1 分钟需求诊断
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="min-h-12 rounded-xl border-2 border-emerald-300 bg-emerald-50 px-3 py-3 text-sm font-black text-emerald-800 active:scale-[0.99]"
          >
            联系顾问
          </button>
        </div>
      </div>
    </>
  );
}
