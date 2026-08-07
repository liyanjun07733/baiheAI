export type TeamContact = {
  label: string;
  value: string;
  href?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  roleEn?: string;
  image: string;
  focus: string[];
  responsibility: string;
  shortBio: string;
  contacts: TeamContact[];
  services: string[];
  detailTitle?: string;
  detailParagraphs?: string[];
};

export const team: TeamMember[] = [
  {
    name: "陈友清",
    role: "泰国投资顾问",
    roleEn: "Investment Advisor",
    image: "/team/chen-youqing.jpg",
    focus: ["泰语/英语商务支持", "BOI 文件申请", "工厂前期咨询"],
    responsibility:
      "负责泰国投资相关前期沟通、BOI 文件申请支持、工厂前期咨询，以及泰语/英语商务支持。",
    shortBio:
      "面向企业在泰国投资与工厂落地过程中的前期咨询、文件沟通与商务协作需求，提供实务支持。",
    contacts: [
      { label: "Tel", value: "+66 096 238 8093", href: "tel:+66962388093" },
      { label: "Line / WhatsApp", value: "+66 096 238 8093" },
      { label: "Email", value: "chenyouqing133@gmail.com", href: "mailto:chenyouqing133@gmail.com" },
      { label: "WeChat", value: "Thai_Consultant" },
      { label: "微信", value: "18121067063" },
    ],
    services: [
      "工厂前期投入咨询 & 产线布局优化",
      "越南 / 泰国产品本地化开发 & 工艺改良",
      "智能设备安装调试 & 工厂数字化升级",
      "企业网站建设 & 内部知识库体系搭建",
      "AI 智能体部署 & 海外市场精准引流获客",
    ],
    detailTitle: "详细能力介绍",
    detailParagraphs: [
      "围绕泰国投资与工厂项目的前期阶段，协助企业进行商务沟通、资料衔接与项目需求梳理。",
      "可提供泰语 / 英语商务支持，并参与 BOI 文件申请相关的资料沟通与协调。",
      "同时可结合工厂前期投入、产线布局、产品本地化、工艺改良、智能设备与数字化建设等实际需求参与项目协作。",
    ],
  },
  {
    name: "李延军",
    role: "资深工厂运营与数字化转型顾问",
    roleEn: "Senior Consultant · Factory Operations & Digital Transformation",
    image: "/team/li-yanjun.jpg",
    focus: [
      "工厂前期规划",
      "产品开发与工艺改良",
      "泰 / 越建厂落地",
      "智能设备部署",
      "企业网站 / AI 智能体搭建",
      "AI 数字化获客",
    ],
    responsibility:
      "负责工厂运营、建厂前期规划、产品与工艺优化、智能设备部署，以及企业数字化与 AI 获客相关工作。",
    shortBio:
      "聚焦工厂运营与数字化转型，覆盖泰国 / 越南建厂落地、产品工艺优化、智能设备、企业网站与 AI 智能体建设。",
    contacts: [
      { label: "中国", value: "+86 13003137828", href: "tel:+8613003137828" },
      { label: "泰国", value: "+66 964080781", href: "tel:+66964080781" },
      { label: "微信", value: "13003137828" },
      { label: "LINE", value: "964080781" },
      { label: "邮箱", value: "liyanjun0773@126.com", href: "mailto:liyanjun0773@126.com" },
    ],
    services: [
      "工厂前期投入咨询 & 产线布局优化",
      "越南 / 泰国产品本地化开发 & 工艺改良",
      "智能设备安装调试 & 工厂数字化升级",
      "企业网站建设 & 内部知识库体系搭建",
      "AI 智能体部署 & 海外市场精准引流获客",
    ],
    detailTitle: "详细能力介绍",
    detailParagraphs: [
      "核心能力覆盖工厂前期规划、产品开发与工艺改良、泰国 / 越南建厂落地，以及生产运营相关的数字化升级。",
      "可参与智能设备部署、企业网站与内部知识库体系搭建，并结合 AI 智能体提升企业内部协作与客户沟通效率。",
      "同时面向企业海外市场拓展，结合数字化工具与 AI 技术开展精准引流与获客体系建设。",
    ],
  },
];
