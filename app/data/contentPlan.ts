export type ContentStatus = "已发布" | "待完善" | "待发布";

export type ContentItem = {
  title: string;
  slug: string;
  searchIntent: string;
  keywords: string[];
  status: ContentStatus;
  priority: "高" | "中" | "低";
};

export const contentPlan: ContentItem[] = [
  { title: "泰国投资咨询：企业落地前应该先确认什么？", slug: "/guides/thailand-investment-consulting", searchIntent: "了解进入泰国前的整体流程与咨询重点", keywords: ["泰国投资咨询", "泰国投资", "企业泰国落地"], status: "已发布", priority: "高" },
  { title: "泰国 BOI 申请：企业应该提前准备哪些资料？", slug: "/guides/thailand-boi-application", searchIntent: "了解 BOI 申请方向、准备事项与沟通流程", keywords: ["泰国BOI", "BOI申请", "泰国投资优惠"], status: "已发布", priority: "高" },
  { title: "泰国公司注册：外资企业前期要注意什么？", slug: "/guides/thailand-company-registration", searchIntent: "了解公司设立前的结构、资料与落地问题", keywords: ["泰国公司注册", "泰国注册公司", "泰国外资公司"], status: "已发布", priority: "高" },
  { title: "中国企业去泰国建厂：从选址到投产的关键步骤", slug: "/guides/thailand-factory-setup", searchIntent: "寻找泰国建厂流程、选址与前期落地支持", keywords: ["泰国建厂", "泰国工厂", "泰国工业投资"], status: "已发布", priority: "高" },
  { title: "泰国工业园区怎么选？企业选址常见考虑因素", slug: "/guides/thailand-industrial-estate", searchIntent: "比较工业园区、厂房与项目选址因素", keywords: ["泰国工业园", "泰国厂房", "泰国工业地产"], status: "已发布", priority: "中" },
  { title: "泰国工作许可：企业与员工前期准备要点", slug: "/guides/thailand-work-permit", searchIntent: "了解工作许可与企业用工相关准备事项", keywords: ["泰国工作证", "泰国工作许可", "泰国商务签证"], status: "已发布", priority: "中" },
  { title: "泰国厂房租赁还是购买？中国企业如何判断", slug: "/blog/thailand-factory-rent-or-buy", searchIntent: "处于选址和预算阶段，比较租赁与购买方案", keywords: ["泰国厂房出租", "泰国厂房购买", "泰国建厂选址"], status: "已发布", priority: "高" },
  { title: "泰国投资常见成本清单：企业前期预算怎么做", slug: "/blog/thailand-investment-cost-checklist", searchIntent: "寻找投资预算与前期成本构成", keywords: ["泰国投资成本", "泰国建厂成本", "泰国公司成本"], status: "已发布", priority: "高" },
  { title: "中国企业进入泰国，翻译和商务陪同什么时候最需要？", slug: "/blog/thailand-business-translation-support", searchIntent: "寻找泰语翻译、商务陪同与项目沟通支持", keywords: ["泰国商务翻译", "泰语翻译", "泰国商务陪同"], status: "已发布", priority: "中" },
  { title: "AI 如何帮助中国企业在泰国获取客户？", slug: "/blog/ai-lead-generation-thailand", searchIntent: "寻找泰国市场获客、官网、内容和 AI 自动化方案", keywords: ["泰国获客", "AI获客", "东南亚客户开发"], status: "已发布", priority: "高" },
  { title: "泰国建厂前期尽调：企业应该检查哪些关键事项？", slug: "/blog/thailand-factory-due-diligence", searchIntent: "进入选址与签约阶段，检查项目落地风险", keywords: ["泰国建厂尽调", "泰国厂房考察", "泰国投资风险"], status: "已发布", priority: "高" },
  { title: "中国企业进入泰国市场：从官网到第一批询盘怎么规划？", slug: "/blog/china-company-thailand-market-entry", searchIntent: "寻找进入泰国市场与客户开发路径", keywords: ["泰国市场开发", "泰国客户开发", "中国企业出海泰国"], status: "已发布", priority: "高" },
];
