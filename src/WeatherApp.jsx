import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'Delhi',
        temp: '34',
        feelsLike: '38',
        temp_min: '37',
        temp_max: '30',
        humidity: '60',
        weather: 'Haze',
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}

export default WeatherApp;