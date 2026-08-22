import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款｜BaiheAI",
  description: "本条款说明 BaiheAI 数字工具、Professional Package、免费在线工具及相关服务的购买、许可、交付和使用规则。",
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
            TERMS & CONDITIONS
          </div>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">服务条款</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">本条款说明 BaiheAI 数字工具、Professional Package、免费在线工具及相关服务的购买、许可、交付和使用规则。</p>
          <p className="mt-3 text-xs text-slate-400">最后更新 / Last updated: 2026-08-22</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">

        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">运营主体与适用范围</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">OPERATOR & SCOPE</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">BaiheAI 是由个人经营者以 BaiheAI 品牌运营的数字工具业务。本条款适用于 baihediy.com 上提供的免费在线工具、数字下载产品、Professional Package 以及相关企业定制服务。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">通过访问免费工具、购买数字产品或委托定制服务，即表示你同意本条款以及适用的产品页面说明。由 Paddle 处理的订单同时受 Paddle 面向买家的交易条款约束。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">产品与服务</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">PRODUCTS & SERVICES</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">BaiheAI 提供面向工厂和中小企业的数字生产力工具，包括 Excel 质量检验工具、生产管理工具、在线工厂实用工具、ZIP Professional Package、说明文档以及相关定制服务。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">商品页面会说明当前版本、主要功能、交付内容、兼容环境和价格。免费在线版与 Professional Edition 的功能边界以对应商品页面的最新说明为准。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">数字交付</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">DIGITAL DELIVERY</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">数字产品在付款成功后通过下载入口或其他数字方式交付。购买人应使用有效的邮箱和订单信息，并在获得下载权限后自行妥善保存文件和备份。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们会合理努力保证交付文件可正常获取。如果发生文件损坏、链接异常或交付失败，请通过网站联系页面联系我们处理。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">许可与使用范围</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">LICENSE</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">除非商品页面另有说明，购买人为自身个人或所属购买主体的内部业务使用取得非独占、不可转让的使用许可。允许为内部工作需要填写数据、配置基础资料和制作合理备份。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">未经书面许可，不得转售、公开分发、上传共享站点、出售修改版、拆分后再次销售，或以模板商品、培训资料包等形式向第三方重新商业化分发原始文件、后台数据和核心规则。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">兼容性与用户责任</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">COMPATIBILITY & USER RESPONSIBILITY</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">部分产品依赖 Microsoft Excel 的特定功能。普通 .xlsx 文件通常无需宏；未来标注为 Interactive 的 .xlsm 文件可能需要用户在可信来源前提下启用宏。商品页面会尽量标明建议运行环境。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">AQL、质量判断、生产记录和管理建议属于辅助工具输出。用户仍应结合客户图纸、质量协议、法规、安全要求、内部程序和专业判断决定最终处置。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">价格、付款与税费</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">PRICING & PAYMENT</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">商品价格以购买页面在结账前显示的金额为准。一次性购买和订阅（如未来提供）会在结账前明确区分，不会将一次购买隐藏为自动续费。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们的在线订单由 Paddle.com 作为 Merchant of Record（登记商户/授权在线经销商）处理。Paddle 负责完成交易收款，并根据交易所在地处理适用的税务和付款流程。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">更新与版本</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">UPDATES & VERSIONS</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">商品页面如明确写明包含某一主版本内的小版本更新，则购买者可获得该范围内的更新。重大新模块、新产品、行业专版或企业定制不自动属于免费更新范围，除非商品页面另有说明。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们可能持续改善产品界面、兼容性、说明文档和错误修复。已下载的旧版本仍由用户自行保存。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">知识产权</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">INTELLECTUAL PROPERTY</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">BaiheAI 工具的模板结构、代码、文档、参数组织、品牌内容和原创设计受适用知识产权规则保护。购买产品并不意味着转让产品著作权或允许再次销售产品本身。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">责任限制</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">LIMITATION OF LIABILITY</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">在法律允许的最大范围内，BaiheAI 不对因用户输入错误、第三方软件兼容问题、未遵守客户或法规要求、错误业务决策、数据丢失或未经授权修改文件造成的间接损失负责。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">本条款不排除或限制任何依法不能排除或限制的消费者权利或法定责任。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">退款与争议</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">REFUNDS & DISPUTES</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">数字产品退款请同时参阅我们的退款政策。由 Paddle 处理的交易，其退款申请、法定撤回权和最终交易处理还受 Paddle 买家政策及适用法律约束。</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">如发生问题，请先通过网站联系我们，我们会优先尝试解决交付、文件、产品描述或技术使用方面的问题。</p>
        </section>
        <section className="border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
          <h2 className="text-xl font-black text-slate-950">条款更新</h2>
          <div className="mt-1 text-xs font-bold tracking-[0.14em] text-blue-600">CHANGES</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">我们可能因产品、支付流程或法律要求更新本条款。更新后的版本会在本页面显示新的最后更新日期。已经完成的交易仍受该交易发生时适用的强制性权利保护。</p>
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
