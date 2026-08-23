import type { Metadata } from "next";
import Link from "next/link";
import SmartParticles from "../components/SmartParticles";

export const metadata: Metadata = {
  title: "BaiheAI Factory Knowledge & Tools｜工厂知识、工具与专业资料",
  description:
    "面向工厂质量、仓库、生产、技术资料、新产品开发和客户痛点改善的实用知识、在线工具、模板与Professional Edition。",
  alternates: { canonical: "https://tools.baihediy.com/" },
};

const categories = [
  {
    code: "QM",
    title: "质量管理",
    en: "Quality Management",
    desc: "从 IQC、IPQC、OQC 到 AQL、8D、CAPA、FMEA、检验报告和异常改善。",
    href: "/tools/knowledge/quality-management",
    items: ["AQL抽样", "不良判定", "8D/CAPA", "供应商质量"],
  },
  {
    code: "WH",
    title: "仓库与进出货",
    en: "Warehouse & Logistics",
    desc: "把收货、入库、库存、领料、退料、出货、盘点和追溯真正管清楚。",
    href: "/tools/knowledge/warehouse-logistics",
    items: ["收货入库", "库存追溯", "FIFO", "出货装柜"],
  },
  {
    code: "PM",
    title: "生产管理",
    en: "Production Management",
    desc: "订单、BOM、物料、排产、工序、产量、异常、设备与现场管理。",
    href: "/tools/knowledge/production-management",
    items: ["生产订单", "物料齐套", "产能排程", "现场异常"],
  },
  {
    code: "TD",
    title: "技术资料",
    en: "Technical Documentation",
    desc: "图纸、规格、SOP、WI、BOM、ECN/ECR、模具、治具、材料和测试资料。",
    href: "/tools/knowledge/technical-documentation",
    items: ["图纸规格", "SOP/WI", "BOM", "ECN/ECR"],
  },
  {
    code: "NPI",
    title: "新产品开发",
    en: "New Product Development",
    desc: "从客户需求到产品定义、样品、DFM、试产、验证，再到量产的完整方法。",
    href: "/tools/knowledge/product-development",
    items: ["VOC", "产品定义", "样品验证", "NPI量产"],
  },
  {
    code: "CI",
    title: "客户痛点与产品改善",
    en: "Customer Pain Point Improvement",
    desc: "不只是把订单生产出来，而是识别客户真正的问题，提出可验证的改善方案。",
    href: "/tools/knowledge/customer-pain-points",
    items: ["痛点识别", "失效场景", "改善方案", "价值验证"],
  },
  {
    code: "CD",
    title: "客户共同开发",
    en: "Co-development",
    desc: "如何和客户一起把模糊需求变成规格、样件、验证计划和可量产的新产品。",
    href: "/tools/knowledge/co-development",
    items: ["需求澄清", "方案评审", "共同验证", "量产移交"],
  },
  {
    code: "SM",
    title: "供应商与外协管理",
    en: "Supplier Management",
    desc: "供应商开发、验厂、来料、异常、整改、绩效与长期质量提升。",
    href: "/tools/knowledge/supplier-management",
    items: ["供应商审核", "来料质量", "SCAR", "绩效评价"],
  },
];

type ProductCard = {
  code: string;
  title: string;
  desc: string;
  status: "Professional Edition" | "Free Online";
  priceText?: string;
  version?: string;
  freeHref?: string;
  proHref?: string;
};

const products: ProductCard[] = [
  {
    code: "QC-01",
    title: "通用智能检验记录",
    desc: "AQL 抽样、进料 / 过程 / 成品检验记录、历史查询、统计、打印与追溯。",
    status: "Professional Edition",
    priceText: "US$9.90",
    version: "V2.1",
    freeHref: "/tools/inspection-record",
    proHref: "/tools/inspection-record/pro",
  },
  {
    code: "PM-01",
    title: "生产订单管理",
    desc: "客户、商品、员工资料，以及订单录入、生产录入、进度跟踪、产量统计、查询与进度看板。",
    status: "Professional Edition",
    priceText: "US$9.90",
    version: "V1.0",
    proHref: "/tools/product/pm01",
  },
  {
    code: "QC-02",
    title: "单产品智能验货报告",
    desc: "单产品验货、照片、不良记录、结果判定和 PDF 输出。",
    status: "Free Online",
    freeHref: "/tools/inspection-report",
  },
  {
    code: "QA-01",
    title: "智能质量判定",
    desc: "风险等级、系统性判断、Hard Stop 和改善行动计划。",
    status: "Free Online",
    freeHref: "/tools/quality-decision",
  },
];

