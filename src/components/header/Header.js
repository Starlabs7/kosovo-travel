import React from 'react'
import './Header.css'
import logo from '../../Images/logo - Copy.png'
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom';

export default function header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navigation">
                        <div className="header-wrapper">
                            <a href="#"><img src={logo} /></a>
                            <div className="header_navigation">
                                <ul>
                                    <Link className="routerlink" to='/tickets'>
                                        <li>Tickets</li>
                                    </Link>
                                    <Link className="routerlink">
                                        <li>Places to go</li>
                                    </Link>
                                    <Link className="routerlink">
                                    <li>Things to do</li>
                                    </Link>
                                    <Link className="routerlink">
                                        <li>Plan your trip</li>
                                    </Link>
                                </ul>     
                            </div>
                            <div className="search-bar">
                                    <input 
                                    type="text"
                                    className="search-bar-input" 
                                    placeholder="Find the perfect place to go"
                                    aria-label="search" />
                                    
                                    <button className="search-bar-button"><BsSearch /></button>
                            </div>
                            
                        </div>
                        
                        <button className="btn1">Sign in</button>
                    </div> 
                </div>
            </header>           
        </>
    )
}
