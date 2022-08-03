import React from "react"

export const WeatherConditionIcon = ({url}) => {
    let source = `https:${url}`
    
    return (<img 
        src={source} 
        style={{
            maxWidth: "120px"
        }}
        alt="weather-icon" 
    />)
}