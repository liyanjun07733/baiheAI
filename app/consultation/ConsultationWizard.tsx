"use client";

import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useState } from "react";

type Need = {
  id: string;
  icon: string;
  title: string;
  desc: string;
};

const needs: Need[] = [
  {
    id: "investment",
    icon: "🇹🇭",
    title: "泰国投资 / 建厂",
    desc: "准备投资、建厂、设立生产基地或评估泰国项目。",
  },
  {
    id: "boi",
    icon: "🏛️",
    title: "BOI 方向",
    desc: "想了解项目是否可能适合 BOI，以及前期应该准备什么。",
  },
  {
    id: "company",
    icon: "🏢",
    title: "泰国公司注册",
    desc: "需要梳理公司设立、基础文件与后续落地流程。",
  },
  {
    id: "site",
    icon: "🏭",
    title: "厂房 / 仓库 / 办公室",
    desc: "需要选址、工业园区、厂房、仓库或办公资源。",
  },
  {
    id: "visa",
    icon: "🛂",
    title: "签证 / 工作许可",
    desc: "需要商务签证、工作签证、工作许可等方向支持。",
  },
  {
    id: "factory-audit-prep",
    icon: "✅",
    title: "工厂验厂辅导",
    desc: "我的工厂要迎接客户验厂，需要现场、资料、流程、沟通与整改准备。",
  },
  {
    id: "factory-audit-buyer",
    icon: "🔎",
    title: "委托泰国现场验厂",
    desc: "我没有时间亲自到泰国，希望委托当地团队去供应商或工厂现场考察并记录。",
  },
  {
    id: "language",
    icon: "🗣️",
    title: "翻译 / 商务陪同",
    desc: "需要中泰沟通、会议陪同、文件翻译或现场协作。",
  },
  {
    id: "resources",
    icon: "🤝",
    title: "泰国本地资源",
    desc: "需要供应商、渠道、服务商或其他本地执行资源。",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI 官网 / 海外获客",
    desc: "希望通过网站、内容、自动化与 AI 获取海外客户。",
  },
  {
    id: "unsure",
    icon: "🧭",
    title: "暂时不确定",
    desc: "项目还在早期，希望先有人帮我把路线梳理清楚。",
  },
];

const stages = [
  "刚开始了解",
  "正在做可行性评估",
  "已经决定进入泰国",
  "正在注册 / 选址 / 落地",
  "已经在泰国运营",
];

const timeframes = [
  "1 个月内",
  "1–3 个月",
  "3–6 个月",
  "6 个月以上",
  "暂时没有确定时间",
];

