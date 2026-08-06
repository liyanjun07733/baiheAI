"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const markets = [
  "泰国 Thailand",
  "越南 Vietnam",
  "马来西亚 Malaysia",
  "新加坡 Singapore",
  "其他 Other",
];

const industries = [
  "制造业",
  "跨境电商",
  "酒店旅游",
  "贸易服务",
  "教育培训",
  "专业服务",
  "其他行业",
];

const serviceNeeds = [
  "泰国投资落地咨询",
  "BOI 政策与申请方向咨询",
  "公司注册与基础合规协助",
  "商务签证 / 工作签证协助",
  "厂房、仓库与办公场地对接",
  "中泰翻译与商务陪同",
  "合同、资料与文件翻译",
  "供应商、渠道与本地资源对接",
  "泰国投资避坑与风险梳理",
  "AI 官网、获客与自动化",
];

const challenges = [
  "不了解泰国投资政策与流程",
  "不确定是否适合申请 BOI",
  "缺少可靠的本地执行资源",
  "需要签证、厂房或翻译协助",
  "担心合同、租赁与合作风险",
  "没有专业海外官网",
  "没有稳定海外客户来源",
  "希望使用 AI 降本增效",
];

const thailandServices = [
  {
    icon: "🏛️",
    title: "BOI 与投资政策咨询",
    desc: "根据行业、投资规模和项目方向，协助梳理 BOI 申请思路、材料准备和可行性方向。",
  },
  {
    icon: "🏢",
    title: "公司与项目落地协助",
    desc: "协助对接公司注册、基础文件、商务流程及项目落地所需的本地服务资源。",
  },
  {
    icon: "🛂",
    title: "签证与工作许可协助",
    desc: "协助对接商务签证、工作签证、工作许可及相关材料准备服务。",
  },
  {
    icon: "🏭",
    title: "厂房、仓库与办公场地",
    desc: "根据行业、地区和预算，协助寻找厂房、仓库、办公室及相关本地配套资源。",
  },
  {
    icon: "🗣️",
    title: "翻译与商务陪同",
    desc: "提供中泰翻译、会议陪同、商务沟通、文件翻译和项目现场协助。",
  },
  {
    icon: "⚠️",
    title: "泰国投资避坑咨询",
    desc: "围绕租赁、合同、合作方、报价、付款、合规与执行环节，提前梳理常见风险。",
  },
];

