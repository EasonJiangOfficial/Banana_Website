import "./Footer.css"
import { Routes, Route, Link } from "react-router-dom";

export default function Footer(){
    return(
        <section className="Footer">
            <div className="FooterContainer">
                <ul>
                    <li className="FooterNavElement"><Link className="NavLink" to="/Home">Home</Link></li>
                    <li className="FooterNavElement"><Link className="NavLink" to="/BuyNow">Buy Now</Link></li>
                    <li className="FooterNavElement"><Link className="NavLink" to="/Nutrition">Nutrition</Link></li>
                    <li className="FooterNavElement"><Link className="NavLink" to="/Support">Support</Link></li>
                </ul>
            </div>
        </section>
    )
}
