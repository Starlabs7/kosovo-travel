import React from 'react'
import mountains from "../../Images/Kosovo_Mountains.jpg"
import "./visitKosovo.css"

export default function visitKosovo() {
    return (
        <>
            <div className="container">
                <div className="section-wrapper">
                    <div className="information">
                        <h3>Why visit Kosovo?</h3>
                        <p>There’s no better way to experience Kosovo than by hitting the open road between the nation’s leading cities: Pristina, Prizren, and Peja. On the way, you’ll catch glimpses of ancient monasteries, brutalist gems, and the raw untamed nature of its two national parks.There’s no better way to experience Kosovo than by hitting the open road between the nation’s leading cities: Pristina, Prizren, and Peja. On the way, you’ll catch glimpses of ancient monasteries, brutalist gems, and the raw untamed nature of its two national parks.</p>
                    </div>
                    <div class="image">
                        <img src={mountains}  alt="mountains"/>
                    </div>
                </div>   
            </div>
        </>
    )
}
