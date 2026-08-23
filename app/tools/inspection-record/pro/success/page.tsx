"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function QC01PurchaseSuccessPage() {
  const [status, setStatus] = useState<
    "checking" | "ready" | "downloading" | "error"
  >("checking");
  const [message, setMessage] = useState(
    "正在确认付款并准备下载… / Confirming payment and preparing your download…"
  );

  const transactionId = useMemo(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("transaction_id") || "";
  }, []);

  async function downloadPackage(auto = false) {
    if (!transactionId) {
      setStatus("error");
      setMessage(
        "没有收到订单编号。请保留付款确认信息并联系产品支持。 / Transaction ID is missing."
      );
      return;
    }

    setStatus("downloading");
    setMessage(
      auto
        ? "正在验证订单… / Verifying your order…"
        : "正在准备下载… / Preparing download…"
    );

    // Paddle may need a few seconds to finalize some payment methods.
    for (let attempt = 0; attempt < 8; attempt += 1) {
      try {
        const response = await fetch(
          `/api/paddle/download?transaction_id=${encodeURIComponent(transactionId)}`,
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

          setStatus("ready");
          setMessage(
            "下载已开始。如果浏览器没有自动下载，请点击下方按钮。 / Your download has started."
          );
          return;
        }

        if (response.status === 409 && attempt < 7) {
          setMessage(
            "付款已收到，Paddle 正在完成确认，请稍候… / Payment received. Waiting for final confirmation…"
          );
          await new Promise((resolve) => setTimeout(resolve, 2500));
          continue;
        }

        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to verify order");
      } catch (error) {
        console.error(error);
        setStatus("error");
        setMessage(
          "订单验证暂时没有完成。请稍后点击“重新验证并下载”。 / Order verification is not complete yet."
        );
        return;
      }
    }
  }

  useEffect(() => {
    if (!transactionId) {
      setStatus("error");
      setMessage(
        "没有收到订单编号。请保留付款确认信息并联系产品支持。 / Transaction ID is missing."
      );
      return;
    }

    setStatus("ready");
    const timer = window.setTimeout(() => {
      downloadPackage(true);
    }, 1200);

    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionId]);

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl font-black text-emerald-600">
          ✓
        </div>

        <div className="mt-6 text-xs font-bold tracking-[0.16em] text-blue-600">
          PAYMENT COMPLETED
        </div>

        <h1 className="mt-3 text-3xl font-black">
          付款完成 / Payment Completed
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          感谢购买 QC-01 Professional Edition。系统会验证 Paddle 正式订单后自动提供 ZIP Professional Package。
          <br />
          Thank you for purchasing QC-01 Professional Edition. Your ZIP package is released only after the live Paddle transaction is verified.
        </p>

        <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <div className="text-sm font-black text-slate-900">
            自动数字交付 / Automatic Digital Delivery
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{message}</p>
        </div>

        <button
          type="button"
          onClick={() => downloadPackage(false)}
          disabled={status === "downloading" || !transactionId}
          className="mt-7 w-full rounded-xl bg-[#0f2747] px-5 py-3 text-sm font-black text-white disabled:cursor-wait disabled:opacity-60"
        >
          {status === "downloading"
            ? "正在验证订单… / Verifying…"
            : "重新验证并下载 ZIP / Verify & Download ZIP"}
        </button>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/inspection-record/pro"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
          >
            返回商品页 / Back to Product
          </Link>

          <Link
            href="/support"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
          >
            产品支持 / Product Support
          </Link>
        </div>
      </div>
    </main>
  );
}
