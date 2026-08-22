"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Grade = "Minor" | "Major" | "Critical";
type Source =
  | "模具/治具"
  | "材料"
  | "设备"
  | "工艺参数"
  | "装配/治具"
  | "人工作业"
  | "包装过程"
  | "搬运/运输"
  | "环境/储存"
  | "原因未知";

type Pattern =
  | "固定位置"
  | "同一模穴/治具"
  | "同批材料"
  | "连续发生"
  | "同一设备"
  | "同一时间段"
  | "同一人员/班次"
  | "同一包装批次"
  | "随机分布"
  | "未知";

type FunctionImpact = "无" | "轻微" | "明显" | "功能失效";
type SafetyImpact = "无" | "潜在" | "明确";
type Spread = "单件" | "局部" | "批次" | "全批";
type Rework = "容易" | "一般" | "困难" | "不可返工";
type Visibility = "隐蔽" | "一般可见" | "明显" | "高度可见";

type DefectRule = {
  name: string;
  category: string;
  grade: Grade;
  source: Source;
  functionImpact: FunctionImpact;
  safetyImpact: SafetyImpact;
  rework: Rework;
  visibility: Visibility;
  hardStop: boolean;
  containment: string;
  rootCause: string;
  corrective: string;
  verification: string;
  prevention: string;
};

