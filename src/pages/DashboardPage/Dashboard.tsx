import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function DashboardPage() {
    const navigate = useNavigate()
    return(
        <>
            <div className="logo-container" onClick={()=>{navigate('/')}}>
                <img src={logo} alt="hushh" className="logo"/>
            </div>
        </>
    )
}