import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation/';

const LocationList = ({ cities, onSeletedLocation }) => {
    const handleWeatherLocationClick = (city) => {
        onSeletedLocation(city);
        console.log("handleWeatherLocationClick");
    };

    return (
        <div>
            {cities.map((city, index) => (
                <WeatherLocation
                    city={city}
                    key={`${index}-${city}`}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)} />
            ))}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSeletedLocation: PropTypes.func
}

export default LocationList;

