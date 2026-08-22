import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策 Privacy Policy｜BaiheAI Factory Tools",
  description: "中英文隐私政策，适用于 BaiheAI Factory Tools 软件商店。",
  alternates: { canonical: "https://tools.baihediy.com/legal/privacy" },
};

const sections = [
  ["我们可能收到的信息","Information We May Receive",
   "当你联系产品支持或购买数字软件时，我们可能收到完成回复、产品交付和交易记录所必要的信息，例如邮箱、购买产品、订单状态和交易标识。",
   "When you contact product support or purchase digital software, we may receive information necessary to respond, deliver the product and maintain transaction records, such as your email address, product purchased, order status and transaction identifier."],
  ["付款信息","Payment Information",
   "正式启用 Paddle Checkout 后，付款资料由 Paddle 收集和处理。BaiheAI Factory Tools 不接收或保存买家的完整银行卡号。",
   "When Paddle Checkout is enabled, payment details are collected and processed by Paddle. BaiheAI Factory Tools does not receive or store the buyer's full card number."],
  ["在线工具数据","Online Tool Data",
   "大多数免费 Factory Tools 在浏览器内完成计算。除非页面明确说明数据会上传或保存，否则本商店不会主动把输入值建立为长期云端历史记录。",
   "Most free Factory Tools perform calculations in the browser. Unless a page explicitly states that information will be uploaded or saved, the storefront does not intentionally create a persistent cloud history from values entered into those tools."],
  ["信息用途","How Information Is Used",
   "必要信息用于运营软件商店、交付购买的软件、提供产品支持、防止滥用、保存必要业务记录以及改善标准软件产品。",
   "Information is used to operate the storefront, deliver purchased software, provide product support, prevent abuse, maintain necessary business records and improve standard software products."],
  ["数据共享","Data Sharing",
   "我们不会把个人数据出售给广告商。必要信息可能由托管、支付、邮件或安全服务商在提供对应服务所需范围内处理。",
   "We do not sell personal data to advertisers. Necessary data may be processed by hosting, payment, email or security providers only as required to provide those services."],
  ["保存期限","Retention",
   "订单、交付、支持和合规记录可能在合理期间内保存。下载后的 Professional Edition 本地文件及其中数据由买家自行控制。",
   "Necessary order, delivery, support and compliance records may be retained for a reasonable period. Local files and data saved inside a downloaded Professional Edition remain under the buyer's control."],
  ["安全","Security",
   "我们采取合理技术和组织措施，但任何在线服务都无法保证绝对安全。买家也应妥善保护设备、邮箱和下载文件。",
   "We use reasonable technical and organizational measures, but no online service can guarantee absolute security. Buyers should also protect their devices, email accounts and downloaded product files."],
  ["联系我们","Contact",
   "与本软件商店相关的隐私问题可以通过 Factory Tools 产品支持页面提交。",
   "Privacy questions relating to this software storefront can be submitted through the Factory Tools Product Support page."],
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">PRIVACY POLICY</div>
          <h1 className="mt-3 text-3xl font-black">隐私政策 / Privacy Policy</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">说明产品展示、数字交付、付款和产品支持中的必要信息处理。</p>
          <p className="mt-1 text-sm leading-7 text-slate-500">Explains necessary data handling for product display, digital delivery, payment and product support.</p>
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
          <Link href="/tools/legal/refund-policy" className="text-blue-700">退款政策 / Refunds</Link>
          <Link href="/tools/support" className="text-blue-700">产品支持 / Support</Link>
        </div>
      </section>
    </main>
  );
}
