import React from 'react'
import './Header.css'
import logo from '../../Images/logo - Copy.png'
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { FaMountain, FaUserAlt, FaLock, FaPhoneAlt, FaUsers} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'


export default function header() {
    function togglePopUp(){
        var modal = document.querySelector('.popup-form');
        var login = document.querySelector('.login-form');

        modal.classList.add('active');
        login.classList.add('login-active');
    }
    function removePopUp() {
        var modal = document.querySelector('.popup-form');
        var login = document.querySelector('.login-form');

        modal.classList.remove('active');
        login.classList.remove('login-active');
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="navigation">
                        <div className="header-wrapper">
                            <Link to='/'><img src={logo} alt="Kosovo Travel"/></Link>
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
                        
                        <button className="btn1" id="btn1" onClick={togglePopUp}>Sign in</button>
                    </div> 
                </div>
                
            </header> 
                <div className="popup-form">
                    <p onClick={removePopUp}>&times;</p>
                    <div className="login-form">
                        <div className="profile-img">
                            <FaMountain/>
                        </div>
                        <h4>Log In</h4>
                        
                        <div className="input">
                            <FaUserAlt/>
                            <input type="text" placeholder="Username" /> 
                        </div>
                        <div className="input">
                            <FaLock/>
                            <input type="password" placeholder="Password"/>  
                        </div>
                    
                        <button class="btn4" type="submit">Sign in</button>
                      
                        <p>Don't have an account? <span>Sign up!</span></p>
                    </div>
                </div>          
        </>
    )
}
