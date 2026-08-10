import type { Metadata } from "next";
import InvestmentArticle from "../_components/InvestmentArticle";
import { articles } from "../data";

const data = articles["ieat-boi-path"];
export const metadata: Metadata = {
  title: `${data.title}｜BaiheAI`,
  description: data.deck,
  alternates: { canonical: "https://www.baihediy.com/thailand-investment/ieat-boi-path" },
};
export default function Page(){ return <InvestmentArticle data={data}/>; }
