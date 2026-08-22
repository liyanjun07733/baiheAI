import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const data: Record<string, {
  title:string; en:string; intro:string;
  sections:{title:string; desc:string; topics:string[]}[];
  outcome:string[];
}> = {
  "quality-management": {
    title:"质量管理", en:"Quality Management",
    intro:"从“发现不良”进一步走到“判断风险、找到原因、完成整改、避免重复发生”。",
    sections:[
      {title:"检验基础",desc:"建立统一的检验逻辑。",topics:["IQC / IPQC / OQC","AQL抽样","Critical / Major / Minor","Defect vs Defective Unit","检验报告"]},
      {title:"异常处理",desc:"出现问题后先控制风险，再找原因。",topics:["隔离与Containment","8D","CAPA","5Why","鱼骨图","SCAR"]},
      {title:"质量策划",desc:"在问题发生前把风险想清楚。",topics:["FMEA","Control Plan","检验标准","限度样","首件确认"]},
      {title:"数据与改善",desc:"从单次判定走向长期趋势。",topics:["不良率趋势","供应商质量","重复不良","Pareto","月度质量看板"]},
    ],
    outcome:["会判断一批货是否可接受","会区分偶发问题和系统性问题","会写整改并验证是否有效","会把质量数据沉淀下来"]
  },
  "warehouse-logistics": {
    title:"仓库与进出货", en:"Warehouse & Logistics",
    intro:"仓库不是只记录数量，而是保证物料找得到、数量对得上、批次追得到、出货不会错。",
    sections:[
      {title:"收货与入库",desc:"从供应商来料开始建立追溯。",topics:["收货确认","送货单","批次号","IQC状态","待检/合格/隔离"]},
      {title:"库存管理",desc:"把库存从“有多少”变成“在哪里、哪一批、能不能用”。",topics:["库位","FIFO","安全库存","盘点","呆滞料","批次追溯"]},
      {title:"生产领退料",desc:"保证生产用料准确并可回溯。",topics:["领料","补料","退料","超耗","BOM齐套","线边库存"]},
      {title:"出货与装柜",desc:"减少错货、少货、包装和装柜问题。",topics:["Pick List","Packing List","条码核对","装柜顺序","装柜检查","出货照片"]},
    ],
    outcome:["库存数量和批次更清楚","减少错料错货","建立可追溯的进出记录","让仓库和生产数据能对得上"]
  },
  "production-management": {
    title:"生产管理", en:"Production Management",
    intro:"生产管理的重点不是把表格填满，而是提前看见缺料、堵点、异常和交期风险。",
    sections:[
      {title:"订单与计划",desc:"从订单倒推生产资源。",topics:["生产订单","交期","BOM","物料需求","工时","产能"]},
      {title:"物料齐套",desc:"生产前先确认是否真的具备开工条件。",topics:["齐套检查","缺料清单","替代料","在制品","关键件"]},
      {title:"现场执行",desc:"让计划和实际形成闭环。",topics:["开工/完工","日产量","工序流转","不良","返工","停机"]},
      {title:"效率改善",desc:"找出影响交付和成本的真正瓶颈。",topics:["节拍","线平衡","瓶颈工序","OEE","换线","异常时间"]},
    ],
    outcome:["知道订单什么时候有风险","开工前发现缺料","每天看得见计划和实际差距","把改善集中在真正瓶颈"]
  },
  "technical-documentation": {
    title:"技术资料", en:"Technical Documentation",
    intro:"技术资料的价值是让同一个产品在不同人、不同时间、不同供应商手里都能按同一个标准做出来。",
    sections:[
      {title:"产品定义",desc:"把产品要求写清楚。",topics:["图纸","规格书","关键尺寸","材料","颜色","表面处理"]},
      {title:"制造文件",desc:"把技术要求转成现场能执行的文件。",topics:["BOM","SOP","WI","工艺参数","设备/治具要求","包装规范"]},
      {title:"变更管理",desc:"防止新旧版本混用。",topics:["ECR","ECN","版本号","生效日期","旧料处理","客户批准"]},
      {title:"测试资料",desc:"让验证方法一致。",topics:["测试方法","量具","治具","验收标准","记录表","Golden Sample"]},
    ],
    outcome:["资料版本不再混乱","现场知道按什么做","变更可追踪","供应商和客户使用同一套技术语言"]
  },
  "product-development": {
    title:"新产品开发", en:"New Product Development",
    intro:"开发不是先画图，而是先确认为什么要做、解决什么问题、怎样证明它真的比原来更好。",
    sections:[
      {title:"需求与机会",desc:"从市场/客户场景找真正机会。",topics:["VOC","使用场景","痛点","目标成本","竞品","成功指标"]},
      {title:"技术方案",desc:"在结构、材料、工艺、成本之间做平衡。",topics:["概念方案","材料选择","DFM","DFA","风险评估","成本估算"]},
      {title:"样品与验证",desc:"用证据而不是感觉决定方案。",topics:["Prototype","EVT/DVT","功能测试","可靠性","极限测试","客户试用"]},
      {title:"NPI与量产",desc:"把样品成功转成稳定量产。",topics:["试产","PFMEA","Control Plan","SOP","PPAP/承认","Ramp-up"]},
    ],
    outcome:["知道开发从哪里开始","减少反复改样","让验证有明确指标","把样品顺利转成稳定量产"]
  },
  "customer-pain-points": {
    title:"客户痛点与产品改善", en:"Customer Pain Point Improvement",
    intro:"客户说“这个不好用”只是现象。真正的价值是找到什么场景不好用、为什么不好用、改善后客户得到什么。",
    sections:[
      {title:"痛点识别",desc:"从抱怨转成具体问题。",topics:["客户声音","使用流程","失败场景","频率","影响","替代方案"]},
      {title:"问题量化",desc:"把模糊问题变成可以测试的指标。",topics:["力量","时间","寿命","尺寸","安全","便利性","成本"]},
      {title:"改善方案",desc:"不要只修表面现象。",topics:["根因","结构改善","材料改善","工艺改善","防错","成本影响"]},
      {title:"价值验证",desc:"证明改善真的对客户有用。",topics:["A/B样品","现场试用","对比测试","客户反馈","量产验证"]},
    ],
    outcome:["把客户抱怨变成工程指标","知道改善优先级","用测试证明改善有效","让产品改善产生客户价值"]
  },
  "co-development": {
    title:"客户共同开发", en:"Co-development",
    intro:"共同开发不是客户说什么就照做，而是双方一起定义问题、确认边界、验证方案并承担各自该确认的内容。",
    sections:[
      {title:"需求澄清",desc:"先把模糊需求变成共同语言。",topics:["目标用户","使用环境","接口","性能","成本","法规","交期"]},
      {title:"方案评审",desc:"尽早暴露技术和供应链风险。",topics:["Concept Review","DFM","材料","模具","测试","供应链","成本"]},
      {title:"共同验证",desc:"把客户确认点写进验证计划。",topics:["样件","测试计划","Acceptance Criteria","试用反馈","问题清单"]},
      {title:"量产移交",desc:"确认设计冻结后谁负责什么。",topics:["规格冻结","Golden Sample","变更流程","量产文件","售后反馈"]},
    ],
    outcome:["减少需求反复","建立客户确认节点","共同承担验证责任","从一次订单走向长期产品合作"]
  },
  "supplier-management": {
    title:"供应商与外协管理", en:"Supplier Management",
    intro:"供应商管理不是压价格，而是让质量、交期、成本和改善能力都变得可预测。",
    sections:[
      {title:"供应商开发",desc:"第一次合作前先确认能力。",topics:["能力调查","验厂","设备","质量体系","关键工艺","样品"]},
      {title:"来料与异常",desc:"把来料问题快速控制并反馈。",topics:["IQC","不合格隔离","退货","让步","SCAR","8D"]},
      {title:"绩效管理",desc:"长期看表现，不只看一次问题。",topics:["质量","交期","响应","成本","改善速度","Scorecard"]},
      {title:"共同改善",desc:"把供应商变成稳定的技术资源。",topics:["工艺改善","成本改善","模具维护","材料替代","联合验证"]},
    ],
    outcome:["选供应商更有依据","异常处理更快","长期绩效可量化","让关键供应商一起参与改善"]
  },
};

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const item = data[slug];
  if (!item) return { title: "Factory Knowledge｜BaiheAI" };
  return {
    title: `${item.title}｜BaiheAI Factory Knowledge`,
    description: item.intro,
  };
}

