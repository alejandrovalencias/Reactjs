import React, { Component } from 'react';
import convert from 'convert-units';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlByCity from './../../services/getUrlWeatherByCity';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: [],
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(0);
    }

    handleUpdateClick = () => {
        const api_weather = getUrlByCity(this.state.city);

        fetch(api_weather).then(response => {
            return response.json();
        }).then(data => {
            let responseApi = {
                temperature: this.getTemp(data.main.temp),
                weatherState: data.weather[0].main.toLowerCase(),
                humidity: data.main.humidity,
                wind: `${data.wind.speed} m/s`
            }
            this.setState({ data: responseApi });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data.wind ?
                    <WeatherData data={data} /> :
                    <CircularProgress />
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

/*const WeatherLocation = () => (
    <div className="weatherLocationCont" >
        <Location city={"Medellín - Colombia"} />
        <WeatherData data={data} />
    </div>
);*/

export default WeatherLocation;