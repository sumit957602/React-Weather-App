import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "";
    const API_KEY = "830e2117b322102a175abbb4e68cd7e9";

    let getWeatherInfo = async ( ) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        console.log(response);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.min.temp,
            temp_min: jsonResponse.min.temp_min,
            temp_max: jsonResponse.min.temp_max,
            humidity: jsonResponse.min.humidity,
            feelsLike: jsonResponse.min.feels_like,
            weather: jsonResponse.weather,
        };
        return result;
    };



    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    };

    return <div className='SearchBox'>
        <h3>Search for the Weather</h3>
        <form action="">
        <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} required />
        <br /> <br />
        <Button variant="contained" type='Submit' onSubmit={handleSubmit} >Search</Button>
        </form>
    </div>
}

export default SearchBox;