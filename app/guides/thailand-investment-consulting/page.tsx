import type { Metadata } from "next";
import GuidePage from "../GuidePage";
export const metadata: Metadata = { title: "泰国投资咨询｜中国企业进入泰国前的6项判断", description: "中国企业进入泰国前，先梳理行业准入、股权结构、BOI、场地、人员与实施时间表。", alternates:{canonical:"https://www.baihediy.com/guides/thailand-investment-consulting"} };
export default function Page(){return <GuidePage eyebrow="THAILAND INVESTMENT CONSULTING" title="泰国投资咨询：项目落地前，先判断这 6 件事" intro="很多企业一开始就问注册公司、租厂房或申请 BOI，但真正影响项目成本与速度的，往往是前期路径是否选对。" keywords={["泰国投资咨询","中国企业投资泰国","泰国项目落地"]} sections={[
{title:"先确认业务到底要在泰国做什么",paragraphs:["制造、贸易、服务、研发、区域总部、仓储等模式，对股权、许可、税务和人员安排的影响并不相同。先把业务活动写清楚，再谈公司和投资结构。"]},
{title:"先看股权与外商经营限制",paragraphs:["不同业务可能涉及不同的外资准入和许可要求。不要先假定某一种股权比例一定适用，应结合具体经营活动与主管机关规则判断。"]},
{title:"评估是否值得申请 BOI",paragraphs:["BOI 是投资促进机制，不是所有项目都自动适用。需要结合活动类别、技术、投资规模、产能、机器设备、环保和项目价值等因素判断。"]},
{title:"场地要和工艺、许可、物流一起看",paragraphs:["厂房或土地便宜并不等于适合。制造项目尤其要关注用途、基础设施、电力、水、废水、消防、物流半径、上下游和扩产空间。"]},
{title:"人员、签证与工作许可要提前排",paragraphs:["外籍管理人员和技术人员的入境、停留与合法工作是不同事项，需要与公司设立、BOI/IEAT资格及项目进度协同安排。"]},
{title:"最后形成一张落地路线图",bullets:["目标业务与主体结构","BOI/许可判断","公司设立与银行税务衔接","场地与供应链","人员与签证工作许可","关键里程碑与风险清单"]}
]} officialLinks={[{label:"泰国投资促进委员会 BOI",href:"https://www.boi.go.th/"},{label:"泰国商业发展厅 DBD",href:"https://www.dbd.go.th/en/"},{label:"泰国工业区管理局 IEAT",href:"https://www.ieat.go.th/en"}]} />}
