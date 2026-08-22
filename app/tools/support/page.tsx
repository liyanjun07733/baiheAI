import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Support｜BaiheAI Factory Tools",
  description: "Buyer and product support for BaiheAI Factory Tools software products.",
  alternates: { canonical: "https://tools.baihediy.com/tools/support" },
};

export default function SupportPage() {
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">PRODUCT SUPPORT</div>
          <h1 className="mt-3 text-3xl font-black">产品支持 / Buyer Support</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            用于处理数字交付、文件访问、版本说明和标准软件产品使用问题。
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-black tracking-[0.14em] text-blue-600">EMAIL SUPPORT</div>
            <h2 className="mt-2 text-xl font-black">联系产品支持</h2>
            {supportEmail ? (
              <>
                <p className="mt-4 text-sm leading-7 text-slate-600">请在邮件中提供产品名称、购买邮箱、订单号（如有）以及问题说明。</p>
                <a href={`mailto:${supportEmail}`} className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700">
                  {supportEmail}
                </a>
              </>
            ) : (
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                正式上线前请在 Vercel 设置 NEXT_PUBLIC_SUPPORT_EMAIL，用真实可用的买家支持邮箱替换这里。
              </div>
            )}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-black tracking-[0.14em] text-blue-600">SUPPORT SCOPE</div>
            <h2 className="mt-2 text-xl font-black">我们支持什么</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>✓ 付款成功但无法获得数字交付。</p>
              <p>✓ ZIP / Excel 文件损坏或无法打开。</p>
              <p>✓ 产品版本和使用说明问题。</p>
              <p>✓ 重复扣款或订单信息核对。</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7">
          <div className="text-sm font-black">Store scope</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            本支持页面只处理 BaiheAI Factory Tools 标准数字软件产品相关事项。本软件商店不提供营销、广告、商业咨询或定制软件开发服务。
          </p>
        </div>
      </section>
    </main>
  );
}
