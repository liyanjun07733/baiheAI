import ExcelJS from "exceljs";
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "../../../../lib/adminAuth";

export const runtime = "nodejs";
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
    second: "2-digit",
    hour12: false,
  }).format(new Date(value));
}

function statusLabel(status: string) {
  const labels: Record<string, string> = {
    pending: "待跟进",
    contacted: "已联系",
    priority: "重点客户",
    won: "已成交",
    paused: "暂不跟进",
  };

  return labels[status] || status || "待跟进";
}

export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { ok: false, message: "DATABASE_URL is not configured" },
      { status: 500 }
    );
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
    LIMIT 5000
  `) as Lead[];

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "BaiheAI";
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet("客户线索", {
    views: [{ state: "frozen", ySplit: 1 }],
  });

  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "姓名", key: "name", width: 18 },
    { header: "公司 / 项目", key: "company", width: 28 },
    { header: "联系方式", key: "contact", width: 32 },
    { header: "主要需求", key: "need", width: 34 },
    { header: "项目阶段", key: "stage", width: 24 },
    { header: "计划时间", key: "timeline", width: 20 },
    { header: "投入规模", key: "budget", width: 22 },
    { header: "补充说明 / 主要障碍", key: "blocker", width: 38 },
    { header: "结果标题 / 来源", key: "result_title", width: 28 },
    { header: "完整需求摘要", key: "result_advice", width: 55 },
    { header: "跟进状态", key: "status", width: 16 },
    { header: "提交时间（泰国）", key: "created_at", width: 24 },
  ];

  for (const lead of leads) {
    worksheet.addRow({
      id: lead.id,
      name: lead.name || "",
      company: lead.company || "",
      contact: lead.contact || "",
      need: lead.need || "",
      stage: lead.stage || "",
      timeline: lead.timeline || "",
      budget: lead.budget || "",
      blocker: lead.blocker || "",
      result_title: lead.result_title || "",
      result_advice: lead.result_advice || "",
      status: statusLabel(lead.status),
      created_at: formatDate(lead.created_at),
    });
  }

  const header = worksheet.getRow(1);
  header.height = 26;
  header.font = { bold: true, color: { argb: "FFFFFFFF" } };
  header.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF0F172A" },
  };
  header.alignment = {
    vertical: "middle",
    horizontal: "center",
  };

  worksheet.autoFilter = {
    from: "A1",
    to: "M1",
  };

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;

    row.alignment = {
      vertical: "top",
      wrapText: true,
    };

    row.eachCell((cell) => {
      cell.border = {
        bottom: {
          style: "hair",
          color: { argb: "FFE2E8F0" },
        },
      };
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const bytes = new Uint8Array(Buffer.from(buffer));

  const day = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const filename = `BaiheAI-Leads-${day}.xlsx`;

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(
        filename
      )}`,
      "Cache-Control": "no-store",
    },
  });
}
