import silent from "../../assets/sush.svg"
import logo from "../../assets/logo.svg"
import "./LandingPage.css"

function LandingPage (){
    return(
        <>
            <div className="logo-container">
                <img src={logo} alt="hushh" className="logo"/>
                <h2>Hushh</h2>
            </div>
            <div className="landing-container">
                <h2 className="landing-headline">LEARN NOT TO <br/> INTERRUPT</h2>
                <button className="landing-cta">TRY NOW</button>
                <img src={silent} alt="Hushh" className="landing-img"/>
            </div>
        </>
    )
}

export default LandingPage