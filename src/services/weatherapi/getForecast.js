import { useEffect, useState, useContext } from "react"
import WeatherContext from "../../context/weather";
import { api } from "./api"



export const transformData = data => {
    const PROPORTIONALITY_RATIO = 3.6;
    const convertKMHtoMPS = kmh => kmh / PROPORTIONALITY_RATIO
    if(!data) return
    let forecastday = data.forecast?.forecastday[0]
    let { maxtemp_c, mintemp_c } = forecastday.day
    let { sunrise, sunset } = forecastday.astro

    return {
        city: data.location.name,
        temperature: {
            current: data.current.temp_c,
            max: maxtemp_c,
            min: mintemp_c,
            dawn: forecastday.hour[3].temp_c,
            morning: forecastday.hour[9].temp_c,
            afternoon: forecastday.hour[15].temp_c,
            night: forecastday.hour[21].temp_c
        },
        condition: {
            icon: {
                current: data.current.condition.icon,
                dawn: forecastday.hour[3].condition.icon,
                morning: forecastday.hour[9].condition.icon,
                afternoon: forecastday.hour[15].condition.icon,
                night: forecastday.hour[21].condition.icon
            },
            text: data.current.condition.text,
        },
        humidity: data.current.humidity,
        sunrise,
        sunset,
        wind_speed: convertKMHtoMPS(data.current.wind_kph).toFixed(1),
    }
   
}

export const useFetchData = city => {
    // @TODO animação de loading
    const [loading, setLoading] = useState(false)
    const {changeBackground} = useContext(WeatherContext)
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            await api.get('', {
                params: {
                    q: city
                }
            }).then(({ data }) => {
                changeBackground(data?.current.condition.text.toLowerCase().split(' ').join(''))
                return transformData(data)
            }
            ).then(weatherData => setWeatherData(weatherData))
        }
        fetchData()
        return () => setLoading(false)
    }, [city])
    return weatherData
}
