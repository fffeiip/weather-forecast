import React, {useContext} from "react";
import worldwide from '../../assets/worldwidewhite.png'
import './TownSelect.css'
import WeatherContext from "../../context/weather";


const CitiesList = ({setCurrentCity}) => {

    const cities_list = [
        {name: "Dallol"}, 
        {name: "Fairbanks"}, 
        {name: "London"}, 
        {name: "Recife"}, 
        {name: "Vancouver"}, 
        {name: "Yakutsk"}
    ]

    return(
    <div className="grid-container">
        {cities_list.map(city => {
            return( 
                <button className="grid-item" 
                key={`${city.name}${city.country}`}
                onClick={() => setCurrentCity(city.name)}>
                {city.name}
                </button>
            )
        })}
    </div>)
}

function TownSelect({setCurrentCity}) {
    return (
        <>
            <h1>WEATHER</h1>
            <h4>select a city</h4>
            <img src={worldwide}  alt="worldwide" />
            <CitiesList setCurrentCity={setCurrentCity}/>
        </>
    )
}

export default TownSelect