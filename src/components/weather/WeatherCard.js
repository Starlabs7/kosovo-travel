import React, {useState, useEffect} from 'react'
import './WeatherCard.css'


export default function WeatherCard() {

  useEffect(() => {
    getWeather()
  }, [])

  const [items, setItems] = useState({});

  const getWeather = async () => {
    try{
       const data = await fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Kosovo&days=1", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "765cb47ad5msh0e7fc314a2b9d81p188fb5jsn851cf3088654",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }        
      })
      const items = await data.json();
      setItems(items.current);
      console.log(items);
    }catch(error){
      console.log(error)
    }
  }

  return(
    <div className="">
      <div className="weather-card-wrapper">
        <div className="weather-card">
              <div className="temp">
                <h3>Current temp:</h3>
                <h1>{items.temp_c} °C</h1>
              </div>
              <div className="condition">
                <h3>Condition</h3>
                <img src={items.condition.icon} alt={items.condition.text} />
                <h4>{items.condition.text}</h4> 
              </div>
              <div className="wind-speed">
                  <h3>Wind speed:</h3>
                  <h1>{items.wind_kph} km/h</h1>
              </div>
              <div className="forecast">
              
                  Forecast
             
              </div>
        </div>
      </div>

      <div className="quote">

      </div>
    </div>
  );
}
