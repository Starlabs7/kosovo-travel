import React from 'react'
import "./MainSection.css"
import mon1 from "../../Images/1.jpg"
import mon2 from "../../Images/2.jpg"
import mon3 from "../../Images/3.jpg"
import mon4 from "../../Images/4.jpg"
import { Link } from 'react-router-dom'

export default function MainSection() {
    return (
        <>
            <main>
                <div className="bg-image">
                    <img src={mon1} alt="Brezovica"/>
                    <img src={mon3} alt="Mountain"/>
                    <img src={mon2} alt="Old man riding a bike"/>
                    <img src={mon4} aly="Old Hotel"/>           
                </div>
                <div className="container">
                    <div className="wrapper">
                        <h1>Dare to Live the Life You've Always Wanted.</h1>
                        <Link to='/tickets'>
                            <button className="btn3"><p>Get Tickets</p></button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
