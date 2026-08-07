import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '泰国投资政策与实操｜BOI・公司注册・工作许可｜BaiheAI',
  description: '持续整理泰国BOI、公司注册、工作许可及企业落地相关政策与实操信息。',
  alternates: { canonical: "https://www.baihediy.com/policies" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