export default function FreePlanPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleItem = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current || loading) return;

    if (selectedServices.length === 0) {
      alert("请至少选择一项您需要的服务。");
      return;
    }

    if (selectedChallenges.length === 0) {
      alert("请至少选择一个目前遇到的问题。");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      formRef.current.reset();
      setSelectedChallenges([]);
      setSelectedServices([]);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      alert("提交失败，请稍后再试，或通过 WhatsApp、LINE、微信联系我们。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-black px-5 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-cyan-500/25 bg-white/[0.04] p-7 text-center shadow-2xl shadow-cyan-500/10 sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-4xl">
              ✓
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
              APPLICATION RECEIVED
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              申请提交成功
            </h1>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
              感谢您提交需求。我们会根据您的项目情况，初步梳理泰国投资落地、BOI、签证、场地、翻译或 AI 出海服务方向，并尽快与您联系。
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5 text-left">
              <p className="font-bold text-white">接下来我们会重点了解：</p>

              <div className="mt-4 space-y-3 text-sm leading-7 text-gray-300">
                <p>✓ 您的行业、项目规模与目标地区</p>
                <p>✓ 是否适合进一步了解 BOI 或其他投资路径</p>
                <p>✓ 签证、厂房、翻译与本地执行需求</p>
                <p>✓ 项目中的风险点与优先处理事项</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-6 py-4 font-bold transition hover:border-blue-500/50 hover:bg-white/[0.08]"
              >
                再提交一份
              </button>

              <Link
                href="/"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold transition hover:scale-[1.02]"
              >
                返回 BaiheAI 首页
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[180px]" />
        <div className="absolute right-[-180px] top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 md:px-8 md:pb-28">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black sm:text-3xl">
            Baihe
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-blue-500/40 hover:text-white"
          >
            返回首页
          </Link>
        </header>

        <section className="mx-auto mt-14 max-w-5xl text-center sm:mt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-300 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Thailand Investment & AI Growth
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            泰国投资落地咨询
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              + AI 出海增长方案
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-400 sm:text-lg md:text-xl md:leading-9">
            从 BOI 政策、公司与项目落地、签证、厂房、翻译、文件服务，到 AI 官网、海外获客和自动化运营，为中国企业提供更贴近实操的泰国市场进入支持。
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["BOI", "政策方向"],
              ["签证", "办理协助"],
              ["厂房", "场地对接"],
              ["翻译", "实操服务"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-black text-cyan-300">{value}</p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
              THAILAND PRACTICAL SERVICES
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              不只提供建议，也协助对接实际执行
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">
              根据项目阶段，我们可以协助梳理方案、准备资料，并对接本地专业服务资源。具体服务范围与可执行性以项目评估结果为准。
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {thailandServices.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-500/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-amber-500/20 bg-amber-500/[0.05] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/25 bg-amber-500/10 text-3xl">
              ⚠️
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[4px] text-amber-300">
                THAILAND INVESTMENT RISKS
              </p>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                泰国投资常见“避坑”方向
              </h2>

              <div className="mt-5 grid gap-3 text-sm leading-7 text-gray-300 sm:grid-cols-2">
                <p>✓ 只听口头承诺，没有核实合同与执行主体</p>
                <p>✓ 租厂房前未确认用途、许可与配套条件</p>
                <p>✓ 对 BOI、股权、签证与经营范围理解不清</p>
                <p>✓ 翻译不准确，导致合同与沟通出现偏差</p>
                <p>✓ 付款节点、服务范围和退款条件不明确</p>
                <p>✓ 过度依赖单一中介或未经核实的本地关系</p>
              </div>

              <p className="mt-5 text-xs leading-6 text-gray-500">
                说明：页面内容属于一般性商业咨询与项目协助，不构成法律、税务或政府审批承诺。涉及正式法律、税务、签证及 BOI 申请时，应由具备相应资质的专业机构提供最终意见。
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
              WHAT YOU GET
            </p>

            <h2 className="mt-4 text-2xl font-black sm:text-3xl">
              提交后我们会如何协助？
            </h2>

            <div className="mt-7 space-y-5">
              {[
                {
                  icon: "🔍",
                  title: "项目初步诊断",
                  desc: "了解行业、投资计划、目标地区和当前难点。",
                },
                {
                  icon: "🧭",
                  title: "落地路径梳理",
                  desc: "梳理 BOI、公司、签证、场地及服务对接方向。",
                },
                {
                  icon: "⚠️",
                  title: "风险点提示",
                  desc: "提前识别合同、租赁、合作方和执行环节风险。",
                },
                {
                  icon: "🚀",
                  title: "增长与获客建议",
                  desc: "同步评估 AI 官网、海外获客和自动化机会。",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="rounded-3xl border border-cyan-500/20 bg-[#08111f]/90 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-8"
          >
            <input type="hidden" name="plan_type" value="泰国投资与 AI 出海咨询申请" />
            <input type="hidden" name="service_needs" value={selectedServices.join("、")} />
            <input type="hidden" name="challenges" value={selectedChallenges.join("、")} />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
                CONSULTATION FORM
              </p>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                提交您的项目需求
              </h2>
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold text-gray-300">
                您需要哪些服务？*（可多选）
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {serviceNeeds.map((service) => {
                  const selected = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleItem(service, setSelectedServices)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                        selected
                          ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-200"
                          : "border-white/10 bg-black/30 text-gray-400 hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
                          selected
                            ? "border-cyan-400 bg-cyan-400 text-black"
                            : "border-white/20"
                        }`}
                      >
                        {selected ? "✓" : ""}
                      </span>
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">企业名称 *</span>
                <input name="company" required placeholder="请输入企业名称" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-500/60" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">联系人 *</span>
                <input name="name" required placeholder="请输入您的姓名" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-500/60" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">邮箱 *</span>
                <input type="email" name="email" required placeholder="name@company.com" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-500/60" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">电话 / WhatsApp *</span>
                <input name="phone" required placeholder="+86 / +66 ..." className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-500/60" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">所属行业 *</span>
                <select name="industry" required defaultValue="" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-cyan-500/60">
                  <option value="" disabled>请选择行业</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-300">优先目标市场 *</span>
                <select name="target_market" required defaultValue="" className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-cyan-500/60">
                  <option value="" disabled>请选择目标市场</option>
                  {markets.map((market) => (
                    <option key={market} value={market}>{market}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-300">
                目前最需要解决的问题 *（可多选）
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {challenges.map((challenge) => {
                  const selected = selectedChallenges.includes(challenge);

                  return (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() => toggleItem(challenge, setSelectedChallenges)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                        selected
                          ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-200"
                          : "border-white/10 bg-black/30 text-gray-400 hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
                          selected
                            ? "border-cyan-400 bg-cyan-400 text-black"
                            : "border-white/20"
                        }`}
                      >
                        {selected ? "✓" : ""}
                      </span>
                      {challenge}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="mt-8 block">
              <span className="mb-2 block text-sm font-semibold text-gray-300">
                请介绍您的项目、投资计划或当前问题 *
              </span>

              <textarea
                name="message"
                required
                rows={7}
                placeholder="例如：我们计划在泰国设厂，行业是……预计投资……目前需要了解 BOI、签证、厂房和翻译服务……"
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-500/60"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "正在提交..." : "免费获取泰国投资与 AI 出海建议"}
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-gray-500">
              提交即表示您同意我们使用以上信息与您联系。具体服务内容、费用、周期及可执行性将在沟通后确认。
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
