import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArticleJsonLd from "../../components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "泰国 Non-B 工作签证与 Work Permit 办理指南｜BaiheAI",
  description:
    "根据现有资料整理泰国 Non-B 工作签证、Work Permit 工作许可、雇主资质、员工材料、WP3 与入境后办理流程，并保留官方信息入口。",
  alternates: {
    canonical: "https://www.baihediy.com/blog/thailand-non-b-work-permit-guide",
  },
  openGraph: {
    title: "泰国 Non-B 工作签证与 Work Permit 办理指南｜BaiheAI",
    description: "Non-B、Work Permit、WP3、雇主与员工材料的前期梳理。",
    url: "https://www.baihediy.com/blog/thailand-non-b-work-permit-guide",
    type: "article",
    locale: "zh_CN",
  },
};

const officialLinks = [
  ["泰国电子签证系统（e-Visa）", "https://www.thaievisa.go.th/", "在线申请各类泰国签证。"],
  ["泰国电子入境卡（TDAC）", "https://tdac.immigration.go.th", "资料注明自2025年5月1日起，外国旅客入境泰国前需提前填写。"],
  ["e-Work Permit", "https://eworkpermit.doe.go.th/", "泰国劳工部工作许可线上系统。"],
  ["泰国劳工部", "https://www.mol.go.th/", "工作签证、雇佣法规及外籍员工管理政策信息。"],
];

