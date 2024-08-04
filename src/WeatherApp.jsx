import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

function WeatherApp () {
    const [weatherInfo, setWeathernfo] = useState({
        city: '',
        temp: '',
        feelsLike: '',
        tempMin: '',
        tempMax: '',
        humidity: '',
        weather: ''
    });

    let updateInfo = (newInfo) => {
        setWeathernfo(newInfo);
    };


    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}

export default WeatherApp;