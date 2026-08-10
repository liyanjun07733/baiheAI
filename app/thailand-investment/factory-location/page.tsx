import type { Metadata } from "next";
import InvestmentArticle from "../_components/InvestmentArticle";
import { articles } from "../data";

const data = articles["factory-location"];
export const metadata: Metadata = {
  title: `${data.title}｜BaiheAI`,
  description: data.deck,
  alternates: { canonical: "https://www.baihediy.com/thailand-investment/factory-location" },
};
export default function Page(){ return <InvestmentArticle data={data}/>; }
