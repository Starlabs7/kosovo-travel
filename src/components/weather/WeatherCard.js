import React from 'react';
import './WeatherCard.css'

const WeatherCard = (props) =>{
  return(
 <div className="card">
     <div className="location">  
         <h1 className="city">Prishtine</h1>
         <h3 className="country">KS</h3>
         
    </div>

  <img  className="icon"src=""alt="Weather Icon" />
  <h1 className="temp">10 °C</h1>
  <h3 className="condition">Clouds</h3>
 </div>
 
  );
}
export default WeatherCard;