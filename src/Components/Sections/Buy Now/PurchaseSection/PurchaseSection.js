import "../BuyNow.css"
import ImageSlider from "./ImageSlider"
import Popup from "../../../Popup/Popup"
import {useState,useEffect} from "react"


export default function PuchaseSection(){
    const [buttonPopup, setButtonPopup] = useState(false)    
    function PopupEffect(){
        setButtonPopup(true) 
        setTimeout(()=>{
            setButtonPopup(false)
        },1000)
    }
    return(
       <section className="PurchaseSection">
            <Popup trigger={buttonPopup}/>
            <div className="PurchaseSectionContainer">
                <ImageSlider/>
                <div className="ProductInfo">
                    <h1>Banana 13 Pro Max Ultimate</h1>
                    <h3>
                        <s>$.62</s>
                        $659.99
                    </h3>
                    <button onClick={()=>PopupEffect()}id="cart" className="CheckoutButtons">Add To Cart</button>
                    <button onClick={()=>PopupEffect()}id="purchase" className="CheckoutButtons">Buy Now</button>
                </div> 
            </div>    
       </section> 
    )
}