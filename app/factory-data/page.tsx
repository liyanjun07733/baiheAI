import { redirect } from "next/navigation";

export const metadata = {
  title: "BaiheAI Factory Data",
  robots: { index: false, follow: false },
};

export default function FactoryDataPage(){
  redirect("/factory-data-viewer-current-20261008-004742.html");
}
