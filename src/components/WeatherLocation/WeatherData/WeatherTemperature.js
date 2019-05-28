import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG } from './../../../constants/weathers';
import './style.css';

const icons = {
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog',
    [CLOUDY]: 'cloudy',
    [CLOUD]: 'cloud',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    let valueIcon = SUN;
    const sizeIcon = "4x";

    if (icon) {
        valueIcon = icon;
    }
    return <WeatherIcons className="wicon" name={valueIcon} size={sizeIcon} />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}°`}</span> 
        <span className="temperatureType">{`C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;