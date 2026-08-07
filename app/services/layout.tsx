import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '泰国企业落地与AI数字化服务｜BaiheAI',
  description: '泰国投资落地、BOI支持、公司与项目协助、翻译商务支持、AI官网、自动化与海外获客服务。',
  alternates: { canonical: "https://www.baihediy.com/services" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
