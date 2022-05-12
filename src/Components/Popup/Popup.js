import "./Popup.css"

export default function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <h1>Thankyou for purchasing!</h1>
        </div>
    ) : "";
}
