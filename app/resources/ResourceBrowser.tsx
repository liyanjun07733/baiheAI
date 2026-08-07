"use client";

import { useEffect, useMemo, useState } from "react";

type ResourceFile = {
  name: string;
  href: string;
  type: string;
  size: string;
};

const imageTypes = new Set(["PNG", "JPG", "JPEG", "GIF", "WEBP", "SVG", "BMP", "AVIF"]);
const textTypes = new Set(["TXT", "MD", "CSV", "JSON", "XML", "HTML", "HTM"]);
const officeTypes = new Set(["DOC", "DOCX", "XLS", "XLSX", "PPT", "PPTX"]);

function FileIcon({ type }: { type: string }) {
  if (type === "PDF") return <span className="text-red-300">PDF</span>;
  if (imageTypes.has(type)) return <span className="text-violet-300">IMG</span>;
  if (officeTypes.has(type)) return <span className="text-blue-300">DOC</span>;
  if (textTypes.has(type)) return <span className="text-emerald-300">TXT</span>;
  if (type === "ZIP" || type === "RAR" || type === "7Z") return <span className="text-amber-300">ZIP</span>;
  return <span className="text-slate-300">FILE</span>;
}

function TextPreview({ file }: { file: ResourceFile }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setContent("");

    fetch(file.href)
      .then((response) => response.text())
      .then((text) => {
        if (active) setContent(text);
      })
      .catch(() => {
        if (active) setContent("暂时无法读取此文件内容。");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [file.href]);

  return (
    <div className="h-full overflow-auto bg-[#0b111b] p-5 sm:p-7 lg:p-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/[0.08] bg-[#0e1623] p-5 shadow-xl shadow-black/20 sm:p-7">
        {loading ? (
          <p className="text-sm text-slate-500">正在载入内容...</p>
        ) : (
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-slate-300">
            {content}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function ResourceBrowser({ files }: { files: ResourceFile[] }) {
  const [selectedName, setSelectedName] = useState("");
  const [filter, setFilter] = useState("");

  const visibleFiles = useMemo(() => {
    const keyword = filter.trim().toLowerCase();
    if (!keyword) return files;
    return files.filter((file) => file.name.toLowerCase().includes(keyword));
  }, [files, filter]);

  const selected = files.find((file) => file.name === selectedName);

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070c14] shadow-2xl shadow-black/20">
      <div className="grid lg:min-h-[650px] lg:grid-cols-2">
        <aside className="flex min-h-[320px] flex-col border-b border-white/10 bg-[#070b12] lg:min-h-[650px] lg:border-b-0 lg:border-r">
          <div className="border-b border-white/10 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black text-white">资料目录</p>
                <p className="mt-0.5 text-xs text-slate-500">{files.length} 个文件</p>
              </div>
              <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1 text-xs font-bold text-cyan-300">
                点击阅读
              </span>
            </div>

            <label className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 focus-within:border-cyan-400/30">
              <span className="text-slate-500">⌕</span>
              <input
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="搜索文件名"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
            </label>
          </div>

          <div className="max-h-[360px] flex-1 overflow-y-auto overscroll-contain sm:max-h-[420px] lg:max-h-[570px]">
            {visibleFiles.length > 0 ? (
              <div className="divide-y divide-white/[0.055]">
                {visibleFiles.map((file) => {
                  const active = selected?.name === file.name;
                  return (
                    <button
                      key={file.name}
                      type="button"
                      onClick={() => setSelectedName(file.name)}
                      className={`group flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left transition sm:px-4 ${
                        active ? "bg-cyan-400/[0.085]" : "hover:bg-white/[0.035]"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[9px] font-black tracking-wide ${
                          active
                            ? "border-cyan-400/30 bg-cyan-400/10"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        <FileIcon type={file.type} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-[13px] font-semibold leading-5 ${active ? "text-cyan-200" : "text-slate-200"}`} title={file.name}>
                          {file.name}
                        </span>
                        <span className="block text-[11px] leading-4 text-slate-600">
                          {file.type} · {file.size}
                        </span>
                      </span>

                      <span className={`shrink-0 text-base ${active ? "text-cyan-300" : "text-slate-700 group-hover:text-slate-400"}`}>
                        ›
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="px-6 py-12 text-center text-sm text-slate-500">
                没有找到相关文件
              </div>
            )}
          </div>
        </aside>

        <section className="flex min-h-[360px] min-w-0 flex-col bg-[#0a1019] sm:min-h-[430px] lg:min-h-[650px]">
          {selected ? (
            <>
              <div className="flex flex-col gap-3 border-b border-white/10 bg-[#0b111b] px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[.24em] text-cyan-400">
                    PREVIEW / 在线阅读
                  </p>
                  <h2 className="mt-1.5 truncate text-base font-black text-white sm:text-lg" title={selected.name}>
                    {selected.name}
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {selected.type} · {selected.size}
                  </p>
                </div>

                <a
                  href={selected.href}
                  download={selected.name}
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-black text-white transition hover:scale-[1.02]"
                >
                  ↓ 下载文件
                </a>
              </div>

              <div className="relative flex-1 overflow-hidden bg-[#0a1019]">
                {selected.type === "PDF" ? (
                  <>
                    <div className="flex min-h-[300px] items-center justify-center bg-[#0a1019] p-5 text-center md:hidden">
                      <div className="max-w-sm">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-red-400/20 bg-red-400/10 text-sm font-black text-red-300">
                          PDF
                        </div>
                        <h3 className="mt-6 text-xl font-black text-white">已选择此资料</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          当前已选择这份 PDF 资料。微信内置浏览器不稳定支持 PDF 内嵌预览，因此手机端先显示资料信息；只有你主动点击上方“下载文件”时才会请求下载。
                        </p>
                      </div>
                    </div>
                    <div className="hidden h-full bg-[#0a1019] p-3 sm:p-4 md:block lg:p-5">
                      <div className="h-[540px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827] shadow-xl shadow-black/30 lg:h-full lg:min-h-[565px]">
                        <iframe
                          key={selected.href}
                          src={`${selected.href}#view=FitH`}
                          title={selected.name}
                          className="h-full w-full border-0 bg-[#111827]"
                        />
                      </div>
                    </div>
                  </>
                ) : imageTypes.has(selected.type) ? (
                  <div className="flex h-full min-h-[500px] items-center justify-center overflow-auto bg-[#0a1019] p-5 sm:p-7">
                    <div className="rounded-2xl border border-white/[0.08] bg-[#0e1623] p-3 shadow-xl shadow-black/30">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selected.href} alt={selected.name} className="max-h-[70vh] max-w-full rounded-xl object-contain" />
                    </div>
                  </div>
                ) : textTypes.has(selected.type) ? (
                  <TextPreview file={selected} />
                ) : (
                  <div className="flex h-full min-h-[500px] items-center justify-center bg-[#0a1019] p-8 text-center">
                    <div className="max-w-lg">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-400/10 text-sm font-black text-blue-300">
                        {selected.type}
                      </div>
                      <h3 className="mt-6 text-2xl font-black text-white">此格式暂不支持网页内直接阅读</h3>
                      <p className="mt-4 leading-8 text-slate-400">
                        可直接在线阅读 PDF、图片及常见文本资料。其他格式可使用上方下载按钮保存后查看。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex min-h-[340px] items-center justify-center bg-[#0a1019] p-6 text-center sm:min-h-[420px] lg:min-h-[520px]">
              <div className="max-w-md">
                <div className="text-5xl">📚</div>
                <h2 className="mt-5 text-2xl font-black text-white">请选择左侧资料</h2>
                <p className="mt-3 leading-7 text-slate-500">
                  点击文件名后再显示对应内容。进入本页面时不会自动打开或下载任何文件。
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
