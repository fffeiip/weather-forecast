import React from "react";
import './CityWeather.css'
import {useFetchData}  from '../../services/weatherapi/getForecast'
import { Header, Footer, MainInformation, PeriodForecast } from "./Forecast";



function CityWeather ({city}) {
    const weatherData = useFetchData(city)
    return (<>
        <Header data={weatherData} />
        <MainInformation  data={weatherData} />
        <PeriodForecast data={weatherData}/>
        <Footer data={weatherData}/>
    </>)
}

export default CityWeather