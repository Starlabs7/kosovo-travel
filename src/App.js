import React, { useState } from 'react';
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/footer/Footer'

import { fetchWeather } from './components/api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
      <div className="App">
       <Header />
       <MainSection />
      
       
      <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    
                    
                </div>
            )}
        </div>
        <Footer />
    </div>
      
    );
}
export default App;