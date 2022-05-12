import "../BuyNow.css"
import ProductImage from "../../../images/product_image.jpg"

export default function ImageSlider(){
return(
<div className="ImageHolder">
    <img src={ProductImage}/>
</div>
)
}