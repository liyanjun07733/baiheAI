export type SearchEntry = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string[];
};

export const searchIndex: SearchEntry[] = [
  {
    title: "BaiheAI 首页",
    href: "/",
    category: "首页",
    description: "中国企业进入泰国及东南亚市场：商业咨询、资源对接、项目落地与 AI 数字化。",
    keywords: ["首页", "BaiheAI", "泰国", "东南亚", "中国企业", "出海", "商业咨询", "资源对接", "项目落地", "AI"],
  },
  {
    title: "企业服务中心",
    href: "/services",
    category: "服务",
    description: "泰国投资咨询、BOI、项目落地、签证、工作许可、翻译、本地资源与 AI 服务。",
    keywords: ["服务", "AI官网", "网站", "获客", "自动化", "泰国投资", "BOI", "公司设立", "签证", "工作许可", "厂房", "仓库", "办公室", "翻译", "商务陪同", "数字化"],
  },
  {
    title: "泰国投资与项目落地",
    href: "/thailand-investment",
    category: "泰国投资",
    description: "中国企业进入泰国的投资方向、公司与项目落地、本地资源和执行协助。",
    keywords: ["泰国投资", "投资泰国", "项目落地", "泰国公司", "工厂", "厂房", "工业园", "办公室", "仓库", "本地资源", "考察", "投资咨询"],
  },
  {
    title: "政策与实操中心",
    href: "/policies",
    category: "政策",
    description: "BOI、公司设立、签证、工作许可、厂房及泰国项目实操相关政策入口。",
    keywords: ["政策", "泰国政策", "BOI政策", "BOI申请", "优惠政策", "公司注册", "公司设立", "签证", "商务签证", "工作签证", "工作许可", "work permit", "厂房", "实操", "流程", "材料"],
  },
  {
    title: "泰国公司注册流程与材料清单",
    href: "/blog/thailand-company-registration-guide",
    category: "泰国公司",
    description: "泰国公司注册条件、股东董事材料、标准注册流程、税务社保与银行开户前期整理。",
    keywords: ["泰国公司注册", "泰国注册公司", "DBD", "股东", "董事", "注册资本", "注册地址", "VAT", "公司材料"],
  },
  {
    title: "泰国 Non-B 工作签证与 Work Permit 办理指南",
    href: "/blog/thailand-non-b-work-permit-guide",
    category: "签证与工作许可",
    description: "Non-B、Work Permit、WP3、雇主资质与员工材料的前期办理路径整理。",
    keywords: ["Non-B", "Work Permit", "工作签证", "工作许可", "WP3", "e-Visa", "泰国劳工部", "外籍员工"],
  },
  {
    title: "免费资料下载",
    href: "/resources",
    category: "资料",
    description: "泰国投资、BOI、项目落地与 AI 出海相关免费资料下载。",
    keywords: ["资料", "下载", "免费", "PDF", "Word", "Excel", "政策资料", "清单", "模板", "知识共享", "文件"],
  },
  {
    title: "案例中心",
    href: "/cases",
    category: "案例",
    description: "BaiheAI 企业服务、泰国落地与 AI 数字化相关项目案例。",
    keywords: ["案例", "客户案例", "成功案例", "项目", "企业", "落地案例", "AI案例", "成果"],
  },
  {
    title: "知识中心",
    href: "/blog",
    category: "知识",
    description: "政策文章、项目清单、实操框架和 AI 出海经验。",
    keywords: ["知识", "文章", "博客", "政策文章", "泰国知识", "投资文章", "BOI文章", "实操", "指南", "出海经验"],
  },
  {
    title: "关于 BaiheAI",
    href: "/about",
    category: "关于我们",
    description: "了解 BaiheAI、团队分工、服务方向和中国—泰国业务协作能力。",
    keywords: ["关于", "团队", "人才", "人员", "顾问", "资质", "经验", "BaiheAI", "公司介绍", "团队介绍"],
  },
  {
    title: "免费咨询与项目需求",
    href: "/free-plan",
    category: "咨询",
    description: "提交企业需求，获取泰国投资落地、BOI、签证、场地、翻译或 AI 出海方向建议。",
    keywords: ["咨询", "免费咨询", "联系", "项目需求", "方案", "BOI咨询", "投资咨询", "签证咨询", "厂房咨询", "AI方案"],
  },
  {
    title: "泰国验厂服务",
    href: "/factory-audit",
    category: "验厂",
    description: "工厂验厂辅导与客户委托泰国现场验厂，覆盖准备、现场考察、记录与沟通。",
    keywords: ["泰国验厂", "泰国代验厂", "工厂验厂", "客户验厂", "供应商验厂", "工厂考察", "现场考察"],
  },
  {
    title: "泰国工厂客户验厂前准备清单",
    href: "/blog/thailand-factory-audit-preparation",
    category: "验厂",
    description: "帮助工厂准备客户来厂审核的现场、资料、流程、人员与沟通事项。",
    keywords: ["验厂准备", "客户验厂", "工厂审核", "泰国工厂", "验厂清单"],
  },
  {
    title: "客户委托泰国现场验厂",
    href: "/blog/thailand-customer-commissioned-factory-audit",
    category: "验厂",
    description: "客户没有时间赴泰时，委托当地团队前往供应商或工厂现场考察与记录。",
    keywords: ["代验厂", "委托验厂", "泰国供应商", "现场考察", "工厂核实"],
  },
  {
    title: "泰国供应商验厂检查清单",
    href: "/blog/thailand-supplier-factory-inspection-checklist",
    category: "供应商",
    description: "采购方现场考察泰国供应商时的企业、生产、设备、质量、仓储与沟通检查框架。",
    keywords: ["供应商验厂", "泰国供应商", "采购验厂", "工厂考察", "验厂清单"],
  },
  {
    title: "中国企业去泰国建厂流程",
    href: "/blog/thailand-factory-setup-process",
    category: "泰国建厂",
    description: "从项目判断、政策路径、场地、设备、人员到投产准备的泰国建厂框架。",
    keywords: ["泰国建厂", "泰国设厂", "中国企业泰国建厂", "建厂流程", "工厂落地"],
  },
  {
    title: "泰国 BOI 申请前准备",
    href: "/blog/thailand-boi-application-conditions",
    category: "BOI",
    description: "申请 BOI 前需要梳理的项目活动、产品工艺、设备、投资、人员与时间信息。",
    keywords: ["BOI申请", "泰国BOI", "BOI条件", "投资促进", "BOI咨询"],
  },
  {
    title: "泰国工业园选址指南",
    href: "/blog/thailand-industrial-estate-selection-guide",
    category: "选址",
    description: "比较泰国工业园时应考虑客户、物流、用工、基础设施、项目限制与总成本。",
    keywords: ["泰国工业园", "泰国厂房", "泰国选址", "工业园区", "泰国建厂选址"],
  },
  {
    title: "中国企业投资泰国常见风险",
    href: "/blog/thailand-investment-risks",
    category: "风险",
    description: "泰国投资落地常见的信息、场地、审批、合作边界和时间计划风险。",
    keywords: ["泰国投资风险", "泰国建厂风险", "投资泰国", "项目落地", "避坑"],
  },
  {
    title: "中国企业投资泰国第一次考察清单",
    href: "/blog/chinese-company-thailand-investment-guide",
    category: "指南",
    description: "第一次赴泰国考察前建议准备的项目、场地、政策、人员、设备与决策信息。",
    keywords: ["投资泰国", "泰国考察", "中国企业泰国", "泰国投资咨询", "泰国建厂考察"],
  },
];
