"use client";

import { useEffect, useState } from "react";

const BOI_URL = "https://www.boi.go.th/index.php?language=en&page=guides";

export default function BoiOfficialClient() {
  const [copied, setCopied] = useState(false);
  const [isWeChat, setIsWeChat] = useState(false);

  useEffect(() => {
    setIsWeChat(/MicroMessenger/i.test(navigator.userAgent));
  }, []);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(BOI_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const input = document.createElement("textarea");
      input.value = BOI_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-slate-500">BOI OFFICIAL URL</p>
        <p className="mt-3 break-all text-sm leading-7 text-cyan-200">{BOI_URL}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={BOI_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-slate-950"
        >
          尝试打开 BOI 官网 ↗
        </a>
        <button
          type="button"
          onClick={copyUrl}
          className="inline-flex items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[.07] px-5 py-3 font-bold text-cyan-200"
        >
          {copied ? "已复制官网地址 ✓" : "复制 BOI 官网地址"}
        </button>
      </div>

      {isWeChat ? (
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[.06] p-4 text-sm leading-7 text-amber-100/85">
          微信内置浏览器可能限制部分境外官方网站。若按钮无法打开，请先复制上面的 BOI 官网地址，再点击微信右上角菜单，选择“在浏览器打开”后粘贴访问。
        </div>
      ) : (
        <p className="text-sm leading-7 text-slate-500">如果官方页面无法直接打开，可复制地址后使用系统浏览器访问。</p>
      )}
    </div>
  );
}
