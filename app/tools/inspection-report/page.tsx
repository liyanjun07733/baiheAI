"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Level = "S-1" | "S-2" | "S-3" | "S-4" | "一般 I" | "一般 II" | "一般 III";
type Aql =
  | "0.065" | "0.10" | "0.15" | "0.25" | "0.40"
  | "0.65" | "1.0" | "1.5" | "2.5" | "4.0"
  | "6.5" | "10" | "15" | "25" | "40";

const levels: Level[] = ["S-1","S-2","S-3","S-4","一般 I","一般 II","一般 III"];
const aqls: Aql[] = ["0.065","0.10","0.15","0.25","0.40","0.65","1.0","1.5","2.5","4.0","6.5","10","15","25","40"];

const codes = ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R"] as const;
const sampleSizes: Record<(typeof codes)[number], number> = {
  A:2,B:3,C:5,D:8,E:13,F:20,G:32,H:50,J:80,K:125,L:200,M:315,N:500,P:800,Q:1250,R:2000,
};

const lotRanges = [
  [2,8],[9,15],[16,25],[26,50],[51,90],[91,150],[151,280],[281,500],
  [501,1200],[1201,3200],[3201,10000],[10001,35000],[35001,150000],
  [150001,500000],[500001,Number.MAX_SAFE_INTEGER],
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
  "0.065":["D","D","D","D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4"],
  "0.10":["D","D","D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6"],
  "0.15":["D","D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8"],
  "0.25":["D","D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11"],
  "0.40":["D","D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15"],
  "0.65":["D","D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22"],
  "1.0":["D","D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U"],
  "1.5":["D","D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U"],
  "2.5":["D","D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U"],
  "4.0":["D","0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U"],
  "6.5":["0/1","U","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U"],
  "10":["D","D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U"],
  "15":["D","1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U","U"],
  "25":["1/2","2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U","U","U"],
  "40":["2/3","3/4","5/6","7/8","10/11","14/15","21/22","U","U","U","U","U","U","U","U","U"],
};

function getCode(lotQty: number, level: Level) {
  if (lotQty <= 1) return "A";
  const levelIndex = levels.indexOf(level);
  const rowIndex = lotRanges.findIndex(([min,max]) => lotQty >= min && lotQty <= max);
  return rowIndex < 0 ? "R" : codeRows[rowIndex][levelIndex];
}

function resolvePlan(code: string, aql: Aql) {
  const start = codes.indexOf(code as (typeof codes)[number]);
  const current = states[aql][start];
  let index = start;

  if (current === "D") {
    for (let i = start + 1; i < codes.length; i++) {
      if (states[aql][i].includes("/")) { index = i; break; }
    }
  } else if (current === "U") {
    for (let i = start - 1; i >= 0; i--) {
      if (states[aql][i].includes("/")) { index = i; break; }
    }
  }

  const [ac,re] = states[aql][index].split("/").map(Number);
  return { sample: sampleSizes[codes[index]], ac, re };
}

type Defect = {
  id: number;
  description: string;
  critical: number;
  major: number;
  minor: number;
  remark: string;
};

const emptyDefect = (id: number): Defect => ({
  id, description:"", critical:0, major:0, minor:0, remark:"",
});

function Input({value,onChange,type="text",placeholder=""}:{value:string|number,onChange:(v:string)=>void,type?:string,placeholder?:string}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder={placeholder}
      className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    />
  );
}

