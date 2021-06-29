import React from 'react'
import "./MainSection.css"
import mon1 from "../../Images/1.jpg"
import mon2 from "../../Images/2.jpg"
import mon3 from "../../Images/3.jpg"
import mon4 from "../../Images/4.jpg"

export default function MainSection() {
    return (
        <>
            <main>
                <div className="bg-image">
                    <img src={mon1}/>
                    <img src={mon3}/>
                    <img src={mon2}/>
                    <img src={mon4}/>           
                </div>
                <div className="container">
                    <div className="wrapper">
                        <h1>Dare to Live the Life You've Always Wanted.</h1>
                        <button><a href="#">Get Tickets</a></button>
                    </div>
                </div>
            </main>
        </>
    )
}
