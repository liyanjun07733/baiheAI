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
];
