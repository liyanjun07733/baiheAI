import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy｜BaiheAI Factory Tools",
  description: "Privacy policy for BaiheAI Factory Tools digital software storefront.",
  alternates: { canonical: "https://tools.baihediy.com/tools/legal/privacy" },
};

const sections = [
  ["Information we may receive", "When you contact support or purchase a digital software product, we may receive information necessary to respond, deliver the product and maintain transaction records, such as your email address, product purchased, order status and transaction identifier."],
  ["Payment information", "When Paddle Checkout is enabled, payment details are collected and processed by Paddle. BaiheAI Factory Tools does not receive or store the buyer's full card number."],
  ["Online tool data", "Most free Factory Tools perform calculations in the browser. Unless a page explicitly says that information will be uploaded or saved, the store does not intentionally create a persistent cloud history from values entered into those tools."],
  ["How information is used", "Information is used to operate the storefront, deliver purchased software, provide product support, prevent abuse, maintain necessary business records and improve the standard software products."],
  ["Data sharing", "We do not sell personal data to advertisers. Necessary data may be processed by infrastructure, hosting, payment, email or security providers only as required to provide those services."],
  ["Retention", "Necessary order, delivery, support and compliance records may be retained for a reasonable period. Local files and data saved inside a downloaded Professional Edition remain under the buyer's control."],
  ["Security", "We use reasonable technical and organizational measures, but no online service can guarantee absolute security. Buyers should also protect their devices, email accounts and downloaded product files."],
  ["Contact", "Privacy questions relating to this software storefront can be submitted through the Factory Tools Support page."],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">PRIVACY POLICY</div>
          <h1 className="mt-3 text-3xl font-black">隐私政策</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">本政策仅说明 BaiheAI Factory Tools 软件商店在产品展示、数字交付和产品支持中的信息处理。</p>
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
          <Link href="/tools/legal/refund-policy" className="text-blue-700">Refund Policy</Link>
          <Link href="/tools/support" className="text-blue-700">Support</Link>
        </div>
      </section>
    </main>
  );
}
