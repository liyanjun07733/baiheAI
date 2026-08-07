import type { Metadata } from "next";
import GuidePage from "../GuidePage";
export const metadata: Metadata = { title:"泰国BOI申请指南｜条件・流程・资料・落地衔接", description:"面向中国企业的泰国BOI申请入门指南：活动判断、项目资料、审批关注点、获批后的公司与工厂落地衔接。", alternates:{canonical:"https://www.baihediy.com/guides/thailand-boi-application"} };
export default function Page(){return <GuidePage eyebrow="THAILAND BOI GUIDE" title="泰国 BOI 申请：先判断项目，再准备材料" intro="BOI 的核心不是‘填表’，而是证明项目属于可促进活动，并满足相应条件。不同活动的资格和优惠差异很大。" keywords={["泰国BOI申请","BOI申请条件","泰国投资优惠"]} sections={[
{title:"BOI 先看活动类别，不只看公司名称",paragraphs:["同一家企业可能包含制造、研发、软件、区域服务等不同活动。应先确认拟申请的具体活动及适用条件。"]},
{title:"项目说明要能对应真实投资计划",bullets:["产品或服务与工艺流程","机器设备和技术方案","投资额与资金用途","产能、人员与厂区规划","原料、供应链与市场","环保、安全与质量管理"]},
{title:"审批关注项目本身的合理性",paragraphs:["BOI 官方投资促进标准会涉及项目价值、技术/生产过程、环境影响、机器设备等要求；具体门槛须按活动类别与当期公告核对。"]},
{title:"BOI 获批后仍要完成后续落地",paragraphs:["获得促进资格不等于公司设立、土地/厂房、海关、签证、工作许可、税务或其他行业许可自动完成。项目应把这些后续事项放进同一时间表。"]},
{title:"什么时候适合先做预评估",bullets:["项目投资规模较大或设备投入明显","制造或技术活动较清晰","需要外籍专家/管理人员配合","希望评估税务或非税务优惠的可能性","正在比较泰国与其他东南亚国家的落地路径"]}
]} officialLinks={[{label:"BOI 投资促进标准",href:"https://www.boi.go.th/index.php?language=en&page=criteria_for_project_approval"},{label:"BOI 官网",href:"https://www.boi.go.th/"},{label:"BOI / OSOS 投资服务",href:"https://osos.boi.go.th/EN/"}]} />}
