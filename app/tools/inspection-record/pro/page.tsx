import type { Metadata } from "next";
import Link from "next/link";
import PaddleBuyButton from "./PaddleBuyButton";

export const metadata: Metadata = {
  title: "QC-01 Professional Edition｜通用智能检验记录专业版｜BaiheAI",
  description:
    "BaiheAI QC-01 Professional Edition：面向工厂长期质量记录、AQL抽样、查询、打印与追溯的本地专业工具。",
  alternates: {
    canonical: "https://tools.baihediy.com/inspection-record/pro",
  },
};

const compareRows = [
  ["核心 AQL 抽样与合格判定", "完整可用", "完整可用"],
  ["单次快速判断", "✓", "✓"],
  ["进料 / 过程 / 成品长期记录", "—", "✓"],
  ["产品、供应商、客户资料联动", "—", "✓"],
  ["历史记录查询与追溯", "—", "✓"],
  ["质量看板与统计", "—", "✓"],
  ["简版 / 完整版打印", "—", "✓"],
  ["数据保存在自己电脑", "—", "✓"],
  ["离线使用", "—", "✓"],
  ["适合场景", "临时计算、现场快速判断", "每天使用、内部管理、长期追溯"],
];

const packageItems = [
  {
    title: "QC-01 Professional Edition",
    text: "当前稳定版 Excel 本地工具，包含进料、过程、成品检验、AQL自动判定、查询、看板与打印功能。",
  },
  {
    title: "使用说明",
    text: "说明日常录入、资料维护、打印、查询与常见问题，让新用户不用培训也能开始使用。",
  },
  {
    title: "示例数据 / Demo",
    text: "用一组示例记录演示正确的录入、自动抽样、判定和打印流程。",
  },
  {
    title: "Version History",
    text: "记录当前版本、修复内容和后续小版本更新，便于企业内部留档。",
  },
];

const workflow = [
  ["01", "先免费在线使用", "先用自己的批量和不良数据确认核心逻辑是否适合。"],
  ["02", "确认需要长期管理", "当你开始需要保存历史、查询、打印和内部交接时，再考虑专业版。"],
  ["03", "一次购买 Professional Package", "付款完成后获得 ZIP 专业包下载入口，不要求订阅。"],
  ["04", "解压后本地使用", "数据保存在企业自己的电脑和文件中，日常工作不依赖网页在线。"],
];

