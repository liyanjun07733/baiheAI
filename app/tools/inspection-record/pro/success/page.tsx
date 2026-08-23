import Link from "next/link";

export default function QC01PurchaseSuccessPage() {
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
          感谢购买 QC-01 Professional Edition。你的付款流程已经完成。<br />
          Thank you for purchasing QC-01 Professional Edition.
          Your checkout has been completed.
        </p>

        <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-left">
          <div className="text-sm font-black text-slate-900">
            数字交付 / Digital Delivery
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            我们正在完成正式环境的自动数字交付配置。
            在自动下载功能启用前，请保留你的付款确认信息。<br />
            Automated digital delivery is being finalized for the live environment.
            Please keep your payment confirmation until the protected download flow is enabled.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/inspection-record/pro"
            className="rounded-xl bg-[#0f2747] px-5 py-3 text-sm font-bold text-white"
          >
            返回专业版商品页 / Back to Product
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
          >
            返回 Factory Tools / Back to Store
          </Link>
        </div>
      </div>
    </main>
  );
}
