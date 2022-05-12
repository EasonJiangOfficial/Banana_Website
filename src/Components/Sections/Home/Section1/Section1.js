import "../HomeSection.css"
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
