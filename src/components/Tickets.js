import React,{useState} from 'react'
import "react-router-dom"
import "./Tickets.css"
import bg from "../Images/airport-min.jpg"
import Ticket from "./ticket/ticket"
import TicketForm from "./TicketForm"

export default function Tickets() {

    const [tickets, setTickets] = useState()
    const [loading, setLoading] = useState(true);

    const handleOnSubmit = async (formData) =>{
         try{
            const ticketData = await fetch(`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/monthly?origin=${formData.from}&destination=${formData.to}&currency=EUR&length=3&depart_date=${formData.depDate}&return_date=${formData.returnDate}`, {
                "method": "GET",
                "headers": {
                    "x-access-token": "e0081447422aea23c9fba425a6eb65f9",
                    "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
                    "x-rapidapi-key": "765cb47ad5msh0e7fc314a2b9d81p188fb5jsn851cf3088654"
            }});
            const item = await ticketData.json();
            setTickets(item.data);
            console.log(formData);
            console.log(tickets);
        }catch(err){
            console.error(err);
        }finally{
            setLoading(false)
        }
        
        
    }
    
    
    return (
        <>
          <div className="bg-image-3">
              <img src={bg}  alt="Man at airport"/>
              <div className="container">
                  <div class="tickets">
                        <div className="quote-section">
                            <h1>Hey buddy! Where are you <span>Flying</span> to?</h1>
                        </div>
                        <TicketForm  onSubmit={handleOnSubmit}/>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="ticket-section">
                <div className="tickets-wrapper"> 
                    {loading ? null  : (
                        tickets.map(item => (
                            <Ticket  
                             key={item.flightnumber} 
                             flightNumber={item.flightNumber}
                            />
                         ))  
                    )}
                                   
                </div>
              </div>
          </div>
        </>
    )
}
