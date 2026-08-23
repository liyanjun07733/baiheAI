"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "baiheai_pending_transaction";

type DeliveryProduct = {
  slug: string;
  code: string;
  name: string;
  version: string;
  fileName: string;
  pagePath: string;
  downloadUrl: string;
};

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

export default function OrderSuccessPage() {
  const [status, setStatus] = useState<"checking" | "ready" | "error" | "missing">("checking");
  const [message, setMessage] = useState(
    "正在确认 Paddle 最终付款状态… / Confirming final payment status…"
  );
  const [products, setProducts] = useState<DeliveryProduct[]>([]);
  const autoDownloadStarted = useRef(false);

  const transactionId = useMemo(() => {
    if (typeof window === "undefined") return "";

    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("transaction_id") || params.get("_ptxn") || "";
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

    for (let attempt = 0; attempt < 120; attempt += 1) {
      try {
        const response = await fetch(
          `/api/paddle/download?mode=status&transaction_id=${encodeURIComponent(transactionId)}`,
          { cache: "no-store" }
        );

        if (response.ok) {
          const body = (await response.json()) as { products?: DeliveryProduct[] };
          const purchased = Array.isArray(body.products) ? body.products : [];

          if (purchased.length === 0) {
            setStatus("error");
            setMessage("订单已付款，但没有找到可交付产品。 / No registered delivery product found.");
            return;
          }

          setProducts(purchased);
          setStatus("ready");
          setMessage(
            purchased.length === 1
              ? `✅ 订单已确认，${purchased[0].name} 已准备好。 / Order verified. Your product is ready.`
              : `✅ 订单已确认，共 ${purchased.length} 个产品已准备好。 / Order verified. ${purchased.length} products are ready.`
          );

          // One product on desktop: start once automatically and always keep the button.
          if (!isMobileDevice() && purchased.length === 1 && !autoDownloadStarted.current) {
            autoDownloadStarted.current = true;
            window.setTimeout(() => {
              const link = document.createElement("a");
              link.href = purchased[0].downloadUrl;
              link.download = purchased[0].fileName;
              document.body.appendChild(link);
              link.click();
              link.remove();
            }, 600);
          }

          clearStoredTransaction();
          return;
        }

        if (response.status === 409) {
          setMessage(
            "付款已经提交，正在等待 Paddle 最终确认。部分支付方式可能需要几分钟，请不要关闭页面。 / Waiting for Paddle to finish payment capture…"
          );
          await new Promise((resolve) => setTimeout(resolve, 5000));
          continue;
        }

        const body = await response.json().catch(() => ({}));
        setStatus("error");
        setMessage(
          `订单验证失败：${body?.error || "Unknown error"} / Order verification failed.`
        );
        return;
      } catch (error) {
        console.error(error);
        if (attempt < 119) {
          setMessage("网络暂时中断，系统正在继续确认订单… / Retrying order verification…");
          await new Promise((resolve) => setTimeout(resolve, 5000));
          continue;
        }
        setStatus("error");
        setMessage("暂时无法连接订单验证服务，请稍后点击重新验证。 / Unable to verify the order right now.");
        return;
      }
    }

    setStatus("error");
    setMessage("付款确认时间较长。请保留 Paddle 付款邮件，稍后点击重新验证。 / Payment confirmation is taking longer than expected.");
  }

  useEffect(() => {
    verifyOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionId]);

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl font-black text-emerald-600">✓</div>

        <div className="mt-6 text-xs font-bold tracking-[0.16em] text-blue-600">PAYMENT & DELIVERY</div>
        <h1 className="mt-3 text-3xl font-black">付款确认与产品交付 / Payment & Delivery</h1>

        <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm font-semibold leading-7 text-slate-700">{message}</p>
        </div>

        {status === "ready" && products.length > 0 && (
          <div className="mt-7 space-y-3">
            {products.map((product) => (
              <a
                key={product.slug}
                href={product.downloadUrl}
                className="block w-full rounded-xl bg-emerald-600 px-5 py-4 text-sm font-black text-white hover:bg-emerald-700"
              >
                下载 {product.code} {product.name} / Download Product
              </a>
            ))}
          </div>
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
          PC：单个产品订单确认后会尝试自动下载，同时保留下载按钮。<br />
          Mobile：订单确认后显示下载按钮，由用户点击保存 ZIP。
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
            返回 Factory Tools / Back to Store
          </Link>
          <Link href="/support" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
            产品支持 / Product Support
          </Link>
        </div>
      </div>
    </main>
  );
}
