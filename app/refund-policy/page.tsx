import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "退款政策｜BaiheAI",
  description: "本政策说明 BaiheAI 数字产品的退款原则、交付异常处理，以及通过 Paddle 完成交易时适用的退款流程。",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
            ← 返回 BaiheAI Factory Tools
          </Link>
          <div className="mt-7 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-blue-700">
            REFUND POLICY
          </div>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">退款政策</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">本政策说明 BaiheAI 数字产品的退款原则、交付异常处理，以及通过 Paddle 完成交易时适用的退款流程。</p>
          <p className="mt-3 text-xs text-slate-400">最后更新 / Last updated: 2026-08-22</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">

        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">总体原则</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">GENERAL PRINCIPLE</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">BaiheAI 销售的软件、Excel 工具、ZIP Professional Package 和相关下载内容属于数字产品。除适用法律另有强制要求外，已完成交付的数字产品通常不因单纯“改变主意”而自动退款。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">这并不影响消费者对于产品与描述重大不符、文件存在实质性故障、无法合理交付或法律明确赋予的不可放弃权利。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">可以联系我们处理的情况</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">WHEN TO CONTACT US</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">如果出现重复扣款、下载文件损坏且无法获得可用替代文件、付款成功但持续无法获得交付、或者实际交付内容与购买页面存在重大不符，请尽快通过网站联系页面提供订单信息和问题说明。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">对于可以通过重新提供有效文件、修复链接或技术指导解决的问题，我们通常会优先完成重新交付或修复。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">由 Paddle 处理的订单</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">PADDLE ORDERS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">当订单通过 Paddle 完成时，Paddle 是该交易的 Merchant of Record。退款和法定撤回权的最终处理须遵守 Paddle 面向买家的退款政策、买家条款以及购买者所在地适用的强制性消费者法律。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">Paddle 可以根据具体情况批准全额或部分退款，也可能拒绝不符合条件的申请。任何本页面内容都不会减少购买者依法享有的强制性消费者权利。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">数字内容与下载</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">DIGITAL CONTENT & DOWNLOADS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">某些司法辖区允许消费者在一定期限内撤回数字内容购买；在法律允许的情况下，如果消费者明确同意立即开始数字内容交付并确认相应撤回权可能在下载或使用开始后受到影响，则相关规则按结账时的有效条款和法律执行。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">因此，我们会在支付正式上线时尽量让购买者在付款前清楚看到产品内容、价格、交付方式、许可范围和退款规则。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">如何申请</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">HOW TO REQUEST</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">如需处理产品或交付问题，可先通过 BaiheAI 网站的联系我们页面联系，并提供购买邮箱、产品名称、订单编号（如有）和问题说明。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">如果订单由 Paddle 处理，购买者也可以使用 Paddle 交易收据中的支持入口或 Paddle Buyer Support 提交退款申请。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">退款后的访问</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">AFTER A REFUND</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">如订单被全额退款，购买者应停止继续使用对应付费数字产品，并不得继续分发、复制或向第三方提供该产品包。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">政策更新</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">CHANGES</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">本政策可能根据支付平台规则、产品交付方式和适用法律进行更新。具体交易适用的强制性消费者权利不因本页面更新而被削弱。</p>
        </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/terms" className="font-semibold text-blue-700 hover:underline">服务条款</Link>
          <Link href="/privacy" className="font-semibold text-blue-700 hover:underline">隐私政策</Link>
          <Link href="/refund-policy" className="font-semibold text-blue-700 hover:underline">退款政策</Link>
          <Link href="/tools" className="font-semibold text-slate-500 hover:text-blue-700">Factory Tools</Link>
        </div>
      </section>
    </main>
  );
}
