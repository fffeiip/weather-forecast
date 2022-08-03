import React from "react";
import './css/CityWeather.css'
import {ReactComponent as Arrow} from '../assets/back-arrow-navigation-svgrepo-com.svg'

import {useFetchData}  from '../services/weatherapi/getForecast'



const Weather = ({data}) => {
    
    
    return (
    <>
        <Header data={data} />
        <MainTemperatureInformation data={data} />
        <DayTemperatureForecast data={data}/>
        <Footer data={data}/>
    </>
    )
}

// @TODO arrumar isso
const MainTemperatureInformation = ({data}) => {
    if(!data) return
    let {current, max, min} = data?.temperature
    let icon_location = data?.condition.icon.current

    return (<>
    <div className="temperatures-container">
        <h1 className="currentTemperature">{current}</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: "5vh",
            alignItems: 'flex-start',
            justifyContent: 'center'
        }}>
            <span>ºC</span>
            <TemperatureForecast rotation="90" temperature={max}/>
            <TemperatureForecast rotation="-90" temperature={min}/>

        </div>

    </div>
    <WeatherConditionIcon url={icon_location} /> </>
    )
}

const WeatherConditionIcon = ({url}) => {
    let source = `https:${url}`
    
    return (<img 
        src={source} 
        style={{
            maxWidth: "120px"
        }}
        alt="weather-icon" 
    />)
}

const DayTemperatureForecast = ({data}) => {

    if(!data) return
    let { dawn, morning, afternoon, nigth} = data.temperature
    let icons = data.condition.icon
    
    let day_periods = {
        dawn : {temperature: dawn, icon_location: icons.dawn}, 
        morning: {temperature: morning, icon_location: icons.morning}, 
        afternoon: {temperature: afternoon, icon_location:icons.afternoon}, 
        nigth: {temperature: nigth, icon_location:icons.nigth}
    }

    return (
    <div className="temperatureForecastList">
    {Object.keys(day_periods).map(period => {
        let {icon_location, temperature} = day_periods[period]
        return (
            <div className="temperatureForecastElement">
                <small>{period}</small>
                <WeatherConditionIcon url={icon_location}/>
                <p>{`${Math.floor(temperature)} ºC`}</p>
            </div>
        )
    })}
    </div>
    )

}

const TemperatureForecast = ({temperature, rotation}) => {
    return( 
        <span className="temperatureForecast">
            <Arrow transform={`rotate(${rotation})`} fill="white" width="0.8rem"/> <p>{`${Math.floor(temperature)}º`}</p>
        </span>
    )
}

const Header = ({data}) => {
    return (
        <>
        <h1>{data?.city}</h1>
        <h4>{data?.condition.text.toLowerCase()}</h4>
        </>
    )
}

const Footer = ({data}) => {
    if(!data)return 
    let {sunrise, sunset, humidity, wind_speed} = data
    return(<div className="temperatureForecastList">
        <span className="temperatureForecastElement">
        <small>wind speed</small>
        <small>{wind_speed}m/s</small>
        </span>
        <span className="temperatureForecastElement">
        <small> sunrise</small>
        <small>{sunrise}</small>
        </span>
        <span className="temperatureForecastElement">
        <small>    sunset  </small>
        <small>{sunset}</small>
        </span>
        <span className="temperatureForecastElement">
        <small>humidity</small>
        <small>{humidity}%</small>
        </span>
    </div>)
}

function CityWeather ({city}) {
    const weatherData = useFetchData(city)
    return (<Weather city={city} data={weatherData}/>)
}

export default CityWeather