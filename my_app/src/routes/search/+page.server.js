import { SECRET_WEATHER_KEY } from '$env/static/private'
import { getName } from 'country-list'

export const load = async (event) => {
    const API_KEY = SECRET_WEATHER_KEY
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

    const city = event.url.searchParams.get("city")
    if (!city) {
        return {
            error: 'Enter a City!'
        }
    }
    const url = `${BASE_URL}?q=${city}&units=metric&appid=809f25102574af2d97dbd50a4fc37c2d`
    try {
        const res = await fetch(url)
        if (res.ok) {
            const weatherData = await res.json()
            weatherData.country = getName(weatherData.sys.country)
            return { weatherData, error: "" }
        } else if (res.status === 404) {
            return {
                error: `'${city}' could not be found :/`
            } 
        } else {
            console.log(err)
            return { error: "Internal server error" }
        }
    } catch (err) {
        console.log(err)
        return { error: "500 Internal server error" }
    }
}