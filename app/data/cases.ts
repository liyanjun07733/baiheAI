export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseItem = {
  slug: string;
  title: string;
  industry: string;
  market: string;
  summary: string;
  challenge: string[];
  solution: string[];
  result: string[];
  services?: string[];
  clientName?: string;
  location?: string;
  projectPeriod?: string;
  cover?: string;
  gallery?: string[];
  metrics?: CaseMetric[];
  note?: string;
  isDemo?: boolean;
};

// 目前保留“项目方法示例”。收到真实客户资料后，只需要替换/新增这里的数据。
// 不要填写未经客户授权的名称、数据或图片。
export const cases: CaseItem[] = [
  {
    slug: "manufacturing-thailand-entry",
    title: "中国制造企业进入泰国",
    industry: "制造业",
    market: "Thailand",
    summary: "围绕泰国市场进入、品牌展示、本地沟通与数字化获客建立一套可执行的落地路径。",
    challenge: ["不熟悉泰国市场进入流程", "缺少本地资源与商务沟通支持", "海外官网与询盘入口不完整"],
    solution: ["梳理市场进入与项目落地事项", "协助对接本地资源与商务服务", "建设多语言官网并接入 WhatsApp / LINE 询盘入口"],
    result: ["形成更清晰的泰国市场进入路径", "建立统一的海外品牌展示与客户咨询入口", "为后续本地业务推进保留可持续数字化基础"],
    services: ["泰国市场进入", "本地资源对接", "多语言官网", "海外询盘"],
    note: "当前为项目方法示例，不代表已公开的具体客户项目。真实客户名称、数据与成果将在获得授权后更新。",
    isDemo: true,
  },
  {
    slug: "hotel-digital-upgrade",
    title: "酒店与旅游品牌数字化升级",
    industry: "酒店旅游",
    market: "Southeast Asia",
    summary: "以多语言内容、线上咨询和 AI 客服为核心，提高海外客户了解与沟通效率。",
    challenge: ["海外客户信息获取不完整", "多语言沟通成本高", "咨询渠道分散"],
    solution: ["多语言官网结构设计", "整合 LINE / WhatsApp 等沟通入口", "规划 AI 客服与常见问题自动回复"],
    result: ["改善海外客户浏览体验", "统一客户咨询入口", "降低重复沟通工作量"],
    services: ["多语言官网", "AI 客服", "客户咨询入口"],
    note: "当前为项目方法示例，不代表已公开的具体客户项目。",
    isDemo: true,
  },
  {
    slug: "trade-overseas-leads",
    title: "贸易企业海外获客体系",
    industry: "国际贸易",
    market: "Thailand / SEA",
    summary: "通过官网、内容、搜索和询盘流程，建立面向东南亚客户的基础获客体系。",
    challenge: ["海外客户来源不稳定", "企业线上品牌信任度不足", "询盘流程缺少统一管理"],
    solution: ["优化官网与服务页面", "规划 SEO 与内容主题", "设计客户咨询与跟进路径"],
    result: ["形成持续内容与搜索获客基础", "提高企业海外展示完整度", "建立标准化询盘承接流程"],
    services: ["海外官网", "SEO", "内容营销", "询盘流程"],
    note: "当前为项目方法示例，不代表已公开的具体客户项目。",
    isDemo: true,
  },
];
