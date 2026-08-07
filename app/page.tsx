import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessBridge from "./components/BusinessBridge";
import ThailandFocus from "./components/ThailandFocus";
import ConsultingApproach from "./components/ConsultingApproach";
import TeamPreview from "./components/TeamPreview";
import Cases from "./components/Cases";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import LatestInsights from "./components/LatestInsights";
import FAQ from "./components/FAQ";
import HomeCTA from "./components/HomeCTA";
import HomeShareCTA from "./components/HomeShareCTA";
import SearchGuides from "./components/SearchGuides";
import Footer from "./components/Footer";
import SiteSchema from "./components/SiteSchema";

export const metadata = {
  title: "泰国投资咨询｜BOI申请・公司注册・建厂落地｜BaiheAI",
  description: "面向中国企业提供泰国投资咨询、BOI方向与申请支持、公司注册、签证与工作许可、工厂/仓库/办公室匹配、本地资源对接及AI数字化服务。",
  alternates: { canonical: "https://www.baihediy.com/" },
  openGraph: {
    title: "泰国投资咨询与企业落地｜BaiheAI",
    description: "中国企业进入泰国：投资咨询、BOI、公司注册、项目落地、本地资源与AI数字化服务。",
    url: "https://www.baihediy.com/",
    siteName: "BaiheAI",
    locale: "zh_CN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <SiteSchema />
      <main className="min-h-screen bg-black text-white">
        <Hero />
        <BusinessBridge />
        <ThailandFocus />
        <ConsultingApproach />
        <TeamPreview />
        <Cases />
        <Testimonials />
        <Process />
        <LatestInsights />
        <SearchGuides />
        <FAQ />
        <HomeShareCTA />
        <HomeCTA />
        <Footer />
      </main>
    </>
  );
}
