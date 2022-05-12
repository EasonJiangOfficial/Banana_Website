import "../HomeSection.css";
export default function Section2(){
    return(
        <section className="Section2">
            <div className="Benefits">
                <span class="material-symbols-outlined">
                    restaurant_menu
                </span>

                <h1 className="BenefitsText">
                    Our most luxerious tasting banana yet.
                </h1>
            </div>
            <div className="Benefits">
            <span class="material-symbols-outlined">
                pan_tool
            </span>
                <h1 className="BenefitsText">
                    The best peeling action ever.
                </h1>
            </div>
            <div className="Benefits">
            <span class="material-symbols-outlined">
                directions_run
            </span>
                <h1 className="BenefitsText">
                    The most slippery peel.
                </h1>
            </div>
        </section>
    )
}