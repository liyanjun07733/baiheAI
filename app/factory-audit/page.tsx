import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "泰国验厂服务｜工厂验厂辅导・客户委托现场验厂",
  description:
    "BaiheAI 提供泰国工厂验厂辅导、客户委托现场验厂、供应商现场考察、资料与现场准备、中英泰沟通、照片视频记录及考察报告支持。",
  keywords: [
    "泰国验厂",
    "泰国代验厂",
    "泰国工厂验厂",
    "泰国供应商验厂",
    "泰国工厂考察",
    "客户委托验厂",
    "工厂验厂辅导",
  ],
  alternates: { canonical: "https://www.baihediy.com/factory-audit" },
  openGraph: {
    title: "泰国验厂服务｜工厂验厂辅导・客户委托现场验厂",
    description: "帮助工厂准备客户验厂，也可接受客户委托赴泰国现场考察供应商与工厂。",
    url: "https://www.baihediy.com/factory-audit",
    locale: "zh_CN",
    type: "website",
  },
};

const prep = [
  "根据客户验厂重点梳理准备清单",
  "检查现场、文件、流程和沟通事项",
  "模拟验厂问题，提前发现明显缺口",
  "协助中英泰沟通、翻译与现场陪同",
  "记录问题并整理后续改进建议",
];

const commissioned = [
  "按客户要求预约并前往泰国工厂现场",
  "查看工厂实际运营、设备、产线与基础条件",
  "按约定重点拍照、录像并记录现场情况",
  "与工厂负责人沟通客户关心的问题",
  "整理现场考察记录与项目报告供客户决策参考",
];

export default function FactoryAuditPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030711] pt-20 text-white">
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.3em] text-cyan-300">THAILAND FACTORY AUDIT</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            泰国验厂服务：
            <span className="bg-gradient-to-r from-blue-400 to-emerald-300 bg-clip-text text-transparent">
              {" "}既帮助工厂准备，也可以替客户去现场看。
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            BaiheAI 将验厂服务拆成两个方向：一是帮助泰国工厂做好客户验厂前的准备与现场协作；
            二是当客户没有时间亲自来泰国时，接受委托前往供应商或工厂进行现场考察、信息记录与沟通。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/consultation?from=factory-audit" className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-center font-black shadow-lg shadow-cyan-500/10">
              1 分钟验厂需求诊断
            </Link>
            <a href="#services" className="rounded-2xl border border-white/15 bg-white/[.04] px-7 py-4 text-center font-black text-slate-200">
              查看两类验厂服务
            </a>
          </div>
        </section>

        <section id="services" className="mx-auto grid max-w-7xl gap-5 px-5 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[.05] p-6 sm:p-8">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">FOR FACTORY</span>
            <h2 className="mt-5 text-3xl font-black">工厂验厂辅导</h2>
            <p className="mt-4 leading-8 text-slate-400">
              适合即将迎接客户、采购商或合作方来厂审核的企业。我们协助工厂把现场、资料、流程和沟通事项提前梳理清楚。
            </p>
            <ul className="mt-6 space-y-3">
              {prep.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-300"><span className="text-cyan-300">✓</span>{item}</li>)}
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[.05] p-6 sm:p-8">
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">FOR BUYER</span>
            <h2 className="mt-5 text-3xl font-black">客户委托现场验厂</h2>
            <p className="mt-4 leading-8 text-slate-400">
              适合中国客户没有时间亲自来泰国，但希望确认供应商或工厂现场实际情况。我们按照客户事先确认的检查重点到现场执行。
            </p>
            <ul className="mt-6 space-y-3">
              {commissioned.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-300"><span className="text-emerald-300">✓</span>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 sm:p-8">
            <h2 className="text-2xl font-black">委托现场验厂，建议客户先告诉我们这些信息</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["工厂名称与地址","需要核实的重点","需要的照片/视频内容","预计验厂时间"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm font-bold text-slate-300">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/[.05] p-6 sm:p-8">
            <h2 className="text-xl font-black text-amber-100">服务边界说明</h2>
            <p className="mt-3 leading-7 text-amber-100/70">
              BaiheAI 提供商业场景下的验厂前辅导、现场考察、信息记录、沟通与报告支持。
              本服务不替代 ISO、BSCI、SEDEX 或其他认证机构、法定机构、专业第三方审核机构出具的正式审核或认证结论。
              如客户需要特定体系、技术或合规审核，应提前说明，我们将据此判断是否需要引入相应专业机构。
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-cyan-400/20 bg-cyan-400/[.05] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-2xl font-black">先把验厂目标说清楚，再决定怎么做。</h2>
              <p className="mt-2 text-slate-400">告诉我们是“准备客户来验厂”还是“委托我们去现场验厂”。</p>
            </div>
            <Link href="/consultation?from=factory-audit-bottom" className="rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-7 py-4 text-center font-black">
              提交验厂需求
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
