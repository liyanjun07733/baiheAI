"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Standard = "MIL-STD-105E" | "ISO 2859-1" | "GB/T 2828.1";
type Level = "S-1" | "S-2" | "S-3" | "S-4" | "一般 I" | "一般 II" | "一般 III";
type Aql =
  | "0.065"
  | "0.10"
  | "0.15"
  | "0.25"
  | "0.40"
  | "0.65"
  | "1.0"
  | "1.5"
  | "2.5"
  | "4.0"
  | "6.5"
  | "10"
  | "15"
  | "25"
  | "40";

const standards: Standard[] = [
  "MIL-STD-105E",
  "ISO 2859-1",
  "GB/T 2828.1",
];

const levels: Level[] = [
  "S-1",
  "S-2",
  "S-3",
  "S-4",
  "一般 I",
  "一般 II",
  "一般 III",
];

const aqls: Aql[] = [
  "0.065",
  "0.10",
  "0.15",
  "0.25",
  "0.40",
  "0.65",
  "1.0",
  "1.5",
  "2.5",
  "4.0",
  "6.5",
  "10",
  "15",
  "25",
  "40",
];

const codes = [
  "A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R",
] as const;

const sampleSizes: Record<(typeof codes)[number], number> = {
  A: 2,
  B: 3,
  C: 5,
  D: 8,
  E: 13,
  F: 20,
  G: 32,
  H: 50,
  J: 80,
  K: 125,
  L: 200,
  M: 315,
  N: 500,
  P: 800,
  Q: 1250,
  R: 2000,
};

const lotRanges = [
  [2, 8],
  [9, 15],
  [16, 25],
  [26, 50],
  [51, 90],
  [91, 150],
  [151, 280],
  [281, 500],
  [501, 1200],
  [1201, 3200],
  [3201, 10000],
  [10001, 35000],
  [35001, 150000],
  [150001, 500000],
  [500001, Number.MAX_SAFE_INTEGER],
] as const;

const codeRows: string[][] = [
  ["A","A","A","A","A","A","B"],
  ["A","A","A","A","A","B","C"],
  ["A","A","B","B","B","C","D"],
  ["A","B","B","C","C","D","E"],
  ["B","B","C","C","C","E","F"],
  ["B","B","C","D","D","F","G"],
  ["B","C","D","E","E","G","H"],
  ["B","C","D","E","F","H","J"],
  ["C","C","E","F","G","J","K"],
  ["C","D","E","G","H","K","L"],
  ["C","D","F","G","J","L","M"],
  ["C","D","F","H","K","M","N"],
  ["D","E","G","J","L","N","P"],
  ["D","E","G","J","M","P","Q"],
  ["D","E","H","K","N","Q","R"],
];

const states: Record<Aql, string[]> = {
  "0.065": ["D","D","D","D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4"],
  "0.10":  ["D","D","D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6"],
  "0.15":  ["D","D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8"],
  "0.25":  ["D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11"],
  "0.40":  ["D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15"],
  "0.65":  ["D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22"],
  "1.0":   ["D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U"],
  "1.5":   ["D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U"],
  "2.5":   ["D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U"],
  "4.0":   ["D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U"],
  "6.5":   ["0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U"],
  "10":    ["D","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U"],
  "15":    ["D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U","U"],
  "25":    ["1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U","U","U"],
  "40":    ["2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U","U","U","U"],
};

function getCode(lotQty: number, level: Level) {
  if (lotQty <= 1) return "A";

  const levelIndex = levels.indexOf(level);
  const rowIndex = lotRanges.findIndex(
    ([min, max]) => lotQty >= min && lotQty <= max
  );

  if (rowIndex < 0) return "R";
  return codeRows[rowIndex][levelIndex];
}

function resolvePlan(code: string, aql: Aql) {
  const startIndex = codes.indexOf(code as (typeof codes)[number]);
  const current = states[aql][startIndex];

  let resolvedIndex = startIndex;

  if (current === "D") {
    for (let i = startIndex + 1; i < codes.length; i += 1) {
      if (states[aql][i].includes("/")) {
        resolvedIndex = i;
        break;
      }
    }
  } else if (current === "U") {
    for (let i = startIndex - 1; i >= 0; i -= 1) {
      if (states[aql][i].includes("/")) {
        resolvedIndex = i;
        break;
      }
    }
  }

  const [ac, re] = states[aql][resolvedIndex].split("/").map(Number);
  const resolvedCode = codes[resolvedIndex];

  return {
    sampleSize: sampleSizes[resolvedCode],
    ac,
    re,
  };
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {children}
    </label>
  );
}

function NumberInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="number"
      min="0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    />
  );
}

