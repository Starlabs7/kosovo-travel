import React ,{useState} from 'react'
import './ticket.css'
import {FaAngleDown} from 'react-icons/fa'

export default function Ticket() {

    const [toggle, setToggle] =  useState(false)

    function showDetails(){
        const details = document.querySelector('.details')
        if(toggle === false){
            details.classList.add('details-active')
            setToggle(true)
        }else{
            details.classList.remove('details-active')
            setToggle(false)
        }
    }

    return (
        <>
            <div className="ticket-info">
                <div className="ticket-wrapper-2">
                    <div className="ticket-details">
                        <div className="flight-time">
                                <div className="ticket-origin">
                                    <h4>07:20</h4>
                                    <p>TIA</p>
                                    <p>Tirana</p>
                                </div>
                                <div className="ticket-route">
                                    <p>Direct</p>
                                    <div></div>
                                    <img src={"https://cdn.turkishairlines.com/m/41d89e4455c4eafb/original/Air-Albania.png"} alt="Air Albania"/>
                                </div>
                                <div className="ticket-destination">
                                    <h4>07:20</h4>
                                    <p>TIA</p>
                                    <p>Tirana</p>
                                </div>
                        </div>
                        <div className="flight-duration">
                            <p>Flight Duration</p>
                            <h4>1h 40min</h4>
                        </div>
                        <div className="details" role="button" onClick={showDetails} >
                            <p>Itienary Details</p>
                            <FaAngleDown/>
                        </div>
                    </div>
                    <div className="ticket-price">
                        <div className="economy-class">
                            <h4>Economy</h4>
                            <div>
                                <p>Per Passanger</p>
                                <h5>EUR 225.00</h5>
                            </div>
                        </div>
                        <div className="business-class">
                            <h4>Business</h4>
                            <div>
                                <p>Per Passanger</p>
                                <h5>EUR 333.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown-menu">
                    <div className="menu-flight">
                        <h4>Flight</h4>
                        <div>
                            <img src={"https://cdn.turkishairlines.com/m/41d89e4455c4eafb/original/Air-Albania.png"}/>
                            <h4>TK3</h4>
                        </div>
                        <h4>Turkish Airlines</h4>
                        <p>Boeing 777-300ER Wide-Body</p>
                    </div>
                    <div className="menu-from">
                        <h4>From</h4>
                        <h4>07:05</h4>
                        <h5>Istambul IST</h5>
                        <p>Istambul Airport</p>
                    </div>
                    <div className="menu-to">
                        <h4>To</h4>
                        <h4>11:20</h4>
                        <h5>New Jork JFK</h5>
                        <p>John F. Kennedy</p>
                    </div>
                    <div className="menu-duration">
                        <h4>Duration</h4>
                        <h3>10h 43m</h3>
                    </div>
                </div>
            </div>  
        </>
    )
}
