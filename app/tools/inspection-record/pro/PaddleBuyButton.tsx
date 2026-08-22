"use client";

import Script from "next/script";
import { useCallback, useState } from "react";

declare global {
  interface Window {
    Paddle?: {
      Environment: { set: (environment: "sandbox") => void };
      Initialize: (options: {
        token: string;
        eventCallback?: (event: { name?: string }) => void;
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
const configuredEnvironment = process.env.NEXT_PUBLIC_PADDLE_ENV || "";

export default function PaddleBuyButton() {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const isConfigured = Boolean(token && priceId);
  const isSandbox = configuredEnvironment === "sandbox" || (!configuredEnvironment && process.env.NODE_ENV === "development");

  const initializePaddle = useCallback(() => {
    if (!isConfigured) return;
    if (!window.Paddle) {
      setMessage("Paddle.js 还没有加载完成");
      return;
    }

    try {
      if (!window.__baihePaddleInitialized) {
        if (isSandbox) window.Paddle.Environment.set("sandbox");
        window.Paddle.Initialize({
          token,
          eventCallback: (event) => {
            if (event?.name === "checkout.completed") {
              setMessage("付款已完成，正在进入交付页面…");
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
  }, [isConfigured, isSandbox]);

  const openCheckout = () => {
    if (!window.Paddle || !ready) {
      setMessage("付款组件还没有准备好，请稍后再试");
      return;
    }

    const successUrl = `${window.location.origin}/tools/inspection-record/pro/success`;
    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        theme: "light",
        locale: "zh-Hans",
        successUrl,
      },
    });
  };

  if (!isConfigured) {
    return (
      <>
        <button type="button" disabled className="mt-5 w-full cursor-not-allowed rounded-xl bg-amber-300/70 px-5 py-3.5 text-sm font-black text-slate-800">
          支付开放中 · US$9.90
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">Digital checkout will be enabled after payment-provider approval.</p>
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
        className={`mt-5 w-full rounded-xl px-5 py-3.5 text-sm font-black transition ${ready ? "bg-amber-300 text-slate-950 hover:bg-amber-200" : "cursor-wait bg-white/10 text-slate-400"}`}
      >
        {ready ? `立即购买 · US$9.90${isSandbox ? " (Sandbox)" : ""}` : "正在连接支付…"}
      </button>
      <p className="mt-2 min-h-5 text-center text-xs text-slate-400">
        {message || (isSandbox ? "Sandbox 测试结账 · 不会扣真实款项" : "One-time purchase · Digital delivery")}
      </p>
    </>
  );
}
