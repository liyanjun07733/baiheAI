"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SandboxSuccessPage() {
  const [message, setMessage] = useState(
    "正在验证 Sandbox 订单… / Verifying sandbox transaction…"
  );
  const [busy, setBusy] = useState(true);

  function getTransactionId() {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("transaction_id") || "";
  }

  async function verifyAndDownload() {
    const transactionId = getTransactionId();

    if (!transactionId) {
      setBusy(false);
      setMessage("没有收到 transaction_id，无法测试自动交付。");
      return;
    }

    setBusy(true);

    for (let attempt = 0; attempt < 8; attempt += 1) {
      const response = await fetch(
        `/api/paddle/sandbox-download?transaction_id=${encodeURIComponent(transactionId)}`,
        { cache: "no-store" }
      );

      if (response.ok) {
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = "BaiheAI_QC01_Pro_V2_1.zip";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(objectUrl);

        setBusy(false);
        setMessage(
          "✅ Sandbox 订单验证成功，QC-01 ZIP 已开始自动下载。自动交付链路已打通。"
        );
        return;
      }

      if (response.status === 409 && attempt < 7) {
        setMessage("模拟付款已完成，等待 Paddle 最终确认…");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        continue;
      }

      const data = await response.json().catch(() => ({}));
      setBusy(false);
      setMessage(`❌ 交付测试失败：${data?.error || "Unknown error"}`);
      return;
    }

    setBusy(false);
    setMessage("❌ Paddle 长时间未确认 Sandbox 订单。");
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      verifyAndDownload();
    }, 800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl font-black text-emerald-600">
          ✓
        </div>

        <div className="mt-6 text-xs font-black tracking-[0.16em] text-amber-600">
          SANDBOX DELIVERY TEST
        </div>

        <h1 className="mt-3 text-3xl font-black">
          模拟付款成功 / Sandbox Payment Completed
        </h1>

        <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm font-semibold leading-7 text-slate-700">
            {message}
          </p>
        </div>

        <button
          onClick={verifyAndDownload}
          disabled={busy}
          className="mt-7 w-full rounded-xl bg-[#0f2747] px-5 py-3 text-sm font-black text-white disabled:opacity-50"
        >
          {busy
            ? "正在验证并准备下载…"
            : "重新验证并下载 ZIP / Verify & Download Again"}
        </button>

        <Link
          href="/inspection-record/pro/test"
          className="mt-5 inline-flex text-sm font-bold text-blue-700"
        >
          ← 返回 Sandbox 测试购买页
        </Link>
      </div>
    </main>
  );
}
