import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '泰国项目与企业落地案例｜BaiheAI',
  description: '查看BaiheAI在泰国投资、企业落地、数字化与出海服务方面的项目案例与实践。',
  alternates: { canonical: "https://www.baihediy.com/cases" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
