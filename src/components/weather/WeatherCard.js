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
    <div className="component">
      <div className="weather-card-wrapper">
        <div className="weather-card">
              <div className="section temp">
                <h3>Current temp</h3>
                <p>{items.temp_c} °C</p>
              </div>
              <div className="section condition">
                <h3>Condition</h3>
                <div class="condition-details">
                  <img src={items.condition?.icon} alt={items.condition?.text} />
                  <h4>{items.condition?.text}</h4> 
                </div>   
              </div>
              <div className="section wind-speed">
                  <h3>Wind speed</h3>
                  <p>{items.wind_kph} km/h</p>
              </div>
              <div className="section forecast" role="button" onClick={() => window.open('https://www.accuweather.com/en/xk/prishtina/298740/weather-forecast/298740')}>
                  <a target="_blank" style={{color: '#fff'}} href="https://www.accuweather.com/en/xk/prishtina/298740/weather-forecast/298740">Forecast</a>
              </div>
        </div>
      </div>

      <div className="quote">
            <div>
                <h2>"Nobody can discover the world for somebody else. Only when we discover it for ourselves does it become common ground and a common bond and we cease to be alone."</h2>
                <p>– Wendell Berry, A Place on Earth</p> 
            </div>
      </div>
    </div>
  );
}
