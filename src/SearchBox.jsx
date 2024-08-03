import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox () {
    let [city, setCity] = useState("");
    const API_URL = "";
    const API_KEY = "";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?{city}&apiid=${API_KEY}&units=metric)`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            temp: jsonResponse.min.temp,
            temp_min: jsonResponse.min.temp_min,
            temp_max: jsonResponse.min.temp_max,
            humidity: jsonResponse.min.humidity,
            feelsLike: jsonResponse.min.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

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