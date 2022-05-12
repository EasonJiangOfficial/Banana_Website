import "../HomeSection.css"
import Typed from 'typed.js'
import React from "react"
import TypedEffect from "./Typed.js"
export default function Section4(){
    return(
        <section className="Section4">
            <div className="ImageContainer">
            </div>
            <div className="Section4Text">
                <h1>"It tastes</h1>
                <TypedEffect/>
            </div>
        </section>
    )
}