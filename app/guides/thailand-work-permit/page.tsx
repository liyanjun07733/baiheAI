import type { Metadata } from "next";
import GuidePage from "../GuidePage";
export const metadata: Metadata = { title:"泰国工作证与商务签证指南｜外籍人员赴泰工作前先分清这几件事", description:"泰国工作证、Non-B商务签证及BOI/IEAT相关外籍人员安排的入门指南，帮助企业区分入境、停留和工作许可。", alternates:{canonical:"https://www.baihediy.com/guides/thailand-work-permit"} };
export default function Page(){return <GuidePage eyebrow="VISA & WORK PERMIT" title="泰国工作证与商务签证：入境、停留、工作是三件不同的事" intro="企业派管理人员或技术人员赴泰时，最常见的误区是把签证和工作许可混为一谈。实际安排应根据公司类型、人员身份和工作内容逐项核对。" keywords={["泰国工作证","泰国商务签证","Non-B签证","泰国外籍员工"]} sections={[
{title:"签证解决入境与停留，不等同于工作许可",paragraphs:["BOI 的投资服务信息明确区分 Visa 与 Work Permit。一般情况下，外籍人员在泰国工作需要符合相应的工作许可要求。"]},
{title:"非 BOI 与 BOI/IEAT 项目的办理路径可能不同",paragraphs:["BOI/IEAT 等符合条件的项目可能使用专门的一站式服务机制；普通企业则按适用的移民和就业主管机关程序办理。"]},
{title:"人员计划最好与公司和项目计划同步",bullets:["谁需要长期驻泰","职位和实际工作内容","什么时候入境","公司/项目是否已具备申请条件","学历、经历和雇佣材料准备","家属与再入境安排"]},
{title:"不要用旅游身份直接替代工作安排",paragraphs:["短期访问、商务活动与在泰就业并不是同一概念。对具体人员，应根据实际活动、停留时间和雇佣关系核对适用要求。"]},
{title:"办理地点和系统可能更新",paragraphs:["BOI 于 2025 年启用 Thailand Investment and Expat Services Center (TIESC)，整合部分投资、签证和工作许可服务。办理前应核对最新地点、系统和资格范围。"]}
]} officialLinks={[{label:"BOI/OSOS Visa & Work Permit",href:"https://osos.boi.go.th/EN/how-to/218/Getting-Visa--Work-Permit/"},{label:"TIESC 信息",href:"https://osos.boi.go.th/EN/"},{label:"泰国移民局",href:"https://www.immigration.go.th/"}]} />}
