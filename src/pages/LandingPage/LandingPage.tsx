import silent from "../../assets/sush.svg"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"

function LandingPage (){
    const navigate = useNavigate()
    return(
        <>
            <div className="logo-container" onClick={()=>{navigate('/')}}>
                <img src={logo} alt="hushh" className="logo"/>
                <h2>Hushh</h2>
            </div>
            <div className="landing-container">
                <h2 className="landing-headline">LEARN NOT TO <br/> INTERRUPT</h2>
                <button className="landing-cta" onClick={()=>{navigate('/dashboard')}}>TRY NOW</button>
                <img src={silent} alt="Hushh" className="landing-img"/>
            </div>
        </>
    )
}

export default LandingPage