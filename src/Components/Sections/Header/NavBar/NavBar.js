import { Routes, Route, Link } from "react-router-dom";
import "../Header.css"
export default function NavBar(){
    return(
        <header className="Nav">
            <div className="header-containers">
                <Link className="NavLink" to="/Home">
                    <img loading="lazy" alt="banana logo" className="logo" src={require("./logo.png")}/>    
                </Link>
                <ul>
                    <li className="NavElement"><Link className="NavLink" to="/Home">Home</Link></li>
                    <li className="NavElement"><Link className="NavLink" to="/BuyNow">Buy Now</Link></li>
                    <li className="NavElement"><Link className="NavLink" to="/Nutrition">Nutrition</Link></li>
                    <li className="NavElement"><Link className="NavLink" to="/Support">Support</Link></li>
                </ul>
            </div>
        </header>
    )
}