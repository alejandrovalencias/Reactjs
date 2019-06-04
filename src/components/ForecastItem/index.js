import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => {
    return (<div>
        <div>{weekDay} Hora:{hour}</div>
        <WeatherData data={data} />
    </div>);
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.any.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.any.isRequired
    })
}

export default ForecastItem;