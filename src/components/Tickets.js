import React from 'react'
import "react-router-dom"
import "./Tickets.css"
import bg from "../Images/airport.jpg"
import {FaArrowRight} from  "react-icons/fa";


export default function Tickets() {
    return (
        <>
          <div className="bg-image-3">
              <img src={bg}  />
              <div className="container">
                  <div class="tickets">
                        <div className="quote-section">
                            <h1>Hey buddy! Where are you <span>Flying</span> to?</h1>
                        </div>
                        <div className="tickets-section">
                          <div className="options">
                              <label for="passangers"></label>
                              <select id="passangers">
                                <option value="1">1 Passanger</option>
                                <option value="1">2 Passangers</option>
                                <option value="1">3 Passangers</option>
                                <option value="1">4 Passangers</option>
                                <option value="1">5 Passangers</option>
                                <option value="1">6 Passangers</option>
                              </select>

                              <label for="travel-class"></label>
                              <select id="travel-class">
                                <option value="Business Class">Business Class</option>
                                <option value="Fisrt Class">First Class</option>
                                <option value="Economy">Economy</option>
                                <option value="Premium Economy">Premium Economy</option>
                              </select>
                          </div>
                          <div className="ticket-information">
                              <div className="destination">
                                  <div className="from">
                                      <p>FROM</p>
                                      <input value="Germany"></input>
                                      <p>Prishtina</p>
                                  </div>
                                  <div className="to">
                                      <p>TO</p>
                                      <input value="Kosovo"></input>
                                      <p>Prishtina</p>
                                  </div>
                              </div>
                              <div className="date">
                                    <div className="departure">
                                        <p>Departure</p>
                                        <input type="date"></input>
                                        <p>Next</p>
                                    </div>
                                    <div className="return">
                                        <p>Return</p>
                                        <input type="date"></input>
                                        <p>Next</p>
                                    </div>
                              </div>
                          </div>
                          <div className="search-button">
                              <button class="btn4">Search Flights</button>
                              <FaArrowRight/>
                          </div>
                        </div>
                  </div>
              </div>
          </div>
        </>
    )
}
