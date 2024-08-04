import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "830e2117b322102a175abbb4e68cd7e9";

    let getWeatherInfo = async ( ) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        return result;
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
    };

    return <div className='SearchBox'>
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required />
        <br /> <br />
        <Button variant="contained" type='Submit' >Search</Button>
        </form>
    </div>
}

export default SearchBox;