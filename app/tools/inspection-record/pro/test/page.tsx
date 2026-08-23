import Link from "next/link";
import SandboxBuyButton from "./SandboxBuyButton";

export const metadata = {
  title: "QC-01 Sandbox Delivery Test｜BaiheAI Factory Tools",
  robots: { index: false, follow: false },
};

export default function QC01SandboxTestPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <div className="text-xs font-black tracking-[0.18em] text-amber-600">
          SANDBOX TEST ONLY
        </div>
        <h1 className="mt-3 text-3xl font-black">
          QC-01 模拟购买与自动交付测试
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          这是 Paddle Sandbox 测试入口，不会产生真实扣款。
          测试目标是确认：模拟付款成功后，是否能自动验证订单并下载 QC-01 Professional ZIP。
        </p>

        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="font-black">测试结果应该是：</div>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            模拟付款成功 → 自动进入成功页 → 验证 Sandbox transaction_id →
            自动下载 BaiheAI_QC01_Pro_V2_1.zip
          </p>
        </div>

        <SandboxBuyButton />

        <Link
          href="/inspection-record/pro"
          className="mt-6 inline-flex text-sm font-bold text-blue-700"
        >
          ← 返回正式商品页 / Back to Live Product
        </Link>
      </div>
    </main>
  );
}
