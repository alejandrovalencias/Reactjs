import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG } from './../constants/weathers';

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

    if (icon) {
        valueIcon = icon;
    }
    return <WeatherIcons name={valueIcon} size="2x" />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;