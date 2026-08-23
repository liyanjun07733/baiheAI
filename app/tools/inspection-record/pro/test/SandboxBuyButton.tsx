"use client";

import Script from "next/script";
import { useCallback, useState } from "react";

type PaddleEvent = {
  name?: string;
  data?: {
    transaction_id?: string;
  };
};

type SandboxPaddle = {
  Environment?: {
    set: (environment: "sandbox" | "production") => void;
  };
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
      };
    }) => void;
  };
};

const token = process.env.NEXT_PUBLIC_PADDLE_SANDBOX_CLIENT_TOKEN || "";
const priceId = process.env.NEXT_PUBLIC_PADDLE_SANDBOX_PRICE_ID || "";

export default function SandboxBuyButton() {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");

  const isConfigured = Boolean(token && priceId && token.startsWith("test_"));

  const getPaddle = () =>
    (window as unknown as { Paddle?: SandboxPaddle }).Paddle;

  const initializePaddle = useCallback(() => {
    if (!isConfigured) return;

    const paddle = getPaddle();
    if (!paddle) {
      setMessage("Sandbox Paddle.js 还没有加载完成");
      return;
    }

    try {
      paddle.Environment?.set("sandbox");

      paddle.Initialize({
        token,
        eventCallback: (event) => {
          if (event?.name === "checkout.completed") {
            const transactionId = event.data?.transaction_id;

            if (transactionId) {
              window.location.href =
                `/inspection-record/pro/test/success?transaction_id=${encodeURIComponent(
                  transactionId
                )}`;
              return;
            }

            setMessage("模拟付款已完成，但没有收到 transaction_id");
          }
        },
      });

      setReady(true);
      setMessage("");
    } catch (error) {
      console.error("Sandbox Paddle initialization failed:", error);
      setMessage("Sandbox Paddle 初始化失败");
    }
  }, [isConfigured]);

  const openCheckout = () => {
    const paddle = getPaddle();

    if (!paddle || !ready) {
      setMessage("Sandbox 付款组件还没有准备好");
      return;
    }

    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        theme: "light",
        locale: "zh-Hans",
      },
    });
  };

  if (!isConfigured) {
    return (
      <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-700">
        Sandbox 环境变量还没有配置完成。
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onReady={initializePaddle}
        onError={() => setMessage("Paddle.js 加载失败")}
      />

      <button
        type="button"
        onClick={openCheckout}
        disabled={!ready}
        className="mt-7 w-full rounded-xl bg-amber-400 px-5 py-4 text-sm font-black text-slate-950 disabled:opacity-50"
      >
        {ready ? "开始 Sandbox 模拟购买" : "正在连接 Sandbox…"}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        {message || "不会产生真实扣款 / No real charge"}
      </p>
    </>
  );
}
