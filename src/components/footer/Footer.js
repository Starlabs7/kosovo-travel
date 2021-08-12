import React from 'react'
import './Footer.css'
import logo2 from '../../Images/logo - Copy.png'
import {Link} from 'react-router-dom'
import {FaArrowUp, FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';


export default function footer() {

    const goUp = () =>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0; 
    }
    return (
        <>
            <footer>
                <div className="container">
                    <div className="top-footer">
                            <div className="footer-logo">
                                <img src={logo2} alt="Kosovo Travel"/>
                            </div>
                            <div className="footer-info">
                                    <div className="site-links">
                                        <h4>Site Links</h4>
                                        <ul>
                                            <li><Link to="/tickets" className="footer-link">Tickets</Link></li>
                                            <li><Link to="/places-to-go" className="footer-link">Places To Go</Link></li>
                                            <li><Link to="/things-to-do" className="footer-link">Things To Do</Link></li>
                                            <li><Link to="/plan-your-trip" className="footer-link">Plan Your Trip</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact">
                                        <h4>Contact us</h4>
                                        <ul>
                                            <li><FiMail/> <Link to="" className="footer-link">starlabsteam7@gmail.com</Link></li>
                                            <li><FaInstagram/> <Link to="" className="footer-link">@team_alpha</Link></li>
                                            <li><FaFacebookSquare/><Link to="" className="footer-link">@team_alpha</Link></li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="button-animation">
                            <button onClick={goUp} class="bounce-button"><FaArrowUp/></button>
                            <h4>Go up!</h4>
                        </div>
                        <p>&copy; July, 2021</p>
                    </div>
                </div>
            </footer>           
        </>
    )
}