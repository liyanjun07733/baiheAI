import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '泰国投资免费资料下载｜BOI・建厂・项目清单｜BaiheAI',
  description: '免费查看泰国投资、BOI、建厂前期、项目沟通与落地清单等企业实用资料。',
  alternates: { canonical: "https://www.baihediy.com/resources" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
