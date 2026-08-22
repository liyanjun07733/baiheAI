import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "退款政策 Refund Policy｜BaiheAI Factory Tools",
  description: "BaiheAI Factory Tools 可下载数字软件产品中英文退款政策。",
  alternates: { canonical: "https://tools.baihediy.com/legal/refund-policy" },
};

const sections = [
  ["数字产品原则","Digital Product Principle",
   "Professional Edition 属于可下载数字软件产品。完成数字交付后，通常不会仅因买家“改变主意”而自动退款，但适用法律规定的强制性权利不受影响。",
   "Professional Editions are downloadable digital software products. After successful digital delivery, a purchase is generally not automatically refundable solely because the buyer changes their mind, except where applicable law provides a mandatory right."],
  ["交付问题","Delivery Problems",
   "如果付款成功但持续无法获得购买的数字包，或交付文件损坏且无法提供可用替代文件，请联系产品支持处理。",
   "If payment succeeds but the buyer cannot obtain the purchased package, or if a delivered file is corrupted and a usable replacement cannot be provided, the buyer should contact Product Support."],
  ["重大不符","Material Mismatch",
   "如果实际交付产品与商品页所描述的功能、版本或交付内容存在重大不符，买家可提供订单信息和问题说明申请处理。",
   "If the delivered product is materially different from the functionality, edition or contents described on the product page, the buyer may contact support with the order details and issue description."],
  ["重复扣款","Duplicate Charges",
   "同一订单发生重复扣款时，请尽快联系产品支持或 Paddle Buyer Support 核对。",
   "Duplicate charges for the same order should be reported promptly to Product Support or Paddle Buyer Support for review."],
  ["Paddle 交易","Paddle Transactions",
   "通过 Paddle 处理的订单中，Paddle 是 Merchant of Record。该交易同时适用 Paddle 买家条款、退款流程以及依法不能排除的消费者权利。",
   "When an order is processed by Paddle, Paddle is the Merchant of Record and the transaction is also subject to Paddle's buyer terms, refund procedures and applicable mandatory consumer law."],
  ["退款后的使用","After a Refund",
   "如果订单获得全额退款，买家应停止继续使用和分发对应的付费软件包。",
   "If a full refund is granted, the buyer should stop using and distributing the corresponding paid software package."],
];

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">REFUND POLICY</div>
          <h1 className="mt-3 text-3xl font-black">数字软件退款政策 / Refund Policy</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">适用于 BaiheAI Factory Tools Professional Edition 及其他可下载数字软件产品。</p>
          <p className="mt-1 text-sm leading-7 text-slate-500">Applies to BaiheAI Factory Tools Professional Editions and other downloadable digital software products.</p>
          <p className="mt-3 text-xs text-slate-400">最后更新 / Last updated: 2026-08-23</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          {sections.map(([cnTitle,enTitle,cn,en]) => (
            <section key={enTitle} className="border-t border-slate-200 py-7 first:border-t-0 first:pt-0">
              <h2 className="text-lg font-black">{cnTitle}</h2>
              <div className="mt-1 text-xs font-bold tracking-[0.08em] text-blue-600">{enTitle}</div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{cn}</p>
              <p className="mt-3 border-l-2 border-slate-200 pl-4 text-sm leading-7 text-slate-500">{en}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/tools/legal/terms" className="text-blue-700">服务条款 / Terms</Link>
          <Link href="/tools/legal/privacy" className="text-blue-700">隐私政策 / Privacy</Link>
          <Link href="/tools/support" className="text-blue-700">产品支持 / Support</Link>
        </div>
      </section>
    </main>
  );
}