export default function Page() {
  return (
    <>
      <Navbar />
      <ArticleJsonLd
        title="泰国 Non-B 工作签证与 Work Permit 办理指南"
        description="泰国 Non-B 工作签证、Work Permit、WP3、雇主资质与员工材料的前期信息整理。"
        url="https://www.baihediy.com/blog/thailand-non-b-work-permit-guide"
        datePublished="2026-08-08"
        dateModified="2026-08-08"
      />

      <main className="min-h-screen bg-[#f8fcff] pt-20 text-slate-950 sm:pt-24">
        <article className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500"><Link href="/" className="hover:text-emerald-700">首页</Link><span>/</span><Link href="/blog" className="hover:text-emerald-700">知识中心</Link><span>/</span><span className="text-slate-700">Non-B 与 Work Permit</span></nav>
          <p className="text-xs font-black uppercase tracking-[.28em] text-emerald-600">THAILAND WORK GUIDE</p>
          <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">泰国 Non-B 工作签证与 Work Permit 办理指南</h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">根据现有资料，把雇主资质、外籍员工材料、WP3、Non-B 申请和入境后的工作许可流程放在一张路径里，便于项目团队前期梳理。</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href="/downloads/%E6%B3%B0%E5%9B%BDNon-B%E5%B7%A5%E4%BD%9C%E7%AD%BE%E8%AF%81%E4%B8%8EWork-Permit%E5%8A%9E%E7%90%86%E6%8C%87%E5%8D%97.pdf" className="rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 px-5 py-3.5 text-center text-sm font-black text-white shadow-md">下载 PDF 版本</a><Link href="/consultation" className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-center text-sm font-black text-slate-800 hover:border-emerald-300 hover:text-emerald-700">咨询具体项目</Link></div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900"><b>重要说明：</b>以下内容依据用户提供的资料整理，签证、工作许可、材料、比例及办理时限可能随政策、身份、公司资质与项目类型变化。正式办理前，请以泰国劳工部、移民局、电子签证系统及相关使领馆最新要求为准。</div>

          <section className="mt-10"><h2 className="text-2xl font-black">一、相关官方信息入口</h2><div className="mt-5 grid gap-3">{officialLinks.map(([title, href, desc]) => (<a key={href} href={href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"><h3 className="font-black text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p><p className="mt-2 break-all text-sm font-bold text-emerald-700">{href}</p></a>) )}</div></section>

          <section className="mt-12 space-y-8">
            <div><h2 className="text-2xl font-black">二、Non-B 与 Work Permit 的基本关系</h2><p className="mt-4 leading-8 text-slate-600">资料中将两者区分为：<b className="text-slate-900">工作签证（Non-B）是合法居留凭证，而工作许可（Work Permit）是合法工作凭证。</b></p></div>
            <div><h3 className="text-xl font-black">1. 雇主（泰国公司）资质要求</h3><ul className="mt-4 space-y-3 leading-8 text-slate-600"><li>公司必须正式注册为法人实体。</li><li>资料中写明注册资本需实缴至少200万泰铢。</li><li>资料中写明需雇佣至少4名泰国本地员工，并为其缴纳社保满3个月（泰籍与外籍员工比例为4:1）。</li></ul></div>
            <div><h3 className="text-xl font-black">2. 外籍员工个人要求</h3><ul className="mt-4 space-y-3 leading-8 text-slate-600"><li>具备与拟任职位相匹配的学历背景及工作经验。</li><li>资料中写明中国公民薪资需达到每月35,000泰铢的标准。</li><li>不得从事泰国法律禁止外籍人士从事的职业。</li></ul></div>
            <div><h2 className="text-2xl font-black">三、办理全流程与材料清单</h2></div>
            <div><h3 className="text-xl font-black">第一阶段：雇主申请工作许可预批（WP3）</h3><ul className="mt-4 space-y-3 leading-8 text-slate-600"><li><b className="text-slate-900">办理地：</b>泰国劳工部。</li><li><b className="text-slate-900">雇主材料：</b>公司营业执照、税务登记证、股东名单、财务报表、雇佣外籍员工必要性说明、员工简历及学历证明、劳动合同草稿、公司租赁合同等。</li><li><b className="text-slate-900">结果：</b>资料中给出的参考时间约7-10个工作日，审核通过后出具 WP3 批准函。</li></ul></div>
            <div><h3 className="text-xl font-black">第二阶段：员工在国内申请 Non-B 签证</h3><p className="mt-4 leading-8 text-slate-600"><b className="text-slate-900">办理方式：</b>通过泰国电子签证系统 e-Visa 在线申请。</p><h4 className="mt-5 font-black">员工个人材料</h4><ul className="mt-3 space-y-2 leading-7 text-slate-600"><li>有效期6个月以上的护照原件/扫描件。</li><li>近6个月内拍摄的白底彩色证件照（3.5×4.5cm）。</li><li>无犯罪记录证明（资料中写明需公证及双认证）。</li><li>学历证书及工作简历（资料中写明需公证及双认证）。</li><li>个人资金证明（资料中写明单人不少于20,000泰铢）。</li></ul><h4 className="mt-5 font-black">泰方雇主材料</h4><ul className="mt-3 space-y-2 leading-7 text-slate-600"><li>WP3批准函或BOI批文。</li><li>公司营业执照、注册文件（DBD）、税单及公司简介。</li><li>邀请函/聘用函及正式劳动合同。</li><li>中方公司的派遣函及营业执照（适用于中方外派员工）。</li></ul><div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 leading-7 text-emerald-900">资料中写明，该阶段结果通常为获批90天有效期的 Non-B 商务签证。</div></div>
            <div><h3 className="text-xl font-black">第三阶段：入境泰国后办理工作许可与签证延期</h3><ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-600"><li>持 Non-B 签证入境后，资料中写明雇主需在15个工作日内向劳工部提交正式工作许可申请，并附体检报告等材料。</li><li>取得工作许可后，在 Non-B 签证到期前前往移民局申请签证延期，资料中描述为转换为1年有效期的工作签证。</li><li><b className="text-slate-900">后续合规：</b>资料中写明持有工作签证期间，外籍员工需每90天向移民局进行居住地址报到。</li></ol></div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-black">BOI 项目的特殊情况</h2><p className="mt-3 leading-8 text-slate-600">资料备注：若泰国公司获得 BOI 认证，或申请人属于高技能人才，可能适用 BOI 签证或 SMART 签证等不同安排，审批流程和外籍员工雇佣条件可能不同。</p></div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
