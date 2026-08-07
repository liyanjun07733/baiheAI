import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '泰国投资与企业出海知识中心｜BaiheAI',
  description: '分享泰国投资、BOI、建厂、公司落地、东南亚市场与AI数字化相关知识。',
  alternates: { canonical: "https://www.baihediy.com/blog" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
