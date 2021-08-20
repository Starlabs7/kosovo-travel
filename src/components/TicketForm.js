import React, {useState} from 'react'
import Input from './Input.js'
import {FaArrowRight} from  "react-icons/fa";
import './ticket/ticket.css'

export default function TicketForm(props) {
    const[errors, setErrors] = useState();
    const[formData, setFormData] = useState({
        from: '',
        to: 'Kosovo',
        depDate: new Date().toISOString().substring(0, 10),
        returnDate: new Date().toISOString().substring(0, 10),
        currentCity: 'City',
        destinationCity:'Prishtina',
        travelClass:''
    }); 

    const validate = () => {
        const errors = {};

        if (!formData.from) {
          errors.from = "Please type your current location!";
        }
        if (!formData.to) {
          errors.to = "Please type your destination!";
        }
        if(!formData.depDate){
            errors.depDate="Please select the date of your departure"
        }
        if(!formData.returnDate){
            errors.returnDate="Please select the date of your return"
        }
    
        return errors;
    };

    const handleOnChange  = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    const handleOnSubmit = (event) => {

        event.preventDefault();
        const errors = validate();
        
        if (Object.keys(errors).length !== 0) {
          setErrors(errors);
          return;
        }

    
        props.onSubmit(formData);

    };

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () =>{
        const button = document.querySelector('.search-button')
        if(toggle === false){
            button.classList.add('search-button-active')
            setToggle(true)
        }else{
            button.classList.remove('search-button-active')
            setToggle(false)
        }
    }
    // const addDays = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name] :  event.target.value.setDate(event.target.value.getDate() + 1) 
    //     })
    // }
    // const removeDays = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name] :  event.target.value.setDate(event.target.value.getDate() - 1) 
    //     })
    // }

    return (
        <>
            <form className="tickets-section" onSubmit={handleOnSubmit}>
                          <div className="options">
                              <select id="passangers">
                                <option value="1">1 Passanger</option>
                                <option value="1">2 Passangers</option>
                                <option value="1">3 Passangers</option>
                                <option value="1">4 Passangers</option>
                                <option value="1">5 Passangers</option>
                                <option value="1">6 Passangers</option>
                              </select>

                              <select id="travel-class" onChange={handleOnChange}>
                                <option value={0}>Business Class</option>
                                <option value={1}>First Class</option>
                                <option value="Economy">Economy</option>
                                <option value="Premium Economy">Premium Economy</option>
                              </select>
                          </div>
                          <div className="ticket-information">
                              <div className="destination">
                                  <Input
                                       type="text"
                                       className="from"
                                       label="From"
                                       error={errors?.from}
                                       onChange={handleOnChange}
                                       name="from"
                                       value={formData.from}
                                       city={formData.currentCity}
                                    />
                                    <Input
                                       type="text"
                                       className="to"
                                       label="To"
                                       error={errors?.to}
                                       onChange={handleOnChange}
                                       name="to"
                                       value={formData.to}
                                       city={formData.destinationCity}      
                                    />
                                  
                              </div>
                              <div className="date">
                                    <Input
                                       type="date"
                                       id="date"
                                       className="departure"
                                       label="Departure"
                                       error={errors?.depDate}
                                       onChange={handleOnChange}
                                       name="depDate"
                                       value={formData.depDate}
                                       dateButton="date-button"
                                     
                                    />
                                    <Input
                                       type="date"
                                       id="date"
                                       className="return"
                                       label="Return"
                                       error={errors?.returnDate}
                                       onChange={handleOnChange}
                                       name="returnDate"
                                       value={formData.returnDate}
                                       dateButton="date-button"
                                    
                                    />
                              </div>
                          </div>
                          <div className="search-button" role="button" onClik={triggerToggle}>
                              <button class="btn4"><span>Search Flights</span> <span><FaArrowRight/></span></button>       
                          </div>
                        </form>
        </>
    )
}
