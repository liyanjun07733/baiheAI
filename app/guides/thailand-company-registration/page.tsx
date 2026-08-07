import type { Metadata } from "next";
import GuidePage from "../GuidePage";
export const metadata: Metadata = { title:"泰国注册公司指南｜中国企业设立泰国公司的前期准备", description:"泰国注册公司前先明确业务范围、股权结构、外商经营限制、董事与地址，再衔接税务、银行和用工。", alternates:{canonical:"https://www.baihediy.com/guides/thailand-company-registration"} };
export default function Page(){return <GuidePage eyebrow="THAILAND COMPANY REGISTRATION" title="中国企业在泰国注册公司：不要只把它当成工商登记" intro="公司设立只是起点。真正需要提前判断的是：公司要做什么业务、谁持股、是否涉及外商经营限制，以及后续能否支撑实际运营。" keywords={["泰国注册公司","泰国公司注册","中国企业泰国落地"]} sections={[
{title:"先写清楚实际经营活动",paragraphs:["销售什么、提供什么服务、是否生产、是否进口出口、是否需要仓储或办公室，这些信息会直接影响经营范围与后续许可判断。"]},
{title:"股权结构不能脱离业务判断",paragraphs:["泰国不同业务可能适用不同的外资限制或许可路径。BOI促进、外商经营许可/证书及其他特殊法律机制可能影响可行结构，应按项目核对。"]},
{title:"准备设立所需的基础要素",bullets:["拟用公司名称","股东与董事安排","注册地址","注册资本及资金规划","经营目的/业务范围","签字权限与公司治理"]},
{title:"设立后还有运营衔接",bullets:["税务与会计体系","银行账户与资金安排","员工与社保","签证和工作许可","行业许可或工厂相关许可","合同、发票和日常合规"]},
{title:"用官方系统核对最新要求",paragraphs:["泰国商业发展厅 DBD 提供企业登记及 e-Foreign Business 等在线服务。具体表格、文件格式与线上办理规则可能更新，应以 DBD 当前页面为准。"]}
]} officialLinks={[{label:"泰国商业发展厅 DBD",href:"https://www.dbd.go.th/en/"},{label:"DBD Online Services",href:"https://www.dbd.go.th/en/hotService/online_service"},{label:"BOI / OSOS 投资咨询",href:"https://osos.boi.go.th/EN/"}]} />}
