import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款 Terms & Conditions｜BaiheAI Factory Tools",
  description: "中英文服务条款，适用于 BaiheAI Factory Tools 标准数字软件产品。",
  alternates: { canonical: "https://tools.baihediy.com/legal/terms" },
};

const sections = [
  {
    cnTitle:"1. 商店范围",
    enTitle:"Store Scope",
    cn:"BaiheAI Factory Tools 是面向工厂的标准数字软件与数字资料商店。本商店销售预先制作完成、可下载或在线使用的工厂生产力工具、数字文件和产品说明，不通过本商店销售广告、营销、商业咨询、人工顾问或定制软件开发服务。",
    en:"BaiheAI Factory Tools is a storefront for pre-built factory productivity software and digital products. This storefront sells downloadable or online standard software tools, digital files and product documentation. It does not sell advertising, marketing, consulting, advisory, human services or custom software development services."
  },
  {
    cnTitle:"2. 产品说明",
    enTitle:"Products",
    cn:"每个商品页会说明产品名称、当前版本、主要功能、价格、适用环境和数字交付内容。免费在线版和付费 Professional Edition 属于不同产品层级，功能可能不同。",
    en:"Each product page describes the product name, current version, main features, price, intended environment and digital delivery contents. Free Online tools and paid Professional Editions are separate offerings and may have different capabilities."
  },
  {
    cnTitle:"3. 数字交付",
    enTitle:"Digital Delivery",
    cn:"付费产品在付款成功并确认后以数字方式交付，通常为 ZIP Professional Package，其中包含购买的软件及相关说明。买家下载后应自行保存本地备份。",
    en:"Paid products are delivered digitally after successful payment and confirmation, normally as a ZIP Professional Package containing the purchased software and related documentation. Buyers should keep a local backup after download."
  },
  {
    cnTitle:"4. 使用许可",
    enTitle:"License",
    cn:"除商品页另有说明外，购买仅授予买家用于自身或购买主体内部工作的非独占使用许可。允许合理备份，但不得转售、公开分发、上传共享、再授权或重新包装后商业销售。",
    en:"Unless a product page states otherwise, a purchase grants a non-exclusive license for the buyer's own or purchasing entity's internal work. Reasonable backups are permitted, but resale, public redistribution, sharing, sublicensing or commercial repackaging is not permitted."
  },
  {
    cnTitle:"5. 兼容环境",
    enTitle:"Compatibility",
    cn:"部分产品需要 Microsoft Excel、Windows 或其他指定运行环境。商品页会说明建议环境。买家负责维持兼容的设备和软件环境。",
    en:"Some products require Microsoft Excel, Windows or another stated environment. Product pages identify the intended environment. The buyer is responsible for maintaining compatible hardware and software."
  },
  {
    cnTitle:"6. 质量与业务判断",
    enTitle:"Quality and Business Decisions",
    cn:"AQL、检验、质量分析和生产管理工具属于辅助决策软件。最终接收、拒收、安全、法规及客户特殊要求仍应由使用者结合图纸、合同、程序和适用法律判断。",
    en:"AQL, inspection, quality analysis and production tools are decision-support software. Final acceptance, rejection, safety, regulatory and customer-specific decisions remain the responsibility of the user and must follow applicable drawings, contracts, procedures and laws."
  },
  {
    cnTitle:"7. 价格与付款",
    enTitle:"Pricing and Payment",
    cn:"商品页显示产品价格。QC-01 Professional Edition 当前标示为 US$9.90 一次购买，不是订阅。正式启用 Paddle Checkout 后，Paddle 将作为 Merchant of Record 处理通过 Paddle 的在线交易。适用税费和最终金额会在付款前显示。",
    en:"Product pages show the applicable product price. QC-01 Professional Edition is currently listed at US$9.90 as a one-time purchase, not a subscription. When Paddle Checkout is enabled, Paddle acts as Merchant of Record for transactions processed through Paddle. Applicable taxes and the final amount are shown before payment."
  },
  {
    cnTitle:"8. 更新",
    enTitle:"Updates",
    cn:"如果商品页明确说明包含某范围的小版本更新，购买者可获得该范围内的更新。重大新版本、新产品或单独发布的新模块不自动包含，除非另有说明。",
    en:"Where a product page states that minor version updates are included, buyers may receive updates within that stated scope. Major editions, new products and separately released modules are not automatically included unless explicitly stated."
  },
  {
    cnTitle:"9. 知识产权",
    enTitle:"Intellectual Property",
    cn:"软件结构、代码、模板、规则库、说明文档和原创产品设计的知识产权仍归 BaiheAI 或相应权利人所有。购买仅转移规定范围内的使用权，不转移知识产权所有权。",
    en:"The software structure, code, templates, rule libraries, documentation and original product design remain the intellectual property of BaiheAI or their respective rights holders. A purchase grants usage rights only and does not transfer ownership of the underlying intellectual property."
  },
  {
    cnTitle:"10. 退款",
    enTitle:"Refunds",
    cn:"数字产品退款按照本商店的退款政策、Paddle 买家规则以及交易所在地依法不能排除的消费者权利处理。",
    en:"Refunds for digital products are handled according to this storefront's Refund Policy, applicable Paddle buyer rules and any mandatory consumer rights that apply to the transaction."
  },
  {
    cnTitle:"11. 产品支持",
    enTitle:"Product Support",
    cn:"产品支持页面用于处理数字交付、文件访问、版本说明、标准软件产品使用问题以及订单核对。",
    en:"The Product Support page handles digital delivery, file access, version information, questions about standard software products and order verification."
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-700">← Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">TERMS & CONDITIONS</div>
          <h1 className="mt-3 text-3xl font-black">服务条款 / Terms & Conditions</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">适用于 BaiheAI Factory Tools 标准数字软件与 Professional Edition。</p>
          <p className="mt-1 text-sm leading-7 text-slate-500">Applies to BaiheAI Factory Tools standard digital software products and Professional Editions.</p>
          <p className="mt-3 text-xs text-slate-400">最后更新 / Last updated: 2026-08-23</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          {sections.map((s) => (
            <section key={s.enTitle} className="border-t border-slate-200 py-7 first:border-t-0 first:pt-0">
              <h2 className="text-lg font-black">{s.cnTitle}</h2>
              <div className="mt-1 text-xs font-bold tracking-[0.08em] text-blue-600">{s.enTitle}</div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{s.cn}</p>
              <p className="mt-3 border-l-2 border-slate-200 pl-4 text-sm leading-7 text-slate-500">{s.en}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/tools/legal/privacy" className="text-blue-700">隐私政策 / Privacy</Link>
          <Link href="/tools/legal/refund-policy" className="text-blue-700">退款政策 / Refunds</Link>
          <Link href="/tools/support" className="text-blue-700">产品支持 / Support</Link>
        </div>
      </section>
    </main>
  );
}
