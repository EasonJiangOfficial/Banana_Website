import "../Header.css"
import Popup from "../../images/Popup/Popup"
import {useState,useEffect} from "react"

export default function ProductBar(){
    const [buttonPopup, setButtonPopup] = useState(false)    
    function PopupEffect(){
        setButtonPopup(true) 
        setTimeout(()=>{
            setButtonPopup(false)
        },1000)
    }
    return(
        <div className="ProductBar">
            <Popup trigger={buttonPopup}/>
            <div className="header-containers">
                <h1 className="Title">iBanana 13 Pro Max Ultimate</h1>
                <div className="right-holder">
                    <h4 className="discounted">
                        <s>$.62</s>
                    </h4>
                    <h3 className="price">$659.99</h3>
                    <button className="PurchaseButton" onClick={()=>PopupEffect()}>Buy</button>
                </div>
            </div>
        </div>
    )
}
