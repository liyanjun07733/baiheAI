import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BaiheAI | AI赋能企业出海东南亚",
    template: "%s | BaiheAI",
  },

  description:
    "BaiheAI 帮助中国企业利用 AI 官网、AI 获客、AI 自动化运营和海外品牌建设，快速进入泰国、越南、马来西亚、新加坡等东南亚市场。",

  keywords: [
    "BaiheAI",
    "AI官网",
    "AI获客",
    "AI自动化",
    "AI客服",
    "AI Website",
    "AI Automation",
    "Lead Generation",
    "Thailand AI",
    "Vietnam AI",
    "Malaysia AI",
    "Singapore AI",
    "东南亚市场",
    "海外品牌",
  ],

  authors: [
    {
      name: "BaiheAI",
    },
  ],

  creator: "BaiheAI",

  publisher: "BaiheAI",

  applicationName: "BaiheAI",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "BaiheAI | AI赋能企业出海东南亚",
    description:
      "帮助中国企业利用 AI 官网、AI 获客、AI 自动化运营，快速进入东南亚市场。",
    url: "https://www.baihediy.com",
    siteName: "BaiheAI",
    locale: "zh_CN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BaiheAI | AI赋能企业出海东南亚",
    description:
      "帮助中国企业利用 AI 官网、AI 获客、AI 自动化运营，快速进入东南亚市场。",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}