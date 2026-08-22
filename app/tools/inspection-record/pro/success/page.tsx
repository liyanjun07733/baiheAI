import Link from "next/link";

export default function QC01PurchaseSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl font-black text-emerald-600">
          ✓
        </div>

        <div className="mt-6 text-xs font-bold tracking-[0.16em] text-blue-600">
          SANDBOX CHECKOUT SUCCESS
        </div>
        <h1 className="mt-3 text-3xl font-black">测试付款成功</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          这是 Paddle Sandbox 测试环境，本次交易不会产生真实扣款。
          目前我们只验证“商品页 → Paddle 结账 → 成功页”是否正常。
        </p>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left">
          <div className="text-sm font-black text-slate-900">ZIP 自动交付尚未启用</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            下一阶段会通过 Paddle Webhook 验证真实付款成功后，再生成受保护的 ZIP 下载入口。
            在那之前，这个成功页不会直接公开 Professional Package 下载地址。
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/tools/inspection-record/pro"
            className="rounded-xl bg-[#0f2747] px-5 py-3 text-sm font-bold text-white"
          >
            返回专业版商品页
          </Link>
          <Link
            href="/tools"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
          >
            返回 Factory Tools
          </Link>
        </div>
      </div>
    </main>
  );
}
