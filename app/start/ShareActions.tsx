"use client";

import { useState } from "react";

const SHARE_URL = "https://www.baihediy.com/start";

export default function ShareActions() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const input = document.createElement("textarea");
      input.value = SHARE_URL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  async function sharePage() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "BaiheAI｜泰国投资落地与企业出海服务",
          text: "泰国投资、BOI、项目落地、本地资源对接与 AI 数字化服务。",
          url: SHARE_URL,
        });
        return;
      } catch {
        return;
      }
    }
    await copyLink();
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={sharePage}
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-black text-white transition hover:scale-[1.02]"
      >
        分享给朋友
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
      >
        {copied ? "链接已复制 ✓" : "复制页面链接"}
      </button>
    </div>
  );
}
