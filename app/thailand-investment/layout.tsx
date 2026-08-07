import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '中国企业投资泰国指南｜BOI・建厂・公司落地｜BaiheAI',
  description: '面向中国企业梳理泰国投资、BOI、公司设立、工厂与项目落地、本地资源及常见风险。',
  alternates: { canonical: "https://www.baihediy.com/thailand-investment" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
