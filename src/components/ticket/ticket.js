import React ,{useState} from 'react'
import './ticket.css'
import {FaAngleDown} from 'react-icons/fa'

export default function Ticket(props) {

    const [toggle, setToggle] =  useState(false)

    function showDetails(){
        const details = document.querySelector('.details')
        const dropdownMenu = document.querySelector('.dropdown-menu')
        const after = document.querySelector('.flight-time')

        if(toggle === false){
            details.classList.add('details-active')
            dropdownMenu.classList.add('dropdown-menu-active')
            after.classList.add('flight-time-active')
            setToggle(true)
        }else{
            details.classList.remove('details-active')
            dropdownMenu.classList.remove('dropdown-menu-active')
            after.classList.remove('flight-time-active')
            setToggle(false)
        }
    }

    return (
        <>
        
            <div className="ticket-info">
                <div className="ticket-wrapper-2">
                    <div className="ticket-details" onClick={showDetails}>
                        <div className="flight-time">
                                <div className="ticket-origin">
                                    <h4>{props.depTime}</h4>
                                    <p>{props.currentAirport}</p>
                                    <p>Prishtine</p>
                                </div>
                                <div className="ticket-route">
                                    <p>Direct</p>
                                    <div></div>
                                    <img src={"https://cdn.turkishairlines.com/m/41d89e4455c4eafb/original/Air-Albania.png"} alt="Air Albania"/>
                                </div>
                                <div className="ticket-destination">
                                    <h4>{props.arrivalTime}</h4>
                                    <p>{props.destinationAirport}</p>
                                    <p>Tirane</p>
                                </div>
                        </div>
                        <div className="flight-duration">
                            <p>Flight Duration</p>
                            <h4>{props.flightDuration}</h4>
                        </div>
                        <div className="details" role="button" >
                            <p>Itienary Details</p>
                            <FaAngleDown/>
                        </div>
                    </div>
                    <div className="ticket-price">
                        <div className="economy-class">
                            <h4>Economy</h4>
                            <div>
                                <p>Per Passanger</p>
                                <h5>{props.price} EUR</h5>
                            </div>
                        </div>
                        <div className="business-class">
                            <h4>Business</h4>
                            <div>
                                <p>Per Passanger</p>
                                <h5>EUR 222.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown-menu">
                    <div className="menu-flight">
                        <h4 className="dropdown-title">Flight</h4>
                        <div className="text-wrapper">
                            <div>
                                <img src={"https://cdn.turkishairlines.com/m/41d89e4455c4eafb/original/Air-Albania.png"}/>
                                <h4>{props.flightNumber}</h4>
                            </div>
                            <h5>{props.airlineName}</h5>
                            <p>{props.planeDetails}</p>
                        </div>
                    </div>
                    <div className="menu-from">
                        <h4 className="dropdown-title">From</h4>
                        <div className="text-wrapper">
                            <h4>{props.depTime}</h4>
                            <h5>Prishtine, {props.currentAirport}</h5>
                            <p>{props.currentAirportName}</p>
                        </div>
                    </div>
                    <div className="menu-to">
                        <h4 className="dropdown-title">To</h4>
                        <div className="text-wrapper">
                            <h4>{props.arrivalTime}</h4>
                            <h5>{props.destinationAirport}</h5>
                            <p>{props.destinationAirportName}</p>
                        </div>
                    </div>
                    <div className="menu-duration">
                        <h4 className="dropdown-title">Duration</h4>
                        <div className="text-wrapper">
                            <h3>{props.flightDuration}</h3>
                        </div>
                    </div>
                </div> 
            </div>  
        </>
    )
}