export default function InspectionRecordPage() {
  const [standard, setStandard] = useState<Standard>("MIL-STD-105E");
  const [level, setLevel] = useState<Level>("一般 II");
  const [majorAql, setMajorAql] = useState<Aql>("2.5");
  const [minorAql, setMinorAql] = useState<Aql>("4.0");

  const [lotQty, setLotQty] = useState("600");
  const [critical, setCritical] = useState("0");
  const [major, setMajor] = useState("0");
  const [minor, setMinor] = useState("0");

  const result = useMemo(() => {
    const lot = Number(lotQty);

    if (!lotQty || Number.isNaN(lot) || lot <= 0) {
      return {
        sampleSize: 0,
        majorAc: 0,
        majorRe: 0,
        minorAc: 0,
        minorRe: 0,
        status: "待输入",
      };
    }

    const code = getCode(lot, level);
    const majorPlan = resolvePlan(code, majorAql);
    const minorPlan = resolvePlan(code, minorAql);

    const sampleSize = Math.min(
      lot,
      Math.max(majorPlan.sampleSize, minorPlan.sampleSize)
    );

    const c = critical === "" ? null : Number(critical);
    const ma = major === "" ? null : Number(major);
    const mi = minor === "" ? null : Number(minor);

    let status = "待输入";

    if (c !== null && ma !== null && mi !== null) {
      status =
        c >= 1 || ma >= majorPlan.re || mi >= minorPlan.re
          ? "不合格"
          : "合格";
    }

    return {
      sampleSize,
      majorAc: majorPlan.ac,
      majorRe: majorPlan.re,
      minorAc: minorPlan.ac,
      minorRe: minorPlan.re,
      status,
    };
  }, [lotQty, level, majorAql, minorAql, critical, major, minor]);

  const resultClass =
    result.status === "合格"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : result.status === "不合格"
      ? "border-red-400/30 bg-red-400/10 text-red-300"
      : "border-white/10 bg-white/5 text-slate-300";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
          <Link
            href="/tools"
            className="text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            ← 返回 Factory Tools
          </Link>

          <div className="mt-7">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-blue-700">
              QC-01 · QUALITY CONTROL
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
              通用智能检验记录
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              选择检验标准、抽样等级和 AQL，输入批量与实际不良数量，
              系统立即计算抽样数量并判断合格 / 不合格。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-blue-600">
                INSPECTION INPUT
              </div>
              <h2 className="mt-2 text-2xl font-black">输入检验条件</h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel>检验标准</FieldLabel>
                <select
                  value={standard}
                  onChange={(e) => setStandard(e.target.value as Standard)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {standards.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel>抽样等级</FieldLabel>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as Level)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {levels.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel>Major AQL</FieldLabel>
                <select
                  value={majorAql}
                  onChange={(e) => setMajorAql(e.target.value as Aql)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {aqls.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel>Minor AQL</FieldLabel>
                <select
                  value={minorAql}
                  onChange={(e) => setMinorAql(e.target.value as Aql)}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  {aqls.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="my-8 h-px bg-slate-100" />

            <div>
              <FieldLabel>批量 / Lot Quantity</FieldLabel>
              <NumberInput
                value={lotQty}
                onChange={setLotQty}
                placeholder="例如：600"
              />
            </div>

            <div className="mt-8">
              <div className="text-sm font-bold">实际发现的不良数量</div>
              <div className="mt-1 text-xs text-slate-500">
                Critical 为 0 Defect，发现 1 个即不合格。
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <FieldLabel>Critical 严重</FieldLabel>
                  <NumberInput value={critical} onChange={setCritical} />
                </div>

                <div>
                  <FieldLabel>Major 主要</FieldLabel>
                  <NumberInput value={major} onChange={setMajor} />
                </div>

                <div>
                  <FieldLabel>Minor 次要</FieldLabel>
                  <NumberInput value={minor} onChange={setMinor} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#0f2747] p-6 text-white shadow-sm md:p-8">
            <div className="text-xs font-bold tracking-[0.18em] text-blue-300">
              LIVE RESULT
            </div>

            <h2 className="mt-2 text-2xl font-black">实时检验结果</h2>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">批量</div>
                <div className="mt-2 text-2xl font-black">{lotQty || "-"}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">自动抽样</div>
                <div className="mt-2 text-2xl font-black text-blue-300">
                  {result.sampleSize || "-"}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Critical</div>
                  <div className="mt-1 font-bold">Ac 0 / Re 1</div>
                </div>
              </div>

              <div className="my-4 h-px bg-white/10" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400">
                    Major · AQL {majorAql}
                  </div>
                  <div className="mt-1 font-bold">
                    Ac {result.majorAc} / Re {result.majorRe}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400">
                    Minor · AQL {minorAql}
                  </div>
                  <div className="mt-1 font-bold">
                    Ac {result.minorAc} / Re {result.minorRe}
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-5 rounded-2xl border p-5 ${resultClass}`}>
              <div className="text-xs font-bold tracking-[0.14em] opacity-70">
                INSPECTION RESULT
              </div>
              <div className="mt-2 text-3xl font-black">{result.status}</div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
              <div className="text-xs font-bold tracking-[0.14em] text-amber-300">
                PROFESSIONAL EDITION
              </div>
              <div className="mt-2 font-bold">需要长期保存检验记录？</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Professional Edition 用于长期记录、查询、打印和本地保存，把一次判断变成企业自己的质量数据。
              </p>
              <Link
                href="/tools/inspection-record/pro"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300"
              >
                查看 Professional Edition
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
