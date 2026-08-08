import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国公司注册流程与材料清单｜BaiheAI",
  description:
    "根据现有资料整理泰国私人有限公司注册条件、准备材料、标准流程、税务社保与银行开户等前期信息，并保留泰国 BOI、商业部与税务局官方入口。",
  alternates: {
    canonical: "https://www.baihediy.com/blog/thailand-company-registration-guide",
  },
  openGraph: {
    title: "泰国公司注册流程与材料清单｜BaiheAI",
    description: "泰国公司注册条件、材料、标准流程与官方信息入口。",
    url: "https://www.baihediy.com/blog/thailand-company-registration-guide",
    type: "article",
    locale: "zh_CN",
  },
};

const officialLinks = [
  ["泰国投资促进委员会（BOI）", "https://www.boi.go.th/", "投资优惠政策、行业目录、投资指南及 BOI 项目信息。"],
  ["泰国商业部（Ministry of Commerce）", "https://www.moc.go.th/", "公司注册、商标申请、贸易法规等官方信息。"],
  ["泰国税务局（Revenue Department）", "https://www.rd.go.th/landing.html", "税务申报、VAT 与企业税务相关信息。"],
];

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="泰国公司注册流程与材料清单"
        description="泰国公司注册条件、材料、标准流程、税务社保与银行开户的前期信息整理。"
        url="https://www.baihediy.com/blog/thailand-company-registration-guide"
        datePublished="2026-08-08"
        dateModified="2026-08-08"
      />

      <main className="min-h-screen bg-[#f8fcff] pt-20 text-slate-950 sm:pt-24">
        <article className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-sky-700">首页</Link><span>/</span>
            <Link href="/blog" className="hover:text-sky-700">知识中心</Link><span>/</span>
            <span className="text-slate-700">泰国公司注册</span>
          </nav>

          <p className="text-xs font-black uppercase tracking-[.28em] text-sky-600">THAILAND COMPANY REGISTRATION</p>
          <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">泰国公司注册流程与材料清单</h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            本文根据现有资料整理泰国公司注册的核心条件、材料和流程，方便企业在正式咨询或办理前先形成一份基础清单。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/downloads/%E6%B3%B0%E5%9B%BD%E5%85%AC%E5%8F%B8%E6%B3%A8%E5%86%8C%E6%B5%81%E7%A8%8B%E4%B8%8E%E6%9D%90%E6%96%99%E6%B8%85%E5%8D%95.pdf" className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3.5 text-center text-sm font-black text-white shadow-md">
              下载 PDF 版本
            </a>
            <Link href="/consultation" className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-center text-sm font-black text-slate-800 hover:border-sky-300 hover:text-sky-700">
              咨询具体项目
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            <b>重要说明：</b>以下内容依据用户提供的资料整理，政策、材料和办理要求可能变化。正式办理前，请以泰国相关政府部门、使领馆及项目所在地最新要求为准；本文不替代法律、税务或政府审批意见。
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-black">一、相关官方信息入口</h2>
            <div className="mt-5 grid gap-3">
              {officialLinks.map(([title, href, desc]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-md">
                  <h3 className="font-black text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                  <p className="mt-2 break-all text-sm font-bold text-sky-700">{href}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-12 space-y-8">
            <div><h2 className="text-2xl font-black">二、泰国公司注册流程与材料清单</h2><p className="mt-4 leading-8 text-slate-600">注册泰国公司是外籍人士在泰合法经营及后续办理工作签证的基础。资料中通常推荐注册“私人有限公司”。</p></div>
            <div><h3 className="text-xl font-black">1. 核心注册条件</h3><ul className="mt-4 space-y-3 leading-8 text-slate-600"><li><b className="text-slate-900">人员要求：</b>至少需要3名初始股东（注册完成后可减少至1人），以及至少1名董事（无国籍限制）。</li><li><b className="text-slate-900">注册资本：</b>最低注册资本为100万泰铢。若计划为外籍员工申请工作签证，资料建议注册资本设定为200万泰铢或以上。</li><li><b className="text-slate-900">注册地址：</b>需提供泰国境内的合法商业地址证明（如租赁合同及房东身份证/房产证等）。</li></ul></div>
            <div><h3 className="text-xl font-black">2. 核心准备材料</h3><ul className="mt-4 space-y-3 leading-8 text-slate-600"><li><b className="text-slate-900">公司名称：</b>准备3个英文或泰文备选名称，用于向泰国商务部申请名称预核准。</li><li><b className="text-slate-900">股东与董事资料：</b>外国股东/董事需护照复印件及经认证的住址证明；泰国股东/董事需泰国身份证及户口本复印件；若股东为法人企业，需提供营业执照及法人护照等公证认证文件。</li><li><b className="text-slate-900">公司章程（MOA）：</b>需由所有股东签署，明确公司经营范围、股本结构、股东权利与义务等。</li><li><b className="text-slate-900">注册资本证明：</b>资料中写明注册时通常需实缴至少25%的注册资本，并提供泰国本地银行出具的资本验证信（验资报告）。</li></ul></div>
            <div><h3 className="text-xl font-black">3. 标准注册流程</h3><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-600"><li><b className="text-slate-900">名称预核准：</b>向商业发展厅（DBD）在线提交备选名称，资料中给出的通常时间为1-3个工作日。</li><li><b className="text-slate-900">起草章程与法定会议：</b>起草公司章程，召开法定股东大会，确认注册资本认缴情况、选举董事并形成会议记录。</li><li><b className="text-slate-900">提交注册申请：</b>向商业发展厅提交全套注册文件并缴纳注册费。资料中给出的审核时间约5-10个工作日。</li><li><b className="text-slate-900">后续合规登记：</b>办理税务登记、社保登记，并在泰国本地银行开立企业账户。</li></ol></div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5"><h3 className="font-black text-sky-950">后续合规提示</h3><p className="mt-2 leading-7 text-sky-900/80">资料中写明，若年营业额预计超过180万泰铢，需在30天内申请增值税（VAT）登记；若雇佣员工，需要在泰国社会保障办公室进行登记。</p></div>
          </section>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black">企业在正式办理前可以先确认</h2>
            <ul className="mt-5 space-y-3 leading-7 text-slate-600"><li>经营范围与实际业务模式是否已经明确。</li><li>股东结构、董事安排和注册地址是否确定。</li><li>是否计划申请 BOI 或为外籍人员办理工作签证/工作许可。</li><li>注册资本、银行开户、税务及用工安排是否纳入整体项目计划。</li></ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
