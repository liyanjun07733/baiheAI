"use client";

import Script from "next/script";
import { useCallback, useState } from "react";

type PaddleEvent = {
  name?: string;
  data?: {
    transaction_id?: string;
    status?: string;
  };
};

declare global {
  interface Window {
    Paddle?: {
      Initialize: (options: {
        token: string;
        eventCallback?: (event: PaddleEvent) => void;
      }) => void;
      Checkout: {
        open: (options: {
          items: Array<{ priceId: string; quantity: number }>;
          settings?: {
            displayMode?: "overlay";
            variant?: "one-page" | "multi-page";
            theme?: "light" | "dark";
            locale?: "zh-Hans" | "en";
            successUrl?: string;
          };
        }) => void;
      };
    };
    __baihePaddleInitialized?: boolean;
  }
}

const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "";
const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID || "";

const STORAGE_KEY = "baiheai_qc01_pending_transaction";

function rememberTransaction(transactionId?: string) {
  if (!transactionId || typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, transactionId);
    window.sessionStorage.setItem(STORAGE_KEY, transactionId);
  } catch {
    // Storage can be unavailable in restrictive browser modes.
  }
}

export default function PaddleBuyButton() {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");

  const isConfigured = Boolean(
    token &&
      priceId &&
      !token.startsWith("test_")
  );

  const initializePaddle = useCallback(() => {
    if (!isConfigured) return;

    if (!window.Paddle) {
      setMessage("Paddle.js 还没有加载完成");
      return;
    }

    try {
      if (!window.__baihePaddleInitialized) {
        window.Paddle.Initialize({
          token,
          eventCallback: (event) => {
            // Paddle exposes the transaction ID as soon as checkout is loaded.
            // Save it before the buyer leaves the page for any payment flow.
            if (event?.name === "checkout.loaded") {
              rememberTransaction(event.data?.transaction_id);
            }

            // Keep the latest transaction ID as a fallback.
            // Fulfillment does NOT rely on this frontend event.
            if (event?.name === "checkout.completed") {
              rememberTransaction(event.data?.transaction_id);
              setMessage("付款流程已完成，正在进入订单确认页面…");
            }
          },
        });

        window.__baihePaddleInitialized = true;
      }

      setReady(true);
      setMessage("");
    } catch (error) {
      console.error("Paddle initialization failed:", error);
      setMessage("支付组件初始化失败，请稍后重试");
    }
  }, [isConfigured]);

  const openCheckout = () => {
    if (!window.Paddle || !ready) {
      setMessage("付款组件还没有准备好，请稍后再试");
      return;
    }

    const successUrl =
      `${window.location.origin}/inspection-record/pro/success`;

    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        theme: "light",
        locale: "zh-Hans",
        // Let Paddle handle the redirect. This is more reliable than
        // manually redirecting from checkout.completed.
        successUrl,
      },
    });
  };

  if (!isConfigured) {
    return (
      <>
        <button
          type="button"
          disabled
          className="mt-5 w-full cursor-not-allowed rounded-xl bg-amber-300/70 px-5 py-3.5 text-sm font-black text-slate-800"
        >
          正式支付配置中 · US$9.90
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">
          Live checkout configuration required.
        </p>
      </>
    );
  }

  return (
    <>
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onReady={initializePaddle}
        onError={() => setMessage("Paddle.js 加载失败，请检查网络")}
      />

      <button
        type="button"
        onClick={openCheckout}
        disabled={!ready}
        className={`mt-5 w-full rounded-xl px-5 py-3.5 text-sm font-black transition ${
          ready
            ? "bg-amber-300 text-slate-950 hover:bg-amber-200"
            : "cursor-wait bg-white/10 text-slate-400"
        }`}
      >
        {ready ? "立即购买 · US$9.90" : "正在连接支付…"}
      </button>

      <p className="mt-2 min-h-5 text-center text-xs text-slate-400">
        {message || "One-time purchase · Secure checkout · Digital product"}
      </p>
    </>
  );
}