export default function ConsultationWizard() {
  const [step, setStep] = useState(1);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [stage, setStage] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const [contactName, setContactName] = useState("");
  const [company, setCompany] = useState("");
  const [contactChannel, setContactChannel] = useState("微信");
  const [contactMethod, setContactMethod] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [entrySource, setEntrySource] = useState("直接访问");

  useEffect(() => {
    const source = new URLSearchParams(window.location.search).get("from");

    const sourceLabels: Record<string, string> = {
      nav: "PC 顶部导航",
      "mobile-menu": "手机导航菜单",
      hero: "首页首屏",
      "home-cta": "首页底部 CTA",
      footer: "网站 Footer",
      "mobile-bar": "手机底部固定栏",
      "mobile-contact-sheet": "手机联系顾问面板",
      cases: "案例中心",
      "home-faq": "首页 FAQ",
      process: "首页服务流程",
      "home-share": "首页分享入口",
      services: "服务中心",
      packages: "服务方案页",
      "faq-page": "FAQ 页面",
      trust: "信任与边界页面",
      start: "开始咨询页",
      "factory-audit": "泰国验厂服务页",
      "factory-audit-bottom": "泰国验厂服务页底部",
    };

    setEntrySource(source ? sourceLabels[source] || source : "直接访问");
  }, []);

  const selectedTitles = useMemo(
    () =>
      needs
        .filter((item) => selectedNeeds.includes(item.id))
        .map((item) => item.title),
    [selectedNeeds]
  );

  const summary = useMemo(() => {
    return [
      "【BaiheAI 项目需求摘要】",
      `来源入口：${entrySource}`,
      `需求：${selectedTitles.length ? selectedTitles.join("、") : "未选择"}`,
      `项目阶段：${stage || "未选择"}`,
      `计划时间：${timeframe || "未选择"}`,
      `补充说明：${note.trim() || "暂无"}`,
      `联系人：${contactName.trim() || "未填写"}`,
      `公司：${company.trim() || "未填写"}`,
      `首选联系渠道：${contactChannel}`,
      `联系方式：${contactMethod.trim() || "未填写"}`,
      `邮箱：${contactEmail.trim() || "未填写"}`,
    ].join("\n");
  }, [selectedTitles, stage, timeframe, note, contactName, company, contactChannel, contactMethod, contactEmail, entrySource]);

  const whatsappHref = useMemo(
    () => `https://wa.me/8613003137828?text=${encodeURIComponent(summary)}`,
    [summary]
  );

  const emailHref = useMemo(
    () =>
      `mailto:liyanjun0773@126.com?subject=${encodeURIComponent(
        "BaiheAI 项目咨询"
      )}&body=${encodeURIComponent(summary)}`,
    [summary]
  );

  const toggleNeed = (id: string) => {
    setSelectedNeeds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const next = () => {
    if (step === 1 && selectedNeeds.length === 0) {
      alert("请至少选择一项需求。");
      return;
    }
    if (step === 2 && !stage) {
      alert("请选择您目前的项目阶段。");
      return;
    }
    if (step === 3 && !timeframe) {
      alert("请选择大致计划时间。");
      return;
    }
    setStep((current) => Math.min(4, current + 1));
  };

  const back = () => setStep((current) => Math.max(1, current - 1));

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = summary;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submitDiagnosis = async () => {
    if (!contactName.trim()) {
      alert("请填写您的姓名或称呼。");
      return;
    }

    if (!contactMethod.trim()) {
      alert("请填写您选择的联系方式。");
      return;
    }

    if (!consent) {
      alert("请先勾选同意我们仅将这些信息用于本次项目沟通。");
      return;
    }

    if (submitting) return;

    setSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          company: company.trim() || "未填写",
          name: contactName.trim(),
          email: contactEmail.trim() || "未提供邮箱",
          message: summary,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("提交失败，请稍后再试。您也可以使用下方 WhatsApp、LINE 或邮件直接联系我们。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>项目诊断</span>
          <span>{step} / 4</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-cyan-500/5 sm:p-8">
        {step === 1 && (
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
              STEP 01
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              您现在主要需要什么？
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              可以多选。先按真实需求选择，不需要判断应该找哪一种服务。
            </p>

            <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3">
              {needs.map((item) => {
                const active = selectedNeeds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleNeed(item.id)}
                    className={`relative min-h-[112px] w-full overflow-hidden rounded-2xl border-2 p-4 pr-12 text-left transition-all duration-200 active:scale-[0.99] sm:min-h-[118px] sm:p-5 sm:pr-14 ${
                      active
                        ? "border-sky-500 bg-gradient-to-br from-sky-200 via-cyan-100 to-emerald-200 shadow-[0_14px_34px_rgba(14,165,233,0.20)] ring-2 ring-sky-400/35"
                        : "border-slate-200 bg-white shadow-sm hover:border-sky-300 hover:bg-sky-50/70"
                    }`}
                  >
                    {active && (
                      <span className="absolute right-3 top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-sky-600 px-2 text-sm font-black text-white shadow-lg sm:right-4 sm:top-4">
                        ✓
                      </span>
                    )}

                    <div className="flex items-start gap-3">
                      <span className={`text-2xl transition-transform duration-200 ${active ? "scale-110" : ""}`}>
                        {item.icon}
                      </span>
                      <div>
                        <h3 className={`font-black ${active ? "text-sky-950" : "text-slate-900"}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-2 text-sm leading-6 ${active ? "font-medium text-sky-900/80" : "text-slate-500"}`}>
                          {item.desc}
                        </p>
                        {active && (
                          <span className="mt-3 inline-flex rounded-full bg-white/75 px-2.5 py-1 text-xs font-black text-sky-700 shadow-sm">
                            已选择
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
              STEP 02
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              项目现在进行到哪一步？
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              这个信息可以帮助顾问判断应该先做政策判断、资料准备，还是直接进入执行阶段。
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {stages.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={stage === item}
                  onClick={() => setStage(item)}
                  className={`relative min-h-[64px] rounded-2xl border-2 px-5 py-4 pr-14 text-left font-black transition-all duration-200 active:scale-[0.99] ${
                    stage === item
                      ? "border-sky-500 bg-gradient-to-r from-sky-200 via-cyan-100 to-emerald-100 text-sky-950 shadow-[0_12px_28px_rgba(14,165,233,0.18)] ring-2 ring-sky-400/30"
                      : "border-slate-200 bg-white text-slate-800 shadow-sm hover:border-sky-300 hover:bg-sky-50/70"
                  }`}
                >
                  <span>{item}</span>
                  {stage === item && (
                    <span className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-sky-600 text-sm font-black text-white shadow-md">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
              STEP 03
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              预计什么时候推进？
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              时间还没确定也没关系，选择最接近的情况即可。
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {timeframes.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={timeframe === item}
                  onClick={() => setTimeframe(item)}
                  className={`relative min-h-[64px] rounded-2xl border-2 px-5 py-4 pr-14 text-left font-black transition-all duration-200 active:scale-[0.99] ${
                    timeframe === item
                      ? "border-emerald-500 bg-gradient-to-r from-emerald-200 via-cyan-100 to-sky-200 text-emerald-950 shadow-[0_12px_28px_rgba(16,185,129,0.18)] ring-2 ring-emerald-400/30"
                      : "border-slate-200 bg-white text-slate-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50/70"
                  }`}
                >
                  <span>{item}</span>
                  {timeframe === item && (
                    <span className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white shadow-md">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>

            <label className="mt-7 block">
              <span className="text-sm font-bold text-slate-200">
                还有什么情况希望顾问提前知道？（可不填）
              </span>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                rows={5}
                placeholder="例如：计划在春武里找厂房，主要做电子零部件，希望先判断 BOI 方向……"
                className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-[#07101d] px-4 py-4 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
              />
            </label>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600">
              STEP 04 · CONTACT
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
              留下联系方式，我们才能找到您
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              前面的诊断只是帮您整理需求。请至少留下姓名和一种联系方式，提交后 BaiheAI 才能根据您的项目情况与您联系。
            </p>

            <div className="mt-6 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-emerald-50 p-4 sm:p-5">
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-slate-700">
                {summary}
              </pre>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-800">
                  姓名 / 称呼 <span className="text-rose-500">*</span>
                </span>
                <input
                  value={contactName}
                  onChange={(event) => setContactName(event.target.value)}
                  placeholder="例如：李先生"
                  autoComplete="name"
                  className="mt-2 min-h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>

              <label className="block">
                <span className="text-sm font-black text-slate-800">
                  公司名称（可不填）
                </span>
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="例如：XX 制造有限公司"
                  autoComplete="organization"
                  className="mt-2 min-h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>

              <div className="sm:col-span-2">
                <span className="text-sm font-black text-slate-800">
                  首选联系方式 <span className="text-rose-500">*</span>
                </span>

                <div className="mt-2 grid grid-cols-4 gap-2">
                  {["微信", "手机", "WhatsApp", "LINE"].map((item) => {
                    const active = contactChannel === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setContactChannel(item);
                          setContactMethod("");
                        }}
                        className={`min-h-11 rounded-xl border-2 px-2 py-2 text-xs font-black transition active:scale-[0.98] sm:text-sm ${
                          active
                            ? "border-sky-500 bg-sky-100 text-sky-900 ring-2 ring-sky-200"
                            : "border-slate-200 bg-white text-slate-600"
                        }`}
                      >
                        {active ? "✓ " : ""}
                        {item}
                      </button>
                    );
                  })}
                </div>

                <input
                  value={contactMethod}
                  onChange={(event) => setContactMethod(event.target.value)}
                  placeholder={
                    contactChannel === "微信"
                      ? "请输入微信号"
                      : contactChannel === "手机"
                        ? "请输入手机号码"
                        : contactChannel === "WhatsApp"
                          ? "请输入 WhatsApp 号码"
                          : "请输入 LINE ID 或号码"
                  }
                  autoComplete={contactChannel === "手机" || contactChannel === "WhatsApp" ? "tel" : "off"}
                  className="mt-3 min-h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  只需选择一种最方便的联系方式即可，不必全部填写。
                </p>
              </div>

              <label className="block sm:col-span-2">
                <span className="text-sm font-black text-slate-800">
                  邮箱（可不填）
                </span>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.target.value)}
                  placeholder="name@example.com"
                  autoComplete="email"
                  className="mt-2 min-h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </label>
            </div>

            {!submitted ? (
              <>
                <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-sky-600"
                  />
                  <span className="text-xs leading-5 text-slate-600 sm:text-sm">
                    我同意 BaiheAI 仅将以上信息用于本次项目咨询与联系，不用于无关营销。
                  </span>
                </label>

                <button
                  type="button"
                  onClick={submitDiagnosis}
                  disabled={submitting}
                  className="mt-6 min-h-14 w-full rounded-xl bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-4 text-base font-black text-white shadow-lg shadow-sky-500/15 transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "正在提交..." : "提交诊断并让顾问联系我"}
                </button>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-slate-500 sm:text-xs">
                  <span className="rounded-xl bg-slate-50 px-2 py-2">✓ 不公开资料</span>
                  <span className="rounded-xl bg-slate-50 px-2 py-2">✓ 不要求先付款</span>
                  <span className="rounded-xl bg-slate-50 px-2 py-2">✓ 顾问人工查看</span>
                </div>
              </>
            ) : (
              <div className="mt-6 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-5 text-center">
                <div className="text-3xl">✓</div>
                <h3 className="mt-2 text-xl font-black text-emerald-900">已成功提交</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-800">
                  我们已经收到您的项目需求和联系方式，会根据您填写的信息与您联系。
                </p>
              </div>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={copySummary}
                className="rounded-xl border border-sky-200 bg-sky-50 px-5 py-3.5 font-black text-sky-700 transition hover:bg-sky-100"
              >
                {copied ? "已复制 ✓" : "复制需求摘要"}
              </button>

              <Link
                href="/free-plan"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-center font-black text-slate-800 transition hover:border-sky-300 hover:text-sky-700"
              >
                填写更详细项目资料
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
              >
                WhatsApp 联系
              </a>
              <a
                href="https://line.me/ti/p/~liyanjun0773"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
              >
                LINE 联系
              </a>
              <a
                href={emailHref}
                className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-center text-sm font-bold text-sky-700 transition hover:bg-sky-100"
              >
                邮件联系
              </a>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-white/20 disabled:cursor-not-allowed disabled:opacity-30"
          >
            上一步
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={next}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-black text-white"
            >
              下一步 →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setSelectedNeeds([]);
                setStage("");
                setTimeframe("");
                setNote("");
                setContactName("");
                setCompany("");
                setContactChannel("微信");
                setContactMethod("");
                setContactEmail("");
                setConsent(false);
                setSubmitted(false);
              }}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-300"
            >
              重新诊断
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 text-center text-xs leading-6 text-slate-500">
        本工具用于前期需求整理，不替代法律、税务或政府主管部门的正式意见。
      </div>
    </section>
  );
}
