"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
      `需求：${selectedTitles.length ? selectedTitles.join("、") : "未选择"}`,
      `项目阶段：${stage || "未选择"}`,
      `计划时间：${timeframe || "未选择"}`,
      `补充说明：${note.trim() || "暂无"}`,
    ].join("\n");
  }, [selectedTitles, stage, timeframe, note]);

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

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {needs.map((item) => {
                const active = selectedNeeds.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleNeed(item.id)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-cyan-400/60 bg-cyan-400/[0.11] shadow-lg shadow-cyan-500/5"
                        : "border-white/10 bg-[#07101d] hover:border-cyan-400/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-black text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.desc}
                        </p>
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
                  onClick={() => setStage(item)}
                  className={`rounded-2xl border px-5 py-4 text-left font-bold transition ${
                    stage === item
                      ? "border-cyan-400/60 bg-cyan-400/[0.11] text-cyan-200"
                      : "border-white/10 bg-[#07101d] text-slate-200 hover:border-cyan-400/30"
                  }`}
                >
                  {item}
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
                  onClick={() => setTimeframe(item)}
                  className={`rounded-2xl border px-5 py-4 text-left font-bold transition ${
                    timeframe === item
                      ? "border-cyan-400/60 bg-cyan-400/[0.11] text-cyan-200"
                      : "border-white/10 bg-[#07101d] text-slate-200 hover:border-cyan-400/30"
                  }`}
                >
                  {item}
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
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
              RESULT
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              您的项目需求已经整理好了
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              下一步不用重复解释。复制下面的摘要，或进入详细需求表继续提交即可。
            </p>

            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5">
              <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-slate-200">
                {summary}
              </pre>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={copySummary}
                className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.08] px-5 py-3.5 font-black text-cyan-200 transition hover:bg-cyan-400/[0.13]"
              >
                {copied ? "已复制 ✓" : "复制需求摘要"}
              </button>

              <Link
                href="/free-plan"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-center font-black text-white"
              >
                提交详细项目需求
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-green-500/20 bg-green-500/[0.07] px-4 py-3 text-center text-sm font-bold text-green-300"
              >
                带摘要打开 WhatsApp
              </a>
              <a
                href="https://line.me/ti/p/~liyanjun0773"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-green-500/20 bg-green-500/[0.07] px-4 py-3 text-center text-sm font-bold text-green-300"
              >
                LINE 联系
              </a>
              <a
                href={emailHref}
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-3 text-center text-sm font-bold text-cyan-200"
              >
                邮件发送摘要
              </a>
              <Link
                href="/packages"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-bold text-slate-200"
              >
                查看合作方式
              </Link>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              WhatsApp 与邮件按钮会自动带上您刚刚生成的项目需求摘要，发送前仍可自行修改内容。
            </p>
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
