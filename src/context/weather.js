import React, {createContext, useState} from "react";

const WeatherContext = createContext({})

export const WeatherProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [background, setBackground] = useState(false)

    const LIST_OF_POSSIBLE_CITIES = [
        {name: "Dallol"}, 
        {name: "Fairbanks"}, 
        {name: "London"}, 
        {name: "Recife"}, 
        {name: "Vancouver"}, 
        {name: "Yakutsk"}
    ]

    const LIST_OF_POSSIBLE_WEATHERS = [
        {name: 'sunny' , background: '--sunny'},
        {name: 'partly cloudy' , background: '--cloudy'},
        {name: 'overcast' , background: '--cloudy'},
        {name: 'light rain', background: '--rain'},
        {name: 'rain', background: '--rain'},
    ]

    function changeWeather(weather) {
        if(!LIST_OF_POSSIBLE_WEATHERS[weather]) return
        setBackground(LIST_OF_POSSIBLE_WEATHERS[weather].background)
    }

    return (
        <WeatherContext.Provider value={{cities_list: LIST_OF_POSSIBLE_CITIES, background, setLoading, changeWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContext