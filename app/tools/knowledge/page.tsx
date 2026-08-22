import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "工厂知识库｜BaiheAI Factory Knowledge",
  description: "质量、仓库、生产、技术、新产品开发、客户痛点、共同开发和供应商管理知识体系。",
};

const categories = [
  ["quality-management","质量管理","Quality Management","IQC / IPQC / OQC、AQL、8D、CAPA、FMEA、异常与供应商质量。"],
  ["warehouse-logistics","仓库与进出货","Warehouse & Logistics","收货、入库、库存、领料、退料、FIFO、盘点、追溯、出货与装柜。"],
  ["production-management","生产管理","Production Management","订单、BOM、物料齐套、排产、工序、产量、设备与现场异常。"],
  ["technical-documentation","技术资料","Technical Documentation","图纸、规格、SOP、WI、BOM、ECN/ECR、材料、模具、治具与测试。"],
  ["product-development","新产品开发","New Product Development","VOC、产品定义、DFM/DFA、样品、试产、验证、NPI与量产移交。"],
  ["customer-pain-points","客户痛点与产品改善","Customer Pain Point Improvement","从使用场景和投诉中找到真正问题，并形成可验证改善。"],
  ["co-development","客户共同开发","Co-development","需求澄清、方案评审、共同验证、风险确认和新产品量产。"],
  ["supplier-management","供应商与外协管理","Supplier Management","供应商开发、审核、来料、整改、SCAR、绩效和持续改善。"],
];

export default function KnowledgeHome() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <Link href="/tools" className="text-sm font-bold text-slate-500 hover:text-blue-600">← 返回 Factory Tools</Link>
          <div className="mt-7 text-xs font-black tracking-[0.2em] text-blue-600">FACTORY KNOWLEDGE BASE</div>
          <h1 className="mt-3 text-4xl font-black">工厂实用知识库</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            不追求理论堆砌，重点回答：现场遇到这个问题应该先看什么、怎么判断、怎么记录、怎么改善，以及怎么防止再次发生。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(([slug,cn,en,desc],i)=>(
            <Link key={slug} href={`/tools/knowledge/${slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="text-xs font-black text-blue-600">{String(i+1).padStart(2,"0")}</div>
              <div className="mt-4 text-xs font-bold text-slate-400">{en}</div>
              <h2 className="mt-1 text-lg font-black">{cn}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              <div className="mt-5 text-sm font-bold text-blue-700">进入模块 →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