export default function QC01ProPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <Link
            href="/tools/inspection-record"
            className="text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            ← 返回 QC-01 免费在线版 / Back to Free Online
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-black tracking-[0.16em] text-amber-700">
                QC-01 · PROFESSIONAL EDITION
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
                免费版告诉你这一次是否合格，
                <span className="text-blue-600">专业版把每天的检验工作管理起来。</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                QC-01 Professional Edition 不是把网页版简单复制到 Excel。
                它用于进料、过程、成品检验的长期记录、历史查询、质量统计和正式打印，
                让每一次检验结果都能被保存、追溯和再次利用。
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
                The Professional Edition is designed for ongoing factory inspection work:
                long-term records, traceability, queries, statistics and printable outputs — not just a one-time AQL result.
              </p>

              <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold">
                <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">一次购买 / One-time</span>
                <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">本地长期使用 / Local use</span>
                <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">ZIP 专业包交付 / ZIP delivery</span>
                <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">无需订阅 / No subscription</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#0f2747] p-7 text-white shadow-sm md:p-8">
              <div className="text-xs font-bold tracking-[0.16em] text-blue-300">当前产品 / CURRENT PRODUCT</div>
              <div className="mt-2 text-2xl font-black">QC-01 Professional Edition</div>
              <div className="mt-5 flex items-end gap-2">
                <div className="text-4xl font-black text-amber-300">US$9.90</div>
                <div className="pb-1 text-sm text-slate-400">一次购买 / One-time</div>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                结账时如有适用税费，将由支付平台根据交易所在地计算并显示。<br />
                Applicable taxes, if any, are calculated and shown at checkout based on the transaction location.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">当前版本 / Version</span>
                  <b>V2.1</b>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">交付方式 / Delivery</span>
                  <b>ZIP Professional Package</b>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">使用方式 / Environment</span>
                  <b>Windows / Microsoft Excel</b>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">订阅 / Subscription</span>
                  <b>不需要 / Not required</b>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold tracking-[0.14em] text-blue-300">数字交付 / DIGITAL DELIVERY</div>
                <div className="mt-2 font-black">预制软件 · ZIP 数字交付 / Pre-built software · ZIP delivery</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  商品在购买前已经开发完成。付款成功后提供对应 Professional Package 的数字下载入口。<br />
                  This is a pre-built digital software product. After successful payment, the buyer receives access to the corresponding Professional Package download.
                </p>
              </div>

              <PaddleBuyButton />

              <Link
                href="/tools/inspection-record"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/5"
              >
                先使用免费在线版 / Try Free Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.2em] text-blue-600">为什么选择专业版 / WHY PROFESSIONAL</div>
          <h2 className="mt-3 text-3xl font-black">用户付费买到的，不应该只是“同一个结果换成Excel”</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            免费版已经可以完成一次真实 AQL 抽样与合格判断。Professional Edition 的价值，
            是把每天反复发生的检验工作变成一套可保存、可查询、可交接、可打印的本地质量系统。
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1.25fr_1fr_1fr] bg-[#0f2747] text-sm font-bold text-white">
            <div className="p-4">能力 / Capability</div>
            <div className="p-4 text-center">Free Online</div>
            <div className="p-4 text-center text-amber-300">Professional Edition</div>
          </div>

          {compareRows.map(([cap, free, pro], index) => (
            <div
              key={cap}
              className={`grid grid-cols-[1.25fr_1fr_1fr] text-sm ${index % 2 ? "bg-slate-50" : "bg-white"}`}
            >
              <div className="border-t border-slate-200 p-4 font-semibold text-slate-700">{cap}</div>
              <div className="border-l border-t border-slate-200 p-4 text-center text-slate-600">{free}</div>
              <div className="border-l border-t border-slate-200 p-4 text-center font-semibold text-slate-900">{pro}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[0.2em] text-blue-600">专业包 / PROFESSIONAL PACKAGE</div>
            <h2 className="mt-3 text-3xl font-black">购买后下载的是完整 ZIP 专业包</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              我们采用 ZIP 作为标准交付格式，确保 Excel 工具、说明文件、示例和后续扩展内容一起交付。
              对未来带 VBA、UserForm 或按钮控件的 Interactive 版本，也能完整保留原始功能。
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {packageItems.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-black text-blue-600">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-2 text-lg font-black">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-slate-950 p-6 font-mono text-xs leading-7 text-slate-300 md:p-7">
            <div>BaiheAI_QC01_Professional.zip</div>
            <div>├─ QC01_Professional.xlsx</div>
            <div>├─ 使用说明.pdf</div>
            <div>├─ 示例数据.xlsx</div>
            <div>└─ Version_History.txt</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.2em] text-blue-600">购买流程 / WORKFLOW</div>
          <h2 className="mt-3 text-3xl font-black">先用，再决定要不要买</h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {workflow.map(([num, title, text]) => (
            <div key={num} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-black text-blue-600">{num}</div>
              <div className="mt-2 font-black">{title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-7">
              <div className="text-xs font-bold tracking-[0.15em] text-blue-700">适合购买 / GOOD FIT</div>
              <h2 className="mt-2 text-xl font-black">适合购买</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p>✓ 工厂每天都在做 IQC / IPQC / OQC 检验记录。</p>
                <p>✓ 需要保存历史，而不是算完一次就结束。</p>
                <p>✓ 经常需要按货号、供应商、客户或日期查询。</p>
                <p>✓ 需要给现场、主管、客户或审核人员打印正式结果。</p>
                <p>✓ 不想部署复杂 ERP，希望下载后直接使用。</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="text-xs font-bold tracking-[0.15em] text-slate-500">免费版已足够 / FREE IS ENOUGH</div>
              <h2 className="mt-2 text-xl font-black">这些情况不用急着买</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p>• 只是偶尔想知道一批货应该抽多少。</p>
                <p>• 只需要临时判断 Major / Minor 是否超标。</p>
                <p>• 不需要长期保存检验历史。</p>
                <p>• 不需要正式打印、查询或内部交接。</p>
              </div>
              <Link
                href="/tools/inspection-record"
                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 ring-1 ring-blue-200"
              >
                继续免费使用即可
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-black tracking-[0.2em] text-blue-600">支付与交付 / PAYMENT & DELIVERY</div>
            <h2 className="mt-3 text-3xl font-black">付款前把价格、扣款和交付说清楚</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Clear payment terms before purchase: price, taxes, delivery method and refund rules are shown before checkout.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-black text-blue-600">01 · PRICE</div>
              <h3 className="mt-2 text-lg font-black">US$9.90 · 一次购买 / One-time purchase</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                不是月费，也不会自动续费。<br />
                This is a one-time purchase. There is no monthly subscription and no automatic renewal.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-black text-blue-600">02 · CHECKOUT</div>
              <h3 className="mt-2 text-lg font-black">安全结账 / Secure checkout</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                正式上线后，Paddle 作为 Merchant of Record 处理在线付款。实际可用支付方式会根据买家所在地区、设备和币种显示。<br />
                When enabled, Paddle acts as Merchant of Record and processes the online payment. Available payment methods may vary by buyer location, device and currency.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-black text-blue-600">03 · TAX</div>
              <h3 className="mt-2 text-lg font-black">税费 / Taxes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                如交易需要适用税费，最终金额会在付款前显示。<br />
                If taxes apply to the transaction, the final amount is shown before payment is completed.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-black text-blue-600">04 · DELIVERY</div>
              <h3 className="mt-2 text-lg font-black">数字交付 / Digital delivery</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                付款确认后提供 ZIP Professional Package 下载入口；建议下载后立即备份。<br />
                After payment is confirmed, access is provided to the ZIP Professional Package. Buyers should keep a local backup after download.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
          <div className="text-xs font-bold tracking-[0.2em] text-blue-600">交付与政策 / DELIVERY & POLICY</div>
          <h2 className="mt-3 text-2xl font-black">数字产品交付说明</h2>
          <div className="mt-5 grid gap-5 text-sm leading-7 text-slate-600 md:grid-cols-2">
            <p>
              <b className="text-slate-900">交付：</b>
              付款完成后提供 Professional Package 的 ZIP 下载入口。文件属于数字产品，建议购买后立即保存备份。<br />
              After successful payment, the Professional Package is delivered digitally as a ZIP download. Please save a local backup after download.
            </p>
            <p>
              <b className="text-slate-900">授权：</b>
              购买主体可用于自身日常工作并自行备份；不得把原始模板、后台参数或修改后的版本再次转售或公开分发。<br />
              The buyer may use and back up the product for its own internal work. Resale, public redistribution or repackaging for commercial resale is not permitted.
            </p>
            <p>
              <b className="text-slate-900">更新：</b>
              同一产品的小版本优化会在商品页标注版本号；重大新版本或单独发布的新模块不视为免费小版本更新。<br />
              Minor product updates are identified by version number. Major editions or separately released modules are not automatically included unless stated.
            </p>
            <p>
              <b className="text-slate-900">退款：</b>
              数字产品交付后通常不因单纯“改变主意”自动退款；但重复扣款、持续无法交付、文件存在实质性故障、与商品说明重大不符或适用法律赋予退款/撤回权的情况不受此限制。通过 Paddle 完成的订单还适用 Paddle 的买家退款规则。<br />
              Digital products are generally not automatically refundable after delivery solely for a change of mind. Duplicate charges, failed delivery, material product defects, material mismatch, mandatory consumer rights and Paddle buyer rules remain applicable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-7">
          <div className="text-sm font-black text-slate-900">购买前请阅读 / Before Purchase</div>
          <p className="mt-2 text-xs leading-6 text-slate-500">
            付款前请确认产品功能、版本、US$9.90 一次购买价格、ZIP 数字交付内容以及适用政策。正式支付启用后，结账页面会在付款前显示最终金额和适用税费。<br />
            Before purchase, please review the product features, version, US$9.90 one-time price, ZIP delivery contents and applicable policies. The final amount and any applicable taxes are shown before payment.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/tools/legal/terms" className="font-semibold text-blue-700 hover:underline">服务条款 Terms</Link>
            <Link href="/tools/legal/privacy" className="font-semibold text-blue-700 hover:underline">隐私政策 Privacy</Link>
            <Link href="/tools/legal/refund-policy" className="font-semibold text-blue-700 hover:underline">退款政策 Refunds</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <div className="rounded-3xl bg-[#0f2747] px-7 py-8 text-white md:px-9">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-300">预制标准软件 / PRE-BUILT SOFTWARE PRODUCT</div>
            <h2 className="mt-2 text-xl font-black">QC-01 Professional Edition 是已经完成开发的标准数字软件产品。</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              本商品页价格仅对应这里列出的标准软件和数字交付内容。本 Factory Tools 商店不销售广告、营销、商业咨询或定制软件开发服务。
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/tools/support" className="text-white underline underline-offset-4">Product Support</Link>
              <Link href="/tools" className="text-white underline underline-offset-4">Software Catalog</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
