import React from 'react'
import './Header.css'
import logo from '../../Images/logo - Copy.png'
import { BsSearch } from "react-icons/bs";

export default function header() {
    return (
        <>
            <header>
                <div className="container">
                     <div className="header-wrapper">
                        <a href="#"><img src={logo} /></a>
                        <div className="header_navigation">
                            <ul>
                                <li>
                                    <a href="#">Ticket</a>
                                </li>
                                <li>
                                    <a href="#">Places to go</a>
                                </li>
                                <li>
                                    <a href="#">Things to do</a>
                                </li>
                                <li>
                                    <a href="#">Plan your trip</a>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="search-bar">
                                <input 
                                type="text"
                                className="search-bar-input" 
                                placeholder="Search here"
                                aria-label="search" />
                                
                                <button className="search-bar-button"><BsSearch /></button>
                            </div>
                     </div>
                </div>
            </header>           
        </>
    )
}
