import "../BuyNow.css"
import kale from "../kale.png"
import guccibanana from "../gucci_banana.png"
import forbes from "../forbes.png"
import Inc from "../inc_logo.png"
import sharktank from "../sharktank_logo.png"
import abc from "../abc.png"
import tastybanana from "../tasty_banana.jpg"
export default function Description(){
return(
    <section className="Description">
        <div className="FeaturedOn">
            <h1>Featured On</h1>
            <div className="FeaturedOnContainer">
                <img alt="Forbes Logo" src={require(forbes)}/>
                <img alt="Inc Logo" src={require(inc)}/>
                <img alt="SharkTank Logo" src={require(sharktank)}/>
                <img alt="abc Logo" src={require(abc)}/>
            </div>
        </div>
        <div className="DescriptionContainer" id="1">
            <div className="PurchaseTextContainer">
                <h1>Tastes Amazing</h1>
                <p>Have you wondered why the sky is blue? Of course you have, but here's something that you have never wondered about, how good can a banana taste? Well if you purchase our iBanana 13 Pro Max Ultimate you’ll get the answer to that question. With its soft creamy center, our banana is guranteed to have your taste buds slip up *da doomph tsss*</p>
            </div>
                <div className="DescriptionImageContainer">
                <img alt="Tasty Banana" src={require(tastybanana)}/>
            </div>
        </div>
        <div className="DescriptionContainer" id="2">
            <div className="DescriptionImageContainer">
                <img alt="gucci banana" src={require(guccibanana)}/>
            </div>
            <div className="PurchaseTextContainer">
                <h1>Luxery At Its Finest</h1>
                <p>Luxery isnt the things you spend alot of money on. Its purchasing things and telling your friends just how ripped off you were when you purchased it. You complain that it was super expensive but then tell them that this didnt even hit a dent in your wallet. In that moment you just said to them, im so rich I don’t even pay atention to the price tag. Now that is luxery, and with the iBanana 13 Pro Max you can acheive that sense of false superiority.</p>
            </div>
        </div>
        <div className="DescriptionContainer" id="3">
            <div className="PurchaseTextContainer">
                <h1>Super Nutricious</h1>
                <p>An apple a day is what keeps a doctor away. Thats well in all, but why keep them away when you can brag to them about how your gut microbiome is healthier than that 20$ kale salad you ate this morning. With the iBanana 13 Pro Max Ultimate your nutricion will be set for life. When you consume it, you will get an imidiate 500000% boost in all vitamins and minerals. What are the side effects of this stupendous amount of goodness you ask? Well the last person who was craziest enought to consume this fruit is now on mars.</p>
            </div>
            <div className="DescriptionImageContainer">
                <img alt="kale" src={require(kale)}/>
            </div>
        </div>
    </section>
)
}