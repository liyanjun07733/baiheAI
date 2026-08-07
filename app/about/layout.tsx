import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '关于BaiheAI｜泰国投资与企业落地顾问团队',
  description: '了解BaiheAI顾问团队、专业方向与联系方式，为中国企业进入泰国提供投资与落地协作。',
  alternates: { canonical: "https://www.baihediy.com/about" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
