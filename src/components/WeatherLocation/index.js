import React, { Component } from 'react';
//import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './styles.css';
import { SUN } from './../../constants/weathers';

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
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
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