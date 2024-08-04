import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

function WeatherApp () {
    const [weatherInfo, setWeathernfo] = useState({
        city: 'Delhi',
        temp: '34',
        feelslike: '38',
        tempMin: '37',
        tempMax: '30',
        humidity: '60',
        weather: 'Haze',
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