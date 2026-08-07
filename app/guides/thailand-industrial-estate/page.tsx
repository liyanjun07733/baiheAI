import type { Metadata } from "next";
import GuidePage from "../GuidePage";
export const metadata: Metadata = { title:"泰国工业园区选择指南｜春武里・罗勇等选址要看什么", description:"泰国工业园区选址指南：比较客户供应链、港口物流、劳动力、公用工程、IEAT服务、土地厂房和扩产条件。", alternates:{canonical:"https://www.baihediy.com/guides/thailand-industrial-estate"} };
export default function Page(){return <GuidePage eyebrow="THAILAND INDUSTRIAL ESTATE" title="泰国工业园区怎么选：不要只比较地价和租金" intro="工业园区选址本质上是在比较未来 5—10 年的运营条件。地价只是其中一个变量。" keywords={["泰国工业园区","泰国工厂选址","春武里工业园","罗勇工业园"]} sections={[
{title:"先画客户与供应商地图",paragraphs:["如果核心客户、零部件供应商、港口或机场有明显集聚，物流半径通常比单纯土地价格更值得优先考虑。"]},
{title:"比较基础设施能力，而不是只问有没有",bullets:["电力容量与稳定性","工业用水","污水处理能力","道路和重型车辆通行","通信与网络","消防与应急支持"]},
{title:"劳动力和生活配套会影响长期运营",paragraphs:["招工半径、技术人员来源、宿舍、医院、学校和管理人员通勤，都可能影响招聘与人员稳定。"]},
{title:"确认园区身份与服务机制",paragraphs:["IEAT 负责泰国工业区体系的开发、服务、许可协同和相关权益服务。具体园区是否属于 IEAT 体系、有哪些区域类型及可用土地，应向官方和开发商核对。"]},
{title:"签约前做一张对比表",bullets:["总成本而非单价","距离港口/客户/供应商","公用工程余量","改造成本","许可适配","扩产空间","交付时间与合同条件"]}
]} officialLinks={[{label:"IEAT 工业区列表",href:"https://www.ieat.go.th/en/estates"},{label:"IEAT 职责与服务",href:"https://www.ieat.go.th/en/roles-responsibilities"}]} />}
