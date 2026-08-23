import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "产品支持 Product Support｜BaiheAI Factory Tools",
  description: "BaiheAI Factory Tools 买家、数字交付和标准软件产品支持。",
  alternates: { canonical: "https://tools.baihediy.com/support" },
};

export default function SupportPage() {
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "liyanjun0773@126.com";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">PRODUCT SUPPORT</div>
          <h1 className="mt-3 text-3xl font-black">产品支持 / Buyer & Product Support</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">用于处理数字交付、文件访问、版本说明、订单核对和标准软件产品使用问题。</p>
          <p className="mt-1 text-sm leading-7 text-slate-500">Support for digital delivery, file access, version information, order verification and standard software product questions.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-black tracking-[0.14em] text-blue-600">邮件支持 / EMAIL SUPPORT</div>
            <h2 className="mt-2 text-xl font-black">联系产品支持 / Contact Support</h2>
            {supportEmail ? (
              <>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  请提供产品名称、购买邮箱、订单号（如有）以及问题说明。<br />
                  Please include the product name, purchase email, order number (if available) and a description of the issue.
                </p>
                <a href={`mailto:${supportEmail}`} className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700">
                  {supportEmail}
                </a>
              </>
            ) : null}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-black tracking-[0.14em] text-blue-600">支持范围 / SUPPORT SCOPE</div>
            <h2 className="mt-2 text-xl font-black">我们支持什么 / What We Support</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>✓ 付款成功但无法获得数字交付。 / Payment succeeded but delivery is unavailable.</p>
              <p>✓ ZIP / Excel 文件损坏或无法打开。 / ZIP or Excel file is corrupted or cannot be opened.</p>
              <p>✓ 产品版本和使用说明问题。 / Product version and usage documentation questions.</p>
              <p>✓ 重复扣款或订单信息核对。 / Duplicate charge or order verification.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7">
          <div className="text-sm font-black">商店范围 / Store Scope</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            本支持页面只处理 BaiheAI Factory Tools 标准数字软件产品相关事项。本软件商店不销售营销、广告、商业咨询或定制软件开发服务。<br />
            This support page covers BaiheAI Factory Tools standard digital software products only. This storefront does not sell marketing, advertising, business consulting or custom software development services.
          </p>
        </div>
      </section>
    </main>
  );
}
