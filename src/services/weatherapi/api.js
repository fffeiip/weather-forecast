import axios from "axios"

const BASE_URL ="http://api.weatherapi.com/v1/forecast.json"
const KEY = ""

const config = {
    baseURL: BASE_URL,
    params: {
        key: KEY,
        days: 1
    }
}

export const api = axios.create(config)