export default async function KnowledgeCategoryPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const item = data[slug];
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
          <Link href="/tools/knowledge" className="text-sm font-bold text-slate-500 hover:text-blue-600">← 返回工厂知识库</Link>
          <div className="mt-7 text-xs font-black tracking-[0.18em] text-blue-600">{item.en.toUpperCase()}</div>
          <h1 className="mt-3 text-4xl font-black">{item.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{item.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {item.sections.map((section,i)=>(
            <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-black text-blue-600">{String(i+1).padStart(2,"0")}</div>
              <h2 className="mt-2 text-xl font-black">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{section.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {section.topics.map(topic=>(
                  <span key={topic} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-[#0f2747] p-7 text-white">
          <div className="text-xs font-black tracking-[0.16em] text-blue-300">WHAT YOU SHOULD BE ABLE TO DO</div>
          <h2 className="mt-2 text-xl font-black">学完这个模块，应该能真正解决什么</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {item.outcome.map(x=>(
              <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">✓ {x}</div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <div className="text-xs font-black tracking-[0.14em] text-amber-700">CONTENT ROADMAP</div>
          <div className="mt-2 font-black">这个栏目会持续加入实战内容</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            后续会逐步加入文章、真实案例拆解、检查清单、Excel模板、在线计算工具和Professional Edition。
            内容重点是让普通工厂人员能够直接执行，而不是只讲理论。
          </p>
        </div>
      </section>
    </main>
  );
}
