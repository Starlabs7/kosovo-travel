import React from 'react'
import './Footer.css'
import logo from '../../Images/logo - Copy.png'
import logo2 from '../../Images/llogo2.png'


export default function footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="inner-footer">
                        <div className="logo_contanier">
                            <img src={logo2} />
                        </div>
                        <div className="footer-third">
                            <h1>Need Help?</h1>
                            <a href="#"> Terms and Conditions</a>
                            <a href="#"> Privacy Policy</a>
                            <a href="#"> Contact Us</a>
                        </div>  
                    </div>
                </div>
            </footer>           
        </>
    )
}
