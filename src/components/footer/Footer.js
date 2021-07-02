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
                    <div className="row">
                      {/* Column1 */}
                      <div className="footer-third">
                      <h4>Services</h4>
                      <ul className="list-unstyled">
                          <li>Tickets</li>
                          <li>Places to go</li>
                          <li>Plan your trip</li>
                      </ul>
                      </div>
                      {/* Column2 */}
                      <div className="footer-third">
                      <h4> Need Help?</h4>
                      <ul className="list-unstyled">
                          <li>Terms and Conditions</li>
                          <li>Privacy Policy</li>
                          <li>Contact Us</li>
                      </ul>
                      </div>
                      {/* Column3 */}
                      <div className="footer-third">
                      <h4> About us</h4>
                      <ul className="list-unstyled">
                         
                          
                      </ul>
                      </div>

                    </div>
                   
                    
                </div>
                </div>
            </footer>           
        </>
    )
}
