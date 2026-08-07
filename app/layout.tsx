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
  metadataBase: new URL("https://www.baihediy.com"),
  title: {
    default: "BaiheAI | 泰国投资落地与企业出海服务",
    template: "%s | BaiheAI",
  },
  description:
    "BaiheAI 帮助中国企业进入泰国及东南亚市场，提供泰国投资咨询、BOI 方向、项目落地、本地资源对接，以及 AI 官网、海外获客与自动化运营服务。",
  keywords: [
    "BaiheAI",
    "泰国投资咨询",
    "BOI",
    "泰国公司设立",
    "泰国工作许可",
    "泰国商务签证",
    "东南亚市场",
    "AI官网",
    "AI获客",
    "AI自动化",
    "海外品牌",
  ],
  authors: [{ name: "BaiheAI" }],
  creator: "BaiheAI",
  publisher: "BaiheAI",
  applicationName: "BaiheAI",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "BaiheAI | 泰国投资落地与企业出海服务",
    description:
      "帮助中国企业进入泰国及东南亚市场，提供咨询、资源对接、项目落地与 AI 数字化服务。",
    url: "https://www.baihediy.com",
    siteName: "BaiheAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/wechat-share.jpg",
        width: 1200,
        height: 630,
        alt: "BaiheAI 泰国投资落地与企业出海服务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BaiheAI | 泰国投资落地与企业出海服务",
    description:
      "帮助中国企业进入泰国及东南亚市场，提供咨询、资源对接、项目落地与 AI 数字化服务。",
    images: ["/wechat-share.jpg"],
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
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
