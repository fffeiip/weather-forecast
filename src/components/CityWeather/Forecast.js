import React from "react"

import { WeatherConditionIcon } from "./WeatherConditionIcon"
import {ReactComponent as Arrow} from '../../assets/back-arrow-navigation-svgrepo-com.svg'

const TemperatureForecast = ({temperature, rotation}) => {
    return( 
        <span className="temperatureForecast">
            <Arrow transform={`rotate(${rotation})`} fill="white" width="0.8rem"/> <p>{`${Math.floor(temperature)}º`}</p>
        </span>
    )
}

export const MainInformation = ({data}) => {
    if(!data) return
    let {current, max, min} = data?.temperature
    let icon_location = data?.condition.icon.current
    
    return (<>
    <div className="temperatures-container">
        <h1 className="currentTemperature">{current}</h1>
        {/* // @TODO arrumar isso */}
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

export const Header = ({ data }) => {
    return (
        <>
            <h1>{data?.city}</h1>
            <h4>{data?.condition.text.toLowerCase()}</h4>
        </>
    )
}

export const Footer = ({ data }) => {
    if (!data) return
    let { sunrise, sunset, humidity, wind_speed } = data
    return (<div className="temperatureForecastList">
        <span className="temperatureForecastElement">
            <small>wind speed</small>
            <small>{wind_speed}m/s</small>
        </span>
        <span className="temperatureForecastElement">
            <small>sunrise</small>
            <small>{sunrise}</small>
        </span>
        <span className="temperatureForecastElement">
            <small>sunset</small>
            <small>{sunset}</small>
        </span>
        <span className="temperatureForecastElement">
            <small>humidity</small>
            <small>{humidity}%</small>
        </span>
    </div>)
}

export const PeriodForecast = ({data}) => {

    if(!data) return
    let { dawn, morning, afternoon, night} = data.temperature
    let icons = data.condition.icon
    
    let day_periods = {
        dawn : {temperature: dawn, icon_location: icons.dawn}, 
        morning: {temperature: morning, icon_location: icons.morning}, 
        afternoon: {temperature: afternoon, icon_location:icons.afternoon}, 
        night: {temperature: night, icon_location:icons.night}
    }

    return (
    <div className="temperatureForecastList">
    {Object.keys(day_periods).map(period => {
        let {icon_location, temperature} = day_periods[period]
        return (
            <div key={period} className="temperatureForecastElement">
                <small>{period}</small>
                <WeatherConditionIcon url={icon_location}/>
                <p>{`${Math.floor(temperature)} ºC`}</p>
            </div>
        )
    })}
    </div>
    )

}

