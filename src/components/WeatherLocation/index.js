import React, { Component } from 'react';
//import convert from 'convert-units';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: 'Medellin - Colombia',
            data: []
        };
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prepProps, prevState) {
        console.log("componentDidUpdate");
    }

    getTemp = kelvin => {
        return kelvin;
        //return convert(kelvin).from("K").to("C").toFixed(2);
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(response => {
            return response.json();
        }).then(data => {
            let responseApi = {
                temperature: this.getTemp(data.main.temp),
                weatherState: data.weather[0].main,
                humidity: data.main.humidity,
                wind: `${data.wind.speed} m/s`
            }
            this.setState({ data: responseApi });
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" >
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
    city: PropTypes.string.isRequired
}

/*const WeatherLocation = () => (
    <div className="weatherLocationCont" >
        <Location city={"Medellín - Colombia"} />
        <WeatherData data={data} />
    </div>
);*/

export default WeatherLocation;