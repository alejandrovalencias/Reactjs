import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from './../../constants/weathers';

const location = "Buenos Aires";
const api_key = "5050e931fb63ed263c67e1293bceeb49";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const api_weather = encodeURI(`${url_base_weather}?q=${location}&appid=${api_key}`);

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 35,
    wind: "10 m/s"
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Medellin - Colombia',
            data
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(response => {
            return response.json();
        }).then(data => {
            let responseApi = {
                temperature: data.main.temp,
                weatherState: data.weather[0].main,
                humidity: data.main.humidity,
                wind: `${data.wind.speed} m/s`
            }            
            this.setState({ data: responseApi });
        });
    }

    render() {
        return (
            <div className="weatherLocationCont" >
                <Location city={this.state.city} />
                <WeatherData data={this.state.data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

/*const WeatherLocation = () => (
    <div className="weatherLocationCont" >
        <Location city={"Medellín - Colombia"} />
        <WeatherData data={data} />
    </div>
);*/

export default WeatherLocation;