import type { Metadata } from "next";
import GuidePage from "../GuidePage";
export const metadata: Metadata = { title:"泰国建厂指南｜选址・产线・许可・公用工程・投产准备", description:"中国制造企业赴泰国建厂前期指南：选址、产线布局、公用工程、环保消防、许可、供应链、人员与投产节奏。", alternates:{canonical:"https://www.baihediy.com/guides/thailand-factory-setup"} };
export default function Page(){return <GuidePage eyebrow="THAILAND FACTORY SETUP" title="泰国建厂：先把工艺和落地条件对齐，再谈厂房价格" intro="制造项目最容易出现的成本，不一定来自租金，而是场地与工艺不匹配后产生的改造、许可、物流和延期成本。" keywords={["泰国建厂","泰国工厂选址","泰国制造业投资"]} sections={[
{title:"第一步不是找厂房，而是整理工艺条件",bullets:["产品与年产能","主要设备尺寸、重量和用电","层高、承重、吊装和洁净需求","用水、排水、压缩空气/气体等公用工程","原材料、危险品与废弃物情况","仓储和装卸方式"]},
{title:"场地要同时看许可与基础设施",paragraphs:["同样面积的厂房，可能因为用途、公用工程、消防、环保条件或扩产空间不同，对项目可行性产生完全不同的影响。"]},
{title:"工业园区与园外场地逻辑不同",paragraphs:["工业园区通常具备更系统的道路、公用设施、污水处理及管理服务；园外项目则需要更细致核对土地用途、基础设施与主管机关要求。"]},
{title:"产线布局要尽早进入选址阶段",paragraphs:["把物流动线、设备布置、人员通道、消防疏散、仓储和未来扩产一起考虑，可以在签约前发现很多隐藏成本。"]},
{title:"建立投产倒排计划",bullets:["公司/投资结构确认","BOI及许可路线","场地签约","设计与改造","设备进口与安装","人员招聘与外籍人员安排","试产、验收与正式投产"]}
]} officialLinks={[{label:"泰国工业区管理局 IEAT",href:"https://www.ieat.go.th/en"},{label:"IEAT 工业区服务",href:"https://www.ieat.go.th/en/core-business"},{label:"BOI 官网",href:"https://www.boi.go.th/"}]} />}
