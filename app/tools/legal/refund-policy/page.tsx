import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy｜BaiheAI Factory Tools",
  description: "Refund policy for downloadable BaiheAI Factory Tools software products.",
  alternates: { canonical: "https://tools.baihediy.com/tools/legal/refund-policy" },
};

const sections = [
  ["Digital product principle", "Professional Editions are downloadable digital software products. After successful delivery, a purchase is generally not automatically refundable solely because the buyer changes their mind, except where applicable law provides a mandatory right."],
  ["Delivery problems", "If payment succeeds but the buyer cannot obtain the purchased package, or if a delivered file is corrupted and a usable replacement cannot be provided, the buyer should contact support so the delivery can be corrected."],
  ["Material mismatch", "If the delivered product is materially different from the functionality, edition or contents described on the product page, the buyer may contact support with the order details and issue description."],
  ["Duplicate charges", "Duplicate charges for the same order should be reported promptly for review."],
  ["Paddle transactions", "When an order is processed by Paddle, Paddle is the Merchant of Record and the transaction is also subject to Paddle's buyer terms, refund procedures and applicable mandatory consumer law."],
  ["After a refund", "If a full refund is granted, the buyer should stop using and distributing the corresponding paid software package."],
];

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">REFUND POLICY</div>
          <h1 className="mt-3 text-3xl font-black">数字软件退款政策</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">适用于 BaiheAI Factory Tools Professional Edition 及其他可下载数字软件产品。</p>
          <p className="mt-2 text-xs text-slate-400">Last updated: 2026-08-22</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          {sections.map(([title, text]) => (
            <section key={title} className="border-t border-slate-200 py-7 first:border-t-0 first:pt-0">
              <h2 className="text-lg font-black">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/tools/legal/terms" className="text-blue-700">Terms</Link>
          <Link href="/tools/legal/privacy" className="text-blue-700">Privacy</Link>
          <Link href="/tools/support" className="text-blue-700">Support</Link>
        </div>
      </section>
    </main>
  );
}
