"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type SeoStatus = "待检查" | "已提交" | "已收录" | "需优化";

type SeoItem = {
  name: string;
  href: string;
  defaultStatus: SeoStatus;
  group: string;
};

type SavedRecord = {
  status: SeoStatus;
  checkedAt?: string;
  note?: string;
};

const items: SeoItem[] = [
  { name: "首页", href: "/", defaultStatus: "已收录", group: "核心页面" },
  { name: "分享获客页", href: "/start", defaultStatus: "已提交", group: "核心页面" },
  { name: "泰国投资", href: "/thailand-investment", defaultStatus: "已提交", group: "核心页面" },
  { name: "服务中心", href: "/services", defaultStatus: "已提交", group: "核心页面" },
  { name: "政策中心", href: "/policies", defaultStatus: "已提交", group: "核心页面" },
  { name: "资料下载", href: "/resources", defaultStatus: "已提交", group: "核心页面" },
  { name: "指南中心", href: "/guides", defaultStatus: "已提交", group: "指南" },
  { name: "泰国投资咨询指南", href: "/guides/thailand-investment-consulting", defaultStatus: "已提交", group: "指南" },
  { name: "BOI 申请指南", href: "/guides/thailand-boi-application", defaultStatus: "已提交", group: "指南" },
  { name: "公司注册指南", href: "/guides/thailand-company-registration", defaultStatus: "已提交", group: "指南" },
  { name: "泰国建厂指南", href: "/guides/thailand-factory-setup", defaultStatus: "已提交", group: "指南" },
  { name: "工业园区指南", href: "/guides/thailand-industrial-estate", defaultStatus: "已提交", group: "指南" },
  { name: "工作许可指南", href: "/guides/thailand-work-permit", defaultStatus: "待检查", group: "指南" },
  { name: "厂房租赁还是购买", href: "/blog/thailand-factory-rent-or-buy", defaultStatus: "待检查", group: "V7.3 内容" },
  { name: "泰国投资成本清单", href: "/blog/thailand-investment-cost-checklist", defaultStatus: "待检查", group: "V7.3 内容" },
  { name: "泰国商务翻译支持", href: "/blog/thailand-business-translation-support", defaultStatus: "待检查", group: "V7.3 内容" },
  { name: "AI 泰国获客", href: "/blog/ai-lead-generation-thailand", defaultStatus: "待检查", group: "V7.3 内容" },
  { name: "泰国建厂前期尽调", href: "/blog/thailand-factory-due-diligence", defaultStatus: "待检查", group: "V7.3 内容" },
  { name: "中国企业进入泰国市场", href: "/blog/china-company-thailand-market-entry", defaultStatus: "待检查", group: "V7.3 内容" },
  { name: "内容中心", href: "/content-center", defaultStatus: "待检查", group: "V7.3 内容" },
];

