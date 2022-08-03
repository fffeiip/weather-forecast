import React from "react";
import worldwide from '../assets/worldwidewhite.png'
import './css/TownSelect.css'

const CitiesList = ({setCurrentCity}) => {

    const LIST_Of_POSSIBLE_CITIES = [
        {name: "Dallol", country: "(NG)"}, 
        {name: "Fairbanks", country: "(US)"}, 
        {name: "Londres", country: "(GB)"}, 
        {name: "Recife", country: "(BR)"}, 
        {name: "Vancouver", country: "(CA)"}, 
        {name: "Yakutsk", country: "(RU)"}
    ]

    return(
    <div className="grid-container">
        {LIST_Of_POSSIBLE_CITIES.map(city => {
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