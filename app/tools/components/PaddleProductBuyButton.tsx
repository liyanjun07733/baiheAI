"use client";

import Script from "next/script";
import { useCallback, useMemo, useState } from "react";
import { getProductBySlug } from "../lib/products.generated";

type PaddleEvent = {
  name?: string;
  data?: {
    transaction_id?: string;
    status?: string;
  };
};

type PaddleClient = {
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

const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "";
const STORAGE_KEY = "baiheai_pending_transaction";

function getPaddle() {
  return (window as unknown as { Paddle?: PaddleClient }).Paddle;
}

function rememberTransaction(transactionId?: string) {
  if (!transactionId || typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, transactionId);
    window.sessionStorage.setItem(STORAGE_KEY, transactionId);
  } catch {
    // Storage may be unavailable in restrictive browser modes.
  }
}

export default function PaddleProductBuyButton({
  productSlug,
  className = "",
}: {
  productSlug: string;
  className?: string;
}) {
  const product = useMemo(() => getProductBySlug(productSlug), [productSlug]);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");

  const isConfigured = Boolean(
    product &&
      product.enabled &&
      product.priceId &&
      token &&
      !token.startsWith("test_")
  );

  const initializePaddle = useCallback(() => {
    if (!isConfigured) return;

    const paddle = getPaddle();
    if (!paddle) {
      setMessage("Paddle.js 还没有加载完成");
      return;
    }

    try {
      const state = window as unknown as { __baihePaddleInitialized?: boolean };
      if (!state.__baihePaddleInitialized) {
        paddle.Initialize({
          token,
          eventCallback: (event) => {
            if (event?.name === "checkout.loaded") {
              rememberTransaction(event.data?.transaction_id);
            }
            if (event?.name === "checkout.completed") {
              rememberTransaction(event.data?.transaction_id);
              setMessage("付款流程已完成，正在进入订单确认页面…");
            }
          },
        });
        state.__baihePaddleInitialized = true;
      }

      setReady(true);
      setMessage("");
    } catch (error) {
      console.error("Paddle initialization failed:", error);
      setMessage("支付组件初始化失败，请稍后重试");
    }
  }, [isConfigured]);

  const openCheckout = () => {
    const paddle = getPaddle();
    if (!paddle || !ready || !product) {
      setMessage("付款组件还没有准备好，请稍后再试");
      return;
    }

    const successUrl = `${window.location.origin}/order/success`;

    paddle.Checkout.open({
      items: [{ priceId: product.priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        theme: "light",
        locale: "zh-Hans",
        successUrl,
      },
    });
  };

  if (!product) {
    return (
      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
        产品配置不存在 / Product configuration not found.
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <>
        <button
          type="button"
          disabled
          className={`w-full cursor-not-allowed rounded-xl bg-amber-300/70 px-5 py-3.5 text-sm font-black text-slate-800 ${className}`}
        >
          支付暂不可用 · {product.priceText}
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
        className={`w-full rounded-xl px-5 py-3.5 text-sm font-black transition ${
          ready
            ? "bg-amber-300 text-slate-950 hover:bg-amber-200"
            : "cursor-wait bg-slate-200 text-slate-400"
        } ${className}`}
      >
        {ready ? `立即购买 · ${product.priceText}` : "正在连接支付…"}
      </button>

      <p className="mt-2 min-h-5 text-center text-xs text-slate-400">
        {message || "One-time purchase · Secure checkout · Digital product"}
      </p>
    </>
  );
}
