"use client";

import { useEffect } from "react";

export default function LegacyQC01SuccessRedirect() {
  useEffect(() => {
    const query = window.location.search || "";
    window.location.replace(`/order/success${query}`);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-20 text-center text-slate-700">
      正在进入统一产品交付页面… / Opening delivery page…
    </main>
  );
}
