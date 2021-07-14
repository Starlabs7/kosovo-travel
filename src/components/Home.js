import React from 'react'
import MainSection from './MainSection/MainSection'
import Carousel from './carousel/Carousel'
import GoogleMapsAPI from './MapSection/GoogleMapsAPI'
import VisitKosovo from './whyKosovo/visitKosovo'
import WeatherCard from './weather/WeatherCard'

export default function Home() {
    return (
        <>
            <MainSection />
            <VisitKosovo />
            <Carousel /> 
            <GoogleMapsAPI />
            <WeatherCard />
        </>
    )
}
