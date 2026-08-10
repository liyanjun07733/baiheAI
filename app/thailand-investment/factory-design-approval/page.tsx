import type { Metadata } from "next";
import InvestmentArticle from "../_components/InvestmentArticle";
import { articles } from "../data";

const data = articles["factory-design-approval"];
export const metadata: Metadata = {
  title: `${data.title}｜BaiheAI`,
  description: data.deck,
  alternates: { canonical: "https://www.baihediy.com/thailand-investment/factory-design-approval" },
};
export default function Page(){ return <InvestmentArticle data={data}/>; }
