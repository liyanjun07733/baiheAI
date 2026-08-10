import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "中国企业泰国建厂实战指南｜从租厂、选址到投产用工｜BaiheAI",
  description: "按真实项目顺序梳理中国企业泰国投资建厂：租厂或自建、选址、IEAT与BOI、尽调、设计施工、设备、泰国员工、中国员工与正式投产，并结合真实项目案例说明风险。",
  alternates: { canonical: "https://www.baihediy.com/thailand-investment" },
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
