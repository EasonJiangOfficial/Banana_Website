import "../HomeSection.css"
import Banana from "../../../images/banana.jpg"
export default function Section1(){
    return(
        <section className="Section1">
            <div className="text">
                <h2>iBanana 13 Pro Max Ultimate</h2>
                <h1>Oh.So.Tasty</h1>
            </div>
                <img alt="banana" className="BananaImg" src={Banana}/>
        </section>
    )
}