const defects: DefectRule[] = [
  {
    name:"披锋/毛边", category:"外观/尺寸", grade:"Major", source:"模具/治具",
    functionImpact:"轻微", safetyImpact:"无", rework:"容易", visibility:"明显", hardStop:false,
    containment:"隔离同穴、同位置或同生产时段产品，确认问题是否持续出现。",
    rootCause:"先确认是否固定位置、是否同一模穴，再检查分型面、镶件间隙、模具磨损、锁模状态及注射条件。",
    corrective:"修复模具或恢复合理锁模/注射条件；必要时增加去毛刺或防错工序。",
    verification:"改善后重新做首件确认，并连续生产一段数量观察同位置是否再次出现。",
    prevention:"建立模具穴号追溯、模具保养和关键位置限度样，异常发生时可快速锁定影响范围。"
  },
  {
    name:"短射/缺胶", category:"成型完整性", grade:"Major", source:"工艺参数",
    functionImpact:"明显", safetyImpact:"无", rework:"困难", visibility:"明显", hardStop:false,
    containment:"暂停异常条件生产并隔离该时间段产品。",
    rootCause:"检查供料、料温、模温、注射速度/压力、排气、浇口及模具充模情况。",
    corrective:"恢复稳定充模条件；如为模具流动问题，改善排气或浇口。",
    verification:"连续生产验证充模完整性，并重新抽样确认。",
    prevention:"建立标准工艺窗口、首件确认和异常参数追溯。"
  },
  {
    name:"缩水", category:"外观/尺寸", grade:"Minor", source:"工艺参数",
    functionImpact:"轻微", safetyImpact:"无", rework:"一般", visibility:"明显", hardStop:false,
    containment:"隔离明显超限产品，并确认是否集中在固定位置。",
    rootCause:"检查肉厚、保压压力/时间、浇口冻结、模温、料温和冷却。",
    corrective:"优化保压与冷却条件；必要时调整结构或浇口。",
    verification:"稳定生产后重新确认外观与关键尺寸。",
    prevention:"建立外观限度样与工艺窗口，换模/换料后首件确认。"
  },
  {
    name:"黑点/污染", category:"外观/材料", grade:"Major", source:"材料",
    functionImpact:"轻微", safetyImpact:"潜在", rework:"困难", visibility:"明显", hardStop:false,
    containment:"隔离同材料批次及相关生产时段产品，暂停继续使用可疑材料。",
    rootCause:"检查原料批号、回料比例、料筒残料、烘料设备、材料储存与污染来源。",
    corrective:"更换或隔离材料，清机并恢复受控的物料管理。",
    verification:"更换材料后连续生产验证；必要时补充材料性能确认。",
    prevention:"建立材料批次追溯、FIFO、防污染和换料清机标准。"
  },
  {
    name:"色差", category:"外观", grade:"Minor", source:"材料",
    functionImpact:"无", safetyImpact:"无", rework:"一般", visibility:"高度可见", hardStop:false,
    containment:"隔离超出批准色板/标准样的产品，并保留对比样件。",
    rootCause:"检查材料/色母批号、配比、烘料、设备残料、工艺参数和光源条件。",
    corrective:"锁定配方与批次，清机或调整成型/喷涂条件。",
    verification:"在标准光源下与批准样品重新比对确认。",
    prevention:"建立色板、色差限度、材料批次和换色清机记录。"
  },
  {
    name:"变形/翘曲", category:"尺寸/装配", grade:"Major", source:"工艺参数",
    functionImpact:"明显", safetyImpact:"无", rework:"困难", visibility:"明显", hardStop:false,
    containment:"隔离变形品并暂停异常工艺条件。",
    rootCause:"检查冷却、模温、脱模、残余应力、材料收缩及装夹条件。",
    corrective:"优化冷却/工艺或改善治具矫正方案。",
    verification:"尺寸和实际装配功能复检。",
    prevention:"建立关键尺寸趋势、工艺窗口和治具状态点检。"
  },
  {
    name:"裂纹/断裂", category:"结构/安全", grade:"Critical", source:"材料",
    functionImpact:"功能失效", safetyImpact:"明确", rework:"不可返工", visibility:"明显", hardStop:true,
    containment:"立即停止出货并隔离相关批次，不允许直接让步放行。",
    rootCause:"检查材料性能、应力集中、模具/加工、工艺条件、结构设计和实际载荷。",
    corrective:"确认根因后从材料、结构或工艺端消除失效来源。",
    verification:"重新进行强度、寿命、功能及必要安全验证后方可考虑放行。",
    prevention:"建立关键材料和关键结构的验证标准、批次追溯和变更控制。"
  },
  {
    name:"尺寸超差", category:"尺寸/功能", grade:"Major", source:"模具/治具",
    functionImpact:"明显", safetyImpact:"潜在", rework:"困难", visibility:"隐蔽", hardStop:false,
    containment:"隔离超差产品，并先确认量具/测量方法有效。",
    rootCause:"确认测量系统后检查模具、设备、工艺参数、定位基准和治具。",
    corrective:"修正尺寸来源并加强首件与巡检控制。",
    verification:"关键尺寸复测，并做装配/功能验证。",
    prevention:"建立量具校准、首件记录、尺寸趋势和治具寿命管理。"
  },
  {
    name:"尖锐毛刺", category:"安全/外观", grade:"Critical", source:"模具/治具",
    functionImpact:"明显", safetyImpact:"明确", rework:"一般", visibility:"明显", hardStop:true,
    containment:"立即隔离并停止出货，优先确认是否存在割伤风险。",
    rootCause:"检查冲切/加工刀具、模具间隙、去毛刺工序和磨损状态。",
    corrective:"修正刀具/模具并增加去毛刺或100%筛选。",
    verification:"触摸、量规或规定方法确认无尖锐风险。",
    prevention:"建立刀具寿命、去毛刺标准和安全边缘限度样。"
  },
  {
    name:"焊接不良", category:"结构/安全", grade:"Critical", source:"工艺参数",
    functionImpact:"功能失效", safetyImpact:"明确", rework:"困难", visibility:"一般可见", hardStop:true,
    containment:"停止出货并隔离同工位/同批次产品。",
    rootCause:"检查焊接参数、设备、焊材、夹具、焊工操作和接头设计。",
    corrective:"恢复合格焊接工艺并重新确认工艺资格。",
    verification:"按要求做外观、强度或破坏性验证。",
    prevention:"建立焊接参数锁定、设备点检、焊材批次和人员资格管理。"
  },
  {
    name:"漏装/缺件", category:"装配完整性", grade:"Major", source:"人工作业",
    functionImpact:"功能失效", safetyImpact:"潜在", rework:"容易", visibility:"明显", hardStop:false,
    containment:"隔离相关工位/班次产品并进行筛选。",
    rootCause:"检查BOM、物料配送、工位防错、计数方式和员工操作。",
    corrective:"增加防错、计数/称重或工序确认。",
    verification:"筛选后进行功能或完整性复检。",
    prevention:"建立工位防错、换线清场、物料确认和抽检机制。"
  },
  {
    name:"错装/装反", category:"装配功能", grade:"Major", source:"人工作业",
    functionImpact:"明显", safetyImpact:"潜在", rework:"一般", visibility:"明显", hardStop:false,
    containment:"隔离相关工位和班次产品。",
    rootCause:"检查作业指导、防错、零件相似性、治具和培训。",
    corrective:"优化防错治具、视觉识别或工序确认。",
    verification:"完成返工后做功能与外观确认。",
    prevention:"建立防错检查、换线确认和易错件区分管理。"
  },
  {
    name:"功能失效", category:"功能", grade:"Critical", source:"原因未知",
    functionImpact:"功能失效", safetyImpact:"明确", rework:"不可返工", visibility:"一般可见", hardStop:true,
    containment:"停止出货并隔离同批产品，保留失效样件。",
    rootCause:"按功能链分解：输入、机构、装配、材料、设备、输出逐项排查。",
    corrective:"根因确认后实施纠正，不允许仅靠挑选掩盖未知失效机理。",
    verification:"重新完成完整功能、寿命及必要安全验证。",
    prevention:"建立功能测试、失效样件分析和关键过程追溯。"
  },
  {
    name:"标签/条码错误", category:"产品信息", grade:"Major", source:"包装过程",
    functionImpact:"无", safetyImpact:"无", rework:"容易", visibility:"高度可见", hardStop:false,
    containment:"暂停出货并隔离同订单包装产品。",
    rootCause:"核对PO、ITEM、条码资料、打印模板、版本和换线清场。",
    corrective:"改正标签并增加扫码、首件核对或系统防错。",
    verification:"100%扫码或按要求重新核对后放行。",
    prevention:"建立标签版本、扫码校验、换线清场和首件包装确认。"
  },
  {
    name:"错货/错型号", category:"产品符合性", grade:"Critical", source:"包装过程",
    functionImpact:"功能失效", safetyImpact:"明确", rework:"容易", visibility:"高度可见", hardStop:true,
    containment:"立即停止出货并隔离整张订单。",
    rootCause:"检查订单、拣货、物料标识、仓库库位、条码和换线清场。",
    corrective:"重新分拣，并建立条码或双人核对防错。",
    verification:"关键型号与条码100%核对后重新验货。",
    prevention:"建立订单-物料-包装三方校验和仓储防错。"
  },
  {
    name:"包装破损", category:"包装保护", grade:"Minor", source:"搬运/运输",
    functionImpact:"轻微", safetyImpact:"无", rework:"容易", visibility:"高度可见", hardStop:false,
    containment:"隔离破损包装并检查内部产品是否受损。",
    rootCause:"检查包装强度、堆码、搬运、装卸、运输与防护。",
    corrective:"加强包装结构、缓冲、防护或搬运方式。",
    verification:"必要时做跌落/堆码/运输模拟并复检外观。",
    prevention:"建立包装验证标准和运输异常追溯。"
  }
];

