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
        var login = document.querySelector('.form-container');

        modal.classList.add('active');
        login.classList.add('login-active');
    }
    function removePopUp() {
        var modal = document.querySelector('.popup-form');
        var login = document.querySelector('.form-container');

        modal.classList.remove('active');
        login.classList.remove('login-active');
    }
    function slide(){
        var signup = document.querySelector('.form-wrapper');
        var button = document.querySelector('.toggle');
        
        signup.classList.add('signup-form-active');
        button.classList.add('signup-button-active');
        button.classList.remove('signin-button-active');
    }
    function reverseSlide(){
        var signup = document.querySelector('.form-wrapper');
        var button = document.querySelector('.toggle');
        
        signup.classList.remove('signup-form-active');
        button.classList.remove('signup-button-active');
        button.classList.add('signin-button-active');
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
                                    <Link className="routerlink" to="/places-to-go">
                                        <li>Places to go</li>
                                    </Link>
                                    <Link className="routerlink" to="/things-to-do">
                                    <li>Things to do</li>
                                    </Link>
                                    <Link className="routerlink" to='/plan-your-trip'>
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
                    <div className="form-container">
                        <div className="profile-img">
                            <FaMountain/>
                        </div>
                        <div className="slider">
                            <div role="button" onClick={reverseSlide}>
                                <h4 class="toggle signin-button-active">Log In</h4>
                            </div>
                            <div role="button" onClick={slide}>
                                <h4 class="toggle">Sign up</h4>
                            </div>
                        </div>
                         <div className="form-wrapper">
                            <div className="log-in">
                                <div className="input">
                                    <FaUserAlt/>
                                    <input type="text" placeholder="Username" /> 
                                </div>
                                <div className="input">
                                    <FaLock/>
                                    <input type="password" placeholder="Password"/>  
                                </div>
                                <button class="btn4" type="submit">Sign in</button>
                                <p>Don't have an account? <span onClick={slide}>Sign up!</span></p>
                            </div>
                            <div className="sign-up">
                                <div className="input">
                                    <FaUserAlt/>
                                    <input type="text" placeholder="Username" /> 
                                </div>
                                <div className="input">
                                    <FiMail/>
                                    <input type="email" placeholder="Email" /> 
                                </div>
                                <div className="input">
                                    <FaLock/>
                                    <input type="password" placeholder="Password"/>  
                                </div>
                                <div className="input">
                                    <FaUsers/>
                                    <select id="users">
                                        <option value="tourist">Tourist</option>
                                        <option value="travel-company">Travel Company</option>
                                    </select>
                                </div>
                                <button class="btn4" type="submit">Sign up</button>
                                <p>Already have an account? <span onClick={reverseSlide}>Sign in!</span></p>
                            </div>
                        </div>
                    </div>
                </div>          
        </>
    )
}
