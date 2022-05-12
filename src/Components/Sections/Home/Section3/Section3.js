import "../HomeSection.css"
import Peel from "../../../images/peel.png"
import MarioBanana from "../../../images/mario_banana.png"
import Curved from "../../../images/curved.png"
import Peel2 from "../../../images/peel2.png"
export default function Section3(){
    return(
        <section className="Section3">
            <div className="GridContainer">
                <div className="container1">
                    <div className="TextContainer">
                        <p><b>New</b></p>
                        <p>Yellow</p>
                        <p>Peel</p>
                    </div>
                    <img loading="lazy" alt="banana peel" className="Peel" src={Peel}/>
                </div>
                <div className="container2">
                <img loading="lazy" alt="banana from mario cart" className="MarioBanana" src={MarioBanana}/>
                    <div className="TextContainer">
                        <p>More <b>slippery</b></p>
                        <p>than any other</p>
                        <p>banana peel</p>
                    </div>
                </div>
                <div className="container3">
                    <div className="TextContainer">

                    </div>
                </div>
                <div className="container4">
                    <div className="ContainerDiv">
                        <div className="TextContainer">
                            <p>So Dang</p>
                            <p><b>Curvy</b></p>
                        </div>
                        <img loading="lazy"alt="curved banana" className="Curved" src={Curved}/>
                    </div>
                </div>
                <div className="container5">
                    <div className="TextContainer">
                        <i>Slip Nonresistant</i>
                    </div>
                    <img loading="lazy"alt="banana peel" className="Peel2" src={Peel2}/>
                    <img loading="lazy"alt="banana peel" className="Peel3" src={Peel2}/>
                </div>
            </div>
        </section>
    )
}