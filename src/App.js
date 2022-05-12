import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import NavBar from "./Components/Sections/Header/NavBar/NavBar"
import HomeSection from "./Components/Sections/Home/HomeSection"
import SupportSection from "./Components/Sections/Support/Support"
import BuyNowSection from "./Components/Sections/Buy Now/BuyNow"
import NutritionSection from "./Components/Sections/NutritionSection/NutritionSection"
import Footer from "./Components/Sections/Footer/Footer"

function App() {
  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="buynow" element={<BuyNow />} />
          <Route path="Support" element={<Support />} />
          <Route path="Nutrition" element={<Nutrition />} />
        </Routes>
        <Footer/>
      </>
  )
}

function Home(){
  return(
    <HomeSection/>
  )
}

function BuyNow(){
  return(
    <BuyNowSection/>
  )
}
function Support(){
  return(
    <SupportSection/>
  )
}
function Nutrition(){
  return(
    <NutritionSection/>
  )
}

export default App;
