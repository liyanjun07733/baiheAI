import { redirect } from "next/navigation";

export const metadata = {
  title: "BaiheAI Factory Data",
  robots: { index: false, follow: false },
};

export default function FactoryDataPage() {
  redirect("/factory-data-v3-viewer-v320-current-a.html");
}
