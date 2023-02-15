import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import debate from "../../assets/debate.svg"
import sales_call from "../../assets/sales_call.svg"
import interview_colorful from "../../assets/interview_colorful.svg"
import date from "../../assets/date.svg"
import debate_color from "../../assets/debate_color.svg"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import "./Dashboard.css"

export default function DashboardPage() {
    
    const navigate = useNavigate()
    return(
        <>
            <div className="logo-container" >
                <img src={logo} alt="hushh" onClick={()=>{navigate('/')}} className="logo"/>
            </div>
            <div className="dashboard-card-container">
                <DashboardCard imageSrc={debate} altText="debate" />
                <DashboardCard imageSrc={sales_call} altText="sales call" />
                <DashboardCard imageSrc={interview_colorful} altText="interview call"/>
                <DashboardCard imageSrc={date} altText="date"/>
                <DashboardCard imageSrc={debate_color} altText="debate"/>
            </div>
        </>
    )
}