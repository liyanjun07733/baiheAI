"use client";

import { useMemo, useState } from "react";

type InventoryItem = {
  orderNo: string;
  itemNo: string;
  productName: string;
  received: number;
  shipped: number;
  stock: number;
};

type ShipmentItem = {
  date: string;
  orderNo: string;
  itemNo: string;
  productName: string;
  quantity: number;
};

type InspectionItem = {
  date: string;
  orderNo: string;
  itemNo: string;
  productName: string;
  result: string;
  pdf: string;
};

const inventoryData: InventoryItem[] = [
  {
    orderNo: "7388276",
    itemNo: "59688",
    productName: "Mini Suction Cup",
    received: 4800,
    shipped: 4000,
    stock: 800,
  },
  {
    orderNo: "7388277",
    itemNo: "59689",
    productName: "Double Suction Cup",
    received: 3000,
    shipped: 1200,
    stock: 1800,
  },
  {
    orderNo: "7388278",
    itemNo: "59690",
    productName: "117mm Suction Cup",
    received: 5000,
    shipped: 0,
    stock: 5000,
  },
];

const shipmentData: ShipmentItem[] = [
  {
    date: "2026-08-31",
    orderNo: "7388276",
    itemNo: "59688",
    productName: "Mini Suction Cup",
    quantity: 4000,
  },
  {
    date: "2026-08-30",
    orderNo: "7388277",
    itemNo: "59689",
    productName: "Double Suction Cup",
    quantity: 1200,
  },
];

const inspectionData: InspectionItem[] = [
  {
    date: "2026-08-30",
    orderNo: "7388276",
    itemNo: "59688",
    productName: "Mini Suction Cup",
    result: "PASS",
    pdf: "",
  },
  {
    date: "2026-08-29",
    orderNo: "7388277",
    itemNo: "59689",
    productName: "Double Suction Cup",
    result: "PASS",
    pdf: "",
  },
];