const loop = [
  ["01", "发现客户痛点", "不要先问“能不能生产”，先确认客户真正不满意的是什么。"],
  ["02", "把问题变成需求", "把抱怨、场景和使用问题转成可测量的产品指标。"],
  ["03", "形成技术方案", "材料、结构、工艺、成本、风险和供应链一起评估。"],
  ["04", "样品与验证", "用样件、测试和真实使用场景证明方案是否有效。"],
  ["05", "导入量产", "把成功样品转成图纸、BOM、工艺、检验标准和生产控制。"],
  ["06", "质量与交付", "稳定生产、控制异常、按要求出货并保留追溯数据。"],
  ["07", "客户反馈", "把售后、使用和投诉信息变成下一轮产品改善输入。"],
  ["08", "共同开发下一代", "从供应商角色走向长期产品合作伙伴。"],
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <SmartParticles />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black tracking-[0.18em] text-blue-700">
              BAIHEAI FACTORY KNOWLEDGE & TOOLS
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.12] tracking-tight md:text-5xl">
              工厂不只是把产品做出来，
              <span className="text-blue-600">更要把问题变成改善，把需求变成新产品。</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              从质量、仓库、生产、技术资料，到新产品开发、客户痛点分析与共同开发，
              把工厂每天真正需要的知识、方法、模板和数字工具整理成一个可以直接使用的平台。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#knowledge" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-700">
                浏览工厂知识体系
              </a>
              <a href="#software" className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:border-blue-200 hover:text-blue-700">
                使用数字工具
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>✓ 工厂实战知识</span>
              <span>✓ 免费在线工具</span>
              <span>✓ 表格与模板</span>
              <span>✓ Professional Edition</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="text-xs font-black tracking-[0.16em] text-blue-600">FACTORY OPERATING SYSTEM</div>
            <div className="mt-2 text-2xl font-black">从订单到下一代产品</div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              真正有竞争力的工厂，不只是接单生产，而是持续解决客户问题、沉淀技术资料，并参与客户下一代产品的开发。
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["质量", "仓库", "生产", "技术", "开发", "改善", "客户", "供应商"].map((x, i) => (
                <div key={x} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-black text-blue-600">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 text-sm font-black">{x}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="software" className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-xs font-black tracking-[0.2em] text-blue-600">
              FACTORY SOFTWARE
            </div>
            <h2 className="mt-3 text-3xl font-black">
              知识解决“怎么做”，工具解决“每天怎么快一点”
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              免费在线版用于快速判断和计算；Professional Edition 用于长期记录、查询、打印、追溯和企业内部使用。
            </p>
          </div>

          <Link
            href="/tools/knowledge"
            className="inline-flex shrink-0 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:border-blue-200 hover:text-blue-700"
          >
            进入完整知识库 →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const isProfessional = product.status === "Professional Edition";

            return (
              <article
                key={product.code}
                className="flex min-h-[350px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-black tracking-[0.08em] text-blue-600">
                    {product.code}
                  </span>

                  <span
                    className={
                      isProfessional
                        ? "rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800"
                        : "rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700"
                    }
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.desc}
                </p>

                <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3">
                  {isProfessional ? (
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-400">
                          Professional Edition
                        </div>
                        <div className="mt-1 text-lg font-black text-slate-950">
                          {product.priceText}
                        </div>
                      </div>
                      <div className="text-xs font-bold text-slate-500">
                        {product.version}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400">
                        Online Tool
                      </div>
                      <div className="mt-1 text-sm font-black text-slate-800">
                        免费在线使用
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-auto space-y-2 pt-6">
                  {product.freeHref ? (
                    <Link
                      href={product.freeHref}
                      className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700"
                    >
                      免费在线使用
                    </Link>
                  ) : null}

                  {product.proHref ? (
                    <Link
                      href={product.proHref}
                      className="flex w-full items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-black text-amber-800 transition hover:bg-amber-100"
                    >
                      查看 / 购买专业版
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="knowledge" className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-black tracking-[0.2em] text-blue-600">KNOWLEDGE SYSTEM</div>
          <h2 className="mt-3 text-3xl font-black">工厂真正需要的 8 大知识模块</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            每个模块都会逐步加入：实用文章、检查清单、标准模板、案例方法、在线计算工具和可下载专业工具。
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.code}
              href={cat.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-700">
                  {cat.code}
                </div>
                <span className="text-slate-300 transition group-hover:text-blue-500">→</span>
              </div>
              <div className="mt-5 text-xs font-bold text-blue-600">{cat.en}</div>
              <h3 className="mt-1 text-lg font-black">{cat.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{cat.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-black tracking-[0.2em] text-blue-600">CUSTOMER VALUE LOOP</div>
            <h2 className="mt-3 text-3xl font-black">生产的终点，不应该只是“按图交货”</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              更高价值的工厂，会把客户使用中的麻烦、投诉、效率问题和成本压力，转成新的技术机会。
              这也是从“供应商”变成“共同开发伙伴”的路径。
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {loop.map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-xs font-black text-blue-600">{num}</div>
                <div className="mt-2 font-black">{title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-5 lg:grid-cols-4">
            {[
              ["KNOWLEDGE", "知识", "讲清楚为什么、什么时候用、判断依据是什么。"],
              ["METHOD", "方法", "把复杂经验拆成普通员工也能执行的步骤。"],
              ["TEMPLATE", "模板", "检查表、记录表、报告、SOP 和标准文件直接参考。"],
              ["SOFTWARE", "工具", "把重复计算、记录、查询、统计和打印自动化。"],
            ].map(([en, title, text]) => (
              <div key={en} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-black tracking-[0.14em] text-blue-600">{en}</div>
                <div className="mt-2 text-xl font-black">{title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="rounded-3xl bg-[#0f2747] px-7 py-8 text-white md:px-9">
          <div className="text-xs font-black tracking-[0.16em] text-blue-300">PLATFORM PRINCIPLE</div>
          <h2 className="mt-2 text-xl font-black">复杂逻辑放在后台，现场操作保持简单。</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            BaiheAI Factory Knowledge & Tools 的目标不是把工厂变成一套复杂 ERP，而是把真正有用的工厂经验、
            文件、方法和工具整理出来，让质量人员、仓库、生产、技术和管理人员都能快速找到并直接使用。
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© 2026 BaiheAI Factory Knowledge & Tools</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/tools/knowledge" className="hover:text-blue-700">Knowledge</Link>
            <Link href="/tools/legal/terms" className="hover:text-blue-700">Terms</Link>
            <Link href="/tools/legal/privacy" className="hover:text-blue-700">Privacy</Link>
            <Link href="/tools/legal/refund-policy" className="hover:text-blue-700">Refund Policy</Link>
            <Link href="/tools/support" className="hover:text-blue-700">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
