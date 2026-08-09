import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      contact,
      need,
      stage,
      timeline,
      budget,
      blocker,
      resultTitle,
      resultAdvice,
    } = body;

    if (!name || !contact) {
      return NextResponse.json(
        {
          ok: false,
          message: "姓名和联系方式不能为空",
        },
        { status: 400 }
      );
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          ok: false,
          message: "数据库未配置",
        },
        { status: 500 }
      );
    }

    const sql = neon(process.env.DATABASE_URL);

    const rows = await sql`
      INSERT INTO leads (
        name,
        company,
        contact,
        need,
        stage,
        timeline,
        budget,
        blocker,
        result_title,
        result_advice
      )
      VALUES (
        ${name},
        ${company || null},
        ${contact},
        ${need || null},
        ${stage || null},
        ${timeline || null},
        ${budget || null},
        ${blocker || null},
        ${resultTitle || null},
        ${resultAdvice || null}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json({
      ok: true,
      message: "提交成功",
      lead: rows[0],
    });
  } catch (error) {
    console.error("miniapp-lead error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "提交失败，请稍后再试",
      },
      { status: 500 }
    );
  }
}