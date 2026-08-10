import type { Metadata } from "next";
import InvestmentArticle from "../_components/InvestmentArticle";
import { articles } from "../data";

const data = articles["factory-equipment-commissioning"];
export const metadata: Metadata = {
  title: `${data.title}｜BaiheAI`,
  description: data.deck,
  alternates: { canonical: "https://www.baihediy.com/thailand-investment/factory-equipment-commissioning" },
};
export default function Page(){ return <InvestmentArticle data={data}/>; }
