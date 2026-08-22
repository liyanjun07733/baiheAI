import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策｜BaiheAI",
  description: "本政策说明 BaiheAI 在网站、咨询、数字产品交付和支付流程中如何处理必要的信息。",
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
            PRIVACY POLICY
          </div>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">隐私政策</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">本政策说明 BaiheAI 在网站、咨询、数字产品交付和支付流程中如何处理必要的信息。</p>
          <p className="mt-3 text-xs text-slate-400">最后更新 / Last updated: 2026-08-22</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">

        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">我们是谁</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">WHO WE ARE</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">本网站由个人经营者以 BaiheAI 品牌运营，主要提供工厂数字工具、在线实用工具、数字下载产品和企业定制服务。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">我们可能收集的信息</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">INFORMATION WE MAY COLLECT</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">当你主动联系我们时，我们可能收到你提交的姓名、邮箱、公司或项目名称、需求说明和你主动提供的其他联系信息。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">当你购买数字产品时，订单和付款由 Paddle 处理。我们可能接收完成交付和售后所需的订单信息，例如购买产品、订单状态、客户邮箱、交易标识和支付结果，但我们不会接收或保存完整的银行卡号。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">网站托管、安全和基础技术服务可能产生 IP 地址、浏览器类型、访问时间、错误日志等必要技术信息。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">在线工具中的数据</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">DATA ENTERED INTO ONLINE TOOLS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">目前的多数 BaiheAI Factory Tools 免费在线工具在浏览器中完成即时计算。除非页面明确提示上传、提交或保存，否则我们不会主动把你输入的检验数据作为账户历史记录长期保存。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">某些工具允许用户在浏览器中选择图片进行本地预览。除非页面明确说明会上传到服务器，否则这类图片仅用于当前浏览器会话的即时展示。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">我们如何使用信息</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">HOW WE USE INFORMATION</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们使用必要的信息来提供网站和数字产品、完成订单交付、响应咨询、处理售后、改进产品、预防欺诈和滥用，并履行适用的法律或平台合规义务。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们不会出售用户的个人数据给广告商，也不会为了与产品无关的目的公开你的订单或咨询内容。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">支付处理</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">PAYMENTS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">购买流程计划由 Paddle 作为 Merchant of Record 处理。Paddle 会按照其自己的隐私政策处理付款、税务、欺诈预防和交易支持所需的数据。付款页面要求的信息由 Paddle 直接收集时，以 Paddle 的隐私和买家条款为准。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">数据保留</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">RETENTION</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们仅在完成产品交付、售后、会计/合规、争议处理或合理业务记录所需的期间保留必要信息。不同类型的信息可能有不同的保留期限。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">如果未来上线账户、云端存储或历史记录功能，我们会在启用前更新本政策并说明保存方式。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">第三方服务</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">SERVICE PROVIDERS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">网站可能使用托管、邮件、支付或安全服务提供商来完成必要功能。这些服务商仅在提供相关服务所需的范围内处理信息，并受其各自条款和隐私政策约束。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">你的选择与权利</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">YOUR CHOICES & RIGHTS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">根据适用法律，你可能拥有访问、更正、删除、限制处理或反对某些处理的权利。对于付款交易相关的数据请求，部分信息可能需要通过 Paddle 的买家支持渠道处理。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">如果你希望查询我们直接持有的个人信息，可以通过网站的联系我们页面提出请求。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">安全</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">SECURITY</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们采取合理的技术和组织措施保护网站和交付流程，但任何互联网传输或本地文件都无法保证绝对安全。用户也应妥善保护下载文件、邮箱和设备。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">政策更新</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">CHANGES</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">当我们的产品、存储方式、支付服务或法律要求发生变化时，本政策可能更新。最新版会在本页面公布并注明最后更新日期。</p>
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