const sourceBase: Record<Source, number> = {
  "模具/治具":10, "材料":9, "设备":8, "工艺参数":8, "装配/治具":9,
  "人工作业":4, "包装过程":5, "搬运/运输":3, "环境/储存":6, "原因未知":5
};

const patternScore: Record<Pattern, number> = {
  "固定位置":5, "同一模穴/治具":5, "同批材料":5, "连续发生":4, "同一设备":4,
  "同一时间段":3, "同一人员/班次":3, "同一包装批次":3, "随机分布":0, "未知":1
};

const gradeScore: Record<Grade,number> = { Minor:8, Major:20, Critical:30 };
const functionScore: Record<FunctionImpact,number> = { "无":0, "轻微":5, "明显":10, "功能失效":15 };
const safetyScore: Record<SafetyImpact,number> = { "无":0, "潜在":10, "明确":20 };
const spreadScore: Record<Spread,number> = { "单件":0, "局部":2, "批次":4, "全批":5 };
const reworkScore: Record<Rework,number> = { "容易":0, "一般":1, "困难":2, "不可返工":3 };
const visibilityScore: Record<Visibility,number> = { "隐蔽":0, "一般可见":1, "明显":2, "高度可见":2 };

function rateScore(rate:number) {
  if (rate <= 0.01) return 1;
  if (rate <= 0.03) return 3;
  if (rate <= 0.05) return 5;
  if (rate <= 0.10) return 7;
  return 10;
}

