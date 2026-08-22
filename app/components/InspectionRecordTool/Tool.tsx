"use client";

import { useMemo, useState, type ReactNode } from "react";

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

type Result = {
  code: string;
  sampleSize: number;
  majorAc: number;
  majorRe: number;
  minorAc: number;
  minorRe: number;
  status: "合格" | "不合格" | "待输入";
};

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
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
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
  ["A", "A", "A", "A", "A", "A", "B"],
  ["A", "A", "A", "A", "A", "B", "C"],
  ["A", "A", "B", "B", "B", "C", "D"],
  ["A", "B", "B", "C", "C", "D", "E"],
  ["B", "B", "C", "C", "C", "E", "F"],
  ["B", "B", "C", "D", "D", "F", "G"],
  ["B", "C", "D", "E", "E", "G", "H"],
  ["B", "C", "D", "E", "F", "H", "J"],
  ["C", "C", "E", "F", "G", "J", "K"],
  ["C", "D", "E", "G", "H", "K", "L"],
  ["C", "D", "F", "G", "J", "L", "M"],
  ["C", "D", "F", "H", "K", "M", "N"],
  ["D", "E", "G", "J", "L", "N", "P"],
  ["D", "E", "G", "J", "M", "P", "Q"],
  ["D", "E", "H", "K", "N", "Q", "R"],
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

  const resolvedState = states[aql][resolvedIndex];
  const [ac, re] = resolvedState.split("/").map(Number);
  const resolvedCode = codes[resolvedIndex];

  return {
    sampleSize: sampleSizes[resolvedCode],
    ac,
    re,
  };
}

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    >
      {children}
    </select>
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
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    />
  );
}

export default function InspectionRecordTool() {
  const [standard, setStandard] = useState<Standard>("MIL-STD-105E");
  const [level, setLevel] = useState<Level>("一般 II");
  const [majorAql, setMajorAql] = useState<Aql>("2.5");
  const [minorAql, setMinorAql] = useState<Aql>("4.0");

  const [lotQty, setLotQty] = useState("600");
  const [critical, setCritical] = useState("0");
  const [major, setMajor] = useState("0");
  const [minor, setMinor] = useState("0");

  const result = useMemo<Result>(() => {
    const lot = Number(lotQty);

    if (!lotQty || Number.isNaN(lot) || lot <= 0) {
      return {
        code: "-",
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

    let status: Result["status"] = "待输入";

    if (c !== null && ma !== null && mi !== null) {
      status =
        c >= 1 || ma >= majorPlan.re || mi >= minorPlan.re
          ? "不合格"
          : "合格";
    }

    return {
      code,
      sampleSize,
      majorAc: majorPlan.ac,
      majorRe: majorPlan.re,
      minorAc: minorPlan.ac,
      minorRe: minorPlan.re,
      status,
    };
  }, [lotQty, level, majorAql, minorAql, critical, major, minor]);

  const reset = () => {
    setStandard("MIL-STD-105E");
    setLevel("一般 II");
    setMajorAql("2.5");
    setMinorAql("4.0");
    setLotQty("");
    setCritical("");
    setMajor("");
    setMinor("");
  };

  const resultStyle =
    result.status === "合格"
      ? "border-emerald-300/40 bg-emerald-400/10 text-emerald-300"
      : result.status === "不合格"
        ? "border-red-300/40 bg-red-400/10 text-red-300"
        : "border-white/10 bg-white/5 text-slate-300";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] text-blue-600">
              INSPECTION INPUT
            </div>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              输入检验条件
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              抽样表和判定规则都在后台，现场只需选择和输入。
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="shrink-0 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-50"
          >
            清空
          </button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel>检验标准</FieldLabel>
            <Select value={standard} onChange={(v) => setStandard(v as Standard)}>
              {standards.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>

          <div>
            <FieldLabel>抽样等级</FieldLabel>
            <Select value={level} onChange={(v) => setLevel(v as Level)}>
              {levels.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>

          <div>
            <FieldLabel>Major AQL</FieldLabel>
            <Select value={majorAql} onChange={(v) => setMajorAql(v as Aql)}>
              {aqls.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </Select>
          </div>

          <div>
            <FieldLabel>Minor AQL</FieldLabel>
            <Select value={minorAql} onChange={(v) => setMinorAql(v as Aql)}>
              {aqls.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </Select>
          </div>
        </div>

        <div className="my-8 h-px bg-slate-100" />

        <div>
          <FieldLabel>批量 / Lot Quantity</FieldLabel>
          <NumberInput value={lotQty} onChange={setLotQty} placeholder="例如：600" />
        </div>

        <div className="mt-8">
          <div className="mb-4">
            <div className="text-sm font-bold text-slate-900">实际发现的不良数量</div>
            <div className="mt-1 text-xs text-slate-500">
              Critical 固定为 0 Defect，发现 1 个即不合格。
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
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
      </section>

      <section className="rounded-3xl border border-slate-200 bg-[#0f2747] p-6 text-white shadow-sm md:p-8">
        <div className="text-xs font-bold tracking-[0.18em] text-blue-300">LIVE RESULT</div>
        <h2 className="mt-2 text-2xl font-black">实时检验结果</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          修改左侧任意条件，结果会立即重新计算。
        </p>

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
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Critical</div>
              <div className="mt-1 font-bold">0 Defect</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">判定</div>
              <div className="mt-1 font-bold">Ac 0 / Re 1</div>
            </div>
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-slate-400">Major · AQL {majorAql}</div>
              <div className="mt-1 font-bold">Ac {result.majorAc} / Re {result.majorRe}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Minor · AQL {minorAql}</div>
              <div className="mt-1 font-bold">Ac {result.minorAc} / Re {result.minorRe}</div>
            </div>
          </div>
        </div>

        <div className={`mt-5 rounded-2xl border p-5 ${resultStyle}`}>
          <div className="text-xs font-bold tracking-[0.14em] opacity-70">INSPECTION RESULT</div>
          <div className="mt-2 text-3xl font-black">{result.status}</div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-bold">当前判断依据</div>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            严重不良 ≥ 1，或 Major 达到 Re {result.majorRe}，或 Minor 达到 Re {result.minorRe} 时判定为不合格。
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-5">
          <div className="text-xs font-bold tracking-[0.14em] text-amber-300">EXCEL PROFESSIONAL</div>
          <div className="mt-2 font-bold">需要保存长期检验记录？</div>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Excel 专业版支持进料、过程、成品检验记录及离线长期使用。
          </p>
          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed rounded-xl bg-amber-300/15 px-4 py-3 text-sm font-bold text-amber-200"
          >
            Excel 专业版 · 即将开放
          </button>
        </div>
      </section>
    </div>
  );
}
