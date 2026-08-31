export const metadata = {
  title: "生产物料管理系统 | BaiheAI",
  description: "BaiheAI Material System - Read Only Viewer",
};

export default function FactoryDataPage() {
  return (
    <main style={{ margin: 0, padding: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/factory-viewer.html"
        title="BaiheAI Material System"
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </main>
  );
}
