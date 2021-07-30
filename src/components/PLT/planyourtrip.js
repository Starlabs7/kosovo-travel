import React,{useEffect} from 'react'
import "react-router-dom"
import "./planyourtrip.css"
import bg from "../../Images/PLT.jpg"
import {FaArrowRight} from  "react-icons/fa";


export default function PlanYourTrip() {
    return (
        <>
          <div className="bg-image-3">
              <img src={bg}  alt="Man at airport"/>
              <div className="container">
                  <div class="tickets">
                        <div className="quote-section">
                            
                        </div>
                        <div className="tickets-section">
                          <div className="options">
                              <select id="Travelers">
                                <option value="1">1 Traveler</option>
                                <option value="1">2 Travelers</option>
                                <option value="1">3 Travelers</option>
                                <option value="1">4 Travelers</option>
                                <option value="1">5 Travelers</option>
                                <option value="1">6 Travelers</option>
                              </select>

                             
                          </div>
                          <div className="ticket-information">
                              <div className="destination">
                                  
                                  <div className="to">
                                  <p>Cities in Kosovo</p>
                                  <select id="CitiesinKosovo">
                                      
                                <option value="1">Ferizaj</option>
                                <option value="1">Prishtina</option>
                                <option value="1">Gjakova</option>
                                <option value="1">Gjilan</option>
                                <option value="1">Mitrovica</option>
                                <option value="1">Peja</option>
                                <option value="1">Prizeren</option>
                              </select>
                                  </div>
                              </div>
                              <div className="date">
                                    <div className="departure">
                                        <p>Start</p>
                                        <input type="date"></input>
                                        <p></p>
                                    </div>
                                    <div className="return">
                                        <p>End</p>
                                        <input type="date"></input>
                                        <p></p>
                                    </div>
                              </div>
                          </div>
                          <div className="search-button" role="button">
                              <button class="btn4">Plan your trip</button>
                              <FaArrowRight/>
                          </div>
                        </div>
                  </div>
                  
              </div>
          </div>
        </>
    )
}
