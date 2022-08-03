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

    const LIST_OF_POSSIBLE_WEATHERS = {
        sunny: '--sunny',
        partlycloudy: '--cloudy',
        overcast: '--cloudy',
        lightrain: '--rain',
        rain: '--rain',
        home: '--home',
        mist: '--cloudy',
        default: '--clear'
    }
    

    function changeBackground(weather) {
        if(!LIST_OF_POSSIBLE_WEATHERS[weather]) return LIST_OF_POSSIBLE_WEATHERS.default
        console.log(LIST_OF_POSSIBLE_WEATHERS[weather])
        setBackground(LIST_OF_POSSIBLE_WEATHERS[weather])
    }

    return (
        <WeatherContext.Provider value={{cities_list: LIST_OF_POSSIBLE_CITIES, background, setLoading, changeBackground}}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherContext