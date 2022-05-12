import "./NutritionSection.css"
import BananaIcon from "../../images/banana_icon.png"
import Label from "../../images/nutrience_label.png"
export default function NutritionSection(){
    return(
        <section className="NutritionSection">
            <div className="Container">
                <div className="FactsContainer">
                    <img alt="banana logo" src={BananaIcon}/>
                    <div className="NutritionInfo">
                        <div className="BadgesContainer">
                            <div className="DualContainer">
                                <span id="Circle1" className="CircleBadges">
                                    <h3>Potassium</h3>
                                </span>
                                <span id="Circle2" className="CircleBadges">
                                    <h3>Fiber</h3>
                                </span>
                            </div>
                            <div className="DualContainer">
                                <span id="Circle3" className="CircleBadges">
                                    <h3>Vitamin B6</h3>
                                </span>
                                <span id="Circle4" className="CircleBadges">
                                    <h3>Vitamin C</h3>
                                </span>
                            </div>
                        </div>
                        <div className="NutritionLabelContainer">
                            <img alt="banana nutirence label"src={Label}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}