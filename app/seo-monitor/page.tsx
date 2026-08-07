import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoMonitorClient from "./SeoMonitorClient";

export const metadata: Metadata = {
  title: "SEO 收录监控｜BaiheAI",
  description: "BaiheAI 站内 SEO 收录工作清单。",
  robots: { index: false, follow: false },
};

export default function SeoMonitorPage() {
  return (
    <>
      <Navbar />
      <SeoMonitorClient />
      <Footer />
    </>
  );
}
