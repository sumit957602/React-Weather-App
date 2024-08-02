import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

function SearchBox () {
    let [city, setCity] = useState("")

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
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