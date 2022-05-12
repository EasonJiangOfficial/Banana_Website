import "../HomeSection.css"
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, FadeInIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
export default function Section1(){
    return(
        <section className="Section1">
            <div className="text">
                <h2>iBanana 13 Pro Max Ultimate</h2>
                <h1>Oh.So.Tasty</h1>
            </div>
                <img loading="lazy" alt="banana" className="BananaImg" src={require("./banana.jpg")}/>
        </section>
    )
}
