import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom"
import "./Conversation.css"

function Conversation(){
    const navigate = useNavigate()

    return(
        <>
            <div className="logo-container" >
                <img src={logo} alt="hushh" onClick={()=>{navigate('/')}} className="logo"/>
            </div>
            <div className="conversation-container">
                <h2>m</h2>
            </div>
        </>
    )
}

export default Conversation;