const statusOptions: SeoStatus[] = ["待检查", "已提交", "已收录", "需优化"];
const storageKey = "baiheai-seo-monitor-v735";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function SeoMonitorClient() {
  const [records, setRecords] = useState<Record<string, SavedRecord>>({});
  const [filter, setFilter] = useState("全部");
  const [keyword, setKeyword] = useState("");
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) setRecords(JSON.parse(saved));
    } catch {
      // localStorage 不可用时保持默认状态即可
    } finally {
      setStorageReady(true);
    }
  }, []);

  useEffect(() => {
    if (!storageReady) return;

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(records));
    } catch {
      // localStorage 不可用时不影响页面使用
    }
  }, [records, storageReady]);

  const getRecord = (item: SeoItem): SavedRecord =>
    records[item.href] ?? { status: item.defaultStatus };

  const updateRecord = (href: string, patch: Partial<SavedRecord>) => {
    setRecords((current) => {
      const item = items.find((entry) => entry.href === href)!;
      return {
        ...current,
        [href]: {
          ...(current[href] ?? { status: item.defaultStatus }),
          ...patch,
        },
      };
    });
  };

  const groups = ["全部", ...Array.from(new Set(items.map((item) => item.group)))];
  const visibleItems = items.filter((item) => {
    const groupMatch = filter === "全部" || item.group === filter;
    const q = keyword.trim().toLowerCase();
    const keywordMatch = !q || item.name.toLowerCase().includes(q) || item.href.toLowerCase().includes(q);
    return groupMatch && keywordMatch;
  });

  const counts = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const status = getRecord(item).status;
        acc[status] += 1;
        return acc;
      },
      { 待检查: 0, 已提交: 0, 已收录: 0, 需优化: 0 } as Record<SeoStatus, number>
    );
  }, [records]);

  const markCheckedToday = (href: string) => updateRecord(href, { checkedAt: today() });

  const exportRecords = () => {
    const payload = {
      version: "7.3.6",
      exportedAt: new Date().toISOString(),
      records,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `baiheai-seo-monitor-${today()}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const importRecords = (file: File | undefined) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result ?? "{}"));
        const imported = parsed?.records ?? parsed;

        if (!imported || typeof imported !== "object" || Array.isArray(imported)) {
          throw new Error("invalid format");
        }

        const validStatuses = new Set(statusOptions);
        const cleaned: Record<string, SavedRecord> = {};

        for (const [href, value] of Object.entries(imported)) {
          if (!value || typeof value !== "object") continue;
          const record = value as Partial<SavedRecord>;
          if (!record.status || !validStatuses.has(record.status as SeoStatus)) continue;
          cleaned[href] = {
            status: record.status as SeoStatus,
            checkedAt: typeof record.checkedAt === "string" ? record.checkedAt : undefined,
            note: typeof record.note === "string" ? record.note : undefined,
          };
        }

        setRecords(cleaned);
        window.alert("SEO 监控记录已导入。");
      } catch {
        window.alert("导入失败：请选择由 SEO 监控页导出的 JSON 备份文件。");
      }
    };
    reader.readAsText(file);
  };


  const exportCsv = () => {
    const rows = [
      ["分组", "页面", "URL", "状态", "上次检查", "备注"],
      ...items.map((item) => {
        const record = getRecord(item);
        return [item.group, item.name, item.href, record.status, record.checkedAt ?? "", record.note ?? ""];
      }),
    ];

    const csv = rows
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `baiheai-seo-monitor-${today()}.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const copyPendingUrls = async () => {
    const urls = items
      .filter((item) => {
        const status = getRecord(item).status;
        return status === "待检查" || status === "已提交" || status === "需优化";
      })
      .map((item) => `https://www.baihediy.com${item.href}`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(urls);
      window.alert("待跟进 URL 已复制。可直接粘贴到你的检查清单中。");
    } catch {
      window.alert("复制失败，请检查浏览器剪贴板权限。");
    }
  };

  const resetAll = () => {
    if (window.confirm("确定清空本机保存的 SEO 检查记录吗？")) {
      setRecords({});
      window.localStorage.removeItem(storageKey);
    }
  };

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">SEO MONITOR</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-black md:text-5xl">搜索收录监控清单</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/60">
              这是内部工作页。你可以直接记录每个重点 URL 的提交、收录和优化状态。记录默认保存在当前浏览器，也可以导出 JSON 备份，换电脑或清理浏览器后再导入恢复。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={exportRecords}
              className="w-fit rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400/50"
            >
              导出备份
            </button>
            <label className="w-fit cursor-pointer rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400/50">
              导入备份
              <input
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={(event) => {
                  importRecords(event.target.files?.[0]);
                  event.currentTarget.value = "";
                }}
              />
            </label>
            <button
              type="button"
              onClick={exportCsv}
              className="w-fit rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/50"
            >
              导出 CSV
            </button>
            <button
              type="button"
              onClick={copyPendingUrls}
              className="w-fit rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300 transition hover:border-violet-400/50"
            >
              复制待跟进 URL
            </button>
            <button
              type="button"
              onClick={resetAll}
              className="w-fit rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
            >
              清空本机记录
            </button>
          </div>
        </div>

        <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {statusOptions.map((status) => (
            <div key={status} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/45">{status}</p>
              <p className="mt-2 text-3xl font-black">{counts[status]}</p>
            </div>
          ))}
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="搜索页面名称或 URL……"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-500/60"
          />
          <p className="text-sm text-white/40">当前显示 {visibleItems.length} / {items.length}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {groups.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setFilter(group)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === group
                  ? "bg-blue-600 text-white"
                  : "border border-white/10 bg-white/[0.03] text-white/60 hover:text-white"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <section className="mt-6 space-y-3">
          {visibleItems.map((item) => {
            const record = getRecord(item);
            return (
              <div key={item.href} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="grid gap-4 lg:grid-cols-[1.3fr_1.5fr_0.9fr_1fr] lg:items-center">
                  <div>
                    <p className="text-xs text-white/35">{item.group}</p>
                    <h2 className="mt-1 font-bold">{item.name}</h2>
                  </div>

                  <div>
                    <Link href={item.href} className="break-all text-sm text-blue-400 hover:text-blue-300">
                      {item.href}
                    </Link>
                    <p className="mt-1 text-xs text-white/35">上次检查：{record.checkedAt || "未记录"}</p>
                  </div>

                  <select
                    value={record.status}
                    onChange={(event) =>
                      updateRecord(item.href, { status: event.target.value as SeoStatus, checkedAt: today() })
                    }
                    className="rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/60"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => markCheckedToday(item.href)}
                    className="rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold text-white/70 transition hover:border-blue-500/50 hover:text-blue-300"
                  >
                    今天已检查
                  </button>
                </div>

                <div className="mt-4">
                  <input
                    value={record.note ?? ""}
                    onChange={(event) => updateRecord(item.href, { note: event.target.value })}
                    placeholder="备注：例如 Google 已收录 / 等待抓取 / 需要补充内链……"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-blue-500/60"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="text-sm text-blue-400">Google</p>
            <h2 className="mt-2 font-bold">Search Console</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">检查 URL 是否已编入索引。没收录时先看抓取状态、内容质量和内部链接，不要同一天反复提交。</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="text-sm text-emerald-400">Bing</p>
            <h2 className="mt-2 font-bold">Webmaster Tools + IndexNow</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">确认 sitemap 正常后，让 IndexNow 帮助新页面更快被发现，无需重复验证站点。</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="text-sm text-amber-300">工作习惯</p>
            <h2 className="mt-2 font-bold">每周检查一次即可</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">记录“已提交 → 已收录 → 需优化”的变化，优先处理高商业意图页面。</p>
          </div>
        </section>
      </div>
    </main>
  );
}
