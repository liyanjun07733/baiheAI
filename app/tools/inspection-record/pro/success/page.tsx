"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "baiheai_qc01_pending_transaction";

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

export default function QC01PurchaseSuccessPage() {
  const [status, setStatus] = useState<
    "checking" | "ready" | "error" | "missing"
  >("checking");
  const [message, setMessage] = useState(
    "正在确认 Paddle 最终付款状态… / Confirming final payment status…"
  );
  const [downloadUrl, setDownloadUrl] = useState("");
  const autoDownloadStarted = useRef(false);

  const transactionId = useMemo(() => {
    if (typeof window === "undefined") return "";

    const params = new URLSearchParams(window.location.search);

    const fromUrl =
      params.get("transaction_id") ||
      params.get("_ptxn") ||
      "";

    if (fromUrl) return fromUrl;

    try {
      return (
        window.sessionStorage.getItem(STORAGE_KEY) ||
        window.localStorage.getItem(STORAGE_KEY) ||
        ""
      );
    } catch {
      return "";
    }
  }, []);

  function clearStoredTransaction() {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage failures.
    }
  }

  async function verifyOrder() {
    if (!transactionId) {
      setStatus("missing");
      setMessage(
        "没有找到本次订单编号。请保留 Paddle 付款邮件并联系产品支持。 / Transaction ID was not found."
      );
      return;
    }

    setStatus("checking");

    // WeChat Pay is a deferred-capture method. Paddle says capture can
    // normally be quick but may take up to around 10 minutes.
    for (let attempt = 0; attempt < 120; attempt += 1) {
      try {
        const statusResponse = await fetch(
          `/api/paddle/download?mode=status&transaction_id=${encodeURIComponent(
            transactionId
          )}`,
          { cache: "no-store" }
        );

        if (statusResponse.ok) {
          const directDownload =
            `/api/paddle/download?transaction_id=${encodeURIComponent(
              transactionId
            )}`;

          setDownloadUrl(directDownload);
          setStatus("ready");
          setMessage(
            "✅ 订单已确认，QC-01 Professional Package 已准备好。 / Order verified. Your product is ready."
          );

          // Desktop: start the ZIP download automatically once.
          // Mobile: keep a large manual download button because mobile
          // browsers handle ZIP files differently.
          if (!isMobileDevice() && !autoDownloadStarted.current) {
            autoDownloadStarted.current = true;
            window.setTimeout(() => {
              const link = document.createElement("a");
              link.href = directDownload;
              link.download = "BaiheAI_QC01_Pro_V2_1.zip";
              document.body.appendChild(link);
              link.click();
              link.remove();
            }, 600);
          }

          clearStoredTransaction();
          return;
        }

        if (statusResponse.status === 409) {
          setMessage(
            "付款已经提交，正在等待 Paddle 最终确认。微信支付可能需要几分钟，请不要关闭页面。 / Waiting for Paddle to finish payment capture…"
          );
          await new Promise((resolve) => setTimeout(resolve, 5000));
          continue;
        }

        const body = await statusResponse.json().catch(() => ({}));
        setStatus("error");
        setMessage(
          `订单验证失败：${body?.error || "Unknown error"} / Order verification failed.`
        );
        return;
      } catch (error) {
        console.error(error);

        if (attempt < 119) {
          setMessage(
            "网络暂时中断，系统正在继续确认订单… / Retrying order verification…"
          );
          await new Promise((resolve) => setTimeout(resolve, 5000));
          continue;
        }

        setStatus("error");
        setMessage(
          "暂时无法连接订单验证服务，请稍后点击重新验证。 / Unable to verify the order right now."
        );
        return;
      }
    }

    setStatus("error");
    setMessage(
      "付款确认时间较长。请保留 Paddle 付款邮件，稍后点击重新验证。 / Payment confirmation is taking longer than expected."
    );
  }

  useEffect(() => {
    verifyOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionId]);

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl font-black text-emerald-600">
          ✓
        </div>

        <div className="mt-6 text-xs font-bold tracking-[0.16em] text-blue-600">
          PAYMENT & DELIVERY
        </div>

        <h1 className="mt-3 text-3xl font-black">
          付款确认与产品交付 / Payment & Delivery
        </h1>

        <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm font-semibold leading-7 text-slate-700">
            {message}
          </p>
        </div>

        {status === "ready" && downloadUrl && (
          <a
            href={downloadUrl}
            className="mt-7 block w-full rounded-xl bg-emerald-600 px-5 py-4 text-sm font-black text-white hover:bg-emerald-700"
          >
            下载 QC-01 Professional ZIP / Download Product
          </a>
        )}

        {(status === "error" || status === "missing") && (
          <button
            type="button"
            onClick={verifyOrder}
            className="mt-7 w-full rounded-xl bg-[#0f2747] px-5 py-3.5 text-sm font-black text-white"
          >
            重新验证订单 / Verify Again
          </button>
        )}

        <div className="mt-6 text-xs leading-6 text-slate-400">
          PC：订单确认后会尝试自动下载，同时保留下载按钮。<br />
          Mobile：订单确认后显示下载按钮，由用户点击保存 ZIP。
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