export default function FactoryDataPage() {
  const [activeTab, setActiveTab] = useState<
    "inventory" | "shipment" | "inspection"
  >("inventory");

  const [search, setSearch] = useState("");

  const keyword = search.trim().toLowerCase();

  const filteredInventory = useMemo(() => {
    return inventoryData.filter((item) =>
      `${item.orderNo} ${item.itemNo} ${item.productName}`
        .toLowerCase()
        .includes(keyword)
    );
  }, [keyword]);

  const filteredShipment = useMemo(() => {
    return shipmentData.filter((item) =>
      `${item.orderNo} ${item.itemNo} ${item.productName}`
        .toLowerCase()
        .includes(keyword)
    );
  }, [keyword]);

  const filteredInspection = useMemo(() => {
    return inspectionData.filter((item) =>
      `${item.orderNo} ${item.itemNo} ${item.productName}`
        .toLowerCase()
        .includes(keyword)
    );
  }, [keyword]);

  const totalStock = inventoryData.reduce(
    (sum, item) => sum + item.stock,
    0
  );

  const totalReceived = inventoryData.reduce(
    (sum, item) => sum + item.received,
    0
  );

  const totalShipped = inventoryData.reduce(
    (sum, item) => sum + item.shipped,
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <a
              href="/"
              className="text-xl font-bold tracking-tight text-slate-950"
            >
              BaiheAI
            </a>

            <p className="mt-1 text-sm text-slate-500">
              Factory Data Center · 工厂数据中心
            </p>
          </div>

          <div className="text-right">
            <div className="text-xs text-slate-400">READ ONLY</div>
            <div className="mt-1 text-sm font-medium text-emerald-600">
              ● Data Online
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8">
        {/* Title */}
        <section className="mb-8">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Factory Information
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Factory Data Center
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 md:text-base">
            查看最新成品库存、出库记录及验货报告。
            本页面仅供查询、打印和下载，不提供数据修改功能。
          </p>
        </section>

        {/* Summary */}
        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <SummaryCard
            title="Finished Goods"
            subtitle="累计成品入库"
            value={totalReceived.toLocaleString()}
          />

          <SummaryCard
            title="Shipped"
            subtitle="累计已出库"
            value={totalShipped.toLocaleString()}
          />

          <SummaryCard
            title="Current Stock"
            subtitle="当前成品库存"
            value={totalStock.toLocaleString()}
          />
        </section>

        {/* Main panel */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Tabs */}
          <div className="flex flex-col gap-4 border-b border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              <TabButton
                active={activeTab === "inventory"}
                onClick={() => setActiveTab("inventory")}
              >
                成品库存
              </TabButton>

              <TabButton
                active={activeTab === "shipment"}
                onClick={() => setActiveTab("shipment")}
              >
                已出库
              </TabButton>

              <TabButton
                active={activeTab === "inspection"}
                onClick={() => setActiveTab("inspection")}
              >
                验货报告
              </TabButton>
            </div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索订单号 / 货号 / 产品名称"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-blue-400 focus:bg-white md:w-80"
            />
          </div>

          {/* Inventory */}
          {activeTab === "inventory" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-4">订单号</th>
                    <th className="px-5 py-4">货号</th>
                    <th className="px-5 py-4">产品名称</th>
                    <th className="px-5 py-4 text-right">入库</th>
                    <th className="px-5 py-4 text-right">已出库</th>
                    <th className="px-5 py-4 text-right">库存</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredInventory.map((item) => (
                    <tr
                      key={`${item.orderNo}-${item.itemNo}`}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-5 py-4 font-medium">
                        {item.orderNo}
                      </td>

                      <td className="px-5 py-4">{item.itemNo}</td>

                      <td className="px-5 py-4">
                        {item.productName}
                      </td>

                      <td className="px-5 py-4 text-right">
                        {item.received.toLocaleString()}
                      </td>

                      <td className="px-5 py-4 text-right">
                        {item.shipped.toLocaleString()}
                      </td>

                      <td className="px-5 py-4 text-right font-semibold text-blue-600">
                        {item.stock.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredInventory.length === 0 && <EmptyState />}
            </div>
          )}

          {/* Shipment */}
          {activeTab === "shipment" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-4">出库日期</th>
                    <th className="px-5 py-4">订单号</th>
                    <th className="px-5 py-4">货号</th>
                    <th className="px-5 py-4">产品名称</th>
                    <th className="px-5 py-4 text-right">出库数量</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredShipment.map((item, index) => (
                    <tr
                      key={`${item.orderNo}-${item.itemNo}-${index}`}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">{item.date}</td>

                      <td className="px-5 py-4 font-medium">
                        {item.orderNo}
                      </td>

                      <td className="px-5 py-4">{item.itemNo}</td>

                      <td className="px-5 py-4">
                        {item.productName}
                      </td>

                      <td className="px-5 py-4 text-right font-semibold">
                        {item.quantity.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredShipment.length === 0 && <EmptyState />}
            </div>
          )}

          {/* Inspection */}
          {activeTab === "inspection" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-4">日期</th>
                    <th className="px-5 py-4">订单号</th>
                    <th className="px-5 py-4">货号</th>
                    <th className="px-5 py-4">产品名称</th>
                    <th className="px-5 py-4">结果</th>
                    <th className="px-5 py-4 text-right">报告</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredInspection.map((item, index) => (
                    <tr
                      key={`${item.orderNo}-${item.itemNo}-${index}`}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">{item.date}</td>

                      <td className="px-5 py-4 font-medium">
                        {item.orderNo}
                      </td>

                      <td className="px-5 py-4">{item.itemNo}</td>

                      <td className="px-5 py-4">
                        {item.productName}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          {item.result}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-right">
                        {item.pdf ? (
                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-blue-600 hover:text-blue-700"
                          >
                            查看 / PDF
                          </a>
                        ) : (
                          <span className="text-slate-400">
                            待接入
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredInspection.length === 0 && <EmptyState />}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 md:flex-row md:justify-between">
          <span>
            BaiheAI Factory Data Center
          </span>

          <span>
            Data Source: BaiheAI Material System
          </span>
        </footer>
      </div>
    </main>
  );
}

function SummaryCard({
  title,
  subtitle,
  value,
}: {
  title: string;
  subtitle: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">
        {title}
      </div>

      <div className="mt-1 text-xs text-slate-400">
        {subtitle}
      </div>

      <div className="mt-5 text-3xl font-bold tracking-tight">
        {value}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="px-5 py-16 text-center text-sm text-slate-400">
      没有找到符合条件的数据
    </div>
  );
}