export default function InspectionReportPage() {
  const [reportNo,setReportNo] = useState("");
  const [date,setDate] = useState("");
  const [po,setPo] = useState("");
  const [item,setItem] = useState("");
  const [product,setProduct] = useState("");
  const [orderQty,setOrderQty] = useState("");
  const [inspectQty,setInspectQty] = useState("600");
  const [inspector,setInspector] = useState("");

  const [level,setLevel] = useState<Level>("一般 II");
  const [majorAql,setMajorAql] = useState<Aql>("2.5");
  const [minorAql,setMinorAql] = useState<Aql>("4.0");

  const [disposition,setDisposition] = useState("");
  const [specialNote,setSpecialNote] = useState("");
  const [defects,setDefects] = useState<Defect[]>([
    emptyDefect(1), emptyDefect(2), emptyDefect(3)
  ]);

  const [productPhoto,setProductPhoto] = useState<string | null>(null);
  const [defectPhotos,setDefectPhotos] = useState<string[]>([]);

  const result = useMemo(()=>{
    const qty = Number(inspectQty);
    if (!qty || qty <= 0) {
      return {sample:0, majorAc:0, majorRe:0, minorAc:0, minorRe:0, critical:0, major:0, minor:0, status:"待输入"};
    }

    const code = getCode(qty, level);
    const majorPlan = resolvePlan(code, majorAql);
    const minorPlan = resolvePlan(code, minorAql);
    const sample = Math.min(qty, Math.max(majorPlan.sample, minorPlan.sample));

    const critical = defects.reduce((s,d)=>s + Number(d.critical || 0),0);
    const major = defects.reduce((s,d)=>s + Number(d.major || 0),0);
    const minor = defects.reduce((s,d)=>s + Number(d.minor || 0),0);

    const anyEntered = defects.some(d => d.description || d.critical || d.major || d.minor);
    const status = !anyEntered
      ? "待输入"
      : critical >= 1 || major >= majorPlan.re || minor >= minorPlan.re
      ? "不合格"
      : "合格";

    return {
      sample,
      majorAc:majorPlan.ac, majorRe:majorPlan.re,
      minorAc:minorPlan.ac, minorRe:minorPlan.re,
      critical, major, minor, status
    };
  },[inspectQty,level,majorAql,minorAql,defects]);

  function updateDefect(id:number,key:keyof Defect,value:string) {
    setDefects(prev=>prev.map(d=>{
      if (d.id !== id) return d;
      if (key === "critical" || key === "major" || key === "minor") {
        return {...d,[key]:Number(value || 0)};
      }
      return {...d,[key]:value};
    }));
  }

  function addDefect() {
    if (defects.length >= 8) return;
    setDefects(prev=>[...prev,emptyDefect(prev.length+1)]);
  }

  function handleSinglePhoto(file: File | undefined) {
    if (!file) return;
    setProductPhoto(URL.createObjectURL(file));
  }

  function handleDefectPhotos(files: FileList | null) {
    if (!files) return;
    const urls = Array.from(files).slice(0,6).map(f=>URL.createObjectURL(f));
    setDefectPhotos(urls);
  }

  const statusClass =
    result.status === "合格"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : result.status === "不合格"
      ? "bg-red-50 text-red-700 border-red-200"
      : "bg-slate-50 text-slate-500 border-slate-200";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <style jsx global>{`
        @media print {
          body * { visibility: hidden !important; }
          #print-report, #print-report * { visibility: visible !important; }
          #print-report {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <section className="no-print border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
            ← 返回 Factory Tools
          </Link>
          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-blue-700">
                QC-02 · INSPECTION REPORT
              </div>
              <h1 className="mt-4 text-3xl font-black md:text-4xl">单产品智能验货报告</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                一个产品一份报告。录入订单、抽样与不良数据后，系统自动判定，并生成可打印的正式验货报告。
              </p>
            </div>
            <button
              onClick={()=>window.print()}
              className="rounded-xl bg-[#0f2747] px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              打印 / 保存为 PDF
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-8 lg:grid-cols-[0.88fr_1.12fr]">
        {/* INPUT */}
        <div className="no-print space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">REPORT INPUT</div>
            <h2 className="mt-2 text-xl font-black">报告信息</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><div className="mb-2 text-xs font-bold text-slate-600">报告编号</div><Input value={reportNo} onChange={setReportNo}/></div>
              <div><div className="mb-2 text-xs font-bold text-slate-600">检验日期</div><Input type="date" value={date} onChange={setDate}/></div>
              <div><div className="mb-2 text-xs font-bold text-slate-600">PO#</div><Input value={po} onChange={setPo}/></div>
              <div><div className="mb-2 text-xs font-bold text-slate-600">ITEM</div><Input value={item} onChange={setItem}/></div>
              <div className="sm:col-span-2"><div className="mb-2 text-xs font-bold text-slate-600">产品名称 / 描述</div><Input value={product} onChange={setProduct}/></div>
              <div><div className="mb-2 text-xs font-bold text-slate-600">订单数量</div><Input type="number" value={orderQty} onChange={setOrderQty}/></div>
              <div><div className="mb-2 text-xs font-bold text-slate-600">确认数量</div><Input type="number" value={inspectQty} onChange={setInspectQty}/></div>
              <div className="sm:col-span-2"><div className="mb-2 text-xs font-bold text-slate-600">检验员</div><Input value={inspector} onChange={setInspector}/></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">抽样设置</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <div className="mb-2 text-xs font-bold text-slate-600">抽样等级</div>
                <select value={level} onChange={e=>setLevel(e.target.value as Level)} className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm">
                  {levels.map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold text-slate-600">Major AQL</div>
                <select value={majorAql} onChange={e=>setMajorAql(e.target.value as Aql)} className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm">
                  {aqls.map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold text-slate-600">Minor AQL</div>
                <select value={minorAql} onChange={e=>setMinorAql(e.target.value as Aql)} className="h-11 w-full rounded-lg border border-slate-200 px-3 text-sm">
                  {aqls.map(v=><option key={v}>{v}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4 text-sm">
              <div>自动抽样：<b className="text-blue-700">{result.sample || "-"}</b></div>
              <div>Critical：<b>Ac 0 / Re 1</b></div>
              <div>Major：<b>Ac {result.majorAc} / Re {result.majorRe}</b></div>
              <div>Minor：<b>Ac {result.minorAc} / Re {result.minorRe}</b></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-black">不良明细</h2>
              <button onClick={addDefect} disabled={defects.length>=8} className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 disabled:opacity-40">
                + 增加一项
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {defects.map((d)=>(
                <div key={d.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 text-xs font-black text-slate-400">#{String(d.id).padStart(2,"0")}</div>
                  <div className="grid gap-3">
                    <Input value={d.description} onChange={v=>updateDefect(d.id,"description",v)} placeholder="不良描述，例如：固定位置披锋"/>
                    <div className="grid grid-cols-3 gap-2">
                      <Input type="number" value={d.critical} onChange={v=>updateDefect(d.id,"critical",v)} placeholder="Critical"/>
                      <Input type="number" value={d.major} onChange={v=>updateDefect(d.id,"major",v)} placeholder="Major"/>
                      <Input type="number" value={d.minor} onChange={v=>updateDefect(d.id,"minor",v)} placeholder="Minor"/>
                    </div>
                    <Input value={d.remark} onChange={v=>updateDefect(d.id,"remark",v)} placeholder="处置 / 备注"/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">照片</h2>
            <div className="mt-5 space-y-4">
              <label className="block rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-500 hover:border-blue-400">
                产品照片
                <input type="file" accept="image/*" className="mt-3 block w-full text-xs" onChange={e=>handleSinglePhoto(e.target.files?.[0])}/>
              </label>
              <label className="block rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-500 hover:border-blue-400">
                不良照片（最多6张）
                <input type="file" accept="image/*" multiple className="mt-3 block w-full text-xs" onChange={e=>handleDefectPhotos(e.target.files)}/>
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">最终处置</h2>
            <select value={disposition} onChange={e=>setDisposition(e.target.value)} className="mt-4 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm">
              <option value="">请选择</option>
              <option>按原计划出货</option>
              <option>返工后出货</option>
              <option>让步接收</option>
              <option>待客户确认</option>
              <option>退货</option>
              <option>报废</option>
            </select>
            <textarea value={specialNote} onChange={e=>setSpecialNote(e.target.value)} placeholder="特许情况、客户确认、返工说明等" className="mt-4 min-h-28 w-full rounded-lg border border-slate-200 p-3 text-sm outline-none focus:border-blue-500"/>
          </div>
        </div>

        {/* FORMAL REPORT */}
        <div id="print-report" className="self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="border-b-2 border-[#0f2747] pb-5 text-center">
            <div className="text-xs font-bold tracking-[0.22em] text-blue-600">BAIHEAI FACTORY TOOLS</div>
            <h2 className="mt-2 text-2xl font-black">Inspection Report 验货报告</h2>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-slate-200 text-sm">
            {[
              ["报告编号",reportNo||"-"],["检验日期",date||"-"],
              ["PO#",po||"-"],["ITEM",item||"-"],
              ["产品",product||"-"],["检验员",inspector||"-"],
              ["订单数量",orderQty||"-"],["确认数量",inspectQty||"-"],
            ].map(([k,v])=>(
              <div key={k} className="grid grid-cols-[92px_1fr] bg-white">
                <div className="bg-slate-50 px-3 py-2 font-bold text-slate-600">{k}</div>
                <div className="px-3 py-2">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_220px]">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs font-bold text-slate-500">抽样计划</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>检验标准：<b>MIL-STD-105E</b></div>
                <div>抽样等级：<b>{level}</b></div>
                <div>自动抽样：<b>{result.sample || "-"}</b></div>
                <div>Critical：<b>Ac 0 / Re 1</b></div>
                <div>Major AQL {majorAql}：<b>{result.majorAc}/{result.majorRe}</b></div>
                <div>Minor AQL {minorAql}：<b>{result.minorAc}/{result.minorRe}</b></div>
              </div>
            </div>

            <div className="flex min-h-36 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              {productPhoto ? (
                <img src={productPhoto} alt="product" className="h-full w-full object-contain"/>
              ) : (
                <span className="text-xs text-slate-400">产品照片</span>
              )}
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <div className="grid grid-cols-[36px_1fr_58px_58px_58px_120px] bg-[#0f2747] text-xs font-bold text-white">
              <div className="p-2 text-center">NO.</div>
              <div className="p-2">不良描述</div>
              <div className="p-2 text-center">C</div>
              <div className="p-2 text-center">M</div>
              <div className="p-2 text-center">m</div>
              <div className="p-2">处置/备注</div>
            </div>

            {defects.map(d=>(
              <div key={d.id} className="grid grid-cols-[36px_1fr_58px_58px_58px_120px] border-t border-slate-200 text-xs">
                <div className="p-2 text-center">{d.id}</div>
                <div className="p-2">{d.description || "-"}</div>
                <div className="p-2 text-center">{d.critical || 0}</div>
                <div className="p-2 text-center">{d.major || 0}</div>
                <div className="p-2 text-center">{d.minor || 0}</div>
                <div className="p-2">{d.remark || "-"}</div>
              </div>
            ))}

            <div className="grid grid-cols-[36px_1fr_58px_58px_58px_120px] border-t-2 border-slate-300 bg-slate-50 text-xs font-bold">
              <div className="p-2"/>
              <div className="p-2">总不良数</div>
              <div className="p-2 text-center">{result.critical}</div>
              <div className="p-2 text-center">{result.major}</div>
              <div className="p-2 text-center">{result.minor}</div>
              <div className="p-2"/>
            </div>
          </div>

          <div className={`mt-5 rounded-xl border p-5 text-center ${statusClass}`}>
            <div className="text-xs font-bold tracking-[0.16em]">INSPECTION RESULT</div>
            <div className="mt-2 text-3xl font-black">{result.status}</div>
          </div>

          <div className="mt-5">
            <div className="mb-3 text-sm font-black">不良图片 / Defect Photos</div>
            <div className="grid grid-cols-3 gap-3">
              {(defectPhotos.length ? defectPhotos : [null,null,null]).map((url,index)=>(
                <div key={index} className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  {url ? <img src={url} alt={`defect-${index+1}`} className="h-full w-full object-contain"/> : <span className="text-xs text-slate-400">照片 {index+1}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-xl bg-slate-200 text-sm">
            <div className="grid grid-cols-[120px_1fr] bg-white">
              <div className="bg-slate-50 px-3 py-3 font-bold">最终处置</div>
              <div className="px-3 py-3 font-bold">{disposition || "-"}</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] bg-white">
              <div className="bg-slate-50 px-3 py-3 font-bold">特许/备注</div>
              <div className="min-h-16 px-3 py-3">{specialNote || "-"}</div>
            </div>
          </div>

          <div className="mt-6 text-[10px] leading-5 text-slate-400">
            本报告中的抽样与判定为辅助工具结果。实际验收应同时遵守客户图纸、质量协议、法规、安全要求及客户明确的特殊检验条件。
          </div>
        </div>
      </section>
    </main>
  );
}
