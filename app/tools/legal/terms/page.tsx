import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions｜BaiheAI Factory Tools",
  description: "Terms for BaiheAI Factory Tools digital software products.",
  alternates: { canonical: "https://tools.baihediy.com/tools/legal/terms" },
};

const sections = [
  ["1. Store scope", "BaiheAI Factory Tools is a digital software storefront for pre-built factory productivity products. This storefront sells downloadable software tools, digital files and related product documentation. It does not sell advertising, marketing, consulting, advisory, human services, or custom software development services."],
  ["2. Products", "Each product page describes the software name, current version, main features, price, compatible environment and digital delivery contents. Free online tools and paid Professional Editions are separate offerings and may have different capabilities."],
  ["3. Digital delivery", "Paid products are delivered digitally after successful payment, normally as a ZIP Professional Package containing the purchased software and documentation. Buyers should save a local backup after download."],
  ["4. License", "Unless a product page states otherwise, a purchase grants the buyer a non-exclusive license to use the product for the buyer's own internal work. Buyers may create reasonable backups but may not resell, publicly redistribute, upload, sublicense, or repackage the software for commercial resale."],
  ["5. Compatibility", "Some products require Microsoft Excel or Windows. Product pages identify the intended environment. The buyer is responsible for maintaining a compatible device and software environment."],
  ["6. Quality and business decisions", "Inspection, AQL and quality tools are decision-support software. Final acceptance, rejection, safety, regulatory and customer-specific decisions remain the responsibility of the buyer and must follow applicable drawings, contracts, procedures and laws."],
  ["7. Payment", "Prices shown on product pages are the product prices before any applicable taxes that may be calculated at checkout. When Paddle is enabled, Paddle acts as Merchant of Record for transactions processed through Paddle Checkout."],
  ["8. Updates", "Where a product page states that minor version updates are included, buyers may receive updates within that stated scope. New products, major editions and separately released modules are not automatically included unless explicitly stated."],
  ["9. Intellectual property", "The software structure, code, templates, rule libraries, documentation and original product design remain the intellectual property of BaiheAI or their respective rights holders. A purchase transfers usage rights only, not ownership of the underlying intellectual property."],
  ["10. Refunds", "Refunds for digital products are handled according to the Refund Policy shown on this storefront and any mandatory consumer rights that apply to the transaction."],
  ["11. Support", "Product support is available through the Support page of this storefront for delivery issues, file access problems and questions about the purchased standard software product."],
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">TERMS & CONDITIONS</div>
          <h1 className="mt-3 text-3xl font-black">BaiheAI Factory Tools 服务条款</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">这些条款仅适用于 BaiheAI Factory Tools 软件商店及其标准化数字软件产品。</p>
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
          <Link href="/tools/legal/privacy" className="text-blue-700">Privacy</Link>
          <Link href="/tools/legal/refund-policy" className="text-blue-700">Refund Policy</Link>
          <Link href="/tools/support" className="text-blue-700">Support</Link>
        </div>
      </section>
    </main>
  );
}