function riskLevel(score:number) {
  if (score >= 65) return "极高";
  if (score >= 45) return "高";
  if (score >= 25) return "中";
  return "低";
}

function systemicText(score:number) {
  if (score >= 13) return "高度系统性";
  if (score >= 9) return "明显系统性倾向";
  if (score >= 5) return "存在一定重复性";
  return "偏偶发 / 低重复性";
}

function confidenceText(score:number) {
  if (score >= 75) return "高";
  if (score >= 50) return "中";
  return "低";
}

function decision(aql:string, risk:string, hardStop:boolean, confidence:string) {
  if (hardStop) return "拒收 / 停止出货";
  if (confidence === "低") return "待确认 / 扩大检查";
  const key = `${aql}|${risk}`;
  const map: Record<string,string> = {
    "合格|低":"接受",
    "合格|中":"接受 + 记录改善",
    "合格|高":"暂停放行 / 扩大检查",
    "合格|极高":"Hold / 拒收",
    "不合格|低":"条件接受候选（需授权）",
    "不合格|中":"返工/筛选后复检",
    "不合格|高":"拒收 + 隔离相关批次",
    "不合格|极高":"拒收 + 停止出货 + 启动纠正措施",
  };
  return map[key] || "待确认";
}

function SelectField({
  label,value,onChange,children
}:{
  label:string; value:string; onChange:(v:string)=>void; children:React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-600">{label}</label>
      <select
        value={value}
        onChange={e=>onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        {children}
      </select>
    </div>
  );
}

export default function QualityDecisionPage() {
  const [defectName,setDefectName] = useState("披锋/毛边");
  const [aqlResult,setAqlResult] = useState("不合格");
  const [sampleQty,setSampleQty] = useState("80");
  const [defectiveQty,setDefectiveQty] = useState("6");

  const selected = defects.find(d=>d.name===defectName) || defects[0];

  const [source,setSource] = useState<Source>(selected.source);
  const [pattern,setPattern] = useState<Pattern>("固定位置");
  const [spread,setSpread] = useState<Spread>("批次");
  const [functionImpact,setFunctionImpact] = useState<FunctionImpact>(selected.functionImpact);
  const [safetyImpact,setSafetyImpact] = useState<SafetyImpact>(selected.safetyImpact);
  const [rework,setRework] = useState<Rework>(selected.rework);
  const [visibility,setVisibility] = useState<Visibility>(selected.visibility);
  const [customerForbidden,setCustomerForbidden] = useState(false);

  const [sourceConfirmed,setSourceConfirmed] = useState(true);
  const [evidenceEnough,setEvidenceEnough] = useState(true);
  const [traceable,setTraceable] = useState(true);
  const [historyCase,setHistoryCase] = useState(false);

  function chooseDefect(name:string) {
    const next = defects.find(d=>d.name===name);
    if (!next) return;
    setDefectName(name);
    setSource(next.source);
    setFunctionImpact(next.functionImpact);
    setSafetyImpact(next.safetyImpact);
    setRework(next.rework);
    setVisibility(next.visibility);
  }

  const analysis = useMemo(()=>{
    const sample = Math.max(0, Number(sampleQty) || 0);
    const defective = Math.max(0, Number(defectiveQty) || 0);
    const rate = sample > 0 ? defective / sample : 0;

    const systemic = Math.min(15, sourceBase[source] + patternScore[pattern]);
    const score =
      gradeScore[selected.grade] +
      functionScore[functionImpact] +
      safetyScore[safetyImpact] +
      systemic +
      rateScore(rate) +
      spreadScore[spread] +
      reworkScore[rework] +
      visibilityScore[visibility];

    const risk = riskLevel(score);
    const hardStop =
      selected.hardStop ||
      selected.grade === "Critical" ||
      safetyImpact === "明确" ||
      customerForbidden;

    const confidenceScore =
      (sourceConfirmed ? 25 : 0) +
      (evidenceEnough ? 25 : 0) +
      (traceable ? 20 : 0) +
      (historyCase ? 10 : 0) +
      (pattern !== "未知" ? 20 : 0);

    const confidence = confidenceText(confidenceScore);
    const recommendation = decision(aqlResult,risk,hardStop,confidence);

    return {
      rate, systemic, score, risk, hardStop,
      confidenceScore, confidence, recommendation
    };
  },[
    sampleQty,defectiveQty,source,pattern,spread,functionImpact,safetyImpact,
    rework,visibility,selected,aqlResult,customerForbidden,
    sourceConfirmed,evidenceEnough,traceable,historyCase
  ]);

  const riskStyle =
    analysis.risk === "极高"
      ? "border-red-300 bg-red-50 text-red-700"
      : analysis.risk === "高"
      ? "border-orange-300 bg-orange-50 text-orange-700"
      : analysis.risk === "中"
      ? "border-amber-300 bg-amber-50 text-amber-700"
      : "border-emerald-300 bg-emerald-50 text-emerald-700";

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
          <Link href="/tools" className="text-sm font-semibold text-slate-500 transition hover:text-blue-600">
            ← 返回 Factory Tools
          </Link>

          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-blue-700">
                QA-01 · QUALITY DECISION
              </div>
              <h1 className="mt-4 text-3xl font-black md:text-4xl">智能质量判定</h1>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                AQL 只告诉你数量是否超标；这里继续判断这个不良是偶发还是系统性、
                是否可能扩散、实际风险有多高，以及应该先从哪里开始改善。
              </p>
            </div>

            <div className="flex gap-2 text-xs font-bold">
              <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">基础判断免费</span>
              <span className="rounded-full bg-amber-50 px-3 py-2 text-amber-700">专业报告为付费能力</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">01 · BASIC FACTS</div>
            <h2 className="mt-2 text-xl font-black">现场事实</h2>
            <p className="mt-2 text-xs leading-6 text-slate-500">
              先填你真正知道的事实，不需要为了“让系统判断”去猜答案。
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <SelectField label="不良名称" value={defectName} onChange={chooseDefect}>
                {defects.map(d=><option key={d.name}>{d.name}</option>)}
              </SelectField>

              <SelectField label="AQL标准结果" value={aqlResult} onChange={setAqlResult}>
                <option>合格</option>
                <option>不合格</option>
              </SelectField>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-600">抽样数量</label>
                <input type="number" min="1" value={sampleQty} onChange={e=>setSampleQty(e.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-600">不良品数量</label>
                <input type="number" min="0" value={defectiveQty} onChange={e=>setDefectiveQty(e.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">02 · PATTERN</div>
            <h2 className="mt-2 text-xl font-black">来源与分布</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <SelectField label="怀疑来源" value={source} onChange={v=>setSource(v as Source)}>
                {Object.keys(sourceBase).map(v=><option key={v}>{v}</option>)}
              </SelectField>

              <SelectField label="分布模式" value={pattern} onChange={v=>setPattern(v as Pattern)}>
                {Object.keys(patternScore).map(v=><option key={v}>{v}</option>)}
              </SelectField>

              <SelectField label="影响范围" value={spread} onChange={v=>setSpread(v as Spread)}>
                <option>单件</option><option>局部</option><option>批次</option><option>全批</option>
              </SelectField>

              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-bold text-slate-500">默认不良等级</div>
                <div className="mt-1 font-black">{selected.grade}</div>
                <div className="mt-1 text-xs text-slate-400">{selected.category}</div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">03 · ACTUAL IMPACT</div>
            <h2 className="mt-2 text-xl font-black">实际影响</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <SelectField label="功能影响" value={functionImpact} onChange={v=>setFunctionImpact(v as FunctionImpact)}>
                <option>无</option><option>轻微</option><option>明显</option><option>功能失效</option>
              </SelectField>

              <SelectField label="安全 / 法规影响" value={safetyImpact} onChange={v=>setSafetyImpact(v as SafetyImpact)}>
                <option>无</option><option>潜在</option><option>明确</option>
              </SelectField>

              <SelectField label="可返工性" value={rework} onChange={v=>setRework(v as Rework)}>
                <option>容易</option><option>一般</option><option>困难</option><option>不可返工</option>
              </SelectField>

              <SelectField label="客户可见性" value={visibility} onChange={v=>setVisibility(v as Visibility)}>
                <option>隐蔽</option><option>一般可见</option><option>明显</option><option>高度可见</option>
              </SelectField>
            </div>

            <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-sm">
              <input type="checkbox" checked={customerForbidden} onChange={e=>setCustomerForbidden(e.target.checked)} />
              <span>
                <b className="text-red-700">客户明确禁止此类不良</b>
                <span className="ml-2 text-red-500">勾选后进入 Hard Stop，不允许风险评分覆盖。</span>
              </span>
            </label>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">04 · EVIDENCE</div>
            <h2 className="mt-2 text-xl font-black">证据完整度</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["来源已确认",sourceConfirmed,setSourceConfirmed],
                ["照片/测量证据充分",evidenceEnough,setEvidenceEnough],
                ["可追溯批次/穴号/机器",traceable,setTraceable],
                ["有历史同类案例",historyCase,setHistoryCase],
              ].map(([label,value,setter])=>(
                <label key={label as string} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold">
                  <input type="checkbox" checked={value as boolean} onChange={e=>(setter as (v:boolean)=>void)(e.target.checked)} />
                  {label as string}
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5 self-start lg:sticky lg:top-5">
          <section className="rounded-3xl bg-[#0f2747] p-6 text-white shadow-sm md:p-8">
            <div className="text-xs font-bold tracking-[0.18em] text-blue-300">DECISION ENGINE</div>
            <h2 className="mt-2 text-2xl font-black">系统判定</h2>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">不良品率</div>
                <div className="mt-2 text-2xl font-black">{(analysis.rate*100).toFixed(1)}%</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">风险评分</div>
                <div className="mt-2 text-2xl font-black text-blue-300">{analysis.score}</div>
              </div>
            </div>

            <div className={`mt-4 rounded-2xl border p-5 ${riskStyle}`}>
              <div className="text-xs font-bold tracking-[0.14em] opacity-70">RISK LEVEL</div>
              <div className="mt-2 text-3xl font-black">{analysis.risk}风险</div>
            </div>

            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">系统性判断</div>
                <div className="mt-2 font-bold">{systemicText(analysis.systemic)}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-400">判断可信度</div>
                <div className="mt-2 font-bold">{analysis.confidence}</div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-slate-400">Hard Stop</div>
              <div className={`mt-2 text-lg font-black ${analysis.hardStop ? "text-red-300" : "text-emerald-300"}`}>
                {analysis.hardStop ? "已触发" : "未触发"}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
              <div className="text-xs font-bold tracking-[0.14em] text-amber-300">RECOMMENDATION</div>
              <div className="mt-2 text-xl font-black">{analysis.recommendation}</div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">WHY</div>
            <h2 className="mt-2 text-xl font-black">为什么这样判断</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              本次为 <b>{selected.name}</b>，默认等级 <b>{selected.grade}</b>；
              当前来源为 <b>{source}</b>，分布为 <b>{pattern}</b>，
              系统性评分 {analysis.systemic}/15，判断为
              <b> {systemicText(analysis.systemic)}</b>。
              抽样 {sampleQty || 0} 件，发现不良品 {defectiveQty || 0} 件，
              不良品率 {(analysis.rate*100).toFixed(1)}%。
              综合功能、安全/法规、扩散范围、返工性和客户可见性后，
              风险等级为 <b>{analysis.risk}</b>。
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold tracking-[0.16em] text-blue-600">ACTION PLAN</div>
            <h2 className="mt-2 text-xl font-black">从哪里开始改善</h2>

            {[
              ["01","立即控制",selected.containment],
              ["02","原因确认",selected.rootCause],
              ["03","纠正措施",selected.corrective],
              ["04","效果验证",selected.verification],
              ["05","预防再发生",selected.prevention],
            ].map(([n,title,body])=>(
              <div key={n} className="mt-4 grid grid-cols-[42px_1fr] gap-3 border-t border-slate-100 pt-4 first:border-t-0">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-700">{n}</div>
                <div>
                  <div className="text-sm font-black">{title}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <div className="mb-7 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.2em] text-blue-600">FREE VS PROFESSIONAL</div>
            <h2 className="mt-3 text-2xl font-black">免费版解决“这一次怎么判断”，专业版解决“以后怎么管理”</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              我们不会故意把免费版做得不能用。免费版负责让你完成一次真实质量判断；
              专业版的价值在于把判断变成可追溯、可修改、可复用、可正式交付的企业质量资产。
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid grid-cols-[1.25fr_1fr_1fr] bg-[#0f2747] text-sm font-bold text-white">
              <div className="p-4">能力</div>
              <div className="p-4 text-center">在线免费版</div>
              <div className="p-4 text-center text-amber-300">专业版 / 付费</div>
            </div>

            {[
              ["核心质量判断","✓ 完整可用","✓ 完整可用"],
              ["AQL结果 + 风险判断","✓","✓"],
              ["系统性 / 批量性分析","✓","✓"],
              ["基础改善建议","✓","✓ 更完整、可编辑"],
              ["多种不良同时分析","单次一个主要不良","✓ 多不良综合判断"],
              ["正式判定报告","—","✓ 可生成、打印、存档"],
              ["企业自己的不良库 / 参数","—","✓ 可修改和扩充"],
              ["历史案例与最终处理记录","—","✓ 可持续积累"],
              ["离线长期使用","—","✓"],
              ["公司Logo / 客户规则 / 多语言","—","✓ 可定制"],
              ["适合场景","临时判断、体验、现场快速参考","企业质量记录、客户报告、长期管理"],
            ].map(([cap,free,pro],i)=>(
              <div key={cap} className={`grid grid-cols-[1.25fr_1fr_1fr] text-sm ${i%2 ? "bg-slate-50" : "bg-white"}`}>
                <div className="border-t border-slate-200 p-4 font-semibold text-slate-700">{cap}</div>
                <div className="border-l border-t border-slate-200 p-4 text-center text-slate-600">{free}</div>
                <div className="border-l border-t border-slate-200 p-4 text-center font-semibold text-slate-800">{pro}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="text-xs font-bold tracking-[0.14em] text-amber-700">PROFESSIONAL VERSION</div>
            <div className="mt-2 font-black text-slate-900">专业版不是为“看一个答案”收费，而是为企业持续使用和正式管理收费。</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              如果你只需要偶尔判断一个问题，免费在线版已经足够；如果你需要把判断保存下来、
              用于客户沟通、内部追溯、改善闭环、建立自己的质量数据库，那么专业版才真正有价值。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
