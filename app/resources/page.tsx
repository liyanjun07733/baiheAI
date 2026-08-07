import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourceBrowser from "./ResourceBrowser";

export const dynamic = "force-dynamic";

const DOWNLOAD_DIR = path.join(process.cwd(), "public", "downloads");

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(kb >= 100 ? 0 : 1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(mb >= 100 ? 0 : 1)} MB`;
}

function getTypeLabel(filename: string) {
  const ext = path.extname(filename).replace(".", "").toUpperCase();
  return ext || "FILE";
}

function getDownloadFiles() {
  if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
    return [];
  }

  return fs
    .readdirSync(DOWNLOAD_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
    .map((entry) => {
      const fullPath = path.join(DOWNLOAD_DIR, entry.name);
      const stat = fs.statSync(fullPath);

      return {
        name: entry.name,
        size: formatBytes(stat.size),
        modifiedAt: stat.mtimeMs,
        type: getTypeLabel(entry.name),
        href: `/downloads/${encodeURIComponent(entry.name)}`,
      };
    })
    .sort((a, b) => b.modifiedAt - a.modifiedAt || a.name.localeCompare(b.name, "zh-CN"))
    .map(({ modifiedAt: _modifiedAt, ...file }) => file);
}

export default function ResourcesPage() {
  const files = getDownloadFiles();

  return (
    <>
      <Navbar />

      <main className="page-enter min-h-screen bg-[#030711] pt-16 text-white sm:pt-20">
        <section className="mx-auto max-w-[1500px] px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[.32em] text-cyan-300">
              FREE RESOURCES / 免费资料
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              BaiheAI 资料阅读与下载中心
            </h1>
            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              选择左侧资料即可在线阅读；如需保存，请点击预览区右上角的“下载文件”。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-4 pb-10 sm:px-6 lg:px-8">
          <ResourceBrowser files={files} />
        </section>

        <section className="mx-auto max-w-[1500px] px-4 pb-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-white">资料使用说明</p>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-400">
                免费资料用于信息分享，不替代正式法律、税务或政府审批意见。政策和办理要求可能变化，具体项目请以当期官方规则和项目评估为准。
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link href="/policies" className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm font-bold transition hover:bg-white/[0.08]">
                政策操作中心
              </Link>
              <Link href="/free-plan" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-black text-slate-950 transition hover:scale-[1.01]">
                咨询具体项目
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
