import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../../lib/adminAuth";

export const dynamic = "force-dynamic";

type Lead = {
  id: number;
  name: string;
  company: string | null;
  contact: string;
  need: string | null;
  stage: string | null;
  timeline: string | null;
  budget: string | null;
  blocker: string | null;
  result_title: string | null;
  result_advice: string | null;
  status: string;
  created_at: string | Date;
};

function formatDate(value: string | Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default async function AdminLeadsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  const sql = neon(process.env.DATABASE_URL);

  const leads = (await sql`
    SELECT
      id,
      name,
      company,
      contact,
      need,
      stage,
      timeline,
      budget,
      blocker,
      result_title,
      result_advice,
      status,
      created_at
    FROM leads
    ORDER BY created_at DESC
    LIMIT 200
  `) as Lead[];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.22em] text-blue-400">
              BAIHEAI LEADS
            </p>
            <h1 className="text-3xl font-bold">客户线索后台</h1>
            <p className="mt-2 text-sm text-slate-400">
              当前共显示 {leads.length} 条最新客户记录。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/api/admin/leads/export"
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              导出 Excel
            </a>

            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                退出登录
              </button>
            </form>
          </div>
        </div>

        {leads.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-slate-400">
            还没有客户提交记录。
          </div>
        ) : (
          <div className="grid gap-5">
            {leads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl md:p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-bold">
                        {lead.name || "未填写姓名"}
                      </h2>
                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">
                        {lead.status === "pending" ? "待跟进" : lead.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-400">
                      #{lead.id} · {formatDate(lead.created_at)}
                    </p>
                  </div>

                  <a
                    href={`tel:${lead.contact}`}
                    className="break-all text-sm font-medium text-blue-300 hover:text-blue-200"
                  >
                    {lead.contact}
                  </a>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Info label="公司 / 项目" value={lead.company} />
                  <Info label="主要需求" value={lead.need} />
                  <Info label="项目阶段" value={lead.stage} />
                  <Info label="启动时间" value={lead.timeline} />
                  <Info label="投入规模" value={lead.budget} />
                  <Info label="补充说明 / 主要障碍" value={lead.blocker} />
                </div>

                {(lead.result_title || lead.result_advice) && (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    {lead.result_title && (
                      <p className="font-semibold text-slate-100">
                        {lead.result_title}
                      </p>
                    )}
                    {lead.result_advice && (
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-400">
                        {lead.result_advice}
                      </p>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-wrap break-words text-sm text-slate-200">
        {value || "—"}
      </p>
    </div>
  );
}
