import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '免费咨询泰国投资与落地方向｜BaiheAI',
  description: '提交项目需求，初步梳理泰国投资、BOI、公司、签证、场地、翻译及AI数字化服务方向。',
  alternates: { canonical: "https://www.baihediy.com/free-plan" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
