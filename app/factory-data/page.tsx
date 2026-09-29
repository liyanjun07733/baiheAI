import { redirect } from "next/navigation";

export const metadata = {
  title: "BaiheAI Factory Data",
  robots: { index: false, follow: false },
};

export default function FactoryDataPage(){
  redirect("/factory-data-viewer-v265.html?ui=qc-spec-final-2613"); /* BAIHEAI-WEB-QC-SPEC-FINAL-CACHEKEY-20260929 */
}
